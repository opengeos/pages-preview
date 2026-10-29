// src/api/errors.ts
var EpidBotApiError = class extends Error {
	constructor(message, opts = {}) {
		super(message);
		this.name = "EpidBotApiError";
		this.status = opts.status;
		this.detail = opts.detail;
		this.kind = opts.kind ?? (opts.status !== void 0 ? "http" : "network");
	}
};
/** 401 — missing, unknown or revoked API key. */
var EpidBotAuthError = class extends EpidBotApiError {};
/** 403 — the plan does not include API keys (Max/Team gate). */
var EpidBotPlanError = class extends EpidBotApiError {};
/** 429 — quota exceeded. */
var EpidBotQuotaError = class extends EpidBotApiError {};
/** The caller aborted a pending question (stop button, panel close). */
var ChatCancelledError = class extends EpidBotApiError {};
function isAborted(signal) {
	return signal?.aborted ?? false;
}
function throwIfAborted(signal) {
	if (isAborted(signal)) throw new ChatCancelledError("Chat request cancelled.");
}
// src/api/client.ts
/** HTTP client for the EpidBot REST API (API-key authentication).
*
* Port of the QGIS plugin's core/api_client.py to fetch, so both speak the
* same contract against the production host:
*
* - GET  /api/v1/auth/me                      — connection test
* - POST /api/v1/chat                         — submit a question, get a job id
* - GET  /api/v1/chat/{job_id}                — poll until the answer completes
* - GET/POST /api/v1/sessions                 — list/create sessions
* - GET  /api/v1/sessions/{id}/messages       — session history
* - GET  /api/v1/sessions/plots/{filename}    — authenticated plot download
*
* Transient failures (network errors, HTTP 502/503/504) are retried with
* exponential backoff. Polling grows the interval by 1.15x up to a cap, like
* the QGIS plugin. All waits honor the caller's AbortSignal.
*/
var DEFAULT_SERVER_URL = "https://api.epidbot.kwar-ai.com.br";
var API_PREFIX = "/api/v1";
var RETRYABLE_STATUS_CODES = /* @__PURE__ */ new Set([
	502,
	503,
	504
]);
function normalizeServerUrl(url) {
	const trimmed = (url ?? "").trim().replace(/\/+$/, "");
	if (trimmed && !trimmed.includes("://")) return "https://" + trimmed;
	return trimmed;
}
function errorForStatus(status, detail) {
	if (status === 401) return new EpidBotAuthError(`EpidBot API error (HTTP 401): ${detail}`, {
		status,
		detail
	});
	if (status === 403) return new EpidBotPlanError(`EpidBot API error (HTTP 403): ${detail}`, {
		status,
		detail
	});
	if (status === 429) return new EpidBotQuotaError(`EpidBot API error (HTTP 429): ${detail}`, {
		status,
		detail
	});
	return new EpidBotApiError(`EpidBot API error (HTTP ${status}): ${detail}`, {
		status,
		detail
	});
}
var EpidBotClient = class EpidBotClient {
	constructor(opts) {
		this.serverUrl = normalizeServerUrl(opts.serverUrl || "https://api.epidbot.kwar-ai.com.br");
		this.getApiKey = opts.getApiKey;
		this.pollIntervalMs = opts.pollIntervalMs ?? 1500;
		this.pollMaxIntervalMs = opts.pollMaxIntervalMs ?? 5e3;
		this.chatTimeoutMs = opts.chatTimeoutMs ?? 6e5;
		this.maxRetries = Math.max(opts.maxRetries ?? 2, 0);
		this.retryBaseDelayMs = opts.retryBaseDelayMs ?? 500;
		this.fetchImpl = opts.fetchImpl ?? ((...args) => globalThis.fetch(...args));
		this.passSignalToFetch = opts.passSignalToFetch ?? true;
		this.sleep = opts.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
	}
	setServerUrl(url) {
		this.serverUrl = normalizeServerUrl(url || "https://api.epidbot.kwar-ai.com.br");
	}
	getServerUrl() {
		return this.serverUrl;
	}
	/** A clone of this client that sends a different API key (used by the
	* settings panel to test a not-yet-saved key), optionally against a
	* not-yet-saved server URL. Shares the transport and timing options;
	* retries are disabled for one-off calls. */
	withApiKey(apiKey, serverUrl) {
		return new EpidBotClient({
			serverUrl: serverUrl ?? this.serverUrl,
			getApiKey: () => apiKey,
			pollIntervalMs: this.pollIntervalMs,
			pollMaxIntervalMs: this.pollMaxIntervalMs,
			chatTimeoutMs: this.chatTimeoutMs,
			maxRetries: 0,
			retryBaseDelayMs: this.retryBaseDelayMs,
			fetchImpl: this.fetchImpl,
			sleep: this.sleep
		});
	}
	authHeaders() {
		const key = this.getApiKey();
		return key ? { "X-API-Key": key } : {};
	}
	endpoint(path) {
		if (!this.serverUrl) throw new EpidBotApiError("EpidBot server URL is not configured.");
		return `${this.serverUrl}${API_PREFIX}${path}`;
	}
	async errorDetail(response) {
		try {
			const payload = await response.json();
			if (payload && typeof payload === "object") {
				const record = payload;
				const detail = record.detail ?? record.message;
				if (detail !== void 0 && detail !== null) return String(detail);
				return JSON.stringify(payload).slice(0, 300);
			}
			return String(payload).slice(0, 300);
		} catch {
			return "unknown error";
		}
	}
	async request(method, path, opts = {}) {
		const url = this.endpoint(path);
		const attempts = this.maxRetries + 1;
		let lastError;
		for (let attempt = 0; attempt < attempts; attempt += 1) {
			throwIfAborted(opts.signal);
			let response;
			const fetchSignal = this.passSignalToFetch ? opts.signal : void 0;
			try {
				response = await this.fetchImpl(url, {
					method,
					headers: {
						...opts.json !== void 0 ? { "Content-Type": "application/json" } : {},
						...this.authHeaders()
					},
					body: opts.json !== void 0 ? JSON.stringify(opts.json) : void 0,
					signal: fetchSignal
				});
			} catch (err) {
				if (opts.signal?.aborted) throw new ChatCancelledError("Chat request cancelled.");
				lastError = new EpidBotApiError(`Could not reach EpidBot at ${url}: ${err instanceof Error ? err.message : String(err)}`, { kind: "network" });
				if (attempt + 1 < attempts) {
					await this.sleep(this.retryBaseDelayMs * 2 ** attempt);
					continue;
				}
				throw lastError;
			}
			if (RETRYABLE_STATUS_CODES.has(response.status) && attempt + 1 < attempts) {
				await this.sleep(this.retryBaseDelayMs * 2 ** attempt);
				continue;
			}
			if (response.status >= 400) {
				const detail = await this.errorDetail(response);
				throw errorForStatus(response.status, detail);
			}
			const text = await response.text();
			if (!text) return {};
			try {
				return JSON.parse(text);
			} catch {
				throw new EpidBotApiError(`EpidBot returned a non-JSON response for ${path}.`, { kind: "http" });
			}
		}
		throw lastError ?? new EpidBotApiError("EpidBot request failed.", { kind: "network" });
	}
	/** Verify the API key against GET /auth/me; returns the user payload. */
	checkAuth(signal) {
		return this.request("GET", "/auth/me", { signal });
	}
	listSessions(signal) {
		return this.request("GET", "/sessions", { signal });
	}
	createSession(name, signal) {
		return this.request("POST", "/sessions", {
			json: { name: name ?? null },
			signal
		});
	}
	getMessages(sessionId, signal) {
		return this.request("GET", `/sessions/${encodeURIComponent(String(sessionId))}/messages`, { signal });
	}
	/** A signal-aware wait for the poll loop: resolves after ms, or rejects
	* as soon as the caller aborts — no zombie polls after Stop. */
	waitOrAbort(ms, signal) {
		if (signal?.aborted) return Promise.reject(new ChatCancelledError("Chat request cancelled."));
		if (!signal) return this.sleep(ms);
		let onAbort = () => {};
		const cancelled = new Promise((_, reject) => {
			onAbort = () => reject(new ChatCancelledError("Chat request cancelled."));
			signal.addEventListener("abort", onAbort, { once: true });
		});
		return Promise.race([this.sleep(ms), cancelled]).finally(() => {
			signal.removeEventListener("abort", onAbort);
		});
	}
	/** Submit the question and poll until the answer completes. */
	async ask(message, opts = {}) {
		const submitted = await this.request("POST", "/chat", {
			json: {
				message,
				session_id: opts.sessionId ?? null,
				locale: opts.locale ?? "en",
				...opts.artifactIds && opts.artifactIds.length > 0 ? { artifact_ids: opts.artifactIds.map((id) => Math.trunc(id)) } : {}
			},
			signal: opts.signal
		});
		const jobId = submitted.job_id;
		if (!jobId) throw new EpidBotApiError("EpidBot did not return a job id.", { kind: "http" });
		const submittedSession = submitted.session_id ?? null;
		opts.onSubmitted?.(jobId, submittedSession);
		const deadline = Date.now() + this.chatTimeoutMs;
		let wait = this.pollIntervalMs;
		while (true) {
			throwIfAborted(opts.signal);
			if (Date.now() > deadline) throw new EpidBotApiError(`EpidBot did not answer within ${Math.round(this.chatTimeoutMs / 1e3)} seconds.`, { kind: "timeout" });
			opts.onStatus?.(jobId);
			const status = await this.request("GET", `/chat/${encodeURIComponent(jobId)}`, { signal: opts.signal });
			if (status.status === "completed") return {
				sessionId: status.session_id ?? submittedSession ?? opts.sessionId ?? null,
				content: status.content ?? "",
				images: status.images ?? []
			};
			if (status.status === "failed" || status.status === "cancelled") throw new EpidBotApiError(status.error || "The chat job failed on the server.", {
				kind: "job",
				detail: status.status
			});
			await this.waitOrAbort(wait, opts.signal);
			wait = Math.min(wait * 1.15, this.pollMaxIntervalMs);
		}
	}
	/** Turn an image reference ("plots/foo.png" or a full URL) into the bare
	* filename served by GET /sessions/plots/{filename}. */
	static extractPlotFilename(imageRef) {
		let ref = (imageRef ?? "").trim();
		if (ref.includes("://")) {
			ref = ref.split("?", 1)[0];
			const slash = ref.lastIndexOf("/");
			if (slash !== -1) ref = ref.slice(slash + 1);
		}
		for (const prefix of [
			"plots/",
			"/plots/",
			"plots\\"
		]) if (ref.startsWith(prefix)) {
			ref = ref.slice(prefix.length);
			break;
		}
		const slash = ref.lastIndexOf("/");
		return slash === -1 ? ref : ref.slice(slash + 1);
	}
	/** URL of an authenticated plot download (fetch as blob, not <img src>). */
	plotUrl(filename) {
		return this.endpoint(`/sessions/plots/${encodeURIComponent(filename)}`);
	}
	/** Download an agent-generated plot as a blob (auth included). Plain
	* `<img src>` cannot send the X-API-Key header, so plots are fetched as
	* blobs and shown through object URLs. */
	async fetchPlot(filename, signal) {
		const url = this.endpoint(`/sessions/plots/${encodeURIComponent(filename)}`);
		const attempts = this.maxRetries + 1;
		for (let attempt = 0; attempt < attempts; attempt += 1) {
			throwIfAborted(signal);
			let response;
			try {
				response = await this.fetchImpl(url, {
					method: "GET",
					headers: this.authHeaders(),
					signal: this.passSignalToFetch ? signal : void 0
				});
			} catch (err) {
				if (signal?.aborted) throw new ChatCancelledError("Chat request cancelled.");
				if (attempt + 1 < attempts) {
					await this.sleep(this.retryBaseDelayMs * 2 ** attempt);
					continue;
				}
				throw new EpidBotApiError(`Could not download plot ${filename}: ${err instanceof Error ? err.message : String(err)}`, { kind: "network" });
			}
			if (RETRYABLE_STATUS_CODES.has(response.status) && attempt + 1 < attempts) {
				await this.sleep(this.retryBaseDelayMs * 2 ** attempt);
				continue;
			}
			if (response.status >= 400) {
				const detail = await this.errorDetail(response);
				throw errorForStatus(response.status, detail);
			}
			return await response.blob();
		}
		throw new EpidBotApiError(`Could not download plot ${filename}.`, { kind: "network" });
	}
	/** True when the URL points at the configured EpidBot server (artifact and
	* plot URLs do); such downloads carry the X-API-Key header. */
	isServerUrl(url) {
		const normalized = normalizeServerUrl(url);
		if (!this.serverUrl || !normalized) return false;
		return normalized.startsWith(this.serverUrl + "/") || normalized === this.serverUrl;
	}
	/** True for EpidBot artifact URLs (…/api/v1/artifacts/{id}) regardless of
	* which server they point at — downloads need authentication. */
	static isArtifactUrl(url) {
		try {
			return new URL(url).pathname.includes(`${API_PREFIX}/artifacts/`);
		} catch {
			return false;
		}
	}
	/** Upload a serialized layer as a server artifact (multipart POST /artifacts).
	* Returns the server response; the artifact id is read from `id` or
	* `artifact_id` by the caller. */
	async uploadArtifact(blob, filename, contentType = "application/geo+json", signal) {
		const url = this.endpoint("/artifacts");
		const part = blob.type ? blob : new Blob([blob], { type: contentType });
		const form = new FormData();
		form.append("file", part, filename);
		let response;
		try {
			response = await this.fetchImpl(url, {
				method: "POST",
				headers: this.authHeaders(),
				body: form,
				signal: this.passSignalToFetch ? signal : void 0
			});
		} catch (err) {
			if (signal?.aborted) throw new ChatCancelledError("Chat request cancelled.");
			throw new EpidBotApiError(`Artifact upload to ${url} failed: ${err instanceof Error ? err.message : String(err)}`, { kind: "network" });
		}
		if (response.status >= 400) {
			const detail = await this.errorDetail(response);
			throw errorForStatus(response.status, `Artifact upload failed: ${detail}`);
		}
		const text = await response.text();
		if (!text) return {};
		try {
			return JSON.parse(text);
		} catch {
			throw new EpidBotApiError("Non-JSON response from artifact upload.", { kind: "http" });
		}
	}
	/** Extract the artifact id from an upload/URL response (`id` or
	* `artifact_id`); null when the server sent neither. */
	static artifactIdFrom(response) {
		for (const key of ["id", "artifact_id"]) {
			const value = response[key];
			const num = Number(value);
			if (value !== void 0 && value !== null && Number.isFinite(num)) return num;
		}
		return null;
	}
	/** Download a (possibly authenticated) resource as a blob. EpidBot artifact
	* and same-server URLs carry the X-API-Key header; foreign URLs stay clean.
	* Bodies larger than maxBytes (default 64 MB) are rejected mid-stream. */
	async downloadWithAuth(url, opts = {}) {
		const maxBytes = opts.maxBytes ?? 67108864;
		const withAuth = EpidBotClient.isArtifactUrl(url) || this.isServerUrl(url);
		const attempts = this.maxRetries + 1;
		for (let attempt = 0; attempt < attempts; attempt += 1) {
			throwIfAborted(opts.signal);
			let response;
			try {
				response = await this.fetchImpl(url, {
					method: "GET",
					headers: withAuth ? this.authHeaders() : {},
					signal: this.passSignalToFetch ? opts.signal : void 0
				});
			} catch (err) {
				if (opts.signal?.aborted) throw new ChatCancelledError("Chat request cancelled.");
				if (attempt + 1 < attempts) {
					await this.sleep(this.retryBaseDelayMs * 2 ** attempt);
					continue;
				}
				throw new EpidBotApiError(`Could not download ${url}: ${err instanceof Error ? err.message : String(err)}`, { kind: "network" });
			}
			if (RETRYABLE_STATUS_CODES.has(response.status) && attempt + 1 < attempts) {
				await this.sleep(this.retryBaseDelayMs * 2 ** attempt);
				continue;
			}
			if (response.status >= 400) {
				const detail = await this.errorDetail(response);
				throw errorForStatus(response.status, detail);
			}
			const length = Number(response.headers.get("content-length") ?? "");
			if (Number.isFinite(length) && length > maxBytes) throw new EpidBotApiError(`Download larger than ${Math.round(maxBytes / 1024 / 1024)} MB: ${url}`);
			const reader = response.body?.getReader();
			if (!reader) return await response.blob();
			const chunks = [];
			let received = 0;
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				received += value.byteLength;
				if (received > maxBytes) {
					reader.cancel();
					throw new EpidBotApiError(`Download larger than ${Math.round(maxBytes / 1024 / 1024)} MB: ${url}`);
				}
				chunks.push(value);
			}
			return new Blob(chunks);
		}
		throw new EpidBotApiError(`Could not download ${url}.`, { kind: "network" });
	}
};
// src/api/mapContext.ts
var DEFAULT_MAP_CONTEXT_BUDGET = {
	maxLayers: 10,
	maxSampleRows: 15,
	maxFieldsPerRow: 5,
	maxValueLength: 40,
	boundsDecimals: 4,
	maxBytes: 8192
};
/** Features scanned to collect field types and sample values. */
var FIELD_SAMPLE_SCAN_LIMIT = 300;
/** Distinct values kept per field; more than this means high-cardinality
* (ids, names) and the field is dropped from the sample list. */
var FIELD_SAMPLE_CAP = 8;
/** Distinct values observed per field for type inference (enough to tell
* integer from number from boolean). */
var TYPE_VALUES_CAP = 50;
/** Maximum number of fields named in the context preamble. */
var MAX_FIELDS_LISTED = 15;
/** Fields rendered with sample values in the preamble. */
var SAMPLE_FIELDS_SHOWN = 4;
/** Sample values shown per field. */
var SAMPLE_VALUES_SHOWN = 5;
var encoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
function byteLength(text) {
	return encoder ? encoder.encode(text).length : text.length;
}
function round(value, decimals) {
	return Number(value.toFixed(decimals));
}
/** Keep primitive-valued properties only; truncate strings. Field order is
* the feature's own insertion order, capped at maxFieldsPerRow. */
function sampleRow(feature, budget) {
	const row = {};
	const properties = feature.properties ?? {};
	for (const [key, value] of Object.entries(properties)) {
		if (Object.keys(row).length >= budget.maxFieldsPerRow) break;
		if (typeof value === "string") row[key] = value.length > budget.maxValueLength ? value.slice(0, budget.maxValueLength) : value;
		else if (typeof value === "number" || typeof value === "boolean" || value === null) row[key] = value;
	}
	return row;
}
/** Infer a field type name from observed values (best effort, like QGIS's
* typeName; unknown/empty fields report "string"). */
function inferFieldType(values) {
	const observed = values.filter((v) => v !== null && v !== void 0);
	if (observed.length === 0) return "string";
	if (observed.every((v) => typeof v === "boolean")) return "boolean";
	if (observed.every((v) => typeof v === "number")) return observed.every((v) => Number.isInteger(v)) ? "integer" : "number";
	return "string";
}
/** Field schemas and categorical sample values from a feature sample.
* Mirrors the QGIS collector: scan at most FIELD_SAMPLE_SCAN_LIMIT features,
* keep at most FIELD_SAMPLE_CAP distinct values per field and drop fields
* that exceed the cap (ids, free text). */
function describeFields(features, maxFields = MAX_FIELDS_LISTED) {
	const order = [];
	const distinct = /* @__PURE__ */ new Map();
	const typeValues = /* @__PURE__ */ new Map();
	const scan = Math.min(features.length, FIELD_SAMPLE_SCAN_LIMIT);
	for (let i = 0; i < scan; i += 1) {
		const properties = features[i].properties;
		if (!properties || typeof properties !== "object") continue;
		for (const [key, value] of Object.entries(properties)) {
			if (!distinct.has(key)) {
				order.push(key);
				distinct.set(key, []);
				typeValues.set(key, []);
			}
			if (value === null || value === void 0) continue;
			const typeObserved = typeValues.get(key);
			if (typeObserved.length < TYPE_VALUES_CAP && (typeof value === "string" || typeof value === "number" || typeof value === "boolean")) typeObserved.push(value);
			const values = distinct.get(key);
			if (values === null || values === void 0) continue;
			const text = String(value).trim();
			if (!text) continue;
			if (!values.includes(text)) {
				if (values.length >= FIELD_SAMPLE_CAP) distinct.set(key, null);
				else values.push(text);
			}
		}
	}
	return {
		fields: order.slice(0, maxFields).map((name) => {
			const values = distinct.get(name);
			const field = {
				name,
				type: inferFieldType(typeValues.get(name) ?? [])
			};
			if (values && values.length > 0) field.samples = values;
			return field;
		}),
		fieldsMore: Math.max(order.length - maxFields, 0)
	};
}
/** Collect the context payload through the host API. Always returns a
* payload (possibly empty); the rendered text decides whether anything is
* attached. A broken or unavailable layer must never kill the prompt. */
function buildMapContext(app, budget = DEFAULT_MAP_CONTEXT_BUDGET) {
	const capped = [...app.listLayers?.() ?? []].sort((a, b) => Number(b.visible) - Number(a.visible)).slice(0, budget.maxLayers);
	const features = app.getSelectedFeatures?.() ?? [];
	const selectedLayerId = app.getSelectedLayerId?.() ?? null;
	const selection = features.length > 0 ? {
		layerId: selectedLayerId,
		count: features.length,
		rows: features.slice(0, budget.maxSampleRows).map((feature) => sampleRow(feature, budget))
	} : null;
	const layers = capped.map((layer) => {
		const entry = {
			id: layer.id,
			name: layer.name,
			type: layer.type,
			visible: layer.visible,
			featureCount: null,
			selectedCount: selection !== null && selection.layerId === layer.id ? selection.count : null,
			fields: [],
			fieldsMore: 0
		};
		try {
			const layerFeatures = app.getLayerFeatures?.(layer.id) ?? [];
			if (layerFeatures.length > 0) {
				entry.featureCount = layerFeatures.length;
				const described = describeFields(layerFeatures);
				entry.fields = described.fields;
				entry.fieldsMore = described.fieldsMore;
			}
		} catch {}
		return entry;
	});
	const rawBounds = app.getViewBounds?.() ?? null;
	const viewBounds = rawBounds ? rawBounds.map((value) => round(value, budget.boundsDecimals)) : null;
	return {
		crs: app.getMapCrs?.()?.code ?? "EPSG:3857 (default Web Mercator)",
		viewBounds,
		layers,
		selection
	};
}
function layerDetailText(layer, detail) {
	const fields = layer.fields ?? [];
	if (detail.layerDetail === "none" || fields.length === 0) return "";
	const parts = fields.map((field) => `${field.name} (${field.type})`);
	if ((layer.fieldsMore ?? 0) > 0) parts.push(`... and ${layer.fieldsMore} more`);
	let text = `    fields: ${parts.join(", ")}`;
	if (detail.layerDetail === "full") {
		const sampleBits = [];
		for (const field of fields.slice(0, SAMPLE_FIELDS_SHOWN)) {
			const values = field.samples ?? [];
			if (values.length === 0) continue;
			const shown = values.slice(0, SAMPLE_VALUES_SHOWN);
			const suffix = values.length > SAMPLE_VALUES_SHOWN ? ", ..." : "";
			sampleBits.push(`${field.name} in {${shown.join(", ")}${suffix}}`);
		}
		if (sampleBits.length > 0) text += `\n    sample values: ${sampleBits.join("; ")}`;
	}
	return text;
}
/** Render the preamble at a given level of detail ("" when nothing to say). */
function renderContext(payload, detail) {
	const sections = [];
	if (payload.layers.length > 0) {
		const shown = payload.layers.slice(0, detail.maxLayers);
		const lines = shown.map((layer) => {
			let desc = `"${layer.name}" (${layer.type || "unknown type"}`;
			if (!layer.visible) desc += ", hidden";
			if (layer.featureCount != null) desc += `, ${layer.featureCount.toLocaleString("en-US")} features`;
			if (layer.selectedCount) desc += `, ${layer.selectedCount.toLocaleString("en-US")} selected`;
			desc += ")";
			const detailText = layerDetailText(layer, detail);
			return detailText ? `  - ${desc}\n${detailText}` : `  - ${desc}`;
		});
		if (payload.layers.length > shown.length) lines.push(`  - ... and ${payload.layers.length - shown.length} more layers`);
		sections.push("Active layers:\n" + lines.join("\n"));
	}
	if (payload.viewBounds) {
		const [west, south, east, north] = payload.viewBounds.map((value) => round(value, detail.boundsDecimals));
		sections.push(`Map extent: ${west},${south} to ${east},${north} (${payload.crs})`);
	}
	if (detail.includeSelection && payload.selection && payload.selection.rows.length > 0) {
		const selection = payload.selection;
		const layerPart = selection.layerId ? ` from layer "${selection.layerId}"` : "";
		const rows = selection.rows.slice(0, detail.sampleRows).map((row) => `  - ${JSON.stringify(row)}`);
		const more = selection.count > rows.length ? `\n  - ... and ${selection.count - rows.length} more` : "";
		sections.push(`Selected features: ${selection.count}${layerPart}; sample properties:\n${rows.join("\n")}${more}`);
	}
	if (sections.length === 0) return "";
	return "[Map context] " + sections.join("\n");
}
/** Reduction stages, from full detail to minimal, applied while over budget. */
var STAGES = [
	{
		maxLayers: Infinity,
		sampleRows: Infinity,
		includeSelection: true,
		boundsDecimals: 4,
		layerDetail: "full"
	},
	{
		maxLayers: Infinity,
		sampleRows: 5,
		includeSelection: true,
		boundsDecimals: 4,
		layerDetail: "fields"
	},
	{
		maxLayers: Infinity,
		sampleRows: 5,
		includeSelection: false,
		boundsDecimals: 4,
		layerDetail: "none"
	},
	{
		maxLayers: 5,
		sampleRows: 2,
		includeSelection: false,
		boundsDecimals: 2,
		layerDetail: "none"
	},
	{
		maxLayers: 3,
		sampleRows: 0,
		includeSelection: false,
		boundsDecimals: 2,
		layerDetail: "none"
	}
];
/** Render the preamble within the budget's byte cap. Returns "" when the
* payload has nothing to report. */
function buildContextText(payload, budget = DEFAULT_MAP_CONTEXT_BUDGET) {
	for (const stage of STAGES) {
		const text = renderContext(payload, stage);
		if (text === "") return "";
		if (byteLength(text) <= budget.maxBytes) return text;
	}
	return renderContext(payload, STAGES[STAGES.length - 1]).slice(0, budget.maxBytes);
}
/** Prepend the preamble to a question. */
function attachContext(question, preamble) {
	return preamble ? `${preamble}\n\n${question}` : question;
}
var FENCE_OPEN = /^```([A-Za-z0-9_+-]*)[ \t]*$/;
var FENCE_CLOSE = /^```\s*$/;
var URL_RE = /https?:\/\/[^\s<>"`')\]]+/g;
/** EpidBot artifact URLs are loadable layers even without a known extension. */
var ARTIFACT_PATH = "/api/v1/artifacts/";
/** Iterate fenced blocks (```lang … ```) in document order; runs of an
* unterminated fence are passed too (like the QGIS regex). */
function forEachFence(text, visit) {
	const lines = text.replace(/\r\n?/g, "\n").split("\n");
	let lang = null;
	let code = [];
	for (const line of lines) {
		if (lang !== null) {
			if (FENCE_CLOSE.test(line)) {
				visit(lang, code.join("\n"));
				lang = null;
				code = [];
			} else code.push(line);
			continue;
		}
		const open = FENCE_OPEN.exec(line);
		if (open) {
			lang = open[1] ?? "";
			code = [];
		}
	}
	if (lang !== null) visit(lang, code.join("\n"));
}
function normalizeGeometryType(type) {
	if (typeof type !== "string" || type === "") return "none";
	return type.startsWith("Multi") ? type.slice(5) : type;
}
/** Validate parsed JSON as a FeatureCollection (or a single Feature, which
* is wrapped). Returns a reason when the block should not reach the map. */
function validateGeoJson(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return {
		ok: false,
		reason: "not an object"
	};
	const record = value;
	let features;
	if (record.type === "FeatureCollection") {
		if (!Array.isArray(record.features)) return {
			ok: false,
			reason: "features is not an array"
		};
		features = record.features;
	} else if (record.type === "Feature") features = [record];
	else return {
		ok: false,
		reason: `unsupported type: ${String(record.type)}`
	};
	if (features.length === 0) return {
		ok: false,
		reason: "empty feature collection"
	};
	if (features.length > 5e4) return {
		ok: false,
		reason: `too many features (${features.length})`
	};
	const counts = /* @__PURE__ */ new Map();
	const normalized = [];
	for (const item of features) {
		if (!item || typeof item !== "object" || Array.isArray(item)) return {
			ok: false,
			reason: "feature is not an object"
		};
		const feature = item;
		if (feature.type !== "Feature" && feature.type !== void 0) return {
			ok: false,
			reason: `unsupported feature type: ${String(feature.type)}`
		};
		const geometry = feature.geometry;
		if (geometry !== null && geometry !== void 0) {
			if (typeof geometry !== "object" || Array.isArray(geometry)) return {
				ok: false,
				reason: "geometry is not an object"
			};
		}
		const kind = normalizeGeometryType(geometry?.type);
		counts.set(kind, (counts.get(kind) ?? 0) + 1);
		normalized.push({
			type: "Feature",
			geometry: geometry ?? null,
			properties: (feature.properties ?? null) === null ? {} : feature.properties
		});
	}
	return {
		ok: true,
		fc: {
			type: "FeatureCollection",
			features: normalized
		},
		featureCount: features.length,
		geometryTypes: [...counts.entries()]
	};
}
function parseGeoJsonFence(lang, code) {
	const lower = lang.trim().toLowerCase();
	if (lower !== "geojson" && lower !== "json") return null;
	let parsed;
	try {
		parsed = JSON.parse(code);
	} catch {
		return null;
	}
	const validation = validateGeoJson(parsed);
	if (!validation.ok || !validation.fc) return null;
	return {
		kind: "geojson",
		fc: validation.fc,
		featureCount: validation.featureCount ?? 0,
		geometryTypes: validation.geometryTypes ?? []
	};
}
function isTileUrl(url) {
	return /\{[-z]\}\/\{[-x]\}\/\{[-y]\}/i.test(url);
}
function isGeoJsonUrl(url) {
	if (/\.geojson(\?|#|$)/i.test(url)) return true;
	if (/format=geojson/i.test(url)) return true;
	const path = url.split("?", 1)[0].split("#", 1)[0];
	return /\.json$/i.test(path) && /geo/i.test(url);
}
/** The id path segment of an EpidBot artifact URL, or null. */
function artifactIdFromUrl(url) {
	try {
		const path = new URL(url).pathname.replace(/\/+$/, "");
		if (!path.includes(ARTIFACT_PATH)) return null;
		return path.slice(path.lastIndexOf("/") + 1) || null;
	} catch {
		return null;
	}
}
/** CSV URLs become spatial layers client-side when coordinate columns exist. */
function isCsvUrl(url) {
	const path = url.split("?", 1)[0].split("#", 1)[0];
	return /\.csv$/i.test(path);
}
function classifyUrl(url) {
	if (artifactIdFromUrl(url) !== null) return {
		kind: "url",
		url: url.replace(/[.,;:!?)'"]+$/, ""),
		urlKind: "geojson",
		artifact: true
	};
	if (!url.startsWith("https://")) return null;
	if (isTileUrl(url)) return {
		kind: "url",
		url,
		urlKind: "tiles"
	};
	if (isGeoJsonUrl(url)) return {
		kind: "url",
		url,
		urlKind: "geojson"
	};
	if (isCsvUrl(url)) return {
		kind: "url",
		url,
		urlKind: "csv"
	};
	return null;
}
/** Extract map-worthy blocks from an answer. GeoJSON fences come first (in
* document order), then data URLs (deduplicated, capped). */
function extractResultBlocks(text, maxUrlBlocks = 5) {
	if (!text) return [];
	const blocks = [];
	const fenceRanges = [];
	const lines = text.replace(/\r\n?/g, "\n").split("\n");
	let offset = 0;
	let fence = null;
	for (const line of lines) {
		const lineStart = offset;
		offset += line.length + 1;
		if (fence) {
			if (FENCE_CLOSE.test(line)) {
				const block = parseGeoJsonFence(fence.lang, fence.code.join("\n"));
				if (block) blocks.push(block);
				fenceRanges.push([fence.start, lineStart + line.length]);
				fence = null;
			} else fence.code.push(line);
			continue;
		}
		const open = FENCE_OPEN.exec(line);
		if (open) fence = {
			lang: open[1] ?? "",
			code: [],
			start: lineStart
		};
	}
	const outside = fenceRanges.reduce((acc, [start, end]) => acc.slice(0, start) + " ".repeat(end - start) + acc.slice(end), text);
	const seen = /* @__PURE__ */ new Set();
	for (const match of outside.matchAll(URL_RE)) {
		if (blocks.filter((b) => b.kind === "url").length >= maxUrlBlocks) break;
		const block = classifyUrl(match[0]);
		if (block && !seen.has(block.url)) {
			seen.add(block.url);
			blocks.push(block);
		}
	}
	return blocks;
}
/** "Point ×12, Polygon ×3" summary for a result card. */
function geometrySummary(types) {
	return types.map(([type, count]) => `${type} ×${count}`).join(", ");
}
/** Extract attribute edit operations from ```epidbot-edit blocks.
*
* Malformed blocks are skipped (never fail the whole message); structural
* validation happens in api/layerEditor.validateEditOp.
*/
function extractEditOps(text) {
	const ops = [];
	forEachFence(text ?? "", (lang, code) => {
		if (lang.trim().toLowerCase() !== "epidbot-edit") return;
		const content = code.trim();
		if (!content) return;
		let data;
		try {
			data = JSON.parse(content);
		} catch {
			return;
		}
		if (Array.isArray(data)) ops.push(...data.filter((item) => item !== null && typeof item === "object" && !Array.isArray(item)));
		else if (data !== null && typeof data === "object") ops.push(data);
	});
	return ops;
}
/** ColorBrewer YlGnBu, 5-class — legible over standard basemaps. */
var CHOROPLETH_COLORS = [
	"#eff3ff",
	"#bdd7e7",
	"#6baed6",
	"#3182bd",
	"#08519c"
];
/** Quantile breaks including both ends (min..max). Returns null when the
* values cannot support CLASS_COUNT distinct classes. */
function quantileBreaks(values, classCount = 5) {
	if (values.length < classCount) return null;
	const sorted = [...values].sort((a, b) => a - b);
	const breaks = [];
	for (let k = 0; k < classCount; k += 1) {
		const position = k * (sorted.length - 1) / (classCount - 1);
		const lower = Math.floor(position);
		const upper = Math.ceil(position);
		const value = lower === upper ? sorted[lower] : sorted[lower] + (sorted[upper] - sorted[lower]) * (position - lower);
		breaks.push(value);
	}
	if (new Set(breaks).size < classCount) return null;
	return breaks;
}
/** Find the numeric property with the highest coverage across features. */
function dominantNumericProperty(fc) {
	const counts = /* @__PURE__ */ new Map();
	const features = fc.features;
	for (const feature of features) {
		const properties = feature.properties ?? {};
		for (const [key, value] of Object.entries(properties)) {
			if (typeof value !== "number" || !Number.isFinite(value)) continue;
			const entry = counts.get(key) ?? {
				count: 0,
				values: []
			};
			entry.count += 1;
			entry.values.push(value);
			counts.set(key, entry);
		}
	}
	let best = null;
	for (const [property, { count, values }] of counts) if (!best || count > best.count) best = {
		property,
		count,
		values
	};
	if (!best || best.count === 0) return null;
	return {
		property: best.property,
		values: best.values,
		coverage: best.count / Math.max(features.length, 1)
	};
}
function dominantGeometry(fc) {
	const counts = /* @__PURE__ */ new Map();
	for (const feature of fc.features) {
		const type = feature.geometry?.type ?? "";
		const kind = type.startsWith("Multi") ? type.slice(5) : type || "point";
		counts.set(kind, (counts.get(kind) ?? 0) + 1);
	}
	let best = "point";
	let bestCount = -1;
	for (const [kind, count] of counts) if (count > bestCount) {
		best = kind;
		bestCount = count;
	}
	if (best === "LineString") return "line";
	if (best === "Polygon") return "polygon";
	return "point";
}
/** Uniform style per dominant geometry (EpidBot blue). */
function defaultStyle(geometry) {
	switch (geometry) {
		case "polygon": return {
			fill: {
				"fill-color": "#2456a6",
				"fill-opacity": .45
			},
			line: {
				"line-color": "#1c4688",
				"line-width": 1
			}
		};
		case "line": return { line: {
			"line-color": "#2456a6",
			"line-width": 2
		} };
		case "point": return { circle: {
			"circle-color": "#2456a6",
			"circle-radius": 5,
			"circle-opacity": .8
		} };
	}
}
/** 5-class quantile choropleth for polygons, using a data-driven fill. */
function choroplethStyle(property, breaks) {
	const stops = [];
	breaks.forEach((value, index) => {
		stops.push(value, CHOROPLETH_COLORS[index]);
	});
	return {
		fill: {
			"fill-color": [
				"interpolate",
				["linear"],
				["to-number", ["get", property]],
				...stops
			],
			"fill-opacity": .7
		},
		line: {
			"line-color": "#333333",
			"line-width": .5,
			"line-opacity": .8
		}
	};
}
/** Build the style text for a result FeatureCollection: choropleth when the
* geometry is polygonal and a numeric property classifies cleanly, otherwise
* the uniform default. Serialized for importLayerStyle. */
function styleFor(fc) {
	const geometry = dominantGeometry(fc);
	let style;
	if (geometry === "polygon") {
		const summary = dominantNumericProperty(fc);
		const breaks = summary ? quantileBreaks(summary.values) : null;
		style = summary && breaks ? choroplethStyle(summary.property, breaks) : defaultStyle(geometry);
	} else style = defaultStyle(geometry);
	return JSON.stringify(style);
}
// src/assistant.ts
var GUIDANCE = [
	"ask_epidbot answers epidemiological questions with EpidBot (public health",
	"and epidemiological data from Brazilian sources — DATASUS/SINAN: dengue,",
	"Zika, chikungunya, malaria, COVID-19, vaccination — and international",
	"ones: WHO, PAHO, ECDC, CDC, Malaria Atlas and more, at global, national",
	"and subnational scales). Call it for public-health data questions in",
	"Portuguese or English; set attach_context to include the current map",
	"extent, visible layers and selection. When an answer contains GeoJSON,",
	"offer to put it on the map with add_epidbot_result. Both tools need an",
	"EpidBot API key (Pro, Max or Team plan) configured in the EpidBot panel."
].join(" ");
function askEpidBotSpec(deps) {
	return {
		name: "ask_epidbot",
		description: "Ask EpidBot — the AI assistant for public health and epidemiological data (Brazilian DATASUS/SINAN: dengue, Zika, chikungunya, malaria, COVID-19, vaccination; international WHO, PAHO, ECDC, CDC, Malaria Atlas and more) — a question and get the answer text.",
		inputSchema: {
			type: "object",
			properties: {
				question: {
					type: "string",
					description: "The epidemiological question, in English or Portuguese."
				},
				attach_context: {
					type: "boolean",
					description: "Attach the current map extent, layers and selection as context. Defaults to the user's panel setting."
				}
			},
			required: ["question"],
			additionalProperties: false
		},
		callback: async (input, context) => {
			if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("input must be an object with a question string.");
			const question = input.question;
			if (typeof question !== "string" || !question.trim()) throw new Error("question must be a non-empty string.");
			const attach = input.attach_context;
			const settings = deps.getSettings();
			const preamble = (typeof attach === "boolean" ? attach : settings.attachMapContext) ? buildContextText(deps.buildContext() ?? {
				crs: "",
				viewBounds: null,
				layers: [],
				selection: null
			}) : "";
			const result = await deps.client.ask(attachContext(question.trim(), preamble), {
				sessionId: deps.getSessionId(),
				locale: settings.answerLocale,
				signal: context?.signal
			});
			return {
				answer: result.content,
				session_id: result.sessionId,
				images: result.images
			};
		}
	};
}
function addResultSpec(deps) {
	return {
		name: "add_epidbot_result",
		description: "Add a GeoJSON FeatureCollection produced by EpidBot to the map as a styled layer (choropleth when a numeric property classifies).",
		inputSchema: {
			type: "object",
			properties: {
				geojson: {
					type: "object",
					description: "A GeoJSON FeatureCollection (or a single Feature)."
				},
				name: {
					type: "string",
					description: "Optional layer name. Defaults to 'EpidBot result'."
				}
			},
			required: ["geojson"],
			additionalProperties: false
		},
		callback: (input) => {
			const renderer = deps.app.getMapRenderer?.();
			if (renderer !== void 0 && renderer !== "maplibre" && renderer !== "mapbox") throw new Error(`Adding layers is not available on the ${renderer} renderer.`);
			if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("input must be an object with a geojson property.");
			const raw = input.geojson;
			const validation = validateGeoJson(raw);
			if (!validation.ok || !validation.fc) throw new Error(`Invalid GeoJSON: ${validation.reason ?? "unknown reason"}.`);
			const requested = input.name;
			const name = typeof requested === "string" && requested.trim() ? requested.trim() : "EpidBot result";
			const layerId = deps.app.addGeoJsonLayer(name, validation.fc);
			const styled = deps.app.importLayerStyle?.(layerId, styleFor(validation.fc));
			deps.onLayerAdded({
				layerId,
				name,
				kind: "geojson",
				question: "assistant",
				addedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			return {
				layerId,
				featureCount: validation.featureCount ?? 0,
				styleApplied: styled ? styled.ok : false
			};
		}
	};
}
/** Register the EpidBot tools and guidance; returns a disposer or null when
* the host predates assistant tools. */
function registerAssistantTools(deps) {
	const { app } = deps;
	if (!app.registerAssistantToolSpec) return null;
	const disposers = [];
	const askTool = app.registerAssistantToolSpec(askEpidBotSpec(deps));
	if (askTool) disposers.push(askTool);
	const addTool = app.registerAssistantToolSpec(addResultSpec(deps));
	if (addTool) disposers.push(addTool);
	if (app.registerAssistantGuidance) {
		const disposeGuidance = app.registerAssistantGuidance(GUIDANCE);
		if (disposeGuidance) disposers.push(disposeGuidance);
	}
	return () => {
		for (const dispose of disposers) try {
			dispose();
		} catch {}
	};
}
// src/i18n/en.ts
/** English catalog. Keys are namespaced `plugin.epidbot.` — the host's
* registerTranslations drops anything else. Always keep the English text as
* the translate() defaultValue fallback. */
var en = {
	"plugin.epidbot.panel.title": "EpidBot",
	"plugin.epidbot.menu.open": "Open chat panel",
	"plugin.epidbot.menu.newSession": "New session",
	"plugin.epidbot.menu.export": "Export as Markdown",
	"plugin.epidbot.menu.settings": "Settings…",
	"plugin.epidbot.menu.ask": "Ask about the map",
	"plugin.epidbot.menu.askExtent": "Ask about this extent",
	"plugin.epidbot.menu.askSelection": "Ask about this selection",
	"plugin.epidbot.menu.editLayer": "Let EpidBot edit this layer…",
	"plugin.epidbot.prompt.extent": "What public health data is relevant for the current map extent?",
	"plugin.epidbot.prompt.selection": "Summarize the public health characteristics of the selected features.",
	"plugin.epidbot.prompt.noSelection": "No features are selected. Select features on the map first.",
	"plugin.epidbot.prompt.noExtent": "The map extent is not available here.",
	"plugin.epidbot.prompt.editLayer": "Add a new field to this layer with the data you can fetch (e.g. population counts). Join the data by the '{{key}}' field. Use the identifiers attached above as join keys and return the result as an epidbot-edit block.",
	"plugin.epidbot.prompt.editLayerNoKey": "Add a new field to this layer with the data you can fetch (e.g. population counts). Use the identifiers attached above as join keys and return the result as an epidbot-edit block.",
	"plugin.epidbot.quick.placeholder": "Quick prompts…",
	"plugin.epidbot.quick.dengue": "Summarize the latest dengue season in Brazil",
	"plugin.epidbot.quick.malaria": "Which datasets cover malaria in the Amazon?",
	"plugin.epidbot.quick.layers": "Explain the active layers on my map",
	"plugin.epidbot.quick.sinan": "How do I download SINAN data for my state?",
	"plugin.epidbot.quick.population": "What is the population at risk in my map extent?",
	"plugin.epidbot.attach.label": "Attach layer data to the message",
	"plugin.epidbot.attach.selected": "Attach selected features",
	"plugin.epidbot.attach.extent": "Attach features in view",
	"plugin.epidbot.attach.all": "Attach entire layer…",
	"plugin.epidbot.attach.identifiers": "Attach identifiers only (for edits)",
	"plugin.epidbot.attach.noLayers": "No layers on the map.",
	"plugin.epidbot.attach.pickLayer": "Attach layer — choose a layer:",
	"plugin.epidbot.attach.ok": "OK",
	"plugin.epidbot.attach.cancel": "Cancel",
	"plugin.epidbot.attach.preparing": "Preparing attachment…",
	"plugin.epidbot.attach.unavailable": "Layer attachments are not available on this map renderer.",
	"plugin.epidbot.attach.remove": "Remove attachment",
	"plugin.epidbot.attach.chipMeta": "{{count}} features, {{kb}} KB",
	"plugin.epidbot.attach.tooLargeTitle": "Attachment too large",
	"plugin.epidbot.attach.tooLarge": "'{{label}}' is {{size}} KB, above the {{budget}} KB inline budget.",
	"plugin.epidbot.attach.limitExtent": "Limit to current view",
	"plugin.epidbot.attach.narrowSelection": "Narrow to selected features",
	"plugin.epidbot.attach.reducePrecision": "Reduce coordinate precision",
	"plugin.epidbot.attach.uploadArtifact": "Upload as artifact (server)",
	"plugin.epidbot.attach.statsOnly": "Send statistics only",
	"plugin.epidbot.attach.dropped": "Attachment dropped — the map context (field names, sample values, counts) will be sent instead.",
	"plugin.epidbot.attach.failedTitle": "Attachment failed",
	"plugin.epidbot.attach.uploading": "Uploading artifact…",
	"plugin.epidbot.attach.uploadFailed": "Artifact upload failed: {{reason}}",
	"plugin.epidbot.attach.noArtifactId": "The server did not return an artifact id.",
	"plugin.epidbot.edit.title": "EpidBot wants to edit a layer",
	"plugin.epidbot.edit.intro": "EpidBot proposes the following change to your layer data. Review it carefully — it will modify the attributes.",
	"plugin.epidbot.edit.review": "Review field edit: {{name}} ({{type}})",
	"plugin.epidbot.edit.reviewInvalid": "Review field edit (invalid operation)",
	"plugin.epidbot.edit.invalidOp": "This edit operation is invalid:",
	"plugin.epidbot.edit.targetLabel": "Target layer",
	"plugin.epidbot.edit.opAdd": "Add",
	"plugin.epidbot.edit.opUpdate": "Update",
	"plugin.epidbot.edit.summary": "{{op}} field {{name}} ({{type}}) — join by {{key}}{{confidence}}",
	"plugin.epidbot.edit.confidenceFetched": " (values fetched from a data source)",
	"plugin.epidbot.edit.confidenceEstimated": " (⚠ values ESTIMATED by the model — verify before use)",
	"plugin.epidbot.edit.noMatchingLayer": "No matching layer found.",
	"plugin.epidbot.edit.cannotJoin": "Cannot join by this key: {{reason}}",
	"plugin.epidbot.edit.stats": "Matches {{matched}} of {{total}} values ({{unmatched}} unmatched, {{invalid}} invalid).",
	"plugin.epidbot.edit.unmatchedKeys": "Unmatched keys: {{keys}}",
	"plugin.epidbot.edit.moreRows": "… and {{count}} more",
	"plugin.epidbot.edit.apply": "Apply",
	"plugin.epidbot.edit.cancel": "Cancel",
	"plugin.epidbot.edit.applied": "{{op}} '{{field}}' on '{{layer}}': {{matched}} features{{note}}",
	"plugin.epidbot.edit.unmatchedNote": " ({{count}} keys did not match)",
	"plugin.epidbot.edit.notApplied": "Edit not applied: {{reason}}",
	"plugin.epidbot.edit.revert": "Revert",
	"plugin.epidbot.edit.reverted": "Edit reverted.",
	"plugin.epidbot.edit.revertFailed": "Could not revert: {{reason}}",
	"plugin.epidbot.context.attach": "Attach map context",
	"plugin.epidbot.context.help": "Sends the visible layers, the current extent, the CRS and the selection with your question.",
	"plugin.epidbot.context.preview": "Preview context",
	"plugin.epidbot.context.bytes": "{{bytes}} bytes",
	"plugin.epidbot.context.empty": "Nothing to report — no layers, extent or selection available.",
	"plugin.epidbot.context.unavailable": "Map context is not available here.",
	"plugin.epidbot.composer.placeholder": "Ask about epidemiological data…",
	"plugin.epidbot.composer.send": "Send",
	"plugin.epidbot.composer.stop": "Stop",
	"plugin.epidbot.status.submitting": "Sending question…",
	"plugin.epidbot.status.thinking": "EpidBot is thinking… (job {{job}})",
	"plugin.epidbot.status.loadingPlots": "Loading charts…",
	"plugin.epidbot.welcome.title": "EpidBot — public health data assistant",
	"plugin.epidbot.welcome.body": "Ask about public health and epidemiological data — Brazilian sources (DATASUS/SINAN) and international ones (WHO, PAHO, ECDC, CDC, Malaria Atlas and more). Answers can include charts and data you can add to the map.",
	"plugin.epidbot.welcome.noKey": "Add your EpidBot API key in Settings to start.",
	"plugin.epidbot.welcome.getApiKey": "Get an API key (EpidBot web app)",
	"plugin.epidbot.session.label": "Session",
	"plugin.epidbot.session.none": "New session",
	"plugin.epidbot.session.new": "New session",
	"plugin.epidbot.session.createdName": "Session {{stamp}}",
	"plugin.epidbot.session.export": "Export as Markdown",
	"plugin.epidbot.session.exportEmpty": "Nothing to export yet.",
	"plugin.epidbot.session.loadFailed": "Could not load this session's history.",
	"plugin.epidbot.settings.title": "Settings",
	"plugin.epidbot.settings.apiKey": "API key",
	"plugin.epidbot.settings.apiKeyHelp": "Personal key created in the EpidBot web app (Settings → API Keys). Stored in the {{storage}}.",
	"plugin.epidbot.settings.storage.keychain": "system credential store",
	"plugin.epidbot.settings.storage.browser": "browser storage",
	"plugin.epidbot.settings.storage.none": "current session only",
	"plugin.epidbot.settings.serverUrl": "Server URL",
	"plugin.epidbot.settings.locale": "Answer language",
	"plugin.epidbot.settings.pollInterval": "Poll interval (seconds)",
	"plugin.epidbot.settings.test": "Test key",
	"plugin.epidbot.settings.testing": "Testing…",
	"plugin.epidbot.settings.testOk": "Key OK — connected as {{user}}",
	"plugin.epidbot.settings.testFail": "Could not validate the key: {{reason}}",
	"plugin.epidbot.settings.save": "Save",
	"plugin.epidbot.settings.saved": "Settings saved.",
	"plugin.epidbot.error.auth": "Invalid or revoked API key. Check the key in Settings.",
	"plugin.epidbot.error.plan": "Your EpidBot plan does not include API keys — Pro, Max or Team required.",
	"plugin.epidbot.error.quota": "API quota exceeded. Wait a moment and try again.",
	"plugin.epidbot.error.network": "Could not reach EpidBot. Check the server URL and your connection.",
	"plugin.epidbot.error.timeout": "EpidBot did not answer in time. Try again.",
	"plugin.epidbot.error.cancelled": "Question cancelled.",
	"plugin.epidbot.error.server": "EpidBot returned an error (HTTP {{status}}).",
	"plugin.epidbot.error.job": "The chat job failed on the server: {{reason}}",
	"plugin.epidbot.error.unknown": "Unexpected error: {{reason}}",
	"plugin.epidbot.error.noKey": "No API key set. Open Settings to add one.",
	"plugin.epidbot.plot.download": "Save chart",
	"plugin.epidbot.plot.loadFailed": "Chart could not be loaded.",
	"plugin.epidbot.code.copy": "Copy",
	"plugin.epidbot.code.copied": "Copied",
	"plugin.epidbot.results.title": "Add to the map",
	"plugin.epidbot.results.features": "{{count}} features",
	"plugin.epidbot.results.addToMap": "Add to map",
	"plugin.epidbot.results.added": "Added ✓",
	"plugin.epidbot.results.download": "Download .geojson",
	"plugin.epidbot.results.downloadFile": "Download",
	"plugin.epidbot.results.addTile": "Add as tile layer",
	"plugin.epidbot.results.addFailed": "Could not add the layer: {{reason}}",
	"plugin.epidbot.results.styleFailed": "The layer was added, but its style could not be applied.",
	"plugin.epidbot.results.loading": "Loading '{{name}}' onto the map…",
	"plugin.epidbot.results.stillLoading": "Still loading the previous dataset…",
	"plugin.epidbot.results.addedNotice": "Layer '{{name}}' added to the map.",
	"plugin.epidbot.results.unreadable": "The data could not be read as GeoJSON, and the CSV has no usable coordinate columns.",
	"plugin.epidbot.results.loadFailed": "Could not load geodata: {{reason}}",
	"plugin.epidbot.settings.inlineBudget": "Inline attachment budget (KiB)",
	"plugin.epidbot.settings.inlineBudgetHelp": "Layer attachments above this size are reduced or uploaded as artifacts.",
	"plugin.epidbot.settings.artifactUploads": "Allow layer uploads as server artifacts (requires server support)"
};
var catalogs = {
	en,
	"pt-BR": {
		"plugin.epidbot.panel.title": "EpidBot",
		"plugin.epidbot.menu.open": "Abrir painel de conversa",
		"plugin.epidbot.menu.newSession": "Nova sessão",
		"plugin.epidbot.menu.export": "Exportar como Markdown",
		"plugin.epidbot.menu.settings": "Configurações…",
		"plugin.epidbot.menu.ask": "Perguntar sobre o mapa",
		"plugin.epidbot.menu.askExtent": "Perguntar sobre esta extensão",
		"plugin.epidbot.menu.askSelection": "Perguntar sobre esta seleção",
		"plugin.epidbot.menu.editLayer": "Deixar o EpidBot editar esta camada…",
		"plugin.epidbot.prompt.extent": "Quais dados de saúde pública são relevantes para a extensão atual do mapa?",
		"plugin.epidbot.prompt.selection": "Resuma as características de saúde pública dos elementos selecionados.",
		"plugin.epidbot.prompt.noSelection": "Nenhum elemento selecionado. Selecione elementos no mapa primeiro.",
		"plugin.epidbot.prompt.noExtent": "A extensão do mapa não está disponível aqui.",
		"plugin.epidbot.prompt.editLayer": "Adicione um novo campo a esta camada com os dados que você puder obter (ex.: contagens populacionais). Cruze os dados pelo campo '{{key}}'. Use os identificadores anexados acima como chaves de junção e devolva o resultado em um bloco epidbot-edit.",
		"plugin.epidbot.prompt.editLayerNoKey": "Adicione um novo campo a esta camada com os dados que você puder obter (ex.: contagens populacionais). Use os identificadores anexados acima como chaves de junção e devolva o resultado em um bloco epidbot-edit.",
		"plugin.epidbot.quick.placeholder": "Perguntas rápidas…",
		"plugin.epidbot.quick.dengue": "Resuma a última temporada de dengue no Brasil",
		"plugin.epidbot.quick.malaria": "Quais conjuntos de dados cobrem malária na Amazônia?",
		"plugin.epidbot.quick.layers": "Explique as camadas ativas do meu mapa",
		"plugin.epidbot.quick.sinan": "Como baixo dados do SINAN para o meu estado?",
		"plugin.epidbot.quick.population": "Qual a população em risco na extensão do meu mapa?",
		"plugin.epidbot.attach.label": "Anexar dados de camada à mensagem",
		"plugin.epidbot.attach.selected": "Anexar elementos selecionados",
		"plugin.epidbot.attach.extent": "Anexar elementos na vista",
		"plugin.epidbot.attach.all": "Anexar a camada inteira…",
		"plugin.epidbot.attach.identifiers": "Anexar apenas identificadores (para edições)",
		"plugin.epidbot.attach.noLayers": "Sem camadas no mapa.",
		"plugin.epidbot.attach.pickLayer": "Anexar camada — escolha uma camada:",
		"plugin.epidbot.attach.ok": "OK",
		"plugin.epidbot.attach.cancel": "Cancelar",
		"plugin.epidbot.attach.preparing": "Preparando anexo…",
		"plugin.epidbot.attach.unavailable": "Anexos de camada não estão disponíveis neste renderizador de mapa.",
		"plugin.epidbot.attach.remove": "Remover anexo",
		"plugin.epidbot.attach.chipMeta": "{{count}} elementos, {{kb}} KB",
		"plugin.epidbot.attach.tooLargeTitle": "Anexo muito grande",
		"plugin.epidbot.attach.tooLarge": "'{{label}}' tem {{size}} KB, acima do orçamento inline de {{budget}} KB.",
		"plugin.epidbot.attach.limitExtent": "Limitar à vista atual",
		"plugin.epidbot.attach.narrowSelection": "Restringir aos elementos selecionados",
		"plugin.epidbot.attach.reducePrecision": "Reduzir a precisão das coordenadas",
		"plugin.epidbot.attach.uploadArtifact": "Enviar como artefato (servidor)",
		"plugin.epidbot.attach.statsOnly": "Enviar apenas estatísticas",
		"plugin.epidbot.attach.dropped": "Anexo descartado — o contexto do mapa (nomes de campos, valores de exemplo, contagens) será enviado em vez disso.",
		"plugin.epidbot.attach.failedTitle": "Falha no anexo",
		"plugin.epidbot.attach.uploading": "Enviando artefato…",
		"plugin.epidbot.attach.uploadFailed": "Falha no envio do artefato: {{reason}}",
		"plugin.epidbot.attach.noArtifactId": "O servidor não devolveu um id de artefato.",
		"plugin.epidbot.edit.title": "O EpidBot quer editar uma camada",
		"plugin.epidbot.edit.intro": "O EpidBot propõe a seguinte alteração nos dados da sua camada. Revise com cuidado — os atributos serão modificados.",
		"plugin.epidbot.edit.review": "Revisar edição de campo: {{name}} ({{type}})",
		"plugin.epidbot.edit.reviewInvalid": "Revisar edição de campo (operação inválida)",
		"plugin.epidbot.edit.invalidOp": "Esta operação de edição é inválida:",
		"plugin.epidbot.edit.targetLabel": "Camada alvo",
		"plugin.epidbot.edit.opAdd": "Adicionar",
		"plugin.epidbot.edit.opUpdate": "Atualizar",
		"plugin.epidbot.edit.summary": "{{op}} campo {{name}} ({{type}}) — junção por {{key}}{{confidence}}",
		"plugin.epidbot.edit.confidenceFetched": " (valores obtidos de uma fonte de dados)",
		"plugin.epidbot.edit.confidenceEstimated": " (⚠ valores ESTIMADOS pelo modelo — verifique antes de usar)",
		"plugin.epidbot.edit.noMatchingLayer": "Nenhuma camada correspondente encontrada.",
		"plugin.epidbot.edit.cannotJoin": "Não é possível cruzar por esta chave: {{reason}}",
		"plugin.epidbot.edit.stats": "{{matched}} de {{total}} valores correspondem ({{unmatched}} sem correspondência, {{invalid}} inválidos).",
		"plugin.epidbot.edit.unmatchedKeys": "Chaves sem correspondência: {{keys}}",
		"plugin.epidbot.edit.moreRows": "… e mais {{count}}",
		"plugin.epidbot.edit.apply": "Aplicar",
		"plugin.epidbot.edit.cancel": "Cancelar",
		"plugin.epidbot.edit.applied": "{{op}} '{{field}}' em '{{layer}}': {{matched}} elementos{{note}}",
		"plugin.epidbot.edit.unmatchedNote": " ({{count}} chaves sem correspondência)",
		"plugin.epidbot.edit.notApplied": "Edição não aplicada: {{reason}}",
		"plugin.epidbot.edit.revert": "Desfazer",
		"plugin.epidbot.edit.reverted": "Edição desfeita.",
		"plugin.epidbot.edit.revertFailed": "Não foi possível desfazer: {{reason}}",
		"plugin.epidbot.context.attach": "Anexar contexto do mapa",
		"plugin.epidbot.context.help": "Envia as camadas visíveis, a extensão atual, o CRS e a seleção junto com a sua pergunta.",
		"plugin.epidbot.context.preview": "Pré-visualizar contexto",
		"plugin.epidbot.context.bytes": "{{bytes}} bytes",
		"plugin.epidbot.context.empty": "Nada a relatar — sem camadas, extensão ou seleção disponíveis.",
		"plugin.epidbot.context.unavailable": "O contexto do mapa não está disponível aqui.",
		"plugin.epidbot.composer.placeholder": "Pergunte sobre dados epidemiológicos…",
		"plugin.epidbot.composer.send": "Enviar",
		"plugin.epidbot.composer.stop": "Parar",
		"plugin.epidbot.status.submitting": "Enviando pergunta…",
		"plugin.epidbot.status.thinking": "EpidBot está pensando… (job {{job}})",
		"plugin.epidbot.status.loadingPlots": "Carregando gráficos…",
		"plugin.epidbot.welcome.title": "EpidBot — assistente de dados de saúde pública",
		"plugin.epidbot.welcome.body": "Pergunte sobre dados de saúde pública e epidemiológicos — fontes brasileiras (DATASUS/SINAN) e internacionais (OMS, OPAS, ECDC, CDC, Malaria Atlas e mais). As respostas podem incluir gráficos e dados que você pode adicionar ao mapa.",
		"plugin.epidbot.welcome.noKey": "Adicione sua chave de API do EpidBot nas Configurações para começar.",
		"plugin.epidbot.welcome.getApiKey": "Obter uma chave de API (aplicativo web do EpidBot)",
		"plugin.epidbot.session.label": "Sessão",
		"plugin.epidbot.session.none": "Nova sessão",
		"plugin.epidbot.session.new": "Nova sessão",
		"plugin.epidbot.session.createdName": "Sessão {{stamp}}",
		"plugin.epidbot.session.export": "Exportar como Markdown",
		"plugin.epidbot.session.exportEmpty": "Nada para exportar ainda.",
		"plugin.epidbot.session.loadFailed": "Não foi possível carregar o histórico desta sessão.",
		"plugin.epidbot.settings.title": "Configurações",
		"plugin.epidbot.settings.apiKey": "Chave de API",
		"plugin.epidbot.settings.apiKeyHelp": "Chave pessoal criada no aplicativo web do EpidBot (Configurações → API Keys). Guardada no {{storage}}.",
		"plugin.epidbot.settings.storage.keychain": "cofre de credenciais do sistema",
		"plugin.epidbot.settings.storage.browser": "armazenamento do navegador",
		"plugin.epidbot.settings.storage.none": "apenas na sessão atual",
		"plugin.epidbot.settings.serverUrl": "URL do servidor",
		"plugin.epidbot.settings.locale": "Idioma das respostas",
		"plugin.epidbot.settings.pollInterval": "Intervalo de consulta (segundos)",
		"plugin.epidbot.settings.test": "Testar chave",
		"plugin.epidbot.settings.testing": "Testando…",
		"plugin.epidbot.settings.testOk": "Chave OK — conectado como {{user}}",
		"plugin.epidbot.settings.testFail": "Não foi possível validar a chave: {{reason}}",
		"plugin.epidbot.settings.save": "Salvar",
		"plugin.epidbot.settings.saved": "Configurações salvas.",
		"plugin.epidbot.error.auth": "Chave de API inválida ou revogada. Verifique a chave nas Configurações.",
		"plugin.epidbot.error.plan": "Seu plano do EpidBot não inclui chaves de API — é preciso Pro, Max ou Team.",
		"plugin.epidbot.error.quota": "Cota da API excedida. Aguarde um momento e tente novamente.",
		"plugin.epidbot.error.network": "Não foi possível acessar o EpidBot. Verifique a URL do servidor e sua conexão.",
		"plugin.epidbot.error.timeout": "O EpidBot não respondeu a tempo. Tente novamente.",
		"plugin.epidbot.error.cancelled": "Pergunta cancelada.",
		"plugin.epidbot.error.server": "O EpidBot retornou um erro (HTTP {{status}}).",
		"plugin.epidbot.error.job": "O job falhou no servidor: {{reason}}",
		"plugin.epidbot.error.unknown": "Erro inesperado: {{reason}}",
		"plugin.epidbot.error.noKey": "Nenhuma chave de API configurada. Abra as Configurações para adicionar uma.",
		"plugin.epidbot.plot.download": "Salvar gráfico",
		"plugin.epidbot.plot.loadFailed": "Não foi possível carregar o gráfico.",
		"plugin.epidbot.code.copy": "Copiar",
		"plugin.epidbot.code.copied": "Copiado",
		"plugin.epidbot.results.title": "Adicionar ao mapa",
		"plugin.epidbot.results.features": "{{count}} elementos",
		"plugin.epidbot.results.addToMap": "Adicionar ao mapa",
		"plugin.epidbot.results.added": "Adicionado ✓",
		"plugin.epidbot.results.download": "Baixar .geojson",
		"plugin.epidbot.results.downloadFile": "Baixar",
		"plugin.epidbot.results.addTile": "Adicionar como camada de tiles",
		"plugin.epidbot.results.addFailed": "Não foi possível adicionar a camada: {{reason}}",
		"plugin.epidbot.results.styleFailed": "A camada foi adicionada, mas o estilo não pôde ser aplicado.",
		"plugin.epidbot.results.loading": "Carregando '{{name}}' para o mapa…",
		"plugin.epidbot.results.stillLoading": "Ainda carregando o conjunto de dados anterior…",
		"plugin.epidbot.results.addedNotice": "Camada '{{name}}' adicionada ao mapa.",
		"plugin.epidbot.results.unreadable": "Os dados não puderam ser lidos como GeoJSON e o CSV não tem colunas de coordenadas utilizáveis.",
		"plugin.epidbot.results.loadFailed": "Não foi possível carregar os dados geográficos: {{reason}}",
		"plugin.epidbot.settings.inlineBudget": "Orçamento inline de anexos (KiB)",
		"plugin.epidbot.settings.inlineBudgetHelp": "Anexos de camada acima deste tamanho são reduzidos ou enviados como artefatos.",
		"plugin.epidbot.settings.artifactUploads": "Permitir envio de camadas como artefatos no servidor (requer suporte do servidor)"
	}
};
/** Call once from activate(); registering the same keys again is a no-op. */
function registerEpidBotTranslations(app) {
	app.registerTranslations?.(catalogs);
}
/** Replace {{param}} placeholders; unknown params are left as written. */
function interpolate(template, params) {
	if (!params) return template;
	return template.replace(/\{\{(\w+)\}\}/g, (match, name) => name in params ? String(params[name]) : match);
}
function createTranslator(app) {
	return (key, params) => {
		const fallback = interpolate(en["plugin.epidbot." + key] ?? key, params);
		return app.translate?.("plugin.epidbot." + key, fallback, params) ?? fallback;
	};
}
// src/types.ts
var DEFAULT_SETTINGS = {
	serverUrl: "https://api.epidbot.kwar-ai.com.br",
	answerLocale: "en",
	pollIntervalSec: 1.5,
	attachMapContext: true,
	inlineBudgetKb: 64,
	artifactUploads: false
};
// src/settings/store.ts
/** Settings persistence: the API key goes to the host credential store
* (app.credentials — OS keychain on desktop, localStorage on web); non-secret
* preferences travel in the plugin's project state so they never carry a
* secret into a shared .geolibre project file. */
/** Credential name; the host stores it as `plugin.epidbot.api-key`. */
var CREDENTIAL_NAME = "api-key";
/** Host the stored key was confirmed for (`plugin.epidbot.api-key-host`). A
* project file must never redirect the key to another server. */
var CREDENTIAL_HOST_NAME = "api-key-host";
/** Origin (scheme + host + port) of a server URL, derived the same way the
* client builds it; "" when the value is not a usable URL. */
function hostOf(url) {
	try {
		return new URL(normalizeServerUrl(url)).origin.toLowerCase();
	} catch {
		return "";
	}
}
/** Read the stored key for `serverUrl`; "" when nothing is saved, the host has
* no store, or the key was confirmed for a different server. The last case is
* what stops a shared project file from pointing `serverUrl` at an attacker
* host and receiving the recipient's key. */
function loadApiKey(app, serverUrl = DEFAULT_SERVER_URL) {
	const key = app.credentials?.get("api-key") ?? "";
	if (!key) return "";
	const target = hostOf(serverUrl);
	if (!target) return "";
	const pinned = (app.credentials?.get("api-key-host") ?? "").toLowerCase();
	if (!pinned) return target === hostOf("https://api.epidbot.kwar-ai.com.br") ? key : "";
	return pinned === target ? key : "";
}
/** Persist the key and the server it was confirmed for; "" deletes.
* "unavailable" means the host has no credential store (the key then lives
* only in memory for this session). */
function saveApiKey(app, key, serverUrl = DEFAULT_SERVER_URL) {
	if (!app.credentials) return "unavailable";
	const trimmed = key.trim();
	const persisted = app.credentials.set(CREDENTIAL_NAME, trimmed);
	if (persisted) {
		if (trimmed) app.credentials.set(CREDENTIAL_HOST_NAME, hostOf(serverUrl));
		else app.credentials.set(CREDENTIAL_HOST_NAME, "");
	}
	return persisted ? "saved" : "session-only";
}
function credentialLocation(app) {
	return app.credentials?.location() ?? "none";
}
function sanitizeSettings(value) {
	const source = value ?? {};
	const locale = source.answerLocale === "pt-BR" ? "pt-BR" : "en";
	const rawPoll = Number(source.pollIntervalSec);
	const pollIntervalSec = Number.isFinite(rawPoll) ? Math.min(Math.max(rawPoll, .5), 10) : DEFAULT_SETTINGS.pollIntervalSec;
	const serverUrl = normalizeServerUrl(typeof source.serverUrl === "string" ? source.serverUrl : "");
	const rawBudget = Number(source.inlineBudgetKb);
	const inlineBudgetKb = Number.isFinite(rawBudget) && rawBudget > 0 ? Math.min(Math.max(rawBudget, 4), 2048) : DEFAULT_SETTINGS.inlineBudgetKb;
	return {
		serverUrl: serverUrl || DEFAULT_SETTINGS.serverUrl,
		answerLocale: locale,
		pollIntervalSec,
		attachMapContext: typeof source.attachMapContext === "boolean" ? source.attachMapContext : DEFAULT_SETTINGS.attachMapContext,
		inlineBudgetKb,
		artifactUploads: typeof source.artifactUploads === "boolean" ? source.artifactUploads : DEFAULT_SETTINGS.artifactUploads
	};
}
/** Validate a provenance record; null when the shape is wrong. */
function sanitizeResultLayer(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return null;
	const record = value;
	if (typeof record.layerId !== "string" || !record.layerId) return null;
	if (typeof record.name !== "string" || !record.name) return null;
	if (record.kind !== "geojson" && record.kind !== "url") return null;
	if (typeof record.question !== "string") return null;
	if (typeof record.addedAt !== "string") return null;
	return {
		layerId: record.layerId,
		name: record.name,
		kind: record.kind,
		question: record.question,
		addedAt: record.addedAt
	};
}
function sanitizeResultLayers(value) {
	if (!Array.isArray(value)) return [];
	return value.map(sanitizeResultLayer).filter((record) => record !== null).slice(-50);
}
/** Restore project state; unknown or hostile input falls back to defaults.
* A stored apiKey (now or ever) is deliberately dropped: secrets never live
* in project files. */
function sanitizeProjectState(value) {
	const fallback = {
		version: 1,
		settings: {
			...DEFAULT_SETTINGS,
			serverUrl: DEFAULT_SERVER_URL
		},
		sessionId: null,
		resultLayers: []
	};
	if (!value || typeof value !== "object" || Array.isArray(value)) return fallback;
	const record = value;
	if (record.version !== 1) return fallback;
	const rawSession = record.sessionId;
	const sessionId = typeof rawSession === "number" && Number.isInteger(rawSession) && rawSession > 0 ? rawSession : null;
	return {
		version: 1,
		settings: sanitizeSettings(record.settings),
		sessionId,
		resultLayers: sanitizeResultLayers(record.resultLayers)
	};
}
// src/api/layerExport.ts
var SCOPE_SELECTION = "selection";
var SCOPE_EXTENT = "extent";
var SCOPE_IDENTIFIERS = "identifiers";
var SCOPE_CHOICES = [
	SCOPE_SELECTION,
	SCOPE_EXTENT,
	"all",
	SCOPE_IDENTIFIERS
];
var SCOPE_LABELS = {
	selection: "selected features",
	extent: "features in extent",
	all: "all features",
	identifiers: "identifiers"
};
/** Never serialize more features than this inline; the interactive reduction
* flow takes over instead of freezing the UI. */
var HARD_FEATURE_LIMIT = 5e4;
/** Candidate join-key field names for attribute write-back, in priority order
* (matched case-insensitively against layer fields). */
var JOIN_KEY_CANDIDATES = [
	"cd_mun",
	"cd_munic",
	"cd_municip",
	"co_munic",
	"co_municip",
	"codmun",
	"municipality_code",
	"codarea",
	"co_uf",
	"cd_uf",
	"uf",
	"estado",
	"state",
	"region",
	"regiao",
	"codigo",
	"code",
	"gid",
	"id"
];
var LayerExportError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "LayerExportError";
	}
};
/** Serialize with minimal separators (smaller attachments). JSON.stringify
* without an indent is already compact; strings never contain literal
* whitespace because control characters are escaped. */
function compactJson(obj) {
	return JSON.stringify(obj);
}
/** Best semantic join-key field for attribute write-back, or null. Matching
* is case-insensitive against JOIN_KEY_CANDIDATES (priority order); the
* original field-name spelling is returned. */
function pickJoinKey(fieldNames) {
	const lowered = /* @__PURE__ */ new Map();
	for (const name of fieldNames) lowered.set(name.toLowerCase(), name);
	for (const candidate of JOIN_KEY_CANDIDATES) {
		const original = lowered.get(candidate);
		if (original !== void 0) return original;
	}
	return null;
}
/** UTF-8 byte length of a serialized payload. */
function sizeBytes(text) {
	const encoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
	return encoder ? encoder.encode(text).length : text.length;
}
/** True when `text` exceeds `budgetBytes`. */
function overBudget(text, budgetBytes) {
	return sizeBytes(text) > Math.max(Math.trunc(budgetBytes), 0);
}
function isPosition(value) {
	return Array.isArray(value) && value.length >= 2 && typeof value[0] === "number" && typeof value[1] === "number";
}
/** Walk every position of any GeoJSON geometry (deep, geometry-collection
* safe); `visit` receives each [x, y, ...] position. Objects are traversed
* property by property (Point has {type, coordinates}), arrays nest. */
function visitPositions(node, visit) {
	if (isPosition(node)) {
		visit(node);
		return;
	}
	if (Array.isArray(node)) {
		for (const child of node) visitPositions(child, visit);
		return;
	}
	if (node && typeof node === "object") for (const value of Object.values(node)) visitPositions(value, visit);
}
function roundTo(value, decimals) {
	if (decimals >= 5) return Number(value.toFixed(decimals));
	return Number(value.toFixed(decimals));
}
/** Round every coordinate of a geometry (a reduction option). Returns the
* input unchanged when the geometry is not an object. */
function reduceGeometryPrecision(geometry, precision) {
	if (!geometry || typeof geometry !== "object") return geometry;
	const record = geometry;
	const clone = { ...record };
	if (Array.isArray(record.coordinates)) {
		const walk = (node) => {
			if (isPosition(node)) return node.map((component, index) => index < 2 ? roundTo(component, precision) : component);
			return Array.isArray(node) ? node.map(walk) : node;
		};
		clone.coordinates = walk(record.coordinates);
	}
	if (Array.isArray(record.geometries)) clone.geometries = record.geometries.map((child) => reduceGeometryPrecision(child, precision));
	return clone;
}
/** Bounding box [west, south, east, north] of a geometry, or null when the
* geometry has no numeric coordinates. */
function geometryBounds(geometry) {
	let west = Infinity;
	let south = Infinity;
	let east = -Infinity;
	let north = -Infinity;
	let seen = false;
	visitPositions(geometry, ([x, y]) => {
		if (!Number.isFinite(x) || !Number.isFinite(y)) return;
		seen = true;
		if (x < west) west = x;
		if (y < south) south = y;
		if (x > east) east = x;
		if (y > north) north = y;
	});
	return seen ? [
		west,
		south,
		east,
		north
	] : null;
}
function intersectsExtent(bounds, extent) {
	return !(bounds[2] < extent[0] || bounds[0] > extent[2] || bounds[3] < extent[1] || bounds[1] > extent[3]);
}
/** The stable key EpidBot echoes back on edits: the host feature id when the
* host provides one, otherwise the feature's position (stable within a
* session — attachments and write-back read the same host arrays). */
function featureKey(feature, index) {
	if (feature.id !== void 0 && feature.id !== null) return feature.id;
	return index;
}
function serializeFeature(feature, index, precision) {
	const out = {
		type: "Feature",
		id: featureKey(feature, index),
		properties: feature.properties ?? {}
	};
	if (feature.geometry !== void 0 && feature.geometry !== null) out.geometry = reduceGeometryPrecision(feature.geometry, precision);
	else out.geometry = null;
	return out;
}
function serializeFeatures(features, precision) {
	return compactJson({
		type: "FeatureCollection",
		features: features.map((feature, index) => serializeFeature(feature, index, precision))
	});
}
/** Build a geometry-less FeatureCollection of identifiers.
*
* @param rows iterable of `{ fid, properties }` pairs; the fid becomes the
*   GeoJSON feature `id` so EpidBot can echo edits back keyed by fid.
*/
function buildIdentifiersGeojson(rows) {
	return compactJson({
		type: "FeatureCollection",
		features: rows.map((row) => ({
			type: "Feature",
			id: row.fid,
			properties: { ...row.properties },
			geometry: null
		}))
	});
}
/** Serialize a layer (or a subset of it) as compact GeoJSON.
*
* @returns the attachment with `overBudget` reported so the caller can offer
*   reductions.
* @throws LayerExportError on unsupported scope, missing selection/bounds, or
*   when the feature count exceeds HARD_FEATURE_LIMIT.
*/
function collectAttachment(input) {
	const { scope } = input;
	if (!SCOPE_CHOICES.includes(scope)) throw new LayerExportError(`unknown scope: ${String(scope)}`);
	const budgetBytes = input.budgetBytes ?? 65536;
	const precision = input.precision ?? 6;
	let features;
	if (scope === "selection") {
		features = input.selectedFeatures ?? [];
		if (features.length === 0) throw new LayerExportError(`No features selected on layer '${input.layerName}'`);
	} else if (scope === "extent") {
		if (!input.viewBounds) throw new LayerExportError("the current extent is required for this scope");
		features = input.features.filter((feature) => {
			const bounds = geometryBounds(feature.geometry);
			return bounds !== null && intersectsExtent(bounds, input.viewBounds);
		});
	} else features = input.features;
	if (features.length > 5e4) throw new LayerExportError(`${features.length.toLocaleString("en-US")} features exceed the inline limit of ${HARD_FEATURE_LIMIT.toLocaleString("en-US")}`);
	const geojson = serializeFeatures(features, precision);
	return {
		scope,
		label: `${input.layerName} (${SCOPE_LABELS[scope]})`,
		geojson,
		featureCount: features.length,
		sizeBytes: sizeBytes(geojson),
		overBudget: overBudget(geojson, budgetBytes)
	};
}
/** Identifiers scope: fid + join-key fields only (no geometry), so EpidBot
* can propose `epidbot-edit` operations keyed to real features. */
function collectIdentifiers(input) {
	const budgetBytes = input.budgetBytes ?? 65536;
	const fieldCounts = /* @__PURE__ */ new Map();
	for (const feature of input.features) {
		const properties = feature.properties;
		if (!properties || typeof properties !== "object") continue;
		for (const name of Object.keys(properties)) fieldCounts.set(name, (fieldCounts.get(name) ?? 0) + 1);
	}
	const fieldNames = [...fieldCounts.keys()];
	const joinKey = pickJoinKey(fieldNames);
	const subset = joinKey ? [joinKey] : fieldNames.slice(0, 3);
	const rows = input.features.map((feature, index) => {
		const properties = {};
		const source = feature.properties ?? {};
		for (const name of subset) properties[name] = source[name] ?? null;
		return {
			fid: featureKey(feature, index),
			properties
		};
	});
	const geojson = buildIdentifiersGeojson(rows);
	return {
		scope: SCOPE_IDENTIFIERS,
		label: `${input.layerName} (${SCOPE_LABELS.identifiers})`,
		geojson,
		featureCount: rows.length,
		sizeBytes: sizeBytes(geojson),
		overBudget: overBudget(geojson, budgetBytes),
		joinKey
	};
}
var KNOWN_OPS = ["add_field", "update_field"];
/** Requested EpidBot type -> accepted spellings. */
var TYPE_ALIASES = {
	integer: [
		"integer",
		"int",
		"long",
		"int64"
	],
	number: [
		"number",
		"float",
		"double",
		"real"
	],
	string: [
		"string",
		"text",
		"str",
		"varchar"
	],
	boolean: ["boolean", "bool"]
};
/** Guard against pathological payloads. */
var MAX_VALUES = 5e5;
var EditOpError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "EditOpError";
	}
};
function canonicalType(typeName) {
	const lowered = String(typeName ?? "string").trim().toLowerCase();
	for (const [canonical, aliases] of Object.entries(TYPE_ALIASES)) if (aliases.includes(lowered)) return canonical;
	return "string";
}
/** Structural validation; returns a normalized copy of `op`.
* @throws EditOpError with a user-presentable message. */
function validateEditOp(op) {
	if (!op || typeof op !== "object" || Array.isArray(op)) throw new EditOpError("edit operation must be an object");
	const record = op;
	const kind = record.op;
	if (kind !== "add_field" && kind !== "update_field") throw new EditOpError(`unsupported operation ${JSON.stringify(kind)} (expected one of ${KNOWN_OPS.join(", ")})`);
	const field = record.field;
	if (!field || typeof field !== "object" || !String(field.name ?? "").trim()) throw new EditOpError("edit operation is missing a field name");
	const fieldRecord = field;
	const key = String(record.key ?? "").trim();
	if (!key) throw new EditOpError("edit operation is missing the join key ('fid' or a field name)");
	const values = record.values;
	if (!values || typeof values !== "object" || Array.isArray(values)) throw new EditOpError("edit operation has no values");
	const entries = Object.entries(values);
	if (entries.length === 0) throw new EditOpError("edit operation has no values");
	if (entries.length > MAX_VALUES) throw new EditOpError(`too many values (${entries.length.toLocaleString("en-US")})`);
	return {
		op: kind,
		layer: String(record.layer ?? ""),
		field: {
			name: String(fieldRecord.name).trim(),
			type: canonicalType(fieldRecord.type)
		},
		key,
		values: Object.fromEntries(entries),
		confidence: String(record.confidence ?? "")
	};
}
/** Convert a raw value to the field's type (throws TypeError/ValueError). */
function coerceValue(value, typeName) {
	const canonical = canonicalType(typeName);
	if (canonical === "integer") {
		const num = Number(String(value).trim());
		if (!Number.isFinite(num)) throw new Error(`not an integer: ${JSON.stringify(value)}`);
		return Math.trunc(num);
	}
	if (canonical === "number") {
		const num = Number(String(value).trim().replace(",", "."));
		if (!Number.isFinite(num)) throw new Error(`not a number: ${JSON.stringify(value)}`);
		return num;
	}
	if (canonical === "boolean") {
		if (typeof value === "string") {
			const lowered = value.trim().toLowerCase();
			if ([
				"true",
				"1",
				"yes",
				"sim",
				"t"
			].includes(lowered)) return true;
			if ([
				"false",
				"0",
				"no",
				"nao",
				"não",
				"f"
			].includes(lowered)) return false;
			throw new Error(`not a boolean: ${JSON.stringify(value)}`);
		}
		return Boolean(value);
	}
	return String(value);
}
/** Match requested values to features; pure, no host access.
*
* @param values requested `key -> raw value` map.
* @param layerKeys `String(key) -> feature index` map built from the layer.
* @param typeName canonical field type for coercion.
*/
function planEdit(values, layerKeys, typeName) {
	const matched = /* @__PURE__ */ new Map();
	const unmatched = [];
	const invalid = [];
	for (const [key, raw] of Object.entries(values)) {
		const index = layerKeys.get(key.trim());
		if (index === void 0) {
			unmatched.push(key);
			continue;
		}
		try {
			matched.set(index, coerceValue(raw, typeName));
		} catch (err) {
			invalid.push({
				key,
				value: raw,
				error: err instanceof Error ? err.message : String(err)
			});
		}
	}
	return {
		matched,
		unmatched,
		invalid
	};
}
/** `String(key value) -> feature index` map for one layer's features.
* `key === "fid"` maps the stringified feature key (host id or position) to
* its index. */
function buildLayerKeys(features, key) {
	const keys = /* @__PURE__ */ new Map();
	if (key === "fid") {
		features.forEach((feature, index) => {
			keys.set(String(featureKey(feature, index)), index);
		});
		return keys;
	}
	features.forEach((feature, index) => {
		const value = feature.properties?.[key];
		if (value === void 0 || value === null) return;
		keys.set(String(value).trim(), index);
	});
	return keys;
}
/** @throws EditOpError when the join-key field does not exist. */
function requireJoinField(features, key, layerName) {
	if (key === "fid") return;
	if (!features.some((feature) => feature.properties !== null && typeof feature.properties === "object" && key in feature.properties)) throw new EditOpError(`join key field '${key}' not found on layer '${layerName}'`);
}
/** Validate, plan and apply one edit operation through the host API.
*
* The caller is responsible for having confirmed the operation with the user
* (review modal). Throws EditOpError without touching the layer when
* validation fails; a failed `updateGeoJsonLayer` never reaches the write.
*/
function applyEditOp(app, target, rawOp) {
	const update = app.updateGeoJsonLayer;
	if (!update) throw new EditOpError("this GeoLibre build cannot update layer data");
	const normalized = validateEditOp(rawOp);
	const kind = normalized.op;
	const fieldName = normalized.field.name;
	const typeName = normalized.field.type;
	const existing = target.features.some((feature) => {
		const properties = feature.properties;
		return properties !== null && typeof properties === "object" && fieldName in properties;
	});
	if (kind === "add_field" && existing) throw new EditOpError(`field '${fieldName}' already exists on '${target.layerName}' - use update_field`);
	if (kind === "update_field" && !existing) throw new EditOpError(`field '${fieldName}' does not exist on '${target.layerName}'`);
	requireJoinField(target.features, normalized.key, target.layerName);
	const layerKeys = buildLayerKeys(target.features, normalized.key);
	const plan = planEdit(normalized.values, layerKeys, typeName);
	if (plan.matched.size === 0) throw new EditOpError(`no features matched (${plan.unmatched.length} unmatched keys)`);
	const previous = target.features.map((feature) => ({
		...feature,
		properties: feature.properties && typeof feature.properties === "object" ? { ...feature.properties } : feature.properties
	}));
	const updated = target.features.map((feature, index) => {
		if (!plan.matched.has(index)) return feature;
		const properties = feature.properties && typeof feature.properties === "object" ? { ...feature.properties } : {};
		properties[fieldName] = plan.matched.get(index);
		return {
			...feature,
			properties
		};
	});
	if (!update.call(app, target.layerId, {
		type: "FeatureCollection",
		features: updated
	})) throw new EditOpError(`the host refused the update of '${target.layerName}'`);
	let reverted = false;
	return {
		layerId: target.layerId,
		layerName: target.layerName,
		op: kind,
		field: fieldName,
		matched: plan.matched.size,
		unmatched: plan.unmatched,
		invalid: plan.invalid,
		confidence: normalized.confidence,
		revert: () => {
			if (reverted) return;
			reverted = true;
			if (!update.call(app, target.layerId, {
				type: "FeatureCollection",
				features: previous
			})) throw new LayerExportError(`could not restore '${target.layerName}' - restore it manually from the project history`);
		}
	};
}
// src/api/csvSource.ts
/** Column names accepted as coordinates (lowercase). */
var LAT_NAMES = [
	"lat",
	"latitude",
	"y",
	"nu_latitude",
	"lat_y"
];
var LON_NAMES = [
	"lon",
	"long",
	"longitude",
	"x",
	"nu_longitude",
	"lon_x"
];
/** Split one CSV line, honoring double-quoted fields (RFC 4180 subset). */
function splitCsvLine(line) {
	const fields = [];
	let current = "";
	let inQuotes = false;
	for (let i = 0; i < line.length; i += 1) {
		const char = line[i];
		if (inQuotes) {
			if (char === "\"") {
				if (line[i + 1] === "\"") {
					current += "\"";
					i += 1;
				} else inQuotes = false;
			} else current += char;
		} else if (char === "\"") inQuotes = true;
		else if (char === ",") {
			fields.push(current);
			current = "";
		} else current += char;
	}
	fields.push(current);
	return fields;
}
/** Parse CSV text into records (header row required; BOM tolerated).
* At most `maxRows` records are returned. */
function parseCsv(text, maxRows = 5e4) {
	const lines = text.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").split("\n").filter((line) => line.trim() !== "");
	if (lines.length === 0) return [];
	const header = splitCsvLine(lines[0]).map((name) => name.trim());
	const records = [];
	for (const line of lines.slice(1)) {
		if (records.length >= maxRows) break;
		const values = splitCsvLine(line);
		const record = {};
		header.forEach((name, index) => {
			record[name] = (values[index] ?? "").trim();
		});
		records.push(record);
	}
	return records;
}
function matchColumn(columns, candidates) {
	for (const candidate of candidates) {
		const found = columns.find((name) => name.toLowerCase() === candidate);
		if (found !== void 0) return found;
	}
	return null;
}
function toNumber(value) {
	if (value === "") return null;
	const num = Number(value.replace(",", "."));
	return Number.isFinite(num) ? num : null;
}
/** Find latitude/longitude columns from the header + first rows.
* The columns must actually hold numbers, like the QGIS sniffer.
* @returns `[latColumn, lonColumn]` or `[null, null]`. */
function sniffCsvCoordinateColumns(records) {
	if (records.length === 0) return [null, null];
	const columns = Object.keys(records[0]);
	const lat = matchColumn(columns, LAT_NAMES);
	const lon = matchColumn(columns, LON_NAMES);
	if (lat === null || lon === null) return [null, null];
	for (const record of records.slice(0, 5)) if (toNumber(record[lat]) === null || toNumber(record[lon]) === null) return [null, null];
	return [lat, lon];
}
/** Convert CSV text into a point FeatureCollection; null when no usable
* coordinate columns exist (the text is then shown as a plain download). */
function csvToFeatureCollection(text) {
	const records = parseCsv(text);
	const [latColumn, lonColumn] = sniffCsvCoordinateColumns(records);
	if (latColumn === null || lonColumn === null) return null;
	const features = [];
	for (const record of records) {
		const lat = toNumber(record[latColumn]);
		const lon = toNumber(record[lonColumn]);
		if (lat === null || lon === null) continue;
		features.push({
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [lon, lat]
			},
			properties: record
		});
	}
	if (features.length === 0) return null;
	return {
		fc: {
			type: "FeatureCollection",
			features
		},
		featureCount: features.length,
		latColumn,
		lonColumn
	};
}
// src/panel/markdown.ts
/** Markdown-to-DOM converter (safe subset) for the chat panel.
*
* TS counterpart of the QGIS plugin's core/markdown_lite.py: headings, bold/
* italic, inline code, fenced code blocks, lists, links, images, pipe tables
* and paragraphs. Instead of emitting HTML strings, this builds DOM nodes and
* fills text through createTextNode, so agent output can never inject markup.
*/
var FENCED_OPEN = /^```([A-Za-z0-9_+-]*)[ \t]*$/;
var HEADING = /^(#{1,6})\s+(.*)$/;
var ULIST = /^\s*[-*+]\s+(.*)$/;
var OLIST = /^\s*\d+[.)]\s+(.*)$/;
var TABLE_ROW = /^\s*\|(.*)\|\s*$/;
var TABLE_SEP = /^\s*\|[\s:|-]+\|\s*$/;
/** Inline tokens: code, bold, italic, images, links (order matters — the
* image alternative must win over the link syntax). Links already require
* http(s) in the pattern, so javascript: URLs can never become anchors. */
var INLINE = /(`([^`\n]+)`)|(\*\*([^*\n]+?)\*\*)|(\*([^*\n]+?)\*)|(!\[([^\]]*)\]\(([^)\s]+)\))|(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\))/g;
/** Render inline markdown into a fragment; plain text stays plain text. */
function renderInline(text, opts = {}) {
	const fragment = document.createDocumentFragment();
	let cursor = 0;
	INLINE.lastIndex = 0;
	for (let match = INLINE.exec(text); match; match = INLINE.exec(text)) {
		if (match.index > cursor) fragment.appendChild(document.createTextNode(text.slice(cursor, match.index)));
		if (match[2] !== void 0) {
			const code = document.createElement("code");
			code.textContent = match[2];
			fragment.appendChild(code);
		} else if (match[4] !== void 0) {
			const strong = document.createElement("strong");
			strong.textContent = match[4];
			fragment.appendChild(strong);
		} else if (match[6] !== void 0) {
			const em = document.createElement("em");
			em.textContent = match[6];
			fragment.appendChild(em);
		} else if (match[9] !== void 0) {
			const url = match[9];
			const alt = match[8] ?? "";
			const element = /^(https?:\/\/|\/|plots\/)/i.test(url) ? opts.resolveImage?.(url, alt) ?? null : null;
			fragment.appendChild(element ?? document.createTextNode(alt || url));
		} else if (match[11] !== void 0 && match[12] !== void 0) {
			const anchor = document.createElement("a");
			anchor.href = match[12];
			anchor.textContent = match[11];
			anchor.target = "_blank";
			anchor.rel = "noopener noreferrer";
			fragment.appendChild(anchor);
		}
		cursor = match.index + match[0].length;
	}
	if (cursor < text.length) fragment.appendChild(document.createTextNode(text.slice(cursor)));
	return fragment;
}
function tableCells(inner) {
	return inner.split("|").map((cell) => cell.trim());
}
function createBlockBuilder(opts) {
	const fragment = document.createDocumentFragment();
	const appendCode = (lang, code) => {
		const wrapper = document.createElement("div");
		wrapper.className = "epidbot-code";
		const bar = document.createElement("div");
		bar.className = "epidbot-code-bar";
		if (lang) {
			const tag = document.createElement("span");
			tag.className = "epidbot-code-lang";
			tag.textContent = lang;
			bar.appendChild(tag);
		}
		const pre = document.createElement("pre");
		const codeEl = document.createElement("code");
		codeEl.className = lang ? `language-${lang}` : "";
		codeEl.textContent = code;
		pre.appendChild(codeEl);
		if (opts.codeCopyLabels && navigator.clipboard) {
			const copy = document.createElement("button");
			copy.type = "button";
			copy.className = "epidbot-button epidbot-button-secondary epidbot-code-copy";
			copy.textContent = opts.codeCopyLabels.copy;
			copy.addEventListener("click", () => {
				navigator.clipboard.writeText(code).then(() => {
					copy.textContent = opts.codeCopyLabels.copied;
					window.setTimeout(() => {
						copy.textContent = opts.codeCopyLabels.copy;
					}, 1500);
				});
			});
			bar.appendChild(copy);
		}
		if (bar.childElementCount > 0) wrapper.appendChild(bar);
		wrapper.appendChild(pre);
		fragment.appendChild(wrapper);
	};
	const appendFromLines = (sourceLines) => {
		const paragraph = [];
		let list = null;
		const closeParagraph = () => {
			if (paragraph.length === 0) return;
			const p = document.createElement("p");
			paragraph.forEach((line, index) => {
				if (index > 0) p.appendChild(document.createElement("br"));
				p.appendChild(renderInline(line, opts));
			});
			fragment.appendChild(p);
			paragraph.length = 0;
		};
		const closeList = () => {
			list = null;
		};
		const appendListItem = (wanted, item) => {
			closeParagraph();
			if (list !== wanted) {
				closeList();
				list = wanted;
				fragment.appendChild(document.createElement(wanted));
			}
			const parent = fragment.lastChild;
			const li = document.createElement("li");
			li.appendChild(renderInline(item, opts));
			parent.appendChild(li);
		};
		const appendTable = (header, rows) => {
			const table = document.createElement("table");
			const thead = document.createElement("thead");
			const headRow = document.createElement("tr");
			for (const cell of header) {
				const th = document.createElement("th");
				th.appendChild(renderInline(cell, opts));
				headRow.appendChild(th);
			}
			thead.appendChild(headRow);
			table.appendChild(thead);
			if (rows.length > 0) {
				const tbody = document.createElement("tbody");
				for (const row of rows) {
					const tr = document.createElement("tr");
					for (const cell of row) {
						const td = document.createElement("td");
						td.appendChild(renderInline(cell, opts));
						tr.appendChild(td);
					}
					tbody.appendChild(tr);
				}
				table.appendChild(tbody);
			}
			fragment.appendChild(table);
		};
		let i = 0;
		while (i < sourceLines.length) {
			const line = sourceLines[i];
			if (!line.trim()) {
				closeParagraph();
				closeList();
				i += 1;
				continue;
			}
			const header = TABLE_ROW.exec(line);
			if (header && i + 1 < sourceLines.length && TABLE_SEP.test(sourceLines[i + 1])) {
				closeParagraph();
				closeList();
				const rows = [];
				let j = i + 2;
				while (j < sourceLines.length && TABLE_ROW.test(sourceLines[j])) {
					rows.push(tableCells(TABLE_ROW.exec(sourceLines[j])[1]));
					j += 1;
				}
				appendTable(tableCells(header[1]), rows);
				i = j;
				continue;
			}
			const heading = HEADING.exec(line);
			if (heading) {
				closeParagraph();
				closeList();
				const level = Math.min(heading[1].length + 2, 6);
				const h = document.createElement(`h${level}`);
				h.appendChild(renderInline(heading[2], opts));
				fragment.appendChild(h);
				i += 1;
				continue;
			}
			const ul = ULIST.exec(line);
			const ol = ul ? null : OLIST.exec(line);
			if (ul || ol) {
				appendListItem(ul ? "ul" : "ol", (ul ?? ol)[1]);
				i += 1;
				continue;
			}
			paragraph.push(line);
			i += 1;
		}
		closeParagraph();
		closeList();
	};
	return {
		fragment,
		appendCode,
		appendFromLines
	};
}
/** Convert markdown text into a document fragment of block elements.
* Fenced code blocks (```lang … ```) become <pre><code>; their content is
* never touched by inline processing. */
function renderMarkdown(text, opts = {}) {
	const builder = createBlockBuilder(opts);
	if (!text) return builder.fragment;
	const lines = text.replace(/\r\n?/g, "\n").split("\n");
	let plain = [];
	let i = 0;
	const flushPlain = () => {
		if (plain.length > 0) {
			builder.appendFromLines(plain);
			plain = [];
		}
	};
	while (i < lines.length) {
		const open = FENCED_OPEN.exec(lines[i]);
		if (open) {
			flushPlain();
			const lang = open[1] ?? "";
			const code = [];
			i += 1;
			while (i < lines.length && !/^```\s*$/.test(lines[i])) {
				code.push(lines[i]);
				i += 1;
			}
			i += 1;
			builder.appendCode(lang, code.join("\n"));
			continue;
		}
		plain.push(lines[i]);
		i += 1;
	}
	flushPlain();
	return builder.fragment;
}
// src/panel/theme.ts
/** Fallback surfaces when the host exposes no opaque background at all. */
var FALLBACK = {
	dark: false,
	surface: "rgb(255, 255, 255)",
	text: "rgb(23, 23, 23)"
};
var FALLBACK_DARK = {
	dark: true,
	surface: "rgb(32, 33, 36)",
	text: "rgb(226, 227, 229)"
};
/** Parse `rgb()`/`rgba()` (legacy comma and modern slash syntax); null for
* anything else (transparent keywords, gradients, color()-functions). The
* color function must start the string, so gradients cannot smuggle a parse
* out of their stops. */
function parseRgb(color) {
	const match = /^rgba?\(([^)]+)\)/i.exec((color ?? "").trim());
	if (!match) return null;
	const parts = match[1].split(/[\s,/]+/).filter((part) => part !== "");
	if (parts.length < 3) return null;
	const channels = [];
	for (let i = 0; i < 3; i += 1) {
		const value = Number(parts[i]);
		if (!Number.isFinite(value)) return null;
		channels.push(value);
	}
	let alpha = 1;
	if (parts.length >= 4) {
		const raw = parts[3];
		alpha = raw.endsWith("%") ? Number(raw.slice(0, -1)) / 100 : Number(raw);
		if (!Number.isFinite(alpha)) alpha = 1;
	}
	return [
		channels[0],
		channels[1],
		channels[2],
		Math.min(Math.max(alpha, 0), 1)
	];
}
/** WCAG relative luminance of an sRGB triple, 0 (black) to 1 (white). */
function relativeLuminance(r, g, b) {
	const linear = (channel) => {
		const c = channel / 255;
		return c <= .03928 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
	};
	return .2126 * linear(r) + .7152 * linear(g) + .0722 * linear(b);
}
/** Walk up from `el` to find the first opaque, classifiable background.
* Returns the CSS color string ("" when nothing opaque was found). */
function findOpaqueBackground(el, computed) {
	for (let node = el; node; node = node.parentElement) {
		const rgba = parseRgb(computed(node).backgroundColor);
		if (!rgba) continue;
		const [r, g, b, a] = rgba;
		if (a >= .99) return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
	}
	return "";
}
/** Classify a background color. `text` is the host's text color when known. */
function classifyTheme(surface, text) {
	const rgba = parseRgb(surface);
	const fallback = FALLBACK;
	if (!rgba) return {
		...fallback,
		...text ? { text } : {}
	};
	const [r, g, b, a] = rgba;
	const blended = [
		r,
		g,
		b
	].map((channel) => channel * a + 255 * (1 - a));
	const dark = relativeLuminance(blended[0], blended[1], blended[2]) < .5;
	return {
		dark,
		surface,
		text: text ?? (dark ? (dark ? FALLBACK_DARK : fallback).text : fallback.text)
	};
}
/** Sample the theme behind `container`. */
function sampleTheme(container, computed = (node) => window.getComputedStyle(node)) {
	const surface = findOpaqueBackground(container, computed);
	const text = container ? computed(container).color : void 0;
	if (!surface) {
		const textColor = parseRgb(text ?? "");
		if (textColor) {
			const dark = relativeLuminance(textColor[0], textColor[1], textColor[2]) > .5;
			return {
				dark,
				surface: (dark ? FALLBACK_DARK : FALLBACK).surface,
				text
			};
		}
		return FALLBACK;
	}
	return classifyTheme(surface, text || void 0);
}
/** Apply the sampled theme to the panel root: theme classes, the
* `color-scheme` (native select popups and scrollbars follow it) and the
* surface/text variables the stylesheet consumes. */
function applyTheme(panel, container) {
	const theme = sampleTheme(container);
	panel.classList.toggle("epidbot-theme-dark", theme.dark);
	panel.classList.toggle("epidbot-theme-light", !theme.dark);
	panel.style.colorScheme = theme.dark ? "dark" : "light";
	panel.style.setProperty("--epidbot-surface", theme.surface);
	panel.style.setProperty("--epidbot-text", theme.text);
	return theme;
}
// src/panel/panel.ts
/** The EpidBot chat panel: transcript, composer, session bar and settings,
* rendered as plain DOM (the host's panel contract is a bare container).
*
* The panel owns no persistence itself: the API key is read/written through
* the host credential store via the injected callbacks, settings changes are
* reported through onSettingsChange (the entry point persists them in
* project state), and the transcript lives only for the session.
*/
var API_KEY_URL = "https://kwar-ai.com.br";
function el(tag, className) {
	const node = document.createElement(tag);
	if (className) node.className = className;
	return node;
}
/** Payload used when the host offers no map members at all: renders as an
* empty preamble, so nothing is attached. */
function emptyContext() {
	return {
		crs: "",
		viewBounds: null,
		layers: [],
		selection: null
	};
}
/** Map a thrown error to a localized message key + params. */
function errorInfo(err) {
	if (err instanceof ChatCancelledError) return { key: "error.cancelled" };
	if (err instanceof EpidBotAuthError) return { key: "error.auth" };
	if (err instanceof EpidBotPlanError) return { key: "error.plan" };
	if (err instanceof EpidBotQuotaError) return { key: "error.quota" };
	if (err instanceof EpidBotApiError) {
		if (err.kind === "timeout") return { key: "error.timeout" };
		if (err.kind === "job") return {
			key: "error.job",
			params: { reason: err.detail ?? err.message }
		};
		if (err.status !== void 0) return {
			key: "error.server",
			params: { status: err.status }
		};
		return { key: "error.network" };
	}
	return {
		key: "error.unknown",
		params: { reason: err instanceof Error ? err.message : String(err) }
	};
}
/** Normalize a session-history payload into turns. The server may wrap the
* list ({messages: [...]}) or return it directly; fields are read loosely to
* match the QGIS plugin's tolerance. */
function turnsFromHistory(payload) {
	const list = Array.isArray(payload) ? payload : payload?.messages ?? [];
	const turns = [];
	for (const item of list) {
		if (!item || typeof item !== "object") continue;
		const record = item;
		const role = record.role === "user" ? "user" : "assistant";
		const text = String(record.content ?? record.text ?? "");
		const images = Array.isArray(record.images) ? record.images.map(String) : [];
		if (!text && images.length === 0) continue;
		turns.push({
			role,
			text,
			images
		});
	}
	return turns;
}
var EpidBotPanel = class EpidBotPanel {
	constructor(app, client, t, cb) {
		this.root = null;
		this.turns = [];
		this.sessionId = null;
		this.abort = null;
		this.busy = false;
		this.oneShotContext = false;
		this.objectUrls = [];
		this.sessionsRefreshed = false;
		this.themeObserver = null;
		this.attachments = [];
		this.lastAttempt = null;
		this.loadingDataset = false;
		this.i18nEls = [];
		this.statusTimer = null;
		this.app = app;
		this.client = client;
		this.t = t;
		this.cb = cb;
	}
	/** Build the panel DOM inside the host container; returns a cleanup the
	* host may call when the panel closes. */
	attach(container) {
		const root = el("div", "epidbot-panel");
		root.appendChild(this.buildSettings());
		root.appendChild(this.buildSessionBar());
		this.transcript = el("div", "epidbot-transcript");
		this.transcript.setAttribute("role", "log");
		this.transcript.setAttribute("aria-live", "polite");
		root.appendChild(this.transcript);
		this.statusLine = el("div", "epidbot-status");
		this.statusLine.hidden = true;
		root.appendChild(this.statusLine);
		root.appendChild(this.buildContextBar());
		root.appendChild(this.buildQuickBar());
		root.appendChild(this.buildAttachChips());
		this.composerForm = this.buildComposer();
		root.appendChild(this.composerForm);
		this.root = root;
		container.appendChild(root);
		this.startThemeWatcher(container);
		this.fillSettingsForm(this.cb.getSettings());
		if (this.sessionId !== null) this.ensureSessionOption(this.sessionId);
		this.sessionSelect.value = this.sessionId === null ? "" : String(this.sessionId);
		this.applyTexts();
		this.renderTranscript();
		this.setBusy(this.busy);
		if (this.busy) this.showStatus(this.t("status.submitting"));
		this.refreshSessions();
		return () => this.detach();
	}
	/** Sample the host theme now and again when the host flips it. Without
	* this, the quick-prompts `<select>` popup renders in the browser's
	* default (light) scheme on a dark app — unreadable. */
	startThemeWatcher(container) {
		const root = this.root;
		if (!root) return;
		applyTheme(root, container);
		this.themeObserver?.disconnect();
		const themeRoot = document.body?.parentElement ?? document.body ?? root.getRootNode();
		const observer = new MutationObserver(() => {
			if (this.root) applyTheme(this.root, container);
		});
		if (themeRoot instanceof HTMLElement) observer.observe(themeRoot, {
			attributes: true,
			attributeFilter: [
				"class",
				"style",
				"data-theme",
				"data-bs-theme"
			]
		});
		this.themeObserver = observer;
	}
	stopThemeWatcher() {
		this.themeObserver?.disconnect();
		this.themeObserver = null;
	}
	bindText(node, key, attr) {
		this.i18nEls.push({
			el: node,
			key,
			attr
		});
		this.setText(node, key, attr);
	}
	setText(node, key, attr) {
		const text = this.t(key);
		if (attr === "placeholder") node.placeholder = text;
		else if (attr === "title") node.title = text;
		else node.textContent = text;
	}
	buildSettings() {
		const details = el("details", "epidbot-settings");
		this.settingsDetails = details;
		const summary = el("summary");
		const icon = el("span", "epidbot-settings-gear");
		icon.textContent = "⚙";
		const label = el("span");
		this.bindText(label, "settings.title");
		summary.append(icon, label);
		details.appendChild(summary);
		const form = el("form", "epidbot-settings-form");
		const keyLabel = el("label");
		const keyTitle = el("span", "epidbot-label");
		this.bindText(keyTitle, "settings.apiKey");
		this.apiKeyInput = el("input");
		this.apiKeyInput.type = "password";
		this.apiKeyInput.autocomplete = "off";
		this.apiKeyInput.name = "epidbot-api-key";
		this.testButton = el("button", "epidbot-button epidbot-button-secondary");
		this.testButton.type = "button";
		this.bindText(this.testButton, "settings.test");
		this.testResult = el("div", "epidbot-test-result");
		this.testResult.hidden = true;
		keyLabel.append(keyTitle, this.apiKeyInput, this.testButton, this.testResult);
		this.apiKeyHelp = el("p", "epidbot-hint");
		keyLabel.appendChild(this.apiKeyHelp);
		form.appendChild(keyLabel);
		const urlLabel = el("label");
		const urlTitle = el("span", "epidbot-label");
		this.bindText(urlTitle, "settings.serverUrl");
		this.serverUrlInput = el("input");
		this.serverUrlInput.type = "url";
		this.serverUrlInput.spellcheck = false;
		urlLabel.append(urlTitle, this.serverUrlInput);
		form.appendChild(urlLabel);
		const localeLabel = el("label");
		const localeTitle = el("span", "epidbot-label");
		this.bindText(localeTitle, "settings.locale");
		this.localeSelect = el("select");
		for (const value of ["en", "pt-BR"]) {
			const option = el("option");
			option.value = value;
			option.textContent = value === "en" ? "English" : "Português (Brasil)";
			this.localeSelect.appendChild(option);
		}
		localeLabel.append(localeTitle, this.localeSelect);
		form.appendChild(localeLabel);
		const pollLabel = el("label");
		const pollTitle = el("span", "epidbot-label");
		this.bindText(pollTitle, "settings.pollInterval");
		this.pollIntervalInput = el("input");
		this.pollIntervalInput.type = "number";
		this.pollIntervalInput.min = "0.5";
		this.pollIntervalInput.max = "10";
		this.pollIntervalInput.step = "0.5";
		pollLabel.append(pollTitle, this.pollIntervalInput);
		form.appendChild(pollLabel);
		const budgetLabel = el("label");
		const budgetTitle = el("span", "epidbot-label");
		this.bindText(budgetTitle, "settings.inlineBudget");
		this.inlineBudgetInput = el("input");
		this.inlineBudgetInput.type = "number";
		this.inlineBudgetInput.min = "4";
		this.inlineBudgetInput.max = "2048";
		this.inlineBudgetInput.step = "4";
		budgetLabel.append(budgetTitle, this.inlineBudgetInput);
		const budgetHint = el("p", "epidbot-hint");
		this.bindText(budgetHint, "settings.inlineBudgetHelp");
		budgetLabel.appendChild(budgetHint);
		form.appendChild(budgetLabel);
		const artifactsLabel = el("label", "epidbot-checkbox");
		this.artifactUploadsInput = el("input");
		this.artifactUploadsInput.type = "checkbox";
		const artifactsText = el("span");
		this.bindText(artifactsText, "settings.artifactUploads");
		artifactsLabel.append(this.artifactUploadsInput, artifactsText);
		form.appendChild(artifactsLabel);
		const saveButton = el("button", "epidbot-button epidbot-button-primary");
		saveButton.type = "submit";
		this.bindText(saveButton, "settings.save");
		this.savedIndicator = el("span", "epidbot-saved");
		this.savedIndicator.hidden = true;
		form.append(saveButton, this.savedIndicator);
		this.testButton.addEventListener("click", () => void this.testKey());
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			this.saveSettings();
		});
		details.appendChild(form);
		return details;
	}
	buildSessionBar() {
		const bar = el("div", "epidbot-sessionbar");
		const label = el("label", "epidbot-session-select");
		const title = el("span", "epidbot-label");
		this.bindText(title, "session.label");
		this.sessionSelect = el("select");
		this.sessionSelect.appendChild(this.newSessionOption());
		this.sessionSelect.addEventListener("change", () => {
			const value = this.sessionSelect.value;
			if (value === "") this.newSession();
			else this.loadSession(Number(value));
		});
		label.append(title, this.sessionSelect);
		this.sessionNewButton = el("button", "epidbot-button epidbot-button-secondary");
		this.sessionNewButton.type = "button";
		this.bindText(this.sessionNewButton, "session.new");
		this.sessionNewButton.addEventListener("click", () => this.newSession());
		this.sessionExportButton = el("button", "epidbot-button epidbot-button-secondary");
		this.sessionExportButton.type = "button";
		this.bindText(this.sessionExportButton, "session.export");
		this.sessionExportButton.addEventListener("click", () => this.exportMarkdown());
		bar.append(label, this.sessionNewButton, this.sessionExportButton);
		return bar;
	}
	newSessionOption() {
		const option = el("option");
		option.value = "";
		this.bindText(option, "session.none");
		return option;
	}
	/** Context indicator above the composer: the attach switch (persisted in
	* settings) and a preview showing the exact preamble that would be sent. */
	buildContextBar() {
		const bar = el("div", "epidbot-contextbar");
		const label = el("label", "epidbot-checkbox epidbot-context-attach");
		this.contextAttachInput = el("input");
		this.contextAttachInput.type = "checkbox";
		this.contextAttachInput.addEventListener("change", () => {
			this.cb.onSettingsChange({
				...this.cb.getSettings(),
				attachMapContext: this.contextAttachInput.checked
			});
		});
		const text = el("span");
		this.bindText(text, "context.attach");
		this.bindText(label, "context.help", "title");
		label.append(this.contextAttachInput, text);
		this.contextPreviewToggle = el("button", "epidbot-button epidbot-button-secondary epidbot-context-preview-toggle");
		this.contextPreviewToggle.type = "button";
		this.bindText(this.contextPreviewToggle, "context.preview");
		this.contextPreviewToggle.addEventListener("click", () => {
			const preview = this.contextPreview;
			preview.hidden = !preview.hidden;
			if (!preview.hidden) this.fillContextPreview();
		});
		this.contextPreview = el("pre", "epidbot-context-preview");
		this.contextPreview.hidden = true;
		bar.append(label, this.contextPreviewToggle);
		bar.appendChild(this.contextPreview);
		return bar;
	}
	fillContextPreview() {
		const payload = this.cb.buildContext?.() ?? null;
		if (!payload) {
			this.contextPreview.textContent = this.t("context.unavailable");
			return;
		}
		const preamble = buildContextText(payload);
		const size = new TextEncoder().encode(preamble).length;
		this.contextPreview.textContent = preamble || this.t("context.empty");
		if (preamble) this.contextPreview.textContent += `\n\n— ${this.t("context.bytes", { bytes: size })}`;
	}
	static {
		this.QUICK_PROMPT_KEYS = [
			"quick.dengue",
			"quick.malaria",
			"quick.layers",
			"quick.sinan",
			"quick.population"
		];
	}
	/** Preset prompts (QGIS quick_combo): pick one to prefill the composer. */
	buildQuickBar() {
		const bar = el("div", "epidbot-quickbar");
		this.quickSelect = el("select", "epidbot-quick-select");
		const placeholder = el("option");
		placeholder.value = "";
		this.bindText(placeholder, "quick.placeholder");
		this.quickSelect.appendChild(placeholder);
		for (const key of EpidBotPanel.QUICK_PROMPT_KEYS) {
			const option = el("option");
			option.value = key;
			this.bindText(option, key);
			this.quickSelect.appendChild(option);
		}
		this.quickSelect.addEventListener("change", () => {
			const key = this.quickSelect.value;
			this.quickSelect.value = "";
			if (!key) return;
			this.composerInput.value = this.t(key);
			this.composerInput.focus();
		});
		bar.appendChild(this.quickSelect);
		bar.appendChild(this.buildAttachMenu());
		return bar;
	}
	/** The 📎 dropdown offering the four attachment scopes. */
	buildAttachMenu() {
		const details = el("details", "epidbot-attach-menu");
		const summary = el("summary", "epidbot-button epidbot-button-secondary epidbot-attach-button");
		summary.textContent = "📎";
		this.bindText(summary, "attach.label", "title");
		const list = el("div", "epidbot-attach-items");
		const item = (scope, labelKey) => {
			const button = el("button", "epidbot-attach-item");
			button.type = "button";
			this.bindText(button, labelKey);
			button.addEventListener("click", () => {
				details.open = false;
				this.attachLayerData(scope);
			});
			list.appendChild(button);
		};
		item(SCOPE_SELECTION, "attach.selected");
		item(SCOPE_EXTENT, "attach.extent");
		item("all", "attach.all");
		item(SCOPE_IDENTIFIERS, "attach.identifiers");
		details.append(summary, list);
		details.addEventListener("focusout", (event) => {
			if (!details.contains(event.relatedTarget)) details.open = false;
		});
		return details;
	}
	/** Pending attachments as removable chips (hidden while empty). */
	buildAttachChips() {
		this.attachChips = el("div", "epidbot-attach-chips");
		this.attachChips.hidden = true;
		return this.attachChips;
	}
	rebuildChips() {
		if (!this.root) return;
		this.attachChips.replaceChildren();
		this.attachments.forEach((attachment, index) => {
			const chip = el("span", "epidbot-chip");
			const kb = Math.floor(attachment.sizeBytes / 1024) + 1;
			chip.textContent = attachment.artifactId !== void 0 ? `📎 ${attachment.label} → artifact ${attachment.artifactId}` : `📎 ${attachment.label} — ${this.t("attach.chipMeta", {
				count: attachment.featureCount,
				kb
			})}`;
			const remove = el("button", "epidbot-chip-remove");
			remove.type = "button";
			remove.textContent = "✕";
			this.bindText(remove, "attach.remove", "title");
			remove.addEventListener("click", () => {
				this.attachments.splice(index, 1);
				this.rebuildChips();
			});
			chip.appendChild(remove);
			this.attachChips.appendChild(chip);
		});
		this.attachChips.hidden = this.attachments.length === 0;
	}
	clearAttachments() {
		this.attachments = [];
		this.rebuildChips();
	}
	/** Serialize the pending attachments as prompt blocks and the artifact id
	* list (QGIS _attachment_blocks), then empty the chips. */
	takeAttachmentBlocks() {
		const blocks = [];
		const artifactIds = [];
		for (const attachment of this.attachments) {
			if (attachment.artifactId !== void 0) {
				artifactIds.push(attachment.artifactId);
				blocks.push(`[attachment: ${attachment.label} -> artifact ${attachment.artifactId}]`);
				continue;
			}
			blocks.push(`[attachment: ${attachment.label}]\n\`\`\`geojson\n${attachment.geojson}\n\`\`\`\n[/attachment]`);
		}
		this.clearAttachments();
		return {
			blocks,
			artifactIds
		};
	}
	inlineBudgetBytes() {
		const kb = this.cb.getSettings().inlineBudgetKb;
		return Math.max(Math.round(kb * 1024), 1024);
	}
	/** Vector layers that can serve as attachment targets, canvas order. */
	targetLayers() {
		return (this.app.listLayers?.() ?? []).map((layer) => ({
			id: layer.id,
			name: layer.name
		}));
	}
	/** Ask which layer to use; resolves null on cancel. One layer short-circuits. */
	pickLayer() {
		const layers = this.targetLayers();
		if (layers.length === 0) {
			this.flashStatus(this.t("attach.noLayers"));
			return Promise.resolve(null);
		}
		if (layers.length === 1) return Promise.resolve(layers[0] ?? null);
		return new Promise((resolve) => {
			this.openModal((body, done) => {
				const title = el("h3", "epidbot-modal-title");
				this.bindText(title, "attach.pickLayer");
				const select = el("select");
				for (const layer of layers) {
					const option = el("option");
					option.value = layer.id;
					option.textContent = layer.name;
					select.appendChild(option);
				}
				const actions = el("div", "epidbot-modal-actions");
				const ok = el("button", "epidbot-button epidbot-button-primary");
				ok.type = "button";
				this.bindText(ok, "attach.ok");
				ok.addEventListener("click", () => {
					const chosen = layers.find((layer) => layer.id === select.value) ?? null;
					done();
					resolve(chosen);
				});
				const cancel = el("button", "epidbot-button epidbot-button-secondary");
				cancel.type = "button";
				this.bindText(cancel, "attach.cancel");
				cancel.addEventListener("click", () => {
					done();
					resolve(null);
				});
				actions.append(ok, cancel);
				body.append(title, select, actions);
			});
		});
	}
	/** Entry point for the 📎 menu: build an attachment of one scope. */
	async attachLayerData(scope, presetLayer, precision = 6) {
		if (!this.canWriteToMap()) {
			this.flashStatus(this.t("attach.unavailable"));
			return;
		}
		const layer = presetLayer ?? await this.pickLayer();
		if (!layer) return;
		const selectedFeatures = this.app.getSelectedFeatures?.() ?? [];
		const selectedLayerId = this.app.getSelectedLayerId?.() ?? null;
		if (scope === "selection" && (selectedFeatures.length === 0 || selectedLayerId !== layer.id)) {
			this.flashStatus(this.t("prompt.noSelection"));
			return;
		}
		this.flashStatus(this.t("attach.preparing"));
		let features;
		try {
			features = this.app.getLayerFeatures?.(layer.id) ?? [];
		} catch (err) {
			this.flashStatus(this.t("results.loadFailed", { reason: err instanceof Error ? err.message : String(err) }));
			return;
		}
		if (features.length === 0) {
			this.flashStatus(this.t("attach.noLayers"));
			return;
		}
		const attempt = {
			layerId: layer.id,
			layerName: layer.name,
			features,
			scope,
			precision
		};
		let attachment;
		try {
			attachment = scope === "identifiers" ? collectIdentifiers({
				layerName: layer.name,
				features,
				budgetBytes: this.inlineBudgetBytes()
			}) : collectAttachment({
				scope,
				layerName: layer.name,
				features,
				selectedFeatures: scope === "selection" ? selectedFeatures : void 0,
				viewBounds: this.app.getViewBounds?.() ?? null,
				budgetBytes: this.inlineBudgetBytes(),
				precision
			});
		} catch (err) {
			this.lastAttempt = attempt;
			this.askStatsOrCancel(err instanceof Error ? err.message : String(err));
			return;
		}
		this.showStatus(null);
		if (!attachment.overBudget) {
			this.lastAttempt = attempt;
			this.attachments.push(attachment);
			this.rebuildChips();
			return;
		}
		this.lastAttempt = attempt;
		this.askReduction(attachment);
	}
	/** Interactive reduction menu (QGIS _ask_reduction). */
	askReduction(attachment) {
		const attempt = this.lastAttempt;
		if (!attempt) return;
		const sizeKb = Math.floor(attachment.sizeBytes / 1024) + 1;
		const budgetKb = Math.floor(this.inlineBudgetBytes() / 1024);
		const hasSelection = (this.app.getSelectedFeatures?.() ?? []).length > 0 && this.app.getSelectedLayerId?.() === attempt.layerId;
		const precision = attempt.precision;
		this.openModal((body, done) => {
			const title = el("h3", "epidbot-modal-title");
			this.bindText(title, "attach.tooLargeTitle");
			const message = el("p", "epidbot-modal-text");
			message.textContent = this.t("attach.tooLarge", {
				label: attachment.label,
				size: sizeKb,
				budget: budgetKb
			});
			const actions = el("div", "epidbot-modal-actions epidbot-modal-actions-column");
			const option = (labelKey, enabled, run) => {
				const button = el("button", "epidbot-button epidbot-button-secondary");
				button.type = "button";
				this.bindText(button, labelKey);
				button.disabled = !enabled;
				button.addEventListener("click", () => {
					done();
					run();
				});
				actions.appendChild(button);
			};
			option("attach.limitExtent", attempt.scope === "all" && this.app.getViewBounds?.() != null, () => void this.attachLayerData(SCOPE_EXTENT, {
				id: attempt.layerId,
				name: attempt.layerName
			}, precision));
			option("attach.narrowSelection", attempt.scope === "extent" && hasSelection, () => void this.attachLayerData(SCOPE_SELECTION, {
				id: attempt.layerId,
				name: attempt.layerName
			}, precision));
			option("attach.reducePrecision", precision > 3, () => void this.attachLayerData(attempt.scope, {
				id: attempt.layerId,
				name: attempt.layerName
			}, precision > 4 ? 4 : 3));
			option("attach.uploadArtifact", this.cb.getSettings().artifactUploads && this.cb.getApiKey() !== "", () => void this.uploadAsArtifact(attachment));
			option("attach.statsOnly", true, () => {
				this.fallBackToStats();
			});
			const cancel = el("button", "epidbot-button epidbot-button-secondary");
			cancel.type = "button";
			this.bindText(cancel, "attach.cancel");
			cancel.addEventListener("click", done);
			actions.appendChild(cancel);
			body.append(title, message, actions);
		});
	}
	/** "Send statistics only": the context block already carries the layer
	* summaries, so switching the context on is the fallback (QGIS). */
	fallBackToStats() {
		if (!this.cb.getSettings().attachMapContext) {
			this.cb.onSettingsChange({
				...this.cb.getSettings(),
				attachMapContext: true
			});
			this.contextAttachInput.checked = true;
		}
		this.flashStatus(this.t("attach.dropped"));
	}
	/** Tier 2: upload the serialized layer as a server artifact. */
	async uploadAsArtifact(attachment) {
		this.showStatus(this.t("attach.uploading"));
		const filename = `${attachment.label.replace(/[^\w.-]+/g, "_").slice(0, 60)}.geojson`;
		try {
			const response = await this.client.uploadArtifact(new Blob([attachment.geojson], { type: "application/geo+json" }), filename);
			const artifactId = EpidBotClient.artifactIdFrom(response);
			this.showStatus(null);
			if (artifactId === null) {
				this.flashStatus(this.t("attach.noArtifactId"));
				return;
			}
			this.attachments.push({
				...attachment,
				artifactId
			});
			this.rebuildChips();
		} catch (err) {
			this.showStatus(null);
			this.flashStatus(this.t("attach.uploadFailed", { reason: err instanceof Error ? err.message : String(err) }));
		}
	}
	askStatsOrCancel(message) {
		this.showStatus(null);
		this.openModal((body, done) => {
			const title = el("h3", "epidbot-modal-title");
			this.bindText(title, "attach.failedTitle");
			const text = el("p", "epidbot-modal-text");
			text.textContent = message;
			const actions = el("div", "epidbot-modal-actions");
			const stats = el("button", "epidbot-button epidbot-button-primary");
			stats.type = "button";
			this.bindText(stats, "attach.statsOnly");
			stats.addEventListener("click", () => {
				done();
				this.fallBackToStats();
			});
			const cancel = el("button", "epidbot-button epidbot-button-secondary");
			cancel.type = "button";
			this.bindText(cancel, "attach.cancel");
			cancel.addEventListener("click", done);
			actions.append(stats, cancel);
			body.append(title, text, actions);
		});
	}
	/** Small modal helper: builds an overlay inside the panel root. `build`
	* fills the card body and receives `done` (closes the overlay). */
	openModal(build) {
		if (!this.root) return () => {};
		const overlay = el("div", "epidbot-overlay");
		const card = el("div", "epidbot-modal");
		card.setAttribute("role", "dialog");
		card.setAttribute("aria-modal", "true");
		const body = el("div", "epidbot-modal-body");
		const done = () => overlay.remove();
		build(body, done);
		card.appendChild(body);
		overlay.appendChild(card);
		overlay.addEventListener("click", (event) => {
			if (event.target === overlay) done();
		});
		const onKey = (event) => {
			if (event.key === "Escape") {
				done();
				overlay.removeEventListener("keydown", onKey);
			}
		};
		overlay.addEventListener("keydown", onKey);
		this.root.appendChild(overlay);
		return done;
	}
	buildComposer() {
		const form = el("form", "epidbot-composer");
		this.composerInput = el("textarea");
		this.composerInput.rows = 3;
		this.bindText(this.composerInput, "composer.placeholder", "placeholder");
		this.composerInput.addEventListener("keydown", (event) => {
			if (event.key === "Enter" && !event.shiftKey) {
				event.preventDefault();
				this.submitComposer();
			}
		});
		this.composerButton = el("button", "epidbot-button epidbot-button-primary");
		this.composerButton.type = "submit";
		this.bindText(this.composerButton, "composer.send");
		form.append(this.composerInput, this.composerButton);
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			this.submitComposer(true);
		});
		return form;
	}
	applyTexts() {
		for (const entry of this.i18nEls) this.setText(entry.el, entry.key, entry.attr);
		this.apiKeyHelp.textContent = this.t("settings.apiKeyHelp", { storage: this.storageName() });
	}
	storageName() {
		const location = credentialLocation(this.app);
		if (location === "keychain") return this.t("settings.storage.keychain");
		if (location === "browser") return this.t("settings.storage.browser");
		return this.t("settings.storage.none");
	}
	/** Host cleanup (the panel was closed or displaced by another panel):
	* remove the DOM but keep state and any in-flight question running.
	* Re-attach restores the transcript, including the answer when it
	* arrives while detached. */
	detach() {
		this.stopThemeWatcher();
		this.root?.remove();
		this.root = null;
		this.i18nEls.length = 0;
	}
	/** Full teardown (plugin deactivation): stop everything and reset. */
	dispose() {
		this.abort?.abort();
		this.abort = null;
		if (this.statusTimer !== null) {
			window.clearTimeout(this.statusTimer);
			this.statusTimer = null;
		}
		this.busy = false;
		for (const url of this.objectUrls) URL.revokeObjectURL(url);
		this.objectUrls = [];
		this.detach();
	}
	retranslate() {
		if (!this.root) return;
		this.applyTexts();
		if (this.turns.length === 0) this.renderTranscript();
	}
	openSettings() {
		if (!this.root || !this.settingsDetails) return;
		this.settingsDetails.open = true;
		this.apiKeyInput.focus();
	}
	newSession() {
		this.abort?.abort();
		this.setSessionId(null);
		this.turns = [];
		if (!this.root) return;
		this.renderTranscript();
		if (!this.cb.getApiKey()) return;
		const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace("T", " ");
		this.client.createSession(this.t("session.createdName", { stamp })).then((created) => {
			const id = typeof created.id === "number" ? created.id : null;
			if (id !== null && this.root) this.setSessionId(id);
		}).catch(() => {});
	}
	getSessionId() {
		return this.sessionId;
	}
	setSessionId(id) {
		this.sessionId = id;
		if (!this.root) return;
		if (id !== null) this.ensureSessionOption(id);
		this.sessionSelect.value = id === null ? "" : String(id);
	}
	applySettings(next) {
		if (!this.root) return;
		this.fillSettingsForm(next);
	}
	/** Ask a question programmatically (composer submit, toolbar spatial
	* prompts and, later, the host assistant go through here). */
	async ask(question, opts = {}) {
		if (this.busy || !this.root) return;
		const text = question.trim();
		if (!text) return;
		if (!this.cb.getApiKey()) {
			this.appendError({ key: "error.noKey" });
			this.openSettings();
			return;
		}
		this.turns.push({
			role: "user",
			text,
			images: []
		});
		this.appendBubble("user", text);
		const pending = this.appendPendingAssistant();
		this.setBusy(true);
		this.abort = new AbortController();
		this.showStatus(this.t("status.submitting"));
		try {
			const preamble = opts.forceContext === true || this.oneShotContext || this.cb.getSettings().attachMapContext ? buildContextText(this.cb.buildContext?.() ?? emptyContext()) : "";
			const { blocks, artifactIds } = this.takeAttachmentBlocks();
			const message = attachContext(blocks.length > 0 ? [...blocks, text].join("\n\n") : text, preamble);
			const result = await this.client.ask(message, {
				sessionId: this.sessionId,
				locale: this.cb.getSettings().answerLocale,
				artifactIds: artifactIds.length > 0 ? artifactIds : void 0,
				signal: this.abort.signal,
				onStatus: (jobId) => this.showStatus(this.t("status.thinking", { job: jobId.slice(0, 8) }))
			});
			const turn = {
				role: "assistant",
				text: result.content,
				images: result.images
			};
			this.turns.push(turn);
			this.renderAssistantInto(pending, turn, text);
			if (!pending.isConnected && this.root && this.turns.length > 0) this.renderTranscript();
			if (result.sessionId !== null) this.setSessionId(result.sessionId);
			this.refreshSessions();
		} catch (err) {
			pending.remove();
			if (this.turns.length > 0) this.appendError(errorInfo(err));
		} finally {
			this.setBusy(false);
			this.showStatus(null);
			this.abort = null;
			this.oneShotContext = false;
		}
	}
	/** Prefill the composer with a question about the current extent and
	* force-attach the map context for the next send. */
	promptExtent() {
		if (!this.root) return;
		if (!(this.cb.buildContext?.() ?? null)?.viewBounds) {
			this.flashStatus(this.t("prompt.noExtent"));
			return;
		}
		this.composerInput.value = this.t("prompt.extent");
		this.oneShotContext = true;
		this.composerInput.focus();
	}
	/** Prefill the composer with a question about the current selection and
	* force-attach the map context for the next send. */
	promptSelection() {
		if (!this.root) return;
		if ((this.app.getSelectedFeatures?.().length ?? 0) === 0) {
			this.flashStatus(this.t("prompt.noSelection"));
			return;
		}
		this.composerInput.value = this.t("prompt.selection");
		this.oneShotContext = true;
		this.composerInput.focus();
	}
	/** Toolbar "Let EpidBot edit this layer…": attach the layer's identifiers
	* and prefill a prompt asking for an epidbot-edit block (QGIS 0.3.0). */
	async promptEditLayer() {
		if (!this.root) return;
		if (!this.canWriteToMap() || !this.app.getLayerFeatures || !this.app.updateGeoJsonLayer) {
			this.flashStatus(this.t("attach.unavailable"));
			return;
		}
		const layer = await this.pickLayer();
		if (!layer) return;
		await this.attachLayerData(SCOPE_IDENTIFIERS, layer);
		const features = this.app.getLayerFeatures?.(layer.id) ?? [];
		const fieldNames = /* @__PURE__ */ new Set();
		for (const feature of features.slice(0, 50)) {
			const properties = feature.properties;
			if (!properties || typeof properties !== "object") continue;
			for (const name of Object.keys(properties)) fieldNames.add(name);
		}
		const joinKey = pickJoinKey([...fieldNames]);
		this.composerInput.value = joinKey ? this.t("prompt.editLayer", { key: joinKey }) : this.t("prompt.editLayerNoKey");
		this.composerInput.focus();
	}
	renderTranscript() {
		this.transcript.replaceChildren();
		if (this.turns.length === 0) {
			this.transcript.appendChild(this.buildWelcome());
			return;
		}
		for (let i = 0; i < this.turns.length; i += 1) {
			const turn = this.turns[i];
			const bubble = this.appendBubble(turn.role, turn.role === "user" ? turn.text : void 0);
			if (turn.role === "assistant") {
				const question = this.turns[i - 1]?.role === "user" ? this.turns[i - 1].text : "";
				this.renderAssistantInto(bubble, turn, question);
			}
		}
		this.scrollToEnd();
	}
	buildWelcome() {
		const card = el("div", "epidbot-welcome");
		const title = el("h2");
		this.bindText(title, "welcome.title");
		const body = el("p");
		this.bindText(body, "welcome.body");
		card.append(title, body);
		if (!this.cb.getApiKey()) {
			const hint = el("p", "epidbot-hint");
			this.bindText(hint, "welcome.noKey");
			const link = el("a");
			link.href = API_KEY_URL;
			link.target = "_blank";
			link.rel = "noopener noreferrer";
			this.bindText(link, "welcome.getApiKey");
			card.append(hint, link);
		}
		return card;
	}
	appendBubble(role, text) {
		const bubble = el("div", `epidbot-msg epidbot-msg-${role}`);
		if (text !== void 0) bubble.textContent = text;
		this.transcript.appendChild(bubble);
		this.scrollToEnd();
		return bubble;
	}
	appendPendingAssistant() {
		const bubble = el("div", "epidbot-msg epidbot-msg-assistant epidbot-msg-pending");
		bubble.textContent = "…";
		this.transcript.appendChild(bubble);
		this.scrollToEnd();
		return bubble;
	}
	renderAssistantInto(bubble, turn, question = "") {
		bubble.classList.remove("epidbot-msg-pending");
		bubble.replaceChildren();
		if (turn.text) bubble.appendChild(renderMarkdown(turn.text, {
			resolveImage: () => null,
			codeCopyLabels: {
				copy: this.t("code.copy"),
				copied: this.t("code.copied")
			}
		}));
		for (const ref of turn.images) bubble.appendChild(this.buildPlotCard(ref));
		if (turn.text && this.canWriteToMap() && this.app.getLayerFeatures && this.app.updateGeoJsonLayer) for (const op of extractEditOps(turn.text)) bubble.appendChild(this.buildEditRow(op));
		if (turn.text && this.canWriteToMap()) {
			const cards = this.buildResultCards(turn.text, question);
			if (cards) bubble.appendChild(cards);
		}
		this.scrollToEnd();
	}
	/** One "review field edit" row per epidbot-edit operation. */
	buildEditRow(op) {
		const row = el("div", "epidbot-edit-row");
		const button = el("button", "epidbot-button epidbot-button-secondary");
		button.type = "button";
		button.textContent = "🛠";
		const caption = el("span", "epidbot-edit-caption");
		let summaryKey = "edit.review";
		let summaryParams = {
			name: "?",
			type: ""
		};
		try {
			const normalized = validateEditOp(op);
			summaryParams = {
				name: normalized.field.name,
				type: normalized.field.type
			};
		} catch {
			summaryKey = "edit.reviewInvalid";
		}
		this.bindText(caption, summaryKey, void 0);
		caption.textContent = this.t(summaryKey, summaryParams);
		button.title = caption.textContent;
		button.addEventListener("click", () => this.openEditModal(op));
		row.append(button, caption);
		return row;
	}
	/** The mandatory human-in-the-loop preview for an edit operation. Nothing
	* is written until Apply; afterwards the message gains a Revert chip. */
	openEditModal(op) {
		let normalized;
		try {
			normalized = validateEditOp(op);
		} catch (err) {
			this.showEditErrorModal(err instanceof Error ? err.message : String(err));
			return;
		}
		const hint = normalized.layer.trim().toLowerCase();
		const allLayers = this.targetLayers();
		const candidates = hint ? allLayers.filter((layer) => layer.name.toLowerCase() === hint) : [];
		const choices = candidates.length > 0 ? candidates : allLayers;
		this.openModal((body, done) => {
			const title = el("h3", "epidbot-modal-title");
			this.bindText(title, "edit.title");
			const intro = el("p", "epidbot-modal-text");
			this.bindText(intro, "edit.intro");
			const targetLabel = el("label", "epidbot-modal-label");
			const targetTitle = el("span", "epidbot-label");
			this.bindText(targetTitle, "edit.targetLabel");
			const select = el("select");
			for (const layer of choices) {
				const option = el("option");
				option.value = layer.id;
				option.textContent = layer.name;
				select.appendChild(option);
			}
			if (choices.length <= 1) select.disabled = true;
			targetLabel.append(targetTitle, select);
			const opWord = normalized.op === "add_field" ? this.t("edit.opAdd") : this.t("edit.opUpdate");
			const confidence = normalized.confidence === "fetched" ? this.t("edit.confidenceFetched") : normalized.confidence === "estimated" ? this.t("edit.confidenceEstimated") : "";
			const summary = el("p", "epidbot-modal-text");
			summary.textContent = this.t("edit.summary", {
				op: opWord,
				name: normalized.field.name,
				type: normalized.field.type,
				key: normalized.key,
				confidence
			});
			const stats = el("p", "epidbot-modal-text epidbot-edit-stats");
			const sample = el("pre", "epidbot-edit-sample");
			let selectedLayer = choices[0] ?? null;
			const refreshStats = () => {
				selectedLayer = choices.find((layer) => layer.id === select.value) ?? null;
				stats.textContent = "";
				sample.textContent = "";
				sample.hidden = true;
				if (!selectedLayer) {
					stats.textContent = this.t("edit.noMatchingLayer");
					return;
				}
				let features;
				try {
					features = this.app.getLayerFeatures?.(selectedLayer.id) ?? [];
				} catch (err) {
					stats.textContent = this.t("edit.cannotJoin", { reason: err instanceof Error ? err.message : String(err) });
					return;
				}
				try {
					requireJoinField(features, normalized.key, selectedLayer.name);
					const keys = buildLayerKeys(features, normalized.key);
					const plan = planEdit(normalized.values, keys, normalized.field.type);
					const unmatched = plan.unmatched.length;
					const invalid = plan.invalid.length;
					stats.textContent = this.t("edit.stats", {
						matched: plan.matched.size,
						total: Object.keys(normalized.values).length,
						unmatched,
						invalid
					});
					if (unmatched > 0) {
						const shown = plan.unmatched.slice(0, 5).join(", ");
						stats.textContent += "\n" + this.t("edit.unmatchedKeys", { keys: shown + (unmatched > 5 ? "…" : "") });
					}
					const rows = [...plan.matched.entries()].slice(0, 8);
					const lines = rows.map(([index, value]) => `${index} -> ${value}`);
					if (plan.matched.size > rows.length) lines.push(this.t("edit.moreRows", { count: plan.matched.size - rows.length }));
					if (lines.length > 0) {
						sample.textContent = lines.join("\n");
						sample.hidden = false;
					}
				} catch (err) {
					stats.textContent = this.t("edit.cannotJoin", { reason: err instanceof Error ? err.message : String(err) });
				}
			};
			select.addEventListener("change", refreshStats);
			refreshStats();
			const errorLine = el("p", "epidbot-modal-error");
			errorLine.hidden = true;
			const actions = el("div", "epidbot-modal-actions");
			const apply = el("button", "epidbot-button epidbot-button-primary");
			apply.type = "button";
			this.bindText(apply, "edit.apply");
			apply.addEventListener("click", () => {
				if (!selectedLayer) return;
				let features;
				try {
					features = this.app.getLayerFeatures?.(selectedLayer.id) ?? [];
				} catch (err) {
					errorLine.textContent = this.t("edit.notApplied", { reason: err instanceof Error ? err.message : String(err) });
					errorLine.hidden = false;
					return;
				}
				try {
					const report = applyEditOp(this.app, {
						layerId: selectedLayer.id,
						layerName: selectedLayer.name,
						features
					}, normalized);
					done();
					this.appendEditApplied(report);
				} catch (err) {
					const reason = err instanceof Error ? err.message : String(err);
					if (err instanceof EditOpError) {
						errorLine.textContent = this.t("edit.notApplied", { reason });
						errorLine.hidden = false;
					} else {
						done();
						this.flashStatus(this.t("edit.notApplied", { reason }));
					}
				}
			});
			const cancel = el("button", "epidbot-button epidbot-button-secondary");
			cancel.type = "button";
			this.bindText(cancel, "edit.cancel");
			cancel.addEventListener("click", done);
			actions.append(apply, cancel);
			body.append(title, intro, targetLabel, summary, stats, sample, errorLine, actions);
		});
	}
	showEditErrorModal(message) {
		this.openModal((body, done) => {
			const title = el("h3", "epidbot-modal-title");
			this.bindText(title, "edit.title");
			const text = el("p", "epidbot-modal-text");
			this.bindText(text, "edit.invalidOp");
			const details = el("pre", "epidbot-edit-sample");
			details.textContent = message;
			const actions = el("div", "epidbot-modal-actions");
			const close = el("button", "epidbot-button epidbot-button-secondary");
			close.type = "button";
			this.bindText(close, "edit.cancel");
			close.addEventListener("click", done);
			actions.appendChild(close);
			body.append(title, text, details, actions);
		});
	}
	/** Success notice with a Revert chip (the host has no undo). */
	appendEditApplied(report) {
		const notice = el("div", "epidbot-msg epidbot-msg-assistant epidbot-edit-notice");
		const unmatchedNote = report.unmatched.length > 0 ? this.t("edit.unmatchedNote", { count: report.unmatched.length }) : "";
		const text = el("span");
		text.textContent = "✅ " + this.t("edit.applied", {
			op: report.op,
			field: report.field,
			layer: report.layerName,
			matched: report.matched,
			note: unmatchedNote
		});
		const revert = el("button", "epidbot-button epidbot-button-secondary");
		revert.type = "button";
		this.bindText(revert, "edit.revert");
		revert.addEventListener("click", () => {
			try {
				report.revert();
				revert.disabled = true;
				this.flashStatus(this.t("edit.reverted"));
			} catch (err) {
				this.flashStatus(this.t("edit.revertFailed", { reason: err instanceof Error ? err.message : String(err) }));
			}
		});
		notice.append(text, revert);
		this.transcript.appendChild(notice);
		this.scrollToEnd();
	}
	/** Map-writing actions are offered on the 2D renderers only; on
	* cesium/arcgis the chat works and the cards stay hidden. A host without
	* getMapRenderer is assumed to be 2D. */
	canWriteToMap() {
		const renderer = this.app.getMapRenderer?.();
		return renderer === void 0 || renderer === "maplibre" || renderer === "mapbox";
	}
	/** "Add to the map" cards for GeoJSON blocks and data URLs found in an
	* answer. Null when the answer has none. */
	buildResultCards(answerText, question) {
		const blocks = extractResultBlocks(answerText);
		if (blocks.length === 0) return null;
		const wrap = el("div", "epidbot-results");
		const title = el("div", "epidbot-results-title");
		this.bindText(title, "results.title");
		wrap.appendChild(title);
		let index = 0;
		for (const block of blocks) {
			index += 1;
			const card = block.kind === "geojson" ? this.buildGeoJsonCard(block, question, index) : this.buildLayerUrlCard(block, question, index);
			if (card) wrap.appendChild(card);
		}
		return wrap.children.length > 1 ? wrap : null;
	}
	layerName(question, index) {
		const trimmed = question.trim().replace(/\s+/g, " ");
		return `EpidBot · ${(trimmed.length > 40 ? `${trimmed.slice(0, 40)}…` : trimmed) || `result ${index}`}`;
	}
	buildGeoJsonCard(block, question, index) {
		const card = el("div", "epidbot-result");
		const title = el("div", "epidbot-result-title");
		title.textContent = `GeoJSON · ${this.t("results.features", { count: block.featureCount })} · ${geometrySummary(block.geometryTypes)}`;
		const actions = el("div", "epidbot-result-actions");
		const add = el("button", "epidbot-button epidbot-button-primary");
		add.type = "button";
		this.bindText(add, "results.addToMap");
		add.addEventListener("click", () => {
			const name = this.layerName(question, index);
			try {
				const layerId = this.app.addGeoJsonLayer(name, block.fc);
				const styled = this.app.importLayerStyle?.(layerId, styleFor(block.fc));
				if (styled && !styled.ok) this.flashStatus(this.t("results.styleFailed"));
				this.cb.onLayerAdded?.({
					layerId,
					name,
					kind: "geojson",
					question,
					addedAt: (/* @__PURE__ */ new Date()).toISOString()
				});
				add.disabled = true;
				this.setText(add, "results.added");
			} catch (err) {
				this.flashStatus(this.t("results.addFailed", { reason: err instanceof Error ? err.message : String(err) }));
			}
		});
		const download = el("button", "epidbot-button epidbot-button-secondary");
		download.type = "button";
		this.bindText(download, "results.download");
		download.addEventListener("click", () => {
			const blob = new Blob([JSON.stringify(block.fc)], { type: "application/geo+json" });
			const url = URL.createObjectURL(blob);
			this.objectUrls.push(url);
			const link = el("a");
			link.href = url;
			link.download = `epidbot-result-${index}.geojson`;
			link.click();
		});
		actions.append(add, download);
		card.append(title, actions);
		return card;
	}
	buildLayerUrlCard(block, question, index) {
		const card = el("div", "epidbot-result");
		const title = el("div", "epidbot-result-title");
		title.textContent = `${block.urlKind === "tiles" ? "Tiles" : block.artifact ? "EpidBot artifact" : block.urlKind === "csv" ? "CSV" : "Dataset"} · ${block.url}`;
		const actions = el("div", "epidbot-result-actions");
		if (block.urlKind === "tiles") {
			if (!this.app.addTileLayer) return null;
			const add = el("button", "epidbot-button epidbot-button-primary");
			add.type = "button";
			this.bindText(add, "results.addTile");
			add.addEventListener("click", () => {
				try {
					const name = this.layerName(question, index);
					const layerId = this.app.addTileLayer?.(name, block.url, { attribution: "Added by EpidBot" });
					if (layerId) this.cb.onLayerAdded?.({
						layerId,
						name,
						kind: "url",
						question,
						addedAt: (/* @__PURE__ */ new Date()).toISOString()
					});
					add.disabled = true;
					this.setText(add, "results.added");
				} catch (err) {
					this.flashStatus(this.t("results.addFailed", { reason: err instanceof Error ? err.message : String(err) }));
				}
			});
			actions.appendChild(add);
			card.append(title, actions);
			return card;
		}
		const add = el("button", "epidbot-button epidbot-button-primary");
		add.type = "button";
		this.bindText(add, "results.addToMap");
		add.addEventListener("click", () => {
			this.loadDatasetCard(block, question, index, add);
		});
		const download = el("button", "epidbot-button epidbot-button-secondary");
		download.type = "button";
		this.bindText(download, "results.downloadFile");
		download.addEventListener("click", () => {
			this.downloadDatasetFile(block, index);
		});
		actions.append(add, download);
		card.append(title, actions);
		return card;
	}
	/** Fetch + parse + validate a dataset card, then add it as a styled layer
	* (authenticated for EpidBot artifacts and same-server URLs). */
	async loadDatasetCard(block, question, index, add) {
		if (this.loadingDataset) {
			this.flashStatus(this.t("results.stillLoading"));
			return;
		}
		this.loadingDataset = true;
		const name = this.layerName(question, index);
		this.showStatus(this.t("results.loading", { name }));
		try {
			const blob = await this.client.downloadWithAuth(block.url, { signal: this.abort?.signal });
			const fc = await this.parseDatasetBlob(blob, block);
			if (!fc) {
				this.flashStatus(this.t("results.unreadable"));
				return;
			}
			const layerId = this.app.addGeoJsonLayer(name, fc);
			const styled = this.app.importLayerStyle?.(layerId, styleFor(fc));
			if (styled && !styled.ok) this.flashStatus(this.t("results.styleFailed"));
			this.cb.onLayerAdded?.({
				layerId,
				name,
				kind: "url",
				question,
				addedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			add.disabled = true;
			this.setText(add, "results.added");
			this.flashStatus(this.t("results.addedNotice", { name }));
		} catch (err) {
			this.flashStatus(this.t("results.loadFailed", { reason: err instanceof Error ? err.message : String(err) }));
		} finally {
			this.loadingDataset = false;
			this.showStatus(null);
		}
	}
	/** Turn fetched bytes into a validated FeatureCollection: CSV tables are
	* converted client-side when coordinate columns exist. */
	async parseDatasetBlob(blob, block) {
		const text = await blob.text();
		const trimmed = text.trim();
		if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
			const validation = validateGeoJson(JSON.parse(trimmed));
			if (!validation.ok || !validation.fc) throw new EpidBotApiError(`Invalid GeoJSON: ${validation.reason ?? "unknown"}`);
			return validation.fc;
		}
		if (block.urlKind === "csv" || /\.csv(\?|#|$)/i.test(block.url)) return csvToFeatureCollection(text)?.fc ?? null;
		return null;
	}
	/** Download the raw bytes of a dataset card to the user's device. */
	async downloadDatasetFile(block, index) {
		try {
			const blob = await this.client.downloadWithAuth(block.url, { signal: this.abort?.signal });
			const url = URL.createObjectURL(blob);
			this.objectUrls.push(url);
			const link = el("a");
			const path = block.url.split("?", 1)[0];
			const base = path.slice(path.lastIndexOf("/") + 1) || `epidbot-dataset-${index}`;
			link.href = url;
			link.download = decodeURIComponent(base);
			link.click();
		} catch (err) {
			this.flashStatus(this.t("results.loadFailed", { reason: err instanceof Error ? err.message : String(err) }));
		}
	}
	buildPlotCard(imageRef) {
		const filename = EpidBotClient.extractPlotFilename(imageRef);
		const card = el("figure", "epidbot-plot");
		const loading = el("div", "epidbot-plot-loading");
		this.bindText(loading, "status.loadingPlots");
		card.appendChild(loading);
		this.client.fetchPlot(filename).then((blob) => {
			if (!this.root) return;
			const url = URL.createObjectURL(blob);
			this.objectUrls.push(url);
			const img = el("img", "epidbot-plot-image");
			img.alt = filename;
			img.src = url;
			const save = el("a", "epidbot-button epidbot-button-secondary epidbot-plot-save");
			save.href = url;
			save.download = filename;
			this.bindText(save, "plot.download");
			loading.remove();
			card.append(img, save);
			this.scrollToEnd();
		}).catch((err) => {
			if (!this.root) return;
			loading.remove();
			if (err instanceof EpidBotApiError && err.status === 401) {
				this.appendError({ key: "error.auth" });
				return;
			}
			const failed = el("div", "epidbot-plot-error");
			this.bindText(failed, "plot.loadFailed");
			card.appendChild(failed);
		});
		return card;
	}
	appendError(info) {
		const bubble = el("div", "epidbot-msg epidbot-msg-assistant epidbot-msg-error");
		bubble.textContent = this.t(info.key, info.params);
		this.transcript.appendChild(bubble);
		this.scrollToEnd();
	}
	scrollToEnd() {
		this.transcript.scrollTop = this.transcript.scrollHeight;
	}
	showStatus(text) {
		this.statusLine.hidden = text === null;
		this.statusLine.textContent = text ?? "";
	}
	/** Show a status message that clears itself (used for transient notices). */
	flashStatus(text) {
		this.showStatus(text);
		if (this.statusTimer !== null) window.clearTimeout(this.statusTimer);
		this.statusTimer = window.setTimeout(() => {
			this.showStatus(null);
			this.statusTimer = null;
		}, 4e3);
	}
	setBusy(busy) {
		this.busy = busy;
		this.composerButton.textContent = busy ? this.t("composer.stop") : this.t("composer.send");
	}
	async submitComposer(stopIfBusy = false) {
		if (this.busy) {
			if (stopIfBusy) this.abort?.abort();
			return;
		}
		const text = this.composerInput.value;
		if (!text.trim()) return;
		this.composerInput.value = "";
		await this.ask(text);
	}
	ensureSessionOption(id) {
		const value = String(id);
		if (!Array.from(this.sessionSelect.options).some((option) => option.value === value)) {
			const option = el("option");
			option.value = value;
			option.textContent = `#${id}`;
			this.sessionSelect.appendChild(option);
		}
	}
	async refreshSessions() {
		if (this.sessionsRefreshed || !this.cb.getApiKey() || !this.root) return;
		this.sessionsRefreshed = true;
		try {
			const sessions = await this.client.listSessions();
			if (!this.root) return;
			for (const session of sessions.slice(0, 50)) {
				const id = typeof session.id === "number" ? session.id : void 0;
				if (id === void 0) continue;
				this.ensureSessionOption(id);
				const option = this.sessionSelect.options.namedItem(String(id));
				if (option) option.textContent = session.name ? session.name : `#${id}`;
			}
			if (this.sessionId !== null) this.setSessionId(this.sessionId);
		} catch {}
	}
	async loadSession(id) {
		try {
			const payload = await this.client.getMessages(id);
			if (!this.root) return;
			this.turns = turnsFromHistory(payload);
			this.setSessionId(id);
			this.renderTranscript();
		} catch (err) {
			this.appendError({ key: "session.loadFailed" });
			if (!(err instanceof EpidBotApiError)) throw err;
		}
	}
	exportMarkdown() {
		if (!this.root) return;
		if (this.turns.length === 0) {
			this.flashStatus(this.t("session.exportEmpty"));
			return;
		}
		const lines = [`# ${this.t("panel.title")}`, ""];
		lines.push(`> ${this.t("session.label")}: ${this.sessionId ?? this.t("session.none")}`, "");
		for (const turn of this.turns) {
			lines.push(turn.role === "user" ? "**You:**" : "**EpidBot:**", "", turn.text, "");
			if (turn.images.length > 0) for (const image of turn.images) lines.push(`![plot](${image})`, "");
		}
		const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		this.objectUrls.push(url);
		const link = el("a");
		const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace(/[:T]/g, "-");
		link.href = url;
		link.download = `epidbot-chat-${stamp}.md`;
		link.click();
		window.setTimeout(() => URL.revokeObjectURL(url), 1e4);
	}
	fillSettingsForm(settings) {
		this.serverUrlInput.value = settings.serverUrl;
		this.localeSelect.value = settings.answerLocale;
		this.pollIntervalInput.value = String(settings.pollIntervalSec);
		this.inlineBudgetInput.value = String(settings.inlineBudgetKb);
		this.artifactUploadsInput.checked = settings.artifactUploads;
		if (this.contextAttachInput) this.contextAttachInput.checked = settings.attachMapContext;
	}
	readSettingsForm() {
		return sanitizeSettings({
			serverUrl: this.serverUrlInput.value,
			answerLocale: this.localeSelect.value,
			pollIntervalSec: Number(this.pollIntervalInput.value),
			inlineBudgetKb: Number(this.inlineBudgetInput.value),
			artifactUploads: this.artifactUploadsInput.checked,
			attachMapContext: this.cb.getSettings().attachMapContext
		});
	}
	saveSettings() {
		const next = this.readSettingsForm();
		const enteredKey = this.apiKeyInput.value;
		if (enteredKey !== this.cb.getApiKey()) {
			if (this.saveKey(enteredKey, next.serverUrl) === "unavailable" && enteredKey) {
				this.savedIndicator.hidden = false;
				this.savedIndicator.textContent = this.t("settings.storage.none");
				this.cb.onSettingsChange(next);
				return;
			}
		}
		this.cb.onSettingsChange(next);
		this.savedIndicator.hidden = false;
		this.savedIndicator.textContent = this.t("settings.saved");
		window.setTimeout(() => {
			this.savedIndicator.hidden = true;
		}, 2500);
	}
	saveKey(key, serverUrl) {
		const result = saveApiKey(this.app, key, serverUrl);
		if (result === "unavailable") return "unavailable";
		return result;
	}
	async testKey() {
		const enteredKey = this.apiKeyInput.value.trim() || this.cb.getApiKey();
		if (!enteredKey) {
			this.showTestResult(this.t("settings.testFail", { reason: this.t("error.noKey") }), true);
			return;
		}
		this.testButton.disabled = true;
		this.showTestResult(this.t("settings.testing"), false);
		try {
			const user = await this.client.withApiKey(enteredKey, this.readSettingsForm().serverUrl).checkAuth();
			const who = typeof user.email === "string" && user.email || typeof user.username === "string" && user.username || typeof user.name === "string" && user.name || "OK";
			this.showTestResult(this.t("settings.testOk", { user: who }), false);
		} catch (err) {
			const reason = err instanceof Error ? err.message : String(err);
			this.showTestResult(this.t("settings.testFail", { reason }), true);
		} finally {
			this.testButton.disabled = false;
		}
	}
	showTestResult(text, isError) {
		this.testResult.hidden = false;
		this.testResult.textContent = text;
		this.testResult.classList.toggle("epidbot-test-error", isError);
	}
};
// src/version.ts
/** Single source of truth for the plugin identity. These values must match
* `geolibre-plugin/plugin.json` (and `package.json`); a test enforces it. */
var PLUGIN_ID = "epidbot";
var PLUGIN_NAME = "EpidBot";
var VERSION = "0.2.2";
// src/geolibre.ts
var PANEL_ID = `${PLUGIN_ID}-chat`;
var MENU_ID = `${PLUGIN_ID}-menu`;
/** Panel icon: a chat bubble with a locator dot, as a data URI (no remote
* assets in the bundle). */
var ICON = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"16\" height=\"16\"><path fill=\"#2456a6\" d=\"M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-5.2 4.1A1 1 0 0 1 4 20.3V17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"/><circle fill=\"#fff\" cx=\"12\" cy=\"10\" r=\"2.4\"/></svg>");
var rt = null;
var savedState = sanitizeProjectState(void 0);
var assistantDisposer = null;
/** Progressive disclosure: the assistant tools are advertised only while a
* key exists (README F5). Re-run after every settings change, since that is
* when the key appears or disappears. */
function syncAssistantTools() {
	assistantDisposer?.();
	assistantDisposer = null;
	if (!rt) return;
	if (!loadApiKey(rt.app, rt.settings.serverUrl)) return;
	assistantDisposer = registerAssistantTools({
		app: rt.app,
		client: rt.client,
		getSettings: () => rt.settings,
		getSessionId: () => rt.panel?.getSessionId() ?? null,
		buildContext: () => buildMapContext(rt.app),
		onLayerAdded: (record) => {
			rt?.resultLayers.push(record);
		}
	});
}
function activateRuntime(app) {
	registerEpidBotTranslations(app);
	const t = createTranslator(app);
	const settings = { ...savedState.settings };
	const client = new EpidBotClient({
		serverUrl: settings.serverUrl,
		getApiKey: () => rt ? loadApiKey(rt.app, rt.settings.serverUrl) : "",
		fetchImpl: ((...args) => (rt?.app.nativeFetch ?? globalThis.fetch)(...args)),
		passSignalToFetch: typeof app.nativeFetch !== "function"
	});
	const runtime = {
		app,
		client,
		panel: null,
		settings,
		resultLayers: [...savedState.resultLayers],
		disposers: []
	};
	rt = runtime;
	const panel = new EpidBotPanel(app, client, t, {
		getSettings: () => runtime.settings,
		onSettingsChange: (next) => {
			runtime.settings = next;
			client.setServerUrl(next.serverUrl);
			syncAssistantTools();
		},
		getApiKey: () => loadApiKey(app, runtime.settings.serverUrl),
		buildContext: () => buildMapContext(app),
		onLayerAdded: (record) => {
			runtime.resultLayers.push(record);
		}
	});
	runtime.panel = panel;
	if (app.registerRightPanel) {
		const unregister = app.registerRightPanel({
			id: PANEL_ID,
			title: () => t("panel.title"),
			icon: ICON,
			defaultWidth: 420,
			render: (container) => panel.attach(container)
		});
		runtime.disposers.push(() => {
			app.closeRightPanel?.(PANEL_ID);
			unregister();
		});
	}
	if (app.registerToolbarMenu) {
		const unregister = app.registerToolbarMenu({
			id: MENU_ID,
			label: () => t("panel.title"),
			icon: ICON,
			items: [
				{
					id: `${MENU_ID}-open`,
					label: () => t("menu.open"),
					onSelect: () => app.openRightPanel?.(PANEL_ID)
				},
				{
					type: "submenu",
					id: `${MENU_ID}-ask`,
					label: () => t("menu.ask"),
					items: [
						{
							id: `${MENU_ID}-ask-extent`,
							label: () => t("menu.askExtent"),
							onSelect: () => {
								app.openRightPanel?.(PANEL_ID);
								runtime.panel?.promptExtent();
							}
						},
						{
							id: `${MENU_ID}-ask-selection`,
							label: () => t("menu.askSelection"),
							onSelect: () => {
								app.openRightPanel?.(PANEL_ID);
								runtime.panel?.promptSelection();
							}
						},
						{
							id: `${MENU_ID}-edit-layer`,
							label: () => t("menu.editLayer"),
							onSelect: () => {
								app.openRightPanel?.(PANEL_ID);
								runtime.panel?.promptEditLayer();
							}
						}
					]
				},
				{
					id: `${MENU_ID}-new-session`,
					label: () => t("menu.newSession"),
					onSelect: () => runtime.panel?.newSession()
				},
				{
					id: `${MENU_ID}-export`,
					label: () => t("menu.export"),
					onSelect: () => runtime.panel?.exportMarkdown()
				},
				{ type: "separator" },
				{
					id: `${MENU_ID}-settings`,
					label: () => t("menu.settings"),
					onSelect: () => {
						app.openRightPanel?.(PANEL_ID);
						runtime.panel?.openSettings();
					}
				}
			]
		});
		runtime.disposers.push(unregister);
	}
	if (savedState.sessionId !== null) panel.setSessionId(savedState.sessionId);
	app.openRightPanel?.(PANEL_ID);
	syncAssistantTools();
}
function deactivateRuntime() {
	if (!rt) return;
	savedState = {
		version: 1,
		settings: { ...rt.settings },
		sessionId: rt.panel?.getSessionId() ?? savedState.sessionId,
		resultLayers: [...rt.resultLayers]
	};
	assistantDisposer?.();
	assistantDisposer = null;
	for (const dispose of rt.disposers) try {
		dispose();
	} catch {}
	rt.panel?.dispose();
	rt = null;
}
var plugin = {
	id: PLUGIN_ID,
	name: PLUGIN_NAME,
	version: VERSION,
	engines: [
		"maplibre",
		"mapbox",
		"cesium",
		"arcgis"
	],
	clearsStateOnProjectLoad: true,
	activate(app) {
		activateRuntime(app);
	},
	deactivate() {
		deactivateRuntime();
	},
	getProjectState() {
		if (rt) return {
			version: 1,
			settings: { ...rt.settings },
			sessionId: rt.panel?.getSessionId() ?? null,
			resultLayers: [...rt.resultLayers]
		};
		return savedState;
	},
	applyProjectState(_app, state) {
		savedState = sanitizeProjectState(state);
		if (rt) {
			rt.settings = savedState.settings;
			rt.resultLayers = [...savedState.resultLayers];
			rt.client.setServerUrl(savedState.settings.serverUrl);
			if (rt.panel) {
				rt.panel.applySettings(savedState.settings);
				rt.panel.setSessionId(savedState.sessionId);
			}
		}
	}
};
export { plugin as default, plugin };
