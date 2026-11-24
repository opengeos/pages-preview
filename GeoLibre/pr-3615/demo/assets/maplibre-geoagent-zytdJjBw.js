const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-BzLcK_aY.js","./maplibre-geoagent-BoqmrQG3.js","./maplibre-DTt9L1HI.js","./rolldown-runtime-DpEnGzO4.js","./preload-helper-CALLvQDj.js","./dist-DV4O8bxz.js","./maplibre-earth-engine-CqlB61vw.js","./browser-5UhMgqvq.js","./earth-engine-browser-BAUHUcSI.js"])))=>i.map(i=>d[i]);
import { o as __toESM } from "./rolldown-runtime-DpEnGzO4.js";
import { D as GEOAGENT_PLUGIN_ID, a as builtInPluginProperties } from "./builtin-plugin-metadata-BDWSFAAy.js";
import { r as pluginDisplayTitle, t as createPluginTranslator } from "./plugin-i18n-CgaB8Q8N.js";
import { n as unmountMapControlFromPanel, t as mountMapControlInPanel } from "./dockable-map-control-DvUIgZBe.js";
import { cs as DEFAULT_LAYER_STYLE, ut as useAppStore } from "./src-DJNg-Koo.js";
import { a as closeTauriOauthPopups, c as installEarthEngineFunctionInfoFallback, d as oauthClientIdValue, f as preloadEarthEngineAuthLibrary, i as clearEarthEngineFunctionInfo, l as isEarthEngineAvailable, m as shouldUseTauriEarthEngineOAuth, n as authenticateEarthEngine$1, o as errorMessage, p as projectValue$1, r as captureEarthEngineFunctionInfo, s as importMetaEnv } from "./earth-engine-auth-B7AZ_16N.js";
import { t as getControlMap } from "./style-map-DLO-WoqT.js";
import { t as __vitePreload } from "./preload-helper-CALLvQDj.js";
// ../../packages/plugins/src/plugins/geoagent-layer-sync.ts
var GEOAGENT_SOURCE_KIND = "geoagent-overlay";
var NATIVE_OPACITY_PROPERTIES = {
	background: ["background-opacity"],
	circle: ["circle-opacity"],
	fill: ["fill-opacity"],
	"fill-extrusion": ["fill-extrusion-opacity"],
	heatmap: ["heatmap-opacity"],
	line: ["line-opacity"],
	raster: ["raster-opacity"],
	symbol: ["icon-opacity", "text-opacity"]
};
var syncedTools = null;
var storeUnsubscribe = null;
var syncingOverlaysToStore = false;
function geoAgentStoreLayerId(overlayName) {
	return `geoagent:${overlayName}`;
}
function isGeoAgentStoreLayer(layer) {
	return layer.metadata.sourceKind === GEOAGENT_SOURCE_KIND && layer.metadata.externalNativeLayer === true;
}
function geoAgentOverlayName(layer) {
	return typeof layer.metadata.geoAgentOverlayName === "string" ? layer.metadata.geoAgentOverlayName : layer.name;
}
/**
* Overlays the GeoAgent tools track that should appear in GeoLibre's layer
* panel. Markers carry no style layers and internal records ("__terrain",
* "__sky") are map state rather than layers, so both are excluded.
*/
function isSyncableOverlay(overlay) {
	return overlay.kind !== "marker" && !overlay.name.startsWith("__") && overlay.layerIds.length > 0;
}
function createGeoAgentStoreLayer(overlay) {
	const sourceId = overlay.sourceIds[0] ? { sourceId: overlay.sourceIds[0] } : {};
	const base = {
		id: geoAgentStoreLayerId(overlay.name),
		name: overlay.name,
		type: "raster",
		source: {
			type: "raster",
			...sourceId,
			...overlay.url ? { tiles: [overlay.url] } : {},
			...overlay.attribution ? { attribution: overlay.attribution } : {}
		},
		visible: true,
		opacity: 1,
		style: { ...DEFAULT_LAYER_STYLE },
		metadata: {
			externalNativeLayer: true,
			geoAgentOverlayKind: overlay.kind,
			geoAgentOverlayName: overlay.name,
			nativeLayerIds: [...overlay.layerIds],
			...sourceId,
			sourceIds: [...overlay.sourceIds],
			sourceKind: GEOAGENT_SOURCE_KIND
		},
		sourcePath: overlay.url ?? overlay.name
	};
	if (overlay.kind === "geojson") return {
		...base,
		type: "geojson",
		source: {
			type: "geojson",
			...sourceId,
			...overlay.url ? { url: overlay.url } : {}
		},
		...isFeatureCollection(overlay.data) ? { geojson: overlay.data } : {},
		style: geoJsonOverlayStyle(overlay.style ?? {})
	};
	if (overlay.kind === "native") return {
		...base,
		opacity: nativeOverlayOpacity(overlay),
		metadata: {
			...base.metadata,
			customLayerType: overlay.layerSpecs?.[0]?.layer.type ?? "custom",
			identifiable: false
		}
	};
	return {
		...base,
		opacity: rasterOverlayOpacity(overlay),
		metadata: {
			...base.metadata,
			identifiable: false,
			tileType: "raster",
			...overlay.url ? { tileUrl: overlay.url } : {},
			...overlay.attribution ? { attribution: overlay.attribution } : {}
		}
	};
}
/**
* Diff the GeoAgent tools' overlay registry into the app store so the layer
* panel lists agent-added layers. Adds new overlays, drops store layers whose
* overlays are gone, and refreshes native ids when an overlay is re-added,
* while leaving user-editable fields (name, visibility, opacity, style)
* untouched on existing layers.
*/
function syncGeoAgentOverlaysToStore(overlays) {
	if (!overlays) return;
	const syncable = Array.from(overlays.values()).filter(isSyncableOverlay);
	const syncableIds = new Set(syncable.map((overlay) => geoAgentStoreLayerId(overlay.name)));
	syncingOverlaysToStore = true;
	try {
		for (const storeLayer of useAppStore.getState().layers) {
			if (!isGeoAgentStoreLayer(storeLayer)) continue;
			if (!syncableIds.has(storeLayer.id)) useAppStore.getState().removeLayer(storeLayer.id);
		}
		for (const overlay of syncable) {
			const layer = createGeoAgentStoreLayer(overlay);
			const existing = useAppStore.getState().layers.find((current) => current.id === layer.id);
			if (!existing) {
				const selectedLayerId = useAppStore.getState().selectedLayerId;
				useAppStore.getState().addLayer(layer);
				if (useAppStore.getState().selectedLayerId !== selectedLayerId) useAppStore.setState({ selectedLayerId });
				continue;
			}
			const typeChanged = existing.type !== layer.type;
			if (typeChanged || JSON.stringify(existing.metadata.nativeLayerIds) !== JSON.stringify(layer.metadata.nativeLayerIds) || JSON.stringify(existing.metadata.sourceIds) !== JSON.stringify(layer.metadata.sourceIds) || JSON.stringify(existing.source) !== JSON.stringify(layer.source) || existing.metadata.tileUrl !== layer.metadata.tileUrl || existing.sourcePath !== layer.sourcePath || existing.geojson !== layer.geojson) useAppStore.getState().updateLayer(layer.id, {
				geojson: layer.geojson,
				metadata: layer.metadata,
				source: layer.source,
				sourcePath: layer.sourcePath,
				type: layer.type,
				...typeChanged ? { style: layer.style } : {}
			});
		}
	} finally {
		syncingOverlaysToStore = false;
	}
}
/**
* Remove every GeoAgent-registered layer from the store. Used when the plugin
* deactivates, after the control's teardown has already cleared the overlays
* from the map.
*/
function removeGeoAgentStoreLayers() {
	syncingOverlaysToStore = true;
	try {
		for (const layer of useAppStore.getState().layers) if (isGeoAgentStoreLayer(layer)) useAppStore.getState().removeLayer(layer.id);
	} finally {
		syncingOverlaysToStore = false;
	}
}
/**
* Watch the store for panel-side changes to GeoAgent layers. Removing a layer
* in the panel drops GeoAgent's overlay record (the native layers and sources
* are already torn down by removeLayerFromMap), so the overlay is not
* resurrected on the agent's next basemap change and list_layers stays
* accurate. Custom native layers (clusters, choropleths, 3D buildings) skip
* the generic visibility/paint sync in layer-sync, so visibility and opacity
* are applied here directly.
*
* Subscribes once; later calls just point the sync at the latest tools
* instance (the control recreates tools on every onAdd).
*/
function wireGeoAgentStoreSync(tools) {
	syncedTools = tools;
	storeUnsubscribe ??= useAppStore.subscribe((state, previous) => {
		const activeTools = syncedTools;
		if (!activeTools || syncingOverlaysToStore || state.layers === previous.layers) return;
		if (!previous.layers.some(isGeoAgentStoreLayer)) return;
		const currentById = new Map(state.layers.map((layer) => [layer.id, layer]));
		for (const layer of previous.layers) {
			if (!isGeoAgentStoreLayer(layer)) continue;
			const current = currentById.get(layer.id);
			if (!current) {
				activeTools.removeOverlay?.(geoAgentOverlayName(layer));
				continue;
			}
			if (typeof current.metadata.customLayerType === "string") applyGeoAgentCustomLayerState(activeTools.map, current, {
				opacity: current.opacity !== layer.opacity,
				visibility: current.visible !== layer.visible
			});
		}
	});
}
function unwireGeoAgentStoreSync() {
	storeUnsubscribe?.();
	storeUnsubscribe = null;
	syncedTools = null;
}
function applyGeoAgentCustomLayerState(map, layer, changed) {
	if (!map || !changed.opacity && !changed.visibility) return;
	const nativeLayerIds = Array.isArray(layer.metadata.nativeLayerIds) ? layer.metadata.nativeLayerIds : [];
	for (const nativeLayerId of nativeLayerIds) {
		if (typeof nativeLayerId !== "string") continue;
		const nativeLayer = map.getLayer(nativeLayerId);
		if (!nativeLayer) continue;
		if (changed.visibility) try {
			map.setLayoutProperty(nativeLayerId, "visibility", layer.visible ? "visible" : "none");
		} catch {}
		if (!changed.opacity) continue;
		for (const property of NATIVE_OPACITY_PROPERTIES[nativeLayer.type] ?? []) try {
			map.setPaintProperty(nativeLayerId, property, layer.opacity);
		} catch {}
	}
}
/**
* Map a GeoAgent geojson overlay style onto GeoLibre's LayerStyle using the
* same keys and defaults as geojsonLayerPaint in maplibre-gl-geoagent, so the
* store-driven repaint reproduces what the agent drew.
*/
function geoJsonOverlayStyle(style) {
	const color = stringValue(style.color) ?? stringValue(style["line-color"]) ?? "#1c7ed6";
	const fillColor = stringValue(style["fill-color"]) ?? stringValue(style.fillColor) ?? color;
	const strokeColor = stringValue(style["line-color"]) ?? stringValue(style.lineColor) ?? color;
	const fillOpacity = clamp01(numberValue(style.opacity) ?? numberValue(style["fill-opacity"]) ?? .35);
	return {
		...DEFAULT_LAYER_STYLE,
		fillColor,
		strokeColor,
		fillOpacity,
		strokeWidth: Math.max(0, numberValue(style["line-width"]) ?? numberValue(style.lineWidth) ?? 2),
		circleRadius: Math.max(0, numberValue(style["circle-radius"]) ?? numberValue(style.radius) ?? 6)
	};
}
function rasterOverlayOpacity(overlay) {
	return clamp01(numberValue(overlay.style?.opacity) ?? 1);
}
function nativeOverlayOpacity(overlay) {
	for (const spec of overlay.layerSpecs ?? []) for (const property of NATIVE_OPACITY_PROPERTIES[spec.layer.type] ?? []) {
		const opacity = numberValue(spec.layer.paint?.[property]);
		if (opacity !== void 0) return clamp01(opacity);
	}
	return 1;
}
function isFeatureCollection(data) {
	return data?.type === "FeatureCollection";
}
function stringValue(value) {
	if (typeof value !== "string") return void 0;
	return value.trim() || void 0;
}
function numberValue(value) {
	if (typeof value !== "number" && typeof value !== "string") return void 0;
	if (typeof value === "string" && !value.trim()) return void 0;
	const numeric = Number(value);
	return Number.isFinite(numeric) ? numeric : void 0;
}
function clamp01(value) {
	return Math.max(0, Math.min(1, value));
}
// ../../packages/plugins/src/plugins/geoagent-map-engine.ts
/**
* Which map library the GeoAgent tools should speak.
*
* Almost every tool already stays on the Style Spec surface both 2D engines
* share. Four cannot, and each breaks differently on a mapbox-gl map:
* `add_marker` builds MapLibre's `Marker`/`Popup` (whose position update reads
* `map._camera.transform` and throws), `set_projection` writes `{ type }`
* (Mapbox takes a name string), `get_map_state` reads `projection.type` (which
* is `undefined` there), and `run_maplibre_script` hands user-authored code the
* wrong namespace. `maplibre-gl-geoagent` 0.6.0 takes the engine as one option
* and all four follow it — which matters more here than in a control that
* simply fails to mount: an agent run that breaks does so mid-way, after it has
* already changed the map.
*
* Lives in its own module so it can be unit-tested: the plugin's entry module
* pulls the Earth Engine browser client in at import time.
*
* Two deliberate choices about *when* things are read. The engine is decided
* from the renderer, which the store flips synchronously, rather than from the
* namespace, which only appears once `MapboxEngine` has mounted — and GeoAgent
* is built behind a dynamic import, so that window is wide. The renderer is
* authoritative when the host reports one; the namespace only answers for a
* host that does not. And the namespace itself is resolved on access rather
* than now, so a control constructed while the engine was still mounting still
* hands its tools the right library.
*
* @param app - The plugin host API, read for the renderer and the namespace.
* @returns The Mapbox engine descriptor on a Mapbox host, else `undefined`,
*   which leaves the upstream default of this package's own `maplibre-gl`.
*/
function geoAgentMapEngine(app) {
	const renderer = app?.getMapRenderer?.();
	if (!(renderer ? renderer === "mapbox" : !!app?.getMapboxGl?.())) return void 0;
	return {
		kind: "mapbox",
		get namespace() {
			const mapboxgl = app?.getMapboxGl?.();
			if (!mapboxgl) throw new Error("GeoAgent needs the mapbox-gl namespace to drive a Mapbox map.");
			return mapboxgl;
		}
	};
}
// ../../packages/plugins/src/plugins/maplibre-geoagent.ts
var STORAGE_PREFIX = "geolibre.geoagent";
var PANEL_ID = "geoagent-panel";
var GEOAGENT_OPTIONS = {
	title: "GeoAgent + Earth Engine",
	collapsed: false,
	storagePrefix: STORAGE_PREFIX,
	allowCodeExecutionDefault: true,
	allowDestructiveToolsDefault: true,
	showPermissionToggles: false,
	earthEngine: {
		oauthClientId: oauthClientIdValue(importMetaEnv().VITE_GEE_OAUTH_CLIENT_ID),
		projectId: projectValue(importMetaEnv().VITE_GEE_PROJECT_ID),
		includeCommunityCatalog: true
	}
};
var geoAgentControl = null;
/** The dynamic import, shared across activations: the module is engine-neutral. */
var geoAgentModulePromise = null;
var unregisterPanel = null;
var geoAgentActive = false;
var geoAgentActivationGeneration = 0;
var earthEngineAccessTokenOverride = "";
var earthEngineTokenTypeOverride = "Bearer";
var earthEngineTokenExpiresInOverride = 3600;
var geoAgentEarthEngineFunctionInfo;
/**
* GeoAgent, hosted in GeoLibre's dockable side panel. The upstream
* `GeoAgentControl` still drives the agent and its map tools, but its floating
* shell and toolbar button are replaced by the host-owned dock (see
* {@link mountMapControlInPanel}).
*/
var maplibreGeoAgentPlugin = {
	...builtInPluginProperties("maplibre-gl-geoagent"),
	activate: (app) => {
		if (!getControlMap(app) || !app.registerRightPanel || !app.openRightPanel) return false;
		geoAgentActive = true;
		return openGeoAgentPanel(app, ++geoAgentActivationGeneration);
	},
	deactivate: (app) => {
		geoAgentActive = false;
		if (geoAgentControl) unmountMapControlFromPanel(geoAgentControl);
		app.closeRightPanel?.(PANEL_ID);
		unregisterPanel?.();
		unregisterPanel = null;
		releaseGeoAgentControl();
	}
};
async function openGeoAgentPanel(app, activationGeneration) {
	let module;
	try {
		module = await loadGeoAgentModule();
	} catch (error) {
		if (activationGeneration === geoAgentActivationGeneration) geoAgentActive = false;
		console.warn("GeoAgent failed to load.", error);
		return false;
	}
	if (!geoAgentActive || activationGeneration !== geoAgentActivationGeneration) return false;
	if (!app.registerRightPanel || !app.openRightPanel) return false;
	unregisterPanel?.();
	unregisterPanel = app.registerRightPanel({
		id: PANEL_ID,
		title: pluginDisplayTitle(app, GEOAGENT_PLUGIN_ID, "GeoAgent"),
		dock: "replace-style",
		defaultWidth: 400,
		deactivatePluginOnClose: true,
		render: (container) => {
			const control = new module.GeoAgentControl(getGeoAgentOptions(app));
			const release = () => {
				if (geoAgentControl === control) releaseGeoAgentControl();
			};
			const unmount = mountMapControlInPanel(app, control, container, () => app.closeRightPanel?.(PANEL_ID), release);
			if (!unmount) return;
			control.collapse = () => {};
			geoAgentControl = control;
			patchGeoAgentToolRunner(control);
			control.expand();
			const stopSignInRelabel = enhanceEarthEngineSignIn(container, app);
			preloadEarthEngineAuthLibrary();
			return () => {
				stopSignInRelabel();
				unmount();
				release();
			};
		}
	});
	if (!app.openRightPanel(PANEL_ID)) {
		unregisterPanel();
		unregisterPanel = null;
		geoAgentActive = false;
		return false;
	}
	return true;
}
/** Drop the mounted control along with its store sync and Layers-panel rows. */
function releaseGeoAgentControl() {
	unwireGeoAgentStoreSync();
	geoAgentControl = null;
	removeGeoAgentStoreLayers();
}
/**
* Import the GeoAgent chunk, sharing one import across activations.
*
* @returns The `maplibre-gl-geoagent` module.
*/
function loadGeoAgentModule() {
	installEarthEngineFunctionInfoFallback();
	geoAgentModulePromise ??= __vitePreload(() => import("./dist-BzLcK_aY.js"), __vite__mapDeps([0,1,2,3,4]), import.meta.url).catch((error) => {
		geoAgentModulePromise = null;
		throw error;
	});
	return geoAgentModulePromise;
}
function getGeoAgentOptions(app) {
	return {
		...GEOAGENT_OPTIONS,
		mapEngine: geoAgentMapEngine(app)
	};
}
function patchGeoAgentToolRunner(control) {
	const tools = control.tools;
	if (!tools?.runCommand || tools.__geolibreToolRunnerPatched === true) return;
	const runCommand = tools.runCommand.bind(tools);
	tools.runCommand = async (command, args) => {
		try {
			if (isEarthEngineToolCommand(command)) {
				if (command === "load_gee_dataset") return await loadGeoAgentDatasetWithGeoLibreEarthEngine(tools, args);
				installEarthEngineFunctionInfoFallback(geoAgentEarthEngineFunctionInfo);
				try {
					return await runCommand(command, args);
				} finally {
					geoAgentEarthEngineFunctionInfo = captureEarthEngineFunctionInfo();
				}
			}
			return await runCommand(command, args);
		} finally {
			syncGeoAgentOverlaysToStore(tools.overlays);
		}
	};
	tools.__geolibreToolRunnerPatched = true;
	wireGeoAgentStoreSync(tools);
	syncGeoAgentOverlaysToStore(tools.overlays);
}
async function loadGeoAgentDatasetWithGeoLibreEarthEngine(tools, args) {
	if (!tools.map) throw new Error("GeoAgent map is unavailable.");
	const input = recordArg(args);
	const assetId = stringArg(input, "asset_id");
	if (!assetId) throw new Error("load_gee_dataset requires asset_id.");
	const layerName = stringArg(input, "layer_name") || assetId;
	const vis = geoAgentVisualizeOptions(input);
	const earthEngine = geoAgentEarthEngineOptions();
	const oauthClientId = oauthClientIdValue(earthEngine.oauthClientId);
	const projectId = projectValue(earthEngine.projectId);
	let accessToken = earthEngine.accessToken || earthEngineAccessTokenOverride;
	if (shouldUseTauriEarthEngineOAuth() && !accessToken) {
		await authenticateEarthEngine(oauthClientId);
		accessToken = earthEngineAccessTokenOverride;
	}
	const { authenticateWithOAuth, renderEeLayer } = await __vitePreload(async () => {
		const { authenticateWithOAuth, renderEeLayer } = await import("./dist-DV4O8bxz.js");
		return {
			authenticateWithOAuth,
			renderEeLayer
		};
	}, __vite__mapDeps([5,6]), import.meta.url);
	clearEarthEngineFunctionInfo();
	await authenticateWithOAuth({
		accessToken: accessToken || void 0,
		oauthClientId,
		projectId,
		tokenExpiresIn: earthEngine.tokenExpiresIn ?? earthEngineTokenExpiresInOverride,
		tokenType: earthEngine.tokenType || earthEngineTokenTypeOverride
	});
	await tools.waitForMapIdle?.();
	tools.removeOverlay?.(layerName);
	clearEarthEngineFunctionInfo();
	const layerBaseId = geoAgentSlug(layerName);
	const sourceId = tools.uniqueSourceId?.(`${layerBaseId}-source`) ?? `${layerBaseId}-source`;
	const layerId = tools.uniqueLayerBaseId?.(layerBaseId, [""]) ?? layerBaseId;
	const result = await renderEeLayer(tools.map, assetId, vis, sourceId, layerId);
	tools.overlays?.set(layerName, {
		attribution: "Google Earth Engine",
		geeLayerName: layerName,
		kind: "gee",
		layerIds: [result.layerId],
		name: layerName,
		sourceIds: [result.sourceId],
		url: result.tileUrl
	});
	tools.requireEarthEngine?.().registerLayer?.({
		asset_id: assetId,
		asset_type: stringArg(input, "asset_type") || "Image",
		eeObject: result.eeObject,
		layer_name: layerName,
		name: layerName,
		object_type: stringArg(input, "asset_type") || "Image",
		source: "earth_engine",
		tile_url: result.tileUrl,
		vis_params: vis
	});
	tools.publishEarthEngineState?.();
	return {
		success: true,
		asset_id: assetId,
		asset_type: stringArg(input, "asset_type") || "Image",
		layer_name: layerName,
		source: "maplibre-gl-earth-engine",
		tile_url: result.tileUrl,
		vis_params: vis
	};
}
function isEarthEngineToolCommand(command) {
	return command === "initialize_earth_engine" || command.startsWith("gee_") || command.includes("_gee_");
}
function geoAgentEarthEngineOptions() {
	const control = geoAgentControl;
	return {
		...GEOAGENT_OPTIONS.earthEngine,
		...control?.options?.earthEngine ?? {}
	};
}
function recordArg(args) {
	return args && typeof args === "object" && !Array.isArray(args) ? args : {};
}
function stringArg(args, key) {
	const value = args[key];
	return typeof value === "string" ? value.trim() : "";
}
function numberArg(args, key) {
	const value = args[key];
	const numberValue = typeof value === "number" || typeof value === "string" ? Number(value) : NaN;
	return Number.isFinite(numberValue) ? numberValue : void 0;
}
function geoAgentVisualizeOptions(args) {
	const vis = {};
	const bands = stringArg(args, "bands") || stringArg(args, "band");
	const palette = stringArg(args, "palette");
	const min = numberArg(args, "min_value") ?? numberArg(args, "min");
	const max = numberArg(args, "max_value") ?? numberArg(args, "max");
	const opacity = numberArg(args, "opacity");
	if (bands) vis.bands = bands;
	if (palette) vis.palette = palette;
	if (min !== void 0) vis.min = min;
	if (max !== void 0) vis.max = max;
	if (opacity !== void 0) vis.opacity = Math.max(0, Math.min(1, opacity));
	return vis;
}
function geoAgentSlug(value) {
	return value.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "layer";
}
function projectValue(envValue) {
	return projectValue$1(envValue, STORAGE_PREFIX);
}
/**
* Add the Earth Engine Sign in button to GeoAgent's settings, labelled in the
* active language and re-labelled when the language changes.
*
* @param root - The panel container.
* @param app - The host API, for translation and locale changes.
* @returns A function that stops following the language.
*/
function enhanceEarthEngineSignIn(root, app) {
	const tr = createPluginTranslator(app, GEOAGENT_PLUGIN_ID);
	const details = root.querySelector(".geoagent-earth-engine");
	const status = details?.querySelector(".geoagent-earth-engine-status");
	const clientIdInput = details?.querySelector(".geoagent-ee-client-id");
	const projectIdInput = details?.querySelector(".geoagent-ee-project-id");
	if (details && !isEarthEngineAvailable()) {
		details.hidden = true;
		return () => {};
	}
	if (!details || !status || !clientIdInput || !projectIdInput || details.querySelector(".geolibre-ee-sign-in")) return () => {};
	const button = document.createElement("button");
	button.className = "geolibre-ee-sign-in secondary";
	button.type = "button";
	button.textContent = tr("signIn", "Sign in");
	button.addEventListener("click", async () => {
		const oauthClientId = oauthClientIdValue(clientIdInput.value);
		clientIdInput.value = oauthClientId;
		button.disabled = true;
		status.textContent = tr("signInOpening", "Opening Google sign-in…");
		try {
			await authenticateEarthEngine(oauthClientId);
			await applyEarthEngineAccessToken(oauthClientId, projectValue(projectIdInput.value));
			closeTauriOauthPopups();
			status.textContent = tr("signInComplete", "Earth Engine sign-in complete.");
		} catch (error) {
			status.textContent = errorMessage(error);
		} finally {
			button.disabled = false;
		}
	});
	status.insertAdjacentElement("beforebegin", button);
	return app.onLocaleChange?.(() => {
		button.textContent = tr("signIn", "Sign in");
	}) ?? (() => {});
}
async function applyEarthEngineAccessToken(oauthClientId, projectId) {
	const accessToken = await earthEngineAccessToken();
	if (!accessToken || !geoAgentControl) return;
	const control = geoAgentControl;
	const earthEngineOptions = {
		...GEOAGENT_OPTIONS.earthEngine,
		...control.options?.earthEngine ?? {},
		oauthClientId,
		projectId,
		accessToken,
		tokenType: earthEngineTokenTypeOverride,
		tokenExpiresIn: earthEngineTokenExpiresInOverride
	};
	if (control.options) control.options.earthEngine = earthEngineOptions;
	control.tools?.updateEarthEngineOptions?.(earthEngineOptions);
	control.invalidateAgent?.();
}
async function earthEngineAccessToken() {
	if (earthEngineAccessTokenOverride) return earthEngineAccessTokenOverride;
	if (shouldUseTauriEarthEngineOAuth()) return "";
	installEarthEngineFunctionInfoFallback();
	const { default: earthEngine } = await __vitePreload(async () => {
		const { default: earthEngine } = await import("./browser-5UhMgqvq.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
		return { default: earthEngine };
	}, __vite__mapDeps([7,8,3]), import.meta.url);
	return (earthEngine.data?.getAuthToken?.() ?? "").replace(/^Bearer\s+/i, "").trim();
}
async function authenticateEarthEngine(oauthClientId) {
	const token = await authenticateEarthEngine$1(oauthClientId);
	if (token?.accessToken) {
		earthEngineAccessTokenOverride = token.accessToken.replace(/^Bearer\s+/i, "").trim();
		earthEngineTokenTypeOverride = token.tokenType || "Bearer";
		earthEngineTokenExpiresInOverride = token.expiresIn || 3600;
	}
}
export { maplibreGeoAgentPlugin as t };
