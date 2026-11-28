const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-DH5MUfqR.js","./maplibre-gl-planetary-computer-Bc9-TN8x.js","./dist-5qB-mXSs.js","./dist-BDsRXmU8.js","./get-attribute-from-layouts-Bj7i7MoM.js","./probe-log-BFMlxtxp.js","./dist-DsaV6xvE.js","./dist-DN5uNyaS.js","./lighting-CkiSk4hn.js","./dist-CXitQ3he.js","./dist-B0xKSO4s.js","./dist-DDW10Qkd.js","./dist-C2SefCHx.js","./maplibre-qZmYNTfF.js","./rolldown-runtime-DpEnGzO4.js","./three.module-C1DgAC58.js","./three.core-CJpNrwyg.js","./GLTFLoader-BP44timt.js","./three-d-tiles-bounds-DxhgxXGm.js","./plugin-i18n-CgaB8Q8N.js","./dist-Ao5iO9xN.js","./maplibre-gl-raster-Dg4vt_wn.js","./dist-DgpANkPf.js","./dist-BrLz0wL5.js","./preload-helper-CALLvQDj.js","./webgl-device-DCfD3QcA.js","./expression-DP7NxJ1e.js","./webgpu-_X7bJI7i.js","./dist-CKwZVvEU.js","./dist-8LEp2_oC.js","./dist-DpFv5fJM.js","./a5-DbjGHmTj.js","./h3-js.es-CBCwOu9q.js","./src-BCoJS6j8.js","./ieee754-CGLXtx3l.js","./dist-BduIBPb8.js","./src-DOHfKXtQ.js","./build-BcV0NQNt.js","./decode-DnMI7HPq.js","./pool-BSXJVSow.js","./dist-DV4O8bxz.js","./maplibre-earth-engine-CqlB61vw.js"])))=>i.map(i=>d[i]);
import { at as useAppStore, g as resolveProjectHeaderReferences } from "./src-ClC14oKR.js";
import { Hi as PLANETARY_COMPUTER_SOURCE_KIND, Or as getGoogleMapsApiKey, Yi as isPlanetaryComputerLayer, _t as allowsCredentialHeaders, ji as DEFAULT_LAYER_STYLE, vt as hasHeaderReferences } from "./datum-shift-HP4B6Kvo.js";
import { n as mergeI3sBuildingSelection, r as visibleI3sBuildingSublayers, t as i3sGroundOffset } from "./i3s-building-state-DKdsD8aQ.js";
import { a as persistedThreeDTilesRequestHeaders, i as nonEmptyRecord, n as googleMapsApiKeyHeaderValue, o as resolveThreeDTilesRequestHeaders, r as isGooglePhotorealisticTilesetUrl, s as stripGoogleMapsApiKeyHeader, t as GOOGLE_MAPS_API_KEY_HEADER } from "./three-d-tiles-EyRzBf-V.js";
import { t as __vitePreload } from "./preload-helper-CALLvQDj.js";
import { i as onArcgisViewDestroy } from "./arcgis-control-adapters-e-jDmgK-.js";
import { r as releaseMercatorProjectionLock, t as acquireMercatorProjectionLock } from "./map-projection-utils-sE8hgzO2.js";
import { i as setSharedDeckLayers, t as ensureSharedDeckOverlay } from "./shared-deck-overlay-B-47CDY8.js";
import { t as createPluginTranslator } from "./plugin-i18n-CgaB8Q8N.js";
import { t as LocalizedError } from "./localized-error--eA1XTaJ.js";
import { _ as withArcGISContingentValues, a as arcGISServerManagedFields, c as arcGISObjectId, i as arcGISNewFeatureProperties, o as arcGISEditAttributes, s as arcGISEditCapabilities, x as resolveArcGISFieldDomain } from "./arcgis-defaults-BUc_PGUS.js";
import { s as arcGISFeatureLayerConnection } from "./arcgis-layer--HetmovE.js";
import { a as isSelectorTimeBinding, o as nearestTimeIndex, r as getTemporalLayerAdapter, u as toEpochMsAxis } from "./temporal-layers-3l8-b6y5.js";
import { r as getActiveTimeSliderControl } from "./time-slider-state-DJgbvATp.js";
import { n as generateSteps, r as resolveUrl } from "./maplibre-gl-time-slider-Vf_-MDNr.js";
import { t as usesMosaicManifest } from "./time-slider-source-url-CyJUmqYy.js";
import { a as closeTauriOauthPopups, d as oauthClientIdValue, f as preloadEarthEngineAuthLibrary, i as clearEarthEngineFunctionInfo, m as shouldUseTauriEarthEngineOAuth, n as authenticateEarthEngine, p as projectValue, s as importMetaEnv } from "./earth-engine-auth-DAyZoLnW.js";
// ../../packages/plugins/src/planetary-computer-labels.ts
var DEFAULT_LABELS = {
	stacBrowser: "Browse in STAC catalogs",
	stacBrowserTitle: "Open this collection in the STAC catalogs panel to add point clouds, GeoParquet, Zarr, and other assets the raster tiler cannot draw",
	timeSlider: "Animate in Time slider",
	timeSliderTitle: "Step through these results by date in the Time slider and chart a pixel through time",
	colorbar: "Show colorbar",
	colorbarTitle: "Add a colorbar for this layer's colormap and value range to the map",
	clipToMap: "Add clip to map",
	clipToMapTitle: "Clip this scene to the drawn box (or the map view) and add its raw band values as a raster layer for analysis",
	clipLayerName: "{{item}} clip",
	clipOutsideItem: "The clip area does not overlap this scene. Draw a box inside its footprint or move the map over it.",
	clipUnavailable: "This scene cannot be added as a clip on this map.",
	timeSeriesLayerName: "{{collection}} time series",
	timeSliderNeedsDates: "At least two results with different dates are needed for a time series.",
	timeSliderUnavailable: "The Time slider is not available on this map."
};
var planetaryComputerLabels = DEFAULT_LABELS;
/**
* Sets the translated strings for the panel's GeoLibre buttons.
*
* The buttons read these when they are drawn, so a language switch shows up the
* next time the panel renders a view.
*
* @param next - The translated labels; missing keys keep their English default.
*/
function setPlanetaryComputerLabels(next) {
	planetaryComputerLabels = {
		...DEFAULT_LABELS,
		...next
	};
}
// ../../packages/plugins/src/plugins/planetary-computer-stac.ts
/** Base URL of the Planetary Computer STAC API. */
var PLANETARY_COMPUTER_STAC_URL = "https://planetarycomputer.microsoft.com/api/stac/v1";
/**
* Loads the bundled Planetary Computer collection snapshot.
*
* Kept behind a dynamic import so the ~150 KB list only loads when the live
* `/collections` request fails.
*
* @returns The snapshot collections, as regenerated by
*   `scripts/gen-planetary-computer-collections.mjs`.
*/
async function loadBundledPlanetaryComputerCollections() {
	return (await __vitePreload(() => import("./planetary-computer-collections-B42WZ_ch.js"), [], import.meta.url)).default;
}
/**
* Options every Planetary Computer `STACClient` in GeoLibre is built with.
*
* Search goes out as a `GET /search`, the library default: a plain GET needs no
* CORS preflight, so it works from the browser and the Tauri webview even when
* the API rejects the `OPTIONS` request a JSON `POST /search` requires. The
* collection list falls back to the bundled snapshot when the live one cannot
* be read (the API has at times sent `GET /collections` without CORS headers).
*
* @param overrides - Fallback hooks, overridable in tests.
* @returns The client options.
*/
function planetaryComputerStacClientOptions(overrides = {}) {
	return {
		searchMethod: "GET",
		fallbackCollections: loadBundledPlanetaryComputerCollections,
		onCollectionsFallback: (error) => console.warn("Planetary Computer collection list is unavailable from this origin; using the bundled list.", error),
		...overrides
	};
}
// ../../packages/plugins/src/plugins/maplibre-planetary-computer.ts
var planetaryComputerControlPosition = "top-left";
var PLANETARY_COMPUTER_OPTIONS = {
	className: "geolibre-planetary-computer-control",
	collapsed: false,
	panelWidth: 380,
	title: "Planetary Computer"
};
var planetaryComputerControl = null;
var planetaryComputerControlMounted = false;
var planetaryComputerModulePromise = null;
var planetaryComputerStacClient = null;
var planetaryComputerTilerClient = null;
var planetaryComputerStoreUnsubscribe = null;
var planetaryComputerRestoreToken = 0;
var planetaryComputerRestorePreservedLayerIds = /* @__PURE__ */ new Set();
var planetaryComputerStoreSyncSuspended = 0;
var planetaryComputerCustomActions = null;
/**
* Supplies the extra buttons GeoLibre adds to the panel (Time Slider, STAC
* browser, colorbar, ...). Kept as a late-bound factory so this module does not
* import the plugins those buttons hand off to.
*
* @param factory - Builds the custom actions for a host app, or null for none.
*/
function setPlanetaryComputerCustomActions(factory) {
	planetaryComputerCustomActions = factory;
}
function openPlanetaryComputerPanel(app) {
	openStandalonePlanetaryComputerControl(app);
}
function closePlanetaryComputerPanel(app) {
	if (planetaryComputerControl && planetaryComputerControlMounted) {
		app.removeMapControl(planetaryComputerControl);
		return;
	}
	resetPlanetaryComputerControl(planetaryComputerControl);
}
/**
* Whether the panel can run on the active renderer.
*
* The control draws its layers through the MapLibre style API (raster sources
* added to the map it is mounted on), so it needs a native MapLibre map. The
* Mapbox, ArcGIS, and Cesium engines have none.
*
* @param app - The GeoLibre app API.
* @returns True when the active renderer can host the panel.
*/
function isPlanetaryComputerPanelSupported(app) {
	return Boolean(app.getMap?.());
}
async function openStandalonePlanetaryComputerControl(app) {
	const control = await ensurePlanetaryComputerControl(app, { hiddenOnMount: false });
	if (!control) return false;
	setTimeout(() => {
		showPlanetaryComputerControl(control);
		control.expand();
		wirePlanetaryComputerCloseButton(control);
	}, 0);
	return true;
}
function wirePlanetaryComputerCloseButton(control) {
	const closeButton = control?.getPanelElement()?.querySelector(".pc-control-close");
	if (!closeButton || closeButton.dataset.geolibreCloseWired === "true") return;
	closeButton.dataset.geolibreCloseWired = "true";
	closeButton.addEventListener("click", () => hidePlanetaryComputerControl(control));
}
function loadPlanetaryComputerModule() {
	planetaryComputerModulePromise ??= __vitePreload(() => import("./dist-DH5MUfqR.js").then((module) => {
		return module;
	}), __vite__mapDeps([0,1]), import.meta.url);
	return planetaryComputerModulePromise;
}
async function ensurePlanetaryComputerControl(app, options = {}) {
	if (!isPlanetaryComputerPanelSupported(app)) return null;
	const module = await loadPlanetaryComputerModule();
	planetaryComputerControl ??= createPlanetaryComputerControl(module, app);
	if (!planetaryComputerControlMounted) {
		if (!app.addMapControl(planetaryComputerControl, planetaryComputerControlPosition)) {
			resetPlanetaryComputerControl(planetaryComputerControl);
			return null;
		}
		planetaryComputerControlMounted = true;
		if (options.hiddenOnMount ?? true) hidePlanetaryComputerControl(planetaryComputerControl);
		wirePlanetaryComputerCloseButton(planetaryComputerControl);
	}
	return planetaryComputerControl;
}
function createPlanetaryComputerControl(module, app) {
	const control = new module.PlanetaryComputerControl({
		...PLANETARY_COMPUTER_OPTIONS,
		stacClient: getPlanetaryComputerStacClient(module),
		tilerClient: getPlanetaryComputerTilerClient(module),
		customActions: planetaryComputerCustomActions?.(app)
	});
	patchPlanetaryComputerControlOnRemove(control);
	control.on("layer:add", syncPlanetaryComputerLayersToStore);
	control.on("layer:remove", syncPlanetaryComputerLayersToStore);
	control.on("layer:update", syncPlanetaryComputerLayersToStore);
	planetaryComputerStoreUnsubscribe ??= useAppStore.subscribe((state, previous) => {
		const currentById = new Map(state.layers.map((layer) => [layer.id, layer]));
		for (const layer of previous.layers) {
			if (!isPlanetaryComputerLayer(layer)) continue;
			const currentLayer = currentById.get(layer.id);
			if (!currentLayer) {
				planetaryComputerRestorePreservedLayerIds.delete(layer.id);
				runWithPlanetaryComputerStoreSyncSuspended(() => {
					planetaryComputerControl?.removeLayer(layer.id);
				});
				continue;
			}
			if (!isPlanetaryComputerLayer(currentLayer)) continue;
			if (currentLayer.visible !== layer.visible || currentLayer.opacity !== layer.opacity) planetaryComputerControl?.updateLayer(currentLayer.id, {
				opacity: currentLayer.opacity,
				visible: currentLayer.visible
			});
		}
	});
	return control;
}
function syncPlanetaryComputerLayersToStore(event) {
	if (planetaryComputerStoreSyncSuspended > 0) return;
	const store = useAppStore.getState();
	const activeLayers = event.state.activeLayers;
	const activeLayerIds = new Set(activeLayers.map((layer) => layer.id));
	for (const storeLayer of store.layers) {
		if (!isPlanetaryComputerLayer(storeLayer)) continue;
		if (!activeLayerIds.has(storeLayer.id) && !planetaryComputerRestorePreservedLayerIds.has(storeLayer.id)) {
			planetaryComputerRestorePreservedLayerIds.delete(storeLayer.id);
			store.removeLayer(storeLayer.id);
		}
	}
	for (const activeLayer of activeLayers) {
		planetaryComputerRestorePreservedLayerIds.delete(activeLayer.id);
		const layer = createPlanetaryComputerStoreLayer(activeLayer);
		const existing = useAppStore.getState().layers.find((current) => current.id === layer.id);
		if (existing) {
			const patch = {};
			if (existing.visible !== layer.visible) patch.visible = layer.visible;
			if (existing.opacity !== layer.opacity) patch.opacity = layer.opacity;
			const metadata = planetaryComputerRenderMetadataPatch(existing, layer);
			if (metadata) patch.metadata = {
				...existing.metadata,
				...metadata
			};
			if (Object.keys(patch).length > 0) useAppStore.getState().updateLayer(layer.id, patch);
			continue;
		}
		useAppStore.getState().addLayer(layer);
	}
}
/**
* Metadata keys the control's state is authoritative for on a layer already in
* the store. The render keys follow a restyle. `identifiable` is here so a
* layer saved by a version that wrote `false` (before Identify could read
* these layers) is switched on when the project is reopened.
*/
var PLANETARY_COMPUTER_RENDER_METADATA_KEYS = [
	"assets",
	"identifiable",
	"presetName",
	"renderParams"
];
/**
* The render metadata of `next` that differs from `existing`.
*
* @param existing - The layer currently in the store.
* @param next - The layer rebuilt from the control's state.
* @returns The changed metadata fields, or null when nothing changed.
*/
function planetaryComputerRenderMetadataPatch(existing, next) {
	const patch = {};
	for (const key of PLANETARY_COMPUTER_RENDER_METADATA_KEYS) if (JSON.stringify(existing.metadata[key]) !== JSON.stringify(next.metadata[key])) patch[key] = next.metadata[key];
	return Object.keys(patch).length > 0 ? patch : null;
}
/**
* Builds the GeoLibre store layer that mirrors a control layer.
*
* The metadata is everything {@link restorePlanetaryComputerLayers} needs to
* rebuild the layer from a saved project: the collection, the item id (or, for
* a mosaic, the search that selects its items), and the render state. The same
* shape is authored by the Python API's `Map.add_planetary_computer` and the
* MCP server's `add_planetary_computer_layer` (see `docs/project-format.md`).
*
* @param activeLayer - The control's layer.
* @returns The mirroring store layer.
*/
function createPlanetaryComputerStoreLayer(activeLayer) {
	const bbox = activeLayer.bounds ?? boundsTuple(activeLayer.item?.bbox) ?? boundsTuple(activeLayer.collection?.extent?.spatial?.bbox?.[0]);
	const collectionId = activeLayer.item?.collection ?? activeLayer.collection?.id ?? "";
	const datetime = activeLayer.item ? planetaryComputerItemDate(activeLayer.item) : void 0;
	return {
		id: activeLayer.id,
		name: planetaryComputerLayerName(activeLayer),
		type: "raster",
		source: {
			collectionId,
			sourceId: activeLayer.sourceId,
			type: "raster"
		},
		visible: activeLayer.visible,
		opacity: activeLayer.opacity,
		style: { ...DEFAULT_LAYER_STYLE },
		metadata: {
			assets: activeLayer.assets,
			externalNativeLayer: true,
			identifiable: true,
			nativeLayerIds: [activeLayer.id],
			planetaryComputerLayerType: activeLayer.type,
			presetName: activeLayer.presetName,
			renderParams: activeLayer.renderParams,
			sourceId: activeLayer.sourceId,
			sourceIds: [activeLayer.sourceId],
			sourceKind: PLANETARY_COMPUTER_SOURCE_KIND,
			stacCollectionId: collectionId,
			stacItemId: activeLayer.item?.id,
			...datetime ? { stacDatetime: datetime } : {},
			...activeLayer.searchParams ? { stacSearchParams: activeLayer.searchParams } : {},
			tileType: "raster",
			...bbox ? { bounds: bbox } : {}
		},
		sourcePath: collectionId || activeLayer.item?.id || activeLayer.id
	};
}
/**
* Replays saved Planetary Computer raster layers into the upstream control.
* Each layer is re-created under its saved GeoLibre id through the control's
* public add methods, so the panel lists it and can restyle it again.
*
* @param app - The GeoLibre app API.
*/
function restorePlanetaryComputerLayers(app) {
	if (!useAppStore.getState().layers.some(isPlanetaryComputerLayer) && !planetaryComputerControl) return;
	const restoreToken = ++planetaryComputerRestoreToken;
	(async () => {
		const control = await ensurePlanetaryComputerControl(app);
		if (!control || restoreToken !== planetaryComputerRestoreToken) return;
		const storeLayers = useAppStore.getState().layers.filter(isPlanetaryComputerLayer);
		const storeLayerIds = new Set(storeLayers.map((layer) => layer.id));
		runWithPlanetaryComputerStoreSyncSuspended(() => {
			for (const activeLayer of [...control.getState().activeLayers]) if (!storeLayerIds.has(activeLayer.id)) control.removeLayer(activeLayer.id);
		});
		const activeLayerIds = new Set(control.getState().activeLayers.map((layer) => layer.id));
		const layersToRestore = [];
		for (const layer of storeLayers) {
			if (activeLayerIds.has(layer.id)) {
				control.updateLayer(layer.id, {
					opacity: layer.opacity,
					visible: layer.visible
				});
				continue;
			}
			layersToRestore.push(layer);
		}
		const results = await Promise.allSettled(layersToRestore.map((layer) => restorePlanetaryComputerLayer(control, layer, restoreToken)));
		const restoredLayerIds = /* @__PURE__ */ new Set();
		const invalidLayers = [];
		const transientFailures = [];
		for (const [index, result] of results.entries()) {
			const layer = layersToRestore[index];
			if (result.status === "fulfilled") {
				if (result.value) restoredLayerIds.add(result.value);
			} else {
				const failure = {
					id: layer?.id ?? "",
					name: layer?.name ?? "unknown"
				};
				if (isInvalidPlanetaryComputerLayerMetadataError(result.reason)) invalidLayers.push(failure);
				else transientFailures.push(failure);
				console.error(`[GeoLibre] Failed to restore Planetary Computer layer "${layer?.name ?? "unknown"}"`, result.reason);
			}
		}
		if (restoreToken !== planetaryComputerRestoreToken) {
			rollbackSupersededPlanetaryComputerRestore(control, layersToRestore, restoredLayerIds);
			return;
		}
		if (invalidLayers.length > 0) {
			removeInvalidPlanetaryComputerStoreLayers(control, invalidLayers);
			console.warn(`[GeoLibre] Some Planetary Computer layers had invalid saved metadata and were removed from the layer list: ${invalidLayers.map((layer) => layer.name).join(", ")}`);
		}
		if (transientFailures.length > 0) {
			for (const transientFailure of transientFailures) if (transientFailure.id) planetaryComputerRestorePreservedLayerIds.add(transientFailure.id);
			console.warn(`[GeoLibre] Some Planetary Computer layers could not be restored and were kept in the layer list: ${transientFailures.map((layer) => layer.name).join(", ")}`);
		}
		if (restoredLayerIds.size > 0) syncPlanetaryComputerLayersToStore({ state: control.getState() });
	})().catch((error) => {
		console.error("[GeoLibre] Failed to restore Planetary Computer layers", error);
	});
}
async function restorePlanetaryComputerLayer(control, layer, restoreToken) {
	const module = await loadPlanetaryComputerModule();
	const collectionId = stringMetadata(layer, "stacCollectionId");
	const layerType = stringMetadata(layer, "planetaryComputerLayerType");
	if (!collectionId) throw new InvalidPlanetaryComputerLayerMetadataError("Saved Planetary Computer layer is missing a collection id.");
	const style = planetaryComputerSavedStyle(module, layer, collectionId);
	if (layerType === "collection" || layerType === "mosaic") {
		const searchParams = {
			...searchParamsMetadata(layer, "stacSearchParams"),
			collections: [collectionId]
		};
		const [collection, { searchId }] = await Promise.all([getPlanetaryComputerStacClient(module).getCollection(collectionId), getPlanetaryComputerTilerClient(module).registerMosaic(searchParams)]);
		const currentLayer = currentRestorablePlanetaryComputerLayer(control, layer, restoreToken);
		if (!currentLayer) return null;
		const map = control.getMap();
		await runWithPlanetaryComputerStoreSyncSuspended(() => control.addMosaicLayer(collection, {
			...style,
			id: currentLayer.id,
			sourceId: stringMetadata(currentLayer, "sourceId"),
			visible: currentLayer.visible,
			opacity: currentLayer.opacity,
			beforeId: map ? nextRenderedStoreLayerId(map, currentLayer.id) : void 0,
			mosaicId: searchId,
			searchParams,
			bbox: numberArrayMetadata(currentLayer, "bounds")
		}));
		return currentLayer.id;
	}
	const itemId = stringMetadata(layer, "stacItemId");
	if (!itemId) throw new InvalidPlanetaryComputerLayerMetadataError("Saved Planetary Computer item layer is missing an item id.");
	const item = await getPlanetaryComputerStacClient(module).getItem(collectionId, itemId);
	const currentLayer = currentRestorablePlanetaryComputerLayer(control, layer, restoreToken);
	if (!currentLayer) return null;
	const map = control.getMap();
	runWithPlanetaryComputerStoreSyncSuspended(() => {
		control.addItemLayer({
			...item,
			collection: item.collection || collectionId
		}, {
			...style,
			id: currentLayer.id,
			sourceId: stringMetadata(currentLayer, "sourceId"),
			visible: currentLayer.visible,
			opacity: currentLayer.opacity,
			beforeId: map ? nextRenderedStoreLayerId(map, currentLayer.id) : void 0
		});
	});
	return currentLayer.id;
}
/**
* The render options saved on a layer, in the shape the control's add methods take.
*
* A layer saved by the app carries its full `renderParams`. One authored by the
* Python API or the MCP server may carry only a `presetName` (or nothing), in
* which case the preset's parameters are looked up here, and with neither the
* control falls back to the collection's default preset.
*
* @param module - The loaded Planetary Computer library.
* @param layer - The saved store layer.
* @param collectionId - The layer's collection id.
* @returns The `renderParams`/`assets`/`presetName` options to pass on.
*/
function planetaryComputerSavedStyle(module, layer, collectionId) {
	const presetName = stringMetadata(layer, "presetName");
	const savedParams = tileParamsMetadata(layer, "renderParams");
	const savedAssets = stringArrayMetadata(layer, "assets");
	const preset = presetName ? module.getPreset(collectionId, presetName) : void 0;
	if (!(Object.keys(savedParams).length > 0) && !savedAssets?.length) return preset ? {
		presetName: preset.name,
		renderParams: { ...preset.params }
	} : {};
	const selectsBands = Boolean(savedParams.expression || savedParams.assets?.length || savedAssets?.length);
	const base = preset ?? module.getDefaultPreset(collectionId);
	const renderParams = selectsBands ? savedParams : {
		...base?.params,
		...savedParams
	};
	const assets = savedAssets?.length ? savedAssets : renderParams.assets;
	return {
		...presetName ? { presetName } : !selectsBands && base ? { presetName: base.name } : {},
		renderParams,
		...assets?.length ? { assets } : {}
	};
}
function removeInvalidPlanetaryComputerStoreLayers(control, invalidLayers) {
	const activeLayerIds = new Set(control.getState().activeLayers.map((layer) => layer.id));
	for (const invalidLayer of invalidLayers) {
		if (!invalidLayer.id || activeLayerIds.has(invalidLayer.id)) continue;
		planetaryComputerRestorePreservedLayerIds.delete(invalidLayer.id);
		const storeLayer = useAppStore.getState().layers.find((layer) => layer.id === invalidLayer.id);
		if (storeLayer && isPlanetaryComputerLayer(storeLayer)) useAppStore.getState().removeLayer(invalidLayer.id);
	}
}
function rollbackSupersededPlanetaryComputerRestore(control, layersToRestore, restoredLayerIds) {
	if (restoredLayerIds.size === 0) return;
	const restoredLayersById = new Map(layersToRestore.map((layer) => [layer.id, layer]));
	let keptRestoredLayer = false;
	runWithPlanetaryComputerStoreSyncSuspended(() => {
		for (const restoredLayerId of restoredLayerIds) {
			const restoredLayer = restoredLayersById.get(restoredLayerId);
			if (restoredLayer && currentStoreLayerMatchesPlanetaryComputerRestore(restoredLayer)) {
				keptRestoredLayer = true;
				continue;
			}
			control.removeLayer(restoredLayerId);
		}
	});
	if (keptRestoredLayer) syncPlanetaryComputerLayersToStore({ state: control.getState() });
}
function currentRestorablePlanetaryComputerLayer(control, layer, restoreToken) {
	if (restoreToken !== planetaryComputerRestoreToken || control !== planetaryComputerControl) return null;
	const currentLayer = useAppStore.getState().layers.find((candidate) => candidate.id === layer.id);
	if (!currentLayer || !isPlanetaryComputerLayer(currentLayer)) return null;
	if (!hasSamePlanetaryComputerRestoreSource(currentLayer, layer)) return null;
	return currentLayer;
}
function currentStoreLayerMatchesPlanetaryComputerRestore(restoredLayer) {
	const currentLayer = useAppStore.getState().layers.find((candidate) => candidate.id === restoredLayer.id);
	return !!currentLayer && isPlanetaryComputerLayer(currentLayer) && hasSamePlanetaryComputerRestoreSource(currentLayer, restoredLayer);
}
function hasSamePlanetaryComputerRestoreSource(currentLayer, restoredLayer) {
	return stringMetadata(currentLayer, "stacCollectionId") === stringMetadata(restoredLayer, "stacCollectionId") && stringMetadata(currentLayer, "stacItemId") === stringMetadata(restoredLayer, "stacItemId") && stringMetadata(currentLayer, "planetaryComputerLayerType") === stringMetadata(restoredLayer, "planetaryComputerLayerType") && JSON.stringify(currentLayer.metadata.stacSearchParams) === JSON.stringify(restoredLayer.metadata.stacSearchParams);
}
function runWithPlanetaryComputerStoreSyncSuspended(callback) {
	planetaryComputerStoreSyncSuspended += 1;
	try {
		return callback();
	} finally {
		planetaryComputerStoreSyncSuspended -= 1;
	}
}
function nextRenderedStoreLayerId(map, layerId) {
	const layers = useAppStore.getState().layers;
	const layerIndex = layers.findIndex((layer) => layer.id === layerId);
	if (layerIndex < 0) return void 0;
	for (const candidate of layers.slice(layerIndex + 1)) for (const renderedId of renderedLayerIds(candidate)) if (renderedId !== layerId && map.getLayer(renderedId)) return renderedId;
}
function renderedLayerIds(layer) {
	return [...Array.isArray(layer.metadata.nativeLayerIds) ? layer.metadata.nativeLayerIds.filter((value) => typeof value === "string" && value.trim().length > 0) : [], layer.id];
}
/**
* Builds STAC search parameters from the simple filters the entry points take.
*
* @param input - The search filters.
* @returns The STAC search parameters.
*/
function planetaryComputerSearchParams(input) {
	const params = { collections: [input.collection] };
	if (input.bbox) params.bbox = input.bbox;
	if (input.datetime) params.datetime = input.datetime;
	if (input.limit !== void 0) params.limit = input.limit;
	if (input.maxCloudCover !== void 0 && input.maxCloudCover < 100) params.query = { "eo:cloud_cover": { lte: input.maxCloudCover } };
	params.sortby = input.sortBy === "least-cloudy" ? [{
		field: "properties.eo:cloud_cover",
		direction: "asc"
	}] : [{
		field: "properties.datetime",
		direction: input.sortBy === "oldest" ? "asc" : "desc"
	}];
	return params;
}
/**
* Searches the Planetary Computer STAC API.
*
* Each call uses a client of its own: the library's client aborts its previous
* search when a new one starts, so a shared one would let the panel, or two
* assistant tool calls running at once, cancel each other.
*
* @param input - The search filters.
* @returns The matching STAC items.
*/
async function searchPlanetaryComputerItems(input) {
	return new (await (loadPlanetaryComputerModule())).STACClient(PLANETARY_COMPUTER_STAC_URL, planetaryComputerStacClientOptions()).search(planetaryComputerSearchParams(input));
}
/**
* Resolves the render options for a programmatic add.
*
* @param module - The loaded Planetary Computer library.
* @param collectionId - The collection id.
* @param style - The requested preset and/or render parameters.
* @returns Options for the control's add methods; empty to use the default preset.
* @throws When a named preset does not exist for the collection.
*/
function resolvePlanetaryComputerStyle(module, collectionId, style) {
	if (style.renderParams && Object.keys(style.renderParams).length > 0) return {
		renderParams: style.renderParams,
		presetName: style.presetName
	};
	if (!style.presetName) return {};
	const preset = module.getPreset(collectionId, style.presetName);
	if (!preset) {
		const available = module.getPresetsForCollection(collectionId).map((candidate) => candidate.name);
		throw new Error(available.length ? `Unknown preset "${style.presetName}" for ${collectionId}. Available: ${available.join(", ")}.` : `${collectionId} has no render presets; pass render parameters instead.`);
	}
	return {
		presetName: preset.name,
		renderParams: { ...preset.params }
	};
}
/**
* Adds one Planetary Computer STAC item to the map as a panel-owned layer.
*
* The layer is created through the panel's control (mounted hidden when the
* panel is closed), so it appears in the panel's Layers tab, can be restyled
* there, and is restored when the project is reopened. On a renderer that
* cannot host the panel the item is added as a plain XYZ tile layer instead.
*
* @param app - The GeoLibre app API.
* @param input - The collection and item (an id to fetch, or the item itself) plus render options.
* @returns The added layer.
*/
async function addPlanetaryComputerItemLayer(app, input) {
	const module = await loadPlanetaryComputerModule();
	let item = input.item;
	if (!item) {
		if (!input.itemId) throw new Error("An item or item id is required.");
		item = await getPlanetaryComputerStacClient(module).getItem(input.collection, input.itemId);
	}
	item = {
		...item,
		collection: item.collection || input.collection
	};
	const style = resolvePlanetaryComputerStyle(module, input.collection, input);
	const bounds = boundsTuple(item.bbox);
	const name = input.name?.trim();
	const control = await ensurePlanetaryComputerControl(app);
	if (!control) {
		const params = style.renderParams ?? module.getDefaultPreset(input.collection)?.params ?? {};
		const tileUrl = getPlanetaryComputerTilerClient(module).getItemTileUrl(input.collection, item.id, params);
		const layerId = app.addTileLayer?.(name || item.id, tileUrl, {
			attribution: "Microsoft Planetary Computer",
			...bounds ? { bounds } : {},
			metadata: {
				stacCollectionId: input.collection,
				stacItemId: item.id
			}
		});
		if (!layerId) throw new Error("The active map cannot add tile layers.");
		return {
			layerId,
			item,
			tileLayerFallback: true,
			...bounds ? { bounds } : {}
		};
	}
	const layer = control.addItemLayer(item, style);
	if (name) useAppStore.getState().updateLayer(layer.id, { name });
	return {
		layerId: layer.id,
		item,
		...bounds ? { bounds } : {}
	};
}
/**
* Adds a Planetary Computer mosaic to the map as a panel-owned layer: every
* item of a collection that matches the search, composited into one layer.
*
* @param app - The GeoLibre app API.
* @param input - The collection, the search selecting its items, and render options.
* @returns The added layer.
* @throws When the active renderer cannot host the panel (a mosaic has no XYZ fallback
*   worth offering: its search id expires, so it could not be restored).
*/
async function addPlanetaryComputerMosaicLayer(app, input) {
	const module = await loadPlanetaryComputerModule();
	const style = resolvePlanetaryComputerStyle(module, input.collection, input);
	const control = await ensurePlanetaryComputerControl(app);
	if (!control) throw new Error("Planetary Computer mosaics need the MapLibre renderer.");
	const collection = await getPlanetaryComputerStacClient(module).getCollection(input.collection);
	const { bbox, limit: _limit, ...searchParams } = planetaryComputerSearchParams(input);
	const layer = await control.addMosaicLayer(collection, {
		...style,
		searchParams,
		bbox
	});
	const name = input.name?.trim();
	if (name) useAppStore.getState().updateLayer(layer.id, { name });
	return {
		layerId: layer.id,
		...layer.bounds ? { bounds: layer.bounds } : {}
	};
}
/**
* Whether a Data API failure only means "no data here" rather than a real error.
*
* @param error - The rejection from a point query.
* @returns True for an out-of-footprint or nodata response.
*/
function isPlanetaryComputerNoDataError(error) {
	const message = error instanceof Error ? error.message : String(error);
	return /outside (the )?(dataset |raster |item )?bounds|out of bounds|\bno[ _-]?data\b/i.test(message);
}
/**
* Reads the pixel values of a Planetary Computer layer at a coordinate.
*
* Values are the layer's own bands: the assets it renders, or the result of
* its band-math expression. A mosaic is read from its topmost item at the point.
*
* @param layer - A Planetary Computer store layer.
* @param lngLat - `[lng, lat]` in WGS84 degrees.
* @param options - Abort signal.
* @returns The reading, or null when the point is outside the data.
*/
async function identifyPlanetaryComputerLayer(layer, lngLat, options = {}) {
	if (!isPlanetaryComputerLayer(layer)) return null;
	const tiler = getPlanetaryComputerTilerClient(await loadPlanetaryComputerModule());
	const collectionId = stringMetadata(layer, "stacCollectionId");
	if (!collectionId) return null;
	const bounds = numberArrayMetadata(layer, "bounds");
	if (bounds && !planetaryComputerBoundsContain(bounds, lngLat)) return null;
	const renderParams = tileParamsMetadata(layer, "renderParams");
	const assets = stringArrayMetadata(layer, "assets");
	const params = assets?.length ? {
		...renderParams,
		assets
	} : renderParams;
	try {
		let itemId = stringMetadata(layer, "stacItemId");
		let itemCollection = collectionId;
		if (!itemId) {
			const active = planetaryComputerControl?.getState().activeLayers.find((candidate) => candidate.id === layer.id);
			if (!active?.mosaicId) return null;
			const items = await tiler.getMosaicItemsAtPoint(active.mosaicId, lngLat[0], lngLat[1], collectionId);
			if (options.signal?.aborted || !items[0]) return null;
			itemId = items[0].id;
			itemCollection = items[0].collection || collectionId;
		}
		const data = await tiler.getItemPoint(itemCollection, itemId, lngLat[0], lngLat[1], params);
		if (options.signal?.aborted) return null;
		const values = Array.isArray(data.values) ? data.values : [];
		if (values.length === 0) return null;
		return {
			itemId,
			values: values.map((value, index) => ({
				name: data.band_names?.[index] || `b${index + 1}`,
				value: typeof value === "number" && Number.isFinite(value) ? value : null
			}))
		};
	} catch (error) {
		if (isPlanetaryComputerNoDataError(error)) return null;
		throw error;
	}
}
/**
* Whether a point lies inside a STAC bbox.
*
* A bbox that crosses the antimeridian is written with west greater than east
* (`[170, ..., -170, ...]`), and covers the longitudes on either side of 180.
*
* @param bounds - `[west, south, east, north]`.
* @param lngLat - `[lng, lat]`.
* @returns True when the point is inside the box.
*/
function planetaryComputerBoundsContain(bounds, lngLat) {
	const [west, south, east, north] = bounds;
	const [lng, lat] = lngLat;
	if (lat < south || lat > north) return false;
	return west <= east ? lng >= west && lng <= east : lng >= west || lng <= east;
}
/**
* The loaded Planetary Computer library and the shared API clients, for the
* panel's hand-off actions.
*
* @returns The module and clients.
*/
async function getPlanetaryComputerClients() {
	const module = await loadPlanetaryComputerModule();
	return {
		module,
		stac: getPlanetaryComputerStacClient(module),
		tiler: getPlanetaryComputerTilerClient(module)
	};
}
function getPlanetaryComputerStacClient(module) {
	planetaryComputerStacClient ??= new module.STACClient(PLANETARY_COMPUTER_STAC_URL, planetaryComputerStacClientOptions());
	return planetaryComputerStacClient;
}
function getPlanetaryComputerTilerClient(module) {
	planetaryComputerTilerClient ??= new module.TiTilerClient();
	return planetaryComputerTilerClient;
}
/**
* The acquisition date of a STAC item.
*
* @param item - The STAC item.
* @returns Its `datetime`, else the start or end of its range, else undefined.
*/
function planetaryComputerItemDate(item) {
	const { datetime, start_datetime: start, end_datetime: end } = item.properties ?? {};
	return datetime || start || end || void 0;
}
function planetaryComputerLayerName(activeLayer) {
	if (activeLayer.item) return activeLayer.item.id;
	const title = activeLayer.collection?.title || activeLayer.collection?.id || activeLayer.id;
	const datetime = activeLayer.searchParams?.datetime;
	if (!datetime) return title;
	const range = datetime.split("/").map((part) => part === ".." ? "" : part.slice(0, 10)).filter(Boolean).join(" to ");
	return range ? `${title} (${range})` : title;
}
function patchPlanetaryComputerControlOnRemove(control) {
	const originalOnRemove = control.onRemove.bind(control);
	control.onRemove = () => {
		originalOnRemove();
		resetPlanetaryComputerControl(control);
	};
}
function resetPlanetaryComputerControl(control) {
	if (planetaryComputerControl !== control) return;
	control?.off("layer:add", syncPlanetaryComputerLayersToStore);
	control?.off("layer:remove", syncPlanetaryComputerLayersToStore);
	control?.off("layer:update", syncPlanetaryComputerLayersToStore);
	planetaryComputerStoreUnsubscribe?.();
	planetaryComputerStoreUnsubscribe = null;
	planetaryComputerControlMounted = false;
	planetaryComputerControl = null;
}
function hidePlanetaryComputerControl(control) {
	const container = control?.getContainer();
	const panel = control?.getPanelElement();
	if (container) container.style.display = "none";
	if (panel) panel.style.display = "none";
}
function showPlanetaryComputerControl(control) {
	const container = control?.getContainer();
	const panel = control?.getPanelElement();
	if (container) container.style.display = "";
	if (panel) panel.style.display = "";
}
var InvalidPlanetaryComputerLayerMetadataError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidPlanetaryComputerLayerMetadataError";
	}
};
function isInvalidPlanetaryComputerLayerMetadataError(error) {
	return error instanceof InvalidPlanetaryComputerLayerMetadataError;
}
function stringMetadata(layer, key) {
	const value = layer.metadata[key];
	return typeof value === "string" && value ? value : void 0;
}
function stringArrayMetadata(layer, key) {
	const value = layer.metadata[key];
	return Array.isArray(value) && value.every((entry) => typeof entry === "string") ? value : void 0;
}
function numberArrayMetadata(layer, key) {
	const value = layer.metadata[key];
	return boundsTuple(value);
}
function tileParamsMetadata(layer, key) {
	const value = layer.metadata[key];
	return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function searchParamsMetadata(layer, key) {
	const value = layer.metadata[key];
	if (!value || typeof value !== "object" || Array.isArray(value)) return {};
	const candidate = value;
	const params = {};
	if (typeof candidate.datetime === "string") params.datetime = candidate.datetime;
	if (candidate.query && typeof candidate.query === "object") params.query = candidate.query;
	if (Array.isArray(candidate.sortby)) params.sortby = candidate.sortby;
	if (candidate.filter && typeof candidate.filter === "object") params.filter = candidate.filter;
	return params;
}
function boundsTuple(value) {
	if (!Array.isArray(value) || !value.every((entry) => typeof entry === "number")) return void 0;
	if (value.length === 4) return value;
	if (value.length === 6) return [
		value[0],
		value[1],
		value[3],
		value[4]
	];
}
// ../../packages/plugins/src/plugins/tiles-altitude-offset.ts
/** Translate along the WGS84 surface normal, in Earth-centered coordinates. */
function applyTilesetAltitudeOffset(tileset, offset) {
	const center = tileset.cartographicCenter;
	if (!center || !tileset.modelMatrix || !Number.isFinite(offset) || offset === 0) return;
	const longitude = center[0] * Math.PI / 180;
	const latitude = center[1] * Math.PI / 180;
	tileset.modelMatrix = tileset.modelMatrix.clone().translate([
		offset * Math.cos(latitude) * Math.cos(longitude),
		offset * Math.cos(latitude) * Math.sin(longitude),
		offset * Math.sin(latitude)
	]);
	tileset.selectTiles?.();
}
// ../../packages/plugins/src/plugins/i3s-building.ts
function toNode(raw) {
	if (typeof raw.id !== "number" || !Number.isFinite(raw.id)) return null;
	const name = typeof raw.alias === "string" && raw.alias ? raw.alias : typeof raw.name === "string" ? raw.name : String(raw.id);
	const children = Array.isArray(raw.sublayers) ? raw.sublayers.map(toNode).filter((node) => !!node) : void 0;
	return {
		id: raw.id,
		name,
		...typeof raw.modelName === "string" ? { modelName: raw.modelName } : {},
		layerType: typeof raw.layerType === "string" ? raw.layerType : "group",
		visible: true,
		...children && children.length > 0 ? { children } : {}
	};
}
/**
* Whether a layer document is a Building Scene Layer.
*
* @param doc - The service's `.../layers/<n>` JSON.
* @returns True for `layerType: "Building"`.
*/
function isI3sBuildingLayerDocument(doc) {
	return doc?.layerType === "Building";
}
/**
* Read a Building Scene Layer's sublayer tree into the state GeoLibre keeps.
*
* @param doc - The service's `.../layers/<n>` JSON for a Building layer.
* @returns The state: Overview mode when the service has an Overview sublayer.
*/
function parseI3sBuildingLayer(doc) {
	const top = Array.isArray(doc?.sublayers) ? doc.sublayers.map(toNode).filter(Boolean) : [];
	const overview = top.find((node) => node.modelName === "Overview" && node.layerType !== "group");
	const disciplines = top.find((node) => node.modelName === "FullModel" && node.layerType === "group")?.children ?? top.filter((node) => node !== overview);
	return {
		mode: overview ? "overview" : "full",
		overviewId: overview?.id ?? null,
		disciplines
	};
}
/**
* Set one node's visibility (a discipline, or a category inside one).
*
* @param state - The current state.
* @param id - The node to change.
* @param visible - Its new visibility.
* @returns A new state; the input is not changed.
*/
function setI3sBuildingNodeVisible(state, id, visible) {
	const update = (nodes) => nodes.map((node) => node.id === id ? {
		...node,
		visible
	} : node.children ? {
		...node,
		children: update(node.children)
	} : node);
	return {
		...state,
		disciplines: update(state.disciplines)
	};
}
/**
* A Scene Layer document path: `.../SceneServer/layers/<n>`, optionally a
* Building Scene Layer's `/sublayers/<m>`, with nothing after it.
*/
var I3S_LAYER_DOCUMENT_RE = /\/SceneServer\/layers\/\d+(?:\/sublayers\/\d+)?\/?$/i;
/**
* Split a URL at its first `?`: the path, and the query (without the `?`) or
* `""`. A `#fragment` is dropped first; it never reaches the server.
*/
function splitQuery(url) {
	const hash = url.indexOf("#");
	if (hash >= 0) url = url.slice(0, hash);
	const at = url.indexOf("?");
	return at < 0 ? [url, ""] : [url.slice(0, at), url.slice(at + 1)];
}
/**
* A sublayer's URL under a Building Scene Layer URL, keeping any query
* (a token) on the end.
*
* @param layerUrl - `.../SceneServer/layers/<n>`, optionally with a query.
* @param sublayerId - The sublayer id.
* @returns `.../SceneServer/layers/<n>/sublayers/<id>`.
*/
function i3sBuildingSublayerUrl(layerUrl, sublayerId) {
	const [path, query] = splitQuery(layerUrl);
	return `${path.replace(/\/+$/, "")}/sublayers/${sublayerId}${query ? `?${query}` : ""}`;
}
/**
* The layer document URL to probe for an I3S layer URL: the URL itself when it
* names `.../layers/<n>`, else `.../SceneServer/layers/0` for a service root.
*
* @param url - The URL the user added.
* @returns The layer document URL, or `null` when it cannot be derived.
*/
function i3sLayerDocumentUrl(url) {
	const [path, query] = splitQuery(url.trim());
	const suffix = query ? `?${query}` : "";
	if (I3S_LAYER_DOCUMENT_RE.test(path)) return path.replace(/\/+$/, "") + suffix;
	if (/\/SceneServer\/?$/i.test(path)) return path.replace(/\/+$/, "") + "/layers/0" + suffix;
	return null;
}
// ../../packages/plugins/src/plugins/i3s-mesh-layer.ts
/**
* The mesh layer GeoLibre draws ArcGIS I3S scene content with.
*
* deck.gl's `Tile3DLayer` draws I3S nodes with its own `MeshLayer`, which
* shades them through luma.gl's PBR material module. Since GeoLibre moved to
* deck.gl 9.4 / luma.gl 9.4 (#2395, 2026-09-15) that path draws nothing on
* WebGL: the tiles load, are selected and their draw calls run, but every
* fragment comes out transparent, so no I3S scene layer has rendered since
* (GeoLibre 3.0.0 on deck.gl 9.3.11 drew them; 3.1.0 on 9.4.0 did not).
*
* This layer is deck.gl 9.3's I3S `MeshLayer` without the PBR module: it
* shades with the `SimpleMeshLayer` lighting (phong) and samples the node's
* base-colour texture, which luma.gl's `parsePBRMaterial` still decodes
* (including compressed textures). I3S UV regions (texture atlases) are
* applied in the vertex shader as before. `Tile3DLayer` uses it through
* `_subLayerProps.mesh.type`.
*
* The class is built at runtime from the lazily loaded deck.gl and luma.gl
* modules, so none of them enter the boot bundle.
*
* Adapted from @deck.gl/geo-layers 9.3.11 `mesh-layer`, under its MIT licence:
*
* Copyright Vis.gl contributors.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
/** Uniform block: whether picking uses per-vertex feature colours. */
var MESH_UNIFORM_BLOCK = `\
layout(std140) uniform meshUniforms {
  bool pickFeatureIds;
} mesh;
`;
/**
* Vertex shader: deck.gl 9.3's I3S mesh shader with UV regions, picking by
* per-vertex feature colour or (deck.gl 9.4) by instance id.
*/
var VERTEX_SHADER = `#version 300 es
#define SHADER_NAME i3s-mesh-layer-vs
in vec3 positions;
in vec3 normals;
in vec3 colors;
in vec2 texCoords;
in vec4 uvRegions;
in vec3 featureIdsPickingColors;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
out vec2 vTexCoord;
out vec3 cameraPosition;
out vec3 normals_commonspace;
out vec4 position_commonspace;
out vec4 vColor;
vec2 applyUVRegion(vec2 uv) {
#ifdef HAS_UV_REGIONS
  return fract(uv) * (uvRegions.zw - uvRegions.xy) + uvRegions.xy;
#else
  return uv;
#endif
}
void main(void) {
  vec2 uv = applyUVRegion(texCoords);
  geometry.uv = uv;
  if (mesh.pickFeatureIds) {
    geometry.pickingColor = featureIdsPickingColors;
  } else {
    geometry.pickingColor = picking_getPickingColorFromInstanceID();
  }
  mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
  vTexCoord = uv;
  cameraPosition = project.cameraPosition;
  vColor = vec4(colors * instanceColors.rgb, instanceColors.a);
  vec3 projectedPosition = project_position(positions);
  position_commonspace = vec4(projectedPosition, 1.0);
  gl_Position = project_common_position_to_clipspace(position_commonspace);
  geometry.position = position_commonspace;
  normals_commonspace = project_normal(instanceModelMatrix * normals);
  geometry.normal = normals_commonspace;
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`;
/** Fragment shader: the mesh layer's non-PBR branch (texture or vertex colour, lit). */
var FRAGMENT_SHADER = `#version 300 es
#define SHADER_NAME i3s-mesh-layer-fs
precision highp float;
uniform sampler2D sampler;
in vec2 vTexCoord;
in vec3 cameraPosition;
in vec3 normals_commonspace;
in vec4 position_commonspace;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
  geometry.uv = vTexCoord;
  vec3 normal;
  if (simpleMesh.flatShading) {
    normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
  } else {
    normal = normals_commonspace;
  }
  vec4 color = simpleMesh.hasTexture ? texture(sampler, vTexCoord) : vColor;
  vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
  fragColor = vec4(lightColor, color.a * layer.opacity);
  DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;
/**
* Give a mesh without vertex colours a white colour attribute, as deck.gl
* does. It changes the mesh's own attribute object, in place.
*/
function ensureVertexColors(attributes) {
	const positions = attributes.positions ?? attributes.POSITION;
	if (!positions || attributes.COLOR_0 || attributes.colors) return;
	const vertexCount = positions.value.length / positions.size;
	attributes.colors = {
		size: 4,
		value: new Uint8Array(vertexCount * 4).fill(255),
		normalized: true
	};
}
/**
* Build the I3S mesh layer class on top of the given `SimpleMeshLayer`.
*
* @param SimpleMeshLayer - `@deck.gl/mesh-layers`' `SimpleMeshLayer`.
* @param luma - luma.gl's `Model` and `parsePBRMaterial`.
* @returns A layer class for `Tile3DLayer`'s `_subLayerProps.mesh.type`.
*/
function createI3sMeshLayerClass(SimpleMeshLayer, luma) {
	const meshUniforms = {
		name: "mesh",
		vs: MESH_UNIFORM_BLOCK,
		fs: MESH_UNIFORM_BLOCK,
		uniformTypes: { pickFeatureIds: "f32" }
	};
	const Base = SimpleMeshLayer;
	class I3sMeshLayer extends Base {
		getShaders() {
			const shaders = super.getShaders();
			return {
				...shaders,
				vs: VERTEX_SHADER,
				fs: FRAGMENT_SHADER,
				modules: [...shaders.modules, meshUniforms]
			};
		}
		initializeState() {
			super.initializeState();
			if (this.props.featureIds) this.getAttributeManager().add({ featureIdsPickingColors: {
				type: "uint8",
				size: 3,
				noAlloc: true,
				update: this.calculateFeatureIdsPickingColors
			} });
		}
		updateState(params) {
			super.updateState(params);
			const { props, oldProps } = params;
			if (props.pbrMaterial !== oldProps.pbrMaterial || props.mesh !== oldProps.mesh) this.updateTexture(props.pbrMaterial);
		}
		draw(opts) {
			const { model } = this.state;
			if (!model) return;
			model.shaderInputs.setProps({ mesh: { pickFeatureIds: Boolean(this.props.featureIds) } });
			super.draw(opts);
		}
		getModel(mesh) {
			const shaders = this.getShaders();
			ensureVertexColors(mesh.attributes);
			return new luma.Model(this.context.device, {
				...shaders,
				id: this.props.id,
				geometry: mesh,
				bufferLayout: this.getAttributeManager().getBufferLayouts(),
				defines: {
					...shaders.defines,
					...mesh.attributes.uvRegions ? { HAS_UV_REGIONS: 1 } : {}
				},
				isInstanced: true
			});
		}
		/** Bind the node's base-colour texture (decoded by luma.gl) as the mesh texture. */
		updateTexture(material) {
			const { model } = this.state;
			if (!model) return;
			this.releaseMaterialTextures();
			const parsed = material ? luma.parsePBRMaterial(this.context.device, material, {
				NORMAL: this.props.mesh.attributes.normals,
				TEXCOORD_0: this.props.mesh.attributes.texCoords
			}, {
				pbrDebug: false,
				lights: false,
				useTangents: false
			}) : null;
			this.setState({ parsedMaterial: parsed });
			const baseColor = parsed?.bindings.pbr_baseColorSampler;
			model.shaderInputs.setProps({ simpleMesh: {
				sampler: baseColor || this.state.emptyTexture,
				hasTexture: Boolean(baseColor)
			} });
		}
		releaseMaterialTextures() {
			this.state.parsedMaterial?.generatedTextures.forEach((texture) => texture.destroy());
			this.setState({ parsedMaterial: null });
		}
		calculateFeatureIdsPickingColors(attribute) {
			const featureIds = this.props.featureIds;
			const value = new Uint8ClampedArray(featureIds.length * attribute.size);
			const pickingColor = [];
			for (let index = 0; index < featureIds.length; index++) {
				this.encodePickingColor(featureIds[index], pickingColor);
				value[index * 3] = pickingColor[0];
				value[index * 3 + 1] = pickingColor[1];
				value[index * 3 + 2] = pickingColor[2];
			}
			attribute.value = value;
		}
		finalizeState(context) {
			super.finalizeState(context);
			this.releaseMaterialTextures();
		}
	}
	I3sMeshLayer.layerName = "I3sMeshLayer";
	I3sMeshLayer.defaultProps = {
		pbrMaterial: {
			type: "object",
			value: null
		},
		featureIds: {
			type: "array",
			value: null,
			optional: true
		}
	};
	return I3sMeshLayer;
}
// ../../packages/plugins/src/plugins/arcgis-i3s-tiles.ts
/** Source-kind tag stored on an ArcGIS I3S layer's source + metadata. */
var ARCGIS_I3S_SOURCE_KIND = "arcgis-i3s";
var ARCGIS_I3S_LAYER_ID_PREFIX = "arcgis-i3s-tiles";
/**
* Tile detail/memory caps shared by the deck.gl 3D-tiles overlays (this I3S
* overlay, the Google Photorealistic one, and the Mapbox one). Kept in one
* place so the overlays don't drift apart.
*
* `memoryAdjustedScreenSpaceError` stays off (issue #2560). @loaders.gl raises
* the error target by 2% for every tile that loads while GPU memory is over
* the cap, and only lowers it again as later tiles load, so a burst of loads
* while zooming in dropped Google tiles to a coarser level than the zoomed-out
* view and left them blurry until the next burst. The cache cap below bounds
* memory instead; see `applyThreeDTilesTilesetMemoryLimit`.
*/
var THREE_D_TILES_TILESET_LOAD_LIMITS = {
	maximumScreenSpaceError: 20,
	maximumMemoryUsage: 512,
	memoryAdjustedScreenSpaceError: false
};
/**
* Make a deck.gl overlay's tile cache honour `maximumMemoryUsage`.
*
* @loaders.gl's Tileset3D reads `options.maximumMemoryUsage` for the
* screen-space-error adjustment, but its tile cache trims against the
* `maximumMemoryUsage` field, which it never copies from the options and so
* stays at its 32 MB default. With Google Photorealistic tiles that evicts
* every tile the previous view drew as soon as the camera moves, so zooming in
* (or back out) re-downloads the scene and falls back to coarse ancestors in
* the meantime (issue #2560). Call this from each overlay's `onTilesetLoad`.
*
* @param tileset The tileset object passed to `onTilesetLoad`.
*/
function applyThreeDTilesTilesetMemoryLimit(tileset) {
	if (tileset && typeof tileset === "object" && typeof tileset.maximumMemoryUsage === "number") tileset.maximumMemoryUsage = THREE_D_TILES_TILESET_LOAD_LIMITS.maximumMemoryUsage;
}
/**
* loaders.gl load options shared by the deck.gl 3D-tiles overlays (this I3S
* overlay and the Google Photorealistic one).
*
* `core.worker: false` parses tile content on the main thread instead of a
* loaders.gl worker. By default @loaders.gl fetches its worker scripts (the
* i3s-content worker here, draco/basis-texture workers for glTF content) from
* the unpkg CDN at runtime, which the Tauri desktop CSP (`worker-src 'self'
* blob:`, no unpkg in `script-src`) blocks — so tiles never render in the
* packaged app, and it would fail offline too. Disabling workers removes that
* external CDN dependency entirely; parsing runs in-process on every platform.
* The same restrictive `worker-src` applies to the nginx-served web build, so
* this is applied unconditionally rather than gated to Tauri. `worker` must be
* nested under `core` — that is the documented loaders.gl option shape; a
* top-level `worker` only works via a deprecated backwards-compat alias.
*/
var THREE_D_TILES_DECK_LOAD_OPTIONS = {
	tileset: THREE_D_TILES_TILESET_LOAD_LIMITS,
	core: { worker: false }
};
/**
* I3S loader options for the deck.gl overlay.
*
* By default loaders.gl turns every I3S vertex into an absolute Earth-centred
* position (`meter-offsets`), millions of metres from the origin, and the GPU
* stores those as 32-bit floats, which hold about half a metre at that size.
* Small geometry (window mullions, glass, railings) then collapsed into jagged
* spikes. `lnglat-offsets` keeps the vertices as the small offsets from the
* node's centre the service sends, which 32-bit floats hold to well under a
* millimetre; deck.gl's own I3S example loads scene layers this way.
*/
var I3S_LOADER_OPTIONS = { coordinateSystem: "lnglat-offsets" };
/**
* Ask an ArcGIS Server for a Scene Layer document as JSON.
*
* A server answers `.../SceneServer/layers/<n>` with its HTML REST page unless
* the request says `f=json` (ArcGIS Online's `tiles.arcgis.com` hosts return
* JSON either way, which is why the bundled sample loads). The query cannot go
* on the URL the loader is given, because loaders.gl derives the node-page
* URLs from it, so it is added here, per request, to the layer document only.
*
* @param url - A URL the I3S loader is about to fetch.
* @returns The URL with `f=json` for a layer document, otherwise unchanged.
*/
function i3sDocumentRequestUrl(url) {
	let parsed;
	try {
		parsed = new URL(url);
	} catch {
		return url;
	}
	if (!I3S_LAYER_DOCUMENT_RE.test(parsed.pathname) || parsed.searchParams.has("f")) return url;
	parsed.searchParams.set("f", "json");
	return parsed.toString();
}
/** `fetch` for the I3S loader: layer documents as JSON, everything else as asked. */
function fetchI3sResource(input, init) {
	if (typeof input === "string" || input instanceof URL) return fetch(i3sDocumentRequestUrl(input instanceof URL ? input.href : input), init);
	return fetch(new Request(i3sDocumentRequestUrl(input.url), input), init);
}
var I3S_MAX_MOUNT_RETRIES = 60;
var I3S_SCENE_SERVER_RE = /\/SceneServer(\/|$|\?|#)/i;
var i3sOverlay = null;
var i3sOverlayMounted = false;
var i3sDeckGL = null;
/** The I3S mesh layer, built on first use (see i3s-mesh-layer.ts). */
var i3sMeshLayerClass = null;
/**
* The one attempt to build it. Kept as a promise so a failed load (which falls
* back to deck.gl's own mesh layer) is decided, and warned about, once.
*/
var i3sMeshLayerLoad = null;
/**
* Build the I3S mesh layer class from the loaded deck.gl and the luma.gl
* modules it shares, so the overlay draws I3S content on deck.gl 9.4.
*/
async function loadI3sMeshLayerClass(deckGL) {
	const [{ Model }, { parsePBRMaterial }] = await Promise.all([__vitePreload(() => import("./dist-5qB-mXSs.js"), __vite__mapDeps([2,3,4,5]), import.meta.url), __vitePreload(() => import("./dist-DsaV6xvE.js"), __vite__mapDeps([6,7,3,4,5,8]), import.meta.url)]);
	return createI3sMeshLayerClass(deckGL.meshLayers.SimpleMeshLayer, {
		Model,
		parsePBRMaterial
	});
}
var i3sApp = null;
var i3sBoundMap;
var i3sStoreUnsubscribe = null;
var i3sEnsureInFlight = null;
var lastI3sLayerSignature = null;
var lastI3sStructureSignature = null;
var i3sOffsetRenderTimer = null;
var pendingI3sSignature = null;
/**
* An abort signal that fires after `ms`. `AbortSignal.timeout` is missing in
* some older WebViews, so it is built from an `AbortController` there.
*/
function timeoutSignal(ms) {
	if (typeof AbortSignal.timeout === "function") return AbortSignal.timeout(ms);
	const controller = new AbortController();
	setTimeout(() => controller.abort(), ms);
	return controller.signal;
}
/** How long a layer-document probe may take before the layer draws without it. */
var I3S_PROBE_TIMEOUT_MS = 15e3;
/** How long the offsets must stay unchanged before the tileset is reloaded. */
var I3S_OFFSET_SETTLE_MS = 400;
var i3sTerrainListenerMap = null;
var i3sLastTerrain = false;
var i3sMountRetryScheduled = false;
var i3sMountRetries = 0;
var i3sMountGaveUp = false;
/** Ref-counted mercator lock key for this overlay (see map-projection-utils). */
var I3S_PROJECTION_LOCK_KEY = ARCGIS_I3S_SOURCE_KIND;
var i3sLoaderPromise = null;
var i3sLoader = null;
/**
* Whether a URL points at an ArcGIS I3S Scene Layer service.
*
* @param url The URL entered in the 3D Tiles panel.
* @returns True for a `.../SceneServer[/layers/N]` endpoint.
*/
function isArcgisI3sSceneLayerUrl(url) {
	return I3S_SCENE_SERVER_RE.test(url.trim());
}
/**
* A friendly default layer name for an I3S URL: the service name (the path
* segment right before `/SceneServer`), e.g. `.../SF_Bldgs/SceneServer/layers/0`
* → `SF_Bldgs`. Falls back to `null` so callers can use their generic naming.
*
* @param url The Scene Layer URL.
* @returns The service name, or null if it can't be extracted.
*/
function arcgisI3sSceneLayerName(url) {
	const match = url.trim().match(/\/([^/?#]+)\/SceneServer(?:\/|$|\?|#)/i);
	if (!match) return null;
	try {
		return decodeURIComponent(match[1]);
	} catch {
		return match[1];
	}
}
/** Whether a store layer is an ArcGIS I3S tileset layer. */
function isArcgisI3sTilesLayer(layer) {
	return layer.type === "3d-tiles" && layer.metadata.sourceKind === "arcgis-i3s";
}
/**
* The store record for an ArcGIS I3S scene layer.
*
* Exported so the renderers that draw I3S without the deck.gl overlay (the
* Cesium globe loads a scene service through `I3SDataProvider`) record the same
* shape, and above all the same `sourceKind`: that is the only thing both
* `isArcgisI3sTilesLayer` here and `cesium-layer-sync`'s `isI3sLayer` key off,
* so a scene service filed under any other kind is loaded as a plain tileset
* and never renders (issue #2505).
*
* @param options Scene Layer URL, display name, opacity, visibility.
* @returns The store layer, with a fresh id.
*/
function createArcgisI3sStoreLayer(options) {
	const id = `${ARCGIS_I3S_LAYER_ID_PREFIX}-${crypto.randomUUID()}`;
	const deckLayerId = `${id}-deck`;
	const url = options.url.trim();
	return {
		id,
		name: options.name,
		type: "3d-tiles",
		source: {
			sourceId: id,
			type: ARCGIS_I3S_SOURCE_KIND,
			url
		},
		visible: options.visible,
		opacity: options.opacity,
		style: { ...DEFAULT_LAYER_STYLE },
		metadata: {
			customLayerType: ARCGIS_I3S_SOURCE_KIND,
			externalDeckLayer: true,
			externalNativeLayer: true,
			identifiable: false,
			nativeLayerIds: [deckLayerId],
			sourceId: id,
			sourceKind: ARCGIS_I3S_SOURCE_KIND
		},
		sourcePath: url
	};
}
/**
* Add an ArcGIS I3S scene layer to the store and ensure the deck.gl overlay is
* mounted. Managed thereafter from the main Layers panel.
*
* @param app The GeoLibre app API.
* @param options Scene Layer URL, display name, opacity, visibility, flyTo.
* @returns The new store layer id.
*/
function addArcgisI3sTilesLayer(app, options) {
	const layer = createArcgisI3sStoreLayer(options);
	const id = layer.id;
	useAppStore.getState().addLayer(layer);
	if (options.flyTo) i3sFlyToRequested.add(id);
	ensureArcgisI3sTilesOverlay(app);
	return id;
}
var i3sFlyToRequested = /* @__PURE__ */ new Set();
/**
* Re-mount the overlay for any ArcGIS I3S layers present in the store, e.g.
* after a project is reopened.
*/
function restoreArcgisI3sTilesLayers(app) {
	i3sProbesFailed.clear();
	if (useAppStore.getState().layers.some(isArcgisI3sTilesLayer)) ensureArcgisI3sTilesOverlay(app);
}
function ensureArcgisI3sTilesOverlay(app) {
	if (i3sEnsureInFlight) return i3sEnsureInFlight;
	i3sEnsureInFlight = runEnsureArcgisI3sTilesOverlay(app).catch((error) => {
		console.error("[GeoLibre] Failed to initialize the ArcGIS I3S overlay", error);
	}).finally(() => {
		i3sEnsureInFlight = null;
	});
	return i3sEnsureInFlight;
}
/**
* Load deck.gl, the I3S loader, and the replacement mesh layer, then bind the
* MapboxOverlay and store subscription to the active map instance.
*
* @param app - The GeoLibre app API.
*/
async function runEnsureArcgisI3sTilesOverlay(app) {
	i3sApp = app;
	if (!app.getDeckGL) return;
	i3sDeckGL ??= await app.getDeckGL();
	i3sLoader ??= await loadI3sLoader();
	i3sMeshLayerLoad ??= loadI3sMeshLayerClass(i3sDeckGL).catch((error) => {
		console.warn("[GeoLibre] Using deck.gl's default I3S mesh layer", error);
		return null;
	});
	i3sMeshLayerClass = await i3sMeshLayerLoad;
	const map = app.getMap?.() ?? app.getMapboxMap?.() ?? null;
	if (i3sOverlay && i3sBoundMap === map) {
		renderArcgisI3sTilesLayers();
		return;
	}
	if (i3sOverlay && i3sOverlayMounted) try {
		app.removeMapControl(i3sOverlay);
	} catch (error) {
		console.warn("[GeoLibre] Failed to detach the ArcGIS I3S overlay from the previous map", error);
	}
	i3sBoundMap = map;
	bindI3sTerrainListener(map);
	i3sOverlay = new i3sDeckGL.mapbox.MapboxOverlay({
		interleaved: false,
		layers: []
	});
	i3sOverlayMounted = false;
	lastI3sLayerSignature = null;
	i3sMountRetries = 0;
	i3sMountGaveUp = false;
	i3sStoreUnsubscribe ??= useAppStore.subscribe((state, previous) => {
		if (state.layers !== previous.layers) {
			const currentIds = new Set(state.layers.filter(isArcgisI3sTilesLayer).map(({ id }) => id));
			for (const layer of previous.layers) if (isArcgisI3sTilesLayer(layer) && !currentIds.has(layer.id)) {
				i3sFlyToRequested.delete(layer.id);
				i3sProbesFailed.delete(i3sProbeKey(layer));
			}
			renderArcgisI3sTilesLayers();
		}
	});
	renderArcgisI3sTilesLayers();
}
/** Lazily import the I3SLoader from @loaders.gl/i3s. */
function loadI3sLoader() {
	i3sLoaderPromise ??= __vitePreload(() => import("./dist-CXitQ3he.js").then((m) => m.I3SLoader), __vite__mapDeps([9,5,10,11]), import.meta.url).catch((error) => {
		i3sLoaderPromise = null;
		throw error;
	});
	return i3sLoaderPromise;
}
/**
* Synchronize the mounted deck.gl I3S overlay with the store's current I3S
* layers, probing any unprobed layers and tearing the overlay down when the
* last I3S layer is removed.
*/
function renderArcgisI3sTilesLayers() {
	if (!i3sOverlay || !i3sDeckGL || !i3sApp) return;
	const layers = useAppStore.getState().layers.filter(isArcgisI3sTilesLayer);
	if (layers.length === 0) {
		if (i3sOverlayMounted) {
			try {
				i3sApp.removeMapControl(i3sOverlay);
			} catch (error) {
				console.warn("[GeoLibre] Failed to remove the empty ArcGIS I3S overlay", error);
			}
			i3sOverlayMounted = false;
		}
		lastI3sLayerSignature = null;
		i3sMountRetries = 0;
		i3sMountGaveUp = false;
		restoreI3sPreviousProjection();
		return;
	}
	forceI3sMercatorProjection(i3sApp);
	if (!i3sOverlayMounted) {
		if (!i3sApp.addMapControl(i3sOverlay, "top-left")) {
			scheduleI3sMountRetry();
			return;
		}
		i3sOverlayMounted = true;
		i3sMountRetries = 0;
		i3sMountGaveUp = false;
		i3sBoundMap = i3sApp.getMap?.() ?? i3sApp.getMapboxMap?.() ?? null;
		bindI3sTerrainListener(i3sBoundMap);
		lastI3sLayerSignature = null;
		lastI3sStructureSignature = null;
	}
	for (const layer of layers) if (!i3sProbeIsCurrent(layer) && !i3sProbesFailed.has(i3sProbeKey(layer))) probeI3sLayerKind(layer);
	const signature = i3sLayerSignature(layers);
	if (signature === lastI3sLayerSignature) {
		cancelI3sOffsetRender();
		return;
	}
	const structure = i3sLayerSignature(layers, false);
	if (lastI3sLayerSignature !== null && structure === lastI3sStructureSignature) {
		if (signature !== pendingI3sSignature) {
			pendingI3sSignature = signature;
			scheduleI3sOffsetRender();
		}
		return;
	}
	cancelI3sOffsetRender();
	lastI3sLayerSignature = signature;
	lastI3sStructureSignature = structure;
	const deckLayers = layers.filter((layer) => layer.visible).flatMap((layer) => buildArcgisI3sTilesDeckLayers(layer)).reverse();
	i3sOverlay.setProps({ layers: deckLayers });
}
function scheduleI3sMountRetry() {
	if (i3sMountRetryScheduled || i3sMountGaveUp || typeof requestAnimationFrame === "undefined") return;
	if (i3sMountRetries >= I3S_MAX_MOUNT_RETRIES) {
		i3sMountGaveUp = true;
		console.warn("[GeoLibre] Gave up mounting the ArcGIS I3S overlay after repeated addMapControl failures.");
		return;
	}
	i3sMountRetries += 1;
	i3sMountRetryScheduled = true;
	requestAnimationFrame(() => {
		i3sMountRetryScheduled = false;
		renderArcgisI3sTilesLayers();
	});
}
/** Rebuild the I3S deck layers once the offsets have stopped changing. */
function scheduleI3sOffsetRender() {
	if (i3sOffsetRenderTimer !== null) clearTimeout(i3sOffsetRenderTimer);
	i3sOffsetRenderTimer = setTimeout(() => {
		i3sOffsetRenderTimer = null;
		pendingI3sSignature = null;
		lastI3sStructureSignature = null;
		renderArcgisI3sTilesLayers();
	}, I3S_OFFSET_SETTLE_MS);
}
/** Drop a pending offset rebuild. */
function cancelI3sOffsetRender() {
	if (i3sOffsetRenderTimer !== null) clearTimeout(i3sOffsetRenderTimer);
	i3sOffsetRenderTimer = null;
	pendingI3sSignature = null;
}
/**
* What the I3S deck layers are built from.
*
* @param layers - The store's I3S layers.
* @param withOffsets - Include each layer's vertical offset.
* @returns A string that changes whenever the deck layers must be rebuilt.
*/
function i3sLayerSignature(layers, withOffsets = true) {
	return layers.map((layer) => {
		const building = layer.metadata.i3sBuilding;
		const sublayers = building ? visibleI3sBuildingSublayers(building).join(",") : "";
		return `${layer.id}:${layer.visible ? 1 : 0}:${layer.opacity}:${typeof layer.source.url === "string" ? layer.source.url : ""}:${String(i3sLayerKind(layer) ?? "")}:${sublayers}${withOffsets ? `:${i3sVerticalOffset(layer, i3sMapHasTerrain())}` : ""}`;
	}).join("|");
}
function buildArcgisI3sTilesDeckLayer(layer, deps = {
	deckGL: i3sDeckGL,
	loader: i3sLoader,
	meshLayer: i3sMeshLayerClass
}, sublayer) {
	const { deckGL, loader, meshLayer } = deps;
	if (!deckGL || !loader) return null;
	const url = sublayer?.url ?? (typeof layer.source.url === "string" ? layer.source.url : "");
	if (!url) return null;
	const offset = i3sVerticalOffset(layer, deps.terrain ?? i3sMapHasTerrain());
	const baseId = sublayer ? `${layer.id}-deck-${sublayer.id}` : `${layer.id}-deck`;
	const Tile3DLayer = deckGL.geoLayers.Tile3DLayer;
	return new Tile3DLayer({
		id: offset === 0 ? baseId : `${baseId}@${offset}`,
		data: url,
		loader,
		loadOptions: {
			...THREE_D_TILES_DECK_LOAD_OPTIONS,
			core: {
				...THREE_D_TILES_DECK_LOAD_OPTIONS.core,
				fetch: fetchI3sResource
			},
			i3s: I3S_LOADER_OPTIONS
		},
		opacity: layer.opacity,
		pickable: false,
		operation: "draw",
		...meshLayer ? { _subLayerProps: { mesh: { type: meshLayer } } } : {},
		onTilesetLoad: (tileset) => {
			applyThreeDTilesTilesetMemoryLimit(tileset);
			applyTilesetAltitudeOffset(tileset, offset);
			warnOnUnsupportedI3sSceneLayerType(url, tileset);
			persistI3sTilesetCenter(layer.id, tileset);
			flyToI3sTileset(layer.id, tileset);
		},
		onTileLoad: (tile) => normalizeI3sTileCoordinateSystem(tile),
		onTileError: (_tile, message, tileUrl) => console.error(`[GeoLibre] ArcGIS I3S tile failed to load: ${message} (${tileUrl})`)
	});
}
/**
* The deck.gl layers for one I3S store layer: a single Tile3DLayer for a mesh
* scene layer, or one per visible sublayer of a Building Scene Layer.
*
* @param layer - The store layer.
* @param deps - Optional injectable deck.gl and loader dependencies for testing.
* @returns Its deck.gl layers (none while its type is still being probed).
*/
function buildArcgisI3sTilesDeckLayers(layer, deps) {
	const kind = i3sLayerKind(layer);
	if (kind === "building") {
		const state = layer.metadata.i3sBuilding;
		const base = layer.metadata.i3sBuildingUrl;
		if (!state || typeof base !== "string") return [];
		return visibleI3sBuildingSublayers(state).map((id) => buildArcgisI3sTilesDeckLayer(layer, deps, {
			url: i3sBuildingSublayerUrl(base, id),
			id
		})).filter((deckLayer) => deckLayer !== null);
	}
	if (kind !== "mesh") return [];
	const single = buildArcgisI3sTilesDeckLayer(layer, deps);
	return single ? [single] : [];
}
/** I3S layers whose type probe is in flight, so each is probed once. */
var i3sProbesInFlight = /* @__PURE__ */ new Set();
/**
* I3S layers whose layer document could not be read this session. They are
* drawn as mesh layers, so the loader reports its own error, but nothing is
* written to the layer: a transient failure must not turn a Building Scene
* Layer into a mesh layer in the saved project, and the next session (or a
* reopened project) probes again.
*/
var i3sProbesFailed = /* @__PURE__ */ new Set();
/** Key for a layer's probe state, including its URL so a URL edit probes again. */
function i3sProbeKey(layer) {
	const url = typeof layer.source.url === "string" ? layer.source.url : "";
	return `${layer.id}:${url}`;
}
/** The layer's source URL, or `""` when it has none. */
function i3sLayerUrl(layer) {
	return typeof layer.source.url === "string" ? layer.source.url : "";
}
/**
* Whether the layer's recorded I3S kind was probed from its current URL. A
* layer saved before `i3sProbedUrl` was recorded is probed again once.
*/
function i3sProbeIsCurrent(layer) {
	return layer.metadata.i3sKind !== void 0 && layer.metadata.i3sProbedUrl === i3sLayerUrl(layer) && layer.metadata.i3sBaseElevation !== void 0;
}
/**
* Whether the recorded kind was probed from a different URL than the current
* one, so its kind and Building sublayer tree must not be drawn.
*/
function i3sProbeIsStale(layer) {
	const probedUrl = layer.metadata.i3sProbedUrl;
	return typeof probedUrl === "string" && probedUrl !== i3sLayerUrl(layer);
}
/** A layer's I3S kind: the probed one, `mesh` after a failed probe, else unknown. */
function i3sLayerKind(layer) {
	const failed = i3sProbesFailed.has(i3sProbeKey(layer));
	if (i3sProbeIsStale(layer)) return failed ? "mesh" : void 0;
	if (!failed && layer.metadata.i3sBaseElevation === void 0) return void 0;
	return layer.metadata.i3sKind ?? (failed ? "mesh" : void 0);
}
/**
* Find out whether an I3S layer is a Building Scene Layer, from its layer
* document, and record it on the layer (`metadata.i3sKind`, plus the sublayer
* tree for a Building layer). A layer is drawn only once this is known, so a
* Building layer's root, which the I3S loader cannot draw, is never loaded.
* A URL that names no layer document is recorded as a mesh layer; a document
* that cannot be read is drawn as one for this session only.
*
* @param layer - The store layer to probe.
*/
async function probeI3sLayerKind(layer) {
	const key = i3sProbeKey(layer);
	if (i3sProbesInFlight.has(key)) return;
	i3sProbesInFlight.add(key);
	const url = typeof layer.source.url === "string" ? layer.source.url : "";
	const docUrl = i3sLayerDocumentUrl(url);
	let patch = {
		i3sKind: "mesh",
		i3sProbedUrl: url,
		i3sBuildingUrl: void 0,
		i3sBuilding: void 0,
		i3sBaseElevation: null
	};
	if (docUrl) try {
		const response = await fetch(i3sDocumentRequestUrl(docUrl), { signal: timeoutSignal(I3S_PROBE_TIMEOUT_MS) });
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		const doc = await response.json();
		patch.i3sBaseElevation = i3sBaseElevation(doc);
		if (isI3sBuildingLayerDocument(doc)) patch = {
			...patch,
			i3sKind: "building",
			i3sBuildingUrl: docUrl,
			i3sBuilding: parseI3sBuildingLayer(doc)
		};
	} catch (error) {
		console.warn(`[GeoLibre] Could not read the I3S layer document ${docUrl}`, error);
		i3sProbesInFlight.delete(key);
		if (useAppStore.getState().layers.some((item) => item.id === layer.id && (typeof item.source.url === "string" ? item.source.url : "") === url)) {
			i3sProbesFailed.add(key);
			lastI3sLayerSignature = null;
			lastI3sStructureSignature = null;
			renderArcgisI3sTilesLayers();
		}
		return;
	}
	i3sProbesInFlight.delete(key);
	const current = useAppStore.getState().layers.find((item) => item.id === layer.id);
	if (!current || (typeof current.source.url === "string" ? current.source.url : "") !== url) return;
	if (patch.i3sKind === "building" && current.metadata.i3sProbedUrl === url && current.metadata.i3sBuilding) patch.i3sBuilding = mergeI3sBuildingSelection(patch.i3sBuilding, current.metadata.i3sBuilding);
	useAppStore.getState().updateLayer(layer.id, { metadata: {
		...current.metadata,
		...patch
	} });
}
/**
* Probe every I3S layer in the store whose kind is not known yet, without the
* deck.gl overlay. The globe draws scene layers itself, so on Cesium nothing
* else reads the layer document: this records the Building sublayer tree (for
* the Style panel's Building section, which the globe honours) and the base
* elevation.
*/
function probeArcgisI3sLayers() {
	for (const layer of useAppStore.getState().layers) if (isArcgisI3sTilesLayer(layer) && !i3sProbeIsCurrent(layer) && !i3sProbesFailed.has(i3sProbeKey(layer))) probeI3sLayerKind(layer);
}
/**
* The lowest elevation of an I3S layer's geometry, from its layer document.
*
* @param doc - The parsed layer document.
* @returns `fullExtent.zmin` in metres, or `null` when the document has none.
*/
function i3sBaseElevation(doc) {
	const zmin = doc?.fullExtent?.zmin;
	return typeof zmin === "number" && Number.isFinite(zmin) ? zmin : null;
}
/**
* How far to move an I3S layer vertically on the deck.gl overlay, in metres.
*
* Scene layers store absolute elevations (above the geoid, or a datum such as
* NAVD 88). With 3D terrain the map's ground is at those elevations too, but a
* flat map puts the ground at 0 m, so a building in an inland city floated
* hundreds of metres in the sky (issue #3374). On a flat map a layer whose
* geometry starts above 0 m is lowered so its base sits on the ground; one that
* already reaches 0 m or below (a coastal city such as San Francisco) is left
* where it is. The user's Height offset (`source.altitudeOffset`) is added on
* top in either case.
*
* The shift is one value for the whole layer, from its lowest point. That puts
* a single site on the ground; across a city-wide layer on hilly ground,
* buildings on higher ground still stand above the flat map by the height
* difference, which only 3D terrain (or the Height offset) can correct.
*
* @param layer - The I3S store layer.
* @param terrain - Whether the map draws 3D terrain.
* @returns The vertical offset in metres (positive is up).
*/
function i3sVerticalOffset(layer, terrain) {
	const userOffset = Number(layer.source.altitudeOffset);
	const ground = i3sGroundOffset(layer.metadata.i3sBaseElevation, terrain);
	return (Number.isFinite(userOffset) ? userOffset : 0) + ground;
}
/** Whether the map the overlay is bound to currently draws 3D terrain. */
function i3sMapHasTerrain() {
	const map = i3sBoundMap;
	try {
		return Boolean(map?.getTerrain?.());
	} catch {
		return false;
	}
}
/** Redraw the I3S layers when the map's terrain is switched on or off. */
function onI3sMapTerrainChange() {
	const terrain = i3sMapHasTerrain();
	if (terrain === i3sLastTerrain) return;
	i3sLastTerrain = terrain;
	renderArcgisI3sTilesLayers();
}
/**
* Listen for terrain changes on the map the overlay is bound to. MapLibre fires
* `terrain`; Mapbox changes terrain through the style, hence `styledata`.
*
* @param map - The newly bound map, or `null`.
*/
function bindI3sTerrainListener(map) {
	for (const type of ["terrain", "styledata"]) i3sTerrainListenerMap?.off?.(type, onI3sMapTerrainChange);
	i3sTerrainListenerMap = map ?? null;
	for (const type of ["terrain", "styledata"]) i3sTerrainListenerMap?.on?.(type, onI3sMapTerrainChange);
	i3sLastTerrain = i3sMapHasTerrain();
}
/** deck.gl 9 numeric coordinate-system codes → their string equivalents. */
var COORDINATE_SYSTEM_STRINGS = {
	[-1]: "default",
	0: "cartesian",
	1: "lnglat",
	2: "meter-offsets",
	3: "lnglat-offsets"
};
/** Coerce a tile's numeric content coordinateSystem to deck.gl's string form. */
function normalizeI3sTileCoordinateSystem(tile) {
	const content = tile?.content;
	if (content && typeof content.coordinateSystem === "number" && content.coordinateSystem in COORDINATE_SYSTEM_STRINGS) content.coordinateSystem = COORDINATE_SYSTEM_STRINGS[content.coordinateSystem];
}
/** Scene-layer types this mesh-only Tile3DLayer + I3SLoader pipeline renders. */
var SUPPORTED_I3S_LAYER_TYPES = /* @__PURE__ */ new Set(["3DObject", "IntegratedMesh"]);
/**
* Warn when a loaded tileset is a scene-layer type this overlay can't render
* (e.g. an I3S PointCloud layer), which the mesh pipeline would otherwise fail
* to display with no explanation.
*
* @param url The Scene Layer URL, for context in the warning.
* @param tileset The tileset object passed to `onTilesetLoad`.
*/
function warnOnUnsupportedI3sSceneLayerType(url, tileset) {
	const header = tileset;
	const layerType = header?.tileset?.layerType ?? header?.layerType;
	if (typeof layerType === "string" && !SUPPORTED_I3S_LAYER_TYPES.has(layerType)) console.warn(`[GeoLibre] ArcGIS I3S scene layer type "${layerType}" is not supported (only 3DObject and IntegratedMesh mesh layers render); this layer may not display: ${url}`);
}
/** Read a tileset's cartographic center as an [lng, lat] pair, if present. */
function i3sTilesetLngLat(tileset) {
	const center = tileset?.cartographicCenter;
	if (!center || typeof center[0] !== "number" || typeof center[1] !== "number" || !Number.isFinite(center[0]) || !Number.isFinite(center[1]) || Math.abs(center[0]) > 180 || Math.abs(center[1]) > 90) return null;
	return [center[0], center[1]];
}
/**
* Persist a loaded tileset's center into the layer metadata so the main Layers
* panel's "Zoom to layer" (MapController.fitLayer) works — an I3S layer has no
* geojson or MapLibre source, so `metadata.center` is its only bounds hint.
*/
function persistI3sTilesetCenter(layerId, tileset) {
	const center = i3sTilesetLngLat(tileset);
	if (!center) return;
	const layer = useAppStore.getState().layers.find(({ id }) => id === layerId);
	if (!layer || !isArcgisI3sTilesLayer(layer)) return;
	const existing = layer.metadata.center;
	if (Array.isArray(existing) && existing[0] === center[0] && existing[1] === center[1]) return;
	useAppStore.getState().updateLayer(layerId, { metadata: {
		...layer.metadata,
		center
	} });
}
/** Fly to a freshly-loaded tileset the first time, if the add requested it. */
function flyToI3sTileset(layerId, tileset) {
	if (!i3sFlyToRequested.has(layerId) || !i3sApp) return;
	const info = tileset;
	const center = info?.cartographicCenter;
	const map = i3sApp.getMap?.() ?? i3sApp.getMapboxMap?.();
	if (!center || !map?.flyTo) return;
	i3sFlyToRequested.delete(layerId);
	map.flyTo({
		center: [center[0], center[1]],
		zoom: typeof info?.zoom === "number" ? Math.max(0, info.zoom - 1) : 15
	});
}
function forceI3sMercatorProjection(app) {
	acquireMercatorProjectionLock(I3S_PROJECTION_LOCK_KEY, app, app.getMap?.());
}
function restoreI3sPreviousProjection() {
	if (!i3sApp) return;
	releaseMercatorProjectionLock(I3S_PROJECTION_LOCK_KEY, i3sApp);
}
// ../../packages/plugins/src/plugins/mapbox-3d-tiles.ts
/** Fly panel actions and initial loads through the active native renderer. */
function flyToDeckTilesLocation(app, center, zoom) {
	const view = app.getArcgisView?.();
	if (view) view.goTo({
		center,
		zoom,
		...view.type === "3d" ? { tilt: 60 } : {}
	}).catch((error) => {
		if (!(error instanceof DOMException && error.name === "AbortError")) console.warn("[3d-tiles] Could not navigate to the tileset", error);
	});
	else app.getMapboxMap?.()?.flyTo({
		center,
		zoom,
		pitch: 60
	});
}
var SOURCE = "mapbox-3d-tiles";
var unsubscribe;
var boundMap;
var generation = 0;
var flyToRequests = /* @__PURE__ */ new Set();
var signature = "";
var revisionCounter = 0;
var versions = /* @__PURE__ */ new Map();
/**
* The loaders.gl `fetch` option for a tileset. Headers only ever go over HTTPS
* (or loopback): every request, including child tiles the tileset JSON names
* by absolute URL, is refused rather than sent with credentials over plaintext.
*/
function credentialFetch(headers) {
	if (!headers || Object.keys(headers).length === 0) return { headers };
	return (url, init) => /^(?:data|blob):/i.test(url) || allowsCredentialHeaders(url) ? fetch(url, {
		...init,
		headers: {
			...init?.headers,
			...headers
		}
	}) : Promise.reject(/* @__PURE__ */ new Error(`Request headers are not sent over ${url}`));
}
function isMapboxTilesLayer(layer) {
	return layer.type === "3d-tiles" && layer.metadata.sourceKind === "3d-tiles-url";
}
/** Bind persisted tilesets to the current engine without storing renderer objects. */
async function restoreMapboxTiles(app, flyToId) {
	const arcgisView = app.getArcgisView?.();
	if (arcgisView?.type === "3d" && arcgisView.viewingMode !== "local") return;
	const getMap = () => app.getMapboxMap?.() ?? app.getArcgisView?.();
	const map = getMap();
	if (!map || !app.getDeckGL) return;
	if (flyToId) flyToRequests.add(flyToId);
	const currentGeneration = ++generation;
	const deck = await app.getDeckGL();
	if (currentGeneration !== generation || getMap() !== map) return;
	await ensureSharedDeckOverlay(app);
	if (currentGeneration !== generation || getMap() !== map) return;
	unsubscribe?.();
	const newlyBound = boundMap !== map;
	boundMap = map;
	if (newlyBound) {
		signature = "";
		versions.clear();
	}
	const render = () => {
		if (boundMap !== map) return;
		const layers = useAppStore.getState().layers.filter(isMapboxTilesLayer);
		const headers = new Map(layers.map((layer) => [layer.id, resolveThreeDTilesRequestHeaders(String(layer.source.url), resolveProjectHeaderReferences(layer.source.requestHeaders))]));
		const next = JSON.stringify(layers.map(({ id, source, visible, opacity }) => ({
			id,
			source,
			visible,
			opacity,
			headers: headers.get(id)
		})));
		if (next === signature) return;
		signature = next;
		if (layers.length) acquireMercatorProjectionLock(SOURCE, app);
		else releaseMercatorProjectionLock(SOURCE, app);
		for (const id of flyToRequests) if (!layers.some((layer) => layer.id === id)) flyToRequests.delete(id);
		const Tile3DLayer = deck.geoLayers.Tile3DLayer;
		for (const id of versions.keys()) if (!layers.some((layer) => layer.id === id)) versions.delete(id);
		const revision = (layer) => {
			const source = JSON.stringify([layer.source, headers.get(layer.id)]);
			const previous = versions.get(layer.id);
			if (previous?.source === source) return previous.revision;
			const revision = ++revisionCounter;
			versions.set(layer.id, {
				source,
				revision
			});
			return revision;
		};
		const isLive = (layer, token) => boundMap === map && versions.get(layer.id)?.revision === token;
		setSharedDeckLayers(SOURCE, [...layers].reverse().map((layer) => {
			const token = revision(layer);
			return new Tile3DLayer({
				id: `${layer.id}-${token}-mapbox-tiles`,
				data: layer.source.url,
				altitudeOffset: layer.source.altitudeOffset,
				visible: layer.visible,
				opacity: layer.opacity,
				pickable: false,
				loadOptions: {
					...THREE_D_TILES_DECK_LOAD_OPTIONS,
					fetch: credentialFetch(headers.get(layer.id))
				},
				onTilesetLoad: (tileset) => {
					applyThreeDTilesTilesetMemoryLimit(tileset);
					applyTilesetAltitudeOffset(tileset, Number(layer.source.altitudeOffset ?? 0));
					const current = useAppStore.getState().layers.find(({ id }) => id === layer.id);
					if (!current || !isLive(layer, token)) return;
					const center = tileset.cartographicCenter;
					useAppStore.getState().updateLayer(layer.id, { metadata: {
						...current.metadata,
						status: "loaded",
						error: void 0,
						...center ? {
							center: Array.from(center).slice(0, 2),
							altitude: center[2],
							zoom: tileset.zoom
						} : {}
					} });
					if (center && flyToRequests.delete(layer.id)) flyToDeckTilesLocation(app, [center[0], center[1]], Math.max(0, (tileset.zoom ?? 16) - 1));
				},
				onError: (error) => {
					const current = useAppStore.getState().layers.find(({ id }) => id === layer.id);
					if (current && isLive(layer, token)) useAppStore.getState().updateLayer(layer.id, { metadata: {
						...current.metadata,
						status: "error",
						error: error.message
					} });
					return true;
				},
				onTileError: (_tile, message) => {
					const current = useAppStore.getState().layers.find(({ id }) => id === layer.id);
					if (current && isLive(layer, token)) useAppStore.getState().updateLayer(layer.id, { metadata: {
						...current.metadata,
						status: "error",
						error: message
					} });
				}
			});
		}));
	};
	unsubscribe = useAppStore.subscribe((state, previous) => {
		if (state.layers !== previous.layers || state.preferences.environmentVariables !== previous.preferences.environmentVariables) render();
	});
	if (newlyBound) {
		const cleanup = () => {
			if (boundMap !== map) return;
			generation++;
			unsubscribe?.();
			unsubscribe = void 0;
			boundMap = null;
			signature = "";
			versions.clear();
			setSharedDeckLayers(SOURCE, []);
			releaseMercatorProjectionLock(SOURCE, app);
		};
		if (arcgisView) onArcgisViewDestroy(arcgisView, cleanup);
		else app.getMapboxMap?.()?.once("remove", cleanup);
	}
	render();
}
// ../../packages/plugins/src/plugins/maplibre-3d-tiles.ts
/**
* `metadata.sourceKind` marking the 3D Tiles layers this plugin adds. Exported so the Layer Library's restore
* dispatch keys off the same value this plugin writes rather than a hand-typed
* copy (issue #1520).
*/
var THREE_D_TILES_SOURCE_KIND = "3d-tiles-url";
var threeDTilesControlPosition = "top-left";
var THREE_D_TILES_LAYER_ID = "geolibre-3d-tiles";
var THREE_VERSION = "0.184.0";
var DEFAULT_DRACO_DECODER_PATH = `https://unpkg.com/three@${THREE_VERSION}/examples/jsm/libs/draco/`;
var DEFAULT_KTX2_TRANSCODER_PATH = `https://unpkg.com/three@${THREE_VERSION}/examples/jsm/libs/basis/`;
var GOOGLE_PHOTOREALISTIC_TILES_URL = "https://tile.googleapis.com/v1/3dtiles/root.json";
var GOOGLE_PHOTOREALISTIC_TILES_LABEL = "Google Photorealistic 3D Tiles";
var ARCGIS_I3S_SAMPLE_TILES_URL = "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0";
var ARCGIS_I3S_SAMPLE_TILES_LABEL = "San Francisco Buildings (ArcGIS I3S)";
var ARCGIS_I3S_BUILDING_SAMPLE_TILES_URL = "https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/BSL__4326__US_Redlands__BuildingE/SceneServer/layers/0";
var ARCGIS_I3S_BUILDING_SAMPLE_TILES_LABEL = "Redlands Building E (ArcGIS I3S BIM)";
var THREE_D_BAG_SAMPLE_TILES_URL = "https://data.3dbag.nl/v20250903/cesium3dtiles/lod22/tileset.json";
var THREE_D_BAG_SAMPLE_TILES_LABEL = "3D BAG Netherlands (LoD 2.2)";
var THREE_D_BAG_SAMPLE_ALTITUDE_OFFSET = -43;
var GOOGLE_MAPS_API_KEY_MASK = "********";
var GOOGLE_PHOTOREALISTIC_SOURCE_KIND = "google-photorealistic-3d-tiles";
var GOOGLE_PHOTOREALISTIC_LAYER_ID_PREFIX = "geolibre-google-photorealistic-3d-tiles";
var GOOGLE_PHOTOREALISTIC_INITIAL_VIEW = {
	center: [14.42, 50.089],
	zoom: 16,
	bearing: 90,
	pitch: 60
};
/**
* Builds the options for a new ThreeDTilesControl.
*
* @param defaultTilesetUrl - The package's sample tileset URL, read from the
*   lazily imported module.
* @returns The control options.
*/
var threeDTilesOptions = (defaultTilesetUrl) => ({
	className: "geolibre-3d-tiles-control",
	collapsed: true,
	collapseOnClickOutside: false,
	layerId: THREE_D_TILES_LAYER_ID,
	panelWidth: 365,
	title: "Add 3D Tiles layer",
	tilesetUrl: "",
	sampleData: [
		{
			label: "AGI HQ",
			url: defaultTilesetUrl
		},
		{
			label: GOOGLE_PHOTOREALISTIC_TILES_LABEL,
			url: GOOGLE_PHOTOREALISTIC_TILES_URL
		},
		{
			label: ARCGIS_I3S_SAMPLE_TILES_LABEL,
			url: ARCGIS_I3S_SAMPLE_TILES_URL
		},
		{
			label: ARCGIS_I3S_BUILDING_SAMPLE_TILES_LABEL,
			url: ARCGIS_I3S_BUILDING_SAMPLE_TILES_URL
		},
		{
			label: THREE_D_BAG_SAMPLE_TILES_LABEL,
			url: THREE_D_BAG_SAMPLE_TILES_URL,
			altitudeOffset: THREE_D_BAG_SAMPLE_ALTITUDE_OFFSET
		}
	]
});
var threeDTilesModule = null;
var threeDTilesModulePromise = null;
var threeDTilesLoadGeneration = 0;
var threeDTilesControl = null;
var threeDTilesControlMounted = false;
var threeDTilesPanelPinned = false;
var threeDTilesStoreUnsubscribe = null;
var threeDTilesStoreSyncSuspended = 0;
var threeDTilesRuntimeEnvUnsubscribe = null;
/** Stops re-labelling the panel's own controls on a language change. */
var threeDTilesLocaleUnsubscribe = null;
var activeThreeDTilesApp = null;
/** Resolves `plugin.3d-tiles.*` keys through the active app, falling back to English. */
var tr = createPluginTranslator(() => activeThreeDTilesApp, "3d-tiles");
var pendingThreeDTilesStyleRestores = /* @__PURE__ */ new WeakSet();
var googleTilesStoreUnsubscribe = null;
var googleTilesDeckGL = null;
var googleTilesApp = null;
var ensureGoogleTilesOverlayInFlight = null;
/** Ref-counted mercator lock key for this overlay (see map-projection-utils). */
var GOOGLE_PROJECTION_LOCK_KEY = "google-photorealistic";
var googleAltitudeOffsetTile3DLayerClass = null;
var googleTilesRuntimeEnvUnsubscribe = null;
var lastGoogleTilesLayerSignature = null;
var googleTilesApiKeysByLayerId = /* @__PURE__ */ new Map();
var googleTilesApiKeysByPanel = /* @__PURE__ */ new WeakMap();
/**
* Loads maplibre-gl-3d-tiles on first use.
*
* A failed load (e.g. offline) is dropped so the next call retries the import.
*
* @returns The package module.
*/
function loadThreeDTilesModule() {
	if (threeDTilesModulePromise) return threeDTilesModulePromise;
	const promise = __vitePreload(() => import("./dist-C2SefCHx.js").then((module) => {
		if (!module) throw new Error("maplibre-gl-3d-tiles failed to load");
		threeDTilesModule = module;
		return module;
	}), __vite__mapDeps([12,13,14,15,16,17]), import.meta.url);
	threeDTilesModulePromise = promise;
	promise.catch(() => {
		if (threeDTilesModulePromise === promise) threeDTilesModulePromise = null;
	});
	return promise;
}
/**
* Runs `callback` once maplibre-gl-3d-tiles is loaded: synchronously when it
* already is, otherwise after the import resolves. The callback is skipped when
* the panel was closed (or a new project reset it) while the package loaded.
*
* @param action - What is being loaded for, used in the failure log.
* @param callback - The work that needs the package.
*/
function withThreeDTilesModule(action, callback) {
	if (threeDTilesModule) {
		callback();
		return;
	}
	const generation = threeDTilesLoadGeneration;
	loadThreeDTilesModule().then(() => {
		if (generation === threeDTilesLoadGeneration) callback();
	}, (error) => {
		console.error(`[GeoLibre] Failed to load the 3D Tiles control to ${action}`, error);
	});
}
function openThreeDTilesLayerPanel(app) {
	withThreeDTilesModule("open the panel", () => {
		openStandaloneThreeDTilesControl(app);
	});
}
function closeThreeDTilesLayerPanel(app) {
	threeDTilesLoadGeneration += 1;
	if (threeDTilesControl && threeDTilesControlMounted) {
		app.removeMapControl(threeDTilesControl);
		return;
	}
	resetThreeDTilesControl(threeDTilesControl);
}
function restoreThreeDTilesLayers(app) {
	const renderer = app.getMapRenderer?.() ?? "";
	if (renderer === "cesium") {
		probeArcgisI3sLayers();
		return;
	}
	if (renderer === "arcgis") {
		if (useAppStore.getState().layers.some(isMapboxTilesLayer)) restoreMapboxTiles(app).catch(console.error);
		return;
	}
	restoreGooglePhotorealisticTilesLayers(app);
	restoreArcgisI3sTilesLayers(app);
	if (renderer === "mapbox") {
		if (useAppStore.getState().layers.some(isMapboxTilesLayer)) restoreMapboxTiles(app).catch(console.error);
		return;
	}
	if (!useAppStore.getState().layers.some(isThreeDTilesControlLayer)) return;
	withThreeDTilesModule("restore 3D Tiles layers", () => restoreThreeDTilesControlLayers(app));
}
/**
* Restores the tileset layers the MapLibre 3D Tiles control paints. Needs the
* maplibre-gl-3d-tiles module to be loaded.
*
* @param app - The GeoLibre app API.
*/
function restoreThreeDTilesControlLayers(app) {
	const layers = useAppStore.getState().layers.filter(isThreeDTilesControlLayer);
	if (layers.length === 0) return;
	const map = app.getMap?.();
	if (map && deferThreeDTilesRestoreUntilMapIdle(map, () => restoreThreeDTilesLayers(app))) return;
	const control = runWithThreeDTilesStoreSyncSuspended(() => ensureThreeDTilesControl(app));
	if (!control) return;
	const panelCollapsed = threeDTilesPanelCollapsedFromLayers(layers);
	runWithThreeDTilesStoreSyncSuspended(() => {
		showThreeDTilesControl(control);
		threeDTilesPanelPinned = !panelCollapsed;
		if (panelCollapsed) control.collapse();
		else control.expand();
	});
	try {
		hydrateThreeDTilesControlFromStore(control, { replaceExisting: true });
		syncThreeDTilesStoreFromControl(control);
	} catch (error) {
		console.error("[GeoLibre] Failed to restore 3D Tiles layers", error);
	}
}
/**
* Queue one restore after an in-progress MapLibre style load becomes idle.
*
* Project restoration can run while the saved basemap is still replacing the
* initial style. MapLibre accepts a custom layer during that window, then
* discards it when the new style finishes loading. This mirrors the upstream
* control's style-ready guard. The `idle` event is used because the host's
* initial `load` callback can run after `style.load` while `isStyleLoaded()`
* remains false. Repeated restore passes are deduplicated.
*
* @param map - The MapLibre map receiving the restored custom layer.
* @param restore - Replays the current project state after the map becomes idle.
* @returns True when restoration was deferred, otherwise false.
*/
function deferThreeDTilesRestoreUntilMapIdle(map, restore) {
	if (map.isStyleLoaded()) return false;
	if (pendingThreeDTilesStyleRestores.has(map)) return true;
	pendingThreeDTilesStyleRestores.add(map);
	map.once("idle", () => {
		pendingThreeDTilesStyleRestores.delete(map);
		restore();
	});
	return true;
}
function openStandaloneThreeDTilesControl(app) {
	const control = ensureThreeDTilesControl(app);
	if (!control) return false;
	window.setTimeout(() => {
		threeDTilesPanelPinned = true;
		showThreeDTilesControl(control);
		control.expand();
		try {
			hydrateThreeDTilesControlFromStore(control);
			syncThreeDTilesStoreFromControl(control);
		} catch (error) {
			console.error("[GeoLibre] Failed to open 3D Tiles layer panel", error);
		}
	}, 0);
	return true;
}
function ensureThreeDTilesControl(app) {
	activeThreeDTilesApp = app;
	threeDTilesControl ??= createThreeDTilesControl();
	if (!threeDTilesControlMounted) {
		if (!app.addMapControl(threeDTilesControl, threeDTilesControlPosition)) {
			resetThreeDTilesControl(threeDTilesControl);
			if (activeThreeDTilesApp === app) activeThreeDTilesApp = null;
			return null;
		}
		threeDTilesControlMounted = true;
	}
	threeDTilesLocaleUnsubscribe ??= app.onLocaleChange?.(relabelThreeDTilesPanel) ?? null;
	return threeDTilesControl;
}
function createThreeDTilesControl() {
	const { DEFAULT_TILESET_URL, ThreeDTilesControl } = requireThreeDTilesModule();
	const control = new ThreeDTilesControl(threeDTilesOptions(DEFAULT_TILESET_URL));
	const syncHandler = () => {
		if (!isThreeDTilesStoreSyncSuspended()) syncThreeDTilesStoreFromControl(control);
		keepThreeDTilesPanelExpanded(control);
		installThreeDTilesPanelHandlers(control);
	};
	control.on("statechange", syncHandler);
	patchThreeDTilesControlOnRemove(control);
	addThreeDTilesRuntimeEnvListener(control);
	threeDTilesStoreUnsubscribe ??= useAppStore.subscribe((state, previous) => {
		if (state.layers !== previous.layers) {
			for (const id of threeDTilesResolvedHeaders.keys()) if (!state.layers.some((layer) => layer.id === id)) threeDTilesResolvedHeaders.delete(id);
			updateDeckTilesPanelList(control);
		}
		if (isGlobeThreeDTilesRenderer()) return;
		const currentById = new Map(state.layers.map((layer) => [layer.id, layer]));
		for (const layer of previous.layers) {
			if (!isThreeDTilesControlLayer(layer)) continue;
			const currentLayer = currentById.get(layer.id);
			if (!currentLayer) {
				if (hasThreeDTilesTileset(control, layer.id)) control.removeTileset(layer.id);
				continue;
			}
			if (!isThreeDTilesControlLayer(currentLayer)) continue;
			if (currentLayer.visible !== layer.visible) control.setVisible(currentLayer.visible, currentLayer.id);
			if (currentLayer.opacity !== layer.opacity) setThreeDTilesOpacity(control, currentLayer.id, currentLayer.opacity);
			const offset = numberValue(currentLayer.source.altitudeOffset, 0);
			if (offset !== numberValue(layer.source.altitudeOffset, 0)) setThreeDTilesAltitudeOffset(control, currentLayer.id, offset);
		}
	});
	return control;
}
function syncThreeDTilesStoreFromControl(control) {
	if (isStoreDrivenThreeDTilesRenderer()) return;
	const store = useAppStore.getState();
	const state = control.getState();
	const tilesetIds = new Set(state.tilesets.map((tileset) => tileset.id));
	for (const layer of store.layers) if (isThreeDTilesControlLayer(layer) && !tilesetIds.has(layer.id)) store.removeLayer(layer.id);
	const layersById = new Map(useAppStore.getState().layers.map((layer) => [layer.id, layer]));
	for (const tileset of state.tilesets) {
		const existingLayer = layersById.get(tileset.id);
		const layer = createThreeDTilesStoreLayer(tileset, tileset.opacity, state.collapsed);
		if (existingLayer) {
			const update = createThreeDTilesLayerUpdate(existingLayer, layer);
			if (update) store.updateLayer(layer.id, update);
			continue;
		}
		store.addLayer(layer);
	}
}
function hydrateThreeDTilesControlFromStore(control, options = {}) {
	if (isStoreDrivenThreeDTilesRenderer()) return;
	const layers = useAppStore.getState().layers.filter(isThreeDTilesControlLayer);
	if (layers.length === 0) return;
	const tilesets = control.getState().tilesets;
	if (tilesets.length > 0) {
		if (!options.replaceExisting) return;
		runWithThreeDTilesStoreSyncSuspended(() => {
			for (const tileset of tilesets) control.removeTileset(tileset.id);
		});
	}
	for (const layer of layers) {
		const url = stringValue(layer.source.url) ?? layer.sourcePath;
		if (!url) continue;
		restoreThreeDTilesMapLayer(control, layer, url);
	}
}
/**
* @param flyToOnLoad Fly to the tileset once it loads, as the panel's "Fly to
*   tileset after load" does for the library's own submit path.
*/
function restoreThreeDTilesMapLayer(control, layer, url, flyToOnLoad = false) {
	const map = control.getMap();
	const controlLayers = getThreeDTilesControlLayers(control);
	if (!map || !controlLayers || !hasStyleLayerApi(map)) return false;
	const id = layer.id;
	const layerId = restoredThreeDTilesLayerId(layer);
	const layerName = layer.name || layerNameFromUrl(url, id);
	const beforeId = validThreeDTilesBeforeId(control, layer.beforeId);
	const altitudeOffset = numberValue(layer.source.altitudeOffset, 0);
	const requestHeaders = stringRecordValue(layer.source.requestHeaders);
	const loadHeaders = resolveThreeDTilesRequestHeaders(url, resolveProjectHeaderReferences(requestHeaders));
	const existingTilesets = control.getState().tilesets.filter((tileset) => tileset.id !== id);
	const savedCenter = lngLatPairValue(layer.metadata.center);
	const savedAltitude = optionalNumberValue(layer.metadata.altitude);
	const status = savedCenter ? "loaded" : "loading";
	const restoredTileset = {
		id,
		layerId,
		layerName,
		beforeId,
		tilesetUrl: url,
		altitudeOffset,
		opacity: layer.opacity,
		visible: layer.visible,
		status,
		center: savedCenter,
		altitude: savedAltitude,
		requestHeaders
	};
	runWithThreeDTilesStoreSyncSuspended(() => {
		control.setState({
			activeTilesetId: id,
			altitude: restoredTileset.altitude,
			altitudeOffset,
			beforeId,
			center: restoredTileset.center,
			error: void 0,
			layerName,
			opacity: layer.opacity,
			requestHeaders,
			status,
			tilesetUrl: url,
			tilesets: [...existingTilesets, restoredTileset],
			visible: layer.visible
		});
	});
	if (map.getLayer(layerId)) {
		moveThreeDTilesMapLayer(map, layerId, beforeId);
		return true;
	}
	if (loadHeaders && Object.keys(loadHeaders).length > 0 && !allowsCredentialHeaders(url)) {
		updateThreeDTilesError(control, id, new Error(THREE_D_TILES_INSECURE_HEADERS));
		return false;
	}
	if (hasHeaderReferences(requestHeaders)) threeDTilesResolvedHeaders.set(id, JSON.stringify(loadHeaders ?? null));
	const { ThreeDTilesLayer } = requireThreeDTilesModule();
	const restoredLayer = new ThreeDTilesLayer({
		id: layerId,
		tilesetUrl: url,
		altitudeOffset,
		opacity: layer.opacity,
		visible: layer.visible,
		requestHeaders: loadHeaders,
		...getThreeDTilesDecoderOptions(control),
		onLoad: (metadata) => {
			updateThreeDTilesLoaded(control, id, metadata);
			if (flyToOnLoad) control.flyToTileset(id);
		},
		onError: (error) => updateThreeDTilesError(control, id, error)
	});
	controlLayers.set(id, restoredLayer);
	try {
		map.addLayer(restoredLayer, beforeId);
	} catch (error) {
		controlLayers.delete(id);
		throw error;
	}
	return true;
}
var THREE_D_TILES_INSECURE_HEADERS = "Request headers are only sent to an HTTPS tileset URL (or localhost).";
/**
* The resolved `${NAME}` headers each native tileset was built with, so a
* changed variable can rebuild exactly the tilesets it affects.
*/
var threeDTilesResolvedHeaders = /* @__PURE__ */ new Map();
/**
* Rebuild native tilesets whose `${NAME}` request headers resolve differently
* now. The store records hold only the template, so nothing else notices.
*/
function rebuildThreeDTilesWithChangedHeaders(control) {
	if (isStoreDrivenThreeDTilesRenderer()) return;
	const layers = new Map(useAppStore.getState().layers.filter(isThreeDTilesControlLayer).map((layer) => [layer.id, layer]));
	for (const [id, built] of threeDTilesResolvedHeaders) {
		const layer = layers.get(id);
		const url = layer ? stringValue(layer.source.url) ?? layer.sourcePath : void 0;
		if (!layer || !url) {
			threeDTilesResolvedHeaders.delete(id);
			continue;
		}
		const now = resolveThreeDTilesRequestHeaders(url, resolveProjectHeaderReferences(stringRecordValue(layer.source.requestHeaders)));
		if (JSON.stringify(now ?? null) === built) continue;
		threeDTilesResolvedHeaders.delete(id);
		runWithThreeDTilesStoreSyncSuspended(() => {
			control.removeTileset(id);
			restoreThreeDTilesMapLayer(control, layer, url);
		});
	}
}
function updateThreeDTilesLoaded(control, id, metadata) {
	const state = control.getState();
	const tilesets = state.tilesets.map((tileset) => tileset.id === id ? {
		...tileset,
		altitude: metadata.altitude,
		center: metadata.center,
		error: void 0,
		status: "loaded"
	} : tileset);
	const activeTileset = tilesets.find((tileset) => tileset.id === state.activeTilesetId) ?? tilesets.at(-1);
	control.setState({
		altitude: activeTileset?.altitude,
		center: activeTileset?.center,
		error: activeTileset?.error,
		status: activeTileset?.status ?? "idle",
		tilesets
	});
}
function updateThreeDTilesError(control, id, error) {
	const state = control.getState();
	const message = error.message || "Unable to load 3D Tiles layer.";
	const tilesets = state.tilesets.map((tileset) => tileset.id === id ? {
		...tileset,
		error: message,
		status: "error"
	} : tileset);
	const activeTileset = tilesets.find((tileset) => tileset.id === state.activeTilesetId) ?? tilesets.at(-1);
	control.setState({
		error: activeTileset?.error,
		status: activeTileset?.status ?? "idle",
		tilesets
	});
}
function createThreeDTilesStoreLayer(tileset, opacity = 1, panelCollapsed = true) {
	const layerName = tileset.layerName || layerNameFromUrl(tileset.tilesetUrl, tileset.id);
	const beforeId = tileset.beforeId;
	return {
		id: tileset.id,
		name: layerName,
		type: "3d-tiles",
		source: {
			altitudeOffset: tileset.altitudeOffset,
			sourceId: tileset.id,
			type: "3d-tiles",
			url: tileset.tilesetUrl,
			requestHeaders: persistedThreeDTilesRequestHeaders(tileset.tilesetUrl, tileset.requestHeaders)
		},
		visible: tileset.visible,
		opacity,
		style: { ...DEFAULT_LAYER_STYLE },
		beforeId,
		metadata: {
			altitude: tileset.altitude,
			altitudeOffset: tileset.altitudeOffset,
			beforeId,
			center: tileset.center,
			customLayerType: "3d-tiles",
			error: tileset.error,
			externalNativeLayer: true,
			identifiable: false,
			layerName,
			nativeLayerIds: [tileset.layerId],
			panelCollapsed,
			sourceId: tileset.id,
			sourceKind: THREE_D_TILES_SOURCE_KIND,
			status: tileset.status
		},
		sourcePath: tileset.tilesetUrl
	};
}
function createThreeDTilesLayerUpdate(existingLayer, layer) {
	if (existingLayer.metadata.bounds && !layer.metadata.bounds) layer = {
		...layer,
		metadata: {
			...layer.metadata,
			bounds: existingLayer.metadata.bounds
		}
	};
	const update = {};
	const name = existingLayer.name || layer.name;
	if (existingLayer.name !== name) update.name = name;
	if (existingLayer.beforeId !== layer.beforeId) update.beforeId = layer.beforeId;
	if (existingLayer.opacity !== layer.opacity) update.opacity = layer.opacity;
	if (existingLayer.visible !== layer.visible) update.visible = layer.visible;
	if (existingLayer.sourcePath !== layer.sourcePath) update.sourcePath = layer.sourcePath;
	if (!recordsEqual(existingLayer.source, layer.source)) update.source = layer.source;
	if (!recordsEqual(existingLayer.metadata, layer.metadata)) update.metadata = layer.metadata;
	return Object.keys(update).length > 0 ? update : null;
}
/**
* Returns the loaded maplibre-gl-3d-tiles module. Only called on paths that run
* after {@link withThreeDTilesModule} resolved it.
*
* @returns The package module.
*/
function requireThreeDTilesModule() {
	if (!threeDTilesModule) throw new Error("maplibre-gl-3d-tiles is used before it was loaded");
	return threeDTilesModule;
}
function patchThreeDTilesControlOnRemove(control) {
	const originalOnRemove = control.onRemove.bind(control);
	control.onRemove = () => {
		originalOnRemove();
		resetThreeDTilesControl(control);
	};
}
function resetThreeDTilesControl(control) {
	if (threeDTilesControl !== control) return;
	threeDTilesStoreUnsubscribe?.();
	threeDTilesStoreUnsubscribe = null;
	threeDTilesRuntimeEnvUnsubscribe?.();
	threeDTilesRuntimeEnvUnsubscribe = null;
	threeDTilesLocaleUnsubscribe?.();
	threeDTilesLocaleUnsubscribe = null;
	threeDTilesPanelPinned = false;
	threeDTilesControlMounted = false;
	threeDTilesControl = null;
	activeThreeDTilesApp = null;
	threeDTilesStoreSyncSuspended = 0;
}
/** The renderer the panel is currently attached to, `""` when unknown. */
function activeThreeDTilesRenderer() {
	return activeThreeDTilesApp?.getMapRenderer?.() ?? "";
}
/**
* Whether the globe is the active renderer.
*
* Cesium draws a 3D Tiles store record itself (`Cesium3DTileset` /
* `I3SDataProvider` in `cesium-layer-sync`), and the map the control is mounted
* on there is `CesiumMapFacade`, an object that answers the camera and
* container parts of the MapLibre API but has no style layers at all, so
* `getLayer` is missing outright and `addLayer` throws. Every path that would
* create, query or restore the control's own custom layer therefore has to stay
* out of the way and let the store record reach the globe (issue #2505).
*/
function isGlobeThreeDTilesRenderer() {
	return activeThreeDTilesRenderer() === "cesium";
}
/**
* Renderers whose 3D Tiles layers live in the store rather than as a custom
* layer the `maplibre-gl-3d-tiles` control owns: Mapbox and ArcGIS draw them
* through deck.gl, Cesium through its own tileset primitives.
*/
function isStoreDrivenThreeDTilesRenderer() {
	return [
		"mapbox",
		"arcgis",
		"cesium"
	].includes(activeThreeDTilesRenderer());
}
function isThreeDTilesControlLayer(layer) {
	return layer.type === "3d-tiles" && layer.metadata.sourceKind === "3d-tiles-url" && layer.metadata.externalNativeLayer === true && !isGooglePhotorealisticTilesetLayerUrl(layer);
}
function hasThreeDTilesTileset(control, id) {
	return control.getState().tilesets.some((tileset) => tileset.id === id);
}
function hideThreeDTilesControl(control) {
	const container = control?.getContainer();
	if (container) container.style.display = "none";
}
function showThreeDTilesControl(control) {
	const container = control?.getContainer();
	if (container) container.style.display = "";
	installThreeDTilesPanelHandlers(control);
}
function installThreeDTilesPanelHandlers(control) {
	const panel = getThreeDTilesPanel(control);
	if (panel) {
		panel.classList.add("geolibre-3d-tiles-panel");
		applyThreeDTilesHeaderHint(panel);
		installThreeDTilesCloseHandler(control, panel);
		if (control) {
			installGooglePhotorealisticTilesPanelHandlers(control, panel);
			updateDeckTilesPanelList(control);
			installArcgisI3sTilesPanelHandlers(control, panel);
		}
	}
	installThreeDTilesToggleHandler(control);
}
var THREE_D_TILES_HEADER_PLACEHOLDER = "Authorization: Bearer ${TOKEN}";
var THREE_D_TILES_HEADER_HINT = "One per line as Name: Value. Use ${NAME} to insert an environment variable from Settings → Environment; the value is not saved with the layer.";
/**
* Point the Request headers field at `${NAME}` references, so a token lives
* in Settings → Environment instead of on the layer.
*/
function applyThreeDTilesHeaderHint(panel) {
	if (panel.dataset.geolibreHeaderHint === "true") return;
	const headersInput = panel.querySelector("textarea[aria-label=\"Request headers\"]");
	if (!headersInput) return;
	panel.dataset.geolibreHeaderHint = "true";
	headersInput.placeholder = THREE_D_TILES_HEADER_PLACEHOLDER;
	const hint = headersInput.closest(".three-d-tiles-field")?.querySelector(".three-d-tiles-field-hint");
	if (hint) hint.textContent = activeThreeDTilesApp?.translate?.("plugin.3d-tiles.headersHint", THREE_D_TILES_HEADER_HINT) ?? THREE_D_TILES_HEADER_HINT;
}
function addThreeDTilesRuntimeEnvListener(control) {
	if (threeDTilesRuntimeEnvUnsubscribe || typeof window === "undefined") return;
	const handleRuntimeEnvChange = () => {
		applyGooglePhotorealisticTilesPanelDefaults(control);
		rebuildThreeDTilesWithChangedHeaders(control);
		lastGoogleTilesLayerSignature = null;
		renderGooglePhotorealisticTilesLayers();
	};
	window.addEventListener("geolibre:runtime-env-change", handleRuntimeEnvChange);
	threeDTilesRuntimeEnvUnsubscribe = () => {
		window.removeEventListener("geolibre:runtime-env-change", handleRuntimeEnvChange);
	};
}
function installGooglePhotorealisticTilesPanelHandlers(control, panel) {
	if (panel.dataset.geolibreGoogleTilesHandler === "true") return;
	panel.dataset.geolibreGoogleTilesHandler = "true";
	const applyDefaults = () => applyGooglePhotorealisticTilesPanelDefaults(control);
	const deferApplyDefaults = () => window.setTimeout(applyDefaults, 0);
	const urlInput = getThreeDTilesUrlInput(panel);
	urlInput?.addEventListener("input", applyDefaults);
	urlInput?.addEventListener("change", applyDefaults);
	panel.querySelector("input[aria-label=\"Layer name\"]")?.addEventListener("input", () => {
		delete panel.dataset.geolibreSampleLayerName;
	});
	panel.addEventListener("submit", (event) => {
		if (!(event.target instanceof HTMLElement) || !event.target.classList.contains("three-d-tiles-form")) return;
		applyDefaults();
		const url = urlInput?.value.trim() ?? "";
		if (url && isGlobeThreeDTilesRenderer()) {
			event.preventDefault();
			event.stopImmediatePropagation();
			addThreeDTilesLayerForGlobe(control, panel, url);
			return;
		}
		if (activeThreeDTilesRenderer() === "arcgis" && (isGooglePhotorealisticTilesetUrl(url) || isArcgisI3sSceneLayerUrl(url))) {
			event.preventDefault();
			event.stopImmediatePropagation();
			setThreeDTilesPanelError(panel, "plugin.3d-tiles.arcgisSourceUnsupported", "Use a 3D Tiles tileset.json URL in this ArcGIS view. Google Photorealistic and I3S tiles require another renderer.");
			return;
		}
		if (url && activeThreeDTilesApp && ["mapbox", "arcgis"].includes(activeThreeDTilesRenderer()) && !isGooglePhotorealisticTilesetUrl(url) && !isArcgisI3sSceneLayerUrl(url)) {
			event.preventDefault();
			event.stopImmediatePropagation();
			const tileset = threeDTilesItemStateFromPanel(control, panel, url, "loading");
			const id = tileset.id;
			const layer = createThreeDTilesStoreLayer(tileset, control.getState().opacity);
			useAppStore.getState().addLayer(layer);
			const flyTo = panel.querySelector("input[aria-label=\"Fly to tileset after load\"]")?.checked ?? true;
			restoreMapboxTiles(activeThreeDTilesApp, flyTo ? id : void 0).catch(console.error);
			control.collapse();
			return;
		}
		const panelHeaders = parseThreeDTilesRequestHeaders(panel.querySelector("textarea[aria-label=\"Request headers\"]")?.value ?? "");
		const nativeTileset = url && !isGooglePhotorealisticTilesetUrl(url) && !isArcgisI3sSceneLayerUrl(url);
		if (nativeTileset && panelHeaders && Object.keys(panelHeaders).length > 0 && !allowsCredentialHeaders(url)) {
			event.preventDefault();
			event.stopImmediatePropagation();
			setThreeDTilesPanelError(panel, "plugin.3d-tiles.insecureHeaders", THREE_D_TILES_INSECURE_HEADERS);
			return;
		}
		if (nativeTileset && hasHeaderReferences(panelHeaders)) {
			event.preventDefault();
			event.stopImmediatePropagation();
			const layer = createThreeDTilesStoreLayer(threeDTilesItemStateFromPanel(control, panel, url, "loading"), control.getState().opacity);
			const flyToOnLoad = panel.querySelector("input[aria-label=\"Fly to tileset after load\"]")?.checked ?? true;
			runWithThreeDTilesStoreSyncSuspended(() => {
				useAppStore.getState().addLayer(layer);
				restoreThreeDTilesMapLayer(control, layer, url, flyToOnLoad);
			});
			control.collapse();
			return;
		}
		if (!isGooglePhotorealisticTilesetUrl(url)) return;
		event.preventDefault();
		event.stopImmediatePropagation();
		addGooglePhotorealisticTilesFromPanel(control, panel);
	}, { capture: true });
	panel.addEventListener("click", (event) => {
		const target = event.target;
		if (!(target instanceof HTMLElement)) return;
		const option = target.closest(".three-d-tiles-sample-option");
		if (!option) return;
		const layerNameInput = panel.querySelector("input[aria-label=\"Layer name\"]");
		if (layerNameInput) {
			const currentName = layerNameInput.value;
			const nextName = threeDTilesSampleLayerName(currentName, option.textContent ?? "", panel.dataset.geolibreSampleLayerName);
			layerNameInput.value = nextName;
			if (nextName !== currentName) panel.dataset.geolibreSampleLayerName = nextName;
		}
		deferApplyDefaults();
	});
	applyDefaults();
}
/**
* The Layer name to show after a sample tileset is picked. A blank name, the
* "3D Tiles" default, or the name the previous sample pick filled in is
* replaced by the picked sample's label, so switching samples renames the
* layer; any other name is one the user typed and is kept.
*
* @param currentName - The Layer name field's current value.
* @param sampleLabel - The label of the sample that was just picked.
* @param lastSampleName - The name the previous sample pick filled in, if any.
* @returns The Layer name to put in the field.
*/
function threeDTilesSampleLayerName(currentName, sampleLabel, lastSampleName) {
	const label = sampleLabel.trim();
	if (!label) return currentName;
	const current = currentName.trim();
	return !current || current === "3D Tiles" || !!lastSampleName && current === lastSampleName.trim() ? label : currentName;
}
/**
* One tileset entry built from what the user typed in the panel, for the
* renderers that add the store record themselves instead of letting the
* library's `loadTileset` do it.
*
* @param control - The panel's control, read for the opacity slider.
* @param panel - The panel DOM holding the form fields.
* @param url - The tileset URL, already trimmed and known non-empty.
* @param status - The status to record on the new entry.
* @param defaultName - Name to use when the Layer name field is blank.
* @returns The tileset entry, with a fresh id.
*/
function threeDTilesItemStateFromPanel(control, panel, url, status, defaultName = "3D Tiles") {
	const id = `tiles-${crypto.randomUUID()}`;
	return {
		id,
		layerId: `${id}-tiles`,
		tilesetUrl: url,
		layerName: panel.querySelector("input[aria-label=\"Layer name\"]")?.value.trim() || defaultName,
		altitudeOffset: numberInputValue(panel.querySelector("input[aria-label=\"Altitude offset\"]")?.value, 0),
		opacity: control.getState().opacity,
		visible: panel.querySelector("input[aria-label=\"Visible on load\"]")?.checked ?? true,
		requestHeaders: parseThreeDTilesRequestHeaders(panel.querySelector("textarea[aria-label=\"Request headers\"]")?.value ?? ""),
		status
	};
}
/**
* Shows a message in the panel's own status line, the way the library does for
* its load errors.
*
* @param panel - The panel DOM.
* @param key - Translation key for the message.
* @param message - English fallback, used when no catalog entry is found.
*/
function setThreeDTilesPanelError(panel, key, message) {
	const status = panel.querySelector(".three-d-tiles-status");
	if (!status) return;
	status.dataset.status = "error";
	status.textContent = activeThreeDTilesApp?.translate?.(key, message) ?? message;
}
/**
* The name to give a tileset whose Layer name field was left blank, matching
* what each flavour's own panel path would have named it.
*
* @param url - The tileset URL.
* @returns The default display name.
*/
function threeDTilesDefaultLayerName(url) {
	if (isArcgisI3sSceneLayerUrl(url)) return arcgisI3sSceneLayerName(url) || layerNameFromUrl(url, "ArcGIS I3S Scene Layer");
	if (isGooglePhotorealisticTilesetUrl(url)) return GOOGLE_PHOTOREALISTIC_TILES_LABEL;
	return "3D Tiles";
}
/**
* The store record the globe should draw for a tileset added from the panel
* (issue #2505).
*
* The globe loads all three flavours natively, but each has to keep its own
* `sourceKind`: `cesium-layer-sync` routes a scene service to
* `I3SDataProvider` on `arcgis-i3s` alone, and the two 2D restore paths find a
* Google tileset by its Google kind, so a record filed under the generic kind
* would fail to render here or be skipped after a switch to a 2D renderer.
*
* @param tileset - The panel's fields, already read into a tileset entry.
* @returns The store layer for that URL's flavour.
*/
function createThreeDTilesGlobeStoreLayer(tileset) {
	const url = tileset.tilesetUrl;
	if (isArcgisI3sSceneLayerUrl(url)) return createArcgisI3sStoreLayer({
		url,
		name: tileset.layerName,
		opacity: tileset.opacity,
		visible: tileset.visible
	});
	if (isGooglePhotorealisticTilesetUrl(url)) return createGooglePhotorealisticStoreLayer({
		name: tileset.layerName,
		altitudeOffset: tileset.altitudeOffset,
		opacity: tileset.opacity,
		visible: tileset.visible,
		requestHeaders: tileset.requestHeaders
	});
	return createThreeDTilesStoreLayer(tileset, tileset.opacity);
}
/**
* Adds a tileset to the store for the globe to draw (issue #2505).
*
* Cesium owns the tileset from here: `cesium-layer-sync` creates the
* `Cesium3DTileset` (or `I3SDataProvider`) for the record, applies the altitude
* offset and resolves the same request headers the 2D path resolves, and
* reports a load failure through the engine's readiness channel rather than
* back onto the record, so the entry is recorded as loaded rather than left
* reading "loading" forever. The panel's "Fly to tileset after load" asks the
* engine to frame the layer (`fitLayer`), which the globe defers until the
* tileset has loaded and its extent is known; without it, a tileset added
* from the world view loaded out of sight and looked as if it had not drawn.
*
* @param control - The panel's control, collapsed once the layer is added.
* @param panel - The panel DOM holding the form fields.
* @param url - The tileset URL, already trimmed and known non-empty.
*/
function addThreeDTilesLayerForGlobe(control, panel, url) {
	if (isGooglePhotorealisticTilesetUrl(url) && !getGoogleMapsApiKey()) {
		setThreeDTilesPanelError(panel, "plugin.3d-tiles.globeGoogleKeyRequired", "Google Photorealistic 3D Tiles need a Google Maps API key in Settings to load on the globe.");
		return;
	}
	const layer = createThreeDTilesGlobeStoreLayer(threeDTilesItemStateFromPanel(control, panel, url, "loaded", threeDTilesDefaultLayerName(url)));
	useAppStore.getState().addLayer(layer);
	probeArcgisI3sLayers();
	if (panel.querySelector("input[aria-label=\"Fly to tileset after load\"]")?.checked ?? true) activeThreeDTilesApp?.fitLayer?.(layer.id);
	control.collapse();
}
/**
* Adds a 3D Tiles `tileset.json` by URL, without the panel: the `?data=` deep
* link's entry point. Each renderer takes the path its own panel submit takes:
* the globe draws the store record natively, Mapbox and the ArcGIS view replay
* it through the deck.gl bridge, and MapLibre gets the control's custom layer.
*
* Google Photorealistic and I3S URLs are refused: they need an API key or a
* scene-layer probe that only the panel collects.
*
* @param app - The GeoLibre app API.
* @param url - The tileset URL.
* @param options - The layer name, and whether to frame the tileset once it loads.
* @returns The id of the store layer that was added.
* @throws When the URL is a Google or I3S source, or the control cannot mount.
*/
async function addThreeDTilesLayerFromUrl(app, url, options = {}) {
	const translate = createPluginTranslator(app, "3d-tiles");
	if (isGooglePhotorealisticTilesetUrl(url) || isArcgisI3sSceneLayerUrl(url)) throw new Error(translate("usePanel", "Open Google Photorealistic and I3S tiles from the Add 3D Tiles panel."));
	const flyTo = options.flyTo ?? true;
	let bounds = null;
	if (!flyTo) try {
		bounds = await (await __vitePreload(async () => {
			const { loadThreeDTilesBounds } = await import("./three-d-tiles-bounds-DxhgxXGm.js");
			return { loadThreeDTilesBounds };
		}, __vite__mapDeps([18,10,11,19]), import.meta.url)).loadThreeDTilesBounds(url, options.signal, translate);
	} catch (error) {
		if (options.signal?.aborted) throw error;
		throw new Error(translate("extentUnavailable", "The 3D Tiles extent could not be read for batch framing."), { cause: error });
	}
	const id = `tiles-${crypto.randomUUID()}`;
	const tileset = {
		id,
		layerId: `${id}-tiles`,
		tilesetUrl: url,
		layerName: options.name?.trim() || layerNameFromUrl(url, "3D Tiles"),
		altitudeOffset: 0,
		opacity: 1,
		visible: true,
		status: "loading"
	};
	const renderer = app.getMapRenderer?.() ?? "";
	if (renderer === "cesium") {
		const layer = createThreeDTilesGlobeStoreLayer({
			...tileset,
			status: "loaded"
		});
		if (bounds) layer.metadata.bounds = bounds;
		useAppStore.getState().addLayer(layer);
		if (flyTo) app.fitLayer?.(layer.id);
		return layer.id;
	}
	const layer = createThreeDTilesStoreLayer(tileset);
	if (bounds) layer.metadata.bounds = bounds;
	if (renderer === "mapbox" || renderer === "arcgis") {
		activeThreeDTilesApp = app;
		useAppStore.getState().addLayer(layer);
		try {
			await restoreMapboxTiles(app, flyTo ? id : void 0);
		} catch (error) {
			useAppStore.getState().removeLayer(layer.id);
			throw error;
		}
		return id;
	}
	await loadThreeDTilesModule();
	const control = runWithThreeDTilesStoreSyncSuspended(() => ensureThreeDTilesControl(app));
	if (!control) throw new Error(translate("controlUnavailable", "The 3D Tiles control could not be added to the map."));
	const map = control.getMap();
	if (!map) throw new Error(translate("controlUnavailable", "The 3D Tiles control could not be added to the map."));
	if (!map.isStyleLoaded()) await new Promise((resolve, reject) => {
		const cleanup = () => {
			clearTimeout(timer);
			map.off("idle", ready);
			options.signal?.removeEventListener("abort", aborted);
		};
		const ready = () => {
			cleanup();
			resolve();
		};
		const aborted = () => {
			cleanup();
			reject(new DOMException("3D Tiles loading was aborted.", "AbortError"));
		};
		const timer = setTimeout(() => {
			cleanup();
			reject(new Error(translate("styleTimeout", "The map style did not finish loading for 3D Tiles.")));
		}, 3e4);
		map.once("idle", ready);
		options.signal?.addEventListener("abort", aborted, { once: true });
		if (options.signal?.aborted) aborted();
	});
	if (options.signal?.aborted) throw new DOMException("3D Tiles loading was aborted.", "AbortError");
	runWithThreeDTilesStoreSyncSuspended(() => {
		showThreeDTilesControl(control);
		control.collapse();
		useAppStore.getState().addLayer(layer);
		try {
			if (!restoreThreeDTilesMapLayer(control, layer, url, flyTo)) throw new Error(translate("controlUnavailable", "The 3D Tiles control could not be added to the map."));
		} catch (error) {
			control.removeTileset(id);
			useAppStore.getState().removeLayer(id);
			throw error;
		}
	});
	return id;
}
function applyGooglePhotorealisticTilesPanelDefaults(control) {
	const panel = getThreeDTilesPanel(control);
	if (!panel) return;
	const urlInput = getThreeDTilesUrlInput(panel);
	if (!urlInput || !isGooglePhotorealisticTilesetUrl(urlInput.value)) {
		const headersInput = panel.querySelector("textarea[aria-label=\"Request headers\"]");
		if (headersInput) {
			const rawHeaders = parseThreeDTilesRequestHeaders(headersInput.value);
			rememberGoogleMapsApiKeyFromHeaders(panel, rawHeaders);
			headersInput.value = serializeThreeDTilesRequestHeaders(stripGoogleMapsApiKeyHeader(rawHeaders));
			headersInput.placeholder = THREE_D_TILES_HEADER_PLACEHOLDER;
		}
		panel.dataset.geolibreGoogleMapsApiKeyVisible = "false";
		delete panel.dataset.geolibreGoogleAltitudeApplied;
		setGooglePhotorealisticHeadersToggleVisible(panel, false);
		return;
	}
	const layerNameInput = panel.querySelector("input[aria-label=\"Layer name\"]");
	if (layerNameInput && (!layerNameInput.value.trim() || layerNameInput.value.trim() === "3D Tiles" || layerNameInput.value.trim() === layerNameFromUrl(GOOGLE_PHOTOREALISTIC_TILES_URL, "3D Tiles"))) {
		layerNameInput.value = GOOGLE_PHOTOREALISTIC_TILES_LABEL;
		panel.dataset.geolibreSampleLayerName = GOOGLE_PHOTOREALISTIC_TILES_LABEL;
	}
	const altitudeInput = panel.querySelector("input[aria-label=\"Altitude offset\"]");
	if (altitudeInput && panel.dataset.geolibreGoogleAltitudeApplied !== "true" && (!altitudeInput.value.trim() || Number(altitudeInput.value) === -300)) {
		altitudeInput.value = "0";
		panel.dataset.geolibreGoogleAltitudeApplied = "true";
	}
	const headersInput = panel.querySelector("textarea[aria-label=\"Request headers\"]");
	if (!headersInput) return;
	headersInput.placeholder = `${GOOGLE_MAPS_API_KEY_HEADER}: <your Google Maps API key>`;
	const rawHeaders = parseThreeDTilesRequestHeaders(headersInput.value);
	const panelApiKey = rememberGoogleMapsApiKeyFromHeaders(panel, rawHeaders);
	const headers = resolveThreeDTilesRequestHeaders(GOOGLE_PHOTOREALISTIC_TILES_URL, rawHeaders, panelApiKey);
	installGooglePhotorealisticHeadersToggle(panel, headersInput);
	headersInput.value = serializeGooglePhotorealisticPanelRequestHeaders(headers, panel.dataset.geolibreGoogleMapsApiKeyVisible === "true");
	setGooglePhotorealisticHeadersToggleVisible(panel, Boolean(headers?.[GOOGLE_MAPS_API_KEY_HEADER]));
}
function getThreeDTilesUrlInput(panel) {
	return panel.querySelector("input[aria-label=\"Tileset URL\"]");
}
function installGooglePhotorealisticHeadersToggle(panel, headersInput) {
	if (panel.querySelector(".geolibre-google-tiles-key-toggle")) return;
	panel.dataset.geolibreGoogleMapsApiKeyVisible = "false";
	const toggle = document.createElement("button");
	toggle.type = "button";
	toggle.className = "geolibre-google-tiles-key-toggle three-d-tiles-small-button";
	toggle.setAttribute("aria-pressed", "false");
	updateGooglePhotorealisticHeadersToggle(toggle, false);
	toggle.hidden = true;
	toggle.addEventListener("click", () => {
		const visible = panel.dataset.geolibreGoogleMapsApiKeyVisible !== "true";
		panel.dataset.geolibreGoogleMapsApiKeyVisible = visible ? "true" : "false";
		updateGooglePhotorealisticHeadersToggle(toggle, visible);
		const rawHeaders = parseThreeDTilesRequestHeaders(headersInput.value);
		const panelApiKey = rememberGoogleMapsApiKeyFromHeaders(panel, rawHeaders);
		headersInput.value = serializeGooglePhotorealisticPanelRequestHeaders(resolveThreeDTilesRequestHeaders(GOOGLE_PHOTOREALISTIC_TILES_URL, rawHeaders, panelApiKey), visible);
	});
	headersInput.closest(".three-d-tiles-field")?.insertAdjacentElement("afterend", toggle) ?? headersInput.insertAdjacentElement("afterend", toggle);
}
function setGooglePhotorealisticHeadersToggleVisible(panel, visible) {
	const toggle = panel.querySelector(".geolibre-google-tiles-key-toggle");
	if (toggle) toggle.hidden = !visible;
}
/** Labels a layer row's visibility checkbox from its `data-geolibre-toggle-name`. */
function labelThreeDTilesVisibilityToggle(input) {
	input.setAttribute("aria-label", tr("toggleLayerAria", "Toggle {{name}}", { name: input.dataset.geolibreToggleName ?? "" }));
}
/**
* Re-applies the text GeoLibre adds to the 3D Tiles panel (the API-key toggle
* and the layer rows' visibility checkboxes) after the app language changes.
* The rest of the panel is the upstream control's own DOM.
*/
function relabelThreeDTilesPanel() {
	if (typeof document === "undefined") return;
	for (const toggle of document.querySelectorAll(".geolibre-google-tiles-key-toggle")) updateGooglePhotorealisticHeadersToggle(toggle, toggle.closest("[data-geolibre-google-maps-api-key-visible]")?.dataset.geolibreGoogleMapsApiKeyVisible === "true");
	for (const input of document.querySelectorAll("input[data-geolibre-toggle-name]")) labelThreeDTilesVisibilityToggle(input);
}
function updateGooglePhotorealisticHeadersToggle(toggle, visible) {
	toggle.textContent = visible ? tr("hideKey", "Hide key") : tr("showKey", "Show key");
	toggle.setAttribute("aria-label", visible ? tr("hideKeyAria", "Hide Google Maps API key") : tr("showKeyAria", "Show Google Maps API key"));
	toggle.setAttribute("aria-pressed", visible ? "true" : "false");
}
async function addGooglePhotorealisticTilesFromPanel(control, panel) {
	const app = activeThreeDTilesApp;
	if (!app) return;
	const submittedUrl = getThreeDTilesUrlInput(panel)?.value.trim();
	if (submittedUrl && urlHasKeyQueryParam(submittedUrl)) console.warn("[GeoLibre] Ignoring the `key` query parameter in the Google Photorealistic 3D Tiles URL; the API key is taken from VITE_GOOGLE_MAPS_API_KEY (or the X-GOOG-API-KEY request header) instead.");
	const name = panel.querySelector("input[aria-label=\"Layer name\"]")?.value.trim() || GOOGLE_PHOTOREALISTIC_TILES_LABEL;
	const rawHeaders = parseThreeDTilesRequestHeaders(panel.querySelector("textarea[aria-label=\"Request headers\"]")?.value ?? "");
	const manualGoogleMapsApiKey = rememberGoogleMapsApiKeyFromHeaders(panel, rawHeaders);
	const headers = resolveThreeDTilesRequestHeaders(GOOGLE_PHOTOREALISTIC_TILES_URL, rawHeaders, manualGoogleMapsApiKey);
	const flyToOnLoad = panel.querySelector("input[aria-label=\"Fly to tileset after load\"]")?.checked ?? true;
	const visible = panel.querySelector("input[aria-label=\"Visible on load\"]")?.checked ?? true;
	const opacity = numberValue(control.getState().opacity, 1);
	addGooglePhotorealisticTilesLayer(app, {
		name,
		altitudeOffset: numberInputValue(panel.querySelector("input[aria-label=\"Altitude offset\"]")?.value, numberValue(control.getState().altitudeOffset, 0)),
		opacity,
		visible,
		requestHeaders: headers,
		googleMapsApiKey: manualGoogleMapsApiKey,
		flyTo: flyToOnLoad,
		map: control.getMap()
	});
	control.collapse();
	updateDeckTilesPanelList(control);
}
/**
* Intercept the 3D Tiles panel submit for ArcGIS I3S Scene Layer URLs and route
* them to the deck.gl I3S overlay, since maplibre-gl-3d-tiles' three.js renderer
* only handles OGC 3D Tiles. Mirrors the Google Photorealistic interception.
*/
function installArcgisI3sTilesPanelHandlers(control, panel) {
	if (panel.dataset.geolibreI3sTilesHandler === "true") return;
	panel.dataset.geolibreI3sTilesHandler = "true";
	const urlInput = getThreeDTilesUrlInput(panel);
	panel.addEventListener("submit", (event) => {
		if (!(event.target instanceof HTMLElement) || !event.target.classList.contains("three-d-tiles-form")) return;
		if (!isArcgisI3sSceneLayerUrl(urlInput?.value ?? "")) return;
		event.preventDefault();
		event.stopImmediatePropagation();
		addArcgisI3sTilesFromPanel(control, panel);
	}, { capture: true });
}
function addArcgisI3sTilesFromPanel(control, panel) {
	const app = activeThreeDTilesApp;
	if (!app) {
		console.warn("[GeoLibre] ArcGIS I3S submit ignored: no active 3D Tiles app");
		return;
	}
	const url = getThreeDTilesUrlInput(panel)?.value.trim();
	if (!url) {
		console.warn("[GeoLibre] ArcGIS I3S submit ignored: empty URL");
		return;
	}
	const name = panel.querySelector("input[aria-label=\"Layer name\"]")?.value.trim() || arcgisI3sSceneLayerName(url) || layerNameFromUrl(url, "ArcGIS I3S Scene Layer");
	const flyTo = panel.querySelector("input[aria-label=\"Fly to tileset after load\"]")?.checked ?? true;
	const visible = panel.querySelector("input[aria-label=\"Visible on load\"]")?.checked ?? true;
	addArcgisI3sTilesLayer(app, {
		url,
		name,
		opacity: numberValue(control.getState().opacity, 1),
		visible,
		flyTo
	});
	control.collapse();
}
function restoreGooglePhotorealisticTilesLayers(app) {
	if (useAppStore.getState().layers.some(isGooglePhotorealisticTilesLayer)) ensureGooglePhotorealisticTilesOverlay(app);
}
/**
* The store record for a Google Photorealistic 3D Tiles layer.
*
* Split from {@link addGooglePhotorealisticTilesLayer} so the globe, which
* loads the tileset itself and needs no deck.gl overlay, records the same
* shape. The `sourceKind` matters beyond the render in progress: it is what
* `isGooglePhotorealisticTilesLayer` looks for, so a Google tileset filed as a
* plain `3d-tiles-url` record would be skipped by both restore paths if the
* user later switched to a 2D renderer (issue #2505).
*
* @param options Display name, altitude offset, opacity, visibility, headers.
* @returns The store layer, with a fresh id.
*/
function createGooglePhotorealisticStoreLayer(options) {
	const id = `${GOOGLE_PHOTOREALISTIC_LAYER_ID_PREFIX}-${crypto.randomUUID()}`;
	const deckLayerId = `${id}-deck`;
	return {
		id,
		name: options.name,
		type: "3d-tiles",
		source: {
			sourceId: id,
			type: GOOGLE_PHOTOREALISTIC_SOURCE_KIND,
			url: GOOGLE_PHOTOREALISTIC_TILES_URL,
			altitudeOffset: options.altitudeOffset,
			requestHeaders: persistedThreeDTilesRequestHeaders(GOOGLE_PHOTOREALISTIC_TILES_URL, options.requestHeaders)
		},
		visible: options.visible,
		opacity: options.opacity,
		style: { ...DEFAULT_LAYER_STYLE },
		metadata: {
			customLayerType: GOOGLE_PHOTOREALISTIC_SOURCE_KIND,
			externalDeckLayer: true,
			externalNativeLayer: true,
			identifiable: false,
			nativeLayerIds: [deckLayerId],
			sourceId: id,
			sourceKind: GOOGLE_PHOTOREALISTIC_SOURCE_KIND,
			bounds: [
				-180,
				-85,
				180,
				85
			],
			altitudeOffset: options.altitudeOffset
		},
		sourcePath: GOOGLE_PHOTOREALISTIC_TILES_URL
	};
}
function addGooglePhotorealisticTilesLayer(app, options) {
	const layer = createGooglePhotorealisticStoreLayer(options);
	const id = layer.id;
	if (options.googleMapsApiKey) googleTilesApiKeysByLayerId.set(id, options.googleMapsApiKey);
	useAppStore.getState().addLayer(layer);
	ensureGooglePhotorealisticTilesOverlay(app);
	if (options.flyTo) flyToGooglePhotorealisticTiles(app, options.map);
	return id;
}
function updateDeckTilesPanelList(control) {
	const panel = getThreeDTilesPanel(control);
	if (!panel) return;
	const nativeTilesetCount = control?.getState().tilesets.length ?? 0;
	const googleLayers = useAppStore.getState().layers.filter((layer) => isGooglePhotorealisticTilesLayer(layer) || isStoreDrivenThreeDTilesRenderer() && isMapboxTilesLayer(layer));
	const nativeStatus = panel.querySelector(".three-d-tiles-status");
	if (nativeStatus) nativeStatus.hidden = nativeTilesetCount === 0 && googleLayers.length > 0;
	const googleList = ensureDeckTilesPanelList(panel);
	googleList.hidden = googleLayers.length === 0;
	const idSignature = googleLayers.map((layer) => `${layer.id}:${hasThreeDTilesFlyTarget(layer) ? 1 : 0}`).join("|");
	if (googleList.dataset.geolibreGoogleListIds === idSignature) {
		for (const layer of googleLayers) {
			const item = Array.from(googleList.children).find((child) => child.dataset.layerId === layer.id);
			const status = item?.querySelector(".three-d-tiles-list-status");
			if (status) {
				status.textContent = String(layer.metadata.error ?? layer.metadata.status ?? "loaded");
				status.dataset.status = String(layer.metadata.status ?? "loaded");
			}
			const visible = item?.querySelector("input[type=\"checkbox\"]");
			if (visible) visible.checked = layer.visible;
			const opacity = item?.querySelector("input[type=\"range\"]");
			if (opacity) opacity.value = String(layer.opacity);
		}
		return;
	}
	googleList.dataset.geolibreGoogleListIds = idSignature;
	googleList.replaceChildren();
	if (googleLayers.length === 0) return;
	for (const layer of googleLayers) googleList.appendChild(createDeckTilesPanelListItem(layer));
}
function ensureDeckTilesPanelList(panel) {
	const existing = panel.querySelector(".geolibre-google-tiles-list");
	if (existing) return existing;
	const googleList = document.createElement("div");
	googleList.className = "geolibre-google-tiles-list three-d-tiles-list";
	googleList.hidden = true;
	const nativeList = panel.querySelector(".three-d-tiles-list");
	if (nativeList) nativeList.insertAdjacentElement("afterend", googleList);
	else panel.appendChild(googleList);
	return googleList;
}
/**
* Whether this list entry has somewhere to fly to.
*
* The Google tiles always do (a fixed initial view). A tileset entry flies to
* the centre recorded when it loaded, which the 2D renderers write onto the
* record and the globe never does: Cesium owns the tileset there and reports no
* centre back, so the control offers no Fly button rather than one that would
* do nothing (issue #2505).
*
* @param layer - The store layer behind the list entry.
* @returns True when a Fly control would move the camera.
*/
function hasThreeDTilesFlyTarget(layer) {
	if (!isMapboxTilesLayer(layer)) return true;
	return Array.isArray(useAppStore.getState().layers.find(({ id }) => id === layer.id)?.metadata.center);
}
function createDeckTilesPanelListItem(layer) {
	const item = document.createElement("div");
	item.className = "geolibre-google-tiles-list-item three-d-tiles-list-item active";
	item.dataset.layerId = layer.id;
	const meta = document.createElement("div");
	meta.className = "three-d-tiles-list-meta";
	const title = document.createElement("button");
	title.className = "three-d-tiles-list-title";
	title.type = "button";
	title.textContent = layer.name || GOOGLE_PHOTOREALISTIC_TILES_LABEL;
	const flyToLayer = () => {
		if (isMapboxTilesLayer(layer)) {
			const current = useAppStore.getState().layers.find(({ id }) => id === layer.id);
			const center = current?.metadata.center;
			if (Array.isArray(center) && activeThreeDTilesApp) flyToDeckTilesLocation(activeThreeDTilesApp, [Number(center[0]), Number(center[1])], Number(current?.metadata.zoom ?? 16));
		} else if (googleTilesApp) flyToGooglePhotorealisticTiles(googleTilesApp);
	};
	const canFly = hasThreeDTilesFlyTarget(layer);
	if (canFly) title.addEventListener("click", flyToLayer);
	else title.disabled = true;
	const url = document.createElement("span");
	url.className = "three-d-tiles-list-url";
	url.textContent = String(layer.source.url ?? GOOGLE_PHOTOREALISTIC_TILES_URL);
	const status = document.createElement("span");
	status.className = "three-d-tiles-list-status";
	status.dataset.status = String(layer.metadata.status ?? "loaded");
	status.textContent = String(layer.metadata.error ?? layer.metadata.status ?? "loaded");
	meta.appendChild(title);
	meta.appendChild(url);
	meta.appendChild(status);
	const actions = document.createElement("div");
	actions.className = "three-d-tiles-list-actions";
	const visible = document.createElement("input");
	visible.type = "checkbox";
	visible.checked = layer.visible;
	visible.dataset.geolibreToggleName = layer.name || GOOGLE_PHOTOREALISTIC_TILES_LABEL;
	labelThreeDTilesVisibilityToggle(visible);
	visible.addEventListener("change", () => {
		useAppStore.getState().updateLayer(layer.id, { visible: visible.checked });
	});
	const opacity = document.createElement("input");
	opacity.className = "three-d-tiles-opacity";
	opacity.type = "range";
	opacity.min = "0";
	opacity.max = "1";
	opacity.step = "0.05";
	opacity.value = String(layer.opacity);
	opacity.setAttribute("aria-label", `Opacity for ${layer.name || GOOGLE_PHOTOREALISTIC_TILES_LABEL}`);
	opacity.addEventListener("input", () => {
		const nextOpacity = Number(opacity.value);
		if (Number.isFinite(nextOpacity)) useAppStore.getState().updateLayer(layer.id, { opacity: nextOpacity });
	});
	const flyTo = createGooglePhotorealisticTilesPanelSmallButton("Fly");
	flyTo.addEventListener("click", flyToLayer);
	const remove = createGooglePhotorealisticTilesPanelSmallButton("Remove");
	remove.addEventListener("click", () => {
		useAppStore.getState().removeLayer(layer.id);
	});
	actions.appendChild(visible);
	actions.appendChild(opacity);
	if (canFly) actions.appendChild(flyTo);
	actions.appendChild(remove);
	item.appendChild(meta);
	item.appendChild(actions);
	return item;
}
function createGooglePhotorealisticTilesPanelSmallButton(label) {
	const button = document.createElement("button");
	button.className = "three-d-tiles-small-button";
	button.type = "button";
	button.textContent = label;
	return button;
}
function flyToGooglePhotorealisticTiles(app, mapOverride) {
	forceGooglePhotorealisticMercatorProjection(app, mapOverride);
	useAppStore.getState().setMapView({
		...GOOGLE_PHOTOREALISTIC_INITIAL_VIEW,
		bbox: void 0
	}, false);
	const map = mapOverride ?? app.getMap?.() ?? app.getMapboxMap?.();
	if (!map) {
		app.fitBounds?.([
			14.35,
			50.05,
			14.49,
			50.12
		]);
		return;
	}
	map.flyTo({
		...GOOGLE_PHOTOREALISTIC_INITIAL_VIEW,
		essential: true
	});
}
function forceGooglePhotorealisticMercatorProjection(app, mapOverride) {
	acquireMercatorProjectionLock(GOOGLE_PROJECTION_LOCK_KEY, app, mapOverride ?? app.getMap?.());
}
function restoreGooglePhotorealisticPreviousProjection() {
	if (!googleTilesApp) return;
	releaseMercatorProjectionLock(GOOGLE_PROJECTION_LOCK_KEY, googleTilesApp);
}
function isGooglePhotorealisticTilesLayer(layer) {
	return layer.type === "3d-tiles" && (layer.metadata.sourceKind === GOOGLE_PHOTOREALISTIC_SOURCE_KIND || isGooglePhotorealisticTilesetLayerUrl(layer));
}
function ensureGooglePhotorealisticTilesOverlay(app) {
	if (ensureGoogleTilesOverlayInFlight) return ensureGoogleTilesOverlayInFlight;
	ensureGoogleTilesOverlayInFlight = runEnsureGooglePhotorealisticTilesOverlay(app).finally(() => {
		ensureGoogleTilesOverlayInFlight = null;
	});
	return ensureGoogleTilesOverlayInFlight;
}
async function runEnsureGooglePhotorealisticTilesOverlay(app) {
	googleTilesApp = app;
	if (!app.getDeckGL) return;
	googleTilesDeckGL ??= await app.getDeckGL();
	await ensureSharedDeckOverlay(app);
	lastGoogleTilesLayerSignature = null;
	addGoogleTilesRuntimeEnvListener();
	googleTilesStoreUnsubscribe ??= useAppStore.subscribe((state, previous) => {
		if (state.layers !== previous.layers) {
			const currentGoogleLayerIds = new Set(state.layers.filter(isGooglePhotorealisticTilesLayer).map(({ id }) => id));
			for (const layer of previous.layers) if (isGooglePhotorealisticTilesLayer(layer) && !currentGoogleLayerIds.has(layer.id)) googleTilesApiKeysByLayerId.delete(layer.id);
			renderGooglePhotorealisticTilesLayers();
		}
	});
	renderGooglePhotorealisticTilesLayers();
}
function addGoogleTilesRuntimeEnvListener() {
	if (googleTilesRuntimeEnvUnsubscribe || typeof window === "undefined") return;
	const handleRuntimeEnvChange = () => {
		lastGoogleTilesLayerSignature = null;
		renderGooglePhotorealisticTilesLayers();
	};
	window.addEventListener("geolibre:runtime-env-change", handleRuntimeEnvChange);
	googleTilesRuntimeEnvUnsubscribe = () => {
		window.removeEventListener("geolibre:runtime-env-change", handleRuntimeEnvChange);
	};
}
function renderGooglePhotorealisticTilesLayers() {
	if (!googleTilesDeckGL || !googleTilesApp) return;
	const layers = useAppStore.getState().layers.filter(isGooglePhotorealisticTilesLayer);
	if (layers.length === 0) {
		if (lastGoogleTilesLayerSignature !== null) {
			setSharedDeckLayers("google-3d-tiles", []);
			lastGoogleTilesLayerSignature = null;
			restoreGooglePhotorealisticPreviousProjection();
		}
		return;
	}
	forceGooglePhotorealisticMercatorProjection(googleTilesApp);
	const signature = googleTilesLayerSignature(layers);
	if (signature === lastGoogleTilesLayerSignature) return;
	lastGoogleTilesLayerSignature = signature;
	const deckLayers = layers.filter((layer) => layer.visible).map((layer) => buildGooglePhotorealisticTilesDeckLayer(layer)).filter((layer) => layer !== null).reverse();
	setSharedDeckLayers("google-3d-tiles", deckLayers);
}
function googleTilesLayerSignature(layers) {
	return layers.map((layer) => {
		const headers = resolveProjectHeaderReferences(stringRecordValue(layer.source.requestHeaders));
		const altitudeOffset = numberValue(layer.source.altitudeOffset, 0);
		const headerEntries = headers ? JSON.stringify(Object.entries(headers).sort(([left], [right]) => left.localeCompare(right))) : "";
		return `${layer.id}:${layer.visible ? 1 : 0}:${layer.opacity}:${altitudeOffset}:${headerEntries}`;
	}).join("|");
}
function buildGooglePhotorealisticTilesDeckLayer(layer) {
	if (!googleTilesDeckGL) return null;
	const altitudeOffset = numberValue(layer.source.altitudeOffset, 0);
	const requestHeaders = resolveThreeDTilesRequestHeaders(GOOGLE_PHOTOREALISTIC_TILES_URL, resolveProjectHeaderReferences(stringRecordValue(layer.source.requestHeaders)), googleTilesApiKeysByLayerId.get(layer.id));
	return new (getGoogleAltitudeOffsetTile3DLayerClass())({
		id: googlePhotorealisticTilesDeckLayerId(layer),
		data: GOOGLE_PHOTOREALISTIC_TILES_URL,
		altitudeOffset,
		loadOptions: {
			...THREE_D_TILES_DECK_LOAD_OPTIONS,
			fetch: requestHeaders ? { headers: requestHeaders } : void 0
		},
		onTilesetLoad: applyThreeDTilesTilesetMemoryLimit,
		opacity: layer.opacity,
		pickable: false,
		operation: "draw"
	});
}
function getGoogleAltitudeOffsetTile3DLayerClass() {
	if (googleAltitudeOffsetTile3DLayerClass) return googleAltitudeOffsetTile3DLayerClass;
	if (!googleTilesDeckGL) throw new Error("deck.gl modules are not loaded");
	const BaseLayer = googleTilesDeckGL.geoLayers.Tile3DLayer;
	googleAltitudeOffsetTile3DLayerClass = class extends BaseLayer {
		static componentName = "GoogleAltitudeOffsetTile3DLayer";
		renderLayers() {
			const altitudeOffset = numberValue(this.props.altitudeOffset, 0);
			return offsetGooglePhotorealisticTileLayers(super.renderLayers(), altitudeOffset);
		}
	};
	return googleAltitudeOffsetTile3DLayerClass;
}
function offsetGooglePhotorealisticTileLayers(layers, altitudeOffset) {
	if (!Number.isFinite(altitudeOffset) || altitudeOffset === 0) return layers;
	if (Array.isArray(layers)) return layers.map((layer) => offsetGooglePhotorealisticTileLayers(layer, altitudeOffset));
	if (!isDeckLayerInstance(layers)) return layers;
	return layers.clone({ modelMatrix: translatedModelMatrix(matrix16Value(layers.props.modelMatrix), altitudeOffset) });
}
function translatedModelMatrix(modelMatrix, altitudeOffset) {
	const source = modelMatrix ?? [
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1
	];
	const translated = [...source];
	translated[12] = source[12] + source[8] * altitudeOffset;
	translated[13] = source[13] + source[9] * altitudeOffset;
	translated[14] = source[14] + source[10] * altitudeOffset;
	translated[15] = source[15] + source[11] * altitudeOffset;
	return translated;
}
function matrix16Value(value) {
	if (!isArrayLike(value)) return null;
	const values = Array.from(value);
	if (values.length === 16 && values.every((entry) => typeof entry === "number")) return values;
	return null;
}
function isDeckLayerInstance(value) {
	return isRecord(value) && isRecord(value.props) && typeof value.clone === "function";
}
function googlePhotorealisticTilesDeckLayerId(layer) {
	const nativeLayerIds = layer.metadata.nativeLayerIds;
	if (Array.isArray(nativeLayerIds)) {
		const deckLayerId = nativeLayerIds.find((value) => typeof value === "string" && value.trim().length > 0);
		if (deckLayerId) return deckLayerId;
	}
	return `${layer.id}-deck`;
}
function getThreeDTilesPanel(control) {
	return control?.getMap()?.getContainer().querySelector(".three-d-tiles-control-panel") ?? null;
}
function installThreeDTilesToggleHandler(control) {
	if (!control) return;
	const toggleButton = control.getContainer()?.querySelector(".three-d-tiles-control-toggle");
	if (!toggleButton || toggleButton.dataset.geolibreToggleHandler === "true") return;
	toggleButton.dataset.geolibreToggleHandler = "true";
	toggleButton.addEventListener("click", () => {
		threeDTilesPanelPinned = false;
		window.setTimeout(() => {
			threeDTilesPanelPinned = !control.getState().collapsed;
		}, 0);
	}, { capture: true });
}
function installThreeDTilesCloseHandler(control, panel) {
	const closeButton = panel?.querySelector(".three-d-tiles-control-close");
	if (!closeButton || closeButton.dataset.geolibreCloseHandler === "true") return;
	closeButton.dataset.geolibreCloseHandler = "true";
	closeButton.addEventListener("click", () => {
		threeDTilesPanelPinned = false;
		window.setTimeout(() => hideThreeDTilesControl(control), 0);
	});
}
function keepThreeDTilesPanelExpanded(control) {
	if (!threeDTilesPanelPinned || !control.getState().collapsed) return;
	window.setTimeout(() => {
		if (threeDTilesPanelPinned && control.getState().collapsed) control.expand();
	}, 0);
}
function setThreeDTilesOpacity(control, id, opacity) {
	runWithThreeDTilesStoreSyncSuspended(() => {
		control.setOpacity(opacity, id, false);
	});
}
function setThreeDTilesAltitudeOffset(control, id, altitudeOffset) {
	runWithThreeDTilesStoreSyncSuspended(() => {
		control.setAltitudeOffset(altitudeOffset, id, false);
	});
}
function runWithThreeDTilesStoreSyncSuspended(callback) {
	threeDTilesStoreSyncSuspended += 1;
	try {
		return callback();
	} finally {
		threeDTilesStoreSyncSuspended -= 1;
	}
}
function isThreeDTilesStoreSyncSuspended() {
	return threeDTilesStoreSyncSuspended > 0;
}
function threeDTilesPanelCollapsedFromLayers(layers) {
	const panelCollapsed = layers.find((layer) => typeof layer.metadata.panelCollapsed === "boolean")?.metadata.panelCollapsed;
	return typeof panelCollapsed === "boolean" ? panelCollapsed : true;
}
function validThreeDTilesBeforeId(control, beforeId) {
	if (!beforeId) return void 0;
	const map = control.getMap();
	if (!map || !hasStyleLayerApi(map)) return void 0;
	return map.getLayer(beforeId) ? beforeId : void 0;
}
/**
* Whether the map behind the control is a real MapLibre style map rather than a
* facade.
*
* A control mounted on the Cesium globe is handed `CesiumMapFacade`, which
* implements the camera and container API but no style layers: `getLayer` is
* absent outright (calling it is a `TypeError`) and `addLayer` throws by
* design. The renderer guards above keep the custom-layer paths off the globe;
* this is the last line of defence for any caller that reaches them anyway
* (issue #2505).
*/
function hasStyleLayerApi(map) {
	return typeof map.getLayer === "function" && typeof map.addLayer === "function";
}
function restoredThreeDTilesLayerId(layer) {
	const nativeLayerIds = layer.metadata.nativeLayerIds;
	if (Array.isArray(nativeLayerIds)) {
		const layerId = nativeLayerIds.find((value) => typeof value === "string" && value.trim().length > 0);
		if (layerId) return layerId;
	}
	return `${THREE_D_TILES_LAYER_ID}-${layer.id}`;
}
function getThreeDTilesControlLayers(control) {
	const layers = control._layers;
	if (!(layers instanceof Map)) {
		console.warn("[GeoLibre] ThreeDTilesControl._layers unavailable; skipping 3D Tiles restore. The library internals may have changed.");
		return null;
	}
	return layers;
}
function getThreeDTilesDecoderOptions(control) {
	const options = control._options;
	if (!options?.dracoDecoderPath || !options?.ktx2TranscoderPath) console.warn(`[GeoLibre] ThreeDTilesControl decoder paths unavailable; falling back to unpkg three@${THREE_VERSION}. Compressed tilesets will fail offline.`);
	return {
		dracoDecoderPath: options?.dracoDecoderPath ?? DEFAULT_DRACO_DECODER_PATH,
		ktx2TranscoderPath: options?.ktx2TranscoderPath ?? DEFAULT_KTX2_TRANSCODER_PATH
	};
}
function moveThreeDTilesMapLayer(map, layerId, beforeId) {
	if (!map?.getLayer(layerId)) return;
	try {
		if (beforeId && beforeId !== layerId && map.getLayer(beforeId)) {
			map.moveLayer(layerId, beforeId);
			return;
		}
		map.moveLayer(layerId);
	} catch {}
}
function stringValue(value) {
	return typeof value === "string" && value.trim() ? value : void 0;
}
function numberValue(value, fallback) {
	return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function numberInputValue(value, fallback) {
	if (typeof value !== "string" || value.trim() === "") return fallback;
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : fallback;
}
function optionalNumberValue(value) {
	return typeof value === "number" && Number.isFinite(value) ? value : void 0;
}
function lngLatPairValue(value) {
	if (Array.isArray(value) && value.length >= 2 && typeof value[0] === "number" && typeof value[1] === "number" && Number.isFinite(value[0]) && Number.isFinite(value[1]) && Math.abs(value[0]) <= 180 && Math.abs(value[1]) <= 90) return [value[0], value[1]];
}
function stringRecordValue(value) {
	if (!isRecord(value)) return void 0;
	const entries = Object.entries(value).filter((entry) => entry[0].trim() !== "" && typeof entry[1] === "string");
	return entries.length > 0 ? Object.fromEntries(entries) : void 0;
}
function rememberGoogleMapsApiKeyFromHeaders(panel, headers) {
	const apiKey = googleMapsApiKeyHeaderValue(headers);
	if (apiKey) {
		googleTilesApiKeysByPanel.set(panel, apiKey);
		return apiKey;
	}
	return googleTilesApiKeysByPanel.get(panel);
}
function isGooglePhotorealisticTilesetLayerUrl(layer) {
	const url = stringValue(layer.source.url) ?? layer.sourcePath;
	return url ? isGooglePhotorealisticTilesetUrl(url) : false;
}
function urlHasKeyQueryParam(url) {
	try {
		return new URL(url).searchParams.has("key");
	} catch {
		return false;
	}
}
function parseThreeDTilesRequestHeaders(text) {
	const headers = {};
	for (const line of text.split("\n")) {
		const separator = line.indexOf(":");
		if (separator === -1) continue;
		const name = line.slice(0, separator).trim();
		if (!name) continue;
		headers[name] = line.slice(separator + 1).trim();
	}
	return nonEmptyRecord(headers);
}
function serializeThreeDTilesRequestHeaders(headers) {
	if (!headers) return "";
	return Object.entries(headers).map(([name, value]) => `${name}: ${value}`).join("\n");
}
function serializeGooglePhotorealisticPanelRequestHeaders(headers, showApiKey) {
	if (!headers) return "";
	if (showApiKey) return serializeThreeDTilesRequestHeaders(headers);
	return serializeThreeDTilesRequestHeaders(Object.fromEntries(Object.entries(headers).map(([name, value]) => [name, name.toLowerCase() === "X-GOOG-API-KEY".toLowerCase() ? GOOGLE_MAPS_API_KEY_MASK : value])));
}
function recordsEqual(left, right) {
	const keys = /* @__PURE__ */ new Set([...Object.keys(left), ...Object.keys(right)]);
	for (const key of keys) if (!valuesEqual(left[key], right[key])) return false;
	return true;
}
function valuesEqual(left, right) {
	if (Array.isArray(left) || Array.isArray(right)) {
		if (!Array.isArray(left) || !Array.isArray(right)) return false;
		if (left.length !== right.length) return false;
		return left.every((value, index) => valuesEqual(value, right[index]));
	}
	if (isRecord(left) || isRecord(right)) return isRecord(left) && isRecord(right) && recordsEqual(left, right);
	return Object.is(left, right);
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isArrayLike(value) {
	return typeof value === "object" && value !== null && "length" in value && typeof value.length === "number";
}
function layerNameFromUrl(url, fallback) {
	try {
		const parsed = new URL(url);
		const segments = parsed.pathname.split("/").filter(Boolean);
		const fileName = segments.at(-1);
		const parentName = segments.at(-2);
		return parentName && fileName ? `${parentName}/${fileName}` : fileName ?? parsed.hostname;
	} catch {
		return fallback;
	}
}
// ../../packages/plugins/src/plugins/time-slider-pixel-identify.ts
/** Raised when the click falls outside the data rather than failing to read it.
* The caller reports "no data here" instead of an error. */
var PixelOutsideCoverageError = class extends Error {
	constructor(message = "The clicked point is outside this layer's coverage.") {
		super(message);
		this.name = "PixelOutsideCoverageError";
	}
};
/**
* Whether a Time Slider source spec exposes readable source pixels.
*
* @param type - The spec's `type` discriminant.
* @returns True for `cog` and `mosaic` sources.
*/
function isPixelIdentifiableSourceType(type) {
	return type === "cog" || type === "mosaic";
}
/**
* Resolves the concrete COG URL to range-read for one source at one date.
*
* A COG source resolves straight to the file. A mosaic resolves to a manifest
* listing many COGs, so the asset covering the click has to be found first —
* except when the "mosaic" is really an engine-rewritten COG (see
* {@link usesMosaicManifest}), which is read directly.
*
* Shared with the pixel time-series module so a value charted over time and a
* value identified at the current date are always read from the same file.
*
* @param spec - The COG or mosaic source spec.
* @param resolvedUrl - The URL the spec's template resolved to for this date.
* @param lngLat - The clicked location, `[lng, lat]` in WGS84.
* @param signal - Aborts the manifest fetch.
* @returns The COG URL to read, or null when a mosaic has no asset covering the
*   point.
* @throws When the manifest cannot be fetched (network, CORS, or no file for
*   this date).
*/
async function resolvePixelReadUrl(spec, resolvedUrl, lngLat, signal) {
	if (!usesMosaicManifest(spec, resolvedUrl)) return resolvedUrl;
	const { loadMosaic, MosaicUnsupportedError } = await __vitePreload(async () => {
		const { loadMosaic, MosaicUnsupportedError } = await import("./dist-Ao5iO9xN.js");
		return {
			loadMosaic,
			MosaicUnsupportedError
		};
	}, __vite__mapDeps([20,21,22,23,14,24,5,25,4,3,8,26,27,28,29,7,30,31,32,33,34,35,36,37,38,39,13]), import.meta.url);
	try {
		return pickMosaicAsset((await loadMosaic(resolvedUrl, signal)).assets, lngLat);
	} catch (error) {
		if (error instanceof MosaicUnsupportedError) return resolvedUrl;
		throw error;
	}
}
/**
* Look up a Time Slider source by id, when it is pixel-readable.
*
* @param sourceId - The source id (equals the mirrored store layer id).
* @returns The COG or mosaic spec, or null when the dock is closed, the id is
*   unknown, or the source is an XYZ/WMS/GeoJSON one.
*/
function getPixelIdentifiableSource(sourceId) {
	const control = getActiveTimeSliderControl();
	if (!control) return null;
	const spec = control.getSources().find((candidate) => candidate.id === sourceId);
	if (!spec || !isPixelIdentifiableSourceType(spec.type)) return null;
	return spec;
}
/** Format a date as `YYYY-MM-DD` in UTC, matching the pixel-series module. */
function isoDate$1(date) {
	return date.toISOString().slice(0, 10);
}
/** Whether a WGS84 point falls inside a `[minX, minY, maxX, maxY]` bbox. */
function bboxContains(bbox, lng, lat) {
	return lng >= bbox[0] && lng <= bbox[2] && lat >= bbox[1] && lat <= bbox[3];
}
/**
* Pick the mosaic asset to read a point from.
*
* Mosaic assets overlap at their seams, so a point can fall inside several
* bboxes. Prefer the smallest matching asset: overlapping tiles in a mosaic are
* conventionally ordered coarse-to-fine, and the tighter bbox is the one whose
* centre the point is nearest, so it is the least likely to be reading the
* feathered edge of a neighbouring scene.
*
* @param assets - The parsed mosaic's assets.
* @param lngLat - The clicked location, `[lng, lat]` in WGS84.
* @returns The asset URL to read, or null when no asset covers the point.
*/
function pickMosaicAsset(assets, lngLat) {
	const [lng, lat] = lngLat;
	let best = null;
	for (const asset of assets) {
		if (!bboxContains(asset.bbox, lng, lat)) continue;
		const area = (asset.bbox[2] - asset.bbox[0]) * (asset.bbox[3] - asset.bbox[1]);
		if (!best || area < best.area) best = {
			url: asset.url,
			area
		};
	}
	return best?.url ?? null;
}
/**
* Read every band value at one point for a Time Slider COG or mosaic source, at
* the timeline's current date.
*
* @param sourceId - The source id (equals the mirrored store layer id).
* @param lngLat - The clicked location, `[lng, lat]` in WGS84.
* @param options - Optional abort signal.
* @returns The reading, or null when the pixel falls outside the image grid.
* @throws {PixelOutsideCoverageError} When a mosaic has no asset covering the
*   point — a miss in space rather than a failed read.
* @throws When the source is unknown/not pixel-readable, or the COG cannot be
*   opened (network, CORS, or a missing file for this date).
*/
async function identifyTimeSliderPixel(sourceId, lngLat, options = {}) {
	const { signal } = options;
	const control = getActiveTimeSliderControl();
	const spec = getPixelIdentifiableSource(sourceId);
	if (!control || !spec) throw new Error("This Time Slider source has no readable pixels.");
	const date = control.getCurrentDate();
	const resolved = await resolveUrl(spec.url, date);
	if (signal?.aborted) return null;
	const url = await resolvePixelReadUrl(spec, resolved, lngLat, signal);
	if (signal?.aborted) return null;
	if (!url) throw new PixelOutsideCoverageError();
	const { loadGeoTIFF, readBandNames, readPixelValues } = await __vitePreload(async () => {
		const { loadGeoTIFF, readBandNames, readPixelValues } = await import("./dist-Ao5iO9xN.js");
		return {
			loadGeoTIFF,
			readBandNames,
			readPixelValues
		};
	}, __vite__mapDeps([20,21,22,23,14,24,5,25,4,3,8,26,27,28,29,7,30,31,32,33,34,35,36,37,38,39,13]), import.meta.url);
	const tiff = await loadGeoTIFF(url);
	if (signal?.aborted) return null;
	const reading = await readPixelValues(tiff, lngLat, {
		signal,
		bandNames: readBandNames(tiff)
	});
	if (!reading || reading.bands.length === 0) return null;
	return {
		sourceId,
		date: isoDate$1(date),
		url,
		bands: reading.bands
	};
}
if (typeof window !== "undefined") window.__GEOLIBRE_TIME_SLIDER__ = Object.freeze({ identifyPixelAt: identifyTimeSliderPixel });
// ../../packages/plugins/src/plugins/time-slider-pixel-series.ts
/** Default cap on timeline steps, balancing detail against many range reads. */
var DEFAULT_MAX_STEPS = 120;
/** Concurrent COG reads. Keeps the stack query responsive without flooding. */
var READ_CONCURRENCY = 6;
var pixelSeriesReaderFactories = /* @__PURE__ */ new Set();
/**
* Lets another plugin make one of its Time Slider sources chartable.
*
* The built-in reader range-reads a COG (or a mosaic's COG) per date. A source
* drawn from rendered tiles has no file to read, but its owner may be able to
* fetch the source values another way: a Planetary Computer stack is an XYZ
* source whose pixel values come from the Data API's point endpoint.
*
* @param factory - Recognizes the plugin's sources and returns their reader.
* @returns A function that unregisters the factory.
*/
function registerPixelSeriesReader(factory) {
	pixelSeriesReaderFactories.add(factory);
	return () => pixelSeriesReaderFactories.delete(factory);
}
/**
* The plugin-supplied reader for a source, if any plugin claims it.
*
* @param spec - A Time Slider source.
* @returns The reader, or null when no registered factory recognizes the source.
*/
function pluginPixelSeriesReader(spec) {
	for (const factory of pixelSeriesReaderFactories) {
		const reader = factory(spec);
		if (reader) return reader;
	}
	return null;
}
/**
* Every chartable source on the active Time Slider, in dock order: the
* COG/mosaic sources the built-in reader handles plus any source a plugin
* registered a reader for.
*
* @returns The sources, or an empty array when the dock is closed or has none.
*/
function getTimeSliderSeriesSources() {
	const control = getActiveTimeSliderControl();
	if (!control) return [];
	const sources = [];
	for (const spec of control.getSources()) {
		const reader = pluginPixelSeriesReader(spec);
		if (reader || isPixelIdentifiableSourceType(spec.type)) sources.push({
			spec,
			reader
		});
	}
	return sources;
}
/**
* Layers bound to the Time Slider through their own time dimension (a Zarr
* cube) whose adapter can read values at a point, in Layers-panel order. These
* are not Time Slider sources: the slider steps them through
* `layer.metadata.timeBinding`, so they are found on the store instead.
*
* @returns The chartable layers, or an empty array when the dock is closed.
*/
function getSelectorSeriesLayers() {
	if (!getActiveTimeSliderControl()) return [];
	const layers = [];
	for (const layer of useAppStore.getState().layers) {
		if (!isSelectorTimeBinding(layer.metadata?.timeBinding)) continue;
		const adapter = getTemporalLayerAdapter(layer.id);
		if (!adapter?.readPointSeries) continue;
		const axis = toEpochMsAxis(adapter.getTimeValues());
		if (!axis) continue;
		layers.push({
			id: layer.id,
			name: layer.name,
			url: typeof layer.source.url === "string" ? layer.source.url : "",
			axis,
			valueName: adapter.valueName ?? null,
			readPointSeries: adapter.readPointSeries
		});
	}
	return layers;
}
/**
* Maps each timeline step to the nearest slice of a layer's time axis, the same
* snapping the slider uses to pick the slice it displays, so a charted value is
* the one shown on the map at that step.
*
* @param steps - The timeline steps being charted.
* @param axis - The layer's time axis in epoch milliseconds.
* @returns The axis index per step (-1 where the axis has no usable value), and
*   the distinct indices to read.
*/
function stepAxisIndices(steps, axis) {
	const perStep = steps.map((date) => nearestTimeIndex(axis, date.getTime()));
	return {
		perStep,
		unique: [...new Set(perStep.filter((index) => index >= 0))]
	};
}
/** Time slices per Zarr point query; batches run READ_CONCURRENCY at a time. */
var SELECTOR_BATCH_SIZE = 8;
/**
* The pixel-readable sources currently configured on the active Time Slider, in
* dock order.
*
* COG *and* mosaic sources qualify: both carry real source values behind a
* per-date URL, and both are read here with the same client-side GeoTIFF
* reader — a mosaic just resolves through its manifest to the asset covering
* the click first. This is deliberately the same set Identify accepts
* ({@link isPixelIdentifiableSourceType}), so a source the Layers panel offers
* to identify can also be charted.
*
* Accepting both is not optional for COG support either: the library renders a
* COG through its mosaic adapter on the `gpu`/`wasm` engines and rewrites the
* reported spec to `type: 'mosaic'`, and the dock's COG form defaults to `gpu`.
* Matching only `type === 'cog'` therefore hid the chart for the ordinary case
* of a COG stack added through the dock.
*
* @returns The COG/mosaic source specs, or an empty array when the dock is
*   closed or has none (XYZ/WMS are pre-rendered picture tiles with no source
*   values, and GeoJSON is not raster data).
*/
function getTimeSliderPixelSources() {
	const control = getActiveTimeSliderControl();
	if (!control) return [];
	return control.getSources().filter((spec) => isPixelIdentifiableSourceType(spec.type));
}
/**
* Whether the Time Slider currently exposes a pixel-readable raster stack.
*
* @returns True when at least one COG or mosaic source is configured, a
*   source another plugin registered a reader for
*   ({@link registerPixelSeriesReader}), or a layer bound through its own time
*   dimension whose adapter can read point values (a Zarr cube).
*/
function hasTimeSliderRasterStack() {
	return getTimeSliderSeriesSources().length > 0 || getSelectorSeriesLayers().length > 0;
}
/**
* Downsamples a list of step dates to at most `maxSteps`, keeping the endpoints
* and spreading the rest evenly so a daily timeline over many years still charts
* without thousands of range reads.
*
* @param steps - The full ordered list of step dates.
* @param maxSteps - Maximum steps to keep (coerced to >= 1).
* @returns The kept steps and whether any were dropped.
*/
function downsampleSteps(steps, maxSteps) {
	const cap = Math.max(1, Math.floor(maxSteps));
	if (steps.length <= cap) return {
		steps: steps.slice(),
		truncated: false
	};
	if (cap === 1) return {
		steps: [steps[0]],
		truncated: true
	};
	const kept = [];
	for (let i = 0; i < cap; i++) {
		const index = Math.round(i * (steps.length - 1) / (cap - 1));
		kept.push(steps[index]);
	}
	return {
		steps: kept,
		truncated: true
	};
}
/**
* The steps of an *ordinal* timeline: the explicit date list the slider walks,
* taking every `interval`-th entry so the sampled steps are exactly the marker
* positions the library's ordinal scale reaches from the start.
*
* Exported for testing — an ordinal timeline is what a sparse acquisition
* series (e.g. 16 irregular EMIT overpasses) uses, and deriving its steps from
* start/end/granularity instead would query hundreds of dates that have no data.
*
* @param dates - The clipped, ascending date list from the control's state.
* @param interval - Entries of `dates` between marker positions.
* @returns The step dates.
*/
function ordinalSteps(dates, interval) {
	const stride = Number.isFinite(interval) ? Math.max(1, Math.floor(interval)) : 1;
	const kept = [];
	for (let i = 0; i < dates.length; i += stride) kept.push(dates[i]);
	return kept;
}
/**
* The timeline step dates for the active Time Slider, downsampled to the cap.
*
* A timeline is either *ordinal* (an explicit list of dates the slider visits,
* e.g. a sparse satellite acquisition series) or *continuous* (a start/end range
* walked in granularity units). Reading the range for an ordinal timeline would
* invent steps between the real acquisitions — every one of them a wasted read
* that charts as a gap — so the date list wins when the state carries one.
*
* @param maxSteps - Maximum steps before downsampling.
* @returns The (possibly downsampled) step dates, whether the timeline was
*   downsampled, and the full step count before downsampling. Empty when the
*   dock is closed.
*/
function getTimeSliderSteps(maxSteps) {
	const control = getActiveTimeSliderControl();
	if (!control) return {
		steps: [],
		truncated: false,
		total: 0
	};
	const state = control.getState();
	const steps = state.dates && state.dates.length > 0 ? ordinalSteps(state.dates, state.interval) : generateSteps(state.startDate, state.endDate, Math.max(1, state.interval), state.granularity);
	return {
		...downsampleSteps(steps, maxSteps),
		total: steps.length
	};
}
/**
* Reads one band's chartable value from a timestep point.
*
* @param point - The timestep point, carrying all band readings.
* @param bandIndex - The 1-based band index to read.
* @returns The raw band value, or null when the band is missing for this step
*   (failed read), its value is the source's nodata, or the value is non-finite
*   (a stray NaN/Infinity would otherwise blank the whole chart via scaleY).
*   Null renders as a gap.
*/
function valueAtBand(point, bandIndex) {
	const band = point.bands.find((entry) => entry.index === bandIndex);
	if (!band || band.isNodata || !Number.isFinite(band.value)) return null;
	return band.value;
}
/**
* The union of bands seen across a set of results, ascending by index, keeping
* the first known name for each index. Lets a band picker offer every band any
* loaded point exposes even if an individual COG read failed.
*
* @param results - The loaded query results.
* @returns Band options sorted by index.
*/
function bandOptionsFromResults(results) {
	const byIndex = /* @__PURE__ */ new Map();
	for (const result of results) for (const band of result.bands) {
		const existing = byIndex.get(band.index);
		if (!existing) byIndex.set(band.index, band);
		else if (existing.name == null && band.name != null) byIndex.set(band.index, band);
	}
	return [...byIndex.values()].sort((a, b) => a.index - b.index);
}
/**
* Runs `tasks` with a bounded number in flight at once, preserving result order.
*
* A rejecting task is swallowed so it cannot kill its worker; its result slot is
* left `undefined`, which the return type reflects. Callers that care about
* failures should handle them inside the task or check for missing slots.
*
* @param tasks - Thunks producing each result.
* @param limit - Maximum concurrent tasks.
* @param signal - Optional abort signal; when aborted, workers stop pulling new
*   tasks so the queue drains immediately instead of running every remaining
*   no-op task. Already-started tasks still settle.
* @returns The results in the same order as `tasks`; failed tasks are `undefined`.
*/
async function runWithConcurrency(tasks, limit, signal) {
	const results = new Array(tasks.length);
	let next = 0;
	async function worker() {
		while (next < tasks.length) {
			if (signal?.aborted) return;
			const index = next++;
			try {
				results[index] = await tasks[index]();
			} catch {}
		}
	}
	const workers = Array.from({ length: Math.min(limit, tasks.length) }, () => worker());
	await Promise.all(workers);
	return results;
}
/**
* Picks the default band index for a result: the first source's first
* configured band (`bidx`) when that band was actually read *for that source*,
* otherwise the first available band. Returns null when nothing was read.
*
* @param sources - The queried COG sources, in order.
* @param bands - The stack-wide union of bands read.
* @param firstSourcePoints - The first source's per-step points, used to confirm
*   its configured band was actually present (so the chart does not open on a
*   band that renders the first series as all gaps).
*/
function pickDefaultBandIndex(sources, bands, firstSourcePoints) {
	if (bands.length === 0) return null;
	const configured = sources[0]?.bidx?.[0];
	const firstSourceBands = new Set(firstSourcePoints.flatMap((point) => point.bands.map((band) => band.index)));
	if (configured !== void 0 && firstSourceBands.has(configured)) return configured;
	return bands[0].index;
}
/**
* Queries a single pixel's value across the Time Slider's raster stack and
* timeline, returning one value-over-time series per COG or mosaic source. Every
* band is read and retained so the UI can switch the charted band without
* re-querying.
*
* For every (source, step) pair the source URL template is resolved to the
* step's date, the COG is opened, and all band values at the click are read via
* an HTTP range read. A mosaic step resolves to a manifest instead, so the asset
* covering the click is located first and read the same way. Reads share a
* per-URL cache so a static (non-templated) source, or a manifest repeated
* across dates, is fetched once. Failed reads become empty points (charted as
* gaps) rather than aborting the whole query.
*
* @param lngLat - The clicked location, `[lng, lat]` in WGS84.
* @param options - Progress, abort, and step-cap controls.
* @returns The assembled result.
* @throws When the Time Slider has no COG/mosaic sources or no timeline steps.
*/
async function queryPixelTimeSeries(lngLat, options = {}) {
	const { signal, onProgress, maxSteps = DEFAULT_MAX_STEPS } = options;
	const seriesSources = getTimeSliderSeriesSources();
	const sources = seriesSources.map((entry) => entry.spec);
	const selectorLayers = getSelectorSeriesLayers();
	if (sources.length === 0 && selectorLayers.length === 0) throw new Error("The Time Slider has no COG, mosaic or data cube layers to query.");
	const { steps, truncated, total: originalStepCount } = getTimeSliderSteps(maxSteps);
	if (steps.length === 0) throw new Error("The Time Slider timeline has no steps to query.");
	const readingCache = /* @__PURE__ */ new Map();
	const readAt = (url) => {
		const cached = readingCache.get(url);
		if (cached) return cached;
		const promise = (async () => {
			const { loadGeoTIFF, readBandNames, readPixelValues } = await __vitePreload(async () => {
				const { loadGeoTIFF, readBandNames, readPixelValues } = await import("./dist-Ao5iO9xN.js");
				return {
					loadGeoTIFF,
					readBandNames,
					readPixelValues
				};
			}, __vite__mapDeps([20,21,22,23,14,24,5,25,4,3,8,26,27,28,29,7,30,31,32,33,34,35,36,37,38,39,13]), import.meta.url);
			const tiff = await loadGeoTIFF(url);
			if (signal?.aborted) return null;
			return readPixelValues(tiff, lngLat, {
				signal,
				bandNames: readBandNames(tiff)
			});
		})();
		promise.catch(() => readingCache.delete(url));
		readingCache.set(url, promise);
		return promise;
	};
	const readUrlCache = /* @__PURE__ */ new Map();
	const readUrlFor = (spec, resolvedUrl) => {
		const key = `${spec.type}\n${resolvedUrl}`;
		const cached = readUrlCache.get(key);
		if (cached) return cached;
		const promise = resolvePixelReadUrl(spec, resolvedUrl, lngLat, signal);
		promise.catch(() => readUrlCache.delete(key));
		readUrlCache.set(key, promise);
		return promise;
	};
	const layerPlans = selectorLayers.map((layer) => {
		const { perStep, unique } = stepAxisIndices(steps, layer.axis);
		const batches = [];
		for (let i = 0; i < unique.length; i += SELECTOR_BATCH_SIZE) batches.push(unique.slice(i, i + SELECTOR_BATCH_SIZE));
		return {
			layer,
			perStep,
			batches
		};
	});
	const total = (sources.length + selectorLayers.length) * steps.length;
	let completed = 0;
	const points = sources.map(() => steps.map((date) => ({
		date: isoDate(date),
		timestamp: date.getTime(),
		url: "",
		bands: []
	})));
	const tasks = [];
	sources.forEach((source, si) => {
		steps.forEach((date, di) => {
			tasks.push(async () => {
				const point = {
					date: isoDate(date),
					timestamp: date.getTime(),
					url: "",
					bands: []
				};
				try {
					if (signal?.aborted) throw new Error("aborted");
					const pluginReader = seriesSources[si].reader;
					if (pluginReader) {
						const reading = await pluginReader(date, lngLat, signal);
						if (reading) {
							point.url = reading.url;
							point.bands = reading.bands;
						}
						return;
					}
					const pixelSource = source;
					const resolved = await resolveUrl(pixelSource.url, date);
					point.url = resolved;
					const url = await readUrlFor(pixelSource, resolved);
					if (!url) return;
					point.url = url;
					const reading = await readAt(url);
					if (reading) point.bands = reading.bands;
				} catch {} finally {
					points[si][di] = point;
					completed += 1;
					onProgress?.(completed, total);
				}
			});
		});
	});
	const layerPoints = layerPlans.map(({ layer, perStep }) => steps.map((date, di) => ({
		date: isoDate(date),
		timestamp: date.getTime(),
		url: perStep[di] >= 0 ? layer.url : "",
		bands: []
	})));
	layerPlans.forEach(({ layer, perStep, batches }, li) => {
		const unreadSteps = perStep.filter((index) => index < 0).length;
		if (unreadSteps > 0) {
			completed += unreadSteps;
			onProgress?.(completed, total);
		}
		for (const batch of batches) tasks.push(async () => {
			const batchSet = new Set(batch);
			try {
				if (signal?.aborted) throw new Error("aborted");
				const values = await layer.readPointSeries(lngLat, batch, signal);
				perStep.forEach((index, di) => {
					if (!batchSet.has(index)) return;
					const value = values.get(index) ?? null;
					layerPoints[li][di].bands = [{
						index: 1,
						name: layer.valueName,
						value: value ?? NaN,
						isNodata: value === null
					}];
				});
			} catch {} finally {
				completed += perStep.filter((index) => batchSet.has(index)).length;
				onProgress?.(completed, total);
			}
		});
	});
	await runWithConcurrency(tasks, READ_CONCURRENCY, signal);
	const series = sources.map((source, si) => ({
		sourceId: source.id ?? source.name ?? `${source.type}-${si}`,
		sourceName: source.name ?? source.id ?? `${source.type === "mosaic" ? "Mosaic" : "COG"} ${si + 1}`,
		points: points[si]
	}));
	layerPlans.forEach(({ layer }, li) => {
		series.push({
			sourceId: layer.id,
			sourceName: layer.name,
			points: layerPoints[li]
		});
	});
	const allPoints = [...points, ...layerPoints];
	const bandByIndex = /* @__PURE__ */ new Map();
	for (const sourcePoints of allPoints) for (const point of sourcePoints) for (const band of point.bands) {
		const existing = bandByIndex.get(band.index);
		if (!existing || existing.name == null && band.name != null) bandByIndex.set(band.index, {
			index: band.index,
			name: band.name
		});
	}
	const bands = [...bandByIndex.values()].sort((a, b) => a.index - b.index);
	return {
		lngLat,
		series,
		bands,
		defaultBandIndex: pickDefaultBandIndex(sources, bands, allPoints[0]),
		stepCount: steps.length,
		originalStepCount,
		truncated
	};
}
/**
* Formats a date as an ISO `YYYY-MM-DD` string in UTC, matching the Time Slider
* token expansion so chart labels and the timeline agree.
*/
function isoDate(date) {
	return date.toISOString().slice(0, 10);
}
/**
* Flattens labeled pixel time-series results into a long-format point
* FeatureCollection for export. Every (location, source, timestep, band) becomes
* a Point feature at the clicked location with the label, date, source, band,
* and value as attributes, so the existing vector exporters write it straight to
* CSV or GeoParquet. Long format keeps every band regardless of which one the
* chart currently shows.
*
* @param items - The labeled results to export (one per clicked location).
* @returns A FeatureCollection of one point per (location, source, step, band).
*/
function seriesToFeatureCollection(items) {
	const features = [];
	let id = 0;
	const push = (lng, lat, properties) => features.push({
		type: "Feature",
		id: id++,
		geometry: {
			type: "Point",
			coordinates: [lng, lat]
		},
		properties
	});
	for (const { label, result } of items) {
		const [lng, lat] = result.lngLat;
		for (const series of result.series) for (const point of series.points) {
			const base = {
				label,
				lng,
				lat,
				date: point.date,
				source: series.sourceName
			};
			if (point.bands.length > 0) for (const band of point.bands) push(lng, lat, {
				...base,
				band: band.index,
				band_name: band.name,
				value: band.isNodata || !Number.isFinite(band.value) ? null : band.value,
				is_nodata: band.isNodata
			});
			else push(lng, lat, {
				...base,
				band: null,
				band_name: null,
				value: null,
				is_nodata: null
			});
		}
	}
	return {
		type: "FeatureCollection",
		features
	};
}
// ../../packages/plugins/src/plugins/time-slider-symbology.ts
/** Narrows a value to a finite `[min, max]` pair. */
function normalizeRescale(value) {
	return Array.isArray(value) && value.length === 2 && value.every((n) => Number.isFinite(n)) ? [value[0], value[1]] : null;
}
/**
* Reads the current symbology of a Time Slider raster source.
*
* @param sourceId - The source id (equals the mirrored store layer id).
* @returns The symbology, or null when the dock is closed or the id is not a
*   raster source (an XYZ/WMS/GeoJSON source has none to edit).
*/
function getTimeSliderSymbology(sourceId) {
	const spec = getTimeSliderPixelSources().find((candidate) => candidate.id === sourceId);
	if (!spec) return null;
	return {
		type: spec.type,
		colormap: spec.colormap ?? null,
		bands: Array.isArray(spec.bidx) ? spec.bidx.filter((n) => Number.isInteger(n) && n > 0) : [],
		rescale: normalizeRescale(spec.rescale),
		nodata: spec.nodata ?? null
	};
}
/**
* Applies a symbology change to a Time Slider raster source.
*
* The control merges the patch into the source spec and re-renders, so the
* change is live and is picked up by `getConfig()` when the project is saved.
* Cleared fields are sent as `undefined` rather than omitted, so the renderer
* drops them instead of keeping the previous value.
*
* @param sourceId - The source id (equals the mirrored store layer id).
* @param patch - The fields to change.
* @returns True when the patch was handed to the control.
*/
function setTimeSliderSymbology(sourceId, patch) {
	const control = getActiveTimeSliderControl();
	if (!control) return false;
	if (!getTimeSliderPixelSources().some((candidate) => candidate.id === sourceId)) return false;
	const spec = {};
	if ("colormap" in patch) spec.colormap = patch.colormap || void 0;
	if ("bands" in patch) spec.bidx = patch.bands && patch.bands.length > 0 ? patch.bands : void 0;
	if ("rescale" in patch) spec.rescale = patch.rescale ?? void 0;
	if ("nodata" in patch) spec.nodata = patch.nodata ?? void 0;
	if (Object.keys(spec).length === 0) return false;
	control.setSourceProperty(sourceId, spec);
	return true;
}
/**
* Parses a user-typed band list (e.g. `"4,3,2"`) into 1-based band indexes.
*
* Exported for testing and reuse by the panel: the same rule decides what is
* sent to the renderer and what the field accepts, so a half-typed value never
* reaches the spec.
*
* @param text - The raw field value.
* @returns The parsed indexes, or null when the text is not a valid list
*   (empty input parses to an empty list, meaning "let the renderer decide").
*/
function parseBandList(text) {
	const trimmed = text.trim();
	if (trimmed === "") return [];
	const parts = trimmed.split(/[,\s]+/).filter(Boolean);
	const bands = [];
	for (const part of parts) {
		const value = Number(part);
		if (!Number.isInteger(value) || value < 1) return null;
		bands.push(value);
	}
	return bands;
}
// ../../packages/plugins/src/plugins/arcgis-service-request.ts
var ERROR_KEY$2 = "arcgisService.errors";
/** Set query parameters on a URL, skipping undefined values. */
function withQuery(url, params) {
	const parsed = new URL(url);
	for (const [key, value] of Object.entries(params)) if (value !== void 0) parsed.searchParams.set(key, value);
	return parsed.toString();
}
function requireHttps(url) {
	if (new URL(url).protocol !== "https:") throw new LocalizedError(`${ERROR_KEY$2}.writesRequireHttps`, "ArcGIS writes require HTTPS.");
}
/**
* Turn a service error envelope into a message, distinguishing sign-in and
* permission refusals.
*
* @param error - The reply's `error` object.
* @param fallback - The message when the service gave none.
* @param messages - The operation family's localized errors.
* @returns The error to throw.
*/
function arcGISServiceError(error, fallback, messages) {
	const code = typeof error?.code === "number" ? error.code : Number(error?.code);
	if (code === 498 || code === 499) return messages.signInRequired();
	if (code === 403) return messages.notPermitted();
	const details = Array.isArray(error?.details) ? error.details.filter((d) => typeof d === "string" && d.trim() !== "") : [];
	const text = [error?.message ?? error?.description, ...details].filter((part) => Boolean(part?.trim())).join(" ");
	return new Error(text || fallback);
}
/** Read a JSON reply, rejecting an HTTP failure or a body that is not JSON. */
async function readArcGISJson(response, messages) {
	if (!response.ok) throw new LocalizedError(`${ERROR_KEY$2}.serviceRequestFailed`, "ArcGIS service request failed with {{status}}.", { status: response.status });
	const text = await response.text();
	try {
		return JSON.parse(text);
	} catch {
		throw messages.invalidResponse();
	}
}
/**
* Post a write, telling a refused write apart from one whose outcome is
* unknown: once the request may have reached the server, a lost response must
* not be reported as a failure that is safe to repeat.
*
* @param connection - The layer's live connection.
* @param url - The operation URL; must be HTTPS.
* @param body - A multipart upload or a form-encoded body.
* @param messages - The operation family's localized errors.
* @param signal - Aborts the request; aborting in flight is unconfirmed.
* @returns The parsed reply, which may still carry a service `error`.
*/
async function postArcGISWrite(connection, url, body, messages, signal) {
	requireHttps(url);
	signal?.throwIfAborted();
	let response;
	try {
		response = body instanceof FormData ? await connection.fetch(url, {
			method: "POST",
			body,
			redirect: "error",
			signal
		}) : await connection.fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: body.toString(),
			redirect: "error",
			signal
		});
	} catch (error) {
		throw messages.unconfirmed(error);
	}
	if (response.status >= 400 && response.status < 500) return readArcGISJson(response, messages);
	try {
		return await readArcGISJson(response, messages);
	} catch (error) {
		throw messages.unconfirmed(error);
	}
}
// ../../packages/plugins/src/plugins/arcgis-attachments.ts
var ERROR_KEY$1 = "arcgisService.errors";
var MESSAGES$1 = {
	signInRequired: () => new LocalizedError(`${ERROR_KEY$1}.attachmentSignInRequired`, "The ArcGIS service requires a valid sign-in for this attachment operation. Sign in again and retry."),
	notPermitted: () => new LocalizedError(`${ERROR_KEY$1}.attachmentNotPermitted`, "You do not have permission for this attachment operation on the ArcGIS service."),
	invalidResponse: () => new LocalizedError(`${ERROR_KEY$1}.attachmentInvalidResponse`, "The ArcGIS service returned an unexpected attachment response."),
	unconfirmed: (cause) => new LocalizedError(`${ERROR_KEY$1}.attachmentUnconfirmed`, "The attachment change could not be confirmed. Refresh the attachment list before trying again.", void 0, cause ? { cause } : void 0)
};
/**
* The attachment operations a layer's metadata advertises.
*
* Esri allows adding an attachment with the Create or Update capability, and
* replacing or deleting one with Update (not Delete). Writes also follow the
* feature editing rules: versioned layers stay read-only, and the layer's
* GeoLibre permissions can withhold them. Advertised operations are only an
* upper bound; the server still decides for the signed-in user.
*
* @param layer - Any layer.
* @returns The supported operations, or `undefined` when the layer has no attachments.
*/
function arcGISAttachmentSupport(layer) {
	if (layer?.metadata.sourceKind !== "arcgis-feature-query") return void 0;
	return supportFor(layer, layer.metadata.arcgisEditInfo);
}
/**
* The attachment operations a table related to an ArcGIS feature layer
* advertises, for its rows. The rules are those of
* {@link arcGISAttachmentSupport}, read from the related table's own
* metadata; the parent layer's GeoLibre permissions still apply, and writes
* still need the service to be a FeatureServer.
*
* @param layer - The parent ArcGIS feature layer.
* @param related - The related table's `?f=json` metadata.
* @returns The supported operations, or `undefined` when the table has no attachments.
*/
function arcGISRelatedAttachmentSupport(layer, related) {
	if (layer?.metadata.sourceKind !== "arcgis-feature-query") return void 0;
	return supportFor(layer, related ?? void 0);
}
function supportFor(layer, info) {
	if (typeof layer.source.arcgisQueryUrl !== "string") return void 0;
	if (!info?.hasAttachments || !info.objectIdField) return void 0;
	const caps = new Set(info.capabilities?.toLowerCase().split(",").map((s) => s.trim()));
	const writable = /\/FeatureServer\/\d+\/query\/?$/i.test(layer.source.arcgisQueryUrl) && !info.isDataVersioned;
	const create = layer.capabilities?.create !== false && caps.has("create");
	const update = layer.capabilities?.update !== false && caps.has("update");
	return {
		list: layer.capabilities?.query !== false && (!info.capabilities || caps.has("query")),
		add: writable && (create || update),
		update: writable && update,
		delete: writable && update
	};
}
/**
* The service object ID of a feature, which attachments are keyed by.
*
* @param layer - The ArcGIS feature layer holding the feature.
* @param feature - A feature of that layer.
* @returns The object ID, or `undefined` for a feature not yet saved to the service.
*/
function arcGISAttachmentObjectId(layer, feature) {
	const field = layer.metadata.arcgisEditInfo?.objectIdField;
	if (!field || !feature) return void 0;
	try {
		return arcGISObjectId(feature, field);
	} catch {
		return;
	}
}
async function connect$1(source) {
	const layerId = typeof source === "string" ? source : source.layerId;
	const connection = await arcGISFeatureLayerConnection(layerId);
	if (!connection) throw new LocalizedError(`${ERROR_KEY$1}.missingServiceUrl`, "Missing ArcGIS service URL.");
	if (typeof source === "string") return connection;
	if (!Number.isSafeInteger(source.tableId) || source.tableId < 0) throw new Error(`Invalid ArcGIS table ID: ${source.tableId}.`);
	return {
		...connection,
		layerUrl: `${connection.layerUrl.replace(/\/\d+$/, "")}/${source.tableId}`
	};
}
function recordUrl(connection, objectId) {
	if (!Number.isSafeInteger(objectId) || objectId < 0) throw new Error(`Invalid ArcGIS object ID: ${objectId}.`);
	return `${connection.layerUrl}/${objectId}`;
}
/** Turn a service error envelope into a message, distinguishing sign-in and permission refusals. */
function serviceError$1(error, fallback) {
	return arcGISServiceError(error, fallback, MESSAGES$1);
}
var readJson = (response) => readArcGISJson(response, MESSAGES$1);
function parseAttachmentInfo(value) {
	if (!value || typeof value !== "object") return void 0;
	const entry = value;
	if (!Number.isSafeInteger(entry.id)) return void 0;
	return {
		id: entry.id,
		name: typeof entry.name === "string" ? entry.name : String(entry.id),
		contentType: typeof entry.contentType === "string" && entry.contentType ? entry.contentType : "application/octet-stream",
		size: typeof entry.size === "number" && entry.size >= 0 ? entry.size : 0,
		...typeof entry.globalId === "string" ? { globalId: entry.globalId } : {},
		...typeof entry.keywords === "string" && entry.keywords ? { keywords: entry.keywords } : {}
	};
}
/**
* List the files attached to one record.
*
* @param source - The ArcGIS feature layer, or a table related to it.
* @param objectId - The record's service object ID.
* @param signal - Aborts the request, for example when the selection changes.
* @returns The record's attachments, in service order.
*/
async function listArcGISAttachments(source, objectId, signal) {
	const connection = await connect$1(source);
	const url = withQuery(`${recordUrl(connection, objectId)}/attachments`, {
		f: "json",
		token: connection.token
	});
	const json = await readJson(await connection.fetch(url, { signal }));
	if (json.error) throw serviceError$1(json.error, "ArcGIS could not list the attachments.");
	if (!Array.isArray(json.attachmentInfos)) throw MESSAGES$1.invalidResponse();
	return json.attachmentInfos.map(parseAttachmentInfo).filter((info) => info !== void 0);
}
/**
* Download one attachment's original bytes.
*
* An attachment that is itself JSON passes through untouched; for any other
* type, a JSON body is the service reporting an error in place of the file.
*
* @param source - The ArcGIS feature layer, or a table related to it.
* @param objectId - The record's service object ID.
* @param attachment - The attachment, as listed.
* @param signal - Aborts the transfer.
* @returns The file, typed with the attachment's content type.
*/
async function downloadArcGISAttachment(source, objectId, attachment, signal) {
	const connection = await connect$1(source);
	const url = withQuery(`${recordUrl(connection, objectId)}/attachments/${attachment.id}`, { token: connection.token });
	const response = await connection.fetch(url, { signal });
	if (!response.ok) throw new LocalizedError(`${ERROR_KEY$1}.serviceRequestFailed`, "ArcGIS service request failed with {{status}}.", { status: response.status });
	const bytes = await response.arrayBuffer();
	const served = response.headers.get("Content-Type")?.toLowerCase() ?? "";
	if (!/json/i.test(attachment.contentType) && served.includes("json")) {
		let error;
		try {
			error = JSON.parse(new TextDecoder().decode(bytes)).error;
		} catch {
			error = void 0;
		}
		if (error) throw serviceError$1(error, "ArcGIS could not download the attachment.");
	}
	return new Blob([bytes], { type: attachment.contentType });
}
function postAttachmentWrite(connection, url, body, signal) {
	return postArcGISWrite(connection, url, body, MESSAGES$1, signal);
}
function uploadForm(file, fileName, token) {
	const form = new FormData();
	form.set("f", "json");
	if (token) form.set("token", token);
	form.set("attachment", file, fileName);
	return form;
}
function attachmentResult(result, fallback) {
	if (!result || typeof result.success !== "boolean") throw MESSAGES$1.invalidResponse();
	if (!result.success) throw serviceError$1(result.error, fallback);
	return Number.isSafeInteger(result.objectId) ? result.objectId : void 0;
}
/**
* Attach a file to a record.
*
* @param source - The ArcGIS feature layer, or a table related to it.
* @param objectId - The record's service object ID.
* @param file - The file to upload.
* @param fileName - The name to store, defaulting to the file's own.
* @param signal - Aborts the upload; an upload aborted in flight is unconfirmed.
* @returns The new attachment's ID.
*/
async function addArcGISAttachment(source, objectId, file, fileName = file instanceof File ? file.name : "attachment", signal) {
	const connection = await connect$1(source);
	const json = await postAttachmentWrite(connection, `${recordUrl(connection, objectId)}/addAttachment`, uploadForm(file, fileName, connection.token), signal);
	if (json.error) throw serviceError$1(json.error, "ArcGIS rejected the attachment.");
	const id = attachmentResult(json.addAttachmentResult, "ArcGIS rejected the attachment.");
	if (id === void 0) throw MESSAGES$1.unconfirmed();
	return id;
}
/**
* Replace the content of an existing attachment, keeping its ID.
*
* @param source - The ArcGIS feature layer, or a table related to it.
* @param objectId - The record's service object ID.
* @param attachmentId - The attachment to replace.
* @param file - The new content.
* @param fileName - The name to store, defaulting to the file's own.
* @param signal - Aborts the upload; an upload aborted in flight is unconfirmed.
*/
async function updateArcGISAttachment(source, objectId, attachmentId, file, fileName = file instanceof File ? file.name : "attachment", signal) {
	const connection = await connect$1(source);
	const form = uploadForm(file, fileName, connection.token);
	form.set("attachmentId", String(attachmentId));
	const json = await postAttachmentWrite(connection, `${recordUrl(connection, objectId)}/updateAttachment`, form, signal);
	if (json.error) throw serviceError$1(json.error, "ArcGIS rejected the replacement.");
	attachmentResult(json.updateAttachmentResult, "ArcGIS rejected the replacement.");
}
/**
* Delete attachments of one record.
*
* @param source - The ArcGIS feature layer, or a table related to it.
* @param objectId - The record's service object ID.
* @param attachmentIds - The attachments to delete.
* @returns The IDs deleted, and a message per attachment the service refused.
*/
async function deleteArcGISAttachments(source, objectId, attachmentIds) {
	if (!attachmentIds.length) return {
		deleted: [],
		errors: []
	};
	const connection = await connect$1(source);
	const body = new URLSearchParams({
		f: "json",
		attachmentIds: attachmentIds.join(",")
	});
	if (connection.token) body.set("token", connection.token);
	const json = await postAttachmentWrite(connection, `${recordUrl(connection, objectId)}/deleteAttachments`, body);
	if (json.error) throw serviceError$1(json.error, "ArcGIS could not delete the attachments.");
	const results = json.deleteAttachmentResults;
	if (!Array.isArray(results) || results.length !== attachmentIds.length) throw MESSAGES$1.invalidResponse();
	const deleted = [];
	const errors = [];
	results.forEach((result, i) => {
		const id = Number.isSafeInteger(result?.objectId) ? result.objectId : attachmentIds[i];
		if (result?.success === true) deleted.push(id);
		else errors.push(`${id}: ${serviceError$1(result?.error, "ArcGIS could not delete the attachment.").message}`);
	});
	return {
		deleted,
		errors
	};
}
// ../../packages/plugins/src/plugins/arcgis-related-records.ts
var ERROR_KEY = "arcgisService.errors";
var MESSAGES = {
	signInRequired: () => new LocalizedError(`${ERROR_KEY}.relatedSignInRequired`, "The ArcGIS service requires a valid sign-in for related records. Sign in again and retry."),
	notPermitted: () => new LocalizedError(`${ERROR_KEY}.relatedNotPermitted`, "You do not have permission for this related record operation on the ArcGIS service."),
	invalidResponse: () => new LocalizedError(`${ERROR_KEY}.relatedInvalidResponse`, "The ArcGIS service returned an unexpected related records response."),
	unconfirmed: (cause) => new LocalizedError(`${ERROR_KEY}.relatedUnconfirmed`, "The related record change could not be confirmed. Refresh the related records before trying again.", void 0, cause ? { cause } : void 0)
};
/** Pages read before a related history is reported incomplete. */
var MAX_RELATED_PAGES = 50;
/** Rows per page when the service does not state its own limit. */
var DEFAULT_RELATED_PAGE_SIZE = 1e3;
var CARDINALITIES = {
	esrirelcardinalityonetoone: "oneToOne",
	esrirelcardinalityonetomany: "oneToMany",
	esrirelcardinalitymanytomany: "manyToMany"
};
var ROLES = {
	esrirelroleorigin: "origin",
	esrireldestination: "destination",
	esrirelroledestination: "destination"
};
/** Parse a metadata `relationships[]` array, keeping only entries with usable IDs. */
function parseRelationships(value) {
	if (!Array.isArray(value)) return [];
	const result = [];
	for (const entry of value) {
		if (!entry || typeof entry !== "object") continue;
		const rel = entry;
		if (!Number.isSafeInteger(rel.id) || !Number.isSafeInteger(rel.relatedTableId)) continue;
		const id = rel.id;
		result.push({
			id,
			name: typeof rel.name === "string" && rel.name.trim() ? rel.name : String(id),
			relatedTableId: rel.relatedTableId,
			cardinality: CARDINALITIES[String(rel.cardinality).toLowerCase()] ?? "unknown",
			role: ROLES[String(rel.role).toLowerCase()] ?? "unknown",
			...typeof rel.keyField === "string" && rel.keyField ? { keyField: rel.keyField } : {},
			composite: rel.composite === true,
			...Number.isSafeInteger(rel.relationshipTableId) ? { relationshipTableId: rel.relationshipTableId } : {}
		});
	}
	return result;
}
function layerInfo(layer) {
	return layer.metadata.arcgisEditInfo;
}
function isFeatureServer(layer) {
	const url = layer.source.arcgisQueryUrl;
	return typeof url === "string" && /\/FeatureServer\/\d+\/query\/?$/i.test(url);
}
/**
* The relationships an ArcGIS feature layer publishes, read from the metadata
* it already holds.
*
* @param layer - Any layer.
* @returns The relationships, empty for layers that publish none or cannot be queried.
*/
function arcGISRelationships(layer) {
	if (layer?.metadata.sourceKind !== "arcgis-feature-query") return [];
	const url = layer.source.arcgisQueryUrl;
	if (typeof url !== "string" || !/\/(FeatureServer|MapServer)\/\d+\/query\/?$/i.test(url)) return [];
	if (layer.capabilities?.query === false) return [];
	const info = layerInfo(layer);
	if (!info?.objectIdField) return [];
	return parseRelationships(info.relationships);
}
/**
* The service object ID of a feature, which related records are queried by.
*
* @param layer - The ArcGIS feature layer holding the feature.
* @param feature - A feature of that layer.
* @returns The object ID, or `undefined` for a feature not yet saved to the service.
*/
function arcGISRelatedParentObjectId(layer, feature) {
	const field = layerInfo(layer)?.objectIdField;
	if (!field || !feature) return void 0;
	try {
		return arcGISObjectId(feature, field);
	} catch {
		return;
	}
}
/** A field name as `fields[]` spells it; ArcGIS field names are case-insensitive. */
function fieldName(info, name) {
	if (!name) return void 0;
	const lower = name.toLowerCase();
	return info.fields?.find((field) => field.name.toLowerCase() === lower)?.name;
}
/** A record's value for a field, matching the name case-insensitively. */
function valueOf(properties, name) {
	if (!properties) return void 0;
	if (Object.hasOwn(properties, name)) return properties[name];
	const lower = name.toLowerCase();
	const key = Object.keys(properties).find((candidate) => candidate.toLowerCase() === lower);
	return key === void 0 ? void 0 : properties[key];
}
/**
* The related-record writes a relationship allows from this layer's side.
*
* Writes need this layer to be the origin of a one-to-one or one-to-many
* relationship without an intermediate table, both ends on a FeatureServer,
* and the related resource to advertise the edit and to name the foreign key
* in its own `relationships[]` entry. Adding is limited to nonspatial tables,
* since a related feature would need a geometry this workflow does not draw.
* The layer's GeoLibre permissions can withhold writes, and the server still
* decides for the signed-in user.
*
* @param layer - The parent ArcGIS feature layer.
* @param relationship - One of {@link arcGISRelationships}.
* @param related - The related resource's metadata.
* @returns The allowed writes and the managed foreign key field.
*/
function arcGISRelatedEditSupport(layer, relationship, related) {
	const none = {
		add: false,
		update: false,
		delete: false
	};
	if (!isFeatureServer(layer) || relationship.role !== "origin" || relationship.cardinality !== "oneToOne" && relationship.cardinality !== "oneToMany" || relationship.relationshipTableId !== void 0) return none;
	const info = layerInfo(layer);
	const parentKey = info && fieldName(info, relationship.keyField);
	const foreignKeyField = fieldName(related, parseRelationships(related.relationships).find((entry) => entry.id === relationship.id && entry.role === "destination")?.keyField);
	if (!parentKey || !foreignKeyField) return none;
	const caps = arcGISEditCapabilities(related);
	const foreignKey = related.fields?.find((field) => field.name === foreignKeyField);
	const table = !related.geometryType;
	return {
		add: caps.create && table && foreignKey?.editable !== false && layer.capabilities?.create !== false,
		update: caps.update && layer.capabilities?.update !== false,
		delete: caps.delete && layer.capabilities?.delete !== false,
		foreignKeyField
	};
}
/**
* The parent's value for the relationship key, which a new related record's
* foreign key takes. It comes from the published key field, which may be a
* global ID or any other field, never from the object ID by assumption.
*
* @param layer - The parent ArcGIS feature layer.
* @param relationship - The relationship, from this layer's side.
* @param parent - The selected parent feature.
* @returns The key value, or `undefined` when the parent does not carry it.
*/
function arcGISRelatedParentKey(layer, relationship, parent) {
	const info = layerInfo(layer);
	const name = info && fieldName(info, relationship.keyField);
	if (!name || !parent) return void 0;
	const value = valueOf(parent.properties, name);
	return typeof value === "string" || typeof value === "number" ? value : void 0;
}
var INTEGER_FIELD_TYPES = /* @__PURE__ */ new Set([
	"esriFieldTypeInteger",
	"esriFieldTypeSmallInteger",
	"esriFieldTypeBigInteger"
]);
/**
* The related table's fields as a row editor shows them, following the
* related table's own metadata: its aliases, nullability, lengths, and the
* coded-value and range domains that apply to the row's type or subtype.
* Server-managed fields and the managed foreign key are read-only. Geometry
* and blob fields are left out.
*
* @param related - The related table's metadata.
* @param support - The relationship's {@link arcGISRelatedEditSupport}.
* @param values - The row being shown or edited, including unsaved values.
* @returns The fields, in the table's order.
*/
function arcGISRelatedFields(related, support, values) {
	const managed = arcGISServerManagedFields(related);
	const result = [];
	for (const field of related.fields ?? []) {
		if ([
			"esriFieldTypeGeometry",
			"esriFieldTypeBlob",
			"esriFieldTypeRaster"
		].includes(field.type)) continue;
		const managedKey = field.name === support.foreignKeyField;
		const kind = INTEGER_FIELD_TYPES.has(field.type) ? "integer" : field.type === "esriFieldTypeSingle" || field.type === "esriFieldTypeDouble" ? "number" : field.type === "esriFieldTypeDate" ? "date" : field.type === "esriFieldTypeString" || field.type === "esriFieldTypeGUID" ? "text" : "other";
		const domain = resolveArcGISFieldDomain(related, field.name, values);
		result.push({
			name: field.name,
			label: field.alias?.trim() || field.name,
			kind,
			editable: !managed.has(field.name.toLowerCase()) && !managedKey && kind !== "other",
			...managedKey ? { managedKey: true } : {},
			required: field.nullable === false,
			...field.type === "esriFieldTypeString" && field.length ? { maxLength: field.length } : {},
			...domain.kind === "codedValue" ? { codedValues: domain.codedValues } : {},
			...domain.kind === "range" ? {
				min: domain.min,
				max: domain.max
			} : {}
		});
	}
	return result;
}
/**
* The values a new related row starts with: the related table's creation
* defaults (template, subtype and field defaults), without server-managed
* fields or the managed foreign key. {@link addArcGISRelatedRecord} applies the
* same defaults, so a form can show them before anything is saved.
*
* @param related - The related table's metadata.
* @param support - The relationship's {@link arcGISRelatedEditSupport}.
* @returns The starting attributes.
*/
function arcGISRelatedNewRecordDefaults(related, support) {
	const values = arcGISNewFeatureProperties(related, {});
	const key = support.foreignKeyField?.toLowerCase();
	for (const name of Object.keys(values)) if (name.toLowerCase() === key) delete values[name];
	return values;
}
async function connect(layerId) {
	const connection = await arcGISFeatureLayerConnection(layerId);
	if (!connection) throw new LocalizedError(`${ERROR_KEY}.missingServiceUrl`, "Missing ArcGIS service URL.");
	return connection;
}
/** The related resource's URL: the same service, the relationship's table ID. */
function relatedUrl(connection, relatedTableId) {
	if (!Number.isSafeInteger(relatedTableId) || relatedTableId < 0) throw new Error(`Invalid ArcGIS table ID: ${relatedTableId}.`);
	return `${connection.layerUrl.replace(/\/\d+$/, "")}/${relatedTableId}`;
}
function serviceError(error, fallback) {
	return arcGISServiceError(error, fallback, MESSAGES);
}
/**
* Read the metadata of the layer or table a relationship points to.
*
* @param layerId - The parent ArcGIS feature layer.
* @param relationship - The relationship to follow.
* @param signal - Aborts the request.
* @returns The related resource's metadata, with its contingent values when it publishes any.
*/
async function fetchArcGISRelatedTableInfo(layerId, relationship, signal) {
	const connection = await connect(layerId);
	const url = withQuery(relatedUrl(connection, relationship.relatedTableId), {
		f: "json",
		token: connection.token
	});
	const json = await readArcGISJson(await connection.fetch(url, { signal }), MESSAGES);
	if (json.error) {
		const error = serviceError(json.error, "");
		if (error instanceof LocalizedError) throw error;
		throw new LocalizedError(`${ERROR_KEY}.relatedUnavailable`, "The related table {{id}} is not available from this service. Check that it is published in the same service and shared with you.", { id: relationship.relatedTableId });
	}
	if (!json.objectIdField || !Array.isArray(json.fields)) throw MESSAGES.invalidResponse();
	return withArcGISContingentValues(relatedUrl(connection, relationship.relatedTableId), json, async (resource) => {
		const body = await readArcGISJson(await connection.fetch(withQuery(resource, {
			f: "json",
			token: connection.token
		}), { signal }), MESSAGES);
		if (body.error) throw serviceError(body.error, "ArcGIS service request failed.");
		return body;
	}, signal);
}
/**
* Read the related rows of one record.
*
* Every row must belong to the requested record and carry its own object ID;
* anything else is rejected rather than shown under the wrong parent. When the
* layer supports related-record pagination the rows are paged through in
* object ID order, otherwise a capped result is reported as incomplete.
*
* @param layerId - The parent ArcGIS feature layer.
* @param objectId - The parent record's service object ID.
* @param relationship - The relationship to follow.
* @param related - The related resource's metadata.
* @param signal - Aborts the request, for example when the selection changes.
* @returns The related rows and whether they are complete.
*/
async function queryArcGISRelatedRecords(layerId, objectId, relationship, related, signal) {
	if (!Number.isSafeInteger(objectId) || objectId < 0) throw new Error(`Invalid ArcGIS object ID: ${objectId}.`);
	const relatedOid = related.objectIdField;
	if (!relatedOid) throw MESSAGES.invalidResponse();
	const connection = await connect(layerId);
	const layer = useAppStore.getState().layers.find((entry) => entry.id === layerId);
	const paged = (layer && layerInfo(layer)?.advancedQueryCapabilities?.supportsQueryRelatedPagination) === true;
	const pageSize = Number.isSafeInteger(related.maxRecordCount) && related.maxRecordCount > 0 ? related.maxRecordCount : DEFAULT_RELATED_PAGE_SIZE;
	const records = [];
	const seen = /* @__PURE__ */ new Set();
	let offset = 0;
	for (let page = 0; page < (paged ? MAX_RELATED_PAGES : 1); page++) {
		const url = withQuery(`${connection.layerUrl}/queryRelatedRecords`, {
			f: "json",
			objectIds: String(objectId),
			relationshipId: String(relationship.id),
			outFields: "*",
			returnGeometry: "false",
			...paged ? {
				orderByFields: `${relatedOid} ASC`,
				resultOffset: String(offset),
				resultRecordCount: String(pageSize)
			} : {},
			token: connection.token
		});
		const json = await readArcGISJson(await connection.fetch(url, { signal }), MESSAGES);
		if (json.error) throw serviceError(json.error, "ArcGIS could not read the related records.");
		if (!Array.isArray(json.relatedRecordGroups)) throw MESSAGES.invalidResponse();
		let received = 0;
		for (const group of json.relatedRecordGroups) {
			if (group?.objectId !== objectId || !Array.isArray(group.relatedRecords)) throw MESSAGES.invalidResponse();
			for (const row of group.relatedRecords) {
				const attributes = row?.attributes;
				if (!attributes || typeof attributes !== "object") throw MESSAGES.invalidResponse();
				const id = valueOf(attributes, relatedOid);
				if (typeof id !== "number" || !Number.isSafeInteger(id) || id < 0) throw MESSAGES.invalidResponse();
				received++;
				if (seen.has(id)) continue;
				seen.add(id);
				records.push({
					objectId: id,
					attributes: { ...attributes }
				});
			}
		}
		if (!json.exceededTransferLimit) return {
			records,
			complete: true
		};
		if (!received) break;
		offset += received;
	}
	return {
		records,
		complete: false
	};
}
/** Send one edit to the related resource's `applyEdits` and return its single result. */
async function applyRelatedEdit(layerId, relationship, kind, value, signal) {
	const connection = await connect(layerId);
	const body = new URLSearchParams({
		f: "json",
		[kind]: typeof value === "string" ? value : JSON.stringify(value),
		rollbackOnFailure: "true"
	});
	if (connection.token) body.set("token", connection.token);
	const json = await postArcGISWrite(connection, `${relatedUrl(connection, relationship.relatedTableId)}/applyEdits`, body, MESSAGES, signal);
	if (json.error) throw serviceError(json.error, "ArcGIS rejected the related record edit.");
	const results = kind === "adds" ? json.addResults : kind === "updates" ? json.updateResults : json.deleteResults;
	const result = Array.isArray(results) && results.length === 1 ? results[0] : void 0;
	if (!result || typeof result !== "object" || typeof result.success !== "boolean") throw MESSAGES.unconfirmed();
	if (!result.success) throw serviceError(result.error, "ArcGIS rejected the related record edit.");
	return result;
}
function asFeature(properties) {
	return { properties };
}
/**
* Add a related row to a parent already saved to the service.
*
* The row starts from the related table's own creation defaults, then takes
* the values given; its foreign key is set from the parent's published key
* and cannot be overridden. Values are validated against the related table's
* fields and domains before anything is sent.
*
* @param layerId - The parent ArcGIS feature layer.
* @param relationship - The relationship, from the parent's side.
* @param related - The related table's metadata.
* @param support - The relationship's {@link arcGISRelatedEditSupport}.
* @param parentKey - The parent's {@link arcGISRelatedParentKey}.
* @param values - The new row's attributes.
* @param signal - Aborts the request; aborting in flight is unconfirmed.
* @returns The new row's service object ID.
*/
async function addArcGISRelatedRecord(layerId, relationship, related, support, parentKey, values, signal) {
	const foreignKey = support.foreignKeyField;
	if (!support.add || !foreignKey) throw new LocalizedError(`${ERROR_KEY}.relatedEditNotSupported`, "This relationship does not allow that related record edit.");
	const properties = arcGISNewFeatureProperties(related, values, { keepGiven: true });
	for (const key of Object.keys(properties)) if (key.toLowerCase() === foreignKey.toLowerCase()) delete properties[key];
	properties[foreignKey] = parentKey;
	const result = await applyRelatedEdit(layerId, relationship, "adds", [{ attributes: arcGISEditAttributes(asFeature(properties), void 0, related) }], signal);
	if (typeof result.objectId !== "number" || !Number.isSafeInteger(result.objectId)) throw MESSAGES.unconfirmed();
	return result.objectId;
}
/**
* Update a related row, sending only the attributes that changed.
*
* The foreign key is managed by this workflow, so an edit that would move the
* row to another parent is refused. A value the user did not change is not
* checked, so rows holding historical values can still be edited.
*
* @param layerId - The parent ArcGIS feature layer.
* @param relationship - The relationship, from the parent's side.
* @param related - The related table's metadata.
* @param support - The relationship's {@link arcGISRelatedEditSupport}.
* @param record - The row as last read from the service.
* @param values - The edited attributes.
* @param signal - Aborts the request; aborting in flight is unconfirmed.
* @returns Whether anything was sent: `false` when no attribute changed.
*/
async function updateArcGISRelatedRecord(layerId, relationship, related, support, record, values, signal) {
	const oid = related.objectIdField;
	if (!support.update || !oid) throw new LocalizedError(`${ERROR_KEY}.relatedEditNotSupported`, "This relationship does not allow that related record edit.");
	const foreignKey = support.foreignKeyField;
	const next = {
		...record.attributes,
		...values
	};
	if (foreignKey && JSON.stringify(valueOf(next, foreignKey)) !== JSON.stringify(valueOf(record.attributes, foreignKey))) throw new LocalizedError(`${ERROR_KEY}.relatedKeyManaged`, "The relationship key of a related record cannot be changed here.");
	const attributes = arcGISEditAttributes(asFeature(next), asFeature(record.attributes), related);
	if (!Object.keys(attributes).length) return false;
	await applyRelatedEdit(layerId, relationship, "updates", [{ attributes: {
		...attributes,
		[oid]: record.objectId
	} }], signal);
	return true;
}
/**
* Delete one related row. The service applies any composite-relationship
* behavior; nothing is cascaded here.
*
* @param layerId - The parent ArcGIS feature layer.
* @param relationship - The relationship, from the parent's side.
* @param support - The relationship's {@link arcGISRelatedEditSupport}.
* @param objectId - The related row's service object ID.
*/
async function deleteArcGISRelatedRecord(layerId, relationship, support, objectId) {
	if (!support.delete) throw new LocalizedError(`${ERROR_KEY}.relatedEditNotSupported`, "This relationship does not allow that related record edit.");
	if (!Number.isSafeInteger(objectId) || objectId < 0) throw new Error(`Invalid ArcGIS object ID: ${objectId}.`);
	await applyRelatedEdit(layerId, relationship, "deletes", String(objectId));
}
// ../../packages/plugins/src/plugins/maplibre-earth-engine.ts
var STORAGE_PREFIX = "geolibre.earthEngine";
var EARTH_ENGINE_CONTROL_POSITION = "top-left";
var EARTH_ENGINE_PANEL_CLASS = "geolibre-earth-engine-panel";
function earthEngineOptions() {
	return {
		className: "geolibre-earth-engine-control",
		collapsed: false,
		oauthClientId: oauthClientIdValue(importMetaEnv().VITE_GEE_OAUTH_CLIENT_ID),
		panelWidth: 420,
		projectId: projectValue(importMetaEnv().VITE_GEE_PROJECT_ID, STORAGE_PREFIX),
		storagePrefix: STORAGE_PREFIX,
		title: "Earth Engine"
	};
}
var earthEngineControl = null;
var earthEngineControlMounted = false;
var earthEngineControlVisible = false;
var earthEngineOpenGeneration = 0;
var earthEngineOpenPending = false;
var earthEngineStoreUnsubscribe = null;
var syncingEarthEngineControlToStore = false;
var syncingEarthEngineStoreToControl = false;
var earthEnginePanelListeners = /* @__PURE__ */ new Set();
var syncedEarthEngineControls = /* @__PURE__ */ new WeakSet();
function openEarthEnginePanel(app) {
	earthEngineOpenPending = true;
	openStandaloneEarthEngineControl(app).catch((error) => {
		console.error("[GeoLibre] Failed to open the Earth Engine panel", error);
		setEarthEngineControlVisible(false);
	}).finally(() => {
		earthEngineOpenPending = false;
	});
}
function toggleEarthEnginePanel(app) {
	if (earthEngineOpenPending && !earthEngineControl) {
		earthEngineOpenGeneration += 1;
		earthEngineOpenPending = false;
		return;
	}
	if (earthEngineControlVisible) {
		hideEarthEngineControl(earthEngineControl);
		return;
	}
	openEarthEnginePanel(app);
}
function closeEarthEnginePanel(app) {
	earthEngineOpenGeneration += 1;
	earthEngineOpenPending = false;
	earthEngineStoreUnsubscribe?.();
	earthEngineStoreUnsubscribe = null;
	if (earthEngineControl && earthEngineControlMounted) app.removeMapControl(earthEngineControl);
	earthEngineControl = null;
	earthEngineControlMounted = false;
	setEarthEngineControlVisible(false);
}
function isEarthEnginePanelVisible() {
	return earthEngineControlVisible;
}
function subscribeEarthEnginePanel(listener) {
	earthEnginePanelListeners.add(listener);
	return () => earthEnginePanelListeners.delete(listener);
}
async function openStandaloneEarthEngineControl(app) {
	if (!earthEngineControl) {
		const generation = earthEngineOpenGeneration;
		const EarthEngineControl = await loadEarthEngineControlClass();
		if (generation !== earthEngineOpenGeneration) return false;
		earthEngineControl ??= new EarthEngineControl(earthEngineOptions());
	}
	wireEarthEngineLayerSync(earthEngineControl);
	if (!earthEngineControlMounted) {
		if (!app.addMapControl(earthEngineControl, EARTH_ENGINE_CONTROL_POSITION)) {
			earthEngineControl = null;
			earthEngineControlMounted = false;
			setEarthEngineControlVisible(false);
			return false;
		}
		earthEngineControlMounted = true;
	}
	setTimeout(() => {
		showEarthEngineControl(earthEngineControl);
		earthEngineControl?.expand();
		wireEarthEngineCloseButton(earthEngineControl);
		if (earthEngineControl) syncEarthEngineControlLayersToStore(earthEngineControl);
	}, 0);
	preloadEarthEngineAuthLibrary();
	return true;
}
var earthEngineControlClass = null;
/**
* Loads maplibre-gl-earth-engine and builds the GeoLibre control subclass.
*
* The package is about 1.7 MB, so it is imported only when the panel first
* opens rather than at app startup.
*
* @returns The GeoLibre Earth Engine control class.
*/
function loadEarthEngineControlClass() {
	if (earthEngineControlClass) return earthEngineControlClass;
	earthEngineControlClass = __vitePreload(async () => {
		const { PluginControl } = await import("./dist-DV4O8bxz.js");
		return { PluginControl };
	}, __vite__mapDeps([40,41]), import.meta.url).then(({ PluginControl }) => {
		class GeoLibreEarthEngineControl extends PluginControl {
			async authenticate(projectId, oauthClientId) {
				const isTauriAuth = shouldUseTauriEarthEngineOAuth();
				if (isTauriAuth) {
					const activeOAuthClientId = oauthClientIdValue(oauthClientId || activeOAuthClientIdFromControl(this));
					if (tokenFromControlOptions(this)?.accessToken) {
						try {
							clearEarthEngineFunctionInfo();
							await super.authenticate(projectId, activeOAuthClientId);
						} finally {
							await closeTauriOauthPopups();
						}
						return;
					}
					const token = await authenticateEarthEngine(activeOAuthClientId);
					if (token?.accessToken) {
						await closeTauriOauthPopups();
						applyTokenToControlOptions(this, token);
						try {
							clearEarthEngineFunctionInfo();
							await super.authenticate(projectId, activeOAuthClientId);
						} finally {
							await closeTauriOauthPopups();
						}
						return;
					}
				}
				try {
					clearEarthEngineFunctionInfo();
					await super.authenticate(projectId, oauthClientId);
				} finally {
					if (isTauriAuth) await closeTauriOauthPopups();
				}
			}
			async loadAsset(assetId, vis) {
				clearEarthEngineFunctionInfo();
				await super.loadAsset(assetId, vis);
			}
			async runScript(script, vis) {
				clearEarthEngineFunctionInfo();
				await super.runScript(script, vis);
			}
		}
		return GeoLibreEarthEngineControl;
	});
	earthEngineControlClass.catch(() => {
		earthEngineControlClass = null;
	});
	return earthEngineControlClass;
}
function activeOAuthClientIdFromControl(control) {
	const internals = control;
	return internals._authOAuthClientInput?.value || internals._oauthClientId || internals._options?.oauthClientId || "";
}
function tokenFromControlOptions(control) {
	const options = control._options;
	if (!options?.accessToken) return null;
	return {
		accessToken: options.accessToken,
		tokenType: options.tokenType || "Bearer",
		expiresIn: options.tokenExpiresIn || 3600
	};
}
function applyTokenToControlOptions(control, token) {
	const options = control._options;
	if (!options || !token.accessToken) return;
	options.accessToken = token.accessToken.replace(/^Bearer\s+/i, "").trim();
	options.tokenType = token.tokenType || "Bearer";
	options.tokenExpiresIn = token.expiresIn || 3600;
}
function wireEarthEngineLayerSync(control) {
	if (syncedEarthEngineControls.has(control)) return;
	syncedEarthEngineControls.add(control);
	const methods = control;
	const originalRenderLayersList = methods._renderLayersList?.bind(control);
	if (originalRenderLayersList) methods._renderLayersList = () => {
		originalRenderLayersList();
		syncEarthEngineControlLayersToStore(control);
	};
	const originalApplyLayerOpacity = methods._applyLayerOpacity?.bind(control);
	if (originalApplyLayerOpacity) methods._applyLayerOpacity = (layer) => {
		originalApplyLayerOpacity(layer);
		syncEarthEngineControlLayersToStore(control);
	};
	const originalApplyLayerVisibility = methods._applyLayerVisibility?.bind(control);
	if (originalApplyLayerVisibility) methods._applyLayerVisibility = (layer) => {
		originalApplyLayerVisibility(layer);
		syncEarthEngineControlLayersToStore(control);
	};
	const originalRemoveManagedLayer = methods._removeManagedLayer?.bind(control);
	if (originalRemoveManagedLayer) methods._removeManagedLayer = (layerId) => {
		originalRemoveManagedLayer(layerId);
		syncEarthEngineControlLayersToStore(control);
	};
	earthEngineStoreUnsubscribe ??= useAppStore.subscribe((state, previous) => {
		if (syncingEarthEngineControlToStore || !earthEngineControl) return;
		const previousEarthEngineLayerIds = new Set(previous.layers.filter(isEarthEngineStoreLayer).map((layer) => layer.id));
		const currentById = new Map(state.layers.map((layer) => [layer.id, layer]));
		const controlLayers = earthEngineControlLayers(earthEngineControl);
		let needsRender = false;
		const removedLayerIds = /* @__PURE__ */ new Set();
		syncingEarthEngineStoreToControl = true;
		try {
			for (const layer of controlLayers) {
				const storeLayer = currentById.get(layer.id);
				if (!storeLayer) {
					removeEarthEngineControlLayer(earthEngineControl, layer.id);
					removedLayerIds.add(layer.id);
					needsRender = true;
					continue;
				}
				if (!isEarthEngineStoreLayer(storeLayer)) continue;
				if (layer.visible !== storeLayer.visible) {
					layer.visible = storeLayer.visible;
					applyEarthEngineLayerVisibility(earthEngineControl, layer);
					needsRender = true;
				}
				if (layer.opacity !== storeLayer.opacity) {
					layer.opacity = storeLayer.opacity;
					applyEarthEngineLayerOpacity(earthEngineControl, layer);
					needsRender = true;
				}
			}
			for (const previousId of previousEarthEngineLayerIds) {
				if (currentById.has(previousId)) continue;
				if (removedLayerIds.has(previousId)) continue;
				removeEarthEngineControlLayer(earthEngineControl, previousId);
				needsRender = true;
			}
		} finally {
			syncingEarthEngineStoreToControl = false;
		}
		if (needsRender) renderEarthEngineLayersList(earthEngineControl);
	});
}
function syncEarthEngineControlLayersToStore(control) {
	if (syncingEarthEngineStoreToControl) return;
	const controlLayers = earthEngineControlLayers(control);
	const controlLayerIds = new Set(controlLayers.map((layer) => layer.id));
	const store = useAppStore.getState();
	syncingEarthEngineControlToStore = true;
	try {
		for (const storeLayer of store.layers) {
			if (!isEarthEngineStoreLayer(storeLayer)) continue;
			if (!controlLayerIds.has(storeLayer.id)) store.removeLayer(storeLayer.id);
		}
		for (const controlLayer of controlLayers) {
			const layer = createEarthEngineStoreLayer(controlLayer);
			const existing = useAppStore.getState().layers.find((current) => current.id === layer.id);
			if (existing) {
				if (existing.name !== layer.name || existing.visible !== layer.visible || existing.opacity !== layer.opacity || JSON.stringify(existing.metadata) !== JSON.stringify(layer.metadata)) useAppStore.getState().updateLayer(layer.id, {
					metadata: layer.metadata,
					name: layer.name,
					opacity: layer.opacity,
					source: layer.source,
					sourcePath: layer.sourcePath,
					visible: layer.visible
				});
				continue;
			}
			useAppStore.getState().addLayer(layer);
		}
	} finally {
		syncingEarthEngineControlToStore = false;
	}
}
function createEarthEngineStoreLayer(controlLayer) {
	return {
		id: controlLayer.id,
		name: controlLayer.name,
		type: "raster",
		source: {
			sourceId: controlLayer.sourceId,
			tiles: [controlLayer.tileUrl],
			type: "raster"
		},
		visible: controlLayer.visible,
		opacity: controlLayer.opacity,
		style: { ...DEFAULT_LAYER_STYLE },
		metadata: {
			assetId: controlLayer.assetId,
			earthEngineLayerId: controlLayer.id,
			earthEngineLayerName: controlLayer.name,
			externalNativeLayer: true,
			identifiable: false,
			nativeLayerIds: [controlLayer.layerId],
			sourceId: controlLayer.sourceId,
			sourceIds: [controlLayer.sourceId],
			sourceKind: "earth-engine-raster",
			tileType: "raster",
			tileUrl: controlLayer.tileUrl
		},
		sourcePath: controlLayer.assetId ?? controlLayer.name
	};
}
function isEarthEngineStoreLayer(layer) {
	return layer.type === "raster" && layer.metadata.sourceKind === "earth-engine-raster" && layer.metadata.externalNativeLayer === true;
}
function earthEngineControlLayers(control) {
	const layers = control._layers;
	return Array.isArray(layers) ? layers : [];
}
function removeEarthEngineControlLayer(control, layerId) {
	control._removeManagedLayer?.(layerId);
}
function applyEarthEngineLayerOpacity(control, layer) {
	control._applyLayerOpacity?.(layer);
}
function applyEarthEngineLayerVisibility(control, layer) {
	control._applyLayerVisibility?.(layer);
}
function renderEarthEngineLayersList(control) {
	control._renderLayersList?.();
}
function wireEarthEngineCloseButton(control) {
	const panel = earthEnginePanelElement(control);
	applyEarthEnginePanelClass(panel);
	const closeButton = panel?.querySelector(".plugin-control-close");
	if (!closeButton || closeButton.dataset.geolibreCloseWired === "true") return;
	closeButton.dataset.geolibreCloseWired = "true";
	closeButton.addEventListener("click", () => hideEarthEngineControl(control));
}
function hideEarthEngineControl(control) {
	const container = earthEngineContainerElement(control);
	const panel = earthEnginePanelElement(control);
	applyEarthEnginePanelClass(panel);
	if (container) container.style.display = "none";
	if (panel) panel.style.display = "none";
	setEarthEngineControlVisible(false);
}
function showEarthEngineControl(control) {
	const container = earthEngineContainerElement(control);
	const panel = earthEnginePanelElement(control);
	applyEarthEnginePanelClass(panel);
	if (container) container.style.display = "";
	if (panel) panel.style.display = "";
	setEarthEngineControlVisible(true);
}
function applyEarthEnginePanelClass(panel) {
	panel?.classList.add(EARTH_ENGINE_PANEL_CLASS);
}
function earthEngineContainerElement(control) {
	return control?._container;
}
function earthEnginePanelElement(control) {
	return control?._panel;
}
function setEarthEngineControlVisible(visible) {
	if (earthEngineControlVisible === visible) return;
	earthEngineControlVisible = visible;
	for (const listener of earthEnginePanelListeners) listener();
}
export { isPlanetaryComputerPanelSupported as $, getTimeSliderPixelSources as A, isPixelIdentifiableSourceType as B, listArcGISAttachments as C, setTimeSliderSymbology as D, parseBandList as E, seriesToFeatureCollection as F, restoreThreeDTilesLayers as G, addThreeDTilesLayerFromUrl as H, valueAtBand as I, addPlanetaryComputerItemLayer as J, probeArcgisI3sLayers as K, PixelOutsideCoverageError as L, ordinalSteps as M, queryPixelTimeSeries as N, bandOptionsFromResults as O, registerPixelSeriesReader as P, identifyPlanetaryComputerLayer as Q, getPixelIdentifiableSource as R, downloadArcGISAttachment as S, getTimeSliderSymbology as T, closeThreeDTilesLayerPanel as U, THREE_D_TILES_SOURCE_KIND as V, openThreeDTilesLayerPanel as W, closePlanetaryComputerPanel as X, addPlanetaryComputerMosaicLayer as Y, getPlanetaryComputerClients as Z, addArcGISAttachment as _, toggleEarthEnginePanel as a, PLANETARY_COMPUTER_STAC_URL as at, arcGISRelatedAttachmentSupport as b, arcGISRelatedFields as c, arcGISRelatedParentObjectId as d, openPlanetaryComputerPanel as et, arcGISRelationships as f, updateArcGISRelatedRecord as g, queryArcGISRelatedRecords as h, subscribeEarthEnginePanel as i, setPlanetaryComputerCustomActions as it, hasTimeSliderRasterStack as j, downsampleSteps as k, arcGISRelatedNewRecordDefaults as l, fetchArcGISRelatedTableInfo as m, isEarthEnginePanelVisible as n, restorePlanetaryComputerLayers as nt, addArcGISRelatedRecord as o, planetaryComputerLabels as ot, deleteArcGISRelatedRecord as p, setI3sBuildingNodeVisible as q, openEarthEnginePanel as r, searchPlanetaryComputerItems as rt, arcGISRelatedEditSupport as s, setPlanetaryComputerLabels as st, closeEarthEnginePanel as t, planetaryComputerItemDate as tt, arcGISRelatedParentKey as u, arcGISAttachmentObjectId as v, updateArcGISAttachment as w, deleteArcGISAttachments as x, arcGISAttachmentSupport as y, identifyTimeSliderPixel as z };
