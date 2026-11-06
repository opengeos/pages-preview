import{$n as bi,An as Di,Ar as Dt,At as wi,Bn as Ui,C as wt,Cr as rt,D as at,Dr as Ze,Er as Ni,Fn as Ii,Fr as yi,H as In,I as Ut,It as Oi,L as Nt,Lt as ot,Mr as vn,Mt as Fi,N as Bi,Nn as Gi,Nr as Hi,Nt as Vi,O as qn,On as st,Or as Wi,P as It,Pn as ki,Pr as He,Qt as zi,R as yt,Rt as Xi,S as Ki,Sr as xn,St as yn,Tr as Yi,Tt as qi,Un as On,Vn as lt,Zt as Ot,_r as ke,ar as Zi,b as Ft,bt as Ne,c as $i,cr as Hn,d as ct,dt as Qi,fr as Zn,ft as Bt,gr as gn,hr as Ji,i as ji,jr as Gt,jt as Vn,k as Wn,kn as er,kr as Ht,l as Vt,lt as ft,m as Qe,mr as nr,nt as tr,or as ir,p as $e,pr as rr,qt as ar,s as dt,sr as or,st as Dn,ur as ut,ut as sr,vr as Sn,w as lr,wr as pt,wt as cr,x as Wt,xr as kt,xt as Fn,y as ht,z as fr,zt}from"./three.core-CJpNrwyg.js";function Xt(){let e=null,t=!1,n=null,i=null;function d(l,u){i=e.requestAnimationFrame(d),n(l,u)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(d),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){e=l}}}function dr(e){const t=new WeakMap;function n(v,F){const b=v.array,H=v.usage,O=b.byteLength,E=e.createBuffer();e.bindBuffer(F,E),e.bufferData(F,b,H),v.onUploadCallback();let R;if(b instanceof Float32Array)R=e.FLOAT;else if(typeof Float16Array<"u"&&b instanceof Float16Array)R=e.HALF_FLOAT;else if(b instanceof Uint16Array)v.isFloat16BufferAttribute?R=e.HALF_FLOAT:R=e.UNSIGNED_SHORT;else if(b instanceof Int16Array)R=e.SHORT;else if(b instanceof Uint32Array)R=e.UNSIGNED_INT;else if(b instanceof Int32Array)R=e.INT;else if(b instanceof Int8Array)R=e.BYTE;else if(b instanceof Uint8Array)R=e.UNSIGNED_BYTE;else if(b instanceof Uint8ClampedArray)R=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+b);return{buffer:E,type:R,bytesPerElement:b.BYTES_PER_ELEMENT,version:v.version,size:O}}function i(v,F,b){const H=F.array,O=F.updateRanges;if(e.bindBuffer(b,v),O.length===0)e.bufferSubData(b,0,H);else{O.sort((R,L)=>R.start-L.start);let E=0;for(let R=1;R<O.length;R++){const L=O[E],G=O[R];G.start<=L.start+L.count+1?L.count=Math.max(L.count,G.start+G.count-L.start):(++E,O[E]=G)}O.length=E+1;for(let R=0,L=O.length;R<L;R++){const G=O[R];e.bufferSubData(b,G.start*H.BYTES_PER_ELEMENT,H,G.start,G.count)}F.clearUpdateRanges()}F.onUploadCallback()}function d(v){return v.isInterleavedBufferAttribute&&(v=v.data),t.get(v)}function l(v){v.isInterleavedBufferAttribute&&(v=v.data);const F=t.get(v);F&&(e.deleteBuffer(F.buffer),t.delete(v))}function u(v,F){if(v.isInterleavedBufferAttribute&&(v=v.data),v.isGLBufferAttribute){const H=t.get(v);(!H||H.version<v.version)&&t.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}const b=t.get(v);if(b===void 0)t.set(v,n(v,F));else if(b.version<v.version){if(b.size!==v.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(b.buffer,v,F),b.version=v.version}}return{get:d,remove:l,update:u}}var De={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
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
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
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
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
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
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
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
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
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
void main() {
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new gn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new gn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Cn={basic:{uniforms:vn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:vn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:vn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:vn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:vn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:vn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:vn([fe.points,fe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:vn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:vn([fe.common,fe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:vn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:vn([fe.sprite,fe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:vn([fe.common,fe.displacementmap,{referencePosition:{value:new ke},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:vn([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Cn.physical={uniforms:vn([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new gn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new gn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new gn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var $n={r:0,b:0,g:0},ur=new Fn,Kt=new Ne;Kt.set(-1,0,0,0,1,0,0,0,1);function pr(e,t,n,i,d,l){const u=new $e(0);let v=d===!0?0:1,F,b,H=null,O=0,E=null;function R(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const h=S.backgroundBlurriness>0;w=t.get(w,h)}return w}function L(S){let w=!1;const h=R(S);h===null?c(u,v):h&&h.isColor&&(c(h,1),w=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,l):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(e.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function G(S,w){const h=R(w);h&&h.isCubeTexture?(b===void 0&&(b=new yn(new dt(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:pt(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(A,D,o){this.matrixWorld.copyPosition(o.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(b)),b.material.uniforms.envMap.value=h,b.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(ur.makeRotationFromEuler(w.backgroundRotation)).transpose(),h.isRenderTargetTexture===!1&&b.material.uniforms.backgroundRotation.value.premultiply(Kt),b.material.toneMapped=Qe.getTransfer(h.colorSpace)!==lt,(H!==h||O!==h.version||E!==e.toneMapping)&&(b.material.needsUpdate=!0,H=h,O=h.version,E=e.toneMapping),b.layers.enableAll(),S.unshift(b,b.geometry,b.material,0,0,null)):h&&h.isTexture&&(F===void 0&&(F=new yn(new zt(2,2),new On({name:"BackgroundMaterial",uniforms:pt(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),F.geometry.deleteAttribute("normal"),Object.defineProperty(F.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(F)),F.material.uniforms.t2D.value=h,F.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,F.material.toneMapped=Qe.getTransfer(h.colorSpace)!==lt,h.matrixAutoUpdate===!0&&h.updateMatrix(),F.material.uniforms.uvTransform.value.copy(h.matrix),(H!==h||O!==h.version||E!==e.toneMapping)&&(F.material.needsUpdate=!0,H=h,O=h.version,E=e.toneMapping),F.layers.enableAll(),S.unshift(F,F.geometry,F.material,0,0,null))}function c(S,w){S.getRGB($n,Dt(e)),n.buffers.color.setClear($n.r,$n.g,$n.b,w,l)}function s(){b!==void 0&&(b.geometry.dispose(),b.material.dispose(),b=void 0),F!==void 0&&(F.geometry.dispose(),F.material.dispose(),F=void 0)}return{getClearColor:function(){return u},setClearColor:function(S,w=1){u.set(S),v=w,c(u,v)},getClearAlpha:function(){return v},setClearAlpha:function(S){v=S,c(u,v)},render:L,addToRenderList:G,dispose:s}}function hr(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},d=E(null);let l=d,u=!1;function v(U,V,ee,T,K){let Q=!1;const B=O(U,T,ee,V);l!==B&&(l=B,b(l.object)),Q=R(U,T,ee,K),Q&&L(U,T,ee,K),K!==null&&t.update(K,e.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,h(U,V,ee,T),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function F(){return e.createVertexArray()}function b(U){return e.bindVertexArray(U)}function H(U){return e.deleteVertexArray(U)}function O(U,V,ee,T){const K=T.wireframe===!0;let Q=i[V.id];Q===void 0&&(Q={},i[V.id]=Q);const B=U.isInstancedMesh===!0?U.id:0;let me=Q[B];me===void 0&&(me={},Q[B]=me);let k=me[ee.id];k===void 0&&(k={},me[ee.id]=k);let q=k[K];return q===void 0&&(q=E(F()),k[K]=q),q}function E(U){const V=[],ee=[],T=[];for(let K=0;K<n;K++)V[K]=0,ee[K]=0,T[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:T,object:U,attributes:{},index:null}}function R(U,V,ee,T){const K=l.attributes,Q=V.attributes;let B=0;const me=ee.getAttributes();for(const k in me)if(me[k].location>=0){const q=K[k];let de=Q[k];if(de===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(de=U.instanceColor)),q===void 0||q.attribute!==de||de&&q.data!==de.data)return!0;B++}return l.attributesNum!==B||l.index!==T}function L(U,V,ee,T){const K={},Q=V.attributes;let B=0;const me=ee.getAttributes();for(const k in me)if(me[k].location>=0){let q=Q[k];q===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));const de={};de.attribute=q,q&&q.data&&(de.data=q.data),K[k]=de,B++}l.attributes=K,l.attributesNum=B,l.index=T}function G(){const U=l.newAttributes;for(let V=0,ee=U.length;V<ee;V++)U[V]=0}function c(U){s(U,0)}function s(U,V){const ee=l.newAttributes,T=l.enabledAttributes,K=l.attributeDivisors;ee[U]=1,T[U]===0&&(e.enableVertexAttribArray(U),T[U]=1),K[U]!==V&&(e.vertexAttribDivisor(U,V),K[U]=V)}function S(){const U=l.newAttributes,V=l.enabledAttributes;for(let ee=0,T=V.length;ee<T;ee++)V[ee]!==U[ee]&&(e.disableVertexAttribArray(ee),V[ee]=0)}function w(U,V,ee,T,K,Q,B){B===!0?e.vertexAttribIPointer(U,V,ee,K,Q):e.vertexAttribPointer(U,V,ee,T,K,Q)}function h(U,V,ee,T){G();const K=T.attributes,Q=ee.getAttributes(),B=V.defaultAttributeValues;for(const me in Q){const k=Q[me];if(k.location>=0){let q=K[me];if(q===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),q!==void 0){const de=q.normalized,be=q.itemSize,z=t.get(q);if(z===void 0)continue;const ne=z.buffer,ge=z.type,Re=z.bytesPerElement,Pe=ge===e.INT||ge===e.UNSIGNED_INT||q.gpuType===1013;if(q.isInterleavedBufferAttribute){const ue=q.data,Oe=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,Ve=q.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)s(k.location+xe,ue.meshPerAttribute);U.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<k.locationSize;xe++)c(k.location+xe);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let xe=0;xe<k.locationSize;xe++)w(k.location+xe,be/k.locationSize,ge,de,Oe*Re,(Ve+be/k.locationSize*xe)*Re,Pe)}else{if(q.isInstancedBufferAttribute){for(let ue=0;ue<k.locationSize;ue++)s(k.location+ue,q.meshPerAttribute);U.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ue=0;ue<k.locationSize;ue++)c(k.location+ue);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let ue=0;ue<k.locationSize;ue++)w(k.location+ue,be/k.locationSize,ge,de,be*Re,be/k.locationSize*ue*Re,Pe)}}else if(B!==void 0){const de=B[me];if(de!==void 0)switch(de.length){case 2:e.vertexAttrib2fv(k.location,de);break;case 3:e.vertexAttrib3fv(k.location,de);break;case 4:e.vertexAttrib4fv(k.location,de);break;default:e.vertexAttrib1fv(k.location,de)}}}}S()}function A(){y();for(const U in i){const V=i[U];for(const ee in V){const T=V[ee];for(const K in T){const Q=T[K];for(const B in Q)H(Q[B].object),delete Q[B];delete T[K]}}delete i[U]}}function D(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const ee in V){const T=V[ee];for(const K in T){const Q=T[K];for(const B in Q)H(Q[B].object),delete Q[B];delete T[K]}}delete i[U.id]}function o(U){for(const V in i){const ee=i[V];for(const T in ee){const K=ee[T];if(K[U.id]===void 0)continue;const Q=K[U.id];for(const B in Q)H(Q[B].object),delete Q[B];delete K[U.id]}}}function p(U){for(const V in i){const ee=i[V],T=U.isInstancedMesh===!0?U.id:0,K=ee[T];if(K!==void 0){for(const Q in K){const B=K[Q];for(const me in B)H(B[me].object),delete B[me];delete K[Q]}delete ee[T],Object.keys(ee).length===0&&delete i[V]}}}function y(){Z(),u=!0,l!==d&&(l=d,b(l.object))}function Z(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:y,resetDefaultState:Z,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfObject:p,releaseStatesOfProgram:o,initAttributes:G,enableAttribute:c,disableUnusedAttributes:S}}function mr(e,t,n){let i;function d(F){i=F}function l(F,b){e.drawArrays(i,F,b),n.update(b,i,1)}function u(F,b,H){H!==0&&(e.drawArraysInstanced(i,F,b,H),n.update(b,i,H))}function v(F,b,H){if(H===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,F,0,b,0,H);let O=0;for(let E=0;E<H;E++)O+=b[E];n.update(O,i,1)}this.setMode=d,this.render=l,this.renderInstances=u,this.renderMultiDraw=v}function _r(e,t,n,i){let d;function l(){if(d!==void 0)return d;if(t.has("EXT_texture_filter_anisotropic")===!0){const o=t.get("EXT_texture_filter_anisotropic");d=e.getParameter(o.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else d=0;return d}function u(o){return!(o!==1023&&i.convert(o)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function v(o){const p=o===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(o!==1009&&o!==1015&&!p&&i.convert(o)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function F(o){if(o==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";o="mediump"}return o==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let b=n.precision!==void 0?n.precision:"highp";const H=F(b);H!==b&&(He("WebGLRenderer:",b,"not supported, using",H,"instead."),b=H);const O=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=n.logarithmicDepthBuffer===!0&&O===!1;n.reversedDepthBuffer===!0&&O===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&O===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const R=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),G=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),s=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),h=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),D=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:F,textureFormatReadable:u,textureTypeReadable:v,precision:b,logarithmicDepthBuffer:E,reversedDepthBuffer:O,maxTextures:R,maxVertexTextures:L,maxTextureSize:G,maxCubemapSize:c,maxAttributes:s,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:h,maxSamples:A,samples:D}}function vr(e){const t=this;let n=null,i=0,d=!1,l=!1;const u=new Xi,v=new Ne,F={value:null,needsUpdate:!1};this.uniform=F,this.numPlanes=0,this.numIntersection=0,this.init=function(O,E){const R=O.length!==0||E||i!==0||d;return d=E,i=O.length,R},this.beginShadows=function(){l=!0,H(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(O,E){n=H(O,E,0)},this.setState=function(O,E,R){const L=O.clippingPlanes,G=O.clipIntersection,c=O.clipShadows,s=e.get(O);if(!d||L===null||L.length===0||l&&!c)l?H(null):b();else{const S=l?0:i,w=S*4;let h=s.clippingState||null;F.value=h,h=H(L,E,w,R);for(let A=0;A!==w;++A)h[A]=n[A];s.clippingState=h,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=S}};function b(){F.value!==n&&(F.value=n,F.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function H(O,E,R,L){const G=O!==null?O.length:0;let c=null;if(G!==0){if(c=F.value,L!==!0||c===null){const s=R+G*4,S=E.matrixWorldInverse;v.getNormalMatrix(S),(c===null||c.length<s)&&(c=new Float32Array(s));for(let w=0,h=R;w!==G;++w,h+=4)u.copy(O[w]).applyMatrix4(S,v),u.normal.toArray(c,h),c[h+3]=u.constant}F.value=c,F.needsUpdate=!0}return t.numPlanes=G,t.numIntersection=0,c}}var Qn=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wt(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new dt(5,5,5),d=new On({name:"CubemapFromEquirect",uniforms:pt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});d.uniforms.tEquirect.value=t;const l=new yn(i,d),u=t.minFilter;return t.minFilter===1008&&(t.minFilter=Dn),new ht(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const d=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(d)}},Yt=256,gr=3,Sr=20,qt=256,Zt=16,Er=3,Mr=new ke,Tr=new $e,mt=class Ri{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ht(1,10,null),this._boxMesh=new yn(new dt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,d=100,l={}){const{size:u=256,position:v=Mr}=l,F=this._renderer;this._setSize(u);const b=this._allocateTarget(),H=this._getSourceTarget(!0);n>0&&(H.texture.mipmapsAutoUpdate=!1);const O=F.autoClear,E=F.autoClearColor,R=F.autoClearDepth,L=F.autoClearStencil,G=t.background;F.autoClear=!0,F.autoClearColor=!0,F.autoClearDepth=!0,F.autoClearStencil=!0,G===null&&(t.background=F.getClearColor(Tr));const c=new ht(i,d,H);return c.position.copy(v),c.update(F,t),F.autoClear=O,F.autoClearColor=E,F.autoClearDepth=R,F.autoClearStencil=L,t.background=G,n>0&&(H.texture.mipmapsAutoUpdate=!0,this._blur(b,n)),this._applyPMREM(b),b}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(Yt,Wi(t))}_fromTexture(t,n){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?Yt:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,n=$t(t,!1,!1),i=Math.log2(t)-gr;for(let d=0;d<=i;d++)n.texture.mipmaps.push({width:t>>d,height:t>>d});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$t(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){const d=this._boxMesh,l=this._cubeCamera;d.material=i,l.renderTarget=t,l.activeMipmapLevel=n;const u=t.width>>n;t.viewport.set(0,0,u,u),l.update(this._renderer,d),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===301||t.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jt()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qt()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Rr(),this._integrationMaterial=Ar());const n=this._cubeSize,i=t.texture.mipmaps.length-1,d=this._ggxMaterial.uniforms;d.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(n/Zt);for(let u=0;u<=i;u++){const v=Ri.lodToRoughness(u,i);if(u>i-Er)l.roughness.value=v,this._renderCube(t,u,this._integrationMaterial);else{const F=v>0?Math.log2(n)+.5*Math.log2(6/(qt*Math.pow(v,4)))+.5:0;d.roughness.value=v,d.lodBias.value=F,this._renderCube(t,u,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=xr());const i=this._blurMaterial,d=i.uniforms,l=this._sourceTarget;d.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,d.envMap.value=l.texture,this._renderCube(t,0,i),d.envMap.value=t.texture,this._renderCube(l,0,i)}};function $t(e,t,n){return new Qn(e,{minFilter:ft,generateMipmaps:t,type:In,colorSpace:Qi,depthBuffer:n})}function kn(e,t,n){return new On({name:e,uniforms:t,vertexShader:De.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Rr(){return kn("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qt}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ar(){return kn("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zt}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xr(){return kn("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sr}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qt(){return kn("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Jt(){return kn("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cr(e){let t=new WeakMap,n=new WeakMap,i=null;function d(E,R=!1){return E==null?null:R?u(E):l(E)}function l(E){if(E&&E.isTexture){const R=E.mapping;if(R===303||R===304)if(t.has(E)){const L=t.get(E).texture;return v(L,E.mapping)}else{const L=E.image;if(L&&L.height>0){const G=new Qn(L.height);return G.fromEquirectangularTexture(e,E),t.set(E,G),E.addEventListener("dispose",b),v(G.texture,E.mapping)}else return null}}return E}function u(E){if(E&&E.isTexture&&E.isPMREMTexture!==!0){const R=E.mapping,L=R===303||R===304,G=R===301||R===302;if(L||G){let c=n.get(E);const s=c!==void 0?c.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==s)return i===null&&(i=new mt(e)),c=L?i.fromEquirectangular(E,c):i.fromCubemap(E,c),c.texture.pmremVersion=E.pmremVersion,n.set(E,c),c.texture;if(c!==void 0)return c.texture;{const S=E.image;return L&&S&&S.height>0||G&&S&&F(S)?(i===null&&(i=new mt(e)),c=L?i.fromEquirectangular(E):i.fromCubemap(E),c.texture.pmremVersion=E.pmremVersion,n.set(E,c),E.addEventListener("dispose",H),c.texture):null}}}return E}function v(E,R){return R===303?E.mapping=301:R===304&&(E.mapping=302),E}function F(E){let R=0;const L=6;for(let G=0;G<L;G++)E[G]!==void 0&&R++;return R===L}function b(E){const R=E.target;R.removeEventListener("dispose",b);const L=t.get(R);L!==void 0&&(t.delete(R),L.dispose())}function H(E){const R=E.target;R.removeEventListener("dispose",H);const L=n.get(R);L!==void 0&&(n.delete(R),L.dispose())}function O(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:d,dispose:O}}function Pr(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const d=e.getExtension(i);return t[i]=d,d}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const d=n(i);return d===null&&yi("WebGLRenderer: "+i+" extension not supported."),d}}}function Lr(e,t,n,i){const d={},l=new WeakMap,u=new FinalizationRegistry(L=>delete d[L]);function v(L){F(L.target)}function F(L){L.index!==null&&t.remove(L.index);for(const c in L.attributes)t.remove(L.attributes[c]);L.removeEventListener("dispose",v),delete d[L.id],u.unregister(L);const G=l.get(L);G&&(t.remove(G),l.delete(L)),i.releaseStatesOfGeometry(L),L.isInstancedBufferGeometry===!0&&delete L._maxInstanceCount,n.memory.geometries--}function b(L,G){return d[G.id]!==void 0||(G.addEventListener("dispose",v),d[G.id]=new WeakRef(G),u.register(G,G.id,G),n.memory.geometries++),G}function H(L){const G=L.attributes;for(const c in G)t.update(G[c],e.ARRAY_BUFFER)}function O(L){const G=L.index,c=L.attributes.position;let s=0;if(c===void 0)return;const S=G!==null?G.array.length:c.array.length/3-1,w=new(c.count>=65535?ir:Zi)(Math.ceil(S/3)*6,1),h=w.array;if(G!==null){const D=G.array;s=G.version;for(let o=0,p=0;o<S;o+=3){const y=D[o+0],Z=D[o+1],U=D[o+2];h[p++]=y,h[p++]=Z,h[p++]=Z,h[p++]=U,h[p++]=U,h[p++]=y}}else{s=c.version;for(let D=0,o=0;D<S;D+=3){const p=D+0,y=D+1,Z=D+2;h[o++]=p,h[o++]=y,h[o++]=y,h[o++]=Z,h[o++]=Z,h[o++]=p}}w.version=s;const A=l.get(L);A&&t.remove(A),l.set(L,w)}function E(L){const G=l.get(L);if(G){const c=L.index;c!==null&&G.version<c.version&&O(L)}else O(L);return l.get(L)}function R(){for(const L in d){const G=d[L].deref();G!==void 0&&F(G)}}return{get:b,update:H,getWireframeAttribute:E,dispose:R}}function br(e,t,n){let i;function d(O){i=O}let l,u;function v(O){l=O.type,u=O.bytesPerElement}function F(O,E){e.drawElements(i,E,l,O*u),n.update(E,i,1)}function b(O,E,R){R!==0&&(e.drawElementsInstanced(i,E,l,O*u,R),n.update(E,i,R))}function H(O,E,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,E,0,l,O,0,R);let L=0;for(let G=0;G<R;G++)L+=E[G];n.update(L,i,1)}this.setMode=d,this.setIndex=v,this.render=F,this.renderInstances=b,this.renderMultiDraw=H}function Dr(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,v){switch(n.calls++,u){case e.TRIANGLES:n.triangles+=v*(l/3);break;case e.LINES:n.lines+=v*(l/2);break;case e.LINE_STRIP:n.lines+=v*(l-1);break;case e.LINE_LOOP:n.lines+=v*l;break;case e.POINTS:n.points+=v*l;break;default:Ze("WebGLInfo: Unknown draw mode:",u)}}function d(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:d,update:i}}function wr(e,t,n){const i=new WeakMap,d=new Sn;function l(u,v,F){const b=u.morphTargetInfluences,H=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,O=H!==void 0?H.length:0;let E=i.get(v);if(E===void 0||E.count!==O){let y=function(){o.dispose(),i.delete(v),v.removeEventListener("dispose",y)};E!==void 0&&E.texture.dispose();const R=v.morphAttributes.position!==void 0,L=v.morphAttributes.normal!==void 0,G=v.morphAttributes.color!==void 0,c=v.morphAttributes.position||[],s=v.morphAttributes.normal||[],S=v.morphAttributes.color||[];let w=0;R===!0&&(w=1),L===!0&&(w=2),G===!0&&(w=3);let h=v.attributes.position.count*w,A=1;h>t.maxTextureSize&&(A=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);const D=new Float32Array(h*A*4*O),o=new wt(D,h,A,O);o.type=Nt,o.needsUpdate=!0;const p=w*4;for(let Z=0;Z<O;Z++){const U=c[Z],V=s[Z],ee=S[Z],T=h*A*4*Z;for(let K=0;K<U.count;K++){const Q=K*p;R===!0&&(d.fromBufferAttribute(U,K),D[T+Q+0]=d.x,D[T+Q+1]=d.y,D[T+Q+2]=d.z,D[T+Q+3]=0),L===!0&&(d.fromBufferAttribute(V,K),D[T+Q+4]=d.x,D[T+Q+5]=d.y,D[T+Q+6]=d.z,D[T+Q+7]=0),G===!0&&(d.fromBufferAttribute(ee,K),D[T+Q+8]=d.x,D[T+Q+9]=d.y,D[T+Q+10]=d.z,D[T+Q+11]=ee.itemSize===4?d.w:1)}}E={count:O,texture:o,size:new gn(h,A)},i.set(v,E),v.addEventListener("dispose",y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)F.getUniforms().setValue(e,"morphTexture",u.morphTexture,n);else{let R=0;for(let G=0;G<b.length;G++)R+=b[G];const L=v.morphTargetsRelative?1:1-R;F.getUniforms().setValue(e,"morphTargetBaseInfluence",L),F.getUniforms().setValue(e,"morphTargetInfluences",b)}F.getUniforms().setValue(e,"morphTargetsTexture",E.texture,n),F.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:l}}function Ur(e,t,n,i,d){let l=new WeakMap;function u(b){const H=d.render.frame,O=b.geometry,E=t.get(b,O);if(l.get(E)!==H&&(t.update(E),l.set(E,H)),b.isInstancedMesh&&(b.hasEventListener("dispose",F)===!1&&b.addEventListener("dispose",F),l.get(b)!==H&&(n.update(b.instanceMatrix,e.ARRAY_BUFFER),b.instanceColor!==null&&n.update(b.instanceColor,e.ARRAY_BUFFER),l.set(b,H))),b.isSkinnedMesh){const R=b.skeleton;l.get(R)!==H&&(R.update(),l.set(R,H))}return E}function v(){l=new WeakMap}function F(b){const H=b.target;H.removeEventListener("dispose",F),i.releaseStatesOfObject(H),n.remove(H.instanceMatrix),H.instanceColor!==null&&n.remove(H.instanceColor)}return{update:u,dispose:v}}var Nr={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Ir(e,t,n,i,d,l){const u=new xn(t,n,{type:e,depthBuffer:d,stencilBuffer:l,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let v=null,F=null,b=null;const H=new Vt;H.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const O=new Di({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new yn(H,O),R=new Oi(-1,1,1,-1,0,1);let L=null,G=null,c=!1,s,S=null,w=[],h=!1;this.setSize=function(A,D){u.setSize(A,D),v!==null&&v.setSize(A,D),F!==null&&F.setSize(A,D);for(let o=0;o<w.length;o++){const p=w[o];p.setSize&&p.setSize(A,D)}},this.setEffects=function(A){w=A,h=w.length>0&&w[0].isRenderPass===!0;const D=u.width,o=u.height;w.length>0&&v===null&&(v=new xn(D,o,{type:In,depthBuffer:!1,stencilBuffer:!1}),F=new xn(D,o,{type:In,depthBuffer:!1,stencilBuffer:!1}));const p=d===!0&&w.some(y=>y.needsDepthTexture===!0);p!==(u.depthTexture!==null)&&(p===!0&&b===null&&(b=new Wn(D,o),l===!0&&(b.format=qn,b.type=ut)),u.dispose(),u.depthTexture=p?b:null,u.resolveDepthBuffer=p,u.storeMultisampledDepthBuffer=p);for(let y=0;y<w.length;y++){const Z=w[y];Z.setSize&&Z.setSize(D,o),p&&Z.needsDepthTexture===!0&&Z.setDepthTexture&&Z.setDepthTexture(b)}},this.begin=function(A,D){if(c||A.toneMapping===0&&w.length===0)return!1;if(S=D,D!==null){const o=D.width,p=D.height;(u.width!==o||u.height!==p)&&this.setSize(o,p)}return h===!1&&A.setRenderTarget(u),s=A.toneMapping,A.toneMapping=0,!0},this.hasRenderPass=function(){return h},this.end=function(A,D){A.toneMapping=s,c=!0;let o=u,p=v;for(let y=0;y<w.length;y++){const Z=w[y];Z.enabled!==!1&&(Z.render(A,p,o,D),Z.needsSwap!==!1&&(o=p,p=p===v?F:v))}if(L!==A.outputColorSpace||G!==A.toneMapping){L=A.outputColorSpace,G=A.toneMapping,O.defines={},Qe.getTransfer(L)==="srgb"&&(O.defines.SRGB_TRANSFER="");const y=Nr[G];y&&(O.defines[y]=""),O.needsUpdate=!0}O.uniforms.tDiffuse.value=o.texture,A.setRenderTarget(S),A.render(E,R),S=null,c=!1},this.isCompositing=function(){return c},this.dispose=function(){u.dispose(),v!==null&&v.dispose(),F!==null&&F.dispose(),H.dispose(),O.dispose()}}var jt=new bi,ei=new Wn(1,1),ni=new Ft(1),ti=new wt,ii=new Ki,ri=new Wt,ai=[],oi=[],si=new Float32Array(16),li=new Float32Array(9),ci=new Float32Array(4);function Bn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const d=t*n;let l=ai[d];if(l===void 0&&(l=new Float32Array(d),ai[d]=l),t!==0){i.toArray(l,0);for(let u=1,v=0;u!==t;++u)v+=n,e[u].toArray(l,v)}return l}function nn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function tn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Jn(e,t){let n=oi[t];n===void 0&&(n=new Int32Array(t),oi[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function yr(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Or(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nn(n,t))return;e.uniform2fv(this.addr,t),tn(n,t)}}function Fr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(nn(n,t))return;e.uniform3fv(this.addr,t),tn(n,t)}}function Br(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nn(n,t))return;e.uniform4fv(this.addr,t),tn(n,t)}}function Gr(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(nn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tn(n,t)}else{if(nn(n,i))return;ci.set(i),e.uniformMatrix2fv(this.addr,!1,ci),tn(n,i)}}function Hr(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(nn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tn(n,t)}else{if(nn(n,i))return;li.set(i),e.uniformMatrix3fv(this.addr,!1,li),tn(n,i)}}function Vr(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(nn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tn(n,t)}else{if(nn(n,i))return;si.set(i),e.uniformMatrix4fv(this.addr,!1,si),tn(n,i)}}function Wr(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function kr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nn(n,t))return;e.uniform2iv(this.addr,t),tn(n,t)}}function zr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(nn(n,t))return;e.uniform3iv(this.addr,t),tn(n,t)}}function Xr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nn(n,t))return;e.uniform4iv(this.addr,t),tn(n,t)}}function Kr(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Yr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nn(n,t))return;e.uniform2uiv(this.addr,t),tn(n,t)}}function qr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(nn(n,t))return;e.uniform3uiv(this.addr,t),tn(n,t)}}function Zr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nn(n,t))return;e.uniform4uiv(this.addr,t),tn(n,t)}}function jn(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function $r(e,t,n){const i=this.cache,d=n.allocateTextureUnit();i[0]!==d&&(e.uniform1i(this.addr,d),i[0]=d);let l;this.type===e.SAMPLER_2D_SHADOW?l=jn(ei):l=jt,n.setTexture2D(t||l,d)}function Qr(e,t,n){const i=this.cache,d=n.allocateTextureUnit();i[0]!==d&&(e.uniform1i(this.addr,d),i[0]=d),n.setTexture3D(t||ii,d)}function Jr(e,t,n){const i=this.cache,d=n.allocateTextureUnit();i[0]!==d&&(e.uniform1i(this.addr,d),i[0]=d);let l;this.type===e.SAMPLER_CUBE_SHADOW?l=jn(ni):l=ri,n.setTextureCube(t||l,d)}function jr(e,t,n){const i=this.cache,d=n.allocateTextureUnit();i[0]!==d&&(e.uniform1i(this.addr,d),i[0]=d),n.setTexture2DArray(t||ti,d)}function ea(e){switch(e){case 5126:return yr;case 35664:return Or;case 35665:return Fr;case 35666:return Br;case 35674:return Gr;case 35675:return Hr;case 35676:return Vr;case 5124:case 35670:return Wr;case 35667:case 35671:return kr;case 35668:case 35672:return zr;case 35669:case 35673:return Xr;case 5125:return Kr;case 36294:return Yr;case 36295:return qr;case 36296:return Zr;case 35678:case 36198:case 36298:case 36306:case 35682:return $r;case 35679:case 36299:case 36307:return Qr;case 35680:case 36300:case 36308:case 36293:return Jr;case 36289:case 36303:case 36311:case 36292:return jr}}function na(e,t){e.uniform1fv(this.addr,t)}function ta(e,t){const n=Bn(t,this.size,2);e.uniform2fv(this.addr,n)}function ia(e,t){const n=Bn(t,this.size,3);e.uniform3fv(this.addr,n)}function ra(e,t){const n=Bn(t,this.size,4);e.uniform4fv(this.addr,n)}function aa(e,t){const n=Bn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function oa(e,t){const n=Bn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function sa(e,t){const n=Bn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function la(e,t){e.uniform1iv(this.addr,t)}function ca(e,t){e.uniform2iv(this.addr,t)}function fa(e,t){e.uniform3iv(this.addr,t)}function da(e,t){e.uniform4iv(this.addr,t)}function ua(e,t){e.uniform1uiv(this.addr,t)}function pa(e,t){e.uniform2uiv(this.addr,t)}function ha(e,t){e.uniform3uiv(this.addr,t)}function ma(e,t){e.uniform4uiv(this.addr,t)}function _a(e,t,n){const i=this.cache,d=t.length,l=Jn(n,d);nn(i,l)||(e.uniform1iv(this.addr,l),tn(i,l));let u;this.type===e.SAMPLER_2D_SHADOW?u=jn(ei):u=jt;for(let v=0;v!==d;++v)n.setTexture2D(t[v]||u,l[v])}function va(e,t,n){const i=this.cache,d=t.length,l=Jn(n,d);nn(i,l)||(e.uniform1iv(this.addr,l),tn(i,l));for(let u=0;u!==d;++u)n.setTexture3D(t[u]||ii,l[u])}function ga(e,t,n){const i=this.cache,d=t.length,l=Jn(n,d);nn(i,l)||(e.uniform1iv(this.addr,l),tn(i,l));let u;this.type===e.SAMPLER_CUBE_SHADOW?u=jn(ni):u=ri;for(let v=0;v!==d;++v)n.setTextureCube(t[v]||u,l[v])}function Sa(e,t,n){const i=this.cache,d=t.length,l=Jn(n,d);nn(i,l)||(e.uniform1iv(this.addr,l),tn(i,l));for(let u=0;u!==d;++u)n.setTexture2DArray(t[u]||ti,l[u])}function Ea(e){switch(e){case 5126:return na;case 35664:return ta;case 35665:return ia;case 35666:return ra;case 35674:return aa;case 35675:return oa;case 35676:return sa;case 5124:case 35670:return la;case 35667:case 35671:return ca;case 35668:case 35672:return fa;case 35669:case 35673:return da;case 5125:return ua;case 36294:return pa;case 36295:return ha;case 36296:return ma;case 35678:case 36198:case 36298:case 36306:case 35682:return _a;case 35679:case 36299:case 36307:return va;case 35680:case 36300:case 36308:case 36293:return ga;case 36289:case 36303:case 36311:case 36292:return Sa}}var Ma=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ea(t.type)}},Ta=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ea(t.type)}},Ra=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let d=0,l=i.length;d!==l;++d){const u=i[d];u.setValue(e,t[u.id],n)}}},_t=/(\w+)(\])?(\[|\.)?/g;function fi(e,t){e.seq.push(t),e.map[t.id]=t}function Aa(e,t,n){const i=e.name,d=i.length;for(_t.lastIndex=0;;){const l=_t.exec(i),u=_t.lastIndex;let v=l[1];const F=l[2]==="]",b=l[3];if(F&&(v=v|0),b===void 0||b==="["&&u+2===d){fi(n,b===void 0?new Ma(v,e,t):new Ta(v,e,t));break}else{let H=n.map[v];H===void 0&&(H=new Ra(v),fi(n,H)),n=H}}}var et=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const u=e.getActiveUniform(t,l);Aa(u,e.getUniformLocation(t,u.name),this)}const i=[],d=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(l):d.push(l);i.length>0&&(this.seq=i.concat(d))}setValue(e,t,n,i){const d=this.map[t];d!==void 0&&d.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let d=0,l=t.length;d!==l;++d){const u=t[d],v=n[u.id];v.needsUpdate!==!1&&u.setValue(e,v.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,d=e.length;i!==d;++i){const l=e[i];l.id in t&&n.push(l)}return n}};function di(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var xa=37297,Ca=0;function Pa(e,t){const n=e.split(`
`),i=[],d=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=d;u<l;u++){const v=u+1;i.push(`${v===t?">":" "} ${v}: ${n[u]}`)}return i.join(`
`)}var ui=new Ne;function La(e){Qe._getMatrix(ui,Qe.workingColorSpace,e);const t=`mat3( ${ui.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(e)){case Bt:return[t,"LinearTransferOETF"];case lt:return[t,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function pi(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),d=(e.getShaderInfoLog(t)||"").trim();if(i&&d==="")return"";const l=/ERROR: 0:(\d+)/.exec(d);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+d+`

`+Pa(e.getShaderSource(t),u)}else return d}function ba(e,t){const n=La(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Da={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function wa(e,t){const n=Da[t];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var nt=new ke;function Ua(){return Qe.getLuminanceCoefficients(nt),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${nt.x.toFixed(4)}, ${nt.y.toFixed(4)}, ${nt.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Na(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zn).join(`
`)}function Ia(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function ya(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let d=0;d<i;d++){const l=e.getActiveAttrib(t,d),u=l.name;let v=1;l.type===e.FLOAT_MAT2&&(v=2),l.type===e.FLOAT_MAT3&&(v=3),l.type===e.FLOAT_MAT4&&(v=4),n[u]={type:l.type,location:e.getAttribLocation(t,u),locationSize:v}}return n}function zn(e){return e!==""}function hi(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function mi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oa=/^[ \t]*#include +<([\w\d./]+)>/gm;function vt(e){return e.replace(Oa,Fa)}function Fa(e,t){const n=De[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return vt(n)}var Ba=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _i(e){return e.replace(Ba,Ga)}function Ga(e,t,n,i){let d="";for(let l=parseInt(t);l<parseInt(n);l++)d+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return d}function vi(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Ha={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Va(e){return Ha[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wa={302:"ENVMAP_MODE_REFRACTION"};function ka(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Wa[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var za={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Xa(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":za[e.combine]||"ENVMAP_BLENDING_NONE"}function Ka(e,t,n,i){const d=e.getContext(),l=n.defines;let u=n.vertexShader,v=n.fragmentShader;const F=Va(n),b=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",H=ka(n),O=Xa(n),E=Na(n),R=Ia(l),L=d.createProgram();let G,c,s=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(G=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(zn).join(`
`),G.length>0&&(G+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(zn).join(`
`),c.length>0&&(c+=`
`)):(G=[vi(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+H:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+F:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zn).join(`
`),c=[vi(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+b:"",n.envMap?"#define "+H:"",n.envMap?"#define "+O:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+F:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?De.tonemapping_pars_fragment:"",n.toneMapping!==0?wa("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,ba("linearToOutputTexel",n.outputColorSpace),Ua(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zn).join(`
`)),u=vt(u),u=hi(u,n),u=mi(u,n),v=vt(v),v=hi(v,n),v=mi(v,n),u=_i(u),v=_i(v),n.isRawShaderMaterial!==!0&&(s=`#version 300 es
`,G=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+G,c=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=s+G+u,w=s+c+v,h=di(d,d.VERTEX_SHADER,S),A=di(d,d.FRAGMENT_SHADER,w);d.attachShader(L,h),d.attachShader(L,A),n.index0AttributeName!==void 0?d.bindAttribLocation(L,0,n.index0AttributeName):n.hasPositionAttribute===!0&&d.bindAttribLocation(L,0,"position"),d.linkProgram(L);function D(Z){if(e.debug.checkShaderErrors){const U=d.getProgramInfoLog(L)||"",V=d.getShaderInfoLog(h)||"",ee=d.getShaderInfoLog(A)||"",T=U.trim(),K=V.trim(),Q=ee.trim();let B=!0,me=!0;if(d.getProgramParameter(L,d.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(d,L,h,A);else{const k=pi(d,h,"vertex"),q=pi(d,A,"fragment");Ze("WebGLProgram: Shader Error "+d.getError()+" - VALIDATE_STATUS "+d.getProgramParameter(L,d.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+T+`
`+k+`
`+q)}else T!==""?He("WebGLProgram: Program Info Log:",T):(K===""||Q==="")&&(me=!1);me&&(Z.diagnostics={runnable:B,programLog:T,vertexShader:{log:K,prefix:G},fragmentShader:{log:Q,prefix:c}})}d.deleteShader(h),d.deleteShader(A),o=new et(d,L),p=ya(d,L)}let o;this.getUniforms=function(){return o===void 0&&D(this),o};let p;this.getAttributes=function(){return p===void 0&&D(this),p};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=d.getProgramParameter(L,xa)),y},this.destroy=function(){i.releaseStatesOfProgram(this),d.deleteProgram(L),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ca++,this.cacheKey=t,this.usedTimes=1,this.program=L,this.vertexShader=h,this.fragmentShader=A,this}var Ya=0,qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Za(e),t.set(e,n)),n}},Za=class{constructor(e){this.id=Ya++,this.code=e,this.usedTimes=0}};function $a(e){return e===1030||e===37490||e===36285}function Qa(e,t,n,i,d,l){const u=new tr,v=new qa,F=new Set,b=[],H=new Map,O=i.logarithmicDepthBuffer,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(o){return F.add(o),o===0?"uv":`uv${o}`}function L(o,p,y,Z,U,V){const ee=Z.fog,T=U.geometry,K=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?Z.environment:null,Q=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,B=t.get(o.envMap||K,Q),me=E[o.type];let k=i.precision;o.precision!==null&&(k=i.getMaxPrecision(o.precision),k!==o.precision&&He("WebGLProgram.getParameters:",o.precision,"not supported, using",k,"instead."));const q=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,de=q!==void 0?q.length:0;let be=0;T.morphAttributes.position!==void 0&&(be=1),T.morphAttributes.normal!==void 0&&(be=2),T.morphAttributes.color!==void 0&&(be=3);let z,ne,ge,Re;if(me){const pe=Cn[me];z=pe.vertexShader,ne=pe.fragmentShader}else{z=o.vertexShader,ne=o.fragmentShader;const pe=v.getVertexShaderStage(o),Ye=v.getFragmentShaderStage(o);v.update(o,pe,Ye),ge=pe.id,Re=Ye.id}const Pe=e.getRenderTarget(),ue=e.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Ve=U.isBatchedMesh===!0,xe=!!o.map,an=!!o.matcap,un=!!B,on=un&&B.isPMREMTexture===!0,je=!!o.aoMap,hn=!!o.lightMap,En=!!o.bumpMap&&o.wireframe===!1,en=!!o.normalMap,ln=!!o.displacementMap,mn=!!o.emissiveMap,_n=!!o.metalnessMap,Tn=!!o.roughnessMap,M=o.anisotropy>0,Rn=o.clearcoat>0,We=o.diffuseRoughness>0,rn=o.dispersion>0,ce=o.retroreflectivity>0,ze=o.iridescence>0,Te=o.sheen>0,Le=o.transmission>0,cn=M&&!!o.anisotropyMap,f=Rn&&!!o.clearcoatMap,r=Rn&&!!o.clearcoatNormalMap,C=Rn&&!!o.clearcoatRoughnessMap,$=We&&!!o.diffuseRoughnessMap,W=ze&&!!o.iridescenceMap,ie=ze&&!!o.iridescenceThicknessMap,re=Te&&!!o.sheenColorMap,g=Te&&!!o.sheenRoughnessMap,Y=!!o.specularMap,_e=!!o.specularColorMap,m=!!o.specularIntensityMap,I=Le&&!!o.transmissionMap,X=Le&&!!o.thicknessMap,j=!!o.gradientMap,se=!!o.alphaMap,ae=o.alphaTest>0,Ee=!!o.alphaHash,J=!!o.extensions;let Ce=0;o.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Ce=e.toneMapping);const Ae=on?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Ue={shaderID:me,shaderType:o.type,shaderName:o.name,vertexShader:z,fragmentShader:ne,defines:o.defines,customVertexShaderID:ge,customFragmentShaderID:Re,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:k,batching:Ve,batchingColor:Ve&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:Pe===null?e.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:xe,matcap:an,envMap:un,envMapMode:un&&B.mapping,envMapPMREM:on,envMapMaxLod:on?Ae.length-1:null,envMapSize:on?Ae[0].width:null,aoMap:je,lightMap:hn,bumpMap:En,normalMap:en,displacementMap:ln,emissiveMap:mn,normalMapObjectSpace:en&&o.normalMapType===1,normalMapTangentSpace:en&&o.normalMapType===0,packedNormalMap:en&&o.normalMapType===0&&$a(o.normalMap.format),metalnessMap:_n,roughnessMap:Tn,anisotropy:M,anisotropyMap:cn,clearcoat:Rn,clearcoatMap:f,clearcoatNormalMap:r,clearcoatRoughnessMap:C,diffuseRoughness:We,diffuseRoughnessMap:$,dispersion:rn,retroreflection:ce,iridescence:ze,iridescenceMap:W,iridescenceThicknessMap:ie,sheen:Te,sheenColorMap:re,sheenRoughnessMap:g,specularMap:Y,specularColorMap:_e,specularIntensityMap:m,transmission:Le,transmissionMap:I,thicknessMap:X,gradientMap:j,opaque:o.transparent===!1&&o.blending===1&&o.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Ee,combine:o.combine,mapUv:xe&&R(o.map.channel),aoMapUv:je&&R(o.aoMap.channel),lightMapUv:hn&&R(o.lightMap.channel),bumpMapUv:En&&R(o.bumpMap.channel),normalMapUv:en&&R(o.normalMap.channel),displacementMapUv:ln&&R(o.displacementMap.channel),emissiveMapUv:mn&&R(o.emissiveMap.channel),metalnessMapUv:_n&&R(o.metalnessMap.channel),roughnessMapUv:Tn&&R(o.roughnessMap.channel),anisotropyMapUv:cn&&R(o.anisotropyMap.channel),clearcoatMapUv:f&&R(o.clearcoatMap.channel),clearcoatNormalMapUv:r&&R(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&R(o.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:$&&R(o.diffuseRoughnessMap.channel),iridescenceMapUv:W&&R(o.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&R(o.iridescenceThicknessMap.channel),sheenColorMapUv:re&&R(o.sheenColorMap.channel),sheenRoughnessMapUv:g&&R(o.sheenRoughnessMap.channel),specularMapUv:Y&&R(o.specularMap.channel),specularColorMapUv:_e&&R(o.specularColorMap.channel),specularIntensityMapUv:m&&R(o.specularIntensityMap.channel),transmissionMapUv:I&&R(o.transmissionMap.channel),thicknessMapUv:X&&R(o.thicknessMap.channel),alphaMapUv:se&&R(o.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(en||M),vertexNormals:!!T.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!T.attributes.uv&&(xe||se),fog:!!ee,useFog:o.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||T.attributes.normal===void 0&&en===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:O,reversedDepthBuffer:ue,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:be,numSunLights:p.sun.length,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numSunLightShadows:p.sunShadowMap.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numLightProbeGrids:V.filter(pe=>pe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&y.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:xe&&o.map.isVideoTexture===!0&&Qe.getTransfer(o.map.colorSpace)==="srgb",decodeVideoTextureEmissive:mn&&o.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(o.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===2,flipSided:o.side===1,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:J&&o.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J&&o.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return Ue.vertexUv1s=F.has(1),Ue.vertexUv2s=F.has(2),Ue.vertexUv3s=F.has(3),F.clear(),Ue}function G(o){const p=[];if(o.shaderID?p.push(o.shaderID):(p.push(o.customVertexShaderID),p.push(o.customFragmentShaderID)),o.defines!==void 0)for(const y in o.defines)p.push(y),p.push(o.defines[y]);return o.isRawShaderMaterial===!1&&(c(p,o),s(p,o),p.push(e.outputColorSpace)),p.push(o.customProgramCacheKey),p.join()}function c(o,p){o.push(p.precision),o.push(p.outputColorSpace),o.push(p.envMapMode),o.push(p.envMapPMREM),o.push(p.envMapMaxLod),o.push(p.envMapSize),o.push(p.mapUv),o.push(p.alphaMapUv),o.push(p.lightMapUv),o.push(p.aoMapUv),o.push(p.bumpMapUv),o.push(p.normalMapUv),o.push(p.displacementMapUv),o.push(p.emissiveMapUv),o.push(p.metalnessMapUv),o.push(p.roughnessMapUv),o.push(p.anisotropyMapUv),o.push(p.clearcoatMapUv),o.push(p.clearcoatNormalMapUv),o.push(p.clearcoatRoughnessMapUv),o.push(p.diffuseRoughnessMapUv),o.push(p.iridescenceMapUv),o.push(p.iridescenceThicknessMapUv),o.push(p.sheenColorMapUv),o.push(p.sheenRoughnessMapUv),o.push(p.specularMapUv),o.push(p.specularColorMapUv),o.push(p.specularIntensityMapUv),o.push(p.transmissionMapUv),o.push(p.thicknessMapUv),o.push(p.combine),o.push(p.fogExp2),o.push(p.sizeAttenuation),o.push(p.morphTargetsCount),o.push(p.numSunLights),o.push(p.numDirLights),o.push(p.numPointLights),o.push(p.numSpotLights),o.push(p.numSpotLightMaps),o.push(p.numHemiLights),o.push(p.numRectAreaLights),o.push(p.numSunLightShadows),o.push(p.numDirLightShadows),o.push(p.numPointLightShadows),o.push(p.numSpotLightShadows),o.push(p.numSpotLightShadowsWithMaps),o.push(p.numLightProbes),o.push(p.numLightProbeGrids),o.push(p.shadowMapType),o.push(p.toneMapping),o.push(p.numClippingPlanes),o.push(p.numClipIntersection),o.push(p.depthPacking)}function s(o,p){u.disableAll(),p.instancing&&u.enable(0),p.instancingColor&&u.enable(1),p.instancingMorph&&u.enable(2),p.matcap&&u.enable(3),p.envMap&&u.enable(4),p.normalMapObjectSpace&&u.enable(5),p.normalMapTangentSpace&&u.enable(6),p.clearcoat&&u.enable(7),p.iridescence&&u.enable(8),p.alphaTest&&u.enable(9),p.vertexColors&&u.enable(10),p.vertexAlphas&&u.enable(11),p.vertexUv1s&&u.enable(12),p.vertexUv2s&&u.enable(13),p.vertexUv3s&&u.enable(14),p.vertexTangents&&u.enable(15),p.anisotropy&&u.enable(16),p.alphaHash&&u.enable(17),p.batching&&u.enable(18),p.dispersion&&u.enable(19),p.retroreflection&&u.enable(24),p.diffuseRoughness&&u.enable(25),p.batchingColor&&u.enable(20),p.gradientMap&&u.enable(21),p.packedNormalMap&&u.enable(22),p.vertexNormals&&u.enable(23),o.push(u.mask),u.disableAll(),p.fog&&u.enable(0),p.useFog&&u.enable(1),p.flatShading&&u.enable(2),p.logarithmicDepthBuffer&&u.enable(3),p.reversedDepthBuffer&&u.enable(4),p.skinning&&u.enable(5),p.morphTargets&&u.enable(6),p.morphNormals&&u.enable(7),p.morphColors&&u.enable(8),p.premultipliedAlpha&&u.enable(9),p.shadowMapEnabled&&u.enable(10),p.doubleSided&&u.enable(11),p.flipSided&&u.enable(12),p.useDepthPacking&&u.enable(13),p.dithering&&u.enable(14),p.transmission&&u.enable(15),p.sheen&&u.enable(16),p.opaque&&u.enable(17),p.pointsUvs&&u.enable(18),p.decodeVideoTexture&&u.enable(19),p.decodeVideoTextureEmissive&&u.enable(20),p.alphaToCoverage&&u.enable(21),p.numLightProbeGrids>0&&u.enable(22),p.hasPositionAttribute&&u.enable(23),o.push(u.mask)}function S(o){const p=E[o.type];let y;if(p){const Z=Cn[p];y=or.clone(Z.uniforms)}else y=o.uniforms;return y}function w(o,p){let y=H.get(p);return y!==void 0?++y.usedTimes:(y=new Ka(e,p,o,d),b.push(y),H.set(p,y)),y}function h(o){if(--o.usedTimes===0){const p=b.indexOf(o);b[p]=b[b.length-1],b.pop(),H.delete(o.cacheKey),o.destroy()}}function A(o){v.remove(o)}function D(){v.dispose()}return{getParameters:L,getProgramCacheKey:G,getUniforms:S,acquireProgram:w,releaseProgram:h,releaseShaderCache:A,programs:b,dispose:D}}function Ja(){let e=new WeakMap;function t(u){return e.has(u)}function n(u){let v=e.get(u);return v===void 0&&(v={},e.set(u,v)),v}function i(u){e.delete(u)}function d(u,v,F){e.get(u)[v]=F}function l(){e=new WeakMap}return{has:t,get:n,remove:i,update:d,dispose:l}}function ja(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function gi(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Si(){const e=[];let t=0;const n=[],i=[],d=[];function l(){t=0,n.length=0,i.length=0,d.length=0}function u(E){let R=0;return E.isInstancedMesh&&(R+=2),E.isSkinnedMesh&&(R+=1),R}function v(E,R,L,G,c,s){let S=e[t];return S===void 0?(S={id:E.id,object:E,geometry:R,material:L,materialVariant:u(E),groupOrder:G,renderOrder:E.renderOrder,z:c,group:s},e[t]=S):(S.id=E.id,S.object=E,S.geometry=R,S.material=L,S.materialVariant=u(E),S.groupOrder=G,S.renderOrder=E.renderOrder,S.z=c,S.group=s),t++,S}function F(E,R,L,G,c,s,S){S.reversedDepth===!0&&(c=-c);const w=v(E,R,L,G,c,s);L.transmission>0?i.push(w):L.transparent===!0?d.push(w):n.push(w)}function b(E,R,L,G,c,s){const S=v(E,R,L,G,c,s);L.transmission>0?i.unshift(S):L.transparent===!0?d.unshift(S):n.unshift(S)}function H(E,R){n.length>1&&n.sort(E||ja),i.length>1&&i.sort(R||gi),d.length>1&&d.sort(R||gi)}function O(){for(let E=t,R=e.length;E<R;E++){const L=e[E];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:n,transmissive:i,transparent:d,init:l,push:F,unshift:b,finish:O,sort:H}}function eo(){let e=new WeakMap;function t(i,d){const l=e.get(i);let u;return l===void 0?(u=new Si,e.set(i,[u])):d>=l.length?(u=new Si,l.push(u)):u=l[d],u}function n(){e=new WeakMap}return{get:t,dispose:n}}function no(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new ke,color:new $e};break;case"SpotLight":n={position:new ke,direction:new ke,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ke,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ke,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new ke,halfWidth:new ke,halfHeight:new ke}}return e[t.id]=n,n}}}function to(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gn};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gn};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gn,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var io=0;function ro(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ao(e){const t=new no,n=to(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let b=0;b<9;b++)i.probe.push(new ke);const d=new ke,l=new Fn,u=new Fn;function v(b){let H=0,O=0,E=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let R=0,L=0,G=0,c=0,s=0,S=0,w=0,h=0,A=0,D=0,o=0,p=0,y=0,Z=0;b.sort(ro);for(let V=0,ee=b.length;V<ee;V++){const T=b[V],K=T.color,Q=T.intensity,B=T.distance;let me=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===1030?me=T.shadow.map.texture:me=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)H+=K.r*Q,O+=K.g*Q,E+=K.b*Q;else if(T.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(T.sh.coefficients[k],Q);Z++}else if(T.isSunLight){const k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,de=n.get(T);de.shadowIntensity=q.intensity,de.shadowBias=q.bias,de.shadowNormalBias=q.normalBias,de.shadowRadius=q.radius,de.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[L]=de,i.sunShadowMap[L]=me;const be=q.getViewportCount();for(let z=0;z<be;z++)i.sunShadowMatrix[G+z]=q.getMatrix(z),i.sunShadowCascade[G+z]=q._cascadeData[z];G+=be,L++}i.sun[R]=k,R++}else if(T.isDirectionalLight){const k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,de=n.get(T);de.shadowIntensity=q.intensity,de.shadowBias=q.bias,de.shadowNormalBias=q.normalBias,de.shadowRadius=q.radius,de.shadowMapSize=q.mapSize,i.directionalShadow[c]=de,i.directionalShadowMap[c]=me,i.directionalShadowMatrix[c]=T.shadow.matrix,A++}i.directional[c]=k,c++}else if(T.isSpotLight){const k=t.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(K).multiplyScalar(Q),k.distance=B,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,i.spot[S]=k;const q=T.shadow;if(T.map&&(i.spotLightMap[p]=T.map,p++,q.updateMatrices(T),T.castShadow&&y++),i.spotLightMatrix[S]=q.matrix,T.castShadow){const de=n.get(T);de.shadowIntensity=q.intensity,de.shadowBias=q.bias,de.shadowNormalBias=q.normalBias,de.shadowRadius=q.radius,de.shadowMapSize=q.mapSize,i.spotShadow[S]=de,i.spotShadowMap[S]=me,o++}S++}else if(T.isRectAreaLight){const k=t.get(T);k.color.copy(K).multiplyScalar(Q),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),i.rectArea[w]=k,w++}else if(T.isPointLight){const k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){const q=T.shadow,de=n.get(T);de.shadowIntensity=q.intensity,de.shadowBias=q.bias,de.shadowNormalBias=q.normalBias,de.shadowRadius=q.radius,de.shadowMapSize=q.mapSize,de.shadowCameraNear=q.camera.near,de.shadowCameraFar=q.camera.far,i.pointShadow[s]=de,i.pointShadowMap[s]=me,i.pointShadowMatrix[s]=T.shadow.matrix,D++}i.point[s]=k,s++}else if(T.isHemisphereLight){const k=t.get(T);k.skyColor.copy(T.color).multiplyScalar(Q),k.groundColor.copy(T.groundColor).multiplyScalar(Q),i.hemi[h]=k,h++}}w>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=H,i.ambient[1]=O,i.ambient[2]=E;const U=i.hash;(U.sunLength!==R||U.directionalLength!==c||U.pointLength!==s||U.spotLength!==S||U.rectAreaLength!==w||U.hemiLength!==h||U.numSunShadows!==L||U.numDirectionalShadows!==A||U.numPointShadows!==D||U.numSpotShadows!==o||U.numSpotMaps!==p||U.numLightProbes!==Z)&&(i.sun.length=R,i.directional.length=c,i.spot.length=S,i.rectArea.length=w,i.point.length=s,i.hemi.length=h,i.sunShadow.length=L,i.sunShadowMap.length=L,i.sunShadowMatrix.length=G,i.sunShadowCascade.length=G,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=o,i.spotShadowMap.length=o,i.spotLightMatrix.length=o+p-y,i.spotLightMap.length=p,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=Z,U.sunLength=R,U.directionalLength=c,U.pointLength=s,U.spotLength=S,U.rectAreaLength=w,U.hemiLength=h,U.numSunShadows=L,U.numDirectionalShadows=A,U.numPointShadows=D,U.numSpotShadows=o,U.numSpotMaps=p,U.numLightProbes=Z,i.version=io++)}function F(b,H){let O=0,E=0,R=0,L=0,G=0,c=0;const s=H.matrixWorldInverse;for(let S=0,w=b.length;S<w;S++){const h=b[S];if(h.isSunLight){const A=i.sun[O];A.direction.setFromMatrixPosition(h.matrixWorld),A.direction.transformDirection(s),O++}else if(h.isDirectionalLight){const A=i.directional[E];A.direction.setFromMatrixPosition(h.matrixWorld),d.setFromMatrixPosition(h.target.matrixWorld),A.direction.sub(d),A.direction.transformDirection(s),E++}else if(h.isSpotLight){const A=i.spot[L];A.position.setFromMatrixPosition(h.matrixWorld),A.position.applyMatrix4(s),A.direction.setFromMatrixPosition(h.matrixWorld),d.setFromMatrixPosition(h.target.matrixWorld),A.direction.sub(d),A.direction.transformDirection(s),L++}else if(h.isRectAreaLight){const A=i.rectArea[G];A.position.setFromMatrixPosition(h.matrixWorld),A.position.applyMatrix4(s),u.identity(),l.copy(h.matrixWorld),l.premultiply(s),u.extractRotation(l),A.halfWidth.set(h.width*.5,0,0),A.halfHeight.set(0,h.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),G++}else if(h.isPointLight){const A=i.point[R];A.position.setFromMatrixPosition(h.matrixWorld),A.position.applyMatrix4(s),R++}else if(h.isHemisphereLight){const A=i.hemi[c];A.direction.setFromMatrixPosition(h.matrixWorld),A.direction.transformDirection(s),c++}}}return{setup:v,setupView:F,state:i}}function Ei(e){const t=new ao(e),n=[],i=[],d=[];function l(O){H.camera=O,n.length=0,i.length=0,d.length=0}function u(O){O.isLightProbeGrid?d.push(O):n.push(O)}function v(O){i.push(O)}function F(){t.setup(n),d.sort((O,E)=>O.priority-E.priority||O.id-E.id)}function b(O){t.setupView(n,O)}const H={lightsArray:n,shadowsArray:i,lightProbeGridArray:d,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:H,setupLights:F,setupLightsView:b,pushLight:u,pushShadow:v}}function oo(e){let t=new WeakMap;function n(d,l=0){const u=t.get(d);let v;return u===void 0?(v=new Ei(e),t.set(d,[v])):l>=u.length?(v=new Ei(e),u.push(v)):v=u[l],v}function i(){t=new WeakMap}return{get:n,dispose:i}}var so=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lo=`uniform sampler2D shadow_pass;
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
}`,co=[new ke(1,0,0),new ke(-1,0,0),new ke(0,1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1)],fo=[new ke(0,-1,0),new ke(0,-1,0),new ke(0,0,1),new ke(0,0,-1),new ke(0,-1,0),new ke(0,-1,0)],Mi=new Fn,Xn=new ke,gt=new ke;function uo(e,t,n){let i=new yt;const d=new gn,l=new gn,u=new Sn,v=new cr,F=new qi,b={},H=n.maxTextureSize,O={0:1,1:0,2:2},E=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gn},radius:{value:4}},vertexShader:so,fragmentShader:lo}),R=E.clone();R.defines.HORIZONTAL_PASS=1;const L=new Vt;L.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const G=new yn(L,E),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let s=this.type;this.render=function(D,o,p){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||D.length===0)return;this.type===2&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const y=e.getRenderTarget(),Z=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),V=e.state;V.setBlending(0),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ee=s!==this.type;ee&&o.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(K=>K.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,K=D.length;T<K;T++){const Q=D[T],B=Q.shadow;if(B===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;d.copy(B.mapSize);const me=B.getFrameExtents();d.multiply(me),l.copy(B.mapSize),(d.x>H||d.y>H)&&(d.x>H&&(l.x=Math.floor(H/me.x),d.x=l.x*me.x,B.mapSize.x=l.x),d.y>H&&(l.y=Math.floor(H/me.y),d.y=l.y*me.y,B.mapSize.y=l.y));const k=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=k,B.map===null||ee===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===3){if(Q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new xn(d.x,d.y,{format:st,type:In,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),B.map.texture.name=Q.name+".shadowMap",B.map.depthTexture=new Wn(d.x,d.y,Nt),B.map.depthTexture.name=Q.name+".shadowMapDepth",B.map.depthTexture.format=at,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Vn,B.map.depthTexture.magFilter=Vn}else Q.isPointLight?(B.map=new Qn(d.x),B.map.depthTexture=new Ft(d.x,Zn)):(B.map=new xn(d.x,d.y),B.map.depthTexture=new Wn(d.x,d.y,Zn)),B.map.depthTexture.name=Q.name+".shadowMap",B.map.depthTexture.format=at,this.type===1?(B.map.depthTexture.compareFunction=k?518:515,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Vn,B.map.depthTexture.magFilter=Vn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==d.x||B.map.height!==d.y)&&B.map.setSize(d.x,d.y);const q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Q.isPointLight!==!0&&B.updateMatrices(Q,p);const de=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:p.layers;for(let be=0;be<q;be++){const z=B.getCamera(be);if(Q.isPointLight){const ne=B.camera,ge=B.matrix,Re=Q.distance||ne.far;Re!==ne.far&&(ne.far=Re,ne.updateProjectionMatrix()),Xn.setFromMatrixPosition(Q.matrixWorld),ne.position.copy(Xn),gt.copy(ne.position),gt.add(co[be]),ne.up.copy(fo[be]),ne.lookAt(gt),ne.updateMatrixWorld(),ge.makeTranslation(-Xn.x,-Xn.y,-Xn.z),Mi.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Mi,ne.coordinateSystem,ne.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,be),e.clear();else{be===0&&(e.setRenderTarget(B.map),e.clear());const ne=B.getViewport(be);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),V.viewport(u)}i=B.getFrustum(be),h(o,p,z,Q,de,this.type)}B.isPointLightShadow!==!0&&this.type===3&&S(B,p),B.needsUpdate=!1}s=this.type,c.needsUpdate=!1,e.setRenderTarget(y,Z,U)};function S(D,o){const p=t.update(G);E.defines.VSM_SAMPLES!==D.blurSamples&&(E.defines.VSM_SAMPLES=D.blurSamples,R.defines.VSM_SAMPLES=D.blurSamples,E.needsUpdate=!0,R.needsUpdate=!0),D.mapPass===null?D.mapPass=new xn(d.x,d.y,{format:st,type:In}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),E.uniforms.shadow_pass.value=D.map.depthTexture,E.uniforms.resolution.value.set(D.map.width,D.map.height),E.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(o,null,p,E,G,null),R.uniforms.shadow_pass.value=D.mapPass.texture,R.uniforms.resolution.value.set(D.map.width,D.map.height),R.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(o,null,p,R,G,null)}function w(D,o,p,y){let Z=null;const U=p.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)Z=U;else if(Z=p.isPointLight===!0?F:v,e.localClippingEnabled&&o.clipShadows===!0&&Array.isArray(o.clippingPlanes)&&o.clippingPlanes.length!==0||o.displacementMap&&o.displacementScale!==0||o.alphaMap&&o.alphaTest>0||o.map&&o.alphaTest>0||o.alphaToCoverage===!0){const V=Z.uuid,ee=o.uuid;let T=b[V];T===void 0&&(T={},b[V]=T);let K=T[ee];K===void 0&&(K=Z.clone(),T[ee]=K,o.addEventListener("dispose",A)),Z=K}if(Z.visible=o.visible,Z.wireframe=o.wireframe,y===3?Z.side=o.shadowSide!==null?o.shadowSide:o.side:Z.side=o.shadowSide!==null?o.shadowSide:O[o.side],Z.alphaMap=o.alphaMap,Z.alphaTest=o.alphaToCoverage===!0?.5:o.alphaTest,Z.map=o.map,Z.clipShadows=o.clipShadows,Z.clippingPlanes=o.clippingPlanes,Z.clipIntersection=o.clipIntersection,Z.displacementMap=o.displacementMap,Z.displacementScale=o.displacementScale,Z.displacementBias=o.displacementBias,Z.wireframeLinewidth=o.wireframeLinewidth,Z.linewidth=o.linewidth,p.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const V=e.properties.get(Z);V.light=p}return Z}function h(D,o,p,y,Z,U){if(D.visible===!1)return;if(D.layers.test(Z)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&U===3)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,D.matrixWorld);const ee=t.update(D),T=D.material;if(Array.isArray(T)){const K=ee.groups;for(let Q=0,B=K.length;Q<B;Q++){const me=K[Q],k=T[me.materialIndex];if(k&&k.visible){const q=w(D,k,y,U);D.onBeforeShadow(e,D,o,p,ee,q,me),e.renderBufferDirect(p,null,ee,q,D,me),D.onAfterShadow(e,D,o,p,ee,q,me)}}}else if(T.visible){const K=w(D,T,y,U);D.onBeforeShadow(e,D,o,p,ee,K,null),e.renderBufferDirect(p,null,ee,K,D,null),D.onAfterShadow(e,D,o,p,ee,K,null)}}const V=D.children;for(let ee=0,T=V.length;ee<T;ee++)h(V[ee],o,p,y,Z,U)}function A(D){D.target.removeEventListener("dispose",A);for(const o in b){const p=b[o],y=D.target.uuid;y in p&&(p[y].dispose(),delete p[y])}}}function po(e,t){function n(){let m=!1;const I=new Sn;let X=null;const j=new Sn(0,0,0,0);return{setMask:function(se){X!==se&&!m&&(e.colorMask(se,se,se,se),X=se)},setLocked:function(se){m=se},setClear:function(se,ae,Ee,J,Ce){Ce===!0&&(se*=J,ae*=J,Ee*=J),I.set(se,ae,Ee,J),j.equals(I)===!1&&(e.clearColor(se,ae,Ee,J),j.copy(I))},reset:function(){m=!1,X=null,j.set(-1,0,0,0)}}}function i(){let m=!1,I=!1,X=null,j=null,se=null;return{setReversed:function(ae){if(I!==ae){const Ee=t.get("EXT_clip_control");ae?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),I=ae;const J=se;se=null,this.setClear(J)}},getReversed:function(){return I},setTest:function(ae){ae?ue(e.DEPTH_TEST):Oe(e.DEPTH_TEST)},setMask:function(ae){X!==ae&&!m&&(e.depthMask(ae),X=ae)},setFunc:function(ae){if(I&&(ae=Ii[ae]),j!==ae){switch(ae){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}j=ae}},setLocked:function(ae){m=ae},setClear:function(ae){se!==ae&&(se=ae,I&&(ae=1-ae),e.clearDepth(ae))},reset:function(){m=!1,X=null,j=null,se=null,I=!1}}}function d(){let m=!1,I=null,X=null,j=null,se=null,ae=null,Ee=null,J=null,Ce=null;return{setTest:function(Ae){m||(Ae?ue(e.STENCIL_TEST):Oe(e.STENCIL_TEST))},setMask:function(Ae){I!==Ae&&!m&&(e.stencilMask(Ae),I=Ae)},setFunc:function(Ae,Ue,pe){(X!==Ae||j!==Ue||se!==pe)&&(e.stencilFunc(Ae,Ue,pe),X=Ae,j=Ue,se=pe)},setOp:function(Ae,Ue,pe){(ae!==Ae||Ee!==Ue||J!==pe)&&(e.stencilOp(Ae,Ue,pe),ae=Ae,Ee=Ue,J=pe)},setLocked:function(Ae){m=Ae},setClear:function(Ae){Ce!==Ae&&(e.clearStencil(Ae),Ce=Ae)},reset:function(){m=!1,I=null,X=null,j=null,se=null,ae=null,Ee=null,J=null,Ce=null}}}const l=new n,u=new i,v=new d;let F={};const b=new WeakMap;let H={},O={},E={},R=new WeakMap,L=[],G=null,c=!1,s=null,S=null,w=null,h=null,A=null,D=null,o=null,p=new $e(0,0,0),y=0,Z=!1,U=null,V=null,ee=null,T=null,K=null;const Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,me=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=me>=1):k.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=me>=2);let q=null,de={};const be=e.getParameter(e.SCISSOR_BOX),z=e.getParameter(e.VIEWPORT),ne=new Sn().fromArray(be),ge=new Sn().fromArray(z);function Re(m,I,X,j){const se=new Uint8Array(4),ae=e.createTexture();e.bindTexture(m,ae),e.texParameteri(m,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(m,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ee=0;Ee<X;Ee++)m===e.TEXTURE_3D||m===e.TEXTURE_2D_ARRAY?e.texImage3D(I,0,e.RGBA,1,1,j,0,e.RGBA,e.UNSIGNED_BYTE,se):e.texImage2D(I+Ee,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,se);return ae}const Pe={};Pe[e.TEXTURE_2D]=Re(e.TEXTURE_2D,e.TEXTURE_2D,1),Pe[e.TEXTURE_CUBE_MAP]=Re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[e.TEXTURE_2D_ARRAY]=Re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Pe[e.TEXTURE_3D]=Re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),v.setClear(0),ue(e.DEPTH_TEST),u.setFunc(3),En(!1),en(1),ue(e.CULL_FACE),je(0);function ue(m){H[m]!==!0&&(e.enable(m),H[m]=!0)}function Oe(m){H[m]!==!1&&(e.disable(m),H[m]=!1)}function Ve(m,I){return E[m]!==I?(e.bindFramebuffer(m,I),E[m]=I,m===e.DRAW_FRAMEBUFFER&&(E[e.FRAMEBUFFER]=I),m===e.FRAMEBUFFER&&(E[e.DRAW_FRAMEBUFFER]=I),!0):!1}function xe(m,I){let X=L,j=!1;if(m){X=R.get(I),X===void 0&&(X=[],R.set(I,X));const se=m.textures;if(X.length!==se.length||X[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Ee=se.length;ae<Ee;ae++)X[ae]=e.COLOR_ATTACHMENT0+ae;X.length=se.length,j=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,j=!0);j&&e.drawBuffers(X)}function an(m){return G!==m?(e.useProgram(m),G=m,!0):!1}const un={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};un[103]=e.MIN,un[104]=e.MAX;const on={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function je(m,I,X,j,se,ae,Ee,J,Ce,Ae){if(m===0){c===!0&&(Oe(e.BLEND),c=!1);return}if(c===!1&&(ue(e.BLEND),c=!0),m!==5){if(m!==s||Ae!==Z){if((S!==100||A!==100)&&(e.blendEquation(e.FUNC_ADD),S=100,A=100),Ae)switch(m){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ze("WebGLState: Invalid blending: ",m)}else switch(m){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",m)}w=null,h=null,D=null,o=null,p.set(0,0,0),y=0,s=m,Z=Ae}return}se=se||I,ae=ae||X,Ee=Ee||j,(I!==S||se!==A)&&(e.blendEquationSeparate(un[I],un[se]),S=I,A=se),(X!==w||j!==h||ae!==D||Ee!==o)&&(e.blendFuncSeparate(on[X],on[j],on[ae],on[Ee]),w=X,h=j,D=ae,o=Ee),(J.equals(p)===!1||Ce!==y)&&(e.blendColor(J.r,J.g,J.b,Ce),p.copy(J),y=Ce),s=m,Z=!1}function hn(m,I){m.side===2?Oe(e.CULL_FACE):ue(e.CULL_FACE);let X=m.side===1;I&&(X=!X),En(X),m.blending===1&&m.transparent===!1?je(0):je(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),u.setFunc(m.depthFunc),u.setTest(m.depthTest),u.setMask(m.depthWrite),l.setMask(m.colorWrite);const j=m.stencilWrite;v.setTest(j),j&&(v.setMask(m.stencilWriteMask),v.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),v.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),mn(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):Oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function En(m){U!==m&&(m?e.frontFace(e.CW):e.frontFace(e.CCW),U=m)}function en(m){m!==0?(ue(e.CULL_FACE),m!==V&&(m===1?e.cullFace(e.BACK):m===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Oe(e.CULL_FACE),V=m}function ln(m){m!==ee&&(B&&e.lineWidth(m),ee=m)}function mn(m,I,X){m?(ue(e.POLYGON_OFFSET_FILL),(T!==I||K!==X)&&(T=I,K=X,u.getReversed()&&(I=-I,X=-X),e.polygonOffset(I,X))):Oe(e.POLYGON_OFFSET_FILL)}function _n(m){m?ue(e.SCISSOR_TEST):Oe(e.SCISSOR_TEST)}function Tn(m){m===void 0&&(m=e.TEXTURE0+Q-1),q!==m&&(e.activeTexture(m),q=m)}function M(m,I,X){X===void 0&&(q===null?X=e.TEXTURE0+Q-1:X=q);let j=de[X];j===void 0&&(j={type:void 0,texture:void 0},de[X]=j),(j.type!==m||j.texture!==I)&&(q!==X&&(e.activeTexture(X),q=X),e.bindTexture(m,I||Pe[m]),j.type=m,j.texture=I)}function Rn(){const m=de[q];m!==void 0&&m.type!==void 0&&(e.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function We(){try{e.compressedTexImage2D(...arguments)}catch(m){Ze("WebGLState:",m)}}function rn(){try{e.compressedTexImage3D(...arguments)}catch(m){Ze("WebGLState:",m)}}function ce(){try{e.texSubImage2D(...arguments)}catch(m){Ze("WebGLState:",m)}}function ze(){try{e.texSubImage3D(...arguments)}catch(m){Ze("WebGLState:",m)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(m){Ze("WebGLState:",m)}}function Le(){try{e.compressedTexSubImage3D(...arguments)}catch(m){Ze("WebGLState:",m)}}function cn(){try{e.texStorage2D(...arguments)}catch(m){Ze("WebGLState:",m)}}function f(){try{e.texStorage3D(...arguments)}catch(m){Ze("WebGLState:",m)}}function r(){try{e.texImage2D(...arguments)}catch(m){Ze("WebGLState:",m)}}function C(){try{e.texImage3D(...arguments)}catch(m){Ze("WebGLState:",m)}}function $(m){return O[m]!==void 0?O[m]:e.getParameter(m)}function W(m,I){O[m]!==I&&(e.pixelStorei(m,I),O[m]=I)}function ie(m){ne.equals(m)===!1&&(e.scissor(m.x,m.y,m.z,m.w),ne.copy(m))}function re(m){ge.equals(m)===!1&&(e.viewport(m.x,m.y,m.z,m.w),ge.copy(m))}function g(m,I){let X=b.get(I);X===void 0&&(X=new WeakMap,b.set(I,X));let j=X.get(m);j===void 0&&(j=e.getUniformBlockIndex(I,m.name),e.uniformBlockBinding(I,j,j),X.set(m,j))}function Y(m,I,X){const j=b.get(I).get(m);F[j]!==X&&(e.bindBufferBase(e.UNIFORM_BUFFER,j,X),F[j]=X)}function _e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),u.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),H={},O={},q=null,de={},E={},F={},R=new WeakMap,L=[],G=null,c=!1,s=null,S=null,w=null,h=null,A=null,D=null,o=null,p=new $e(0,0,0),y=0,Z=!1,U=null,V=null,ee=null,T=null,K=null,ne.set(0,0,e.canvas.width,e.canvas.height),ge.set(0,0,e.canvas.width,e.canvas.height),l.reset(),u.reset(),v.reset()}return{buffers:{color:l,depth:u,stencil:v},enable:ue,disable:Oe,bindFramebuffer:Ve,drawBuffers:xe,useProgram:an,setBlending:je,setMaterial:hn,setFlipSided:En,setCullFace:en,setLineWidth:ln,setPolygonOffset:mn,setScissorTest:_n,activeTexture:Tn,bindTexture:M,unbindTexture:Rn,compressedTexImage2D:We,compressedTexImage3D:rn,texImage2D:r,texImage3D:C,pixelStorei:W,getParameter:$,updateUBOMapping:g,uniformBlockBinding:Y,texStorage2D:cn,texStorage3D:f,texSubImage2D:ce,texSubImage3D:ze,compressedTexSubImage2D:Te,compressedTexSubImage3D:Le,scissor:ie,viewport:re,reset:_e}}function ho(e,t,n,i,d,l,u){const v=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,F=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new gn,H=new WeakMap,O=new Set;let E;const R=new WeakMap,L=new Set,G=new FinalizationRegistry(f=>L.delete(f));let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function s(f,r){return c?new OffscreenCanvas(f,r):Ni("canvas")}function S(f,r,C){let $=1;const W=cn(f);if((W.width>C||W.height>C)&&($=C/Math.max(W.width,W.height)),$<1)if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap||typeof VideoFrame<"u"&&f instanceof VideoFrame){const ie=Math.floor($*W.width),re=Math.floor($*W.height);E===void 0&&(E=s(ie,re));const g=r?s(ie,re):E;return g.width=ie,g.height=re,g.getContext("2d").drawImage(f,0,0,ie,re),He("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ie+"x"+re+")."),g}else return"data"in f&&He("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),f;return f}function w(f){return f.generateMipmaps}function h(f){e.generateMipmap(f)}function A(f){return f.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:f.isWebGL3DRenderTarget?e.TEXTURE_3D:f.isWebGLArrayRenderTarget||f.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function D(f,r,C,$,W,ie=!1){if(f!==null){if(e[f]!==void 0)return e[f];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+f+"'")}let re;$&&(re=t.get("EXT_texture_norm16"),re||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let g=r;if(r===e.RED&&(C===e.FLOAT&&(g=e.R32F),C===e.HALF_FLOAT&&(g=e.R16F),C===e.UNSIGNED_BYTE&&(g=e.R8),C===e.UNSIGNED_SHORT&&re&&(g=re.R16_EXT),C===e.SHORT&&re&&(g=re.R16_SNORM_EXT)),r===e.RED_INTEGER&&(C===e.UNSIGNED_BYTE&&(g=e.R8UI),C===e.UNSIGNED_SHORT&&(g=e.R16UI),C===e.UNSIGNED_INT&&(g=e.R32UI),C===e.BYTE&&(g=e.R8I),C===e.SHORT&&(g=e.R16I),C===e.INT&&(g=e.R32I)),r===e.RG&&(C===e.FLOAT&&(g=e.RG32F),C===e.HALF_FLOAT&&(g=e.RG16F),C===e.UNSIGNED_BYTE&&(g=e.RG8),C===e.UNSIGNED_SHORT&&re&&(g=re.RG16_EXT),C===e.SHORT&&re&&(g=re.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(C===e.UNSIGNED_BYTE&&(g=e.RG8UI),C===e.UNSIGNED_SHORT&&(g=e.RG16UI),C===e.UNSIGNED_INT&&(g=e.RG32UI),C===e.BYTE&&(g=e.RG8I),C===e.SHORT&&(g=e.RG16I),C===e.INT&&(g=e.RG32I)),r===e.RGB_INTEGER&&(C===e.UNSIGNED_BYTE&&(g=e.RGB8UI),C===e.UNSIGNED_SHORT&&(g=e.RGB16UI),C===e.UNSIGNED_INT&&(g=e.RGB32UI),C===e.BYTE&&(g=e.RGB8I),C===e.SHORT&&(g=e.RGB16I),C===e.INT&&(g=e.RGB32I)),r===e.RGBA_INTEGER&&(C===e.UNSIGNED_BYTE&&(g=e.RGBA8UI),C===e.UNSIGNED_SHORT&&(g=e.RGBA16UI),C===e.UNSIGNED_INT&&(g=e.RGBA32UI),C===e.BYTE&&(g=e.RGBA8I),C===e.SHORT&&(g=e.RGBA16I),C===e.INT&&(g=e.RGBA32I)),r===e.RGB&&(C===e.UNSIGNED_SHORT&&re&&(g=re.RGB16_EXT),C===e.SHORT&&re&&(g=re.RGB16_SNORM_EXT),C===e.UNSIGNED_INT_5_9_9_9_REV&&(g=e.RGB9_E5),C===e.UNSIGNED_INT_10F_11F_11F_REV&&(g=e.R11F_G11F_B10F)),r===e.RGBA){const Y=ie?Bt:Qe.getTransfer(W);C===e.FLOAT&&(g=e.RGBA32F),C===e.HALF_FLOAT&&(g=e.RGBA16F),C===e.UNSIGNED_BYTE&&(g=Y==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),C===e.UNSIGNED_SHORT&&re&&(g=re.RGBA16_EXT),C===e.SHORT&&re&&(g=re.RGBA16_SNORM_EXT),C===e.UNSIGNED_SHORT_4_4_4_4&&(g=e.RGBA4),C===e.UNSIGNED_SHORT_5_5_5_1&&(g=e.RGB5_A1)}return(g===e.R16F||g===e.R32F||g===e.RG16F||g===e.RG32F||g===e.RGBA16F||g===e.RGBA32F)&&t.get("EXT_color_buffer_float"),g}function o(f,r){let C;return f?r===null||r===1014||r===1020?C=e.DEPTH24_STENCIL8:r===1015?C=e.DEPTH32F_STENCIL8:r===1012&&(C=e.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===1014||r===1020?C=e.DEPTH_COMPONENT24:r===1015?C=e.DEPTH_COMPONENT32F:r===1012&&(C=e.DEPTH_COMPONENT16),C}function p(f,r){return w(f)===!0||f.isFramebufferTexture&&f.minFilter!==1003&&f.minFilter!==1006?Math.log2(Math.max(r.width,r.height))+1:f.mipmaps.length>0?f.mipmaps.length:f.isCompressedTexture&&Array.isArray(f.image)?r.mipmaps.length:1}function y(f){const r=new WeakRef(f);i.get(f).__ref=r,L.add(r),G.register(f,r,r)}function Z(f){const r=i.get(f).__ref;r!==void 0&&(L.delete(r),G.unregister(r))}function U(f){ee(f.target)}function V(f){T(f.target)}function ee(f){f.removeEventListener("dispose",U),Z(f),Q(f),f.isVideoTexture&&H.delete(f),f.isHTMLTexture&&O.delete(f)}function T(f){f.removeEventListener("dispose",V),Z(f),me(f)}function K(){for(const f of L){const r=f.deref();r!==void 0&&(r.isRenderTarget===!0?T(r):ee(r))}L.clear(),O.clear()}function Q(f){const r=i.get(f);if(r.__webglInit===void 0)return;const C=f.source,$=R.get(C);if($){const W=$[r.__cacheKey];W.usedTimes--,W.usedTimes===0&&B(f),Object.keys($).length===0&&R.delete(C)}i.remove(f)}function B(f){const r=i.get(f);e.deleteTexture(r.__webglTexture);const C=f.source,$=R.get(C);delete $[r.__cacheKey],u.memory.textures--}function me(f){const r=i.get(f);r.__depthDisposeCallback&&r.__depthDisposeCallback();const C=f.depthTexture;if(C&&C.renderTarget===f&&ee(C),f.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(r.__webglFramebuffer[W]))for(let ie=0;ie<r.__webglFramebuffer[W].length;ie++)e.deleteFramebuffer(r.__webglFramebuffer[W][ie]);else e.deleteFramebuffer(r.__webglFramebuffer[W]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[W])}else{if(Array.isArray(r.__webglFramebuffer))for(let W=0;W<r.__webglFramebuffer.length;W++)e.deleteFramebuffer(r.__webglFramebuffer[W]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let W=0;W<r.__webglColorRenderbuffer.length;W++)r.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[W]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const $=f.textures;for(let W=0,ie=$.length;W<ie;W++){const re=i.get($[W]);re.__webglTexture&&(e.deleteTexture(re.__webglTexture),u.memory.textures--),i.remove($[W])}i.remove(f)}let k=0;function q(){k=0}function de(){return k}function be(f){k=f}function z(){const f=k;return f>=d.maxTextures&&He("WebGLTextures: Trying to use "+(f+1)+" texture units while this GPU supports only "+d.maxTextures),k+=1,f}function ne(f){const r=[];return r.push(f.wrapS),r.push(f.wrapT),r.push(f.wrapR||0),r.push(f.magFilter),r.push(f.minFilter),r.push(f.anisotropy),r.push(f.internalFormat),r.push(f.format),r.push(f.type),r.push(f.generateMipmaps),r.push(f.mipmapsAutoUpdate),r.push(f.premultiplyAlpha),r.push(f.flipY),r.push(f.unpackAlignment),r.push(f.colorSpace),r.join()}function ge(f,r){const C=i.get(f);if(f.isVideoTexture&&Te(f),f.isRenderTargetTexture===!1&&f.isExternalTexture!==!0&&f.version>0&&C.__version!==f.version){const $=f.image;if($===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{hn(C,f,r);return}}else f.isExternalTexture&&(C.__webglTexture=f.sourceTexture?f.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,C.__webglTexture,e.TEXTURE0+r)}function Re(f,r){const C=i.get(f);if(f.isRenderTargetTexture===!1&&f.version>0&&C.__version!==f.version){hn(C,f,r);return}else f.isExternalTexture&&(C.__webglTexture=f.sourceTexture?f.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,C.__webglTexture,e.TEXTURE0+r)}function Pe(f,r){const C=i.get(f);if(f.isRenderTargetTexture===!1&&f.version>0&&C.__version!==f.version){hn(C,f,r);return}n.bindTexture(e.TEXTURE_3D,C.__webglTexture,e.TEXTURE0+r)}function ue(f,r){const C=i.get(f);if(f.version>0&&C.__version!==f.version){En(C,f,r);return}n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+r)}const Oe={[ki]:e.REPEAT,[ct]:e.CLAMP_TO_EDGE,[wi]:e.MIRRORED_REPEAT},Ve={[Vn]:e.NEAREST,[Vi]:e.NEAREST_MIPMAP_NEAREST,[Fi]:e.NEAREST_MIPMAP_LINEAR,[Dn]:e.LINEAR,[sr]:e.LINEAR_MIPMAP_NEAREST,[ft]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function an(f,r){if(r.type===1015&&t.has("OES_texture_float_linear")===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(f,e.TEXTURE_WRAP_S,Oe[r.wrapS]),e.texParameteri(f,e.TEXTURE_WRAP_T,Oe[r.wrapT]),(f===e.TEXTURE_3D||f===e.TEXTURE_2D_ARRAY)&&e.texParameteri(f,e.TEXTURE_WRAP_R,Oe[r.wrapR]),e.texParameteri(f,e.TEXTURE_MAG_FILTER,Ve[r.magFilter]),e.texParameteri(f,e.TEXTURE_MIN_FILTER,Ve[r.minFilter]),r.compareFunction&&(e.texParameteri(f,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(f,e.TEXTURE_COMPARE_FUNC,xe[r.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");e.texParameterf(f,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,d.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function un(f,r){let C=!1;f.__webglInit===void 0&&(f.__webglInit=!0,r.addEventListener("dispose",U),y(r));const $=r.source;let W=R.get($);W===void 0&&(W={},R.set($,W));const ie=ne(r);if(ie!==f.__cacheKey){W[ie]===void 0&&(W[ie]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,C=!0),W[ie].usedTimes++;const re=W[f.__cacheKey];re!==void 0&&(W[f.__cacheKey].usedTimes--,re.usedTimes===0&&B(r)),f.__cacheKey=ie,f.__webglTexture=W[ie].texture}return C}function on(f,r,C){return Math.floor(Math.floor(f/C)/r)}function je(f,r,C,$){const ie=f.updateRanges;if(ie.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,C,$,r.data);else{ie.sort((m,I)=>m.start-I.start);let re=0;for(let m=1;m<ie.length;m++){const I=ie[re],X=ie[m],j=I.start+I.count,se=on(X.start,r.width,4),ae=on(I.start,r.width,4);X.start<=j+1&&se===ae&&on(X.start+X.count-1,r.width,4)===se?I.count=Math.max(I.count,X.start+X.count-I.start):(++re,ie[re]=X)}ie.length=re+1;const g=n.getParameter(e.UNPACK_ROW_LENGTH),Y=n.getParameter(e.UNPACK_SKIP_PIXELS),_e=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let m=0,I=ie.length;m<I;m++){const X=ie[m],j=Math.floor(X.start/4),se=Math.ceil(X.count/4),ae=j%r.width,Ee=Math.floor(j/r.width),J=se,Ce=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(e.UNPACK_SKIP_ROWS,Ee),n.texSubImage2D(e.TEXTURE_2D,0,ae,Ee,J,Ce,C,$,r.data)}f.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,g),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function hn(f,r,C){let $=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&($=e.TEXTURE_3D);const W=un(f,r),ie=r.source;n.bindTexture($,f.__webglTexture,e.TEXTURE0+C);const re=i.get(ie);if(ie.version!==re.__version||W===!0){if(n.activeTexture(e.TEXTURE0+C),!(typeof ImageBitmap<"u"&&r.image instanceof ImageBitmap)){const J=Qe.getPrimaries(Qe.workingColorSpace),Ce=r.colorSpace===""?null:Qe.getPrimaries(r.colorSpace),Ae=r.colorSpace===""||J===Ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let g=S(r.image,!1,d.maxTextureSize);g=Le(r,g);const Y=l.convert(r.format,r.colorSpace),_e=l.convert(r.type);let m=D(r.internalFormat,Y,_e,r.normalized,r.colorSpace,r.isVideoTexture);an($,r);let I;const X=r.mipmaps,j=r.isVideoTexture!==!0,se=re.__version===void 0||W===!0,ae=ie.dataReady,Ee=p(r,g);if(r.isDepthTexture)m=o(r.format===qn,r.type),se&&(j?n.texStorage2D(e.TEXTURE_2D,1,m,g.width,g.height):n.texImage2D(e.TEXTURE_2D,0,m,g.width,g.height,0,Y,_e,null));else if(r.isDataTexture)if(X.length>0){j&&se&&n.texStorage2D(e.TEXTURE_2D,Ee,m,X[0].width,X[0].height);for(let J=0,Ce=X.length;J<Ce;J++)I=X[J],j?ae&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,I.width,I.height,Y,_e,I.data):n.texImage2D(e.TEXTURE_2D,J,m,I.width,I.height,0,Y,_e,I.data);r.generateMipmaps=!1}else j?(se&&n.texStorage2D(e.TEXTURE_2D,Ee,m,g.width,g.height),ae&&je(r,g,Y,_e)):n.texImage2D(e.TEXTURE_2D,0,m,g.width,g.height,0,Y,_e,g.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){j&&se&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,m,X[0].width,X[0].height,g.depth);for(let J=0,Ce=X.length;J<Ce;J++)if(I=X[J],r.format!==1023)if(Y!==null)if(j){if(ae)if(r.layerUpdates.size>0){const Ae=Ht(I.width,I.height,r.format,r.type);for(const Ue of r.layerUpdates){const pe=I.data.subarray(Ue*Ae/I.data.BYTES_PER_ELEMENT,(Ue+1)*Ae/I.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,Ue,I.width,I.height,1,Y,pe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,I.width,I.height,g.depth,Y,I.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,m,I.width,I.height,g.depth,0,I.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?ae&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,I.width,I.height,g.depth,Y,_e,I.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,m,I.width,I.height,g.depth,0,Y,_e,I.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{j&&se&&n.texStorage2D(e.TEXTURE_2D,Ee,m,X[0].width,X[0].height);for(let J=0,Ce=X.length;J<Ce;J++)I=X[J],r.format!==1023?Y!==null?j?ae&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,I.width,I.height,Y,I.data):n.compressedTexImage2D(e.TEXTURE_2D,J,m,I.width,I.height,0,I.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?ae&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,I.width,I.height,Y,_e,I.data):n.texImage2D(e.TEXTURE_2D,J,m,I.width,I.height,0,Y,_e,I.data)}else if(r.isDataArrayTexture)if(j){if(se&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,m,g.width,g.height,g.depth),ae)if(r.layerUpdates.size>0){const J=Ht(g.width,g.height,r.format,r.type);for(const Ce of r.layerUpdates){const Ae=g.data.subarray(Ce*J/g.data.BYTES_PER_ELEMENT,(Ce+1)*J/g.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Ce,g.width,g.height,1,Y,_e,Ae)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,g.width,g.height,g.depth,Y,_e,g.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,g.width,g.height,g.depth,0,Y,_e,g.data);else if(r.isData3DTexture)j?(se&&n.texStorage3D(e.TEXTURE_3D,Ee,m,g.width,g.height,g.depth),ae&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,g.width,g.height,g.depth,Y,_e,g.data)):n.texImage3D(e.TEXTURE_3D,0,m,g.width,g.height,g.depth,0,Y,_e,g.data);else if(r.isFramebufferTexture){if(se)if(j)n.texStorage2D(e.TEXTURE_2D,Ee,m,g.width,g.height);else{let J=g.width,Ce=g.height;for(let Ae=0;Ae<Ee;Ae++)n.texImage2D(e.TEXTURE_2D,Ae,m,J,Ce,0,Y,_e,null),J>>=1,Ce>>=1}}else if(r.isHTMLTexture){if("texElementImage2D"in e){const J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),g.parentNode!==J){J.appendChild(g),O.add(r),J.onpaint=Ce=>{const Ae=Ce.changedElements;for(const Ue of O)Ae.includes(Ue.image)&&(Ue.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,g);else{const Ae=e.RGBA,Ue=e.RGBA,pe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ae,Ue,pe,g)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(X.length>0){if(j&&se){const J=cn(X[0]);n.texStorage2D(e.TEXTURE_2D,Ee,m,J.width,J.height)}for(let J=0,Ce=X.length;J<Ce;J++)I=X[J],j?ae&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,Y,_e,I):n.texImage2D(e.TEXTURE_2D,J,m,Y,_e,I);r.generateMipmaps=!1}else if(j){if(se){const J=cn(g);n.texStorage2D(e.TEXTURE_2D,Ee,m,J.width,J.height)}ae&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Y,_e,g)}else n.texImage2D(e.TEXTURE_2D,0,m,Y,_e,g);w(r)&&r.mipmapsAutoUpdate===!0&&h($),re.__version=ie.version,r.onUpdate&&r.onUpdate(r)}f.__version=r.version}function En(f,r,C){if(r.image.length!==6)return;const $=un(f,r),W=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,f.__webglTexture,e.TEXTURE0+C);const ie=i.get(W);if(W.version!==ie.__version||$===!0){n.activeTexture(e.TEXTURE0+C);const re=Qe.getPrimaries(Qe.workingColorSpace),g=r.colorSpace===""?null:Qe.getPrimaries(r.colorSpace),Y=r.colorSpace===""||re===g?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const _e=r.isCompressedTexture||r.image[0].isCompressedTexture,m=r.image[0]&&r.image[0].isDataTexture,I=[];for(let pe=0;pe<6;pe++)!_e&&!m?I[pe]=S(r.image[pe],!0,d.maxCubemapSize):I[pe]=m?r.image[pe].image:r.image[pe],I[pe]=Le(r,I[pe]);const X=I[0],j=l.convert(r.format,r.colorSpace),se=l.convert(r.type);let ae=D(r.internalFormat,j,se,r.normalized,r.colorSpace);const Ee=r.isVideoTexture!==!0,J=ie.__version===void 0||$===!0,Ce=W.dataReady;let Ae=p(r,X);an(e.TEXTURE_CUBE_MAP,r);let Ue;if(r.isDepthTexture){if(ae=o(r.format===qn,r.type),J)if(Ee)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,ae,X.width,X.height);else for(let pe=0;pe<6;pe++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,X.width,X.height,0,j,se,null)}else if(_e){Ee&&J&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,ae,X.width,X.height);for(let pe=0;pe<6;pe++){Ue=I[pe].mipmaps;for(let Ye=0;Ye<Ue.length;Ye++){const qe=Ue[Ye];r.format!==1023?j!==null?Ee?Ce&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,0,0,qe.width,qe.height,j,qe.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,ae,qe.width,qe.height,0,qe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?Ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,0,0,qe.width,qe.height,j,se,qe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye,ae,qe.width,qe.height,0,j,se,qe.data)}}}else{if(Ue=r.mipmaps,Ee&&J){Ue.length>0&&Ae++;const pe=cn(I[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Ae,ae,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(m){Ee?Ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,I[pe].width,I[pe].height,j,se,I[pe].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,I[pe].width,I[pe].height,0,j,se,I[pe].data);for(let Ye=0;Ye<Ue.length;Ye++){const qe=Ue[Ye].image[pe].image;Ee?Ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,0,0,qe.width,qe.height,j,se,qe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,ae,qe.width,qe.height,0,j,se,qe.data)}}else{Ee?Ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,j,se,I[pe]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,j,se,I[pe]);for(let Ye=0;Ye<Ue.length;Ye++){const qe=Ue[Ye];Ee?Ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,0,0,j,se,qe.image[pe]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ye+1,ae,j,se,qe.image[pe])}}}w(r)&&r.mipmapsAutoUpdate===!0&&h(e.TEXTURE_CUBE_MAP),ie.__version=W.version,r.onUpdate&&r.onUpdate(r)}f.__version=r.version}function en(f,r,C,$,W,ie){const re=l.convert(C.format,C.colorSpace),g=l.convert(C.type),Y=D(C.internalFormat,re,g,C.normalized,C.colorSpace),_e=i.get(r),m=i.get(C);if(m.__renderTarget=r,!_e.__hasExternalTextures){const I=Math.max(1,r.width>>ie),X=Math.max(1,r.height>>ie);W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY?n.texImage3D(W,ie,Y,I,X,r.depth,0,re,g,null):n.texImage2D(W,ie,Y,I,X,0,re,g,null)}n.bindFramebuffer(e.FRAMEBUFFER,f),ze(r)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,W,m.__webglTexture,0,ce(r)):(W===e.TEXTURE_2D||W>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,W,m.__webglTexture,ie),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ln(f,r,C){if(e.bindRenderbuffer(e.RENDERBUFFER,f),r.depthBuffer){const $=r.depthTexture,W=$&&$.isDepthTexture?$.type:null,ie=o(r.stencilBuffer,W),re=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ze(r)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce(r),ie,r.width,r.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,ce(r),ie,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,ie,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,f)}else{const $=r.textures;for(let W=0;W<$.length;W++){const ie=$[W],re=l.convert(ie.format,ie.colorSpace),g=l.convert(ie.type),Y=D(ie.internalFormat,re,g,ie.normalized,ie.colorSpace);ze(r)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce(r),Y,r.width,r.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,ce(r),Y,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,Y,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function mn(f,r,C){const $=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,f),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(r.depthTexture);W.__renderTarget=r;const ie=$?r.depthTexture.image[0]:r.depthTexture.image;(!W.__webglTexture||ie.width!==r.width||ie.height!==r.height)&&(ie.width=r.width,ie.height=r.height,r.depthTexture.needsUpdate=!0),$?ue(r.depthTexture,0):ge(r.depthTexture,0);const re=W.__webglTexture,g=ce(r),Y=$?e.TEXTURE_CUBE_MAP_POSITIVE_X+C:e.TEXTURE_2D,_e=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)ze(r)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,Y,re,0,g):e.framebufferTexture2D(e.FRAMEBUFFER,_e,Y,re,0);else if(r.depthTexture.format===1027)ze(r)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,Y,re,0,g):e.framebufferTexture2D(e.FRAMEBUFFER,_e,Y,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _n(f){const r=i.get(f),C=f.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==f.depthTexture){const $=f.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),$){const W=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,$.removeEventListener("dispose",W)};$.addEventListener("dispose",W),r.__depthDisposeCallback=W}r.__boundDepthTexture=$}if(f.depthTexture&&!r.__autoAllocateDepthBuffer)if(C)for(let $=0;$<6;$++)mn(r.__webglFramebuffer[$],f,$);else f.texture.mipmaps.length>0?mn(r.__webglFramebuffer[0],f,0):mn(r.__webglFramebuffer,f,0);else if(C){r.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[$]),r.__webglDepthbuffer[$]===void 0)r.__webglDepthbuffer[$]=e.createRenderbuffer(),ln(r.__webglDepthbuffer[$],f,!1);else{const W=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=r.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,ie),e.framebufferRenderbuffer(e.FRAMEBUFFER,W,e.RENDERBUFFER,ie)}}else if(f.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),ln(r.__webglDepthbuffer,f,!1);else{const $=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,W)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Tn(f,r,C){const $=i.get(f);r!==void 0&&en($.__webglFramebuffer,f,f.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),C!==void 0&&_n(f)}function M(f){const r=f.texture,C=i.get(f),$=i.get(r);f.addEventListener("dispose",V),y(f);const W=f.textures,ie=f.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=r.version,u.memory.textures++),ie){C.__webglFramebuffer=[];for(let g=0;g<6;g++)if(r.mipmaps.length>0){C.__webglFramebuffer[g]=[];for(let Y=0;Y<r.mipmaps.length;Y++)C.__webglFramebuffer[g][Y]=e.createFramebuffer()}else C.__webglFramebuffer[g]=e.createFramebuffer()}else{if(r.mipmaps.length>0){C.__webglFramebuffer=[];for(let g=0;g<r.mipmaps.length;g++)C.__webglFramebuffer[g]=e.createFramebuffer()}else C.__webglFramebuffer=e.createFramebuffer();if(re)for(let g=0,Y=W.length;g<Y;g++){const _e=i.get(W[g]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),u.memory.textures++)}if(f.samples>0&&ze(f)===!1){C.__webglMultisampledFramebuffer=e.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let g=0;g<W.length;g++){const Y=W[g];C.__webglColorRenderbuffer[g]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,C.__webglColorRenderbuffer[g]);const _e=l.convert(Y.format,Y.colorSpace),m=l.convert(Y.type),I=D(Y.internalFormat,_e,m,Y.normalized,Y.colorSpace,f.isXRRenderTarget===!0),X=ce(f);e.renderbufferStorageMultisample(e.RENDERBUFFER,X,I,f.width,f.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+g,e.RENDERBUFFER,C.__webglColorRenderbuffer[g])}e.bindRenderbuffer(e.RENDERBUFFER,null),f.depthBuffer&&(C.__webglDepthRenderbuffer=e.createRenderbuffer(),ln(C.__webglDepthRenderbuffer,f,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ie){n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),an(e.TEXTURE_CUBE_MAP,r);for(let g=0;g<6;g++)if(r.mipmaps.length>0)for(let Y=0;Y<r.mipmaps.length;Y++)en(C.__webglFramebuffer[g][Y],f,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+g,Y);else en(C.__webglFramebuffer[g],f,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+g,0);w(r)?h(e.TEXTURE_CUBE_MAP):r.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}else if(re){for(let g=0,Y=W.length;g<Y;g++){const _e=W[g],m=i.get(_e);let I=e.TEXTURE_2D;(f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(I=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(I,m.__webglTexture),an(I,_e),en(C.__webglFramebuffer,f,_e,e.COLOR_ATTACHMENT0+g,I,0),w(_e)&&h(I)}n.unbindTexture()}else{let g=e.TEXTURE_2D;if((f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(g=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(g,$.__webglTexture),an(g,r),r.mipmaps.length>0)for(let Y=0;Y<r.mipmaps.length;Y++)en(C.__webglFramebuffer[Y],f,r,e.COLOR_ATTACHMENT0,g,Y);else en(C.__webglFramebuffer,f,r,e.COLOR_ATTACHMENT0,g,0);w(r)?h(g):r.mipmaps.length>0&&e.texParameteri(g,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}f.depthBuffer&&_n(f)}function Rn(f){const r=f.textures;for(let C=0,$=r.length;C<$;C++){const W=r[C];if(w(W)&&W.mipmapsAutoUpdate===!0){const ie=A(f),re=i.get(W).__webglTexture;n.bindTexture(ie,re),h(ie),n.unbindTexture()}}}const We=[];function rn(f){if(f.samples>0){if(ze(f)===!1){const r=f.textures,C=f.width,$=f.height;let W=e.COLOR_BUFFER_BIT;const ie=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=i.get(f),g=r.length>1;if(g)for(let Y=0;Y<r.length;Y++)n.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),f.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Y=0;Y<r.length;Y++){if(f.resolveDepthBuffer&&(f.depthBuffer&&(W|=e.DEPTH_BUFFER_BIT),f.stencilBuffer&&f.resolveStencilBuffer&&(W|=e.STENCIL_BUFFER_BIT)),g){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,re.__webglColorRenderbuffer[Y]);const _e=i.get(r[Y]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_e,0)}e.blitFramebuffer(0,0,C,$,0,0,C,$,W,e.NEAREST),F===!0&&(We.length=0,We.push(e.COLOR_ATTACHMENT0+Y),f.depthBuffer&&f.storeMultisampledDepthBuffer===!1&&We.push(ie),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),g)for(let Y=0;Y<r.length;Y++){n.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,re.__webglColorRenderbuffer[Y]);const _e=i.get(r[Y]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.TEXTURE_2D,_e,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(f.depthBuffer&&f.storeMultisampledDepthBuffer===!1&&F){const r=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}function ce(f){return Math.min(d.maxSamples,f.samples)}function ze(f){const r=i.get(f);return f.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function Te(f){const r=u.render.frame;H.get(f)!==r&&(H.set(f,r),f.update())}function Le(f,r){const C=f.colorSpace,$=f.format,W=f.type;return f.isCompressedTexture===!0||f.isVideoTexture===!0||C!=="srgb-linear"&&C!==""&&(Qe.getTransfer(C)==="srgb"?($!==1023||W!==1009)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",C)),r}function cn(f){return typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement?(b.width=f.naturalWidth||f.width,b.height=f.naturalHeight||f.height):typeof VideoFrame<"u"&&f instanceof VideoFrame?(b.width=f.displayWidth,b.height=f.displayHeight):(b.width=f.width,b.height=f.height),b}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.getTextureUnits=de,this.setTextureUnits=be,this.setTexture2D=ge,this.setTexture2DArray=Re,this.setTexture3D=Pe,this.setTextureCube=ue,this.rebindTextures=Tn,this.setupRenderTarget=M,this.updateRenderTargetMipmap=Rn,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=_n,this.setupFrameBufferTexture=en,this.useMultisampledRTT=ze,this.dispose=K}function mo(e,t){function n(i,d=""){let l;const u=Qe.getTransfer(d);if(i===1009)return e.UNSIGNED_BYTE;if(i===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return e.BYTE;if(i===1011)return e.SHORT;if(i===1012)return e.UNSIGNED_SHORT;if(i===1013)return e.INT;if(i===1014)return e.UNSIGNED_INT;if(i===1015)return e.FLOAT;if(i===1016)return e.HALF_FLOAT;if(i===1021)return e.ALPHA;if(i===1022)return e.RGB;if(i===1023)return e.RGBA;if(i===1026)return e.DEPTH_COMPONENT;if(i===1027)return e.DEPTH_STENCIL;if(i===1028)return e.RED;if(i===1029)return e.RED_INTEGER;if(i===1030)return e.RG;if(i===1031)return e.RG_INTEGER;if(i===1033)return e.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(u==="srgb")if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===33776)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===33776)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===35840)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===36196||i===37492)return u==="srgb"?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===37496)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return l.COMPRESSED_R11_EAC;if(i===37489)return l.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return l.COMPRESSED_RG11_EAC;if(i===37491)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===37808)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return u==="srgb"?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===36492)return u==="srgb"?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===36283)return l.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var _o=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vo=`
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

}`,go=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new It(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:_o,fragmentShader:vo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},So=class extends Bi{constructor(e,t){super();const n=this;let i=null,d=1,l=null,u="local-floor",v=1,F=null,b=null,H=null,O=null,E=null,R=null;const L=typeof XRWebGLBinding<"u",G=new go,c={},s=t.getContextAttributes();let S=null,w=null;const h=[],A=[],D=new gn;let o=null,p=null;const y=new ot;y.viewport=new Sn;const Z=new ot;Z.viewport=new Sn;const U=[y,Z],V=new ji;let ee=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ne=h[z];return ne===void 0&&(ne=new rt,h[z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(z){let ne=h[z];return ne===void 0&&(ne=new rt,h[z]=ne),ne.getGripSpace()},this.getHand=function(z){let ne=h[z];return ne===void 0&&(ne=new rt,h[z]=ne),ne.getHandSpace()};function K(z){const ne=A.indexOf(z.inputSource);if(ne===-1)return;const ge=h[ne];ge!==void 0&&(ge.update(z.inputSource,z.frame,F||l),ge.dispatchEvent({type:z.type,data:z.inputSource}))}function Q(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",B);for(let z=0;z<h.length;z++){const ne=A[z];ne!==null&&(A[z]=null,h[z].disconnect(ne))}ee=null,T=null,G.reset();for(const z in c)delete c[z];if(e.setRenderTarget(S),E=null,O=null,H=null,i=null,w=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(o),e.setSize(D.width,D.height,!1),p!==null){const z=p.camera;z.fov=p.fov,z.zoom=p.zoom,z.updateProjectionMatrix(),p=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){d=z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){u=z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return F||l},this.setReferenceSpace=function(z){F=z},this.getBaseLayer=function(){return O!==null?O:E},this.getBinding=function(){return H===null&&L&&(H=new XRWebGLBinding(i,t)),H},this.getFrame=function(){return R},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",B),s.xrCompatible!==!0&&await t.makeXRCompatible(),o=e.getPixelRatio(),e.getSize(D),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ge=null,Re=null;s.depth&&(Re=s.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=s.stencil?qn:at,ge=s.stencil?ut:Zn);const Pe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:d};H=this.getBinding(),O=H.createProjectionLayer(Pe),i.updateRenderState({layers:[O]}),e.setPixelRatio(1),e.setSize(O.textureWidth,O.textureHeight,!1),w=new xn(O.textureWidth,O.textureHeight,{format:Ot,type:Hn,depthTexture:new Wn(O.textureWidth,O.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:s.stencil,colorSpace:e.outputColorSpace,samples:s.antialias?4:0,resolveDepthBuffer:O.ignoreDepthValues===!1,resolveStencilBuffer:O.ignoreDepthValues===!1,storeMultisampledDepthBuffer:O.ignoreDepthValues===!1,storeMultisampledStencilBuffer:O.ignoreDepthValues===!1})}else{const ne={antialias:s.antialias,alpha:!0,depth:s.depth,stencil:s.stencil,framebufferScaleFactor:d};E=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new xn(E.framebufferWidth,E.framebufferHeight,{format:Ot,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:s.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(v),F=null,l=await i.requestReferenceSpace(u),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return G.getDepthTexture()};function B(z){for(let ne=0;ne<z.removed.length;ne++){const ge=z.removed[ne],Re=A.indexOf(ge);Re>=0&&(A[Re]=null,h[Re].disconnect(ge))}for(let ne=0;ne<z.added.length;ne++){const ge=z.added[ne];let Re=A.indexOf(ge);if(Re===-1){for(let ue=0;ue<h.length;ue++)if(ue>=A.length){A.push(ge),Re=ue;break}else if(A[ue]===null){A[ue]=ge,Re=ue;break}if(Re===-1)break}const Pe=h[Re];Pe&&Pe.connect(ge)}}function me(z,ne){ne===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ne.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let ne=z.near,ge=z.far;G.texture!==null&&(G.depthNear>0&&(ne=G.depthNear),G.depthFar>0&&(ge=G.depthFar)),V.near=Z.near=y.near=ne,V.far=Z.far=y.far=ge,(ee!==V.near||T!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),ee=V.near,T=V.far),V.layers.mask=z.layers.mask|6,y.layers.mask=V.layers.mask&-5,Z.layers.mask=V.layers.mask&-3;const Re=z.parent,Pe=V.cameras;me(V,Re);for(let ue=0;ue<Pe.length;ue++)me(Pe[ue],Re);V.projectionMatrix.copy(y.projectionMatrix),V.projectionMatrixInverse.copy(y.projectionMatrixInverse),p===null&&z.isPerspectiveCamera&&(p={camera:z,fov:z.fov,zoom:z.zoom}),k(z,V,Re)};function k(z,ne,ge){ge===null?z.matrix.copy(ne.matrixWorld):(z.matrix.copy(ge.matrixWorld),z.matrix.invert(),z.matrix.multiply(ne.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ne.projectionMatrix),z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ar*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(O===null&&E===null))return v},this.setFoveation=function(z){v=z,O!==null&&(O.fixedFoveation=z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=z)},this.hasDepthSensing=function(){return G.texture!==null},this.getDepthSensingMesh=function(){return G.getMesh(V)},this.getCameraTexture=function(z){return c[z]};let q=null;function de(z,ne){if(b=ne.getViewerPose(F||l),R=ne,b!==null){const ge=b.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let Re=!1;ge.length!==V.cameras.length&&(V.cameras.length=0,Re=!0);for(let ue=0;ue<ge.length;ue++){const Oe=ge[ue];let Ve=null;if(E!==null)Ve=E.getViewport(Oe);else{const an=H.getViewSubImage(O,Oe);Ve=an.viewport,ue===0&&(e.setRenderTargetTextures(w,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(w))}let xe=U[ue];xe===void 0&&(xe=new ot,xe.layers.enable(ue),xe.viewport=new Sn,U[ue]=xe),xe.matrix.fromArray(Oe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Oe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ue===0&&(V.matrix.copy(xe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Re===!0&&V.cameras.push(xe)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&L){H=n.getBinding();const ue=H.getDepthInformation(ge[0]);ue&&ue.isValid&&ue.texture&&G.init(ue,i.renderState)}if(Pe&&Pe.includes("camera-access")&&L){e.state.unbindTexture(),H=n.getBinding();for(let ue=0;ue<ge.length;ue++){const Oe=ge[ue].camera;if(Oe){let Ve=c[Oe];Ve||(Ve=new It,c[Oe]=Ve);const xe=H.getCameraImage(Oe);Ve.sourceTexture=xe}}}}for(let ge=0;ge<h.length;ge++){const Re=A[ge],Pe=h[ge];Re!==null&&Pe!==void 0&&Pe.update(Re,ne,F||l)}q&&q(z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),R=null}const be=new Xt;be.setAnimationLoop(de),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}},Eo=new Fn,Ti=new Ne;Ti.set(-1,0,0,0,1,0,0,0,1);function Mo(e,t){function n(c,s){c.matrixAutoUpdate===!0&&c.updateMatrix(),s.value.copy(c.matrix)}function i(c,s){s.color.getRGB(c.fogColor.value,Dt(e)),s.isFog?(c.fogNear.value=s.near,c.fogFar.value=s.far):s.isFogExp2&&(c.fogDensity.value=s.density)}function d(c,s,S,w,h){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?l(c,s):s.isMeshLambertMaterial?(l(c,s),s.envMap&&(c.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(l(c,s),O(c,s)):s.isMeshPhongMaterial?(l(c,s),H(c,s),s.envMap&&(c.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(l(c,s),E(c,s),s.isMeshPhysicalMaterial&&R(c,s,h)):s.isMeshMatcapMaterial?(l(c,s),L(c,s)):s.isMeshDepthMaterial?l(c,s):s.isMeshDistanceMaterial?(l(c,s),G(c,s)):s.isMeshNormalMaterial?l(c,s):s.isLineBasicMaterial?(u(c,s),s.isLineDashedMaterial&&v(c,s)):s.isPointsMaterial?F(c,s,S,w):s.isSpriteMaterial?b(c,s):s.isShadowMaterial?(c.color.value.copy(s.color),c.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}function l(c,s){c.opacity.value=s.opacity,s.color&&c.diffuse.value.copy(s.color),s.emissive&&c.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(c.map.value=s.map,n(s.map,c.mapTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,n(s.alphaMap,c.alphaMapTransform)),s.bumpMap&&(c.bumpMap.value=s.bumpMap,n(s.bumpMap,c.bumpMapTransform),c.bumpScale.value=s.bumpScale,s.side===1&&(c.bumpScale.value*=-1)),s.normalMap&&(c.normalMap.value=s.normalMap,n(s.normalMap,c.normalMapTransform),c.normalScale.value.copy(s.normalScale),s.side===1&&c.normalScale.value.negate()),s.displacementMap&&(c.displacementMap.value=s.displacementMap,n(s.displacementMap,c.displacementMapTransform),c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias),s.emissiveMap&&(c.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,c.emissiveMapTransform)),s.specularMap&&(c.specularMap.value=s.specularMap,n(s.specularMap,c.specularMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest);const S=t.get(s),w=S.envMap,h=S.envMapRotation;w&&(c.envMap.value=w,c.envMapRotation.value.setFromMatrix4(Eo.makeRotationFromEuler(h)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Ti),c.reflectivity.value=s.reflectivity,c.ior.value=s.ior,c.refractionRatio.value=s.refractionRatio),s.lightMap&&(c.lightMap.value=s.lightMap,c.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,c.lightMapTransform)),s.aoMap&&(c.aoMap.value=s.aoMap,c.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,c.aoMapTransform))}function u(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,s.map&&(c.map.value=s.map,n(s.map,c.mapTransform))}function v(c,s){c.dashSize.value=s.dashSize,c.totalSize.value=s.dashSize+s.gapSize,c.scale.value=s.scale}function F(c,s,S,w){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.size.value=s.size*S,c.scale.value=w*.5,s.map&&(c.map.value=s.map,n(s.map,c.uvTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,n(s.alphaMap,c.alphaMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest)}function b(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.rotation.value=s.rotation,s.map&&(c.map.value=s.map,n(s.map,c.mapTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,n(s.alphaMap,c.alphaMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest)}function H(c,s){c.specular.value.copy(s.specular),c.shininess.value=Math.max(s.shininess,1e-4)}function O(c,s){s.gradientMap&&(c.gradientMap.value=s.gradientMap)}function E(c,s){c.metalness.value=s.metalness,s.metalnessMap&&(c.metalnessMap.value=s.metalnessMap,n(s.metalnessMap,c.metalnessMapTransform)),c.roughness.value=s.roughness,s.roughnessMap&&(c.roughnessMap.value=s.roughnessMap,n(s.roughnessMap,c.roughnessMapTransform)),s.envMap&&(c.envMapIntensity.value=s.envMapIntensity)}function R(c,s,S){c.ior.value=s.ior,s.diffuseRoughness>0&&(c.diffuseRoughness.value=s.diffuseRoughness,s.diffuseRoughnessMap&&(c.diffuseRoughnessMap.value=s.diffuseRoughnessMap,n(s.diffuseRoughnessMap,c.diffuseRoughnessMapTransform))),s.sheen>0&&(c.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen),c.sheenRoughness.value=s.sheenRoughness,s.sheenColorMap&&(c.sheenColorMap.value=s.sheenColorMap,n(s.sheenColorMap,c.sheenColorMapTransform)),s.sheenRoughnessMap&&(c.sheenRoughnessMap.value=s.sheenRoughnessMap,n(s.sheenRoughnessMap,c.sheenRoughnessMapTransform))),s.clearcoat>0&&(c.clearcoat.value=s.clearcoat,c.clearcoatRoughness.value=s.clearcoatRoughness,s.clearcoatMap&&(c.clearcoatMap.value=s.clearcoatMap,n(s.clearcoatMap,c.clearcoatMapTransform)),s.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap,n(s.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),s.clearcoatNormalMap&&(c.clearcoatNormalMap.value=s.clearcoatNormalMap,n(s.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(s.clearcoatNormalScale),s.side===1&&c.clearcoatNormalScale.value.negate())),s.dispersion>0&&(c.dispersion.value=s.dispersion),s.retroreflectivity>0&&(c.retroreflectivity.value=s.retroreflectivity),s.iridescence>0&&(c.iridescence.value=s.iridescence,c.iridescenceIOR.value=s.iridescenceIOR,c.iridescenceThicknessMinimum.value=s.iridescenceThicknessMinimum,c.iridescenceThicknessMaximum.value=s.iridescenceThicknessMaximum,s.iridescenceMap&&(c.iridescenceMap.value=s.iridescenceMap,n(s.iridescenceMap,c.iridescenceMapTransform)),s.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=s.iridescenceThicknessMap,n(s.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),s.transmission>0&&(c.transmission.value=s.transmission,c.transmissionSamplerMap.value=S.texture,c.transmissionSamplerSize.value.set(S.width,S.height),s.transmissionMap&&(c.transmissionMap.value=s.transmissionMap,n(s.transmissionMap,c.transmissionMapTransform)),c.thickness.value=s.thickness,s.thicknessMap&&(c.thicknessMap.value=s.thicknessMap,n(s.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=s.attenuationDistance,c.attenuationColor.value.copy(s.attenuationColor)),s.anisotropy>0&&(c.anisotropyVector.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation)),s.anisotropyMap&&(c.anisotropyMap.value=s.anisotropyMap,n(s.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=s.specularIntensity,c.specularColor.value.copy(s.specularColor),s.specularColorMap&&(c.specularColorMap.value=s.specularColorMap,n(s.specularColorMap,c.specularColorMapTransform)),s.specularIntensityMap&&(c.specularIntensityMap.value=s.specularIntensityMap,n(s.specularIntensityMap,c.specularIntensityMapTransform))}function L(c,s){s.matcap&&(c.matcap.value=s.matcap)}function G(c,s){const S=t.get(s).light;c.referencePosition.value.setFromMatrixPosition(S.matrixWorld),c.nearDistance.value=S.shadow.camera.near,c.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:d}}function To(e,t,n,i){let d={},l={};function u(S,w){const h=w.program;i.uniformBlockBinding(S,h,d[S.id])}function v(S,w){let h=d[S.id];h===void 0&&(L(S),h=F(S),d[S.id]=h,S.addEventListener("dispose",c));const A=w.program;i.updateUBOMapping(S,A);const D=t.render.frame;l[S.id]!==D&&(b(S),l[S.id]=D)}function F(S){const w=e.createBuffer(),h=S.__size,A=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,h,A),e.bindBuffer(e.UNIFORM_BUFFER,null),w}function b(S){const w=d[S.id],h=S.uniforms,A=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let D=0,o=h.length;D<o;D++){const p=h[D];if(Array.isArray(p))for(let y=0,Z=p.length;y<Z;y++)H(p[y],D,y,A);else H(p,D,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function H(S,w,h,A){if(E(S,w,h,A)===!0){const D=S.__offset,o=S.value;if(Array.isArray(o)){let p=0;for(let y=0;y<o.length;y++){const Z=o[y],U=G(Z,!0);O(Z,S.__data,p),p+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else O(o,S.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,D,S.__data)}}function O(S,w,h){typeof S=="number"||typeof S=="boolean"?w[h]=S:S.isMatrix3?(w[h]=S.elements[0],w[h+1]=S.elements[1],w[h+2]=S.elements[2],w[h+3]=0,w[h+4]=S.elements[3],w[h+5]=S.elements[4],w[h+6]=S.elements[5],w[h+7]=0,w[h+8]=S.elements[6],w[h+9]=S.elements[7],w[h+10]=S.elements[8],w[h+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-h),h):S.toArray(w,h)}function E(S,w,h,A){const D=S.value,o=w+"_"+h;if(Array.isArray(D)){A[o]===void 0&&(A[o]=[]);const p=A[o];let y=!1;for(let Z=0;Z<D.length;Z++)R(D[Z],p,Z)===!0&&(y=!0);return y}return R(D,A,o)}function R(S,w,h){if(w[h]===void 0)return typeof S=="number"||typeof S=="boolean"?w[h]=S:ArrayBuffer.isView(S)?w[h]=S.slice():w[h]=S.clone(),!0;{const A=w[h];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[h]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function L(S){const w=S.uniforms;let h=0;const A=16;for(let o=0,p=w.length;o<p;o++){const y=Array.isArray(w[o])?w[o]:[w[o]];for(let Z=0,U=y.length;Z<U;Z++){const V=y[Z],ee=Array.isArray(V.value)?V.value:[V.value],T=Array.isArray(w[o])||Array.isArray(V.value);let K=h;for(let Q=0,B=ee.length;Q<B;Q++){const me=ee[Q],k=G(me,T),q=h%A,de=q%k.boundary,be=q+de;h+=de,be!==0&&A-be<k.storage&&(h+=A-be),Q===0&&(K=h),h+=k.storage}V.__data=new(V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array)((h-K)/Float32Array.BYTES_PER_ELEMENT),V.__offset=K}}const D=h%A;return D>0&&(h+=A-D),S.__size=h,S.__cache={},this}function G(S,w){const h={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(h.boundary=4,h.storage=4):S.isVector2?(h.boundary=8,h.storage=8):S.isVector3||S.isColor?(h.boundary=16,h.storage=12):S.isVector4?(h.boundary=16,h.storage=16):S.isMatrix3?(h.boundary=16,h.storage=48):S.isMatrix4?(h.boundary=16,h.storage=64):S.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(h.boundary=16,h.storage=S.byteLength):He("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(h.boundary=16,h.storage=Math.ceil(h.storage/16)*16),h}function c(S){const w=S.target;w.removeEventListener("dispose",c),e.deleteBuffer(d[w.id]),delete d[w.id],delete l[w.id]}function s(){for(const S in d)e.deleteBuffer(d[S]);d={},l={}}return{bind:u,update:v,dispose:s}}var Ro=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function Ao(){return Pn===null&&(Pn=new lr(Ro,16,16,st,In),Pn.name="DFG_LUT",Pn.minFilter=Dn,Pn.magFilter=Dn,Pn.wrapS=ct,Pn.wrapT=ct,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var xo=class{constructor(e={}){const{canvas:t=Yi(),context:n=null,depth:i=!0,stencil:d=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:F=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:H=!1,reversedDepthBuffer:O=!1,outputBufferType:E=Hn}=e;this.isWebGLRenderer=!0;let R;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=n.getContextAttributes().alpha}else R=l;const L=E,G=new Set([zi,er,Gi]),c=new Set([Hn,Zn,Ji,ut,rr,nr]),s=new Uint32Array(4),S=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]};let h=null,A=null;const D=[],o=[];let p=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let Z=!1,U=null,V=null,ee=null,T=null;this._outputColorSpace=Ui;let K=0,Q=0,B=null,me=-1,k=null;const q=new Sn,de=new Sn;let be=null;const z=new $e(0);let ne=0,ge=t.width,Re=t.height,Pe=1,ue=null,Oe=null;const Ve=new Sn(0,0,ge,Re),xe=new Sn(0,0,ge,Re);let an=!1;const un=new yt,on=new fr;let je=!1,hn=!1;const En=new Fn,en=new ke,ln=new Sn,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _n=!1;function Tn(){return B===null?Pe:1}let M=n;function Rn(a,_){return t.getContext(a,_)}let We,rn,ce,ze,Te,Le,cn,f,r,C,$,W,ie,re,g,Y,_e,m,I,X,j,se,ae;try{const a={alpha:!0,depth:i,stencil:d,antialias:u,premultipliedAlpha:v,preserveDrawingBuffer:F,powerPreference:b,failIfMajorPerformanceCaveat:H};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),M===null){const _="webgl2";if(M=Rn(_,a),M===null)throw Rn(_)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(a){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Ze("WebGLRenderer: "+a.message),a}function Ee(){We=new Pr(M),We.init(),j=new mo(M,We),rn=new _r(M,We,e,j),ce=new po(M,We),rn.reversedDepthBuffer&&O&&ce.buffers.depth.setReversed(!0),V=M.createFramebuffer(),ee=M.createFramebuffer(),T=M.createFramebuffer(),ze=new Dr(M),Te=new Ja,Le=new ho(M,We,ce,Te,rn,j,ze),cn=new Cr(y),f=new dr(M),se=new hr(M,f),r=new Lr(M,f,ze,se),C=new Ur(M,r,f,se,ze),m=new wr(M,rn,Le),g=new vr(Te),$=new Qa(y,cn,We,rn,se,g),W=new Mo(y,Te),ie=new eo,re=new oo(We),_e=new pr(y,cn,ce,C,R,v),Y=new uo(y,C,rn),ae=new To(M,ze,rn,ce),I=new mr(M,We,ze),X=new br(M,We,ze),ze.programs=$.programs,y.capabilities=rn,y.extensions=We,y.properties=Te,y.renderLists=ie,y.shadowMap=Y,y.state=ce,y.info=ze}L!==1009&&(p=new Ir(L,t.width,t.height,u,i,d));const J=new So(y,M);this.xr=J,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const a=We.get("WEBGL_lose_context");a&&a.loseContext()},this.forceContextRestore=function(){const a=We.get("WEBGL_lose_context");a&&a.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(a){a!==void 0&&(Pe=a,this.setSize(ge,Re,!1))},this.getSize=function(a){return a.set(ge,Re)},this.setSize=function(a,_,N=!0){if(J.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=a,Re=_,t.width=Math.floor(a*Pe),t.height=Math.floor(_*Pe),N===!0&&(t.style.width=a+"px",t.style.height=_+"px"),p!==null&&p.setSize(t.width,t.height),this.setViewport(0,0,a,_)},this.getDrawingBufferSize=function(a){return a.set(ge*Pe,Re*Pe).floor()},this.setDrawingBufferSize=function(a,_,N){ge=a,Re=_,Pe=N,t.width=Math.floor(a*N),t.height=Math.floor(_*N),this.setViewport(0,0,a,_)},this.setEffects=function(a){if(L===1009){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(a){for(let _=0;_<a.length;_++)if(a[_].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}p.setEffects(a||[])},this.getCurrentViewport=function(a){return a.copy(q)},this.getViewport=function(a){return a.copy(Ve)},this.setViewport=function(a,_,N,P){a.isVector4?Ve.set(a.x,a.y,a.z,a.w):Ve.set(a,_,N,P),ce.viewport(q.copy(Ve).multiplyScalar(Tn()).round())},this.getScissor=function(a){return a.copy(xe)},this.setScissor=function(a,_,N,P){a.isVector4?xe.set(a.x,a.y,a.z,a.w):xe.set(a,_,N,P),ce.scissor(de.copy(xe).multiplyScalar(Tn()).round())},this.getScissorTest=function(){return an},this.setScissorTest=function(a){ce.setScissorTest(an=a)},this.setOpaqueSort=function(a){ue=a},this.setTransparentSort=function(a){Oe=a},this.getClearColor=function(a){return a.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(a=!0,_=!0,N=!0){let P=0;if(a){let x=!1;if(B!==null){const te=B.texture.format;x=G.has(te)}if(x){const te=B.texture.type,le=c.has(te),oe=_e.getClearColor(),he=_e.getClearAlpha(),Me=oe.r,we=oe.g,Ie=oe.b;le?(s[0]=Me,s[1]=we,s[2]=Ie,s[3]=he,M.clearBufferuiv(M.COLOR,0,s)):(S[0]=Me,S[1]=we,S[2]=Ie,S[3]=he,M.clearBufferiv(M.COLOR,0,S))}else P|=M.COLOR_BUFFER_BIT}_&&(P|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),N&&(P|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&M.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(a){a.setRenderer(this),U=a},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),_e.dispose(),ie.dispose(),re.dispose(),Le.dispose(),Te.dispose(),cn.dispose(),C.dispose(),r.dispose(),se.dispose(),ae.dispose(),$.dispose(),J.dispose(),J.removeEventListener("sessionstart",Et),J.removeEventListener("sessionend",Mt),wn.stop()};function Ce(a){a.preventDefault(),Gt("WebGLRenderer: Context Lost."),Z=!0}function Ae(){Gt("WebGLRenderer: Context Restored."),Z=!1;const a=ze.autoReset,_=Y.enabled,N=Y.autoUpdate,P=Y.needsUpdate,x=Y.type;Ee(),ze.autoReset=a,Y.enabled=_,Y.autoUpdate=N,Y.needsUpdate=P,Y.type=x}function Ue(a){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",a.statusMessage)}function pe(a){const _=a.target;_.removeEventListener("dispose",pe),Ye(_)}function Ye(a){qe(a),Te.remove(a)}function qe(a){const _=Te.get(a).programs;_!==void 0&&(_.forEach(function(N){$.releaseProgram(N)}),a.isShaderMaterial&&$.releaseShaderCache(a))}this.renderBufferDirect=function(a,_,N,P,x,te){_===null&&(_=mn);const le=x.isMesh&&x.matrixWorld.determinantAffine()<0,oe=Ci(a,_,N,P,x);ce.setMaterial(P,le);let he=N.index,Me=1;if(P.wireframe===!0){if(he=r.getWireframeAttribute(N),he===void 0)return;Me=2}const we=N.drawRange,Ie=N.attributes.position;let ve=we.start*Me,Be=(we.start+we.count)*Me;te!==null&&(ve=Math.max(ve,te.start*Me),Be=Math.min(Be,(te.start+te.count)*Me)),he!==null?(ve=Math.max(ve,0),Be=Math.min(Be,he.count)):Ie!=null&&(ve=Math.max(ve,0),Be=Math.min(Be,Ie.count));const Je=Be-ve;if(Je<0||Je===1/0)return;se.setup(x,P,oe,N,he);let Xe,Fe=I;if(he!==null&&(Xe=f.get(he),Fe=X,Fe.setIndex(Xe)),x.isMesh)P.wireframe===!0?(ce.setLineWidth(P.wireframeLinewidth*Tn()),Fe.setMode(M.LINES)):Fe.setMode(M.TRIANGLES);else if(x.isLine){let fn=P.linewidth;fn===void 0&&(fn=1),ce.setLineWidth(fn*Tn()),x.isLineSegments?Fe.setMode(M.LINES):x.isLineLoop?Fe.setMode(M.LINE_LOOP):Fe.setMode(M.LINE_STRIP)}else x.isPoints?Fe.setMode(M.POINTS):x.isSprite&&Fe.setMode(M.TRIANGLES);if(x.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Fe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const fn=x._multiDrawStarts,Se=x._multiDrawCounts,Mn=x._multiDrawCount,Ge=he?f.get(he).bytesPerElement:1,Un=Te.get(P).currentProgram.getUniforms();for(let dn=0;dn<Mn;dn++)Un.setValue(M,"_gl_DrawID",dn),Fe.render(fn[dn]/Ge,Se[dn])}else if(x.isInstancedMesh)Fe.renderInstances(ve,Je,x.count);else if(N.isInstancedBufferGeometry){const fn=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Se=Math.min(N.instanceCount,fn);Fe.renderInstances(ve,Je,Se)}else Fe.render(ve,Je)};function St(a,_,N,P){U!==null&&a.isNodeMaterial&&U.setObject(P,a),je===!0&&g.setState(a,N,!1),a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,Gn(a,_,P),a.side=0,a.needsUpdate=!0,Gn(a,_,P),a.side=2):Gn(a,_,P)}this.compile=function(a,_,N=null){N===null&&(N=a),U!==null&&U.renderStart(a,_,N),A=re.get(N),A.init(_),o.push(A),N.traverseVisible(function(x){x.isLight&&x.layers.test(_.layers)&&(A.pushLight(x),x.castShadow&&A.pushShadow(x))}),a!==N&&a.traverseVisible(function(x){x.isLight&&x.layers.test(_.layers)&&(A.pushLight(x),x.castShadow&&A.pushShadow(x))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),hn=this.localClippingEnabled,je=g.init(this.clippingPlanes,hn),je===!0&&g.setGlobalState(this.clippingPlanes,_),U!==null&&Y.render(A.state.shadowsArray,N,_);const P=new Set;return a.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const te=x.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){const oe=te[le];St(oe,N,_,x),P.add(oe)}else St(te,N,_,x),P.add(te)}),A=o.pop(),U!==null&&U.renderEnd(),P},this.compileAsync=function(a,_,N=null){const P=this.compile(a,_,N);return new Promise(x=>{function te(){if(P.forEach(function(le){const oe=Te.get(le).currentProgram;(oe===void 0||oe.isReady())&&P.delete(le)}),P.size===0){x(a);return}setTimeout(te,10)}We.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let tt=null;function Ai(a){tt&&tt(a)}function Et(){wn.stop()}function Mt(){wn.start()}const wn=new Xt;wn.setAnimationLoop(Ai),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(a){tt=a,J.setAnimationLoop(a),a===null?wn.stop():wn.start()},J.addEventListener("sessionstart",Et),J.addEventListener("sessionend",Mt),this.render=function(a,_){if(_!==void 0&&_.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;U!==null&&U.renderStart(a,_);const N=J.enabled===!0&&J.isPresenting===!0,P=p!==null&&(B===null||N)&&p.begin(y,B);if(a.matrixWorldAutoUpdate===!0&&a.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(p===null||p.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(_),_=J.getCamera()),a.isScene===!0&&a.onBeforeRender(y,a,_,B),A=re.get(a,o.length),A.init(_),A.state.textureUnits=Le.getTextureUnits(),o.push(A),En.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),_.isArrayCamera?on.setFromArrayCamera(_):un.setFromProjectionMatrix(En,kt,_.reversedDepth),hn=this.localClippingEnabled,je=g.init(this.clippingPlanes,hn),h=ie.get(a,D.length),h.init(),D.push(h),this.info.render.frame++,J.enabled===!0&&J.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&it(te,_,-1/0,y.sortObjects)}it(a,_,0,y.sortObjects),h.finish(),U!==null&&U.updateLights(A.state.lightsArray),y.sortObjects===!0&&h.sort(ue,Oe),_n=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,_n&&_e.addToRenderList(h,a),this.info.autoReset===!0&&this.info.reset(),je===!0&&g.beginShadows();const x=A.state.shadowsArray;if(Y.render(x,a,_),je===!0&&g.endShadows(),(P&&p.hasRenderPass())===!1){const te=h.opaque,le=h.transmissive;if(A.setupLights(),_.isArrayCamera){const oe=_.cameras;if(le.length>0)for(let he=0,Me=oe.length;he<Me;he++){const we=oe[he];Rt(te,le,a,we)}_n&&_e.render(a);for(let he=0,Me=oe.length;he<Me;he++){const we=oe[he];Tt(h,a,we,we.viewport)}}else le.length>0&&Rt(te,le,a,_),_n&&_e.render(a),Tt(h,a,_)}B!==null&&Q===0&&(Le.updateMultisampleRenderTarget(B),Le.updateRenderTargetMipmap(B)),P&&p.end(y),a.isScene===!0&&a.onAfterRender(y,a,_),se.resetDefaultState(),me=-1,k=null,o.pop(),o.length>0?(A=o[o.length-1],Le.setTextureUnits(A.state.textureUnits),je===!0&&g.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?h=D[D.length-1]:h=null,U!==null&&U.renderEnd()};function it(a,_,N,P){if(a.visible===!1)return;if(a.layers.test(_.layers)){if(a.isGroup)N=a.renderOrder;else if(a.isLOD)a.autoUpdate===!0&&a.update(_);else if(a.isLight)A.pushLight(a),a.castShadow&&A.pushShadow(a);else if(a.isSprite){const te=_.isArrayCamera?on:un;if(!a.frustumCulled||a.intersectsFrustum(te)){P&&ln.setFromMatrixPosition(a.matrixWorld).applyMatrix4(En);const le=C.update(a),oe=a.material;oe.visible&&h.push(a,le,oe,N,ln.z,null,_)}}else if(a.isMesh||a.isLine||a.isPoints){const te=_.isArrayCamera?on:un;if(!a.frustumCulled||a.intersectsFrustum(te)){const le=C.update(a),oe=a.material;if(P&&(a.boundingSphere!==void 0?(a.boundingSphere===null&&a.computeBoundingSphere(),ln.copy(a.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ln.copy(le.boundingSphere.center)),ln.applyMatrix4(a.matrixWorld).applyMatrix4(En)),Array.isArray(oe)){const he=le.groups;for(let Me=0,we=he.length;Me<we;Me++){const Ie=he[Me],ve=oe[Ie.materialIndex];ve&&ve.visible&&h.push(a,le,ve,N,ln.z,Ie,_)}}else oe.visible&&h.push(a,le,oe,N,ln.z,null,_)}}}const x=a.children;for(let te=0,le=x.length;te<le;te++)it(x[te],_,N,P)}function Tt(a,_,N,P){const{opaque:x,transmissive:te,transparent:le}=a;A.setupLightsView(N),je===!0&&g.setGlobalState(y.clippingPlanes,N),P&&ce.viewport(q.copy(P)),x.length>0&&Kn(x,_,N),te.length>0&&Kn(te,_,N),le.length>0&&Kn(le,_,N),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Rt(a,_,N,P){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[P.id]===void 0){const Ie=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[P.id]=new xn(1,1,{generateMipmaps:!0,type:Ie?In:Hn,minFilter:ft,samples:Math.max(4,rn.samples),stencilBuffer:d,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const x=A.state.transmissionRenderTarget[P.id],te=P.viewport||q;x.setSize(te.z*y.transmissionResolutionScale,te.w*y.transmissionResolutionScale);const le=y.getRenderTarget(),oe=y.getActiveCubeFace(),he=y.getActiveMipmapLevel();y.setRenderTarget(x),y.getClearColor(z),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),_n&&_e.render(N);const Me=y.toneMapping;y.toneMapping=0;const we=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),A.setupLightsView(P),je===!0&&g.setGlobalState(y.clippingPlanes,P),Kn(a,N,P),Le.updateMultisampleRenderTarget(x),Le.updateRenderTargetMipmap(x),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ve=0,Be=_.length;ve<Be;ve++){const{object:Je,geometry:Xe,material:Fe,group:fn}=_[ve];if(Fe.side===2&&Je.layers.test(P.layers)){const Se=Fe.side;Fe.side=1,Fe.needsUpdate=!0,At(Je,N,P,Xe,Fe,fn),Fe.side=Se,Fe.needsUpdate=!0,Ie=!0}}Ie===!0&&(Le.updateMultisampleRenderTarget(x),Le.updateRenderTargetMipmap(x))}y.setRenderTarget(le,oe,he),y.setClearColor(z,ne),we!==void 0&&(P.viewport=we),y.toneMapping=Me}function Kn(a,_,N){const P=_.isScene===!0?_.overrideMaterial:null;for(let x=0,te=a.length;x<te;x++){const le=a[x],{object:oe,geometry:he,group:Me}=le;let we=le.material;we.allowOverride===!0&&P!==null&&(we=P),oe.layers.test(N.layers)&&At(oe,_,N,he,we,Me)}}function At(a,_,N,P,x,te){U!==null&&x.isNodeMaterial&&U.setObject(a,x),a.onBeforeRender(y,_,N,P,x,te),a.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,a.matrixWorld),a.normalMatrix.getNormalMatrix(a.modelViewMatrix),x.onBeforeRender(y,_,N,P,a,te),x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,y.renderBufferDirect(N,_,P,x,a,te),x.side=0,x.needsUpdate=!0,y.renderBufferDirect(N,_,P,x,a,te),x.side=2):y.renderBufferDirect(N,_,P,x,a,te),a.onAfterRender(y,_,N,P,x,te)}function xt(a){let _=0;for(const N of a)N.texture!==null&&_++;return _}function Gn(a,_,N){_.isScene!==!0&&(_=mn);const P=Te.get(a),x=A.state.lights,te=A.state.shadowsArray,le=x.state.version,oe=$.getParameters(a,x.state,te,_,N,A.state.lightProbeGridArray),he=$.getProgramCacheKey(oe);let Me=P.programs;P.environment=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?_.environment:null,P.fog=_.fog;const we=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap;P.envMap=cn.get(a.envMap||P.environment,we),P.envMapRotation=P.environment!==null&&a.envMap===null?_.environmentRotation:a.envMapRotation,Me===void 0&&(a.addEventListener("dispose",pe),Me=new Map,P.programs=Me,P.programVariants=new Map);let Ie=Me.get(he);if(Ie!==void 0){if(P.currentProgram===Ie&&P.lightsStateVersion===le)return Pt(a,oe),Ie}else oe.uniforms=$.getUniforms(a),U!==null&&a.isNodeMaterial&&U.build(a,N,oe),a.onBeforeCompile(oe,y),Ie=$.acquireProgram(oe,he),Me.set(he,Ie),P.uniforms=oe.uniforms;const ve=P.uniforms;return(!a.isShaderMaterial&&!a.isRawShaderMaterial||a.clipping===!0)&&(ve.clippingPlanes=g.uniform),Pt(a,oe),P.needsLights=Li(a),P.lightsStateVersion=le,P.needsLights&&(ve.ambientLightColor.value=x.state.ambient,ve.lightProbe.value=x.state.probe,ve.sunLights.value=x.state.sun,ve.sunLightShadows.value=x.state.sunShadow,ve.directionalLights.value=x.state.directional,ve.directionalLightShadows.value=x.state.directionalShadow,ve.spotLights.value=x.state.spot,ve.spotLightShadows.value=x.state.spotShadow,ve.rectAreaLights.value=x.state.rectArea,ve.ltc_1.value=x.state.rectAreaLTC1,ve.ltc_2.value=x.state.rectAreaLTC2,ve.pointLights.value=x.state.point,ve.pointLightShadows.value=x.state.pointShadow,ve.hemisphereLights.value=x.state.hemi,ve.sunShadowMatrix.value=x.state.sunShadowMatrix,ve.sunShadowCascade.value=x.state.sunShadowCascade,ve.directionalShadowMatrix.value=x.state.directionalShadowMatrix,ve.spotLightMatrix.value=x.state.spotLightMatrix,ve.spotLightMap.value=x.state.spotLightMap,ve.pointShadowMatrix.value=x.state.pointShadowMatrix),P.numLightProbeGrids=xt(A.state.lightProbeGridArray),P.currentProgram=Ie,P.uniformsList=null,Ie}function xi(a,_,N,P,x){const te=Te.get(a),le=te.currentProgram.id+","+P+","+x;let oe=te.programVariants.get(le);return oe===void 0?(oe=Gn(a,_,N),te.programVariants.set(le,oe)):(te.currentProgram=oe,te.uniformsList=null,te.outputColorSpace=P,te.toneMapping=x),oe}function Ct(a){if(a.uniformsList===null){const _=a.currentProgram.getUniforms();a.uniformsList=et.seqWithValue(_.seq,a.uniforms)}return a.uniformsList}function Pt(a,_){const N=Te.get(a);N.outputColorSpace=_.outputColorSpace,N.batching=_.batching,N.batchingColor=_.batchingColor,N.instancing=_.instancing,N.instancingColor=_.instancingColor,N.instancingMorph=_.instancingMorph,N.skinning=_.skinning,N.morphTargets=_.morphTargets,N.morphNormals=_.morphNormals,N.morphColors=_.morphColors,N.morphTargetsCount=_.morphTargetsCount,N.numClippingPlanes=_.numClippingPlanes,N.numIntersection=_.numClipIntersection,N.vertexAlphas=_.vertexAlphas,N.vertexTangents=_.vertexTangents,N.toneMapping=_.toneMapping}function Ci(a,_,N,P,x){_.isScene!==!0&&(_=mn),Le.resetTextureUnits();const te=_.fog,le=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?_.environment:null,oe=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Qe.workingColorSpace,he=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Me=cn.get(P.envMap||le,he),we=P.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ie=!!N.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),ve=!!N.morphAttributes.position,Be=!!N.morphAttributes.normal,Je=!!N.morphAttributes.color;let Xe=0;P.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Xe=y.toneMapping);const Fe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,fn=Fe!==void 0?Fe.length:0,Se=Te.get(P),Mn=A.state.lights;if(je===!0&&(hn===!0||a!==k)){const Ke=a===k&&P.id===me;g.setState(P,a,Ke)}let Ge=!1,Un=!1;P.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Mn.state.version||x.isBatchedMesh&&Se.batching===!1||!x.isBatchedMesh&&Se.batching===!0||x.isBatchedMesh&&Se.batchingColor===!0&&x._colorsTexture===null||x.isBatchedMesh&&Se.batchingColor===!1&&x._colorsTexture!==null||x.isInstancedMesh&&Se.instancing===!1||!x.isInstancedMesh&&Se.instancing===!0||x.isSkinnedMesh&&Se.skinning===!1||!x.isSkinnedMesh&&Se.skinning===!0||x.isInstancedMesh&&Se.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&Se.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&Se.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&Se.instancingMorph===!1&&x.morphTexture!==null||Se.envMap!==Me||P.fog===!0&&Se.fog!==te||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==g.numPlanes||Se.numIntersection!==g.numIntersection)||Se.vertexAlphas!==we||Se.vertexTangents!==Ie||Se.morphTargets!==ve||Se.morphNormals!==Be||Se.morphColors!==Je||Se.morphTargetsCount!==fn||Se.numLightProbeGrids!==xt(A.state.lightProbeGridArray)?Ge=!0:(Se.outputColorSpace!==oe||Se.toneMapping!==Xe)&&(Un=!0):(Ge=!0,Se.__version=P.version);let dn=Se.currentProgram;(Ge===!0||Un===!0)&&(dn=Un===!0?xi(P,_,x,oe,Xe):Gn(P,_,x),U&&P.isNodeMaterial&&U.onUpdateProgram(P,dn,Se));let Yn=!1,bn=!1,Nn=!1;const ye=dn.getUniforms(),sn=Se.uniforms;if(ce.useProgram(dn.program)&&(Yn=!0,bn=!0,Nn=!0),P.id!==me&&(me=P.id,bn=!0),Yn||k!==a){ce.buffers.depth.getReversed()&&a.reversedDepth!==!0&&(a._reversedDepth=!0,a.updateProjectionMatrix()),ye.setValue(M,"projectionMatrix",a.projectionMatrix),ye.setValue(M,"viewMatrix",a.matrixWorldInverse);const Ke=ye.map.cameraPosition;Ke!==void 0&&Ke.setValue(M,en.setFromMatrixPosition(a.matrixWorld)),rn.logarithmicDepthBuffer&&ye.setValue(M,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&ye.setValue(M,"isOrthographic",a.isOrthographicCamera===!0),k!==a&&(k=a,bn=!0,Nn=!0)}if(Se.needsLights&&(Mn.state.sunShadowMap.length>0&&ye.setValue(M,"sunShadowMap",Mn.state.sunShadowMap,Le),Mn.state.directionalShadowMap.length>0&&ye.setValue(M,"directionalShadowMap",Mn.state.directionalShadowMap,Le),Mn.state.spotShadowMap.length>0&&ye.setValue(M,"spotShadowMap",Mn.state.spotShadowMap,Le),Mn.state.pointShadowMap.length>0&&ye.setValue(M,"pointShadowMap",Mn.state.pointShadowMap,Le)),x.isSkinnedMesh){ye.setOptional(M,x,"bindMatrix"),ye.setOptional(M,x,"bindMatrixInverse");const Ke=x.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ye.setValue(M,"boneTexture",Ke.boneTexture,Le))}x.isBatchedMesh&&(ye.setOptional(M,x,"batchingTexture"),ye.setValue(M,"batchingTexture",x._matricesTexture,Le),ye.setOptional(M,x,"batchingIdTexture"),ye.setValue(M,"batchingIdTexture",x._indirectTexture,Le),ye.setOptional(M,x,"batchingColorTexture"),x._colorsTexture!==null&&ye.setValue(M,"batchingColorTexture",x._colorsTexture,Le));const An=N.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&m.update(x,N,dn),(bn||Se.receiveShadow!==x.receiveShadow)&&(Se.receiveShadow=x.receiveShadow,ye.setValue(M,"receiveShadow",x.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&_.environment!==null&&(sn.envMapIntensity.value=_.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Ao()),bn){if(ye.setValue(M,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&Pi(sn,Nn),te&&P.fog===!0&&W.refreshFogUniforms(sn,te),W.refreshMaterialUniforms(sn,P,Pe,Re,A.state.transmissionRenderTarget[a.id]),Se.needsLights&&Se.numLightProbeGrids>0){const Ke=w;let pn=0;for(const Ln of A.state.lightProbeGridArray)Ln.texture!==null&&(Ke.textures[pn]=Ln.texture,Ke.min[pn]=Ln.boundingBox.min,Ke.max[pn]=Ln.boundingBox.max,Ke.resolution[pn]=Ln.resolution,pn++);for(const Ln in Ke)Ke[Ln].length=pn;sn.probesSH.value=Ke.textures,sn.probesMin.value=Ke.min,sn.probesMax.value=Ke.max,sn.probesResolution.value=Ke.resolution}et.upload(M,Ct(Se),sn,Le)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(et.upload(M,Ct(Se),sn,Le),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&ye.setValue(M,"center",x.center),ye.setValue(M,"modelViewMatrix",x.modelViewMatrix),ye.setValue(M,"normalMatrix",x.normalMatrix),ye.setValue(M,"modelMatrix",x.matrixWorld),P.uniformsGroups!==void 0){const Ke=P.uniformsGroups;for(let pn=0,Ln=Ke.length;pn<Ln;pn++){const bt=Ke[pn];ae.update(bt,dn),ae.bind(bt,dn)}}return dn}function Pi(a,_){a.ambientLightColor.needsUpdate=_,a.lightProbe.needsUpdate=_,a.sunLights.needsUpdate=_,a.sunLightShadows.needsUpdate=_,a.directionalLights.needsUpdate=_,a.directionalLightShadows.needsUpdate=_,a.pointLights.needsUpdate=_,a.pointLightShadows.needsUpdate=_,a.spotLights.needsUpdate=_,a.spotLightShadows.needsUpdate=_,a.rectAreaLights.needsUpdate=_,a.hemisphereLights.needsUpdate=_}function Li(a){return a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&a.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(a,_,N){const P=Te.get(a);P.__autoAllocateDepthBuffer=a.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Te.get(a.texture).__webglTexture=_,Te.get(a.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:N,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(a,_){const N=Te.get(a);N.__webglFramebuffer=_,N.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(a,_=0,N=0){B=a,K=_,Q=N;let P=null,x=!1,te=!1;if(a){const le=Te.get(a);if(le.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(M.FRAMEBUFFER,le.__webglFramebuffer),q.copy(a.viewport),de.copy(a.scissor),be=a.scissorTest,ce.viewport(q),ce.scissor(de),ce.setScissorTest(be),me=-1;return}else if(le.__webglFramebuffer===void 0)Le.setupRenderTarget(a);else if(le.__hasExternalTextures)Le.rebindTextures(a,Te.get(a.texture).__webglTexture,Te.get(a.depthTexture).__webglTexture);else if(a.depthBuffer){const Me=a.depthTexture;if(le.__boundDepthTexture!==Me){if(Me!==null&&Te.has(Me)&&(a.width!==Me.image.width||a.height!==Me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(a)}}const oe=a.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(te=!0);const he=Te.get(a).__webglFramebuffer;a.isWebGLCubeRenderTarget?(Array.isArray(he[_])?P=he[_][N]:P=he[_],x=!0):a.samples>0&&Le.useMultisampledRTT(a)===!1?P=Te.get(a).__webglMultisampledFramebuffer:Array.isArray(he)?P=he[N]:P=he,q.copy(a.viewport),de.copy(a.scissor),be=a.scissorTest}else q.copy(Ve).multiplyScalar(Pe).floor(),de.copy(xe).multiplyScalar(Pe).floor(),be=an;if(N!==0&&(P=V),ce.bindFramebuffer(M.FRAMEBUFFER,P)&&ce.drawBuffers(a,P),ce.viewport(q),ce.scissor(de),ce.setScissorTest(be),x){const le=Te.get(a.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+_,le.__webglTexture,N)}else if(te){const le=_;for(let oe=0;oe<a.textures.length;oe++){const he=Te.get(a.textures[oe]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+oe,he.__webglTexture,N,le)}}else if(a!==null&&N!==0){const le=Te.get(a.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,le.__webglTexture,N)}me=-1};function Lt(a){const _=Te.get(a);return(_.__readFormat!==a.format||_.__readType!==a.type)&&(_.__readFormat=a.format,_.__readType=a.type,_.__formatReadable=rn.textureFormatReadable(a.format),_.__typeReadable=rn.textureTypeReadable(a.type)),_}this.readRenderTargetPixels=function(a,_,N,P,x,te,le,oe=0){if(!(a&&a.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Te.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le],Array.isArray(he)&&(he=he[0])),he){ce.bindFramebuffer(M.FRAMEBUFFER,he);try{const Me=a.textures[oe],we=Me.format,Ie=Me.type;a.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+oe);const ve=Lt(Me);if(ve.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=a.width-P&&N>=0&&N<=a.height-x&&M.readPixels(_,N,P,x,j.convert(we),j.convert(Ie),te)}finally{const Me=B!==null?Te.get(B).__webglFramebuffer:null;ce.bindFramebuffer(M.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(a,_,N,P,x,te,le,oe=0){if(!(a&&a.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Te.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le],Array.isArray(he)&&(he=he[0])),he)if(_>=0&&_<=a.width-P&&N>=0&&N<=a.height-x){ce.bindFramebuffer(M.FRAMEBUFFER,he);const Me=a.textures[oe],we=Me.format,Ie=Me.type;a.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+oe);const ve=Lt(Me);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Be),M.bufferData(M.PIXEL_PACK_BUFFER,te.byteLength,M.STREAM_READ),M.readPixels(_,N,P,x,j.convert(we),j.convert(Ie),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);const Je=B!==null?Te.get(B).__webglFramebuffer:null;ce.bindFramebuffer(M.FRAMEBUFFER,Je);const Xe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Hi(M,Xe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Be),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,te),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(Be),M.deleteSync(Xe),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(a,_=null,N=0){const P=Math.pow(2,-N),x=Math.floor(a.image.width*P),te=Math.floor(a.image.height*P),le=_!==null?_.x:0,oe=_!==null?_.y:0;Le.setTexture2D(a,0),M.copyTexSubImage2D(M.TEXTURE_2D,N,0,0,le,oe,x,te),ce.unbindTexture()},this.copyTextureToTexture=function(a,_,N=null,P=null,x=0,te=0){let le,oe,he,Me,we,Ie,ve,Be,Je;const Xe=a.isCompressedTexture?a.mipmaps[te]:a.image;if(N!==null)le=N.max.x-N.min.x,oe=N.max.y-N.min.y,he=N.isBox3?N.max.z-N.min.z:1,Me=N.min.x,we=N.min.y,Ie=N.isBox3?N.min.z:0;else{const ye=Math.pow(2,-x);le=Math.floor(Xe.width*ye),oe=Math.floor(Xe.height*ye),a.isDataArrayTexture?he=Xe.depth:a.isData3DTexture?he=Math.floor(Xe.depth*ye):he=1,Me=0,we=0,Ie=0}P!==null?(ve=P.x,Be=P.y,Je=P.z):(ve=0,Be=0,Je=0);const Fe=j.convert(_.format),fn=j.convert(_.type);let Se;_.isData3DTexture?(Le.setTexture3D(_,0),Se=M.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(Le.setTexture2DArray(_,0),Se=M.TEXTURE_2D_ARRAY):(Le.setTexture2D(_,0),Se=M.TEXTURE_2D),ce.activeTexture(M.TEXTURE0),ce.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,_.flipY),ce.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),ce.pixelStorei(M.UNPACK_ALIGNMENT,_.unpackAlignment);const Mn=ce.getParameter(M.UNPACK_ROW_LENGTH),Ge=ce.getParameter(M.UNPACK_IMAGE_HEIGHT),Un=ce.getParameter(M.UNPACK_SKIP_PIXELS),dn=ce.getParameter(M.UNPACK_SKIP_ROWS),Yn=ce.getParameter(M.UNPACK_SKIP_IMAGES);ce.pixelStorei(M.UNPACK_ROW_LENGTH,Xe.width),ce.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Xe.height),ce.pixelStorei(M.UNPACK_SKIP_PIXELS,Me),ce.pixelStorei(M.UNPACK_SKIP_ROWS,we),ce.pixelStorei(M.UNPACK_SKIP_IMAGES,Ie);const bn=a.isDataArrayTexture||a.isData3DTexture,Nn=_.isDataArrayTexture||_.isData3DTexture;if(a.isDepthTexture){const ye=Te.get(a),sn=Te.get(_),An=Te.get(ye.__renderTarget),Ke=Te.get(sn.__renderTarget);ce.bindFramebuffer(M.READ_FRAMEBUFFER,An.__webglFramebuffer),ce.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let pn=0;pn<he;pn++)bn&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Te.get(a).__webglTexture,x,Ie+pn),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Te.get(_).__webglTexture,te,Je+pn)),M.blitFramebuffer(Me,we,Me+le,we+oe,ve,Be,ve+le,Be+oe,M.DEPTH_BUFFER_BIT,M.NEAREST);ce.bindFramebuffer(M.READ_FRAMEBUFFER,null),ce.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(x!==0||a.isRenderTargetTexture||Te.has(a)){const ye=Te.get(a),sn=Te.get(_);ce.bindFramebuffer(M.READ_FRAMEBUFFER,ee),ce.bindFramebuffer(M.DRAW_FRAMEBUFFER,T);for(let An=0;An<he;An++)bn?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ye.__webglTexture,x,Ie+An):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ye.__webglTexture,x),Nn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,sn.__webglTexture,te,Je+An):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,sn.__webglTexture,te),x!==0?M.blitFramebuffer(Me,we,Me+le,we+oe,ve,Be,ve+le,Be+oe,M.COLOR_BUFFER_BIT,M.NEAREST):Nn?M.copyTexSubImage3D(Se,te,ve,Be,Je+An,Me,we,le,oe):M.copyTexSubImage2D(Se,te,ve,Be,Me,we,le,oe);ce.bindFramebuffer(M.READ_FRAMEBUFFER,null),ce.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Nn?a.isDataTexture||a.isData3DTexture?M.texSubImage3D(Se,te,ve,Be,Je,le,oe,he,Fe,fn,Xe.data):_.isCompressedArrayTexture?M.compressedTexSubImage3D(Se,te,ve,Be,Je,le,oe,he,Fe,Xe.data):M.texSubImage3D(Se,te,ve,Be,Je,le,oe,he,Fe,fn,Xe):a.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,te,ve,Be,le,oe,Fe,fn,Xe.data):a.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,te,ve,Be,Xe.width,Xe.height,Fe,Xe.data):M.texSubImage2D(M.TEXTURE_2D,te,ve,Be,le,oe,Fe,fn,Xe);ce.pixelStorei(M.UNPACK_ROW_LENGTH,Mn),ce.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ge),ce.pixelStorei(M.UNPACK_SKIP_PIXELS,Un),ce.pixelStorei(M.UNPACK_SKIP_ROWS,dn),ce.pixelStorei(M.UNPACK_SKIP_IMAGES,Yn),te===0&&_.generateMipmaps===!0&&_.mipmapsAutoUpdate===!0&&M.generateMipmap(Se),ce.unbindTexture()},this.initRenderTarget=function(a){Te.get(a).__webglFramebuffer===void 0&&Le.setupRenderTarget(a)},this.initTexture=function(a){a.isCubeTexture?Le.setTextureCube(a,0):a.isData3DTexture?Le.setTexture3D(a,0):a.isDataArrayTexture||a.isCompressedArrayTexture?Le.setTexture2DArray(a,0):Le.setTexture2D(a,0),ce.unbindTexture()},this.resetState=function(){K=0,Q=0,B=null,ce.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};export{xo as i,De as n,Qn as r,mt as t};
