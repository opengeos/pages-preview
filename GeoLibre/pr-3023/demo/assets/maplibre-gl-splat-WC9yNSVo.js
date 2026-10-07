import{A as N,_t as v,n as P}from"./three.core-CelXRk3H.js";import{t as A}from"./GLTFLoader-DyONlBZG.js";import{n as I,r as G,t as $}from"./spark.module-D02FegDk.js";var F=Object.defineProperty,B=(t,e,s)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e,s)=>B(t,typeof e!="symbol"?e+"":e,s),D={position:"top-right",className:"",collapsed:!0,title:"Gaussian Splats",panelWidth:320,maxHeight:500,defaultUrl:"",sampleData:[],sampleDataLabel:"Load sample data...",loadDefaultUrl:!1,defaultOpacity:1,defaultRotation:[-90,90,0],defaultModelRotation:[90,0,0],defaultScale:1,defaultLongitude:0,defaultLatitude:0,defaultAltitude:0,flyTo:!0,flyToZoom:18},H=260,k=180,C=12,O=`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <circle cx="12" cy="12" r="7" stroke-dasharray="4 2"/>
  <circle cx="12" cy="12" r="10" stroke-dasharray="2 3"/>
</svg>`,W=class{constructor(t){u(this,"_map"),u(this,"_container"),u(this,"_panel"),u(this,"_loadButton"),u(this,"_options"),u(this,"_state"),u(this,"_eventHandlers",new Map),u(this,"_userPanelSize",null),u(this,"_resizeHandler"),u(this,"_mapResizeHandler"),u(this,"_mapScene"),u(this,"_splatLayers",new Map),u(this,"_modelLayers",new Map),u(this,"_layerCounter",0),u(this,"_modelCounter",0),u(this,"_gltfLoader"),u(this,"_idleHandler"),this._options={...D,...t},this._state={collapsed:this._options.collapsed,url:this._options.defaultUrl,loading:!1,error:null,status:null,hasLayer:!1,layerCount:0,opacity:this._options.defaultOpacity,rotation:this._options.defaultRotation,scale:this._options.defaultScale,longitude:this._options.defaultLongitude,latitude:this._options.defaultLatitude,altitude:this._options.defaultAltitude}}onAdd(t){return this._map=t,this._container=this._createContainer(),this._render(),this._initMapScene(),this._resizeHandler=()=>{this._state.collapsed||this._updatePanelSize()},window.addEventListener("resize",this._resizeHandler),this._mapResizeHandler=()=>{this._state.collapsed||this._updatePanelSize()},t.on("resize",this._mapResizeHandler),this._options.loadDefaultUrl&&this._options.defaultUrl&&(this._idleHandler=()=>{this._map&&this._mapScene&&this.load(this._options.defaultUrl)},t.once("idle",this._idleHandler)),this._container}onRemove(){var t,e;this._idleHandler&&this._map&&(this._map.off("idle",this._idleHandler),this._idleHandler=void 0),this._resizeHandler&&(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=void 0),this._mapResizeHandler&&this._map&&(this._map.off("resize",this._mapResizeHandler),this._mapResizeHandler=void 0),this._removeAllLayers(),this._mapScene=void 0,this._map=void 0,(e=(t=this._container)==null?void 0:t.parentNode)==null||e.removeChild(this._container),this._container=void 0,this._panel=void 0}getDefaultPosition(){return this._options.position}expand(){this._state.collapsed&&(this._state.collapsed=!1,this._render(),this._emit("expand",{}))}collapse(){this._state.collapsed||(this._state.collapsed=!0,this._render(),this._emit("collapse",{}))}toggle(){this._state.collapsed?this.expand():this.collapse()}getState(){return{...this._state}}update(t){this._options={...this._options,...t},t.collapsed!==void 0&&(this._state.collapsed=t.collapsed),this._render()}on(t,e){this._eventHandlers.has(t)||this._eventHandlers.set(t,new Set),this._eventHandlers.get(t).add(e)}off(t,e){var s;(s=this._eventHandlers.get(t))==null||s.delete(e)}async load(t,e){const s=this._getFileExtension(t);if(s==="gltf"||s==="glb"){const i={...e};return i.rotation||(i.rotation=this._options.defaultModelRotation),this.loadModel(t,i)}return this.loadSplat(t,e)}_getFileExtension(t){var e;return((e=new URL(t,"http://dummy").pathname.split(".").pop())==null?void 0:e.toLowerCase())||""}async loadSplat(t,e){var s;if(!this._map||!this._mapScene)throw new Error("Map not initialized");const i=e?.longitude??(this._state.longitude||this._map.getCenter().lng),a=e?.latitude??(this._state.latitude||this._map.getCenter().lat),o=e?.altitude??(this._state.altitude||0),n=e?.rotation??this._state.rotation,l=e?.scale??this._state.scale;this._state.url=t,this._state.loading=!0,this._state.error=null,this._state.status="Loading splat...",this._state.longitude=i,this._state.latitude=a,this._state.altitude=o,this._render();try{const r=I.createMercatorRTCGroup([i,a,o],[v.degToRad(n[0]),v.degToRad(n[1]),v.degToRad(n[2])],l),d=new $({url:t});(s=d.scale)!=null&&s.setScalar&&d.scale.setScalar(l),r.add(d),this._mapScene.addObject(r);const _=`splat-${this._layerCounter++}`;return this._splatLayers.set(_,{id:_,url:t,mesh:d,rtcGroup:r,longitude:i,latitude:a,altitude:o}),this._options.flyTo&&this._map.flyTo({center:[i,a],zoom:this._options.flyToZoom,pitch:60,duration:1500}),this._state.hasLayer=!0,this._state.layerCount=this._splatLayers.size+this._modelLayers.size,this._state.loading=!1,this._state.status=`Loaded: ${this._getFilename(t)}`,this._render(),this._emit("splatload",{url:t,splatId:_}),_}catch(r){throw this._state.loading=!1,this._state.error=`Failed to load: ${r instanceof Error?r.message:String(r)}`,this._render(),this._emit("error",{error:this._state.error}),r}}async loadModel(t,e){if(!this._map||!this._mapScene)throw new Error("Map not initialized");const s=e?.longitude??(this._state.longitude||this._map.getCenter().lng),i=e?.latitude??(this._state.latitude||this._map.getCenter().lat),a=e?.altitude??(this._state.altitude||0),o=e?.rotation??this._options.defaultModelRotation,n=e?.scale??this._state.scale;this._state.url=t,this._state.loading=!0,this._state.error=null,this._state.status="Loading model...",this._state.longitude=s,this._state.latitude=i,this._state.altitude=a,this._render();try{this._gltfLoader||(this._gltfLoader=new A);const l=I.createMercatorRTCGroup([s,i,a],[v.degToRad(o[0]),v.degToRad(o[1]),v.degToRad(o[2])],n),r=(await this._gltfLoader.loadAsync(t)).scene;r.scale.set(n,-n,n),l.add(r),this._mapScene.addObject(l);const d=`model-${this._modelCounter++}`;return this._modelLayers.set(d,{id:d,url:t,scene:r,rtcGroup:l,longitude:s,latitude:i,altitude:a}),this._options.flyTo&&this._map.flyTo({center:[s,i],zoom:this._options.flyToZoom,pitch:60,duration:1500}),this._state.hasLayer=!0,this._state.layerCount=this._splatLayers.size+this._modelLayers.size,this._state.loading=!1,this._state.status=`Loaded: ${this._getFilename(t)}`,this._render(),this._emit("modelload",{url:t,modelId:d}),d}catch(l){throw this._state.loading=!1,this._state.error=`Failed to load: ${l instanceof Error?l.message:String(l)}`,this._render(),this._emit("error",{error:this._state.error}),l}}removeModel(t){const e=this._modelLayers.get(t);!e||!this._mapScene||(this._mapScene.removeObject(e.rtcGroup),this._modelLayers.delete(t),this._state.hasLayer=this._splatLayers.size>0||this._modelLayers.size>0,this._state.layerCount=this._splatLayers.size+this._modelLayers.size,this._state.status=null,this._render(),this._emit("modelremove",{modelId:t}))}removeAllModels(){for(const t of this._modelLayers.keys())this.removeModel(t)}removeSplat(t){const e=this._splatLayers.get(t);!e||!this._mapScene||(this._mapScene.removeObject(e.rtcGroup),this._splatLayers.delete(t),this._state.hasLayer=this._splatLayers.size>0||this._modelLayers.size>0,this._state.layerCount=this._splatLayers.size+this._modelLayers.size,this._state.status=null,this._render(),this._emit("splatremove",{splatId:t}))}removeAllSplats(){this._removeAllLayers()}getSplatIds(){return Array.from(this._splatLayers.keys())}getSplatInfo(t){const e=this._splatLayers.get(t);return e?{url:e.url,longitude:e.longitude,latitude:e.latitude,altitude:e.altitude}:null}_removeAllLayers(){for(const[t]of this._splatLayers)this.removeSplat(t);for(const[t]of this._modelLayers)this.removeModel(t)}_emit(t,e){const s=this._eventHandlers.get(t);if(!s)return;const i={type:t,state:this._state,...e};for(const a of s)a(i)}_initMapScene(){if(!this._map)return;const t=new G(this._map);this._mapScene=t,t.addLight(new P(16777215,1)),t.addLight(new N(16777215,.5)),t.on("postRender",()=>{var e;(e=this._map)==null||e.triggerRepaint()})}_createContainer(){const t=document.createElement("div");return t.className=`maplibregl-ctrl maplibregl-ctrl-group maplibre-gl-splat ${this._options.className||""}`,t}_render(){this._container&&(this._container.innerHTML="",this._state.collapsed?this._renderCollapsed():this._renderExpanded())}_renderCollapsed(){if(!this._container)return;const t=document.createElement("button");t.className=`maplibre-gl-splat-button${this._state.hasLayer?" active":""}`,t.innerHTML=O,t.title=this._options.title,t.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 29px;
      height: 29px;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      color: ${this._state.hasLayer?"#0078d7":"#333"};
    `,t.addEventListener("click",()=>this.expand()),this._container.appendChild(t)}_renderExpanded(){if(!this._container)return;const t=document.createElement("div");t.className="maplibre-gl-splat-panel",t.style.cssText=`
      box-sizing: border-box;
      padding: 12px;
      position: relative;
      width: ${this._options.panelWidth}px;
      display: flex;
      flex-direction: column;
      font-size: 13px;
      color: #333;
    `;const e=document.createElement("div");e.style.cssText=`
      flex: 0 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e0e0e0;
    `;const s=document.createElement("span");s.textContent=this._options.title,s.style.cssText="font-weight: 600; font-size: 14px;",e.appendChild(s);const i=document.createElement("button");i.innerHTML="×",i.style.cssText=`
      background: transparent;
      border: none;
      font-size: 20px;
      color: #666;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
    `,i.addEventListener("click",()=>this.collapse()),e.appendChild(i),t.appendChild(e);const a=document.createElement("div");a.className="maplibre-gl-splat-content",a.style.cssText="flex: 1 1 auto; overflow-y: auto; overflow-x: hidden; min-height: 0;";const o=this._createFormGroup("3D Asset URL (.splat, .ply, .spz, .gltf, .glb)"),n=document.createElement("input");n.type="text",n.placeholder="https://example.com/model.gltf",n.value=this._state.url,n.style.cssText=`
      width: 100%;
      padding: 8px 10px;
      font-size: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    `,n.addEventListener("input",()=>{this._state.url=n.value,this._syncLoadButton()}),o.appendChild(n);const l=this._createSampleDropdown(p=>{n.value=p,this._state.url=p,this._syncLoadButton()});l&&a.appendChild(l),a.appendChild(o);const r=this._createFormGroup("Location (Longitude, Latitude, Altitude)"),d=document.createElement("div");d.style.cssText="display: flex; gap: 8px;";const _=this._createNumberInput("Lng",this._state.longitude,p=>{this._state.longitude=p}),c=this._createNumberInput("Lat",this._state.latitude,p=>{this._state.latitude=p}),h=this._createNumberInput("Alt",this._state.altitude,p=>{this._state.altitude=p});d.appendChild(_),d.appendChild(c),d.appendChild(h),r.appendChild(d),a.appendChild(r);const x=this._createFormGroup("Rotation (°)"),f=document.createElement("div");f.style.cssText="display: flex; gap: 6px;";const S=this._createSmallInput("X",String(this._state.rotation[0]),p=>{this._state.rotation[0]=Number(p)||0}),E=this._createSmallInput("Y",String(this._state.rotation[1]),p=>{this._state.rotation[1]=Number(p)||0}),T=this._createSmallInput("Z",String(this._state.rotation[2]),p=>{this._state.rotation[2]=Number(p)||0});f.appendChild(S),f.appendChild(E),f.appendChild(T),x.appendChild(f),a.appendChild(x);const L=this._createFormGroup("Scale"),g=document.createElement("input");g.type="number",g.step="0.1",g.value=String(this._state.scale),g.style.cssText=`
      width: 100%;
      padding: 8px 10px;
      font-size: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    `,g.addEventListener("input",()=>{this._state.scale=Number(g.value)||1}),L.appendChild(g),a.appendChild(L);const m=document.createElement("button");m.textContent="Load 3D Asset",m.disabled=this._state.loading||!this._state.url,m.style.cssText=`
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 16px;
      font: inherit;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      border: none;
      border-radius: 4px;
      background: #0078d7;
      color: white;
      cursor: pointer;
      margin-top: 12px;
      opacity: ${this._state.loading||!this._state.url?"0.5":"1"};
    `,this._loadButton=m,m.addEventListener("click",()=>{this._state.url&&this.load(this._state.url,{longitude:this._state.longitude,latitude:this._state.latitude,altitude:this._state.altitude,rotation:this._state.rotation,scale:this._state.scale})}),a.appendChild(m),this._state.loading?a.appendChild(this._createStatus("Loading...","info")):this._state.error?a.appendChild(this._createStatus(this._state.error,"error")):this._state.status&&a.appendChild(this._createStatus(this._state.status,"success"));const z=this._splatLayers.size+this._modelLayers.size;if(z>0){const p=document.createElement("div");p.style.cssText=`
        margin-top: 16px;
        border-top: 1px solid #e0e0e0;
        padding-top: 12px;
      `;const b=document.createElement("div");b.textContent=`Layers (${z})`,b.style.cssText="font-size: 12px; font-weight: 500; color: #555; margin-bottom: 8px;",p.appendChild(b);for(const[y,M]of this._splatLayers){const R=this._createLayerItem(this._getFilename(M.url),"splat",()=>{this.removeSplat(y)});p.appendChild(R)}for(const[y,M]of this._modelLayers){const R=this._createLayerItem(this._getFilename(M.url),"model",()=>{this.removeModel(y)});p.appendChild(R)}a.appendChild(p)}t.appendChild(a),this._addResizeHandles(t),this._container.appendChild(t),this._panel=t,this._updatePanelSize()}_getControlPosition(){var t;const e=(t=this._container)==null?void 0:t.parentElement;return e?.classList.contains("maplibregl-ctrl-top-left")?"top-left":e?.classList.contains("maplibregl-ctrl-bottom-left")?"bottom-left":e?.classList.contains("maplibregl-ctrl-bottom-right")?"bottom-right":"top-right"}_getMapContainer(){var t;if(typeof((t=this._map)==null?void 0:t.getContainer)=="function")return this._map.getContainer()}_syncLoadButton(){if(!this._loadButton)return;const t=this._state.loading||!this._state.url;this._loadButton.disabled=t,this._loadButton.style.opacity=t?"0.5":"1"}_updatePanelSize(){if(!this._panel)return;const t=this._getMapContainer();if(!t)return;const e=t.getBoundingClientRect(),s=this._panel.getBoundingClientRect(),i=this._getControlPosition().startsWith("bottom")?e.bottom-s.bottom:s.top-e.top,a=Math.max(160,e.height-i-C);this._panel.style.maxHeight=`min(720px, ${a}px)`,this._applyUserPanelSize()}_applyUserPanelSize(){if(!this._panel||!this._userPanelSize)return;const t=this._getMapContainer();if(!t)return;const e=t.getBoundingClientRect(),s=this._panel.getBoundingClientRect(),i=this._getControlPosition(),a=i.endsWith("right"),o=i.startsWith("bottom"),n=(a?s.right-e.left:e.right-s.left)-C,l=(o?s.bottom-e.top:e.bottom-s.top)-C,r=Math.min(Math.max(H,this._userPanelSize.width),Math.max(0,n)),d=Math.min(Math.max(k,this._userPanelSize.height),Math.max(0,l));this._panel.style.maxHeight="none",this._panel.style.width=`${r}px`,this._panel.style.height=`${d}px`}_addResizeHandles(t){for(const e of["left","right"]){const s=document.createElement("div");s.className=`maplibre-gl-splat-resize-handle maplibre-gl-splat-resize-${e}`,s.setAttribute("aria-hidden","true"),s.style.cssText=`
        position: absolute;
        bottom: 0;
        ${e}: 0;
        width: 14px;
        height: 14px;
        z-index: 5;
        cursor: ${e==="right"?"nwse":"nesw"}-resize;
        touch-action: none;
        opacity: 0.55;
        background-image: repeating-linear-gradient(
          ${e==="right"?"135deg":"45deg"},
          rgba(128, 128, 128, 0.9) 0 1px,
          transparent 1px 3px
        );
        background-size: 8px 8px;
        background-repeat: no-repeat;
        background-position: bottom ${e};
      `,s.addEventListener("pointerdown",i=>this._beginResize(i,t,s)),t.appendChild(s)}}_beginResize(t,e,s){var i;const a=this._getMapContainer();if(!a)return;t.preventDefault(),t.stopPropagation();const o=a.getBoundingClientRect(),n=e.getBoundingClientRect(),l=n.left,r=n.right,d=n.top,_=n.bottom,c=this._getControlPosition(),h=c.endsWith("right"),x=c.startsWith("bottom"),f=Math.min(H,Math.max(120,o.width-24)),S=Math.min(k,Math.max(120,o.height-24)),E=Math.max(f,(h?r-o.left:o.right-l)-C),T=Math.max(S,(x?_-o.top:o.bottom-d)-C);e.style.boxSizing="border-box",e.style.maxWidth="none",e.style.maxHeight="none";const L=m=>{const z=h?r-m.clientX:m.clientX-l,p=x?_-m.clientY:m.clientY-d,b=Math.max(f,Math.min(z,E)),y=Math.max(S,Math.min(p,T));e.style.width=`${b}px`,e.style.height=`${y}px`,this._userPanelSize={width:b,height:y}},g=()=>{var m;try{(m=s.releasePointerCapture)==null||m.call(s,t.pointerId)}catch{}s.removeEventListener("pointermove",L),s.removeEventListener("pointerup",g),s.removeEventListener("pointercancel",g),this._updatePanelSize()};s.addEventListener("pointermove",L),s.addEventListener("pointerup",g),s.addEventListener("pointercancel",g);try{(i=s.setPointerCapture)==null||i.call(s,t.pointerId)}catch{}}_createFormGroup(t){const e=document.createElement("div");e.style.marginBottom="12px";const s=document.createElement("label");return s.textContent=t,s.style.cssText="display: block; font-size: 12px; font-weight: 500; color: #555; margin-bottom: 4px;",e.appendChild(s),e}_createSampleDropdown(t){const e=this._options.sampleData;if(e.length===0)return null;const s=this._options.sampleDataLabel,i=document.createElement("span");i.className="splat-sample-trigger-label",i.textContent=s,i.style.cssText=`
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;const a=document.createElement("span");a.className="splat-sample-caret",a.textContent="▾",a.style.cssText="flex: 0 0 auto; font-size: 10px;";const o=document.createElement("button");o.type="button",o.className="splat-sample-trigger",o.style.cssText=`
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 8px;
      font: inherit;
      font-weight: 400;
      text-align: left;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      background: #fff;
      color: #6b7280;
      cursor: pointer;
      outline: none;
    `,o.setAttribute("aria-haspopup","listbox"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label",s),o.appendChild(i),o.appendChild(a);const n=document.createElement("div");n.className="splat-sample-menu",n.setAttribute("role","listbox"),n.hidden=!0,n.style.cssText=`
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      right: 0;
      z-index: 10;
      box-sizing: border-box;
      padding: 4px;
      background: #fff;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
      max-height: 220px;
      overflow-y: auto;
    `;let l=!1;const r=c=>{var h;l=c,n.hidden=!c,o.setAttribute("aria-expanded",String(c)),o.classList.toggle("open",c),c&&((h=n.firstElementChild)==null||h.focus())};for(const c of e){const h=document.createElement("button");h.type="button",h.className="splat-sample-option",h.setAttribute("role","option"),h.textContent=c.label,h.style.cssText=`
        display: block;
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 6px 8px;
        font: inherit;
        font-weight: 400;
        text-align: left;
        border: none;
        border-radius: 3px;
        background: none;
        color: #111827;
        cursor: pointer;
      `,h.title=c.url,h.addEventListener("click",x=>{x.stopPropagation(),r(!1),o.focus(),t(c.url)}),n.appendChild(h)}o.addEventListener("click",c=>{c.stopPropagation(),r(!l)});const d=this._createFormGroup("Sample data"),_=document.createElement("div");return _.className="splat-sample-dropdown",_.style.cssText="position: relative;",_.appendChild(o),_.appendChild(n),d.appendChild(_),d.addEventListener("keydown",c=>{c.key==="Escape"&&l&&(r(!1),o.focus())}),d.addEventListener("focusout",c=>{const h=c.relatedTarget;(!h||!d.contains(h))&&r(!1)}),d}_createNumberInput(t,e,s){const i=document.createElement("input");return i.type="number",i.step="any",i.placeholder=t,i.value=String(e),i.style.cssText=`
      flex: 1;
      padding: 6px 8px;
      font-size: 11px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      min-width: 0;
    `,i.addEventListener("input",()=>{s(Number(i.value)||0)}),i}_createSmallInput(t,e,s){const i=document.createElement("div");i.style.cssText="flex: 1; display: flex; flex-direction: column; gap: 2px;";const a=document.createElement("span");a.textContent=t,a.style.cssText="font-size: 9px; color: #888; text-align: center;";const o=document.createElement("input");return o.type="number",o.step="1",o.value=e,o.style.cssText=`
      width: 100%;
      padding: 4px 6px;
      font-size: 11px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      text-align: center;
    `,o.addEventListener("input",()=>{s(o.value)}),i.appendChild(a),i.appendChild(o),i}_createStatus(t,e){const s=document.createElement("div"),i={info:{bg:"#e3f2fd",color:"#1565c0"},error:{bg:"#ffebee",color:"#c62828"},success:{bg:"#e8f5e9",color:"#2e7d32"}};return s.textContent=t,s.style.cssText=`
      margin-top: 12px;
      padding: 8px 10px;
      font-size: 11px;
      border-radius: 4px;
      background: ${i[e].bg};
      color: ${i[e].color};
    `,s}_createLayerItem(t,e,s){const i=document.createElement("div");i.style.cssText=`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 8px;
      background: #f8f8f8;
      border-radius: 4px;
      margin-bottom: 4px;
      font-size: 11px;
    `;const a=document.createElement("span");a.textContent=(e==="model"?"📦 ":"✨ ")+t,a.style.cssText="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",i.appendChild(a);const o=document.createElement("button");return o.innerHTML="×",o.title="Remove",o.style.cssText=`
      border: none;
      background: transparent;
      cursor: pointer;
      color: #999;
      font-size: 14px;
      padding: 0 4px;
    `,o.addEventListener("click",s),i.appendChild(o),i}_getFilename(t){try{return new URL(t).pathname.split("/").pop()||t}catch{return t.split("/").pop()||t}}},U=Object.defineProperty,j=(t,e,s)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,w=(t,e,s)=>j(t,typeof e!="symbol"?e+"":e,s),Y=class{constructor(t){w(this,"type","gaussian-splat"),w(this,"_control"),w(this,"_changeCallbacks",[]),w(this,"_visibilityState",new Map),w(this,"_unsubscribe"),this._control=t,this._setupEventListeners()}_setupEventListeners(){const t=a=>{a.splatId&&(this._visibilityState.set(a.splatId,!0),this._changeCallbacks.forEach(o=>o("add",a.splatId)))},e=a=>{a.splatId&&(this._visibilityState.delete(a.splatId),this._changeCallbacks.forEach(o=>o("remove",a.splatId)))},s=a=>{a.modelId&&(this._visibilityState.set(a.modelId,!0),this._changeCallbacks.forEach(o=>o("add",a.modelId)))},i=a=>{a.modelId&&(this._visibilityState.delete(a.modelId),this._changeCallbacks.forEach(o=>o("remove",a.modelId)))};this._control.on("splatload",t),this._control.on("splatremove",e),this._control.on("modelload",s),this._control.on("modelremove",i),this._unsubscribe=()=>{this._control.off("splatload",t),this._control.off("splatremove",e),this._control.off("modelload",s),this._control.off("modelremove",i)}}getLayerIds(){var t;const e=this._control.getSplatIds(),s=Array.from(((t=this._control._modelLayers)==null?void 0:t.keys())??[]);return[...e,...s]}getLayerState(t){return this.getLayerIds().includes(t)?{visible:this._visibilityState.get(t)??!0,opacity:this._control.getState().opacity,name:this.getName(t),isCustomLayer:!0,customLayerType:"gaussian-splat"}:null}setVisibility(t,e){var s,i;this._visibilityState.set(t,e);const a=this._control,o=(s=a._splatLayers)==null?void 0:s.get(t);if(o?.rtcGroup){o.rtcGroup.visible=e;return}const n=(i=a._modelLayers)==null?void 0:i.get(t);n?.rtcGroup&&(n.rtcGroup.visible=e)}setOpacity(t,e){var s,i,a;const o=this._control,n=(s=o._splatLayers)==null?void 0:s.get(t);if((i=n?.mesh)!=null&&i.material){n.mesh.material.opacity=e,n.mesh.material.transparent=e<1;return}const l=(a=o._modelLayers)==null?void 0:a.get(t);l?.scene&&l.scene.traverse(r=>{r.material&&(r.material.opacity=e,r.material.transparent=e<1)})}getName(t){var e;const s=this._control.getSplatInfo(t);if(s)return this._getFilename(s.url);const i=(e=this._control._modelLayers)==null?void 0:e.get(t);return i?.url?this._getFilename(i.url):t}getSymbolType(t){return"raster"}removeLayer(t){t.startsWith("splat-")?this._control.removeSplat(t):t.startsWith("model-")&&this._control.removeModel(t)}onLayerChange(t){return this._changeCallbacks.push(t),()=>{const e=this._changeCallbacks.indexOf(t);e>=0&&this._changeCallbacks.splice(e,1)}}destroy(){var t;(t=this._unsubscribe)==null||t.call(this),this._changeCallbacks=[],this._visibilityState.clear()}_getFilename(t){try{return new URL(t).pathname.split("/").pop()||t}catch{return t.split("/").pop()||t}}};export{W as n,Y as t};
