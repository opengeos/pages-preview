const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-js-DcgBVQZr.js","./dist-js-CIGLcCZ4.js","./core-C25TPJda.js","./browser-5UhMgqvq.js","./earth-engine-browser-BAUHUcSI.js","./rolldown-runtime-DpEnGzO4.js","./window-a-zVUCqC.js","./window-D_X_OHQg.js","./event-B5ZhUYpD.js"])))=>i.map(i=>d[i]);
import { o as __toESM } from "./rolldown-runtime-DpEnGzO4.js";
import "./src-BoH0mFsF.js";
import { o as invoke } from "./core-C25TPJda.js";
import { t as isIpadDesktopUserAgent } from "./platform-DOGrChaa.js";
import { t as LocalizedError } from "./localized-error--eA1XTaJ.js";
import { t as __vitePreload } from "./preload-helper-CALLvQDj.js";
// ../../packages/plugins/src/plugins/earth-engine-auth.ts
/** Catalog keys for the sign-in failures GeoLibre itself raises. */
var AUTH_ERROR_KEY = "plugin.earth-engine-auth";
var EARTH_ENGINE_OAUTH_SCOPES = ["https://www.googleapis.com/auth/earthengine", "https://www.googleapis.com/auth/drive.file"];
var earthEngineExportedFunctionInfo;
function captureEarthEngineFunctionInfo() {
	const scope = globalThis;
	const descriptor = Object.getOwnPropertyDescriptor(scope, "EXPORTED_FN_INFO");
	if (descriptor && "value" in descriptor) return descriptor.value;
	return scope.EXPORTED_FN_INFO;
}
function clearEarthEngineFunctionInfo() {
	earthEngineExportedFunctionInfo = void 0;
	const scope = globalThis;
	if (Object.getOwnPropertyDescriptor(scope, "EXPORTED_FN_INFO")?.configurable === false) {
		try {
			scope.EXPORTED_FN_INFO = void 0;
		} catch {}
		return;
	}
	try {
		delete scope.EXPORTED_FN_INFO;
	} catch {
		try {
			Object.defineProperty(scope, "EXPORTED_FN_INFO", {
				configurable: true,
				writable: true,
				value: void 0
			});
		} catch {}
	}
}
function installEarthEngineFunctionInfoFallback(functionInfo) {
	const scope = globalThis;
	const descriptor = Object.getOwnPropertyDescriptor(scope, "EXPORTED_FN_INFO");
	if (descriptor?.configurable === false) return;
	if (functionInfo !== void 0) earthEngineExportedFunctionInfo = functionInfo;
	else if ("value" in (descriptor ?? {})) earthEngineExportedFunctionInfo = descriptor?.value;
	try {
		Object.defineProperty(scope, "EXPORTED_FN_INFO", {
			configurable: true,
			writable: true,
			value: earthEngineExportedFunctionInfo
		});
	} catch {}
}
function importMetaEnv() {
	return {
		"BASE_URL": "./",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": false,
		"VITE_CESIUM_TOKEN": "",
		"VITE_GEE_OAUTH_CLIENT_ID": "",
		"VITE_GEOLIBRE_COLLAB_URL": "wss://collab.geolibre.app",
		"VITE_GOOGLE_MAPS_API_KEY": "",
		"VITE_MAPILLARY_ACCESS_TOKEN": "",
		"VITE_PROTOMAPS_API_KEY": ""
	};
}
function envString(value) {
	return typeof value === "string" ? value.trim() : "";
}
function oauthClientIdValue(envValue) {
	return envString(envValue) || "937635412428-qc3albpo6dtm2jdp2o5mk8biqlh0i6vo.apps.googleusercontent.com";
}
function projectValue(envValue, storagePrefix) {
	return new URLSearchParams(window.location.search).get("ee_project_id") || envString(envValue) || sessionStorage.getItem(`${storagePrefix}.earthEngine.projectId`) || localStorage.getItem(`${storagePrefix}.ee_project_id`) || "";
}
function preloadEarthEngineAuthLibrary() {
	if (shouldUseTauriEarthEngineOAuth()) return;
	loadEarthEngine().then((earthEngine) => {
		earthEngine.apiclient?.ensureAuthLibLoaded?.(() => void 0);
	}).catch(() => void 0);
}
async function authenticateEarthEngine(oauthClientId) {
	if (!isEarthEngineAvailable()) throw new LocalizedError(`${AUTH_ERROR_KEY}.unavailable`, EARTH_ENGINE_UNAVAILABLE_MESSAGE);
	if (shouldUseTauriEarthEngineOAuth()) return authenticateEarthEngineViaTauri(oauthClientId);
	await authenticateEarthEngineViaBrowser(oauthClientId);
	return null;
}
function normalizeEarthEngineAccessToken(token) {
	if (token.error) throw new Error(token.error);
	if (!token.accessToken) throw new LocalizedError(`${AUTH_ERROR_KEY}.noAccessToken`, "Earth Engine sign-in did not return an access token.");
	return {
		accessToken: token.accessToken.replace(/^Bearer\s+/i, "").trim(),
		tokenType: token.tokenType || "Bearer",
		expiresIn: token.expiresIn || 3600
	};
}
function isTauriRuntime() {
	if (typeof window === "undefined") return false;
	return Boolean(window.__TAURI_INTERNALS__);
}
function isTauriProductionOrigin() {
	if (typeof window === "undefined") return false;
	const { hostname, protocol } = window.location;
	return protocol === "tauri:" || protocol === "file:" || hostname.endsWith(".localhost") && hostname !== "localhost";
}
function shouldUseTauriEarthEngineOAuth() {
	return isTauriProductionOrigin();
}
/**
* Whether this build is one of the Apple App Store targets, which ship without
* the Earth Engine OAuth loopback listener.
*
* The macOS App Store build is identified by its Vite define; iOS by its user
* agent, since no define distinguishes it. iPadOS 13+ reports a desktop
* "Macintosh" UA, disambiguated from a real Mac by multi-touch — the same rule
* as the app's `isMobile`.
*/
function isAppleAppStoreRuntime(userAgent, maxTouchPoints) {
	if (typeof navigator === "undefined") return false;
	const ua = userAgent ?? navigator.userAgent;
	const touch = maxTouchPoints ?? navigator.maxTouchPoints;
	if (/iPhone|iPad|iPod/i.test(ua)) return true;
	return isIpadDesktopUserAgent(ua, touch);
}
/**
* Whether Earth Engine sign-in is available in this build.
*
* Signing in from a packaged app needs the Rust loopback OAuth listener, which
* the Apple App Store builds compile out (see the module gate in
* `src-tauri/src/lib.rs`) so the app claims no `network.server` entitlement.
* A browser — including Safari on iOS — still uses Google's popup/redirect flow
* and keeps Earth Engine, so the check is scoped to the packaged app via
* `isTauriProductionOrigin`.
*
* @param appleAppStore - Override for testing; defaults to the runtime check.
* @param packagedApp - Override for testing; defaults to
*   `isTauriProductionOrigin()`.
* @returns True when the Earth Engine UI and sign-in should be offered.
*/
function isEarthEngineAvailable(appleAppStore = isAppleAppStoreRuntime(), packagedApp = isTauriProductionOrigin()) {
	return !(packagedApp && appleAppStore);
}
/** The message shown where Earth Engine is compiled out. */
var EARTH_ENGINE_UNAVAILABLE_MESSAGE = "Earth Engine sign-in is not available in the App Store build of GeoLibre.";
async function authenticateEarthEngineViaBrowser(oauthClientId) {
	const earthEngine = await loadEarthEngine();
	return new Promise((resolve, reject) => {
		const onSuccess = () => resolve();
		const onFailure = (error) => reject(new Error(errorMessage(error)));
		const onImmediateFailed = () => {
			if (!earthEngine.data?.authenticateViaPopup) {
				reject(new LocalizedError(`${AUTH_ERROR_KEY}.popupUnavailable`, "Earth Engine popup authentication is unavailable."));
				return;
			}
			earthEngine.data.authenticateViaPopup(onSuccess, onFailure);
		};
		if (earthEngine.data?.getAuthToken?.()) {
			resolve();
			return;
		}
		if (!earthEngine.data?.authenticateViaOauth) {
			reject(new LocalizedError(`${AUTH_ERROR_KEY}.oauthUnavailable`, "Earth Engine OAuth authentication is unavailable."));
			return;
		}
		earthEngine.data.authenticateViaOauth(oauthClientId, onSuccess, onFailure, EARTH_ENGINE_OAUTH_SCOPES, onImmediateFailed, true);
	});
}
async function authenticateEarthEngineViaTauri(oauthClientId) {
	const session = await invoke("start_earth_engine_oauth", { clientId: oauthClientId });
	const { openUrl } = await __vitePreload(async () => {
		const { openUrl } = await import("./dist-js-DcgBVQZr.js");
		return { openUrl };
	}, __vite__mapDeps([0,1,2]), import.meta.url);
	await openUrl(session.url);
	return normalizeEarthEngineAccessToken(await waitForTauriEarthEngineToken(session.state));
}
async function loadEarthEngine() {
	installEarthEngineFunctionInfoFallback();
	const module = await __vitePreload(() => import("./browser-5UhMgqvq.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), __vite__mapDeps([3,4,5]), import.meta.url);
	return module.default ?? module;
}
async function waitForTauriEarthEngineToken(state) {
	for (let poll = 0; poll < 300; poll += 1) {
		const token = await invoke("poll_earth_engine_oauth", { stateId: state });
		if (token) return token;
		await delay(1e3);
	}
	throw new LocalizedError(`${AUTH_ERROR_KEY}.timedOut`, "Earth Engine sign-in timed out.");
}
function delay(ms) {
	return new Promise((resolve) => window.setTimeout(resolve, ms));
}
async function closeTauriOauthPopups() {
	await closeTauriOauthPopupsOnce();
	for (const delayMs of [
		250,
		750,
		1500
	]) setTimeout(() => {
		closeTauriOauthPopupsOnce();
	}, delayMs);
}
async function closeTauriOauthPopupsOnce() {
	await Promise.allSettled([closeTauriOauthPopupsByCommand(), closeTauriOauthPopupsByWindowApi()]);
}
async function closeTauriOauthPopupsByCommand() {
	await invoke("close_oauth_popups");
}
async function closeTauriOauthPopupsByWindowApi() {
	const { getAllWindows } = await __vitePreload(async () => {
		const { getAllWindows } = await import("./window-a-zVUCqC.js");
		return { getAllWindows };
	}, __vite__mapDeps([6,7,2,8]), import.meta.url);
	const windows = await getAllWindows();
	await Promise.all(windows.filter((window) => window.label.startsWith("oauthPopup")).map((window) => window.close()));
}
function errorMessage(error) {
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	if (error && typeof error === "object" && "message" in error) {
		const message = error.message;
		if (typeof message === "string") return message;
	}
	try {
		return JSON.stringify(error);
	} catch {}
	return "Earth Engine sign-in failed.";
}
export { closeTauriOauthPopups as a, installEarthEngineFunctionInfoFallback as c, oauthClientIdValue as d, preloadEarthEngineAuthLibrary as f, clearEarthEngineFunctionInfo as i, isEarthEngineAvailable as l, shouldUseTauriEarthEngineOAuth as m, authenticateEarthEngine as n, errorMessage as o, projectValue as p, captureEarthEngineFunctionInfo as r, importMetaEnv as s, EARTH_ENGINE_UNAVAILABLE_MESSAGE as t, isTauriRuntime as u };
