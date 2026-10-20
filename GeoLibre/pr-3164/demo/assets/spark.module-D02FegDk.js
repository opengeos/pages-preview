import{A as Sa,At as be,B as ce,C as Un,F as va,Ft as Jt,G as Da,H as _a,Hn as Se,I as ve,It as At,K as Ma,N as ka,On as Ta,Ot as Ht,Pt as at,Qn as Ra,Rt as Fa,S as Na,Un as Ga,Ut as Z,V as Ua,Vn as Ya,Xt as $n,Zt as ne,_r as gn,bt as N,c as Pt,dr as Yn,f as Vt,ft as La,gr as Q,hr as mn,j as za,kn as De,l as st,m as qa,nr as Ja,o as _e,or as Kt,p as yn,sr as ge,st as Ha,vt as jt,w as Pa,xr as rt,xt as ee,y as Va,yr as Ot,yt as Xt,z as Wt,zn as Zt}from"./three.core-CelXRk3H.js";import{i as Ka,n as ja,r as Oa,t as Xa}from"./three.module-CxwNcBfR.js";var Wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},he=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Za=new Jt(-1,1,1,-1,0,1),$a=class extends st{constructor(){super(),this.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ve([0,2,0,0,2,0],2))}},ns=new $a,$t=class{constructor(e){this._mesh=new ee(ns,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Za)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},es=class extends he{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Se?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kt.clone(e.uniforms),this.material=new Se({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $t(this.material)}render(e,n,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},nA=class extends he{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,t){const A=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,r;this.inverse?(s=0,r=1):(s=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(A.REPLACE,A.REPLACE,A.REPLACE),a.buffers.stencil.setFunc(A.ALWAYS,s,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(A.EQUAL,1,4294967295),a.buffers.stencil.setOp(A.KEEP,A.KEEP,A.KEEP),a.buffers.stencil.setLocked(!0)}},ts=class extends he{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},As=class{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const t=e.getSize(new mn);this._width=t.width,this._height=t.height,n=new rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ua}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new es(Wa),this.copyPass.material.blending=0,this.timer=new Ja}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let t=!1;for(let A=0,a=this.passes.length;A<a;A++){const s=this.passes[A];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(A),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,t),s.needsSwap){if(t){const r=this.renderer.getContext(),i=this.renderer.state.buffers.stencil;i.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),i.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}nA!==void 0&&(s instanceof nA?t=!0:s instanceof ts&&(t=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new mn);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const t=this._width*this._pixelRatio,A=this._height*this._pixelRatio;this.renderTarget1.setSize(t,A),this.renderTarget2.setSize(t,A);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(t,A)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},as=class extends he{constructor(e,n,t=null,A=null,a=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=t,this.clearColor=A,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new yn}render(e,n,t){const A=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:t),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=A}},Me={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ss=class extends he{constructor(){super(),this.isOutputPass=!0,this.uniforms=Kt.clone(Me.uniforms),this.material=new De({name:Me.name,uniforms:this.uniforms,vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader}),this._fsQuad=new $t(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,t){this.uniforms.tDiffuse.value=t.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qa.getTransfer(this._outputColorSpace)==="srgb"&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},rs=class{_id;_mapScene;constructor(e,n){this._id=e,this._mapScene=n}get id(){return this._id}get type(){return"custom"}get renderingMode(){return"3d"}onAdd(){this._mapScene.cameraSync.syncCamera()}render(){this._mapScene.render()}onRemove(){this._mapScene=null}},is=rs,Ln=63710088e-1,ue=2*Math.PI*Ln,H=Math.PI/180,te=1024e3/ue,os=512,ls=class{static clamp(e,n,t){return Math.min(t,Math.max(n,e))}static makePerspectiveMatrix(e,n,t,A){let a=1/Math.tan(e/2),s=1/(t-A);return[a/n,0,0,0,0,a,0,0,0,0,(A+t)*s,-1,0,0,2*A*t*s,0]}static mercatorXFromLng(e){return(180+e)/360}static mercatorYFromLat(e){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))/360}static getViewInfo(e,n,t){let A=e.fov*H,a=e.pitch*H,s=null;if(Array.isArray(n)&&(s={lng:n[0],lat:n[1],alt:n[2]||0}),typeof n=="string"){let g=n.split(",");s={lng:+g[0],lat:+g[1],alt:+g[2]||0}}let r=Math.max(t.x,t.y,t.z)/(2*Math.tan(A/2))*Math.cos(a)+s.alt,i=Math.abs(Math.cos(a)*e.cameraToCenterDistance),o=ue*Math.abs(Math.cos(s.lat*H)),c=i/r*o,l=Math.round(Math.log2(c/e.tileSize));return{center:[s.lng,s.lat],cameraHeight:r,zoom:Math.min(l,e.maxZoom)}}static getHeightByZoom(e,n,t,A){let a=Math.abs(Math.cos(A*H)*e.cameraToCenterDistance),s=ue*Math.abs(Math.cos(t*H)),r=Math.pow(2,n)*e.tileSize;return a*s/r}static getZoomByHeight(e,n,t,A){let a=Math.abs(Math.cos(A*H)*e.cameraToCenterDistance),s=ue*Math.abs(Math.cos(t*H)),r=a/n*s;return Math.round(Math.log2(r/e.tileSize))}},zn=ls,cs=class{static projectedMercatorUnitsPerMeter(){return this.projectedUnitsPerMeter(0)}static projectedUnitsPerMeter(e){return Math.abs(1024e3/Math.cos(H*e)/ue)}static lngLatToVector3(e,n,t){let A=[0,0,0];return Array.isArray(e)?(A=[-Ln*H*e[0]*te,-Ln*Math.log(Math.tan(Math.PI*.25+.5*H*e[1]))*te],e[2]?A.push(e[2]*this.projectedUnitsPerMeter(e[1])):A.push(0)):(A=[-Ln*H*e*te,-Ln*Math.log(Math.tan(Math.PI*.25+.5*H*(n||0)))*te],t?A.push(t*this.projectedUnitsPerMeter(n||0)):A.push(0)),new Q(A[0],A[1],A[2])}static vector3ToLngLat(e){let n=[0,0,0];return e&&(n[0]=-e.x/(Ln*H*te),n[1]=2*(Math.atan(Math.exp(e.y/(te*-Ln)))-Math.PI/4)/H,n[2]=e.z/this.projectedUnitsPerMeter(n[1])),n}},Fn=cs,eA=new N,tA=new N,AA=85.051129,gs=class{_map;_world;_camera;_translateCenter;_worldSizeRatio;constructor(e,n,t){this._map=e,this._world=n,this._camera=t,this._translateCenter=new N().makeTranslation(512e3,-512e3,0),this._worldSizeRatio=os/1024e3,this._map.on("move",this.syncCamera.bind(this)),this._map.on("resize",this.syncCamera.bind(this))}syncCamera(){let e=this._map.painter.transform,n=e.pitch*H,t=e.bearing*H,A=e.fov*H,a=e.centerOffset||new Q;this._camera.aspect=e.width/e.height,eA.elements=zn.makePerspectiveMatrix(A,this._camera.aspect,e.height/50,e.farZ),this._camera.projectionMatrix=eA,this._camera.projectionMatrix.elements[8]=-a.x*2/e.width,this._camera.projectionMatrix.elements[9]=a.y*2/e.height,tA.makeTranslation(0,0,e.cameraToCenterDistance);let s=new N().premultiply(tA).premultiply(new N().makeRotationX(n)).premultiply(new N().makeRotationZ(-t));e.elevation&&(s.elements[14]=e.cameraToCenterDistance*Math.cos(n)),this._camera.matrixWorld.copy(s);let r=e.scale*this._worldSizeRatio,i=new N().makeScale(r,r,r),o=e.x,c=e.y;if(!o||!c){let h=e.center,f=zn.clamp(h.lat,-AA,AA);o=zn.mercatorXFromLng(h.lng)*e.worldSize,c=zn.mercatorYFromLat(f)*e.worldSize}let l=new N().makeTranslation(-o,c,0),g=new N().makeRotationZ(Math.PI);this._world.matrix=new N().premultiply(g).premultiply(this._translateCenter).premultiply(i).premultiply(l)}dispose(){this._map&&(this._map.off("move",this.syncCamera.bind(this)),this._map.off("resize",this.syncCamera.bind(this)))}},hs=gs,us={scene:null,camera:null,renderer:null,preserveDrawingBuffer:!1,renderLoop:null,enablePostProcessing:!1,updateProjectionOnMove:!1},it="map_scene_layer",Is=class{_map;_options;_canvas;_scene;_camera;_renderer;_lights;_world;_composer;_renderPass;_outputPass;_cameraSync;_event;constructor(e,n={}){if(!e)throw"missing  map";this._map=e,this._options={...us,...n},this._canvas=e.getCanvas(),this._scene=this._options.scene||new Ya,this._camera=this._options.camera||new At(this._map.painter.transform.fov,this._map.painter.transform.width/this._map.painter.transform.height,.001,1e21),this._camera.matrixAutoUpdate=!1,this._renderer=this._options.renderer||new Ka({alpha:!0,antialias:!0,preserveDrawingBuffer:this._options.preserveDrawingBuffer,canvas:this._canvas,context:this._canvas.getContext("webgl2")}),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setSize(this._canvas.clientWidth,this._canvas.clientHeight),this._renderer.autoClear=!1,this._lights=new ce,this._lights.name="lights",this._scene.add(this._lights),this._world=new ce,this._world.name="world",this._world.userData={isWorld:!0,name:"world"},this._world.position.set(512e3,512e3,0),this._world.matrixAutoUpdate=!1,this._scene.add(this._world),this._options.enablePostProcessing&&(this._composer=new As(this._renderer),this._composer.setSize(this._canvas.clientWidth,this._canvas.clientHeight),this._composer.renderTarget1.depthBuffer=!0,this._composer.renderTarget2.depthBuffer=!0,this._renderPass=new as(this._scene,this._camera),this._renderer.setClearColor(0,0),this._composer.addPass(this._renderPass),this._outputPass=new ss,this._outputPass.renderToScreen=!0,this._outputPass.material.transparent=!0,this._outputPass.material.blending=1,this._outputPass.clear=!1,this._composer.addPass(this._outputPass)),this._cameraSync=new hs(this._map,this._world,this._camera),this._map.on("render",this._onMapRender.bind(this)),this._map.on("resize",this._onResize.bind(this)),this._event=new ka}get map(){return this._map}get canvas(){return this._canvas}get camera(){return this._camera}get scene(){return this._scene}get lights(){return this._lights}get world(){return this._world}get renderer(){return this._renderer}get cameraSync(){return this._cameraSync}get composer(){return this._composer}get renderPass(){return this._renderPass}get outputPass(){return this._outputPass}_onMapRender(){this._map.getLayer(it)||this._map.addLayer(new is(it,this))}_onResize(){let e=this._canvas.clientWidth,n=this._canvas.clientHeight;this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setSize(e,n,!1),this._composer&&this._composer.setSize(e,n)}render(){if(this._options.renderLoop)this._options.renderLoop(this);else{let e={center:this._map.getCenter(),scene:this._scene,camera:this._camera,renderer:this._renderer};this._event.dispatchEvent({type:"preReset",frameState:e}),this.renderer.resetState(),this._event.dispatchEvent({type:"postReset",frameState:e}),this._event.dispatchEvent({type:"preRender",frameState:e}),this._composer?this._composer.render():this._renderer.render(this._scene,this._camera),this._event.dispatchEvent({type:"postRender",frameState:e})}return this}addLight(e){return this._lights.add(e.delegate||e),this}removeLight(e){return this._lights.remove(e.delegate||e),this}addSceneObject(e){return this._scene.add(e),this}removeSceneObject(e){return this._scene.remove(e),this}addObject(e){let n="delegate"in e?e.delegate:e;return this._world.add(n),this}removeObject(e){let n="delegate"in e?e.delegate:e;return this._world.remove(n),n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(A=>A.dispose()):t.material.dispose()),t.texture&&t.texture.dispose()}),this}getViewPosition(){let e=this._map.painter.transform,n=e.center;return{position:[n.lng,n.lat,zn.getHeightByZoom(e,e.zoom,n.lat,e.pitch)],heading:e.bearing,pitch:e.pitch}}flyTo(e,n,t){if(e&&e.position){t&&this._map.once("moveend",t);let A=e.size;A||(A=new Q,new _e().setFromObject(e.delegate||e,!0).getSize(A));let a=zn.getViewInfo(this._map.painter.transform,Fn.vector3ToLngLat(e.position),A);this._map.flyTo({center:a.center,zoom:a.zoom,duration:(n||3)*1e3})}return this}zoomTo(e,n){return this.flyTo(e,0,n)}flyToPosition(e,n=[0,0,0],t,A=3){return t&&this._map.once("moveend",t),this._map.flyTo({center:[e[0],e[1]],zoom:zn.getZoomByHeight(this._map.painter.transform,e[2],e[1],n[1]||0),bearing:n[0],pitch:n[1],duration:A*1e3}),this}zoomToPosition(e,n=[0,0,0],t){return this.flyToPosition(e,n,t,0)}on(e,n){return this._event.addEventListener(e,n),this}off(e,n){return this._event.removeEventListener(e,n),this}layerBeforeTo(e){return this._map.moveLayer(it,e),this}addPass(e){if(!this._options.enablePostProcessing)return console.warn("[MapScene] PostProcessing is disabled."),this;if(!e||!this._composer)return this;if(this._composer.passes.includes(e))return this;let n=this._outputPass?this._composer.passes.indexOf(this._outputPass):-1;return n>=0?this._composer.insertPass(e,n):this._composer.addPass(e),this}removePass(e){return this._options.enablePostProcessing?!e||!this._composer?this:(this._composer.removePass(e),this):(console.warn("[MapScene] PostProcessing is disabled."),this)}},ke=Math.PI,v=Math.sin,T=Math.cos,ot=Math.tan,aA=Math.asin,Ie=Math.atan2,sA=Math.acos,L=ke/180,lt=864e5,rA=2440588,iA=2451545;function fs(e){return e.valueOf()/lt-.5+rA}function Te(e){return new Date((e+.5-rA)*lt)}function Re(e){return fs(e)-iA}var Fe=L*23.4397;function oA(e,n){return Ie(v(e)*T(Fe)-ot(n)*v(Fe),T(e))}function ct(e,n){return aA(v(n)*T(Fe)+T(n)*v(Fe)*v(e))}function lA(e,n,t){return Ie(v(e),T(e)*v(n)-ot(t)*T(n))}function cA(e,n,t){return aA(v(n)*v(t)+T(n)*T(t)*T(e))}function gA(e,n){return L*(280.16+360.9856235*e)-n}function ps(e){return e<0&&(e=0),2967e-7/Math.tan(e+.00312536/(e+.08901179))}function hA(e){return L*(357.5291+.98560028*e)}function uA(e){let n=L*(1.9148*v(e)+.02*v(2*e)+3e-4*v(3*e)),t=L*102.9372;return e+n+t+ke}function IA(e){let n=uA(hA(e));return{dec:ct(n,0),ra:oA(n,0)}}var hn={};hn.getPosition=function(e,n,t){let A=L*-t,a=L*n,s=Re(e),r=IA(s),i=gA(s,A)-r.ra;return{azimuth:lA(i,a,r.dec),altitude:cA(i,a,r.dec)}};var gt=hn.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];hn.addTime=function(e,n,t){gt.push([e,n,t])};var fA=9e-4;function ds(e,n){return Math.round(e-fA-n/(2*ke))}function pA(e,n,t){return fA+(e+n)/(2*ke)+t}function dA(e,n,t){return iA+e+.0053*v(n)-.0069*v(2*t)}function Cs(e,n,t){return sA((v(e)-v(n)*v(t))/(T(n)*T(t)))}function Bs(e){return-2.076*Math.sqrt(e)/60}function Es(e,n,t,A,a,s,r){return dA(pA(Cs(e,t,A),n,a),s,r)}hn.getTimes=function(e,n,t,A=0){let a=L*-t,s=L*n,r=Bs(A),i=ds(Re(e),a),o=pA(0,a,i),c=hA(o),l=uA(c),g=ct(l,0),h=dA(o,c,l),f,u,I,d,p,C,B={solarNoon:Te(h),nadir:Te(h-.5)};for(f=0,u=gt.length;f<u;f+=1)I=gt[f],d=(I[0]+r)*L,p=Es(d,a,s,g,i,c,l),C=h-(p-h),B[I[1]]=Te(C),B[I[2]]=Te(p);return B};function CA(e){let n=L*(218.316+13.176396*e),t=L*(134.963+13.064993*e),A=L*(93.272+13.22935*e),a=n+L*6.289*v(t),s=L*5.128*v(A),r=385001-20905*T(t);return{ra:oA(a,s),dec:ct(a,s),dist:r}}hn.getMoonPosition=function(e,n,t){let A=L*-t,a=L*n,s=Re(e),r=CA(s),i=gA(s,A)-r.ra,o=cA(i,a,r.dec),c=Ie(v(i),ot(a)*T(r.dec)-v(r.dec)*T(i));return o=o+ps(o),{azimuth:lA(i,a,r.dec),altitude:o,distance:r.dist,parallacticAngle:c}},hn.getMoonIllumination=function(e){let n=Re(e||new Date),t=IA(n),A=CA(n),a=149598e3,s=sA(v(t.dec)*v(A.dec)+T(t.dec)*T(A.dec)*T(t.ra-A.ra)),r=Ie(a*v(s),A.dist-a*T(s)),i=Ie(T(t.dec)*v(t.ra-A.ra),v(t.dec)*T(A.dec)-T(t.dec)*v(A.dec)*T(t.ra-A.ra));return{fraction:(1+T(r))/2,phase:.5+.5*r*(i<0?-1:1)/Math.PI,angle:i}};function Ne(e,n){return new Date(e.valueOf()+n*lt/24)}hn.getMoonTimes=function(e,n,t,A=!1){let a=new Date(e);A?a.setUTCHours(0,0,0,0):a.setHours(0,0,0,0);let s=.133*L,r=hn.getMoonPosition(a,n,t).altitude-s,i,o,c,l,g,h,f,u,I,d,p,C,B;for(let y=1;y<=24&&(i=hn.getMoonPosition(Ne(a,y),n,t).altitude-s,o=hn.getMoonPosition(Ne(a,y+1),n,t).altitude-s,g=(r+o)/2-i,h=(o-r)/2,f=-h/(2*g),u=(g*f+h)*f+i,I=h*h-4*g*i,d=0,I>=0&&(B=Math.sqrt(I)/(Math.abs(g)*2),p=f-B,C=f+B,Math.abs(p)<=1&&d++,Math.abs(C)<=1&&d++,p<-1&&(p=C)),d===1?r<0?c=y+p:l=y+p:d===2&&(c=y+(u<0?C:p),l=y+(u<0?p:C)),!(c&&l));y+=2)r=o;let E={};return c&&(E.rise=Ne(a,c)),l&&(E.set=Ne(a,l)),!c&&!l&&(E[u>0?"alwaysUp":"alwaysDown"]=!0),E};var Qs=hn,ms=class{_delegate;_sunLight;_hemiLight;_currentTime;constructor(){this._delegate=new ce,this._delegate.name="Sun",this._sunLight=new Sa(16777215,1),this._hemiLight=new _a(new yn(16777215),new yn(16777215),.6),this._hemiLight.color.setHSL(.661,.96,.12),this._hemiLight.groundColor.setHSL(.11,.96,.14),this._hemiLight.position.set(0,0,50),this._delegate.add(this._sunLight),this._delegate.add(this._hemiLight),this._currentTime=new Date().getTime()}get delegate(){return this._delegate}set castShadow(e){this._sunLight.castShadow=e}get castShadow(){return this._sunLight.castShadow}set currentTime(e){this._currentTime=e}get currentTime(){return this._currentTime}get sunLight(){return this._sunLight}get hemiLight(){return this._hemiLight}setShadow(e={}){return this._sunLight.shadow.radius=e.radius||2,this._sunLight.shadow.mapSize.width=e.mapSize?e.mapSize[0]:8192,this._sunLight.shadow.mapSize.height=e.mapSize?e.mapSize[1]:8192,this._sunLight.shadow.camera.top=this._sunLight.shadow.camera.right=e.topRight||1e3,this._sunLight.shadow.camera.bottom=this._sunLight.shadow.camera.left=e.bottomLeft||-1e3,this._sunLight.shadow.camera.near=e.near||1,this._sunLight.shadow.camera.far=e.far||1e8,this._sunLight.shadow.camera.visible=!0,this}update(e){let n=new Date(this._currentTime||new Date().getTime()),t=e.center,A=Qs.getPosition(n,t.lat,t.lng),a=A.altitude,s=Math.PI+A.azimuth,r=512e3,i=Math.sin(a),o=Math.cos(a),c=Math.cos(s)*o,l=Math.sin(s)*o;this._sunLight.position.set(l,c,i),this._sunLight.position.multiplyScalar(r),this._sunLight.intensity=Math.max(i,0),this._hemiLight.intensity=Math.max(i*1,.1),this._sunLight.updateMatrixWorld()}},ys=ms,xs=class{static createRTCGroup(e,n,t){let A=new ce;if(A.name="rtc",A.position.copy(Fn.lngLatToVector3(e)),n?A.rotation.set(n[0]||0,n[1]||0,n[2]||0):A.rotation.set(Math.PI/2,Math.PI,0),t)A.scale.set(t[0]||1,t[1]||1,t[2]||1);else{let a=1;Array.isArray(e)&&(a=Fn.projectedUnitsPerMeter(e[1])),A.scale.set(a,a,a)}return A}static createMercatorRTCGroup(e,n,t){let A=new ce;if(A.name="rtc",A.position.copy(Fn.lngLatToVector3(e)),n?A.rotation.set(n[0]||0,n[1]||0,n[2]||0):A.rotation.set(Math.PI/2,Math.PI,0),t)A.scale.set(t[0]||1,t[1]||1,t[2]||1);else{let a=1,s=Fn.projectedMercatorUnitsPerMeter();Array.isArray(e)&&(a=Fn.projectedUnitsPerMeter(e[1])),A.scale.set(s,s,a)}return A}static createShadowGround(e,n,t){let A=new Fa(n||100,t||100),a=new Ga({opacity:.5,transparent:!0}),s=new ee(A,a);return s.position.copy(Fn.lngLatToVector3(e)),s.receiveShadow=!0,s.name="shadow-ground",s}},ws=xs,bs=new Jt(-1,1,1,-1,0,1),Ss=class extends st{constructor(){super(),this.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ve([0,2,0,0,2,0],2))}},vs=new Ss,BA=class{constructor(e){this._mesh=new ee(vs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bs)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},z=Uint8Array,Ae=Uint16Array,Ds=Int32Array,EA=new z([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),QA=new z([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_s=new z([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),mA=function(e,n){for(var t=new Ae(31),A=0;A<31;++A)t[A]=n+=1<<e[A-1];for(var a=new Ds(t[30]),A=1;A<30;++A)for(var s=t[A];s<t[A+1];++s)a[s]=s-t[A]<<5|A;return{b:t,r:a}},yA=mA(EA,2),xA=yA.b,Ms=yA.r;xA[28]=258,Ms[258]=28;for(var ks=mA(QA,0).b,ht=new Ae(32768),M=0;M<32768;++M){var Nn=(M&43690)>>1|(M&21845)<<1;Nn=(Nn&52428)>>2|(Nn&13107)<<2,Nn=(Nn&61680)>>4|(Nn&3855)<<4,ht[M]=((Nn&65280)>>8|(Nn&255)<<8)>>1}for(var fe=function(e,n,t){for(var A=e.length,a=0,s=new Ae(n);a<A;++a)e[a]&&++s[e[a]-1];var r=new Ae(n);for(a=1;a<n;++a)r[a]=r[a-1]+s[a-1]<<1;var i;if(t){i=new Ae(1<<n);var o=15-n;for(a=0;a<A;++a)if(e[a])for(var c=a<<4|e[a],l=n-e[a],g=r[e[a]-1]++<<l,h=g|(1<<l)-1;g<=h;++g)i[ht[g]>>o]=c}else for(i=new Ae(A),a=0;a<A;++a)e[a]&&(i[a]=ht[r[e[a]-1]++]>>15-e[a]);return i},pe=new z(288),M=0;M<144;++M)pe[M]=8;for(var M=144;M<256;++M)pe[M]=9;for(var M=256;M<280;++M)pe[M]=7;for(var M=280;M<288;++M)pe[M]=8;for(var wA=new z(32),M=0;M<32;++M)wA[M]=5;var Ts=fe(pe,9,1),Rs=fe(wA,5,1),ut=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},un=function(e,n,t){var A=n/8|0;return(e[A]|e[A+1]<<8)>>(n&7)&t},It=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},bA=function(e){return(e+7)/8|0},ae=function(e,n,t){return(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length),new z(e.subarray(n,t))},Fs=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],X=function(e,n,t){var A=new Error(n||Fs[e]);if(A.code=e,Error.captureStackTrace&&Error.captureStackTrace(A,X),!t)throw A;return A},SA=function(e,n,t,A){var a=e.length,s=A?A.length:0;if(!a||n.f&&!n.l)return t||new z(0);var r=!t,i=r||n.i!=2,o=n.i;r&&(t=new z(a*3));var c=function(cn){var Tn=t.length;if(cn>Tn){var Rn=new z(Math.max(Tn*2,cn));Rn.set(t),t=Rn}},l=n.f||0,g=n.p||0,h=n.b||0,f=n.l,u=n.d,I=n.m,d=n.n,p=a*8;do{if(!f){l=un(e,g,1);var C=un(e,g+1,3);if(g+=3,C)if(C==1)f=Ts,u=Rs,I=9,d=5;else if(C==2){var m=un(e,g,31)+257,x=un(e,g+10,15)+4,_=m+un(e,g+5,31)+1;g+=14;for(var k=new z(_),J=new z(19),b=0;b<x;++b)J[_s[b]]=un(e,g+b*3,7);g+=x*3;for(var P=ut(J),an=(1<<P)-1,rn=fe(J,P,1),b=0;b<_;){var en=rn[un(e,g,an)];g+=en&15;var B=en>>4;if(B<16)k[b++]=B;else{var F=0,O=0;for(B==16?(O=3+un(e,g,3),g+=2,F=k[b-1]):B==17?(O=3+un(e,g,7),g+=3):B==18&&(O=11+un(e,g,127),g+=7);O--;)k[b++]=F}}var tn=k.subarray(0,m),R=k.subarray(m);I=ut(tn),d=ut(R),f=fe(tn,I,1),u=fe(R,d,1)}else X(1);else{var B=bA(g)+4,E=e[B-4]|e[B-3]<<8,y=B+E;if(y>a){o&&X(0);break}i&&c(h+E),t.set(e.subarray(B,y),h),n.b=h+=E,n.p=g=y*8,n.f=l;continue}if(g>p){o&&X(0);break}}i&&c(h+131072);for(var Sn=(1<<I)-1,dn=(1<<d)-1,Cn=g;;Cn=g){var F=f[It(e,g)&Sn],An=F>>4;if(g+=F&15,g>p){o&&X(0);break}if(F||X(2),An<256)t[h++]=An;else if(An==256){Cn=g,f=null;break}else{var vn=An-254;if(An>264){var b=An-257,on=EA[b];vn=un(e,g,(1<<on)-1)+xA[b],g+=on}var Bn=u[It(e,g)&dn],S=Bn>>4;Bn||X(3),g+=Bn&15;var R=ks[S];if(S>3){var on=QA[S];R+=It(e,g)&(1<<on)-1,g+=on}if(g>p){o&&X(0);break}i&&c(h+131072);var En=h+vn;if(h<R){var ln=s-R,Dn=Math.min(R,En);for(ln+h<0&&X(3);h<Dn;++h)t[h]=A[ln+h]}for(;h<En;++h)t[h]=t[h-R]}}n.l=f,n.p=Cn,n.b=h,n.f=l,f&&(l=1,n.m=I,n.d=u,n.n=d)}while(!l);return h!=t.length&&r?ae(t,0,h):t.subarray(0,h)},Ns=new z(0),xn=function(e,n){return e[n]|e[n+1]<<8},In=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},ft=function(e,n){return In(e,n)+In(e,n+4)*4294967296},Gs=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&X(6,"invalid gzip data");var n=e[3],t=10;n&4&&(t+=(e[10]|e[11]<<8)+2);for(var A=(n>>3&1)+(n>>4&1);A>0;A-=!e[t++]);return t+(n&2)},pt=(function(){function e(n,t){typeof n=="function"&&(t=n,n={}),this.ondata=t;var A=n&&n.dictionary&&n.dictionary.subarray(-32768);this.s={i:0,b:A?A.length:0},this.o=new z(32768),this.p=new z(0),A&&this.o.set(A)}return e.prototype.e=function(n){if(this.ondata||X(5),this.d&&X(4),!this.p.length)this.p=n;else if(n.length){var t=new z(this.p.length+n.length);t.set(this.p),t.set(n,this.p.length),this.p=t}},e.prototype.c=function(n){this.s.i=+(this.d=n||!1);var t=this.s.b,A=SA(this.p,this.s,this.o);this.ondata(ae(A,t,this.s.b),this.d),this.o=ae(A,this.s.b-32768),this.s.b=this.o.length,this.p=ae(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(n,t){this.e(n),this.c(t)},e})();function Us(e,n){return SA(e,{i:2},n&&n.out,n&&n.dictionary)}var Ys=(function(){function e(n,t){this.v=1,this.r=0,pt.call(this,n,t)}return e.prototype.push=function(n,t){if(pt.prototype.e.call(this,n),this.r+=n.length,this.v){var A=this.p.subarray(this.v-1),a=A.length>3?Gs(A):4;if(a>A.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-A.length);this.p=A.subarray(a),this.v=0}pt.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=bA(this.s.p)+9,this.s={i:0},this.o=new z(0),this.push(new z(0),t))},e})(),dt=typeof TextDecoder<"u"&&new TextDecoder;try{dt.decode(Ns,{stream:!0})}catch{}var Ls=function(e){for(var n="",t=0;;){var A=e[t++],a=(A>127)+(A>223)+(A>239);if(t+a>e.length)return{s:n,r:ae(e,t-1)};a?a==3?(A=((A&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|A>>10,56320|A&1023)):a&1?n+=String.fromCharCode((A&31)<<6|e[t++]&63):n+=String.fromCharCode((A&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(A)}};function zs(e,n){if(n){for(var t="",A=0;A<e.length;A+=16384)t+=String.fromCharCode.apply(null,e.subarray(A,A+16384));return t}else{if(dt)return dt.decode(e);var a=Ls(e),s=a.s,t=a.r;return t.length&&X(8),s}}var qs=function(e,n){return n+30+xn(e,n+26)+xn(e,n+28)},Js=function(e,n,t){var A=xn(e,n+28),a=zs(e.subarray(n+46,n+46+A),!(xn(e,n+8)&2048)),s=n+46+A,r=In(e,n+20),i=t&&r==4294967295?Hs(e,s):[r,In(e,n+24),In(e,n+42)],o=i[0],c=i[1],l=i[2];return[xn(e,n+10),o,c,a,s+xn(e,n+30)+xn(e,n+32),l]},Hs=function(e,n){for(;xn(e,n)!=1;n+=4+xn(e,n+2));return[ft(e,n+12),ft(e,n+4),ft(e,n+20)]};function Ps(e,n){for(var t={},A=e.length-22;In(e,A)!=101010256;--A)(!A||e.length-A>65558)&&X(13);var a=xn(e,A+8);if(!a)return{};var s=In(e,A+16),r=s==4294967295||a==65535;if(r){var i=In(e,A-12);r=In(e,i)==101075792,r&&(a=In(e,i+32),s=In(e,i+48))}for(var o=n&&n.filter,c=0;c<a;++c){var l=Js(e,s,r),g=l[0],h=l[1],f=l[2],u=l[3],I=l[4],d=l[5],p=qs(e,d);s=I,(!o||o({name:u,size:h,originalSize:f,compression:g}))&&(g?g==8?t[u]=Us(e.subarray(p,p+h),{out:new z(f)}):X(14,"unknown compression type "+g):t[u]=ae(e,p,p+h))}return t}var _n,vA=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&vA.decode();var de=null;function Vs(){return(de===null||de.byteLength===0)&&(de=new Uint8Array(_n.memory.buffer)),de}function Ks(e,n){return e=e>>>0,vA.decode(Vs().subarray(e,e+n))}function js(e,n,t,A,a,s,r,i,o,c,l,g,h){return _n.raycast_splats(e,n,t,A,a,s,r,i,o,c,l,g,h)}async function Os(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(A){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",A);else throw A}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function Xs(){const e={};return e.wbg={},e.wbg.__wbg_buffer_609cc3eee51ed158=function(n){return n.buffer},e.wbg.__wbg_length_3b4f022188ae8db6=function(n){return n.length},e.wbg.__wbg_length_6ca527665d89694d=function(n){return n.length},e.wbg.__wbg_length_8cfd2c6409af88ad=function(n){return n.length},e.wbg.__wbg_new_9fee97a409b32b68=function(n){return new Uint16Array(n)},e.wbg.__wbg_new_e3b321dcfef89fc7=function(n){return new Uint32Array(n)},e.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354=function(n,t,A){return new Float32Array(n,t>>>0,A>>>0)},e.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212=function(n,t,A){return new Uint32Array(n,t>>>0,A>>>0)},e.wbg.__wbg_newwithlength_5a5efe313cfd59f1=function(n){return new Float32Array(n>>>0)},e.wbg.__wbg_set_10bad9bee0e9c58b=function(n,t,A){n.set(t,A>>>0)},e.wbg.__wbg_set_d23661d19148b229=function(n,t,A){n.set(t,A>>>0)},e.wbg.__wbg_set_f4f1f0daa30696fc=function(n,t,A){n.set(t,A>>>0)},e.wbg.__wbg_subarray_3aaeec89bb2544f0=function(n,t,A){return n.subarray(t>>>0,A>>>0)},e.wbg.__wbg_subarray_769e1e0f81bb259b=function(n,t,A){return n.subarray(t>>>0,A>>>0)},e.wbg.__wbindgen_init_externref_table=function(){const n=_n.__wbindgen_export_0,t=n.grow(4);n.set(0,void 0),n.set(t+0,void 0),n.set(t+1,null),n.set(t+2,!0),n.set(t+3,!1)},e.wbg.__wbindgen_memory=function(){return _n.memory},e.wbg.__wbindgen_throw=function(n,t){throw new Error(Ks(n,t))},e}function Ws(e,n){return _n=e.exports,DA.__wbindgen_wasm_module=n,de=null,_n.__wbindgen_start(),_n}async function DA(e){if(_n!==void 0)return _n;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("data:application/wasm;base64,AGFzbQEAAAABzAEeYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AX9gA39/fwBgAX8AYAV/f39/fwBgA29/fwFvYAV/f39/fwF/YAFvAW9gA29vfwBgAW8Bf2AAAX9gBH9/f38AYAAAYAR/f39/AX9gA39vbwF/YAF/AW9gAAFvYAF9AX1gBn9/f39/fwBgDX19fX19fX19f29/fX0Bb2AGf39/f39/AX9gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwBgAn19AX0C8gQRA3diZx1fX3diZ19idWZmZXJfNjA5Y2MzZWVlNTFlZDE1OAAJA3diZxpfX3diZ19uZXdfOWZlZTk3YTQwOWIzMmI2OAAJA3diZxpfX3diZ19zZXRfZjRmMWYwZGFhMzA2OTZmYwAKA3diZx1fX3diZ19sZW5ndGhfOGNmZDJjNjQwOWFmODhhZAALA3diZzFfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9mMWRlYWQ0NGQxZmM3MjEyAAcDd2JnGl9fd2JnX25ld19lM2IzMjFkY2ZlZjg5ZmM3AAkDd2JnGl9fd2JnX3NldF9kMjM2NjFkMTkxNDhiMjI5AAoDd2JnHV9fd2JnX2xlbmd0aF82Y2E1Mjc2NjVkODk2OTRkAAsDd2JnMV9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoX2U2YjdlNjlhY2Q0YzczNTQABwN3YmcaX193Ymdfc2V0XzEwYmFkOWJlZTBlOWM1OGIACgN3YmcdX193YmdfbGVuZ3RoXzNiNGYwMjIxODhhZThkYjYACwN3YmcfX193Ymdfc3ViYXJyYXlfNzY5ZTFlMGY4MWJiMjU5YgAHA3diZx9fX3diZ19zdWJhcnJheV8zYWFlZWM4OWJiMjU0NGYwAAcDd2JnJF9fd2JnX25ld3dpdGhsZW5ndGhfNWE1ZWZlMzEzY2ZkNTlmMQARA3diZxBfX3diaW5kZ2VuX3Rocm93AAEDd2JnEV9fd2JpbmRnZW5fbWVtb3J5ABIDd2JnH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgNhYAMAAQIIBQQCEwEMAAEBAgAAAQwBBAYFBQQAAQYFFAENBAAGBQQEAQQOAgECAQAIBAAVARYG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ACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBACACQR9HG3QhBQNAIAMgBUEddkEEcWpBEGoiBCgCACICRQ0CIAVBAXQhBSACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBCAANgIAIAAgAzYCGCAAIAA2AgwgACAANgIIC/MCAQR/IwBBMGsiACQAAkACQEGQksAAKAIARQRAQaiSwAAoAgAhAUGoksAAQQA2AgAgAUUNASAAQRhqIAERBQAgAEEQaiICIABBJGopAgA3AwAgACAAKQIcNwMIIAAoAhghAUGQksAAKAIAIgMNAgJAIANFDQBBlJLAACgCACICRQ0AQZiSwAAoAgAgAkECdBBlC0GUksAAIAE2AgBBkJLAAEEBNgIAQZiSwAAgACkDCDcCAEGgksAAIABBEGopAwA3AgALIABBMGokAEGUksAADwsgAEEANgIoIABBATYCHCAAQaCHwAA2AhggAEIENwIgIABBGGpBiIjAABBDAAsgAEEoaiACKQMANwIAIAAgACkDCDcCICAAIAE2AhwgAEEBNgIYAkAgAEEYaiIBKAIARQ0AIAEoAgQiAkUNACABKAIIIAJBAnQQZQsgAEEANgIoIABBATYCHCAAQaiIwAA2AhggAEIENwIgIAFBsIjAABBDAAuoAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQcCIwAAgAkEoahAYGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCAEGxk8AALQAAGiACIAU3AwBBDEEEEF0iAUUEQEEEQQwQbQALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHgisAANgIEIAAgATYCACACQUBrJAAL0gECBH8BfiMAQSBrIgMkACABIAEgAmoiAksEQEEAQQAQUgALQQggACgCACIEQQF0IgEgAiABIAJLGyICIAJBCEkb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QQRqrUKAgICA4ACENwMoIAEgAa1CgICAgOAAhDcDICABIAFBIGo2AhAgAUEIakHIj8AAEEMAC2kCAX8BfiMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQfyNwAA2AgggA0ICNwIUIANCgICAgOAAIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhBDAAtpAgF/AX4jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQQI2AgwgA0H4kcAANgIIIANCAjcCFCADQoCAgIDgACIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQQwALZgAjAEEwayIAJABBsJPAAC0AAARAIABBAjYCDCAAQbCKwAA2AgggAEIBNwIUIAAgATYCLCAAIABBLGqtQoCAgIDgAIQ3AyAgACAAQSBqNgIQIABBCGpB0IrAABBDAAsgAEEwaiQAC5QBAgN/AW8jAEEgayIDJAAgAyAAKAIAEHAiBDYCACADIAI2AgQgAiAERwRAIANBADYCCCADIANBBGogA0EIahBAAAsQWyIEEFMiBSUBEAUhBhAbIgIgBiYBIAVBhAFPBEAgBRAtCyACIAAoAgAgAUECdhBkIAJBhAFPBEAgAhAtCyAEQYQBTwRAIAQQLQsgA0EgaiQAC08BAX8jAEEwayIAJAAgAEEBNgIMIABBwI3AADYCCCAAQgE3AhQgACAAQS9qrUKAgICAoAWENwMgIAAgAEEgajYCECAAQQhqQcSBwAAQQwALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhAlIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALTQECf0Gxk8AALQAAGiABKAIEIQIgASgCACEDQQhBBBBdIgFFBEBBBEEIEG0ACyABIAI2AgQgASADNgIAIABB8IrAADYCBCAAIAE2AgALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhApIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALQQEBfyMAQSBrIgIkACACQQA2AhAgAkEBNgIEIAJCBDcCCCACQS42AhwgAiAANgIYIAIgAkEYajYCACACIAEQQwALswIBA38gACgCACECIAEoAhwiAEEQcUUE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ZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkTGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkdgMQACoAAAAvVXNlcnMvZG1hcmNvcy8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL29uY2VfY2VsbC0xLjIxLjMvc3JjL2xpYi5ycwCoAxAAXwAAAAgDAAAZAAAAcmVlbnRyYW50IGluaXQAABgEEAAOAAAAqAMQAF8AAAB6AgAADQAAABYAAAAMAAAABAAAABcAAAAYAAAAGQAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZABYBBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAWAQQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9ybWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAAAAAsFEAAVAAAAIAUQAA0AAABzdGQvc3JjL2FsbG9jLnJzQAUQABAAAABjAQAACQAAABYAAAAMAAAABAAAABoAAAAAAAAACAAAAAQAAAAbAAAAAAAAAAgAAAAEAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAQAAAABAAAACEAAAAiAAAAIwAAACQAAABFcnJvcgAAACUAAAAMAAAABAAAACYAAAAnAAAAKAAAAGNhcGFjaXR5IG92ZXJmbG93AAAA2AUQABEAAABhbGxvYy9zcmMvcmF3X3ZlYy5yc/QFEAAUAAAAGAAAAAUAQaCMwAAL8AUBAAAAKQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90YWxsb2Mvc3JjL2ZtdC5ycwAAfgYQABAAAAB+AgAADgAAAEJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogrgYQABIAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAyAYQACAAAADoBhAAEgAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogABcHEAAQAAAAJwcQABcAAAA+BxAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAAXBxAAEAAAAGAHEAAQAAAAcAcQAAkAAAA+BxAACQAAADogAAABAAAAAAAAAJwHEAACAAAAfSB9Y29yZS9zcmMvZm10L251bS5ycwAAswcQABMAAABmAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlyYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAACiCBAAEgAAALQIEAAiAAAAcmFuZ2UgZW5kIGluZGV4IOgIEAAQAAAAtAgQACIAAAAAAAA/AAAAvwBBqJLAAAsBFABwCXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS44My4wICg5MGIzNWE2MjMgMjAyNC0xMS0yNikGd2FscnVzBjAuMjMuMwx3YXNtLWJpbmRnZW4HMC4yLjEwMABJD3RhcmdldF9mZWF0dXJlcwQrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==",import.meta.url));const n=Xs();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:A}=await Os(await e,n);return Ws(t,A)}var Ct=Math.exp(-30),D=2048,qn=2048,Zs=1;function $s(e){return e==="bool"||e==="bvec2"||e==="bvec3"||e==="bvec4"}function Jn(e){return e==="int"||e==="ivec2"||e==="ivec3"||e==="ivec4"}function Hn(e){return e==="uint"||e==="uvec2"||e==="uvec3"||e==="uvec4"}function nr(e){return e==="float"||e==="vec2"||e==="vec3"||e==="vec4"}function er(e){return e==="mat2"||e==="mat2x2"||e==="mat2x3"||e==="mat2x4"||e==="mat3"||e==="mat3x2"||e==="mat3x3"||e==="mat3x4"||e==="mat4"||e==="mat4x2"||e==="mat4x3"||e==="mat4x4"}function Ce(e){return nr(e)||er(e)}function se(e){return e==="mat2"||e==="mat2x2"}function re(e){return e==="mat3"||e==="mat3x3"}function ie(e){return e==="mat4"||e==="mat4x4"}function tr(e){switch(e){case"vec2":return"float";case"vec3":return"float";case"vec4":return"float";case"ivec2":return"int";case"ivec3":return"int";case"ivec4":return"int";case"uvec2":return"uint";case"uvec3":return"uint";case"uvec4":return"uint";default:throw new Error(`Invalid vector type: ${e}`)}}function Ar(e){switch(e){case"vec2":case"ivec2":case"uvec2":return 2;case"vec3":case"ivec3":case"uvec3":return 3;case"vec4":case"ivec4":case"uvec4":return 4;default:throw new Error(`Invalid vector type: ${e}`)}}function G(e){return Math.trunc(e).toString()}function U(e){return`${Math.max(0,Math.trunc(e)).toString()}u`}function w(e){return e===Number.POSITIVE_INFINITY?"INFINITY":e===Number.NEGATIVE_INFINITY?"-INFINITY":Number.isInteger(e)?e.toFixed(1):e.toString()}function Mn(e){return e instanceof Pn?e.type:e.dynoOut().type}var Pn=class{constructor(e){this.__isDynoValue=!0,this.type=e}},$=class extends Pn{constructor(e,n){super(e.outTypes[n]),this.dyno=e,this.key=n}},Ge=class extends Pn{constructor(e,n){super(e),this.literal=n}getLiteral(){return this.literal}},ar=class extends Ge{constructor(e,n){super(e,""),this.value=n}getLiteral(){const{type:e,value:n}=this;switch(e){case"bool":return n?"true":"false";case"uint":return U(n);case"int":return G(n);case"float":return w(n);case"bvec2":{const t=n;return`bvec2(${t[0]}, ${t[1]})`}case"uvec2":{if(n instanceof mn)return`uvec2(${U(n.x)}, ${U(n.y)})`;const t=n;return`uvec2(${U(t[0])}, ${U(t[1])})`}case"ivec2":{if(n instanceof mn)return`ivec2(${G(n.x)}, ${G(n.y)})`;const t=n;return`ivec2(${G(t[0])}, ${G(t[1])})`}case"vec2":{if(n instanceof mn)return`vec2(${w(n.x)}, ${w(n.y)})`;const t=n;return`vec2(${w(t[0])}, ${w(t[1])})`}case"bvec3":{const t=n;return`bvec3(${t[0]}, ${t[1]}, ${t[2]})`}case"uvec3":{if(n instanceof Q)return`uvec3(${U(n.x)}, ${U(n.y)}, ${U(n.z)})`;const t=n;return`uvec3(${U(t[0])}, ${U(t[1])}, ${U(t[2])})`}case"ivec3":{if(n instanceof Q)return`ivec3(${G(n.x)}, ${G(n.y)}, ${G(n.z)})`;const t=n;return`ivec3(${G(t[0])}, ${G(t[1])}, ${G(t[2])})`}case"vec3":{if(n instanceof Q)return`vec3(${w(n.x)}, ${w(n.y)}, ${w(n.z)})`;const t=n;return`vec3(${w(t[0])}, ${w(t[1])}, ${w(t[2])})`}case"bvec4":{const t=n;return`bvec4(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}case"uvec4":{if(n instanceof gn)return`uvec4(${U(n.x)}, ${U(n.y)}, ${U(n.z)}, ${U(n.w)})`;const t=n;return`uvec4(${U(t[0])}, ${U(t[1])}, ${U(t[2])}, ${U(t[3])})`}case"ivec4":{if(n instanceof gn)return`ivec4(${G(n.x)}, ${G(n.y)}, ${G(n.z)}, ${G(n.w)})`;const t=n;return`ivec4(${G(t[0])}, ${G(t[1])}, ${G(t[2])}, ${G(t[3])})`}case"vec4":{if(n instanceof gn)return`vec4(${w(n.x)}, ${w(n.y)}, ${w(n.z)}, ${w(n.w)})`;if(n instanceof Z)return`vec4(${w(n.x)}, ${w(n.y)}, ${w(n.z)}, ${w(n.w)})`;const t=n;return`vec4(${w(t[0])}, ${w(t[1])}, ${w(t[2])}, ${w(t[3])})`}case"mat2":case"mat2x2":{const t=n,A=t instanceof jt?t.elements:n;return`${e}(${new Array(4).fill(0).map((a,s)=>w(A[s])).join(", ")})`}case"mat2x3":{const t=n;return`${e}(${new Array(6).fill(0).map((A,a)=>w(t[a])).join(", ")})`}case"mat2x4":{const t=n;return`${e}(${new Array(8).fill(0).map((A,a)=>w(t[a])).join(", ")})`}case"mat3":case"mat3x3":{const t=n,A=t instanceof Xt?t.elements:n;return`${e}(${new Array(9).fill(0).map((a,s)=>w(A[s])).join(", ")})`}case"mat3x2":{const t=n;return`${e}(${new Array(6).fill(0).map((A,a)=>w(t[a])).join(", ")})`}case"mat3x4":{const t=n;return`${e}(${new Array(12).fill(0).map((A,a)=>w(t[a])).join(", ")})`}case"mat4":case"mat4x4":{const t=n,A=t instanceof N?t.elements:n;return`${e}(${new Array(16).fill(0).map((a,s)=>w(A[s])).join(", ")})`}case"mat4x2":{const t=n;return`${e}(${new Array(8).fill(0).map((A,a)=>w(t[a])).join(", ")})`}case"mat4x3":{const t=n;return`${e}(${new Array(12).fill(0).map((A,a)=>w(t[a])).join(", ")})`}default:throw new Error(`Type not implemented: ${String(e)}`)}}};function Be(e,n){return new ar(e,n)}function Ue(e){const n=String(e);if($s(e))return`${n}(false)`;if(Ce(e))return`${n}(0.0)`;if(Jn(e))return`${n}(0)`;if(Hn(e))return`${n}(0u)`;throw new Error(`Type not implemented: ${n}`)}var _A="    ",sr=class{constructor({indent:e}={}){this.globals=new Set,this.statements=[],this.uniforms={},this.declares=new Set,this.updaters=[],this.sequence=0,this.indent=_A,this.indent=e??_A}nextSequence(){return this.sequence++}},q=class{constructor({inTypes:e,outTypes:n,inputs:t,update:A,globals:a,statements:s,generate:r}){this.inTypes=e??{},this.outTypes=n??{},this.inputs=t??{},this.update=A,this.globals=a,this.statements=s,this.generate=r??(({inputs:i,outputs:o,compile:c})=>{var l,g;return{globals:(l=this.globals)==null?void 0:l.call(this,{inputs:i,outputs:o,compile:c}),statements:(g=this.statements)==null?void 0:g.call(this,{inputs:i,outputs:o,compile:c})}})}get outputs(){const e={};for(const n in this.outTypes)e[n]=new $(this,n);return e}apply(e){return Object.assign(this.inputs,e),this.outputs}compile({inputs:e,outputs:n,compile:t}){const A=[`// ${this.constructor.name}(${Object.values(e).join(", ")}) => (${Object.values(n).join(", ")})`],a=[];for(const o in n){const c=n[o];c&&!t.declares.has(c)&&(t.declares.add(c),a.push(o))}const{globals:s,statements:r,uniforms:i}=this.generate({inputs:e,outputs:n,compile:t});for(const o of s??[])t.globals.add(o);for(const o in i)t.uniforms[o]=i[o];this.update&&t.updaters.push(this.update);for(const o of a){const c=n[o];c&&(t.uniforms[c]||A.push(`${MA(c,this.outTypes[o])};`))}return r?.length&&(A.push("{"),A.push(...r.map(o=>t.indent+o)),A.push("}")),A}},rr=class extends q{constructor({inTypes:e,outTypes:n,inputs:t,update:A,globals:a,construct:s}){super({inTypes:e,outTypes:n,inputs:t,update:A,globals:a,generate:r=>this.generateBlock(r)}),this.construct=s}generateBlock({inputs:e,outputs:n,compile:t}){var A,a;const s={},r={};for(const u in e)e[u]!=null&&(s[u]=new Ge(this.inTypes[u],e[u]));for(const u in n)n[u]!=null&&(r[u]=new Pn(this.outTypes[u]));const i={roots:[]},o=this.construct(s,r,i);for(const u of((A=this.globals)==null?void 0:A.call(this,{inputs:e,outputs:n,compile:t}))??[])t.globals.add(u);const c=[],l=new Map;function g(u,I,d){let p=l.get(u);if(!p){p={sequence:t.nextSequence(),outNames:new Map,newOuts:new Set},l.set(u,p);for(const C in u.inputs){let B=u.inputs[C];for(;B;){if(B instanceof Pn){B instanceof $&&g(B.dyno,B.key);break}B=B.dynoOut()}}c.push(u)}I&&(d||p.newOuts.add(I),p.outNames.set(I,d??`${I}_${p.sequence}`))}for(const u of i.roots)g(u);for(const u in r){let I=o?.[u]??r[u];for(;I;){if(I instanceof Pn){I instanceof $&&g(I.dyno,I.key,n[u]);break}I=I.dynoOut()}r[u]=I}const h=[];for(const u of c){const I={},d={};for(const B in u.inputs){let E=u.inputs[B];for(;E;){if(E instanceof Pn){if(E instanceof Ge)I[B]=E.getLiteral();else if(E instanceof $){const y=(a=l.get(E.dyno))==null?void 0:a.outNames.get(E.key);if(!y)throw new Error(`Source not found for ${E.dyno.constructor.name}.${E.key}`);I[B]=y}break}E=E.dynoOut()}}const p=l.get(u)??{outNames:new Map};for(const[B,E]of p.outNames.entries())d[B]=E;const C=u.compile({inputs:I,outputs:d,compile:t});h.push(C)}const f=[];for(const u in n)r[u]instanceof Ge&&f.push(`${n[u]} = ${r[u].getLiteral()};`);return f.length>0&&h.push(f),{statements:h.flatMap((u,I)=>I===0?u:["",...u])}}};function kn(e,n,t,{update:A,globals:a}={}){return new rr({inTypes:e,outTypes:n,construct:t,update:A,globals:a})}function Ye({inTypes:e,outTypes:n,inputs:t,update:A,globals:a,statements:s,generate:r}){return new q({inTypes:e,outTypes:n,inputs:t,update:A,globals:a,statements:s,generate:r})}function MA(e,n,t){const A=typeof n=="string"?n:n.type;if(!A)throw new Error(`Invalid DynoType: ${String(n)}`);return`${A} ${e}${t!=null?`[${t}]`:""}`}function wn(e){var n;let t=!1;const A=e.split(`
`).map(r=>{const i=r.trimEnd();return t?i:i.length>0?(t=!0,i):null}).filter(r=>r!=null);for(;A.length>0&&A[A.length-1].length===0;)A.pop();if(A.length===0)return[];const a=(n=A[0].match(/^\s*/))==null?void 0:n[0];if(!a)return A;const s=new RegExp(`^${a}`);return A.map(r=>r.replace(s,""))}function nn(e){return wn(e).join(`
`)}var Le=class extends q{constructor({a:e,outKey:n,outTypeFunc:t}){const A={a:Mn(e)},a=t(Mn(e));super({inTypes:A,outTypes:{[n]:a},inputs:{a:e}}),this.outKey=n}dynoOut(){return new $(this,this.outKey)}},ze=class extends q{constructor({a:e,b:n,outKey:t,outTypeFunc:A}){const a={a:Mn(e),b:Mn(n)},s=A(Mn(e),Mn(n));super({inTypes:a,outTypes:{[t]:s},inputs:{a:e,b:n}}),this.outKey=t}dynoOut(){return new $(this,this.outKey)}},Y={type:"Gsplat"},qe={type:"PackedSplats"},Ee=(e,n)=>new or({packedSplats:e,index:n}),ir=(e,n,t,A)=>new lr({packedSplats:e,index:n,base:t,count:A}),Je=e=>new cr({gsplat:e}),Bt=({gsplat:e,flags:n,index:t,center:A,scales:a,quaternion:s,rgba:r,rgb:i,opacity:o,x:c,y:l,z:g,r:h,g:f,b:u})=>new gr({gsplat:e,flags:n,index:t,center:A,scales:a,quaternion:s,rgba:r,rgb:i,opacity:o,x:c,y:l,z:g,r:h,g:f,b:u}),kA=(e,{scale:n,rotate:t,translate:A,recolor:a})=>new hr({gsplat:e,scale:n,rotate:t,translate:A,recolor:a}),bn=nn(`
  struct Gsplat {
    vec3 center;
    uint flags;
    vec3 scales;
    int index;
    vec4 quaternion;
    vec4 rgba;
  };
  const uint GSPLAT_FLAG_ACTIVE = 1u << 0u;

  bool isGsplatActive(uint flags) {
    return (flags & GSPLAT_FLAG_ACTIVE) != 0u;
  }
`),Et=nn(`
  struct PackedSplats {
    usampler2DArray texture;
    int numSplats;
    vec4 rgbMinMaxLnScaleMinMax;
  };
`),TA=nn(`
  bool readPackedSplat(usampler2DArray texture, int numSplats, vec4 rgbMinMaxLnScaleMinMax, int index, out Gsplat gsplat) {
    if ((index >= 0) && (index < numSplats)) {
      uvec4 packed = texelFetch(texture, splatTexCoord(index), 0);
      unpackSplatEncoding(packed, gsplat.center, gsplat.scales, gsplat.quaternion, gsplat.rgba, rgbMinMaxLnScaleMinMax);
      return true;
    } else {
      return false;
    }
  }
`),or=class extends q{constructor({packedSplats:e,index:n}){super({inTypes:{packedSplats:qe,index:"int"},outTypes:{gsplat:Y},inputs:{packedSplats:e,index:n},globals:()=>[bn,Et,TA],statements:({inputs:t,outputs:A})=>{const{gsplat:a}=A;if(!a)return[];const{packedSplats:s,index:r}=t;let i;return s&&r?i=wn(`
            if (readPackedSplat(${s}.texture, ${s}.numSplats, ${s}.rgbMinMaxLnScaleMinMax, ${r}, ${a})) {
              bool zeroSize = all(equal(${a}.scales, vec3(0.0, 0.0, 0.0)));
              ${a}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
            } else {
              ${a}.flags = 0u;
            }
          `):i=[`${a}.flags = 0u;`],i.push(`${a}.index = ${r??"0"};`),i}})}dynoOut(){return new $(this,"gsplat")}},lr=class extends q{constructor({packedSplats:e,index:n,base:t,count:A}){super({inTypes:{packedSplats:qe,index:"int",base:"int",count:"int"},outTypes:{gsplat:Y},inputs:{packedSplats:e,index:n,base:t,count:A},globals:()=>[bn,Et,TA],statements:({inputs:a,outputs:s})=>{const{gsplat:r}=s;if(!r)return[];const{packedSplats:i,index:o,base:c,count:l}=a;let g;return i&&o&&c&&l?g=wn(`
            ${r}.flags = 0u;
            if ((${o} >= ${c}) && (${o} < (${c} + ${l}))) {
              if (readPackedSplat(${i}.texture, ${i}.numSplats, ${i}.rgbMinMaxLnScaleMinMax, ${o}, ${r})) {
                bool zeroSize = all(equal(${r}.scales, vec3(0.0, 0.0, 0.0)));
                ${r}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
              }
            }
          `):g=[`${r}.flags = 0u;`],g.push(`${r}.index = ${o??"0"};`),g}})}dynoOut(){return new $(this,"gsplat")}},cr=class extends q{constructor({gsplat:e}){super({inTypes:{gsplat:Y},outTypes:{flags:"uint",active:"bool",index:"int",center:"vec3",scales:"vec3",quaternion:"vec4",rgba:"vec4",rgb:"vec3",opacity:"float",x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"},inputs:{gsplat:e},globals:()=>[bn],statements:({inputs:n,outputs:t})=>{const{gsplat:A}=n,{flags:a,active:s,index:r,center:i,scales:o,quaternion:c,rgba:l,rgb:g,opacity:h,x:f,y:u,z:I,r:d,g:p,b:C}=t;return[a?`${a} = ${A?`${A}.flags`:"0u"};`:null,s?`${s} = isGsplatActive(${A?`${A}.flags`:"0u"});`:null,r?`${r} = ${A?`${A}.index`:"0"};`:null,i?`${i} = ${A?`${A}.center`:"vec3(0.0, 0.0, 0.0)"};`:null,o?`${o} = ${A?`${A}.scales`:"vec3(0.0, 0.0, 0.0)"};`:null,c?`${c} = ${A?`${A}.quaternion`:"vec4(0.0, 0.0, 0.0, 1.0)"};`:null,l?`${l} = ${A?`${A}.rgba`:"vec4(0.0, 0.0, 0.0, 0.0)"};`:null,g?`${g} = ${A?`${A}.rgba.rgb`:"vec3(0.0, 0.0, 0.0)"};`:null,h?`${h} = ${A?`${A}.rgba.a`:"0.0"};`:null,f?`${f} = ${A?`${A}.center.x`:"0.0"};`:null,u?`${u} = ${A?`${A}.center.y`:"0.0"};`:null,I?`${I} = ${A?`${A}.center.z`:"0.0"};`:null,d?`${d} = ${A?`${A}.rgba.r`:"0.0"};`:null,p?`${p} = ${A?`${A}.rgba.g`:"0.0"};`:null,C?`${C} = ${A?`${A}.rgba.b`:"0.0"};`:null].filter(Boolean)}})}},gr=class extends q{constructor({gsplat:e,flags:n,index:t,center:A,scales:a,quaternion:s,rgba:r,rgb:i,opacity:o,x:c,y:l,z:g,r:h,g:f,b:u}){super({inTypes:{gsplat:Y,flags:"uint",index:"int",center:"vec3",scales:"vec3",quaternion:"vec4",rgba:"vec4",rgb:"vec3",opacity:"float",x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"},outTypes:{gsplat:Y},inputs:{gsplat:e,flags:n,index:t,center:A,scales:a,quaternion:s,rgba:r,rgb:i,opacity:o,x:c,y:l,z:g,r:h,g:f,b:u},globals:()=>[bn],statements:({inputs:I,outputs:d})=>{const{gsplat:p}=d;if(!p)return[];const{gsplat:C,flags:B,index:E,center:y,scales:m,quaternion:x,rgba:_,rgb:k,opacity:J,x:b,y:P,z:an,r:rn,g:en,b:F}=I;return[`${p}.flags = ${B??(C?`${C}.flags`:"0u")};`,`${p}.index = ${E??(C?`${C}.index`:"0")};`,`${p}.center = ${y??(C?`${C}.center`:"vec3(0.0, 0.0, 0.0)")};`,`${p}.scales = ${m??(C?`${C}.scales`:"vec3(0.0, 0.0, 0.0)")};`,`${p}.quaternion = ${x??(C?`${C}.quaternion`:"vec4(0.0, 0.0, 0.0, 1.0)")};`,`${p}.rgba = ${_??(C?`${C}.rgba`:"vec4(0.0, 0.0, 0.0, 0.0)")};`,k?`${p}.rgba.rgb = ${k};`:null,J?`${p}.rgba.a = ${J};`:null,b?`${p}.center.x = ${b};`:null,P?`${p}.center.y = ${P};`:null,an?`${p}.center.z = ${an};`:null,rn?`${p}.rgba.r = ${rn};`:null,en?`${p}.rgba.g = ${en};`:null,F?`${p}.rgba.b = ${F};`:null].filter(Boolean)}})}dynoOut(){return new $(this,"gsplat")}};nn(`
  vec3 gsplatNormal(vec3 scales, vec4 quaternion) {
    float minScale = min(scales.x, min(scales.y, scales.z));
    vec3 normal;
    if (scales.z == minScale) {
      normal = vec3(0.0, 0.0, 1.0);
    } else if (scales.y == minScale) {
      normal = vec3(0.0, 1.0, 0.0);
    } else {
      normal = vec3(1.0, 0.0, 0.0);
    }
    return quatVec(quaternion, normal);
  }
`);var hr=class extends q{constructor({gsplat:e,scale:n,rotate:t,translate:A,recolor:a}){super({inTypes:{gsplat:Y,scale:"float",rotate:"vec4",translate:"vec3",recolor:"vec4"},outTypes:{gsplat:Y},inputs:{gsplat:e,scale:n,rotate:t,translate:A,recolor:a},globals:()=>[bn],statements:({inputs:s,outputs:r,compile:i})=>{const{gsplat:o}=r;if(!o||!s.gsplat)return[];const{scale:c,rotate:l,translate:g,recolor:h}=s,f=i.indent;return[`${o} = ${s.gsplat};`,`if (isGsplatActive(${o}.flags)) {`,c?`${f}${o}.center *= ${c};`:null,l?`${f}${o}.center = quatVec(${l}, ${o}.center);`:null,g?`${f}${o}.center += ${g};`:null,c?`${f}${o}.scales *= ${c};`:null,l?`${f}${o}.quaternion = quatQuat(${l}, ${o}.quaternion);`:null,h?`${f}${o}.rgba *= ${h};`:null,"}"].filter(Boolean)}})}dynoOut(){return new $(this,"gsplat")}},ur=(e,n)=>new Ir({gsplat:e,rgbMinMaxLnScaleMinMax:n}),Ir=class extends q{constructor({gsplat:e,rgbMinMaxLnScaleMinMax:n}){super({inTypes:{gsplat:Y,rgbMinMaxLnScaleMinMax:"vec4"},inputs:{gsplat:e,rgbMinMaxLnScaleMinMax:n},globals:()=>[bn],statements:({inputs:t,outputs:A})=>{const{output:a}=A;if(!a)return[];const{gsplat:s,rgbMinMaxLnScaleMinMax:r}=t;return s?wn(`
            if (isGsplatActive(${s}.flags)) {
              ${a} = packSplatEncoding(${s}.center, ${s}.scales, ${s}.quaternion, ${s}.rgba, ${r});
            } else {
              ${a} = uvec4(0u, 0u, 0u, 0u);
            }
          `):[`${a} = uvec4(0u, 0u, 0u, 0u);`]}})}dynoOut(){return new $(this,"output")}},fr=class extends q{constructor({rgba8:e}){super({inTypes:{rgba8:"vec4"},inputs:{rgba8:e},statements:({inputs:n,outputs:t})=>[`target = ${n.rgba8??"vec4(0.0, 0.0, 0.0, 0.0)"};`]})}dynoOut(){return new $(this,"rgba8")}},fn=class extends q{constructor({key:e,type:n,count:t,value:A,update:a,globals:s}){e=e??"value",super({outTypes:{[e]:n},update:()=>{if(a){const r=a(this.value);r!==void 0&&(this.value=r)}this.uniform.value=this.value},generate:({inputs:r,outputs:i})=>{const o=s?.({inputs:r,outputs:i})??[],c={},l=i[e];return l&&(o.push(`uniform ${MA(l,n,t)};`),c[l]=this.uniform),{globals:o,uniforms:c}}}),this.type=n,this.count=t,this.value=A,this.uniform={value:A},this.outKey=e}dynoOut(){return new $(this,this.outKey)}},RA=class extends fn{constructor({key:e,value:n,update:t}){super({key:e,type:"bool",value:n,update:t})}},Qt=class extends fn{constructor({key:e,value:n,update:t}){super({key:e,type:"int",value:n,update:t})}},Qe=class extends fn{constructor({key:e,value:n,update:t}){super({key:e,type:"float",value:n,update:t})}},mt=class extends fn{constructor({key:e,value:n,update:t}){super({key:e,type:"vec2",value:n,update:t})}},He=class extends fn{constructor({key:e,value:n,update:t}){super({key:e,type:"vec3",value:n,update:t})}},Pe=class extends fn{constructor({key:e,value:n,update:t}){super({key:e,type:"vec4",value:n,update:t})}},yt=class extends fn{constructor({key:e,value:n,update:t}){super({key:e,type:"usampler2DArray",value:n,update:t})}},xt=new Float32Array(1),FA=new Uint32Array(xt.buffer),wt="Float16Array"in globalThis,Ve=wt?new globalThis.Float16Array(1):null,NA=new Uint16Array(Ve?.buffer),bt=wt?pr:dr,St=wt?Cr:Br;function pr(e){return Ve[0]=e,NA[0]}function dr(e){xt[0]=e;const n=FA[0],t=n>>31&1,A=n>>23&255,a=n&8388607,s=t<<15;if(A===255)return a!==0?s|32767:s|31744;const r=A-127+15;if(r>=31)return s|31744;if(r<=0)return r<-10?s:s|(a|8388608)>>1-r+13;const i=a>>13;return s|r<<10|i}function Cr(e){return NA[0]=e,Ve[0]}function Br(e){const n=e>>15&1,t=e>>10&31,A=e&1023;let a;if(t===0)if(A===0)a=n<<31;else{let s=A,r=-14;for(;(s&1024)===0;)s<<=1,r--;s&=1023;const i=r+127,o=s<<13;a=n<<31|i<<23|o}else if(t===31)A===0?a=n<<31|2139095040:a=n<<31|2143289344;else{const s=t-15+127,r=A<<13;a=n<<31|s<<23|r}return FA[0]=a,xt[0]}function Ke(e){return Math.max(0,Math.min(255,Math.round(e*255)))}function Er(e){const n=[],t=new Set;function A(a){a&&typeof a=="object"&&!t.has(a)&&(t.add(a),a instanceof ArrayBuffer?n.push(a):ArrayBuffer.isView(a)?n.push(a.buffer):Array.isArray(a)?a.forEach(A):Object.values(a).forEach(A))}return A(e),n}var Qr=class{constructor({allocate:e,dispose:n,valid:t}){this.items=[],this.allocate=e,this.dispose=n,this.valid=t}alloc(e){for(;;){const n=this.items.pop();if(!n)break;if(this.valid(n,e))return n;this.dispose&&this.dispose(n)}return this.allocate(e)}free(e){this.items.push(e)}disposeAll(){let e;for(e=this.items.pop();e;)this.dispose&&this.dispose(e),e=this.items.pop()}};function GA(e,n,t,A,a,s,r,i,o,c,l,g,h,f,u,I,d){const p=d?.rgbMin??0,C=(d?.rgbMax??1)-p,B=Ke((f-p)/C),E=Ke((u-p)/C),y=Ke((I-p)/C),m=Ke(h),x=_r(mr.set(o,c,l,g)),_=x&255,k=x>>>8&255,J=x>>>16&255,b=d?.lnScaleMin??-12,P=254/((d?.lnScaleMax??9)-b),an=s<Ct?0:Math.min(255,Math.max(1,Math.round((Math.log(s)-b)*P)+1)),rn=r<Ct?0:Math.min(255,Math.max(1,Math.round((Math.log(r)-b)*P)+1)),en=i<Ct?0:Math.min(255,Math.max(1,Math.round((Math.log(i)-b)*P)+1)),F=bt(t),O=bt(A),tn=bt(a),R=n*4;e[R]=B|E<<8|y<<16|m<<24,e[R+1]=F|O<<16,e[R+2]=tn|_<<16|k<<24,e[R+3]=an|rn<<8|en<<16|J<<24}var mr=new Z,yr={center:new Q,scales:new Q,quaternion:new Z,color:new yn,opacity:0};function UA(e,n,t){const A=yr,a=n*4,s=e[a],r=e[a+1],i=e[a+2],o=e[a+3],c=t?.rgbMin??0,l=(t?.rgbMax??1)-c;A.color.set(c+(s&255)/255*l,c+(s>>>8&255)/255*l,c+(s>>>16&255)/255*l),A.opacity=(s>>>24&255)/255,A.center.set(St(r&65535),St(r>>>16&65535),St(i&65535));const g=t?.lnScaleMin??-12,h=((t?.lnScaleMax??9)-g)/254,f=o&255;A.scales.x=f===0?0:Math.exp(g+(f-1)*h);const u=o>>>8&255;A.scales.y=u===0?0:Math.exp(g+(u-1)*h);const I=o>>>16&255;return A.scales.z=I===0?0:Math.exp(g+(I-1)*h),Mr(i>>>16&65535|o>>>8&16711680,A.quaternion),A}function sn(e){const n=D,t=Math.max(Zs,Math.min(qn,Math.ceil(e/n))),A=Math.ceil(e/(n*t));return{width:n,height:t,depth:A,maxSplats:n*t*A}}function xr(e){const n=new Vt(e.autoStart);return n.startTime=e.startTime,n.oldTime=e.oldTime,n.elapsedTime=e.elapsedTime,n.running=e.running,n}var wr=nn(`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`);function br(e){const n=new Q;for(const t of e)n.add(t);return n.divideScalar(e.length)}function Sr(e){if(e.length===0)return new Z;const n=e[0].clone();for(let t=1;t<e.length;t++)e[t].dot(e[0])<0?(n.x-=e[t].x,n.y-=e[t].y,n.z-=e[t].z,n.w-=e[t].w):(n.x+=e[t].x,n.y+=e[t].y,n.z+=e[t].z,n.w+=e[t].w);return n.normalize()}function vr(e,n){const[t,A]=[new Q,new Z],[a,s]=[new Q,new Z];return e.decompose(t,A,new Q),n.decompose(a,s,new Q),{distance:t.distanceTo(a),coorient:Math.abs(A.dot(s))}}function vt({matrix1:e,matrix2:n,maxDistance:t,minCoorient:A}){const{distance:a,coorient:s}=vr(e,n);return a<=t&&(A==null||s>=A)}var Dr=new Z,Dt=new Q;function _r(e){const n=Dr.copy(e).normalize();n.w<0&&n.set(-n.x,-n.y,-n.z,-n.w);const t=2*Math.acos(n.w),A=Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z),a=A<1e-6?Dt.set(1,0,0):Dt.set(n.x,n.y,n.z).divideScalar(A),s=Math.abs(a.x)+Math.abs(a.y)+Math.abs(a.z);let r=a.x/s,i=a.y/s;if(a.z<0){const h=r;r=(1-Math.abs(i))*(r>=0?1:-1),i=(1-Math.abs(h))*(i>=0?1:-1)}const o=r*.5+.5,c=i*.5+.5,l=Math.round(o*255),g=Math.round(c*255);return Math.round(t*(255/Math.PI))<<16|g<<8|l}function Mr(e,n){const t=e&255,A=e>>>8&255,a=e>>>16&255,s=t/255,r=A/255;let i=(s-.5)*2,o=(r-.5)*2;const c=1-(Math.abs(i)+Math.abs(o)),l=Math.max(-c,0);i+=i>=0?-l:l,o+=o>=0?-l:l;const g=Dt.set(i,o,c).normalize(),h=a/255*Math.PI*.5,f=Math.sin(h),u=Math.cos(h);return n.set(g.x*f,g.y*f,g.z*f,u),n}function kr(e,n){const t=[];let A=0,a=null;const s=new Ys((o,c)=>{if(t.push(o),A+=o.length,c||A>=n){const l=new Uint8Array(A);let g=0;for(const h of t)l.set(h,g),g+=h.length;a=l.slice(0,n)}}),r=1024;let i=0;for(;a==null&&i<e.length;){const o=e.slice(i,i+r);s.push(o,!1),i+=r}if(a==null&&(s.push(new Uint8Array,!0),a==null))throw new Error("Failed to decompress partial gzip");return a}var YA=class{constructor({graph:e,inputs:n,outputs:t,template:A}){this.graph=e,this.template=A,this.inputs=n??{},this.outputs=t??{};const a=new sr({indent:this.template.indent});for(const r in this.outputs)this.outputs[r]&&a.declares.add(this.outputs[r]);const s=e.compile({inputs:this.inputs,outputs:this.outputs,compile:a});this.shader=A.generate({globals:a.globals,statements:s}),this.uniforms=a.uniforms,this.updaters=a.updaters}prepareMaterial(){return Tr(this)}update(){for(const e of this.updaters)e()}},LA=class{constructor(e){const n=e.match(/^([ \t]*)\{\{\s*GLOBALS\s*\}\}/m),t=e.match(/^([ \t]*)\{\{\s*STATEMENTS\s*\}\}/m);if(!n||!t)throw new Error("Template must contain {{ GLOBALS }} and {{ STATEMENTS }}");this.before=e.substring(0,n.index),this.between=e.substring(n.index+n[0].length,t.index),this.after=e.substring(t.index+t[0].length),this.indent=t[1]}generate({globals:e,statements:n}){return this.before+Array.from(e).join(`

`)+this.between+n.map(t=>this.indent+t).join(`
`)+this.after}},zA=new Map;function Tr(e){let n=zA.get(e);return n||(n=new De({glslVersion:Wt,vertexShader:wr,fragmentShader:e.shader,uniforms:e.uniforms}),zA.set(e,n),n)}function qA(e,n,t="add"){const A=()=>{throw new Error(`Invalid ${t} types: ${e}, ${n}`)};if(e===n)return e;if(e==="int"){if(Jn(n))return n;A()}if(n==="int"){if(Jn(e))return e;A()}if(e==="uint"){if(Hn(n))return n;A()}if(n==="uint"){if(Hn(e))return e;A()}if(e==="float"){if(Ce(n))return n;A()}if(n==="float"){if(Ce(e))return e;A()}throw new Error(`Invalid ${t} types: ${e}, ${n}`)}function Rr(e,n){return qA(e,n,"sub")}function Fr(e,n){const t=()=>{throw new Error(`Invalid mul types: ${e}, ${n}`)},A=a=>a;if(e==="int"){if(Jn(n))return A(n);t()}if(n==="int"){if(Jn(e))return A(e);t()}if(e==="uint"){if(Hn(n))return A(n);t()}if(n==="uint"){if(Hn(e))return A(e);t()}if(e==="float"){if(Ce(n))return A(n);t()}if(n==="float"){if(Ce(e))return A(e);t()}if(Jn(e)||Hn(e)||Jn(n)||Hn(n)){if(e===n)return A(e);t()}if(e==="vec2"){if(n==="vec2"||se(n))return A("vec2");if(n==="mat3x2")return A("vec3");if(n==="mat4x2")return A("vec4");t()}if(e==="vec3"){if(n==="mat2x3")return A("vec2");if(n==="vec3"||re(n))return A("vec3");if(n==="mat4x3")return A("vec4");t()}if(e==="vec4"){if(n==="mat2x4")return A("vec2");if(n==="mat3x4")return A("vec3");if(n==="vec4"||ie(n))return A("vec4");t()}if(n==="vec2"){if(se(e))return A("vec2");if(e==="mat2x3")return A("vec3");if(e==="mat2x4")return A("vec4");t()}if(n==="vec3"){if(e==="mat3x2")return A("vec2");if(re(e))return A("vec3");if(e==="mat3x4")return A("vec4");t()}if(n==="vec4"){if(e==="mat4x2")return A("vec2");if(e==="mat4x3")return A("vec3");if(ie(e))return A("vec4");t()}if(se(e)){if(se(n))return A("mat2");if(n==="mat3x2")return A("mat3x2");if(n==="mat4x2")return A("mat4x2");t()}if(e==="mat2x3"){if(se(n))return A("mat2x3");if(n==="mat3x2")return A("mat3");if(n==="mat4x2")return A("mat4x3");t()}if(e==="mat2x4"){if(se(n))return A("mat2x4");if(n==="mat3x2")return A("mat3x4");if(n==="mat4x2")return A("mat4");t()}if(e==="mat3x2"){if(n==="mat2x3")return A("mat2");if(re(n))return A("mat3x2");if(n==="mat4x3")return A("mat4x2");t()}if(re(e)){if(n==="mat2x3")return A("mat2x3");if(re(n))return A("mat3");if(n==="mat4x3")return A("mat4x3");t()}if(e==="mat3x4"){if(n==="mat2x3")return A("mat2x4");if(re(n))return A("mat3x4");if(n==="mat4x3")return A("mat4");t()}if(e==="mat4x2"){if(n==="mat2x4")return A("mat2");if(n==="mat3x4")return A("mat3x2");if(ie(n))return A("mat4x2");t()}if(e==="mat4x3"){if(n==="mat2x4")return A("mat2x3");if(n==="mat3x4")return A("mat3");if(ie(n))return A("mat4x3");t()}if(ie(e)){if(n==="mat2x4")return A("mat2x4");if(n==="mat3x4")return A("mat3x4");if(ie(n))return A("mat4");t()}throw new Error(`Invalid mul types: ${e}, ${n}`)}var Vn=(e,n)=>new Nr({a:e,b:n}),JA=(e,n)=>new Gr({a:e,b:n}),me=(e,n)=>new Ur({a:e,b:n}),Nr=class extends ze{constructor({a:e,b:n}){super({a:e,b:n,outKey:"sum",outTypeFunc:qA}),this.statements=({inputs:t,outputs:A})=>[`${A.sum} = ${t.a} + ${t.b};`]}},Gr=class extends ze{constructor({a:e,b:n}){super({a:e,b:n,outKey:"difference",outTypeFunc:Rr}),this.statements=({inputs:t,outputs:A})=>[`${A.difference} = ${t.a} - ${t.b};`]}},Ur=class extends ze{constructor({a:e,b:n}){super({a:e,b:n,outKey:"product",outTypeFunc:Fr}),this.statements=({inputs:t,outputs:A})=>[`${A.product} = ${t.a} * ${t.b};`]}},Yr=e=>new zr({value:e}),Lr=e=>new qr({value:e}),HA=e=>new Jr({value:e}),zr=class extends Le{constructor({value:e}){super({a:e,outKey:"uint",outTypeFunc:()=>"uint"}),this.statements=({inputs:n,outputs:t})=>[`${t.uint} = floatBitsToUint(${n.a});`]}},qr=class extends Le{constructor({value:e}){super({a:e,outKey:"uint",outTypeFunc:()=>"uint"}),this.statements=({inputs:n,outputs:t})=>[`${t.uint} = packHalf2x16(${n.a});`]}},Jr=class extends Le{constructor({value:e}){super({a:e,outKey:"rgba8",outTypeFunc:()=>"vec4"}),this.statements=({inputs:n,outputs:t})=>[`uvec4 uRgba = uvec4(${n.a} & 0xffu, (${n.a} >> 8u) & 0xffu, (${n.a} >> 16u) & 0xffu, (${n.a} >> 24u) & 0xffu);`,`${t.rgba8} = vec4(uRgba) / 255.0;`]}},Hr=e=>new jr({a:e}),Pr=e=>new Zr({vector:e}),Vr=({vector:e,vectorType:n,x:t,y:A,z:a,w:s,r,g:i,b:o,a:c})=>new $r({vector:e,vectorType:n,x:t,y:A,z:a,w:s,r,g:i,b:o,a:c}),Kr=(e,n)=>new Xr({a:e,b:n}),jr=class extends Le{constructor({a:e}){super({a:e,outTypeFunc:n=>n,outKey:"normalize"}),this.statements=({inputs:n,outputs:t})=>[`${t.normalize} = normalize(${n.a});`]}};function Or(e){if(e==="float")return"vec2";if(e==="vec2")return"vec3";if(e==="vec3")return"vec4";throw new Error("Invalid type")}var Xr=class extends ze{constructor({a:e,b:n}){const t=Or(Mn(e));super({a:e,b:n,outKey:"extend",outTypeFunc:()=>t}),this.statements=({inputs:A,outputs:a})=>[`${a.extend} = ${t}(${A.a}, ${A.b});`]}};function Wr(e){const n=t=>t;switch(e){case"vec2":return n({x:"float",y:"float",r:"float",g:"float"});case"vec3":return n({x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"});case"vec4":return n({x:"float",y:"float",z:"float",w:"float",r:"float",g:"float",b:"float",a:"float"});case"ivec2":return n({x:"int",y:"int",r:"int",g:"int"});case"ivec3":return n({x:"int",y:"int",z:"int",r:"int",g:"int",b:"int"});case"ivec4":return n({x:"int",y:"int",z:"int",w:"int",r:"int",g:"int",b:"int",a:"int"});case"uvec2":return n({x:"uint",y:"uint",r:"uint",g:"uint"});case"uvec3":return n({x:"uint",y:"uint",z:"uint",r:"uint",g:"uint",b:"uint"});case"uvec4":return n({x:"uint",y:"uint",z:"uint",w:"uint",r:"uint",g:"uint",b:"uint",a:"uint"});default:throw new Error(`Invalid vector type: ${e}`)}}var Zr=class extends q{constructor({vector:e}){const n={vector:Mn(e)},t=Wr(n.vector);super({inTypes:n,outTypes:t,inputs:{vector:e}}),this.statements=({inputs:A,outputs:a})=>{const{x:s,y:r,z:i,w:o,r:c,g:l,b:g,a:h}=a,{vector:f}=A;return[s?`${s} = ${f}.x;`:null,r?`${r} = ${f}.y;`:null,i?`${i} = ${f}.z;`:null,o?`${o} = ${f}.w;`:null,c?`${c} = ${f}.r;`:null,l?`${l} = ${f}.g;`:null,g?`${g} = ${f}.b;`:null,h?`${h} = ${f}.a;`:null].filter(Boolean)}}},$r=class extends q{constructor({vector:e,vectorType:n,x:t,y:A,z:a,w:s,r,g:i,b:o,a:c}){if(!e&&!n)throw new Error("Either vector or vectorType must be provided");const l=n??Mn(e),g=tr(l),h=Ar(l),f={vector:l,x:g,y:g,r:g,g},u={vector:e,x:t,y:A,r,g:i};h>=3&&(Object.assign(f,{z:g,b:g}),Object.assign(u,{z:a,b:o})),h>=4&&(Object.assign(f,{w:g,a:g}),Object.assign(u,{w:s,a:c})),super({inTypes:f,outTypes:{vector:l},inputs:u}),this.statements=({inputs:I,outputs:d})=>{const{vector:p}=d,{vector:C,x:B,y:E,z:y,w:m,r:x,g:_,b:k,a:J}=I,b=[`${p}.x = ${B??x??(C?`${C}.x`:Ue(g))};`,`${p}.y = ${E??_??(C?`${C}.y`:Ue(g))};`];return h>=3&&b.push(`${p}.z = ${y??k??(C?`${C}.z`:Ue(g))};`),h>=4&&b.push(`${p}.w = ${m??J??(C?`${C}.w`:Ue(g))};`),b}}dynoOut(){return new $(this,"vector")}},ni=(e,{scale:n,scales:t,rotate:A,translate:a})=>new ti({position:e,scale:n,scales:t,rotate:A,translate:a}).outputs.position,ei=(e,{scale:n,scales:t,rotate:A})=>new Ai({dir:e,scale:n,scales:t,rotate:A}).outputs.dir,ti=class extends q{constructor({position:e,scale:n,scales:t,rotate:A,translate:a}){super({inTypes:{position:"vec3",scale:"float",scales:"vec3",rotate:"vec4",translate:"vec3"},outTypes:{position:"vec3"},inputs:{position:e,scale:n,scales:t,rotate:A,translate:a},statements:({inputs:s,outputs:r})=>{const{position:i}=r;if(!i)return[];const{scale:o,scales:c,rotate:l,translate:g}=s;return[`${i} = ${s.position??"vec3(0.0, 0.0, 0.0)"};`,o?`${i} *= ${o};`:null,c?`${i} *= ${c};`:null,l?`${i} = quatVec(${l}, ${i});`:null,g?`${i} += ${g};`:null].filter(Boolean)}})}},Ai=class extends q{constructor({dir:e,scale:n,scales:t,rotate:A}){super({inTypes:{dir:"vec3",scale:"float",scales:"vec3",rotate:"vec4"},outTypes:{dir:"vec3"},inputs:{dir:e,scale:n,scales:t,rotate:A},statements:({inputs:a,outputs:s})=>{const{dir:r}=s;if(!r)return[];const{scale:i,scales:o,rotate:c}=a;return[`${r} = ${a.dir??"vec3(0.0, 0.0, 0.0)"};`,i?`${r} *= ${i};`:null,o?`${r} *= ${o};`:null,c?`${r} = quatVec(${c}, ${r});`:null].filter(Boolean)}})}},ai=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp usampler2D;
precision highp isampler2D;
precision highp sampler2DArray;
precision highp usampler2DArray;
precision highp isampler2DArray;
precision highp sampler3D;
precision highp usampler3D;
precision highp isampler3D;

#include <splatDefines>

uniform uint targetLayer;
uniform int targetBase;
uniform int targetCount;

out vec4 target;

{{ GLOBALS }}

void computeReadback(int index) {
    {{ STATEMENTS }}
}

void main() {
    int targetIndex = int(targetLayer << SPLAT_TEX_LAYER_BITS) + int(uint(gl_FragCoord.y) << SPLAT_TEX_WIDTH_BITS) + int(gl_FragCoord.x);
    int index = targetIndex - targetBase;

    if ((index >= 0) && (index < targetCount)) {
        computeReadback(index);
    } else {
        target = vec4(0.0, 0.0, 0.0, 0.0);
    }
}`,je=class Gn{constructor({renderer:n}={}){this.renderer=n,this.capacity=0,this.count=0}dispose(){this.target&&(this.target.dispose(),this.target=void 0)}ensureBuffer(n,t){const A=Math.ceil(Math.max(1,n)/D)*D*4;if(t.byteLength>=A)return t;const a=new ArrayBuffer(A);if(t instanceof ArrayBuffer)return a;const s=t.constructor;return new s(a)}ensureCapacity(n){const{width:t,height:A,depth:a,maxSplats:s}=sn(n);(!this.target||s>this.capacity)&&(this.dispose(),this.capacity=s,this.target=new Ot(t,A,a,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,magFilter:be,minFilter:be}),this.target.texture.format=$n,this.target.texture.type=ge,this.target.texture.internalFormat="RGBA8",this.target.scissorTest=!0)}prepareProgramMaterial(n){let t=Gn.readbackProgram.get(n);if(!t){const a=kn({index:"int"},{rgba8:"vec4"},({index:s})=>(n.inputs.index=s,{rgba8:new fr({rgba8:n.outputs.rgba8})}));Gn.programTemplate||(Gn.programTemplate=new LA(ai)),t=new YA({graph:a,inputs:{index:"index"},outputs:{rgba8:"target"},template:Gn.programTemplate}),Object.assign(t.uniforms,{targetLayer:{value:0},targetBase:{value:0},targetCount:{value:0}}),Gn.readbackProgram.set(n,t)}const A=t.prepareMaterial();return Gn.fullScreenQuad.material=A,{program:t,material:A}}saveRenderState(n){return{xrEnabled:n.xr.enabled,autoClear:n.autoClear}}resetRenderState(n,t){n.setRenderTarget(null),n.xr.enabled=t.xrEnabled,n.autoClear=t.autoClear}process({count:n,material:t}){const A=this.renderer;if(!A)throw new Error("No renderer");if(!this.target)throw new Error("No target");const a=D*qn;t.uniforms.targetBase.value=0,t.uniforms.targetCount.value=n;let s=0;for(;s<n;){const r=Math.floor(s/a),i=r*a,o=Math.min(qn,Math.ceil((n-i)/D));t.uniforms.targetLayer.value=r,this.target.scissor.set(0,0,D,o),A.setRenderTarget(this.target,r),A.xr.enabled=!1,A.autoClear=!1,Gn.fullScreenQuad.render(A),s+=D*o}this.count=n}async read({readback:n}){const t=this.renderer;if(!t)throw new Error("No renderer");if(!this.target)throw new Error("No target");const A=Math.ceil(this.count/D)*D;if(n.byteLength<A*4)throw new Error(`Readback buffer too small: ${n.byteLength} < ${A*4}`);const a=new Uint8Array(n instanceof ArrayBuffer?n:n.buffer),s=D*qn;let r=0;const i=[];for(;r<this.count;){const o=Math.floor(r/s),c=o*s,l=Math.min(qn,Math.ceil((this.count-c)/D));t.setRenderTarget(this.target,o);const g=D*l*4,h=a.subarray(c*4,c*4+g),f=t?.readRenderTargetPixelsAsync(this.target,0,0,D,l,h);i.push(f),r+=D*l}return Promise.all(i).then(()=>n)}render({reader:n,count:t,renderer:A}){if(this.renderer=A||this.renderer,!this.renderer)throw new Error("No renderer");this.ensureCapacity(t);const{program:a,material:s}=this.prepareProgramMaterial(n);a.update();const r=this.saveRenderState(this.renderer);this.process({count:t,material:s}),this.resetRenderState(this.renderer,r)}async readback({readback:n}){if(!this.renderer)throw new Error("No renderer");const t=this.saveRenderState(this.renderer),A=this.read({readback:n});return this.resetRenderState(this.renderer,t),A}async renderReadback({reader:n,count:t,renderer:A,readback:a}){if(this.renderer=A||this.renderer,!this.renderer)throw new Error("No renderer");this.ensureCapacity(t);const{program:s,material:r}=this.prepareProgramMaterial(n);s.update();const i=this.saveRenderState(this.renderer);this.process({count:t,material:r});const o=this.read({readback:a});return this.resetRenderState(this.renderer,i),o}getTexture(){var n;return(n=this.target)==null?void 0:n.texture}};je.programTemplate=null,je.readbackProgram=new Map,je.fullScreenQuad=new BA(new De({visible:!1}));var PA=je,_t=class W{constructor(n={}){this.capacity=0,this.count=0,this.array=null,this.readback=null,this.source=null,this.needsUpdate=!0,this.dyno=new fn({key:"rgbaArray",type:VA,globals:()=>[KA],value:{texture:W.getEmpty(),count:0},update:t=>{var A;return t.texture=((A=this.readback)==null?void 0:A.getTexture())??this.source??W.getEmpty(),t.count=this.count,t}}),n.array?(this.array=n.array,this.capacity=Math.floor(this.array.length/4),this.capacity=Math.floor(this.capacity/D)*D,this.count=Math.min(this.capacity,n.count??Number.POSITIVE_INFINITY)):(this.capacity=n.capacity??0,this.count=0)}dispose(){this.readback&&(this.readback.dispose(),this.readback=null),this.source&&(this.source.dispose(),this.source=null)}ensureCapacity(n){var t;if(!this.array||n>(((t=this.array)==null?void 0:t.length)??0)/4){this.capacity=sn(n).maxSplats;const A=new Uint8Array(this.capacity*4);this.array&&A.set(this.array),this.array=A}return this.array}getTexture(){var n;let t=(n=this.readback)==null?void 0:n.getTexture();return(this.source||this.array)&&(t=this.maybeUpdateSource()),t??W.getEmpty()}maybeUpdateSource(){if(!this.array)throw new Error("No array");if(this.needsUpdate||!this.source){if(this.needsUpdate=!1,this.source){const{width:n,height:t,depth:A}=this.source.image;this.capacity!==n*t*A&&(this.source.dispose(),this.source=null)}if(this.source)this.array.buffer!==this.source.image.data.buffer&&(this.source.image.data=new Uint8Array(this.array.buffer));else{const{width:n,height:t,depth:A}=sn(this.capacity);this.source=new Un(this.array,n,t,A),this.source.format=$n,this.source.type=ge,this.source.internalFormat="RGBA8",this.source.needsUpdate=!0}this.source.needsUpdate=!0}return this.source}render({reader:n,count:t,renderer:A}){this.readback||(this.readback=new PA({renderer:A})),this.readback.render({reader:n,count:t,renderer:A}),this.capacity=this.readback.capacity,this.count=this.readback.count}fromPackedSplats({packedSplats:n,base:t,count:A,renderer:a}){const{dynoSplats:s,dynoBase:r,dynoCount:i,reader:o}=W.makeDynos();return s.packedSplats=n,r.value=t,i.value=A,this.render({reader:o,count:A,renderer:a}),this}async read(){if(!this.readback)throw new Error("No readback");return(!this.array||this.array.length<this.count*4)&&(this.array=new Uint8Array(this.capacity*4)),(await this.readback.readback({readback:this.array})).subarray(0,this.count*4)}static getEmpty(){return W.emptySource||(W.emptySource=new Un(new Uint8Array(4),1,1,1),W.emptySource.format=$n,W.emptySource.type=ge,W.emptySource.internalFormat="RGBA8",W.emptySource.needsUpdate=!0),W.emptySource}static makeDynos(){if(!W.dynos){const n=new Ft,t=new Qt({value:0}),A=new Qt({value:0}),a=kn({index:"int"},{rgba8:"vec4"},({index:s})=>{if(!s)throw new Error("index is undefined");return s=Vn(s,t),{rgba8:Je(ir(n,s,t,A)).outputs.rgba}});W.dynos={dynoSplats:n,dynoBase:t,dynoCount:A,reader:a}}return W.dynos}};_t.emptySource=null,_t.dynos=null;var si=_t,VA={type:"RgbaArray"},KA=nn(`
  struct RgbaArray {
    sampler2DArray texture;
    int count;
  };
`);function ri(e,n){return new q({inTypes:{rgba:VA,index:"int"},outTypes:{rgba:"vec4"},inputs:{rgba:e,index:n},globals:()=>[KA],statements:({inputs:t,outputs:A})=>wn(`
        if ((index >= 0) && (index < ${t.rgba}.count)) {
          ${A.rgba} = texelFetch(${t.rgba}.texture, splatTexCoord(index), 0);
        } else {
          ${A.rgba} = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `)}).outputs.rgba}function ii(e){switch(e){case"all":return 0;case"plane":return 1;case"sphere":return 2;case"box":return 3;case"ellipsoid":return 4;case"cylinder":return 5;case"capsule":return 6;case"infinite_cone":return 7;default:throw new Error(`Unknown SDF type: ${e}`)}}function oi(e){switch(e){case"multiply":return 0;case"set_rgb":return 1;case"add_rgba":return 2;default:throw new Error(`Unknown blend mode: ${e}`)}}var li=class extends at{constructor(e={}){super();const{type:n,invert:t,opacity:A,color:a,displace:s,radius:r}=e;this.type=n??"sphere",this.invert=t??!1,this.opacity=A??1,this.color=a??new yn(1,1,1),this.displace=s??new Q(0,0,0),this.radius=r??0}},jA=class da extends at{constructor(n={}){const{name:t,rgbaBlendMode:A="multiply",sdfSmooth:a=0,softEdge:s=0,invert:r=!1,sdfs:i=null}=n;super(),this.rgbaBlendMode=A,this.sdfSmooth=a,this.softEdge=s,this.invert=r,this.sdfs=i,this.ordering=da.nextOrdering++,this.name=t??`Edit ${this.ordering}`}addSdf(n){this.sdfs==null&&(this.sdfs=[]),this.sdfs.includes(n)||this.sdfs.push(n)}removeSdf(n){this.sdfs!=null&&(this.sdfs=this.sdfs.filter(t=>t!==n))}};jA.nextOrdering=1;var OA=jA,ci=class{constructor({maxSdfs:e,maxEdits:n}){this.maxSdfs=Math.max(16,e??0),this.numSdfs=0,this.sdfData=new Uint32Array(this.maxSdfs*8*4),this.sdfFloatData=new Float32Array(this.sdfData.buffer),this.sdfTexture=this.newSdfTexture(this.sdfData,this.maxSdfs),this.dynoSdfArray=new fn({key:"sdfArray",type:XA,globals:()=>[WA],value:{numSdfs:0,sdfTexture:this.sdfTexture},update:t=>(t.numSdfs=this.numSdfs,t.sdfTexture=this.sdfTexture,t)}),this.maxEdits=Math.max(16,n??0),this.numEdits=0,this.editData=new Uint32Array(this.maxEdits*4),this.editFloatData=new Float32Array(this.editData.buffer),this.dynoNumEdits=new Qt({value:0}),this.dynoEdits=this.newEdits(this.editData,this.maxEdits)}newSdfTexture(e,n){const t=new Pa(e,8,n,ne,Yn);return t.internalFormat="RGBA32UI",t.needsUpdate=!0,t}newEdits(e,n){return new fn({key:"edits",type:"uvec4",count:n,globals:()=>[ZA],value:e})}ensureCapacity({maxSdfs:e,maxEdits:n}){let t=!1;return e>this.sdfTexture.image.height&&(this.sdfTexture.dispose(),this.maxSdfs=Math.max(this.maxSdfs*2,e),this.sdfData=new Uint32Array(this.maxSdfs*8*4),this.sdfFloatData=new Float32Array(this.sdfData.buffer),this.sdfTexture=this.newSdfTexture(this.sdfData,this.maxSdfs)),n>(this.dynoEdits.count??0)&&(this.maxEdits=Math.max(this.maxEdits*2,n),this.editData=new Uint32Array(this.maxEdits*4),this.editFloatData=new Float32Array(this.editData.buffer),this.dynoEdits=this.newEdits(this.editData,this.maxEdits),t=!0),t}updateEditData(e,n){const t=this.editData[e]!==n;return this.editData[e]=n,t}updateEditFloatData(e,n){oe[0]=n;const t=this.editFloatData[e]!==oe[0];return t&&(this.editFloatData[e]=oe[0]),t}encodeEdit(e,{sdfFirst:n,sdfCount:t,invert:A,rgbaBlendMode:a,softEdge:s,sdfSmooth:r}){const i=e*4;let o=!1;return o=this.updateEditData(i+0,a|(A?256:0))||o,o=this.updateEditData(i+1,n|t<<16)||o,o=this.updateEditFloatData(i+2,s)||o,o=this.updateEditFloatData(i+3,r)||o,o}updateSdfData(e,n){const t=this.sdfData[e]!==n;return this.sdfData[e]=n,t}updateSdfFloatData(e,n){oe[0]=n;const t=this.sdfFloatData[e]!==oe[0];return t&&(this.sdfFloatData[e]=oe[0]),t}encodeSdf(e,{sdfType:n,invert:t,center:A,quaternion:a,scale:s,sizes:r},i){const o=e*32,c=n|(t?256:0);let l=!1;l=this.updateSdfFloatData(o+0,A?.x??0)||l,l=this.updateSdfFloatData(o+1,A?.y??0)||l,l=this.updateSdfFloatData(o+2,A?.z??0)||l,l=this.updateSdfData(o+3,c)||l,l=this.updateSdfFloatData(o+4,a?.x??0)||l,l=this.updateSdfFloatData(o+5,a?.y??0)||l,l=this.updateSdfFloatData(o+6,a?.z??0)||l,l=this.updateSdfFloatData(o+7,a?.w??0)||l,l=this.updateSdfFloatData(o+8,s?.x??0)||l,l=this.updateSdfFloatData(o+9,s?.y??0)||l,l=this.updateSdfFloatData(o+10,s?.z??0)||l,l=this.updateSdfData(o+11,0)||l,l=this.updateSdfFloatData(o+12,r?.x??0)||l,l=this.updateSdfFloatData(o+13,r?.y??0)||l,l=this.updateSdfFloatData(o+14,r?.z??0)||l,l=this.updateSdfFloatData(o+15,r?.w??0)||l;const g=Math.min(4,i.length);for(let h=0;h<g;++h){const f=o+16+h*4;l=this.updateSdfFloatData(f+0,i[h].x)||l,l=this.updateSdfFloatData(f+1,i[h].y)||l,l=this.updateSdfFloatData(f+2,i[h].z)||l,l=this.updateSdfFloatData(f+3,i[h].w)||l}return l}update(e){const n=e.reduce((l,{sdfs:g})=>l+g.length,0),t=this.ensureCapacity({maxEdits:e.length,maxSdfs:n}),A=[new gn,new gn],a=new Q,s=new Z,r=new Q,i=new gn;let o=0,c=t;e.length!==this.dynoNumEdits.value&&(this.dynoNumEdits.value=e.length,this.numEdits=e.length,c=!0);for(const[l,{edit:g,sdfs:h}]of e.entries()){c=this.encodeEdit(l,{sdfFirst:o,sdfCount:h.length,invert:g.invert,rgbaBlendMode:oi(g.rgbaBlendMode),softEdge:g.softEdge,sdfSmooth:g.sdfSmooth})||c;let f=!1;for(const u of h)i.set(u.scale.x,u.scale.y,u.scale.z,u.radius),u.scale.setScalar(1),u.updateMatrixWorld(),u.matrixWorld.clone().invert().decompose(a,s,r),u.scale.set(i.x,i.y,i.z),u.updateMatrixWorld(),A[0].set(u.color.r,u.color.g,u.color.b,u.opacity),A[1].set(u.displace.x,u.displace.y,u.displace.z,1),f=this.encodeSdf(o,{sdfType:ii(u.type),invert:u.invert,center:a,quaternion:s,scale:r,sizes:i},A)||f,o+=1;this.numSdfs=o,f&&(this.sdfTexture.needsUpdate=!0),c||(c=f)}return{updated:c,dynoUpdated:t}}modify(e){return gi(e,this.dynoSdfArray,this.dynoNumEdits,this.dynoEdits)}},XA={type:"SdfArray"},WA=nn(`
  struct SdfArray {
    int numSdfs;
    usampler2D sdfTexture;
  };

  void unpackSdfArray(
    usampler2D sdfTexture, int sdfIndex, out uint flags,
    out vec3 center, out vec4 quaternion, out vec3 scale, out vec4 sizes,
    int numValues, out vec4 values[4]
  ) {
    uvec4 temp = texelFetch(sdfTexture, ivec2(0, sdfIndex), 0);
    flags = temp.w;
    center = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(1, sdfIndex), 0);
    quaternion = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    temp = texelFetch(sdfTexture, ivec2(2, sdfIndex), 0);
    scale = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(3, sdfIndex), 0);
    sizes = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    for (int i = 0; i < numValues; ++i) {
      temp = texelFetch(sdfTexture, ivec2(4 + i, sdfIndex), 0);
      values[i] = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));
    }
  }

  const uint SDF_FLAG_TYPE = 0xFFu;
  const uint SDF_FLAG_INVERT = 1u << 8u;

  const uint SDF_TYPE_ALL = 0u;
  const uint SDF_TYPE_PLANE = 1u;
  const uint SDF_TYPE_SPHERE = 2u;
  const uint SDF_TYPE_BOX = 3u;
  const uint SDF_TYPE_ELLIPSOID = 4u;
  const uint SDF_TYPE_CYLINDER = 5u;
  const uint SDF_TYPE_CAPSULE = 6u;
  const uint SDF_TYPE_INFINITE_CONE = 7u;

  float evaluateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 outValues[4]
  ) {
    float distanceAccum = (smoothK == 0.0) ? 1.0 / 0.0 : 0.0;
    float maxExp = -1.0 / 0.0;
    for (int i = 0; i < numValues; ++i) {
        outValues[i] = vec4(0.0);
    }

    uint flags;
    vec3 center, scale;
    vec4 quaternion, sizes;
    vec4 values[4];

    int sdfLast = min(sdfFirst + sdfCount, numSdfs);
    for (int index = sdfFirst; index < sdfLast; ++index) {
      unpackSdfArray(sdfTexture, index, flags, center, quaternion, scale, sizes, numValues, values);
      uint sdfType = flags & SDF_FLAG_TYPE;
      vec3 sdfPos = quatVec(quaternion, pos * scale) + center;

      float distance;
      switch (sdfType) {
        case SDF_TYPE_ALL:
          distance = -1.0 / 0.0;
          break;
        case SDF_TYPE_PLANE: {
          distance = sdfPos.z;
          break;
        }
        case SDF_TYPE_SPHERE: {
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_BOX: {
          vec3 q = abs(sdfPos) - sizes.xyz + sizes.w;
          distance = length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - sizes.w;
          break;
        }
        case SDF_TYPE_ELLIPSOID: {
          vec3 sizes = sizes.xyz;
          float k0 = length(sdfPos / sizes);
          float k1 = length(sdfPos / dot(sizes, sizes));
          distance = k0 * (k0 - 1.0) / k1;
          break;
        }
        case SDF_TYPE_CYLINDER: {
          vec2 d = abs(vec2(length(sdfPos.xz), sdfPos.y)) - sizes.wy;
          distance = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
          break;
        }
        case SDF_TYPE_CAPSULE: {
          sdfPos.y -= clamp(sdfPos.y, -0.5 * sizes.y, 0.5 * sizes.y);
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_INFINITE_CONE: {
          float angle = 0.25 * PI * sizes.w;
          vec2 c = vec2(sin(angle), cos(angle));
          vec2 q = vec2(length(sdfPos.xy), -sdfPos.z);
          float d = length(q - c * max(dot(q, c), 0.0));
          distance = d * (((q.x * c.y - q.y * c.x) < 0.0) ? -1.0 : 1.0);
          break;
        }
      }

      if ((flags & SDF_FLAG_INVERT) != 0u) {
        distance = -distance;
      }

      if (smoothK == 0.0) {
        if (distance < distanceAccum) {
          distanceAccum = distance;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] = values[i];
          }
        }
      } else {
        float scaledDistance = -distance / smoothK;
        if (scaledDistance > maxExp) {
          float scale = exp(maxExp - scaledDistance);
          distanceAccum *= scale;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] *= scale;
          }
          maxExp = scaledDistance;
        }

        float weight = exp(scaledDistance - maxExp);
        distanceAccum += weight;
        for (int i = 0; i < numValues; ++i) {
          outValues[i] += weight * values[i];
        }
      }
    }

    if (smoothK == 0.0) {
      return distanceAccum;
    } else {
      // Very distant SDFs may result in 0 accumulation
      if (distanceAccum == 0.0) {
        return 1.0 / 0.0;
      }
      for (int i = 0; i < numValues; ++i) {
        outValues[i] /= distanceAccum;
      }
      return (-log(distanceAccum) - maxExp) * smoothK;
    }
  }

  float modulateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 values[4],
    float softEdge, bool invert
  ) {
    float distance = evaluateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, numValues, values);
    if (invert) {
      distance = -distance;
    }

    return (softEdge == 0.0) ? ((distance < 0.0) ? 1.0 : 0.0)
      : clamp(-distance / softEdge + 0.5, 0.0, 1.0);
  }
`),ZA=nn(`
  const uint EDIT_FLAG_BLEND = 0xFFu;
  const uint EDIT_BLEND_MULTIPLY = 0u;
  const uint EDIT_BLEND_SET_RGB = 1u;
  const uint EDIT_BLEND_ADD_RGBA = 2u;
  const uint EDIT_FLAG_INVERT = 0x100u;

  void decodeEdit(
    uvec4 packedEdit, out int sdfFirst, out int sdfCount,
    out bool invert, out uint rgbaBlendMode, out float softEdge, out float sdfSmooth
  ) {
    rgbaBlendMode = packedEdit.x & EDIT_FLAG_BLEND;
    invert = (packedEdit.x & EDIT_FLAG_INVERT) != 0u;

    sdfFirst = int(packedEdit.y & 0xFFFFu);
    sdfCount = int(packedEdit.y >> 16u);

    softEdge = uintBitsToFloat(packedEdit.z);
    sdfSmooth = uintBitsToFloat(packedEdit.w);
  }

  void applyRgbaDisplaceEdit(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, inout vec3 pos,
    float smoothK, float softEdge, bool invert, uint rgbaBlendMode, inout vec4 rgba
  ) {
    vec4 values[4];
    float modulate = modulateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, 2, values, softEdge, invert);
    // On Android, moving values[0] is necessary to work around a compiler bug.
    vec4 sdfRgba = values[0];
    vec4 sdfDisplaceScale = values[1];

    vec4 target;
    switch (rgbaBlendMode) {
      case EDIT_BLEND_MULTIPLY:
        target = rgba * sdfRgba;
        break;
      case EDIT_BLEND_SET_RGB:
        target = vec4(sdfRgba.rgb, rgba.a * sdfRgba.a);
        break;
      case EDIT_BLEND_ADD_RGBA:
        target = rgba + sdfRgba;
        break;
      default:
        // Debug output if blend mode not set
        target = vec4(fract(pos), 1.0);
    }
    rgba = mix(rgba, target, modulate);
    pos += sdfDisplaceScale.xyz * modulate;
  }

  void applyPackedRgbaDisplaceEdit(uvec4 packedEdit, usampler2D sdfTexture, int numSdfs, inout vec3 pos, inout vec4 rgba) {
    int sdfFirst, sdfCount;
    bool invert;
    uint rgbaBlendMode;
    float softEdge, sdfSmooth;
    decodeEdit(packedEdit, sdfFirst, sdfCount, invert, rgbaBlendMode, softEdge, sdfSmooth);
    applyRgbaDisplaceEdit(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, sdfSmooth, softEdge, invert, rgbaBlendMode, rgba);
  }
`);function gi(e,n,t,A){return new q({inTypes:{gsplat:Y,sdfArray:XA,numEdits:"int",rgbaDisplaceEdits:"uvec4"},outTypes:{gsplat:Y},globals:()=>[WA,ZA],inputs:{gsplat:e,sdfArray:n,numEdits:t,rgbaDisplaceEdits:A},statements:({inputs:a,outputs:s})=>{const{sdfArray:r,numEdits:i,rgbaDisplaceEdits:o}=a,{gsplat:c}=s;return wn(`
        ${c} = ${a.gsplat};
        if (isGsplatActive(${c}.flags)) {
          for (int editIndex = 0; editIndex < ${i}; ++editIndex) {
            applyPackedRgbaDisplaceEdit(
              ${o}[editIndex], ${r}.sdfTexture, ${r}.numSdfs,
              ${c}.center, ${c}.rgba
            );
          }
        }
      `)}}).outputs.gsplat}var oe=new Float32Array(1),hi=class{constructor(e){this.modifier=e,this.cache=new Map}apply(e){let n=this.cache.get(e);return n||(n=kn({index:"int"},{gsplat:Y},({index:t})=>{const{gsplat:A}=e.apply({index:t});return this.modifier.apply({gsplat:A})}),this.cache.set(e,n)),n}},Oe=class{constructor(){this.scale=new Qe({value:Number.NEGATIVE_INFINITY}),this.rotate=new Pe({value:new Z(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)}),this.translate=new He({value:new Q(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)})}apply(e){return ni(e,{scale:this.scale,rotate:this.rotate,translate:this.translate})}applyDir(e){return ei(e,{rotate:this.rotate})}applyGsplat(e){return kA(e,{scale:this.scale,rotate:this.rotate,translate:this.translate})}updateFromMatrix(e){const n=new Q,t=new Z,A=new Q;e.decompose(A,t,n);const a=(n.x+n.y+n.z)/3;let s=!1;return a!==this.scale.value&&(this.scale.value=a,s=!0),A.equals(this.translate.value)||(this.translate.value.copy(A),s=!0),t.equals(this.rotate.value)||(this.rotate.value.copy(t),s=!0),s}update(e){return e.updateMatrixWorld(),this.updateFromMatrix(e.matrixWorld)}},Mt=class extends at{constructor({numSplats:e,generator:n,construct:t,update:A}){if(super(),this.numSplats=e??0,this.generator=n,this.frameUpdate=A,this.version=0,t){const a=t(this);Object.assign(this,a)}}updateVersion(){this.version+=1}set needsUpdate(e){e&&this.updateVersion()}},ye=class zt extends Mt{constructor(n={}){const t={transform:new Oe,viewToWorld:new Oe,worldToView:new Oe,viewToObject:new Oe,recolor:new Pe({value:new gn(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY)}),time:new Qe({value:0}),deltaTime:new Qe({value:0})};if(super({update:({time:A,deltaTime:a,viewToWorld:s,globalEdits:r})=>this.update({time:A,deltaTime:a,viewToWorld:s,globalEdits:r})}),this.isInitialized=!1,this.recolor=new yn(1,1,1),this.opacity=1,this.enableViewToObject=!1,this.enableViewToWorld=!1,this.enableWorldToView=!1,this.skinning=null,this.edits=null,this.rgbaDisplaceEdits=null,this.splatRgba=null,this.maxSh=3,this.packedSplats=n.packedSplats??new jn,this.packedSplats.splatEncoding=n.splatEncoding??{...$e},this.numSplats=this.packedSplats.numSplats,this.editable=n.editable??!0,this.onFrame=n.onFrame,this.context=t,this.objectModifier=n.objectModifier,this.worldModifier=n.worldModifier,this.updateGenerator(),n.url||n.fileBytes||n.constructSplats||n.packedSplats&&!n.packedSplats.isInitialized)this.initialized=this.asyncInitialize(n).then(async()=>{if(this.updateGenerator(),this.isInitialized=!0,n.onLoad){const A=n.onLoad(this);A instanceof Promise&&await A}return this});else if(this.isInitialized=!0,this.initialized=Promise.resolve(this),n.onLoad){const A=n.onLoad(this);A instanceof Promise&&(this.initialized=A.then(()=>this))}this.add(Qi())}async asyncInitialize(n){const{url:t,fileBytes:A,fileType:a,fileName:s,maxSplats:r,constructSplats:i,splatEncoding:o}=n;if(t||A||i){const c={url:t,fileBytes:A,fileType:a,fileName:s,maxSplats:r,construct:i,splatEncoding:o};this.packedSplats.reinitialize(c)}this.packedSplats&&(await this.packedSplats.initialized,this.numSplats=this.packedSplats.numSplats,this.updateGenerator())}static async staticInitialize(){await DA(),zt.isStaticInitialized=!0}pushSplat(n,t,A,a,s){this.packedSplats.pushSplat(n,t,A,a,s)}forEachSplat(n){this.packedSplats.forEachSplat(n)}dispose(){this.packedSplats.dispose()}getBoundingBox(n=!0){if(!this.initialized)throw new Error("Cannot get bounding box before SplatMesh is initialized");const t=new Q(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),A=new Q(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),a=new Q,s=[-1,1];return this.packedSplats.forEachSplat((r,i,o,c,l,g)=>{if(n)t.min(i),A.max(i);else for(const h of s)for(const f of s)for(const u of s)a.set(h*o.x,f*o.y,u*o.z),a.applyQuaternion(c),a.add(i),t.min(a),A.max(a)}),new _e(t,A)}constructGenerator(n){const{transform:t,viewToObject:A,recolor:a}=n,s=kn({index:"int"},{gsplat:Y},({index:r})=>{if(!r)throw new Error("index is undefined");let i=Ee(this.packedSplats.dyno,r);if(this.maxSh>=1){const{sh1Texture:c,sh2Texture:l,sh3Texture:g}=this.ensureShTextures();if(c){let h=function(C,B){const{x:E,y}=Pr(B).outputs;return Vn(me(Vn(E,y),Be("float",.5)),me(C,me(JA(y,E),Be("float",.5))))};const f=A.translate,{center:u}=Je(i).outputs,I=Hr(JA(u,f));let d=h(pi(i,c,I),this.packedSplats.dynoSh1MinMax);if(this.maxSh>=2&&l){const C=di(i,l,I);d=Vn(d,h(C,this.packedSplats.dynoSh2MinMax))}if(this.maxSh>=3&&g){const C=Ci(i,g,I);d=Vn(d,h(C,this.packedSplats.dynoSh3MinMax))}let{rgba:p}=Je(i).outputs;p=Vn(p,Kr(d,Be("float",0))),i=Bt({gsplat:i,rgba:p})}}if(this.splatRgba){const c=ri(this.splatRgba.dyno,r);i=Bt({gsplat:i,rgba:c})}this.skinning&&(i=this.skinning.modify(i)),this.objectModifier&&(i=this.objectModifier.apply({gsplat:i}).gsplat),i=t.applyGsplat(i);const o=me(a,Je(i).outputs.rgba);return i=Bt({gsplat:i,rgba:o}),this.rgbaDisplaceEdits&&(i=this.rgbaDisplaceEdits.modify(i)),this.worldModifier&&(i=this.worldModifier.apply({gsplat:i}).gsplat),{gsplat:i}});this.generator=s}updateGenerator(){this.constructGenerator(this.context)}update({time:n,viewToWorld:t,deltaTime:A,globalEdits:a}){var s;this.numSplats=this.packedSplats.numSplats,this.context.time.value=n,this.context.deltaTime.value=A,zt.dynoTime.value=n;const{transform:r,viewToObject:i,recolor:o}=this.context;let c=r.update(this);this.context.viewToWorld.updateFromMatrix(t)&&this.enableViewToWorld&&(c=!0);const l=t.clone().invert();this.context.worldToView.updateFromMatrix(l)&&this.enableWorldToView&&(c=!0);const g=new N().compose(r.translate.value,r.rotate.value,new Q().setScalar(r.scale.value)).invert().multiply(t);i.updateFromMatrix(g)&&(this.enableViewToObject||this.packedSplats.extra.sh1)&&(c=!0);const h=new gn(this.recolor.r,this.recolor.g,this.recolor.b,this.opacity);h.equals(o.value)||(o.value.copy(h),c=!0);const f=this.editable?(this.edits??[]).concat(a):[];this.editable&&!this.edits&&this.traverseVisible(I=>{I instanceof OA&&f.push(I)}),f.sort((I,d)=>I.ordering-d.ordering);const u=f.map(I=>{if(I.sdfs!=null)return{edit:I,sdfs:I.sdfs};const d=[];return I.traverseVisible(p=>{p instanceof li&&d.push(p)}),{edit:I,sdfs:d}});if(u.length>0&&!this.rgbaDisplaceEdits){const I=u.length,d=u.reduce((p,C)=>p+C.sdfs.length,0);this.rgbaDisplaceEdits=new ci({maxEdits:I,maxSdfs:d}),this.updateGenerator()}if(this.rgbaDisplaceEdits){const I=this.rgbaDisplaceEdits.update(u);c||(c=I.updated),I.dynoUpdated&&this.updateGenerator()}c&&this.updateVersion(),(s=this.onFrame)==null||s.call(this,{mesh:this,time:n,deltaTime:A})}raycast(n,t){var A,a;if(!this.packedSplats.packedArray||!this.packedSplats.numSplats)return;const{near:s,far:r,ray:i}=n,o=this.matrixWorld.clone().invert(),c=new Xt().setFromMatrix4(o),l=i.origin.clone().applyMatrix4(o),g=i.direction.clone().applyMatrix3(c),h=new Q;o.decompose(new Q,new Z,h),(h.x*h.y*h.z)**(1/3);const f=js(l.x,l.y,l.z,g.x,g.y,g.z,s,r,this.packedSplats.numSplats,this.packedSplats.packedArray,!0,((A=this.packedSplats.splatEncoding)==null?void 0:A.lnScaleMin)??-12,((a=this.packedSplats.splatEncoding)==null?void 0:a.lnScaleMax)??9);for(const u of f){const I=i.direction.clone().multiplyScalar(u).add(i.origin);t.push({distance:u,point:I,object:this})}}ensureShTextures(){if(!this.packedSplats.extra.sh1)return{};let n=this.packedSplats.extra.sh1Texture;if(!n){let a=this.packedSplats.extra.sh1;const{width:s,height:r,depth:i,maxSplats:o}=sn(a.length/2);if(a.length<o*2){const l=new Uint32Array(o*2);l.set(a),this.packedSplats.extra.sh1=l,a=l}const c=new Un(a,s,r,i);c.format=Ta,c.type=Yn,c.internalFormat="RG32UI",c.needsUpdate=!0,n=new yt({value:c,key:"sh1"}),this.packedSplats.extra.sh1Texture=n}if(!this.packedSplats.extra.sh2)return{sh1Texture:n};let t=this.packedSplats.extra.sh2Texture;if(!t){let a=this.packedSplats.extra.sh2;const{width:s,height:r,depth:i,maxSplats:o}=sn(a.length/4);if(a.length<o*4){const l=new Uint32Array(o*4);l.set(a),this.packedSplats.extra.sh2=l,a=l}const c=new Un(a,s,r,i);c.format=ne,c.type=Yn,c.internalFormat="RGBA32UI",c.needsUpdate=!0,t=new yt({value:c,key:"sh2"}),this.packedSplats.extra.sh2Texture=t}if(!this.packedSplats.extra.sh3)return{sh1Texture:n,sh2Texture:t};let A=this.packedSplats.extra.sh3Texture;if(!A){let a=this.packedSplats.extra.sh3;const{width:s,height:r,depth:i,maxSplats:o}=sn(a.length/4);if(a.length<o*4){const l=new Uint32Array(o*4);l.set(a),this.packedSplats.extra.sh3=l,a=l}const c=new Un(a,s,r,i);c.format=ne,c.type=Yn,c.internalFormat="RGBA32UI",c.needsUpdate=!0,A=new yt({value:c,key:"sh3"}),this.packedSplats.extra.sh3Texture=A}return{sh1Texture:n,sh2Texture:t,sh3Texture:A}}};ye.staticInitialized=ye.staticInitialize(),ye.isStaticInitialized=!1,ye.dynoTime=new Qe({value:0});var kt=ye,ui=nn(`
  vec3 evaluateSH1(Gsplat gsplat, usampler2DArray sh1, vec3 viewDir) {
    // Extract sint7 values packed into 2 x uint32
    uvec2 packed = texelFetch(sh1, splatTexCoord(gsplat.index), 0).rg;
    vec3 sh1_0 = vec3(ivec3(
      int(packed.x << 25u) >> 25,
      int(packed.x << 18u) >> 25,
      int(packed.x << 11u) >> 25
    )) / 63.0;
    vec3 sh1_1 = vec3(ivec3(
      int(packed.x << 4u) >> 25,
      int((packed.x >> 3u) | (packed.y << 29u)) >> 25,
      int(packed.y << 22u) >> 25
    )) / 63.0;
    vec3 sh1_2 = vec3(ivec3(
      int(packed.y << 15u) >> 25,
      int(packed.y << 8u) >> 25,
      int(packed.y << 1u) >> 25
    )) / 63.0;

    return sh1_0 * (-0.4886025 * viewDir.y)
      + sh1_1 * (0.4886025 * viewDir.z)
      + sh1_2 * (-0.4886025 * viewDir.x);
  }
`),Ii=nn(`
  vec3 evaluateSH2(Gsplat gsplat, usampler2DArray sh2, vec3 viewDir) {
    // Extract sint8 values packed into 4 x uint32
    uvec4 packed = texelFetch(sh2, splatTexCoord(gsplat.index), 0);
    vec3 sh2_0 = vec3(ivec3(
      int(packed.x << 24u) >> 24,
      int(packed.x << 16u) >> 24,
      int(packed.x << 8u) >> 24
    )) / 127.0;
    vec3 sh2_1 = vec3(ivec3(
      int(packed.x) >> 24,
      int(packed.y << 24u) >> 24,
      int(packed.y << 16u) >> 24
    )) / 127.0;
    vec3 sh2_2 = vec3(ivec3(
      int(packed.y << 8u) >> 24,
      int(packed.y) >> 24,
      int(packed.z << 24u) >> 24
    )) / 127.0;
    vec3 sh2_3 = vec3(ivec3(
      int(packed.z << 16u) >> 24,
      int(packed.z << 8u) >> 24,
      int(packed.z) >> 24
    )) / 127.0;
    vec3 sh2_4 = vec3(ivec3(
      int(packed.w << 24u) >> 24,
      int(packed.w << 16u) >> 24,
      int(packed.w << 8u) >> 24
    )) / 127.0;

    return sh2_0 * (1.0925484 * viewDir.x * viewDir.y)
      + sh2_1 * (-1.0925484 * viewDir.y * viewDir.z)
      + sh2_2 * (0.3153915 * (2.0 * viewDir.z * viewDir.z - viewDir.x * viewDir.x - viewDir.y * viewDir.y))
      + sh2_3 * (-1.0925484 * viewDir.x * viewDir.z)
      + sh2_4 * (0.5462742 * (viewDir.x * viewDir.x - viewDir.y * viewDir.y));
  }
`),fi=nn(`
  vec3 evaluateSH3(Gsplat gsplat, usampler2DArray sh3, vec3 viewDir) {
    // Extract sint6 values packed into 4 x uint32
    uvec4 packed = texelFetch(sh3, splatTexCoord(gsplat.index), 0);
    vec3 sh3_0 = vec3(ivec3(
      int(packed.x << 26u) >> 26,
      int(packed.x << 20u) >> 26,
      int(packed.x << 14u) >> 26
    )) / 31.0;
    vec3 sh3_1 = vec3(ivec3(
      int(packed.x << 8u) >> 26,
      int(packed.x << 2u) >> 26,
      int((packed.x >> 4u) | (packed.y << 28u)) >> 26
    )) / 31.0;
    vec3 sh3_2 = vec3(ivec3(
      int(packed.y << 22u) >> 26,
      int(packed.y << 16u) >> 26,
      int(packed.y << 10u) >> 26
    )) / 31.0;
    vec3 sh3_3 = vec3(ivec3(
      int(packed.y << 4u) >> 26,
      int((packed.y >> 2u) | (packed.z << 30u)) >> 26,
      int(packed.z << 24u) >> 26
    )) / 31.0;
    vec3 sh3_4 = vec3(ivec3(
      int(packed.z << 18u) >> 26,
      int(packed.z << 12u) >> 26,
      int(packed.z << 6u) >> 26
    )) / 31.0;
    vec3 sh3_5 = vec3(ivec3(
      int(packed.z) >> 26,
      int(packed.w << 26u) >> 26,
      int(packed.w << 20u) >> 26
    )) / 31.0;
    vec3 sh3_6 = vec3(ivec3(
      int(packed.w << 14u) >> 26,
      int(packed.w << 8u) >> 26,
      int(packed.w << 2u) >> 26
    )) / 31.0;

    float xx = viewDir.x * viewDir.x;
    float yy = viewDir.y * viewDir.y;
    float zz = viewDir.z * viewDir.z;
    float xy = viewDir.x * viewDir.y;
    float yz = viewDir.y * viewDir.z;
    float zx = viewDir.z * viewDir.x;

    return sh3_0 * (-0.5900436 * viewDir.y * (3.0 * xx - yy))
      + sh3_1 * (2.8906114 * xy * viewDir.z) +
      + sh3_2 * (-0.4570458 * viewDir.y * (4.0 * zz - xx - yy))
      + sh3_3 * (0.3731763 * viewDir.z * (2.0 * zz - 3.0 * xx - 3.0 * yy))
      + sh3_4 * (-0.4570458 * viewDir.x * (4.0 * zz - xx - yy))
      + sh3_5 * (1.4453057 * viewDir.z * (xx - yy))
      + sh3_6 * (-0.5900436 * viewDir.x * (xx - 3.0 * yy));
  }
`);function pi(e,n,t){return Ye({inTypes:{gsplat:Y,sh1:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:e,sh1:n,viewDir:t},globals:()=>[bn,ui],statements:({inputs:A,outputs:a})=>wn(`
        if (isGsplatActive(${A.gsplat}.flags)) {
          ${a.rgb} = evaluateSH1(${A.gsplat}, ${A.sh1}, ${A.viewDir});
        } else {
          ${a.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}function di(e,n,t){return Ye({inTypes:{gsplat:Y,sh2:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:e,sh2:n,viewDir:t},globals:()=>[bn,Ii],statements:({inputs:A,outputs:a})=>wn(`
        if (isGsplatActive(${A.gsplat}.flags)) {
          ${a.rgb} = evaluateSH2(${A.gsplat}, ${A.sh2}, ${A.viewDir});
        } else {
          ${a.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}function Ci(e,n,t){return Ye({inTypes:{gsplat:Y,sh3:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:e,sh3:n,viewDir:t},globals:()=>[bn,fi],statements:({inputs:A,outputs:a})=>wn(`
        if (isGsplatActive(${A.gsplat}.flags)) {
          ${a.rgb} = evaluateSH3(${A.gsplat}, ${A.sh3}, ${A.viewDir});
        } else {
          ${a.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}var Bi=new st,Ei=new Se;function Qi(){const e=new ee(Bi,Ei);return e.frustumCulled=!1,e.onBeforeRender=function(n,t){if(!t.isScene){this.removeFromParent();return}let A=!1;t.traverse(a=>{a instanceof ha&&(A=!0)}),A||t.add(new ha({renderer:n})),this.removeFromParent()},e}var $A=["char","uchar","short","ushort","int","uint","float","double"],na=class et{constructor({fileBytes:n}){this.header="",this.littleEndian=!0,this.elements={},this.comments=[],this.data=null,this.numSplats=0,this.fileBytes=n instanceof ArrayBuffer?new Uint8Array(n):n}async parseHeader(){const n=new ReadableStream({start:s=>{s.enqueue(this.fileBytes.slice(0,65536)),s.close()}}).pipeThrough(new TextDecoderStream).getReader();this.header="";const t=`end_header
`;for(;;){const{value:s,done:r}=await n.read();if(r)throw new Error("Failed to read header");this.header+=s;const i=this.header.indexOf(t);if(i>=0){this.header=this.header.slice(0,i+11);break}}const A=new TextEncoder().encode(this.header).length;this.data=new DataView(this.fileBytes.buffer,A),this.elements={};let a=null;this.comments=[],this.header.trim().split(`
`).forEach((s,r)=>{const i=s.trim();if(r===0){if(i!=="ply")throw new Error("Invalid PLY header");return}if(i.length===0)return;const o=i.split(" ");switch(o[0]){case"format":if(o[1]==="binary_little_endian")this.littleEndian=!0;else if(o[1]==="binary_big_endian")this.littleEndian=!1;else throw new Error(`Unsupported PLY format: ${o[1]}`);if(o[2]!=="1.0")throw new Error(`Unsupported PLY version: ${o[2]}`);break;case"end_header":break;case"comment":this.comments.push(i.slice(8));break;case"element":{const c=o[1];a={name:c,count:Number.parseInt(o[2]),properties:{}},this.elements[c]=a;break}case"property":if(a==null)throw new Error("Property must be inside an element");o[1]==="list"?a.properties[o[4]]={isList:!0,type:o[3],countType:o[2]}:a.properties[o[2]]={isList:!1,type:o[1]}}}),this.elements.vertex&&(this.numSplats=this.elements.vertex.count)}parseData(n){let t=0;const A=this.data;if(A==null)throw new Error("No data to parse");for(const a in this.elements){const s=this.elements[a],{count:r,properties:i}=s,o=wi(i),c=bi(i,this.littleEndian),l=n(s)??(()=>{});for(let g=0;g<r;g++)t=c(A,t,o),l(g,o)}}parseSplats(n,t){if(this.elements.vertex==null)throw new Error("No vertex element found");let A=!1;const a=[];let s=0,r=[],i=[],o=[],c,l,g;function h(){const p=xi[s];r=new Array(3).fill(null).flatMap((C,B)=>[0,1,2].map((E,y)=>B+y*p/3)),i=new Array(5).fill(null).flatMap((C,B)=>[0,1,2].map((E,y)=>3+B+y*p/3)),o=new Array(7).fill(null).flatMap((C,B)=>[0,1,2].map((E,y)=>8+B+y*p/3)),c=s>=1?new Float32Array(9):void 0,l=s>=2?new Float32Array(15):void 0,g=s>=3?new Float32Array(21):void 0}function f(p,C){if(!c)throw new Error("Missing sh1");const B=C.f_rest;for(let E=0;E<r.length;E++)c[E]=B[r[E]]*8/255-4;if(l)for(let E=0;E<i.length;E++)l[E]=B[i[E]]*8/255-4;if(g)for(let E=0;E<o.length;E++)g[E]=B[o[E]]*8/255-4;t?.(p,c,l,g)}function u(p){const{min_x:C,min_y:B,min_z:E,max_x:y,max_y:m,max_z:x,min_scale_x:_,min_scale_y:k,min_scale_z:J,max_scale_x:b,max_scale_y:P,max_scale_z:an}=p.properties;if(!C||!B||!E||!y||!m||!x||!_||!k||!J||!b||!P||!an)throw new Error("Missing PLY chunk properties");return A=!0,(rn,en)=>{const{min_x:F,min_y:O,min_z:tn,max_x:R,max_y:Sn,max_z:dn,min_scale_x:Cn,min_scale_y:An,min_scale_z:vn,max_scale_x:on,max_scale_y:Bn,max_scale_z:S,min_r:En,min_g:ln,min_b:Dn,max_r:cn,max_g:Tn,max_b:Rn}=en;a.push({min_x:F,min_y:O,min_z:tn,max_x:R,max_y:Sn,max_z:dn,min_scale_x:Cn,min_scale_y:An,min_scale_z:vn,max_scale_x:on,max_scale_y:Bn,max_scale_z:S,min_r:En,min_g:ln,min_b:Dn,max_r:cn,max_g:Tn,max_b:Rn})}}function I(p){if(t&&p.name==="sh")return s=Rt(p.properties),h(),f;if(p.name!=="vertex")return null;const{packed_position:C,packed_rotation:B,packed_scale:E,packed_color:y}=p.properties;if(!C||!B||!E||!y)throw new Error("Missing PLY properties: packed_position, packed_rotation, packed_scale, packed_color");const m=Math.sqrt(2);return(x,_)=>{const k=a[x>>>8];if(k==null)throw new Error("Missing PLY chunk");const{min_x:J,min_y:b,min_z:P,max_x:an,max_y:rn,max_z:en,min_scale_x:F,min_scale_y:O,min_scale_z:tn,max_scale_x:R,max_scale_y:Sn,max_scale_z:dn,min_r:Cn,min_g:An,min_b:vn,max_r:on,max_g:Bn,max_b:S}=k,{packed_position:En,packed_rotation:ln,packed_scale:Dn,packed_color:cn}=_,Tn=(En>>>21&2047)/2047*(an-J)+J,Rn=(En>>>11&1023)/1023*(rn-b)+b,tt=(En&2047)/2047*(en-P)+P,On=((ln>>>20&1023)/1023-.5)*m,Xn=((ln>>>10&1023)/1023-.5)*m,Wn=((ln&1023)/1023-.5)*m,Zn=Math.sqrt(Math.max(0,1-On*On-Xn*Xn-Wn*Wn)),Qn=ln>>>30,V=Qn===0?On:Qn===1?Zn:Xn,Ca=Qn<=1?Xn:Qn===2?Zn:Wn,Ba=Qn<=2?Wn:Zn,Ea=Qn===0?Zn:On,Qa=Math.exp((Dn>>>21&2047)/2047*(R-F)+F),ma=Math.exp((Dn>>>11&1023)/1023*(Sn-O)+O),ya=Math.exp((Dn&2047)/2047*(dn-tn)+tn),xa=(cn>>>24&255)/255*((on??1)-(Cn??0))+(Cn??0),wa=(cn>>>16&255)/255*((Bn??1)-(An??0))+(An??0),ba=(cn>>>8&255)/255*((S??1)-(vn??0))+(vn??0);n(x,Tn,Rn,tt,Qa,ma,ya,V,Ca,Ba,Ea,(cn&255)/255,xa,wa,ba)}}const d=p=>{if(p.name==="chunk")return u(p);if(A)return I(p);if(p.name!=="vertex")return null;const{x:C,y:B,z:E,scale_0:y,scale_1:m,scale_2:x,rot_0:_,rot_1:k,rot_2:J,rot_3:b,opacity:P,f_dc_0:an,f_dc_1:rn,f_dc_2:en,red:F,green:O,blue:tn,alpha:R}=p.properties;if(!C||!B||!E)throw new Error("Missing PLY properties: x, y, z");const Sn=y&&m&&x,dn=_&&k&&J&&b,Cn=R!=null?We[R.type]:1,An=F!=null?We[F.type]:1,vn=O!=null?We[O.type]:1,on=tn!=null?We[tn.type]:1;return s=Rt(p.properties),h(),(Bn,S)=>{const En=Sn?Math.exp(S.scale_0):et.defaultPointScale,ln=Sn?Math.exp(S.scale_1):et.defaultPointScale,Dn=Sn?Math.exp(S.scale_2):et.defaultPointScale,cn=dn?S.rot_1:0,Tn=dn?S.rot_2:0,Rn=dn?S.rot_3:0,tt=dn?S.rot_0:1,On=P!=null?1/(1+Math.exp(-S.opacity)):R!=null?S.alpha/Cn:1,Xn=an!=null?S.f_dc_0*Xe+.5:F!=null?S.red/An:1,Wn=rn!=null?S.f_dc_1*Xe+.5:O!=null?S.green/vn:1,Zn=en!=null?S.f_dc_2*Xe+.5:tn!=null?S.blue/on:1;if(n(Bn,S.x,S.y,S.z,En,ln,Dn,cn,Tn,Rn,tt,On,Xn,Wn,Zn),t&&c){const Qn=S.f_rest;if(c)for(let V=0;V<r.length;V++)c[V]=Qn[r[V]];if(l)for(let V=0;V<i.length;V++)l[V]=Qn[i[V]];if(g)for(let V=0;V<o.length;V++)g[V]=Qn[o[V]];t(Bn,c,l,g)}}};this.parseData(d)}injectRgba(n){let t=0;const A=this.data;if(A==null)throw new Error("No parsed data");if(n.length!==this.numSplats*4)throw new Error("Invalid RGBA array length");for(const a in this.elements){const{count:s,properties:r}=this.elements[a],i=[];let o=0;const c=a==="vertex";if(c){for(const l of["opacity","f_dc_0","f_dc_1","f_dc_2"])if(!r[l]||r[l].type!=="float")throw new Error(`Can't injectRgba due to property: ${l}`)}for(const[l,g]of Object.entries(r))if(g.isList)i.push(()=>{const h=le[g.countType](A,t,this.littleEndian);t+=pn[g.countType],t+=h*pn[g.type]});else{if(c)if(l==="f_dc_0"||l==="f_dc_1"||l==="f_dc_2"){const h=Number.parseInt(l.slice(5));i.push(()=>{const f=(n[o+h]/255-.5)/Xe;ea[g.type](A,t,this.littleEndian,f)})}else l==="opacity"&&i.push(()=>{const h=Math.max(-100,Math.min(100,-Math.log(1/(n[o+3]/255)-1)));ea[g.type](A,t,this.littleEndian,h)});i.push(()=>{t+=pn[g.type]})}for(let l=0;l<s;l++){for(const g of i)g();c&&(o+=4)}}}};na.defaultPointScale=.001;var mi=na,Xe=.28209479177387814,le={char:(e,n,t)=>e.getInt8(n),uchar:(e,n,t)=>e.getUint8(n),short:(e,n,t)=>e.getInt16(n,t),ushort:(e,n,t)=>e.getUint16(n,t),int:(e,n,t)=>e.getInt32(n,t),uint:(e,n,t)=>e.getUint32(n,t),float:(e,n,t)=>e.getFloat32(n,t),double:(e,n,t)=>e.getFloat64(n,t)},ea={char:(e,n,t,A)=>{e.setInt8(n,A)},uchar:(e,n,t,A)=>{e.setUint8(n,A)},short:(e,n,t,A)=>{e.setInt16(n,A,t)},ushort:(e,n,t,A)=>{e.setUint16(n,A,t)},int:(e,n,t,A)=>{e.setInt32(n,A,t)},uint:(e,n,t,A)=>{e.setUint32(n,A,t)},float:(e,n,t,A)=>{e.setFloat32(n,A,t)},double:(e,n,t,A)=>{e.setFloat64(n,A,t)}},pn={char:1,uchar:1,short:2,ushort:2,int:4,uint:4,float:4,double:8},We={char:127,uchar:255,short:32767,ushort:65535,int:2147483647,uint:4294967295,float:1,double:1},yi={0:0,9:1,24:2,45:3},xi={0:0,1:9,2:24,3:45},Tt=/^f_rest_([0-9]{1,2})$/;function wi(e){const n={};for(const[t,A]of Object.entries(e))Tt.test(t)?n.f_rest=new Array(Rt(e)):n[t]=A.isList?[]:0;return n}function bi(e,n){return Di(e)?_i(e,n):Mi(e,n)}var Si=(()=>{try{new Function("return 42;")}catch{return!1}return!0})(),vi=/^[a-zA-Z0-9_]+$/;function Di(e){if(!Si)return!1;for(const[n,t]of Object.entries(e))if(!vi.test(n)||t.isList&&!$A.includes(t.countType)||!$A.includes(t.type))return!1;return!0}function _i(e,n){const t=["let list;"];for(const[a,s]of Object.entries(e)){const r=a.match(Tt);if(r){const i=+r[1];t.push(`
        item.f_rest[${i}] = PARSE_FIELD['${s.type}'](data, offset, ${n});
        offset += ${pn[s.type]};
      `)}else s.isList?t.push(`
        list = item['${a}'];
        list.length = PARSE_FIELD['${s.countType}'](data, offset, ${n});
        offset += ${pn[s.countType]};
        for (let i = 0; i < list.length; i++) {
          list[i] = PARSE_FIELD['${s.type}'](data, offset, ${n});
          offset += ${pn[s.type]};
        }
      `):t.push(`
        item['${a}'] = PARSE_FIELD['${s.type}'](data, offset, ${n});
        offset += ${pn[s.type]};
      `)}t.push("return offset;");const A=new Function("data","offset","item","PARSE_FIELD",t.join(`
`));return(a,s,r)=>A(a,s,r,le)}function Mi(e,n){const t=[];for(const[A,a]of Object.entries(e)){const s=A.match(Tt);if(s){const r=+s[1];t.push((i,o,c)=>(c.f_rest[r]=le[a.type](i,o,n),o+pn[a.type]))}else a.isList?t.push((r,i,o)=>{const c=o[A];c.length=le[a.countType](r,i,n);let l=i+pn[a.countType];for(let g=0;g<c.length;g++)c[g]=le[a.type](r,l,n),l+=pn[a.type];return l}):t.push((r,i,o)=>(o[A]=le[a.type](r,i,n),i+pn[a.type]))}return(A,a,s)=>{let r=a;for(let i=0;i<t.length;i++)r=t[i](A,r,s);return r}}function Rt(e){let n=0;for(;e[`f_rest_${n}`];)n+=1;const t=yi[n];if(t==null)throw new Error(`Unsupported number of SH coefficients: ${n}`);return t}var ta=`(function() {
  "use strict";
  let wasm;
  const cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
    throw Error("TextDecoder not available");
  } };
  if (typeof TextDecoder !== "undefined") {
    cachedTextDecoder.decode();
  }
  let cachedUint8ArrayMemory0 = null;
  function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
      cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
  }
  function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
  }
  function sort_splats(num_splats, readback, ordering) {
    const ret = wasm.sort_splats(num_splats, readback, ordering);
    return ret >>> 0;
  }
  function sort32_splats(num_splats, readback, ordering) {
    const ret = wasm.sort32_splats(num_splats, readback, ordering);
    return ret >>> 0;
  }
  async function __wbg_load(module, imports) {
    if (typeof Response === "function" && module instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming === "function") {
        try {
          return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
          if (module.headers.get("Content-Type") != "application/wasm") {
            console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
          } else {
            throw e;
          }
        }
      }
      const bytes = await module.arrayBuffer();
      return await WebAssembly.instantiate(bytes, imports);
    } else {
      const instance = await WebAssembly.instantiate(module, imports);
      if (instance instanceof WebAssembly.Instance) {
        return { instance, module };
      } else {
        return instance;
      }
    }
  }
  function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_buffer_609cc3eee51ed158 = function(arg0) {
      const ret = arg0.buffer;
      return ret;
    };
    imports.wbg.__wbg_length_3b4f022188ae8db6 = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_length_6ca527665d89694d = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_length_8cfd2c6409af88ad = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_new_9fee97a409b32b68 = function(arg0) {
      const ret = new Uint16Array(arg0);
      return ret;
    };
    imports.wbg.__wbg_new_e3b321dcfef89fc7 = function(arg0) {
      const ret = new Uint32Array(arg0);
      return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354 = function(arg0, arg1, arg2) {
      const ret = new Float32Array(arg0, arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212 = function(arg0, arg1, arg2) {
      const ret = new Uint32Array(arg0, arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_newwithlength_5a5efe313cfd59f1 = function(arg0) {
      const ret = new Float32Array(arg0 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_set_10bad9bee0e9c58b = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_set_d23661d19148b229 = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_set_f4f1f0daa30696fc = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_subarray_3aaeec89bb2544f0 = function(arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_subarray_769e1e0f81bb259b = function(arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
      const table = wasm.__wbindgen_export_0;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    };
    imports.wbg.__wbindgen_memory = function() {
      const ret = wasm.memory;
      return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    };
    return imports;
  }
  function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
  }
  async function __wbg_init(module_or_path) {
    if (wasm !== void 0) return wasm;
    if (typeof module_or_path !== "undefined") {
      if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
        ({ module_or_path } = module_or_path);
      } else {
        console.warn("using deprecated parameters for the initialization function; pass a single object instead");
      }
    }
    if (typeof module_or_path === "undefined") {
      module_or_path = new URL("data:application/wasm;base64,AGFzbQEAAAABzAEeYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AX9gA39/fwBgAX8AYAV/f39/fwBgA29/fwFvYAV/f39/fwF/YAFvAW9gA29vfwBgAW8Bf2AAAX9gBH9/f38AYAAAYAR/f39/AX9gA39vbwF/YAF/AW9gAAFvYAF9AX1gBn9/f39/fwBgDX19fX19fX19f29/fX0Bb2AGf39/f39/AX9gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwBgAn19AX0C8gQRA3diZx1fX3diZ19idWZmZXJfNjA5Y2MzZWVlNTFlZDE1OAAJA3diZxpfX3diZ19uZXdfOWZlZTk3YTQwOWIzMmI2OAAJA3diZxpfX3diZ19zZXRfZjRmMWYwZGFhMzA2OTZmYwAKA3diZx1fX3diZ19sZW5ndGhfOGNmZDJjNjQwOWFmODhhZAALA3diZzFfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9mMWRlYWQ0NGQxZmM3MjEyAAcDd2JnGl9fd2JnX25ld19lM2IzMjFkY2ZlZjg5ZmM3AAkDd2JnGl9fd2JnX3NldF9kMjM2NjFkMTkxNDhiMjI5AAoDd2JnHV9fd2JnX2xlbmd0aF82Y2E1Mjc2NjVkODk2OTRkAAsDd2JnMV9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoX2U2YjdlNjlhY2Q0YzczNTQABwN3YmcaX193Ymdfc2V0XzEwYmFkOWJlZTBlOWM1OGIACgN3YmcdX193YmdfbGVuZ3RoXzNiNGYwMjIxODhhZThkYjYACwN3YmcfX193Ymdfc3ViYXJyYXlfNzY5ZTFlMGY4MWJiMjU5YgAHA3diZx9fX3diZ19zdWJhcnJheV8zYWFlZWM4OWJiMjU0NGYwAAcDd2JnJF9fd2JnX25ld3dpdGhsZW5ndGhfNWE1ZWZlMzEzY2ZkNTlmMQARA3diZxBfX3diaW5kZ2VuX3Rocm93AAEDd2JnEV9fd2JpbmRnZW5fbWVtb3J5ABIDd2JnH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgNhYAMAAQIIBQQCEwEMAAEBAgAAAQwBBAYFBQQAAQYFFAENBAAGBQQEAQQOAgECAQAIBAAVARYG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ACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBACACQR9HG3QhBQNAIAMgBUEddkEEcWpBEGoiBCgCACICRQ0CIAVBAXQhBSACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBCAANgIAIAAgAzYCGCAAIAA2AgwgACAANgIIC/MCAQR/IwBBMGsiACQAAkACQEGQksAAKAIARQRAQaiSwAAoAgAhAUGoksAAQQA2AgAgAUUNASAAQRhqIAERBQAgAEEQaiICIABBJGopAgA3AwAgACAAKQIcNwMIIAAoAhghAUGQksAAKAIAIgMNAgJAIANFDQBBlJLAACgCACICRQ0AQZiSwAAoAgAgAkECdBBlC0GUksAAIAE2AgBBkJLAAEEBNgIAQZiSwAAgACkDCDcCAEGgksAAIABBEGopAwA3AgALIABBMGokAEGUksAADwsgAEEANgIoIABBATYCHCAAQaCHwAA2AhggAEIENwIgIABBGGpBiIjAABBDAAsgAEEoaiACKQMANwIAIAAgACkDCDcCICAAIAE2AhwgAEEBNgIYAkAgAEEYaiIBKAIARQ0AIAEoAgQiAkUNACABKAIIIAJBAnQQZQsgAEEANgIoIABBATYCHCAAQaiIwAA2AhggAEIENwIgIAFBsIjAABBDAAuoAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQcCIwAAgAkEoahAYGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCAEGxk8AALQAAGiACIAU3AwBBDEEEEF0iAUUEQEEEQQwQbQALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHgisAANgIEIAAgATYCACACQUBrJAAL0gECBH8BfiMAQSBrIgMkACABIAEgAmoiAksEQEEAQQAQUgALQQggACgCACIEQQF0IgEgAiABIAJLGyICIAJBCEkb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QQRqrUKAgICA4ACENwMoIAEgAa1CgICAgOAAhDcDICABIAFBIGo2AhAgAUEIakHIj8AAEEMAC2kCAX8BfiMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQfyNwAA2AgggA0ICNwIUIANCgICAgOAAIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhBDAAtpAgF/AX4jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQQI2AgwgA0H4kcAANgIIIANCAjcCFCADQoCAgIDgACIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQQwALZgAjAEEwayIAJABBsJPAAC0AAARAIABBAjYCDCAAQbCKwAA2AgggAEIBNwIUIAAgATYCLCAAIABBLGqtQoCAgIDgAIQ3AyAgACAAQSBqNgIQIABBCGpB0IrAABBDAAsgAEEwaiQAC5QBAgN/AW8jAEEgayIDJAAgAyAAKAIAEHAiBDYCACADIAI2AgQgAiAERwRAIANBADYCCCADIANBBGogA0EIahBAAAsQWyIEEFMiBSUBEAUhBhAbIgIgBiYBIAVBhAFPBEAgBRAtCyACIAAoAgAgAUECdhBkIAJBhAFPBEAgAhAtCyAEQYQBTwRAIAQQLQsgA0EgaiQAC08BAX8jAEEwayIAJAAgAEEBNgIMIABBwI3AADYCCCAAQgE3AhQgACAAQS9qrUKAgICAoAWENwMgIAAgAEEgajYCECAAQQhqQcSBwAAQQwALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhAlIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALTQECf0Gxk8AALQAAGiABKAIEIQIgASgCACEDQQhBBBBdIgFFBEBBBEEIEG0ACyABIAI2AgQgASADNgIAIABB8IrAADYCBCAAIAE2AgALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhApIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALQQEBfyMAQSBrIgIkACACQQA2AhAgAkEBNgIEIAJCBDcCCCACQS42AhwgAiAANgIYIAIgAkEYajYCACACIAEQQwALswIBA38gACgCACECIAEoAhwiAEEQcUUE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ZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkTGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkdgMQACoAAAAvVXNlcnMvZG1hcmNvcy8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL29uY2VfY2VsbC0xLjIxLjMvc3JjL2xpYi5ycwCoAxAAXwAAAAgDAAAZAAAAcmVlbnRyYW50IGluaXQAABgEEAAOAAAAqAMQAF8AAAB6AgAADQAAABYAAAAMAAAABAAAABcAAAAYAAAAGQAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZABYBBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAWAQQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9ybWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAAAAAsFEAAVAAAAIAUQAA0AAABzdGQvc3JjL2FsbG9jLnJzQAUQABAAAABjAQAACQAAABYAAAAMAAAABAAAABoAAAAAAAAACAAAAAQAAAAbAAAAAAAAAAgAAAAEAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAQAAAABAAAACEAAAAiAAAAIwAAACQAAABFcnJvcgAAACUAAAAMAAAABAAAACYAAAAnAAAAKAAAAGNhcGFjaXR5IG92ZXJmbG93AAAA2AUQABEAAABhbGxvYy9zcmMvcmF3X3ZlYy5yc/QFEAAUAAAAGAAAAAUAQaCMwAAL8AUBAAAAKQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90YWxsb2Mvc3JjL2ZtdC5ycwAAfgYQABAAAAB+AgAADgAAAEJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogrgYQABIAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAyAYQACAAAADoBhAAEgAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogABcHEAAQAAAAJwcQABcAAAA+BxAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAAXBxAAEAAAAGAHEAAQAAAAcAcQAAkAAAA+BxAACQAAADogAAABAAAAAAAAAJwHEAACAAAAfSB9Y29yZS9zcmMvZm10L251bS5ycwAAswcQABMAAABmAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlyYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAACiCBAAEgAAALQIEAAiAAAAcmFuZ2UgZW5kIGluZGV4IOgIEAAQAAAAtAgQACIAAAAAAAA/AAAAvwBBqJLAAAsBFABwCXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS44My4wICg5MGIzNWE2MjMgMjAyNC0xMS0yNikGd2FscnVzBjAuMjMuMwx3YXNtLWJpbmRnZW4HMC4yLjEwMABJD3RhcmdldF9mZWF0dXJlcwQrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==", self.location.href);
    }
    const imports = __wbg_get_imports();
    if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
      module_or_path = fetch(module_or_path);
    }
    const { instance, module } = await __wbg_load(await module_or_path, imports);
    return __wbg_finalize_init(instance, module);
  }
  var ch2 = {};
  var wk = function(c, id, msg, transfer, cb) {
    var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
      c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
    ], { type: "text/javascript" }))));
    w.onmessage = function(e) {
      var d = e.data, ed = d.$e$;
      if (ed) {
        var err2 = new Error(ed[0]);
        err2["code"] = ed[1];
        err2.stack = ed[2];
        cb(err2, null);
      } else
        cb(null, d);
    };
    w.postMessage(msg, transfer);
    return w;
  };
  var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i2 = 0; i2 < 31; ++i2) {
      b[i2] = start += 1 << eb[i2 - 1];
    }
    var r = new i32(b[30]);
    for (var i2 = 1; i2 < 30; ++i2) {
      for (var j = b[i2]; j < b[i2 + 1]; ++j) {
        r[j] = j - b[i2] << 5 | i2;
      }
    }
    return { b, r };
  };
  var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0), fd = _b.b;
  var rev = new u16(32768);
  for (var i = 0; i < 32768; ++i) {
    var x = (i & 43690) >> 1 | (i & 21845) << 1;
    x = (x & 52428) >> 2 | (x & 13107) << 2;
    x = (x & 61680) >> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
  }
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i2 = 0;
    var l = new u16(mb);
    for (; i2 < s; ++i2) {
      if (cd[i2])
        ++l[cd[i2] - 1];
    }
    var le = new u16(mb);
    for (i2 = 1; i2 < mb; ++i2) {
      le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          var sv = i2 << 4 | cd[i2];
          var r_1 = mb - cd[i2];
          var v = le[cd[i2] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (var i = 0; i < 144; ++i)
    flt[i] = 8;
  for (var i = 144; i < 256; ++i)
    flt[i] = 9;
  for (var i = 256; i < 280; ++i)
    flt[i] = 7;
  for (var i = 280; i < 288; ++i)
    flt[i] = 8;
  var fdt = new u8(32);
  for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
  var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
  var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
  var max = function(a) {
    var m = a[0];
    for (var i2 = 1; i2 < a.length; ++i2) {
      if (a[i2] > m)
        m = a[i2];
    }
    return m;
  };
  var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
  };
  var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
  };
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    return new u8(v.subarray(s, e));
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var inflt = function(dat, st, buf, dict) {
    var sl = dat.length, dl = dict ? dict.length : 0;
    if (!sl || st.f && !st.l)
      return buf || new u8(0);
    var noBuf = !buf;
    var resize = noBuf || st.i != 2;
    var noSt = st.i;
    if (noBuf)
      buf = new u8(sl * 3);
    var cbuf = function(l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
          if (t > sl) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          st.b = bt += l, st.p = pos = t * 8, st.f = final;
          continue;
        } else if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i2 = 0; i2 < hcLen; ++i2) {
            clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt), clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i2 = 0; i2 < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >> 4;
            if (s < 16) {
              ldt[i2++] = s;
            } else {
              var c = 0, n = 0;
              if (s == 16)
                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
              else if (s == 17)
                n = 3 + bits(dat, pos, 7), pos += 3;
              else if (s == 18)
                n = 11 + bits(dat, pos, 127), pos += 7;
              while (n--)
                ldt[i2++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else
          err(1);
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
      }
      if (resize)
        cbuf(bt + 131072);
      var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (!c)
          err(2);
        if (sym < 256)
          buf[bt++] = sym;
        else if (sym == 256) {
          lpos = pos, lm = null;
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i2 = sym - 257, b = fleb[i2];
            add = bits(dat, pos, (1 << b) - 1) + fl[i2];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
          if (!d)
            err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
          }
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + 131072);
          var end = bt + add;
          if (bt < dt) {
            var shift = dl - dt, dend = Math.min(dt, end);
            if (shift + bt < 0)
              err(3);
            for (; bt < dend; ++bt)
              buf[bt] = dict[shift + bt];
          }
          for (; bt < end; ++bt)
            buf[bt] = buf[bt - dt];
        }
      }
      st.l = lm, st.p = lpos, st.b = bt, st.f = final;
      if (lm)
        final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
  };
  var et = /* @__PURE__ */ new u8(0);
  var mrg = function(a, b) {
    var o = {};
    for (var k in a)
      o[k] = a[k];
    for (var k in b)
      o[k] = b[k];
    return o;
  };
  var wcln = function(fn, fnStr, td2) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\\s+/g, "").split(",");
    for (var i2 = 0; i2 < dt.length; ++i2) {
      var v = dt[i2], k = ks[i2];
      if (typeof v == "function") {
        fnStr += ";" + k + "=";
        var st_1 = v.toString();
        if (v.prototype) {
          if (st_1.indexOf("[native code]") != -1) {
            var spInd = st_1.indexOf(" ", 8) + 1;
            fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
          } else {
            fnStr += st_1;
            for (var t in v.prototype)
              fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
          }
        } else
          fnStr += st_1;
      } else
        td2[k] = v;
    }
    return fnStr;
  };
  var ch = [];
  var cbfs = function(v) {
    var tl = [];
    for (var k in v) {
      if (v[k].buffer) {
        tl.push((v[k] = new v[k].constructor(v[k])).buffer);
      }
    }
    return tl;
  };
  var wrkr = function(fns, init, id, cb) {
    if (!ch[id]) {
      var fnStr = "", td_1 = {}, m = fns.length - 1;
      for (var i2 = 0; i2 < m; ++i2)
        fnStr = wcln(fns[i2], fnStr, td_1);
      ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
    }
    var td2 = mrg({}, ch[id].e);
    return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
  };
  var bInflt = function() {
    return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
  };
  var pbf = function(msg) {
    return postMessage(msg, [msg.buffer]);
  };
  var gopt = function(o) {
    return o && {
      out: o.size && new u8(o.size),
      dictionary: o.dictionary
    };
  };
  var cbify = function(dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err2, dat2) {
      w.terminate();
      cb(err2, dat2);
    });
    w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
    return function() {
      w.terminate();
    };
  };
  var b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
  };
  var b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
  };
  var b8 = function(d, b) {
    return b4(d, b) + b4(d, b + 4) * 4294967296;
  };
  var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
      err(6, "invalid gzip data");
    var flg = d[3];
    var st = 10;
    if (flg & 4)
      st += (d[10] | d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
      ;
    return st + (flg & 2);
  };
  var Inflate = /* @__PURE__ */ function() {
    function Inflate2(opts, cb) {
      if (typeof opts == "function")
        cb = opts, opts = {};
      this.ondata = cb;
      var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
      this.s = { i: 0, b: dict ? dict.length : 0 };
      this.o = new u8(32768);
      this.p = new u8(0);
      if (dict)
        this.o.set(dict);
    }
    Inflate2.prototype.e = function(c) {
      if (!this.ondata)
        err(5);
      if (this.d)
        err(4);
      if (!this.p.length)
        this.p = c;
      else if (c.length) {
        var n = new u8(this.p.length + c.length);
        n.set(this.p), n.set(c, this.p.length), this.p = n;
      }
    };
    Inflate2.prototype.c = function(final) {
      this.s.i = +(this.d = final || false);
      var bts = this.s.b;
      var dt = inflt(this.p, this.s, this.o);
      this.ondata(slc(dt, bts, this.s.b), this.d);
      this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
      this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
    };
    Inflate2.prototype.push = function(chunk, final) {
      this.e(chunk), this.c(final);
    };
    return Inflate2;
  }();
  function inflate(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      err(7);
    return cbify(data, opts, [
      bInflt
    ], function(ev) {
      return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
    }, 1, cb);
  }
  function inflateSync(data, opts) {
    return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
  }
  var Gunzip = /* @__PURE__ */ function() {
    function Gunzip2(opts, cb) {
      this.v = 1;
      this.r = 0;
      Inflate.call(this, opts, cb);
    }
    Gunzip2.prototype.push = function(chunk, final) {
      Inflate.prototype.e.call(this, chunk);
      this.r += chunk.length;
      if (this.v) {
        var p = this.p.subarray(this.v - 1);
        var s = p.length > 3 ? gzs(p) : 4;
        if (s > p.length) {
          if (!final)
            return;
        } else if (this.v > 1 && this.onmember) {
          this.onmember(this.r - p.length);
        }
        this.p = p.subarray(s), this.v = 0;
      }
      Inflate.prototype.c.call(this, final);
      if (this.s.f && !this.s.l && !final) {
        this.v = shft(this.s.p) + 9;
        this.s = { i: 0 };
        this.o = new u8(0);
        this.push(new u8(0), final);
      }
    };
    return Gunzip2;
  }();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  try {
    td.decode(et, { stream: true });
  } catch (e) {
  }
  var dutf8 = function(d) {
    for (var r = "", i2 = 0; ; ) {
      var c = d[i2++];
      var eb = (c > 127) + (c > 223) + (c > 239);
      if (i2 + eb > d.length)
        return { s: r, r: slc(d, i2 - 1) };
      if (!eb)
        r += String.fromCharCode(c);
      else if (eb == 3) {
        c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
      } else if (eb & 1)
        r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
      else
        r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
    }
  };
  function strFromU8(dat, latin1) {
    if (latin1) {
      var r = "";
      for (var i2 = 0; i2 < dat.length; i2 += 16384)
        r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
      return r;
    } else if (td) {
      return td.decode(dat);
    } else {
      var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
      if (r.length)
        err(8);
      return s;
    }
  }
  var slzh = function(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
  };
  var zh = function(d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
    var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
    return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
  };
  var z64e = function(d, b) {
    for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
      ;
    return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
  };
  var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
    fn();
  };
  function unzip(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      err(7);
    var term = [];
    var tAll = function() {
      for (var i3 = 0; i3 < term.length; ++i3)
        term[i3]();
    };
    var files = {};
    var cbd = function(a, b) {
      mt(function() {
        cb(a, b);
      });
    };
    mt(function() {
      cbd = cb;
    });
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558) {
        cbd(err(13, 0, 1), null);
        return tAll;
      }
    }
    var lft = b2(data, e + 8);
    if (lft) {
      var c = lft;
      var o = b4(data, e + 16);
      var z = o == 4294967295 || c == 65535;
      if (z) {
        var ze = b4(data, e - 12);
        z = b4(data, ze) == 101075792;
        if (z) {
          c = lft = b4(data, ze + 32);
          o = b4(data, ze + 48);
        }
      }
      var fltr = opts && opts.filter;
      var _loop_3 = function(i3) {
        var _a2 = zh(data, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
        o = no;
        var cbl = function(e2, d) {
          if (e2) {
            tAll();
            cbd(e2, null);
          } else {
            if (d)
              files[fn] = d;
            if (!--lft)
              cbd(null, files);
          }
        };
        if (!fltr || fltr({
          name: fn,
          size: sc,
          originalSize: su,
          compression: c_1
        })) {
          if (!c_1)
            cbl(null, slc(data, b, b + sc));
          else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (su < 524288 || sc > 0.8 * su) {
              try {
                cbl(null, inflateSync(infl, { out: new u8(su) }));
              } catch (e2) {
                cbl(e2, null);
              }
            } else
              term.push(inflate(infl, { size: su }, cbl));
          } else
            cbl(err(14, "unknown compression type " + c_1, 1), null);
        } else
          cbl(null, null);
      };
      for (var i2 = 0; i2 < c; ++i2) {
        _loop_3(i2);
      }
    } else
      cbd(null, {});
    return tAll;
  }
  function unzipSync(data, opts) {
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558)
        err(13);
    }
    var c = b2(data, e + 8);
    if (!c)
      return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295 || c == 65535;
    if (z) {
      var ze = b4(data, e - 12);
      z = b4(data, ze) == 101075792;
      if (z) {
        c = b4(data, ze + 32);
        o = b4(data, ze + 48);
      }
    }
    var fltr = opts && opts.filter;
    for (var i2 = 0; i2 < c; ++i2) {
      var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
      o = no;
      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_2
      })) {
        if (!c_2)
          files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8)
          files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
        else
          err(14, "unknown compression type " + c_2);
      }
    }
    return files;
  }
  /**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  const REVISION = "178";
  const NoColorSpace = "";
  const SRGBColorSpace = "srgb";
  const LinearSRGBColorSpace = "srgb-linear";
  const LinearTransfer = "linear";
  const SRGBTransfer = "srgb";
  function clamp(value, min, max2) {
    return Math.max(min, Math.min(max2, value));
  }
  function euclideanModulo(n, m) {
    return (n % m + m) % m;
  }
  function lerp(x2, y, t) {
    return (1 - t) * x2 + t * y;
  }
  class Quaternion {
    /**
     * Constructs a new quaternion.
     *
     * @param {number} [x=0] - The x value of this quaternion.
     * @param {number} [y=0] - The y value of this quaternion.
     * @param {number} [z=0] - The z value of this quaternion.
     * @param {number} [w=1] - The w value of this quaternion.
     */
    constructor(x2 = 0, y = 0, z = 0, w = 1) {
      this.isQuaternion = true;
      this._x = x2;
      this._y = y;
      this._z = z;
      this._w = w;
    }
    /**
     * Interpolates between two quaternions via SLERP. This implementation assumes the
     * quaternion data are managed  in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @param {number} t - The interpolation factor in the range \`[0,1]\`.
     * @see {@link Quaternion#slerp}
     */
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
      let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
      if (t === 0) {
        dst[dstOffset + 0] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return;
      }
      if (t === 1) {
        dst[dstOffset + 0] = x1;
        dst[dstOffset + 1] = y1;
        dst[dstOffset + 2] = z1;
        dst[dstOffset + 3] = w1;
        return;
      }
      if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
        let s = 1 - t;
        const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos >= 0 ? 1 : -1, sqrSin = 1 - cos * cos;
        if (sqrSin > Number.EPSILON) {
          const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
          s = Math.sin(s * len) / sin;
          t = Math.sin(t * len) / sin;
        }
        const tDir = t * dir;
        x0 = x0 * s + x1 * tDir;
        y0 = y0 * s + y1 * tDir;
        z0 = z0 * s + z1 * tDir;
        w0 = w0 * s + w1 * tDir;
        if (s === 1 - t) {
          const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
          x0 *= f;
          y0 *= f;
          z0 *= f;
          w0 *= f;
        }
      }
      dst[dstOffset] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
    }
    /**
     * Multiplies two quaternions. This implementation assumes the quaternion data are managed
     * in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @return {Array<number>} The destination array.
     * @see {@link Quaternion#multiplyQuaternions}.
     */
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
      const x0 = src0[srcOffset0];
      const y0 = src0[srcOffset0 + 1];
      const z0 = src0[srcOffset0 + 2];
      const w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1];
      const y1 = src1[srcOffset1 + 1];
      const z1 = src1[srcOffset1 + 2];
      const w1 = src1[srcOffset1 + 3];
      dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
      dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
      dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
      dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
      return dst;
    }
    /**
     * The x value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    /**
     * The y value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    /**
     * The z value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    /**
     * The w value of this quaternion.
     *
     * @type {number}
     * @default 1
     */
    get w() {
      return this._w;
    }
    set w(value) {
      this._w = value;
      this._onChangeCallback();
    }
    /**
     * Sets the quaternion components.
     *
     * @param {number} x - The x value of this quaternion.
     * @param {number} y - The y value of this quaternion.
     * @param {number} z - The z value of this quaternion.
     * @param {number} w - The w value of this quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    set(x2, y, z, w) {
      this._x = x2;
      this._y = y;
      this._z = z;
      this._w = w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Returns a new quaternion with copied values from this instance.
     *
     * @return {Quaternion} A clone of this instance.
     */
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    /**
     * Copies the values of the given quaternion to this instance.
     *
     * @param {Quaternion} quaternion - The quaternion to copy.
     * @return {Quaternion} A reference to this quaternion.
     */
    copy(quaternion) {
      this._x = quaternion.x;
      this._y = quaternion.y;
      this._z = quaternion.z;
      this._w = quaternion.w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the rotation specified by the given
     * Euler angles.
     *
     * @param {Euler} euler - The Euler angles.
     * @param {boolean} [update=true] - Whether the internal \`onChange\` callback should be executed or not.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromEuler(euler, update = true) {
      const x2 = euler._x, y = euler._y, z = euler._z, order = euler._order;
      const cos = Math.cos;
      const sin = Math.sin;
      const c1 = cos(x2 / 2);
      const c2 = cos(y / 2);
      const c3 = cos(z / 2);
      const s1 = sin(x2 / 2);
      const s2 = sin(y / 2);
      const s3 = sin(z / 2);
      switch (order) {
        case "XYZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "YXZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "ZXY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "ZYX":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "YZX":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "XZY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
      }
      if (update === true) this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given axis and angle.
     *
     * @param {Vector3} axis - The normalized axis.
     * @param {number} angle - The angle in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromAxisAngle(axis, angle) {
      const halfAngle = angle / 2, s = Math.sin(halfAngle);
      this._x = axis.x * s;
      this._y = axis.y * s;
      this._z = axis.z * s;
      this._w = Math.cos(halfAngle);
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given rotation matrix.
     *
     * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromRotationMatrix(m) {
      const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
      if (trace > 0) {
        const s = 0.5 / Math.sqrt(trace + 1);
        this._w = 0.25 / s;
        this._x = (m32 - m23) * s;
        this._y = (m13 - m31) * s;
        this._z = (m21 - m12) * s;
      } else if (m11 > m22 && m11 > m33) {
        const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
        this._w = (m32 - m23) / s;
        this._x = 0.25 * s;
        this._y = (m12 + m21) / s;
        this._z = (m13 + m31) / s;
      } else if (m22 > m33) {
        const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
        this._w = (m13 - m31) / s;
        this._x = (m12 + m21) / s;
        this._y = 0.25 * s;
        this._z = (m23 + m32) / s;
      } else {
        const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
        this._w = (m21 - m12) / s;
        this._x = (m13 + m31) / s;
        this._y = (m23 + m32) / s;
        this._z = 0.25 * s;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion to the rotation required to rotate the direction vector
     * \`vFrom\` to the direction vector \`vTo\`.
     *
     * @param {Vector3} vFrom - The first (normalized) direction vector.
     * @param {Vector3} vTo - The second (normalized) direction vector.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromUnitVectors(vFrom, vTo) {
      let r = vFrom.dot(vTo) + 1;
      if (r < 1e-8) {
        r = 0;
        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          this._x = -vFrom.y;
          this._y = vFrom.x;
          this._z = 0;
          this._w = r;
        } else {
          this._x = 0;
          this._y = -vFrom.z;
          this._z = vFrom.y;
          this._w = r;
        }
      } else {
        this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
        this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
        this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
        this._w = r;
      }
      return this.normalize();
    }
    /**
     * Returns the angle between this quaternion and the given one in radians.
     *
     * @param {Quaternion} q - The quaternion to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(q) {
      return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
    }
    /**
     * Rotates this quaternion by a given angular step to the given quaternion.
     * The method ensures that the final quaternion will not overshoot \`q\`.
     *
     * @param {Quaternion} q - The target quaternion.
     * @param {number} step - The angular step in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    rotateTowards(q, step) {
      const angle = this.angleTo(q);
      if (angle === 0) return this;
      const t = Math.min(1, step / angle);
      this.slerp(q, t);
      return this;
    }
    /**
     * Sets this quaternion to the identity quaternion; that is, to the
     * quaternion that represents "no rotation".
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    identity() {
      return this.set(0, 0, 0, 1);
    }
    /**
     * Inverts this quaternion via {@link Quaternion#conjugate}. The
     * quaternion is assumed to have unit length.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    invert() {
      return this.conjugate();
    }
    /**
     * Returns the rotational conjugate of this quaternion. The conjugate of a
     * quaternion represents the same rotation in the opposite direction about
     * the rotational axis.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    conjugate() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
    /**
     * Calculates the dot product of this quaternion and the given one.
     *
     * @param {Quaternion} v - The quaternion to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
    }
    /**
     * Computes the squared Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector. This can be useful if you are comparing the
     * lengths of two quaternions, as this is a slightly more efficient calculation than
     * {@link Quaternion#length}.
     *
     * @return {number} The squared Euclidean length.
     */
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    /**
     * Computes the Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector.
     *
     * @return {number} The Euclidean length.
     */
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    /**
     * Normalizes this quaternion - that is, calculated the quaternion that performs
     * the same rotation as this one, but has a length equal to \`1\`.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    normalize() {
      let l = this.length();
      if (l === 0) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        l = 1 / l;
        this._x = this._x * l;
        this._y = this._y * l;
        this._z = this._z * l;
        this._w = this._w * l;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiply(q) {
      return this.multiplyQuaternions(this, q);
    }
    /**
     * Pre-multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    premultiply(q) {
      return this.multiplyQuaternions(q, this);
    }
    /**
     * Multiplies the given quaternions and stores the result in this instance.
     *
     * @param {Quaternion} a - The first quaternion.
     * @param {Quaternion} b - The second quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiplyQuaternions(a, b) {
      const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
      const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
      this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between quaternions.
     *
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval \`[0, 1]\`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerp(qb, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(qb);
      const x2 = this._x, y = this._y, z = this._z, w = this._w;
      let cosHalfTheta = w * qb._w + x2 * qb._x + y * qb._y + z * qb._z;
      if (cosHalfTheta < 0) {
        this._w = -qb._w;
        this._x = -qb._x;
        this._y = -qb._y;
        this._z = -qb._z;
        cosHalfTheta = -cosHalfTheta;
      } else {
        this.copy(qb);
      }
      if (cosHalfTheta >= 1) {
        this._w = w;
        this._x = x2;
        this._y = y;
        this._z = z;
        return this;
      }
      const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
      if (sqrSinHalfTheta <= Number.EPSILON) {
        const s = 1 - t;
        this._w = s * w + t * this._w;
        this._x = s * x2 + t * this._x;
        this._y = s * y + t * this._y;
        this._z = s * z + t * this._z;
        this.normalize();
        return this;
      }
      const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
      const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
      const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
      this._w = w * ratioA + this._w * ratioB;
      this._x = x2 * ratioA + this._x * ratioB;
      this._y = y * ratioA + this._y * ratioB;
      this._z = z * ratioA + this._z * ratioB;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between the given quaternions
     * and stores the result in this quaternion.
     *
     * @param {Quaternion} qa - The source quaternion.
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval \`[0, 1]\`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerpQuaternions(qa, qb, t) {
      return this.copy(qa).slerp(qb, t);
    }
    /**
     * Sets this quaternion to a uniformly random, normalized quaternion.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    random() {
      const theta1 = 2 * Math.PI * Math.random();
      const theta2 = 2 * Math.PI * Math.random();
      const x0 = Math.random();
      const r1 = Math.sqrt(1 - x0);
      const r2 = Math.sqrt(x0);
      return this.set(
        r1 * Math.sin(theta1),
        r1 * Math.cos(theta1),
        r2 * Math.sin(theta2),
        r2 * Math.cos(theta2)
      );
    }
    /**
     * Returns \`true\` if this quaternion is equal with the given one.
     *
     * @param {Quaternion} quaternion - The quaternion to test for equality.
     * @return {boolean} Whether this quaternion is equal with the given one.
     */
    equals(quaternion) {
      return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
    }
    /**
     * Sets this quaternion's components from the given array.
     *
     * @param {Array<number>} array - An array holding the quaternion component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromArray(array, offset = 0) {
      this._x = array[offset];
      this._y = array[offset + 1];
      this._z = array[offset + 2];
      this._w = array[offset + 3];
      this._onChangeCallback();
      return this;
    }
    /**
     * Writes the components of this quaternion to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The quaternion components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._w;
      return array;
    }
    /**
     * Sets the components of this quaternion from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
     * @param {number} index - The index into the attribute.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromBufferAttribute(attribute, index) {
      this._x = attribute.getX(index);
      this._y = attribute.getY(index);
      this._z = attribute.getZ(index);
      this._w = attribute.getW(index);
      this._onChangeCallback();
      return this;
    }
    /**
     * This methods defines the serialization result of this class. Returns the
     * numerical elements of this quaternion in an array of format \`[x, y, z, w]\`.
     *
     * @return {Array<number>} The serialized quaternion.
     */
    toJSON() {
      return this.toArray();
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._w;
    }
  }
  class Vector3 {
    /**
     * Constructs a new 3D vector.
     *
     * @param {number} [x=0] - The x value of this vector.
     * @param {number} [y=0] - The y value of this vector.
     * @param {number} [z=0] - The z value of this vector.
     */
    constructor(x2 = 0, y = 0, z = 0) {
      Vector3.prototype.isVector3 = true;
      this.x = x2;
      this.y = y;
      this.z = z;
    }
    /**
     * Sets the vector components.
     *
     * @param {number} x - The value of the x component.
     * @param {number} y - The value of the y component.
     * @param {number} z - The value of the z component.
     * @return {Vector3} A reference to this vector.
     */
    set(x2, y, z) {
      if (z === void 0) z = this.z;
      this.x = x2;
      this.y = y;
      this.z = z;
      return this;
    }
    /**
     * Sets the vector components to the same value.
     *
     * @param {number} scalar - The value to set for all vector components.
     * @return {Vector3} A reference to this vector.
     */
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      return this;
    }
    /**
     * Sets the vector's x component to the given value
     *
     * @param {number} x - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setX(x2) {
      this.x = x2;
      return this;
    }
    /**
     * Sets the vector's y component to the given value
     *
     * @param {number} y - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setY(y) {
      this.y = y;
      return this;
    }
    /**
     * Sets the vector's z component to the given value
     *
     * @param {number} z - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setZ(z) {
      this.z = z;
      return this;
    }
    /**
     * Allows to set a vector component with an index.
     *
     * @param {number} index - The component index. \`0\` equals to x, \`1\` equals to y, \`2\` equals to z.
     * @param {number} value - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    /**
     * Returns the value of the vector component which matches the given index.
     *
     * @param {number} index - The component index. \`0\` equals to x, \`1\` equals to y, \`2\` equals to z.
     * @return {number} A vector component value.
     */
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    /**
     * Returns a new vector with copied values from this instance.
     *
     * @return {Vector3} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    /**
     * Copies the values of the given vector to this instance.
     *
     * @param {Vector3} v - The vector to copy.
     * @return {Vector3} A reference to this vector.
     */
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector3} v - The vector to add.
     * @return {Vector3} A reference to this vector.
     */
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    /**
     * Adds the given scalar value to all components of this instance.
     *
     * @param {number} s - The scalar to add.
     * @return {Vector3} A reference to this vector.
     */
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      return this;
    }
    /**
     * Adds the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    }
    /**
     * Adds the given vector scaled by the given factor to this instance.
     *
     * @param {Vector3|Vector4} v - The vector.
     * @param {number} s - The factor that scales \`v\`.
     * @return {Vector3} A reference to this vector.
     */
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
    }
    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector3} v - The vector to subtract.
     * @return {Vector3} A reference to this vector.
     */
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    /**
     * Subtracts the given scalar value from all components of this instance.
     *
     * @param {number} s - The scalar to subtract.
     * @return {Vector3} A reference to this vector.
     */
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      return this;
    }
    /**
     * Subtracts the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    }
    /**
     * Multiplies the given vector with this instance.
     *
     * @param {Vector3} v - The vector to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }
    /**
     * Multiplies the given scalar value with all components of this instance.
     *
     * @param {number} scalar - The scalar to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    /**
     * Multiplies the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    multiplyVectors(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    }
    /**
     * Applies the given Euler rotation to this vector.
     *
     * @param {Euler} euler - The Euler angles.
     * @return {Vector3} A reference to this vector.
     */
    applyEuler(euler) {
      return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
    }
    /**
     * Applies a rotation specified by an axis and an angle to this vector.
     *
     * @param {Vector3} axis - A normalized vector representing the rotation axis.
     * @param {number} angle - The angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    applyAxisAngle(axis, angle) {
      return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
    }
    /**
     * Multiplies this vector with the given 3x3 matrix.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix3(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x2 + e[3] * y + e[6] * z;
      this.y = e[1] * x2 + e[4] * y + e[7] * z;
      this.z = e[2] * x2 + e[5] * y + e[8] * z;
      return this;
    }
    /**
     * Multiplies this vector by the given normal matrix and normalizes
     * the result.
     *
     * @param {Matrix3} m - The normal matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyNormalMatrix(m) {
      return this.applyMatrix3(m).normalize();
    }
    /**
     * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
     * divides by perspective.
     *
     * @param {Matrix4} m - The matrix to apply.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix4(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      const w = 1 / (e[3] * x2 + e[7] * y + e[11] * z + e[15]);
      this.x = (e[0] * x2 + e[4] * y + e[8] * z + e[12]) * w;
      this.y = (e[1] * x2 + e[5] * y + e[9] * z + e[13]) * w;
      this.z = (e[2] * x2 + e[6] * y + e[10] * z + e[14]) * w;
      return this;
    }
    /**
     * Applies the given Quaternion to this vector.
     *
     * @param {Quaternion} q - The Quaternion.
     * @return {Vector3} A reference to this vector.
     */
    applyQuaternion(q) {
      const vx = this.x, vy = this.y, vz = this.z;
      const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      const tx = 2 * (qy * vz - qz * vy);
      const ty = 2 * (qz * vx - qx * vz);
      const tz = 2 * (qx * vy - qy * vx);
      this.x = vx + qw * tx + qy * tz - qz * ty;
      this.y = vy + qw * ty + qz * tx - qx * tz;
      this.z = vz + qw * tz + qx * ty - qy * tx;
      return this;
    }
    /**
     * Projects this vector from world space into the camera's normalized
     * device coordinate (NDC) space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    project(camera) {
      return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
    }
    /**
     * Unprojects this vector from the camera's normalized device coordinate (NDC)
     * space into world space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    unproject(camera) {
      return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
    }
    /**
     * Transforms the direction of this vector by a matrix (the upper left 3 x 3
     * subset of the given 4x4 matrix and then normalizes the result.
     *
     * @param {Matrix4} m - The matrix.
     * @return {Vector3} A reference to this vector.
     */
    transformDirection(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x2 + e[4] * y + e[8] * z;
      this.y = e[1] * x2 + e[5] * y + e[9] * z;
      this.z = e[2] * x2 + e[6] * y + e[10] * z;
      return this.normalize();
    }
    /**
     * Divides this instance by the given vector.
     *
     * @param {Vector3} v - The vector to divide.
     * @return {Vector3} A reference to this vector.
     */
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    /**
     * Divides this vector by the given scalar.
     *
     * @param {number} scalar - The scalar to divide.
     * @return {Vector3} A reference to this vector.
     */
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    /**
     * If this vector's x, y or z value is greater than the given vector's x, y or z
     * value, replace that value with the corresponding min value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is less than the given vector's x, y or z
     * value, replace that value with the corresponding max value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is greater than the max vector's x, y or z
     * value, it is replaced by the corresponding value.
     * If this vector's x, y or z value is less than the min vector's x, y or z value,
     * it is replaced by the corresponding value.
     *
     * @param {Vector3} min - The minimum x, y and z values.
     * @param {Vector3} max - The maximum x, y and z values in the desired range.
     * @return {Vector3} A reference to this vector.
     */
    clamp(min, max2) {
      this.x = clamp(this.x, min.x, max2.x);
      this.y = clamp(this.y, min.y, max2.y);
      this.z = clamp(this.z, min.z, max2.z);
      return this;
    }
    /**
     * If this vector's x, y or z values are greater than the max value, they are
     * replaced by the max value.
     * If this vector's x, y or z values are less than the min value, they are
     * replaced by the min value.
     *
     * @param {number} minVal - The minimum value the components will be clamped to.
     * @param {number} maxVal - The maximum value the components will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampScalar(minVal, maxVal) {
      this.x = clamp(this.x, minVal, maxVal);
      this.y = clamp(this.y, minVal, maxVal);
      this.z = clamp(this.z, minVal, maxVal);
      return this;
    }
    /**
     * If this vector's length is greater than the max value, it is replaced by
     * the max value.
     * If this vector's length is less than the min value, it is replaced by the
     * min value.
     *
     * @param {number} min - The minimum value the vector length will be clamped to.
     * @param {number} max - The maximum value the vector length will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampLength(min, max2) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max2));
    }
    /**
     * The components of this vector are rounded down to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded up to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded to the nearest integer value
     *
     * @return {Vector3} A reference to this vector.
     */
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded towards zero (up if negative,
     * down if positive) to an integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      return this;
    }
    /**
     * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
     *
     * @return {Vector3} A reference to this vector.
     */
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
    /**
     * Calculates the dot product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    // TODO lengthSquared?
    /**
     * Computes the square of the Euclidean length (straight-line length) from
     * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
     * compare the length squared instead as it is slightly more efficient to calculate.
     *
     * @return {number} The square length of this vector.
     */
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
     *
     * @return {number} The length of this vector.
     */
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * Computes the Manhattan length of this vector.
     *
     * @return {number} The length of this vector.
     */
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    /**
     * Converts this vector to a unit vector - that is, sets it equal to a vector
     * with the same direction as this one, but with a vector length of \`1\`.
     *
     * @return {Vector3} A reference to this vector.
     */
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    /**
     * Sets this vector to a vector with the same direction as this one, but
     * with the specified length.
     *
     * @param {number} length - The new length of this vector.
     * @return {Vector3} A reference to this vector.
     */
    setLength(length) {
      return this.normalize().multiplyScalar(length);
    }
    /**
     * Linearly interpolates between the given vector and this instance, where
     * alpha is the percent distance along the line - alpha = 0 will be this
     * vector, and alpha = 1 will be the given one.
     *
     * @param {Vector3} v - The vector to interpolate towards.
     * @param {number} alpha - The interpolation factor, typically in the closed interval \`[0, 1]\`.
     * @return {Vector3} A reference to this vector.
     */
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given vectors, where alpha is the percent
     * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
     * be the second one. The result is stored in this instance.
     *
     * @param {Vector3} v1 - The first vector.
     * @param {Vector3} v2 - The second vector.
     * @param {number} alpha - The interpolation factor, typically in the closed interval \`[0, 1]\`.
     * @return {Vector3} A reference to this vector.
     */
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      return this;
    }
    /**
     * Calculates the cross product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the cross product with.
     * @return {Vector3} The result of the cross product.
     */
    cross(v) {
      return this.crossVectors(this, v);
    }
    /**
     * Calculates the cross product of the given vectors and stores the result
     * in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    crossVectors(a, b) {
      const ax = a.x, ay = a.y, az = a.z;
      const bx = b.x, by = b.y, bz = b.z;
      this.x = ay * bz - az * by;
      this.y = az * bx - ax * bz;
      this.z = ax * by - ay * bx;
      return this;
    }
    /**
     * Projects this vector onto the given one.
     *
     * @param {Vector3} v - The vector to project to.
     * @return {Vector3} A reference to this vector.
     */
    projectOnVector(v) {
      const denominator = v.lengthSq();
      if (denominator === 0) return this.set(0, 0, 0);
      const scalar = v.dot(this) / denominator;
      return this.copy(v).multiplyScalar(scalar);
    }
    /**
     * Projects this vector onto a plane by subtracting this
     * vector projected onto the plane's normal from this vector.
     *
     * @param {Vector3} planeNormal - The plane normal.
     * @return {Vector3} A reference to this vector.
     */
    projectOnPlane(planeNormal) {
      _vector$c.copy(this).projectOnVector(planeNormal);
      return this.sub(_vector$c);
    }
    /**
     * Reflects this vector off a plane orthogonal to the given normal vector.
     *
     * @param {Vector3} normal - The (normalized) normal vector.
     * @return {Vector3} A reference to this vector.
     */
    reflect(normal) {
      return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    /**
     * Returns the angle between the given vector and this instance in radians.
     *
     * @param {Vector3} v - The vector to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp(theta, -1, 1));
    }
    /**
     * Computes the distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the distance to.
     * @return {number} The distance.
     */
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    /**
     * Computes the squared distance from the given vector to this instance.
     * If you are just comparing the distance with another distance, you should compare
     * the distance squared instead as it is slightly more efficient to calculate.
     *
     * @param {Vector3} v - The vector to compute the squared distance to.
     * @return {number} The squared distance.
     */
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    }
    /**
     * Computes the Manhattan distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the Manhattan distance to.
     * @return {number} The Manhattan distance.
     */
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {Spherical} s - The spherical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromSpherical(s) {
      return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} phi - The phi angle in radians.
     * @param {number} theta - The theta angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    setFromSphericalCoords(radius, phi, theta) {
      const sinPhiRadius = Math.sin(phi) * radius;
      this.x = sinPhiRadius * Math.sin(theta);
      this.y = Math.cos(phi) * radius;
      this.z = sinPhiRadius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {Cylindrical} c - The cylindrical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindrical(c) {
      return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} theta - The theta angle in radians.
     * @param {number} y - The y value.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindricalCoords(radius, theta, y) {
      this.x = radius * Math.sin(theta);
      this.y = y;
      this.z = radius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components to the position elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    }
    /**
     * Sets the vector components to the scale elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixScale(m) {
      const sx = this.setFromMatrixColumn(m, 0).length();
      const sy = this.setFromMatrixColumn(m, 1).length();
      const sz = this.setFromMatrixColumn(m, 2).length();
      this.x = sx;
      this.y = sy;
      this.z = sz;
      return this;
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixColumn(m, index) {
      return this.fromArray(m.elements, index * 4);
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrix3Column(m, index) {
      return this.fromArray(m.elements, index * 3);
    }
    /**
     * Sets the vector components from the given Euler angles.
     *
     * @param {Euler} e - The Euler angles to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromEuler(e) {
      this.x = e._x;
      this.y = e._y;
      this.z = e._z;
      return this;
    }
    /**
     * Sets the vector components from the RGB components of the
     * given color.
     *
     * @param {Color} c - The color to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromColor(c) {
      this.x = c.r;
      this.y = c.g;
      this.z = c.b;
      return this;
    }
    /**
     * Returns \`true\` if this vector is equal with the given one.
     *
     * @param {Vector3} v - The vector to test for equality.
     * @return {boolean} Whether this vector is equal with the given one.
     */
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z;
    }
    /**
     * Sets this vector's x value to be \`array[ offset ]\`, y value to be \`array[ offset + 1 ]\`
     * and z value to be \`array[ offset + 2 ]\`.
     *
     * @param {Array<number>} array - An array holding the vector component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Vector3} A reference to this vector.
     */
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      return this;
    }
    /**
     * Writes the components of this vector to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the vector components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The vector components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      return array;
    }
    /**
     * Sets the components of this vector from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
     * @param {number} index - The index into the attribute.
     * @return {Vector3} A reference to this vector.
     */
    fromBufferAttribute(attribute, index) {
      this.x = attribute.getX(index);
      this.y = attribute.getY(index);
      this.z = attribute.getZ(index);
      return this;
    }
    /**
     * Sets each component of this vector to a pseudo-random value between \`0\` and
     * \`1\`, excluding \`1\`.
     *
     * @return {Vector3} A reference to this vector.
     */
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
    /**
     * Sets this vector to a uniformly random point on a unit sphere.
     *
     * @return {Vector3} A reference to this vector.
     */
    randomDirection() {
      const theta = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1;
      const c = Math.sqrt(1 - u * u);
      this.x = c * Math.cos(theta);
      this.y = u;
      this.z = c * Math.sin(theta);
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
    }
  }
  const _vector$c = /* @__PURE__ */ new Vector3();
  const _quaternion$4 = /* @__PURE__ */ new Quaternion();
  class Matrix3 {
    /**
     * Constructs a new 3x3 matrix. The arguments are supposed to be
     * in row-major order. If no arguments are provided, the constructor
     * initializes the matrix as an identity matrix.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     */
    constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      Matrix3.prototype.isMatrix3 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
      }
    }
    /**
     * Sets the elements of the matrix.The arguments are supposed to be
     * in row-major order.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     * @return {Matrix3} A reference to this matrix.
     */
    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      const te = this.elements;
      te[0] = n11;
      te[1] = n21;
      te[2] = n31;
      te[3] = n12;
      te[4] = n22;
      te[5] = n32;
      te[6] = n13;
      te[7] = n23;
      te[8] = n33;
      return this;
    }
    /**
     * Sets this matrix to the 3x3 identity matrix.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Copies the values of the given matrix to this instance.
     *
     * @param {Matrix3} m - The matrix to copy.
     * @return {Matrix3} A reference to this matrix.
     */
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      return this;
    }
    /**
     * Extracts the basis of this matrix into the three axis vectors provided.
     *
     * @param {Vector3} xAxis - The basis's x axis.
     * @param {Vector3} yAxis - The basis's y axis.
     * @param {Vector3} zAxis - The basis's z axis.
     * @return {Matrix3} A reference to this matrix.
     */
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrix3Column(this, 0);
      yAxis.setFromMatrix3Column(this, 1);
      zAxis.setFromMatrix3Column(this, 2);
      return this;
    }
    /**
     * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    setFromMatrix4(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[4],
        me[8],
        me[1],
        me[5],
        me[9],
        me[2],
        me[6],
        me[10]
      );
      return this;
    }
    /**
     * Post-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    /**
     * Pre-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    /**
     * Multiples the given 3x3 matrices and stores the result
     * in this matrix.
     *
     * @param {Matrix3} a - The first matrix.
     * @param {Matrix3} b - The second matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[3], a13 = ae[6];
      const a21 = ae[1], a22 = ae[4], a23 = ae[7];
      const a31 = ae[2], a32 = ae[5], a33 = ae[8];
      const b11 = be[0], b12 = be[3], b13 = be[6];
      const b21 = be[1], b22 = be[4], b23 = be[7];
      const b31 = be[2], b32 = be[5], b33 = be[8];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31;
      te[3] = a11 * b12 + a12 * b22 + a13 * b32;
      te[6] = a11 * b13 + a12 * b23 + a13 * b33;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31;
      te[4] = a21 * b12 + a22 * b22 + a23 * b32;
      te[7] = a21 * b13 + a22 * b23 + a23 * b33;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31;
      te[5] = a31 * b12 + a32 * b22 + a33 * b32;
      te[8] = a31 * b13 + a32 * b23 + a33 * b33;
      return this;
    }
    /**
     * Multiplies every component of the matrix by the given scalar.
     *
     * @param {number} s - The scalar.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[3] *= s;
      te[6] *= s;
      te[1] *= s;
      te[4] *= s;
      te[7] *= s;
      te[2] *= s;
      te[5] *= s;
      te[8] *= s;
      return this;
    }
    /**
     * Computes and returns the determinant of this matrix.
     *
     * @return {number} The determinant.
     */
    determinant() {
      const te = this.elements;
      const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i2 = te[8];
      return a * e * i2 - a * f * h - b * d * i2 + b * f * g + c * d * h - c * e * g;
    }
    /**
     * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
     * You can not invert with a determinant of zero. If you attempt this, the method produces
     * a zero matrix instead.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n31 * n23 - n33 * n21) * detInv;
      te[2] = (n32 * n21 - n31 * n22) * detInv;
      te[3] = t12 * detInv;
      te[4] = (n33 * n11 - n31 * n13) * detInv;
      te[5] = (n31 * n12 - n32 * n11) * detInv;
      te[6] = t13 * detInv;
      te[7] = (n21 * n13 - n23 * n11) * detInv;
      te[8] = (n22 * n11 - n21 * n12) * detInv;
      return this;
    }
    /**
     * Transposes this matrix in place.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    transpose() {
      let tmp;
      const m = this.elements;
      tmp = m[1];
      m[1] = m[3];
      m[3] = tmp;
      tmp = m[2];
      m[2] = m[6];
      m[6] = tmp;
      tmp = m[5];
      m[5] = m[7];
      m[7] = tmp;
      return this;
    }
    /**
     * Computes the normal matrix which is the inverse transpose of the upper
     * left 3x3 portion of the given 4x4 matrix.
     *
     * @param {Matrix4} matrix4 - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    getNormalMatrix(matrix4) {
      return this.setFromMatrix4(matrix4).invert().transpose();
    }
    /**
     * Transposes this matrix into the supplied array, and returns itself unchanged.
     *
     * @param {Array<number>} r - An array to store the transposed matrix elements.
     * @return {Matrix3} A reference to this matrix.
     */
    transposeIntoArray(r) {
      const m = this.elements;
      r[0] = m[0];
      r[1] = m[3];
      r[2] = m[6];
      r[3] = m[1];
      r[4] = m[4];
      r[5] = m[7];
      r[6] = m[2];
      r[7] = m[5];
      r[8] = m[8];
      return this;
    }
    /**
     * Sets the UV transform matrix from offset, repeat, rotation, and center.
     *
     * @param {number} tx - Offset x.
     * @param {number} ty - Offset y.
     * @param {number} sx - Repeat x.
     * @param {number} sy - Repeat y.
     * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
     * @param {number} cx - Center x of rotation.
     * @param {number} cy - Center y of rotation
     * @return {Matrix3} A reference to this matrix.
     */
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
      const c = Math.cos(rotation);
      const s = Math.sin(rotation);
      this.set(
        sx * c,
        sx * s,
        -sx * (c * cx + s * cy) + cx + tx,
        -sy * s,
        sy * c,
        -sy * (-s * cx + c * cy) + cy + ty,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Scales this matrix with the given scalar values.
     *
     * @param {number} sx - The amount to scale in the X axis.
     * @param {number} sy - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    scale(sx, sy) {
      this.premultiply(_m3.makeScale(sx, sy));
      return this;
    }
    /**
     * Rotates this matrix by the given angle.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    rotate(theta) {
      this.premultiply(_m3.makeRotation(-theta));
      return this;
    }
    /**
     * Translates this matrix by the given scalar values.
     *
     * @param {number} tx - The amount to translate in the X axis.
     * @param {number} ty - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    translate(tx, ty) {
      this.premultiply(_m3.makeTranslation(tx, ty));
      return this;
    }
    // for 2D Transforms
    /**
     * Sets this matrix as a 2D translation transform.
     *
     * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
     * @param {number} y - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeTranslation(x2, y) {
      if (x2.isVector2) {
        this.set(
          1,
          0,
          x2.x,
          0,
          1,
          x2.y,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          x2,
          0,
          1,
          y,
          0,
          0,
          1
        );
      }
      return this;
    }
    /**
     * Sets this matrix as a 2D rotational transformation.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    makeRotation(theta) {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        s,
        c,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Sets this matrix as a 2D scale transform.
     *
     * @param {number} x - The amount to scale in the X axis.
     * @param {number} y - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeScale(x2, y) {
      this.set(
        x2,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Returns \`true\` if this matrix is equal with the given one.
     *
     * @param {Matrix3} matrix - The matrix to test for equality.
     * @return {boolean} Whether this matrix is equal with the given one.
     */
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i2 = 0; i2 < 9; i2++) {
        if (te[i2] !== me[i2]) return false;
      }
      return true;
    }
    /**
     * Sets the elements of the matrix from the given array.
     *
     * @param {Array<number>} array - The matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Matrix3} A reference to this matrix.
     */
    fromArray(array, offset = 0) {
      for (let i2 = 0; i2 < 9; i2++) {
        this.elements[i2] = array[i2 + offset];
      }
      return this;
    }
    /**
     * Writes the elements of this matrix to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The matrix elements in column-major order.
     */
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      return array;
    }
    /**
     * Returns a matrix with copied values from this instance.
     *
     * @return {Matrix3} A clone of this instance.
     */
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const _m3 = /* @__PURE__ */ new Matrix3();
  const _cache = {};
  function warnOnce(message) {
    if (message in _cache) return;
    _cache[message] = true;
    console.warn(message);
  }
  const LINEAR_REC709_TO_XYZ = /* @__PURE__ */ new Matrix3().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  );
  const XYZ_TO_LINEAR_REC709 = /* @__PURE__ */ new Matrix3().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
  function createColorManagement() {
    const ColorManagement2 = {
      enabled: true,
      workingColorSpace: LinearSRGBColorSpace,
      /**
       * Implementations of supported color spaces.
       *
       * Required:
       *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
       *	- whitePoint: reference white [ x y ]
       *	- transfer: transfer function (pre-defined)
       *	- toXYZ: Matrix3 RGB to XYZ transform
       *	- fromXYZ: Matrix3 XYZ to RGB transform
       *	- luminanceCoefficients: RGB luminance coefficients
       *
       * Optional:
       *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
       *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
       *
       * Reference:
       * - https://www.russellcottrell.com/photo/matrixCalculator.htm
       */
      spaces: {},
      convert: function(color, sourceColorSpace, targetColorSpace) {
        if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
          return color;
        }
        if (this.spaces[sourceColorSpace].transfer === SRGBTransfer) {
          color.r = SRGBToLinear(color.r);
          color.g = SRGBToLinear(color.g);
          color.b = SRGBToLinear(color.b);
        }
        if (this.spaces[sourceColorSpace].primaries !== this.spaces[targetColorSpace].primaries) {
          color.applyMatrix3(this.spaces[sourceColorSpace].toXYZ);
          color.applyMatrix3(this.spaces[targetColorSpace].fromXYZ);
        }
        if (this.spaces[targetColorSpace].transfer === SRGBTransfer) {
          color.r = LinearToSRGB(color.r);
          color.g = LinearToSRGB(color.g);
          color.b = LinearToSRGB(color.b);
        }
        return color;
      },
      workingToColorSpace: function(color, targetColorSpace) {
        return this.convert(color, this.workingColorSpace, targetColorSpace);
      },
      colorSpaceToWorking: function(color, sourceColorSpace) {
        return this.convert(color, sourceColorSpace, this.workingColorSpace);
      },
      getPrimaries: function(colorSpace) {
        return this.spaces[colorSpace].primaries;
      },
      getTransfer: function(colorSpace) {
        if (colorSpace === NoColorSpace) return LinearTransfer;
        return this.spaces[colorSpace].transfer;
      },
      getLuminanceCoefficients: function(target, colorSpace = this.workingColorSpace) {
        return target.fromArray(this.spaces[colorSpace].luminanceCoefficients);
      },
      define: function(colorSpaces) {
        Object.assign(this.spaces, colorSpaces);
      },
      // Internal APIs
      _getMatrix: function(targetMatrix, sourceColorSpace, targetColorSpace) {
        return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ);
      },
      _getDrawingBufferColorSpace: function(colorSpace) {
        return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function(colorSpace = this.workingColorSpace) {
        return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace;
      },
      // Deprecated
      fromWorkingColorSpace: function(color, targetColorSpace) {
        warnOnce("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
        return ColorManagement2.workingToColorSpace(color, targetColorSpace);
      },
      toWorkingColorSpace: function(color, sourceColorSpace) {
        warnOnce("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
        return ColorManagement2.colorSpaceToWorking(color, sourceColorSpace);
      }
    };
    const REC709_PRIMARIES = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
    const REC709_LUMINANCE_COEFFICIENTS = [0.2126, 0.7152, 0.0722];
    const D65 = [0.3127, 0.329];
    ColorManagement2.define({
      [LinearSRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: LinearTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      },
      [SRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: SRGBTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      }
    });
    return ColorManagement2;
  }
  const ColorManagement = /* @__PURE__ */ createColorManagement();
  function SRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function LinearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  class Box3 {
    /**
     * Constructs a new bounding box.
     *
     * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
     * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
     */
    constructor(min = new Vector3(Infinity, Infinity, Infinity), max2 = new Vector3(-Infinity, -Infinity, -Infinity)) {
      this.isBox3 = true;
      this.min = min;
      this.max = max2;
    }
    /**
     * Sets the lower and upper boundaries of this box.
     * Please note that this method only copies the values from the given objects.
     *
     * @param {Vector3} min - The lower boundary of the box.
     * @param {Vector3} max - The upper boundary of the box.
     * @return {Box3} A reference to this bounding box.
     */
    set(min, max2) {
      this.min.copy(min);
      this.max.copy(max2);
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given array.
     *
     * @param {Array<number>} array - An array holding 3D position data.
     * @return {Box3} A reference to this bounding box.
     */
    setFromArray(array) {
      this.makeEmpty();
      for (let i2 = 0, il = array.length; i2 < il; i2 += 3) {
        this.expandByPoint(_vector$b.fromArray(array, i2));
      }
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
     * @return {Box3} A reference to this bounding box.
     */
    setFromBufferAttribute(attribute) {
      this.makeEmpty();
      for (let i2 = 0, il = attribute.count; i2 < il; i2++) {
        this.expandByPoint(_vector$b.fromBufferAttribute(attribute, i2));
      }
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given array.
     *
     * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
     * @return {Box3} A reference to this bounding box.
     */
    setFromPoints(points) {
      this.makeEmpty();
      for (let i2 = 0, il = points.length; i2 < il; i2++) {
        this.expandByPoint(points[i2]);
      }
      return this;
    }
    /**
     * Centers this box on the given center vector and sets this box's width, height and
     * depth to the given size values.
     *
     * @param {Vector3} center - The center of the box.
     * @param {Vector3} size - The x, y and z dimensions of the box.
     * @return {Box3} A reference to this bounding box.
     */
    setFromCenterAndSize(center, size) {
      const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);
      return this;
    }
    /**
     * Computes the world-axis-aligned bounding box for the given 3D object
     * (including its children), accounting for the object's, and children's,
     * world transforms. The function may result in a larger box than strictly necessary.
     *
     * @param {Object3D} object - The 3D object to compute the bounding box for.
     * @param {boolean} [precise=false] - If set to \`true\`, the method computes the smallest
     * world-axis-aligned bounding box at the expense of more computation.
     * @return {Box3} A reference to this bounding box.
     */
    setFromObject(object, precise = false) {
      this.makeEmpty();
      return this.expandByObject(object, precise);
    }
    /**
     * Returns a new box with copied values from this instance.
     *
     * @return {Box3} A clone of this instance.
     */
    clone() {
      return new this.constructor().copy(this);
    }
    /**
     * Copies the values of the given box to this instance.
     *
     * @param {Box3} box - The box to copy.
     * @return {Box3} A reference to this bounding box.
     */
    copy(box) {
      this.min.copy(box.min);
      this.max.copy(box.max);
      return this;
    }
    /**
     * Makes this box empty which means in encloses a zero space in 3D.
     *
     * @return {Box3} A reference to this bounding box.
     */
    makeEmpty() {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    }
    /**
     * Returns true if this box includes zero points within its bounds.
     * Note that a box with equal lower and upper bounds still includes one
     * point, the one both bounds share.
     *
     * @return {boolean} Whether this box is empty or not.
     */
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    /**
     * Returns the center point of this box.
     *
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The center point.
     */
    getCenter(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    /**
     * Returns the dimensions of this box.
     *
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The size.
     */
    getSize(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
    }
    /**
     * Expands the boundaries of this box to include the given point.
     *
     * @param {Vector3} point - The point that should be included by the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByPoint(point) {
      this.min.min(point);
      this.max.max(point);
      return this;
    }
    /**
     * Expands this box equilaterally by the given vector. The width of this
     * box will be expanded by the x component of the vector in both
     * directions. The height of this box will be expanded by the y component of
     * the vector in both directions. The depth of this box will be
     * expanded by the z component of the vector in both directions.
     *
     * @param {Vector3} vector - The vector that should expand the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByVector(vector) {
      this.min.sub(vector);
      this.max.add(vector);
      return this;
    }
    /**
     * Expands each dimension of the box by the given scalar. If negative, the
     * dimensions of the box will be contracted.
     *
     * @param {number} scalar - The scalar value that should expand the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByScalar(scalar) {
      this.min.addScalar(-scalar);
      this.max.addScalar(scalar);
      return this;
    }
    /**
     * Expands the boundaries of this box to include the given 3D object and
     * its children, accounting for the object's, and children's, world
     * transforms. The function may result in a larger box than strictly
     * necessary (unless the precise parameter is set to true).
     *
     * @param {Object3D} object - The 3D object that should expand the bounding box.
     * @param {boolean} precise - If set to \`true\`, the method expands the bounding box
     * as little as necessary at the expense of more computation.
     * @return {Box3} A reference to this bounding box.
     */
    expandByObject(object, precise = false) {
      object.updateWorldMatrix(false, false);
      const geometry = object.geometry;
      if (geometry !== void 0) {
        const positionAttribute = geometry.getAttribute("position");
        if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
          for (let i2 = 0, l = positionAttribute.count; i2 < l; i2++) {
            if (object.isMesh === true) {
              object.getVertexPosition(i2, _vector$b);
            } else {
              _vector$b.fromBufferAttribute(positionAttribute, i2);
            }
            _vector$b.applyMatrix4(object.matrixWorld);
            this.expandByPoint(_vector$b);
          }
        } else {
          if (object.boundingBox !== void 0) {
            if (object.boundingBox === null) {
              object.computeBoundingBox();
            }
            _box$4.copy(object.boundingBox);
          } else {
            if (geometry.boundingBox === null) {
              geometry.computeBoundingBox();
            }
            _box$4.copy(geometry.boundingBox);
          }
          _box$4.applyMatrix4(object.matrixWorld);
          this.union(_box$4);
        }
      }
      const children = object.children;
      for (let i2 = 0, l = children.length; i2 < l; i2++) {
        this.expandByObject(children[i2], precise);
      }
      return this;
    }
    /**
     * Returns \`true\` if the given point lies within or on the boundaries of this box.
     *
     * @param {Vector3} point - The point to test.
     * @return {boolean} Whether the bounding box contains the given point or not.
     */
    containsPoint(point) {
      return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
    }
    /**
     * Returns \`true\` if this bounding box includes the entirety of the given bounding box.
     * If this box and the given one are identical, this function also returns \`true\`.
     *
     * @param {Box3} box - The bounding box to test.
     * @return {boolean} Whether the bounding box contains the given bounding box or not.
     */
    containsBox(box) {
      return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
    }
    /**
     * Returns a point as a proportion of this box's width, height and depth.
     *
     * @param {Vector3} point - A point in 3D space.
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} A point as a proportion of this box's width, height and depth.
     */
    getParameter(point, target) {
      return target.set(
        (point.x - this.min.x) / (this.max.x - this.min.x),
        (point.y - this.min.y) / (this.max.y - this.min.y),
        (point.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    /**
     * Returns \`true\` if the given bounding box intersects with this bounding box.
     *
     * @param {Box3} box - The bounding box to test.
     * @return {boolean} Whether the given bounding box intersects with this bounding box.
     */
    intersectsBox(box) {
      return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
    }
    /**
     * Returns \`true\` if the given bounding sphere intersects with this bounding box.
     *
     * @param {Sphere} sphere - The bounding sphere to test.
     * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
     */
    intersectsSphere(sphere) {
      this.clampPoint(sphere.center, _vector$b);
      return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
    }
    /**
     * Returns \`true\` if the given plane intersects with this bounding box.
     *
     * @param {Plane} plane - The plane to test.
     * @return {boolean} Whether the given plane intersects with this bounding box.
     */
    intersectsPlane(plane) {
      let min, max2;
      if (plane.normal.x > 0) {
        min = plane.normal.x * this.min.x;
        max2 = plane.normal.x * this.max.x;
      } else {
        min = plane.normal.x * this.max.x;
        max2 = plane.normal.x * this.min.x;
      }
      if (plane.normal.y > 0) {
        min += plane.normal.y * this.min.y;
        max2 += plane.normal.y * this.max.y;
      } else {
        min += plane.normal.y * this.max.y;
        max2 += plane.normal.y * this.min.y;
      }
      if (plane.normal.z > 0) {
        min += plane.normal.z * this.min.z;
        max2 += plane.normal.z * this.max.z;
      } else {
        min += plane.normal.z * this.max.z;
        max2 += plane.normal.z * this.min.z;
      }
      return min <= -plane.constant && max2 >= -plane.constant;
    }
    /**
     * Returns \`true\` if the given triangle intersects with this bounding box.
     *
     * @param {Triangle} triangle - The triangle to test.
     * @return {boolean} Whether the given triangle intersects with this bounding box.
     */
    intersectsTriangle(triangle) {
      if (this.isEmpty()) {
        return false;
      }
      this.getCenter(_center);
      _extents.subVectors(this.max, _center);
      _v0$2.subVectors(triangle.a, _center);
      _v1$7.subVectors(triangle.b, _center);
      _v2$4.subVectors(triangle.c, _center);
      _f0.subVectors(_v1$7, _v0$2);
      _f1.subVectors(_v2$4, _v1$7);
      _f2.subVectors(_v0$2, _v2$4);
      let axes = [
        0,
        -_f0.z,
        _f0.y,
        0,
        -_f1.z,
        _f1.y,
        0,
        -_f2.z,
        _f2.y,
        _f0.z,
        0,
        -_f0.x,
        _f1.z,
        0,
        -_f1.x,
        _f2.z,
        0,
        -_f2.x,
        -_f0.y,
        _f0.x,
        0,
        -_f1.y,
        _f1.x,
        0,
        -_f2.y,
        _f2.x,
        0
      ];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      _triangleNormal.crossVectors(_f0, _f1);
      axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
      return satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents);
    }
    /**
     * Clamps the given point within the bounds of this box.
     *
     * @param {Vector3} point - The point to clamp.
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The clamped point.
     */
    clampPoint(point, target) {
      return target.copy(point).clamp(this.min, this.max);
    }
    /**
     * Returns the euclidean distance from any edge of this box to the specified point. If
     * the given point lies inside of this box, the distance will be \`0\`.
     *
     * @param {Vector3} point - The point to compute the distance to.
     * @return {number} The euclidean distance.
     */
    distanceToPoint(point) {
      return this.clampPoint(point, _vector$b).distanceTo(point);
    }
    /**
     * Returns a bounding sphere that encloses this bounding box.
     *
     * @param {Sphere} target - The target sphere that is used to store the method's result.
     * @return {Sphere} The bounding sphere that encloses this bounding box.
     */
    getBoundingSphere(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
      } else {
        this.getCenter(target.center);
        target.radius = this.getSize(_vector$b).length() * 0.5;
      }
      return target;
    }
    /**
     * Computes the intersection of this bounding box and the given one, setting the upper
     * bound of this box to the lesser of the two boxes' upper bounds and the
     * lower bound of this box to the greater of the two boxes' lower bounds. If
     * there's no overlap, makes this box empty.
     *
     * @param {Box3} box - The bounding box to intersect with.
     * @return {Box3} A reference to this bounding box.
     */
    intersect(box) {
      this.min.max(box.min);
      this.max.min(box.max);
      if (this.isEmpty()) this.makeEmpty();
      return this;
    }
    /**
     * Computes the union of this box and another and the given one, setting the upper
     * bound of this box to the greater of the two boxes' upper bounds and the
     * lower bound of this box to the lesser of the two boxes' lower bounds.
     *
     * @param {Box3} box - The bounding box that will be unioned with this instance.
     * @return {Box3} A reference to this bounding box.
     */
    union(box) {
      this.min.min(box.min);
      this.max.max(box.max);
      return this;
    }
    /**
     * Transforms this bounding box by the given 4x4 transformation matrix.
     *
     * @param {Matrix4} matrix - The transformation matrix.
     * @return {Box3} A reference to this bounding box.
     */
    applyMatrix4(matrix) {
      if (this.isEmpty()) return this;
      _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
      _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
      this.setFromPoints(_points);
      return this;
    }
    /**
     * Adds the given offset to both the upper and lower bounds of this bounding box,
     * effectively moving it in 3D space.
     *
     * @param {Vector3} offset - The offset that should be used to translate the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    translate(offset) {
      this.min.add(offset);
      this.max.add(offset);
      return this;
    }
    /**
     * Returns \`true\` if this bounding box is equal with the given one.
     *
     * @param {Box3} box - The box to test for equality.
     * @return {boolean} Whether this bounding box is equal with the given one.
     */
    equals(box) {
      return box.min.equals(this.min) && box.max.equals(this.max);
    }
    /**
     * Returns a serialized structure of the bounding box.
     *
     * @return {Object} Serialized structure with fields representing the object state.
     */
    toJSON() {
      return {
        min: this.min.toArray(),
        max: this.max.toArray()
      };
    }
    /**
     * Returns a serialized structure of the bounding box.
     *
     * @param {Object} json - The serialized json to set the box from.
     * @return {Box3} A reference to this bounding box.
     */
    fromJSON(json) {
      this.min.fromArray(json.min);
      this.max.fromArray(json.max);
      return this;
    }
  }
  const _points = [
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3()
  ];
  const _vector$b = /* @__PURE__ */ new Vector3();
  const _box$4 = /* @__PURE__ */ new Box3();
  const _v0$2 = /* @__PURE__ */ new Vector3();
  const _v1$7 = /* @__PURE__ */ new Vector3();
  const _v2$4 = /* @__PURE__ */ new Vector3();
  const _f0 = /* @__PURE__ */ new Vector3();
  const _f1 = /* @__PURE__ */ new Vector3();
  const _f2 = /* @__PURE__ */ new Vector3();
  const _center = /* @__PURE__ */ new Vector3();
  const _extents = /* @__PURE__ */ new Vector3();
  const _triangleNormal = /* @__PURE__ */ new Vector3();
  const _testAxis = /* @__PURE__ */ new Vector3();
  function satForAxes(axes, v0, v1, v2, extents) {
    for (let i2 = 0, j = axes.length - 3; i2 <= j; i2 += 3) {
      _testAxis.fromArray(axes, i2);
      const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
      const p0 = v0.dot(_testAxis);
      const p1 = v1.dot(_testAxis);
      const p2 = v2.dot(_testAxis);
      if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
        return false;
      }
    }
    return true;
  }
  const _colorKeywords = {
    "aliceblue": 15792383,
    "antiquewhite": 16444375,
    "aqua": 65535,
    "aquamarine": 8388564,
    "azure": 15794175,
    "beige": 16119260,
    "bisque": 16770244,
    "black": 0,
    "blanchedalmond": 16772045,
    "blue": 255,
    "blueviolet": 9055202,
    "brown": 10824234,
    "burlywood": 14596231,
    "cadetblue": 6266528,
    "chartreuse": 8388352,
    "chocolate": 13789470,
    "coral": 16744272,
    "cornflowerblue": 6591981,
    "cornsilk": 16775388,
    "crimson": 14423100,
    "cyan": 65535,
    "darkblue": 139,
    "darkcyan": 35723,
    "darkgoldenrod": 12092939,
    "darkgray": 11119017,
    "darkgreen": 25600,
    "darkgrey": 11119017,
    "darkkhaki": 12433259,
    "darkmagenta": 9109643,
    "darkolivegreen": 5597999,
    "darkorange": 16747520,
    "darkorchid": 10040012,
    "darkred": 9109504,
    "darksalmon": 15308410,
    "darkseagreen": 9419919,
    "darkslateblue": 4734347,
    "darkslategray": 3100495,
    "darkslategrey": 3100495,
    "darkturquoise": 52945,
    "darkviolet": 9699539,
    "deeppink": 16716947,
    "deepskyblue": 49151,
    "dimgray": 6908265,
    "dimgrey": 6908265,
    "dodgerblue": 2003199,
    "firebrick": 11674146,
    "floralwhite": 16775920,
    "forestgreen": 2263842,
    "fuchsia": 16711935,
    "gainsboro": 14474460,
    "ghostwhite": 16316671,
    "gold": 16766720,
    "goldenrod": 14329120,
    "gray": 8421504,
    "green": 32768,
    "greenyellow": 11403055,
    "grey": 8421504,
    "honeydew": 15794160,
    "hotpink": 16738740,
    "indianred": 13458524,
    "indigo": 4915330,
    "ivory": 16777200,
    "khaki": 15787660,
    "lavender": 15132410,
    "lavenderblush": 16773365,
    "lawngreen": 8190976,
    "lemonchiffon": 16775885,
    "lightblue": 11393254,
    "lightcoral": 15761536,
    "lightcyan": 14745599,
    "lightgoldenrodyellow": 16448210,
    "lightgray": 13882323,
    "lightgreen": 9498256,
    "lightgrey": 13882323,
    "lightpink": 16758465,
    "lightsalmon": 16752762,
    "lightseagreen": 2142890,
    "lightskyblue": 8900346,
    "lightslategray": 7833753,
    "lightslategrey": 7833753,
    "lightsteelblue": 11584734,
    "lightyellow": 16777184,
    "lime": 65280,
    "limegreen": 3329330,
    "linen": 16445670,
    "magenta": 16711935,
    "maroon": 8388608,
    "mediumaquamarine": 6737322,
    "mediumblue": 205,
    "mediumorchid": 12211667,
    "mediumpurple": 9662683,
    "mediumseagreen": 3978097,
    "mediumslateblue": 8087790,
    "mediumspringgreen": 64154,
    "mediumturquoise": 4772300,
    "mediumvioletred": 13047173,
    "midnightblue": 1644912,
    "mintcream": 16121850,
    "mistyrose": 16770273,
    "moccasin": 16770229,
    "navajowhite": 16768685,
    "navy": 128,
    "oldlace": 16643558,
    "olive": 8421376,
    "olivedrab": 7048739,
    "orange": 16753920,
    "orangered": 16729344,
    "orchid": 14315734,
    "palegoldenrod": 15657130,
    "palegreen": 10025880,
    "paleturquoise": 11529966,
    "palevioletred": 14381203,
    "papayawhip": 16773077,
    "peachpuff": 16767673,
    "peru": 13468991,
    "pink": 16761035,
    "plum": 14524637,
    "powderblue": 11591910,
    "purple": 8388736,
    "rebeccapurple": 6697881,
    "red": 16711680,
    "rosybrown": 12357519,
    "royalblue": 4286945,
    "saddlebrown": 9127187,
    "salmon": 16416882,
    "sandybrown": 16032864,
    "seagreen": 3050327,
    "seashell": 16774638,
    "sienna": 10506797,
    "silver": 12632256,
    "skyblue": 8900331,
    "slateblue": 6970061,
    "slategray": 7372944,
    "slategrey": 7372944,
    "snow": 16775930,
    "springgreen": 65407,
    "steelblue": 4620980,
    "tan": 13808780,
    "teal": 32896,
    "thistle": 14204888,
    "tomato": 16737095,
    "turquoise": 4251856,
    "violet": 15631086,
    "wheat": 16113331,
    "white": 16777215,
    "whitesmoke": 16119285,
    "yellow": 16776960,
    "yellowgreen": 10145074
  };
  const _hslA = { h: 0, s: 0, l: 0 };
  const _hslB = { h: 0, s: 0, l: 0 };
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
    return p;
  }
  class Color {
    /**
     * Constructs a new color.
     *
     * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
     * and that method is used throughout the rest of the documentation.
     *
     * @param {(number|string|Color)} [r] - The red component of the color. If \`g\` and \`b\` are
     * not provided, it can be hexadecimal triplet, a CSS-style string or another \`Color\` instance.
     * @param {number} [g] - The green component.
     * @param {number} [b] - The blue component.
     */
    constructor(r, g, b) {
      this.isColor = true;
      this.r = 1;
      this.g = 1;
      this.b = 1;
      return this.set(r, g, b);
    }
    /**
     * Sets the colors's components from the given values.
     *
     * @param {(number|string|Color)} [r] - The red component of the color. If \`g\` and \`b\` are
     * not provided, it can be hexadecimal triplet, a CSS-style string or another \`Color\` instance.
     * @param {number} [g] - The green component.
     * @param {number} [b] - The blue component.
     * @return {Color} A reference to this color.
     */
    set(r, g, b) {
      if (g === void 0 && b === void 0) {
        const value = r;
        if (value && value.isColor) {
          this.copy(value);
        } else if (typeof value === "number") {
          this.setHex(value);
        } else if (typeof value === "string") {
          this.setStyle(value);
        }
      } else {
        this.setRGB(r, g, b);
      }
      return this;
    }
    /**
     * Sets the colors's components to the given scalar value.
     *
     * @param {number} scalar - The scalar value.
     * @return {Color} A reference to this color.
     */
    setScalar(scalar) {
      this.r = scalar;
      this.g = scalar;
      this.b = scalar;
      return this;
    }
    /**
     * Sets this color from a hexadecimal value.
     *
     * @param {number} hex - The hexadecimal value.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setHex(hex, colorSpace = SRGBColorSpace) {
      hex = Math.floor(hex);
      this.r = (hex >> 16 & 255) / 255;
      this.g = (hex >> 8 & 255) / 255;
      this.b = (hex & 255) / 255;
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from RGB values.
     *
     * @param {number} r - Red channel value between \`0.0\` and \`1.0\`.
     * @param {number} g - Green channel value between \`0.0\` and \`1.0\`.
     * @param {number} b - Blue channel value between \`0.0\` and \`1.0\`.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
      this.r = r;
      this.g = g;
      this.b = b;
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from RGB values.
     *
     * @param {number} h - Hue value between \`0.0\` and \`1.0\`.
     * @param {number} s - Saturation value between \`0.0\` and \`1.0\`.
     * @param {number} l - Lightness value between \`0.0\` and \`1.0\`.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
      h = euclideanModulo(h, 1);
      s = clamp(s, 0, 1);
      l = clamp(l, 0, 1);
      if (s === 0) {
        this.r = this.g = this.b = l;
      } else {
        const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        const q = 2 * l - p;
        this.r = hue2rgb(q, p, h + 1 / 3);
        this.g = hue2rgb(q, p, h);
        this.b = hue2rgb(q, p, h - 1 / 3);
      }
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from a CSS-style string. For example, \`rgb(250, 0,0)\`,
     * \`rgb(100%, 0%, 0%)\`, \`hsl(0, 100%, 50%)\`, \`#ff0000\`, \`#f00\`, or \`red\` ( or
     * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
     * all 140 color names are supported).
     *
     * @param {string} style - Color as a CSS-style string.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setStyle(style, colorSpace = SRGBColorSpace) {
      function handleAlpha(string) {
        if (string === void 0) return;
        if (parseFloat(string) < 1) {
          console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
        }
      }
      let m;
      if (m = /^(\\w+)\\(([^\\)]*)\\)/.exec(style)) {
        let color;
        const name = m[1];
        const components = m[2];
        switch (name) {
          case "rgb":
          case "rgba":
            if (color = /^\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(255, parseInt(color[1], 10)) / 255,
                Math.min(255, parseInt(color[2], 10)) / 255,
                Math.min(255, parseInt(color[3], 10)) / 255,
                colorSpace
              );
            }
            if (color = /^\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(100, parseInt(color[1], 10)) / 100,
                Math.min(100, parseInt(color[2], 10)) / 100,
                Math.min(100, parseInt(color[3], 10)) / 100,
                colorSpace
              );
            }
            break;
          case "hsl":
          case "hsla":
            if (color = /^\\s*(\\d*\\.?\\d+)\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setHSL(
                parseFloat(color[1]) / 360,
                parseFloat(color[2]) / 100,
                parseFloat(color[3]) / 100,
                colorSpace
              );
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + style);
        }
      } else if (m = /^\\#([A-Fa-f\\d]+)$/.exec(style)) {
        const hex = m[1];
        const size = hex.length;
        if (size === 3) {
          return this.setRGB(
            parseInt(hex.charAt(0), 16) / 15,
            parseInt(hex.charAt(1), 16) / 15,
            parseInt(hex.charAt(2), 16) / 15,
            colorSpace
          );
        } else if (size === 6) {
          return this.setHex(parseInt(hex, 16), colorSpace);
        } else {
          console.warn("THREE.Color: Invalid hex color " + style);
        }
      } else if (style && style.length > 0) {
        return this.setColorName(style, colorSpace);
      }
      return this;
    }
    /**
     * Sets this color from a color name. Faster than {@link Color#setStyle} if
     * you don't need the other CSS-style formats.
     *
     * For convenience, the list of names is exposed in \`Color.NAMES\` as a hash.
     * \`\`\`js
     * Color.NAMES.aliceblue // returns 0xF0F8FF
     * \`\`\`
     *
     * @param {string} style - The color name.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setColorName(style, colorSpace = SRGBColorSpace) {
      const hex = _colorKeywords[style.toLowerCase()];
      if (hex !== void 0) {
        this.setHex(hex, colorSpace);
      } else {
        console.warn("THREE.Color: Unknown color " + style);
      }
      return this;
    }
    /**
     * Returns a new color with copied values from this instance.
     *
     * @return {Color} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    /**
     * Copies the values of the given color to this instance.
     *
     * @param {Color} color - The color to copy.
     * @return {Color} A reference to this color.
     */
    copy(color) {
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
      return this;
    }
    /**
     * Copies the given color into this color, and then converts this color from
     * \`SRGBColorSpace\` to \`LinearSRGBColorSpace\`.
     *
     * @param {Color} color - The color to copy/convert.
     * @return {Color} A reference to this color.
     */
    copySRGBToLinear(color) {
      this.r = SRGBToLinear(color.r);
      this.g = SRGBToLinear(color.g);
      this.b = SRGBToLinear(color.b);
      return this;
    }
    /**
     * Copies the given color into this color, and then converts this color from
     * \`LinearSRGBColorSpace\` to \`SRGBColorSpace\`.
     *
     * @param {Color} color - The color to copy/convert.
     * @return {Color} A reference to this color.
     */
    copyLinearToSRGB(color) {
      this.r = LinearToSRGB(color.r);
      this.g = LinearToSRGB(color.g);
      this.b = LinearToSRGB(color.b);
      return this;
    }
    /**
     * Converts this color from \`SRGBColorSpace\` to \`LinearSRGBColorSpace\`.
     *
     * @return {Color} A reference to this color.
     */
    convertSRGBToLinear() {
      this.copySRGBToLinear(this);
      return this;
    }
    /**
     * Converts this color from \`LinearSRGBColorSpace\` to \`SRGBColorSpace\`.
     *
     * @return {Color} A reference to this color.
     */
    convertLinearToSRGB() {
      this.copyLinearToSRGB(this);
      return this;
    }
    /**
     * Returns the hexadecimal value of this color.
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {number} The hexadecimal value.
     */
    getHex(colorSpace = SRGBColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      return Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
    }
    /**
     * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {string} The hexadecimal value as a string.
     */
    getHexString(colorSpace = SRGBColorSpace) {
      return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
    }
    /**
     * Converts the colors RGB values into the HSL format and stores them into the
     * given target object.
     *
     * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {{h:number,s:number,l:number}} The HSL representation of this color.
     */
    getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      const max2 = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let hue, saturation;
      const lightness = (min + max2) / 2;
      if (min === max2) {
        hue = 0;
        saturation = 0;
      } else {
        const delta = max2 - min;
        saturation = lightness <= 0.5 ? delta / (max2 + min) : delta / (2 - max2 - min);
        switch (max2) {
          case r:
            hue = (g - b) / delta + (g < b ? 6 : 0);
            break;
          case g:
            hue = (b - r) / delta + 2;
            break;
          case b:
            hue = (r - g) / delta + 4;
            break;
        }
        hue /= 6;
      }
      target.h = hue;
      target.s = saturation;
      target.l = lightness;
      return target;
    }
    /**
     * Returns the RGB values of this color and stores them into the given target object.
     *
     * @param {Color} target - The target color that is used to store the method's result.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} The RGB representation of this color.
     */
    getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      target.r = _color.r;
      target.g = _color.g;
      target.b = _color.b;
      return target;
    }
    /**
     * Returns the value of this color as a CSS style string. Example: \`rgb(255,0,0)\`.
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {string} The CSS representation of this color.
     */
    getStyle(colorSpace = SRGBColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      if (colorSpace !== SRGBColorSpace) {
        return \`color(\${colorSpace} \${r.toFixed(3)} \${g.toFixed(3)} \${b.toFixed(3)})\`;
      }
      return \`rgb(\${Math.round(r * 255)},\${Math.round(g * 255)},\${Math.round(b * 255)})\`;
    }
    /**
     * Adds the given HSL values to this color's values.
     * Internally, this converts the color's RGB values to HSL, adds HSL
     * and then converts the color back to RGB.
     *
     * @param {number} h - Hue value between \`0.0\` and \`1.0\`.
     * @param {number} s - Saturation value between \`0.0\` and \`1.0\`.
     * @param {number} l - Lightness value between \`0.0\` and \`1.0\`.
     * @return {Color} A reference to this color.
     */
    offsetHSL(h, s, l) {
      this.getHSL(_hslA);
      return this.setHSL(_hslA.h + h, _hslA.s + s, _hslA.l + l);
    }
    /**
     * Adds the RGB values of the given color to the RGB values of this color.
     *
     * @param {Color} color - The color to add.
     * @return {Color} A reference to this color.
     */
    add(color) {
      this.r += color.r;
      this.g += color.g;
      this.b += color.b;
      return this;
    }
    /**
     * Adds the RGB values of the given colors and stores the result in this instance.
     *
     * @param {Color} color1 - The first color.
     * @param {Color} color2 - The second color.
     * @return {Color} A reference to this color.
     */
    addColors(color1, color2) {
      this.r = color1.r + color2.r;
      this.g = color1.g + color2.g;
      this.b = color1.b + color2.b;
      return this;
    }
    /**
     * Adds the given scalar value to the RGB values of this color.
     *
     * @param {number} s - The scalar to add.
     * @return {Color} A reference to this color.
     */
    addScalar(s) {
      this.r += s;
      this.g += s;
      this.b += s;
      return this;
    }
    /**
     * Subtracts the RGB values of the given color from the RGB values of this color.
     *
     * @param {Color} color - The color to subtract.
     * @return {Color} A reference to this color.
     */
    sub(color) {
      this.r = Math.max(0, this.r - color.r);
      this.g = Math.max(0, this.g - color.g);
      this.b = Math.max(0, this.b - color.b);
      return this;
    }
    /**
     * Multiplies the RGB values of the given color with the RGB values of this color.
     *
     * @param {Color} color - The color to multiply.
     * @return {Color} A reference to this color.
     */
    multiply(color) {
      this.r *= color.r;
      this.g *= color.g;
      this.b *= color.b;
      return this;
    }
    /**
     * Multiplies the given scalar value with the RGB values of this color.
     *
     * @param {number} s - The scalar to multiply.
     * @return {Color} A reference to this color.
     */
    multiplyScalar(s) {
      this.r *= s;
      this.g *= s;
      this.b *= s;
      return this;
    }
    /**
     * Linearly interpolates this color's RGB values toward the RGB values of the
     * given color. The alpha argument can be thought of as the ratio between
     * the two colors, where \`0.0\` is this color and \`1.0\` is the first argument.
     *
     * @param {Color} color - The color to converge on.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerp(color, alpha) {
      this.r += (color.r - this.r) * alpha;
      this.g += (color.g - this.g) * alpha;
      this.b += (color.b - this.b) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given colors and stores the result in this instance.
     * The alpha argument can be thought of as the ratio between the two colors, where \`0.0\`
     * is the first and \`1.0\` is the second color.
     *
     * @param {Color} color1 - The first color.
     * @param {Color} color2 - The second color.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerpColors(color1, color2, alpha) {
      this.r = color1.r + (color2.r - color1.r) * alpha;
      this.g = color1.g + (color2.g - color1.g) * alpha;
      this.b = color1.b + (color2.b - color1.b) * alpha;
      return this;
    }
    /**
     * Linearly interpolates this color's HSL values toward the HSL values of the
     * given color. It differs from {@link Color#lerp} by not interpolating straight
     * from one color to the other, but instead going through all the hues in between
     * those two colors. The alpha argument can be thought of as the ratio between
     * the two colors, where 0.0 is this color and 1.0 is the first argument.
     *
     * @param {Color} color - The color to converge on.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerpHSL(color, alpha) {
      this.getHSL(_hslA);
      color.getHSL(_hslB);
      const h = lerp(_hslA.h, _hslB.h, alpha);
      const s = lerp(_hslA.s, _hslB.s, alpha);
      const l = lerp(_hslA.l, _hslB.l, alpha);
      this.setHSL(h, s, l);
      return this;
    }
    /**
     * Sets the color's RGB components from the given 3D vector.
     *
     * @param {Vector3} v - The vector to set.
     * @return {Color} A reference to this color.
     */
    setFromVector3(v) {
      this.r = v.x;
      this.g = v.y;
      this.b = v.z;
      return this;
    }
    /**
     * Transforms this color with the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix.
     * @return {Color} A reference to this color.
     */
    applyMatrix3(m) {
      const r = this.r, g = this.g, b = this.b;
      const e = m.elements;
      this.r = e[0] * r + e[3] * g + e[6] * b;
      this.g = e[1] * r + e[4] * g + e[7] * b;
      this.b = e[2] * r + e[5] * g + e[8] * b;
      return this;
    }
    /**
     * Returns \`true\` if this color is equal with the given one.
     *
     * @param {Color} c - The color to test for equality.
     * @return {boolean} Whether this bounding color is equal with the given one.
     */
    equals(c) {
      return c.r === this.r && c.g === this.g && c.b === this.b;
    }
    /**
     * Sets this color's RGB components from the given array.
     *
     * @param {Array<number>} array - An array holding the RGB values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Color} A reference to this color.
     */
    fromArray(array, offset = 0) {
      this.r = array[offset];
      this.g = array[offset + 1];
      this.b = array[offset + 2];
      return this;
    }
    /**
     * Writes the RGB components of this color to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the color components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The color components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.r;
      array[offset + 1] = this.g;
      array[offset + 2] = this.b;
      return array;
    }
    /**
     * Sets the components of this color from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding color data.
     * @param {number} index - The index into the attribute.
     * @return {Color} A reference to this color.
     */
    fromBufferAttribute(attribute, index) {
      this.r = attribute.getX(index);
      this.g = attribute.getY(index);
      this.b = attribute.getZ(index);
      return this;
    }
    /**
     * This methods defines the serialization result of this class. Returns the color
     * as a hexadecimal value.
     *
     * @return {number} The hexadecimal value.
     */
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r;
      yield this.g;
      yield this.b;
    }
  }
  const _color = /* @__PURE__ */ new Color();
  Color.NAMES = _colorKeywords;
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
      revision: REVISION
    } }));
  }
  if (typeof window !== "undefined") {
    if (window.__THREE__) {
      console.warn("WARNING: Multiple instances of Three.js being imported.");
    } else {
      window.__THREE__ = REVISION;
    }
  }
  const LN_SCALE_MIN = -12;
  const LN_SCALE_MAX = 9;
  const LN_SCALE_ZERO = -30;
  const SCALE_ZERO = Math.exp(LN_SCALE_ZERO);
  const SPLAT_TEX_WIDTH_BITS = 11;
  const SPLAT_TEX_HEIGHT_BITS = 11;
  const SPLAT_TEX_WIDTH = 1 << SPLAT_TEX_WIDTH_BITS;
  const SPLAT_TEX_HEIGHT = 1 << SPLAT_TEX_HEIGHT_BITS;
  const SPLAT_TEX_MIN_HEIGHT = 1;
  function unindentLines(s) {
    var _a2;
    let seenNonEmpty = false;
    const lines = s.split("\\n").map((line) => {
      const trimmedLine = line.trimEnd();
      if (seenNonEmpty) {
        return trimmedLine;
      }
      if (trimmedLine.length > 0) {
        seenNonEmpty = true;
        return trimmedLine;
      }
      return null;
    }).filter((line) => line != null);
    while (lines.length > 0 && lines[lines.length - 1].length === 0) {
      lines.pop();
    }
    if (lines.length === 0) {
      return [];
    }
    const indent = (_a2 = lines[0].match(/^\\s*/)) == null ? void 0 : _a2[0];
    if (!indent) {
      return lines;
    }
    const regex = new RegExp(\`^\${indent}\`);
    return lines.map((line) => line.replace(regex, ""));
  }
  function unindent(s) {
    return unindentLines(s).join("\\n");
  }
  const f32buffer = new Float32Array(1);
  const u32buffer = new Uint32Array(f32buffer.buffer);
  const supportsFloat16Array = "Float16Array" in globalThis;
  const f16buffer = supportsFloat16Array ? new globalThis["Float16Array"](1) : null;
  const u16buffer = new Uint16Array(f16buffer == null ? void 0 : f16buffer.buffer);
  function normalize(vec) {
    const norm = Math.sqrt(vec.reduce((acc, v) => acc + v * v, 0));
    return vec.map((v) => v / norm);
  }
  const toHalf = supportsFloat16Array ? toHalfNative : toHalfJS;
  const fromHalf = supportsFloat16Array ? fromHalfNative : fromHalfJS;
  function toHalfNative(f) {
    f16buffer[0] = f;
    return u16buffer[0];
  }
  function toHalfJS(f) {
    f32buffer[0] = f;
    const bits2 = u32buffer[0];
    const sign = bits2 >> 31 & 1;
    const exp = bits2 >> 23 & 255;
    const frac = bits2 & 8388607;
    const halfSign = sign << 15;
    if (exp === 255) {
      if (frac !== 0) {
        return halfSign | 32767;
      }
      return halfSign | 31744;
    }
    const newExp = exp - 127 + 15;
    if (newExp >= 31) {
      return halfSign | 31744;
    }
    if (newExp <= 0) {
      if (newExp < -10) {
        return halfSign;
      }
      const subFrac = (frac | 8388608) >> 1 - newExp + 13;
      return halfSign | subFrac;
    }
    const halfFrac = frac >> 13;
    return halfSign | newExp << 10 | halfFrac;
  }
  function fromHalfNative(u) {
    u16buffer[0] = u;
    return f16buffer[0];
  }
  function fromHalfJS(h) {
    const sign = h >> 15 & 1;
    const exp = h >> 10 & 31;
    const frac = h & 1023;
    let f32bits;
    if (exp === 0) {
      if (frac === 0) {
        f32bits = sign << 31;
      } else {
        let mant = frac;
        let e = -14;
        while ((mant & 1024) === 0) {
          mant <<= 1;
          e--;
        }
        mant &= 1023;
        const newExp = e + 127;
        const newFrac = mant << 13;
        f32bits = sign << 31 | newExp << 23 | newFrac;
      }
    } else if (exp === 31) {
      if (frac === 0) {
        f32bits = sign << 31 | 2139095040;
      } else {
        f32bits = sign << 31 | 2143289344;
      }
    } else {
      const newExp = exp - 15 + 127;
      const newFrac = frac << 13;
      f32bits = sign << 31 | newExp << 23 | newFrac;
    }
    u32buffer[0] = f32bits;
    return f32buffer[0];
  }
  function floatToUint8(v) {
    return Math.max(0, Math.min(255, Math.round(v * 255)));
  }
  function getArrayBuffers(ctx) {
    const buffers = [];
    const seen = /* @__PURE__ */ new Set();
    function traverse(obj) {
      if (obj && typeof obj === "object" && !seen.has(obj)) {
        seen.add(obj);
        if (obj instanceof ArrayBuffer) {
          buffers.push(obj);
        } else if (ArrayBuffer.isView(obj)) {
          buffers.push(obj.buffer);
        } else if (Array.isArray(obj)) {
          obj.forEach(traverse);
        } else {
          Object.values(obj).forEach(traverse);
        }
      }
    }
    traverse(ctx);
    return buffers;
  }
  function setPackedSplat(packedSplats, index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const uA = floatToUint8(opacity);
    const uQuat = encodeQuatOctXy88R8(
      tempQuaternion.set(quatX, quatY, quatZ, quatW)
    );
    const uQuatX = uQuat & 255;
    const uQuatY = uQuat >>> 8 & 255;
    const uQuatZ = uQuat >>> 16 & 255;
    const lnScaleMin = (encoding == null ? void 0 : encoding.lnScaleMin) ?? LN_SCALE_MIN;
    const lnScaleMax = (encoding == null ? void 0 : encoding.lnScaleMax) ?? LN_SCALE_MAX;
    const lnScaleScale = 254 / (lnScaleMax - lnScaleMin);
    const uScaleX = scaleX < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleX) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleY = scaleY < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleY) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleZ = scaleZ < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleZ) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uCenterX = toHalf(x2);
    const uCenterY = toHalf(y);
    const uCenterZ = toHalf(z);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | uA << 24;
    packedSplats[i4 + 1] = uCenterX | uCenterY << 16;
    packedSplats[i4 + 2] = uCenterZ | uQuatX << 16 | uQuatY << 24;
    packedSplats[i4 + 3] = uScaleX | uScaleY << 8 | uScaleZ << 16 | uQuatZ << 24;
  }
  function setPackedSplatCenter(packedSplats, index, x2, y, z) {
    const uCenterX = toHalf(x2);
    const uCenterY = toHalf(y);
    const uCenterZ = toHalf(z);
    const i4 = index * 4;
    packedSplats[i4 + 1] = uCenterX | uCenterY << 16;
    packedSplats[i4 + 2] = uCenterZ | packedSplats[i4 + 2] & 4294901760;
  }
  function setPackedSplatScales(packedSplats, index, scaleX, scaleY, scaleZ, encoding) {
    const lnScaleMin = (encoding == null ? void 0 : encoding.lnScaleMin) ?? LN_SCALE_MIN;
    const lnScaleMax = (encoding == null ? void 0 : encoding.lnScaleMax) ?? LN_SCALE_MAX;
    const lnScaleScale = 254 / (lnScaleMax - lnScaleMin);
    const uScaleX = scaleX < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleX) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleY = scaleY < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleY) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleZ = scaleZ < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleZ) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const i4 = index * 4;
    packedSplats[i4 + 3] = uScaleX | uScaleY << 8 | uScaleZ << 16 | packedSplats[i4 + 3] & 4278190080;
  }
  const tempQuaternion = new Quaternion();
  function setPackedSplatQuat(packedSplats, index, quatX, quatY, quatZ, quatW) {
    const uQuat = encodeQuatOctXy88R8(
      tempQuaternion.set(quatX, quatY, quatZ, quatW)
    );
    const uQuatX = uQuat & 255;
    const uQuatY = uQuat >>> 8 & 255;
    const uQuatZ = uQuat >>> 16 & 255;
    const i4 = index * 4;
    packedSplats[i4 + 2] = packedSplats[i4 + 2] & 65535 | uQuatX << 16 | uQuatY << 24;
    packedSplats[i4 + 3] = packedSplats[i4 + 3] & 16777215 | uQuatZ << 24;
  }
  function setPackedSplatRgba(packedSplats, index, r, g, b, a, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const uA = floatToUint8(a);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | uA << 24;
  }
  function setPackedSplatRgb(packedSplats, index, r, g, b, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | packedSplats[i4] & 4278190080;
  }
  function setPackedSplatOpacity(packedSplats, index, opacity) {
    const uA = floatToUint8(opacity);
    const i4 = index * 4;
    packedSplats[i4] = packedSplats[i4] & 16777215 | uA << 24;
  }
  new Vector3();
  new Vector3();
  new Color();
  function getTextureSize(numSplats) {
    const width = SPLAT_TEX_WIDTH;
    const height = Math.max(
      SPLAT_TEX_MIN_HEIGHT,
      Math.min(SPLAT_TEX_HEIGHT, Math.ceil(numSplats / width))
    );
    const depth = Math.ceil(numSplats / (width * height));
    const maxSplats = width * height * depth;
    return { width, height, depth, maxSplats };
  }
  function computeMaxSplats(numSplats) {
    const width = SPLAT_TEX_WIDTH;
    const height = Math.max(
      SPLAT_TEX_MIN_HEIGHT,
      Math.min(SPLAT_TEX_HEIGHT, Math.ceil(numSplats / width))
    );
    const depth = Math.ceil(numSplats / (width * height));
    return width * height * depth;
  }
  unindent(\`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
\`);
  const tempNormalizedQuaternion = new Quaternion();
  const tempAxis = new Vector3();
  function encodeQuatOctXy88R8(q) {
    const qnorm = tempNormalizedQuaternion.copy(q).normalize();
    if (qnorm.w < 0) {
      qnorm.set(-qnorm.x, -qnorm.y, -qnorm.z, -qnorm.w);
    }
    const theta = 2 * Math.acos(qnorm.w);
    const xyz_norm = Math.sqrt(
      qnorm.x * qnorm.x + qnorm.y * qnorm.y + qnorm.z * qnorm.z
    );
    const axis = xyz_norm < 1e-6 ? tempAxis.set(1, 0, 0) : tempAxis.set(qnorm.x, qnorm.y, qnorm.z).divideScalar(xyz_norm);
    const sum = Math.abs(axis.x) + Math.abs(axis.y) + Math.abs(axis.z);
    let p_x = axis.x / sum;
    let p_y = axis.y / sum;
    if (axis.z < 0) {
      const tmp = p_x;
      p_x = (1 - Math.abs(p_y)) * (p_x >= 0 ? 1 : -1);
      p_y = (1 - Math.abs(tmp)) * (p_y >= 0 ? 1 : -1);
    }
    const u_f = p_x * 0.5 + 0.5;
    const v_f = p_y * 0.5 + 0.5;
    const quantU = Math.round(u_f * 255);
    const quantV = Math.round(v_f * 255);
    const angleInt = Math.round(theta * (255 / Math.PI));
    return angleInt << 16 | quantV << 8 | quantU;
  }
  function packSint8Bytes(b0, b1, b22, b3) {
    const clampedB0 = Math.max(-127, Math.min(127, b0 * 127));
    const clampedB1 = Math.max(-127, Math.min(127, b1 * 127));
    const clampedB2 = Math.max(-127, Math.min(127, b22 * 127));
    const clampedB3 = Math.max(-127, Math.min(127, b3 * 127));
    return clampedB0 & 255 | (clampedB1 & 255) << 8 | (clampedB2 & 255) << 16 | (clampedB3 & 255) << 24;
  }
  function encodeSh1Rgb(sh1Array, index, sh1Rgb, encoding) {
    const sh1Min = (encoding == null ? void 0 : encoding.sh1Min) ?? -1;
    const sh1Max = (encoding == null ? void 0 : encoding.sh1Max) ?? 1;
    const sh1Mid = 0.5 * (sh1Min + sh1Max);
    const sh1Scale = 126 / (sh1Max - sh1Min);
    const base = index * 2;
    for (let i2 = 0; i2 < 9; ++i2) {
      const s = (sh1Rgb[i2] - sh1Mid) * sh1Scale;
      const value = Math.round(Math.max(-63, Math.min(63, s))) & 127;
      const bitStart = i2 * 7;
      const bitEnd = bitStart + 7;
      const wordStart = Math.floor(bitStart / 32);
      const bitOffset = bitStart - wordStart * 32;
      const firstWord = value << bitOffset & 4294967295;
      sh1Array[base + wordStart] |= firstWord;
      if (bitEnd > wordStart * 32 + 32) {
        const secondWord = value >>> 32 - bitOffset & 4294967295;
        sh1Array[base + wordStart + 1] |= secondWord;
      }
    }
  }
  function encodeSh2Rgb(sh2Array, index, sh2Rgb, encoding) {
    const sh2Min = (encoding == null ? void 0 : encoding.sh2Min) ?? -1;
    const sh2Max = (encoding == null ? void 0 : encoding.sh2Max) ?? 1;
    const sh2Mid = 0.5 * (sh2Min + sh2Max);
    const sh2Scale = 2 / (sh2Max - sh2Min);
    sh2Array[index * 4 + 0] = packSint8Bytes(
      (sh2Rgb[0] - sh2Mid) * sh2Scale,
      (sh2Rgb[1] - sh2Mid) * sh2Scale,
      (sh2Rgb[2] - sh2Mid) * sh2Scale,
      (sh2Rgb[3] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 1] = packSint8Bytes(
      (sh2Rgb[4] - sh2Mid) * sh2Scale,
      (sh2Rgb[5] - sh2Mid) * sh2Scale,
      (sh2Rgb[6] - sh2Mid) * sh2Scale,
      (sh2Rgb[7] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 2] = packSint8Bytes(
      (sh2Rgb[8] - sh2Mid) * sh2Scale,
      (sh2Rgb[9] - sh2Mid) * sh2Scale,
      (sh2Rgb[10] - sh2Mid) * sh2Scale,
      (sh2Rgb[11] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 3] = packSint8Bytes(
      (sh2Rgb[12] - sh2Mid) * sh2Scale,
      (sh2Rgb[13] - sh2Mid) * sh2Scale,
      (sh2Rgb[14] - sh2Mid) * sh2Scale,
      0
    );
  }
  function encodeSh3Rgb(sh3Array, index, sh3Rgb, encoding) {
    const sh3Min = (encoding == null ? void 0 : encoding.sh3Min) ?? -1;
    const sh3Max = (encoding == null ? void 0 : encoding.sh3Max) ?? 1;
    const sh3Mid = 0.5 * (sh3Min + sh3Max);
    const sh3Scale = 62 / (sh3Max - sh3Min);
    const base = index * 4;
    for (let i2 = 0; i2 < 21; ++i2) {
      const s = (sh3Rgb[i2] - sh3Mid) * sh3Scale;
      const value = Math.round(Math.max(-31, Math.min(31, s))) & 63;
      const bitStart = i2 * 6;
      const bitEnd = bitStart + 6;
      const wordStart = Math.floor(bitStart / 32);
      const bitOffset = bitStart - wordStart * 32;
      const firstWord = value << bitOffset & 4294967295;
      sh3Array[base + wordStart] |= firstWord;
      if (bitEnd > wordStart * 32 + 32) {
        const secondWord = value >>> 32 - bitOffset & 4294967295;
        sh3Array[base + wordStart + 1] |= secondWord;
      }
    }
  }
  function decompressPartialGzip(fileBytes, numBytes) {
    const chunks = [];
    let totalBytes = 0;
    let result = null;
    const gunzip = new Gunzip((data, final) => {
      chunks.push(data);
      totalBytes += data.length;
      if (final || totalBytes >= numBytes) {
        const allBytes = new Uint8Array(totalBytes);
        let offset2 = 0;
        for (const chunk of chunks) {
          allBytes.set(chunk, offset2);
          offset2 += chunk.length;
        }
        result = allBytes.slice(0, numBytes);
      }
    });
    const CHUNK_SIZE = 1024;
    let offset = 0;
    while (result == null && offset < fileBytes.length) {
      const chunk = fileBytes.slice(offset, offset + CHUNK_SIZE);
      gunzip.push(chunk, false);
      offset += CHUNK_SIZE;
    }
    if (result == null) {
      gunzip.push(new Uint8Array(), true);
      if (result == null) {
        throw new Error("Failed to decompress partial gzip");
      }
    }
    return result;
  }
  class GunzipReader {
    constructor({
      fileBytes,
      chunkBytes = 64 * 1024
    }) {
      this.fileBytes = fileBytes;
      this.chunkBytes = chunkBytes;
      this.chunks = [];
      this.totalBytes = 0;
      const ds = new DecompressionStream("gzip");
      const decompressionStream = new Blob([fileBytes]).stream().pipeThrough(ds);
      this.reader = decompressionStream.getReader();
    }
    async read(numBytes) {
      while (this.totalBytes < numBytes) {
        const { value: chunk, done: readerDone } = await this.reader.read();
        if (readerDone) {
          break;
        }
        this.chunks.push(chunk);
        this.totalBytes += chunk.length;
      }
      if (this.totalBytes < numBytes) {
        throw new Error(
          \`Unexpected EOF: needed \${numBytes}, got \${this.totalBytes}\`
        );
      }
      const allBytes = new Uint8Array(this.totalBytes);
      let outOffset = 0;
      for (const chunk of this.chunks) {
        allBytes.set(chunk, outOffset);
        outOffset += chunk.length;
      }
      const result = allBytes.subarray(0, numBytes);
      this.chunks = [allBytes.subarray(numBytes)];
      this.totalBytes -= numBytes;
      return result;
    }
  }
  function decodeAntiSplat(fileBytes, initNumSplats, splatCallback) {
    const numSplats = Math.floor(fileBytes.length / 32);
    if (numSplats * 32 !== fileBytes.length) {
      throw new Error("Invalid .splat file size");
    }
    initNumSplats(numSplats);
    const f32 = new Float32Array(fileBytes.buffer);
    for (let i2 = 0; i2 < numSplats; ++i2) {
      const i322 = i2 * 32;
      const i8 = i2 * 8;
      const x2 = f32[i8 + 0];
      const y = f32[i8 + 1];
      const z = f32[i8 + 2];
      const scaleX = f32[i8 + 3];
      const scaleY = f32[i8 + 4];
      const scaleZ = f32[i8 + 5];
      const r = fileBytes[i322 + 24] / 255;
      const g = fileBytes[i322 + 25] / 255;
      const b = fileBytes[i322 + 26] / 255;
      const opacity = fileBytes[i322 + 27] / 255;
      const quatW = (fileBytes[i322 + 28] - 128) / 128;
      const quatX = (fileBytes[i322 + 29] - 128) / 128;
      const quatY = (fileBytes[i322 + 30] - 128) / 128;
      const quatZ = (fileBytes[i322 + 31] - 128) / 128;
      splatCallback(
        i2,
        x2,
        y,
        z,
        scaleX,
        scaleY,
        scaleZ,
        quatX,
        quatY,
        quatZ,
        quatW,
        opacity,
        r,
        g,
        b
      );
    }
  }
  function unpackAntiSplat(fileBytes, splatEncoding) {
    let numSplats = 0;
    let maxSplats = 0;
    let packedArray = new Uint32Array(0);
    decodeAntiSplat(
      fileBytes,
      (cbNumSplats) => {
        numSplats = cbNumSplats;
        maxSplats = computeMaxSplats(numSplats);
        packedArray = new Uint32Array(maxSplats * 4);
      },
      (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
        setPackedSplat(
          packedArray,
          index,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
      }
    );
    return { packedArray, numSplats };
  }
  const KSPLAT_COMPRESSION = {
    0: {
      bytesPerCenter: 12,
      bytesPerScale: 12,
      bytesPerRotation: 16,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 4,
      scaleOffsetBytes: 12,
      rotationOffsetBytes: 24,
      colorOffsetBytes: 40,
      sphericalHarmonicsOffsetBytes: 44,
      scaleRange: 1
    },
    1: {
      bytesPerCenter: 6,
      bytesPerScale: 6,
      bytesPerRotation: 8,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 2,
      scaleOffsetBytes: 6,
      rotationOffsetBytes: 12,
      colorOffsetBytes: 20,
      sphericalHarmonicsOffsetBytes: 24,
      scaleRange: 32767
    },
    2: {
      bytesPerCenter: 6,
      bytesPerScale: 6,
      bytesPerRotation: 8,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 1,
      scaleOffsetBytes: 6,
      rotationOffsetBytes: 12,
      colorOffsetBytes: 20,
      sphericalHarmonicsOffsetBytes: 24,
      scaleRange: 32767
    }
  };
  const KSPLAT_SH_DEGREE_TO_COMPONENTS = {
    0: 0,
    1: 9,
    2: 24,
    3: 45
  };
  function decodeKsplat(fileBytes, initNumSplats, splatCallback, shCallback) {
    var _a2;
    const HEADER_BYTES = 4096;
    const SECTION_BYTES = 1024;
    let headerOffset = 0;
    const header = new DataView(fileBytes.buffer, headerOffset, HEADER_BYTES);
    headerOffset += HEADER_BYTES;
    const versionMajor = header.getUint8(0);
    const versionMinor = header.getUint8(1);
    if (versionMajor !== 0 || versionMinor < 1) {
      throw new Error(
        \`Unsupported .ksplat version: \${versionMajor}.\${versionMinor}\`
      );
    }
    const maxSectionCount = header.getUint32(4, true);
    header.getUint32(16, true);
    const compressionLevel = header.getUint16(20, true);
    if (compressionLevel < 0 || compressionLevel > 2) {
      throw new Error(\`Invalid .ksplat compression level: \${compressionLevel}\`);
    }
    const minSphericalHarmonicsCoeff = header.getFloat32(36, true) || -1.5;
    const maxSphericalHarmonicsCoeff = header.getFloat32(40, true) || 1.5;
    let sectionBase = HEADER_BYTES + maxSectionCount * SECTION_BYTES;
    for (let section = 0; section < maxSectionCount; ++section) {
      let getSh = function(splatOffset, component) {
        if (compressionLevel === 0) {
          return data.getFloat32(
            splatOffset + sphericalHarmonicsOffsetBytes + component * 4,
            true
          );
        }
        if (compressionLevel === 1) {
          return fromHalf(
            data.getUint16(
              splatOffset + sphericalHarmonicsOffsetBytes + component * 2,
              true
            )
          );
        }
        const t = data.getUint8(splatOffset + sphericalHarmonicsOffsetBytes + component) / 255;
        return minSphericalHarmonicsCoeff + t * (maxSphericalHarmonicsCoeff - minSphericalHarmonicsCoeff);
      };
      const section2 = new DataView(fileBytes.buffer, headerOffset, SECTION_BYTES);
      headerOffset += SECTION_BYTES;
      const sectionSplatCount = section2.getUint32(0, true);
      const sectionMaxSplatCount = section2.getUint32(4, true);
      const bucketSize = section2.getUint32(8, true);
      const bucketCount = section2.getUint32(12, true);
      const bucketBlockSize = section2.getFloat32(16, true);
      const bucketStorageSizeBytes = section2.getUint16(20, true);
      const compressionScaleRange = (section2.getUint32(24, true) || ((_a2 = KSPLAT_COMPRESSION[compressionLevel]) == null ? void 0 : _a2.scaleRange)) ?? 1;
      const fullBucketCount = section2.getUint32(32, true);
      const fullBucketSplats = fullBucketCount * bucketSize;
      const partiallyFilledBucketCount = section2.getUint32(36, true);
      const bucketsMetaDataSizeBytes = partiallyFilledBucketCount * 4;
      const bucketsStorageSizeBytes = bucketStorageSizeBytes * bucketCount + bucketsMetaDataSizeBytes;
      const sphericalHarmonicsDegree = section2.getUint16(40, true);
      const shComponents = KSPLAT_SH_DEGREE_TO_COMPONENTS[sphericalHarmonicsDegree];
      const {
        bytesPerCenter,
        bytesPerScale,
        bytesPerRotation,
        bytesPerColor,
        bytesPerSphericalHarmonicsComponent,
        scaleOffsetBytes,
        rotationOffsetBytes,
        colorOffsetBytes,
        sphericalHarmonicsOffsetBytes
      } = KSPLAT_COMPRESSION[compressionLevel];
      const bytesPerSplat = bytesPerCenter + bytesPerScale + bytesPerRotation + bytesPerColor + shComponents * bytesPerSphericalHarmonicsComponent;
      const splatDataStorageSizeBytes = bytesPerSplat * sectionMaxSplatCount;
      const storageSizeBytes = splatDataStorageSizeBytes + bucketsStorageSizeBytes;
      const sh1Index = [0, 3, 6, 1, 4, 7, 2, 5, 8];
      const sh2Index = [
        9,
        14,
        19,
        10,
        15,
        20,
        11,
        16,
        21,
        12,
        17,
        22,
        13,
        18,
        23
      ];
      const sh3Index = [
        24,
        31,
        38,
        25,
        32,
        39,
        26,
        33,
        40,
        27,
        34,
        41,
        28,
        35,
        42,
        29,
        36,
        43,
        30,
        37,
        44
      ];
      const sh1 = sphericalHarmonicsDegree >= 1 ? new Float32Array(3 * 3) : void 0;
      const sh2 = sphericalHarmonicsDegree >= 2 ? new Float32Array(5 * 3) : void 0;
      const sh3 = sphericalHarmonicsDegree >= 3 ? new Float32Array(7 * 3) : void 0;
      const compressionScaleFactor = bucketBlockSize / 2 / compressionScaleRange;
      const bucketsBase = sectionBase + bucketsMetaDataSizeBytes;
      const dataBase = sectionBase + bucketsStorageSizeBytes;
      const data = new DataView(
        fileBytes.buffer,
        dataBase,
        splatDataStorageSizeBytes
      );
      const bucketArray = new Float32Array(
        fileBytes.buffer,
        bucketsBase,
        bucketCount * 3
      );
      const partiallyFilledBucketLengths = new Uint32Array(
        fileBytes.buffer,
        sectionBase,
        partiallyFilledBucketCount
      );
      let partialBucketIndex = fullBucketCount;
      let partialBucketBase = fullBucketSplats;
      for (let i2 = 0; i2 < sectionSplatCount; ++i2) {
        const splatOffset = i2 * bytesPerSplat;
        let bucketIndex;
        if (i2 < fullBucketSplats) {
          bucketIndex = Math.floor(i2 / bucketSize);
        } else {
          const bucketLength = partiallyFilledBucketLengths[partialBucketIndex - fullBucketCount];
          if (i2 >= partialBucketBase + bucketLength) {
            partialBucketIndex += 1;
            partialBucketBase += bucketLength;
          }
          bucketIndex = partialBucketIndex;
        }
        const x2 = compressionLevel === 0 ? data.getFloat32(splatOffset + 0, true) : (data.getUint16(splatOffset + 0, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 0];
        const y = compressionLevel === 0 ? data.getFloat32(splatOffset + 4, true) : (data.getUint16(splatOffset + 2, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 1];
        const z = compressionLevel === 0 ? data.getFloat32(splatOffset + 8, true) : (data.getUint16(splatOffset + 4, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 2];
        const scaleX = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 0, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 0, true));
        const scaleY = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 4, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 2, true));
        const scaleZ = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 8, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 4, true));
        const quatW = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 0, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 0, true)
        );
        const quatX = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 4, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 2, true)
        );
        const quatY = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 8, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 4, true)
        );
        const quatZ = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 12, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 6, true)
        );
        const r = data.getUint8(splatOffset + colorOffsetBytes + 0) / 255;
        const g = data.getUint8(splatOffset + colorOffsetBytes + 1) / 255;
        const b = data.getUint8(splatOffset + colorOffsetBytes + 2) / 255;
        const opacity = data.getUint8(splatOffset + colorOffsetBytes + 3) / 255;
        splatCallback(
          i2,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b
        );
        if (sphericalHarmonicsDegree >= 1 && sh1) {
          for (const [i22, key] of sh1Index.entries()) {
            sh1[i22] = getSh(splatOffset, key);
          }
          if (sh2) {
            for (const [i22, key] of sh2Index.entries()) {
              sh2[i22] = getSh(splatOffset, key);
            }
          }
          if (sh3) {
            for (const [i22, key] of sh3Index.entries()) {
              sh3[i22] = getSh(splatOffset, key);
            }
          }
          shCallback == null ? void 0 : shCallback(i2, sh1, sh2, sh3);
        }
      }
      sectionBase += storageSizeBytes;
    }
  }
  function unpackKsplat(fileBytes, splatEncoding) {
    var _a2;
    const HEADER_BYTES = 4096;
    const SECTION_BYTES = 1024;
    let headerOffset = 0;
    const header = new DataView(fileBytes.buffer, headerOffset, HEADER_BYTES);
    headerOffset += HEADER_BYTES;
    const versionMajor = header.getUint8(0);
    const versionMinor = header.getUint8(1);
    if (versionMajor !== 0 || versionMinor < 1) {
      throw new Error(
        \`Unsupported .ksplat version: \${versionMajor}.\${versionMinor}\`
      );
    }
    const maxSectionCount = header.getUint32(4, true);
    const splatCount = header.getUint32(16, true);
    const compressionLevel = header.getUint16(20, true);
    if (compressionLevel < 0 || compressionLevel > 2) {
      throw new Error(\`Invalid .ksplat compression level: \${compressionLevel}\`);
    }
    const minSphericalHarmonicsCoeff = header.getFloat32(36, true) || -1.5;
    const maxSphericalHarmonicsCoeff = header.getFloat32(40, true) || 1.5;
    const numSplats = splatCount;
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    let sectionBase = HEADER_BYTES + maxSectionCount * SECTION_BYTES;
    for (let section = 0; section < maxSectionCount; ++section) {
      let getSh = function(splatOffset, component) {
        if (compressionLevel === 0) {
          return data.getFloat32(
            splatOffset + sphericalHarmonicsOffsetBytes + component * 4,
            true
          );
        }
        if (compressionLevel === 1) {
          return fromHalf(
            data.getUint16(
              splatOffset + sphericalHarmonicsOffsetBytes + component * 2,
              true
            )
          );
        }
        const t = data.getUint8(splatOffset + sphericalHarmonicsOffsetBytes + component) / 255;
        return minSphericalHarmonicsCoeff + t * (maxSphericalHarmonicsCoeff - minSphericalHarmonicsCoeff);
      };
      const section2 = new DataView(fileBytes.buffer, headerOffset, SECTION_BYTES);
      headerOffset += SECTION_BYTES;
      const sectionSplatCount = section2.getUint32(0, true);
      const sectionMaxSplatCount = section2.getUint32(4, true);
      const bucketSize = section2.getUint32(8, true);
      const bucketCount = section2.getUint32(12, true);
      const bucketBlockSize = section2.getFloat32(16, true);
      const bucketStorageSizeBytes = section2.getUint16(20, true);
      const compressionScaleRange = (section2.getUint32(24, true) || ((_a2 = KSPLAT_COMPRESSION[compressionLevel]) == null ? void 0 : _a2.scaleRange)) ?? 1;
      const fullBucketCount = section2.getUint32(32, true);
      const fullBucketSplats = fullBucketCount * bucketSize;
      const partiallyFilledBucketCount = section2.getUint32(36, true);
      const bucketsMetaDataSizeBytes = partiallyFilledBucketCount * 4;
      const bucketsStorageSizeBytes = bucketStorageSizeBytes * bucketCount + bucketsMetaDataSizeBytes;
      const sphericalHarmonicsDegree = section2.getUint16(40, true);
      const shComponents = KSPLAT_SH_DEGREE_TO_COMPONENTS[sphericalHarmonicsDegree];
      const {
        bytesPerCenter,
        bytesPerScale,
        bytesPerRotation,
        bytesPerColor,
        bytesPerSphericalHarmonicsComponent,
        scaleOffsetBytes,
        rotationOffsetBytes,
        colorOffsetBytes,
        sphericalHarmonicsOffsetBytes
      } = KSPLAT_COMPRESSION[compressionLevel];
      const bytesPerSplat = bytesPerCenter + bytesPerScale + bytesPerRotation + bytesPerColor + shComponents * bytesPerSphericalHarmonicsComponent;
      const splatDataStorageSizeBytes = bytesPerSplat * sectionMaxSplatCount;
      const storageSizeBytes = splatDataStorageSizeBytes + bucketsStorageSizeBytes;
      const sh1Index = [0, 3, 6, 1, 4, 7, 2, 5, 8];
      const sh2Index = [
        9,
        14,
        19,
        10,
        15,
        20,
        11,
        16,
        21,
        12,
        17,
        22,
        13,
        18,
        23
      ];
      const sh3Index = [
        24,
        31,
        38,
        25,
        32,
        39,
        26,
        33,
        40,
        27,
        34,
        41,
        28,
        35,
        42,
        29,
        36,
        43,
        30,
        37,
        44
      ];
      const sh1 = sphericalHarmonicsDegree >= 1 ? new Float32Array(3 * 3) : void 0;
      const sh2 = sphericalHarmonicsDegree >= 2 ? new Float32Array(5 * 3) : void 0;
      const sh3 = sphericalHarmonicsDegree >= 3 ? new Float32Array(7 * 3) : void 0;
      const compressionScaleFactor = bucketBlockSize / 2 / compressionScaleRange;
      const bucketsBase = sectionBase + bucketsMetaDataSizeBytes;
      const dataBase = sectionBase + bucketsStorageSizeBytes;
      const data = new DataView(
        fileBytes.buffer,
        dataBase,
        splatDataStorageSizeBytes
      );
      const bucketArray = new Float32Array(
        fileBytes.buffer,
        bucketsBase,
        bucketCount * 3
      );
      const partiallyFilledBucketLengths = new Uint32Array(
        fileBytes.buffer,
        sectionBase,
        partiallyFilledBucketCount
      );
      let partialBucketIndex = fullBucketCount;
      let partialBucketBase = fullBucketSplats;
      for (let i2 = 0; i2 < sectionSplatCount; ++i2) {
        const splatOffset = i2 * bytesPerSplat;
        let bucketIndex;
        if (i2 < fullBucketSplats) {
          bucketIndex = Math.floor(i2 / bucketSize);
        } else {
          const bucketLength = partiallyFilledBucketLengths[partialBucketIndex - fullBucketCount];
          if (i2 >= partialBucketBase + bucketLength) {
            partialBucketIndex += 1;
            partialBucketBase += bucketLength;
          }
          bucketIndex = partialBucketIndex;
        }
        const x2 = compressionLevel === 0 ? data.getFloat32(splatOffset + 0, true) : (data.getUint16(splatOffset + 0, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 0];
        const y = compressionLevel === 0 ? data.getFloat32(splatOffset + 4, true) : (data.getUint16(splatOffset + 2, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 1];
        const z = compressionLevel === 0 ? data.getFloat32(splatOffset + 8, true) : (data.getUint16(splatOffset + 4, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 2];
        const scaleX = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 0, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 0, true));
        const scaleY = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 4, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 2, true));
        const scaleZ = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 8, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 4, true));
        const quatW = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 0, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 0, true)
        );
        const quatX = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 4, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 2, true)
        );
        const quatY = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 8, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 4, true)
        );
        const quatZ = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 12, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 6, true)
        );
        const r = data.getUint8(splatOffset + colorOffsetBytes + 0) / 255;
        const g = data.getUint8(splatOffset + colorOffsetBytes + 1) / 255;
        const b = data.getUint8(splatOffset + colorOffsetBytes + 2) / 255;
        const opacity = data.getUint8(splatOffset + colorOffsetBytes + 3) / 255;
        setPackedSplat(
          packedArray,
          i2,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
        if (sphericalHarmonicsDegree >= 1) {
          if (sh1) {
            if (!extra.sh1) {
              extra.sh1 = new Uint32Array(numSplats * 2);
            }
            for (const [i22, key] of sh1Index.entries()) {
              sh1[i22] = getSh(splatOffset, key);
            }
            encodeSh1Rgb(extra.sh1, i2, sh1, splatEncoding);
          }
          if (sh2) {
            if (!extra.sh2) {
              extra.sh2 = new Uint32Array(numSplats * 4);
            }
            for (const [i22, key] of sh2Index.entries()) {
              sh2[i22] = getSh(splatOffset, key);
            }
            encodeSh2Rgb(extra.sh2, i2, sh2, splatEncoding);
          }
          if (sh3) {
            if (!extra.sh3) {
              extra.sh3 = new Uint32Array(numSplats * 4);
            }
            for (const [i22, key] of sh3Index.entries()) {
              sh3[i22] = getSh(splatOffset, key);
            }
            encodeSh3Rgb(extra.sh3, i2, sh3, splatEncoding);
          }
        }
      }
      sectionBase += storageSizeBytes;
    }
    return { packedArray, numSplats, extra };
  }
  const PLY_PROPERTY_TYPES = [
    "char",
    "uchar",
    "short",
    "ushort",
    "int",
    "uint",
    "float",
    "double"
  ];
  const _PlyReader = class _PlyReader {
    // Create a PlyReader from a Uint8Array/ArrayBuffer, no parsing done yet
    constructor({ fileBytes }) {
      this.header = "";
      this.littleEndian = true;
      this.elements = {};
      this.comments = [];
      this.data = null;
      this.numSplats = 0;
      this.fileBytes = fileBytes instanceof ArrayBuffer ? new Uint8Array(fileBytes) : fileBytes;
    }
    // Identify and parse the PLY text header (assumed to be <64KB in size).
    // this.elements will contain all the elements in the file, typically
    // "vertex" contains the Gsplat data.
    async parseHeader() {
      const bufferStream = new ReadableStream({
        start: (controller) => {
          controller.enqueue(this.fileBytes.slice(0, 65536));
          controller.close();
        }
      });
      const decoder = bufferStream.pipeThrough(new TextDecoderStream()).getReader();
      this.header = "";
      const headerTerminator = "end_header\\n";
      while (true) {
        const { value, done } = await decoder.read();
        if (done) {
          throw new Error("Failed to read header");
        }
        this.header += value;
        const endHeader = this.header.indexOf(headerTerminator);
        if (endHeader >= 0) {
          this.header = this.header.slice(0, endHeader + headerTerminator.length);
          break;
        }
      }
      const headerLen = new TextEncoder().encode(this.header).length;
      this.data = new DataView(this.fileBytes.buffer, headerLen);
      this.elements = {};
      let curElement = null;
      this.comments = [];
      this.header.trim().split("\\n").forEach((line, lineIndex) => {
        const trimmedLine = line.trim();
        if (lineIndex === 0) {
          if (trimmedLine !== "ply") {
            throw new Error("Invalid PLY header");
          }
          return;
        }
        if (trimmedLine.length === 0) {
          return;
        }
        const fields = trimmedLine.split(" ");
        switch (fields[0]) {
          case "format":
            if (fields[1] === "binary_little_endian") {
              this.littleEndian = true;
            } else if (fields[1] === "binary_big_endian") {
              this.littleEndian = false;
            } else {
              throw new Error(\`Unsupported PLY format: \${fields[1]}\`);
            }
            if (fields[2] !== "1.0") {
              throw new Error(\`Unsupported PLY version: \${fields[2]}\`);
            }
            break;
          case "end_header":
            break;
          case "comment":
            this.comments.push(trimmedLine.slice("comment ".length));
            break;
          case "element": {
            const name = fields[1];
            curElement = {
              name,
              count: Number.parseInt(fields[2]),
              properties: {}
            };
            this.elements[name] = curElement;
            break;
          }
          case "property":
            if (curElement == null) {
              throw new Error("Property must be inside an element");
            }
            if (fields[1] === "list") {
              curElement.properties[fields[4]] = {
                isList: true,
                type: fields[3],
                countType: fields[2]
              };
            } else {
              curElement.properties[fields[2]] = {
                isList: false,
                type: fields[1]
              };
            }
            break;
        }
      });
      if (this.elements.vertex) {
        this.numSplats = this.elements.vertex.count;
      }
    }
    parseData(elementCallback) {
      let offset = 0;
      const data = this.data;
      if (data == null) {
        throw new Error("No data to parse");
      }
      for (const elementName in this.elements) {
        const element = this.elements[elementName];
        const { count, properties } = element;
        const item = createEmptyItem(properties);
        const parseFn = createParseFn(properties, this.littleEndian);
        const callback = elementCallback(element) ?? (() => {
        });
        for (let index = 0; index < count; index++) {
          offset = parseFn(data, offset, item);
          callback(index, item);
        }
      }
    }
    // Parse all the Gsplat data in the PLY file in go, invoking the given
    // callbacks for each Gsplat.
    parseSplats(splatCallback, shCallback) {
      if (this.elements.vertex == null) {
        throw new Error("No vertex element found");
      }
      let isSuperSplat = false;
      const ssChunks = [];
      let numSh = 0;
      let sh1Props = [];
      let sh2Props = [];
      let sh3Props = [];
      let sh1 = void 0;
      let sh2 = void 0;
      let sh3 = void 0;
      function prepareSh() {
        const num_f_rest = NUM_SH_TO_NUM_F_REST[numSh];
        sh1Props = new Array(3).fill(null).flatMap((_, k) => [0, 1, 2].map((_2, d) => k + d * num_f_rest / 3));
        sh2Props = new Array(5).fill(null).flatMap(
          (_, k) => [0, 1, 2].map((_2, d) => 3 + k + d * num_f_rest / 3)
        );
        sh3Props = new Array(7).fill(null).flatMap(
          (_, k) => [0, 1, 2].map((_2, d) => 8 + k + d * num_f_rest / 3)
        );
        sh1 = numSh >= 1 ? new Float32Array(3 * 3) : void 0;
        sh2 = numSh >= 2 ? new Float32Array(5 * 3) : void 0;
        sh3 = numSh >= 3 ? new Float32Array(7 * 3) : void 0;
      }
      function ssShCallback(index, item) {
        if (!sh1) {
          throw new Error("Missing sh1");
        }
        const sh = item.f_rest;
        for (let i2 = 0; i2 < sh1Props.length; i2++) {
          sh1[i2] = sh[sh1Props[i2]] * 8 / 255 - 4;
        }
        if (sh2) {
          for (let i2 = 0; i2 < sh2Props.length; i2++) {
            sh2[i2] = sh[sh2Props[i2]] * 8 / 255 - 4;
          }
        }
        if (sh3) {
          for (let i2 = 0; i2 < sh3Props.length; i2++) {
            sh3[i2] = sh[sh3Props[i2]] * 8 / 255 - 4;
          }
        }
        shCallback == null ? void 0 : shCallback(index, sh1, sh2, sh3);
      }
      function initSuperSplat(element) {
        const {
          min_x,
          min_y,
          min_z,
          max_x,
          max_y,
          max_z,
          min_scale_x,
          min_scale_y,
          min_scale_z,
          max_scale_x,
          max_scale_y,
          max_scale_z
        } = element.properties;
        if (!min_x || !min_y || !min_z || !max_x || !max_y || !max_z || !min_scale_x || !min_scale_y || !min_scale_z || !max_scale_x || !max_scale_y || !max_scale_z) {
          throw new Error("Missing PLY chunk properties");
        }
        isSuperSplat = true;
        return (index, item) => {
          const {
            min_x: min_x2,
            min_y: min_y2,
            min_z: min_z2,
            max_x: max_x2,
            max_y: max_y2,
            max_z: max_z2,
            min_scale_x: min_scale_x2,
            min_scale_y: min_scale_y2,
            min_scale_z: min_scale_z2,
            max_scale_x: max_scale_x2,
            max_scale_y: max_scale_y2,
            max_scale_z: max_scale_z2,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          } = item;
          ssChunks.push({
            min_x: min_x2,
            min_y: min_y2,
            min_z: min_z2,
            max_x: max_x2,
            max_y: max_y2,
            max_z: max_z2,
            min_scale_x: min_scale_x2,
            min_scale_y: min_scale_y2,
            min_scale_z: min_scale_z2,
            max_scale_x: max_scale_x2,
            max_scale_y: max_scale_y2,
            max_scale_z: max_scale_z2,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          });
        };
      }
      function decodeSuperSplat(element) {
        if (shCallback && element.name === "sh") {
          numSh = getNumSh(element.properties);
          prepareSh();
          return ssShCallback;
        }
        if (element.name !== "vertex") {
          return null;
        }
        const { packed_position, packed_rotation, packed_scale, packed_color } = element.properties;
        if (!packed_position || !packed_rotation || !packed_scale || !packed_color) {
          throw new Error(
            "Missing PLY properties: packed_position, packed_rotation, packed_scale, packed_color"
          );
        }
        const SQRT2 = Math.sqrt(2);
        return (index, item) => {
          const chunk = ssChunks[index >>> 8];
          if (chunk == null) {
            throw new Error("Missing PLY chunk");
          }
          const {
            min_x,
            min_y,
            min_z,
            max_x,
            max_y,
            max_z,
            min_scale_x,
            min_scale_y,
            min_scale_z,
            max_scale_x,
            max_scale_y,
            max_scale_z,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          } = chunk;
          const { packed_position: packed_position2, packed_rotation: packed_rotation2, packed_scale: packed_scale2, packed_color: packed_color2 } = item;
          const x2 = (packed_position2 >>> 21 & 2047) / 2047 * (max_x - min_x) + min_x;
          const y = (packed_position2 >>> 11 & 1023) / 1023 * (max_y - min_y) + min_y;
          const z = (packed_position2 & 2047) / 2047 * (max_z - min_z) + min_z;
          const r0 = ((packed_rotation2 >>> 20 & 1023) / 1023 - 0.5) * SQRT2;
          const r1 = ((packed_rotation2 >>> 10 & 1023) / 1023 - 0.5) * SQRT2;
          const r2 = ((packed_rotation2 & 1023) / 1023 - 0.5) * SQRT2;
          const rr = Math.sqrt(Math.max(0, 1 - r0 * r0 - r1 * r1 - r2 * r2));
          const rOrder = packed_rotation2 >>> 30;
          const quatX = rOrder === 0 ? r0 : rOrder === 1 ? rr : r1;
          const quatY = rOrder <= 1 ? r1 : rOrder === 2 ? rr : r2;
          const quatZ = rOrder <= 2 ? r2 : rr;
          const quatW = rOrder === 0 ? rr : r0;
          const scaleX = Math.exp(
            (packed_scale2 >>> 21 & 2047) / 2047 * (max_scale_x - min_scale_x) + min_scale_x
          );
          const scaleY = Math.exp(
            (packed_scale2 >>> 11 & 1023) / 1023 * (max_scale_y - min_scale_y) + min_scale_y
          );
          const scaleZ = Math.exp(
            (packed_scale2 & 2047) / 2047 * (max_scale_z - min_scale_z) + min_scale_z
          );
          const r = (packed_color2 >>> 24 & 255) / 255 * ((max_r ?? 1) - (min_r ?? 0)) + (min_r ?? 0);
          const g = (packed_color2 >>> 16 & 255) / 255 * ((max_g ?? 1) - (min_g ?? 0)) + (min_g ?? 0);
          const b = (packed_color2 >>> 8 & 255) / 255 * ((max_b ?? 1) - (min_b ?? 0)) + (min_b ?? 0);
          const opacity = (packed_color2 & 255) / 255;
          splatCallback(
            index,
            x2,
            y,
            z,
            scaleX,
            scaleY,
            scaleZ,
            quatX,
            quatY,
            quatZ,
            quatW,
            opacity,
            r,
            g,
            b
          );
        };
      }
      const elementCallback = (element) => {
        if (element.name === "chunk") {
          return initSuperSplat(element);
        }
        if (isSuperSplat) {
          return decodeSuperSplat(element);
        }
        if (element.name !== "vertex") {
          return null;
        }
        const {
          x: x2,
          y,
          z,
          scale_0,
          scale_1,
          scale_2,
          rot_0,
          rot_1,
          rot_2,
          rot_3,
          opacity,
          f_dc_0,
          f_dc_1,
          f_dc_2,
          red,
          green,
          blue,
          alpha
        } = element.properties;
        if (!x2 || !y || !z) {
          throw new Error("Missing PLY properties: x, y, z");
        }
        const hasScales = scale_0 && scale_1 && scale_2;
        const hasRots = rot_0 && rot_1 && rot_2 && rot_3;
        const alphaDiv = alpha != null ? FIELD_SCALE[alpha.type] : 1;
        const redDiv = red != null ? FIELD_SCALE[red.type] : 1;
        const greenDiv = green != null ? FIELD_SCALE[green.type] : 1;
        const blueDiv = blue != null ? FIELD_SCALE[blue.type] : 1;
        numSh = getNumSh(element.properties);
        prepareSh();
        return (index, item) => {
          const scaleX = hasScales ? Math.exp(item.scale_0) : _PlyReader.defaultPointScale;
          const scaleY = hasScales ? Math.exp(item.scale_1) : _PlyReader.defaultPointScale;
          const scaleZ = hasScales ? Math.exp(item.scale_2) : _PlyReader.defaultPointScale;
          const quatX = hasRots ? item.rot_1 : 0;
          const quatY = hasRots ? item.rot_2 : 0;
          const quatZ = hasRots ? item.rot_3 : 0;
          const quatW = hasRots ? item.rot_0 : 1;
          const op = opacity != null ? 1 / (1 + Math.exp(-item.opacity)) : alpha != null ? item.alpha / alphaDiv : 1;
          const r = f_dc_0 != null ? item.f_dc_0 * SH_C0$1 + 0.5 : red != null ? item.red / redDiv : 1;
          const g = f_dc_1 != null ? item.f_dc_1 * SH_C0$1 + 0.5 : green != null ? item.green / greenDiv : 1;
          const b = f_dc_2 != null ? item.f_dc_2 * SH_C0$1 + 0.5 : blue != null ? item.blue / blueDiv : 1;
          splatCallback(
            index,
            item.x,
            item.y,
            item.z,
            scaleX,
            scaleY,
            scaleZ,
            quatX,
            quatY,
            quatZ,
            quatW,
            op,
            r,
            g,
            b
          );
          if (shCallback && sh1) {
            const sh = item.f_rest;
            if (sh1) {
              for (let i2 = 0; i2 < sh1Props.length; i2++) {
                sh1[i2] = sh[sh1Props[i2]];
              }
            }
            if (sh2) {
              for (let i2 = 0; i2 < sh2Props.length; i2++) {
                sh2[i2] = sh[sh2Props[i2]];
              }
            }
            if (sh3) {
              for (let i2 = 0; i2 < sh3Props.length; i2++) {
                sh3[i2] = sh[sh3Props[i2]];
              }
            }
            shCallback(index, sh1, sh2, sh3);
          }
        };
      };
      this.parseData(elementCallback);
    }
    // Inject RGBA values into original PLY file, which can be used to modify
    // the color/opacity of the Gsplats and write out the modified PLY file.
    injectRgba(rgba) {
      let offset = 0;
      const data = this.data;
      if (data == null) {
        throw new Error("No parsed data");
      }
      if (rgba.length !== this.numSplats * 4) {
        throw new Error("Invalid RGBA array length");
      }
      for (const elementName in this.elements) {
        const element = this.elements[elementName];
        const { count, properties } = element;
        const parsers = [];
        let rgbaOffset = 0;
        const isVertex = elementName === "vertex";
        if (isVertex) {
          for (const name of ["opacity", "f_dc_0", "f_dc_1", "f_dc_2"]) {
            if (!properties[name] || properties[name].type !== "float") {
              throw new Error(\`Can't injectRgba due to property: \${name}\`);
            }
          }
        }
        for (const [propertyName, property] of Object.entries(properties)) {
          if (!property.isList) {
            if (isVertex) {
              if (propertyName === "f_dc_0" || propertyName === "f_dc_1" || propertyName === "f_dc_2") {
                const component = Number.parseInt(
                  propertyName.slice("f_dc_".length)
                );
                parsers.push(() => {
                  const value = (rgba[rgbaOffset + component] / 255 - 0.5) / SH_C0$1;
                  SET_FIELD[property.type](
                    data,
                    offset,
                    this.littleEndian,
                    value
                  );
                });
              } else if (propertyName === "opacity") {
                parsers.push(() => {
                  const value = Math.max(
                    -100,
                    Math.min(
                      100,
                      -Math.log(1 / (rgba[rgbaOffset + 3] / 255) - 1)
                    )
                  );
                  SET_FIELD[property.type](
                    data,
                    offset,
                    this.littleEndian,
                    value
                  );
                });
              }
            }
            parsers.push(() => {
              offset += FIELD_BYTES[property.type];
            });
          } else {
            parsers.push(() => {
              const length = PARSE_FIELD[property.countType](
                data,
                offset,
                this.littleEndian
              );
              offset += FIELD_BYTES[property.countType];
              offset += length * FIELD_BYTES[property.type];
            });
          }
        }
        for (let index = 0; index < count; index++) {
          for (const parser of parsers) {
            parser();
          }
          if (isVertex) {
            rgbaOffset += 4;
          }
        }
      }
    }
  };
  _PlyReader.defaultPointScale = 1e-3;
  let PlyReader = _PlyReader;
  const SH_C0$1 = 0.28209479177387814;
  const PARSE_FIELD = {
    char: (data, offset, littleEndian) => {
      return data.getInt8(offset);
    },
    uchar: (data, offset, littleEndian) => {
      return data.getUint8(offset);
    },
    short: (data, offset, littleEndian) => {
      return data.getInt16(offset, littleEndian);
    },
    ushort: (data, offset, littleEndian) => {
      return data.getUint16(offset, littleEndian);
    },
    int: (data, offset, littleEndian) => {
      return data.getInt32(offset, littleEndian);
    },
    uint: (data, offset, littleEndian) => {
      return data.getUint32(offset, littleEndian);
    },
    float: (data, offset, littleEndian) => {
      return data.getFloat32(offset, littleEndian);
    },
    double: (data, offset, littleEndian) => {
      return data.getFloat64(offset, littleEndian);
    }
  };
  const SET_FIELD = {
    char: (data, offset, littleEndian, value) => {
      data.setInt8(offset, value);
    },
    uchar: (data, offset, littleEndian, value) => {
      data.setUint8(offset, value);
    },
    short: (data, offset, littleEndian, value) => {
      data.setInt16(offset, value, littleEndian);
    },
    ushort: (data, offset, littleEndian, value) => {
      data.setUint16(offset, value, littleEndian);
    },
    int: (data, offset, littleEndian, value) => {
      data.setInt32(offset, value, littleEndian);
    },
    uint: (data, offset, littleEndian, value) => {
      data.setUint32(offset, value, littleEndian);
    },
    float: (data, offset, littleEndian, value) => {
      data.setFloat32(offset, value, littleEndian);
    },
    double: (data, offset, littleEndian, value) => {
      data.setFloat64(offset, value, littleEndian);
    }
  };
  const FIELD_BYTES = {
    char: 1,
    uchar: 1,
    short: 2,
    ushort: 2,
    int: 4,
    uint: 4,
    float: 4,
    double: 8
  };
  const FIELD_SCALE = {
    char: 127,
    uchar: 255,
    short: 32767,
    ushort: 65535,
    int: 2147483647,
    uint: 4294967295,
    float: 1,
    double: 1
  };
  const NUM_F_REST_TO_NUM_SH = {
    0: 0,
    9: 1,
    24: 2,
    45: 3
  };
  const NUM_SH_TO_NUM_F_REST = {
    0: 0,
    1: 9,
    2: 24,
    3: 45
  };
  const F_REST_REGEX = /^f_rest_([0-9]{1,2})$/;
  function createEmptyItem(properties) {
    const item = {};
    for (const [propertyName, property] of Object.entries(properties)) {
      if (F_REST_REGEX.test(propertyName)) {
        item.f_rest = new Array(getNumSh(properties));
      } else {
        item[propertyName] = property.isList ? [] : 0;
      }
    }
    return item;
  }
  function createParseFn(properties, littleEndian) {
    if (safeToCompile(properties)) {
      return createCompiledParserFn(properties, littleEndian);
    }
    return createDynamicParserFn(properties, littleEndian);
  }
  const UNSAFE_EVAL_ALLOWED = (() => {
    try {
      new Function("return 42;");
    } catch (e) {
      return false;
    }
    return true;
  })();
  const PROPERTY_NAME_REGEX = /^[a-zA-Z0-9_]+$/;
  function safeToCompile(properties) {
    if (!UNSAFE_EVAL_ALLOWED) {
      return false;
    }
    for (const [propertyName, property] of Object.entries(properties)) {
      if (!PROPERTY_NAME_REGEX.test(propertyName)) {
        return false;
      }
      if (property.isList && !PLY_PROPERTY_TYPES.includes(property.countType)) {
        return false;
      }
      if (!PLY_PROPERTY_TYPES.includes(property.type)) {
        return false;
      }
    }
    return true;
  }
  function createCompiledParserFn(properties, littleEndian) {
    const parserSrc = ["let list;"];
    for (const [propertyName, property] of Object.entries(properties)) {
      const fRestMatch = propertyName.match(F_REST_REGEX);
      if (fRestMatch) {
        const fRestIndex = +fRestMatch[1];
        parserSrc.push(
          /*js*/
          \`
        item.f_rest[\${fRestIndex}] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.type]};
      \`
        );
      } else if (!property.isList) {
        parserSrc.push(
          /*js*/
          \`
        item['\${propertyName}'] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.type]};
      \`
        );
      } else {
        parserSrc.push(
          /*js*/
          \`
        list = item['\${propertyName}'];
        list.length = PARSE_FIELD['\${property.countType}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.countType]};
        for (let i = 0; i < list.length; i++) {
          list[i] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
          offset += \${FIELD_BYTES[property.type]};
        }
      \`
        );
      }
    }
    parserSrc.push("return offset;");
    const fn = new Function(
      "data",
      "offset",
      "item",
      "PARSE_FIELD",
      parserSrc.join("\\n")
    );
    return (data, offset, item) => fn(data, offset, item, PARSE_FIELD);
  }
  function createDynamicParserFn(properties, littleEndian) {
    const parsers = [];
    for (const [propertyName, property] of Object.entries(properties)) {
      const fRestMatch = propertyName.match(F_REST_REGEX);
      if (fRestMatch) {
        const fRestIndex = +fRestMatch[1];
        parsers.push(
          (data, offset, item) => {
            item.f_rest[fRestIndex] = PARSE_FIELD[property.type](
              data,
              offset,
              littleEndian
            );
            return offset + FIELD_BYTES[property.type];
          }
        );
      } else if (!property.isList) {
        parsers.push(
          (data, offset, item) => {
            item[propertyName] = PARSE_FIELD[property.type](
              data,
              offset,
              littleEndian
            );
            return offset + FIELD_BYTES[property.type];
          }
        );
      } else {
        parsers.push(
          (data, offset, item) => {
            const list = item[propertyName];
            list.length = PARSE_FIELD[property.countType](
              data,
              offset,
              littleEndian
            );
            let currentOffset = offset + FIELD_BYTES[property.countType];
            for (let i2 = 0; i2 < list.length; i2++) {
              list[i2] = PARSE_FIELD[property.type](
                data,
                currentOffset,
                littleEndian
              );
              currentOffset += FIELD_BYTES[property.type];
            }
            return currentOffset;
          }
        );
      }
    }
    return (data, offset, item) => {
      let currentOffset = offset;
      for (let parserIndex = 0; parserIndex < parsers.length; parserIndex++) {
        currentOffset = parsers[parserIndex](data, currentOffset, item);
      }
      return currentOffset;
    };
  }
  function getNumSh(properties) {
    let num_f_rest = 0;
    while (properties[\`f_rest_\${num_f_rest}\`]) {
      num_f_rest += 1;
    }
    const numSh = NUM_F_REST_TO_NUM_SH[num_f_rest];
    if (numSh == null) {
      throw new Error(\`Unsupported number of SH coefficients: \${num_f_rest}\`);
    }
    return numSh;
  }
  var SplatFileType = /* @__PURE__ */ ((SplatFileType2) => {
    SplatFileType2["PLY"] = "ply";
    SplatFileType2["SPZ"] = "spz";
    SplatFileType2["SPLAT"] = "splat";
    SplatFileType2["KSPLAT"] = "ksplat";
    SplatFileType2["PCSOGS"] = "pcsogs";
    SplatFileType2["PCSOGSZIP"] = "pcsogszip";
    return SplatFileType2;
  })(SplatFileType || {});
  function getSplatFileType(fileBytes) {
    const view = new DataView(fileBytes.buffer);
    if ((view.getUint32(0, true) & 16777215) === 7957616) {
      return "ply";
    }
    if ((view.getUint32(0, true) & 16777215) === 559903) {
      const header = decompressPartialGzip(fileBytes, 4);
      const gView = new DataView(header.buffer);
      if (gView.getUint32(0, true) === 1347635022) {
        return "spz";
      }
      return void 0;
    }
    if (view.getUint32(0, true) === 67324752) {
      if (tryPcSogsZip(fileBytes)) {
        return "pcsogszip";
      }
      return void 0;
    }
    return void 0;
  }
  function getFileExtension(pathOrUrl) {
    const noTrailing = pathOrUrl.split(/[?#]/, 1)[0];
    const lastSlash = Math.max(
      noTrailing.lastIndexOf("/"),
      noTrailing.lastIndexOf("\\\\")
    );
    const filename = noTrailing.slice(lastSlash + 1);
    const lastDot = filename.lastIndexOf(".");
    if (lastDot <= 0 || lastDot === filename.length - 1) {
      return "";
    }
    return filename.slice(lastDot + 1).toLowerCase();
  }
  function getSplatFileTypeFromPath(pathOrUrl) {
    const extension = getFileExtension(pathOrUrl);
    if (extension === "ply") {
      return "ply";
    }
    if (extension === "spz") {
      return "spz";
    }
    if (extension === "splat") {
      return "splat";
    }
    if (extension === "ksplat") {
      return "ksplat";
    }
    if (extension === "sog") {
      return "pcsogszip";
    }
    return void 0;
  }
  function tryPcSogs(input) {
    try {
      let text;
      if (typeof input === "string") {
        text = input;
      } else {
        const fileBytes = input instanceof ArrayBuffer ? new Uint8Array(input) : input;
        if (fileBytes.length > 65536) {
          return void 0;
        }
        text = new TextDecoder().decode(fileBytes);
      }
      const json = JSON.parse(text);
      if (!json || typeof json !== "object" || Array.isArray(json)) {
        return void 0;
      }
      const isVersion2 = json.version === 2;
      for (const key of ["means", "scales", "quats", "sh0"]) {
        if (!json[key] || typeof json[key] !== "object" || Array.isArray(json[key])) {
          return void 0;
        }
        if (isVersion2) {
          if (!json[key].files) {
            return void 0;
          }
          if ((key === "scales" || key === "sh0") && !json[key].codebook) {
            return void 0;
          }
          if (key === "means" && (!json[key].mins || !json[key].maxs)) {
            return void 0;
          }
        } else {
          if (!json[key].shape || !json[key].files) {
            return void 0;
          }
          if (key !== "quats" && (!json[key].mins || !json[key].maxs)) {
            return void 0;
          }
        }
      }
      return json;
    } catch {
      return void 0;
    }
  }
  function tryPcSogsZip(input) {
    try {
      const fileBytes = input instanceof ArrayBuffer ? new Uint8Array(input) : input;
      let metaFilename = null;
      const unzipped = unzipSync(fileBytes, {
        filter: ({ name }) => {
          const filename = name.split(/[\\\\/]/).pop();
          if (filename === "meta.json") {
            metaFilename = name;
            return true;
          }
          return false;
        }
      });
      if (!metaFilename) {
        return void 0;
      }
      const json = tryPcSogs(unzipped[metaFilename]);
      if (!json) {
        return void 0;
      }
      return { name: metaFilename, json };
    } catch {
      return void 0;
    }
  }
  class SplatData {
    constructor({ maxSplats = 1 } = {}) {
      this.numSplats = 0;
      this.maxSplats = getTextureSize(maxSplats).maxSplats;
      this.centers = new Float32Array(this.maxSplats * 3);
      this.scales = new Float32Array(this.maxSplats * 3);
      this.quaternions = new Float32Array(this.maxSplats * 4);
      this.opacities = new Float32Array(this.maxSplats);
      this.colors = new Float32Array(this.maxSplats * 3);
    }
    pushSplat() {
      const index = this.numSplats;
      this.ensureIndex(index);
      this.numSplats += 1;
      return index;
    }
    unpushSplat(index) {
      if (index === this.numSplats - 1) {
        this.numSplats -= 1;
      } else {
        throw new Error("Cannot unpush splat from non-last position");
      }
    }
    ensureCapacity(numSplats) {
      if (numSplats > this.maxSplats) {
        const targetSplats = Math.max(numSplats, this.maxSplats * 2);
        const newCenters = new Float32Array(targetSplats * 3);
        const newScales = new Float32Array(targetSplats * 3);
        const newQuaternions = new Float32Array(targetSplats * 4);
        const newOpacities = new Float32Array(targetSplats);
        const newColors = new Float32Array(targetSplats * 3);
        newCenters.set(this.centers);
        newScales.set(this.scales);
        newQuaternions.set(this.quaternions);
        newOpacities.set(this.opacities);
        newColors.set(this.colors);
        this.centers = newCenters;
        this.scales = newScales;
        this.quaternions = newQuaternions;
        this.opacities = newOpacities;
        this.colors = newColors;
        if (this.sh1) {
          const newSh1 = new Float32Array(targetSplats * 9);
          newSh1.set(this.sh1);
          this.sh1 = newSh1;
        }
        if (this.sh2) {
          const newSh2 = new Float32Array(targetSplats * 15);
          newSh2.set(this.sh2);
          this.sh2 = newSh2;
        }
        if (this.sh3) {
          const newSh3 = new Float32Array(targetSplats * 21);
          newSh3.set(this.sh3);
          this.sh3 = newSh3;
        }
        this.maxSplats = targetSplats;
      }
    }
    ensureIndex(index) {
      this.ensureCapacity(index + 1);
    }
    setCenter(index, x2, y, z) {
      this.centers[index * 3] = x2;
      this.centers[index * 3 + 1] = y;
      this.centers[index * 3 + 2] = z;
    }
    setScale(index, scaleX, scaleY, scaleZ) {
      this.scales[index * 3] = scaleX;
      this.scales[index * 3 + 1] = scaleY;
      this.scales[index * 3 + 2] = scaleZ;
    }
    setQuaternion(index, x2, y, z, w) {
      this.quaternions[index * 4] = x2;
      this.quaternions[index * 4 + 1] = y;
      this.quaternions[index * 4 + 2] = z;
      this.quaternions[index * 4 + 3] = w;
    }
    setOpacity(index, opacity) {
      this.opacities[index] = opacity;
    }
    setColor(index, r, g, b) {
      this.colors[index * 3] = r;
      this.colors[index * 3 + 1] = g;
      this.colors[index * 3 + 2] = b;
    }
    setSh1(index, sh1) {
      if (!this.sh1) {
        this.sh1 = new Float32Array(this.maxSplats * 9);
      }
      for (let j = 0; j < 9; ++j) {
        this.sh1[index * 9 + j] = sh1[j];
      }
    }
    setSh2(index, sh2) {
      if (!this.sh2) {
        this.sh2 = new Float32Array(this.maxSplats * 15);
      }
      for (let j = 0; j < 15; ++j) {
        this.sh2[index * 15 + j] = sh2[j];
      }
    }
    setSh3(index, sh3) {
      if (!this.sh3) {
        this.sh3 = new Float32Array(this.maxSplats * 21);
      }
      for (let j = 0; j < 21; ++j) {
        this.sh3[index * 21 + j] = sh3[j];
      }
    }
  }
  async function unpackPcSogs(json, extraFiles, splatEncoding) {
    const isVersion2 = "version" in json;
    if (!isVersion2 && json.quats.encoding !== "quaternion_packed") {
      throw new Error("Unsupported quaternion encoding");
    }
    const numSplats = isVersion2 ? json.count : json.means.shape[0];
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    const meansPromise = Promise.all([
      decodeImageRgba(extraFiles[json.means.files[0]]),
      decodeImageRgba(extraFiles[json.means.files[1]])
    ]).then((means) => {
      for (let i2 = 0; i2 < numSplats; ++i2) {
        const i4 = i2 * 4;
        const fx = (means[0][i4 + 0] + (means[1][i4 + 0] << 8)) / 65535;
        const fy = (means[0][i4 + 1] + (means[1][i4 + 1] << 8)) / 65535;
        const fz = (means[0][i4 + 2] + (means[1][i4 + 2] << 8)) / 65535;
        let x2 = json.means.mins[0] + (json.means.maxs[0] - json.means.mins[0]) * fx;
        let y = json.means.mins[1] + (json.means.maxs[1] - json.means.mins[1]) * fy;
        let z = json.means.mins[2] + (json.means.maxs[2] - json.means.mins[2]) * fz;
        x2 = Math.sign(x2) * (Math.exp(Math.abs(x2)) - 1);
        y = Math.sign(y) * (Math.exp(Math.abs(y)) - 1);
        z = Math.sign(z) * (Math.exp(Math.abs(z)) - 1);
        setPackedSplatCenter(packedArray, i2, x2, y, z);
      }
    });
    const scalesPromise = decodeImageRgba(extraFiles[json.scales.files[0]]).then(
      (scales) => {
        let xLookup;
        let yLookup;
        let zLookup;
        if (isVersion2) {
          xLookup = yLookup = zLookup = json.scales.codebook.map((x2) => Math.exp(x2));
        } else {
          xLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[0] + (json.scales.maxs[0] - json.scales.mins[0]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
          yLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[1] + (json.scales.maxs[1] - json.scales.mins[1]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
          zLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[2] + (json.scales.maxs[2] - json.scales.mins[2]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
        }
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          setPackedSplatScales(
            packedArray,
            i2,
            xLookup[scales[i4 + 0]],
            yLookup[scales[i4 + 1]],
            zLookup[scales[i4 + 2]],
            splatEncoding
          );
        }
      }
    );
    const quatsPromise = decodeImageRgba(extraFiles[json.quats.files[0]]).then(
      (quats) => {
        const SQRT2 = Math.sqrt(2);
        const lookup = new Array(256).fill(0).map((_, i2) => (i2 / 255 - 0.5) * SQRT2);
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          const r0 = lookup[quats[i4 + 0]];
          const r1 = lookup[quats[i4 + 1]];
          const r2 = lookup[quats[i4 + 2]];
          const rr = Math.sqrt(Math.max(0, 1 - r0 * r0 - r1 * r1 - r2 * r2));
          const rOrder = quats[i4 + 3] - 252;
          const quatX = rOrder === 0 ? r0 : rOrder === 1 ? rr : r1;
          const quatY = rOrder <= 1 ? r1 : rOrder === 2 ? rr : r2;
          const quatZ = rOrder <= 2 ? r2 : rr;
          const quatW = rOrder === 0 ? rr : r0;
          setPackedSplatQuat(packedArray, i2, quatX, quatY, quatZ, quatW);
        }
      }
    );
    const sh0Promise = decodeImageRgba(extraFiles[json.sh0.files[0]]).then(
      (sh0) => {
        const SH_C02 = 0.28209479177387814;
        let rLookup;
        let gLookup;
        let bLookup;
        let aLookup;
        if (isVersion2) {
          rLookup = gLookup = bLookup = json.sh0.codebook.map((x2) => SH_C02 * x2 + 0.5);
          aLookup = new Array(256).fill(0).map((_, i2) => i2 / 255);
        } else {
          rLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[0] + (json.sh0.maxs[0] - json.sh0.mins[0]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          gLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[1] + (json.sh0.maxs[1] - json.sh0.mins[1]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          bLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[2] + (json.sh0.maxs[2] - json.sh0.mins[2]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          aLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[3] + (json.sh0.maxs[3] - json.sh0.mins[3]) * (i2 / 255)
          ).map((x2) => 1 / (1 + Math.exp(-x2)));
        }
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          setPackedSplatRgba(
            packedArray,
            i2,
            rLookup[sh0[i4 + 0]],
            gLookup[sh0[i4 + 1]],
            bLookup[sh0[i4 + 2]],
            aLookup[sh0[i4 + 3]],
            splatEncoding
          );
        }
      }
    );
    const promises = [meansPromise, scalesPromise, quatsPromise, sh0Promise];
    if (json.shN) {
      const useSH3 = isVersion2 ? json.shN.bands >= 3 : json.shN.shape[1] >= 48 - 3;
      const useSH2 = isVersion2 ? json.shN.bands >= 2 : json.shN.shape[1] >= 27 - 3;
      const useSH1 = isVersion2 ? json.shN.bands >= 1 : json.shN.shape[1] >= 12 - 3;
      if (useSH1) extra.sh1 = new Uint32Array(numSplats * 2);
      if (useSH2) extra.sh2 = new Uint32Array(numSplats * 4);
      if (useSH3) extra.sh3 = new Uint32Array(numSplats * 4);
      const sh1 = new Float32Array(9);
      const sh2 = new Float32Array(15);
      const sh3 = new Float32Array(21);
      const shN = json.shN;
      const shNPromise = Promise.all([
        decodeImage(extraFiles[json.shN.files[0]]),
        decodeImage(extraFiles[json.shN.files[1]])
      ]).then(([centroids, labels]) => {
        const lookup = "codebook" in shN ? shN.codebook : new Array(256).fill(0).map((_, i2) => shN.mins + (shN.maxs - shN.mins) * (i2 / 255));
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          const label = labels.rgba[i4 + 0] + (labels.rgba[i4 + 1] << 8);
          const col = (label & 63) * 15;
          const row = label >>> 6;
          const offset = row * centroids.width + col;
          for (let d = 0; d < 3; ++d) {
            if (useSH1) {
              for (let k = 0; k < 3; ++k) {
                sh1[k * 3 + d] = lookup[centroids.rgba[(offset + k) * 4 + d]];
              }
            }
            if (useSH2) {
              for (let k = 0; k < 5; ++k) {
                sh2[k * 3 + d] = lookup[centroids.rgba[(offset + 3 + k) * 4 + d]];
              }
            }
            if (useSH3) {
              for (let k = 0; k < 7; ++k) {
                sh3[k * 3 + d] = lookup[centroids.rgba[(offset + 8 + k) * 4 + d]];
              }
            }
          }
          if (useSH1)
            encodeSh1Rgb(extra.sh1, i2, sh1, splatEncoding);
          if (useSH2)
            encodeSh2Rgb(extra.sh2, i2, sh2, splatEncoding);
          if (useSH3)
            encodeSh3Rgb(extra.sh3, i2, sh3, splatEncoding);
        }
      });
      promises.push(shNPromise);
    }
    await Promise.all(promises);
    return { packedArray, numSplats, extra };
  }
  let offscreenGlContext = null;
  async function decodeImage(fileBytes) {
    if (!offscreenGlContext) {
      const canvas = new OffscreenCanvas(1, 1);
      offscreenGlContext = canvas.getContext("webgl2");
      if (!offscreenGlContext) {
        throw new Error("Failed to create WebGL2 context");
      }
    }
    const imageBlob = new Blob([fileBytes]);
    const bitmap = await createImageBitmap(imageBlob, {
      premultiplyAlpha: "none"
    });
    const gl = offscreenGlContext;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );
    const data = new Uint8Array(bitmap.width * bitmap.height * 4);
    gl.readPixels(
      0,
      0,
      bitmap.width,
      bitmap.height,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      data
    );
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(framebuffer);
    return { rgba: data, width: bitmap.width, height: bitmap.height };
  }
  async function decodeImageRgba(fileBytes) {
    const { rgba } = await decodeImage(fileBytes);
    return rgba;
  }
  async function unpackPcSogsZip(fileBytes, splatEncoding) {
    var _a2;
    const nameJson = tryPcSogsZip(fileBytes);
    if (!nameJson) {
      throw new Error("Invalid PC SOGS zip file");
    }
    const { name, json } = nameJson;
    const lastSlash = name.lastIndexOf("/");
    const lastBackslash = name.lastIndexOf("\\\\");
    const prefix = name.slice(0, Math.max(lastSlash, lastBackslash) + 1);
    const fileMap = /* @__PURE__ */ new Map();
    const refFiles = [
      ...json.means.files,
      ...json.scales.files,
      ...json.quats.files,
      ...json.sh0.files,
      ...((_a2 = json.shN) == null ? void 0 : _a2.files) ?? []
    ];
    for (const file of refFiles) {
      fileMap.set(prefix + file, file);
    }
    const unzipped = await new Promise(
      (resolve, reject) => {
        unzip(
          fileBytes,
          {
            filter: ({ name: name2 }) => {
              return fileMap.has(name2);
            }
          },
          (err2, files) => {
            if (err2) {
              reject(err2);
            } else {
              resolve(files);
            }
          }
        );
      }
    );
    const extraFiles = {};
    for (const [full, name2] of fileMap.entries()) {
      extraFiles[name2] = unzipped[full];
    }
    return await unpackPcSogs(json, extraFiles, splatEncoding);
  }
  class SpzReader {
    constructor({ fileBytes }) {
      this.version = -1;
      this.numSplats = 0;
      this.shDegree = 0;
      this.fractionalBits = 0;
      this.flags = 0;
      this.flagAntiAlias = false;
      this.reserved = 0;
      this.headerParsed = false;
      this.parsed = false;
      this.fileBytes = fileBytes instanceof ArrayBuffer ? new Uint8Array(fileBytes) : fileBytes;
      this.reader = new GunzipReader({ fileBytes: this.fileBytes });
    }
    async parseHeader() {
      if (this.headerParsed) {
        throw new Error("SPZ file header already parsed");
      }
      const header = new DataView((await this.reader.read(16)).buffer);
      if (header.getUint32(0, true) !== 1347635022) {
        throw new Error("Invalid SPZ file");
      }
      this.version = header.getUint32(4, true);
      if (this.version < 1 || this.version > 3) {
        throw new Error(\`Unsupported SPZ version: \${this.version}\`);
      }
      this.numSplats = header.getUint32(8, true);
      this.shDegree = header.getUint8(12);
      this.fractionalBits = header.getUint8(13);
      this.flags = header.getUint8(14);
      this.flagAntiAlias = (this.flags & 1) !== 0;
      this.reserved = header.getUint8(15);
      this.headerParsed = true;
      this.parsed = false;
    }
    async parseSplats(centerCallback, alphaCallback, rgbCallback, scalesCallback, quatCallback, shCallback) {
      if (!this.headerParsed) {
        throw new Error("SPZ file header must be parsed first");
      }
      if (this.parsed) {
        throw new Error("SPZ file already parsed");
      }
      this.parsed = true;
      if (this.version === 1) {
        const centerBytes = await this.reader.read(this.numSplats * 3 * 2);
        const centerUint16 = new Uint16Array(centerBytes.buffer);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const x2 = fromHalf(centerUint16[i3]);
          const y = fromHalf(centerUint16[i3 + 1]);
          const z = fromHalf(centerUint16[i3 + 2]);
          centerCallback == null ? void 0 : centerCallback(i2, x2, y, z);
        }
      } else if (this.version === 2 || this.version === 3) {
        const fixed = 1 << this.fractionalBits;
        const centerBytes = await this.reader.read(this.numSplats * 3 * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i9 = i2 * 9;
          const x2 = ((centerBytes[i9 + 2] << 24 | centerBytes[i9 + 1] << 16 | centerBytes[i9] << 8) >> 8) / fixed;
          const y = ((centerBytes[i9 + 5] << 24 | centerBytes[i9 + 4] << 16 | centerBytes[i9 + 3] << 8) >> 8) / fixed;
          const z = ((centerBytes[i9 + 8] << 24 | centerBytes[i9 + 7] << 16 | centerBytes[i9 + 6] << 8) >> 8) / fixed;
          centerCallback == null ? void 0 : centerCallback(i2, x2, y, z);
        }
      } else {
        throw new Error("Unreachable");
      }
      {
        const bytes = await this.reader.read(this.numSplats);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          alphaCallback == null ? void 0 : alphaCallback(i2, bytes[i2] / 255);
        }
      }
      {
        const rgbBytes = await this.reader.read(this.numSplats * 3);
        const scale = SH_C0 / 0.15;
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const r = (rgbBytes[i3] / 255 - 0.5) * scale + 0.5;
          const g = (rgbBytes[i3 + 1] / 255 - 0.5) * scale + 0.5;
          const b = (rgbBytes[i3 + 2] / 255 - 0.5) * scale + 0.5;
          rgbCallback == null ? void 0 : rgbCallback(i2, r, g, b);
        }
      }
      {
        const scalesBytes = await this.reader.read(this.numSplats * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const scaleX = Math.exp(scalesBytes[i3] / 16 - 10);
          const scaleY = Math.exp(scalesBytes[i3 + 1] / 16 - 10);
          const scaleZ = Math.exp(scalesBytes[i3 + 2] / 16 - 10);
          scalesCallback == null ? void 0 : scalesCallback(i2, scaleX, scaleY, scaleZ);
        }
      }
      if (this.version === 3) {
        const maxValue = 1 / Math.sqrt(2);
        const quatBytes = await this.reader.read(this.numSplats * 4);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 4;
          const quaternion = [0, 0, 0, 0];
          const values = [
            quatBytes[i3],
            quatBytes[i3 + 1],
            quatBytes[i3 + 2],
            quatBytes[i3 + 3]
          ];
          const combinedValues = values[0] + (values[1] << 8) + (values[2] << 16) + (values[3] << 24);
          const valueMask = (1 << 9) - 1;
          const largestIndex = combinedValues >>> 30;
          let remainingValues = combinedValues;
          let sumSquares = 0;
          for (let i22 = 3; i22 >= 0; --i22) {
            if (i22 !== largestIndex) {
              const value = remainingValues & valueMask;
              const sign = remainingValues >>> 9 & 1;
              remainingValues = remainingValues >>> 10;
              quaternion[i22] = maxValue * (value / valueMask);
              quaternion[i22] = sign === 0 ? quaternion[i22] : -quaternion[i22];
              sumSquares += quaternion[i22] * quaternion[i22];
            }
          }
          const square = 1 - sumSquares;
          quaternion[largestIndex] = Math.sqrt(Math.max(square, 0));
          quatCallback == null ? void 0 : quatCallback(
            i2,
            quaternion[0],
            quaternion[1],
            quaternion[2],
            quaternion[3]
          );
        }
      } else {
        const quatBytes = await this.reader.read(this.numSplats * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const quatX = quatBytes[i3] / 127.5 - 1;
          const quatY = quatBytes[i3 + 1] / 127.5 - 1;
          const quatZ = quatBytes[i3 + 2] / 127.5 - 1;
          const quatW = Math.sqrt(
            Math.max(0, 1 - quatX * quatX - quatY * quatY - quatZ * quatZ)
          );
          quatCallback == null ? void 0 : quatCallback(i2, quatX, quatY, quatZ, quatW);
        }
      }
      if (shCallback && this.shDegree >= 1) {
        const sh1 = new Float32Array(3 * 3);
        const sh2 = this.shDegree >= 2 ? new Float32Array(5 * 3) : void 0;
        const sh3 = this.shDegree >= 3 ? new Float32Array(7 * 3) : void 0;
        const shBytes = await this.reader.read(
          this.numSplats * SH_DEGREE_TO_VECS[this.shDegree] * 3
        );
        let offset = 0;
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          for (let j = 0; j < 9; ++j) {
            sh1[j] = (shBytes[offset + j] - 128) / 128;
          }
          offset += 9;
          if (sh2) {
            for (let j = 0; j < 15; ++j) {
              sh2[j] = (shBytes[offset + j] - 128) / 128;
            }
            offset += 15;
          }
          if (sh3) {
            for (let j = 0; j < 21; ++j) {
              sh3[j] = (shBytes[offset + j] - 128) / 128;
            }
            offset += 21;
          }
          shCallback == null ? void 0 : shCallback(i2, sh1, sh2, sh3);
        }
      }
    }
  }
  const SH_DEGREE_TO_VECS = { 1: 3, 2: 8, 3: 15 };
  const SH_C0 = 0.28209479177387814;
  const SPZ_MAGIC = 1347635022;
  const SPZ_VERSION = 3;
  const FLAG_ANTIALIASED = 1;
  class SpzWriter {
    constructor({
      numSplats,
      shDegree,
      fractionalBits = 12,
      flagAntiAlias = true
    }) {
      this.clippedCount = 0;
      const splatSize = 9 + // Position
      1 + // Opacity
      3 + // Scale
      3 + // DC-rgb
      4 + // Rotation
      (shDegree >= 1 ? 9 : 0) + (shDegree >= 2 ? 15 : 0) + (shDegree >= 3 ? 21 : 0);
      const bufferSize = 16 + numSplats * splatSize;
      this.buffer = new ArrayBuffer(bufferSize);
      this.view = new DataView(this.buffer);
      this.view.setUint32(0, SPZ_MAGIC, true);
      this.view.setUint32(4, SPZ_VERSION, true);
      this.view.setUint32(8, numSplats, true);
      this.view.setUint8(12, shDegree);
      this.view.setUint8(13, fractionalBits);
      this.view.setUint8(14, flagAntiAlias ? FLAG_ANTIALIASED : 0);
      this.view.setUint8(15, 0);
      this.numSplats = numSplats;
      this.shDegree = shDegree;
      this.fractionalBits = fractionalBits;
      this.fraction = 1 << fractionalBits;
      this.flagAntiAlias = flagAntiAlias;
    }
    setCenter(index, x2, y, z) {
      const xRounded = Math.round(x2 * this.fraction);
      const xInt = Math.max(-8388607, Math.min(8388607, xRounded));
      const yRounded = Math.round(y * this.fraction);
      const yInt = Math.max(-8388607, Math.min(8388607, yRounded));
      const zRounded = Math.round(z * this.fraction);
      const zInt = Math.max(-8388607, Math.min(8388607, zRounded));
      const clipped = xRounded !== xInt || yRounded !== yInt || zRounded !== zInt;
      if (clipped) {
        this.clippedCount += 1;
      }
      const i9 = index * 9;
      const base = 16 + i9;
      this.view.setUint8(base, xInt & 255);
      this.view.setUint8(base + 1, xInt >> 8 & 255);
      this.view.setUint8(base + 2, xInt >> 16 & 255);
      this.view.setUint8(base + 3, yInt & 255);
      this.view.setUint8(base + 4, yInt >> 8 & 255);
      this.view.setUint8(base + 5, yInt >> 16 & 255);
      this.view.setUint8(base + 6, zInt & 255);
      this.view.setUint8(base + 7, zInt >> 8 & 255);
      this.view.setUint8(base + 8, zInt >> 16 & 255);
    }
    setAlpha(index, alpha) {
      const base = 16 + this.numSplats * 9 + index;
      this.view.setUint8(
        base,
        Math.max(0, Math.min(255, Math.round(alpha * 255)))
      );
    }
    static scaleRgb(r) {
      const v = ((r - 0.5) / (SH_C0 / 0.15) + 0.5) * 255;
      return Math.max(0, Math.min(255, Math.round(v)));
    }
    setRgb(index, r, g, b) {
      const base = 16 + this.numSplats * 10 + index * 3;
      this.view.setUint8(base, SpzWriter.scaleRgb(r));
      this.view.setUint8(base + 1, SpzWriter.scaleRgb(g));
      this.view.setUint8(base + 2, SpzWriter.scaleRgb(b));
    }
    setScale(index, scaleX, scaleY, scaleZ) {
      const base = 16 + this.numSplats * 13 + index * 3;
      this.view.setUint8(
        base,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleX) + 10) * 16)))
      );
      this.view.setUint8(
        base + 1,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleY) + 10) * 16)))
      );
      this.view.setUint8(
        base + 2,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleZ) + 10) * 16)))
      );
    }
    setQuat(index, ...q) {
      const base = 16 + this.numSplats * 16 + index * 4;
      const quat = normalize(q);
      let iLargest = 0;
      for (let i2 = 1; i2 < 4; ++i2) {
        if (Math.abs(quat[i2]) > Math.abs(quat[iLargest])) {
          iLargest = i2;
        }
      }
      const negate = quat[iLargest] < 0 ? 1 : 0;
      let comp = iLargest;
      for (let i2 = 0; i2 < 4; ++i2) {
        if (i2 !== iLargest) {
          const negbit = (quat[i2] < 0 ? 1 : 0) ^ negate;
          const mag = Math.floor(
            ((1 << 9) - 1) * (Math.abs(quat[i2]) / Math.SQRT1_2) + 0.5
          );
          comp = comp << 10 | negbit << 9 | mag;
        }
      }
      this.view.setUint8(base, comp & 255);
      this.view.setUint8(base + 1, comp >> 8 & 255);
      this.view.setUint8(base + 2, comp >> 16 & 255);
      this.view.setUint8(base + 3, comp >>> 24 & 255);
    }
    static quantizeSh(sh, bits2) {
      const value = Math.round(sh * 128) + 128;
      const bucketSize = 1 << 8 - bits2;
      const quantized = Math.floor((value + bucketSize / 2) / bucketSize) * bucketSize;
      return Math.max(0, Math.min(255, quantized));
    }
    setSh(index, sh1, sh2, sh3) {
      const shVecs = SH_DEGREE_TO_VECS[this.shDegree] || 0;
      const base1 = 16 + this.numSplats * 20 + index * shVecs * 3;
      for (let j = 0; j < 9; ++j) {
        this.view.setUint8(base1 + j, SpzWriter.quantizeSh(sh1[j], 5));
      }
      if (sh2) {
        const base2 = base1 + 9;
        for (let j = 0; j < 15; ++j) {
          this.view.setUint8(base2 + j, SpzWriter.quantizeSh(sh2[j], 4));
        }
        if (sh3) {
          const base3 = base2 + 15;
          for (let j = 0; j < 21; ++j) {
            this.view.setUint8(base3 + j, SpzWriter.quantizeSh(sh3[j], 4));
          }
        }
      }
    }
    async finalize() {
      const input = new Uint8Array(this.buffer);
      const stream = new ReadableStream({
        async start(controller) {
          controller.enqueue(input);
          controller.close();
        }
      });
      const compressed = stream.pipeThrough(new CompressionStream("gzip"));
      const response = new Response(compressed);
      const buffer = await response.arrayBuffer();
      console.log(
        "Compressed",
        input.length,
        "bytes to",
        buffer.byteLength,
        "bytes"
      );
      return new Uint8Array(buffer);
    }
  }
  async function transcodeSpz(input) {
    var _a2, _b2, _c;
    const splats = new SplatData();
    const {
      inputs,
      clipXyz,
      maxSh,
      fractionalBits = 12,
      opacityThreshold
    } = input;
    for (const input2 of inputs) {
      let transformPos = function(pos) {
        pos.multiplyScalar(scale);
        pos.applyQuaternion(quaternion);
        pos.add(translate);
        return pos;
      }, transformScales = function(scales) {
        scales.multiplyScalar(scale);
        return scales;
      }, transformQuaternion = function(quat) {
        quat.premultiply(quaternion);
        return quat;
      }, withinClip = function(p) {
        return !clip || clip.containsPoint(p);
      }, withinOpacity = function(opacity) {
        return opacityThreshold !== void 0 ? opacity >= opacityThreshold : true;
      };
      const scale = ((_a2 = input2.transform) == null ? void 0 : _a2.scale) ?? 1;
      const quaternion = new Quaternion().fromArray(
        ((_b2 = input2.transform) == null ? void 0 : _b2.quaternion) ?? [0, 0, 0, 1]
      );
      const translate = new Vector3().fromArray(
        ((_c = input2.transform) == null ? void 0 : _c.translate) ?? [0, 0, 0]
      );
      const clip = clipXyz ? new Box3(
        new Vector3().fromArray(clipXyz.min),
        new Vector3().fromArray(clipXyz.max)
      ) : void 0;
      let fileType = input2.fileType;
      if (!fileType) {
        fileType = getSplatFileType(input2.fileBytes);
        if (!fileType && input2.pathOrUrl) {
          fileType = getSplatFileTypeFromPath(input2.pathOrUrl);
        }
      }
      switch (fileType) {
        case SplatFileType.PLY: {
          const ply = new PlyReader({ fileBytes: input2.fileBytes });
          await ply.parseHeader();
          let lastIndex = null;
          ply.parseSplats(
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                lastIndex = splats.pushSplat();
                splats.setCenter(lastIndex, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(lastIndex, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  lastIndex,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(lastIndex, opacity);
                splats.setColor(lastIndex, r, g, b);
              } else {
                lastIndex = null;
              }
            },
            (index, sh1, sh2, sh3) => {
              if (sh1 && lastIndex !== null) {
                splats.setSh1(lastIndex, sh1);
              }
              if (sh2 && lastIndex !== null) {
                splats.setSh2(lastIndex, sh2);
              }
              if (sh3 && lastIndex !== null) {
                splats.setSh3(lastIndex, sh3);
              }
            }
          );
          break;
        }
        case SplatFileType.SPZ: {
          const spz2 = new SpzReader({ fileBytes: input2.fileBytes });
          await spz2.parseHeader();
          const mapping = new Int32Array(spz2.numSplats);
          mapping.fill(-1);
          const centers = new Float32Array(spz2.numSplats * 3);
          const center = new Vector3();
          spz2.parseSplats(
            (index, x2, y, z) => {
              const center2 = transformPos(new Vector3(x2, y, z));
              centers[index * 3] = center2.x;
              centers[index * 3 + 1] = center2.y;
              centers[index * 3 + 2] = center2.z;
            },
            (index, alpha) => {
              center.fromArray(centers, index * 3);
              if (withinClip(center) && withinOpacity(alpha)) {
                mapping[index] = splats.pushSplat();
                splats.setCenter(mapping[index], center.x, center.y, center.z);
                splats.setOpacity(mapping[index], alpha);
              }
            },
            (index, r, g, b) => {
              if (mapping[index] >= 0) {
                splats.setColor(mapping[index], r, g, b);
              }
            },
            (index, scaleX, scaleY, scaleZ) => {
              if (mapping[index] >= 0) {
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(mapping[index], scales.x, scales.y, scales.z);
              }
            },
            (index, quatX, quatY, quatZ, quatW) => {
              if (mapping[index] >= 0) {
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  mapping[index],
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
              }
            },
            (index, sh1, sh2, sh3) => {
              if (mapping[index] >= 0) {
                splats.setSh1(mapping[index], sh1);
                if (sh2) {
                  splats.setSh2(mapping[index], sh2);
                }
                if (sh3) {
                  splats.setSh3(mapping[index], sh3);
                }
              }
            }
          );
          break;
        }
        case SplatFileType.SPLAT:
          decodeAntiSplat(
            input2.fileBytes,
            (numSplats) => {
            },
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                const index2 = splats.pushSplat();
                splats.setCenter(index2, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(index2, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  index2,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(index2, opacity);
                splats.setColor(index2, r, g, b);
              }
            }
          );
          break;
        case SplatFileType.KSPLAT: {
          let lastIndex = null;
          decodeKsplat(
            input2.fileBytes,
            (numSplats) => {
            },
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                lastIndex = splats.pushSplat();
                splats.setCenter(lastIndex, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(lastIndex, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  lastIndex,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(lastIndex, opacity);
                splats.setColor(lastIndex, r, g, b);
              } else {
                lastIndex = null;
              }
            },
            (index, sh1, sh2, sh3) => {
              if (lastIndex !== null) {
                splats.setSh1(lastIndex, sh1);
                if (sh2) {
                  splats.setSh2(lastIndex, sh2);
                }
                if (sh3) {
                  splats.setSh3(lastIndex, sh3);
                }
              }
            }
          );
          break;
        }
        default:
          throw new Error(\`transcodeSpz not implemented for \${fileType}\`);
      }
    }
    const shDegree = Math.min(
      maxSh ?? 3,
      splats.sh3 ? 3 : splats.sh2 ? 2 : splats.sh1 ? 1 : 0
    );
    const spz = new SpzWriter({
      numSplats: splats.numSplats,
      shDegree,
      fractionalBits,
      flagAntiAlias: true
    });
    for (let i2 = 0; i2 < splats.numSplats; ++i2) {
      const i3 = i2 * 3;
      const i4 = i2 * 4;
      spz.setCenter(
        i2,
        splats.centers[i3],
        splats.centers[i3 + 1],
        splats.centers[i3 + 2]
      );
      spz.setScale(
        i2,
        splats.scales[i3],
        splats.scales[i3 + 1],
        splats.scales[i3 + 2]
      );
      spz.setQuat(
        i2,
        splats.quaternions[i4],
        splats.quaternions[i4 + 1],
        splats.quaternions[i4 + 2],
        splats.quaternions[i4 + 3]
      );
      spz.setAlpha(i2, splats.opacities[i2]);
      spz.setRgb(
        i2,
        splats.colors[i3],
        splats.colors[i3 + 1],
        splats.colors[i3 + 2]
      );
      if (splats.sh1 && shDegree >= 1) {
        spz.setSh(
          i2,
          splats.sh1.slice(i2 * 9, (i2 + 1) * 9),
          shDegree >= 2 && splats.sh2 ? splats.sh2.slice(i2 * 15, (i2 + 1) * 15) : void 0,
          shDegree >= 3 && splats.sh3 ? splats.sh3.slice(i2 * 21, (i2 + 1) * 21) : void 0
        );
      }
    }
    const spzBytes = await spz.finalize();
    return { fileBytes: spzBytes, clippedCount: spz.clippedCount };
  }
  async function onMessage(event) {
    const { name, args, id } = event.data;
    let result = void 0;
    let error = void 0;
    try {
      switch (name) {
        case "unpackPly": {
          const { packedArray, fileBytes, splatEncoding } = args;
          const decoded = await unpackPly({
            packedArray,
            fileBytes,
            splatEncoding
          });
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodeSpz": {
          const { fileBytes, splatEncoding } = args;
          const decoded = await unpackSpz(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodeAntiSplat": {
          const { fileBytes, splatEncoding } = args;
          const decoded = unpackAntiSplat(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray
          };
          break;
        }
        case "decodeKsplat": {
          const { fileBytes, splatEncoding } = args;
          const decoded = unpackKsplat(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodePcSogs": {
          const { fileBytes, extraFiles, splatEncoding } = args;
          const json = JSON.parse(
            new TextDecoder().decode(fileBytes)
          );
          const decoded = await unpackPcSogs(json, extraFiles, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodePcSogsZip": {
          const { fileBytes, splatEncoding } = args;
          const decoded = await unpackPcSogsZip(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "sortSplats": {
          const { totalSplats, readback, ordering } = args;
          result = {
            id,
            readback,
            ...sortSplats({ totalSplats, readback, ordering })
          };
          break;
        }
        case "sortDoubleSplats": {
          const { numSplats, readback, ordering } = args;
          {
            result = {
              id,
              readback,
              ordering,
              activeSplats: sort_splats(numSplats, readback, ordering)
            };
          }
          break;
        }
        case "sort32Splats": {
          const { numSplats, readback, ordering } = args;
          {
            result = {
              id,
              readback,
              ordering,
              activeSplats: sort32_splats(numSplats, readback, ordering)
            };
          }
          break;
        }
        case "transcodeSpz": {
          const input = args;
          const spzBytes = await transcodeSpz(input);
          result = {
            id,
            fileBytes: spzBytes,
            input
          };
          break;
        }
        default: {
          throw new Error(\`Unknown name: \${name}\`);
        }
      }
    } catch (e) {
      error = e;
      console.error(error);
    }
    self.postMessage(
      { id, result, error },
      { transfer: getArrayBuffers(result) }
    );
  }
  async function unpackPly({
    packedArray,
    fileBytes,
    splatEncoding
  }) {
    const ply = new PlyReader({ fileBytes });
    await ply.parseHeader();
    const numSplats = ply.numSplats;
    const extra = {};
    ply.parseSplats(
      (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
        setPackedSplat(
          packedArray,
          index,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
      },
      (index, sh1, sh2, sh3) => {
        if (sh1) {
          if (!extra.sh1) {
            extra.sh1 = new Uint32Array(numSplats * 2);
          }
          encodeSh1Rgb(extra.sh1, index, sh1, splatEncoding);
        }
        if (sh2) {
          if (!extra.sh2) {
            extra.sh2 = new Uint32Array(numSplats * 4);
          }
          encodeSh2Rgb(extra.sh2, index, sh2, splatEncoding);
        }
        if (sh3) {
          if (!extra.sh3) {
            extra.sh3 = new Uint32Array(numSplats * 4);
          }
          encodeSh3Rgb(extra.sh3, index, sh3, splatEncoding);
        }
      }
    );
    return { packedArray, numSplats, extra };
  }
  async function unpackSpz(fileBytes, splatEncoding) {
    const spz = new SpzReader({ fileBytes });
    await spz.parseHeader();
    const numSplats = spz.numSplats;
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    await spz.parseSplats(
      (index, x2, y, z) => {
        setPackedSplatCenter(packedArray, index, x2, y, z);
      },
      (index, alpha) => {
        setPackedSplatOpacity(packedArray, index, alpha);
      },
      (index, r, g, b) => {
        setPackedSplatRgb(packedArray, index, r, g, b, splatEncoding);
      },
      (index, scaleX, scaleY, scaleZ) => {
        setPackedSplatScales(
          packedArray,
          index,
          scaleX,
          scaleY,
          scaleZ,
          splatEncoding
        );
      },
      (index, quatX, quatY, quatZ, quatW) => {
        setPackedSplatQuat(packedArray, index, quatX, quatY, quatZ, quatW);
      },
      (index, sh1, sh2, sh3) => {
        if (sh1) {
          if (!extra.sh1) {
            extra.sh1 = new Uint32Array(numSplats * 2);
          }
          encodeSh1Rgb(extra.sh1, index, sh1, splatEncoding);
        }
        if (sh2) {
          if (!extra.sh2) {
            extra.sh2 = new Uint32Array(numSplats * 4);
          }
          encodeSh2Rgb(extra.sh2, index, sh2, splatEncoding);
        }
        if (sh3) {
          if (!extra.sh3) {
            extra.sh3 = new Uint32Array(numSplats * 4);
          }
          encodeSh3Rgb(extra.sh3, index, sh3, splatEncoding);
        }
      }
    );
    return { packedArray, numSplats, extra };
  }
  const DEPTH_INFINITY_F16 = 31744;
  const DEPTH_SIZE_16 = DEPTH_INFINITY_F16 + 1;
  let depthArray16 = null;
  function sortSplats({
    totalSplats,
    readback,
    ordering
  }) {
    if (!depthArray16) {
      depthArray16 = new Uint32Array(DEPTH_SIZE_16);
    }
    depthArray16.fill(0);
    const readbackUint32 = readback.map((layer) => new Uint32Array(layer.buffer));
    const layerSize = readbackUint32[0].length;
    const numLayers = Math.ceil(totalSplats / layerSize);
    let layerBase = 0;
    for (let layer = 0; layer < numLayers; ++layer) {
      const readbackLayer = readbackUint32[layer];
      const layerSplats = Math.min(readbackLayer.length, totalSplats - layerBase);
      for (let i2 = 0; i2 < layerSplats; ++i2) {
        const pri = readbackLayer[i2] & 32767;
        if (pri < DEPTH_INFINITY_F16) {
          depthArray16[pri] += 1;
        }
      }
      layerBase += layerSplats;
    }
    let activeSplats = 0;
    for (let j = 0; j < DEPTH_SIZE_16; ++j) {
      const nextIndex = activeSplats + depthArray16[j];
      depthArray16[j] = activeSplats;
      activeSplats = nextIndex;
    }
    layerBase = 0;
    for (let layer = 0; layer < numLayers; ++layer) {
      const readbackLayer = readbackUint32[layer];
      const layerSplats = Math.min(readbackLayer.length, totalSplats - layerBase);
      for (let i2 = 0; i2 < layerSplats; ++i2) {
        const pri = readbackLayer[i2] & 32767;
        if (pri < DEPTH_INFINITY_F16) {
          ordering[depthArray16[pri]] = layerBase + i2;
          depthArray16[pri] += 1;
        }
      }
      layerBase += layerSplats;
    }
    if (depthArray16[DEPTH_SIZE_16 - 1] !== activeSplats) {
      throw new Error(
        \`Expected \${activeSplats} active splats but got \${depthArray16[DEPTH_SIZE_16 - 1]}\`
      );
    }
    return { activeSplats, ordering };
  }
  const messageBuffer = [];
  function bufferMessage(event) {
    messageBuffer.push(event);
  }
  async function initialize() {
    self.addEventListener("message", bufferMessage);
    await __wbg_init();
    self.removeEventListener("message", bufferMessage);
    self.addEventListener("message", onMessage);
    for (const event of messageBuffer) {
      onMessage(event);
    }
    messageBuffer.length = 0;
  }
  initialize().catch(console.error);
})();
//# sourceMappingURL=worker-CaMzlx2k.js.map
`,Aa=typeof self<"u"&&self.Blob&&new Blob([ta],{type:"text/javascript;charset=utf-8"});function ki(e){let n;try{if(n=Aa&&(self.URL||self.webkitURL).createObjectURL(Aa),!n)throw"";const t=new Worker(n,{name:e?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(n)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ta),{name:e?.name})}finally{n&&(self.URL||self.webkitURL).revokeObjectURL(n)}}var Ti=class{constructor(){this.messages={},this.messageIdNext=0,this.worker=new ki,this.worker.onmessage=e=>this.onMessage(e)}makeMessageId(){return++this.messageIdNext}makeMessagePromiseId(){const e=this.makeMessageId();return{id:e,promise:new Promise((n,t)=>{this.messages[e]={resolve:n,reject:t}})}}onMessage(e){const{id:n,result:t,error:A}=e.data,a=this.messages[n];a&&(delete this.messages[n],A?a.reject(A):a.resolve(t))}async call(e,n){const{id:t,promise:A}=this.makeMessagePromiseId();return this.worker.postMessage({name:e,args:n,id:t},{transfer:Er(n)}),A}},aa=4,Ze=0,sa=[],ra=[];async function Ri(){const e=sa.shift();if(e)return e;if(Ze<aa){const n=new Ti;return Ze+=1,n}return new Promise(n=>{ra.push(n)})}function Fi(e){if(Ze>aa){Ze-=1;return}const n=ra.shift();if(n){n(e);return}sa.push(e)}async function Kn(e){const n=await Ri();try{return await e(n)}finally{Fi(n)}}var Ni=class extends La{constructor(e){super(e),this.fileLoader=new va(e)}load(e,n,t,A){const a=this.manager.resolveURL((this.path??"")+(e??"")),s=new Headers(this.requestHeader),r=this.withCredentials?"include":"same-origin",i=new Request(a,{headers:s,credentials:r});let o=this.fileType;this.manager.itemStart(a),ia(i,t).then(async c=>{var l;const g=[new ProgressEvent("progress",{lengthComputable:!0,loaded:c.byteLength,total:c.byteLength})];function h(){if(t){const d=g.every(B=>B.lengthComputable||B.loaded===0&&B.total===0),p=g.reduce((B,E)=>B+E.loaded,0),C=g.reduce((B,E)=>B+E.total,0);t(new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:C}))}}const f={},u=[],I=oa(c);if(o==="pcsogs"&&I===void 0)throw new Error("Invalid PC SOGS file");if(I!==void 0){o="pcsogs";for(const d of["means","scales","quats","sh0","shN"]){const p=I[d];if(p)for(const C of p.files){const B=new URL(C,a).toString(),E=g.length;g.push(new ProgressEvent("progress")),this.manager.itemStart(B);const y=ia(new Request(B,{headers:s,credentials:r}),m=>{g[E]=m,h()}).then(m=>{f[C]=m}).catch(m=>{throw this.manager.itemError(B),m}).finally(()=>{this.manager.itemEnd(B)});u.push(y)}}}if(await Promise.all(u),n){const d=((l=this.packedSplats)==null?void 0:l.splatEncoding)??$e,p=await la({input:c,extraFiles:f,fileType:o,pathOrUrl:a,splatEncoding:d});this.packedSplats?(this.packedSplats.initialize(p),n(this.packedSplats)):n(new jn(p))}}).catch(c=>{this.manager.itemError(a),A?.(c)}).finally(()=>{this.manager.itemEnd(a)})}async loadAsync(e,n){return new Promise((t,A)=>{this.load(e,a=>{t(a)},n,A)})}parse(e){return new kt({packedSplats:e})}};async function ia(e,n){const t=await fetch(e);if(!t.ok)throw new Error(`${t.status} "${t.statusText}" fetching URL: ${e.url}`);if(!t.body)throw new Error(`Response body is null for URL: ${e.url}`);const A=t.body.getReader(),a=Number.parseInt(t.headers.get("Content-Length")||"0"),s=Number.isNaN(a)?0:a;let r=0;const i=[];for(;;){const{done:l,value:g}=await A.read();if(l)break;i.push(g),r+=g.length,n&&n(new ProgressEvent("progress",{lengthComputable:s!==0,loaded:r,total:s}))}const o=new Uint8Array(r);let c=0;for(const l of i)o.set(l,c),c+=l.length;return o.buffer}function Gi(e){const n=new DataView(e.buffer);if((n.getUint32(0,!0)&16777215)===7957616)return"ply";if((n.getUint32(0,!0)&16777215)===559903){const t=kr(e,4);return new DataView(t.buffer).getUint32(0,!0)===1347635022?"spz":void 0}if(n.getUint32(0,!0)===67324752)return Li(e)?"pcsogszip":void 0}function Ui(e){const n=e.split(/[?#]/,1)[0],t=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\")),A=n.slice(t+1),a=A.lastIndexOf(".");return a<=0||a===A.length-1?"":A.slice(a+1).toLowerCase()}function Yi(e){const n=Ui(e);if(n==="ply")return"ply";if(n==="spz")return"spz";if(n==="splat")return"splat";if(n==="ksplat")return"ksplat";if(n==="sog")return"pcsogszip"}function oa(e){try{let n;if(typeof e=="string")n=e;else{const a=e instanceof ArrayBuffer?new Uint8Array(e):e;if(a.length>65536)return;n=new TextDecoder().decode(a)}const t=JSON.parse(n);if(!t||typeof t!="object"||Array.isArray(t))return;const A=t.version===2;for(const a of["means","scales","quats","sh0"]){if(!t[a]||typeof t[a]!="object"||Array.isArray(t[a]))return;if(A){if(!t[a].files||(a==="scales"||a==="sh0")&&!t[a].codebook||a==="means"&&(!t[a].mins||!t[a].maxs))return}else if(!t[a].shape||!t[a].files||a!=="quats"&&(!t[a].mins||!t[a].maxs))return}return t}catch{return}}function Li(e){try{const n=e instanceof ArrayBuffer?new Uint8Array(e):e;let t=null;const A=Ps(n,{filter:({name:s})=>s.split(/[\\/]/).pop()==="meta.json"?(t=s,!0):!1});if(!t)return;const a=oa(A[t]);return a?{name:t,json:a}:void 0}catch{return}}async function la({input:e,extraFiles:n,fileType:t,pathOrUrl:A,splatEncoding:a}){const s=e instanceof ArrayBuffer?new Uint8Array(e):e;let r=t;switch(t||(r=Gi(s),!r&&A&&(r=Yi(A))),r){case"ply":{const i=new mi({fileBytes:s});await i.parseHeader();const o=i.numSplats,c=sn(o).maxSplats,l={fileBytes:s,packedArray:new Uint32Array(c*4),splatEncoding:a};return await Kn(async g=>{const{packedArray:h,numSplats:f,extra:u}=await g.call("unpackPly",l);return{packedArray:h,numSplats:f,extra:u}})}case"spz":return await Kn(async i=>{const{packedArray:o,numSplats:c,extra:l}=await i.call("decodeSpz",{fileBytes:s,splatEncoding:a});return{packedArray:o,numSplats:c,extra:l}});case"splat":return await Kn(async i=>{const{packedArray:o,numSplats:c}=await i.call("decodeAntiSplat",{fileBytes:s,splatEncoding:a});return{packedArray:o,numSplats:c}});case"ksplat":return await Kn(async i=>{const{packedArray:o,numSplats:c,extra:l}=await i.call("decodeKsplat",{fileBytes:s,splatEncoding:a});return{packedArray:o,numSplats:c,extra:l}});case"pcsogs":return await Kn(async i=>{const{packedArray:o,numSplats:c,extra:l}=await i.call("decodePcSogs",{fileBytes:s,extraFiles:n,splatEncoding:a});return{packedArray:o,numSplats:c,extra:l}});case"pcsogszip":return await Kn(async i=>{const{packedArray:o,numSplats:c,extra:l}=await i.call("decodePcSogsZip",{fileBytes:s,splatEncoding:a});return{packedArray:o,numSplats:c,extra:l}});default:throw new Error(`Unknown splat file type: ${r}`)}}var zi=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp usampler2D;
precision highp isampler2D;
precision highp sampler2DArray;
precision highp usampler2DArray;
precision highp isampler2DArray;
precision highp sampler3D;
precision highp usampler3D;
precision highp isampler3D;

#include <splatDefines>

uniform uint targetLayer;
uniform int targetBase;
uniform int targetCount;

out uvec4 target;

{{ GLOBALS }}

void produceSplat(int index) {
    {{ STATEMENTS }}
}

void main() {
    int targetIndex = int(targetLayer << SPLAT_TEX_LAYER_BITS) + int(uint(gl_FragCoord.y) << SPLAT_TEX_WIDTH_BITS) + int(gl_FragCoord.x);
    int index = targetIndex - targetBase;

    if ((index >= 0) && (index < targetCount)) {
        produceSplat(index);
    } else {
        target = uvec4(0u, 0u, 0u, 0u);
    }
}`,$e={rgbMin:0,rgbMax:1,lnScaleMin:-12,lnScaleMax:9,sh1Min:-1,sh1Max:1,sh2Min:-1,sh2Max:1,sh3Min:-1,sh3Max:1},xe=class K{constructor(n={}){this.maxSplats=0,this.numSplats=0,this.packedArray=null,this.isInitialized=!1,this.target=null,this.source=null,this.needsUpdate=!0,this.extra={},this.dyno=new Ft({packedSplats:this}),this.dynoRgbMinMaxLnScaleMinMax=new Pe({key:"rgbMinMaxLnScaleMinMax",value:new gn(0,1,-12,9),update:t=>{var A,a,s,r;return t.set(((A=this.splatEncoding)==null?void 0:A.rgbMin)??0,((a=this.splatEncoding)==null?void 0:a.rgbMax)??1,((s=this.splatEncoding)==null?void 0:s.lnScaleMin)??-12,((r=this.splatEncoding)==null?void 0:r.lnScaleMax)??9),t}}),this.dynoSh1MinMax=new mt({key:"sh1MinMax",value:new mn(-1,1),update:t=>{var A,a;return t.set(((A=this.splatEncoding)==null?void 0:A.sh1Min)??-1,((a=this.splatEncoding)==null?void 0:a.sh1Max)??1),t}}),this.dynoSh2MinMax=new mt({key:"sh2MinMax",value:new mn(-1,1),update:t=>{var A,a;return t.set(((A=this.splatEncoding)==null?void 0:A.sh2Min)??-1,((a=this.splatEncoding)==null?void 0:a.sh2Max)??1),t}}),this.dynoSh3MinMax=new mt({key:"sh3MinMax",value:new mn(-1,1),update:t=>{var A,a;return t.set(((A=this.splatEncoding)==null?void 0:A.sh3Min)??-1,((a=this.splatEncoding)==null?void 0:a.sh3Max)??1),t}}),this.initialized=Promise.resolve(this),this.reinitialize(n)}reinitialize(n){this.isInitialized=!1,this.extra={},this.splatEncoding=n.splatEncoding,n.url||n.fileBytes||n.construct?this.initialized=this.asyncInitialize(n).then(()=>(this.isInitialized=!0,this)):(this.initialize(n),this.isInitialized=!0,this.initialized=Promise.resolve(this))}initialize(n){n.packedArray?(this.packedArray=n.packedArray,this.maxSplats=Math.floor(this.packedArray.length/4),this.maxSplats=Math.floor(this.maxSplats/D)*D,this.numSplats=Math.min(this.maxSplats,n.numSplats??Number.POSITIVE_INFINITY)):(this.maxSplats=n.maxSplats??0,this.numSplats=0),this.extra=n.extra??{}}async asyncInitialize(n){const{url:t,fileBytes:A,construct:a}=n;if(t){const s=new Ni;s.packedSplats=this,await s.loadAsync(t)}else if(A){const s=await la({input:A,fileType:n.fileType,pathOrUrl:n.fileName??t,splatEncoding:n.splatEncoding??$e});this.initialize(s)}if(a){const s=a(this);s instanceof Promise&&await s}}dispose(){this.target&&(this.target.dispose(),this.target=null),this.source&&(this.source.dispose(),this.source=null)}ensureSplats(n){const t=n<=this.maxSplats?this.maxSplats:Math.max(n,2*this.maxSplats),A=this.packedArray?this.packedArray.length/4:0;if(!this.packedArray||t>A){this.maxSplats=sn(t).maxSplats;const a=new Uint32Array(this.maxSplats*4);this.packedArray&&a.set(this.packedArray),this.packedArray=a}return this.packedArray}ensureSplatsSh(n,t){let A,a;if(n===0)return this.ensureSplats(t);if(n===1)A=2,a="sh1";else if(n===2)A=4,a="sh2";else if(n===3)A=4,a="sh3";else throw new Error(`Invalid level: ${n}`);let s=this.extra[a]?this.extra[a].length/A:0;const r=t<=s?s:Math.max(t,2*s);if(!this.extra[a]||r>s){s=sn(r).maxSplats;const i=new Uint32Array(s*A);this.extra[a]&&i.set(this.extra[a]),this.extra[a]=i}return this.extra[a]}getSplat(n){if(!this.packedArray||n>=this.numSplats)throw new Error("Invalid index");return UA(this.packedArray,n,this.splatEncoding)}setSplat(n,t,A,a,s,r){GA(this.ensureSplats(n+1),n,t.x,t.y,t.z,A.x,A.y,A.z,a.x,a.y,a.z,a.w,s,r.r,r.g,r.b),this.numSplats=Math.max(this.numSplats,n+1)}pushSplat(n,t,A,a,s){GA(this.ensureSplats(this.numSplats+1),this.numSplats,n.x,n.y,n.z,t.x,t.y,t.z,A.x,A.y,A.z,A.w,a,s.r,s.g,s.b),++this.numSplats}forEachSplat(n){if(!(!this.packedArray||!this.numSplats))for(let t=0;t<this.numSplats;++t){const A=UA(this.packedArray,t,this.splatEncoding);n(t,A.center,A.scales,A.quaternion,A.opacity,A.color)}}ensureGenerate(n){if(this.target&&(n??1)<=this.maxSplats)return!1;this.dispose();const t=sn(n??1),{width:A,height:a,depth:s}=t;return this.maxSplats=t.maxSplats,this.target=new Ot(A,a,s,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,magFilter:be,minFilter:be}),this.target.texture.format=ne,this.target.texture.type=Yn,this.target.texture.internalFormat="RGBA32UI",this.target.scissorTest=!0,!0}generateMapping(n){let t=0;const A=n.map(a=>{const s=t,r=Math.ceil(a/D)*D;return t+=r,{base:s,count:a}});return{maxSplats:t,mapping:A}}getTexture(){return this.target?this.target.texture:this.source||this.packedArray?this.maybeUpdateSource():K.getEmpty()}maybeUpdateSource(){if(!this.packedArray)throw new Error("No packed splats");if(this.needsUpdate||!this.source){if(this.needsUpdate=!1,this.source){const{width:n,height:t,depth:A}=this.source.image;this.maxSplats!==n*t*A&&(this.source.dispose(),this.source=null)}if(this.source)this.packedArray.buffer!==this.source.image.data.buffer&&(this.source.image.data=new Uint8Array(this.packedArray.buffer));else{const{width:n,height:t,depth:A}=sn(this.maxSplats);this.source=new Un(this.packedArray,n,t,A),this.source.format=ne,this.source.type=Yn,this.source.internalFormat="RGBA32UI",this.source.needsUpdate=!0}this.source.needsUpdate=!0}return this.source}static getEmpty(){if(!K.emptySource){const{width:n,height:t,depth:A,maxSplats:a}=sn(1),s=new Uint32Array(a*4);K.emptySource=new Un(s,n,t,A),K.emptySource.format=ne,K.emptySource.type=Yn,K.emptySource.internalFormat="RGBA32UI",K.emptySource.needsUpdate=!0}return K.emptySource}prepareProgramMaterial(n){let t=K.generatorProgram.get(n);if(!t){const a=kn({index:"int"},{output:"uvec4"},({index:s})=>{n.inputs.index=s;const r=n.outputs.gsplat;return{output:ur(r,this.dynoRgbMinMaxLnScaleMinMax)}});K.programTemplate||(K.programTemplate=new LA(zi)),t=new YA({graph:a,inputs:{index:"index"},outputs:{output:"target"},template:K.programTemplate}),Object.assign(t.uniforms,{targetLayer:{value:0},targetBase:{value:0},targetCount:{value:0}}),K.generatorProgram.set(n,t)}const A=t.prepareMaterial();return K.fullScreenQuad.material=A,{program:t,material:A}}saveRenderState(n){return{xrEnabled:n.xr.enabled,autoClear:n.autoClear}}resetRenderState(n,t){n.setRenderTarget(null),n.xr.enabled=t.xrEnabled,n.autoClear=t.autoClear}generate({generator:n,base:t,count:A,renderer:a}){if(!this.target)throw new Error("Target must be initialized with ensureSplats");if(t+A>this.maxSplats)throw new Error("Base + count exceeds maxSplats");const{program:s,material:r}=this.prepareProgramMaterial(n);s.update();const i=this.saveRenderState(a),o=Math.ceil((t+A)/D)*D,c=D*qn;for(r.uniforms.targetBase.value=t,r.uniforms.targetCount.value=A;t<o;){const l=Math.floor(t/c);r.uniforms.targetLayer.value=l;const g=l*c,h=Math.floor((t-g)/D),f=Math.min(qn,Math.ceil((o-g)/D));this.target.scissor.set(0,h,D,f-h),a.setRenderTarget(this.target,l),a.xr.enabled=!1,a.autoClear=!1,K.fullScreenQuad.render(a),t+=D*(f-h)}return this.resetRenderState(a,i),{nextBase:o}}};xe.emptySource=null,xe.programTemplate=null,xe.generatorProgram=new Map,xe.fullScreenQuad=new BA(new De({visible:!1}));var jn=xe,Ft=class extends fn{constructor({packedSplats:e}={}){super({key:"packedSplats",type:qe,globals:()=>[Et],value:{texture:jn.getEmpty(),numSplats:0,rgbMinMaxLnScaleMinMax:new gn(0,1,-12,9)},update:n=>{var t,A,a,s,r,i,o,c,l,g;return n.texture=((t=this.packedSplats)==null?void 0:t.getTexture())??jn.getEmpty(),n.numSplats=((A=this.packedSplats)==null?void 0:A.numSplats)??0,n.rgbMinMaxLnScaleMinMax.set(((s=(a=this.packedSplats)==null?void 0:a.splatEncoding)==null?void 0:s.rgbMin)??0,((i=(r=this.packedSplats)==null?void 0:r.splatEncoding)==null?void 0:i.rgbMax)??1,((c=(o=this.packedSplats)==null?void 0:o.splatEncoding)==null?void 0:c.lnScaleMin)??-12,((g=(l=this.packedSplats)==null?void 0:l.splatEncoding)==null?void 0:g.lnScaleMax)??9),n}}),this.packedSplats=e}},Nt=class extends Ma{constructor(e,n){super(),this.ordering=e,this.setAttribute("position",new Pt(qi,3)),this.setIndex(new Pt(Ji,1)),this._maxInstanceCount=e.length,this.instanceCount=n,this.attribute=new Da(e,1,!1,1),this.attribute.setUsage(za),this.setAttribute("splatIndex",this.attribute)}update(e,n){this.ordering=e,this.attribute.array=e,this.instanceCount=n,this.attribute.addUpdateRange(0,n),this.attribute.needsUpdate=!0}},qi=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),Ji=new Uint16Array([0,1,2,0,2,3]),Gt=class we{constructor(n){if(this.lastTime=null,this.encodeLinear=!1,this.superXY=1,this.display=null,this.sorting=null,this.pending=null,this.sortingCheck=!1,this.readback16=new Uint16Array(0),this.readback32=new Uint32Array(0),this.spark=n.spark,this.camera=n.camera,this.viewToWorld=n.viewToWorld??new N,n.target){const{width:t,height:A,doubleBuffer:a}=n.target,s=Math.max(1,Math.min(4,n.target.superXY??1));if(this.superXY=s,t*s>8192||A*s>8192)throw new Error("Target size too large");this.target=new rt(t*s,A*s,{format:$n,type:ge,colorSpace:Zt}),a&&(this.back=new rt(t*s,A*s,{format:$n,type:ge,colorSpace:Zt})),this.encodeLinear=!0}this.onTextureUpdated=n.onTextureUpdated,this.sortRadial=n.sortRadial??!0,this.sortDistance=n.sortDistance,this.sortCoorient=n.sortCoorient,this.depthBias=n.depthBias,this.sort360=n.sort360,this.sort32=n.sort32,this.stochastic=n.stochastic??!1,this.orderingFreelist=new Qr({allocate:t=>new Uint32Array(t),valid:(t,A)=>t.length===A}),this.autoUpdate=!1,this.setAutoUpdate(n.autoUpdate??!1)}dispose(){var n;this.setAutoUpdate(!1),this.target&&(this.target.dispose(),this.target=void 0),this.back&&(this.back.dispose(),this.back=void 0),this.display&&(this.spark.releaseAccumulator(this.display.accumulator),this.display.geometry.dispose(),this.display=null),(n=this.pending)!=null&&n.accumulator&&(this.spark.releaseAccumulator(this.pending.accumulator),this.pending=null)}setAutoUpdate(n){!this.autoUpdate&&n?this.spark.autoViewpoints.push(this):this.autoUpdate&&!n&&(this.spark.autoViewpoints=this.spark.autoViewpoints.filter(t=>t!==this)),this.autoUpdate=n}async prepare({scene:n,camera:t,viewToWorld:A,update:a,forceOrigin:s}){var r;for(A?this.viewToWorld=A:(this.camera=t??this.camera,this.camera&&(this.camera.updateMatrixWorld(),this.viewToWorld=this.camera.matrixWorld.clone()));a??!0;){const o=s?this.viewToWorld:void 0;if(this.spark.updateInternal({scene:n,originToWorld:o}))break;await new Promise(c=>setTimeout(c,10))}const i=this.spark.active;i!==((r=this.display)==null?void 0:r.accumulator)&&(this.spark.active.refCount+=1),await this.sortUpdate({accumulator:i,viewToWorld:this.viewToWorld})}renderTarget({scene:n,camera:t}){var A;const a=this.back??this.target;if(!a)throw new Error("Must initialize SparkViewpoint with target");if(t=t??this.camera,!t)throw new Error("Must provide camera");if(t instanceof At){const s=new At().copy(t,!1);s.aspect=a.width/a.height,s.updateProjectionMatrix(),t=s}this.viewToWorld=t.matrixWorld.clone();try{this.spark.renderer.setRenderTarget(a),this.spark.prepareViewpoint(this),this.spark.renderer.render(n,t)}finally{this.spark.prepareViewpoint(this.spark.defaultView),this.spark.renderer.setRenderTarget(null)}a!==this.target&&([this.target,this.back]=[this.back,this.target]),(A=this.onTextureUpdated)==null||A.call(this,a.texture)}async readTarget(){if(!this.target)throw new Error("Must initialize SparkViewpoint with target");const{width:n,height:t}=this.target,A=n*t*4;(!this.superPixels||this.superPixels.length<A)&&(this.superPixels=new Uint8Array(A)),await this.spark.renderer.readRenderTargetPixelsAsync(this.target,0,0,n,t,this.superPixels);const{superXY:a}=this;if(a===1)return this.superPixels;const s=n/a,r=t/a,i=s*r*4;(!this.pixels||this.pixels.length<i)&&(this.pixels=new Uint8Array(i));const{superPixels:o,pixels:c}=this,l=a*a;for(let g=0;g<r;g++){const h=g*s;for(let f=0;f<s;f++){const u=f*a;let I=0,d=0,p=0,C=0;for(let E=0;E<a;E++){const y=(g*a+E)*this.target.width;for(let m=0;m<a;m++){const x=(y+u+m)*4;I+=o[x],d+=o[x+1],p+=o[x+2],C+=o[x+3]}}const B=(h+f)*4;c[B]=I/l,c[B+1]=d/l,c[B+2]=p/l,c[B+3]=C/l}}return c}async prepareRenderPixels({scene:n,camera:t,viewToWorld:A,update:a,forceOrigin:s}){return await this.prepare({scene:n,camera:t,viewToWorld:A,update:a,forceOrigin:s}),this.renderTarget({scene:n,camera:t}),this.readTarget()}autoPoll({accumulator:n}){var t,A,a;this.camera&&(this.camera.updateMatrixWorld(),this.viewToWorld=this.camera.matrixWorld.clone());let s=!1,r=!1;if(!this.display)s=!0;else if(n){s=!0;const{mappingVersion:o}=this.display.accumulator;n.mappingVersion===o&&(n.refCount+=1,this.spark.releaseAccumulator(this.display.accumulator),this.display.accumulator=n,this.display.viewToWorld.copy(this.viewToWorld),r=!0,this.spark.viewpoint===this&&this.spark.prepareViewpoint(this))}const i=((t=this.sorting)==null?void 0:t.viewToWorld)??((A=this.display)==null?void 0:A.viewToWorld);i&&!vt({matrix1:this.viewToWorld,matrix2:i,maxDistance:this.sortDistance??.01,minCoorient:this.sortCoorient??this.sortRadial?.99:.999})&&(s=!0),s&&(n&&(n.refCount+=1),(a=this.pending)!=null&&a.accumulator&&this.spark.releaseAccumulator(this.pending.accumulator),this.pending={accumulator:n,viewToWorld:this.viewToWorld,displayed:r},this.driveSort())}async driveSort(){for(var n;;){if(this.sorting||!this.pending)return;const{viewToWorld:t,displayed:A}=this.pending;let a=this.pending.accumulator;if(a||(a=((n=this.display)==null?void 0:n.accumulator)??this.spark.active,a.refCount+=1),this.pending=null,!a)throw new Error("No accumulator to sort");this.sorting={viewToWorld:t},await this.sortUpdate({accumulator:a,viewToWorld:t,displayed:A}),this.sorting=null,this.spark.releaseAccumulator(a)}}async sortUpdate({accumulator:n,viewToWorld:t,displayed:A=!1}){if(this.sortingCheck)throw new Error("Only one sort at a time");this.sortingCheck=!0,n=n??this.spark.active;const{numSplats:a,maxSplats:s}=n.splats;let r=0,i=this.orderingFreelist.alloc(s);if(this.stochastic){r=a;for(let o=0;o<a;++o)i[o]=o}else if(a>0){const{reader:o,doubleSortReader:c,sort32Reader:l,dynoSortRadial:g,dynoOrigin:h,dynoDirection:f,dynoDepthBias:u,dynoSort360:I,dynoSplats:d}=we.makeSorter(),p=this.sort32??!1;let C;if(p)this.readback32=o.ensureBuffer(s,this.readback32),C=this.readback32;else{const _=Math.ceil(s/2);this.readback16=o.ensureBuffer(_,this.readback16),C=this.readback16}const B=n.toWorld.clone().invert(),E=t.clone().premultiply(B);g.value=this.sort360?!0:this.sortRadial,h.value.set(0,0,0).applyMatrix4(E),f.value.set(0,0,-1).applyMatrix4(E).sub(h.value).normalize(),u.value=this.depthBias??1,I.value=this.sort360??!1,d.packedSplats=n.splats;const y=p?l:c,m=p?a:Math.ceil(a/2);await o.renderReadback({renderer:this.spark.renderer,reader:y,count:m,readback:C});const x=await Kn(async _=>{const k=p?"sort32Splats":"sortDoubleSplats";return _.call(k,{maxSplats:s,numSplats:a,readback:C,ordering:i})});p?this.readback32=x.readback:this.readback16=x.readback,i=x.ordering,r=x.activeSplats}this.updateDisplay({accumulator:n,viewToWorld:t,ordering:i,activeSplats:r,displayed:A}),this.sortingCheck=!1}updateDisplay({accumulator:n,viewToWorld:t,ordering:A,activeSplats:a,displayed:s=!1}){if(!this.display)n.refCount+=1,this.display={accumulator:n,viewToWorld:t,geometry:new Nt(A,a)};else{!s&&n!==this.display.accumulator&&(n.refCount+=1,this.spark.releaseAccumulator(this.display.accumulator),this.display.accumulator=n),this.display.viewToWorld=t;const r=this.display.geometry.ordering;r.length===A.length?this.display.geometry.update(A,a):(this.display.geometry.dispose(),this.display.geometry=new Nt(A,a)),this.orderingFreelist.free(r)}this.spark.viewpoint===this&&this.spark.prepareViewpoint(this)}static makeSorter(){if(!we.dynos){const n=new RA({value:!0}),t=new He({value:new Q}),A=new He({value:new Q}),a=new Qe({value:1}),s=new RA({value:!1}),r=new Ft,i=new PA,o=kn({index:"int"},{rgba8:"vec4"},({index:l})=>{if(!l)throw new Error("No index");const g={sortRadial:n,sortOrigin:t,sortDirection:A,sortDepthBias:a,sort360:s},h=me(l,Be("int",2));return{rgba8:HA(Lr(Vr({vectorType:"vec2",x:Ut({gsplat:Ee(r,h),...g}),y:Ut({gsplat:Ee(r,Vn(h,Be("int",1))),...g})})))}}),c=kn({index:"int"},{rgba8:"vec4"},({index:l})=>{if(!l)throw new Error("No index");const g={sortRadial:n,sortOrigin:t,sortDirection:A,sortDepthBias:a,sort360:s};return{rgba8:HA(Yr(Ut({gsplat:Ee(r,l),...g})))}});we.dynos={dynoSortRadial:n,dynoOrigin:t,dynoDirection:A,dynoDepthBias:a,dynoSort360:s,dynoSplats:r,reader:i,doubleSortReader:o,sort32Reader:c}}return we.dynos}};Gt.EMPTY_TEXTURE=new Ra,Gt.dynos=null;var ca=Gt,Hi=nn(`
  float computeSort(Gsplat gsplat, bool sortRadial, vec3 sortOrigin, vec3 sortDirection, float sortDepthBias, bool sort360) {
    if (!isGsplatActive(gsplat.flags)) {
      return INFINITY;
    }

    vec3 center = gsplat.center - sortOrigin;
    float biasedDepth = dot(center, sortDirection) + sortDepthBias;
    if (!sort360 && (biasedDepth <= 0.0)) {
      return INFINITY;
    }

    return sortRadial ? length(center) : biasedDepth;
  }
`);function Ut({gsplat:e,sortRadial:n,sortOrigin:t,sortDirection:A,sortDepthBias:a,sort360:s}){return Ye({inTypes:{gsplat:Y,sortRadial:"bool",sortOrigin:"vec3",sortDirection:"vec3",sortDepthBias:"float",sort360:"bool"},outTypes:{metric:"float"},globals:()=>[bn,Hi],inputs:{gsplat:e,sortRadial:n,sortOrigin:t,sortDirection:A,sortDepthBias:a,sort360:s},statements:({inputs:r,outputs:i})=>{const{gsplat:o,sortRadial:c,sortOrigin:l,sortDirection:g,sortDepthBias:h,sort360:f}=r;return wn(`
        ${i.metric} = computeSort(${o}, ${c}, ${l}, ${g}, ${h}, ${f});
      `)}}).outputs.metric}var Yt=class{constructor(){this.splats=new jn,this.toWorld=new N,this.mapping=[],this.refCount=0,this.splatsVersion=-1,this.mappingVersion=-1}ensureGenerate(e){this.splats.ensureGenerate(e)&&(this.mapping=[])}generateSplats({renderer:e,modifier:n,generators:t,forceUpdate:A,originToWorld:a}){const s=this.mapping.reduce((o,c)=>(o.set(c.node,c),o),new Map);let r=0,i=0;for(const{node:o,generator:c,version:l,base:g,count:h}of t){const f=s.get(o);if((A||c!==f?.generator||l!==f?.version||g!==f?.base||h!==f?.count)&&c&&h>0){const u=n.apply(c);try{this.splats.generate({generator:u,base:g,count:h,renderer:e})}catch(I){o.generator=void 0,o.generatorError=I}r+=1}i=Math.max(i,g+h)}return this.splats.numSplats=i,this.toWorld.copy(a),this.mapping=t,r!==0}hasCorrespondence(e){return this.mapping.length!==e.mapping.length?!1:this.mapping.every(({node:n,base:t,count:A},a)=>{const{node:s,base:r,count:i}=e.mapping[a];return n===s&&t===r&&A===i})}},Pi=`const float LN_SCALE_MIN = -12.0;
const float LN_SCALE_MAX = 9.0;

const uint SPLAT_TEX_WIDTH_BITS = 11u;
const uint SPLAT_TEX_HEIGHT_BITS = 11u;
const uint SPLAT_TEX_DEPTH_BITS = 11u;
const uint SPLAT_TEX_LAYER_BITS = SPLAT_TEX_WIDTH_BITS + SPLAT_TEX_HEIGHT_BITS;

const uint SPLAT_TEX_WIDTH = 1u << SPLAT_TEX_WIDTH_BITS;
const uint SPLAT_TEX_HEIGHT = 1u << SPLAT_TEX_HEIGHT_BITS;
const uint SPLAT_TEX_DEPTH = 1u << SPLAT_TEX_DEPTH_BITS;

const uint SPLAT_TEX_WIDTH_MASK = SPLAT_TEX_WIDTH - 1u;
const uint SPLAT_TEX_HEIGHT_MASK = SPLAT_TEX_HEIGHT - 1u;
const uint SPLAT_TEX_DEPTH_MASK = SPLAT_TEX_DEPTH - 1u;

const uint F16_INF = 0x7c00u;
const float PI = 3.1415926535897932384626433832795;

const float INFINITY = 1.0 / 0.0;
const float NEG_INFINITY = -INFINITY;

float sqr(float x) {
    return x * x;
}

float pow4(float x) {
    float x2 = x * x;
    return x2 * x2;
}

float pow8(float x) {
    float x4 = pow4(x);
    return x4 * x4;
}

vec3 srgbToLinear(vec3 rgb) {
    return pow(rgb, vec3(2.2));
}

vec3 linearToSrgb(vec3 rgb) {
    return pow(rgb, vec3(1.0 / 2.2));
}

uint encodeQuatOctXy88R8(vec4 q) {
    
    if (q.w < 0.0) {
        q = -q;
    }
    
    float theta = 2.0 * acos(q.w);
    float halfTheta = theta * 0.5;
    float s = sin(halfTheta);
    
    vec3 axis = (abs(s) < 1e-6) ? vec3(1.0, 0.0, 0.0) : q.xyz / s;
    
    
    
    float sum = abs(axis.x) + abs(axis.y) + abs(axis.z);
    vec2 p = vec2(axis.x, axis.y) / sum;
    
    if (axis.z < 0.0) {
        float oldPx = p.x;
        p.x = (1.0 - abs(p.y)) * (p.x >= 0.0 ? 1.0 : -1.0);
        p.y = (1.0 - abs(oldPx)) * (p.y >= 0.0 ? 1.0 : -1.0);
    }
    
    float u_f = p.x * 0.5 + 0.5;
    float v_f = p.y * 0.5 + 0.5;
    
    uint quantU = uint(clamp(round(u_f * 255.0), 0.0, 255.0));
    uint quantV = uint(clamp(round(v_f * 255.0), 0.0, 255.0));
    
    
    
    uint angleInt = uint(clamp(round((theta / 3.14159265359) * 255.0), 0.0, 255.0));
    
    
    return (angleInt << 16u) | (quantV << 8u) | quantU;
}

vec4 decodeQuatOctXy88R8(uint encoded) {
    
    uint quantU = encoded & uint(0xFFu);               
    uint quantV = (encoded >> 8u) & uint(0xFFu);         
    uint angleInt = encoded >> 16u;                      

    
    float u_f = float(quantU) / 255.0;
    float v_f = float(quantV) / 255.0;
    vec2 f = vec2(u_f * 2.0 - 1.0, v_f * 2.0 - 1.0);

    vec3 axis = vec3(f.xy, 1.0 - abs(f.x) - abs(f.y));
    float t = max(-axis.z, 0.0);
    axis.x += (axis.x >= 0.0) ? -t : t;
    axis.y += (axis.y >= 0.0) ? -t : t;
    axis = normalize(axis);
    
    
    float theta = (float(angleInt) / 255.0) * 3.14159265359;
    float halfTheta = theta * 0.5;
    float s = sin(halfTheta);
    float w = cos(halfTheta);
    
    return vec4(axis * s, w);
}

    

    

    

    

    

    

    

    

    

    

uvec4 packSplatEncoding(
    vec3 center, vec3 scales, vec4 quaternion, vec4 rgba, vec4 rgbMinMaxLnScaleMinMax
) {
    float rgbMin = rgbMinMaxLnScaleMinMax.x;
    float rgbMax = rgbMinMaxLnScaleMinMax.y;
    vec3 encRgb = (rgba.rgb - vec3(rgbMin)) / (rgbMax - rgbMin);
    uvec4 uRgba = uvec4(round(clamp(vec4(encRgb, rgba.a) * 255.0, 0.0, 255.0)));

    uint uQuat = encodeQuatOctXy88R8(quaternion);
    
    
    uvec3 uQuat3 = uvec3(uQuat & 0xffu, (uQuat >> 8u) & 0xffu, (uQuat >> 16u) & 0xffu);

    
    float lnScaleMin = rgbMinMaxLnScaleMinMax.z;
    float lnScaleMax = rgbMinMaxLnScaleMinMax.w;
    float lnScaleScale = 254.0 / (lnScaleMax - lnScaleMin);
    uvec3 uScales = uvec3(
        (scales.x == 0.0) ? 0u : uint(round(clamp((log(scales.x) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u,
        (scales.y == 0.0) ? 0u : uint(round(clamp((log(scales.y) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u,
        (scales.z == 0.0) ? 0u : uint(round(clamp((log(scales.z) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u
    );

    
    uint word0 = uRgba.r | (uRgba.g << 8u) | (uRgba.b << 16u) | (uRgba.a << 24u);
    uint word1 = packHalf2x16(center.xy);
    uint word2 = packHalf2x16(vec2(center.z, 0.0)) | (uQuat3.x << 16u) | (uQuat3.y << 24u);
    uint word3 = uScales.x | (uScales.y << 8u) | (uScales.z << 16u) | (uQuat3.z << 24u);
    return uvec4(word0, word1, word2, word3);
}

uvec4 packSplat(vec3 center, vec3 scales, vec4 quaternion, vec4 rgba) {
    return packSplatEncoding(center, scales, quaternion, rgba, vec4(0.0, 1.0, LN_SCALE_MIN, LN_SCALE_MAX));
}

void unpackSplatEncoding(uvec4 packed, out vec3 center, out vec3 scales, out vec4 quaternion, out vec4 rgba, vec4 rgbMinMaxLnScaleMinMax) {
    uint word0 = packed.x, word1 = packed.y, word2 = packed.z, word3 = packed.w;

    uvec4 uRgba = uvec4(word0 & 0xffu, (word0 >> 8u) & 0xffu, (word0 >> 16u) & 0xffu, (word0 >> 24u) & 0xffu);
    float rgbMin = rgbMinMaxLnScaleMinMax.x;
    float rgbMax = rgbMinMaxLnScaleMinMax.y;
    rgba = (vec4(uRgba) / 255.0);
    rgba.rgb = rgba.rgb * (rgbMax - rgbMin) + rgbMin;

    center = vec4(
        unpackHalf2x16(word1),
        unpackHalf2x16(word2 & 0xffffu)
    ).xyz;

    uvec3 uScales = uvec3(word3 & 0xffu, (word3 >> 8u) & 0xffu, (word3 >> 16u) & 0xffu);
    float lnScaleMin = rgbMinMaxLnScaleMinMax.z;
    float lnScaleMax = rgbMinMaxLnScaleMinMax.w;
    float lnScaleScale = (lnScaleMax - lnScaleMin) / 254.0;
    scales = vec3(
        (uScales.x == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.x - 1u) * lnScaleScale),
        (uScales.y == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.y - 1u) * lnScaleScale),
        (uScales.z == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.z - 1u) * lnScaleScale)
    );

    uint uQuat = ((word2 >> 16u) & 0xFFFFu) | ((word3 >> 8u) & 0xFF0000u);
    quaternion = decodeQuatOctXy88R8(uQuat);
    
    
}

void unpackSplat(uvec4 packed, out vec3 center, out vec3 scales, out vec4 quaternion, out vec4 rgba) {
    unpackSplatEncoding(packed, center, scales, quaternion, rgba, vec4(0.0, 1.0, LN_SCALE_MIN, LN_SCALE_MAX));
}

vec3 quatVec(vec4 q, vec3 v) {
    
    vec3 t = 2.0 * cross(q.xyz, v);
    return v + q.w * t + cross(q.xyz, t);
}

vec4 quatQuat(vec4 q1, vec4 q2) {
    return vec4(
        q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y,
        q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x,
        q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w,
        q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z
    );
}

mat3 scaleQuaternionToMatrix(vec3 s, vec4 q) {
    
    return mat3(
        s.x * (1.0 - 2.0 * (q.y * q.y + q.z * q.z)),
        s.x * (2.0 * (q.x * q.y + q.w * q.z)),
        s.x * (2.0 * (q.x * q.z - q.w * q.y)),
        s.y * (2.0 * (q.x * q.y - q.w * q.z)),
        s.y * (1.0 - 2.0 * (q.x * q.x + q.z * q.z)),
        s.y * (2.0 * (q.y * q.z + q.w * q.x)),
        s.z * (2.0 * (q.x * q.z + q.w * q.y)),
        s.z * (2.0 * (q.y * q.z - q.w * q.x)),
        s.z * (1.0 - 2.0 * (q.x * q.x + q.y * q.y))
    );
}

vec4 slerp(vec4 q1, vec4 q2, float t) {
    
    float cosHalfTheta = dot(q1, q2);

    
    if (abs(cosHalfTheta) >= 0.999) {
        return q1;
    }
    
    
    
    if (cosHalfTheta < 0.0) {
        q2 = -q2;
        cosHalfTheta = -cosHalfTheta;
    }

    
    float halfTheta = acos(cosHalfTheta);
    float sinHalfTheta = sqrt(1.0 - cosHalfTheta * cosHalfTheta);

    
    float ratioA = sin((1.0 - t) * halfTheta) / sinHalfTheta;
    float ratioB = sin(t * halfTheta) / sinHalfTheta;

    
    return q1 * ratioA + q2 * ratioB;
}

ivec3 splatTexCoord(int index) {
    uint x = uint(index) & SPLAT_TEX_WIDTH_MASK;
    uint y = (uint(index) >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK;
    uint z = uint(index) >> SPLAT_TEX_LAYER_BITS;
    return ivec3(x, y, z);
}`,Vi=`precision highp float;
precision highp int;

#include <splatDefines>
#include <logdepthbuf_pars_fragment>

uniform float near;
uniform float far;
uniform bool encodeLinear;
uniform float time;
uniform bool debugFlag;
uniform float maxStdDev;
uniform float minAlpha;
uniform bool stochastic;
uniform bool disableFalloff;
uniform float falloff;

uniform bool splatTexEnable;
uniform sampler3D splatTexture;
uniform mat2 splatTexMul;
uniform vec2 splatTexAdd;
uniform float splatTexNear;
uniform float splatTexFar;
uniform float splatTexMid;

out vec4 fragColor;

in vec4 vRgba;
in vec2 vSplatUv;
in vec3 vNdc;
flat in uint vSplatIndex;

void main() {
    vec4 rgba = vRgba;

    float z = dot(vSplatUv, vSplatUv);
    if (!splatTexEnable) {
        if (z > (maxStdDev * maxStdDev)) {
            discard;
        }
    } else {
        vec2 uv = splatTexMul * vSplatUv + splatTexAdd;
        float ndcZ = vNdc.z;
        float depth = (2.0 * near * far) / (far + near - ndcZ * (far - near));
        float clampedFar = max(splatTexFar, splatTexNear);
        float clampedDepth = clamp(depth, splatTexNear, clampedFar);
        float logDepth = log2(clampedDepth + 1.0);
        float logNear = log2(splatTexNear + 1.0);
        float logFar = log2(clampedFar + 1.0);

        float texZ;
        if (splatTexMid > 0.0) {
            float clampedMid = clamp(splatTexMid, splatTexNear, clampedFar);
            float logMid = log2(clampedMid + 1.0);
            texZ = (clampedDepth <= clampedMid) ?
                (0.5 * ((logDepth - logNear) / (logMid - logNear))) :
                (0.5 * ((logDepth - logMid) / (logFar - logMid)) + 0.5);
        } else {
            texZ = (logDepth - logNear) / (logFar - logNear);
        }

        vec4 modulate = texture(splatTexture, vec3(uv, 1.0 - texZ));
        rgba *= modulate;
    }

    rgba.a *= mix(1.0, exp(-0.5 * z), falloff);

    if (rgba.a < minAlpha) {
        discard;
    }
    if (encodeLinear) {
        rgba.rgb = srgbToLinear(rgba.rgb);
    }

    if (stochastic) {
        const bool STEADY = false;
        uint uTime = STEADY ? 0u : floatBitsToUint(time);
        uvec2 coord = uvec2(gl_FragCoord.xy);
        uint state = uTime + 0x9e3779b9u * coord.x + 0x85ebca6bu * coord.y + 0xc2b2ae35u * uint(vSplatIndex);
        state = state * 747796405u + 2891336453u;
        uint hash = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
        hash = (hash >> 22u) ^ hash;
        float rand = float(hash) / 4294967296.0;
        if (rand < rgba.a) {
            fragColor = vec4(rgba.rgb, 1.0);
        } else {
            discard;
        }
    } else {
        #ifdef PREMULTIPLIED_ALPHA
            fragColor = vec4(rgba.rgb * rgba.a, rgba.a);
        #else
            fragColor = rgba;
        #endif
    }
    #include <logdepthbuf_fragment>
}`,Ki=`precision highp float;
precision highp int;
precision highp usampler2DArray;

#include <splatDefines>
#include <logdepthbuf_pars_vertex>

attribute uint splatIndex;

out vec4 vRgba;
out vec2 vSplatUv;
out vec3 vNdc;
flat out uint vSplatIndex;

uniform vec2 renderSize;
uniform uint numSplats;
uniform vec4 renderToViewQuat;
uniform vec3 renderToViewPos;
uniform float maxStdDev;
uniform float minPixelRadius;
uniform float maxPixelRadius;
uniform float time;
uniform float deltaTime;
uniform bool debugFlag;
uniform float minAlpha;
uniform bool stochastic;
uniform bool enable2DGS;
uniform float blurAmount;
uniform float preBlurAmount;
uniform float focalDistance;
uniform float apertureAngle;
uniform float clipXY;
uniform float focalAdjustment;

uniform usampler2DArray packedSplats;
uniform vec4 rgbMinMaxLnScaleMinMax;

#ifdef USE_LOGDEPTHBUF
    bool isPerspectiveMatrix( mat4 m ) {
      return m[ 2 ][ 3 ] == - 1.0;
    }
#endif

void main() {
    
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);

    if (uint(gl_InstanceID) >= numSplats) {
        return;
    }

    ivec3 texCoord;
    if (stochastic) {
        texCoord = ivec3(
            uint(gl_InstanceID) & SPLAT_TEX_WIDTH_MASK,
            (uint(gl_InstanceID) >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK,
            (uint(gl_InstanceID) >> SPLAT_TEX_LAYER_BITS)
        );
    } else {
        if (splatIndex == 0xffffffffu) {
            
            return;
        }
        texCoord = ivec3(
            splatIndex & SPLAT_TEX_WIDTH_MASK,
            (splatIndex >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK,
            splatIndex >> SPLAT_TEX_LAYER_BITS
        );
    }
    uvec4 packed = texelFetch(packedSplats, texCoord, 0);

    vec3 center, scales;
    vec4 quaternion, rgba;
    unpackSplatEncoding(packed, center, scales, quaternion, rgba, rgbMinMaxLnScaleMinMax);

    if (rgba.a < minAlpha) {
        return;
    }
    bvec3 zeroScales = equal(scales, vec3(0.0));
    if (all(zeroScales)) {
        return;
    }

    
    vec3 viewCenter = quatVec(renderToViewQuat, center) + renderToViewPos;

    
    if (viewCenter.z >= 0.0) {
        return;
    }

    
    vec4 clipCenter = projectionMatrix * vec4(viewCenter, 1.0);

    
    if (abs(clipCenter.z) >= clipCenter.w) {
        return;
    }

    
    float clip = clipXY * clipCenter.w;
    if (abs(clipCenter.x) > clip || abs(clipCenter.y) > clip) {
        return;
    }

    
    vSplatIndex = splatIndex;

    
    vec4 viewQuaternion = quatQuat(renderToViewQuat, quaternion);

    if (enable2DGS && any(zeroScales)) {
        vRgba = rgba;
        vSplatUv = position.xy * maxStdDev;

        vec3 offset;
        if (zeroScales.z) {
            offset = vec3(vSplatUv.xy * scales.xy, 0.0);
        } else if (zeroScales.y) {
            offset = vec3(vSplatUv.x * scales.x, 0.0, vSplatUv.y * scales.z);
        } else {
            offset = vec3(0.0, vSplatUv.xy * scales.yz);
        }

        vec3 viewPos = viewCenter + quatVec(viewQuaternion, offset);
        gl_Position = projectionMatrix * vec4(viewPos, 1.0);
        vNdc = gl_Position.xyz / gl_Position.w;
        return;
    }

    
    vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

    
    mat3 RS = scaleQuaternionToMatrix(scales, viewQuaternion);
    mat3 cov3D = RS * transpose(RS);

    
    vec2 scaledRenderSize = renderSize * focalAdjustment;
    vec2 focal = 0.5 * scaledRenderSize * vec2(projectionMatrix[0][0], projectionMatrix[1][1]);

    mat3 J;
    if(isOrthographic) {
        J = mat3(
            focal.x, 0.0, 0.0,
            0.0, focal.y, 0.0,
            0.0, 0.0, 0.0
        );
    } else {
        float invZ = 1.0 / viewCenter.z;
        vec2 J1 = focal * invZ;
        vec2 J2 = -(J1 * viewCenter.xy) * invZ;
        J = mat3(
            J1.x, 0.0, J2.x,
            0.0, J1.y, J2.y,
            0.0, 0.0, 0.0
        );
    }

    
    
    
    
    
    
    
    mat3 cov2D = transpose(J) * cov3D * J;
    float a = cov2D[0][0];
    float d = cov2D[1][1];
    float b = cov2D[0][1];

    
    a += preBlurAmount;
    d += preBlurAmount;

    float fullBlurAmount = blurAmount;
    if ((focalDistance > 0.0) && (apertureAngle > 0.0)) {
        float focusRadius = maxPixelRadius;
        if (viewCenter.z < 0.0) {
            float focusBlur = abs((-viewCenter.z - focalDistance) / viewCenter.z);
            float apertureRadius = focal.x * tan(0.5 * apertureAngle);
            focusRadius = focusBlur * apertureRadius;
        }
        fullBlurAmount = clamp(sqr(focusRadius), blurAmount, sqr(maxPixelRadius));
    }

    
    float detOrig = a * d - b * b;
    a += fullBlurAmount;
    d += fullBlurAmount;
    float det = a * d - b * b;

    
    float blurAdjust = sqrt(max(0.0, detOrig / det));
    rgba.a *= blurAdjust;
    if (rgba.a < minAlpha) {
        return;
    }

    
    float eigenAvg = 0.5 * (a + d);
    float eigenDelta = sqrt(max(0.0, eigenAvg * eigenAvg - det));
    float eigen1 = eigenAvg + eigenDelta;
    float eigen2 = eigenAvg - eigenDelta;

    vec2 eigenVec1 = normalize(vec2((abs(b) < 0.001) ? 1.0 : b, eigen1 - a));
    vec2 eigenVec2 = vec2(eigenVec1.y, -eigenVec1.x);

    float scale1 = min(maxPixelRadius, maxStdDev * sqrt(eigen1));
    float scale2 = min(maxPixelRadius, maxStdDev * sqrt(eigen2));
    if (scale1 < minPixelRadius && scale2 < minPixelRadius) {
        return;
    }

    
    vec2 pixelOffset = position.x * eigenVec1 * scale1 + position.y * eigenVec2 * scale2;
    vec2 ndcOffset = (2.0 / scaledRenderSize) * pixelOffset;
    vec3 ndc = vec3(ndcCenter.xy + ndcOffset, ndcCenter.z);

    vRgba = rgba;
    vSplatUv = position.xy * maxStdDev;
    vNdc = ndc;
    gl_Position = vec4(ndc.xy * clipCenter.w, clipCenter.zw);
    #include <logdepthbuf_vertex>
}`,Lt=null;function ji(){return Lt||(ja.splatDefines=Pi,Lt={splatVertex:Ki,splatFragment:Vi}),Lt}var ga=5,nt=class j extends ee{constructor(n){const t=j.makeUniforms(),A=ji(),a=n.premultipliedAlpha??!0,s=new Se({glslVersion:Wt,vertexShader:A.splatVertex,fragmentShader:A.splatFragment,uniforms:t,premultipliedAlpha:a,transparent:!0,depthTest:!0,depthWrite:!1,side:2});super(ua,s),this.splatTexture=null,this.autoViewpoints=[],this.rotateToAccumulator=new Pe({value:new Z}),this.translateToAccumulator=new He({value:new Q}),this.lastFrame=-1,this.lastUpdateTime=null,this.defaultCameras=[],this.lastStochastic=null,this.pendingUpdate={scene:null,originToWorld:new N,timeoutId:-1},this.envViewpoint=null,this.frustumCulled=!1,this.renderer=n.renderer,this.material=s,this.uniforms=t;const r=kn({gsplat:Y},{gsplat:Y},({gsplat:i})=>{if(!i)throw new Error("gsplat not defined");return i=kA(i,{rotate:this.rotateToAccumulator,translate:this.translateToAccumulator}),{gsplat:i}});this.modifier=new hi(r),this.premultipliedAlpha=a,this.autoUpdate=n.autoUpdate??!0,this.preUpdate=n.preUpdate??!1,this.needsUpdate=!1,this.originDistance=n.originDistance??1,this.maxStdDev=n.maxStdDev??Math.sqrt(8),this.minPixelRadius=n.minPixelRadius??0,this.maxPixelRadius=n.maxPixelRadius??512,this.minAlpha=n.minAlpha??.5*(1/255),this.enable2DGS=n.enable2DGS??!1,this.preBlurAmount=n.preBlurAmount??0,this.blurAmount=n.blurAmount??.3,this.focalDistance=n.focalDistance??0,this.apertureAngle=n.apertureAngle??0,this.falloff=n.falloff??1,this.clipXY=n.clipXY??1.4,this.focalAdjustment=n.focalAdjustment??1,this.splatEncoding=n.splatEncoding??{...$e},this.active=new Yt,this.active.refCount=1,this.accumulatorCount=1,this.freeAccumulators=[];for(let i=0;i<1;++i)this.freeAccumulators.push(new Yt),this.accumulatorCount+=1;this.defaultView=new ca({...n.view,autoUpdate:!0,spark:this}),this.viewpoint=this.defaultView,this.prepareViewpoint(this.viewpoint),this.clock=n.clock?xr(n.clock):new Vt}static makeUniforms(){return{renderSize:{value:new mn},near:{value:.1},far:{value:1e3},numSplats:{value:0},renderToViewQuat:{value:new Z},renderToViewPos:{value:new Q},maxStdDev:{value:1},minPixelRadius:{value:0},maxPixelRadius:{value:512},minAlpha:{value:.5*(1/255)},stochastic:{value:!1},enable2DGS:{value:!1},preBlurAmount:{value:0},blurAmount:{value:.3},focalDistance:{value:0},apertureAngle:{value:0},falloff:{value:1},clipXY:{value:1.4},focalAdjustment:{value:1},splatTexEnable:{value:!1},splatTexture:{type:"t",value:j.EMPTY_SPLAT_TEXTURE},splatTexMul:{value:new jt},splatTexAdd:{value:new mn},splatTexNear:{value:.1},splatTexFar:{value:1e3},splatTexMid:{value:0},packedSplats:{type:"t",value:jn.getEmpty()},rgbMinMaxLnScaleMinMax:{value:new gn},time:{value:0},deltaTime:{value:0},encodeLinear:{value:!1},debugFlag:{value:!1}}}canAllocAccumulator(){return this.freeAccumulators.length>0||this.accumulatorCount<ga}maybeAllocAccumulator(){let n=this.freeAccumulators.pop();if(n===void 0){if(this.accumulatorCount>=ga)return null;n=new Yt,this.accumulatorCount+=1}return n.refCount=1,n}releaseAccumulator(n){n.refCount-=1,n.refCount===0&&this.freeAccumulators.push(n)}newViewpoint(n){return new ca({...n,spark:this})}onBeforeRender(n,t,A){var a,s;const r=this.time??this.clock.getElapsedTime(),i=r-(this.viewpoint.lastTime??r);this.viewpoint.lastTime=r;const o=n.info.render.frame,c=o!==this.lastFrame;this.lastFrame=o;const l=this.viewpoint;if(l===this.defaultView){if(c)if(!n.xr.isPresenting)this.defaultView.viewToWorld=A.matrixWorld.clone(),this.defaultCameras=[this.defaultView.viewToWorld];else{const u=n.xr.getCamera().cameras;this.defaultCameras=u.map(I=>I.matrixWorld),this.defaultView.viewToWorld=Oi(this.defaultCameras)??new N}this.autoUpdate&&this.update({scene:t,viewToWorld:this.defaultView.viewToWorld})}if(c&&(this.material.premultipliedAlpha!==this.premultipliedAlpha&&(this.material.premultipliedAlpha=this.premultipliedAlpha,this.material.needsUpdate=!0),this.uniforms.time.value=r,this.uniforms.deltaTime.value=i,this.uniforms.debugFlag.value=performance.now()/1e3%2<1,l.display&&l.stochastic&&(this.geometry.instanceCount=this.uniforms.numSplats.value)),l.target)this.uniforms.renderSize.value.set(l.target.width,l.target.height);else{const u=n.getDrawingBufferSize(this.uniforms.renderSize.value);if(u.x===1&&u.y===1){const I=(a=n.xr.getSession())==null?void 0:a.renderState.baseLayer;I&&(u.x=I.framebufferWidth,u.y=I.framebufferHeight)}}const g=A;if(this.uniforms.near.value=g.near,this.uniforms.far.value=g.far,this.uniforms.encodeLinear.value=l.encodeLinear,this.uniforms.maxStdDev.value=this.maxStdDev,this.uniforms.minPixelRadius.value=this.minPixelRadius,this.uniforms.maxPixelRadius.value=this.maxPixelRadius,this.uniforms.minAlpha.value=this.minAlpha,this.uniforms.stochastic.value=l.stochastic,this.uniforms.enable2DGS.value=this.enable2DGS,this.uniforms.preBlurAmount.value=this.preBlurAmount,this.uniforms.blurAmount.value=this.blurAmount,this.uniforms.focalDistance.value=this.focalDistance,this.uniforms.apertureAngle.value=this.apertureAngle,this.uniforms.falloff.value=this.falloff,this.uniforms.clipXY.value=this.clipXY,this.uniforms.focalAdjustment.value=this.focalAdjustment,this.lastStochastic!==!l.stochastic&&(this.lastStochastic=!l.stochastic,this.material.transparent=!l.stochastic,this.material.depthWrite=l.stochastic,this.material.needsUpdate=!0),this.splatTexture){const{enable:u,texture:I,multiply:d,add:p,near:C,far:B,mid:E}=this.splatTexture;u&&I?(this.uniforms.splatTexEnable.value=!0,this.uniforms.splatTexture.value=I,d?this.uniforms.splatTexMul.value.fromArray(d.elements):this.uniforms.splatTexMul.value.set(.5/this.maxStdDev,0,0,.5/this.maxStdDev),this.uniforms.splatTexAdd.value.set(p?.x??.5,p?.y??.5),this.uniforms.splatTexNear.value=C??this.uniforms.near.value,this.uniforms.splatTexFar.value=B??this.uniforms.far.value,this.uniforms.splatTexMid.value=E??0):(this.uniforms.splatTexEnable.value=!1,this.uniforms.splatTexture.value=j.EMPTY_SPLAT_TEXTURE)}else this.uniforms.splatTexEnable.value=!1,this.uniforms.splatTexture.value=j.EMPTY_SPLAT_TEXTURE;const h=((s=l.display)==null?void 0:s.accumulator.toWorld)??new N,f=A.matrixWorld.clone().invert();h.clone().premultiply(f).decompose(this.uniforms.renderToViewPos.value,this.uniforms.renderToViewQuat.value,new Q)}prepareViewpoint(n){var t,A,a,s;if(this.viewpoint=n??this.viewpoint,this.viewpoint.display){const{accumulator:r,geometry:i}=this.viewpoint.display;this.uniforms.numSplats.value=r.splats.numSplats,this.uniforms.packedSplats.value=r.splats.getTexture(),this.uniforms.rgbMinMaxLnScaleMinMax.value.set(((t=r.splats.splatEncoding)==null?void 0:t.rgbMin)??0,((A=r.splats.splatEncoding)==null?void 0:A.rgbMax)??1,((a=r.splats.splatEncoding)==null?void 0:a.lnScaleMin)??-12,((s=r.splats.splatEncoding)==null?void 0:s.lnScaleMax)??9),this.geometry=i,this.material.transparent=!this.viewpoint.stochastic,this.material.depthWrite=this.viewpoint.stochastic,this.material.needsUpdate=!0}else this.uniforms.numSplats.value=0,this.uniforms.packedSplats.value=jn.getEmpty(),this.geometry=ua}update({scene:n,viewToWorld:t}){const A=this.matrixWorld;this.preUpdate?this.updateInternal({scene:n,originToWorld:A.clone(),viewToWorld:t}):(this.pendingUpdate.scene=n,this.pendingUpdate.originToWorld.copy(A),this.pendingUpdate.timeoutId===-1&&(this.pendingUpdate.timeoutId=setTimeout(()=>{const{scene:a,originToWorld:s}=this.pendingUpdate;this.pendingUpdate.scene=null,this.pendingUpdate.timeoutId=-1,this.updateInternal({scene:a,originToWorld:s,viewToWorld:t})&&this.renderer.getContext().flush()},1)))}updateInternal({scene:n,originToWorld:t,viewToWorld:A}){var a;if(!this.canAllocAccumulator())return!1;t||(t=this.active.toWorld),A=A??t.clone();const s=this.time??this.clock.getElapsedTime(),r=s-(this.lastUpdateTime??s);this.lastUpdateTime=s;const i=this.active.mapping.reduce((I,d)=>(I.set(d.node,d),I),new Map),{generators:o,visibleGenerators:c,globalEdits:l}=this.compileScene(n);for(const I of o)(a=I.frameUpdate)==null||a.call(I,{object:I,time:s,deltaTime:r,viewToWorld:A,globalEdits:l});const g=new Set(c.map(I=>I.uuid));for(const I of o){const d=i.get(I),p=I.generator&&g.has(I.uuid)?I.numSplats:0;(this.needsUpdate||I.generator!==d?.generator||p!==d?.count)&&I.updateVersion()}const h=!vt({matrix1:t,matrix2:this.active.toWorld,maxDistance:this.originDistance}),f=this.needsUpdate||h||o.length!==i.size||o.some(I=>{var d;return I.version!==((d=i.get(I))==null?void 0:d.version)});this.needsUpdate=!1;let u=null;if(f){if(u=this.maybeAllocAccumulator(),!u)throw new Error("Unreachable");const I=!vt({matrix1:t,matrix2:u.toWorld,maxDistance:1e-5,minCoorient:.99999}),d=c.map((m,x)=>{const _=i.get(m);return _?[m.version-_.version,_.base,m]:[Number.POSITIVE_INFINITY,m.version,m]}).sort((m,x)=>m[0]!==x[0]?m[0]-x[0]:m[1]-x[1]).map(([m,x,_])=>_),p=d.map(m=>m.numSplats),{maxSplats:C,mapping:B}=u.splats.generateMapping(p),E=d.map((m,x)=>{const{base:_,count:k}=B[x];return{node:m,generator:m.generator,version:m.version,base:_,count:k}});t.clone().invert().decompose(this.translateToAccumulator.value,this.rotateToAccumulator.value,new Q),u.ensureGenerate(C),u.splats.splatEncoding={...this.splatEncoding},u.generateSplats({renderer:this.renderer,modifier:this.modifier,generators:E,forceUpdate:I,originToWorld:t}),u.splatsVersion=this.active.splatsVersion+1;const y=u.hasCorrespondence(this.active);u.mappingVersion=this.active.mappingVersion+(y?0:1),this.releaseAccumulator(this.active),this.active=u,this.prepareViewpoint()}return setTimeout(()=>{for(const I of this.autoViewpoints)I.autoPoll({accumulator:u??void 0})},1),!0}compileScene(n){const t=[];n.traverse(s=>{s instanceof Mt&&t.push(s)});const A=[];n.traverseVisible(s=>{s instanceof Mt&&A.push(s)});const a=new Set;return n.traverseVisible(s=>{if(s instanceof OA){let r=s.parent;for(;r!=null&&!(r instanceof kt);)r=r.parent;r==null&&a.add(s)}}),{generators:t,visibleGenerators:A,globalEdits:Array.from(a)}}async renderEnvMap({renderer:n,scene:t,worldCenter:A,size:a=256,near:s=.1,far:r=1e3,hideObjects:i=[],update:o=!1}){var c,l;if(this.envViewpoint||(this.envViewpoint=this.newViewpoint({sort360:!0})),!j.cubeRender||j.cubeRender.target.width!==a||j.cubeRender.near!==s||j.cubeRender.far!==r){j.cubeRender&&j.cubeRender.target.dispose();const I=new Oa(a,{format:$n,generateMipmaps:!0,minFilter:Ha}),d=new Va(s,r,I);j.cubeRender={target:I,camera:d,near:s,far:r}}j.pmrem||(j.pmrem=new Xa(n??this.renderer));const g=new N().setPosition(A);await((c=this.envViewpoint)==null?void 0:c.prepare({scene:t,viewToWorld:g,update:o}));const{target:h,camera:f}=j.cubeRender;f.position.copy(A);const u=new Map;for(const I of i)u.set(I,I.visible),I.visible=!1;this.prepareViewpoint(this.envViewpoint),f.update(n??this.renderer,t),this.prepareViewpoint(this.defaultView);for(const[I,d]of u.entries())I.visible=d;return(l=j.pmrem)==null?void 0:l.fromCubemap(h.texture).texture}recurseSetEnvMap(n,t){n.traverse(A=>{if(A instanceof ee)if(Array.isArray(A.material))for(const a of A.material)a instanceof Ht&&(a.envMap=t);else A.material instanceof Ht&&(A.material.envMap=t)})}getRgba({generator:n,rgba:t}){const A=this.active.mapping.find(({node:a})=>a===n);if(!A)throw new Error("Generator not found");return t=t??new si,t.fromPackedSplats({packedSplats:this.active.splats,base:A.base,count:A.count,renderer:this.renderer}),t}async readRgba({generator:n,rgba:t}){return t=this.getRgba({generator:n,rgba:t}),t.read()}};nt.cubeRender=null,nt.pmrem=null,nt.EMPTY_SPLAT_TEXTURE=new Na;var ha=nt,ua=new Nt(new Uint32Array(1),0);kn({packedSplats:qe,index:"int"},{gsplat:Y},({packedSplats:e,index:n})=>{if(!e||!n)throw new Error("Invalid input");return{gsplat:Ee(e,n)}});function Oi(e){if(e.length===0)return null;const n=new Q,t=new Z,A=new Q,a=[],s=[];for(const r of e)r.decompose(n,t,A),a.push(n),s.push(t);return new N().compose(br(a),Sr(s),new Q(1,1,1))}nn(`
  struct GsplatSkinning {
    int numSplats;
    int numBones;
    usampler2DArray skinTexture;
    sampler2D boneTexture;
  };
`),nn(`
  void applyGsplatSkinning(
    int numSplats, int numBones,
    usampler2DArray skinTexture, sampler2D boneTexture,
    int splatIndex, inout vec3 center, inout vec4 quaternion
  ) {
    if ((splatIndex < 0) || (splatIndex >= numSplats)) {
      return;
    }

    uvec4 skinData = texelFetch(skinTexture, splatTexCoord(splatIndex), 0);

    float weights[4];
    weights[0] = float(skinData.x & 0xffu) / 255.0;
    weights[1] = float(skinData.y & 0xffu) / 255.0;
    weights[2] = float(skinData.z & 0xffu) / 255.0;
    weights[3] = float(skinData.w & 0xffu) / 255.0;

    uint boneIndices[4];
    boneIndices[0] = (skinData.x >> 8u) & 0xffu;
    boneIndices[1] = (skinData.y >> 8u) & 0xffu;
    boneIndices[2] = (skinData.z >> 8u) & 0xffu;
    boneIndices[3] = (skinData.w >> 8u) & 0xffu;

    vec4 quat = vec4(0.0);
    vec4 dual = vec4(0.0);
    for (int i = 0; i < 4; i++) {
      if (weights[i] > 0.0) {
        int boneIndex = int(boneIndices[i]);
        vec4 boneQuat = vec4(0.0, 0.0, 0.0, 1.0);
        vec4 boneDual = vec4(0.0);
        if (boneIndex < numBones) {
          boneQuat = texelFetch(boneTexture, ivec2(2, boneIndex), 0);
          boneDual = texelFetch(boneTexture, ivec2(3, boneIndex), 0);
        }

        if ((i > 0) && (dot(quat, boneQuat) < 0.0)) {
          // Flip sign if next blend is pointing in the opposite direction
          boneQuat = -boneQuat;
          boneDual = -boneDual;
        }
        quat += weights[i] * boneQuat;
        dual += weights[i] * boneDual;
      }
    }

    // Normalize dual quaternion
    float norm = length(quat);
    quat /= norm;
    dual /= norm;
    vec3 translate = vec3(
      2.0 * (-dual.w * quat.x + dual.x * quat.w - dual.y * quat.z + dual.z * quat.y),
      2.0 * (-dual.w * quat.y + dual.x * quat.z + dual.y * quat.w - dual.z * quat.x),
      2.0 * (-dual.w * quat.z - dual.x * quat.y + dual.y * quat.x + dual.z * quat.w)
    );

    center = quatVec(quat, center) + translate;
    quaternion = quatQuat(quat, quaternion);
  }
`),new _e(new Q(-1,-1,-1),new Q(1,1,1)),new Q(-1,-3,1).normalize(),new yn(1,1,1),new yn(.5,.5,1),new Q(1,1,1),new _e(new Q(-2,-1,-2),new Q(2,5,2)),new Q(0,-1,0),new yn(1,1,1),new yn(.25,.25,.5),new Q(.1,1,.1);var Ia=class qt{static createButton(n,t={}){const A=navigator.xr;if(!A)return null;const a=A,s=document.createElement("button");n.xr.enabled=!0,n.xr.setReferenceSpaceType("local");function r(){let g=null;async function h(I){console.log("onSessionStarted"),I.addEventListener("end",f),await n.xr.setSession(I),s.textContent="EXIT VR",g=I}function f(){console.log("onSessionEnded"),g?.removeEventListener("end",f),s.textContent="ENTER VR",g=null}s.style.display="",s.style.cursor="pointer",s.style.left="calc(50% - 100px)",s.style.width="200px",s.style.height="100px",s.textContent="ENTER VR";const u={...t,optionalFeatures:[...t.optionalFeatures||[]]};s.onmouseenter=()=>{s.style.opacity="1.0"},s.onmouseleave=()=>{s.style.opacity="0.5"},s.onclick=()=>{g===null?(console.log("requesting session"),a.requestSession("immersive-vr",u).then(h)):(console.log("ending session"),g.end())}}function i(){s.style.display="none",s.style.cursor="auto",s.style.left="calc(50% - 75px)",s.style.width="150px",s.onmouseenter=null,s.onmouseleave=null,s.onclick=null}function o(){i(),s.textContent="VR NOT SUPPORTED"}function c(g){i(),console.warn("Exception when trying to call xr.isSessionSupported",g),s.textContent="VR NOT ALLOWED"}function l(g){g.style.position="absolute",g.style.bottom="20px",g.style.padding="12px 6px",g.style.border="1px solid #fff",g.style.borderRadius="4px",g.style.background="rgba(0,0,0,0.1)",g.style.color="#fff",g.style.font="normal 13px sans-serif",g.style.textAlign="center",g.style.opacity="0.5",g.style.outline="none",g.style.zIndex="999"}return s.id="VRButton",s.style.display="none",l(s),a.isSessionSupported("immersive-vr").then(g=>{g?r():o(),g&&qt.xrSessionIsGranted&&s.click()}).catch(c),s}static registerSessionGrantedListener(){const n=navigator.xr;if(!n)return null;const t=n;/WebXRViewer\//i.test(navigator.userAgent)||t.addEventListener("sessiongranted",()=>{qt.xrSessionIsGranted=!0})}};Ia.xrSessionIsGranted=!1,Ia.registerSessionGrantedListener();var fa=(e=>(e.w="wrist",e.t0="thumb-metacarpal",e.t1="thumb-phalanx-proximal",e.t2="thumb-phalanx-distal",e.t3="thumb-tip",e.i0="index-finger-metacarpal",e.i1="index-finger-phalanx-proximal",e.i2="index-finger-phalanx-intermediate",e.i3="index-finger-phalanx-distal",e.i4="index-finger-tip",e.m0="middle-finger-metacarpal",e.m1="middle-finger-phalanx-proximal",e.m2="middle-finger-phalanx-intermediate",e.m3="middle-finger-phalanx-distal",e.m4="middle-finger-tip",e.r0="ring-finger-metacarpal",e.r1="ring-finger-phalanx-proximal",e.r2="ring-finger-phalanx-intermediate",e.r3="ring-finger-phalanx-distal",e.r4="ring-finger-tip",e.p0="pinky-finger-metacarpal",e.p1="pinky-finger-phalanx-proximal",e.p2="pinky-finger-phalanx-intermediate",e.p3="pinky-finger-phalanx-distal",e.p4="pinky-finger-tip",e))(fa||{});Object.keys(fa).length;var pa=(e=>(e.left="left",e.right="right",e))(pa||{});Object.keys(pa),new Q(0,0,-1),new Q(0,0,1),new Q(-1,0,0),new Q(1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,-1),new Q(0,0,1),new Q(-1,0,0),new Q(1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,1,0),new Q(-1,0,0),new Q(1,0,0);export{Fn as a,ys as i,ws as n,Is as r,kt as t};
