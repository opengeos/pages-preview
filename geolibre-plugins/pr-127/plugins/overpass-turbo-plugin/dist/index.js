//#region src/lib/core/messages.ts
var UI_MESSAGES = {
	controlTitle: "Plugin Control",
	closePanel: "Close panel",
	timeoutLabel: "Timeout (seconds)",
	layerNameLabel: "Layer name",
	advancedOptions: "Advanced options",
	pickerMode: "Picker",
	advancedMode: "Advanced",
	queryEditorLabel: "Overpass query",
	pickerModeUnavailable: "Picker cannot represent this query. It remains saved in Advanced; Run Query will use the selected Picker filters.",
	emptyQuery: "Enter an Overpass query before running it.",
	uniqueByIdLabel: "Add only unique objects by ID",
	invalidTimeout: "Enter a whole timeout value of at least 1 second.",
	tagFilterLabel: "Filter by tag",
	chooseTag: "Choose a tag...",
	customTagKey: "Tag key",
	customTagValue: "Tag value",
	addTag: "Add tag",
	tagRequired: "Enter both a tag key and value.",
	noPickerFilters: "Select at least one tag filter before running a query.",
	removeTagFilter: (label) => `Remove ${label} filter`,
	runQuery: "Run Query",
	mapUnavailable: "Map is not available.",
	queryRunning: "Running Overpass query...",
	queryLoading: "Sending the query to Overpass, downloading results, and preparing map features…",
	cancelQuery: "Cancel query",
	queryCancelled: "Query cancelled.",
	noSupportedGeometry: "The query returned no objects.",
	objectsDisplayed: (count) => `Displayed objects: ${count}.`,
	unableToLoadOverpassData: "Unable to load Overpass data.",
	invalidOverpassResponse: "Overpass API returned an invalid response.",
	overpassRequestFailed: (status) => `Overpass API request failed (${status}).`,
	failedToRegisterLayer: "Failed to register native layer.",
	unableToAddLayer: "Unable to add layer to the map.",
	failedToAddLayer: "Failed to add layer to the map.",
	overpassLayerName: "Overpass data",
	overpassSourceName: "Overpass API",
	aboutTitle: "About this plugin",
	aboutDescription: "Downloads OpenStreetMap data from the Overpass API for the visible map area and adds it as a layer.",
	aboutSteps: [
		"Move the map to the area you need.",
		"Pick tags (Picker) or write an Overpass query (Advanced).",
		"Click Run Query. Repeating a query with the same layer name adds objects to that layer."
	],
	aboutVersion: (version) => `Version ${version}`,
	aboutDataSourcePrefix: "Data: ",
	openStreetMapContributors: "© OpenStreetMap contributors",
	openStreetMapCopyrightUrl: "https://www.openstreetmap.org/copyright",
	aboutLicense: " (ODbL), downloaded via ",
	overpassApiUrl: "https://wiki.openstreetmap.org/wiki/Overpass_API",
	overpassAttribution: "© OpenStreetMap contributors (ODbL), via Overpass API"
};
//#endregion
//#region src/lib/core/overpass-data.ts
var OVERPASS_ENDPOINT = "https://overpass-api.de/api/interpreter";
var DEFAULT_OVERPASS_QUERY = "(\n  nwr;\n);";
function buildOverpassQuery(query, bounds) {
	const bbox = `${bounds.south},${bounds.west},${bounds.north},${bounds.east}`;
	const boundedQuery = query.trim().replace(/^\[out:json\]\s*/i, "").replace(/\{\{bbox\}\}/g, bbox).replace(/\b(node|way|relation|area|nwr)((?:\s*\[[^\]]*\])*)\s*;/g, `$1$2(${bbox});`);
	return `[out:json]${/\bout\s+(?:ids|skel|body|tags|meta|geom|center|count|asc|qt|bb)\b[^;]*;/i.test(boundedQuery) ? boundedQuery : `${boundedQuery}\nout body geom;`}`;
}
function overpassResponseToGeoJSON(data) {
	if (!data || typeof data !== "object" || !("elements" in data) || !Array.isArray(data.elements)) throw new Error(UI_MESSAGES.invalidOverpassResponse);
	return {
		type: "FeatureCollection",
		features: data.elements.flatMap((element) => {
			const geometry = overpassElementToGeometry(element);
			if (!geometry) return [];
			return [{
				type: "Feature",
				id: `${element.type}/${element.id}`,
				geometry,
				properties: {
					...element.tags,
					osm_type: element.type,
					osm_id: element.id
				}
			}];
		})
	};
}
function overpassElementToGeometry(element) {
	if (element.type === "node" && typeof element.lat === "number" && Number.isFinite(element.lat) && typeof element.lon === "number" && Number.isFinite(element.lon)) return {
		type: "Point",
		coordinates: [element.lon, element.lat]
	};
	if (element.type === "way" && element.geometry) {
		const coordinates = toPositions(element.geometry);
		if (coordinates.length >= 2) {
			if (isAreaWay(element, coordinates)) return {
				type: "Polygon",
				coordinates: [coordinates]
			};
			return {
				type: "LineString",
				coordinates
			};
		}
	}
	if (element.type === "relation" && (element.tags?.type === "multipolygon" || element.tags?.type === "boundary")) {
		const polygons = relationToPolygons(element);
		if (polygons.length > 0) return {
			type: "MultiPolygon",
			coordinates: polygons
		};
	}
	if (element.type === "relation" && element.members) {
		const lines = element.members.filter((member) => member.type === "way" && member.geometry).map((member) => toPositions(member.geometry ?? [])).filter((coordinates) => coordinates.length >= 2);
		if (lines.length > 0) return {
			type: "MultiLineString",
			coordinates: lines
		};
	}
	if (typeof element.center?.lat === "number" && Number.isFinite(element.center.lat) && typeof element.center.lon === "number" && Number.isFinite(element.center.lon)) return {
		type: "Point",
		coordinates: [element.center.lon, element.center.lat]
	};
	return null;
}
function toPositions(coordinates) {
	return coordinates.filter(({ lat, lon }) => isCoordinate(lat, lon)).map(({ lat, lon }) => [lon, lat]);
}
function isCoordinate(latitude, longitude) {
	return typeof latitude === "number" && Number.isFinite(latitude) && typeof longitude === "number" && Number.isFinite(longitude);
}
function isAreaWay(element, coordinates) {
	if (!isClosedRing(coordinates) || element.tags?.area === "no") return false;
	if (element.tags?.area === "yes") return true;
	const tags = element.tags ?? {};
	if (tags.natural === "coastline" || tags.waterway) return false;
	return [
		"amenity",
		"building",
		"landuse",
		"leisure",
		"military",
		"natural",
		"place",
		"shop",
		"tourism"
	].some((key) => key in tags);
}
function relationToPolygons(element) {
	const members = element.members ?? [];
	const outerRings = stitchRings(members.filter((member) => member.type === "way" && (member.role ?? "outer") === "outer").map((member) => toPositions(member.geometry ?? [])));
	const innerRings = stitchRings(members.filter((member) => member.type === "way" && member.role === "inner").map((member) => toPositions(member.geometry ?? [])));
	const polygons = outerRings.map((outer) => [outer]);
	for (const inner of innerRings) {
		const polygonIndex = outerRings.findIndex((outer) => pointInRing(inner[0], outer));
		if (polygonIndex >= 0) polygons[polygonIndex].push(inner);
	}
	return polygons;
}
function stitchRings(lines) {
	const pending = lines.filter((line) => line.length >= 2).map((line) => [...line]);
	const rings = [];
	while (pending.length > 0) {
		const ring = pending.shift();
		while (!samePosition(ring[0], ring[ring.length - 1])) {
			const endpoint = ring[ring.length - 1];
			const nextIndex = pending.findIndex((line) => samePosition(line[0], endpoint) || samePosition(line[line.length - 1], endpoint));
			if (nextIndex < 0) break;
			let next = pending.splice(nextIndex, 1)[0];
			if (samePosition(next[next.length - 1], endpoint)) next = next.reverse();
			ring.push(...next.slice(1));
		}
		if (isClosedRing(ring)) rings.push(ring);
	}
	return rings;
}
function isClosedRing(coordinates) {
	return coordinates.length >= 4 && samePosition(coordinates[0], coordinates[coordinates.length - 1]);
}
function samePosition(first, second) {
	return first[0] === second[0] && first[1] === second[1];
}
function pointInRing(point, ring) {
	let inside = false;
	for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index++) {
		const [x, y] = ring[index];
		const [previousX, previousY] = ring[previous];
		if (y > point[1] !== previousY > point[1] && point[0] < (previousX - x) * (point[1] - y) / (previousY - y) + x) inside = !inside;
	}
	return inside;
}
async function fetchOverpssData(bounds, query, signal) {
	const response = await fetch(OVERPASS_ENDPOINT, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({ data: buildOverpassQuery(query, bounds) }),
		signal
	});
	if (!response.ok) throw new Error(UI_MESSAGES.overpassRequestFailed(response.status));
	return overpassResponseToGeoJSON(await response.json());
}
//#endregion
//#region src/lib/styles/map-color-tokens.ts
var MAP_COLOR_TOKENS = {
	fillSymbol: "#e4572e",
	templateDataFill: "#2f7ed8"
};
//#endregion
//#region src/VERSION.ts
/** The plugin version. Must match `geolibre-plugin/plugin.json` and `package.json`. */
var PLUGIN_VERSION = "0.1.5";
//#endregion
//#region src/lib/core/available-tags.jsonc?raw
var available_tags_default = "[\r\n  // Add one filter per line. Keep values and labels free of double quotes.\r\n  { \"group\": \"All objects\", \"key\": \"nwr\", \"value\": \"*\", \"label\": \"All map objects (nwr)\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"amenity\", \"value\": \"cafe\", \"label\": \"Cafe\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"amenity\", \"value\": \"restaurant\", \"label\": \"Restaurant\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"amenity\", \"value\": \"bar\", \"label\": \"Bar\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"amenity\", \"value\": \"fast_food\", \"label\": \"Fast food\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"shop\", \"value\": \"bakery\", \"label\": \"Bakery\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"shop\", \"value\": \"supermarket\", \"label\": \"Supermarket\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"shop\", \"value\": \"convenience\", \"label\": \"Convenience store\" },\r\n  { \"group\": \"Food and drink\", \"key\": \"shop\", \"value\": \"greengrocer\", \"label\": \"Greengrocer\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"pharmacy\", \"label\": \"Pharmacy\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"bank\", \"label\": \"Bank\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"atm\", \"label\": \"ATM\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"post_office\", \"label\": \"Post office\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"fuel\", \"label\": \"Fuel station\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"charging_station\", \"label\": \"EV charging station\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"parking\", \"label\": \"Parking\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"toilets\", \"label\": \"Public toilets\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"drinking_water\", \"label\": \"Drinking water\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"amenity\", \"value\": \"recycling\", \"label\": \"Recycling point\" },\r\n  { \"group\": \"Everyday services\", \"key\": \"shop\", \"value\": \"hairdresser\", \"label\": \"Hairdresser\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"school\", \"label\": \"School\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"kindergarten\", \"label\": \"Kindergarten\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"college\", \"label\": \"College\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"university\", \"label\": \"University\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"clinic\", \"label\": \"Clinic\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"hospital\", \"label\": \"Hospital\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"doctors\", \"label\": \"Doctors\" },\r\n  { \"group\": \"Education and health\", \"key\": \"amenity\", \"value\": \"dentist\", \"label\": \"Dentist\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"leisure\", \"value\": \"park\", \"label\": \"Park\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"leisure\", \"value\": \"playground\", \"label\": \"Playground\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"leisure\", \"value\": \"sports_centre\", \"label\": \"Sports centre\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"leisure\", \"value\": \"pitch\", \"label\": \"Sports pitch\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"leisure\", \"value\": \"dog_park\", \"label\": \"Dog park\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"tourism\", \"value\": \"hotel\", \"label\": \"Hotel\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"tourism\", \"value\": \"museum\", \"label\": \"Museum\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"tourism\", \"value\": \"attraction\", \"label\": \"Tourist attraction\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"tourism\", \"value\": \"viewpoint\", \"label\": \"Viewpoint\" },\r\n  { \"group\": \"Places and recreation\", \"key\": \"tourism\", \"value\": \"information\", \"label\": \"Information point\" },\r\n  { \"group\": \"Roads and transport\", \"key\": \"highway\", \"value\": \"*\", \"label\": \"All roads and paths\" },\r\n  { \"group\": \"Roads and transport\", \"key\": \"amenity\", \"value\": \"bus_station\", \"label\": \"Bus station\" },\r\n  { \"group\": \"Roads and transport\", \"key\": \"railway\", \"value\": \"station\", \"label\": \"Railway station\" },\r\n  { \"group\": \"Roads and transport\", \"key\": \"railway\", \"value\": \"tram_stop\", \"label\": \"Tram stop\" },\r\n  { \"group\": \"Roads and transport\", \"key\": \"amenity\", \"value\": \"bicycle_parking\", \"label\": \"Bicycle parking\" },\r\n  { \"group\": \"Roads and transport\", \"key\": \"amenity\", \"value\": \"bicycle_rental\", \"label\": \"Bicycle rental\" },\r\n  { \"group\": \"Areas and buildings\", \"key\": \"building\", \"value\": \"*\", \"label\": \"All buildings\" },\r\n  { \"group\": \"Areas and buildings\", \"key\": \"landuse\", \"value\": \"*\", \"label\": \"All land-use areas\" },\r\n  { \"group\": \"Areas and buildings\", \"key\": \"boundary\", \"value\": \"*\", \"label\": \"All boundaries\" },\r\n  { \"group\": \"Areas and buildings\", \"key\": \"area\", \"value\": \"yes\", \"label\": \"Mapped areas\" },\r\n  { \"group\": \"Addresses\", \"key\": \"addr:housenumber\", \"value\": \"*\", \"label\": \"Address points\" },\r\n  { \"group\": \"Water and hydrography\", \"key\": \"waterway\", \"value\": \"*\", \"label\": \"All waterways\" },\r\n  { \"group\": \"Water and hydrography\", \"key\": \"waterway\", \"value\": \"river\", \"label\": \"Rivers\" },\r\n  { \"group\": \"Water and hydrography\", \"key\": \"waterway\", \"value\": \"stream\", \"label\": \"Streams\" },\r\n  { \"group\": \"Water and hydrography\", \"key\": \"natural\", \"value\": \"water\", \"label\": \"Water bodies\" },\r\n  { \"group\": \"Water and hydrography\", \"key\": \"natural\", \"value\": \"wetland\", \"label\": \"Wetlands\" },\r\n  { \"group\": \"Water and hydrography\", \"key\": \"natural\", \"value\": \"spring\", \"label\": \"Springs\" },\r\n  { \"group\": \"Water and hydrography\", \"key\": \"water\", \"value\": \"*\", \"label\": \"All tagged water areas\" },\r\n  { \"group\": \"Accessibility\", \"key\": \"wheelchair\", \"value\": \"yes\", \"label\": \"Wheelchair accessible\" },\r\n  { \"group\": \"Nature\", \"key\": \"natural\", \"value\": \"wood\", \"label\": \"Woods\" },\r\n  { \"group\": \"Nature\", \"key\": \"leisure\", \"value\": \"nature_reserve\", \"label\": \"Nature reserves\" }\r\n]";
//#endregion
//#region src/lib/core/query-tags.ts
function applyQueryTimeout(query, timeoutSeconds) {
	const timeoutDirective = `[timeout:${timeoutSeconds}];`;
	if (/\[timeout:\s*\d+\s*\]\s*;?/i.test(query)) return query.replace(/\[timeout:\s*\d+\s*\]\s*;?/i, timeoutDirective);
	return `${timeoutDirective}\n${query}`;
}
function applyTagFilters(query, tags) {
	if (tags.length === 0) return query;
	const selectors = tags.map(({ key, value }) => key === "nwr" && value === "*" ? "nwr;" : value === "*" ? `nwr[${JSON.stringify(key)}];` : `nwr[${JSON.stringify(key)}=${JSON.stringify(value)}];`).join("\n  ");
	if (tags.some(({ key, value }) => key === "nwr" && value === "*")) return query.replace(/\bnwr\s*;/g, "nwr;");
	return query.replace(/\bnwr\s*;/g, selectors);
}
var UNIQUE_BY_ID_DIRECTIVE = /^\s*\/\/\s*GeoLibre:\s*unique-by-id=(true|false)\s*$/im;
var TIMEOUT_DIRECTIVE = /^\s*\[timeout:\s*(\d+)\s*\]\s*;?/i;
function buildPickerQuery(tags, timeoutSeconds) {
	return `[timeout:${timeoutSeconds}];\n${applyTagFilters("(\n  nwr;\n);", tags)}\nout body geom;`;
}
function queryForApi(query) {
	return query.replace(UNIQUE_BY_ID_DIRECTIVE, "").trim();
}
function parsePickerQuery(query, uniqueByIdDefault = true) {
	let source = query.trim();
	let uniqueById = uniqueByIdDefault;
	const uniqueDirective = source.match(UNIQUE_BY_ID_DIRECTIVE);
	if (uniqueDirective) {
		uniqueById = uniqueDirective[1].toLowerCase() === "true";
		source = source.replace(UNIQUE_BY_ID_DIRECTIVE, "").trim();
	}
	let timeoutSeconds = 25;
	const timeoutDirective = source.match(TIMEOUT_DIRECTIVE);
	if (timeoutDirective) {
		timeoutSeconds = Number(timeoutDirective[1]);
		if (!Number.isSafeInteger(timeoutSeconds) || timeoutSeconds < 1) return null;
		source = source.replace(TIMEOUT_DIRECTIVE, "").trim();
	}
	source = source.replace(/^\[out:json\]\s*/i, "").trim();
	source = source.replace(/\s*out\s+(?:body\s+)?geom(?:\s+tags)?\s*;\s*$/i, "").trim();
	const groupMatch = source.match(/^\(\s*([\s\S]*?)\s*\)\s*;?$/);
	if (!groupMatch) return null;
	const selectors = groupMatch[1].split(";").map((selector) => selector.trim()).filter(Boolean);
	if (selectors.length === 0) return null;
	const tags = [];
	for (const selector of selectors) {
		if (/^nwr$/i.test(selector)) {
			tags.push({
				key: "nwr",
				value: "*",
				label: "All map objects (nwr)"
			});
			continue;
		}
		const match = selector.match(/^nwr\s*\[\s*("(?:\\.|[^"\\])*")\s*(?:=\s*("(?:\\.|[^"\\])*"))?\s*\]$/i);
		if (!match) return null;
		try {
			const key = JSON.parse(match[1]);
			const value = match[2] ? JSON.parse(match[2]) : "*";
			tags.push({
				key,
				value,
				label: value === "*" ? key : `${key}=${value}`
			});
		} catch {
			return null;
		}
	}
	if (tags.some(({ key, value }) => key === "nwr" && value === "*") && tags.length > 1) return null;
	return {
		tags,
		timeoutSeconds,
		uniqueById
	};
}
//#endregion
//#region src/lib/core/plugin-content.ts
var AVAILABLE_OVERPASS_TAGS = [...available_tags_default.matchAll(/^\s*\{\s*"group"\s*:\s*"([^"]+)"\s*,\s*"key"\s*:\s*"([^"]+)"\s*,\s*"value"\s*:\s*"([^"]+)"\s*,\s*"label"\s*:\s*"([^"]+)"\s*\}\s*,?\s*$/gm)].map(([, group, key, value, label]) => ({
	group,
	key,
	value,
	label
}));
function createPluginContent({ getMap, setStatus, registerNativeLayer, fetchData = fetchOverpssData }) {
	const content = document.createElement("div");
	content.className = "plugin-control-content";
	let mode = "picker";
	const modeSwitch = document.createElement("div");
	modeSwitch.className = "plugin-control-mode-switch";
	modeSwitch.setAttribute("role", "group");
	modeSwitch.setAttribute("aria-label", "Query mode");
	const pickerModeButton = document.createElement("button");
	pickerModeButton.type = "button";
	pickerModeButton.textContent = UI_MESSAGES.pickerMode;
	pickerModeButton.setAttribute("aria-pressed", "true");
	const advancedModeButton = document.createElement("button");
	advancedModeButton.type = "button";
	advancedModeButton.textContent = UI_MESSAGES.advancedMode;
	advancedModeButton.setAttribute("aria-pressed", "false");
	modeSwitch.append(pickerModeButton, advancedModeButton);
	const scrollArea = document.createElement("div");
	scrollArea.className = "plugin-control-scroll-area";
	const modeNotice = document.createElement("div");
	modeNotice.className = "plugin-control-mode-notice";
	modeNotice.setAttribute("role", "status");
	const timeoutRow = document.createElement("label");
	timeoutRow.className = "plugin-control-timeout-row";
	timeoutRow.textContent = UI_MESSAGES.timeoutLabel;
	const timeoutInput = document.createElement("input");
	timeoutInput.className = "plugin-control-input plugin-control-timeout";
	timeoutInput.id = "overpass-query-timeout";
	timeoutInput.type = "number";
	timeoutInput.min = "1";
	timeoutInput.step = "1";
	timeoutInput.value = "25";
	timeoutInput.setAttribute("aria-label", UI_MESSAGES.timeoutLabel);
	timeoutRow.htmlFor = timeoutInput.id;
	timeoutRow.appendChild(timeoutInput);
	const layerNameRow = document.createElement("label");
	layerNameRow.className = "plugin-control-layer-name-row";
	layerNameRow.textContent = UI_MESSAGES.layerNameLabel;
	const layerNameInput = document.createElement("input");
	layerNameInput.className = "plugin-control-input plugin-control-layer-name";
	layerNameInput.type = "text";
	layerNameInput.value = UI_MESSAGES.overpassLayerName;
	layerNameInput.setAttribute("aria-label", UI_MESSAGES.layerNameLabel);
	layerNameRow.appendChild(layerNameInput);
	const selectedTags = /* @__PURE__ */ new Map();
	const featuresByLayerName = /* @__PURE__ */ new Map();
	const layerIdsByName = /* @__PURE__ */ new Map();
	const defaultPickerTag = AVAILABLE_OVERPASS_TAGS.find(({ key, value }) => key === "nwr" && value === "*");
	let selectorInSync = true;
	const tagSelect = document.createElement("select");
	tagSelect.className = "plugin-control-input plugin-control-select";
	tagSelect.setAttribute("aria-label", UI_MESSAGES.tagFilterLabel);
	const chooseTag = document.createElement("option");
	chooseTag.value = "";
	chooseTag.textContent = UI_MESSAGES.chooseTag;
	tagSelect.appendChild(chooseTag);
	const tagsByGroup = /* @__PURE__ */ new Map();
	for (const tag of AVAILABLE_OVERPASS_TAGS) {
		const groupTags = tagsByGroup.get(tag.group) ?? [];
		groupTags.push(tag);
		tagsByGroup.set(tag.group, groupTags);
	}
	for (const [groupName, tags] of tagsByGroup) {
		const optionGroup = document.createElement("optgroup");
		optionGroup.label = groupName;
		for (const tag of tags) {
			const option = document.createElement("option");
			option.value = `${tag.key}=${tag.value}`;
			option.textContent = tag.label;
			optionGroup.appendChild(option);
		}
		tagSelect.appendChild(optionGroup);
	}
	const chips = document.createElement("div");
	chips.className = "plugin-control-chips";
	chips.setAttribute("aria-label", UI_MESSAGES.tagFilterLabel);
	const customTagRow = document.createElement("div");
	customTagRow.className = "plugin-control-custom-tag";
	const customTagKey = document.createElement("input");
	customTagKey.className = "plugin-control-input";
	customTagKey.type = "text";
	customTagKey.placeholder = UI_MESSAGES.customTagKey;
	customTagKey.setAttribute("aria-label", UI_MESSAGES.customTagKey);
	const customTagValue = document.createElement("input");
	customTagValue.className = "plugin-control-input";
	customTagValue.type = "text";
	customTagValue.placeholder = UI_MESSAGES.customTagValue;
	customTagValue.setAttribute("aria-label", UI_MESSAGES.customTagValue);
	const addCustomTag = document.createElement("button");
	addCustomTag.type = "button";
	addCustomTag.className = "plugin-control-add-tag";
	addCustomTag.textContent = UI_MESSAGES.addTag;
	const addTagChip = (tag) => {
		const id = `${tag.key}=${tag.value}`;
		if (selectedTags.has(id)) return;
		const selectsAllObjects = tag.key === "nwr" && tag.value === "*";
		const selectedAllObjects = selectedTags.has("nwr=*");
		if (selectsAllObjects || selectedAllObjects) {
			for (const selectedId of selectedTags.keys()) {
				const option = [...tagSelect.options].find(({ value }) => value === selectedId);
				if (option) option.disabled = false;
			}
			selectedTags.clear();
		}
		selectedTags.set(id, tag);
		const option = [...tagSelect.options].find(({ value }) => value === id);
		if (option) option.disabled = true;
		renderTagChips();
		syncQueryFromPicker();
	};
	const renderTagChips = () => {
		chips.replaceChildren();
		for (const [id, tag] of selectedTags) {
			const chip = document.createElement("button");
			chip.type = "button";
			chip.className = "plugin-control-chip";
			chip.textContent = tag.label;
			chip.title = `${tag.key}=${tag.value}`;
			chip.setAttribute("aria-label", UI_MESSAGES.removeTagFilter(tag.label));
			chip.addEventListener("click", (event) => {
				event.stopPropagation();
				selectedTags.delete(id);
				const option = [...tagSelect.options].find(({ value }) => value === id);
				if (option) option.disabled = false;
				renderTagChips();
				syncQueryFromPicker();
				setStatus("");
			});
			chips.appendChild(chip);
		}
	};
	tagSelect.addEventListener("change", () => {
		const option = tagSelect.selectedOptions[0];
		if (!option?.value) return;
		const [key, value] = option.value.split("=");
		const tag = AVAILABLE_OVERPASS_TAGS.find((candidate) => candidate.key === key && candidate.value === value);
		if (tag) {
			addTagChip(tag);
			setStatus("");
		}
		tagSelect.value = "";
	});
	addCustomTag.addEventListener("click", () => {
		const key = customTagKey.value.trim();
		const value = customTagValue.value.trim();
		if (!key || !value) {
			setStatus(UI_MESSAGES.tagRequired);
			return;
		}
		addTagChip({
			key,
			value,
			label: `${key}=${value}`
		});
		setStatus("");
		customTagKey.value = "";
		customTagValue.value = "";
	});
	customTagRow.append(customTagKey, customTagValue, addCustomTag);
	const advancedOptions = document.createElement("details");
	advancedOptions.className = "plugin-control-advanced-options";
	const advancedOptionsSummary = document.createElement("summary");
	advancedOptionsSummary.textContent = UI_MESSAGES.advancedOptions;
	const uniqueByIdRow = document.createElement("label");
	uniqueByIdRow.className = "plugin-control-unique-by-id-row";
	const uniqueByIdCheckbox = document.createElement("input");
	uniqueByIdCheckbox.className = "plugin-control-unique-by-id";
	uniqueByIdCheckbox.type = "checkbox";
	uniqueByIdCheckbox.checked = true;
	uniqueByIdCheckbox.setAttribute("aria-label", UI_MESSAGES.uniqueByIdLabel);
	uniqueByIdRow.append(uniqueByIdCheckbox, document.createTextNode(UI_MESSAGES.uniqueByIdLabel));
	advancedOptions.append(advancedOptionsSummary, customTagRow, timeoutRow, layerNameRow, uniqueByIdRow);
	const about = document.createElement("details");
	about.className = "plugin-control-about";
	const aboutSummary = document.createElement("summary");
	aboutSummary.textContent = UI_MESSAGES.aboutTitle;
	const aboutDescription = document.createElement("p");
	aboutDescription.textContent = UI_MESSAGES.aboutDescription;
	const aboutSteps = document.createElement("ol");
	for (const step of UI_MESSAGES.aboutSteps) {
		const item = document.createElement("li");
		item.textContent = step;
		aboutSteps.appendChild(item);
	}
	const aboutVersion = document.createElement("p");
	aboutVersion.className = "plugin-control-about-version";
	aboutVersion.textContent = UI_MESSAGES.aboutVersion(PLUGIN_VERSION);
	const createExternalLink = (text, href) => {
		const link = document.createElement("a");
		link.textContent = text;
		link.href = href;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		return link;
	};
	const aboutDataSource = document.createElement("p");
	aboutDataSource.className = "plugin-control-about-source";
	aboutDataSource.append(UI_MESSAGES.aboutDataSourcePrefix, createExternalLink(UI_MESSAGES.openStreetMapContributors, UI_MESSAGES.openStreetMapCopyrightUrl), UI_MESSAGES.aboutLicense, createExternalLink(UI_MESSAGES.overpassSourceName, UI_MESSAGES.overpassApiUrl), ".");
	about.append(aboutSummary, aboutDescription, aboutSteps, aboutDataSource, aboutVersion);
	const queryEditor = document.createElement("textarea");
	queryEditor.className = "plugin-control-input plugin-control-query-editor";
	queryEditor.setAttribute("aria-label", UI_MESSAGES.queryEditorLabel);
	queryEditor.setAttribute("spellcheck", "false");
	const syncQueryFromPicker = () => {
		queryEditor.value = selectedTags.size === 0 ? "" : buildPickerQuery([...selectedTags.values()], Number(timeoutInput.value) || 25);
		selectorInSync = true;
		if (mode === "picker") modeNotice.textContent = "";
	};
	const syncAdvancedOptionsToQuery = () => {
		if (mode === "picker") {
			syncQueryFromPicker();
			return;
		}
		let query = queryEditor.value;
		const timeoutSeconds = Number(timeoutInput.value);
		if (Number.isInteger(timeoutSeconds) && timeoutSeconds >= 1) {
			const timeoutDirective = `[timeout:${timeoutSeconds}];`;
			if (/^\s*\[timeout:\s*\d+\s*\]\s*;?/i.test(query)) query = query.replace(/^\s*\[timeout:\s*\d+\s*\]\s*;?/i, timeoutDirective);
			else query = `${timeoutDirective}\n${query}`;
		}
		queryEditor.value = query;
	};
	const syncAdvancedOptionsFromQuery = () => {
		const timeout = queryEditor.value.match(/^\s*\[timeout:\s*(\d+)\s*\]\s*;?/i);
		if (timeout) timeoutInput.value = timeout[1];
		const uniqueById = queryEditor.value.match(/^\s*\/\/\s*GeoLibre:\s*unique-by-id=(true|false)\s*$/im);
		if (uniqueById) uniqueByIdCheckbox.checked = uniqueById[1].toLowerCase() === "true";
	};
	const setMode = (nextMode) => {
		mode = nextMode;
		const advanced = mode === "advanced";
		pickerModeButton.setAttribute("aria-pressed", String(!advanced));
		advancedModeButton.setAttribute("aria-pressed", String(advanced));
		tagSelect.hidden = advanced;
		chips.hidden = advanced;
		customTagRow.hidden = advanced;
		queryEditor.hidden = !advanced;
		modeNotice.textContent = advanced || selectorInSync ? "" : UI_MESSAGES.pickerModeUnavailable;
	};
	pickerModeButton.addEventListener("click", () => {
		const parsed = parsePickerQuery(queryEditor.value, uniqueByIdCheckbox.checked);
		if (!parsed) {
			selectorInSync = false;
			setMode("picker");
			return;
		}
		selectedTags.clear();
		for (const tag of parsed.tags) selectedTags.set(`${tag.key}=${tag.value}`, tag);
		for (const option of tagSelect.options) option.disabled = selectedTags.has(option.value);
		renderTagChips();
		timeoutInput.value = String(parsed.timeoutSeconds);
		uniqueByIdCheckbox.checked = parsed.uniqueById;
		selectorInSync = true;
		setMode("picker");
	});
	advancedModeButton.addEventListener("click", () => {
		if (mode === "picker" && selectorInSync) syncQueryFromPicker();
		setMode("advanced");
	});
	queryEditor.addEventListener("input", () => {
		selectorInSync = false;
		syncAdvancedOptionsFromQuery();
		modeNotice.textContent = "";
	});
	timeoutInput.addEventListener("input", syncAdvancedOptionsToQuery);
	uniqueByIdCheckbox.addEventListener("change", syncAdvancedOptionsToQuery);
	const downloadButton = document.createElement("button");
	downloadButton.type = "button";
	downloadButton.className = "plugin-control-action";
	downloadButton.textContent = UI_MESSAGES.runQuery;
	const loadingOverlay = document.createElement("div");
	loadingOverlay.className = "plugin-control-loading";
	loadingOverlay.hidden = true;
	loadingOverlay.setAttribute("role", "alertdialog");
	loadingOverlay.setAttribute("aria-live", "assertive");
	loadingOverlay.setAttribute("aria-modal", "true");
	loadingOverlay.setAttribute("aria-label", UI_MESSAGES.queryLoading);
	const loadingPanel = document.createElement("div");
	loadingPanel.className = "plugin-control-loading-panel";
	const loadingSpinner = document.createElement("div");
	loadingSpinner.className = "plugin-control-loading-spinner";
	loadingSpinner.setAttribute("aria-hidden", "true");
	const loadingDescription = document.createElement("p");
	loadingDescription.textContent = UI_MESSAGES.queryLoading;
	const cancelQueryButton = document.createElement("button");
	cancelQueryButton.type = "button";
	cancelQueryButton.className = "plugin-control-cancel-query";
	cancelQueryButton.textContent = UI_MESSAGES.cancelQuery;
	loadingPanel.append(loadingSpinner, loadingDescription, cancelQueryButton);
	loadingOverlay.appendChild(loadingPanel);
	let activeQueryController;
	cancelQueryButton.addEventListener("click", () => {
		const controller = activeQueryController;
		if (!controller) return;
		activeQueryController = void 0;
		controller.abort();
		setLoadingState(false);
		setStatus(UI_MESSAGES.queryCancelled);
		downloadButton.focus();
	});
	downloadButton.addEventListener("click", async () => {
		const mapBounds = getMap()?.getBounds();
		if (!mapBounds) {
			setStatus(UI_MESSAGES.mapUnavailable);
			return;
		}
		let queryController;
		try {
			const timeoutSeconds = Number(timeoutInput.value);
			if (mode === "picker" && (!Number.isInteger(timeoutSeconds) || timeoutSeconds < 1)) {
				setStatus(UI_MESSAGES.invalidTimeout);
				return;
			}
			if (mode === "picker" && selectedTags.size === 0) {
				setStatus(UI_MESSAGES.noPickerFilters);
				return;
			}
			let query;
			if (mode === "advanced") {
				query = queryForApi(queryEditor.value);
				if (!query) {
					setStatus(UI_MESSAGES.emptyQuery);
					return;
				}
			} else query = applyQueryTimeout(applyTagFilters(DEFAULT_OVERPASS_QUERY, [...selectedTags.values()]), timeoutSeconds);
			queryController = new AbortController();
			activeQueryController = queryController;
			setLoadingState(true);
			scrollArea.scrollTop = 0;
			setStatus(UI_MESSAGES.queryRunning);
			cancelQueryButton.focus();
			const geojson = await fetchData({
				south: mapBounds.getSouth(),
				west: mapBounds.getWest(),
				north: mapBounds.getNorth(),
				east: mapBounds.getEast()
			}, query, queryController.signal);
			if (queryController.signal.aborted) return;
			if (geojson.features.length === 0) {
				setStatus(UI_MESSAGES.noSupportedGeometry);
				return;
			}
			const layerName = layerNameInput.value.trim() || UI_MESSAGES.overpassLayerName;
			let layerIds = layerIdsByName.get(layerName);
			if (!layerIds) {
				const layerId = layerName === UI_MESSAGES.overpassLayerName ? "overpass-data" : `overpass-data-${hashLayerName(layerName)}`;
				layerIds = {
					id: layerId,
					nativeLayerIds: [
						`${layerId}-fill-layer`,
						`${layerId}-line-layer`,
						`${layerId}-point-layer`
					],
					sourceIds: [`${layerId}-source`]
				};
				layerIdsByName.set(layerName, layerIds);
			}
			const uniqueById = uniqueByIdCheckbox.checked;
			const queryFeatures = uniqueById ? geojson.features.filter((feature, index, features) => feature.id === void 0 || features.findIndex((candidate) => candidate.id === feature.id) === index) : geojson.features;
			const accumulatedFeatures = featuresByLayerName.get(layerName) ?? [];
			const existingFeatureIds = uniqueById ? new Set(accumulatedFeatures.flatMap(({ id }) => id === void 0 ? [] : [id])) : void 0;
			const appendedFeatures = existingFeatureIds ? queryFeatures.filter((feature) => {
				if (feature.id === void 0 || !existingFeatureIds.has(feature.id)) {
					if (feature.id !== void 0) existingFeatureIds.add(feature.id);
					return true;
				}
				return false;
			}) : queryFeatures;
			const allFeatures = [...accumulatedFeatures, ...appendedFeatures];
			const layerGeojson = {
				...geojson,
				features: allFeatures
			};
			if (registerNativeLayer({
				...layerIds,
				name: layerName,
				geojson: layerGeojson,
				opacity: 1,
				style: {
					circleRadius: 6,
					fillColor: MAP_COLOR_TOKENS.fillSymbol,
					strokeColor: MAP_COLOR_TOKENS.fillSymbol,
					strokeWidth: 2,
					fillOpacity: .65
				},
				metadata: {
					source: UI_MESSAGES.overpassSourceName,
					attribution: UI_MESSAGES.overpassAttribution,
					featureCount: allFeatures.length
				}
			})) {
				featuresByLayerName.set(layerName, allFeatures);
				setStatus(UI_MESSAGES.objectsDisplayed(allFeatures.length));
			}
		} catch (error) {
			if (!queryController?.signal.aborted) setStatus(error instanceof Error ? error.message : UI_MESSAGES.unableToLoadOverpassData);
		} finally {
			if (queryController && activeQueryController === queryController) {
				activeQueryController = void 0;
				setLoadingState(false);
			}
		}
	});
	const status = document.createElement("div");
	status.className = "plugin-control-status";
	status.textContent = "";
	const footer = document.createElement("div");
	footer.className = "plugin-control-footer";
	const setLoadingState = (isLoading) => {
		loadingOverlay.hidden = !isLoading;
		modeSwitch.inert = isLoading;
		modeNotice.inert = isLoading;
		scrollArea.inert = isLoading;
		footer.inert = isLoading;
		downloadButton.disabled = isLoading;
		if (isLoading) content.setAttribute("aria-busy", "true");
		else content.removeAttribute("aria-busy");
	};
	if (defaultPickerTag) addTagChip(defaultPickerTag);
	syncQueryFromPicker();
	scrollArea.append(tagSelect, chips, queryEditor, advancedOptions, about);
	footer.append(status, downloadButton);
	content.append(modeSwitch, modeNotice, scrollArea, footer, loadingOverlay);
	setMode("picker");
	return {
		content,
		status
	};
}
function hashLayerName(layerName) {
	let hash = 2166136261;
	for (let index = 0; index < layerName.length; index += 1) hash = Math.imul(hash ^ layerName.charCodeAt(index), 16777619);
	return (hash >>> 0).toString(16);
}
//#endregion
//#region src/lib/core/PluginControl.ts
/**
* Default options for the PluginControl.
*
* The host-capability callbacks default to safe no-ops so the control works as a
* standalone MapLibre control. The GeoLibre wrapper (`src/geolibre.ts`) binds
* them to the real host APIs when the plugin runs inside GeoLibre.
*/
var DEFAULT_OPTIONS = {
	collapsed: true,
	position: "top-right",
	title: UI_MESSAGES.controlTitle,
	panelWidth: 300,
	className: "",
	pickFiles: () => Promise.resolve(null),
	registerNativeLayer: () => false,
	unregisterNativeLayer: () => void 0
};
/**
* A template MapLibre GL control that can be customized for various plugin needs.
*
* @example
* ```typescript
* const control = new PluginControl({
*   title: 'My Custom Control',
*   collapsed: false,
*   panelWidth: 320,
* });
* map.addControl(control, 'top-right');
* ```
*/
var PluginControl = class {
	_map;
	_mapContainer;
	_container;
	_panel;
	_status;
	_options;
	_state;
	_eventHandlers = new globalThis.Map();
	_registeredNativeLayerIds = [];
	_registeredMapLayers = new globalThis.Map();
	_resizeHandler = null;
	_mapResizeHandler = null;
	_clickOutsideHandler = null;
	/**
	* Creates a new PluginControl instance.
	*
	* @param options - Configuration options for the control
	*/
	constructor(options) {
		this._options = {
			...DEFAULT_OPTIONS,
			...options
		};
		this._state = {
			collapsed: this._options.collapsed,
			panelWidth: this._options.panelWidth,
			data: {}
		};
	}
	/**
	* Called when the control is added to the map.
	* Implements the IControl interface.
	*
	* @param map - The MapLibre GL map instance
	* @returns The control's container element
	*/
	onAdd(map) {
		this._map = map;
		this._mapContainer = map.getContainer();
		this._container = this._createContainer();
		this._panel = this._createPanel();
		this._mapContainer.appendChild(this._panel);
		this._setupEventListeners();
		if (!this._state.collapsed) {
			this._panel.classList.add("expanded");
			requestAnimationFrame(() => {
				this._updatePanelPosition();
			});
		}
		return this._container;
	}
	/**
	* Called when the control is removed from the map.
	* Implements the IControl interface.
	*/
	onRemove() {
		if (this._resizeHandler) {
			window.removeEventListener("resize", this._resizeHandler);
			this._resizeHandler = null;
		}
		if (this._mapResizeHandler && this._map) {
			this._map.off("resize", this._mapResizeHandler);
			this._mapResizeHandler = null;
		}
		if (this._clickOutsideHandler) {
			document.removeEventListener("click", this._clickOutsideHandler);
			this._clickOutsideHandler = null;
		}
		this._clearNativeLayers();
		this._clearMapLayers();
		this._panel?.parentNode?.removeChild(this._panel);
		this._container?.parentNode?.removeChild(this._container);
		this._map = void 0;
		this._mapContainer = void 0;
		this._container = void 0;
		this._panel = void 0;
		this._status = void 0;
		this._eventHandlers.clear();
	}
	/**
	* Gets the current state of the control.
	*
	* @returns The current plugin state
	*/
	getState() {
		return { ...this._state };
	}
	/**
	* Updates the control state.
	*
	* @param newState - Partial state to merge with current state
	*/
	setState(newState) {
		this._state = {
			...this._state,
			...newState
		};
		this._emit("statechange");
	}
	/**
	* Toggles the collapsed state of the control panel.
	*/
	toggle() {
		this._state.collapsed = !this._state.collapsed;
		if (this._panel) if (this._state.collapsed) {
			this._panel.classList.remove("expanded");
			this._emit("collapse");
		} else {
			this._panel.classList.add("expanded");
			this._updatePanelPosition();
			this._emit("expand");
		}
		this._emit("statechange");
	}
	/**
	* Expands the control panel.
	*/
	expand() {
		if (this._state.collapsed) this.toggle();
	}
	/**
	* Collapses the control panel.
	*/
	collapse() {
		if (!this._state.collapsed) this.toggle();
	}
	/**
	* Registers an event handler.
	*
	* @param event - The event type to listen for
	* @param handler - The callback function
	*/
	on(event, handler) {
		if (!this._eventHandlers.has(event)) this._eventHandlers.set(event, /* @__PURE__ */ new Set());
		this._eventHandlers.get(event).add(handler);
	}
	/**
	* Removes an event handler.
	*
	* @param event - The event type
	* @param handler - The callback function to remove
	*/
	off(event, handler) {
		this._eventHandlers.get(event)?.delete(handler);
	}
	/**
	* Gets the map instance.
	*
	* @returns The MapLibre GL map instance or undefined if not added to a map
	*/
	getMap() {
		return this._map;
	}
	/**
	* Gets the control container element.
	*
	* @returns The container element or undefined if not added to a map
	*/
	getContainer() {
		return this._container;
	}
	/**
	* Open the host's directory picker and act on the chosen files.
	*
	* Calls the `pickFiles` option, which the GeoLibre wrapper binds to
	* `app.pickLocalDirectoryFiles`. Outside GeoLibre (or on a host without file
	* access) it resolves to `null`. Replace the body with your own handling of
	* the returned files.
	*
	* @returns The selected files, or `null` if the picker was unavailable or cancelled
	*/
	async openFiles() {
		try {
			const files = await this._options.pickFiles();
			if (!files || files.length === 0) {
				this._setStatus("No files selected.");
				return files;
			}
			this._setStatus(`Selected ${files.length} file(s).`);
			return files;
		} catch {
			this._setStatus("Unable to open folder.");
			return null;
		}
	}
	/**
	* Load plugin data referenced by a deep link.
	*
	* Satisfies {@link DeepLinkConsumer}: the GeoLibre wrapper routes a
	* `?plugin-data=<value>` URL parameter here. This template implementation just
	* records the value and demonstrates handing a native layer to the host;
	* replace it with your own fetch-and-render logic.
	*
	* @param value - The deep-link value (for example, a dataset URL)
	*/
	async loadFromUrl(value) {
		this.setState({ data: {
			...this._state.data,
			loadedUrl: value
		} });
		this._setStatus(`Loaded: ${value}`);
		this._registerNativeLayer({
			id: "plugin-template-data",
			name: "Plugin data",
			nativeLayerIds: ["plugin-template-data-layer"],
			sourceIds: ["plugin-template-data-source"],
			opacity: 1,
			style: {
				circleRadius: 5,
				fillColor: MAP_COLOR_TOKENS.templateDataFill
			},
			metadata: { sourceUrl: value }
		});
	}
	/**
	* Register a native layer with the host, tracking its id so it can be removed
	* when the control is torn down. No-ops outside GeoLibre.
	*
	* @param layer - The native layer registration payload
	*/
	_registerNativeLayer(layer) {
		try {
			if (this._options.registerNativeLayer(layer) === false) return this._registerMapLayer(layer);
			if (!this._registeredNativeLayerIds.includes(layer.id)) this._registeredNativeLayerIds.push(layer.id);
			return true;
		} catch {
			this._setStatus(UI_MESSAGES.failedToRegisterLayer);
			return false;
		}
	}
	_registerMapLayer(layer) {
		const map = this._map;
		const sourceId = layer.sourceIds[0];
		if (!map || !layer.geojson || !sourceId || layer.nativeLayerIds.length === 0) {
			this._setStatus(UI_MESSAGES.unableToAddLayer);
			return false;
		}
		this._removeMapLayers(this._registeredMapLayers.get(layer.id));
		try {
			map.addSource(sourceId, {
				type: "geojson",
				data: layer.geojson
			});
			if (layer.nativeLayerIds.length >= 3) {
				const [fillLayerId, lineLayerId, pointLayerId] = layer.nativeLayerIds;
				map.addLayer({
					id: fillLayerId,
					type: "fill",
					source: sourceId,
					filter: [
						"==",
						"$type",
						"Polygon"
					],
					paint: {
						"fill-color": layer.style.fillColor ?? MAP_COLOR_TOKENS.fillSymbol,
						"fill-opacity": (layer.style.fillOpacity ?? 1) * layer.opacity,
						"fill-outline-color": layer.style.strokeColor ?? layer.style.fillColor ?? MAP_COLOR_TOKENS.fillSymbol
					}
				});
				map.addLayer({
					id: lineLayerId,
					type: "line",
					source: sourceId,
					filter: [
						"==",
						"$type",
						"LineString"
					],
					paint: {
						"line-color": layer.style.strokeColor ?? layer.style.fillColor ?? MAP_COLOR_TOKENS.fillSymbol,
						"line-width": layer.style.strokeWidth ?? 2,
						"line-opacity": (layer.style.fillOpacity ?? 1) * layer.opacity
					}
				});
				map.addLayer({
					id: pointLayerId,
					type: "circle",
					source: sourceId,
					filter: [
						"==",
						"$type",
						"Point"
					],
					paint: {
						"circle-radius": layer.style.circleRadius ?? 6,
						"circle-color": layer.style.fillColor ?? MAP_COLOR_TOKENS.fillSymbol,
						"circle-opacity": (layer.style.fillOpacity ?? 1) * layer.opacity,
						...layer.style.strokeColor ? { "circle-stroke-color": layer.style.strokeColor } : {},
						...layer.style.strokeWidth !== void 0 ? { "circle-stroke-width": layer.style.strokeWidth } : {}
					}
				});
			} else for (const layerId of layer.nativeLayerIds) map.addLayer({
				id: layerId,
				type: "circle",
				source: sourceId,
				paint: {
					"circle-radius": layer.style.circleRadius ?? 6,
					"circle-color": layer.style.fillColor ?? MAP_COLOR_TOKENS.fillSymbol,
					"circle-opacity": (layer.style.fillOpacity ?? 1) * layer.opacity,
					...layer.style.strokeColor ? { "circle-stroke-color": layer.style.strokeColor } : {},
					...layer.style.strokeWidth !== void 0 ? { "circle-stroke-width": layer.style.strokeWidth } : {}
				}
			});
			this._registeredMapLayers.set(layer.id, {
				sourceIds: [sourceId],
				layerIds: [...layer.nativeLayerIds]
			});
			return true;
		} catch {
			this._removeMapLayers({
				sourceIds: [sourceId],
				layerIds: [...layer.nativeLayerIds]
			});
			this._setStatus(UI_MESSAGES.failedToAddLayer);
			return false;
		}
	}
	_removeMapLayers(registration) {
		if (!registration || !this._map) return;
		for (const layerId of registration.layerIds) if (this._map.getLayer(layerId)) this._map.removeLayer(layerId);
		for (const sourceId of registration.sourceIds) if (this._map.getSource(sourceId)) this._map.removeSource(sourceId);
	}
	_clearMapLayers() {
		for (const registration of this._registeredMapLayers.values()) this._removeMapLayers(registration);
		this._registeredMapLayers.clear();
	}
	/**
	* Unregister every native layer this control registered with the host.
	*/
	_clearNativeLayers() {
		const ids = [...this._registeredNativeLayerIds];
		this._registeredNativeLayerIds = [];
		for (const id of ids) try {
			this._options.unregisterNativeLayer(id);
		} catch {}
	}
	/**
	* Update the status line in the panel, if it is mounted.
	*
	* @param message - The status text to display
	*/
	_setStatus(message) {
		if (this._status) this._status.textContent = message;
	}
	/**
	* Emits an event to all registered handlers.
	*
	* @param event - The event type to emit
	*/
	_emit(event) {
		const handlers = this._eventHandlers.get(event);
		if (handlers) {
			const eventData = {
				type: event,
				state: this.getState()
			};
			handlers.forEach((handler) => handler(eventData));
		}
	}
	/**
	* Creates the main container element for the control.
	* Contains a toggle button (29x29) matching navigation control size.
	*
	* @returns The container element
	*/
	_createContainer() {
		const container = document.createElement("div");
		container.className = `maplibregl-ctrl maplibregl-ctrl-group plugin-control${this._options.className ? ` ${this._options.className}` : ""}`;
		const toggleBtn = document.createElement("button");
		toggleBtn.className = "plugin-control-toggle";
		toggleBtn.type = "button";
		toggleBtn.setAttribute("aria-label", this._options.title);
		toggleBtn.innerHTML = `
      <span class="plugin-control-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M1.5 5.5 7.5 3.5 14.5 5.5 20.5 3.5V15.5L14.5 17.5 7.5 15.5 1.5 17.5Z" fill="#f6c845" stroke="#263238" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="M7.5 3.5V15.5M14.5 5.5V17.5" stroke="#263238" stroke-width="1.2"/>
          <circle cx="17" cy="17" r="6" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/>
          <path d="M17 13.5V20M14.3 17.5 17 20.2 19.7 17.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `;
		toggleBtn.addEventListener("click", () => this.toggle());
		container.appendChild(toggleBtn);
		return container;
	}
	/**
	* Creates the panel element with header and content areas.
	* Panel is positioned as a dropdown below the toggle button.
	*
	* @returns The panel element
	*/
	_createPanel() {
		const panel = document.createElement("div");
		panel.className = "plugin-control-panel";
		panel.style.width = `${this._options.panelWidth}px`;
		const header = document.createElement("div");
		header.className = "plugin-control-header";
		const title = document.createElement("span");
		title.className = "plugin-control-title";
		title.textContent = this._options.title;
		const closeBtn = document.createElement("button");
		closeBtn.className = "plugin-control-close";
		closeBtn.type = "button";
		closeBtn.setAttribute("aria-label", UI_MESSAGES.closePanel);
		closeBtn.innerHTML = "&times;";
		closeBtn.addEventListener("click", () => this.collapse());
		header.appendChild(title);
		header.appendChild(closeBtn);
		const { content, status } = createPluginContent({
			getMap: () => this._map,
			setStatus: (message) => this._setStatus(message),
			registerNativeLayer: (layer) => this._registerNativeLayer(layer),
			fetchData: fetchOverpssData
		});
		this._status = status;
		panel.appendChild(header);
		panel.appendChild(content);
		return panel;
	}
	/**
	* Setup event listeners for panel positioning and click-outside behavior.
	*/
	_setupEventListeners() {
		this._clickOutsideHandler = (e) => {
			const target = e.target;
			if (this._container && this._panel && !this._container.contains(target) && !this._panel.contains(target)) this.collapse();
		};
		document.addEventListener("click", this._clickOutsideHandler);
		this._resizeHandler = () => {
			if (!this._state.collapsed) this._updatePanelPosition();
		};
		window.addEventListener("resize", this._resizeHandler);
		this._mapResizeHandler = () => {
			if (!this._state.collapsed) this._updatePanelPosition();
		};
		this._map?.on("resize", this._mapResizeHandler);
	}
	/**
	* Detect which corner the control is positioned in.
	*
	* @returns The position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
	*/
	_getControlPosition() {
		const parent = this._container?.parentElement;
		if (!parent) return "top-right";
		if (parent.classList.contains("maplibregl-ctrl-top-left")) return "top-left";
		if (parent.classList.contains("maplibregl-ctrl-top-right")) return "top-right";
		if (parent.classList.contains("maplibregl-ctrl-bottom-left")) return "bottom-left";
		if (parent.classList.contains("maplibregl-ctrl-bottom-right")) return "bottom-right";
		return "top-right";
	}
	/**
	* Update the panel position based on button location and control corner.
	* Positions the panel next to the button, expanding in the appropriate direction.
	*/
	_updatePanelPosition() {
		if (!this._container || !this._panel || !this._mapContainer) return;
		const button = this._container.querySelector(".plugin-control-toggle");
		if (!button) return;
		const buttonRect = button.getBoundingClientRect();
		const mapRect = this._mapContainer.getBoundingClientRect();
		const position = this._getControlPosition();
		const buttonTop = buttonRect.top - mapRect.top;
		const buttonBottom = mapRect.bottom - buttonRect.bottom;
		const buttonLeft = buttonRect.left - mapRect.left;
		const buttonRight = mapRect.right - buttonRect.right;
		const panelGap = 5;
		const availableHeight = position === "top-left" || position === "top-right" ? mapRect.bottom - buttonRect.bottom - panelGap : buttonRect.top - mapRect.top - panelGap;
		this._panel.style.maxHeight = `${Math.max(0, Math.min(500, availableHeight))}px`;
		this._panel.style.top = "";
		this._panel.style.bottom = "";
		this._panel.style.left = "";
		this._panel.style.right = "";
		switch (position) {
			case "top-left":
				this._panel.style.top = `${buttonTop + buttonRect.height + panelGap}px`;
				this._panel.style.left = `${buttonLeft}px`;
				break;
			case "top-right":
				this._panel.style.top = `${buttonTop + buttonRect.height + panelGap}px`;
				this._panel.style.right = `${buttonRight}px`;
				break;
			case "bottom-left":
				this._panel.style.bottom = `${buttonBottom + buttonRect.height + panelGap}px`;
				this._panel.style.left = `${buttonLeft}px`;
				break;
			case "bottom-right":
				this._panel.style.bottom = `${buttonBottom + buttonRect.height + panelGap}px`;
				this._panel.style.right = `${buttonRight}px`;
				break;
		}
	}
};
//#endregion
//#region src/lib/geolibre/floating-panel.ts
/**
* Demonstration of the GeoLibre floating panel host API.
*
* A floating panel is a draggable, closeable card the host overlays on the
* map's top-left corner. Unlike the right-sidebar panel (a single docked
* workspace), several floating panels can be open at once and they do not
* shrink the map. The render contract is the same plain-DOM `render(container)`
* as the right panel.
*
* Self-contained so it is easy to copy, adapt, or delete. It is registered (but
* not opened) from the plugin's `activate` hook; the template's toolbar menu
* opens it on demand (see `./toolbar-menu.ts`).
*/
/** Stable id for this plugin's floating panel. Replace with your own. */
var FLOATING_PANEL_ID = "geolibre-plugin-template-tools";
/**
* Register the template's floating panel.
*
* @param app - The GeoLibre host API passed to the plugin's `activate` hook.
* @returns A disposer that unregisters (and closes) the panel, or `null` when
*   the host does not provide floating panels.
*/
function registerTemplateFloatingPanel(app) {
	if (!app.registerFloatingPanel) return null;
	return app.registerFloatingPanel({
		id: FLOATING_PANEL_ID,
		title: "Floating Tools",
		defaultWidth: 280,
		render(container) {
			const wrap = document.createElement("div");
			wrap.className = "geolibre-plugin-floating-panel";
			const heading = document.createElement("h2");
			heading.textContent = "Floating Tools";
			const body = document.createElement("p");
			body.textContent = "A draggable card over the map, rendered by the plugin through app.registerFloatingPanel(). Open it with app.openFloatingPanel() and close it with app.closeFloatingPanel().";
			wrap.append(heading, body);
			container.appendChild(wrap);
			return () => {
				wrap.remove();
			};
		}
	});
}
//#endregion
//#region src/lib/geolibre/right-panel.ts
/**
* Demonstration of the GeoLibre right-sidebar panel host API.
*
* A plugin can register a native right-sidebar panel that docks beside
* GeoLibre's built-in Style panel and behaves like a first-class part of the
* workspace, instead of emulating one with a fixed overlay. The host renders
* the panel chrome (header, collapse/close buttons, a collapsible rail, and a
* resize handle); the plugin owns only the body via `render(container)`, using
* plain DOM so it never has to share the host's UI framework.
*
* This module is intentionally self-contained so it is easy to copy, adapt, or
* delete. Wire it from the plugin's `activate`/`deactivate` hooks (see
* `src/geolibre.ts`).
*/
/** Stable id for this plugin's right panel. Replace with your own. */
var RIGHT_PANEL_ID = "geolibre-plugin-template-workbench";
/**
* Register and open the template's right-sidebar panel.
*
* @param app - The GeoLibre host API passed to the plugin's `activate` hook.
* @returns A disposer that closes and unregisters the panel, or `null` when the
*   host does not provide a right sidebar (so the caller can skip cleanup).
*/
function registerTemplateRightPanel(app) {
	if (!app.registerRightPanel) return null;
	const unregister = app.registerRightPanel({
		id: RIGHT_PANEL_ID,
		title: "Workbench",
		defaultWidth: 320,
		render(container) {
			const wrap = document.createElement("div");
			wrap.className = "geolibre-plugin-right-panel";
			const heading = document.createElement("h2");
			heading.textContent = "Plugin Workbench";
			const body = document.createElement("p");
			body.textContent = "This panel is rendered by the plugin through app.registerRightPanel(). Replace this content with your own workbench, query review, or dashboard UI. Drive it with app.openRightPanel(), collapseRightPanel(), and closeRightPanel().";
			wrap.append(heading, body);
			container.appendChild(wrap);
			return () => {
				wrap.remove();
			};
		}
	});
	app.openRightPanel?.(RIGHT_PANEL_ID);
	return () => {
		app.closeRightPanel?.(RIGHT_PANEL_ID);
		unregister();
	};
}
//#endregion
//#region src/lib/geolibre/toolbar-menu.ts
/**
* Demonstration of the GeoLibre top toolbar menu host API.
*
* A plugin can add its own top-level menu button to the GeoLibre banner (beside
* Project / Edit / View / Plugins), with nested submenus and action items. Menu
* items typically open one of the plugin's panels; here they open the
* template's right panel and floating panel, and a third item closes both.
*
* Self-contained so it is easy to copy, adapt, or delete. Wire it from the
* plugin's `activate`/`deactivate` hooks (see `src/geolibre.ts`).
*/
/** Stable id for this plugin's toolbar menu. Replace with your own. */
var TOOLBAR_MENU_ID = "geolibre-plugin-template-menu";
/**
* Register the template's top toolbar menu.
*
* @param app - The GeoLibre host API passed to the plugin's `activate` hook.
* @returns A disposer that unregisters the menu, or `null` when the host has no
*   top toolbar.
*/
function registerTemplateToolbarMenu(app) {
	if (!app.registerToolbarMenu) return null;
	return app.registerToolbarMenu({
		id: TOOLBAR_MENU_ID,
		label: "Template",
		items: [
			{
				id: "open-right",
				label: "Open workbench panel",
				disabled: !app.openRightPanel,
				onSelect: () => app.openRightPanel?.(RIGHT_PANEL_ID)
			},
			{
				type: "submenu",
				id: "tools",
				label: "Tools",
				items: [{
					id: "open-floating",
					label: "Open floating tools",
					disabled: !app.openFloatingPanel,
					onSelect: () => app.openFloatingPanel?.(FLOATING_PANEL_ID)
				}]
			},
			{ type: "separator" },
			{
				id: "close-panels",
				label: "Close panels",
				disabled: !app.closeRightPanel && !app.closeFloatingPanel,
				onSelect: () => {
					app.closeRightPanel?.(RIGHT_PANEL_ID);
					app.closeFloatingPanel?.(FLOATING_PANEL_ID);
				}
			}
		]
	});
}
//#endregion
//#region src/lib/utils/deep-link.ts
/**
* Deep-linking support for the GeoLibre integration: a plugin can be opened with
* a value preloaded by adding a query parameter to the GeoLibre URL, e.g.
* `https://geolibre.app/?plugin-data=https://example.com/dataset.zip`.
*
* GeoLibre auto-activates a plugin when a URL carries a parameter the plugin
* declared in `urlParameterNames`, then dispatches the parsed query parameters
* to the plugin's `handleUrlParameters(app, params)` hook. These helpers operate
* purely on a `URLSearchParams`, with no DOM or MapLibre imports, so the logic
* can be unit-tested in isolation.
*
* Rename {@link PLUGIN_DATA_PARAM} and adapt {@link DeepLinkConsumer} to whatever
* your plugin needs to receive (a dataset URL, a feature id, a view state, ...).
*/
/** Query-parameter name this plugin owns. Rename for your plugin. */
var PLUGIN_DATA_PARAM = "plugin-data";
/**
* Extract the deep-link value from parsed query parameters. Returns the trimmed
* value, or `null` when the parameter is absent or blank.
*/
function getPluginDataValue(params) {
	const trimmed = params.get(PLUGIN_DATA_PARAM)?.trim();
	return trimmed ? trimmed : null;
}
/**
* If the query parameters carry a {@link PLUGIN_DATA_PARAM} value, forward it to
* the consumer. No-op when the parameter is absent or blank. Returns the
* consumer's promise (if any) so callers can await completion.
*/
async function maybeHandleDeepLink(consumer, params) {
	const value = getPluginDataValue(params);
	if (value) await consumer.loadFromUrl(value);
}
//#endregion
//#region src/geolibre.ts
var control = null;
var position = "top-right";
var pendingState = null;
var disposeRightPanel = null;
var disposeFloatingPanel = null;
var disposeToolbarMenu = null;
function createControl(app) {
	const nextControl = new PluginControl({
		collapsed: pendingState?.collapsed ?? true,
		panelWidth: pendingState?.panelWidth ?? 300,
		title: "GeoLibre Plugin Template",
		pickFiles: () => app.pickLocalDirectoryFiles?.() ?? Promise.resolve(null),
		registerNativeLayer: (layer) => {
			if (!app.registerExternalNativeLayer) return false;
			app.registerExternalNativeLayer(layer);
			return true;
		},
		unregisterNativeLayer: (id) => app.unregisterExternalNativeLayer?.(id)
	});
	if (pendingState) nextControl.setState(pendingState);
	return nextControl;
}
function isPluginState(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return false;
	const candidate = value;
	if ("collapsed" in candidate && typeof candidate.collapsed !== "boolean") return false;
	if ("panelWidth" in candidate && typeof candidate.panelWidth !== "number") return false;
	if ("data" in candidate && (typeof candidate.data !== "object" || candidate.data === null || Array.isArray(candidate.data))) return false;
	return true;
}
var plugin = {
	id: "overpass-turbo-plugin",
	name: "Overpass Turbo Plugin",
	version: PLUGIN_VERSION,
	urlParameterNames: [PLUGIN_DATA_PARAM],
	activate(app) {
		control = control ?? createControl(app);
		if (!app.addMapControl(control, position)) {
			control = null;
			return false;
		}
		disposeRightPanel = registerTemplateRightPanel(app);
		disposeFloatingPanel = registerTemplateFloatingPanel(app);
		disposeToolbarMenu = registerTemplateToolbarMenu(app);
	},
	handleUrlParameters(_app, params) {
		if (control) return maybeHandleDeepLink(control, params);
	},
	deactivate(app) {
		disposeToolbarMenu?.();
		disposeToolbarMenu = null;
		disposeFloatingPanel?.();
		disposeFloatingPanel = null;
		disposeRightPanel?.();
		disposeRightPanel = null;
		if (!control) return;
		pendingState = control.getState();
		app.removeMapControl(control);
		control = null;
	},
	getMapControlPosition() {
		return position;
	},
	setMapControlPosition(app, nextPosition) {
		position = nextPosition;
		if (!control) return;
		app.removeMapControl(control);
		if (!app.addMapControl(control, position)) {
			pendingState = control.getState();
			control = null;
			return false;
		}
	},
	getProjectState() {
		return control?.getState() ?? pendingState ?? void 0;
	},
	applyProjectState(_app, state) {
		if (!isPluginState(state)) return false;
		pendingState = state;
		control?.setState(state);
	}
};
//#endregion
export { plugin as default, plugin };
