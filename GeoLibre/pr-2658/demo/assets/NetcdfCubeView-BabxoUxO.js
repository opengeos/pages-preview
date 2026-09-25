import{o as kt}from"./rolldown-runtime-CEgmsyvS.js";import{t as Zi}from"./react-DIKiA8qT.js";import{t as ji}from"./jsx-runtime-BpnFPHy9.js";import{a as $i,c as Qi,t as Ji}from"./netcdf-cube-BqTYoK3U.js";import{$ as Hn,$n as zt,A as Xt,An as er,Bn as nr,C as ht,Cn as Yt,D as tr,Dt as ir,En as rr,Et as tt,F as yn,Fn as Kt,G as An,Gn as qt,Hn as xe,J as ar,Jn as mt,K as Zt,Kn as Rn,Ln as it,M as jt,Mn as or,Nn as Gn,O as $t,P as sr,Qn as Qt,Rn as lr,St as cr,T as rt,Tn as Vn,Un as _n,V as fr,Vn as je,Xn as dr,Y as Jt,Yn as ur,Zn as $e,_ as pr,_n as hr,an as mr,at as _r,b as ei,c as _t,cn as gr,d as gt,dt as vr,er as ni,et as Sr,f as Qe,ft as Er,g as Mr,gn as vt,gt as Wn,h as Tr,hn as Ar,ht as ti,i as Rr,in as xr,ir as Pr,it as St,j as ii,jn as br,l as at,ln as Cr,lt as Lr,mt as jn,nr as wr,nt as kn,on as Dr,ot as Ur,p as en,pt as ri,q as Ir,qn as Et,rn as Mt,rr as We,rt as xn,s as Tt,tr as gn,tt as Ne,un as Nr,ut as zn,v as ai,vn as Dn,w as oi,x as si,y as yr,yt as li,zn as Or}from"./three.core-DnXuWSTF.js";var Mn=kt(Zi(),1);function ci(){let e=null,t=!1,n=null,i=null;function l(s,d){i=e.requestAnimationFrame(l),n(s,d)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(l),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Fr(e){const t=new WeakMap;function n(_,U){const R=_.array,G=_.usage,B=R.byteLength,h=e.createBuffer();e.bindBuffer(U,h),e.bufferData(U,R,G),_.onUploadCallback();let x;if(R instanceof Float32Array)x=e.FLOAT;else if(typeof Float16Array<"u"&&R instanceof Float16Array)x=e.HALF_FLOAT;else if(R instanceof Uint16Array)_.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(R instanceof Int16Array)x=e.SHORT;else if(R instanceof Uint32Array)x=e.UNSIGNED_INT;else if(R instanceof Int32Array)x=e.INT;else if(R instanceof Int8Array)x=e.BYTE;else if(R instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(R instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+R);return{buffer:h,type:x,bytesPerElement:R.BYTES_PER_ELEMENT,version:_.version,size:B}}function i(_,U,R){const G=U.array,B=U.updateRanges;if(e.bindBuffer(R,_),B.length===0)e.bufferSubData(R,0,G);else{B.sort((x,P)=>x.start-P.start);let h=0;for(let x=1;x<B.length;x++){const P=B[h],y=B[x];y.start<=P.start+P.count+1?P.count=Math.max(P.count,y.start+y.count-P.start):(++h,B[h]=y)}B.length=h+1;for(let x=0,P=B.length;x<P;x++){const y=B[x];e.bufferSubData(R,y.start*G.BYTES_PER_ELEMENT,G,y.start,y.count)}U.clearUpdateRanges()}U.onUploadCallback()}function l(_){return _.isInterleavedBufferAttribute&&(_=_.data),t.get(_)}function s(_){_.isInterleavedBufferAttribute&&(_=_.data);const U=t.get(_);U&&(e.deleteBuffer(U.buffer),t.delete(_))}function d(_,U){if(_.isInterleavedBufferAttribute&&(_=_.data),_.isGLBufferAttribute){const G=t.get(_);(!G||G.version<_.version)&&t.set(_,{buffer:_.buffer,type:_.type,bytesPerElement:_.elementSize,version:_.version});return}const R=t.get(_);if(R===void 0)t.set(_,n(_,U));else if(R.version<_.version){if(R.size!==_.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(R.buffer,_,U),R.version=_.version}}return{get:l,remove:s,update:d}}var we={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new xe},probesMax:{value:new xe},probesResolution:{value:new xe}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Cn={basic:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:gn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:gn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:gn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:gn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:gn([se.points,se.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:gn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:gn([se.common,se.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:gn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:gn([se.sprite,se.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distance:{uniforms:gn([se.common,se.displacementmap,{referencePosition:{value:new xe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distance_vert,fragmentShader:we.distance_frag},shadow:{uniforms:gn([se.lights,se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Cn.physical={uniforms:gn([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};var ot={r:0,b:0,g:0},Br=new kn,fi=new Ne;fi.set(-1,0,0,0,1,0,0,0,1);function Hr(e,t,n,i,l,s){const d=new Qe(0);let _=l===!0?0:1,U,R,G=null,B=0,h=null;function x(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const m=D.backgroundBlurriness>0;z=t.get(z,m)}return z}function P(D){let z=!1;const m=x(D);m===null?u(d,_):m&&m.isColor&&(u(m,1),z=!0);const g=e.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,s):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(D,z){const m=x(z);m&&(m.isCubeTexture||m.mapping===306)?(R===void 0&&(R=new xn(new Tt(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:mt(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),R.geometry.deleteAttribute("uv"),R.onBeforeRender=function(g,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(R.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(R)),R.material.uniforms.envMap.value=m,R.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,R.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,R.material.uniforms.backgroundRotation.value.setFromMatrix4(Br.makeRotationFromEuler(z.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&R.material.uniforms.backgroundRotation.value.premultiply(fi),R.material.toneMapped=en.getTransfer(m.colorSpace)!==vt,(G!==m||B!==m.version||h!==e.toneMapping)&&(R.material.needsUpdate=!0,G=m,B=m.version,h=e.toneMapping),R.layers.enableAll(),D.unshift(R,R.geometry,R.material,0,0,null)):m&&m.isTexture&&(U===void 0&&(U=new xn(new Wn(2,2),new Dn({name:"BackgroundMaterial",uniforms:mt(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(U)),U.material.uniforms.t2D.value=m,U.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,U.material.toneMapped=en.getTransfer(m.colorSpace)!==vt,m.matrixAutoUpdate===!0&&m.updateMatrix(),U.material.uniforms.uvTransform.value.copy(m.matrix),(G!==m||B!==m.version||h!==e.toneMapping)&&(U.material.needsUpdate=!0,G=m,B=m.version,h=e.toneMapping),U.layers.enableAll(),D.unshift(U,U.geometry,U.material,0,0,null))}function u(D,z){D.getRGB(ot,zt(e)),n.buffers.color.setClear(ot.r,ot.g,ot.b,z,s)}function o(){R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0),U!==void 0&&(U.geometry.dispose(),U.material.dispose(),U=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,z=1){d.set(D),_=z,u(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(D){_=D,u(d,_)},render:P,addToRenderList:y,dispose:o}}function Gr(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=h(null);let s=l,d=!1;function _(I,H,re,C,W){let k=!1;const N=B(I,C,re,H);s!==N&&(s=N,R(s.object)),k=x(I,C,re,W),k&&P(I,C,re,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,m(I,H,re,C),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function U(){return e.createVertexArray()}function R(I){return e.bindVertexArray(I)}function G(I){return e.deleteVertexArray(I)}function B(I,H,re,C){const W=C.wireframe===!0;let k=i[H.id];k===void 0&&(k={},i[H.id]=k);const N=I.isInstancedMesh===!0?I.id:0;let fe=k[N];fe===void 0&&(fe={},k[N]=fe);let Y=fe[re.id];Y===void 0&&(Y={},fe[re.id]=Y);let j=Y[W];return j===void 0&&(j=h(U()),Y[W]=j),j}function h(I){const H=[],re=[],C=[];for(let W=0;W<n;W++)H[W]=0,re[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:re,attributeDivisors:C,object:I,attributes:{},index:null}}function x(I,H,re,C){const W=s.attributes,k=H.attributes;let N=0;const fe=re.getAttributes();for(const Y in fe)if(fe[Y].location>=0){const j=W[Y];let ne=k[Y];if(ne===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),j===void 0||j.attribute!==ne||ne&&j.data!==ne.data)return!0;N++}return s.attributesNum!==N||s.index!==C}function P(I,H,re,C){const W={},k=H.attributes;let N=0;const fe=re.getAttributes();for(const Y in fe)if(fe[Y].location>=0){let j=k[Y];j===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const ne={};ne.attribute=j,j&&j.data&&(ne.data=j.data),W[Y]=ne,N++}s.attributes=W,s.attributesNum=N,s.index=C}function y(){const I=s.newAttributes;for(let H=0,re=I.length;H<re;H++)I[H]=0}function u(I){o(I,0)}function o(I,H){const re=s.newAttributes,C=s.enabledAttributes,W=s.attributeDivisors;re[I]=1,C[I]===0&&(e.enableVertexAttribArray(I),C[I]=1),W[I]!==H&&(e.vertexAttribDivisor(I,H),W[I]=H)}function D(){const I=s.newAttributes,H=s.enabledAttributes;for(let re=0,C=H.length;re<C;re++)H[re]!==I[re]&&(e.disableVertexAttribArray(re),H[re]=0)}function z(I,H,re,C,W,k,N){N===!0?e.vertexAttribIPointer(I,H,re,W,k):e.vertexAttribPointer(I,H,re,C,W,k)}function m(I,H,re,C){y();const W=C.attributes,k=re.getAttributes(),N=H.defaultAttributeValues;for(const fe in k){const Y=k[fe];if(Y.location>=0){let j=W[fe];if(j===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const ne=j.normalized,Be=j.itemSize,Re=t.get(j);if(Re===void 0)continue;const an=Re.buffer,Ue=Re.type,V=Re.bytesPerElement,J=Ue===e.INT||Ue===e.UNSIGNED_INT||j.gpuType===1013;if(j.isInterleavedBufferAttribute){const ae=j.data,Pe=ae.stride,Ce=j.offset;if(ae.isInstancedInterleavedBuffer){for(let he=0;he<Y.locationSize;he++)o(Y.location+he,ae.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<Y.locationSize;he++)u(Y.location+he);e.bindBuffer(e.ARRAY_BUFFER,an);for(let he=0;he<Y.locationSize;he++)z(Y.location+he,Be/Y.locationSize,Ue,ne,Pe*V,(Ce+Be/Y.locationSize*he)*V,J)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<Y.locationSize;ae++)o(Y.location+ae,j.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<Y.locationSize;ae++)u(Y.location+ae);e.bindBuffer(e.ARRAY_BUFFER,an);for(let ae=0;ae<Y.locationSize;ae++)z(Y.location+ae,Be/Y.locationSize,Ue,ne,Be*V,Be/Y.locationSize*ae*V,J)}}else if(N!==void 0){const ne=N[fe];if(ne!==void 0)switch(ne.length){case 2:e.vertexAttrib2fv(Y.location,ne);break;case 3:e.vertexAttrib3fv(Y.location,ne);break;case 4:e.vertexAttrib4fv(Y.location,ne);break;default:e.vertexAttrib1fv(Y.location,ne)}}}}D()}function g(){p();for(const I in i){const H=i[I];for(const re in H){const C=H[re];for(const W in C){const k=C[W];for(const N in k)G(k[N].object),delete k[N];delete C[W]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const H=i[I.id];for(const re in H){const C=H[re];for(const W in C){const k=C[W];for(const N in k)G(k[N].object),delete k[N];delete C[W]}}delete i[I.id]}function L(I){for(const H in i){const re=i[H];for(const C in re){const W=re[C];if(W[I.id]===void 0)continue;const k=W[I.id];for(const N in k)G(k[N].object),delete k[N];delete W[I.id]}}}function f(I){for(const H in i){const re=i[H],C=I.isInstancedMesh===!0?I.id:0,W=re[C];if(W!==void 0){for(const k in W){const N=W[k];for(const fe in N)G(N[fe].object),delete N[fe];delete W[k]}delete re[C],Object.keys(re).length===0&&delete i[H]}}}function p(){q(),d=!0,s!==l&&(s=l,R(s.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:_,reset:p,resetDefaultState:q,dispose:g,releaseStatesOfGeometry:A,releaseStatesOfObject:f,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:u,disableUnusedAttributes:D}}function Vr(e,t,n){let i;function l(U){i=U}function s(U,R){e.drawArrays(i,U,R),n.update(R,i,1)}function d(U,R,G){G!==0&&(e.drawArraysInstanced(i,U,R,G),n.update(R,i,G))}function _(U,R,G){if(G===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,U,0,R,0,G);let B=0;for(let h=0;h<G;h++)B+=R[h];n.update(B,i,1)}this.setMode=l,this.render=s,this.renderInstances=d,this.renderMultiDraw=_}function Wr(e,t,n,i){let l;function s(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(L){return!(L!==1023&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function _(L){const f=L===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==1009&&L!==1015&&!f&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function U(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let R=n.precision!==void 0?n.precision:"highp";const G=U(R);G!==R&&(We("WebGLRenderer:",R,"not supported, using",G,"instead."),R=G);const B=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),u=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),z=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),g=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:U,textureFormatReadable:d,textureTypeReadable:_,precision:R,logarithmicDepthBuffer:B,reversedDepthBuffer:h,maxTextures:x,maxVertexTextures:P,maxTextureSize:y,maxCubemapSize:u,maxAttributes:o,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:m,maxSamples:g,samples:A}}function kr(e){const t=this;let n=null,i=0,l=!1,s=!1;const d=new ti,_=new Ne,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(B,h){const x=B.length!==0||h||i!==0||l;return l=h,i=B.length,x},this.beginShadows=function(){s=!0,G(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(B,h){n=G(B,h,0)},this.setState=function(B,h,x){const P=B.clippingPlanes,y=B.clipIntersection,u=B.clipShadows,o=e.get(B);if(!l||P===null||P.length===0||s&&!u)s?G(null):R();else{const D=s?0:i,z=D*4;let m=o.clippingState||null;U.value=m,m=G(P,h,z,x);for(let g=0;g!==z;++g)m[g]=n[g];o.clippingState=m,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=D}};function R(){U.value!==n&&(U.value=n,U.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function G(B,h,x,P){const y=B!==null?B.length:0;let u=null;if(y!==0){if(u=U.value,P!==!0||u===null){const o=x+y*4,D=h.matrixWorldInverse;_.getNormalMatrix(D),(u===null||u.length<o)&&(u=new Float32Array(o));for(let z=0,m=x;z!==y;++z,m+=4)d.copy(B[z]).applyMatrix4(D,_),d.normal.toArray(u,m),u[m+3]=d.constant}U.value=u,U.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,u}}var Xn=4,zr=6,Xr=20,Yr=256,$n=new ri,di=new Qe,At=null,Rt=0,xt=0,Pt=!1,Kr=new xe,On=new xe,ui=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,l={}){const{size:s=256,position:d=Kr}=l;At=this._renderer.getRenderTarget(),Rt=this._renderer.getActiveCubeFace(),xt=this._renderer.getActiveMipmapLevel(),Pt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,n,i,_,d),t>0&&this._blur(_,0,0,t),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(At,Rt,xt),this._renderer.xr.enabled=Pt,e.scissorTest=!1,Yn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),At=this._renderer.getRenderTarget(),Rt=this._renderer.getActiveCubeFace(),xt=this._renderer.getActiveMipmapLevel(),Pt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:yn,format:tt,colorSpace:ar,depthBuffer:!1},i=pi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pi(e,t,n);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qr(l)),this._blurMaterial=jr(l,e,t),this._ggxMaterial=Zr(l,e,t)}return i}_compileMaterial(e){const t=new xn(new at,e);this._renderer.compile(t,$n)}_sceneToCubeUV(e,t,n,i,l){const s=new jn(90,1,t,n),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],U=this._renderer,R=U.autoClear,G=U.toneMapping;U.getClearColor(di),U.toneMapping=0,U.autoClear=!1,U.state.buffers.depth.getReversed()&&(U.setRenderTarget(i),U.clearDepth(),U.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new Tt,new St({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const B=this._backgroundBox,h=B.material;let x=!1;const P=e.background;P?P.isColor&&(h.color.copy(P),e.background=null,x=!0):(h.color.copy(di),x=!0);for(let y=0;y<6;y++){const u=y%3;u===0?(s.up.set(0,d[y],0),s.position.set(l.x,l.y,l.z),s.lookAt(l.x+_[y],l.y,l.z)):u===1?(s.up.set(0,0,d[y]),s.position.set(l.x,l.y,l.z),s.lookAt(l.x,l.y+_[y],l.z)):(s.up.set(0,d[y],0),s.position.set(l.x,l.y,l.z),s.lookAt(l.x,l.y,l.z+_[y]));const o=this._cubeSize;Yn(i,u*o,y>2?o:0,o,o),U.setRenderTarget(i),x&&U.render(B,s),U.render(e,s)}U.toneMapping=G,U.autoClear=R,e.background=P}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hi());const l=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=l;const d=l.uniforms;d.envMap.value=e;const _=this._cubeSize;Yn(t,0,0,3*_,2*_),n.setRenderTarget(t),n.render(s,$n)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let l=1;l<i;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,l=this._pingPongRenderTarget,s=this._ggxMaterial,d=this._lodMeshes[n];d.material=s;const _=s.uniforms,U=n/(this._lodMeshes.length-1),R=t/(this._lodMeshes.length-1),G=Math.sqrt(U*U-R*R)*(U*1.25),{_lodMax:B}=this,h=this._sizeLods[n],x=3*h*(n>B-Xn?n-B+Xn:0),P=4*(this._cubeSize-h);_.envMap.value=e.texture,_.roughness.value=G,_.mipInt.value=B-t,Yn(l,x,P,3*h,2*h),i.setRenderTarget(l),i.render(d,$n),_.envMap.value=l.texture,_.roughness.value=0,_.mipInt.value=B-n,Yn(e,x,P,3*h,2*h),i.setRenderTarget(e),i.render(d,$n)}_blur(e,t,n,i){const l=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,n,s),this._blurPass(l,e,n,n,s)}_blurPass(e,t,n,i,l){const s=this._renderer,d=this._blurMaterial,_=this._lodMeshes[i];_.material=d;const U=d.uniforms;U.envMap.value=e.texture,U.sigma.value=l,U.mipInt.value=this._lodMax-n;const R=this._sizeLods[i];Yn(t,3*R*(i>this._lodMax-Xn?i-this._lodMax+Xn:0),4*(this._cubeSize-R),3*R,2*R),s.setRenderTarget(t),s.render(_,$n)}};function qr(e){const t=[],n=[];let i=e;const l=e-Xn+1+zr;for(let s=0;s<l;s++){const d=Math.pow(2,i);t.push(d);const _=1/(d-2),U=-_,R=1+_,G=[U,U,R,U,R,R,U,U,R,R,U,R],B=6,h=6,x=3,P=new Float32Array(108),y=new Float32Array(108);for(let o=0;o<B;o++){const D=o%3*2/3-1,z=o>2?0:-1,m=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];P.set(m,18*o);for(let g=0;g<h;g++){const A=G[g*2]*2-1,L=G[g*2+1]*2-1;o===0?On.set(1,L,A):o===1?On.set(-A,1,-L):o===2?On.set(-A,L,1):o===3?On.set(-1,L,-A):o===4?On.set(-A,-1,L):On.set(A,L,-1),On.toArray(y,(o*h+g)*x)}}const u=new at;u.setAttribute("position",new _t(P,x)),u.setAttribute("outputDirection",new _t(y,x)),n.push(new xn(u,null)),i>Xn&&i--}return{lodMeshes:n,sizeLods:t}}function pi(e,t,n){const i=new Rn(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yn(e,t,n,i,l){e.viewport.set(t,n,i,l),e.scissor.set(t,n,i,l)}function Zr(e,t,n){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:st(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function jr(e,t,n){return new Dn({name:"SphericalGaussianBlur",defines:{SAMPLES:Xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:st(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function hi(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:st(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mi(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:st(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function st(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _i=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ai(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tt(5,5,5),l=new Dn({name:"CubemapFromEquirect",uniforms:mt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});l.uniforms.tEquirect.value=t;const s=new xn(i,l),d=t.minFilter;return t.minFilter===1008&&(t.minFilter=An),new Mr(1,10,this).update(e,s),t.minFilter=d,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const l=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(l)}};function $r(e){let t=new WeakMap,n=new WeakMap,i=null;function l(h,x=!1){return h==null?null:x?d(h):s(h)}function s(h){if(h&&h.isTexture){const x=h.mapping;if(x===303||x===304)if(t.has(h)){const P=t.get(h).texture;return _(P,h.mapping)}else{const P=h.image;if(P&&P.height>0){const y=new _i(P.height);return y.fromEquirectangularTexture(e,h),t.set(h,y),h.addEventListener("dispose",R),_(y.texture,h.mapping)}else return null}}return h}function d(h){if(h&&h.isTexture){const x=h.mapping,P=x===303||x===304,y=x===301||x===302;if(P||y){let u=n.get(h);const o=u!==void 0?u.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==o)return i===null&&(i=new ui(e)),u=P?i.fromEquirectangular(h,u):i.fromCubemap(h,u),u.texture.pmremVersion=h.pmremVersion,n.set(h,u),u.texture;if(u!==void 0)return u.texture;{const D=h.image;return P&&D&&D.height>0||y&&D&&U(D)?(i===null&&(i=new ui(e)),u=P?i.fromEquirectangular(h):i.fromCubemap(h),u.texture.pmremVersion=h.pmremVersion,n.set(h,u),h.addEventListener("dispose",G),u.texture):null}}}return h}function _(h,x){return x===303?h.mapping=301:x===304&&(h.mapping=302),h}function U(h){let x=0;const P=6;for(let y=0;y<P;y++)h[y]!==void 0&&x++;return x===P}function R(h){const x=h.target;x.removeEventListener("dispose",R);const P=t.get(x);P!==void 0&&(t.delete(x),P.dispose())}function G(h){const x=h.target;x.removeEventListener("dispose",G);const P=n.get(x);P!==void 0&&(n.delete(x),P.dispose())}function B(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:B}}function Qr(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const l=e.getExtension(i);return t[i]=l,l}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const l=n(i);return l===null&&Pr("WebGLRenderer: "+i+" extension not supported."),l}}}function Jr(e,t,n,i){const l={},s=new WeakMap;function d(B){const h=B.target;h.index!==null&&t.remove(h.index);for(const P in h.attributes)t.remove(h.attributes[P]);h.removeEventListener("dispose",d),delete l[h.id];const x=s.get(h);x&&(t.remove(x),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function _(B,h){return l[h.id]===!0||(h.addEventListener("dispose",d),l[h.id]=!0,n.memory.geometries++),h}function U(B){const h=B.attributes;for(const x in h)t.update(h[x],e.ARRAY_BUFFER)}function R(B){const h=[],x=B.index,P=B.attributes.position;let y=0;if(P===void 0)return;if(x!==null){const D=x.array;y=x.version;for(let z=0,m=D.length;z<m;z+=3){const g=D[z+0],A=D[z+1],L=D[z+2];h.push(g,A,A,L,L,g)}}else{const D=P.array;y=P.version;for(let z=0,m=D.length/3-1;z<m;z+=3){const g=z+0,A=z+1,L=z+2;h.push(g,A,A,L,L,g)}}const u=new(P.count>=65535?br:er)(h,1);u.version=y;const o=s.get(B);o&&t.remove(o),s.set(B,u)}function G(B){const h=s.get(B);if(h){const x=B.index;x!==null&&h.version<x.version&&R(B)}else R(B);return s.get(B)}return{get:_,update:U,getWireframeAttribute:G}}function ea(e,t,n){let i;function l(B){i=B}let s,d;function _(B){s=B.type,d=B.bytesPerElement}function U(B,h){e.drawElements(i,h,s,B*d),n.update(h,i,1)}function R(B,h,x){x!==0&&(e.drawElementsInstanced(i,h,s,B*d,x),n.update(h,i,x))}function G(B,h,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,B,0,x);let P=0;for(let y=0;y<x;y++)P+=h[y];n.update(P,i,1)}this.setMode=l,this.setIndex=_,this.render=U,this.renderInstances=R,this.renderMultiDraw=G}function na(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,d,_){switch(n.calls++,d){case e.TRIANGLES:n.triangles+=_*(s/3);break;case e.LINES:n.lines+=_*(s/2);break;case e.LINE_STRIP:n.lines+=_*(s-1);break;case e.LINE_LOOP:n.lines+=_*s;break;case e.POINTS:n.points+=_*s;break;default:$e("WebGLInfo: Unknown draw mode:",d)}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:i}}function ta(e,t,n){const i=new WeakMap,l=new _n;function s(d,_,U){const R=d.morphTargetInfluences,G=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,B=G!==void 0?G.length:0;let h=i.get(_);if(h===void 0||h.count!==B){let p=function(){L.dispose(),i.delete(_),_.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const x=_.morphAttributes.position!==void 0,P=_.morphAttributes.normal!==void 0,y=_.morphAttributes.color!==void 0,u=_.morphAttributes.position||[],o=_.morphAttributes.normal||[],D=_.morphAttributes.color||[];let z=0;x===!0&&(z=1),P===!0&&(z=2),y===!0&&(z=3);let m=_.attributes.position.count*z,g=1;m>t.maxTextureSize&&(g=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);const A=new Float32Array(m*g*4*B),L=new ei(A,m,g,B);L.type=ii,L.needsUpdate=!0;const f=z*4;for(let q=0;q<B;q++){const I=u[q],H=o[q],re=D[q],C=m*g*4*q;for(let W=0;W<I.count;W++){const k=W*f;x===!0&&(l.fromBufferAttribute(I,W),A[C+k+0]=l.x,A[C+k+1]=l.y,A[C+k+2]=l.z,A[C+k+3]=0),P===!0&&(l.fromBufferAttribute(H,W),A[C+k+4]=l.x,A[C+k+5]=l.y,A[C+k+6]=l.z,A[C+k+7]=0),y===!0&&(l.fromBufferAttribute(re,W),A[C+k+8]=l.x,A[C+k+9]=l.y,A[C+k+10]=l.z,A[C+k+11]=re.itemSize===4?l.w:1)}}h={count:B,texture:L,size:new je(m,g)},i.set(_,h),_.addEventListener("dispose",p)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)U.getUniforms().setValue(e,"morphTexture",d.morphTexture,n);else{let x=0;for(let y=0;y<R.length;y++)x+=R[y];const P=_.morphTargetsRelative?1:1-x;U.getUniforms().setValue(e,"morphTargetBaseInfluence",P),U.getUniforms().setValue(e,"morphTargetInfluences",R)}U.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),U.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function ia(e,t,n,i,l){let s=new WeakMap;function d(R){const G=l.render.frame,B=R.geometry,h=t.get(R,B);if(s.get(h)!==G&&(t.update(h),s.set(h,G)),R.isInstancedMesh&&(R.hasEventListener("dispose",U)===!1&&R.addEventListener("dispose",U),s.get(R)!==G&&(n.update(R.instanceMatrix,e.ARRAY_BUFFER),R.instanceColor!==null&&n.update(R.instanceColor,e.ARRAY_BUFFER),s.set(R,G))),R.isSkinnedMesh){const x=R.skeleton;s.get(x)!==G&&(x.update(),s.set(x,G))}return h}function _(){s=new WeakMap}function U(R){const G=R.target;G.removeEventListener("dispose",U),i.releaseStatesOfObject(G),n.remove(G.instanceMatrix),G.instanceColor!==null&&n.remove(G.instanceColor)}return{update:d,dispose:_}}var ra={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function aa(e,t,n,i,l,s){const d=new Rn(t,n,{type:e,depthBuffer:l,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let _=null,U=null;const R=new at;R.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),R.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const G=new mr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),B=new xn(R,G),h=new ri(-1,1,1,-1,0,1);let x=null,P=null,y=!1,u,o=null,D=[],z=!1;this.setSize=function(m,g){d.setSize(m,g),_!==null&&_.setSize(m,g),U!==null&&U.setSize(m,g);for(let A=0;A<D.length;A++){const L=D[A];L.setSize&&L.setSize(m,g)}},this.setEffects=function(m){D=m,z=D.length>0&&D[0].isRenderPass===!0;const g=d.width,A=d.height;D.length>0&&_===null&&(_=new Rn(g,A,{type:yn,depthBuffer:!1,stencilBuffer:!1}),U=new Rn(g,A,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<D.length;L++){const f=D[L];f.setSize&&f.setSize(g,A)}},this.begin=function(m,g){if(y||m.toneMapping===0&&D.length===0)return!1;if(o=g,g!==null){const A=g.width,L=g.height;(d.width!==A||d.height!==L)&&this.setSize(A,L)}return z===!1&&m.setRenderTarget(d),u=m.toneMapping,m.toneMapping=0,!0},this.hasRenderPass=function(){return z},this.end=function(m,g){m.toneMapping=u,y=!0;let A=d,L=_;for(let f=0;f<D.length;f++){const p=D[f];p.enabled!==!1&&(p.render(m,L,A,g),p.needsSwap!==!1&&(A=L,L=L===_?U:_))}if(x!==m.outputColorSpace||P!==m.toneMapping){x=m.outputColorSpace,P=m.toneMapping,G.defines={},en.getTransfer(x)==="srgb"&&(G.defines.SRGB_TRANSFER="");const f=ra[P];f&&(G.defines[f]=""),G.needsUpdate=!0}G.uniforms.tDiffuse.value=A.texture,m.setRenderTarget(o),m.render(B,h),o=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){d.dispose(),_!==null&&_.dispose(),U!==null&&U.dispose(),R.dispose(),G.dispose()}}var gi=new rr,bt=new rt(1,1),vi=new ei,Si=new yr,Ei=new ai,Mi=[],Ti=[],Ai=new Float32Array(16),Ri=new Float32Array(9),xi=new Float32Array(4);function Kn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const l=t*n;let s=Mi[l];if(s===void 0&&(s=new Float32Array(l),Mi[l]=s),t!==0){i.toArray(s,0);for(let d=1,_=0;d!==t;++d)_+=n,e[d].toArray(s,_)}return s}function cn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function lt(e,t){let n=Ti[t];n===void 0&&(n=new Int32Array(t),Ti[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function oa(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function sa(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function la(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cn(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function ca(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function fa(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(cn(n,i))return;xi.set(i),e.uniformMatrix2fv(this.addr,!1,xi),fn(n,i)}}function da(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(cn(n,i))return;Ri.set(i),e.uniformMatrix3fv(this.addr,!1,Ri),fn(n,i)}}function ua(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(cn(n,i))return;Ai.set(i),e.uniformMatrix4fv(this.addr,!1,Ai),fn(n,i)}}function pa(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ha(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2iv(this.addr,t),fn(n,t)}}function ma(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3iv(this.addr,t),fn(n,t)}}function _a(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4iv(this.addr,t),fn(n,t)}}function ga(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function va(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2uiv(this.addr,t),fn(n,t)}}function Sa(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3uiv(this.addr,t),fn(n,t)}}function Ea(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4uiv(this.addr,t),fn(n,t)}}function Ma(e,t,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let s;this.type===e.SAMPLER_2D_SHADOW?(bt.compareFunction=n.isReversedDepthBuffer()?518:515,s=bt):s=gi,n.setTexture2D(t||s,l)}function Ta(e,t,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),n.setTexture3D(t||Si,l)}function Aa(e,t,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),n.setTextureCube(t||Ei,l)}function Ra(e,t,n){const i=this.cache,l=n.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),n.setTexture2DArray(t||vi,l)}function xa(e){switch(e){case 5126:return oa;case 35664:return sa;case 35665:return la;case 35666:return ca;case 35674:return fa;case 35675:return da;case 35676:return ua;case 5124:case 35670:return pa;case 35667:case 35671:return ha;case 35668:case 35672:return ma;case 35669:case 35673:return _a;case 5125:return ga;case 36294:return va;case 36295:return Sa;case 36296:return Ea;case 35678:case 36198:case 36298:case 36306:case 35682:return Ma;case 35679:case 36299:case 36307:return Ta;case 35680:case 36300:case 36308:case 36293:return Aa;case 36289:case 36303:case 36311:case 36292:return Ra}}function Pa(e,t){e.uniform1fv(this.addr,t)}function ba(e,t){const n=Kn(t,this.size,2);e.uniform2fv(this.addr,n)}function Ca(e,t){const n=Kn(t,this.size,3);e.uniform3fv(this.addr,n)}function La(e,t){const n=Kn(t,this.size,4);e.uniform4fv(this.addr,n)}function wa(e,t){const n=Kn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Da(e,t){const n=Kn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ua(e,t){const n=Kn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ia(e,t){e.uniform1iv(this.addr,t)}function Na(e,t){e.uniform2iv(this.addr,t)}function ya(e,t){e.uniform3iv(this.addr,t)}function Oa(e,t){e.uniform4iv(this.addr,t)}function Fa(e,t){e.uniform1uiv(this.addr,t)}function Ba(e,t){e.uniform2uiv(this.addr,t)}function Ha(e,t){e.uniform3uiv(this.addr,t)}function Ga(e,t){e.uniform4uiv(this.addr,t)}function Va(e,t,n){const i=this.cache,l=t.length,s=lt(n,l);cn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));let d;this.type===e.SAMPLER_2D_SHADOW?d=bt:d=gi;for(let _=0;_!==l;++_)n.setTexture2D(t[_]||d,s[_])}function Wa(e,t,n){const i=this.cache,l=t.length,s=lt(n,l);cn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let d=0;d!==l;++d)n.setTexture3D(t[d]||Si,s[d])}function ka(e,t,n){const i=this.cache,l=t.length,s=lt(n,l);cn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let d=0;d!==l;++d)n.setTextureCube(t[d]||Ei,s[d])}function za(e,t,n){const i=this.cache,l=t.length,s=lt(n,l);cn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let d=0;d!==l;++d)n.setTexture2DArray(t[d]||vi,s[d])}function Xa(e){switch(e){case 5126:return Pa;case 35664:return ba;case 35665:return Ca;case 35666:return La;case 35674:return wa;case 35675:return Da;case 35676:return Ua;case 5124:case 35670:return Ia;case 35667:case 35671:return Na;case 35668:case 35672:return ya;case 35669:case 35673:return Oa;case 5125:return Fa;case 36294:return Ba;case 36295:return Ha;case 36296:return Ga;case 35678:case 36198:case 36298:case 36306:case 35682:return Va;case 35679:case 36299:case 36307:return Wa;case 35680:case 36300:case 36308:case 36293:return ka;case 36289:case 36303:case 36311:case 36292:return za}}var Ya=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xa(t.type)}},Ka=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xa(t.type)}},qa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let l=0,s=i.length;l!==s;++l){const d=i[l];d.setValue(e,t[d.id],n)}}},Ct=/(\w+)(\])?(\[|\.)?/g;function Pi(e,t){e.seq.push(t),e.map[t.id]=t}function Za(e,t,n){const i=e.name,l=i.length;for(Ct.lastIndex=0;;){const s=Ct.exec(i),d=Ct.lastIndex;let _=s[1];const U=s[2]==="]",R=s[3];if(U&&(_=_|0),R===void 0||R==="["&&d+2===l){Pi(n,R===void 0?new Ya(_,e,t):new Ka(_,e,t));break}else{let G=n.map[_];G===void 0&&(G=new qa(_),Pi(n,G)),n=G}}}var ct=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const d=e.getActiveUniform(t,s);Za(d,e.getUniformLocation(t,d.name),this)}const i=[],l=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):l.push(s);i.length>0&&(this.seq=i.concat(l))}setValue(e,t,n,i){const l=this.map[t];l!==void 0&&l.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let l=0,s=t.length;l!==s;++l){const d=t[l],_=n[d.id];_.needsUpdate!==!1&&d.setValue(e,_.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,l=e.length;i!==l;++i){const s=e[i];s.id in t&&n.push(s)}return n}};function bi(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var ja=37297,$a=0;function Qa(e,t){const n=e.split(`
`),i=[],l=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let d=l;d<s;d++){const _=d+1;i.push(`${_===t?">":" "} ${_}: ${n[d]}`)}return i.join(`
`)}var Ci=new Ne;function Ja(e){en._getMatrix(Ci,en.workingColorSpace,e);const t=`mat3( ${Ci.elements.map(n=>n.toFixed(4))} )`;switch(en.getTransfer(e)){case Jt:return[t,"LinearTransferOETF"];case vt:return[t,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Li(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),l=(e.getShaderInfoLog(t)||"").trim();if(i&&l==="")return"";const s=/ERROR: 0:(\d+)/.exec(l);if(s){const d=parseInt(s[1]);return n.toUpperCase()+`

`+l+`

`+Qa(e.getShaderSource(t),d)}else return l}function eo(e,t){const n=Ja(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var no={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function to(e,t){const n=no[t];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ft=new xe;function io(){return en.getLuminanceCoefficients(ft),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ft.x.toFixed(4)}, ${ft.y.toFixed(4)}, ${ft.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ro(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qn).join(`
`)}function ao(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function oo(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const s=e.getActiveAttrib(t,l),d=s.name;let _=1;s.type===e.FLOAT_MAT2&&(_=2),s.type===e.FLOAT_MAT3&&(_=3),s.type===e.FLOAT_MAT4&&(_=4),n[d]={type:s.type,location:e.getAttribLocation(t,d),locationSize:_}}return n}function Qn(e){return e!==""}function wi(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Di(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var so=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lt(e){return e.replace(so,co)}var lo=new Map;function co(e,t){let n=we[t];if(n===void 0){const i=lo.get(t);if(i!==void 0)n=we[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lt(n)}var fo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ui(e){return e.replace(fo,uo)}function uo(e,t,n,i){let l="";for(let s=parseInt(t);s<parseInt(n);s++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return l}function Ii(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var po={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function ho(e){return po[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mo={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function _o(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":mo[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var go={302:"ENVMAP_MODE_REFRACTION"};function vo(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":go[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var So={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Eo(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":So[e.combine]||"ENVMAP_BLENDING_NONE"}function Mo(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function To(e,t,n,i){const l=e.getContext(),s=n.defines;let d=n.vertexShader,_=n.fragmentShader;const U=ho(n),R=_o(n),G=vo(n),B=Eo(n),h=Mo(n),x=ro(n),P=ao(s),y=l.createProgram();let u,o,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P].filter(Qn).join(`
`),u.length>0&&(u+=`
`),o=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P].filter(Qn).join(`
`),o.length>0&&(o+=`
`)):(u=[Ii(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+G:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+U:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),o=[Ii(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,P,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+R:"",n.envMap?"#define "+G:"",n.envMap?"#define "+B:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+U:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?we.tonemapping_pars_fragment:"",n.toneMapping!==0?to("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,eo("linearToOutputTexel",n.outputColorSpace),io(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qn).join(`
`)),d=Lt(d),d=wi(d,n),d=Di(d,n),_=Lt(_),_=wi(_,n),_=Di(_,n),d=Ui(d),_=Ui(_),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,u=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,o=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const z=D+u+d,m=D+o+_,g=bi(l,l.VERTEX_SHADER,z),A=bi(l,l.FRAGMENT_SHADER,m);l.attachShader(y,g),l.attachShader(y,A),n.index0AttributeName!==void 0?l.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(y,0,"position"),l.linkProgram(y);function L(I){if(e.debug.checkShaderErrors){const H=l.getProgramInfoLog(y)||"",re=l.getShaderInfoLog(g)||"",C=l.getShaderInfoLog(A)||"",W=H.trim(),k=re.trim(),N=C.trim();let fe=!0,Y=!0;if(l.getProgramParameter(y,l.LINK_STATUS)===!1)if(fe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,y,g,A);else{const j=Li(l,g,"vertex"),ne=Li(l,A,"fragment");$e("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(y,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+j+`
`+ne)}else W!==""?We("WebGLProgram: Program Info Log:",W):(k===""||N==="")&&(Y=!1);Y&&(I.diagnostics={runnable:fe,programLog:W,vertexShader:{log:k,prefix:u},fragmentShader:{log:N,prefix:o}})}l.deleteShader(g),l.deleteShader(A),f=new ct(l,y),p=oo(l,y)}let f;this.getUniforms=function(){return f===void 0&&L(this),f};let p;this.getAttributes=function(){return p===void 0&&L(this),p};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(y,ja)),q},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$a++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=g,this.fragmentShader=A,this}var Ao=0,Ro=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xo(e),t.set(e,n)),n}},xo=class{constructor(e){this.id=Ao++,this.code=e,this.usedTimes=0}};function Po(e){return e===1030||e===37490||e===36285}function bo(e,t,n,i,l,s){const d=new fr,_=new Ro,U=new Set,R=[],G=new Map,B=i.logarithmicDepthBuffer;let h=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(f){return U.add(f),f===0?"uv":`uv${f}`}function y(f,p,q,I,H,re){const C=I.fog,W=H.geometry,k=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?I.environment:null,N=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,fe=t.get(f.envMap||k,N),Y=fe&&fe.mapping===306?fe.image.height:null,j=x[f.type];f.precision!==null&&(h=i.getMaxPrecision(f.precision),h!==f.precision&&We("WebGLProgram.getParameters:",f.precision,"not supported, using",h,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Be=ne!==void 0?ne.length:0;let Re=0;W.morphAttributes.position!==void 0&&(Re=1),W.morphAttributes.normal!==void 0&&(Re=2),W.morphAttributes.color!==void 0&&(Re=3);let an,Ue,V,J;if(j){const ln=Cn[j];an=ln.vertexShader,Ue=ln.fragmentShader}else{an=f.vertexShader,Ue=f.fragmentShader;const ln=_.getVertexShaderStage(f),Ve=_.getFragmentShaderStage(f);_.update(f,ln,Ve),V=ln.id,J=Ve.id}const ae=e.getRenderTarget(),Pe=e.state.buffers.depth.getReversed(),Ce=H.isInstancedMesh===!0,he=H.isBatchedMesh===!0,ze=!!f.map,He=!!f.matcap,Le=!!fe,nn=!!f.aoMap,pn=!!f.lightMap,Sn=!!f.bumpMap&&f.wireframe===!1,qe=!!f.normalMap,hn=!!f.displacementMap,on=!!f.emissiveMap,sn=!!f.metalnessMap,E=!!f.roughnessMap,mn=f.anisotropy>0,Ge=f.clearcoat>0,Je=f.dispersion>0,c=f.retroreflectivity>0,r=f.iridescence>0,v=f.sheen>0,O=f.transmission>0,K=mn&&!!f.anisotropyMap,te=Ge&&!!f.clearcoatMap,oe=Ge&&!!f.clearcoatNormalMap,T=Ge&&!!f.clearcoatRoughnessMap,ee=r&&!!f.iridescenceMap,ue=r&&!!f.iridescenceThicknessMap,ge=v&&!!f.sheenColorMap,Q=v&&!!f.sheenRoughnessMap,_e=!!f.specularMap,Me=!!f.specularColorMap,be=!!f.specularIntensityMap,ye=O&&!!f.transmissionMap,M=O&&!!f.thicknessMap,X=!!f.gradientMap,Z=!!f.alphaMap,de=f.alphaTest>0,ve=!!f.alphaHash,$=!!f.extensions;let ce=0;f.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ce=e.toneMapping);const Ae={shaderID:j,shaderType:f.type,shaderName:f.name,vertexShader:an,fragmentShader:Ue,defines:f.defines,customVertexShaderID:V,customFragmentShaderID:J,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:h,batching:he,batchingColor:he&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,outputColorSpace:ae===null?e.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:en.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:ze,matcap:He,envMap:Le,envMapMode:Le&&fe.mapping,envMapCubeUVHeight:Y,aoMap:nn,lightMap:pn,bumpMap:Sn,normalMap:qe,displacementMap:hn,emissiveMap:on,normalMapObjectSpace:qe&&f.normalMapType===1,normalMapTangentSpace:qe&&f.normalMapType===0,packedNormalMap:qe&&f.normalMapType===0&&Po(f.normalMap.format),metalnessMap:sn,roughnessMap:E,anisotropy:mn,anisotropyMap:K,clearcoat:Ge,clearcoatMap:te,clearcoatNormalMap:oe,clearcoatRoughnessMap:T,dispersion:Je,retroreflection:c,iridescence:r,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:v,sheenColorMap:ge,sheenRoughnessMap:Q,specularMap:_e,specularColorMap:Me,specularIntensityMap:be,transmission:O,transmissionMap:ye,thicknessMap:M,gradientMap:X,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:ve,combine:f.combine,mapUv:ze&&P(f.map.channel),aoMapUv:nn&&P(f.aoMap.channel),lightMapUv:pn&&P(f.lightMap.channel),bumpMapUv:Sn&&P(f.bumpMap.channel),normalMapUv:qe&&P(f.normalMap.channel),displacementMapUv:hn&&P(f.displacementMap.channel),emissiveMapUv:on&&P(f.emissiveMap.channel),metalnessMapUv:sn&&P(f.metalnessMap.channel),roughnessMapUv:E&&P(f.roughnessMap.channel),anisotropyMapUv:K&&P(f.anisotropyMap.channel),clearcoatMapUv:te&&P(f.clearcoatMap.channel),clearcoatNormalMapUv:oe&&P(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:T&&P(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&P(f.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&P(f.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&P(f.sheenColorMap.channel),sheenRoughnessMapUv:Q&&P(f.sheenRoughnessMap.channel),specularMapUv:_e&&P(f.specularMap.channel),specularColorMapUv:Me&&P(f.specularColorMap.channel),specularIntensityMapUv:be&&P(f.specularIntensityMap.channel),transmissionMapUv:ye&&P(f.transmissionMap.channel),thicknessMapUv:M&&P(f.thicknessMap.channel),alphaMapUv:Z&&P(f.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qe||mn),vertexNormals:!!W.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(ze||Z),fog:!!C,useFog:f.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||W.attributes.normal===void 0&&qe===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:B,reversedDepthBuffer:Pe,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Re,numSunLights:p.sun.length,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numSunLightShadows:p.sunShadowMap.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&q.length>0,shadowMapType:e.shadowMap.type,toneMapping:ce,decodeVideoTexture:ze&&f.map.isVideoTexture===!0&&en.getTransfer(f.map.colorSpace)==="srgb",decodeVideoTextureEmissive:on&&f.emissiveMap.isVideoTexture===!0&&en.getTransfer(f.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:$&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&f.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ae.vertexUv1s=U.has(1),Ae.vertexUv2s=U.has(2),Ae.vertexUv3s=U.has(3),U.clear(),Ae}function u(f){const p=[];if(f.shaderID?p.push(f.shaderID):(p.push(f.customVertexShaderID),p.push(f.customFragmentShaderID)),f.defines!==void 0)for(const q in f.defines)p.push(q),p.push(f.defines[q]);return f.isRawShaderMaterial===!1&&(o(p,f),D(p,f),p.push(e.outputColorSpace)),p.push(f.customProgramCacheKey),p.join()}function o(f,p){f.push(p.precision),f.push(p.outputColorSpace),f.push(p.envMapMode),f.push(p.envMapCubeUVHeight),f.push(p.mapUv),f.push(p.alphaMapUv),f.push(p.lightMapUv),f.push(p.aoMapUv),f.push(p.bumpMapUv),f.push(p.normalMapUv),f.push(p.displacementMapUv),f.push(p.emissiveMapUv),f.push(p.metalnessMapUv),f.push(p.roughnessMapUv),f.push(p.anisotropyMapUv),f.push(p.clearcoatMapUv),f.push(p.clearcoatNormalMapUv),f.push(p.clearcoatRoughnessMapUv),f.push(p.iridescenceMapUv),f.push(p.iridescenceThicknessMapUv),f.push(p.sheenColorMapUv),f.push(p.sheenRoughnessMapUv),f.push(p.specularMapUv),f.push(p.specularColorMapUv),f.push(p.specularIntensityMapUv),f.push(p.transmissionMapUv),f.push(p.thicknessMapUv),f.push(p.combine),f.push(p.fogExp2),f.push(p.sizeAttenuation),f.push(p.morphTargetsCount),f.push(p.morphAttributeCount),f.push(p.numSunLights),f.push(p.numDirLights),f.push(p.numPointLights),f.push(p.numSpotLights),f.push(p.numSpotLightMaps),f.push(p.numHemiLights),f.push(p.numRectAreaLights),f.push(p.numSunLightShadows),f.push(p.numDirLightShadows),f.push(p.numPointLightShadows),f.push(p.numSpotLightShadows),f.push(p.numSpotLightShadowsWithMaps),f.push(p.numLightProbes),f.push(p.shadowMapType),f.push(p.toneMapping),f.push(p.numClippingPlanes),f.push(p.numClipIntersection),f.push(p.depthPacking)}function D(f,p){d.disableAll(),p.instancing&&d.enable(0),p.instancingColor&&d.enable(1),p.instancingMorph&&d.enable(2),p.matcap&&d.enable(3),p.envMap&&d.enable(4),p.normalMapObjectSpace&&d.enable(5),p.normalMapTangentSpace&&d.enable(6),p.clearcoat&&d.enable(7),p.iridescence&&d.enable(8),p.alphaTest&&d.enable(9),p.vertexColors&&d.enable(10),p.vertexAlphas&&d.enable(11),p.vertexUv1s&&d.enable(12),p.vertexUv2s&&d.enable(13),p.vertexUv3s&&d.enable(14),p.vertexTangents&&d.enable(15),p.anisotropy&&d.enable(16),p.alphaHash&&d.enable(17),p.batching&&d.enable(18),p.dispersion&&d.enable(19),p.retroreflection&&d.enable(24),p.batchingColor&&d.enable(20),p.gradientMap&&d.enable(21),p.packedNormalMap&&d.enable(22),p.vertexNormals&&d.enable(23),f.push(d.mask),d.disableAll(),p.fog&&d.enable(0),p.useFog&&d.enable(1),p.flatShading&&d.enable(2),p.logarithmicDepthBuffer&&d.enable(3),p.reversedDepthBuffer&&d.enable(4),p.skinning&&d.enable(5),p.morphTargets&&d.enable(6),p.morphNormals&&d.enable(7),p.morphColors&&d.enable(8),p.premultipliedAlpha&&d.enable(9),p.shadowMapEnabled&&d.enable(10),p.doubleSided&&d.enable(11),p.flipSided&&d.enable(12),p.useDepthPacking&&d.enable(13),p.dithering&&d.enable(14),p.transmission&&d.enable(15),p.sheen&&d.enable(16),p.opaque&&d.enable(17),p.pointsUvs&&d.enable(18),p.decodeVideoTexture&&d.enable(19),p.decodeVideoTextureEmissive&&d.enable(20),p.alphaToCoverage&&d.enable(21),p.numLightProbeGrids>0&&d.enable(22),p.hasPositionAttribute&&d.enable(23),f.push(d.mask)}function z(f){const p=x[f.type];let q;if(p){const I=Cn[p];q=or.clone(I.uniforms)}else q=f.uniforms;return q}function m(f,p){let q=G.get(p);return q!==void 0?++q.usedTimes:(q=new To(e,p,f,l),R.push(q),G.set(p,q)),q}function g(f){if(--f.usedTimes===0){const p=R.indexOf(f);R[p]=R[R.length-1],R.pop(),G.delete(f.cacheKey),f.destroy()}}function A(f){_.remove(f)}function L(){_.dispose()}return{getParameters:y,getProgramCacheKey:u,getUniforms:z,acquireProgram:m,releaseProgram:g,releaseShaderCache:A,programs:R,dispose:L}}function Co(){let e=new WeakMap;function t(d){return e.has(d)}function n(d){let _=e.get(d);return _===void 0&&(_={},e.set(d,_)),_}function i(d){e.delete(d)}function l(d,_,U){e.get(d)[_]=U}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:l,dispose:s}}function Lo(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Ni(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function yi(){const e=[];let t=0;const n=[],i=[],l=[];function s(){t=0,n.length=0,i.length=0,l.length=0}function d(h){let x=0;return h.isInstancedMesh&&(x+=2),h.isSkinnedMesh&&(x+=1),x}function _(h,x,P,y,u,o){let D=e[t];return D===void 0?(D={id:h.id,object:h,geometry:x,material:P,materialVariant:d(h),groupOrder:y,renderOrder:h.renderOrder,z:u,group:o},e[t]=D):(D.id=h.id,D.object=h,D.geometry=x,D.material=P,D.materialVariant=d(h),D.groupOrder=y,D.renderOrder=h.renderOrder,D.z=u,D.group=o),t++,D}function U(h,x,P,y,u,o,D){D.reversedDepth===!0&&(u=-u);const z=_(h,x,P,y,u,o);P.transmission>0?i.push(z):P.transparent===!0?l.push(z):n.push(z)}function R(h,x,P,y,u,o){const D=_(h,x,P,y,u,o);P.transmission>0?i.unshift(D):P.transparent===!0?l.unshift(D):n.unshift(D)}function G(h,x){n.length>1&&n.sort(h||Lo),i.length>1&&i.sort(x||Ni),l.length>1&&l.sort(x||Ni)}function B(){for(let h=t,x=e.length;h<x;h++){const P=e[h];if(P.id===null)break;P.id=null,P.object=null,P.geometry=null,P.material=null,P.group=null}}return{opaque:n,transmissive:i,transparent:l,init:s,push:U,unshift:R,finish:B,sort:G}}function wo(){let e=new WeakMap;function t(i,l){const s=e.get(i);let d;return s===void 0?(d=new yi,e.set(i,[d])):l>=s.length?(d=new yi,s.push(d)):d=s[l],d}function n(){e=new WeakMap}return{get:t,dispose:n}}function Do(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new xe,color:new Qe};break;case"SpotLight":n={position:new xe,direction:new xe,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new xe,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new xe,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new xe,halfWidth:new xe,halfHeight:new xe}}return e[t.id]=n,n}}}function Uo(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Io=0;function No(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function yo(e){const t=new Do,n=Uo(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let R=0;R<9;R++)i.probe.push(new xe);const l=new xe,s=new kn,d=new kn;function _(R){let G=0,B=0,h=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,P=0,y=0,u=0,o=0,D=0,z=0,m=0,g=0,A=0,L=0,f=0,p=0,q=0;R.sort(No);for(let H=0,re=R.length;H<re;H++){const C=R[H],W=C.color,k=C.intensity,N=C.distance;let fe=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===1030?fe=C.shadow.map.texture:fe=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)G+=W.r*k,B+=W.g*k,h+=W.b*k;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],k);q++}else if(C.isSunLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,ne=n.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[P]=ne,i.sunShadowMap[P]=fe;const Be=j.getViewportCount();for(let Re=0;Re<Be;Re++)i.sunShadowMatrix[y+Re]=j.getMatrix(Re),i.sunShadowCascade[y+Re]=j._cascadeData[Re];y+=Be,P++}i.sun[x]=Y,x++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,ne=n.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.directionalShadow[u]=ne,i.directionalShadowMap[u]=fe,i.directionalShadowMatrix[u]=C.shadow.matrix,g++}i.directional[u]=Y,u++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(W).multiplyScalar(k),Y.distance=N,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[D]=Y;const j=C.shadow;if(C.map&&(i.spotLightMap[f]=C.map,f++,j.updateMatrices(C),C.castShadow&&p++),i.spotLightMatrix[D]=j.matrix,C.castShadow){const ne=n.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,i.spotShadow[D]=ne,i.spotShadowMap[D]=fe,L++}D++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(W).multiplyScalar(k),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[z]=Y,z++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const j=C.shadow,ne=n.get(C);ne.shadowIntensity=j.intensity,ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,ne.shadowCameraNear=j.camera.near,ne.shadowCameraFar=j.camera.far,i.pointShadow[o]=ne,i.pointShadowMap[o]=fe,i.pointShadowMatrix[o]=C.shadow.matrix,A++}i.point[o]=Y,o++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(k),Y.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[m]=Y,m++}}z>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=G,i.ambient[1]=B,i.ambient[2]=h;const I=i.hash;(I.sunLength!==x||I.directionalLength!==u||I.pointLength!==o||I.spotLength!==D||I.rectAreaLength!==z||I.hemiLength!==m||I.numSunShadows!==P||I.numDirectionalShadows!==g||I.numPointShadows!==A||I.numSpotShadows!==L||I.numSpotMaps!==f||I.numLightProbes!==q)&&(i.sun.length=x,i.directional.length=u,i.spot.length=D,i.rectArea.length=z,i.point.length=o,i.hemi.length=m,i.sunShadow.length=P,i.sunShadowMap.length=P,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.directionalShadowMatrix.length=g,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+f-p,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=p,i.numLightProbes=q,I.sunLength=x,I.directionalLength=u,I.pointLength=o,I.spotLength=D,I.rectAreaLength=z,I.hemiLength=m,I.numSunShadows=P,I.numDirectionalShadows=g,I.numPointShadows=A,I.numSpotShadows=L,I.numSpotMaps=f,I.numLightProbes=q,i.version=Io++)}function U(R,G){let B=0,h=0,x=0,P=0,y=0,u=0;const o=G.matrixWorldInverse;for(let D=0,z=R.length;D<z;D++){const m=R[D];if(m.isSunLight){const g=i.sun[B];g.direction.setFromMatrixPosition(m.matrixWorld),g.direction.transformDirection(o),B++}else if(m.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(m.matrixWorld),l.setFromMatrixPosition(m.target.matrixWorld),g.direction.sub(l),g.direction.transformDirection(o),h++}else if(m.isSpotLight){const g=i.spot[P];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(o),g.direction.setFromMatrixPosition(m.matrixWorld),l.setFromMatrixPosition(m.target.matrixWorld),g.direction.sub(l),g.direction.transformDirection(o),P++}else if(m.isRectAreaLight){const g=i.rectArea[y];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(o),d.identity(),s.copy(m.matrixWorld),s.premultiply(o),d.extractRotation(s),g.halfWidth.set(m.width*.5,0,0),g.halfHeight.set(0,m.height*.5,0),g.halfWidth.applyMatrix4(d),g.halfHeight.applyMatrix4(d),y++}else if(m.isPointLight){const g=i.point[x];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(o),x++}else if(m.isHemisphereLight){const g=i.hemi[u];g.direction.setFromMatrixPosition(m.matrixWorld),g.direction.transformDirection(o),u++}}}return{setup:_,setupView:U,state:i}}function Oi(e){const t=new yo(e),n=[],i=[],l=[];function s(h){B.camera=h,n.length=0,i.length=0,l.length=0}function d(h){n.push(h)}function _(h){i.push(h)}function U(h){l.push(h)}function R(){t.setup(n)}function G(h){t.setupView(n,h)}const B={lightsArray:n,shadowsArray:i,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:B,setupLights:R,setupLightsView:G,pushLight:d,pushShadow:_,pushLightProbeGrid:U}}function Oo(e){let t=new WeakMap;function n(l,s=0){const d=t.get(l);let _;return d===void 0?(_=new Oi(e),t.set(l,[_])):s>=d.length?(_=new Oi(e),d.push(_)):_=d[s],_}function i(){t=new WeakMap}return{get:n,dispose:i}}var Fo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bo=`uniform sampler2D shadow_pass;
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
}`,Ho=[new xe(1,0,0),new xe(-1,0,0),new xe(0,1,0),new xe(0,-1,0),new xe(0,0,1),new xe(0,0,-1)],Go=[new xe(0,-1,0),new xe(0,-1,0),new xe(0,0,1),new xe(0,0,-1),new xe(0,-1,0),new xe(0,-1,0)],Fi=new kn,Jn=new xe,wt=new xe;function Vo(e,t,n){let i=new jt;const l=new je,s=new je,d=new _n,_=new _r,U=new Ur,R={},G=n.maxTextureSize,B={0:1,1:0,2:2},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Fo,fragmentShader:Bo}),x=h.clone();x.defines.HORIZONTAL_PASS=1;const P=new at;P.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xn(P,h),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let o=this.type;this.render=function(A,L,f){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||A.length===0)return;this.type===2&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const p=e.getRenderTarget(),q=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),H=e.state;H.setBlending(0),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const re=o!==this.type;re&&L.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(W=>W.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,W=A.length;C<W;C++){const k=A[C],N=k.shadow;if(N===void 0){We("WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;l.copy(N.mapSize);const fe=N.getFrameExtents();l.multiply(fe),s.copy(N.mapSize),(l.x>G||l.y>G)&&(l.x>G&&(s.x=Math.floor(G/fe.x),l.x=s.x*fe.x,N.mapSize.x=s.x),l.y>G&&(s.y=Math.floor(G/fe.y),l.y=s.y*fe.y,N.mapSize.y=s.y));const Y=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Y,N.map===null||re===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===3){if(k.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Rn(l.x,l.y,{format:Mt,type:yn,minFilter:An,magFilter:An,generateMipmaps:!1}),N.map.texture.name=k.name+".shadowMap",N.map.depthTexture=new rt(l.x,l.y,ii),N.map.depthTexture.name=k.name+".shadowMapDepth",N.map.depthTexture.format=ht,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=zn,N.map.depthTexture.magFilter=zn}else k.isPointLight?(N.map=new _i(l.x),N.map.depthTexture=new pr(l.x,it)):(N.map=new Rn(l.x,l.y),N.map.depthTexture=new rt(l.x,l.y,it)),N.map.depthTexture.name=k.name+".shadowMap",N.map.depthTexture.format=ht,this.type===1?(N.map.depthTexture.compareFunction=Y?518:515,N.map.depthTexture.minFilter=An,N.map.depthTexture.magFilter=An):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=zn,N.map.depthTexture.magFilter=zn);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==l.x||N.map.height!==l.y)&&N.map.setSize(l.x,l.y);const j=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();k.isPointLight!==!0&&N.updateMatrices(k,f);for(let ne=0;ne<j;ne++){const Be=N.getCamera(ne);if(k.isPointLight){const Re=N.camera,an=N.matrix,Ue=k.distance||Re.far;Ue!==Re.far&&(Re.far=Ue,Re.updateProjectionMatrix()),Jn.setFromMatrixPosition(k.matrixWorld),Re.position.copy(Jn),wt.copy(Re.position),wt.add(Ho[ne]),Re.up.copy(Go[ne]),Re.lookAt(wt),Re.updateMatrixWorld(),an.makeTranslation(-Jn.x,-Jn.y,-Jn.z),Fi.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Fi,Re.coordinateSystem,Re.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,ne),e.clear();else{ne===0&&(e.setRenderTarget(N.map),e.clear());const Re=N.getViewport(ne);d.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),H.viewport(d)}i=N.getFrustum(ne),m(L,f,Be,k,this.type)}N.isPointLightShadow!==!0&&this.type===3&&D(N,f),N.needsUpdate=!1}o=this.type,u.needsUpdate=!1,e.setRenderTarget(p,q,I)};function D(A,L){const f=t.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,x.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,x.needsUpdate=!0),A.mapPass===null?A.mapPass=new Rn(l.x,l.y,{format:Mt,type:yn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(L,null,f,h,y,null),x.uniforms.shadow_pass.value=A.mapPass.texture,x.uniforms.resolution.value.set(A.map.width,A.map.height),x.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(L,null,f,x,y,null)}function z(A,L,f,p){let q=null;const I=f.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)q=I;else if(q=f.isPointLight===!0?U:_,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=q.uuid,re=L.uuid;let C=R[H];C===void 0&&(C={},R[H]=C);let W=C[re];W===void 0&&(W=q.clone(),C[re]=W,L.addEventListener("dispose",g)),q=W}if(q.visible=L.visible,q.wireframe=L.wireframe,p===3?q.side=L.shadowSide!==null?L.shadowSide:L.side:q.side=L.shadowSide!==null?L.shadowSide:B[L.side],q.alphaMap=L.alphaMap,q.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,q.map=L.map,q.clipShadows=L.clipShadows,q.clippingPlanes=L.clippingPlanes,q.clipIntersection=L.clipIntersection,q.displacementMap=L.displacementMap,q.displacementScale=L.displacementScale,q.displacementBias=L.displacementBias,q.wireframeLinewidth=L.wireframeLinewidth,q.linewidth=L.linewidth,f.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const H=e.properties.get(q);H.light=f}return q}function m(A,L,f,p,q){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&q===3)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,A.matrixWorld);const H=t.update(A),re=A.material;if(Array.isArray(re)){const C=H.groups;for(let W=0,k=C.length;W<k;W++){const N=C[W],fe=re[N.materialIndex];if(fe&&fe.visible){const Y=z(A,fe,p,q);A.onBeforeShadow(e,A,L,f,H,Y,N),e.renderBufferDirect(f,null,H,Y,A,N),A.onAfterShadow(e,A,L,f,H,Y,N)}}}else if(re.visible){const C=z(A,re,p,q);A.onBeforeShadow(e,A,L,f,H,C,null),e.renderBufferDirect(f,null,H,C,A,null),A.onAfterShadow(e,A,L,f,H,C,null)}}const I=A.children;for(let H=0,re=I.length;H<re;H++)m(I[H],L,f,p,q)}function g(A){A.target.removeEventListener("dispose",g);for(const L in R){const f=R[L],p=A.target.uuid;p in f&&(f[p].dispose(),delete f[p])}}}function Wo(e,t){function n(){let M=!1;const X=new _n;let Z=null;const de=new _n(0,0,0,0);return{setMask:function(ve){Z!==ve&&!M&&(e.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){M=ve},setClear:function(ve,$,ce,Ae,ln){ln===!0&&(ve*=Ae,$*=Ae,ce*=Ae),X.set(ve,$,ce,Ae),de.equals(X)===!1&&(e.clearColor(ve,$,ce,Ae),de.copy(X))},reset:function(){M=!1,Z=null,de.set(-1,0,0,0)}}}function i(){let M=!1,X=!1,Z=null,de=null,ve=null;return{setReversed:function($){if(X!==$){const ce=t.get("EXT_clip_control");$?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),X=$;const Ae=ve;ve=null,this.setClear(Ae)}},getReversed:function(){return X},setTest:function($){$?ae(e.DEPTH_TEST):Pe(e.DEPTH_TEST)},setMask:function($){Z!==$&&!M&&(e.depthMask($),Z=$)},setFunc:function($){if(X&&($=Nr[$]),de!==$){switch($){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}de=$}},setLocked:function($){M=$},setClear:function($){ve!==$&&(ve=$,X&&($=1-$),e.clearDepth($))},reset:function(){M=!1,Z=null,de=null,ve=null,X=!1}}}function l(){let M=!1,X=null,Z=null,de=null,ve=null,$=null,ce=null,Ae=null,ln=null;return{setTest:function(Ve){M||(Ve?ae(e.STENCIL_TEST):Pe(e.STENCIL_TEST))},setMask:function(Ve){X!==Ve&&!M&&(e.stencilMask(Ve),X=Ve)},setFunc:function(Ve,Pn,wn){(Z!==Ve||de!==Pn||ve!==wn)&&(e.stencilFunc(Ve,Pn,wn),Z=Ve,de=Pn,ve=wn)},setOp:function(Ve,Pn,wn){($!==Ve||ce!==Pn||Ae!==wn)&&(e.stencilOp(Ve,Pn,wn),$=Ve,ce=Pn,Ae=wn)},setLocked:function(Ve){M=Ve},setClear:function(Ve){ln!==Ve&&(e.clearStencil(Ve),ln=Ve)},reset:function(){M=!1,X=null,Z=null,de=null,ve=null,$=null,ce=null,Ae=null,ln=null}}}const s=new n,d=new i,_=new l,U=new WeakMap,R=new WeakMap;let G={},B={},h={},x=new WeakMap,P=[],y=null,u=!1,o=null,D=null,z=null,m=null,g=null,A=null,L=null,f=new Qe(0,0,0),p=0,q=!1,I=null,H=null,re=null,C=null,W=null;const k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,fe=0;const Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=fe>=1):Y.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=fe>=2);let j=null,ne={};const Be=e.getParameter(e.SCISSOR_BOX),Re=e.getParameter(e.VIEWPORT),an=new _n().fromArray(Be),Ue=new _n().fromArray(Re);function V(M,X,Z,de){const ve=new Uint8Array(4),$=e.createTexture();e.bindTexture(M,$),e.texParameteri(M,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(M,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ce=0;ce<Z;ce++)M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY?e.texImage3D(X,0,e.RGBA,1,1,de,0,e.RGBA,e.UNSIGNED_BYTE,ve):e.texImage2D(X+ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ve);return $}const J={};J[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),d.setClear(1),_.setClear(0),ae(e.DEPTH_TEST),d.setFunc(3),Sn(!1),qe(1),ae(e.CULL_FACE),nn(0);function ae(M){G[M]!==!0&&(e.enable(M),G[M]=!0)}function Pe(M){G[M]!==!1&&(e.disable(M),G[M]=!1)}function Ce(M,X){return h[M]!==X?(e.bindFramebuffer(M,X),h[M]=X,M===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=X),M===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=X),!0):!1}function he(M,X){let Z=P,de=!1;if(M){Z=x.get(X),Z===void 0&&(Z=[],x.set(X,Z));const ve=M.textures;if(Z.length!==ve.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let $=0,ce=ve.length;$<ce;$++)Z[$]=e.COLOR_ATTACHMENT0+$;Z.length=ve.length,de=!0}}else Z[0]!==e.BACK&&(Z[0]=e.BACK,de=!0);de&&e.drawBuffers(Z)}function ze(M){return y!==M?(e.useProgram(M),y=M,!0):!1}const He={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};He[103]=e.MIN,He[104]=e.MAX;const Le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function nn(M,X,Z,de,ve,$,ce,Ae,ln,Ve){if(M===0){u===!0&&(Pe(e.BLEND),u=!1);return}if(u===!1&&(ae(e.BLEND),u=!0),M!==5){if(M!==o||Ve!==q){if((D!==100||g!==100)&&(e.blendEquation(e.FUNC_ADD),D=100,g=100),Ve)switch(M){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:$e("WebGLState: Invalid blending: ",M)}else switch(M){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",M)}z=null,m=null,A=null,L=null,f.set(0,0,0),p=0,o=M,q=Ve}return}ve=ve||X,$=$||Z,ce=ce||de,(X!==D||ve!==g)&&(e.blendEquationSeparate(He[X],He[ve]),D=X,g=ve),(Z!==z||de!==m||$!==A||ce!==L)&&(e.blendFuncSeparate(Le[Z],Le[de],Le[$],Le[ce]),z=Z,m=de,A=$,L=ce),(Ae.equals(f)===!1||ln!==p)&&(e.blendColor(Ae.r,Ae.g,Ae.b,ln),f.copy(Ae),p=ln),o=M,q=!1}function pn(M,X){M.side===2?Pe(e.CULL_FACE):ae(e.CULL_FACE);let Z=M.side===1;X&&(Z=!Z),Sn(Z),M.blending===1&&M.transparent===!1?nn(0):nn(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),d.setFunc(M.depthFunc),d.setTest(M.depthTest),d.setMask(M.depthWrite),s.setMask(M.colorWrite);const de=M.stencilWrite;_.setTest(de),de&&(_.setMask(M.stencilWriteMask),_.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),_.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),on(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ae(e.SAMPLE_ALPHA_TO_COVERAGE):Pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Sn(M){I!==M&&(M?e.frontFace(e.CW):e.frontFace(e.CCW),I=M)}function qe(M){M!==0?(ae(e.CULL_FACE),M!==H&&(M===1?e.cullFace(e.BACK):M===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Pe(e.CULL_FACE),H=M}function hn(M){M!==re&&(N&&e.lineWidth(M),re=M)}function on(M,X,Z){M?(ae(e.POLYGON_OFFSET_FILL),(C!==X||W!==Z)&&(C=X,W=Z,d.getReversed()&&(X=-X),e.polygonOffset(X,Z))):Pe(e.POLYGON_OFFSET_FILL)}function sn(M){M?ae(e.SCISSOR_TEST):Pe(e.SCISSOR_TEST)}function E(M){M===void 0&&(M=e.TEXTURE0+k-1),j!==M&&(e.activeTexture(M),j=M)}function mn(M,X,Z){Z===void 0&&(j===null?Z=e.TEXTURE0+k-1:Z=j);let de=ne[Z];de===void 0&&(de={type:void 0,texture:void 0},ne[Z]=de),(de.type!==M||de.texture!==X)&&(j!==Z&&(e.activeTexture(Z),j=Z),e.bindTexture(M,X||J[M]),de.type=M,de.texture=X)}function Ge(){const M=ne[j];M!==void 0&&M.type!==void 0&&(e.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function Je(){try{e.compressedTexImage2D(...arguments)}catch(M){$e("WebGLState:",M)}}function c(){try{e.compressedTexImage3D(...arguments)}catch(M){$e("WebGLState:",M)}}function r(){try{e.texSubImage2D(...arguments)}catch(M){$e("WebGLState:",M)}}function v(){try{e.texSubImage3D(...arguments)}catch(M){$e("WebGLState:",M)}}function O(){try{e.compressedTexSubImage2D(...arguments)}catch(M){$e("WebGLState:",M)}}function K(){try{e.compressedTexSubImage3D(...arguments)}catch(M){$e("WebGLState:",M)}}function te(){try{e.texStorage2D(...arguments)}catch(M){$e("WebGLState:",M)}}function oe(){try{e.texStorage3D(...arguments)}catch(M){$e("WebGLState:",M)}}function T(){try{e.texImage2D(...arguments)}catch(M){$e("WebGLState:",M)}}function ee(){try{e.texImage3D(...arguments)}catch(M){$e("WebGLState:",M)}}function ue(M){return B[M]!==void 0?B[M]:e.getParameter(M)}function ge(M,X){B[M]!==X&&(e.pixelStorei(M,X),B[M]=X)}function Q(M){an.equals(M)===!1&&(e.scissor(M.x,M.y,M.z,M.w),an.copy(M))}function _e(M){Ue.equals(M)===!1&&(e.viewport(M.x,M.y,M.z,M.w),Ue.copy(M))}function Me(M,X){let Z=R.get(X);Z===void 0&&(Z=new WeakMap,R.set(X,Z));let de=Z.get(M);de===void 0&&(de=e.getUniformBlockIndex(X,M.name),Z.set(M,de))}function be(M,X){const Z=R.get(X).get(M);U.get(X)!==Z&&(e.uniformBlockBinding(X,Z,M.__bindingPointIndex),U.set(X,Z))}function ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),G={},B={},j=null,ne={},h={},x=new WeakMap,P=[],y=null,u=!1,o=null,D=null,z=null,m=null,g=null,A=null,L=null,f=new Qe(0,0,0),p=0,q=!1,I=null,H=null,re=null,C=null,W=null,an.set(0,0,e.canvas.width,e.canvas.height),Ue.set(0,0,e.canvas.width,e.canvas.height),s.reset(),d.reset(),_.reset()}return{buffers:{color:s,depth:d,stencil:_},enable:ae,disable:Pe,bindFramebuffer:Ce,drawBuffers:he,useProgram:ze,setBlending:nn,setMaterial:pn,setFlipSided:Sn,setCullFace:qe,setLineWidth:hn,setPolygonOffset:on,setScissorTest:sn,activeTexture:E,bindTexture:mn,unbindTexture:Ge,compressedTexImage2D:Je,compressedTexImage3D:c,texImage2D:T,texImage3D:ee,pixelStorei:ge,getParameter:ue,updateUBOMapping:Me,uniformBlockBinding:be,texStorage2D:te,texStorage3D:oe,texSubImage2D:r,texSubImage3D:v,compressedTexSubImage2D:O,compressedTexSubImage3D:K,scissor:Q,viewport:_e,reset:ye}}function ko(e,t,n,i,l,s,d){const _=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),R=new je,G=new WeakMap,B=new Set;let h;const x=new WeakMap;let P=!1;try{P=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(c,r){return P?new OffscreenCanvas(c,r):dr("canvas")}function u(c,r,v){let O=1;const K=Je(c);if((K.width>v||K.height>v)&&(O=v/Math.max(K.width,K.height)),O<1)if(typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap||typeof VideoFrame<"u"&&c instanceof VideoFrame){const te=Math.floor(O*K.width),oe=Math.floor(O*K.height);h===void 0&&(h=y(te,oe));const T=r?y(te,oe):h;return T.width=te,T.height=oe,T.getContext("2d").drawImage(c,0,0,te,oe),We("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+te+"x"+oe+")."),T}else return"data"in c&&We("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),c;return c}function o(c){return c.generateMipmaps}function D(c){e.generateMipmap(c)}function z(c){return c.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:c.isWebGL3DRenderTarget?e.TEXTURE_3D:c.isWebGLArrayRenderTarget||c.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(c,r,v,O,K,te=!1){if(c!==null){if(e[c]!==void 0)return e[c];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+c+"'")}let oe;O&&(oe=t.get("EXT_texture_norm16"),oe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let T=r;if(r===e.RED&&(v===e.FLOAT&&(T=e.R32F),v===e.HALF_FLOAT&&(T=e.R16F),v===e.UNSIGNED_BYTE&&(T=e.R8),v===e.UNSIGNED_SHORT&&oe&&(T=oe.R16_EXT),v===e.SHORT&&oe&&(T=oe.R16_SNORM_EXT)),r===e.RED_INTEGER&&(v===e.UNSIGNED_BYTE&&(T=e.R8UI),v===e.UNSIGNED_SHORT&&(T=e.R16UI),v===e.UNSIGNED_INT&&(T=e.R32UI),v===e.BYTE&&(T=e.R8I),v===e.SHORT&&(T=e.R16I),v===e.INT&&(T=e.R32I)),r===e.RG&&(v===e.FLOAT&&(T=e.RG32F),v===e.HALF_FLOAT&&(T=e.RG16F),v===e.UNSIGNED_BYTE&&(T=e.RG8),v===e.UNSIGNED_SHORT&&oe&&(T=oe.RG16_EXT),v===e.SHORT&&oe&&(T=oe.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(v===e.UNSIGNED_BYTE&&(T=e.RG8UI),v===e.UNSIGNED_SHORT&&(T=e.RG16UI),v===e.UNSIGNED_INT&&(T=e.RG32UI),v===e.BYTE&&(T=e.RG8I),v===e.SHORT&&(T=e.RG16I),v===e.INT&&(T=e.RG32I)),r===e.RGB_INTEGER&&(v===e.UNSIGNED_BYTE&&(T=e.RGB8UI),v===e.UNSIGNED_SHORT&&(T=e.RGB16UI),v===e.UNSIGNED_INT&&(T=e.RGB32UI),v===e.BYTE&&(T=e.RGB8I),v===e.SHORT&&(T=e.RGB16I),v===e.INT&&(T=e.RGB32I)),r===e.RGBA_INTEGER&&(v===e.UNSIGNED_BYTE&&(T=e.RGBA8UI),v===e.UNSIGNED_SHORT&&(T=e.RGBA16UI),v===e.UNSIGNED_INT&&(T=e.RGBA32UI),v===e.BYTE&&(T=e.RGBA8I),v===e.SHORT&&(T=e.RGBA16I),v===e.INT&&(T=e.RGBA32I)),r===e.RGB&&(v===e.UNSIGNED_SHORT&&oe&&(T=oe.RGB16_EXT),v===e.SHORT&&oe&&(T=oe.RGB16_SNORM_EXT),v===e.UNSIGNED_INT_5_9_9_9_REV&&(T=e.RGB9_E5),v===e.UNSIGNED_INT_10F_11F_11F_REV&&(T=e.R11F_G11F_B10F)),r===e.RGBA){const ee=te?Jt:en.getTransfer(K);v===e.FLOAT&&(T=e.RGBA32F),v===e.HALF_FLOAT&&(T=e.RGBA16F),v===e.UNSIGNED_BYTE&&(T=ee==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),v===e.UNSIGNED_SHORT&&oe&&(T=oe.RGBA16_EXT),v===e.SHORT&&oe&&(T=oe.RGBA16_SNORM_EXT),v===e.UNSIGNED_SHORT_4_4_4_4&&(T=e.RGBA4),v===e.UNSIGNED_SHORT_5_5_5_1&&(T=e.RGB5_A1)}return(T===e.R16F||T===e.R32F||T===e.RG16F||T===e.RG32F||T===e.RGBA16F||T===e.RGBA32F)&&t.get("EXT_color_buffer_float"),T}function g(c,r){let v;return c?r===null||r===1014||r===1020?v=e.DEPTH24_STENCIL8:r===1015?v=e.DEPTH32F_STENCIL8:r===1012&&(v=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===1014||r===1020?v=e.DEPTH_COMPONENT24:r===1015?v=e.DEPTH_COMPONENT32F:r===1012&&(v=e.DEPTH_COMPONENT16),v}function A(c,r){return o(c)===!0||c.isFramebufferTexture&&c.minFilter!==1003&&c.minFilter!==1006?Math.log2(Math.max(r.width,r.height))+1:c.mipmaps!==void 0&&c.mipmaps.length>0?c.mipmaps.length:c.isCompressedTexture&&Array.isArray(c.image)?r.mipmaps.length:1}function L(c){const r=c.target;r.removeEventListener("dispose",L),p(r),r.isVideoTexture&&G.delete(r),r.isHTMLTexture&&B.delete(r)}function f(c){const r=c.target;r.removeEventListener("dispose",f),I(r)}function p(c){const r=i.get(c);if(r.__webglInit===void 0)return;const v=c.source,O=x.get(v);if(O){const K=O[r.__cacheKey];K.usedTimes--,K.usedTimes===0&&q(c),Object.keys(O).length===0&&x.delete(v)}i.remove(c)}function q(c){const r=i.get(c);e.deleteTexture(r.__webglTexture);const v=c.source,O=x.get(v);delete O[r.__cacheKey],d.memory.textures--}function I(c){const r=i.get(c);if(c.depthTexture&&(c.depthTexture.dispose(),i.remove(c.depthTexture)),c.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(r.__webglFramebuffer[O]))for(let K=0;K<r.__webglFramebuffer[O].length;K++)e.deleteFramebuffer(r.__webglFramebuffer[O][K]);else e.deleteFramebuffer(r.__webglFramebuffer[O]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[O])}else{if(Array.isArray(r.__webglFramebuffer))for(let O=0;O<r.__webglFramebuffer.length;O++)e.deleteFramebuffer(r.__webglFramebuffer[O]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let O=0;O<r.__webglColorRenderbuffer.length;O++)r.__webglColorRenderbuffer[O]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[O]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const v=c.textures;for(let O=0,K=v.length;O<K;O++){const te=i.get(v[O]);te.__webglTexture&&(e.deleteTexture(te.__webglTexture),d.memory.textures--),i.remove(v[O])}i.remove(c)}let H=0;function re(){H=0}function C(){return H}function W(c){H=c}function k(){const c=H;return c>=l.maxTextures&&We("WebGLTextures: Trying to use "+(c+1)+" texture units while this GPU supports only "+l.maxTextures),H+=1,c}function N(c){const r=[];return r.push(c.wrapS),r.push(c.wrapT),r.push(c.wrapR||0),r.push(c.magFilter),r.push(c.minFilter),r.push(c.anisotropy),r.push(c.internalFormat),r.push(c.format),r.push(c.type),r.push(c.generateMipmaps),r.push(c.premultiplyAlpha),r.push(c.flipY),r.push(c.unpackAlignment),r.push(c.colorSpace),r.join()}function fe(c,r){const v=i.get(c);if(c.isVideoTexture&&mn(c),c.isRenderTargetTexture===!1&&c.isExternalTexture!==!0&&c.version>0&&v.__version!==c.version){const O=c.image;if(O===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(v,c,r);return}}else c.isExternalTexture&&(v.__webglTexture=c.sourceTexture?c.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,v.__webglTexture,e.TEXTURE0+r)}function Y(c,r){const v=i.get(c);if(c.isRenderTargetTexture===!1&&c.version>0&&v.__version!==c.version){Pe(v,c,r);return}else c.isExternalTexture&&(v.__webglTexture=c.sourceTexture?c.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,v.__webglTexture,e.TEXTURE0+r)}function j(c,r){const v=i.get(c);if(c.isRenderTargetTexture===!1&&c.version>0&&v.__version!==c.version){Pe(v,c,r);return}n.bindTexture(e.TEXTURE_3D,v.__webglTexture,e.TEXTURE0+r)}function ne(c,r){const v=i.get(c);if(c.isCubeDepthTexture!==!0&&c.version>0&&v.__version!==c.version){Ce(v,c,r);return}n.bindTexture(e.TEXTURE_CUBE_MAP,v.__webglTexture,e.TEXTURE0+r)}const Be={[Cr]:e.REPEAT,[gt]:e.CLAMP_TO_EDGE,[Lr]:e.MIRRORED_REPEAT},Re={[zn]:e.NEAREST,[Er]:e.NEAREST_MIPMAP_NEAREST,[vr]:e.NEAREST_MIPMAP_LINEAR,[An]:e.LINEAR,[Ir]:e.LINEAR_MIPMAP_NEAREST,[Zt]:e.LINEAR_MIPMAP_LINEAR},an={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Ue(c,r){if(r.type===1015&&t.has("OES_texture_float_linear")===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(c,e.TEXTURE_WRAP_S,Be[r.wrapS]),e.texParameteri(c,e.TEXTURE_WRAP_T,Be[r.wrapT]),(c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY)&&e.texParameteri(c,e.TEXTURE_WRAP_R,Be[r.wrapR]),e.texParameteri(c,e.TEXTURE_MAG_FILTER,Re[r.magFilter]),e.texParameteri(c,e.TEXTURE_MIN_FILTER,Re[r.minFilter]),r.compareFunction&&(e.texParameteri(c,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(c,e.TEXTURE_COMPARE_FUNC,an[r.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const v=t.get("EXT_texture_filter_anisotropic");e.texParameterf(c,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,l.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function V(c,r){let v=!1;c.__webglInit===void 0&&(c.__webglInit=!0,r.addEventListener("dispose",L));const O=r.source;let K=x.get(O);K===void 0&&(K={},x.set(O,K));const te=N(r);if(te!==c.__cacheKey){K[te]===void 0&&(K[te]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,v=!0),K[te].usedTimes++;const oe=K[c.__cacheKey];oe!==void 0&&(K[c.__cacheKey].usedTimes--,oe.usedTimes===0&&q(r)),c.__cacheKey=te,c.__webglTexture=K[te].texture}return v}function J(c,r,v){return Math.floor(Math.floor(c/v)/r)}function ae(c,r,v,O){const te=c.updateRanges;if(te.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,v,O,r.data);else{te.sort((ge,Q)=>ge.start-Q.start);let oe=0;for(let ge=1;ge<te.length;ge++){const Q=te[oe],_e=te[ge],Me=Q.start+Q.count,be=J(_e.start,r.width,4),ye=J(Q.start,r.width,4);_e.start<=Me+1&&be===ye&&J(_e.start+_e.count-1,r.width,4)===be?Q.count=Math.max(Q.count,_e.start+_e.count-Q.start):(++oe,te[oe]=_e)}te.length=oe+1;const T=n.getParameter(e.UNPACK_ROW_LENGTH),ee=n.getParameter(e.UNPACK_SKIP_PIXELS),ue=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let ge=0,Q=te.length;ge<Q;ge++){const _e=te[ge],Me=Math.floor(_e.start/4),be=Math.ceil(_e.count/4),ye=Me%r.width,M=Math.floor(Me/r.width),X=be,Z=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(e.UNPACK_SKIP_ROWS,M),n.texSubImage2D(e.TEXTURE_2D,0,ye,M,X,Z,v,O,r.data)}c.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,T),n.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function Pe(c,r,v){let O=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(O=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(O=e.TEXTURE_3D);const K=V(c,r),te=r.source;n.bindTexture(O,c.__webglTexture,e.TEXTURE0+v);const oe=i.get(te);if(te.version!==oe.__version||K===!0){if(n.activeTexture(e.TEXTURE0+v),!(typeof ImageBitmap<"u"&&r.image instanceof ImageBitmap)){const X=en.getPrimaries(en.workingColorSpace),Z=r.colorSpace===""?null:en.getPrimaries(r.colorSpace),de=r.colorSpace===""||X===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let T=u(r.image,!1,l.maxTextureSize);T=Ge(r,T);const ee=s.convert(r.format,r.colorSpace),ue=s.convert(r.type);let ge=m(r.internalFormat,ee,ue,r.normalized,r.colorSpace,r.isVideoTexture);Ue(O,r);let Q;const _e=r.mipmaps,Me=r.isVideoTexture!==!0,be=oe.__version===void 0||K===!0,ye=te.dataReady,M=A(r,T);if(r.isDepthTexture)ge=g(r.format===oi,r.type),be&&(Me?n.texStorage2D(e.TEXTURE_2D,1,ge,T.width,T.height):n.texImage2D(e.TEXTURE_2D,0,ge,T.width,T.height,0,ee,ue,null));else if(r.isDataTexture)if(_e.length>0){Me&&be&&n.texStorage2D(e.TEXTURE_2D,M,ge,_e[0].width,_e[0].height);for(let X=0,Z=_e.length;X<Z;X++)Q=_e[X],Me?ye&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,Q.width,Q.height,ee,ue,Q.data):n.texImage2D(e.TEXTURE_2D,X,ge,Q.width,Q.height,0,ee,ue,Q.data);r.generateMipmaps=!1}else Me?(be&&n.texStorage2D(e.TEXTURE_2D,M,ge,T.width,T.height),ye&&ae(r,T,ee,ue)):n.texImage2D(e.TEXTURE_2D,0,ge,T.width,T.height,0,ee,ue,T.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){Me&&be&&n.texStorage3D(e.TEXTURE_2D_ARRAY,M,ge,_e[0].width,_e[0].height,T.depth);for(let X=0,Z=_e.length;X<Z;X++)if(Q=_e[X],r.format!==1023)if(ee!==null)if(Me){if(ye)if(r.layerUpdates.size>0){const de=Qt(Q.width,Q.height,r.format,r.type);for(const ve of r.layerUpdates){const $=Q.data.subarray(ve*de/Q.data.BYTES_PER_ELEMENT,(ve+1)*de/Q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,ve,Q.width,Q.height,1,ee,$)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Q.width,Q.height,T.depth,ee,Q.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,ge,Q.width,Q.height,T.depth,0,Q.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?ye&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Q.width,Q.height,T.depth,ee,ue,Q.data):n.texImage3D(e.TEXTURE_2D_ARRAY,X,ge,Q.width,Q.height,T.depth,0,ee,ue,Q.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{Me&&be&&n.texStorage2D(e.TEXTURE_2D,M,ge,_e[0].width,_e[0].height);for(let X=0,Z=_e.length;X<Z;X++)Q=_e[X],r.format!==1023?ee!==null?Me?ye&&n.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,Q.width,Q.height,ee,Q.data):n.compressedTexImage2D(e.TEXTURE_2D,X,ge,Q.width,Q.height,0,Q.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?ye&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,Q.width,Q.height,ee,ue,Q.data):n.texImage2D(e.TEXTURE_2D,X,ge,Q.width,Q.height,0,ee,ue,Q.data)}else if(r.isDataArrayTexture)if(Me){if(be&&n.texStorage3D(e.TEXTURE_2D_ARRAY,M,ge,T.width,T.height,T.depth),ye)if(r.layerUpdates.size>0){const X=Qt(T.width,T.height,r.format,r.type);for(const Z of r.layerUpdates){const de=T.data.subarray(Z*X/T.data.BYTES_PER_ELEMENT,(Z+1)*X/T.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,T.width,T.height,1,ee,ue,de)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,ee,ue,T.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ge,T.width,T.height,T.depth,0,ee,ue,T.data);else if(r.isData3DTexture)Me?(be&&n.texStorage3D(e.TEXTURE_3D,M,ge,T.width,T.height,T.depth),ye&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,ee,ue,T.data)):n.texImage3D(e.TEXTURE_3D,0,ge,T.width,T.height,T.depth,0,ee,ue,T.data);else if(r.isFramebufferTexture){if(be)if(Me)n.texStorage2D(e.TEXTURE_2D,M,ge,T.width,T.height);else{let X=T.width,Z=T.height;for(let de=0;de<M;de++)n.texImage2D(e.TEXTURE_2D,de,ge,X,Z,0,ee,ue,null),X>>=1,Z>>=1}}else if(r.isHTMLTexture){if("texElementImage2D"in e){const X=e.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),T.parentNode!==X){X.appendChild(T),B.add(r),X.onpaint=Z=>{const de=Z.changedElements;for(const ve of B)de.includes(ve.image)&&(ve.needsUpdate=!0)},X.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,T);else{const de=e.RGBA,ve=e.RGBA,$=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,de,ve,$,T)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Me&&be){const X=Je(_e[0]);n.texStorage2D(e.TEXTURE_2D,M,ge,X.width,X.height)}for(let X=0,Z=_e.length;X<Z;X++)Q=_e[X],Me?ye&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,ee,ue,Q):n.texImage2D(e.TEXTURE_2D,X,ge,ee,ue,Q);r.generateMipmaps=!1}else if(Me){if(be){const X=Je(T);n.texStorage2D(e.TEXTURE_2D,M,ge,X.width,X.height)}ye&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ee,ue,T)}else n.texImage2D(e.TEXTURE_2D,0,ge,ee,ue,T);o(r)&&D(O),oe.__version=te.version,r.onUpdate&&r.onUpdate(r)}c.__version=r.version}function Ce(c,r,v){if(r.image.length!==6)return;const O=V(c,r),K=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture,e.TEXTURE0+v);const te=i.get(K);if(K.version!==te.__version||O===!0){n.activeTexture(e.TEXTURE0+v);const oe=en.getPrimaries(en.workingColorSpace),T=r.colorSpace===""?null:en.getPrimaries(r.colorSpace),ee=r.colorSpace===""||oe===T?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ue=r.isCompressedTexture||r.image[0].isCompressedTexture,ge=r.image[0]&&r.image[0].isDataTexture,Q=[];for(let $=0;$<6;$++)!ue&&!ge?Q[$]=u(r.image[$],!0,l.maxCubemapSize):Q[$]=ge?r.image[$].image:r.image[$],Q[$]=Ge(r,Q[$]);const _e=Q[0],Me=s.convert(r.format,r.colorSpace),be=s.convert(r.type),ye=m(r.internalFormat,Me,be,r.normalized,r.colorSpace),M=r.isVideoTexture!==!0,X=te.__version===void 0||O===!0,Z=K.dataReady;let de=A(r,_e);Ue(e.TEXTURE_CUBE_MAP,r);let ve;if(ue){M&&X&&n.texStorage2D(e.TEXTURE_CUBE_MAP,de,ye,_e.width,_e.height);for(let $=0;$<6;$++){ve=Q[$].mipmaps;for(let ce=0;ce<ve.length;ce++){const Ae=ve[ce];r.format!==1023?Me!==null?M?Z&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,Ae.width,Ae.height,Me,Ae.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,ye,Ae.width,Ae.height,0,Ae.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,Ae.width,Ae.height,Me,be,Ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,ye,Ae.width,Ae.height,0,Me,be,Ae.data)}}}else{if(ve=r.mipmaps,M&&X){ve.length>0&&de++;const $=Je(Q[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,de,ye,$.width,$.height)}for(let $=0;$<6;$++)if(ge){M?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Q[$].width,Q[$].height,Me,be,Q[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,Q[$].width,Q[$].height,0,Me,be,Q[$].data);for(let ce=0;ce<ve.length;ce++){const Ae=ve[ce].image[$].image;M?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Ae.width,Ae.height,Me,be,Ae.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,ye,Ae.width,Ae.height,0,Me,be,Ae.data)}}else{M?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,be,Q[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ye,Me,be,Q[$]);for(let ce=0;ce<ve.length;ce++){const Ae=ve[ce];M?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Me,be,Ae.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,ye,Me,be,Ae.image[$])}}}o(r)&&D(e.TEXTURE_CUBE_MAP),te.__version=K.version,r.onUpdate&&r.onUpdate(r)}c.__version=r.version}function he(c,r,v,O,K,te){const oe=s.convert(v.format,v.colorSpace),T=s.convert(v.type),ee=m(v.internalFormat,oe,T,v.normalized,v.colorSpace),ue=i.get(r),ge=i.get(v);if(ge.__renderTarget=r,!ue.__hasExternalTextures){const Q=Math.max(1,r.width>>te),_e=Math.max(1,r.height>>te);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,te,ee,Q,_e,r.depth,0,oe,T,null):n.texImage2D(K,te,ee,Q,_e,0,oe,T,null)}n.bindFramebuffer(e.FRAMEBUFFER,c),E(r)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,O,K,ge.__webglTexture,0,sn(r)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,O,K,ge.__webglTexture,te),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ze(c,r,v){if(e.bindRenderbuffer(e.RENDERBUFFER,c),r.depthBuffer){const O=r.depthTexture,K=O&&O.isDepthTexture?O.type:null,te=g(r.stencilBuffer,K),oe=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;E(r)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,sn(r),te,r.width,r.height):v?e.renderbufferStorageMultisample(e.RENDERBUFFER,sn(r),te,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,te,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,oe,e.RENDERBUFFER,c)}else{const O=r.textures;for(let K=0;K<O.length;K++){const te=O[K],oe=s.convert(te.format,te.colorSpace),T=s.convert(te.type),ee=m(te.internalFormat,oe,T,te.normalized,te.colorSpace);E(r)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,sn(r),ee,r.width,r.height):v?e.renderbufferStorageMultisample(e.RENDERBUFFER,sn(r),ee,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,ee,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function He(c,r,v){const O=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,c),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(r.depthTexture);if(K.__renderTarget=r,(!K.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),O){if(K.__webglInit===void 0&&(K.__webglInit=!0,r.depthTexture.addEventListener("dispose",L)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,r.depthTexture);const ue=s.convert(r.depthTexture.format),ge=s.convert(r.depthTexture.type);let Q;r.depthTexture.format===1026?Q=e.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(Q=e.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Q,r.width,r.height,0,ue,ge,null)}}else fe(r.depthTexture,0);const te=K.__webglTexture,oe=sn(r),T=O?e.TEXTURE_CUBE_MAP_POSITIVE_X+v:e.TEXTURE_2D,ee=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)E(r)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,T,te,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,ee,T,te,0);else if(r.depthTexture.format===1027)E(r)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,T,te,0,oe):e.framebufferTexture2D(e.FRAMEBUFFER,ee,T,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(c){const r=i.get(c),v=c.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==c.depthTexture){const O=c.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),O){const K=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,O.removeEventListener("dispose",K)};O.addEventListener("dispose",K),r.__depthDisposeCallback=K}r.__boundDepthTexture=O}if(c.depthTexture&&!r.__autoAllocateDepthBuffer)if(v)for(let O=0;O<6;O++)He(r.__webglFramebuffer[O],c,O);else{const O=c.texture.mipmaps;O&&O.length>0?He(r.__webglFramebuffer[0],c,0):He(r.__webglFramebuffer,c,0)}else if(v){r.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[O]),r.__webglDepthbuffer[O]===void 0)r.__webglDepthbuffer[O]=e.createRenderbuffer(),ze(r.__webglDepthbuffer[O],c,!1);else{const K=c.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer[O];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,te)}}else{const O=c.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),ze(r.__webglDepthbuffer,c,!1);else{const K=c.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,te)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function nn(c,r,v){const O=i.get(c);r!==void 0&&he(O.__webglFramebuffer,c,c.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),v!==void 0&&Le(c)}function pn(c){const r=c.texture,v=i.get(c),O=i.get(r);c.addEventListener("dispose",f);const K=c.textures,te=c.isWebGLCubeRenderTarget===!0,oe=K.length>1;if(oe||(O.__webglTexture===void 0&&(O.__webglTexture=e.createTexture()),O.__version=r.version,d.memory.textures++),te){v.__webglFramebuffer=[];for(let T=0;T<6;T++)if(r.mipmaps&&r.mipmaps.length>0){v.__webglFramebuffer[T]=[];for(let ee=0;ee<r.mipmaps.length;ee++)v.__webglFramebuffer[T][ee]=e.createFramebuffer()}else v.__webglFramebuffer[T]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){v.__webglFramebuffer=[];for(let T=0;T<r.mipmaps.length;T++)v.__webglFramebuffer[T]=e.createFramebuffer()}else v.__webglFramebuffer=e.createFramebuffer();if(oe)for(let T=0,ee=K.length;T<ee;T++){const ue=i.get(K[T]);ue.__webglTexture===void 0&&(ue.__webglTexture=e.createTexture(),d.memory.textures++)}if(c.samples>0&&E(c)===!1){v.__webglMultisampledFramebuffer=e.createFramebuffer(),v.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let T=0;T<K.length;T++){const ee=K[T];v.__webglColorRenderbuffer[T]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,v.__webglColorRenderbuffer[T]);const ue=s.convert(ee.format,ee.colorSpace),ge=s.convert(ee.type),Q=m(ee.internalFormat,ue,ge,ee.normalized,ee.colorSpace,c.isXRRenderTarget===!0),_e=sn(c);e.renderbufferStorageMultisample(e.RENDERBUFFER,_e,Q,c.width,c.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+T,e.RENDERBUFFER,v.__webglColorRenderbuffer[T])}e.bindRenderbuffer(e.RENDERBUFFER,null),c.depthBuffer&&(v.__webglDepthRenderbuffer=e.createRenderbuffer(),ze(v.__webglDepthRenderbuffer,c,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,r);for(let T=0;T<6;T++)if(r.mipmaps&&r.mipmaps.length>0)for(let ee=0;ee<r.mipmaps.length;ee++)he(v.__webglFramebuffer[T][ee],c,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+T,ee);else he(v.__webglFramebuffer[T],c,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);o(r)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let T=0,ee=K.length;T<ee;T++){const ue=K[T],ge=i.get(ue);let Q=e.TEXTURE_2D;(c.isWebGL3DRenderTarget||c.isWebGLArrayRenderTarget)&&(Q=c.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,ge.__webglTexture),Ue(Q,ue),he(v.__webglFramebuffer,c,ue,e.COLOR_ATTACHMENT0+T,Q,0),o(ue)&&D(Q)}n.unbindTexture()}else{let T=e.TEXTURE_2D;if((c.isWebGL3DRenderTarget||c.isWebGLArrayRenderTarget)&&(T=c.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(T,O.__webglTexture),Ue(T,r),r.mipmaps&&r.mipmaps.length>0)for(let ee=0;ee<r.mipmaps.length;ee++)he(v.__webglFramebuffer[ee],c,r,e.COLOR_ATTACHMENT0,T,ee);else he(v.__webglFramebuffer,c,r,e.COLOR_ATTACHMENT0,T,0);o(r)&&D(T),n.unbindTexture()}c.depthBuffer&&Le(c)}function Sn(c){const r=c.textures;for(let v=0,O=r.length;v<O;v++){const K=r[v];if(o(K)){const te=z(c),oe=i.get(K).__webglTexture;n.bindTexture(te,oe),D(te),n.unbindTexture()}}}const qe=[],hn=[];function on(c){if(c.samples>0){if(E(c)===!1){const r=c.textures,v=c.width,O=c.height;let K=e.COLOR_BUFFER_BIT;const te=c.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=i.get(c),T=r.length>1;if(T)for(let ue=0;ue<r.length;ue++)n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ee=c.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ue=0;ue<r.length;ue++){if(c.resolveDepthBuffer&&(c.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),c.stencilBuffer&&c.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),T){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const ge=i.get(r[ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ge,0)}e.blitFramebuffer(0,0,v,O,0,0,v,O,K,e.NEAREST),U===!0&&(qe.length=0,hn.length=0,qe.push(e.COLOR_ATTACHMENT0+ue),c.depthBuffer&&c.storeMultisampledDepthBuffer===!1&&(qe.push(te),hn.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,hn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,qe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),T)for(let ue=0;ue<r.length;ue++){n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const ge=i.get(r[ue]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,ge,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(c.depthBuffer&&c.storeMultisampledDepthBuffer===!1&&U){const r=c.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}function sn(c){return Math.min(l.maxSamples,c.samples)}function E(c){const r=i.get(c);return c.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function mn(c){const r=d.render.frame;G.get(c)!==r&&(G.set(c,r),c.update())}function Ge(c,r){const v=c.colorSpace,O=c.format,K=c.type;return c.isCompressedTexture===!0||c.isVideoTexture===!0||v!=="srgb-linear"&&v!==""&&(en.getTransfer(v)==="srgb"?(O!==1023||K!==1009)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",v)),r}function Je(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement?(R.width=c.naturalWidth||c.width,R.height=c.naturalHeight||c.height):typeof VideoFrame<"u"&&c instanceof VideoFrame?(R.width=c.displayWidth,R.height=c.displayHeight):(R.width=c.width,R.height=c.height),R}this.allocateTextureUnit=k,this.resetTextureUnits=re,this.getTextureUnits=C,this.setTextureUnits=W,this.setTexture2D=fe,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=nn,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=Sn,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=E,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zo(e,t){function n(i,l=""){let s;const d=en.getTransfer(l);if(i===1009)return e.UNSIGNED_BYTE;if(i===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return e.BYTE;if(i===1011)return e.SHORT;if(i===1012)return e.UNSIGNED_SHORT;if(i===1013)return e.INT;if(i===1014)return e.UNSIGNED_INT;if(i===1015)return e.FLOAT;if(i===1016)return e.HALF_FLOAT;if(i===1021)return e.ALPHA;if(i===1022)return e.RGB;if(i===1023)return e.RGBA;if(i===1026)return e.DEPTH_COMPONENT;if(i===1027)return e.DEPTH_STENCIL;if(i===1028)return e.RED;if(i===1029)return e.RED_INTEGER;if(i===1030)return e.RG;if(i===1031)return e.RG_INTEGER;if(i===1033)return e.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(d==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return d==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return d==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return d==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var Xo=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yo=`
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

}`,Ko=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $t(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:Xo,fragmentShader:Yo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qo=class extends tr{constructor(e,t){super();const n=this;let i=null,l=1,s=null,d="local-floor",_=1,U=null,R=null,G=null,B=null,h=null,x=null;const P=typeof XRWebGLBinding<"u",y=new Ko,u={},o=t.getContextAttributes();let D=null,z=null;const m=[],g=[],A=new je;let L=null,f=null;const p=new jn;p.viewport=new _n;const q=new jn;q.viewport=new _n;const I=[p,q],H=new Rr;let re=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=m[V];return J===void 0&&(J=new Et,m[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=m[V];return J===void 0&&(J=new Et,m[V]=J),J.getGripSpace()},this.getHand=function(V){let J=m[V];return J===void 0&&(J=new Et,m[V]=J),J.getHandSpace()};function W(V){const J=g.indexOf(V.inputSource);if(J===-1)return;const ae=m[J];ae!==void 0&&(ae.update(V.inputSource,V.frame,U||s),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",N);for(let V=0;V<m.length;V++){const J=g[V];J!==null&&(g[V]=null,m[V].disconnect(J))}re=null,C=null,y.reset();for(const V in u)delete u[V];if(e.setRenderTarget(D),h=null,B=null,G=null,i=null,z=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),f!==null){const V=f.camera;V.fov=f.fov,V.zoom=f.zoom,V.updateProjectionMatrix(),f=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){l=V,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||s},this.setReferenceSpace=function(V){U=V},this.getBaseLayer=function(){return B!==null?B:h},this.getBinding=function(){return G===null&&P&&(G=new XRWebGLBinding(i,t)),G},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(D=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",k),i.addEventListener("inputsourceschange",N),o.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ae=null,Pe=null;o.depth&&(Pe=o.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=o.stencil?oi:ht,ae=o.stencil?Kt:it);const Ce={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};G=this.getBinding(),B=G.createProjectionLayer(Ce),i.updateRenderState({layers:[B]}),e.setPixelRatio(1),e.setSize(B.textureWidth,B.textureHeight,!1),z=new Rn(B.textureWidth,B.textureHeight,{format:tt,type:Gn,depthTexture:new rt(B.textureWidth,B.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:o.stencil,colorSpace:e.outputColorSpace,samples:o.antialias?4:0,resolveDepthBuffer:B.ignoreDepthValues===!1,resolveStencilBuffer:B.ignoreDepthValues===!1,storeMultisampledDepthBuffer:B.ignoreDepthValues===!1,storeMultisampledStencilBuffer:B.ignoreDepthValues===!1})}else{const J={antialias:o.antialias,alpha:!0,depth:o.depth,stencil:o.stencil,framebufferScaleFactor:l};h=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),z=new Rn(h.framebufferWidth,h.framebufferHeight,{format:tt,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:o.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(_),U=null,s=await i.requestReferenceSpace(d),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function N(V){for(let J=0;J<V.removed.length;J++){const ae=V.removed[J],Pe=g.indexOf(ae);Pe>=0&&(g[Pe]=null,m[Pe].disconnect(ae))}for(let J=0;J<V.added.length;J++){const ae=V.added[J];let Pe=g.indexOf(ae);if(Pe===-1){for(let he=0;he<m.length;he++)if(he>=g.length){g.push(ae),Pe=he;break}else if(g[he]===null){g[he]=ae,Pe=he;break}if(Pe===-1)break}const Ce=m[Pe];Ce&&Ce.connect(ae)}}const fe=new xe,Y=new xe;function j(V,J,ae){fe.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const Pe=fe.distanceTo(Y),Ce=J.projectionMatrix.elements,he=ae.projectionMatrix.elements,ze=Ce[14]/(Ce[10]-1),He=Ce[14]/(Ce[10]+1),Le=(Ce[9]+1)/Ce[5],nn=(Ce[9]-1)/Ce[5],pn=(Ce[8]-1)/Ce[0],Sn=(he[8]+1)/he[0],qe=ze*pn,hn=ze*Sn,on=Pe/(-pn+Sn),sn=on*-pn;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(sn),V.translateZ(on),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ce[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const E=ze+on,mn=He+on,Ge=qe-sn,Je=hn+(Pe-sn),c=Le*He/mn*E,r=nn*He/mn*E;V.projectionMatrix.makePerspective(Ge,Je,c,r,E,mn),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ne(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let J=V.near,ae=V.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(ae=y.depthFar)),H.near=q.near=p.near=J,H.far=q.far=p.far=ae,(re!==H.near||C!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),re=H.near,C=H.far),H.layers.mask=V.layers.mask|6,p.layers.mask=H.layers.mask&-5,q.layers.mask=H.layers.mask&-3;const Pe=V.parent,Ce=H.cameras;ne(H,Pe);for(let he=0;he<Ce.length;he++)ne(Ce[he],Pe);Ce.length===2?j(H,p,q):H.projectionMatrix.copy(p.projectionMatrix),f===null&&V.isPerspectiveCamera&&(f={camera:V,fov:V.fov,zoom:V.zoom}),Be(V,H,Pe)};function Be(V,J,ae){ae===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=cr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(B===null&&h===null))return _},this.setFoveation=function(V){_=V,B!==null&&(B.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(H)},this.getCameraTexture=function(V){return u[V]};let Re=null;function an(V,J){if(R=J.getViewerPose(U||s),x=J,R!==null){const ae=R.views;h!==null&&(e.setRenderTargetFramebuffer(z,h.framebuffer),e.setRenderTarget(z));let Pe=!1;ae.length!==H.cameras.length&&(H.cameras.length=0,Pe=!0);for(let he=0;he<ae.length;he++){const ze=ae[he];let He=null;if(h!==null)He=h.getViewport(ze);else{const nn=G.getViewSubImage(B,ze);He=nn.viewport,he===0&&(e.setRenderTargetTextures(z,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(z))}let Le=I[he];Le===void 0&&(Le=new jn,Le.layers.enable(he),Le.viewport=new _n,I[he]=Le),Le.matrix.fromArray(ze.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ze.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(He.x,He.y,He.width,He.height),he===0&&(H.matrix.copy(Le.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Pe===!0&&H.cameras.push(Le)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&P){G=n.getBinding();const he=G.getDepthInformation(ae[0]);he&&he.isValid&&he.texture&&y.init(he,i.renderState)}if(Ce&&Ce.includes("camera-access")&&P){e.state.unbindTexture(),G=n.getBinding();for(let he=0;he<ae.length;he++){const ze=ae[he].camera;if(ze){let He=u[ze];He||(He=new $t,u[ze]=He);const Le=G.getCameraImage(ze);He.sourceTexture=Le}}}}for(let ae=0;ae<m.length;ae++){const Pe=g[ae],Ce=m[ae];Pe!==null&&Ce!==void 0&&Ce.update(Pe,J,U||s)}Re&&Re(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const Ue=new ci;Ue.setAnimationLoop(an),this.setAnimationLoop=function(V){Re=V},this.dispose=function(){}}},Zo=new kn,Bi=new Ne;Bi.set(-1,0,0,0,1,0,0,0,1);function jo(e,t){function n(u,o){u.matrixAutoUpdate===!0&&u.updateMatrix(),o.value.copy(u.matrix)}function i(u,o){o.color.getRGB(u.fogColor.value,zt(e)),o.isFog?(u.fogNear.value=o.near,u.fogFar.value=o.far):o.isFogExp2&&(u.fogDensity.value=o.density)}function l(u,o,D,z,m){o.isNodeMaterial?o.uniformsNeedUpdate=!1:o.isMeshBasicMaterial?s(u,o):o.isMeshLambertMaterial?(s(u,o),o.envMap&&(u.envMapIntensity.value=o.envMapIntensity)):o.isMeshToonMaterial?(s(u,o),B(u,o)):o.isMeshPhongMaterial?(s(u,o),G(u,o),o.envMap&&(u.envMapIntensity.value=o.envMapIntensity)):o.isMeshStandardMaterial?(s(u,o),h(u,o),o.isMeshPhysicalMaterial&&x(u,o,m)):o.isMeshMatcapMaterial?(s(u,o),P(u,o)):o.isMeshDepthMaterial?s(u,o):o.isMeshDistanceMaterial?(s(u,o),y(u,o)):o.isMeshNormalMaterial?s(u,o):o.isLineBasicMaterial?(d(u,o),o.isLineDashedMaterial&&_(u,o)):o.isPointsMaterial?U(u,o,D,z):o.isSpriteMaterial?R(u,o):o.isShadowMaterial?(u.color.value.copy(o.color),u.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function s(u,o){u.opacity.value=o.opacity,o.color&&u.diffuse.value.copy(o.color),o.emissive&&u.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(u.map.value=o.map,n(o.map,u.mapTransform)),o.alphaMap&&(u.alphaMap.value=o.alphaMap,n(o.alphaMap,u.alphaMapTransform)),o.bumpMap&&(u.bumpMap.value=o.bumpMap,n(o.bumpMap,u.bumpMapTransform),u.bumpScale.value=o.bumpScale,o.side===1&&(u.bumpScale.value*=-1)),o.normalMap&&(u.normalMap.value=o.normalMap,n(o.normalMap,u.normalMapTransform),u.normalScale.value.copy(o.normalScale),o.side===1&&u.normalScale.value.negate()),o.displacementMap&&(u.displacementMap.value=o.displacementMap,n(o.displacementMap,u.displacementMapTransform),u.displacementScale.value=o.displacementScale,u.displacementBias.value=o.displacementBias),o.emissiveMap&&(u.emissiveMap.value=o.emissiveMap,n(o.emissiveMap,u.emissiveMapTransform)),o.specularMap&&(u.specularMap.value=o.specularMap,n(o.specularMap,u.specularMapTransform)),o.alphaTest>0&&(u.alphaTest.value=o.alphaTest);const D=t.get(o),z=D.envMap,m=D.envMapRotation;z&&(u.envMap.value=z,u.envMapRotation.value.setFromMatrix4(Zo.makeRotationFromEuler(m)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(Bi),u.reflectivity.value=o.reflectivity,u.ior.value=o.ior,u.refractionRatio.value=o.refractionRatio),o.lightMap&&(u.lightMap.value=o.lightMap,u.lightMapIntensity.value=o.lightMapIntensity,n(o.lightMap,u.lightMapTransform)),o.aoMap&&(u.aoMap.value=o.aoMap,u.aoMapIntensity.value=o.aoMapIntensity,n(o.aoMap,u.aoMapTransform))}function d(u,o){u.diffuse.value.copy(o.color),u.opacity.value=o.opacity,o.map&&(u.map.value=o.map,n(o.map,u.mapTransform))}function _(u,o){u.dashSize.value=o.dashSize,u.totalSize.value=o.dashSize+o.gapSize,u.scale.value=o.scale}function U(u,o,D,z){u.diffuse.value.copy(o.color),u.opacity.value=o.opacity,u.size.value=o.size*D,u.scale.value=z*.5,o.map&&(u.map.value=o.map,n(o.map,u.uvTransform)),o.alphaMap&&(u.alphaMap.value=o.alphaMap,n(o.alphaMap,u.alphaMapTransform)),o.alphaTest>0&&(u.alphaTest.value=o.alphaTest)}function R(u,o){u.diffuse.value.copy(o.color),u.opacity.value=o.opacity,u.rotation.value=o.rotation,o.map&&(u.map.value=o.map,n(o.map,u.mapTransform)),o.alphaMap&&(u.alphaMap.value=o.alphaMap,n(o.alphaMap,u.alphaMapTransform)),o.alphaTest>0&&(u.alphaTest.value=o.alphaTest)}function G(u,o){u.specular.value.copy(o.specular),u.shininess.value=Math.max(o.shininess,1e-4)}function B(u,o){o.gradientMap&&(u.gradientMap.value=o.gradientMap)}function h(u,o){u.metalness.value=o.metalness,o.metalnessMap&&(u.metalnessMap.value=o.metalnessMap,n(o.metalnessMap,u.metalnessMapTransform)),u.roughness.value=o.roughness,o.roughnessMap&&(u.roughnessMap.value=o.roughnessMap,n(o.roughnessMap,u.roughnessMapTransform)),o.envMap&&(u.envMapIntensity.value=o.envMapIntensity)}function x(u,o,D){u.ior.value=o.ior,o.sheen>0&&(u.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),u.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(u.sheenColorMap.value=o.sheenColorMap,n(o.sheenColorMap,u.sheenColorMapTransform)),o.sheenRoughnessMap&&(u.sheenRoughnessMap.value=o.sheenRoughnessMap,n(o.sheenRoughnessMap,u.sheenRoughnessMapTransform))),o.clearcoat>0&&(u.clearcoat.value=o.clearcoat,u.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(u.clearcoatMap.value=o.clearcoatMap,n(o.clearcoatMap,u.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,n(o.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(u.clearcoatNormalMap.value=o.clearcoatNormalMap,n(o.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===1&&u.clearcoatNormalScale.value.negate())),o.dispersion>0&&(u.dispersion.value=o.dispersion),o.retroreflectivity>0&&(u.retroreflectivity.value=o.retroreflectivity),o.iridescence>0&&(u.iridescence.value=o.iridescence,u.iridescenceIOR.value=o.iridescenceIOR,u.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(u.iridescenceMap.value=o.iridescenceMap,n(o.iridescenceMap,u.iridescenceMapTransform)),o.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=o.iridescenceThicknessMap,n(o.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),o.transmission>0&&(u.transmission.value=o.transmission,u.transmissionSamplerMap.value=D.texture,u.transmissionSamplerSize.value.set(D.width,D.height),o.transmissionMap&&(u.transmissionMap.value=o.transmissionMap,n(o.transmissionMap,u.transmissionMapTransform)),u.thickness.value=o.thickness,o.thicknessMap&&(u.thicknessMap.value=o.thicknessMap,n(o.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=o.attenuationDistance,u.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(u.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(u.anisotropyMap.value=o.anisotropyMap,n(o.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=o.specularIntensity,u.specularColor.value.copy(o.specularColor),o.specularColorMap&&(u.specularColorMap.value=o.specularColorMap,n(o.specularColorMap,u.specularColorMapTransform)),o.specularIntensityMap&&(u.specularIntensityMap.value=o.specularIntensityMap,n(o.specularIntensityMap,u.specularIntensityMapTransform))}function P(u,o){o.matcap&&(u.matcap.value=o.matcap)}function y(u,o){const D=t.get(o).light;u.referencePosition.value.setFromMatrixPosition(D.matrixWorld),u.nearDistance.value=D.shadow.camera.near,u.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function $o(e,t,n,i){let l={},s={},d=[];const _=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function U(m,g){const A=g.program;i.uniformBlockBinding(m,A)}function R(m,g){let A=l[m.id];A===void 0&&(u(m),A=G(m),l[m.id]=A,m.addEventListener("dispose",D));const L=g.program;i.updateUBOMapping(m,L);const f=t.render.frame;s[m.id]!==f&&(h(m),s[m.id]=f)}function G(m){const g=B();m.__bindingPointIndex=g;const A=e.createBuffer(),L=m.__size,f=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,L,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,A),A}function B(){for(let m=0;m<_;m++)if(d.indexOf(m)===-1)return d.push(m),m;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const g=l[m.id],A=m.uniforms,L=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let f=0,p=A.length;f<p;f++){const q=A[f];if(Array.isArray(q))for(let I=0,H=q.length;I<H;I++)x(q[I],f,I,L);else x(q,f,0,L)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(m,g,A,L){if(y(m,g,A,L)===!0){const f=m.__offset,p=m.value;if(Array.isArray(p)){let q=0;for(let I=0;I<p.length;I++){const H=p[I],re=o(H);P(H,m.__data,q),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(q+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else P(p,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,f,m.__data)}}function P(m,g,A){typeof m=="number"||typeof m=="boolean"?g[0]=m:m.isMatrix3?(g[0]=m.elements[0],g[1]=m.elements[1],g[2]=m.elements[2],g[3]=0,g[4]=m.elements[3],g[5]=m.elements[4],g[6]=m.elements[5],g[7]=0,g[8]=m.elements[6],g[9]=m.elements[7],g[10]=m.elements[8],g[11]=0):ArrayBuffer.isView(m)?g.set(new m.constructor(m.buffer,m.byteOffset,g.length)):m.toArray(g,A)}function y(m,g,A,L){const f=m.value,p=g+"_"+A;if(L[p]===void 0)return typeof f=="number"||typeof f=="boolean"?L[p]=f:ArrayBuffer.isView(f)?L[p]=f.slice():L[p]=f.clone(),!0;{const q=L[p];if(typeof f=="number"||typeof f=="boolean"){if(q!==f)return L[p]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(q.equals(f)===!1)return q.copy(f),!0}}return!1}function u(m){const g=m.uniforms;let A=0;const L=16;for(let p=0,q=g.length;p<q;p++){const I=Array.isArray(g[p])?g[p]:[g[p]];for(let H=0,re=I.length;H<re;H++){const C=I[H],W=Array.isArray(C.value)?C.value:[C.value];for(let k=0,N=W.length;k<N;k++){const fe=W[k],Y=o(fe),j=A%L,ne=j%Y.boundary,Be=j+ne;A+=ne,Be!==0&&L-Be<Y.storage&&(A+=L-Be),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=Y.storage}}}const f=A%L;return f>0&&(A+=L-f),m.__size=A,m.__cache={},this}function o(m){const g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(g.boundary=16,g.storage=m.byteLength):We("WebGLRenderer: Unsupported uniform value type.",m),g}function D(m){const g=m.target;g.removeEventListener("dispose",D);const A=d.indexOf(g.__bindingPointIndex);d.splice(A,1),e.deleteBuffer(l[g.id]),delete l[g.id],delete s[g.id]}function z(){for(const m in l)e.deleteBuffer(l[m]);d=[],l={},s={}}return{bind:U,update:R,dispose:z}}var Qo=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function Jo(){return Ln===null&&(Ln=new si(Qo,16,16,Mt,yn),Ln.name="DFG_LUT",Ln.minFilter=An,Ln.magFilter=An,Ln.wrapS=gt,Ln.wrapT=gt,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var es=class{constructor(e={}){const{canvas:t=ur(),context:n=null,depth:i=!0,stencil:l=!1,alpha:s=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:U=!1,powerPreference:R="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:B=!1,outputBufferType:h=Gn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;const P=h,y=new Set([ir,xr,gr]),u=new Set([Gn,it,nr,Kt,lr,Or]),o=new Uint32Array(4),D=new Int32Array(4),z=new xe;let m=null,g=null;const A=[],L=[];let f=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const p=this;let q=!1,I=null,H=null,re=null,C=null;this._outputColorSpace=Ar;let W=0,k=0,N=null,fe=-1,Y=null;const j=new _n,ne=new _n;let Be=null;const Re=new Qe(0);let an=0,Ue=t.width,V=t.height,J=1,ae=null,Pe=null;const Ce=new _n(0,0,Ue,V),he=new _n(0,0,Ue,V);let ze=!1;const He=new jt;let Le=!1,nn=!1;const pn=new kn,Sn=new xe,qe=new _n,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let on=!1;function sn(){return N===null?J:1}let E=n;function mn(a,S){return t.getContext(a,S)}let Ge,Je,c,r,v,O,K,te,oe,T,ee,ue,ge,Q,_e,Me,be,ye,M,X,Z,de,ve;try{const a={alpha:!0,depth:i,stencil:l,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:U,powerPreference:R,failIfMajorPerformanceCaveat:G};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ln,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),E===null){const S="webgl2";if(E=mn(S,a),E===null)throw mn(S)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$()}catch(a){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ln,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),$e("WebGLRenderer: "+a.message),a}function $(){Ge=new Qr(E),Ge.init(),Z=new zo(E,Ge),Je=new Wr(E,Ge,e,Z),c=new Wo(E,Ge),Je.reversedDepthBuffer&&B&&c.buffers.depth.setReversed(!0),H=E.createFramebuffer(),re=E.createFramebuffer(),C=E.createFramebuffer(),r=new na(E),v=new Co,O=new ko(E,Ge,c,v,Je,Z,r),K=new $r(p),te=new Fr(E),de=new Gr(E,te),oe=new Jr(E,te,r,de),T=new ia(E,oe,te,de,r),ye=new ta(E,Je,O),_e=new kr(v),ee=new bo(p,K,Ge,Je,de,_e),ue=new jo(p,v),ge=new wo,Q=new Oo(Ge),be=new Hr(p,K,c,T,x,_),Me=new Vo(p,T,Je),ve=new $o(E,r,Je,c),M=new Vr(E,Ge,r),X=new ea(E,Ge,r),r.programs=ee.programs,p.capabilities=Je,p.extensions=Ge,p.properties=v,p.renderLists=ge,p.shadowMap=Me,p.state=c,p.info=r}P!==1009&&(f=new aa(P,t.width,t.height,d,i,l));const ce=new qo(p,E);this.xr=ce,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const a=Ge.get("WEBGL_lose_context");a&&a.loseContext()},this.forceContextRestore=function(){const a=Ge.get("WEBGL_lose_context");a&&a.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(a){a!==void 0&&(J=a,this.setSize(Ue,V,!1))},this.getSize=function(a){return a.set(Ue,V)},this.setSize=function(a,S,F=!0){if(ce.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=a,V=S,t.width=Math.floor(a*J),t.height=Math.floor(S*J),F===!0&&(t.style.width=a+"px",t.style.height=S+"px"),f!==null&&f.setSize(t.width,t.height),this.setViewport(0,0,a,S)},this.getDrawingBufferSize=function(a){return a.set(Ue*J,V*J).floor()},this.setDrawingBufferSize=function(a,S,F){Ue=a,V=S,J=F,t.width=Math.floor(a*F),t.height=Math.floor(S*F),this.setViewport(0,0,a,S)},this.setEffects=function(a){if(P===1009){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(a){for(let S=0;S<a.length;S++)if(a[S].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}f.setEffects(a||[])},this.getCurrentViewport=function(a){return a.copy(j)},this.getViewport=function(a){return a.copy(Ce)},this.setViewport=function(a,S,F,w){a.isVector4?Ce.set(a.x,a.y,a.z,a.w):Ce.set(a,S,F,w),c.viewport(j.copy(Ce).multiplyScalar(J).round())},this.getScissor=function(a){return a.copy(he)},this.setScissor=function(a,S,F,w){a.isVector4?he.set(a.x,a.y,a.z,a.w):he.set(a,S,F,w),c.scissor(ne.copy(he).multiplyScalar(J).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(a){c.setScissorTest(ze=a)},this.setOpaqueSort=function(a){ae=a},this.setTransparentSort=function(a){Pe=a},this.getClearColor=function(a){return a.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(a=!0,S=!0,F=!0){let w=0;if(a){let b=!1;if(N!==null){const ie=N.texture.format;b=y.has(ie)}if(b){const ie=N.texture.type,le=u.has(ie),pe=be.getClearColor(),me=be.getClearAlpha(),Te=pe.r,De=pe.g,Ie=pe.b;le?(o[0]=Te,o[1]=De,o[2]=Ie,o[3]=me,E.clearBufferuiv(E.COLOR,0,o)):(D[0]=Te,D[1]=De,D[2]=Ie,D[3]=me,E.clearBufferiv(E.COLOR,0,D))}else w|=E.COLOR_BUFFER_BIT}S&&(w|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(w|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w!==0&&E.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(a){a.setRenderer(this),I=a},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ln,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),be.dispose(),ge.dispose(),Q.dispose(),v.dispose(),K.dispose(),T.dispose(),de.dispose(),ve.dispose(),ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Nt),ce.removeEventListener("sessionend",yt),Nn.stop()};function Ae(a){a.preventDefault(),ni("WebGLRenderer: Context Lost."),q=!0}function ln(){ni("WebGLRenderer: Context Restored."),q=!1;const a=r.autoReset,S=Me.enabled,F=Me.autoUpdate,w=Me.needsUpdate,b=Me.type;$(),r.autoReset=a,Me.enabled=S,Me.autoUpdate=F,Me.needsUpdate=w,Me.type=b}function Ve(a){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",a.statusMessage)}function Pn(a){const S=a.target;S.removeEventListener("dispose",Pn),wn(S)}function wn(a){ki(a),v.remove(a)}function ki(a){const S=v.get(a).programs;S!==void 0&&(S.forEach(function(F){ee.releaseProgram(F)}),a.isShaderMaterial&&ee.releaseShaderCache(a))}this.renderBufferDirect=function(a,S,F,w,b,ie){S===null&&(S=hn);const le=b.isMesh&&b.matrixWorld.determinantAffine()<0,pe=Yi(a,S,F,w,b);c.setMaterial(w,le);let me=F.index,Te=1;if(w.wireframe===!0){if(me=oe.getWireframeAttribute(F),me===void 0)return;Te=2}const De=F.drawRange,Ie=F.attributes.position;let Ee=De.start*Te,Xe=(De.start+De.count)*Te;ie!==null&&(Ee=Math.max(Ee,ie.start*Te),Xe=Math.min(Xe,(ie.start+ie.count)*Te)),me!==null?(Ee=Math.max(Ee,0),Xe=Math.min(Xe,me.count)):Ie!=null&&(Ee=Math.max(Ee,0),Xe=Math.min(Xe,Ie.count));const tn=Xe-Ee;if(tn<0||tn===1/0)return;de.setup(b,w,pe,F,me);let Ze,Oe=M;if(me!==null&&(Ze=te.get(me),Oe=X,Oe.setIndex(Ze)),b.isMesh)w.wireframe===!0?(c.setLineWidth(w.wireframeLinewidth*sn()),Oe.setMode(E.LINES)):Oe.setMode(E.TRIANGLES);else if(b.isLine){let un=w.linewidth;un===void 0&&(un=1),c.setLineWidth(un*sn()),b.isLineSegments?Oe.setMode(E.LINES):b.isLineLoop?Oe.setMode(E.LINE_LOOP):Oe.setMode(E.LINE_STRIP)}else b.isPoints?Oe.setMode(E.POINTS):b.isSprite&&Oe.setMode(E.TRIANGLES);if(b.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Oe.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const un=b._multiDrawStarts,Se=b._multiDrawCounts,En=b._multiDrawCount,Fe=me?te.get(me).bytesPerElement:1,Tn=v.get(w).currentProgram.getUniforms();for(let bn=0;bn<En;bn++)Tn.setValue(E,"_gl_DrawID",bn),Oe.render(un[bn]/Fe,Se[bn])}else if(b.isInstancedMesh)Oe.renderInstances(Ee,tn,b.count);else if(F.isInstancedBufferGeometry){const un=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Se=Math.min(F.instanceCount,un);Oe.renderInstances(Ee,tn,Se)}else Oe.render(Ee,tn)};function It(a,S,F,w){I!==null&&a.isNodeMaterial&&I.setObject(w,a),Le===!0&&_e.setState(a,F,!1),a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,nt(a,S,w),a.side=0,a.needsUpdate=!0,nt(a,S,w),a.side=2):nt(a,S,w)}this.compile=function(a,S,F=null){F===null&&(F=a),I!==null&&I.renderStart(a,S,F),g=Q.get(F),g.init(S),L.push(g),F.traverseVisible(function(b){b.isLight&&b.layers.test(S.layers)&&(g.pushLight(b),b.castShadow&&g.pushShadow(b))}),a!==F&&a.traverseVisible(function(b){b.isLight&&b.layers.test(S.layers)&&(g.pushLight(b),b.castShadow&&g.pushShadow(b))}),g.setupLights(),I!==null&&I.updateLights(g.state.lightsArray),nn=this.localClippingEnabled,Le=_e.init(this.clippingPlanes,nn),Le===!0&&_e.setGlobalState(this.clippingPlanes,S),I!==null&&Me.render(g.state.shadowsArray,F,S);const w=new Set;return a.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const ie=b.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const pe=ie[le];It(pe,F,S,b),w.add(pe)}else It(ie,F,S,b),w.add(ie)}),g=L.pop(),I!==null&&I.renderEnd(),w},this.compileAsync=function(a,S,F=null){const w=this.compile(a,S,F);return new Promise(b=>{function ie(){if(w.forEach(function(le){const pe=v.get(le).currentProgram;(pe===void 0||pe.isReady())&&w.delete(le)}),w.size===0){b(a);return}setTimeout(ie,10)}Ge.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let ut=null;function zi(a){ut&&ut(a)}function Nt(){Nn.stop()}function yt(){Nn.start()}const Nn=new ci;Nn.setAnimationLoop(zi),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(a){ut=a,ce.setAnimationLoop(a),a===null?Nn.stop():Nn.start()},ce.addEventListener("sessionstart",Nt),ce.addEventListener("sessionend",yt),this.render=function(a,S){if(S!==void 0&&S.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;I!==null&&I.renderStart(a,S);const F=ce.enabled===!0&&ce.isPresenting===!0,w=f!==null&&(N===null||F)&&f.begin(p,N);if(a.matrixWorldAutoUpdate===!0&&a.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(f===null||f.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(S),S=ce.getCamera()),a.isScene===!0&&a.onBeforeRender(p,a,S,N),g=Q.get(a,L.length),g.init(S),g.state.textureUnits=O.getTextureUnits(),L.push(g),pn.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),He.setFromProjectionMatrix(pn,qt,S.reversedDepth),nn=this.localClippingEnabled,Le=_e.init(this.clippingPlanes,nn),m=ge.get(a,A.length),m.init(),A.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ie=p.xr.getDepthSensingMesh();ie!==null&&pt(ie,S,-1/0,p.sortObjects)}pt(a,S,0,p.sortObjects),m.finish(),I!==null&&I.updateLights(g.state.lightsArray),p.sortObjects===!0&&m.sort(ae,Pe),on=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,on&&be.addToRenderList(m,a),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&_e.beginShadows();const b=g.state.shadowsArray;if(Me.render(b,a,S),Le===!0&&_e.endShadows(),(w&&f.hasRenderPass())===!1){const ie=m.opaque,le=m.transmissive;if(g.setupLights(),S.isArrayCamera){const pe=S.cameras;if(le.length>0)for(let me=0,Te=pe.length;me<Te;me++){const De=pe[me];Ft(ie,le,a,De)}on&&be.render(a);for(let me=0,Te=pe.length;me<Te;me++){const De=pe[me];Ot(m,a,De,De.viewport)}}else le.length>0&&Ft(ie,le,a,S),on&&be.render(a),Ot(m,a,S)}N!==null&&k===0&&(O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N)),w&&f.end(p),a.isScene===!0&&a.onAfterRender(p,a,S),de.resetDefaultState(),fe=-1,Y=null,L.pop(),L.length>0?(g=L[L.length-1],O.setTextureUnits(g.state.textureUnits),Le===!0&&_e.setGlobalState(p.clippingPlanes,g.state.camera)):g=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,I!==null&&I.renderEnd()};function pt(a,S,F,w){if(a.visible===!1)return;if(a.layers.test(S.layers)){if(a.isGroup)F=a.renderOrder;else if(a.isLOD)a.autoUpdate===!0&&a.update(S);else if(a.isLightProbeGrid)g.pushLightProbeGrid(a);else if(a.isLight)g.pushLight(a),a.castShadow&&g.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||a.intersectsFrustum(He)){w&&qe.setFromMatrixPosition(a.matrixWorld).applyMatrix4(pn);const ie=T.update(a),le=a.material;le.visible&&m.push(a,ie,le,F,qe.z,null,S)}}else if((a.isMesh||a.isLine||a.isPoints)&&(!a.frustumCulled||a.intersectsFrustum(He))){const ie=T.update(a),le=a.material;if(w&&(a.boundingSphere!==void 0?(a.boundingSphere===null&&a.computeBoundingSphere(),qe.copy(a.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),qe.copy(ie.boundingSphere.center)),qe.applyMatrix4(a.matrixWorld).applyMatrix4(pn)),Array.isArray(le)){const pe=ie.groups;for(let me=0,Te=pe.length;me<Te;me++){const De=pe[me],Ie=le[De.materialIndex];Ie&&Ie.visible&&m.push(a,ie,Ie,F,qe.z,De,S)}}else le.visible&&m.push(a,ie,le,F,qe.z,null,S)}}const b=a.children;for(let ie=0,le=b.length;ie<le;ie++)pt(b[ie],S,F,w)}function Ot(a,S,F,w){const{opaque:b,transmissive:ie,transparent:le}=a;g.setupLightsView(F),Le===!0&&_e.setGlobalState(p.clippingPlanes,F),w&&c.viewport(j.copy(w)),b.length>0&&et(b,S,F),ie.length>0&&et(ie,S,F),le.length>0&&et(le,S,F),c.buffers.depth.setTest(!0),c.buffers.depth.setMask(!0),c.buffers.color.setMask(!0),c.setPolygonOffset(!1)}function Ft(a,S,F,w){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(g.state.transmissionRenderTarget[w.id]===void 0){const Ie=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");g.state.transmissionRenderTarget[w.id]=new Rn(1,1,{generateMipmaps:!0,type:Ie?yn:Gn,minFilter:Zt,samples:Math.max(4,Je.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:en.workingColorSpace})}const b=g.state.transmissionRenderTarget[w.id],ie=w.viewport||j;b.setSize(ie.z*p.transmissionResolutionScale,ie.w*p.transmissionResolutionScale);const le=p.getRenderTarget(),pe=p.getActiveCubeFace(),me=p.getActiveMipmapLevel();p.setRenderTarget(b),p.getClearColor(Re),an=p.getClearAlpha(),an<1&&p.setClearColor(16777215,.5),p.clear(),on&&be.render(F);const Te=p.toneMapping;p.toneMapping=0;const De=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),g.setupLightsView(w),Le===!0&&_e.setGlobalState(p.clippingPlanes,w),et(a,F,w),O.updateMultisampleRenderTarget(b),O.updateRenderTargetMipmap(b),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ee=0,Xe=S.length;Ee<Xe;Ee++){const{object:tn,geometry:Ze,material:Oe,group:un}=S[Ee];if(Oe.side===2&&tn.layers.test(w.layers)){const Se=Oe.side;Oe.side=1,Oe.needsUpdate=!0,Bt(tn,F,w,Ze,Oe,un),Oe.side=Se,Oe.needsUpdate=!0,Ie=!0}}Ie===!0&&(O.updateMultisampleRenderTarget(b),O.updateRenderTargetMipmap(b))}p.setRenderTarget(le,pe,me),p.setClearColor(Re,an),De!==void 0&&(w.viewport=De),p.toneMapping=Te}function et(a,S,F){const w=S.isScene===!0?S.overrideMaterial:null;for(let b=0,ie=a.length;b<ie;b++){const le=a[b],{object:pe,geometry:me,group:Te}=le;let De=le.material;De.allowOverride===!0&&w!==null&&(De=w),pe.layers.test(F.layers)&&Bt(pe,S,F,me,De,Te)}}function Bt(a,S,F,w,b,ie){I!==null&&b.isNodeMaterial&&I.setObject(a,b),a.onBeforeRender(p,S,F,w,b,ie),a.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,a.matrixWorld),a.normalMatrix.getNormalMatrix(a.modelViewMatrix),b.onBeforeRender(p,S,F,w,a,ie),b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,p.renderBufferDirect(F,S,w,b,a,ie),b.side=0,b.needsUpdate=!0,p.renderBufferDirect(F,S,w,b,a,ie),b.side=2):p.renderBufferDirect(F,S,w,b,a,ie),a.onAfterRender(p,S,F,w,b,ie)}function nt(a,S,F){S.isScene!==!0&&(S=hn);const w=v.get(a),b=g.state.lights,ie=g.state.shadowsArray,le=b.state.version,pe=ee.getParameters(a,b.state,ie,S,F,g.state.lightProbeGridArray),me=ee.getProgramCacheKey(pe);let Te=w.programs;w.environment=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?S.environment:null,w.fog=S.fog;const De=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap;w.envMap=K.get(a.envMap||w.environment,De),w.envMapRotation=w.environment!==null&&a.envMap===null?S.environmentRotation:a.envMapRotation,Te===void 0&&(a.addEventListener("dispose",Pn),Te=new Map,w.programs=Te);let Ie=Te.get(me);if(Ie!==void 0){if(w.currentProgram===Ie&&w.lightsStateVersion===le)return Gt(a,pe),Ie}else pe.uniforms=ee.getUniforms(a),I!==null&&a.isNodeMaterial&&I.build(a,F,pe),a.onBeforeCompile(pe,p),Ie=ee.acquireProgram(pe,me),Te.set(me,Ie),w.uniforms=pe.uniforms;const Ee=w.uniforms;return(!a.isShaderMaterial&&!a.isRawShaderMaterial||a.clipping===!0)&&(Ee.clippingPlanes=_e.uniform),Gt(a,pe),w.needsLights=qi(a),w.lightsStateVersion=le,w.needsLights&&(Ee.ambientLightColor.value=b.state.ambient,Ee.lightProbe.value=b.state.probe,Ee.sunLights.value=b.state.sun,Ee.sunLightShadows.value=b.state.sunShadow,Ee.directionalLights.value=b.state.directional,Ee.directionalLightShadows.value=b.state.directionalShadow,Ee.spotLights.value=b.state.spot,Ee.spotLightShadows.value=b.state.spotShadow,Ee.rectAreaLights.value=b.state.rectArea,Ee.ltc_1.value=b.state.rectAreaLTC1,Ee.ltc_2.value=b.state.rectAreaLTC2,Ee.pointLights.value=b.state.point,Ee.pointLightShadows.value=b.state.pointShadow,Ee.hemisphereLights.value=b.state.hemi,Ee.sunShadowMatrix.value=b.state.sunShadowMatrix,Ee.sunShadowCascade.value=b.state.sunShadowCascade,Ee.directionalShadowMatrix.value=b.state.directionalShadowMatrix,Ee.spotLightMatrix.value=b.state.spotLightMatrix,Ee.spotLightMap.value=b.state.spotLightMap,Ee.pointShadowMatrix.value=b.state.pointShadowMatrix),w.lightProbeGrid=g.state.lightProbeGridArray.length>0,w.currentProgram=Ie,w.uniformsList=null,Ie}function Ht(a){if(a.uniformsList===null){const S=a.currentProgram.getUniforms();a.uniformsList=ct.seqWithValue(S.seq,a.uniforms)}return a.uniformsList}function Gt(a,S){const F=v.get(a);F.outputColorSpace=S.outputColorSpace,F.batching=S.batching,F.batchingColor=S.batchingColor,F.instancing=S.instancing,F.instancingColor=S.instancingColor,F.instancingMorph=S.instancingMorph,F.skinning=S.skinning,F.morphTargets=S.morphTargets,F.morphNormals=S.morphNormals,F.morphColors=S.morphColors,F.morphTargetsCount=S.morphTargetsCount,F.numClippingPlanes=S.numClippingPlanes,F.numIntersection=S.numClipIntersection,F.vertexAlphas=S.vertexAlphas,F.vertexTangents=S.vertexTangents,F.toneMapping=S.toneMapping}function Xi(a,S){if(a.length===0)return null;if(a.length===1)return a[0].texture!==null?a[0]:null;z.setFromMatrixPosition(S.matrixWorld);for(let F=0,w=a.length;F<w;F++){const b=a[F];if(b.texture!==null&&b.boundingBox.containsPoint(z))return b}return null}function Yi(a,S,F,w,b){S.isScene!==!0&&(S=hn),O.resetTextureUnits();const ie=S.fog,le=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?S.environment:null,pe=N===null?p.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:en.workingColorSpace,me=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Te=K.get(w.envMap||le,me),De=w.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ie=!!F.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),Ee=!!F.morphAttributes.position,Xe=!!F.morphAttributes.normal,tn=!!F.morphAttributes.color;let Ze=0;w.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ze=p.toneMapping);const Oe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,un=Oe!==void 0?Oe.length:0,Se=v.get(w),En=g.state.lights;if(Le===!0&&(nn===!0||a!==Y)){const Ke=a===Y&&w.id===fe;_e.setState(w,a,Ke)}let Fe=!1;w.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==En.state.version||Se.outputColorSpace!==pe||b.isBatchedMesh&&Se.batching===!1||!b.isBatchedMesh&&Se.batching===!0||b.isBatchedMesh&&Se.batchingColor===!0&&b._colorsTexture===null||b.isBatchedMesh&&Se.batchingColor===!1&&b._colorsTexture!==null||b.isInstancedMesh&&Se.instancing===!1||!b.isInstancedMesh&&Se.instancing===!0||b.isSkinnedMesh&&Se.skinning===!1||!b.isSkinnedMesh&&Se.skinning===!0||b.isInstancedMesh&&Se.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&Se.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&Se.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&Se.instancingMorph===!1&&b.morphTexture!==null||Se.envMap!==Te||w.fog===!0&&Se.fog!==ie||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==_e.numPlanes||Se.numIntersection!==_e.numIntersection)||Se.vertexAlphas!==De||Se.vertexTangents!==Ie||Se.morphTargets!==Ee||Se.morphNormals!==Xe||Se.morphColors!==tn||Se.toneMapping!==Ze||Se.morphTargetsCount!==un||!!Se.lightProbeGrid!=g.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Se.__version=w.version);let Tn=Se.currentProgram;Fe===!0&&(Tn=nt(w,S,b),I&&w.isNodeMaterial&&I.onUpdateProgram(w,Tn,Se));let bn=!1,Un=!1,Fn=!1;const Ye=Tn.getUniforms(),rn=Se.uniforms;if(c.useProgram(Tn.program)&&(bn=!0,Un=!0,Fn=!0),w.id!==fe&&(fe=w.id,Un=!0),Se.needsLights){const Ke=Xi(g.state.lightProbeGridArray,b);Se.lightProbeGrid!==Ke&&(Se.lightProbeGrid=Ke,Un=!0)}if(bn||Y!==a){c.buffers.depth.getReversed()&&a.reversedDepth!==!0&&(a._reversedDepth=!0,a.updateProjectionMatrix()),Ye.setValue(E,"projectionMatrix",a.projectionMatrix),Ye.setValue(E,"viewMatrix",a.matrixWorldInverse);const Ke=Ye.map.cameraPosition;Ke!==void 0&&Ke.setValue(E,Sn.setFromMatrixPosition(a.matrixWorld)),Je.logarithmicDepthBuffer&&Ye.setValue(E,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&Ye.setValue(E,"isOrthographic",a.isOrthographicCamera===!0),Y!==a&&(Y=a,Un=!0,Fn=!0)}if(Se.needsLights&&(En.state.sunShadowMap.length>0&&Ye.setValue(E,"sunShadowMap",En.state.sunShadowMap,O),En.state.directionalShadowMap.length>0&&Ye.setValue(E,"directionalShadowMap",En.state.directionalShadowMap,O),En.state.spotShadowMap.length>0&&Ye.setValue(E,"spotShadowMap",En.state.spotShadowMap,O),En.state.pointShadowMap.length>0&&Ye.setValue(E,"pointShadowMap",En.state.pointShadowMap,O)),b.isSkinnedMesh){Ye.setOptional(E,b,"bindMatrix"),Ye.setOptional(E,b,"bindMatrixInverse");const Ke=b.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ye.setValue(E,"boneTexture",Ke.boneTexture,O))}b.isBatchedMesh&&(Ye.setOptional(E,b,"batchingTexture"),Ye.setValue(E,"batchingTexture",b._matricesTexture,O),Ye.setOptional(E,b,"batchingIdTexture"),Ye.setValue(E,"batchingIdTexture",b._indirectTexture,O),Ye.setOptional(E,b,"batchingColorTexture"),b._colorsTexture!==null&&Ye.setValue(E,"batchingColorTexture",b._colorsTexture,O));const In=F.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ye.update(b,F,Tn),(Un||Se.receiveShadow!==b.receiveShadow)&&(Se.receiveShadow=b.receiveShadow,Ye.setValue(E,"receiveShadow",b.receiveShadow)),(w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial)&&w.envMap===null&&S.environment!==null&&(rn.envMapIntensity.value=S.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Jo()),Un){if(Ye.setValue(E,"toneMappingExposure",p.toneMappingExposure),Se.needsLights&&Ki(rn,Fn),ie&&w.fog===!0&&ue.refreshFogUniforms(rn,ie),ue.refreshMaterialUniforms(rn,w,J,V,g.state.transmissionRenderTarget[a.id]),Se.needsLights&&Se.lightProbeGrid){const Ke=Se.lightProbeGrid;rn.probesSH.value=Ke.texture,rn.probesMin.value.copy(Ke.boundingBox.min),rn.probesMax.value.copy(Ke.boundingBox.max),rn.probesResolution.value.copy(Ke.resolution)}ct.upload(E,Ht(Se),rn,O)}if(w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(ct.upload(E,Ht(Se),rn,O),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&Ye.setValue(E,"center",b.center),Ye.setValue(E,"modelViewMatrix",b.modelViewMatrix),Ye.setValue(E,"normalMatrix",b.normalMatrix),Ye.setValue(E,"modelMatrix",b.matrixWorld),w.uniformsGroups!==void 0){const Ke=w.uniformsGroups;for(let Zn=0,Bn=Ke.length;Zn<Bn;Zn++){const Wt=Ke[Zn];ve.update(Wt,Tn),ve.bind(Wt,Tn)}}return Tn}function Ki(a,S){a.ambientLightColor.needsUpdate=S,a.lightProbe.needsUpdate=S,a.sunLights.needsUpdate=S,a.sunLightShadows.needsUpdate=S,a.directionalLights.needsUpdate=S,a.directionalLightShadows.needsUpdate=S,a.pointLights.needsUpdate=S,a.pointLightShadows.needsUpdate=S,a.spotLights.needsUpdate=S,a.spotLightShadows.needsUpdate=S,a.rectAreaLights.needsUpdate=S,a.hemisphereLights.needsUpdate=S}function qi(a){return a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&a.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(a,S,F){const w=v.get(a);w.__autoAllocateDepthBuffer=a.resolveDepthBuffer===!1,w.__autoAllocateDepthBuffer===!1&&(w.__useRenderToTexture=!1),v.get(a.texture).__webglTexture=S,v.get(a.depthTexture).__webglTexture=w.__autoAllocateDepthBuffer?void 0:F,w.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(a,S){const F=v.get(a);F.__webglFramebuffer=S,F.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(a,S=0,F=0){N=a,W=S,k=F;let w=null,b=!1,ie=!1;if(a){const le=v.get(a);if(le.__useDefaultFramebuffer!==void 0){c.bindFramebuffer(E.FRAMEBUFFER,le.__webglFramebuffer),j.copy(a.viewport),ne.copy(a.scissor),Be=a.scissorTest,c.viewport(j),c.scissor(ne),c.setScissorTest(Be),fe=-1;return}else if(le.__webglFramebuffer===void 0)O.setupRenderTarget(a);else if(le.__hasExternalTextures)O.rebindTextures(a,v.get(a.texture).__webglTexture,v.get(a.depthTexture).__webglTexture);else if(a.depthBuffer){const Te=a.depthTexture;if(le.__boundDepthTexture!==Te){if(Te!==null&&v.has(Te)&&(a.width!==Te.image.width||a.height!==Te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(a)}}const pe=a.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(ie=!0);const me=v.get(a).__webglFramebuffer;a.isWebGLCubeRenderTarget?(Array.isArray(me[S])?w=me[S][F]:w=me[S],b=!0):a.samples>0&&O.useMultisampledRTT(a)===!1?w=v.get(a).__webglMultisampledFramebuffer:Array.isArray(me)?w=me[F]:w=me,j.copy(a.viewport),ne.copy(a.scissor),Be=a.scissorTest}else j.copy(Ce).multiplyScalar(J).floor(),ne.copy(he).multiplyScalar(J).floor(),Be=ze;if(F!==0&&(w=H),c.bindFramebuffer(E.FRAMEBUFFER,w)&&c.drawBuffers(a,w),c.viewport(j),c.scissor(ne),c.setScissorTest(Be),b){const le=v.get(a.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+S,le.__webglTexture,F)}else if(ie){const le=S;for(let pe=0;pe<a.textures.length;pe++){const me=v.get(a.textures[pe]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+pe,me.__webglTexture,F,le)}}else if(a!==null&&F!==0){const le=v.get(a.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,le.__webglTexture,F)}fe=-1};function Vt(a){const S=v.get(a);return(S.__readFormat!==a.format||S.__readType!==a.type)&&(S.__readFormat=a.format,S.__readType=a.type,S.__formatReadable=Je.textureFormatReadable(a.format),S.__typeReadable=Je.textureTypeReadable(a.type)),S}this.readRenderTargetPixels=function(a,S,F,w,b,ie,le,pe=0){if(!(a&&a.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=v.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){c.bindFramebuffer(E.FRAMEBUFFER,me);try{const Te=a.textures[pe],De=Te.format,Ie=Te.type;a.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+pe);const Ee=Vt(Te);if(Ee.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=a.width-w&&F>=0&&F<=a.height-b&&E.readPixels(S,F,w,b,Z.convert(De),Z.convert(Ie),ie)}finally{const Te=N!==null?v.get(N).__webglFramebuffer:null;c.bindFramebuffer(E.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(a,S,F,w,b,ie,le,pe=0){if(!(a&&a.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=v.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me)if(S>=0&&S<=a.width-w&&F>=0&&F<=a.height-b){c.bindFramebuffer(E.FRAMEBUFFER,me);const Te=a.textures[pe],De=Te.format,Ie=Te.type;a.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+pe);const Ee=Vt(Te);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Xe),E.bufferData(E.PIXEL_PACK_BUFFER,ie.byteLength,E.STREAM_READ),E.readPixels(S,F,w,b,Z.convert(De),Z.convert(Ie),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);const tn=N!==null?v.get(N).__webglFramebuffer:null;c.bindFramebuffer(E.FRAMEBUFFER,tn);const Ze=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await wr(E,Ze,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Xe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ie),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(Xe),E.deleteSync(Ze),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(a,S=null,F=0){const w=Math.pow(2,-F),b=Math.floor(a.image.width*w),ie=Math.floor(a.image.height*w),le=S!==null?S.x:0,pe=S!==null?S.y:0;O.setTexture2D(a,0),E.copyTexSubImage2D(E.TEXTURE_2D,F,0,0,le,pe,b,ie),c.unbindTexture()},this.copyTextureToTexture=function(a,S,F=null,w=null,b=0,ie=0){let le,pe,me,Te,De,Ie,Ee,Xe,tn;const Ze=a.isCompressedTexture?a.mipmaps[ie]:a.image;if(F!==null)le=F.max.x-F.min.x,pe=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,Te=F.min.x,De=F.min.y,Ie=F.isBox3?F.min.z:0;else{const rn=Math.pow(2,-b);le=Math.floor(Ze.width*rn),pe=Math.floor(Ze.height*rn),a.isDataArrayTexture?me=Ze.depth:a.isData3DTexture?me=Math.floor(Ze.depth*rn):me=1,Te=0,De=0,Ie=0}w!==null?(Ee=w.x,Xe=w.y,tn=w.z):(Ee=0,Xe=0,tn=0);const Oe=Z.convert(S.format),un=Z.convert(S.type);let Se;S.isData3DTexture?(O.setTexture3D(S,0),Se=E.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(O.setTexture2DArray(S,0),Se=E.TEXTURE_2D_ARRAY):(O.setTexture2D(S,0),Se=E.TEXTURE_2D),c.activeTexture(E.TEXTURE0),c.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,S.flipY),c.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),c.pixelStorei(E.UNPACK_ALIGNMENT,S.unpackAlignment);const En=c.getParameter(E.UNPACK_ROW_LENGTH),Fe=c.getParameter(E.UNPACK_IMAGE_HEIGHT),Tn=c.getParameter(E.UNPACK_SKIP_PIXELS),bn=c.getParameter(E.UNPACK_SKIP_ROWS),Un=c.getParameter(E.UNPACK_SKIP_IMAGES);c.pixelStorei(E.UNPACK_ROW_LENGTH,Ze.width),c.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ze.height),c.pixelStorei(E.UNPACK_SKIP_PIXELS,Te),c.pixelStorei(E.UNPACK_SKIP_ROWS,De),c.pixelStorei(E.UNPACK_SKIP_IMAGES,Ie);const Fn=a.isDataArrayTexture||a.isData3DTexture,Ye=S.isDataArrayTexture||S.isData3DTexture;if(a.isDepthTexture){const rn=v.get(a),In=v.get(S),Ke=v.get(rn.__renderTarget),Zn=v.get(In.__renderTarget);c.bindFramebuffer(E.READ_FRAMEBUFFER,Ke.__webglFramebuffer),c.bindFramebuffer(E.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Bn=0;Bn<me;Bn++)Fn&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,v.get(a).__webglTexture,b,Ie+Bn),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,v.get(S).__webglTexture,ie,tn+Bn)),E.blitFramebuffer(Te,De,le,pe,Ee,Xe,le,pe,E.DEPTH_BUFFER_BIT,E.NEAREST);c.bindFramebuffer(E.READ_FRAMEBUFFER,null),c.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(b!==0||a.isRenderTargetTexture||v.has(a)){const rn=v.get(a),In=v.get(S);c.bindFramebuffer(E.READ_FRAMEBUFFER,re),c.bindFramebuffer(E.DRAW_FRAMEBUFFER,C);for(let Ke=0;Ke<me;Ke++)Fn?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,rn.__webglTexture,b,Ie+Ke):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,rn.__webglTexture,b),Ye?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,In.__webglTexture,ie,tn+Ke):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,In.__webglTexture,ie),b!==0?E.blitFramebuffer(Te,De,le,pe,Ee,Xe,le,pe,E.COLOR_BUFFER_BIT,E.NEAREST):Ye?E.copyTexSubImage3D(Se,ie,Ee,Xe,tn+Ke,Te,De,le,pe):E.copyTexSubImage2D(Se,ie,Ee,Xe,Te,De,le,pe);c.bindFramebuffer(E.READ_FRAMEBUFFER,null),c.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ye?a.isDataTexture||a.isData3DTexture?E.texSubImage3D(Se,ie,Ee,Xe,tn,le,pe,me,Oe,un,Ze.data):S.isCompressedArrayTexture?E.compressedTexSubImage3D(Se,ie,Ee,Xe,tn,le,pe,me,Oe,Ze.data):E.texSubImage3D(Se,ie,Ee,Xe,tn,le,pe,me,Oe,un,Ze):a.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ie,Ee,Xe,le,pe,Oe,un,Ze.data):a.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ie,Ee,Xe,Ze.width,Ze.height,Oe,Ze.data):E.texSubImage2D(E.TEXTURE_2D,ie,Ee,Xe,le,pe,Oe,un,Ze);c.pixelStorei(E.UNPACK_ROW_LENGTH,En),c.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Fe),c.pixelStorei(E.UNPACK_SKIP_PIXELS,Tn),c.pixelStorei(E.UNPACK_SKIP_ROWS,bn),c.pixelStorei(E.UNPACK_SKIP_IMAGES,Un),ie===0&&S.generateMipmaps&&E.generateMipmap(Se),c.unbindTexture()},this.initRenderTarget=function(a){v.get(a).__webglFramebuffer===void 0&&O.setupRenderTarget(a)},this.initTexture=function(a){a.isCubeTexture?O.setTextureCube(a,0):a.isData3DTexture?O.setTexture3D(a,0):a.isDataArrayTexture||a.isCompressedArrayTexture?O.setTexture2DArray(a,0):O.setTexture2D(a,0),c.unbindTexture()},this.resetState=function(){W=0,k=0,N=null,c.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=en._getDrawingBufferColorSpace(e),t.unpackColorSpace=en._getUnpackColorSpace()}},Hi={type:"change"},Dt={type:"start"},Gi={type:"end"},dt=new Dr,Vi=new ti,ns=Math.cos(70*Sr.DEG2RAD),dn=new xe,vn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ut=1e-6,ts=class extends Tr{constructor(e,t=null){super(e,t),this.state=ke.NONE,this.target=new xe,this.cursor=new xe,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new xe,this._lastQuaternion=new li,this._lastTargetPosition=new xe,this._quat=new li().setFromUnitVectors(e.up,new xe(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yt,this._sphericalDelta=new Yt,this._scale=1,this._panOffset=new xe,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new xe,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rs.bind(this),this._onPointerDown=is.bind(this),this._onPointerUp=as.bind(this),this._onContextMenu=us.bind(this),this._onMouseWheel=ls.bind(this),this._onKeyDown=cs.bind(this),this._onTouchStart=fs.bind(this),this._onTouchMove=ds.bind(this),this._onMouseDown=os.bind(this),this._onMouseMove=ss.bind(this),this._interceptControlDown=ps.bind(this),this._interceptControlUp=hs.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hi),this.update(),this.state=ke.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=s!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const d=dn.length();s=this._clampDistance(d*this._scale);const _=d-s;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),l=!!_}else if(this.object.isOrthographicCamera){const d=new xe(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=_!==this.object.zoom;const U=new xe(this._mouse.x,this._mouse.y,0);U.unproject(this.object),this.object.position.sub(U).add(d),this.object.updateMatrixWorld(),s=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(dt.origin.copy(this.object.position),dt.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dt.direction))<ns?this.object.lookAt(this.target):(Vi.setFromNormalAndCoplanarPoint(this.object.up,this.target),dt.intersectPlane(Vi,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Ut||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ut||this._lastTargetPosition.distanceToSquared(this.target)>Ut?(this.dispatchEvent(Hi),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;dn.copy(i).sub(this.target);let l=dn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/n.clientHeight,this.object.matrix),this._panUp(2*t*l/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,l=t-n.top,s=n.width,d=n.height;this._mouse.x=i/s*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,l=Math.sqrt(n*n+i*i);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),l=.5*(e.pageY+n.y);this._rotateEnd.set(i,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,l=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(s,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function is(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function rs(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function as(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gi),this.state=ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function os(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ke.DOLLY;break;case Hn.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ke.ROTATE}break;case Hn.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Dt)}function ss(e){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function ls(e){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(e.preventDefault(),this.dispatchEvent(Dt),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Gi))}function cs(e){this.enabled!==!1&&this._handleKeyDown(e)}function fs(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ke.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ke.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Dt)}function ds(e){switch(this._trackPointer(e),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ke.NONE}}function us(e){this.enabled!==!1&&e.preventDefault()}function ps(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hs(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ms=kt(ji(),1),_s=1.15,gs="srgb";function vs({cube:e,colors:t,clim:n,zScale:i,sliceBands:l,showRgb:s=!0,sharp:d=!0}){const _=(0,Mn.useRef)(null),U=(0,Mn.useRef)(null),R=(0,Mn.useRef)(null),G=(0,Mn.useRef)(null),B=(0,Mn.useRef)(i);B.current=i;const h=(0,Mn.useRef)(0),x=(0,Mn.useRef)(null);return(0,Mn.useEffect)(()=>{const P=_.current;if(!P)return;const y=new es({antialias:!0,alpha:!0});y.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.appendChild(y.domElement),y.domElement.style.width="100%",y.domElement.style.height="100%",y.domElement.style.display="block";const u=new hr,o=new jn(45,1,.1,5e3);o.up.set(0,0,1);const D=new ts(o,y.domElement);D.enableDamping=!0,D.dampingFactor=.1;const z=new sr;u.add(z),R.current=z;const m=e.nx,g=e.ny,A=new Map;for(const k of Ji){const N=new xn(new Wn(1,1),new St({side:2,transparent:!0}));N.name=k,z.add(N),A.set(k,N)}U.current=A;const L=new xn(new Wn(1,1),new St({side:2,transparent:!0}));L.name="rgb",L.visible=!1,z.add(L),G.current=L;const f=()=>{const k=Math.min(m,g)*B.current,N=Math.hypot(m,g,k)/2*_s,fe=o.fov*Math.PI/180,Y=2*Math.atan(Math.tan(fe/2)*o.aspect);return N/Math.sin(Math.min(fe,Y)/2)},p=()=>{const k=f(),N=new xe(.62,-.66,.42).normalize();o.position.copy(N.multiplyScalar(k)),D.target.set(0,0,0),o.lookAt(new xe(0,0,0)),I(k),h.current=k,D.update()},q=()=>{const k=f(),N=h.current;N>0&&Number.isFinite(k)&&o.position.sub(D.target).multiplyScalar(k/N).add(D.target),I(k),h.current=k,D.update()},I=k=>{D.minDistance=k*.1,D.maxDistance=k*6},H=()=>{const{clientWidth:k,clientHeight:N}=P;k===0||N===0||(y.setSize(k,N,!1),o.aspect=k/N,o.updateProjectionMatrix(),h.current>0&&q())};H(),p(),x.current=q;const re=new ResizeObserver(H);re.observe(P);let C=0;const W=()=>{C=requestAnimationFrame(W),D.update(),y.render(u,o)};return W(),()=>{cancelAnimationFrame(C),re.disconnect(),D.dispose();for(const k of[...A.values(),L]){k.geometry.dispose();const N=k.material;N.map?.dispose(),N.dispose()}U.current=null,G.current=null,R.current=null,x.current=null,h.current=0,y.dispose(),y.domElement.remove()}},[e.nx,e.ny,e.nz]),(0,Mn.useEffect)(()=>{const P=U.current,y=G.current;if(!P||!y)return;const u=e.nx,o=e.ny,D=Math.max(1,Math.min(u,o)*i),z=Math.min(e.nz,Math.max(1,Math.trunc(l))),m=Math.max(D*(z/e.nz),D/e.nz),g=-D/2+m/2;for(const[A,L]of P)Ss(L,A,u,o,m,g);y.geometry.dispose(),y.geometry=new Wn(u,o),y.position.set(0,0,g+m/2+Math.max(D*.001,1e-4))},[e.nx,e.ny,e.nz,i,l]),(0,Mn.useEffect)(()=>{x.current?.()},[e.nx,e.ny,e.nz,i]),(0,Mn.useEffect)(()=>{const P=U.current;if(!P)return;const y=Qi(e,l);for(const[u,o]of P)Wi(o,$i(y,u,t,n),d)},[e.values,t,n,d,l]),(0,Mn.useEffect)(()=>{const P=G.current;!P||!e.rgb||Wi(P,e.rgb,d)},[e.rgb,d]),(0,Mn.useEffect)(()=>{const P=G.current;P&&(P.visible=s&&e.rgb!==void 0)},[e.rgb,s]),(0,ms.jsx)("div",{ref:_,className:"h-full w-full","aria-hidden":"true"})}function Ss(e,t,n,i,l,s){e.rotation.set(0,0,0);const d={x:n/2,y:i/2,z:l/2};switch(t){case"top":qn(e,n,i),e.position.set(0,0,s+d.z);break;case"bottom":qn(e,n,i),e.position.set(0,0,s-d.z),e.rotation.x=Math.PI;break;case"north":qn(e,n,l),e.position.set(0,d.y,s),e.rotation.x=-Math.PI/2;break;case"south":qn(e,n,l),e.position.set(0,-d.y,s),e.rotation.x=Math.PI/2;break;case"east":qn(e,l,i),e.position.set(d.x,0,s),e.rotation.y=Math.PI/2;break;case"west":qn(e,l,i),e.position.set(-d.x,0,s),e.rotation.y=-Math.PI/2}}function qn(e,t,n){const i=e.geometry.userData;i.width===t&&i.height===n||(e.geometry.dispose(),e.geometry=new Wn(t,n),e.geometry.userData={width:t,height:n})}function Wi(e,t,n){const i=new si(t.pixels,t.width,t.height,tt,Gn);i.magFilter=n?zn:An,i.minFilter=An,i.generateMipmaps=!1,i.colorSpace=gs,i.needsUpdate=!0;const l=e.material;l.map?.dispose(),l.map=i,l.needsUpdate=!0}export{vs as NetcdfCubeView};
