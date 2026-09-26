import{r as k}from"./rolldown-runtime-CEgmsyvS.js";import{n as S,x as Z}from"./quaternion-DF1Daale.js";import{a as Dn,o as Gt}from"./webgl-device--JcyDI1s.js";import{_ as Ye,c as Ln,d as Ht,g as Pn,l as Vt,s as $e,u as On,w as wn}from"./expression-Cqv6w4A8.js";import{Ct as Gn,E as Hn,Et as Ae,St as Vn,Tt as Jn,gt as kn,ht as Jt,it as kt,lt as Kt,v as jt,vt as Xt,wt as Kn,xt as xe,yt as jn}from"./dist-CtUxfRRE.js";import{_ as V,b as M}from"./array-utils-flat-CVWyf9o7.js";import{c as zt,d as Xn,l as T,u as Wt}from"./get-attribute-from-layouts-LH3CriQG.js";import{a as zn,c as Wn,i as qe,n as Qt,o as be,r as Qn}from"./buffer-transform-CjLF12DR.js";import{t as z}from"./matrix3-etI8ppcB.js";async function Ze(e,t,r,n){return n._parse(e,t,r,n)}var Yn=e=>typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer;function $n(e){globalThis.loaders||={},globalThis.loaders.modules||={},Object.assign(globalThis.loaders.modules,e)}function qn(e){return globalThis.loaders?.modules?.[e]||null}function Zn(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.4.3"),globalThis._loadersgl_.version}var eo=Zn();function to(e,t){if(!e)throw new Error(t||"loaders.gl assertion failed.")}var X={self:typeof self<"u"&&self,window:typeof window<"u"&&window,global:typeof global<"u"&&global,document:typeof document<"u"&&document};X.self||X.window||X.global,X.window||X.self||X.global,X.global||X.self||X.window,X.document;var se=typeof process!="object"||String(process)!=="[object process]"||process.browser,et=typeof importScripts=="function";typeof window<"u"&&window.orientation;var Yt=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Yt&&parseFloat(Yt[1]);var tt={};function $t(e={}){const t=e.useLocalLibraries??e.core?.useLocalLibraries,r=e.CDN??e.core?.CDN,n=e.modules;return{...t!==void 0?{useLocalLibraries:t}:{},...r!==void 0?{CDN:r}:{},...n!==void 0?{modules:n}:{}}}async function W(e,t=null,r={},n=null){return t&&(e=ro(e,t,r,n)),tt[e]=tt[e]||no(e),await tt[e]}function ro(e,t,r={},n=null){if(r?.core)throw new Error("loadLibrary: options.core must be pre-normalized");if(!r.useLocalLibraries&&e.startsWith("http"))return e;n=n||e;const o=r.modules||{};return o[n]?o[n]:se?r.CDN?(to(r.CDN.startsWith("http")),`${r.CDN}/${t}@${eo}/dist/libs/${n}`):et?`../src/libs/${n}`:`modules/${t}/src/libs/${n}`:`modules/${t}/dist/libs/${n}`}async function no(e){if(e.endsWith("wasm"))return await io(e);if(!se){const{requireFromFile:t}=globalThis.loaders||{};try{const r=await t?.(e);return r||!e.includes("/dist/libs/")?r:await t?.(e.replace("/dist/libs/","/src/libs/"))}catch(r){if(e.includes("/dist/libs/"))try{return await t?.(e.replace("/dist/libs/","/src/libs/"))}catch{}return console.error(r),null}}return et?importScripts(e):oo(await so(e),e)}function oo(e,t){if(!se){const{requireFromString:n}=globalThis.loaders||{};return n?.(e,t)}if(et)return eval.call(globalThis,e),null;const r=document.createElement("script");r.id=t;try{r.appendChild(document.createTextNode(e))}catch{r.text=e}return document.body.appendChild(r),null}async function io(e){const{readFileAsArrayBuffer:t}=globalThis.loaders||{};if(se||!t||e.startsWith("http"))return await(await fetch(e)).arrayBuffer();try{return await t(e)}catch{if(e.includes("/dist/libs/"))return await t(e.replace("/dist/libs/","/src/libs/"));throw new Error(`Failed to load ArrayBuffer from ${e}`)}}async function so(e){const{readFileAsText:t}=globalThis.loaders||{};if(se||!t||e.startsWith("http"))return await(await fetch(e)).text();try{return await t(e)}catch{if(e.includes("/dist/libs/"))return await t(e.replace("/dist/libs/","/src/libs/"));throw new Error(`Failed to load text from ${e}`)}}function ao(e,t=5){return typeof e=="string"?e.slice(0,t):ArrayBuffer.isView(e)?qt(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?qt(e,0,t):""}function qt(e,t,r){if(e.byteLength<=t+r)return"";const n=new DataView(e);let o="";for(let i=0;i<r;i++)o+=String.fromCharCode(n.getUint8(t+i));return o}function co(e){try{return JSON.parse(e)}catch{throw new Error(`Failed to parse JSON from data starting with "${ao(e)}"`)}}function rt(e,t,r){const n=r!==void 0?new Uint8Array(e).subarray(t,t+r):new Uint8Array(e).subarray(t);return new Uint8Array(n).buffer}function Ce(e,t){return Ae(e>=0),Ae(t>0),e+(t-1)&~(t-1)}function lo(e,t,r){let n;if(e instanceof ArrayBuffer)n=new Uint8Array(e);else{const o=e.byteOffset,i=e.byteLength;n=new Uint8Array(e.buffer||e.arrayBuffer,o,i)}return t.set(n,r),r+Ce(n.byteLength,4)}function ye(e){if(e instanceof ArrayBuffer)return e;if(Yn(e))return nt(e);const{buffer:t,byteOffset:r,byteLength:n}=e;return t instanceof ArrayBuffer&&r===0&&n===t.byteLength?t:nt(t,r,n)}function nt(e,t=0,r=e.byteLength-t){const n=new Uint8Array(e,t,r),o=new Uint8Array(n.length);return o.set(n),o.buffer}var ot={};function uo(e){return ot[e]===void 0&&(ot[e]=Jn?mo(e):fo(e)),ot[e]}function fo(e){const t=globalThis.loaders?.imageFormatsNode||["image/png","image/jpeg","image/gif"];return!!globalThis.loaders?.parseImageNode&&t.includes(e)}function mo(e){switch(e){case"image/avif":case"image/webp":return po(e);default:return!0}}function po(e){try{return document.createElement("canvas").toDataURL(e).indexOf(`data:${e}`)===0}catch{return!1}}var ho={props:{},uniforms:{},bindings:{},name:"skin",bindingLayout:[{name:"skin",group:0},{name:"skinJointMatrices",group:0,visibility:1}],dependencies:[],source:`
struct skinUniforms {
  jointMatrix: array<mat4x4<f32>, 64>,
};

@group(0) @binding(auto) var<uniform> skin: skinUniforms;

#ifdef HAS_INSTANCED_SKIN
@group(0) @binding(auto) var<storage, read> skinJointMatrices: array<mat4x4<f32>>;

fn getInstancedSkinMatrix(
  weights: vec4f,
  joints: vec4u,
  instanceIndex: u32,
  jointsPerInstance: u32
) -> mat4x4<f32> {
  let firstJoint = instanceIndex * jointsPerInstance;
  return (weights.x * skinJointMatrices[firstJoint + joints.x])
       + (weights.y * skinJointMatrices[firstJoint + joints.y])
       + (weights.z * skinJointMatrices[firstJoint + joints.z])
       + (weights.w * skinJointMatrices[firstJoint + joints.w]);
}
#endif

fn getSkinMatrix(weights: vec4f, joints: vec4u) -> mat4x4<f32> {
  return (weights.x * skin.jointMatrix[joints.x])
       + (weights.y * skin.jointMatrix[joints.y])
       + (weights.z * skin.jointMatrix[joints.z])
       + (weights.w * skin.jointMatrix[joints.w]);
}
`,vs:`
layout(std140) uniform skinUniforms {
  mat4 jointMatrix[SKIN_MAX_JOINTS];
} skin;

#ifdef HAS_INSTANCED_SKIN
uniform highp sampler2D skinJointMatrices;

mat4 getInstancedJointMatrix(uint jointIndex, uint instanceIndex) {
  int firstColumn = int(jointIndex * 4u);
  int row = int(instanceIndex);
  return mat4(
    texelFetch(skinJointMatrices, ivec2(firstColumn, row), 0),
    texelFetch(skinJointMatrices, ivec2(firstColumn + 1, row), 0),
    texelFetch(skinJointMatrices, ivec2(firstColumn + 2, row), 0),
    texelFetch(skinJointMatrices, ivec2(firstColumn + 3, row), 0)
  );
}

mat4 getInstancedSkinMatrix(
  vec4 weights,
  uvec4 joints,
  uint instanceIndex,
  uint jointsPerInstance
) {
  return (weights.x * getInstancedJointMatrix(joints.x, instanceIndex))
       + (weights.y * getInstancedJointMatrix(joints.y, instanceIndex))
       + (weights.z * getInstancedJointMatrix(joints.z, instanceIndex))
       + (weights.w * getInstancedJointMatrix(joints.w, instanceIndex));
}
#endif

mat4 getSkinMatrix(vec4 weights, uvec4 joints) {
  return (weights.x * skin.jointMatrix[joints.x])
       + (weights.y * skin.jointMatrix[joints.y])
       + (weights.z * skin.jointMatrix[joints.z])
       + (weights.w * skin.jointMatrix[joints.w]);
}

`,fs:"",defines:{SKIN_MAX_JOINTS:64},getUniforms:(e={},t)=>{const{jointMatrices:r,skinJointMatrices:n,scenegraphsFromGLTF:o,skinIndex:i=0,meshWorldMatrix:s}=e,a=n?{skinJointMatrices:n}:{};if(r)return{jointMatrix:go(r),...a};const c=o?.gltf?.skins?.[i];if(!c)return{jointMatrix:[],...a};const{inverseBindMatrices:l,joints:u,skeleton:f}=c,m=o.gltfNodeIndexToNodeMap,h=new Map,p=f===void 0?void 0:m?.get(f),d=p?[p]:o.scenes||[];for(const A of d)A.preorderTraversal((I,{worldMatrix:y})=>{h.set(I.id,y)});const g=s?new S(s).invert():null,C=new Float32Array(1024),b=l?.value;for(let A=0;A<Math.min(u.length,64);A++){const I=m?.get(u[A]);if(!I)continue;const y=h.get(I.id)||I.matrix,w=g?new S(g).multiplyRight(y):new S(y);b&&b.length>=(A+1)*16&&w.multiplyRight(new S(Array.from(b.slice(A*16,(A+1)*16)))),C.set(w,A*16)}return{jointMatrix:C,...a}},uniformTypes:{jointMatrix:["mat4x4<f32>",64]}};function go(e){const t=new Float32Array(1024);return t.set(e instanceof Float32Array?e.subarray(0,t.length):e.slice(0,t.length)),t}var Ao={name:"gpuAnimation",props:{},uniforms:{},bindings:{},source:`
#ifdef HAS_GPU_CROWD_ANIMATION
@group(0) @binding(auto) var<storage, read> gpuAnimationFrames: array<vec4f>;

fn readGPUAnimationFrame(frame: u32, offset: u32, frameStride: u32) -> vec4f {
  return gpuAnimationFrames[frame * frameStride + offset];
}

fn sampleGPUAnimationFrame(
  frames: vec4f,
  blend: vec4f,
  offset: u32,
  frameStride: u32
) -> vec4f {
  let first = mix(
    readGPUAnimationFrame(u32(frames.x), offset, frameStride),
    readGPUAnimationFrame(u32(frames.y), offset, frameStride),
    frames.z
  );
  if (blend.w <= 0.0) {
    return first;
  }
  let second = mix(
    readGPUAnimationFrame(u32(blend.x), offset, frameStride),
    readGPUAnimationFrame(u32(blend.y), offset, frameStride),
    blend.z
  );
  return mix(first, second, blend.w);
}

fn sampleGPUAnimationMatrix(
  frames: vec4f,
  blend: vec4f,
  firstColumn: u32,
  frameStride: u32
) -> mat4x4f {
  return mat4x4f(
    sampleGPUAnimationFrame(frames, blend, firstColumn, frameStride),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 1u, frameStride),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 2u, frameStride),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 3u, frameStride)
  );
}

fn getGPUAnimatedSkinMatrix(
  weights: vec4f,
  joints: vec4u,
  frames: vec4f,
  blend: vec4f,
  frameStride: u32
) -> mat4x4f {
  return weights.x * sampleGPUAnimationMatrix(frames, blend, 4u + joints.x * 4u, frameStride)
       + weights.y * sampleGPUAnimationMatrix(frames, blend, 4u + joints.y * 4u, frameStride)
       + weights.z * sampleGPUAnimationMatrix(frames, blend, 4u + joints.z * 4u, frameStride)
       + weights.w * sampleGPUAnimationMatrix(frames, blend, 4u + joints.w * 4u, frameStride);
}
#endif

#ifdef HAS_INSTANCED_MORPH
@group(0) @binding(auto) var<storage, read> gpuMorphTargets: array<vec4f>;

#ifndef HAS_GPU_CROWD_ANIMATION
@group(0) @binding(auto) var<storage, read> gpuMorphWeights: array<vec4f>;
#endif

fn getGPUCrowdMorphWeight(
  instanceIndex: u32,
  targetIndex: u32,
  targetCount: u32,
  jointsPerInstance: u32,
  frames: vec4f,
  blend: vec4f,
  frameStride: u32
) -> f32 {
#ifdef HAS_GPU_CROWD_ANIMATION
  let offset = 4u + jointsPerInstance * 4u + targetIndex;
  return sampleGPUAnimationFrame(frames, blend, offset, frameStride).x;
#else
  let packedCount = (targetCount + 3u) / 4u;
  let packedWeights = gpuMorphWeights[instanceIndex * packedCount + targetIndex / 4u];
  return packedWeights[targetIndex % 4u];
#endif
}

fn getGPUCrowdMorphDelta(
  instanceIndex: u32,
  vertexIndex: u32,
  attributeIndex: u32,
  vertexCount: u32,
  targetCount: u32,
  jointsPerInstance: u32,
  frames: vec4f,
  blend: vec4f,
  frameStride: u32
) -> vec3f {
  var result = vec3f(0.0);
  for (var targetIndex = 0u; targetIndex < targetCount; targetIndex++) {
    let weight = getGPUCrowdMorphWeight(
      instanceIndex,
      targetIndex,
      targetCount,
      jointsPerInstance,
      frames,
      blend,
      frameStride
    );
    let offset = (targetIndex * 3u + attributeIndex) * vertexCount + vertexIndex;
    result += gpuMorphTargets[offset].xyz * weight;
  }
  return result;
}
#endif
`,vs:`
#ifdef HAS_GPU_CROWD_ANIMATION
uniform highp sampler2D gpuAnimationFrames;

vec4 sampleGPUAnimationFrame(vec4 frames, vec4 blend, int offset) {
  vec4 first = mix(
    texelFetch(gpuAnimationFrames, ivec2(offset, int(frames.x)), 0),
    texelFetch(gpuAnimationFrames, ivec2(offset, int(frames.y)), 0),
    frames.z
  );
  if (blend.w <= 0.0) {
    return first;
  }
  vec4 second = mix(
    texelFetch(gpuAnimationFrames, ivec2(offset, int(blend.x)), 0),
    texelFetch(gpuAnimationFrames, ivec2(offset, int(blend.y)), 0),
    blend.z
  );
  return mix(first, second, blend.w);
}

mat4 sampleGPUAnimationMatrix(vec4 frames, vec4 blend, int firstColumn) {
  return mat4(
    sampleGPUAnimationFrame(frames, blend, firstColumn),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 1),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 2),
    sampleGPUAnimationFrame(frames, blend, firstColumn + 3)
  );
}

mat4 getGPUAnimatedSkinMatrix(vec4 weights, uvec4 joints, vec4 frames, vec4 blend) {
  return weights.x * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.x) * 4)
       + weights.y * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.y) * 4)
       + weights.z * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.z) * 4)
       + weights.w * sampleGPUAnimationMatrix(frames, blend, 4 + int(joints.w) * 4);
}
#endif

#ifdef HAS_INSTANCED_MORPH
uniform highp sampler2D gpuMorphTargets;

#ifndef HAS_GPU_CROWD_ANIMATION
uniform highp sampler2D gpuMorphWeights;
#endif

float getGPUCrowdMorphWeight(
  uint instanceIndex,
  uint targetIndex,
  uint jointsPerInstance,
  vec4 frames,
  vec4 blend
) {
#ifdef HAS_GPU_CROWD_ANIMATION
  int offset = 4 + int(jointsPerInstance) * 4 + int(targetIndex);
  return sampleGPUAnimationFrame(frames, blend, offset).x;
#else
  vec4 packedWeights = texelFetch(
    gpuMorphWeights,
    ivec2(int(targetIndex / 4u), int(instanceIndex)),
    0
  );
  return packedWeights[int(targetIndex % 4u)];
#endif
}

vec3 getGPUCrowdMorphDelta(
  uint instanceIndex,
  uint vertexIndex,
  uint attributeIndex,
  uint targetCount,
  uint jointsPerInstance,
  vec4 frames,
  vec4 blend
) {
  vec3 result = vec3(0.0);
  for (uint targetIndex = 0u; targetIndex < targetCount; targetIndex++) {
    float weight = getGPUCrowdMorphWeight(
      instanceIndex,
      targetIndex,
      jointsPerInstance,
      frames,
      blend
    );
    result += texelFetch(
      gpuMorphTargets,
      ivec2(int(vertexIndex), int(targetIndex * 3u + attributeIndex)),
      0
    ).xyz * weight;
  }
  return result;
}
#endif
`,fs:"",bindingLayout:[{name:"gpuAnimationFrames",group:0,visibility:1},{name:"gpuMorphTargets",group:0,visibility:1},{name:"gpuMorphWeights",group:0,visibility:1}],getUniforms(e={}){return e}},bo=`#ifdef USE_IBL
@group(2) @binding(auto) var pbr_diffuseEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_diffuseEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_specularEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_specularEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_brdfLUT: texture_2d<f32>;
@group(2) @binding(auto) var pbr_brdfLUTSampler: sampler;
#endif
`,Zt=`#ifdef USE_IBL
uniform samplerCube pbr_diffuseEnvSampler;
uniform samplerCube pbr_specularEnvSampler;
uniform sampler2D pbr_brdfLUT;
#endif
`,Co={name:"ibl",firstBindingSlot:32,bindingLayout:[{name:"pbr_diffuseEnvSampler",group:2},{name:"pbr_specularEnvSampler",group:2},{name:"pbr_brdfLUT",group:2}],source:bo,vs:Zt,fs:Zt},vo=`out vec3 pbr_vPosition;
out vec2 pbr_vUV0;
out vec2 pbr_vUV1;

#ifdef HAS_NORMALS
# ifdef HAS_TANGENTS
out mat3 pbr_vTBN;
# else
out vec3 pbr_vNormal;
# endif
#endif

void pbr_setPositionNormalTangentUV(
  vec4 position,
  vec4 normal,
  vec4 tangent,
  vec2 uv0,
  vec2 uv1
)
{
  vec4 pos = pbrProjection.modelMatrix * position;
  pbr_vPosition = vec3(pos.xyz) / pos.w;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
  vec3 normalW = normalize(vec3(pbrProjection.normalMatrix * vec4(normal.xyz, 0.0)));
  vec3 tangentW = normalize(vec3(pbrProjection.modelMatrix * vec4(tangent.xyz, 0.0)));
  vec3 bitangentW = cross(normalW, tangentW) * tangent.w;
  pbr_vTBN = mat3(tangentW, bitangentW, normalW);
#else // HAS_TANGENTS != 1
  pbr_vNormal = normalize(vec3(pbrProjection.modelMatrix * vec4(normal.xyz, 0.0)));
#endif
#endif

#ifdef HAS_UV
  pbr_vUV0 = uv0;
#else
  pbr_vUV0 = vec2(0.,0.);
#endif

  pbr_vUV1 = uv1;
}
`,Bo=`precision highp float;

layout(std140) uniform pbrMaterialUniforms {
  // Material is unlit
  bool unlit;

  // Base color map
  bool baseColorMapEnabled;
  vec4 baseColorFactor;

  bool normalMapEnabled;  
  float normalScale; // #ifdef HAS_NORMALMAP

  bool emissiveMapEnabled;
  vec3 emissiveFactor; // #ifdef HAS_EMISSIVEMAP

  vec2 metallicRoughnessValues;
  bool metallicRoughnessMapEnabled;

  bool occlusionMapEnabled;
  float occlusionStrength; // #ifdef HAS_OCCLUSIONMAP
  
  bool alphaCutoffEnabled;
  float alphaCutoff; // #ifdef ALPHA_CUTOFF

  vec3 specularColorFactor;
  float specularIntensityFactor;
  bool specularColorMapEnabled;
  bool specularIntensityMapEnabled;

  float ior;

  float transmissionFactor;
  bool transmissionMapEnabled;

  float thicknessFactor;
  float attenuationDistance;
  vec3 attenuationColor;

  float clearcoatFactor;
  float clearcoatRoughnessFactor;
  bool clearcoatMapEnabled;
  bool clearcoatRoughnessMapEnabled;

  vec3 sheenColorFactor;
  float sheenRoughnessFactor;
  bool sheenColorMapEnabled;
  bool sheenRoughnessMapEnabled;

  float iridescenceFactor;
  float iridescenceIor;
  vec2 iridescenceThicknessRange;
  bool iridescenceMapEnabled;

  float anisotropyStrength;
  float anisotropyRotation;
  vec2 anisotropyDirection;
  bool anisotropyMapEnabled;

  float emissiveStrength;
  float dispersion;
  
  // IBL
  bool IBLenabled;
  vec2 scaleIBLAmbient; // #ifdef USE_IBL
  
  // debugging flags used for shader output of intermediate PBR variables
  // #ifdef PBR_DEBUG
  vec4 scaleDiffBaseMR;
  vec4 scaleFGDSpec;
  // #endif

  int baseColorUVSet;
  mat3 baseColorUVTransform;
  int metallicRoughnessUVSet;
  mat3 metallicRoughnessUVTransform;
  int normalUVSet;
  mat3 normalUVTransform;
  int occlusionUVSet;
  mat3 occlusionUVTransform;
  int emissiveUVSet;
  mat3 emissiveUVTransform;
  int specularColorUVSet;
  mat3 specularColorUVTransform;
  int specularIntensityUVSet;
  mat3 specularIntensityUVTransform;
  int transmissionUVSet;
  mat3 transmissionUVTransform;
  int thicknessUVSet;
  mat3 thicknessUVTransform;
  int clearcoatUVSet;
  mat3 clearcoatUVTransform;
  int clearcoatRoughnessUVSet;
  mat3 clearcoatRoughnessUVTransform;
  int clearcoatNormalUVSet;
  mat3 clearcoatNormalUVTransform;
  int sheenColorUVSet;
  mat3 sheenColorUVTransform;
  int sheenRoughnessUVSet;
  mat3 sheenRoughnessUVTransform;
  int iridescenceUVSet;
  mat3 iridescenceUVTransform;
  int iridescenceThicknessUVSet;
  mat3 iridescenceThicknessUVTransform;
  int anisotropyUVSet;
  mat3 anisotropyUVTransform;

  float bumpFactor;
  bool bumpMapEnabled;
  float diffuseTransmissionFactor;
  bool diffuseTransmissionMapEnabled;
  vec3 diffuseTransmissionColorFactor;
  bool diffuseTransmissionColorMapEnabled;
  vec3 multiscatterColorFactor;
  bool multiscatterColorMapEnabled;
  float scatterAnisotropy;

  int bumpUVSet;
  mat3 bumpUVTransform;
  int diffuseTransmissionUVSet;
  mat3 diffuseTransmissionUVTransform;
  int diffuseTransmissionColorUVSet;
  mat3 diffuseTransmissionColorUVTransform;
  int multiscatterColorUVSet;
  mat3 multiscatterColorUVTransform;
} pbrMaterial;

// Samplers
#ifdef HAS_BASECOLORMAP
uniform sampler2D pbr_baseColorSampler;
#endif
#ifdef HAS_NORMALMAP
uniform sampler2D pbr_normalSampler;
#endif
#ifdef HAS_EMISSIVEMAP
uniform sampler2D pbr_emissiveSampler;
#endif
#ifdef HAS_METALROUGHNESSMAP
uniform sampler2D pbr_metallicRoughnessSampler;
#endif
#ifdef HAS_OCCLUSIONMAP
uniform sampler2D pbr_occlusionSampler;
#endif
#ifdef HAS_SPECULARCOLORMAP
uniform sampler2D pbr_specularColorSampler;
#endif
#ifdef HAS_SPECULARINTENSITYMAP
uniform sampler2D pbr_specularIntensitySampler;
#endif
#ifdef HAS_TRANSMISSIONMAP
uniform sampler2D pbr_transmissionSampler;
#endif
#ifdef HAS_THICKNESSMAP
uniform sampler2D pbr_thicknessSampler;
#endif
#ifdef HAS_CLEARCOATMAP
uniform sampler2D pbr_clearcoatSampler;
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
uniform sampler2D pbr_clearcoatRoughnessSampler;
#endif
#ifdef HAS_CLEARCOATNORMALMAP
uniform sampler2D pbr_clearcoatNormalSampler;
#endif
#ifdef HAS_SHEENCOLORMAP
uniform sampler2D pbr_sheenColorSampler;
#endif
#ifdef HAS_SHEENROUGHNESSMAP
uniform sampler2D pbr_sheenRoughnessSampler;
#endif
#ifdef HAS_IRIDESCENCEMAP
uniform sampler2D pbr_iridescenceSampler;
#endif
#ifdef HAS_IRIDESCENCETHICKNESSMAP
uniform sampler2D pbr_iridescenceThicknessSampler;
#endif
#ifdef HAS_ANISOTROPYMAP
uniform sampler2D pbr_anisotropySampler;
#endif
#ifdef HAS_BUMPMAP
uniform sampler2D pbr_bumpSampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONMAP
uniform sampler2D pbr_diffuseTransmissionSampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
uniform sampler2D pbr_diffuseTransmissionColorSampler;
#endif
#ifdef HAS_MULTISCATTERCOLORMAP
uniform sampler2D pbr_multiscatterColorSampler;
#endif
// Inputs from vertex shader

in vec3 pbr_vPosition;
in vec2 pbr_vUV0;
in vec2 pbr_vUV1;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
in mat3 pbr_vTBN;
#else
in vec3 pbr_vNormal;
#endif
#endif

// Encapsulate the various inputs used by the various functions in the shading equation
// We store values in this struct to simplify the integration of alternative implementations
// of the shading terms, outlined in the Readme.MD Appendix.
struct PBRInfo {
  float NdotL;                  // cos angle between normal and light direction
  float NdotV;                  // cos angle between normal and view direction
  float NdotH;                  // cos angle between normal and half vector
  float LdotH;                  // cos angle between light direction and half vector
  float VdotH;                  // cos angle between view direction and half vector
  float perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)
  float metalness;              // metallic value at the surface
  vec3 reflectance0;            // full reflectance color (normal incidence angle)
  vec3 reflectance90;           // reflectance color at grazing angle
  float alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])
  vec3 diffuseColor;            // color contribution from diffuse lighting
  vec3 specularColor;           // color contribution from specular lighting
  vec3 n;                       // normal at surface point
  vec3 v;                       // vector from surface point to camera
  vec3 l;                       // direction from the surface toward the current light
  vec3 h;                       // half vector between the current light and camera
};

const float M_PI = 3.141592653589793;
const float c_MinRoughness = 0.04;

// Widen sub-pixel specular lobes using the screen-space normal footprint.
// This is geometric specular antialiasing: the normal variance is converted
// into an additional squared perceptual roughness before evaluating BRDFs.
float widenSpecularRoughness(float perceptualRoughness, vec3 normal)
{
  vec3 normalDerivativeX = dFdx(normal);
  vec3 normalDerivativeY = dFdy(normal);
  float normalVariance =
    dot(normalDerivativeX, normalDerivativeX) +
    dot(normalDerivativeY, normalDerivativeY);
  float kernelRoughnessSquared = min(2.0 * normalVariance, 1.0);
  return clamp(
    sqrt(perceptualRoughness * perceptualRoughness + kernelRoughnessSquared),
    c_MinRoughness,
    1.0
  );
}

vec3 calculateFinalColor(PBRInfo pbrInfo, vec3 lightColor);

vec4 SRGBtoLINEAR(vec4 srgbIn)
{
#ifdef MANUAL_SRGB
#ifdef SRGB_FAST_APPROXIMATION
  vec3 linOut = pow(srgbIn.xyz,vec3(2.2));
#else // SRGB_FAST_APPROXIMATION
  vec3 bLess = step(vec3(0.04045),srgbIn.xyz);
  vec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );
#endif //SRGB_FAST_APPROXIMATION
  return vec4(linOut,srgbIn.w);;
#else //MANUAL_SRGB
  return srgbIn;
#endif //MANUAL_SRGB
}

vec2 getMaterialUV(int uvSet, mat3 uvTransform)
{
  vec2 baseUV = uvSet == 1 ? pbr_vUV1 : pbr_vUV0;
  return (uvTransform * vec3(baseUV, 1.0)).xy;
}

// Build the tangent basis from interpolated attributes or screen-space derivatives.
mat3 getTBN(vec2 uv)
{
#ifndef HAS_TANGENTS
  vec3 pos_dx = dFdx(pbr_vPosition);
  vec3 pos_dy = dFdy(pbr_vPosition);
  vec3 tex_dx = dFdx(vec3(uv, 0.0));
  vec3 tex_dy = dFdy(vec3(uv, 0.0));
  vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

#ifdef HAS_NORMALS
  vec3 ng = normalize(pbr_vNormal);
#else
  vec3 ng = cross(pos_dx, pos_dy);
#endif

  t = normalize(t - ng * dot(ng, t));
  vec3 b = normalize(cross(ng, t));
  mat3 tbn = mat3(t, b, ng);
#else // HAS_TANGENTS
  mat3 tbn = pbr_vTBN;
#endif

  return tbn;
}

// Find the normal for this fragment, pulling either from a predefined normal map
// or from the interpolated mesh normal and tangent attributes.
vec3 getMappedNormal(sampler2D normalSampler, mat3 tbn, float normalScale, vec2 uv)
{
  vec3 n = texture(normalSampler, uv).rgb;
  return normalize(tbn * ((2.0 * n - 1.0) * vec3(normalScale, normalScale, 1.0)));
}

vec3 getNormal(mat3 tbn, vec2 uv)
{
#ifdef HAS_NORMALMAP
  vec3 n = getMappedNormal(pbr_normalSampler, tbn, pbrMaterial.normalScale, uv);
#else
  // The tbn matrix is linearly interpolated, so we need to re-normalize
  vec3 n = normalize(tbn[2].xyz);
#endif

#ifdef HAS_BUMPMAP
  vec2 bumpUV = getMaterialUV(pbrMaterial.bumpUVSet, pbrMaterial.bumpUVTransform);
  vec2 bumpTexelSize = 1.0 / vec2(textureSize(pbr_bumpSampler, 0));
  float bumpHeight = texture(pbr_bumpSampler, bumpUV).r;
  vec2 bumpGradient = vec2(
    texture(pbr_bumpSampler, bumpUV + vec2(bumpTexelSize.x, 0.0)).r - bumpHeight,
    texture(pbr_bumpSampler, bumpUV + vec2(0.0, bumpTexelSize.y)).r - bumpHeight
  );
  n = normalize(n - pbrMaterial.bumpFactor *
    (tbn[0] * bumpGradient.x + tbn[1] * bumpGradient.y));
#endif

  return n;
}

vec3 getClearcoatNormal(mat3 tbn, vec3 baseNormal, vec2 uv)
{
#ifdef HAS_CLEARCOATNORMALMAP
  return getMappedNormal(pbr_clearcoatNormalSampler, tbn, 1.0, uv);
#else
  return baseNormal;
#endif
}

// Calculation of the lighting contribution from an optional Image Based Light source.
// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].
// See our README.md on Environment Maps [3] for additional discussion.
#ifdef USE_IBL
vec3 getIBLContribution(PBRInfo pbrInfo, vec3 n, vec3 reflection)
{
#ifdef USE_SCENE_ENVIRONMENT
  float maximumMipLevel = max(pbrScene.environmentMipCount - 1.0, 0.0);
  float rotationSine = sin(pbrScene.environmentRotation);
  float rotationCosine = cos(pbrScene.environmentRotation);
  mat2 environmentRotation = mat2(rotationCosine, rotationSine, -rotationSine, rotationCosine);
  vec3 environmentNormal = vec3(environmentRotation * n.xz, n.y).xzy;
  vec3 environmentReflection = vec3(environmentRotation * reflection.xz, reflection.y).xzy;
#else
  float maximumMipLevel = 9.0;
  vec3 environmentNormal = n;
  vec3 environmentReflection = reflection;
#endif
  float lod = pbrInfo.perceptualRoughness * maximumMipLevel;
  // retrieve a scale and bias to F0. See [1], Figure 3
  vec4 brdfSample = texture(pbr_brdfLUT,
    vec2(pbrInfo.NdotV, 1.0 - pbrInfo.perceptualRoughness));
  vec4 diffuseSample = texture(pbr_diffuseEnvSampler, environmentNormal);

#ifdef USE_TEX_LOD
  vec4 specularSample = textureLod(pbr_specularEnvSampler, environmentReflection, lod);
#else
  vec4 specularSample = texture(pbr_specularEnvSampler, environmentReflection);
#endif

#ifdef USE_SCENE_ENVIRONMENT
  vec3 brdf = brdfSample.rgb;
  vec3 diffuseLight = diffuseSample.rgb;
  vec3 specularLight = specularSample.rgb;
#else
  vec3 brdf = SRGBtoLINEAR(brdfSample).rgb;
  vec3 diffuseLight = SRGBtoLINEAR(diffuseSample).rgb;
  vec3 specularLight = SRGBtoLINEAR(specularSample).rgb;
#endif

  vec3 diffuse = diffuseLight * pbrInfo.diffuseColor;
  vec3 specular = specularLight * (pbrInfo.specularColor * brdf.x + brdf.y);

  // For presentation, this allows us to disable IBL terms
  diffuse *= pbrMaterial.scaleIBLAmbient.x;
  specular *= pbrMaterial.scaleIBLAmbient.y;

#ifdef USE_SCENE_ENVIRONMENT
  return (diffuse + specular) * max(pbrScene.environmentIntensity, 0.0);
#else
  return diffuse + specular;
#endif
}
#endif

// Basic Lambertian diffuse
// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
// See also [1], Equation 1
vec3 diffuse(PBRInfo pbrInfo)
{
  return pbrInfo.diffuseColor / M_PI;
}

// The following equation models the Fresnel reflectance term of the spec equation (aka F())
// Implementation of fresnel from [4], Equation 15
vec3 specularReflection(PBRInfo pbrInfo)
{
  return pbrInfo.reflectance0 +
    (pbrInfo.reflectance90 - pbrInfo.reflectance0) *
    pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
}

// This calculates the specular geometric attenuation (aka G()),
// where rougher material will reflect less light back to the viewer.
// This implementation is based on [1] Equation 4, and we adopt their modifications to
// alphaRoughness as input as originally proposed in [2].
float geometricOcclusion(PBRInfo pbrInfo)
{
  float NdotL = pbrInfo.NdotL;
  float NdotV = pbrInfo.NdotV;
  float r = pbrInfo.alphaRoughness;

  float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
  float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
  return attenuationL * attenuationV;
}

// The following equation(s) model the distribution of microfacet normals across
// the area being drawn (aka D())
// Implementation from "Average Irregularity Representation of a Roughened Surface
// for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
// Follows the distribution function recommended in the SIGGRAPH 2013 course notes
// from EPIC Games [1], Equation 3.
float microfacetDistribution(PBRInfo pbrInfo)
{
  float roughnessSq = pbrInfo.alphaRoughness * pbrInfo.alphaRoughness;
  float f = (pbrInfo.NdotH * roughnessSq - pbrInfo.NdotH) * pbrInfo.NdotH + 1.0;
  return roughnessSq / (M_PI * f * f);
}

float maxComponent(vec3 value)
{
  return max(max(value.r, value.g), value.b);
}

float getDielectricF0(float ior)
{
  float clampedIor = max(ior, 1.0);
  float ratio = (clampedIor - 1.0) / (clampedIor + 1.0);
  return ratio * ratio;
}

vec2 normalizeDirection(vec2 direction)
{
  float directionLength = length(direction);
  return directionLength > 0.0001 ? direction / directionLength : vec2(1.0, 0.0);
}

vec2 rotateDirection(vec2 direction, float rotation)
{
  float s = sin(rotation);
  float c = cos(rotation);
  return vec2(direction.x * c - direction.y * s, direction.x * s + direction.y * c);
}

vec3 encodeLinearSRGB(vec3 linearColor)
{
  vec3 positiveColor = max(linearColor, vec3(0.0));
  return mix(
    positiveColor * 12.92,
    1.055 * pow(positiveColor, vec3(1.0 / 2.4)) - 0.055,
    greaterThan(positiveColor, vec3(0.0031308))
  );
}

vec3 toneMapKhronosPBRNeutral(vec3 color)
{
  const float startCompression = 0.76;
  float darkestChannel = min(color.r, min(color.g, color.b));
  float offset = darkestChannel < 0.08
    ? darkestChannel - 6.25 * darkestChannel * darkestChannel
    : 0.04;
  color -= vec3(offset);

  float peak = maxComponent(color);
  if (peak < startCompression) {
    return color;
  }

  float compressionRange = 1.0 - startCompression;
  float compressedPeak = 1.0 - compressionRange * compressionRange /
    (peak + compressionRange - startCompression);
  color *= compressedPeak / max(peak, 0.0001);
  float desaturation = 1.0 - 1.0 / (0.15 * (peak - compressedPeak) + 1.0);
  return mix(color, vec3(compressedPeak), desaturation);
}

vec3 applySceneColorManagement(vec3 sceneColor)
{
#ifdef USE_SCENE_COLOR_MANAGEMENT
  vec3 color = max(sceneColor, vec3(0.0)) * max(pbrScene.exposure, 0.0);
  if (pbrScene.toneMapMode == 1) {
    color /= vec3(1.0) + color;
  } else if (pbrScene.toneMapMode == 2) {
    color = toneMapKhronosPBRNeutral(color);
  } else if (pbrScene.toneMapMode == 3) {
    color = clamp(
      (color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14),
      vec3(0.0),
      vec3(1.0)
    );
  }
  return pbrScene.outputEncoding == 0 ? color : encodeLinearSRGB(color);
#else
  return pow(max(sceneColor, vec3(0.0)), vec3(1.0 / 2.2));
#endif
}

float dielectricSchlick(float reflectance, float cosine)
{
  return reflectance + (1.0 - reflectance) * pow(clamp(1.0 - cosine, 0.0, 1.0), 5.0);
}

vec3 evaluateIridescenceSensitivity(float opticalPathDifference, vec3 phaseShift)
{
  float phase = 2.0 * M_PI * opticalPathDifference * 1.0e-9;
  vec3 sensitivity = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);
  vec3 position = vec3(1.6810e6, 1.7953e6, 2.2084e6);
  vec3 variance = vec3(4.3278e9, 9.3046e9, 6.6121e9);
  vec3 xyz = sensitivity * sqrt(2.0 * M_PI * variance) *
    cos(position * phase + phaseShift) * exp(-phase * phase * variance);
  xyz.x += 9.7470e-14 * sqrt(2.0 * M_PI * 4.5282e9) *
    cos(2.2399e6 * phase + phaseShift.x) * exp(-4.5282e9 * phase * phase);
  xyz /= 1.0685e-7;
  return mat3(
    3.2404542, -0.9692660, 0.0556434,
    -1.5371385, 1.8760108, -0.2040259,
    -0.4985314, 0.0415560, 1.0572252
  ) * xyz;
}

vec3 getIridescenceTint(float iridescence, float thickness, float NdotV, vec3 baseReflectance)
{
  if (iridescence <= 0.0 || thickness <= 0.0) {
    return baseReflectance;
  }

  float filmIor = max(pbrMaterial.iridescenceIor, 1.0);
  float sineSquared = (1.0 - NdotV * NdotV) / (filmIor * filmIor);
  float cosineSquared = 1.0 - sineSquared;
  if (cosineSquared <= 0.0) {
    return mix(baseReflectance, vec3(1.0), iridescence);
  }
  float filmCosine = sqrt(cosineSquared);
  float firstInterfaceReflectance = dielectricSchlick(getDielectricF0(filmIor), NdotV);
  float transmittedEnergy = 1.0 - firstInterfaceReflectance;

  vec3 baseIor = (vec3(1.0) + sqrt(clamp(baseReflectance, vec3(0.0), vec3(0.9999)))) /
    (vec3(1.0) - sqrt(clamp(baseReflectance, vec3(0.0), vec3(0.9999))));
  vec3 secondInterfaceF0 = (baseIor - vec3(filmIor)) / (baseIor + vec3(filmIor));
  secondInterfaceF0 *= secondInterfaceF0;
  vec3 secondInterfaceReflectance = secondInterfaceF0 +
    (vec3(1.0) - secondInterfaceF0) * pow(1.0 - filmCosine, 5.0);
  vec3 phaseShift = vec3(M_PI);
  phaseShift += mix(vec3(0.0), vec3(M_PI), lessThan(baseIor, vec3(filmIor)));
  float opticalPathDifference = 2.0 * filmIor * thickness * filmCosine;
  vec3 combinedReflectance = clamp(
    firstInterfaceReflectance * secondInterfaceReflectance,
    vec3(0.00001),
    vec3(0.9999)
  );
  vec3 recurringAmplitude = sqrt(combinedReflectance);
  vec3 interfaceResponse = transmittedEnergy * transmittedEnergy * secondInterfaceReflectance /
    (vec3(1.0) - combinedReflectance);
  vec3 reflectedSpectrum = vec3(firstInterfaceReflectance) + interfaceResponse;
  vec3 harmonicAmplitude = interfaceResponse - vec3(transmittedEnergy);
  for (int harmonic = 1; harmonic <= 2; harmonic++) {
    harmonicAmplitude *= recurringAmplitude;
    reflectedSpectrum += harmonicAmplitude * 2.0 * evaluateIridescenceSensitivity(
      float(harmonic) * opticalPathDifference,
      float(harmonic) * phaseShift
    );
  }
  return mix(baseReflectance, clamp(reflectedSpectrum, vec3(0.0), vec3(1.0)), iridescence);
}

vec3 getVolumeAttenuation(float thickness)
{
  if (thickness <= 0.0) {
    return vec3(1.0);
  }

  vec3 attenuationCoefficient =
    -log(max(pbrMaterial.attenuationColor, vec3(0.0001))) /
    max(pbrMaterial.attenuationDistance, 0.0001);
  return exp(-attenuationCoefficient * thickness);
}

// KHR_materials_volume_scatter is an active draft. This evaluates a local,
// thickness-aware single-scattering approximation rather than random walk.
vec3 getDiffuseTransmissionAttenuation(
  PBRInfo pbrInfo,
  vec3 multiscatterColor,
  float thickness
)
{
  vec3 volumeAttenuation = getVolumeAttenuation(thickness);
  float scatteringStrength = maxComponent(multiscatterColor);
  if (thickness <= 0.0 || scatteringStrength <= 0.0001) {
    return volumeAttenuation;
  }

  float anisotropy = clamp(pbrMaterial.scatterAnisotropy, -0.95, 0.95);
  float scatteringCosine = clamp(dot(-pbrInfo.v, pbrInfo.l), -1.0, 1.0);
  float phaseDenominator = max(
    1.0 + anisotropy * anisotropy - 2.0 * anisotropy * scatteringCosine,
    0.0001
  );
  float phaseWeight = clamp(
    (1.0 - anisotropy * anisotropy) / pow(phaseDenominator, 1.5),
    0.0,
    4.0
  );
  float scatteringDepth = thickness / max(pbrMaterial.attenuationDistance, 0.0001);
  float scatteringProbability = 1.0 - exp(-scatteringDepth);
  vec3 scatteringColor = clamp(multiscatterColor, vec3(0.0), vec3(1.0));
  return mix(
    volumeAttenuation,
    volumeAttenuation * mix(vec3(1.0), scatteringColor * phaseWeight, scatteringColor),
    scatteringProbability
  );
}

vec3 calculateDiffuseTransmissionLight(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 diffuseTransmissionColor,
  float diffuseTransmission,
  vec3 multiscatterColor,
  float thickness
)
{
  float oppositeHemisphere = max(dot(-pbrInfo.n, pbrInfo.l), 0.0);
  if (oppositeHemisphere <= 0.0 || diffuseTransmission <= 0.0) {
    return vec3(0.0);
  }

  vec3 nonReflectedEnergy = vec3(1.0) - clamp(pbrInfo.reflectance0, vec3(0.0), vec3(1.0));
  vec3 attenuatedColor = getDiffuseTransmissionAttenuation(
    pbrInfo,
    multiscatterColor,
    thickness
  );
  return lightColor * diffuseTransmissionColor * nonReflectedEnergy *
    attenuatedColor * (diffuseTransmission * oppositeHemisphere / M_PI);
}

#ifdef USE_IBL
vec3 calculateDiffuseTransmissionIBL(
  PBRInfo pbrInfo,
  vec3 diffuseTransmissionColor,
  float diffuseTransmission,
  vec3 multiscatterColor,
  float thickness
)
{
  if (diffuseTransmission <= 0.0) {
    return vec3(0.0);
  }

#ifdef USE_SCENE_ENVIRONMENT
  float rotationSine = sin(pbrScene.environmentRotation);
  float rotationCosine = cos(pbrScene.environmentRotation);
  mat2 environmentRotation = mat2(rotationCosine, rotationSine, -rotationSine, rotationCosine);
  vec3 oppositeNormal = vec3(environmentRotation * -pbrInfo.n.xz, -pbrInfo.n.y).xzy;
  vec3 environmentColor = texture(pbr_diffuseEnvSampler, oppositeNormal).rgb *
    max(pbrScene.environmentIntensity, 0.0);
#else
  vec3 environmentColor = SRGBtoLINEAR(texture(pbr_diffuseEnvSampler, -pbrInfo.n)).rgb;
#endif
  vec3 nonReflectedEnergy = vec3(1.0) - clamp(pbrInfo.reflectance0, vec3(0.0), vec3(1.0));
  return environmentColor * diffuseTransmissionColor * nonReflectedEnergy *
    getDiffuseTransmissionAttenuation(pbrInfo, multiscatterColor, thickness) *
    diffuseTransmission * pbrMaterial.scaleIBLAmbient.x;
}
#endif

#ifdef USE_TRANSMISSION_FRAMEBUFFER
vec3 sampleTransmittedSceneColor(
  vec3 position,
  vec3 normal,
  vec3 viewDirection,
  float thickness,
  float perceptualRoughness,
  float indexOfRefraction
)
{
  vec3 refractionDirection = refract(
    -viewDirection,
    normal,
    1.0 / max(indexOfRefraction, 1.0)
  );
  vec3 refractedPosition = position + refractionDirection * thickness;
  vec4 clipPosition = pbrScene.projectionMatrix *
    pbrScene.viewMatrix * vec4(refractedPosition, 1.0);
  vec2 textureCoordinate = clipPosition.xy / max(clipPosition.w, 0.0001) * 0.5 + 0.5;
  textureCoordinate = clamp(textureCoordinate, vec2(0.001), vec2(0.999));

  vec2 blurRadius = perceptualRoughness * perceptualRoughness * 8.0 /
    max(pbrScene.framebufferSize, vec2(1.0));
  vec3 sceneColor = texture(pbr_transmissionFramebufferSampler, textureCoordinate).rgb * 0.4;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate + vec2(blurRadius.x, 0.0)
  ).rgb * 0.15;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate - vec2(blurRadius.x, 0.0)
  ).rgb * 0.15;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate + vec2(0.0, blurRadius.y)
  ).rgb * 0.15;
  sceneColor += texture(
    pbr_transmissionFramebufferSampler,
    textureCoordinate - vec2(0.0, blurRadius.y)
  ).rgb * 0.15;
  return max(sceneColor, vec3(0.0));
}

vec3 getTransmittedSceneColor(
  vec3 position,
  vec3 normal,
  vec3 viewDirection,
  float thickness,
  float perceptualRoughness
)
{
  if (pbrMaterial.dispersion <= 0.0) {
    return sampleTransmittedSceneColor(
      position,
      normal,
      viewDirection,
      thickness,
      perceptualRoughness,
      pbrMaterial.ior
    );
  }

  float halfSpread = (max(pbrMaterial.ior, 1.0) - 1.0) * 0.025 * pbrMaterial.dispersion;
  vec3 indicesOfRefraction = max(
    vec3(pbrMaterial.ior - halfSpread, pbrMaterial.ior, pbrMaterial.ior + halfSpread),
    vec3(1.0)
  );
  return vec3(
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.r
    ).r,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.g
    ).g,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.b
    ).b
  );
}
#endif

PBRInfo createClearcoatPBRInfo(PBRInfo basePBRInfo, vec3 clearcoatNormal, float clearcoatRoughness)
{
  float perceptualRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
  float alphaRoughness = perceptualRoughness * perceptualRoughness;
  float NdotV = clamp(abs(dot(clearcoatNormal, basePBRInfo.v)), 0.001, 1.0);

  return PBRInfo(
    basePBRInfo.NdotL,
    NdotV,
    basePBRInfo.NdotH,
    basePBRInfo.LdotH,
    basePBRInfo.VdotH,
    perceptualRoughness,
    0.0,
    vec3(0.04),
    vec3(1.0),
    alphaRoughness,
    vec3(0.0),
    vec3(0.04),
    clearcoatNormal,
    basePBRInfo.v,
    basePBRInfo.l,
    basePBRInfo.h
  );
}

vec3 calculateClearcoatContribution(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 clearcoatNormal,
  float clearcoatFactor,
  float clearcoatRoughness
) {
  if (clearcoatFactor <= 0.0) {
    return vec3(0.0);
  }

  PBRInfo clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return calculateFinalColor(clearcoatPBRInfo, lightColor) * clearcoatFactor;
}

#ifdef USE_IBL
vec3 calculateClearcoatIBLContribution(
  PBRInfo pbrInfo,
  vec3 clearcoatNormal,
  vec3 reflection,
  float clearcoatFactor,
  float clearcoatRoughness
) {
  if (clearcoatFactor <= 0.0) {
    return vec3(0.0);
  }

  PBRInfo clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return getIBLContribution(clearcoatPBRInfo, clearcoatNormal, reflection) * clearcoatFactor;
}
#endif

vec3 calculateSheenContribution(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 sheenColor,
  float sheenRoughness
) {
  if (maxComponent(sheenColor) <= 0.0) {
    return vec3(0.0);
  }

  float alpha = max(sheenRoughness * sheenRoughness, 0.0001);
  float inverseAlpha = 1.0 / alpha;
  float sineSquared = max(1.0 - pbrInfo.NdotH * pbrInfo.NdotH, 0.0);
  float distribution = (2.0 + inverseAlpha) * pow(sineSquared, inverseAlpha * 0.5) /
    (2.0 * M_PI);
  float visibility = 1.0 / max(
    4.0 * (pbrInfo.NdotL + pbrInfo.NdotV - pbrInfo.NdotL * pbrInfo.NdotV),
    0.0001
  );
  return pbrInfo.NdotL * lightColor * sheenColor * distribution * visibility *
    (1.0 - pbrInfo.metalness);
}

vec3 calculateAnisotropicLightColor(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 anisotropyTangent,
  float anisotropyStrength
) {
  if (anisotropyStrength <= 0.0) {
    return calculateFinalColor(pbrInfo, lightColor);
  }

  vec3 anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  float tangentRoughness = mix(
    pbrInfo.alphaRoughness,
    1.0,
    anisotropyStrength * anisotropyStrength
  );
  float bitangentRoughness = clamp(pbrInfo.alphaRoughness, 0.001, 1.0);
  float roughnessProduct = tangentRoughness * bitangentRoughness;
  vec3 distributionVector = vec3(
    bitangentRoughness * dot(anisotropyTangent, pbrInfo.h),
    tangentRoughness * dot(anisotropyBitangent, pbrInfo.h),
    roughnessProduct * pbrInfo.NdotH
  );
  float distributionFactor = roughnessProduct /
    max(dot(distributionVector, distributionVector), 0.000001);
  float distribution = roughnessProduct * distributionFactor * distributionFactor / M_PI;
  float viewMask = pbrInfo.NdotL * length(vec3(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.v),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.v),
    pbrInfo.NdotV
  ));
  float lightMask = pbrInfo.NdotV * length(vec3(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.l),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.l),
    pbrInfo.NdotL
  ));
  float visibility = clamp(0.5 / max(viewMask + lightMask, 0.000001), 0.0, 1.0);
  vec3 fresnel = specularReflection(pbrInfo);
  vec3 diffuseContribution = (vec3(1.0) - fresnel) * diffuse(pbrInfo);
  return pbrInfo.NdotL * lightColor *
    (diffuseContribution + fresnel * distribution * visibility);
}

vec3 getAnisotropicReflection(PBRInfo pbrInfo, vec3 anisotropyTangent, float anisotropyStrength)
{
  if (anisotropyStrength <= 0.0) {
    return -normalize(reflect(pbrInfo.v, pbrInfo.n));
  }
  vec3 anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  vec3 anisotropicNormal = normalize(cross(anisotropyBitangent, pbrInfo.v));
  anisotropicNormal = normalize(cross(anisotropicNormal, anisotropyBitangent));
  float bend = anisotropyStrength * (1.0 - pbrInfo.perceptualRoughness);
  return -normalize(reflect(pbrInfo.v, normalize(mix(pbrInfo.n, anisotropicNormal, bend))));
}

vec3 calculateMaterialLightColor(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 clearcoatNormal,
  float clearcoatFactor,
  float clearcoatRoughness,
  vec3 sheenColor,
  float sheenRoughness,
  vec3 anisotropyTangent,
  float anisotropyStrength
) {
  vec3 color = calculateAnisotropicLightColor(
    pbrInfo,
    lightColor,
    anisotropyTangent,
    anisotropyStrength
  );
  color += calculateClearcoatContribution(
    pbrInfo,
    lightColor,
    clearcoatNormal,
    clearcoatFactor,
    clearcoatRoughness
  );
  color += calculateSheenContribution(pbrInfo, lightColor, sheenColor, sheenRoughness);
  return color;
}

void PBRInfo_setAmbientLight(inout PBRInfo pbrInfo) {
  pbrInfo.NdotL = 1.0;
  pbrInfo.NdotH = 0.0;
  pbrInfo.LdotH = 0.0;
  pbrInfo.VdotH = 1.0;
  pbrInfo.l = pbrInfo.n;
  pbrInfo.h = pbrInfo.n;
}

void PBRInfo_setDirectionalLight(inout PBRInfo pbrInfo, vec3 lightDirection) {
  vec3 n = pbrInfo.n;
  vec3 v = pbrInfo.v;
  vec3 l = normalize(lightDirection);             // Vector from surface point to light
  vec3 h = normalize(l+v);                        // Half vector between both l and v

  pbrInfo.NdotL = clamp(dot(n, l), 0.001, 1.0);
  pbrInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
  pbrInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
  pbrInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
  pbrInfo.l = l;
  pbrInfo.h = h;
}

void PBRInfo_setPointLight(inout PBRInfo pbrInfo, PointLight pointLight) {
  vec3 light_direction = normalize(pointLight.position - pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

void PBRInfo_setSpotLight(inout PBRInfo pbrInfo, SpotLight spotLight) {
  vec3 light_direction = normalize(spotLight.position - pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

vec3 calculateFinalColor(PBRInfo pbrInfo, vec3 lightColor) {
  // Calculate the shading terms for the microfacet specular shading model
  vec3 F = specularReflection(pbrInfo);
  float G = geometricOcclusion(pbrInfo);
  float D = microfacetDistribution(pbrInfo);

  // Calculation of analytical lighting contribution
  vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInfo);
  vec3 specContrib = F * G * D / (4.0 * pbrInfo.NdotL * pbrInfo.NdotV);
  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)
  return pbrInfo.NdotL * lightColor * (diffuseContrib + specContrib);
}

vec4 pbr_filterColor(vec4 vertexColor)
{
  vec2 baseColorUV = getMaterialUV(pbrMaterial.baseColorUVSet, pbrMaterial.baseColorUVTransform);
  vec2 metallicRoughnessUV = getMaterialUV(
    pbrMaterial.metallicRoughnessUVSet,
    pbrMaterial.metallicRoughnessUVTransform
  );
  vec2 normalUV = getMaterialUV(pbrMaterial.normalUVSet, pbrMaterial.normalUVTransform);
  vec2 occlusionUV = getMaterialUV(pbrMaterial.occlusionUVSet, pbrMaterial.occlusionUVTransform);
  vec2 emissiveUV = getMaterialUV(pbrMaterial.emissiveUVSet, pbrMaterial.emissiveUVTransform);
  vec2 specularColorUV = getMaterialUV(
    pbrMaterial.specularColorUVSet,
    pbrMaterial.specularColorUVTransform
  );
  vec2 specularIntensityUV = getMaterialUV(
    pbrMaterial.specularIntensityUVSet,
    pbrMaterial.specularIntensityUVTransform
  );
  vec2 transmissionUV = getMaterialUV(
    pbrMaterial.transmissionUVSet,
    pbrMaterial.transmissionUVTransform
  );
  vec2 thicknessUV = getMaterialUV(pbrMaterial.thicknessUVSet, pbrMaterial.thicknessUVTransform);
  vec2 clearcoatUV = getMaterialUV(pbrMaterial.clearcoatUVSet, pbrMaterial.clearcoatUVTransform);
  vec2 clearcoatRoughnessUV = getMaterialUV(
    pbrMaterial.clearcoatRoughnessUVSet,
    pbrMaterial.clearcoatRoughnessUVTransform
  );
  vec2 clearcoatNormalUV = getMaterialUV(
    pbrMaterial.clearcoatNormalUVSet,
    pbrMaterial.clearcoatNormalUVTransform
  );
  vec2 sheenColorUV = getMaterialUV(
    pbrMaterial.sheenColorUVSet,
    pbrMaterial.sheenColorUVTransform
  );
  vec2 sheenRoughnessUV = getMaterialUV(
    pbrMaterial.sheenRoughnessUVSet,
    pbrMaterial.sheenRoughnessUVTransform
  );
  vec2 iridescenceUV = getMaterialUV(
    pbrMaterial.iridescenceUVSet,
    pbrMaterial.iridescenceUVTransform
  );
  vec2 iridescenceThicknessUV = getMaterialUV(
    pbrMaterial.iridescenceThicknessUVSet,
    pbrMaterial.iridescenceThicknessUVTransform
  );
  vec2 anisotropyUV = getMaterialUV(
    pbrMaterial.anisotropyUVSet,
    pbrMaterial.anisotropyUVTransform
  );
  vec2 diffuseTransmissionUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionUVSet,
    pbrMaterial.diffuseTransmissionUVTransform
  );
  vec2 diffuseTransmissionColorUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionColorUVSet,
    pbrMaterial.diffuseTransmissionColorUVTransform
  );
  vec2 multiscatterColorUV = getMaterialUV(
    pbrMaterial.multiscatterColorUVSet,
    pbrMaterial.multiscatterColorUVTransform
  );

  // The albedo may be defined from a base texture or a flat color
#ifdef HAS_BASECOLORMAP
  vec4 baseColor =
    SRGBtoLINEAR(texture(pbr_baseColorSampler, baseColorUV)) *
    pbrMaterial.baseColorFactor * vertexColor;
#else
  vec4 baseColor = pbrMaterial.baseColorFactor * vertexColor;
#endif

#ifdef ALPHA_CUTOFF
  if (baseColor.a < pbrMaterial.alphaCutoff) {
    discard;
  }
#endif

  vec3 color = vec3(0, 0, 0);

  float transmission = 0.0;

  if(pbrMaterial.unlit){
    color.rgb = baseColor.rgb;
  }
  else{
    // Metallic and Roughness material properties are packed together
    // In glTF, these factors can be specified by fixed scalar values
    // or from a metallic-roughness map
    float perceptualRoughness = pbrMaterial.metallicRoughnessValues.y;
    float metallic = pbrMaterial.metallicRoughnessValues.x;
#ifdef HAS_METALROUGHNESSMAP
    // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
    // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
    vec4 mrSample = texture(pbr_metallicRoughnessSampler, metallicRoughnessUV);
    perceptualRoughness = mrSample.g * perceptualRoughness;
    metallic = mrSample.b * metallic;
#endif
    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
    metallic = clamp(metallic, 0.0, 1.0);
    mat3 tbn = getTBN(normalUV);
    vec3 n = getNormal(tbn, normalUV);                          // normal at surface point
    perceptualRoughness = widenSpecularRoughness(perceptualRoughness, n);
    vec3 v = normalize(pbrProjection.camera - pbr_vPosition);  // Vector from surface point to camera
    float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
#ifdef USE_MATERIAL_EXTENSIONS
    bool useExtendedPBR =
      pbrMaterial.specularColorMapEnabled ||
      pbrMaterial.specularIntensityMapEnabled ||
      abs(pbrMaterial.specularIntensityFactor - 1.0) > 0.0001 ||
      maxComponent(abs(pbrMaterial.specularColorFactor - vec3(1.0))) > 0.0001 ||
      abs(pbrMaterial.ior - 1.5) > 0.0001 ||
      pbrMaterial.dispersion > 0.0001 ||
      pbrMaterial.transmissionMapEnabled ||
      pbrMaterial.transmissionFactor > 0.0001 ||
      pbrMaterial.diffuseTransmissionMapEnabled ||
      pbrMaterial.diffuseTransmissionColorMapEnabled ||
      pbrMaterial.diffuseTransmissionFactor > 0.0001 ||
      pbrMaterial.multiscatterColorMapEnabled ||
      maxComponent(pbrMaterial.multiscatterColorFactor) > 0.0001 ||
      pbrMaterial.clearcoatMapEnabled ||
      pbrMaterial.clearcoatRoughnessMapEnabled ||
      pbrMaterial.clearcoatFactor > 0.0001 ||
      pbrMaterial.clearcoatRoughnessFactor > 0.0001 ||
      pbrMaterial.sheenColorMapEnabled ||
      pbrMaterial.sheenRoughnessMapEnabled ||
      maxComponent(pbrMaterial.sheenColorFactor) > 0.0001 ||
      pbrMaterial.sheenRoughnessFactor > 0.0001 ||
      pbrMaterial.iridescenceMapEnabled ||
      pbrMaterial.iridescenceFactor > 0.0001 ||
      abs(pbrMaterial.iridescenceIor - 1.3) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.x - 100.0) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.y - 400.0) > 0.0001 ||
      pbrMaterial.anisotropyMapEnabled ||
      pbrMaterial.anisotropyStrength > 0.0001 ||
      abs(pbrMaterial.anisotropyRotation) > 0.0001 ||
      length(pbrMaterial.anisotropyDirection - vec2(1.0, 0.0)) > 0.0001;
#else
    bool useExtendedPBR = false;
#endif

    if (!useExtendedPBR) {
      // Keep the baseline metallic-roughness implementation byte-for-byte equivalent in behavior.
      float alphaRoughness = perceptualRoughness * perceptualRoughness;

      vec3 f0 = vec3(0.04);
      vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);
      diffuseColor *= 1.0 - metallic;
      vec3 specularColor = mix(f0, baseColor.rgb, metallic);

      float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
      float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
      vec3 specularEnvironmentR0 = specularColor.rgb;
      vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;
      vec3 reflection = -normalize(reflect(v, n));

      PBRInfo pbrInfo = PBRInfo(
        0.0, // NdotL
        NdotV,
        0.0, // NdotH
        0.0, // LdotH
        0.0, // VdotH
        perceptualRoughness,
        metallic,
        specularEnvironmentR0,
        specularEnvironmentR90,
        alphaRoughness,
        diffuseColor,
        specularColor,
        n,
        v,
        n,
        n
      );

#ifdef USE_LIGHTS
      PBRInfo_setAmbientLight(pbrInfo);
      color += calculateFinalColor(pbrInfo, lighting.ambientColor);

      for(int i = 0; i < lighting.directionalLightCount; i++) {
        if (i < lighting.directionalLightCount) {
          PBRInfo_setDirectionalLight(pbrInfo, lighting_getDirectionalLight(i).direction);
          color += calculateFinalColor(pbrInfo, lighting_getDirectionalLight(i).color);
        }
      }

      for(int i = 0; i < lighting.pointLightCount; i++) {
        if (i < lighting.pointLightCount) {
          PBRInfo_setPointLight(pbrInfo, lighting_getPointLight(i));
          float attenuation = getPointLightAttenuation(lighting_getPointLight(i), distance(lighting_getPointLight(i).position, pbr_vPosition));
          color += calculateFinalColor(pbrInfo, lighting_getPointLight(i).color / attenuation);
        }
      }

      for(int i = 0; i < lighting.spotLightCount; i++) {
        if (i < lighting.spotLightCount) {
          PBRInfo_setSpotLight(pbrInfo, lighting_getSpotLight(i));
          float attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), pbr_vPosition);
          color += calculateFinalColor(pbrInfo, lighting_getSpotLight(i).color / attenuation);
        }
      }
#endif

#ifdef USE_IBL
      if (pbrMaterial.IBLenabled) {
        color += getIBLContribution(pbrInfo, n, reflection);
      }
#endif

#ifdef HAS_OCCLUSIONMAP
      if (pbrMaterial.occlusionMapEnabled) {
        float ao = texture(pbr_occlusionSampler, occlusionUV).r;
        color = mix(color, color * ao, pbrMaterial.occlusionStrength);
      }
#endif

      vec3 emissive = pbrMaterial.emissiveFactor;
#ifdef HAS_EMISSIVEMAP
      if (pbrMaterial.emissiveMapEnabled) {
        emissive *= SRGBtoLINEAR(texture(pbr_emissiveSampler, emissiveUV)).rgb;
      }
#endif
      color += emissive * pbrMaterial.emissiveStrength;

#ifdef PBR_DEBUG
      color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
      color = mix(color, vec3(metallic), pbrMaterial.scaleDiffBaseMR.z);
      color = mix(color, vec3(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
#endif

      return vec4(applySceneColorManagement(color), baseColor.a);
    }

    float specularIntensity = pbrMaterial.specularIntensityFactor;
#ifdef HAS_SPECULARINTENSITYMAP
    if (pbrMaterial.specularIntensityMapEnabled) {
      specularIntensity *= texture(pbr_specularIntensitySampler, specularIntensityUV).a;
    }
#endif

    vec3 specularFactor = pbrMaterial.specularColorFactor;
#ifdef HAS_SPECULARCOLORMAP
    if (pbrMaterial.specularColorMapEnabled) {
      specularFactor *= SRGBtoLINEAR(texture(pbr_specularColorSampler, specularColorUV)).rgb;
    }
#endif

    transmission = pbrMaterial.transmissionFactor;
#ifdef HAS_TRANSMISSIONMAP
    if (pbrMaterial.transmissionMapEnabled) {
      transmission *= texture(pbr_transmissionSampler, transmissionUV).r;
    }
#endif
    transmission = clamp(transmission * (1.0 - metallic), 0.0, 1.0);
    float thickness = max(pbrMaterial.thicknessFactor, 0.0);
#ifdef HAS_THICKNESSMAP
    thickness *= texture(pbr_thicknessSampler, thicknessUV).g;
#endif

    float diffuseTransmission = clamp(pbrMaterial.diffuseTransmissionFactor, 0.0, 1.0);
#ifdef HAS_DIFFUSETRANSMISSIONMAP
    if (pbrMaterial.diffuseTransmissionMapEnabled) {
      diffuseTransmission *= texture(pbr_diffuseTransmissionSampler, diffuseTransmissionUV).a;
    }
#endif
    diffuseTransmission *= (1.0 - metallic) * (1.0 - transmission);
    vec3 diffuseTransmissionColor = pbrMaterial.diffuseTransmissionColorFactor;
#ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
    if (pbrMaterial.diffuseTransmissionColorMapEnabled) {
      diffuseTransmissionColor *= SRGBtoLINEAR(
        texture(pbr_diffuseTransmissionColorSampler, diffuseTransmissionColorUV)
      ).rgb;
    }
#endif
    vec3 multiscatterColor = pbrMaterial.multiscatterColorFactor;
#ifdef HAS_MULTISCATTERCOLORMAP
    if (pbrMaterial.multiscatterColorMapEnabled) {
      multiscatterColor *= SRGBtoLINEAR(
        texture(pbr_multiscatterColorSampler, multiscatterColorUV)
      ).rgb;
    }
#endif

    float clearcoatFactor = pbrMaterial.clearcoatFactor;
    float clearcoatRoughness = pbrMaterial.clearcoatRoughnessFactor;
#ifdef HAS_CLEARCOATMAP
    if (pbrMaterial.clearcoatMapEnabled) {
      clearcoatFactor *= texture(pbr_clearcoatSampler, clearcoatUV).r;
    }
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
    if (pbrMaterial.clearcoatRoughnessMapEnabled) {
      clearcoatRoughness *= texture(pbr_clearcoatRoughnessSampler, clearcoatRoughnessUV).g;
    }
#endif
    clearcoatFactor = clamp(clearcoatFactor, 0.0, 1.0);
    clearcoatRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
    vec3 clearcoatNormal = getClearcoatNormal(getTBN(clearcoatNormalUV), n, clearcoatNormalUV);
    clearcoatRoughness = widenSpecularRoughness(clearcoatRoughness, clearcoatNormal);

    vec3 sheenColor = pbrMaterial.sheenColorFactor;
    float sheenRoughness = pbrMaterial.sheenRoughnessFactor;
#ifdef HAS_SHEENCOLORMAP
    if (pbrMaterial.sheenColorMapEnabled) {
      sheenColor *= SRGBtoLINEAR(texture(pbr_sheenColorSampler, sheenColorUV)).rgb;
    }
#endif
#ifdef HAS_SHEENROUGHNESSMAP
    if (pbrMaterial.sheenRoughnessMapEnabled) {
      sheenRoughness *= texture(pbr_sheenRoughnessSampler, sheenRoughnessUV).a;
    }
#endif
    sheenRoughness = clamp(sheenRoughness, c_MinRoughness, 1.0);

    float iridescence = pbrMaterial.iridescenceFactor;
#ifdef HAS_IRIDESCENCEMAP
    if (pbrMaterial.iridescenceMapEnabled) {
      iridescence *= texture(pbr_iridescenceSampler, iridescenceUV).r;
    }
#endif
    iridescence = clamp(iridescence, 0.0, 1.0);
    float iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      0.5
    );
#ifdef HAS_IRIDESCENCETHICKNESSMAP
    iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      texture(pbr_iridescenceThicknessSampler, iridescenceThicknessUV).g
    );
#endif

    float anisotropyStrength = clamp(pbrMaterial.anisotropyStrength, 0.0, 1.0);
    vec2 anisotropyDirection = normalizeDirection(pbrMaterial.anisotropyDirection);
#ifdef HAS_ANISOTROPYMAP
    if (pbrMaterial.anisotropyMapEnabled) {
      vec3 anisotropySample = texture(pbr_anisotropySampler, anisotropyUV).rgb;
      anisotropyStrength *= anisotropySample.b;
      vec2 mappedDirection = anisotropySample.rg * 2.0 - 1.0;
      if (length(mappedDirection) > 0.0001) {
        anisotropyDirection = normalize(mappedDirection);
      }
    }
#endif
    anisotropyDirection = rotateDirection(anisotropyDirection, pbrMaterial.anisotropyRotation);
    vec3 anisotropyTangent = normalize(tbn[0] * anisotropyDirection.x + tbn[1] * anisotropyDirection.y);
    if (length(anisotropyTangent) < 0.0001) {
      anisotropyTangent = normalize(tbn[0]);
    }
    // Roughness is authored as perceptual roughness; as is convention,
    // convert to material roughness by squaring the perceptual roughness [2].
    float alphaRoughness = perceptualRoughness * perceptualRoughness;

    float dielectricF0 = getDielectricF0(pbrMaterial.ior);
    vec3 dielectricSpecularF0 = min(
      vec3(dielectricF0) * specularFactor * specularIntensity,
      vec3(1.0)
    );
    dielectricSpecularF0 = getIridescenceTint(
      iridescence,
      iridescenceThickness,
      NdotV,
      dielectricSpecularF0
    );
    vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - dielectricSpecularF0);
    diffuseColor *= (1.0 - metallic) * (1.0 - transmission) * (1.0 - diffuseTransmission);
    vec3 specularColor = mix(dielectricSpecularF0, baseColor.rgb, metallic);

    float clearcoatViewFresnel = dielectricSchlick(
      0.04,
      clamp(abs(dot(clearcoatNormal, v)), 0.0, 1.0)
    );
    float sheenDirectionalAlbedo = maxComponent(sheenColor) *
      (0.157 + 0.343 * (1.0 - NdotV)) * (1.0 - sheenRoughness * 0.5);
    float baseLayerEnergy = (1.0 - clearcoatFactor * clearcoatViewFresnel) *
      (1.0 - clamp(sheenDirectionalAlbedo, 0.0, 1.0));
    diffuseColor *= baseLayerEnergy;
    specularColor *= baseLayerEnergy;

    // Compute reflectance.
    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

    // For typical incident reflectance range (between 4% to 100%) set the grazing
    // reflectance to 100% for typical fresnel effect.
    // For very low reflectance range on highly diffuse objects (below 4%),
    // incrementally reduce grazing reflecance to 0%.
    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
    vec3 specularEnvironmentR0 = specularColor.rgb;
    vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;
    vec3 reflection = -normalize(reflect(v, n));

    PBRInfo pbrInfo = PBRInfo(
      0.0, // NdotL
      NdotV,
      0.0, // NdotH
      0.0, // LdotH
      0.0, // VdotH
      perceptualRoughness,
      metallic,
      specularEnvironmentR0,
      specularEnvironmentR90,
      alphaRoughness,
      diffuseColor,
      specularColor,
      n,
      v,
      n,
      n
    );


#ifdef USE_LIGHTS
    // Apply ambient light
    PBRInfo_setAmbientLight(pbrInfo);
    color += calculateMaterialLightColor(
      pbrInfo,
      lighting.ambientColor,
      clearcoatNormal,
      clearcoatFactor,
      clearcoatRoughness,
      sheenColor,
      sheenRoughness,
      anisotropyTangent,
      anisotropyStrength
    );

    // Apply directional light
    for(int i = 0; i < lighting.directionalLightCount; i++) {
      if (i < lighting.directionalLightCount) {
        PBRInfo_setDirectionalLight(pbrInfo, lighting_getDirectionalLight(i).direction);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    // Apply point light
    for(int i = 0; i < lighting.pointLightCount; i++) {
      if (i < lighting.pointLightCount) {
        PBRInfo_setPointLight(pbrInfo, lighting_getPointLight(i));
        float attenuation = getPointLightAttenuation(lighting_getPointLight(i), distance(lighting_getPointLight(i).position, pbr_vPosition));
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    for(int i = 0; i < lighting.spotLightCount; i++) {
      if (i < lighting.spotLightCount) {
        PBRInfo_setSpotLight(pbrInfo, lighting_getSpotLight(i));
        float attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), pbr_vPosition);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }
#endif

    // Calculate lighting contribution from image based lighting source (IBL)
#ifdef USE_IBL
    if (pbrMaterial.IBLenabled) {
      color += getIBLContribution(
        pbrInfo,
        n,
        getAnisotropicReflection(pbrInfo, anisotropyTangent, anisotropyStrength)
      );
      color += calculateClearcoatIBLContribution(
        pbrInfo,
        clearcoatNormal,
        -normalize(reflect(v, clearcoatNormal)),
        clearcoatFactor,
        clearcoatRoughness
      );
      color += calculateDiffuseTransmissionIBL(
        pbrInfo,
        diffuseTransmissionColor,
        diffuseTransmission,
        multiscatterColor,
        thickness
      );
      color += sheenColor * pbrMaterial.scaleIBLAmbient.x * (1.0 - sheenRoughness) * 0.25;
    }
#endif

 // Apply optional PBR terms for additional (optional) shading
#ifdef HAS_OCCLUSIONMAP
    if (pbrMaterial.occlusionMapEnabled) {
      float ao = texture(pbr_occlusionSampler, occlusionUV).r;
      color = mix(color, color * ao, pbrMaterial.occlusionStrength);
    }
#endif

    vec3 emissive = pbrMaterial.emissiveFactor;
#ifdef HAS_EMISSIVEMAP
    if (pbrMaterial.emissiveMapEnabled) {
      emissive *= SRGBtoLINEAR(texture(pbr_emissiveSampler, emissiveUV)).rgb;
    }
#endif
    color += emissive * pbrMaterial.emissiveStrength;

    if (transmission > 0.0) {
#ifdef USE_TRANSMISSION_FRAMEBUFFER
      float dielectricFresnel = getDielectricF0(pbrMaterial.ior);
      float transmissionFresnel = dielectricFresnel +
        (1.0 - dielectricFresnel) * pow(1.0 - NdotV, 5.0);
      vec3 transmittedColor = getTransmittedSceneColor(
        pbr_vPosition,
        n,
        v,
        thickness,
        perceptualRoughness
      );
      color += transmittedColor * getVolumeAttenuation(thickness) *
        transmission * (1.0 - transmissionFresnel);
#else
      color = mix(color, color * getVolumeAttenuation(thickness), transmission);
#endif
    }

    // This section uses mix to override final color for reference app visualization
    // of various parameters in the lighting equation.
#ifdef PBR_DEBUG
    // TODO: Figure out how to debug multiple lights

    // color = mix(color, F, pbr_scaleFGDSpec.x);
    // color = mix(color, vec3(G), pbr_scaleFGDSpec.y);
    // color = mix(color, vec3(D), pbr_scaleFGDSpec.z);
    // color = mix(color, specContrib, pbr_scaleFGDSpec.w);

    // color = mix(color, diffuseContrib, pbr_scaleDiffBaseMR.x);
    color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
    color = mix(color, vec3(metallic), pbrMaterial.scaleDiffBaseMR.z);
    color = mix(color, vec3(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
#endif

  }

#ifdef USE_TRANSMISSION_FRAMEBUFFER
  float alpha = clamp(baseColor.a, 0.0, 1.0);
#else
  float alpha = clamp(baseColor.a * (1.0 - transmission), 0.0, 1.0);
#endif
  return vec4(applySceneColorManagement(color), alpha);
}
`,_o=`struct PBRFragmentInputs {
  pbr_vPosition: vec3f,
  pbr_vUV0: vec2f,
  pbr_vUV1: vec2f,
  pbr_vTBN: mat3x3f,
  pbr_vNormal: vec3f
};

var<private> fragmentInputs: PBRFragmentInputs;

fn pbr_setPositionNormalTangentUV(
  position: vec4f,
  normal: vec4f,
  tangent: vec4f,
  uv0: vec2f,
  uv1: vec2f
)
{
  var pos: vec4f = pbrProjection.modelMatrix * position;
  fragmentInputs.pbr_vPosition = pos.xyz / pos.w;
  fragmentInputs.pbr_vNormal = vec3f(0.0, 0.0, 1.0);
  fragmentInputs.pbr_vTBN = mat3x3f(
    vec3f(1.0, 0.0, 0.0),
    vec3f(0.0, 1.0, 0.0),
    vec3f(0.0, 0.0, 1.0)
  );
  fragmentInputs.pbr_vUV0 = vec2f(0.0, 0.0);
  fragmentInputs.pbr_vUV1 = uv1;

#ifdef HAS_NORMALS
  let normalW: vec3f = normalize((pbrProjection.normalMatrix * vec4f(normal.xyz, 0.0)).xyz);
  fragmentInputs.pbr_vNormal = normalW;
#ifdef HAS_TANGENTS
  let tangentW: vec3f = normalize((pbrProjection.modelMatrix * vec4f(tangent.xyz, 0.0)).xyz);
  let bitangentW: vec3f = cross(normalW, tangentW) * tangent.w;
  fragmentInputs.pbr_vTBN = mat3x3f(tangentW, bitangentW, normalW);
#endif
#endif

#ifdef HAS_UV
  fragmentInputs.pbr_vUV0 = uv0;
#endif
}

struct pbrMaterialUniforms {
  // Material is unlit
  unlit: u32,

  // Base color map
  baseColorMapEnabled: u32,
  baseColorFactor: vec4f,

  normalMapEnabled : u32,
  normalScale: f32,  // #ifdef HAS_NORMALMAP

  emissiveMapEnabled: u32,
  emissiveFactor: vec3f, // #ifdef HAS_EMISSIVEMAP

  metallicRoughnessValues: vec2f,
  metallicRoughnessMapEnabled: u32,

  occlusionMapEnabled: i32,
  occlusionStrength: f32, // #ifdef HAS_OCCLUSIONMAP
  
  alphaCutoffEnabled: i32,
  alphaCutoff: f32, // #ifdef ALPHA_CUTOFF

  specularColorFactor: vec3f,
  specularIntensityFactor: f32,
  specularColorMapEnabled: i32,
  specularIntensityMapEnabled: i32,

  ior: f32,

  transmissionFactor: f32,
  transmissionMapEnabled: i32,

  thicknessFactor: f32,
  attenuationDistance: f32,
  attenuationColor: vec3f,

  clearcoatFactor: f32,
  clearcoatRoughnessFactor: f32,
  clearcoatMapEnabled: i32,
  clearcoatRoughnessMapEnabled: i32,

  sheenColorFactor: vec3f,
  sheenRoughnessFactor: f32,
  sheenColorMapEnabled: i32,
  sheenRoughnessMapEnabled: i32,

  iridescenceFactor: f32,
  iridescenceIor: f32,
  iridescenceThicknessRange: vec2f,
  iridescenceMapEnabled: i32,

  anisotropyStrength: f32,
  anisotropyRotation: f32,
  anisotropyDirection: vec2f,
  anisotropyMapEnabled: i32,

  emissiveStrength: f32,
  dispersion: f32,
  
  // IBL
  IBLenabled: i32,
  scaleIBLAmbient: vec2f, // #ifdef USE_IBL
  
  // debugging flags used for shader output of intermediate PBR variables
  // #ifdef PBR_DEBUG
  scaleDiffBaseMR: vec4f,
  scaleFGDSpec: vec4f,
  // #endif

  baseColorUVSet: i32,
  baseColorUVTransform: mat3x3f,
  metallicRoughnessUVSet: i32,
  metallicRoughnessUVTransform: mat3x3f,
  normalUVSet: i32,
  normalUVTransform: mat3x3f,
  occlusionUVSet: i32,
  occlusionUVTransform: mat3x3f,
  emissiveUVSet: i32,
  emissiveUVTransform: mat3x3f,
  specularColorUVSet: i32,
  specularColorUVTransform: mat3x3f,
  specularIntensityUVSet: i32,
  specularIntensityUVTransform: mat3x3f,
  transmissionUVSet: i32,
  transmissionUVTransform: mat3x3f,
  thicknessUVSet: i32,
  thicknessUVTransform: mat3x3f,
  clearcoatUVSet: i32,
  clearcoatUVTransform: mat3x3f,
  clearcoatRoughnessUVSet: i32,
  clearcoatRoughnessUVTransform: mat3x3f,
  clearcoatNormalUVSet: i32,
  clearcoatNormalUVTransform: mat3x3f,
  sheenColorUVSet: i32,
  sheenColorUVTransform: mat3x3f,
  sheenRoughnessUVSet: i32,
  sheenRoughnessUVTransform: mat3x3f,
  iridescenceUVSet: i32,
  iridescenceUVTransform: mat3x3f,
  iridescenceThicknessUVSet: i32,
  iridescenceThicknessUVTransform: mat3x3f,
  anisotropyUVSet: i32,
  anisotropyUVTransform: mat3x3f,

  bumpFactor: f32,
  bumpMapEnabled: i32,
  diffuseTransmissionFactor: f32,
  diffuseTransmissionMapEnabled: i32,
  diffuseTransmissionColorFactor: vec3f,
  diffuseTransmissionColorMapEnabled: i32,
  multiscatterColorFactor: vec3f,
  multiscatterColorMapEnabled: i32,
  scatterAnisotropy: f32,

  bumpUVSet: i32,
  bumpUVTransform: mat3x3f,
  diffuseTransmissionUVSet: i32,
  diffuseTransmissionUVTransform: mat3x3f,
  diffuseTransmissionColorUVSet: i32,
  diffuseTransmissionColorUVTransform: mat3x3f,
  multiscatterColorUVSet: i32,
  multiscatterColorUVTransform: mat3x3f,
}

@group(3) @binding(auto) var<uniform> pbrMaterial : pbrMaterialUniforms;

// Samplers
#ifdef HAS_BASECOLORMAP
@group(3) @binding(auto) var pbr_baseColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_baseColorSamplerSampler: sampler;
#endif
#ifdef HAS_NORMALMAP
@group(3) @binding(auto) var pbr_normalSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_normalSamplerSampler: sampler;
#endif
#ifdef HAS_EMISSIVEMAP
@group(3) @binding(auto) var pbr_emissiveSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_emissiveSamplerSampler: sampler;
#endif
#ifdef HAS_METALROUGHNESSMAP
@group(3) @binding(auto) var pbr_metallicRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_metallicRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_OCCLUSIONMAP
@group(3) @binding(auto) var pbr_occlusionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_occlusionSamplerSampler: sampler;
#endif
#ifdef HAS_SPECULARCOLORMAP
@group(3) @binding(auto) var pbr_specularColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_specularColorSamplerSampler: sampler;
#endif
#ifdef HAS_SPECULARINTENSITYMAP
@group(3) @binding(auto) var pbr_specularIntensitySampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_specularIntensitySamplerSampler: sampler;
#endif
#ifdef HAS_TRANSMISSIONMAP
@group(3) @binding(auto) var pbr_transmissionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_transmissionSamplerSampler: sampler;
#endif
#ifdef HAS_THICKNESSMAP
@group(3) @binding(auto) var pbr_thicknessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_thicknessSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATMAP
@group(3) @binding(auto) var pbr_clearcoatSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
@group(3) @binding(auto) var pbr_clearcoatRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATNORMALMAP
@group(3) @binding(auto) var pbr_clearcoatNormalSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatNormalSamplerSampler: sampler;
#endif
#ifdef HAS_SHEENCOLORMAP
@group(3) @binding(auto) var pbr_sheenColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_sheenColorSamplerSampler: sampler;
#endif
#ifdef HAS_SHEENROUGHNESSMAP
@group(3) @binding(auto) var pbr_sheenRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_sheenRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_IRIDESCENCEMAP
@group(3) @binding(auto) var pbr_iridescenceSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_iridescenceSamplerSampler: sampler;
#endif
#ifdef HAS_IRIDESCENCETHICKNESSMAP
@group(3) @binding(auto) var pbr_iridescenceThicknessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_iridescenceThicknessSamplerSampler: sampler;
#endif
#ifdef HAS_ANISOTROPYMAP
@group(3) @binding(auto) var pbr_anisotropySampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_anisotropySamplerSampler: sampler;
#endif
#ifdef HAS_BUMPMAP
@group(3) @binding(auto) var pbr_bumpSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_bumpSamplerSampler: sampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONMAP
@group(3) @binding(auto) var pbr_diffuseTransmissionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_diffuseTransmissionSamplerSampler: sampler;
#endif
#ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
@group(3) @binding(auto) var pbr_diffuseTransmissionColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_diffuseTransmissionColorSamplerSampler: sampler;
#endif
#ifdef HAS_MULTISCATTERCOLORMAP
@group(3) @binding(auto) var pbr_multiscatterColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_multiscatterColorSamplerSampler: sampler;
#endif
// Encapsulate the various inputs used by the various functions in the shading equation
// We store values in this struct to simplify the integration of alternative implementations
// of the shading terms, outlined in the Readme.MD Appendix.
struct PBRInfo {
  NdotL: f32,                  // cos angle between normal and light direction
  NdotV: f32,                  // cos angle between normal and view direction
  NdotH: f32,                  // cos angle between normal and half vector
  LdotH: f32,                  // cos angle between light direction and half vector
  VdotH: f32,                  // cos angle between view direction and half vector
  perceptualRoughness: f32,    // roughness value, as authored by the model creator (input to shader)
  metalness: f32,              // metallic value at the surface
  reflectance0: vec3f,            // full reflectance color (normal incidence angle)
  reflectance90: vec3f,           // reflectance color at grazing angle
  alphaRoughness: f32,         // roughness mapped to a more linear change in the roughness (proposed by [2])
  diffuseColor: vec3f,            // color contribution from diffuse lighting
  specularColor: vec3f,           // color contribution from specular lighting
  n: vec3f,                       // normal at surface point
  v: vec3f,                       // vector from surface point to camera
  l: vec3f,                       // direction from the surface toward the current light
  h: vec3f                        // half vector between the current light and camera
};

const M_PI = 3.141592653589793;
const c_MinRoughness = 0.04;

// Widen sub-pixel specular lobes using the screen-space normal footprint.
// This is geometric specular antialiasing: the normal variance is converted
// into an additional squared perceptual roughness before evaluating BRDFs.
fn widenSpecularRoughness(perceptualRoughness: f32, normal: vec3f) -> f32 {
  let normalDerivativeX = dpdx(normal);
  let normalDerivativeY = dpdy(normal);
  let normalVariance =
    dot(normalDerivativeX, normalDerivativeX) +
    dot(normalDerivativeY, normalDerivativeY);
  let kernelRoughnessSquared = min(2.0 * normalVariance, 1.0);
  return clamp(
    sqrt(perceptualRoughness * perceptualRoughness + kernelRoughnessSquared),
    c_MinRoughness,
    1.0
  );
}

fn SRGBtoLINEAR(srgbIn: vec4f ) -> vec4f
{
  var linOut: vec3f = srgbIn.xyz;
#ifdef MANUAL_SRGB
  let bLess: vec3f = step(vec3f(0.04045), srgbIn.xyz);
  linOut = mix(
    srgbIn.xyz / vec3f(12.92),
    pow((srgbIn.xyz + vec3f(0.055)) / vec3f(1.055), vec3f(2.4)),
    bLess
  );
#ifdef SRGB_FAST_APPROXIMATION
  linOut = pow(srgbIn.xyz, vec3f(2.2));
#endif
#endif
  return vec4f(linOut, srgbIn.w);
}

fn getMaterialUV(uvSet: i32, uvTransform: mat3x3f) -> vec2f
{
  var baseUV = fragmentInputs.pbr_vUV0;
  if (uvSet == 1) {
    baseUV = fragmentInputs.pbr_vUV1;
  }
  return (uvTransform * vec3f(baseUV, 1.0)).xy;
}

// Build the tangent basis from interpolated attributes or screen-space derivatives.
fn getTBN(uv: vec2f) -> mat3x3f
{
  let pos_dx: vec3f = dpdx(fragmentInputs.pbr_vPosition);
  let pos_dy: vec3f = dpdy(fragmentInputs.pbr_vPosition);
  let tex_dx: vec3f = dpdx(vec3f(uv, 0.0));
  let tex_dy: vec3f = dpdy(vec3f(uv, 0.0));
  var t: vec3f = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);

  var ng: vec3f = cross(pos_dy, pos_dx);
#ifdef HAS_NORMALS
  ng = normalize(fragmentInputs.pbr_vNormal);
#endif
  t = normalize(t - ng * dot(ng, t));
  var b: vec3f = normalize(cross(ng, t));
  var tbn: mat3x3f = mat3x3f(t, b, ng);
#ifdef HAS_TANGENTS
  tbn = fragmentInputs.pbr_vTBN;
#endif

  return tbn;
}

// Find the normal for this fragment, pulling either from a predefined normal map
// or from the interpolated mesh normal and tangent attributes.
fn getMappedNormal(
  normalSampler: texture_2d<f32>,
  normalSamplerBinding: sampler,
  tbn: mat3x3f,
  normalScale: f32,
  uv: vec2f
) -> vec3f
{
  let n = textureSample(normalSampler, normalSamplerBinding, uv).rgb;
  return normalize(tbn * ((2.0 * n - 1.0) * vec3f(normalScale, normalScale, 1.0)));
}

fn getNormal(tbn: mat3x3f, uv: vec2f) -> vec3f
{
  // The tbn matrix is linearly interpolated, so we need to re-normalize
  var n: vec3f = normalize(tbn[2].xyz);
#ifdef HAS_NORMALMAP
  n = getMappedNormal(
    pbr_normalSampler,
    pbr_normalSamplerSampler,
    tbn,
    pbrMaterial.normalScale,
    uv
  );
#endif

#ifdef HAS_BUMPMAP
  let bumpUV = getMaterialUV(pbrMaterial.bumpUVSet, pbrMaterial.bumpUVTransform);
  let bumpTexelSize = 1.0 / vec2f(textureDimensions(pbr_bumpSampler, 0));
  let bumpHeight = textureSample(pbr_bumpSampler, pbr_bumpSamplerSampler, bumpUV).r;
  let bumpGradient = vec2f(
    textureSample(
      pbr_bumpSampler,
      pbr_bumpSamplerSampler,
      bumpUV + vec2f(bumpTexelSize.x, 0.0)
    ).r - bumpHeight,
    textureSample(
      pbr_bumpSampler,
      pbr_bumpSamplerSampler,
      bumpUV + vec2f(0.0, bumpTexelSize.y)
    ).r - bumpHeight
  );
  n = normalize(n - pbrMaterial.bumpFactor *
    (tbn[0] * bumpGradient.x + tbn[1] * bumpGradient.y));
#endif

  return n;
}

fn getClearcoatNormal(tbn: mat3x3f, baseNormal: vec3f, uv: vec2f) -> vec3f
{
#ifdef HAS_CLEARCOATNORMALMAP
  return getMappedNormal(
    pbr_clearcoatNormalSampler,
    pbr_clearcoatNormalSamplerSampler,
    tbn,
    1.0,
    uv
  );
#else
  return baseNormal;
#endif
}

// Calculation of the lighting contribution from an optional Image Based Light source.
// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].
// See our README.md on Environment Maps [3] for additional discussion.
#ifdef USE_IBL
fn getIBLContribution(pbrInfo: PBRInfo, n: vec3f, reflection: vec3f) -> vec3f
{
#ifdef USE_SCENE_ENVIRONMENT
  let maximumMipLevel = max(pbrScene.environmentMipCount - 1.0, 0.0);
  let rotationSine = sin(pbrScene.environmentRotation);
  let rotationCosine = cos(pbrScene.environmentRotation);
  let environmentRotation = mat2x2f(
    vec2f(rotationCosine, rotationSine),
    vec2f(-rotationSine, rotationCosine)
  );
  let rotatedNormal = environmentRotation * n.xz;
  let rotatedReflection = environmentRotation * reflection.xz;
  let environmentNormal = vec3f(rotatedNormal.x, n.y, rotatedNormal.y);
  let environmentReflection = vec3f(rotatedReflection.x, reflection.y, rotatedReflection.y);
#else
  let maximumMipLevel = 9.0;
  let environmentNormal = n;
  let environmentReflection = reflection;
#endif
  let lod = pbrInfo.perceptualRoughness * maximumMipLevel;
  // retrieve a scale and bias to F0. See [1], Figure 3
  let brdfSample = textureSampleLevel(
    pbr_brdfLUT,
    pbr_brdfLUTSampler,
    vec2f(pbrInfo.NdotV, 1.0 - pbrInfo.perceptualRoughness),
    0.0
  );
  let diffuseSample = textureSampleLevel(
    pbr_diffuseEnvSampler,
    pbr_diffuseEnvSamplerSampler,
    environmentNormal,
    0.0
  );
  var specularSample = textureSampleLevel(
    pbr_specularEnvSampler,
    pbr_specularEnvSamplerSampler,
    environmentReflection,
    0.0
  );
#ifdef USE_TEX_LOD
  specularSample = textureSampleLevel(
    pbr_specularEnvSampler,
    pbr_specularEnvSamplerSampler,
    environmentReflection,
    lod
  );
#endif

#ifdef USE_SCENE_ENVIRONMENT
  let brdf = brdfSample.rgb;
  let diffuseLight = diffuseSample.rgb;
  let specularLight = specularSample.rgb;
#else
  let brdf = SRGBtoLINEAR(brdfSample).rgb;
  let diffuseLight = SRGBtoLINEAR(diffuseSample).rgb;
  let specularLight = SRGBtoLINEAR(specularSample).rgb;
#endif

  let diffuse = diffuseLight * pbrInfo.diffuseColor * pbrMaterial.scaleIBLAmbient.x;
  let specular =
    specularLight * (pbrInfo.specularColor * brdf.x + brdf.y) * pbrMaterial.scaleIBLAmbient.y;

#ifdef USE_SCENE_ENVIRONMENT
  return (diffuse + specular) * max(pbrScene.environmentIntensity, 0.0);
#else
  return diffuse + specular;
#endif
}
#endif

// Basic Lambertian diffuse
// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
// See also [1], Equation 1
fn diffuse(pbrInfo: PBRInfo) -> vec3<f32> {
  return pbrInfo.diffuseColor / M_PI;
}

// The following equation models the Fresnel reflectance term of the spec equation (aka F())
// Implementation of fresnel from [4], Equation 15
fn specularReflection(pbrInfo: PBRInfo) -> vec3<f32> {
  return pbrInfo.reflectance0 +
    (pbrInfo.reflectance90 - pbrInfo.reflectance0) *
    pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
}

// This calculates the specular geometric attenuation (aka G()),
// where rougher material will reflect less light back to the viewer.
// This implementation is based on [1] Equation 4, and we adopt their modifications to
// alphaRoughness as input as originally proposed in [2].
fn geometricOcclusion(pbrInfo: PBRInfo) -> f32 {
  let NdotL: f32 = pbrInfo.NdotL;
  let NdotV: f32 = pbrInfo.NdotV;
  let r: f32 = pbrInfo.alphaRoughness;

  let attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
  let attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
  return attenuationL * attenuationV;
}

// The following equation(s) model the distribution of microfacet normals across
// the area being drawn (aka D())
// Implementation from "Average Irregularity Representation of a Roughened Surface
// for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
// Follows the distribution function recommended in the SIGGRAPH 2013 course notes
// from EPIC Games [1], Equation 3.
fn microfacetDistribution(pbrInfo: PBRInfo) -> f32 {
  let roughnessSq = pbrInfo.alphaRoughness * pbrInfo.alphaRoughness;
  let f = (pbrInfo.NdotH * roughnessSq - pbrInfo.NdotH) * pbrInfo.NdotH + 1.0;
  return roughnessSq / (M_PI * f * f);
}

fn maxComponent(value: vec3f) -> f32 {
  return max(max(value.r, value.g), value.b);
}

fn getDielectricF0(ior: f32) -> f32 {
  let clampedIor = max(ior, 1.0);
  let ratio = (clampedIor - 1.0) / (clampedIor + 1.0);
  return ratio * ratio;
}

fn normalizeDirection(direction: vec2f) -> vec2f {
  let directionLength = length(direction);
  if (directionLength > 0.0001) {
    return direction / directionLength;
  }

  return vec2f(1.0, 0.0);
}

fn rotateDirection(direction: vec2f, rotation: f32) -> vec2f {
  let s = sin(rotation);
  let c = cos(rotation);
  return vec2f(direction.x * c - direction.y * s, direction.x * s + direction.y * c);
}

fn encodeLinearSRGB(linearColor: vec3f) -> vec3f {
  let positiveColor = max(linearColor, vec3f(0.0));
  return select(
    positiveColor * 12.92,
    1.055 * pow(positiveColor, vec3f(1.0 / 2.4)) - 0.055,
    positiveColor > vec3f(0.0031308)
  );
}

fn toneMapKhronosPBRNeutral(inputColor: vec3f) -> vec3f {
  let startCompression = 0.76;
  let darkestChannel = min(inputColor.r, min(inputColor.g, inputColor.b));
  let offset = select(
    0.04,
    darkestChannel - 6.25 * darkestChannel * darkestChannel,
    darkestChannel < 0.08
  );
  var color = inputColor - vec3f(offset);
  let peak = maxComponent(color);
  if (peak < startCompression) {
    return color;
  }

  let compressionRange = 1.0 - startCompression;
  let compressedPeak = 1.0 - compressionRange * compressionRange /
    (peak + compressionRange - startCompression);
  color *= compressedPeak / max(peak, 0.0001);
  let desaturation = 1.0 - 1.0 / (0.15 * (peak - compressedPeak) + 1.0);
  return mix(color, vec3f(compressedPeak), desaturation);
}

fn applySceneColorManagement(sceneColor: vec3f) -> vec3f {
#ifdef USE_SCENE_COLOR_MANAGEMENT
  var color = max(sceneColor, vec3f(0.0)) * max(pbrScene.exposure, 0.0);
  if (pbrScene.toneMapMode == 1) {
    color /= vec3f(1.0) + color;
  } else if (pbrScene.toneMapMode == 2) {
    color = toneMapKhronosPBRNeutral(color);
  } else if (pbrScene.toneMapMode == 3) {
    color = clamp(
      (color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14),
      vec3f(0.0),
      vec3f(1.0)
    );
  }
  if (pbrScene.outputEncoding == 0) {
    return color;
  }
  return encodeLinearSRGB(color);
#else
  return pow(max(sceneColor, vec3f(0.0)), vec3f(1.0 / 2.2));
#endif
}

fn dielectricSchlick(reflectance: f32, cosine: f32) -> f32 {
  return reflectance + (1.0 - reflectance) * pow(clamp(1.0 - cosine, 0.0, 1.0), 5.0);
}

fn evaluateIridescenceSensitivity(opticalPathDifference: f32, phaseShift: vec3f) -> vec3f {
  let phase = 2.0 * M_PI * opticalPathDifference * 1.0e-9;
  let sensitivity = vec3f(5.4856e-13, 4.4201e-13, 5.2481e-13);
  let position = vec3f(1.6810e6, 1.7953e6, 2.2084e6);
  let variance = vec3f(4.3278e9, 9.3046e9, 6.6121e9);
  var xyz = sensitivity * sqrt(2.0 * M_PI * variance) *
    cos(position * phase + phaseShift) * exp(-phase * phase * variance);
  xyz.x += 9.7470e-14 * sqrt(2.0 * M_PI * 4.5282e9) *
    cos(2.2399e6 * phase + phaseShift.x) * exp(-4.5282e9 * phase * phase);
  xyz /= 1.0685e-7;
  return mat3x3f(
    vec3f(3.2404542, -0.9692660, 0.0556434),
    vec3f(-1.5371385, 1.8760108, -0.2040259),
    vec3f(-0.4985314, 0.0415560, 1.0572252)
  ) * xyz;
}

fn getIridescenceTint(
  iridescence: f32,
  thickness: f32,
  NdotV: f32,
  baseReflectance: vec3f
) -> vec3f {
  if (iridescence <= 0.0 || thickness <= 0.0) {
    return baseReflectance;
  }

  let filmIor = max(pbrMaterial.iridescenceIor, 1.0);
  let sineSquared = (1.0 - NdotV * NdotV) / (filmIor * filmIor);
  let cosineSquared = 1.0 - sineSquared;
  if (cosineSquared <= 0.0) {
    return mix(baseReflectance, vec3f(1.0), iridescence);
  }
  let filmCosine = sqrt(cosineSquared);
  let firstInterfaceReflectance = dielectricSchlick(getDielectricF0(filmIor), NdotV);
  let transmittedEnergy = 1.0 - firstInterfaceReflectance;
  let squareRootReflectance = sqrt(clamp(baseReflectance, vec3f(0.0), vec3f(0.9999)));
  let baseIor = (vec3f(1.0) + squareRootReflectance) /
    (vec3f(1.0) - squareRootReflectance);
  var secondInterfaceF0 = (baseIor - vec3f(filmIor)) / (baseIor + vec3f(filmIor));
  secondInterfaceF0 *= secondInterfaceF0;
  let secondInterfaceReflectance = secondInterfaceF0 +
    (vec3f(1.0) - secondInterfaceF0) * pow(1.0 - filmCosine, 5.0);
  let phaseShift = vec3f(M_PI) + select(
    vec3f(0.0),
    vec3f(M_PI),
    baseIor < vec3f(filmIor)
  );
  let opticalPathDifference = 2.0 * filmIor * thickness * filmCosine;
  let combinedReflectance = clamp(
    firstInterfaceReflectance * secondInterfaceReflectance,
    vec3f(0.00001),
    vec3f(0.9999)
  );
  let recurringAmplitude = sqrt(combinedReflectance);
  let interfaceResponse = transmittedEnergy * transmittedEnergy * secondInterfaceReflectance /
    (vec3f(1.0) - combinedReflectance);
  var reflectedSpectrum = vec3f(firstInterfaceReflectance) + interfaceResponse;
  var harmonicAmplitude = interfaceResponse - vec3f(transmittedEnergy);
  for (var harmonic = 1; harmonic <= 2; harmonic++) {
    harmonicAmplitude *= recurringAmplitude;
    reflectedSpectrum += harmonicAmplitude * 2.0 * evaluateIridescenceSensitivity(
      f32(harmonic) * opticalPathDifference,
      f32(harmonic) * phaseShift
    );
  }
  return mix(baseReflectance, clamp(reflectedSpectrum, vec3f(0.0), vec3f(1.0)), iridescence);
}

fn getVolumeAttenuation(thickness: f32) -> vec3f {
  if (thickness <= 0.0) {
    return vec3f(1.0);
  }

  let attenuationCoefficient =
    -log(max(pbrMaterial.attenuationColor, vec3f(0.0001))) /
    max(pbrMaterial.attenuationDistance, 0.0001);
  return exp(-attenuationCoefficient * thickness);
}

// KHR_materials_volume_scatter is an active draft. This evaluates a local,
// thickness-aware single-scattering approximation rather than random walk.
fn getDiffuseTransmissionAttenuation(
  pbrInfo: PBRInfo,
  multiscatterColor: vec3f,
  thickness: f32
) -> vec3f {
  let volumeAttenuation = getVolumeAttenuation(thickness);
  let scatteringStrength = maxComponent(multiscatterColor);
  if (thickness <= 0.0 || scatteringStrength <= 0.0001) {
    return volumeAttenuation;
  }

  let anisotropy = clamp(pbrMaterial.scatterAnisotropy, -0.95, 0.95);
  let scatteringCosine = clamp(dot(-pbrInfo.v, pbrInfo.l), -1.0, 1.0);
  let phaseDenominator = max(
    1.0 + anisotropy * anisotropy - 2.0 * anisotropy * scatteringCosine,
    0.0001
  );
  let phaseWeight = clamp(
    (1.0 - anisotropy * anisotropy) / pow(phaseDenominator, 1.5),
    0.0,
    4.0
  );
  let scatteringDepth = thickness / max(pbrMaterial.attenuationDistance, 0.0001);
  let scatteringProbability = 1.0 - exp(-scatteringDepth);
  let scatteringColor = clamp(multiscatterColor, vec3f(0.0), vec3f(1.0));
  return mix(
    volumeAttenuation,
    volumeAttenuation * mix(vec3f(1.0), scatteringColor * phaseWeight, scatteringColor),
    scatteringProbability
  );
}

fn calculateDiffuseTransmissionLight(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  diffuseTransmissionColor: vec3f,
  diffuseTransmission: f32,
  multiscatterColor: vec3f,
  thickness: f32
) -> vec3f {
  let oppositeHemisphere = max(dot(-pbrInfo.n, pbrInfo.l), 0.0);
  if (oppositeHemisphere <= 0.0 || diffuseTransmission <= 0.0) {
    return vec3f(0.0);
  }

  let nonReflectedEnergy = vec3f(1.0) - clamp(pbrInfo.reflectance0, vec3f(0.0), vec3f(1.0));
  let attenuatedColor = getDiffuseTransmissionAttenuation(
    pbrInfo,
    multiscatterColor,
    thickness
  );
  return lightColor * diffuseTransmissionColor * nonReflectedEnergy *
    attenuatedColor * (diffuseTransmission * oppositeHemisphere / M_PI);
}

#ifdef USE_IBL
fn calculateDiffuseTransmissionIBL(
  pbrInfo: PBRInfo,
  diffuseTransmissionColor: vec3f,
  diffuseTransmission: f32,
  multiscatterColor: vec3f,
  thickness: f32
) -> vec3f {
  if (diffuseTransmission <= 0.0) {
    return vec3f(0.0);
  }

#ifdef USE_SCENE_ENVIRONMENT
  let rotationSine = sin(pbrScene.environmentRotation);
  let rotationCosine = cos(pbrScene.environmentRotation);
  let environmentRotation = mat2x2f(
    vec2f(rotationCosine, rotationSine),
    vec2f(-rotationSine, rotationCosine)
  );
  let rotatedNormal = environmentRotation * -pbrInfo.n.xz;
  let oppositeNormal = vec3f(rotatedNormal.x, -pbrInfo.n.y, rotatedNormal.y);
  let environmentColor = textureSampleLevel(
    pbr_diffuseEnvSampler,
    pbr_diffuseEnvSamplerSampler,
    oppositeNormal,
    0.0
  ).rgb * max(pbrScene.environmentIntensity, 0.0);
#else
  let environmentColor = SRGBtoLINEAR(
    textureSampleLevel(pbr_diffuseEnvSampler, pbr_diffuseEnvSamplerSampler, -pbrInfo.n, 0.0)
  ).rgb;
#endif
  let nonReflectedEnergy = vec3f(1.0) - clamp(pbrInfo.reflectance0, vec3f(0.0), vec3f(1.0));
  return environmentColor * diffuseTransmissionColor * nonReflectedEnergy *
    getDiffuseTransmissionAttenuation(pbrInfo, multiscatterColor, thickness) *
    diffuseTransmission * pbrMaterial.scaleIBLAmbient.x;
}
#endif

#ifdef USE_TRANSMISSION_FRAMEBUFFER
fn sampleTransmittedSceneColor(
  position: vec3f,
  normal: vec3f,
  viewDirection: vec3f,
  thickness: f32,
  perceptualRoughness: f32,
  indexOfRefraction: f32
) -> vec3f {
  let refractionDirection = refract(
    -viewDirection,
    normal,
    1.0 / max(indexOfRefraction, 1.0)
  );
  let refractedPosition = position + refractionDirection * thickness;
  let clipPosition = pbrScene.projectionMatrix *
    pbrScene.viewMatrix * vec4f(refractedPosition, 1.0);
  var textureCoordinate = clipPosition.xy / max(clipPosition.w, 0.0001) * 0.5 + 0.5;
  textureCoordinate.y = 1.0 - textureCoordinate.y;
  textureCoordinate = clamp(textureCoordinate, vec2f(0.001), vec2f(0.999));

  let blurRadius = perceptualRoughness * perceptualRoughness * 8.0 /
    max(pbrScene.framebufferSize, vec2f(1.0));
  var sceneColor = textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate,
    0.0
  ).rgb * 0.4;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate + vec2f(blurRadius.x, 0.0),
    0.0
  ).rgb * 0.15;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate - vec2f(blurRadius.x, 0.0),
    0.0
  ).rgb * 0.15;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate + vec2f(0.0, blurRadius.y),
    0.0
  ).rgb * 0.15;
  sceneColor += textureSampleLevel(
    pbr_transmissionFramebufferSampler,
    pbr_transmissionFramebufferSamplerSampler,
    textureCoordinate - vec2f(0.0, blurRadius.y),
    0.0
  ).rgb * 0.15;
  return max(sceneColor, vec3f(0.0));
}

fn getTransmittedSceneColor(
  position: vec3f,
  normal: vec3f,
  viewDirection: vec3f,
  thickness: f32,
  perceptualRoughness: f32
) -> vec3f {
  if (pbrMaterial.dispersion <= 0.0) {
    return sampleTransmittedSceneColor(
      position,
      normal,
      viewDirection,
      thickness,
      perceptualRoughness,
      pbrMaterial.ior
    );
  }

  let halfSpread = (max(pbrMaterial.ior, 1.0) - 1.0) * 0.025 * pbrMaterial.dispersion;
  let indicesOfRefraction = max(
    vec3f(pbrMaterial.ior - halfSpread, pbrMaterial.ior, pbrMaterial.ior + halfSpread),
    vec3f(1.0)
  );
  return vec3f(
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.r
    ).r,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.g
    ).g,
    sampleTransmittedSceneColor(
      position, normal, viewDirection, thickness, perceptualRoughness, indicesOfRefraction.b
    ).b
  );
}
#endif

fn createClearcoatPBRInfo(
  basePBRInfo: PBRInfo,
  clearcoatNormal: vec3f,
  clearcoatRoughness: f32
) -> PBRInfo {
  let perceptualRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
  let alphaRoughness = perceptualRoughness * perceptualRoughness;
  let NdotV = clamp(abs(dot(clearcoatNormal, basePBRInfo.v)), 0.001, 1.0);

  return PBRInfo(
    basePBRInfo.NdotL,
    NdotV,
    basePBRInfo.NdotH,
    basePBRInfo.LdotH,
    basePBRInfo.VdotH,
    perceptualRoughness,
    0.0,
    vec3f(0.04),
    vec3f(1.0),
    alphaRoughness,
    vec3f(0.0),
    vec3f(0.04),
    clearcoatNormal,
    basePBRInfo.v,
    basePBRInfo.l,
    basePBRInfo.h
  );
}

fn calculateClearcoatContribution(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  clearcoatNormal: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32
) -> vec3f {
  if (clearcoatFactor <= 0.0) {
    return vec3f(0.0);
  }

  let clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return calculateFinalColor(clearcoatPBRInfo, lightColor) * clearcoatFactor;
}

#ifdef USE_IBL
fn calculateClearcoatIBLContribution(
  pbrInfo: PBRInfo,
  clearcoatNormal: vec3f,
  reflection: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32
) -> vec3f {
  if (clearcoatFactor <= 0.0) {
    return vec3f(0.0);
  }

  let clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return getIBLContribution(clearcoatPBRInfo, clearcoatNormal, reflection) * clearcoatFactor;
}
#endif

fn calculateSheenContribution(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  sheenColor: vec3f,
  sheenRoughness: f32
) -> vec3f {
  if (maxComponent(sheenColor) <= 0.0) {
    return vec3f(0.0);
  }

  let alpha = max(sheenRoughness * sheenRoughness, 0.0001);
  let inverseAlpha = 1.0 / alpha;
  let sineSquared = max(1.0 - pbrInfo.NdotH * pbrInfo.NdotH, 0.0);
  let distribution = (2.0 + inverseAlpha) * pow(sineSquared, inverseAlpha * 0.5) /
    (2.0 * M_PI);
  let visibility = 1.0 / max(
    4.0 * (pbrInfo.NdotL + pbrInfo.NdotV - pbrInfo.NdotL * pbrInfo.NdotV),
    0.0001
  );
  return pbrInfo.NdotL * lightColor * sheenColor * distribution * visibility *
    (1.0 - pbrInfo.metalness);
}

fn calculateAnisotropicLightColor(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> vec3f {
  if (anisotropyStrength <= 0.0) {
    return calculateFinalColor(pbrInfo, lightColor);
  }

  let anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  let tangentRoughness = mix(
    pbrInfo.alphaRoughness,
    1.0,
    anisotropyStrength * anisotropyStrength
  );
  let bitangentRoughness = clamp(pbrInfo.alphaRoughness, 0.001, 1.0);
  let roughnessProduct = tangentRoughness * bitangentRoughness;
  let distributionVector = vec3f(
    bitangentRoughness * dot(anisotropyTangent, pbrInfo.h),
    tangentRoughness * dot(anisotropyBitangent, pbrInfo.h),
    roughnessProduct * pbrInfo.NdotH
  );
  let distributionFactor = roughnessProduct /
    max(dot(distributionVector, distributionVector), 0.000001);
  let distribution = roughnessProduct * distributionFactor * distributionFactor / M_PI;
  let viewMask = pbrInfo.NdotL * length(vec3f(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.v),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.v),
    pbrInfo.NdotV
  ));
  let lightMask = pbrInfo.NdotV * length(vec3f(
    tangentRoughness * dot(anisotropyTangent, pbrInfo.l),
    bitangentRoughness * dot(anisotropyBitangent, pbrInfo.l),
    pbrInfo.NdotL
  ));
  let visibility = clamp(0.5 / max(viewMask + lightMask, 0.000001), 0.0, 1.0);
  let fresnel = specularReflection(pbrInfo);
  let diffuseContribution = (vec3f(1.0) - fresnel) * diffuse(pbrInfo);
  return pbrInfo.NdotL * lightColor *
    (diffuseContribution + fresnel * distribution * visibility);
}

fn getAnisotropicReflection(
  pbrInfo: PBRInfo,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> vec3f {
  if (anisotropyStrength <= 0.0) {
    return -normalize(reflect(pbrInfo.v, pbrInfo.n));
  }
  let anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  var anisotropicNormal = normalize(cross(anisotropyBitangent, pbrInfo.v));
  anisotropicNormal = normalize(cross(anisotropicNormal, anisotropyBitangent));
  let bend = anisotropyStrength * (1.0 - pbrInfo.perceptualRoughness);
  return -normalize(reflect(pbrInfo.v, normalize(mix(pbrInfo.n, anisotropicNormal, bend))));
}

fn calculateMaterialLightColor(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  clearcoatNormal: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32,
  sheenColor: vec3f,
  sheenRoughness: f32,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> vec3f {
  var color = calculateAnisotropicLightColor(
    pbrInfo,
    lightColor,
    anisotropyTangent,
    anisotropyStrength
  );
  color += calculateClearcoatContribution(
    pbrInfo,
    lightColor,
    clearcoatNormal,
    clearcoatFactor,
    clearcoatRoughness
  );
  color += calculateSheenContribution(pbrInfo, lightColor, sheenColor, sheenRoughness);
  return color;
}

fn PBRInfo_setAmbientLight(pbrInfo: ptr<function, PBRInfo>) {
  (*pbrInfo).NdotL = 1.0;
  (*pbrInfo).NdotH = 0.0;
  (*pbrInfo).LdotH = 0.0;
  (*pbrInfo).VdotH = 1.0;
  (*pbrInfo).l = (*pbrInfo).n;
  (*pbrInfo).h = (*pbrInfo).n;
}

fn PBRInfo_setDirectionalLight(pbrInfo: ptr<function, PBRInfo>, lightDirection: vec3<f32>) {
  let n = (*pbrInfo).n;
  let v = (*pbrInfo).v;
  let l = normalize(lightDirection);             // Vector from surface point to light
  let h = normalize(l + v);                      // Half vector between both l and v

  (*pbrInfo).NdotL = clamp(dot(n, l), 0.001, 1.0);
  (*pbrInfo).NdotH = clamp(dot(n, h), 0.0, 1.0);
  (*pbrInfo).LdotH = clamp(dot(l, h), 0.0, 1.0);
  (*pbrInfo).VdotH = clamp(dot(v, h), 0.0, 1.0);
  (*pbrInfo).l = l;
  (*pbrInfo).h = h;
}

fn PBRInfo_setPointLight(pbrInfo: ptr<function, PBRInfo>, pointLight: PointLight) {
  let light_direction = normalize(pointLight.position - fragmentInputs.pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

fn PBRInfo_setSpotLight(pbrInfo: ptr<function, PBRInfo>, spotLight: SpotLight) {
  let light_direction = normalize(spotLight.position - fragmentInputs.pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

fn calculateFinalColor(pbrInfo: PBRInfo, lightColor: vec3<f32>) -> vec3<f32> {
  // Calculate the shading terms for the microfacet specular shading model
  let F = specularReflection(pbrInfo);
  let G = geometricOcclusion(pbrInfo);
  let D = microfacetDistribution(pbrInfo);

  // Calculation of analytical lighting contribution
  let diffuseContrib = (1.0 - F) * diffuse(pbrInfo);
  let specContrib = F * G * D / (4.0 * pbrInfo.NdotL * pbrInfo.NdotV);
  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)
  return pbrInfo.NdotL * lightColor * (diffuseContrib + specContrib);
}

fn pbr_filterColor(vertexColor: vec4<f32>) -> vec4<f32> {
  let baseColorUV = getMaterialUV(pbrMaterial.baseColorUVSet, pbrMaterial.baseColorUVTransform);
  let metallicRoughnessUV = getMaterialUV(
    pbrMaterial.metallicRoughnessUVSet,
    pbrMaterial.metallicRoughnessUVTransform
  );
  let normalUV = getMaterialUV(pbrMaterial.normalUVSet, pbrMaterial.normalUVTransform);
  let occlusionUV = getMaterialUV(pbrMaterial.occlusionUVSet, pbrMaterial.occlusionUVTransform);
  let emissiveUV = getMaterialUV(pbrMaterial.emissiveUVSet, pbrMaterial.emissiveUVTransform);
  let specularColorUV = getMaterialUV(
    pbrMaterial.specularColorUVSet,
    pbrMaterial.specularColorUVTransform
  );
  let specularIntensityUV = getMaterialUV(
    pbrMaterial.specularIntensityUVSet,
    pbrMaterial.specularIntensityUVTransform
  );
  let transmissionUV = getMaterialUV(
    pbrMaterial.transmissionUVSet,
    pbrMaterial.transmissionUVTransform
  );
  let thicknessUV = getMaterialUV(pbrMaterial.thicknessUVSet, pbrMaterial.thicknessUVTransform);
  let clearcoatUV = getMaterialUV(pbrMaterial.clearcoatUVSet, pbrMaterial.clearcoatUVTransform);
  let clearcoatRoughnessUV = getMaterialUV(
    pbrMaterial.clearcoatRoughnessUVSet,
    pbrMaterial.clearcoatRoughnessUVTransform
  );
  let clearcoatNormalUV = getMaterialUV(
    pbrMaterial.clearcoatNormalUVSet,
    pbrMaterial.clearcoatNormalUVTransform
  );
  let sheenColorUV = getMaterialUV(
    pbrMaterial.sheenColorUVSet,
    pbrMaterial.sheenColorUVTransform
  );
  let sheenRoughnessUV = getMaterialUV(
    pbrMaterial.sheenRoughnessUVSet,
    pbrMaterial.sheenRoughnessUVTransform
  );
  let iridescenceUV = getMaterialUV(
    pbrMaterial.iridescenceUVSet,
    pbrMaterial.iridescenceUVTransform
  );
  let iridescenceThicknessUV = getMaterialUV(
    pbrMaterial.iridescenceThicknessUVSet,
    pbrMaterial.iridescenceThicknessUVTransform
  );
  let anisotropyUV = getMaterialUV(
    pbrMaterial.anisotropyUVSet,
    pbrMaterial.anisotropyUVTransform
  );
  let diffuseTransmissionUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionUVSet,
    pbrMaterial.diffuseTransmissionUVTransform
  );
  let diffuseTransmissionColorUV = getMaterialUV(
    pbrMaterial.diffuseTransmissionColorUVSet,
    pbrMaterial.diffuseTransmissionColorUVTransform
  );
  let multiscatterColorUV = getMaterialUV(
    pbrMaterial.multiscatterColorUVSet,
    pbrMaterial.multiscatterColorUVTransform
  );

  // The albedo may be defined from a base texture or a flat color
  var baseColor: vec4<f32> = pbrMaterial.baseColorFactor * vertexColor;
  #ifdef HAS_BASECOLORMAP
  baseColor = SRGBtoLINEAR(
    textureSample(pbr_baseColorSampler, pbr_baseColorSamplerSampler, baseColorUV)
  ) * pbrMaterial.baseColorFactor * vertexColor;
  #endif

  #ifdef ALPHA_CUTOFF
  if (baseColor.a < pbrMaterial.alphaCutoff) {
    discard;
  }
  #endif

  var color = vec3<f32>(0.0, 0.0, 0.0);
  var transmission = 0.0;

  if (pbrMaterial.unlit != 0u) {
    color = baseColor.rgb;
  } else {
    // Metallic and Roughness material properties are packed together
    // In glTF, these factors can be specified by fixed scalar values
    // or from a metallic-roughness map
    var perceptualRoughness = pbrMaterial.metallicRoughnessValues.y;
    var metallic = pbrMaterial.metallicRoughnessValues.x;
    #ifdef HAS_METALROUGHNESSMAP
    // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
    // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
    let mrSample = textureSample(
      pbr_metallicRoughnessSampler,
      pbr_metallicRoughnessSamplerSampler,
      metallicRoughnessUV
    );
    perceptualRoughness = mrSample.g * perceptualRoughness;
    metallic = mrSample.b * metallic;
    #endif
    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
    metallic = clamp(metallic, 0.0, 1.0);
    let tbn = getTBN(normalUV);
    let n = getNormal(tbn, normalUV);                          // normal at surface point
    perceptualRoughness = widenSpecularRoughness(perceptualRoughness, n);
    let v = normalize(pbrProjection.camera - fragmentInputs.pbr_vPosition);  // Vector from surface point to camera
    let NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
    var useExtendedPBR = false;
    #ifdef USE_MATERIAL_EXTENSIONS
    useExtendedPBR =
      pbrMaterial.specularColorMapEnabled != 0 ||
      pbrMaterial.specularIntensityMapEnabled != 0 ||
      abs(pbrMaterial.specularIntensityFactor - 1.0) > 0.0001 ||
      maxComponent(abs(pbrMaterial.specularColorFactor - vec3f(1.0))) > 0.0001 ||
      abs(pbrMaterial.ior - 1.5) > 0.0001 ||
      pbrMaterial.dispersion > 0.0001 ||
      pbrMaterial.transmissionMapEnabled != 0 ||
      pbrMaterial.transmissionFactor > 0.0001 ||
      pbrMaterial.diffuseTransmissionMapEnabled != 0 ||
      pbrMaterial.diffuseTransmissionColorMapEnabled != 0 ||
      pbrMaterial.diffuseTransmissionFactor > 0.0001 ||
      pbrMaterial.multiscatterColorMapEnabled != 0 ||
      maxComponent(pbrMaterial.multiscatterColorFactor) > 0.0001 ||
      pbrMaterial.clearcoatMapEnabled != 0 ||
      pbrMaterial.clearcoatRoughnessMapEnabled != 0 ||
      pbrMaterial.clearcoatFactor > 0.0001 ||
      pbrMaterial.clearcoatRoughnessFactor > 0.0001 ||
      pbrMaterial.sheenColorMapEnabled != 0 ||
      pbrMaterial.sheenRoughnessMapEnabled != 0 ||
      maxComponent(pbrMaterial.sheenColorFactor) > 0.0001 ||
      pbrMaterial.sheenRoughnessFactor > 0.0001 ||
      pbrMaterial.iridescenceMapEnabled != 0 ||
      pbrMaterial.iridescenceFactor > 0.0001 ||
      abs(pbrMaterial.iridescenceIor - 1.3) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.x - 100.0) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.y - 400.0) > 0.0001 ||
      pbrMaterial.anisotropyMapEnabled != 0 ||
      pbrMaterial.anisotropyStrength > 0.0001 ||
      abs(pbrMaterial.anisotropyRotation) > 0.0001 ||
      length(pbrMaterial.anisotropyDirection - vec2f(1.0, 0.0)) > 0.0001;
    #endif

    if (!useExtendedPBR) {
      let alphaRoughness = perceptualRoughness * perceptualRoughness;

      let f0 = vec3<f32>(0.04);
      var diffuseColor = baseColor.rgb * (vec3<f32>(1.0) - f0);
      diffuseColor *= 1.0 - metallic;
      let specularColor = mix(f0, baseColor.rgb, metallic);

      let reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
      let reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
      let specularEnvironmentR0 = specularColor;
      let specularEnvironmentR90 = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
      let reflection = -normalize(reflect(v, n));

      var pbrInfo = PBRInfo(
        0.0, // NdotL
        NdotV,
        0.0, // NdotH
        0.0, // LdotH
        0.0, // VdotH
        perceptualRoughness,
        metallic,
        specularEnvironmentR0,
        specularEnvironmentR90,
        alphaRoughness,
        diffuseColor,
        specularColor,
        n,
        v,
        n,
        n
      );

      #ifdef USE_LIGHTS
      PBRInfo_setAmbientLight(&pbrInfo);
      color += calculateFinalColor(pbrInfo, lighting.ambientColor);

      for (var i = 0; i < lighting.directionalLightCount; i++) {
        if (i < lighting.directionalLightCount) {
          PBRInfo_setDirectionalLight(&pbrInfo, lighting_getDirectionalLight(i).direction);
          color += calculateFinalColor(pbrInfo, lighting_getDirectionalLight(i).color);
        }
      }

      for (var i = 0; i < lighting.pointLightCount; i++) {
        if (i < lighting.pointLightCount) {
          PBRInfo_setPointLight(&pbrInfo, lighting_getPointLight(i));
          let attenuation = getPointLightAttenuation(
            lighting_getPointLight(i),
            distance(lighting_getPointLight(i).position, fragmentInputs.pbr_vPosition)
          );
          color += calculateFinalColor(pbrInfo, lighting_getPointLight(i).color / attenuation);
        }
      }

      for (var i = 0; i < lighting.spotLightCount; i++) {
        if (i < lighting.spotLightCount) {
          PBRInfo_setSpotLight(&pbrInfo, lighting_getSpotLight(i));
          let attenuation = getSpotLightAttenuation(
            lighting_getSpotLight(i),
            fragmentInputs.pbr_vPosition
          );
          color += calculateFinalColor(pbrInfo, lighting_getSpotLight(i).color / attenuation);
        }
      }
      #endif

      #ifdef USE_IBL
      if (pbrMaterial.IBLenabled != 0) {
        color += getIBLContribution(pbrInfo, n, reflection);
      }
      #endif

      #ifdef HAS_OCCLUSIONMAP
      if (pbrMaterial.occlusionMapEnabled != 0) {
        let ao = textureSample(pbr_occlusionSampler, pbr_occlusionSamplerSampler, occlusionUV).r;
        color = mix(color, color * ao, pbrMaterial.occlusionStrength);
      }
      #endif

      var emissive = pbrMaterial.emissiveFactor;
      #ifdef HAS_EMISSIVEMAP
      if (pbrMaterial.emissiveMapEnabled != 0u) {
        emissive *= SRGBtoLINEAR(
          textureSample(pbr_emissiveSampler, pbr_emissiveSamplerSampler, emissiveUV)
        ).rgb;
      }
      #endif
      color += emissive * pbrMaterial.emissiveStrength;

      #ifdef PBR_DEBUG
      color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
      color = mix(color, vec3<f32>(metallic), pbrMaterial.scaleDiffBaseMR.z);
      color = mix(color, vec3<f32>(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
      #endif

      return vec4<f32>(applySceneColorManagement(color), baseColor.a);
    }

    var specularIntensity = pbrMaterial.specularIntensityFactor;
    #ifdef HAS_SPECULARINTENSITYMAP
    if (pbrMaterial.specularIntensityMapEnabled != 0) {
      specularIntensity *= textureSample(
        pbr_specularIntensitySampler,
        pbr_specularIntensitySamplerSampler,
        specularIntensityUV
      ).a;
    }
    #endif

    var specularFactor = pbrMaterial.specularColorFactor;
    #ifdef HAS_SPECULARCOLORMAP
    if (pbrMaterial.specularColorMapEnabled != 0) {
      specularFactor *= SRGBtoLINEAR(
        textureSample(
          pbr_specularColorSampler,
          pbr_specularColorSamplerSampler,
          specularColorUV
        )
      ).rgb;
    }
    #endif

    transmission = pbrMaterial.transmissionFactor;
    #ifdef HAS_TRANSMISSIONMAP
    if (pbrMaterial.transmissionMapEnabled != 0) {
      transmission *= textureSample(
        pbr_transmissionSampler,
        pbr_transmissionSamplerSampler,
        transmissionUV
      ).r;
    }
    #endif
    transmission = clamp(transmission * (1.0 - metallic), 0.0, 1.0);
    var thickness = max(pbrMaterial.thicknessFactor, 0.0);
    #ifdef HAS_THICKNESSMAP
    thickness *= textureSample(
      pbr_thicknessSampler,
      pbr_thicknessSamplerSampler,
      thicknessUV
    ).g;
    #endif

    var diffuseTransmission = clamp(pbrMaterial.diffuseTransmissionFactor, 0.0, 1.0);
    #ifdef HAS_DIFFUSETRANSMISSIONMAP
    if (pbrMaterial.diffuseTransmissionMapEnabled != 0) {
      diffuseTransmission *= textureSample(
        pbr_diffuseTransmissionSampler,
        pbr_diffuseTransmissionSamplerSampler,
        diffuseTransmissionUV
      ).a;
    }
    #endif
    diffuseTransmission *= (1.0 - metallic) * (1.0 - transmission);
    var diffuseTransmissionColor = pbrMaterial.diffuseTransmissionColorFactor;
    #ifdef HAS_DIFFUSETRANSMISSIONCOLORMAP
    if (pbrMaterial.diffuseTransmissionColorMapEnabled != 0) {
      diffuseTransmissionColor *= SRGBtoLINEAR(
        textureSample(
          pbr_diffuseTransmissionColorSampler,
          pbr_diffuseTransmissionColorSamplerSampler,
          diffuseTransmissionColorUV
        )
      ).rgb;
    }
    #endif
    var multiscatterColor = pbrMaterial.multiscatterColorFactor;
    #ifdef HAS_MULTISCATTERCOLORMAP
    if (pbrMaterial.multiscatterColorMapEnabled != 0) {
      multiscatterColor *= SRGBtoLINEAR(
        textureSample(
          pbr_multiscatterColorSampler,
          pbr_multiscatterColorSamplerSampler,
          multiscatterColorUV
        )
      ).rgb;
    }
    #endif

    var clearcoatFactor = pbrMaterial.clearcoatFactor;
    var clearcoatRoughness = pbrMaterial.clearcoatRoughnessFactor;
    #ifdef HAS_CLEARCOATMAP
    if (pbrMaterial.clearcoatMapEnabled != 0) {
      clearcoatFactor *= textureSample(
        pbr_clearcoatSampler,
        pbr_clearcoatSamplerSampler,
        clearcoatUV
      ).r;
    }
    #endif
    #ifdef HAS_CLEARCOATROUGHNESSMAP
    if (pbrMaterial.clearcoatRoughnessMapEnabled != 0) {
      clearcoatRoughness *= textureSample(
        pbr_clearcoatRoughnessSampler,
        pbr_clearcoatRoughnessSamplerSampler,
        clearcoatRoughnessUV
      ).g;
    }
    #endif
    clearcoatFactor = clamp(clearcoatFactor, 0.0, 1.0);
    clearcoatRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
    let clearcoatNormal = getClearcoatNormal(getTBN(clearcoatNormalUV), n, clearcoatNormalUV);
    clearcoatRoughness = widenSpecularRoughness(clearcoatRoughness, clearcoatNormal);

    var sheenColor = pbrMaterial.sheenColorFactor;
    var sheenRoughness = pbrMaterial.sheenRoughnessFactor;
    #ifdef HAS_SHEENCOLORMAP
    if (pbrMaterial.sheenColorMapEnabled != 0) {
      sheenColor *= SRGBtoLINEAR(
        textureSample(
          pbr_sheenColorSampler,
          pbr_sheenColorSamplerSampler,
          sheenColorUV
        )
      ).rgb;
    }
    #endif
    #ifdef HAS_SHEENROUGHNESSMAP
    if (pbrMaterial.sheenRoughnessMapEnabled != 0) {
      sheenRoughness *= textureSample(
        pbr_sheenRoughnessSampler,
        pbr_sheenRoughnessSamplerSampler,
        sheenRoughnessUV
      ).a;
    }
    #endif
    sheenRoughness = clamp(sheenRoughness, c_MinRoughness, 1.0);

    var iridescence = pbrMaterial.iridescenceFactor;
    #ifdef HAS_IRIDESCENCEMAP
    if (pbrMaterial.iridescenceMapEnabled != 0) {
      iridescence *= textureSample(
        pbr_iridescenceSampler,
        pbr_iridescenceSamplerSampler,
        iridescenceUV
      ).r;
    }
    #endif
    iridescence = clamp(iridescence, 0.0, 1.0);
    var iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      0.5
    );
    #ifdef HAS_IRIDESCENCETHICKNESSMAP
    iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      textureSample(
        pbr_iridescenceThicknessSampler,
        pbr_iridescenceThicknessSamplerSampler,
        iridescenceThicknessUV
      ).g
    );
    #endif

    var anisotropyStrength = clamp(pbrMaterial.anisotropyStrength, 0.0, 1.0);
    var anisotropyDirection = normalizeDirection(pbrMaterial.anisotropyDirection);
    #ifdef HAS_ANISOTROPYMAP
    if (pbrMaterial.anisotropyMapEnabled != 0) {
      let anisotropySample = textureSample(
        pbr_anisotropySampler,
        pbr_anisotropySamplerSampler,
        anisotropyUV
      ).rgb;
      anisotropyStrength *= anisotropySample.b;
      let mappedDirection = anisotropySample.rg * 2.0 - 1.0;
      if (length(mappedDirection) > 0.0001) {
        anisotropyDirection = normalize(mappedDirection);
      }
    }
    #endif
    anisotropyDirection = rotateDirection(anisotropyDirection, pbrMaterial.anisotropyRotation);
    var anisotropyTangent =
      normalize(tbn[0] * anisotropyDirection.x + tbn[1] * anisotropyDirection.y);
    if (length(anisotropyTangent) < 0.0001) {
      anisotropyTangent = normalize(tbn[0]);
    }
    // Roughness is authored as perceptual roughness; as is convention,
    // convert to material roughness by squaring the perceptual roughness [2].
    let alphaRoughness = perceptualRoughness * perceptualRoughness;

    let dielectricF0 = getDielectricF0(pbrMaterial.ior);
    var dielectricSpecularF0 = min(
      vec3f(dielectricF0) * specularFactor * specularIntensity,
      vec3f(1.0)
    );
    dielectricSpecularF0 = getIridescenceTint(
      iridescence,
      iridescenceThickness,
      NdotV,
      dielectricSpecularF0
    );
    var diffuseColor = baseColor.rgb * (vec3f(1.0) - dielectricSpecularF0);
    diffuseColor *= (1.0 - metallic) * (1.0 - transmission) * (1.0 - diffuseTransmission);
    var specularColor = mix(dielectricSpecularF0, baseColor.rgb, metallic);

    let clearcoatViewFresnel = dielectricSchlick(
      0.04,
      clamp(abs(dot(clearcoatNormal, v)), 0.0, 1.0)
    );
    let sheenDirectionalAlbedo = maxComponent(sheenColor) *
      (0.157 + 0.343 * (1.0 - NdotV)) * (1.0 - sheenRoughness * 0.5);
    let baseLayerEnergy = (1.0 - clearcoatFactor * clearcoatViewFresnel) *
      (1.0 - clamp(sheenDirectionalAlbedo, 0.0, 1.0));
    diffuseColor *= baseLayerEnergy;
    specularColor *= baseLayerEnergy;

    // Compute reflectance.
    let reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

    // For typical incident reflectance range (between 4% to 100%) set the grazing
    // reflectance to 100% for typical fresnel effect.
    // For very low reflectance range on highly diffuse objects (below 4%),
    // incrementally reduce grazing reflectance to 0%.
    let reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
    let specularEnvironmentR0 = specularColor;
    let specularEnvironmentR90 = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
    let reflection = -normalize(reflect(v, n));

    var pbrInfo = PBRInfo(
      0.0, // NdotL
      NdotV,
      0.0, // NdotH
      0.0, // LdotH
      0.0, // VdotH
      perceptualRoughness,
      metallic,
      specularEnvironmentR0,
      specularEnvironmentR90,
      alphaRoughness,
      diffuseColor,
      specularColor,
      n,
      v,
      n,
      n
    );

    #ifdef USE_LIGHTS
    // Apply ambient light
    PBRInfo_setAmbientLight(&pbrInfo);
    color += calculateMaterialLightColor(
      pbrInfo,
      lighting.ambientColor,
      clearcoatNormal,
      clearcoatFactor,
      clearcoatRoughness,
      sheenColor,
      sheenRoughness,
      anisotropyTangent,
      anisotropyStrength
    );

    // Apply directional light
    for (var i = 0; i < lighting.directionalLightCount; i++) {
      if (i < lighting.directionalLightCount) {
        PBRInfo_setDirectionalLight(&pbrInfo, lighting_getDirectionalLight(i).direction);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    // Apply point light
    for (var i = 0; i < lighting.pointLightCount; i++) {
      if (i < lighting.pointLightCount) {
        PBRInfo_setPointLight(&pbrInfo, lighting_getPointLight(i));
        let attenuation = getPointLightAttenuation(
          lighting_getPointLight(i),
          distance(lighting_getPointLight(i).position, fragmentInputs.pbr_vPosition)
        );
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }

    for (var i = 0; i < lighting.spotLightCount; i++) {
      if (i < lighting.spotLightCount) {
        PBRInfo_setSpotLight(&pbrInfo, lighting_getSpotLight(i));
        let attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), fragmentInputs.pbr_vPosition);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
        color += calculateDiffuseTransmissionLight(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          diffuseTransmissionColor,
          diffuseTransmission,
          multiscatterColor,
          thickness
        );
      }
    }
    #endif

    // Calculate lighting contribution from image based lighting source (IBL)
    #ifdef USE_IBL
    if (pbrMaterial.IBLenabled != 0) {
      color += getIBLContribution(
        pbrInfo,
        n,
        getAnisotropicReflection(pbrInfo, anisotropyTangent, anisotropyStrength)
      );
      color += calculateClearcoatIBLContribution(
        pbrInfo,
        clearcoatNormal,
        -normalize(reflect(v, clearcoatNormal)),
        clearcoatFactor,
        clearcoatRoughness
      );
      color += calculateDiffuseTransmissionIBL(
        pbrInfo,
        diffuseTransmissionColor,
        diffuseTransmission,
        multiscatterColor,
        thickness
      );
      color += sheenColor * pbrMaterial.scaleIBLAmbient.x * (1.0 - sheenRoughness) * 0.25;
    }
    #endif

    // Apply optional PBR terms for additional (optional) shading
    #ifdef HAS_OCCLUSIONMAP
    if (pbrMaterial.occlusionMapEnabled != 0) {
      let ao = textureSample(pbr_occlusionSampler, pbr_occlusionSamplerSampler, occlusionUV).r;
      color = mix(color, color * ao, pbrMaterial.occlusionStrength);
    }
    #endif

    var emissive = pbrMaterial.emissiveFactor;
    #ifdef HAS_EMISSIVEMAP
    if (pbrMaterial.emissiveMapEnabled != 0u) {
      emissive *= SRGBtoLINEAR(
        textureSample(pbr_emissiveSampler, pbr_emissiveSamplerSampler, emissiveUV)
      ).rgb;
    }
    #endif
    color += emissive * pbrMaterial.emissiveStrength;

    if (transmission > 0.0) {
      #ifdef USE_TRANSMISSION_FRAMEBUFFER
      let dielectricFresnel = getDielectricF0(pbrMaterial.ior);
      let transmissionFresnel = dielectricFresnel +
        (1.0 - dielectricFresnel) * pow(1.0 - NdotV, 5.0);
      let transmittedColor = getTransmittedSceneColor(
        fragmentInputs.pbr_vPosition,
        n,
        v,
        thickness,
        perceptualRoughness
      );
      color += transmittedColor * getVolumeAttenuation(thickness) *
        transmission * (1.0 - transmissionFresnel);
      #else
      color = mix(color, color * getVolumeAttenuation(thickness), transmission);
      #endif
    }

    // This section uses mix to override final color for reference app visualization
    // of various parameters in the lighting equation.
    #ifdef PBR_DEBUG
    // TODO: Figure out how to debug multiple lights

    // color = mix(color, F, pbr_scaleFGDSpec.x);
    // color = mix(color, vec3(G), pbr_scaleFGDSpec.y);
    // color = mix(color, vec3(D), pbr_scaleFGDSpec.z);
    // color = mix(color, specContrib, pbr_scaleFGDSpec.w);

    // color = mix(color, diffuseContrib, pbr_scaleDiffBaseMR.x);
    color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
    color = mix(color, vec3<f32>(metallic), pbrMaterial.scaleDiffBaseMR.z);
    color = mix(color, vec3<f32>(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
    #endif
  }

  #ifdef USE_TRANSMISSION_FRAMEBUFFER
  let alpha = clamp(baseColor.a, 0.0, 1.0);
  #else
  let alpha = clamp(baseColor.a * (1.0 - transmission), 0.0, 1.0);
  #endif
  return vec4<f32>(applySceneColorManagement(color), alpha);
}
`,er=`layout(std140) uniform pbrProjectionUniforms {
  mat4 modelViewProjectionMatrix;
  mat4 modelMatrix;
  mat4 normalMatrix;
  vec3 camera;
} pbrProjection;
`,ee={props:{},uniforms:{},defaultUniforms:{unlit:!1,baseColorMapEnabled:!1,baseColorFactor:[1,1,1,1],normalMapEnabled:!1,normalScale:1,emissiveMapEnabled:!1,emissiveFactor:[0,0,0],metallicRoughnessValues:[1,1],metallicRoughnessMapEnabled:!1,occlusionMapEnabled:!1,occlusionStrength:1,alphaCutoffEnabled:!1,alphaCutoff:.5,IBLenabled:!1,scaleIBLAmbient:[1,1],scaleDiffBaseMR:[0,0,0,0],scaleFGDSpec:[0,0,0,0],specularColorFactor:[1,1,1],specularIntensityFactor:1,specularColorMapEnabled:!1,specularIntensityMapEnabled:!1,ior:1.5,transmissionFactor:0,transmissionMapEnabled:!1,thicknessFactor:0,attenuationDistance:1e9,attenuationColor:[1,1,1],clearcoatFactor:0,clearcoatRoughnessFactor:0,clearcoatMapEnabled:!1,clearcoatRoughnessMapEnabled:!1,sheenColorFactor:[0,0,0],sheenRoughnessFactor:0,sheenColorMapEnabled:!1,sheenRoughnessMapEnabled:!1,iridescenceFactor:0,iridescenceIor:1.3,iridescenceThicknessRange:[100,400],iridescenceMapEnabled:!1,anisotropyStrength:0,anisotropyRotation:0,anisotropyDirection:[1,0],anisotropyMapEnabled:!1,emissiveStrength:1,dispersion:0,baseColorUVSet:0,baseColorUVTransform:[1,0,0,0,1,0,0,0,1],metallicRoughnessUVSet:0,metallicRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],normalUVSet:0,normalUVTransform:[1,0,0,0,1,0,0,0,1],occlusionUVSet:0,occlusionUVTransform:[1,0,0,0,1,0,0,0,1],emissiveUVSet:0,emissiveUVTransform:[1,0,0,0,1,0,0,0,1],specularColorUVSet:0,specularColorUVTransform:[1,0,0,0,1,0,0,0,1],specularIntensityUVSet:0,specularIntensityUVTransform:[1,0,0,0,1,0,0,0,1],transmissionUVSet:0,transmissionUVTransform:[1,0,0,0,1,0,0,0,1],thicknessUVSet:0,thicknessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatUVSet:0,clearcoatUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatRoughnessUVSet:0,clearcoatRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatNormalUVSet:0,clearcoatNormalUVTransform:[1,0,0,0,1,0,0,0,1],sheenColorUVSet:0,sheenColorUVTransform:[1,0,0,0,1,0,0,0,1],sheenRoughnessUVSet:0,sheenRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceUVSet:0,iridescenceUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceThicknessUVSet:0,iridescenceThicknessUVTransform:[1,0,0,0,1,0,0,0,1],anisotropyUVSet:0,anisotropyUVTransform:[1,0,0,0,1,0,0,0,1],bumpFactor:1,bumpMapEnabled:!1,diffuseTransmissionFactor:0,diffuseTransmissionMapEnabled:!1,diffuseTransmissionColorFactor:[1,1,1],diffuseTransmissionColorMapEnabled:!1,multiscatterColorFactor:[0,0,0],multiscatterColorMapEnabled:!1,scatterAnisotropy:0,bumpUVSet:0,bumpUVTransform:[1,0,0,0,1,0,0,0,1],diffuseTransmissionUVSet:0,diffuseTransmissionUVTransform:[1,0,0,0,1,0,0,0,1],diffuseTransmissionColorUVSet:0,diffuseTransmissionColorUVTransform:[1,0,0,0,1,0,0,0,1],multiscatterColorUVSet:0,multiscatterColorUVTransform:[1,0,0,0,1,0,0,0,1]},name:"pbrMaterial",firstBindingSlot:0,bindingLayout:[{name:"pbrMaterial",group:3},{name:"pbr_baseColorSampler",group:3},{name:"pbr_normalSampler",group:3},{name:"pbr_emissiveSampler",group:3},{name:"pbr_metallicRoughnessSampler",group:3},{name:"pbr_occlusionSampler",group:3},{name:"pbr_specularColorSampler",group:3},{name:"pbr_specularIntensitySampler",group:3},{name:"pbr_transmissionSampler",group:3},{name:"pbr_thicknessSampler",group:3},{name:"pbr_clearcoatSampler",group:3},{name:"pbr_clearcoatRoughnessSampler",group:3},{name:"pbr_clearcoatNormalSampler",group:3},{name:"pbr_sheenColorSampler",group:3},{name:"pbr_sheenRoughnessSampler",group:3},{name:"pbr_iridescenceSampler",group:3},{name:"pbr_iridescenceThicknessSampler",group:3},{name:"pbr_anisotropySampler",group:3},{name:"pbr_bumpSampler",group:3},{name:"pbr_diffuseTransmissionSampler",group:3},{name:"pbr_diffuseTransmissionColorSampler",group:3},{name:"pbr_multiscatterColorSampler",group:3}],dependencies:[Xt,Co,{name:"pbrProjection",bindingLayout:[{name:"pbrProjection",group:0}],source:`struct pbrProjectionUniforms {
  modelViewProjectionMatrix: mat4x4<f32>,
  modelMatrix: mat4x4<f32>,
  normalMatrix: mat4x4<f32>,
  camera: vec3<f32>
};

@group(0) @binding(auto) var<uniform> pbrProjection: pbrProjectionUniforms;
`,vs:er,fs:er,getUniforms:e=>e,uniformTypes:{modelViewProjectionMatrix:"mat4x4<f32>",modelMatrix:"mat4x4<f32>",normalMatrix:"mat4x4<f32>",camera:"vec3<f32>"}}],source:_o,vs:vo,fs:Bo,defines:{LIGHTING_FRAGMENT:!0,HAS_NORMALMAP:!1,HAS_EMISSIVEMAP:!1,HAS_OCCLUSIONMAP:!1,HAS_BASECOLORMAP:!1,HAS_METALROUGHNESSMAP:!1,HAS_SPECULARCOLORMAP:!1,HAS_SPECULARINTENSITYMAP:!1,HAS_TRANSMISSIONMAP:!1,HAS_THICKNESSMAP:!1,HAS_CLEARCOATMAP:!1,HAS_CLEARCOATROUGHNESSMAP:!1,HAS_CLEARCOATNORMALMAP:!1,HAS_SHEENCOLORMAP:!1,HAS_SHEENROUGHNESSMAP:!1,HAS_IRIDESCENCEMAP:!1,HAS_IRIDESCENCETHICKNESSMAP:!1,HAS_ANISOTROPYMAP:!1,HAS_BUMPMAP:!1,HAS_DIFFUSETRANSMISSIONMAP:!1,HAS_DIFFUSETRANSMISSIONCOLORMAP:!1,HAS_MULTISCATTERCOLORMAP:!1,USE_MATERIAL_EXTENSIONS:!1,ALPHA_CUTOFF:!1,USE_IBL:!1,PBR_DEBUG:!1},getUniforms:e=>e,uniformTypes:{unlit:"i32",baseColorMapEnabled:"i32",baseColorFactor:"vec4<f32>",normalMapEnabled:"i32",normalScale:"f32",emissiveMapEnabled:"i32",emissiveFactor:"vec3<f32>",metallicRoughnessValues:"vec2<f32>",metallicRoughnessMapEnabled:"i32",occlusionMapEnabled:"i32",occlusionStrength:"f32",alphaCutoffEnabled:"i32",alphaCutoff:"f32",specularColorFactor:"vec3<f32>",specularIntensityFactor:"f32",specularColorMapEnabled:"i32",specularIntensityMapEnabled:"i32",ior:"f32",transmissionFactor:"f32",transmissionMapEnabled:"i32",thicknessFactor:"f32",attenuationDistance:"f32",attenuationColor:"vec3<f32>",clearcoatFactor:"f32",clearcoatRoughnessFactor:"f32",clearcoatMapEnabled:"i32",clearcoatRoughnessMapEnabled:"i32",sheenColorFactor:"vec3<f32>",sheenRoughnessFactor:"f32",sheenColorMapEnabled:"i32",sheenRoughnessMapEnabled:"i32",iridescenceFactor:"f32",iridescenceIor:"f32",iridescenceThicknessRange:"vec2<f32>",iridescenceMapEnabled:"i32",anisotropyStrength:"f32",anisotropyRotation:"f32",anisotropyDirection:"vec2<f32>",anisotropyMapEnabled:"i32",emissiveStrength:"f32",dispersion:"f32",IBLenabled:"i32",scaleIBLAmbient:"vec2<f32>",scaleDiffBaseMR:"vec4<f32>",scaleFGDSpec:"vec4<f32>",baseColorUVSet:"i32",baseColorUVTransform:"mat3x3<f32>",metallicRoughnessUVSet:"i32",metallicRoughnessUVTransform:"mat3x3<f32>",normalUVSet:"i32",normalUVTransform:"mat3x3<f32>",occlusionUVSet:"i32",occlusionUVTransform:"mat3x3<f32>",emissiveUVSet:"i32",emissiveUVTransform:"mat3x3<f32>",specularColorUVSet:"i32",specularColorUVTransform:"mat3x3<f32>",specularIntensityUVSet:"i32",specularIntensityUVTransform:"mat3x3<f32>",transmissionUVSet:"i32",transmissionUVTransform:"mat3x3<f32>",thicknessUVSet:"i32",thicknessUVTransform:"mat3x3<f32>",clearcoatUVSet:"i32",clearcoatUVTransform:"mat3x3<f32>",clearcoatRoughnessUVSet:"i32",clearcoatRoughnessUVTransform:"mat3x3<f32>",clearcoatNormalUVSet:"i32",clearcoatNormalUVTransform:"mat3x3<f32>",sheenColorUVSet:"i32",sheenColorUVTransform:"mat3x3<f32>",sheenRoughnessUVSet:"i32",sheenRoughnessUVTransform:"mat3x3<f32>",iridescenceUVSet:"i32",iridescenceUVTransform:"mat3x3<f32>",iridescenceThicknessUVSet:"i32",iridescenceThicknessUVTransform:"mat3x3<f32>",anisotropyUVSet:"i32",anisotropyUVTransform:"mat3x3<f32>",bumpFactor:"f32",bumpMapEnabled:"i32",diffuseTransmissionFactor:"f32",diffuseTransmissionMapEnabled:"i32",diffuseTransmissionColorFactor:"vec3<f32>",diffuseTransmissionColorMapEnabled:"i32",multiscatterColorFactor:"vec3<f32>",multiscatterColorMapEnabled:"i32",scatterAnisotropy:"f32",bumpUVSet:"i32",bumpUVTransform:"mat3x3<f32>",diffuseTransmissionUVSet:"i32",diffuseTransmissionUVTransform:"mat3x3<f32>",diffuseTransmissionColorUVSet:"i32",diffuseTransmissionColorUVTransform:"mat3x3<f32>",multiscatterColorUVSet:"i32",multiscatterColorUVTransform:"mat3x3<f32>"}},Mo=class{name;playing=!0;speed=1;startTime=0;constructor(e={}){this.name=e.name||"unnamed",Object.assign(this,e)}setTime(e){if(!this.playing)return;const t=(e/1e3-this.startTime)*this.speed;this.applyTime(t)}},So=class{clips;animations;constructor(e){this.clips=e,this.animations=e}animate(e){M.warn(`${this.constructor.name}#animate is deprecated. Use ${this.constructor.name}#setTime instead`)(),this.setTime(e)}setTime(e){this.clips.forEach(t=>t.setTime(e))}getAnimations(){return this.clips}};function Io(e,t,r="vector"){const{input:n,output:o,interpolation:i="LINEAR"}=t;if(!n.length||!o.length||!Number.isFinite(e))return null;const s=n.length-1;if(e<=n[0]||s===0)return st(o,i,0,r);if(e>=n[s])return st(o,i,s,r);let a=0,c=s;for(;c-a>1;){const m=Math.floor((a+c)/2);n[m]<=e?a=m:c=m}const l=n[a],u=n[c]-l;if(u<=0||i==="STEP")return st(o,i,a,r);const f=(e-l)/u;switch(i){case"LINEAR":{const m=o[a],h=o[c];return!m||!h?null:r==="quaternion"?it(m,h,f):To(m,h,f)}case"CUBICSPLINE":{const m=o[a*3+1],h=o[a*3+2],p=o[c*3],d=o[c*3+1];if(!m||!h||!p||!d)return null;const g=Ro(m,h,p,d,u,f);return r==="quaternion"?ae(g):g}default:return null}}function it(e,t,r){const n=ae(e),o=ae(t);let i=n.reduce((f,m,h)=>f+m*o[h],0);const s=i<0?-1:1;if(i=Math.min(Math.abs(i),1),i>.9995)return ae(n.map((f,m)=>f+r*(o[m]*s-f)));const a=Math.acos(i),c=Math.sin(a),l=Math.sin((1-r)*a)/c,u=Math.sin(r*a)/c*s;return ae(n.map((f,m)=>f*l+o[m]*u))}function st(e,t,r,n){const o=e[t==="CUBICSPLINE"?r*3+1:r];return o?n==="quaternion"?ae(o):[...o]:null}function To(e,t,r){return e.map((n,o)=>(1-r)*n+r*t[o])}function Ro(e,t,r,n,o,i){const s=i*i,a=s*i;return e.map((c,l)=>(2*a-3*s+1)*c+(a-2*s+i)*t[l]*o+(-2*a+3*s)*n[l]+(a-s)*r[l]*o)}function ae(e){const t=Math.hypot(...e);return t>0?e.map(r=>r/t):[0,0,0,1]}var at=class{name;times;values;interpolation;valueType;binding;constructor(e){this.name=e.name||e.binding.id||"unnamed",this.times=e.times,this.values=e.values,this.interpolation=e.interpolation||"LINEAR",this.valueType=e.valueType||"vector",this.binding=e.binding}get duration(){return this.times[this.times.length-1]||0}get sampler(){return{input:this.times,output:this.values,interpolation:this.interpolation}}evaluate(e){return Io(e,this.sampler,this.valueType)}},xo=class{name;tracks;duration;constructor(e){this.name=e.name||"unnamed",this.tracks=e.tracks,this.duration=e.duration??Math.max(0,...e.tracks.map(t=>t.duration))}},yo=class{clip;mixer;time=0;timeScale;weight;loop;repetitions;paused=!1;playing=!1;elapsedTime=0;fade=null;constructor(e,t,r={}){this.mixer=e,this.clip=t,this.loop=r.loop||"repeat",this.repetitions=r.repetitions??Number.POSITIVE_INFINITY,this.timeScale=r.timeScale??1,this.weight=r.weight??1}play(){return this.playing=!0,this.paused=!1,this}pause(){return this.paused=!0,this}resume(){return this.playing=!0,this.paused=!1,this}stop(){return this.playing=!1,this.paused=!1,this.fade=null,this.reset()}reset(){return this.elapsedTime=0,this.time=0,this}setTime(e){return this.elapsedTime=e,this.time=this.resolveLocalTime(e),this}setLoop(e,t=Number.POSITIVE_INFINITY){return this.loop=e,this.repetitions=t,this.time=this.resolveLocalTime(this.elapsedTime),this}setEffectiveWeight(e){return this.weight=Math.max(0,e),this.fade=null,this}setEffectiveTimeScale(e){return this.timeScale=e,this}fadeIn(e){return this.scheduleFade(1,e)}fadeOut(e){return this.scheduleFade(0,e)}crossFadeTo(e,t){return e.weight=0,e.play().fadeIn(t),this.fadeOut(t)}crossFadeFrom(e,t){return e.crossFadeTo(this,t),this}advance(e){!this.playing||this.paused||(this.advanceFade(Math.abs(e)),this.elapsedTime+=e*this.timeScale,this.time=this.resolveLocalTime(this.elapsedTime),this.hasFinished()&&(this.playing=!1))}get shouldApply(){return(this.playing||this.hasFinished())&&this.weight>0}scheduleFade(e,t){return t<=0?(this.weight=e,this.fade=null,this):(this.fade={duration:t,elapsedTime:0,startWeight:this.weight,endWeight:e},this)}advanceFade(e){if(!this.fade)return;this.fade.elapsedTime+=e;const t=Math.min(this.fade.elapsedTime/this.fade.duration,1);this.weight=this.fade.startWeight+(this.fade.endWeight-this.fade.startWeight)*t,t===1&&(this.fade=null)}hasFinished(){const e=this.clip.duration;return e<=0?this.loop==="once":this.loop==="once"?this.elapsedTime>=e||this.elapsedTime<0:Number.isFinite(this.repetitions)&&Math.abs(this.elapsedTime)>=e*this.repetitions}resolveLocalTime(e){const t=this.clip.duration;if(t<=0)return 0;if(this.loop==="once")return Math.min(Math.max(e,0),t);if(Number.isFinite(this.repetitions)&&Math.abs(e)>=t*this.repetitions)return this.loop==="ping-pong"&&this.repetitions%2===0||e<0?0:t;const r=e>=0&&e<t?e:(e%t+t)%t;if(this.loop==="repeat")return r;const n=Math.floor(e/t);return Math.abs(n%2)===0?r:t-r}},tr=class{time=0;timeScale=1;clips=new Map;actions=new Map;initialValues=new Map;constructor(e=[]){e.forEach(t=>this.addClip(t))}addClip(e){return this.clips.set(e.name,e),this}clipAction(e,t){const r=typeof e=="string"?this.clips.get(e):e;if(!r)throw new Error(`Unknown animation clip: ${e}`);this.addClip(r);let n=this.actions.get(r);return n||(n=new yo(this,r,t),this.actions.set(r,n)),n}getAction(e){const t=this.clips.get(e);return t?this.actions.get(t):void 0}update(e){return this.advance(e),this.applyValues(),this}advance(e){const t=e*this.timeScale;return this.time+=t,this.actions.forEach(r=>r.advance(t)),this}setTime(e){return this.time=e,this.actions.forEach(t=>{t.paused||t.setTime(e*t.timeScale)}),this.applyValues(),this}stopAllAction(){return this.actions.forEach(e=>e.stop()),this}applyValues(){const e=new Map;this.actions.forEach(t=>{!t.shouldApply&&!(t.playing&&t.weight===0)||t.clip.tracks.forEach(r=>{const n=r.evaluate(t.time);if(!n)return;const o=r.binding.id||r.binding;if(!this.initialValues.has(o)){const c=r.binding.getValue?.();c&&this.initialValues.set(o,[...c])}if(t.weight===0&&!this.initialValues.has(o))return;const i=e.get(o);if(!i){e.set(o,{binding:r.binding,value:[...n],valueType:r.valueType,weight:t.weight});return}if(t.weight===0)return;const s=i.weight+t.weight,a=t.weight/s;i.value=r.valueType==="quaternion"?it(i.value,n,a):i.value.map((c,l)=>c+(n[l]-c)*a),i.weight=s})}),e.forEach(({binding:t,value:r,valueType:n,weight:o},i)=>{const s=o<1?this.initialValues.get(i):void 0;s&&s.length===r.length&&(r=n==="quaternion"?it(s,r,o):r.map((a,c)=>s[c]+(a-s[c])*o)),t.setValue(r)})}};function ct(e){const t=e.value;if(t instanceof Float32Array)return t;const r=new Float32Array(t.length),n=rr(t),o=t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array;for(let i=0;i<t.length;i++){const s=Number(t[i]);r[i]=e.normalized&&n?o?Math.max(s/n,-1):s/n:s}return r}function Eo(e,t,r){const n={};for(const o of["POSITION","NORMAL","TANGENT"]){const i=e[o];if(!i)continue;const s=new Float32Array(i),a=o==="TANGENT"?4:3,c=Math.floor(i.length/a);for(let l=0;l<Math.min(t.length,r.length);l++){const u=r[l],f=t[l][o];if(!u||!f)continue;const m=o==="TANGENT"&&f.length===c*4?4:3;for(let h=0;h<c;h++){const p=h*a,d=h*m;for(let g=0;g<3;g++)s[p+g]+=(f[d+g]||0)*u}}o!=="POSITION"&&Uo(s,a),n[o]=s}return n}function Fo(e,t,r,n){const o={};for(const u of["POSITION","NORMAL","TANGENT"]){const f=t.attributes[u];f&&(o[u]=ct(f))}const i=Eo(o,r,n),s={};for(const[u,f]of Object.entries(t.attributes))f&&(s[u]=f);for(const u of["POSITION","NORMAL","TANGENT"]){const f=i[u],m=s[u];f&&m&&(s[u]={...m,value:No(m,f)})}const a=new be({id:t.id,topology:t.topology||"triangle-list",vertexCount:t.vertexCount,indices:t.indices,attributes:s,bufferLayout:t.bufferLayout}),c=zn(a).attributes.geometry?.value,l=e._gpuGeometry?.attributes.geometry||e.bufferAttributes.geometry;if(c&&l){l.write(c);return}for(const u of["POSITION","NORMAL","TANGENT"]){const f=i[u];if(f){const m=u==="POSITION"?"positions":u==="NORMAL"?"normals":"TANGENT";e.bufferAttributes[m]?.write(f)}}}function No(e,t){if(e.value instanceof Float32Array)return t;const r=e.value.slice(),n=rr(r),o=r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array;for(let i=0;i<t.length;i++){const s=t[i];r[i]=e.normalized&&n?Math.round(Math.max(o?-1:0,Math.min(1,s))*n):s}return r}function rr(e){return e instanceof Int8Array?127:e instanceof Uint8Array||e instanceof Uint8ClampedArray?255:e instanceof Int16Array?32767:e instanceof Uint16Array?65535:e instanceof Int32Array?2147483647:e instanceof Uint32Array?4294967295:0}function Uo(e,t){for(let r=0;r<e.length;r+=t){const n=Math.hypot(e[r],e[r+1],e[r+2]);n>0&&(e[r]/=n,e[r+1]/=n,e[r+2]/=n)}}function Do(e){const{joints:t,meshNode:r,worldMatrices:n,inverseBindMatrices:o,target:i}=e,s=t.length,a=i&&i.length===s*16?i:new Float32Array(s*16),c=r?n.get(r)||r.matrix:void 0,l=c?new S(c).invert():null;for(let u=0;u<s;u++){const f=t[u],m=n.get(f)||f.matrix,h=l?new S(l).multiplyRight(m):new S(m),p=u*16;if(o&&o.length>=p+16){const d=new S;for(let g=0;g<16;g++)d[g]=o[p+g];h.multiplyRight(d)}a.set(h,p)}return a}var lt=class{device;modules;_materialBindingNames;_materialModuleNames;constructor(e,t={}){this.device=e,this.modules=t.modules||[];const r=new Ht(Object.fromEntries(this.modules.map(n=>[n.name,n])));this._materialBindingNames=Lo(r),this._materialModuleNames=Po(r)}createMaterial(e={}){return new Oo(this.device,{...e,factory:this})}getBindingNames(){return Array.from(this._materialBindingNames)}ownsBinding(e){if(this._materialBindingNames.has(e))return!0;const t=nr(e);return t?this._materialModuleNames.has(t):!1}ownsModule(e){return this._materialModuleNames.has(e)}getBindingsByGroup(e){return Object.keys(e).length>0?{3:e}:{}}};function nr(e){return e.endsWith("Uniforms")?e.slice(0,-8):null}function Lo(e){const t=new Set;for(const r of Object.values(e.modules))for(const n of r.bindingLayout||[])n.group===3&&t.add(n.name);return t}function Po(e){const t=new Set;for(const r of Object.values(e.modules))r.name&&r.bindingLayout?.some(n=>n.group===3&&n.name===r.name)&&t.add(r.name);return t}var Oo=class{id;device;factory;shaderInputs;bindings={};_uniformStore;_bindGroupCacheToken={};_dynamicResourceGenerations={};constructor(e,t={}){this.id=t.id||Ye("material"),this.device=e,this.factory=t.factory||new lt(e,{modules:t.modules||t.shaderInputs?.getModules()||[]});const r=Object.fromEntries((t.shaderInputs?.getModules()||this.factory.modules).map(n=>[n.name,n]));this.shaderInputs=t.shaderInputs||new Ht(r),this._uniformStore=new wn(this.device,this.shaderInputs.modules);for(const[n,o]of Object.entries(this.shaderInputs.modules))if(this.ownsModule(n)&&Pn(o)){const i=this._uniformStore.getManagedUniformBuffer(n);this.bindings[`${n}Uniforms`]=i}this.updateShaderInputs(),t.bindings&&this._replaceOwnedBindings(t.bindings)}destroy(){this._uniformStore.destroy()}clone(e={}){const t=this.factory.createMaterial({id:e.id,shaderInputs:e.shaderInputs,bindings:{...this.getResourceBindings(),...e.bindings}});return e.shaderInputs||t.setProps(this.shaderInputs.getUniformValues()),e.moduleProps&&t.setProps(e.moduleProps),t.updateShaderInputs(),t}ownsBinding(e){return this.factory.ownsBinding(e)}ownsModule(e){return this.factory.ownsModule(e)}setProps(e){this.shaderInputs.setProps(e)}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e),this._setOwnedBindings(this.shaderInputs.getBindingValues())&&(this._bindGroupCacheToken={})}getResourceBindings(){const e={};for(const[t,r]of Object.entries(this.bindings))nr(t)||(e[t]=r);return e}getBindings(e={bindings:[]}){this._syncDynamicResourceGenerations();const t={},r=t;for(const[n,o]of Object.entries(this.bindings))if(qe(o)){const i=Qn(e,n,{fallbackGroup:3}),s=i?o.resolveTextureBinding(i):null;s&&(r[n]=s)}else o instanceof $e?r[n]=o.buffer:Vt(o)?r[n]=On(o):r[n]=o;return this._syncDynamicResourceGenerations(),t}getBindingsByGroup(e={bindings:[]}){return this.factory.getBindingsByGroup(this.getBindings(e))}getBindGroupCacheKey(e){return this._syncDynamicResourceGenerations(),e===3?this._bindGroupCacheToken:null}getBindingsUpdateTimestamp(){let e=0;for(const t of Object.values(this.bindings))t instanceof zt?e=Math.max(e,t.texture.updateTimestamp):t instanceof V||t instanceof T||t instanceof Wn||t instanceof $e?e=Math.max(e,t.updateTimestamp):qe(t)?e=t.isReady?Math.max(e,t.updateTimestamp):1/0:Vt(t)&&(e=Math.max(e,(t.buffer instanceof $e,t.buffer.updateTimestamp)));return e}_replaceOwnedBindings(e){this._setOwnedBindings(e)&&(this._bindGroupCacheToken={})}_setOwnedBindings(e){let t=!1;for(const[r,n]of Object.entries(e))n!==void 0&&this.ownsBinding(r)&&this.bindings[r]!==n&&(this.bindings[r]=n,t=!0);return t}_syncDynamicResourceGenerations(){const e={};let t=!1;for(const[r,n]of Object.entries(this.bindings)){const o=wo(n);o!==null&&(e[r]=o,this._dynamicResourceGenerations[r]!==o&&(t=!0))}Object.keys(e).length!==Object.keys(this._dynamicResourceGenerations).length&&(t=!0),this._dynamicResourceGenerations=e,t&&(this._bindGroupCacheToken={})}};function wo(e){return qe(e)?e.generation:Ln(e)?.generation??null}var or={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function ve(e){return e?Array.isArray(e)?e[0]??null:e:null}function Go(e){const{dimension:t,data:r}=e;if(!r)return null;switch(t){case"1d":{const n=ve(r);if(!n)return null;const{width:o}=Be(n);return{width:o,height:1}}case"2d":{if(ArrayBuffer.isView(r))return null;const n=ve(r);return n?Be(n):null}case"3d":case"2d-array":{if(!Array.isArray(r)||r.length===0)return null;const n=ve(r[0]);return n?Be(n):null}case"cube":{const n=Object.keys(r)[0]??null;if(!n)return null;const o=r[n],i=ve(o);return i?Be(i):null}case"cube-array":{if(!Array.isArray(r)||r.length===0)return null;const n=r[0],o=Object.keys(n)[0]??null;if(!o)return null;const i=ve(n[o]);return i?Be(i):null}default:return null}}function Be(e){if(Gt(e))return Dn(e);if(typeof e=="object"&&"width"in e&&"height"in e)return{width:e.width,height:e.height};throw new Error("Unsupported mip-level data")}function Ho(e){return typeof e=="object"&&e!==null&&"data"in e&&"width"in e&&"height"in e}function Vo(e){return ArrayBuffer.isView(e)}function ir(e){const{textureFormat:t,format:r}=e;if(t&&r&&t!==r)throw new Error(`Conflicting texture formats "${t}" and "${r}" provided for the same mip level`);return t??r}function sr(e){const t=or[e];if(t===void 0)throw new Error(`Invalid cube face: ${e}`);return t}function Jo(e,t){return 6*e+sr(t)}function ar(e){throw new Error("setTexture1DData not supported in WebGL.")}function ko(e){return Array.isArray(e)?e:[e]}function ce(e,t,r,n){const o=ko(t),i=e,s=[];for(let a=0;a<o.length;a++){const c=o[a];if(Gt(c))s.push({type:"external-image",image:c,z:i,mipLevel:a});else if(Ho(c))s.push({type:"texture-data",data:c,textureFormat:ir(c),z:i,mipLevel:a});else if(Vo(c)&&r)s.push({type:"texture-data",data:{data:c,width:Math.max(1,r.width>>a),height:Math.max(1,r.height>>a),...n?{format:n}:{}},textureFormat:n,z:i,mipLevel:a});else throw new Error("Unsupported 2D mip-level payload")}return s}function cr(e){const t=[];for(let r=0;r<e.length;r++)t.push(...ce(r,e[r]));return t}function lr(e){const t=[];for(let r=0;r<e.length;r++)t.push(...ce(r,e[r]));return t}function ur(e){const t=[];for(const[r,n]of Object.entries(e)){const o=sr(r);t.push(...ce(o,n))}return t}function fr(e){const t=[];return e.forEach((r,n)=>{for(const[o,i]of Object.entries(r)){const s=Jo(n,o);t.push(...ce(s,i))}}),t}var Ko=class Fn{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;generation=0;updateTimestamp;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw new Error("Texture not initialized yet");return this._texture}get sampler(){if(!this._sampler)throw new Error("Sampler not initialized yet");return this._sampler}get view(){if(!this._view)throw new Error("View not initialized yet");return this._view}get[Symbol.toStringTag](){return"DynamicTexture"}toString(){const t=this._texture?.width??this.props.width??"?",r=this._texture?.height??this.props.height??"?";return`DynamicTexture:"${this.id}":${t}x${r}px:(${this.isReady?"ready":"loading..."})`}resolveTextureBinding(t){return this.isReady?this.texture:null}constructor(t,r){this.device=t;const n=Ye("dynamic-texture"),o=r;this.props={...Fn.defaultProps,id:n,...r,data:null},this.id=this.props.id,this.ready=new Promise((i,s)=>{this.resolveReady=i,this.rejectReady=s}),this.updateTimestamp=this.device.incrementTimestamp(),this.initAsync(o)}async initAsync(t){try{const r=await this._loadAllData(t);this._checkNotDestroyed();const n=r.data?jo({...r,width:t.width,height:t.height,format:t.format}):[],o="format"in t&&t.format!==void 0,i="usage"in t&&t.usage!==void 0,a=(()=>{if(this.props.width&&this.props.height)return{width:this.props.width,height:this.props.height};const d=Go(r);return d||{width:this.props.width||1,height:this.props.height||1}})();if(!a||a.width<=0||a.height<=0)throw new Error(`${this} size could not be determined or was zero`);const c=Xo(this.device,n,a,{format:o?t.format:void 0}),l=c.format??this.props.format,u={...this.props,...a,format:l,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(l)&&!i&&(u.usage=T.SAMPLE|T.COPY_DST);const f=this.props.mipmaps&&!c.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(l);if(this.device.type==="webgpu"&&f){const d=this.props.dimension==="3d"?T.SAMPLE|T.STORAGE|T.COPY_DST|T.COPY_SRC:T.SAMPLE|T.RENDER|T.COPY_DST|T.COPY_SRC;u.usage|=d}const m=this.device.getMipLevelCount(u.width,u.height),h=c.hasExplicitMipChain?c.mipLevels:this.props.mipLevels==="auto"?m:Math.max(1,Math.min(m,this.props.mipLevels??1)),p={...u,mipLevels:h};this._texture=this.device.createTexture(p),this._sampler=this.texture.sampler,this._view=this.texture.view,this._touchGeneration(),c.subresources.length&&this._setTextureSubresources(c.subresources),this.props.mipmaps&&!c.hasExplicitMipChain&&!f&&M.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),f&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),M.info(1,`${this} created`)()}catch(r){const n=r instanceof Error?r:new Error(String(r));this.rejectReady(n)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.isReady=!1,this.destroyed=!0}generateMipmaps(){this.device.type==="webgl"?(this.texture.generateMipmapsWebGL(),this._touch()):this.device.type==="webgpu"?(this.device.generateMipmapsWebGPU(this.texture),this._touch()):M.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(t={}){this._checkReady();const r=t instanceof Wt?t:this.device.createSampler(t);this.texture.setSampler(r),this._sampler=r,this._touchGeneration()}async readBuffer(t={}){this.isReady||await this.ready;const r=t.width??this.texture.width,n=t.height??this.texture.height,o=t.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:r,height:n,depthOrArrayLayers:o}),s=this.device.createBuffer({byteLength:i.byteLength,usage:V.COPY_DST|V.MAP_READ});this.texture.readBuffer({...t,width:r,height:n,depthOrArrayLayers:o},s);const a=this.device.createFence();return await a.signaled,a.destroy(),s}async readAsync(t={}){this.isReady||await this.ready;const r=t.width??this.texture.width,n=t.height??this.texture.height,o=t.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:r,height:n,depthOrArrayLayers:o}),s=await this.readBuffer(t),a=await s.readAsync(0,i.byteLength);return s.destroy(),a.buffer instanceof ArrayBuffer?a.buffer:a.slice().buffer}resize(t){if(this._checkReady(),t.width===this.texture.width&&t.height===this.texture.height)return!1;const r=this.texture;return this._texture=r.clone(t),this._sampler=this.texture.sampler,this._view=this.texture.view,r.destroy(),this._touchGeneration(),M.info(`${this} resized`),!0}getCubeFaceIndex(t){const r=or[t];if(r===void 0)throw new Error(`Invalid cube face: ${t}`);return r}getCubeArrayFaceIndex(t,r){return 6*t+this.getCubeFaceIndex(r)}setTexture1DData(t){if(this._checkReady(),this.texture.props.dimension!=="1d")throw new Error(`${this} is not 1d`);const r=ar(t);this._setTextureSubresources(r)}setTexture2DData(t,r=0){if(this._checkReady(),this.texture.props.dimension!=="2d")throw new Error(`${this} is not 2d`);const n=ce(r,t);this._setTextureSubresources(n)}setTexture3DData(t){if(this.texture.props.dimension!=="3d")throw new Error(`${this} is not 3d`);const r=cr(t);this._setTextureSubresources(r)}setTextureArrayData(t){if(this.texture.props.dimension!=="2d-array")throw new Error(`${this} is not 2d-array`);const r=lr(t);this._setTextureSubresources(r)}setTextureCubeData(t){if(this.texture.props.dimension!=="cube")throw new Error(`${this} is not cube`);const r=ur(t);this._setTextureSubresources(r)}setTextureCubeArrayData(t){if(this.texture.props.dimension!=="cube-array")throw new Error(`${this} is not cube-array`);const r=fr(t);this._setTextureSubresources(r)}_setTextureSubresources(t){for(const r of t){const{z:n,mipLevel:o}=r;switch(r.type){case"external-image":const{image:i,flipY:s}=r;this.texture.copyExternalImage({image:i,z:n,mipLevel:o,flipY:s});break;case"texture-data":const{data:a,textureFormat:c}=r;if(c&&c!==this.texture.format)throw new Error(`${this} mip level ${o} uses format "${c}" but texture format is "${this.texture.format}"`);this.texture.writeData(a.data,{x:0,y:0,z:n,width:a.width,height:a.height,depthOrArrayLayers:1,mipLevel:o});break;default:throw new Error("Unsupported 2D mip-level payload")}}t.length>0&&this._touch()}async _loadAllData(t){const r=await ut(t.data);return{dimension:t.dimension??"2d",data:r??null}}_checkNotDestroyed(){this.destroyed&&M.warn(`${this} already destroyed`)}_checkReady(){this.isReady||M.warn(`${this} Cannot perform this operation before ready`)}_touch(){this.updateTimestamp=this.device.incrementTimestamp()}_touchGeneration(){this.generation++,this._touch()}static defaultProps={...T.defaultProps,dimension:"2d",data:null,mipmaps:!1}};function jo(e){if(!e.data)return[];const t=e.width&&e.height?{width:e.width,height:e.height}:void 0,r="format"in e?e.format:void 0;switch(e.dimension){case"1d":return ar(e.data);case"2d":return ce(0,e.data,t,r);case"3d":return cr(e.data);case"2d-array":return lr(e.data);case"cube":return ur(e.data);case"cube-array":return fr(e.data);default:throw new Error(`Unhandled dimension ${e.dimension}`)}}function Xo(e,t,r,n){if(t.length===0)return{subresources:t,mipLevels:1,format:n.format,hasExplicitMipChain:!1};const o=new Map;for(const u of t){const f=o.get(u.z)??[];f.push(u),o.set(u.z,f)}const i=t.some(u=>u.mipLevel>0);let s=n.format,a=Number.POSITIVE_INFINITY;const c=[];for(const[u,f]of o){const m=[...f].sort((b,A)=>b.mipLevel-A.mipLevel),h=m[0];if(!h||h.mipLevel!==0)throw new Error(`DynamicTexture: slice ${u} is missing mip level 0`);const p=pr(e,h);if(p.width!==r.width||p.height!==r.height)throw new Error(`DynamicTexture: slice ${u} base level dimensions ${p.width}x${p.height} do not match expected ${r.width}x${r.height}`);const d=mr(h);if(d){if(s&&s!==d)throw new Error(`DynamicTexture: slice ${u} base level format "${d}" does not match texture format "${s}"`);s=d}const g=s&&e.isTextureFormatCompressed(s)?zo(e,p.width,p.height,s):e.getMipLevelCount(p.width,p.height);let C=0;for(let b=0;b<m.length;b++){const A=m[b];if(!A||A.mipLevel!==b||b>=g)break;const I=pr(e,A),y=Math.max(1,p.width>>b),w=Math.max(1,p.height>>b);if(I.width!==y||I.height!==w)break;const B=mr(A);if(B&&(s||(s=B),B!==s))break;C++,c.push(A)}a=Math.min(a,C)}const l=Number.isFinite(a)?Math.max(1,a):1;return{subresources:c.filter(u=>u.mipLevel<l),mipLevels:l,format:s,hasExplicitMipChain:i}}function mr(e){if(e.type==="texture-data")return e.textureFormat??ir(e.data)}function pr(e,t){switch(t.type){case"external-image":return e.getExternalImageSize(t.image);case"texture-data":return{width:t.data.width,height:t.data.height};default:throw new Error("Unsupported texture subresource")}}function zo(e,t,r,n){const{blockWidth:o=1,blockHeight:i=1}=e.getTextureFormatInfo(n);let s=1;for(let a=1;;a++){const c=Math.max(1,t>>a),l=Math.max(1,r>>a);if(c<o||l<i)break;s++}return s}async function ut(e){if(e=await e,Array.isArray(e))return await Promise.all(e.map(ut));if(e&&typeof e=="object"&&e.constructor===Object){const t=e,r=await Promise.all(Object.values(t).map(ut)),n=Object.keys(t),o={};for(let i=0;i<n.length;i++)o[n[i]]=r[i];return o}return e}function ft(e,t){if(!e)throw new Error(t)}var Ee=class{id;matrix=new S;display=!0;position=new Z;rotation=new Z;scale=new Z(1,1,1);userData={};props={};constructor(e={}){const{id:t}=e;this.id=t||Ye(this.constructor.name),this._setScenegraphNodeProps(e)}getBounds(){return null}destroy(){}delete(){this.destroy()}setProps(e){return this._setScenegraphNodeProps(e),this}toString(){return`{type: ScenegraphNode, id: ${this.id})}`}setPosition(e){return ft(e.length===3,"setPosition requires vector argument"),this.position=e,this}setRotation(e){return ft(e.length===3||e.length===4,"setRotation requires vector argument"),this.rotation=e,this}setScale(e){return ft(e.length===3,"setScale requires vector argument"),this.scale=e,this}setMatrix(e,t=!0){t?this.matrix.copy(e):this.matrix=e}setMatrixComponents(e){const{position:t,rotation:r,scale:n,update:o=!0}=e;return t&&this.setPosition(t),r&&this.setRotation(r),n&&this.setScale(n),o&&this.updateMatrix(),this}updateMatrix(){if(this.matrix.identity(),this.matrix.translate(this.position),this.rotation.length===4){const e=new S().fromQuaternion(this.rotation);this.matrix.multiplyRight(e)}else this.matrix.rotateXYZ(this.rotation);return this.matrix.scale(this.scale),this}update({position:e,rotation:t,scale:r}={}){return e&&this.setPosition(e),t&&this.setRotation(t),r&&this.setScale(r),this.updateMatrix(),this}getCoordinateUniforms(e,t){t=t||this.matrix;const r=new S(e).multiplyRight(t),n=r.invert(),o=n.transpose();return{viewMatrix:e,modelMatrix:t,objectMatrix:t,worldMatrix:r,worldInverseMatrix:n,worldInverseTransposeMatrix:o}}_setScenegraphNodeProps(e){e.display!==void 0&&(this.display=e.display),e?.position&&this.setPosition(e.position),e?.rotation&&this.setRotation(e.rotation),e?.scale&&this.setScale(e.scale),this.updateMatrix(),e?.matrix&&this.setMatrix(e.matrix),Object.assign(this.props,e)}};function dr(){return[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]]}function hr(e,t,r){const n=new S(r);for(let o=0;o<8;o++){const i=new Z(t[o&1?1:0][0],t[o&2?1:0][1],t[o&4?1:0][2]);n.transformAsPoint(i,i);for(let s=0;s<3;s++)e[0][s]=Math.min(e[0][s],i[s]),e[1][s]=Math.max(e[1][s],i[s])}}function gr(e){return Number.isFinite(e[0][0])}var Q=class Lt extends Ee{children;constructor(t={}){t=Array.isArray(t)?{children:t}:t;const{children:r=[]}=t;M.assert(r.every(n=>n instanceof Ee),"every child must an instance of ScenegraphNode"),super(t),this.children=r}getBounds(){const t=dr();return this.traverse((r,{worldMatrix:n})=>{const o=r.getBounds();if(!o)return;const i=new S(n).multiplyRight(r.matrix);hr(t,o,i)}),gr(t)?t:null}destroy(){this.children.forEach(t=>t.destroy()),this.removeAll(),super.destroy()}add(...t){for(const r of t)Array.isArray(r)?this.add(...r):this.children.push(r);return this}remove(t){const r=this.children,n=r.indexOf(t);return n>-1&&r.splice(n,1),this}removeAll(){return this.children=[],this}traverse(t,{worldMatrix:r=new S}={}){if(!this.display)return;const n=new S(r).multiplyRight(this.matrix);for(const o of this.children)o.display&&(o instanceof Lt?o.traverse(t,{worldMatrix:n}):t(o,{worldMatrix:n}))}traverseDepthSorted(t,{viewMatrix:r,worldMatrix:n=new S,order:o="back-to-front"}){const i=new S(r),s=[];this.traverse((c,l)=>{const u=c.getBounds(),f=u?new Z(u[0]).add(u[1]).divide([2,2,2]):new Z,m=new S(l.worldMatrix).multiplyRight(c.matrix);m.transformAsPoint(f,f),i.transformAsPoint(f,f),s.push({node:c,context:{worldMatrix:m,bounds:u,depth:-f[2]},index:s.length})},{worldMatrix:new S(n)});const a=o==="back-to-front"?-1:1;s.sort((c,l)=>a*(c.context.depth-l.context.depth)||c.index-l.index);for(const{node:c,context:l}of s)t(c,l)}preorderTraversal(t,{worldMatrix:r=new S}={}){const n=new S(r).multiplyRight(this.matrix);t(this,{worldMatrix:n});for(const o of this.children)o instanceof Lt?o.preorderTraversal(t,{worldMatrix:n}):t(o,{worldMatrix:n})}},te=class extends Ee{model;instanceMatrices;bounds=null;managedResources;constructor(e){super(e),this.model=e.model,this.managedResources=e.managedResources||[],this.instanceMatrices=e.instanceMatrices||null,this.bounds=e.bounds?this.instanceMatrices?Wo(e.bounds,this.instanceMatrices):e.bounds:null,this.setProps(e)}destroy(){this.model&&(this.model.destroy(),this.model=null),this.managedResources.forEach(e=>e.destroy()),this.managedResources=[]}getBounds(){return this.bounds}draw(e){return this.model.draw(e)}};function Wo(e,t){const r=dr();for(const n of t)hr(r,e,n);return gr(r)?r:null}var mt=Math.PI/180,Fe=new Float32Array(16),Ar=new Float32Array(12);function br(e,t,r){const n=t[0]*mt,o=t[1]*mt,i=t[2]*mt,s=Math.sin(i),a=Math.sin(n),c=Math.sin(o),l=Math.cos(i),u=Math.cos(n),f=Math.cos(o),m=r[0],h=r[1],p=r[2];e[0]=m*f*u,e[1]=m*c*u,e[2]=m*-a,e[3]=h*(-c*l+f*a*s),e[4]=h*(f*l+c*a*s),e[5]=h*u*s,e[6]=p*(c*s+f*a*l),e[7]=p*(-f*s+c*a*l),e[8]=p*u*l}function Cr(e){return e[0]=e[0],e[1]=e[1],e[2]=e[2],e[3]=e[4],e[4]=e[5],e[5]=e[6],e[6]=e[8],e[7]=e[9],e[8]=e[10],e[9]=e[12],e[10]=e[13],e[11]=e[14],e.subarray(0,12)}var vr={size:12,accessor:["getOrientation","getScale","getTranslation","getTransformMatrix"],shaderAttributes:{instanceModelMatrixCol0:{size:3,elementOffset:0},instanceModelMatrixCol1:{size:3,elementOffset:3},instanceModelMatrixCol2:{size:3,elementOffset:6},instanceTranslation:{size:3,elementOffset:9}},update(e,{startRow:t,endRow:r}){const{data:n,getOrientation:o,getScale:i,getTranslation:s,getTransformMatrix:a}=this.props,c=Array.isArray(a),l=c&&a.length===16,u=Array.isArray(i),f=Array.isArray(o),m=Array.isArray(s),h=l||!c&&!!a(n[0]);h?e.constant=l:e.constant=f&&u&&m;const p=e.value;if(e.constant){let d;h?(Fe.set(a),d=Cr(Fe)):(d=Ar,br(d,o,i),d.set(s,9)),e.value=new Float32Array(d)}else{let d=t*e.size;const{iterable:g,objectInfo:C}=Hn(n,t,r);for(const b of g){C.index++;let A;if(h)Fe.set(l?a:a(b,C)),A=Cr(Fe);else{A=Ar;const I=f?o:o(b,C),y=u?i:i(b,C);br(A,I,y),A.set(m?s:s(b,C),9)}p[d++]=A[0],p[d++]=A[1],p[d++]=A[2],p[d++]=A[3],p[d++]=A[4],p[d++]=A[5],p[d++]=A[6],p[d++]=A[7],p[d++]=A[8],p[d++]=A[9],p[d++]=A[10],p[d++]=A[11]}}}};function Br(e,t){return t==="cartesian"||t==="meter-offsets"||t==="default"&&!e.isGeospatial}var Qo=`struct SimpleMeshUniforms {
  sizeScale: f32,
  composeModelMatrix: f32,
  hasTexture: f32,
  flatShading: f32,
};

@group(0) @binding(auto) var<uniform> simpleMesh: SimpleMeshUniforms;
@group(0) @binding(auto) var simpleMeshTexture: texture_2d<f32>;
@group(0) @binding(auto) var simpleMeshTextureSampler: sampler;
`,_r=`layout(std140) uniform simpleMeshUniforms {
  float sizeScale;
  bool composeModelMatrix;
  bool hasTexture;
  bool flatShading;
} simpleMesh;
`,Yo={name:"simpleMesh",source:Qo,vs:_r,fs:_r,uniformTypes:{sizeScale:"f32",composeModelMatrix:"f32",hasTexture:"f32",flatShading:"f32"}},$o=`#version 300 es
#define SHADER_NAME simple-mesh-layer-vs
in vec3 positions;
in vec3 normals;
in vec3 colors;
in vec2 texCoords;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
in vec3 instanceTranslation;
out vec2 vTexCoord;
out vec3 cameraPosition;
out vec3 normals_commonspace;
out vec4 position_commonspace;
out vec4 vColor;
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = texCoords;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vTexCoord = texCoords;
cameraPosition = project.cameraPosition;
vColor = vec4(colors * instanceColors.rgb, instanceColors.a);
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vec3 pos = (instanceModelMatrix * positions) * simpleMesh.sizeScale + instanceTranslation;
if (simpleMesh.composeModelMatrix) {
DECKGL_FILTER_SIZE(pos, geometry);
normals_commonspace = project_normal(instanceModelMatrix * normals);
geometry.worldPosition += pos;
gl_Position = project_position_to_clipspace(pos + instancePositions, instancePositions64Low, vec3(0.0), position_commonspace);
geometry.position = position_commonspace;
}
else {
pos = project_size(pos);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, pos, position_commonspace);
geometry.position = position_commonspace;
normals_commonspace = project_normal(instanceModelMatrix * normals);
}
geometry.normal = normals_commonspace;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,qo=`#version 300 es
#define SHADER_NAME simple-mesh-layer-fs
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
DECKGL_FILTER_COLOR(color, geometry);
vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
fragColor = vec4(lightColor, color.a * layer.opacity);
}
`,Zo=`struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) colors: vec3<f32>,
  @location(3) texCoords: vec2<f32>,
  @location(4) instancePositions: vec3<f32>,
  @location(5) instancePositions64Low: vec3<f32>,
  @location(6) instanceColors: vec4<f32>,
  @location(7) instanceModelMatrixCol0: vec3<f32>,
  @location(8) instanceModelMatrixCol1: vec3<f32>,
  @location(9) instanceModelMatrixCol2: vec3<f32>,
  @location(10) instanceTranslation: vec3<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) texCoords: vec2<f32>,
  @location(2) normal: vec3<f32>,
  @location(3) positionCommon: vec3<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.texCoords;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let instanceModelMatrix = mat3x3<f32>(
    attributes.instanceModelMatrixCol0,
    attributes.instanceModelMatrixCol1,
    attributes.instanceModelMatrixCol2
  );
  let meshPosition =
    (instanceModelMatrix * attributes.positions) * simpleMesh.sizeScale +
    attributes.instanceTranslation;

  if (simpleMesh.composeModelMatrix > 0.5) {
    geometry.normal = project_normal(instanceModelMatrix * attributes.normals);
    geometry.worldPosition += meshPosition;
    let projected = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions + meshPosition,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projected.commonPosition;
    varyings.position = projected.clipPosition;
  } else {
    let projected = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      project_size_vec3(meshPosition)
    );
    geometry.position = projected.commonPosition;
    geometry.normal = project_normal(instanceModelMatrix * attributes.normals);
    varyings.position = projected.clipPosition;
  }

  varyings.color = vec4<f32>(
    attributes.colors * attributes.instanceColors.rgb,
    attributes.instanceColors.a
  );
  varyings.texCoords = attributes.texCoords;
  varyings.normal = geometry.normal;
  varyings.positionCommon = geometry.position.xyz;
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.texCoords;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  var color = varyings.color;
  if (simpleMesh.hasTexture > 0.5) {
    color = textureSample(simpleMeshTexture, simpleMeshTextureSampler, varyings.texCoords);
  }

  var normal = varyings.normal;
  if (simpleMesh.flatShading > 0.5) {
    // WebGPU's screen-space Y axis reverses the derivative orientation used by GLSL flat shading.
    normal = normalize(cross(dpdy(varyings.positionCommon), dpdx(varyings.positionCommon)));
  }

  color = vec4<f32>(
    lighting_getLightColor2(color.rgb, project.cameraPosition, varyings.positionCommon, normal),
    color.a * layer.opacity
  );

  if (picking.isHighlightActive > 0.5) {
    let highlightedColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedColor))) {
      let blendedAlpha = picking.highlightColor.a + color.a * (1.0 - picking.highlightColor.a);
      if (blendedAlpha > 0.0) {
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, picking.highlightColor.a / blendedAlpha),
          blendedAlpha
        );
      }
    }
  }

  return deckgl_premultiplied_alpha(color);
}
`;function ei(e){let t=1/0,r=1/0,n=1/0,o=-1/0,i=-1/0,s=-1/0;const a=e.POSITION?e.POSITION.value:[],c=a&&a.length;for(let l=0;l<c;l+=3){const u=a[l],f=a[l+1],m=a[l+2];t=u<t?u:t,r=f<r?f:r,n=m<n?m:n,o=u>o?u:o,i=f>i?f:i,s=m>s?m:s}return[[t,r,n],[o,i,s]]}function pt(e){const t=e.positions||e.POSITION;xe.assert(t,'no "postions" or "POSITION" attribute in mesh');const r=t.value.length/t.size;let n=e.COLOR_0||e.colors;n||(n={size:3,value:new Float32Array(r*3).fill(1)});let o=e.NORMAL||e.normals;o||(o={size:3,value:new Float32Array(r*3).fill(0)});let i=e.TEXCOORD_0||e.texCoords;return i||(i={size:2,value:new Float32Array(r*2).fill(0)}),{positions:t,colors:n,normals:o,texCoords:i}}function Mr(e){return e instanceof be?(e.attributes=pt(e.attributes),e):e.attributes?new be({...e,topology:"triangle-list",attributes:pt(e.attributes)}):new be({topology:"triangle-list",attributes:pt(e)})}var ti={mesh:{type:"object",value:null,async:!0},texture:{type:"image",value:null,async:!0},sizeScale:{type:"number",value:1,min:0},_instanced:!0,wireframe:!1,material:!0,getPosition:{type:"accessor",value:e=>e.position},getColor:{type:"accessor",value:[0,0,0,255]},getOrientation:{type:"accessor",value:[0,0,0]},getScale:{type:"accessor",value:[1,1,1]},getTranslation:{type:"accessor",value:[0,0,0]},getTransformMatrix:{type:"accessor",value:[]},textureParameters:{type:"object",ignore:!0,value:null}},dt=class extends jt{getShaders(){return super.getShaders({vs:$o,fs:qo,source:Zo,modules:[Kt,Jt,kn,kt,Yo]})}getBounds(){if(this.props._instanced)return super.getBounds();let e=this.state.positionBounds;if(e)return e;const{mesh:t}=this.props;if(!t)return null;if(e=t.header?.boundingBox,!e){const{attributes:r}=Mr(t);r.POSITION=r.POSITION||r.positions,e=ei(r)}return this.state.positionBounds=e,e}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{transition:!0,type:"float64",fp64:this.use64bitPositions(),size:3,accessor:"getPosition"},instanceColors:{type:"unorm8",transition:!0,size:this.props.colorFormat.length,accessor:"getColor",defaultValue:[0,0,0,255]},instanceModelMatrix:vr}),this.setState({emptyTexture:this.context.device.createTexture({data:new Uint8Array(4),width:1,height:1})})}updateState(e){super.updateState(e);const{props:t,oldProps:r,changeFlags:n}=e;if(t.mesh!==r.mesh||n.extensionsChanged){if(this.state.positionBounds=null,this.state.model?.destroy(),t.mesh){this.state.model=this.getModel(t.mesh);const o=t.mesh.attributes||t.mesh;this.setState({hasNormals:!!(o.NORMAL||o.normals)})}this.getAttributeManager().invalidateAll()}t.texture!==r.texture&&t.texture instanceof T&&this.setTexture(t.texture),this.state.model&&this.state.model.setTopology(this.props.wireframe?"line-strip":"triangle-list")}finalizeState(e){super.finalizeState(e),this.state.emptyTexture.delete()}draw({uniforms:e}){const{model:t}=this.state;if(!t)return;const{viewport:r,renderPass:n}=this.context,{sizeScale:o,coordinateSystem:i,_instanced:s}=this.props,a={sizeScale:o,composeModelMatrix:!s||Br(r,i),flatShading:!this.state.hasNormals};t.shaderInputs.setProps({simpleMesh:a}),t.draw(n)}get isLoaded(){return!!(this.state?.model&&super.isLoaded)}getModel(e){const t=new Qt(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:Mr(e),isInstanced:!0});return t.shaderInputs.setProps({simpleMesh:this.getTextureProps(this.props.texture)}),t}setTexture(e){const{model:t}=this.state;t&&t.shaderInputs.setProps({simpleMesh:this.getTextureProps(e)})}getTextureProps(e){const t=e||this.state.emptyTexture;return{...this.context.device.type==="webgpu"?{simpleMeshTexture:t}:{sampler:t},hasTexture:!!e}}};dt.defaultProps=ti,dt.layerName="SimpleMeshLayer";var ri=`
struct VertexInputs {
  @location(0) positions: vec3f,
#ifdef HAS_NORMALS
  @location(1) normals: vec3f,
#endif
#ifdef HAS_TANGENTS
  @location(2) TANGENT: vec4f,
#endif
#ifdef HAS_UV
  @location(3) texCoords: vec2f,
#endif
#ifdef HAS_UV_1
  @location(4) texCoords1: vec2f,
#endif
#ifdef HAS_SKIN
  @location(5) JOINTS_0: vec4u,
  @location(6) WEIGHTS_0: vec4f,
#endif
#ifdef HAS_GLTF_INSTANCING
  @location(8) instanceModelMatrixCol0: vec4f,
  @location(9) instanceModelMatrixCol1: vec4f,
  @location(10) instanceModelMatrixCol2: vec4f,
  @location(11) instanceModelMatrixCol3: vec4f,
  @builtin(instance_index) instanceIndex: u32,
#endif
#ifdef HAS_GPU_CROWD_ANIMATION
  @location(12) instanceAnimationFrames: vec4f,
  @location(13) instanceAnimationBlend: vec4f,
#endif
#ifdef HAS_INSTANCED_MORPH
  @builtin(vertex_index) vertexIndex: u32,
#endif
};

struct FragmentInputs {
  @builtin(position) position: vec4f,
  @location(0) pbrPosition: vec3f,
  @location(1) pbrUV0: vec2f,
  @location(2) pbrUV1: vec2f,
  @location(3) pbrNormal: vec3f,
#ifdef HAS_TANGENTS
  @location(4) pbrTangent: vec4f,
#endif
};

#ifdef HAS_GLTF_INSTANCING
fn getGLTFInstanceNormalMatrix(matrix: mat3x3f) -> mat3x3f {
  let firstCofactor = cross(matrix[1], matrix[2]);
  let inverseDeterminant = 1.0 / dot(matrix[0], firstCofactor);
  return mat3x3f(
    firstCofactor,
    cross(matrix[2], matrix[0]),
    cross(matrix[0], matrix[1])
  ) * inverseDeterminant;
}
#endif

@vertex
fn vertexMain(inputs: VertexInputs) -> FragmentInputs {
  var outputs: FragmentInputs;
  var position = vec4f(inputs.positions, 1.0);
  var normal = vec3f(0.0, 0.0, 1.0);
  var tangent = vec4f(1.0, 0.0, 0.0, 1.0);
  var uv0 = vec2f(0.0, 0.0);
  var uv1 = vec2f(0.0, 0.0);

#ifdef HAS_NORMALS
  normal = inputs.normals;
#endif
#ifdef HAS_UV
  uv0 = inputs.texCoords;
#endif
#ifdef HAS_UV_1
  uv1 = inputs.texCoords1;
#endif
#ifdef HAS_TANGENTS
  tangent = inputs.TANGENT;
#endif

#ifdef HAS_INSTANCED_MORPH
  var animationFrames = vec4f(0.0);
  var animationBlend = vec4f(0.0);
#ifdef HAS_GPU_CROWD_ANIMATION
  animationFrames = inputs.instanceAnimationFrames;
  animationBlend = inputs.instanceAnimationBlend;
#endif
  position = vec4f(
    position.xyz + getGPUCrowdMorphDelta(
      inputs.instanceIndex,
      inputs.vertexIndex,
      0u,
      u32(CROWD_MORPH_VERTEX_COUNT),
      u32(CROWD_MORPH_TARGET_COUNT),
      u32(CROWD_ANIMATION_JOINT_COUNT),
      animationFrames,
      animationBlend,
      u32(CROWD_ANIMATION_FRAME_STRIDE)
    ),
    1.0
  );
#ifdef HAS_NORMALS
  normal = normalize(normal + getGPUCrowdMorphDelta(
    inputs.instanceIndex,
    inputs.vertexIndex,
    1u,
    u32(CROWD_MORPH_VERTEX_COUNT),
    u32(CROWD_MORPH_TARGET_COUNT),
    u32(CROWD_ANIMATION_JOINT_COUNT),
    animationFrames,
    animationBlend,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  ));
#endif
#ifdef HAS_TANGENTS
  tangent = vec4f(normalize(tangent.xyz + getGPUCrowdMorphDelta(
    inputs.instanceIndex,
    inputs.vertexIndex,
    2u,
    u32(CROWD_MORPH_VERTEX_COUNT),
    u32(CROWD_MORPH_TARGET_COUNT),
    u32(CROWD_ANIMATION_JOINT_COUNT),
    animationFrames,
    animationBlend,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  )), tangent.w);
#endif
#endif

#ifdef HAS_SKIN
#ifdef HAS_GPU_CROWD_ANIMATION
  let skinMatrix = getGPUAnimatedSkinMatrix(
    inputs.WEIGHTS_0,
    inputs.JOINTS_0,
    inputs.instanceAnimationFrames,
    inputs.instanceAnimationBlend,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  );
#else
#ifdef HAS_INSTANCED_SKIN
  let skinMatrix = getInstancedSkinMatrix(
    inputs.WEIGHTS_0,
    inputs.JOINTS_0,
    inputs.instanceIndex,
    u32(CROWD_JOINTS_PER_INSTANCE)
  );
#else
  let skinMatrix = getSkinMatrix(inputs.WEIGHTS_0, inputs.JOINTS_0);
#endif
#endif
  position = skinMatrix * position;
  normal = normalize((skinMatrix * vec4f(normal, 0.0)).xyz);
#ifdef HAS_TANGENTS
  tangent = vec4f(normalize((skinMatrix * vec4f(tangent.xyz, 0.0)).xyz), tangent.w);
#endif
#endif

#ifdef HAS_GLTF_INSTANCING
  var instanceMatrix = mat4x4f(
    inputs.instanceModelMatrixCol0,
    inputs.instanceModelMatrixCol1,
    inputs.instanceModelMatrixCol2,
    inputs.instanceModelMatrixCol3
  );
#ifdef HAS_GPU_CROWD_ANIMATION
  instanceMatrix *= sampleGPUAnimationMatrix(
    inputs.instanceAnimationFrames,
    inputs.instanceAnimationBlend,
    0u,
    u32(CROWD_ANIMATION_FRAME_STRIDE)
  );
#endif
  position = instanceMatrix * position;
  normal = normalize(getGLTFInstanceNormalMatrix(mat3x3f(
    instanceMatrix[0].xyz,
    instanceMatrix[1].xyz,
    instanceMatrix[2].xyz
  )) * normal);
#ifdef HAS_TANGENTS
  tangent = vec4f(normalize((instanceMatrix * vec4f(tangent.xyz, 0.0)).xyz), tangent.w);
#endif
#endif

  let worldPosition = pbrProjection.modelMatrix * position;

#ifdef HAS_NORMALS
  normal = normalize((pbrProjection.normalMatrix * vec4f(normal, 0.0)).xyz);
#endif
#ifdef HAS_TANGENTS
  let worldTangent = normalize((pbrProjection.modelMatrix * vec4f(tangent.xyz, 0.0)).xyz);
  outputs.pbrTangent = vec4f(worldTangent, tangent.w);
#endif

  outputs.position = pbrProjection.modelViewProjectionMatrix * position;
  outputs.pbrPosition = worldPosition.xyz / worldPosition.w;
  outputs.pbrUV0 = uv0;
  outputs.pbrUV1 = uv1;
  outputs.pbrNormal = normal;
  return outputs;
}

@fragment
fn fragmentMain(inputs: FragmentInputs) -> @location(0) vec4f {
  fragmentInputs.pbr_vPosition = inputs.pbrPosition;
  fragmentInputs.pbr_vUV0 = inputs.pbrUV0;
  fragmentInputs.pbr_vUV1 = inputs.pbrUV1;
  fragmentInputs.pbr_vNormal = inputs.pbrNormal;
#ifdef HAS_TANGENTS
  let tangent = normalize(inputs.pbrTangent.xyz);
  let bitangent = normalize(cross(inputs.pbrNormal, tangent)) * inputs.pbrTangent.w;
  fragmentInputs.pbr_vTBN = mat3x3f(tangent, bitangent, inputs.pbrNormal);
#endif
  return pbr_filterColor(vec4f(1.0));
}
`,ni=`#version 300 es

  // in vec4 POSITION;
  in vec4 positions;

  #ifdef HAS_NORMALS
    // in vec4 NORMAL;
    in vec4 normals;
  #endif

  #ifdef HAS_TANGENTS
    in vec4 TANGENT;
  #endif

  #ifdef HAS_UV
    // in vec2 TEXCOORD_0;
    in vec2 texCoords;
  #endif

  #ifdef HAS_UV_1
    in vec2 texCoords1;
  #endif

  #ifdef HAS_SKIN
    in uvec4 JOINTS_0;
    in vec4 WEIGHTS_0;
  #endif

  #ifdef HAS_GLTF_INSTANCING
    in vec4 instanceModelMatrixCol0;
    in vec4 instanceModelMatrixCol1;
    in vec4 instanceModelMatrixCol2;
    in vec4 instanceModelMatrixCol3;
  #endif

  #ifdef HAS_GPU_CROWD_ANIMATION
    in vec4 instanceAnimationFrames;
    in vec4 instanceAnimationBlend;
  #endif

  void main(void) {
    vec4 _NORMAL = vec4(0.);
    vec4 _TANGENT = vec4(0.);
    vec2 _TEXCOORD_0 = vec2(0.);
    vec2 _TEXCOORD_1 = vec2(0.);

    #ifdef HAS_NORMALS
      _NORMAL = normals;
    #endif

    #ifdef HAS_TANGENTS
      _TANGENT = TANGENT;
    #endif

    #ifdef HAS_UV
      _TEXCOORD_0 = texCoords;
    #endif

    #ifdef HAS_UV_1
      _TEXCOORD_1 = texCoords1;
    #endif

    vec4 pos = positions;

    #ifdef HAS_INSTANCED_MORPH
      vec4 animationFrames = vec4(0.0);
      vec4 animationBlend = vec4(0.0);
      #ifdef HAS_GPU_CROWD_ANIMATION
        animationFrames = instanceAnimationFrames;
        animationBlend = instanceAnimationBlend;
      #endif
      pos.xyz += getGPUCrowdMorphDelta(
        uint(gl_InstanceID),
        uint(gl_VertexID),
        0u,
        uint(CROWD_MORPH_TARGET_COUNT),
        uint(CROWD_ANIMATION_JOINT_COUNT),
        animationFrames,
        animationBlend
      );
      #ifdef HAS_NORMALS
        _NORMAL.xyz = normalize(_NORMAL.xyz + getGPUCrowdMorphDelta(
          uint(gl_InstanceID),
          uint(gl_VertexID),
          1u,
          uint(CROWD_MORPH_TARGET_COUNT),
          uint(CROWD_ANIMATION_JOINT_COUNT),
          animationFrames,
          animationBlend
        ));
      #endif
      #ifdef HAS_TANGENTS
        _TANGENT.xyz = normalize(_TANGENT.xyz + getGPUCrowdMorphDelta(
          uint(gl_InstanceID),
          uint(gl_VertexID),
          2u,
          uint(CROWD_MORPH_TARGET_COUNT),
          uint(CROWD_ANIMATION_JOINT_COUNT),
          animationFrames,
          animationBlend
        ));
      #endif
    #endif

    #ifdef HAS_SKIN
      #ifdef HAS_GPU_CROWD_ANIMATION
        mat4 skinMat = getGPUAnimatedSkinMatrix(
          WEIGHTS_0,
          JOINTS_0,
          instanceAnimationFrames,
          instanceAnimationBlend
        );
      #else
      #ifdef HAS_INSTANCED_SKIN
        mat4 skinMat = getInstancedSkinMatrix(
          WEIGHTS_0,
          JOINTS_0,
          uint(gl_InstanceID),
          uint(CROWD_JOINTS_PER_INSTANCE)
        );
      #else
      mat4 skinMat = getSkinMatrix(WEIGHTS_0, JOINTS_0);
      #endif
      #endif
      pos = skinMat * pos;
      _NORMAL = skinMat * _NORMAL;
      _TANGENT = vec4((skinMat * vec4(_TANGENT.xyz, 0.)).xyz, _TANGENT.w);
    #endif

    #ifdef HAS_GLTF_INSTANCING
      mat4 instanceMatrix = mat4(
        instanceModelMatrixCol0,
        instanceModelMatrixCol1,
        instanceModelMatrixCol2,
        instanceModelMatrixCol3
      );
      #ifdef HAS_GPU_CROWD_ANIMATION
        instanceMatrix *= sampleGPUAnimationMatrix(
          instanceAnimationFrames,
          instanceAnimationBlend,
          0
        );
      #endif
      pos = instanceMatrix * pos;
      _NORMAL = vec4(normalize(transpose(inverse(mat3(instanceMatrix))) * _NORMAL.xyz), 0.0);
      _TANGENT = vec4(normalize(mat3(instanceMatrix) * _TANGENT.xyz), _TANGENT.w);
    #endif

    pbr_setPositionNormalTangentUV(pos, _NORMAL, _TANGENT, _TEXCOORD_0, _TEXCOORD_1);
    gl_Position = pbrProjection.modelViewProjectionMatrix * pos;
  }
`,oi=`#version 300 es
  out vec4 fragmentColor;

  void main(void) {
    vec3 pos = pbr_vPosition;
    fragmentColor = pbr_filterColor(vec4(1.0));
  }
`;function Sr(e,t){const r=t.materialFactory||new lt(e,{modules:[ee]}),n={...t.parsedPPBRMaterial.uniforms};delete n.camera;const o=Object.fromEntries(Object.entries({...n,...t.parsedPPBRMaterial.bindings}).filter(([s,a])=>r.ownsBinding(s)&&si(a))),i=r.createMaterial({id:t.id,bindings:o});return i.setProps({pbrMaterial:n}),i}function ii(e,t){const{id:r,geometry:n,parsedPPBRMaterial:o,vertexCount:i,modelOptions:s={},instanceMatrices:a,morphTargets:c=[]}=t,l=s.userData?.gltfAnimatedCrowd;if(l&&a)throw new Error("Nested glTF crowd instancing is unsupported");M.info(4,"createGLTFModel defines: ",o.defines)();const u=[],f={depthWriteEnabled:!0,depthCompare:"less",depthFormat:"depth24plus",cullMode:"back"},m={},h=[],p=[],d=[],g=!!l?.gpuAnimation;if(a||l)for(let U=0;U<4;U++){const H=new Float32Array((l?.capacity||a?.length||0)*4);a?.forEach((Te,q)=>{for(let ie=0;ie<4;ie++)H[q*4+ie]=Te[U*4+ie]});const j=`instanceModelMatrixCol${U}`,ge=e.createBuffer({id:`${r||"gltf"}-${j}`,data:H,usage:V.VERTEX|V.COPY_DST});m[j]=ge,h.push({name:j,format:"float32x4",stepMode:"instance"}),u.push(ge),p.push(ge),d.push(H)}let C,b,A,I;if(l&&g){C=new Float32Array(l.capacity*4),A=new Float32Array(l.capacity*4);for(const[U,H]of[["instanceAnimationFrames",C],["instanceAnimationBlend",A]]){const j=e.createBuffer({id:`${r||"gltf"}-${U}`,data:H,usage:V.VERTEX|V.COPY_DST});m[U]=j,h.push({name:U,format:"float32x4",stepMode:"instance"}),u.push(j),U==="instanceAnimationFrames"?b=j:I=j}}const y=!!o.defines.HAS_SKIN,w=!!(l&&y&&!g);let B,D;l&&w&&(D=new Float32Array(l.capacity*l.jointsPerInstance*16),B=e.type==="webgpu"?e.createBuffer({id:`${r||"gltf"}-crowd-joint-matrices`,byteLength:D.byteLength,usage:V.STORAGE|V.COPY_DST}):e.createTexture({id:`${r||"gltf"}-crowd-joint-matrices`,format:"rgba32float",width:l.jointsPerInstance*4,height:l.capacity,usage:T.SAMPLE|T.COPY_DST,sampler:{minFilter:"nearest",magFilter:"nearest",mipmapFilter:"nearest"}}),u.push(B));const L=l?c.length:0,N=Math.floor((n.attributes.POSITION?.value.length||0)/3);let G,je,ne;if(l&&L>0&&N>0){const U=new Float32Array(L*3*N*4);for(const[H,j]of c.entries())for(const[ge,Te]of["POSITION","NORMAL","TANGENT"].entries()){const q=j[Te];if(!q)continue;const ie=Te==="TANGENT"&&q.length===N*4?4:3;for(let Re=0;Re<N;Re++){const We=((H*3+ge)*N+Re)*4,Qe=Re*ie;U[We]=q[Qe]||0,U[We+1]=q[Qe+1]||0,U[We+2]=q[Qe+2]||0}}if(G=ht(e,`${r||"gltf"}-crowd-morph-targets`,U,N,L*3),u.push(G),!g){const H=Math.ceil(L/4);je=new Float32Array(l.capacity*H*4),ne=ht(e,`${r||"gltf"}-crowd-morph-weights`,je,H,l.capacity),u.push(ne)}}const Ie=y&&l?l.jointsPerInstance:0,de=4+Ie*4+L;let oe,Xe;l?.gpuAnimation&&(Xe=new Float32Array(l.gpuAnimation.frameCount*de*4),oe=ht(e,`${r||"gltf"}-crowd-animation-frames`,Xe,de,l.gpuAnimation.frameCount),u.push(oe));let ze=ri;for(const[U,H]of[["CROWD_JOINTS_PER_INSTANCE",l?.jointsPerInstance||0],["CROWD_MORPH_VERTEX_COUNT",N],["CROWD_MORPH_TARGET_COUNT",L],["CROWD_ANIMATION_JOINT_COUNT",Ie],["CROWD_ANIMATION_FRAME_STRIDE",de]])ze=ze.replaceAll(`u32(${U})`,`u32(${H})`);const Pt={id:r,source:ze,vs:ni,fs:oi,geometry:n,topology:n.topology,vertexCount:i,modules:[ee,ho,...l?[Ao]:[]],...s,...a||l?{attributes:{...s.attributes,...m},bufferLayout:[...s.bufferLayout||[],...h],instanceCount:a?.length||0,isInstanced:!0}:{},defines:{...o.defines,...s.defines,...a||l?{HAS_GLTF_INSTANCING:!0}:{},...w?{HAS_INSTANCED_SKIN:!0,CROWD_JOINTS_PER_INSTANCE:l.jointsPerInstance}:{},...g?{HAS_GPU_CROWD_ANIMATION:!0,CROWD_ANIMATION_FRAME_STRIDE:de}:{},...G?{HAS_INSTANCED_MORPH:!0,CROWD_MORPH_TARGET_COUNT:L}:{},...l?{CROWD_ANIMATION_JOINT_COUNT:Ie}:{}},parameters:{...f,...o.parameters,...s.parameters}},Ot=t.material||Sr(e,{id:r?`${r}-material`:void 0,parsedPPBRMaterial:o});Pt.material=Ot;const he=new Qt(e,Pt),Nn={...o.uniforms,...s.uniforms,...o.bindings,...s.bindings},Un=ai(he.shaderInputs.getModules(),Ot,Nn);he.shaderInputs.setProps(Un),B&&he.shaderInputs.setProps({skin:{jointMatrices:[],skinJointMatrices:B}}),(oe||G||ne)&&he.shaderInputs.setProps({gpuAnimation:{...oe?{gpuAnimationFrames:oe}:{},...G?{gpuMorphTargets:G}:{},...ne?{gpuMorphWeights:ne}:{}}});const wt=new te({managedResources:u,model:he,bounds:t.bounds,instanceMatrices:a});return l&&(wt.userData.gltfAnimatedCrowd={transformBuffers:p,transformColumns:d,skinJointMatrices:B,jointMatrices:D,jointsPerInstance:l.jointsPerInstance,morphTargetCount:L,morphTargetData:G,morphWeights:je,morphWeightData:ne,animationFrames:oe,animationFrameValues:Xe,animationFrameStride:de,animationJointCount:Ie,animationParameters:C,animationParameterBuffer:b,animationBlend:A,animationBlendBuffer:I}),wt}function ht(e,t,r,n,o){if(e.type==="webgpu")return e.createBuffer({id:t,data:r,usage:V.STORAGE|V.COPY_DST});const i=e.createTexture({id:t,format:"rgba32float",width:n,height:o,usage:T.SAMPLE|T.COPY_DST,sampler:{minFilter:"nearest",magFilter:"nearest",mipmapFilter:"nearest"}});return i.writeData(r,{width:n,height:o}),i}function si(e){return e instanceof V||e instanceof Ko||e instanceof Wt||e instanceof T||e instanceof zt}function ai(e,t,r){const n=new Map;for(const i of e){for(const s of Object.keys(i.uniformTypes||{}))n.set(s,i.name);for(const s of i.bindingLayout||[])n.set(s.name,i.name)}const o={};for(const[i,s]of Object.entries(r)){if(s===void 0)continue;const a=n.get(i);!a||t.ownsModule(a)||(o[a]||={},o[a][i]=s)}return o}function ci(e,t){const r=t.extensions?.EXT_mesh_gpu_instancing?.attributes;if(!r||typeof r!="object")return null;const n={};let o;for(const[s,a]of Object.entries(r)){const c=typeof a=="number"?e.accessors[a]:a;if(!c||!ArrayBuffer.isView(c.value))throw new Error(`Invalid glTF instance accessor for ${s}`);if(o!==void 0&&c.count!==o)throw new Error("glTF instance attributes must have matching accessor counts");o=c.count,n[s]={value:c.value,size:c.components||li(c.type),count:c.count,normalized:!!c.normalized}}const i=[];for(let s=0;s<(o||0);s++){const a=gt(n.TRANSLATION,s,[0,0,0]),c=gt(n.ROTATION,s,[0,0,0,1]),l=gt(n.SCALE,s,[1,1,1]),u=Math.hypot(...c);if(u>0)for(let f=0;f<c.length;f++)c[f]/=u;i.push(new S().translate(a).multiplyRight(new S().fromQuaternion(c)).scale(l))}return{matrices:i,attributes:n}}function gt(e,t,r){if(!e)return[...r];const n=e.value;return r.map((o,i)=>{const s=n[t*e.size+i];return s===void 0?o:e.normalized?e.value instanceof Int8Array?Math.max(s/127,-1):e.value instanceof Int16Array?Math.max(s/32767,-1):e.value instanceof Uint8Array?s/255:e.value instanceof Uint16Array?s/65535:s:s})}function li(e){switch(e){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;default:return 1}}function Ir(e,t){e.userData.morphWeights=[...t];const r=e.userData.morphMeshes||[];for(const n of r)n.preorderTraversal(o=>{if(!(o instanceof te))return;const i=o.userData.morphTargets;i&&(Fo(o.model,i.geometry,i.targets,t),o.userData.morphWeights=[...t])})}var v;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN",e[e.ONE=1]="ONE",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.FUNC_ADD=32774]="FUNC_ADD",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST=9728]="NEAREST",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",e[e.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",e[e.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",e[e.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",e[e.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",e[e.REPEAT=10497]="REPEAT",e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL"})(v||(v={}));function ui(e){switch(e){case v.POINTS:return"point-list";case v.LINES:return"line-list";case v.LINE_STRIP:return"line-strip";case v.TRIANGLES:return"triangle-list";case v.TRIANGLE_STRIP:return"triangle-strip";default:throw new Error(String(e))}}function fi(e,t,r){if(e!==v.LINE_LOOP&&e!==v.TRIANGLE_FAN)return{topology:ui(e)};const n=t?.length??r,o=e===v.LINE_LOOP?n>=2?n*2:0:n>=3?(n-2)*3:0,i=new(t instanceof Uint32Array||!t&&r>65536?Uint32Array:Uint16Array)(o),s=a=>t?.[a]??a;if(e===v.LINE_LOOP){for(let a=0;a<n;a++)i[a*2]=s(a),i[a*2+1]=s((a+1)%n);return{topology:"line-list",indices:i}}for(let a=0;a<n-2;a++)i[a*3]=s(0),i[a*3+1]=s(a+1),i[a*3+2]=s(a+2);return{topology:"triangle-list",indices:i}}var At=[R("baseColor","pbr_baseColorSampler","baseColorTexture",["pbrMetallicRoughness","baseColorTexture"]),R("metallicRoughness","pbr_metallicRoughnessSampler","metallicRoughnessTexture",["pbrMetallicRoughness","metallicRoughnessTexture"]),R("normal","pbr_normalSampler","normalTexture",["normalTexture"]),R("occlusion","pbr_occlusionSampler","occlusionTexture",["occlusionTexture"]),R("emissive","pbr_emissiveSampler","emissiveTexture",["emissiveTexture"]),R("specularColor","pbr_specularColorSampler","KHR_materials_specular.specularColorTexture",["extensions","KHR_materials_specular","specularColorTexture"]),R("specularIntensity","pbr_specularIntensitySampler","KHR_materials_specular.specularTexture",["extensions","KHR_materials_specular","specularTexture"]),R("transmission","pbr_transmissionSampler","KHR_materials_transmission.transmissionTexture",["extensions","KHR_materials_transmission","transmissionTexture"]),R("thickness","pbr_thicknessSampler","KHR_materials_volume.thicknessTexture",["extensions","KHR_materials_volume","thicknessTexture"]),R("clearcoat","pbr_clearcoatSampler","KHR_materials_clearcoat.clearcoatTexture",["extensions","KHR_materials_clearcoat","clearcoatTexture"]),R("clearcoatRoughness","pbr_clearcoatRoughnessSampler","KHR_materials_clearcoat.clearcoatRoughnessTexture",["extensions","KHR_materials_clearcoat","clearcoatRoughnessTexture"]),R("clearcoatNormal","pbr_clearcoatNormalSampler","KHR_materials_clearcoat.clearcoatNormalTexture",["extensions","KHR_materials_clearcoat","clearcoatNormalTexture"]),R("sheenColor","pbr_sheenColorSampler","KHR_materials_sheen.sheenColorTexture",["extensions","KHR_materials_sheen","sheenColorTexture"]),R("sheenRoughness","pbr_sheenRoughnessSampler","KHR_materials_sheen.sheenRoughnessTexture",["extensions","KHR_materials_sheen","sheenRoughnessTexture"]),R("iridescence","pbr_iridescenceSampler","KHR_materials_iridescence.iridescenceTexture",["extensions","KHR_materials_iridescence","iridescenceTexture"]),R("iridescenceThickness","pbr_iridescenceThicknessSampler","KHR_materials_iridescence.iridescenceThicknessTexture",["extensions","KHR_materials_iridescence","iridescenceThicknessTexture"]),R("anisotropy","pbr_anisotropySampler","KHR_materials_anisotropy.anisotropyTexture",["extensions","KHR_materials_anisotropy","anisotropyTexture"]),R("bump","pbr_bumpSampler","EXT_materials_bump.bumpTexture",["extensions","EXT_materials_bump","bumpTexture"]),R("diffuseTransmission","pbr_diffuseTransmissionSampler","KHR_materials_diffuse_transmission.diffuseTransmissionTexture",["extensions","KHR_materials_diffuse_transmission","diffuseTransmissionTexture"]),R("diffuseTransmissionColor","pbr_diffuseTransmissionColorSampler","KHR_materials_diffuse_transmission.diffuseTransmissionColorTexture",["extensions","KHR_materials_diffuse_transmission","diffuseTransmissionColorTexture"]),R("multiscatterColor","pbr_multiscatterColorSampler","KHR_materials_volume_scatter.multiscatterColorTexture",["extensions","KHR_materials_volume_scatter","multiscatterColorTexture"])],mi=new Map(At.map(e=>[e.slot,e]));function R(e,t,r,n){return{slot:e,binding:t,displayName:r,pathSegments:n,colorSpace:e==="baseColor"||e==="emissive"||e==="specularColor"||e==="sheenColor"||e==="diffuseTransmissionColor"||e==="multiscatterColor"?"srgb":"linear",uvSetUniform:`${e}UVSet`,uvTransformUniform:`${e}UVTransform`}}function pi(){return At}function Tr(e){const t=mi.get(e);if(!t)throw new Error(`Unknown PBR texture transform slot ${e}`);return t}function Rr(e){const t=e?.extensions?.KHR_texture_transform;return{offset:t?.offset?[t.offset[0],t.offset[1]]:[0,0],rotation:t?.rotation??0,scale:t?.scale?[t.scale[0],t.scale[1]]:[1,1]}}function xr(e){return e?.extensions?.KHR_texture_transform?.texCoord??e?.texCoord??0}function di(e){return At.find(t=>t.pathSegments.length===e.length&&t.pathSegments.every((r,n)=>e[n]===r))||null}function bt(e){const t=new z().set(1,0,0,0,1,0,e.offset[0],e.offset[1],1),r=new z().set(Math.cos(e.rotation),Math.sin(e.rotation),0,-Math.sin(e.rotation),Math.cos(e.rotation),0,0,0,1),n=new z().set(e.scale[0],0,0,0,e.scale[1],0,0,0,1);return Array.from(t.multiplyRight(r).multiplyRight(n))}function hi(e,t){const r=new z(bt(e)),n=new z(bt(t)),o=new z(r).invert();return Array.from(n.multiplyRight(o))}function gi(e={}){const t=e.wrapS??e.parameters?.[v.TEXTURE_WRAP_S],r=e.wrapT??e.parameters?.[v.TEXTURE_WRAP_T],n=e.magFilter??e.parameters?.[v.TEXTURE_MAG_FILTER],o=e.minFilter??e.parameters?.[v.TEXTURE_MIN_FILTER],i=yr(t),s=yr(r),a=Ai(n);return{...i?{addressModeU:i}:{},...s?{addressModeV:s}:{},...a?{magFilter:a}:{},...bi(o)}}function yr(e){switch(e){case v.CLAMP_TO_EDGE:return"clamp-to-edge";case v.REPEAT:return"repeat";case v.MIRRORED_REPEAT:return"mirror-repeat";default:return}}function Ai(e){switch(e){case v.NEAREST:return"nearest";case v.LINEAR:return"linear";default:return}}function bi(e){switch(e){case v.NEAREST:return{minFilter:"nearest"};case v.LINEAR:return{minFilter:"linear"};case v.NEAREST_MIPMAP_NEAREST:return{minFilter:"nearest",mipmapFilter:"nearest"};case v.LINEAR_MIPMAP_NEAREST:return{minFilter:"linear",mipmapFilter:"nearest"};case v.NEAREST_MIPMAP_LINEAR:return{minFilter:"nearest",mipmapFilter:"linear"};case v.LINEAR_MIPMAP_LINEAR:return{minFilter:"linear",mipmapFilter:"linear"};default:return{}}}var Ci={NORMAL:["NORMAL","normals"],TANGENT:["TANGENT"],TEXCOORD_0:["TEXCOORD_0","texCoords"],TEXCOORD_1:["TEXCOORD_1","texCoords1"],JOINTS_0:["JOINTS_0"],WEIGHTS_0:["WEIGHTS_0"],COLOR_0:["COLOR_0","colors"]};function Er(e,t,r,n){const o={defines:{MANUAL_SRGB:!0},bindings:{},uniforms:{camera:[0,0,0],metallicRoughnessValues:[1,1]},parameters:{},glParameters:{},generatedTextures:[]};o.defines.USE_TEX_LOD=!0;const{imageBasedLightingEnvironment:i}=n;return i&&(o.bindings.pbr_diffuseEnvSampler=i.diffuseEnvSampler.texture,o.bindings.pbr_specularEnvSampler=i.specularEnvSampler.texture,o.bindings.pbr_brdfLUT=i.brdfLutTexture.texture,o.uniforms.IBLenabled=!0,o.uniforms.scaleIBLAmbient=[1,1]),n?.pbrDebug&&(o.defines.PBR_DEBUG=!0,o.uniforms.scaleDiffBaseMR=[0,0,0,0],o.uniforms.scaleFGDSpec=[0,0,0,0]),K(r,"NORMAL")&&(o.defines.HAS_NORMALS=!0),K(r,"TANGENT")&&n?.useTangents&&(o.defines.HAS_TANGENTS=!0),K(r,"TEXCOORD_0")&&(o.defines.HAS_UV=!0),K(r,"TEXCOORD_1")&&(o.defines.HAS_UV_1=!0),K(r,"JOINTS_0")&&K(r,"WEIGHTS_0")&&(o.defines.HAS_SKIN=!0),K(r,"COLOR_0")&&(o.defines.HAS_COLORS=!0),n?.imageBasedLightingEnvironment&&(o.defines.USE_IBL=!0),n?.lights&&(o.defines.USE_LIGHTS=!0),t&&(n.validateAttributes!==!1&&vi(t,r),_i(e,t,o,r,n.gltf)),o}function vi(e,t){const r=Fr(e,0);r.length>0&&!K(t,"TEXCOORD_0")&&M.warn(`glTF material uses ${r.join(", ")} but primitive is missing TEXCOORD_0; textured shading will sample the default UV coordinates`)();const n=Fr(e,1);if(n.length>0&&!K(t,"TEXCOORD_1")&&M.warn(`glTF material uses ${n.join(", ")} with TEXCOORD_1 but primitive is missing TEXCOORD_1; those textures will be skipped`)(),e.unlit||e.extensions?.KHR_materials_unlit||K(t,"NORMAL"))return;const o=e.normalTexture?"lit PBR shading with normalTexture":"lit PBR shading";M.warn(`glTF primitive is missing NORMAL while using ${o}; shading will fall back to geometric normals`)()}function Fr(e,t){const r=[];for(const n of pi()){const o=Bi(e,n.pathSegments);o&&xr(o)===t&&r.push(n.displayName)}return r}function K(e,t){return Ci[t].some(r=>!!e[r])}function Bi(e,t){let r=e;for(const n of t)if(r=r?.[n],!r)return null;return r}function _i(e,t,r,n,o){if(r.uniforms.unlit=!!(t.unlit||t.extensions?.KHR_materials_unlit),t.pbrMetallicRoughness&&Ii(e,t.pbrMetallicRoughness,r,n,o),t.normalTexture){x(e,t.normalTexture,"pbr_normalSampler",r,{featureOptions:{define:"HAS_NORMALMAP",enabledUniformName:"normalMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"normal"});const{scale:i=1}=t.normalTexture;r.uniforms.normalScale=i}if(t.occlusionTexture){x(e,t.occlusionTexture,"pbr_occlusionSampler",r,{featureOptions:{define:"HAS_OCCLUSIONMAP",enabledUniformName:"occlusionMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"occlusion"});const{strength:i=1}=t.occlusionTexture;r.uniforms.occlusionStrength=i}switch(r.uniforms.emissiveFactor=t.emissiveFactor||[0,0,0],t.emissiveTexture&&x(e,t.emissiveTexture,"pbr_emissiveSampler",r,{featureOptions:{define:"HAS_EMISSIVEMAP",enabledUniformName:"emissiveMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"emissive"}),Ti(e,t.extensions,r,o,n),t.alphaMode||"OPAQUE"){case"OPAQUE":break;case"MASK":{const{alphaCutoff:i=.5}=t;r.defines.ALPHA_CUTOFF=!0,r.uniforms.alphaCutoffEnabled=!0,r.uniforms.alphaCutoff=i;break}case"BLEND":M.warn("glTF BLEND alphaMode might not work well because it requires mesh sorting")(),Mi(r)}}function Mi(e){e.parameters.blend=!0,e.parameters.blendColorOperation="add",e.parameters.blendColorSrcFactor="src-alpha",e.parameters.blendColorDstFactor="one-minus-src-alpha",e.parameters.blendAlphaOperation="add",e.parameters.blendAlphaSrcFactor="one",e.parameters.blendAlphaDstFactor="one-minus-src-alpha",e.glParameters.blend=!0,e.glParameters.blendEquation=v.FUNC_ADD,e.glParameters.blendFunc=[v.SRC_ALPHA,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA]}function Si(e){e.parameters.blend=!0,e.parameters.depthWriteEnabled=!1,e.parameters.blendColorOperation="add",e.parameters.blendColorSrcFactor="one",e.parameters.blendColorDstFactor="one-minus-src-alpha",e.parameters.blendAlphaOperation="add",e.parameters.blendAlphaSrcFactor="one",e.parameters.blendAlphaDstFactor="one-minus-src-alpha",e.glParameters.blend=!0,e.glParameters.depthMask=!1,e.glParameters.blendEquation=v.FUNC_ADD,e.glParameters.blendFunc=[v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA]}function Ii(e,t,r,n,o){t.baseColorTexture&&x(e,t.baseColorTexture,"pbr_baseColorSampler",r,{featureOptions:{define:"HAS_BASECOLORMAP",enabledUniformName:"baseColorMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"baseColor"}),r.uniforms.baseColorFactor=t.baseColorFactor||[1,1,1,1],t.metallicRoughnessTexture&&x(e,t.metallicRoughnessTexture,"pbr_metallicRoughnessSampler",r,{featureOptions:{define:"HAS_METALROUGHNESSMAP",enabledUniformName:"metallicRoughnessMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"metallicRoughness"});const{metallicFactor:i=1,roughnessFactor:s=1}=t;r.uniforms.metallicRoughnessValues=[i,s]}function Ti(e,t,r,n,o={}){t&&(Ri(t)&&(r.defines.USE_MATERIAL_EXTENSIONS=!0),xi(e,t.KHR_materials_specular,r,n,o),yi(t.KHR_materials_ior,r),Fi(e,t.EXT_materials_bump,r,n,o),Ei(e,t.KHR_materials_transmission,r,n,o),Ni(e,t.KHR_materials_diffuse_transmission,r,n,o),Ui(e,t.KHR_materials_volume,r,n,o),Di(e,t.KHR_materials_volume_scatter,t.KHR_materials_volume,r,n,o),Li(t.KHR_materials_dispersion,r),Pi(e,t.KHR_materials_clearcoat,r,n,o),Oi(e,t.KHR_materials_sheen,r,n,o),wi(e,t.KHR_materials_iridescence,r,n,o),Gi(e,t.KHR_materials_anisotropy,r,n,o),Hi(t.KHR_materials_emissive_strength,r))}function Ri(e){return!!(e.KHR_materials_specular||e.KHR_materials_ior||e.EXT_materials_bump||e.KHR_materials_transmission||e.KHR_materials_diffuse_transmission||e.KHR_materials_volume||e.KHR_materials_volume_scatter||e.KHR_materials_dispersion||e.KHR_materials_clearcoat||e.KHR_materials_sheen||e.KHR_materials_iridescence||e.KHR_materials_anisotropy)}function xi(e,t,r,n,o={}){t&&(t.specularColorFactor&&(r.uniforms.specularColorFactor=t.specularColorFactor),t.specularFactor!==void 0&&(r.uniforms.specularIntensityFactor=t.specularFactor),t.specularColorTexture&&x(e,t.specularColorTexture,"pbr_specularColorSampler",r,{featureOptions:{define:"HAS_SPECULARCOLORMAP",enabledUniformName:"specularColorMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"specularColor"}),t.specularTexture&&x(e,t.specularTexture,"pbr_specularIntensitySampler",r,{featureOptions:{define:"HAS_SPECULARINTENSITYMAP",enabledUniformName:"specularIntensityMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"specularIntensity"}))}function yi(e,t){e?.ior!==void 0&&(t.uniforms.ior=e.ior)}function Ei(e,t,r,n,o={}){t&&(t.transmissionFactor!==void 0&&(r.uniforms.transmissionFactor=t.transmissionFactor),t.transmissionTexture&&x(e,t.transmissionTexture,"pbr_transmissionSampler",r,{featureOptions:{define:"HAS_TRANSMISSIONMAP",enabledUniformName:"transmissionMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"transmission"}),((t.transmissionFactor??0)>0||t.transmissionTexture)&&(M.warn("KHR_materials_transmission uses a premultiplied-alpha blending approximation and may require mesh sorting")(),Si(r)))}function Fi(e,t,r,n,o={}){t&&(r.uniforms.bumpFactor=Math.max(t.bumpFactor??1,0),t.bumpTexture&&x(e,t.bumpTexture,"pbr_bumpSampler",r,{featureOptions:{define:"HAS_BUMPMAP",enabledUniformName:"bumpMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"bump"}))}function Ni(e,t,r,n,o={}){t&&(r.uniforms.diffuseTransmissionFactor=Math.min(Math.max(t.diffuseTransmissionFactor??0,0),1),r.uniforms.diffuseTransmissionColorFactor=t.diffuseTransmissionColorFactor||[1,1,1],t.diffuseTransmissionTexture&&x(e,t.diffuseTransmissionTexture,"pbr_diffuseTransmissionSampler",r,{featureOptions:{define:"HAS_DIFFUSETRANSMISSIONMAP",enabledUniformName:"diffuseTransmissionMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"diffuseTransmission"}),t.diffuseTransmissionColorTexture&&x(e,t.diffuseTransmissionColorTexture,"pbr_diffuseTransmissionColorSampler",r,{featureOptions:{define:"HAS_DIFFUSETRANSMISSIONCOLORMAP",enabledUniformName:"diffuseTransmissionColorMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"diffuseTransmissionColor"}))}function Ui(e,t,r,n,o={}){t&&(t.thicknessFactor!==void 0&&(r.uniforms.thicknessFactor=t.thicknessFactor),t.thicknessTexture&&x(e,t.thicknessTexture,"pbr_thicknessSampler",r,{featureOptions:{define:"HAS_THICKNESSMAP"},gltf:n,attributes:o,textureTransformSlot:"thickness"}),t.attenuationDistance!==void 0&&(r.uniforms.attenuationDistance=t.attenuationDistance),t.attenuationColor&&(r.uniforms.attenuationColor=t.attenuationColor))}function Di(e,t,r,n,o,i={}){!t||!r||(n.uniforms.multiscatterColorFactor=t.multiscatterColorFactor||t.multiscatterColor||[0,0,0],n.uniforms.scatterAnisotropy=Math.min(Math.max(t.scatterAnisotropy??0,-.999),.999),t.multiscatterColorTexture&&x(e,t.multiscatterColorTexture,"pbr_multiscatterColorSampler",n,{featureOptions:{define:"HAS_MULTISCATTERCOLORMAP",enabledUniformName:"multiscatterColorMapEnabled"},gltf:o,attributes:i,textureTransformSlot:"multiscatterColor"}))}function Li(e,t){e?.dispersion!==void 0&&(t.uniforms.dispersion=Math.max(e.dispersion,0))}function Pi(e,t,r,n,o={}){t&&(t.clearcoatFactor!==void 0&&(r.uniforms.clearcoatFactor=t.clearcoatFactor),t.clearcoatRoughnessFactor!==void 0&&(r.uniforms.clearcoatRoughnessFactor=t.clearcoatRoughnessFactor),t.clearcoatTexture&&x(e,t.clearcoatTexture,"pbr_clearcoatSampler",r,{featureOptions:{define:"HAS_CLEARCOATMAP",enabledUniformName:"clearcoatMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"clearcoat"}),t.clearcoatRoughnessTexture&&x(e,t.clearcoatRoughnessTexture,"pbr_clearcoatRoughnessSampler",r,{featureOptions:{define:"HAS_CLEARCOATROUGHNESSMAP",enabledUniformName:"clearcoatRoughnessMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"clearcoatRoughness"}),t.clearcoatNormalTexture&&x(e,t.clearcoatNormalTexture,"pbr_clearcoatNormalSampler",r,{featureOptions:{define:"HAS_CLEARCOATNORMALMAP"},gltf:n,attributes:o,textureTransformSlot:"clearcoatNormal"}))}function Oi(e,t,r,n,o={}){t&&(t.sheenColorFactor&&(r.uniforms.sheenColorFactor=t.sheenColorFactor),t.sheenRoughnessFactor!==void 0&&(r.uniforms.sheenRoughnessFactor=t.sheenRoughnessFactor),t.sheenColorTexture&&x(e,t.sheenColorTexture,"pbr_sheenColorSampler",r,{featureOptions:{define:"HAS_SHEENCOLORMAP",enabledUniformName:"sheenColorMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"sheenColor"}),t.sheenRoughnessTexture&&x(e,t.sheenRoughnessTexture,"pbr_sheenRoughnessSampler",r,{featureOptions:{define:"HAS_SHEENROUGHNESSMAP",enabledUniformName:"sheenRoughnessMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"sheenRoughness"}))}function wi(e,t,r,n,o={}){t&&(t.iridescenceFactor!==void 0&&(r.uniforms.iridescenceFactor=t.iridescenceFactor),t.iridescenceIor!==void 0&&(r.uniforms.iridescenceIor=t.iridescenceIor),(t.iridescenceThicknessMinimum!==void 0||t.iridescenceThicknessMaximum!==void 0)&&(r.uniforms.iridescenceThicknessRange=[t.iridescenceThicknessMinimum??100,t.iridescenceThicknessMaximum??400]),t.iridescenceTexture&&x(e,t.iridescenceTexture,"pbr_iridescenceSampler",r,{featureOptions:{define:"HAS_IRIDESCENCEMAP",enabledUniformName:"iridescenceMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"iridescence"}),t.iridescenceThicknessTexture&&x(e,t.iridescenceThicknessTexture,"pbr_iridescenceThicknessSampler",r,{featureOptions:{define:"HAS_IRIDESCENCETHICKNESSMAP"},gltf:n,attributes:o,textureTransformSlot:"iridescenceThickness"}))}function Gi(e,t,r,n,o={}){t&&(t.anisotropyStrength!==void 0&&(r.uniforms.anisotropyStrength=t.anisotropyStrength),t.anisotropyRotation!==void 0&&(r.uniforms.anisotropyRotation=t.anisotropyRotation),t.anisotropyTexture&&x(e,t.anisotropyTexture,"pbr_anisotropySampler",r,{featureOptions:{define:"HAS_ANISOTROPYMAP",enabledUniformName:"anisotropyMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"anisotropy"}))}function Hi(e,t){e?.emissiveStrength!==void 0&&(t.uniforms.emissiveStrength=e.emissiveStrength)}function x(e,t,r,n,o={}){const{featureOptions:i={},gltf:s,attributes:a={},textureTransformSlot:c}=o,{define:l,enabledUniformName:u}=i,f=xr(t);if(f>1){M.warn(`Skipping ${String(r)} because ${f} is not supported; only TEXCOORD_0 and TEXCOORD_1 are currently available`)();return}if(f===1&&!K(a,"TEXCOORD_1")){M.warn(`Skipping ${String(r)} because it requires TEXCOORD_1 but the primitive does not provide TEXCOORD_1`)();return}const m=Ji(t,s),h=m.texture?.source?.image;if(!h){M.warn(`Skipping unresolved glTF texture for ${String(r)}`)();return}const p=Vi(e,h,{id:m.uniformName||m.id,sampler:{addressModeU:"repeat",addressModeV:"repeat",minFilter:"linear",magFilter:"linear",...gi(m.texture.sampler)}});if(n.bindings[r]=p,l&&(n.defines[l]=!0),u&&(n.uniforms[u]=!0),c){const d=Tr(c);n.uniforms[d.uvSetUniform]=f,n.uniforms[d.uvTransformUniform]=bt(Rr(t))}n.generatedTextures.push(p)}function Vi(e,t,r){if("compressed"in t)return Ki(e,t,{id:r.id,sampler:r.sampler});const n=r.width!==void 0&&r.height!==void 0?{width:r.width,height:r.height}:e.getExternalImageSize(t),o=r.sampler.mipmapFilter==="nearest"||r.sampler.mipmapFilter==="linear",i=o?e.getMipLevelCount(n.width,n.height):1,s=e.createTexture({id:r.id,sampler:r.sampler,width:n.width,height:n.height,mipLevels:i,...o?{usage:T.SAMPLE|T.RENDER|T.COPY_DST|T.COPY_SRC}:{},...r.colorSpace?{format:r.colorSpace==="srgb"?"rgba8unorm-srgb":"rgba8unorm"}:{},data:t});return i>1&&(e.type==="webgl"?s.generateMipmapsWebGL():e.type==="webgpu"&&e.generateMipmapsWebGPU(s)),s}function Ji(e,t){if(e.texture||e.index===void 0||!t?.textures)return e;const r=t.textures[e.index];return r?"texture"in r&&r.texture?{...r,...e,texture:r.texture}:"source"in r?{...e,texture:r}:e:e}function Ne(e,t){return e.createTexture({...t,format:"rgba8unorm",width:1,height:1,mipLevels:1})}function Nr(e){return e.textureFormat}function ki(e,t,r){const{blockWidth:n=1,blockHeight:o=1}=Xn.getInfo(r);let i=1;for(let s=1;;s++){const a=Math.max(1,e>>s),c=Math.max(1,t>>s);if(a<n||c<o)break;i++}return i}function Ki(e,t,r){let n;if(Array.isArray(t.data)&&t.data[0]?.data?n=t.data:"mipmaps"in t&&Array.isArray(t.mipmaps)?n=t.mipmaps:n=[],n.length===0||!n[0]?.data)return M.warn("createCompressedTexture: compressed image has no valid mip levels, creating fallback")(),Ne(e,r);const o=n[0],i=o.width??t.width??0,s=o.height??t.height??0;if(i<=0||s<=0)return M.warn("createCompressedTexture: base level has invalid dimensions, creating fallback")(),Ne(e,r);const a=Nr(o);if(!a)return M.warn("createCompressedTexture: compressed image has no textureFormat, creating fallback")(),Ne(e,r);if(!e.isTextureFormatSupported(a))return M.warn(`createCompressedTexture: ${e.type} device does not support '${a}', creating fallback`)(),Ne(e,r);const c=ki(i,s,a),l=Math.min(n.length,c);let u=1;for(let m=1;m<l;m++){const h=n[m];if(!h.data||h.width<=0||h.height<=0){M.warn(`createCompressedTexture: mip level ${m} has invalid data/dimensions, truncating`)();break}const p=Nr(h);if(p&&p!==a){M.warn(`createCompressedTexture: mip level ${m} format '${p}' differs from base '${a}', truncating`)();break}const d=Math.max(1,i>>m),g=Math.max(1,s>>m);if(h.width!==d||h.height!==g){M.warn(`createCompressedTexture: mip level ${m} dimensions ${h.width}x${h.height} don't match expected ${d}x${g}, truncating`)();break}u++}const f=e.createTexture({...r,format:a,usage:T.TEXTURE|T.COPY_DST,width:i,height:s,mipLevels:u,data:o.data});for(let m=1;m<u;m++)f.writeData(n[m].data,{width:n[m].width,height:n[m].height,mipLevel:m});return f}var ji={modelOptions:{},pbrDebug:!1,imageBasedLightingEnvironment:void 0,lights:!0,useTangents:!1,useByteColors:!0,strictExtensions:!1};function Xi(e,t,r={}){const n=new Set,o={...ji,...r,generatedTextures:n},i=new lt(e,{modules:[ee]}),s=(t.materials||[]).map((p,d)=>Sr(e,{id:qi(p,d),parsedPPBRMaterial:Ct(e,p,{},{...o,gltf:t,validateAttributes:!1}),materialFactory:i})),a=new Map;(t.materials||[]).forEach((p,d)=>{a.set(p.id,s[d])});const c=new Map;t.meshes.forEach((p,d)=>{const g=vt(e,p,t,a,o);c.set(p.id,g)});const l=new Map,u=new Map,f=new Set,m=new Set,h=new Set;return t.nodes.forEach((p,d)=>{const g=zi(e,p,o);l.set(d,g),u.set(p.id,g)}),t.nodes.forEach((p,d)=>{if(l.get(d).add((p.children??[]).map(({id:g})=>{const C=u.get(g);if(!C)throw new Error(`Cannot find child ${g} of node ${d}`);return C})),p.mesh){const g=p.mesh,C=ci(t,p),b=g.primitives.some(B=>!!B.targets?.length),A=C||b&&f.has(g.id)?vt(e,g,t,a,o,C||void 0):c.get(g.id);if(!A)throw new Error(`Cannot find mesh child ${p.mesh.id} of node ${d}`);const I=l.get(d),y=c.get(g.id),w=m.has(g.id)&&(p.skin!==void 0||h.has(g.id))&&A===y?vt(e,g,t,a,o):A;if(I.add(w),I.userData.gltfMesh=w,m.add(g.id),p.skin!==void 0&&h.add(g.id),b){f.add(g.id);const B=g.primitives.find(L=>L.targets?.length)?.targets?.length||0,D=p.weights||g.weights||new Array(B).fill(0);I.userData.morphMeshes=[w],o.modelOptions?.userData?.gltfAnimatedCrowd?I.userData.morphWeights=[...D]:Ir(I,D)}}}),{scenes:t.scenes.map(p=>{const d=(p.nodes||[]).map(({id:g})=>{const C=u.get(g);if(!C)throw new Error(`Cannot find child ${g} of scene ${p.name||p.id}`);return C});return new Q({id:p.name||p.id,children:d})}),materials:s,gltfMeshIdToNodeMap:c,gltfNodeIdToNodeMap:u,gltfNodeIndexToNodeMap:l,generatedTextures:n}}function Ct(e,t,r,n){const o=Er(e,t,r,n);for(const i of o.generatedTextures)n.generatedTextures.add(i);return o}function zi(e,t,r){return new Q({id:t.name||t.id,children:[],matrix:t.matrix,display:t.extensions?.KHR_node_visibility?.visible!==!1,position:t.translation,rotation:t.rotation,scale:t.scale})}function vt(e,t,r,n,o,i){const s=(t.primitives||[]).map((a,c)=>Wi({device:e,gltfPrimitive:a,primitiveIndex:c,gltfMesh:t,gltf:r,gltfMaterialIdToMaterialMap:n,options:o,instancing:i}));return new Q({id:t.name||t.id,children:s})}function Wi({device:e,gltfPrimitive:t,primitiveIndex:r,gltfMesh:n,gltf:o,gltfMaterialIdToMaterialMap:i,options:s,instancing:a}){const c=t.name||`${n.name||n.id}-primitive-${r}`,l=Yi(t.attributes),u=$i(c,t,fi(t.mode??4,t.indices?.value,l)),f=u.vertexCount,m=Qi(t,o,u),h=Ct(e,t.material,u.attributes,{...s,gltf:o}),p=ii(e,{id:c,geometry:u,material:t.material&&i.get(t.material.id)||null,parsedPPBRMaterial:h,modelOptions:s.modelOptions,vertexCount:f,bounds:[t.attributes.POSITION.min,t.attributes.POSITION.max],instanceMatrices:a?.matrices,morphTargets:m?.targets});a&&(p.userData.gltfInstancing=a);const d=t.extensions?.KHR_materials_variants?.mappings||[];if(d.length){const g=new Map;for(const C of d){const b=typeof C.material=="number"?o.materials[C.material]:C.material,A=b&&i.get(b.id);if(!A)continue;const I=Ct(e,b,u.attributes,{...s,gltf:o});for(const y of C.variants||[])g.set(y,{material:A,parameters:{...p.model.parameters,...I.parameters,depthWriteEnabled:b.alphaMode!=="BLEND",cullMode:b.doubleSided?"none":"back"}})}p.userData.gltfMaterialVariants={defaultMaterial:p.model.material,defaultParameters:{...p.model.parameters},mappings:g}}return m&&(p.userData.morphTargets=m),p}function Qi(e,t,r){if(!e.targets?.length)return;const n={};for(const o of["POSITION","NORMAL","TANGENT"]){const i=r.attributes[o]?.value;i instanceof Float32Array&&(n[o]=new Float32Array(i))}return{geometry:r,baseAttributes:n,targets:e.targets.map(o=>{const i={};for(const s of["POSITION","NORMAL","TANGENT"]){const a=o[s],c=typeof a=="number"?t.accessors[a]:a;c?.value&&ArrayBuffer.isView(c.value)&&(i[s]=ct(c))}return i})}}function Yi(e){let t=1/0;for(const r of Object.values(e))if(r){const{value:n,size:o,components:i}=r,s=o??i;n?.length!==void 0&&s>=1&&(t=Math.min(t,n.length/s))}if(!Number.isFinite(t))throw new Error("Could not determine vertex count from attributes");return t}function $i(e,t,r){const n={};for(const[o,i]of Object.entries(t.attributes)){const{components:s,size:a,value:c,normalized:l}=i,u=o==="POSITION"||o==="NORMAL"||o==="TANGENT",f=!!(t.targets?.length&&u);n[o]={size:a??s,value:f?ct({value:c,normalized:l}):c,normalized:f?!1:l}}return new be({id:e,topology:r.topology,indices:r.indices??t.indices?.value,attributes:n})}function qi(e,t){return e.name||e.id||`material-${t}`}function Ur(e,t={}){const r=t.lightDefinitions||e.lights||e.extensions?.KHR_lights_punctual?.lights;if(!r||!Array.isArray(r)||r.length===0)return[];const n=[],o=os(e.nodes||[]),i=new Map;for(const s of e.nodes||[]){if(!Zi(s,o,t.nodeVisibility))continue;const a=s.light??s.extensions?.KHR_lights_punctual?.light;if(typeof a!="number"||t.nodeIdentifiers&&!t.nodeIdentifiers.has(s.id))continue;const c=r[a];if(!c)continue;const l=es(c.color||[1,1,1],t.useByteColors??!0),u=c.intensity??1,f=c.range,m=Dr(s,o,i);switch(c.type){case"directional":n.push(rs(m,l,u));break;case"point":n.push(ts(m,l,u,f));break;case"spot":n.push(ns(m,l,u,f,c.spot))}}return n}function Zi(e,t,r){let n=e;for(;n;){const o=r?.get(n.id);if(o?!o.display:n.extensions?.KHR_node_visibility?.visible===!1)return!1;n=t.get(n.id)}return!0}function es(e,t){return t?e.map(r=>r*255):jn(e,!1)}function ts(e,t,r,n){const o=Lr(e);let i=[1,0,0];return n!==void 0&&n>0&&(i=[1,0,1/(n*n)]),{type:"point",position:o,color:t,intensity:r,attenuation:i}}function rs(e,t,r){return{type:"directional",direction:Pr(e),color:t,intensity:r}}function ns(e,t,r,n,o={}){const i=Lr(e),s=Pr(e);let a=[1,0,0];return n!==void 0&&n>0&&(a=[1,0,1/(n*n)]),{type:"spot",position:i,direction:s,color:t,intensity:r,attenuation:a,innerConeAngle:o.innerConeAngle??0,outerConeAngle:o.outerConeAngle??Math.PI/4}}function os(e){const t=new Map;for(const r of e)for(const n of r.children||[])t.set(n.id,r);return t}function Dr(e,t,r){const n=r.get(e.id);if(n)return n;const o=is(e),i=t.get(e.id),s=i?new S(Dr(i,t,r)).multiplyRight(o):o;return r.set(e.id,s),s}function is(e){if(e.matrix)return new S(e.matrix);const t=new S;return e.translation&&t.translate(e.translation),e.rotation&&t.multiplyRight(new S().fromQuaternion(e.rotation)),e.scale&&t.scale(e.scale),t}function Lr(e){return e.transformAsPoint([0,0,0])}function Pr(e){return e.transformDirection([0,0,-1])}var ss=class extends Mo{animation;gltfNodeIdToNodeMap;onVisibilityChange;cameras;lightDefinitions;onLightChange;materials;clip;mixer;action;materialTextureTransformState=new Map;constructor(e){if(super({name:e.animation.name||"unnamed"}),this.animation=e.animation,this.gltfNodeIdToNodeMap=e.gltfNodeIdToNodeMap,this.onVisibilityChange=e.onVisibilityChange,this.cameras=e.cameras||[],this.lightDefinitions=e.lightDefinitions||[],this.onLightChange=e.onLightChange,this.materials=e.materials||[],this.animation.name||="unnamed",this.name=this.animation.name,this.animation.channels.some(t=>t.type==="material"||t.type==="textureTransform")&&!this.materials.length)throw new Error(`Animation ${this.animation.name} targets materials, but GLTFAnimator was created without a materials array`);this.mixer=e.mixer||new tr,this.clip=new xo({name:this.name,tracks:this.animation.channels.map(t=>this.createAnimationTrack(t))}),this.action=this.mixer.clipAction(this.clip).play()}applyTime(e){this.action.setTime(e),this.mixer.update(0)}createAnimationTrack(e){const t=cs(e.sampler.interpolation);if(e.type==="node")return new at({name:`${e.targetNodeId}.${e.path}`,times:e.sampler.input,values:e.sampler.output,interpolation:t,valueType:e.path==="rotation"?"quaternion":"vector",binding:{id:`node:${e.targetNodeId}:${e.path}`,getValue:()=>this.getNodeAnimationValue(e.targetNodeId,e.path),setValue:n=>this.applyNodeAnimationValue(e.targetNodeId,e.path,n)}});if(e.type==="camera"||e.type==="light")return new at({name:e.pointer,times:e.sampler.input,values:e.sampler.output,interpolation:t,binding:{id:e.pointer,getValue:()=>this.getSceneAnimationValue(e),setValue:n=>this.applySceneAnimationValue(e,n)}});const r=this.materials[e.targetMaterialIndex];if(!r)throw new Error(`Cannot find animation target material ${e.targetMaterialIndex} for ${e.pointer}`);return new at({name:e.pointer,times:e.sampler.input,values:e.sampler.output,interpolation:t,binding:{id:e.pointer,getValue:e.type==="material"?()=>ls(r,e):void 0,setValue:n=>{e.type==="material"?us(r,e,n):ps(r,e,n,this.materialTextureTransformState)}}})}getNodeAnimationValue(e,t){const r=this.getTargetNode(e);switch(t){case"translation":return Array.from(r.position);case"rotation":return Array.from(r.rotation);case"scale":return Array.from(r.scale);case"weights":return Array.from(r.userData.morphWeights||[]);case"visibility":return[r.display?1:0];default:return[]}}applyNodeAnimationValue(e,t,r){const n=this.getTargetNode(e);switch(t){case"translation":n.setPosition(r).updateMatrix();break;case"rotation":n.setRotation(r).updateMatrix();break;case"scale":n.setScale(r).updateMatrix();break;case"weights":Ir(n,r);break;case"visibility":n.setProps({display:r[0]!==0}),this.onVisibilityChange?.();break;default:M.warn(`Bad animation path ${t}`)()}}getTargetNode(e){const t=this.gltfNodeIdToNodeMap.get(e);if(!t)throw new Error(`Cannot find animation target node ${e}`);return t}getSceneAnimationValue(e){if(e.type==="camera"){const n=this.cameras[e.targetCameraIndex]?.[e.projection]?.[e.property];return typeof n=="number"?[n]:[]}const t=this.lightDefinitions[e.targetLightIndex],r=e.property==="innerConeAngle"||e.property==="outerConeAngle"?t?.spot?.[e.property]:t?.[e.property];return Array.isArray(r)?e.component===void 0?[...r]:[r[e.component]]:typeof r=="number"?[r]:[]}applySceneAnimationValue(e,t){if(e.type==="camera"){const n=this.cameras[e.targetCameraIndex];n?.[e.projection]&&(n[e.projection][e.property]=t[0]);return}const r=this.lightDefinitions[e.targetLightIndex];if(r){if(e.property==="innerConeAngle"||e.property==="outerConeAngle")r.spot||={},r.spot[e.property]=t[0];else if(e.component!==void 0){const n=[...r[e.property]||[1,1,1]];n[e.component]=t[0],r[e.property]=n}else r[e.property]=t.length===1?t[0]:[...t];this.onLightChange?.()}}},as=class extends So{mixer;activeClip;onUpdate;previousTimeSeconds;constructor(e){const t=new tr;super(e.animations.map((r,n)=>{const o=r.name||`Animation-${n}`;return new ss({gltfNodeIdToNodeMap:e.gltfNodeIdToNodeMap,onVisibilityChange:e.onVisibilityChange,cameras:e.cameras,lightDefinitions:e.lightDefinitions,onLightChange:e.onLightChange,materials:e.materials,mixer:t,animation:{name:o,channels:r.channels}})})),this.mixer=t,this.onUpdate=e.onUpdate,this.activeClip=this.clips[0]?.name,e.autoplay===!1?this.clips.forEach(r=>{r.playing=!1,r.action.stop()}):e.autoplay==="first"&&this.activeClip&&this.selectClip(this.activeClip)}setUpdateHandler(e){return this.onUpdate=e,this}setTime(e){const t=e/1e3,r=this.previousTimeSeconds===void 0?0:t-this.previousTimeSeconds;this.previousTimeSeconds=t;const n=r*this.mixer.timeScale;this.clips.forEach(o=>{if(!o.playing){o.action.stop();return}if(o.action.paused)return;o.action.resume();const i=Math.max(0,t-o.startTime)*o.speed;o.action.setTime(i-n*o.action.timeScale)}),this.mixer.update(r),this.onUpdate?.()}update(e){this.mixer.update(e),this.onUpdate?.()}selectClip(e,t={}){const r=this.clips.find(i=>i.name===e);if(!r)throw new Error(`Unknown animation clip: ${e}`);const n=this.clips.find(i=>i.name===this.activeClip),o=t.crossFadeDuration||0;for(const i of this.clips)i!==r&&!(o>0&&i===n)&&(i.playing=!1,i.action.stop());return r.playing=!0,o>0&&n&&n!==r?(n.playing=!0,n.action.crossFadeTo(r.action,o)):r.action.reset().setEffectiveWeight(1).play(),this.activeClip=e,r}};function cs(e){switch(e){case"STEP":case"LINEAR":case"CUBICSPLINE":return e;default:throw new Error(`Unsupported animation interpolation: ${e}`)}}function ls(e,t){const r=e.shaderInputs.getUniformValues().pbrMaterial?.[t.property];return Array.isArray(r)?t.component===void 0?[...r]:[r[t.component]]:typeof r=="number"?[r]:[]}function us(e,t,r){const n=t.component!==void 0?{[t.property]:ms(fs(e,t.property),t.component,r[0])}:{[t.property]:r.length===1?r[0]:r};e.setProps({pbrMaterial:n})}function fs(e,t){const r=e.shaderInputs.getUniformValues().pbrMaterial?.[t];return Array.isArray(r)?[...r]:[]}function ms(e,t,r){const n=[...e];return n[t]=r,n}function ps(e,t,r,n){const o=Tr(t.textureSlot),i=ds(n,e,t);switch(t.path){case"offset":t.component!==void 0?i.offset[t.component]=r[0]:i.offset=[r[0],r[1]];break;case"rotation":i.rotation=r[0];break;case"scale":t.component!==void 0?i.scale[t.component]=r[0]:i.scale=[r[0],r[1]]}e.setProps({pbrMaterial:{[o.uvTransformUniform]:hi(t.baseTransform,i)}})}function ds(e,t,r){const n=e.get(t)||{};let o=n[r.textureSlot];return o||(o={offset:[...r.baseTransform.offset],rotation:r.baseTransform.rotation,scale:[...r.baseTransform.scale]},n[r.textureSlot]=o,e.set(t,n)),o}var hs=class{bindings;scenes;constructor(e){this.scenes=e.scenes,this.bindings=gs(e),this.update()}update(){if(this.bindings.length===0)return;const e=new Map;for(const t of this.scenes)t.preorderTraversal((r,{worldMatrix:n})=>{r instanceof Q&&e.set(r,new S(n))});for(const t of this.bindings){Do({joints:t.joints,meshNode:t.node,worldMatrices:e,inverseBindMatrices:t.inverseBindMatrices,target:t.jointMatrices});for(const r of t.models)r.model.shaderInputs.setProps({skin:{jointMatrices:t.jointMatrices}})}}getBinding(e){return this.bindings.find(t=>typeof e=="number"?t.nodeIndex===e:t.node===e)}};function gs(e){const{gltf:t,gltfNodeIndexToNodeMap:r}=e,n=[],o=t.skins||[],i=new Set;for(const s of e.scenes)s.preorderTraversal(a=>{a instanceof Q&&i.add(a)});for(const[s,a]of t.nodes.entries()){const c=a.skin;if(c===void 0||!a.mesh)continue;const l=As(t,c),u=o[l],f=r.get(s);if(!u||!f||!i.has(f))continue;const m=u.joints.flatMap(b=>{const A=r.get(b);return A?[A]:[]});if(m.length!==u.joints.length)continue;const h=a.mesh,p=f.userData.gltfMesh,d=p instanceof Q?p:f.children.find(b=>b instanceof Q&&b.id===(h.name||h.id));if(!(d instanceof Q))continue;const g=d.children.flatMap(b=>b instanceof te?[b]:[]),C=u.inverseBindMatrices?.value;n.push({nodeIndex:s,skinIndex:l,node:f,joints:m,...C instanceof Float32Array?{inverseBindMatrices:C}:{},jointMatrices:new Float32Array(m.length*16),models:g})}return n}function As(e,t){return typeof t=="number"?t:(e.skins||[]).findIndex(r=>{if(r===t||t.id&&r.id===t.id)return!0;if(r.joints.length!==t.joints?.length||!r.joints.every((n,o)=>n===t.joints?.[o]))return!1;if(typeof t.inverseBindMatrices=="number"){const n=e.accessors[t.inverseBindMatrices];return!r.inverseBindMatrices||r.inverseBindMatrices===n}return!0})}var bs={supportLevel:"none",standardStatus:"unknown",comment:"Not currently listed in the luma.gl glTF extension support registry."},Or={KHR_draco_mesh_compression:{supportLevel:"built-in",standardStatus:"ratified",comment:"Decoded by loaders.gl before luma.gl builds the scenegraph."},EXT_meshopt_compression:{supportLevel:"built-in",standardStatus:"ratified",comment:"EXT meshopt-compressed buffer views are decoded by loaders.gl before rendering."},KHR_meshopt_compression:{supportLevel:"none",standardStatus:"release-candidate",comment:"The installed loaders.gl GLTFLoader supports EXT_meshopt_compression, not the KHR release candidate."},KHR_mesh_quantization:{supportLevel:"built-in",standardStatus:"ratified",comment:"Loader-materialized quantized accessors retain their typed values and normalization."},EXT_mesh_features:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Feature identifiers are decoded by loaders.gl; automatic rendering and picking are application-owned."},EXT_structural_metadata:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Structural metadata is decoded by loaders.gl; automatic rendering and querying are application-owned."},KHR_lights_punctual:{supportLevel:"built-in",standardStatus:"ratified",comment:"Parsed into luma.gl Light objects."},KHR_materials_unlit:{supportLevel:"built-in",standardStatus:"ratified",comment:"Unlit materials bypass the default lighting path."},KHR_materials_emissive_strength:{supportLevel:"built-in",standardStatus:"ratified",comment:"Applied by the stock PBR shader."},KHR_texture_basisu:{supportLevel:"built-in",standardStatus:"ratified",comment:"BasisU / KTX2 textures pass through when the device supports them."},KHR_texture_transform:{supportLevel:"built-in",standardStatus:"ratified",comment:"Per-slot UV transforms and animated pointers are applied at runtime; avoid duplicate legacy loader-side baking."},EXT_texture_webp:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Texture source is resolved during load; final support depends on browser and device decode support."},EXT_texture_avif:{supportLevel:"none",standardStatus:"ratified",comment:"The image loader can decode supported AVIF images, but GLTFLoader does not select EXT_texture_avif sources."},KHR_materials_specular:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now applies specular factors and textures to the dielectric F0 term."},KHR_materials_ior:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now drives dielectric reflectance from the glTF IOR value."},KHR_materials_transmission:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now applies transmission to the base layer and exposes transparency through alpha, without a scene-color refraction buffer."},KHR_materials_volume:{supportLevel:"built-in",standardStatus:"ratified",comment:"Thickness and attenuation now tint transmitted light in the stock shader."},KHR_materials_clearcoat:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now adds a secondary clearcoat specular lobe."},KHR_materials_sheen:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now adds a sheen lobe for cloth-like materials."},KHR_materials_iridescence:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now tints specular response with a view-dependent thin-film iridescence approximation."},KHR_materials_anisotropy:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now shapes highlights and IBL response with an anisotropy-direction approximation."},KHR_materials_pbrSpecularGlossiness:{supportLevel:"loader-only",standardStatus:"archived",comment:"Extension data can be loaded, but it is not translated into the default metallic-roughness material path."},KHR_materials_variants:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Primitive material variants can be selected and restored on the generated scenegraph."},EXT_mesh_gpu_instancing:{supportLevel:"built-in",standardStatus:"ratified",comment:"Accessor-backed instance transforms use one instanced draw per source primitive."},KHR_node_visibility:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Recursive node visibility controls rendered geometry, punctual lights, and animation."},KHR_animation_pointer:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Node transforms, morph weights and visibility, material factors, texture transforms, camera projections, and punctual lights are wired to runtime updates."},EXT_materials_bump:{supportLevel:"built-in",standardStatus:"draft",comment:"The experimental bump-map draft perturbs the canonical surface normal from a linear height texture."},KHR_materials_diffuse_transmission:{supportLevel:"built-in",standardStatus:"release-candidate",comment:"The Khronos release candidate adds energy-conserving back-lit diffuse transmission and independent color/factor textures."},KHR_materials_dispersion:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"The canonical PBR shader separates red, green, and blue transmission using wavelength-dependent refraction."},KHR_materials_volume_scatter:{supportLevel:"parsed-and-wired",standardStatus:"draft",comment:"The unratified volume-scattering draft is approximated per surface; random-walk and screen-space diffusion are not implemented."},KHR_xmp:{supportLevel:"none",standardStatus:"archived",comment:"Metadata payloads remain in the loaded glTF, but luma.gl does not interpret them."},KHR_xmp_json_ld:{supportLevel:"none",standardStatus:"ratified",comment:"Metadata is preserved in the glTF, but luma.gl does not interpret it."},EXT_lights_image_based:{supportLevel:"none",standardStatus:"multi-vendor",comment:"Use loadPBREnvironment() or custom environment setup instead."},EXT_texture_video:{supportLevel:"none",standardStatus:"multi-vendor",comment:"Video textures are not created automatically by the stock pipeline."},MSFT_lod:{supportLevel:"parsed-and-wired",standardStatus:"vendor",comment:"Node levels are parsed and selected by opt-in animated crowds; material LOD and GPU-driven selection are not implemented."}};function wr(e,t){const r=Array.from(Ms(e)).sort(),n=new Set(e.extensionsRequired||[]),o=r.map(i=>{const s=Or[i]||bs,a=Bs(i,s,e,t);return[i,{extensionName:i,required:n.has(i),supported:Ss(a.supportLevel),supportLevel:a.supportLevel,standardStatus:s.standardStatus,comment:a.comment}]});return new Map(o)}function Cs(e,t){return Array.from(wr(e,t).values()).filter(r=>r.required&&!r.supported)}function vs(e,t){const r=Cs(e,t);if(r.length)throw new Error(`Unsupported required glTF extensions: ${r.map(n=>n.extensionName).join(", ")}`)}function Bs(e,t,r,n){if(e!=="KHR_texture_basisu"||!n)return t;const o=_s(r).find(i=>i===null||!n.isTextureFormatSupported(i));return o===void 0?t:{supportLevel:"none",comment:o===null?`The ${n.type} device cannot use a BasisU texture whose transcoded GPU format is missing.`:`The ${n.type} device does not support the transcoded BasisU texture format '${o}'.`}}function _s(e){const t=[];for(const r of e.textures||[]){const n=r?.source?.image;if(!n?.compressed)continue;const o=Array.isArray(n.data)?n.data[0]:Array.isArray(n.mipmaps)?n.mipmaps[0]:void 0;t.push(o?.textureFormat??null)}return t}function Gr(e){return Or[e]||null}function Ms(e){const t=e,r=new Set;return Ue(r,e.extensionsUsed),Ue(r,e.extensionsRequired),Ue(r,t.extensionsRemoved),Ue(r,Object.keys(e.extensions||{})),(t.lights?.length||(e.nodes||[]).some(n=>"light"in n))&&r.add("KHR_lights_punctual"),(e.materials||[]).some(n=>{const o=n;return o.unlit||o.extensions?.KHR_materials_unlit})&&r.add("KHR_materials_unlit"),r}function Ue(e,t=[]){for(const r of t)e.add(r)}function Ss(e){return e==="built-in"||e==="parsed-and-wired"}function Is(e){const t=e.animations||[],r=new Map,n=new Map;return t.flatMap((o,i)=>{const s=o.name||`Animation-${i}`,a=new Map,c=o.channels.flatMap(({sampler:l,target:u})=>{const f=Fs(e,u),m=`${l}:${f??0}`;let h=a.get(m);if(!h){const d=o.samplers[l];if(!d)throw new Error(`Cannot find animation sampler ${l}`);const{input:g,interpolation:C="LINEAR",output:b}=d,A=Gs(e.accessors[g],r),I=Hs(e.accessors[b],n);h={input:A,interpolation:C,output:f!==void 0?Ns(I,A.length,C,f):I},a.set(m,h)}const p=Ts(e,u,h);return p?[p]:[]});return c.length?[{name:s,channels:c}]:[]})}function Ts(e,t,r){if(t.path==="pointer")return Rs(e,t,r);const n=Hr(t.path);if(!n)return null;const o=e.nodes[t.node??0];if(!o)throw new Error(`Cannot find animation target ${t.node}`);return{type:"node",sampler:r,targetNodeId:o.id,path:n}}function Rs(e,t,r){const n=t.extensions?.KHR_animation_pointer?.pointer;if(typeof n!="string"||!n.startsWith("/"))return M.warn("KHR_animation_pointer channel is missing a valid JSON pointer and will be skipped")(),null;const o=Os(n);switch(o[0]){case"nodes":return Es(e,o,r,n);case"materials":return Us(e,o,r,n);case"cameras":return xs(e,o,r,n);case"extensions":if(o[1]==="KHR_lights_punctual")return ys(e,o,r,n)}return Y(n,`top-level target "${o[0]}" has no runtime animation mapping`),null}function xs(e,t,r,n){const o=Number(t[1]),i=e.cameras?.[o],s=t[2],a=t[3];return t.length!==4||!Number.isInteger(o)||!i||s!=="perspective"&&s!=="orthographic"||i.type!==s||!(s==="perspective"?["aspectRatio","yfov","znear","zfar"]:["xmag","ymag","znear","zfar"]).includes(a)?(Y(n,"camera pointers must target a supported projection property"),null):{type:"camera",sampler:r,pointer:n,targetCameraIndex:o,projection:s,property:a}}function ys(e,t,r,n){const o=Number(t[3]),i=e.lights||e.extensions?.KHR_lights_punctual?.lights,s=t[4]==="spot",a=s?t[5]:t[4],c=!s&&a==="color"?t[5]:void 0,l=["color","intensity","range","innerConeAngle","outerConeAngle"],u=s||c!==void 0?6:5;return t[2]!=="lights"||t.length!==u||!Number.isInteger(o)||!Array.isArray(i)||!i[o]||!l.includes(a)||s&&a!=="innerConeAngle"&&a!=="outerConeAngle"||c!==void 0&&(!/^[0-2]$/.test(c)||a!=="color")?(Y(n,"punctual-light pointers must target supported typed light properties"),null):{type:"light",sampler:r,pointer:n,targetLightIndex:o,property:a,...c===void 0?{}:{component:Number(c)}}}function Es(e,t,r,n){const o=t.length===5&&t[2]==="extensions"&&t[3]==="KHR_node_visibility"&&t[4]==="visible";if(t.length!==3&&!o)return Y(n,"node pointers must target transforms, morph weights, or KHR_node_visibility.visible"),null;const i=Number(t[1]),s=e.nodes[i];if(!Number.isInteger(i)||!s)return M.warn(`KHR_animation_pointer target ${n} references a missing node and will be skipped`)(),null;if(o&&r.interpolation!=="STEP")return Y(n,"boolean visibility animation requires STEP interpolation"),null;const a=o?"visibility":Hr(t[2]);return a?{type:"node",sampler:r,targetNodeId:s.id,path:a}:(Y(n,`node property "${t[2]}" has no runtime animation mapping`),null)}function Fs(e,t){let r;if(t.path==="weights")r=t.node;else if(t.path==="pointer"){const i=t.extensions?.KHR_animation_pointer?.pointer,s=typeof i=="string"?/^\/nodes\/(\d+)\/weights$/.exec(i):null;if(!s)return;r=Number(s[1])}else return;const n=e.nodes[r??0],o=typeof n?.mesh=="number"?e.meshes[n.mesh]:n?.mesh;return n?.weights?.length||o?.weights?.length||o?.primitives?.[0]?.targets?.length||1}function Ns(e,t,r,n){const o=r==="CUBICSPLINE"?3:1,i=e.length/(Math.max(t,1)*o),s=n>1?n:Number.isInteger(i)&&i>1?i:n;if(s<=1)return e;const a=e.flat(),c=[];for(let l=0;l<a.length;l+=s)c.push(a.slice(l,l+s));return c}function Us(e,t,r,n){if(t.length<3)return Y(n,"material pointers must include a material index and target property path"),null;const o=Number(t[1]),i=e.materials[o];if(!Number.isInteger(o)||!i)return M.warn(`KHR_animation_pointer target ${n} references a missing material and will be skipped`)(),null;const s=Ds(i,t.slice(2));return"reason"in s?(Y(n,s.reason),null):{sampler:r,pointer:n,targetMaterialIndex:o,...s}}function Hr(e){switch(e){case"translation":case"rotation":case"scale":case"weights":return e;default:return null}}function Ds(e,t){const r=Ls(e,t);if(!("reason"in r)||r.reason!=="not-a-texture-transform-target")return r;switch(t.join("/")){case"pbrMetallicRoughness/baseColorFactor":return e.pbrMetallicRoughness?{type:"material",property:"baseColorFactor"}:{reason:_(t)};case"pbrMetallicRoughness/metallicFactor":return e.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:0}:{reason:_(t)};case"pbrMetallicRoughness/roughnessFactor":return e.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:1}:{reason:_(t)};case"normalTexture/scale":return e.normalTexture?{type:"material",property:"normalScale"}:{reason:_(t)};case"occlusionTexture/strength":return e.occlusionTexture?{type:"material",property:"occlusionStrength"}:{reason:_(t)};case"emissiveFactor":return{type:"material",property:"emissiveFactor"};case"alphaCutoff":return{type:"material",property:"alphaCutoff"};case"extensions/KHR_materials_specular/specularFactor":return e.extensions?.KHR_materials_specular?{type:"material",property:"specularIntensityFactor"}:{reason:_(t)};case"extensions/KHR_materials_specular/specularColorFactor":return e.extensions?.KHR_materials_specular?{type:"material",property:"specularColorFactor"}:{reason:_(t)};case"extensions/KHR_materials_ior/ior":return e.extensions?.KHR_materials_ior?{type:"material",property:"ior"}:{reason:_(t)};case"extensions/EXT_materials_bump/bumpFactor":return e.extensions?.EXT_materials_bump?{type:"material",property:"bumpFactor"}:{reason:_(t)};case"extensions/KHR_materials_diffuse_transmission/diffuseTransmissionFactor":return e.extensions?.KHR_materials_diffuse_transmission?{type:"material",property:"diffuseTransmissionFactor"}:{reason:_(t)};case"extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorFactor":return e.extensions?.KHR_materials_diffuse_transmission?{type:"material",property:"diffuseTransmissionColorFactor"}:{reason:_(t)};case"extensions/KHR_materials_volume_scatter/multiscatterColorFactor":case"extensions/KHR_materials_volume_scatter/multiscatterColor":return e.extensions?.KHR_materials_volume_scatter?{type:"material",property:"multiscatterColorFactor"}:{reason:_(t)};case"extensions/KHR_materials_volume_scatter/scatterAnisotropy":return e.extensions?.KHR_materials_volume_scatter?{type:"material",property:"scatterAnisotropy"}:{reason:_(t)};case"extensions/KHR_materials_dispersion/dispersion":return e.extensions?.KHR_materials_dispersion?{type:"material",property:"dispersion"}:{reason:_(t)};case"extensions/KHR_materials_transmission/transmissionFactor":return e.extensions?.KHR_materials_transmission?{type:"material",property:"transmissionFactor"}:{reason:_(t)};case"extensions/KHR_materials_volume/thicknessFactor":return e.extensions?.KHR_materials_volume?{type:"material",property:"thicknessFactor"}:{reason:_(t)};case"extensions/KHR_materials_volume/attenuationDistance":return e.extensions?.KHR_materials_volume?{type:"material",property:"attenuationDistance"}:{reason:_(t)};case"extensions/KHR_materials_volume/attenuationColor":return e.extensions?.KHR_materials_volume?{type:"material",property:"attenuationColor"}:{reason:_(t)};case"extensions/KHR_materials_clearcoat/clearcoatFactor":return e.extensions?.KHR_materials_clearcoat?{type:"material",property:"clearcoatFactor"}:{reason:_(t)};case"extensions/KHR_materials_clearcoat/clearcoatRoughnessFactor":return e.extensions?.KHR_materials_clearcoat?{type:"material",property:"clearcoatRoughnessFactor"}:{reason:_(t)};case"extensions/KHR_materials_sheen/sheenColorFactor":return e.extensions?.KHR_materials_sheen?{type:"material",property:"sheenColorFactor"}:{reason:_(t)};case"extensions/KHR_materials_sheen/sheenRoughnessFactor":return e.extensions?.KHR_materials_sheen?{type:"material",property:"sheenRoughnessFactor"}:{reason:_(t)};case"extensions/KHR_materials_iridescence/iridescenceFactor":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceFactor"}:{reason:_(t)};case"extensions/KHR_materials_iridescence/iridescenceIor":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceIor"}:{reason:_(t)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMinimum":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:0}:{reason:_(t)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMaximum":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:1}:{reason:_(t)};case"extensions/KHR_materials_anisotropy/anisotropyStrength":return e.extensions?.KHR_materials_anisotropy?{type:"material",property:"anisotropyStrength"}:{reason:_(t)};case"extensions/KHR_materials_anisotropy/anisotropyRotation":return e.extensions?.KHR_materials_anisotropy?{type:"material",property:"anisotropyRotation"}:{reason:_(t)};case"extensions/KHR_materials_emissive_strength/emissiveStrength":return e.extensions?.KHR_materials_emissive_strength?{type:"material",property:"emissiveStrength"}:{reason:_(t)};default:return{reason:_(t)}}}function Ls(e,t){const r=t.lastIndexOf("extensions");if(r<0||t[r+1]!=="KHR_texture_transform"||r<1)return{reason:"not-a-texture-transform-target"};const n=di(t.slice(0,r));if(!n)return{reason:ws(t.slice(0,r))};const o=Ps(e,n.pathSegments);if(!o)return{reason:`texture-transform target "${t.slice(0,r).join("/")}" does not exist on the referenced material`};const i=t[r+2];if(i==="texCoord")return{reason:"animated KHR_texture_transform.texCoord is unsupported because texCoord selection is structural, not a runtime float/vector update"};if(i!=="offset"&&i!=="rotation"&&i!=="scale")return{reason:`KHR_texture_transform property "${i}" is not animatable; supported properties are offset, rotation, and scale`};const s=t[r+3];if(t.length>r+4)return{reason:`KHR_texture_transform.${i} does not support nested property paths`};let a;if(s!==void 0){if(a=Number(s),i==="rotation")return{reason:"KHR_texture_transform.rotation does not support component indices"};if(!Number.isInteger(a)||a<0||a>1)return{reason:`KHR_texture_transform.${i} component index "${s}" is invalid; only 0 and 1 are supported`}}return{type:"textureTransform",textureSlot:n.slot,path:i,component:a,baseTransform:Rr(o)}}function Ps(e,t){let r=e;for(const n of t)if(r=r?.[n],!r)return null;return r}function Os(e){return e.slice(1).split("/").map(t=>t.replace(/~1/g,"/").replace(/~0/g,"~"))}function _(e){const t=Vr(e);if(t){const r=Gr(t);if(r?.supportLevel==="none")return`${t} is referenced by this pointer, but ${r.comment.charAt(0).toLowerCase()}${r.comment.slice(1)}`}return`no runtime target exists for material property "${e.join("/")}"`}function ws(e){const t=Vr(e);if(t){const r=Gr(t);if(r?.supportLevel==="none")return`${t} is referenced by this pointer, but ${r.comment.charAt(0).toLowerCase()}${r.comment.slice(1)}`}return`texture-transform target "${e.join("/")}" has no runtime texture-slot mapping`}function Vr(e){const t=e.indexOf("extensions"),r=e[t+1];return t>=0&&r?r:null}function Y(e,t){M.warn(`KHR_animation_pointer target ${e} will be skipped because ${t}`)()}function Gs(e,t){if(t.has(e))return t.get(e);const{value:r,components:n}=Jr(e);De(n===1,"accessorToJsArray1D must have exactly 1 component");const o=Array.from(r);return t.set(e,o),o}function Hs(e,t){if(t.has(e))return t.get(e);const{value:r,components:n}=Jr(e);De(n>=1,"accessorToJsArray2D must have at least 1 component");const o=[];for(let i=0;i<r.length;i+=n)o.push(Array.from(r.slice(i,i+n)));return t.set(e,o),o}function Jr(e){if(e.value)return{value:e.value,components:e.components};const t=e.bufferView?.data;De(t!==void 0),De(e.componentType===5126);const r=e.type==="SCALAR"?1:Number(e.type.slice(3));return{value:new Float32Array(t.buffer,t.byteOffset+(e.byteOffset||0),e.count*r),components:r}}function De(e,t){if(!e)throw new Error(t)}var Vs=class{variants;names;activeVariant=null;modelNodes;constructor(e,t){const r=e.extensions?.KHR_materials_variants?.variants||[];this.variants=r.map((o,i)=>({name:o.name||`Variant-${i}`,index:i})),this.names=this.variants.map(o=>o.name);const n=new Set;for(const o of t)o.preorderTraversal(i=>{i instanceof te&&i.userData.gltfMaterialVariants&&n.add(i)});this.modelNodes=Array.from(n)}selectVariant(e){const t=this.variants.find(r=>r.name===e);if(!t)throw new Error(`Unknown glTF material variant: ${e}`);for(const r of this.modelNodes){const n=r.userData.gltfMaterialVariants,o=n.mappings.get(t.index);r.model.setMaterial(o?.material||n.defaultMaterial),r.model.setParameters(o?.parameters||n.defaultParameters)}this.activeVariant=e}resetVariant(){for(const e of this.modelNodes){const t=e.userData.gltfMaterialVariants;e.model.setMaterial(t.defaultMaterial),e.model.setParameters(t.defaultParameters)}this.activeVariant=null}};function Js(e,t,r){r?.strictExtensions&&vs(t,e);const{scenes:n,materials:o,gltfMeshIdToNodeMap:i,gltfNodeIdToNodeMap:s,gltfNodeIndexToNodeMap:a,generatedTextures:c}=Xi(e,t,r),l=Is(t),u=(t.lights||t.extensions?.KHR_lights_punctual?.lights||[]).map(B=>({...B,...Array.isArray(B.color)?{color:[...B.color]}:{},...B.spot?{spot:{...B.spot}}:{}})),f=(t.cameras||[]).map(B=>{const D={...B};return B.perspective&&(D.perspective={...B.perspective}),B.orthographic&&(D.orthographic={...B.orthographic}),D}),m={useByteColors:r?.useByteColors??!0,nodeVisibility:s,lightDefinitions:u},h=Ur(t,m),p=()=>{h.splice(0,h.length,...Ur(t,m))},d=new as({onVisibilityChange:p,cameras:f,lightDefinitions:u,onLightChange:p,animations:l,gltfNodeIdToNodeMap:s,materials:o}),g=new Vs(t,n),C=wr(t,e),b=n.map(B=>kr(B.getBounds())),A=ks(b),I=new hs({gltf:t,scenes:n,gltfNodeIndexToNodeMap:a});d.setUpdateHandler(()=>I.update());let y=!1;return{scenes:n,materials:o,variants:g,cameras:f,animator:d,animations:l,lights:h,extensionSupport:C,sceneBounds:b,modelBounds:A,gltfMeshIdToNodeMap:i,gltfNodeIdToNodeMap:s,gltfNodeIndexToNodeMap:a,skins:I,gltf:t,destroy:()=>{if(y)return;y=!0;const B=new Set([...n,...i.values(),...s.values()]),D=new Set,L=new Set(o);for(const N of B)N.preorderTraversal(G=>{G instanceof te&&(D.add(G),G.model?.material&&L.add(G.model.material))});for(const N of D)N.destroy();for(const N of B)N.destroy();for(const N of L)N.destroy();for(const N of c)N.destroy();c.clear()}}}function kr(e){if(!e)return{bounds:null,center:[0,0,0],size:[0,0,0],radius:.5,recommendedOrbitDistance:1};const t=[[e[0][0],e[0][1],e[0][2]],[e[1][0],e[1][1],e[1][2]]],r=[t[1][0]-t[0][0],t[1][1]-t[0][1],t[1][2]-t[0][2]],n=[t[0][0]+r[0]*.5,t[0][1]+r[1]*.5,t[0][2]+r[2]*.5],o=Math.max(r[0],r[1],r[2])*.5,i=Math.max(.5*Math.hypot(r[0],r[1],r[2]),.001);return{bounds:t,center:n,size:r,radius:i,recommendedOrbitDistance:Math.max(Math.max(o,.001)/Math.tan(Math.PI/6)*1.15,i*1.1)}}function ks(e){let t=null;for(const r of e)if(r.bounds){if(!t){t=[[...r.bounds[0]],[...r.bounds[1]]];continue}for(let n=0;n<3;n++)t[0][n]=Math.min(t[0][n],r.bounds[0][n]),t[1][n]=Math.max(t[1][n],r.bounds[1][n])}return kr(t)}function P(e,t){if(!e)throw new Error(t||"assert failed: gltf")}var Kr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jr={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},Ks=1.33,Xr=["SCALAR","VEC2","VEC3","VEC4"],js=new Map([[Int8Array,5120],[Uint8Array,5121],[Int16Array,5122],[Uint16Array,5123],[Uint32Array,5125],[Float32Array,5126],[Float64Array,5130]]),Xs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zs={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function zr(e){return Xr[e-1]||Xr[0]}function Le(e){const t=js.get(e.constructor);if(!t)throw new Error("Illegal typed array");return t}function Bt(e,t){const r=Ws[e.componentType],n=Xs[e.type],o=zs[e.componentType],i=e.count*n,s=e.count*n*o;return P(s>=0&&s<=t.byteLength),{ArrayType:r,length:i,byteLength:s,componentByteSize:jr[e.componentType],numberOfComponentsInElement:Kr[e.type]}}function Qs(e){let{images:t,bufferViews:r}=e;t=t||[],r=r||[];const n=t.map(s=>s.bufferView);r=r.filter(s=>!n.includes(s));const o=r.reduce((s,a)=>s+a.byteLength,0),i=t.reduce((s,a)=>{const{width:c,height:l}=a.image;return s+c*l},0);return o+Math.ceil(4*i*Ks)}function Ys(e,t,r){const n=e.bufferViews[r];P(n);const o=t[n.buffer];P(o);const i=(n.byteOffset||0)+o.byteOffset;return new Uint8Array(o.arrayBuffer,i,n.byteLength)}function $s(e,t,r){const n=typeof r=="number"?e.accessors?.[r]:r;if(!n)throw new Error(`No gltf accessor ${JSON.stringify(r)}`);const o=e.bufferViews?.[n.bufferView||0];if(!o)throw new Error(`No gltf buffer view for accessor ${o}`);const{arrayBuffer:i,byteOffset:s}=t[o.buffer],a=(s||0)+(n.byteOffset||0)+(o.byteOffset||0),{ArrayType:c,length:l,componentByteSize:u,numberOfComponentsInElement:f}=Bt(n,o),m=u*f,h=o.byteStride||m;if(typeof o.byteStride>"u"||o.byteStride===m)return new c(i,a,l);const p=new c(l);for(let d=0;d<n.count;d++){const g=new c(i,a+d*h,f);p.set(g,d*f)}return p}function qs(){return{asset:{version:"2.0",generator:"loaders.gl"},buffers:[],extensions:{},extensionsRequired:[],extensionsUsed:[]}}var E=class{gltf;sourceBuffers;byteLength;constructor(e){this.gltf={json:e?.json||qs(),buffers:e?.buffers||[],images:e?.images||[]},this.sourceBuffers=[],this.byteLength=0,this.gltf.buffers&&this.gltf.buffers[0]&&(this.byteLength=this.gltf.buffers[0].byteLength,this.sourceBuffers=[this.gltf.buffers[0]])}get json(){return this.gltf.json}getApplicationData(e){return this.json[e]}getExtraData(e){return(this.json.extras||{})[e]}hasExtension(e){const t=this.getUsedExtensions().find(n=>n===e),r=this.getRequiredExtensions().find(n=>n===e);return typeof t=="string"||typeof r=="string"}getExtension(e){const t=this.getUsedExtensions().find(n=>n===e),r=this.json.extensions||{};return t?r[e]:null}getRequiredExtension(e){return this.getRequiredExtensions().find(t=>t===e)?this.getExtension(e):null}getRequiredExtensions(){return this.json.extensionsRequired||[]}getUsedExtensions(){return this.json.extensionsUsed||[]}getRemovedExtensions(){return this.json.extensionsRemoved||[]}getObjectExtension(e,t){return(e.extensions||{})[t]}getScene(e){return this.getObject("scenes",e)}getNode(e){return this.getObject("nodes",e)}getSkin(e){return this.getObject("skins",e)}getMesh(e){return this.getObject("meshes",e)}getMaterial(e){return this.getObject("materials",e)}getAccessor(e){return this.getObject("accessors",e)}getTexture(e){return this.getObject("textures",e)}getSampler(e){return this.getObject("samplers",e)}getImage(e){return this.getObject("images",e)}getBufferView(e){return this.getObject("bufferViews",e)}getBuffer(e){return this.getObject("buffers",e)}getObject(e,t){if(typeof t=="object")return t;const r=this.json[e]&&this.json[e][t];if(!r)throw new Error(`glTF file error: Could not find ${e}[${t}]`);return r}getTypedArrayForBufferView(e){e=this.getBufferView(e);const t=e.buffer,r=this.gltf.buffers[t];P(r);const n=(e.byteOffset||0)+r.byteOffset;return new Uint8Array(r.arrayBuffer,n,e.byteLength)}getTypedArrayForAccessor(e){const t=this.getAccessor(e);return $s(this.gltf.json,this.gltf.buffers,t)}getTypedArrayForImageData(e){e=this.getAccessor(e);const t=this.getBufferView(e.bufferView),r=this.getBuffer(t.buffer).data,n=t.byteOffset||0;return new Uint8Array(r,n,t.byteLength)}addApplicationData(e,t){return this.json[e]=t,this}addExtraData(e,t){return this.json.extras=this.json.extras||{},this.json.extras[e]=t,this}addObjectExtension(e,t,r){return e.extensions=e.extensions||{},e.extensions[t]=r,this.registerUsedExtension(t),this}setObjectExtension(e,t,r){const n=e.extensions||{};n[t]=r}removeObjectExtension(e,t){const r=e?.extensions||{};if(r[t]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const n=this.json.extensionsRemoved;n.includes(t)||n.push(t)}delete r[t]}addExtension(e,t={}){return P(t),this.json.extensions=this.json.extensions||{},this.json.extensions[e]=t,this.registerUsedExtension(e),t}addRequiredExtension(e,t={}){return P(t),this.addExtension(e,t),this.registerRequiredExtension(e),t}registerUsedExtension(e){this.json.extensionsUsed=this.json.extensionsUsed||[],this.json.extensionsUsed.find(t=>t===e)||this.json.extensionsUsed.push(e)}registerRequiredExtension(e){this.registerUsedExtension(e),this.json.extensionsRequired=this.json.extensionsRequired||[],this.json.extensionsRequired.find(t=>t===e)||this.json.extensionsRequired.push(e)}removeExtension(e){if(this.json.extensions?.[e]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];const t=this.json.extensionsRemoved;t.includes(e)||t.push(e)}this.json.extensions&&delete this.json.extensions[e],this.json.extensionsRequired&&this._removeStringFromArray(this.json.extensionsRequired,e),this.json.extensionsUsed&&this._removeStringFromArray(this.json.extensionsUsed,e)}setDefaultScene(e){this.json.scene=e}addScene(e){const{nodeIndices:t}=e;return this.json.scenes=this.json.scenes||[],this.json.scenes.push({nodes:t}),this.json.scenes.length-1}addNode(e){const{meshIndex:t,matrix:r}=e;this.json.nodes=this.json.nodes||[];const n={mesh:t};return r&&(n.matrix=r),this.json.nodes.push(n),this.json.nodes.length-1}addMesh(e){const{attributes:t,indices:r,material:n,mode:o=4}=e,i={primitives:[{attributes:this._addAttributes(t),mode:o}]};if(r){const s=this._addIndices(r);i.primitives[0].indices=s}return Number.isFinite(n)&&(i.primitives[0].material=n),this.json.meshes=this.json.meshes||[],this.json.meshes.push(i),this.json.meshes.length-1}addPointCloud(e){const t={primitives:[{attributes:this._addAttributes(e),mode:0}]};return this.json.meshes=this.json.meshes||[],this.json.meshes.push(t),this.json.meshes.length-1}addImage(e,t){const r=Gn(e),n=t||r?.mimeType,o={bufferView:this.addBufferView(e),mimeType:n};return this.json.images=this.json.images||[],this.json.images.push(o),this.json.images.length-1}addBufferView(e,t=0,r=this.byteLength){const n=e.byteLength;P(Number.isFinite(n)),this.sourceBuffers=this.sourceBuffers||[],this.sourceBuffers.push(e);const o={buffer:t,byteOffset:r,byteLength:n};return this.byteLength+=Ce(n,4),this.json.bufferViews=this.json.bufferViews||[],this.json.bufferViews.push(o),this.json.bufferViews.length-1}addAccessor(e,t){const r={bufferView:e,type:zr(t.size),componentType:t.componentType,count:t.count,max:t.max,min:t.min};return this.json.accessors=this.json.accessors||[],this.json.accessors.push(r),this.json.accessors.length-1}addBinaryBuffer(e,t={size:3}){const r=this.addBufferView(e);let n={min:t.min,max:t.max};(!n.min||!n.max)&&(n=this._getAccessorMinMax(e,t.size));const o={size:t.size,componentType:Le(e),count:Math.round(e.length/t.size),min:n.min,max:n.max};return this.addAccessor(r,Object.assign(o,t))}addTexture(e){const{imageIndex:t}=e,r={source:t};return this.json.textures=this.json.textures||[],this.json.textures.push(r),this.json.textures.length-1}addMaterial(e){return this.json.materials=this.json.materials||[],this.json.materials.push(e),this.json.materials.length-1}createBinaryChunk(){const e=this.byteLength,t=new ArrayBuffer(e),r=new Uint8Array(t);let n=0;for(const o of this.sourceBuffers||[])n=lo(o,r,n);this.json?.buffers?.[0]?this.json.buffers[0].byteLength=e:this.json.buffers=[{byteLength:e}],this.gltf.binary=t,this.sourceBuffers=[t],this.gltf.buffers=[{arrayBuffer:t,byteOffset:0,byteLength:t.byteLength}]}_removeStringFromArray(e,t){let r=!0;for(;r;){const n=e.indexOf(t);n>-1?e.splice(n,1):r=!1}}_addAttributes(e={}){const t={};for(const r in e){const n=e[r],o=this._getGltfAttributeName(r);t[o]=this.addBinaryBuffer(n.value,n)}return t}_addIndices(e){return this.addBinaryBuffer(e,{size:1})}_getGltfAttributeName(e){switch(e.toLowerCase()){case"position":case"positions":case"vertices":return"POSITION";case"normal":case"normals":return"NORMAL";case"color":case"colors":return"COLOR_0";case"texcoord":case"texcoords":return"TEXCOORD_0";default:return e}}_getAccessorMinMax(e,t){const r={min:null,max:null};if(e.length<t)return r;r.min=[],r.max=[];const n=e.subarray(0,t);for(const o of n)r.min.push(o),r.max.push(o);for(let o=t;o<e.length;o+=t)for(let i=0;i<t;i++)r.min[0+i]=Math.min(r.min[0+i],e[o+i]),r.max[0+i]=Math.max(r.max[0+i],e[o+i]);return r}};function Wr(e){return(e%1+1)%1}var Qr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16,BOOLEAN:1,STRING:1,ENUM:1},Zs={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:BigInt64Array,UINT64:BigUint64Array,FLOAT32:Float32Array,FLOAT64:Float64Array},Yr={INT8:1,UINT8:1,INT16:2,UINT16:2,INT32:4,UINT32:4,INT64:8,UINT64:8,FLOAT32:4,FLOAT64:8};function _t(e,t){return Yr[t]*Qr[e]}function Pe(e,t,r,n){if(r!=="UINT8"&&r!=="UINT16"&&r!=="UINT32"&&r!=="UINT64")return null;const o=Oe(e.getTypedArrayForBufferView(t),"SCALAR",r,n+1);return o instanceof BigInt64Array||o instanceof BigUint64Array?null:o}function Oe(e,t,r,n=1){const o=Qr[t],i=Zs[r],s=Yr[r],a=n*o,c=a*s;let l=e.buffer,u=e.byteOffset;return u%s!==0&&(l=new Uint8Array(l).slice(u,u+c).buffer,u=0),new i(ye(l),u,a)}function Mt(e,t,r){const n=`TEXCOORD_${t.texCoord||0}`,o=r.attributes[n],i=e.getTypedArrayForAccessor(o),s=e.gltf.json,a=t.index,c=s.textures?.[a]?.source;if(typeof c<"u"){const l=s.images?.[c]?.mimeType,u=e.gltf.images?.[c];if(u&&typeof u.width<"u"){const f=[];for(let m=0;m<i.length;m+=2){const h=ea(u,l,i,m,t.channels);f.push(h)}return f}}return[]}function $r(e,t,r,n,o){if(!r?.length)return;const i=[];for(const u of r){let f=n.findIndex(m=>m===u);f===-1&&(f=n.push(u)-1),i.push(f)}const s=new Uint32Array(i),a=e.gltf.buffers.push({arrayBuffer:s.buffer,byteOffset:s.byteOffset,byteLength:s.byteLength})-1,c=e.addBufferView(s,a,0),l=e.addAccessor(c,{size:1,componentType:Le(s),count:s.length});o.attributes[t]=l}function ea(e,t,r,n,o=[0]){const i={r:{offset:0,shift:0},g:{offset:1,shift:8},b:{offset:2,shift:16},a:{offset:3,shift:24}},s=r[n],a=r[n+1];let c=1;t&&(t.indexOf("image/jpeg")!==-1||t.indexOf("image/png")!==-1)&&(c=4);const l=ta(s,a,e,c);let u=0;for(const f of o){const m=typeof f=="number"?Object.values(i)[f]:i[f],h=l+m.offset,p=Kn(e);if(p.data.length<=h)throw new Error(`${p.data.length} <= ${h}`);const d=p.data[h];u|=d<<m.shift}return u}function ta(e,t,r,n=1){const o=r.width,i=Wr(e)*(o-1),s=Math.round(i),a=r.height,c=Wr(t)*(a-1),l=Math.round(c),u=r.components?r.components:n;return(l*o+s)*u}function qr(e,t,r,n,o){const i=[];for(let s=0;s<t;s++){const a=r[s],c=r[s+1]-r[s];if(c+a>n)break;const l=a/o,u=c/o;i.push(e.slice(l,l+u))}return i}function Zr(e,t,r){const n=[];for(let o=0;o<t;o++){const i=o*r;n.push(e.slice(i,i+r))}return n}function en(e,t,r,n){if(r)throw new Error("Not implemented - arrayOffsets for strings is specified");if(n){const o=[],i=new TextDecoder("utf8");let s=0;for(let a=0;a<e;a++){const c=n[a+1]-n[a];if(c+s<=t.length){const l=t.subarray(s,c+s),u=i.decode(l);o.push(u),s+=c}}return o}return[]}var ra=k({createExtMeshFeatures:()=>la,decode:()=>oa,encode:()=>ia,name:()=>na}),le="EXT_mesh_features",na=le;async function oa(e,t){sa(new E(e),t)}function ia(e,t){const r=new E(e);return ca(r,t),r.createBinaryChunk(),r.gltf}function sa(e,t){const r=e.gltf.json;if(r.meshes)for(const n of r.meshes)for(const o of n.primitives)aa(e,o,t)}function aa(e,t,r){if(!r?.gltf?.loadBuffers)return;const n=t.extensions?.[le]?.featureIds;if(n)for(const o of n){let i;if(typeof o.attribute<"u"){const s=`_FEATURE_ID_${o.attribute}`,a=t.attributes[s];i=e.getTypedArrayForAccessor(a)}else typeof o.texture<"u"&&r?.gltf?.loadImages?i=Mt(e,o.texture,t):i=[];o.data=i}}function ca(e,t){const r=e.gltf.json.meshes;if(r)for(const n of r)for(const o of n.primitives)ua(e,o)}function la(e,t,r,n){t.extensions||(t.extensions={});let o=t.extensions[le];o||(o={featureIds:[]},t.extensions[le]=o);const{featureIds:i}=o,s={featureCount:r.length,propertyTable:n,data:r};i.push(s),e.addObjectExtension(t,le,o)}function ua(e,t){const r=t.extensions?.[le];if(!r)return;const n=r.featureIds;n.forEach((o,i)=>{if(o.data){const{accessorKey:s,index:a}=fa(t.attributes),c=new Uint32Array(o.data);n[i]={featureCount:c.length,propertyTable:o.propertyTable,attribute:a},e.gltf.buffers.push({arrayBuffer:c.buffer,byteOffset:c.byteOffset,byteLength:c.byteLength});const l=e.addBufferView(c),u=e.addAccessor(l,{size:1,componentType:Le(c),count:c.length});t.attributes[s]=u}})}function fa(e){const t="_FEATURE_ID_",r=Object.keys(e).filter(o=>o.indexOf(t)===0);let n=-1;for(const o of r){const i=Number(o.substring(12));i>n&&(n=i)}return n++,{accessorKey:`${t}${n}`,index:n}}var ma=k({createExtStructuralMetadata:()=>Da,decode:()=>da,encode:()=>ha,name:()=>pa}),ue="EXT_structural_metadata",pa=ue;async function da(e,t){ga(new E(e),t)}function ha(e,t){const r=new E(e);return Na(r,t),r.createBinaryChunk(),r.gltf}function ga(e,t){if(!t.gltf?.loadBuffers)return;const r=e.getExtension(ue);r&&(t.gltf?.loadImages&&Aa(e,r),ba(e,r))}function Aa(e,t){const r=t.propertyTextures,n=e.gltf.json;if(r&&n.meshes)for(const o of n.meshes)for(const i of o.primitives)va(e,r,i,t)}function ba(e,t){const r=t.schema;if(!r)return;const n=r.classes,o=t.propertyTables;if(n&&o)for(const i in n){const s=Ca(o,i);s&&_a(e,r,s)}}function Ca(e,t){for(const r of e)if(r.class===t)return r;return null}function va(e,t,r,n){if(!t)return;const o=r.extensions?.[ue]?.propertyTextures;if(o)for(const i of o){const s=t[i];Ba(e,s,r,n)}}function Ba(e,t,r,n){if(!t.properties)return;n.dataAttributeNames||(n.dataAttributeNames=[]);const o=t.class;for(const i in t.properties){const s=`${o}_${i}`,a=t.properties?.[i];if(!a)continue;a.data||(a.data=[]);const c=a.data,l=Mt(e,a,r);l!==null&&($r(e,s,l,c,r),a.data=c,n.dataAttributeNames.push(s))}}function _a(e,t,r){const n=t.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const o=r.count;for(const i in n.properties){const s=n.properties[i],a=r.properties?.[i];a&&(a.data=Ma(e,t,s,o,a))}}function Ma(e,t,r,n,o){let i=[];const s=o.values,a=e.getTypedArrayForBufferView(s),c=Sa(e,r,o,n),l=Ia(e,o,n);switch(r.type){case"SCALAR":case"VEC2":case"VEC3":case"VEC4":case"MAT2":case"MAT3":case"MAT4":i=Ta(r,n,a,c);break;case"BOOLEAN":throw new Error(`Not implemented - classProperty.type=${r.type}`);case"STRING":i=en(n,a,c,l);break;case"ENUM":i=Ra(t,r,n,a,c);break;default:throw new Error(`Unknown classProperty type ${r.type}`)}return i}function Sa(e,t,r,n){return t.array&&typeof t.count>"u"&&typeof r.arrayOffsets<"u"?Pe(e,r.arrayOffsets,r.arrayOffsetType||"UINT32",n):null}function Ia(e,t,r){return typeof t.stringOffsets<"u"?Pe(e,t.stringOffsets,t.stringOffsetType||"UINT32",r):null}function Ta(e,t,r,n){const o=e.array,i=e.count,s=_t(e.type,e.componentType),a=r.byteLength/s;let c;return e.componentType?c=Oe(r,e.type,e.componentType,a):c=r,o?n?qr(c,t,n,r.length,s):i?Zr(c,t,i):[]:c}function Ra(e,t,r,n,o){const i=t.enumType;if(!i)throw new Error("Incorrect data in the EXT_structural_metadata extension: classProperty.enumType is not set for type ENUM");const s=e.enums?.[i];if(!s)throw new Error(`Incorrect data in the EXT_structural_metadata extension: schema.enums does't contain ${i}`);const a=s.valueType||"UINT16",c=_t(t.type,a),l=n.byteLength/c;let u=Oe(n,t.type,a,l);if(u||(u=n),t.array){if(o)return xa({valuesData:u,numberOfElements:r,arrayOffsets:o,valuesDataBytesLength:n.length,elementSize:c,enumEntry:s});const f=t.count;return f?ya(u,r,f,s):[]}return St(u,0,r,s)}function xa(e){const{valuesData:t,numberOfElements:r,arrayOffsets:n,valuesDataBytesLength:o,elementSize:i,enumEntry:s}=e,a=[];for(let c=0;c<r;c++){const l=n[c],u=n[c+1]-n[c];if(u+l>o)break;const f=St(t,l/i,u/i,s);a.push(f)}return a}function ya(e,t,r,n){const o=[];for(let i=0;i<t;i++){const s=St(e,r*i,r,n);o.push(s)}return o}function St(e,t,r,n){const o=[];for(let i=0;i<r;i++)if(e instanceof BigInt64Array||e instanceof BigUint64Array)o.push("");else{const s=e[t+i],a=Ea(n,s);a?o.push(a.name):o.push("")}return o}function Ea(e,t){for(const r of e.values)if(r.value===t)return r;return null}var Fa="schemaClassId";function Na(e,t){const r=e.getExtension(ue);if(r&&r.propertyTables)for(const n of r.propertyTables){const o=n.class,i=r.schema?.classes?.[o];n.properties&&i&&Ua(n,i,e)}}function Ua(e,t,r){for(const n in e.properties){const o=e.properties[n].data;if(o){const i=t.properties[n];if(i){const s=Oa(o,i,r);e.properties[n]=s}}}}function Da(e,t,r=Fa){let n=e.getExtension(ue);n||(n=e.addExtension(ue)),n.schema=La(t,r,n.schema);const o=Pa(t,r,n.schema);return n.propertyTables||(n.propertyTables=[]),n.propertyTables.push(o)-1}function La(e,t,r){const n=r??{id:"schema_id"},o={properties:{}};for(const i of e){const s={type:i.elementType,componentType:i.componentType};o.properties[i.name]=s}return n.classes={},n.classes[t]=o,n}function Pa(e,t,r){const n={class:t,count:0};let o=0;const i=r.classes?.[t];for(const s of e){if(o===0&&(o=s.values.length),o!==s.values.length&&s.values.length)throw new Error("Illegal values in attributes");i?.properties[s.name]&&(n.properties||(n.properties={}),n.properties[s.name]={values:0,data:s.values})}return n.count=o,n}function Oa(e,t,r){const n={values:0};if(t.type==="STRING"){const{stringData:o,stringOffsets:i}=Ha(e);n.stringOffsets=It(i,r),n.values=It(o,r)}else t.type==="SCALAR"&&t.componentType&&(n.values=It(Ga(e,t.componentType),r));return n}var wa={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:Int32Array,UINT64:Uint32Array,FLOAT32:Float32Array,FLOAT64:Float64Array};function Ga(e,t){const r=[];for(const o of e)r.push(Number(o));const n=wa[t];if(!n)throw new Error("Illegal component type");return new n(r)}function Ha(e){const t=new TextEncoder,r=[];let n=0;for(const a of e){const c=t.encode(a);n+=c.length,r.push(c)}const o=new Uint8Array(n),i=[];let s=0;for(const a of r)o.set(a,s),i.push(s),s+=a.length;return i.push(s),{stringData:o,stringOffsets:new Uint32Array(i)}}function It(e,t){return t.gltf.buffers.push({arrayBuffer:ye(e.buffer),byteOffset:e.byteOffset,byteLength:e.byteLength}),t.addBufferView(e)}var Va=k({decode:()=>ka,name:()=>Ja}),tn="EXT_feature_metadata",Ja=tn;async function ka(e,t){Ka(new E(e),t)}function Ka(e,t){if(!t.gltf?.loadBuffers)return;const r=e.getExtension(tn);r&&(t.gltf?.loadImages&&ja(e,r),Xa(e,r))}function ja(e,t){const r=t.schema;if(!r)return;const n=r.classes,{featureTextures:o}=t;if(n&&o)for(const i in n){const s=n[i],a=Wa(o,i);a&&Ya(e,a,s)}}function Xa(e,t){const r=t.schema;if(!r)return;const n=r.classes,o=t.featureTables;if(n&&o)for(const i in n){const s=za(o,i);s&&Qa(e,r,s)}}function za(e,t){for(const r in e){const n=e[r];if(n.class===t)return n}return null}function Wa(e,t){for(const r in e){const n=e[r];if(n.class===t)return n}return null}function Qa(e,t,r){if(!r.class)return;const n=t.classes?.[r.class];if(!n)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);const o=r.count;for(const i in n.properties){const s=n.properties[i],a=r.properties?.[i];a&&(a.data=$a(e,t,s,o,a))}}function Ya(e,t,r){const n=t.class;for(const o in r.properties){const i=t?.properties?.[o];i&&(i.data=rc(e,i,n))}}function $a(e,t,r,n,o){let i=[];const s=o.bufferView,a=e.getTypedArrayForBufferView(s),c=qa(e,r,o,n),l=Za(e,r,o,n);return r.type==="STRING"||r.componentType==="STRING"?i=en(n,a,c,l):ec(r)&&(i=tc(r,n,a,c)),i}function qa(e,t,r,n){return t.type==="ARRAY"&&typeof t.componentCount>"u"&&typeof r.arrayOffsetBufferView<"u"?Pe(e,r.arrayOffsetBufferView,r.offsetType||"UINT32",n):null}function Za(e,t,r,n){return typeof r.stringOffsetBufferView<"u"?Pe(e,r.stringOffsetBufferView,r.offsetType||"UINT32",n):null}function ec(e){const t=["UINT8","INT16","UINT16","INT32","UINT32","INT64","UINT64","FLOAT32","FLOAT64"];return t.includes(e.type)||typeof e.componentType<"u"&&t.includes(e.componentType)}function tc(e,t,r,n){const o=e.type==="ARRAY",i=e.componentCount,s="SCALAR",a=e.componentType||e.type,c=_t(s,a),l=Oe(r,s,a,r.byteLength/c);return o?n?qr(l,t,n,r.length,c):i?Zr(l,t,i):[]:l}function rc(e,t,r){const n=e.gltf.json;if(!n.meshes)return[];const o=[];for(const i of n.meshes)for(const s of i.primitives)nc(e,r,t,o,s);return o}function nc(e,t,r,n,o){const i=Mt(e,{channels:r.channels,...r.texture},o);i&&$r(e,t,i,n,o)}var oc="4.4.3",ic="4.4.3",we={TRANSCODER:"basis_transcoder.js",TRANSCODER_WASM:"basis_transcoder.wasm",ENCODER:"basis_encoder.js",ENCODER_WASM:"basis_encoder.wasm"},rn;async function nn(e){$n(e.modules);const t=qn("basis");return t||(rn||=sc(e),await rn)}async function sc(e){let t=null,r=null;return[t,r]=await Promise.all([await W(we.TRANSCODER,"textures",e),await W(we.TRANSCODER_WASM,"textures",e)]),t=t||globalThis.BASIS,await ac(t,r)}function ac(e,t){const r={};return t&&(r.wasmBinary=t),new Promise(n=>{e(r).then(o=>{const{BasisFile:i,initializeBasis:s}=o;s(),n({BasisFile:i})})})}var Tt;async function on(e){const t=e.modules||{};return t.basisEncoder?t.basisEncoder:(Tt=Tt||cc(e),await Tt)}async function cc(e){let t=null,r=null;return[t,r]=await Promise.all([await W(we.ENCODER,"textures",e),await W(we.ENCODER_WASM,"textures",e)]),t=t||globalThis.BASIS,await lc(t,r)}function lc(e,t){const r={};return t&&(r.wasmBinary=t),new Promise(n=>{e(r).then(o=>{const{BasisFile:i,KTX2File:s,initializeBasis:a,BasisEncoder:c}=o;a(),n({BasisFile:i,KTX2File:s,BasisEncoder:c})})})}var uc=32854,fc=32856,sn=36194,mc=33776,pc=33779,dc=37493,hc=35840,gc=35842,Ac=36196,bc=35986,Cc=34798,vc=37808,Bc=36283,_c=36285,an=36492,Mc=["","WEBKIT_","MOZ_"],cn={WEBGL_compressed_texture_s3tc:["bc1-rgb-unorm-webgl","bc1-rgba-unorm","bc2-rgba-unorm","bc3-rgba-unorm"],WEBGL_compressed_texture_s3tc_srgb:["bc1-rgb-unorm-srgb-webgl","bc1-rgba-unorm-srgb","bc2-rgba-unorm-srgb","bc3-rgba-unorm-srgb"],EXT_texture_compression_rgtc:["bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm"],EXT_texture_compression_bptc:["bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"],WEBGL_compressed_texture_etc1:["etc1-rgb-unorm-webgl"],WEBGL_compressed_texture_etc:["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"],WEBGL_compressed_texture_pvrtc:["pvrtc-rgb4unorm-webgl","pvrtc-rgba4unorm-webgl","pvrtc-rgb2unorm-webgl","pvrtc-rgba2unorm-webgl"],WEBGL_compressed_texture_atc:["atc-rgb-unorm-webgl","atc-rgba-unorm-webgl","atc-rgbai-unorm-webgl"],WEBGL_compressed_texture_astc:["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]},Ge=null;function Sc(e){if(!Ge){e=e||Ic()||void 0,Ge=new Set;for(const t of Mc)for(const r in cn)if(e&&e.getExtension(`${t}${r}`))for(const n of cn[r])Ge.add(n)}return Ge}function Ic(){try{return document.createElement("canvas").getContext("webgl")}catch{return null}}var O=[171,75,84,88,32,50,48,187,13,10,26,10];function Tc(e){const t=new Uint8Array(e);return!(t.byteLength<O.length||t[0]!==O[0]||t[1]!==O[1]||t[2]!==O[2]||t[3]!==O[3]||t[4]!==O[4]||t[5]!==O[5]||t[6]!==O[6]||t[7]!==O[7]||t[8]!==O[8]||t[9]!==O[9]||t[10]!==O[10]||t[11]!==O[11])}var ln=Promise.resolve(),un={etc1:{basisFormat:0,compressed:!0,format:Ac,textureFormat:"etc1-rgb-unorm-webgl"},etc2:{basisFormat:1,compressed:!0,format:dc,textureFormat:"etc2-rgba8unorm"},bc1:{basisFormat:2,compressed:!0,format:mc,textureFormat:"bc1-rgb-unorm-webgl"},bc3:{basisFormat:3,compressed:!0,format:pc,textureFormat:"bc3-rgba-unorm"},bc4:{basisFormat:4,compressed:!0,format:Bc,textureFormat:"bc4-r-unorm"},bc5:{basisFormat:5,compressed:!0,format:_c,textureFormat:"bc5-rg-unorm"},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0,format:an,textureFormat:"bc7-rgba-unorm"},"bc7-m5":{basisFormat:7,compressed:!0,format:an,textureFormat:"bc7-rgba-unorm"},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0,format:hc,textureFormat:"pvrtc-rgb4unorm-webgl"},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0,format:gc,textureFormat:"pvrtc-rgba4unorm-webgl"},"astc-4x4":{basisFormat:10,compressed:!0,format:vc,textureFormat:"astc-4x4-unorm"},"atc-rgb":{basisFormat:11,compressed:!0,format:bc,textureFormat:"atc-rgb-unorm-webgl"},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0,format:Cc,textureFormat:"atc-rgbai-unorm-webgl"},rgba32:{basisFormat:13,compressed:!1,format:fc,textureFormat:"rgba8unorm"},rgb565:{basisFormat:14,compressed:!1,format:sn,textureFormat:"rgb565unorm-webgl"},bgr565:{basisFormat:15,compressed:!1,format:sn,textureFormat:"rgb565unorm-webgl"},rgba4444:{basisFormat:16,compressed:!1,format:uc,textureFormat:"rgba4unorm-webgl"}};Object.freeze(Object.keys(un));async function Rc(e){const t=ln;let r;ln=new Promise(n=>{r=n}),await t;try{return await e()}finally{r()}}async function xc(e,t={}){const r=$t(t);return await Rc(async()=>{if(!t.basis?.containerFormat||t.basis.containerFormat==="auto"){if(Tc(e))return fn((await on(r)).KTX2File,e,t);const{BasisFile:n}=await nn(r);return Rt(n,e,t)}if(t.basis.module==="encoder"){const n=await on(r);return t.basis.containerFormat==="ktx2"?fn(n.KTX2File,e,t):Rt(n.BasisFile,e,t)}else{const{BasisFile:o}=await nn(r);return Rt(o,e,t)}})}function Rt(e,t,r){const n=new e(new Uint8Array(t));try{if(!n.startTranscoding())throw new Error("Failed to start basis transcoding");const o=n.getNumImages(),i=[];for(let s=0;s<o;s++){const a=n.getNumLevels(s),c=[];for(let l=0;l<a;l++)c.push(yc(n,s,l,r));i.push(c)}return i}finally{n.close(),n.delete()}}function yc(e,t,r,n){const o=e.getImageWidth(t,r),i=e.getImageHeight(t,r),s=e.getHasAlpha(),{compressed:a,format:c,basisFormat:l,textureFormat:u}=mn(n,s),f=e.getImageTranscodedSizeInBytes(t,r,l),m=new Uint8Array(f);if(!e.transcodeImage(m,t,r,l,0,0))throw new Error("failed to start Basis transcoding");return{shape:"texture-level",width:o,height:i,data:m,compressed:a,...c!==void 0?{format:c}:{},...u!==void 0?{textureFormat:u}:{},hasAlpha:s}}function fn(e,t,r){const n=new e(new Uint8Array(t));try{if(!n.startTranscoding())throw new Error("failed to start KTX2 transcoding");const o=n.getLevels(),i=[];for(let s=0;s<o;s++)i.push(Ec(n,s,r));return[i]}finally{n.close(),n.delete()}}function Ec(e,t,r){const{alphaFlag:n,height:o,width:i}=e.getImageLevelInfo(t,0,0),{compressed:s,format:a,basisFormat:c,textureFormat:l}=mn(r,n),u=e.getImageTranscodedSizeInBytes(t,0,0,c),f=new Uint8Array(u);if(!e.transcodeImage(f,t,0,0,c,0,-1,-1))throw new Error("Failed to transcode KTX2 image");return{shape:"texture-level",width:i,height:o,data:f,compressed:s,...a!==void 0?{format:a}:{},...l!==void 0?{textureFormat:l}:{},levelSize:u,hasAlpha:n}}function mn(e,t){let r=e.basis?.format||"auto";r==="auto"&&(r=e.basis?.supportedTextureFormats?pn(e.basis.supportedTextureFormats):pn()),typeof r=="object"&&(r=t?r.alpha:r.noAlpha);const n=un[r.toLowerCase()];if(!n)throw new Error(`Unknown Basis format ${r}`);return n}function pn(e=Sc()){const t=new Set(e);return fe(t,["astc-4x4-unorm","astc-4x4-unorm-srgb"])?"astc-4x4":fe(t,["bc7-rgba-unorm","bc7-rgba-unorm-srgb"])?{alpha:"bc7-m5",noAlpha:"bc7-m6-opaque-only"}:fe(t,["bc1-rgb-unorm-webgl","bc1-rgb-unorm-srgb-webgl","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb"])?{alpha:"bc3",noAlpha:"bc1"}:fe(t,["pvrtc-rgb4unorm-webgl","pvrtc-rgba4unorm-webgl","pvrtc-rgb2unorm-webgl","pvrtc-rgba2unorm-webgl"])?{alpha:"pvrtc1-4-rgba",noAlpha:"pvrtc1-4-rgb"}:fe(t,["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"])?"etc2":t.has("etc1-rgb-unorm-webgl")?"etc1":fe(t,["atc-rgb-unorm-webgl","atc-rgba-unorm-webgl","atc-rgbai-unorm-webgl"])?{alpha:"atc-rgba-interpolated-alpha",noAlpha:"atc-rgb"}:"rgb565"}function fe(e,t){return t.some(r=>e.has(r))}var Fc={dataType:null,batchType:null,name:"Basis",id:"basis",module:"textures",version:ic,worker:!0,extensions:["basis","ktx2"],mimeTypes:["application/octet-stream","image/ktx2"],tests:["sB"],binary:!0,options:{basis:{format:"auto",containerFormat:"auto",module:"transcoder"}},parse:xc},me=!0,dn=1735152710,Nc=12,hn=8,Uc=1313821514,Dc=5130562,Lc=0,Pc=0,Oc=1;function wc(e,t=0){return`${String.fromCharCode(e.getUint8(t+0))}${String.fromCharCode(e.getUint8(t+1))}${String.fromCharCode(e.getUint8(t+2))}${String.fromCharCode(e.getUint8(t+3))}`}function Gc(e,t=0,r={}){const n=new DataView(e),{magic:o=dn}=r,i=n.getUint32(t,!1);return i===o||i===dn}function Hc(e,t,r=0,n={}){const o=new DataView(t),i=wc(o,r+0),s=o.getUint32(r+4,me),a=o.getUint32(r+8,me);switch(Object.assign(e,{header:{byteOffset:r,byteLength:a,hasBinChunk:!1},type:i,version:s,json:{},binChunks:[]}),r+=Nc,e.version){case 1:return Vc(e,o,r);case 2:return Jc(e,o,r,n={});default:throw new Error(`Invalid GLB version ${e.version}. Only supports version 1 and 2.`)}}function Vc(e,t,r){Ae(e.header.byteLength>20);const n=t.getUint32(r+0,me),o=t.getUint32(r+4,me);return r+=hn,Ae(o===Lc),xt(e,t,r,n),r+=n,r+=yt(e,t,r,e.header.byteLength),r}function Jc(e,t,r,n){return Ae(e.header.byteLength>20),kc(e,t,r,n),r+e.header.byteLength}function kc(e,t,r,n){for(;r+8<=e.header.byteLength;){const o=t.getUint32(r+0,me),i=t.getUint32(r+4,me);switch(r+=hn,i){case Uc:xt(e,t,r,o);break;case Dc:yt(e,t,r,o);break;case Pc:n.strict||xt(e,t,r,o);break;case Oc:n.strict||yt(e,t,r,o)}r+=Ce(o,4)}return r}function xt(e,t,r,n){const o=new Uint8Array(t.buffer,r,n),i=new TextDecoder("utf8").decode(o);return e.json=JSON.parse(i),Ce(n,4)}function yt(e,t,r,n){return e.header.hasBinChunk=!0,e.binChunks.push({byteOffset:r,byteLength:n,arrayBuffer:t.buffer}),Ce(n,4)}function gn(e,t,r){if(e.startsWith("data:")||e.startsWith("http:")||e.startsWith("https:"))return e;const n=r?.baseUrl||Kc(t?.core?.baseUrl);if(!n)throw new Error(`'baseUrl' must be provided to resolve relative url ${e}`);return n.endsWith("/")?`${n}${e}`:`${n}/${e}`}function Kc(e){if(!e)return;if(e.endsWith("/"))return e;const t=e.lastIndexOf("/");return t>=0?e.slice(0,t+1):""}var jc="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",Xc="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",zc=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),Wc=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]),Qc={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},Yc={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};async function $c(e,t,r,n,o,i="NONE"){const s=await qc();tl(s,s.exports[Yc[o]],e,t,r,n,s.exports[Qc[i||"NONE"]])}var Et;async function qc(){return Et||(Et=Zc()),Et}async function Zc(){let e=jc;WebAssembly.validate(zc)&&(e=Xc,console.log("Warning: meshopt_decoder is using experimental SIMD support"));const t=await WebAssembly.instantiate(el(e),{});return await t.instance.exports.__wasm_call_ctors(),t.instance}function el(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);t[n]=o>96?o-71:o>64?o-65:o>47?o+4:o>46?63:62}let r=0;for(let n=0;n<e.length;++n)t[r++]=t[n]<60?Wc[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,r)}function tl(e,t,r,n,o,i,s){const a=e.exports.sbrk,c=n+3&-4,l=a(c*o),u=a(i.length),f=new Uint8Array(e.exports.memory.buffer);f.set(i,u);const m=t(l,n,o,u,i.length);if(m===0&&s&&s(l,c,o),r.set(f.subarray(l,l+n*o)),a(l-a(0)),m!==0)throw new Error(`Malformed buffer data: ${m}`)}var rl=k({decode:()=>ol,name:()=>nl}),He="EXT_meshopt_compression",nl=He;async function ol(e,t){const r=new E(e);if(!t?.gltf?.decompressMeshes||!t.gltf?.loadBuffers)return;const n=[];for(const o of e.json.bufferViews||[])n.push(il(r,o));await Promise.all(n),r.removeExtension(He)}async function il(e,t){const r=e.getObjectExtension(t,He);if(r){const{byteOffset:n=0,byteLength:o=0,byteStride:i,count:s,mode:a,filter:c="NONE",buffer:l}=r,u=e.gltf.buffers[l],f=new Uint8Array(u.arrayBuffer,u.byteOffset+n,o);await $c(new Uint8Array(e.gltf.buffers[t.buffer].arrayBuffer,t.byteOffset,t.byteLength),s,i,f,a,c),e.removeObjectExtension(t,He)}}var sl=k({name:()=>al,preprocess:()=>cl}),pe="EXT_texture_webp",al=pe;function cl(e,t){const r=new E(e);if(!uo("image/webp")){if(r.getRequiredExtensions().includes(pe))throw new Error(`gltf: Required extension ${pe} not supported by browser`);return}const{json:n}=r;for(const o of n.textures||[]){const i=r.getObjectExtension(o,pe);i&&(o.source=i.source),r.removeObjectExtension(o,pe)}r.removeExtension(pe)}var ll=k({name:()=>ul,preprocess:()=>fl}),Ve="KHR_texture_basisu",ul=Ve;function fl(e,t){const r=new E(e),{json:n}=r;for(const o of n.textures||[]){const i=r.getObjectExtension(o,Ve);i&&(o.source=i.source,r.removeObjectExtension(o,Ve))}r.removeExtension(Ve)}var ml="1.5.6",pl="1.4.1",Ft=`https://www.gstatic.com/draco/versioned/decoders/${ml}`,F={DECODER:"draco_wasm_wrapper.js",DECODER_WASM:"draco_decoder.wasm",FALLBACK_DECODER:"draco_decoder.js",ENCODER:"draco_encoder.js"},_e={[F.DECODER]:`${Ft}/${F.DECODER}`,[F.DECODER_WASM]:`${Ft}/${F.DECODER_WASM}`,[F.FALLBACK_DECODER]:`${Ft}/${F.FALLBACK_DECODER}`,[F.ENCODER]:`https://raw.githubusercontent.com/google/draco/${pl}/javascript/${F.ENCODER}`},Nt;async function dl(e={},t){const r=e.modules||{};return r.draco3d?Nt||=r.draco3d.createDecoderModule({}).then(n=>({draco:n})):Nt||=hl(e,t),await Nt}function An(e,t){if(e&&typeof e=="object"){if(e.default)return e.default;if(e[t])return e[t]}return e}async function hl(e,t){let r,n;switch(t){case"js":r=await W(_e[F.FALLBACK_DECODER],"draco",e,F.FALLBACK_DECODER);break;default:try{[r,n]=await Promise.all([await W(_e[F.DECODER],"draco",e,F.DECODER),await W(_e[F.DECODER_WASM],"draco",e,F.DECODER_WASM)])}catch{r=null,n=null}}return r=An(r,"DracoDecoderModule"),r=r||globalThis.DracoDecoderModule,!r&&!se&&([r,n]=await Promise.all([await W(_e[F.DECODER],"draco",{...e,useLocalLibraries:!0},F.DECODER),await W(_e[F.DECODER_WASM],"draco",{...e,useLocalLibraries:!0},F.DECODER_WASM)]),r=An(r,"DracoDecoderModule"),r=r||globalThis.DracoDecoderModule),await gl(r,n)}function gl(e,t){if(typeof e!="function")throw new Error("DracoDecoderModule could not be loaded");const r={};return t&&(r.wasmBinary=t),new Promise(n=>{e({...r,onModuleLoaded:o=>n({draco:o})})})}var Al="4.4.3";function bl(e){switch(e.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function Cl(e){let t=1/0,r=1/0,n=1/0,o=-1/0,i=-1/0,s=-1/0;const a=e.POSITION?e.POSITION.value:[],c=a&&a.length;for(let l=0;l<c;l+=3){const u=a[l],f=a[l+1],m=a[l+2];t=u<t?u:t,r=f<r?f:r,n=m<n?m:n,o=u>o?u:o,i=f>i?f:i,s=m>s?m:s}return[[t,r,n],[o,i,s]]}function vl(e,t,r){const n=bl(t.value),o=r||Bl(t);return{name:e,type:{type:"fixed-size-list",listSize:t.size,children:[{name:"value",type:n}]},nullable:!1,metadata:o}}function Bl(e){const t={};return"byteOffset"in e&&(t.byteOffset=e.byteOffset.toString(10)),"byteStride"in e&&(t.byteStride=e.byteStride.toString(10)),"normalized"in e&&(t.normalized=e.normalized.toString()),t}function _l(e,t,r){const n=Cn(t.metadata),o=[],i=Ml(t.attributes);for(const s in e){const a=e[s],c=bn(s,a,i[s]);o.push(c)}if(r){const s=bn("indices",r);o.push(s)}return{fields:o,metadata:n}}function Ml(e){const t={};for(const r in e){const n=e[r];t[n.name||"undefined"]=n}return t}function bn(e,t,r){return vl(e,t,r?Cn(r.metadata):void 0)}function Cn(e){Object.entries(e);const t={};for(const r in e)t[`${r}.string`]=JSON.stringify(e[r]);return t}var vn={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},Sl={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},Il=4,Tl=class{draco;decoder;metadataQuerier;constructor(e){this.draco=e,this.decoder=new this.draco.Decoder,this.metadataQuerier=new this.draco.MetadataQuerier}destroy(){this.draco.destroy(this.decoder),this.draco.destroy(this.metadataQuerier)}parseSync(e,t={}){const r=new this.draco.DecoderBuffer;r.Init(new Int8Array(e),e.byteLength),this._disableAttributeTransforms(t);const n=this.decoder.GetEncodedGeometryType(r),o=n===this.draco.TRIANGULAR_MESH?new this.draco.Mesh:new this.draco.PointCloud;try{let i;switch(n){case this.draco.TRIANGULAR_MESH:i=this.decoder.DecodeBufferToMesh(r,o);break;case this.draco.POINT_CLOUD:i=this.decoder.DecodeBufferToPointCloud(r,o);break;default:throw new Error("DRACO: Unknown geometry type.")}if(!i.ok()||!o.ptr){const u=`DRACO decompression failed: ${i.error_msg()}`;throw new Error(u)}const s=this._getDracoLoaderData(o,n,t),a=this._getMeshData(o,s,t),c=Cl(a.attributes),l=_l(a.attributes,s,a.indices);return{loader:"draco",loaderData:s,header:{vertexCount:o.num_points(),boundingBox:c},...a,schema:l}}finally{this.draco.destroy(r),o&&this.draco.destroy(o)}}_getDracoLoaderData(e,t,r){const n=this._getTopLevelMetadata(e),o=this._getDracoAttributes(e,r);return{geometry_type:t,num_attributes:e.num_attributes(),num_points:e.num_points(),num_faces:e instanceof this.draco.Mesh?e.num_faces():0,metadata:n,attributes:o}}_getDracoAttributes(e,t){const r={};for(let n=0;n<e.num_attributes();n++){const o=this.decoder.GetAttribute(e,n),i=this._getAttributeMetadata(e,n);r[o.unique_id()]={unique_id:o.unique_id(),attribute_type:o.attribute_type(),data_type:o.data_type(),num_components:o.num_components(),byte_offset:o.byte_offset(),byte_stride:o.byte_stride(),normalized:o.normalized(),attribute_index:n,metadata:i};const s=this._getQuantizationTransform(o,t);s&&(r[o.unique_id()].quantization_transform=s);const a=this._getOctahedronTransform(o,t);a&&(r[o.unique_id()].octahedron_transform=a)}return r}_getMeshData(e,t,r){const n=this._getMeshAttributes(t,e,r);if(!n.POSITION)throw new Error("DRACO: No position attribute found.");return e instanceof this.draco.Mesh?r.topology==="triangle-strip"?{topology:"triangle-strip",mode:4,attributes:n,indices:{value:this._getTriangleStripIndices(e),size:1}}:{topology:"triangle-list",mode:5,attributes:n,indices:{value:this._getTriangleListIndices(e),size:1}}:{topology:"point-list",mode:0,attributes:n}}_getMeshAttributes(e,t,r){const n={};for(const o of Object.values(e.attributes)){const i=this._deduceAttributeName(o,r);o.name=i;const s=this._getAttributeValues(t,o);if(s){const{value:a,size:c}=s;n[i]={value:a,size:c,byteOffset:o.byte_offset,byteStride:o.byte_stride,normalized:o.normalized}}}return n}_getTriangleListIndices(e){const t=e.num_faces()*3,r=t*Il,n=this.draco._malloc(r);try{return this.decoder.GetTrianglesUInt32Array(e,r,n),new Uint32Array(this.draco.HEAPF32.buffer,n,t).slice()}finally{this.draco._free(n)}}_getTriangleStripIndices(e){const t=new this.draco.DracoInt32Array;try{return this.decoder.GetTriangleStripsFromMesh(e,t),yl(t)}finally{this.draco.destroy(t)}}_getAttributeValues(e,t){const r=Sl[t.data_type];if(!r)return console.warn(`DRACO: Unsupported attribute type ${t.data_type}`),null;const n=t.num_components,o=e.num_points()*n,i=o*r.BYTES_PER_ELEMENT,s=Rl(this.draco,r);let a;const c=this.draco._malloc(i);try{const l=this.decoder.GetAttribute(e,t.attribute_index);this.decoder.GetAttributeDataArrayForAllPoints(e,l,s,i,c),a=new r(this.draco.HEAPF32.buffer,c,o).slice()}finally{this.draco._free(c)}return{value:a,size:n}}_deduceAttributeName(e,t){const r=e.unique_id;for(const[i,s]of Object.entries(t.extraAttributes||{}))if(s===r)return i;const n=e.attribute_type;for(const i in vn)if(this.draco[i]===n)return vn[i];const o=t.attributeNameEntry||"name";return e.metadata[o]?e.metadata[o].string:`CUSTOM_ATTRIBUTE_${r}`}_getTopLevelMetadata(e){const t=this.decoder.GetMetadata(e);return this._getDracoMetadata(t)}_getAttributeMetadata(e,t){const r=this.decoder.GetAttributeMetadata(e,t);return this._getDracoMetadata(r)}_getDracoMetadata(e){if(!e||!e.ptr)return{};const t={},r=this.metadataQuerier.NumEntries(e);for(let n=0;n<r;n++){const o=this.metadataQuerier.GetEntryName(e,n);t[o]=this._getDracoMetadataField(e,o)}return t}_getDracoMetadataField(e,t){const r=new this.draco.DracoInt32Array;try{this.metadataQuerier.GetIntEntryArray(e,t,r);const n=xl(r);return{int:this.metadataQuerier.GetIntEntry(e,t),string:this.metadataQuerier.GetStringEntry(e,t),double:this.metadataQuerier.GetDoubleEntry(e,t),intArray:n}}finally{this.draco.destroy(r)}}_disableAttributeTransforms(e){const{quantizedAttributes:t=[],octahedronAttributes:r=[]}=e,n=[...t,...r];for(const o of n)this.decoder.SkipAttributeTransform(this.draco[o])}_getQuantizationTransform(e,t){const{quantizedAttributes:r=[]}=t,n=e.attribute_type();if(r.map(o=>this.decoder[o]).includes(n)){const o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(e))return{quantization_bits:o.quantization_bits(),range:o.range(),min_values:new Float32Array([1,2,3]).map(i=>o.min_value(i))}}finally{this.draco.destroy(o)}}return null}_getOctahedronTransform(e,t){const{octahedronAttributes:r=[]}=t,n=e.attribute_type();if(r.map(o=>this.decoder[o]).includes(n)){const o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(e))return{quantization_bits:o.quantization_bits()}}finally{this.draco.destroy(o)}}return null}};function Rl(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32;default:return e.DT_INVALID}}function xl(e){const t=e.size(),r=new Int32Array(t);for(let n=0;n<t;n++)r[n]=e.GetValue(n);return r}function yl(e){const t=e.size(),r=new Int32Array(t);for(let n=0;n<t;n++)r[n]=e.GetValue(n);return r}var Bn={dataType:null,batchType:null,name:"Draco",id:"draco",module:"draco",version:Al,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:{draco:{decoderType:typeof WebAssembly=="object"?"wasm":"js",extraAttributes:{},attributeNameEntry:void 0}},parse:El};async function El(e,t){const{draco:r}=await dl($t(t),t?.draco?.decoderType||"wasm"),n=new Tl(r);try{return n.parseSync(e,t?.draco)}finally{n.destroy()}}function Fl(e){const t={};for(const r in e){const n=e[r];r!=="indices"&&(t[r]=_n(n))}return t}function _n(e){const{buffer:t,size:r,count:n}=Nl(e);return{value:t,size:r,byteOffset:0,count:n,type:zr(r),componentType:Le(t)}}function Nl(e){let t=e,r=1,n=0;return e&&e.value&&(t=e.value,r=e.size||1),t&&(ArrayBuffer.isView(t)||(t=Ul(t,Float32Array)),n=t.length/r),{buffer:t,size:r,count:n}}function Ul(e,t,r=!1){return e?Array.isArray(e)?new t(e):r&&!(e instanceof t)?new t(e):e:null}var Dl=k({decode:()=>Ol,encode:()=>wl,name:()=>Ll,preprocess:()=>Pl}),$="KHR_draco_mesh_compression",Ll=$;function Pl(e,t,r){const n=new E(e);for(const o of Mn(n))n.getObjectExtension(o,$)}async function Ol(e,t,r){if(!t?.gltf?.decompressMeshes)return;const n=new E(e),o=[];for(const i of Mn(n))n.getObjectExtension(i,$)&&o.push(Gl(n,i,t,r));await Promise.all(o),n.removeExtension($)}function wl(e,t={}){const r=new E(e);for(const n of r.json.meshes||[])Hl(n,t),r.addRequiredExtension($)}async function Gl(e,t,r,n){const o=e.getObjectExtension(t,$);if(!o)return;const i=e.getTypedArrayForBufferView(o.bufferView),s=rt(i.buffer,i.byteOffset),a={...r};delete a["3d-tiles"];const c=await Ze(s,Bn,a,n),l=Fl(c.attributes);for(const[u,f]of Object.entries(l))if(u in t.attributes){const m=t.attributes[u],h=e.getAccessor(m);h?.min&&h?.max&&(f.min=h.min,f.max=h.max)}t.attributes=l,c.indices&&(t.indices=_n(c.indices)),e.removeObjectExtension(t,$),Vl(t)}function Hl(e,t,r=4,n,o){if(!n.DracoWriter)throw new Error("options.gltf.DracoWriter not provided");const i=n.DracoWriter.encodeSync({attributes:e}),s=o?.parseSync?.({attributes:e}),a=n._addFauxAttributes(s.attributes),c=n.addBufferView(i);return{primitives:[{attributes:a,mode:r,extensions:{[$]:{bufferView:c,attributes:a}}}]}}function Vl(e){if(!e.attributes&&Object.keys(e.attributes).length>0)throw new Error("glTF: Empty primitive detected: Draco decompression failure?")}function*Mn(e){for(const t of e.json.meshes||[])for(const r of t.primitives)yield r}var Jl=k({decode:()=>Xl,name:()=>kl}),Je="KHR_texture_transform",kl=Je,ke=new Z,Kl=new z,jl=new z;async function Xl(e,t){if(!new E(e).hasExtension(Je)||!t.gltf?.loadBuffers)return;const r=e.json.materials||[];for(let n=0;n<r.length;n++)zl(n,e)}function zl(e,t){const r=t.json.materials?.[e],n=[r?.pbrMetallicRoughness?.baseColorTexture,r?.emissiveTexture,r?.normalTexture,r?.occlusionTexture,r?.pbrMetallicRoughness?.metallicRoughnessTexture],o=[];for(const i of n)i&&i?.extensions?.[Je]&&Wl(t,e,i,o)}function Wl(e,t,r,n){const o=Ql(r,n);if(!o)return;const i=e.json.meshes||[];for(const s of i)for(const a of s.primitives){const c=a.material;Number.isFinite(c)&&t===c&&Yl(e,a,o)}}function Ql(e,t){const r=e.extensions?.[Je],{texCoord:n=0}=e,{texCoord:o=n}=r;if(t.findIndex(([i,s])=>i===n&&s===o)===-1){const i=Zl(r);return n!==o&&(e.texCoord=o),t.push([n,o]),{originalTexCoord:n,texCoord:o,matrix:i}}return null}function Yl(e,t,r){const{originalTexCoord:n,texCoord:o,matrix:i}=r,s=t.attributes[`TEXCOORD_${n}`];if(Number.isFinite(s)){const a=e.json.accessors?.[s];if(a&&a.bufferView!==void 0){const c=e.json.bufferViews?.[a.bufferView];if(c){const{arrayBuffer:l,byteOffset:u}=e.buffers[c.buffer],f=(u||0)+(a.byteOffset||0)+(c.byteOffset||0),{ArrayType:m,length:h}=Bt(a,c),p=jr[a.componentType],d=Kr[a.type],g=c.byteStride||p*d,C=new Float32Array(h);for(let b=0;b<a.count;b++){const A=new m(l,f+b*g,2);ke.set(A[0],A[1],1),ke.transformByMatrix3(i),C.set([ke[0],ke[1]],b*d)}n===o?$l(a,e,C,a.bufferView):ql(o,a,t,e,C)}}}}function $l(e,t,r,n){e.componentType=5126,e.byteOffset=0;const o=(t.json.accessors||[]).reduce((a,c)=>c.bufferView===n?a+1:a,0)>1;t.buffers.push({arrayBuffer:ye(r.buffer),byteOffset:0,byteLength:r.buffer.byteLength});const i=t.buffers.length-1;if(t.json.bufferViews=t.json.bufferViews||[],o){t.json.bufferViews.push({buffer:i,byteLength:r.buffer.byteLength,byteOffset:0}),e.bufferView=t.json.bufferViews.length-1;return}const s=t.json.bufferViews[n];s&&(s.buffer=i,s.byteOffset=0,s.byteLength=r.buffer.byteLength,s.byteStride!==void 0&&delete s.byteStride)}function ql(e,t,r,n,o){n.buffers.push({arrayBuffer:ye(o.buffer),byteOffset:0,byteLength:o.buffer.byteLength}),n.json.bufferViews=n.json.bufferViews||[];const i=n.json.bufferViews;i.push({buffer:n.buffers.length-1,byteLength:o.buffer.byteLength,byteOffset:0});const s=n.json.accessors;s&&(s.push({bufferView:i?.length-1,byteOffset:0,componentType:5126,count:t.count,type:"VEC2"}),r.attributes[`TEXCOORD_${e}`]=s.length-1)}function Zl(e){const{offset:t=[0,0],rotation:r=0,scale:n=[1,1]}=e,o=new z().set(1,0,0,0,1,0,t[0],t[1],1),i=Kl.set(Math.cos(r),Math.sin(r),0,-Math.sin(r),Math.cos(r),0,0,0,1),s=jl.set(n[0],0,0,0,n[1],0,0,0,1);return o.multiplyRight(i).multiplyRight(s)}var eu=k({decode:()=>ru,encode:()=>nu,name:()=>tu}),re="KHR_lights_punctual",tu=re;async function ru(e){const t=new E(e),{json:r}=t,n=t.getExtension(re);n&&(t.json.lights=n.lights,t.removeExtension(re));for(const o of r.nodes||[]){const i=t.getObjectExtension(o,re);i&&(o.light=i.light),t.removeObjectExtension(o,re)}}async function nu(e){const t=new E(e),{json:r}=t;if(r.lights){const n=t.addExtension(re);P(!n.lights),n.lights=r.lights,delete r.lights}if(t.json.lights){for(const n of t.json.lights){const o=n.node;t.addObjectExtension(o,re,n)}delete t.json.lights}}var ou=k({decode:()=>su,encode:()=>au,name:()=>iu}),Me="KHR_materials_unlit",iu=Me;async function su(e){const t=new E(e),{json:r}=t;for(const n of r.materials||[])n.extensions&&n.extensions.KHR_materials_unlit&&(n.unlit=!0),t.removeObjectExtension(n,Me);t.removeExtension(Me)}function au(e){const t=new E(e),{json:r}=t;if(t.materials)for(const n of r.materials||[])n.unlit&&(delete n.unlit,t.addObjectExtension(n,Me,{}),t.addExtension(Me))}var cu=k({decode:()=>uu,encode:()=>fu,name:()=>lu}),Se="KHR_techniques_webgl",lu=Se;async function uu(e){const t=new E(e),{json:r}=t,n=t.getExtension(Se);if(n){const o=mu(n,t);for(const i of r.materials||[]){const s=t.getObjectExtension(i,Se);s&&(i.technique=Object.assign({},s,o[s.technique]),i.technique.values=pu(i.technique,t)),t.removeObjectExtension(i,Se)}t.removeExtension(Se)}}async function fu(e,t){}function mu(e,t){const{programs:r=[],shaders:n=[],techniques:o=[]}=e,i=new TextDecoder;return n.forEach(s=>{if(Number.isFinite(s.bufferView))s.code=i.decode(t.getTypedArrayForBufferView(s.bufferView));else throw new Error("KHR_techniques_webgl: no shader code")}),r.forEach(s=>{s.fragmentShader=n[s.fragmentShader],s.vertexShader=n[s.vertexShader]}),o.forEach(s=>{s.program=r[s.program]}),o}function pu(e,t){const r=Object.assign({},e.values);return Object.keys(e.uniforms||{}).forEach(n=>{e.uniforms[n].value&&!(n in r)&&(r[n]=e.uniforms[n].value)}),Object.keys(r).forEach(n=>{typeof r[n]=="object"&&r[n].index!==void 0&&(r[n].texture=t.getTexture(r[n].index))}),r}var Sn=[ma,ra,rl,sl,ll,Dl,eu,ou,cu,Jl,Va];function du(e,t={},r){const n=Sn.filter(o=>In(o.name,t));for(const o of n)o.preprocess?.(e,t,r)}async function hu(e,t={},r){const n=Sn.filter(o=>In(o.name,t));for(const o of n)await o.decode?.(e,t,r)}function In(e,t){const r=t?.gltf?.excludeExtensions||{};return!(e in r&&!r[e])}var Ut="KHR_binary_glTF";function gu(e){const t=new E(e),{json:r}=t;for(const n of r.images||[]){const o=t.getObjectExtension(n,Ut);o&&Object.assign(n,o),t.removeObjectExtension(n,Ut)}r.buffers&&r.buffers[0]&&delete r.buffers[0].uri,t.removeExtension(Ut)}var Tn={accessors:"accessor",animations:"animation",buffers:"buffer",bufferViews:"bufferView",images:"image",materials:"material",meshes:"mesh",nodes:"node",samplers:"sampler",scenes:"scene",skins:"skin",textures:"texture"},Au={accessor:"accessors",animations:"animation",buffer:"buffers",bufferView:"bufferViews",image:"images",material:"materials",mesh:"meshes",node:"nodes",sampler:"samplers",scene:"scenes",skin:"skins",texture:"textures"},bu=class{idToIndexMap={animations:{},accessors:{},buffers:{},bufferViews:{},images:{},materials:{},meshes:{},nodes:{},samplers:{},scenes:{},skins:{},textures:{}};json;normalize(e,t){this.json=e.json;const r=e.json;switch(r.asset&&r.asset.version){case"2.0":return;case void 0:case"1.0":break;default:console.warn(`glTF: Unknown version ${r.asset.version}`);return}if(!t.normalize)throw new Error("glTF v1 is not supported.");console.warn("Converting glTF v1 to glTF v2 format. This is experimental and may fail."),this._addAsset(r),this._convertTopLevelObjectsToArrays(r),gu(e),this._convertObjectIdsToArrayIndices(r),this._updateObjects(r),this._updateMaterial(r)}_addAsset(e){e.asset=e.asset||{},e.asset.version="2.0",e.asset.generator=e.asset.generator||"Normalized to glTF 2.0 by loaders.gl"}_convertTopLevelObjectsToArrays(e){for(const t in Tn)this._convertTopLevelObjectToArray(e,t)}_convertTopLevelObjectToArray(e,t){const r=e[t];if(!(!r||Array.isArray(r))){e[t]=[];for(const n in r){const o=r[n];o.id=o.id||n;const i=e[t].length;e[t].push(o),this.idToIndexMap[t][n]=i}}}_convertObjectIdsToArrayIndices(e){for(const t in Tn)this._convertIdsToIndices(e,t);"scene"in e&&(e.scene=this._convertIdToIndex(e.scene,"scene"));for(const t of e.textures)this._convertTextureIds(t);for(const t of e.meshes)this._convertMeshIds(t);for(const t of e.nodes)this._convertNodeIds(t);for(const t of e.scenes)this._convertSceneIds(t)}_convertTextureIds(e){e.source&&(e.source=this._convertIdToIndex(e.source,"image"))}_convertMeshIds(e){for(const t of e.primitives){const{attributes:r,indices:n,material:o}=t;for(const i in r)r[i]=this._convertIdToIndex(r[i],"accessor");n&&(t.indices=this._convertIdToIndex(n,"accessor")),o&&(t.material=this._convertIdToIndex(o,"material"))}}_convertNodeIds(e){e.children&&(e.children=e.children.map(t=>this._convertIdToIndex(t,"node"))),e.meshes&&(e.meshes=e.meshes.map(t=>this._convertIdToIndex(t,"mesh")))}_convertSceneIds(e){e.nodes&&(e.nodes=e.nodes.map(t=>this._convertIdToIndex(t,"node")))}_convertIdsToIndices(e,t){e[t]||(console.warn(`gltf v1: json doesn't contain attribute ${t}`),e[t]=[]);for(const r of e[t])for(const n in r){const o=r[n];r[n]=this._convertIdToIndex(o,n)}}_convertIdToIndex(e,t){const r=Au[t];if(r in this.idToIndexMap){const n=this.idToIndexMap[r][e];if(!Number.isFinite(n))throw new Error(`gltf v1: failed to resolve ${t} with id ${e}`);return n}return e}_updateObjects(e){for(const t of this.json.buffers)delete t.type}_updateMaterial(e){for(const t of e.materials){t.pbrMetallicRoughness={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1};const r=t.values?.tex||t.values?.texture2d_0||t.values?.diffuseTex,n=e.textures.findIndex(o=>o.id===r);n!==-1&&(t.pbrMetallicRoughness.baseColorTexture={index:n})}}};function Cu(e,t={}){return new bu().normalize(e,t)}async function vu(e,t,r=0,n,o){return Bu(e,t,r,n),Cu(e,{normalize:n?.gltf?.normalize}),du(e,n,o),n?.gltf?.loadBuffers&&e.json.buffers&&await _u(e,n,o),n?.gltf?.loadImages&&await Mu(e,n,o),await hu(e,n,o),e}function Bu(e,t,r,n){if(n.core?.baseUrl&&(e.baseUri=n.core?.baseUrl),t instanceof ArrayBuffer&&!Gc(t,r,n.glb)&&(t=new TextDecoder().decode(t)),typeof t=="string")e.json=co(t);else if(t instanceof ArrayBuffer){const s={};r=Hc(s,t,r,n.glb),P(s.type==="glTF",`Invalid GLB magic string ${s.type}`),e._glb=s,e.json=s.json}else P(!1,"GLTF: must be ArrayBuffer or string");const o=e.json.buffers||[];if(e.buffers=new Array(o.length).fill(null),e._glb&&e._glb.header.hasBinChunk){const{binChunks:s}=e._glb;e.buffers[0]={arrayBuffer:s[0].arrayBuffer,byteOffset:s[0].byteOffset,byteLength:s[0].byteLength}}const i=e.json.images||[];e.images=new Array(i.length).fill({})}async function _u(e,t,r){const n=e.json.buffers||[];for(let o=0;o<n.length;++o){const i=n[o];if(i.uri){const{fetch:s}=r;P(s);const a=gn(i.uri,t,r),c=await(await r?.fetch?.(a))?.arrayBuffer?.();e.buffers[o]={arrayBuffer:c,byteOffset:0,byteLength:c.byteLength},delete i.uri}else e.buffers[o]===null&&(e.buffers[o]={arrayBuffer:new ArrayBuffer(i.byteLength),byteOffset:0,byteLength:i.byteLength})}}async function Mu(e,t,r){const n=Su(e),o=e.json.images||[],i=[];for(const s of n)i.push(Iu(e,o[s],s,t,r));return await Promise.all(i)}function Su(e){const t=new Set,r=e.json.textures||[];for(const n of r)n.source!==void 0&&t.add(n.source);return Array.from(t).sort()}async function Iu(e,t,r,n,o){let i;if(t.uri&&!t.hasOwnProperty("bufferView")){const l=gn(t.uri,n,o),{fetch:u}=o;i=await(await u(l)).arrayBuffer(),t.bufferView={data:i}}if(Number.isFinite(t.bufferView)){const l=Ys(e.json,e.buffers,t.bufferView);i=rt(l.buffer,l.byteOffset,l.byteLength)}P(i,"glTF image has no data");const s=n,a={...s,core:{...s?.core,mimeType:t.mimeType}};let c=await Ze(i,[Vn,Fc],a,o);c&&c[0]&&(c={compressed:!0,mipmaps:!1,width:c[0].width,height:c[0].height,data:c[0]}),e.images=e.images||[],e.images[r]=c}var Ke={dataType:null,batchType:null,name:"glTF",id:"gltf",module:"gltf",version:oc,extensions:["gltf","glb"],mimeTypes:["model/gltf+json","model/gltf-binary"],text:!0,binary:!0,tests:["glTF"],parse:Tu,options:{gltf:{normalize:!0,loadBuffers:!0,loadImages:!0,decompressMeshes:!0}}};async function Tu(e,t={},r){const n={...Ke.options,...t};return n.gltf={...Ke.options.gltf,...n.gltf},await vu({},e,t?.glb?.byteOffset||0,n,r)}var Ru={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xu={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},J={TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,REPEAT:10497,LINEAR:9729,NEAREST_MIPMAP_LINEAR:9986},yu={magFilter:J.TEXTURE_MAG_FILTER,minFilter:J.TEXTURE_MIN_FILTER,wrapS:J.TEXTURE_WRAP_S,wrapT:J.TEXTURE_WRAP_T},Eu={[J.TEXTURE_MAG_FILTER]:J.LINEAR,[J.TEXTURE_MIN_FILTER]:J.NEAREST_MIPMAP_LINEAR,[J.TEXTURE_WRAP_S]:J.REPEAT,[J.TEXTURE_WRAP_T]:J.REPEAT};function Fu(){return{id:"default-sampler",parameters:Eu}}function Nu(e){return xu[e]}function Uu(e){return Ru[e]}var Du=class{baseUri="";jsonUnprocessed;json;buffers=[];images=[];postProcess(e,t={}){const{json:r,buffers:n=[],images:o=[]}=e,{baseUri:i=""}=e;return P(r),this.baseUri=i,this.buffers=n,this.images=o,this.jsonUnprocessed=r,this.json=this._resolveTree(e.json,t),this.json}_resolveTree(e,t={}){const r={...e};return this.json=r,e.bufferViews&&(r.bufferViews=e.bufferViews.map((n,o)=>this._resolveBufferView(n,o))),e.images&&(r.images=e.images.map((n,o)=>this._resolveImage(n,o))),e.samplers&&(r.samplers=e.samplers.map((n,o)=>this._resolveSampler(n,o))),e.textures&&(r.textures=e.textures.map((n,o)=>this._resolveTexture(n,o))),e.accessors&&(r.accessors=e.accessors.map((n,o)=>this._resolveAccessor(n,o))),e.materials&&(r.materials=e.materials.map((n,o)=>this._resolveMaterial(n,o))),e.meshes&&(r.meshes=e.meshes.map((n,o)=>this._resolveMesh(n,o))),e.nodes&&(r.nodes=e.nodes.map((n,o)=>this._resolveNode(n,o)),r.nodes=r.nodes.map((n,o)=>this._resolveNodeChildren(n))),e.skins&&(r.skins=e.skins.map((n,o)=>this._resolveSkin(n,o))),e.scenes&&(r.scenes=e.scenes.map((n,o)=>this._resolveScene(n,o))),typeof this.json.scene=="number"&&r.scenes&&(r.scene=r.scenes[this.json.scene]),r}getScene(e){return this._get(this.json.scenes,e)}getNode(e){return this._get(this.json.nodes,e)}getSkin(e){return this._get(this.json.skins,e)}getMesh(e){return this._get(this.json.meshes,e)}getMaterial(e){return this._get(this.json.materials,e)}getAccessor(e){return this._get(this.json.accessors,e)}getCamera(e){return this._get(this.json.cameras,e)}getTexture(e){return this._get(this.json.textures,e)}getSampler(e){return this._get(this.json.samplers,e)}getImage(e){return this._get(this.json.images,e)}getBufferView(e){return this._get(this.json.bufferViews,e)}getBuffer(e){return this._get(this.json.buffers,e)}_get(e,t){if(typeof t=="object")return t;const r=e&&e[t];return r||console.warn(`glTF file error: Could not find ${e}[${t}]`),r}_resolveScene(e,t){return{...e,id:e.id||`scene-${t}`,nodes:(e.nodes||[]).map(r=>this.getNode(r))}}_resolveNode(e,t){const r={...e,id:e?.id||`node-${t}`};return e.mesh!==void 0&&(r.mesh=this.getMesh(e.mesh)),e.camera!==void 0&&(r.camera=this.getCamera(e.camera)),e.skin!==void 0&&(r.skin=this.getSkin(e.skin)),e.meshes!==void 0&&e.meshes.length&&(r.mesh=e.meshes.reduce((n,o)=>{const i=this.getMesh(o);return n.id=i.id,n.primitives=n.primitives.concat(i.primitives),n},{primitives:[]})),r}_resolveNodeChildren(e){return e.children&&(e.children=e.children.map(t=>this.getNode(t))),e}_resolveSkin(e,t){const r=typeof e.inverseBindMatrices=="number"?this.getAccessor(e.inverseBindMatrices):void 0;return{...e,id:e.id||`skin-${t}`,inverseBindMatrices:r}}_resolveMesh(e,t){const r={...e,id:e.id||`mesh-${t}`,primitives:[]};return e.primitives&&(r.primitives=e.primitives.map(n=>{const o={...n,attributes:{},indices:void 0,material:void 0},i=n.attributes;for(const s in i)o.attributes[s]=this.getAccessor(i[s]);return n.indices!==void 0&&(o.indices=this.getAccessor(n.indices)),n.material!==void 0&&(o.material=this.getMaterial(n.material)),o})),r}_resolveMaterial(e,t){const r={...e,id:e.id||`material-${t}`};if(r.normalTexture&&(r.normalTexture={...r.normalTexture},r.normalTexture.texture=this.getTexture(r.normalTexture.index)),r.occlusionTexture&&(r.occlusionTexture={...r.occlusionTexture},r.occlusionTexture.texture=this.getTexture(r.occlusionTexture.index)),r.emissiveTexture&&(r.emissiveTexture={...r.emissiveTexture},r.emissiveTexture.texture=this.getTexture(r.emissiveTexture.index)),r.emissiveFactor||(r.emissiveFactor=r.emissiveTexture?[1,1,1]:[0,0,0]),r.pbrMetallicRoughness){r.pbrMetallicRoughness={...r.pbrMetallicRoughness};const n=r.pbrMetallicRoughness;n.baseColorTexture&&(n.baseColorTexture={...n.baseColorTexture},n.baseColorTexture.texture=this.getTexture(n.baseColorTexture.index)),n.metallicRoughnessTexture&&(n.metallicRoughnessTexture={...n.metallicRoughnessTexture},n.metallicRoughnessTexture.texture=this.getTexture(n.metallicRoughnessTexture.index))}return r}_resolveAccessor(e,t){const r=Nu(e.componentType),n=Uu(e.type),o=r*n,i={...e,id:e.id||`accessor-${t}`,bytesPerComponent:r,components:n,bytesPerElement:o,value:void 0,bufferView:void 0,sparse:void 0};if(e.bufferView!==void 0&&(i.bufferView=this.getBufferView(e.bufferView)),i.bufferView){const s=i.bufferView.buffer,{ArrayType:a,byteLength:c}=Bt(i,i.bufferView),l=(i.bufferView.byteOffset||0)+(i.byteOffset||0)+s.byteOffset;let u=nt(s.arrayBuffer,l,c);i.bufferView.byteStride&&(u=this._getValueFromInterleavedBuffer(s,l,i.bufferView.byteStride,i.bytesPerElement,i.count)),i.value=new a(u)}return i}_getValueFromInterleavedBuffer(e,t,r,n,o){const i=new Uint8Array(o*n);for(let s=0;s<o;s++){const a=t+s*r;i.set(new Uint8Array(e.arrayBuffer.slice(a,a+n)),s*n)}return i.buffer}_resolveTexture(e,t){return{...e,id:e.id||`texture-${t}`,sampler:typeof e.sampler=="number"?this.getSampler(e.sampler):Fu(),source:typeof e.source=="number"?this.getImage(e.source):void 0}}_resolveSampler(e,t){const r={id:e.id||`sampler-${t}`,...e,parameters:{}};for(const n in r){const o=this._enumSamplerParameter(n);o!==void 0&&(r.parameters[o]=r[n])}return r}_enumSamplerParameter(e){return yu[e]}_resolveImage(e,t){const r={...e,id:e.id||`image-${t}`,image:null,bufferView:e.bufferView!==void 0?this.getBufferView(e.bufferView):void 0},n=this.images[t];return n&&(r.image=n),r}_resolveBufferView(e,t){const r=e.buffer,n=this.buffers[r].arrayBuffer;let o=this.buffers[r].byteOffset||0;return e.byteOffset&&(o+=e.byteOffset),{id:`bufferView-${t}`,...e,buffer:this.buffers[r],data:new Uint8Array(n,o,e.byteLength)}}_resolveCamera(e,t){const r={...e,id:e.id||`camera-${t}`};return r.perspective,r.orthographic,r}};function Rn(e,t){return new Du().postProcess(e,t)}async function Lu(e){const t=[];return e.scenes.forEach(r=>{r.traverse(n=>{})}),await Pu(()=>t.some(r=>!r.loaded))}async function Pu(e){for(;e();)await new Promise(t=>requestAnimationFrame(t))}var Ou=`struct ScenegraphUniforms {
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  sceneModelMatrix: mat4x4<f32>,
  composeModelMatrix: f32,
};

@group(0) @binding(auto)
var<uniform> scenegraph: ScenegraphUniforms;
`,xn=`layout(std140) uniform scenegraphUniforms {
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  mat4 sceneModelMatrix;
  float composeModelMatrix;
} scenegraph;
`,wu={name:"scenegraph",source:Ou,vs:xn,fs:xn,uniformTypes:{sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",sceneModelMatrix:"mat4x4<f32>",composeModelMatrix:"f32"}},Gu=`#version 300 es
#define SHADER_NAME scenegraph-layer-vertex-shader
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
in vec3 instanceTranslation;
in vec3 positions;
#ifdef HAS_UV
in vec2 texCoords;
#endif
#ifdef LIGHTING_PBR
#ifdef HAS_NORMALS
in vec3 normals;
#endif
#endif
out vec4 vColor;
#ifndef LIGHTING_PBR
#ifdef HAS_UV
out vec2 vTEXCOORD_0;
#endif
#endif
void main(void) {
#if defined(HAS_UV) && !defined(LIGHTING_PBR)
vTEXCOORD_0 = texCoords;
geometry.uv = texCoords;
#endif
geometry.worldPosition = instancePositions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vec3 normal = vec3(0.0, 0.0, 1.0);
#ifdef LIGHTING_PBR
#ifdef HAS_NORMALS
normal = instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4(normals, 0.0)).xyz;
#endif
#endif
float originalSize = project_size_to_pixel(scenegraph.sizeScale);
float clampedSize = clamp(originalSize, scenegraph.sizeMinPixels, scenegraph.sizeMaxPixels);
float sizeRatio = originalSize == 0.0 ? 0.0 : clampedSize / originalSize;
vec3 pos = (instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4(positions, 1.0)).xyz) * scenegraph.sizeScale * sizeRatio + instanceTranslation;
if(scenegraph.composeModelMatrix > 0.5) {
DECKGL_FILTER_SIZE(pos, geometry);
geometry.normal = project_normal(normal);
geometry.worldPosition += pos;
gl_Position = project_position_to_clipspace(pos + instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
}
else {
pos = project_size(pos);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, pos, geometry.position);
geometry.normal = project_normal(normal);
}
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
#ifdef LIGHTING_PBR
pbr_vPosition = geometry.position.xyz;
#ifdef HAS_NORMALS
pbr_vNormal = geometry.normal;
#endif
#ifdef HAS_UV
pbr_vUV0 = texCoords;
#else
pbr_vUV0 = vec2(0., 0.);
#endif
pbr_vUV1 = vec2(0., 0.);
geometry.uv = pbr_vUV0;
#endif
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Hu=`#version 300 es
#define SHADER_NAME scenegraph-layer-fragment-shader
in vec4 vColor;
out vec4 fragColor;
#ifndef LIGHTING_PBR
#if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
in vec2 vTEXCOORD_0;
uniform sampler2D pbr_baseColorSampler;
#endif
#endif
void main(void) {
#ifdef LIGHTING_PBR
fragColor = pbr_filterColor(vColor);
geometry.uv = pbr_vUV0;
#else
#if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
fragColor = vColor * texture(pbr_baseColorSampler, vTEXCOORD_0);
geometry.uv = vTEXCOORD_0;
#else
fragColor = vColor;
#endif
#endif
fragColor.a *= layer.opacity;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Vu=`struct VertexInputs {
  @location(0) positions: vec3<f32>,
#ifdef HAS_NORMALS
  @location(1) normals: vec3<f32>,
#endif
#ifdef HAS_UV
  @location(3) texCoords: vec2<f32>,
#endif
  @location(6) instancePositions: vec3<f32>,
  @location(7) instancePositions64Low: vec3<f32>,
  @location(8) instanceColors: vec4<f32>,
  @location(10) instanceModelMatrixCol0: vec3<f32>,
  @location(11) instanceModelMatrixCol1: vec3<f32>,
  @location(12) instanceModelMatrixCol2: vec3<f32>,
  @location(13) instanceTranslation: vec3<f32>,
};

struct FragmentInputs {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vTexCoord: vec2<f32>,
  @location(2) pbrPosition: vec3<f32>,
  @location(3) pbrUV: vec2<f32>,
  @location(4) pbrNormal: vec3<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(
  inputs: VertexInputs,
  @builtin(instance_index) instanceIndex: u32
) -> FragmentInputs {
  var outputs: FragmentInputs;

  geometry.worldPosition = inputs.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);

  var vertexPosition = inputs.positions;
  var texCoord = vec2<f32>(0.0, 0.0);
  var normal = vec3<f32>(0.0, 0.0, 1.0);

#ifdef HAS_UV
  texCoord = inputs.texCoords;
#endif
#ifdef HAS_NORMALS
  normal = inputs.normals;
#endif

  geometry.uv = texCoord;

  let instanceModelMatrix = mat3x3<f32>(
    inputs.instanceModelMatrixCol0,
    inputs.instanceModelMatrixCol1,
    inputs.instanceModelMatrixCol2
  );

  let scenePosition = (scenegraph.sceneModelMatrix * vec4<f32>(vertexPosition, 1.0)).xyz;
  let worldNormal = instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4<f32>(normal, 0.0)).xyz;

  let originalSize = project_meter_size_to_pixel(scenegraph.sizeScale);
  let clampedSize = clamp(originalSize, scenegraph.sizeMinPixels, scenegraph.sizeMaxPixels);
  let sizeRatio = select(0.0, clampedSize / originalSize, originalSize > 0.0);

  let pos =
    (instanceModelMatrix * scenePosition) * scenegraph.sizeScale * sizeRatio +
    inputs.instanceTranslation;

  if (scenegraph.composeModelMatrix > 0.5) {
    geometry.normal = project_normal(worldNormal);
    geometry.worldPosition = inputs.instancePositions + pos;
    geometry.position = vec4<f32>(
      project_position_vec3_f64(inputs.instancePositions + pos, inputs.instancePositions64Low),
      1.0
    );
  } else {
    let sizeAdjustedPos = project_size_vec3(pos);
    // Scenegraph offsets are east/north/up in globe mode. Use project32's helper so it can
    // rotate the offset onto the local tangent plane before producing the common position.
    let projectResult = project_position_to_clipspace_and_commonspace(
      inputs.instancePositions,
      inputs.instancePositions64Low,
      sizeAdjustedPos
    );
    geometry.position = projectResult.commonPosition;
    geometry.normal = project_normal(worldNormal);
  }

  outputs.position = project_common_position_to_clipspace(geometry.position);
  outputs.vColor = inputs.instanceColors;
  outputs.vTexCoord = texCoord;
  outputs.pbrPosition = geometry.position.xyz;
  outputs.pbrUV = texCoord;
  outputs.pbrNormal = geometry.normal;
  outputs.pickingColor = geometry.pickingColor;
  return outputs;
}

@fragment
fn fragmentMain(inputs: FragmentInputs) -> @location(0) vec4<f32> {
  fragmentGeometry.uv = inputs.vTexCoord;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inputs.pickingColor)) {
      discard;
    }
    return vec4<f32>(inputs.pickingColor, 1.0);
  }

  var fragColor = inputs.vColor;

#ifdef LIGHTING_PBR
  fragmentInputs.pbr_vPosition = inputs.pbrPosition;
  // scenegraphPbrMaterial uses the indexed UV fields from the current PBR module.
  fragmentInputs.pbr_vUV0 = inputs.pbrUV;
  fragmentInputs.pbr_vUV1 = vec2<f32>(0.0);
  fragmentInputs.pbr_vNormal = inputs.pbrNormal;
  // Vertex color is part of the material base color and must be applied before lighting.
  fragColor = pbr_filterColor(fragColor);
#else
#ifdef HAS_BASECOLORMAP
  fragColor =
    fragColor *
    textureSample(pbr_baseColorSampler, pbr_baseColorSamplerSampler, inputs.vTexCoord);
#endif
#endif

  fragColor.a *= layer.opacity;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inputs.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,Ju=ee.source.replace(/fn pbr_setPositionNormalTangentUV\([\s\S]*?\n}\n/,`fn pbr_setPositionNormalTangentUV(position: vec4f, normal: vec4f, tangent: vec4f, uv: vec2f)
{
  fragmentInputs.pbr_vPosition = position.xyz;
  fragmentInputs.pbr_vNormal = normal.xyz;
  fragmentInputs.pbr_vTBN = mat3x3f(
    vec3f(1.0, 0.0, 0.0),
    vec3f(0.0, 1.0, 0.0),
    vec3f(0.0, 0.0, 1.0)
  );
  fragmentInputs.pbr_vUV0 = uv;
  fragmentInputs.pbr_vUV1 = uv;
}
`).replace(/pbrProjection\.camera/g,"project.cameraPosition"),yn={...ee,dependencies:[Xt],source:Ju},En=[255,255,255,255],ku={scenegraph:{type:"object",value:null,async:!0},getScene:e=>e&&e.scenes?typeof e.scene=="object"?e.scene:e.scenes[e.scene||0]:e,getAnimator:e=>e&&e.animator,_animations:null,onFirstDraw:{type:"function",value:()=>{}},sizeScale:{type:"number",value:1,min:0},sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},getPosition:{type:"accessor",value:e=>e.position},getColor:{type:"accessor",value:En},_lighting:"flat",_imageBasedLightingEnvironment:void 0,getOrientation:{type:"accessor",value:[0,0,0]},getScale:{type:"accessor",value:[1,1,1]},getTranslation:{type:"accessor",value:[0,0,0]},getTransformMatrix:{type:"accessor",value:[]},loaders:[Ke]},Dt=class extends jt{getShaders(){const e={};let t;const r=this.context.device?.type==="webgpu";this.props._lighting==="pbr"?(t=r?yn:ee,e.LIGHTING_PBR=1):r?t=yn:t={name:"pbrMaterial"};const n=[Kt,Jt,kt,wu,t];return super.getShaders({defines:e,vs:Gu,fs:Hu,source:Vu,modules:n})}initializeState(){const e=this.getAttributeManager(),t=this.context.device.type!=="webgpu";e.addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),accessor:"getPosition",transition:t},instanceColors:{type:"unorm8",size:this.props.colorFormat.length,accessor:"getColor",defaultValue:En,transition:t},instanceModelMatrix:vr})}updateState(e){super.updateState(e);const{props:t,oldProps:r}=e;t.scenegraph!==r.scenegraph?this._updateScenegraph():t._animations!==r._animations&&this._applyAnimationsProp(this.state.animator,t._animations)}finalizeState(e){super.finalizeState(e),this._destroyScenegraphAssets()}get isLoaded(){return!!(this.state?.scenegraph&&super.isLoaded)}_updateScenegraph(){const e=this.props,{device:t}=this.context;let r=null;if(e.scenegraph instanceof Ee)r={scenes:[e.scenegraph]};else if(e.scenegraph&&typeof e.scenegraph=="object"){const s=e.scenegraph,a=Js(t,s.json?Rn(s):s,this._getModelOptions());r=a,Lu(a).then(()=>this.setNeedsRedraw()).catch(c=>{this.raiseError(c,"loading glTF")})}const n={layer:this,device:this.context.device},o=e.getScene(r,n),i=e.getAnimator(r,n);if(o instanceof Q){this._destroyScenegraphAssets(),this._applyAnimationsProp(i,e._animations);const s=[];o.traverse(a=>{a instanceof te&&s.push(a.model)}),this.setState({scenegraph:o,animator:i,materials:r?.materials||null,models:s,firstDrawSignaled:!1}),this.getAttributeManager().invalidateAll()}else o!==null&&xe.warn("invalid scenegraph:",o)()}_destroyScenegraphAssets(){this.state.scenegraph?.destroy(),this.state.materials?.forEach(e=>e.destroy()),this.state.scenegraph=null,this.state.animator=null,this.state.materials=null,this.state.models=[]}_applyAnimationsProp(e,t){if(!e||!t)return;const r=e.getAnimations();Object.keys(t).sort().forEach(n=>{const o=t[n];if(n==="*")r.forEach(i=>{Object.assign(i,o)});else if(Number.isFinite(Number(n))){const i=Number(n);i>=0&&i<r.length?Object.assign(r[i],o):xe.warn(`animation ${n} not found`)()}else{const i=r.find(({animation:s})=>s.name===n);i?Object.assign(i,o):xe.warn(`animation ${n} not found`)()}})}_getModelOptions(){const{_imageBasedLightingEnvironment:e}=this.props;let t;e&&(typeof e=="function"?t=e({device:this.context.device,gl:this.context.gl,layer:this}):t=e);const r=this.context.device.type==="webgpu"?{depthWriteEnabled:!0,depthCompare:"less-equal"}:void 0;return{imageBasedLightingEnvironment:t,modelOptions:{id:this.props.id,isInstanced:!0,bufferLayout:this.getAttributeManager().getBufferLayouts(),parameters:r,...this.getShaders()},useTangents:!1}}draw({context:e}){if(!this.state.scenegraph)return;this.props._animations&&this.state.animator&&(this.state.animator.setTime(e.timeline.getTime()),this.setNeedsRedraw());const{viewport:t,renderPass:r}=this.context,{sizeScale:n,sizeMinPixels:o,sizeMaxPixels:i,coordinateSystem:s}=this.props,a={camera:t.cameraPosition},c=this.getNumInstances();this.state.scenegraph.traverse((l,{worldMatrix:u})=>{if(l instanceof te){const{model:f}=l;f.setInstanceCount(c);const m={sizeScale:n,sizeMinPixels:o,sizeMaxPixels:i,composeModelMatrix:Br(t,s)?1:0,sceneModelMatrix:u};f.shaderInputs.setProps({pbrProjection:a,scenegraph:m}),f.draw(r)}}),this.state.firstDrawSignaled||(this.state.firstDrawSignaled=!0,this.props.onFirstDraw?.())}};Dt.defaultProps=ku,Dt.layerName="ScenegraphLayer";export{Qs as a,ee as c,Bn as i,rt as l,Rn as n,Er as o,Ke as r,dt as s,Dt as t,Ze as u};
