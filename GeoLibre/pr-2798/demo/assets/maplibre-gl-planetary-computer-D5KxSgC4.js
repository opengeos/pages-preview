var et=Object.defineProperty,st=(t,e,s)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,d=(t,e,s)=>st(t,typeof e!="symbol"?e+"":e,s),it="https://planetarycomputer.microsoft.com/api/stac/v1",j=class{constructor(t=it){d(this,"baseUrl"),d(this,"abortController",null),this.baseUrl=t.replace(/\/$/,"")}async getCollections(){return(await this.fetch("/collections")).collections}async getCollection(t){return this.fetch(`/collections/${encodeURIComponent(t)}`)}async search(t){var e;return(e=this.abortController)==null||e.abort(),this.abortController=new AbortController,(await this.fetch("/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:this.abortController.signal})).features}async searchWithContext(t){var e;return(e=this.abortController)==null||e.abort(),this.abortController=new AbortController,this.fetch("/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:this.abortController.signal})}async getCollectionItems(t,e=50){return(await this.fetch(`/collections/${encodeURIComponent(t)}/items?limit=${e}`)).features}async getItem(t,e){return this.fetch(`/collections/${encodeURIComponent(t)}/items/${encodeURIComponent(e)}`)}cancelPending(){var t;(t=this.abortController)==null||t.abort(),this.abortController=null}getBaseUrl(){return this.baseUrl}async fetch(t,e){const s=`${this.baseUrl}${t}`;try{const i=await fetch(s,e);if(!i.ok){const n=await i.text();throw new Error(`STAC API error: ${i.status} ${i.statusText} - ${n}`)}return i.json()}catch(i){throw i instanceof Error&&i.name==="AbortError"?new Error("Request was cancelled"):i}}},nt="https://planetarycomputer.microsoft.com/api/data/v1",V=class{constructor(t=nt){d(this,"baseUrl"),this.baseUrl=t.replace(/\/$/,"")}getItemTileUrl(t,e,s={}){const i=this.buildQueryString(s),n=s.tile_scale||1,a=s.tile_format?`.${s.tile_format}`:"";return`${this.baseUrl}/item/tiles/WebMercatorQuad/{z}/{x}/{y}@${n}x${a}?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${i?"&"+i:""}`}getCollectionTileUrl(t,e={},s){const i=this.buildQueryString(e),n=s?this.buildSearchParams(s):"",a=[`collection=${encodeURIComponent(t)}`,i,n].filter(Boolean).join("&"),o=e.tile_scale||1,r=e.tile_format?`.${e.tile_format}`:"";return`${this.baseUrl}/mosaic/tiles/WebMercatorQuad/{z}/{x}/{y}@${o}x${r}?${a}`}async getItemTileJSON(t,e,s={}){const i=this.buildQueryString(s),n=await fetch(`${this.baseUrl}/item/WebMercatorQuad/tilejson.json?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${i?"&"+i:""}`);if(!n.ok)throw new Error(`Failed to get item TileJSON: ${n.statusText}`);return n.json()}getItemTileJSONUrl(t,e,s={}){const i=this.buildQueryString(s);return`${this.baseUrl}/item/WebMercatorQuad/tilejson.json?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${i?"&"+i:""}`}async getCollectionTileJSON(t,e={},s){const i=this.buildQueryString(e),n=s?this.buildSearchParams(s):"",a=[`collection=${encodeURIComponent(t)}`,i,n].filter(Boolean).join("&"),o=await fetch(`${this.baseUrl}/mosaic/WebMercatorQuad/tilejson.json?${a}`);if(!o.ok)throw new Error(`Failed to get collection TileJSON: ${o.statusText}`);return o.json()}async registerMosaic(t,e={}){const s=await fetch(`${this.baseUrl}/mosaic/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collections:t.collections,filter:t.filter,"filter-lang":t["filter-lang"]||"cql2-json",sortby:t.sortby})});if(!s.ok)throw new Error(`Failed to register mosaic: ${s.statusText}`);const i=await s.json(),n=i.id||i.searchid,a=this.buildQueryString(e);return{searchId:n,tileUrl:`${this.baseUrl}/mosaic/tiles/WebMercatorQuad/{z}/{x}/{y}@1x?searchid=${n}${a?"&"+a:""}`}}async getItemInfo(t,e,s){const i=s?.length?`&assets=${s.join(",")}`:"",n=await fetch(`${this.baseUrl}/item/info?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${i}`);if(!n.ok)throw new Error(`Failed to get item info: ${n.statusText}`);return n.json()}async getItemStatistics(t,e,s={}){const i=this.buildQueryString(s),n=i?`&${i}`:"",a=await fetch(`${this.baseUrl}/item/statistics?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${n}`);if(!a.ok)throw new Error(`Failed to get item statistics: ${a.statusText}`);return a.json()}async getItemPoint(t,e,s,i,n={}){const a=this.buildQueryString(n),o=a?`&${a}`:"",r=await fetch(`${this.baseUrl}/item/point/${s},${i}?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${o}`);if(!r.ok)throw new Error(await this.getErrorMessage(r,"Failed to get point values"));return r.json()}async getErrorMessage(t,e){let s="";try{if((t.headers.get("content-type")||"").includes("application/json")){const n=await t.json(),a=n.detail||n.message||n.error;s=Array.isArray(a)?a.map(o=>o.msg||String(o)).join("; "):String(a||"")}else s=await t.text()}catch{s=""}const i=t.statusText||`HTTP ${t.status}`;return[e,s||i].filter(Boolean).join(": ")}getItemPreviewUrl(t,e,s={},i="png"){const n=this.buildQueryString(s);return`${this.baseUrl}/item/preview.${i}?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${n?"&"+n:""}`}getItemBboxImageUrl(t,e,s,i={width:768,height:512},n={},a="png"){const o=this.buildQueryString(n);return`${this.baseUrl}/item/bbox/${s.join(",")}/${i.width}x${i.height}.${a}?collection=${encodeURIComponent(t)}&item=${encodeURIComponent(e)}${o?"&"+o:""}`}getColormapLegendUrl(t,e={width:220,height:30}){return`${this.baseUrl}/legend/colormap/${encodeURIComponent(t)}?width=${e.width}&height=${e.height}`}getBaseUrl(){return this.baseUrl}buildQueryString(t){var e,s,i,n;const a=new URLSearchParams;(e=t.assets)!=null&&e.length&&t.assets.forEach(r=>a.append("assets",r)),(s=t.bidx)!=null&&s.length&&t.bidx.forEach(r=>a.append("bidx",String(r))),t.expression&&a.set("expression",t.expression),t.rescale&&a.set("rescale",t.rescale),t.colormap_name&&a.set("colormap_name",t.colormap_name),t.colormap&&a.set("colormap",JSON.stringify(t.colormap)),t.nodata!==void 0&&a.set("nodata",String(t.nodata)),t.resampling&&a.set("resampling",t.resampling),t.return_mask!==void 0&&a.set("return_mask",String(t.return_mask)),t.unscale!==void 0&&a.set("unscale",String(t.unscale)),t.color_formula&&a.set("color_formula",t.color_formula),t.asset_as_band!==void 0&&a.set("asset_as_band",String(t.asset_as_band)),t.algorithm&&a.set("algorithm",t.algorithm),t.algorithm_params&&a.set("algorithm_params",t.algorithm_params),t.buffer!==void 0&&a.set("buffer",String(t.buffer)),t.tile_format&&a.set("tile_format",t.tile_format),t.tile_scale&&a.set("tile_scale",String(t.tile_scale)),t.minzoom!==void 0&&a.set("minzoom",String(t.minzoom)),t.maxzoom!==void 0&&a.set("maxzoom",String(t.maxzoom)),t.tile_size&&a.set("tile_size",String(t.tile_size)),t.asset_bidx&&Object.entries(t.asset_bidx).forEach(([r,l])=>{a.append("asset_bidx",`${r}|${l}`)});const o=t;return o.max_size!==void 0&&a.set("max_size",String(o.max_size)),o.height!==void 0&&a.set("height",String(o.height)),o.width!==void 0&&a.set("width",String(o.width)),o.categorical!==void 0&&a.set("categorical",String(o.categorical)),(i=o.c)!=null&&i.length&&o.c.forEach(r=>a.append("c",String(r))),(n=o.p)!=null&&n.length&&o.p.forEach(r=>a.append("p",String(r))),o.histogram_bins!==void 0&&a.set("histogram_bins",String(o.histogram_bins)),o.histogram_range&&a.set("histogram_range",o.histogram_range.join(",")),a.toString()}buildSearchParams(t){const e=[];return t.datetime&&e.push(`datetime=${encodeURIComponent(t.datetime)}`),t.bbox&&e.push(`bbox=${t.bbox.join(",")}`),e.join("&")}},at="https://planetarycomputer.microsoft.com/api/sas/v1/token",W=class{constructor(t=3e5){d(this,"cache",new Map),d(this,"bufferMs"),this.bufferMs=t}async getToken(t){const e=this.cache.get(t),s=new Date;if(e&&e.expiry.getTime()-s.getTime()>this.bufferMs)return e.token;const i=await fetch(`${at}/${encodeURIComponent(t)}`);if(!i.ok)throw new Error(`Failed to get SAS token for ${t}: ${i.statusText}`);const n=await i.json(),a=n.token,o=new Date(n["msft:expiry"]);return this.cache.set(t,{token:a,expiry:o}),a}async signUrl(t,e){const s=await this.getToken(e);return`${t}${t.includes("?")?"&":"?"}${s}`}hasValidToken(t){const e=this.cache.get(t);if(!e)return!1;const s=new Date;return e.expiry.getTime()-s.getTime()>this.bufferMs}clearCache(){this.cache.clear()}clearToken(t){this.cache.delete(t)}},ot=[{name:"true-color",label:"True Color",description:"Natural color composite (RGB)",params:{assets:["visual"]}},{name:"false-color",label:"False Color (Vegetation)",description:"NIR-Red-Green composite for vegetation analysis",params:{assets:["B08","B04","B03"],rescale:"0,3000"}},{name:"ndvi",label:"NDVI",description:"Normalized Difference Vegetation Index",params:{expression:"(B08-B04)/(B08+B04)",rescale:"-1,1",colormap_name:"rdylgn"}},{name:"ndwi",label:"NDWI",description:"Normalized Difference Water Index",params:{expression:"(B03-B08)/(B03+B08)",rescale:"-1,1",colormap_name:"blues"}},{name:"swir",label:"SWIR Composite",description:"SWIR-NIR-Red for geology and moisture",params:{assets:["B12","B08","B04"],rescale:"0,3000"}}],rt=[{name:"true-color",label:"True Color",description:"Natural color composite (RGB)",params:{assets:["red","green","blue"],rescale:"0,20000"}},{name:"false-color",label:"False Color (Vegetation)",description:"NIR-Red-Green composite",params:{assets:["nir08","red","green"],rescale:"0,20000"}},{name:"ndvi",label:"NDVI",description:"Normalized Difference Vegetation Index",params:{expression:"(nir08-red)/(nir08+red)",rescale:"-1,1",colormap_name:"rdylgn"}},{name:"thermal",label:"Thermal",description:"Land surface temperature",params:{assets:["lwir11"],rescale:"290,320",colormap_name:"magma"}}],lt=[{name:"rgb",label:"RGB",description:"Natural color",params:{assets:["image"],asset_bidx:{image:"1,2,3"}}},{name:"cir",label:"Color Infrared",description:"NIR-Red-Green composite",params:{assets:["image"],asset_bidx:{image:"4,1,2"}}},{name:"ndvi",label:"NDVI",description:"Vegetation index from NAIP",params:{expression:"(image_b4-image_b1)/(image_b4+image_b1)",rescale:"-1,1",colormap_name:"rdylgn"}}],J=[{name:"elevation",label:"Elevation",description:"Color-coded elevation",params:{assets:["data"],colormap_name:"terrain",rescale:"0,4000"}},{name:"hillshade",label:"Hillshade",description:"Shaded relief visualization",params:{assets:["data"],colormap_name:"gray",rescale:"0,255"}}],G=[{collectionId:"sentinel-2-l2a",defaultPreset:"true-color",presets:ot},{collectionId:"landsat-c2-l2",defaultPreset:"true-color",presets:rt},{collectionId:"naip",defaultPreset:"rgb",presets:lt},{collectionId:"cop-dem-glo-30",defaultPreset:"elevation",presets:J},{collectionId:"cop-dem-glo-90",defaultPreset:"elevation",presets:J}];function N(t){return G.find(e=>e.collectionId===t)}function U(t){const e=N(t);return e?.presets??[]}function z(t){const e=N(t);if(e)return e.presets.find(s=>s.name===e.defaultPreset)}function D(t=""){const e=Date.now().toString(36),s=Math.random().toString(36).substring(2,8);return t?`${t}-${e}-${s}`:`${e}-${s}`}function A(t,e,s){return Math.min(Math.max(t,e),s)}function q(t){if(!t)return"Unknown";try{return new Date(t).toLocaleDateString()}catch{return t}}function Q(t){return t.datetime||t.start_datetime||t.end_datetime||null}function Z(t,e){return t.length<=e?t:t.substring(0,e)+"..."}function Y(t){const[e,s,i,n]=t;return`${e.toFixed(2)}, ${s.toFixed(2)}, ${i.toFixed(2)}, ${n.toFixed(2)}`}var ct=["tiff","geotiff","cog"];function dt(t){var e;if((e=t.roles)!=null&&e.length)return t.roles.includes("data");const s=(t.type||"").toLowerCase();return ct.some(i=>s.includes(i))}function pt(t){const e=[];for(const s of t){const i={};for(const[n,a]of Object.entries(s.assets??{}))a?.href&&dt(a)&&(i[n]={href:a.href});Object.keys(i).length!==0&&e.push({bbox:s.bbox,assets:i})}return{type:"FeatureCollection",features:e}}var K=class{constructor(t,e){d(this,"map"),d(this,"tilerClient"),d(this,"layers",new Map),this.map=t,this.tilerClient=e}addItemLayer(t,e){const s=`${t.id.replace(/[^a-zA-Z0-9-_]/g,"-").slice(0,50)}-${D().slice(-6)}`,i=`${s}-source`,n=t.collection||"";let a=e?.renderParams||{},o=e?.presetName;if(!e?.renderParams&&!e?.assets&&n){const c=z(n);c&&(a=c.params,o=c.name)}const r=e?.assets||a.assets||this.getDefaultAssets(t);a={...a,assets:r};const l=this.tilerClient.getItemTileJSONUrl(n,t.id,a);this.map.addSource(i,{type:"raster",url:l,tileSize:a.tile_size||256,bounds:t.bbox,attribution:"Microsoft Planetary Computer"}),this.map.addLayer({id:s,type:"raster",source:i,paint:{"raster-opacity":1}});const p={id:s,type:"item",sourceId:i,item:t,collection:void 0,visible:!0,opacity:1,assets:r,renderParams:a,presetName:o};return this.layers.set(s,p),p}addCollectionLayer(t,e){const s=`${(t.title||t.id).replace(/[^a-zA-Z0-9-_]/g,"-").slice(0,50)}-${D().slice(-6)}`,i=`${s}-source`;let n=e?.renderParams||{},a=e?.presetName;if(!e?.renderParams&&!e?.assets){const c=z(t.id);c&&(n=c.params,a=c.name)}const o=e?.assets||n.assets||this.getDefaultCollectionAssets(t);n={...n,assets:o};const r=this.tilerClient.getCollectionTileUrl(t.id,n),l=e?.bbox||this.getCollectionBounds(t);this.map.addSource(i,{type:"raster",tiles:[r],tileSize:256,bounds:l,attribution:"Microsoft Planetary Computer"}),this.map.addLayer({id:s,type:"raster",source:i,paint:{"raster-opacity":1}});const p={id:s,type:"collection",sourceId:i,collection:t,visible:!0,opacity:1,assets:o,renderParams:n,presetName:a};return this.layers.set(s,p),p}removeLayer(t){const e=this.layers.get(t);e&&(this.map.getLayer(t)&&this.map.removeLayer(t),this.map.getSource(e.sourceId)&&this.map.removeSource(e.sourceId),this.layers.delete(t))}updateLayer(t,e){const s=this.layers.get(t);s&&(e.visible!==void 0&&this.map.setLayoutProperty(t,"visibility",e.visible?"visible":"none"),e.opacity!==void 0&&this.map.setPaintProperty(t,"raster-opacity",e.opacity),(e.renderParams||e.assets)&&this.updateLayerSource(t,e),this.layers.set(t,{...s,...e}))}getLayer(t){return this.layers.get(t)}getLayers(){return Array.from(this.layers.values())}removeAllLayers(){for(const t of this.layers.keys())this.removeLayer(t)}zoomToLayer(t){var e;const s=this.layers.get(t);if(!s)return;let i;(e=s.item)!=null&&e.bbox?i=s.item.bbox:s.collection&&(i=this.getCollectionBounds(s.collection)),i&&this.map.fitBounds([[i[0],i[1]],[i[2],i[3]]],{padding:50})}getMap(){return this.map}updateLayerSource(t,e){var s;const i=this.layers.get(t);if(!i)return;const n={...i.renderParams,...e.renderParams},a=e.assets||i.assets;let o;if(i.type==="item"&&i.item){const c=i.item.collection||"";o=this.tilerClient.getItemTileJSONUrl(c,i.item.id,{...n,assets:a})}else if(i.type==="collection"&&i.collection)o=this.tilerClient.getCollectionTileUrl(i.collection.id,{...n,assets:a});else return;const r=this.map.getLayoutProperty(t,"visibility"),l=this.map.getPaintProperty(t,"raster-opacity");this.map.removeLayer(t),this.map.removeSource(i.sourceId);const p=((s=i.item)==null?void 0:s.bbox)||(i.collection?this.getCollectionBounds(i.collection):void 0);this.map.addSource(i.sourceId,{type:"raster",...i.type==="item"?{url:o}:{tiles:[o]},tileSize:n.tile_size||256,bounds:p,attribution:"Microsoft Planetary Computer"}),this.map.addLayer({id:t,type:"raster",source:i.sourceId,layout:{visibility:r},paint:{"raster-opacity":l??1}})}getDefaultAssets(t){for(const i of["visual","data","image","cog_default"])if(t.assets[i])return[i];for(const[i,n]of Object.entries(t.assets)){const a=n.type||"";if(a.includes("tiff")||a.includes("geotiff")||a.includes("cog"))return[i]}const e=["thumbnail","overview","metadata","tilejson","rendered_preview"],s=Object.keys(t.assets).find(i=>!e.some(n=>i.toLowerCase().includes(n)));return s?[s]:[]}getDefaultCollectionAssets(t){const e=t.item_assets||{};for(const n of["visual","data","image","cog_default"])if(e[n])return[n];for(const[n,a]of Object.entries(e)){const o=a.type||"";if(o.includes("tiff")||o.includes("geotiff")||o.includes("cog"))return[n]}const s=["thumbnail","overview","metadata","tilejson","rendered_preview"],i=Object.keys(e).find(n=>!s.some(a=>n.toLowerCase().includes(a)));return i?[i]:[]}getCollectionBounds(t){var e,s,i;const n=(i=(s=(e=t.extent)==null?void 0:e.spatial)==null?void 0:s.bbox)==null?void 0:i[0];if(n&&n.length>=4)return[n[0],n[1],n[2],n[3]]}},ht={collapsed:!0,position:"top-right",title:"Planetary Computer",panelWidth:380,maxHeight:0,className:"",stacApiUrl:"https://planetarycomputer.microsoft.com/api/stac/v1",tilerApiUrl:"https://planetarycomputer.microsoft.com/api/data/v1",defaultCollections:[],enableBboxSelector:!0,maxSearchResults:50,autoLoadCollections:!0},$="pc-search-footprints",L="pc-search-footprints-fill",F="pc-search-footprints-outline",k="pc-search-footprints-selected-fill",R="pc-search-footprints-selected-outline",X=280,O=200,T=5,ut=class{constructor(t){d(this,"_map"),d(this,"_mapContainer"),d(this,"_container"),d(this,"_panel"),d(this,"_contentEl"),d(this,"_options"),d(this,"_state"),d(this,"_eventHandlers",new globalThis.Map),d(this,"_stacClient"),d(this,"_tilerClient"),d(this,"_sasManager"),d(this,"_layerManager"),d(this,"_resizeHandler",null),d(this,"_mapResizeHandler",null),d(this,"_clickOutsideHandler",null),d(this,"_bboxPointerDownHandler",null),d(this,"_bboxPointerMoveHandler",null),d(this,"_bboxPointerUpHandler",null),d(this,"_bboxKeyDownHandler",null),d(this,"_bboxOverlay"),d(this,"_bboxBox"),d(this,"_bboxStartPoint",null),d(this,"_bboxDragPanWasEnabled",!1),d(this,"_bboxBoxZoomWasEnabled",!1),d(this,"_ignoreNextDocumentClick",!1),d(this,"_inspectClickHandler",null),d(this,"_inspectorLayerId",null),d(this,"_inspectorResult",null),d(this,"_footprintClickHandler",null),d(this,"_footprintMouseEnterHandler",null),d(this,"_footprintMouseLeaveHandler",null),d(this,"_resizeState",null),d(this,"_resizePointerMoveHandler",null),d(this,"_resizePointerUpHandler",null),this._options={...ht,...t},this._state=this._getInitialState(),this._stacClient=new j(this._options.stacApiUrl),this._tilerClient=new V(this._options.tilerApiUrl),this._sasManager=new W}onAdd(t){return this._map=t,this._mapContainer=t.getContainer(),this._layerManager=new K(t,this._tilerClient),this._container=this._createContainer(),this._panel=this._createPanel(),this._mapContainer.appendChild(this._panel),this._setupEventListeners(),this._state.collapsed||(this._panel.classList.add("expanded"),requestAnimationFrame(()=>this._updatePanelPosition())),this._options.autoLoadCollections&&this._loadCollections(),this._container}onRemove(){var t,e,s,i,n;this._stopBboxDraw(!1),this._stopInspector(!1),this._clearSearchFootprints(!1),this._stopPanelResize(),this._resizeHandler&&(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null),this._mapResizeHandler&&this._map&&(this._map.off("resize",this._mapResizeHandler),this._mapResizeHandler=null),this._clickOutsideHandler&&(document.removeEventListener("click",this._clickOutsideHandler),this._clickOutsideHandler=null),this._stacClient.cancelPending(),this._sasManager.clearCache(),(t=this._layerManager)==null||t.removeAllLayers(),(s=(e=this._panel)==null?void 0:e.parentNode)==null||s.removeChild(this._panel),(n=(i=this._container)==null?void 0:i.parentNode)==null||n.removeChild(this._container),this._map=void 0,this._eventHandlers.clear()}getState(){return{...this._state}}toggle(){this._state.collapsed||this._stopBboxDraw(!1),this._state.collapsed=!this._state.collapsed,this._updatePanelVisibility(),this._emit(this._state.collapsed?"collapse":"expand"),this._emit("statechange")}expand(){this._state.collapsed&&this.toggle()}collapse(){this._state.collapsed||this.toggle()}async loadCollections(){return this._loadCollections()}async search(t){const e={...this._state.searchParams,...t,limit:this._options.maxSearchResults};this._state.searchParams=e,this._state.searchLoading=!0,this._state.error=null,this._emit("search:start"),this._emit("statechange"),this._renderContent();try{const s=await this._stacClient.search(e);return this._state.searchResults=s,this._state.selectedSearchResultId=null,this._state.activeView="results",this._showSearchFootprints(s),this._emit("search:complete"),this._emit("search"),s}catch(s){const i=s instanceof Error?s.message:"Search failed";throw this._state.error=i,this._emit("search:error"),this._emit("error"),s}finally{this._state.searchLoading=!1,this._emit("statechange"),this._renderContent()}}addItemLayer(t,e){if(!this._layerManager)throw new Error("Control not added to map");const s=this._layerManager.addItemLayer(t,e);return s.showControls=!1,this._state.activeLayers.push(s),this._emit("layer:add"),this._emit("statechange"),this._renderContent(),s}addCollectionLayer(t,e){if(!this._layerManager)throw new Error("Control not added to map");const s=this._layerManager.addCollectionLayer(t,e);return s.showControls=!1,this._state.activeLayers.push(s),this._emit("layer:add"),this._emit("statechange"),this._renderContent(),s}removeLayer(t){var e;this._inspectorLayerId===t&&this._stopInspector(!1),(e=this._layerManager)==null||e.removeLayer(t),this._state.activeLayers=this._state.activeLayers.filter(s=>s.id!==t),this._emit("layer:remove"),this._emit("statechange"),this._renderContent()}updateLayer(t,e){var s;(s=this._layerManager)==null||s.updateLayer(t,e);const i=this._state.activeLayers.findIndex(n=>n.id===t);i>=0&&(this._state.activeLayers[i]={...this._state.activeLayers[i],...e}),this._emit("layer:update"),this._emit("statechange")}zoomToLayer(t){var e;(e=this._layerManager)==null||e.zoomToLayer(t)}async getDownloadUrl(t,e){const s=t.assets[e];if(!s)throw new Error(`Asset '${e}' not found`);const i=t.collection||"";return this._sasManager.signUrl(s.href,i)}selectCollection(t){this._stopBboxDraw(!1),this._clearSearchFootprints(!1),this._state.selectedCollection=t,this._state.searchParams=t?{collections:[t.id]}:{},this._state.activeView=t?"search":"collections",this._state.searchResults=[],this._state.selectedItem=null,this._state.selectedSearchResultId=null,this._emit("collection:select"),this._emit("statechange"),this._renderContent()}selectItem(t){this._state.selectedItem=t,this._state.selectedSearchResultId=t?.id||null,this._updateSelectedFootprint(),this._state.activeView=t?"item":"results",this._emit("item:select"),this._emit("statechange"),this._renderContent()}downloadStacJson(t){var e,s;const i=pt(this._state.searchResults);if(i.features.length===0)return 0;const n=((e=this._state.selectedCollection)==null?void 0:e.id)||((s=this._state.searchResults[0])==null?void 0:s.collection)||"stac",a=t||`${n}_stac.json`,o=new Blob([JSON.stringify(i)],{type:"application/json"}),r=URL.createObjectURL(o),l=document.createElement("a");return l.href=r,l.download=a,this._ignoreNextDocumentClick=!0,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(r),i.features.length}setView(t){this._state.activeView=t,this._emit("statechange"),this._renderContent()}on(t,e){this._eventHandlers.has(t)||this._eventHandlers.set(t,new Set),this._eventHandlers.get(t).add(e)}off(t,e){var s;(s=this._eventHandlers.get(t))==null||s.delete(e)}getMap(){return this._map}getContainer(){return this._container}_getInitialState(){return{collapsed:this._options.collapsed,panelWidth:this._options.panelWidth,activeView:"collections",collections:[],collectionsLoading:!1,selectedCollection:null,searchParams:{},searchResults:[],searchLoading:!1,selectedItem:null,selectedSearchResultId:null,activeLayers:[],error:null,bboxSelectorActive:!1,drawnBbox:null}}_emit(t,e){const s=this._eventHandlers.get(t);if(s){const i={type:t,state:this.getState(),data:e};s.forEach(n=>n(i))}}_createContainer(){const t=document.createElement("div");t.className=`maplibregl-ctrl maplibregl-ctrl-group pc-control${this._options.className?` ${this._options.className}`:""}`;const e=document.createElement("button");return e.className="pc-control-toggle",e.type="button",e.setAttribute("aria-label",this._options.title),e.innerHTML=`
      <span class="pc-control-icon">
        <svg viewBox="0 0 23 23" width="22" height="22">
          <rect x="1" y="1" width="10" height="10" fill="#666"/>
          <rect x="12" y="1" width="10" height="10" fill="#888"/>
          <rect x="1" y="12" width="10" height="10" fill="#999"/>
          <rect x="12" y="12" width="10" height="10" fill="#777"/>
        </svg>
      </span>
    `,e.addEventListener("click",()=>this.toggle()),t.appendChild(e),t}_createPanel(){const t=document.createElement("div");t.className="pc-control-panel",t.style.width=`${this._options.panelWidth}px`,this._options.maxHeight>0&&(t.style.maxHeight=`${this._options.maxHeight}px`),t.addEventListener("click",o=>o.stopPropagation());const e=document.createElement("div");e.className="pc-control-header";const s=document.createElement("span");s.className="pc-control-title",s.textContent=this._options.title;const i=document.createElement("button");i.className="pc-control-close",i.type="button",i.innerHTML="&times;",i.addEventListener("click",()=>this.collapse()),e.appendChild(s),e.appendChild(i);const n=document.createElement("div");n.className="pc-control-nav",n.innerHTML=`
      <button type="button" class="pc-nav-btn active" data-view="collections">Collections</button>
      <button type="button" class="pc-nav-btn" data-view="layers">Layers (0)</button>
    `,n.addEventListener("click",o=>{const r=o.target;r.dataset.view&&this.setView(r.dataset.view)});const a=document.createElement("div");return a.className="pc-control-content",this._contentEl=a,t.appendChild(e),t.appendChild(n),t.appendChild(a),t.appendChild(this._createResizeHandle("sw")),t.appendChild(this._createResizeHandle("se")),t}_createResizeHandle(t){const e=document.createElement("div");return e.className=`pc-resize-handle pc-resize-handle-${t}`,e.addEventListener("pointerdown",s=>this._startPanelResize(s,t)),e}_startPanelResize(t,e){if(t.button!==0||!this._panel||!this._mapContainer||this._resizeState)return;t.preventDefault(),t.stopPropagation();const s=this._panel.getBoundingClientRect(),i=this._mapContainer.getBoundingClientRect();this._panel.style.top=`${s.top-i.top}px`,this._panel.style.left=`${s.left-i.left}px`,this._panel.style.bottom="",this._panel.style.right="",this._panel.style.maxWidth="none",this._panel.style.maxHeight="none",this._panel.style.width=`${s.width}px`,this._panel.style.height=`${s.height}px`,this._panel.classList.add("pc-resizing"),this._resizeState={corner:e,pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,startWidth:s.width,startHeight:s.height,startLeft:s.left-i.left,startTop:s.top-i.top},t.currentTarget.setPointerCapture(t.pointerId),this._resizePointerMoveHandler=n=>this._onPanelResizeMove(n),this._resizePointerUpHandler=()=>this._stopPanelResize(),window.addEventListener("pointermove",this._resizePointerMoveHandler),window.addEventListener("pointerup",this._resizePointerUpHandler),window.addEventListener("pointercancel",this._resizePointerUpHandler)}_onPanelResizeMove(t){const e=this._resizeState;if(!e||!this._panel||!this._mapContainer||t.pointerId!==e.pointerId)return;const s=this._mapContainer.getBoundingClientRect(),i=t.clientX-e.startX,n=t.clientY-e.startY,a=e.corner==="se"?s.width-e.startLeft-T:e.startLeft+e.startWidth-T,o=A(e.corner==="se"?e.startWidth+i:e.startWidth-i,X,Math.max(X,a)),r=s.height-e.startTop-T,l=A(e.startHeight+n,O,Math.max(O,r));this._panel.style.width=`${o}px`,this._panel.style.height=`${l}px`,e.corner==="sw"&&(this._panel.style.left=`${e.startLeft+(e.startWidth-o)}px`)}_stopPanelResize(){var t;this._resizeState&&(this._resizeState=null,(t=this._panel)==null||t.classList.remove("pc-resizing"),this._resizePointerMoveHandler&&(window.removeEventListener("pointermove",this._resizePointerMoveHandler),this._resizePointerMoveHandler=null),this._resizePointerUpHandler&&(window.removeEventListener("pointerup",this._resizePointerUpHandler),window.removeEventListener("pointercancel",this._resizePointerUpHandler),this._resizePointerUpHandler=null))}_renderContent(){if(this._contentEl)switch(this._updateNavTabs(),this._state.activeView){case"collections":this._renderCollections();break;case"search":this._renderSearch();break;case"results":this._renderResults();break;case"item":this._renderItem();break;case"layers":this._renderLayers()}}_updateNavTabs(){var t;const e=(t=this._panel)==null?void 0:t.querySelector(".pc-control-nav");if(!e)return;const s=e.querySelector('[data-view="layers"]');s&&(s.textContent=`Layers (${this._state.activeLayers.length})`),e.querySelectorAll(".pc-nav-btn").forEach(i=>{const n=i.dataset.view;i.classList.toggle("active",n===this._state.activeView||n==="collections"&&["collections","search","results","item"].includes(this._state.activeView))})}_renderCollections(){var t;if(!this._contentEl)return;if(this._state.collectionsLoading){this._contentEl.innerHTML=`
        <div class="pc-loading">
          <div class="pc-spinner"></div>
          <span>Loading collections...</span>
        </div>
      `;return}if(this._state.error){this._contentEl.innerHTML=`
        <div class="pc-error">
          <span>${this._state.error}</span>
          <button type="button" class="pc-btn pc-btn-small pc-retry">Retry</button>
        </div>
      `,(t=this._contentEl.querySelector(".pc-retry"))==null||t.addEventListener("click",()=>this._loadCollections());return}this._contentEl.innerHTML=`
      <div class="pc-collection-browser">
        <div class="pc-search-box">
          <input type="text" class="pc-search-input" placeholder="Search ${this._state.collections.length} collections...">
        </div>
        <div class="pc-collection-list"></div>
      </div>
    `;const e=this._contentEl.querySelector(".pc-search-input"),s=this._contentEl.querySelector(".pc-collection-list"),i=(n="")=>{const a=this._state.collections.filter(o=>{var r,l,p;const c=n.toLowerCase();return o.id.toLowerCase().includes(c)||((r=o.title)==null?void 0:r.toLowerCase().includes(c))||((l=o.description)==null?void 0:l.toLowerCase().includes(c))||((p=o.keywords)==null?void 0:p.some(h=>h.toLowerCase().includes(c)))});s.innerHTML=a.map(o=>{var r;return`
          <div class="pc-collection-item" data-id="${o.id}">
            <div class="pc-collection-title">${o.title||o.id}</div>
            <div class="pc-collection-description">${Z(o.description||"",100)}</div>
            ${(r=o.keywords)!=null&&r.length?`<div class="pc-collection-keywords">${o.keywords.slice(0,3).map(l=>`<span class="pc-tag">${l}</span>`).join("")}</div>`:""}
          </div>
        `}).join(""),s.querySelectorAll(".pc-collection-item").forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-id"),l=this._state.collections.find(p=>p.id===r);l&&this.selectCollection(l)})})};i(),e.addEventListener("input",()=>i(e.value))}_renderSearch(){var t,e,s,i,n,a;if(!this._contentEl||!this._state.selectedCollection)return;const o=this._state.selectedCollection,r=U(o.id),l=this._collectionSupportsCloudCover(o);this._contentEl.innerHTML=`
      <div class="pc-search-panel">
        <button type="button" class="pc-btn-back">&larr; Back to collections</button>

        <div class="pc-selected-collection">
          <span class="pc-label">Collection</span>
          <span class="pc-collection-name">${o.title||o.id}</span>
          <button type="button" class="pc-btn pc-btn-small pc-open-collection-page">Open Webpage</button>
        </div>

        <div class="pc-form-group">
          <label class="pc-label">Bounding Box</label>
          <div class="pc-bbox-display">
            <div class="pc-bbox-actions">
              ${this._options.enableBboxSelector?`<button type="button" class="pc-btn pc-btn-small pc-draw-bbox${this._state.bboxSelectorActive?" pc-btn-active":""}">${this._state.bboxSelectorActive?"Cancel Draw":"Draw Bbox"}</button>`:""}
              <button type="button" class="pc-btn pc-btn-small pc-use-view">Use Map View</button>
              <button type="button" class="pc-btn pc-btn-small pc-clear-bbox" ${this._state.drawnBbox?"":"disabled"}>Clear</button>
            </div>
            <div class="pc-bbox-coordinates">
              <span class="pc-bbox-text">${this._state.bboxSelectorActive?"Drag on the map to draw a bounding box":this._state.drawnBbox?Y(this._state.drawnBbox):"Use current map view"}</span>
            </div>
          </div>
        </div>

        <div class="pc-form-group">
          <label class="pc-label">Date Range</label>
          <div class="pc-date-inputs">
            <input type="date" class="pc-input pc-date-start">
            <span class="pc-date-separator">to</span>
            <input type="date" class="pc-input pc-date-end">
          </div>
        </div>

        ${l?`
        <div class="pc-form-group">
          <label class="pc-label">Max Cloud Cover (%)</label>
          <div class="pc-cloud-cover-input">
            <input type="range" class="pc-cloud-slider" min="0" max="100" value="100">
            <span class="pc-cloud-value">100%</span>
          </div>
        </div>
        `:""}

        <div class="pc-form-group">
          <label class="pc-label">Results Limit</label>
          <select class="pc-input pc-limit-select">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50" selected>50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div class="pc-form-group">
          <label class="pc-label">Sort By</label>
          <select class="pc-input pc-sort-select">
            <option value="datetime-desc">Date (Newest First)</option>
            <option value="datetime-asc">Date (Oldest First)</option>
            ${l?`
            <option value="cloud-asc">Cloud Cover (Lowest First)</option>
            <option value="cloud-desc">Cloud Cover (Highest First)</option>
            `:""}
          </select>
        </div>

        ${r.length?`
          <div class="pc-form-group">
            <label class="pc-label">Visualization Preset</label>
            <select class="pc-input pc-preset-select">
              ${r.map(h=>`<option value="${h.name}">${h.label}</option>`).join("")}
            </select>
          </div>
        `:""}

        <button type="button" class="pc-btn pc-btn-primary pc-search-btn${this._state.searchLoading?" pc-search-btn-loading":""}" ${this._state.searchLoading?'disabled aria-busy="true"':""}>
          ${this._state.searchLoading?'<span class="pc-search-spinner"></span>Searching...':"Search Items"}
        </button>
      </div>
    `,(t=this._contentEl.querySelector(".pc-btn-back"))==null||t.addEventListener("click",()=>{this.selectCollection(null)}),(e=this._contentEl.querySelector(".pc-open-collection-page"))==null||e.addEventListener("click",()=>{window.open(this._getCollectionPageUrl(o),"_blank")}),(s=this._contentEl.querySelector(".pc-use-view"))==null||s.addEventListener("click",()=>{if(this._map){this._stopBboxDraw(!1);const h=this._map.getBounds();this._state.drawnBbox=[h.getWest(),h.getSouth(),h.getEast(),h.getNorth()],this._state.searchParams.bbox=this._state.drawnBbox,this._renderContent()}}),(i=this._contentEl.querySelector(".pc-clear-bbox"))==null||i.addEventListener("click",()=>{this._stopBboxDraw(!1),this._state.drawnBbox=null,delete this._state.searchParams.bbox,this._emit("statechange"),this._renderContent()}),(n=this._contentEl.querySelector(".pc-draw-bbox"))==null||n.addEventListener("click",()=>{this._state.bboxSelectorActive?this._stopBboxDraw():this._startBboxDraw()});const p=this._contentEl.querySelector(".pc-cloud-slider"),c=this._contentEl.querySelector(".pc-cloud-value");p&&c&&p.addEventListener("input",()=>{c.textContent=`${p.value}%`}),(a=this._contentEl.querySelector(".pc-search-btn"))==null||a.addEventListener("click",()=>{var h,m,b,v,g,u,_,f,y,x;if(this._state.searchLoading)return;const C=(m=(h=this._contentEl)==null?void 0:h.querySelector(".pc-date-start"))==null?void 0:m.value,E=(v=(b=this._contentEl)==null?void 0:b.querySelector(".pc-date-end"))==null?void 0:v.value,P=(u=(g=this._contentEl)==null?void 0:g.querySelector(".pc-cloud-slider"))==null?void 0:u.value,I=(f=(_=this._contentEl)==null?void 0:_.querySelector(".pc-limit-select"))==null?void 0:f.value,M=(x=(y=this._contentEl)==null?void 0:y.querySelector(".pc-sort-select"))==null?void 0:x.value;if(C||E){const w=C?`${C}T00:00:00Z`:"..",H=E?`${E}T23:59:59Z`:"..";this._state.searchParams.datetime=`${w}/${H}`}if(!this._state.searchParams.bbox&&this._map){const w=this._map.getBounds();this._state.searchParams.bbox=[w.getWest(),w.getSouth(),w.getEast(),w.getNorth()]}if(P&&parseInt(P)<100&&(this._state.searchParams.query={"eo:cloud_cover":{lte:parseInt(P)}}),I&&(this._state.searchParams.limit=parseInt(I)),M){const[w,H]=M.split("-"),B=w==="cloud"?"properties.eo:cloud_cover":"properties.datetime";this._state.searchParams.sortby=[{field:B,direction:H}]}this.search()})}_collectionSupportsCloudCover(t){var e;return!!(["sentinel-2-l2a","sentinel-2-l1c","landsat-c2-l1","landsat-c2-l2","landsat-8-c2-l2","landsat-9-c2-l2","modis-09A1-061","modis-09Q1-061"].some(s=>t.id.includes(s))||(e=t.summaries)!=null&&e["eo:cloud_cover"])}_getCollectionPageUrl(t){return`https://planetarycomputer.microsoft.com/dataset/${encodeURIComponent(t.id)}`}_startBboxDraw(){!this._map||!this._mapContainer||!this._options.enableBboxSelector||(this._stopBboxDraw(!1),this._state.bboxSelectorActive=!0,this._bboxStartPoint=null,this._bboxDragPanWasEnabled=this._map.dragPan.isEnabled(),this._bboxBoxZoomWasEnabled=this._map.boxZoom.isEnabled(),this._map.dragPan.disable(),this._map.boxZoom.disable(),this._mapContainer.classList.add("pc-bbox-drawing"),this._bboxOverlay=document.createElement("div"),this._bboxOverlay.className="pc-bbox-overlay",this._bboxOverlay.innerHTML='<div class="pc-bbox-instructions">Drag on the map to draw a bounding box</div>',this._bboxBox=document.createElement("div"),this._bboxBox.className="pc-bbox-box",this._bboxOverlay.appendChild(this._bboxBox),this._mapContainer.appendChild(this._bboxOverlay),this._bboxPointerDownHandler=t=>{t.button!==0||!this._mapContainer||(t.preventDefault(),t.stopPropagation(),this._ignoreNextDocumentClick=!0,this._bboxStartPoint=this._getPointerPoint(t),this._updateBboxBox(this._bboxStartPoint,this._bboxStartPoint))},this._bboxPointerMoveHandler=t=>{this._bboxStartPoint&&(t.preventDefault(),this._updateBboxBox(this._bboxStartPoint,this._getPointerPoint(t)))},this._bboxPointerUpHandler=t=>{if(!this._bboxStartPoint||!this._map)return;t.preventDefault(),this._ignoreNextDocumentClick=!0;const e=this._getPointerPoint(t),s=Math.min(this._bboxStartPoint.x,e.x),i=Math.max(this._bboxStartPoint.x,e.x),n=Math.min(this._bboxStartPoint.y,e.y),a=Math.max(this._bboxStartPoint.y,e.y);if(i-s<4||a-n<4){this._bboxStartPoint=null,this._bboxBox&&(this._bboxBox.style.display="none");return}const o=this._map.unproject([s,a]),r=this._map.unproject([i,n]),l=[Math.min(o.lng,r.lng),Math.min(o.lat,r.lat),Math.max(o.lng,r.lng),Math.max(o.lat,r.lat)];this._state.drawnBbox=l,this._state.searchParams.bbox=l,this._stopBboxDraw(!1),this._emit("bbox:complete",l),this._emit("statechange"),this._renderContent()},this._bboxKeyDownHandler=t=>{t.key==="Escape"&&this._stopBboxDraw()},this._mapContainer.addEventListener("pointerdown",this._bboxPointerDownHandler),window.addEventListener("pointermove",this._bboxPointerMoveHandler),window.addEventListener("pointerup",this._bboxPointerUpHandler),document.addEventListener("keydown",this._bboxKeyDownHandler),this._emit("bbox:start"),this._emit("statechange"),this._renderContent())}_stopBboxDraw(t=!0){var e,s,i;this._bboxPointerDownHandler&&this._mapContainer&&this._mapContainer.removeEventListener("pointerdown",this._bboxPointerDownHandler),this._bboxPointerMoveHandler&&window.removeEventListener("pointermove",this._bboxPointerMoveHandler),this._bboxPointerUpHandler&&window.removeEventListener("pointerup",this._bboxPointerUpHandler),this._bboxKeyDownHandler&&document.removeEventListener("keydown",this._bboxKeyDownHandler),this._bboxPointerDownHandler=null,this._bboxPointerMoveHandler=null,this._bboxPointerUpHandler=null,this._bboxKeyDownHandler=null,this._bboxStartPoint=null,(s=(e=this._bboxOverlay)==null?void 0:e.parentNode)==null||s.removeChild(this._bboxOverlay),this._bboxOverlay=void 0,this._bboxBox=void 0,(i=this._mapContainer)==null||i.classList.remove("pc-bbox-drawing"),this._map&&(this._bboxDragPanWasEnabled&&!this._map.dragPan.isEnabled()&&this._map.dragPan.enable(),this._bboxBoxZoomWasEnabled&&!this._map.boxZoom.isEnabled()&&this._map.boxZoom.enable()),this._state.bboxSelectorActive&&(this._state.bboxSelectorActive=!1,this._emit("statechange"),t&&this._renderContent())}_getPointerPoint(t){var e;const s=(e=this._mapContainer)==null?void 0:e.getBoundingClientRect();return s?{x:t.clientX-s.left,y:t.clientY-s.top}:{x:0,y:0}}_updateBboxBox(t,e){if(!this._bboxBox)return;const s=Math.min(t.x,e.x),i=Math.min(t.y,e.y),n=Math.abs(t.x-e.x),a=Math.abs(t.y-e.y);this._bboxBox.style.display="block",this._bboxBox.style.left=`${s}px`,this._bboxBox.style.top=`${i}px`,this._bboxBox.style.width=`${n}px`,this._bboxBox.style.height=`${a}px`}_showSearchFootprints(t){if(!this._map)return;if(!this._map.isStyleLoaded()){this._map.once("load",()=>this._showSearchFootprints(t));return}const e={type:"FeatureCollection",features:t.map(i=>this._itemToFootprintFeature(i)).filter(i=>!!i)},s=this._map.getSource($);s?s.setData(e):this._map.addSource($,{type:"geojson",data:e}),this._ensureFootprintLayers(),this._bindFootprintInteractions(),this._updateSelectedFootprint()}_ensureFootprintLayers(){this._map&&(this._map.getLayer(L)||this._map.addLayer({id:L,type:"fill",source:$,paint:{"fill-color":"#0078d4","fill-opacity":.1}}),this._map.getLayer(F)||this._map.addLayer({id:F,type:"line",source:$,paint:{"line-color":"#0078d4","line-width":1.5,"line-opacity":.75}}),this._map.getLayer(k)||this._map.addLayer({id:k,type:"fill",source:$,filter:["==",["get","itemId"],""],paint:{"fill-color":"#ffb900","fill-opacity":.24}}),this._map.getLayer(R)||this._map.addLayer({id:R,type:"line",source:$,filter:["==",["get","itemId"],""],paint:{"line-color":"#ff8c00","line-width":3,"line-opacity":.95}}))}_bindFootprintInteractions(){!this._map||this._footprintClickHandler||(this._footprintClickHandler=t=>{var e,s,i;if(this._state.bboxSelectorActive||this._inspectorLayerId)return;const n=(i=(s=(e=t.features)==null?void 0:e[0])==null?void 0:s.properties)==null?void 0:i.itemId;typeof n=="string"&&(this._ignoreNextDocumentClick=!0,this._selectSearchResult(n,{fromMap:!0}))},this._footprintMouseEnterHandler=()=>{this._mapContainer&&!this._state.bboxSelectorActive&&!this._inspectorLayerId&&(this._mapContainer.style.cursor="pointer")},this._footprintMouseLeaveHandler=()=>{this._mapContainer&&!this._state.bboxSelectorActive&&!this._inspectorLayerId&&(this._mapContainer.style.cursor="")},this._map.on("click",L,this._footprintClickHandler),this._map.on("mouseenter",L,this._footprintMouseEnterHandler),this._map.on("mouseleave",L,this._footprintMouseLeaveHandler))}_selectSearchResult(t,e={}){this._state.selectedSearchResultId=t,this._state.selectedItem=t&&this._state.searchResults.find(s=>s.id===t)||null,this._updateSelectedFootprint(),e.fromMap&&this._state.activeView!=="results"&&(this._state.activeView="results"),this._emit("item:select"),this._emit("statechange"),this._renderContent(),e.fromMap&&this._scrollSelectedResultIntoView()}_clearSearchSelection(t=!0){this._state.selectedSearchResultId=null,this._state.selectedItem=null,this._updateSelectedFootprint(),this._emit("statechange"),t&&this._renderContent()}_clearSearchFootprints(t=!0){var e;this._map&&(this._footprintClickHandler&&this._map.off("click",L,this._footprintClickHandler),this._footprintMouseEnterHandler&&this._map.off("mouseenter",L,this._footprintMouseEnterHandler),this._footprintMouseLeaveHandler&&this._map.off("mouseleave",L,this._footprintMouseLeaveHandler),[R,k,F,L].forEach(s=>{var i;(i=this._map)!=null&&i.getLayer(s)&&this._map.removeLayer(s)}),this._map.getSource($)&&this._map.removeSource($)),this._footprintClickHandler=null,this._footprintMouseEnterHandler=null,this._footprintMouseLeaveHandler=null,(e=this._mapContainer)==null||e.style.removeProperty("cursor"),this._state.selectedSearchResultId=null,this._state.selectedItem=null,t&&(this._emit("statechange"),this._renderContent())}_updateSelectedFootprint(){if(!this._map)return;const t=["==",["get","itemId"],this._state.selectedSearchResultId||""];this._map.getLayer(k)&&this._map.setFilter(k,t),this._map.getLayer(R)&&this._map.setFilter(R,t)}_itemToFootprintFeature(t){const e=t.geometry||this._bboxToPolygon(t.bbox);return e?{type:"Feature",id:t.id,geometry:e,properties:{itemId:t.id,title:t.id}}:null}_bboxToPolygon(t){if(!t||t.length<4)return null;const[e,s,i,n]=t;return[e,s,i,n].every(a=>Number.isFinite(a))?{type:"Polygon",coordinates:[[[e,s],[i,s],[i,n],[e,n],[e,s]]]}:null}_scrollSelectedResultIntoView(){var t;this._state.selectedSearchResultId&&Array.from(((t=this._contentEl)==null?void 0:t.querySelectorAll(".pc-result-item"))||[]).find(e=>e.getAttribute("data-id")===this._state.selectedSearchResultId)?.scrollIntoView({block:"nearest"})}_renderResults(){var t,e,s,i;if(!this._contentEl)return;if(this._state.searchLoading){this._contentEl.innerHTML=`
        <div class="pc-loading">
          <div class="pc-spinner"></div>
          <span>Searching...</span>
        </div>
      `;return}const n=this._state.searchResults,a=this._state.selectedSearchResultId;this._contentEl.innerHTML=`
      <div class="pc-results">
        <div class="pc-results-header">
          <button type="button" class="pc-btn-back">&larr; Back</button>
          <span class="pc-results-count">${n.length} items found</span>
        </div>
        ${n.length?`
        <div class="pc-results-toolbar">
          <button type="button" class="pc-btn pc-btn-small pc-clear-result-selection" ${a?"":"disabled"}>
            Clear Selection
          </button>
          <button type="button" class="pc-btn pc-btn-small pc-clear-footprints">
            Clear Footprints
          </button>
          <button type="button" class="pc-btn pc-btn-small pc-download-stac" title="Download a minimal STAC JSON of the search results">
            Download STAC JSON
          </button>
        </div>
        `:""}
        <div class="pc-results-list">
          ${n.length===0?'<div class="pc-results-empty">No items found. Try adjusting your search.</div>':n.map(o=>{var r;return`
                <div class="pc-result-item${a===o.id?" pc-result-selected":""}" data-id="${o.id}">
                  ${(r=o.assets.thumbnail)!=null&&r.href?`<div class="pc-result-thumbnail"><img src="${o.assets.thumbnail.href}" alt="" loading="lazy"></div>`:""}
                  <div class="pc-result-info">
                    <div class="pc-result-title">${o.id}</div>
                    <div class="pc-result-date">${q(Q(o.properties))}</div>
                    ${o.properties["eo:cloud_cover"]!==void 0?`<div class="pc-result-cloud">Cloud: ${o.properties["eo:cloud_cover"].toFixed(0)}%</div>`:""}
                  </div>
                  <div class="pc-result-actions">
                    <button type="button" class="pc-btn pc-btn-small pc-view-item" title="View details">View</button>
                    <button type="button" class="pc-btn pc-btn-small pc-add-layer" title="Add to map">+</button>
                  </div>
                </div>
              `}).join("")}
        </div>
      </div>
    `,(t=this._contentEl.querySelector(".pc-btn-back"))==null||t.addEventListener("click",()=>{this.setView("search")}),(e=this._contentEl.querySelector(".pc-clear-result-selection"))==null||e.addEventListener("click",()=>{this._clearSearchSelection()}),(s=this._contentEl.querySelector(".pc-clear-footprints"))==null||s.addEventListener("click",()=>{this._clearSearchFootprints()}),(i=this._contentEl.querySelector(".pc-download-stac"))==null||i.addEventListener("click",()=>{this.downloadStacJson()}),this._contentEl.querySelectorAll(".pc-result-item").forEach(o=>{var r,l;const p=o.getAttribute("data-id"),c=n.find(h=>h.id===p);c&&((r=o.querySelector(".pc-add-layer"))==null||r.addEventListener("click",h=>{h.stopPropagation();const m=this.addItemLayer(c);m&&this.zoomToLayer(m.id)}),(l=o.querySelector(".pc-view-item"))==null||l.addEventListener("click",h=>{h.stopPropagation(),this.selectItem(c)}),o.addEventListener("click",()=>{this.selectItem(c)}))})}_renderItem(){var t,e,s,i,n,a,o,r;if(!this._contentEl||!this._state.selectedItem)return;const l=this._state.selectedItem,p=Object.entries(l.assets),c=l.collection?U(l.collection):[],h=p.filter(([,u])=>{const _=u.type||"";return _.includes("tiff")||_.includes("geotiff")||_.includes("cog")||_.includes("image")||!_}),m=[{name:"",label:"None (Default)"},{name:"viridis",label:"Viridis"},{name:"plasma",label:"Plasma"},{name:"inferno",label:"Inferno"},{name:"magma",label:"Magma"},{name:"cividis",label:"Cividis"},{name:"terrain",label:"Terrain"},{name:"rdylgn",label:"Red-Yellow-Green"},{name:"rdylbu",label:"Red-Yellow-Blue"},{name:"spectral",label:"Spectral"},{name:"coolwarm",label:"Cool-Warm"},{name:"blues",label:"Blues"},{name:"greens",label:"Greens"},{name:"reds",label:"Reds"},{name:"greys",label:"Greys"},{name:"ylgnbu",label:"Yellow-Green-Blue"},{name:"rainbow",label:"Rainbow"}];this._contentEl.innerHTML=`
      <div class="pc-item-details">
        <div class="pc-details-header">
          <button type="button" class="pc-btn-back">&larr; Back</button>
          <h3 class="pc-details-title">${l.id}</h3>
        </div>

        <div class="pc-details-meta">
          <div class="pc-meta-item">
            <span class="pc-label">Date</span>
            <span class="pc-value">${q(Q(l.properties))}</span>
          </div>
          ${l.properties["eo:cloud_cover"]!==void 0?`
            <div class="pc-meta-item">
              <span class="pc-label">Cloud Cover</span>
              <span class="pc-value">${l.properties["eo:cloud_cover"].toFixed(1)}%</span>
            </div>
          `:""}
        </div>

        <div class="pc-details-section">
          <h4 class="pc-section-title">Visualization Options</h4>

          ${c.length?`
            <div class="pc-form-group">
              <label class="pc-label">Preset</label>
              <select class="pc-input pc-preset-select">
                <option value="">Custom</option>
                ${c.map(u=>`<option value="${u.name}">${u.label}</option>`).join("")}
              </select>
            </div>
          `:""}

          <div class="pc-custom-viz">
            <div class="pc-form-group">
              <label class="pc-label">Asset</label>
              <select class="pc-input pc-asset-select">
                ${h.map(([u,_])=>`<option value="${u}">${_.title||u}</option>`).join("")}
              </select>
            </div>

            <div class="pc-form-group">
              <label class="pc-label">Rescale (Min, Max)</label>
              <div class="pc-rescale-inputs">
                <input type="number" class="pc-input pc-rescale-min" placeholder="Min (e.g., 0)" step="any">
                <span class="pc-rescale-separator">to</span>
                <input type="number" class="pc-input pc-rescale-max" placeholder="Max (e.g., 255)" step="any">
              </div>
            </div>

            <div class="pc-form-group">
              <label class="pc-label">Colormap</label>
              <select class="pc-input pc-colormap-select">
                ${m.map(u=>`<option value="${u.name}">${u.label}</option>`).join("")}
              </select>
            </div>

            <div class="pc-form-group">
              <label class="pc-label">Band Expression (optional)</label>
              <input type="text" class="pc-input pc-expression-input" placeholder="e.g., (B08-B04)/(B08+B04)">
              <small class="pc-hint">Leave empty to use selected asset. Use band math for indices like NDVI.</small>
            </div>

            <details class="pc-advanced-render">
              <summary>Advanced Rendering</summary>

              <div class="pc-form-group">
                <label class="pc-label">Tile Output</label>
                <div class="pc-advanced-grid">
                  <select class="pc-input pc-tile-format">
                    <option value="">Default</option>
                    <option value="png">PNG</option>
                    <option value="jpg">JPG</option>
                    <option value="webp">WebP</option>
                    <option value="pngraw">PNG Raw</option>
                  </select>
                  <select class="pc-input pc-tile-scale">
                    <option value="">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                    <option value="4">4x</option>
                  </select>
                </div>
              </div>

              <div class="pc-form-group">
                <label class="pc-label">Zoom Range</label>
                <div class="pc-rescale-inputs">
                  <input type="number" class="pc-input pc-minzoom" placeholder="Min zoom" min="0" max="30">
                  <span class="pc-rescale-separator">to</span>
                  <input type="number" class="pc-input pc-maxzoom" placeholder="Max zoom" min="0" max="30">
                </div>
              </div>

              <div class="pc-form-group">
                <label class="pc-label">Color Formula</label>
                <input type="text" class="pc-input pc-color-formula" placeholder="e.g., gamma rgb 1.8">
              </div>

              <div class="pc-advanced-grid">
                <div class="pc-form-group">
                  <label class="pc-label">Nodata</label>
                  <input type="number" class="pc-input pc-nodata" placeholder="Auto" step="any">
                </div>
                <div class="pc-form-group">
                  <label class="pc-label">Buffer</label>
                  <input type="number" class="pc-input pc-buffer" placeholder="0" min="0" step="1">
                </div>
              </div>

              <div class="pc-checkbox-group">
                <label><input type="checkbox" class="pc-unscale"> Unscale</label>
                <label><input type="checkbox" class="pc-asset-as-band"> Asset as band</label>
                <label><input type="checkbox" class="pc-return-mask"> Return mask</label>
              </div>
            </details>
          </div>
        </div>

        <div class="pc-details-section">
          <h4 class="pc-section-title">Data API Tools</h4>
          <div class="pc-tool-actions">
            <button type="button" class="pc-btn pc-btn-small pc-load-stats">Statistics</button>
            <button type="button" class="pc-btn pc-btn-small pc-auto-stretch">Auto Stretch</button>
            <button type="button" class="pc-btn pc-btn-small pc-show-legend">Legend</button>
            <button type="button" class="pc-btn pc-btn-small pc-load-tilejson">TileJSON</button>
            <button type="button" class="pc-btn pc-btn-small pc-export-preview">Preview</button>
            <button type="button" class="pc-btn pc-btn-small pc-export-bbox" ${this._state.drawnBbox?"":"disabled"}>BBox Image</button>
          </div>
          <div class="pc-tool-output pc-stats-output"></div>
        </div>

        <div class="pc-details-section">
          <h4 class="pc-section-title">Assets (${p.length})</h4>
          <div class="pc-assets-list">
            ${p.map(([u,_])=>`
              <div class="pc-asset-item" data-key="${u}">
                <div class="pc-asset-info">
                  <div class="pc-asset-name">${_.title||u}</div>
                  <div class="pc-asset-type">${_.type||"Unknown"}</div>
                </div>
                <button type="button" class="pc-btn pc-btn-small pc-download-asset">Download</button>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="pc-details-actions">
          <button type="button" class="pc-btn pc-btn-primary pc-add-to-map">Add to Map</button>
        </div>
      </div>
    `;const b=this._contentEl.querySelector(".pc-preset-select"),v=this._contentEl.querySelector(".pc-custom-viz");b&&v&&b.addEventListener("change",()=>{v.style.display=b.value?"none":"block"}),(t=this._contentEl.querySelector(".pc-btn-back"))==null||t.addEventListener("click",()=>{this._state.activeView="results",this._emit("statechange"),this._renderContent()});const g=()=>{var u,_,f;const y=(_=(u=this._contentEl)==null?void 0:u.querySelector(".pc-preset-select"))==null?void 0:_.value,x=this._getAdvancedRenderParams();return y?{...((f=c.find(C=>C.name===y))==null?void 0:f.params)||{},...x}:{...this._getCustomRenderParams(),...x}};(e=this._contentEl.querySelector(".pc-load-stats"))==null||e.addEventListener("click",async()=>{await this._loadItemStatistics(l,g())}),(s=this._contentEl.querySelector(".pc-auto-stretch"))==null||s.addEventListener("click",async()=>{await this._autoStretchItem(l,g())}),(i=this._contentEl.querySelector(".pc-show-legend"))==null||i.addEventListener("click",()=>{this._showRenderLegend(g())}),(n=this._contentEl.querySelector(".pc-load-tilejson"))==null||n.addEventListener("click",async()=>{await this._loadItemTileJSON(l,g())}),(a=this._contentEl.querySelector(".pc-export-preview"))==null||a.addEventListener("click",()=>{this._openItemPreview(l,g())}),(o=this._contentEl.querySelector(".pc-export-bbox"))==null||o.addEventListener("click",()=>{this._openItemBboxImage(l,g())}),(r=this._contentEl.querySelector(".pc-add-to-map"))==null||r.addEventListener("click",()=>{var u,_;const f=(_=(u=this._contentEl)==null?void 0:u.querySelector(".pc-preset-select"))==null?void 0:_.value;let y;if(f){const x=c.find(C=>C.name===f);y=this.addItemLayer(l,x?{presetName:f,renderParams:g()}:void 0)}else y=this.addItemLayer(l,{renderParams:g()});y&&this.zoomToLayer(y.id)}),this._contentEl.querySelectorAll(".pc-download-asset").forEach(u=>{u.addEventListener("click",async _=>{var f;_.stopPropagation();const y=(f=u.closest(".pc-asset-item"))==null?void 0:f.dataset.key;if(y)try{const x=await this.getDownloadUrl(l,y);window.open(x,"_blank")}catch(x){console.error("Download error:",x)}})})}_getCustomRenderParams(){var t,e,s,i,n,a,o,r,l;const p=(t=this._contentEl)==null?void 0:t.querySelector(".pc-asset-select"),c=(s=(e=this._contentEl)==null?void 0:e.querySelector(".pc-rescale-min"))==null?void 0:s.value,h=(n=(i=this._contentEl)==null?void 0:i.querySelector(".pc-rescale-max"))==null?void 0:n.value,m=(o=(a=this._contentEl)==null?void 0:a.querySelector(".pc-colormap-select"))==null?void 0:o.value,b=(l=(r=this._contentEl)==null?void 0:r.querySelector(".pc-expression-input"))==null?void 0:l.value,v={};return p?.value&&(v.assets=[p.value]),c&&h&&(v.rescale=`${c},${h}`),m&&(v.colormap_name=m),b&&(v.expression=b,delete v.assets),v}_getAdvancedRenderParams(){var t,e,s,i,n,a,o,r,l,p,c,h,m,b,v,g,u,_,f,y;const x=(e=(t=this._contentEl)==null?void 0:t.querySelector(".pc-tile-format"))==null?void 0:e.value,C=(i=(s=this._contentEl)==null?void 0:s.querySelector(".pc-tile-scale"))==null?void 0:i.value,E=(a=(n=this._contentEl)==null?void 0:n.querySelector(".pc-minzoom"))==null?void 0:a.value,P=(r=(o=this._contentEl)==null?void 0:o.querySelector(".pc-maxzoom"))==null?void 0:r.value,I=(p=(l=this._contentEl)==null?void 0:l.querySelector(".pc-color-formula"))==null?void 0:p.value,M=(h=(c=this._contentEl)==null?void 0:c.querySelector(".pc-nodata"))==null?void 0:h.value,w=(b=(m=this._contentEl)==null?void 0:m.querySelector(".pc-buffer"))==null?void 0:b.value,H=(g=(v=this._contentEl)==null?void 0:v.querySelector(".pc-unscale"))==null?void 0:g.checked,B=(_=(u=this._contentEl)==null?void 0:u.querySelector(".pc-asset-as-band"))==null?void 0:_.checked,tt=(y=(f=this._contentEl)==null?void 0:f.querySelector(".pc-return-mask"))==null?void 0:y.checked,S={};return x&&(S.tile_format=x),C&&(S.tile_scale=parseInt(C)),E&&(S.minzoom=parseInt(E)),P&&(S.maxzoom=parseInt(P)),I&&(S.color_formula=I),M&&(S.nodata=parseFloat(M)),w&&(S.buffer=parseInt(w)),H&&(S.unscale=!0),B&&(S.asset_as_band=!0),tt&&(S.return_mask=!0),S}async _loadItemStatistics(t,e){var s;const i=t.collection,n=(s=this._contentEl)==null?void 0:s.querySelector(".pc-stats-output");if(!i||!n)return null;n.innerHTML='<div class="pc-tool-loading">Loading statistics...</div>';try{const a=await this._tilerClient.getItemStatistics(i,t.id,{...e,histogram_bins:20,max_size:1024});return n.innerHTML=this._renderStatisticsOutput(a),a}catch(a){const o=a instanceof Error?a.message:"Failed to load statistics";return n.innerHTML=`<div class="pc-tool-error">${this._escapeHtml(o)}</div>`,null}}async _autoStretchItem(t,e){var s,i,n,a,o,r,l,p;const c=await this._loadItemStatistics(t,e);if(!c)return;const h=this._findFirstBandStatistics(c),m=(s=this._contentEl)==null?void 0:s.querySelector(".pc-stats-output");if(!h){m&&(m.innerHTML='<div class="pc-tool-error">No numeric band statistics were found.</div>');return}const b=(i=this._contentEl)==null?void 0:i.querySelector(".pc-preset-select"),v=(n=this._contentEl)==null?void 0:n.querySelector(".pc-custom-viz"),g=(a=this._contentEl)==null?void 0:a.querySelector(".pc-rescale-min"),u=(o=this._contentEl)==null?void 0:o.querySelector(".pc-rescale-max"),_=(r=this._contentEl)==null?void 0:r.querySelector(".pc-asset-select"),f=(l=this._contentEl)==null?void 0:l.querySelector(".pc-expression-input");b&&(b.value=""),v&&(v.style.display="flex"),(p=e.assets)!=null&&p[0]&&_&&(_.value=e.assets[0]),e.expression&&f&&(f.value=e.expression),g&&(g.value=String(h.stats.min)),u&&(u.value=String(h.stats.max)),m&&(m.innerHTML=`
        <div class="pc-tool-success">Applied stretch ${this._formatNumber(h.stats.min)} to ${this._formatNumber(h.stats.max)} from ${this._escapeHtml(h.label)}.</div>
        ${this._renderStatisticsOutput(c)}
      `)}_openItemPreview(t,e){if(!t.collection)return;const s=this._tilerClient.getItemPreviewUrl(t.collection,t.id,e);window.open(s,"_blank")}_openItemBboxImage(t,e){if(!t.collection||!this._state.drawnBbox)return;const s=this._tilerClient.getItemBboxImageUrl(t.collection,t.id,this._state.drawnBbox,{width:768,height:512},e);window.open(s,"_blank")}_showRenderLegend(t){var e;const s=(e=this._contentEl)==null?void 0:e.querySelector(".pc-stats-output");if(s){if(!t.colormap_name){s.innerHTML='<div class="pc-tool-error">Choose a named colormap to generate a legend.</div>';return}s.innerHTML=this._renderLegend(t.colormap_name)}}async _loadItemTileJSON(t,e){var s,i;const n=t.collection,a=(s=this._contentEl)==null?void 0:s.querySelector(".pc-stats-output");if(!(!n||!a)){a.innerHTML='<div class="pc-tool-loading">Loading TileJSON...</div>';try{const o=await this._tilerClient.getItemTileJSON(n,t.id,e),r=Array.isArray(o.bounds)?o.bounds.join(", "):"n/a",l=Array.isArray(o.center)?o.center.join(", "):"n/a";a.innerHTML=`
        <div class="pc-tilejson-card">
          <div><span>Bounds</span><strong>${this._escapeHtml(r)}</strong></div>
          <div><span>Center</span><strong>${this._escapeHtml(l)}</strong></div>
          <div><span>Min Zoom</span><strong>${this._escapeHtml(String(o.minzoom??"n/a"))}</strong></div>
          <div><span>Max Zoom</span><strong>${this._escapeHtml(String(o.maxzoom??"n/a"))}</strong></div>
          <div><span>Tiles</span><strong>${this._escapeHtml(String(((i=o.tiles)==null?void 0:i.length)||0))}</strong></div>
        </div>
      `}catch(o){const r=o instanceof Error?o.message:"Failed to load TileJSON";a.innerHTML=`<div class="pc-tool-error">${this._escapeHtml(r)}</div>`}}}_renderLegend(t){const e=this._getColormapGradient(t);return`
      <div class="pc-legend-card">
        <div class="pc-legend-title">${this._escapeHtml(t)}</div>
        <div class="pc-legend-ramp" style="background:${e}"></div>
        <div class="pc-legend-labels">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>
    `}_getColormapGradient(t){return{viridis:"linear-gradient(to right, #440154, #414487, #2a788e, #22a884, #7ad151, #fde725)",plasma:"linear-gradient(to right, #0d0887, #6a00a8, #b12a90, #e16462, #fca636, #f0f921)",inferno:"linear-gradient(to right, #000004, #420a68, #932667, #dd513a, #fca50a, #fcffa4)",magma:"linear-gradient(to right, #000004, #3b0f70, #8c2981, #de4968, #fe9f6d, #fcfdbf)",cividis:"linear-gradient(to right, #00204c, #424086, #6c6f7c, #9b9e67, #d6d04d, #ffffe5)",terrain:"linear-gradient(to right, #333399, #00a6ca, #4ac16d, #f5d76e, #b07d45, #ffffff)",rdylgn:"linear-gradient(to right, #a50026, #f46d43, #fee08b, #ffffbf, #d9ef8b, #66bd63, #006837)",rdylbu:"linear-gradient(to right, #a50026, #f46d43, #fee090, #ffffbf, #e0f3f8, #74add1, #313695)",spectral:"linear-gradient(to right, #9e0142, #d53e4f, #f46d43, #fee08b, #ffffbf, #e6f598, #66c2a5, #3288bd, #5e4fa2)",coolwarm:"linear-gradient(to right, #3b4cc0, #7093f3, #dddcdc, #f7a889, #b40426)",blues:"linear-gradient(to right, #f7fbff, #deebf7, #9ecae1, #4292c6, #084594)",greens:"linear-gradient(to right, #f7fcf5, #c7e9c0, #74c476, #238b45, #00441b)",reds:"linear-gradient(to right, #fff5f0, #fcbba1, #fb6a4a, #cb181d, #67000d)",greys:"linear-gradient(to right, #ffffff, #d9d9d9, #969696, #525252, #000000)",ylgnbu:"linear-gradient(to right, #ffffd9, #c7e9b4, #41b6c4, #2c7fb8, #081d58)",rainbow:"linear-gradient(to right, #6e40aa, #4776d0, #1f9e89, #6cc24a, #f5d547, #f98e2b, #d23b3b)"}[t]||"linear-gradient(to right, #000000, #ffffff)"}_findFirstBandStatistics(t,e="band"){if(!t||typeof t!="object")return null;const s=t;if(typeof s.min=="number"&&typeof s.max=="number"&&typeof s.mean=="number")return{label:e,stats:s};for(const[i,n]of Object.entries(s)){const a=this._findFirstBandStatistics(n,i);if(a)return a}return null}_renderStatisticsOutput(t){const e=this._findFirstBandStatistics(t);if(!e)return'<div class="pc-tool-error">No numeric band statistics were found.</div>';const s=e.stats;return`
      <div class="pc-stats-card">
        <div class="pc-stats-title">${this._escapeHtml(e.label)}</div>
        <div class="pc-stats-grid">
          <div><span>Min</span><strong>${this._formatNumber(s.min)}</strong></div>
          <div><span>Max</span><strong>${this._formatNumber(s.max)}</strong></div>
          <div><span>Mean</span><strong>${this._formatNumber(s.mean)}</strong></div>
          <div><span>Std</span><strong>${this._formatNumber(s.std)}</strong></div>
          <div><span>Valid</span><strong>${this._formatNumber(s.valid_percent)}%</strong></div>
          <div><span>Pixels</span><strong>${this._formatNumber(s.valid_pixels)}</strong></div>
        </div>
        ${this._renderHistogram(s)}
      </div>
    `}_renderHistogram(t){var e;const s=(e=t.histogram)==null?void 0:e[0];if(!Array.isArray(s)||s.length===0)return"";const i=Math.max(...s.map(n=>Number(n)||0));return i<=0?"":`
      <div class="pc-histogram" aria-label="Histogram">
        ${s.map(n=>`<span style="height:${Math.max(2,Math.round((Number(n)||0)/i*36))}px"></span>`).join("")}
      </div>
    `}_formatNumber(t){return typeof t!="number"||!isFinite(t)?"n/a":Math.abs(t)>=1e3?t.toLocaleString(void 0,{maximumFractionDigits:0}):Math.abs(t)>=10?t.toLocaleString(void 0,{maximumFractionDigits:2}):t.toLocaleString(void 0,{maximumFractionDigits:4})}_escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}_renderLayers(){if(!this._contentEl)return;const t=this._state.activeLayers;if(t.length===0){this._contentEl.innerHTML=`
        <div class="pc-layers-empty">
          <p>No layers added yet.</p>
          <p>Search for data and add items to the map.</p>
        </div>
      `;return}this._contentEl.innerHTML=`
      <div class="pc-layers-list">
        ${this._renderInspectorOutput()}
        ${t.map(e=>{var s,i,n,a;return`
          <div class="pc-layer-item" data-id="${e.id}">
            <div class="pc-layer-header">
              <input type="checkbox" class="pc-layer-visibility" ${e.visible?"checked":""}>
              <span class="pc-layer-name" title="${((s=e.item)==null?void 0:s.id)||((i=e.collection)==null?void 0:i.title)||e.id}">
                ${((n=e.item)==null?void 0:n.id)||((a=e.collection)==null?void 0:a.title)||e.id}
              </span>
              <button type="button" class="pc-btn-icon pc-toggle-layer-controls${e.showControls?" pc-layer-controls-active":""}" title="${e.showControls?"Hide opacity and colormap":"Show opacity and colormap"}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 21v-7"/>
                  <path d="M4 10V3"/>
                  <path d="M12 21v-9"/>
                  <path d="M12 8V3"/>
                  <path d="M20 21v-5"/>
                  <path d="M20 12V3"/>
                  <path d="M2 14h4"/>
                  <path d="M10 8h4"/>
                  <path d="M18 16h4"/>
                </svg>
              </button>
              ${e.item?`<button type="button" class="pc-btn-icon pc-inspect-layer${this._inspectorLayerId===e.id?" pc-inspect-active":""}" title="${this._inspectorLayerId===e.id?"Stop inspecting":"Inspect pixel values"}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4"/>
                  <path d="M12 18v4"/>
                  <path d="M2 12h4"/>
                  <path d="M18 12h4"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>`:""}
              <button type="button" class="pc-btn-icon pc-zoom-to" title="Zoom to layer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>
              <button type="button" class="pc-btn-icon pc-remove-layer" title="Remove">&times;</button>
            </div>
            <div class="pc-layer-controls${e.showControls?"":" pc-layer-controls-hidden"}">
              <label class="pc-opacity-label">
                Opacity: <span class="pc-opacity-value">${Math.round(e.opacity*100)}%</span>
              </label>
              <input type="range" class="pc-opacity-slider" min="0" max="100" value="${Math.round(e.opacity*100)}">
              ${e.renderParams.colormap_name?this._renderLegend(e.renderParams.colormap_name):""}
            </div>
          </div>
        `}).join("")}
      </div>
    `,this._contentEl.querySelectorAll(".pc-layer-item").forEach(e=>{var s,i,n,a;const o=e.getAttribute("data-id");if(!o)return;const r=e.querySelector(".pc-layer-visibility"),l=e.querySelector(".pc-opacity-slider"),p=e.querySelector(".pc-opacity-value");r?.addEventListener("change",()=>{this.updateLayer(o,{visible:r.checked})}),(s=e.querySelector(".pc-toggle-layer-controls"))==null||s.addEventListener("click",()=>{const c=this._state.activeLayers.find(h=>h.id===o);this.updateLayer(o,{showControls:!c?.showControls}),this._renderContent()}),l?.addEventListener("input",()=>{const c=parseInt(l.value)/100;p.textContent=`${l.value}%`,this.updateLayer(o,{opacity:c})}),(i=e.querySelector(".pc-zoom-to"))==null||i.addEventListener("click",()=>{this.zoomToLayer(o)}),(n=e.querySelector(".pc-remove-layer"))==null||n.addEventListener("click",()=>{this.removeLayer(o)}),(a=e.querySelector(".pc-inspect-layer"))==null||a.addEventListener("click",()=>{this._inspectorLayerId===o?this._stopInspector():this._startInspector(o)})})}_startInspector(t){var e,s;if(!this._map||!this._layerManager)return;const i=this._layerManager.getLayer(t);(e=i?.item)!=null&&e.collection&&(this._stopInspector(!1),this._inspectorLayerId=t,this._inspectorResult=null,(s=this._mapContainer)==null||s.classList.add("pc-inspector-active"),this._inspectClickHandler=n=>{this._queryInspectorPoint(t,n.lngLat.lng,n.lngLat.lat)},this._map.on("click",this._inspectClickHandler),this._renderContent())}_stopInspector(t=!0){var e;this._inspectClickHandler&&this._map&&this._map.off("click",this._inspectClickHandler),this._inspectClickHandler=null,this._inspectorLayerId=null,this._inspectorResult=null,(e=this._mapContainer)==null||e.classList.remove("pc-inspector-active"),t&&this._renderContent()}async _queryInspectorPoint(t,e,s){var i,n;const a=(i=this._layerManager)==null?void 0:i.getLayer(t);if((n=a?.item)!=null&&n.collection){if(!this._itemBboxContainsPoint(a.item,e,s)){this._inspectorResult={layerId:t,lon:e,lat:s,loading:!1,error:"Clicked outside this item footprint. Click inside the visible footprint to inspect pixel values."},this._renderContent();return}this._inspectorResult={layerId:t,lon:e,lat:s,loading:!0},this._renderContent();try{const o=await this._tilerClient.getItemPoint(a.item.collection,a.item.id,e,s,a.renderParams);if(this._inspectorLayerId!==t)return;this._inspectorResult={layerId:t,lon:e,lat:s,loading:!1,data:o}}catch(o){if(this._inspectorLayerId!==t)return;this._inspectorResult={layerId:t,lon:e,lat:s,loading:!1,error:this._getInspectorErrorMessage(o)}}this._renderContent()}}_itemBboxContainsPoint(t,e,s){if(!t.bbox||t.bbox.length<4)return!0;const[i,n,a,o]=t.bbox;return[i,n,a,o].every(r=>Number.isFinite(r))?e>=i&&e<=a&&s>=n&&s<=o:!0}_getInspectorErrorMessage(t){const e=t instanceof Error?t.message.trim():"";return!e||e==="Failed to get point values:"||e==="Failed to get point values"?"No pixel value was returned for this location. Try a point inside the layer footprint and away from nodata areas.":/not found|outside|bounds|intersect|empty|no data|nodata/i.test(e)?"No pixel value is available at this location. The click may be outside valid data or over a nodata pixel.":e}_renderInspectorOutput(){var t;if(!this._inspectorLayerId)return"";const e=this._state.activeLayers.find(n=>n.id===this._inspectorLayerId),s=((t=e?.item)==null?void 0:t.id)||e?.id||this._inspectorLayerId,i=this._inspectorResult;return i?i.loading?`
        <div class="pc-inspector-panel">
          <div class="pc-inspector-title">Inspecting ${this._escapeHtml(s)}</div>
          <div class="pc-tool-loading">Querying ${this._formatNumber(i.lon)}, ${this._formatNumber(i.lat)}...</div>
        </div>
      `:i.error?`
        <div class="pc-inspector-panel">
          <div class="pc-inspector-title">Inspecting ${this._escapeHtml(s)}</div>
          <div class="pc-tool-error">${this._escapeHtml(i.error)}</div>
        </div>
      `:`
      <div class="pc-inspector-panel">
        <div class="pc-inspector-title">Inspecting ${this._escapeHtml(s)}</div>
        <div class="pc-inspector-coords">${this._formatNumber(i.lon)}, ${this._formatNumber(i.lat)}</div>
        ${this._renderPointValues(i.data)}
      </div>
    `:`
        <div class="pc-inspector-panel">
          <div class="pc-inspector-title">Inspecting ${this._escapeHtml(s)}</div>
          <div class="pc-inspector-hint">Click the map to query pixel values.</div>
        </div>
      `}_renderPointValues(t){return t?Array.isArray(t.values)?`
        <div class="pc-point-values">
          ${t.values.map((e,s)=>{var i;const n=((i=t.band_names)==null?void 0:i[s])||`Band ${s+1}`;return`
                <div>
                  <span>${this._escapeHtml(n)}</span>
                  <strong>${this._escapeHtml(this._formatPointValue(e))}</strong>
                </div>
              `}).join("")}
        </div>
      `:`<pre class="pc-point-json">${this._escapeHtml(JSON.stringify(t,null,2))}</pre>`:""}_formatPointValue(t){return typeof t=="number"?this._formatNumber(t):t==null?"n/a":Array.isArray(t)?t.map(e=>this._formatPointValue(e)).join(", "):String(t)}async _loadCollections(){this._state.collectionsLoading=!0,this._state.error=null,this._emit("statechange"),this._renderContent();try{const t=await this._stacClient.getCollections();return this._options.defaultCollections.length>0?this._state.collections=t.filter(e=>this._options.defaultCollections.includes(e.id)):this._state.collections=t,this._state.collections.sort((e,s)=>(e.title||e.id).localeCompare(s.title||s.id)),this._emit("collections:load"),this._state.collections}catch(t){const e=t instanceof Error?t.message:"Failed to load collections";throw this._state.error=e,this._emit("error"),t}finally{this._state.collectionsLoading=!1,this._emit("statechange"),this._renderContent()}}_updatePanelVisibility(){this._panel&&(this._state.collapsed?this._panel.classList.remove("expanded"):(this._panel.classList.add("expanded"),this._updatePanelPosition()))}_setupEventListeners(){var t;this._clickOutsideHandler=e=>{if(this._ignoreNextDocumentClick){this._ignoreNextDocumentClick=!1;return}if(this._state.bboxSelectorActive||this._inspectorLayerId)return;const s=e.target;this._container&&this._panel&&!this._container.contains(s)&&!this._panel.contains(s)&&this.collapse()},document.addEventListener("click",this._clickOutsideHandler),this._resizeHandler=()=>{this._state.collapsed||this._updatePanelPosition()},window.addEventListener("resize",this._resizeHandler),this._mapResizeHandler=()=>{this._state.collapsed||this._updatePanelPosition()},(t=this._map)==null||t.on("resize",this._mapResizeHandler)}_getControlPosition(){var t;const e=(t=this._container)==null?void 0:t.parentElement;return e?e.classList.contains("maplibregl-ctrl-top-left")?"top-left":e.classList.contains("maplibregl-ctrl-top-right")?"top-right":e.classList.contains("maplibregl-ctrl-bottom-left")?"bottom-left":e.classList.contains("maplibregl-ctrl-bottom-right")?"bottom-right":"top-right":"top-right"}_updatePanelPosition(){if(!this._container||!this._panel||!this._mapContainer)return;const t=this._container.querySelector(".pc-control-toggle");if(!t)return;const e=t.getBoundingClientRect(),s=this._mapContainer.getBoundingClientRect(),i=this._getControlPosition(),n=e.top-s.top,a=s.bottom-e.bottom,o=e.left-s.left,r=s.right-e.right,l=5;this._panel.style.top="",this._panel.style.bottom="",this._panel.style.left="",this._panel.style.right="";const p=e.height+l,c=(i==="top-left"||i==="top-right"?n:a)+p;switch(i){case"top-left":this._panel.style.top=`${n+p}px`,this._panel.style.left=`${o}px`;break;case"top-right":this._panel.style.top=`${n+p}px`,this._panel.style.right=`${r}px`;break;case"bottom-left":this._panel.style.bottom=`${a+p}px`,this._panel.style.left=`${o}px`;break;case"bottom-right":this._panel.style.bottom=`${a+p}px`,this._panel.style.right=`${r}px`}const h=Math.max(O,s.height-c-T),m=this._options.maxHeight>0?Math.min(this._options.maxHeight,h):h;this._panel.style.maxHeight=`${m}px`;const b=parseFloat(this._panel.style.height);!Number.isNaN(b)&&b>m&&(this._panel.style.height=`${m}px`)}getPanelElement(){return this._panel??null}};export{j as a,Y as c,z as d,U as f,W as i,q as l,Z as m,ut as n,V as o,N as p,G as r,A as s,K as t,D as u};
