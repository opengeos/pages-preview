import{Ar as pn,At as Hn,Bn as rt,C as It,Cr as at,Ct as Li,D as ot,Dn as st,Dr as Nt,Er as Ze,Ft as yt,Hn as Cn,I as Ot,It as Kn,Kt as Ui,L as Ft,Lt as wi,Mn as Di,Mr as We,Mt as Ii,N as Ni,Nn as yi,Nr as Oi,O as Bt,On as Fi,Or as Gt,P as Ht,Pn as Bi,Qn as Gi,R as Vt,Rt as Wt,S as Hi,Sr as lt,St as Vi,Tr as Wi,V as wn,Xt as ct,Zt as ki,_r as hn,ar as zi,b as Xi,br as kt,bt as yn,c as ft,ct as zt,d as dt,dr as qn,dt as Xt,fr as Yi,gr as Ie,hr as mn,i as Ki,ir as qi,jr as Zi,jt as $i,k as Zn,kn as Qi,kr as Yt,kt as Ji,l as $n,lr as Kt,lt as ji,m as Je,mr as er,or as nr,ot as Tn,p as $e,pr as tr,s as ut,sr as Vn,tt as ir,ut as rr,w as ar,wr as or,wt as sr,x as qt,xr as Sn,xt as Pn,y as lr,yt as Ne,zn as cr}from"./three.core-CelXRk3H.js";function Zt(){let e=null,t=!1,n=null,i=null;function f(s,u){i=e.requestAnimationFrame(f),n(s,u)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(f),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function fr(e){const t=new WeakMap;function n(_,D){const R=_.array,G=_.usage,y=R.byteLength,h=e.createBuffer();e.bindBuffer(D,h),e.bufferData(D,R,G),_.onUploadCallback();let C;if(R instanceof Float32Array)C=e.FLOAT;else if(typeof Float16Array<"u"&&R instanceof Float16Array)C=e.HALF_FLOAT;else if(R instanceof Uint16Array)_.isFloat16BufferAttribute?C=e.HALF_FLOAT:C=e.UNSIGNED_SHORT;else if(R instanceof Int16Array)C=e.SHORT;else if(R instanceof Uint32Array)C=e.UNSIGNED_INT;else if(R instanceof Int32Array)C=e.INT;else if(R instanceof Int8Array)C=e.BYTE;else if(R instanceof Uint8Array)C=e.UNSIGNED_BYTE;else if(R instanceof Uint8ClampedArray)C=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+R);return{buffer:h,type:C,bytesPerElement:R.BYTES_PER_ELEMENT,version:_.version,size:y}}function i(_,D,R){const G=D.array,y=D.updateRanges;if(e.bindBuffer(R,_),y.length===0)e.bufferSubData(R,0,G);else{y.sort((C,U)=>C.start-U.start);let h=0;for(let C=1;C<y.length;C++){const U=y[h],H=y[C];H.start<=U.start+U.count+1?U.count=Math.max(U.count,H.start+H.count-U.start):(++h,y[h]=H)}y.length=h+1;for(let C=0,U=y.length;C<U;C++){const H=y[C];e.bufferSubData(R,H.start*G.BYTES_PER_ELEMENT,G,H.start,H.count)}D.clearUpdateRanges()}D.onUploadCallback()}function f(_){return _.isInterleavedBufferAttribute&&(_=_.data),t.get(_)}function s(_){_.isInterleavedBufferAttribute&&(_=_.data);const D=t.get(_);D&&(e.deleteBuffer(D.buffer),t.delete(_))}function u(_,D){if(_.isInterleavedBufferAttribute&&(_=_.data),_.isGLBufferAttribute){const G=t.get(_);(!G||G.version<_.version)&&t.set(_,{buffer:_.buffer,type:_.type,bytesPerElement:_.elementSize,version:_.version});return}const R=t.get(_);if(R===void 0)t.set(_,n(_,D));else if(R.version<_.version){if(R.size!==_.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(R.buffer,_,D),R.version=_.version}}return{get:f,remove:s,update:u}}var Le={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
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
}`},se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new mn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ie},probesMax:{value:new Ie},probesResolution:{value:new Ie}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new mn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},An={basic:{uniforms:pn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:pn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:pn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:pn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:pn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:pn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:pn([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:pn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:pn([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:pn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:pn([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:pn([se.common,se.displacementmap,{referencePosition:{value:new Ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:pn([se.lights,se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};An.physical={uniforms:pn([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new mn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new mn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new mn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Qn={r:0,b:0,g:0},dr=new yn,$t=new Ne;$t.set(-1,0,0,0,1,0,0,0,1);function ur(e,t,n,i,f,s){const u=new $e(0);let _=f===!0?0:1,D,R,G=null,y=0,h=null;function C(O){let z=O.isScene===!0?O.background:null;if(z&&z.isTexture){const m=O.backgroundBlurriness>0;z=t.get(z,m)}return z}function U(O){let z=!1;const m=C(O);m===null?d(u,_):m&&m.isColor&&(d(m,1),z=!0);const v=e.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function H(O,z){const m=C(z);m&&(m.isCubeTexture||m.mapping===306)?(R===void 0&&(R=new Pn(new ut(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:at(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),R.geometry.deleteAttribute("uv"),R.onBeforeRender=function(v,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(R.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(R)),R.material.uniforms.envMap.value=m,R.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,R.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,R.material.uniforms.backgroundRotation.value.setFromMatrix4(dr.makeRotationFromEuler(z.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&R.material.uniforms.backgroundRotation.value.premultiply($t),R.material.toneMapped=Je.getTransfer(m.colorSpace)!==rt,(G!==m||y!==m.version||h!==e.toneMapping)&&(R.material.needsUpdate=!0,G=m,y=m.version,h=e.toneMapping),R.layers.enableAll(),O.unshift(R,R.geometry,R.material,0,0,null)):m&&m.isTexture&&(D===void 0&&(D=new Pn(new Wt(2,2),new Cn({name:"BackgroundMaterial",uniforms:at(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),D.geometry.deleteAttribute("normal"),Object.defineProperty(D.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(D)),D.material.uniforms.t2D.value=m,D.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,D.material.toneMapped=Je.getTransfer(m.colorSpace)!==rt,m.matrixAutoUpdate===!0&&m.updateMatrix(),D.material.uniforms.uvTransform.value.copy(m.matrix),(G!==m||y!==m.version||h!==e.toneMapping)&&(D.material.needsUpdate=!0,G=m,y=m.version,h=e.toneMapping),D.layers.enableAll(),O.unshift(D,D.geometry,D.material,0,0,null))}function d(O,z){O.getRGB(Qn,Gt(e)),n.buffers.color.setClear(Qn.r,Qn.g,Qn.b,z,s)}function o(){R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0),D!==void 0&&(D.geometry.dispose(),D.material.dispose(),D=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,z=1){u.set(O),_=z,d(u,_)},getClearAlpha:function(){return _},setClearAlpha:function(O){_=O,d(u,_)},render:U,addToRenderList:H,dispose:o}}function pr(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},f=h(null);let s=f,u=!1;function _(w,F,re,b,W){let J=!1;const B=y(w,b,re,F);s!==B&&(s=B,R(s.object)),J=C(w,b,re,W),J&&U(w,b,re,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,m(w,F,re,b),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function D(){return e.createVertexArray()}function R(w){return e.bindVertexArray(w)}function G(w){return e.deleteVertexArray(w)}function y(w,F,re,b){const W=b.wireframe===!0;let J=i[F.id];J===void 0&&(J={},i[F.id]=J);const B=w.isInstancedMesh===!0?w.id:0;let de=J[B];de===void 0&&(de={},J[B]=de);let X=de[re.id];X===void 0&&(X={},de[re.id]=X);let Z=X[W];return Z===void 0&&(Z=h(D()),X[W]=Z),Z}function h(w){const F=[],re=[],b=[];for(let W=0;W<n;W++)F[W]=0,re[W]=0,b[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:re,attributeDivisors:b,object:w,attributes:{},index:null}}function C(w,F,re,b){const W=s.attributes,J=F.attributes;let B=0;const de=re.getAttributes();for(const X in de)if(de[X].location>=0){const Z=W[X];let ne=J[X];if(ne===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;B++}return s.attributesNum!==B||s.index!==b}function U(w,F,re,b){const W={},J=F.attributes;let B=0;const de=re.getAttributes();for(const X in de)if(de[X].location>=0){let Z=J[X];Z===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),W[X]=ne,B++}s.attributes=W,s.attributesNum=B,s.index=b}function H(){const w=s.newAttributes;for(let F=0,re=w.length;F<re;F++)w[F]=0}function d(w){o(w,0)}function o(w,F){const re=s.newAttributes,b=s.enabledAttributes,W=s.attributeDivisors;re[w]=1,b[w]===0&&(e.enableVertexAttribArray(w),b[w]=1),W[w]!==F&&(e.vertexAttribDivisor(w,F),W[w]=F)}function O(){const w=s.newAttributes,F=s.enabledAttributes;for(let re=0,b=F.length;re<b;re++)F[re]!==w[re]&&(e.disableVertexAttribArray(re),F[re]=0)}function z(w,F,re,b,W,J,B){B===!0?e.vertexAttribIPointer(w,F,re,W,J):e.vertexAttribPointer(w,F,re,b,W,J)}function m(w,F,re,b){H();const W=b.attributes,J=re.getAttributes(),B=F.defaultAttributeValues;for(const de in J){const X=J[de];if(X.location>=0){let Z=W[de];if(Z===void 0&&(de==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),de==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor)),Z!==void 0){const ne=Z.normalized,Be=Z.itemSize,Re=t.get(Z);if(Re===void 0)continue;const tn=Re.buffer,we=Re.type,V=Re.bytesPerElement,j=we===e.INT||we===e.UNSIGNED_INT||Z.gpuType===1013;if(Z.isInterleavedBufferAttribute){const ae=Z.data,xe=ae.stride,Pe=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let he=0;he<X.locationSize;he++)o(X.location+he,ae.meshPerAttribute);w.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<X.locationSize;he++)d(X.location+he);e.bindBuffer(e.ARRAY_BUFFER,tn);for(let he=0;he<X.locationSize;he++)z(X.location+he,Be/X.locationSize,we,ne,xe*V,(Pe+Be/X.locationSize*he)*V,j)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)o(X.location+ae,Z.meshPerAttribute);w.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<X.locationSize;ae++)d(X.location+ae);e.bindBuffer(e.ARRAY_BUFFER,tn);for(let ae=0;ae<X.locationSize;ae++)z(X.location+ae,Be/X.locationSize,we,ne,Be*V,Be/X.locationSize*ae*V,j)}}else if(B!==void 0){const ne=B[de];if(ne!==void 0)switch(ne.length){case 2:e.vertexAttrib2fv(X.location,ne);break;case 3:e.vertexAttrib3fv(X.location,ne);break;case 4:e.vertexAttrib4fv(X.location,ne);break;default:e.vertexAttrib1fv(X.location,ne)}}}}O()}function v(){p();for(const w in i){const F=i[w];for(const re in F){const b=F[re];for(const W in b){const J=b[W];for(const B in J)G(J[B].object),delete J[B];delete b[W]}}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const F=i[w.id];for(const re in F){const b=F[re];for(const W in b){const J=b[W];for(const B in J)G(J[B].object),delete J[B];delete b[W]}}delete i[w.id]}function L(w){for(const F in i){const re=i[F];for(const b in re){const W=re[b];if(W[w.id]===void 0)continue;const J=W[w.id];for(const B in J)G(J[B].object),delete J[B];delete W[w.id]}}}function c(w){for(const F in i){const re=i[F],b=w.isInstancedMesh===!0?w.id:0,W=re[b];if(W!==void 0){for(const J in W){const B=W[J];for(const de in B)G(B[de].object),delete B[de];delete W[J]}delete re[b],Object.keys(re).length===0&&delete i[F]}}}function p(){q(),u=!0,s!==f&&(s=f,R(s.object))}function q(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:p,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:A,releaseStatesOfObject:c,releaseStatesOfProgram:L,initAttributes:H,enableAttribute:d,disableUnusedAttributes:O}}function hr(e,t,n){let i;function f(D){i=D}function s(D,R){e.drawArrays(i,D,R),n.update(R,i,1)}function u(D,R,G){G!==0&&(e.drawArraysInstanced(i,D,R,G),n.update(R,i,G))}function _(D,R,G){if(G===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,D,0,R,0,G);let y=0;for(let h=0;h<G;h++)y+=R[h];n.update(y,i,1)}this.setMode=f,this.render=s,this.renderInstances=u,this.renderMultiDraw=_}function mr(e,t,n,i){let f;function s(){if(f!==void 0)return f;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");f=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else f=0;return f}function u(L){return!(L!==1023&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function _(L){const c=L===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==1009&&L!==1015&&!c&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function D(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let R=n.precision!==void 0?n.precision:"highp";const G=D(R);G!==R&&(We("WebGLRenderer:",R,"not supported, using",G,"instead."),R=G);const y=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const C=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),U=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),H=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),O=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),z=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),v=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:D,textureFormatReadable:u,textureTypeReadable:_,precision:R,logarithmicDepthBuffer:y,reversedDepthBuffer:h,maxTextures:C,maxVertexTextures:U,maxTextureSize:H,maxCubemapSize:d,maxAttributes:o,maxVertexUniforms:O,maxVaryings:z,maxFragmentUniforms:m,maxSamples:v,samples:A}}function _r(e){const t=this;let n=null,i=0,f=!1,s=!1;const u=new wi,_=new Ne,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(y,h){const C=y.length!==0||h||i!==0||f;return f=h,i=y.length,C},this.beginShadows=function(){s=!0,G(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(y,h){n=G(y,h,0)},this.setState=function(y,h,C){const U=y.clippingPlanes,H=y.clipIntersection,d=y.clipShadows,o=e.get(y);if(!f||U===null||U.length===0||s&&!d)s?G(null):R();else{const O=s?0:i,z=O*4;let m=o.clippingState||null;D.value=m,m=G(U,h,z,C);for(let v=0;v!==z;++v)m[v]=n[v];o.clippingState=m,this.numIntersection=H?this.numPlanes:0,this.numPlanes+=O}};function R(){D.value!==n&&(D.value=n,D.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function G(y,h,C,U){const H=y!==null?y.length:0;let d=null;if(H!==0){if(d=D.value,U!==!0||d===null){const o=C+H*4,O=h.matrixWorldInverse;_.getNormalMatrix(O),(d===null||d.length<o)&&(d=new Float32Array(o));for(let z=0,m=C;z!==H;++z,m+=4)u.copy(y[z]).applyMatrix4(O,_),u.normal.toArray(d,m),d[m+3]=u.constant}D.value=d,D.needsUpdate=!0}return t.numPlanes=H,t.numIntersection=0,d}}var On=4,vr=6,gr=20,Sr=256,Wn=new yt,Qt=new $e,pt=null,ht=0,mt=0,_t=!1,Er=new Ie,Dn=new Ie,vt=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,f={}){const{size:s=256,position:u=Er}=f;pt=this._renderer.getRenderTarget(),ht=this._renderer.getActiveCubeFace(),mt=this._renderer.getActiveMipmapLevel(),_t=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,n,i,_,u),t>0&&this._blur(_,0,0,t),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ei(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pt,ht,mt),this._renderer.xr.enabled=_t,e.scissorTest=!1,Fn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pt=this._renderer.getRenderTarget(),ht=this._renderer.getActiveCubeFace(),mt=this._renderer.getActiveMipmapLevel(),_t=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:wn,format:ct,colorSpace:rr,depthBuffer:!1},i=Jt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jt(e,t,n);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mr(f)),this._blurMaterial=Ar(f,e,t),this._ggxMaterial=Tr(f,e,t)}return i}_compileMaterial(e){const t=new Pn(new $n,e);this._renderer.compile(t,Wn)}_sceneToCubeUV(e,t,n,i,f){const s=new Kn(90,1,t,n),u=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],D=this._renderer,R=D.autoClear,G=D.toneMapping;D.getClearColor(Qt),D.toneMapping=0,D.autoClear=!1,D.state.buffers.depth.getReversed()&&(D.setRenderTarget(i),D.clearDepth(),D.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new ut,new Vi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,h=y.material;let C=!1;const U=e.background;U?U.isColor&&(h.color.copy(U),e.background=null,C=!0):(h.color.copy(Qt),C=!0);for(let H=0;H<6;H++){const d=H%3;d===0?(s.up.set(0,u[H],0),s.position.set(f.x,f.y,f.z),s.lookAt(f.x+_[H],f.y,f.z)):d===1?(s.up.set(0,0,u[H]),s.position.set(f.x,f.y,f.z),s.lookAt(f.x,f.y+_[H],f.z)):(s.up.set(0,u[H],0),s.position.set(f.x,f.y,f.z),s.lookAt(f.x,f.y,f.z+_[H]));const o=this._cubeSize;Fn(i,d*o,H>2?o:0,o,o),D.setRenderTarget(i),C&&D.render(y,s),D.render(e,s)}D.toneMapping=G,D.autoClear=R,e.background=U}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ei()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jt());const f=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=f;const u=f.uniforms;u.envMap.value=e;const _=this._cubeSize;Fn(t,0,0,3*_,2*_),n.setRenderTarget(t),n.render(s,Wn)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let f=1;f<i;f++)this._applyGGXFilter(e,f-1,f);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,f=this._pingPongRenderTarget,s=this._ggxMaterial,u=this._lodMeshes[n];u.material=s;const _=s.uniforms,D=n/(this._lodMeshes.length-1),R=t/(this._lodMeshes.length-1),G=Math.sqrt(D*D-R*R)*(D*1.25),{_lodMax:y}=this,h=this._sizeLods[n],C=3*h*(n>y-On?n-y+On:0),U=4*(this._cubeSize-h);_.envMap.value=e.texture,_.roughness.value=G,_.mipInt.value=y-t,Fn(f,C,U,3*h,2*h),i.setRenderTarget(f),i.render(u,Wn),_.envMap.value=f.texture,_.roughness.value=0,_.mipInt.value=y-n,Fn(e,C,U,3*h,2*h),i.setRenderTarget(e),i.render(u,Wn)}_blur(e,t,n,i){const f=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,f,t,n,s),this._blurPass(f,e,n,n,s)}_blurPass(e,t,n,i,f){const s=this._renderer,u=this._blurMaterial,_=this._lodMeshes[i];_.material=u;const D=u.uniforms;D.envMap.value=e.texture,D.sigma.value=f,D.mipInt.value=this._lodMax-n;const R=this._sizeLods[i];Fn(t,3*R*(i>this._lodMax-On?i-this._lodMax+On:0),4*(this._cubeSize-R),3*R,2*R),s.setRenderTarget(t),s.render(_,Wn)}};function Mr(e){const t=[],n=[];let i=e;const f=e-On+1+vr;for(let s=0;s<f;s++){const u=Math.pow(2,i);t.push(u);const _=1/(u-2),D=-_,R=1+_,G=[D,D,R,D,R,R,D,D,R,R,D,R],y=6,h=6,C=3,U=new Float32Array(108),H=new Float32Array(108);for(let o=0;o<y;o++){const O=o%3*2/3-1,z=o>2?0:-1,m=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];U.set(m,18*o);for(let v=0;v<h;v++){const A=G[v*2]*2-1,L=G[v*2+1]*2-1;o===0?Dn.set(1,L,A):o===1?Dn.set(-A,1,-L):o===2?Dn.set(-A,L,1):o===3?Dn.set(-1,L,-A):o===4?Dn.set(-A,-1,L):Dn.set(A,L,-1),Dn.toArray(H,(o*h+v)*C)}}const d=new $n;d.setAttribute("position",new ft(U,C)),d.setAttribute("outputDirection",new ft(H,C)),n.push(new Pn(d,null)),i>On&&i--}return{lodMeshes:n,sizeLods:t}}function Jt(e,t,n){const i=new Sn(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fn(e,t,n,i,f){e.viewport.set(t,n,i,f),e.scissor.set(t,n,i,f)}function Tr(e,t,n){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ar(e,t,n){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jt(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ei(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gt=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qt(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ut(5,5,5),f=new Cn({name:"CubemapFromEquirect",uniforms:at(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});f.uniforms.tEquirect.value=t;const s=new Pn(i,f),u=t.minFilter;return t.minFilter===1008&&(t.minFilter=Tn),new lr(1,10,this).update(e,s),t.minFilter=u,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const f=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(f)}};function Rr(e){let t=new WeakMap,n=new WeakMap,i=null;function f(h,C=!1){return h==null?null:C?u(h):s(h)}function s(h){if(h&&h.isTexture){const C=h.mapping;if(C===303||C===304)if(t.has(h)){const U=t.get(h).texture;return _(U,h.mapping)}else{const U=h.image;if(U&&U.height>0){const H=new gt(U.height);return H.fromEquirectangularTexture(e,h),t.set(h,H),h.addEventListener("dispose",R),_(H.texture,h.mapping)}else return null}}return h}function u(h){if(h&&h.isTexture){const C=h.mapping,U=C===303||C===304,H=C===301||C===302;if(U||H){let d=n.get(h);const o=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==o)return i===null&&(i=new vt(e)),d=U?i.fromEquirectangular(h,d):i.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,n.set(h,d),d.texture;if(d!==void 0)return d.texture;{const O=h.image;return U&&O&&O.height>0||H&&O&&D(O)?(i===null&&(i=new vt(e)),d=U?i.fromEquirectangular(h):i.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,n.set(h,d),h.addEventListener("dispose",G),d.texture):null}}}return h}function _(h,C){return C===303?h.mapping=301:C===304&&(h.mapping=302),h}function D(h){let C=0;const U=6;for(let H=0;H<U;H++)h[H]!==void 0&&C++;return C===U}function R(h){const C=h.target;C.removeEventListener("dispose",R);const U=t.get(C);U!==void 0&&(t.delete(C),U.dispose())}function G(h){const C=h.target;C.removeEventListener("dispose",G);const U=n.get(C);U!==void 0&&(n.delete(C),U.dispose())}function y(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:f,dispose:y}}function xr(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const f=e.getExtension(i);return t[i]=f,f}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const f=n(i);return f===null&&Oi("WebGLRenderer: "+i+" extension not supported."),f}}}function Cr(e,t,n,i){const f={},s=new WeakMap;function u(y){const h=y.target;h.index!==null&&t.remove(h.index);for(const U in h.attributes)t.remove(h.attributes[U]);h.removeEventListener("dispose",u),delete f[h.id];const C=s.get(h);C&&(t.remove(C),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function _(y,h){return f[h.id]===!0||(h.addEventListener("dispose",u),f[h.id]=!0,n.memory.geometries++),h}function D(y){const h=y.attributes;for(const C in h)t.update(h[C],e.ARRAY_BUFFER)}function R(y){const h=[],C=y.index,U=y.attributes.position;let H=0;if(U===void 0)return;if(C!==null){const O=C.array;H=C.version;for(let z=0,m=O.length;z<m;z+=3){const v=O[z+0],A=O[z+1],L=O[z+2];h.push(v,A,A,L,L,v)}}else{const O=U.array;H=U.version;for(let z=0,m=O.length/3-1;z<m;z+=3){const v=z+0,A=z+1,L=z+2;h.push(v,A,A,L,L,v)}}const d=new(U.count>=65535?zi:qi)(h,1);d.version=H;const o=s.get(y);o&&t.remove(o),s.set(y,d)}function G(y){const h=s.get(y);if(h){const C=y.index;C!==null&&h.version<C.version&&R(y)}else R(y);return s.get(y)}return{get:_,update:D,getWireframeAttribute:G}}function Pr(e,t,n){let i;function f(y){i=y}let s,u;function _(y){s=y.type,u=y.bytesPerElement}function D(y,h){e.drawElements(i,h,s,y*u),n.update(h,i,1)}function R(y,h,C){C!==0&&(e.drawElementsInstanced(i,h,s,y*u,C),n.update(h,i,C))}function G(y,h,C){if(C===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,y,0,C);let U=0;for(let H=0;H<C;H++)U+=h[H];n.update(U,i,1)}this.setMode=f,this.setIndex=_,this.render=D,this.renderInstances=R,this.renderMultiDraw=G}function br(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,u,_){switch(n.calls++,u){case e.TRIANGLES:n.triangles+=_*(s/3);break;case e.LINES:n.lines+=_*(s/2);break;case e.LINE_STRIP:n.lines+=_*(s-1);break;case e.LINE_LOOP:n.lines+=_*s;break;case e.POINTS:n.points+=_*s;break;default:Ze("WebGLInfo: Unknown draw mode:",u)}}function f(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:f,update:i}}function Lr(e,t,n){const i=new WeakMap,f=new hn;function s(u,_,D){const R=u.morphTargetInfluences,G=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,y=G!==void 0?G.length:0;let h=i.get(_);if(h===void 0||h.count!==y){let p=function(){L.dispose(),i.delete(_),_.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const C=_.morphAttributes.position!==void 0,U=_.morphAttributes.normal!==void 0,H=_.morphAttributes.color!==void 0,d=_.morphAttributes.position||[],o=_.morphAttributes.normal||[],O=_.morphAttributes.color||[];let z=0;C===!0&&(z=1),U===!0&&(z=2),H===!0&&(z=3);let m=_.attributes.position.count*z,v=1;m>t.maxTextureSize&&(v=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);const A=new Float32Array(m*v*4*y),L=new It(A,m,v,y);L.type=Ft,L.needsUpdate=!0;const c=z*4;for(let q=0;q<y;q++){const w=d[q],F=o[q],re=O[q],b=m*v*4*q;for(let W=0;W<w.count;W++){const J=W*c;C===!0&&(f.fromBufferAttribute(w,W),A[b+J+0]=f.x,A[b+J+1]=f.y,A[b+J+2]=f.z,A[b+J+3]=0),U===!0&&(f.fromBufferAttribute(F,W),A[b+J+4]=f.x,A[b+J+5]=f.y,A[b+J+6]=f.z,A[b+J+7]=0),H===!0&&(f.fromBufferAttribute(re,W),A[b+J+8]=f.x,A[b+J+9]=f.y,A[b+J+10]=f.z,A[b+J+11]=re.itemSize===4?f.w:1)}}h={count:y,texture:L,size:new mn(m,v)},i.set(_,h),_.addEventListener("dispose",p)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)D.getUniforms().setValue(e,"morphTexture",u.morphTexture,n);else{let C=0;for(let H=0;H<R.length;H++)C+=R[H];const U=_.morphTargetsRelative?1:1-C;D.getUniforms().setValue(e,"morphTargetBaseInfluence",U),D.getUniforms().setValue(e,"morphTargetInfluences",R)}D.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),D.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Ur(e,t,n,i,f){let s=new WeakMap;function u(R){const G=f.render.frame,y=R.geometry,h=t.get(R,y);if(s.get(h)!==G&&(t.update(h),s.set(h,G)),R.isInstancedMesh&&(R.hasEventListener("dispose",D)===!1&&R.addEventListener("dispose",D),s.get(R)!==G&&(n.update(R.instanceMatrix,e.ARRAY_BUFFER),R.instanceColor!==null&&n.update(R.instanceColor,e.ARRAY_BUFFER),s.set(R,G))),R.isSkinnedMesh){const C=R.skeleton;s.get(C)!==G&&(C.update(),s.set(C,G))}return h}function _(){s=new WeakMap}function D(R){const G=R.target;G.removeEventListener("dispose",D),i.releaseStatesOfObject(G),n.remove(G.instanceMatrix),G.instanceColor!==null&&n.remove(G.instanceColor)}return{update:u,dispose:_}}var wr={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Dr(e,t,n,i,f,s){const u=new Sn(t,n,{type:e,depthBuffer:f,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let _=null,D=null;const R=new $n;R.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),R.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const G=new Qi({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Pn(R,G),h=new yt(-1,1,1,-1,0,1);let C=null,U=null,H=!1,d,o=null,O=[],z=!1;this.setSize=function(m,v){u.setSize(m,v),_!==null&&_.setSize(m,v),D!==null&&D.setSize(m,v);for(let A=0;A<O.length;A++){const L=O[A];L.setSize&&L.setSize(m,v)}},this.setEffects=function(m){O=m,z=O.length>0&&O[0].isRenderPass===!0;const v=u.width,A=u.height;O.length>0&&_===null&&(_=new Sn(v,A,{type:wn,depthBuffer:!1,stencilBuffer:!1}),D=new Sn(v,A,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<O.length;L++){const c=O[L];c.setSize&&c.setSize(v,A)}},this.begin=function(m,v){if(H||m.toneMapping===0&&O.length===0)return!1;if(o=v,v!==null){const A=v.width,L=v.height;(u.width!==A||u.height!==L)&&this.setSize(A,L)}return z===!1&&m.setRenderTarget(u),d=m.toneMapping,m.toneMapping=0,!0},this.hasRenderPass=function(){return z},this.end=function(m,v){m.toneMapping=d,H=!0;let A=u,L=_;for(let c=0;c<O.length;c++){const p=O[c];p.enabled!==!1&&(p.render(m,L,A,v),p.needsSwap!==!1&&(A=L,L=L===_?D:_))}if(C!==m.outputColorSpace||U!==m.toneMapping){C=m.outputColorSpace,U=m.toneMapping,G.defines={},Je.getTransfer(C)==="srgb"&&(G.defines.SRGB_TRANSFER="");const c=wr[U];c&&(G.defines[c]=""),G.needsUpdate=!0}G.uniforms.tDiffuse.value=A.texture,m.setRenderTarget(o),m.render(y,h),o=null,H=!1},this.isCompositing=function(){return H},this.dispose=function(){u.dispose(),_!==null&&_.dispose(),D!==null&&D.dispose(),R.dispose(),G.dispose()}}var ni=new Gi,St=new Zn(1,1),ti=new It,ii=new Hi,ri=new qt,ai=[],oi=[],si=new Float32Array(16),li=new Float32Array(9),ci=new Float32Array(4);function Bn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const f=t*n;let s=ai[f];if(s===void 0&&(s=new Float32Array(f),ai[f]=s),t!==0){i.toArray(s,0);for(let u=1,_=0;u!==t;++u)_+=n,e[u].toArray(s,_)}return s}function sn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ln(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function jn(e,t){let n=oi[t];n===void 0&&(n=new Int32Array(t),oi[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Ir(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Nr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(sn(n,t))return;e.uniform2fv(this.addr,t),ln(n,t)}}function yr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(sn(n,t))return;e.uniform3fv(this.addr,t),ln(n,t)}}function Or(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(sn(n,t))return;e.uniform4fv(this.addr,t),ln(n,t)}}function Fr(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(sn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ln(n,t)}else{if(sn(n,i))return;ci.set(i),e.uniformMatrix2fv(this.addr,!1,ci),ln(n,i)}}function Br(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(sn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ln(n,t)}else{if(sn(n,i))return;li.set(i),e.uniformMatrix3fv(this.addr,!1,li),ln(n,i)}}function Gr(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(sn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ln(n,t)}else{if(sn(n,i))return;si.set(i),e.uniformMatrix4fv(this.addr,!1,si),ln(n,i)}}function Hr(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Vr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(sn(n,t))return;e.uniform2iv(this.addr,t),ln(n,t)}}function Wr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(sn(n,t))return;e.uniform3iv(this.addr,t),ln(n,t)}}function kr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(sn(n,t))return;e.uniform4iv(this.addr,t),ln(n,t)}}function zr(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Xr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(sn(n,t))return;e.uniform2uiv(this.addr,t),ln(n,t)}}function Yr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(sn(n,t))return;e.uniform3uiv(this.addr,t),ln(n,t)}}function Kr(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(sn(n,t))return;e.uniform4uiv(this.addr,t),ln(n,t)}}function qr(e,t,n){const i=this.cache,f=n.allocateTextureUnit();i[0]!==f&&(e.uniform1i(this.addr,f),i[0]=f);let s;this.type===e.SAMPLER_2D_SHADOW?(St.compareFunction=n.isReversedDepthBuffer()?518:515,s=St):s=ni,n.setTexture2D(t||s,f)}function Zr(e,t,n){const i=this.cache,f=n.allocateTextureUnit();i[0]!==f&&(e.uniform1i(this.addr,f),i[0]=f),n.setTexture3D(t||ii,f)}function $r(e,t,n){const i=this.cache,f=n.allocateTextureUnit();i[0]!==f&&(e.uniform1i(this.addr,f),i[0]=f),n.setTextureCube(t||ri,f)}function Qr(e,t,n){const i=this.cache,f=n.allocateTextureUnit();i[0]!==f&&(e.uniform1i(this.addr,f),i[0]=f),n.setTexture2DArray(t||ti,f)}function Jr(e){switch(e){case 5126:return Ir;case 35664:return Nr;case 35665:return yr;case 35666:return Or;case 35674:return Fr;case 35675:return Br;case 35676:return Gr;case 5124:case 35670:return Hr;case 35667:case 35671:return Vr;case 35668:case 35672:return Wr;case 35669:case 35673:return kr;case 5125:return zr;case 36294:return Xr;case 36295:return Yr;case 36296:return Kr;case 35678:case 36198:case 36298:case 36306:case 35682:return qr;case 35679:case 36299:case 36307:return Zr;case 35680:case 36300:case 36308:case 36293:return $r;case 36289:case 36303:case 36311:case 36292:return Qr}}function jr(e,t){e.uniform1fv(this.addr,t)}function ea(e,t){const n=Bn(t,this.size,2);e.uniform2fv(this.addr,n)}function na(e,t){const n=Bn(t,this.size,3);e.uniform3fv(this.addr,n)}function ta(e,t){const n=Bn(t,this.size,4);e.uniform4fv(this.addr,n)}function ia(e,t){const n=Bn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ra(e,t){const n=Bn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function aa(e,t){const n=Bn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function oa(e,t){e.uniform1iv(this.addr,t)}function sa(e,t){e.uniform2iv(this.addr,t)}function la(e,t){e.uniform3iv(this.addr,t)}function ca(e,t){e.uniform4iv(this.addr,t)}function fa(e,t){e.uniform1uiv(this.addr,t)}function da(e,t){e.uniform2uiv(this.addr,t)}function ua(e,t){e.uniform3uiv(this.addr,t)}function pa(e,t){e.uniform4uiv(this.addr,t)}function ha(e,t,n){const i=this.cache,f=t.length,s=jn(n,f);sn(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));let u;this.type===e.SAMPLER_2D_SHADOW?u=St:u=ni;for(let _=0;_!==f;++_)n.setTexture2D(t[_]||u,s[_])}function ma(e,t,n){const i=this.cache,f=t.length,s=jn(n,f);sn(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let u=0;u!==f;++u)n.setTexture3D(t[u]||ii,s[u])}function _a(e,t,n){const i=this.cache,f=t.length,s=jn(n,f);sn(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let u=0;u!==f;++u)n.setTextureCube(t[u]||ri,s[u])}function va(e,t,n){const i=this.cache,f=t.length,s=jn(n,f);sn(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let u=0;u!==f;++u)n.setTexture2DArray(t[u]||ti,s[u])}function ga(e){switch(e){case 5126:return jr;case 35664:return ea;case 35665:return na;case 35666:return ta;case 35674:return ia;case 35675:return ra;case 35676:return aa;case 5124:case 35670:return oa;case 35667:case 35671:return sa;case 35668:case 35672:return la;case 35669:case 35673:return ca;case 5125:return fa;case 36294:return da;case 36295:return ua;case 36296:return pa;case 35678:case 36198:case 36298:case 36306:case 35682:return ha;case 35679:case 36299:case 36307:return ma;case 35680:case 36300:case 36308:case 36293:return _a;case 36289:case 36303:case 36311:case 36292:return va}}var Sa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jr(t.type)}},Ea=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ga(t.type)}},Ma=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let f=0,s=i.length;f!==s;++f){const u=i[f];u.setValue(e,t[u.id],n)}}},Et=/(\w+)(\])?(\[|\.)?/g;function fi(e,t){e.seq.push(t),e.map[t.id]=t}function Ta(e,t,n){const i=e.name,f=i.length;for(Et.lastIndex=0;;){const s=Et.exec(i),u=Et.lastIndex;let _=s[1];const D=s[2]==="]",R=s[3];if(D&&(_=_|0),R===void 0||R==="["&&u+2===f){fi(n,R===void 0?new Sa(_,e,t):new Ea(_,e,t));break}else{let G=n.map[_];G===void 0&&(G=new Ma(_),fi(n,G)),n=G}}}var et=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const u=e.getActiveUniform(t,s);Ta(u,e.getUniformLocation(t,u.name),this)}const i=[],f=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):f.push(s);i.length>0&&(this.seq=i.concat(f))}setValue(e,t,n,i){const f=this.map[t];f!==void 0&&f.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let f=0,s=t.length;f!==s;++f){const u=t[f],_=n[u.id];_.needsUpdate!==!1&&u.setValue(e,_.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,f=e.length;i!==f;++i){const s=e[i];s.id in t&&n.push(s)}return n}};function di(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Aa=37297,Ra=0;function xa(e,t){const n=e.split(`
`),i=[],f=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let u=f;u<s;u++){const _=u+1;i.push(`${_===t?">":" "} ${_}: ${n[u]}`)}return i.join(`
`)}var ui=new Ne;function Ca(e){Je._getMatrix(ui,Je.workingColorSpace,e);const t=`mat3( ${ui.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(e)){case Xt:return[t,"LinearTransferOETF"];case rt:return[t,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function pi(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),f=(e.getShaderInfoLog(t)||"").trim();if(i&&f==="")return"";const s=/ERROR: 0:(\d+)/.exec(f);if(s){const u=parseInt(s[1]);return n.toUpperCase()+`

`+f+`

`+xa(e.getShaderSource(t),u)}else return f}function Pa(e,t){const n=Ca(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var ba={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function La(e,t){const n=ba[t];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var nt=new Ie;function Ua(){return Je.getLuminanceCoefficients(nt),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${nt.x.toFixed(4)}, ${nt.y.toFixed(4)}, ${nt.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wa(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kn).join(`
`)}function Da(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Ia(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let f=0;f<i;f++){const s=e.getActiveAttrib(t,f),u=s.name;let _=1;s.type===e.FLOAT_MAT2&&(_=2),s.type===e.FLOAT_MAT3&&(_=3),s.type===e.FLOAT_MAT4&&(_=4),n[u]={type:s.type,location:e.getAttribLocation(t,u),locationSize:_}}return n}function kn(e){return e!==""}function hi(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Na=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mt(e){return e.replace(Na,Oa)}var ya=new Map;function Oa(e,t){let n=Le[t];if(n===void 0){const i=ya.get(t);if(i!==void 0)n=Le[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mt(n)}var Fa=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _i(e){return e.replace(Fa,Ba)}function Ba(e,t,n,i){let f="";for(let s=parseInt(t);s<parseInt(n);s++)f+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return f}function vi(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Ga={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Ha(e){return Ga[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Va={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Wa(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Va[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var ka={302:"ENVMAP_MODE_REFRACTION"};function za(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":ka[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xa={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Ya(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Xa[e.combine]||"ENVMAP_BLENDING_NONE"}function Ka(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function qa(e,t,n,i){const f=e.getContext(),s=n.defines;let u=n.vertexShader,_=n.fragmentShader;const D=Ha(n),R=Wa(n),G=za(n),y=Ya(n),h=Ka(n),C=wa(n),U=Da(s),H=f.createProgram();let d,o,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,U].filter(kn).join(`
`),d.length>0&&(d+=`
`),o=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,U].filter(kn).join(`
`),o.length>0&&(o+=`
`)):(d=[vi(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,U,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+G:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+D:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kn).join(`
`),o=[vi(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,U,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+R:"",n.envMap?"#define "+G:"",n.envMap?"#define "+y:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+D:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Le.tonemapping_pars_fragment:"",n.toneMapping!==0?La("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Pa("linearToOutputTexel",n.outputColorSpace),Ua(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kn).join(`
`)),u=Mt(u),u=hi(u,n),u=mi(u,n),_=Mt(_),_=hi(_,n),_=mi(_,n),u=_i(u),_=_i(_),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,d=[C,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,o=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const z=O+d+u,m=O+o+_,v=di(f,f.VERTEX_SHADER,z),A=di(f,f.FRAGMENT_SHADER,m);f.attachShader(H,v),f.attachShader(H,A),n.index0AttributeName!==void 0?f.bindAttribLocation(H,0,n.index0AttributeName):n.hasPositionAttribute===!0&&f.bindAttribLocation(H,0,"position"),f.linkProgram(H);function L(w){if(e.debug.checkShaderErrors){const F=f.getProgramInfoLog(H)||"",re=f.getShaderInfoLog(v)||"",b=f.getShaderInfoLog(A)||"",W=F.trim(),J=re.trim(),B=b.trim();let de=!0,X=!0;if(f.getProgramParameter(H,f.LINK_STATUS)===!1)if(de=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(f,H,v,A);else{const Z=pi(f,v,"vertex"),ne=pi(f,A,"fragment");Ze("WebGLProgram: Shader Error "+f.getError()+" - VALIDATE_STATUS "+f.getProgramParameter(H,f.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+Z+`
`+ne)}else W!==""?We("WebGLProgram: Program Info Log:",W):(J===""||B==="")&&(X=!1);X&&(w.diagnostics={runnable:de,programLog:W,vertexShader:{log:J,prefix:d},fragmentShader:{log:B,prefix:o}})}f.deleteShader(v),f.deleteShader(A),c=new et(f,H),p=Ia(f,H)}let c;this.getUniforms=function(){return c===void 0&&L(this),c};let p;this.getAttributes=function(){return p===void 0&&L(this),p};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=f.getProgramParameter(H,Aa)),q},this.destroy=function(){i.releaseStatesOfProgram(this),f.deleteProgram(H),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ra++,this.cacheKey=t,this.usedTimes=1,this.program=H,this.vertexShader=v,this.fragmentShader=A,this}var Za=0,$a=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qa(e),t.set(e,n)),n}},Qa=class{constructor(e){this.id=Za++,this.code=e,this.usedTimes=0}};function Ja(e){return e===1030||e===37490||e===36285}function ja(e,t,n,i,f,s){const u=new ir,_=new $a,D=new Set,R=[],G=new Map,y=i.logarithmicDepthBuffer;let h=i.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function U(c){return D.add(c),c===0?"uv":`uv${c}`}function H(c,p,q,w,F,re){const b=w.fog,W=F.geometry,J=c.isMeshStandardMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial?w.environment:null,B=c.isMeshStandardMaterial||c.isMeshLambertMaterial&&!c.envMap||c.isMeshPhongMaterial&&!c.envMap,de=t.get(c.envMap||J,B),X=de&&de.mapping===306?de.image.height:null,Z=C[c.type];c.precision!==null&&(h=i.getMaxPrecision(c.precision),h!==c.precision&&We("WebGLProgram.getParameters:",c.precision,"not supported, using",h,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Be=ne!==void 0?ne.length:0;let Re=0;W.morphAttributes.position!==void 0&&(Re=1),W.morphAttributes.normal!==void 0&&(Re=2),W.morphAttributes.color!==void 0&&(Re=3);let tn,we,V,j;if(Z){const on=An[Z];tn=on.vertexShader,we=on.fragmentShader}else{tn=c.vertexShader,we=c.fragmentShader;const on=_.getVertexShaderStage(c),Ve=_.getFragmentShaderStage(c);_.update(c,on,Ve),V=on.id,j=Ve.id}const ae=e.getRenderTarget(),xe=e.state.buffers.depth.getReversed(),Pe=F.isInstancedMesh===!0,he=F.isBatchedMesh===!0,ke=!!c.map,Ge=!!c.matcap,be=!!de,je=!!c.aoMap,fn=!!c.lightMap,_n=!!c.bumpMap&&c.wireframe===!1,Ke=!!c.normalMap,dn=!!c.displacementMap,rn=!!c.emissiveMap,an=!!c.metalnessMap,E=!!c.roughnessMap,un=c.anisotropy>0,He=c.clearcoat>0,Qe=c.dispersion>0,l=c.retroreflectivity>0,r=c.iridescence>0,g=c.sheen>0,I=c.transmission>0,Y=un&&!!c.anisotropyMap,te=He&&!!c.clearcoatMap,oe=He&&!!c.clearcoatNormalMap,T=He&&!!c.clearcoatRoughnessMap,ee=r&&!!c.iridescenceMap,ue=r&&!!c.iridescenceThicknessMap,ve=g&&!!c.sheenColorMap,Q=g&&!!c.sheenRoughnessMap,_e=!!c.specularMap,Me=!!c.specularColorMap,Ce=!!c.specularIntensityMap,ye=I&&!!c.transmissionMap,M=I&&!!c.thicknessMap,k=!!c.gradientMap,K=!!c.alphaMap,fe=c.alphaTest>0,ge=!!c.alphaHash,$=!!c.extensions;let ce=0;c.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ce=e.toneMapping);const Ae={shaderID:Z,shaderType:c.type,shaderName:c.name,vertexShader:tn,fragmentShader:we,defines:c.defines,customVertexShaderID:V,customFragmentShaderID:j,isRawShaderMaterial:c.isRawShaderMaterial===!0,glslVersion:c.glslVersion,precision:h,batching:he,batchingColor:he&&F._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&F.instanceColor!==null,instancingMorph:Pe&&F.morphTexture!==null,outputColorSpace:ae===null?e.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!c.alphaToCoverage,map:ke,matcap:Ge,envMap:be,envMapMode:be&&de.mapping,envMapCubeUVHeight:X,aoMap:je,lightMap:fn,bumpMap:_n,normalMap:Ke,displacementMap:dn,emissiveMap:rn,normalMapObjectSpace:Ke&&c.normalMapType===1,normalMapTangentSpace:Ke&&c.normalMapType===0,packedNormalMap:Ke&&c.normalMapType===0&&Ja(c.normalMap.format),metalnessMap:an,roughnessMap:E,anisotropy:un,anisotropyMap:Y,clearcoat:He,clearcoatMap:te,clearcoatNormalMap:oe,clearcoatRoughnessMap:T,dispersion:Qe,retroreflection:l,iridescence:r,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:g,sheenColorMap:ve,sheenRoughnessMap:Q,specularMap:_e,specularColorMap:Me,specularIntensityMap:Ce,transmission:I,transmissionMap:ye,thicknessMap:M,gradientMap:k,opaque:c.transparent===!1&&c.blending===1&&c.alphaToCoverage===!1,alphaMap:K,alphaTest:fe,alphaHash:ge,combine:c.combine,mapUv:ke&&U(c.map.channel),aoMapUv:je&&U(c.aoMap.channel),lightMapUv:fn&&U(c.lightMap.channel),bumpMapUv:_n&&U(c.bumpMap.channel),normalMapUv:Ke&&U(c.normalMap.channel),displacementMapUv:dn&&U(c.displacementMap.channel),emissiveMapUv:rn&&U(c.emissiveMap.channel),metalnessMapUv:an&&U(c.metalnessMap.channel),roughnessMapUv:E&&U(c.roughnessMap.channel),anisotropyMapUv:Y&&U(c.anisotropyMap.channel),clearcoatMapUv:te&&U(c.clearcoatMap.channel),clearcoatNormalMapUv:oe&&U(c.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:T&&U(c.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&U(c.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&U(c.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&U(c.sheenColorMap.channel),sheenRoughnessMapUv:Q&&U(c.sheenRoughnessMap.channel),specularMapUv:_e&&U(c.specularMap.channel),specularColorMapUv:Me&&U(c.specularColorMap.channel),specularIntensityMapUv:Ce&&U(c.specularIntensityMap.channel),transmissionMapUv:ye&&U(c.transmissionMap.channel),thicknessMapUv:M&&U(c.thicknessMap.channel),alphaMapUv:K&&U(c.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ke||un),vertexNormals:!!W.attributes.normal,vertexColors:c.vertexColors,vertexAlphas:c.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(ke||K),fog:!!b,useFog:c.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:c.wireframe===!1&&(c.flatShading===!0||W.attributes.normal===void 0&&Ke===!1&&(c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshPhysicalMaterial)),sizeAttenuation:c.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Re,numSunLights:p.sun.length,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numSunLightShadows:p.sunShadowMap.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:c.dithering,shadowMapEnabled:e.shadowMap.enabled&&q.length>0,shadowMapType:e.shadowMap.type,toneMapping:ce,decodeVideoTexture:ke&&c.map.isVideoTexture===!0&&Je.getTransfer(c.map.colorSpace)==="srgb",decodeVideoTextureEmissive:rn&&c.emissiveMap.isVideoTexture===!0&&Je.getTransfer(c.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:c.premultipliedAlpha,doubleSided:c.side===2,flipSided:c.side===1,useDepthPacking:c.depthPacking>=0,depthPacking:c.depthPacking||0,index0AttributeName:c.index0AttributeName,extensionClipCullDistance:$&&c.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&c.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:c.customProgramCacheKey()};return Ae.vertexUv1s=D.has(1),Ae.vertexUv2s=D.has(2),Ae.vertexUv3s=D.has(3),D.clear(),Ae}function d(c){const p=[];if(c.shaderID?p.push(c.shaderID):(p.push(c.customVertexShaderID),p.push(c.customFragmentShaderID)),c.defines!==void 0)for(const q in c.defines)p.push(q),p.push(c.defines[q]);return c.isRawShaderMaterial===!1&&(o(p,c),O(p,c),p.push(e.outputColorSpace)),p.push(c.customProgramCacheKey),p.join()}function o(c,p){c.push(p.precision),c.push(p.outputColorSpace),c.push(p.envMapMode),c.push(p.envMapCubeUVHeight),c.push(p.mapUv),c.push(p.alphaMapUv),c.push(p.lightMapUv),c.push(p.aoMapUv),c.push(p.bumpMapUv),c.push(p.normalMapUv),c.push(p.displacementMapUv),c.push(p.emissiveMapUv),c.push(p.metalnessMapUv),c.push(p.roughnessMapUv),c.push(p.anisotropyMapUv),c.push(p.clearcoatMapUv),c.push(p.clearcoatNormalMapUv),c.push(p.clearcoatRoughnessMapUv),c.push(p.iridescenceMapUv),c.push(p.iridescenceThicknessMapUv),c.push(p.sheenColorMapUv),c.push(p.sheenRoughnessMapUv),c.push(p.specularMapUv),c.push(p.specularColorMapUv),c.push(p.specularIntensityMapUv),c.push(p.transmissionMapUv),c.push(p.thicknessMapUv),c.push(p.combine),c.push(p.fogExp2),c.push(p.sizeAttenuation),c.push(p.morphTargetsCount),c.push(p.morphAttributeCount),c.push(p.numSunLights),c.push(p.numDirLights),c.push(p.numPointLights),c.push(p.numSpotLights),c.push(p.numSpotLightMaps),c.push(p.numHemiLights),c.push(p.numRectAreaLights),c.push(p.numSunLightShadows),c.push(p.numDirLightShadows),c.push(p.numPointLightShadows),c.push(p.numSpotLightShadows),c.push(p.numSpotLightShadowsWithMaps),c.push(p.numLightProbes),c.push(p.shadowMapType),c.push(p.toneMapping),c.push(p.numClippingPlanes),c.push(p.numClipIntersection),c.push(p.depthPacking)}function O(c,p){u.disableAll(),p.instancing&&u.enable(0),p.instancingColor&&u.enable(1),p.instancingMorph&&u.enable(2),p.matcap&&u.enable(3),p.envMap&&u.enable(4),p.normalMapObjectSpace&&u.enable(5),p.normalMapTangentSpace&&u.enable(6),p.clearcoat&&u.enable(7),p.iridescence&&u.enable(8),p.alphaTest&&u.enable(9),p.vertexColors&&u.enable(10),p.vertexAlphas&&u.enable(11),p.vertexUv1s&&u.enable(12),p.vertexUv2s&&u.enable(13),p.vertexUv3s&&u.enable(14),p.vertexTangents&&u.enable(15),p.anisotropy&&u.enable(16),p.alphaHash&&u.enable(17),p.batching&&u.enable(18),p.dispersion&&u.enable(19),p.retroreflection&&u.enable(24),p.batchingColor&&u.enable(20),p.gradientMap&&u.enable(21),p.packedNormalMap&&u.enable(22),p.vertexNormals&&u.enable(23),c.push(u.mask),u.disableAll(),p.fog&&u.enable(0),p.useFog&&u.enable(1),p.flatShading&&u.enable(2),p.logarithmicDepthBuffer&&u.enable(3),p.reversedDepthBuffer&&u.enable(4),p.skinning&&u.enable(5),p.morphTargets&&u.enable(6),p.morphNormals&&u.enable(7),p.morphColors&&u.enable(8),p.premultipliedAlpha&&u.enable(9),p.shadowMapEnabled&&u.enable(10),p.doubleSided&&u.enable(11),p.flipSided&&u.enable(12),p.useDepthPacking&&u.enable(13),p.dithering&&u.enable(14),p.transmission&&u.enable(15),p.sheen&&u.enable(16),p.opaque&&u.enable(17),p.pointsUvs&&u.enable(18),p.decodeVideoTexture&&u.enable(19),p.decodeVideoTextureEmissive&&u.enable(20),p.alphaToCoverage&&u.enable(21),p.numLightProbeGrids>0&&u.enable(22),p.hasPositionAttribute&&u.enable(23),c.push(u.mask)}function z(c){const p=C[c.type];let q;if(p){const w=An[p];q=nr.clone(w.uniforms)}else q=c.uniforms;return q}function m(c,p){let q=G.get(p);return q!==void 0?++q.usedTimes:(q=new qa(e,p,c,f),R.push(q),G.set(p,q)),q}function v(c){if(--c.usedTimes===0){const p=R.indexOf(c);R[p]=R[R.length-1],R.pop(),G.delete(c.cacheKey),c.destroy()}}function A(c){_.remove(c)}function L(){_.dispose()}return{getParameters:H,getProgramCacheKey:d,getUniforms:z,acquireProgram:m,releaseProgram:v,releaseShaderCache:A,programs:R,dispose:L}}function eo(){let e=new WeakMap;function t(u){return e.has(u)}function n(u){let _=e.get(u);return _===void 0&&(_={},e.set(u,_)),_}function i(u){e.delete(u)}function f(u,_,D){e.get(u)[_]=D}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:f,dispose:s}}function no(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function gi(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Si(){const e=[];let t=0;const n=[],i=[],f=[];function s(){t=0,n.length=0,i.length=0,f.length=0}function u(h){let C=0;return h.isInstancedMesh&&(C+=2),h.isSkinnedMesh&&(C+=1),C}function _(h,C,U,H,d,o){let O=e[t];return O===void 0?(O={id:h.id,object:h,geometry:C,material:U,materialVariant:u(h),groupOrder:H,renderOrder:h.renderOrder,z:d,group:o},e[t]=O):(O.id=h.id,O.object=h,O.geometry=C,O.material=U,O.materialVariant=u(h),O.groupOrder=H,O.renderOrder=h.renderOrder,O.z=d,O.group=o),t++,O}function D(h,C,U,H,d,o,O){O.reversedDepth===!0&&(d=-d);const z=_(h,C,U,H,d,o);U.transmission>0?i.push(z):U.transparent===!0?f.push(z):n.push(z)}function R(h,C,U,H,d,o){const O=_(h,C,U,H,d,o);U.transmission>0?i.unshift(O):U.transparent===!0?f.unshift(O):n.unshift(O)}function G(h,C){n.length>1&&n.sort(h||no),i.length>1&&i.sort(C||gi),f.length>1&&f.sort(C||gi)}function y(){for(let h=t,C=e.length;h<C;h++){const U=e[h];if(U.id===null)break;U.id=null,U.object=null,U.geometry=null,U.material=null,U.group=null}}return{opaque:n,transmissive:i,transparent:f,init:s,push:D,unshift:R,finish:y,sort:G}}function to(){let e=new WeakMap;function t(i,f){const s=e.get(i);let u;return s===void 0?(u=new Si,e.set(i,[u])):f>=s.length?(u=new Si,s.push(u)):u=s[f],u}function n(){e=new WeakMap}return{get:t,dispose:n}}function io(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new Ie,color:new $e};break;case"SpotLight":n={position:new Ie,direction:new Ie,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Ie,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Ie,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new Ie,halfWidth:new Ie,halfHeight:new Ie}}return e[t.id]=n,n}}}function ro(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mn};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mn};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mn,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ao=0;function oo(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function so(e){const t=new io,n=ro(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let R=0;R<9;R++)i.probe.push(new Ie);const f=new Ie,s=new yn,u=new yn;function _(R){let G=0,y=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let C=0,U=0,H=0,d=0,o=0,O=0,z=0,m=0,v=0,A=0,L=0,c=0,p=0,q=0;R.sort(oo);for(let F=0,re=R.length;F<re;F++){const b=R[F],W=b.color,J=b.intensity,B=b.distance;let de=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===1030?de=b.shadow.map.texture:de=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)G+=W.r*J,y+=W.g*J,h+=W.b*J;else if(b.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(b.sh.coefficients[X],J);q++}else if(b.isSunLight){const X=t.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,ne=n.get(b);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[U]=ne,i.sunShadowMap[U]=de;const Be=Z.getViewportCount();for(let Re=0;Re<Be;Re++)i.sunShadowMatrix[H+Re]=Z.getMatrix(Re),i.sunShadowCascade[H+Re]=Z._cascadeData[Re];H+=Be,U++}i.sun[C]=X,C++}else if(b.isDirectionalLight){const X=t.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,ne=n.get(b);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.directionalShadow[d]=ne,i.directionalShadowMap[d]=de,i.directionalShadowMatrix[d]=b.shadow.matrix,v++}i.directional[d]=X,d++}else if(b.isSpotLight){const X=t.get(b);X.position.setFromMatrixPosition(b.matrixWorld),X.color.copy(W).multiplyScalar(J),X.distance=B,X.coneCos=Math.cos(b.angle),X.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),X.decay=b.decay,i.spot[O]=X;const Z=b.shadow;if(b.map&&(i.spotLightMap[c]=b.map,c++,Z.updateMatrices(b),b.castShadow&&p++),i.spotLightMatrix[O]=Z.matrix,b.castShadow){const ne=n.get(b);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.spotShadow[O]=ne,i.spotShadowMap[O]=de,L++}O++}else if(b.isRectAreaLight){const X=t.get(b);X.color.copy(W).multiplyScalar(J),X.halfWidth.set(b.width*.5,0,0),X.halfHeight.set(0,b.height*.5,0),i.rectArea[z]=X,z++}else if(b.isPointLight){const X=t.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity),X.distance=b.distance,X.decay=b.decay,b.castShadow){const Z=b.shadow,ne=n.get(b);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,ne.shadowCameraNear=Z.camera.near,ne.shadowCameraFar=Z.camera.far,i.pointShadow[o]=ne,i.pointShadowMap[o]=de,i.pointShadowMatrix[o]=b.shadow.matrix,A++}i.point[o]=X,o++}else if(b.isHemisphereLight){const X=t.get(b);X.skyColor.copy(b.color).multiplyScalar(J),X.groundColor.copy(b.groundColor).multiplyScalar(J),i.hemi[m]=X,m++}}z>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=G,i.ambient[1]=y,i.ambient[2]=h;const w=i.hash;(w.sunLength!==C||w.directionalLength!==d||w.pointLength!==o||w.spotLength!==O||w.rectAreaLength!==z||w.hemiLength!==m||w.numSunShadows!==U||w.numDirectionalShadows!==v||w.numPointShadows!==A||w.numSpotShadows!==L||w.numSpotMaps!==c||w.numLightProbes!==q)&&(i.sun.length=C,i.directional.length=d,i.spot.length=O,i.rectArea.length=z,i.point.length=o,i.hemi.length=m,i.sunShadow.length=U,i.sunShadowMap.length=U,i.sunShadowMatrix.length=H,i.sunShadowCascade.length=H,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+c-p,i.spotLightMap.length=c,i.numSpotLightShadowsWithMaps=p,i.numLightProbes=q,w.sunLength=C,w.directionalLength=d,w.pointLength=o,w.spotLength=O,w.rectAreaLength=z,w.hemiLength=m,w.numSunShadows=U,w.numDirectionalShadows=v,w.numPointShadows=A,w.numSpotShadows=L,w.numSpotMaps=c,w.numLightProbes=q,i.version=ao++)}function D(R,G){let y=0,h=0,C=0,U=0,H=0,d=0;const o=G.matrixWorldInverse;for(let O=0,z=R.length;O<z;O++){const m=R[O];if(m.isSunLight){const v=i.sun[y];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(o),y++}else if(m.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(m.matrixWorld),f.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(f),v.direction.transformDirection(o),h++}else if(m.isSpotLight){const v=i.spot[U];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(o),v.direction.setFromMatrixPosition(m.matrixWorld),f.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(f),v.direction.transformDirection(o),U++}else if(m.isRectAreaLight){const v=i.rectArea[H];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(o),u.identity(),s.copy(m.matrixWorld),s.premultiply(o),u.extractRotation(s),v.halfWidth.set(m.width*.5,0,0),v.halfHeight.set(0,m.height*.5,0),v.halfWidth.applyMatrix4(u),v.halfHeight.applyMatrix4(u),H++}else if(m.isPointLight){const v=i.point[C];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(o),C++}else if(m.isHemisphereLight){const v=i.hemi[d];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(o),d++}}}return{setup:_,setupView:D,state:i}}function Ei(e){const t=new so(e),n=[],i=[],f=[];function s(h){y.camera=h,n.length=0,i.length=0,f.length=0}function u(h){n.push(h)}function _(h){i.push(h)}function D(h){f.push(h)}function R(){t.setup(n)}function G(h){t.setupView(n,h)}const y={lightsArray:n,shadowsArray:i,lightProbeGridArray:f,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:y,setupLights:R,setupLightsView:G,pushLight:u,pushShadow:_,pushLightProbeGrid:D}}function lo(e){let t=new WeakMap;function n(f,s=0){const u=t.get(f);let _;return u===void 0?(_=new Ei(e),t.set(f,[_])):s>=u.length?(_=new Ei(e),u.push(_)):_=u[s],_}function i(){t=new WeakMap}return{get:n,dispose:i}}var co=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fo=`uniform sampler2D shadow_pass;
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
}`,uo=[new Ie(1,0,0),new Ie(-1,0,0),new Ie(0,1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1)],po=[new Ie(0,-1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1),new Ie(0,-1,0),new Ie(0,-1,0)],Mi=new yn,zn=new Ie,Tt=new Ie;function ho(e,t,n){let i=new Vt;const f=new mn,s=new mn,u=new hn,_=new Li,D=new sr,R={},G=n.maxTextureSize,y={0:1,1:0,2:2},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mn},radius:{value:4}},vertexShader:co,fragmentShader:fo}),C=h.clone();C.defines.HORIZONTAL_PASS=1;const U=new $n;U.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const H=new Pn(U,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let o=this.type;this.render=function(A,L,c){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;this.type===2&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const p=e.getRenderTarget(),q=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),F=e.state;F.setBlending(0),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const re=o!==this.type;re&&L.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(W=>W.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,W=A.length;b<W;b++){const J=A[b],B=J.shadow;if(B===void 0){We("WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;f.copy(B.mapSize);const de=B.getFrameExtents();f.multiply(de),s.copy(B.mapSize),(f.x>G||f.y>G)&&(f.x>G&&(s.x=Math.floor(G/de.x),f.x=s.x*de.x,B.mapSize.x=s.x),f.y>G&&(s.y=Math.floor(G/de.y),f.y=s.y*de.y,B.mapSize.y=s.y));const X=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||re===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===3){if(J.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Sn(f.x,f.y,{format:st,type:wn,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),B.map.texture.name=J.name+".shadowMap",B.map.depthTexture=new Zn(f.x,f.y,Ft),B.map.depthTexture.name=J.name+".shadowMapDepth",B.map.depthTexture.format=ot,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Hn,B.map.depthTexture.magFilter=Hn}else J.isPointLight?(B.map=new gt(f.x),B.map.depthTexture=new Xi(f.x,qn)):(B.map=new Sn(f.x,f.y),B.map.depthTexture=new Zn(f.x,f.y,qn)),B.map.depthTexture.name=J.name+".shadowMap",B.map.depthTexture.format=ot,this.type===1?(B.map.depthTexture.compareFunction=X?518:515,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Hn,B.map.depthTexture.magFilter=Hn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==f.x||B.map.height!==f.y)&&B.map.setSize(f.x,f.y);const Z=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();J.isPointLight!==!0&&B.updateMatrices(J,c);for(let ne=0;ne<Z;ne++){const Be=B.getCamera(ne);if(J.isPointLight){const Re=B.camera,tn=B.matrix,we=J.distance||Re.far;we!==Re.far&&(Re.far=we,Re.updateProjectionMatrix()),zn.setFromMatrixPosition(J.matrixWorld),Re.position.copy(zn),Tt.copy(Re.position),Tt.add(uo[ne]),Re.up.copy(po[ne]),Re.lookAt(Tt),Re.updateMatrixWorld(),tn.makeTranslation(-zn.x,-zn.y,-zn.z),Mi.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Mi,Re.coordinateSystem,Re.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,ne),e.clear();else{ne===0&&(e.setRenderTarget(B.map),e.clear());const Re=B.getViewport(ne);u.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),F.viewport(u)}i=B.getFrustum(ne),m(L,c,Be,J,this.type)}B.isPointLightShadow!==!0&&this.type===3&&O(B,c),B.needsUpdate=!1}o=this.type,d.needsUpdate=!1,e.setRenderTarget(p,q,w)};function O(A,L){const c=t.update(H);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,C.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,C.needsUpdate=!0),A.mapPass===null?A.mapPass=new Sn(f.x,f.y,{format:st,type:wn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(L,null,c,h,H,null),C.uniforms.shadow_pass.value=A.mapPass.texture,C.uniforms.resolution.value.set(A.map.width,A.map.height),C.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(L,null,c,C,H,null)}function z(A,L,c,p){let q=null;const w=c.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)q=w;else if(q=c.isPointLight===!0?D:_,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const F=q.uuid,re=L.uuid;let b=R[F];b===void 0&&(b={},R[F]=b);let W=b[re];W===void 0&&(W=q.clone(),b[re]=W,L.addEventListener("dispose",v)),q=W}if(q.visible=L.visible,q.wireframe=L.wireframe,p===3?q.side=L.shadowSide!==null?L.shadowSide:L.side:q.side=L.shadowSide!==null?L.shadowSide:y[L.side],q.alphaMap=L.alphaMap,q.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,q.map=L.map,q.clipShadows=L.clipShadows,q.clippingPlanes=L.clippingPlanes,q.clipIntersection=L.clipIntersection,q.displacementMap=L.displacementMap,q.displacementScale=L.displacementScale,q.displacementBias=L.displacementBias,q.wireframeLinewidth=L.wireframeLinewidth,q.linewidth=L.linewidth,c.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const F=e.properties.get(q);F.light=c}return q}function m(A,L,c,p,q){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&q===3)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,A.matrixWorld);const F=t.update(A),re=A.material;if(Array.isArray(re)){const b=F.groups;for(let W=0,J=b.length;W<J;W++){const B=b[W],de=re[B.materialIndex];if(de&&de.visible){const X=z(A,de,p,q);A.onBeforeShadow(e,A,L,c,F,X,B),e.renderBufferDirect(c,null,F,X,A,B),A.onAfterShadow(e,A,L,c,F,X,B)}}}else if(re.visible){const b=z(A,re,p,q);A.onBeforeShadow(e,A,L,c,F,b,null),e.renderBufferDirect(c,null,F,b,A,null),A.onAfterShadow(e,A,L,c,F,b,null)}}const w=A.children;for(let F=0,re=w.length;F<re;F++)m(w[F],L,c,p,q)}function v(A){A.target.removeEventListener("dispose",v);for(const L in R){const c=R[L],p=A.target.uuid;p in c&&(c[p].dispose(),delete c[p])}}}function mo(e,t){function n(){let M=!1;const k=new hn;let K=null;const fe=new hn(0,0,0,0);return{setMask:function(ge){K!==ge&&!M&&(e.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){M=ge},setClear:function(ge,$,ce,Ae,on){on===!0&&(ge*=Ae,$*=Ae,ce*=Ae),k.set(ge,$,ce,Ae),fe.equals(k)===!1&&(e.clearColor(ge,$,ce,Ae),fe.copy(k))},reset:function(){M=!1,K=null,fe.set(-1,0,0,0)}}}function i(){let M=!1,k=!1,K=null,fe=null,ge=null;return{setReversed:function($){if(k!==$){const ce=t.get("EXT_clip_control");$?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),k=$;const Ae=ge;ge=null,this.setClear(Ae)}},getReversed:function(){return k},setTest:function($){$?ae(e.DEPTH_TEST):xe(e.DEPTH_TEST)},setMask:function($){K!==$&&!M&&(e.depthMask($),K=$)},setFunc:function($){if(k&&($=Bi[$]),fe!==$){switch($){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=$}},setLocked:function($){M=$},setClear:function($){ge!==$&&(ge=$,k&&($=1-$),e.clearDepth($))},reset:function(){M=!1,K=null,fe=null,ge=null,k=!1}}}function f(){let M=!1,k=null,K=null,fe=null,ge=null,$=null,ce=null,Ae=null,on=null;return{setTest:function(Ve){M||(Ve?ae(e.STENCIL_TEST):xe(e.STENCIL_TEST))},setMask:function(Ve){k!==Ve&&!M&&(e.stencilMask(Ve),k=Ve)},setFunc:function(Ve,En,xn){(K!==Ve||fe!==En||ge!==xn)&&(e.stencilFunc(Ve,En,xn),K=Ve,fe=En,ge=xn)},setOp:function(Ve,En,xn){($!==Ve||ce!==En||Ae!==xn)&&(e.stencilOp(Ve,En,xn),$=Ve,ce=En,Ae=xn)},setLocked:function(Ve){M=Ve},setClear:function(Ve){on!==Ve&&(e.clearStencil(Ve),on=Ve)},reset:function(){M=!1,k=null,K=null,fe=null,ge=null,$=null,ce=null,Ae=null,on=null}}}const s=new n,u=new i,_=new f,D=new WeakMap,R=new WeakMap;let G={},y={},h={},C=new WeakMap,U=[],H=null,d=!1,o=null,O=null,z=null,m=null,v=null,A=null,L=null,c=new $e(0,0,0),p=0,q=!1,w=null,F=null,re=null,b=null,W=null;const J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,de=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=de>=1):X.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=de>=2);let Z=null,ne={};const Be=e.getParameter(e.SCISSOR_BOX),Re=e.getParameter(e.VIEWPORT),tn=new hn().fromArray(Be),we=new hn().fromArray(Re);function V(M,k,K,fe){const ge=new Uint8Array(4),$=e.createTexture();e.bindTexture(M,$),e.texParameteri(M,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(M,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ce=0;ce<K;ce++)M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY?e.texImage3D(k,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,ge):e.texImage2D(k+ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return $}const j={};j[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),j[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),j[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),u.setClear(1),_.setClear(0),ae(e.DEPTH_TEST),u.setFunc(3),_n(!1),Ke(1),ae(e.CULL_FACE),je(0);function ae(M){G[M]!==!0&&(e.enable(M),G[M]=!0)}function xe(M){G[M]!==!1&&(e.disable(M),G[M]=!1)}function Pe(M,k){return h[M]!==k?(e.bindFramebuffer(M,k),h[M]=k,M===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=k),M===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=k),!0):!1}function he(M,k){let K=U,fe=!1;if(M){K=C.get(k),K===void 0&&(K=[],C.set(k,K));const ge=M.textures;if(K.length!==ge.length||K[0]!==e.COLOR_ATTACHMENT0){for(let $=0,ce=ge.length;$<ce;$++)K[$]=e.COLOR_ATTACHMENT0+$;K.length=ge.length,fe=!0}}else K[0]!==e.BACK&&(K[0]=e.BACK,fe=!0);fe&&e.drawBuffers(K)}function ke(M){return H!==M?(e.useProgram(M),H=M,!0):!1}const Ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};Ge[103]=e.MIN,Ge[104]=e.MAX;const be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function je(M,k,K,fe,ge,$,ce,Ae,on,Ve){if(M===0){d===!0&&(xe(e.BLEND),d=!1);return}if(d===!1&&(ae(e.BLEND),d=!0),M!==5){if(M!==o||Ve!==q){if((O!==100||v!==100)&&(e.blendEquation(e.FUNC_ADD),O=100,v=100),Ve)switch(M){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ze("WebGLState: Invalid blending: ",M)}else switch(M){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",M)}z=null,m=null,A=null,L=null,c.set(0,0,0),p=0,o=M,q=Ve}return}ge=ge||k,$=$||K,ce=ce||fe,(k!==O||ge!==v)&&(e.blendEquationSeparate(Ge[k],Ge[ge]),O=k,v=ge),(K!==z||fe!==m||$!==A||ce!==L)&&(e.blendFuncSeparate(be[K],be[fe],be[$],be[ce]),z=K,m=fe,A=$,L=ce),(Ae.equals(c)===!1||on!==p)&&(e.blendColor(Ae.r,Ae.g,Ae.b,on),c.copy(Ae),p=on),o=M,q=!1}function fn(M,k){M.side===2?xe(e.CULL_FACE):ae(e.CULL_FACE);let K=M.side===1;k&&(K=!K),_n(K),M.blending===1&&M.transparent===!1?je(0):je(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),u.setFunc(M.depthFunc),u.setTest(M.depthTest),u.setMask(M.depthWrite),s.setMask(M.colorWrite);const fe=M.stencilWrite;_.setTest(fe),fe&&(_.setMask(M.stencilWriteMask),_.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),_.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),rn(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ae(e.SAMPLE_ALPHA_TO_COVERAGE):xe(e.SAMPLE_ALPHA_TO_COVERAGE)}function _n(M){w!==M&&(M?e.frontFace(e.CW):e.frontFace(e.CCW),w=M)}function Ke(M){M!==0?(ae(e.CULL_FACE),M!==F&&(M===1?e.cullFace(e.BACK):M===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):xe(e.CULL_FACE),F=M}function dn(M){M!==re&&(B&&e.lineWidth(M),re=M)}function rn(M,k,K){M?(ae(e.POLYGON_OFFSET_FILL),(b!==k||W!==K)&&(b=k,W=K,u.getReversed()&&(k=-k),e.polygonOffset(k,K))):xe(e.POLYGON_OFFSET_FILL)}function an(M){M?ae(e.SCISSOR_TEST):xe(e.SCISSOR_TEST)}function E(M){M===void 0&&(M=e.TEXTURE0+J-1),Z!==M&&(e.activeTexture(M),Z=M)}function un(M,k,K){K===void 0&&(Z===null?K=e.TEXTURE0+J-1:K=Z);let fe=ne[K];fe===void 0&&(fe={type:void 0,texture:void 0},ne[K]=fe),(fe.type!==M||fe.texture!==k)&&(Z!==K&&(e.activeTexture(K),Z=K),e.bindTexture(M,k||j[M]),fe.type=M,fe.texture=k)}function He(){const M=ne[Z];M!==void 0&&M.type!==void 0&&(e.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function Qe(){try{e.compressedTexImage2D(...arguments)}catch(M){Ze("WebGLState:",M)}}function l(){try{e.compressedTexImage3D(...arguments)}catch(M){Ze("WebGLState:",M)}}function r(){try{e.texSubImage2D(...arguments)}catch(M){Ze("WebGLState:",M)}}function g(){try{e.texSubImage3D(...arguments)}catch(M){Ze("WebGLState:",M)}}function I(){try{e.compressedTexSubImage2D(...arguments)}catch(M){Ze("WebGLState:",M)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(M){Ze("WebGLState:",M)}}function te(){try{e.texStorage2D(...arguments)}catch(M){Ze("WebGLState:",M)}}function oe(){try{e.texStorage3D(...arguments)}catch(M){Ze("WebGLState:",M)}}function T(){try{e.texImage2D(...arguments)}catch(M){Ze("WebGLState:",M)}}function ee(){try{e.texImage3D(...arguments)}catch(M){Ze("WebGLState:",M)}}function ue(M){return y[M]!==void 0?y[M]:e.getParameter(M)}function ve(M,k){y[M]!==k&&(e.pixelStorei(M,k),y[M]=k)}function Q(M){tn.equals(M)===!1&&(e.scissor(M.x,M.y,M.z,M.w),tn.copy(M))}function _e(M){we.equals(M)===!1&&(e.viewport(M.x,M.y,M.z,M.w),we.copy(M))}function Me(M,k){let K=R.get(k);K===void 0&&(K=new WeakMap,R.set(k,K));let fe=K.get(M);fe===void 0&&(fe=e.getUniformBlockIndex(k,M.name),K.set(M,fe))}function Ce(M,k){const K=R.get(k).get(M);D.get(k)!==K&&(e.uniformBlockBinding(k,K,M.__bindingPointIndex),D.set(k,K))}function ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),u.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),G={},y={},Z=null,ne={},h={},C=new WeakMap,U=[],H=null,d=!1,o=null,O=null,z=null,m=null,v=null,A=null,L=null,c=new $e(0,0,0),p=0,q=!1,w=null,F=null,re=null,b=null,W=null,tn.set(0,0,e.canvas.width,e.canvas.height),we.set(0,0,e.canvas.width,e.canvas.height),s.reset(),u.reset(),_.reset()}return{buffers:{color:s,depth:u,stencil:_},enable:ae,disable:xe,bindFramebuffer:Pe,drawBuffers:he,useProgram:ke,setBlending:je,setMaterial:fn,setFlipSided:_n,setCullFace:Ke,setLineWidth:dn,setPolygonOffset:rn,setScissorTest:an,activeTexture:E,bindTexture:un,unbindTexture:He,compressedTexImage2D:Qe,compressedTexImage3D:l,texImage2D:T,texImage3D:ee,pixelStorei:ve,getParameter:ue,updateUBOMapping:Me,uniformBlockBinding:Ce,texStorage2D:te,texStorage3D:oe,texSubImage2D:r,texSubImage3D:g,compressedTexSubImage2D:I,compressedTexSubImage3D:Y,scissor:Q,viewport:_e,reset:ye}}function _o(e,t,n,i,f,s,u){const _=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,D=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),R=new mn,G=new WeakMap,y=new Set;let h;const C=new WeakMap;let U=!1;try{U=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function H(l,r){return U?new OffscreenCanvas(l,r):Wi("canvas")}function d(l,r,g){let I=1;const Y=Qe(l);if((Y.width>g||Y.height>g)&&(I=g/Math.max(Y.width,Y.height)),I<1)if(typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap||typeof VideoFrame<"u"&&l instanceof VideoFrame){const te=Math.floor(I*Y.width),oe=Math.floor(I*Y.height);h===void 0&&(h=H(te,oe));const T=r?H(te,oe):h;return T.width=te,T.height=oe,T.getContext("2d").drawImage(l,0,0,te,oe),We("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+te+"x"+oe+")."),T}else return"data"in l&&We("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),l;return l}function o(l){return l.generateMipmaps}function O(l){e.generateMipmap(l)}function z(l){return l.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:l.isWebGL3DRenderTarget?e.TEXTURE_3D:l.isWebGLArrayRenderTarget||l.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(l,r,g,I,Y,te=!1){if(l!==null){if(e[l]!==void 0)return e[l];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+l+"'")}let oe;I&&(oe=t.get("EXT_texture_norm16"),oe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let T=r;if(r===e.RED&&(g===e.FLOAT&&(T=e.R32F),g===e.HALF_FLOAT&&(T=e.R16F),g===e.UNSIGNED_BYTE&&(T=e.R8),g===e.UNSIGNED_SHORT&&oe&&(T=oe.R16_EXT),g===e.SHORT&&oe&&(T=oe.R16_SNORM_EXT)),r===e.RED_INTEGER&&(g===e.UNSIGNED_BYTE&&(T=e.R8UI),g===e.UNSIGNED_SHORT&&(T=e.R16UI),g===e.UNSIGNED_INT&&(T=e.R32UI),g===e.BYTE&&(T=e.R8I),g===e.SHORT&&(T=e.R16I),g===e.INT&&(T=e.R32I)),r===e.RG&&(g===e.FLOAT&&(T=e.RG32F),g===e.HALF_FLOAT&&(T=e.RG16F),g===e.UNSIGNED_BYTE&&(T=e.RG8),g===e.UNSIGNED_SHORT&&oe&&(T=oe.RG16_EXT),g===e.SHORT&&oe&&(T=oe.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(g===e.UNSIGNED_BYTE&&(T=e.RG8UI),g===e.UNSIGNED_SHORT&&(T=e.RG16UI),g===e.UNSIGNED_INT&&(T=e.RG32UI),g===e.BYTE&&(T=e.RG8I),g===e.SHORT&&(T=e.RG16I),g===e.INT&&(T=e.RG32I)),r===e.RGB_INTEGER&&(g===e.UNSIGNED_BYTE&&(T=e.RGB8UI),g===e.UNSIGNED_SHORT&&(T=e.RGB16UI),g===e.UNSIGNED_INT&&(T=e.RGB32UI),g===e.BYTE&&(T=e.RGB8I),g===e.SHORT&&(T=e.RGB16I),g===e.INT&&(T=e.RGB32I)),r===e.RGBA_INTEGER&&(g===e.UNSIGNED_BYTE&&(T=e.RGBA8UI),g===e.UNSIGNED_SHORT&&(T=e.RGBA16UI),g===e.UNSIGNED_INT&&(T=e.RGBA32UI),g===e.BYTE&&(T=e.RGBA8I),g===e.SHORT&&(T=e.RGBA16I),g===e.INT&&(T=e.RGBA32I)),r===e.RGB&&(g===e.UNSIGNED_SHORT&&oe&&(T=oe.RGB16_EXT),g===e.SHORT&&oe&&(T=oe.RGB16_SNORM_EXT),g===e.UNSIGNED_INT_5_9_9_9_REV&&(T=e.RGB9_E5),g===e.UNSIGNED_INT_10F_11F_11F_REV&&(T=e.R11F_G11F_B10F)),r===e.RGBA){const ee=te?Xt:Je.getTransfer(Y);g===e.FLOAT&&(T=e.RGBA32F),g===e.HALF_FLOAT&&(T=e.RGBA16F),g===e.UNSIGNED_BYTE&&(T=ee==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),g===e.UNSIGNED_SHORT&&oe&&(T=oe.RGBA16_EXT),g===e.SHORT&&oe&&(T=oe.RGBA16_SNORM_EXT),g===e.UNSIGNED_SHORT_4_4_4_4&&(T=e.RGBA4),g===e.UNSIGNED_SHORT_5_5_5_1&&(T=e.RGB5_A1)}return(T===e.R16F||T===e.R32F||T===e.RG16F||T===e.RG32F||T===e.RGBA16F||T===e.RGBA32F)&&t.get("EXT_color_buffer_float"),T}function v(l,r){let g;return l?r===null||r===1014||r===1020?g=e.DEPTH24_STENCIL8:r===1015?g=e.DEPTH32F_STENCIL8:r===1012&&(g=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===1014||r===1020?g=e.DEPTH_COMPONENT24:r===1015?g=e.DEPTH_COMPONENT32F:r===1012&&(g=e.DEPTH_COMPONENT16),g}function A(l,r){return o(l)===!0||l.isFramebufferTexture&&l.minFilter!==1003&&l.minFilter!==1006?Math.log2(Math.max(r.width,r.height))+1:l.mipmaps!==void 0&&l.mipmaps.length>0?l.mipmaps.length:l.isCompressedTexture&&Array.isArray(l.image)?r.mipmaps.length:1}function L(l){const r=l.target;r.removeEventListener("dispose",L),p(r),r.isVideoTexture&&G.delete(r),r.isHTMLTexture&&y.delete(r)}function c(l){const r=l.target;r.removeEventListener("dispose",c),w(r)}function p(l){const r=i.get(l);if(r.__webglInit===void 0)return;const g=l.source,I=C.get(g);if(I){const Y=I[r.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&q(l),Object.keys(I).length===0&&C.delete(g)}i.remove(l)}function q(l){const r=i.get(l);e.deleteTexture(r.__webglTexture);const g=l.source,I=C.get(g);delete I[r.__cacheKey],u.memory.textures--}function w(l){const r=i.get(l);if(l.depthTexture&&(l.depthTexture.dispose(),i.remove(l.depthTexture)),l.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(r.__webglFramebuffer[I]))for(let Y=0;Y<r.__webglFramebuffer[I].length;Y++)e.deleteFramebuffer(r.__webglFramebuffer[I][Y]);else e.deleteFramebuffer(r.__webglFramebuffer[I]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[I])}else{if(Array.isArray(r.__webglFramebuffer))for(let I=0;I<r.__webglFramebuffer.length;I++)e.deleteFramebuffer(r.__webglFramebuffer[I]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let I=0;I<r.__webglColorRenderbuffer.length;I++)r.__webglColorRenderbuffer[I]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[I]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const g=l.textures;for(let I=0,Y=g.length;I<Y;I++){const te=i.get(g[I]);te.__webglTexture&&(e.deleteTexture(te.__webglTexture),u.memory.textures--),i.remove(g[I])}i.remove(l)}let F=0;function re(){F=0}function b(){return F}function W(l){F=l}function J(){const l=F;return l>=f.maxTextures&&We("WebGLTextures: Trying to use "+(l+1)+" texture units while this GPU supports only "+f.maxTextures),F+=1,l}function B(l){const r=[];return r.push(l.wrapS),r.push(l.wrapT),r.push(l.wrapR||0),r.push(l.magFilter),r.push(l.minFilter),r.push(l.anisotropy),r.push(l.internalFormat),r.push(l.format),r.push(l.type),r.push(l.generateMipmaps),r.push(l.premultiplyAlpha),r.push(l.flipY),r.push(l.unpackAlignment),r.push(l.colorSpace),r.join()}function de(l,r){const g=i.get(l);if(l.isVideoTexture&&un(l),l.isRenderTargetTexture===!1&&l.isExternalTexture!==!0&&l.version>0&&g.__version!==l.version){const I=l.image;if(I===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(g,l,r);return}}else l.isExternalTexture&&(g.__webglTexture=l.sourceTexture?l.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,g.__webglTexture,e.TEXTURE0+r)}function X(l,r){const g=i.get(l);if(l.isRenderTargetTexture===!1&&l.version>0&&g.__version!==l.version){xe(g,l,r);return}else l.isExternalTexture&&(g.__webglTexture=l.sourceTexture?l.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,g.__webglTexture,e.TEXTURE0+r)}function Z(l,r){const g=i.get(l);if(l.isRenderTargetTexture===!1&&l.version>0&&g.__version!==l.version){xe(g,l,r);return}n.bindTexture(e.TEXTURE_3D,g.__webglTexture,e.TEXTURE0+r)}function ne(l,r){const g=i.get(l);if(l.isCubeDepthTexture!==!0&&l.version>0&&g.__version!==l.version){Pe(g,l,r);return}n.bindTexture(e.TEXTURE_CUBE_MAP,g.__webglTexture,e.TEXTURE0+r)}const Be={[yi]:e.REPEAT,[dt]:e.CLAMP_TO_EDGE,[Ji]:e.MIRRORED_REPEAT},Re={[Hn]:e.NEAREST,[Ii]:e.NEAREST_MIPMAP_NEAREST,[$i]:e.NEAREST_MIPMAP_LINEAR,[Tn]:e.LINEAR,[ji]:e.LINEAR_MIPMAP_NEAREST,[zt]:e.LINEAR_MIPMAP_LINEAR},tn={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(l,r){if(r.type===1015&&t.has("OES_texture_float_linear")===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(l,e.TEXTURE_WRAP_S,Be[r.wrapS]),e.texParameteri(l,e.TEXTURE_WRAP_T,Be[r.wrapT]),(l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY)&&e.texParameteri(l,e.TEXTURE_WRAP_R,Be[r.wrapR]),e.texParameteri(l,e.TEXTURE_MAG_FILTER,Re[r.magFilter]),e.texParameteri(l,e.TEXTURE_MIN_FILTER,Re[r.minFilter]),r.compareFunction&&(e.texParameteri(l,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(l,e.TEXTURE_COMPARE_FUNC,tn[r.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const g=t.get("EXT_texture_filter_anisotropic");e.texParameterf(l,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,f.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function V(l,r){let g=!1;l.__webglInit===void 0&&(l.__webglInit=!0,r.addEventListener("dispose",L));const I=r.source;let Y=C.get(I);Y===void 0&&(Y={},C.set(I,Y));const te=B(r);if(te!==l.__cacheKey){Y[te]===void 0&&(Y[te]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,g=!0),Y[te].usedTimes++;const oe=Y[l.__cacheKey];oe!==void 0&&(Y[l.__cacheKey].usedTimes--,oe.usedTimes===0&&q(r)),l.__cacheKey=te,l.__webglTexture=Y[te].texture}return g}function j(l,r,g){return Math.floor(Math.floor(l/g)/r)}function ae(l,r,g,I){const te=l.updateRanges;if(te.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,g,I,r.data);else{te.sort((ve,Q)=>ve.start-Q.start);let oe=0;for(let ve=1;ve<te.length;ve++){const Q=te[oe],_e=te[ve],Me=Q.start+Q.count,Ce=j(_e.start,r.width,4),ye=j(Q.start,r.width,4);_e.start<=Me+1&&Ce===ye&&j(_e.start+_e.count-1,r.width,4)===Ce?Q.count=Math.max(Q.count,_e.start+_e.count-Q.start):(++oe,te[oe]=_e)}te.length=oe+1;const T=n.getParameter(e.UNPACK_ROW_LENGTH),ee=n.getParameter(e.UNPACK_SKIP_PIXELS),ue=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let ve=0,Q=te.length;ve<Q;ve++){const _e=te[ve],Me=Math.floor(_e.start/4),Ce=Math.ceil(_e.count/4),ye=Me%r.width,M=Math.floor(Me/r.width),k=Ce,K=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(e.UNPACK_SKIP_ROWS,M),n.texSubImage2D(e.TEXTURE_2D,0,ye,M,k,K,g,I,r.data)}l.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,T),n.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function xe(l,r,g){let I=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(I=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(I=e.TEXTURE_3D);const Y=V(l,r),te=r.source;n.bindTexture(I,l.__webglTexture,e.TEXTURE0+g);const oe=i.get(te);if(te.version!==oe.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+g),!(typeof ImageBitmap<"u"&&r.image instanceof ImageBitmap)){const k=Je.getPrimaries(Je.workingColorSpace),K=r.colorSpace===""?null:Je.getPrimaries(r.colorSpace),fe=r.colorSpace===""||k===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let T=d(r.image,!1,f.maxTextureSize);T=He(r,T);const ee=s.convert(r.format,r.colorSpace),ue=s.convert(r.type);let ve=m(r.internalFormat,ee,ue,r.normalized,r.colorSpace,r.isVideoTexture);we(I,r);let Q;const _e=r.mipmaps,Me=r.isVideoTexture!==!0,Ce=oe.__version===void 0||Y===!0,ye=te.dataReady,M=A(r,T);if(r.isDepthTexture)ve=v(r.format===Bt,r.type),Ce&&(Me?n.texStorage2D(e.TEXTURE_2D,1,ve,T.width,T.height):n.texImage2D(e.TEXTURE_2D,0,ve,T.width,T.height,0,ee,ue,null));else if(r.isDataTexture)if(_e.length>0){Me&&Ce&&n.texStorage2D(e.TEXTURE_2D,M,ve,_e[0].width,_e[0].height);for(let k=0,K=_e.length;k<K;k++)Q=_e[k],Me?ye&&n.texSubImage2D(e.TEXTURE_2D,k,0,0,Q.width,Q.height,ee,ue,Q.data):n.texImage2D(e.TEXTURE_2D,k,ve,Q.width,Q.height,0,ee,ue,Q.data);r.generateMipmaps=!1}else Me?(Ce&&n.texStorage2D(e.TEXTURE_2D,M,ve,T.width,T.height),ye&&ae(r,T,ee,ue)):n.texImage2D(e.TEXTURE_2D,0,ve,T.width,T.height,0,ee,ue,T.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){Me&&Ce&&n.texStorage3D(e.TEXTURE_2D_ARRAY,M,ve,_e[0].width,_e[0].height,T.depth);for(let k=0,K=_e.length;k<K;k++)if(Q=_e[k],r.format!==1023)if(ee!==null)if(Me){if(ye)if(r.layerUpdates.size>0){const fe=Nt(Q.width,Q.height,r.format,r.type);for(const ge of r.layerUpdates){const $=Q.data.subarray(ge*fe/Q.data.BYTES_PER_ELEMENT,(ge+1)*fe/Q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,ge,Q.width,Q.height,1,ee,$)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,Q.width,Q.height,T.depth,ee,Q.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,k,ve,Q.width,Q.height,T.depth,0,Q.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?ye&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,Q.width,Q.height,T.depth,ee,ue,Q.data):n.texImage3D(e.TEXTURE_2D_ARRAY,k,ve,Q.width,Q.height,T.depth,0,ee,ue,Q.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{Me&&Ce&&n.texStorage2D(e.TEXTURE_2D,M,ve,_e[0].width,_e[0].height);for(let k=0,K=_e.length;k<K;k++)Q=_e[k],r.format!==1023?ee!==null?Me?ye&&n.compressedTexSubImage2D(e.TEXTURE_2D,k,0,0,Q.width,Q.height,ee,Q.data):n.compressedTexImage2D(e.TEXTURE_2D,k,ve,Q.width,Q.height,0,Q.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?ye&&n.texSubImage2D(e.TEXTURE_2D,k,0,0,Q.width,Q.height,ee,ue,Q.data):n.texImage2D(e.TEXTURE_2D,k,ve,Q.width,Q.height,0,ee,ue,Q.data)}else if(r.isDataArrayTexture)if(Me){if(Ce&&n.texStorage3D(e.TEXTURE_2D_ARRAY,M,ve,T.width,T.height,T.depth),ye)if(r.layerUpdates.size>0){const k=Nt(T.width,T.height,r.format,r.type);for(const K of r.layerUpdates){const fe=T.data.subarray(K*k/T.data.BYTES_PER_ELEMENT,(K+1)*k/T.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,T.width,T.height,1,ee,ue,fe)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,ee,ue,T.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,T.width,T.height,T.depth,0,ee,ue,T.data);else if(r.isData3DTexture)Me?(Ce&&n.texStorage3D(e.TEXTURE_3D,M,ve,T.width,T.height,T.depth),ye&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,ee,ue,T.data)):n.texImage3D(e.TEXTURE_3D,0,ve,T.width,T.height,T.depth,0,ee,ue,T.data);else if(r.isFramebufferTexture){if(Ce)if(Me)n.texStorage2D(e.TEXTURE_2D,M,ve,T.width,T.height);else{let k=T.width,K=T.height;for(let fe=0;fe<M;fe++)n.texImage2D(e.TEXTURE_2D,fe,ve,k,K,0,ee,ue,null),k>>=1,K>>=1}}else if(r.isHTMLTexture){if("texElementImage2D"in e){const k=e.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),T.parentNode!==k){k.appendChild(T),y.add(r),k.onpaint=K=>{const fe=K.changedElements;for(const ge of y)fe.includes(ge.image)&&(ge.needsUpdate=!0)},k.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,T);else{const fe=e.RGBA,ge=e.RGBA,$=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,fe,ge,$,T)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Me&&Ce){const k=Qe(_e[0]);n.texStorage2D(e.TEXTURE_2D,M,ve,k.width,k.height)}for(let k=0,K=_e.length;k<K;k++)Q=_e[k],Me?ye&&n.texSubImage2D(e.TEXTURE_2D,k,0,0,ee,ue,Q):n.texImage2D(e.TEXTURE_2D,k,ve,ee,ue,Q);r.generateMipmaps=!1}else if(Me){if(Ce){const k=Qe(T);n.texStorage2D(e.TEXTURE_2D,M,ve,k.width,k.height)}ye&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ee,ue,T)}else n.texImage2D(e.TEXTURE_2D,0,ve,ee,ue,T);o(r)&&O(I),oe.__version=te.version,r.onUpdate&&r.onUpdate(r)}l.__version=r.version}function Pe(l,r,g){if(r.image.length!==6)return;const I=V(l,r),Y=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture,e.TEXTURE0+g);const te=i.get(Y);if(Y.version!==te.__version||I===!0){n.activeTexture(e.TEXTURE0+g);const oe=Je.getPrimaries(Je.workingColorSpace),T=r.colorSpace===""?null:Je.getPrimaries(r.colorSpace),ee=r.colorSpace===""||oe===T?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ue=r.isCompressedTexture||r.image[0].isCompressedTexture,ve=r.image[0]&&r.image[0].isDataTexture,Q=[];for(let $=0;$<6;$++)!ue&&!ve?Q[$]=d(r.image[$],!0,f.maxCubemapSize):Q[$]=ve?r.image[$].image:r.image[$],Q[$]=He(r,Q[$]);const _e=Q[0],Me=s.convert(r.format,r.colorSpace),Ce=s.convert(r.type),ye=m(r.internalFormat,Me,Ce,r.normalized,r.colorSpace),M=r.isVideoTexture!==!0,k=te.__version===void 0||I===!0,K=Y.dataReady;let fe=A(r,_e);we(e.TEXTURE_CUBE_MAP,r);let ge;if(ue){M&&k&&n.texStorage2D(e.TEXTURE_CUBE_MAP,fe,ye,_e.width,_e.height);for(let $=0;$<6;$++){ge=Q[$].mipmaps;for(let ce=0;ce<ge.length;ce++){const Ae=ge[ce];r.format!==1023?Me!==null?M?K&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,Ae.width,Ae.height,Me,Ae.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,ye,Ae.width,Ae.height,0,Ae.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,Ae.width,Ae.height,Me,Ce,Ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,ye,Ae.width,Ae.height,0,Me,Ce,Ae.data)}}}else{if(ge=r.mipmaps,M&&k){ge.length>0&&fe++;const $=Qe(Q[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,fe,ye,$.width,$.height)}for(let $=0;$<6;$++)if(ve){M?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Q[$].width,Q[$].height,Me,Ce,Q[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,Q[$].width,Q[$].height,0,Me,Ce,Q[$].data);for(let ce=0;ce<ge.length;ce++){const Ae=ge[ce].image[$].image;M?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ae.width,Ae.height,Me,Ce,Ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,ye,Ae.width,Ae.height,0,Me,Ce,Ae.data)}}else{M?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,Ce,Q[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,Me,Ce,Q[$]);for(let ce=0;ce<ge.length;ce++){const Ae=ge[ce];M?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Me,Ce,Ae.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,ye,Me,Ce,Ae.image[$])}}}o(r)&&O(e.TEXTURE_CUBE_MAP),te.__version=Y.version,r.onUpdate&&r.onUpdate(r)}l.__version=r.version}function he(l,r,g,I,Y,te){const oe=s.convert(g.format,g.colorSpace),T=s.convert(g.type),ee=m(g.internalFormat,oe,T,g.normalized,g.colorSpace),ue=i.get(r),ve=i.get(g);if(ve.__renderTarget=r,!ue.__hasExternalTextures){const Q=Math.max(1,r.width>>te),_e=Math.max(1,r.height>>te);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,te,ee,Q,_e,r.depth,0,oe,T,null):n.texImage2D(Y,te,ee,Q,_e,0,oe,T,null)}n.bindFramebuffer(e.FRAMEBUFFER,l),E(r)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,I,Y,ve.__webglTexture,0,an(r)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,I,Y,ve.__webglTexture,te),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(l,r,g){if(e.bindRenderbuffer(e.RENDERBUFFER,l),r.depthBuffer){const I=r.depthTexture,Y=I&&I.isDepthTexture?I.type:null,te=v(r.stencilBuffer,Y),oe=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;E(r)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,an(r),te,r.width,r.height):g?e.renderbufferStorageMultisample(e.RENDERBUFFER,an(r),te,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,te,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,l)}else{const I=r.textures;for(let Y=0;Y<I.length;Y++){const te=I[Y],oe=s.convert(te.format,te.colorSpace),T=s.convert(te.type),ee=m(te.internalFormat,oe,T,te.normalized,te.colorSpace);E(r)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,an(r),ee,r.width,r.height):g?e.renderbufferStorageMultisample(e.RENDERBUFFER,an(r),ee,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,ee,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ge(l,r,g){const I=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,l),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(r.depthTexture);if(Y.__renderTarget=r,(!Y.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),I){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,r.depthTexture.addEventListener("dispose",L)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),we(e.TEXTURE_CUBE_MAP,r.depthTexture);const ue=s.convert(r.depthTexture.format),ve=s.convert(r.depthTexture.type);let Q;r.depthTexture.format===1026?Q=e.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(Q=e.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Q,r.width,r.height,0,ue,ve,null)}}else de(r.depthTexture,0);const te=Y.__webglTexture,oe=an(r),T=I?e.TEXTURE_CUBE_MAP_POSITIVE_X+g:e.TEXTURE_2D,ee=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)E(r)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,T,te,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,ee,T,te,0);else if(r.depthTexture.format===1027)E(r)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,T,te,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,ee,T,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(l){const r=i.get(l),g=l.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==l.depthTexture){const I=l.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),I){const Y=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,I.removeEventListener("dispose",Y)};I.addEventListener("dispose",Y),r.__depthDisposeCallback=Y}r.__boundDepthTexture=I}if(l.depthTexture&&!r.__autoAllocateDepthBuffer)if(g)for(let I=0;I<6;I++)Ge(r.__webglFramebuffer[I],l,I);else{const I=l.texture.mipmaps;I&&I.length>0?Ge(r.__webglFramebuffer[0],l,0):Ge(r.__webglFramebuffer,l,0)}else if(g){r.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[I]),r.__webglDepthbuffer[I]===void 0)r.__webglDepthbuffer[I]=e.createRenderbuffer(),ke(r.__webglDepthbuffer[I],l,!1);else{const Y=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer[I];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,te)}}else{const I=l.texture.mipmaps;if(I&&I.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),ke(r.__webglDepthbuffer,l,!1);else{const Y=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,te)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(l,r,g){const I=i.get(l);r!==void 0&&he(I.__webglFramebuffer,l,l.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),g!==void 0&&be(l)}function fn(l){const r=l.texture,g=i.get(l),I=i.get(r);l.addEventListener("dispose",c);const Y=l.textures,te=l.isWebGLCubeRenderTarget===!0,oe=Y.length>1;if(oe||(I.__webglTexture===void 0&&(I.__webglTexture=e.createTexture()),I.__version=r.version,u.memory.textures++),te){g.__webglFramebuffer=[];for(let T=0;T<6;T++)if(r.mipmaps&&r.mipmaps.length>0){g.__webglFramebuffer[T]=[];for(let ee=0;ee<r.mipmaps.length;ee++)g.__webglFramebuffer[T][ee]=e.createFramebuffer()}else g.__webglFramebuffer[T]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){g.__webglFramebuffer=[];for(let T=0;T<r.mipmaps.length;T++)g.__webglFramebuffer[T]=e.createFramebuffer()}else g.__webglFramebuffer=e.createFramebuffer();if(oe)for(let T=0,ee=Y.length;T<ee;T++){const ue=i.get(Y[T]);ue.__webglTexture===void 0&&(ue.__webglTexture=e.createTexture(),u.memory.textures++)}if(l.samples>0&&E(l)===!1){g.__webglMultisampledFramebuffer=e.createFramebuffer(),g.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let T=0;T<Y.length;T++){const ee=Y[T];g.__webglColorRenderbuffer[T]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,g.__webglColorRenderbuffer[T]);const ue=s.convert(ee.format,ee.colorSpace),ve=s.convert(ee.type),Q=m(ee.internalFormat,ue,ve,ee.normalized,ee.colorSpace,l.isXRRenderTarget===!0),_e=an(l);e.renderbufferStorageMultisample(e.RENDERBUFFER,_e,Q,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+T,e.RENDERBUFFER,g.__webglColorRenderbuffer[T])}e.bindRenderbuffer(e.RENDERBUFFER,null),l.depthBuffer&&(g.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(g.__webglDepthRenderbuffer,l,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture),we(e.TEXTURE_CUBE_MAP,r);for(let T=0;T<6;T++)if(r.mipmaps&&r.mipmaps.length>0)for(let ee=0;ee<r.mipmaps.length;ee++)he(g.__webglFramebuffer[T][ee],l,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+T,ee);else he(g.__webglFramebuffer[T],l,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);o(r)&&O(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let T=0,ee=Y.length;T<ee;T++){const ue=Y[T],ve=i.get(ue);let Q=e.TEXTURE_2D;(l.isWebGL3DRenderTarget||l.isWebGLArrayRenderTarget)&&(Q=l.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,ve.__webglTexture),we(Q,ue),he(g.__webglFramebuffer,l,ue,e.COLOR_ATTACHMENT0+T,Q,0),o(ue)&&O(Q)}n.unbindTexture()}else{let T=e.TEXTURE_2D;if((l.isWebGL3DRenderTarget||l.isWebGLArrayRenderTarget)&&(T=l.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(T,I.__webglTexture),we(T,r),r.mipmaps&&r.mipmaps.length>0)for(let ee=0;ee<r.mipmaps.length;ee++)he(g.__webglFramebuffer[ee],l,r,e.COLOR_ATTACHMENT0,T,ee);else he(g.__webglFramebuffer,l,r,e.COLOR_ATTACHMENT0,T,0);o(r)&&O(T),n.unbindTexture()}l.depthBuffer&&be(l)}function _n(l){const r=l.textures;for(let g=0,I=r.length;g<I;g++){const Y=r[g];if(o(Y)){const te=z(l),oe=i.get(Y).__webglTexture;n.bindTexture(te,oe),O(te),n.unbindTexture()}}}const Ke=[],dn=[];function rn(l){if(l.samples>0){if(E(l)===!1){const r=l.textures,g=l.width,I=l.height;let Y=e.COLOR_BUFFER_BIT;const te=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=i.get(l),T=r.length>1;if(T)for(let ue=0;ue<r.length;ue++)n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ee=l.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ue=0;ue<r.length;ue++){if(l.resolveDepthBuffer&&(l.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),l.stencilBuffer&&l.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),T){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const ve=i.get(r[ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,g,I,0,0,g,I,Y,e.NEAREST),D===!0&&(Ke.length=0,dn.length=0,Ke.push(e.COLOR_ATTACHMENT0+ue),l.depthBuffer&&l.storeMultisampledDepthBuffer===!1&&(Ke.push(te),dn.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,dn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),T)for(let ue=0;ue<r.length;ue++){n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const ve=i.get(r[ue]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,ve,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(l.depthBuffer&&l.storeMultisampledDepthBuffer===!1&&D){const r=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}function an(l){return Math.min(f.maxSamples,l.samples)}function E(l){const r=i.get(l);return l.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function un(l){const r=u.render.frame;G.get(l)!==r&&(G.set(l,r),l.update())}function He(l,r){const g=l.colorSpace,I=l.format,Y=l.type;return l.isCompressedTexture===!0||l.isVideoTexture===!0||g!=="srgb-linear"&&g!==""&&(Je.getTransfer(g)==="srgb"?(I!==1023||Y!==1009)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",g)),r}function Qe(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement?(R.width=l.naturalWidth||l.width,R.height=l.naturalHeight||l.height):typeof VideoFrame<"u"&&l instanceof VideoFrame?(R.width=l.displayWidth,R.height=l.displayHeight):(R.width=l.width,R.height=l.height),R}this.allocateTextureUnit=J,this.resetTextureUnits=re,this.getTextureUnits=b,this.setTextureUnits=W,this.setTexture2D=de,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ne,this.rebindTextures=je,this.setupRenderTarget=fn,this.updateRenderTargetMipmap=_n,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=E,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vo(e,t){function n(i,f=""){let s;const u=Je.getTransfer(f);if(i===1009)return e.UNSIGNED_BYTE;if(i===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return e.BYTE;if(i===1011)return e.SHORT;if(i===1012)return e.UNSIGNED_SHORT;if(i===1013)return e.INT;if(i===1014)return e.UNSIGNED_INT;if(i===1015)return e.FLOAT;if(i===1016)return e.HALF_FLOAT;if(i===1021)return e.ALPHA;if(i===1022)return e.RGB;if(i===1023)return e.RGBA;if(i===1026)return e.DEPTH_COMPONENT;if(i===1027)return e.DEPTH_STENCIL;if(i===1028)return e.RED;if(i===1029)return e.RED_INTEGER;if(i===1030)return e.RG;if(i===1031)return e.RG_INTEGER;if(i===1033)return e.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(u==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return u==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return u==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return u==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var go=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,So=`
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

}`,Eo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ht(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:go,fragmentShader:So,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mo=class extends Ni{constructor(e,t){super();const n=this;let i=null,f=1,s=null,u="local-floor",_=1,D=null,R=null,G=null,y=null,h=null,C=null;const U=typeof XRWebGLBinding<"u",H=new Eo,d={},o=t.getContextAttributes();let O=null,z=null;const m=[],v=[],A=new mn;let L=null,c=null;const p=new Kn;p.viewport=new hn;const q=new Kn;q.viewport=new hn;const w=[p,q],F=new Ki;let re=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=m[V];return j===void 0&&(j=new lt,m[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=m[V];return j===void 0&&(j=new lt,m[V]=j),j.getGripSpace()},this.getHand=function(V){let j=m[V];return j===void 0&&(j=new lt,m[V]=j),j.getHandSpace()};function W(V){const j=v.indexOf(V.inputSource);if(j===-1)return;const ae=m[j];ae!==void 0&&(ae.update(V.inputSource,V.frame,D||s),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",B);for(let V=0;V<m.length;V++){const j=v[V];j!==null&&(v[V]=null,m[V].disconnect(j))}re=null,b=null,H.reset();for(const V in d)delete d[V];if(e.setRenderTarget(O),h=null,y=null,G=null,i=null,z=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),c!==null){const V=c.camera;V.fov=c.fov,V.zoom=c.zoom,V.updateProjectionMatrix(),c=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){f=V,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){u=V,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return D||s},this.setReferenceSpace=function(V){D=V},this.getBaseLayer=function(){return y!==null?y:h},this.getBinding=function(){return G===null&&U&&(G=new XRWebGLBinding(i,t)),G},this.getFrame=function(){return C},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(O=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",J),i.addEventListener("inputsourceschange",B),o.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ae=null,xe=null;o.depth&&(xe=o.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=o.stencil?Bt:ot,ae=o.stencil?Kt:qn);const Pe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:f};G=this.getBinding(),y=G.createProjectionLayer(Pe),i.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new Sn(y.textureWidth,y.textureHeight,{format:ct,type:Vn,depthTexture:new Zn(y.textureWidth,y.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:o.stencil,colorSpace:e.outputColorSpace,samples:o.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}else{const j={antialias:o.antialias,alpha:!0,depth:o.depth,stencil:o.stencil,framebufferScaleFactor:f};h=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),z=new Sn(h.framebufferWidth,h.framebufferHeight,{format:ct,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:o.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(_),D=null,s=await i.requestReferenceSpace(u),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return H.getDepthTexture()};function B(V){for(let j=0;j<V.removed.length;j++){const ae=V.removed[j],xe=v.indexOf(ae);xe>=0&&(v[xe]=null,m[xe].disconnect(ae))}for(let j=0;j<V.added.length;j++){const ae=V.added[j];let xe=v.indexOf(ae);if(xe===-1){for(let he=0;he<m.length;he++)if(he>=v.length){v.push(ae),xe=he;break}else if(v[he]===null){v[he]=ae,xe=he;break}if(xe===-1)break}const Pe=m[xe];Pe&&Pe.connect(ae)}}const de=new Ie,X=new Ie;function Z(V,j,ae){de.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const xe=de.distanceTo(X),Pe=j.projectionMatrix.elements,he=ae.projectionMatrix.elements,ke=Pe[14]/(Pe[10]-1),Ge=Pe[14]/(Pe[10]+1),be=(Pe[9]+1)/Pe[5],je=(Pe[9]-1)/Pe[5],fn=(Pe[8]-1)/Pe[0],_n=(he[8]+1)/he[0],Ke=ke*fn,dn=ke*_n,rn=xe/(-fn+_n),an=rn*-fn;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(an),V.translateZ(rn),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Pe[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const E=ke+rn,un=Ge+rn,He=Ke-an,Qe=dn+(xe-an),l=be*Ge/un*E,r=je*Ge/un*E;V.projectionMatrix.makePerspective(He,Qe,l,r,E,un),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ne(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let j=V.near,ae=V.far;H.texture!==null&&(H.depthNear>0&&(j=H.depthNear),H.depthFar>0&&(ae=H.depthFar)),F.near=q.near=p.near=j,F.far=q.far=p.far=ae,(re!==F.near||b!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),re=F.near,b=F.far),F.layers.mask=V.layers.mask|6,p.layers.mask=F.layers.mask&-5,q.layers.mask=F.layers.mask&-3;const xe=V.parent,Pe=F.cameras;ne(F,xe);for(let he=0;he<Pe.length;he++)ne(Pe[he],xe);Pe.length===2?Z(F,p,q):F.projectionMatrix.copy(p.projectionMatrix),c===null&&V.isPerspectiveCamera&&(c={camera:V,fov:V.fov,zoom:V.zoom}),Be(V,F,xe)};function Be(V,j,ae){ae===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ui*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(y===null&&h===null))return _},this.setFoveation=function(V){_=V,y!==null&&(y.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return H.texture!==null},this.getDepthSensingMesh=function(){return H.getMesh(F)},this.getCameraTexture=function(V){return d[V]};let Re=null;function tn(V,j){if(R=j.getViewerPose(D||s),C=j,R!==null){const ae=R.views;h!==null&&(e.setRenderTargetFramebuffer(z,h.framebuffer),e.setRenderTarget(z));let xe=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,xe=!0);for(let he=0;he<ae.length;he++){const ke=ae[he];let Ge=null;if(h!==null)Ge=h.getViewport(ke);else{const je=G.getViewSubImage(y,ke);Ge=je.viewport,he===0&&(e.setRenderTargetTextures(z,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(z))}let be=w[he];be===void 0&&(be=new Kn,be.layers.enable(he),be.viewport=new hn,w[he]=be),be.matrix.fromArray(ke.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ke.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),he===0&&(F.matrix.copy(be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),xe===!0&&F.cameras.push(be)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&U){G=n.getBinding();const he=G.getDepthInformation(ae[0]);he&&he.isValid&&he.texture&&H.init(he,i.renderState)}if(Pe&&Pe.includes("camera-access")&&U){e.state.unbindTexture(),G=n.getBinding();for(let he=0;he<ae.length;he++){const ke=ae[he].camera;if(ke){let Ge=d[ke];Ge||(Ge=new Ht,d[ke]=Ge);const be=G.getCameraImage(ke);Ge.sourceTexture=be}}}}for(let ae=0;ae<m.length;ae++){const xe=v[ae],Pe=m[ae];xe!==null&&Pe!==void 0&&Pe.update(xe,j,D||s)}Re&&Re(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),C=null}const we=new Zt;we.setAnimationLoop(tn),this.setAnimationLoop=function(V){Re=V},this.dispose=function(){}}},To=new yn,Ti=new Ne;Ti.set(-1,0,0,0,1,0,0,0,1);function Ao(e,t){function n(d,o){d.matrixAutoUpdate===!0&&d.updateMatrix(),o.value.copy(d.matrix)}function i(d,o){o.color.getRGB(d.fogColor.value,Gt(e)),o.isFog?(d.fogNear.value=o.near,d.fogFar.value=o.far):o.isFogExp2&&(d.fogDensity.value=o.density)}function f(d,o,O,z,m){o.isNodeMaterial?o.uniformsNeedUpdate=!1:o.isMeshBasicMaterial?s(d,o):o.isMeshLambertMaterial?(s(d,o),o.envMap&&(d.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(s(d,o),y(d,o)):o.isMeshPhongMaterial?(s(d,o),G(d,o),o.envMap&&(d.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(s(d,o),h(d,o),o.isMeshPhysicalMaterial&&C(d,o,m)):o.isMeshMatcapMaterial?(s(d,o),U(d,o)):o.isMeshDepthMaterial?s(d,o):o.isMeshDistanceMaterial?(s(d,o),H(d,o)):o.isMeshNormalMaterial?s(d,o):o.isLineBasicMaterial?(u(d,o),o.isLineDashedMaterial&&_(d,o)):o.isPointsMaterial?D(d,o,O,z):o.isSpriteMaterial?R(d,o):o.isShadowMaterial?(d.color.value.copy(o.color),d.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function s(d,o){d.opacity.value=o.opacity,o.color&&d.diffuse.value.copy(o.color),o.emissive&&d.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(d.map.value=o.map,n(o.map,d.mapTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,n(o.alphaMap,d.alphaMapTransform)),o.bumpMap&&(d.bumpMap.value=o.bumpMap,n(o.bumpMap,d.bumpMapTransform),d.bumpScale.value=o.bumpScale,o.side===1&&(d.bumpScale.value*=-1)),o.normalMap&&(d.normalMap.value=o.normalMap,n(o.normalMap,d.normalMapTransform),d.normalScale.value.copy(o.normalScale),o.side===1&&d.normalScale.value.negate()),o.displacementMap&&(d.displacementMap.value=o.displacementMap,n(o.displacementMap,d.displacementMapTransform),d.displacementScale.value=o.displacementScale,d.displacementBias.value=o.displacementBias),o.emissiveMap&&(d.emissiveMap.value=o.emissiveMap,n(o.emissiveMap,d.emissiveMapTransform)),o.specularMap&&(d.specularMap.value=o.specularMap,n(o.specularMap,d.specularMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest);const O=t.get(o),z=O.envMap,m=O.envMapRotation;z&&(d.envMap.value=z,d.envMapRotation.value.setFromMatrix4(To.makeRotationFromEuler(m)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Ti),d.reflectivity.value=o.reflectivity,d.ior.value=o.ior,d.refractionRatio.value=o.refractionRatio),o.lightMap&&(d.lightMap.value=o.lightMap,d.lightMapIntensity.value=o.lightMapIntensity,n(o.lightMap,d.lightMapTransform)),o.aoMap&&(d.aoMap.value=o.aoMap,d.aoMapIntensity.value=o.aoMapIntensity,n(o.aoMap,d.aoMapTransform))}function u(d,o){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,o.map&&(d.map.value=o.map,n(o.map,d.mapTransform))}function _(d,o){d.dashSize.value=o.dashSize,d.totalSize.value=o.dashSize+o.gapSize,d.scale.value=o.scale}function D(d,o,O,z){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,d.size.value=o.size*O,d.scale.value=z*.5,o.map&&(d.map.value=o.map,n(o.map,d.uvTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,n(o.alphaMap,d.alphaMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest)}function R(d,o){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,d.rotation.value=o.rotation,o.map&&(d.map.value=o.map,n(o.map,d.mapTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,n(o.alphaMap,d.alphaMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest)}function G(d,o){d.specular.value.copy(o.specular),d.shininess.value=Math.max(o.shininess,1e-4)}function y(d,o){o.gradientMap&&(d.gradientMap.value=o.gradientMap)}function h(d,o){d.metalness.value=o.metalness,o.metalnessMap&&(d.metalnessMap.value=o.metalnessMap,n(o.metalnessMap,d.metalnessMapTransform)),d.roughness.value=o.roughness,o.roughnessMap&&(d.roughnessMap.value=o.roughnessMap,n(o.roughnessMap,d.roughnessMapTransform)),o.envMap&&(d.envMapIntensity.value=o.envMapIntensity)}function C(d,o,O){d.ior.value=o.ior,o.sheen>0&&(d.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),d.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(d.sheenColorMap.value=o.sheenColorMap,n(o.sheenColorMap,d.sheenColorMapTransform)),o.sheenRoughnessMap&&(d.sheenRoughnessMap.value=o.sheenRoughnessMap,n(o.sheenRoughnessMap,d.sheenRoughnessMapTransform))),o.clearcoat>0&&(d.clearcoat.value=o.clearcoat,d.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(d.clearcoatMap.value=o.clearcoatMap,n(o.clearcoatMap,d.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,n(o.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(d.clearcoatNormalMap.value=o.clearcoatNormalMap,n(o.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===1&&d.clearcoatNormalScale.value.negate())),o.dispersion>0&&(d.dispersion.value=o.dispersion),o.retroreflectivity>0&&(d.retroreflectivity.value=o.retroreflectivity),o.iridescence>0&&(d.iridescence.value=o.iridescence,d.iridescenceIOR.value=o.iridescenceIOR,d.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(d.iridescenceMap.value=o.iridescenceMap,n(o.iridescenceMap,d.iridescenceMapTransform)),o.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=o.iridescenceThicknessMap,n(o.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),o.transmission>0&&(d.transmission.value=o.transmission,d.transmissionSamplerMap.value=O.texture,d.transmissionSamplerSize.value.set(O.width,O.height),o.transmissionMap&&(d.transmissionMap.value=o.transmissionMap,n(o.transmissionMap,d.transmissionMapTransform)),d.thickness.value=o.thickness,o.thicknessMap&&(d.thicknessMap.value=o.thicknessMap,n(o.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=o.attenuationDistance,d.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(d.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(d.anisotropyMap.value=o.anisotropyMap,n(o.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=o.specularIntensity,d.specularColor.value.copy(o.specularColor),o.specularColorMap&&(d.specularColorMap.value=o.specularColorMap,n(o.specularColorMap,d.specularColorMapTransform)),o.specularIntensityMap&&(d.specularIntensityMap.value=o.specularIntensityMap,n(o.specularIntensityMap,d.specularIntensityMapTransform))}function U(d,o){o.matcap&&(d.matcap.value=o.matcap)}function H(d,o){const O=t.get(o).light;d.referencePosition.value.setFromMatrixPosition(O.matrixWorld),d.nearDistance.value=O.shadow.camera.near,d.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:f}}function Ro(e,t,n,i){let f={},s={},u=[];const _=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function D(m,v){const A=v.program;i.uniformBlockBinding(m,A)}function R(m,v){let A=f[m.id];A===void 0&&(d(m),A=G(m),f[m.id]=A,m.addEventListener("dispose",O));const L=v.program;i.updateUBOMapping(m,L);const c=t.render.frame;s[m.id]!==c&&(h(m),s[m.id]=c)}function G(m){const v=y();m.__bindingPointIndex=v;const A=e.createBuffer(),L=m.__size,c=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,L,c),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,A),A}function y(){for(let m=0;m<_;m++)if(u.indexOf(m)===-1)return u.push(m),m;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=f[m.id],A=m.uniforms,L=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let c=0,p=A.length;c<p;c++){const q=A[c];if(Array.isArray(q))for(let w=0,F=q.length;w<F;w++)C(q[w],c,w,L);else C(q,c,0,L)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function C(m,v,A,L){if(H(m,v,A,L)===!0){const c=m.__offset,p=m.value;if(Array.isArray(p)){let q=0;for(let w=0;w<p.length;w++){const F=p[w],re=o(F);U(F,m.__data,q),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(q+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else U(p,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,c,m.__data)}}function U(m,v,A){typeof m=="number"||typeof m=="boolean"?v[0]=m:m.isMatrix3?(v[0]=m.elements[0],v[1]=m.elements[1],v[2]=m.elements[2],v[3]=0,v[4]=m.elements[3],v[5]=m.elements[4],v[6]=m.elements[5],v[7]=0,v[8]=m.elements[6],v[9]=m.elements[7],v[10]=m.elements[8],v[11]=0):ArrayBuffer.isView(m)?v.set(new m.constructor(m.buffer,m.byteOffset,v.length)):m.toArray(v,A)}function H(m,v,A,L){const c=m.value,p=v+"_"+A;if(L[p]===void 0)return typeof c=="number"||typeof c=="boolean"?L[p]=c:ArrayBuffer.isView(c)?L[p]=c.slice():L[p]=c.clone(),!0;{const q=L[p];if(typeof c=="number"||typeof c=="boolean"){if(q!==c)return L[p]=c,!0}else{if(ArrayBuffer.isView(c))return!0;if(q.equals(c)===!1)return q.copy(c),!0}}return!1}function d(m){const v=m.uniforms;let A=0;const L=16;for(let p=0,q=v.length;p<q;p++){const w=Array.isArray(v[p])?v[p]:[v[p]];for(let F=0,re=w.length;F<re;F++){const b=w[F],W=Array.isArray(b.value)?b.value:[b.value];for(let J=0,B=W.length;J<B;J++){const de=W[J],X=o(de),Z=A%L,ne=Z%X.boundary,Be=Z+ne;A+=ne,Be!==0&&L-Be<X.storage&&(A+=L-Be),b.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=A,A+=X.storage}}}const c=A%L;return c>0&&(A+=L-c),m.__size=A,m.__cache={},this}function o(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):We("WebGLRenderer: Unsupported uniform value type.",m),v}function O(m){const v=m.target;v.removeEventListener("dispose",O);const A=u.indexOf(v.__bindingPointIndex);u.splice(A,1),e.deleteBuffer(f[v.id]),delete f[v.id],delete s[v.id]}function z(){for(const m in f)e.deleteBuffer(f[m]);u=[],f={},s={}}return{bind:D,update:R,dispose:z}}var xo=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function Co(){return Rn===null&&(Rn=new ar(xo,16,16,st,wn),Rn.name="DFG_LUT",Rn.minFilter=Tn,Rn.magFilter=Tn,Rn.wrapS=dt,Rn.wrapT=dt,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var Po=class{constructor(e={}){const{canvas:t=or(),context:n=null,depth:i=!0,stencil:f=!1,alpha:s=!1,antialias:u=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:D=!1,powerPreference:R="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:y=!1,outputBufferType:h=Vn}=e;this.isWebGLRenderer=!0;let C;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=n.getContextAttributes().alpha}else C=s;const U=h,H=new Set([ki,Fi,Di]),d=new Set([Vn,qn,er,Kt,Yi,tr]),o=new Uint32Array(4),O=new Int32Array(4),z=new Ie;let m=null,v=null;const A=[],L=[];let c=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const p=this;let q=!1,w=null,F=null,re=null,b=null;this._outputColorSpace=cr;let W=0,J=0,B=null,de=-1,X=null;const Z=new hn,ne=new hn;let Be=null;const Re=new $e(0);let tn=0,we=t.width,V=t.height,j=1,ae=null,xe=null;const Pe=new hn(0,0,we,V),he=new hn(0,0,we,V);let ke=!1;const Ge=new Vt;let be=!1,je=!1;const fn=new yn,_n=new Ie,Ke=new hn,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rn=!1;function an(){return B===null?j:1}let E=n;function un(a,S){return t.getContext(a,S)}let He,Qe,l,r,g,I,Y,te,oe,T,ee,ue,ve,Q,_e,Me,Ce,ye,M,k,K,fe,ge;try{const a={alpha:!0,depth:i,stencil:f,antialias:u,premultipliedAlpha:_,preserveDrawingBuffer:D,powerPreference:R,failIfMajorPerformanceCaveat:G};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",on,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),E===null){const S="webgl2";if(E=un(S,a),E===null)throw un(S)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$()}catch(a){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",on,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Ze("WebGLRenderer: "+a.message),a}function $(){He=new xr(E),He.init(),K=new vo(E,He),Qe=new mr(E,He,e,K),l=new mo(E,He),Qe.reversedDepthBuffer&&y&&l.buffers.depth.setReversed(!0),F=E.createFramebuffer(),re=E.createFramebuffer(),b=E.createFramebuffer(),r=new br(E),g=new eo,I=new _o(E,He,l,g,Qe,K,r),Y=new Rr(p),te=new fr(E),fe=new pr(E,te),oe=new Cr(E,te,r,fe),T=new Ur(E,oe,te,fe,r),ye=new Lr(E,Qe,I),_e=new _r(g),ee=new ja(p,Y,He,Qe,fe,_e),ue=new Ao(p,g),ve=new to,Q=new lo(He),Ce=new ur(p,Y,l,T,C,_),Me=new ho(p,T,Qe),ge=new Ro(E,r,Qe,l),M=new hr(E,He,r),k=new Pr(E,He,r),r.programs=ee.programs,p.capabilities=Qe,p.extensions=He,p.properties=g,p.renderLists=ve,p.shadowMap=Me,p.state=l,p.info=r}U!==1009&&(c=new Dr(U,t.width,t.height,u,i,f));const ce=new Mo(p,E);this.xr=ce,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const a=He.get("WEBGL_lose_context");a&&a.loseContext()},this.forceContextRestore=function(){const a=He.get("WEBGL_lose_context");a&&a.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(a){a!==void 0&&(j=a,this.setSize(we,V,!1))},this.getSize=function(a){return a.set(we,V)},this.setSize=function(a,S,N=!0){if(ce.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}we=a,V=S,t.width=Math.floor(a*j),t.height=Math.floor(S*j),N===!0&&(t.style.width=a+"px",t.style.height=S+"px"),c!==null&&c.setSize(t.width,t.height),this.setViewport(0,0,a,S)},this.getDrawingBufferSize=function(a){return a.set(we*j,V*j).floor()},this.setDrawingBufferSize=function(a,S,N){we=a,V=S,j=N,t.width=Math.floor(a*N),t.height=Math.floor(S*N),this.setViewport(0,0,a,S)},this.setEffects=function(a){if(U===1009){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(a){for(let S=0;S<a.length;S++)if(a[S].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}c.setEffects(a||[])},this.getCurrentViewport=function(a){return a.copy(Z)},this.getViewport=function(a){return a.copy(Pe)},this.setViewport=function(a,S,N,P){a.isVector4?Pe.set(a.x,a.y,a.z,a.w):Pe.set(a,S,N,P),l.viewport(Z.copy(Pe).multiplyScalar(j).round())},this.getScissor=function(a){return a.copy(he)},this.setScissor=function(a,S,N,P){a.isVector4?he.set(a.x,a.y,a.z,a.w):he.set(a,S,N,P),l.scissor(ne.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(a){l.setScissorTest(ke=a)},this.setOpaqueSort=function(a){ae=a},this.setTransparentSort=function(a){xe=a},this.getClearColor=function(a){return a.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(a=!0,S=!0,N=!0){let P=0;if(a){let x=!1;if(B!==null){const ie=B.texture.format;x=H.has(ie)}if(x){const ie=B.texture.type,le=d.has(ie),pe=Ce.getClearColor(),me=Ce.getClearAlpha(),Te=pe.r,Ue=pe.g,De=pe.b;le?(o[0]=Te,o[1]=Ue,o[2]=De,o[3]=me,E.clearBufferuiv(E.COLOR,0,o)):(O[0]=Te,O[1]=Ue,O[2]=De,O[3]=me,E.clearBufferiv(E.COLOR,0,O))}else P|=E.COLOR_BUFFER_BIT}S&&(P|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),N&&(P|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&E.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(a){a.setRenderer(this),w=a},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",on,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Ce.dispose(),ve.dispose(),Q.dispose(),g.dispose(),Y.dispose(),T.dispose(),fe.dispose(),ge.dispose(),ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Rt),ce.removeEventListener("sessionend",xt),Un.stop()};function Ae(a){a.preventDefault(),Yt("WebGLRenderer: Context Lost."),q=!0}function on(){Yt("WebGLRenderer: Context Restored."),q=!1;const a=r.autoReset,S=Me.enabled,N=Me.autoUpdate,P=Me.needsUpdate,x=Me.type;$(),r.autoReset=a,Me.enabled=S,Me.autoUpdate=N,Me.needsUpdate=P,Me.type=x}function Ve(a){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",a.statusMessage)}function En(a){const S=a.target;S.removeEventListener("dispose",En),xn(S)}function xn(a){Ai(a),g.remove(a)}function Ai(a){const S=g.get(a).programs;S!==void 0&&(S.forEach(function(N){ee.releaseProgram(N)}),a.isShaderMaterial&&ee.releaseShaderCache(a))}this.renderBufferDirect=function(a,S,N,P,x,ie){S===null&&(S=dn);const le=x.isMesh&&x.matrixWorld.determinantAffine()<0,pe=Ci(a,S,N,P,x);l.setMaterial(P,le);let me=N.index,Te=1;if(P.wireframe===!0){if(me=oe.getWireframeAttribute(N),me===void 0)return;Te=2}const Ue=N.drawRange,De=N.attributes.position;let Ee=Ue.start*Te,ze=(Ue.start+Ue.count)*Te;ie!==null&&(Ee=Math.max(Ee,ie.start*Te),ze=Math.min(ze,(ie.start+ie.count)*Te)),me!==null?(Ee=Math.max(Ee,0),ze=Math.min(ze,me.count)):De!=null&&(Ee=Math.max(Ee,0),ze=Math.min(ze,De.count));const en=ze-Ee;if(en<0||en===1/0)return;fe.setup(x,P,pe,N,me);let qe,Oe=M;if(me!==null&&(qe=te.get(me),Oe=k,Oe.setIndex(qe)),x.isMesh)P.wireframe===!0?(l.setLineWidth(P.wireframeLinewidth*an()),Oe.setMode(E.LINES)):Oe.setMode(E.TRIANGLES);else if(x.isLine){let cn=P.linewidth;cn===void 0&&(cn=1),l.setLineWidth(cn*an()),x.isLineSegments?Oe.setMode(E.LINES):x.isLineLoop?Oe.setMode(E.LINE_LOOP):Oe.setMode(E.LINE_STRIP)}else x.isPoints?Oe.setMode(E.POINTS):x.isSprite&&Oe.setMode(E.TRIANGLES);if(x.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Oe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const cn=x._multiDrawStarts,Se=x._multiDrawCounts,vn=x._multiDrawCount,Fe=me?te.get(me).bytesPerElement:1,gn=g.get(P).currentProgram.getUniforms();for(let Mn=0;Mn<vn;Mn++)gn.setValue(E,"_gl_DrawID",Mn),Oe.render(cn[Mn]/Fe,Se[Mn])}else if(x.isInstancedMesh)Oe.renderInstances(Ee,en,x.count);else if(N.isInstancedBufferGeometry){const cn=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Se=Math.min(N.instanceCount,cn);Oe.renderInstances(Ee,en,Se)}else Oe.render(Ee,en)};function At(a,S,N,P){w!==null&&a.isNodeMaterial&&w.setObject(P,a),be===!0&&_e.setState(a,N,!1),a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,Yn(a,S,P),a.side=0,a.needsUpdate=!0,Yn(a,S,P),a.side=2):Yn(a,S,P)}this.compile=function(a,S,N=null){N===null&&(N=a),w!==null&&w.renderStart(a,S,N),v=Q.get(N),v.init(S),L.push(v),N.traverseVisible(function(x){x.isLight&&x.layers.test(S.layers)&&(v.pushLight(x),x.castShadow&&v.pushShadow(x))}),a!==N&&a.traverseVisible(function(x){x.isLight&&x.layers.test(S.layers)&&(v.pushLight(x),x.castShadow&&v.pushShadow(x))}),v.setupLights(),w!==null&&w.updateLights(v.state.lightsArray),je=this.localClippingEnabled,be=_e.init(this.clippingPlanes,je),be===!0&&_e.setGlobalState(this.clippingPlanes,S),w!==null&&Me.render(v.state.shadowsArray,N,S);const P=new Set;return a.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const ie=x.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const pe=ie[le];At(pe,N,S,x),P.add(pe)}else At(ie,N,S,x),P.add(ie)}),v=L.pop(),w!==null&&w.renderEnd(),P},this.compileAsync=function(a,S,N=null){const P=this.compile(a,S,N);return new Promise(x=>{function ie(){if(P.forEach(function(le){const pe=g.get(le).currentProgram;(pe===void 0||pe.isReady())&&P.delete(le)}),P.size===0){x(a);return}setTimeout(ie,10)}He.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let tt=null;function Ri(a){tt&&tt(a)}function Rt(){Un.stop()}function xt(){Un.start()}const Un=new Zt;Un.setAnimationLoop(Ri),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(a){tt=a,ce.setAnimationLoop(a),a===null?Un.stop():Un.start()},ce.addEventListener("sessionstart",Rt),ce.addEventListener("sessionend",xt),this.render=function(a,S){if(S!==void 0&&S.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;w!==null&&w.renderStart(a,S);const N=ce.enabled===!0&&ce.isPresenting===!0,P=c!==null&&(B===null||N)&&c.begin(p,B);if(a.matrixWorldAutoUpdate===!0&&a.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(c===null||c.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(S),S=ce.getCamera()),a.isScene===!0&&a.onBeforeRender(p,a,S,B),v=Q.get(a,L.length),v.init(S),v.state.textureUnits=I.getTextureUnits(),L.push(v),fn.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),Ge.setFromProjectionMatrix(fn,kt,S.reversedDepth),je=this.localClippingEnabled,be=_e.init(this.clippingPlanes,je),m=ve.get(a,A.length),m.init(),A.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ie=p.xr.getDepthSensingMesh();ie!==null&&it(ie,S,-1/0,p.sortObjects)}it(a,S,0,p.sortObjects),m.finish(),w!==null&&w.updateLights(v.state.lightsArray),p.sortObjects===!0&&m.sort(ae,xe),rn=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,rn&&Ce.addToRenderList(m,a),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&_e.beginShadows();const x=v.state.shadowsArray;if(Me.render(x,a,S),be===!0&&_e.endShadows(),(P&&c.hasRenderPass())===!1){const ie=m.opaque,le=m.transmissive;if(v.setupLights(),S.isArrayCamera){const pe=S.cameras;if(le.length>0)for(let me=0,Te=pe.length;me<Te;me++){const Ue=pe[me];Pt(ie,le,a,Ue)}rn&&Ce.render(a);for(let me=0,Te=pe.length;me<Te;me++){const Ue=pe[me];Ct(m,a,Ue,Ue.viewport)}}else le.length>0&&Pt(ie,le,a,S),rn&&Ce.render(a),Ct(m,a,S)}B!==null&&J===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),P&&c.end(p),a.isScene===!0&&a.onAfterRender(p,a,S),fe.resetDefaultState(),de=-1,X=null,L.pop(),L.length>0?(v=L[L.length-1],I.setTextureUnits(v.state.textureUnits),be===!0&&_e.setGlobalState(p.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,w!==null&&w.renderEnd()};function it(a,S,N,P){if(a.visible===!1)return;if(a.layers.test(S.layers)){if(a.isGroup)N=a.renderOrder;else if(a.isLOD)a.autoUpdate===!0&&a.update(S);else if(a.isLightProbeGrid)v.pushLightProbeGrid(a);else if(a.isLight)v.pushLight(a),a.castShadow&&v.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||a.intersectsFrustum(Ge)){P&&Ke.setFromMatrixPosition(a.matrixWorld).applyMatrix4(fn);const ie=T.update(a),le=a.material;le.visible&&m.push(a,ie,le,N,Ke.z,null,S)}}else if((a.isMesh||a.isLine||a.isPoints)&&(!a.frustumCulled||a.intersectsFrustum(Ge))){const ie=T.update(a),le=a.material;if(P&&(a.boundingSphere!==void 0?(a.boundingSphere===null&&a.computeBoundingSphere(),Ke.copy(a.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Ke.copy(ie.boundingSphere.center)),Ke.applyMatrix4(a.matrixWorld).applyMatrix4(fn)),Array.isArray(le)){const pe=ie.groups;for(let me=0,Te=pe.length;me<Te;me++){const Ue=pe[me],De=le[Ue.materialIndex];De&&De.visible&&m.push(a,ie,De,N,Ke.z,Ue,S)}}else le.visible&&m.push(a,ie,le,N,Ke.z,null,S)}}const x=a.children;for(let ie=0,le=x.length;ie<le;ie++)it(x[ie],S,N,P)}function Ct(a,S,N,P){const{opaque:x,transmissive:ie,transparent:le}=a;v.setupLightsView(N),be===!0&&_e.setGlobalState(p.clippingPlanes,N),P&&l.viewport(Z.copy(P)),x.length>0&&Xn(x,S,N),ie.length>0&&Xn(ie,S,N),le.length>0&&Xn(le,S,N),l.buffers.depth.setTest(!0),l.buffers.depth.setMask(!0),l.buffers.color.setMask(!0),l.setPolygonOffset(!1)}function Pt(a,S,N,P){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[P.id]===void 0){const De=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[P.id]=new Sn(1,1,{generateMipmaps:!0,type:De?wn:Vn,minFilter:zt,samples:Math.max(4,Qe.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const x=v.state.transmissionRenderTarget[P.id],ie=P.viewport||Z;x.setSize(ie.z*p.transmissionResolutionScale,ie.w*p.transmissionResolutionScale);const le=p.getRenderTarget(),pe=p.getActiveCubeFace(),me=p.getActiveMipmapLevel();p.setRenderTarget(x),p.getClearColor(Re),tn=p.getClearAlpha(),tn<1&&p.setClearColor(16777215,.5),p.clear(),rn&&Ce.render(N);const Te=p.toneMapping;p.toneMapping=0;const Ue=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),v.setupLightsView(P),be===!0&&_e.setGlobalState(p.clippingPlanes,P),Xn(a,N,P),I.updateMultisampleRenderTarget(x),I.updateRenderTargetMipmap(x),He.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ee=0,ze=S.length;Ee<ze;Ee++){const{object:en,geometry:qe,material:Oe,group:cn}=S[Ee];if(Oe.side===2&&en.layers.test(P.layers)){const Se=Oe.side;Oe.side=1,Oe.needsUpdate=!0,bt(en,N,P,qe,Oe,cn),Oe.side=Se,Oe.needsUpdate=!0,De=!0}}De===!0&&(I.updateMultisampleRenderTarget(x),I.updateRenderTargetMipmap(x))}p.setRenderTarget(le,pe,me),p.setClearColor(Re,tn),Ue!==void 0&&(P.viewport=Ue),p.toneMapping=Te}function Xn(a,S,N){const P=S.isScene===!0?S.overrideMaterial:null;for(let x=0,ie=a.length;x<ie;x++){const le=a[x],{object:pe,geometry:me,group:Te}=le;let Ue=le.material;Ue.allowOverride===!0&&P!==null&&(Ue=P),pe.layers.test(N.layers)&&bt(pe,S,N,me,Ue,Te)}}function bt(a,S,N,P,x,ie){w!==null&&x.isNodeMaterial&&w.setObject(a,x),a.onBeforeRender(p,S,N,P,x,ie),a.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,a.matrixWorld),a.normalMatrix.getNormalMatrix(a.modelViewMatrix),x.onBeforeRender(p,S,N,P,a,ie),x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,p.renderBufferDirect(N,S,P,x,a,ie),x.side=0,x.needsUpdate=!0,p.renderBufferDirect(N,S,P,x,a,ie),x.side=2):p.renderBufferDirect(N,S,P,x,a,ie),a.onAfterRender(p,S,N,P,x,ie)}function Yn(a,S,N){S.isScene!==!0&&(S=dn);const P=g.get(a),x=v.state.lights,ie=v.state.shadowsArray,le=x.state.version,pe=ee.getParameters(a,x.state,ie,S,N,v.state.lightProbeGridArray),me=ee.getProgramCacheKey(pe);let Te=P.programs;P.environment=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?S.environment:null,P.fog=S.fog;const Ue=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap;P.envMap=Y.get(a.envMap||P.environment,Ue),P.envMapRotation=P.environment!==null&&a.envMap===null?S.environmentRotation:a.envMapRotation,Te===void 0&&(a.addEventListener("dispose",En),Te=new Map,P.programs=Te);let De=Te.get(me);if(De!==void 0){if(P.currentProgram===De&&P.lightsStateVersion===le)return Ut(a,pe),De}else pe.uniforms=ee.getUniforms(a),w!==null&&a.isNodeMaterial&&w.build(a,N,pe),a.onBeforeCompile(pe,p),De=ee.acquireProgram(pe,me),Te.set(me,De),P.uniforms=pe.uniforms;const Ee=P.uniforms;return(!a.isShaderMaterial&&!a.isRawShaderMaterial||a.clipping===!0)&&(Ee.clippingPlanes=_e.uniform),Ut(a,pe),P.needsLights=bi(a),P.lightsStateVersion=le,P.needsLights&&(Ee.ambientLightColor.value=x.state.ambient,Ee.lightProbe.value=x.state.probe,Ee.sunLights.value=x.state.sun,Ee.sunLightShadows.value=x.state.sunShadow,Ee.directionalLights.value=x.state.directional,Ee.directionalLightShadows.value=x.state.directionalShadow,Ee.spotLights.value=x.state.spot,Ee.spotLightShadows.value=x.state.spotShadow,Ee.rectAreaLights.value=x.state.rectArea,Ee.ltc_1.value=x.state.rectAreaLTC1,Ee.ltc_2.value=x.state.rectAreaLTC2,Ee.pointLights.value=x.state.point,Ee.pointLightShadows.value=x.state.pointShadow,Ee.hemisphereLights.value=x.state.hemi,Ee.sunShadowMatrix.value=x.state.sunShadowMatrix,Ee.sunShadowCascade.value=x.state.sunShadowCascade,Ee.directionalShadowMatrix.value=x.state.directionalShadowMatrix,Ee.spotLightMatrix.value=x.state.spotLightMatrix,Ee.spotLightMap.value=x.state.spotLightMap,Ee.pointShadowMatrix.value=x.state.pointShadowMatrix),P.lightProbeGrid=v.state.lightProbeGridArray.length>0,P.currentProgram=De,P.uniformsList=null,De}function Lt(a){if(a.uniformsList===null){const S=a.currentProgram.getUniforms();a.uniformsList=et.seqWithValue(S.seq,a.uniforms)}return a.uniformsList}function Ut(a,S){const N=g.get(a);N.outputColorSpace=S.outputColorSpace,N.batching=S.batching,N.batchingColor=S.batchingColor,N.instancing=S.instancing,N.instancingColor=S.instancingColor,N.instancingMorph=S.instancingMorph,N.skinning=S.skinning,N.morphTargets=S.morphTargets,N.morphNormals=S.morphNormals,N.morphColors=S.morphColors,N.morphTargetsCount=S.morphTargetsCount,N.numClippingPlanes=S.numClippingPlanes,N.numIntersection=S.numClipIntersection,N.vertexAlphas=S.vertexAlphas,N.vertexTangents=S.vertexTangents,N.toneMapping=S.toneMapping}function xi(a,S){if(a.length===0)return null;if(a.length===1)return a[0].texture!==null?a[0]:null;z.setFromMatrixPosition(S.matrixWorld);for(let N=0,P=a.length;N<P;N++){const x=a[N];if(x.texture!==null&&x.boundingBox.containsPoint(z))return x}return null}function Ci(a,S,N,P,x){S.isScene!==!0&&(S=dn),I.resetTextureUnits();const ie=S.fog,le=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?S.environment:null,pe=B===null?p.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Je.workingColorSpace,me=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Te=Y.get(P.envMap||le,me),Ue=P.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,De=!!N.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),Ee=!!N.morphAttributes.position,ze=!!N.morphAttributes.normal,en=!!N.morphAttributes.color;let qe=0;P.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(qe=p.toneMapping);const Oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,cn=Oe!==void 0?Oe.length:0,Se=g.get(P),vn=v.state.lights;if(be===!0&&(je===!0||a!==X)){const Ye=a===X&&P.id===de;_e.setState(P,a,Ye)}let Fe=!1;P.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==vn.state.version||Se.outputColorSpace!==pe||x.isBatchedMesh&&Se.batching===!1||!x.isBatchedMesh&&Se.batching===!0||x.isBatchedMesh&&Se.batchingColor===!0&&x._colorsTexture===null||x.isBatchedMesh&&Se.batchingColor===!1&&x._colorsTexture!==null||x.isInstancedMesh&&Se.instancing===!1||!x.isInstancedMesh&&Se.instancing===!0||x.isSkinnedMesh&&Se.skinning===!1||!x.isSkinnedMesh&&Se.skinning===!0||x.isInstancedMesh&&Se.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&Se.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&Se.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&Se.instancingMorph===!1&&x.morphTexture!==null||Se.envMap!==Te||P.fog===!0&&Se.fog!==ie||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==_e.numPlanes||Se.numIntersection!==_e.numIntersection)||Se.vertexAlphas!==Ue||Se.vertexTangents!==De||Se.morphTargets!==Ee||Se.morphNormals!==ze||Se.morphColors!==en||Se.toneMapping!==qe||Se.morphTargetsCount!==cn||!!Se.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Se.__version=P.version);let gn=Se.currentProgram;Fe===!0&&(gn=Yn(P,S,x),w&&P.isNodeMaterial&&w.onUpdateProgram(P,gn,Se));let Mn=!1,bn=!1,In=!1;const Xe=gn.getUniforms(),nn=Se.uniforms;if(l.useProgram(gn.program)&&(Mn=!0,bn=!0,In=!0),P.id!==de&&(de=P.id,bn=!0),Se.needsLights){const Ye=xi(v.state.lightProbeGridArray,x);Se.lightProbeGrid!==Ye&&(Se.lightProbeGrid=Ye,bn=!0)}if(Mn||X!==a){l.buffers.depth.getReversed()&&a.reversedDepth!==!0&&(a._reversedDepth=!0,a.updateProjectionMatrix()),Xe.setValue(E,"projectionMatrix",a.projectionMatrix),Xe.setValue(E,"viewMatrix",a.matrixWorldInverse);const Ye=Xe.map.cameraPosition;Ye!==void 0&&Ye.setValue(E,_n.setFromMatrixPosition(a.matrixWorld)),Qe.logarithmicDepthBuffer&&Xe.setValue(E,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Xe.setValue(E,"isOrthographic",a.isOrthographicCamera===!0),X!==a&&(X=a,bn=!0,In=!0)}if(Se.needsLights&&(vn.state.sunShadowMap.length>0&&Xe.setValue(E,"sunShadowMap",vn.state.sunShadowMap,I),vn.state.directionalShadowMap.length>0&&Xe.setValue(E,"directionalShadowMap",vn.state.directionalShadowMap,I),vn.state.spotShadowMap.length>0&&Xe.setValue(E,"spotShadowMap",vn.state.spotShadowMap,I),vn.state.pointShadowMap.length>0&&Xe.setValue(E,"pointShadowMap",vn.state.pointShadowMap,I)),x.isSkinnedMesh){Xe.setOptional(E,x,"bindMatrix"),Xe.setOptional(E,x,"bindMatrixInverse");const Ye=x.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Xe.setValue(E,"boneTexture",Ye.boneTexture,I))}x.isBatchedMesh&&(Xe.setOptional(E,x,"batchingTexture"),Xe.setValue(E,"batchingTexture",x._matricesTexture,I),Xe.setOptional(E,x,"batchingIdTexture"),Xe.setValue(E,"batchingIdTexture",x._indirectTexture,I),Xe.setOptional(E,x,"batchingColorTexture"),x._colorsTexture!==null&&Xe.setValue(E,"batchingColorTexture",x._colorsTexture,I));const Ln=N.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ye.update(x,N,gn),(bn||Se.receiveShadow!==x.receiveShadow)&&(Se.receiveShadow=x.receiveShadow,Xe.setValue(E,"receiveShadow",x.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&S.environment!==null&&(nn.envMapIntensity.value=S.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Co()),bn){if(Xe.setValue(E,"toneMappingExposure",p.toneMappingExposure),Se.needsLights&&Pi(nn,In),ie&&P.fog===!0&&ue.refreshFogUniforms(nn,ie),ue.refreshMaterialUniforms(nn,P,j,V,v.state.transmissionRenderTarget[a.id]),Se.needsLights&&Se.lightProbeGrid){const Ye=Se.lightProbeGrid;nn.probesSH.value=Ye.texture,nn.probesMin.value.copy(Ye.boundingBox.min),nn.probesMax.value.copy(Ye.boundingBox.max),nn.probesResolution.value.copy(Ye.resolution)}et.upload(E,Lt(Se),nn,I)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(et.upload(E,Lt(Se),nn,I),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Xe.setValue(E,"center",x.center),Xe.setValue(E,"modelViewMatrix",x.modelViewMatrix),Xe.setValue(E,"normalMatrix",x.normalMatrix),Xe.setValue(E,"modelMatrix",x.matrixWorld),P.uniformsGroups!==void 0){const Ye=P.uniformsGroups;for(let Gn=0,Nn=Ye.length;Gn<Nn;Gn++){const Dt=Ye[Gn];ge.update(Dt,gn),ge.bind(Dt,gn)}}return gn}function Pi(a,S){a.ambientLightColor.needsUpdate=S,a.lightProbe.needsUpdate=S,a.sunLights.needsUpdate=S,a.sunLightShadows.needsUpdate=S,a.directionalLights.needsUpdate=S,a.directionalLightShadows.needsUpdate=S,a.pointLights.needsUpdate=S,a.pointLightShadows.needsUpdate=S,a.spotLights.needsUpdate=S,a.spotLightShadows.needsUpdate=S,a.rectAreaLights.needsUpdate=S,a.hemisphereLights.needsUpdate=S}function bi(a){return a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&a.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(a,S,N){const P=g.get(a);P.__autoAllocateDepthBuffer=a.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),g.get(a.texture).__webglTexture=S,g.get(a.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:N,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(a,S){const N=g.get(a);N.__webglFramebuffer=S,N.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(a,S=0,N=0){B=a,W=S,J=N;let P=null,x=!1,ie=!1;if(a){const le=g.get(a);if(le.__useDefaultFramebuffer!==void 0){l.bindFramebuffer(E.FRAMEBUFFER,le.__webglFramebuffer),Z.copy(a.viewport),ne.copy(a.scissor),Be=a.scissorTest,l.viewport(Z),l.scissor(ne),l.setScissorTest(Be),de=-1;return}else if(le.__webglFramebuffer===void 0)I.setupRenderTarget(a);else if(le.__hasExternalTextures)I.rebindTextures(a,g.get(a.texture).__webglTexture,g.get(a.depthTexture).__webglTexture);else if(a.depthBuffer){const Te=a.depthTexture;if(le.__boundDepthTexture!==Te){if(Te!==null&&g.has(Te)&&(a.width!==Te.image.width||a.height!==Te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(a)}}const pe=a.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(ie=!0);const me=g.get(a).__webglFramebuffer;a.isWebGLCubeRenderTarget?(Array.isArray(me[S])?P=me[S][N]:P=me[S],x=!0):a.samples>0&&I.useMultisampledRTT(a)===!1?P=g.get(a).__webglMultisampledFramebuffer:Array.isArray(me)?P=me[N]:P=me,Z.copy(a.viewport),ne.copy(a.scissor),Be=a.scissorTest}else Z.copy(Pe).multiplyScalar(j).floor(),ne.copy(he).multiplyScalar(j).floor(),Be=ke;if(N!==0&&(P=F),l.bindFramebuffer(E.FRAMEBUFFER,P)&&l.drawBuffers(a,P),l.viewport(Z),l.scissor(ne),l.setScissorTest(Be),x){const le=g.get(a.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+S,le.__webglTexture,N)}else if(ie){const le=S;for(let pe=0;pe<a.textures.length;pe++){const me=g.get(a.textures[pe]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+pe,me.__webglTexture,N,le)}}else if(a!==null&&N!==0){const le=g.get(a.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,le.__webglTexture,N)}de=-1};function wt(a){const S=g.get(a);return(S.__readFormat!==a.format||S.__readType!==a.type)&&(S.__readFormat=a.format,S.__readType=a.type,S.__formatReadable=Qe.textureFormatReadable(a.format),S.__typeReadable=Qe.textureTypeReadable(a.type)),S}this.readRenderTargetPixels=function(a,S,N,P,x,ie,le,pe=0){if(!(a&&a.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=g.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){l.bindFramebuffer(E.FRAMEBUFFER,me);try{const Te=a.textures[pe],Ue=Te.format,De=Te.type;a.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+pe);const Ee=wt(Te);if(Ee.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=a.width-P&&N>=0&&N<=a.height-x&&E.readPixels(S,N,P,x,K.convert(Ue),K.convert(De),ie)}finally{const Te=B!==null?g.get(B).__webglFramebuffer:null;l.bindFramebuffer(E.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(a,S,N,P,x,ie,le,pe=0){if(!(a&&a.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=g.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me)if(S>=0&&S<=a.width-P&&N>=0&&N<=a.height-x){l.bindFramebuffer(E.FRAMEBUFFER,me);const Te=a.textures[pe],Ue=Te.format,De=Te.type;a.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+pe);const Ee=wt(Te);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.bufferData(E.PIXEL_PACK_BUFFER,ie.byteLength,E.STREAM_READ),E.readPixels(S,N,P,x,K.convert(Ue),K.convert(De),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);const en=B!==null?g.get(B).__webglFramebuffer:null;l.bindFramebuffer(E.FRAMEBUFFER,en);const qe=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Zi(E,qe,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ie),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(ze),E.deleteSync(qe),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(a,S=null,N=0){const P=Math.pow(2,-N),x=Math.floor(a.image.width*P),ie=Math.floor(a.image.height*P),le=S!==null?S.x:0,pe=S!==null?S.y:0;I.setTexture2D(a,0),E.copyTexSubImage2D(E.TEXTURE_2D,N,0,0,le,pe,x,ie),l.unbindTexture()},this.copyTextureToTexture=function(a,S,N=null,P=null,x=0,ie=0){let le,pe,me,Te,Ue,De,Ee,ze,en;const qe=a.isCompressedTexture?a.mipmaps[ie]:a.image;if(N!==null)le=N.max.x-N.min.x,pe=N.max.y-N.min.y,me=N.isBox3?N.max.z-N.min.z:1,Te=N.min.x,Ue=N.min.y,De=N.isBox3?N.min.z:0;else{const nn=Math.pow(2,-x);le=Math.floor(qe.width*nn),pe=Math.floor(qe.height*nn),a.isDataArrayTexture?me=qe.depth:a.isData3DTexture?me=Math.floor(qe.depth*nn):me=1,Te=0,Ue=0,De=0}P!==null?(Ee=P.x,ze=P.y,en=P.z):(Ee=0,ze=0,en=0);const Oe=K.convert(S.format),cn=K.convert(S.type);let Se;S.isData3DTexture?(I.setTexture3D(S,0),Se=E.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(I.setTexture2DArray(S,0),Se=E.TEXTURE_2D_ARRAY):(I.setTexture2D(S,0),Se=E.TEXTURE_2D),l.activeTexture(E.TEXTURE0),l.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,S.flipY),l.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),l.pixelStorei(E.UNPACK_ALIGNMENT,S.unpackAlignment);const vn=l.getParameter(E.UNPACK_ROW_LENGTH),Fe=l.getParameter(E.UNPACK_IMAGE_HEIGHT),gn=l.getParameter(E.UNPACK_SKIP_PIXELS),Mn=l.getParameter(E.UNPACK_SKIP_ROWS),bn=l.getParameter(E.UNPACK_SKIP_IMAGES);l.pixelStorei(E.UNPACK_ROW_LENGTH,qe.width),l.pixelStorei(E.UNPACK_IMAGE_HEIGHT,qe.height),l.pixelStorei(E.UNPACK_SKIP_PIXELS,Te),l.pixelStorei(E.UNPACK_SKIP_ROWS,Ue),l.pixelStorei(E.UNPACK_SKIP_IMAGES,De);const In=a.isDataArrayTexture||a.isData3DTexture,Xe=S.isDataArrayTexture||S.isData3DTexture;if(a.isDepthTexture){const nn=g.get(a),Ln=g.get(S),Ye=g.get(nn.__renderTarget),Gn=g.get(Ln.__renderTarget);l.bindFramebuffer(E.READ_FRAMEBUFFER,Ye.__webglFramebuffer),l.bindFramebuffer(E.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Nn=0;Nn<me;Nn++)In&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(a).__webglTexture,x,De+Nn),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(S).__webglTexture,ie,en+Nn)),E.blitFramebuffer(Te,Ue,le,pe,Ee,ze,le,pe,E.DEPTH_BUFFER_BIT,E.NEAREST);l.bindFramebuffer(E.READ_FRAMEBUFFER,null),l.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(x!==0||a.isRenderTargetTexture||g.has(a)){const nn=g.get(a),Ln=g.get(S);l.bindFramebuffer(E.READ_FRAMEBUFFER,re),l.bindFramebuffer(E.DRAW_FRAMEBUFFER,b);for(let Ye=0;Ye<me;Ye++)In?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,nn.__webglTexture,x,De+Ye):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,nn.__webglTexture,x),Xe?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ln.__webglTexture,ie,en+Ye):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ln.__webglTexture,ie),x!==0?E.blitFramebuffer(Te,Ue,le,pe,Ee,ze,le,pe,E.COLOR_BUFFER_BIT,E.NEAREST):Xe?E.copyTexSubImage3D(Se,ie,Ee,ze,en+Ye,Te,Ue,le,pe):E.copyTexSubImage2D(Se,ie,Ee,ze,Te,Ue,le,pe);l.bindFramebuffer(E.READ_FRAMEBUFFER,null),l.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Xe?a.isDataTexture||a.isData3DTexture?E.texSubImage3D(Se,ie,Ee,ze,en,le,pe,me,Oe,cn,qe.data):S.isCompressedArrayTexture?E.compressedTexSubImage3D(Se,ie,Ee,ze,en,le,pe,me,Oe,qe.data):E.texSubImage3D(Se,ie,Ee,ze,en,le,pe,me,Oe,cn,qe):a.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ie,Ee,ze,le,pe,Oe,cn,qe.data):a.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ie,Ee,ze,qe.width,qe.height,Oe,qe.data):E.texSubImage2D(E.TEXTURE_2D,ie,Ee,ze,le,pe,Oe,cn,qe);l.pixelStorei(E.UNPACK_ROW_LENGTH,vn),l.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Fe),l.pixelStorei(E.UNPACK_SKIP_PIXELS,gn),l.pixelStorei(E.UNPACK_SKIP_ROWS,Mn),l.pixelStorei(E.UNPACK_SKIP_IMAGES,bn),ie===0&&S.generateMipmaps&&E.generateMipmap(Se),l.unbindTexture()},this.initRenderTarget=function(a){g.get(a).__webglFramebuffer===void 0&&I.setupRenderTarget(a)},this.initTexture=function(a){a.isCubeTexture?I.setTextureCube(a,0):a.isData3DTexture?I.setTexture3D(a,0):a.isDataArrayTexture||a.isCompressedArrayTexture?I.setTexture2DArray(a,0):I.setTexture2D(a,0),l.unbindTexture()},this.resetState=function(){W=0,J=0,B=null,l.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};export{Po as i,Le as n,gt as r,vt as t};
