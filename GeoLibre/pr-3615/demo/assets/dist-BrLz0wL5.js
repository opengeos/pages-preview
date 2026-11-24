const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./webgl-device-CDVpT1Kz.js","./webgl-device-DCfD3QcA.js","./get-attribute-from-layouts-Bj7i7MoM.js","./probe-log-BFMlxtxp.js","./webgl-CRSgYYgI.js","./expression-DP7NxJ1e.js","./dist-BDsRXmU8.js","./webgpu-BwIP2J_t.js","./webgpu-_X7bJI7i.js"])))=>i.map(i=>d[i]);
import{r as La}from"./rolldown-runtime-DpEnGzO4.js";import{t as ge}from"./preload-helper-CALLvQDj.js";import{n as Ia,t as oi}from"./probe-log-BFMlxtxp.js";import{i as jn,n as ka,r as Ra,t as ai}from"./webgl-device-DCfD3QcA.js";import{D as Vn,I as K,L as Fn,j as G,k as Oa,v as kt}from"./get-attribute-from-layouts-Bj7i7MoM.js";import{$t as Da,At as Gn,B as Ba,Bt as me,Cn as za,Ct as Na,Dt as Qt,Et as Ua,Ft as ci,Gt as ja,H as li,Ht as $n,Jt as Wn,K as Va,Kt as Yn,Lt as $,Mn as Fa,Mt as Ga,Nt as $a,Ot as Wa,Pt as Hn,Rt as Ya,Sn as Ha,St as Za,Tn as _e,Tt as ui,Ut as qa,Vt as Zn,Wt as Xa,Xt as Ka,Z as Ja,Zt as qn,_n as Qa,an as tc,bn as Rt,bt as ec,dn as Xn,en as ic,gn as nc,gt as Ot,hn as U,in as Kn,jn as Jn,jt as te,kn as rc,nn as sc,nt as Qn,on as tr,pn as oc,qt as hi,rn as er,tn as ee,vn as T,wn as ve,wt as ac,xn as yt,xt as cc,yn as fi,yt as j,zt as Dt}from"./dist-BDsRXmU8.js";import{n as lc,t as ir}from"./lighting-CkiSk4hn.js";import{i as nr,n as uc,o as rr,r as ft,s as hc}from"./expression-DP7NxJ1e.js";import{a as fc}from"./webgpu-_X7bJI7i.js";function sr(t,e){if(!t)throw new Error(e||"loader assertion failed.")}var J={self:typeof self<"u"&&self,window:typeof window<"u"&&window,global:typeof global<"u"&&global,document:typeof document<"u"&&document};J.self||J.window||J.global,J.window||J.self||J.global,J.global||J.self||J.window,J.document;var or=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),ar=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);ar&&parseFloat(ar[1]);var dc="v4.4.5";function pc(){const t=new oi({id:"loaders.gl"});return globalThis.loaders||={},globalThis.loaders.log=t,globalThis.loaders.version=dc,globalThis.probe||={},globalThis.probe.loaders=t,t}var gc=pc(),mc=t=>typeof t=="boolean",Q=t=>typeof t=="function",bt=t=>t!==null&&typeof t=="object",cr=t=>bt(t)&&t.constructor==={}.constructor,lr=t=>typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer,di=t=>bt(t)&&typeof t.byteLength=="number"&&typeof t.slice=="function",_c=t=>!!t&&Q(t[Symbol.iterator]),vc=t=>!!t&&Q(t[Symbol.asyncIterator]),wt=t=>typeof Response<"u"&&t instanceof Response||bt(t)&&Q(t.arrayBuffer)&&Q(t.text)&&Q(t.json),Pt=t=>typeof Blob<"u"&&t instanceof Blob,yc=t=>typeof ReadableStream<"u"&&t instanceof ReadableStream||bt(t)&&Q(t.tee)&&Q(t.cancel)&&Q(t.getReader),bc=t=>bt(t)&&Q(t.read)&&Q(t.pipe)&&mc(t.readable),ur=t=>yc(t)||bc(t);function wc(t,e){return hr(t||{},e)}function hr(t,e,i=0){if(i>3)return e;const n={...t};for(const[r,s]of Object.entries(e))s&&typeof s=="object"&&!Array.isArray(s)?n[r]=hr(n[r]||{},e[r],i+1):n[r]=e[r];return n}var Pc="latest";function Ec(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.4.5"),globalThis._loadersgl_.version}var Sc=Ec();function dt(t,e){if(!t)throw new Error(e||"loaders.gl assertion failed.")}var tt={self:typeof self<"u"&&self,window:typeof window<"u"&&window,global:typeof global<"u"&&global,document:typeof document<"u"&&document};tt.self||tt.window||tt.global,tt.window||tt.self||tt.global,tt.global||tt.self||tt.window,tt.document;var Et=typeof process!="object"||String(process)!=="[object process]"||process.browser,xc=typeof window<"u"&&typeof window.orientation<"u",fr=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);fr&&parseFloat(fr[1]);var Mc=class{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(t,e){this.name=t,this.workerThread=e,this.result=new Promise((i,n)=>{this._resolve=i,this._reject=n})}postMessage(t,e){this.workerThread.postMessage({source:"loaders.gl",type:t,payload:e})}done(t){dt(this.isRunning),this.isRunning=!1,this._resolve(t)}error(t){dt(this.isRunning),this.isRunning=!1,this._reject(t)}},pi=class{terminate(){}},gi=new Map;function Tc(t){dt(t.source&&!t.url||!t.source&&t.url);let e=gi.get(t.source||t.url);return e||(t.url&&(e=Cc(t.url),gi.set(t.url,e)),t.source&&(e=dr(t.source),gi.set(t.source,e))),dt(e),e}function Cc(t){return t.startsWith("http")?dr(Ac(t)):t}function dr(t){const e=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(e)}function Ac(t){return`try {
  importScripts('${t}');
} catch (error) {
  console.error(error);
  throw error;
}`}function pr(t,e=!0,i){const n=i||new Set;if(t){if(gr(t))n.add(t);else if(gr(t.buffer))n.add(t.buffer);else if(!ArrayBuffer.isView(t)){if(e&&typeof t=="object")for(const r in t)pr(t[r],e,n)}}return i===void 0?Array.from(n):[]}function gr(t){return t?t instanceof ArrayBuffer||typeof MessagePort<"u"&&t instanceof MessagePort||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas:!1}var mi=()=>{},_i=class{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return typeof Worker<"u"&&Et||typeof pi<"u"&&!Et}constructor(t){const{name:e,source:i,url:n}=t;dt(i||n),this.name=e,this.source=i,this.url=n,this.onMessage=mi,this.onError=r=>console.log(r),this.worker=Et?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=mi,this.onError=mi,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(t,e){e=e||pr(t),this.worker.postMessage(t,e)}_getErrorFromErrorEvent(t){let e="Failed to load ";return e+=`worker ${this.name} from ${this.url}. `,t.message&&(e+=`${t.message} in `),t.lineno&&(e+=`:${t.lineno}:${t.colno}`),new Error(e)}_createBrowserWorker(){this._loadableURL=Tc({source:this.source,url:this.url});const t=new Worker(this._loadableURL,{name:this.name});return t.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(new Error("No data received"))},t.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},t.onmessageerror=e=>console.error(e),t}_createNodeWorker(){let t;if(this.url)t=new pi(this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(".ts")||this.url.endsWith(".mjs")?"module":"commonjs"});else if(this.source)t=new pi(this.source,{eval:!0});else throw new Error("no worker");return t.on("message",e=>{this.onMessage(e)}),t.on("error",e=>{this.onError(e)}),t.on("exit",e=>{}),t}},Lc=class{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return _i.isSupported()}constructor(t){this.source=t.source,this.url=t.url,this.setProps(t)}destroy(){this.idleQueue.forEach(t=>t.destroy()),this.isDestroyed=!0}setProps(t){this.props={...this.props,...t},t.name!==void 0&&(this.name=t.name),t.maxConcurrency!==void 0&&(this.maxConcurrency=t.maxConcurrency),t.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=t.maxMobileConcurrency),t.reuseWorkers!==void 0&&(this.reuseWorkers=t.reuseWorkers),t.onDebug!==void 0&&(this.onDebug=t.onDebug)}async startJob(t,e=(n,r,s)=>n.done(s),i=(n,r)=>n.error(r)){const n=new Promise(r=>(this.jobQueue.push({name:t,onMessage:e,onError:i,onStart:r}),this));return this._startQueuedJob(),await n}async _startQueuedJob(){if(!this.jobQueue.length)return;const t=this._getAvailableWorker();if(!t)return;const e=this.jobQueue.shift();if(e){this.onDebug({message:"Starting job",name:e.name,workerThread:t,backlog:this.jobQueue.length});const i=new Mc(e.name,t);t.onMessage=n=>e.onMessage(i,n.type,n.payload),t.onError=n=>e.onError(i,n),e.onStart(i);try{await i.result}catch(n){console.error(`Worker exception: ${n}`)}finally{this.returnWorkerToQueue(t)}}}returnWorkerToQueue(t){!Et||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(t.destroy(),this.count--):this.idleQueue.push(t),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new _i({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return xc?this.maxMobileConcurrency:this.maxConcurrency}},Ic={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},mr=class Xt{props;workerPools=new Map;static _workerFarm;static isSupported(){return _i.isSupported()}static getWorkerFarm(e={}){return Xt._workerFarm=Xt._workerFarm||new Xt({}),Xt._workerFarm.setProps(e),Xt._workerFarm}constructor(e){this.props={...Ic},this.setProps(e),this.workerPools=new Map}destroy(){for(const e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(const i of this.workerPools.values())i.setProps(this._getWorkerPoolProps())}getWorkerPool(e){const{name:i,source:n,url:r}=e;let s=this.workerPools.get(i);return s||(s=new Lc({name:i,source:n,url:r}),s.setProps(this._getWorkerPoolProps()),this.workerPools.set(i,s)),s}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}};function kc(t,e={}){const i=e[t.id]||{},n=Et?`${t.id}-worker.js`:`${t.id}-worker-node.js`;let r=i.workerUrl;if(!r&&t.id==="compression"&&(r=e.workerUrl),(e._workerType||e?.core?._workerType)==="test"&&(Et?r=`modules/${t.module}/dist/${n}`:r=`modules/${t.module}/src/workers/${t.id}-worker-node.ts`),!r){let s=t.version;s==="latest"&&(s=Pc);const o=s?`@${s}`:"";r=`https://unpkg.com/@loaders.gl/${t.module}${o}/dist/${n}`}return dt(r),r}function Rc(t,e=Sc){dt(t,"no worker provided");const i=t.version;return!(!e||!i)}function Oc(t,e){if(!mr.isSupported())return!1;const i=e?._nodeWorkers??e?.core?._nodeWorkers;if(!Et&&!i)return!1;const n=e?.worker??e?.core?.worker;return!!(t.worker&&n)}async function Dc(t,e,i,n,r){const s=t.id,o=kc(t,i),a=mr.getWorkerFarm(i?.core).getWorkerPool({name:s,url:o});i=JSON.parse(JSON.stringify(i)),n=JSON.parse(JSON.stringify(n||{}));const c=await a.startJob("process-on-worker",Bc.bind(null,r));return c.postMessage("process",{input:e,options:i,context:n}),await(await c.result).result}async function Bc(t,e,i,n){switch(i){case"done":e.done(n);break;case"error":e.error(new Error(n.error));break;case"process":const{id:r,input:s,options:o}=n;try{const a=await t(s,o);e.postMessage("done",{id:r,result:a})}catch(a){const c=a instanceof Error?a.message:"unknown error";e.postMessage("error",{id:r,error:c})}break;default:console.warn(`parse-with-worker unknown message ${i}`)}}function zc(t,e,i){if(i=i||t.byteLength,t.byteLength<i||e.byteLength<i)return!1;const n=new Uint8Array(t),r=new Uint8Array(e);for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}function Nc(...t){return Uc(t)}function Uc(t){const e=t.map(s=>s instanceof ArrayBuffer?new Uint8Array(s):s),i=e.reduce((s,o)=>s+o.byteLength,0),n=new Uint8Array(i);let r=0;for(const s of e)n.set(s,r),r+=s.byteLength;return n.buffer}async function jc(t){const e=[];for await(const i of t)e.push(Vc(i));return Nc(...e)}function Vc(t){if(t instanceof ArrayBuffer)return t;if(ArrayBuffer.isView(t)){const{buffer:e,byteOffset:i,byteLength:n}=t;return _r(e,i,n)}return _r(t)}function _r(t,e=0,i=t.byteLength-e){const n=new Uint8Array(t,e,i),r=new Uint8Array(n.length);return r.set(n),r.buffer}var Fc="",vr={};function Gc(t){for(const e in vr)if(t.startsWith(e)){const i=vr[e];t=t.replace(e,i)}return!t.startsWith("http://")&&!t.startsWith("https://")&&(t=`${Fc}${t}`),t}function d_(t){return t}function yr(t){return t&&typeof t=="object"&&t.isBuffer}function vi(t){if(yr(t))return t;if(t instanceof ArrayBuffer)return t;if(lr(t))return yi(t);if(ArrayBuffer.isView(t)){const e=t.buffer;return t.byteOffset===0&&t.byteLength===t.buffer.byteLength?e:e.slice(t.byteOffset,t.byteOffset+t.byteLength)}if(typeof t=="string"){const e=t;return new TextEncoder().encode(e).buffer}if(t&&typeof t=="object"&&t._toArrayBuffer)return t._toArrayBuffer();throw new Error("toArrayBuffer")}function br(t){if(t instanceof ArrayBuffer)return t;if(lr(t))return yi(t);const{buffer:e,byteOffset:i,byteLength:n}=t;return e instanceof ArrayBuffer&&i===0&&n===e.byteLength?e:yi(e,i,n)}function yi(t,e=0,i=t.byteLength-e){const n=new Uint8Array(t,e,i),r=new Uint8Array(n.length);return r.set(n),r.buffer}function $c(t){return ArrayBuffer.isView(t)?t:new Uint8Array(t)}function wr(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(e+1):t}function Pr(t){const e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(0,e):""}var Wc=class extends Error{constructor(t,e){super(t),this.reason=e.reason,this.url=e.url,this.response=e.response}reason;url;response},Yc=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,Hc=/^([-\w.]+\/[-\w.+]+)/;function Er(t,e){return t.toLowerCase()===e.toLowerCase()}function Zc(t){const e=Hc.exec(t);return e?e[1]:t}function Sr(t){const e=Yc.exec(t);return e?e[1]:""}var xr=/\?.*/;function qc(t){const e=t.match(xr);return e&&e[0]}function ye(t){return t.replace(xr,"")}function Xc(t){if(t.length<50)return t;const e=t.slice(t.length-15);return`${t.substr(0,32)}...${e}`}function be(t){return wt(t)?t.url:Pt(t)?("name"in t?t.name:"")||"":typeof t=="string"?t:""}function we(t){if(wt(t)){const e=t.headers.get("content-type")||"",i=ye(t.url);return Zc(e)||Sr(i)}return Pt(t)?t.type||"":typeof t=="string"?Sr(t):""}function Kc(t){return wt(t)?t.headers["content-length"]||-1:Pt(t)?t.size:typeof t=="string"?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1}async function Mr(t){if(wt(t))return t;const e={},i=Kc(t);i>=0&&(e["content-length"]=String(i));const n=be(t),r=we(t);r&&(e["content-type"]=r);const s=await tl(t);s&&(e["x-first-bytes"]=s),typeof t=="string"&&(t=new TextEncoder().encode(t));const o=new Response(t,{headers:e});return Object.defineProperty(o,"url",{value:n}),o}async function Jc(t){if(!t.ok)throw await Qc(t)}async function Qc(t){const e=Xc(t.url);let i=`Failed to fetch resource (${t.status}) ${t.statusText}: ${e}`;i=i.length>100?`${i.slice(0,100)}...`:i;const n={reason:t.statusText,url:t.url,response:t};try{const r=t.headers.get("Content-Type");n.reason=!t.bodyUsed&&r?.includes("application/json")?await t.json():await t.text()}catch{}return new Wc(i,n)}async function tl(t){if(typeof t=="string")return`data:,${t.slice(0,5)}`;if(t instanceof Blob){const i=t.slice(0,5);return await new Promise(n=>{const r=new FileReader;r.onload=s=>n(s?.target?.result),r.readAsDataURL(i)})}return t instanceof ArrayBuffer?`data:base64,${el(t.slice(0,5))}`:null}function el(t){let e="";const i=new Uint8Array(t);for(let n=0;n<i.byteLength;n++)e+=String.fromCharCode(i[n]);return btoa(e)}function il(t){return!nl(t)&&!rl(t)}function nl(t){return t.startsWith("http:")||t.startsWith("https:")}function rl(t){return t.startsWith("data:")}async function Tr(t,e){if(typeof t=="string"){const i=Gc(t);return il(i)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(i,e):await fetch(i,e)}return await Mr(t)}var Pe=new oi({id:"loaders.gl"}),sl=class{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}},ol=class{console;constructor(){this.console=console}log(...t){return this.console.log.bind(this.console,...t)}info(...t){return this.console.info.bind(this.console,...t)}warn(...t){return this.console.warn.bind(this.console,...t)}error(...t){return this.console.error.bind(this.console,...t)}},bi={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new ol,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:or,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]}},al={baseUri:"core.baseUrl",fetch:"core.fetch",mimeType:"core.mimeType",fallbackMimeType:"core.fallbackMimeType",ignoreRegisteredLoaders:"core.ignoreRegisteredLoaders",nothrow:"core.nothrow",log:"core.log",useLocalLibraries:"core.useLocalLibraries",CDN:"core.CDN",worker:"core.worker",maxConcurrency:"core.maxConcurrency",maxMobileConcurrency:"core.maxMobileConcurrency",reuseWorkers:"core.reuseWorkers",_nodeWorkers:"core.nodeWorkers",_workerType:"core._workerType",_worker:"core._workerType",limit:"core.limit",_limitMB:"core._limitMB",batchSize:"core.batchSize",batchDebounceMs:"core.batchDebounceMs",metadata:"core.metadata",transforms:"core.transforms",throws:"nothrow",dataType:"(no longer used)",uri:"core.baseUrl",method:"core.fetch.method",headers:"core.fetch.headers",body:"core.fetch.body",mode:"core.fetch.mode",credentials:"core.fetch.credentials",cache:"core.fetch.cache",redirect:"core.fetch.redirect",referrer:"core.fetch.referrer",referrerPolicy:"core.fetch.referrerPolicy",integrity:"core.fetch.integrity",keepalive:"core.fetch.keepalive",signal:"core.fetch.signal"},wi=["baseUrl","fetch","mimeType","fallbackMimeType","ignoreRegisteredLoaders","nothrow","log","useLocalLibraries","CDN","worker","maxConcurrency","maxMobileConcurrency","reuseWorkers","_nodeWorkers","_workerType","limit","_limitMB","batchSize","batchDebounceMs","metadata","transforms"];function Cr(){globalThis.loaders=globalThis.loaders||{};const{loaders:t}=globalThis;return t._state||(t._state={}),t._state}function Ar(){const t=Cr();return t.globalOptions=t.globalOptions||{...bi,core:{...bi.core}},St(t.globalOptions)}function cl(t,e,i,n){return i=i||[],i=Array.isArray(i)?i:[i],ll(t,i),St(hl(e,t,n))}function St(t){const e=dl(t);kr(e);for(const i of wi)e.core&&e.core[i]!==void 0&&delete e[i];return e.core&&e.core._workerType!==void 0&&delete e._worker,e}function ll(t,e){Lr(t,null,bi,al,e);for(const i of e){const n=t&&t[i.id]||{},r=i.options&&i.options[i.id]||{},s=i.deprecatedOptions&&i.deprecatedOptions[i.id]||{};Lr(n,i.id,r,s,e)}}function Lr(t,e,i,n,r){const s=e||"Top level",o=e?`${e}.`:"";for(const a in t){const c=!e&&bt(t[a]),l=a==="baseUri"&&!e,u=a==="workerUrl"&&e;if(!(a in i)&&!l&&!u){if(a in n)Pe.level>0&&Pe.warn(`${s} loader option '${o}${a}' no longer supported, use '${n[a]}'`)();else if(!c&&Pe.level>0){const h=ul(a,r);Pe.warn(`${s} loader option '${o}${a}' not recognized. ${h}`)()}}}}function ul(t,e){const i=t.toLowerCase();let n="";for(const r of e)for(const s in r.options){if(t===s)return`Did you mean '${r.id}.${s}'?`;const o=s.toLowerCase();(i.startsWith(o)||o.startsWith(i))&&(n=n||`Did you mean '${r.id}.${s}'?`)}return n}function hl(t,e,i){const n=t.options||{},r={...n};return n.core&&(r.core={...n.core}),kr(r),r.core?.log===null&&(r.core={...r.core,log:new sl}),Ir(r,St(Ar())),Ir(r,St(e)),fl(r,i),pl(r),r}function Ir(t,e){for(const i in e)if(i in e){const n=e[i];cr(n)&&cr(t[i])?t[i]={...t[i],...e[i]}:t[i]=e[i]}}function fl(t,e){e&&t.core?.baseUrl===void 0&&(t.core||={},t.core.baseUrl=Pr(ye(e)))}function dl(t){const e={...t};return t.core&&(e.core={...t.core}),e}function kr(t){t.baseUri!==void 0&&(t.core||={},t.core.baseUrl===void 0&&(t.core.baseUrl=t.baseUri));for(const i of wi)if(t[i]!==void 0){const n=t.core=t.core||{};n[i]===void 0&&(n[i]=t[i])}const e=t._worker;e!==void 0&&(t.core||={},t.core._workerType===void 0&&(t.core._workerType=e))}function pl(t){const e=t.core;if(e)for(const i of wi)e[i]!==void 0&&(t[i]=e[i])}function Pi(t){return t?(Array.isArray(t)&&(t=t[0]),Array.isArray(t?.extensions)):!1}function Ei(t){sr(t,"null loader"),sr(Pi(t),"invalid loader");let e;return Array.isArray(t)&&(e=t[1],t=t[0],t={...t,options:{...t.options,...e}}),(t?.parseTextSync||t?.parseText)&&(t.text=!0),t.text||(t.binary=!0),t}var Rr=()=>{const t=Cr();return t.loaderRegistry=t.loaderRegistry||[],t.loaderRegistry};function gl(t){const e=Rr();t=Array.isArray(t)?t:[t];for(const i of t){const n=Ei(i);e.find(r=>n===r)||e.unshift(n)}}function ml(){return Rr()}var _l=/\.([^.]+)$/;async function vl(t,e=[],i,n){if(!Dr(t))return null;const r=St(i||{});if(r.core||={},t instanceof Response&&Or(t)){const o=Ee(await t.clone().text(),e,{...r,core:{...r.core,nothrow:!0}},n);if(o)return o}let s=Ee(t,e,{...r,core:{...r.core,nothrow:!0}},n);if(s)return s;if(Pt(t)&&(t=await t.slice(0,10).arrayBuffer(),s=Ee(t,e,r,n)),!s&&t instanceof Response&&Or(t)&&(s=Ee(await t.clone().text(),e,r,n)),!s&&!r.core.nothrow)throw new Error(Br(t));return s}function Or(t){const e=we(t);return!!(e&&(e.startsWith("text/")||e==="application/json"||e.endsWith("+json")))}function Ee(t,e=[],i,n){if(!Dr(t))return null;const r=St(i||{});if(r.core||={},e&&!Array.isArray(e))return Ei(e);let s=[];e&&(s=s.concat(e)),r.core.ignoreRegisteredLoaders||s.push(...ml()),bl(s);const o=yl(t,s,r,n);if(!o&&!r.core.nothrow)throw new Error(Br(t));return o}function yl(t,e,i,n){const r=be(t),s=we(t),o=ye(r)||n?.url;let a=null,c="";return i?.core?.mimeType&&(a=Si(e,i?.core?.mimeType),c=`match forced by supplied MIME type ${i?.core?.mimeType}`),a=a||wl(e,o),c=c||(a?`matched url ${o}`:""),a=a||Si(e,s),c=c||(a?`matched MIME type ${s}`:""),a=a||El(e,t),c=c||(a?`matched initial data ${Nr(t)}`:""),i?.core?.fallbackMimeType&&(a=a||Si(e,i?.core?.fallbackMimeType),c=c||(a?`matched fallback MIME type ${s}`:"")),c&&gc.log(1,`selectLoader selected ${a?.name}: ${c}.`),a}function Dr(t){return!(t instanceof Response&&t.status===204)}function Br(t){const e=be(t),i=we(t);let n="No valid loader found (";n+=e?`${wr(e)}, `:"no url provided, ",n+=`MIME type: ${i?`"${i}"`:"not provided"}, `;const r=t?Nr(t):"";return n+=r?` first bytes: "${r}"`:"first bytes: not available",n+=")",n}function bl(t){for(const e of t)Ei(e)}function wl(t,e){const i=e&&_l.exec(e),n=i&&i[1];return n?Pl(t,n):null}function Pl(t,e){e=e.toLowerCase();for(const i of t)for(const n of i.extensions)if(n.toLowerCase()===e)return i;return null}function Si(t,e){for(const i of t)if(i.mimeTypes?.some(n=>Er(e,n))||Er(e,`application/x.${i.id}`))return i;return null}function El(t,e){if(!e)return null;for(const i of t)if(typeof e=="string"){if(Sl(e,i))return i}else if(ArrayBuffer.isView(e)){if(zr(e.buffer,e.byteOffset,i))return i}else if(e instanceof ArrayBuffer&&zr(e,0,i))return i;return null}function Sl(t,e){return e.testText?e.testText(t):(Array.isArray(e.tests)?e.tests:[e.tests]).some(i=>t.startsWith(i))}function zr(t,e,i){return(Array.isArray(i.tests)?i.tests:[i.tests]).some(n=>xl(t,e,i,n))}function xl(t,e,i,n){if(di(n))return zc(n,t,n.byteLength);switch(typeof n){case"function":return n(br(t));case"string":return n===xi(t,e,n.length);default:return!1}}function Nr(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?xi(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?xi(t,0,e):""}function xi(t,e,i){if(t.byteLength<e+i)return"";const n=new DataView(t);let r="";for(let s=0;s<i;s++)r+=String.fromCharCode(n.getUint8(e+s));return r}var Ml=262144;function*Tl(t,e){const i=e?.chunkSize||Ml;let n=0;const r=new TextEncoder;for(;n<t.length;){const s=Math.min(t.length-n,i),o=t.slice(n,n+s);n+=s,yield br(r.encode(o))}}var Cl=262144;function*Al(t,e={}){const{chunkSize:i=Cl}=e;let n=0;for(;n<t.byteLength;){const r=Math.min(t.byteLength-n,i),s=new ArrayBuffer(r),o=new Uint8Array(t,n,r);new Uint8Array(s).set(o),n+=r,yield s}}var Ll=1048576;async function*Il(t,e){const i=e?.chunkSize||Ll;let n=0;for(;n<t.size;){const r=n+i,s=await t.slice(n,r).arrayBuffer();n=r,yield s}}function Ur(t,e){return or?kl(t,e):Rl(t,e)}async function*kl(t,e){const i=t.getReader();let n;try{for(;;){const r=n||i.read();e?._streamReadAhead&&(n=i.read());const{done:s,value:o}=await r;if(s)return;yield vi(o)}}catch{i.releaseLock()}}async function*Rl(t,e){for await(const i of t)yield vi(i)}function Ol(t,e){if(typeof t=="string")return Tl(t,e);if(t instanceof ArrayBuffer)return Al(t,e);if(Pt(t))return Il(t,e);if(ur(t))return Ur(t,e);if(wt(t)){const i=t.body;if(!i)throw new Error("Readable stream not available on Response");return Ur(i,e)}throw new Error("makeIterator")}var jr="Cannot convert supplied data type";function Dl(t,e,i){if(e.text&&typeof t=="string")return t;if(yr(t)&&(t=t.buffer),di(t)){const n=$c(t);return e.text&&!e.binary?new TextDecoder("utf8").decode(n):vi(n)}throw new Error(jr)}async function Bl(t,e,i){if(typeof t=="string"||di(t))return Dl(t,e,i);if(Pt(t)&&(t=await Mr(t)),wt(t))return await Jc(t),e.binary?await t.arrayBuffer():await t.text();if(ur(t)&&(t=Ol(t,i)),_c(t)||vc(t))return jc(t);throw new Error(jr)}function Vr(t,e){const i=Ar(),n=t||i,r=n.fetch??n.core?.fetch;return typeof r=="function"?r:bt(r)?s=>Tr(s,r):e?.fetch?e?.fetch:Tr}function zl(t,e,i){if(i)return i;const n={fetch:Vr(e,t),...t};if(n.url){const r=ye(n.url);n.baseUrl=r,n.queryString=qc(n.url),n.filename=wr(r),n.baseUrl=Pr(r)}return Array.isArray(n.loaders)||(n.loaders=null),n}function Nl(t,e){if(t&&!Array.isArray(t))return t;let i;if(t&&(i=Array.isArray(t)?t:[t]),e&&e.loaders){const n=Array.isArray(e.loaders)?e.loaders:[e.loaders];i=i?[...i,...n]:n}return i&&i.length?i:void 0}async function Se(t,e,i,n){e&&!Array.isArray(e)&&!Pi(e)&&(n=void 0,i=e,e=void 0),t=await t,i=i||{};const r=be(t),s=Nl(e,n),o=await vl(t,s,i);if(!o)return null;const a=cl(i,o,s,r);return n=zl({url:r,_parse:Se,loaders:s},a,n||null),await Ul(o,t,a,n)}async function Ul(t,e,i,n){if(Rc(t),i=wc(t.options,i),wt(e)){const{ok:s,redirected:o,status:a,statusText:c,type:l,url:u}=e;n.response={headers:Object.fromEntries(e.headers.entries()),ok:s,redirected:o,status:a,statusText:c,type:l,url:u}}e=await Bl(e,t,i);const r=t;if(r.parseTextSync&&typeof e=="string")return r.parseTextSync(e,i,n);if(Oc(t,i))return await Dc(t,e,i,n,Se);if(r.parseText&&typeof e=="string")return await r.parseText(e,i,n);if(r.parse)return await r.parse(e,i,n);throw dt(!r.parseSync),new Error(`${t.id} loader - no parser found and worker is disabled`)}async function xe(t,e,i,n){let r,s;!Array.isArray(e)&&!Pi(e)?(r=[],s=e,n=void 0):(r=e,s=i);const o=Vr(s);let a=t;return typeof t=="string"&&(a=await o(t)),Pt(t)&&(a=await o(t)),typeof t=="string"&&(St(s||{}).core?.baseUrl||(s={...s,core:{...s?.core,baseUrl:t}})),Array.isArray(r)?await Se(a,r,s):await Se(a,r,s)}var jl="4.4.3";function Mi(t,e){if(!t)throw new Error(e||"loader assertion failed.")}var et={self:typeof self<"u"&&self,window:typeof window<"u"&&window,global:typeof global<"u"&&global,document:typeof document<"u"&&document};et.self||et.window||et.global,et.window||et.self||et.global,et.global||et.self||et.window,et.document;var Fr=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),Gr=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Gr&&parseFloat(Gr[1]);var Vl=globalThis.loaders?.parseImageNode,Ti=typeof Image<"u",Ci=typeof ImageBitmap<"u",Ai=Fr?!0:!!Vl;function Fl(t){switch(t){case"auto":return Ci||Ti||Ai;case"imagebitmap":return Ci;case"image":return Ti;case"data":return Ai;default:throw new Error(`@loaders.gl/images: image ${t} not supported in this environment`)}}function Gl(){if(Ci)return"imagebitmap";if(Ti)return"image";if(Ai)return"data";throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js")}function $l(t){const e=Wl(t);if(!e)throw new Error("Not an image");return e}function $r(t){switch($l(t)){case"data":return t;case"image":case"imagebitmap":const e=document.createElement("canvas"),i=e.getContext("2d");if(!i)throw new Error("getImageData");return e.width=t.width,e.height=t.height,i.drawImage(t,0,0),i.getImageData(0,0,t.width,t.height);default:throw new Error("getImageData")}}function Wl(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap?"imagebitmap":typeof Image<"u"&&t instanceof Image?"image":t&&typeof t=="object"&&t.data&&t.width&&t.height?"data":null}var Yl=/^data:image\/svg\+xml/,Hl=/\.svg((\?|#).*)?$/;function Li(t){return t&&(Yl.test(t)||Hl.test(t))}function Zl(t,e){if(Li(e)){let i=new TextDecoder().decode(t);try{typeof unescape=="function"&&typeof encodeURIComponent=="function"&&(i=unescape(encodeURIComponent(i)))}catch(n){throw new Error(n.message)}return`data:image/svg+xml;base64,${btoa(i)}`}return Wr(t,e)}function Wr(t,e){if(Li(e))throw new Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(t)])}async function Yr(t,e,i){const n=Zl(t,i),r=self.URL||self.webkitURL,s=typeof n!="string"&&r.createObjectURL(n);try{return await ql(s||n,e)}finally{s&&r.revokeObjectURL(s)}}async function ql(t,e){const i=new Image;return i.src=t,e.image&&e.image.decode&&i.decode?(await i.decode(),i):await new Promise((n,r)=>{try{i.onload=()=>n(i),i.onerror=s=>{const o=s instanceof Error?s.message:"error";r(new Error(o))}}catch(s){r(s)}})}var Hr=!0;async function Xl(t,e,i){let n;Li(i)?n=await Yr(t,e,i):n=Wr(t,i);const r=e&&e.imagebitmap;return await Kl(n,r)}async function Kl(t,e=null){if((Jl(e)||!Hr)&&(e=null),e)try{return await createImageBitmap(t,e)}catch(i){console.warn(i),Hr=!1}return await createImageBitmap(t)}function Jl(t){if(!t)return!0;for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ql(t){return!nu(t,"ftyp",4)||(t[8]&96)===0?null:tu(t)}function tu(t){switch(eu(t,8,12).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}function eu(t,e,i){return String.fromCharCode(...t.slice(e,i))}function iu(t){return[...t].map(e=>e.charCodeAt(0))}function nu(t,e,i=0){const n=iu(e);for(let r=0;r<n.length;++r)if(n[r]!==t[r+i])return!1;return!0}var it=!1,ie=!0;function Ii(t){const e=ne(t);return su(e)||cu(e)||ou(e)||au(e)||ru(e)}function ru(t){const e=Ql(new Uint8Array(t instanceof DataView?t.buffer:t));return e?{mimeType:e.mimeType,width:0,height:0}:null}function su(t){const e=ne(t);return e.byteLength>=24&&e.getUint32(0,it)===2303741511?{mimeType:"image/png",width:e.getUint32(16,it),height:e.getUint32(20,it)}:null}function ou(t){const e=ne(t);return e.byteLength>=10&&e.getUint32(0,it)===1195984440?{mimeType:"image/gif",width:e.getUint16(6,ie),height:e.getUint16(8,ie)}:null}function au(t){const e=ne(t);return e.byteLength>=14&&e.getUint16(0,it)===16973&&e.getUint32(2,ie)===e.byteLength?{mimeType:"image/bmp",width:e.getUint32(18,ie),height:e.getUint32(22,ie)}:null}function cu(t){const e=ne(t);if(!(e.byteLength>=3&&e.getUint16(0,it)===65496&&e.getUint8(2)===255))return null;const{tableMarkers:i,sofMarkers:n}=lu();let r=2;for(;r+9<e.byteLength;){const s=e.getUint16(r,it);if(n.has(s))return{mimeType:"image/jpeg",height:e.getUint16(r+5,it),width:e.getUint16(r+7,it)};if(!i.has(s))return null;r+=2,r+=e.getUint16(r,it)}return null}function lu(){const t=new Set([65499,65476,65484,65501,65534]);for(let e=65504;e<65520;++e)t.add(e);return{tableMarkers:t,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function ne(t){if(t instanceof DataView)return t;if(ArrayBuffer.isView(t))return new DataView(t.buffer);if(t instanceof ArrayBuffer)return new DataView(t);throw new Error("toDataView")}async function uu(t,e){const{mimeType:i}=Ii(t)||{},n=globalThis.loaders?.parseImageNode;return Mi(n),await n(t,i)}async function hu(t,e,i){e=e||{};const n=(e.image||{}).type||"auto",{url:r}=i||{},s=fu(n);let o;switch(s){case"imagebitmap":o=await Xl(t,e,r);break;case"image":o=await Yr(t,e,r);break;case"data":o=await uu(t,e);break;default:Mi(!1)}return n==="data"&&(o=$r(o)),o}function fu(t){switch(t){case"auto":case"data":return Gl();default:return Fl(t),t}}var Zr={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:jl,mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],extensions:["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],parse:hu,tests:[t=>!!Ii(new DataView(t))],options:{image:{type:"auto",decode:!0}}},L=new oi({id:"deck"}),ki={};function du(t){ki=t}function B(t,e,i,n){L.level>0&&ki[t]&&ki[t].call(null,e,i,n)}function pu(t){const e=t[0],i=t[t.length-1];return e==="{"&&i==="}"||e==="["&&i==="]"}var gu={dataType:null,batchType:null,id:"JSON",name:"JSON",module:"",version:"",options:{},extensions:["json","geojson"],mimeTypes:["application/json","application/geo+json"],testText:pu,parseTextSync:JSON.parse};function mu(){const t="9.4.1",e=globalThis.deck&&globalThis.deck.VERSION;if(e&&e!==t)throw new Error(`deck.gl - multiple versions detected: ${e} vs ${t}`);return e||(L.log(1,`deck.gl ${t}`)(),globalThis.deck={...globalThis.deck,VERSION:t,version:t,log:L,_registerLoggers:du},gl([gu,[Zr,{imagebitmap:{premultiplyAlpha:"none"}}]])),t}var qr=mu(),_u=class{get pageLoaded(){return bu()}},vu=Ia()&&typeof document<"u",yu=()=>vu&&document.readyState==="complete",Me=null;function bu(){return Me||(yu()||typeof window>"u"?Me=Promise.resolve():Me=new Promise(t=>window.addEventListener("load",()=>t()))),Me}var Te,wu=class Ma extends oc{static get ZERO(){return Te||(Te=new Ma(0,0,0,0),Object.freeze(Te)),Te}constructor(e=0,i=0,n=0,r=0){super(-0,-0,-0,-0),za(e)&&arguments.length===1?this.copy(e):(fi.debug&&(U(e),U(i),U(n),U(r)),this[0]=e,this[1]=i,this[2]=n,this[3]=r)}set(e,i,n,r){return this[0]=e,this[1]=i,this[2]=n,this[3]=r,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this.check()}fromObject(e){return fi.debug&&(U(e.x),U(e.y),U(e.z),U(e.w)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this[3]=e.w,this}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e.w=this[3],e}get ELEMENTS(){return 4}get z(){return this[2]}set z(e){this[2]=U(e)}get w(){return this[3]}set w(e){this[3]=U(e)}transform(e){return Ka(this,this,e),this.check()}transformByMatrix3(e){return ic(this,this,e),this.check()}transformByMatrix2(e){return Da(this,this,e),this.check()}transformByQuaternion(e){return qn(this,this,e),this.check()}applyMatrix4(e){return e.transform(this,this),this}};function Xr(){const t=new Xn(4);return Xn!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Pu(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Kr(t,e,i){i=i*.5;const n=Math.sin(i);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(i),t}function Jr(t,e,i){const n=e[0],r=e[1],s=e[2],o=e[3],a=i[0],c=i[1],l=i[2],u=i[3];return t[0]=n*u+o*a+r*l-s*c,t[1]=r*u+o*c+s*a-n*l,t[2]=s*u+o*l+n*c-r*a,t[3]=o*u-n*a-r*c-s*l,t}function Eu(t,e,i){i*=.5;const n=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(i),c=Math.cos(i);return t[0]=n*c+o*a,t[1]=r*c+s*a,t[2]=s*c-r*a,t[3]=o*c-n*a,t}function Su(t,e,i){i*=.5;const n=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(i),c=Math.cos(i);return t[0]=n*c-s*a,t[1]=r*c+o*a,t[2]=s*c+n*a,t[3]=o*c-r*a,t}function xu(t,e,i){i*=.5;const n=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(i),c=Math.cos(i);return t[0]=n*c+r*a,t[1]=r*c-n*a,t[2]=s*c+o*a,t[3]=o*c-s*a,t}function Mu(t,e){const i=e[0],n=e[1],r=e[2];return t[0]=i,t[1]=n,t[2]=r,t[3]=Math.sqrt(Math.abs(1-i*i-n*n-r*r)),t}function Ce(t,e,i,n){const r=e[0],s=e[1],o=e[2],a=e[3];let c=i[0],l=i[1],u=i[2],h=i[3],f,d,p,g,m;return f=r*c+s*l+o*u+a*h,f<0&&(f=-f,c=-c,l=-l,u=-u,h=-h),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),p=Math.sin((1-n)*d)/m,g=Math.sin(n*d)/m):(p=1-n,g=n),t[0]=p*r+g*c,t[1]=p*s+g*l,t[2]=p*o+g*u,t[3]=p*a+g*h,t}function Tu(t,e){const i=e[0],n=e[1],r=e[2],s=e[3],o=i*i+n*n+r*r+s*s,a=o?1/o:0;return t[0]=-i*a,t[1]=-n*a,t[2]=-r*a,t[3]=s*a,t}function Cu(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Qr(t,e){const i=e[0]+e[4]+e[8];let n;if(i>0)n=Math.sqrt(i+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);const s=(r+1)%3,o=(r+2)%3;n=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),t[r]=.5*n,n=.5/n,t[3]=(e[s*3+o]-e[o*3+s])*n,t[s]=(e[s*3+r]+e[r*3+s])*n,t[o]=(e[o*3+r]+e[r*3+o])*n}return t}var Au=ec,Lu=ui,Iu=cc,ku=Na,Ru=Za,Ou=Ua,ts=ac,Du=(function(){const t=Ya(),e=Zn(1,0,0),i=Zn(0,1,0);return function(n,r,s){const o=me(r,s);return o<-.999999?(Dt(t,e,r),$n(t)<1e-6&&Dt(t,i,r),Yn(t,t),Kr(n,t,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(Dt(t,r,s),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+o,ts(n,n))}})();(function(){const t=Xr(),e=Xr();return function(i,n,r,s,o,a){return Ce(t,n,o,a),Ce(e,r,s,a),Ce(i,t,e,2*a*(1-a)),i}})(),(function(){const t=lc();return function(e,i,n,r){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=r[0],t[4]=r[1],t[7]=r[2],t[2]=-i[0],t[5]=-i[1],t[8]=-i[2],ts(e,Qr(e,t))}})();var Bu=[0,0,0,1],es=class extends Qa{constructor(t=0,e=0,i=0,n=1){super(-0,-0,-0,-0),Array.isArray(t)&&arguments.length===1?this.copy(t):this.set(t,e,i,n)}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this.check()}set(t,e,i,n){return this[0]=t,this[1]=e,this[2]=i,this[3]=n,this.check()}fromObject(t){return this[0]=t.x,this[1]=t.y,this[2]=t.z,this[3]=t.w,this.check()}fromMatrix3(t){return Qr(this,t),this.check()}fromAxisRotation(t,e){return Kr(this,t,e),this.check()}identity(){return Pu(this),this.check()}setAxisAngle(t,e){return this.fromAxisRotation(t,e)}get ELEMENTS(){return 4}get x(){return this[0]}set x(t){this[0]=U(t)}get y(){return this[1]}set y(t){this[1]=U(t)}get z(){return this[2]}set z(t){this[2]=U(t)}get w(){return this[3]}set w(t){this[3]=U(t)}len(){return Ru(this)}lengthSquared(){return Ou(this)}dot(t){return Iu(this,t)}rotationTo(t,e){return Du(this,t,e),this.check()}add(t){return Au(this,this,t),this.check()}calculateW(){return Mu(this,this),this.check()}conjugate(){return Cu(this,this),this.check()}invert(){return Tu(this,this),this.check()}lerp(t,e,i){return i===void 0?this.lerp(this,t,e):(ku(this,t,e,i),this.check())}multiplyRight(t){return Jr(this,this,t),this.check()}multiplyLeft(t){return Jr(this,t,this),this.check()}normalize(){const t=this.len(),e=t>0?1/t:0;return this[0]=this[0]*e,this[1]=this[1]*e,this[2]=this[2]*e,this[3]=this[3]*e,t===0&&(this[3]=1),this.check()}rotateX(t){return Eu(this,this,t),this.check()}rotateY(t){return Su(this,this,t),this.check()}rotateZ(t){return xu(this,this,t),this.check()}scale(t){return Lu(this,this,t),this.check()}slerp(t,e,i){let n,r,s;switch(arguments.length){case 1:({start:n=Bu,target:r,ratio:s}=t);break;case 2:n=this,r=t,s=e;break;default:n=t,r=e,s=i}return Ce(this,n,r,s),this.check()}transformVector4(t,e=new wu){return Wa(e,t,this),nc(e,4)}lengthSq(){return this.lengthSquared()}setFromAxisAngle(t,e){return this.setAxisAngle(t,e)}premultiply(t){return this.multiplyLeft(t)}multiply(t){return this.multiplyRight(t)}},is=1e-6,zu=6371e3,Ae=class Ta{constructor({phi:e=0,theta:i=0,radius:n=1,bearing:r,pitch:s,altitude:o,radiusScale:a=zu}={}){this.phi=e,this.theta=i,this.radius=n||o||1,this.radiusScale=a||1,r!==void 0&&(this.bearing=r),s!==void 0&&(this.pitch=s),this.check()}toString(){return this.formatString(fi)}formatString({printTypes:e=!1}){const i=Ha;return`${e?"Spherical":""}[rho:${i(this.radius)},theta:${i(this.theta)},phi:${i(this.phi)}]`}equals(e){return yt(this.radius,e.radius)&&yt(this.theta,e.theta)&&yt(this.phi,e.phi)}exactEquals(e){return this.radius===e.radius&&this.theta===e.theta&&this.phi===e.phi}get bearing(){return 180-Rt(this.phi)}set bearing(e){this.phi=Math.PI-_e(e)}get pitch(){return Rt(this.theta)}set pitch(e){this.theta=_e(e)}get longitude(){return Rt(this.phi)}get latitude(){return Rt(this.theta)}get lng(){return Rt(this.phi)}get lat(){return Rt(this.theta)}get z(){return(this.radius-1)*this.radiusScale}set(e,i,n){return this.radius=e,this.phi=i,this.theta=n,this.check()}clone(){return new Ta().copy(this)}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this.check()}fromLngLatZ([e,i,n]){return this.radius=1+n/this.radiusScale,this.phi=_e(i),this.theta=_e(e),this.check()}fromVector3(e){return this.radius=qa(e),this.radius>0&&(this.theta=Math.atan2(e[0],e[1]),this.phi=Math.acos(T(e[2]/this.radius,-1,1))),this.check()}toVector3(){return new $(0,0,this.radius).rotateX({radians:this.theta}).rotateZ({radians:this.phi})}makeSafe(){return this.phi=Math.max(is,Math.min(Math.PI-is,this.phi)),this}check(){if(!Number.isFinite(this.phi)||!Number.isFinite(this.theta)||!(this.radius>0))throw new Error("SphericalCoordinates: some fields set to invalid numbers");return this}};function ns(t,e=[],i=0){const n=Math.fround(t),r=t-n;return e[i]=n,e[i+1]=r,e}function Nu(t){return t-Math.fround(t)}function Uu(t){const e=new Float32Array(32);for(let i=0;i<4;++i)for(let n=0;n<4;++n){const r=i*4+n;ns(t[n*4+i],e,r*2)}return e}var rs=`
layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,ju={name:"fp64arithmetic",source:`struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64Bits {
  sign: u32,
  exponent: i32,
  significand: vec2u,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}
#endif

fn fp64_u64_is_zero(value: vec2u) -> bool {
  return value.x == 0u && value.y == 0u;
}

fn fp64_u64_compare(a: vec2u, b: vec2u) -> i32 {
  if (a.x != b.x) {
    return select(-1, 1, a.x > b.x);
  }
  if (a.y != b.y) {
    return select(-1, 1, a.y > b.y);
  }
  return 0;
}

fn fp64_u64_add(a: vec2u, b: vec2u) -> vec2u {
  let low = a.y + b.y;
  let carry = select(0u, 1u, low < a.y);
  return vec2u(a.x + b.x + carry, low);
}

fn fp64_u64_sub(a: vec2u, b: vec2u) -> vec2u {
  let borrow = select(0u, 1u, a.y < b.y);
  return vec2u(a.x - b.x - borrow, a.y - b.y);
}

fn fp64_u64_shift_left(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u((value.x << shift) | (value.y >> (32u - shift)), value.y << shift);
  }
  if (shift == 32u) {
    return vec2u(value.y, 0u);
  }
  if (shift < 64u) {
    return vec2u(value.y << (shift - 32u), 0u);
  }
  return vec2u(0u);
}

fn fp64_u64_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u(value.x >> shift, (value.y >> shift) | (value.x << (32u - shift)));
  }
  if (shift == 32u) {
    return vec2u(0u, value.x);
  }
  if (shift < 64u) {
    return vec2u(0u, value.x >> (shift - 32u));
  }
  return vec2u(0u);
}

fn fp64_u64_get_bit(value: vec2u, bitIndex: u32) -> bool {
  if (bitIndex >= 64u) {
    return false;
  }
  if (bitIndex >= 32u) {
    return ((value.x >> (bitIndex - 32u)) & 1u) != 0u;
  }
  return ((value.y >> bitIndex) & 1u) != 0u;
}

fn fp64_u64_has_bits_below(value: vec2u, bitCount: u32) -> bool {
  if (bitCount == 0u) {
    return false;
  }
  if (bitCount >= 64u) {
    return !fp64_u64_is_zero(value);
  }
  if (bitCount > 32u) {
    let highBitCount = bitCount - 32u;
    let highMask = (1u << highBitCount) - 1u;
    return value.y != 0u || (value.x & highMask) != 0u;
  }
  if (bitCount == 32u) {
    return value.y != 0u;
  }
  let lowMask = (1u << bitCount) - 1u;
  return (value.y & lowMask) != 0u;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_u64_shift_right_sticky(value: vec2u, shift: u32) -> vec2u {
  var shifted = fp64_u64_shift_right(value, shift);
  if (fp64_u64_has_bits_below(value, shift)) {
    shifted.y = shifted.y | 1u;
  }
  return shifted;
}
#endif

fn fp64_u64_count_leading_zeros(value: vec2u) -> u32 {
  if (value.x != 0u) {
    return countLeadingZeros(value.x);
  }
  return 32u + countLeadingZeros(value.y);
}

fn fp64_round_shift_right_to_u32(value: vec2u, shift: u32) -> u32 {
  if (shift == 0u) {
    return value.y;
  }

  let truncated = fp64_u64_shift_right(value, shift);
  var rounded = truncated.y;
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded & 1u) == 1u)) {
    rounded = rounded + 1u;
  }
  return rounded;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_round_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }

  var rounded = fp64_u64_shift_right(value, shift);
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded.y & 1u) == 1u)) {
    rounded = fp64_u64_add(rounded, vec2u(0u, 1u));
  }
  return rounded;
}
#endif

fn fp64_make_f32_bits_from_u64(sign: u32, significand: vec2u, baseExponent: i32) -> u32 {
  if (fp64_u64_is_zero(significand)) {
    return sign << 31u;
  }

  let leadingZeros = fp64_u64_count_leading_zeros(significand);
  let mostSignificantBit = 63u - leadingZeros;
  var exponent = baseExponent + i32(mostSignificantBit);

  if (exponent > 127) {
    return (sign << 31u) | 0x7f800000u;
  }

  if (exponent >= -126) {
    let shift = i32(mostSignificantBit) - 23;
    var significand24: u32;
    if (shift > 0) {
      significand24 = fp64_round_shift_right_to_u32(significand, u32(shift));
    } else {
      significand24 = fp64_u64_shift_left(significand, u32(-shift)).y;
    }

    if (significand24 >= 0x1000000u) {
      significand24 = significand24 >> 1u;
      exponent = exponent + 1;
      if (exponent > 127) {
        return (sign << 31u) | 0x7f800000u;
      }
    }

    return (sign << 31u) | (u32(exponent + 127) << 23u) | (significand24 & 0x7fffffu);
  }

  let scaleExponent = baseExponent + 149;
  var mantissa: u32;
  if (scaleExponent >= 0) {
    mantissa = fp64_u64_shift_left(significand, u32(scaleExponent)).y;
  } else {
    mantissa = fp64_round_shift_right_to_u32(significand, u32(-scaleExponent));
  }

  if (mantissa >= 0x800000u) {
    return (sign << 31u) | 0x00800000u;
  }
  return (sign << 31u) | mantissa;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_decode_bits(bits: vec2u) -> Fp64Bits {
  let sign = bits.x >> 31u;
  let exponentBits = (bits.x >> 20u) & 0x7ffu;
  let fractionHigh = bits.x & 0xfffffu;
  let fractionLow = bits.y;
  let fraction = vec2u(fractionHigh, fractionLow);

  if (exponentBits == 0x7ffu) {
    let isInf = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, 0, vec2u(0u), false, isInf, !isInf);
  }

  if (exponentBits == 0u) {
    let isZero = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, -1022, fraction, isZero, false, false);
  }

  return Fp64Bits(sign, i32(exponentBits) - 1023, vec2u((1u << 20u) | fractionHigh, fractionLow), false, false, false);
}

fn fp64_finite_magnitude_compare(a: Fp64Bits, b: Fp64Bits) -> i32 {
  if (a.exponent != b.exponent) {
    return select(-1, 1, a.exponent > b.exponent);
  }
  return fp64_u64_compare(a.significand, b.significand);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64RawF32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent. This shared
// integer representation lets normalization remain independent of the
// selected double-single arithmetic implementation.
fn fp64_decode_raw_f32_bits(bits: u32) -> Fp64RawF32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64RawF32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64RawF32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64RawF32Bits(
    sign,
    i32(exponentBits) - 150,
    0x800000u | fraction,
    false,
    false,
    false
  );
}

fn fp64_raw_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_raw_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_raw_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return 0u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;
  if (exactShift >= 64 || highShift >= 64) {
    return 0u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_raw_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let rawLowBits = fp64_make_raw_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  let lowBits = select(rawLowBits, 0u, (rawLowBits & 0x7fffffffu) == 0u);
  if ((highBits & 0x7fffffffu) == 0u && (lowBits & 0x7fffffffu) == 0u) {
    return vec2u(0u);
  }
  return vec2u(highBits, lowBits);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
// Round an arithmetic accumulator to binary64 before splitting it. The
// aligned add/subtract paths retain three guard bits plus a sticky bit, which
// is sufficient for round-to-nearest-even at the binary64 boundary.
fn fp64_split_binary64_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }

  let mostSignificantBit = 63u - fp64_u64_count_leading_zeros(magnitude);
  let exponent = baseExponent + i32(mostSignificantBit);
  if (exponent > 1023) {
    return vec2u((sign << 31u) | 0x7f800000u, 0u);
  }

  var roundedMagnitude = magnitude;
  var roundedBaseExponent = baseExponent;
  if (exponent >= -1022) {
    if (mostSignificantBit > 52u) {
      let shift = mostSignificantBit - 52u;
      roundedMagnitude = fp64_round_shift_right(magnitude, shift);
      roundedBaseExponent = baseExponent + i32(shift);
    }
  } else {
    let shift = -1074 - baseExponent;
    if (shift > 0) {
      roundedMagnitude = fp64_round_shift_right(magnitude, u32(shift));
      roundedBaseExponent = -1074;
    }
  }

  if (fp64_u64_is_zero(roundedMagnitude)) {
    return vec2u(0u);
  }
  return fp64_split_raw_accumulator_bits(sign, roundedMagnitude, roundedBaseExponent);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_add_raw_f32_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_raw_f32_bits(aBits);
  let b = fp64_decode_raw_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = abs(a.baseExponent - b.baseExponent);
  if (exponentDifference > 25) {
    if (fp64_raw_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_raw_accumulator_bits(
    resultSign,
    resultMagnitude,
    commonBaseExponent
  );
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_add_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_sub_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_add_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

fn fp64_sub_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

// Subtract two raw binary64 values and round the exact result once to f32.
// The input words are canonical high/low words: .x contains sign/exponent/high
// fraction bits, and .y contains the low 32 fraction bits.
fn sub_fp64u32_to_f32_bits(aBits: vec2u, bBits: vec2u) -> u32 {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return 0x7fc00000u;
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return (a.sign << 31u) | 0x7f800000u;
    }
    return 0x7fc00000u;
  }
  if (a.isInf) {
    return (a.sign << 31u) | 0x7f800000u;
  }
  if (b.isInf) {
    return (bSubtractionSign << 31u) | 0x7f800000u;
  }
  if (a.isZero && b.isZero) {
    return select(0u, 0x80000000u, a.sign == 1u && b.sign == 0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return 0u;
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_f32_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_f32_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_f32(aBits: vec2u, bBits: vec2u) -> f32 {
  return bitcast<f32>(sub_fp64u32_to_f32_bits(aBits, bBits));
}

// Subtract two raw binary64 values, round once to binary64, then split the
// result into normalized f32 limbs. Finite results must fit within the f32
// exponent range; larger magnitudes map to infinity and smaller magnitudes
// map to zero. The input words use canonical high/low word order.
fn sub_fp64u32_to_fp64_bits(aBits: vec2u, bBits: vec2u) -> vec2u {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
    }
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf) {
    return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
  }
  if (b.isInf) {
    return vec2u((bSubtractionSign << 31u) | 0x7f800000u, 0u);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return vec2u(0u);
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_fp64_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_fp64(aBits: vec2u, bBits: vec2u) -> vec2f {
  let resultBits = sub_fp64u32_to_fp64_bits(aBits, bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}
#endif

#ifdef LUMA_FP64_INTEGER_ARITHMETIC
struct Fp64F32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent.
fn fp64_decode_f32_bits(bits: u32) -> Fp64F32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64F32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64F32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64F32Bits(sign, i32(exponentBits) - 150, 0x800000u | fraction, false, false, false);
}

fn fp64_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return exactSign << 31u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;

  // A normal two-sum/two-product residual never needs a shift this large.
  // This guard gives deterministic underflow behavior outside that contract.
  if (exactShift >= 64 || highShift >= 64) {
    return exactSign << 31u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let lowBits = fp64_make_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  return vec2u(highBits, lowBits);
}

fn fp64_two_sum_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u((a.sign & b.sign) << 31u, 0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = select(
    b.baseExponent - a.baseExponent,
    a.baseExponent - b.baseExponent,
    a.baseExponent >= b.baseExponent
  );

  // Beyond half an ulp, rounding cannot change the larger operand. Returning
  // the smaller operand intact also avoids an unbounded integer alignment.
  // At a power-of-two boundary the spacing below the larger operand is half
  // the spacing above it, so an opposite-sign gap-25 operand can still change
  // the rounded high limb. Gap 26 is the first universally safe early-out.
  if (exponentDifference > 25) {
    if (fp64_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u, 0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_accumulator_bits(resultSign, resultMagnitude, commonBaseExponent);
}

fn fp64_two_sum_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_multiply_significands(a: u32, b: u32) -> vec2u {
  let aLow = a & 0xffffu;
  let aHigh = a >> 16u;
  let bLow = b & 0xffffu;
  let bHigh = b >> 16u;
  let lowProduct = aLow * bLow;
  let crossProduct = aLow * bHigh + aHigh * bLow;
  let highProduct = aHigh * bHigh;

  var result = vec2u(0u, lowProduct);
  result = fp64_u64_add(
    result,
    fp64_u64_shift_left(vec2u(0u, crossProduct), 16u)
  );
  result = fp64_u64_add(result, vec2u(highProduct, 0u));
  return result;
}

fn fp64_two_prod_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);
  let resultSign = a.sign ^ b.sign;

  if (a.isNan || b.isNan || ((a.isZero || b.isZero) && (a.isInf || b.isInf))) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    return vec2u((resultSign << 31u) | 0x7f800000u, resultSign << 31u);
  }
  if (a.isZero || b.isZero) {
    return vec2u(resultSign << 31u, resultSign << 31u);
  }

  let magnitude = fp64_multiply_significands(a.significand, b.significand);
  return fp64_split_accumulator_bits(
    resultSign,
    magnitude,
    a.baseExponent + b.baseExponent
  );
}

fn fp64_two_prod_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_prod_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_round_add_integer(a: f32, b: f32) -> f32 {
  return fp64_two_sum_integer(a, b).x;
}

fn fp64_round_mul_integer(a: f32, b: f32) -> f32 {
  return fp64_two_prod_integer(a, b).x;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_finite_exponent(value: Fp64F32Bits) -> i32 {
  let mostSignificantBit = 31u - countLeadingZeros(value.significand);
  return value.baseExponent + i32(mostSignificantBit);
}

fn fp64_scale_f32_integer(value: f32, exponent: i32) -> f32 {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(value));
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return value;
  }
  let resultBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent + exponent
  );
  return bitcast<f32>(resultBits);
}

// Divide normalized significands so the hardware operation cannot overflow,
// underflow, or flush a subnormal result. Reapply the exponent with integer
// packing, which also produces subnormal correction limbs without relying on
// floating-point arithmetic to preserve them.
fn fp64_divide_f32_integer(aValue: f32, bValue: f32) -> f32 {
  let a = fp64_decode_f32_bits(bitcast<u32>(aValue));
  let b = fp64_decode_f32_bits(bitcast<u32>(bValue));
  if (a.isZero || b.isZero || a.isInf || b.isInf || a.isNan || b.isNan) {
    return aValue / bValue;
  }

  let aMostSignificantBit = 31u - countLeadingZeros(a.significand);
  let bMostSignificantBit = 31u - countLeadingZeros(b.significand);
  let normalizedABits = fp64_make_f32_bits_from_u64(
    a.sign,
    vec2u(0u, a.significand),
    -i32(aMostSignificantBit)
  );
  let normalizedBBits = fp64_make_f32_bits_from_u64(
    b.sign,
    vec2u(0u, b.significand),
    -i32(bMostSignificantBit)
  );
  let normalizedQuotient = bitcast<f32>(normalizedABits) / bitcast<f32>(normalizedBBits);
  let quotient = fp64_decode_f32_bits(bitcast<u32>(normalizedQuotient));
  let exponentShift =
    a.baseExponent + i32(aMostSignificantBit) -
    b.baseExponent - i32(bMostSignificantBit);
  let quotientBits = fp64_make_f32_bits_from_u64(
    quotient.sign,
    vec2u(0u, quotient.significand),
    quotient.baseExponent + exponentShift
  );
  return bitcast<f32>(quotientBits);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn split(a: f32) -> vec2f {
  let aBits = bitcast<u32>(a);
  let decoded = fp64_decode_f32_bits(aBits);
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return vec2f(a, 0.0);
  }

  var roundedHigh = decoded.significand >> 12u;
  let remainder = decoded.significand & 0xfffu;
  if (remainder > 0x800u || (remainder == 0x800u && (roundedHigh & 1u) == 1u)) {
    roundedHigh = roundedHigh + 1u;
  }
  var highMagnitude = vec2u(0u, roundedHigh << 12u);
  var highBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    highMagnitude,
    decoded.baseExponent
  );
  // Rounding the high limb of a maximum-exponent value can overflow even
  // though the original value is finite. Truncate only in that boundary case
  // so split remains an exact finite decomposition.
  if (fp64_decode_f32_bits(highBits).isInf) {
    roundedHigh = decoded.significand >> 12u;
    highMagnitude = vec2u(0u, roundedHigh << 12u);
    highBits = fp64_make_f32_bits_from_u64(
      decoded.sign,
      highMagnitude,
      decoded.baseExponent
    );
  }
  let lowBits = fp64_make_residual_f32_bits(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent,
    highBits
  );
  return vec2f(bitcast<f32>(highBits), bitcast<f32>(lowBits));
}

fn split2(a: vec2f) -> vec2f {
  var result = split(a.x);
  result.y = fp64_round_add_integer(result.y, a.y);
  return result;
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn quickTwoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}
#endif

fn twoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let bBits = bitcast<u32>(b) ^ 0x80000000u;
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn twoSqr(a: f32) -> vec2f {
  return fp64_two_prod_integer(a, a);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  return fp64_two_prod_integer(a, b);
}
#endif

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var sum = fp64_two_sum_integer(a.x, b.x);
  let lowSum = fp64_two_sum_integer(a.y, b.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.x);
  sum = fp64_two_sum_integer(sum.x, sum.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.y);
  return fp64_two_sum_integer(sum.x, sum.y);
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  let negatedB = vec2f(
    bitcast<f32>(bitcast<u32>(b.x) ^ 0x80000000u),
    bitcast<f32>(bitcast<u32>(b.y) ^ 0x80000000u)
  );
  return sum_fp64(a, negatedB);
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var product = fp64_two_prod_integer(a.x, b.x);
  let crossProduct1 = fp64_round_mul_integer(a.x, b.y);
  product.y = fp64_round_add_integer(product.y, crossProduct1);
  product = fp64_two_sum_integer(product.x, product.y);
  let crossProduct2 = fp64_round_mul_integer(a.y, b.x);
  product.y = fp64_round_add_integer(product.y, crossProduct2);
  return fp64_two_sum_integer(product.x, product.y);
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_scale_fp64_integer(value: vec2f, exponent: i32) -> vec2f {
  let high = fp64_scale_f32_integer(value.x, exponent);
  let low = fp64_scale_f32_integer(value.y, exponent);
  return sum_fp64(vec2f(high, 0.0), vec2f(low, 0.0));
}

fn fp64_div_fp64_normalized(a: vec2f, b: vec2f) -> vec2f {
  let quotientHigh = fp64_divide_f32_integer(a.x, b.x);
  var quotient = vec2f(quotientHigh, 0.0);

  let remainder = sub_fp64(a, mul_fp64(b, quotient));
  let quotientLow = fp64_divide_f32_integer(remainder.x, b.x);
  quotient = sum_fp64(quotient, vec2f(quotientLow, 0.0));

  let secondRemainder = sub_fp64(a, mul_fp64(b, quotient));
  let correction = fp64_divide_f32_integer(secondRemainder.x, b.x);
  return sum_fp64(quotient, vec2f(correction, 0.0));
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let decodedA = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedB = fp64_decode_f32_bits(bitcast<u32>(b.x));
  if (
    decodedA.isZero || decodedB.isZero ||
    decodedA.isInf || decodedB.isInf ||
    decodedA.isNan || decodedB.isNan
  ) {
    return fp64_div_fp64_normalized(a, b);
  }

  let exponentA = fp64_f32_finite_exponent(decodedA);
  let exponentB = fp64_f32_finite_exponent(decodedB);
  // Correct the quotient near unity so b * q and the remainder stay clear of
  // both f32 underflow and overflow. The exponent difference is applied once.
  let normalizedA = fp64_scale_fp64_integer(a, -exponentA);
  let normalizedB = fp64_scale_fp64_integer(b, -exponentB);
  let normalizedQuotient = fp64_div_fp64_normalized(normalizedA, normalizedB);
  return fp64_scale_fp64_integer(normalizedQuotient, exponentA - exponentB);
}

fn fp64_sqrt_fp64_normalized(a: vec2f) -> vec2f {
  let estimate = sqrt(a.x);
  let difference = sub_fp64(a, fp64_two_prod_integer(estimate, estimate)).x;
  let denominator = fp64_round_add_integer(estimate, estimate);
  let correction = fp64_divide_f32_integer(difference, denominator);
  return sum_fp64(vec2f(estimate, 0.0), vec2f(correction, 0.0));
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedLow = fp64_decode_f32_bits(bitcast<u32>(a.y));
  if (decoded.isZero && decodedLow.isZero) {
    return vec2f(0.0, 0.0);
  }
  if (decoded.sign == 1u) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  if (decoded.isInf || decoded.isNan) {
    return fp64_sqrt_fp64_normalized(a);
  }
  let exponent = fp64_f32_finite_exponent(decoded);
  // An even scale lets the final square-root rescale use an integer exponent.
  let evenExponent = exponent - (exponent & 1);
  let normalizedA = fp64_scale_fp64_integer(a, -evenExponent);
  let normalizedRoot = fp64_sqrt_fp64_normalized(normalizedA);
  return fp64_scale_fp64_integer(normalizedRoot, evenExponent / 2);
}
#endif

#else
fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
#endif
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_bits_is_nan(bits: u32) -> bool {
  return (bits & 0x7fffffffu) > 0x7f800000u;
}

fn fp64_f32_bits_is_inf(bits: u32) -> bool {
  return (bits & 0x7fffffffu) == 0x7f800000u;
}

fn fp64_compare_f32_bits(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == 0u && bMagnitude == 0u) {
    return 0;
  }
  let aSign = aBits >> 31u;
  let bSign = bBits >> 31u;
  if (aSign != bSign) {
    return select(1, -1, aSign == 1u);
  }
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  let magnitudeComparison = select(-1, 1, aMagnitude > bMagnitude);
  return select(magnitudeComparison, -magnitudeComparison, aSign == 1u);
}

// Normalize an arbitrary pair of finite f32 limbs with integer accumulation.
// This is independent of LUMA_FP64_INTEGER_ARITHMETIC and canonicalizes every
// representation of zero to vec2f(+0.0, +0.0).
fn normalize_fp64(value: vec2f) -> vec2f {
  let resultBits = fp64_add_raw_f32_bits(bitcast<u32>(value.x), bitcast<u32>(value.y));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn is_nan_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  return fp64_f32_bits_is_nan(bitcast<u32>(normalized.x)) ||
    fp64_f32_bits_is_nan(bitcast<u32>(normalized.y));
}

fn is_finite_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  return !fp64_f32_bits_is_nan(highBits) && !fp64_f32_bits_is_nan(lowBits) &&
    !fp64_f32_bits_is_inf(highBits) && !fp64_f32_bits_is_inf(lowBits);
}

// Returns -1, 0, or 1. NaN is unordered and returns 0; call is_nan_fp64 or
// is_finite_fp64 first when 0 must mean a finite zero.
fn sign_fp64(value: vec2f) -> i32 {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  if (fp64_f32_bits_is_nan(highBits) || fp64_f32_bits_is_nan(lowBits)) {
    return 0;
  }
  if ((highBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (highBits >> 31u) == 1u);
  }
  if ((lowBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (lowBits >> 31u) == 1u);
  }
  return 0;
}

// Compares double-single values and returns -1, 0, or 1. NaN is unordered
// and returns 0; callers that require equality semantics must first check
// is_nan_fp64 or is_finite_fp64.
fn compare_fp64(a: vec2f, b: vec2f) -> i32 {
  let normalizedA = normalize_fp64(a);
  let normalizedB = normalize_fp64(b);
  let aHighBits = bitcast<u32>(normalizedA.x);
  let aLowBits = bitcast<u32>(normalizedA.y);
  let bHighBits = bitcast<u32>(normalizedB.x);
  let bLowBits = bitcast<u32>(normalizedB.y);
  if (fp64_f32_bits_is_nan(aHighBits) || fp64_f32_bits_is_nan(aLowBits) ||
      fp64_f32_bits_is_nan(bHighBits) || fp64_f32_bits_is_nan(bLowBits)) {
    return 0;
  }
  let highComparison = fp64_compare_f32_bits(aHighBits, bHighBits);
  if (highComparison != 0) {
    return highComparison;
  }
  return fp64_compare_f32_bits(aLowBits, bLowBits);
}
#endif
`,fs:rs,vs:rs,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:"f32",SPLIT:"f32"},fp64ify:ns,fp64LowPart:Nu,fp64ifyMatrix4:Uu},at={RGBA8UNORM:0,RGBA16FLOAT:1,RGBA32FLOAT:2},Vu={rgba8unorm:4,rgba16float:8,rgba32float:16};at.RGBA8UNORM,at.RGBA16FLOAT,at.RGBA32FLOAT,at.RGBA8UNORM,at.RGBA16FLOAT,at.RGBA32FLOAT;var Fu={useByteColors:"f32"},Gu={useByteColors:!0};at.RGBA8UNORM,Vu.rgba8unorm/Uint32Array.BYTES_PER_ELEMENT,os("colors");var ss=os("floatColors");as("colors");var $u=as("floatColors");`${at.RGBA8UNORM}${at.RGBA16FLOAT}`;function os(t){return`layout(std140) uniform ${t}Uniforms {
  float useByteColors;
} ${t};

vec3 ${t}_normalize(vec3 inputColor) {
  return ${t}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${t}_normalize(vec4 inputColor) {
  return ${t}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${t}_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 ${t}_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 ${t}_premultiply_alpha(vec4 inputColor) {
  return ${t}_premultiplyAlpha(inputColor);
}

vec4 ${t}_unpremultiply_alpha(vec4 inputColor) {
  return ${t}_unpremultiplyAlpha(inputColor);
}
`}function as(t){return`struct ${t}Uniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> ${t} : ${t}Uniforms;

fn ${t}_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, ${t}.useByteColors > 0.5);
}

fn ${t}_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, ${t}.useByteColors > 0.5);
}

fn ${t}_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn ${t}_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn ${t}_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${t}_premultiplyAlpha(inputColor);
}

fn ${t}_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${t}_unpremultiplyAlpha(inputColor);
}
`}var cs={name:"floatColors",props:{},uniforms:{},vs:ss,fs:ss,source:$u,uniformTypes:Fu,defaultUniforms:Gu},ls=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,us=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,hs=`struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,fs={props:{},name:"gouraudMaterial",bindingLayout:[{name:"gouraudMaterial",group:3}],vs:us.replace("phongMaterial","gouraudMaterial"),fs:ls.replace("phongMaterial","gouraudMaterial"),source:hs.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[ir,cs],uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms(t){return{...fs.defaultUniforms,...t}}},ds={name:"phongMaterial",firstBindingSlot:0,bindingLayout:[{name:"phongMaterial",group:3}],dependencies:[ir,cs],source:hs,vs:ls,fs:us,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms(t){return{...ds.defaultUniforms,...t}}},Wu=`struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,ps=`layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,Yu={name:"layer",source:Wu,vs:ps,fs:ps,getUniforms:t=>({opacity:Math.pow(t.opacity,1/2.2)}),uniformTypes:{opacity:"f32"}},Hu={name:"color",dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:t=>({})},Zu=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,gs="#define SMOOTH_EDGE_RADIUS 0.5",ms={name:"geometry",source:Zu,vs:`${gs}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`${gs}

struct FragmentGeometry {
  vec2 uv;
};
FragmentGeometry geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`},A;(function(t){t[t.Start=1]="Start",t[t.Move=2]="Move",t[t.End=4]="End",t[t.Cancel=8]="Cancel"})(A||(A={}));var O;(function(t){t[t.None=0]="None",t[t.Left=1]="Left",t[t.Right=2]="Right",t[t.Up=4]="Up",t[t.Down=8]="Down",t[t.Horizontal=3]="Horizontal",t[t.Vertical=12]="Vertical",t[t.All=15]="All"})(O||(O={}));var w;(function(t){t[t.Possible=1]="Possible",t[t.Began=2]="Began",t[t.Changed=4]="Changed",t[t.Ended=8]="Ended",t[t.Recognized=8]="Recognized",t[t.Cancelled=16]="Cancelled",t[t.Failed=32]="Failed"})(w||(w={}));var qu="auto",Ri="manipulation",Oi="none",Di="pan-x",Bi="pan-y";function Xu(t){if(t.includes("none"))return Oi;const e=t.includes(Di),i=t.includes(Bi);return e&&i?Oi:e||i?e?Di:Bi:t.includes("manipulation")?Ri:qu}var Ku=class{constructor(t,e){this.actions="",this.manager=t,this.set(e)}set(t){t==="compute"&&(t=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=t,this.actions=t)}update(){this.set(this.manager.options.touchAction)}compute(){let t=[];for(const e of this.manager.recognizers)e.options.enable&&(t=t.concat(e.getTouchAction()));return Xu(t.join(" "))}};function Le(t){return t.trim().split(/\s+/g)}function zi(t,e,i){if(t)for(const n of Le(e))t.addEventListener(n,i,!1)}function Ni(t,e,i){if(t)for(const n of Le(e))t.removeEventListener(n,i,!1)}function _s(t){return(t.ownerDocument||t).defaultView}function Ju(t,e){let i=t;for(;i;){if(i===e)return!0;i=i.parentNode}return!1}function vs(t){const e=t.length;if(e===1)return{x:Math.round(t[0].clientX),y:Math.round(t[0].clientY)};let i=0,n=0,r=0;for(;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:Math.round(i/e),y:Math.round(n/e)}}function ys(t){const e=[];let i=0;for(;i<t.pointers.length;)e[i]={clientX:Math.round(t.pointers[i].clientX),clientY:Math.round(t.pointers[i].clientY)},i++;return{timeStamp:Date.now(),pointers:e,center:vs(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Ui(t,e){const i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)}function ji(t,e){const i=e.clientX-t.clientX,n=e.clientY-t.clientY;return Math.sqrt(i*i+n*n)}function Qu(t,e){const i=e.x-t.x,n=e.y-t.y;return Math.atan2(n,i)*180/Math.PI}function bs(t,e){const i=e.clientX-t.clientX,n=e.clientY-t.clientY;return Math.atan2(n,i)*180/Math.PI}function Vi(t,e){return t===e?O.None:Math.abs(t)>=Math.abs(e)?t<0?O.Left:O.Right:e<0?O.Up:O.Down}function th(t,e){const i=e.center;let n=t.offsetDelta,r=t.prevDelta;const s=t.prevInput;return(e.eventType===A.Start||s?.eventType===A.End)&&(r=t.prevDelta={x:s?.deltaX||0,y:s?.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),{deltaX:r.x+(i.x-n.x),deltaY:r.y+(i.y-n.y)}}function ws(t,e,i){return{x:e/t||0,y:i/t||0}}function eh(t,e){return ji(e[0],e[1])/ji(t[0],t[1])}function ih(t,e){return bs(e[1],e[0])-bs(t[1],t[0])}function nh(t,e){const i=t.lastInterval||e,n=e.timeStamp-i.timeStamp;let r,s,o,a;if(e.eventType!==A.Cancel&&(n>25||i.velocity===void 0)){const c=e.deltaX-i.deltaX,l=e.deltaY-i.deltaY,u=ws(n,c,l);s=u.x,o=u.y,r=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,a=Vi(c,l),t.lastInterval=e}else r=i.velocity,s=i.velocityX,o=i.velocityY,a=i.direction;e.velocity=r,e.velocityX=s,e.velocityY=o,e.direction=a}function Fi(t,e){return"pointerId"in t?t.pointerId:e}function Ps(t,e){t.movementOrigin=new Map(e.map((i,n)=>[Fi(i,n),{clientX:i.clientX,clientY:i.clientY}])),t.firstMovementTime=void 0}function rh(t,e){const i=e.pointers.map(Fi);if(t.movementOrigin?.size===i.length&&i.every(n=>t.movementOrigin.has(n))||Ps(t,e.pointers),e.distancePerPointer=e.pointers.map((n,r)=>ji(t.movementOrigin.get(i[r]),n)),e.eventType&A.Move&&e.distancePerPointer.some(n=>n>0)&&(t.firstMovementTime??(t.firstMovementTime=e.timeStamp)),e.movementDeltaTime=t.firstMovementTime===void 0?0:e.timeStamp-t.firstMovementTime,e.eventType&(A.End|A.Cancel)){const n=e.changedPointers.map(r=>Fi(r,e.pointers.indexOf(r)));Ps(t,e.pointers.filter((r,s)=>!n.includes(i[s])))}}function sh(t,e){const{session:i}=t,{pointers:n}=e,{length:r}=n;i.firstInput||(i.firstInput=ys(e)),r>1&&!i.firstMultiple?i.firstMultiple=ys(e):r===1&&(i.firstMultiple=!1);const{firstInput:s,firstMultiple:o}=i,a=o?o.center:s.center,c=e.center=vs(n);e.timeStamp=Date.now(),e.deltaTime=e.timeStamp-s.timeStamp,rh(i,e),e.angle=Qu(a,c),e.distance=Ui(a,c);const{deltaX:l,deltaY:u}=th(i,e);e.deltaX=l,e.deltaY=u,e.offsetDirection=Vi(e.deltaX,e.deltaY);const h=ws(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=Math.abs(h.x)>Math.abs(h.y)?h.x:h.y,e.scale=o?eh(o.pointers,n):1,e.rotation=o?ih(o.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length;let f=t.element;return Ju(e.srcEvent.target,f)&&(f=e.srcEvent.target),e.target=f,nh(i,e),e}function oh(t,e,i){const n=i.pointers.length,r=i.changedPointers.length,s=e&A.Start&&n-r===0,o=e&(A.End|A.Cancel)&&n-r===0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e;const a=sh(t,i);t.emit("hammer.input",a),t.recognize(a),t.session.prevInput=a}var ah=class{constructor(t){this.evEl="",this.evWin="",this.evTarget="",this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=t,this.element=t.element,this.target=t.options.inputTarget||t.element}callback(t,e){oh(this.manager,t,e)}init(){zi(this.element,this.evEl,this.domHandler),zi(this.target,this.evTarget,this.domHandler),zi(_s(this.element),this.evWin,this.domHandler)}destroy(){Ni(this.element,this.evEl,this.domHandler),Ni(this.target,this.evTarget,this.domHandler),Ni(_s(this.element),this.evWin,this.domHandler)}},ch={pointerdown:A.Start,pointermove:A.Move,pointerup:A.End,pointercancel:A.Cancel,pointerout:A.Cancel},lh="pointerdown",uh="pointermove pointerup pointercancel",hh=class extends ah{constructor(t){super(t),this.evEl=lh,this.evWin=uh,this.store=this.manager.session.pointerEvents=[],this.init()}handler(t){const{store:e}=this;let i=!1;const n=ch[t.type],r=t.pointerType,s=r==="touch";let o=e.findIndex(a=>a.pointerId===t.pointerId);n&A.Start&&(t.buttons||s)?o<0&&(e.push(t),o=e.length-1):n&(A.End|A.Cancel)&&(i=!0),!(o<0)&&(e[o]=t,this.callback(n,{pointers:e,changedPointers:[t],eventType:n,pointerType:r,srcEvent:t}),i&&e.splice(o,1))}},fh=["","webkit","Moz","MS","ms","o"];function dh(t,e){const i=e[0].toUpperCase()+e.slice(1);for(const n of fh){const r=n?n+i:e;if(r in t)return r}}var ph=1,Es=2,Ss={touchAction:"compute",enable:!0,inputTarget:null,cssProps:{userSelect:"none",userDrag:"none",touchCallout:"none",tapHighlightColor:"rgba(0,0,0,0)"}},gh=class{constructor(t,e){this.options={...Ss,...e,cssProps:{...Ss.cssProps,...e.cssProps},inputTarget:e.inputTarget||t},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new hh(this),this.touchAction=new Ku(this,this.options.touchAction),this.toggleCssProps(!0)}set(t){return Object.assign(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this}stop(t){this.session.stopped=t?Es:ph}recognize(t){const{session:e}=this;if(e.stopped)return;this.session.prevented&&t.srcEvent.preventDefault();let i;const{recognizers:n}=this;let{curRecognizer:r}=e;(!r||r&&r.state&w.Recognized)&&(r=e.curRecognizer=null);let s=0;for(;s<n.length;)i=n[s],e.stopped!==Es&&(!r||i===r||i.canRecognizeWith(r))?i.recognize(t):i.reset(),!r&&i.state&(w.Began|w.Changed|w.Ended)&&(r=e.curRecognizer=i),s++}get(t){const{recognizers:e}=this;for(let i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null}add(t){if(Array.isArray(t)){for(const i of t)this.add(i);return this}const e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t}remove(t){if(Array.isArray(t)){for(const i of t)this.remove(i);return this}const e=typeof t=="string"?this.get(t):t;if(e){const{recognizers:i}=this,n=i.indexOf(e);n!==-1&&(i.splice(n,1),this.touchAction.update())}return this}on(t,e){if(!t||!e)return;const{handlers:i}=this;for(const n of Le(t))i[n]=i[n]||[],i[n].push(e)}off(t,e){if(!t)return;const{handlers:i}=this;for(const n of Le(t))e?i[n]&&i[n].splice(i[n].indexOf(e),1):delete i[n]}emit(t,e){const i=this.handlers[t]&&this.handlers[t].slice();if(!i||!i.length)return;const n=e;n.type=t,n.preventDefault=function(){e.srcEvent.preventDefault()};let r=0;for(;r<i.length;)i[r](n),r++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(t){const{element:e}=this;if(e){for(const[i,n]of Object.entries(this.options.cssProps)){const r=dh(e.style,i);t?(this.oldCssProps[r]=e.style[r],e.style[r]=n):e.style[r]=this.oldCssProps[r]||""}t||(this.oldCssProps={})}}},mh=1;function _h(){return mh++}function xs(t){return t&w.Cancelled?"cancel":t&w.Ended?"end":t&w.Changed?"move":t&w.Began?"start":""}var Gi=class{constructor(t){this.options=t,this.id=_h(),this.state=w.Possible,this.simultaneous={},this.requireFail=[]}set(t){return Object.assign(this.options,t),this.manager.touchAction.update(),this}recognizeWith(t){if(Array.isArray(t)){for(const n of t)this.recognizeWith(n);return this}let e;if(typeof t=="string"){if(e=this.manager.get(t),!e)throw new Error(`Cannot find recognizer ${t}`)}else e=t;const{simultaneous:i}=this;return i[e.id]||(i[e.id]=e,e.recognizeWith(this)),this}dropRecognizeWith(t){if(Array.isArray(t)){for(const i of t)this.dropRecognizeWith(i);return this}let e;return typeof t=="string"?e=this.manager.get(t):e=t,e&&delete this.simultaneous[e.id],this}requireFailure(t){if(Array.isArray(t)){for(const n of t)this.requireFailure(n);return this}let e;if(typeof t=="string"){if(e=this.manager.get(t),!e)throw new Error(`Cannot find recognizer ${t}`)}else e=t;const{requireFail:i}=this;return i.indexOf(e)===-1&&(i.push(e),e.requireFailure(this)),this}dropRequireFailure(t){if(Array.isArray(t)){for(const i of t)this.dropRequireFailure(i);return this}let e;if(typeof t=="string"?e=this.manager.get(t):e=t,e){const i=this.requireFail.indexOf(e);i>-1&&this.requireFail.splice(i,1)}return this}hasRequireFailures(){return!!this.requireFail.find(t=>t.options.enable)}canRecognizeWith(t){return!!this.simultaneous[t.id]}emit(t){if(!t)return;const{state:e}=this;e<w.Ended&&this.manager.emit(this.options.event+xs(e),t),this.manager.emit(this.options.event,t),t.additionalEvent&&this.manager.emit(t.additionalEvent,t),e>=w.Ended&&this.manager.emit(this.options.event+xs(e),t)}tryEmit(t){this.canEmit()?this.emit(t):this.state=w.Failed}canEmit(){let t=0;for(;t<this.requireFail.length;){if(!(this.requireFail[t].state&(w.Failed|w.Possible)))return!1;t++}return!0}recognize(t){const e={...t};if(!this.options.enable){this.reset(),this.state=w.Failed;return}this.state&(w.Recognized|w.Cancelled|w.Failed)&&(this.state=w.Possible),this.state=this.process(e),this.state&(w.Began|w.Changed|w.Ended|w.Cancelled)&&this.tryEmit(e)}getEventNames(){return[this.options.event]}reset(){}};function vh(t){return Math.abs(((t+180)%360+360)%360-180)}function yh(t,e){return(e.distance===void 0||t.distance>=e.distance)&&(e.distancePerPointer===void 0||t.distancePerPointer.length>0&&t.distancePerPointer.every(i=>i>=e.distancePerPointer))&&(e.movementDeltaTime===void 0||t.movementDeltaTime>=e.movementDeltaTime)&&(e.rotation===void 0||vh(t.rotation)>=e.rotation)&&(e.scale===void 0||Math.abs(t.scale-1)>=e.scale)}var bh=class extends Gi{attrTest(t){const e=this.options.pointers;return e===0||t.pointers.length===e}coherentTest(t){const e=this.options.coherent;return!e?.length||e.some(i=>yh(t,i))}process(t){const{state:e}=this,{eventType:i}=t,n=e&(w.Began|w.Changed),r=this.attrTest(t);return n&&(i&A.Cancel||!r)?e|w.Cancelled:n||r?i&A.End?e|w.Ended:e&w.Began?e|w.Changed:w.Began:w.Failed}},wh=["","start","move","end","cancel"],Ph=class extends Gi{constructor(t={}){super({enable:!0,event:"doubleclickdrag",pointers:1,interval:500,time:350,threshold:28,dragThreshold:1,pixelsPerScale:120,...t}),this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}getTouchAction(){return[Ri]}getEventNames(){return wh.map(t=>this.options.event+t)}process(t){const{options:e}=this;return t.pointers.length!==e.pointers?(this.reset(),w.Failed):t.eventType&A.Start?this._handleStart(t):t.eventType&A.Move?this._handleMove(t):t.eventType&A.Cancel?this._handleEnd(t,!0):t.eventType&A.End?this._handleEnd(t,!1):w.Failed}reset(){this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}emit(t){if(t){if(this.state===w.Began){if(!this._drag?.active||this._emittedStart)return;this._emittedStart=!0,this.manager.emit(`${this.options.event}start`,t),this.manager.emit(this.options.event,t);return}if(this.state===w.Changed){if(!this._emittedStart)return;this.manager.emit(`${this.options.event}move`,t),this.manager.emit(this.options.event,t);return}if(this.state===w.Ended){if(!this._emittedStart)return;this.manager.emit(this.options.event,t),this.manager.emit(`${this.options.event}end`,t),this._emittedStart=!1;return}if(this.state===w.Cancelled){if(!this._emittedStart)return;this.manager.emit(this.options.event,t),this.manager.emit(`${this.options.event}cancel`,t),this._emittedStart=!1}}}_handleStart(t){const e=this._getPointerId(t);return this._lastTap&&this._isTapMatch(t,this._lastTap)?(this._tapStart=null,this._lastTap=null,this._drag={startCenter:t.center,pointerId:e,active:!1},this._emittedStart=!1,w.Began):(this._tapStart={center:t.center,timeStamp:t.timeStamp,pointerId:e},this._lastTap=null,this._drag=null,this._emittedStart=!1,w.Failed)}_handleMove(t){if(!this._drag||!this._isSamePointer(t,this._drag.pointerId))return w.Failed;const e=this._drag.startCenter.y-t.center.y;return!this._drag.active&&Math.abs(e)<this.options.dragThreshold?w.Began:(this._drag.active=!0,t.scale=Math.pow(2,e/this.options.pixelsPerScale),this._emittedStart?w.Changed:w.Began)}_handleEnd(t,e){if(this._drag&&this._isSamePointer(t,this._drag.pointerId)){const{active:i,startCenter:n}=this._drag;if(this._drag=null,this._tapStart=null,this._lastTap=null,!i)return this._emittedStart=!1,w.Failed;const r=n.y-t.center.y;return t.scale=Math.pow(2,r/this.options.pixelsPerScale),e?w.Cancelled:w.Ended}return!this._tapStart||!this._isSamePointer(t,this._tapStart.pointerId)?(e&&this.reset(),w.Failed):(this._isValidTap(t)?this._lastTap={center:t.center,timeStamp:t.timeStamp,pointerId:this._tapStart.pointerId}:this._lastTap=null,this._tapStart=null,w.Failed)}_isTapMatch(t,e){return t.timeStamp-e.timeStamp<=this.options.interval&&Ui(t.center,e.center)<=this.options.threshold}_isValidTap(t){return t.deltaTime<=this.options.time&&t.distance<=this.options.threshold}_getPointerId(t){return"pointerId"in t.srcEvent?t.srcEvent.pointerId:null}_isSamePointer(t,e){return e===null||this._getPointerId(t)===e}},Ms=class extends Gi{constructor(t={}){super({enable:!0,event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...t}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[Ri]}process(t){const{options:e}=this,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&A.Start&&this.count===0)return this.failTimeout();if(n&&r&&i){if(t.eventType!==A.End)return this.failTimeout();const s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,o=!this.pCenter||Ui(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,!o||!s?this.count=1:this.count+=1,this._input=t,this.count%e.taps===0)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=w.Recognized,this.tryEmit(this._input)},e.interval),w.Began):w.Recognized}return w.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=w.Failed},this.options.interval),w.Failed}reset(){clearTimeout(this._timer)}emit(t){this.state===w.Recognized&&(t.tapCount=this.count,this.manager.emit(this.options.event,t))}},Ts=class extends bh{constructor(){super(...arguments),this.wheelSession=null,this.wheelSessionUnsubscribe=null,this.handleWheelSessionEvent=t=>{t.device==="trackpad"&&this.handleTrackpadEvent(t)}}set(t){const{wheelSession:e,...i}=t;return e&&e!==this.wheelSession&&(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=null,this.wheelSession=e),super.set(i),this.updateWheelSessionSubscription(),this}getTrackpadInput(t,e={}){const{srcEvent:i}=t,n=e.deltaX??t.deltaX,r=e.deltaY??t.deltaY,s=Vi(n,r),o=Math.sqrt(t.deltaX*t.deltaX+t.deltaY*t.deltaY),a=i;return{pointers:[a,a],changedPointers:[a,a],pointerType:"trackpad",srcEvent:a,eventType:t.eventType,timeStamp:t.timeStamp,deltaTime:t.deltaTime,center:t.center,deltaX:n,deltaY:r,angle:Math.atan2(r,n)*180/Math.PI,distance:Math.sqrt(n*n+r*r),distancePerPointer:[o,o],movementDeltaTime:t.deltaTime,scale:1,rotation:0,direction:s,offsetDirection:s,velocity:t.velocity,velocityX:t.velocityX,velocityY:t.velocityY,overallVelocity:t.overallVelocity,overallVelocityX:t.overallVelocityX,overallVelocityY:t.overallVelocityY,maxPointers:2,target:i.target||this.manager.element,additionalEvent:"",...e}}updateWheelSessionSubscription(){const t=!!(this.wheelSession&&this.options.enable&&this.options.trackpad&&this.options.pointers===2);t&&!this.wheelSessionUnsubscribe?this.wheelSessionUnsubscribe=this.wheelSession.on(this.handleWheelSessionEvent):!t&&this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe(),this.wheelSessionUnsubscribe=null)}},Eh=["","start","move","end","cancel","up","down","left","right"],Cs=class extends Ts{constructor(t={}){super({enable:!0,pointers:1,event:"pan",threshold:10,direction:O.All,trackpad:!1,coherent:[],...t}),this.trackpadGesture=!1,this.pX=null,this.pY=null}getTouchAction(){const{options:{direction:t}}=this,e=[];return t&O.Horizontal&&e.push(Bi),t&O.Vertical&&e.push(Di),e}getEventNames(){return Eh.map(t=>this.options.event+t)}directionTest(t){const{options:e}=this;let i=!0,{distance:n}=t,{direction:r}=t;const s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&O.Horizontal?(r=s===0?O.None:s<0?O.Left:O.Right,i=s!==this.pX,n=Math.abs(t.deltaX)):(r=o===0?O.None:o<0?O.Up:O.Down,i=o!==this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&!!(r&e.direction)}attrTest(t){const e=!!(this.state&w.Began),i=!(this.options.coherent?.length&&t.eventType&(A.End|A.Cancel));return super.attrTest(t)&&(e||i&&this.coherentTest(t)&&this.directionTest(t))}emit(t){this.pX=t.deltaX,this.pY=t.deltaY;const e=O[t.direction].toLowerCase();e&&(t.additionalEvent=this.options.event+e),super.emit(t)}handleTrackpadEvent(t){t.isFirst&&(this.trackpadGesture=!t.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(w.Recognized|w.Cancelled|w.Failed)&&(this.state=w.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(t,{deltaX:-t.deltaX,deltaY:-t.deltaY,velocity:-t.velocity,velocityX:-t.velocityX,velocityY:-t.velocityY,overallVelocity:-t.overallVelocity,overallVelocityX:-t.overallVelocityX,overallVelocityY:-t.overallVelocityY})),t.isFinal&&(this.trackpadGesture=!1))}},Sh=["","start","move","end","cancel","in","out"],xh=class extends Ts{constructor(t={}){super({enable:!0,event:"pinch",threshold:0,pointers:2,trackpad:!1,coherent:[],...t}),this.trackpadGesture=!1}getTouchAction(){return[Oi]}getEventNames(){return Sh.map(t=>this.options.event+t)}attrTest(t){const e=!!this.options.coherent?.length,i=!!(this.state&w.Began),n=!(e&&t.eventType&(A.End|A.Cancel));return super.attrTest(t)&&(i||n&&(e?this.coherentTest(t):Math.abs(t.scale-1)>this.options.threshold))}emit(t){if(t.scale!==1){const e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}super.emit(t)}handleTrackpadEvent(t){t.isFirst&&(this.trackpadGesture=t.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(w.Recognized|w.Cancelled|w.Failed)&&(this.state=w.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(t,{deltaX:0,deltaY:0,velocity:0,velocityX:0,velocityY:0,overallVelocity:0,overallVelocityX:0,overallVelocityY:0,scale:Math.exp(-t.deltaY/100)})),t.isFinal&&(this.trackpadGesture=!1))}},Ie=class{constructor(t,e,i){this.element=t,this.callback=e,this.options=i}listen(t,e){e?this.element.addEventListener(t,this.handleEvent,{passive:!1}):this.element.removeEventListener(t,this.handleEvent)}},Mh=(typeof navigator<"u"&&navigator.userAgent?navigator.userAgent.toLowerCase():"").indexOf("firefox")!==-1,Th=40,Ch=.25,Ah=class extends Ie{constructor(t,e,i){i.enable=i.enable??!1,super(t,e,i),this.handleEvent=n=>{if(!this.options.enable)return;let r=n.deltaY;globalThis.WheelEvent&&(Mh&&n.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(r/=globalThis.devicePixelRatio),n.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(r*=Th)),n.shiftKey&&r&&(r=r*Ch),this.callback({type:"wheel",center:{x:n.clientX,y:n.clientY},delta:-r,device:this.options.wheelSession?.device??"unknown",srcEvent:n,pointerType:"mouse",target:n.target})},i.enable&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{}),this.listen("wheel",!0))}destroy(){this.listen("wheel",!1),this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0}enableEventType(t,e){t==="wheel"&&this.options.enable!==e&&(this.options.enable=e,e&&!this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{})),this.listen("wheel",e),e||(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0))}},Lh=4.000244140625,As=40,Ih=0,kh=1,Rh=40,Ls=40,Oh=120,Dh={classificationDelay:32,endDelay:80},Bh=class{constructor(t,e={}){this.subscriptions=new Map,this.session=null,this.classificationTimer=null,this.endTimer=null,this.pressedControlKeys=new Set,this.listeningForControlKeys=!1,this.handleEvent=i=>{if(!this.hasSubscribers)return"unknown";const n=Nh(i,this.pressedControlKeys.size>0);let r=this.session;if(r&&n.timeStamp-r.lastTimeStamp>=this.options.endDelay){if(this.end(),!this.hasSubscribers)return"unknown";r=null}r?(this.scheduleEnd(),this.addSample(r,n)):(r=this.startPendingSession(n),this.scheduleEnd());let{device:s}=r;return s==="unknown"&&(s=$i(r.samples,!1),s!=="unknown"&&this.begin(r,s)),s},this.finishClassification=()=>{if(this.classificationTimer=null,!this.session||this.session.device!=="unknown")return;const i=this.session,n=$i(i.samples,!0);this.begin(i,n==="unknown"?"mouse":n)},this.end=()=>{if(!this.session)return;if(this.session.device==="unknown"){const n=this.session,r=$i(n.samples,!0);this.begin(n,r==="unknown"?"mouse":r)}if(!this.session)return;const i=this.session;this.emit(A.End,i.lastEvent),this.reset()},this.handleKeyDown=i=>{i.key==="Control"&&this.pressedControlKeys.add(i.code||i.key)},this.handleKeyUp=i=>{i.key==="Control"&&(i.code?this.pressedControlKeys.delete(i.code):this.pressedControlKeys.clear())},this.handleWindowBlur=()=>{this.pressedControlKeys.clear()},this.element=t,this.options={...Dh,...e},this.element?.addEventListener("wheel",this.handleEvent,{passive:!0})}get hasSubscribers(){return this.subscriptions.size>0}get device(){return this.session?.device??"unknown"}on(t){const e={listener:t};return this.subscriptions.set(t,e),this.updateControlKeyEventListeners(),()=>{this.subscriptions.get(t)===e&&this.off(t)}}off(t){this.subscriptions.delete(t),this.updateControlKeyEventListeners(),this.hasSubscribers||this.reset()}cancel(){const t=this.session;t&&t.device!=="unknown"&&this.emit(A.Cancel,t.lastEvent),this.reset()}destroy(){this.cancel(),this.subscriptions.clear(),this.updateControlKeyEventListeners(),this.element?.removeEventListener("wheel",this.handleEvent)}startPendingSession(t){const e={samples:[t],device:"unknown",firstTimeStamp:t.timeStamp,lastTimeStamp:t.timeStamp,totalDeltaX:t.deltaX,totalDeltaY:t.deltaY,velocityX:0,velocityY:0,lastEvent:t.event};return this.session=e,this.classificationTimer=globalThis.setTimeout(this.finishClassification,this.options.classificationDelay),e}addSample(t,e){if(t.samples.push(e),t.lastTimeStamp=e.timeStamp,t.lastEvent=e.event,t.totalDeltaX+=e.deltaX,t.totalDeltaY+=e.deltaY,t.device!=="unknown"){const i=t.samples[t.samples.length-2],n=e.timeStamp-i.timeStamp;t.velocityX=n>0?e.deltaX/n:0,t.velocityY=n>0?e.deltaY/n:0,this.emit(A.Move,e.event,{velocityX:t.velocityX,velocityY:t.velocityY})}}begin(t,e){t.device=e,this.clearClassificationTimer(),this.emit(A.Start,t.samples[0].event);const i=t.lastTimeStamp-t.firstTimeStamp;t.velocityX=i>0?t.totalDeltaX/i:0,t.velocityY=i>0?t.totalDeltaY/i:0,this.emit(A.Move,t.lastEvent,{velocityX:t.velocityX,velocityY:t.velocityY})}scheduleEnd(){this.clearEndTimer(),this.endTimer=globalThis.setTimeout(this.end,this.options.endDelay)}emit(t,e,i){const n=this.session;if(!n||n.device==="unknown")return;const r=t===A.Start,s=t===A.End||t===A.Cancel,o=r?n.firstTimeStamp:n.lastTimeStamp,a=r?0:Math.max(0,o-n.firstTimeStamp),c=r?0:n.totalDeltaX,l=r?0:n.totalDeltaY,u=a>0?c/a:0,h=a>0?l/a:0,f=r?0:i?.velocityX??n.velocityX,d=r?0:i?.velocityY??n.velocityY,p={eventType:t,device:n.device,srcEvent:e,timeStamp:o,center:{x:e.clientX,y:e.clientY},deltaX:c,deltaY:l,deltaTime:a,velocity:Math.abs(f)>Math.abs(d)?f:d,velocityX:f,velocityY:d,overallVelocity:Math.abs(u)>Math.abs(h)?u:h,overallVelocityX:u,overallVelocityY:h,isFirst:r,isFinal:s};for(const{listener:g}of[...this.subscriptions.values()])g(p)}reset(){this.clearClassificationTimer(),this.clearEndTimer(),this.session=null}clearClassificationTimer(){this.classificationTimer!==null&&(globalThis.clearTimeout(this.classificationTimer),this.classificationTimer=null)}clearEndTimer(){this.endTimer!==null&&(globalThis.clearTimeout(this.endTimer),this.endTimer=null)}updateControlKeyEventListeners(){const t=this.hasSubscribers,e=zh();!e||t===this.listeningForControlKeys||(this.listeningForControlKeys=t,t?(e.addEventListener("keydown",this.handleKeyDown,!0),e.addEventListener("keyup",this.handleKeyUp,!0),e.addEventListener("blur",this.handleWindowBlur)):(e.removeEventListener("keydown",this.handleKeyDown,!0),e.removeEventListener("keyup",this.handleKeyUp,!0),e.removeEventListener("blur",this.handleWindowBlur),this.pressedControlKeys.clear()))}};function zh(){return typeof window<"u"?window:globalThis.document?.defaultView}function Nh(t,e){let i=t.deltaX,n=t.deltaY;return t.deltaMode===kh&&(i*=As,n*=As),{event:t,timeStamp:t.timeStamp,deltaX:i,deltaY:n,isControlKeyDown:e}}function $i(t,e){return t.some(({event:i,isControlKeyDown:n})=>i.ctrlKey&&!n)?"trackpad":t.some(({event:i})=>i.deltaMode!==Ih)||t.some(Uh)||t.every(({event:i})=>{const n=i.wheelDelta;return n!==void 0&&Math.abs(n)%40===0})?"mouse":t.some(({deltaX:i})=>i!==0)||t.length>1&&jh(t)?"trackpad":e?"mouse":"unknown"}function Uh({event:t,deltaX:e,deltaY:i}){if(e!==0||i===0)return!1;const n=Math.abs(i/Lh);if(Number.isInteger(n))return!0;const r=t.wheelDelta;return typeof r=="number"&&r!==0&&r%Oh===0}function jh(t){for(let e=0;e<t.length;e++){const i=t[e];if(Math.abs(i.deltaX)>Ls||Math.abs(i.deltaY)>Ls||e>0&&i.timeStamp-t[e-1].timeStamp>Rh)return!1}return!0}var Is=["mousedown","mousemove","mouseup","mouseover","mouseout","mouseenter","mouseleave"],Vh=class extends Ie{constructor(t,e,i){super(t,e,{enable:!0,...i}),this.handleEvent=r=>{this.handleOverEvent(r),this.handleOutEvent(r),this.handleEnterEvent(r),this.handleLeaveEvent(r),this.handleMoveEvent(r)},this.pressed=!1;const{enable:n=!1}=this.options;this.enableMoveEvent=n,this.enableLeaveEvent=n,this.enableEnterEvent=n,this.enableOutEvent=n,this.enableOverEvent=n,n&&Is.forEach(r=>this.listen(r,!0))}destroy(){Is.forEach(t=>this.listen(t,!1))}enableEventType(t,e){switch(t){case"pointermove":this.enableMoveEvent!==e&&(this.enableMoveEvent=e,this.listen("mousedown",e),this.listen("mousemove",e),this.listen("mouseup",e));break;case"pointerover":this.enableOverEvent!==e&&(this.enableOverEvent=e,this.listen("mouseover",e));break;case"pointerout":this.enableOutEvent!==e&&(this.enableOutEvent=e,this.listen("mouseout",e));break;case"pointerenter":this.enableEnterEvent!==e&&(this.enableEnterEvent=e,this.listen("mouseenter",e));break;case"pointerleave":this.enableLeaveEvent!==e&&(this.enableLeaveEvent=e,this.listen("mouseleave",e))}}handleOverEvent(t){this.enableOverEvent&&t.type==="mouseover"&&this._emit("pointerover",t)}handleOutEvent(t){this.enableOutEvent&&t.type==="mouseout"&&this._emit("pointerout",t)}handleEnterEvent(t){this.enableEnterEvent&&t.type==="mouseenter"&&this._emit("pointerenter",t)}handleLeaveEvent(t){this.enableLeaveEvent&&t.type==="mouseleave"&&this._emit("pointerleave",t)}handleMoveEvent(t){if(this.enableMoveEvent)switch(t.type){case"mousedown":t.button>=0&&(this.pressed=!0);break;case"mousemove":t.buttons===0&&(this.pressed=!1),this.pressed||this._emit("pointermove",t);break;case"mouseup":this.pressed=!1}}_emit(t,e){this.callback({type:t,center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:"mouse",target:e.target})}},ks=["keydown","keyup"],Fh=class extends Ie{constructor(t,e,i){super(t,e,{enable:!0,tabIndex:0,...i}),this.handleEvent=r=>{const s=r.target||r.srcElement;s.tagName==="INPUT"&&s.type==="text"||s.tagName==="TEXTAREA"||(this.enableDownEvent&&r.type==="keydown"&&this.callback({type:"keydown",srcEvent:r,key:r.key,target:r.target}),this.enableUpEvent&&r.type==="keyup"&&this.callback({type:"keyup",srcEvent:r,key:r.key,target:r.target}))};const{enable:n=!1}=this.options;this.enableDownEvent=n,this.enableUpEvent=n,t.tabIndex=this.options.tabIndex,t.style.outline="none",n&&ks.forEach(r=>this.listen(r,!0))}destroy(){ks.forEach(t=>this.listen(t,!1))}enableEventType(t,e){t==="keydown"&&this.enableDownEvent!==e&&(this.enableDownEvent=e,this.listen(t,e)),t==="keyup"&&this.enableUpEvent!==e&&(this.enableUpEvent=e,this.listen(t,e))}},Gh=class extends Ie{constructor(t,e,i){i.enable=i.enable??!1,super(t,e,i),this.handleEvent=n=>{this.options.enable&&this.callback({type:"contextmenu",center:{x:n.clientX,y:n.clientY},srcEvent:n,pointerType:"mouse",target:n.target})},i.enable&&this.listen("contextmenu",!0)}destroy(){this.listen("contextmenu",!1)}enableEventType(t,e){t==="contextmenu"&&this.options.enable!==e&&(this.options.enable=e,this.listen("contextmenu",e))}},Rs=1,Wi=2,Os=4,$h={pointerdown:Rs,pointermove:Wi,pointerup:Os,mousedown:Rs,mousemove:Wi,mouseup:Os},Wh=0,Yh=1,Hh=2,Zh=1,qh=2,Xh=4;function Kh(t){const e=$h[t.srcEvent.type];if(!e)return null;const{buttons:i,button:n}=t.srcEvent;let r=!1,s=!1,o=!1;return e===Wi?(r=!!(i&Zh),s=!!(i&Xh),o=!!(i&qh)):(r=n===Wh,s=n===Yh,o=n===Hh),{leftButton:r,middleButton:s,rightButton:o}}function Jh(t,e){const i=t.center;if(!i)return null;const n=e.getBoundingClientRect(),r=n.width/e.offsetWidth||1,s=n.height/e.offsetHeight||1;return{center:i,offsetCenter:{x:(i.x-n.left-e.clientLeft)/r,y:(i.y-n.top-e.clientTop)/s}}}var Qh={srcElement:"root",priority:0},tf=class{constructor(t,e){this.handleEvent=i=>{if(this.isEmpty())return;const n=this._normalizeEvent(i);let r=i.srcEvent.target;for(;r&&r!==n.rootElement;){if(this._emit(n,r),n.handled)return;r=r.parentNode}this._emit(n,"root")},this.eventManager=t,this.recognizerName=e,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(t,e,i,n=!1,r=!1){const{handlers:s,handlersByElement:o}=this,a={...Qh,...i};let c=o.get(a.srcElement);c||(c=[],o.set(a.srcElement,c));const l={type:t,handler:e,srcElement:a.srcElement,priority:a.priority};n&&(l.once=!0),r&&(l.passive=!0),s.push(l),this._active=this._active||!l.passive;let u=c.length-1;for(;u>=0&&!(c[u].priority>=l.priority);)u--;c.splice(u+1,0,l)}remove(t,e){const{handlers:i,handlersByElement:n}=this;for(let r=i.length-1;r>=0;r--){const s=i[r];if(s.type===t&&s.handler===e){i.splice(r,1);const o=n.get(s.srcElement);o.splice(o.indexOf(s),1),o.length===0&&n.delete(s.srcElement)}}this._active=i.some(r=>!r.passive)}_emit(t,e){const i=this.handlersByElement.get(e);if(i){let n=!1;const r=()=>{t.handled=!0},s=()=>{t.handled=!0,n=!0},o=[];for(let a=0;a<i.length;a++){const{type:c,handler:l,once:u}=i[a];if(l({...t,type:c,stopPropagation:r,stopImmediatePropagation:s}),u&&o.push(i[a]),n)break}for(let a=0;a<o.length;a++){const{type:c,handler:l}=o[a];this.remove(c,l)}}}_normalizeEvent(t){const e=this.eventManager.getElement();return{...t,...Kh(t),...Jh(t,e),preventDefault:()=>{t.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:e}}};function ef(t){if("recognizer"in t)return t;let e;const i=Array.isArray(t)?[...t]:[t];return typeof i[0]=="function"?e=new(i.shift())(i.shift()||{}):e=i.shift(),{recognizer:e,recognizeWith:typeof i[0]=="string"?[i[0]]:i[0],requireFailure:typeof i[1]=="string"?[i[1]]:i[1]}}var nf=class{constructor(t=null,e={}){if(this._onBasicInput=i=>{this.manager.emit(i.srcEvent.type,i)},this._onOtherEvent=i=>{this.manager.emit(i.type,i)},this.options={recognizers:[],events:{},touchAction:"compute",tabIndex:0,cssProps:{},...e},this.events=new Map,this.element=t,this.wheelSession=new Bh(t),!!t){this.manager=new gh(t,this.options);for(const i of this.options.recognizers){const{recognizer:n,recognizeWith:r,requireFailure:s}=ef(i);this.manager.add(n),r&&n.recognizeWith(r),s&&n.requireFailure(s)}this.manager.on("hammer.input",this._onBasicInput),this.wheelInput=new Ah(t,this._onOtherEvent,{enable:!1,wheelSession:this.wheelSession}),this.moveInput=new Vh(t,this._onOtherEvent,{enable:!1}),this.keyInput=new Fh(t,this._onOtherEvent,{enable:!1,tabIndex:e.tabIndex}),this.contextmenuInput=new Gh(t,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}}getElement(){return this.element}destroy(){if(!this.element){this.wheelSession.destroy();return}this.wheelInput.destroy(),this.wheelSession.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy()}on(t,e,i){this._addEventHandler(t,e,i,!1)}once(t,e,i){this._addEventHandler(t,e,i,!0)}watch(t,e,i){this._addEventHandler(t,e,i,!1,!0)}off(t,e){this._removeEventHandler(t,e)}emit(t){this.manager?.emit(t.type,t)}_toggleRecognizer(t,e){const{manager:i}=this;if(!i)return;const n=i.get(t);n&&(n.set({enable:e,wheelSession:this.wheelSession}),i.touchAction.update()),this.wheelInput?.enableEventType(t,e),this.moveInput?.enableEventType(t,e),this.keyInput?.enableEventType(t,e),this.contextmenuInput?.enableEventType(t,e)}_addEventHandler(t,e,i,n,r){if(typeof t!="string"){i=e;for(const[c,l]of Object.entries(t))this._addEventHandler(c,l,i,n,r);return}const{manager:s,events:o}=this;if(!s)return;let a=o.get(t);if(!a){const c=this._getRecognizerName(t)||t;a=new tf(this,c),o.set(t,a),s&&s.on(t,a.handleEvent)}a.add(t,e,i,n,r),a.isEmpty()||this._toggleRecognizer(a.recognizerName,!0)}_removeEventHandler(t,e){if(typeof t!="string"){for(const[r,s]of Object.entries(t))this._removeEventHandler(r,s);return}const{events:i}=this,n=i.get(t);if(n&&(n.remove(t,e),n.isEmpty())){const{recognizerName:r}=n;let s=!1;for(const o of i.values())if(o.recognizerName===r&&!o.isEmpty()){s=!0;break}s||this._toggleRecognizer(r,!1)}}_getRecognizerName(t){return this.manager.recognizers.find(e=>e.getEventNames().includes(t))?.options.event}},re={DEFAULT:"default",LNGLAT:"lnglat",METER_OFFSETS:"meter-offsets",LNGLAT_OFFSETS:"lnglat-offsets",CARTESIAN:"cartesian"};Object.defineProperty(re,"IDENTITY",{get:()=>(L.deprecated("COORDINATE_SYSTEM.IDENTITY","COORDINATE_SYSTEM.CARTESIAN")(),re.CARTESIAN)});var V={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},se={common:0,meters:1,pixels:2},ke={click:"onClick",dblclick:"onClick",panstart:"onDragStart",panmove:"onDrag",panend:"onDragEnd"},Ds={multipan:[Cs,{threshold:10,pointers:2,trackpad:!0}],pinch:[xh,{trackpad:!0},null,["multipan"]],pan:[Cs,{threshold:1},["pinch"],["multipan"]],dblclick:[Ms,{event:"dblclick",taps:2,enable:!1}],dblclickdrag:[Ph,{event:"dblclickdrag",enable:!1},["dblclick"],null],click:[Ms,{event:"click"},["dblclickdrag"],["dblclick","dblclickdrag"]]},rf={DRAW:"draw",MASK:"mask",TERRAIN:"terrain"};function sf(t,e){if(t===e)return!0;if(Array.isArray(t)){const i=t.length;if(!e||e.length!==i)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}return!1}function Bt(t){let e={},i;return n=>{for(const r in n)if(!sf(n[r],e[r])){i=t(n),e=n;break}return i}}var Bs=[0,0,0,0],of=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],zs=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],af=[0,0,0],Ns=[0,0,0],cf={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function Re(t){const e=cf[t];if(e===void 0)throw new Error(`Invalid coordinateSystem: ${t}`);return e}var lf=Bt(hf);function Us(t,e,i=Ns){i.length<3&&(i=[i[0],i[1],0]);let n=i,r,s=!0;switch(e==="lnglat-offsets"||e==="meter-offsets"?r=i:r=t.isGeospatial?[Math.fround(t.longitude),Math.fround(t.latitude),0]:null,t.projectionMode){case V.WEB_MERCATOR:e==="lnglat"?(r=[0,0,0],s=!1):e==="cartesian"&&(s=!1,r=t.unprojectPosition([Math.fround(t.center[0]),Math.fround(t.center[1]),0]));break;case V.WEB_MERCATOR_AUTO_OFFSET:e==="lnglat"?n=r:e==="cartesian"&&(n=[Math.fround(t.center[0]),Math.fround(t.center[1]),0],r=t.unprojectPosition(n),n[0]-=i[0],n[1]-=i[1],n[2]-=i[2]);break;case V.IDENTITY:n=t.position.map(Math.fround),n[2]=n[2]||0;break;case V.GLOBE:s=!1,r=null;break;default:s=!1}return{geospatialOrigin:r,shaderCoordinateOrigin:n,offsetMode:s}}function uf(t,e,i){const{viewMatrixUncentered:n,projectionMatrix:r}=t;let{viewMatrix:s,viewProjectionMatrix:o}=t,a=Bs,c=Bs,l=t.cameraPosition;const{geospatialOrigin:u,shaderCoordinateOrigin:h,offsetMode:f}=Us(t,e,i);return f&&(c=t.projectPosition(u||h),l=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],c[3]=1,a=Qt([],c,o),s=n||s,o=te([],r,s),o=te([],o,of)),{viewMatrix:s,viewProjectionMatrix:o,projectionCenter:a,originCommon:c,cameraPosCommon:l,shaderCoordinateOrigin:h,geospatialOrigin:u}}function js({viewport:t,devicePixelRatio:e=1,modelMatrix:i=null,coordinateSystem:n="default",coordinateOrigin:r=Ns,autoWrapLongitude:s=!1}){n==="default"&&(n=t.isGeospatial?"lnglat":"cartesian");const o=lf({viewport:t,devicePixelRatio:e,coordinateSystem:n,coordinateOrigin:r});return o.wrapLongitude=s,o.modelMatrix=i||zs,o}function hf({viewport:t,devicePixelRatio:e,coordinateSystem:i,coordinateOrigin:n}){const{projectionCenter:r,viewProjectionMatrix:s,originCommon:o,cameraPosCommon:a,shaderCoordinateOrigin:c,geospatialOrigin:l}=uf(t,i,n),u=t.getDistanceScales(),h=[t.width*e,t.height*e],f=Qt([],[0,0,-t.focalDistance,1],t.projectionMatrix)[3]||1,d={coordinateSystem:Re(i),projectionMode:t.projectionMode,coordinateOrigin:c,commonOrigin:o.slice(0,3),center:r,pseudoMeters:!!t._pseudoMeters,viewportSize:h,devicePixelRatio:e,focalDistance:f,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:af,scale:t.scale,wrapLongitude:!1,viewProjectionMatrix:s,modelMatrix:zs,cameraPosition:a};if(l){const p=t.getDistanceScales(l);switch(i){case"meter-offsets":d.commonUnitsPerWorldUnit=p.unitsPerMeter,d.commonUnitsPerWorldUnit2=p.unitsPerMeter2;break;case"lnglat":case"lnglat-offsets":t._pseudoMeters||(d.commonUnitsPerMeter=p.unitsPerMeter),d.commonUnitsPerWorldUnit=p.unitsPerDegree,d.commonUnitsPerWorldUnit2=p.unitsPerDegree2;break;case"cartesian":d.commonUnitsPerWorldUnit=[1,1,p.unitsPerMeter[2]],d.commonUnitsPerWorldUnit2=[0,0,p.unitsPerMeter2[2]]}}if(t.projectionMode===V.GLOBE&&i==="meter-offsets"){const m=n[0]*Math.PI/180,_=n[1]*Math.PI/180,v=Math.cos(_),y=((n[2]||0)/6370972+1)*256;d.commonOrigin=[Math.sin(m)*v*y,-Math.cos(m)*v*y,Math.sin(_)*y]}return d}var ff=`${`${["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(t=>`const COORDINATE_SYSTEM_${t.toUpperCase().replaceAll("-","_")}: i32 = ${Re(t)};`).join("")}
${Object.keys(V).map(t=>`const PROJECTION_MODE_${t}: i32 = ${V[t]};`).join("")}
${Object.keys(se).map(t=>`const UNIT_${t.toUpperCase()}: i32 = ${se[t]};`).join("")}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Mercator y of project_mercator_'s latitude clamp: log(tan(PI / 4 + radians(89.9) / 2))
const MAX_MERCATOR_Y: f32 = 7.0439589847;

// Inverse of project_globe_ followed by project_mercator_, without forming lat/lng:
// Mercator y = atanh(sin(lat)) = log((D + |z|) / |xy|), which stays accurate near the poles
fn project_globe_to_mercator_(spherePos: vec3<f32>) -> vec2<f32> {
  let D = length(spherePos);
  let h = max(length(spherePos.xy), 1e-20);
  let y = sign(spherePos.z) * min(log((D + abs(spherePos.z)) / h), MAX_MERCATOR_Y);
  let x = atan2(spherePos.x, -spherePos.y);
  return (vec2<f32>(x, y) + PI) * WORLD_SCALE;
}

// Flat common space (Mercator or cartesian) of a common position; identity except under GLOBE.
// WGSL has no function overloading: pass position.xyz for a vec4. See project.glsl.ts.
fn project_common_position_to_flat(commonPosition: vec3<f32>) -> vec2<f32> {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return project_globe_to_mercator_(commonPosition);
  }
  return commonPosition.xy;
}

// World copy of a flat x nearest to referenceX
fn project_wrap_flat_x_(x: f32, referenceX: f32) -> f32 {
  return x - TILE_SIZE * floor((x - referenceX) / TILE_SIZE + 0.5);
}

// Flat position in the world copy nearest to referenceX (e.g. a bounds centre); geospatial only
fn project_common_position_to_flat_wrapped(commonPosition: vec3<f32>, referenceX: f32) -> vec2<f32> {
  var flatPosition = project_common_position_to_flat(commonPosition);
  if (project.projectionMode != PROJECTION_MODE_IDENTITY) {
    flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
  }
  return flatPosition;
}

// Flat position continuous across the antimeridian under GLOBE (seam moved opposite referenceX,
// e.g. the camera); identity for flat modes. For periodic patterns.
fn project_common_position_to_flat_continuous(commonPosition: vec3<f32>, referenceX: f32) -> vec2<f32> {
  var flatPosition = project_common_position_to_flat(commonPosition);
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
  }
  return flatPosition;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
      let enuMatrix = project_get_orientation_matrix(project.commonOrigin);
      let metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
      let offsetCommon = (enuMatrix * vec3<f32>(-position_world.x, -position_world.y, position_world.z)) * metersToCommon;
      return vec4<f32>(project.commonOrigin + offsetCommon, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  var clipPosition = viewProjectionMatrix * position + center;
  // deck.gl projection matrices use WebGL's [-w, w] depth range; WebGPU clips z to [0, w].
  clipPosition.z = (clipPosition.z + clipPosition.w) * 0.5;
  return clipPosition;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,df=`${["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(t=>`const int COORDINATE_SYSTEM_${t.toUpperCase().replaceAll("-","_")} = ${Re(t)};`).join("")}
${Object.keys(V).map(t=>`const int PROJECTION_MODE_${t} = ${V[t]};`).join("")}
${Object.keys(se).map(t=>`const int UNIT_${t.toUpperCase()} = ${se[t]};`).join("")}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
const float MAX_MERCATOR_Y = 7.0439589847;
vec2 project_globe_to_mercator_(vec3 spherePos) {
float D = length(spherePos);
float h = max(length(spherePos.xy), 1e-20);
float y = sign(spherePos.z) * min(log((D + abs(spherePos.z)) / h), MAX_MERCATOR_Y);
float x = atan(spherePos.x, -spherePos.y);
return (vec2(x, y) + PI) * WORLD_SCALE;
}
vec2 project_common_position_to_flat(vec3 commonPosition) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
return project_globe_to_mercator_(commonPosition);
}
return commonPosition.xy;
}
vec2 project_common_position_to_flat(vec4 commonPosition) {
return project_common_position_to_flat(commonPosition.xyz);
}
float project_wrap_flat_x_(float x, float referenceX) {
return x - TILE_SIZE * floor((x - referenceX) / TILE_SIZE + 0.5);
}
vec2 project_common_position_to_flat_wrapped(vec3 commonPosition, float referenceX) {
vec2 flatPosition = project_common_position_to_flat(commonPosition);
if (project.projectionMode != PROJECTION_MODE_IDENTITY) {
flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
}
return flatPosition;
}
vec2 project_common_position_to_flat_wrapped(vec4 commonPosition, float referenceX) {
return project_common_position_to_flat_wrapped(commonPosition.xyz, referenceX);
}
vec2 project_common_position_to_flat_continuous(vec3 commonPosition, float referenceX) {
vec2 flatPosition = project_common_position_to_flat(commonPosition);
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
}
return flatPosition;
}
vec2 project_common_position_to_flat_continuous(vec4 commonPosition, float referenceX) {
return project_common_position_to_flat_continuous(commonPosition.xyz, referenceX);
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
mat3 enuMatrix = project_get_orientation_matrix(project.commonOrigin);
float metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
vec3 offsetCommon = (enuMatrix * vec3(-position_world.xy, position_world.z)) * metersToCommon;
return vec4(project.commonOrigin + offsetCommon, position_world.w);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,pf={};function gf(t=pf){return"viewport"in t?js(t):{}}var Oe={name:"project",dependencies:[hc,ms],source:ff,vs:df,getUniforms:gf,uniformTypes:{wrapLongitude:"f32",coordinateSystem:"i32",commonUnitsPerMeter:"vec3<f32>",projectionMode:"i32",scale:"f32",commonUnitsPerWorldUnit:"vec3<f32>",commonUnitsPerWorldUnit2:"vec3<f32>",center:"vec4<f32>",modelMatrix:"mat4x4<f32>",viewProjectionMatrix:"mat4x4<f32>",viewportSize:"vec2<f32>",devicePixelRatio:"f32",focalDistance:"f32",cameraPosition:"vec3<f32>",coordinateOrigin:"vec3<f32>",commonOrigin:"vec3<f32>",pseudoMeters:"f32"}},mf={name:"project32",dependencies:[Oe],source:`// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,vs:`vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`};function _f(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function zt(t,e){const i=Qt([],e,t);return ui(i,i,1/i[3]),i}function vf(t,e,i){return i*e+(1-i)*t}function Yi(t,e,i){return t<e?e:t>i?i:t}function yf(t){return Math.log(t)*Math.LOG2E}var Vs=Math.log2||yf;function ct(t,e){if(!t)throw new Error(e||"@math.gl/web-mercator: assertion failed.")}var X=Math.PI,Fs=X/4,W=X/180,Hi=180/X,Nt=512,De=4003e4,nt=85.051129,bf=1.5;function Gs(t){return Math.pow(2,t)}function $s(t){return Vs(t)}function lt(t){const[e,i]=t;ct(Number.isFinite(e)),ct(Number.isFinite(i)&&i>=-90&&i<=90,"invalid latitude");const n=e*W,r=i*W;return[Nt*(n+X)/(2*X),Nt*(X+Math.log(Math.tan(Fs+r*.5)))/(2*X)]}function xt(t){const[e,i]=t,n=e/Nt*(2*X)-X,r=2*(Math.atan(Math.exp(i/Nt*(2*X)-X))-Fs);return[n*Hi,r*Hi]}function Ws(t){const{latitude:e}=t;return ct(Number.isFinite(e)),$s(De*Math.cos(e*W))-9}function Be(t){const e=Math.cos(t*W);return Nt/De/e}function Zi(t){const{latitude:e,longitude:i,highPrecision:n=!1}=t;ct(Number.isFinite(e)&&Number.isFinite(i));const r=Nt,s=Math.cos(e*W),o=r/360,a=o/s,c=r/De/s,l={unitsPerMeter:[c,c,c],metersPerUnit:[1/c,1/c,1/c],unitsPerDegree:[o,a,c],degreesPerUnit:[1/o,1/a,1/c]};if(n){const u=W*Math.tan(e*W)/s,h=o*u/2,f=r/De*u,d=f/a*c;l.unitsPerDegree2=[0,h,f],l.unitsPerMeter2=[d,0,d]}return l}function Ys(t,e){const[i,n,r]=t,[s,o,a]=e,{unitsPerMeter:c,unitsPerMeter2:l}=Zi({longitude:i,latitude:n,highPrecision:!0}),u=lt(t);u[0]+=s*(c[0]+l[0]*o),u[1]+=o*(c[1]+l[1]*o);const h=xt(u),f=(r||0)+(a||0);return Number.isFinite(r)||Number.isFinite(a)?[h[0],h[1],f]:h}function wf(t){const{height:e,pitch:i,bearing:n,altitude:r,scale:s,center:o}=t,a=_f();ci(a,a,[0,0,-r]),Ga(a,a,-i*W),$a(a,a,n*W);const c=s/e;return Hn(a,a,[c,c,c]),o&&ci(a,a,ja([],o)),a}function Pf(t){const{width:e,height:i,altitude:n,pitch:r=0,offset:s,center:o,scale:a,nearZMultiplier:c=1,farZMultiplier:l=1}=t;let{fovy:u=oe(bf)}=t;n!==void 0&&(u=oe(n));const h=u*W,f=r*W,d=ze(u);let p=d;o&&(p+=o[2]*a/Math.cos(f)/i);const g=h*(.5+(s?s[1]:0)/i),m=Math.sin(g)*p/Math.sin(Yi(Math.PI/2-f-g,.01,Math.PI-.01)),_=Math.sin(f)*m+p,v=p*10,y=Math.min(_*l,v);return{fov:h,aspect:e/i,focalDistance:d,near:c,far:y}}function oe(t){return 2*Math.atan(.5/t)*Hi}function ze(t){return .5/Math.tan(.5*t*W)}function qi(t,e){const[i,n,r=0]=t;return ct(Number.isFinite(i)&&Number.isFinite(n)&&Number.isFinite(r)),zt(e,[i,n,r,1])}function Ut(t,e,i=0){const[n,r,s]=t;if(ct(Number.isFinite(n)&&Number.isFinite(r),"invalid pixel coordinate"),Number.isFinite(s))return zt(e,[n,r,s,1]);const o=zt(e,[n,r,0,1]),a=zt(e,[n,r,1,1]),c=o[2],l=a[2],u=c===l?0:((i||0)-c)/(l-c);return er([],o,a,u)}function Ef(t){const{width:e,height:i,bounds:n,minExtent:r=0,maxZoom:s=24,offset:o=[0,0]}=t,[[a,c],[l,u]]=n,h=Sf(t.padding),f=lt([a,Yi(u,-nt,nt)]),d=lt([l,Yi(c,-nt,nt)]),p=[Math.max(Math.abs(d[0]-f[0]),r),Math.max(Math.abs(d[1]-f[1]),r)],g=[e-h.left-h.right-Math.abs(o[0])*2,i-h.top-h.bottom-Math.abs(o[1])*2];ct(g[0]>0&&g[1]>0);const m=g[0]/p[0],_=g[1]/p[1],v=(h.right-h.left)/2/m,y=(h.top-h.bottom)/2/_,b=xt([(d[0]+f[0])/2+v,(d[1]+f[1])/2+y]),P=Math.min(s,Vs(Math.abs(Math.min(m,_))));return ct(Number.isFinite(P)),{longitude:b[0],latitude:b[1],zoom:P}}function Sf(t=0){return typeof t=="number"?{top:t,bottom:t,left:t,right:t}:(ct(Number.isFinite(t.top)&&Number.isFinite(t.bottom)&&Number.isFinite(t.left)&&Number.isFinite(t.right)),t)}var Hs=Math.PI/180;function xf(t,e=0){const{width:i,height:n,unproject:r}=t,s={targetZ:e},o=r([0,n],s),a=r([i,n],s);let c,l;return(t.fovy?.5*t.fovy*Hs:Math.atan(.5/t.altitude))>(90-t.pitch)*Hs-.01?(c=Zs(t,0,e),l=Zs(t,i,e)):(c=r([0,0],s),l=r([i,0],s)),[o,a,l,c]}function Zs(t,e,i){const{pixelUnprojectionMatrix:n}=t,r=zt(n,[e,0,1,1]),s=zt(n,[e,t.height,1,1]),o=(i*t.distanceScales.unitsPerMeter[2]-r[2])/(s[2]-r[2]),a=xt(er([],r,s,o));return a.push(i),a}var qs=.01,Mf=["longitude","latitude","zoom"],Xs={curve:1.414,speed:1.2};function Tf(t,e,i,n){const{startZoom:r,startCenterXY:s,uDelta:o,w0:a,u1:c,S:l,rho:u,rho2:h,r0:f}=Ks(t,e,n);if(c<qs){const y={};for(const b of Mf){const P=t[b],E=e[b];y[b]=vf(P,E,i)}return y}const d=i*l,p=Math.cosh(f)/Math.cosh(f+u*d),g=a*((Math.cosh(f)*Math.tanh(f+u*d)-Math.sinh(f))/h)/c,m=r+$s(1/p),_=tc([],o,g);ee(_,_,s);const v=xt(_);return{longitude:v[0],latitude:v[1],zoom:m}}function Cf(t,e,i){const n={...Xs,...i},{screenSpeed:r,speed:s,maxDuration:o}=n,{S:a,rho:c}=Ks(t,e,n),l=1e3*a;let u;return Number.isFinite(r)?u=l/(r/c):u=l/s,Number.isFinite(o)&&u>o?0:u}function Ks(t,e,i){i=Object.assign({},Xs,i);const n=i.curve,r=t.zoom,s=[t.longitude,t.latitude],o=Gs(r),a=e.zoom,c=[e.longitude,e.latitude],l=Gs(a-r),u=lt(s),h=lt(c),f=tr([],h,u),d=Math.max(t.width,t.height),p=d/l,g=sc(f)*o,m=Math.max(g,qs),_=n*n,v=(p*p-d*d+_*_*m*m)/(2*d*_*m),y=(p*p-d*d-_*_*m*m)/(2*p*_*m),b=Math.log(Math.sqrt(v*v+1)-v),P=Math.log(Math.sqrt(y*y+1)-y);return{startZoom:r,startCenterXY:u,uDelta:f,w0:d,u1:g,S:(P-b)/n,rho:n,rho2:_,r0:b,r1:P}}var Js=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,Af=`
${Js}

const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}

`,Lf=`
${Js}

const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}

`,If=Bt(Bf),kf=Bt(zf),Rf=[0,0,0,1],Of=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];function Df(t){const{width:e,height:i,pixelUnprojectionMatrix:n}=t,r=[[0,0],[e,0],[e,i],[0,i]],s=r.map(([c,l])=>Ut([c,l,-1],n)),o=r.map(([c,l])=>Ut([c,l,1],n));if(!t.isGeospatial)return s.concat(o);const a=s.concat(o).filter(c=>c[2]>=0);for(let c=0;c<4;c++){const l=(c+1)%4;for(const[u,h]of[[s[c],o[c]],[s[c],s[l]],[o[c],o[l]]])if(u[2]<0!=h[2]<0){const f=u[2]/(u[2]-h[2]);a.push([u[0]+(h[0]-u[0])*f,u[1]+(h[1]-u[1])*f,0])}}return a.length>0?a:s.concat(o)}function Bf({viewport:t,center:e}){return new j(t.viewProjectionMatrix).invert().transform(e)}function zf({viewport:t,shadowMatrices:e}){const i=[],n=Df(t);for(const r of e){const s=r.clone().translate(new $(t.center).negate()),o=n.map(c=>s.transform(c)),a=new j().ortho({left:Math.min(...o.map(c=>c[0])),right:Math.max(...o.map(c=>c[0])),bottom:Math.min(...o.map(c=>c[1])),top:Math.max(...o.map(c=>c[1])),near:Math.min(...o.map(c=>-c[2])),far:Math.max(...o.map(c=>-c[2]))});i.push(a.multiplyRight(r))}return i}function Nf(t){const{shadowEnabled:e=!0,project:i}=t;if(!e||!i||!t.shadowMatrices||!t.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:t.dummyShadowMap,shadow_uShadowMap1:t.dummyShadowMap};const n=Oe.getUniforms(i),r=If({viewport:i.viewport,center:n.center}),s=[],o=kf({shadowMatrices:t.shadowMatrices,viewport:i.viewport}).slice();for(let c=0;c<t.shadowMatrices.length;c++){const l=o[c],u=l.clone().translate(new $(i.viewport.center).negate());n.coordinateSystem===Re("lnglat")&&n.projectionMode===V.WEB_MERCATOR?(o[c]=u,s[c]=r):(o[c]=l.clone().multiplyRight(Of),s[c]=u.transform(r))}const a={drawShadowMap:!!t.drawToShadowMap,useShadowMap:t.shadowMaps?t.shadowMaps.length>0:!1,color:t.shadowColor||Rf,lightId:t.shadowLightId||0,lightCount:t.shadowMatrices.length,shadow_uShadowMap0:t.dummyShadowMap,shadow_uShadowMap1:t.dummyShadowMap};for(let c=0;c<o.length;c++)a[`viewProjectionMatrix${c}`]=o[c],a[`projectCenter${c}`]=s[c];for(let c=0;c<2;c++)a[`shadow_uShadowMap${c}`]=t.shadowMaps&&t.shadowMaps[c]||t.dummyShadowMap;return a}var Xi={name:"shadow",dependencies:[Oe],vs:Af,fs:Lf,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:Nf,uniformTypes:{drawShadowMap:"f32",useShadowMap:"f32",color:"vec4<f32>",lightId:"i32",lightCount:"f32",viewProjectionMatrix0:"mat4x4<f32>",viewProjectionMatrix1:"mat4x4<f32>",projectCenter0:"vec4<f32>",projectCenter1:"vec4<f32>"}},Ne=16777215;function Uf(t,e){t.length===10?L.warn("pickMultipleObjects can only exclude 10 previously picked objects for layers without picking buffers")():t.push(e)}var jf=`  float disabledPickingIndexCount;
  vec4 disabledPickingIndices0;
  vec4 disabledPickingIndices1;
  vec4 disabledPickingIndices2;
`;function Qs(t){return t.replace(`  vec4 highlightColor;
} picking;`,`  vec4 highlightColor;
${jf}} picking;`)}function Ki(t,e){return[t[e]||0,t[e+1]||0,t[e+2]||0,t[e+3]||0]}var Vf=`vec3 picking_getPickingColorFromIndex(float objectIndex) {
  if (objectIndex < 0.0 || objectIndex >= ${Ne}.0) {
    return vec3(0.0);
  }

  for (int i = 0; i < 10; i++) {
    if (float(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    vec4 disabledIndices = i < 4
      ? picking.disabledPickingIndices0
      : (i < 8 ? picking.disabledPickingIndices1 : picking.disabledPickingIndices2);
    float disabledIndex = disabledIndices[i - (i / 4) * 4];
    if (disabledIndex == objectIndex) {
      return vec3(0.0);
    }
  }

  float encodedIndex = objectIndex + 1.0;
  return vec3(
    mod(encodedIndex, 256.0),
    mod(floor(encodedIndex / 256.0), 256.0),
    mod(floor(encodedIndex / 65536.0), 256.0)
  );
}

vec3 picking_getPickingColorFromIndex(uint objectIndex) {
  return picking_getPickingColorFromIndex(float(objectIndex));
}

vec3 picking_getPickingColorFromInstanceID() {
  return picking_getPickingColorFromIndex(float(gl_InstanceID));
}

void picking_setPickingColorFromInstanceID() {
  picking_setPickingColor(picking_getPickingColorFromInstanceID());
}
`,Ff=`struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
  disabledPickingIndexCount: f32,
  disabledPickingIndices0: vec4<f32>,
  disabledPickingIndices1: vec4<f32>,
  disabledPickingIndices2: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}

fn picking_getPickingColorFromIndex(objectIndex: u32) -> vec3<f32> {
  if (objectIndex >= ${Ne}u) {
    return vec3<f32>(0.0);
  }

  for (var i = 0; i < 10; i = i + 1) {
    if (f32(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    let disabledIndices = select(
      picking.disabledPickingIndices2,
      select(picking.disabledPickingIndices1, picking.disabledPickingIndices0, i < 4),
      i < 8
    );
    let disabledIndex = disabledIndices[i % 4];
    if (disabledIndex == f32(objectIndex)) {
      return vec3<f32>(0.0);
    }
  }

  let encodedIndex = objectIndex + 1u;
  return vec3<f32>(
    f32(encodedIndex % 256u),
    f32((encodedIndex / 256u) % 256u),
    f32((encodedIndex / 65536u) % 256u)
  ) / 255.0;
}
`,Gf={...Ot,vs:`${Qs(Ot.vs)}
${Vf}`,fs:Qs(Ot.fs),source:Ff,uniformTypes:{...Ot.uniformTypes,disabledPickingIndexCount:"f32",disabledPickingIndices0:"vec4<f32>",disabledPickingIndices1:"vec4<f32>",disabledPickingIndices2:"vec4<f32>"},defaultUniforms:{...Ot.defaultUniforms,useByteColors:!0,disabledPickingIndexCount:0,disabledPickingIndices0:[0,0,0,0],disabledPickingIndices1:[0,0,0,0],disabledPickingIndices2:[0,0,0,0]},getUniforms(t,e){const i=Ot.getUniforms(t,e),n=t.disabledPickingIndices||[];return i.disabledPickingIndexCount=n.length,i.disabledPickingIndices0=Ki(n,0),i.disabledPickingIndices1=Ki(n,4),i.disabledPickingIndices2=Ki(n,8),i},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},$f=[ms],Wf=["vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)","vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)","vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)","fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)"],Yf=[];function to(t){const e=rc.getDefaultShaderAssembler(t);for(const n of $f)e.addDefaultModule(n);e._hookFunctions.length=0;const i=t==="glsl"?Wf:Yf;for(const n of i)e.addShaderHook(n);return e}var Hf=[255,255,255],Zf=1,qf=0,eo=class{constructor(t={}){this.type="ambient";const{color:e=Hf}=t,{intensity:i=Zf}=t;this.id=t.id||`ambient-${qf++}`,this.color=e,this.intensity=i}},Xf=[255,255,255],Kf=1,Jf=[0,0,-1],Qf=0,Ue=class{constructor(t={}){this.type="directional";const{color:e=Xf}=t,{intensity:i=Kf}=t,{direction:n=Jf}=t,{_shadow:r=!1}=t;this.id=t.id||`directional-${Qf++}`,this.color=e,this.intensity=i,this.type="directional",this.direction=new $(n).normalize().toArray(),this.shadow=r}getProjectedLight(t){return this}},io=class{constructor(t,e={id:"pass"}){const{id:i}=e;this.id=i,this.device=t,this.props={...e}}setProps(t){Object.assign(this.props,t)}render(t){}cleanup(){}},td={depthWriteEnabled:!0,depthCompare:"less-equal",blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha"},je=class extends io{constructor(){super(...arguments),this._lastRenderIndex=-1}render(t){this._render(t)}_render(t){const{canvasContext:e=this.device.canvasContext}=t,i=t.target??e.getCurrentFramebuffer(),[n,r]=e.getDrawingBufferSize(),s=t.clearCanvas??!0;let o=t.clearColor??(s?[0,0,0,0]:!1),a=s?1:!1,c=s?0:!1;const l=t.colorMask??15,u={viewport:[0,0,n,r]};t.colorMask&&(u.colorMask=l),t.scissorRect&&(u.scissorRect=t.scissorRect);const{shaderModuleProps:h,viewports:f,views:d,onViewportActive:p,clearStack:g=!0}=t,m=t.pass||"unknown",_=this.device.type==="webgpu";g&&(this._lastRenderIndex=-1);const v=[];if(!f.length)return this.device.beginRenderPass({framebuffer:i,parameters:u,clearColor:o,clearDepth:a,clearStencil:c}).end(),this.device.submit(),v;try{for(const y of f){p?.(y);const b=this._getDrawLayerParams(y,t),P=d&&d[y.id],E=y.subViewports||[y],x=_?E.map(M=>[M]):[E];for(const M of x){const S=this.device.beginRenderPass({framebuffer:i,parameters:u,clearColor:o,clearDepth:a,clearStencil:c});try{for(const k of M){const C=this._drawLayersInViewport(S,{target:i,canvasContext:e,shaderModuleProps:h,viewport:k,view:P,pass:m,layers:t.layers,isPicking:t.isPicking},b);v.push(C)}}finally{S.end(),_&&this.device.submit()}o=!1,a=!1,c=!1}}return v}finally{_||this.device.submit()}}_getDrawLayerParams(t,{layers:e,pass:i,isPicking:n=!1,layerFilter:r,cullRect:s,views:o,effects:a,canvasContext:c=this.device.canvasContext,shaderModuleProps:l},u=!1){const h=[],f=no(this._lastRenderIndex+1),d={layer:e[0],viewport:t,isPicking:n,renderPass:i,cullRect:s},p={};for(let g=0;g<e.length;g++){const m=e[g],_=this._shouldDrawLayer(m,d,r,p),v={shouldDrawLayer:_};_&&!u&&(v.shouldDrawLayer=!0,v.layerRenderIndex=f(m,_),v.shaderModuleProps=this._getShaderModuleProps(m,a,i,c,l),v.layerParameters={...m.context.device.type==="webgpu"?td:null,...m.context.deck?.props.parameters,...o?.[t.id]?.props.parameters,...this.getLayerParameters(m,g,t)}),h[g]=v}return h}_drawLayersInViewport(t,{layers:e,shaderModuleProps:i,pass:n,target:r,canvasContext:s,viewport:o,view:a,isPicking:c},l){const u=ed(this.device,{canvasContext:s,shaderModuleProps:i,target:r,viewport:o});if(a){const{clear:f,clearColor:d,clearDepth:p,clearStencil:g}=a.props;if(f){let m=[0,0,0,0],_=1,v=0;Array.isArray(d)&&!c?m=[...d.slice(0,3),d[3]||255].map(y=>y/255):d===!1&&(m=!1),p!==void 0&&(_=p),g!==void 0&&(v=g),this.device.beginRenderPass({framebuffer:r,parameters:{viewport:u,scissorRect:u},clearColor:m,clearDepth:_,clearStencil:v}).end()}}const h={totalCount:e.length,visibleCount:0,compositeCount:0,pickableCount:0};t.setParameters({viewport:u});for(let f=0;f<e.length;f++){const d=e[f],p=l[f],{shouldDrawLayer:g}=p;if(g&&d.props.pickable&&h.pickableCount++,d.isComposite&&h.compositeCount++,d.isDrawable&&p.shouldDrawLayer){const{layerRenderIndex:m,shaderModuleProps:_,layerParameters:v}=p;h.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,m),_.project&&(_.project.viewport=o),d.context.renderPass=t;try{d._drawLayer({renderPass:t,shaderModuleProps:_,uniforms:{layerIndex:m},parameters:v})}catch(y){d.raiseError(y,`drawing ${d} to ${n}`)}}}return h}shouldDrawLayer(t){return!0}getShaderModuleProps(t,e,i){return null}getLayerParameters(t,e,i){return t.props.parameters}_shouldDrawLayer(t,e,i,n){if(!(t.props.visible&&this.shouldDrawLayer(t)))return!1;e.layer=t;let r=t.parent;for(;r;){if(!r.props.visible||!r.filterSubLayer(e))return!1;e.layer=r,r=r.parent}if(i){const s=e.layer.id;if(s in n||(n[s]=i(e)),!n[s])return!1}return t.activateViewport(e.viewport),!0}_getShaderModuleProps(t,e,i,n,r){const s=n.cssToDeviceRatio(),o=t.internalState?.propsInTransition||t.props,a={layer:o,picking:{isActive:!1},project:{viewport:t.context.viewport,devicePixelRatio:s,modelMatrix:o.modelMatrix,coordinateSystem:o.coordinateSystem,coordinateOrigin:o.coordinateOrigin,autoWrapLongitude:t.wrapLongitude}};if(e)for(const c of e)ro(a,c.getShaderModuleProps?.(t,a));for(const c of t.context.defaultShaderModules)c.name in a||(a[c.name]={});return ro(a,this.getShaderModuleProps(t,e,a),r)}};function no(t=0,e={}){const i={},n=(r,s)=>{const o=r.props._offset,a=r.id,c=r.parent&&r.parent.id;let l;if(c&&!(c in e)&&n(r.parent,!1),c in i){const u=i[c]=i[c]||no(e[c],e);l=u(r,s),i[a]=u}else Number.isFinite(o)?(l=o+(e[c]||0),i[a]=null):l=t;return s&&l>=t&&(t=l+1),e[a]=l,l};return n}function ed(t,{canvasContext:e=t.canvasContext,shaderModuleProps:i,target:n,viewport:r}){const s=i?.project?.devicePixelRatio??e.cssToDeviceRatio(),[,o]=e.getDrawingBufferSize(),a=n?n.height:o,c=r;return[c.x*s,a-(c.y+c.height)*s,c.width*s,c.height*s]}function ro(t,...e){for(const i of e)if(i)for(const n in i)t[n]?Object.assign(t[n],i[n]):t[n]=i[n];return t}var id=class extends je{constructor(t,e){super(t,e);const i=t.createTexture({format:"rgba8unorm",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}}),n=t.createTexture({format:"depth16unorm",width:1,height:1});this.fbo=t.createFramebuffer({id:"shadowmap",width:1,height:1,colorAttachments:[i],depthStencilAttachment:n})}delete(){this.fbo&&(this.fbo.destroy(),this.fbo=null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(t){const e=this.fbo,i=this.device.canvasContext.cssToDeviceRatio(),n=t.viewports[0],r=n.width*i,s=n.height*i,o=[1,1,1,1];(r!==e.width||s!==e.height)&&e.resize({width:r,height:s}),super.render({...t,clearColor:o,target:e,pass:"shadow"})}getLayerParameters(t,e,i){return{...t.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:"less-equal",depthBias:0}}shouldDrawLayer(t){return t.props.shadowEnabled!==!1}getShaderModuleProps(t,e,i){return{shadow:{project:i.project,drawToShadowMap:!0},lighting:{enabled:!1}}}},nd={color:[255,255,255],intensity:1},so=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],rd=[0,0,0,200/255],Ji=class{constructor(t={}){this.id="lighting-effect",this.shadowColor=rd,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(t)}setup(t){this.context=t;const{device:e,deck:i}=t;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(e),i._addDefaultShaderModule(Xi),this.dummyShadowMap=e.createTexture({width:1,height:1}))}setProps(t){this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[];for(const e in t){const i=t[e];switch(i.type){case"ambient":this.ambientLight=i;break;case"directional":this.directionalLights.push(i);break;case"point":this.pointLights.push(i)}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&(this.shadow||this.cleanup(this.context),this.setup(this.context)),this.props=t}preRender({layers:t,layerFilter:e,viewports:i,onViewportActive:n,views:r}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let s=0;s<this.shadowPasses.length;s++)this.shadowPasses[s].render({layers:t,layerFilter:e,viewports:i,onViewportActive:n,views:r,shaderModuleProps:{shadow:{shadowLightId:s,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(t,e){const i=this.shadow?{project:e.project,shadowMaps:this.shadowPasses.map(s=>s.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},n={enabled:!0,lights:this._getLights(t)},r=t.props.material;return{shadow:i,lighting:n,phongMaterial:r,gouraudMaterial:r}}cleanup(t){for(const e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,t.deck._removeDefaultShaderModule(Xi))}_calculateMatrices(){const t=[];for(const e of this.directionalLights){const i=new j().lookAt({eye:new $(e.direction).negate()});t.push(i)}return t}_createShadowPasses(t){for(let e=0;e<this.directionalLights.length;e++){const i=new id(t);this.shadowPasses[e]=i}}_applyDefaultLights(){const{ambientLight:t,pointLights:e,directionalLights:i}=this;!t&&e.length===0&&i.length===0&&(this.ambientLight=new eo(nd),this.directionalLights.push(new Ue(so[0]),new Ue(so[1])))}_getLights(t){const e=[];this.ambientLight&&e.push(this.ambientLight);for(const i of this.pointLights)e.push(i.getProjectedLight({layer:t}));for(const i of this.directionalLights)e.push(i.getProjectedLight({layer:t}));return e}},sd=class{constructor(t={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(t)}setOptions(t){Object.assign(this.opts,t)}allocate(t,e,{size:i=1,type:n,padding:r=0,copy:s=!1,initialize:o=!1,maxCount:a}){const c=n||t&&t.constructor||Float32Array,l=e*i+r;if(ArrayBuffer.isView(t)){if(l<=t.length)return t;if(l*t.BYTES_PER_ELEMENT<=t.buffer.byteLength)return new c(t.buffer,0,l)}let u=1/0;a&&(u=a*i+r);const h=this._allocate(c,l,o,u);return t&&s?h.set(t):o||h.fill(0,0,4),this._release(t),h}release(t){this._release(t)}_allocate(t,e,i,n){let r=Math.max(Math.ceil(e*this.opts.overAlloc),1);r>n&&(r=n);const s=this._pool,o=t.BYTES_PER_ELEMENT*r,a=s.findIndex(c=>c.byteLength>=o);if(a>=0){const c=new t(s.splice(a,1)[0],0,r);return i&&c.fill(0),c}return new t(r)}_release(t){if(!ArrayBuffer.isView(t))return;const e=this._pool,{buffer:i}=t,{byteLength:n}=i,r=e.findIndex(s=>s.byteLength>=n);r<0?e.push(i):(r>0||e.length<this.opts.poolSize)&&e.splice(r,0,i),e.length>this.opts.poolSize&&e.shift()}},jt=new sd;function ae(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function pt(t,e){const i=t%e;return i<0?e+i:i}function od(t){return[t[12],t[13],t[14]]}function ad(t){const e=t[10],i=t[14];return{near:i/(e-1),far:i/(e+1)}}function cd(t){return{left:Vt(t[3]+t[0],t[7]+t[4],t[11]+t[8],t[15]+t[12]),right:Vt(t[3]-t[0],t[7]-t[4],t[11]-t[8],t[15]-t[12]),bottom:Vt(t[3]+t[1],t[7]+t[5],t[11]+t[9],t[15]+t[13]),top:Vt(t[3]-t[1],t[7]-t[5],t[11]-t[9],t[15]-t[13]),near:Vt(t[3]+t[2],t[7]+t[6],t[11]+t[10],t[15]+t[14]),far:Vt(t[3]-t[2],t[7]-t[6],t[11]-t[10],t[15]-t[14])}}var oo=new $;function Vt(t,e,i,n){oo.set(t,e,i);const r=oo.len();return{distance:n/r,normal:new $(-t/r,-e/r,-i/r)}}function ao(t){return t-Math.fround(t)}var ce;function Ve(t,e){const{size:i=1,startIndex:n=0}=e,r=e.endIndex!==void 0?e.endIndex:t.length,s=(r-n)/i;ce=jt.allocate(ce,s,{type:Float32Array,size:i*2});let o=n,a=0;for(;o<r;){for(let c=0;c<i;c++){const l=t[o++];ce[a+c]=l,ce[a+c+i]=ao(l)}a+=i*2}return ce.subarray(0,s*i*2)}function ld(t){let e=null,i=!1;for(const n of t)n&&(e?(i||(e=[[e[0][0],e[0][1]],[e[1][0],e[1][1]]],i=!0),e[0][0]=Math.min(e[0][0],n[0][0]),e[0][1]=Math.min(e[0][1],n[0][1]),e[1][0]=Math.max(e[1][0],n[1][0]),e[1][1]=Math.max(e[1][1],n[1][1])):e=n);return e}var ud=Math.PI/180,hd=ae(),co=[0,0,0],fd={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};function dd({width:t,height:e,orthographic:i,fovyRadians:n,focalDistance:r,padding:s,near:o,far:a}){const c=t/e,l=i?new j().orthographic({fovy:n,aspect:c,focalDistance:r,near:o,far:a}):new j().perspective({fovy:n,aspect:c,near:o,far:a});if(s){const{left:u=0,right:h=0,top:f=0,bottom:d=0}=s,p=T((u+t-h)/2,0,t)-t/2,g=T((f+e-d)/2,0,e)-e/2;l[8]-=p*2/t,l[9]+=g*2/e}return l}var gt=class Ca{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||"viewport",this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||fd,this.focalDistance=e.focalDistance||1,this.position=e.position||co,this.modelMatrix=e.modelMatrix||null;const{longitude:i,latitude:n}=e;this.isGeospatial=Number.isFinite(n)&&Number.isFinite(i),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?V.WEB_MERCATOR:V.WEB_MERCATOR_AUTO_OFFSET:V.IDENTITY}equals(e){return e instanceof Ca?this===e?!0:e.width===this.width&&e.height===this.height&&e.scale===this.scale&&e.projectionMode===this.projectionMode&&e.resolution===this.resolution&&yt(e.distanceScales.unitsPerMeter,this.distanceScales.unitsPerMeter)&&yt(e.projectionMatrix,this.projectionMatrix)&&yt(e.viewMatrix,this.viewMatrix):!1}project(e,{topLeft:i=!0}={}){const n=qi(this.projectPosition(e),this.pixelProjectionMatrix),[r,s]=n,o=i?s:this.height-s;return e.length===2?[r,o]:[r,o,n[2]]}unproject(e,{topLeft:i=!0,targetZ:n}={}){const[r,s,o]=e,a=i?s:this.height-s,c=n&&n*this.distanceScales.unitsPerMeter[2],l=Ut([r,a,o],this.pixelUnprojectionMatrix,c),[u,h,f]=this.unprojectPosition(l);return Number.isFinite(o)?[u,h,f]:Number.isFinite(n)?[u,h,n]:[u,h]}projectPosition(e){const[i,n]=this.projectFlat(e);return[i,n,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){const[i,n]=this.unprojectFlat(e);return[i,n,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){const i=lt(e);return i[1]=T(i[1],-318,830),i}return e}unprojectFlat(e){return this.isGeospatial?xt(e):e}getBounds(e={}){const i={targetZ:e.z||0},n=this.unproject([0,0],i),r=this.unproject([this.width,0],i),s=this.unproject([0,this.height],i),o=this.unproject([this.width,this.height],i);return[Math.min(n[0],r[0],s[0],o[0]),Math.min(n[1],r[1],s[1],o[1]),Math.max(n[0],r[0],s[0],o[0]),Math.max(n[1],r[1],s[1],o[1])]}getDistanceScales(e){return e&&this.isGeospatial?Zi({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:i,width:n=1,height:r=1}){return e<this.x+this.width&&this.x<e+n&&i<this.y+this.height&&this.y<i+r}getFrustumPlanes(){return this._frustumPlanes.near?this._frustumPlanes:(Object.assign(this._frustumPlanes,cd(this.viewProjectionMatrix)),this._frustumPlanes)}panByPosition(e,i,n){return null}_initProps(e){const i=e.longitude,n=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=Ws({latitude:n})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||Zi({latitude:n,longitude:i}));const r=Math.pow(2,this.zoom);this.scale=r;const{position:s,modelMatrix:o}=e;let a=co;if(s&&(a=o?new j(o).transformAsVector(s,[]):s),this.isGeospatial){const c=this.projectPosition([i,n,0]);this.center=new $(a).scale(this.distanceScales.unitsPerMeter).add(c)}else this.center=this.projectPosition(a)}_initMatrices(e){const{viewMatrix:i=hd,projectionMatrix:n=null,orthographic:r=!1,fovyRadians:s,fovy:o=75,near:a=.1,far:c=1e3,padding:l=null,focalDistance:u=1}=e;this.viewMatrixUncentered=i,this.viewMatrix=new j().multiplyRight(i).translate(new $(this.center).negate()),this.projectionMatrix=n||dd({width:this.width,height:this.height,orthographic:r,fovyRadians:s||o*ud,focalDistance:u,padding:l,near:a,far:c});const h=ae();te(h,h,this.projectionMatrix),te(h,h,this.viewMatrix),this.viewProjectionMatrix=h,this.viewMatrixInverse=Gn([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=od(this.viewMatrixInverse);const f=ae(),d=ae();Hn(f,f,[this.width/2,-this.height/2,1]),ci(f,f,[1,-1,0]),te(d,f,this.viewProjectionMatrix),this.pixelProjectionMatrix=d,this.pixelUnprojectionMatrix=Gn(ae(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||L.warn("Pixel project matrix not invertible")()}};gt.displayName="Viewport";var le=class ri extends gt{constructor(e={}){const{latitude:i=0,longitude:n=0,zoom:r=0,pitch:s=0,bearing:o=0,nearZMultiplier:a=.1,farZMultiplier:c=1.01,nearZ:l,farZ:u,orthographic:h=!1,projectionMatrix:f,repeat:d=!1,worldOffset:p=0,position:g,padding:m,legacyMeterSizes:_=!1}=e;let{width:v,height:y,altitude:b=1.5}=e;const P=Math.pow(2,r);v=v||1,y=y||1;let E,x=null;if(f)b=f[5]/2,E=oe(b);else{e.fovy?(E=e.fovy,b=ze(E)):E=oe(b);let S;if(m){const{top:k=0,bottom:C=0}=m;S=[0,T((k+y-C)/2,0,y)-y/2]}x=Pf({width:v,height:y,scale:P,center:g&&[0,0,g[2]*Be(i)],offset:S,pitch:s,fovy:E,nearZMultiplier:a,farZMultiplier:c}),Number.isFinite(l)&&(x.near=l),Number.isFinite(u)&&(x.far=u)}let M=wf({height:y,pitch:s,bearing:o,scale:P,altitude:b});p&&(M=new j().translate([512*p,0,0]).multiplyLeft(M)),super({...e,width:v,height:y,viewMatrix:M,longitude:n,latitude:i,zoom:r,...x,fovy:E,focalDistance:b}),this.latitude=i,this.longitude=n,this.zoom=r,this.pitch=s,this.bearing=o,this.altitude=b,this.fovy=E,this.orthographic=h,this._subViewports=d?[]:null,this._pseudoMeters=_,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){const e=this.getBounds(),i=Math.floor((e[0]+180)/360),n=Math.ceil((e[2]-180)/360);for(let r=i;r<=n;r++){const s=r?new ri({...this,worldOffset:r}):this;this._subViewports.push(s)}}return this._subViewports}equals(e){return e instanceof ri&&e._pseudoMeters===this._pseudoMeters&&super.equals(e)}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);const[i,n]=this.projectFlat(e);return[i,n,(e[2]||0)*Be(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);const[i,n]=this.unprojectFlat(e);return[i,n,(e[2]||0)/Be(n)]}addMetersToLngLat(e,i){return Ys(e,i)}panByPosition(e,i,n){const r=Ut(i,this.pixelUnprojectionMatrix),s=this.projectFlat(e),o=ee([],s,Kn([],r)),a=ee([],this.center,o),[c,l]=this.unprojectFlat(a);return{longitude:c,latitude:l}}panByPosition3D(e,i){const n=e[2]||0,r=tr([],e,this.unproject(i,{targetZ:n}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){const i=xf(this,e.z||0);return[Math.min(i[0][0],i[1][0],i[2][0],i[3][0]),Math.min(i[0][1],i[1][1],i[2][1],i[3][1]),Math.max(i[0][0],i[1][0],i[2][0],i[3][0]),Math.max(i[0][1],i[1][1],i[2][1],i[3][1])]}fitBounds(e,i={}){const{width:n,height:r}=this,{longitude:s,latitude:o,zoom:a}=Ef({width:n,height:r,bounds:e,...i});return new ri({width:n,height:r,longitude:s,latitude:o,zoom:a})}};le.displayName="WebMercatorViewport";var lo=[0,0,0];function Qi(t,e,i=!1){const n=e.projectPosition(t);if(i&&e instanceof le){const[r,s,o=0]=t;n[2]=o*e.getDistanceScales([r,s]).unitsPerMeter[2]}return n}function pd(t){const{viewport:e,modelMatrix:i,coordinateOrigin:n}=t;let{coordinateSystem:r,fromCoordinateSystem:s,fromCoordinateOrigin:o}=t;return r==="default"&&(r=e.isGeospatial?"lnglat":"cartesian"),s===void 0?s=r:s==="default"&&(s=e.isGeospatial?"lnglat":"cartesian"),o===void 0&&(o=n),{viewport:e,coordinateSystem:r,coordinateOrigin:n,modelMatrix:i,fromCoordinateSystem:s,fromCoordinateOrigin:o}}function tn(t,{viewport:e,modelMatrix:i,coordinateSystem:n,coordinateOrigin:r,offsetMode:s}){let[o,a,c=0]=t;switch(i&&([o,a,c]=Qt([],[o,a,c,1],i)),n){case"default":return tn(t,{viewport:e,modelMatrix:i,coordinateSystem:e.isGeospatial?"lnglat":"cartesian",coordinateOrigin:r,offsetMode:s});case"lnglat":return Qi([o,a,c],e,s);case"lnglat-offsets":return Qi([o+r[0],a+r[1],c+(r[2]||0)],e,s);case"meter-offsets":return Qi(Ys(r,[o,a,c]),e,s);case"cartesian":return e.isGeospatial?[o+r[0],a+r[1],c+r[2]]:e.projectPosition([o,a,c]);default:throw new Error(`Invalid coordinateSystem: ${n}`)}}function uo(t,e){const{viewport:i,coordinateSystem:n,coordinateOrigin:r,modelMatrix:s,fromCoordinateSystem:o,fromCoordinateOrigin:a}=pd(e),{autoOffset:c=!0}=e,{geospatialOrigin:l=lo,shaderCoordinateOrigin:u=lo,offsetMode:h=!1}=c?Us(i,n,r):{},f=tn(t,{viewport:i,modelMatrix:s,coordinateSystem:o,coordinateOrigin:a,offsetMode:h});if(h){const d=i.projectPosition(l||u);Wn(f,f,d)}return f}var gd=[255,255,255],md=1,_d=[1,0,0],vd=[0,0,1],yd=0,ho=class{constructor(t={}){this.type="point";const{color:e=gd}=t,{intensity:i=md}=t,{position:n=vd}=t;this.id=t.id||`point-${yd++}`,this.color=e,this.intensity=i,this.type="point",this.position=n,this.attenuation=bd(t),this.projectedLight={...this}}getProjectedLight({layer:t}){const{projectedLight:e}=this,i=t.context.viewport,{coordinateSystem:n,coordinateOrigin:r}=t.props,s=uo(this.position,{viewport:i,coordinateSystem:n,coordinateOrigin:r,fromCoordinateSystem:i.isGeospatial?re.LNGLAT:re.CARTESIAN,fromCoordinateOrigin:[0,0,0]});return e.color=this.color,e.intensity=this.intensity,e.position=s,e}};function bd(t){return t.attenuation?t.attenuation:_d}var wd=class extends ho{getProjectedLight({layer:t}){const{projectedLight:e}=this,i=t.context.viewport,{coordinateSystem:n,coordinateOrigin:r,modelMatrix:s}=t.props,{cameraPosition:o}=js({viewport:i,modelMatrix:s,coordinateSystem:n,coordinateOrigin:r});return e.color=this.color,e.intensity=this.intensity,e.position=o,e}},Mt=Math.PI/180,Pd=864e5,Ed=2440588,Sd=2451545,Fe=Mt*23.4397,xd=357.5291,Md=.98560028,Td=280.147,Cd=360.9856235;function Ad(t,e,i){const n=Mt*-i,r=Mt*e,s=Id(t),o=Ud(s),a=Bd(s,n)-o.rightAscension;return{azimuth:Od(a,r,o.declination),altitude:Dd(a,r,o.declination)}}function fo(t,e,i){const{azimuth:n,altitude:r}=Ad(t,e,i);return[Math.sin(n)*Math.cos(r),Math.cos(n)*Math.cos(r),-Math.sin(r)]}function Ld(t){return(typeof t=="number"?t:t.getTime())/Pd-.5+Ed}function Id(t){return Ld(t)-Sd}function kd(t,e){const i=t;return Math.atan2(Math.sin(i)*Math.cos(Fe)-Math.tan(e)*Math.sin(Fe),Math.cos(i))}function Rd(t,e){const i=t;return Math.asin(Math.sin(e)*Math.cos(Fe)+Math.cos(e)*Math.sin(Fe)*Math.sin(i))}function Od(t,e,i){const n=t,r=e,s=i;return Math.atan2(Math.sin(n),Math.cos(n)*Math.sin(r)-Math.tan(s)*Math.cos(r))}function Dd(t,e,i){const n=t,r=e,s=i;return Math.asin(Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(n))}function Bd(t,e){return Mt*(Td+Cd*t)-e}function zd(t){return Mt*(xd+Md*t)}function Nd(t){const e=t,i=Mt*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e)),n=Mt*102.9372;return e+i+n+Math.PI}function Ud(t){const e=Nd(zd(t));return{declination:Rd(e,0),rightAscension:kd(e,0)}}var jd=class extends Ue{constructor(t){super(t),this.timestamp=t.timestamp}getProjectedLight({layer:t}){const{viewport:e}=t.context;if(e.resolution&&e.resolution>0){const[i,n,r]=fo(this.timestamp,0,0);this.direction=[i,-r,n]}else{const{latitude:i,longitude:n}=e;this.direction=fo(this.timestamp,i,n)}return this}},Vd={name:"screen",fs:`layout(std140) uniform screenUniforms {
  vec2 texSize;
} screen;
`,uniformTypes:{texSize:"vec2<f32>"}},Fd=class extends io{constructor(t,e){super(t,e);const{module:i,fs:n,id:r}=e,s={depthWriteEnabled:!1,depthCompare:"always",depthBias:0,blend:!0,blendColorSrcFactor:"one",blendColorDstFactor:"one-minus-src-alpha",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",blendColorOperation:"add",blendAlphaOperation:"add"};this.model=new Ba(t,{id:r,fs:n,modules:[i,Vd],parameters:s})}render(t){this._renderPass(this.device,t)}delete(){this.model.destroy(),this.model=null}_renderPass(t,e){const{clearCanvas:i,inputBuffer:n,outputBuffer:r}=e,s=[n.width,n.height],o={texSrc:n.colorAttachments[0],texSize:s};this.model.shaderInputs.setProps({screen:o,...e.moduleProps});const a=this.device.beginRenderPass({framebuffer:r,parameters:{viewport:[0,0,...s]},clearColor:i?[0,0,0,0]:!1,clearDepth:1,clearStencil:!1});this.model.draw(a),a.end()}},Gd=class{constructor(t,e){this.id=`${t.name}-pass`,this.props=e,Fa(t),this.module=t}setup({device:t}){this.passes=$d(t,this.module,this.id)}setProps(t){this.props=t}preRender(){}postRender(t){const e=this.passes,{target:i}=t;let n=t.inputBuffer,r=t.swapBuffer;for(let s=0;s<e.length;s++){const o=s===e.length-1,a=i!==void 0&&o;a&&(r=i);const c=!a||!!t.clearCanvas,l={},u=this.module.passes[s].uniforms;l[this.module.name]={...this.props,...u},e[s].render({clearCanvas:c,inputBuffer:n,outputBuffer:r,moduleProps:l});const h=r;r=n,n=h}return n}cleanup(){if(this.passes){for(const t of this.passes)t.delete();this.passes=void 0}}};function $d(t,e,i){return e.passes.map((n,r)=>{const s=Hd(e,n);return new Fd(t,{id:`${i}-${r}`,module:e,fs:s})})}var po=`#version 300 es
uniform sampler2D texSrc;

in vec2 position;
in vec2 coordinate;
in vec2 uv;

out vec4 fragColor;
`,Wd=t=>`${po}
void main() {
  fragColor = texture(texSrc, coordinate);
  fragColor = ${t}(fragColor, screen.texSize, coordinate);
}
`,Yd=t=>`${po}
void main() {
  fragColor = ${t}(texSrc, screen.texSize, coordinate);
}
`;function Hd(t,e){return e.filter?Wd(typeof e.filter=="string"?e.filter:`${t.name}_filterColor_ext`):e.sampler?Yd(typeof e.sampler=="string"?e.sampler:`${t.name}_sampleColor`):""}var Zd={blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"zero",blendAlphaOperation:"add",blendAlphaSrcFactor:"constant",blendAlphaDstFactor:"zero"},en=class extends je{constructor(){super(...arguments),this._colorEncoderState=null}render(t){return"pickingFBO"in t?this._drawPickingBuffer(t):{decodePickingColor:null,stats:super._render(t)}}_drawPickingBuffer({layers:t,layerFilter:e,views:i,viewports:n,onViewportActive:r,pickingFBO:s,deviceRect:{x:o,y:a,width:c,height:l},cullRect:u,effects:h,pass:f="picking",pickZ:d,canvasContext:p,shaderModuleProps:g,clearColor:m}){this.pickZ=d;const _=this._resetColorEncoder(d),v=[o,a,c,l],y=super._render({target:s,layers:t,layerFilter:e,views:i,viewports:n,onViewportActive:r,cullRect:u,effects:h?.filter(b=>b.useInPicking),pass:f,canvasContext:p,isPicking:!0,shaderModuleProps:g,clearColor:m??[0,0,0,0],colorMask:15,scissorRect:v});return this._colorEncoderState=null,{decodePickingColor:_&&qd.bind(null,_),stats:y}}shouldDrawLayer(t){const{pickable:e,operation:i}=t.props;return e&&i.includes("draw")||i.includes("terrain")||i.includes("mask")}getShaderModuleProps(t,e,i){return{picking:{isActive:1,isAttribute:this.pickZ,disabledPickingIndices:t.internalState?.disabledPickingIndices},lighting:{enabled:!1}}}getLayerParameters(t,e,i){const n={...t.props.parameters},{pickable:r,operation:s}=t.props;return this._colorEncoderState?r&&s.includes("draw")?(Object.assign(n,Zd),n.blend=!0,this.device.type==="webgpu"?n.blendConstant=go(this._colorEncoderState,t,i):n.blendColor=go(this._colorEncoderState,t,i),s.includes("terrain")&&t.state?._hasPickingCover&&(n.blendAlphaSrcFactor="one")):s.includes("terrain")&&(n.blend=!1):n.blend=!1,n}_resetColorEncoder(t){return this._colorEncoderState=t?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}};function go(t,e,i){const{byLayer:n,byAlpha:r}=t;let s,o=n.get(e);return o?(o.viewports.push(i),s=o.a):(s=n.size+1,s<=255?(o={a:s,layer:e,viewports:[i]},n.set(e,o),r[s]=o):(L.warn("Too many pickable layers, only picking the first 255")(),s=0)),[0,0,0,s/255]}function qd(t,e){const i=t.byAlpha[e[3]];return i&&{pickedLayer:i.layer,pickedViewports:i.viewports,pickedObjectIndex:i.layer.decodePickingColor(e)}}var Ft={NO_STATE:"Awaiting state",MATCHED:"Matched. State transferred from previous layer",INITIALIZED:"Initialized",AWAITING_GC:"Discarded. Awaiting garbage collection",AWAITING_FINALIZATION:"No longer matched. Awaiting garbage collection",FINALIZED:"Finalized! Awaiting garbage collection"},Ge=Symbol.for("component"),mt=Symbol.for("propTypes"),nn=Symbol.for("deprecatedProps"),Gt=Symbol.for("asyncPropDefaults"),Tt=Symbol.for("asyncPropOriginal"),_t=Symbol.for("asyncPropResolved");function $e(t,e=()=>!0){return Array.isArray(t)?mo(t,e,[]):e(t)?[t]:[]}function mo(t,e,i){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?mo(r,e,i):e(r)&&i.push(r)}return i}function _o({target:t,source:e,start:i=0,count:n=1}){const r=e.length,s=n*r;let o=0;for(let a=i;o<r;o++)t[a++]=e[o];for(;o<s;)o<s-o?(t.copyWithin(i+o,i,i+o),o*=2):(t.copyWithin(i+o,i,i+s-o),o=s);return t}var Xd=class{constructor(t,e,i){this._loadCount=0,this._subscribers=new Set,this.id=t,this.context=i,this.setData(e)}subscribe(t){this._subscribers.add(t)}unsubscribe(t){this._subscribers.delete(t)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(t,e){if(t===this._data&&!e)return;this._data=t;const i=++this._loadCount;let n=t;typeof t=="string"&&(n=xe(t)),n instanceof Promise?(this.isLoaded=!1,this._loader=n.then(r=>{this._loadCount===i&&(this.isLoaded=!0,this._error=void 0,this._content=r)}).catch(r=>{this._loadCount===i&&(this.isLoaded=!0,this._error=r||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=t);for(const r of this._subscribers)r.onChange(this.getData())}},Kd=class{constructor(t){this.protocol=t.protocol||"resource://",this._context={device:t.device,gl:t.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(t){return t.startsWith(this.protocol)?!0:t in this._resources}add({resourceId:t,data:e,forceUpdate:i=!1,persistent:n=!0}){let r=this._resources[t];r?r.setData(e,i):(r=new Xd(t,e,this._context),this._resources[t]=r),r.persistent=n}remove(t){const e=this._resources[t];e&&(e.delete(),delete this._resources[t])}unsubscribe({consumerId:t}){const e=this._consumers[t];if(e){for(const i in e){const n=e[i],r=this._resources[n.resourceId];r&&r.unsubscribe(n)}delete this._consumers[t],this.prune()}}subscribe({resourceId:t,onChange:e,consumerId:i,requestId:n="default"}){const{_resources:r,protocol:s}=this;t.startsWith(s)&&(t=t.replace(s,""),r[t]||this.add({resourceId:t,data:null,persistent:!1}));const o=r[t];if(this._track(i,n,o,e),o)return o.getData()}prune(){this._pruneRequest||(this._pruneRequest=setTimeout(()=>this._prune(),0))}finalize(){for(const t in this._resources)this._resources[t].delete()}_track(t,e,i,n){const r=this._consumers,s=r[t]=r[t]||{};let o=s[e];const a=o&&o.resourceId&&this._resources[o.resourceId];a&&(a.unsubscribe(o),this.prune()),i&&(o?(o.onChange=n,o.resourceId=i.id):o={onChange:n,resourceId:i.id},s[e]=o,i.subscribe(o))}_prune(){this._pruneRequest=null;for(const t of Object.keys(this._resources)){const e=this._resources[t];!e.persistent&&!e.inUse()&&(e.delete(),delete this._resources[t])}}},Jd="layerManager.setLayers",Qd="layerManager.activateViewport",vo=class{constructor(t,e){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=o=>{B(Qd,this,o),o&&(this.context.viewport=o)};const{deck:i,stats:n,viewport:r,timeline:s}=e||{};this.layers=[],this.resourceManager=new Kd({device:t,protocol:"deck://"}),this.context={mousePosition:null,userData:{},layerManager:this,device:t,gl:t?.gl,deck:i,shaderAssembler:to(t?.info?.shadingLanguage||"glsl"),defaultShaderModules:[Yu],renderPass:void 0,stats:n||new Fn({id:"deck.gl"}),viewport:r||new gt({id:"DEFAULT-INITIAL-VIEWPORT"}),timeline:s||new Qn,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){this.resourceManager.finalize();for(const t of this.layers)this._finalizeLayer(t)}needsRedraw(t={clearRedrawFlags:!1}){let e=this._needsRedraw;t.clearRedrawFlags&&(this._needsRedraw=!1);for(const i of this.layers){const n=i.getNeedsRedraw(t);e=e||n}return e}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?"layers changed":this._defaultShaderModulesChanged?"shader modules changed":this._needsUpdate}setNeedsRedraw(t){this._needsRedraw=this._needsRedraw||t}setNeedsUpdate(t){this._needsUpdate=this._needsUpdate||t}getLayers({layerIds:t}={}){return t?this.layers.filter(e=>t.find(i=>e.id.indexOf(i)===0)):this.layers}setProps(t){"debug"in t&&(this._debug=t.debug),"userData"in t&&(this.context.userData=t.userData),"layers"in t&&(this._nextLayers=t.layers),"onError"in t&&(this.context.onError=t.onError)}setLayers(t,e){B(Jd,this,e,t),this._lastRenderedLayers=t;const i=$e(t,Boolean);for(const n of i)n.context=this.context;this._updateLayers(this.layers,i)}updateLayers(){const t=this.needsUpdate();t&&(this.setNeedsRedraw(`updating layers: ${t}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,t)),this._nextLayers=null}addDefaultShaderModule(t){const{defaultShaderModules:e}=this.context;e.find(i=>i.name===t.name)||(e.push(t),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(t){const{defaultShaderModules:e}=this.context,i=e.findIndex(n=>n.name===t.name);i>=0&&(e.splice(i,1),this._defaultShaderModulesChanged=!0)}_handleError(t,e,i){i.raiseError(e,`${t} of ${i}`)}_updateLayers(t,e){const i={};for(const s of t)i[s.id]?L.warn(`Multiple old layers with same id ${s.id}`)():i[s.id]=s;if(this._defaultShaderModulesChanged){for(const s of t)s.setNeedsUpdate(),s.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}const n=[];this._updateSublayersRecursively(e,i,n),this._finalizeOldLayers(i);let r=!1;for(const s of n)if(s.hasUniformTransition()){r=`Uniform transition in ${s}`;break}this._needsUpdate=r,this.layers=n}_updateSublayersRecursively(t,e,i){for(const n of t){n.context=this.context;const r=e[n.id];r===null&&L.warn(`Multiple new layers with same id ${n.id}`)(),e[n.id]=null;let s=null;try{this._debug&&r!==n&&n.validateProps(),r?(this._transferLayerState(r,n),this._updateLayer(n)):this._initializeLayer(n),i.push(n),s=n.isComposite?n.getSubLayers():null}catch(o){this._handleError("matching",o,n)}s&&this._updateSublayersRecursively(s,e,i)}}_finalizeOldLayers(t){for(const e in t){const i=t[e];i&&this._finalizeLayer(i)}}_initializeLayer(t){try{t._initialize(),t.lifecycle=Ft.INITIALIZED}catch(e){this._handleError("initialization",e,t)}}_transferLayerState(t,e){e._transferState(t),e.lifecycle=Ft.MATCHED,e!==t&&(t.lifecycle=Ft.AWAITING_GC)}_updateLayer(t){try{t._update()}catch(e){this._handleError("update",e,t)}}_finalizeLayer(t){this._needsRedraw=this._needsRedraw||`finalized ${t}`,t.lifecycle=Ft.AWAITING_FINALIZATION;try{t._finalize(),t.lifecycle=Ft.FINALIZED}catch(e){this._handleError("finalization",e,t)}}};function z(t,e,i){if(t===e)return!0;if(!i||!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!z(t[n],e[n],i-1))return!1;return!0}if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const s of n)if(!e.hasOwnProperty(s)||!z(t[s],e[s],i-1))return!1;return!0}return!1}var tp="default-canvas",ep=class{constructor(t){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=t.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw="First render",this._needsUpdate="Initialize",this._eventManager=t.eventManager,this._eventManagers=t.eventManagers||{},this._viewEventManagers={},this._eventCallbacks={onViewStateChange:t.onViewStateChange,onInteractionStateChange:t.onInteractionStateChange},this._pickPosition=t.pickPosition,this._getCanvasContext=t.getCanvasContext,Object.seal(this),this.setProps(t)}finalize(){for(const t in this.controllers){const e=this.controllers[t];e&&e.finalize()}this.controllers={}}needsRedraw(t={clearRedrawFlags:!1}){const e=this._needsRedraw;return t.clearRedrawFlags&&(this._needsRedraw=!1),e}setNeedsUpdate(t){this._needsUpdate=this._needsUpdate||t,this._needsRedraw=this._needsRedraw||t}updateViewStates(){for(const t in this.controllers){const e=this.controllers[t];e&&e.updateTransition()}}getViewports(t){return t?this._viewports.filter(e=>{const i=!t.canvasId||this.getCanvasId(e.id)===t.canvasId,n=!("x"in t)||e.containsPixel(t);return i&&n}):this._viewports}getViews(){const t={};return this.views.forEach(e=>{t[e.id]=e}),t}getView(t){return this.views.find(e=>e.id===t)}getViewState(t){const e=typeof t=="string"?this.getView(t):t,i=e&&this.viewState[e.getViewStateId()]||this.viewState;return e?e.filterViewState(i):i}getViewport(t){return this._viewportMap[t]}getCanvasId(t){const e=typeof t=="string"?this.getView(t):t;return e?this._viewEventManagers[e.id]?.canvasId||this._getCanvasIdFromView(e):void 0}unproject(t,e){const i=this.getViewports(),n={x:t[0],y:t[1]};for(let r=i.length-1;r>=0;--r){const s=i[r];if(s.containsPixel(n)){const o=t.slice();return o[0]-=s.x,o[1]-=s.y,s.unproject(o,e)}}return null}setProps(t){t.views&&this._setViews(t.views),t.viewState&&this._setViewState(t.viewState),("width"in t||"height"in t)&&this._setSize(t.width,t.height),"pickPosition"in t&&(this._pickPosition=t.pickPosition),"eventManagers"in t&&this._setEventManagers(t.eventManagers||{}),this._isUpdating||this._update()}_update(){this._isUpdating=!0;try{this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports())}finally{this._isUpdating=!1}}_hasViewState(t){const e=t.props.viewState;if(e&&typeof e=="object"&&!e.id||this.viewState[t.getViewStateId()])return!0;const i=Object.values(this.viewState);return i.length===0||i.some(n=>!n||typeof n!="object"||Array.isArray(n))}_setSize(t,e){(t!==this.width||e!==this.height)&&(this.width=t,this.height=e,this.setNeedsUpdate("Size changed"))}_setViews(t){t=$e(t,Boolean),this._diffViews(t,this.views)&&this.setNeedsUpdate("views changed"),this.views=t}_setViewState(t){t?(z(t,this.viewState,3)||this.setNeedsUpdate("viewState changed"),this.viewState=t):L.warn("missing `viewState` or `initialViewState`")()}_setEventManagers(t){this._eventManagers!==t&&(this._eventManagers=t,this.setNeedsUpdate("eventManagers changed"))}_getCanvasIdFromView(t){return t.props.canvasId||this._getCanvasContext?.(t.id)?.id||"default-canvas"}_getCanvasDimensions(t){const[e,i]=this._getCanvasContext?.(t.id)?.getCSSSize()||[this.width,this.height];return{width:e,height:i}}_getViewEventManager(t){const e=this.getCanvasId(t)||"default-canvas";return{canvasId:e,eventManager:this._eventManagers[e]||this._eventManager}}_startViewportRebuild(){const t=this.controllers,e=this._viewEventManagers;return this._viewports=[],this.controllers={},this._viewEventManagers={},{oldControllers:t,oldViewEventManagers:e}}_getReusableController(t,e,i){return t&&(e?.canvasId!==i.canvasId||e?.eventManager!==i.eventManager)?(t.finalize(),null):t}_createController(t,e){const i=e.type;return new i({timeline:this.timeline,eventManager:this._getViewEventManager(t).eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:n=>this.getView(t.id)?.makeViewport({viewState:n,...this._getCanvasDimensions(t)}),pickPosition:(n,r)=>this._pickPosition?.(n,r,t.id)})}_updateController(t,e,i,n){const r=t.controller;if(r&&i){const s={...e,...r,id:t.id,x:i.x,y:i.y,width:i.width,height:i.height};return(!n||n.constructor!==r.type)&&(n=this._createController(t,s)),n&&n.setProps(s),n}return null}_rebuildViewports(){const{views:t}=this,{oldControllers:e,oldViewEventManagers:i}=this._startViewportRebuild();let n=!1;for(let r=t.length;r--;){const s=t[r],{width:o,height:a}=this._getCanvasDimensions(s),c=this._getViewEventManager(s);this._viewEventManagers[s.id]=c;const l=this.getViewState(s),u=s.makeViewport({viewState:l,width:o,height:a});let h=this._getReusableController(e[s.id],i[s.id],c),f=!!s.controller;f&&!this._hasViewState(s)&&(f=!1),f&&!h&&(n=!0),(n||!f)&&h&&(h.finalize(),h=null),this.controllers[s.id]=f?this._updateController(s,l,u,h):null,u&&this._viewports.unshift(u)}for(const r in e){const s=e[r];s&&!this.controllers[r]&&s.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(t=>{t.id&&(this._viewportMap[t.id]=this._viewportMap[t.id]||t)})}_diffViews(t,e){return t.length!==e.length?!0:t.some((i,n)=>!t[n].equals(e[n]))}},ip=/^(?:\d+\.?\d*|\.\d+)$/;function Y(t){switch(typeof t){case"number":if(!Number.isFinite(t))throw new Error(`Could not parse position string ${t}`);return{type:"literal",value:t};case"string":try{return new rp(np(t)).parseExpression()}catch(e){const i=e instanceof Error?e.message:String(e);throw new Error(`Could not parse position string ${t}: ${i}`)}default:throw new Error(`Could not parse position string ${t}`)}}function rn(t,e){switch(t.type){case"literal":return t.value;case"percentage":return Math.round(t.value*e);case"binary":const i=rn(t.left,e),n=rn(t.right,e);return t.operator==="+"?i+n:i-n;default:throw new Error("Unknown layout expression type")}}function H(t,e){return rn(t,e)}function np(t){const e=[];let i=0;for(;i<t.length;){const n=t[i];if(/\s/.test(n)){i++;continue}if(n==="+"||n==="-"||n==="("||n===")"||n==="%"){e.push({type:"symbol",value:n}),i++;continue}if(yo(n)||n==="."){const r=i;let s=n===".";for(i++;i<t.length;){const a=t[i];if(yo(a)){i++;continue}if(a==="."&&!s){s=!0,i++;continue}break}const o=t.slice(r,i);if(!ip.test(o))throw new Error("Invalid number token");e.push({type:"number",value:parseFloat(o)});continue}if(bo(n)){const r=i;for(;i<t.length&&bo(t[i]);)i++;const s=t.slice(r,i).toLowerCase();e.push({type:"word",value:s});continue}throw new Error("Invalid token in position string")}return e}var rp=class{constructor(t){this.index=0,this.tokens=t}parseExpression(){const t=this.parseBinaryExpression();if(this.index<this.tokens.length)throw new Error("Unexpected token at end of expression");return t}parseBinaryExpression(){let t=this.parseFactor(),e=this.peek();for(;sp(e);){this.index++;const i=this.parseFactor();t={type:"binary",operator:e.value,left:t,right:i},e=this.peek()}return t}parseFactor(){const t=this.peek();if(!t)throw new Error("Unexpected end of expression");if(t.type==="symbol"&&t.value==="+")return this.index++,this.parseFactor();if(t.type==="symbol"&&t.value==="-")return this.index++,{type:"binary",operator:"-",left:{type:"literal",value:0},right:this.parseFactor()};if(t.type==="symbol"&&t.value==="("){this.index++;const e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw new Error("Missing closing parenthesis");return e}if(t.type==="word"&&t.value==="calc"){if(this.index++,!this.consumeSymbol("("))throw new Error("Missing opening parenthesis after calc");const e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw new Error("Missing closing parenthesis");return e}if(t.type==="number"){this.index++;const e=t.value,i=this.peek();return i&&i.type==="symbol"&&i.value==="%"?(this.index++,{type:"percentage",value:e/100}):i&&i.type==="word"&&i.value==="px"?(this.index++,{type:"literal",value:e}):{type:"literal",value:e}}throw new Error("Unexpected token in expression")}consumeSymbol(t){const e=this.peek();return e&&e.type==="symbol"&&e.value===t?(this.index++,!0):!1}peek(){return this.tokens[this.index]||null}};function yo(t){return t>="0"&&t<="9"}function bo(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}function sp(t){return!!(t&&t.type==="symbol"&&(t.value==="+"||t.value==="-"))}function op(t,e){const i={...t};for(const n in e)n!=="id"&&(Array.isArray(i[n])&&Array.isArray(e[n])?i[n]=ap(i[n],e[n]):i[n]=e[n]);return i}function ap(t,e){t=t.slice();for(let i=0;i<e.length;i++){const n=e[i];Number.isFinite(n)&&(t[i]=n)}return t}var $t=class{constructor(t){const{id:e,x:i=0,y:n=0,width:r="100%",height:s="100%",padding:o=null}=t;this.id=e||this.constructor.displayName||"view",this.props={...t,id:this.id},this._x=Y(i),this._y=Y(n),this._width=Y(r),this._height=Y(s),this._padding=o&&{left:Y(o.left||0),right:Y(o.right||0),top:Y(o.top||0),bottom:Y(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(t){return this===t?!0:this.constructor===t.constructor&&z(this.props,t.props,2)}clone(t){const e=this.constructor;return new e({...this.props,...t})}makeViewport({width:t,height:e,viewState:i}){i=this.filterViewState(i);const n=this.getDimensions({width:t,height:e});return!n.height||!n.width?null:new(this.getViewportType(i))({...i,...this.props,...n})}getViewStateId(){const{viewState:t}=this.props;return typeof t=="string"?t:t?.id||this.id}filterViewState(t){return this.props.viewState&&typeof this.props.viewState=="object"?this.props.viewState.id?op(t,this.props.viewState):this.props.viewState:t}getDimensions({width:t,height:e}){const i={x:H(this._x,t),y:H(this._y,e),width:H(this._width,t),height:H(this._height,e)};return this._padding&&(i.padding={left:H(this._padding.left,t),top:H(this._padding.top,e),right:H(this._padding.right,t),bottom:H(this._padding.bottom,e)}),i}get controller(){const t=this.props.controller;return t?t===!0?{type:this.ControllerType}:typeof t=="function"?{type:t}:{type:this.ControllerType,...t}:null}},We=class{constructor(t){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=t}get inProgress(){return this._inProgress}start(t){this.cancel(),this.settings=t,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1)}update(){if(!this._inProgress)return!1;if(this._handle===null){const{_timeline:t,settings:e}=this;this._handle=t.addChannel({delay:t.getTime(),duration:e.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}},wo=()=>{},Po={mode:"preserve"},cp={mode:"hard"},Ye={BREAK:1,SNAP_TO_END:2,IGNORE:3},lp=t=>t,up=Ye.BREAK,hp=class{constructor(t){this._onTransitionUpdate=e=>{const{time:i,settings:{interpolator:n,startProps:r,endProps:s,duration:o,easing:a}}=e,c=a(i/o),l=n.interpolateProps(r,s,c);this.propsInTransition=this.getControllerState({...this.props,...l},Po).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=t.getControllerState,this.propsInTransition=null,this.transition=new We(t.timeline),this.onViewStateChange=t.onViewStateChange||wo,this.onStateChange=t.onStateChange||wo}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(t){let e=!1;const i=this.props;if(this.props=t,!i||this._shouldIgnoreViewportChange(i,t))return!1;if(this._isTransitionEnabled(t)){let n=i;if(this.transition.inProgress){const{interruption:r,endProps:s}=this.transition.settings;n={...i,...r===Ye.SNAP_TO_END?s:this.propsInTransition||i}}this._triggerTransition(n,t),e=!0}else this.transition.cancel();return e}updateTransition(){this.transition.update()}_isTransitionEnabled(t){const{transitionDuration:e,transitionInterpolator:i}=t;return(e>0||e==="auto")&&!!i}_isUpdateDueToCurrentTransition(t){return this.transition.inProgress&&this.propsInTransition?this.transition.settings.interpolator.arePropsEqual(t,this.propsInTransition):!1}_shouldIgnoreViewportChange(t,e){return this.transition.inProgress?this.transition.settings.interruption===Ye.IGNORE||this._isUpdateDueToCurrentTransition(e):this._isTransitionEnabled(e)?e.transitionInterpolator.arePropsEqual(t,e):!0}_triggerTransition(t,e){const i=this.getControllerState(t,Po),n=this.getControllerState(e,cp).shortestPathFrom(i),r=e.transitionInterpolator,s=r.getDuration?r.getDuration(t,e):e.transitionDuration;if(s===0)return;const o=r.initializeProps(t,n);this.propsInTransition={};const a={duration:s,easing:e.transitionEasing||lp,interpolator:r,interruption:e.transitionInterruption||up,startProps:o.start,endProps:o.end,onStart:e.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(e.onTransitionInterrupt),onEnd:this._onTransitionEnd(e.onTransitionEnd)};this.transition.start(a),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(t){return e=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),t?.(e)}}};function I(t,e){if(!t)throw new Error(e||"deck.gl: assertion failed.")}var He=class{constructor(t){const{compare:e,extract:i,required:n}=t;this._propsToCompare=e,this._propsToExtract=i||e,this._requiredProps=n}arePropsEqual(t,e){for(const i of this._propsToCompare)if(!(i in t)||!(i in e)||!yt(t[i],e[i]))return!1;return!0}initializeProps(t,e){const i={},n={};for(const r of this._propsToExtract)(r in t||r in e)&&(i[r]=t[r],n[r]=e[r]);return this._checkRequiredProps(i),this._checkRequiredProps(n),{start:i,end:n}}getDuration(t,e){return e.transitionDuration}_checkRequiredProps(t){this._requiredProps&&this._requiredProps.forEach(e=>{const i=t[e];I(Number.isFinite(i)||Array.isArray(i),`${e} is required for transition`)})}},fp=["longitude","latitude","zoom","bearing","pitch"],dp=["longitude","latitude","zoom"],Ct=class extends He{constructor(t={}){const e=Array.isArray(t)?t:t.transitionProps,i=Array.isArray(t)?{}:t;i.transitionProps=Array.isArray(e)?{compare:e,required:e}:e||{compare:fp,required:dp},super(i.transitionProps),this.opts=i}initializeProps(t,e){const i=super.initializeProps(t,e),{makeViewport:n,around:r}=this.opts;if(n&&r){const s=n(t),o=n(e),a=s.unproject(r);i.start.around=r,Object.assign(i.end,{around:o.project(a),aroundPosition:a,width:e.width,height:e.height})}return i}interpolateProps(t,e,i){const n={};for(const r of this._propsToExtract)n[r]=ve(t[r]||0,e[r]||0,i);if(e.aroundPosition&&this.opts.makeViewport){const r=this.opts.makeViewport({...e,...n});Object.assign(n,r.panByPosition(e.aroundPosition,ve(t.around,e.around,i)))}return n}},rt={transitionDuration:0},pp=300,gp=300,sn=t=>1-(1-t)*(1-t),mp=t=>t===1?1:1-Math.pow(2,-10*t),At={WHEEL:["wheel"],PAN:["panstart","panmove","panend"],PINCH:["pinchstart","pinchmove","pinchend"],MULTI_PAN:["multipanstart","multipanmove","multipanend"],DOUBLE_CLICK:["dblclick"],DOUBLE_CLICK_DRAG:["dblclickdragstart","dblclickdragmove","dblclickdragend","dblclickdragcancel"],KEYBOARD:["keydown"]},Lt={},Wt=class{constructor(t){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this._multiPanMode=null,this._multiPanStartCenter=null,this._doubleClickDragAnchor=null,this._suppressDoubleClickUntil=0,this.invertPan=!1,this.dragMode="rotate",this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.doubleClickDragZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.multiTouchDrag=null,this.trackpadGesture=!1,this.zoomAround="pointer",this.keyboard=!0,this.transitionManager=new hp({...t,getControllerState:(e,i)=>new this.ControllerState({...e,constraintContext:i,makeViewport:t.makeViewport}),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=t.eventManager,this.onViewStateChange=t.onViewStateChange||(()=>{}),this.onStateChange=t.onStateChange||(()=>{}),this.makeViewport=t.makeViewport,this.pickPosition=t.pickPosition}set events(t){this.toggleEvents(this._customEvents,!1),this.toggleEvents(t,!0),this._customEvents=t,this.props&&this.setProps(this.props)}finalize(){for(const t in this._events)this._events[t]&&this.eventManager?.off(t,this.handleEvent);this.transitionManager.finalize()}handleEvent(t){this._controllerState=void 0;const e=this._eventStartBlocked;switch(t.type){case"panstart":return e?!1:this._onPanStart(t);case"panmove":return this._onPan(t);case"panend":return this._onPanEnd(t);case"pinchstart":return e||!this._isTrackpadGestureAllowed(t)?!1:this._onPinchStart(t);case"pinchmove":return this._isTrackpadGestureAllowed(t)?this._onPinch(t):!1;case"pinchend":return this._isTrackpadGestureAllowed(t)?this._onPinchEnd(t):!1;case"multipanstart":return e?!1:this._onMultiPanStart(t);case"multipanmove":return this._onMultiPan(t);case"multipanend":return this._onMultiPanEnd(t);case"dblclick":return this._onDoubleClick(t);case"dblclickdragstart":return e?!1:this._onDoubleClickDragStart(t);case"dblclickdragmove":return this._onDoubleClickDrag(t);case"dblclickdragend":case"dblclickdragcancel":return this._onDoubleClickDragEnd(t);case"wheel":return this._onWheel(t);case"keydown":return this._onKeyDown(t);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(t){const{x:e,y:i}=this.props,{offsetCenter:n}=t;return[n.x-e,n.y-i]}getZoomPosition(t){if(this.zoomAround==="pointer")return t;const e=this.makeViewport(this.controllerState.getViewportProps()),[i,n]=qi(e.center,e.pixelProjectionMatrix);return[i,n]}isPointInBounds(t,e){const{width:i,height:n}=this.props;if(e&&e.handled)return!1;const r=t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=n;return r&&e&&e.stopPropagation(),r}isFunctionKeyPressed(t){const{srcEvent:e}=t;return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(t){const e=setTimeout(()=>{this._eventStartBlocked===e&&(this._eventStartBlocked=null)},t);this._eventStartBlocked=e}setProps(t){t.maxBoundsPadding===void 0&&(t.maxBoundsPadding=null),t.dragMode&&(this.dragMode=t.dragMode);const e=this.props;this.props=t,"transitionInterpolator"in t||(t.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(t);const{inertia:i}=t;this.inertia=Number.isFinite(i)?i:i===!0?pp:0;const{scrollZoom:n=!0,dragPan:r=!0,dragRotate:s=!0,doubleClickZoom:o=!0,doubleClickDragZoom:a=!1,touchZoom:c=!0,touchRotate:l=!1,multiTouchDrag:u=l?"rotate":null,trackpadGesture:h=!1,zoomAround:f="pointer",keyboard:d=!0}=t,p=!!this.onViewStateChange;if(this.toggleEvents(At.WHEEL,p&&n),this.toggleEvents(At.PAN,p),this.toggleEvents(At.PINCH,p&&(c||u==="rotate")),this.toggleEvents(At.MULTI_PAN,p&&!!u),this.toggleEvents(At.DOUBLE_CLICK,p&&o),this.toggleEvents(At.DOUBLE_CLICK_DRAG,p&&a),this.toggleEvents(At.KEYBOARD,p&&d),this.scrollZoom=n,this.dragPan=r,this.dragRotate=s,this.doubleClickZoom=o,this.doubleClickDragZoom=a,this.touchZoom=c,this.touchRotate=u==="rotate",this.multiTouchDrag=u,this.trackpadGesture=h,this.zoomAround=f,this.keyboard=d,(!e||e.height!==t.height||e.width!==t.width||e.maxBounds!==t.maxBounds||e.maxBoundsPadding!==t.maxBoundsPadding)&&t.maxBounds){const g=new this.ControllerState({...t,makeViewport:this.makeViewport}),m=g.getViewportProps();Object.keys(m).some(_=>!z(m[_],t[_],1))&&this.updateViewport(g)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(t,e){this.eventManager&&t.forEach(i=>{this._events[i]!==e&&(this._events[i]=e,e?this.eventManager.on(i,this.handleEvent):this.eventManager.off(i,this.handleEvent))})}updateViewport(t,e=null,i={}){const n={...t.getViewportProps(),...e},r=this.controllerState!==t;if(this.state=t.getState(),this._setInteractionState(i),r){const s=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:n,interactionState:this._interactionState,oldViewState:s,viewId:this.props.id})}}_onTransition(t){this.onViewStateChange({...t,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(t){Object.assign(this._interactionState,t),this.onStateChange(this._interactionState)}_getConstraintContext(t,e){return this.props.rubberBand?{mode:e==="update"?"elastic":e==="end"?"rebound":"hard"}:{mode:"hard"}}_getReboundTransition(t,e){if(t.mode!=="rebound")return null;const i=e.getViewportProps();return Object.keys(i).some(n=>!z(this.props[n],i[n],1))?{...this._getTransitionProps(),transitionDuration:gp,transitionEasing:mp}:null}_onPanStart(t){const e=this.getCenter(t);if(!this.isPointInBounds(e,t))return!1;let i=this.isFunctionKeyPressed(t)||t.rightButton||!1;(this.invertPan||this.dragMode==="pan")&&(i=!i);const n=i?"pan":"rotate",r=this._getConstraintContext(n,"start"),s=i?this.controllerState.panStart({pos:e},r):this.controllerState.rotateStart({pos:e},r);return this._panMove=i,this.updateViewport(s,rt,{isDragging:!0}),!0}_onPan(t){return this.isDragging()?this._panMove?this._onPanMove(t):this._onPanRotate(t):!1}_onPanEnd(t){return this.isDragging()?this._panMove?this._onPanMoveEnd(t):this._onPanRotateEnd(t):!1}_onPanMove(t){if(!this.dragPan)return!1;const e=this.getCenter(t),i=this.controllerState.pan({pos:e},this._getConstraintContext("pan","update"));return this.updateViewport(i,rt,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(t){const{inertia:e}=this;if(this.dragPan&&e&&t.velocity){const i=this.getCenter(t),n=[i[0]+t.velocityX*e/2,i[1]+t.velocityY*e/2],r=this.controllerState.pan({pos:n}).panEnd();this.updateViewport(r,{...this._getTransitionProps(),transitionDuration:e,transitionEasing:sn},{isDragging:!1,isPanning:!0})}else{const i=this.controllerState,n=this._getConstraintContext("pan","end"),r=i.panEnd(n),s=this._getReboundTransition(n,r);this.updateViewport(r,s,{isDragging:!1,isPanning:!!s})}return!0}_onPanRotate(t){if(!this.dragRotate)return!1;const e=this.getCenter(t),i=this.controllerState.rotate({pos:e},this._getConstraintContext("rotate","update"));return this.updateViewport(i,rt,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(t){const{inertia:e}=this;if(this.dragRotate&&e&&t.velocity){const i=this.getCenter(t),n=[i[0]+t.velocityX*e/2,i[1]+t.velocityY*e/2],r=this.controllerState.rotate({pos:n}).rotateEnd();this.updateViewport(r,{...this._getTransitionProps(),transitionDuration:e,transitionEasing:sn},{isDragging:!1,isRotating:!0})}else{const i=this.controllerState,n=this._getConstraintContext("rotate","end"),r=i.rotateEnd(n),s=this._getReboundTransition(n,r);this.updateViewport(r,s,{isDragging:!1,isRotating:!!s})}return!0}_onWheel(t){if(!this.scrollZoom||this.trackpadGesture&&t.device!=="mouse")return!1;const e=this.getCenter(t);if(!this.isPointInBounds(e,t))return!1;t.srcEvent.preventDefault();const{speed:i=.01,smooth:n=!1}=this.scrollZoom===!0?{}:this.scrollZoom,{delta:r}=t;let s=2/(1+Math.exp(-Math.abs(r*i)));r<0&&s!==0&&(s=1/s);const o=this.getZoomPosition(e),a=n?{...this._getTransitionProps({around:o}),transitionDuration:250}:rt,c=this.controllerState.zoom({pos:o,scale:s});return this.updateViewport(c,a,{isZooming:!0,isPanning:!0}),n||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(t){const{multiTouchDrag:e}=this;if(!e||!this._isMultiPanEventAllowed(t,e))return!1;const i=t.offsetCenter;if(!this.isPointInBounds(this.getCenter(t),t))return!1;const n=t.pointerType==="trackpad",r={x:i.x-(n?0:t.deltaX),y:i.y-(n?0:t.deltaY)},s={...t,offsetCenter:r},o=this.getCenter(s),a=e==="pan"?this.controllerState.panStart({pos:o},this._getConstraintContext("pan","start")):this.controllerState.rotateStart({pos:o},this._getConstraintContext("rotate","start"));return this._multiPanMode=e,this._multiPanStartCenter=r,this.updateViewport(a,rt,{isDragging:!0}),!0}_onMultiPan(t){const{mode:e,event:i}=this._getMultiPanEvent(t);return!e||!i||!this.isDragging()?!1:e==="pan"?this._onPanMove(i):this._onPanRotate(i)}_onMultiPanEnd(t){const{mode:e,event:i}=this._getMultiPanEvent(t);if(!e||!i||!this.isDragging())return this._resetMultiPan(),!1;const n=e==="pan"?this._onPanMoveEnd(i):this._onPanRotateEnd(i);return this._resetMultiPan(),n}_isTrackpadGestureAllowed(t){return t.pointerType!=="trackpad"||this.trackpadGesture}_isMultiPanEventAllowed(t,e){return t.pointerType==="trackpad"?this.trackpadGesture&&(e==="pan"?this.dragPan:this.dragRotate):t.pointerType==="touch"&&(e==="pan"?this.dragPan:this.dragRotate)}_getMultiPanEvent(t){const e=this._multiPanMode,i=this._multiPanStartCenter;return!e||!i?{mode:null,event:null}:{mode:e,event:{...t,offsetCenter:{x:i.x+t.deltaX,y:i.y+t.deltaY}}}}_resetMultiPan(){this._multiPanMode=null,this._multiPanStartCenter=null}_onPinchStart(t){this._doubleClickDragAnchor=null;const e=this.getCenter(t);if(!this.isPointInBounds(e,t))return!1;const i=this.controllerState.zoomStart({pos:this.getZoomPosition(e)},this._getConstraintContext("zoom","start")).rotateStart({pos:e},this._getConstraintContext("rotate","start"));return Lt._startPinchRotation=t.rotation,Lt._lastPinchEvent=t,this.updateViewport(i,rt,{isDragging:!0}),!0}_onPinch(t){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let e=this.controllerState;if(this.touchZoom){const{scale:i}=t,n=this.getCenter(t);e=e.zoom({pos:this.getZoomPosition(n),scale:i},this._getConstraintContext("zoom","update"))}if(this.touchRotate){const{rotation:i}=t;e=e.rotate({deltaAngleX:Lt._startPinchRotation-i},this._getConstraintContext("rotate","update"))}return this.updateViewport(e,rt,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),Lt._lastPinchEvent=t,!0}_onPinchEnd(t){if(!this.isDragging())return!1;const{inertia:e}=this,{_lastPinchEvent:i}=Lt;if(this.touchZoom&&e&&i&&t.scale!==i.scale){const n=this.getCenter(t),r=this.getZoomPosition(n);let s=this.controllerState.rotateEnd();const o=Math.log2(t.scale),a=(o-Math.log2(i.scale))/(t.deltaTime-i.deltaTime),c=Math.pow(2,o+a*e/2);s=s.zoom({pos:r,scale:c}).zoomEnd(),this.updateViewport(s,{...this._getTransitionProps({around:r}),transitionDuration:e,transitionEasing:sn},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(e)}else{const n=this.controllerState,r=this._getConstraintContext("zoom","end"),s=this._getConstraintContext("rotate","end"),o=n.zoomEnd(r).rotateEnd(s),a=this._getReboundTransition(this.touchZoom?r:s,o);this.updateViewport(o,a,{isDragging:!1,isPanning:!!a&&this.touchZoom,isZooming:!!a&&this.touchZoom,isRotating:!!a&&this.touchRotate})}return Lt._startPinchRotation=null,Lt._lastPinchEvent=null,!0}_onDoubleClick(t){if(!this.doubleClickZoom||Date.now()<this._suppressDoubleClickUntil)return!1;const e=this.getCenter(t);if(!this.isPointInBounds(e,t))return!1;const i=this.isFunctionKeyPressed(t),n=this.getZoomPosition(e),r=this.controllerState.zoom({pos:n,scale:i?.5:2});return this.updateViewport(r,this._getTransitionProps({around:n}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onDoubleClickDragStart(t){if(!this.doubleClickDragZoom)return this._doubleClickDragAnchor=null,!1;const e=this.getCenter(t);if(!this.isPointInBounds(e,t))return this._doubleClickDragAnchor=null,!1;this._doubleClickDragAnchor=this.getZoomPosition(e);let i=this.controllerState.zoomStart({pos:this._doubleClickDragAnchor},this._getConstraintContext("zoom","start"));return t.scale!==1&&(i=i.zoom({pos:this._doubleClickDragAnchor,scale:t.scale},this._getConstraintContext("zoom","update"))),this.updateViewport(i,rt,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDrag(t){const e=this._doubleClickDragAnchor;if(!e)return!1;const i=this.controllerState.zoom({pos:e,scale:t.scale},this._getConstraintContext("zoom","update"));return this.updateViewport(i,rt,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDragEnd(t){if(!this._doubleClickDragAnchor)return!1;this._doubleClickDragAnchor=null;const e=this.controllerState,i=this._getConstraintContext("zoom","end"),n=e.zoomEnd(i),r=this._getReboundTransition(i,n);return this.updateViewport(n,r,{isDragging:!1,isPanning:!!r,isZooming:!!r}),this._suppressDoubleClickUntil=Date.now()+100,this.blockEvents(100),!0}_onKeyDown(t){if(!this.keyboard)return!1;const e=this.isFunctionKeyPressed(t),{zoomSpeed:i,moveSpeed:n,rotateSpeedX:r,rotateSpeedY:s}=this.keyboard===!0?{}:this.keyboard,{controllerState:o}=this;let a;const c={};switch(t.srcEvent.code){case"Minus":a=e?o.zoomOut(i).zoomOut(i):o.zoomOut(i),c.isZooming=!0;break;case"Equal":a=e?o.zoomIn(i).zoomIn(i):o.zoomIn(i),c.isZooming=!0;break;case"ArrowLeft":e?(a=o.rotateLeft(r),c.isRotating=!0):(a=o.moveLeft(n),c.isPanning=!0);break;case"ArrowRight":e?(a=o.rotateRight(r),c.isRotating=!0):(a=o.moveRight(n),c.isPanning=!0);break;case"ArrowUp":e?(a=o.rotateUp(s),c.isRotating=!0):(a=o.moveUp(n),c.isPanning=!0);break;case"ArrowDown":e?(a=o.rotateDown(s),c.isRotating=!0):(a=o.moveDown(n),c.isPanning=!0);break;default:return!1}return this.updateViewport(a,this._getTransitionProps(),c),!0}_getTransitionProps(t){const{transition:e}=this;return!e||!e.transitionInterpolator?rt:t?{...e,transitionInterpolator:new Ct({...t,...e.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:e}},Z=Symbol("constraintAround"),Ze=class{constructor(t,e,i,n){this.makeViewport=i,this._viewportProps=this.applyConstraints(t,n),this._state=e}getViewportProps(){return this._viewportProps}getState(){return this._state}};function Yt(t,e,i){const n=t-e;return n&&Number.isFinite(n)?e+n*i/(i+Math.abs(n)):e}function st(t,e,i){const n=H(Y(i?.left??0),t),r=H(Y(i?.right??0),t),s=H(Y(i?.top??0),e),o=H(Y(i?.bottom??0),e);return{x:n,y:s,width:t-n-r,height:e-s-o}}function qe(t,e,i){let[n,r]=t.project(e);return n=Number.isFinite(n)?n:t.width/2,r=Number.isFinite(r)?r:t.height/2,{left:n-i.x,right:i.x+i.width-n,top:r-i.y,bottom:i.y+i.height-r}}var Eo=5,_p=1.2,So=512,xo=[[-1/0,-90],[1/0,90]],vp=1;function ue([t,e]){if(Math.abs(e)>90&&(e=Math.sign(e)*90),Number.isFinite(t)){const[n,r]=lt([t,e]);return[n,T(r,0,So)]}const[,i]=lt([0,e]);return[t,T(i,0,So)]}var Mo=class extends Ze{constructor(t){const{width:e,height:i,latitude:n,longitude:r,zoom:s,bearing:o=0,pitch:a=0,altitude:c=1.5,position:l=[0,0,0],maxZoom:u=20,minZoom:h=0,maxPitch:f=60,minPitch:d=0,startPanLngLat:p,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b,normalize:P=!0,rubberBand:E=!1}=t,{[Z]:x}=t;I(Number.isFinite(r)),I(Number.isFinite(n)),I(Number.isFinite(s));const M=t.maxBounds||(P?xo:null),S=t.maxBoundsPadding||null;super({width:e,height:i,latitude:n,longitude:r,zoom:s,bearing:o,pitch:a,altitude:c,maxZoom:u,minZoom:h,maxPitch:f,minPitch:d,normalize:P,position:l,maxBounds:M,maxBoundsPadding:S,rubberBand:E,[Z]:x},{startPanLngLat:p,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b},t.makeViewport,t.constraintContext),this.getAltitude=t.getAltitude}panStart({pos:t},e){return this._getUpdatedState({startPanLngLat:this._unproject(t)},e)}pan({pos:t,startPos:e},i){const n=this.getState().startPanLngLat||this._unproject(e);if(!n)return this;const r=this.makeViewport(this.getViewportProps()).panByPosition(n,t);return this._getUpdatedState(r,i)}panEnd(t){return this._getUpdatedState({startPanLngLat:null},t)}rotateStart({pos:t}){const e=this.getAltitude?.(t);return this._getUpdatedState({startRotatePos:t,startRotateLngLat:e!==void 0?this._unproject3D(t,e):void 0,startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:t,deltaAngleX:e=0,deltaAngleY:i=0}){const{startRotatePos:n,startRotateLngLat:r,startBearing:s,startPitch:o}=this.getState();if(!n||s===void 0||o===void 0)return this;let a;if(t?a=this._getNewRotation(t,n,o,s):a={bearing:s+e,pitch:o+i},r){const c=this.makeViewport({...this.getViewportProps(),...a}),l="panByPosition3D"in c?"panByPosition3D":"panByPosition";return this._getUpdatedState({...a,...c[l](r,n)})}return this._getUpdatedState(a)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:t},e){return this._getUpdatedState({startZoomLngLat:this._unproject(t),startZoom:this.getViewportProps().zoom},e)}zoom({pos:t,startPos:e,scale:i},n){let{startZoom:r,startZoomLngLat:s}=this.getState();return s||(r=this.getViewportProps().zoom,s=this._unproject(e)||this._unproject(t)),s?this._getUpdatedState({zoom:r+Math.log2(i),[Z]:{position:s,screenPosition:t}},n):this}zoomEnd(t){return this._getUpdatedState({startZoomLngLat:null,startZoom:null},t)}zoomIn(t=2,e){return this._zoomFromCenter(t,e)}zoomOut(t=2,e){return this._zoomFromCenter(1/t,e)}moveLeft(t=100,e){return this._panFromCenter([t,0],e)}moveRight(t=100,e){return this._panFromCenter([-t,0],e)}moveUp(t=100,e){return this._panFromCenter([0,t],e)}moveDown(t=100,e){return this._panFromCenter([0,-t],e)}rotateLeft(t=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-t})}rotateRight(t=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+t})}rotateUp(t=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+t})}rotateDown(t=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-t})}shortestPathFrom(t){const e=t.getViewportProps(),i={...this.getViewportProps()},{bearing:n,longitude:r}=i;return Math.abs(n-e.bearing)>180&&(i.bearing=n<0?n+360:n-360),Math.abs(r-e.longitude)>180&&(i.longitude=r<0?r+360:r-360),i}applyConstraints(t,e){const i=t,n=i[Z];delete i[Z];const{maxPitch:r,minPitch:s,pitch:o,bearing:a,normalize:c,maxBounds:l,rubberBand:u}=t;c&&(a<-180||a>180)&&(t.bearing=pt(a+180,360)-180),t.pitch=T(o,s,r);const h=this._constrainZoom(t.zoom,t),f=u&&e?.mode==="elastic";if(t.zoom=e?.mode==="preserve"?t.zoom:f?Yt(t.zoom,h,vp):h,n){const d=this.makeViewport(t);Object.assign(t,d.panByPosition(n.position,n.screenPosition))}if(c&&(t.longitude<-180||t.longitude>180)&&(t.longitude=pt(t.longitude+180,360)-180),l){const d=st(t.width,t.height,t.maxBoundsPadding),p=qe(this.makeViewport({...t,bearing:0,pitch:0}),[t.longitude,t.latitude],d),g=ue(l[0]),m=ue(l[1]),_=2**t.zoom,v=[g[0]+p.left/_,g[1]+p.bottom/_],y=[m[0]-p.right/_,m[1]-p.top/_],b=ue([t.longitude,t.latitude]),P=[T(b[0],v[0],y[0]),T(b[1],v[1],y[1])],E=b.slice();if(d.width>=0&&(E[0]=e?.mode==="preserve"?b[0]:f?Yt(b[0],P[0],d.width/2/_):P[0]),d.height>=0&&(E[1]=e?.mode==="preserve"?b[1]:f?Yt(b[1],P[1],d.height/2/_):P[1]),E[0]!==b[0]||E[1]!==b[1]){const[x,M]=xt(E);E[0]!==b[0]&&(t.longitude=x),E[1]!==b[1]&&(t.latitude=M)}}return t}_constrainZoom(t,e){e||(e=this.getViewportProps());const{maxZoom:i,maxBounds:n}=e,r=n!==null&&e.width>0&&e.height>0;let{minZoom:s}=e;if(r){const o=st(e.width,e.height,e.maxBoundsPadding),a=ue(n[0]),c=ue(n[1]),l=c[0]-a[0],u=c[1]-a[1];o.width>0&&Number.isFinite(l)&&l>0&&(s=Math.max(s,Math.log2(o.width/l))),o.height>0&&Number.isFinite(u)&&u>0&&(s=Math.max(s,Math.log2(o.height/u))),s>i&&(s=i)}return T(t,s,i)}_zoomFromCenter(t,e){const{width:i,height:n}=this.getViewportProps();return this.zoom({pos:[i/2,n/2],scale:t},e)}_panFromCenter(t,e){const{width:i,height:n}=this.getViewportProps();return this.pan({startPos:[i/2,n/2],pos:[i/2+t[0],n/2+t[1]]},e)}_getUpdatedState(t,e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...t,constraintContext:e})}_unproject(t){const e=this.makeViewport(this.getViewportProps());return t&&e.unproject(t)}_unproject3D(t,e){return this.makeViewport(this.getViewportProps()).unproject(t,{targetZ:e})}_getNewRotation(t,e,i,n){const r=t[0]-e[0],s=t[1]-e[1],o=t[1],a=e[1],{width:c,height:l}=this.getViewportProps(),u=r/c;let h=0;s>0?Math.abs(l-a)>Eo&&(h=s/(a-l)*_p):s<0&&a>Eo&&(h=1-o/a),h=T(h,-1,1);const{minPitch:f,maxPitch:d}=this.getViewportProps(),p=n+180*u;let g=i;return h>0?g=i+h*(d-i):h<0&&(g=i-h*(f-i)),{pitch:g,bearing:p}}},on=class extends Wt{constructor(){super(...arguments),this.ControllerState=Mo,this.transition={transitionDuration:300,transitionInterpolator:new Ct({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch","position"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this.rotationPivot="center",this._getAltitude=t=>{if(this.rotationPivot==="2d")return 0;if(this.rotationPivot==="3d"&&this.pickPosition){const{x:e,y:i}=this.props,n=this.pickPosition(e+t[0],i+t[1]);if(n&&n.coordinate&&n.coordinate.length>=3)return n.coordinate[2]}}}setProps(t){"rotationPivot"in t&&(this.rotationPivot=t.rotationPivot||"center"),t.getAltitude=this._getAltitude,t.position=t.position||[0,0,0],t.maxBounds=t.maxBounds||(t.normalize===!1?null:xo),super.setProps(t)}updateViewport(t,e=null,i={}){const n=t.getState();i.isDragging&&n.startRotateLngLat?i={...i,rotationPivotPosition:n.startRotateLngLat}:i.isDragging===!1&&(i={...i,rotationPivotPosition:void 0}),super.updateViewport(t,e,i)}},an=class extends $t{constructor(t={}){super(t)}getViewportType(){return le}get ControllerType(){return on}};an.displayName="MapView";var yp=new Ji;function bp(t,e){return(t.order??1/0)-(e.order??1/0)}var wp=class{constructor(t){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=t,this._needsRedraw="Initial render",this._setEffects([])}addDefaultEffect(t){const e=this._defaultEffects;if(!e.find(i=>i.id===t.id)){const i=e.findIndex(n=>bp(n,t)>0);i<0?e.push(t):e.splice(i,0,t),t.setup(this._context),this._setEffects(this.effects)}}setProps(t){"effects"in t&&(z(t.effects,this.effects,1)||this._setEffects(t.effects))}needsRedraw(t={clearRedrawFlags:!1}){const e=this._needsRedraw;return t.clearRedrawFlags&&(this._needsRedraw=!1),e}getEffects(){return this._resolvedEffects}_setEffects(t){const e={};for(const n of this.effects)e[n.id]=n;const i=[];for(const n of t){const r=e[n.id];let s=n;r&&r!==n?r.setProps?(r.setProps(n.props),s=r):r.cleanup(this._context):r||n.setup(this._context),i.push(s),delete e[n.id]}for(const n in e)e[n].cleanup(this._context);this.effects=i,this._resolvedEffects=i.concat(this._defaultEffects),t.some(n=>n instanceof Ji)||this._resolvedEffects.push(yp),this._needsRedraw="effects changed"}finalize(){for(const t of this._resolvedEffects)t.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}},Pp=class extends je{shouldDrawLayer(t){const{operation:e}=t.props;return e.includes("draw")||e.includes("terrain")}render(t){return this._render(t)}},Ep="deckRenderer.renderLayers",To=class{constructor(t,e={}){this.device=t,this.stats=e.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new Pp(t),this.pickLayersPass=new en(t),this.renderCount=0,this._needsRedraw="Initial render",this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(t){this.layerFilter!==t.layerFilter&&(this.layerFilter=t.layerFilter,this._needsRedraw="layerFilter changed"),this.drawPickingColors!==t.drawPickingColors&&(this.drawPickingColors=t.drawPickingColors,this._needsRedraw="drawPickingColors changed")}renderLayers(t){const e=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,i={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...t};if(!t.viewports.length){const o=e.render(i),a="stats"in o?o.stats:o;this._updateStats(a);return}i.effects&&this._preRender(i.effects,i);const n=this.lastPostProcessEffect?this.renderBuffers[0]:i.target;this.lastPostProcessEffect&&(i.clearColor=[0,0,0,0],i.clearCanvas=!0);const r=e.render({...i,target:n}),s="stats"in r?r.stats:r;i.effects&&(this.lastPostProcessEffect&&(i.clearCanvas=t.clearCanvas===void 0?!0:t.clearCanvas),this._postRender(i.effects,i)),this.renderCount++,B(Ep,this,s,t),this._updateStats(s)}needsRedraw(t={clearRedrawFlags:!1}){const e=this._needsRedraw;return t.clearRedrawFlags&&(this._needsRedraw=!1),e}finalize(){const{renderBuffers:t}=this;for(const e of t)e.delete();t.length=0}_updateStats(t){if(!this.stats)return;let e=0;for(const{visibleCount:i}of t)e+=i;this.stats.get("Layers rendered").addCount(e)}_preRender(t,e){this.lastPostProcessEffect=null,e.preRenderStats=e.preRenderStats||{};for(const i of t)e.preRenderStats[i.id]=i.preRender(e),i.postRender&&(this.lastPostProcessEffect=i.id);this.lastPostProcessEffect&&this._resizeRenderBuffers(e.canvasContext)}_resizeRenderBuffers(t=this.device.canvasContext){const{renderBuffers:e}=this,i=t.getDrawingBufferSize(),[n,r]=i;e.length===0&&[0,1].map(s=>{const o=this.device.createTexture({sampler:{minFilter:"linear",magFilter:"linear"},width:n,height:r});e.push(this.device.createFramebuffer({id:`deck-renderbuffer-${s}`,colorAttachments:[o]}))});for(const s of e)s.resize(i)}_postRender(t,e){const{renderBuffers:i}=this,n=e.target??e.canvasContext?.getCurrentFramebuffer()??e.target,r={...e,inputBuffer:i[0],swapBuffer:i[1]};for(const s of t)if(s.postRender){r.target=s.id===this.lastPostProcessEffect?n:void 0;const o=s.postRender(r);r.inputBuffer=o,r.swapBuffer=o===i[0]?i[1]:i[0]}}},Sp={pickedColor:null,pickedObjectIndex:-1};function Co({pickedColors:t,decodePickingColor:e,deviceX:i,deviceY:n,deviceRadius:r,deviceRect:s}){const{x:o,y:a,width:c,height:l}=s;let u=r*r,h=-1,f=0;for(let d=0;d<l;d++){const p=d+a-n,g=p*p;if(g>u)f+=4*c;else for(let m=0;m<c;m++){if(t[f+3]-1>=0){const _=m+o-i,v=_*_+g;v<=u&&(u=v,h=f)}f+=4}}if(h>=0){const d=t.slice(h,h+4),p=e(d);if(p){const g=Math.floor(h/4/c),m=h/4-g*c;return{...p,pickedColor:d,pickedX:o+m,pickedY:a+g}}L.error("Picked non-existent layer. Is picking buffer corrupt?")()}return Sp}function Ao({pickedColors:t,decodePickingColor:e}){const i=new Map;if(t){for(let n=0;n<t.length;n+=4)if(t[n+3]-1>=0){const r=t.slice(n,n+4),s=r.join(",");if(!i.has(s)){const o=e(r);o?i.set(s,{...o,color:r}):L.error("Picked non-existent layer. Is picking buffer corrupt?")()}}}return Array.from(i.values())}function cn({pickInfo:t,viewports:e,pixelRatio:i,x:n,y:r,z:s}){let o=e[0];e.length>1&&(o=xp(t?.pickedViewports||e,{x:n,y:r}));let a;if(o){const c=[n-o.x,r-o.y];s!==void 0&&(c[2]=s),a=o.unproject(c)}return{color:null,layer:null,viewport:o,index:-1,picked:!1,x:n,y:r,pixel:[n,r],coordinate:a,devicePixel:t&&"pickedX"in t?[t.pickedX,t.pickedY]:void 0,pixelRatio:i}}function Lo(t){const{pickInfo:e,lastPickedInfo:i,mode:n,layers:r}=t,{pickedColor:s,pickedLayer:o,pickedObjectIndex:a}=e,c=o?[o]:[];if(n==="hover"){const h=i.index,f=i.layerId,d=o?o.props.id:null;if(d!==f||a!==h){if(d!==f){const p=r.find(g=>g.props.id===f);p&&c.unshift(p)}i.layerId=d,i.index=a,i.info=null}}const l=cn(t),u=new Map;return u.set(null,l),c.forEach(h=>{let f={...l};h===o&&(f.color=s,f.index=a,f.picked=!0),f=ln({layer:h,info:f,mode:n});const d=f.layer;h===o&&n==="hover"&&(i.info=f),u.set(d.id,f),n==="hover"&&d.updateAutoHighlight(f)}),u}function ln({layer:t,info:e,mode:i}){for(;t&&e;){const n=e.layer||null;e.sourceLayer=n,e.layer=t,e=t.getPickingInfo({info:e,mode:i,sourceLayer:n}),t=t.parent}return e}function xp(t,e){for(let i=t.length-1;i>=0;i--){const n=t[i];if(n.containsPixel(e))return n}return t[0]}var Mp=class{constructor(t,e={}){this._pickable=!0,this.device=t,this.stats=e.stats,this.pickLayersPass=new en(t),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(t){"layerFilter"in t&&(this.layerFilter=t.layerFilter),"_pickable"in t&&(this._pickable=t._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(t){return this._pickClosestObjectAsync(t)}pickObjectsAsync(t){return this._pickVisibleObjectsAsync(t)}pickObject(t){return this._pickClosestObject(t)}pickObjects(t){return this._pickVisibleObjects(t)}getLastPickedObject({x:t,y:e,layers:i,viewports:n},r=this.lastPickedInfo.info){const s=r&&r.layer&&r.layer.id,o=r&&r.viewport&&r.viewport.id,a=s?i.find(u=>u.id===s):null,c=o&&n.find(u=>u.id===o)||n[0],l={x:t,y:e,viewport:c,coordinate:c&&c.unproject([t-c.x,e-c.y]),layer:a};return{...r,...l}}_resizeBuffer(t=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){const n=this.device.createTexture({format:"rgba8unorm",width:1,height:1,usage:kt.RENDER_ATTACHMENT|kt.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[n],depthStencilAttachment:"depth16unorm"}),this.device.isTextureFormatRenderable("rgba32float")){const r=this.device.createTexture({format:"rgba32float",width:1,height:1,usage:kt.RENDER_ATTACHMENT|kt.COPY_SRC}),s=this.device.createFramebuffer({colorAttachments:[r],depthStencilAttachment:"depth16unorm"});this.depthFBO=s}}const[e,i]=t.getDrawingBufferSize();this.pickingFBO?.resize({width:e,height:i}),this.depthFBO?.resize({width:e,height:i})}_getPickable(t){if(this._pickable===!1)return null;const e=t.filter(i=>this.pickLayersPass.shouldDrawLayer(i)&&!i.isComposite);return e.length?e:null}async _pickClosestObjectAsync({layers:t,views:e,viewports:i,x:n,y:r,radius:s=0,depth:o=1,mode:a="query",unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){const f=l.cssToDeviceRatio(),d=this._getPickable(t);if(!d||i.length===0)return{result:[],emptyInfo:cn({viewports:i,x:n,y:r,pixelRatio:f})};this._resizeBuffer(l);const p=l.cssToDevicePixels([n,r],!0),g=[p.x+Math.floor(p.width/2),p.y+Math.floor(p.height/2)],m=Math.round(s*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceWidth:_,deviceHeight:v}),b={x:n-s,y:r-s,width:s*2+1,height:s*2+1};let P;const E=[],x=new Set;for(let M=0;M<o;M++){let S;y?S=Co({...await this._drawAndSampleAsync({layers:d,views:e,viewports:i,onViewportActive:u,deviceRect:y,cullRect:b,effects:h,pass:`picking:${a}`,canvasContext:l}),deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceRect:y}):S={pickedColor:null,pickedObjectIndex:-1};let k;const C=this._getDepthLayers(S,d,c);if(C.length>0){const{pickedColors:R}=await this._drawAndSampleAsync({layers:C,views:e,viewports:i,onViewportActive:u,deviceRect:{x:S.pickedX??g[0],y:S.pickedY??g[1],width:1,height:1},cullRect:b,effects:h,pass:`picking:${a}:z`,canvasContext:l},!0);R[3]&&(k=R[0])}S.pickedLayer&&M+1<o&&(x.add(S.pickedLayer),S.pickedLayer.disablePickingIndex(S.pickedObjectIndex)),P=Lo({pickInfo:S,lastPickedInfo:this.lastPickedInfo,mode:a,layers:d,viewports:i,x:n,y:r,z:k,pixelRatio:f});for(const R of P.values())R.layer&&E.push(R);if(!S.pickedColor)break}for(const M of x)M.restorePickingColors();return{result:E,emptyInfo:P.get(null)}}_pickClosestObject({layers:t,views:e,viewports:i,x:n,y:r,radius:s=0,depth:o=1,mode:a="query",unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){const f=l.cssToDeviceRatio(),d=this._getPickable(t);if(!d||i.length===0)return{result:[],emptyInfo:cn({viewports:i,x:n,y:r,pixelRatio:f})};this._resizeBuffer(l);const p=l.cssToDevicePixels([n,r],!0),g=[p.x+Math.floor(p.width/2),p.y+Math.floor(p.height/2)],m=Math.round(s*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceWidth:_,deviceHeight:v}),b={x:n-s,y:r-s,width:s*2+1,height:s*2+1};let P;const E=[],x=new Set;for(let M=0;M<o;M++){let S;y?S=Co({...this._drawAndSample({layers:d,views:e,viewports:i,onViewportActive:u,deviceRect:y,cullRect:b,effects:h,pass:`picking:${a}`,canvasContext:l}),deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceRect:y}):S={pickedColor:null,pickedObjectIndex:-1};let k;const C=this._getDepthLayers(S,d,c);if(C.length>0){const{pickedColors:R}=this._drawAndSample({layers:C,views:e,viewports:i,onViewportActive:u,deviceRect:{x:S.pickedX??g[0],y:S.pickedY??g[1],width:1,height:1},cullRect:b,effects:h,pass:`picking:${a}:z`,canvasContext:l},!0);R[3]&&(k=R[0])}S.pickedLayer&&M+1<o&&(x.add(S.pickedLayer),S.pickedLayer.disablePickingIndex(S.pickedObjectIndex)),P=Lo({pickInfo:S,lastPickedInfo:this.lastPickedInfo,mode:a,layers:d,viewports:i,x:n,y:r,z:k,pixelRatio:f});for(const R of P.values())R.layer&&E.push(R);if(!S.pickedColor)break}for(const M of x)M.restorePickingColors();return{result:E,emptyInfo:P.get(null)}}async _pickVisibleObjectsAsync({layers:t,views:e,viewports:i,x:n,y:r,width:s=1,height:o=1,mode:a="query",maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){const f=this._getPickable(t);if(!f||i.length===0)return[];this._resizeBuffer(l);const d=l.cssToDeviceRatio(),p=l.cssToDevicePixels([n,r],!0),g=p.x,m=p.y+p.height,_=l.cssToDevicePixels([n+s,r+o],!0),v=_.x+_.width,y=_.y,b={x:g,y,width:v-g,height:m-y},P=Ao(await this._drawAndSampleAsync({layers:f,views:e,viewports:i,onViewportActive:u,deviceRect:b,cullRect:{x:n,y:r,width:s,height:o},effects:h,pass:`picking:${a}`,canvasContext:l})),E=new Map,x=[],M=Number.isFinite(c);for(let S=0;S<P.length&&!(M&&x.length>=c);S++){const k=P[S];let C={color:k.pickedColor,layer:null,index:k.pickedObjectIndex,picked:!0,x:n,y:r,pixelRatio:d};C=ln({layer:k.pickedLayer,info:C,mode:a});const R=C.layer.id;E.has(R)||E.set(R,new Set);const Kt=E.get(R),Jt=C.object??C.index;Kt.has(Jt)||(Kt.add(Jt),x.push(C))}return x}_pickVisibleObjects({layers:t,views:e,viewports:i,x:n,y:r,width:s=1,height:o=1,mode:a="query",maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){const f=this._getPickable(t);if(!f||i.length===0)return[];this._resizeBuffer(l);const d=l.cssToDeviceRatio(),p=l.cssToDevicePixels([n,r],!0),g=p.x,m=p.y+p.height,_=l.cssToDevicePixels([n+s,r+o],!0),v=_.x+_.width,y=_.y,b={x:g,y,width:v-g,height:m-y},P=Ao(this._drawAndSample({layers:f,views:e,viewports:i,onViewportActive:u,deviceRect:b,cullRect:{x:n,y:r,width:s,height:o},effects:h,pass:`picking:${a}`,canvasContext:l})),E=new Map,x=[],M=Number.isFinite(c);for(let S=0;S<P.length&&!(M&&x.length>=c);S++){const k=P[S];let C={color:k.pickedColor,layer:null,index:k.pickedObjectIndex,picked:!0,x:n,y:r,pixelRatio:d};C=ln({layer:k.pickedLayer,info:C,mode:a});const R=C.layer.id;E.has(R)||E.set(R,new Set);const Kt=E.get(R),Jt=C.object??C.index;Kt.has(Jt)||(Kt.add(Jt),x.push(C))}return x}async _drawAndSampleAsync({layers:t,views:e,viewports:i,onViewportActive:n,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:c},l=!1){const u=l?this.depthFBO:this.pickingFBO,h={layers:t,layerFilter:this.layerFilter,views:e,viewports:i,onViewportActive:n,pickingFBO:u,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:c,pickZ:l,preRenderStats:{},isPicking:!0};for(const b of o)b.useInPicking&&(h.preRenderStats[b.id]=b.preRender(h));const{decodePickingColor:f,stats:d}=this.pickLayersPass.render(h);this._updateStats(d);const{x:p,y:g,width:m,height:_}=r,v=u.colorAttachments[0]?.texture;if(!v)throw new Error("Picking framebuffer color attachment is missing");const y=await this._readTextureDataAsync(v,{x:p,y:g,width:m,height:_},l?Float32Array:Uint8Array);if(!l){let b=!1;for(let P=3;P<y.length;P+=4)if(y[P]!==0){b=!0;break}!b&&y.length>0&&L.warn("Async pick readback returned only zero alpha values",{deviceRect:r,bytes:Array.from(y.subarray(0,Math.min(y.length,16)))})()}return{pickedColors:y,decodePickingColor:f}}async _readTextureDataAsync(t,e,i){const{width:n,height:r}=e,s=t.computeMemoryLayout(e),o=this.device.createBuffer({byteLength:s.byteLength,usage:G.COPY_DST|G.MAP_READ});try{t.readBuffer(e,o);const a=await o.readAsync(0,s.byteLength),c=i.BYTES_PER_ELEMENT;if(s.bytesPerRow%c!==0)throw new Error(`Texture readback row stride ${s.bytesPerRow} is not aligned to ${c}-byte elements.`);const l=new i(a.buffer,a.byteOffset,s.byteLength/c),u=n*4,h=s.bytesPerRow/c;if(h<u)throw new Error(`Texture readback row stride ${h} is smaller than packed row length ${u}.`);const f=new i(n*r*4);for(let d=0;d<r;d++){const p=d*h;f.set(l.subarray(p,p+u),d*u)}return f}finally{o.destroy()}}_drawAndSample({layers:t,views:e,viewports:i,onViewportActive:n,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:c},l=!1){const u=l?this.depthFBO:this.pickingFBO,h={layers:t,layerFilter:this.layerFilter,views:e,viewports:i,onViewportActive:n,pickingFBO:u,deviceRect:r,cullRect:s,effects:o,pass:a,canvasContext:c,pickZ:l,preRenderStats:{},isPicking:!0};for(const y of o)y.useInPicking&&(h.preRenderStats[y.id]=y.preRender(h));const{decodePickingColor:f,stats:d}=this.pickLayersPass.render(h);this._updateStats(d);const{x:p,y:g,width:m,height:_}=r,v=new(l?Float32Array:Uint8Array)(m*_*4);return this.device.readPixelsToArrayWebGL(u,{sourceX:p,sourceY:g,sourceWidth:m,sourceHeight:_,target:v}),{pickedColors:v,decodePickingColor:f}}_updateStats(t){if(!this.stats)return;let e=0;for(const{visibleCount:i}of t)e+=i;this.stats.get("Layers picked").addCount(e)}_getDepthLayers(t,e,i){if(!i||!this.depthFBO)return[];const{pickedLayer:n}=t,r=n?.state?.terrainDrawMode==="drape";return n&&!r?[n]:e.filter(s=>s.props.operation.includes("terrain"))}_getPickingRect({deviceX:t,deviceY:e,deviceRadius:i,deviceWidth:n,deviceHeight:r}){const s=Math.max(0,t-i),o=Math.max(0,e-i),a=Math.min(n,t+i+1)-s,c=Math.min(r,e+i+1)-o;return a<=0||c<=0?null:{x:s,y:o,width:a,height:c}}},Tp={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},Cp="top-left",Io="root",Ap=class{constructor({deck:t,parentElement:e}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=t,e?.classList.add("deck-widget-container"),this.parentElement=e}getWidgets(){return this.resolvedWidgets}setProps(t){if(t.widgets&&!z(t.widgets,this.widgets,1)){const e=t.widgets.filter(Boolean);this._setWidgets(e)}}finalize(){for(const t of this.getWidgets())this._removeWidget(t);this.defaultWidgets.length=0,this.resolvedWidgets.length=0;for(const t in this.containers)this.containers[t].remove()}addDefault(t){this.defaultWidgets.find(e=>e.id===t.id)||(this._addWidget(t),this.defaultWidgets.push(t),this._setWidgets(this.widgets))}onRedraw({viewports:t,layers:e}){const i=t.reduce((n,r)=>(n[r.id]=r,n),{});for(const n of this.getWidgets()){const{viewId:r}=n;if(r){const s=i[r];s&&(n.onViewportChange&&n.onViewportChange(s),n.onRedraw?.({viewports:[s],layers:e}))}else{if(n.onViewportChange)for(const s of t)n.onViewportChange(s);n.onRedraw?.({viewports:t,layers:e})}}this.lastViewports=i,this._updateContainers()}onHover(t,e){for(const i of this.getWidgets()){const{viewId:n}=i;(!n||n===t.viewport?.id)&&i.onHover?.(t,e)}}getCanvasBounds(t){const e=this.deck?.getCanvas?.()?.getBoundingClientRect(),i=this.parentElement?.getBoundingClientRect(),n=this.deck?.getCanvasContext?.(t?.id);if(n&&i){n.updatePosition();const[r,s]=n.getPosition(),[o,a]=n.getCSSSize();return{x:r-i.left,y:s-i.top,width:o,height:a}}return{x:e&&i?e.left-i.left:0,y:e&&i?e.top-i.top:0,width:e?.width||this.deck?.width||0,height:e?.height||this.deck?.height||0}}onEvent(t,e){const i=ke[e.type];if(i)for(const n of this.getWidgets()){const{viewId:r}=n;(!r||r===t.viewport?.id)&&n[i]?.(t,e)}}_setWidgets(t){const e={};for(const i of this.resolvedWidgets)e[i.id]=i;this.resolvedWidgets.length=0;for(const i of this.defaultWidgets)e[i.id]=null,this.resolvedWidgets.push(i);for(let i of t){const n=e[i.id];n?n.viewId!==i.viewId||n.placement!==i.placement?(this._removeWidget(n),this._addWidget(i)):i!==n&&(n.setProps(i.props),i=n):this._addWidget(i),e[i.id]=null,this.resolvedWidgets.push(i)}for(const i in e){const n=e[i];n&&this._removeWidget(n)}this.widgets=t}_addWidget(t){const{viewId:e=null,placement:i=Cp}=t,n=t.props._container??e;t.widgetManager=this,t.deck=this.deck,t.rootElement=t._onAdd({deck:this.deck,viewId:e}),t.rootElement&&this._getContainer(n,i).append(t.rootElement),t.updateHTML()}_removeWidget(t){t.onRemove?.(),t.rootElement&&t.rootElement.remove(),t.rootElement=void 0,t.deck=void 0,t.widgetManager=void 0}_getContainer(t,e){if(t&&typeof t!="string")return t;const i=t||Io;let n=this.containers[i];n||(n=document.createElement("div"),n.style.pointerEvents="none",n.style.position="absolute",n.style.overflow="hidden",this.parentElement?.append(n),this.containers[i]=n);let r=n.querySelector(`.${e}`);return r||(r=globalThis.document.createElement("div"),r.className=e,r.style.position="absolute",r.style.zIndex="2",Object.assign(r.style,Tp[e]),n.append(r)),r}_updateContainers(){for(const t in this.containers){const e=this.lastViewports[t]||null,i=t===Io||e,n=this.containers[t];if(i){const r=this._getContainerBounds(e);n.style.display="block",n.style.left=`${r.x}px`,n.style.top=`${r.y}px`,n.style.width=`${r.width}px`,n.style.height=`${r.height}px`}else n.style.display="none"}}_getContainerBounds(t){if(!t)return{x:0,y:0,width:this.parentElement?.clientWidth||this.deck.width,height:this.parentElement?.clientHeight||this.deck.height};const e=this.getCanvasBounds(t);return{x:e.x+t.x,y:e.y+t.y,width:t.width,height:t.height}}};function un(t,e){e&&Object.entries(e).map(([i,n])=>{i.startsWith("--")?t.style.setProperty(i,n):t.style[i]=n})}function ko(t,e){e&&Object.keys(e).map(i=>{i.startsWith("--")?t.style.removeProperty(i):t.style[i]=""})}var Xe=class{constructor(t){this.viewId=null,this.props={...this.constructor.defaultProps,...t},this.id=this.props.id}setProps(t){const e=this.props,i=this.rootElement;i&&e.className!==t.className&&(e.className&&i.classList.remove(e.className),t.className&&i.classList.add(t.className)),i&&!z(e.style,t.style,1)&&(ko(i,e.style),un(i,t.style)),Object.assign(this.props,t),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(t=>t.id)??[]}getViewState(t){return this.deck?.viewManager?.getViewState(t)||{}}setViewState(t,e){this.deck?._onViewStateChange({viewId:t,viewState:e,interactionState:{}})}onCreateRootElement(){const t=["deck-widget",this.className,this.props.className],e=document.createElement("div");return t.filter(i=>typeof i=="string"&&i.length>0).forEach(i=>e.classList.add(i)),un(e,this.props.style),e}_onAdd(t){return this.onAdd(t)??this.onCreateRootElement()}onAdd(t){}onRemove(){}onViewportChange(t){}onRedraw(t){}onHover(t,e){}onClick(t,e){}onDrag(t,e){}onDragStart(t,e){}onDragEnd(t,e){}};Xe.defaultProps={id:"widget",style:{},_container:null,className:""};var Lp={zIndex:"1",position:"absolute",pointerEvents:"none",color:"#a0a7b4",backgroundColor:"#29323c",padding:"10px",top:"0",left:"0",display:"none"},Ro=class extends Xe{constructor(t={}){super(t),this.id="default-tooltip",this.placement="fill",this.className="deck-tooltip",this.isVisible=!1,this.setProps(t)}onCreateRootElement(){const t=document.createElement("div");return t.className=this.className,Object.assign(t.style,Lp),t}onRenderHTML(t){}onViewportChange(t){this.isVisible&&t.id===this.lastViewport?.id&&!t.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=t}onHover(t){const{deck:e}=this,i=e&&e.props.getTooltip;if(!i)return;const n=i(t),r=this.widgetManager?.getCanvasBounds(t.viewport),s=t.x+(r?.x||0),o=t.y+(r?.y||0);this.setTooltip(n,s,o)}setTooltip(t,e,i){const n=this.rootElement;if(n){if(typeof t=="string")n.innerText=t;else if(t)t.text&&(n.innerText=t.text),t.html&&(n.innerHTML=t.html),t.className&&(n.className=t.className);else{this.isVisible=!1,n.style.display="none";return}this.isVisible=!0,n.style.display="block",n.style.transform=`translate(${e}px, ${i}px)`,t&&typeof t=="object"&&"style"in t&&Object.assign(n.style,t.style)}}};Ro.defaultProps={...Xe.defaultProps};var Ip=class{constructor(t){this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap,this._createEventManager=t.createEventManager,this._getEventRoot=t.getEventRoot}finalize(){for(const t of Object.values(this.targets))t.eventManager.destroy(),t.presentationContext.destroy();this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap}syncCanvasEntries(t){const e=this._normalizeCanvasList(t.canvases),i={},n=[],r=new Map;for(const{canvas:o}of e){const a=this._getEventRoot(o);r.set(a,(r.get(a)||0)+1)}for(const{id:o,canvas:a}of e){const c=this._getEventRoot(a),l=r.get(c)===1?c:a;let u=this.targets[o];if(!u||u.device!==t.device||u.canvas!==a||u.eventRoot!==l){u?.eventManager.destroy(),u?.presentationContext.destroy();const h=t.device.createPresentationContext({id:o,canvas:a,useDevicePixels:t.useDevicePixels,autoResize:!0});u={id:o,device:t.device,canvas:a,eventRoot:l,presentationContext:h,eventManager:this._createEventManager(l)}}this._eventRootToCanvasId.set(l,o),this._eventRootToCanvasId.set(a,o),i[o]=u,n.push(o)}for(const[o,a]of Object.entries(this.targets))i[o]||(a.eventManager.destroy(),a.presentationContext.destroy());this.targets=i,this.order=n;const s=Object.fromEntries(Object.entries(i).map(([o,a])=>[o,a.eventManager]));this._haveSameEventManagers(s)||(this.eventManagers=s)}getCanvasIdFromEvent(t){return t?this._eventRootToCanvasId.get(t):void 0}getTarget(t){return this.targets[t||this.order[0]||"default-canvas"]||null}_normalizeCanvasList(t=[]){const e=new Set;return t.map((i,n)=>{let r,s;return typeof i=="string"?(r=document.getElementById(i),I(r,`Canvas with id ${i} not found`),s=i):(r=i,s=r.id||`deckgl-canvas-${n}`),I(!e.has(s),`Duplicate canvas id ${s}`),e.add(s),{id:s,canvas:r}})}_haveSameEventManagers(t){const e=Object.keys(t),i=Object.keys(this.eventManagers);return e.length===i.length&&e.every(n=>t[n]===this.eventManagers[n])}},kp={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},Rp=t=>({drawBuffersWEBGL(e){return t.drawBuffers(e)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),Op=t=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return t.createVertexArray()},deleteVertexArrayOES(e){return t.deleteVertexArray(e)},isVertexArrayOES(e){return t.isVertexArray(e)},bindVertexArrayOES(e){return t.bindVertexArray(e)}}),Dp=t=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...e){return t.drawArraysInstanced(...e)},drawElementsInstancedANGLE(...e){return t.drawElementsInstanced(...e)},vertexAttribDivisorANGLE(...e){return t.vertexAttribDivisor(...e)}});function Bp(t=!0){const e=HTMLCanvasElement.prototype;if(!t&&e.originalGetContext){e.getContext=e.originalGetContext,e.originalGetContext=void 0;return}e.originalGetContext=e.getContext,e.getContext=function(i,n){if(i==="webgl"||i==="experimental-webgl"){const r=this.originalGetContext("webgl2",n);return r instanceof HTMLElement&&zp(r),r}return this.originalGetContext(i,n)}}function zp(t){t.getExtension("EXT_color_buffer_float");const e={...kp,WEBGL_disjoint_timer_query:t.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:Rp(t),OES_vertex_array_object:Op(t),ANGLE_instanced_arrays:Dp(t)},i=t.getExtension.bind(t);t.getExtension=function(r){const s=i(r);return s||(r in e?e[r]:null)};const n=t.getSupportedExtensions;t.getSupportedExtensions=function(){return(n.apply(t)||[])?.concat(Object.keys(e))}}var he=1,Np=class extends _u{type="webgl";enforceWebGL2(t){Bp(t)}isSupported(){return typeof WebGL2RenderingContext<"u"}isDeviceHandle(t){return typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?!0:(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext&&K.warn("WebGL1 is not supported",t)(),!1)}async attach(t,e={}){const{WebGLDevice:i}=await ge(async()=>{const{WebGLDevice:s}=await import("./webgl-device-CDVpT1Kz.js");return{WebGLDevice:s}},__vite__mapDeps([0,1,2,3]),import.meta.url);if(t instanceof i)return t;const n=i.getDeviceFromContext(t);if(n)return n;if(!Up(t))throw new Error("Invalid WebGL2RenderingContext");e=Oo(e),await Do(e);const r=e.createCanvasContext===!0?{}:e.createCanvasContext;return new i({...e,_handle:t,createCanvasContext:{canvas:t.canvas,autoResize:!1,...r}})}async create(t={}){const{WebGLDevice:e}=await ge(async()=>{const{WebGLDevice:i}=await import("./webgl-device-CDVpT1Kz.js");return{WebGLDevice:i}},__vite__mapDeps([0,1,2,3]),import.meta.url);t=Oo(t),await Do(t);try{const i=new e(t);K.groupCollapsed(he,`WebGLDevice ${i.id} created`)();const n=`${i._reused?"Reusing":"Created"} device with WebGL2 ${i.props.debug?"debug ":""}context: ${i.info.vendor}, ${i.info.renderer} for canvas: ${i.canvasContext.id}`;return K.probe(he,n)(),K.table(he,i.info)(),i}finally{K.groupEnd(he)(),K.info(he,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}};function Up(t){return typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?!0:!!(t&&typeof t.createVertexArray=="function")}var hn=new Np;function Oo(t){return{...t,debug:t.debug??jn.defaultProps.debug,debugWebGL:t.debugWebGL??jn.defaultProps.debugWebGL,debugSpectorJS:t.debugSpectorJS??!!K.get("debug-spectorjs")}}async function Do(t){const e=[];(t.debugWebGL||t.debug)&&e.push(Ra()),t.debugSpectorJS&&e.push(ka(t));const i=await Promise.allSettled(e);for(const n of i)n.status==="rejected"&&K.error(`Failed to initialize debug libraries ${n.reason}`)()}function ut(){}var jp=({isDragging:t})=>t?"grabbing":"grab";function Bo(t){return t.deviceProps?.debug??t.debug}var zo={id:"",width:"100%",height:"100%",style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:"auto",layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,_canvases:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:"none",eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:ut,onWebGLInitialized:ut,onResize:ut,onViewStateChange:ut,onInteractionStateChange:ut,onBeforeRender:ut,onAfterRender:ut,onLoad:ut,onError:t=>L.error(t.message,t.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:jp,getTooltip:null,debug:!1,drawPickingColors:!1},fn=class{constructor(t){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.eventManagers={},this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new Fn({id:"deck.gl"}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw="Initial render",this._canvasManager=new Ip({createEventManager:n=>this._createEventManager(n),getEventRoot:n=>this._getEventRoot(n)}),this._ownedCanvas=null,this._pickRequest={mode:"hover",x:-1,y:-1,radius:0,canvasId:void 0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=n=>{const{_pickRequest:r}=this,s=this._getCanvasIdFromEvent(n);if(n.type==="pointerleave")r.x=-1,r.y=-1,r.radius=0,r.canvasId=s;else{if(n.leftButton||n.rightButton)return;{const o=n.offsetCenter;if(!o)return;r.x=o.x,r.y=o.y,r.radius=this.props.pickingRadius,r.canvasId=s}}this.layerManager&&(this.layerManager.context.mousePosition={x:r.x,y:r.y}),r.event=n},this._onEvent=n=>{const r=ke[n.type],s=n.offsetCenter,o=this._getCanvasIdFromEvent(n);if(!r||!s||!this.layerManager)return;const a=this.layerManager.getLayers(),c=this._getInternalPickingMode();if(c){if(c==="sync"){const l=n.type==="click"&&this._shouldUnproject3D(a)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(s.x,s.y,{unproject3D:!0,canvasId:o},a))):this._getLastPointerDownPickingInfo(s.x,s.y,o,a);this._dispatchPickingEvent(l,n);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(s.x,s.y,o,a))).then(l=>{this._dispatchPickingEvent(l,n)}).catch(l=>this.props.onError?.(l))}},this._onPointerDown=n=>{const r=n.offsetCenter,s=this._getCanvasIdFromEvent(n);if(!r)return;const o=this._getInternalPickingMode();if(!o)return;const a=this.layerManager?.getLayers()||[],c=++this._pointerDownPickSequence;if(o==="sync"){const u=this._pickPointSync({x:r.x,y:r.y,canvasId:s,radius:this.props.pickingRadius}),h=this._getFirstPickedInfo(u);this._lastPointerDownInfo=h,this._lastPointerDownInfoPromise=Promise.resolve(h);return}const l=this._pickPointAsync(this._getPointPickOptions(r.x,r.y,{canvasId:s},a)).then(u=>this._getFirstPickedInfo(u)).then(u=>(c===this._pointerDownPickSequence&&(this._lastPointerDownInfo=u),u)).catch(u=>{this.props.onError?.(u);const h=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(r.x,r.y,s,a):{};return c===this._pointerDownPickSequence&&(this._lastPointerDownInfo=h),h});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=l};const e=t;this.props={...zo,...t},t=this.props,this._validateCanvasConfiguration(t),t.viewState&&t.initialViewState&&L.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,t.device&&(this.device=t.device,this._setDeviceCanvasContext(t.device));let i=this.device;!i&&t.gl&&(t.gl instanceof WebGLRenderingContext&&L.error("WebGL1 context not supported.")(),i=hn.attach(t.gl,{_cacheShaders:!0,_cachePipelines:!0,...t.deviceProps,debug:Bo(t)})),i||(i=this._createDevice(t)),this.animationLoop=this._createAnimationLoop(i,t),this.setProps(e),t._typedArrayManagerProps&&jt.setOptions(t._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,Object.keys(this._canvasManager.targets).length||this.eventManager?.destroy(),this.eventManager=null,this.eventManagers={},this.widgetManager?.finalize(),this.widgetManager=null,this._canvasManager.finalize(),this._isMultiCanvasMode()?this.canvas=null:this.canvas&&this.canvas===this._ownedCanvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null,this._ownedCanvas=null),this._canvasContext=null}setProps(t){this.stats.get("setProps Time").timeStart(),"onLayerHover"in t&&L.removed("onLayerHover","onHover")(),"onLayerClick"in t&&L.removed("onLayerClick","onClick")(),t.initialViewState&&!z(this.props.initialViewState,t.initialViewState,3)&&(this.viewState=t.initialViewState),I(!("_canvases"in t)||Array.isArray(t._canvases)===this._isMultiCanvasMode()),Object.assign(this.props,t),this._validateCanvasConfiguration(this.props),this._validateInternalPickingMode(),this.device&&this._isMultiCanvasMode()&&this._syncCanvasTargets(),this._setCanvasSize(this.props);const e=Object.create(this.props);if(Object.assign(e,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState(),eventManagers:this.eventManagers}),t.device&&t.device.id!==this.device?.id){const i=t.device.getDefaultCanvasContext();this.animationLoop?.stop(),!this._isMultiCanvasMode()&&this.canvas!==i.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(t.device),L.log(`recreating animation loop for new device! id=${t.device.id}`)(),this.animationLoop=this._createAnimationLoop(t.device,t),this.animationLoop.start()}if(this.animationLoop?.setProps(e),t.useDevicePixels!==void 0&&this._canvasContext?.setProps){this._canvasContext.setProps({useDevicePixels:t.useDevicePixels});for(const i of Object.values(this._canvasManager.targets))i.presentationContext.setProps({useDevicePixels:t.useDevicePixels})}this.layerManager&&(this.viewManager.setProps(e),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(e),this.effectManager.setProps(e),this.deckRenderer.setProps(e),this.deckPicker.setProps(e),this.widgetManager.setProps(e)),this.stats.get("setProps Time").timeEnd()}needsRedraw(t={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return"Deck._animate";let e=this._needsRedraw;t.clearRedrawFlags&&(this._needsRedraw=!1);const i=this.viewManager.needsRedraw(t),n=this.layerManager.needsRedraw(t),r=this.effectManager.needsRedraw(t),s=this.deckRenderer.needsRedraw(t);return e=e||i||n||r||s,e}redraw(t){if(!this.layerManager)return;let e=this.needsRedraw({clearRedrawFlags:!0});e=t||e,e&&(this.stats.get("Redraw Count").incrementCount(),this.props._customRender?this.props._customRender(e):this._drawLayers(e))}get isInitialized(){return this.viewManager!==null}getViews(){return I(this.viewManager),this.viewManager.views}getView(t){return I(this.viewManager),this.viewManager.getView(t)}getViewports(t){return I(this.viewManager),this.viewManager.getViewports(t)}getCanvas(){return this.canvas}getCanvasContext(t){const e=t?this.viewManager?.getView(t)?.props.canvasId:void 0;return this._getCanvasContext(e)}getEventManager(t){if(!t||!this.viewManager)return this.eventManager;const e=this.viewManager.getCanvasId(t)||"default-canvas";return this.eventManagers[e]||this.eventManager}async pickObjectAsync(t){const e=(await this._pickAsync("pickObjectAsync","pickObject Time",t)).result;return e.length?e[0]:null}async pickObjectsAsync(t){return await this._pickAsync("pickObjectsAsync","pickObjects Time",t)}pickObject(t){const e=this._pick("pickObject","pickObject Time",t).result;return e.length?e[0]:null}pickMultipleObjects(t){return t.depth=t.depth||10,this._pick("pickObject","pickMultipleObjects Time",t).result}pickObjects(t){return this._pick("pickObjects","pickObjects Time",t)}_pickPositionForController(t,e,i){return this._getInternalPickingMode()!=="sync"?null:this.pickObject({x:t,y:e,radius:0,unproject3D:!0,canvasId:i?this.viewManager?.getCanvasId(i):void 0})}_addResources(t,e=!1){for(const i in t)this.layerManager.resourceManager.add({resourceId:i,data:t[i],forceUpdate:e})}_removeResources(t){for(const e of t)this.layerManager.resourceManager.remove(e)}_addDefaultEffect(t){this.effectManager.addDefaultEffect(t)}_addDefaultShaderModule(t){this.layerManager.addDefaultShaderModule(t)}_removeDefaultShaderModule(t){this.layerManager?.removeDefaultShaderModule(t)}_resolveInternalPickingMode(){const{pickAsync:t}=this.props,e=this.device?.type||this.props.deviceProps?.type;if(t==="auto")return e==="webgpu"?"async":"sync";if(t==="sync"&&e==="webgpu")throw new Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return t}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(t){return this.props.onError?.(t),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:t,emptyInfo:e}){return t[0]||e}_shouldUnproject3D(t=this.layerManager?.getLayers()||[]){return t.some(e=>e.props.pickable==="3d")}_getPointPickOptions(t,e,i={},n=this.layerManager?.getLayers()||[]){return{x:t,y:e,canvasId:i.canvasId,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(n),...i}}_pickPointSync(t){return this._pick("pickObject","pickObject Time",t)}_pickPointAsync(t){return this._pickAsync("pickObjectAsync","pickObject Time",t)}_getLastPointerDownPickingInfo(t,e,i,n=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:t,y:e,layers:n,viewports:this.getViewports({x:t,y:e,canvasId:i})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:t,emptyInfo:e},i){if(!this.widgetManager)return;this.cursorState.isHovering=t.length>0;let n=e,r=!1;for(const s of t)n=s,r=s.layer?.onHover(s,i)||r;r||(this.props.onHover?.(n,i),this.widgetManager.onHover(n,i))}_dispatchPickingEvent(t,e){if(!this.layerManager||!this.widgetManager)return;const i=ke[e.type];if(!i)return;const{layer:n}=t,r=n&&(n[i]||n.props[i]),s=this.props[i];let o=!1;r&&(o=r.call(n,t,e)),o||(s?.(t,e),this.widgetManager.onEvent(t,e))}_pickAsync(t,e,i){I(this.deckPicker);const{stats:n}=this,r=this._isMultiCanvasMode()?i.canvasId||this._getDefaultCanvasId():i.canvasId,s=this._getCanvasContext(r)||void 0;n.get("Pick Count").incrementCount(),n.get(e).timeStart(),this._resizeForCanvasTarget(r);const o=this.deckPicker[t]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports({...i,canvasId:r}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasId:r,canvasContext:s});return n.get(e).timeEnd(),o}_pick(t,e,i){I(this.deckPicker);const{stats:n}=this,r=this._isMultiCanvasMode()?i.canvasId||this._getDefaultCanvasId():i.canvasId,s=this._getCanvasContext(r)||void 0;n.get("Pick Count").incrementCount(),n.get(e).timeStart(),this._resizeForCanvasTarget(r);const o=this.deckPicker[t]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports({...i,canvasId:r}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasId:r,canvasContext:s});return n.get(e).timeEnd(),o}_createCanvas(t){let e=t.canvas;return typeof e=="string"&&(e=document.getElementById(e),I(e)),e?this._ownedCanvas=null:(e=document.createElement("canvas"),e.id=t.id||"deckgl-overlay",t.width&&typeof t.width=="number"&&(e.width=t.width),t.height&&typeof t.height=="number"&&(e.height=t.height),(t.parent||document.body).appendChild(e),this._ownedCanvas=e),Object.assign(e.style,t.style),e}_isMultiCanvasMode(){return Array.isArray(this.props._canvases)}_getDefaultCanvasId(){return this._canvasManager.order[0]||"default-canvas"}_validateCanvasConfiguration(t){Array.isArray(t._canvases)&&(I(!t.canvas),I(!t.gl),I(!t.device?.canvasContext||t.device.getDefaultCanvasContext().offscreenCanvas))}_createEventManager(t){const e=new nf(t,{touchAction:this.props.touchAction,recognizers:Object.keys(Ds).map(i=>{const[n,r,s,o]=Ds[i],a=this.props.eventRecognizerOptions?.[i];return{recognizer:new n({...r,...a,event:i}),recognizeWith:s,requireFailure:o}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(const i in ke)i==="dblclick"?e.watch(i,this._onEvent):e.on(i,this._onEvent);return e}_getEventRoot(t){return t.closest(".deck-events-root")||this.props.parent?.querySelector(".deck-events-root")||t}_syncCanvasTargets(){if(!this.device||!this._isMultiCanvasMode())return;this._canvasManager.syncCanvasEntries({device:this.device,canvases:this.props._canvases||[],useDevicePixels:this.props.useDevicePixels}),this.eventManagers=this._canvasManager.eventManagers;const t=this._getDefaultCanvasId();this.eventManager=this.eventManagers[t]||null,this.canvas=this._canvasManager.targets[t]?.canvas||null}_setCanvasContext(t){this._canvasContext=t,"style"in t.canvas&&(this.canvas=t.canvas)}_setDeviceCanvasContext(t,e={}){const i=t.getDefaultCanvasContext();this._setCanvasContext(i),this._setDeviceResizeHandler(t,e)}_setDeviceResizeHandler(t,e={}){const i=!!e.syncDrawingBuffer;if(this._deviceResizeHandler?.device===t){this._deviceResizeHandler.syncDrawingBuffer=i;return}this._restoreDeviceResizeHandler();const n=r=>{this._isMultiCanvasMode()?this._updateMultiCanvasDimensions():r===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};t.props.onResize=n,this._deviceResizeHandler={device:t,onResize:n,syncDrawingBuffer:i}}_restoreDeviceResizeHandler(){const t=this._deviceResizeHandler;t&&t.device.props?.onResize===t.onResize&&(t.device.props.onResize=ut),this._deviceResizeHandler=null}_setCanvasSize(t){if(this._isMultiCanvasMode()||!this.canvas)return;const{width:e,height:i}=t;if(e||e===0){const n=Number.isFinite(e)?`${e}px`:e;this.canvas.style.width=n}if(i||i===0){const n=Number.isFinite(i)?`${i}px`:i;this.canvas.style.position=t.style?.position||"absolute",this.canvas.style.height=n}}_getCanvasIdFromEvent(t){return this._canvasManager.getCanvasIdFromEvent(t?.rootElement)}_getCanvasContext(t){return this._canvasManager.getTarget(t)?.presentationContext||this._canvasContext}_resizeForCanvasTarget(t){const e=this._canvasManager.getTarget(t);if(!e||!this.device?.canvasContext)return;const[i,n]=e.presentationContext.getDrawingBufferSize();this.device.canvasContext.setDrawingBufferSize(i,n)}_createDeviceCanvas(t){if(this._isMultiCanvasMode()){const e=globalThis.OffscreenCanvas;if(!e)throw new Error("`_canvases` requires OffscreenCanvas support.");return new e(typeof t.width=="number"&&Number.isFinite(t.width)?t.width:1,typeof t.height=="number"&&Number.isFinite(t.height)?t.height:1)}return this._createCanvas(t)}_updateCanvasSize(t=this._canvasContext){if(this._isMultiCanvasMode()){this._updateMultiCanvasDimensions();return}const{canvas:e}=this,[i,n]=t?t.getCSSSize():[e?.clientWidth??e?.width??0,e?.clientHeight??e?.height??0];(i!==this.width||n!==this.height)&&(this.width=i,this.height=n,this.viewManager?.setProps({width:i,height:n}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:i,height:n},t||void 0))}_onCanvasContextResize(t,e={}){if(e.syncDrawingBuffer){const{width:i,height:n}=t.canvas;t.setDrawingBufferSize(i,n)}this._needsRedraw="Canvas resized",this._updateCanvasSize(t)}_updateMultiCanvasDimensions(){const[t,e]=this._getCanvasContext()?.getCSSSize()||[0,0];(t!==this.width||e!==this.height)&&(this.width=t,this.height=e,this.props.onResize({width:t,height:e})),this._needsRedraw="Canvas resized",this.viewManager?.setNeedsUpdate("Canvas resized"),this.viewManager?.setProps({width:this.width,height:this.height})}_createAnimationLoop(t,e){const{gl:i,onError:n}=e;return new Ja({device:t,autoResizeDrawingBuffer:!i&&!Array.isArray(e._canvases),autoResizeViewport:!1,onInitialize:r=>this._setDevice(r.device),onRender:this._onRenderFrame.bind(this),onError:n})}_createDevice(t){const e=this.props.deviceProps?.createCanvasContext,i=typeof e=="object"?e:void 0,n={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...t.deviceProps,debug:Bo(t)};n.adapters.includes(hn)||n.adapters.push(hn);const r={alphaMode:this.props.deviceProps?.type==="webgpu"?"premultiplied":void 0};return Jn.createDevice({_reuseDevices:!0,type:"webgl",...n,createCanvasContext:{...r,...i,canvas:this._createDeviceCanvas(t),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){const{views:t}=this.props,e=Array.isArray(t)?t:t?[t]:[new an({id:"default-view"})];return e.length&&this.props.controller&&(e[0]=e[0].clone({controller:this.props.controller})),e}_onContextLost(){const{onError:t}=this.props;this.animationLoop&&t&&t(new Error("WebGL context is lost"))}_pickAndCallback(){const{_pickRequest:t}=this;if(t.event){const e=t.event,i=this.layerManager?.getLayers()||[],n=this._getPointPickOptions(t.x,t.y,{canvasId:t.canvasId,radius:t.radius,mode:t.mode},i),r=this._getInternalPickingMode(),s=++this._hoverPickSequence;if(t.event=null,t.canvasId=void 0,!r)return;if(r==="sync"){this._applyHoverCallbacks(this._pickPointSync(n),e);return}this._pickPointAsync(n).then(({result:o,emptyInfo:a})=>{s===this._hoverPickSequence&&this._applyHoverCallbacks({result:o,emptyInfo:a},e)}).catch(o=>this.props.onError?.(o))}}_updateCursor(){const t=this.props.getCursor(this.cursorState);if(this._isMultiCanvasMode()){for(const i of Object.values(this._canvasManager.targets))i.canvas.style.cursor=t;return}const e=this.props.parent||this.canvas;e&&(e.style.cursor=t)}_setDevice(t){if(this.device=t,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(t,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==t)}),this._isMultiCanvasMode()?this._syncCanvasTargets():this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),this.device.type==="webgl"&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),this.device.type==="webgl"&&this.props.onWebGLInitialized(this.device.gl);const e=new Qn;if(e.play(),this.animationLoop.attachTimeline(e),!this._isMultiCanvasMode()){const r=this.canvas&&this._getEventRoot(this.canvas);I(r),this.eventManager=this._createEventManager(r),this.eventManagers={[tp]:this.eventManager}}this.viewManager=new ep({timeline:e,eventManager:this.eventManager,eventManagers:this.eventManagers,getCanvasContext:this._isMultiCanvasMode()?this.getCanvasContext.bind(this):void 0,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});const i=this.viewManager.getViewports()[0];this.layerManager=new vo(this.device,{deck:this,stats:this.stats,viewport:i,timeline:e}),this.effectManager=new wp({deck:this,device:this.device}),this.deckRenderer=new To(this.device,{stats:this.stats}),this.deckPicker=new Mp(this.device,{stats:this.stats});const n=this.props.parent?.querySelector(".deck-widgets-root")||(this._isMultiCanvasMode()?this.props.parent||this.canvas?.parentElement:null)||this.canvas?.parentElement;this.widgetManager=new Ap({deck:this,parentElement:n}),this.widgetManager.addDefault(new Ro),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(t,e){const{device:i,gl:n}=this.layerManager.context;this.props.onBeforeRender({device:i,gl:n});const r={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:"screen",effects:this.effectManager.getEffects(),...e};if(this._isMultiCanvasMode()&&r.pass==="screen"&&!r.target&&this._canvasManager.order.length)for(const s of this._canvasManager.order){const o=r.viewports.filter(l=>this.viewManager.getCanvasId(l.id)===s);if(!o.length){const l=this._canvasManager.targets[s];this._resizeForCanvasTarget(s),this.deckRenderer?.renderLayers({...r,canvasContext:l.presentationContext,target:l.presentationContext.getCurrentFramebuffer(),viewports:[],clearCanvas:!0}),l.presentationContext.present();continue}const a=this._canvasManager.targets[s];this._resizeForCanvasTarget(s);const c=a.presentationContext.getCurrentFramebuffer();this.deckRenderer?.renderLayers({...r,canvasContext:a.presentationContext,target:c,viewports:o}),a.presentationContext.present()}else this.deckRenderer?.renderLayers(r);r.pass==="screen"&&this.widgetManager.onRedraw({viewports:r.viewports,layers:r.layers}),this.props.onAfterRender({device:i,gl:n})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60===0&&(this._getMetrics(),this.stats.reset(),L.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(t){const e=this.props.onViewStateChange(t)||t.viewState;this.viewState&&(this.viewState={...this.viewState,[t.viewId]:e},this.props.viewState||this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(t){this.cursorState.isDragging=t.isDragging||!1,this.props.onInteractionStateChange(t)}_getFrameStats(){const{stats:t}=this;t.get("frameRate").timeEnd(),t.get("frameRate").timeStart();const e=this.animationLoop.stats;t.get("GPU Time").addTime(e.get("GPU Time").lastTiming),t.get("CPU Time").addTime(e.get("CPU Time").lastTiming)}_getMetrics(){const{metrics:t,stats:e}=this;t.fps=e.get("frameRate").getHz(),t.setPropsTime=e.get("setProps Time").time,t.updateAttributesTime=e.get("Update Attributes").time,t.framesRedrawn=e.get("Redraw Count").count,t.pickTime=e.get("pickObject Time").time+e.get("pickMultipleObjects Time").time+e.get("pickObjects Time").time,t.pickCount=e.get("Pick Count").count,t.layersCount=this.layerManager?.layers.length??0,t.drawLayersCount=e.get("Layers rendered").lastSampleCount,t.pickLayersCount=e.get("Layers picked").lastSampleCount,t.updateLayersCount=e.get("Layer updates").count,t.updateAttributesCount=e.get("Attributes updated").count,t.gpuTime=e.get("GPU Time").time,t.cpuTime=e.get("CPU Time").time,t.gpuTimePerFrame=e.get("GPU Time").getAverageTime(),t.cpuTimePerFrame=e.get("CPU Time").getAverageTime();const i=Jn.stats.get("GPU Time and Memory");t.bufferMemory=i.get("Buffer Memory").count,t.textureMemory=i.get("Texture Memory").count,t.renderbufferMemory=i.get("Renderbuffer Memory").count,t.gpuMemory=i.get("GPU Memory").count}};fn.defaultProps=zo,fn.VERSION=qr;function Vp(t){switch(t){case"float64":return Float64Array;case"uint8":case"unorm8":return Uint8ClampedArray;default:return Oa(t)}}var Fp=Vn.getDataType.bind(Vn);function Ke(t,e,i){if(e.size>4)return null;const n=i==="webgpu"&&e.type==="uint8"?"unorm8":e.type,r=e.size,s=!!(i!=="webgpu"&&r===3&&n&&["uint8","sint8","unorm8","snorm8","uint16","sint16","unorm16","snorm16"].includes(n));return{attribute:t,format:r>1?`${n}x${r}${s?"-webgl":""}`:e.type,byteOffset:e.offset||0}}function ot(t){return t.stride||t.size*t.bytesPerElement}function Gp(t,e){return t.type===e.type&&t.size===e.size&&ot(t)===ot(e)&&(t.offset||0)===(e.offset||0)}function dn(t,e){e.offset&&L.removed("shaderAttribute.offset","vertexOffset, elementOffset")();const i=ot(t),n=e.vertexOffset!==void 0?e.vertexOffset:t.vertexOffset||0,r=e.elementOffset||0,s=n*i+r*t.bytesPerElement+(t.offset||0);return{...e,offset:s,stride:i}}function $p(t,e){const i=dn(t,e);return{high:i,low:{...i,offset:i.offset+t.size*4}}}var Wp=class{constructor(t,e,i){this._buffer=null,this.device=t,this.id=e.id||"",this.size=e.size||1;const n=e.logicalType||e.type,r=n==="float64";let{defaultValue:s}=e;s=Number.isFinite(s)?[s]:s||new Array(this.size).fill(0);let o;r?o="float32":!n&&e.isIndexed?o="uint32":o=n||"float32";let a=Vp(n||o);this.doublePrecision=r,r&&e.fp64===!1&&(a=Float32Array),this.value=null,this.settings={...e,defaultType:a,defaultValue:s,logicalType:n,type:o,normalized:o.includes("norm"),size:this.size,bytesPerElement:a.BYTES_PER_ELEMENT},this.state={...i,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){const t=this.getAccessor();return t.vertexOffset?t.vertexOffset*ot(t):0}get numInstances(){return this.state.numInstances}set numInstances(t){this.state.numInstances=t}get isDoublePrecisionBuffer(){return this._shouldSplitDoublePrecisionValue(this.value)}delete(){this._buffer&&(this._buffer.delete(),this._buffer=null),jt.release(this.state.allocatedValue),this.state.allocatedValue=null}getBuffer(){return this.state.constant&&this.device.type!=="webgpu"?null:this.state.externalBuffer||this._buffer}getValue(t=this.id,e=null){const i={};if(this.state.constant){const n=this.value;if(this.device.type==="webgpu"&&this._buffer)i[t]=this._buffer;else if(e){const r=dn(this.getAccessor(),e),s=r.offset/n.BYTES_PER_ELEMENT,o=r.size||this.size;i[t]=n.subarray(s,s+o)}else i[t]=n}else i[t]=this.getBuffer();return this.doublePrecision&&(this.isDoublePrecisionBuffer?i[`${t}64Low`]=i[t]:i[`${t}64Low`]=new Float32Array(this.size)),i}_getBufferLayout(t=this.id,e=null){const i=this.getAccessor(),n=[],r={name:this.id,byteStride:this.device.type==="webgpu"&&this.state.constant?0:ot(i)};if(this.doublePrecision){const s=$p(i,e||{});n.push(Ke(t,{...i,...s.high},this.device.type),Ke(`${t}64Low`,{...i,...s.low},this.device.type))}else if(e){const s=dn(i,e);n.push(Ke(t,{...i,...s},this.device.type))}else n.push(Ke(t,i,this.device.type));return r.attributes=n.filter(Boolean),r}setAccessor(t){this.state.bufferAccessor=t}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let t=null;if(this.state.constant&&this.value){const e=Array.from(this.value);t=[e,e]}else{const{value:e,numInstances:i,size:n}=this,r=i*n;if(e&&r&&e.length>=r){const s=new Array(n).fill(1/0),o=new Array(n).fill(-1/0);for(let a=0;a<r;)for(let c=0;c<n;c++){const l=e[a++];l<s[c]&&(s[c]=l),l>o[c]&&(o[c]=l)}t=[s,o]}}return this.state.bounds=t,t}setData(t){const{state:e}=this;let i;ArrayBuffer.isView(t)?i={value:t}:t instanceof G?i={buffer:t}:i=t;const n={...this.settings,...i};if(ArrayBuffer.isView(i.value)){if(!i.type)if(this.doublePrecision&&i.value instanceof Float64Array)n.type="float32";else{const r=Fp(i.value);n.type=n.normalized?r.replace("int","norm"):r}n.bytesPerElement=i.value.BYTES_PER_ELEMENT,n.stride=ot(n)}if(e.bounds=null,i.constant){let r=i.value;if(r=this._normalizeValue(r,[],0),this.settings.normalized&&(r=this.normalizeConstant(r)),!(!e.constant||!this._areValuesEqual(r,this.value)))return!1;e.externalBuffer=null,e.constant=!0,this.value=ArrayBuffer.isView(r)?r:new Float32Array(r)}else if(i.buffer)e.externalBuffer=i.buffer,e.constant=!1,this.value=i.value||null;else if(i.value){this._checkExternalBuffer(i);const r=i.value;let s=r;e.externalBuffer=null,e.constant=!1,this.value=r,this._shouldSplitDoublePrecisionValue(s)&&(s=Ve(s,n),r instanceof Float32Array&&(n.stride=n.size*2*Float32Array.BYTES_PER_ELEMENT));let{buffer:o}=this;const a=ot(n),c=(n.vertexOffset||0)*a;if(this.settings.isIndexed){const u=this.settings.defaultType;s.constructor!==u&&(s=new u(s))}const l=s.byteLength+c+a*2;(!o||o.byteLength<l)&&(o=this._createBuffer(l)),o.write(s,c)}return this.setAccessor(n),!0}updateSubBuffer(t={}){this.state.bounds=null;const e=this.value,{startOffset:i=0,endOffset:n}=t,r=this._shouldSplitDoublePrecisionValue(e);this.buffer.write(r?Ve(e,{size:this.size,startIndex:i,endIndex:n}):e.subarray(i,n),i*(r?8:e.BYTES_PER_ELEMENT)+this.byteOffset)}allocate(t,e=!1){const{state:i}=this,n=i.allocatedValue,r=jt.allocate(n,t+1,{size:this.size,type:this.settings.defaultType,copy:e});this.value=r;const s=this._shouldSplitDoublePrecisionValue(r),o=s&&r instanceof Float32Array?{...this.settings,stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}:this.settings;this.setAccessor(o);const{byteOffset:a}=this;let{buffer:c}=this;const l=r.byteLength*(s&&r instanceof Float32Array?2:1);return(!c||c.byteLength<l+a)&&(c=this._createBuffer(l+a),e&&n&&c.write(this._shouldSplitDoublePrecisionValue(n)?Ve(n,this):n,a)),i.allocatedValue=r,i.constant=!1,i.externalBuffer=null,!0}_shouldSplitDoublePrecisionValue(t){return!!(this.doublePrecision&&(t instanceof Float64Array||this.device.type==="webgpu"&&t instanceof Float32Array))}_checkExternalBuffer(t){const{value:e}=t;if(!ArrayBuffer.isView(e))throw new Error(`Attribute ${this.id} value is not TypedArray`);const i=this.settings.defaultType;let n=!1;if(this.doublePrecision&&(n=e.BYTES_PER_ELEMENT<4),n)throw new Error(`Attribute ${this.id} does not support ${e.constructor.name}`);!(e instanceof i)&&this.settings.normalized&&!("normalized"in t)&&L.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(t){switch(this.settings.type){case"snorm8":return new Float32Array(t).map(e=>(e+128)/255*2-1);case"snorm16":return new Float32Array(t).map(e=>(e+32768)/65535*2-1);case"unorm8":return new Float32Array(t).map(e=>e/255);case"unorm16":return new Float32Array(t).map(e=>e/65535);default:return t}}_normalizeValue(t,e,i){const{defaultValue:n,size:r}=this.settings;if(Number.isFinite(t))return e[i]=t,e;if(!t){let s=r;for(;--s>=0;)e[i+s]=n[s];return e}switch(r){case 4:e[i+3]=Number.isFinite(t[3])?t[3]:n[3];case 3:e[i+2]=Number.isFinite(t[2])?t[2]:n[2];case 2:e[i+1]=Number.isFinite(t[1])?t[1]:n[1];case 1:e[i+0]=Number.isFinite(t[0])?t[0]:n[0];break;default:let s=r;for(;--s>=0;)e[i+s]=Number.isFinite(t[s])?t[s]:n[s]}return e}_areValuesEqual(t,e){if(!t||!e)return!1;const{size:i}=this;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}_createBuffer(t){this._buffer&&this._buffer.destroy();const{isIndexed:e,type:i}=this.settings,n=this.device.type==="webgpu"&&!e?G.VERTEX|G.STORAGE|G.COPY_DST|G.COPY_SRC:(e?G.INDEX:G.VERTEX)|G.COPY_DST;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:n,indexType:e?i:void 0,byteLength:t}),this._buffer}},No=[],Uo=[];function pn(t,e=0,i=1/0){let n=No;const r={index:-1,data:t,target:[]};return t?typeof t[Symbol.iterator]=="function"?n=t:t.length>0&&(Uo.length=t.length,n=Uo):n=No,(e>0||Number.isFinite(i))&&(n=(Array.isArray(n)?n:Array.from(n)).slice(e,i),r.index=e-1),{iterable:n,objectInfo:r}}function jo(t){return t&&t[Symbol.asyncIterator]}function Vo(t,e){const{size:i,stride:n,offset:r,startIndices:s,nested:o}=e,a=t.BYTES_PER_ELEMENT,c=n?n/a:i,l=r?r/a:0,u=Math.floor((t.length-l)/c);return(h,{index:f,target:d})=>{if(!s){const _=f*c+l;for(let v=0;v<i;v++)d[v]=t[_+v];return d}const p=s[f],g=s[f+1]||u;let m;if(o){m=new Array(g-p);for(let _=p;_<g;_++){const v=_*c+l;d=new Array(i);for(let y=0;y<i;y++)d[y]=t[v+y];m[_-p]=d}}else if(c===i)m=t.subarray(p*i+l,g*i+l);else{m=new t.constructor((g-p)*i);let _=0;for(let v=p;v<g;v++){const y=v*c+l;for(let b=0;b<i;b++)m[_++]=t[y+b]}}return m}}var Yp=[],Je=[[0,1/0]];function Hp(t,e){if(t===Je||(e[0]<0&&(e[0]=0),e[0]>=e[1]))return t;const i=[],n=t.length;let r=0;for(let s=0;s<n;s++){const o=t[s];o[1]<e[0]?(i.push(o),r=s+1):o[0]>e[1]?i.push(o):e=[Math.min(o[0],e[0]),Math.max(o[1],e[1])]}return i.splice(r,0,e),i}var Zp={interpolation:{duration:0,easing:t=>t},spring:{stiffness:.05,damping:.5}};function Fo(t,e){if(!t)return null;Number.isFinite(t)&&(t={type:"interpolation",duration:t});const i=t.type||"interpolation";return{...Zp[i],...e,...t,type:i}}var gn=class extends Wp{constructor(t,e){super(t,e,{startIndices:null,constantValue:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:Je}),this.constant=!1,this.settings.update=e.update||(e.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(t){this.state.startIndices=t}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:t=!1}={}){const e=this.state.needsRedraw;return this.state.needsRedraw=e&&!t,e}layoutChanged(){return this.state.layoutChanged}setAccessor(t){var e;(e=this.state).layoutChanged||(e.layoutChanged=!Gp(t,this.getAccessor())),super.setAccessor(t)}getUpdateTriggers(){const{accessor:t}=this.settings;return[this.id].concat(typeof t!="function"&&t||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(t){if(!t||!this.supportsTransition())return null;const{accessor:e}=this.settings,i=this.settings.transition;return Fo(Array.isArray(e)?t[e.find(n=>t[n])]:t[e],i)}setNeedsUpdate(t=this.id,e){if(this.state.needsUpdate=this.state.needsUpdate||t,this.setNeedsRedraw(t),e){const{startRow:i=0,endRow:n=1/0}=e;this.state.updateRanges=Hp(this.state.updateRanges,[i,n])}else this.state.updateRanges=Je}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=Yp}setNeedsRedraw(t=this.id){this.state.needsRedraw=this.state.needsRedraw||t}allocate(t){const{state:e,settings:i}=this;if(i.noAlloc)return!1;if(i.update){const n=this.isConstant;return super.allocate(t,e.updateRanges!==Je),e.layoutChanged||(e.layoutChanged=n&&this.device.type==="webgpu"),!0}return!1}updateBuffer({numInstances:t,data:e,props:i,context:n}){if(!this.needsUpdate())return!1;const{state:{updateRanges:r},settings:{update:s,noAlloc:o}}=this;let a=!0;if(s){for(const[c,l]of r)s.call(n,this,{data:e,startRow:c,endRow:l,props:i,numInstances:t});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset){if(this.constant){const c=this.value;this.value=null,this.setConstantValue(n,c)}else this.setData({value:this.value,constant:this.constant});this.constant=!1}else for(const[c,l]of r){const u=Number.isFinite(c)?this.getVertexOffset(c):0,h=Number.isFinite(l)?this.getVertexOffset(l):o||!Number.isFinite(t)?this.value.length:t*this.size;super.updateSubBuffer({startOffset:u,endOffset:h})}this._checkAttributeArray()}else a=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),a}setConstantValue(t,e){var i;if(e===void 0||typeof e=="function")return!1;const n=this.isConstant,r=this.settings.transform&&t?this.settings.transform.call(t,e):e,s=this.settings.defaultType;this.state.constantValue=this._normalizeValue(r,new s(this.size),0);const o=this.setData({constant:!0,value:r});if(this.device.type==="webgpu"){let a=this.state.constantValue;this.doublePrecision&&(a instanceof Float32Array||a instanceof Float64Array)&&(a=Ve(a,{size:this.size}),this.setAccessor({...this.getAccessor(),stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}));let c=this._buffer;(!c||c.byteLength<a.byteLength)&&(c=this._createBuffer(a.byteLength)),c.write(a),(i=this.state).layoutChanged||(i.layoutChanged=!n),this.constant=!1}return o&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0}getConstantValue(){return this.isConstant?this.state.constantValue:null}setExternalBuffer(t){const{state:e}=this;return t?(this.clearNeedsUpdate(),e.lastExternalBuffer===t||(e.lastExternalBuffer=t,this.setNeedsRedraw(),this.setData(t)),!0):(e.lastExternalBuffer=null,!1)}setBinaryValue(t,e=null){const{state:i,settings:n}=this;if(!t)return i.binaryValue=null,i.binaryAccessor=null,!1;if(n.noAlloc)return!1;if(i.binaryValue===t)return this.clearNeedsUpdate(),!0;if(i.binaryValue=t,this.setNeedsRedraw(),n.transform||e!==this.startIndices){ArrayBuffer.isView(t)&&(t={value:t});const r=t;I(ArrayBuffer.isView(r.value),`invalid ${n.accessor}`);const s=!!r.size&&r.size!==this.size;return i.binaryAccessor=Vo(r.value,{size:r.size||this.size,stride:r.stride,offset:r.offset,startIndices:e,nested:s}),!1}return this.clearNeedsUpdate(),this.setData(t),!0}getVertexOffset(t){const{startIndices:e}=this;return(e?t<e.length?e[t]:this.numInstances:t)*this.size}getValue(){const t=this.settings.shaderAttributes,e=super.getValue();if(!t)return e;for(const i in t)Object.assign(e,super.getValue(i,t[i]));return e}getBufferLayout(t){this.state.layoutChanged=!1;const e=this.settings.shaderAttributes,i=super._getBufferLayout(),{stepMode:n}=this.settings;if(n==="dynamic"?i.stepMode=t?t.isInstanced?"instance":"vertex":"instance":i.stepMode=n??"vertex",!e)return i;for(const r in e){const s=super._getBufferLayout(r,e[r]);i.attributes.push(...s.attributes)}return i}_autoUpdater(t,{data:e,startRow:i,endRow:n,props:r,numInstances:s}){const{settings:o,state:a,value:c,size:l,startIndices:u}=t,{accessor:h,transform:f}=o,d=a.binaryAccessor||(typeof h=="function"?h:r[h]);I(typeof d=="function",`accessor "${h}" is not a function`);let p=t.getVertexOffset(i);const{iterable:g,objectInfo:m}=pn(e,i,n);for(const _ of g){m.index++;let v=d(_,m);if(f&&(v=f.call(this,v)),u){const y=(m.index<u.length-1?u[m.index+1]:s)-u[m.index];if(v&&Array.isArray(v[0])){let b=p;for(const P of v)t._normalizeValue(P,c,b),b+=l}else v&&v.length>l?c.set(v,p):(t._normalizeValue(v,m.target,0),_o({target:c,source:m.target,start:p,count:y}));p+=y*l}else t._normalizeValue(v,c,p),p+=l}}_validateAttributeUpdaters(){const{settings:t}=this;if(!(t.noAlloc||typeof t.update=="function"))throw new Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){const{value:t}=this,e=Math.min(4,this.size);if(t&&t.length>=e){let i=!0;switch(e){case 4:i=i&&Number.isFinite(t[3]);case 3:i=i&&Number.isFinite(t[2]);case 2:i=i&&Number.isFinite(t[1]);case 1:i=i&&Number.isFinite(t[0]);break;default:i=!1}if(!i)throw new Error(`Illegal attribute generated for ${this.id}`)}}},Go=class si{gpuDataEvaluators;format;length;id;_gpuVector;_ownsGPUDataEvaluators;_destroyed=!1;static fromGPUVector(e){if(e.bufferLayout)throw new Error(`GPUVectorEvaluator.fromGPUVector() does not accept interleaved vector "${e.name}"`);if(e.data.length===0)throw new Error(`GPUVectorEvaluator.fromGPUVector() requires GPUData for "${e.name}"`);return new si({id:e.name,gpuDataEvaluators:e.data.map(i=>ft.fromGPUData(i,{id:e.name})),gpuVector:e,format:e.format})}static fromGPUDataEvaluators(e,i={}){return new si({id:i.id,gpuDataEvaluators:e,format:i.format})}constructor({id:e,gpuDataEvaluators:i,gpuVector:n,format:r}){if(i.length===0)throw new Error("GPUVectorEvaluator requires at least one GPUData evaluator");qp(i),this.id=e,this.gpuDataEvaluators=i,this.format=r??i[0].format,this.length=i.reduce((s,o)=>s+o.length,0),this._gpuVector=n,this._ownsGPUDataEvaluators=!n}get evaluated(){return!!this._gpuVector}get gpuVector(){if(!this._gpuVector)throw new Error(`${this} not evaluated`);return this._gpuVector}mapGPUData(e){return si.fromGPUDataEvaluators(this.gpuDataEvaluators.map((i,n)=>e(i,n)),{id:this.id})}async evaluate(e,i={}){if(this._destroyed)throw new Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;const n=await Promise.all(this.gpuDataEvaluators.map(a=>a.evaluate(e,i))),r=n[0],s=n.map($o),o=i.format??this.format??r.format;return this._gpuVector=new rr({type:"data",name:i.name??this.id??"vector",format:o,data:s,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}evaluateSync(e,i={}){if(this._destroyed)throw new Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;const n=this.gpuDataEvaluators.map(a=>a.evaluateSync(e,i)),r=n[0],s=n.map($o),o=i.format??this.format??r.format;return this._gpuVector=new rr({type:"data",name:i.name??this.id??"vector",format:o,data:s,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}destroy(){if(this._ownsGPUDataEvaluators)for(const e of this.gpuDataEvaluators)e.destroy();this._gpuVector=void 0,this._destroyed=!0}toString(){return this.id??this.constructor.name}};function qp(t){const e=t[0];for(const i of t.slice(1))if(i.type!==e.type||i.size!==e.size||i.normalized!==e.normalized||i.format!==e.format)throw new Error("GPUVectorEvaluator requires matching GPUData evaluator layouts")}function $o(t){const[e,...i]=t.data;if(!e||i.length>0)throw new Error(`GPUVectorEvaluator requires one GPUData chunk for "${t.name}"`);return e}function mn({elementWise:t,func:e,inputs:i,output:n,outputBuffer:r}){const s=Array.isArray(i)?i:Object.values(i);for(const p of s)if(!p.value)throw new Error(`${p} does not have CPU value`);const o=n.length,a=n.size,c=new n.ValueType(o*a);for(let p=0;p<o;p++){const g=s.map(m=>F(m,p));if(t)for(let m=0;m<a;m++)c[p*a+m]=e.apply(null,g.map(_=>_[m]));else e.call(null,c.subarray(p*a,p*a+a),...g)}const l=n.ValueType.BYTES_PER_ELEMENT,u=n.offset/l,h=n.stride/l,f=a;let d=c;if(u!==0||h!==f){d=new n.ValueType(u+n.byteLength/l);for(let p=0;p<o;p++){const g=p*f,m=u+p*h,_=c.subarray(g,g+a);d.set(_,m),r.write(_,m*l)}}else r.write(c);return{success:!0,value:d}}function F(t,e){const i=t.value,n=t.size,r=t.offset/t.ValueType.BYTES_PER_ELEMENT,s=t.stride/t.ValueType.BYTES_PER_ELEMENT,o=r+(t.isConstant?0:e)*s,a=i.slice(o,o+n);if(!t.normalized)return a;const c=new Float32Array(n);for(let l=0;l<n;l++)c[l]=Xp(a[l],t.type);return c}function Xp(t,e){switch(e){case"uint8":return t/255;case"uint16":return t/65535;case"uint32":return t/4294967295;case"sint8":return Math.max(t/127,-1);case"sint16":return Math.max(t/32767,-1);case"sint32":return Math.max(t/2147483647,-1);case"float32":return t;default:throw new Error(`Unsupported normalized source type ${e}`)}}var Kp=({inputs:t,output:e,target:i})=>{for(const r of Object.values(t.namedInputs))if(!r.value)throw new Error(`${r} does not have CPU value`);const n=new e.ValueType(e.length*e.size);for(let r=0;r<e.length;r++){const s=Object.fromEntries(Object.entries(t.namedInputs).map(([o,a])=>[o,F(a,r)]));for(let o=0;o<e.size;o++)n[r*e.size+o]=Wo(t.expression,s,o)}return i.write(n),{success:!0,value:n}};function Wo(t,e,i){switch(t.kind){case"input":{const n=e[t.name];return i<n.length?n[i]:n.length===1?n[0]:0}case"literal":return Array.isArray(t.value)?t.value[i]??0:t.value;case"call":{Jp(t.op,t.args.length);const n=t.args.map(r=>Wo(r,e,i));switch(t.op){case"add":return n[0]+n[1];case"subtract":return n[0]-n[1];case"multiply":return n[0]*n[1];case"divide":return n[0]/n[1];case"pow":return Math.pow(n[0],n[1]);case"sqrt":return Math.sqrt(n[0]);case"abs":return Math.abs(n[0]);case"sin":return Math.sin(n[0]);case"cos":return Math.cos(n[0]);case"tan":return Math.tan(n[0]);case"exp":return Math.exp(n[0]);case"log":return Math.log(n[0]);default:{const r=t.op;throw new Error(`Unsupported arithmetic op ${r}`)}}}default:throw new Error(`Unsupported expression node ${t.kind}`)}}function Jp(t,e){const i=uc[t].arity;if(e!==i)throw new Error(`Arithmetic op '${t}' expects ${i} args, got ${e}`)}var Qp=({inputs:t,output:e,target:i})=>{const{sourceValues:n}=t;if(!n.value)throw new Error(`${n} does not have CPU value`);const r=new e.ValueType(e.length*e.size);if(n.length===0)return{success:!1,error:new Error(`${n} is empty`)};for(let s=0;s<n.size;s++){const o=F(n,0)[s],a=s*e.size,c=a+1;r[a]=o,r[c]=o;for(let l=1;l<n.length;l++){const u=F(n,l)[s];u<r[a]&&(r[a]=u),u>r[c]&&(r[c]=u)}}return i.write(r),{success:!0,value:r}},tg=({inputs:t,output:e,target:i})=>mn({func:(n,r)=>{const s=n.length/2,o=new Float64Array(r.buffer);for(let a=0;a<s;a++){const c=o[a];n[a]=Math.fround(c),n[a+s]=c-n[a]}return n},inputs:t,output:e,outputBuffer:i}),eg=async({inputs:t,output:e,target:i})=>{const{ids:n,sourceValues:r}=t,s=n.value,o=r.value;if(!s)throw new Error(`${n} does not have CPU value`);if(!o)throw new Error(`${r} does not have CPU value`);const a=new e.ValueType(e.length*e.size),c=new Array(e.size).fill(0);for(let l=0;l<e.length;l++){const u=F(n,l),h=Number(u[0]),f=ig(h,r.length)?F(r,h):c;a.set(f,l*e.size)}return i.write(a),{success:!0,value:a}};function ig(t,e){return Number.isInteger(t)&&t>=0&&t<e}var ng=({inputs:t,output:e,target:i})=>mn({func:(n,...r)=>{let s=0;for(const o of r)n.set(o,s),s+=o.length},inputs:t,output:e,outputBuffer:i}),rg=({inputs:t,output:e,target:i})=>{const{x:n,y:r}=t,s=new e.ValueType(e.length);for(let o=0;o<e.length;o++){const a=F(n,o),c=F(r,o);let l=0;for(let u=0;u<n.size;u++)l+=a[u]*c[u];s[o]=l}return i.write(s),{success:!0,value:s}},sg=({inputs:t,output:e,target:i})=>{const{x:n,y:r}=t,s=new e.ValueType(e.length);for(let o=0;o<e.length;o++){const a=F(n,o),c=F(r,o);let l=1;for(let u=0;u<n.size;u++)if(a[u]!==c[u]){l=0;break}s[o]=l}return i.write(s),{success:!0,value:s}},og=({inputs:t,output:e,target:i})=>{const{x:n}=t,r=new e.ValueType(e.length);for(let s=0;s<e.length;s++){const o=F(n,s);let a=0;for(let c=0;c<n.size;c++)a+=o[c]*o[c];r[s]=Math.sqrt(a)}return i.write(r),{success:!0,value:r}},ag=async({inputs:t,output:e,target:i})=>{const{segments:n,vertexCount:r}=t,s=n.value;if(!s)throw new Error(`${n} does not have CPU value`);cg(s,n,r);const o=new e.ValueType(e.length*e.size);let a=0;for(let c=0;c<r;c++){for(;a+1<n.length&&s[_n(n,a+1)]<=c;)a++;const l=s[_n(n,a)],u=c*e.size;o[u]=a,o[u+1]=c-l}return i.write(o),{success:!0,value:o}};function cg(t,e,i){if(e.length<1)throw new Error("segmentedMap segments must contain at least one segment start");let n=0;for(let r=0;r<e.length;r++){const s=t[_n(e,r)];if(r===0&&s!==0)throw new Error(`segmentedMap segments must start at 0, got ${s}`);if(r>0&&s<n)throw new Error(`segmentedMap segments must be non-decreasing, got ${s} after ${n}`);n=s}if(n>i)throw new Error(`segmentedMap last segment start must be <= vertexCount, got ${n} > ${i}`)}function _n(t,e){return t.offset/t.ValueType.BYTES_PER_ELEMENT+e*(t.stride/t.ValueType.BYTES_PER_ELEMENT)}var lg=async({inputs:t,output:e,target:i})=>{const{condition:n,whenTrue:r,whenFalse:s}=t,o=new e.ValueType(e.length*e.size);for(let a=0;a<e.length;a++){const c=F(n,a),l=F(r,a),u=F(s,a);for(let h=0;h<e.size;h++){const f=vn(c,n.size,h);o[a*e.size+h]=f!==0?vn(l,r.size,h):vn(u,s.size,h)}}return i.write(o),{success:!0,value:o}};function vn(t,e,i){return i<e?t[i]:e===1?t[0]:0}var ug=({inputs:t,output:e,target:i})=>{const n=new e.ValueType(e.length);for(let r=0;r<e.length;r++)n[r]=t.start+r*t.step;return i.write(n),{success:!0,value:n}},hg=({inputs:t,output:e,target:i})=>{const{columns:n}=t;return mn({func:(r,s)=>{for(let o=0;o<n.length;o++)r[o]=s[n[o]]},inputs:{x:t.x},output:e,outputBuffer:i})},fg=La({arithmetic:()=>Kp,dot:()=>rg,equalAll:()=>sg,extent:()=>Qp,fround:()=>tg,gather:()=>eg,interleave:()=>ng,length:()=>og,segmentedMap:()=>ag,select:()=>lg,sequence:()=>ug,swizzle:()=>hg}),dg=class{_modules={cpu:fg};add(t,e){const i=this._modules[t];if(typeof e.then=="function"){const r=Promise.all([Promise.resolve(i||{}),e]).then(([s,o])=>({...s,...o}));return this._modules[t]=r,r.then(s=>{this._modules[t]=s}).catch(s=>{K.error(`Failed to register ${t} backend: ${s}`)()}),r}if(i&&typeof i.then=="function"){const r=Promise.resolve(i).then(s=>({...s,...e})).then(s=>(this._modules[t]=s,s)).catch(s=>{throw K.error(`Failed to register ${t} backend: ${s}`)(),s});return this._modules[t]=r,r}const n={...i||{},...e};return this._modules[t]=n,Promise.resolve(n)}async get(t,e){let i=this._modules[t];if(!i)if(t==="webgl")i=this.add("webgl",ge(()=>import("./webgl-CRSgYYgI.js"),__vite__mapDeps([4,5,2,3,6]),import.meta.url));else if(t==="webgpu")i=this.add("webgpu",ge(()=>import("./webgpu-BwIP2J_t.js"),__vite__mapDeps([7,8,5,2,3,6]),import.meta.url));else throw new Error(`${t} backend not registered`);const n=(await i)[e];if(typeof n!="function")throw new Error(`${t} backend does not implement ${e}`);return n}getSync(t,e){const i=this._modules[t];if(!i)throw new Error(`${t} backend not registered`);if(typeof i.then=="function")throw new Error(`${t} backend is not loaded yet`);const n=i[e];if(typeof n!="function")throw new Error(`${t} backend does not implement ${e}`);return n}clear(){this._modules={}}},yn=new dg,pg=class{inputs;dependencies;constructor(t){this.inputs=t,this.dependencies=Array.from(t instanceof Array?t:Object.values(t)).filter(e=>e instanceof ft)}async execute(t,e){return await this._resolveDependencies(t),await this._executeWithHandler(await yn.get(this._getHandlerRegistry(t),this.name),e)}executeSync(t,e){this._resolveDependenciesSync(t);const i=this._executeWithHandler(yn.getSync(this._getHandlerRegistry(t),this.name),e);if(gg(i))throw new Error(`${this.name} returned a Promise in executeSync()`);return i}shouldExecuteOnCPU(){return this.output.length<=1&&Array.from(this.dependencies).every(t=>!!t.value)}_getHandlerRegistry(t){return this.shouldExecuteOnCPU()?"cpu":t.type}async _resolveDependencies(t){for(const e of this.dependencies)await e.evaluate(t);if(this._getHandlerRegistry(t)==="cpu"||t.type==="null")for(const e of this.dependencies)await e.ensureCPUValue()}_resolveDependenciesSync(t){for(const e of this.dependencies)e.evaluateSync(t);if(this._getHandlerRegistry(t)==="cpu"||t.type==="null")for(const e of this.dependencies)e.ensureCPUValueSync()}_executeWithHandler(t,e){return t({device:e.device,inputs:this.inputs,output:this.output,target:e})}};function gg(t){return typeof t?.then=="function"}function mg(...t){let e=_g(t.map(i=>i.type));return e[0]!=="f"&&t.some(i=>i.normalized)&&(e="float32"),{isConstant:t.every(i=>i.isConstant),type:e,size:t.reduce((i,n)=>Math.max(i,n.size),0),length:t.reduce((i,n)=>Math.max(i,n.length),0)}}function _g(t){let e=0,i=0;for(const n of t){if(n[0]==="f")return"float32";const r=n.endsWith("8")?8:n.endsWith("6")?16:32;n[0]==="u"?e=Math.max(e,r):i=Math.max(i,r)}return e&&!i?`uint${e}`:i&&e<32?`sint${Math.max(i,e*2)}`:"float32"}var vg=class extends pg{name="interleave";output;constructor(t){super(t);const{isConstant:e,type:i,length:n}=mg(...t);this.output=new ft({isConstant:e,type:i,size:t.reduce((r,s)=>r+s.size,0),length:n,source:this})}toString(){return`_${this.inputs.join("_")}_`}};function yg(...t){if(t.length===0)throw new Error("interleave() requires at least one input");return t.length===1?nr(t[0]):new vg(t.map(nr)).output}function bg(t,e){const i=Pg(e);for(const n of i)n.evaluateSync(t);return wg(i),e}function wg(t){const e=new Set(t.flatMap(Sg)),i=new Set;for(const n of t)Qe(n,i);for(const n of i)n.evaluated&&!e.has(n.buffer)&&n.destroy()}function Pg(t){const e=new Set;return bn(t,e,new Set),Array.from(e)}function bn(t,e,i){if(xg(t)){e.add(t);return}if(!(!t||typeof t!="object"||i.has(t))){if(i.add(t),Array.isArray(t)){for(const n of t)bn(n,e,i);return}if(Eg(t))for(const n of Object.values(t))bn(n,e,i)}}function Eg(t){const e=Object.getPrototypeOf(t);return e===Object.prototype||e===null}function Qe(t,e){if(t instanceof Go){for(const n of t.gpuDataEvaluators)Qe(n,e);return}const i=t.source;if(i){if(i instanceof ft){e.has(i)||(e.add(i),Qe(i,e));return}for(const n of i.dependencies)e.has(n)||(e.add(n),Qe(n,e))}}function Sg(t){return t instanceof ft?[t.buffer]:t.gpuVector.data.map(e=>e.buffer instanceof Va?e.buffer.buffer:e.buffer)}function xg(t){return t instanceof ft||t instanceof Go}var Mg=class{constructor(t,{id:e,isTransitionAttribute:i}){this.packedBuffers={},this.device=t,this.id=e,this.isTransitionAttribute=i,this.device.type==="webgpu"&&yn.add("webgpu",{interleave:fc})}hasGroups(t){return this.device.type==="webgpu"&&Object.values(t).some(e=>!!e.settings.bufferGroup)}finalize(){for(const t of Object.values(this.packedBuffers))t.packed.destroy();this.packedBuffers={}}getBufferLayouts(t,e){const i=this._getPackedGroups(t,e,{requireValues:!1,excludeAttributes:{}});return this._getBufferLayouts(t,i,e)}getBindings(t,e,i,n){const r=this._getPackedGroups(t,i,{requireValues:!0,excludeAttributes:n}),s={},o=new Set;for(const a of r.values()){const c=!this.packedBuffers[a.id]||a.attributes.some(l=>!!e[l.id]);s[a.id]=this._getPackedBuffer(a,c);for(const l of a.attributes)o.add(l.id)}return{bufferLayouts:this._getBufferLayouts(t,r,i).filter(a=>!n[a.name]&&!t[a.name]?.settings.isIndexed),buffers:s,groupedAttributeIds:o}}_getPackedGroups(t,e,{requireValues:i,excludeAttributes:n}){const r=new Map;for(const o of Object.values(t)){const a=o.settings.bufferGroup;if(!a)continue;const c=r.get(a)||[];c.push(o),r.set(a,c)}const s=new Map;for(const[o,a]of r){const c=this._getPackedGroup(o,a,e,i,n);c&&s.set(o,c)}return s}_getPackedGroup(t,e,i,n,r){if(e.length<2)return null;const s=e.map(f=>f.getBufferLayout(i)),o=s[0].stepMode,a=Math.max(1,e[0].numInstances),c=n&&e.every(f=>f.isConstant);for(let f=0;f<e.length;f++){const d=e[f],p=d.getAccessor(),g=p.size*p.bytesPerElement;if(r[d.id]||d.settings.isIndexed||d.settings.noAlloc||d.doublePrecision||this.isTransitionAttribute(d.id)||s[f].stepMode!==o||d.numInstances!==e[0].numInstances||(p.offset||0)!==0||(p.vertexOffset||0)!==0||ot(p)!==g||n&&(d.isConstant?!d.getConstantValue()||d.getConstantValue().byteLength<g:!ArrayBuffer.isView(d.value)||d.value.byteLength<a*g))return null}const l={},u=[];let h=0;for(let f=0;f<e.length;f++){const d=e[f];h=Yo(h),l[d.id]=h;for(const p of s[f].attributes||[])u.push({...p,byteOffset:h+(p.byteOffset||0)});h+=ot(d.getAccessor())}return h=Yo(h),{id:t,attributes:e,byteStride:h,byteOffsets:l,rowCount:a,layout:{name:t,byteStride:c?0:h,stepMode:o,attributes:u}}}_getBufferLayouts(t,e,i){const n=[],r=new Set,s=new Set;for(const o of e.values())for(const a of o.attributes)s.add(a.id);for(const o of Object.values(t)){const a=o.settings.bufferGroup,c=a&&e.get(a);c&&s.has(o.id)?r.has(c.id)||(n.push(c.layout),r.add(c.id)):n.push(o.getBufferLayout(i))}return n}_getPackedBuffer(t,e){const i=JSON.stringify({byteStride:t.layout.byteStride,attributes:t.layout.attributes}),n=this.packedBuffers[t.id];if((!n||n.layoutKey!==i)&&(e=!0),e){n&&(n.packed.destroy(),delete this.packedBuffers[t.id]);const r=this._interleavePackedGroup(t);return this.packedBuffers[t.id]={packed:r,layoutKey:i},r.buffer}if(!n)throw new Error(`Attribute buffer group ${t.id} has no packed buffer`);return n.packed.buffer}_interleavePackedGroup(t){const e=yg(...t.attributes.map(i=>this._getInterleaveInput(t,i)));return bg(this.device,e),e}_getInterleaveInput(t,e){const i=ot(e.getAccessor()),n=t.byteOffsets[e.id];if(fe(`${t.id}.${e.id} rowByteLength`,i),fe(`${t.id}.${e.id} groupByteOffset`,n),e.isConstant){const a=e.getConstantValue();if(!a)throw new Error(`Attribute group ${t.id} is missing constant value ${e.id}`);return fe(`${t.id}.${e.id} constant byteOffset`,a.byteOffset),new ft({id:e.id,type:"uint32",size:i/4,isConstant:!0,value:new Uint32Array(a.buffer,a.byteOffset,i/Uint32Array.BYTES_PER_ELEMENT)})}const r=e.getBuffer(),s=e.byteOffset,o=e.getAccessor().stride||i;if(fe(`${t.id}.${e.id} byteOffset`,s),fe(`${t.id}.${e.id} stride`,o),!r)throw new Error(`Attribute group ${t.id} cannot interleave missing buffer ${e.id}`);return new ft({id:e.id,type:"uint32",size:i/4,offset:s,stride:o,length:t.rowCount,buffer:r})}};function Yo(t){return Math.ceil(t/4)*4}function fe(t,e){if(e%4!==0)throw new Error(`Attribute buffer groups require 32-bit alignment: ${t}=${e}`)}function wn(t){const{source:e,target:i,start:n=0,size:r,getData:s}=t,o=t.end||i.length,a=e.length,c=o-n;if(a>c){i.set(e.subarray(0,c),n);return}if(i.set(e,n),!s)return;let l=a;for(;l<c;){const u=s(l,e);for(let h=0;h<r;h++)i[n+l]=u[h]||0,l++}}function Tg({source:t,target:e,size:i,getData:n,sourceStartIndices:r,targetStartIndices:s}){if(!r||!s)return wn({source:t,target:e,size:i,getData:n}),e;let o=0,a=0;const c=n&&((u,h)=>n(u+a,h)),l=Math.min(r.length,s.length);for(let u=1;u<l;u++){const h=r[u]*i,f=s[u]*i;wn({source:t.subarray(o,h),target:e,start:a,end:f,size:i,getData:c}),o=h,a=f}return a<e.length&&wn({source:[],target:e,start:a,size:i,getData:c}),e}function Cg(t){const{device:e,settings:i,value:n}=t,r=new gn(e,i);return r.setData({value:n instanceof Float64Array?new Float64Array(0):new Float32Array(0),normalized:i.normalized}),r}function Ho(t){switch(t){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw new Error(`No defined attribute type for size "${t}"`)}}function Zo(t){switch(t){case 1:return"float32";case 2:return"float32x2";case 3:return"float32x3";case 4:return"float32x4";default:throw new Error("invalid type size")}}function qo(t){t.push(t.shift())}function Ag(t,e){const{settings:i,value:n,size:r}=t,s=t.isDoublePrecisionBuffer?2:1;let o=0;const{shaderAttributes:a}=t.settings;if(a)for(const c of Object.values(a))o=Math.max(o,c.vertexOffset??0);return(i.noAlloc?n.length:(e+o)*r)*s}function Xo({device:t,source:e,target:i}){return(!i||i.byteLength<e.byteLength)&&(i?.destroy(),i=t.createBuffer({byteLength:e.byteLength,usage:e.usage})),i}function Ko({device:t,buffer:e,attribute:i,fromLength:n,toLength:r,fromStartIndices:s,getData:o=a=>a}){const a=i.isDoublePrecisionBuffer?2:1,c=i.size*a,l=i.byteOffset,u=i.settings.bytesPerElement<4?l/i.settings.bytesPerElement*4:l,h=i.startIndices,f=s&&h,d=i.isConstant;if(!f&&e&&n>=r)return e;const p=i.value instanceof Float64Array?Float32Array:i.value.constructor,g=d?i.value:new p(i.getBuffer().readSyncWebGL(l,r*p.BYTES_PER_ELEMENT).buffer);if(i.settings.normalized&&!d){const y=o;o=(b,P)=>i.normalizeConstant(y(b,P))}const m=d?(y,b)=>o(g,b):(y,b)=>o(g.subarray(y,y+c),b),_=e?new Float32Array(e.readSyncWebGL(u,n*4).buffer):new Float32Array(0),v=new Float32Array(r);return Tg({source:_,target:v,sourceStartIndices:s,targetStartIndices:h,size:c,getData:m}),(!e||e.byteLength<v.byteLength+u)&&(e?.destroy(),e=t.createBuffer({byteLength:v.byteLength+u,usage:35050})),e.write(v,u),e}var Jo=class{constructor({device:t,attribute:e,timeline:i}){this.buffers=[],this.currentLength=0,this.device=t,this.transition=new We(i),this.attribute=e,this.attributeInTransition=Cg(e),this.currentStartIndices=e.startIndices}get inProgress(){return this.transition.inProgress}start(t,e,i=1/0){this.settings=t,this.currentStartIndices=this.attribute.startIndices,this.currentLength=Ag(this.attribute,e),this.transition.start({...t,duration:i})}update(){const t=this.transition.update();return t&&this.onUpdate(),t}setBuffer(t){const{stride:e}=this.attributeInTransition.getAccessor();this.attributeInTransition.setData({buffer:t,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value,stride:e})}cancel(){this.transition.cancel()}delete(){this.cancel();for(const t of this.buffers)t.destroy();this.buffers.length=0}},Lg=class extends Jo{constructor({device:t,attribute:e,timeline:i}){super({device:t,attribute:e,timeline:i}),this.type="interpolation",this.hasUpdated=!1,this.transform=Rg(t,e)}start(t,e){const i=this.currentLength,n=this.currentStartIndices;if(super.start(t,e,t.duration),t.duration<=0){this.transition.cancel();return}const{buffers:r,attribute:s}=this;this.hasUpdated&&qo(r),this.hasUpdated=!1,r[0]=Ko({device:this.device,buffer:r[0],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:n,getData:t.enter}),r[1]=Xo({device:this.device,source:r[0],target:r[1]}),this.setBuffer(r[1]);const{transform:o}=this,a=o.model;let c=Math.floor(this.currentLength/s.size);ta(s)&&(c/=2),a.setVertexCount(c),s.isConstant?(a.setAttributes({aFrom:r[0]}),a.setConstantAttributes({aTo:s.value})):a.setAttributes({aFrom:r[0],aTo:s.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:r[1]})}onUpdate(){const{duration:t,easing:e}=this.settings,{time:i}=this.transition;let n=i/t;e&&(n=e(n));const{model:r}=this.transform,s={time:n};r.shaderInputs.setProps({interpolation:s}),this.transform.run({discard:!0}),this.hasUpdated=!0}delete(){super.delete(),this.transform.destroy()}},Qo={name:"interpolation",vs:`layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:"f32"}},Ig=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,kg=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function ta(t){return t.isDoublePrecisionBuffer}function Rg(t,e){const i=e.size,n=Ho(i),r=Zo(i),s=e.getBufferLayout();return ta(e)?new li(t,{vs:kg,bufferLayout:[{name:"aFrom",byteStride:8*i,attributes:[{attribute:"aFrom",format:r,byteOffset:0},{attribute:"aFrom64Low",format:r,byteOffset:4*i}]},{name:"aTo",byteStride:8*i,attributes:[{attribute:"aTo",format:r,byteOffset:0},{attribute:"aTo64Low",format:r,byteOffset:4*i}]}],modules:[ju,Qo],defines:{ATTRIBUTE_TYPE:n,ATTRIBUTE_SIZE:i},moduleSettings:{},varyings:["vCurrent","vCurrent64Low"],bufferMode:35980,disableWarnings:!0}):new li(t,{vs:Ig,bufferLayout:[{name:"aFrom",format:r},{name:"aTo",format:s.attributes[0].format}],modules:[Qo],defines:{ATTRIBUTE_TYPE:n},varyings:["vCurrent"],disableWarnings:!0})}var Og=class extends Jo{constructor({device:t,attribute:e,timeline:i}){super({device:t,attribute:e,timeline:i}),this.type="spring",this.texture=Ug(t),this.framebuffer=jg(t,this.texture),this.transform=Ng(t,e)}start(t,e){const i=this.currentLength,n=this.currentStartIndices;super.start(t,e);const{buffers:r,attribute:s}=this;for(let a=0;a<2;a++)r[a]=Ko({device:this.device,buffer:r[a],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:n,getData:t.enter});r[2]=Xo({device:this.device,source:r[0],target:r[2]}),this.setBuffer(r[1]);const{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/s.size)),s.isConstant?o.setConstantAttributes({aTo:s.value}):o.setAttributes({aTo:s.getBuffer()})}onUpdate(){const{buffers:t,transform:e,framebuffer:i,transition:n}=this,r=this.settings;e.model.setAttributes({aPrev:t[0],aCur:t[1]}),e.transformFeedback.setBuffers({vNext:t[2]});const s={stiffness:r.stiffness,damping:r.damping};e.model.shaderInputs.setProps({spring:s}),e.run({framebuffer:i,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),qo(t),this.setBuffer(t[1]),this.device.readPixelsToArrayWebGL(i)[0]>0||n.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}},Dg={name:"spring",vs:`layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:"f32",stiffness:"f32"}},Bg=`#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,zg=`#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`;function Ng(t,e){const i=Ho(e.size),n=Zo(e.size);return new li(t,{vs:Bg,fs:zg,bufferLayout:[{name:"aPrev",format:n},{name:"aCur",format:n},{name:"aTo",format:e.getBufferLayout().attributes[0].format}],varyings:["vNext"],modules:[Dg],defines:{ATTRIBUTE_TYPE:i},parameters:{depthCompare:"always",blendColorOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}})}function Ug(t){return t.createTexture({data:new Uint8Array(4),format:"rgba8unorm",width:1,height:1})}function jg(t,e){return t.createFramebuffer({id:"spring-transition-is-transitioning-framebuffer",width:1,height:1,colorAttachments:[e]})}var Vg={interpolation:Lg,spring:Og},Fg=class{constructor(t,{id:e,timeline:i}){if(!t)throw new Error("AttributeTransitionManager is constructed without device");this.id=e,this.device=t,this.timeline=i,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(const t in this.transitions)this._removeTransition(t)}update({attributes:t,transitions:e,numInstances:i}){this.numInstances=i||1;for(const n in t){const r=t[n],s=r.getTransitionSetting(e);s&&this._updateAttribute(n,r,s)}for(const n in this.transitions){const r=t[n];(!r||!r.getTransitionSetting(e))&&this._removeTransition(n)}}hasAttribute(t){const e=this.transitions[t];return e&&e.inProgress}getAttributes(){const t={};for(const e in this.transitions){const i=this.transitions[e];i.inProgress&&(t[e]=i.attributeInTransition)}return t}run(){if(this.numInstances===0)return!1;for(const e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);const t=this.needsRedraw;return this.needsRedraw=!1,t}_removeTransition(t){this.transitions[t].delete(),delete this.transitions[t]}_updateAttribute(t,e,i){const n=this.transitions[t];let r=!n||n.type!==i.type;if(r){n&&this._removeTransition(t);const s=Vg[i.type];s?this.transitions[t]=new s({attribute:e,timeline:this.timeline,device:this.device}):(L.error(`unsupported transition type '${i.type}'`)(),r=!1)}(r||e.needsRedraw())&&(this.needsRedraw=!0,this.transitions[t].start(i,this.numInstances))}},ea="attributeManager.invalidate",Gg="attributeManager.updateStart",$g="attributeManager.updateEnd",Wg="attribute.updateStart",Yg="attribute.allocate",Hg="attribute.updateEnd",ia=class{constructor(t,{id:e="attribute-manager",stats:i,timeline:n}={}){this.mergeBoundsMemoized=Bt(ld),this.id=e,this.device=t,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=i,this.attributeTransitionManager=new Fg(t,{id:`${e}-transitions`,timeline:n}),this.attributeBufferGroups=t.type==="webgpu"?new Mg(t,{id:e,isTransitionAttribute:r=>this.attributeTransitionManager.hasAttribute(r)}):null,Object.seal(this)}finalize(){this.attributeBufferGroups?.finalize();for(const t in this.attributes)this.attributes[t].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(t={clearRedrawFlags:!1}){const e=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!t.clearRedrawFlags,e&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(t){this._add(t)}addInstanced(t){this._add(t,{stepMode:"instance"})}remove(t){for(const e of t)this.attributes[e]!==void 0&&(this.attributes[e].delete(),delete this.attributes[e])}invalidate(t,e){const i=this._invalidateTrigger(t,e);B(ea,this,t,i)}invalidateAll(t){for(const e in this.attributes)this.attributes[e].setNeedsUpdate(e,t);B(ea,this,"all")}update({data:t,numInstances:e,startIndices:i=null,transitions:n,props:r={},buffers:s={},context:o={}}){let a=!1;B(Gg,this),this.stats&&this.stats.get("Update Attributes").timeStart();for(const c in this.attributes){const l=this.attributes[c],u=l.settings.accessor;l.startIndices=i,l.numInstances=e,r[c]&&L.removed(`props.${c}`,`data.attributes.${c}`)(),l.setExternalBuffer(s[c])||l.setBinaryValue(typeof u=="string"?s[u]:void 0,t.startIndices)||typeof u=="string"&&!s[u]&&l.setConstantValue(o,r[u])||l.needsUpdate()&&(a=!0,this._updateAttribute({attribute:l,numInstances:e,data:t,props:r,context:o})),this.needsRedraw=this.needsRedraw||l.needsRedraw()}a&&B($g,this,e),this.stats&&(this.stats.get("Update Attributes").timeEnd(),a&&this.stats.get("Attributes updated").incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:e,transitions:n})}updateTransition(){const{attributeTransitionManager:t}=this,e=t.run();return this.needsRedraw=this.needsRedraw||e,e}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(t){const e=t.map(i=>this.attributes[i]?.getBounds());return this.mergeBoundsMemoized(e)}getChangedAttributes(t={clearChangedFlags:!1}){const{attributes:e,attributeTransitionManager:i}=this,n={...i.getAttributes()};for(const r in e){const s=e[r];s.needsRedraw(t)&&!i.hasAttribute(r)&&(n[r]=s)}return n}getBufferLayouts(t){return this.hasBufferGroups()?this.attributeBufferGroups.getBufferLayouts(this.getAttributes(),t):Object.values(this.getAttributes()).map(e=>e.getBufferLayout(t))}hasBufferGroups(){return!!this.attributeBufferGroups?.hasGroups(this.attributes)}getBufferGroupBindings(t,e,i={}){return this.attributeBufferGroups?this.attributeBufferGroups.getBindings(this.getAttributes(),t,e,i):{bufferLayouts:this.getBufferLayouts(e),buffers:{},groupedAttributeIds:new Set}}_add(t,e){for(const i in t){const n=t[i],r={...n,id:i,size:n.isIndexed&&1||n.size||1,...e};this.attributes[i]=new gn(this.device,r)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){const t={};for(const e in this.attributes)this.attributes[e].getUpdateTriggers().forEach(i=>{t[i]||(t[i]=[]),t[i].push(e)});this.updateTriggers=t}_invalidateTrigger(t,e){const{attributes:i,updateTriggers:n}=this,r=n[t];return r&&r.forEach(s=>{const o=i[s];o&&o.setNeedsUpdate(o.id,e)}),r}_updateAttribute(t){const{attribute:e,numInstances:i}=t;if(B(Wg,e),e.constant){e.setConstantValue(t.context,e.value);return}e.allocate(i)&&B(Yg,e,i),e.updateBuffer(t)&&(this.needsRedraw=!0,B(Hg,e,i))}},Zg=class extends We{get value(){return this._value}_onUpdate(){const{time:t,settings:{fromValue:e,toValue:i,duration:n,easing:r}}=this,s=r(t/n);this._value=ve(e,i,s)}},na=1e-5;function ra(t,e,i,n,r){const s=e-t;return(i-e)*r+-s*n+s+e}function qg(t,e,i,n,r){if(Array.isArray(i)){const s=[];for(let o=0;o<i.length;o++)s[o]=ra(t[o],e[o],i[o],n,r);return s}return ra(t,e,i,n,r)}function sa(t,e){if(Array.isArray(t)){let i=0;for(let n=0;n<t.length;n++){const r=t[n]-e[n];i+=r*r}return Math.sqrt(i)}return Math.abs(t-e)}var Xg=class extends We{get value(){return this._currValue}_onUpdate(){const{fromValue:t,toValue:e,damping:i,stiffness:n}=this.settings,{_prevValue:r=t,_currValue:s=t}=this;let o=qg(r,s,e,i,n);const a=sa(o,e),c=sa(o,s);a<na&&c<na&&(o=e,this.end()),this._prevValue=s,this._currValue=o}},Kg={interpolation:Zg,spring:Xg},Jg=class{constructor(t){this.transitions=new Map,this.timeline=t}get active(){return this.transitions.size>0}add(t,e,i,n){const{transitions:r}=this;if(r.has(t)){const a=r.get(t),{value:c=a.settings.fromValue}=a;e=c,this.remove(t)}if(n=Fo(n),!n)return;const s=Kg[n.type];if(!s){L.error(`unsupported transition type '${n.type}'`)();return}const o=new s(this.timeline);o.start({...n,fromValue:e,toValue:i}),r.set(t,o)}remove(t){const{transitions:e}=this;e.has(t)&&(e.get(t).cancel(),e.delete(t))}update(){const t={};for(const[e,i]of this.transitions)i.update(),t[e]=i.value,i.inProgress||this.remove(e);return t}clear(){for(const t of this.transitions.keys())this.remove(t)}};function Qg(t){const e=t[mt];for(const i in e){const n=e[i],{validate:r}=n;if(r&&!r(t[i],n))throw new Error(`Invalid prop ${i}: ${t[i]}`)}}function tm(t,e){const i=Pn({newProps:t,oldProps:e,propTypes:t[mt],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),n=im(t,e);let r=!1;return n||(r=nm(t,e)),{dataChanged:n,propsChanged:i,updateTriggersChanged:r,extensionsChanged:rm(t,e),transitionsChanged:em(t,e)}}function em(t,e){if(!t.transitions)return!1;const i={},n=t[mt];let r=!1;for(const s in t.transitions){const o=n[s],a=o&&o.type;(a==="number"||a==="color"||a==="array")&&En(t[s],e[s],o)&&(i[s]=!0,r=!0)}return r?i:!1}function Pn({newProps:t,oldProps:e,ignoreProps:i={},propTypes:n={},triggerName:r="props"}){if(e===t)return!1;if(typeof t!="object"||t===null)return`${r} changed shallowly`;if(typeof e!="object"||e===null)return`${r} changed shallowly`;for(const s of Object.keys(t))if(!(s in i)){if(!(s in e))return`${r}.${s} added`;const o=En(t[s],e[s],n[s]);if(o)return`${r}.${s} ${o}`}for(const s of Object.keys(e))if(!(s in i)){if(!(s in t))return`${r}.${s} dropped`;if(!Object.hasOwnProperty.call(t,s)){const o=En(t[s],e[s],n[s]);if(o)return`${r}.${s} ${o}`}}return!1}function En(t,e,i){let n=i&&i.equal;return n&&!n(t,e,i)||!n&&(n=t&&e&&t.equals,n&&!n.call(t,e))?"changed deeply":!n&&e!==t?"changed shallowly":null}function im(t,e){if(e===null)return"oldProps is null, initial diff";let i=!1;const{dataComparator:n,_dataDiff:r}=t;return n?n(t.data,e.data)||(i="Data comparator detected a change"):t.data!==e.data&&(i="A new data container was supplied"),i&&r&&(i=r(t.data,e.data)||i),i}function nm(t,e){if(e===null)return{all:!0};if("all"in t.updateTriggers&&oa(t,e,"all"))return{all:!0};const i={};let n=!1;for(const r in t.updateTriggers)r!=="all"&&oa(t,e,r)&&(i[r]=!0,n=!0);return n?i:!1}function rm(t,e){if(e===null)return!0;const i=e.extensions,{extensions:n}=t;if(n===i)return!1;if(!i||!n||n.length!==i.length)return!0;for(let r=0;r<n.length;r++)if(!n[r].equals(i[r]))return!0;return!1}function oa(t,e,i){let n=t.updateTriggers[i];n=n??{};let r=e.updateTriggers[i];return r=r??{},Pn({oldProps:r,newProps:n,triggerName:i})}var sm="count(): argument not an object",om="count(): argument not a container";function aa(t){if(!cm(t))throw new Error(sm);if(typeof t.count=="function")return t.count();if(Number.isFinite(t.size))return t.size;if(Number.isFinite(t.length))return t.length;if(am(t))return Object.keys(t).length;throw new Error(om)}function am(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function cm(t){return t!==null&&typeof t=="object"}function Sn(t,e){if(!e)return t;const i={...t,...e};if("defines"in e&&(i.defines={...t.defines,...e.defines}),"modules"in e&&(i.modules=(t.modules||[]).concat(e.modules),e.modules.some(n=>n.name==="project64"))){const n=i.modules.findIndex(r=>r.name==="project32");n>=0&&i.modules.splice(n,1)}if("inject"in e)if(!t.inject)i.inject=e.inject;else{const n={...t.inject};for(const r in e.inject)n[r]=(n[r]||"")+e.inject[r];i.inject=n}return i}var lm={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},xn={};function um(t,e,i,n){if(i instanceof kt)return i;i.constructor&&i.constructor.name!=="Object"&&(i={data:i});let r=null;i.compressed&&(r={minFilter:"linear",mipmapFilter:i.data.length>1?"nearest":"linear"});const{width:s,height:o}=i.data,a=e.createTexture({...i,sampler:{...lm,...r,...n},mipLevels:e.getMipLevelCount(s,o)});return e.type==="webgl"?a.generateMipmapsWebGL():e.type==="webgpu"&&e.generateMipmapsWebGPU(a),xn[a.id]=t,a}function hm(t,e){!e||!(e instanceof kt)||xn[e.id]===t&&(e.delete(),delete xn[e.id])}var fm={boolean:{validate(t,e){return!0},equal(t,e,i){return!!t==!!e}},number:{validate(t,e){return Number.isFinite(t)&&(!("max"in e)||t<=e.max)&&(!("min"in e)||t>=e.min)}},color:{validate(t,e){return e.optional&&!t||Mn(t)&&(t.length===3||t.length===4)},equal(t,e,i){return z(t,e,1)}},accessor:{validate(t,e){const i=ti(t);return i==="function"||i===ti(e.value)},equal(t,e,i){return typeof e=="function"?!0:z(t,e,1)}},array:{validate(t,e){return e.optional&&!t||Mn(t)},equal(t,e,i){const{compare:n}=i;return n?z(t,e,Number.isInteger(n)?n:n?1:0):t===e}},object:{equal(t,e,i){if(i.ignore)return!0;const{compare:n}=i;return n?z(t,e,Number.isInteger(n)?n:n?1:0):t===e}},function:{validate(t,e){return e.optional&&!t||typeof t=="function"},equal(t,e,i){return!i.compare&&i.ignore!==!1||t===e}},data:{transform:(t,e,i)=>{if(!t)return t;const{dataTransform:n}=i.props;return n?n(t):typeof t.shape=="string"&&t.shape.endsWith("-table")&&Array.isArray(t.data)?t.data:t}},image:{transform:(t,e,i)=>{const n=i.context;return!n||!n.device?null:um(i.id,n.device,t,{...e.parameters,...i.props.textureParameters})},release:(t,e,i)=>{hm(i.id,t)}}};function dm(t){const e={},i={},n={};for(const[r,s]of Object.entries(t)){const o=s?.deprecatedFor;if(o)n[r]=Array.isArray(o)?o:[o];else{const a=pm(r,s);e[r]=a,i[r]=a.value}}return{propTypes:e,defaultProps:i,deprecatedProps:n}}function pm(t,e){switch(ti(e)){case"object":return de(t,e);case"array":return de(t,{type:"array",value:e,compare:!1});case"boolean":return de(t,{type:"boolean",value:e});case"number":return de(t,{type:"number",value:e});case"function":return de(t,{type:"function",value:e,compare:!0});default:return{name:t,type:"unknown",value:e}}}function de(t,e){return"type"in e?{name:t,...fm[e.type],...e}:"value"in e?{name:t,type:ti(e.value),...e}:{name:t,type:"object",value:e}}function Mn(t){return Array.isArray(t)||ArrayBuffer.isView(t)}function ti(t){return Mn(t)?"array":t===null?"null":typeof t}function gm(t,e){let i;for(let s=e.length-1;s>=0;s--){const o=e[s];"extensions"in o&&(i=o.extensions)}const n=Tn(t.constructor,i),r=Object.create(n);r[Ge]=t,r[Tt]={},r[_t]={};for(let s=0;s<e.length;++s){const o=e[s];for(const a in o)r[a]=o[a]}return Object.freeze(r),r}var mm="_mergedDefaultProps";function Tn(t,e){if(!(t instanceof pe.constructor))return{};let i=mm;if(e)for(const r of e){const s=r.constructor;s&&(i+=`:${s.extensionName||s.name}`)}const n=ca(t,i);return n||(t[i]=_m(t,e||[]))}function _m(t,e){if(!t.prototype)return null;const i=Tn(Object.getPrototypeOf(t)),n=dm(ca(t,"defaultProps")||{}),r=Object.assign(Object.create(null),i,n.defaultProps),s=Object.assign(Object.create(null),i?.[mt],n.propTypes),o=Object.assign(Object.create(null),i?.[nn],n.deprecatedProps);for(const a of e){const c=Tn(a.constructor);c&&(Object.assign(r,c),Object.assign(s,c[mt]),Object.assign(o,c[nn]))}return vm(r,t),bm(r,s),ym(r,o),r[mt]=s,r[nn]=o,e.length===0&&!Cn(t,"_propTypes")&&(t._propTypes=s),r}function vm(t,e){const i=Pm(e);Object.defineProperties(t,{id:{writable:!0,value:i}})}function ym(t,e){for(const i in e)Object.defineProperty(t,i,{enumerable:!1,set(n){const r=`${this.id}: ${i}`;for(const s of e[i])Cn(this,s)||(this[s]=n);L.deprecated(r,e[i].join("/"))()}})}function bm(t,e){const i={},n={};for(const r in e){const s=e[r],{name:o,value:a}=s;s.async&&(i[o]=a,n[o]=wm(o))}t[Gt]=i,t[Tt]={},Object.defineProperties(t,n)}function wm(t){return{enumerable:!0,set(e){typeof e=="string"||e instanceof Promise||jo(e)?this[Tt][t]=e:this[_t][t]=e},get(){if(this[_t]){if(t in this[_t])return this[_t][t]||this[Gt][t];if(t in this[Tt]){const e=this[Ge]&&this[Ge].internalState;if(e&&e.hasAsyncProp(t))return e.getAsyncProp(t)||this[Gt][t]}}return this[Gt][t]}}}function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ca(t,e){return Cn(t,e)&&t[e]}function Pm(t){const e=t.componentName;return e||L.warn(`${t.name}.componentName not specified`)(),e||t.name}var Em=0,pe=class{constructor(...t){this.props=gm(this,t),this.id=this.props.id,this.count=Em++}clone(t){const{props:e}=this,i={};for(const n in e[Gt])n in e[_t]?i[n]=e[_t][n]:n in e[Tt]&&(i[n]=e[Tt][n]);return new this.constructor({...e,...i,...t})}};pe.componentName="Component",pe.defaultProps={};var Sm=Object.freeze({}),la=class{constructor(t){this.component=t,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(const t in this.asyncProps){const e=this.asyncProps[t];e&&e.type&&e.type.release&&e.type.release(e.resolvedValue,e.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||Sm}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(t){return t in this.asyncProps}getAsyncProp(t){const e=this.asyncProps[t];return e&&e.resolvedValue}isAsyncPropLoading(t){if(t){const e=this.asyncProps[t];return!!(e&&e.pendingLoadCount>0&&e.pendingLoadCount!==e.resolvedLoadCount)}for(const e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(t,e){this._watchPromise(t,Promise.resolve(e))}setAsyncProps(t){this.component=t[Ge]||this.component;const e=t[_t]||{},i=t[Tt]||t,n=t[Gt]||{};for(const r in e){const s=e[r];this._createAsyncPropData(r,n[r]),this._updateAsyncProp(r,s),e[r]=this.getAsyncProp(r)}for(const r in i){const s=i[r];this._createAsyncPropData(r,n[r]),this._updateAsyncProp(r,s)}}_fetch(t,e){return null}_onResolve(t,e){}_onError(t,e){}_updateAsyncProp(t,e){if(this._didAsyncInputValueChange(t,e)){if(typeof e=="string"&&(e=this._fetch(t,e)),e instanceof Promise){this._watchPromise(t,e);return}if(jo(e)){this._resolveAsyncIterable(t,e);return}this._setPropValue(t,e)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps){this.oldAsyncProps=Object.create(this.oldProps);for(const t in this.asyncProps)Object.defineProperty(this.oldAsyncProps,t,{enumerable:!0,value:this.oldProps[t]})}}_didAsyncInputValueChange(t,e){const i=this.asyncProps[t];return e===i.resolvedValue||e===i.lastValue?!1:(i.lastValue=e,!0)}_setPropValue(t,e){this._freezeAsyncOldProps();const i=this.asyncProps[t];i&&(e=this._postProcessValue(i,e),i.resolvedValue=e,i.pendingLoadCount++,i.resolvedLoadCount=i.pendingLoadCount)}_setAsyncPropValue(t,e,i){const n=this.asyncProps[t];n&&i>=n.resolvedLoadCount&&e!==void 0&&(this._freezeAsyncOldProps(),n.resolvedValue=e,n.resolvedLoadCount=i,this.onAsyncPropUpdated(t,e))}_watchPromise(t,e){const i=this.asyncProps[t];if(i){i.pendingLoadCount++;const n=i.pendingLoadCount;e.then(r=>{this.component&&(r=this._postProcessValue(i,r),this._setAsyncPropValue(t,r,n),this._onResolve(t,r))}).catch(r=>{this._onError(t,r)})}}async _resolveAsyncIterable(t,e){if(t!=="data"){this._setPropValue(t,e);return}const i=this.asyncProps[t];if(!i)return;i.pendingLoadCount++;const n=i.pendingLoadCount;let r=[],s=0;for await(const o of e){if(!this.component)return;const{dataTransform:a}=this.component.props;a?r=a(o,r):r=r.concat(o),Object.defineProperty(r,"__diff",{enumerable:!1,value:[{startRow:s,endRow:r.length}]}),s=r.length,this._setAsyncPropValue(t,r,n)}this._onResolve(t,r)}_postProcessValue(t,e){const i=t.type;return i&&this.component&&(i.release&&i.release(t.resolvedValue,i,this.component),i.transform)?i.transform(e,i,this.component):e}_createAsyncPropData(t,e){if(!this.asyncProps[t]){const i=this.component&&this.component.props[mt];this.asyncProps[t]={type:i&&i[t],lastValue:null,resolvedValue:e,pendingLoadCount:0,resolvedLoadCount:0}}}},xm=class extends la{constructor({attributeManager:t,layer:e}){super(e),this.attributeManager=t,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1,this.disabledPickingIndices=[]}get layer(){return this.component}_fetch(t,e){const i=this.layer,n=i?.props.fetch;return n?n(e,{propName:t,layer:i}):super._fetch(t,e)}_onResolve(t,e){const i=this.layer;if(i){const n=i.props.onDataLoad;t==="data"&&n&&n(e,{propName:t,layer:i})}}_onError(t,e){const i=this.layer;i&&i.raiseError(e,`loading ${t} of ${this.layer}`)}},Mm="layer.changeFlag",Tm="layer.initialize",Cm="layer.update",Am="layer.finalize",Lm="layer.matched",ua=2**24-1,Im=Object.freeze([]),km=Bt(({oldViewport:t,viewport:e})=>t.equals(e)),q=new Uint8ClampedArray(0);function ha(t){return t.rowIndexes||t.pickingColors||t.instancePickingColors}function An(t){return t.rowIndexes}function Ln(t){return t.pickingColors||t.instancePickingColors}var Rm={data:{type:"data",value:Im,async:!0},dataComparator:{type:"function",value:null,optional:!0},_dataDiff:{type:"function",value:t=>t&&t.__diff,optional:!0},dataTransform:{type:"function",value:null,optional:!0},onDataLoad:{type:"function",value:null,optional:!0},onError:{type:"function",value:null,optional:!0},fetch:{type:"function",value:(t,{propName:e,layer:i,loaders:n,loadOptions:r,signal:s})=>{const{resourceManager:o}=i.context;r=r||i.getLoadOptions(),n=n||i.props.loaders,s&&(r={...r,core:{...r?.core,fetch:{...r?.core?.fetch,signal:s}}});let a=o.contains(t);return!a&&!r&&(o.add({resourceId:t,data:xe(t,n),persistent:!1}),a=!0),a?o.subscribe({resourceId:t,onChange:c=>i.internalState?.reloadAsyncProp(e,c),consumerId:i.id,requestId:e}):xe(t,n,r)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:"number",min:0,max:1,value:1},operation:"draw",onHover:{type:"function",value:null,optional:!0},onClick:{type:"function",value:null,optional:!0},onDragStart:{type:"function",value:null,optional:!0},onDrag:{type:"function",value:null,optional:!0},onDragEnd:{type:"function",value:null,optional:!0},coordinateSystem:"default",coordinateOrigin:{type:"array",value:[0,0,0],compare:!0},modelMatrix:{type:"array",value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:"XYZ",colorFormat:"RGBA",parameters:{type:"object",value:{},optional:!0,compare:2},loadOptions:{type:"object",value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:"array",value:[],optional:!0,ignore:!0},getPolygonOffset:{type:"function",value:({layerIndex:t})=>[0,-t*100]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:"accessor",value:[0,0,128,128]}},ei=class extends pe{constructor(){super(...arguments),this.internalState=null,this.lifecycle=Ft.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,"layerName")?this.layerName:""}get root(){let t=this;for(;t.parent;)t=t.parent;return t}toString(){return`${this.constructor.layerName||this.constructor.name}({id: '${this.props.id}'})`}project(t){I(this.internalState);const e=this.internalState.viewport||this.context.viewport,[i,n,r]=qi(tn(t,{viewport:e,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),e.pixelProjectionMatrix);return t.length===2?[i,n]:[i,n,r]}unproject(t){return I(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(t)}projectPosition(t,e){return I(this.internalState),uo(t,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...e})}get isComposite(){return!1}get isDrawable(){return!0}setState(t){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,t),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return this.internalState?!this.internalState.isAsyncPropLoading():!1}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){const t=this.state;return t&&(t.models||t.model&&[t.model])||[]}setShaderModuleProps(...t){for(const e of this.getModels())e.shaderInputs.setProps(...t)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){const{coordinateSystem:t}=this.props;return t==="default"||t==="lnglat"||t==="cartesian"}onHover(t,e){return this.props.onHover&&this.props.onHover(t,e)||!1}onClick(t,e){return this.props.onClick&&this.props.onClick(t,e)||!1}nullPickingColor(){return[0,0,0]}encodePickingColor(t,e=[]){return e[0]=t+1&255,e[1]=t+1>>8&255,e[2]=t+1>>8>>8&255,e}decodePickingColor(t){I(t instanceof Uint8Array);const[e,i,n]=t;return e+i*256+n*65536-1}getNumInstances(){return Number.isFinite(this.props.numInstances)?this.props.numInstances:this.state&&this.state.numInstances!==void 0?this.state.numInstances:aa(this.props.data)}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds(["positions","instancePositions"])}getShaders(t){t=Sn(t,{disableWarnings:!0,modules:this.context.defaultShaderModules});for(const e of this.props.extensions)t=Sn(t,e.getShaders.call(this,e));return t}shouldUpdateState(t){return t.changeFlags.propsOrDataChanged}updateState(t){const e=this.getAttributeManager(),{dataChanged:i}=t.changeFlags;if(i&&e)if(Array.isArray(i))for(const n of i)e.invalidateAll(n);else e.invalidateAll();if(e){const{props:n}=t,r=this.internalState.hasPickingBuffer,s=Number.isInteger(n.highlightedObjectIndex)||!!n.pickable||n.extensions.some(o=>o.getNeedsPickingBuffer.call(this,o));if(r!==s){this.internalState.hasPickingBuffer=s;const o=ha(e.attributes);o&&(s&&o.constant&&(o.constant=!1,e.invalidate(o.id)),!o.value&&!s&&(o.constant=!0,o.value=An(e.attributes)?[Ne]:[0,0,0]))}}}finalizeState(t){for(const i of this.getModels())i.destroy();const e=this.getAttributeManager();e&&e.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(t){for(const e of this.getModels())e.draw(t.renderPass)}getPickingInfo({info:t,mode:e,sourceLayer:i}){const{index:n}=t;return n>=0&&Array.isArray(this.props.data)&&(t.object=this.props.data[n]),t}raiseError(t,e){e&&(t=new Error(`${e}: ${t.message}`,{cause:t})),this.props.onError?.(t)||this.context?.onError?.(t,this)}getNeedsRedraw(t={clearRedrawFlags:!1}){return this._getNeedsRedraw(t)}needsUpdate(){return this.internalState?this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()):!1}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(t){if(!this.internalState)return;const e=this.internalState.viewport;this.internalState.viewport=t,(!e||!km({oldViewport:e,viewport:t}))&&(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(t="all"){const e=this.getAttributeManager();e&&(t==="all"?e.invalidateAll():e.invalidate(t))}updateAttributes(t){let e=!1;for(const i in t)t[i].layoutChanged()&&(e=!0);for(const i of this.getModels())this._setModelAttributes(i,t,e)}_updateAttributes(){const t=this.getAttributeManager();if(!t)return;const e=this.props,i=this.getNumInstances(),n=this.getStartIndices();t.update({data:e.data,numInstances:i,startIndices:n,props:e,transitions:e.transitions,buffers:e.data.attributes,context:this});const r=t.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(r)}_updateAttributeTransition(){const t=this.getAttributeManager();t&&t.updateTransition()}_updateUniformTransition(){const{uniformTransitions:t}=this.internalState;if(t.active){const e=t.update(),i=Object.create(this.props);for(const n in e)Object.defineProperty(i,n,{value:e[n]});return i}return this.props}calculateInstancePickingColors(t,{numInstances:e}){if(t.constant)return;const i=Math.floor(q.length/4);this.internalState.usesPickingColorCache=!0;const n=e>0&&q[0]===0;if(i<e||n){e>ua&&L.warn("Layer has too many data objects. Picking might not be able to distinguish all objects.")(),q=jt.allocate(q,e,{size:4,copy:!0,maxCount:Math.max(e,ua)});const r=Math.floor(q.length/4),s=[0,0,0],o=n?0:i;for(let a=o;a<r;a++)this.encodePickingColor(a,s),q[a*4+0]=s[0],q[a*4+1]=s[1],q[a*4+2]=s[2],q[a*4+3]=0}t.value=q.subarray(0,e*4)}_setModelAttributes(t,e,i=!1){if(!Object.keys(e).length)return;const n=this.getAttributeManager();if(n?.hasBufferGroups()){this._setGroupedModelAttributes(t,n,e);return}if(i){const a=this.getAttributeManager();t.setBufferLayout(a.getBufferLayouts(t)),e=a.getAttributes()}const r=t.userData?.excludeAttributes||{},s={},o={};for(const a in e){if(r[a])continue;const c=e[a].getValue();for(const l in c){const u=c[l];u instanceof G?e[a].settings.isIndexed?t.setIndexBuffer(u):s[l]=u:u&&(o[l]=u)}}t.setAttributes(s),t.setConstantAttributes(o)}_setGroupedModelAttributes(t,e,i){const n=t.userData?.excludeAttributes||{},r=e.getBufferGroupBindings(i,t,n);t.setBufferLayout(r.bufferLayouts);const s={...r.buffers},o={},a=e.getAttributes();for(const c in a){if(n[c]||r.groupedAttributeIds.has(c))continue;const l=a[c],u=l.getValue();for(const h in u){const f=u[h];f instanceof G?l.settings.isIndexed?t.setIndexBuffer(f):s[h]=f:f&&(o[h]=f)}}t.setAttributes(s),t.setConstantAttributes(o)}disablePickingIndex(t){const e=this.props.data;if(!("attributes"in e)){this._disablePickingIndex(t);return}const i=this.getAttributeManager().attributes,n=An(i),r=Ln(i),s=n&&e.attributes&&e.attributes[n.id];if(s&&s.value){const a=s.value;for(let c=0;c<e.length;c++)a[n.getVertexOffset(c)]===t&&this._disablePickingIndex(c);return}const o=r&&e.attributes&&e.attributes[r.id];if(o&&o.value){const a=o.value,c=this.encodePickingColor(t);for(let l=0;l<e.length;l++){const u=r.getVertexOffset(l);a[u]===c[0]&&a[u+1]===c[1]&&a[u+2]===c[2]&&this._disablePickingIndex(l)}}else this._disablePickingIndex(t)}_disablePickingIndex(t){const e=this.getAttributeManager().attributes,i=An(e);if(i){const o=i.getVertexOffset(t),a=i.getVertexOffset(t+1),c=new Uint32Array(a-o);c.fill(Ne),i.buffer.write(c,o*c.BYTES_PER_ELEMENT);return}const n=Ln(e);if(!n){this.internalState&&Uf(this.internalState.disabledPickingIndices,t);return}const r=n.getVertexOffset(t),s=n.getVertexOffset(t+1);n.buffer.write(new Uint8Array(s-r),r)}restorePickingColors(){const t=this.getAttributeManager().attributes,e=ha(t);if(!e){this.internalState&&(this.internalState.disabledPickingIndices.length=0);return}const i=Ln(t);this.internalState.usesPickingColorCache&&i&&i.value.buffer!==q.buffer&&(i.value=q.subarray(0,i.value.length)),e.updateSubBuffer({startOffset:0})}_initialize(){I(!this.internalState),B(Tm,this);const t=this._getAttributeManager();this.internalState=new xm({attributeManager:t,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(L.deprecated("layer.state.attributeManager","layer.getAttributeManager()")(),t)}),this.internalState.uniformTransitions=new Jg(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context);for(const e of this.props.extensions)e.initializeState.call(this,this.context,e);this.setChangeFlags({dataChanged:"init",propsChanged:"init",viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(t){B(Lm,this,this===t);const{state:e,internalState:i}=t;this!==t&&(this.internalState=i,this.state=e,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){const t=this.needsUpdate();if(B(Cm,this,t),!t)return;this.context.stats.get("Layer updates").incrementCount();const e=this.props,i=this.context,n=this.internalState,r=i.viewport,s=this._updateUniformTransition();n.propsInTransition=s,i.viewport=n.viewport||r,this.props=s;try{const o=this._getUpdateParams(),a=this.getModels();if(i.device)this.updateState(o);else try{this.updateState(o)}catch{}for(const l of this.props.extensions)l.updateState.call(this,o,l);this.setNeedsRedraw(),this._updateAttributes();const c=this.getModels()[0]!==a[0];this._postUpdate(o,c)}finally{i.viewport=r,this.props=e,this._clearChangeFlags(),n.needsUpdate=!1,n.resetOldProps()}}_finalize(){B(Am,this),this.finalizeState(this.context);for(const t of this.props.extensions)t.finalizeState.call(this,this.context,t)}_drawLayer({renderPass:t,shaderModuleProps:e=null,uniforms:i={},parameters:n={}}){this._updateAttributeTransition();const r=this.props,s=this.context;this.props=this.internalState.propsInTransition||r;try{e&&this.setShaderModuleProps(e);const{getPolygonOffset:o}=this.props,a=o&&o(i)||[0,0];s.device instanceof ai&&s.device.setParametersWebGL({polygonOffset:a});const c=s.device instanceof ai?null:Om(n);if(Dm(this.getModels(),t,n,c),s.device instanceof ai)s.device.withParametersWebGL(n,()=>{const l={renderPass:t,shaderModuleProps:e,uniforms:i,parameters:n,context:s};for(const u of this.props.extensions)u.draw.call(this,l,u);this.draw(l)});else{c?.renderPassParameters&&t.setParameters(c.renderPassParameters);const l={renderPass:t,shaderModuleProps:e,uniforms:i,parameters:n,context:s};for(const u of this.props.extensions)u.draw.call(this,l,u);this.draw(l)}}finally{this.props=r}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(t){if(!this.internalState)return;const{changeFlags:e}=this.internalState;for(const n in t)if(t[n]){let r=!1;switch(n){case"dataChanged":const s=t[n],o=e[n];s&&Array.isArray(o)&&(e.dataChanged=Array.isArray(s)?o.concat(s):s,r=!0);default:e[n]||(e[n]=t[n],r=!0)}r&&B(Mm,this,n,t)}const i=!!(e.dataChanged||e.updateTriggersChanged||e.propsChanged||e.extensionsChanged);e.propsOrDataChanged=i,e.somethingChanged=i||e.viewportChanged||e.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(t,e){const i=tm(t,e);if(i.updateTriggersChanged)for(const n in i.updateTriggersChanged)i.updateTriggersChanged[n]&&this.invalidateAttribute(n);if(i.transitionsChanged)for(const n in i.transitionsChanged)this.internalState.uniformTransitions.add(n,e[n],t[n],t.transitions?.[n]);return this.setChangeFlags(i)}validateProps(){Qg(this.props)}updateAutoHighlight(t){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(t)}_updateAutoHighlight(t){const e={highlightedObjectColor:t.picked?t.color:null},{highlightColor:i}=this.props;t.picked&&typeof i=="function"&&(e.highlightColor=i(t)),this.setShaderModuleProps({picking:e}),this.setNeedsRedraw()}_getAttributeManager(){const t=this.context;return new ia(t.device,{id:this.props.id,stats:t.stats,timeline:t.timeline})}_postUpdate(t,e){const{props:i,oldProps:n}=t,r=this.state.model;r?.isInstanced&&r.setInstanceCount(this.getNumInstances());const{autoHighlight:s,highlightedObjectIndex:o,highlightColor:a}=i;if(e||n.autoHighlight!==s||n.highlightedObjectIndex!==o||n.highlightColor!==a){const c={};Array.isArray(a)&&(c.highlightColor=a),(e||n.autoHighlight!==s||o!==n.highlightedObjectIndex)&&(c.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:c})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(t){if(!this.internalState)return!1;let e=!1;e=e||this.internalState.needsRedraw&&this.id;const i=this.getAttributeManager(),n=i?i.getNeedsRedraw(t):!1;if(e=e||n,e)for(const r of this.props.extensions)r.onNeedsRedraw.call(this,r);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!t.clearRedrawFlags,e}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}};ei.defaultProps=Rm,ei.layerName="Layer";function Om(t){const{blendConstant:e,...i}=t;return e?{pipelineParameters:i,renderPassParameters:{blendConstant:e}}:{pipelineParameters:i}}function Dm(t,e,i,n){for(const r of t)r.device.type==="webgpu"?(Bm(r,e),r.setParameters({...r.parameters,...n?.pipelineParameters})):r.setParameters(i)}function Bm(t,e){const i=e.props.framebuffer||(e.framebuffer??null);if(!i)return;const n=i.colorAttachments.map(o=>o?.texture?.format??null),r=i.depthStencilAttachment?.texture?.format,s=t;(!zm(s.props.colorAttachmentFormats,n)||s.props.depthStencilAttachmentFormat!==r)&&(s.props.colorAttachmentFormats=n,s.props.depthStencilAttachmentFormat=r,s._setPipelineNeedsUpdate("attachment formats"))}function zm(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}var Nm="compositeLayer.renderLayers",fa=class extends ei{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(t=>t.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(t){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo({info:t}){const{object:e}=t;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id&&(t.object=e.__source.object,t.index=e.__source.index),t}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){return e&&e.length}getSubLayerClass(t,e){const{_subLayerProps:i}=this.props;return i&&i[t]&&i[t].type||e}getSubLayerRow(t,e,i){return t.__source={parent:this,object:e,index:i},t}getSubLayerAccessor(t){if(typeof t=="function"){const e={index:-1,data:this.props.data,target:[]};return(i,n)=>i&&i.__source?(e.index=i.__source.index,t(i.__source.object,e)):t(i,n)}return t}getSubLayerProps(t={}){const{opacity:e,pickable:i,visible:n,parameters:r,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:h,positionFormat:f,modelMatrix:d,extensions:p,fetch:g,operation:m,_subLayerProps:_}=this.props,v={id:"",updateTriggers:{},opacity:e,pickable:i,visible:n,parameters:r,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:h,positionFormat:f,modelMatrix:d,extensions:p,fetch:g,operation:m},y=_&&t.id&&_[t.id],b=y&&y.updateTriggers,P=t.id||"sublayer";if(y){const E=this.props[mt],x=t.type?t.type._propTypes:{};for(const M in y){const S=x[M]||E[M];S&&S.type==="accessor"&&(y[M]=this.getSubLayerAccessor(y[M]))}}Object.assign(v,t,y),v.id=`${this.props.id}-${P}`,v.updateTriggers={all:this.props.updateTriggers?.all,...t.updateTriggers,...b};for(const E of p){const x=E.getSubLayerProps.call(this,E);x&&Object.assign(v,x,{updateTriggers:Object.assign(v.updateTriggers,x.updateTriggers)})}return v}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_postUpdate(t,e){let i=this.internalState.subLayers;const n=!i||this.needsUpdate();n&&(i=$e(this.renderLayers(),Boolean),this.internalState.subLayers=i),B(Nm,this,n,i);for(const r of i)r.parent=this}};fa.layerName="CompositeLayer";var Ht=Math.PI/180,da=180/Math.PI,ii=6370972,Um=.75,jm=1.15;function Vm(){const t=256/ii,e=Math.PI/180*256;return{unitsPerMeter:[t,t,t],unitsPerMeter2:[0,0,0],metersPerUnit:[1/t,1/t,1/t],unitsPerDegree:[e,e,t],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/e,1/e,1/t]}}var ni=class extends gt{constructor(t={}){const{longitude:e=0,bearing:i=0,pitch:n=0,zoom:r=0,nearZMultiplier:s=.5,farZMultiplier:o=1,resolution:a=10}=t;let{latitude:c=0,height:l,altitude:u=1.5,fovy:h}=t;c=Math.max(Math.min(c,90),-90),l=l||1,h?u=ze(h):h=oe(u);const f=Math.max(Math.min(c,nt),-nt),d=Math.pow(2,r-D(f)),p=n*Ht,g=t.nearZ??s,m=t.farZ??(u+512*d/l/Math.max(Math.cos(p),.1))*o,_=new j().lookAt({eye:[0,-u,0],up:[0,0,1]}).rotateX(-p).rotateY(-i*Ht).rotateX(c*Ht).rotateZ(-e*Ht).scale(d/l);super({...t,height:l,viewMatrix:_,longitude:e,latitude:c,zoom:r,distanceScales:Vm(),fovy:h,focalDistance:u,near:g,far:m}),this.scale=d,this.latitude=c,this.longitude=e,this.bearing=i,this.pitch=n,this.fovy=h,this.resolution=a}get projectionMode(){return V.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(t={}){const e={targetZ:t.z||0},i=this.unproject([0,this.height/2],e),n=this.unproject([this.width/2,0],e),r=this.unproject([this.width,this.height/2],e),s=this.unproject([this.width/2,this.height],e);return r[0]<this.longitude&&(r[0]+=360),i[0]>this.longitude&&(i[0]-=360),[Math.min(i[0],r[0],n[0],s[0]),Math.min(i[1],r[1],n[1],s[1]),Math.max(i[0],r[0],n[0],s[0]),Math.max(i[1],r[1],n[1],s[1])]}_getRayToGlobe(t,{topLeft:e=!0,targetZ:i}={}){const[n,r]=t,s=e?r:this.height-r,{pixelUnprojectionMatrix:o}=this,a=In(o,[n,s,-1,1]),c=In(o,[n,s,1,1]),l=((i||0)/ii+1)*256,u=hi(Wn([],a,c)),h=hi(a),f=hi(c);return{rayStartPosition:a,rayEndPosition:c,radius:l,rayLengthSquared:u,rayStartDistanceSquared:h,distanceToCenterSquared:4*((4*h*f-(u-h-f)**2)/16)/u}}_getRayDistanceToGlobeCenterRatio(t,e){const{distanceToCenterSquared:i,radius:n}=this._getRayToGlobe(t,e);return Math.sqrt(Math.max(0,i))/n}getZoomAnchorStrength(t){const e=this._getRayDistanceToGlobeCenterRatio(t);return e>jm?0:1-Math.max(0,Math.min(1,(e-Um)/.25))*.65}unproject(t,{topLeft:e=!0,targetZ:i}={}){const[n,r,s]=t,o=e?r:this.height-r,{pixelUnprojectionMatrix:a}=this;let c;if(Number.isFinite(s))c=In(a,[n,o,s,1]);else{const{rayStartPosition:f,rayEndPosition:d,radius:p,rayLengthSquared:g,rayStartDistanceSquared:m,distanceToCenterSquared:_}=this._getRayToGlobe(t,{topLeft:e,targetZ:i}),v=(Math.sqrt(m-_)-Math.sqrt(Math.max(0,p*p-_)))/Math.sqrt(g);c=Xa([],f,d,v)}const[l,u,h]=this.unprojectPosition(c);return Number.isFinite(s)?[l,u,h]:Number.isFinite(i)?[l,u,i]:[l,u]}projectPosition(t){const[e,i,n=0]=t,r=e*Ht,s=i*Ht,o=Math.cos(s),a=(n/ii+1)*256;return[Math.sin(r)*o*a,-Math.cos(r)*o*a,Math.sin(s)*a]}unprojectPosition(t){const[e,i,n]=t,r=$n(t),s=Math.asin(n/r);return[Math.atan2(e,-i)*da,s*da,(r/256-1)*ii]}projectFlat(t){return t}unprojectFlat(t){return t}panByPosition(t,e,i){if(!i){const u=this.getZoomAnchorStrength(e);if(u===0)return{longitude:this.longitude,latitude:this.latitude};const h=this.unproject(e),f=pt(t[0]-h[0]+180,360)-180;return{longitude:this.longitude+f*u,latitude:Math.max(Math.min(this.latitude+(t[1]-h[1])*u,90),-90)}}const[n,r,s]=t,o=.25/Math.pow(2,this.zoom-D(this.latitude)),a=n+o*(i[0]-e[0]);let c=r-o*(i[1]-e[1]);c=Math.max(Math.min(c,90),-90);const l={longitude:a,latitude:c,zoom:s-D(r)};return l.zoom+=D(l.latitude),l}};ni.displayName="GlobeViewport";function D(t,e){e&&(t=Math.max(Math.min(t,nt),-nt));const i=Math.PI*Math.cos(t*Math.PI/180);return Math.log2(i)}function In(t,e){const i=Qt([],e,t);return ui(i,i,1/i[3]),i}var kn=Math.PI/180;function Fm({height:t,focalDistance:e,orbitAxis:i,rotationX:n,rotationOrbit:r,zoom:s}){const o=i==="Z"?[0,0,1]:[0,1,0],a=i==="Z"?[0,-e,0]:[0,0,e],c=new j().lookAt({eye:a,up:o});c.rotateX(n*kn),i==="Z"?c.rotateZ(r*kn):c.rotateY(r*kn);const l=Math.pow(2,s)/t;return c.scale(l),c}var Rn=class extends gt{constructor(t){const{height:e,projectionMatrix:i,fovy:n=50,orbitAxis:r="Z",target:s=[0,0,0],rotationX:o=0,rotationOrbit:a=0,zoom:c=0}=t,l=i?i[5]/2:ze(n);super({...t,longitude:void 0,viewMatrix:Fm({height:e||1,focalDistance:l,orbitAxis:r,rotationX:o,rotationOrbit:a,zoom:c}),fovy:n,focalDistance:l,position:s,zoom:c}),this.target=s,this.orbitAxis=r,this.rotationX=o,this.rotationOrbit=a,this.fovy=n,this.projectedCenter=this.project(this.center)}unproject(t,{topLeft:e=!0}={}){const[i,n,r=this.projectedCenter[2]]=t,[s,o,a]=Ut([i,e?n:this.height-n,r],this.pixelUnprojectionMatrix);return[s,o,a]}panByPosition(t,e,i){const n=this.project(t),{near:r,far:s}=ad(this.projectionMatrix),o=r*s/(s-n[2]*(s-r))/(r*s/(s-this.projectedCenter[2]*(s-r))),a=[this.width/2+(n[0]-e[0])*o,this.height/2+(n[1]-e[1])*o,this.projectedCenter[2]];return{target:this.unproject(a)}}};Rn.displayName="OrbitViewport";var Gm=new j().lookAt({eye:[0,0,1]});function $m({width:t,height:e,near:i,far:n,padding:r}){let s=-t/2,o=t/2,a=-e/2,c=e/2;if(r){const{left:l=0,right:u=0,top:h=0,bottom:f=0}=r,d=T((l+t-u)/2,0,t)-t/2,p=T((h+e-f)/2,0,e)-e/2;s-=d,o-=d,a+=p,c+=p}return new j().ortho({left:s,right:o,bottom:a,top:c,near:i,far:n})}var On=class extends gt{constructor(t){const{width:e,height:i,near:n=.1,far:r=1e3,zoom:s=0,target:o=[0,0,0],padding:a=null,flipY:c=!0}=t,l=t.zoomX??(Array.isArray(s)?s[0]:s),u=t.zoomY??(Array.isArray(s)?s[1]:s),h=Number.isFinite(t.zoom)?t.zoom:Math.min(l,u),f=Math.pow(2,h);let d;if(l!==h||u!==h){const p=Math.pow(2,l),g=Math.pow(2,u);d={unitsPerMeter:[p/f,g/f,1],metersPerUnit:[f/p,f/g,1]}}super({...t,longitude:void 0,position:o,viewMatrix:Gm.clone().scale([f,f*(c?-1:1),f]),projectionMatrix:$m({width:e||1,height:i||1,padding:a,near:n,far:r}),zoom:h,distanceScales:d}),this.target=o,this.zoomX=l,this.zoomY=u,this.flipY=c}projectFlat([t,e]){const{unitsPerMeter:i}=this.distanceScales;return[t*i[0],e*i[1]]}unprojectFlat([t,e]){const{metersPerUnit:i}=this.distanceScales;return[t*i[0],e*i[1]]}panByPosition(t,e,i){const n=Ut(e,this.pixelUnprojectionMatrix),r=this.projectFlat(t),s=ee([],r,Kn([],n)),o=ee([],this.center,s);return{target:this.unprojectFlat(o)}}};On.displayName="OrthographicViewport";var Dn=class extends gt{constructor(t){const{longitude:e,latitude:i,modelMatrix:n,bearing:r=0,pitch:s=0,up:o=[0,0,1]}=t,a=new Ae({bearing:r,pitch:s===-90?1e-4:90+s}).toVector3().normalize(),c=n?new j(n).transformAsVector(a):a,l=Number.isFinite(i)?Ws({latitude:i}):0,u=Math.pow(2,l),h=new j().lookAt({eye:[0,0,0],center:c,up:o}).scale(u);super({...t,zoom:l,viewMatrix:h}),this.latitude=i,this.longitude=e,this.pitch=s,this.bearing=r,this.up=o}};Dn.displayName="FirstPersonViewport";var It=20,pa=500,Wm=class Aa extends Ze{constructor(e){const{width:i,height:n,position:r=[0,0,0],bearing:s=0,pitch:o=0,longitude:a=null,latitude:c=null,maxPitch:l=90,minPitch:u=-90,maxBounds:h=null,maxBoundsPadding:f=null,startRotatePos:d,startBearing:p,startPitch:g,startZoomPosition:m,startPanPos:_,startPanPosition:v}=e;super({width:i,height:n,position:r,bearing:s,pitch:o,longitude:a,latitude:c,maxPitch:l,minPitch:u,maxBounds:h,maxBoundsPadding:f},{startRotatePos:d,startBearing:p,startPitch:g,startZoomPosition:m,startPanPos:_,startPanPosition:v},e.makeViewport)}panStart({pos:e}){const{position:i}=this.getViewportProps();return this._getUpdatedState({startPanPos:e,startPanPosition:i})}pan({pos:e}){if(!e)return this;const{startPanPos:i=[0,0],startPanPosition:n=[0,0]}=this.getState(),{width:r,height:s,bearing:o,pitch:a}=this.getViewportProps(),c=pa*(e[0]-i[0])/r,l=pa*(e[1]-i[1])/s,u=new Ae({bearing:o,pitch:a}),h=new Ae({bearing:o,pitch:-90}),f=u.toVector3().normalize(),d=h.toVector3().cross(f).normalize();return this._getUpdatedState({position:new $(n).add(d.scale(c)).add(f.scale(l))})}panEnd(){return this._getUpdatedState({startPanPos:null,startPanPosition:null})}rotateStart({pos:e}){return this._getUpdatedState({startRotatePos:e,startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:i=0,deltaAngleY:n=0}){const{startRotatePos:r,startBearing:s,startPitch:o}=this.getState(),{width:a,height:c}=this.getViewportProps();if(!r||s===void 0||o===void 0)return this;let l;if(e){const u=(e[0]-r[0])/a,h=(e[1]-r[1])/c;l={bearing:s-u*180,pitch:o-h*90}}else l={bearing:s-i,pitch:o-n};return this._getUpdatedState(l)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startBearing:null,startPitch:null})}zoomStart(){return this._getUpdatedState({startZoomPosition:this.getViewportProps().position})}zoom({pos:e,scale:i}){const n=this.getViewportProps(),r=this.getState().startZoomPosition||n.position,{projectionMatrix:s,width:o}=this.makeViewport(n),a=2*Math.atan(1/s[0])*(e[0]/o-.5),c=this.getDirection(!0);return this._move(c.rotateZ({radians:-a}),Math.log2(i)*It,r)}zoomEnd(){return this._getUpdatedState({startZoomPosition:null})}moveLeft(e=It){const i=this.getDirection(!0);return this._move(i.rotateZ({radians:Math.PI/2}),e)}moveRight(e=It){const i=this.getDirection(!0);return this._move(i.rotateZ({radians:-Math.PI/2}),e)}moveUp(e=It){const i=this.getDirection(!0);return this._move(i,e)}moveDown(e=It){const i=this.getDirection(!0);return this._move(i.negate(),e)}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}zoomIn(e=It){return this._move(new $(0,0,1),e)}zoomOut(e=It){return this._move(new $(0,0,-1),e)}shortestPathFrom(e){const i=e.getViewportProps(),n={...this.getViewportProps()},{bearing:r,longitude:s}=n;return Math.abs(r-i.bearing)>180&&(n.bearing=r<0?r+360:r-360),s!==null&&i.longitude!==null&&Math.abs(s-i.longitude)>180&&(n.longitude=s<0?s+360:s-360),n}_move(e,i,n=this.getViewportProps().position){const r=e.scale(i);return this._getUpdatedState({position:new $(n).add(r)})}getDirection(e=!1){return new Ae({bearing:this.getViewportProps().bearing,pitch:e?90:90+this.getViewportProps().pitch}).toVector3().normalize()}_getUpdatedState(e){return new Aa({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e})}applyConstraints(e){const{pitch:i,maxPitch:n,minPitch:r,longitude:s,position:o,bearing:a,maxBounds:c}=e;if(e.pitch=T(i,r,n),s!==null&&(s<-180||s>180)&&(e.longitude=pt(s+180,360)-180),(a<-180||a>180)&&(e.bearing=pt(a+180,360)-180),c){const l=st(e.width,e.height,e.maxBoundsPadding);if(l.width>=0&&l.height>=0){const u=T(o[0],c[0][0],c[1][0]),h=T(o[1],c[0][1],c[1][1]),f=T(o[2]??0,c[0][2]??0,c[1][2]??0);(u!==o[0]||h!==o[1]||f!==o[2])&&(e.position=[u,h,f])}}return e}},ga=class extends Wt{constructor(){super(...arguments),this.ControllerState=Wm,this.transition={transitionDuration:300,transitionInterpolator:new Ct(["position","pitch","bearing"])}}},ma=class extends $t{constructor(t={}){super(t)}getViewportType(){return Dn}get ControllerType(){return ga}};ma.displayName="FirstPersonView";var Ym=class extends Ze{constructor(t){const{width:e,height:i,rotationX:n=0,rotationOrbit:r=0,target:s=[0,0,0],zoom:o=0,minRotationX:a=-90,maxRotationX:c=90,minZoom:l=-1/0,maxZoom:u=1/0,maxBounds:h=null,maxBoundsPadding:f=null,startPanPosition:d,startRotatePos:p,startRotationX:g,startRotationOrbit:m,startZoomPosition:_,startZoom:v}=t;super({width:e,height:i,rotationX:n,rotationOrbit:r,target:s,zoom:o,minRotationX:a,maxRotationX:c,minZoom:l,maxZoom:u,maxBounds:h,maxBoundsPadding:f},{startPanPosition:d,startRotatePos:p,startRotationX:g,startRotationOrbit:m,startZoomPosition:_,startZoom:v},t.makeViewport),this.unproject3D=t.unproject3D}panStart({pos:t}){return this._getUpdatedState({startPanPosition:this._unproject(t)})}pan({pos:t,startPosition:e}){const i=this.getState().startPanPosition||e;if(!i)return this;const n=this.makeViewport(this.getViewportProps()).panByPosition(i,t);return this._getUpdatedState(n)}panEnd(){return this._getUpdatedState({startPanPosition:null})}rotateStart({pos:t}){return this._getUpdatedState({startRotatePos:t,startRotationX:this.getViewportProps().rotationX,startRotationOrbit:this.getViewportProps().rotationOrbit})}rotate({pos:t,deltaAngleX:e=0,deltaAngleY:i=0}){const{startRotatePos:n,startRotationX:r,startRotationOrbit:s}=this.getState(),{width:o,height:a}=this.getViewportProps();if(!n||r===void 0||s===void 0)return this;let c;if(t){let l=(t[0]-n[0])/o;const u=(t[1]-n[1])/a;(r<-90||r>90)&&(l*=-1),c={rotationX:r+u*180,rotationOrbit:s+l*180}}else c={rotationX:r+i,rotationOrbit:s+e};return this._getUpdatedState(c)}rotateEnd(){return this._getUpdatedState({startRotationX:null,startRotationOrbit:null})}shortestPathFrom(t){const e=t.getViewportProps(),i={...this.getViewportProps()},{rotationOrbit:n}=i;return Math.abs(n-e.rotationOrbit)>180&&(i.rotationOrbit=n<0?n+360:n-360),i}zoomStart({pos:t}){return this._getUpdatedState({startZoomPosition:this._unproject(t),startZoom:this.getViewportProps().zoom})}zoom({pos:t,startPos:e,scale:i}){let{startZoom:n,startZoomPosition:r}=this.getState();if(r||(n=this.getViewportProps().zoom,r=this._unproject(e||t)),!r)return this;const s=this._calculateNewZoom({scale:i,startZoom:n}),o=this.makeViewport({...this.getViewportProps(),zoom:s});return this._getUpdatedState({zoom:s,...o.panByPosition(r,t)})}zoomEnd(){return this._getUpdatedState({startZoomPosition:null,startZoom:null})}zoomIn(t=2){return this._getUpdatedState({zoom:this._calculateNewZoom({scale:t})})}zoomOut(t=2){return this._getUpdatedState({zoom:this._calculateNewZoom({scale:1/t})})}moveLeft(t=50){return this._panFromCenter([-t,0])}moveRight(t=50){return this._panFromCenter([t,0])}moveUp(t=50){return this._panFromCenter([0,-t])}moveDown(t=50){return this._panFromCenter([0,t])}rotateLeft(t=15){return this._getUpdatedState({rotationOrbit:this.getViewportProps().rotationOrbit-t})}rotateRight(t=15){return this._getUpdatedState({rotationOrbit:this.getViewportProps().rotationOrbit+t})}rotateUp(t=10){return this._getUpdatedState({rotationX:this.getViewportProps().rotationX-t})}rotateDown(t=10){return this._getUpdatedState({rotationX:this.getViewportProps().rotationX+t})}_project(t){return this.makeViewport(this.getViewportProps()).project(t)}_unproject(t){const e=this.unproject3D?.(t);return e||this.makeViewport(this.getViewportProps()).unproject(t)}_calculateNewZoom({scale:t,startZoom:e}){e===void 0&&(e=this.getViewportProps().zoom);const i=e+Math.log2(t);return this._constrainZoom(i)}_panFromCenter(t){const{target:e}=this.getViewportProps(),i=this._project(e);return this.pan({startPosition:e,pos:[i[0]+t[0],i[1]+t[1]]})}_getUpdatedState(t){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...t})}applyConstraints(t){const{maxRotationX:e,minRotationX:i,rotationOrbit:n}=t;return t.zoom=this._constrainZoom(t.zoom,t),t.rotationX=T(t.rotationX,i,e),(n<-180||n>180)&&(t.rotationOrbit=pt(n+180,360)-180),t.target=this._constrainTarget(t),t}_constrainZoom(t,e){e||(e=this.getViewportProps());const{maxZoom:i,maxBounds:n}=e;let{minZoom:r}=e;if(n&&e.width>0&&e.height>0){const s=st(e.width,e.height,e.maxBoundsPadding),o=[];if(s.width>0||s.height>0){const a=qe(this.makeViewport({...e,zoom:t}),e.target,s);s.width>0&&o.push(a.left,a.right),s.height>0&&o.push(a.top,a.bottom);const c=Math.min(...o)*2,l=n[1][0]-n[0][0],u=n[1][1]-n[0][1],h=(n[1][2]??0)-(n[0][2]??0),f=Math.sqrt(l*l+u*u+h*h);c>0&&f>0&&(r=Math.max(r,Math.log2(c/f)),r>i&&(r=i))}}return T(t,r,i)}_constrainTarget(t){const{target:e,maxBounds:i}=t;if(!i)return e;const n=st(t.width,t.height,t.maxBoundsPadding);if(n.width<0||n.height<0)return e;const[[r,s,o=0],[a,c,l=0]]=i;if(e[0]>=r&&e[0]<=a&&e[1]>=s&&e[1]<=c&&e[2]>=o&&e[2]<=l)return e;const u=this.makeViewport?.(t);if(u){const{cameraPosition:h}=u,f=h[0]-e[0],d=h[1]-e[1],p=h[2]-e[2],g=f*e[0]+d*e[1]+p*e[2],m=f*(f>=0?r:a)+d*(d>=0?s:c)+p*(p>=0?o:l),_=f*(f>=0?a:r)+d*(d>=0?c:s)+p*(p>=0?l:o);if((f||d||p)&&g>=m&&g<=_){const v=C=>T(C,r,a),y=C=>T(C,s,c),b=C=>T(C,o,l),P=C=>f*v(e[0]-C*f)+d*y(e[1]-C*d)+p*b(e[2]-C*p)-g;let E=-1,x=1,M=P(E),S=P(x);for(;M<0;)x=E,S=M,E*=2,M=P(E);for(;S>0;)E=x,M=S,x*=2,S=P(x);for(let C=0;C<30;C++){const R=(E+x)/2;P(R)>0?E=R:x=R}const k=(E+x)/2;return[v(e[0]-k*f),y(e[1]-k*d),b(e[2]-k*p)]}}return[T(e[0],r,a),T(e[1],s,c),T(e[2],o,l)]}},_a=class extends Wt{constructor(){super(...arguments),this.ControllerState=Ym,this.transition={transitionDuration:300,transitionInterpolator:new Ct({transitionProps:{compare:["target","zoom","rotationX","rotationOrbit"],required:["target","zoom"]}})},this._unproject3D=t=>{if(this.pickPosition){const{x:e,y:i}=this.props,n=this.pickPosition(e+t[0],i+t[1]);if(n&&n.coordinate)return n.coordinate}return null}}setProps(t){t.unproject3D=this._unproject3D,super.setProps(t)}},va=class extends $t{constructor(t={}){super(t),this.props.orbitAxis=t.orbitAxis||"Z"}getViewportType(){return Rn}get ControllerType(){return _a}};va.displayName="OrbitView";var ya=1;function Bn({zoom:t=0,zoomX:e,zoomY:i}){return e=e??(Array.isArray(t)?t[0]:t),i=i??(Array.isArray(t)?t[1]:t),{zoomX:e,zoomY:i}}function Hm(t,e,i,n,r){const s=t[0][e]+i,o=t[1][e]-n,a=(s+o)/2;return{minimum:s,maximum:o,midpoint:a,settledTarget:Number.isFinite(i)&&Number.isFinite(n)&&s<=o?T(r,s,o):a}}var Zm=class extends Ze{constructor(t){const{width:e,height:i,target:n=[0,0,0],zoom:r=0,zoomAxis:s="all",minZoom:o=-1/0,maxZoom:a=1/0,minZoomX:c=o,maxZoomX:l=a,minZoomY:u=o,maxZoomY:h=a,maxBounds:f=null,maxBoundsPadding:d=null,rubberBand:p=!1,startPanPosition:g,startZoomPosition:m,startZoom:_}=t,{[Z]:v}=t,{zoomX:y,zoomY:b}=Bn(t);super({width:e,height:i,target:n,zoom:r,zoomX:y,zoomY:b,zoomAxis:s,minZoomX:c,maxZoomX:l,minZoomY:u,maxZoomY:h,maxBounds:f,maxBoundsPadding:d,rubberBand:p,[Z]:v},{startPanPosition:g,startZoomPosition:m,startZoom:_},t.makeViewport,t.constraintContext)}panStart({pos:t},e){return this._getUpdatedState({startPanPosition:this._unproject(t)},e)}pan({pos:t,startPosition:e},i){const n=this.getState().startPanPosition||e;if(!n)return this;const r=this.makeViewport(this.getViewportProps()).panByPosition(n,t);return this._getUpdatedState(r,i)}panEnd(t){return this._getUpdatedState({startPanPosition:null},t)}rotateStart(){return this}rotate(){return this}rotateEnd(){return this}shortestPathFrom(t){return t.getViewportProps(),{...this.getViewportProps()}}zoomStart({pos:t},e){const{zoomX:i,zoomY:n}=this.getViewportProps();return this._getUpdatedState({startZoomPosition:this._unproject(t),startZoom:[i,n]},e)}zoom({pos:t,startPos:e,scale:i},n){let{startZoom:r,startZoomPosition:s}=this.getState();if(!s){const{zoomX:a,zoomY:c}=this.getViewportProps();r=[a,c],s=this._unproject(e||t)}if(!s)return this;const o=this._calculateNewZoom({scale:i,startZoom:r});return this._getUpdatedState({...o,[Z]:{position:s,screenPosition:t}},n)}zoomEnd(t){return this._getUpdatedState({startZoomPosition:null,startZoom:null},t)}zoomIn(t=2,e){return this._getUpdatedState(this._calculateNewZoom({scale:t}),e)}zoomOut(t=2,e){return this._getUpdatedState(this._calculateNewZoom({scale:1/t}),e)}moveLeft(t=50,e){return this._panFromCenter([-t,0],e)}moveRight(t=50,e){return this._panFromCenter([t,0],e)}moveUp(t=50,e){return this._panFromCenter([0,-t],e)}moveDown(t=50,e){return this._panFromCenter([0,t],e)}rotateLeft(t=15){return this}rotateRight(t=15){return this}rotateUp(t=10){return this}rotateDown(t=10){return this}_project(t){return this.makeViewport(this.getViewportProps()).project(t)}_unproject(t){const[e,i]=this.makeViewport(this.getViewportProps()).unproject(t);return[e,i]}_calculateNewZoom({scale:t,startZoom:e}){const{zoomX:i,zoomY:n,zoomAxis:r}=this.getViewportProps();e===void 0&&(e=[i,n]);const s=Math.log2(t);let[o,a]=e;switch(r){case"X":o+=s;break;case"Y":a+=s;break;default:o+=s,a+=s}return{zoomX:o,zoomY:a}}_panFromCenter(t,e){const{target:i}=this.getViewportProps(),n=this._project(i);return this.pan({startPosition:i,pos:[n[0]+t[0],n[1]+t[1]]},e)}_getUpdatedState(t,e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...t,constraintContext:e})}applyConstraints(t,e){const i=t,n=i[Z];delete i[Z];const r=Bn(t),s=this._constrainZoom(r,t),o=t.rubberBand&&e?.mode==="elastic",{zoomX:a,zoomY:c}=e?.mode==="preserve"?r:o?{zoomX:Yt(r.zoomX,s.zoomX,ya),zoomY:Yt(r.zoomY,s.zoomY,ya)}:s;if(t.zoomX=a,t.zoomY=c,n){const f=this.makeViewport({...t,zoomX:a,zoomY:c});Object.assign(t,f.panByPosition(n.position,n.screenPosition))}t.zoom=Array.isArray(t.zoom)||t.zoomX!==t.zoomY?[t.zoomX,t.zoomY]:t.zoomX;const{maxBounds:l,rubberBand:u,target:h}=t;if(l){const f=st(t.width,t.height,t.maxBoundsPadding),d=this.makeViewport(t),p=qe(d,h,f),g=d.project(h),m=[0,1].map(b=>{const P=h.slice();P[b]+=1;const E=d.project(P)[b]-g[b];return Number.isFinite(E)?E:2**(b===0?a:c)*(b===0?1:-1)}),_=m.map((b,P)=>{const E=P===0?p.left:p.top,x=P===0?p.right:p.bottom,M=Math.abs(b);return b>=0?[E/M,x/M]:[x/M,E/M]}),v=h.slice(),y=[f.width,f.height];for(const[b,[P,E]]of _.entries()){if(y[b]<0)continue;const{minimum:x,maximum:M,midpoint:S,settledTarget:k}=Hm(l,b,P,E,h[b]);if(e?.mode!=="preserve"&&u&&(!Number.isFinite(P)||!Number.isFinite(E))){v[b]=S;continue}const C=u?k:T(h[b],x,M);v[b]=e?.mode==="preserve"?h[b]:o?Yt(h[b],C,(b===0?f.width:f.height)/2/Math.abs(m[b])):C}(v[0]!==h[0]||v[1]!==h[1])&&(t.target=v)}return t}_constrainZoom({zoomX:t,zoomY:e},i){i||(i=this.getViewportProps());const{zoomAxis:n,maxZoomX:r,maxZoomY:s,maxBounds:o}=i;let{minZoomX:a,minZoomY:c}=i;if(o!==null&&i.width>0&&i.height>0){const l=st(i.width,i.height,i.maxBoundsPadding),u=o[0],h=o[1],f=h[0]-u[0],d=h[1]-u[1];l.width>0&&Number.isFinite(f)&&f>0&&(a=Math.max(a,Math.log2(l.width/f)),a>r&&(a=r)),l.height>0&&Number.isFinite(d)&&d>0&&(c=Math.max(c,Math.log2(l.height/d)),c>s&&(c=s))}switch(n){case"X":t=T(t,a,r);break;case"Y":e=T(e,c,s);break;default:let l=Math.min(r-t,s-e,0);l===0&&(l=Math.max(a-t,c-e,0)),l!==0&&(t+=l,e+=l)}return{zoomX:t,zoomY:e}}},ba=class extends Wt{constructor(){super(...arguments),this.ControllerState=Zm,this.transition={transitionDuration:300,transitionInterpolator:new Ct(["target","zoomX","zoomY"])},this.dragMode="pan"}setProps(t){Object.assign(t,Bn(t)),super.setProps(t)}_onMultiPanStart(t){return this.multiTouchDrag==="pan"&&super._onMultiPanStart(t)}_onPanRotate(){return!1}},wa=class extends $t{constructor(t={}){super(t)}getViewportType(){return On}get ControllerType(){return ba}};wa.displayName="OrthographicView";var Zt=Math.PI/180,zn=180/Math.PI,vt=class N{static toPosition(e,i){const n=i*Zt,r=e*Zt,s=Math.cos(n);return[s*Math.cos(r),s*Math.sin(r),Math.sin(n)]}static toLngLat(e){return[Math.atan2(e[1],e[0])*zn,Math.asin(T(e[2],-1,1))*zn]}static tangentBasis(e,i){const n=i*Zt,r=e*Zt,s=Math.sin(n),o=Math.cos(n),a=Math.sin(r),c=Math.cos(r);return{N:[-s*c,-s*a,o],E:[-a,c,0]}}static upVector(e,i,n){const{N:r,E:s}=N.tangentBasis(e,i),o=n*Zt,a=Math.cos(o),c=Math.sin(o);return[r[0]*a+s[0]*c,r[1]*a+s[1]*c,r[2]*a+s[2]*c]}static bearing(e,i,n){const{N:r,E:s}=N.tangentBasis(i,n);return Math.atan2(me(e,s),me(e,r))*zn}static cameraFrame(e,i,n){const r=N.toPosition(e,i),s=N.upVector(e,i,n),{N:o,E:a}=N.tangentBasis(e,i),c=n*Zt,l=Math.cos(c),u=Math.sin(c),h=[a[0]*l-o[0]*u,a[1]*l-o[1]*u,a[2]*l-o[2]*u];return{position:r,up:s,axisHorizontal:Dt([],r,h),axisVertical:Dt([],r,s),longitude:e,latitude:i,bearing:n}}static angularDistance(e,i){const n=N.toPosition(e.longitude,e.latitude),r=N.toPosition(i.longitude,i.latitude);return Math.acos(T(me(n,r),-1,1))}static greatCircleAxis(e,i){const n=N.toPosition(e.longitude,e.latitude),r=N.toPosition(i.longitude,i.latitude);return Yn([],Dt([],n,r))}static rotate(e,i,n){const r=new es().fromAxisRotation(i,n);return qn([],e,r)}static rotateFrame(e,i,n,r){let s=N.rotate(e.position,e.axisHorizontal,i);s=N.rotate(s,e.axisVertical,n);let o=N.rotate(e.up,e.axisHorizontal,i);o=N.rotate(o,e.axisVertical,n);const[a,c]=N.toLngLat(s),l=r?0:N.bearing(o,a,c);return{...e,position:s,up:o,longitude:a,latitude:c,bearing:l}}},qm=1/(1-Math.exp(-5)),Xm=t=>(1-Math.exp(-5*t))*qm,Pa=class extends He{constructor(t){const e="axis"in t;super({compare:["longitude","latitude"],extract:e?["longitude","latitude","zoom","bearing"]:["longitude","latitude","zoom"],required:["longitude","latitude"]}),e?(this._mode="rotation",this._axis=t.axis,this._totalAngle=t.totalAngle):(this._mode="linear",this._targetLongitude=t.targetLongitude)}initializeProps(t,e){const i=super.initializeProps(t,e);return this._startZoom=t.zoom,this._mode==="rotation"?this._startFrame={...vt.cameraFrame(t.longitude,t.latitude,t.bearing||0),axisHorizontal:this._axis}:i.end.longitude=this._targetLongitude,i}interpolateProps(t,e,i){if(this._mode==="rotation"){const{longitude:s,latitude:o,bearing:a}=vt.rotateFrame(this._startFrame,this._totalAngle*i,0);return{bearing:a,longitude:s,latitude:o,zoom:this._startZoom+D(o,!0)-D(this._startFrame.latitude,!0)}}const n=t.longitude+(e.longitude-t.longitude)*i,r=t.latitude+(e.latitude-t.latitude)*i;return{longitude:n,latitude:r,zoom:this._startZoom+D(r,!0)-D(t.latitude,!0)}}},ht=Math.PI/180,Km=180/Math.PI;function Ea(t,e=0){const i=Math.min(180,t)*ht;return 512*Math.sin(i/2)*Math.pow(2,e)}function qt(t,e=0){const i=t/Math.pow(2,e);return Math.asin(Math.min(1,i/256/2))*2*Km}var Jm=class extends Mo{constructor(t){const{startPanPos:e,startPanCameraFrame:i,startPanAngularRate:n,startPanLockBearing:r,...s}=t;s.normalize=!1,super(s);const o=this._state;e!==void 0&&(o.startPanPos=e),i!==void 0&&(o.startPanCameraFrame=i),n!==void 0&&(o.startPanAngularRate=n),r!==void 0&&(o.startPanLockBearing=r)}panStart({pos:t}){const{latitude:e,longitude:i,zoom:n,bearing:r=0}=this.getViewportProps(),s=vt.cameraFrame(i,e,r),o=Math.abs(r)<1;o&&(s.axisHorizontal=[0,0,1]);const a=.25/Math.pow(2,n-D(e,!0))*ht;return this._getUpdatedState({startPanPos:t,startPanCameraFrame:s,startPanAngularRate:a,startPanLockBearing:o,startZoom:n})}pan({pos:t,startPos:e}){const i=this.getState(),n=i.startPanPos||e;if(!n)return this;const r=i.startPanCameraFrame,s=i.startPanAngularRate,o=i.startZoom??this.getViewportProps().zoom;if(!r||!s)return this;const a=n[0]-t[0],c=n[1]-t[1];let l=a*s,u=-c*s;const h=i.startPanLockBearing;if(h){const p=Math.cos(r.latitude*ht);l=a*s/Math.max(p,.25);const g=(nt-r.latitude)*ht,m=-(nt+r.latitude)*ht;u=T(u,m,g)}const f=vt.rotateFrame(r,l,u,h),d=o+D(f.latitude,!0)-D(r.latitude,!0);return this._getUpdatedState({longitude:f.longitude,latitude:f.latitude,bearing:f.bearing,zoom:d})}panEnd(){return this._getUpdatedState({startPanPos:null,startPanCameraFrame:null,startPanAngularRate:null,startPanLockBearing:null,startZoom:null})}_panFromCenter(t){const{width:e,height:i}=this.getViewportProps(),n=[e/2,i/2];return this.panStart({pos:n}).pan({pos:[n[0]+t[0],n[1]+t[1]]}).panEnd()}applyConstraints(t){const e=t,i=e[Z];delete e[Z];const{latitude:n,maxBounds:r}=t;if(t.zoom=this._constrainZoom(t.zoom,t),i){const o=this.makeViewport(t);Object.assign(t,o.panByPosition(i.position,i.screenPosition))}(t.longitude<-180||t.longitude>180)&&(t.longitude=pt(t.longitude+180,360)-180),t.latitude=T(t.latitude,-90,90),(t.bearing<-180||t.bearing>180)&&(t.bearing=pt(t.bearing+180,360)-180),t.pitch=T(t.pitch,t.minPitch,t.maxPitch);const s=r?st(t.width,t.height,t.maxBoundsPadding):null;if(r&&s&&(s.width>=0&&(t.longitude=T(t.longitude,r[0][0],r[1][0])),s.height>=0&&(t.latitude=T(t.latitude,r[0][1],r[1][1]))),r&&s){const o=qe(this.makeViewport({...t,bearing:0,pitch:0}),[t.longitude,t.latitude],s),a=t.zoom-D(n),c=r[1][0]-r[0][0],l=r[1][1]-r[0][1];if(s.height>=0&&l>0&&l<180){const u=Math.min(qt(s.height,a),l),h=s.height?u*o.bottom/s.height:qt(o.bottom,a),f=s.height?u*o.top/s.height:qt(o.top,a);t.latitude=T(t.latitude,r[0][1]+h,r[1][1]-f)}if(s.width>=0&&c>0&&c<360){const u=Math.min(qt(s.width/Math.cos(t.latitude*ht),a),c),h=s.width?u*o.left/s.width:qt(o.left/Math.cos(t.latitude*ht),a),f=s.width?u*o.right/s.width:qt(o.right/Math.cos(t.latitude*ht),a);t.longitude=T(t.longitude,r[0][0]+h,r[1][0]-f)}}return t.latitude!==n&&(t.zoom+=D(t.latitude,!0)-D(n,!0)),t}_constrainZoom(t,e){e||(e=this.getViewportProps());const{maxZoom:i,maxBounds:n}=e;let{minZoom:r}=e;if(n!==null&&e.width>0&&e.height>0){const o=st(e.width,e.height,e.maxBoundsPadding),a=n[0][1],c=n[1][1],l=Math.sign(a)===Math.sign(c)?Math.min(Math.abs(a),Math.abs(c)):0,u=D(0),h=Ea(n[1][0]-n[0][0])*Math.cos(l*ht),f=Ea(n[1][1]-n[0][1]);o.width>0&&h>0&&(r=Math.max(r,Math.log2(o.width/h)+u)),o.height>0&&f>0&&(r=Math.max(r,Math.log2(o.height/f)+u)),r>i&&(r=i)}const s=D(e.latitude,!0)-D(0,!0);return T(t,r+s,i+s)}},Sa=class extends Wt{constructor(){super(...arguments),this.ControllerState=Jm,this.transition={transitionDuration:300,transitionInterpolator:new Ct({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this._panHistory=[]}getZoomPosition(t){const e=super.getZoomPosition(t),i=this.makeViewport(this.controllerState.getViewportProps());return!(i instanceof ni)||i.getZoomAnchorStrength(e)>0?e:i.project([i.longitude,i.latitude])}_onPanStart(t){return this._panHistory=[],super._onPanStart(t)}_onMultiPanStart(t){return this._panHistory=[],super._onMultiPanStart(t)}_onPanMove(t){if(!this.dragPan)return!1;const e=this.getCenter(t),i=this.controllerState.pan({pos:e});this.updateViewport(i,{transitionDuration:0},{isDragging:!0,isPanning:!0});const{longitude:n,latitude:r}=i.getViewportProps();return this._panHistory.push({longitude:n,latitude:r,timestamp:Date.now()}),this._panHistory.length>5&&this._panHistory.shift(),!0}_onPanMoveEnd(t){const{inertia:e}=this;if(this.dragPan&&e&&this._panHistory.length>=2){const n=this._panHistory[0],r=this._panHistory[this._panHistory.length-1],s=r.timestamp-n.timestamp;if(s>0){const o=this.controllerState.getViewportProps(),a=this.controllerState.getState(),c=vt.angularDistance(n,r)/s;if(c>1e-6){const l=c*e/2;let u,h,f;if(a.startPanLockBearing){let p=r.longitude-n.longitude;p>180?p-=360:p<-180&&(p+=360);const g=r.latitude-n.latitude,m=p/s,_=g/s;h=o.longitude+m*e/2,f=T(o.latitude+_*e/2,-90,90),u=new Pa({targetLongitude:h})}else{const p=vt.greatCircleAxis(n,r),g=vt.cameraFrame(o.longitude,o.latitude,o.bearing||0),m=vt.rotateFrame({...g,axisHorizontal:p},l,0);h=m.longitude,f=T(m.latitude,-90,90),u=new Pa({axis:p,totalAngle:l})}const d=this.controllerState.panEnd();return this.updateViewport(d,{transitionInterpolator:u,transitionDuration:e,transitionEasing:Xm,longitude:h,latitude:f},{isDragging:!1,isPanning:!0}),this._panHistory=[],!0}}}this._panHistory=[];const i=this.controllerState.panEnd();return this.updateViewport(i,null,{isDragging:!1,isPanning:!1}),!0}},Qm={cullMode:"back"},xa=class extends $t{constructor(t={}){super({...t,parameters:{...Qm,...t.parameters}})}getViewportType(t){return t.zoom>12?le:ni}get ControllerType(){return Sa}};xa.displayName="GlobeView";var t_=class extends on{constructor(){super(...arguments),this._terrainAltitude=void 0,this._terrainAltitudeTarget=void 0,this._pickFrameId=null,this._lastPickTime=0}setProps(t){if(super.setProps({rotationPivot:"3d",...t}),this._pickFrameId===null){const e=()=>{const i=Date.now();if(i-this._lastPickTime>500&&!this.isDragging()&&(this._lastPickTime=i,this._pickTerrainCenterAltitude(),this._terrainAltitude===void 0&&this._terrainAltitudeTarget!==void 0)){this._terrainAltitude=this._terrainAltitudeTarget;const n=new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),r=this._rebaseViewport(this._terrainAltitudeTarget,n);if(r){const s=new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state,...r});super.updateViewport(s)}}this._pickFrameId=requestAnimationFrame(e)};this._pickFrameId=requestAnimationFrame(e)}}finalize(){this._pickFrameId!==null&&(cancelAnimationFrame(this._pickFrameId),this._pickFrameId=null),super.finalize()}updateViewport(t,e=null,i={}){if(this._terrainAltitude===void 0){super.updateViewport(t,e,i);return}const n=.05;this._terrainAltitude+=(this._terrainAltitudeTarget-this._terrainAltitude)*n;const r=t.getViewportProps().position||[0,0,0];e={...e,position:[r[0],r[1],this._terrainAltitude]},super.updateViewport(t,e,i)}_pickTerrainCenterAltitude(){if(!this.pickPosition)return;const{x:t,y:e,width:i,height:n}=this.props,r=this.pickPosition(t+i/2,e+n/2);r?.coordinate&&r.coordinate.length>=3&&(this._terrainAltitudeTarget=r.coordinate[2])}_rebaseViewport(t,e){const i=e.getViewportProps(),n=this.makeViewport({...i,position:[0,0,0]}),r=n.cameraPosition,s=t*n.distanceScales.unitsPerMeter[2],o=r[2],a=o-s;if(a<=0)return null;const c=Math.log2(o/a),l=i.zoom+c,u=this.makeViewport({...i,zoom:l,position:[0,0,t]}),{width:h,height:f}=i,d=[h/2,f/2],p=n.unproject(d,{targetZ:t});if(p&&"panByPosition3D"in u&&typeof u.panByPosition3D=="function"){const g=u.panByPosition3D(p,d);return{position:[0,0,t],zoom:l,...g}}return null}},Nn=class{static get componentName(){return Object.prototype.hasOwnProperty.call(this,"extensionName")?this.extensionName:""}constructor(t){t&&(this.opts=t)}equals(t){return this===t?!0:this.constructor===t.constructor&&z(this.opts,t.opts,1)}getShaders(t){return null}getSubLayerProps(t){const{defaultProps:e}=t.constructor,i={updateTriggers:{}};for(const n in e)if(n in this.props){const r=e[n],s=this.props[n];i[n]=s,r&&r.type==="accessor"&&(i.updateTriggers[n]=this.props.updateTriggers[n],typeof s=="function"&&(i[n]=this.getSubLayerAccessor(s)))}return i}initializeState(t,e){}updateState(t,e){}onNeedsRedraw(t){}getNeedsPickingBuffer(t){return!1}draw(t,e){}finalizeState(t,e){}};Nn.defaultProps={},Nn.extensionName="LayerExtension";var Un={bearing:0,pitch:0,position:[0,0,0]},e_={speed:1.2,curve:1.414},i_=class extends He{constructor(t={}){super({compare:["longitude","latitude","zoom","bearing","pitch","position"],extract:["width","height","longitude","latitude","zoom","bearing","pitch","position"],required:["width","height","latitude","longitude","zoom"]}),this.opts={...e_,...t}}interpolateProps(t,e,i){const n=Tf(t,e,i,this.opts);for(const r in Un)n[r]=ve(t[r]||Un[r],e[r]||Un[r],i);return n}getDuration(t,e){let{transitionDuration:i}=e;return i==="auto"&&(i=Cf(t,e,this.opts)),i}},n_=class{constructor(t){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;const{attributes:e={}}=t;this.typedArrayManager=jt,this.attributes={},this._attributeDefs=e,this.opts=t,this.updateGeometry(t)}updateGeometry(t){Object.assign(this.opts,t);const{data:e,buffers:i={},getGeometry:n,geometryBuffer:r,positionFormat:s,dataChanged:o,normalize:a=!0}=this.opts;if(this.data=e,this.getGeometry=n,this.positionSize=r&&r.size||(s==="XY"?2:3),this.buffers=i,this.normalize=a,r&&(I(e.startIndices),this.getGeometry=this.getGeometryFromBuffer(r),a||(i.vertexPositions=r)),this.geometryBuffer=i.vertexPositions,Array.isArray(o))for(const c of o)this._rebuildGeometry(c);else this._rebuildGeometry()}updatePartialGeometry({startRow:t,endRow:e}){this._rebuildGeometry({startRow:t,endRow:e})}getGeometryFromBuffer(t){const e=t.value||t;return ArrayBuffer.isView(e)?Vo(e,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices}):null}_allocate(t,e){const{attributes:i,buffers:n,_attributeDefs:r,typedArrayManager:s}=this;for(const o in r)if(o in n)s.release(i[o]),i[o]=null;else{const a=r[o];a.copy=e,i[o]=s.allocate(i[o],t,a)}}_forEachGeometry(t,e,i){const{data:n,getGeometry:r}=this,{iterable:s,objectInfo:o}=pn(n,e,i);for(const a of s)o.index++,t(r?r(a,o):null,o.index)}_rebuildGeometry(t){if(!this.data)return;let{indexStarts:e,vertexStarts:i,instanceCount:n}=this;const{data:r,geometryBuffer:s}=this,{startRow:o=0,endRow:a=1/0}=t||{},c={};if(t||(e=[0],i=[0]),this.normalize||!s)this._forEachGeometry((u,h)=>{const f=u&&this.normalizeGeometry(u);c[h]=f,i[h+1]=i[h]+(f?this.getGeometrySize(f):0)},o,a),n=i[i.length-1];else if(i=r.startIndices,n=i[r.length]||0,ArrayBuffer.isView(s))n=n||s.length/this.positionSize;else if(s instanceof G){const u=this.positionSize*4;n=n||s.byteLength/u}else if(s.buffer){const u=s.stride||this.positionSize*4;n=n||s.buffer.byteLength/u}else if(s.value){const u=s.value,h=s.stride/u.BYTES_PER_ELEMENT||this.positionSize;n=n||u.length/h}this._allocate(n,!!t),this.indexStarts=e,this.vertexStarts=i,this.instanceCount=n;const l={};this._forEachGeometry((u,h)=>{const f=c[h]||u;l.vertexStart=i[h],l.indexStart=e[h];const d=h<i.length-1?i[h+1]:n;l.geometrySize=d-i[h],l.geometryIndex=h,this.updateGeometryAttributes(f,l)},o,a),this.vertexCount=e[e.length-1]}};export{Ji as $,ko as A,$t as B,Pn as C,$r as Ct,fn as D,pn as E,xe as Et,Wt as F,en as G,vo as H,Ct as I,wd as J,Gd as K,He as L,an as M,on as N,Xe as O,st as P,ao as Q,I as R,aa as S,Ii as St,gn as T,Mi as Tt,_o as U,z as V,$e as W,le as X,ho as Y,gt as Z,fa as _,fs as _t,xa as a,Xi as at,pe as b,L as bt,ba as c,xt as ct,ma as d,Bt as dt,je as et,ga as f,re as ft,ni as g,ds as gt,Rn as h,Hu as ht,t_ as i,Gf as it,To as j,un as k,va as l,mf as lt,On as m,se as mt,i_ as n,eo as nt,Sa as o,lt as ot,Dn as p,rf as pt,jd as q,Nn as r,to as rt,wa as s,Be as st,n_ as t,Ue as tt,_a as u,Oe as ut,ei as v,es as vt,ia as w,Fr as wt,Sn as x,Zr as xt,la as y,qr as yt,Ye as z};
