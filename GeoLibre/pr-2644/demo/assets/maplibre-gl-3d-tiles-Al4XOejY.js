import{Ft as of}from"./maplibre-Bg0pMN2Q.js";var lf=Object.defineProperty,cf=(e,t,i)=>t in e?lf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ye=(e,t,i)=>cf(e,typeof t!="symbol"?t+"":t,i);var $a="184",hf=0,Mc=1,df=2,yr=1,uf=2,Qs=3,Ni=0,Nt=1,Ii=2,Qi=0,zn=1,Tc=2,wc=3,Bc=4,Af=5,Cn=100,ff=101,pf=102,gf=103,mf=104,_f=200,vf=201,bf=202,Ef=203,eo=204,to=205,Cf=206,If=207,yf=208,Sf=209,xf=210,Mf=211,Tf=212,wf=213,Bf=214,io=0,no=1,so=2,Wn=3,ro=4,ao=5,oo=6,lo=7,co=0,Rf=1,Df=2,yi=0,Rc=1,Dc=2,Lc=3,Pc=4,Fc=5,Uc=6,Nc=7,Qc="attached",Lf="detached",Oc=300,nn=301,qn=302,ho=303,uo=304,Sr=306,Xn=1e3,ai=1001,xr=1002,_t=1003,Ao=1004,Os=1005,dt=1006,Mr=1007,oi=1008,Ue=1009,kc=1010,Gc=1011,In=1012,fo=1013,Si=1014,wt=1015,Dt=1016,po=1017,go=1018,ks=1020,Tr=35902,wr=35899,Hc=1021,Gs=1022,St=1023,Oi=1026,yn=1027,sn=1028,mo=1029,$t=1030,_o=1031,vo=1033,Kn=33776,Sn=33777,Br=33778,xn=33779,Rr=35840,bo=35841,jn=35842,Hs=35843,Dr=36196,Vs=37492,zs=37496,Lr=37488,Pr=37489,Ws=37490,Fr=37491,Mn=37808,Eo=37809,Co=37810,Io=37811,Jn=37812,yo=37813,So=37814,xo=37815,Mo=37816,To=37817,wo=37818,Bo=37819,Ro=37820,Do=37821,Yn=36492,Lo=36494,Ur=36495,Nr=36283,Qr=36284,qs=36285,Or=36286,Xs=2300,Ks=2301,Po=2302,Vc=2303,zc=2400,Wc=2401,qc=2402,Pf=2500,Ff=0,Xc=1,Fo=2,Uf=3200,kr=0,Nf=1,xi="",pt="srgb",Qt="srgb-linear",Gr="linear",it="srgb",Zn=7680,Kc=519,Qf=512,Of=513,kf=514,Uo=515,Gf=516,Hf=517,No=518,Vf=519,Qo=35044,jc="300 es",Mi=2e3,js=2001;function zf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Wf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Js(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qf(){const e=Js("canvas");return e.style.display="block",e}var Jc={};function Hr(...e){const t="THREE."+e.shift();console.log(t,...e)}function Yc(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ve(...e){e=Yc(e);const t="THREE."+e.shift();{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function we(...e){e=Yc(e);const t="THREE."+e.shift();{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Oo(...e){const t=e.join(" ");t in Jc||(Jc[t]=!0,ve(...e))}function Xf(e,t,i){return new Promise(function(n,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,i);break;default:n()}}setTimeout(r,i)})}var Kf={[io]:no,[so]:oo,[ro]:lo,[Wn]:ao,[no]:io,[oo]:so,[lo]:ro,[ao]:Wn},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=1234567,Ys=Math.PI/180,$n=180/Math.PI;function ci(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[e&255]+Lt[e>>8&255]+Lt[e>>16&255]+Lt[e>>24&255]+"-"+Lt[t&255]+Lt[t>>8&255]+"-"+Lt[t>>16&15|64]+Lt[t>>24&255]+"-"+Lt[i&63|128]+Lt[i>>8&255]+"-"+Lt[i>>16&255]+Lt[i>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function He(e,t,i){return Math.max(t,Math.min(i,e))}function ko(e,t){return(e%t+t)%t}function jf(e,t,i,n,s){return n+(e-t)*(s-n)/(i-t)}function Jf(e,t,i){return e!==t?(i-e)/(t-e):0}function Zs(e,t,i){return(1-i)*e+i*t}function Yf(e,t,i,n){return Zs(e,t,1-Math.exp(-i*n))}function Zf(e,t=1){return t-Math.abs(ko(e,t*2)-t)}function $f(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function ep(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function tp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ip(e,t){return e+Math.random()*(t-e)}function np(e){return e*(.5-Math.random())}function sp(e){e!==void 0&&(Zc=e);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(e){return e*Ys}function ap(e){return e*$n}function op(e){return(e&e-1)===0&&e!==0}function lp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function cp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function hp(e,t,i,n,s){const r=Math.cos,a=Math.sin,o=r(i/2),l=a(i/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),A=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":e.set(o*h,l*u,l*d,o*c);break;case"YZY":e.set(l*d,o*h,l*u,o*c);break;case"ZXZ":e.set(l*u,l*d,o*h,o*c);break;case"XZX":e.set(o*h,l*p,l*A,o*c);break;case"YXY":e.set(l*A,o*h,l*p,o*c);break;case"ZYZ":e.set(l*p,l*A,o*h,o*c);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Go={DEG2RAD:Ys,RAD2DEG:$n,generateUUID:ci,clamp:He,euclideanModulo:ko,mapLinear:jf,inverseLerp:Jf,lerp:Zs,damp:Yf,pingpong:Zf,smoothstep:$f,smootherstep:ep,randInt:tp,randFloat:ip,randFloatSpread:np,seededRandom:sp,degToRad:rp,radToDeg:ap,isPowerOfTwo:op,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:nt,denormalize:hi},$c=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,n=this.y,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const n=Math.cos(i),s=Math.sin(i),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$c.prototype.isVector2=!0;var je=$c,di=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,a){let o=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r+0],d=s[r+1],A=s[r+2],p=s[r+3];if(h!==p||o!==u||l!==d||c!==A){let m=o*u+l*d+c*A+h*p;m<0&&(u=-u,d=-d,A=-A,p=-p,m=-m);let g=1-a;if(m<.9995){const f=Math.acos(m),_=Math.sin(f);g=Math.sin(g*f)/_,a=Math.sin(a*f)/_,o=o*g+u*a,l=l*g+d*a,c=c*g+A*a,h=h*g+p*a}else{o=o*g+u*a,l=l*g+d*a,c=c*g+A*a,h=h*g+p*a;const f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,s,r){const a=i[n],o=i[n+1],l=i[n+2],c=i[n+3],h=s[r],u=s[r+1],d=s[r+2],A=s[r+3];return e[t]=a*A+c*h+o*d-l*u,e[t+1]=o*A+c*u+l*h-a*d,e[t+2]=l*A+c*d+a*u-o*h,e[t+3]=c*A-a*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,r=e._order,a=Math.cos,o=Math.sin,l=a(i/2),c=a(n/2),h=a(s/2),u=o(i/2),d=o(n/2),A=o(s/2);switch(r){case"XYZ":this._x=u*c*h+l*d*A,this._y=l*d*h-u*c*A,this._z=l*c*A+u*d*h,this._w=l*c*h-u*d*A;break;case"YXZ":this._x=u*c*h+l*d*A,this._y=l*d*h-u*c*A,this._z=l*c*A-u*d*h,this._w=l*c*h+u*d*A;break;case"ZXY":this._x=u*c*h-l*d*A,this._y=l*d*h+u*c*A,this._z=l*c*A+u*d*h,this._w=l*c*h-u*d*A;break;case"ZYX":this._x=u*c*h-l*d*A,this._y=l*d*h+u*c*A,this._z=l*c*A-u*d*h,this._w=l*c*h+u*d*A;break;case"YZX":this._x=u*c*h+l*d*A,this._y=l*d*h+u*c*A,this._z=l*c*A-u*d*h,this._w=l*c*h-u*d*A;break;case"XZY":this._x=u*c*h-l*d*A,this._y=l*d*h-u*c*A,this._z=l*c*A+u*d*h,this._w=l*c*h+u*d*A;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=i+a+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(s-l)*d,this._z=(r-n)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(c-o)/d,this._x=.25*d,this._y=(n+r)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(n+r)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(r-n)/d,this._x=(s+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+r*a+n*l-s*o,this._y=n*c+r*o+s*a-i*l,this._z=s*c+r*l+i*o-n*a,this._w=r*c-i*a-n*o-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,s=-s,r=-r,a=-a);let o=1-t;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eh=class{constructor(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(th.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const i=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*i-r*s),u=2*(r*n-a*i);return this.x=i+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this.z=He(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this.z=He(this.z,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const n=t.x,s=t.y,r=t.z,a=i.x,o=i.y,l=i.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return i*i+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){const s=Math.sin(i)*t;return this.x=s*Math.sin(n),this.y=Math.cos(i)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=s,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eh.prototype.isVector3=!0;var B=eh,Ho=new B,th=new di,ih=class{constructor(t,i,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,s,r,a,o,l,c)}set(t,i,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=i,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,s=i.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],A=n[5],p=n[8],m=s[0],g=s[3],f=s[6],_=s[1],b=s[4],C=s[7],S=s[2],M=s[5],T=s[8];return r[0]=a*m+o*_+l*S,r[3]=a*g+o*b+l*M,r[6]=a*f+o*C+l*T,r[1]=c*m+h*_+u*S,r[4]=c*g+h*b+u*M,r[7]=c*f+h*C+u*T,r[2]=d*m+A*_+p*S,r[5]=d*g+A*b+p*M,r[8]=d*f+A*C+p*T,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*a*h-i*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,A=c*r-a*l,p=i*u+n*d+s*A;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=u*m,t[1]=(s*c-h*n)*m,t[2]=(o*n-s*a)*m,t[3]=d*m,t[4]=(h*i-s*l)*m,t[5]=(s*r-o*i)*m,t[6]=A*m,t[7]=(n*l-c*i)*m,t[8]=(a*i-n*r)*m,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Vo.makeScale(t,i)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vo.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,n=t.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ih.prototype.isMatrix3=!0;var Qe=ih,Vo=new Qe,nh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){const e={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Qt]:{primaries:t,whitePoint:n,transfer:Gr,toXYZ:nh,fromXYZ:sh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:t,whitePoint:n,transfer:it,toXYZ:nh,fromXYZ:sh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),e}var Ve=dp();function ki(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function es(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var ts,up=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=Js("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=ki(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ap=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(Wo(n[r].image)):s.push(Wo(n[r]))}else s=Wo(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Wo(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?up.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var fp=0,qo=new B,Ot=class Ja extends li{constructor(t=Ja.DEFAULT_IMAGE,i=Ja.DEFAULT_MAPPING,n=ai,s=ai,r=dt,a=oi,o=St,l=Ue,c=Ja.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ci(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){ve(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){ve(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xn:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Xn:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=Oc,Ot.DEFAULT_ANISOTROPY=1;var rh=class{constructor(t=0,i=0,n=0,s=1){this.x=t,this.y=i,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,s){return this.x=t,this.y=i,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*i+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*i+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*i+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*i+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],A=l[5],p=l[9],m=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+A+f-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const b=(c+1)/2,C=(A+1)/2,S=(f+1)/2,M=(h+d)/4,T=(u+m)/4,v=(p+g)/4;return b>C&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=T/n):C>S?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=M/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=v/r),this.set(n,s,r,i),this}let _=Math.sqrt((g-p)*(g-p)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-m)/_,this.z=(d-h)/_,this.w=Math.acos((c+A+f-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this.z=He(this.z,t.z,i.z),this.w=He(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this.z=He(this.z,t,i),this.w=He(this.w,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;var lt=rh,pp=class extends li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];const n=new Ot({width:e,height:t,depth:i.depth}),s=i.count;for(let r=0;r<s;r++)this.textures[r]=n.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new zo(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends pp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ah=class extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_t,this.minFilter=_t,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},oh=class extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_t,this.minFilter=_t,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lh=class WA{constructor(t,i,n,s,r,a,o,l,c,h,u,d,A,p,m,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,s,r,a,o,l,c,h,u,d,A,p,m,g)}set(t,i,n,s,r,a,o,l,c,h,u,d,A,p,m,g){const f=this.elements;return f[0]=t,f[4]=i,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=A,f[7]=p,f[11]=m,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WA().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,A=a*u,p=o*h,m=o*u;i[0]=l*h,i[4]=-l*u,i[8]=c,i[1]=A+p*c,i[5]=d-m*c,i[9]=-o*l,i[2]=m-d*c,i[6]=p+A*c,i[10]=a*l}else if(t.order==="YXZ"){const d=l*h,A=l*u,p=c*h,m=c*u;i[0]=d+m*o,i[4]=p*o-A,i[8]=a*c,i[1]=a*u,i[5]=a*h,i[9]=-o,i[2]=A*o-p,i[6]=m+d*o,i[10]=a*l}else if(t.order==="ZXY"){const d=l*h,A=l*u,p=c*h,m=c*u;i[0]=d-m*o,i[4]=-a*u,i[8]=p+A*o,i[1]=A+p*o,i[5]=a*h,i[9]=m-d*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(t.order==="ZYX"){const d=a*h,A=a*u,p=o*h,m=o*u;i[0]=l*h,i[4]=p*c-A,i[8]=d*c+m,i[1]=l*u,i[5]=m*c+d,i[9]=A*c-p,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(t.order==="YZX"){const d=a*l,A=a*c,p=o*l,m=o*c;i[0]=l*h,i[4]=m-d*u,i[8]=p*u+A,i[1]=u,i[5]=a*h,i[9]=-o*h,i[2]=-c*h,i[6]=A*u+p,i[10]=d-m*u}else if(t.order==="XZY"){const d=a*l,A=a*c,p=o*l,m=o*c;i[0]=l*h,i[4]=-u,i[8]=c*h,i[1]=d*u+m,i[5]=a*h,i[9]=A*u-p,i[2]=p*u-A,i[6]=o*h,i[10]=m*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,mp)}lookAt(t,i,n){const s=this.elements;return jt.subVectors(t,i),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),rn.crossVectors(n,jt),rn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),rn.crossVectors(n,jt)),rn.normalize(),Vr.crossVectors(jt,rn),s[0]=rn.x,s[4]=Vr.x,s[8]=jt.x,s[1]=rn.y,s[5]=Vr.y,s[9]=jt.y,s[2]=rn.z,s[6]=Vr.z,s[10]=jt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,s=i.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],A=n[13],p=n[2],m=n[6],g=n[10],f=n[14],_=n[3],b=n[7],C=n[11],S=n[15],M=s[0],T=s[4],v=s[8],y=s[12],N=s[1],w=s[5],z=s[9],F=s[13],Q=s[2],V=s[6],G=s[10],U=s[14],j=s[3],$=s[7],ie=s[11],fe=s[15];return r[0]=a*M+o*N+l*Q+c*j,r[4]=a*T+o*w+l*V+c*$,r[8]=a*v+o*z+l*G+c*ie,r[12]=a*y+o*F+l*U+c*fe,r[1]=h*M+u*N+d*Q+A*j,r[5]=h*T+u*w+d*V+A*$,r[9]=h*v+u*z+d*G+A*ie,r[13]=h*y+u*F+d*U+A*fe,r[2]=p*M+m*N+g*Q+f*j,r[6]=p*T+m*w+g*V+f*$,r[10]=p*v+m*z+g*G+f*ie,r[14]=p*y+m*F+g*U+f*fe,r[3]=_*M+b*N+C*Q+S*j,r[7]=_*T+b*w+C*V+S*$,r[11]=_*v+b*z+C*G+S*ie,r[15]=_*y+b*F+C*U+S*fe,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],A=t[14],p=t[3],m=t[7],g=t[11],f=t[15],_=l*A-c*d,b=o*A-c*u,C=o*d-l*u,S=a*A-c*h,M=a*d-l*h,T=a*u-o*h;return i*(m*_-g*b+f*C)-n*(p*_-g*S+f*M)+s*(p*b-m*S+f*T)-r*(p*C-m*M+g*T)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],A=t[11],p=t[12],m=t[13],g=t[14],f=t[15],_=i*o-n*a,b=i*l-s*a,C=i*c-r*a,S=n*l-s*o,M=n*c-r*o,T=s*c-r*l,v=h*m-u*p,y=h*g-d*p,N=h*f-A*p,w=u*g-d*m,z=u*f-A*m,F=d*f-A*g,Q=_*F-b*z+C*w+S*N-M*y+T*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/Q;return t[0]=(o*F-l*z+c*w)*V,t[1]=(s*z-n*F-r*w)*V,t[2]=(m*T-g*M+f*S)*V,t[3]=(d*M-u*T-A*S)*V,t[4]=(l*N-a*F-c*y)*V,t[5]=(i*F-s*N+r*y)*V,t[6]=(g*C-p*T-f*b)*V,t[7]=(h*T-d*C+A*b)*V,t[8]=(a*z-o*N+c*v)*V,t[9]=(n*N-i*z-r*v)*V,t[10]=(p*M-m*C+f*_)*V,t[11]=(u*C-h*M-A*_)*V,t[12]=(o*y-a*w-l*v)*V,t[13]=(i*w-n*y+s*v)*V,t[14]=(m*b-p*S-g*_)*V,t[15]=(h*S-u*b+d*_)*V,this}scale(t){const i=this.elements,n=t.x,s=t.y,r=t.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,s))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),s=Math.sin(i),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,i,s,1,0,0,0,0,1),this}compose(t,i,n){const s=this.elements,r=i._x,a=i._y,o=i._z,l=i._w,c=r+r,h=a+a,u=o+o,d=r*c,A=r*h,p=r*u,m=a*h,g=a*u,f=o*u,_=l*c,b=l*h,C=l*u,S=n.x,M=n.y,T=n.z;return s[0]=(1-(m+f))*S,s[1]=(A+C)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(A-C)*M,s[5]=(1-(d+f))*M,s[6]=(g+_)*M,s[7]=0,s[8]=(p+b)*T,s[9]=(g-_)*T,s[10]=(1-(d+m))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,i,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),i.identity(),this;let a=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);const c=1/a,h=1/o,u=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,i.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(t,i,n,s,r,a,o=Mi,l=!1){const c=this.elements,h=2*r/(i-t),u=2*r/(n-s),d=(i+t)/(i-t),A=(n+s)/(n-s);let p,m;if(l)p=r/(a-r),m=a*r/(a-r);else if(o===Mi)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===js)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=A,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,s,r,a,o=Mi,l=!1){const c=this.elements,h=2/(i-t),u=2/(n-s),d=-(i+t)/(i-t),A=-(n+s)/(n-s);let p,m;if(l)p=1/(a-r),m=a/(a-r);else if(o===Mi)p=-2/(a-r),m=-(a+r)/(a-r);else if(o===js)p=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=A,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}};lh.prototype.isMatrix4=!0;var pe=lh,is=new B,ui=new pe,gp=new B(0,0,0),mp=new B(1,1,1),rn=new B,Vr=new B,jt=new B,ch=new pe,hh=new di,Gi=class qA{constructor(t=0,i=0,n=0,s=qA.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,s=this._order){return this._x=t,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],A=s[10];switch(i){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,A),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,A),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,A),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return hh.setFromEuler(this),this.setFromQuaternion(hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var dh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_p=0,uh=new B,ns=new di,Hi=new pe,zr=new B,$s=new B,vp=new B,bp=new di,Ah=new B(1,0,0),fh=new B(0,1,0),ph=new B(0,0,1),gh={type:"added"},Ep={type:"removed"},ss={type:"childadded",child:null},Xo={type:"childremoved",child:null},Et=class Ya extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ya.DEFAULT_UP.clone();const t=new B,i=new Gi,n=new di,s=new B(1,1,1);function r(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Qe}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ya.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ya.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ns.setFromAxisAngle(t,i),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,i){return ns.setFromAxisAngle(t,i),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,i){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?zr.copy(t):zr.set(t,i,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt($s,zr,this.up):Hi.lookAt(zr,$s,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Hi),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gh),ss.child=t,this.dispatchEvent(ss),ss.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ep),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,i);if(r!==void 0)return r}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=i-r[0]*i-r[4]*n-r[8]*s,r[13]+=n-r[1]*i-r[5]*n-r[9]*s,r[14]+=s-r[2]*i-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(i){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),A=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),A.length>0&&(n.animations=A),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}};Et.DEFAULT_UP=new B(0,1,0),Et.DEFAULT_MATRIX_AUTO_UPDATE=!0,Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cp={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const d of e.hand.values()){const A=t.getJointPose(d,i),p=this._getHandJoint(l,d);A!==null&&(p.matrix.fromArray(A.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=A.radius),p.visible=A!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position);l.inputState.pinching&&u>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function jo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=ko(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=jo(r,s,e+1/3),this.g=jo(r,s,e),this.b=jo(r,s,e-1/3)}return Ve.colorSpaceToWorking(this,n),this}setStyle(e,t=pt){function i(s){s!==void 0&&parseFloat(s)<1&&ve("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ve("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const i=mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Ve.workingToColorSpace(Pt.copy(this),e),Math.round(He(Pt.r*255,0,255))*65536+Math.round(He(Pt.g*255,0,255))*256+Math.round(He(Pt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,n=Pt.g,s=Pt.b,r=Math.max(i,n,s),a=Math.min(i,n,s);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case i:o=(n-s)/h+(n<s?6:0);break;case n:o=(s-i)/h+2;break;case s:o=(i-n)/h+4}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=pt){Ve.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,n=Pt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Wr);const i=Zs(an.h,Wr.h,t),n=Zs(an.s,Wr.s,t),s=Zs(an.l,Wr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Le;Le.NAMES=mh;var _h=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ai=new B,Vi=new B,Jo=new B,zi=new B,rs=new B,as=new B,vh=new B,Yo=new B,Zo=new B,$o=new B,el=new lt,tl=new lt,il=new lt,er=class Ps{constructor(t=new B,i=new B,n=new B){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,s){s.subVectors(n,i),Ai.subVectors(t,i),s.cross(Ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,i,n,s,r){Ai.subVectors(s,i),Vi.subVectors(n,i),Jo.subVectors(t,i);const a=Ai.dot(Ai),o=Ai.dot(Vi),l=Ai.dot(Jo),c=Vi.dot(Vi),h=Vi.dot(Jo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,A=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-A-p,p,A)}static containsPoint(t,i,n,s){return this.getBarycoord(t,i,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,i,n,s,r,a,o,l){return this.getBarycoord(t,i,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(t,i,n,s,r,a){return el.setScalar(0),tl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,i),tl.fromBufferAttribute(t,n),il.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(el,r.x),a.addScaledVector(tl,r.y),a.addScaledVector(il,r.z),a}static isFrontFacing(t,i,n,s){return Ai.subVectors(n,i),Vi.subVectors(t,i),Ai.cross(Vi).dot(s)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,s){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,i,n,s){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),Ai.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ps.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ps.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,s,r){return Ps.getInterpolation(t,this.a,this.b,this.c,i,n,s,r)}containsPoint(t){return Ps.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ps.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),Yo.subVectors(t,n);const l=rs.dot(Yo),c=as.dot(Yo);if(l<=0&&c<=0)return i.copy(n);Zo.subVectors(t,s);const h=rs.dot(Zo),u=as.dot(Zo);if(h>=0&&u<=h)return i.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),i.copy(n).addScaledVector(rs,a);$o.subVectors(t,r);const A=rs.dot($o),p=as.dot($o);if(p>=0&&A<=p)return i.copy(r);const m=A*c-l*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),i.copy(n).addScaledVector(as,o);const g=h*p-A*u;if(g<=0&&u-h>=0&&A-p>=0)return vh.subVectors(r,s),o=(u-h)/(u-h+(A-p)),i.copy(s).addScaledVector(vh,o);const f=1/(g+m+d);return a=m*f,o=d*f,i.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,pi):pi.fromBufferAttribute(s,r),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Xr.subVectors(this.max,tr),os.subVectors(e.a,tr),ls.subVectors(e.b,tr),cs.subVectors(e.c,tr),on.subVectors(ls,os),ln.subVectors(cs,ls),Tn.subVectors(os,cs);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Tn.z,Tn.y,on.z,0,-on.x,ln.z,0,-ln.x,Tn.z,0,-Tn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Tn.y,Tn.x,0];return!nl(t,os,ls,cs,Xr)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,os,ls,cs,Xr))?!1:(Kr.crossVectors(on,ln),t=[Kr.x,Kr.y,Kr.z],nl(t,os,ls,cs,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new B,new B,new B,new B,new B,new B,new B,new B],pi=new B,qr=new fi,os=new B,ls=new B,cs=new B,on=new B,ln=new B,Tn=new B,tr=new B,Xr=new B,Kr=new B,wn=new B;function nl(e,t,i,n,s){for(let r=0,a=e.length-3;r<=a;r+=3){wn.fromArray(e,r);const o=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),l=t.dot(wn),c=i.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ct=new B,jr=new je,Ip=0,ct=class extends li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qo,this.updateRanges=[],this.gpuType=wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},bh=class extends ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Eh=class extends ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}},gi=class extends ct{constructor(e,t,i){super(new Float32Array(e),t,i)}},yp=new fi,ir=new B,sl=new B,Jt=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ir,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(sl)),this.expandByPoint(ir.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sp=0,ei=new pe,rl=new Et,hs=new B,Yt=new fi,nr=new fi,Tt=new B,ti=class XA extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?Eh:bh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,i,n){return ei.makeTranslation(t,i,n),this.applyMatrix4(ei),this}scale(t,i,n){return ei.makeScale(t,i,n),this.applyMatrix4(ei),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(t.length,i.count);for(let s=0;s<n;s++){const r=t[s];i.setXYZ(s,r.x,r.y,r.z||0)}t.length>i.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){const r=i[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){const o=i[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Yt.min,nr.min),Yt.expandByPoint(Tt),Tt.addVectors(Yt.max,nr.max),Yt.expandByPoint(Tt)):(Yt.expandByPoint(nr.min),Yt.expandByPoint(nr.max))}Yt.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Tt.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Tt));if(i)for(let r=0,a=i.length;r<a;r++){const o=i[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),Tt.add(hs)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,s=i.normal,r=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new B,l[v]=new B;const c=new B,h=new B,u=new B,d=new je,A=new je,p=new je,m=new B,g=new B;function f(v,y,N){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,v),A.fromBufferAttribute(r,y),p.fromBufferAttribute(r,N),h.sub(c),u.sub(c),A.sub(d),p.sub(d);const w=1/(A.x*p.y-p.x*A.y);isFinite(w)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-A.y).multiplyScalar(w),g.copy(u).multiplyScalar(A.x).addScaledVector(h,-p.x).multiplyScalar(w),o[v].add(m),o[y].add(m),o[N].add(m),l[v].add(g),l[y].add(g),l[N].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let v=0,y=_.length;v<y;++v){const N=_[v],w=N.start,z=N.count;for(let F=w,Q=w+z;F<Q;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new B,C=new B,S=new B,M=new B;function T(v){S.fromBufferAttribute(s,v),M.copy(S);const y=o[v];b.copy(y),b.sub(S.multiplyScalar(S.dot(y))).normalize(),C.crossVectors(M,y);const N=C.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,N)}for(let v=0,y=_.length;v<y;++v){const N=_[v],w=N.start,z=N.count;for(let F=w,Q=w+z;F<Q;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let d=0,A=n.count;d<A;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,A=t.count;d<A;d+=3){const p=t.getX(d+0),m=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(i,p),r.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,A=i.count;d<A;d+=3)s.fromBufferAttribute(i,d+0),r.fromBufferAttribute(i,d+1),a.fromBufferAttribute(i,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)Tt.fromBufferAttribute(t,i),Tt.normalize(),t.setXYZ(i,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let A=0,p=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?A=l[m]*o.data.stride+o.offset:A=l[m]*h;for(let f=0;f<h;f++)d[p++]=c[A++]}return new ct(d,h,u)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new XA,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);i.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],A=t(d,n);l.push(A)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const A=c[u];h.push(A.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(i))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,A=u.length;d<A;d++)h.push(u[d].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ch=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kt=new B,Ih=class KA{constructor(t,i,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,n=this.data.count;i<n;i++)kt.fromBufferAttribute(this,i),kt.applyMatrix4(t),this.setXYZ(i,kt.x,kt.y,kt.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)kt.fromBufferAttribute(this,i),kt.applyNormalMatrix(t),this.setXYZ(i,kt.x,kt.y,kt.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)kt.fromBufferAttribute(this,i),kt.transformDirection(t),this.setXYZ(i,kt.x,kt.y,kt.z);return this}getComponent(t,i){let n=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,i,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[t*this.data.stride+this.offset+i]=n,this}setX(t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=hi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=hi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=hi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=hi(i,this.array)),i}setXY(t,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=nt(i,this.array),n=nt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this}setXYZ(t,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=nt(i,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,i,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=nt(i,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)i.push(this.data.array[s+r])}return new ct(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new KA(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)i.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xp=0,mi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=zn,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=to,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Wn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ve(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zn&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eo&&(i.blendSrc=this.blendSrc),this.blendDst!==to&&(i.blendDst=this.blendDst),this.blendEquation!==Cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const a in s){const o=s[a];delete o.metadata,r.push(o)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qi=new B,al=new B,Jr=new B,cn=new B,ol=new B,Yr=new B,ll=new B,Bn=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){al.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(al);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Jr),a=cn.dot(this.direction),o=-cn.dot(Jr),l=cn.lengthSq(),c=Math.abs(1-r*r);let h,u,d,A;if(c>0)if(h=r*o-a,u=r*a-o,A=s*c,h>=0)if(u>=-A)if(u<=A){const p=1/c;h*=p,u*=p,d=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u=-s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-A?(h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l):u<=A?(h=0,u=Math.min(Math.max(-s,-o),s),d=u*(u+2*o)+l):(h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l);else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(al).addScaledVector(Jr,u),d}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),n=qi.dot(qi)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),a=i-r,o=i+r;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l),c>=0?(s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),h>=0?(a=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,n,s){ol.subVectors(t,e),Yr.subVectors(i,e),ll.crossVectors(ol,Yr);let r=this.direction.dot(ll),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;cn.subVectors(this.origin,e);const o=a*this.direction.dot(Yr.crossVectors(cn,Yr));if(o<0)return null;const l=a*this.direction.dot(ol.cross(cn));if(l<0||o+l>r)return null;const c=-a*cn.dot(ll);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yh=new pe,Dn=new Bn,Zr=new Jt,Sh=new B,$r=new B,ea=new B,ta=new B,cl=new B,ia=new B,xh=new B,na=new B,It=class extends Et{constructor(e=new ti,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const r=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){ia.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const c=a[o],h=s[o];c!==0&&(cl.fromBufferAttribute(h,e),r?ia.addScaledVector(cl,c):ia.addScaledVector(cl.sub(t),c))}t.add(ia)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Dn.copy(e.ray).recast(e.near),!(Zr.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(Zr,Sh)===null||Dn.origin.distanceToSquared(Sh)>(e.far-e.near)**2))&&(yh.copy(s).invert(),Dn.copy(e.ray).applyMatrix4(yh),!(i.boundingBox!==null&&Dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(r))for(let A=0,p=u.length;A<p;A++){const m=u[A],g=r[m.materialIndex],f=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=f,C=_;b<C;b+=3){const S=a.getX(b),M=a.getX(b+1),T=a.getX(b+2);n=sa(this,g,e,i,l,c,h,S,M,T),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const A=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let m=A,g=p;m<g;m+=3){const f=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);n=sa(this,r,e,i,l,c,h,f,_,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let A=0,p=u.length;A<p;A++){const m=u[A],g=r[m.materialIndex],f=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=f,C=_;b<C;b+=3){const S=b,M=b+1,T=b+2;n=sa(this,g,e,i,l,c,h,S,M,T),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const A=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let m=A,g=p;m<g;m+=3){const f=m,_=m+1,b=m+2;n=sa(this,r,e,i,l,c,h,f,_,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Mp(e,t,i,n,s,r,a,o){let l;if(t.side===Nt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ni,o),l===null)return null;na.copy(o),na.applyMatrix4(e.matrixWorld);const c=i.ray.origin.distanceTo(na);return c<i.near||c>i.far?null:{distance:c,point:na.clone(),object:e}}function sa(e,t,i,n,s,r,a,o,l,c){e.getVertexPosition(o,$r),e.getVertexPosition(l,ea),e.getVertexPosition(c,ta);const h=Mp(e,t,i,n,$r,ea,ta,xh);if(h){const u=new B;er.getBarycoord(xh,$r,ea,ta,u),s&&(h.uv=er.getInterpolatedAttribute(s,o,l,c,u,new je)),r&&(h.uv1=er.getInterpolatedAttribute(r,o,l,c,u,new je)),a&&(h.normal=er.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};er.getNormal($r,ea,ta,d.normal),h.face=d,h.barycoord=u}return h}var sr=new lt,Mh=new lt,Th=new lt,Tp=new lt,wh=new pe,ra=new B,hl=new Jt,Bh=new pe,dl=new Bn,wp=class extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qc,this.bindMatrix=new pe,this.bindMatrixInverse=new pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingSphere.expandByPoint(ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(n),e.ray.intersectsSphere(hl)!==!1&&(Bh.copy(n).invert(),dl.copy(e.ray).applyMatrix4(Bh),!(this.boundingBox!==null&&dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Mh.fromBufferAttribute(n.attributes.skinIndex,e),Th.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(sr.copy(t),t.set(0,0,0,0)):(sr.set(...t,1),t.set(0,0,0)),sr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const r=Th.getComponent(s);if(r!==0){const a=Mh.getComponent(s);wh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Tp.copy(sr).applyMatrix4(wh),r)}}return t.isVector4&&(t.w=sr.w),t.applyMatrix4(this.bindMatrixInverse)}},Rh=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},aa=class extends Ot{constructor(e=null,t=1,i=1,n,s,r,a,o,l=_t,c=_t,h,u){super(null,r,a,o,l,c,n,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dh=new pe,Bp=new pe,Rp=class jA{constructor(t=[],i=[]){this.uuid=ci(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new pe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){const n=new pe;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,i=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Bp;Dh.multiplyMatrices(o,i[r]),Dh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new jA(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const i=new Float32Array(t*t*4);i.set(this.boneMatrices);const n=new aa(i,t,t,St,wt);return n.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=n,this}getBoneByName(t){for(let i=0,n=this.bones.length;i<n;i++){const s=this.bones[i];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=i[r];a===void 0&&(ve("Skeleton: No bone found with UUID:",r),a=new Rh),this.bones.push(a),this.boneInverses.push(new pe().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const i=this.bones,n=this.boneInverses;for(let s=0,r=i.length;s<r;s++){const a=i[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}},ul=class extends ct{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ds=new pe,Lh=new pe,oa=[],Ph=new fi,Dp=new pe,rr=new It,ar=new Jt,Al=class extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ul(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Dp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Ph.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Ph)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),ar.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let r=0;r<i.length;r++)i[r]=n[s+r]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),e.ray.intersectsSphere(ar)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ds),Lh.multiplyMatrices(i,ds),rr.matrixWorld=Lh,rr.raycast(e,oa);for(let r=0,a=oa.length;r<a;r++){const o=oa[r];o.instanceId=s,o.object=this,t.push(o)}oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(n*this.count),n,this.count,sn,wt));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,o=n*e;return s[o]=a,s.set(i,o+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fl=new B,Lp=new B,Pp=new Qe,hn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=fl.subVectors(i,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pp.getNormalMatrix(e),n=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ln=new Jt,Fp=new je(.5,.5),la=new B,ca=class{constructor(e=new hn,t=new hn,i=new hn,n=new hn,s=new hn,r=new hn){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi,i=!1){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],A=s[8],p=s[9],m=s[10],g=s[11],f=s[12],_=s[13],b=s[14],C=s[15];if(n[0].setComponents(l-r,d-c,g-A,C-f).normalize(),n[1].setComponents(l+r,d+c,g+A,C+f).normalize(),n[2].setComponents(l+a,d+h,g+p,C+_).normalize(),n[3].setComponents(l-a,d-h,g-p,C-_).normalize(),i)n[4].setComponents(o,u,m,b).normalize(),n[5].setComponents(l-o,d-u,g-m,C-b).normalize();else if(n[4].setComponents(l-o,d-u,g-m,C-b).normalize(),t===Mi)n[5].setComponents(l+o,d+u,g+m,C+b).normalize();else if(t===js)n[5].setComponents(o,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476+Fp.distanceTo(e.center),Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(la.x=n.normal.x>0?e.max.x:e.min.x,la.y=n.normal.y>0?e.max.y:e.min.y,la.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fh=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new B,da=new B,Uh=new pe,or=new Bn,ua=new Jt,pl=new B,Nh=new B,gl=class extends Et{constructor(e=new ti,t=new Fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)ha.fromBufferAttribute(t,n-1),da.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ha.distanceTo(da);e.setAttribute("lineDistance",new gi(i,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(n),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;Uh.copy(n).invert(),or.copy(e.ray).applyMatrix4(Uh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let A=u,p=d-1;A<p;A+=l){const m=c.getX(A),g=c.getX(A+1),f=Aa(this,e,or,o,m,g,A);f&&t.push(f)}if(this.isLineLoop){const A=c.getX(d-1),p=c.getX(u),m=Aa(this,e,or,o,A,p,d-1);m&&t.push(m)}}else{const u=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let A=u,p=d-1;A<p;A+=l){const m=Aa(this,e,or,o,A,A+1,A);m&&t.push(m)}if(this.isLineLoop){const A=Aa(this,e,or,o,d-1,u,d-1);A&&t.push(A)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const r=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=n}}}}};function Aa(e,t,i,n,s,r,a){const o=e.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),i.distanceSqToSegment(ha,da,pl,Nh)>n)return;pl.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(pl);if(!(l<t.near||l>t.far))return{distance:l,point:Nh.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var Qh=new B,Oh=new B,Up=class extends gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Qh.fromBufferAttribute(t,n),Oh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Qh.distanceTo(Oh);e.setAttribute("lineDistance",new gi(i,1))}else ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Np=class extends gl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ml=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kh=new pe,_l=new Bn,fa=new Jt,pa=new B,Gh=class extends Et{constructor(e=new ti,t=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(n),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;kh.copy(n).invert(),_l.copy(e.ray).applyMatrix4(kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,c=i.attributes.position;if(l!==null){const h=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let d=h,A=u;d<A;d++){const p=l.getX(d);pa.fromBufferAttribute(c,p),Hh(pa,p,o,n,e,t,this)}}else{const h=Math.max(0,r.start),u=Math.min(c.count,r.start+r.count);for(let d=h,A=u;d<A;d++)pa.fromBufferAttribute(c,d),Hh(pa,d,o,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const r=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=n}}}}};function Hh(e,t,i,n,s,r,a){const o=_l.distanceSqToPoint(e);if(o<i){const l=new B;_l.closestPointToPoint(e,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ga=class extends Ot{constructor(e,t,i,n,s,r,a,o,l,c,h,u){super(null,r,a,o,l,c,n,s,h,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Qp=class extends ga{constructor(e,t,i,n,s,r){super(e,t,i,s,r),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=ai,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Op=class extends ga{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,nn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Vh=class extends Ot{constructor(e=[],t=nn,i,n,s,r,a,o,l,c){super(e,t,i,n,s,r,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},us=class extends Ot{constructor(e,t,i=Si,n,s,r,a=_t,o=_t,l,c=Oi,h=1){if(c!==Oi&&c!==yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:h},n,s,r,a,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kp=class extends us{constructor(e,t=Si,i=nn,n,s,r=_t,a=_t,o,l=Oi){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,s,r,a,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zh=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ma=class JA extends ti{constructor(t=1,i=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,A=0;p("z","y","x",-1,-1,n,i,t,a,r,0),p("z","y","x",1,-1,n,i,-t,a,r,1),p("x","z","y",1,1,t,n,i,s,a,2),p("x","z","y",1,-1,t,n,-i,s,a,3),p("x","y","z",1,-1,t,i,n,s,r,4),p("x","y","z",-1,-1,t,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(h,3)),this.setAttribute("uv",new gi(u,2));function p(m,g,f,_,b,C,S,M,T,v,y){const N=C/T,w=S/v,z=C/2,F=S/2,Q=M/2,V=T+1,G=v+1;let U=0,j=0;const $=new B;for(let ie=0;ie<G;ie++){const fe=ie*w-F;for(let be=0;be<V;be++)$[m]=(be*N-z)*_,$[g]=fe*b,$[f]=Q,c.push($.x,$.y,$.z),$[m]=0,$[g]=0,$[f]=M>0?1:-1,h.push($.x,$.y,$.z),u.push(be/T),u.push(1-ie/v),U+=1}for(let ie=0;ie<v;ie++)for(let fe=0;fe<T;fe++){const be=d+fe+V*ie,qe=d+fe+V*(ie+1),ze=d+(fe+1)+V*(ie+1),X=d+(fe+1)+V*ie;l.push(be,qe,X),l.push(qe,ze,X),j+=6}o.addGroup(A,j,y),A+=j,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new JA(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wh=class YA extends ti{constructor(t=1,i=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:s};const r=t/2,a=i/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=i/l,A=[],p=[],m=[],g=[];for(let f=0;f<h;f++){const _=f*d-a;for(let b=0;b<c;b++){const C=b*u-r;p.push(C,-_,0),m.push(0,0,1),g.push(b/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const b=_+c*f,C=_+c*(f+1),S=_+1+c*(f+1),M=_+1+c*f;A.push(b,C,M),A.push(C,S,M)}this.setIndex(A),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(m,3)),this.setAttribute("uv",new gi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new YA(t.width,t.height,t.widthSegments,t.heightSegments)}};function As(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const s=e[i][n];if(qh(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=s.clone();else if(Array.isArray(s))if(qh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[i][n]=r}else t[i][n]=s.slice();else t[i][n]=s}}return t}function Gt(e){const t={};for(let i=0;i<e.length;i++){const n=As(e[i]);for(const s in n)t[s]=n[s]}return t}function qh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Gp(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Xh(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}var Hp={clone:As,merge:Gt},Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Wp=class extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lr=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ri=class extends lr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},qp=class extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=co,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xp=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kp=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _a(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function jp(e){function t(s,r){return e[s]-e[r]}const i=e.length,n=new Array(i);for(let s=0;s!==i;++s)n[s]=s;return n.sort(t),n}function Kh(e,t,i){const n=e.length,s=new e.constructor(n);for(let r=0,a=0;a!==n;++r){const o=i[r]*t;for(let l=0;l!==t;++l)s[a++]=e[o+l]}return s}function jh(e,t,i,n){let s=1,r=e[0];for(;r!==void 0&&r[n]===void 0;)r=e[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),i.push(...a)),r=e[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(i,i.length)),r=e[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),i.push(a)),r=e[s++];while(r!==void 0)}var fs=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let r;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let o=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=s,s=t[--i-1],e>=s)break e}r=i,i=0;break t}break i}for(;i<r;){const a=i+r>>>1;e<t[a]?r=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jp=class extends fs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,a=n[s],o=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:s=e,a=2*t-i;break;case qc:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Wc:r=e,o=2*i-t;break;case qc:r=1,o=i+n[1]-n[0];break;default:r=e-1,o=t}const l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-i),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,A=(i-t)/(n-t),p=A*A,m=p*A,g=-u*m+2*u*p-u*A,f=(1+u)*m+(-1.5-2*u)*p+(-.5+u)*A+1,_=(-1-d)*m+(1.5+d)*p+.5*A,b=d*m-d*p;for(let C=0;C!==a;++C)s[C]=g*r[c+C]+f*r[l+C]+_*r[o+C]+b*r[h+C];return s}},Yp=class extends fs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(i-t)/(n-t),h=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*h+r[o+u]*c;return s}},Zp=class extends fs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},$p=class extends fs{interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.settings||this.DefaultSettings_,h=c.inTangents,u=c.outTangents;if(!h||!u){const p=(i-t)/(n-t),m=1-p;for(let g=0;g!==a;++g)s[g]=r[l+g]*m+r[o+g]*p;return s}const d=a*2,A=e-1;for(let p=0;p!==a;++p){const m=r[l+p],g=r[o+p],f=A*d+p*2,_=u[f],b=u[f+1],C=e*d+p*2,S=h[C],M=h[C+1];let T=(i-t)/(n-t),v,y,N,w,z;for(let F=0;F<8;F++){v=T*T,y=v*T,N=1-T,w=N*N,z=w*N;const Q=z*t+3*w*T*_+3*N*v*S+y*n-i;if(Math.abs(Q)<1e-10)break;const V=3*w*(_-t)+6*N*T*(S-_)+3*v*(n-S);if(Math.abs(V)<1e-10)break;T=T-Q/V,T=Math.max(0,Math.min(1,T))}s[p]=z*m+3*w*T*b+3*N*v*M+y*g}return s}},_i=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new $p(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break;case Vc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Po;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(we("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){we("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){we("KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(n!==void 0&&Wf(n))for(let a=0,o=n.length;a!==o;++a){const l=n[a];if(isNaN(l)){we("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Po,s=e.length-1;let r=1;for(let a=1;a<s;++a){let o=!1;const l=e[a];if(l!==e[a+1]&&(a!==1||l!==e[0]))if(n)o=!0;else{const c=a*i,h=c-i,u=c+i;for(let d=0;d!==i;++d){const A=t[c+d];if(A!==t[h+d]||A!==t[u+d]){o=!0;break}}}if(o){if(a!==r){e[r]=e[a];const c=a*i,h=r*i;for(let u=0;u!==i;++u)t[h+u]=t[c+u]}++r}}if(s>0){e[r]=e[s];for(let a=s*i,o=r*i,l=0;l!==i;++l)t[o+l]=t[a+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};_i.prototype.ValueTypeName="",_i.prototype.TimeBufferType=Float32Array,_i.prototype.ValueBufferType=Float32Array,_i.prototype.DefaultInterpolation=Ks;var ps=class extends _i{constructor(e,t,i){super(e,t,i)}};ps.prototype.ValueTypeName="bool",ps.prototype.ValueBufferType=Array,ps.prototype.DefaultInterpolation=Xs,ps.prototype.InterpolantFactoryMethodLinear=void 0,ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Jh=class extends _i{constructor(e,t,i,n){super(e,t,i,n)}};Jh.prototype.ValueTypeName="color";var gs=class extends _i{constructor(e,t,i,n){super(e,t,i,n)}};gs.prototype.ValueTypeName="number";var eg=class extends fs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t);let l=e*a;for(let c=l+a;l!==c;l+=4)di.slerpFlat(s,0,r,l-a,r,l,o);return s}},ms=class extends _i{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new eg(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName="quaternion",ms.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends _i{constructor(e,t,i){super(e,t,i)}};_s.prototype.ValueTypeName="string",_s.prototype.ValueBufferType=Array,_s.prototype.DefaultInterpolation=Xs,_s.prototype.InterpolantFactoryMethodLinear=void 0,_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends _i{constructor(e,t,i,n){super(e,t,i,n)}};vs.prototype.ValueTypeName="vector";var tg=class{constructor(e="",t=-1,i=[],n=Pf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ci(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,a=i.length;r!==a;++r)t.push(ng(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=i.length;s!==r;++s)t.push(_i.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let a=0;a<s;a++){let o=[],l=[];o.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const c=jp(o);o=Kh(o,1,c),l=Kh(l,1,c),!n&&o[0]===0&&(o.push(s),l.push(l[0])),r.push(new gs(".morphTargetInfluences["+t[a].name+"]",o,l).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.name.match(s);if(c&&c.length>1){const h=c[1];let u=n[h];u||(n[h]=u=[]),u.push(l)}}const r=[];for(const a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return r}static parseAnimation(e,t){if(ve("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return we("AnimationClip: No animation in JSONLoader data."),null;const i=function(c,h,u,d,A){if(u.length!==0){const p=[],m=[];jh(u,p,m,d),p.length!==0&&A.push(new c(h,p,m))}},n=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let o=e.length||-1;const l=e.hierarchy||[];for(let c=0;c<l.length;c++){const h=l[c].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const u={};let d=0;for(;d<h.length;d++)if(h[d].morphTargets)for(let A=0;A<h[d].morphTargets.length;A++)u[h[d].morphTargets[A]]=-1;for(const A in u){const p=[],m=[];for(let g=0;g!==h[d].morphTargets.length;++g){const f=h[d];p.push(f.time),m.push(f.morphTarget===A?1:0)}n.push(new gs(".morphTargetInfluence["+A+"]",p,m))}o=u.length*r}else{const u=".bones["+t[c].name+"]";i(vs,u+".position",h,"pos",n),i(ms,u+".quaternion",h,"rot",n),i(vs,u+".scale",h,"scl",n)}}return n.length===0?null:new this(s,o,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ig(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Jh;case"quaternion":return ms;case"bool":case"boolean":return ps;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function ng(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ig(e.type);if(e.times===void 0){const i=[],n=[];jh(e.keys,i,n,"value"),e.times=i,e.values=n}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}var Xi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Yh(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Yh(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Yh(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Zh=class{constructor(e,t,i){const n=this;let s=!1,r=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,s===!1&&n.onStart!==void 0&&n.onStart(c,r,a),s=!0},this.itemEnd=function(c){r++,n.onProgress!==void 0&&n.onProgress(c,r,a),r===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){const d=l[h],A=l[h+1];if(d.global&&(d.lastIndex=0),d.test(c))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cr=new Zh,dn=class{constructor(e){this.manager=e!==void 0?e:cr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},sg=class extends Error{constructor(e,t){super(e),this.response=t}},Pn=class extends dn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:i,onError:n});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:i,onError:n});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Ki[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,A=d!==0;let p=0;const m=new ReadableStream({start(g){f();function f(){h.read().then(({done:_,value:b})=>{if(_)g.close();else{p+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:A,loaded:p,total:d});for(let S=0,M=c.length;S<M;S++){const T=c[S];T.onProgress&&T.onProgress(C)}g.enqueue(b),f()}},_=>{g.error(_)})}}});return new Response(m)}else throw new sg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),h=c&&c[1]?c[1].toLowerCase():void 0,u=new TextDecoder(h);return l.arrayBuffer().then(d=>u.decode(d))}}}).then(l=>{Xi.add(`file:${e}`,l);const c=Ki[e];delete Ki[e];for(let h=0,u=c.length;h<u;h++){const d=c[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const c=Ki[e];if(c===void 0)throw this.manager.itemError(e),l;delete Ki[e];for(let h=0,u=c.length;h<u;h++){const d=c[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},bs=new WeakMap,rg=class extends dn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xi.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let h=bs.get(r);h===void 0&&(h=[],bs.set(r,h)),h.push({onLoad:t,onError:n})}return r}const a=Js("img");function o(){c(),t&&t(this);const h=bs.get(this)||[];for(let u=0;u<h.length;u++){const d=h[u];d.onLoad&&d.onLoad(this)}bs.delete(this),s.manager.itemEnd(e)}function l(h){c(),n&&n(h),Xi.remove(`image:${e}`);const u=bs.get(this)||[];for(let d=0;d<u.length;d++){const A=u[d];A.onError&&A.onError(h)}bs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}},$h=class extends dn{constructor(e){super(e)}load(e,t,i,n){const s=new Ot,r=new rg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},va=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vl=new pe,ed=new B,td=new B,bl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Ue,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===js||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ba=new B,Ea=new di,Di=new B,id=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,Ea,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ba,Ea,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},un=new B,nd=new je,sd=new je,Ft=class extends id{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $n*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,nd,sd),t.subVectors(sd,nd)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const o=r.fullWidth,l=r.fullHeight;s+=r.offsetX*n/o,t-=r.offsetY*i/l,n*=r.width/o,i*=r.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ag=class extends bl{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=$n*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},og=class extends va{constructor(e,t,i=0,n=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new ag}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},lg=class extends bl{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},rd=class extends va{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new lg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ca=class extends id{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cg=class extends bl{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hg=class extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new cg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},dg=class extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},hr=class{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},El=new WeakMap,Cl=class extends dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xi.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{El.has(r)===!0?(n&&n(El.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const o=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Xi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),El.set(o,l),Xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,o),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Es=-90,Cs=1,ug=class extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ft(Es,Cs,e,t);n.layers=this.layers,this.add(n);const s=new Ft(Es,Cs,e,t);s.layers=this.layers,this.add(s);const r=new Ft(Es,Cs,e,t);r.layers=this.layers,this.add(r);const a=new Ft(Es,Cs,e,t);a.layers=this.layers,this.add(a);const o=new Ft(Es,Cs,e,t);o.layers=this.layers,this.add(o);const l=new Ft(Es,Cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,a,o]=t;for(const l of t)this.remove(l);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=A,i.texture.needsPMREMUpdate=!0}},Ag=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fg="\\[\\]\\.:\\/",pg=new RegExp("[\\[\\]\\.:\\/]","g"),Il="[^\\[\\]\\.:\\/]",gg="[^"+fg.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",Il),_g=/(WCOD+)?/.source.replace("WCOD",gg),vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),Eg=new RegExp("^"+mg+_g+vg+bg+"$"),Cg=["material","materials","bones","map"],Ig=class{constructor(e,t,i){const n=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class Fs{constructor(t,i,n){this.path=i,this.parsedPath=n||Fs.parseTrackName(i),this.node=Fs.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new Fs.Composite(t,i,n):new Fs(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(t){const i=Eg.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Cg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===i||o.uuid===i)return o;const l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[i++]=n[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,n=i.objectName,s=i.propertyName;let r=i.propertyIndex;if(t||(t=Fs.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=i.nodeName;we("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Ig,ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray],ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yg=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Sg=class{constructor(t,i,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let n=0;n<4;n++)this.elements[n]=t[n+i];return this}set(t,i,n,s){const r=this.elements;return r[0]=t,r[2]=i,r[1]=n,r[3]=s,this}};Sg.prototype.isMatrix2=!0;function xg(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function Mg(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function Tg(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function yl(e,t,i,n){const s=wg(n);switch(i){case Hc:return e*t;case sn:return e*t/s.components*s.byteLength;case mo:return e*t/s.components*s.byteLength;case $t:return e*t*2/s.components*s.byteLength;case _o:return e*t*2/s.components*s.byteLength;case Gs:return e*t*3/s.components*s.byteLength;case St:return e*t*4/s.components*s.byteLength;case vo:return e*t*4/s.components*s.byteLength;case Kn:case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Br:case xn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bo:case Hs:return Math.max(e,16)*Math.max(t,8)/4;case Rr:case jn:return Math.max(e,8)*Math.max(t,8)/2;case Dr:case Vs:case Lr:case Pr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case zs:case Ws:case Fr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Jn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case So:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case wo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Do:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Yn:case Lo:case Ur:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Nr:case Qr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qs:case Or:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wg(e){switch(e){case Ue:case kc:return{byteLength:1,components:1};case In:case Gc:case Dt:return{byteLength:2,components:1};case po:case go:return{byteLength:2,components:4};case Si:case fo:case wt:return{byteLength:4,components:1};case Tr:case wr:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}var Bg=class{static contain(e,t){return xg(e,t)}static cover(e,t){return Mg(e,t)}static fill(e){return Tg(e)}static getByteLength(e,t,i,n){return yl(e,t,i,n)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}})),typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);function ad(){let e=null,t=!1,i=null,n=null;function s(r,a){i(r,a),n=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){i=r},setContext:function(r){e=r}}}function Rg(e){const t=new WeakMap;function i(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,h),o.onUploadCallback();let A;if(c instanceof Float32Array)A=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)A=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?A=e.HALF_FLOAT:A=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)A=e.SHORT;else if(c instanceof Uint32Array)A=e.UNSIGNED_INT;else if(c instanceof Int32Array)A=e.INT;else if(c instanceof Int8Array)A=e.BYTE;else if(c instanceof Uint8Array)A=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)A=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:A,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(e.bindBuffer(c,o),u.length===0)e.bufferSubData(c,0,h);else{u.sort((A,p)=>A.start-p.start);let d=0;for(let A=1;A<u.length;A++){const p=u[d],m=u[A];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++d,u[d]=m)}u.length=d+1;for(let A=0,p=u.length;A<p;A++){const m=u[A];e.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Oe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Li={basic:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Gt([ce.common,ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Gt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Li.physical={uniforms:Gt([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Ia={r:0,b:0,g:0},Dg=new pe,od=new Qe;od.set(-1,0,0,0,1,0,0,0,1);function Lg(e,t,i,n,s,r){const a=new Le(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function A(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){const C=_.backgroundBlurriness>0;b=t.get(b,C)}return b}function p(_){let b=!1;const C=A(_);C===null?g(a,o):C&&C.isColor&&(g(C,1),b=!0);const S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,b){const C=A(b);C&&(C.isCubeTexture||C.mapping===Sr)?(c===void 0&&(c=new It(new ma(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:As(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=C,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(b.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(od),c.material.toneMapped=Ve.getTransfer(C.colorSpace)!==it,(h!==C||u!==C.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,h=C,u=C.version,d=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new It(new Wh(2,2),new Bi({name:"BackgroundMaterial",uniforms:As(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(C.colorSpace)!==it,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||u!==C.version||d!==e.toneMapping)&&(l.material.needsUpdate=!0,h=C,u=C.version,d=e.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,b){_.getRGB(Ia,Xh(e)),i.buffers.color.setClear(Ia.r,Ia.g,Ia.b,b,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:m,dispose:f}}function Pg(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(w,z,F,Q,V){let G=!1;const U=u(w,Q,F,z);r!==U&&(r=U,c(r.object)),G=A(w,Q,F,V),G&&p(w,Q,F,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,C(w,z,F,Q),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function c(w){return e.bindVertexArray(w)}function h(w){return e.deleteVertexArray(w)}function u(w,z,F,Q){const V=Q.wireframe===!0;let G=n[z.id];G===void 0&&(G={},n[z.id]=G);const U=w.isInstancedMesh===!0?w.id:0;let j=G[U];j===void 0&&(j={},G[U]=j);let $=j[F.id];$===void 0&&($={},j[F.id]=$);let ie=$[V];return ie===void 0&&(ie=d(l()),$[V]=ie),ie}function d(w){const z=[],F=[],Q=[];for(let V=0;V<i;V++)z[V]=0,F[V]=0,Q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:Q,object:w,attributes:{},index:null}}function A(w,z,F,Q){const V=r.attributes,G=z.attributes;let U=0;const j=F.getAttributes();for(const $ in j)if(j[$].location>=0){const ie=V[$];let fe=G[$];if(fe===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;U++}return r.attributesNum!==U||r.index!==Q}function p(w,z,F,Q){const V={},G=z.attributes;let U=0;const j=F.getAttributes();for(const $ in j)if(j[$].location>=0){let ie=G[$];ie===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),V[$]=fe,U++}r.attributes=V,r.attributesNum=U,r.index=Q}function m(){const w=r.newAttributes;for(let z=0,F=w.length;z<F;z++)w[z]=0}function g(w){f(w,0)}function f(w,z){const F=r.newAttributes,Q=r.enabledAttributes,V=r.attributeDivisors;F[w]=1,Q[w]===0&&(e.enableVertexAttribArray(w),Q[w]=1),V[w]!==z&&(e.vertexAttribDivisor(w,z),V[w]=z)}function _(){const w=r.newAttributes,z=r.enabledAttributes;for(let F=0,Q=z.length;F<Q;F++)z[F]!==w[F]&&(e.disableVertexAttribArray(F),z[F]=0)}function b(w,z,F,Q,V,G,U){U===!0?e.vertexAttribIPointer(w,z,F,V,G):e.vertexAttribPointer(w,z,F,Q,V,G)}function C(w,z,F,Q){m();const V=Q.attributes,G=F.getAttributes(),U=z.defaultAttributeValues;for(const j in G){const $=G[j];if($.location>=0){let ie=V[j];if(ie===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),ie!==void 0){const fe=ie.normalized,be=ie.itemSize,qe=t.get(ie);if(qe===void 0)continue;const ze=qe.buffer,X=qe.type,ae=qe.bytesPerElement,Ee=X===e.INT||X===e.UNSIGNED_INT||ie.gpuType===fo;if(ie.isInterleavedBufferAttribute){const ue=ie.data,Me=ue.stride,Fe=ie.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<$.locationSize;Be++)f($.location+Be,ue.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<$.locationSize;Be++)g($.location+Be);e.bindBuffer(e.ARRAY_BUFFER,ze);for(let Be=0;Be<$.locationSize;Be++)b($.location+Be,be/$.locationSize,X,fe,Me*ae,(Fe+be/$.locationSize*Be)*ae,Ee)}else{if(ie.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)f($.location+ue,ie.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<$.locationSize;ue++)g($.location+ue);e.bindBuffer(e.ARRAY_BUFFER,ze);for(let ue=0;ue<$.locationSize;ue++)b($.location+ue,be/$.locationSize,X,fe,be*ae,be/$.locationSize*ue*ae,Ee)}}else if(U!==void 0){const fe=U[j];if(fe!==void 0)switch(fe.length){case 2:e.vertexAttrib2fv($.location,fe);break;case 3:e.vertexAttrib3fv($.location,fe);break;case 4:e.vertexAttrib4fv($.location,fe);break;default:e.vertexAttrib1fv($.location,fe)}}}}_()}function S(){y();for(const w in n){const z=n[w];for(const F in z){const Q=z[F];for(const V in Q){const G=Q[V];for(const U in G)h(G[U].object),delete G[U];delete Q[V]}}delete n[w]}}function M(w){if(n[w.id]===void 0)return;const z=n[w.id];for(const F in z){const Q=z[F];for(const V in Q){const G=Q[V];for(const U in G)h(G[U].object),delete G[U];delete Q[V]}}delete n[w.id]}function T(w){for(const z in n){const F=n[z];for(const Q in F){const V=F[Q];if(V[w.id]===void 0)continue;const G=V[w.id];for(const U in G)h(G[U].object),delete G[U];delete V[w.id]}}}function v(w){for(const z in n){const F=n[z],Q=w.isInstancedMesh===!0?w.id:0,V=F[Q];if(V!==void 0){for(const G in V){const U=V[G];for(const j in U)h(U[j].object),delete U[j];delete V[G]}delete F[Q],Object.keys(F).length===0&&delete n[z]}}}function y(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:g,disableUnusedAttributes:_}}function Fg(e,t,i){let n;function s(l){n=l}function r(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,h){h!==0&&(e.drawArraysInstanced(n,l,c,h),i.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];i.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ug(e,t,i,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==St&&n.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const v=T===Dt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ue&&n.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wt&&!v)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const h=l(c);h!==c&&(ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&d===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const A=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),C=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),M=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:A,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:C,maxSamples:S,samples:M}}function Ng(e){const t=this;let i=null,n=0,s=!1,r=!1;const a=new hn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const A=u.length!==0||d||n!==0||s;return s=d,n=u.length,A},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){i=h(u,d,0)},this.setState=function(u,d,A){const p=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,f=e.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const _=r?0:n,b=_*4;let C=f.clippingState||null;l.value=C,C=h(p,d,b,A);for(let S=0;S!==b;++S)C[S]=i[S];f.clippingState=C,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,A,p){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const f=A+m*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,C=A;b!==m;++b,C+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(g,C),g[C+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}var An=4,ld=[.125,.215,.35,.446,.526,.582],Is=20,Qg=256,dr=new Ca,cd=new Le,Sl=null,xl=0,Ml=0,Tl=!1,Og=new B,wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){const{size:r=256,position:a=Og}=s;Sl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,n,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,xl,Ml),this._renderer.xr.enabled=Tl,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dt,minFilter:dt,generateMipmaps:!1,type:Dt,format:St,colorSpace:Qt,depthBuffer:!1},n=hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kg(s)),this._blurMaterial=Hg(s,e,t),this._ggxMaterial=Gg(s,e,t)}return n}_compileMaterial(e){const t=new It(new ti,e);this._renderer.compile(t,dr)}_sceneToCubeUV(e,t,i,n,s){const r=new Ft(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(cd),l.toneMapping=yi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new ma,new Rn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,d=u.material;let A=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,A=!0):(d.color.copy(cd),A=!0);for(let m=0;m<6;m++){const g=m%3;g===0?(r.up.set(0,a[m],0),r.position.set(s.x,s.y,s.z),r.lookAt(s.x+o[m],s.y,s.z)):g===1?(r.up.set(0,0,a[m]),r.position.set(s.x,s.y,s.z),r.lookAt(s.x,s.y+o[m],s.z)):(r.up.set(0,a[m],0),r.position.set(s.x,s.y,s.z),r.lookAt(s.x,s.y,s.z+o[m]));const f=this._cubeSize;ys(n,g*f,m>2?f:0,f,f),l.setRenderTarget(n),A&&l.render(u,r),l.render(e,r)}l.toneMapping=h,l.autoClear=c,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===nn||e.mapping===qn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const a=s.uniforms;a.envMap.value=e;const o=this._cubeSize;ys(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(r,dr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[i];a.material=r;const o=r.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:u}=this,d=this._sizeLods[i],A=3*d*(i>u-An?i-u+An:0),p=4*(this._cubeSize-d);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=u-t,ys(s,A,p,3*d,2*d),n.setRenderTarget(s),n.render(a,dr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=u-i,ys(e,A,p,3*d,2*d),n.setRenderTarget(e),n.render(a,dr)}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,a){const o=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[n];h.material=l;const u=l.uniforms,d=this._sizeLods[i]-1,A=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,p=s/A,m=isFinite(s)?1+Math.floor(c*p):Is;m>Is&&ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const g=[];let f=0;for(let C=0;C<Is;++C){const S=C/p,M=Math.exp(-S*S/2);g.push(M),C===0?f+=M:C<m&&(f+=2*M)}for(let C=0;C<g.length;C++)g[C]=g[C]/f;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=A,u.mipInt.value=_-i;const b=this._sizeLods[n];ys(t,3*b*(n>_-An?n-_+An:0),4*(this._cubeSize-b),3*b,2*b),o.setRenderTarget(t),o.render(h,dr)}};function kg(e){const t=[],i=[],n=[];let s=e;const r=e-An+1+ld.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>e-An?l=ld[a-e+An-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],A=6,p=3,m=2,g=1,f=new Float32Array(108),_=new Float32Array(72),b=new Float32Array(36);for(let S=0;S<A;S++){const M=S%3*2/3-1,T=S>2?0:-1,v=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];f.set(v,18*S),_.set(d,12*S);const y=[S,S,S,S,S,S];b.set(y,6*S)}const C=new ti;C.setAttribute("position",new ct(f,p)),C.setAttribute("uv",new ct(_,m)),C.setAttribute("faceIndex",new ct(b,g)),n.push(new It(C,null)),s>An&&s--}return{lodMeshes:n,sizeLods:t,sigmas:i}}function hd(e,t,i){const n=new Ti(e,t,i);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(e,t,i,n,s){e.viewport.set(t,i,n,s),e.scissor.set(t,i,n,s)}function Gg(e,t,i){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Hg(e,t,i){const n=new Float32Array(Is),s=new B(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function dd(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ud(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ad=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Vh(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ma(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Qi});s.uniforms.tEquirect.value=t;const r=new It(n,s),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=dt),new ug(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}};function Vg(e){let t=new WeakMap,i=new WeakMap,n=null;function s(d,A=!1){return d==null?null:A?a(d):r(d)}function r(d){if(d&&d.isTexture){const A=d.mapping;if(A===ho||A===uo)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new Ad(p.height);return m.fromEquirectangularTexture(e,d),t.set(d,m),d.addEventListener("dispose",c),o(m.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const A=d.mapping,p=A===ho||A===uo,m=A===nn||A===qn;if(p||m){let g=i.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new wl(e)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,i.set(d,g),g.texture;if(g!==void 0)return g.texture;{const _=d.image;return p&&_&&_.height>0||m&&_&&l(_)?(n===null&&(n=new wl(e)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,i.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,A){return A===ho?d.mapping=nn:A===uo&&(d.mapping=qn),d}function l(d){let A=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&A++;return A===p}function c(d){const A=d.target;A.removeEventListener("dispose",c);const p=t.get(A);p!==void 0&&(t.delete(A),p.dispose())}function h(d){const A=d.target;A.removeEventListener("dispose",h);const p=i.get(A);p!==void 0&&(i.delete(A),p.dispose())}function u(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function zg(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const s=e.getExtension(n);return t[n]=s,s}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const s=i(n);return s===null&&Oo("WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(e,t,i,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const A=r.get(d);A&&(t.remove(A),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,i.memory.geometries++),d}function l(u){const d=u.attributes;for(const A in d)t.update(d[A],e.ARRAY_BUFFER)}function c(u){const d=[],A=u.index,p=u.attributes.position;let m=0;if(p===void 0)return;if(A!==null){const _=A.array;m=A.version;for(let b=0,C=_.length;b<C;b+=3){const S=_[b+0],M=_[b+1],T=_[b+2];d.push(S,M,M,T,T,S)}}else{const _=p.array;m=p.version;for(let b=0,C=_.length/3-1;b<C;b+=3){const S=b+0,M=b+1,T=b+2;d.push(S,M,M,T,T,S)}}const g=new(p.count>=65535?Eh:bh)(d,1);g.version=m;const f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){const d=r.get(u);if(d){const A=u.index;A!==null&&d.version<A.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qg(e,t,i){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){e.drawElements(n,d,r,u*a),i.update(d,n,1)}function c(u,d,A){A!==0&&(e.drawElementsInstanced(n,d,r,u*a,A),i.update(d,n,A))}function h(u,d,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,A);let p=0;for(let m=0;m<A;m++)p+=d[m];i.update(p,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xg(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(r/3);break;case e.LINES:i.lines+=o*(r/2);break;case e.LINE_STRIP:i.lines+=o*(r-1);break;case e.LINE_LOOP:i.lines+=o*r;break;case e.POINTS:i.points+=o*r;break;default:we("WebGLInfo: Unknown draw mode:",a)}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:n}}function Kg(e,t,i){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let A=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let C=0;p===!0&&(C=1),m===!0&&(C=2),g===!0&&(C=3);let S=o.attributes.position.count*C,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*M*4*u),v=new ah(T,S,M,u);v.type=wt,v.needsUpdate=!0;const y=C*4;for(let N=0;N<u;N++){const w=f[N],z=_[N],F=b[N],Q=S*M*4*N;for(let V=0;V<w.count;V++){const G=V*y;p===!0&&(s.fromBufferAttribute(w,V),T[Q+G+0]=s.x,T[Q+G+1]=s.y,T[Q+G+2]=s.z,T[Q+G+3]=0),m===!0&&(s.fromBufferAttribute(z,V),T[Q+G+4]=s.x,T[Q+G+5]=s.y,T[Q+G+6]=s.z,T[Q+G+7]=0),g===!0&&(s.fromBufferAttribute(F,V),T[Q+G+8]=s.x,T[Q+G+9]=s.y,T[Q+G+10]=s.z,T[Q+G+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new je(S,M)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let A=0;for(let m=0;m<c.length;m++)A+=c[m];const p=o.morphTargetsRelative?1:1-A;l.getUniforms().setValue(e,"morphTargetBaseInfluence",p),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:r}}function jg(e,t,i,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const A=c.skeleton;r.get(A)!==h&&(A.update(),r.set(A,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:a,dispose:o}}var Jg={[Rc]:"LINEAR_TONE_MAPPING",[Dc]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Pc]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Fc]:"CUSTOM_TONE_MAPPING"};function Yg(e,t,i,n,s){const r=new Ti(t,i,{type:e,depthBuffer:n,stencilBuffer:s,depthTexture:n?new us(t,i):void 0}),a=new Ti(t,i,{type:Dt,depthBuffer:!1,stencilBuffer:!1}),o=new ti;o.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gi([0,2,0,0,2,0],2));const l=new Wp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new It(o,l),h=new Ca(-1,1,1,-1,0,1);let u=null,d=null,A=!1,p,m=null,g=[],f=!1;this.setSize=function(_,b){r.setSize(_,b),a.setSize(_,b);for(let C=0;C<g.length;C++){const S=g[C];S.setSize&&S.setSize(_,b)}},this.setEffects=function(_){g=_,f=g.length>0&&g[0].isRenderPass===!0;const b=r.width,C=r.height;for(let S=0;S<g.length;S++){const M=g[S];M.setSize&&M.setSize(b,C)}},this.begin=function(_,b){if(A||_.toneMapping===yi&&g.length===0)return!1;if(m=b,b!==null){const C=b.width,S=b.height;(r.width!==C||r.height!==S)&&this.setSize(C,S)}return f===!1&&_.setRenderTarget(r),p=_.toneMapping,_.toneMapping=yi,!0},this.hasRenderPass=function(){return f},this.end=function(_,b){_.toneMapping=p,A=!0;let C=r,S=a;for(let M=0;M<g.length;M++){const T=g[M];if(T.enabled!==!1&&(T.render(_,S,C,b),T.needsSwap!==!1)){const v=C;C=S,S=v}}if(u!==_.outputColorSpace||d!==_.toneMapping){u=_.outputColorSpace,d=_.toneMapping,l.defines={},Ve.getTransfer(u)===it&&(l.defines.SRGB_TRANSFER="");const M=Jg[d];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=C.texture,_.setRenderTarget(m),_.render(c,h),m=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var fd=new Ot,Bl=new us(1,1),pd=new ah,gd=new oh,md=new Vh,_d=[],vd=[],bd=new Float32Array(16),Ed=new Float32Array(9),Cd=new Float32Array(4);function Ss(e,t,i){const n=e[0];if(n<=0||n>0)return e;const s=t*i;let r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(r,o)}return r}function xt(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Mt(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Sa(e,t){let i=vd[t];i===void 0&&(i=new Int32Array(t),vd[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Zg(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function $g(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xt(i,t))return;e.uniform2fv(this.addr,t),Mt(i,t)}}function em(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xt(i,t))return;e.uniform3fv(this.addr,t),Mt(i,t)}}function tm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xt(i,t))return;e.uniform4fv(this.addr,t),Mt(i,t)}}function im(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(xt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mt(i,t)}else{if(xt(i,n))return;Cd.set(n),e.uniformMatrix2fv(this.addr,!1,Cd),Mt(i,n)}}function nm(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(xt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mt(i,t)}else{if(xt(i,n))return;Ed.set(n),e.uniformMatrix3fv(this.addr,!1,Ed),Mt(i,n)}}function sm(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(xt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mt(i,t)}else{if(xt(i,n))return;bd.set(n),e.uniformMatrix4fv(this.addr,!1,bd),Mt(i,n)}}function rm(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function am(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xt(i,t))return;e.uniform2iv(this.addr,t),Mt(i,t)}}function om(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xt(i,t))return;e.uniform3iv(this.addr,t),Mt(i,t)}}function lm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xt(i,t))return;e.uniform4iv(this.addr,t),Mt(i,t)}}function cm(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function hm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xt(i,t))return;e.uniform2uiv(this.addr,t),Mt(i,t)}}function dm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xt(i,t))return;e.uniform3uiv(this.addr,t),Mt(i,t)}}function um(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xt(i,t))return;e.uniform4uiv(this.addr,t),Mt(i,t)}}function Am(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Bl.compareFunction=i.isReversedDepthBuffer()?No:Uo,r=Bl):r=fd,i.setTexture2D(t||r,s)}function fm(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(t||gd,s)}function pm(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTextureCube(t||md,s)}function gm(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(t||pd,s)}function mm(e){switch(e){case 5126:return Zg;case 35664:return $g;case 35665:return em;case 35666:return tm;case 35674:return im;case 35675:return nm;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return dm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return gm}}function _m(e,t){e.uniform1fv(this.addr,t)}function vm(e,t){const i=Ss(t,this.size,2);e.uniform2fv(this.addr,i)}function bm(e,t){const i=Ss(t,this.size,3);e.uniform3fv(this.addr,i)}function Em(e,t){const i=Ss(t,this.size,4);e.uniform4fv(this.addr,i)}function Cm(e,t){const i=Ss(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Im(e,t){const i=Ss(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function ym(e,t){const i=Ss(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Sm(e,t){e.uniform1iv(this.addr,t)}function xm(e,t){e.uniform2iv(this.addr,t)}function Mm(e,t){e.uniform3iv(this.addr,t)}function Tm(e,t){e.uniform4iv(this.addr,t)}function wm(e,t){e.uniform1uiv(this.addr,t)}function Bm(e,t){e.uniform2uiv(this.addr,t)}function Rm(e,t){e.uniform3uiv(this.addr,t)}function Dm(e,t){e.uniform4uiv(this.addr,t)}function Lm(e,t,i){const n=this.cache,s=t.length,r=Sa(i,s);xt(n,r)||(e.uniform1iv(this.addr,r),Mt(n,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Bl:a=fd;for(let o=0;o!==s;++o)i.setTexture2D(t[o]||a,r[o])}function Pm(e,t,i){const n=this.cache,s=t.length,r=Sa(i,s);xt(n,r)||(e.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)i.setTexture3D(t[a]||gd,r[a])}function Fm(e,t,i){const n=this.cache,s=t.length,r=Sa(i,s);xt(n,r)||(e.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)i.setTextureCube(t[a]||md,r[a])}function Um(e,t,i){const n=this.cache,s=t.length,r=Sa(i,s);xt(n,r)||(e.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)i.setTexture2DArray(t[a]||pd,r[a])}function Nm(e){switch(e){case 5126:return _m;case 35664:return vm;case 35665:return bm;case 35666:return Em;case 35674:return Cm;case 35675:return Im;case 35676:return ym;case 5124:case 35670:return Sm;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return Tm;case 5125:return wm;case 36294:return Bm;case 36295:return Rm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Um}}var Qm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}},Om=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}},km=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.setValue(e,t[a.id],i)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function Id(e,t){e.seq.push(t),e.map[t.id]=t}function Gm(e,t,i){const n=e.name,s=n.length;for(Rl.lastIndex=0;;){const r=Rl.exec(n),a=Rl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Id(i,c===void 0?new Qm(o,e,t):new Om(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new km(o),Id(i,h)),i=h}}}var xa=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r);Gm(a,e.getUniformLocation(t,a.name),this)}const n=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const a=t[s],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}};function yd(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Hm=37297,Vm=0;function zm(e,t){const i=e.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,i.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var Sd=new Qe;function Wm(e){Ve._getMatrix(Sd,Ve.workingColorSpace,e);const t=`mat3( ${Sd.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(e)){case Gr:return[t,"LinearTransferOETF"];case it:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function xd(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return i.toUpperCase()+`

`+s+`

`+zm(e.getShaderSource(t),a)}else return s}function qm(e,t){const i=Wm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Xm={[Rc]:"Linear",[Dc]:"Reinhard",[Lc]:"Cineon",[Pc]:"ACESFilmic",[Uc]:"AgX",[Nc]:"Neutral",[Fc]:"Custom"};function Km(e,t){const i=Xm[t];return i===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ma=new B;function jm(){return Ve.getLuminanceCoefficients(Ma),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ma.x.toFixed(4)}, ${Ma.y.toFixed(4)}, ${Ma.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Ym(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function Zm(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=e.getActiveAttrib(t,s),a=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),i[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function ur(e){return e!==""}function Md(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Td(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(e){return e.replace($m,t_)}var e_=new Map;function t_(e,t){let i=Oe[t];if(i===void 0){const n=e_.get(t);if(n!==void 0)i=Oe[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dl(i)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(e){return e.replace(i_,n_)}function n_(e,t,i,n){let s="";for(let r=parseInt(t);r<parseInt(i);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var s_={[yr]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function r_(e){return s_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a_={[nn]:"ENVMAP_TYPE_CUBE",[qn]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function o_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":a_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var l_={[qn]:"ENVMAP_MODE_REFRACTION"};function c_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":l_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h_={[co]:"ENVMAP_BLENDING_MULTIPLY",[Rf]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function d_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":h_[e.combine]||"ENVMAP_BLENDING_NONE"}function u_(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function A_(e,t,i,n){const s=e.getContext(),r=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=r_(i),c=o_(i),h=c_(i),u=d_(i),d=u_(i),A=Jm(i),p=Ym(r),m=s.createProgram();let g,f,_=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(ur).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(g=[Bd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[Bd(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==yi?"#define TONE_MAPPING":"",i.toneMapping!==yi?Oe.tonemapping_pars_fragment:"",i.toneMapping!==yi?Km("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,qm("linearToOutputTexel",i.outputColorSpace),jm(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ur).join(`
`)),a=Dl(a),a=Md(a,i),a=Td(a,i),o=Dl(o),o=Md(o,i),o=Td(o,i),a=wd(a),o=wd(o),i.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",i.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=_+g+a,C=_+f+o,S=yd(s,s.VERTEX_SHADER,b),M=yd(s,s.FRAGMENT_SHADER,C);s.attachShader(m,S),s.attachShader(m,M),i.index0AttributeName!==void 0?s.bindAttribLocation(m,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(w){if(e.debug.checkShaderErrors){const z=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(S)||"",Q=s.getShaderInfoLog(M)||"",V=z.trim(),G=F.trim(),U=Q.trim();let j=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,m,S,M);else{const ie=xd(s,S,"vertex"),fe=xd(s,M,"fragment");we("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+ie+`
`+fe)}else V!==""?ve("WebGLProgram: Program Info Log:",V):(G===""||U==="")&&($=!1);$&&(w.diagnostics={runnable:j,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:U,prefix:f}})}s.deleteShader(S),s.deleteShader(M),v=new xa(s,m),y=Zm(s,m)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Hm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=M,this}var f_=0,p_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new g_(e),t.set(e,i)),i}},g_=class{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}};function m_(e){return e===$t||e===Ws||e===qs}function __(e,t,i,n,s,r){const a=new dh,o=new p_,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,y,N,w,z,F){const Q=w.fog,V=z.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||G,U),$=j&&j.mapping===Sr?j.image.height:null,ie=A[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&ve("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,be=fe!==void 0?fe.length:0;let qe=0;V.morphAttributes.position!==void 0&&(qe=1),V.morphAttributes.normal!==void 0&&(qe=2),V.morphAttributes.color!==void 0&&(qe=3);let ze,X,ae,Ee;if(ie){const Re=Li[ie];ze=Re.vertexShader,X=Re.fragmentShader}else ze=v.vertexShader,X=v.fragmentShader,o.update(v),ae=o.getVertexShaderID(v),Ee=o.getFragmentShaderID(v);const ue=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,tt=!!v.map,Ke=!!v.matcap,yt=!!j,gt=!!v.aoMap,Kt=!!v.lightMap,Bt=!!v.bumpMap,bt=!!v.normalMap,D=!!v.displacementMap,Ut=!!v.emissiveMap,Je=!!v.metalnessMap,Ze=!!v.roughnessMap,he=v.anisotropy>0,ht=v.clearcoat>0,Se=v.dispersion>0,x=v.iridescence>0,E=v.sheen>0,O=v.transmission>0,K=he&&!!v.anisotropyMap,Y=ht&&!!v.clearcoatMap,te=ht&&!!v.clearcoatNormalMap,oe=ht&&!!v.clearcoatRoughnessMap,L=x&&!!v.iridescenceMap,se=x&&!!v.iridescenceThicknessMap,le=E&&!!v.sheenColorMap,Ae=E&&!!v.sheenRoughnessMap,J=!!v.specularMap,Te=!!v.specularColorMap,Ne=!!v.specularIntensityMap,Ye=O&&!!v.transmissionMap,ke=O&&!!v.thicknessMap,R=!!v.gradientMap,q=!!v.alphaMap,ee=v.alphaTest>0,re=!!v.alphaHash,Ce=!!v.extensions;let Z=yi;v.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Z=e.toneMapping);const Ie={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:ze,fragmentShader:X,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:Ke,envMap:yt,envMapMode:yt&&j.mapping,envMapCubeUVHeight:$,aoMap:gt,lightMap:Kt,bumpMap:Bt,normalMap:bt,displacementMap:D,emissiveMap:Ut,normalMapObjectSpace:bt&&v.normalMapType===Nf,normalMapTangentSpace:bt&&v.normalMapType===kr,packedNormalMap:bt&&v.normalMapType===kr&&m_(v.normalMap.format),metalnessMap:Je,roughnessMap:Ze,anisotropy:he,anisotropyMap:K,clearcoat:ht,clearcoatMap:Y,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:Se,iridescence:x,iridescenceMap:L,iridescenceThicknessMap:se,sheen:E,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:J,specularColorMap:Te,specularIntensityMap:Ne,transmission:O,transmissionMap:Ye,thicknessMap:ke,gradientMap:R,opaque:v.transparent===!1&&v.blending===zn&&v.alphaToCoverage===!1,alphaMap:q,alphaTest:ee,alphaHash:re,combine:v.combine,mapUv:tt&&p(v.map.channel),aoMapUv:gt&&p(v.aoMap.channel),lightMapUv:Kt&&p(v.lightMap.channel),bumpMapUv:Bt&&p(v.bumpMap.channel),normalMapUv:bt&&p(v.normalMap.channel),displacementMapUv:D&&p(v.displacementMap.channel),emissiveMapUv:Ut&&p(v.emissiveMap.channel),metalnessMapUv:Je&&p(v.metalnessMap.channel),roughnessMapUv:Ze&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:Y&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(v.sheenRoughnessMap.channel),specularMapUv:J&&p(v.specularMap.channel),specularColorMapUv:Te&&p(v.specularColorMap.channel),specularIntensityMapUv:Ne&&p(v.specularIntensityMap.channel),transmissionMapUv:Ye&&p(v.transmissionMap.channel),thicknessMapUv:ke&&p(v.thicknessMap.channel),alphaMapUv:q&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||he),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(tt||q),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Z,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&Ve.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ii,flipSided:v.side===Nt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ce&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&v.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)y.push(N),y.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(f(y,v),_(y,v),y.push(e.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function f(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function _(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function b(v){const y=A[v.type];let N;if(y){const w=Li[y];N=Hp.clone(w.uniforms)}else N=v.uniforms;return N}function C(v,y){let N=h.get(y);return N!==void 0?++N.usedTimes:(N=new A_(e,y,v,s),c.push(N),h.set(y,N)),N}function S(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:b,acquireProgram:C,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:T}}function v_(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:i,remove:n,update:s,dispose:r}}function b_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Rd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Dd(){const e=[];let t=0;const i=[],n=[],s=[];function r(){t=0,i.length=0,n.length=0,s.length=0}function a(d){let A=0;return d.isInstancedMesh&&(A+=2),d.isSkinnedMesh&&(A+=1),A}function o(d,A,p,m,g,f){let _=e[t];return _===void 0?(_={id:d.id,object:d,geometry:A,material:p,materialVariant:a(d),groupOrder:m,renderOrder:d.renderOrder,z:g,group:f},e[t]=_):(_.id=d.id,_.object=d,_.geometry=A,_.material=p,_.materialVariant=a(d),_.groupOrder=m,_.renderOrder=d.renderOrder,_.z=g,_.group=f),t++,_}function l(d,A,p,m,g,f){const _=o(d,A,p,m,g,f);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):i.push(_)}function c(d,A,p,m,g,f){const _=o(d,A,p,m,g,f);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):i.unshift(_)}function h(d,A){i.length>1&&i.sort(d||b_),n.length>1&&n.sort(A||Rd),s.length>1&&s.sort(A||Rd)}function u(){for(let d=t,A=e.length;d<A;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function E_(){let e=new WeakMap;function t(n,s){const r=e.get(n);let a;return r===void 0?(a=new Dd,e.set(n,[a])):s>=r.length?(a=new Dd,r.push(a)):a=r[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function C_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new B,color:new Le};break;case"SpotLight":i={position:new B,direction:new B,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new B,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new B,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=i,i}}}function I_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}var y_=0;function S_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function x_(e){const t=new C_,i=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new pe,a=new pe;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let A=0,p=0,m=0,g=0,f=0,_=0,b=0,C=0,S=0,M=0,T=0;c.sort(S_);for(let y=0,N=c.length;y<N;y++){const w=c[y],z=w.color,F=w.intensity,Q=w.distance;let V=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===$t?V=w.shadow.map.texture:V=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],F);T++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const U=w.shadow,j=i.get(w);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,n.directionalShadow[A]=j,n.directionalShadowMap[A]=V,n.directionalShadowMatrix[A]=w.shadow.matrix,_++}n.directional[A]=G,A++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(z).multiplyScalar(F),G.distance=Q,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[m]=G;const U=w.shadow;if(w.map&&(n.spotLightMap[S]=w.map,S++,U.updateMatrices(w),w.castShadow&&M++),n.spotLightMatrix[m]=U.matrix,w.castShadow){const j=i.get(w);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,n.spotShadow[m]=j,n.spotShadowMap[m]=V,C++}m++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(z).multiplyScalar(F),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=G,g++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const U=w.shadow,j=i.get(w);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=w.shadow.matrix,b++}n.point[p]=G,p++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(F),G.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[f]=G,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==A||v.pointLength!==p||v.spotLength!==m||v.rectAreaLength!==g||v.hemiLength!==f||v.numDirectionalShadows!==_||v.numPointShadows!==b||v.numSpotShadows!==C||v.numSpotMaps!==S||v.numLightProbes!==T)&&(n.directional.length=A,n.spot.length=m,n.rectArea.length=g,n.point.length=p,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=C+S-M,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,v.directionalLength=A,v.pointLength=p,v.spotLength=m,v.rectAreaLength=g,v.hemiLength=f,v.numDirectionalShadows=_,v.numPointShadows=b,v.numSpotShadows=C,v.numSpotMaps=S,v.numLightProbes=T,n.version=y_++)}function l(c,h){let u=0,d=0,A=0,p=0,m=0;const g=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const b=c[f];if(b.isDirectionalLight){const C=n.directional[u];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),u++}else if(b.isSpotLight){const C=n.spot[A];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),A++}else if(b.isRectAreaLight){const C=n.rectArea[p];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const C=n.point[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const C=n.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Ld(e){const t=new x_(e),i=[],n=[],s=[];function r(d){u.camera=d,i.length=0,n.length=0,s.length=0}function a(d){i.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(i)}function h(d){t.setupView(i,d)}const u={lightsArray:i,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function M_(e){let t=new WeakMap;function i(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ld(e),t.set(s,[o])):r>=a.length?(o=new Ld(e),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,B_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],R_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Pd=new pe,Ar=new B,Ll=new B;function D_(e,t,i){let n=new ca;const s=new je,r=new je,a=new lt,o=new Xp,l=new Kp,c={},h=i.maxTextureSize,u={[Ni]:Nt,[Nt]:Ni,[Ii]:Ii},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:T_,fragmentShader:w_}),A=d.clone();A.defines.HORIZONTAL_PASS=1;const p=new ti;p.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new It(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let f=this.type;this.render=function(M,T,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===uf&&(ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yr);const y=e.getRenderTarget(),N=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Qi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==this.type;F&&T.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(V=>V.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,V=M.length;Q<V;Q++){const G=M[Q],U=G.shadow;if(U===void 0){ve("WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const j=U.getFrameExtents();s.multiply(j),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,U.mapSize.y=r.y));const $=e.state.buffers.depth.getReversed();if(U.camera._reversedDepth=$,U.map===null||F===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Qs){if(G.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ti(s.x,s.y,{format:$t,type:Dt,minFilter:dt,magFilter:dt,generateMipmaps:!1}),U.map.texture.name=G.name+".shadowMap",U.map.depthTexture=new us(s.x,s.y,wt),U.map.depthTexture.name=G.name+".shadowMapDepth",U.map.depthTexture.format=Oi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=_t,U.map.depthTexture.magFilter=_t}else G.isPointLight?(U.map=new Ad(s.x),U.map.depthTexture=new kp(s.x,Si)):(U.map=new Ti(s.x,s.y),U.map.depthTexture=new us(s.x,s.y,Si)),U.map.depthTexture.name=G.name+".shadowMap",U.map.depthTexture.format=Oi,this.type===yr?(U.map.depthTexture.compareFunction=$?No:Uo,U.map.depthTexture.minFilter=dt,U.map.depthTexture.magFilter=dt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=_t,U.map.depthTexture.magFilter=_t);U.camera.updateProjectionMatrix()}const ie=U.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ie;fe++){if(U.map.isWebGLCubeRenderTarget)e.setRenderTarget(U.map,fe),e.clear();else{fe===0&&(e.setRenderTarget(U.map),e.clear());const be=U.getViewport(fe);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),z.viewport(a)}if(G.isPointLight){const be=U.camera,qe=U.matrix,ze=G.distance||be.far;ze!==be.far&&(be.far=ze,be.updateProjectionMatrix()),Ar.setFromMatrixPosition(G.matrixWorld),be.position.copy(Ar),Ll.copy(be.position),Ll.add(B_[fe]),be.up.copy(R_[fe]),be.lookAt(Ll),be.updateMatrixWorld(),qe.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Pd.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Pd,be.coordinateSystem,be.reversedDepth)}else U.updateMatrices(G);n=U.getFrustum(),C(T,v,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===Qs&&_(U,v),U.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(y,N,w)};function _(M,T){const v=t.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,A.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,A.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ti(s.x,s.y,{format:$t,type:Dt})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,e.setRenderTarget(M.mapPass),e.clear(),e.renderBufferDirect(T,null,v,d,m,null),A.uniforms.shadow_pass.value=M.mapPass.texture,A.uniforms.resolution.value=M.mapSize,A.uniforms.radius.value=M.radius,e.setRenderTarget(M.map),e.clear(),e.renderBufferDirect(T,null,v,A,m,null)}function b(M,T,v,y){let N=null;const w=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)N=w;else if(N=v.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const z=N.uuid,F=T.uuid;let Q=c[z];Q===void 0&&(Q={},c[z]=Q);let V=Q[F];V===void 0&&(V=N.clone(),Q[F]=V,T.addEventListener("dispose",S)),N=V}if(N.visible=T.visible,N.wireframe=T.wireframe,y===Qs?N.side=T.shadowSide!==null?T.shadowSide:T.side:N.side=T.shadowSide!==null?T.shadowSide:u[T.side],N.alphaMap=T.alphaMap,N.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,N.map=T.map,N.clipShadows=T.clipShadows,N.clippingPlanes=T.clippingPlanes,N.clipIntersection=T.clipIntersection,N.displacementMap=T.displacementMap,N.displacementScale=T.displacementScale,N.displacementBias=T.displacementBias,N.wireframeLinewidth=T.wireframeLinewidth,N.linewidth=T.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const z=e.properties.get(N);z.light=v}return N}function C(M,T,v,y,N){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===Qs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const z=t.update(M),F=M.material;if(Array.isArray(F)){const Q=z.groups;for(let V=0,G=Q.length;V<G;V++){const U=Q[V],j=F[U.materialIndex];if(j&&j.visible){const $=b(M,j,y,N);M.onBeforeShadow(e,M,T,v,z,$,U),e.renderBufferDirect(v,null,z,$,M,U),M.onAfterShadow(e,M,T,v,z,$,U)}}}else if(F.visible){const Q=b(M,F,y,N);M.onBeforeShadow(e,M,T,v,z,Q,null),e.renderBufferDirect(v,null,z,Q,M,null),M.onAfterShadow(e,M,T,v,z,Q,null)}}const w=M.children;for(let z=0,F=w.length;z<F;z++)C(w[z],T,v,y,N)}function S(M){M.target.removeEventListener("dispose",S);for(const T in c){const v=c[T],y=M.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function L_(e,t){function i(){let R=!1;const q=new lt;let ee=null;const re=new lt(0,0,0,0);return{setMask:function(Ce){ee!==Ce&&!R&&(e.colorMask(Ce,Ce,Ce,Ce),ee=Ce)},setLocked:function(Ce){R=Ce},setClear:function(Ce,Z,Ie,Re,Wt){Wt===!0&&(Ce*=Re,Z*=Re,Ie*=Re),q.set(Ce,Z,Ie,Re),re.equals(q)===!1&&(e.clearColor(Ce,Z,Ie,Re),re.copy(q))},reset:function(){R=!1,ee=null,re.set(-1,0,0,0)}}}function n(){let R=!1,q=!1,ee=null,re=null,Ce=null;return{setReversed:function(Z){if(q!==Z){const Ie=t.get("EXT_clip_control");Z?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),q=Z;const Re=Ce;Ce=null,this.setClear(Re)}},getReversed:function(){return q},setTest:function(Z){Z?ue(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(Z){ee!==Z&&!R&&(e.depthMask(Z),ee=Z)},setFunc:function(Z){if(q&&(Z=Kf[Z]),re!==Z){switch(Z){case io:e.depthFunc(e.NEVER);break;case no:e.depthFunc(e.ALWAYS);break;case so:e.depthFunc(e.LESS);break;case Wn:e.depthFunc(e.LEQUAL);break;case ro:e.depthFunc(e.EQUAL);break;case ao:e.depthFunc(e.GEQUAL);break;case oo:e.depthFunc(e.GREATER);break;case lo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}re=Z}},setLocked:function(Z){R=Z},setClear:function(Z){Ce!==Z&&(Ce=Z,q&&(Z=1-Z),e.clearDepth(Z))},reset:function(){R=!1,ee=null,re=null,Ce=null,q=!1}}}function s(){let R=!1,q=null,ee=null,re=null,Ce=null,Z=null,Ie=null,Re=null,Wt=null;return{setTest:function(ot){R||(ot?ue(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(ot){q!==ot&&!R&&(e.stencilMask(ot),q=ot)},setFunc:function(ot,Ei,si){(ee!==ot||re!==Ei||Ce!==si)&&(e.stencilFunc(ot,Ei,si),ee=ot,re=Ei,Ce=si)},setOp:function(ot,Ei,si){(Z!==ot||Ie!==Ei||Re!==si)&&(e.stencilOp(ot,Ei,si),Z=ot,Ie=Ei,Re=si)},setLocked:function(ot){R=ot},setClear:function(ot){Wt!==ot&&(e.clearStencil(ot),Wt=ot)},reset:function(){R=!1,q=null,ee=null,re=null,Ce=null,Z=null,Ie=null,Re=null,Wt=null}}}const r=new i,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},A=new WeakMap,p=[],m=null,g=!1,f=null,_=null,b=null,C=null,S=null,M=null,T=null,v=new Le(0,0,0),y=0,N=!1,w=null,z=null,F=null,Q=null,V=null;const G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,j=0;const $=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),U=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),U=j>=2);let ie=null,fe={};const be=e.getParameter(e.SCISSOR_BOX),qe=e.getParameter(e.VIEWPORT),ze=new lt().fromArray(be),X=new lt().fromArray(qe);function ae(R,q,ee,re){const Ce=new Uint8Array(4),Z=e.createTexture();e.bindTexture(R,Z),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ie=0;Ie<ee;Ie++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(q,0,e.RGBA,1,1,re,0,e.RGBA,e.UNSIGNED_BYTE,Ce):e.texImage2D(q+Ie,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ce);return Z}const Ee={};Ee[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Ee[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ee[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(e.DEPTH_TEST),a.setFunc(Wn),Bt(!1),bt(Mc),ue(e.CULL_FACE),gt(Qi);function ue(R){h[R]!==!0&&(e.enable(R),h[R]=!0)}function Me(R){h[R]!==!1&&(e.disable(R),h[R]=!1)}function Fe(R,q){return d[R]!==q?(e.bindFramebuffer(R,q),d[R]=q,R===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=q),R===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=q),!0):!1}function Be(R,q){let ee=p,re=!1;if(R){ee=A.get(q),ee===void 0&&(ee=[],A.set(q,ee));const Ce=R.textures;if(ee.length!==Ce.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,Ie=Ce.length;Z<Ie;Z++)ee[Z]=e.COLOR_ATTACHMENT0+Z;ee.length=Ce.length,re=!0}}else ee[0]!==e.BACK&&(ee[0]=e.BACK,re=!0);re&&e.drawBuffers(ee)}function tt(R){return m!==R?(e.useProgram(R),m=R,!0):!1}const Ke={[Cn]:e.FUNC_ADD,[ff]:e.FUNC_SUBTRACT,[pf]:e.FUNC_REVERSE_SUBTRACT};Ke[gf]=e.MIN,Ke[mf]=e.MAX;const yt={[_f]:e.ZERO,[vf]:e.ONE,[bf]:e.SRC_COLOR,[eo]:e.SRC_ALPHA,[xf]:e.SRC_ALPHA_SATURATE,[yf]:e.DST_COLOR,[Cf]:e.DST_ALPHA,[Ef]:e.ONE_MINUS_SRC_COLOR,[to]:e.ONE_MINUS_SRC_ALPHA,[Sf]:e.ONE_MINUS_DST_COLOR,[If]:e.ONE_MINUS_DST_ALPHA,[Mf]:e.CONSTANT_COLOR,[Tf]:e.ONE_MINUS_CONSTANT_COLOR,[wf]:e.CONSTANT_ALPHA,[Bf]:e.ONE_MINUS_CONSTANT_ALPHA};function gt(R,q,ee,re,Ce,Z,Ie,Re,Wt,ot){if(R===Qi){g===!0&&(Me(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),R!==Af){if(R!==f||ot!==N){if((_!==Cn||S!==Cn)&&(e.blendEquation(e.FUNC_ADD),_=Cn,S=Cn),ot)switch(R){case zn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Tc:e.blendFunc(e.ONE,e.ONE);break;case wc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Bc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:we("WebGLState: Invalid blending: ",R)}else switch(R){case zn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Tc:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case wc:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",R)}b=null,C=null,M=null,T=null,v.set(0,0,0),y=0,f=R,N=ot}return}Ce=Ce||q,Z=Z||ee,Ie=Ie||re,(q!==_||Ce!==S)&&(e.blendEquationSeparate(Ke[q],Ke[Ce]),_=q,S=Ce),(ee!==b||re!==C||Z!==M||Ie!==T)&&(e.blendFuncSeparate(yt[ee],yt[re],yt[Z],yt[Ie]),b=ee,C=re,M=Z,T=Ie),(Re.equals(v)===!1||Wt!==y)&&(e.blendColor(Re.r,Re.g,Re.b,Wt),v.copy(Re),y=Wt),f=R,N=!1}function Kt(R,q){R.side===Ii?Me(e.CULL_FACE):ue(e.CULL_FACE);let ee=R.side===Nt;q&&(ee=!ee),Bt(ee),R.blending===zn&&R.transparent===!1?gt(Qi):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const re=R.stencilWrite;o.setTest(re),re&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ut(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(R){w!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),w=R)}function bt(R){R!==hf?(ue(e.CULL_FACE),R!==z&&(R===Mc?e.cullFace(e.BACK):R===df?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),z=R}function D(R){R!==F&&(U&&e.lineWidth(R),F=R)}function Ut(R,q,ee){R?(ue(e.POLYGON_OFFSET_FILL),(Q!==q||V!==ee)&&(Q=q,V=ee,a.getReversed()&&(q=-q),e.polygonOffset(q,ee))):Me(e.POLYGON_OFFSET_FILL)}function Je(R){R?ue(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function Ze(R){R===void 0&&(R=e.TEXTURE0+G-1),ie!==R&&(e.activeTexture(R),ie=R)}function he(R,q,ee){ee===void 0&&(ie===null?ee=e.TEXTURE0+G-1:ee=ie);let re=fe[ee];re===void 0&&(re={type:void 0,texture:void 0},fe[ee]=re),(re.type!==R||re.texture!==q)&&(ie!==ee&&(e.activeTexture(ee),ie=ee),e.bindTexture(R,q||Ee[R]),re.type=R,re.texture=q)}function ht(){const R=fe[ie];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(R){we("WebGLState:",R)}}function x(){try{e.compressedTexImage3D(...arguments)}catch(R){we("WebGLState:",R)}}function E(){try{e.texSubImage2D(...arguments)}catch(R){we("WebGLState:",R)}}function O(){try{e.texSubImage3D(...arguments)}catch(R){we("WebGLState:",R)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(R){we("WebGLState:",R)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(R){we("WebGLState:",R)}}function te(){try{e.texStorage2D(...arguments)}catch(R){we("WebGLState:",R)}}function oe(){try{e.texStorage3D(...arguments)}catch(R){we("WebGLState:",R)}}function L(){try{e.texImage2D(...arguments)}catch(R){we("WebGLState:",R)}}function se(){try{e.texImage3D(...arguments)}catch(R){we("WebGLState:",R)}}function le(R){return u[R]!==void 0?u[R]:e.getParameter(R)}function Ae(R,q){u[R]!==q&&(e.pixelStorei(R,q),u[R]=q)}function J(R){ze.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),ze.copy(R))}function Te(R){X.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function Ne(R,q){let ee=c.get(q);ee===void 0&&(ee=new WeakMap,c.set(q,ee));let re=ee.get(R);re===void 0&&(re=e.getUniformBlockIndex(q,R.name),ee.set(R,re))}function Ye(R,q){const ee=c.get(q).get(R);l.get(q)!==ee&&(e.uniformBlockBinding(q,ee,R.__bindingPointIndex),l.set(q,ee))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,fe={},d={},A=new WeakMap,p=[],m=null,g=!1,f=null,_=null,b=null,C=null,S=null,M=null,T=null,v=new Le(0,0,0),y=0,N=!1,w=null,z=null,F=null,Q=null,V=null,ze.set(0,0,e.canvas.width,e.canvas.height),X.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Me,bindFramebuffer:Fe,drawBuffers:Be,useProgram:tt,setBlending:gt,setMaterial:Kt,setFlipSided:Bt,setCullFace:bt,setLineWidth:D,setPolygonOffset:Ut,setScissorTest:Je,activeTexture:Ze,bindTexture:he,unbindTexture:ht,compressedTexImage2D:Se,compressedTexImage3D:x,texImage2D:L,texImage3D:se,pixelStorei:Ae,getParameter:le,updateUBOMapping:Ne,uniformBlockBinding:Ye,texStorage2D:te,texStorage3D:oe,texSubImage2D:E,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:Y,scissor:J,viewport:Te,reset:ke}}function P_(e,t,i,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,h=new WeakMap,u=new Set;let d;const A=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(x,E){return p?new OffscreenCanvas(x,E):Js("canvas")}function g(x,E,O){let K=1;const Y=Se(x);if((Y.width>O||Y.height>O)&&(K=O/Math.max(Y.width,Y.height)),K<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const te=Math.floor(K*Y.width),oe=Math.floor(K*Y.height);d===void 0&&(d=m(te,oe));const L=E?m(te,oe):d;return L.width=te,L.height=oe,L.getContext("2d").drawImage(x,0,0,te,oe),ve("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+te+"x"+oe+")."),L}else return"data"in x&&ve("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),x;return x}function f(x){return x.generateMipmaps}function _(x){e.generateMipmap(x)}function b(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(x,E,O,K,Y,te=!1){if(x!==null){if(e[x]!==void 0)return e[x];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let oe;K&&(oe=t.get("EXT_texture_norm16"),oe||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=E;if(E===e.RED&&(O===e.FLOAT&&(L=e.R32F),O===e.HALF_FLOAT&&(L=e.R16F),O===e.UNSIGNED_BYTE&&(L=e.R8),O===e.UNSIGNED_SHORT&&oe&&(L=oe.R16_EXT),O===e.SHORT&&oe&&(L=oe.R16_SNORM_EXT)),E===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(L=e.R8UI),O===e.UNSIGNED_SHORT&&(L=e.R16UI),O===e.UNSIGNED_INT&&(L=e.R32UI),O===e.BYTE&&(L=e.R8I),O===e.SHORT&&(L=e.R16I),O===e.INT&&(L=e.R32I)),E===e.RG&&(O===e.FLOAT&&(L=e.RG32F),O===e.HALF_FLOAT&&(L=e.RG16F),O===e.UNSIGNED_BYTE&&(L=e.RG8),O===e.UNSIGNED_SHORT&&oe&&(L=oe.RG16_EXT),O===e.SHORT&&oe&&(L=oe.RG16_SNORM_EXT)),E===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(L=e.RG8UI),O===e.UNSIGNED_SHORT&&(L=e.RG16UI),O===e.UNSIGNED_INT&&(L=e.RG32UI),O===e.BYTE&&(L=e.RG8I),O===e.SHORT&&(L=e.RG16I),O===e.INT&&(L=e.RG32I)),E===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(L=e.RGB8UI),O===e.UNSIGNED_SHORT&&(L=e.RGB16UI),O===e.UNSIGNED_INT&&(L=e.RGB32UI),O===e.BYTE&&(L=e.RGB8I),O===e.SHORT&&(L=e.RGB16I),O===e.INT&&(L=e.RGB32I)),E===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(L=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(L=e.RGBA16UI),O===e.UNSIGNED_INT&&(L=e.RGBA32UI),O===e.BYTE&&(L=e.RGBA8I),O===e.SHORT&&(L=e.RGBA16I),O===e.INT&&(L=e.RGBA32I)),E===e.RGB&&(O===e.UNSIGNED_SHORT&&oe&&(L=oe.RGB16_EXT),O===e.SHORT&&oe&&(L=oe.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(L=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(L=e.R11F_G11F_B10F)),E===e.RGBA){const se=te?Gr:Ve.getTransfer(Y);O===e.FLOAT&&(L=e.RGBA32F),O===e.HALF_FLOAT&&(L=e.RGBA16F),O===e.UNSIGNED_BYTE&&(L=se===it?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&oe&&(L=oe.RGBA16_EXT),O===e.SHORT&&oe&&(L=oe.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(L=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(L=e.RGB5_A1)}return(L===e.R16F||L===e.R32F||L===e.RG16F||L===e.RG32F||L===e.RGBA16F||L===e.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function S(x,E){let O;return x?E===null||E===Si||E===ks?O=e.DEPTH24_STENCIL8:E===wt?O=e.DEPTH32F_STENCIL8:E===In&&(O=e.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Si||E===ks?O=e.DEPTH_COMPONENT24:E===wt?O=e.DEPTH_COMPONENT32F:E===In&&(O=e.DEPTH_COMPONENT16),O}function M(x,E){return f(x)===!0||x.isFramebufferTexture&&x.minFilter!==_t&&x.minFilter!==dt?Math.log2(Math.max(E.width,E.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?E.mipmaps.length:1}function T(x){const E=x.target;E.removeEventListener("dispose",T),y(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function v(x){const E=x.target;E.removeEventListener("dispose",v),w(E)}function y(x){const E=n.get(x);if(E.__webglInit===void 0)return;const O=x.source,K=A.get(O);if(K){const Y=K[E.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&N(x),Object.keys(K).length===0&&A.delete(O)}n.remove(x)}function N(x){const E=n.get(x);e.deleteTexture(E.__webglTexture);const O=x.source,K=A.get(O);delete K[E.__cacheKey],a.memory.textures--}function w(x){const E=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let Y=0;Y<E.__webglFramebuffer[K].length;Y++)e.deleteFramebuffer(E.__webglFramebuffer[K][Y]);else e.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)e.deleteFramebuffer(E.__webglFramebuffer[K]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=x.textures;for(let K=0,Y=O.length;K<Y;K++){const te=n.get(O[K]);te.__webglTexture&&(e.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(x)}let z=0;function F(){z=0}function Q(){return z}function V(x){z=x}function G(){const x=z;return x>=s.maxTextures&&ve("WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),z+=1,x}function U(x){const E=[];return E.push(x.wrapS),E.push(x.wrapT),E.push(x.wrapR||0),E.push(x.magFilter),E.push(x.minFilter),E.push(x.anisotropy),E.push(x.internalFormat),E.push(x.format),E.push(x.type),E.push(x.generateMipmaps),E.push(x.premultiplyAlpha),E.push(x.flipY),E.push(x.unpackAlignment),E.push(x.colorSpace),E.join()}function j(x,E){const O=n.get(x);if(x.isVideoTexture&&he(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&O.__version!==x.version){const K=x.image;if(K===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(O,x,E);return}}else x.isExternalTexture&&(O.__webglTexture=x.sourceTexture?x.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+E)}function $(x,E){const O=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){Me(O,x,E);return}else x.isExternalTexture&&(O.__webglTexture=x.sourceTexture?x.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+E)}function ie(x,E){const O=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){Me(O,x,E);return}i.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+E)}function fe(x,E){const O=n.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&O.__version!==x.version){Fe(O,x,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+E)}const be={[Xn]:e.REPEAT,[ai]:e.CLAMP_TO_EDGE,[xr]:e.MIRRORED_REPEAT},qe={[_t]:e.NEAREST,[Ao]:e.NEAREST_MIPMAP_NEAREST,[Os]:e.NEAREST_MIPMAP_LINEAR,[dt]:e.LINEAR,[Mr]:e.LINEAR_MIPMAP_NEAREST,[oi]:e.LINEAR_MIPMAP_LINEAR},ze={[Qf]:e.NEVER,[Vf]:e.ALWAYS,[Of]:e.LESS,[Uo]:e.LEQUAL,[kf]:e.EQUAL,[No]:e.GEQUAL,[Gf]:e.GREATER,[Hf]:e.NOTEQUAL};function X(x,E){if(E.type===wt&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===dt||E.magFilter===Mr||E.magFilter===Os||E.magFilter===oi||E.minFilter===dt||E.minFilter===Mr||E.minFilter===Os||E.minFilter===oi)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,be[E.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,be[E.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,be[E.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,qe[E.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,qe[E.minFilter]),E.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,ze[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_t||E.minFilter!==Os&&E.minFilter!==oi||E.type===wt&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(x,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ae(x,E){let O=!1;x.__webglInit===void 0&&(x.__webglInit=!0,E.addEventListener("dispose",T));const K=E.source;let Y=A.get(K);Y===void 0&&(Y={},A.set(K,Y));const te=U(E);if(te!==x.__cacheKey){Y[te]===void 0&&(Y[te]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[te].usedTimes++;const oe=Y[x.__cacheKey];oe!==void 0&&(Y[x.__cacheKey].usedTimes--,oe.usedTimes===0&&N(E)),x.__cacheKey=te,x.__webglTexture=Y[te].texture}return O}function Ee(x,E,O){return Math.floor(Math.floor(x/O)/E)}function ue(x,E,O,K){const te=x.updateRanges;if(te.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,O,K,E.data);else{te.sort((Ae,J)=>Ae.start-J.start);let oe=0;for(let Ae=1;Ae<te.length;Ae++){const J=te[oe],Te=te[Ae],Ne=J.start+J.count,Ye=Ee(Te.start,E.width,4),ke=Ee(J.start,E.width,4);Te.start<=Ne+1&&Ye===ke&&Ee(Te.start+Te.count-1,E.width,4)===Ye?J.count=Math.max(J.count,Te.start+Te.count-J.start):(++oe,te[oe]=Te)}te.length=oe+1;const L=i.getParameter(e.UNPACK_ROW_LENGTH),se=i.getParameter(e.UNPACK_SKIP_PIXELS),le=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,J=te.length;Ae<J;Ae++){const Te=te[Ae],Ne=Math.floor(Te.start/4),Ye=Math.ceil(Te.count/4),ke=Ne%E.width,R=Math.floor(Ne/E.width),q=Ye,ee=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(e.UNPACK_SKIP_ROWS,R),i.texSubImage2D(e.TEXTURE_2D,0,ke,R,q,ee,O,K,E.data)}x.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,L),i.pixelStorei(e.UNPACK_SKIP_PIXELS,se),i.pixelStorei(e.UNPACK_SKIP_ROWS,le)}}function Me(x,E,O){let K=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=e.TEXTURE_3D);const Y=ae(x,E),te=E.source;i.bindTexture(K,x.__webglTexture,e.TEXTURE0+O);const oe=n.get(te);if(te.version!==oe.__version||Y===!0){if(i.activeTexture(e.TEXTURE0+O),!(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)){const q=Ve.getPrimaries(Ve.workingColorSpace),ee=E.colorSpace===xi?null:Ve.getPrimaries(E.colorSpace),re=E.colorSpace===xi||q===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let L=g(E.image,!1,s.maxTextureSize);L=ht(E,L);const se=r.convert(E.format,E.colorSpace),le=r.convert(E.type);let Ae=C(E.internalFormat,se,le,E.normalized,E.colorSpace,E.isVideoTexture);X(K,E);let J;const Te=E.mipmaps,Ne=E.isVideoTexture!==!0,Ye=oe.__version===void 0||Y===!0,ke=te.dataReady,R=M(E,L);if(E.isDepthTexture)Ae=S(E.format===yn,E.type),Ye&&(Ne?i.texStorage2D(e.TEXTURE_2D,1,Ae,L.width,L.height):i.texImage2D(e.TEXTURE_2D,0,Ae,L.width,L.height,0,se,le,null));else if(E.isDataTexture)if(Te.length>0){Ne&&Ye&&i.texStorage2D(e.TEXTURE_2D,R,Ae,Te[0].width,Te[0].height);for(let q=0,ee=Te.length;q<ee;q++)J=Te[q],Ne?ke&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,J.width,J.height,se,le,J.data):i.texImage2D(e.TEXTURE_2D,q,Ae,J.width,J.height,0,se,le,J.data);E.generateMipmaps=!1}else Ne?(Ye&&i.texStorage2D(e.TEXTURE_2D,R,Ae,L.width,L.height),ke&&ue(E,L,se,le)):i.texImage2D(e.TEXTURE_2D,0,Ae,L.width,L.height,0,se,le,L.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&Ye&&i.texStorage3D(e.TEXTURE_2D_ARRAY,R,Ae,Te[0].width,Te[0].height,L.depth);for(let q=0,ee=Te.length;q<ee;q++)if(J=Te[q],E.format!==St)if(se!==null)if(Ne){if(ke)if(E.layerUpdates.size>0){const re=yl(J.width,J.height,E.format,E.type);for(const Ce of E.layerUpdates){const Z=J.data.subarray(Ce*re/J.data.BYTES_PER_ELEMENT,(Ce+1)*re/J.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,Ce,J.width,J.height,1,se,Z)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,J.width,J.height,L.depth,se,J.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,Ae,J.width,J.height,L.depth,0,J.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?ke&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,J.width,J.height,L.depth,se,le,J.data):i.texImage3D(e.TEXTURE_2D_ARRAY,q,Ae,J.width,J.height,L.depth,0,se,le,J.data)}else{Ne&&Ye&&i.texStorage2D(e.TEXTURE_2D,R,Ae,Te[0].width,Te[0].height);for(let q=0,ee=Te.length;q<ee;q++)J=Te[q],E.format!==St?se!==null?Ne?ke&&i.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,J.width,J.height,se,J.data):i.compressedTexImage2D(e.TEXTURE_2D,q,Ae,J.width,J.height,0,J.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?ke&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,J.width,J.height,se,le,J.data):i.texImage2D(e.TEXTURE_2D,q,Ae,J.width,J.height,0,se,le,J.data)}else if(E.isDataArrayTexture)if(Ne){if(Ye&&i.texStorage3D(e.TEXTURE_2D_ARRAY,R,Ae,L.width,L.height,L.depth),ke)if(E.layerUpdates.size>0){const q=yl(L.width,L.height,E.format,E.type);for(const ee of E.layerUpdates){const re=L.data.subarray(ee*q/L.data.BYTES_PER_ELEMENT,(ee+1)*q/L.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ee,L.width,L.height,1,se,le,re)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,se,le,L.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ae,L.width,L.height,L.depth,0,se,le,L.data);else if(E.isData3DTexture)Ne?(Ye&&i.texStorage3D(e.TEXTURE_3D,R,Ae,L.width,L.height,L.depth),ke&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,se,le,L.data)):i.texImage3D(e.TEXTURE_3D,0,Ae,L.width,L.height,L.depth,0,se,le,L.data);else if(E.isFramebufferTexture){if(Ye)if(Ne)i.texStorage2D(e.TEXTURE_2D,R,Ae,L.width,L.height);else{let q=L.width,ee=L.height;for(let re=0;re<R;re++)i.texImage2D(e.TEXTURE_2D,re,Ae,q,ee,0,se,le,null),q>>=1,ee>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){const q=e.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),L.parentNode!==q){q.appendChild(L),u.add(E),q.onpaint=Ie=>{const Re=Ie.changedElements;for(const Wt of u)Re.includes(Wt.image)&&(Wt.needsUpdate=!0)},q.requestPaint();return}const ee=0,re=e.RGBA,Ce=e.RGBA,Z=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,ee,re,Ce,Z,L),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ne&&Ye){const q=Se(Te[0]);i.texStorage2D(e.TEXTURE_2D,R,Ae,q.width,q.height)}for(let q=0,ee=Te.length;q<ee;q++)J=Te[q],Ne?ke&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,se,le,J):i.texImage2D(e.TEXTURE_2D,q,Ae,se,le,J);E.generateMipmaps=!1}else if(Ne){if(Ye){const q=Se(L);i.texStorage2D(e.TEXTURE_2D,R,Ae,q.width,q.height)}ke&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,se,le,L)}else i.texImage2D(e.TEXTURE_2D,0,Ae,se,le,L);f(E)&&_(K),oe.__version=te.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function Fe(x,E,O){if(E.image.length!==6)return;const K=ae(x,E),Y=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+O);const te=n.get(Y);if(Y.version!==te.__version||K===!0){i.activeTexture(e.TEXTURE0+O);const oe=Ve.getPrimaries(Ve.workingColorSpace),L=E.colorSpace===xi?null:Ve.getPrimaries(E.colorSpace),se=E.colorSpace===xi||oe===L?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!le&&!Ae?J[Z]=g(E.image[Z],!0,s.maxCubemapSize):J[Z]=Ae?E.image[Z].image:E.image[Z],J[Z]=ht(E,J[Z]);const Te=J[0],Ne=r.convert(E.format,E.colorSpace),Ye=r.convert(E.type),ke=C(E.internalFormat,Ne,Ye,E.normalized,E.colorSpace),R=E.isVideoTexture!==!0,q=te.__version===void 0||K===!0,ee=Y.dataReady;let re=M(E,Te);X(e.TEXTURE_CUBE_MAP,E);let Ce;if(le){R&&q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,re,ke,Te.width,Te.height);for(let Z=0;Z<6;Z++){Ce=J[Z].mipmaps;for(let Ie=0;Ie<Ce.length;Ie++){const Re=Ce[Ie];E.format!==St?Ne!==null?R?ee&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie,0,0,Re.width,Re.height,Ne,Re.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie,ke,Re.width,Re.height,0,Re.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?ee&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie,0,0,Re.width,Re.height,Ne,Ye,Re.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie,ke,Re.width,Re.height,0,Ne,Ye,Re.data)}}}else{if(Ce=E.mipmaps,R&&q){Ce.length>0&&re++;const Z=Se(J[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,re,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Ae){R?ee&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,J[Z].width,J[Z].height,Ne,Ye,J[Z].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,J[Z].width,J[Z].height,0,Ne,Ye,J[Z].data);for(let Ie=0;Ie<Ce.length;Ie++){const Re=Ce[Ie].image[Z].image;R?ee&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie+1,0,0,Re.width,Re.height,Ne,Ye,Re.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie+1,ke,Re.width,Re.height,0,Ne,Ye,Re.data)}}else{R?ee&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,Ye,J[Z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,Ne,Ye,J[Z]);for(let Ie=0;Ie<Ce.length;Ie++){const Re=Ce[Ie];R?ee&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie+1,0,0,Ne,Ye,Re.image[Z]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie+1,ke,Ne,Ye,Re.image[Z])}}}f(E)&&_(e.TEXTURE_CUBE_MAP),te.__version=Y.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function Be(x,E,O,K,Y,te){const oe=r.convert(O.format,O.colorSpace),L=r.convert(O.type),se=C(O.internalFormat,oe,L,O.normalized,O.colorSpace),le=n.get(E),Ae=n.get(O);if(Ae.__renderTarget=E,!le.__hasExternalTextures){const J=Math.max(1,E.width>>te),Te=Math.max(1,E.height>>te);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?i.texImage3D(Y,te,se,J,Te,E.depth,0,oe,L,null):i.texImage2D(Y,te,se,J,Te,0,oe,L,null)}i.bindFramebuffer(e.FRAMEBUFFER,x),Ze(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,Y,Ae.__webglTexture,0,Je(E)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,Y,Ae.__webglTexture,te),i.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(x,E,O){if(e.bindRenderbuffer(e.RENDERBUFFER,x),E.depthBuffer){const K=E.depthTexture,Y=K&&K.isDepthTexture?K.type:null,te=S(E.stencilBuffer,Y),oe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ze(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Je(E),te,E.width,E.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,Je(E),te,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,te,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,x)}else{const K=E.textures;for(let Y=0;Y<K.length;Y++){const te=K[Y],oe=r.convert(te.format,te.colorSpace),L=r.convert(te.type),se=C(te.internalFormat,oe,L,te.normalized,te.colorSpace);Ze(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Je(E),se,E.width,E.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,Je(E),se,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,se,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ke(x,E,O){const K=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,x),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(E.depthTexture);if(Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),X(e.TEXTURE_CUBE_MAP,E.depthTexture);const le=r.convert(E.depthTexture.format),Ae=r.convert(E.depthTexture.type);let J;E.depthTexture.format===Oi?J=e.DEPTH_COMPONENT24:E.depthTexture.format===yn&&(J=e.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,J,E.width,E.height,0,le,Ae,null)}}else j(E.depthTexture,0);const te=Y.__webglTexture,oe=Je(E),L=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,se=E.depthTexture.format===yn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oi)Ze(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,L,te,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,se,L,te,0);else if(E.depthTexture.format===yn)Ze(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,L,te,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,se,L,te,0);else throw new Error("Unknown depthTexture format")}function yt(x){const E=n.get(x),O=x.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==x.depthTexture){const K=x.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const Y=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",Y)};K.addEventListener("dispose",Y),E.__depthDisposeCallback=Y}E.__boundDepthTexture=K}if(x.depthTexture&&!E.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)Ke(E.__webglFramebuffer[K],x,K);else{const K=x.texture.mipmaps;K&&K.length>0?Ke(E.__webglFramebuffer[0],x,0):Ke(E.__webglFramebuffer,x,0)}else if(O){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=e.createRenderbuffer(),tt(E.__webglDepthbuffer[K],x,!1);else{const Y=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,te)}}else{const K=x.texture.mipmaps;if(K&&K.length>0?i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),tt(E.__webglDepthbuffer,x,!1);else{const Y=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,te)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(x,E,O){const K=n.get(x);E!==void 0&&Be(K.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&yt(x)}function Kt(x){const E=x.texture,O=n.get(x),K=n.get(E);x.addEventListener("dispose",v);const Y=x.textures,te=x.isWebGLCubeRenderTarget===!0,oe=Y.length>1;if(oe||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=E.version,a.memory.textures++),te){O.__webglFramebuffer=[];for(let L=0;L<6;L++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[L]=[];for(let se=0;se<E.mipmaps.length;se++)O.__webglFramebuffer[L][se]=e.createFramebuffer()}else O.__webglFramebuffer[L]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let L=0;L<E.mipmaps.length;L++)O.__webglFramebuffer[L]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(oe)for(let L=0,se=Y.length;L<se;L++){const le=n.get(Y[L]);le.__webglTexture===void 0&&(le.__webglTexture=e.createTexture(),a.memory.textures++)}if(x.samples>0&&Ze(x)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let L=0;L<Y.length;L++){const se=Y[L];O.__webglColorRenderbuffer[L]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[L]);const le=r.convert(se.format,se.colorSpace),Ae=r.convert(se.type),J=C(se.internalFormat,le,Ae,se.normalized,se.colorSpace,x.isXRRenderTarget===!0),Te=Je(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,Te,J,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+L,e.RENDERBUFFER,O.__webglColorRenderbuffer[L])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),tt(O.__webglDepthRenderbuffer,x,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),X(e.TEXTURE_CUBE_MAP,E);for(let L=0;L<6;L++)if(E.mipmaps&&E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)Be(O.__webglFramebuffer[L][se],x,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+L,se);else Be(O.__webglFramebuffer[L],x,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);f(E)&&_(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(oe){for(let L=0,se=Y.length;L<se;L++){const le=Y[L],Ae=n.get(le);let J=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(J=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(J,Ae.__webglTexture),X(J,le),Be(O.__webglFramebuffer,x,le,e.COLOR_ATTACHMENT0+L,J,0),f(le)&&_(J)}i.unbindTexture()}else{let L=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(L=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(L,K.__webglTexture),X(L,E),E.mipmaps&&E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)Be(O.__webglFramebuffer[se],x,E,e.COLOR_ATTACHMENT0,L,se);else Be(O.__webglFramebuffer,x,E,e.COLOR_ATTACHMENT0,L,0);f(E)&&_(L),i.unbindTexture()}x.depthBuffer&&yt(x)}function Bt(x){const E=x.textures;for(let O=0,K=E.length;O<K;O++){const Y=E[O];if(f(Y)){const te=b(x),oe=n.get(Y).__webglTexture;i.bindTexture(te,oe),_(te),i.unbindTexture()}}}const bt=[],D=[];function Ut(x){if(x.samples>0){if(Ze(x)===!1){const E=x.textures,O=x.width,K=x.height;let Y=e.COLOR_BUFFER_BIT;const te=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=n.get(x),L=E.length>1;if(L)for(let le=0;le<E.length;le++)i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const se=x.texture.mipmaps;se&&se.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<E.length;le++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),L){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ae=n.get(E[le]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ae,0)}e.blitFramebuffer(0,0,O,K,0,0,O,K,Y,e.NEAREST),l===!0&&(bt.length=0,D.length=0,bt.push(e.COLOR_ATTACHMENT0+le),x.depthBuffer&&x.resolveDepthBuffer===!1&&(bt.push(te),D.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,D)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,bt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),L)for(let le=0;le<E.length;le++){i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ae=n.get(E[le]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,Ae,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const E=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function Je(x){return Math.min(s.maxSamples,x.samples)}function Ze(x){const E=n.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function he(x){const E=a.render.frame;h.get(x)!==E&&(h.set(x,E),x.update())}function ht(x,E){const O=x.colorSpace,K=x.format,Y=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||O!==Qt&&O!==xi&&(Ve.getTransfer(O)===it?(K!==St||Y!==Ue)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",O)),E}function Se(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.getTextureUnits=Q,this.setTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=fe,this.rebindTextures=gt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function F_(e,t){function i(n,s=xi){let r;const a=Ve.getTransfer(s);if(n===Ue)return e.UNSIGNED_BYTE;if(n===po)return e.UNSIGNED_SHORT_4_4_4_4;if(n===go)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Tr)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===wr)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return e.BYTE;if(n===Gc)return e.SHORT;if(n===In)return e.UNSIGNED_SHORT;if(n===fo)return e.INT;if(n===Si)return e.UNSIGNED_INT;if(n===wt)return e.FLOAT;if(n===Dt)return e.HALF_FLOAT;if(n===Hc)return e.ALPHA;if(n===Gs)return e.RGB;if(n===St)return e.RGBA;if(n===Oi)return e.DEPTH_COMPONENT;if(n===yn)return e.DEPTH_STENCIL;if(n===sn)return e.RED;if(n===mo)return e.RED_INTEGER;if(n===$t)return e.RG;if(n===_o)return e.RG_INTEGER;if(n===vo)return e.RGBA_INTEGER;if(n===Kn||n===Sn||n===Br||n===xn)if(a===it)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===bo||n===jn||n===Hs)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jn)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===Vs||n===zs||n===Lr||n===Pr||n===Ws||n===Fr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dr||n===Vs)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zs)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lr)return r.COMPRESSED_R11_EAC;if(n===Pr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ws)return r.COMPRESSED_RG11_EAC;if(n===Fr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mn||n===Eo||n===Co||n===Io||n===Jn||n===yo||n===So||n===xo||n===Mo||n===To||n===wo||n===Bo||n===Ro||n===Do)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mn)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jn)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yn||n===Lo||n===Ur)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yn)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ur)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nr||n===Qr||n===qs||n===Or)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Or)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Q_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bi({vertexShader:U_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Wh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},O_=class extends li{constructor(e,t){super();const i=this;let n=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,A=null;const p=typeof XRWebGLBinding<"u",m=new Q_,g={},f=t.getContextAttributes();let _=null,b=null;const C=[],S=[],M=new je;let T=null;const v=new Ft;v.viewport=new lt;const y=new Ft;y.viewport=new lt;const N=[v,y],w=new Ag;let z=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ae=C[X];return ae===void 0&&(ae=new Ko,C[X]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(X){let ae=C[X];return ae===void 0&&(ae=new Ko,C[X]=ae),ae.getGripSpace()},this.getHand=function(X){let ae=C[X];return ae===void 0&&(ae=new Ko,C[X]=ae),ae.getHandSpace()};function Q(X){const ae=S.indexOf(X.inputSource);if(ae===-1)return;const Ee=C[ae];Ee!==void 0&&(Ee.update(X.inputSource,X.frame,l||r),Ee.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){n.removeEventListener("select",Q),n.removeEventListener("selectstart",Q),n.removeEventListener("selectend",Q),n.removeEventListener("squeeze",Q),n.removeEventListener("squeezestart",Q),n.removeEventListener("squeezeend",Q),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",G);for(let X=0;X<C.length;X++){const ae=S[X];ae!==null&&(S[X]=null,C[X].disconnect(ae))}z=null,F=null,m.reset();for(const X in g)delete g[X];e.setRenderTarget(_),d=null,u=null,h=null,n=null,b=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&p&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return A},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",Q),n.addEventListener("selectstart",Q),n.addEventListener("selectend",Q),n.addEventListener("squeeze",Q),n.addEventListener("squeezestart",Q),n.addEventListener("squeezeend",Q),n.addEventListener("end",V),n.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ee=null,ue=null;f.depth&&(ue=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=f.stencil?yn:Oi,Ee=f.stencil?ks:Si);const Me={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Me),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Ti(u.textureWidth,u.textureHeight,{format:St,type:Ue,depthTexture:new us(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ti(d.framebufferWidth,d.framebufferHeight,{format:St,type:Ue,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await n.requestReferenceSpace(a),ze.setContext(n),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(X){for(let ae=0;ae<X.removed.length;ae++){const Ee=X.removed[ae],ue=S.indexOf(Ee);ue>=0&&(S[ue]=null,C[ue].disconnect(Ee))}for(let ae=0;ae<X.added.length;ae++){const Ee=X.added[ae];let ue=S.indexOf(Ee);if(ue===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=S.length){S.push(Ee),ue=Fe;break}else if(S[Fe]===null){S[Fe]=Ee,ue=Fe;break}if(ue===-1)break}const Me=C[ue];Me&&Me.connect(Ee)}}const U=new B,j=new B;function $(X,ae,Ee){U.setFromMatrixPosition(ae.matrixWorld),j.setFromMatrixPosition(Ee.matrixWorld);const ue=U.distanceTo(j),Me=ae.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,Be=Me[14]/(Me[10]-1),tt=Me[14]/(Me[10]+1),Ke=(Me[9]+1)/Me[5],yt=(Me[9]-1)/Me[5],gt=(Me[8]-1)/Me[0],Kt=(Fe[8]+1)/Fe[0],Bt=Be*gt,bt=Be*Kt,D=ue/(-gt+Kt),Ut=D*-gt;if(ae.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(D),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Me[10]===-1)X.projectionMatrix.copy(ae.projectionMatrix),X.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Je=Be+D,Ze=tt+D,he=Bt-Ut,ht=bt+(ue-Ut),Se=Ke*tt/Ze*Je,x=yt*tt/Ze*Je;X.projectionMatrix.makePerspective(he,ht,Se,x,Je,Ze),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,ae){ae===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ae.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let ae=X.near,Ee=X.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),w.near=y.near=v.near=ae,w.far=y.far=v.far=Ee,(z!==w.near||F!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,F=w.far),w.layers.mask=X.layers.mask|6,v.layers.mask=w.layers.mask&-5,y.layers.mask=w.layers.mask&-3;const ue=X.parent,Me=w.cameras;ie(w,ue);for(let Fe=0;Fe<Me.length;Fe++)ie(Me[Fe],ue);Me.length===2?$(w,v,y):w.projectionMatrix.copy(v.projectionMatrix),fe(X,w,ue)};function fe(X,ae,Ee){Ee===null?X.matrix.copy(ae.matrixWorld):(X.matrix.copy(Ee.matrixWorld),X.matrix.invert(),X.matrix.multiply(ae.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ae.projectionMatrix),X.projectionMatrixInverse.copy(ae.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$n*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(X){o=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)},this.getCameraTexture=function(X){return g[X]};let be=null;function qe(X,ae){if(c=ae.getViewerPose(l||r),A=ae,c!==null){const Ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let ue=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let Fe=0;Fe<Ee.length;Fe++){const Be=Ee[Fe];let tt=null;if(d!==null)tt=d.getViewport(Be);else{const yt=h.getViewSubImage(u,Be);tt=yt.viewport,Fe===0&&(e.setRenderTargetTextures(b,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(b))}let Ke=N[Fe];Ke===void 0&&(Ke=new Ft,Ke.layers.enable(Fe),Ke.viewport=new lt,N[Fe]=Ke),Ke.matrix.fromArray(Be.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Be.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(tt.x,tt.y,tt.width,tt.height),Fe===0&&(w.matrix.copy(Ke.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(Ke)}const Me=n.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&p){h=i.getBinding();const Fe=h.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,n.renderState)}if(Me&&Me.includes("camera-access")&&p){e.state.unbindTexture(),h=i.getBinding();for(let Fe=0;Fe<Ee.length;Fe++){const Be=Ee[Fe].camera;if(Be){let tt=g[Be];tt||(tt=new zh,g[Be]=tt);const Ke=h.getCameraImage(Be);tt.sourceTexture=Ke}}}}for(let Ee=0;Ee<C.length;Ee++){const ue=S[Ee],Me=C[Ee];ue!==null&&Me!==void 0&&Me.update(ue,ae,l||r)}be&&be(X,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),A=null}const ze=new ad;ze.setAnimationLoop(qe),this.setAnimationLoop=function(X){be=X},this.dispose=function(){}}},k_=new pe,Fd=new Qe;Fd.set(-1,0,0,0,1,0,0,0,1);function G_(e,t){function i(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Xh(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,_,b,C){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&A(g,f,C)):f.isMeshMatcapMaterial?(r(g,f),p(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),m(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,b):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,i(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Nt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,i(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Nt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,i(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,i(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=t.get(f),b=_.envMap,C=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(C)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fd),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=b*.5,f.map&&(g.map.value=f.map,i(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function A(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,f){f.matcap&&(g.matcap.value=f.matcap)}function m(g,f){const _=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(e,t,i,n){let s={},r={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const C=b.program;n.uniformBlockBinding(_,C)}function c(_,b){let C=s[_.id];C===void 0&&(p(_),C=h(_),s[_.id]=C,_.addEventListener("dispose",g));const S=b.program;n.updateUBOMapping(_,S);const M=t.render.frame;r[_.id]!==M&&(d(_),r[_.id]=M)}function h(_){const b=u();_.__bindingPointIndex=b;const C=e.createBuffer(),S=_.__size,M=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,C),e.bufferData(e.UNIFORM_BUFFER,S,M),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,C),C}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const b=s[_.id],C=_.uniforms,S=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let M=0,T=C.length;M<T;M++){const v=Array.isArray(C[M])?C[M]:[C[M]];for(let y=0,N=v.length;y<N;y++){const w=v[y];if(A(w,M,y,S)===!0){const z=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let Q=0;for(let V=0;V<F.length;V++){const G=F[V],U=m(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,z+Q,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):ArrayBuffer.isView(G)?w.__data.set(new G.constructor(G.buffer,G.byteOffset,w.__data.length)):(G.toArray(w.__data,Q),Q+=U.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function A(_,b,C,S){const M=_.value,T=b+"_"+C;if(S[T]===void 0)return typeof M=="number"||typeof M=="boolean"?S[T]=M:ArrayBuffer.isView(M)?S[T]=M.slice():S[T]=M.clone(),!0;{const v=S[T];if(typeof M=="number"||typeof M=="boolean"){if(v!==M)return S[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(v.equals(M)===!1)return v.copy(M),!0}}return!1}function p(_){const b=_.uniforms;let C=0;const S=16;for(let T=0,v=b.length;T<v;T++){const y=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,w=y.length;N<w;N++){const z=y[N],F=Array.isArray(z.value)?z.value:[z.value];for(let Q=0,V=F.length;Q<V;Q++){const G=F[Q],U=m(G),j=C%S,$=j%U.boundary,ie=j+$;C+=$,ie!==0&&S-ie<U.storage&&(C+=S-ie),z.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=C,C+=U.storage}}}const M=C%S;return M>0&&(C+=S-M),_.__size=C,_.__cache={},this}function m(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",_),b}function g(_){const b=_.target;b.removeEventListener("dispose",g);const C=a.indexOf(b.__bindingPointIndex);a.splice(C,1),e.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const _ in s)e.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function z_(){return Pi===null&&(Pi=new aa(V_,16,16,$t,Dt),Pi.name="DFG_LUT",Pi.minFilter=dt,Pi.magFilter=dt,Pi.wrapS=ai,Pi.wrapT=ai,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var W_=class{constructor(e={}){const{canvas:t=qf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ue}=e;this.isWebGLRenderer=!0;let A;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=i.getContextAttributes().alpha}else A=r;const p=d,m=new Set([vo,_o,mo]),g=new Set([Ue,Si,In,ks,po,go]),f=new Uint32Array(4),_=new Int32Array(4),b=new B;let C=null,S=null;const M=[],T=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let N=!1,w=null;this._outputColorSpace=pt;let z=0,F=0,Q=null,V=-1,G=null;const U=new lt,j=new lt;let $=null;const ie=new Le(0);let fe=0,be=t.width,qe=t.height,ze=1,X=null,ae=null;const Ee=new lt(0,0,be,qe),ue=new lt(0,0,be,qe);let Me=!1;const Fe=new ca;let Be=!1,tt=!1;const Ke=new pe,yt=new B,gt=new lt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function bt(){return Q===null?ze:1}let D=i;function Ut(I,P){return t.getContext(I,P)}try{const I={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),D===null){const P="webgl2";if(D=Ut(P,I),D===null)throw Ut(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw we("WebGLRenderer: "+I.message),I}let Je,Ze,he,ht,Se,x,E,O,K,Y,te,oe,L,se,le,Ae,J,Te,Ne,Ye,ke,R,q;function ee(){Je=new zg(D),Je.init(),ke=new F_(D,Je),Ze=new Ug(D,Je,e,ke),he=new L_(D,Je),Ze.reversedDepthBuffer&&u&&he.buffers.depth.setReversed(!0),ht=new Xg(D),Se=new v_,x=new P_(D,Je,he,Se,Ze,ke,ht),E=new Vg(y),O=new Rg(D),R=new Pg(D,O),K=new Wg(D,O,ht,R),Y=new jg(D,K,O,R,ht),Te=new Kg(D,Ze,x),le=new Ng(Se),te=new __(y,E,Je,Ze,R,le),oe=new G_(y,Se),L=new E_,se=new M_(Je),J=new Lg(y,E,he,Y,A,o),Ae=new D_(y,Y,Ze),q=new H_(D,ht,Ze,he),Ne=new Fg(D,Je,ht),Ye=new qg(D,Je,ht),ht.programs=te.programs,y.capabilities=Ze,y.extensions=Je,y.properties=Se,y.renderLists=L,y.shadowMap=Ae,y.state=he,y.info=ht}ee(),p!==Ue&&(v=new Yg(p,t.width,t.height,n,s));const re=new O_(y,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const I=Je.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Je.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(I){I!==void 0&&(ze=I,this.setSize(be,qe,!1))},this.getSize=function(I){return I.set(be,qe)},this.setSize=function(I,P,W=!0){if(re.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}be=I,qe=P,t.width=Math.floor(I*ze),t.height=Math.floor(P*ze),W===!0&&(t.style.width=I+"px",t.style.height=P+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,I,P)},this.getDrawingBufferSize=function(I){return I.set(be*ze,qe*ze).floor()},this.setDrawingBufferSize=function(I,P,W){be=I,qe=P,ze=W,t.width=Math.floor(I*W),t.height=Math.floor(P*W),this.setViewport(0,0,I,P)},this.setEffects=function(I){if(p===Ue){we("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let P=0;P<I.length;P++)if(I[P].isOutputPass===!0){ve("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(Ee)},this.setViewport=function(I,P,W,H){I.isVector4?Ee.set(I.x,I.y,I.z,I.w):Ee.set(I,P,W,H),he.viewport(U.copy(Ee).multiplyScalar(ze).round())},this.getScissor=function(I){return I.copy(ue)},this.setScissor=function(I,P,W,H){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,P,W,H),he.scissor(j.copy(ue).multiplyScalar(ze).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(I){he.setScissorTest(Me=I)},this.setOpaqueSort=function(I){X=I},this.setTransparentSort=function(I){ae=I},this.getClearColor=function(I){return I.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(I=!0,P=!0,W=!0){let H=0;if(I){let k=!1;if(Q!==null){const ne=Q.texture.format;k=m.has(ne)}if(k){const ne=Q.texture.type,de=g.has(ne),ge=J.getClearColor(),me=J.getClearAlpha(),De=ge.r,Ge=ge.g,Xe=ge.b;de?(f[0]=De,f[1]=Ge,f[2]=Xe,f[3]=me,D.clearBufferuiv(D.COLOR,0,f)):(_[0]=De,_[1]=Ge,_[2]=Xe,_[3]=me,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}P&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),w=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),J.dispose(),L.dispose(),se.dispose(),Se.dispose(),E.dispose(),Y.dispose(),R.dispose(),q.dispose(),te.dispose(),re.dispose(),re.removeEventListener("sessionstart",vc),re.removeEventListener("sessionend",bc),En.stop()};function Ce(I){I.preventDefault(),Hr("WebGLRenderer: Context Lost."),N=!0}function Z(){Hr("WebGLRenderer: Context Restored."),N=!1;const I=ht.autoReset,P=Ae.enabled,W=Ae.autoUpdate,H=Ae.needsUpdate,k=Ae.type;ee(),ht.autoReset=I,Ae.enabled=P,Ae.autoUpdate=W,Ae.needsUpdate=H,Ae.type=k}function Ie(I){we("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Re(I){const P=I.target;P.removeEventListener("dispose",Re),Wt(P)}function Wt(I){ot(I),Se.remove(I)}function ot(I){const P=Se.get(I).programs;P!==void 0&&(P.forEach(function(W){te.releaseProgram(W)}),I.isShaderMaterial&&te.releaseShaderCache(I))}this.renderBufferDirect=function(I,P,W,H,k,ne){P===null&&(P=Kt);const de=k.isMesh&&k.matrixWorld.determinant()<0,ge=ef(I,P,W,H,k);he.setMaterial(H,de);let me=W.index,De=1;if(H.wireframe===!0){if(me=K.getWireframeAttribute(W),me===void 0)return;De=2}const Ge=W.drawRange,Xe=W.attributes.position;let xe=Ge.start*De,at=(Ge.start+Ge.count)*De;ne!==null&&(xe=Math.max(xe,ne.start*De),at=Math.min(at,(ne.start+ne.count)*De)),me!==null?(xe=Math.max(xe,0),at=Math.min(at,me.count)):Xe!=null&&(xe=Math.max(xe,0),at=Math.min(at,Xe.count));const At=at-xe;if(At<0||At===1/0)return;R.setup(k,H,ge,W,me);let ft,$e=Ne;if(me!==null&&(ft=O.get(me),$e=Ye,$e.setIndex(ft)),k.isMesh)H.wireframe===!0?(he.setLineWidth(H.wireframeLinewidth*bt()),$e.setMode(D.LINES)):$e.setMode(D.TRIANGLES);else if(k.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),he.setLineWidth(Rt*bt()),k.isLineSegments?$e.setMode(D.LINES):k.isLineLoop?$e.setMode(D.LINE_LOOP):$e.setMode(D.LINE_STRIP)}else k.isPoints?$e.setMode(D.POINTS):k.isSprite&&$e.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))$e.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Rt=k._multiDrawStarts,_e=k._multiDrawCounts,ri=k._multiDrawCount,et=me?O.get(me).bytesPerElement:1,Zt=Se.get(H).currentProgram.getUniforms();for(let Ci=0;Ci<ri;Ci++)Zt.setValue(D,"_gl_DrawID",Ci),$e.render(Rt[Ci]/et,_e[Ci])}else if(k.isInstancedMesh)$e.renderInstances(xe,At,k.count);else if(W.isInstancedBufferGeometry){const Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Rt);$e.renderInstances(xe,At,_e)}else $e.render(xe,At)};function Ei(I,P,W){I.transparent===!0&&I.side===Ii&&I.forceSinglePass===!1?(I.side=Nt,I.needsUpdate=!0,Ir(I,P,W),I.side=Ni,I.needsUpdate=!0,Ir(I,P,W),I.side=Ii):Ir(I,P,W)}this.compile=function(I,P,W=null){W===null&&(W=I),S=se.get(W),S.init(P),T.push(S),W.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),I!==W&&I.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();const H=new Set;return I.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ne=k.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const ge=ne[de];Ei(ge,W,k),H.add(ge)}else Ei(ne,W,k),H.add(ne)}),S=T.pop(),H},this.compileAsync=function(I,P,W=null){const H=this.compile(I,P,W);return new Promise(k=>{function ne(){if(H.forEach(function(de){Se.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){k(I);return}setTimeout(ne,10)}Je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let si=null;function ZA(I){si&&si(I)}function vc(){En.stop()}function bc(){En.start()}const En=new ad;En.setAnimationLoop(ZA),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(I){si=I,re.setAnimationLoop(I),I===null?En.stop():En.start()},re.addEventListener("sessionstart",vc),re.addEventListener("sessionend",bc),this.render=function(I,P){if(P!==void 0&&P.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;w!==null&&w.renderStart(I,P);const W=re.enabled===!0&&re.isPresenting===!0,H=v!==null&&(Q===null||W)&&v.begin(y,Q);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(P),P=re.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,P,Q),S=se.get(I,T.length),S.init(P),S.state.textureUnits=x.getTextureUnits(),T.push(S),Ke.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Fe.setFromProjectionMatrix(Ke,Mi,P.reversedDepth),tt=this.localClippingEnabled,Be=le.init(this.clippingPlanes,tt),C=L.get(I,M.length),C.init(),M.push(C),re.enabled===!0&&re.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Za(ne,P,-1/0,y.sortObjects)}Za(I,P,0,y.sortObjects),C.finish(),y.sortObjects===!0&&C.sort(X,ae),Bt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Bt&&J.addToRenderList(C,I),this.info.render.frame++,Be===!0&&le.beginShadows();const k=S.state.shadowsArray;if(Ae.render(k,I,P),Be===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&v.hasRenderPass())===!1){const ne=C.opaque,de=C.transmissive;if(S.setupLights(),P.isArrayCamera){const ge=P.cameras;if(de.length>0)for(let me=0,De=ge.length;me<De;me++){const Ge=ge[me];Cc(ne,de,I,Ge)}Bt&&J.render(I);for(let me=0,De=ge.length;me<De;me++){const Ge=ge[me];Ec(C,I,Ge,Ge.viewport)}}else de.length>0&&Cc(ne,de,I,P),Bt&&J.render(I),Ec(C,I,P)}Q!==null&&F===0&&(x.updateMultisampleRenderTarget(Q),x.updateRenderTargetMipmap(Q)),H&&v.end(y),I.isScene===!0&&I.onAfterRender(y,I,P),R.resetDefaultState(),V=-1,G=null,T.pop(),T.length>0?(S=T[T.length-1],x.setTextureUnits(S.state.textureUnits),Be===!0&&le.setGlobalState(y.clippingPlanes,S.state.camera)):S=null,M.pop(),M.length>0?C=M[M.length-1]:C=null,w!==null&&w.renderEnd()};function Za(I,P,W,H){if(I.visible===!1)return;if(I.layers.test(P.layers)){if(I.isGroup)W=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(P);else if(I.isLightProbeGrid)S.pushLightProbeGrid(I);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Fe.intersectsSprite(I)){H&&gt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ke);const ne=Y.update(I),de=I.material;de.visible&&C.push(I,ne,de,W,gt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Fe.intersectsObject(I))){const ne=Y.update(I),de=I.material;if(H&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),gt.copy(I.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),gt.copy(ne.boundingSphere.center)),gt.applyMatrix4(I.matrixWorld).applyMatrix4(Ke)),Array.isArray(de)){const ge=ne.groups;for(let me=0,De=ge.length;me<De;me++){const Ge=ge[me],Xe=de[Ge.materialIndex];Xe&&Xe.visible&&C.push(I,ne,Xe,W,gt.z,Ge)}}else de.visible&&C.push(I,ne,de,W,gt.z,null)}}const k=I.children;for(let ne=0,de=k.length;ne<de;ne++)Za(k[ne],P,W,H)}function Ec(I,P,W,H){const{opaque:k,transmissive:ne,transparent:de}=I;S.setupLightsView(W),Be===!0&&le.setGlobalState(y.clippingPlanes,W),H&&he.viewport(U.copy(H)),k.length>0&&Cr(k,P,W),ne.length>0&&Cr(ne,P,W),de.length>0&&Cr(de,P,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Cc(I,P,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){const Xe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new Ti(1,1,{generateMipmaps:!0,type:Xe?Dt:Ue,minFilter:oi,samples:Math.max(4,Ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const k=S.state.transmissionRenderTarget[H.id],ne=H.viewport||U;k.setSize(ne.z*y.transmissionResolutionScale,ne.w*y.transmissionResolutionScale);const de=y.getRenderTarget(),ge=y.getActiveCubeFace(),me=y.getActiveMipmapLevel();y.setRenderTarget(k),y.getClearColor(ie),fe=y.getClearAlpha(),fe<1&&y.setClearColor(16777215,.5),y.clear(),Bt&&J.render(W);const De=y.toneMapping;y.toneMapping=yi;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),Be===!0&&le.setGlobalState(y.clippingPlanes,H),Cr(I,W,H),x.updateMultisampleRenderTarget(k),x.updateRenderTargetMipmap(k),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let xe=0,at=P.length;xe<at;xe++){const{object:At,geometry:ft,material:$e,group:Rt}=P[xe];if($e.side===Ii&&At.layers.test(H.layers)){const _e=$e.side;$e.side=Nt,$e.needsUpdate=!0,Ic(At,W,H,ft,$e,Rt),$e.side=_e,$e.needsUpdate=!0,Xe=!0}}Xe===!0&&(x.updateMultisampleRenderTarget(k),x.updateRenderTargetMipmap(k))}y.setRenderTarget(de,ge,me),y.setClearColor(ie,fe),Ge!==void 0&&(H.viewport=Ge),y.toneMapping=De}function Cr(I,P,W){const H=P.isScene===!0?P.overrideMaterial:null;for(let k=0,ne=I.length;k<ne;k++){const de=I[k],{object:ge,geometry:me,group:De}=de;let Ge=de.material;Ge.allowOverride===!0&&H!==null&&(Ge=H),ge.layers.test(W.layers)&&Ic(ge,P,W,me,Ge,De)}}function Ic(I,P,W,H,k,ne){I.onBeforeRender(y,P,W,H,k,ne),I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),k.onBeforeRender(y,P,W,H,I,ne),k.transparent===!0&&k.side===Ii&&k.forceSinglePass===!1?(k.side=Nt,k.needsUpdate=!0,y.renderBufferDirect(W,P,H,k,I,ne),k.side=Ni,k.needsUpdate=!0,y.renderBufferDirect(W,P,H,k,I,ne),k.side=Ii):y.renderBufferDirect(W,P,H,k,I,ne),I.onAfterRender(y,P,W,H,k,ne)}function Ir(I,P,W){P.isScene!==!0&&(P=Kt);const H=Se.get(I),k=S.state.lights,ne=S.state.shadowsArray,de=k.state.version,ge=te.getParameters(I,k.state,ne,P,W,S.state.lightProbeGridArray),me=te.getProgramCacheKey(ge);let De=H.programs;H.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?P.environment:null,H.fog=P.fog;const Ge=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;H.envMap=E.get(I.envMap||H.environment,Ge),H.envMapRotation=H.environment!==null&&I.envMap===null?P.environmentRotation:I.envMapRotation,De===void 0&&(I.addEventListener("dispose",Re),De=new Map,H.programs=De);let Xe=De.get(me);if(Xe!==void 0){if(H.currentProgram===Xe&&H.lightsStateVersion===de)return Sc(I,ge),Xe}else ge.uniforms=te.getUniforms(I),w!==null&&I.isNodeMaterial&&w.build(I,W,ge),I.onBeforeCompile(ge,y),Xe=te.acquireProgram(ge,me),De.set(me,Xe),H.uniforms=ge.uniforms;const xe=H.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(xe.clippingPlanes=le.uniform),Sc(I,ge),H.needsLights=nf(I),H.lightsStateVersion=de,H.needsLights&&(xe.ambientLightColor.value=k.state.ambient,xe.lightProbe.value=k.state.probe,xe.directionalLights.value=k.state.directional,xe.directionalLightShadows.value=k.state.directionalShadow,xe.spotLights.value=k.state.spot,xe.spotLightShadows.value=k.state.spotShadow,xe.rectAreaLights.value=k.state.rectArea,xe.ltc_1.value=k.state.rectAreaLTC1,xe.ltc_2.value=k.state.rectAreaLTC2,xe.pointLights.value=k.state.point,xe.pointLightShadows.value=k.state.pointShadow,xe.hemisphereLights.value=k.state.hemi,xe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,xe.spotLightMatrix.value=k.state.spotLightMatrix,xe.spotLightMap.value=k.state.spotLightMap,xe.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=Xe,H.uniformsList=null,Xe}function yc(I){if(I.uniformsList===null){const P=I.currentProgram.getUniforms();I.uniformsList=xa.seqWithValue(P.seq,I.uniforms)}return I.uniformsList}function Sc(I,P){const W=Se.get(I);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function $A(I,P){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;b.setFromMatrixPosition(P.matrixWorld);for(let W=0,H=I.length;W<H;W++){const k=I[W];if(k.texture!==null&&k.boundingBox.containsPoint(b))return k}return null}function ef(I,P,W,H,k){P.isScene!==!0&&(P=Kt),x.resetTextureUnits();const ne=P.fog,de=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?P.environment:null,ge=Q===null?y.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ve.workingColorSpace,me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=E.get(H.envMap||de,me),Ge=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),xe=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,At=!!W.morphAttributes.color;let ft=yi;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ft=y.toneMapping);const $e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Rt=$e!==void 0?$e.length:0,_e=Se.get(H),ri=S.state.lights;if(Be===!0&&(tt===!0||I!==G)){const st=I===G&&H.id===V;le.setState(H,I,st)}let et=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==ri.state.version||_e.outputColorSpace!==ge||k.isBatchedMesh&&_e.batching===!1||!k.isBatchedMesh&&_e.batching===!0||k.isBatchedMesh&&_e.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&_e.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&_e.instancing===!1||!k.isInstancedMesh&&_e.instancing===!0||k.isSkinnedMesh&&_e.skinning===!1||!k.isSkinnedMesh&&_e.skinning===!0||k.isInstancedMesh&&_e.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&_e.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&_e.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&_e.instancingMorph===!1&&k.morphTexture!==null||_e.envMap!==De||H.fog===!0&&_e.fog!==ne||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==le.numPlanes||_e.numIntersection!==le.numIntersection)||_e.vertexAlphas!==Ge||_e.vertexTangents!==Xe||_e.morphTargets!==xe||_e.morphNormals!==at||_e.morphColors!==At||_e.toneMapping!==ft||_e.morphTargetsCount!==Rt||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,_e.__version=H.version);let Zt=_e.currentProgram;et===!0&&(Zt=Ir(H,P,k),w&&H.isNodeMaterial&&w.onUpdateProgram(H,Zt,_e));let Ci=!1,en=!1,Hn=!1;const rt=Zt.getUniforms(),mt=_e.uniforms;if(he.useProgram(Zt.program)&&(Ci=!0,en=!0,Hn=!0),H.id!==V&&(V=H.id,en=!0),_e.needsLights){const st=$A(S.state.lightProbeGridArray,k);_e.lightProbeGrid!==st&&(_e.lightProbeGrid=st,en=!0)}if(Ci||G!==I){he.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),rt.setValue(D,"projectionMatrix",I.projectionMatrix),rt.setValue(D,"viewMatrix",I.matrixWorldInverse);const st=rt.map.cameraPosition;st!==void 0&&st.setValue(D,yt.setFromMatrixPosition(I.matrixWorld)),Ze.logarithmicDepthBuffer&&rt.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rt.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,en=!0,Hn=!0)}if(_e.needsLights&&(ri.state.directionalShadowMap.length>0&&rt.setValue(D,"directionalShadowMap",ri.state.directionalShadowMap,x),ri.state.spotShadowMap.length>0&&rt.setValue(D,"spotShadowMap",ri.state.spotShadowMap,x),ri.state.pointShadowMap.length>0&&rt.setValue(D,"pointShadowMap",ri.state.pointShadowMap,x)),k.isSkinnedMesh){rt.setOptional(D,k,"bindMatrix"),rt.setOptional(D,k,"bindMatrixInverse");const st=k.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),rt.setValue(D,"boneTexture",st.boneTexture,x))}k.isBatchedMesh&&(rt.setOptional(D,k,"batchingTexture"),rt.setValue(D,"batchingTexture",k._matricesTexture,x),rt.setOptional(D,k,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",k._indirectTexture,x),rt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&rt.setValue(D,"batchingColorTexture",k._colorsTexture,x));const tn=W.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Te.update(k,W,Zt),(en||_e.receiveShadow!==k.receiveShadow)&&(_e.receiveShadow=k.receiveShadow,rt.setValue(D,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&P.environment!==null&&(mt.envMapIntensity.value=P.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=z_()),en){if(rt.setValue(D,"toneMappingExposure",y.toneMappingExposure),_e.needsLights&&tf(mt,Hn),ne&&H.fog===!0&&oe.refreshFogUniforms(mt,ne),oe.refreshMaterialUniforms(mt,H,ze,qe,S.state.transmissionRenderTarget[I.id]),_e.needsLights&&_e.lightProbeGrid){const st=_e.lightProbeGrid;mt.probesSH.value=st.texture,mt.probesMin.value.copy(st.boundingBox.min),mt.probesMax.value.copy(st.boundingBox.max),mt.probesResolution.value.copy(st.resolution)}xa.upload(D,yc(_e),mt,x)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xa.upload(D,yc(_e),mt,x),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rt.setValue(D,"center",k.center),rt.setValue(D,"modelViewMatrix",k.modelViewMatrix),rt.setValue(D,"normalMatrix",k.normalMatrix),rt.setValue(D,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){const st=H.uniformsGroups;for(let Ns=0,Vn=st.length;Ns<Vn;Ns++){const xc=st[Ns];q.update(xc,Zt),q.bind(xc,Zt)}}return Zt}function tf(I,P){I.ambientLightColor.needsUpdate=P,I.lightProbe.needsUpdate=P,I.directionalLights.needsUpdate=P,I.directionalLightShadows.needsUpdate=P,I.pointLights.needsUpdate=P,I.pointLightShadows.needsUpdate=P,I.spotLights.needsUpdate=P,I.spotLightShadows.needsUpdate=P,I.rectAreaLights.needsUpdate=P,I.hemisphereLights.needsUpdate=P}function nf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(I,P,W){const H=Se.get(I);H.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(I.texture).__webglTexture=P,Se.get(I.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,P){const W=Se.get(I);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0};const sf=D.createFramebuffer();this.setRenderTarget=function(I,P=0,W=0){Q=I,z=P,F=W;let H=null,k=!1,ne=!1;if(I){const de=Se.get(I);if(de.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),U.copy(I.viewport),j.copy(I.scissor),$=I.scissorTest,he.viewport(U),he.scissor(j),he.setScissorTest($),V=-1;return}else if(de.__webglFramebuffer===void 0)x.setupRenderTarget(I);else if(de.__hasExternalTextures)x.rebindTextures(I,Se.get(I.texture).__webglTexture,Se.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const De=I.depthTexture;if(de.__boundDepthTexture!==De){if(De!==null&&Se.has(De)&&(I.width!==De.image.width||I.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(I)}}const ge=I.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ne=!0);const me=Se.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(me[P])?H=me[P][W]:H=me[P],k=!0):I.samples>0&&x.useMultisampledRTT(I)===!1?H=Se.get(I).__webglMultisampledFramebuffer:Array.isArray(me)?H=me[W]:H=me,U.copy(I.viewport),j.copy(I.scissor),$=I.scissorTest}else U.copy(Ee).multiplyScalar(ze).floor(),j.copy(ue).multiplyScalar(ze).floor(),$=Me;if(W!==0&&(H=sf),he.bindFramebuffer(D.FRAMEBUFFER,H)&&he.drawBuffers(I,H),he.viewport(U),he.scissor(j),he.setScissorTest($),k){const de=Se.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,de.__webglTexture,W)}else if(ne){const de=P;for(let ge=0;ge<I.textures.length;ge++){const me=Se.get(I.textures[ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ge,me.__webglTexture,W,de)}}else if(I!==null&&W!==0){const de=Se.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(I,P,W,H,k,ne,de,ge=0){if(!(I&&I.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){he.bindFramebuffer(D.FRAMEBUFFER,me);try{const De=I.textures[ge],Ge=De.format,Xe=De.type;if(I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!Ze.textureFormatReadable(Ge)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Xe)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=I.width-H&&W>=0&&W<=I.height-k&&D.readPixels(P,W,H,k,ke.convert(Ge),ke.convert(Xe),ne)}finally{const De=Q!==null?Se.get(Q).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(I,P,W,H,k,ne,de,ge=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(P>=0&&P<=I.width-H&&W>=0&&W<=I.height-k){he.bindFramebuffer(D.FRAMEBUFFER,me);const De=I.textures[ge],Ge=De.format,Xe=De.type;if(I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!Ze.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),D.readPixels(P,W,H,k,ke.convert(Ge),ke.convert(Xe),0);const at=Q!==null?Se.get(Q).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,at);const At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xf(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(xe),D.deleteSync(At),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,P=null,W=0){const H=Math.pow(2,-W),k=Math.floor(I.image.width*H),ne=Math.floor(I.image.height*H),de=P!==null?P.x:0,ge=P!==null?P.y:0;x.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,de,ge,k,ne),he.unbindTexture()};const rf=D.createFramebuffer(),af=D.createFramebuffer();this.copyTextureToTexture=function(I,P,W=null,H=null,k=0,ne=0){let de,ge,me,De,Ge,Xe,xe,at,At;const ft=I.isCompressedTexture?I.mipmaps[ne]:I.image;if(W!==null)de=W.max.x-W.min.x,ge=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,Ge=W.min.y,Xe=W.isBox3?W.min.z:0;else{const mt=Math.pow(2,-k);de=Math.floor(ft.width*mt),ge=Math.floor(ft.height*mt),I.isDataArrayTexture?me=ft.depth:I.isData3DTexture?me=Math.floor(ft.depth*mt):me=1,De=0,Ge=0,Xe=0}H!==null?(xe=H.x,at=H.y,At=H.z):(xe=0,at=0,At=0);const $e=ke.convert(P.format),Rt=ke.convert(P.type);let _e;P.isData3DTexture?(x.setTexture3D(P,0),_e=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(x.setTexture2DArray(P,0),_e=D.TEXTURE_2D_ARRAY):(x.setTexture2D(P,0),_e=D.TEXTURE_2D),he.activeTexture(D.TEXTURE0),he.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),he.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),he.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const ri=he.getParameter(D.UNPACK_ROW_LENGTH),et=he.getParameter(D.UNPACK_IMAGE_HEIGHT),Zt=he.getParameter(D.UNPACK_SKIP_PIXELS),Ci=he.getParameter(D.UNPACK_SKIP_ROWS),en=he.getParameter(D.UNPACK_SKIP_IMAGES);he.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),he.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),he.pixelStorei(D.UNPACK_SKIP_PIXELS,De),he.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),he.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);const Hn=I.isDataArrayTexture||I.isData3DTexture,rt=P.isDataArrayTexture||P.isData3DTexture;if(I.isDepthTexture){const mt=Se.get(I),tn=Se.get(P),st=Se.get(mt.__renderTarget),Ns=Se.get(tn.__renderTarget);he.bindFramebuffer(D.READ_FRAMEBUFFER,st.__webglFramebuffer),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Vn=0;Vn<me;Vn++)Hn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(I).__webglTexture,k,Xe+Vn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(P).__webglTexture,ne,At+Vn)),D.blitFramebuffer(De,Ge,de,ge,xe,at,de,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||I.isRenderTargetTexture||Se.has(I)){const mt=Se.get(I),tn=Se.get(P);he.bindFramebuffer(D.READ_FRAMEBUFFER,rf),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,af);for(let st=0;st<me;st++)Hn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,k,Xe+st):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,k),rt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,ne,At+st):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,ne),k!==0?D.blitFramebuffer(De,Ge,de,ge,xe,at,de,ge,D.COLOR_BUFFER_BIT,D.NEAREST):rt?D.copyTexSubImage3D(_e,ne,xe,at,At+st,De,Ge,de,ge):D.copyTexSubImage2D(_e,ne,xe,at,De,Ge,de,ge);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rt?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(_e,ne,xe,at,At,de,ge,me,$e,Rt,ft.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,ne,xe,at,At,de,ge,me,$e,ft.data):D.texSubImage3D(_e,ne,xe,at,At,de,ge,me,$e,Rt,ft):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,xe,at,de,ge,$e,Rt,ft.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,xe,at,ft.width,ft.height,$e,ft.data):D.texSubImage2D(D.TEXTURE_2D,ne,xe,at,de,ge,$e,Rt,ft);he.pixelStorei(D.UNPACK_ROW_LENGTH,ri),he.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),he.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),he.pixelStorei(D.UNPACK_SKIP_ROWS,Ci),he.pixelStorei(D.UNPACK_SKIP_IMAGES,en),ne===0&&P.generateMipmaps&&D.generateMipmap(_e),he.unbindTexture()},this.initRenderTarget=function(I){Se.get(I).__webglFramebuffer===void 0&&x.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?x.setTextureCube(I,0):I.isData3DTexture?x.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?x.setTexture2DArray(I,0):x.setTexture2D(I,0),he.unbindTexture()},this.resetState=function(){z=0,F=0,Q=null,he.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}},q_=Object.defineProperty,X_=(e,t,i)=>t in e?q_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Ud=(e,t,i)=>X_(e,typeof t!="symbol"?t+"":t,i),xs=class{static setXRSession(t){t!==this.session&&(this.flushPending(),this.session=t)}static requestAnimationFrame(t){const{session:i,pending:n}=this;let s;const r=()=>{n.delete(s),t()};return i?s=i.requestAnimationFrame(r):s=requestAnimationFrame(r),n.set(s,t),s}static cancelAnimationFrame(t){const{pending:i,session:n}=this;i.delete(t),n?n.cancelAnimationFrame(t):cancelAnimationFrame(t)}static flushPending(){this.pending.forEach((t,i)=>{t(),this.cancelAnimationFrame(i)})}};Ud(xs,"pending",new Map),Ud(xs,"session",null);var Nd=2**30,K_=class{get unloadPriorityCallback(){return this._unloadPriorityCallback}set unloadPriorityCallback(t){t.length===1?(console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'),this._unloadPriorityCallback=(i,n)=>{const s=t(i),r=t(n);return s<r?-1:s>r?1:0}):this._unloadPriorityCallback=t}constructor(){this.minSize=6e3,this.maxSize=8e3,this.minBytesSize=.3*Nd,this.maxBytesSize=.4*Nd,this.unloadPercent=.05,this.autoMarkUnused=!0,this.itemSet=new Map,this.itemList=[],this.usedSet=new Set,this.callbacks=new Map,this.unloadingHandle=-1,this.cachedBytes=0,this.bytesMap=new Map,this.loadedSet=new Set,this._unloadPriorityCallback=null;const t=this.itemSet;this.defaultPriorityCallback=i=>t.get(i)}isFull(){return this.itemSet.size>=this.maxSize||this.cachedBytes>=this.maxBytesSize}getMemoryUsage(t){return this.bytesMap.get(t)||0}setMemoryUsage(t,i){const{bytesMap:n,itemSet:s}=this;s.has(t)&&(this.cachedBytes-=n.get(t)||0,n.set(t,i),this.cachedBytes+=i)}add(t,i){const n=this.itemSet;if(n.has(t)||this.isFull())return!1;const s=this.usedSet,r=this.itemList,a=this.callbacks;return r.push(t),s.add(t),n.set(t,Date.now()),a.set(t,i),!0}has(t){return this.itemSet.has(t)}remove(t){const i=this.usedSet,n=this.itemSet,s=this.itemList,r=this.bytesMap,a=this.callbacks,o=this.loadedSet;if(n.has(t)){this.cachedBytes-=r.get(t)||0,r.delete(t),a.get(t)(t);const l=s.indexOf(t);return s.splice(l,1),i.delete(t),n.delete(t),a.delete(t),o.delete(t),!0}return!1}setLoaded(t,i){const{itemSet:n,loadedSet:s}=this;n.has(t)&&(i===!0?s.add(t):s.delete(t))}markUsed(t){const i=this.itemSet,n=this.usedSet;i.has(t)&&!n.has(t)&&(i.set(t,Date.now()),n.add(t))}markUnused(t){this.usedSet.delete(t)}markAllUnused(){this.usedSet.clear()}isUsed(t){return this.usedSet.has(t)}unloadUnusedContent(){const{unloadPercent:t,minSize:i,maxSize:n,itemList:s,itemSet:r,usedSet:a,loadedSet:o,callbacks:l,bytesMap:c,minBytesSize:h,maxBytesSize:u}=this,d=s.length-a.size,A=s.length-o.size,p=Math.max(Math.min(s.length-i,d),0),m=this.cachedBytes-h,g=this.unloadPriorityCallback||this.defaultPriorityCallback;let f=!1;const _=p>0&&d>0||A&&s.length>n;if(d&&this.cachedBytes>h||A&&this.cachedBytes>u||_){s.sort((y,N)=>{const w=a.has(y);if(w===a.has(N)){const z=o.has(y);return z===o.has(N)?-g(y,N):z?1:-1}else return w?1:-1});const b=Math.max(i*t,p*t),C=Math.ceil(Math.min(b,d,p)),S=Math.max(t*m,t*h),M=Math.min(S,m);let T=0,v=0;for(;this.cachedBytes-v>u||s.length-T>n;){const y=s[T],N=c.get(y)||0;if(a.has(y)&&o.has(y)||this.cachedBytes-v-N<u&&s.length-T<=n)break;v+=N,T++}for(;v<M||T<C;){const y=s[T],N=c.get(y)||0;if(a.has(y)||this.cachedBytes-v-N<h&&T>=C)break;v+=N,T++}s.splice(0,T).forEach(y=>{this.cachedBytes-=c.get(y)||0,l.get(y)(y),c.delete(y),r.delete(y),l.delete(y),o.delete(y),a.delete(y)}),f=T<p||v<m&&T<d,f=f&&T>0}f&&(this.unloadingHandle=xs.requestAnimationFrame(()=>this.scheduleUnload()))}scheduleUnload(){xs.cancelAnimationFrame(this.unloadingHandle),this.scheduled||(this.scheduled=!0,queueMicrotask(()=>{this.scheduled=!1,this.unloadUnusedContent()}))}},Qd=class extends Error{constructor(){super("PriorityQueue: Item removed"),this.name="PriorityQueueItemRemovedError"}},Pl=class{get running(){return this.items.length!==0||this.currJobs!==0}get schedulingCallback(){return this._schedulingCallback}set schedulingCallback(t){console.log('PriorityQueue: Setting "schedulingCallback" has been deprecated. Use Scheduler to switch to an XRSession rAF, instead.'),this._schedulingCallback=t}constructor(){this.maxJobs=6,this.items=[],this.callbacks=new Map,this.currJobs=0,this.scheduled=!1,this.autoUpdate=!0,this.priorityCallback=null,this._schedulingCallback=t=>{xs.requestAnimationFrame(t)},this._runjobs=()=>{this.scheduled=!1,this.tryRunJobs()}}sort(){const t=this.priorityCallback,i=this.items;t!==null&&i.sort(t)}has(t){return this.callbacks.has(t)}add(t,i){const n={callback:i,reject:null,resolve:null,promise:null};return n.promise=new Promise((s,r)=>{const a=this.items,o=this.callbacks;n.resolve=s,n.reject=r,a.unshift(t),o.set(t,n),this.autoUpdate&&this.scheduleJobRun()}),n.promise}remove(t){const i=this.items,n=this.callbacks,s=i.indexOf(t);if(s!==-1){const r=n.get(t);r.promise.catch(a=>{if(!(a instanceof Qd))throw a}),r.reject(new Qd),i.splice(s,1),n.delete(t)}}removeByFilter(t){const{items:i}=this;for(let n=0;n<i.length;n++){const s=i[n];t(s)&&(this.remove(s),n--)}}tryRunJobs(){this.sort();const t=this.items,i=this.callbacks,n=this.maxJobs;let s=0;const r=()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()};for(;n>this.currJobs&&t.length>0&&s<n;){this.currJobs++,s++;const a=t.pop(),{callback:o,resolve:l,reject:c}=i.get(a);i.delete(a);let h;try{h=o(a)}catch(u){c(u),r()}h instanceof Promise?h.then(l).catch(c).finally(r):(l(h),r())}}flush(t){const{items:i,callbacks:n}=this,s=i.indexOf(t);if(!n.has(t))return;const{callback:r,resolve:a,reject:o}=n.get(t);n.delete(t),i.splice(s,1);let l;try{l=r(t)}catch(c){o(c);return}return l instanceof Promise?l.then(a).catch(o):a(l),l}scheduleJobRun(){this.scheduled||(this._schedulingCallback(this._runjobs),this.scheduled=!0)}},Fn=-1,fn=0,Ta=1,wa=2,Fl=3,vi=4,Od=6378137,j_=6356752314245179e-9;function J_(e,t=null,i=null){const n=[];for(n.push(e),n.push(null),n.push(0);n.length>0;){const s=n.pop(),r=n.pop(),a=n.pop();if(t&&t(a,r,s)){i&&i(a,r,s);return}const o=a.children;if(o)for(let l=o.length-1;l>=0;l--)n.push(o[l]),n.push(a),n.push(s+1);i&&i(a,r,s)}}function Ms(e){if(e===null||e.byteLength<4)return"";let t;if(e instanceof DataView?t=e:t=new DataView(e),String.fromCharCode(t.getUint8(0))==="{")return null;let i="";for(let n=0;n<4;n++)i+=String.fromCharCode(t.getUint8(n));return i}var Y_=new TextDecoder;function kd(e){return Y_.decode(e)}function Ul(e){return e.replace(/[\\/][^\\/]+$/,"")+"/"}var Ba=class{constructor(){this.fetchOptions={},this.workingPath=""}load(...t){return console.warn('Loader: "load" function has been deprecated in favor of "loadAsync".'),this.loadAsync(...t)}loadAsync(t){return fetch(t,this.fetchOptions).then(i=>{if(!i.ok)throw new Error(`Failed to load file "${t}" with status ${i.status} : ${i.statusText}`);return i.arrayBuffer()}).then(i=>(this.workingPath===""&&(this.workingPath=Ul(t)),this.parse(i)))}resolveExternalURL(t){return new URL(t,this.workingPath).href}parse(t){throw new Error("LoaderBase: Parse not implemented.")}};function Gd(e){if(!e)return null;let t=e.length;const i=e.indexOf("?"),n=e.indexOf("#");i!==-1&&(t=Math.min(t,i)),n!==-1&&(t=Math.min(t,n));const s=e.lastIndexOf(".",t),r=e.lastIndexOf("/",t),a=e.indexOf("://");return a!==-1&&a+2===r||s===-1||s<r?null:e.substring(s+1,t)||null}var Ra={inView:!1,error:1/0,distanceFromCamera:1/0};function Da(e){return e===vi||e===Fn}function ji(e,t){return Nl(e)&&e.traversal.lastFrameVisited===t&&e.traversal.used}function Nl(e){return!!e.traversal}function fr(e){const{children:t}=e,i=t.length===0||Nl(t[t.length-1]),n=!e.internal.hasUnrenderableContent||Da(e.internal.loadingState);return i&&n}function Un(e){return e.internal.hasUnrenderableContent||e.parent&&e.parent.geometricError<e.geometricError}function La(e,t){t.ensureChildrenArePreprocessed(e),e.traversal.lastFrameVisited!==t.frameCount&&(e.traversal.lastFrameVisited=t.frameCount,e.traversal.used=!1,e.traversal.inFrustum=!1,e.traversal.isLeaf=!1,e.traversal.visible=!1,e.traversal.active=!1,e.traversal.error=1/0,e.traversal.distanceFromCamera=1/0,e.traversal.allChildrenReady=!1,e.traversal.allChildrenLoaded=!1,e.traversal.kicked=!1,e.traversal.allUsedChildrenProcessed=!1,t.calculateTileViewErrorWithPlugin(e,Ra),e.traversal.inFrustum=Ra.inView,e.traversal.error=Ra.error,e.traversal.distanceFromCamera=Ra.distanceFromCamera)}function Ql(e,t,i=!1){if(La(e,t),i?t.markTileUsed(e):Pa(e),Un(e)&&fr(e)){const n=e.children;for(let s=0,r=n.length;s<r;s++)Ql(n[s],t,i)}}function Hd(e,t){if(La(e,t),e.traversal.usedLastFrame&&(Pa(e),e.traversal.wasSetActive&&(e.traversal.active=!0),(!e.traversal.active||Un(e))&&fr(e))){const i=e.children;for(let n=0,s=i.length;n<s;n++)Hd(i[n],t)}}function Pa(e){e.traversal.used=!0}function Z_(e,t){return!(e.traversal.error<=t.errorTarget&&!Un(e)||t.maxDepth>0&&e.internal.depth+1>=t.maxDepth||!fr(e))}function Vd(e,t){const{frameCount:i}=t,{children:n}=e;for(let s=0,r=n.length;s<r;s++){const a=n[s];ji(a,i)&&(a.traversal.active&&(a.traversal.kicked=!0,a.traversal.active=!1),Vd(a,t))}}function zd(e){return!Un(e)&&(!e.internal.hasContent||Da(e.internal.loadingState))}function Wd(e,t){if(La(e,t),!e.traversal.inFrustum)return;if(!Z_(e,t)){Pa(e);return}let i=!1,n=!1;const s=e.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];Wd(o,t),i=i||ji(o,t.frameCount),n=n||o.traversal.inFrustum}if(e.refine==="REPLACE"&&!n&&s.length!==0){e.traversal.inFrustum=!1,t.markTileUsed(e);for(let r=0,a=s.length;r<a;r++)Ql(s[r],t,!0);return}if(Pa(e),e.refine==="REPLACE"&&i&&(t.loadSiblings||t.loadAncestors))for(let r=0,a=s.length;r<a;r++)Ql(s[r],t)}function qd(e,t){const i=t.frameCount;if(!ji(e,i))return;const n=e.children;let s=!1;for(let a=0,o=n.length;a<o;a++){const l=n[a];s=s||ji(l,i)}if(!s)e.traversal.isLeaf=!0;else{for(let o=0,l=n.length;o<l;o++)qd(n[o],t);let a=!0;for(let o=0,l=n.length;o<l;o++){const c=n[o];if(ji(c,i)){const h=!Un(c),u=!c.internal.hasContent||Da(c.internal.loadingState);h&&u||c.traversal.allChildrenLoaded||(a=!1)}}e.traversal.allChildrenLoaded=a}let r=!0;for(let a=0,o=n.length;a<o;a++){const l=n[a];ji(l,t.frameCount)&&!l.traversal.allUsedChildrenProcessed&&(r=!1)}e.traversal.allUsedChildrenProcessed=r&&fr(e)}function Xd(e,t){if(!ji(e,t.frameCount))return;const i=e.children;if(t.loadAncestors&&!e.traversal.allChildrenLoaded&&!Un(e)&&(e.traversal.isLeaf=!0),e.traversal.isLeaf){if(!Un(e)&&(e.traversal.active=!0,fr(e)&&e.internal.hasContent&&!Da(e.internal.loadingState)))for(let s=0,r=i.length;s<r;s++)Hd(i[s],t);return}let n=i.length>0;for(let s=0,r=i.length;s<r;s++){const a=i[s];Xd(a,t),ji(a,t.frameCount)&&!(a.traversal.active&&zd(a))&&!a.traversal.allChildrenReady&&(n=!1)}e.traversal.allChildrenReady=n,!n&&e.traversal.wasSetActive&&zd(e)&&(e.traversal.active=!0,Vd(e,t))}function Kd(e,t){const i=ji(e,t.frameCount);if(i&&((e.internal.hasUnrenderableContent||e.internal.hasRenderableContent&&e.refine==="ADD")&&(e.traversal.active=!0),(e.traversal.active||e.traversal.kicked)&&e.internal.hasContent&&(t.markTileUsed(e),(e.internal.hasUnrenderableContent||e.traversal.allUsedChildrenProcessed)&&t.queueTileForDownload(e),e.internal.loadingState!==vi&&(e.traversal.active=!1)),t.loadAncestors&&e.internal.hasContent&&(t.markTileUsed(e),t.queueTileForDownload(e)),e.internal.virtualChildCount>0&&e.internal.hasContent&&t.markTileUsed(e),e.traversal.visible=e.internal.hasRenderableContent&&e.traversal.active&&e.traversal.inFrustum&&e.internal.loadingState===vi,t.stats.used++,e.traversal.inFrustum&&t.stats.inFrustum++),i||Nl(e)&&e.traversal.usedLastFrame){let n=!1,s=!1;i?(n=e.traversal.active,t.displayActiveTiles?s=e.traversal.active||e.traversal.visible:s=e.traversal.visible):La(e,t),e.internal.hasRenderableContent&&e.internal.loadingState===vi?(n&&t.stats.active++,s&&t.stats.visible++,e.traversal.wasSetActive!==n&&t.invokeOnePlugin(a=>a.setTileActive&&a.setTileActive(e,n)),e.traversal.wasSetVisible!==s&&t.invokeOnePlugin(a=>a.setTileVisible&&a.setTileVisible(e,s))):e.internal.hasRenderableContent||(s=e.traversal.isLeaf,e.traversal.wasSetVisible!==s&&t.invokeOnePlugin(a=>a.setEmptyTileVisible&&a.setEmptyTileVisible(e,s))),e.traversal.wasSetActive=n,e.traversal.wasSetVisible=s,e.traversal.usedLastFrame=i;const r=e.children;for(let a=0,o=r.length;a<o;a++){const l=r[a];Kd(l,t)}}}function $_(e,t){Wd(e,t),qd(e,t),Xd(e,t),Kd(e,t)}var Fa={inView:!1,error:1/0,distanceFromCamera:1/0},ev=!0;function jd(e){return e===vi||e===Fn}function pn(e,t){return Ol(e)&&e.traversal.lastFrameVisited===t&&e.traversal.used}function Ol(e){return!!e.traversal}function kl(e){const t=e.children;return t.length===0||Ol(t[t.length-1])}function Gl(e){return e.internal.hasUnrenderableContent||e.parent&&e.parent.geometricError<e.geometricError}function Hl(e,t){e.traversal.lastFrameVisited!==t.frameCount&&(e.traversal.lastFrameVisited=t.frameCount,e.traversal.used=!1,e.traversal.inFrustum=!1,e.traversal.isLeaf=!1,e.traversal.visible=!1,e.traversal.active=!1,e.traversal.error=1/0,e.traversal.distanceFromCamera=1/0,e.traversal.allChildrenReady=!1,t.calculateTileViewErrorWithPlugin(e,Fa),e.traversal.inFrustum=Fa.inView,e.traversal.error=Fa.error,e.traversal.distanceFromCamera=Fa.distanceFromCamera)}function Vl(e,t,i=!1){if(t.ensureChildrenArePreprocessed(e),Hl(e,t),zl(e,t,i),Gl(e)&&kl(e)){const n=e.children;for(let s=0,r=n.length;s<r;s++)Vl(n[s],t,i)}}function Jd(e,t){if(t.ensureChildrenArePreprocessed(e),pn(e,t.frameCount)&&(e.internal.hasContent&&t.queueTileForDownload(e),kl(e))){const i=e.children;for(let n=0,s=i.length;n<s;n++)Jd(i[n],t)}}function zl(e,t,i=!1){e.traversal.used||(i||(e.traversal.used=!0,t.stats.used++),t.markTileUsed(e),e.traversal.inFrustum===!0&&t.stats.inFrustum++)}function tv(e,t){return!(e.traversal.error<=t.errorTarget&&!Gl(e)||t.maxDepth>0&&e.internal.depth+1>=t.maxDepth||!kl(e))}function Yd(e,t){if(t.ensureChildrenArePreprocessed(e),Hl(e,t),!e.traversal.inFrustum)return;if(!tv(e,t)){zl(e,t);return}let i=!1,n=!1;const s=e.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];Yd(o,t),i=i||pn(o,t.frameCount),n=n||o.traversal.inFrustum}if(e.refine==="REPLACE"&&!n&&s.length!==0){e.traversal.inFrustum=!1;for(let r=0,a=s.length;r<a;r++)Vl(s[r],t,!0);return}if(zl(e,t),e.refine==="REPLACE"&&(i&&e.internal.depth!==0||ev))for(let r=0,a=s.length;r<a;r++)Vl(s[r],t)}function Zd(e,t){const i=t.frameCount;if(!pn(e,i))return;const n=e.children;let s=!1;for(let r=0,a=n.length;r<a;r++){const o=n[r];s=s||pn(o,i)}if(!s)e.traversal.isLeaf=!0;else{let r=!0;for(let a=0,o=n.length;a<o;a++){const l=n[a];if(Zd(l,t),pn(l,i)){const c=!Gl(l);let h=!l.internal.hasContent||l.internal.hasRenderableContent&&jd(l.internal.loadingState)||l.internal.hasUnrenderableContent&&l.internal.loadingState===Fn;h=c&&h||l.traversal.allChildrenReady,r=r&&h}}e.traversal.allChildrenReady=r}}function $d(e,t){const i=t.stats;if(!pn(e,t.frameCount))return;if(e.traversal.isLeaf){e.internal.loadingState===vi?(e.traversal.inFrustum&&(e.traversal.visible=!0,i.visible++),e.traversal.active=!0,i.active++):e.internal.hasContent&&t.queueTileForDownload(e);return}const n=e.children,s=e.internal.hasContent,r=jd(e.internal.loadingState)&&s,a=(t.errorTarget+1)*t.errorThreshold,o=e.traversal.error<=a,l=e.refine==="ADD",c=e.traversal.allChildrenReady||e.internal.depth===0&&!1;if(s&&(o||l)&&t.queueTileForDownload(e),(o&&r&&!c||r&&l)&&(e.traversal.inFrustum&&(e.traversal.visible=!0,i.visible++),e.traversal.active=!0,i.active++),!l&&o&&!c)for(let h=0,u=n.length;h<u;h++){const d=n[h];pn(d,t.frameCount)&&Jd(d,t)}else for(let h=0,u=n.length;h<u;h++)$d(n[h],t)}function eu(e,t){const i=pn(e,t.frameCount);if(i||Ol(e)&&e.traversal.usedLastFrame){let n=!1,s=!1;i?(n=e.traversal.active,t.displayActiveTiles?s=e.traversal.active||e.traversal.visible:s=e.traversal.visible):Hl(e,t),e.internal.hasRenderableContent&&e.internal.loadingState===vi&&(e.traversal.wasSetActive!==n&&t.invokeOnePlugin(a=>a.setTileActive&&a.setTileActive(e,n)),e.traversal.wasSetVisible!==s&&t.invokeOnePlugin(a=>a.setTileVisible&&a.setTileVisible(e,s))),e.traversal.wasSetActive=n,e.traversal.wasSetVisible=s,e.traversal.usedLastFrame=i;const r=e.children;for(let a=0,o=r.length;a<o;a++){const l=r[a];eu(l,t)}}}function iv(e,t){Yd(e,t),Zd(e,t),$d(e,t),eu(e,t)}function nv(e){let t=null;return()=>{t===null&&(t=xs.requestAnimationFrame(()=>{t=null,e()}))}}var tu=Symbol("PLUGIN_REGISTERED"),gn={inView:!0,error:0,distance:1/0},Wl=(e,t)=>{const i=e.priority||0,n=t.priority||0;return i!==n?i>n?1:-1:!e.traversal||!t.traversal?0:e.traversal.used!==t.traversal.used?e.traversal.used?1:-1:e.traversal.error!==t.traversal.error?e.traversal.error>t.traversal.error?1:-1:e.traversal.distanceFromCamera!==t.traversal.distanceFromCamera?e.traversal.distanceFromCamera>t.traversal.distanceFromCamera?-1:1:e.internal.depthFromRenderedParent!==t.internal.depthFromRenderedParent?e.internal.depthFromRenderedParent>t.internal.depthFromRenderedParent?-1:1:0},sv=(e,t)=>e.traversal.used!==t.traversal.used?e.traversal.used?1:-1:e.traversal.inFrustum!==t.traversal.inFrustum?e.traversal.inFrustum?1:-1:e.internal.hasUnrenderableContent!==t.internal.hasUnrenderableContent?e.internal.hasUnrenderableContent?1:-1:e.traversal.distanceFromCamera!==t.traversal.distanceFromCamera?e.traversal.distanceFromCamera>t.traversal.distanceFromCamera?-1:1:e.internal.depthFromRenderedParent!==t.internal.depthFromRenderedParent?e.internal.depthFromRenderedParent>t.internal.depthFromRenderedParent?-1:1:0,rv=(e,t)=>e.traversal.lastFrameVisited!==t.traversal.lastFrameVisited?e.traversal.lastFrameVisited>t.traversal.lastFrameVisited?-1:1:e.internal.depthFromRenderedParent!==t.internal.depthFromRenderedParent?e.internal.depthFromRenderedParent>t.internal.depthFromRenderedParent?1:-1:e.internal.loadingState!==t.internal.loadingState?e.internal.loadingState>t.internal.loadingState?-1:1:e.internal.hasUnrenderableContent!==t.internal.hasUnrenderableContent?e.internal.hasUnrenderableContent?-1:1:e.traversal.error!==t.traversal.error?e.traversal.error>t.traversal.error?-1:1:0,iu=(e,t)=>{const i=e.priority??1/0,n=t.priority??1/0;if(i!==n)return i>n?1:-1;if(!e.internal||!t.internal)return 0;const s=e.internal.renderer,r=t.internal.renderer,a=s.optimizedLoadStrategy&&!s.loadAncestors,o=r.optimizedLoadStrategy&&!r.loadAncestors;return a&&o?sv(e,t):Wl(e,t)},av=class{get root(){const t=this.rootTileset;return t?t.root:null}get rootTileSet(){return console.warn('TilesRenderer: "rootTileSet" has been deprecated. Use "rootTileset" instead.'),this.rootTileset}get loadProgress(){const{stats:t,isLoading:i}=this,n=t.queued+t.downloading+t.parsing,s=t.inCacheSinceLoad+(i?1:0);return s===0?1:1-n/s}get errorThreshold(){return this._errorThreshold}set errorThreshold(t){console.warn('TilesRenderer: The "errorThreshold" option has been deprecated.'),this._errorThreshold=t}get optimizedLoadStrategy(){return this._optimizedLoadStrategy}set optimizedLoadStrategy(t){console.warn('TilesRenderer: "optimizedLoadStrategy" has been deprecated. Please toggle "loadAncestors" to adjust the tile load behavior.'),this._optimizedLoadStrategy=t}constructor(t=null){this.rootLoadingState=fn,this.rootTileset=null,this.rootURL=t,this.fetchOptions={},this.plugins=[],this.queuedTiles=[],this.cachedSinceLoadComplete=new Set,this.isLoading=!1;const i=new K_;i.unloadPriorityCallback=rv;const n=new Pl;n.maxJobs=25,n.priorityCallback=Wl;const s=new Pl;s.maxJobs=5,s.priorityCallback=Wl;const r=new Pl;r.maxJobs=25,r.priorityCallback=(a,o)=>{const l=a.parent,c=o.parent;return l===c?0:l?c?n.priorityCallback(l,c):-1:1},this.processedTiles=new WeakSet,this.visibleTiles=new Set,this.activeTiles=new Set,this.usedSet=new Set,this.loadingTiles=new Set,this.lruCache=i,this.downloadQueue=n,this.downloadQueue.priorityCallback=iu,this.parseQueue=s,this.parseQueue.priorityCallback=iu,this.processNodeQueue=r,this.stats={inCacheSinceLoad:0,inCache:0,queued:0,downloading:0,parsing:0,loaded:0,failed:0,inFrustum:0,used:0,active:0,visible:0,tilesProcessed:0},this.frameCount=0,this._dispatchNeedsUpdateEvent=nv(()=>{this.dispatchEvent({type:"needs-update"})}),this.errorTarget=16,this._errorThreshold=1/0,this.displayActiveTiles=!1,this.maxDepth=1/0,this._optimizedLoadStrategy=!0,this.loadSiblings=!0,this.loadAncestors=!0,this.maxTilesProcessed=250}registerPlugin(t){if(t[tu]===!0)throw new Error("TilesRendererBase: A plugin can only be registered to a single tileset");t.loadRootTileSet&&!t.loadRootTileset&&(console.warn('TilesRendererBase: Plugin implements deprecated "loadRootTileSet" method. Please rename to "loadRootTileset".'),t.loadRootTileset=t.loadRootTileSet),t.preprocessTileSet&&!t.preprocessTileset&&(console.warn('TilesRendererBase: Plugin implements deprecated "preprocessTileSet" method. Please rename to "preprocessTileset".'),t.preprocessTileset=t.preprocessTileSet);const i=this.plugins,n=t.priority||0;let s=i.length;for(let r=0;r<i.length;r++)if((i[r].priority||0)>n){s=r;break}i.splice(s,0,t),t[tu]=!0,t.init&&t.init(this)}unregisterPlugin(t){const i=this.plugins;if(typeof t=="string"&&(t=this.getPluginByName(t)),i.includes(t)){const n=i.indexOf(t);return i.splice(n,1),t.dispose&&t.dispose(),!0}return!1}getPluginByName(t){return this.plugins.find(i=>i.name===t)||null}invokeOnePlugin(t){const i=[...this.plugins,this];for(let n=0;n<i.length;n++){const s=t(i[n]);if(s)return s}return null}invokeAllPlugins(t){const i=[...this.plugins,this],n=[];for(let s=0;s<i.length;s++){const r=t(i[s]);r&&n.push(r)}return n.length===0?null:Promise.all(n)}traverse(t,i,n=!0){this.root&&J_(this.root,(s,...r)=>(n&&this.ensureChildrenArePreprocessed(s,!0),t?t(s,...r):!1),i)}getAttributions(t=[]){return this.invokeAllPlugins(i=>i!==this&&i.getAttributions&&i.getAttributions(t)),t}update(){const{lruCache:t,usedSet:i,stats:n,root:s,downloadQueue:r,parseQueue:a,processNodeQueue:o,optimizedLoadStrategy:l}=this;if(this.rootLoadingState===fn&&(this.rootLoadingState=wa,this.invokeOnePlugin(u=>u.loadRootTileset&&u.loadRootTileset()).then(u=>{let d=this.rootURL;d!==null&&this.invokeAllPlugins(A=>d=A.preprocessURL?A.preprocessURL(d,null):d),this.rootLoadingState=vi,this.rootTileset=u,this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-content"}),this.dispatchEvent({type:"load-tileset",tileset:u,url:d}),this.dispatchEvent({type:"load-root-tileset",tileset:u,url:d})}).catch(u=>{this.rootLoadingState=Fn,console.error(u),this.rootTileset=null,this.dispatchEvent({type:"load-error",tile:null,error:u,url:this.rootURL})})),!s)return;let c=null;if(this.invokeAllPlugins(u=>{if(u.doTilesNeedUpdate){const d=u.doTilesNeedUpdate();c===null?c=d:c=!!(c||d)}}),c===!1){this.dispatchEvent({type:"update-before"}),this.dispatchEvent({type:"update-after"});return}this.dispatchEvent({type:"update-before"}),n.inFrustum=0,n.used=0,n.active=0,n.visible=0,n.tilesProcessed=0,this.frameCount++,i.forEach(u=>t.markUnused(u)),i.clear(),this.prepareForTraversal(),l?$_(s,this):iv(s,this),this.removeUnusedPendingTiles();const h=this.queuedTiles;h.sort(t.unloadPriorityCallback);for(let u=0,d=h.length;u<d&&!t.isFull();u++)this.requestTileContents(h[u]);h.length=0,t.scheduleUnload(),(r.running||a.running||o.running)===!1&&this.isLoading===!0&&(this.cachedSinceLoadComplete.clear(),n.inCacheSinceLoad=0,this.dispatchEvent({type:"tiles-load-end"}),this.isLoading=!1),this.dispatchEvent({type:"update-after"})}resetFailedTiles(){this.rootLoadingState===Fn&&(this.rootLoadingState=fn);const t=this.stats;t.failed!==0&&(this.traverse(i=>{i.internal.loadingState===Fn&&(i.internal.loadingState=fn)},null,!1),t.failed=0)}calculateTileViewErrorWithPlugin(t,i){this.calculateTileViewError(t,i);let n=null,s=0,r=1/0;this.invokeAllPlugins(a=>{a!==this&&a.calculateTileViewError&&(gn.inView=!0,gn.error=0,gn.distance=1/0,a.calculateTileViewError(t,gn)&&(n===null&&(n=!0),n=n&&gn.inView,gn.inView&&(r=Math.min(r,gn.distance),s=Math.max(s,gn.error))))}),i.inView&&n!==!1?(i.error=Math.max(i.error,s),i.distanceFromCamera=Math.min(i.distanceFromCamera,r)):n?(i.inView=!0,i.error=s,i.distanceFromCamera=r):i.inView=!1}dispose(){[...this.plugins].forEach(n=>{this.unregisterPlugin(n)});const t=this.lruCache,i=[];this.traverse(n=>(i.push(n),!1),null,!1);for(let n=0,s=i.length;n<s;n++)t.remove(i[n]);this.stats={queued:0,parsing:0,downloading:0,failed:0,inFrustum:0,traversed:0,used:0,active:0,visible:0},this.frameCount=0,this.loadingTiles.clear()}calculateBytesUsed(t,i){return 0}dispatchEvent(t){}addEventListener(t,i){}removeEventListener(t,i){}parseTile(t,i,n){return null}prepareForTraversal(){}disposeTile(t){t.traversal.visible&&(this.invokeOnePlugin(n=>n.setTileVisible&&n.setTileVisible(t,!1)),t.traversal.visible=!1),t.traversal.active&&(this.invokeOnePlugin(n=>n.setTileActive&&n.setTileActive(t,!1)),t.traversal.active=!1);const{scene:i}=t.engineData;i&&this.dispatchEvent({type:"dispose-model",scene:i,tile:t})}preprocessNode(t,i,n=null){var s;if(this.processedTiles.add(t),this.stats.tilesProcessed++,t.content&&(!("uri"in t.content)&&"url"in t.content&&(t.content.uri=t.content.url,delete t.content.url),t.content.boundingVolume&&!("box"in t.content.boundingVolume||"sphere"in t.content.boundingVolume||"region"in t.content.boundingVolume)&&delete t.content.boundingVolume),t.parent=n,t.children=t.children||[],t.internal={hasContent:!1,hasRenderableContent:!1,hasUnrenderableContent:!1,loadingState:fn,basePath:i,depth:-1,depthFromRenderedParent:-1,isVirtual:!1,virtualChildCount:0,renderer:this,...t.internal},(s=t.content)!=null&&s.uri){const r=Gd(t.content.uri),a=!!(r&&/json$/.test(r));t.internal.hasContent=!0,t.internal.hasUnrenderableContent=a,t.internal.hasRenderableContent=!a}else t.internal.hasContent=!1,t.internal.hasUnrenderableContent=!1,t.internal.hasRenderableContent=!1;n?(t.internal.depth=n.internal.depth+1,t.internal.depthFromRenderedParent=n.internal.depthFromRenderedParent+(t.internal.hasRenderableContent?1:0)):(t.internal.depth=0,t.internal.depthFromRenderedParent=t.internal.hasRenderableContent?1:0),t.traversal={distanceFromCamera:1/0,error:1/0,inFrustum:!1,isLeaf:!1,used:!1,usedLastFrame:!1,visible:!1,wasSetVisible:!1,active:!1,wasSetActive:!1,allChildrenReady:!1,allChildrenLoaded:!1,kicked:!1,allUsedChildrenProcessed:!1,lastFrameVisited:-1},n===null?t.refine=t.refine||"REPLACE":t.refine=t.refine||n.refine,t.engineData={scene:null,metadata:null,boundingVolume:null},Object.defineProperty(t,"cached",{get(){return console.warn('TilesRenderer: "tile.cached" field has been renamed to "tile.engineData".'),this.engineData},enumerable:!1,configurable:!0}),this.invokeAllPlugins(r=>{r!==this&&r.preprocessNode&&r.preprocessNode(t,i,n)})}setTileActive(t,i){i?this.activeTiles.add(t):this.activeTiles.delete(t)}setTileVisible(t,i){i?this.visibleTiles.add(t):this.visibleTiles.delete(t),this.dispatchEvent({type:"tile-visibility-change",scene:t.engineData.scene,tile:t,visible:i})}calculateTileViewError(t,i){}removeUnusedPendingTiles(){const{lruCache:t,loadingTiles:i}=this,n=[];for(const s of i)!t.isUsed(s)&&s.internal.loadingState===Ta&&n.push(s);for(let s=0;s<n.length;s++)t.remove(n[s])}queueTileForDownload(t){t.internal.loadingState!==fn||this.lruCache.isFull()||this.queuedTiles.push(t)}markTileUsed(t){this.usedSet.add(t),this.lruCache.markUsed(t)}fetchData(t,i){return fetch(t,i)}ensureChildrenArePreprocessed(t,i=this.stats.tilesProcessed<this.maxTilesProcessed){const n=t.children;if(n.length===0||n[n.length-1].traversal)return;const s=r=>{for(let a=0,o=r.length;a<o;a++){const l=r[a];l&&!l.traversal&&this.preprocessNode(l,t.internal.basePath,t)}};i?(this.processNodeQueue.remove(t),s(n)):this.processNodeQueue.has(t)||this.processNodeQueue.add(t,r=>{s(r.children),this._dispatchNeedsUpdateEvent()})}getBytesUsed(t){let i=0;return this.invokeAllPlugins(n=>{n.calculateBytesUsed&&(i+=n.calculateBytesUsed(t,t.engineData.scene)||0)}),i}recalculateBytesUsed(t=null){const{lruCache:i,processedTiles:n}=this;t===null?i.itemSet.forEach(s=>{n.has(s)&&i.setMemoryUsage(s,this.getBytesUsed(s))}):i.setMemoryUsage(t,this.getBytesUsed(t))}preprocessTileset(t,i,n=null){const s=Object.getPrototypeOf(this);Object.hasOwn(s,"preprocessTileSet")&&console.warn(`${s.constructor.name}: Class overrides deprecated "preprocessTileSet" method. Please rename to "preprocessTileset".`);const[r,a]=t.asset.version.split(".").map(l=>parseInt(l));console.assert(r<=1,"TilesRenderer: asset.version is expected to be a 1.x or a compatible version."),r===1&&a>0&&console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");let o=i.replace(/\/[^/]*$/,"");o=new URL(o,window.location.href).toString(),this.preprocessNode(t.root,o,n)}preprocessTileSet(...t){return console.warn('TilesRenderer: "preprocessTileSet" has been deprecated. Use "preprocessTileset" instead.'),this.preprocessTileset(...t)}loadRootTileset(){const t=Object.getPrototypeOf(this);Object.hasOwn(t,"loadRootTileSet")&&console.warn(`${t.constructor.name}: Class overrides deprecated "loadRootTileSet" method. Please rename to "loadRootTileset".`);let i=this.rootURL;return this.invokeAllPlugins(n=>i=n.preprocessURL?n.preprocessURL(i,null):i),this.invokeOnePlugin(n=>n.fetchData&&n.fetchData(i,this.fetchOptions)).then(n=>{if(n instanceof Response){if(n.ok)return n.json();throw new Error(`TilesRenderer: Failed to load tileset "${i}" with status ${n.status} : ${n.statusText}`)}else return n}).then(n=>(this.preprocessTileset(n,i),n))}loadRootTileSet(...t){return console.warn('TilesRenderer: "loadRootTileSet" has been deprecated. Use "loadRootTileset" instead.'),this.loadRootTileSet(...t)}requestTileContents(t){if(t.internal.loadingState!==fn)return;let i=!1,n=null,s=new URL(t.content.uri,t.internal.basePath+"/").toString();this.invokeAllPlugins(A=>s=A.preprocessURL?A.preprocessURL(s,t):s);const r=this.stats,a=this.lruCache,o=this.downloadQueue,l=this.parseQueue,c=this.loadingTiles,h=Gd(s),u=new AbortController,d=u.signal;if(a.add(t,A=>{u.abort(),i?A.children.length=0:this.invokeAllPlugins(p=>{p.disposeTile&&p.disposeTile(A)}),r.inCache--,this.cachedSinceLoadComplete.has(t)&&(this.cachedSinceLoadComplete.delete(t),r.inCacheSinceLoad--),A.internal.loadingState===Ta?r.queued--:A.internal.loadingState===wa?r.downloading--:A.internal.loadingState===Fl?r.parsing--:A.internal.loadingState===vi&&r.loaded--,A.internal.loadingState=fn,l.remove(A),o.remove(A),c.delete(A)}))return this.isLoading||(this.isLoading=!0,this.dispatchEvent({type:"tiles-load-start"})),a.setMemoryUsage(t,this.getBytesUsed(t)),this.cachedSinceLoadComplete.add(t),r.inCacheSinceLoad++,r.inCache++,r.queued++,t.internal.loadingState=Ta,c.add(t),o.add(t,A=>{if(d.aborted)return Promise.resolve();t.internal.loadingState=wa,r.downloading++,r.queued--;const p=this.invokeOnePlugin(m=>m.fetchData&&m.fetchData(s,{...this.fetchOptions,signal:d}));return this.dispatchEvent({type:"tile-download-start",tile:t,url:s,get uri(){return console.warn('tile-download-start event: "uri" has been renamed to "url".'),this.url}}),p}).then(A=>{if(!d.aborted)if(A instanceof Response){if(A.ok)return h==="json"?A.json():A.arrayBuffer();throw new Error(`Failed to load model with error code ${A.status}`)}else return A}).then(A=>{if(!d.aborted)return r.downloading--,r.parsing++,t.internal.loadingState=Fl,l.add(t,p=>d.aborted?Promise.resolve():h==="json"&&A.root?(this.preprocessTileset(A,s,t),t.children.push(A.root),n=A,i=!0,Promise.resolve()):this.invokeOnePlugin(m=>m.parseTile&&m.parseTile(A,p,h,s,d)))}).then(()=>{if(d.aborted)return;r.parsing--,r.loaded++,t.internal.loadingState=vi,c.delete(t),a.setLoaded(t,!0);const A=this.getBytesUsed(t);if(a.getMemoryUsage(t)===0&&A>0&&a.isFull()){a.remove(t);return}a.setMemoryUsage(t,A),this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-content"}),i&&this.dispatchEvent({type:"load-tileset",tileset:n,url:s}),t.engineData.scene&&this.dispatchEvent({type:"load-model",scene:t.engineData.scene,tile:t,url:s})}).catch(A=>{d.aborted||(A.name!=="AbortError"?(l.remove(t),o.remove(t),t.internal.loadingState===Ta?r.queued--:t.internal.loadingState===wa?r.downloading--:t.internal.loadingState===Fl?r.parsing--:t.internal.loadingState===vi&&r.loaded--,r.failed++,console.error(`TilesRenderer : Failed to load tile at url "${t.content.uri}".`),console.error(A),t.internal.loadingState=Fn,c.delete(t),a.setLoaded(t,!0),this.dispatchEvent({type:"load-error",tile:t,error:A,url:s})):a.remove(t))})}};function nu(e,t,i,n,s,r){let a;switch(n){case"SCALAR":a=1;break;case"VEC2":a=2;break;case"VEC3":a=3;break;case"VEC4":a=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${r}".`)}let o;const l=i*a;switch(s){case"BYTE":o=new Int8Array(e,t,l);break;case"UNSIGNED_BYTE":o=new Uint8Array(e,t,l);break;case"SHORT":o=new Int16Array(e,t,l);break;case"UNSIGNED_SHORT":o=new Uint16Array(e,t,l);break;case"INT":o=new Int32Array(e,t,l);break;case"UNSIGNED_INT":o=new Uint32Array(e,t,l);break;case"FLOAT":o=new Float32Array(e,t,l);break;case"DOUBLE":o=new Float64Array(e,t,l);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${r}".`)}return o}var Ua=class{constructor(e,t,i,n){this.buffer=e,this.binOffset=t+i,this.binLength=n;let s=null;if(i!==0){const r=new Uint8Array(e,t,i);s=JSON.parse(kd(r))}else s={};this.header=s}getKeys(){return Object.keys(this.header).filter(e=>e!=="extensions")}getData(e,t,i=null,n=null){const s=this.header;if(!(e in s))return null;const r=s[e];if(r instanceof Object){if(Array.isArray(r))return r;{const{buffer:a,binOffset:o,binLength:l}=this,c=r.byteOffset||0,h=r.type||n,u=r.componentType||i;if("type"in r&&n&&r.type!==n)throw new Error("FeatureTable: Specified type does not match expected type.");const d=o+c,A=nu(a,d,t,h,u,e);if(d+A.byteLength>o+l)throw new Error("FeatureTable: Feature data read outside binary body length.");return A}}else return r}getBuffer(e,t){const{buffer:i,binOffset:n}=this;return i.slice(n+e,n+e+t)}},ov=class{constructor(e){this.batchTable=e;const t=e.header.extensions["3DTILES_batch_table_hierarchy"];this.classes=t.classes;for(const n of this.classes){const s=n.instances;for(const r in s)n.instances[r]=this._parseProperty(s[r],n.length,r)}if(this.instancesLength=t.instancesLength,this.classIds=this._parseProperty(t.classIds,this.instancesLength,"classIds"),t.parentCounts?this.parentCounts=this._parseProperty(t.parentCounts,this.instancesLength,"parentCounts"):this.parentCounts=new Array(this.instancesLength).fill(1),t.parentIds){const n=this.parentCounts.reduce((s,r)=>s+r,0);this.parentIds=this._parseProperty(t.parentIds,n,"parentIds")}else this.parentIds=null;this.instancesIds=[];const i={};for(const n of this.classIds)i[n]=i[n]??0,this.instancesIds.push(i[n]),i[n]++}_parseProperty(e,t,i){if(Array.isArray(e))return e;{const{buffer:n,binOffset:s}=this.batchTable,r=e.byteOffset,a=e.componentType||"UNSIGNED_SHORT";return nu(n,s+r,t,"SCALAR",a,i)}}getDataFromId(e,t={}){const i=this.parentCounts[e];if(this.parentIds&&i>0){let o=0;for(let l=0;l<e;l++)o+=this.parentCounts[l];for(let l=0;l<i;l++){const c=this.parentIds[o+l];c!==e&&this.getDataFromId(c,t)}}const n=this.classIds[e],s=this.classes[n].instances,r=this.classes[n].name,a=this.instancesIds[e];for(const o in s)t[r]=t[r]||{},t[r][o]=s[o][a];return t}},ql=class extends Ua{get batchSize(){return console.warn("BatchTable.batchSize has been deprecated and replaced with BatchTable.count."),this.count}constructor(e,t,i,n,s){super(e,i,n,s),this.count=t,this.extensions={};const r=this.header.extensions;r&&r["3DTILES_batch_table_hierarchy"]&&(this.extensions["3DTILES_batch_table_hierarchy"]=new ov(this))}getData(e,t=null,i=null){return console.warn("BatchTable: BatchTable.getData is deprecated. Use BatchTable.getDataFromId to get allproperties for an id or BatchTable.getPropertyArray for getting an array of value for a property."),super.getData(e,this.count,t,i)}getDataFromId(e,t={}){if(e<0||e>=this.count)throw new Error(`BatchTable: id value "${e}" out of bounds for "${this.count}" features number.`);for(const i of this.getKeys())t[i]=super.getData(i,this.count)[e];for(const i in this.extensions){const n=this.extensions[i];n.getDataFromId instanceof Function&&(t[i]=t[i]||{},n.getDataFromId(e,t[i]))}return t}getPropertyArray(e){return super.getData(e,this.count)}},lv=class extends Ba{parse(t){const i=new DataView(t),n=Ms(i);console.assert(n==="b3dm");const s=i.getUint32(4,!0);console.assert(s===1);const r=i.getUint32(8,!0);console.assert(r===t.byteLength);const a=i.getUint32(12,!0),o=i.getUint32(16,!0),l=i.getUint32(20,!0),c=i.getUint32(24,!0),h=28,u=new Ua(t.slice(h,h+a+o),0,a,o),d=h+a+o,A=new ql(t.slice(d,d+l+c),u.getData("BATCH_LENGTH"),0,l,c),p=d+l+c;return{version:s,featureTable:u,batchTable:A,glbBytes:new Uint8Array(t,p,r-p)}}},cv=class extends Ba{parse(t){const i=new DataView(t),n=Ms(i);console.assert(n==="i3dm");const s=i.getUint32(4,!0);console.assert(s===1);const r=i.getUint32(8,!0);console.assert(r===t.byteLength);const a=i.getUint32(12,!0),o=i.getUint32(16,!0),l=i.getUint32(20,!0),c=i.getUint32(24,!0),h=i.getUint32(28,!0),u=32,d=new Ua(t.slice(u,u+a+o),0,a,o),A=u+a+o,p=new ql(t.slice(A,A+l+c),d.getData("INSTANCES_LENGTH"),0,l,c),m=A+l+c,g=new Uint8Array(t,m,r-m);let f=null,_=null,b=null;if(h)f=g,_=Promise.resolve();else{const C=this.resolveExternalURL(kd(g));b=Ul(C),_=fetch(C,this.fetchOptions).then(S=>{if(!S.ok)throw new Error(`I3DMLoaderBase : Failed to load file "${C}" with status ${S.status} : ${S.statusText}`);return S.arrayBuffer()}).then(S=>{f=new Uint8Array(S)})}return _.then(()=>({version:s,featureTable:d,batchTable:p,glbBytes:f,gltfWorkingPath:b}))}},hv=class extends Ba{parse(t){const i=new DataView(t),n=Ms(i);console.assert(n==="pnts");const s=i.getUint32(4,!0);console.assert(s===1);const r=i.getUint32(8,!0);console.assert(r===t.byteLength);const a=i.getUint32(12,!0),o=i.getUint32(16,!0),l=i.getUint32(20,!0),c=i.getUint32(24,!0),h=28,u=new Ua(t.slice(h,h+a+o),0,a,o),d=h+a+o,A=new ql(t.slice(d,d+l+c),u.getData("BATCH_LENGTH")||u.getData("POINTS_LENGTH"),0,l,c);return Promise.resolve({version:s,featureTable:u,batchTable:A})}},dv=class extends Ba{parse(e){const t=new DataView(e),i=Ms(t);console.assert(i==="cmpt",'CMPTLoader: The magic bytes equal "cmpt".');const n=t.getUint32(4,!0);console.assert(n===1,'CMPTLoader: The version listed in the header is "1".');const s=t.getUint32(8,!0);console.assert(s===e.byteLength,"CMPTLoader: The contents buffer length listed in the header matches the file.");const r=t.getUint32(12,!0),a=[];let o=16;for(let l=0;l<r;l++){const c=new DataView(e,o,12),h=Ms(c),u=c.getUint32(4,!0),d=c.getUint32(8,!0),A=new Uint8Array(e,o,d);a.push({type:h,buffer:A,version:u}),o+=d}return{version:n,tiles:a}}};function uv(e){let t=0;for(const n in e.attributes){const s=e.getAttribute(n);t+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}const i=e.getIndex();return t+=i?i.count*i.itemSize*i.array.BYTES_PER_ELEMENT:0,t}function su(e,t){if(t===Ff)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Fo||t===Xc){let i=e.getIndex();if(i===null){const a=[],o=e.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);e.setIndex(a),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const n=i.count-2,s=[];if(t===Fo)for(let a=1;a<=n;a++)s.push(i.getX(0)),s.push(i.getX(a)),s.push(i.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(i.getX(a)),s.push(i.getX(a+1)),s.push(i.getX(a+2))):(s.push(i.getX(a+2)),s.push(i.getX(a+1)),s.push(i.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=e.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function Av(e){const t=new Map,i=new Map,n=e.clone();return ru(e,n,function(s,r){t.set(r,s),i.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return i.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ru(e,t,i){i(e,t);for(let n=0;n<e.children.length;n++)ru(e.children[n],t.children[n],i)}var Na=class extends dn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _v(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new au(t,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new au(t,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rv(t)})}load(e,t,i,n){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=hr.extractUrlBase(e);r=hr.resolveURL(l,this.path)}else r=hr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){n?n(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},o=new Pn(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{s.parse(l,r,function(c){t(c),s.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const r={},a={},o=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===ou){try{r[We.KHR_BINARY_GLTF]=new Dv(e)}catch(c){n&&n(c);return}s=JSON.parse(r[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(o.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Wv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const h=s.extensionsUsed[c],u=s.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:r[h]=new gv;break;case We.KHR_DRACO_MESH_COMPRESSION:r[h]=new Lv(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:r[h]=new Pv;break;case We.KHR_MESH_QUANTIZATION:r[h]=new Fv;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}};function fv(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function vt(e,t,i){const n=e.json.materials[t];return n.extensions&&n.extensions[i]?n.extensions[i]:null}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pv=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,r=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let a;const o=new Le(16777215);r.color!==void 0&&o.setRGB(r.color[0],r.color[1],r.color[2],Qt);const l=r.range!==void 0?r.range:0;switch(r.type){case"directional":a=new hg(o),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new rd(o),a.distance=l;break;case"spot":a=new og(o),a.distance=l,r.spot=r.spot||{},r.spot.innerConeAngle=r.spot.innerConeAngle!==void 0?r.spot.innerConeAngle:0,r.spot.outerConeAngle=r.spot.outerConeAngle!==void 0?r.spot.outerConeAngle:Math.PI/4,a.angle=r.spot.outerConeAngle,a.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+r.type)}return a.position.set(0,0,0),Fi(a,r),r.intensity!==void 0&&(a.intensity=r.intensity),a.name=t.createUniqueName(r.name||"light_"+e),n=Promise.resolve(a),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],s=(n.extensions&&n.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(r){return i._getNodeRef(t.cache,s,r)})}},gv=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,i){const n=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Qt),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,pt))}return Promise.all(n)}},mv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},_v=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(s,s)}return Promise.all(n)}},vv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},bv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Ev=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Qt)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,pt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Cv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Iv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(s[0],s[1],s[2],Qt),Promise.all(n)}},yv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(s[0],s[1],s[2],Qt),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,pt)),Promise.all(n)}},xv=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Mv=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return vt(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=vt(this.parser,e,this.name);if(i===null)return Promise.resolve();const n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Tv=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},wv=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=n.images[r.source];let o=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(o=l)}return i.loadTextureImage(e,r.source,o)}},Bv=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=n.images[r.source];let o=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(o=l)}return i.loadTextureImage(e,r.source,o)}},au=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const o=n.byteOffset||0,l=n.byteLength||0,c=n.count,h=n.byteStride,u=new Uint8Array(a,o,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(c,h,u,n.mode,n.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(c*h);return r.decodeGltfBuffer(new Uint8Array(d),c,h,u,n.mode,n.filter),d})})}else return null}},Rv=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const o of n.primitives)if(o.mode!==ii.TRIANGLES&&o.mode!==ii.TRIANGLE_STRIP&&o.mode!==ii.TRIANGLE_FAN&&o.mode!==void 0)return null;const s=i.extensions[this.name].attributes,r=[],a={};for(const o in s)r.push(this.parser.getDependency("accessor",s[o]).then(l=>(a[o]=l,a[o])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(o=>{const l=o.pop(),c=l.isGroup?l.children:[l],h=o[0].count,u=[];for(const d of c){const A=new pe,p=new B,m=new di,g=new B(1,1,1),f=new Al(d.geometry,d.material,h);for(let _=0;_<h;_++)a.TRANSLATION&&p.fromBufferAttribute(a.TRANSLATION,_),a.ROTATION&&m.fromBufferAttribute(a.ROTATION,_),a.SCALE&&g.fromBufferAttribute(a.SCALE,_),f.setMatrixAt(_,A.compose(p,m,g));for(const _ in a)if(_==="_COLOR_0"){const b=a[_];f.instanceColor=new ul(b.array,b.itemSize,b.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&d.geometry.setAttribute(_,a[_]);Et.prototype.copy.call(f,d),this.parser.assignFinalMaterial(f),u.push(f)}return l.isGroup?(l.clear(),l.add(...u),l):u[0]}))}},ou="glTF",pr=12,lu={JSON:1313821514,BIN:5130562},Dv=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,pr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-pr,s=new DataView(e,pr);let r=0;for(;r<n;){const a=s.getUint32(r,!0);r+=4;const o=s.getUint32(r,!0);if(r+=4,o===lu.JSON){const l=new Uint8Array(e,pr+r,a);this.content=i.decode(l)}else if(o===lu.BIN){const l=pr+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lv=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},o={},l={};for(const c in r){const h=Kl[c]||c.toLowerCase();a[h]=r[c]}for(const c in e.attributes){const h=Kl[c]||c.toLowerCase();if(r[c]!==void 0){const u=i.accessors[e.attributes[c]];l[h]=Ts[u.componentType].name,o[h]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(h,u){n.decodeDracoFile(c,function(d){for(const A in d.attributes){const p=d.attributes[A],m=o[A];m!==void 0&&(p.normalized=m)}h(d)},a,l,Qt,u)})})}},Pv=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Fv=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},cu=class extends fs{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,c=n-t,h=(i-t)/c,u=h*h,d=u*h,A=e*l,p=A-l,m=-2*d+3*u,g=d-u,f=1-m,_=g-u+h;for(let b=0;b!==a;b++){const C=r[p+b+a],S=r[p+b+o]*c,M=r[A+b+a],T=r[A+b]*c;s[b]=f*C+_*S+m*M+g*T}return s}},Uv=new di,Nv=class extends cu{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return Uv.fromArray(s).normalize().toArray(s),s}},ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hu={9728:_t,9729:dt,9984:Ao,9985:Mr,9986:Os,9987:oi},du={33071:ai,33648:xr,10497:Xn},Xl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qv={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Xs},jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ov(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new lr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),e.DefaultMaterial}function Nn(e,t,i){for(const n in i.extensions)e[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=i.extensions[n])}function Fi(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function kv(e,t,i){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(e);const a=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?i.getDependency("accessor",u.POSITION):e.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?i.getDependency("accessor",u.NORMAL):e.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?i.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(e.morphAttributes.position=h),s&&(e.morphAttributes.normal=u),r&&(e.morphAttributes.color=d),e.morphTargetsRelative=!0,e})}function Gv(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,n=t.weights.length;i<n;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){const i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++)e.morphTargetDictionary[i[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hv(e){let t;const i=e.extensions&&e.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+Jl(i.attributes):t=e.indices+":"+Jl(e.attributes)+":"+e.mode,e.targets!==void 0)for(let n=0,s=e.targets.length;n<s;n++)t+=":"+Jl(e.targets[n]);return t}function Jl(e){let t="";const i=Object.keys(e).sort();for(let n=0,s=i.length;n<s;n++)t+=i[n]+":"+e[i[n]]+";";return t}function Yl(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vv(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zv=new pe,Wv=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const o=a.match(/Version\/(\d+)/);n=i&&o?parseInt(o[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&r<98?this.textureLoader=new $h(this.options.manager):this.textureLoader=new Cl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const a={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return Nn(s,a,n),Fi(a,n),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){for(const o of a.scenes)o.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n].joints;for(let a=0,o=r.length;a<o;a++)e[r[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(r,a)=>{const o=this.associations.get(r);o!=null&&this.associations.set(a,o);for(const[l,c]of r.children.entries())s(c,a.children[l])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e)}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,r){i.load(hr.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const r=Xl[n.type],a=Ts[n.componentType],o=n.normalized===!0,l=new a(n.count*r);return Promise.resolve(new ct(l,r,o))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],o=Xl[n.type],l=Ts[n.componentType],c=l.BYTES_PER_ELEMENT,h=c*o,u=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,A=n.normalized===!0;let p,m;if(d&&d!==h){const g=Math.floor(u/d),f="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let _=t.cache.get(f);_||(p=new l(a,g*d,n.count*d/c),_=new Ch(p,d/c),t.cache.add(f,_)),m=new Ih(_,o,u%d/c,A)}else a===null?p=new l(n.count*o):p=new l(a,u,n.count*o),m=new ct(p,o,A);if(n.sparse!==void 0){const g=Xl.SCALAR,f=Ts[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,C=new f(r[1],_,n.sparse.count*g),S=new l(r[2],b,n.sparse.count*o);a!==null&&(m=new ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,T=C.length;M<T;M++){const v=C[M];if(m.setX(v,S[M*o]),o>=2&&m.setY(v,S[M*o+1]),o>=3&&m.setZ(v,S[M*o+2]),o>=4&&m.setW(v,S[M*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=A}return m})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,s=t.images[n];let r=this.textureLoader;if(s.uri){const a=i.manager.getHandler(s.uri);a!==null&&(r=a)}return this.loadTextureImage(e,n,r)}loadTextureImage(e,t,i){const n=this,s=this.json,r=s.textures[e],a=s.images[t],o=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[o])return this.textureCache[o];const l=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=r.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const h=(s.samplers||{})[r.sampler]||{};return c.magFilter=hu[h.magFilter]||dt,c.minFilter=hu[h.minFilter]||oi,c.wrapS=du[h.wrapS]||Xn,c.wrapT=du[h.wrapT]||Xn,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==_t&&c.minFilter!==dt,n.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=n.images[e],a=self.URL||self.webkitURL;let o=r.uri||"",l=!1;if(r.bufferView!==void 0)o=i.getDependency("bufferView",r.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:r.mimeType});return o=a.createObjectURL(u),o});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(o).then(function(h){return new Promise(function(u,d){let A=u;t.isImageBitmapLoader===!0&&(A=function(p){const m=new Ot(p);m.needsUpdate=!0,u(m)}),t.load(hr.resolveURL(h,s.path),A,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(o),Fi(h,r),h.userData.mimeType=r.mimeType||Vv(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),h});return this.sourceCache[e]=c,c}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=s.associations.get(r);r=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,o)}}return n!==void 0&&(r.colorSpace=n),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let o=this.cache.get(a);o||(o=new ml,mi.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(a,o)),i=o}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let o=this.cache.get(a);o||(o=new Fh,mi.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(a,o)),i=o}if(n||s||r){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let o=this.cache.get(a);o||(o=i.clone(),s&&(o.vertexColors=!0),r&&(o.flatShading=!0),n&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(a,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return lr}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let r;const a={},o=s.extensions||{},l=[];if(o[We.KHR_MATERIALS_UNLIT]){const h=n[We.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Qt),a.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,pt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ii);const c=s.alphaMode||jl.OPAQUE;if(c===jl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===jl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Rn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==Rn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Rn){const h=s.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],Qt)}return s.emissiveTexture!==void 0&&r!==Rn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,pt)),Promise.all(l).then(function(){const h=new r(a);return s.name&&(h.name=s.name),Fi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Nn(n,h,s),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(o){return uu(o,a,t)})}const r=[];for(let a=0,o=e.length;a<o;a++){const l=e[a],c=Hv(l),h=n[c];if(h)r.push(h.promise);else{let u;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=uu(new ti,l,t),n[c]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,a=[];for(let o=0,l=r.length;o<l;o++){const c=r[o].material===void 0?Ov(this.cache):this.getDependency("material",r[o].material);a.push(c)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(o){const l=o.slice(0,o.length-1),c=o[o.length-1],h=[];for(let d=0,A=c.length;d<A;d++){const p=c[d],m=r[d];let g;const f=l[d];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new wp(p,f):new It(p,f),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===ii.TRIANGLE_STRIP?g.geometry=su(g.geometry,Xc):m.mode===ii.TRIANGLE_FAN&&(g.geometry=su(g.geometry,Fo));else if(m.mode===ii.LINES)g=new Up(p,f);else if(m.mode===ii.LINE_STRIP)g=new gl(p,f);else if(m.mode===ii.LINE_LOOP)g=new Np(p,f);else if(m.mode===ii.POINTS)g=new Gh(p,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Gv(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Fi(g,s),m.extensions&&Nn(n,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,A=h.length;d<A;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Nn(n,h[0],s),h[0];const u=new wi;s.extensions&&Nn(n,u,s),t.associations.set(u,{meshes:e});for(let d=0,A=h.length;d<A;d++)u.add(h[d]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ft(Go.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Ca(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Fi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),r=n,a=[],o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l];if(h){a.push(h);const u=new pe;s!==null&&u.fromArray(s.array,l*16),o.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Rp(a,o)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,r=[],a=[],o=[],l=[],c=[];for(let h=0,u=n.channels.length;h<u;h++){const d=n.channels[h],A=n.samplers[d.sampler],p=d.target,m=p.node,g=n.parameters!==void 0?n.parameters[A.input]:A.input,f=n.parameters!==void 0?n.parameters[A.output]:A.output;p.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",f)),l.push(A),c.push(p))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],A=h[2],p=h[3],m=h[4],g=[];for(let _=0,b=u.length;_<b;_++){const C=u[_],S=d[_],M=A[_],T=p[_],v=m[_];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const y=i._createAnimationTracks(C,S,M,T,v);if(y)for(let N=0;N<y.length;N++)g.push(y[N])}const f=new tg(s,void 0,g);return Fi(f,n),f})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let o=0,l=n.weights.length;o<l;o++)a.morphTargetInfluences[o]=n.weights[o]}),r})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),r=[],a=n.children||[];for(let l=0,c=a.length;l<c;l++)r.push(i.getDependency("node",a[l]));const o=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),o]).then(function(l){const c=l[0],h=l[1],u=l[2];u!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(u,zv)});for(let d=0,A=h.length;d<A;d++)c.add(h[d]);if(c.userData.pivot!==void 0&&h.length>0){const d=c.userData.pivot,A=h[0];c.pivot=new B().fromArray(d),c.position.x-=d[0],c.position.y-=d[1],c.position.z-=d[2],A.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"",a=[],o=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&a.push(o),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(l){return n._getNodeRef(n.cameraCache,s.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let c;if(s.isBone===!0?c=new Rh:l.length>1?c=new wi:l.length===1?c=l[0]:c=new Et,c!==l[0])for(let h=0,u=l.length;h<u;h++)c.add(l[h]);if(s.name&&(c.userData.name=s.name,c.name=r),Fi(c,s),s.extensions&&Nn(i,c,s),s.matrix!==void 0){const h=new pe;h.fromArray(s.matrix),c.applyMatrix4(h)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);if(!n.associations.has(c))n.associations.set(c,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const h=n.associations.get(c);n.associations.set(c,{...h})}return n.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new wi;i.name&&(s.name=n.createUniqueName(i.name)),Fi(s,i),i.extensions&&Nn(t,s,i);const r=i.nodes||[],a=[];for(let o=0,l=r.length;o<l;o++)a.push(n.getDependency("node",r[o]));return Promise.all(a).then(function(o){for(let c=0,h=o.length;c<h;c++){const u=o[c];u.parent!==null?s.add(Av(u)):s.add(u)}const l=c=>{const h=new Map;for(const[u,d]of n.associations)(u instanceof mi||u instanceof Ot)&&h.set(u,d);return c.traverse(u=>{const d=n.associations.get(u);d!=null&&h.set(u,d)}),h};return n.associations=l(s),s})}_createAnimationTracks(e,t,i,n,s){const r=[],a=e.name?e.name:e.uuid,o=[];function l(d){d.morphTargetInfluences&&o.push(d.name?d.name:d.uuid)}mn[s.path]===mn.weights?(l(e),e.isGroup&&e.children.forEach(l)):o.push(a);let c;switch(mn[s.path]){case mn.weights:c=gs;break;case mn.rotation:c=ms;break;case mn.translation:case mn.scale:c=vs;break;default:i.itemSize===1?c=gs:c=vs}const h=n.interpolation!==void 0?Qv[n.interpolation]:Ks,u=this._getArrayFromAccessor(i);for(let d=0,A=o.length;d<A;d++){const p=new c(o[d]+"."+mn[s.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Yl(t.constructor),n=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){return new(this instanceof ms?Nv:cu)(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qv(e,t,i){const n=t.attributes,s=new fi;if(n.POSITION!==void 0){const o=i.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const h=Yl(Ts[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new B,l=new B;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=i.json.accessors[u.POSITION],A=d.min,p=d.max;if(A!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(A[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(A[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(A[2]),Math.abs(p[2]))),d.normalized){const m=Yl(Ts[d.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}e.boundingBox=s;const a=new Jt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,e.boundingSphere=a}function uu(e,t,i){const n=t.attributes,s=[];function r(a,o){return i.getDependency("accessor",a).then(function(l){e.setAttribute(o,l)})}for(const a in n){const o=Kl[a]||a.toLowerCase();o in e.attributes||s.push(r(n[a],o))}if(t.indices!==void 0&&!e.index){const a=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});s.push(a)}return Ve.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),Fi(e,t),qv(e,t,i),Promise.all(s).then(function(){return t.targets!==void 0?kv(e,t.targets,i):e})}function Xv(e){const{x:t,y:i,z:n}=e;e.x=n,e.y=t,e.z=i}function Kv(e){return-e+Math.PI/2}var Au=new yg,_n=new B,Ht=new B,Zl=new B,ni=new pe,Ui=new pe,fu=new pe,$l=new Jt,qt=new Gi,pu=new B,gu=new B,mu=new B,Qn=new B,Qa=new Bn,jv=1e-12,Jv=.1,Oa=0,_u=1,ka=2,vu=class{constructor(e=1,t=1,i=1){this.name="",this.radius=new B(e,t,i)}intersectRay(e,t){return ni.makeScale(...this.radius).invert(),$l.center.set(0,0,0),$l.radius=1,Qa.copy(e).applyMatrix4(ni),Qa.intersectSphere($l,t)?(ni.makeScale(...this.radius),t.applyMatrix4(ni),t):null}getEastNorthUpFrame(e,t,i,n){return i.isMatrix4&&(n=i,i=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(e,t,pu,gu,mu),this.getCartographicToPosition(e,t,i,Qn),n.makeBasis(pu,gu,mu).setPosition(Qn)}getOrientedEastNorthUpFrame(e,t,i,n,s,r,a){return this.getObjectFrame(e,t,i,n,s,r,a,Oa)}getObjectFrame(e,t,i,n,s,r,a,o=ka){return this.getEastNorthUpFrame(e,t,i,ni),qt.set(s,r,-n,"ZXY"),a.makeRotationFromEuler(qt).premultiply(ni),o===_u?(qt.set(Math.PI/2,0,0,"XYZ"),Ui.makeRotationFromEuler(qt),a.multiply(Ui)):o===ka&&(qt.set(-Math.PI/2,0,Math.PI,"XYZ"),Ui.makeRotationFromEuler(qt),a.multiply(Ui)),a}getCartographicFromObjectFrame(e,t,i=ka){return i===_u?(qt.set(-Math.PI/2,0,0,"XYZ"),Ui.makeRotationFromEuler(qt).premultiply(e)):i===ka?(qt.set(-Math.PI/2,0,Math.PI,"XYZ"),Ui.makeRotationFromEuler(qt).premultiply(e)):Ui.copy(e),Qn.setFromMatrixPosition(Ui),this.getPositionToCartographic(Qn,t),this.getEastNorthUpFrame(t.lat,t.lon,0,ni).invert(),Ui.premultiply(ni),qt.setFromRotationMatrix(Ui,"ZXY"),t.azimuth=-qt.z,t.elevation=qt.x,t.roll=qt.y,t}getEastNorthUpAxes(e,t,i,n,s,r=Qn){this.getCartographicToPosition(e,t,0,r),this.getCartographicToNormal(e,t,s),i.set(-r.y,r.x,0).normalize(),n.crossVectors(s,i).normalize()}getAzElRollFromRotationMatrix(e,t,i,n,s=Oa){return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'),this.getCartographicToPosition(e,t,0,Qn),fu.copy(i).setPosition(Qn),this.getCartographicFromObjectFrame(fu,n,s),delete n.height,delete n.lat,delete n.lon,n}getRotationMatrixFromAzElRoll(e,t,i,n,s,r,a=Oa){return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(e,t,0,i,n,s,r,a),r.setPosition(0,0,0),r}getFrame(e,t,i,n,s,r,a,o=Oa){return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(e,t,r,i,n,s,a,o)}getCartographicToPosition(e,t,i,n){this.getCartographicToNormal(e,t,_n);const s=this.radius;Ht.copy(_n),Ht.x*=s.x**2,Ht.y*=s.y**2,Ht.z*=s.z**2;const r=Math.sqrt(_n.dot(Ht));return Ht.divideScalar(r),n.copy(Ht).addScaledVector(_n,i)}getPositionToCartographic(e,t){this.getPositionToSurfacePoint(e,Ht),this.getPositionToNormal(Ht,_n);const i=Zl.subVectors(e,Ht);return t.lon=Math.atan2(_n.y,_n.x),t.lat=Math.asin(_n.z),t.height=Math.sign(i.dot(e))*i.length(),t}getCartographicToNormal(e,t,i){return Au.set(1,Kv(e),t),i.setFromSpherical(Au).normalize(),Xv(i),i}getPositionToNormal(e,t){const i=this.radius;return t.copy(e),t.x/=i.x**2,t.y/=i.y**2,t.z/=i.z**2,t.normalize(),t}getPositionToSurfacePoint(e,t){const i=this.radius,n=1/i.x**2,s=1/i.y**2,r=1/i.z**2,a=e.x*e.x*n,o=e.y*e.y*s,l=e.z*e.z*r,c=a+o+l,h=Math.sqrt(1/c),u=Ht.copy(e).multiplyScalar(h);if(c<Jv)return isFinite(h)?t.copy(u):null;const d=Zl.set(u.x*n*2,u.y*s*2,u.z*r*2);let A=(1-h)*e.length()/(.5*d.length()),p=0,m,g,f,_,b,C,S,M,T,v,y;do{A-=p,f=1/(1+A*n),_=1/(1+A*s),b=1/(1+A*r),C=f*f,S=_*_,M=b*b,T=C*f,v=S*_,y=M*b,m=a*C+o*S+l*M-1,g=a*T*n+o*v*s+l*y*r;const N=-2*g;p=m/N}while(Math.abs(m)>jv);return t.set(e.x*f,e.y*_,e.z*b)}calculateHorizonDistance(e,t){const i=this.calculateEffectiveRadius(e);return Math.sqrt(2*i*t+t**2)}calculateEffectiveRadius(e){const t=this.radius.x,i=1-this.radius.z**2/t**2,n=e*Go.DEG2RAD,s=Math.sin(n)**2;return t/Math.sqrt(1-i*s)}getPositionElevation(e){this.getPositionToSurfacePoint(e,Ht);const t=Zl.subVectors(e,Ht);return Math.sign(t.dot(e))*t.length()}closestPointToRayEstimate(e,t){return this.intersectRay(e,t)?t:(ni.makeScale(...this.radius).invert(),Qa.copy(e).applyMatrix4(ni),Ht.set(0,0,0),Qa.closestPointToPoint(Ht,t).normalize(),ni.makeScale(...this.radius),t.applyMatrix4(ni))}copy(e){return this.radius.copy(e.radius),this}clone(){return new this.constructor().copy(this)}},Ga=new vu(Od,Od,j_);Ga.name="WGS84 Earth";var Ha=new B,Va=new B,Xt=new B,za=new Bn,ec=class{constructor(t=new fi,i=new pe){this.box=t.clone(),this.transform=i.clone(),this.inverseTransform=new pe,this.points=new Array(8).fill().map(()=>new B),this.planes=new Array(6).fill().map(()=>new hn)}copy(t){return this.box.copy(t.box),this.transform.copy(t.transform),this.update(),this}clone(){return new this.constructor().copy(this)}clampPoint(t,i){return i.copy(t).applyMatrix4(this.inverseTransform).clamp(this.box.min,this.box.max).applyMatrix4(this.transform)}distanceToPoint(t){return this.clampPoint(t,Xt).distanceTo(t)}containsPoint(t){return Xt.copy(t).applyMatrix4(this.inverseTransform),this.box.containsPoint(Xt)}intersectsRay(t){return za.copy(t).applyMatrix4(this.inverseTransform),za.intersectsBox(this.box)}intersectRay(t,i){return za.copy(t).applyMatrix4(this.inverseTransform),za.intersectBox(this.box,i)?(i.applyMatrix4(this.transform),i):null}update(){const{points:t,inverseTransform:i,transform:n,box:s}=this;i.copy(n).invert();const{min:r,max:a}=s;let o=0;for(let l=-1;l<=1;l+=2)for(let c=-1;c<=1;c+=2)for(let h=-1;h<=1;h+=2)t[o].set(l<0?r.x:a.x,c<0?r.y:a.y,h<0?r.z:a.z).applyMatrix4(n),o++;this.updatePlanes()}updatePlanes(){Ha.copy(this.box.min).applyMatrix4(this.transform),Va.copy(this.box.max).applyMatrix4(this.transform),Xt.set(0,0,1).transformDirection(this.transform),this.planes[0].setFromNormalAndCoplanarPoint(Xt,Ha),this.planes[1].setFromNormalAndCoplanarPoint(Xt,Va).negate(),Xt.set(0,1,0).transformDirection(this.transform),this.planes[2].setFromNormalAndCoplanarPoint(Xt,Ha),this.planes[3].setFromNormalAndCoplanarPoint(Xt,Va).negate(),Xt.set(1,0,0).transformDirection(this.transform),this.planes[4].setFromNormalAndCoplanarPoint(Xt,Ha),this.planes[5].setFromNormalAndCoplanarPoint(Xt,Va).negate()}intersectsSphere(t){return this.clampPoint(t.center,Xt),Xt.distanceToSquared(t.center)<=t.radius*t.radius}intersectsFrustum(t){return this._intersectsPlaneShape(t.planes,t.points)}intersectsOBB(t){return this._intersectsPlaneShape(t.planes,t.points)}_intersectsPlaneShape(t,i){const n=this.points,s=this.planes;for(let r=0;r<6;r++){const a=t[r];let o=-1/0;for(let l=0;l<8;l++){const c=n[l],h=a.distanceToPoint(c);o=o<h?h:o}if(o<0)return!1}for(let r=0;r<6;r++){const a=s[r];let o=-1/0;for(let l=0;l<8;l++){const c=i[l],h=a.distanceToPoint(c);o=o<h?h:o}if(o<0)return!1}return!0}},gr=Math.PI,tc=gr/2,mr=new B,On=new B,bi=new B,Pe=new B,Vt=new pe,Yv=new fi,bu=new pe;function vn(e,t){t.radius=Math.max(t.radius,e.distanceToSquared(t.center))}function Eu(e){return e.x!==e.y}var Zv=class extends vu{constructor(e=1,t=1,i=1,n=-tc,s=tc,r=0,a=2*gr,o=0,l=0){super(e,t,i),this.latStart=n,this.latEnd=s,this.lonStart=r,this.lonEnd=a,this.heightStart=o,this.heightEnd=l}getBoundingBox(e,t){Eu(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported.");const{latStart:i,latEnd:n,lonStart:s,lonEnd:r,heightStart:a,heightEnd:o}=this,l=(i+n)*.5,c=(s+r)*.5,h=i>0,u=n<0;let d;h?d=i:u?d=n:d=0;const{min:A,max:p}=e;A.setScalar(1/0),p.setScalar(-1/0),r-s<=gr?(this.getCartographicToNormal(l,c,bi),On.set(0,0,1),mr.crossVectors(On,bi).normalize(),On.crossVectors(bi,mr).normalize(),t.makeBasis(mr,On,bi),Vt.copy(t).invert(),this.getCartographicToPosition(d,s,o,Pe).applyMatrix4(Vt),p.x=Math.abs(Pe.x),A.x=-p.x,this.getCartographicToPosition(n,s,o,Pe).applyMatrix4(Vt),p.y=Pe.y,this.getCartographicToPosition(n,c,o,Pe).applyMatrix4(Vt),p.y=Math.max(Pe.y,p.y),this.getCartographicToPosition(i,s,o,Pe).applyMatrix4(Vt),A.y=Pe.y,this.getCartographicToPosition(i,c,o,Pe).applyMatrix4(Vt),A.y=Math.min(Pe.y,A.y),this.getCartographicToPosition(l,c,o,Pe).applyMatrix4(Vt),p.z=Pe.z,this.getCartographicToPosition(i,s,a,Pe).applyMatrix4(Vt),A.z=Pe.z,this.getCartographicToPosition(n,s,a,Pe).applyMatrix4(Vt),A.z=Math.min(Pe.z,A.z)):(this.getCartographicToPosition(d,c,o,bi),bi.z=0,bi.length()<1e-10?bi.set(1,0,0):bi.normalize(),On.set(0,0,1),mr.crossVectors(bi,On).normalize(),t.makeBasis(mr,On,bi),Vt.copy(t).invert(),this.getCartographicToPosition(d,c+tc,o,Pe).applyMatrix4(Vt),p.x=Math.abs(Pe.x),A.x=-p.x,this.getCartographicToPosition(n,0,u?a:o,Pe).applyMatrix4(Vt),p.y=Pe.y,this.getCartographicToPosition(i,0,h?a:o,Pe).applyMatrix4(Vt),A.y=Pe.y,this.getCartographicToPosition(d,c,o,Pe).applyMatrix4(Vt),p.z=Pe.z,this.getCartographicToPosition(d,r,o,Pe).applyMatrix4(Vt),A.z=Pe.z),e.getCenter(Pe),e.min.sub(Pe).multiplyScalar(1.0000000000001),e.max.sub(Pe).multiplyScalar(1.0000000000001),Pe.applyMatrix4(t),t.setPosition(Pe)}getBoundingSphere(e){Eu(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported."),this.getBoundingBox(Yv,bu),e.center.setFromMatrixPosition(bu),e.radius=0;const{latStart:t,latEnd:i,lonStart:n,lonEnd:s,heightStart:r,heightEnd:a}=this,o=(t+i)*.5,l=(n+s)*.5,c=t>0,h=i<0;let u;c?u=t:h?u=i:u=0,this.getCartographicToPosition(u,n,a,Pe),vn(Pe,e),this.getCartographicToPosition(i,n,a,Pe),vn(Pe,e),this.getCartographicToPosition(i,l,a,Pe),vn(Pe,e),this.getCartographicToPosition(t,n,a,Pe),vn(Pe,e),this.getCartographicToPosition(t,l,a,Pe),vn(Pe,e),this.getCartographicToPosition(o,l,a,Pe),vn(Pe,e),this.getCartographicToPosition(t,n,r,Pe),vn(Pe,e),s-n>gr&&(this.getCartographicToPosition(u,l+gr,a,Pe),vn(Pe,e)),e.radius=Math.sqrt(e.radius)*1.0000000000001}},ic=0;function Cu(e,t,i,n){try{return Bg.getByteLength(e,t,i,n)}catch{return ic}}function $v(e){var t,i;if(!e)return 0;if(e.isExternalTexture)return((t=e.userData)==null?void 0:t.byteLength)??ic;const{format:n,type:s,image:r,mipmaps:a}=e;if(e.isCompressedTexture&&Array.isArray(a)&&a.length>0){let l=0;for(const c of a)(i=c?.data)!=null&&i.byteLength?l+=c.data.byteLength:l+=Cu(c.width,c.height,n,s);return l}if(!r)return ic;let o=Cu(r.width,r.height,n,s);return o*=e.generateMipmaps?4/3:1,o}function eb(e){const t=new Set;let i=0;return e.traverse(n=>{if(n.geometry&&!t.has(n.geometry)&&(i+=uv(n.geometry),t.add(n.geometry)),n.material){const s=n.material;for(const r in s){const a=s[r];a&&a.isTexture&&!t.has(a)&&(i+=$v(a),t.add(a))}}}),i}var Iu=class extends lv{constructor(e=cr){super(),this.manager=e,this.adjustmentTransform=new pe}parse(e){const t=super.parse(e),i=t.glbBytes.slice().buffer;return new Promise((n,s)=>{const r=this.manager,a=this.fetchOptions,o=r.getHandler("path.gltf")||new Na(r);a.credentials==="include"&&a.mode==="cors"&&o.setCrossOrigin("use-credentials"),"credentials"in a&&o.setWithCredentials(a.credentials==="include"),a.headers&&o.setRequestHeader(a.headers);let l=this.workingPath;!/[\\/]$/.test(l)&&l.length&&(l+="/");const c=this.adjustmentTransform;o.parse(i,l,h=>{const{batchTable:u,featureTable:d}=t,{scene:A}=h,p=d.getData("RTC_CENTER",1,"FLOAT","VEC3");p&&(A.position.x+=p[0],A.position.y+=p[1],A.position.z+=p[2]),h.scene.updateMatrix(),h.scene.matrix.multiply(c),h.scene.matrix.decompose(h.scene.position,h.scene.quaternion,h.scene.scale),h.batchTable=u,h.featureTable=d,A.batchTable=u,A.featureTable=d,n(h)},s)})}};function tb(e){const t=e>>11,i=e>>5&63,n=e&31;return[Math.round(t/31*255),Math.round(i/63*255),Math.round(n/31*255)]}var _r=new je;function ib(e,t,i=new B){_r.set(e,t).divideScalar(256).multiplyScalar(2).subScalar(1),i.set(_r.x,_r.y,1-Math.abs(_r.x)-Math.abs(_r.y));const n=Go.clamp(-i.z,0,1);return i.x>=0?i.setX(i.x-n):i.setX(i.x+n),i.y>=0?i.setY(i.y-n):i.setY(i.y+n),i.normalize(),i}var yu={RGB:"color",POSITION:"position"},Su=class extends hv{constructor(e=cr){super(),this.manager=e}parse(e){return super.parse(e).then(async t=>{const{featureTable:i,batchTable:n}=t,s=new ml,r=i.header.extensions,a=new B;let o;if(r&&r["3DTILES_draco_point_compression"]){const{byteOffset:h,byteLength:u,properties:d}=r["3DTILES_draco_point_compression"],A=this.manager.getHandler("draco.drc");if(A==null)throw new Error("PNTSLoader: dracoLoader not available.");const p={};for(const f in d)if(f in yu&&f in d){const _=yu[f];p[_]=d[f]}const m={attributeIDs:p,attributeTypes:{position:"Float32Array",color:"Uint8Array"},useUniqueIDs:!0},g=i.getBuffer(h,u);o=await A.decodeGeometry(g,m),o.attributes.color&&(s.vertexColors=!0)}else{const h=i.getData("POINTS_LENGTH"),u=i.getData("POSITION",h,"FLOAT","VEC3"),d=i.getData("NORMAL",h,"FLOAT","VEC3"),A=i.getData("NORMAL",h,"UNSIGNED_BYTE","VEC2"),p=i.getData("RGB",h,"UNSIGNED_BYTE","VEC3"),m=i.getData("RGBA",h,"UNSIGNED_BYTE","VEC4"),g=i.getData("RGB565",h,"UNSIGNED_SHORT","SCALAR"),f=i.getData("CONSTANT_RGBA",h,"UNSIGNED_BYTE","VEC4"),_=i.getData("POSITION_QUANTIZED",h,"UNSIGNED_SHORT","VEC3"),b=i.getData("QUANTIZED_VOLUME_SCALE",h,"FLOAT","VEC3"),C=i.getData("QUANTIZED_VOLUME_OFFSET",h,"FLOAT","VEC3");if(o=new ti,_){const S=new Float32Array(h*3);for(let M=0;M<h;M++)for(let T=0;T<3;T++){const v=3*M+T;S[v]=_[v]/65535*b[T]}a.x=C[0],a.y=C[1],a.z=C[2],o.setAttribute("position",new ct(S,3,!1))}else o.setAttribute("position",new ct(u,3,!1));if(d!==null)o.setAttribute("normal",new ct(d,3,!1));else if(A!==null){const S=new Float32Array(h*3),M=new B;for(let T=0;T<h;T++){const v=A[T*2],y=A[T*2+1],N=ib(v,y,M);S[T*3]=N.x,S[T*3+1]=N.y,S[T*3+2]=N.z}o.setAttribute("normal",new ct(S,3,!1))}if(m!==null)o.setAttribute("color",new ct(m,4,!0)),s.vertexColors=!0,s.transparent=!0,s.depthWrite=!1;else if(p!==null)o.setAttribute("color",new ct(p,3,!0)),s.vertexColors=!0;else if(g!==null){const S=new Uint8Array(h*3);for(let M=0;M<h;M++){const T=tb(g[M]);for(let v=0;v<3;v++){const y=3*M+v;S[y]=T[v]}}o.setAttribute("color",new ct(S,3,!0)),s.vertexColors=!0}else if(f!==null){s.color=new Le(f[0],f[1],f[2]);const S=f[3]/255;S<1&&(s.opacity=S,s.transparent=!0,s.depthWrite=!1)}}const l=new Gh(o,s);l.position.copy(a),t.scene=l,t.scene.featureTable=i,t.scene.batchTable=n;const c=i.getData("RTC_CENTER",1,"FLOAT","VEC3");return c&&(t.scene.position.x+=c[0],t.scene.position.y+=c[1],t.scene.position.z+=c[2]),t})}},Wa=new B,ws=new B,Bs=new B,nc=new B,qa=new di,Xa=new B,Rs=new pe,xu=new pe,Mu=new B,Tu=new pe,sc=new di,rc={};function wu(e,t,i,n){if(e=e/i*2-1,t=t/i*2-1,n.x=e,n.y=t,n.z=1-Math.abs(e)-Math.abs(t),n.z<0){const s=n.x;n.x=(1-Math.abs(n.y))*(s>=0?1:-1),n.y=(1-Math.abs(s))*(n.y>=0?1:-1)}return n.normalize(),n}var Bu=class extends cv{constructor(e=cr){super(),this.manager=e,this.adjustmentTransform=new pe,this.ellipsoid=Ga.clone()}resolveExternalURL(e){return this.manager.resolveURL(super.resolveExternalURL(e))}parse(e){return super.parse(e).then(t=>{const{featureTable:i,batchTable:n}=t,s=t.glbBytes.slice().buffer;return new Promise((r,a)=>{const o=this.fetchOptions,l=this.manager,c=l.getHandler("path.gltf")||new Na(l);o.credentials==="include"&&o.mode==="cors"&&c.setCrossOrigin("use-credentials"),"credentials"in o&&c.setWithCredentials(o.credentials==="include"),o.headers&&c.setRequestHeader(o.headers);let h=t.gltfWorkingPath??this.workingPath;/[\\/]$/.test(h)||(h+="/");const u=this.adjustmentTransform;c.parse(s,h,d=>{const A=i.getData("INSTANCES_LENGTH");let p=i.getData("POSITION",A,"FLOAT","VEC3");const m=i.getData("POSITION_QUANTIZED",A,"UNSIGNED_SHORT","VEC3"),g=i.getData("QUANTIZED_VOLUME_OFFSET",1,"FLOAT","VEC3"),f=i.getData("QUANTIZED_VOLUME_SCALE",1,"FLOAT","VEC3"),_=i.getData("NORMAL_UP",A,"FLOAT","VEC3"),b=i.getData("NORMAL_RIGHT",A,"FLOAT","VEC3"),C=i.getData("NORMAL_UP_OCT32P",A,"UNSIGNED_SHORT","VEC2"),S=i.getData("NORMAL_RIGHT_OCT32P",A,"UNSIGNED_SHORT","VEC2"),M=i.getData("SCALE_NON_UNIFORM",A,"FLOAT","VEC3"),T=i.getData("SCALE",A,"FLOAT","SCALAR"),v=i.getData("RTC_CENTER",1,"FLOAT","VEC3"),y=i.getData("EAST_NORTH_UP");if(!p&&m){p=new Float32Array(A*3);for(let F=0;F<A;F++)p[F*3+0]=g[0]+m[F*3+0]/65535*f[0],p[F*3+1]=g[1]+m[F*3+1]/65535*f[1],p[F*3+2]=g[2]+m[F*3+2]/65535*f[2]}const N=new B;for(let F=0;F<A;F++)N.x+=p[F*3+0]/A,N.y+=p[F*3+1]/A,N.z+=p[F*3+2]/A;const w=[],z=[];d.scene.updateMatrixWorld(),d.scene.traverse(F=>{if(F.isMesh){z.push(F);const{geometry:Q,material:V}=F,G=new Al(Q,V,A);G.position.copy(N),v&&(G.position.x+=v[0],G.position.y+=v[1],G.position.z+=v[2]),w.push(G)}});for(let F=0;F<A;F++){nc.set(p[F*3+0]-N.x,p[F*3+1]-N.y,p[F*3+2]-N.z),qa.identity(),_&&b?(ws.set(_[F*3+0],_[F*3+1],_[F*3+2]),Bs.set(b[F*3+0],b[F*3+1],b[F*3+2]),Wa.crossVectors(Bs,ws).normalize(),Rs.makeBasis(Bs,ws,Wa),qa.setFromRotationMatrix(Rs)):C&&S&&(wu(C[F*2+0],C[F*2+1],65535,ws),wu(S[F*2+0],S[F*2+1],65535,Bs),Wa.crossVectors(Bs,ws).normalize(),Rs.makeBasis(Bs,ws,Wa),qa.setFromRotationMatrix(Rs)),Xa.set(1,1,1),M&&Xa.set(M[F*3+0],M[F*3+1],M[F*3+2]),T&&Xa.multiplyScalar(T[F]);for(let Q=0,V=w.length;Q<V;Q++){const G=w[Q];sc.copy(qa),y&&(G.updateMatrixWorld(),Mu.copy(nc).applyMatrix4(G.matrixWorld),this.ellipsoid.getPositionToCartographic(Mu,rc),this.ellipsoid.getEastNorthUpFrame(rc.lat,rc.lon,Tu),sc.setFromRotationMatrix(Tu)),Rs.compose(nc,sc,Xa).multiply(u);const U=z[Q];xu.multiplyMatrices(Rs,U.matrixWorld),G.setMatrixAt(F,xu)}}d.scene.clear(),d.scene.add(...w),d.batchTable=n,d.featureTable=i,d.scene.batchTable=n,d.scene.featureTable=i,r(d)},a)})})}},nb=class extends dv{constructor(e=cr){super(),this.manager=e,this.adjustmentTransform=new pe,this.ellipsoid=Ga.clone()}parse(e){const t=super.parse(e),{manager:i,ellipsoid:n,adjustmentTransform:s}=this,r=[];for(const a in t.tiles){const{type:o,buffer:l}=t.tiles[a];switch(o){case"b3dm":{const c=l.slice(),h=new Iu(i);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.adjustmentTransform.copy(s);const u=h.parse(c.buffer);r.push(u);break}case"pnts":{const c=l.slice(),h=new Su(i);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions;const u=h.parse(c.buffer);r.push(u);break}case"i3dm":{const c=l.slice(),h=new Bu(i);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.ellipsoid.copy(n),h.adjustmentTransform.copy(s);const u=h.parse(c.buffer);r.push(u);break}}}return Promise.all(r).then(a=>{const o=new wi;return a.forEach(l=>{o.add(l.scene)}),{tiles:a,scene:o}})}},vr=new pe,sb=class extends wi{constructor(e){super(),this.isTilesGroup=!0,this.name="TilesRenderer.TilesGroup",this.tilesRenderer=e,this.matrixWorldInverse=new pe}raycast(e,t){return this.tilesRenderer.optimizeRaycast?(this.tilesRenderer.raycast(e,t),!1):!0}updateMatrixWorld(e){if(this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldNeedsUpdate||e){this.parent===null?vr.copy(this.matrix):vr.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1;const t=vr.elements,i=this.matrixWorld.elements;let n=!1;for(let s=0;s<16;s++){const r=t[s],a=i[s];if(Math.abs(r-a)>Number.EPSILON){n=!0;break}}if(n){this.matrixWorld.copy(vr),this.matrixWorldInverse.copy(vr).invert();const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateMatrixWorld()}}}updateWorldMatrix(e,t){this.parent&&e&&this.parent.updateWorldMatrix(e,!1),this.updateMatrixWorld(!0)}},Ru=new Bn,ac=new B,Ka=[];function Du(e,t){return e.distance-t.distance}function Lu(e,t,i,n){const{scene:s}=e.engineData;i.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(e,s,t,n))||t.intersectObject(s,!0,n)}function rb(e,t,i){Lu(e,t,i,Ka),Ka.sort(Du);const n=Ka[0]||null;return Ka.length=0,n}function Pu(e){return"traversal"in e}function Fu(e,t,i,n=null){const{group:s,activeTiles:r}=e;n===null&&(n=Ru,n.copy(i.ray).applyMatrix4(s.matrixWorldInverse));const a=[],o=t.children;for(let h=0,u=o.length;h<u;h++){const d=o[h];!Pu(d)||!d.traversal.used||d.engineData.boundingVolume.intersectRay(n,ac)!==null&&(ac.applyMatrix4(s.matrixWorld),a.push({distance:ac.distanceToSquared(i.ray.origin),tile:d}))}a.sort(Du);let l=null,c=1/0;if(r.has(t)){const h=rb(t,i,e);h&&(l=h,c=h.distance*h.distance)}for(let h=0,u=a.length;h<u;h++){const d=a[h],A=d.distance,p=d.tile;if(A>c)break;const m=Fu(e,p,i,n);if(m){const g=m.distance*m.distance;g<c&&(l=m,c=g)}}return l}function Uu(e,t,i,n,s=null){if(!Pu(t))return;const{group:r,activeTiles:a}=e,{boundingVolume:o}=t.engineData;if(s===null&&(s=Ru,s.copy(i.ray).applyMatrix4(r.matrixWorldInverse)),!t.traversal.used||!o.intersectsRay(s))return;a.has(t)&&Lu(t,i,e,n);const l=t.children;for(let c=0,h=l.length;c<h;c++)Uu(e,l[c],i,n,s)}var Ji=new B,Yi=new B,Zi=new B,Nu=new B,Qu=new B,ab=class{constructor(){this.sphere=null,this.obb=null,this.region=null,this.regionObb=null}intersectsRay(e){const t=this.sphere,i=this.obb||this.regionObb;return!(t&&!e.intersectsSphere(t)||i&&!i.intersectsRay(e))}intersectRay(e,t=null){const i=this.sphere,n=this.obb||this.regionObb;let s=-1/0,r=-1/0;i&&e.intersectSphere(i,Nu)&&(s=i.containsPoint(e.origin)?0:e.origin.distanceToSquared(Nu)),n&&n.intersectRay(e,Qu)&&(r=n.containsPoint(e.origin)?0:e.origin.distanceToSquared(Qu));const a=Math.max(s,r);return a===-1/0?null:(e.at(Math.sqrt(a),t),t)}distanceToPoint(e){const t=this.sphere,i=this.obb||this.regionObb;let n=-1/0,s=-1/0;return t&&(n=Math.max(t.distanceToPoint(e),0)),i&&(s=i.distanceToPoint(e)),n>s?n:s}intersectsFrustum(e){const t=this.obb||this.regionObb,i=this.sphere;return i&&!e.intersectsSphere(i)||t&&!t.intersectsFrustum(e)?!1:!!(i||t)}intersectsSphere(e){const t=this.obb||this.regionObb,i=this.sphere;return i&&!i.intersectsSphere(e)||t&&!t.intersectsSphere(e)?!1:!!(i||t)}intersectsOBB(e){const t=this.obb||this.regionObb,i=this.sphere;return i&&!e.intersectsSphere(i)||t&&!t.intersectsOBB(e)?!1:!!(i||t)}getOBB(e,t){const i=this.obb||this.regionObb;i?(e.copy(i.box),t.copy(i.transform)):(this.getAABB(e),t.identity())}getAABB(e){if(this.sphere)this.sphere.getBoundingBox(e);else{const t=this.obb||this.regionObb;e.copy(t.box).applyMatrix4(t.transform)}}getSphere(e){if(this.sphere)e.copy(this.sphere);else if(this.region)this.region.getBoundingSphere(e);else{const t=this.obb||this.regionObb;t.box.getBoundingSphere(e),e.applyMatrix4(t.transform)}}setObbData(e,t){const i=new ec;Ji.set(e[3],e[4],e[5]),Yi.set(e[6],e[7],e[8]),Zi.set(e[9],e[10],e[11]);const n=Ji.length(),s=Yi.length(),r=Zi.length();Ji.normalize(),Yi.normalize(),Zi.normalize(),n===0&&Ji.crossVectors(Yi,Zi),s===0&&Yi.crossVectors(Ji,Zi),r===0&&Zi.crossVectors(Ji,Yi),i.transform.set(Ji.x,Yi.x,Zi.x,e[0],Ji.y,Yi.y,Zi.y,e[1],Ji.z,Yi.z,Zi.z,e[2],0,0,0,1).premultiply(t),i.box.min.set(-n,-s,-r),i.box.max.set(n,s,r),i.update(),this.obb=i}setSphereData(e,t,i,n,s){const r=new Jt;r.center.set(e,t,i),r.radius=n,r.applyMatrix4(s),this.sphere=r}setRegionData(e,t,i,n,s,r,a){const o=new Zv(...e.radius,i,s,t,n,r,a),l=new ec;o.getBoundingBox(l.box,l.transform),l.update(),this.region=o,this.regionObb=l}},ob=new Qe;function lb(e,t,i,n){const s=ob.set(e.normal.x,e.normal.y,e.normal.z,t.normal.x,t.normal.y,t.normal.z,i.normal.x,i.normal.y,i.normal.z);return n.set(-e.constant,-t.constant,-i.constant),n.applyMatrix3(s.invert()),n}var cb=class extends ca{constructor(){super(),this.points=Array(8).fill().map(()=>new B)}setFromProjectionMatrix(...e){return super.setFromProjectionMatrix(...e),this.calculateFrustumPoints(),this}calculateFrustumPoints(){const{planes:e,points:t}=this;[[e[0],e[3],e[4]],[e[1],e[3],e[4]],[e[0],e[2],e[4]],[e[1],e[2],e[4]],[e[0],e[3],e[5]],[e[1],e[3],e[5]],[e[0],e[2],e[5]],[e[1],e[2],e[5]]].forEach((i,n)=>{lb(i[0],i[1],i[2],t[n])})}},Ou=new pe,ku=new Gi,Gu=Symbol("INITIAL_FRUSTUM_CULLED"),ja=new pe,br=new B,oc=new je,hb=new B(1,0,0),db=new B(0,1,0);function Hu(e,t){e.traverse(i=>{i.frustumCulled=i[Gu]&&t})}var ub=class extends av{get autoDisableRendererCulling(){return this._autoDisableRendererCulling}set autoDisableRendererCulling(e){this._autoDisableRendererCulling!==e&&(super._autoDisableRendererCulling=e,this.forEachLoadedModel(t=>{Hu(t,!e)}))}get optimizeRaycast(){return this._optimizeRaycast}set optimizeRaycast(e){console.warn('TilesRenderer: The "optimizeRaycast" option has been deprecated.'),this._optimizeRaycast=e}constructor(...e){super(...e),this.group=new sb(this),this.ellipsoid=Ga.clone(),this.cameras=[],this.cameraMap=new Map,this.cameraInfo=[],this._optimizeRaycast=!0,this._upRotationMatrix=new pe,this._bytesUsed=new WeakMap,this._autoDisableRendererCulling=!0,this.manager=new Zh,this._listeners={}}addEventListener(e,t){e==="load-tile-set"?(console.warn('TilesRenderer: "load-tile-set" event has been deprecated. Use "load-tileset" instead.'),e="load-tileset"):e==="load-content"&&console.warn('TilesRenderer: "load-content" event has been deprecated. Use "load-model" or "load-tileset" instead.'),li.prototype.addEventListener.call(this,e,t)}hasEventListener(e,t){return e==="load-tile-set"?(console.warn('TilesRenderer: "load-tile-set" event has been deprecated. Use "load-tileset" instead.'),e="load-tileset"):e==="load-content"&&console.warn('TilesRenderer: "load-content" event has been deprecated. Use "load-model" or "load-tileset" instead.'),li.prototype.hasEventListener.call(this,e,t)}removeEventListener(e,t){e==="load-tile-set"?(console.warn('TilesRenderer: "load-tile-set" event has been deprecated. Use "load-tileset" instead.'),e="load-tileset"):e==="load-content"&&console.warn('TilesRenderer: "load-content" event has been deprecated. Use "load-model" or "load-tileset" instead.'),li.prototype.removeEventListener.call(this,e,t)}dispatchEvent(e){"tileset"in e&&Object.defineProperty(e,"tileSet",{get(){return console.warn('TilesRenderer: "event.tileSet" has been deprecated. Use "event.tileset" instead.'),e.tileset},enumerable:!1,configurable:!0}),li.prototype.dispatchEvent.call(this,e)}getBoundingBox(e){if(!this.root)return!1;const t=this.root.engineData.boundingVolume;return t?(t.getAABB(e),!0):!1}getOrientedBoundingBox(e,t){if(!this.root)return!1;const i=this.root.engineData.boundingVolume;return i?(i.getOBB(e,t),!0):!1}getBoundingSphere(e){if(!this.root)return!1;const t=this.root.engineData.boundingVolume;return t?(t.getSphere(e),!0):!1}forEachLoadedModel(e){this.traverse(t=>{const i=t.engineData&&t.engineData.scene;i&&e(i,t)},null,!1)}raycast(e,t){if(this.root)if(e.firstHitOnly){const i=Fu(this,this.root,e);i&&t.push(i)}else Uu(this,this.root,e,t)}hasCamera(e){return this.cameraMap.has(e)}setCamera(e){const t=this.cameras,i=this.cameraMap;return i.has(e)?!1:(i.set(e,new je),t.push(e),this.dispatchEvent({type:"add-camera",camera:e}),!0)}setResolution(e,t,i){const n=this.cameraMap;if(!n.has(e))return!1;const s=t.isVector2?t.x:t,r=t.isVector2?t.y:i,a=n.get(e);return(a.width!==s||a.height!==r)&&(a.set(s,r),this.dispatchEvent({type:"camera-resolution-change"})),!0}setResolutionFromRenderer(e,t){return t.getSize(oc),this.setResolution(e,oc.x,oc.y)}deleteCamera(e){const t=this.cameras,i=this.cameraMap;if(i.has(e)){const n=t.indexOf(e);return t.splice(n,1),i.delete(e),this.dispatchEvent({type:"delete-camera",camera:e}),!0}return!1}loadRootTileset(...e){return super.loadRootTileset(...e).then(t=>{const{asset:i,extensions:n={}}=t;switch((i&&i.gltfUpAxis||"y").toLowerCase()){case"x":this._upRotationMatrix.makeRotationAxis(db,-Math.PI/2);break;case"y":this._upRotationMatrix.makeRotationAxis(hb,Math.PI/2)}if("3DTILES_ellipsoid"in n){const s=n["3DTILES_ellipsoid"],{ellipsoid:r}=this;r.name=s.body,s.radii?r.radius.set(...s.radii):r.radius.set(1,1,1)}return t})}prepareForTraversal(){const e=this.group,t=this.cameras,i=this.cameraMap,n=this.cameraInfo;for(;n.length>t.length;)n.pop();for(;n.length<t.length;)n.push({frustum:new cb,isOrthographic:!1,sseDenominator:-1,position:new B,invScale:-1,pixelSize:0});br.setFromMatrixScale(e.matrixWorldInverse),Math.abs(Math.max(br.x-br.y,br.x-br.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");for(let s=0,r=n.length;s<r;s++){const a=t[s],o=n[s],l=o.frustum,c=o.position,h=i.get(a);(h.width===0||h.height===0)&&console.warn("TilesRenderer: resolution for camera error calculation is not set.");const u=a.projectionMatrix.elements;if(o.isOrthographic=u[15]===1,o.isOrthographic){const d=2/u[0],A=2/u[5];o.pixelSize=Math.max(A/h.height,d/h.width)}else o.sseDenominator=2/u[5]/h.height;ja.copy(e.matrixWorld),ja.premultiply(a.matrixWorldInverse),ja.premultiply(a.projectionMatrix),l.setFromProjectionMatrix(ja,a.coordinateSystem,a.reversedDepth),c.set(0,0,0),c.applyMatrix4(a.matrixWorld),c.applyMatrix4(e.matrixWorldInverse)}}update(){if(super.update(),this.cameras.length===0&&this.root){let e=!1;this.invokeAllPlugins(t=>e=e||!!(t!==this&&t.calculateTileViewError)),e===!1&&console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.")}}preprocessNode(e,t,i=null){super.preprocessNode(e,t,i);const n=new pe;if(e.transform){const a=e.transform;for(let o=0;o<16;o++)n.elements[o]=a[o]}i&&n.premultiply(i.engineData.transform);const s=new pe().copy(n).invert(),r=new ab;"sphere"in e.boundingVolume&&r.setSphereData(...e.boundingVolume.sphere,n),"box"in e.boundingVolume&&r.setObbData(e.boundingVolume.box,n),"region"in e.boundingVolume&&r.setRegionData(this.ellipsoid,...e.boundingVolume.region),e.engineData.transform=n,e.engineData.transformInverse=s,e.engineData.boundingVolume=r,e.engineData.geometry=null,e.engineData.materials=null,e.engineData.textures=null}async parseTile(e,t,i,n,s){const r=t.engineData,a=Ul(n),o=this.fetchOptions,l=this.manager;let c=null;const h=r.transform,u=this._upRotationMatrix,d=(Ms(e)||i).toLowerCase();switch(d){case"b3dm":{const b=new Iu(l);b.workingPath=a,b.fetchOptions=o,b.adjustmentTransform.copy(u),c=b.parse(e);break}case"pnts":{const b=new Su(l);b.workingPath=a,b.fetchOptions=o,c=b.parse(e);break}case"i3dm":{const b=new Bu(l);b.workingPath=a,b.fetchOptions=o,b.adjustmentTransform.copy(u),b.ellipsoid.copy(this.ellipsoid),c=b.parse(e);break}case"cmpt":{const b=new nb(l);b.workingPath=a,b.fetchOptions=o,b.adjustmentTransform.copy(u),b.ellipsoid.copy(this.ellipsoid),c=b.parse(e).then(C=>C.scene);break}case"gltf":case"glb":{const b=l.getHandler("path.gltf")||l.getHandler("path.glb")||new Na(l);b.setWithCredentials(o.credentials==="include"),b.setRequestHeader(o.headers||{}),o.credentials==="include"&&o.mode==="cors"&&b.setCrossOrigin("use-credentials");let C=b.resourcePath||b.path||a;!/[\\/]$/.test(C)&&C.length&&(C+="/"),c=b.parseAsync(e,C).then(S=>{S.scene=S.scene||new wi;const{scene:M}=S;return M.updateMatrix(),M.matrix.multiply(u).decompose(M.position,M.quaternion,M.scale),S});break}default:c=this.invokeOnePlugin(b=>b.parseToMesh&&b.parseToMesh(e,t,i,n,s))}const A=await c;if(A===null)throw new Error(`TilesRenderer: Content type "${d}" not supported.`);let p,m;A.isObject3D?(p=A,m=null):(p=A.scene,m=A),p.updateMatrix(),p.matrix.premultiply(h),p.matrix.decompose(p.position,p.quaternion,p.scale),await this.invokeAllPlugins(b=>b.processTileModel&&b.processTileModel(p,t)),p.traverse(b=>{b[Gu]=b.frustumCulled}),Hu(p,!this.autoDisableRendererCulling);const g=[],f=[],_=[];if(p.traverse(b=>{if(b.geometry&&f.push(b.geometry),b.material){const C=b.material;g.push(b.material);for(const S in C){const M=C[S];M&&M.isTexture&&_.push(M)}}}),s.aborted){for(let b=0,C=_.length;b<C;b++){const S=_[b];S.image instanceof ImageBitmap&&S.image.close(),S.dispose()}return}r.materials=g,r.geometry=f,r.textures=_,r.scene=p,r.metadata=m}disposeTile(e){super.disposeTile(e);const t=e.engineData;if(t.scene){const i=t.materials,n=t.geometry,s=t.textures,r=t.scene.parent;t.scene.traverse(a=>{a.userData.meshFeatures&&a.userData.meshFeatures.dispose(),a.userData.structuralMetadata&&a.userData.structuralMetadata.dispose()});for(let a=0,o=n.length;a<o;a++)n[a].dispose();for(let a=0,o=i.length;a<o;a++)i[a].dispose();for(let a=0,o=s.length;a<o;a++){const l=s[a];l.image instanceof ImageBitmap&&l.image.close(),l.dispose()}r&&r.remove(t.scene),t.scene=null,t.materials=null,t.textures=null,t.geometry=null,t.metadata=null}}setTileVisible(e,t){const i=e.engineData.scene,n=this.group;t?i&&(n.add(i),i.updateMatrixWorld(!0)):i&&n.remove(i),super.setTileVisible(e,t)}calculateBytesUsed(e,t){const i=this._bytesUsed;return!i.has(e)&&t&&i.set(e,eb(t)),i.get(e)??null}calculateTileViewError(e,t){const i=e.engineData,n=this.cameras,s=this.cameraInfo,r=i.boundingVolume;let a=!1,o=0,l=1/0,c=0,h=1/0;for(let u=0,d=n.length;u<d;u++){const A=s[u];let p,m;if(A.isOrthographic){const f=A.pixelSize;p=e.geometricError/f,m=1/0}else{const f=A.sseDenominator;m=r.distanceToPoint(A.position),p=m===0?1/0:e.geometricError/(m*f)}const g=s[u].frustum;r.intersectsFrustum(g)&&(a=!0,o=Math.max(o,p),l=Math.min(l,m)),c=Math.max(c,p),h=Math.min(h,m)}a?(t.inView=!0,t.error=o,t.distanceFromCamera=l):(t.inView=!1,t.error=c,t.distanceFromCamera=h)}setLatLonToYUp(e,t){console.warn("TilesRenderer: setLatLonToYUp is deprecated. Use the ReorientationPlugin, instead.");const{ellipsoid:i,group:n}=this;ku.set(Math.PI/2,Math.PI/2,0),Ou.makeRotationFromEuler(ku),i.getEastNorthUpFrame(e,t,0,n.matrix).multiply(Ou).invert().decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0)}dispose(){super.dispose(),this.group.removeFromParent()}},lc=new WeakMap,Ab=class extends dn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const s=new Pn(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,pt,i).catch(i)}decodeDracoFile(e,t,i,n,s=Qt,r=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(r)}decodeGeometry(e,t){const i=JSON.stringify(t);if(lc.has(e)){const o=lc.get(e);if(o.key===i)return o.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(o=>(n=o,new Promise((l,c)=>{n._callbacks[s]={resolve:l,reject:c},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),lc.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new ti;e.index&&t.setIndex(new ct(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const{name:n,array:s,itemSize:r,stride:a,vertexColorSpace:o}=e.attributes[i];let l;r===a?l=new ct(s,r):l=new Ih(new Ch(s,a),r,0),n==="color"&&(this._assignVertexColorSpace(l,o),l.normalized=!(s instanceof Float32Array)),t.setAttribute(n,l)}return t}_assignVertexColorSpace(e,t){if(t!==pt)return;const i=new Le;for(let n=0,s=e.count;n<s;n++)i.fromBufferAttribute(e,n),Ve.colorSpaceToWorking(i,pt),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Pn(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=fb.toString(),r=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const r=s.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function fb(){let e,t;onmessage=function(a){const o=a.data;switch(o.type){case"init":e=o.decoderConfig,t=new Promise(function(h){e.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(e)});break;case"decode":const l=o.buffer,c=o.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const A=i(u,d,new Int8Array(l),c),p=A.attributes.map(m=>m.array.buffer);A.index&&p.push(A.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:A},p)}catch(A){console.error(A),self.postMessage({type:"error",id:o.id,error:A.message})}finally{u.destroy(d)}})}};function i(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,A;const p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)d=new a.Mesh,A=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===a.POINT_CLOUD)d=new a.PointCloud,A=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!A.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+A.error_msg());const m={index:null,attributes:[]};for(const g in h){const f=self[u[g]];let _,b;if(c.useUniqueIDs)b=h[g],_=o.GetAttributeByUniqueId(d,b);else{if(b=o.GetAttributeId(d,a[h[g]]),b===-1)continue;_=o.GetAttribute(d,b)}const C=s(a,o,d,g,f,_);g==="color"&&(C.vertexColorSpace=c.vertexColorSpace),m.attributes.push(C)}return p===a.TRIANGULAR_MESH&&(m.index=n(a,o,d)),a.destroy(d),m}function n(a,o,l){const c=l.num_faces()*3,h=c*4,u=a._malloc(h);o.GetTrianglesUInt32Array(l,h,u);const d=new Uint32Array(a.HEAPF32.buffer,u,c).slice();return a._free(u),{array:d,itemSize:1}}function s(a,o,l,c,h,u){const d=l.num_points(),A=u.num_components(),p=r(a,h),m=A*h.BYTES_PER_ELEMENT,g=Math.ceil(m/4)*4,f=g/h.BYTES_PER_ELEMENT,_=d*m,b=d*g,C=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,u,p,_,C);const S=new h(a.HEAPF32.buffer,C,_/h.BYTES_PER_ELEMENT);let M;if(m===g)M=S.slice();else{M=new h(b/h.BYTES_PER_ELEMENT);let T=0;for(let v=0,y=S.length;v<y;v++){for(let N=0;N<A;N++)M[T+N]=S[v*A+N];T+=f}}return a._free(C),{name:c,count:d,itemSize:A,array:M,stride:f}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var pb=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:n,msg:s,transfer:r}=this.queue.shift();this.workersResolve[e]=n,this.workers[e].postMessage(s,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}},gb=0,Vu=2,mb=1,zu=2,_b=0,vb=1,bb=10,Eb=0,Wu=9,qu=15,Xu=16,Ku=22,ju=37,Ju=43,Yu=76,Zu=83,$u=91,eA=97,tA=100,iA=103,nA=109,sA=122,rA=123,aA=131,oA=132,lA=133,cA=134,hA=137,dA=138,uA=139,AA=140,fA=141,pA=142,gA=145,mA=146,_A=148,vA=152,bA=153,EA=154,CA=155,IA=156,yA=157,SA=158,xA=165,MA=166,TA=1000054e3,wA=1000054001,BA=1000054004,RA=1000054005,cc=1000066e3,DA=1000066004,Er=class{constructor(e,t,i,n){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=n,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let n=0;for(;this._dataView.getUint8(this._offset)!==t&&n<e;)n++,this._offset++;return n<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,n)}},zt=[171,75,84,88,32,50,48,187,13,10,26,10];function LA(e){return new TextDecoder().decode(e)}function Cb(e){const t=new Uint8Array(e.buffer,e.byteOffset,zt.length);if(t[0]!==zt[0]||t[1]!==zt[1]||t[2]!==zt[2]||t[3]!==zt[3]||t[4]!==zt[4]||t[5]!==zt[5]||t[6]!==zt[6]||t[7]!==zt[7]||t[8]!==zt[8]||t[9]!==zt[9]||t[10]!==zt[10]||t[11]!==zt[11])throw new Error("Missing KTX 2.0 identifier.");const i={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},n=17*Uint32Array.BYTES_PER_ELEMENT,s=new Er(e,zt.length,n,!0);i.vkFormat=s._nextUint32(),i.typeSize=s._nextUint32(),i.pixelWidth=s._nextUint32(),i.pixelHeight=s._nextUint32(),i.pixelDepth=s._nextUint32(),i.layerCount=s._nextUint32(),i.faceCount=s._nextUint32(),i.levelCount=s._nextUint32(),i.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),a=s._nextUint32(),o=s._nextUint32(),l=s._nextUint32(),c=s._nextUint64(),h=s._nextUint64(),u=3*Math.max(i.levelCount,1)*8,d=new Er(e,zt.length+n,u,!0);for(let U=0,j=Math.max(i.levelCount,1);U<j;U++)i.levels.push({levelData:new Uint8Array(e.buffer,e.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const A=new Er(e,r,a,!0);A._skip(4);const p=A._nextUint16(),m=A._nextUint16(),g=A._nextUint16(),f=A._nextUint16(),_={vendorId:p,descriptorType:m,versionNumber:g,colorModel:A._nextUint8(),colorPrimaries:A._nextUint8(),transferFunction:A._nextUint8(),flags:A._nextUint8(),texelBlockDimension:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],bytesPlane:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],samples:[]},b=(f/4-6)/4;for(let U=0;U<b;U++){const j={bitOffset:A._nextUint16(),bitLength:A._nextUint8(),channelType:A._nextUint8(),samplePosition:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&j.channelType?(j.sampleLower=A._nextInt32(),j.sampleUpper=A._nextInt32()):(j.sampleLower=A._nextUint32(),j.sampleUpper=A._nextUint32()),_.samples[U]=j}i.dataFormatDescriptor.length=0,i.dataFormatDescriptor.push(_);const C=new Er(e,o,l,!0);for(;C._offset<l;){const U=C._nextUint32(),j=C._scan(U),$=LA(j);if(i.keyValue[$]=C._nextUint8Array(U-j.byteLength-1),$.match(/^ktx/i)){const ie=LA(i.keyValue[$]);i.keyValue[$]=ie.substring(0,ie.lastIndexOf("\0"))}C._skip(U%4?4-U%4:0)}if(h<=0)return i;const S=new Er(e,c,h,!0),M=S._nextUint16(),T=S._nextUint16(),v=S._nextUint32(),y=S._nextUint32(),N=S._nextUint32(),w=S._nextUint32(),z=[];for(let U=0,j=Math.max(i.levelCount,1);U<j;U++)z.push({imageFlags:S._nextUint32(),rgbSliceByteOffset:S._nextUint32(),rgbSliceByteLength:S._nextUint32(),alphaSliceByteOffset:S._nextUint32(),alphaSliceByteLength:S._nextUint32()});const F=c+S._offset,Q=F+v,V=Q+y,G=V+N;return i.globalData={endpointCount:M,selectorCount:T,imageDescs:z,endpointsData:new Uint8Array(e.buffer,e.byteOffset+F,v),selectorsData:new Uint8Array(e.buffer,e.byteOffset+Q,y),tablesData:new Uint8Array(e.buffer,e.byteOffset+V,N),extendedData:new Uint8Array(e.buffer,e.byteOffset+G,w)},i}var hc,$i,dc,uc={env:{emscripten_notify_memory_growth:function(e){dc=new Uint8Array($i.exports.memory.buffer)}}},Ib=class{init(){return hc||(hc=typeof fetch<"u"?fetch("data:application/wasm;base64,"+PA).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,uc)).then(this._init):WebAssembly.instantiate(Buffer.from(PA,"base64"),uc).then(this._init),hc)}_init(e){$i=e.instance,uc.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!$i)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,n=$i.exports.malloc(i);dc.set(e,n),t=t||Number($i.exports.ZSTD_findDecompressedSize(n,i));const s=$i.exports.malloc(t),r=$i.exports.ZSTD_decompress(s,t,n,i),a=dc.slice(s,s+r);return $i.exports.free(n),$i.exports.free(s),a}},PA="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",yb="display-p3",Sb="display-p3-linear";({...Ve.spaces[pt]});var Ac=new WeakMap,fc=0,pc,Ds=class Us extends dn{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new pb,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await t.init(),this.detectSupport(t)}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-s3tc"),bptcSupported:t.hasFeature("texture-compression-bc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Firefox")>=0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const t=new Pn(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const i=t.loadAsync("basis_transcoder.js"),n=new Pn(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const s=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([i,s]).then(([r,a])=>{const o=Us.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(Us.EngineFormat),"let _EngineType = "+JSON.stringify(Us.EngineType),"let _TranscoderFormat = "+JSON.stringify(Us.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Us.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),fc>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),fc++}return this.transcoderPending}load(t,i,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new Pn(this.manager);r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(t,a=>{this.parse(a,i,s)},n,s)}parse(t,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Ac.has(t))return Ac.get(t).promise.then(i).catch(n);this._createTexture(t).then(s=>i?i(s):null).catch(n)}_createTextureFrom(t,i){const{type:n,error:s,data:{faces:r,width:a,height:o,format:l,type:c,dfdFlags:h}}=t;if(n==="error")return Promise.reject(s);let u;if(i.faceCount===6)u=new Op(r,l,c);else{const d=r[0].mipmaps;u=i.layerCount>1?new Qp(d,a,o,i.layerCount,l,c):new ga(d,a,o,l,c)}return u.minFilter=r[0].mipmaps.length===1?dt:oi,u.magFilter=dt,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=FA(i),u.premultiplyAlpha=!!(h&mb),u}async _createTexture(t,i={}){const n=Cb(new Uint8Array(t)),s=n.vkFormat===cc&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===Eb||s&&!this.workerConfig.astcHDRSupported))return Mb(n);const r=i,a=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:r},[t])).then(o=>this._createTextureFrom(o.data,n));return Ac.set(t,{promise:a}),a}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),fc--}};Ds.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2},Ds.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25},Ds.EngineFormat={RGBAFormat:St,RGBA_ASTC_4x4_Format:Mn,RGB_BPTC_UNSIGNED_Format:Ur,RGBA_BPTC_Format:Yn,RGBA_ETC2_EAC_Format:zs,RGBA_PVRTC_4BPPV1_Format:jn,RGBA_S3TC_DXT5_Format:xn,RGB_ETC1_Format:Dr,RGB_ETC2_Format:Vs,RGB_PVRTC_4BPPV1_Format:Rr,RGBA_S3TC_DXT1_Format:Sn},Ds.EngineType={UnsignedByteType:Ue,HalfFloatType:Dt,FloatType:wt},Ds.BasisWorker=function(){let e,t,i;const n=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(p){const m=p.data;switch(m.type){case"init":e=m.config,o(m.transcoderBinary);break;case"transcode":t.then(()=>{try{const{faces:g,buffers:f,width:_,height:b,hasAlpha:C,format:S,type:M,dfdFlags:T}=l(m.buffer);self.postMessage({type:"transcode",id:m.id,data:{faces:g,width:_,height:b,hasAlpha:C,format:S,type:M,dfdFlags:T}},f)}catch(g){console.error(g),self.postMessage({type:"error",id:m.id,error:g.message})}})}});function o(p){t=new Promise(m=>{i={wasmBinary:p,onRuntimeInitialized:m},BASIS(i)}).then(()=>{i.initializeBasis(),i.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function l(p){const m=new i.KTX2File(new Uint8Array(p));function g(){m.close(),m.delete()}if(!m.isValid())throw g(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let f;if(m.isUASTC())f=a.UASTC;else if(m.isETC1S())f=a.ETC1S;else if(m.isHDR())f=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const _=m.getWidth(),b=m.getHeight(),C=m.getLayers()||1,S=m.getLevels(),M=m.getFaces(),T=m.getHasAlpha(),v=m.getDFDFlags(),{transcoderFormat:y,engineFormat:N,engineType:w}=u(f,_,b,T);if(!_||!b||!S)throw g(),new Error("THREE.KTX2Loader:	Invalid texture");if(!m.startTranscoding())throw g(),new Error("THREE.KTX2Loader: .startTranscoding failed");const z=[],F=[];for(let Q=0;Q<M;Q++){const V=[];for(let G=0;G<S;G++){const U=[];let j,$;for(let fe=0;fe<C;fe++){const be=m.getImageLevelInfo(G,fe,Q);Q===0&&G===0&&fe===0&&(be.origWidth%4!==0||be.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),S>1?(j=be.origWidth,$=be.origHeight):(j=be.width,$=be.height);let qe=new Uint8Array(m.getImageTranscodedSizeInBytes(G,fe,0,y));const ze=m.transcodeImage(qe,G,fe,Q,y,0,-1,-1);if(w===s.HalfFloatType&&(qe=new Uint16Array(qe.buffer,qe.byteOffset,qe.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!ze)throw g(),new Error("THREE.KTX2Loader: .transcodeImage failed.");U.push(qe)}const ie=A(U);V.push({data:ie,width:j,height:$}),F.push(ie.buffer)}z.push({mipmaps:V,width:_,height:b,format:N,type:w})}return g(),{faces:z,buffers:F,width:_,height:b,hasAlpha:T,dfdFlags:v,format:N,type:w}}const c=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[a.ETC1S]:c.filter(p=>p.basisFormat.includes(a.ETC1S)).sort((p,m)=>p.priorityETC1S-m.priorityETC1S),[a.UASTC]:c.filter(p=>p.basisFormat.includes(a.UASTC)).sort((p,m)=>p.priorityUASTC-m.priorityUASTC),[a.UASTC_HDR]:c.filter(p=>p.basisFormat.includes(a.UASTC_HDR)).sort((p,m)=>p.priorityHDR-m.priorityHDR)};function u(p,m,g,f){const _=h[p];for(let b=0;b<_.length;b++){const C=_[b];if(!(C.if&&!e[C.if])&&C.basisFormat.includes(p)&&!(f&&C.transcoderFormat.length<2)&&!(C.needsPowerOfTwo&&!(d(m)&&d(g))))return{transcoderFormat:C.transcoderFormat[f?1:0],engineFormat:C.engineFormat[f?1:0],engineType:C.engineType[0]}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(p){return p<=2?!0:(p&p-1)===0&&p!==0}function A(p){if(p.length===1)return p[0];let m=0;for(let _=0;_<p.length;_++){const b=p[_];m+=b.byteLength}const g=new Uint8Array(m);let f=0;for(let _=0;_<p.length;_++){const b=p[_];g.set(b,f),f+=b.byteLength}return g}};var xb=new Set([St,Gs,$t,sn]),gc={[nA]:St,[iA]:$t,[tA]:sn,[eA]:St,[Zu]:$t,[Yu]:sn,[$u]:St,[Ju]:St,[ju]:St,[Ku]:$t,[Xu]:$t,[qu]:sn,[Wu]:sn,[rA]:Gs,[sA]:Gs,[vA]:zs,[_A]:Vs,[bA]:Lr,[EA]:Pr,[CA]:Ws,[IA]:Fr,[cc]:Mn,[SA]:Mn,[yA]:Mn,[DA]:Jn,[MA]:Jn,[xA]:Jn,[cA]:Sn,[lA]:Sn,[oA]:Kn,[aA]:Kn,[dA]:xn,[hA]:xn,[AA]:Qr,[uA]:Nr,[pA]:Or,[fA]:qs,[mA]:Yn,[gA]:Yn,[RA]:jn,[wA]:jn,[BA]:Hs,[TA]:Hs},kn={[nA]:wt,[iA]:wt,[tA]:wt,[eA]:Dt,[Zu]:Dt,[Yu]:Dt,[$u]:In,[Ju]:Ue,[ju]:Ue,[Ku]:Ue,[Xu]:Ue,[qu]:Ue,[Wu]:Ue,[rA]:Tr,[sA]:wr,[vA]:Ue,[_A]:Ue,[bA]:Ue,[EA]:Ue,[CA]:Ue,[IA]:Ue,[cc]:Dt,[SA]:Ue,[yA]:Ue,[DA]:Dt,[MA]:Ue,[xA]:Ue,[cA]:Ue,[lA]:Ue,[oA]:Ue,[aA]:Ue,[dA]:Ue,[hA]:Ue,[AA]:Ue,[uA]:Ue,[pA]:Ue,[fA]:Ue,[mA]:Ue,[gA]:Ue,[RA]:Ue,[wA]:Ue,[BA]:Ue,[TA]:Ue};async function Mb(e){const{vkFormat:t}=e;if(gc[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+t);kn[t]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+t);let i;e.supercompressionScheme===Vu&&(pc||(pc=new Promise(async a=>{const o=new Ib;await o.init(),a(o)})),i=await pc);const n=[];for(let a=0;a<e.levels.length;a++){const o=Math.max(1,e.pixelWidth>>a),l=Math.max(1,e.pixelHeight>>a),c=e.pixelDepth?Math.max(1,e.pixelDepth>>a):0,h=e.levels[a];let u;if(e.supercompressionScheme===gb)u=h.levelData;else if(e.supercompressionScheme===Vu)u=i.decode(h.levelData,h.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let d;kn[t]===wt?d=new Float32Array(u.buffer,u.byteOffset,u.byteLength/Float32Array.BYTES_PER_ELEMENT):kn[t]===Dt||kn[t]===In?d=new Uint16Array(u.buffer,u.byteOffset,u.byteLength/Uint16Array.BYTES_PER_ELEMENT):kn[t]===Tr||kn[t]===wr?d=new Uint32Array(u.buffer,u.byteOffset,u.byteLength/Uint32Array.BYTES_PER_ELEMENT):d=u,n.push({data:d,width:o,height:l,depth:c})}const s=e.levelCount===0||n.length>1;let r;if(xb.has(gc[t]))r=e.pixelDepth===0?new aa(n[0].data,e.pixelWidth,e.pixelHeight):new oh(n[0].data,e.pixelWidth,e.pixelHeight,e.pixelDepth),r.minFilter=s?Ao:_t,r.magFilter=_t,r.generateMipmaps=e.levelCount===0;else{if(e.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");r=new ga(n,e.pixelWidth,e.pixelHeight),r.minFilter=s?oi:dt,r.magFilter=dt}return r.mipmaps=n,r.type=kn[t],r.format=gc[t],r.colorSpace=FA(e),r.needsUpdate=!0,Promise.resolve(r)}function FA(e){const t=e.dataFormatDescriptor[0];return t.colorPrimaries===vb?t.transferFunction===zu?pt:Qt:t.colorPrimaries===bb?t.transferFunction===zu?yb:Sb:(t.colorPrimaries===_b||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),xi)}var Tb=(function(){var e="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",i=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(i)?o(t):o(e),r,a=WebAssembly.instantiate(s,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var _=new Uint8Array(f.length),b=0;b<f.length;++b){var C=f.charCodeAt(b);_[b]=C>96?C-97:C>64?C-39:C+4}for(var S=0,b=0;b<f.length;++b)_[S++]=_[b]<60?n[_[b]]:(_[b]-60)*64+_[++b];return _.buffer.slice(0,S)}function l(f,_,b,C,S,M,T){var v=f.exports.sbrk,y=C+3&-4,N=v(y*S),w=v(M.length),z=new Uint8Array(f.exports.memory.buffer);z.set(M,w);var F=_(N,C,S,w,M.length);if(F==0&&T&&T(N,y,S),b.set(z.subarray(N,N+C*S)),v(N-v(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function A(f){var _={object:new Worker(f),pending:0,requests:{}};return _.object.onmessage=function(b){var C=b.data;_.pending-=C.count,_.requests[C.id][C.action](C.value),delete _.requests[C.id]},_}function p(f){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),b=new Blob([_],{type:"text/javascript"}),C=URL.createObjectURL(b),S=u.length;S<f;++S)u[S]=A(C);for(var S=f;S<u.length;++S)u[S].object.postMessage({});u.length=f,URL.revokeObjectURL(C)}function m(f,_,b,C,S){for(var M=u[0],T=1;T<u.length;++T)u[T].pending<M.pending&&(M=u[T]);return new Promise(function(v,y){var N=new Uint8Array(b),w=++d;M.pending+=f,M.requests[w]={resolve:v,reject:y},M.object.postMessage({id:w,count:f,size:_,source:N,mode:C,filter:S},[N.buffer])})}function g(f){var _=f.data;self.ready.then(function(b){if(!_.id)return self.close();try{var C=new Uint8Array(_.count*_.size);l(b,b.exports[_.mode],C,_.count,_.size,_.source,b.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:C},[C.buffer])}catch(S){self.postMessage({id:_.id,count:_.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(f){p(f)},decodeVertexBuffer:function(f,_,b,C,S){l(r,r.exports.meshopt_decodeVertexBuffer,f,_,b,C,r.exports[c[S]])},decodeIndexBuffer:function(f,_,b,C){l(r,r.exports.meshopt_decodeIndexBuffer,f,_,b,C)},decodeIndexSequence:function(f,_,b,C){l(r,r.exports.meshopt_decodeIndexSequence,f,_,b,C)},decodeGltfBuffer:function(f,_,b,C,S,M){l(r,r.exports[h[S]],f,_,b,C,r.exports[c[M]])},decodeGltfBufferAsync:function(f,_,b,C,S){return u.length>0?m(f,_,b,h[C],c[S]):a.then(function(){var M=new Uint8Array(f*_);return l(r,r.exports[h[C]],M,f,_,b,r.exports[c[S]]),M})}}})(),wb=class extends _h{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ma;e.deleteAttribute("uv");const t=new lr({side:Nt}),i=new lr,n=new rd(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);const s=new It(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new Al(e,i,6),a=new Et;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),r.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),r.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),r.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),r.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),r.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),r.setMatrixAt(5,a.matrix),this.add(r);const o=new It(e,Ls(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);const l=new It(e,Ls(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const c=new It(e,Ls(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);const h=new It(e,Ls(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const u=new It(e,Ls(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new It(e,Ls(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}};function Ls(e){return new qp({color:0,emissive:16777215,emissiveIntensity:e})}var Gn=[new B,new B,new B],bn=new B,UA=new B,NA=new B,Bb=[[2,0,1],[1,2,0],[0,1,2]];function Rb(e){const t=e.transform.elements;Gn[0].set(t[0],t[1],t[2]),Gn[1].set(t[4],t[5],t[6]),Gn[2].set(t[8],t[9],t[10]),UA.copy(e.box.min).applyMatrix4(e.transform),NA.copy(e.box.max).applyMatrix4(e.transform),Bb.forEach(([i,n,s],r)=>{bn.crossVectors(Gn[n],Gn[s]),bn.lengthSq()===0&&bn.copy(Gn[i]),bn.normalize(),bn.dot(Gn[i])<0&&bn.negate(),e.planes[2*r].setFromNormalAndCoplanarPoint(bn,UA),e.planes[2*r+1].setFromNormalAndCoplanarPoint(bn,NA).negate()})}var QA=!1;function Db(){QA||(QA=!0,ec.prototype.updatePlanes=function(){Rb(this)})}Db();var Lb=120;function Pb(e){e.register(t=>{const i=t.textureLoader,n=i instanceof Cl?new Cl(i.manager):new $h(i.manager);n.setRequestHeader(i.requestHeader),n.crossOrigin=void 0;const s=i,r=s.load.bind(i),a=n.load.bind(n);return s.load=(o,l,c,h)=>(o.startsWith("blob:")||o.startsWith("data:")?a:r)(o,l,c,h),{name:"GEOLIBRE_blob_texture_crossorigin"}})}function Fb(e){return typeof globalThis.requestAnimationFrame=="function"?globalThis.requestAnimationFrame(e):globalThis.setTimeout(()=>e(Date.now()),16)}function OA(e){if(typeof globalThis.cancelAnimationFrame=="function"){globalThis.cancelAnimationFrame(e);return}globalThis.clearTimeout(e)}function kA(e,t,i){const s=.00669437999014,r=6378137*Math.sqrt(.99330562000986),a=(6378137*6378137-r*r)/(r*r),o=Math.sqrt(e*e+t*t),l=Math.atan2(6378137*i,r*o),c=Math.atan2(t,e),h=Math.atan2(i+a*r*Math.sin(l)**3,o-s*6378137*Math.cos(l)**3),u=6378137/Math.sqrt(1-s*Math.sin(h)*Math.sin(h)),d=o/Math.cos(h)-u;return{lng:c*180/Math.PI,lat:h*180/Math.PI,alt:d}}function GA(e,t,i){const s=.00669437999014,r=e*Math.PI/180,a=t*Math.PI/180,o=Math.sin(a),l=Math.cos(a),c=6378137/Math.sqrt(1-s*o*o);return new B((c+i)*l*Math.cos(r),(c+i)*l*Math.sin(r),(c*.99330562000986+i)*o)}var HA=class{constructor(e){ye(this,"id"),ye(this,"type","custom"),ye(this,"renderingMode","3d"),ye(this,"_options"),ye(this,"_map"),ye(this,"_scene"),ye(this,"_camera"),ye(this,"_tilesCamera"),ye(this,"_renderer"),ye(this,"_pmrem"),ye(this,"_environment"),ye(this,"_tiles"),ye(this,"_localTransform"),ye(this,"_metadata"),ye(this,"_anchor"),ye(this,"_bounds"),ye(this,"_frameAnchor"),ye(this,"_opacity"),ye(this,"_opacityDirty",!0),ye(this,"_visible"),ye(this,"_loadTilesetHandler"),ye(this,"_loadErrorHandler"),ye(this,"_loadModelHandler"),ye(this,"_metadataRetryFrame",null),ye(this,"_metadataRetryCount",0),this.id=e.id,this._options=e,this._opacity=e.opacity,this._visible=e.visible}onAdd(e,t){var i;this._map=e,this._camera=new Ft,this._tilesCamera=new Ft,this._scene=new _h,this._scene.add(new dg(16777215,3)),this._renderer=new W_({canvas:e.getCanvas(),context:t,antialias:!0,alpha:!0}),this._renderer.autoClear=!1;try{this._pmrem=new wl(this._renderer),this._environment=this._pmrem.fromScene(new wb,.04),this._scene.environment=this._environment.texture}catch{(i=this._pmrem)==null||i.dispose(),this._pmrem=void 0,this._environment=void 0}this._initTiles()}render(e,t){var i;if(!this._visible||!this._map||!this._camera||!this._tilesCamera||!this._renderer||!this._scene||!this._tiles||!this._localTransform||!((i=t?.defaultProjectionData)!=null&&i.mainMatrix)||!t.projectionMatrix)return;this._syncFrameToView(),this._camera.projectionMatrix.fromArray(t.defaultProjectionData.mainMatrix),this._camera.projectionMatrix.multiply(this._localTransform);const n=new pe().fromArray(t.projectionMatrix),s=n.clone().invert(),r=new pe().multiplyMatrices(s,this._camera.projectionMatrix);this._tilesCamera.projectionMatrix.copy(n),this._tilesCamera.matrixWorldInverse.copy(r),this._tilesCamera.matrixWorld.copy(r).invert(),this._renderer.resetState(),this._applyOpacity(),this._renderer.render(this._scene,this._camera),this._tiles.update(),this._map.triggerRepaint()}onRemove(){var e,t,i,n,s;this._metadataRetryFrame!==null&&OA(this._metadataRetryFrame),this._tiles&&this._loadTilesetHandler&&this._tiles.removeEventListener("load-tileset",this._loadTilesetHandler),this._tiles&&this._loadErrorHandler&&this._tiles.removeEventListener("load-error",this._loadErrorHandler),this._tiles&&this._loadModelHandler&&this._tiles.removeEventListener("load-model",this._loadModelHandler),(e=this._tiles)==null||e.dispose(),(t=this._scene)==null||t.clear(),(i=this._environment)==null||i.dispose(),(n=this._pmrem)==null||n.dispose(),(s=this._renderer)==null||s.dispose(),this._map=void 0,this._scene=void 0,this._camera=void 0,this._tilesCamera=void 0,this._renderer=void 0,this._pmrem=void 0,this._environment=void 0,this._tiles=void 0,this._localTransform=void 0,this._anchor=void 0,this._bounds=void 0,this._frameAnchor=void 0,this._loadTilesetHandler=void 0,this._loadErrorHandler=void 0,this._loadModelHandler=void 0,this._metadataRetryFrame=null,this._metadataRetryCount=0}setVisible(e){var t;this._visible=e,this._tiles&&(this._getTilesGroup().visible=e),(t=this._map)==null||t.triggerRepaint()}setOpacity(e){var t;this._opacity=Math.min(1,Math.max(0,e)),this._opacityDirty=!0,this._applyOpacity(),(t=this._map)==null||t.triggerRepaint()}setAltitudeOffset(e){var t;if(this._options.altitudeOffset=e,!this._anchor)return;const i=this._anchor.alt+e,n=this._frameAnchor??this._anchor;this._applyFrame(n.lng,n.lat),this._metadata&&(this._metadata={...this._metadata,altitude:i}),(t=this._map)==null||t.triggerRepaint()}getMetadata(){return this._metadata}flyToTileset(){!this._map||!this._metadata||this._map.flyTo({center:this._metadata.center,zoom:18,pitch:60})}_initTiles(){var e;if(!this._scene||!this._tilesCamera||!this._renderer)return;const t=new Na,i=new Ab;i.setDecoderPath(this._options.dracoDecoderPath),t.setDRACOLoader(i);const n=new Ds;n.setTranscoderPath(this._options.ktx2TranscoderPath),n.detectSupport(this._renderer),t.setKTX2Loader(n),t.setMeshoptDecoder(Tb),Pb(t),this._tiles=new ub(this._options.tilesetUrl);const s=this._options.requestHeaders;s&&Object.keys(s).length>0&&(this._tiles.fetchOptions={...this._tiles.fetchOptions,headers:{...(e=this._tiles.fetchOptions)==null?void 0:e.headers,...s}});const r=this._getTilesGroup();r.name=this.id,r.visible=this._visible,this._scene.add(r),this._tiles.setCamera(this._tilesCamera),this._tiles.setResolutionFromRenderer(this._tilesCamera,this._renderer),this._tiles.manager.addHandler(/\.(gltf|glb)$/g,t),this._loadTilesetHandler=()=>this._handleTilesetLoaded(),this._loadErrorHandler=a=>{var o,l;return(l=(o=this._options).onError)==null?void 0:l.call(o,a.error)},this._loadModelHandler=a=>this._applyEnvironment(a.scene),this._tiles.addEventListener("load-tileset",this._loadTilesetHandler),this._tiles.addEventListener("load-error",this._loadErrorHandler),this._tiles.addEventListener("load-model",this._loadModelHandler),this._updateLocalTransform([0,0,0]),this._applyOpacity()}_applyEnvironment(e){var t;(t=this._scene)!=null&&t.environment&&e.traverse(i=>{const n=i;if(!n.isMesh)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)r.isMeshStandardMaterial&&(r.needsUpdate=!0)})}_handleTilesetLoaded(){var e,t;if(!this._tiles||this._metadata)return;const i=new Jt;if(!this._tiles.getBoundingSphere(i)){this._retryTilesetMetadata();return}this._metadataRetryFrame!==null&&(OA(this._metadataRetryFrame),this._metadataRetryFrame=null),this._metadataRetryCount=0,this._loadTilesetHandler&&this._tiles.removeEventListener("load-tileset",this._loadTilesetHandler);const n=i.center.clone(),{lng:s,lat:r,alt:a}=kA(n.x,n.y,n.z);this._anchor={lng:s,lat:r,alt:a},this._bounds=i.clone();const o=a+this._options.altitudeOffset;this._applyFrame(s,r),this._metadata={center:[s,r],altitude:o,radius:i.radius},(t=(e=this._options).onLoad)==null||t.call(e,this._metadata)}_syncFrameToView(){var e;if(!this._map||!this._anchor||!this._bounds)return;const t=this._map.getCenter(),i=GA(t.lng,t.lat,this._anchor.alt).sub(this._bounds.center),n=i.length();n>this._bounds.radius&&i.multiplyScalar(this._bounds.radius/n);const s=i.add(this._bounds.center),{lng:r,lat:a}=kA(s.x,s.y,s.z);((e=this._frameAnchor)==null?void 0:e.lng)===r&&this._frameAnchor.lat===a||this._applyFrame(r,a)}_applyFrame(e,t){if(!this._tiles||!this._anchor)return;const i=this._anchor.alt,n=GA(e,t,i),s=e*Math.PI/180,r=t*Math.PI/180,a=Math.sin(s),o=Math.cos(s),l=Math.sin(r),c=Math.cos(r),h=new Qe().set(-a,o,0,c*o,c*a,l,l*o,l*a,-c),u=new pe().setFromMatrix3(h),d=new pe().makeTranslation(-n.x,-n.y,-n.z),A=new pe().multiplyMatrices(u,d),p=this._getTilesGroup();p.matrix.copy(A),p.matrixAutoUpdate=!1,p.updateMatrixWorld(!0),this._updateLocalTransform([e,t,i+this._options.altitudeOffset]),this._frameAnchor={lng:e,lat:t}}_retryTilesetMetadata(){var e,t;if(this._metadataRetryFrame===null){if(this._metadataRetryCount>=Lb){(t=(e=this._options).onError)==null||t.call(e,new Error("Unable to read 3D Tiles bounds."));return}this._metadataRetryCount+=1,this._metadataRetryFrame=Fb(()=>{this._metadataRetryFrame=null,this._handleTilesetLoaded()})}}_updateLocalTransform(e,t=[Math.PI/2,0,0]){const i=of.fromLngLat([e[0],e[1]],e[2]),n=new pe().makeRotationAxis(new B(1,0,0),t[0]),s=new pe().makeRotationAxis(new B(0,1,0),t[1]),r=new pe().makeRotationAxis(new B(0,0,1),t[2]),a=i.meterInMercatorCoordinateUnits();this._localTransform=new pe().makeTranslation(i.x,i.y,i.z).scale(new B(a,-a,a)).multiply(n).multiply(s).multiply(r)}_applyOpacity(){!this._scene||!this._opacityDirty&&this._opacity>=1||(this._scene.traverse(e=>{const t=e.material,i=Array.isArray(t)?t:t?[t]:[];for(const n of i)n.opacity=this._opacity,n.transparent=this._opacity<1,n.needsUpdate=!0}),this._opacityDirty=this._opacity<1)}_getTilesGroup(){return this._tiles.group}};function Ub(e){const t={};for(const i of e.split(`
`)){const n=i.indexOf(":");if(n===-1)continue;const s=i.slice(0,n).trim();s&&(t[s]=i.slice(n+1).trim())}return t}function mc(e){return e?Object.entries(e).map(([t,i])=>`${t}: ${i}`).join(`
`):""}var VA="0.184.0",zA="https://pelican-public.s3.amazonaws.com/3dtiles/agi-hq/tileset.json",Nb=`https://unpkg.com/three@${VA}/examples/jsm/libs/draco/`,Qb=`https://unpkg.com/three@${VA}/examples/jsm/libs/basis/`,Ob=260,kb=180,_c=12,Gb={collapsed:!0,position:"top-right",title:"3D Tiles",panelWidth:360,className:"",collapseOnClickOutside:!0,layerId:"maplibre-gl-3d-tiles",sampleData:[],sampleDataLabel:"Load sample data...",tilesetUrl:zA,layerName:"3D Tiles",beforeId:void 0,altitudeOffset:-300,flyToOnLoad:!0,opacity:1,visible:!0,dracoDecoderPath:Nb,ktx2TranscoderPath:Qb},Hb=class{constructor(e){ye(this,"_map"),ye(this,"_mapContainer"),ye(this,"_container"),ye(this,"_panel"),ye(this,"_content"),ye(this,"_layerNameInput"),ye(this,"_urlInput"),ye(this,"_headersInput"),ye(this,"_beforeIdInput"),ye(this,"_altitudeInput"),ye(this,"_flyToCheckbox"),ye(this,"_visibleCheckbox"),ye(this,"_statusElement"),ye(this,"_tilesetList"),ye(this,"_loadButton"),ye(this,"_removeAllButton"),ye(this,"_options"),ye(this,"_state"),ye(this,"_layers",new globalThis.Map),ye(this,"_eventHandlers",new globalThis.Map),ye(this,"_resizeHandler",null),ye(this,"_mapResizeHandler",null),ye(this,"_clickOutsideHandler",null),ye(this,"_tilesetCounter",0),ye(this,"_userWidth",null),ye(this,"_userHeight",null),ye(this,"_resizeDragCleanup",null),this._options={...Gb,...e},this._state={collapsed:this._options.collapsed,panelWidth:this._options.panelWidth,tilesetUrl:this._options.tilesetUrl,layerName:this._options.layerName,beforeId:this._options.beforeId,altitudeOffset:this._options.altitudeOffset,flyToOnLoad:this._options.flyToOnLoad,opacity:this._options.opacity,visible:this._options.visible,requestHeaders:this._options.requestHeaders,status:"idle",tilesets:[]}}onAdd(e){return this._map=e,this._mapContainer=e.getContainer(),this._container=this._createContainer(),this._panel=this._createPanel(),this._mapContainer.appendChild(this._panel),this._setupEventListeners(),this._state.collapsed||(this._panel.classList.add("expanded"),requestAnimationFrame(()=>this._updatePanelPosition())),this._container}onRemove(){var e,t,i,n,s;this.removeTileset(void 0,!1),this._resizeHandler&&(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null),this._mapResizeHandler&&this._map&&(this._map.off("resize",this._mapResizeHandler),this._mapResizeHandler=null),this._clickOutsideHandler&&(document.removeEventListener("click",this._clickOutsideHandler),this._clickOutsideHandler=null),(e=this._resizeDragCleanup)==null||e.call(this),(i=(t=this._panel)==null?void 0:t.parentNode)==null||i.removeChild(this._panel),(s=(n=this._container)==null?void 0:n.parentNode)==null||s.removeChild(this._container),this._map=void 0,this._mapContainer=void 0,this._container=void 0,this._panel=void 0,this._content=void 0,this._eventHandlers.clear()}getState(){return{...this._state,tilesets:this._state.tilesets.map(e=>({...e}))}}setState(e){this._state={...this._state,...e,tilesets:e.tilesets?e.tilesets.map(t=>({...t})):this._state.tilesets},this._syncFormFromState(),this._updateStatus(),this._renderTilesetList(),this._emit("statechange")}async loadTileset(e=(i=>(i=this._urlInput)==null?void 0:i.value.trim())()||this._state.tilesetUrl,t){var i,n;if(!this._map)return;if(!e){this._setError(new Error("Tileset URL is required."));return}const s=t?.altitudeOffset??this._getAltitudeOffset(),r=t?.flyToOnLoad??!!((i=this._flyToCheckbox)!=null&&i.checked),a=t?.opacity??this._state.opacity,o=t?.visible??!!((n=this._visibleCheckbox)!=null&&n.checked),l=t?.layerName??this._getLayerName(),c=t?.beforeId??this._getBeforeId(),h=t?.requestHeaders??this._getRequestHeaders(),u=this._createTilesetId(),d=this._createLayerId(u),A={id:u,layerId:d,layerName:l,beforeId:c,tilesetUrl:e,altitudeOffset:s,opacity:a,visible:o,requestHeaders:h,status:"loading"};this._state={...this._state,tilesetUrl:e,layerName:l,beforeId:c,altitudeOffset:s,flyToOnLoad:r,opacity:a,visible:o,requestHeaders:h,status:"loading",error:void 0,center:void 0,altitude:void 0,activeTilesetId:u,tilesets:[...this._state.tilesets,A]},this._syncFormFromState(),this._updateStatus(),this._renderTilesetList(),this._emit("loadstart"),this._emit("statechange");const p=new HA({id:d,tilesetUrl:e,altitudeOffset:s,opacity:a,visible:o,requestHeaders:h,dracoDecoderPath:this._options.dracoDecoderPath,ktx2TranscoderPath:this._options.ktx2TranscoderPath,onLoad:m=>this._handleTilesetLoaded(u,m),onError:m=>this._setError(m,u)});if(this._layers.set(u,p),await this._waitForStyle(),!(!this._map||!this._layers.has(u)))return this._map.addLayer(p,c),u}removeTileset(e,t=!0){const i=e?[e]:[...new Set([...this._layers.keys(),...this._state.tilesets.map(a=>a.id)])];i.forEach(a=>{var o;const l=this._getTileset(a);l&&((o=this._map)!=null&&o.getLayer(l.layerId))&&this._map.removeLayer(l.layerId),this._layers.delete(a)});const n=new Set(i),s=this._state.tilesets.filter(a=>!n.has(a.id)),r=this._getActiveTileset(s);this._state={...this._state,status:r?.status??"idle",error:r?.error,center:r?.center,altitude:r?.altitude,visible:r?.visible??this._state.visible,tilesetUrl:r?.tilesetUrl??this._state.tilesetUrl,layerName:r?.layerName??this._state.layerName,beforeId:r?.beforeId,altitudeOffset:r?.altitudeOffset??this._state.altitudeOffset,opacity:r?.opacity??this._state.opacity,requestHeaders:r?.requestHeaders,activeTilesetId:r?.id,tilesets:s},this._syncFormFromState(),this._updateStatus(),this._renderTilesetList(),t&&(this._emit("remove"),this._emit("statechange"))}setVisible(e,t=this._state.activeTilesetId){var i;t&&((i=this._layers.get(t))==null||i.setVisible(e),this._state={...this._state,visible:e,tilesets:this._state.tilesets.map(n=>n.id===t?{...n,visible:e}:n)},this._syncFormFromState(),this._renderTilesetList(),this._emit("visibilitychange"),this._emit("statechange"))}setOpacity(e,t=this._state.activeTilesetId,i=!0){var n;if(!t)return;const s=Math.min(1,Math.max(0,e));(n=this._layers.get(t))==null||n.setOpacity(s),this._state={...this._state,opacity:s,tilesets:this._state.tilesets.map(r=>r.id===t?{...r,opacity:s}:r)},i&&this._renderTilesetList(),this._emit("opacitychange"),this._emit("statechange")}setAltitudeOffset(e,t=this._state.activeTilesetId,i=!0){var n;!t||!Number.isFinite(e)||((n=this._layers.get(t))==null||n.setAltitudeOffset(e),this._state={...this._state,altitudeOffset:e,tilesets:this._state.tilesets.map(s=>s.id===t?{...s,altitudeOffset:e}:s)},i&&this._renderTilesetList(),this._emit("altitudechange"),this._emit("statechange"))}flyToTileset(e=this._state.activeTilesetId){var t;e&&((t=this._layers.get(e))==null||t.flyToTileset(),this._state={...this._state,activeTilesetId:e},this._syncFromActiveTileset(),this._renderTilesetList(),this._emit("statechange"))}toggle(){this._state.collapsed=!this._state.collapsed,this._panel&&(this._state.collapsed?(this._panel.classList.remove("expanded"),this._emit("collapse")):(this._panel.classList.add("expanded"),this._updatePanelPosition(),this._emit("expand"))),this._emit("statechange")}expand(){this._state.collapsed&&this.toggle()}collapse(){this._state.collapsed||this.toggle()}on(e,t){this._eventHandlers.has(e)||this._eventHandlers.set(e,new Set),this._eventHandlers.get(e).add(t)}off(e,t){var i;(i=this._eventHandlers.get(e))==null||i.delete(t)}getMap(){return this._map}getContainer(){return this._container}_emit(e){const t=this._eventHandlers.get(e);if(!t)return;const i={type:e,state:this.getState()};t.forEach(n=>n(i))}_createContainer(){const e=document.createElement("div");e.className=`maplibregl-ctrl maplibregl-ctrl-group three-d-tiles-control${this._options.className?` ${this._options.className}`:""}`;const t=document.createElement("button");return t.className="three-d-tiles-control-toggle",t.type="button",t.setAttribute("aria-label",this._options.title),t.innerHTML=`
      <span class="three-d-tiles-control-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3 4 7.5l8 4.5 8-4.5L12 3Z"/>
          <path d="M4 7.5v9L12 21l8-4.5v-9"/>
          <path d="M12 12v9"/>
          <path d="m4 16.5 8-4.5 8 4.5"/>
        </svg>
      </span>
    `,t.addEventListener("click",()=>this.toggle()),e.appendChild(t),e}_createPanel(){const e=document.createElement("div");e.className="three-d-tiles-control-panel",e.style.width=`${this._options.panelWidth}px`;const t=document.createElement("div");t.className="three-d-tiles-control-header";const i=document.createElement("span");i.className="three-d-tiles-control-title",i.textContent=this._options.title;const n=document.createElement("button");return n.className="three-d-tiles-control-close",n.type="button",n.setAttribute("aria-label","Close panel"),n.innerHTML="&times;",n.addEventListener("click",()=>this.collapse()),t.appendChild(i),t.appendChild(n),this._content=document.createElement("div"),this._content.className="three-d-tiles-control-content",this._content.appendChild(this._createForm()),e.appendChild(t),e.appendChild(this._content),this._addResizeHandles(e),e}_addResizeHandles(e){for(const t of["left","right"]){const i=document.createElement("div");i.className=`three-d-tiles-control-resize-handle three-d-tiles-control-resize-${t}`,i.setAttribute("aria-hidden","true"),i.addEventListener("pointerdown",n=>this._beginResize(n,t,e,i)),e.appendChild(i)}}_beginResize(e,t,i,n){var s;if(!this._mapContainer)return;e.preventDefault(),e.stopPropagation();const r=this._mapContainer.getBoundingClientRect(),a=i.getBoundingClientRect(),o=e.clientX,l=e.clientY,c=a.width,h=a.height,u=a.left-r.left,d=a.right,A=a.top,p=Math.min(Ob,Math.max(120,r.width-24)),m=Math.min(kb,Math.max(120,r.height-24));i.style.left=`${u}px`,i.style.top=`${A-r.top}px`,i.style.right="",i.style.bottom="",i.style.maxWidth="none",i.style.maxHeight="none";const g=_=>{const b=_.clientX-o,C=_.clientY-l,S=Math.max(m,r.bottom-A-_c),M=Math.max(m,Math.min(h+C,S));let T,v=u;if(t==="right"){const y=Math.max(p,r.right-a.left-_c);T=Math.max(p,Math.min(c+b,y))}else{const y=Math.max(p,d-r.left-_c);T=Math.max(p,Math.min(c-b,y)),v=u+(c-T)}i.style.width=`${T}px`,i.style.height=`${M}px`,i.style.left=`${v}px`,this._userWidth=T,this._userHeight=M},f=()=>{var _;(_=n.releasePointerCapture)==null||_.call(n,e.pointerId),n.removeEventListener("pointermove",g),n.removeEventListener("pointerup",f),n.removeEventListener("pointercancel",f),this._resizeDragCleanup=null};(s=n.setPointerCapture)==null||s.call(n,e.pointerId),n.addEventListener("pointermove",g),n.addEventListener("pointerup",f),n.addEventListener("pointercancel",f),this._resizeDragCleanup=f}_createForm(){const e=document.createElement("form");e.className="three-d-tiles-form",e.addEventListener("submit",n=>{n.preventDefault(),this.loadTileset()}),this._layerNameInput=this._createInput("Layer name","text",this._state.layerName),this._urlInput=this._createInput("Tileset URL","url",this._state.tilesetUrl),this._headersInput=this._createTextarea("Request headers",mc(this._state.requestHeaders),"Authorization: ApiKey <key>"),this._beforeIdInput=this._createInput("Before layer ID","text",this._state.beforeId??""),this._altitudeInput=this._createInput("Altitude offset","number",String(this._state.altitudeOffset)),this._altitudeInput.step="any",this._altitudeInput.addEventListener("input",()=>{var n;const s=Number((n=this._altitudeInput)==null?void 0:n.value);Number.isFinite(s)&&this._state.activeTilesetId&&this.setAltitudeOffset(s,this._state.activeTilesetId,!1)}),this._altitudeInput.addEventListener("change",()=>{var n;const s=Number((n=this._altitudeInput)==null?void 0:n.value);Number.isFinite(s)&&this._state.activeTilesetId&&this.setAltitudeOffset(s,this._state.activeTilesetId)}),this._flyToCheckbox=this._createCheckbox("Fly to tileset after load",this._state.flyToOnLoad),this._visibleCheckbox=this._createCheckbox("Visible on load",this._state.visible),this._statusElement=document.createElement("div"),this._statusElement.className="three-d-tiles-status",this._loadButton=this._createButton("Add tileset","submit"),this._removeAllButton=this._createButton("Remove all","button"),this._removeAllButton.addEventListener("click",()=>this.removeTileset());const t=document.createElement("div");t.className="three-d-tiles-actions two-columns",t.appendChild(this._loadButton),t.appendChild(this._removeAllButton),this._tilesetList=document.createElement("div"),this._tilesetList.className="three-d-tiles-list";const i=this._createSampleDropdown();return i&&e.appendChild(i),e.appendChild(this._wrapField("Tileset URL",this._urlInput)),e.appendChild(this._wrapField("Layer name",this._layerNameInput)),e.appendChild(this._wrapField("Request headers",this._headersInput,{hint:"One per line as Name: Value, for authenticated tilesets. Saved with the layer.",grow:!0})),e.appendChild(this._wrapField("Before layer ID",this._beforeIdInput)),e.appendChild(this._wrapField("Altitude offset",this._altitudeInput)),e.appendChild(this._flyToCheckbox.parentElement),e.appendChild(this._visibleCheckbox.parentElement),e.appendChild(t),e.appendChild(this._statusElement),e.appendChild(this._tilesetList),this._updateStatus(),this._renderTilesetList(),e}_createInput(e,t,i){const n=document.createElement("input");return n.className="three-d-tiles-input",n.type=t,n.value=i,n.setAttribute("aria-label",e),n}_createSampleDropdown(){const e=this._options.sampleData;if(!e||e.length===0)return null;const t=this._options.sampleDataLabel,i=document.createElement("span");i.className="three-d-tiles-sample-trigger-label",i.textContent=t;const n=document.createElement("span");n.className="three-d-tiles-sample-caret",n.textContent="\u25BE";const s=document.createElement("button");s.type="button",s.className="three-d-tiles-sample-trigger",s.setAttribute("aria-haspopup","listbox"),s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label",t),s.appendChild(i),s.appendChild(n);const r=document.createElement("div");r.className="three-d-tiles-sample-menu",r.setAttribute("role","listbox"),r.hidden=!0;let a=!1;const o=u=>{var d;a=u,r.hidden=!u,s.setAttribute("aria-expanded",String(u)),s.classList.toggle("open",u),u&&((d=r.firstElementChild)==null||d.focus())};for(const u of e){const d=document.createElement("button");d.type="button",d.className="three-d-tiles-sample-option",d.setAttribute("role","option"),d.textContent=u.label,d.title=u.url,d.addEventListener("click",()=>{o(!1),s.focus(),this._urlInput&&(this._urlInput.value=u.url),this._altitudeInput&&u.altitudeOffset!==void 0&&(this._altitudeInput.value=String(u.altitudeOffset))}),r.appendChild(d)}s.addEventListener("click",()=>o(!a));const l=document.createElement("div");l.className="three-d-tiles-field three-d-tiles-sample-row";const c=document.createElement("span");c.textContent="Sample data",l.appendChild(c);const h=document.createElement("div");return h.className="three-d-tiles-sample-dropdown",h.appendChild(s),h.appendChild(r),l.appendChild(h),l.addEventListener("keydown",u=>{u.key==="Escape"&&a&&(o(!1),s.focus())}),l.addEventListener("focusout",u=>{const d=u.relatedTarget;(!d||!l.contains(d))&&o(!1)}),l}_createTextarea(e,t,i=""){const n=document.createElement("textarea");return n.className="three-d-tiles-input three-d-tiles-textarea",n.value=t,n.rows=2,n.placeholder=i,n.spellcheck=!1,n.setAttribute("aria-label",e),n}_createCheckbox(e,t){const i=document.createElement("label");i.className="three-d-tiles-checkbox";const n=document.createElement("input");n.type="checkbox",n.checked=t;const s=document.createElement("span");return s.textContent=e,i.appendChild(n),i.appendChild(s),n}_wrapField(e,t,i){const n=document.createElement("label");n.className="three-d-tiles-field",i?.grow&&n.classList.add("three-d-tiles-field-grow");const s=document.createElement("span");if(s.textContent=e,n.appendChild(s),n.appendChild(t),i?.hint){const r=document.createElement("span");r.className="three-d-tiles-field-hint",r.textContent=i.hint,n.appendChild(r)}return n}_createButton(e,t){const i=document.createElement("button");return i.className="three-d-tiles-button",i.type=t,i.textContent=e,i}_renderTilesetList(){this._tilesetList&&(this._tilesetList.replaceChildren(),this._state.tilesets.length!==0&&this._state.tilesets.forEach((e,t)=>{const i=document.createElement("div");i.className="three-d-tiles-list-item",e.id===this._state.activeTilesetId&&i.classList.add("active");const n=document.createElement("div");n.className="three-d-tiles-list-meta";const s=document.createElement("button");s.className="three-d-tiles-list-title",s.type="button",s.textContent=e.layerName||`Tileset ${t+1}`,s.addEventListener("click",()=>this._setActiveTileset(e.id));const r=document.createElement("span");r.className="three-d-tiles-list-url",r.textContent=e.tilesetUrl;const a=document.createElement("span");a.className="three-d-tiles-list-status",a.dataset.status=e.status,a.textContent=e.error??this._formatTilesetStatus(e),n.appendChild(s),n.appendChild(r),n.appendChild(a);const o=document.createElement("div");o.className="three-d-tiles-list-actions";const l=document.createElement("input");l.type="checkbox",l.checked=e.visible,l.setAttribute("aria-label",`Toggle tileset ${t+1}`),l.addEventListener("change",()=>this.setVisible(l.checked,e.id));const c=document.createElement("input");c.className="three-d-tiles-opacity",c.type="range",c.min="0",c.max="1",c.step="0.05",c.value=String(e.opacity),c.setAttribute("aria-label",`Opacity for tileset ${t+1}`),c.addEventListener("input",()=>{this.setOpacity(Number(c.value),e.id,!1)}),c.addEventListener("change",()=>{this.setOpacity(Number(c.value),e.id)});const h=this._createSmallButton("Fly");h.disabled=e.status!=="loaded",h.addEventListener("click",()=>this.flyToTileset(e.id));const u=this._createSmallButton("Remove");u.addEventListener("click",()=>this.removeTileset(e.id)),o.appendChild(l),o.appendChild(c),o.appendChild(h),o.appendChild(u),i.appendChild(n),i.appendChild(o),this._tilesetList.appendChild(i)}))}_createSmallButton(e){const t=document.createElement("button");return t.className="three-d-tiles-small-button",t.type="button",t.textContent=e,t}_setupEventListeners(){var e;this._options.collapseOnClickOutside&&(this._clickOutsideHandler=t=>{const i=t.target;this._container&&this._panel&&!this._container.contains(i)&&!this._panel.contains(i)&&this.collapse()},document.addEventListener("click",this._clickOutsideHandler)),this._resizeHandler=()=>{this._state.collapsed||this._updatePanelPosition()},window.addEventListener("resize",this._resizeHandler),this._mapResizeHandler=()=>{this._state.collapsed||this._updatePanelPosition()},(e=this._map)==null||e.on("resize",this._mapResizeHandler)}_getControlPosition(){var e;const t=(e=this._container)==null?void 0:e.parentElement;return t?t.classList.contains("maplibregl-ctrl-top-left")?"top-left":t.classList.contains("maplibregl-ctrl-top-right")?"top-right":t.classList.contains("maplibregl-ctrl-bottom-left")?"bottom-left":t.classList.contains("maplibregl-ctrl-bottom-right")?"bottom-right":"top-right":"top-right"}_updatePanelPosition(){if(!this._container||!this._panel||!this._mapContainer)return;const e=this._container.querySelector(".three-d-tiles-control-toggle");if(!e)return;const t=e.getBoundingClientRect(),i=this._mapContainer.getBoundingClientRect(),n=this._getControlPosition(),s=t.top-i.top,r=i.bottom-t.bottom,a=t.left-i.left,o=i.right-t.right,l=5,c=10;this._panel.style.top="",this._panel.style.bottom="",this._panel.style.left="",this._panel.style.right="";const h=(n==="top-left"||n==="top-right"?s:r)+t.height+l;switch(n){case"top-left":this._panel.style.top=`${h}px`,this._panel.style.left=`${a}px`;break;case"top-right":this._panel.style.top=`${h}px`,this._panel.style.right=`${o}px`;break;case"bottom-left":this._panel.style.bottom=`${h}px`,this._panel.style.left=`${a}px`;break;case"bottom-right":this._panel.style.bottom=`${h}px`,this._panel.style.right=`${o}px`}const u=Math.max(160,i.height-h-c);this._panel.style.maxHeight=`${u}px`;const d=Math.max(120,i.width-20);this._userWidth!==null&&(this._panel.style.width=`${Math.max(120,Math.min(this._userWidth,d))}px`),this._userHeight!==null&&(this._panel.style.height=`${Math.max(120,Math.min(this._userHeight,u))}px`)}_getAltitudeOffset(){var e;const t=Number(((e=this._altitudeInput)==null?void 0:e.value)??this._state.altitudeOffset);return Number.isFinite(t)?t:this._state.altitudeOffset}_getLayerName(){var e;return((e=this._layerNameInput)==null?void 0:e.value.trim())||this._state.layerName||"3D Tiles"}_getBeforeId(){var e;return((e=this._beforeIdInput)==null?void 0:e.value.trim())||this._state.beforeId||void 0}_getRequestHeaders(){var e;const t=Ub(((e=this._headersInput)==null?void 0:e.value)??mc(this._state.requestHeaders));return Object.keys(t).length>0?t:void 0}_handleTilesetLoaded(e,t){this._layers.has(e)&&(this._state={...this._state,status:"loaded",center:t.center,altitude:t.altitude,error:void 0,activeTilesetId:e,tilesets:this._state.tilesets.map(i=>i.id===e?{...i,status:"loaded",center:t.center,altitude:t.altitude,error:void 0}:i)},this._syncFromActiveTileset(),this._updateStatus(),this._renderTilesetList(),this._emit("load"),this._emit("statechange"),this._state.flyToOnLoad&&this.flyToTileset(e))}_setError(e,t=this._state.activeTilesetId){this._state={...this._state,status:"error",error:e.message,activeTilesetId:t,tilesets:this._state.tilesets.map(i=>i.id===t?{...i,status:"error",error:e.message}:i)},this._updateStatus(),this._renderTilesetList(),this._emit("error"),this._emit("statechange")}_syncFormFromState(){this._urlInput&&(this._urlInput.value=this._state.tilesetUrl),this._layerNameInput&&(this._layerNameInput.value=this._state.layerName),this._headersInput&&(this._headersInput.value=mc(this._state.requestHeaders)),this._beforeIdInput&&(this._beforeIdInput.value=this._state.beforeId??""),this._altitudeInput&&(this._altitudeInput.value=String(this._state.altitudeOffset)),this._flyToCheckbox&&(this._flyToCheckbox.checked=this._state.flyToOnLoad),this._visibleCheckbox&&(this._visibleCheckbox.checked=this._state.visible)}_updateStatus(){if(!this._statusElement)return;const e=this._state.tilesets.filter(r=>r.status==="loaded").length,t=this._state.tilesets.filter(r=>r.status==="loading").length,i=this._state.tilesets.filter(r=>r.status==="error").length,n=this._getActiveTileset(),s=n?.status==="loaded"&&n.center?`${e} loaded, active at ${n.center[1].toFixed(5)}, ${n.center[0].toFixed(5)}`:t>0?`${t} loading, ${e} loaded`:i>0?`${i} failed, ${e} loaded`:e>0?`${e} loaded`:"No tilesets added";this._statusElement.textContent=s,this._statusElement.dataset.status=n?.status??this._state.status,this._loadButton&&(this._loadButton.disabled=!1),this._removeAllButton&&(this._removeAllButton.disabled=this._state.tilesets.length===0)}_setActiveTileset(e){this._state={...this._state,activeTilesetId:e},this._syncFromActiveTileset(),this._syncFormFromState(),this._updateStatus(),this._renderTilesetList(),this._emit("statechange")}_syncFromActiveTileset(){const e=this._getActiveTileset();e&&(this._state={...this._state,tilesetUrl:e.tilesetUrl,layerName:e.layerName,beforeId:e.beforeId,altitudeOffset:e.altitudeOffset,opacity:e.opacity,visible:e.visible,requestHeaders:e.requestHeaders,status:e.status,error:e.error,center:e.center,altitude:e.altitude})}_getActiveTileset(e=this._state.tilesets){return e.find(t=>t.id===this._state.activeTilesetId)??e[e.length-1]}_getTileset(e){return this._state.tilesets.find(t=>t.id===e)}_formatTilesetStatus(e){return e.beforeId?`${e.status} before ${e.beforeId}`:e.status}_createTilesetId(){return this._tilesetCounter+=1,`tileset-${this._tilesetCounter}`}_createLayerId(e){return this._state.tilesets.length===0&&this._map&&!this._map.getLayer(this._options.layerId)?this._options.layerId:`${this._options.layerId}-${e}`}async _waitForStyle(){!this._map||this._map.isStyleLoaded()||await this._map.once("style.load")}};export{Hb as n,HA as r,zA as t};
