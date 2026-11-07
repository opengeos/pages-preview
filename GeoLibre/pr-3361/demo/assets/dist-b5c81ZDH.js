import{A as P,G as sr,O as lr,W as et,_t as cr,at as tt,ct as fr,dt as ur,ft as Ie,ht as pr,k as $,mt as mr,ot as dr,rt,ut as nt,z as Re}from"./dist-CcqFK1yo.js";import{t as hr}from"./lighting-txc2yua1.js";import{I as x,_ as gr,b as O,j as V,v as D,w as br,y as vr}from"./get-attribute-from-layouts-Bj7i7MoM.js";import{t as B}from"./matrix4-CPORB3xR.js";import{t as Y}from"./matrix3-BZkD4mVj.js";var Sr={props:{},uniforms:{},bindings:{},name:"skin",bindingLayout:[{name:"skin",group:0},{name:"skinJointMatrices",group:0,visibility:1}],dependencies:[],source:`
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

`,fs:"",defines:{SKIN_MAX_JOINTS:64},getUniforms:(e={},t)=>{const{jointMatrices:r,skinJointMatrices:n,scenegraphsFromGLTF:o,skinIndex:a=0,meshWorldMatrix:i}=e,s=n?{skinJointMatrices:n}:{};if(r)return{jointMatrix:_r(r),...s};const l=o?.gltf?.skins?.[a];if(!l)return{jointMatrix:[],...s};const{inverseBindMatrices:c,joints:u,skeleton:h}=l,f=o.gltfNodeIndexToNodeMap,p=new Map,m=h===void 0?void 0:f?.get(h),d=m?[m]:o.scenes||[];for(const R of d)R.preorderTraversal((_,{worldMatrix:M})=>{p.set(_.id,M)});const g=i?new B(i).invert():null,b=new Float32Array(1024),S=c?.value;for(let R=0;R<Math.min(u.length,64);R++){const _=f?.get(u[R]);if(!_)continue;const M=p.get(_.id)||_.matrix,C=g?new B(g).multiplyRight(M):new B(M);S&&S.length>=(R+1)*16&&C.multiplyRight(new B(Array.from(S.slice(R*16,(R+1)*16)))),b.set(C,R*16)}return{jointMatrix:b,...s}},uniformTypes:{jointMatrix:["mat4x4<f32>",64]}};function _r(e){const t=new Float32Array(1024);return t.set(e instanceof Float32Array?e.subarray(0,t.length):e.slice(0,t.length)),t}var Ir={name:"gpuAnimation",props:{},uniforms:{},bindings:{},source:`
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
`,fs:"",bindingLayout:[{name:"gpuAnimationFrames",group:0,visibility:1},{name:"gpuMorphTargets",group:0,visibility:1},{name:"gpuMorphWeights",group:0,visibility:1}],getUniforms(e={}){return e}},Rr=`#ifdef USE_IBL
@group(2) @binding(auto) var pbr_diffuseEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_diffuseEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_specularEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_specularEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_brdfLUT: texture_2d<f32>;
@group(2) @binding(auto) var pbr_brdfLUTSampler: sampler;
#endif
`,ot=`#ifdef USE_IBL
uniform samplerCube pbr_diffuseEnvSampler;
uniform samplerCube pbr_specularEnvSampler;
uniform sampler2D pbr_brdfLUT;
#endif
`,Tr={name:"ibl",firstBindingSlot:32,bindingLayout:[{name:"pbr_diffuseEnvSampler",group:2},{name:"pbr_specularEnvSampler",group:2},{name:"pbr_brdfLUT",group:2}],source:Rr,vs:ot,fs:ot},Mr=`out vec3 pbr_vPosition;
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
`,Cr=`precision highp float;

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
`,xr=`struct PBRFragmentInputs {
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
`,at=`layout(std140) uniform pbrProjectionUniforms {
  mat4 modelViewProjectionMatrix;
  mat4 modelMatrix;
  mat4 normalMatrix;
  vec3 camera;
} pbrProjection;
`,le={props:{},uniforms:{},defaultUniforms:{unlit:!1,baseColorMapEnabled:!1,baseColorFactor:[1,1,1,1],normalMapEnabled:!1,normalScale:1,emissiveMapEnabled:!1,emissiveFactor:[0,0,0],metallicRoughnessValues:[1,1],metallicRoughnessMapEnabled:!1,occlusionMapEnabled:!1,occlusionStrength:1,alphaCutoffEnabled:!1,alphaCutoff:.5,IBLenabled:!1,scaleIBLAmbient:[1,1],scaleDiffBaseMR:[0,0,0,0],scaleFGDSpec:[0,0,0,0],specularColorFactor:[1,1,1],specularIntensityFactor:1,specularColorMapEnabled:!1,specularIntensityMapEnabled:!1,ior:1.5,transmissionFactor:0,transmissionMapEnabled:!1,thicknessFactor:0,attenuationDistance:1e9,attenuationColor:[1,1,1],clearcoatFactor:0,clearcoatRoughnessFactor:0,clearcoatMapEnabled:!1,clearcoatRoughnessMapEnabled:!1,sheenColorFactor:[0,0,0],sheenRoughnessFactor:0,sheenColorMapEnabled:!1,sheenRoughnessMapEnabled:!1,iridescenceFactor:0,iridescenceIor:1.3,iridescenceThicknessRange:[100,400],iridescenceMapEnabled:!1,anisotropyStrength:0,anisotropyRotation:0,anisotropyDirection:[1,0],anisotropyMapEnabled:!1,emissiveStrength:1,dispersion:0,baseColorUVSet:0,baseColorUVTransform:[1,0,0,0,1,0,0,0,1],metallicRoughnessUVSet:0,metallicRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],normalUVSet:0,normalUVTransform:[1,0,0,0,1,0,0,0,1],occlusionUVSet:0,occlusionUVTransform:[1,0,0,0,1,0,0,0,1],emissiveUVSet:0,emissiveUVTransform:[1,0,0,0,1,0,0,0,1],specularColorUVSet:0,specularColorUVTransform:[1,0,0,0,1,0,0,0,1],specularIntensityUVSet:0,specularIntensityUVTransform:[1,0,0,0,1,0,0,0,1],transmissionUVSet:0,transmissionUVTransform:[1,0,0,0,1,0,0,0,1],thicknessUVSet:0,thicknessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatUVSet:0,clearcoatUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatRoughnessUVSet:0,clearcoatRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatNormalUVSet:0,clearcoatNormalUVTransform:[1,0,0,0,1,0,0,0,1],sheenColorUVSet:0,sheenColorUVTransform:[1,0,0,0,1,0,0,0,1],sheenRoughnessUVSet:0,sheenRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceUVSet:0,iridescenceUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceThicknessUVSet:0,iridescenceThicknessUVTransform:[1,0,0,0,1,0,0,0,1],anisotropyUVSet:0,anisotropyUVTransform:[1,0,0,0,1,0,0,0,1],bumpFactor:1,bumpMapEnabled:!1,diffuseTransmissionFactor:0,diffuseTransmissionMapEnabled:!1,diffuseTransmissionColorFactor:[1,1,1],diffuseTransmissionColorMapEnabled:!1,multiscatterColorFactor:[0,0,0],multiscatterColorMapEnabled:!1,scatterAnisotropy:0,bumpUVSet:0,bumpUVTransform:[1,0,0,0,1,0,0,0,1],diffuseTransmissionUVSet:0,diffuseTransmissionUVTransform:[1,0,0,0,1,0,0,0,1],diffuseTransmissionColorUVSet:0,diffuseTransmissionColorUVTransform:[1,0,0,0,1,0,0,0,1],multiscatterColorUVSet:0,multiscatterColorUVTransform:[1,0,0,0,1,0,0,0,1]},name:"pbrMaterial",firstBindingSlot:0,bindingLayout:[{name:"pbrMaterial",group:3},{name:"pbr_baseColorSampler",group:3},{name:"pbr_normalSampler",group:3},{name:"pbr_emissiveSampler",group:3},{name:"pbr_metallicRoughnessSampler",group:3},{name:"pbr_occlusionSampler",group:3},{name:"pbr_specularColorSampler",group:3},{name:"pbr_specularIntensitySampler",group:3},{name:"pbr_transmissionSampler",group:3},{name:"pbr_thicknessSampler",group:3},{name:"pbr_clearcoatSampler",group:3},{name:"pbr_clearcoatRoughnessSampler",group:3},{name:"pbr_clearcoatNormalSampler",group:3},{name:"pbr_sheenColorSampler",group:3},{name:"pbr_sheenRoughnessSampler",group:3},{name:"pbr_iridescenceSampler",group:3},{name:"pbr_iridescenceThicknessSampler",group:3},{name:"pbr_anisotropySampler",group:3},{name:"pbr_bumpSampler",group:3},{name:"pbr_diffuseTransmissionSampler",group:3},{name:"pbr_diffuseTransmissionColorSampler",group:3},{name:"pbr_multiscatterColorSampler",group:3}],dependencies:[hr,Tr,{name:"pbrProjection",bindingLayout:[{name:"pbrProjection",group:0}],source:`struct pbrProjectionUniforms {
  modelViewProjectionMatrix: mat4x4<f32>,
  modelMatrix: mat4x4<f32>,
  normalMatrix: mat4x4<f32>,
  camera: vec3<f32>
};

@group(0) @binding(auto) var<uniform> pbrProjection: pbrProjectionUniforms;
`,vs:at,fs:at,getUniforms:e=>e,uniformTypes:{modelViewProjectionMatrix:"mat4x4<f32>",modelMatrix:"mat4x4<f32>",normalMatrix:"mat4x4<f32>",camera:"vec3<f32>"}}],source:xr,vs:Mr,fs:Cr,defines:{LIGHTING_FRAGMENT:!0,HAS_NORMALMAP:!1,HAS_EMISSIVEMAP:!1,HAS_OCCLUSIONMAP:!1,HAS_BASECOLORMAP:!1,HAS_METALROUGHNESSMAP:!1,HAS_SPECULARCOLORMAP:!1,HAS_SPECULARINTENSITYMAP:!1,HAS_TRANSMISSIONMAP:!1,HAS_THICKNESSMAP:!1,HAS_CLEARCOATMAP:!1,HAS_CLEARCOATROUGHNESSMAP:!1,HAS_CLEARCOATNORMALMAP:!1,HAS_SHEENCOLORMAP:!1,HAS_SHEENROUGHNESSMAP:!1,HAS_IRIDESCENCEMAP:!1,HAS_IRIDESCENCETHICKNESSMAP:!1,HAS_ANISOTROPYMAP:!1,HAS_BUMPMAP:!1,HAS_DIFFUSETRANSMISSIONMAP:!1,HAS_DIFFUSETRANSMISSIONCOLORMAP:!1,HAS_MULTISCATTERCOLORMAP:!1,USE_MATERIAL_EXTENSIONS:!1,ALPHA_CUTOFF:!1,USE_IBL:!1,PBR_DEBUG:!1},getUniforms:e=>e,uniformTypes:{unlit:"i32",baseColorMapEnabled:"i32",baseColorFactor:"vec4<f32>",normalMapEnabled:"i32",normalScale:"f32",emissiveMapEnabled:"i32",emissiveFactor:"vec3<f32>",metallicRoughnessValues:"vec2<f32>",metallicRoughnessMapEnabled:"i32",occlusionMapEnabled:"i32",occlusionStrength:"f32",alphaCutoffEnabled:"i32",alphaCutoff:"f32",specularColorFactor:"vec3<f32>",specularIntensityFactor:"f32",specularColorMapEnabled:"i32",specularIntensityMapEnabled:"i32",ior:"f32",transmissionFactor:"f32",transmissionMapEnabled:"i32",thicknessFactor:"f32",attenuationDistance:"f32",attenuationColor:"vec3<f32>",clearcoatFactor:"f32",clearcoatRoughnessFactor:"f32",clearcoatMapEnabled:"i32",clearcoatRoughnessMapEnabled:"i32",sheenColorFactor:"vec3<f32>",sheenRoughnessFactor:"f32",sheenColorMapEnabled:"i32",sheenRoughnessMapEnabled:"i32",iridescenceFactor:"f32",iridescenceIor:"f32",iridescenceThicknessRange:"vec2<f32>",iridescenceMapEnabled:"i32",anisotropyStrength:"f32",anisotropyRotation:"f32",anisotropyDirection:"vec2<f32>",anisotropyMapEnabled:"i32",emissiveStrength:"f32",dispersion:"f32",IBLenabled:"i32",scaleIBLAmbient:"vec2<f32>",scaleDiffBaseMR:"vec4<f32>",scaleFGDSpec:"vec4<f32>",baseColorUVSet:"i32",baseColorUVTransform:"mat3x3<f32>",metallicRoughnessUVSet:"i32",metallicRoughnessUVTransform:"mat3x3<f32>",normalUVSet:"i32",normalUVTransform:"mat3x3<f32>",occlusionUVSet:"i32",occlusionUVTransform:"mat3x3<f32>",emissiveUVSet:"i32",emissiveUVTransform:"mat3x3<f32>",specularColorUVSet:"i32",specularColorUVTransform:"mat3x3<f32>",specularIntensityUVSet:"i32",specularIntensityUVTransform:"mat3x3<f32>",transmissionUVSet:"i32",transmissionUVTransform:"mat3x3<f32>",thicknessUVSet:"i32",thicknessUVTransform:"mat3x3<f32>",clearcoatUVSet:"i32",clearcoatUVTransform:"mat3x3<f32>",clearcoatRoughnessUVSet:"i32",clearcoatRoughnessUVTransform:"mat3x3<f32>",clearcoatNormalUVSet:"i32",clearcoatNormalUVTransform:"mat3x3<f32>",sheenColorUVSet:"i32",sheenColorUVTransform:"mat3x3<f32>",sheenRoughnessUVSet:"i32",sheenRoughnessUVTransform:"mat3x3<f32>",iridescenceUVSet:"i32",iridescenceUVTransform:"mat3x3<f32>",iridescenceThicknessUVSet:"i32",iridescenceThicknessUVTransform:"mat3x3<f32>",anisotropyUVSet:"i32",anisotropyUVTransform:"mat3x3<f32>",bumpFactor:"f32",bumpMapEnabled:"i32",diffuseTransmissionFactor:"f32",diffuseTransmissionMapEnabled:"i32",diffuseTransmissionColorFactor:"vec3<f32>",diffuseTransmissionColorMapEnabled:"i32",multiscatterColorFactor:"vec3<f32>",multiscatterColorMapEnabled:"i32",scatterAnisotropy:"f32",bumpUVSet:"i32",bumpUVTransform:"mat3x3<f32>",diffuseTransmissionUVSet:"i32",diffuseTransmissionUVTransform:"mat3x3<f32>",diffuseTransmissionColorUVSet:"i32",diffuseTransmissionColorUVTransform:"mat3x3<f32>",multiscatterColorUVSet:"i32",multiscatterColorUVTransform:"mat3x3<f32>"}},Ar=`
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
`,yr=`#version 300 es

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
`,Nr=`#version 300 es
  out vec4 fragmentColor;

  void main(void) {
    vec3 pos = pbr_vPosition;
    fragmentColor = pbr_filterColor(vec4(1.0));
  }
`;function it(e,t){const r=t.materialFactory||new et(e,{modules:[le]}),n={...t.parsedPPBRMaterial.uniforms};delete n.camera;const o=Object.fromEntries(Object.entries({...n,...t.parsedPPBRMaterial.bindings}).filter(([i,s])=>r.ownsBinding(i)&&Lr(s))),a=r.createMaterial({id:t.id,bindings:o});return a.setProps({pbrMaterial:n}),a}function Er(e,t){const{id:r,geometry:n,parsedPPBRMaterial:o,vertexCount:a,modelOptions:i={},instanceMatrices:s,morphTargets:l=[]}=t,c=i.userData?.gltfAnimatedCrowd;if(c&&s)throw new Error("Nested glTF crowd instancing is unsupported");x.info(4,"createGLTFModel defines: ",o.defines)();const u=[],h={depthWriteEnabled:!0,depthCompare:"less",depthFormat:"depth24plus",cullMode:"back"},f={},p=[],m=[],d=[],g=!!c?.gpuAnimation;if(s||c)for(let U=0;U<4;U++){const w=new Float32Array((c?.capacity||s?.length||0)*4);s?.forEach((ie,W)=>{for(let J=0;J<4;J++)w[W*4+J]=ie[U*4+J]});const k=`instanceModelMatrixCol${U}`,ee=e.createBuffer({id:`${r||"gltf"}-${k}`,data:w,usage:V.VERTEX|V.COPY_DST});f[k]=ee,p.push({name:k,format:"float32x4",stepMode:"instance"}),u.push(ee),m.push(ee),d.push(w)}let b,S,R,_;if(c&&g){b=new Float32Array(c.capacity*4),R=new Float32Array(c.capacity*4);for(const[U,w]of[["instanceAnimationFrames",b],["instanceAnimationBlend",R]]){const k=e.createBuffer({id:`${r||"gltf"}-${U}`,data:w,usage:V.VERTEX|V.COPY_DST});f[U]=k,p.push({name:U,format:"float32x4",stepMode:"instance"}),u.push(k),U==="instanceAnimationFrames"?S=k:_=k}}const M=!!o.defines.HAS_SKIN,C=!!(c&&M&&!g);let I,L;c&&C&&(L=new Float32Array(c.capacity*c.jointsPerInstance*16),I=e.type==="webgpu"?e.createBuffer({id:`${r||"gltf"}-crowd-joint-matrices`,byteLength:L.byteLength,usage:V.STORAGE|V.COPY_DST}):e.createTexture({id:`${r||"gltf"}-crowd-joint-matrices`,format:"rgba32float",width:c.jointsPerInstance*4,height:c.capacity,usage:D.SAMPLE|D.COPY_DST,sampler:{minFilter:"nearest",magFilter:"nearest",mipmapFilter:"nearest"}}),u.push(I));const N=c?l.length:0,E=Math.floor((n.attributes.POSITION?.value.length||0)/3);let F,ge,X;if(c&&N>0&&E>0){const U=new Float32Array(N*3*E*4);for(const[w,k]of l.entries())for(const[ee,ie]of["POSITION","NORMAL","TANGENT"].entries()){const W=k[ie];if(!W)continue;const J=ie==="TANGENT"&&W.length===E*4?4:3;for(let se=0;se<E;se++){const Se=((w*3+ee)*E+se)*4,_e=se*J;U[Se]=W[_e]||0,U[Se+1]=W[_e+1]||0,U[Se+2]=W[_e+2]||0}}if(F=Te(e,`${r||"gltf"}-crowd-morph-targets`,U,E,N*3),u.push(F),!g){const w=Math.ceil(N/4);ge=new Float32Array(c.capacity*w*4),X=Te(e,`${r||"gltf"}-crowd-morph-weights`,ge,w,c.capacity),u.push(X)}}const ae=M&&c?c.jointsPerInstance:0,Q=4+ae*4+N;let q,be;c?.gpuAnimation&&(be=new Float32Array(c.gpuAnimation.frameCount*Q*4),q=Te(e,`${r||"gltf"}-crowd-animation-frames`,be,Q,c.gpuAnimation.frameCount),u.push(q));let ve=Ar;for(const[U,w]of[["CROWD_JOINTS_PER_INSTANCE",c?.jointsPerInstance||0],["CROWD_MORPH_VERTEX_COUNT",E],["CROWD_MORPH_TARGET_COUNT",N],["CROWD_ANIMATION_JOINT_COUNT",ae],["CROWD_ANIMATION_FRAME_STRIDE",Q]])ve=ve.replaceAll(`u32(${U})`,`u32(${w})`);const Ye={id:r,source:ve,vs:yr,fs:Nr,geometry:n,topology:n.topology,vertexCount:a,modules:[le,Sr,...c?[Ir]:[]],...i,...s||c?{attributes:{...i.attributes,...f},bufferLayout:[...i.bufferLayout||[],...p],instanceCount:s?.length||0,isInstanced:!0}:{},defines:{...o.defines,...i.defines,...s||c?{HAS_GLTF_INSTANCING:!0}:{},...C?{HAS_INSTANCED_SKIN:!0,CROWD_JOINTS_PER_INSTANCE:c.jointsPerInstance}:{},...g?{HAS_GPU_CROWD_ANIMATION:!0,CROWD_ANIMATION_FRAME_STRIDE:Q}:{},...F?{HAS_INSTANCED_MORPH:!0,CROWD_MORPH_TARGET_COUNT:N}:{},...c?{CROWD_ANIMATION_JOINT_COUNT:ae}:{}},parameters:{...h,...o.parameters,...i.parameters}},Qe=t.material||it(e,{id:r?`${r}-material`:void 0,parsedPPBRMaterial:o});Ye.material=Qe;const Z=new sr(e,Ye),ar={...o.uniforms,...i.uniforms,...o.bindings,...i.bindings},ir=Ur(Z.shaderInputs.getModules(),Qe,ar);Z.shaderInputs.setProps(ir),I&&Z.shaderInputs.setProps({skin:{jointMatrices:[],skinJointMatrices:I}}),(q||F||X)&&Z.shaderInputs.setProps({gpuAnimation:{...q?{gpuAnimationFrames:q}:{},...F?{gpuMorphTargets:F}:{},...X?{gpuMorphWeights:X}:{}}});const Ze=new $({managedResources:u,model:Z,bounds:t.bounds,instanceMatrices:s});return c&&(Ze.userData.gltfAnimatedCrowd={transformBuffers:m,transformColumns:d,skinJointMatrices:I,jointMatrices:L,jointsPerInstance:c.jointsPerInstance,morphTargetCount:N,morphTargetData:F,morphWeights:ge,morphWeightData:X,animationFrames:q,animationFrameValues:be,animationFrameStride:Q,animationJointCount:ae,animationParameters:b,animationParameterBuffer:S,animationBlend:R,animationBlendBuffer:_}),Ze}function Te(e,t,r,n,o){if(e.type==="webgpu")return e.createBuffer({id:t,data:r,usage:V.STORAGE|V.COPY_DST});const a=e.createTexture({id:t,format:"rgba32float",width:n,height:o,usage:D.SAMPLE|D.COPY_DST,sampler:{minFilter:"nearest",magFilter:"nearest",mipmapFilter:"nearest"}});return a.writeData(r,{width:n,height:o}),a}function Lr(e){return e instanceof V||e instanceof Re||e instanceof vr||e instanceof D||e instanceof gr}function Ur(e,t,r){const n=new Map;for(const a of e){for(const i of Object.keys(a.uniformTypes||{}))n.set(i,a.name);for(const i of a.bindingLayout||[])n.set(i.name,a.name)}const o={};for(const[a,i]of Object.entries(r)){if(i===void 0)continue;const s=n.get(a);!s||t.ownsModule(s)||(o[s]||={},o[s][a]=i)}return o}function st(e,t){const r=t.extensions?.EXT_mesh_gpu_instancing?.attributes;if(!r||typeof r!="object")return null;const n={};let o;for(const[i,s]of Object.entries(r)){const l=typeof s=="number"?e.accessors[s]:s;if(!l||!ArrayBuffer.isView(l.value))throw new Error(`Invalid glTF instance accessor for ${i}`);if(o!==void 0&&l.count!==o)throw new Error("glTF instance attributes must have matching accessor counts");o=l.count,n[i]={value:l.value,size:l.components||Pr(l.type),count:l.count,normalized:!!l.normalized}}const a=[];for(let i=0;i<(o||0);i++){const s=Me(n.TRANSLATION,i,[0,0,0]),l=Me(n.ROTATION,i,[0,0,0,1]),c=Me(n.SCALE,i,[1,1,1]),u=Math.hypot(...l);if(u>0)for(let h=0;h<l.length;h++)l[h]/=u;a.push(new B().translate(s).multiplyRight(new B().fromQuaternion(l)).scale(c))}return{matrices:a,attributes:n}}function Me(e,t,r){if(!e)return[...r];const n=e.value;return r.map((o,a)=>{const i=n[t*e.size+a];return i===void 0?o:e.normalized?e.value instanceof Int8Array?Math.max(i/127,-1):e.value instanceof Int16Array?Math.max(i/32767,-1):e.value instanceof Uint8Array?i/255:e.value instanceof Uint16Array?i/65535:i:i})}function Pr(e){switch(e){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;default:return 1}}function Ce(e,t){e.userData.morphWeights=[...t];const r=e.userData.morphMeshes||[];for(const n of r)n.preorderTraversal(o=>{if(!(o instanceof $))return;const a=o.userData.morphTargets;a&&(dr(o.model,a.geometry,a.targets,t),o.userData.morphWeights=[...t])})}var v;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN",e[e.ONE=1]="ONE",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.FUNC_ADD=32774]="FUNC_ADD",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST=9728]="NEAREST",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",e[e.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",e[e.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",e[e.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",e[e.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",e[e.REPEAT=10497]="REPEAT",e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL"})(v||(v={}));function Fr(e){switch(e){case v.POINTS:return"point-list";case v.LINES:return"line-list";case v.LINE_STRIP:return"line-strip";case v.TRIANGLES:return"triangle-list";case v.TRIANGLE_STRIP:return"triangle-strip";default:throw new Error(String(e))}}function wr(e,t,r){if(e!==v.LINE_LOOP&&e!==v.TRIANGLE_FAN)return{topology:Fr(e)};const n=t?.length??r,o=e===v.LINE_LOOP?n>=2?n*2:0:n>=3?(n-2)*3:0,a=new(t instanceof Uint32Array||!t&&r>65536?Uint32Array:Uint16Array)(o),i=s=>t?.[s]??s;if(e===v.LINE_LOOP){for(let s=0;s<n;s++)a[s*2]=i(s),a[s*2+1]=i((s+1)%n);return{topology:"line-list",indices:a}}for(let s=0;s<n-2;s++)a[s*3]=i(0),a[s*3+1]=i(s+1),a[s*3+2]=i(s+2);return{topology:"triangle-list",indices:a}}var xe=[A("baseColor","pbr_baseColorSampler","baseColorTexture",["pbrMetallicRoughness","baseColorTexture"]),A("metallicRoughness","pbr_metallicRoughnessSampler","metallicRoughnessTexture",["pbrMetallicRoughness","metallicRoughnessTexture"]),A("normal","pbr_normalSampler","normalTexture",["normalTexture"]),A("occlusion","pbr_occlusionSampler","occlusionTexture",["occlusionTexture"]),A("emissive","pbr_emissiveSampler","emissiveTexture",["emissiveTexture"]),A("specularColor","pbr_specularColorSampler","KHR_materials_specular.specularColorTexture",["extensions","KHR_materials_specular","specularColorTexture"]),A("specularIntensity","pbr_specularIntensitySampler","KHR_materials_specular.specularTexture",["extensions","KHR_materials_specular","specularTexture"]),A("transmission","pbr_transmissionSampler","KHR_materials_transmission.transmissionTexture",["extensions","KHR_materials_transmission","transmissionTexture"]),A("thickness","pbr_thicknessSampler","KHR_materials_volume.thicknessTexture",["extensions","KHR_materials_volume","thicknessTexture"]),A("clearcoat","pbr_clearcoatSampler","KHR_materials_clearcoat.clearcoatTexture",["extensions","KHR_materials_clearcoat","clearcoatTexture"]),A("clearcoatRoughness","pbr_clearcoatRoughnessSampler","KHR_materials_clearcoat.clearcoatRoughnessTexture",["extensions","KHR_materials_clearcoat","clearcoatRoughnessTexture"]),A("clearcoatNormal","pbr_clearcoatNormalSampler","KHR_materials_clearcoat.clearcoatNormalTexture",["extensions","KHR_materials_clearcoat","clearcoatNormalTexture"]),A("sheenColor","pbr_sheenColorSampler","KHR_materials_sheen.sheenColorTexture",["extensions","KHR_materials_sheen","sheenColorTexture"]),A("sheenRoughness","pbr_sheenRoughnessSampler","KHR_materials_sheen.sheenRoughnessTexture",["extensions","KHR_materials_sheen","sheenRoughnessTexture"]),A("iridescence","pbr_iridescenceSampler","KHR_materials_iridescence.iridescenceTexture",["extensions","KHR_materials_iridescence","iridescenceTexture"]),A("iridescenceThickness","pbr_iridescenceThicknessSampler","KHR_materials_iridescence.iridescenceThicknessTexture",["extensions","KHR_materials_iridescence","iridescenceThicknessTexture"]),A("anisotropy","pbr_anisotropySampler","KHR_materials_anisotropy.anisotropyTexture",["extensions","KHR_materials_anisotropy","anisotropyTexture"]),A("bump","pbr_bumpSampler","EXT_materials_bump.bumpTexture",["extensions","EXT_materials_bump","bumpTexture"]),A("diffuseTransmission","pbr_diffuseTransmissionSampler","KHR_materials_diffuse_transmission.diffuseTransmissionTexture",["extensions","KHR_materials_diffuse_transmission","diffuseTransmissionTexture"]),A("diffuseTransmissionColor","pbr_diffuseTransmissionColorSampler","KHR_materials_diffuse_transmission.diffuseTransmissionColorTexture",["extensions","KHR_materials_diffuse_transmission","diffuseTransmissionColorTexture"]),A("multiscatterColor","pbr_multiscatterColorSampler","KHR_materials_volume_scatter.multiscatterColorTexture",["extensions","KHR_materials_volume_scatter","multiscatterColorTexture"])],Vr=new Map(xe.map(e=>[e.slot,e]));function A(e,t,r,n){return{slot:e,binding:t,displayName:r,pathSegments:n,colorSpace:e==="baseColor"||e==="emissive"||e==="specularColor"||e==="sheenColor"||e==="diffuseTransmissionColor"||e==="multiscatterColor"?"srgb":"linear",uvSetUniform:`${e}UVSet`,uvTransformUniform:`${e}UVTransform`}}function lt(){return xe}function Ae(e){const t=Vr.get(e);if(!t)throw new Error(`Unknown PBR texture transform slot ${e}`);return t}function ye(e){const t=e?.extensions?.KHR_texture_transform;return{offset:t?.offset?[t.offset[0],t.offset[1]]:[0,0],rotation:t?.rotation??0,scale:t?.scale?[t.scale[0],t.scale[1]]:[1,1]}}function Ne(e){return e?.extensions?.KHR_texture_transform?.texCoord??e?.texCoord??0}function Or(e){return xe.find(t=>t.pathSegments.length===e.length&&t.pathSegments.every((r,n)=>e[n]===r))||null}function ce(e){const t=new Y().set(1,0,0,0,1,0,e.offset[0],e.offset[1],1),r=new Y().set(Math.cos(e.rotation),Math.sin(e.rotation),0,-Math.sin(e.rotation),Math.cos(e.rotation),0,0,0,1),n=new Y().set(e.scale[0],0,0,0,e.scale[1],0,0,0,1);return Array.from(t.multiplyRight(r).multiplyRight(n))}function Dr(e,t){const r=new Y(ce(e)),n=new Y(ce(t)),o=new Y(r).invert();return Array.from(n.multiplyRight(o))}function ct(e={}){const t=e.wrapS??e.parameters?.[v.TEXTURE_WRAP_S],r=e.wrapT??e.parameters?.[v.TEXTURE_WRAP_T],n=e.magFilter??e.parameters?.[v.TEXTURE_MAG_FILTER],o=e.minFilter??e.parameters?.[v.TEXTURE_MIN_FILTER],a=ft(t),i=ft(r),s=Gr(n);return{...a?{addressModeU:a}:{},...i?{addressModeV:i}:{},...s?{magFilter:s}:{},...zr(o)}}function Br(e){const t=ut(e.addressModeU),r=ut(e.addressModeV),n=Hr(e.magFilter),o=kr(e.minFilter,e.mipmapFilter);return{...t!==void 0?{wrapS:t}:{},...r!==void 0?{wrapT:r}:{},...n!==void 0?{magFilter:n}:{},...o!==void 0?{minFilter:o}:{}}}function ft(e){switch(e){case v.CLAMP_TO_EDGE:return"clamp-to-edge";case v.REPEAT:return"repeat";case v.MIRRORED_REPEAT:return"mirror-repeat";default:return}}function ut(e){switch(e){case"clamp-to-edge":return v.CLAMP_TO_EDGE;case"repeat":return v.REPEAT;case"mirror-repeat":return v.MIRRORED_REPEAT;default:return}}function Hr(e){switch(e){case"nearest":return v.NEAREST;case"linear":return v.LINEAR;default:return}}function kr(e,t){if(e)return t==="nearest"?e==="nearest"?v.NEAREST_MIPMAP_NEAREST:v.LINEAR_MIPMAP_NEAREST:t==="linear"?e==="nearest"?v.NEAREST_MIPMAP_LINEAR:v.LINEAR_MIPMAP_LINEAR:e==="nearest"?v.NEAREST:v.LINEAR}function Gr(e){switch(e){case v.NEAREST:return"nearest";case v.LINEAR:return"linear";default:return}}function zr(e){switch(e){case v.NEAREST:return{minFilter:"nearest"};case v.LINEAR:return{minFilter:"linear"};case v.NEAREST_MIPMAP_NEAREST:return{minFilter:"nearest",mipmapFilter:"nearest"};case v.LINEAR_MIPMAP_NEAREST:return{minFilter:"linear",mipmapFilter:"nearest"};case v.NEAREST_MIPMAP_LINEAR:return{minFilter:"nearest",mipmapFilter:"linear"};case v.LINEAR_MIPMAP_LINEAR:return{minFilter:"linear",mipmapFilter:"linear"};default:return{}}}var Kr={NORMAL:["NORMAL","normals"],TANGENT:["TANGENT"],TEXCOORD_0:["TEXCOORD_0","texCoords"],TEXCOORD_1:["TEXCOORD_1","texCoords1"],JOINTS_0:["JOINTS_0"],WEIGHTS_0:["WEIGHTS_0"],COLOR_0:["COLOR_0","colors"]};function pt(e,t,r,n){const o={defines:{MANUAL_SRGB:!0},bindings:{},uniforms:{camera:[0,0,0],metallicRoughnessValues:[1,1]},parameters:{},glParameters:{},generatedTextures:[]};o.defines.USE_TEX_LOD=!0;const{imageBasedLightingEnvironment:a}=n;return a&&(o.bindings.pbr_diffuseEnvSampler=a.diffuseEnvSampler.texture,o.bindings.pbr_specularEnvSampler=a.specularEnvSampler.texture,o.bindings.pbr_brdfLUT=a.brdfLutTexture.texture,o.uniforms.IBLenabled=!0,o.uniforms.scaleIBLAmbient=[1,1]),n?.pbrDebug&&(o.defines.PBR_DEBUG=!0,o.uniforms.scaleDiffBaseMR=[0,0,0,0],o.uniforms.scaleFGDSpec=[0,0,0,0]),H(r,"NORMAL")&&(o.defines.HAS_NORMALS=!0),H(r,"TANGENT")&&n?.useTangents&&(o.defines.HAS_TANGENTS=!0),H(r,"TEXCOORD_0")&&(o.defines.HAS_UV=!0),H(r,"TEXCOORD_1")&&(o.defines.HAS_UV_1=!0),H(r,"JOINTS_0")&&H(r,"WEIGHTS_0")&&(o.defines.HAS_SKIN=!0),H(r,"COLOR_0")&&(o.defines.HAS_COLORS=!0),n?.imageBasedLightingEnvironment&&(o.defines.USE_IBL=!0),n?.lights&&(o.defines.USE_LIGHTS=!0),t&&(n.validateAttributes!==!1&&jr(t,r),$r(e,t,o,r,n.gltf)),o}function jr(e,t){const r=mt(e,0);r.length>0&&!H(t,"TEXCOORD_0")&&x.warn(`glTF material uses ${r.join(", ")} but primitive is missing TEXCOORD_0; textured shading will sample the default UV coordinates`)();const n=mt(e,1);if(n.length>0&&!H(t,"TEXCOORD_1")&&x.warn(`glTF material uses ${n.join(", ")} with TEXCOORD_1 but primitive is missing TEXCOORD_1; those textures will be skipped`)(),e.unlit||e.extensions?.KHR_materials_unlit||H(t,"NORMAL"))return;const o=e.normalTexture?"lit PBR shading with normalTexture":"lit PBR shading";x.warn(`glTF primitive is missing NORMAL while using ${o}; shading will fall back to geometric normals`)()}function mt(e,t){const r=[];for(const n of lt()){const o=Wr(e,n.pathSegments);o&&Ne(o)===t&&r.push(n.displayName)}return r}function H(e,t){return Kr[t].some(r=>!!e[r])}function Wr(e,t){let r=e;for(const n of t)if(r=r?.[n],!r)return null;return r}function $r(e,t,r,n,o){if(r.uniforms.unlit=!!(t.unlit||t.extensions?.KHR_materials_unlit),t.pbrMetallicRoughness&&Jr(e,t.pbrMetallicRoughness,r,n,o),t.normalTexture){y(e,t.normalTexture,"pbr_normalSampler",r,{featureOptions:{define:"HAS_NORMALMAP",enabledUniformName:"normalMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"normal"});const{scale:a=1}=t.normalTexture;r.uniforms.normalScale=a}if(t.occlusionTexture){y(e,t.occlusionTexture,"pbr_occlusionSampler",r,{featureOptions:{define:"HAS_OCCLUSIONMAP",enabledUniformName:"occlusionMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"occlusion"});const{strength:a=1}=t.occlusionTexture;r.uniforms.occlusionStrength=a}switch(r.uniforms.emissiveFactor=t.emissiveFactor||[0,0,0],t.emissiveTexture&&y(e,t.emissiveTexture,"pbr_emissiveSampler",r,{featureOptions:{define:"HAS_EMISSIVEMAP",enabledUniformName:"emissiveMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"emissive"}),Yr(e,t.extensions,r,o,n),t.alphaMode||"OPAQUE"){case"OPAQUE":break;case"MASK":{const{alphaCutoff:a=.5}=t;r.defines.ALPHA_CUTOFF=!0,r.uniforms.alphaCutoffEnabled=!0,r.uniforms.alphaCutoff=a;break}case"BLEND":x.warn("glTF BLEND alphaMode might not work well because it requires mesh sorting")(),Xr(r)}}function Xr(e){e.parameters.blend=!0,e.parameters.blendColorOperation="add",e.parameters.blendColorSrcFactor="src-alpha",e.parameters.blendColorDstFactor="one-minus-src-alpha",e.parameters.blendAlphaOperation="add",e.parameters.blendAlphaSrcFactor="one",e.parameters.blendAlphaDstFactor="one-minus-src-alpha",e.glParameters.blend=!0,e.glParameters.blendEquation=v.FUNC_ADD,e.glParameters.blendFunc=[v.SRC_ALPHA,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA]}function qr(e){e.parameters.blend=!0,e.parameters.depthWriteEnabled=!1,e.parameters.blendColorOperation="add",e.parameters.blendColorSrcFactor="one",e.parameters.blendColorDstFactor="one-minus-src-alpha",e.parameters.blendAlphaOperation="add",e.parameters.blendAlphaSrcFactor="one",e.parameters.blendAlphaDstFactor="one-minus-src-alpha",e.glParameters.blend=!0,e.glParameters.depthMask=!1,e.glParameters.blendEquation=v.FUNC_ADD,e.glParameters.blendFunc=[v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA]}function Jr(e,t,r,n,o){t.baseColorTexture&&y(e,t.baseColorTexture,"pbr_baseColorSampler",r,{featureOptions:{define:"HAS_BASECOLORMAP",enabledUniformName:"baseColorMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"baseColor"}),r.uniforms.baseColorFactor=t.baseColorFactor||[1,1,1,1],t.metallicRoughnessTexture&&y(e,t.metallicRoughnessTexture,"pbr_metallicRoughnessSampler",r,{featureOptions:{define:"HAS_METALROUGHNESSMAP",enabledUniformName:"metallicRoughnessMapEnabled"},gltf:o,attributes:n,textureTransformSlot:"metallicRoughness"});const{metallicFactor:a=1,roughnessFactor:i=1}=t;r.uniforms.metallicRoughnessValues=[a,i]}function Yr(e,t,r,n,o={}){t&&(Qr(t)&&(r.defines.USE_MATERIAL_EXTENSIONS=!0),Zr(e,t.KHR_materials_specular,r,n,o),en(t.KHR_materials_ior,r),rn(e,t.EXT_materials_bump,r,n,o),tn(e,t.KHR_materials_transmission,r,n,o),nn(e,t.KHR_materials_diffuse_transmission,r,n,o),on(e,t.KHR_materials_volume,r,n,o),an(e,t.KHR_materials_volume_scatter,t.KHR_materials_volume,r,n,o),sn(t.KHR_materials_dispersion,r),ln(e,t.KHR_materials_clearcoat,r,n,o),cn(e,t.KHR_materials_sheen,r,n,o),fn(e,t.KHR_materials_iridescence,r,n,o),un(e,t.KHR_materials_anisotropy,r,n,o),pn(t.KHR_materials_emissive_strength,r))}function Qr(e){return!!(e.KHR_materials_specular||e.KHR_materials_ior||e.EXT_materials_bump||e.KHR_materials_transmission||e.KHR_materials_diffuse_transmission||e.KHR_materials_volume||e.KHR_materials_volume_scatter||e.KHR_materials_dispersion||e.KHR_materials_clearcoat||e.KHR_materials_sheen||e.KHR_materials_iridescence||e.KHR_materials_anisotropy)}function Zr(e,t,r,n,o={}){t&&(t.specularColorFactor&&(r.uniforms.specularColorFactor=t.specularColorFactor),t.specularFactor!==void 0&&(r.uniforms.specularIntensityFactor=t.specularFactor),t.specularColorTexture&&y(e,t.specularColorTexture,"pbr_specularColorSampler",r,{featureOptions:{define:"HAS_SPECULARCOLORMAP",enabledUniformName:"specularColorMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"specularColor"}),t.specularTexture&&y(e,t.specularTexture,"pbr_specularIntensitySampler",r,{featureOptions:{define:"HAS_SPECULARINTENSITYMAP",enabledUniformName:"specularIntensityMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"specularIntensity"}))}function en(e,t){e?.ior!==void 0&&(t.uniforms.ior=e.ior)}function tn(e,t,r,n,o={}){t&&(t.transmissionFactor!==void 0&&(r.uniforms.transmissionFactor=t.transmissionFactor),t.transmissionTexture&&y(e,t.transmissionTexture,"pbr_transmissionSampler",r,{featureOptions:{define:"HAS_TRANSMISSIONMAP",enabledUniformName:"transmissionMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"transmission"}),((t.transmissionFactor??0)>0||t.transmissionTexture)&&(x.warn("KHR_materials_transmission uses a premultiplied-alpha blending approximation and may require mesh sorting")(),qr(r)))}function rn(e,t,r,n,o={}){t&&(r.uniforms.bumpFactor=Math.max(t.bumpFactor??1,0),t.bumpTexture&&y(e,t.bumpTexture,"pbr_bumpSampler",r,{featureOptions:{define:"HAS_BUMPMAP",enabledUniformName:"bumpMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"bump"}))}function nn(e,t,r,n,o={}){t&&(r.uniforms.diffuseTransmissionFactor=Math.min(Math.max(t.diffuseTransmissionFactor??0,0),1),r.uniforms.diffuseTransmissionColorFactor=t.diffuseTransmissionColorFactor||[1,1,1],t.diffuseTransmissionTexture&&y(e,t.diffuseTransmissionTexture,"pbr_diffuseTransmissionSampler",r,{featureOptions:{define:"HAS_DIFFUSETRANSMISSIONMAP",enabledUniformName:"diffuseTransmissionMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"diffuseTransmission"}),t.diffuseTransmissionColorTexture&&y(e,t.diffuseTransmissionColorTexture,"pbr_diffuseTransmissionColorSampler",r,{featureOptions:{define:"HAS_DIFFUSETRANSMISSIONCOLORMAP",enabledUniformName:"diffuseTransmissionColorMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"diffuseTransmissionColor"}))}function on(e,t,r,n,o={}){t&&(t.thicknessFactor!==void 0&&(r.uniforms.thicknessFactor=t.thicknessFactor),t.thicknessTexture&&y(e,t.thicknessTexture,"pbr_thicknessSampler",r,{featureOptions:{define:"HAS_THICKNESSMAP"},gltf:n,attributes:o,textureTransformSlot:"thickness"}),t.attenuationDistance!==void 0&&(r.uniforms.attenuationDistance=t.attenuationDistance),t.attenuationColor&&(r.uniforms.attenuationColor=t.attenuationColor))}function an(e,t,r,n,o,a={}){!t||!r||(n.uniforms.multiscatterColorFactor=t.multiscatterColorFactor||t.multiscatterColor||[0,0,0],n.uniforms.scatterAnisotropy=Math.min(Math.max(t.scatterAnisotropy??0,-.999),.999),t.multiscatterColorTexture&&y(e,t.multiscatterColorTexture,"pbr_multiscatterColorSampler",n,{featureOptions:{define:"HAS_MULTISCATTERCOLORMAP",enabledUniformName:"multiscatterColorMapEnabled"},gltf:o,attributes:a,textureTransformSlot:"multiscatterColor"}))}function sn(e,t){e?.dispersion!==void 0&&(t.uniforms.dispersion=Math.max(e.dispersion,0))}function ln(e,t,r,n,o={}){t&&(t.clearcoatFactor!==void 0&&(r.uniforms.clearcoatFactor=t.clearcoatFactor),t.clearcoatRoughnessFactor!==void 0&&(r.uniforms.clearcoatRoughnessFactor=t.clearcoatRoughnessFactor),t.clearcoatTexture&&y(e,t.clearcoatTexture,"pbr_clearcoatSampler",r,{featureOptions:{define:"HAS_CLEARCOATMAP",enabledUniformName:"clearcoatMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"clearcoat"}),t.clearcoatRoughnessTexture&&y(e,t.clearcoatRoughnessTexture,"pbr_clearcoatRoughnessSampler",r,{featureOptions:{define:"HAS_CLEARCOATROUGHNESSMAP",enabledUniformName:"clearcoatRoughnessMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"clearcoatRoughness"}),t.clearcoatNormalTexture&&y(e,t.clearcoatNormalTexture,"pbr_clearcoatNormalSampler",r,{featureOptions:{define:"HAS_CLEARCOATNORMALMAP"},gltf:n,attributes:o,textureTransformSlot:"clearcoatNormal"}))}function cn(e,t,r,n,o={}){t&&(t.sheenColorFactor&&(r.uniforms.sheenColorFactor=t.sheenColorFactor),t.sheenRoughnessFactor!==void 0&&(r.uniforms.sheenRoughnessFactor=t.sheenRoughnessFactor),t.sheenColorTexture&&y(e,t.sheenColorTexture,"pbr_sheenColorSampler",r,{featureOptions:{define:"HAS_SHEENCOLORMAP",enabledUniformName:"sheenColorMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"sheenColor"}),t.sheenRoughnessTexture&&y(e,t.sheenRoughnessTexture,"pbr_sheenRoughnessSampler",r,{featureOptions:{define:"HAS_SHEENROUGHNESSMAP",enabledUniformName:"sheenRoughnessMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"sheenRoughness"}))}function fn(e,t,r,n,o={}){t&&(t.iridescenceFactor!==void 0&&(r.uniforms.iridescenceFactor=t.iridescenceFactor),t.iridescenceIor!==void 0&&(r.uniforms.iridescenceIor=t.iridescenceIor),(t.iridescenceThicknessMinimum!==void 0||t.iridescenceThicknessMaximum!==void 0)&&(r.uniforms.iridescenceThicknessRange=[t.iridescenceThicknessMinimum??100,t.iridescenceThicknessMaximum??400]),t.iridescenceTexture&&y(e,t.iridescenceTexture,"pbr_iridescenceSampler",r,{featureOptions:{define:"HAS_IRIDESCENCEMAP",enabledUniformName:"iridescenceMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"iridescence"}),t.iridescenceThicknessTexture&&y(e,t.iridescenceThicknessTexture,"pbr_iridescenceThicknessSampler",r,{featureOptions:{define:"HAS_IRIDESCENCETHICKNESSMAP"},gltf:n,attributes:o,textureTransformSlot:"iridescenceThickness"}))}function un(e,t,r,n,o={}){t&&(t.anisotropyStrength!==void 0&&(r.uniforms.anisotropyStrength=t.anisotropyStrength),t.anisotropyRotation!==void 0&&(r.uniforms.anisotropyRotation=t.anisotropyRotation),t.anisotropyTexture&&y(e,t.anisotropyTexture,"pbr_anisotropySampler",r,{featureOptions:{define:"HAS_ANISOTROPYMAP",enabledUniformName:"anisotropyMapEnabled"},gltf:n,attributes:o,textureTransformSlot:"anisotropy"}))}function pn(e,t){e?.emissiveStrength!==void 0&&(t.uniforms.emissiveStrength=e.emissiveStrength)}function y(e,t,r,n,o={}){const{featureOptions:a={},gltf:i,attributes:s={},textureTransformSlot:l}=o,{define:c,enabledUniformName:u}=a,h=Ne(t);if(h>1){x.warn(`Skipping ${String(r)} because ${h} is not supported; only TEXCOORD_0 and TEXCOORD_1 are currently available`)();return}if(h===1&&!H(s,"TEXCOORD_1")){x.warn(`Skipping ${String(r)} because it requires TEXCOORD_1 but the primitive does not provide TEXCOORD_1`)();return}const f=mn(t,i),p=f.texture?.source?.image;if(!p){x.warn(`Skipping unresolved glTF texture for ${String(r)}`)();return}const m=dt(e,p,{id:f.uniformName||f.id,sampler:{addressModeU:"repeat",addressModeV:"repeat",minFilter:"linear",magFilter:"linear",...ct(f.texture.sampler)}});if(n.bindings[r]=m,c&&(n.defines[c]=!0),u&&(n.uniforms[u]=!0),l){const d=Ae(l);n.uniforms[d.uvSetUniform]=h,n.uniforms[d.uvTransformUniform]=ce(ye(t))}n.generatedTextures.push(m)}function dt(e,t,r){if("compressed"in t)return hn(e,t,{id:r.id,sampler:r.sampler});const n=r.width!==void 0&&r.height!==void 0?{width:r.width,height:r.height}:e.getExternalImageSize(t),o=r.sampler.mipmapFilter==="nearest"||r.sampler.mipmapFilter==="linear",a=o?e.getMipLevelCount(n.width,n.height):1,i=e.createTexture({id:r.id,sampler:r.sampler,width:n.width,height:n.height,mipLevels:a,...o?{usage:D.SAMPLE|D.RENDER|D.COPY_DST|D.COPY_SRC}:{},...r.colorSpace?{format:r.colorSpace==="srgb"?"rgba8unorm-srgb":"rgba8unorm"}:{},data:t});return a>1&&(e.type==="webgl"?i.generateMipmapsWebGL():e.type==="webgpu"&&e.generateMipmapsWebGPU(i)),i}function mn(e,t){if(e.texture||e.index===void 0||!t?.textures)return e;const r=t.textures[e.index];return r?"texture"in r&&r.texture?{...r,...e,texture:r.texture}:"source"in r?{...e,texture:r}:e:e}function fe(e,t){return e.createTexture({...t,format:"rgba8unorm",width:1,height:1,mipLevels:1})}function ht(e){return e.textureFormat}function dn(e,t,r){const{blockWidth:n=1,blockHeight:o=1}=br.getInfo(r);let a=1;for(let i=1;;i++){const s=Math.max(1,e>>i),l=Math.max(1,t>>i);if(s<n||l<o)break;a++}return a}function hn(e,t,r){let n;if(Array.isArray(t.data)&&t.data[0]?.data?n=t.data:"mipmaps"in t&&Array.isArray(t.mipmaps)?n=t.mipmaps:n=[],n.length===0||!n[0]?.data)return x.warn("createCompressedTexture: compressed image has no valid mip levels, creating fallback")(),fe(e,r);const o=n[0],a=o.width??t.width??0,i=o.height??t.height??0;if(a<=0||i<=0)return x.warn("createCompressedTexture: base level has invalid dimensions, creating fallback")(),fe(e,r);const s=ht(o);if(!s)return x.warn("createCompressedTexture: compressed image has no textureFormat, creating fallback")(),fe(e,r);if(!e.isTextureFormatSupported(s))return x.warn(`createCompressedTexture: ${e.type} device does not support '${s}', creating fallback`)(),fe(e,r);const l=dn(a,i,s),c=Math.min(n.length,l);let u=1;for(let f=1;f<c;f++){const p=n[f];if(!p.data||p.width<=0||p.height<=0){x.warn(`createCompressedTexture: mip level ${f} has invalid data/dimensions, truncating`)();break}const m=ht(p);if(m&&m!==s){x.warn(`createCompressedTexture: mip level ${f} format '${m}' differs from base '${s}', truncating`)();break}const d=Math.max(1,a>>f),g=Math.max(1,i>>f);if(p.width!==d||p.height!==g){x.warn(`createCompressedTexture: mip level ${f} dimensions ${p.width}x${p.height} don't match expected ${d}x${g}, truncating`)();break}u++}const h=e.createTexture({...r,format:s,usage:D.TEXTURE|D.COPY_DST,width:a,height:i,mipLevels:u,data:o.data});for(let f=1;f<u;f++)h.writeData(n[f].data,{width:n[f].width,height:n[f].height,mipLevel:f});return h}var gn={modelOptions:{},pbrDebug:!1,imageBasedLightingEnvironment:void 0,lights:!0,useTangents:!1,useByteColors:!0,strictExtensions:!1};function bn(e,t,r={}){const n=new Set,o={...gn,...r,generatedTextures:n},a=new et(e,{modules:[le]}),i=(t.materials||[]).map((m,d)=>it(e,{id:Tn(m,d),parsedPPBRMaterial:Ee(e,m,{},{...o,gltf:t,validateAttributes:!1}),materialFactory:a})),s=new Map;(t.materials||[]).forEach((m,d)=>{s.set(m.id,i[d])});const l=new Map;t.meshes.forEach((m,d)=>{const g=Le(e,m,t,s,o);l.set(m.id,g)});const c=new Map,u=new Map,h=new Set,f=new Set,p=new Set;return t.nodes.forEach((m,d)=>{const g=vn(e,m,o);c.set(d,g),u.set(m.id,g)}),t.nodes.forEach((m,d)=>{if(c.get(d).add((m.children??[]).map(({id:g})=>{const b=u.get(g);if(!b)throw new Error(`Cannot find child ${g} of node ${d}`);return b})),m.mesh){const g=m.mesh,b=st(t,m),S=g.primitives.some(I=>!!I.targets?.length),R=b||S&&h.has(g.id)?Le(e,g,t,s,o,b||void 0):l.get(g.id);if(!R)throw new Error(`Cannot find mesh child ${m.mesh.id} of node ${d}`);const _=c.get(d),M=l.get(g.id),C=f.has(g.id)&&(m.skin!==void 0||p.has(g.id))&&R===M?Le(e,g,t,s,o):R;if(_.add(C),_.userData.gltfMesh=C,f.add(g.id),m.skin!==void 0&&p.add(g.id),S){h.add(g.id);const I=g.primitives.find(N=>N.targets?.length)?.targets?.length||0,L=m.weights||g.weights||new Array(I).fill(0);_.userData.morphMeshes=[C],o.modelOptions?.userData?.gltfAnimatedCrowd?_.userData.morphWeights=[...L]:Ce(_,L)}}}),{scenes:t.scenes.map(m=>{const d=(m.nodes||[]).map(({id:g})=>{const b=u.get(g);if(!b)throw new Error(`Cannot find child ${g} of scene ${m.name||m.id}`);return b});return new P({id:m.name||m.id,children:d})}),materials:i,gltfMeshIdToNodeMap:l,gltfNodeIdToNodeMap:u,gltfNodeIndexToNodeMap:c,generatedTextures:n}}function Ee(e,t,r,n){const o=pt(e,t,r,n);for(const a of o.generatedTextures)n.generatedTextures.add(a);return o}function vn(e,t,r){return new P({id:t.name||t.id,children:[],matrix:t.matrix,display:t.extensions?.KHR_node_visibility?.visible!==!1,position:t.translation,rotation:t.rotation,scale:t.scale})}function Le(e,t,r,n,o,a){const i=(t.primitives||[]).map((s,l)=>Sn({device:e,gltfPrimitive:s,primitiveIndex:l,gltfMesh:t,gltf:r,gltfMaterialIdToMaterialMap:n,options:o,instancing:a}));return new P({id:t.name||t.id,children:i})}function Sn({device:e,gltfPrimitive:t,primitiveIndex:r,gltfMesh:n,gltf:o,gltfMaterialIdToMaterialMap:a,options:i,instancing:s}){const l=t.name||`${n.name||n.id}-primitive-${r}`,c=In(t.attributes),u=Rn(l,t,wr(t.mode??4,t.indices?.value,c)),h=u.vertexCount,f=_n(t,o,u),p=Ee(e,t.material,u.attributes,{...i,gltf:o}),m=Er(e,{id:l,geometry:u,material:t.material&&a.get(t.material.id)||null,parsedPPBRMaterial:p,modelOptions:i.modelOptions,vertexCount:h,bounds:[t.attributes.POSITION.min,t.attributes.POSITION.max],instanceMatrices:s?.matrices,morphTargets:f?.targets});s&&(m.userData.gltfInstancing=s);const d=t.extensions?.KHR_materials_variants?.mappings||[];if(d.length){const g=new Map;for(const b of d){const S=typeof b.material=="number"?o.materials[b.material]:b.material,R=S&&a.get(S.id);if(!R)continue;const _=Ee(e,S,u.attributes,{...i,gltf:o});for(const M of b.variants||[])g.set(M,{material:R,parameters:{...m.model.parameters,..._.parameters,depthWriteEnabled:S.alphaMode!=="BLEND",cullMode:S.doubleSided?"none":"back"}})}m.userData.gltfMaterialVariants={defaultMaterial:m.model.material,defaultParameters:{...m.model.parameters},mappings:g}}return f&&(m.userData.morphTargets=f),m}function _n(e,t,r){if(!e.targets?.length)return;const n={};for(const o of["POSITION","NORMAL","TANGENT"]){const a=r.attributes[o]?.value;a instanceof Float32Array&&(n[o]=new Float32Array(a))}return{geometry:r,baseAttributes:n,targets:e.targets.map(o=>{const a={};for(const i of["POSITION","NORMAL","TANGENT"]){const s=o[i],l=typeof s=="number"?t.accessors[s]:s;l?.value&&ArrayBuffer.isView(l.value)&&(a[i]=tt(l))}return a})}}function In(e){let t=1/0;for(const r of Object.values(e))if(r){const{value:n,size:o,components:a}=r,i=o??a;n?.length!==void 0&&i>=1&&(t=Math.min(t,n.length/i))}if(!Number.isFinite(t))throw new Error("Could not determine vertex count from attributes");return t}function Rn(e,t,r){const n={};for(const[o,a]of Object.entries(t.attributes)){const{components:i,size:s,value:l,normalized:c}=a,u=o==="POSITION"||o==="NORMAL"||o==="TANGENT",h=!!(t.targets?.length&&u);n[o]={size:s??i,value:h?tt({value:l,normalized:c}):l,normalized:h?!1:c}}return new fr({id:e,topology:r.topology,indices:r.indices??t.indices?.value,attributes:n})}function Tn(e,t){return e.name||e.id||`material-${t}`}function Ue(e,t={}){const r=t.lightDefinitions||e.lights||e.extensions?.KHR_lights_punctual?.lights;if(!r||!Array.isArray(r)||r.length===0)return[];const n=[],o=Nn(e.nodes||[]),a=new Map;for(const i of e.nodes||[]){if(!Mn(i,o,t.nodeVisibility))continue;const s=i.light??i.extensions?.KHR_lights_punctual?.light;if(typeof s!="number"||t.nodeIdentifiers&&!t.nodeIdentifiers.has(i.id))continue;const l=r[s];if(!l)continue;const c=Cn(l.color||[1,1,1],t.useByteColors??!0),u=l.intensity??1,h=l.range,f=gt(i,o,a);switch(l.type){case"directional":n.push(An(f,c,u));break;case"point":n.push(xn(f,c,u,h));break;case"spot":n.push(yn(f,c,u,h,l.spot))}}return n}function Mn(e,t,r){let n=e;for(;n;){const o=r?.get(n.id);if(o?!o.display:n.extensions?.KHR_node_visibility?.visible===!1)return!1;n=t.get(n.id)}return!0}function Cn(e,t){return t?e.map(r=>r*255):cr(e,!1)}function xn(e,t,r,n){const o=bt(e);let a=[1,0,0];return n!==void 0&&n>0&&(a=[1,0,1/(n*n)]),{type:"point",position:o,color:t,intensity:r,attenuation:a}}function An(e,t,r){return{type:"directional",direction:vt(e),color:t,intensity:r}}function yn(e,t,r,n,o={}){const a=bt(e),i=vt(e);let s=[1,0,0];return n!==void 0&&n>0&&(s=[1,0,1/(n*n)]),{type:"spot",position:a,direction:i,color:t,intensity:r,attenuation:s,innerConeAngle:o.innerConeAngle??0,outerConeAngle:o.outerConeAngle??Math.PI/4}}function Nn(e){const t=new Map;for(const r of e)for(const n of r.children||[])t.set(n.id,r);return t}function gt(e,t,r){const n=r.get(e.id);if(n)return n;const o=En(e),a=t.get(e.id),i=a?new B(gt(a,t,r)).multiplyRight(o):o;return r.set(e.id,i),i}function En(e){if(e.matrix)return new B(e.matrix);const t=new B;return e.translation&&t.translate(e.translation),e.rotation&&t.multiplyRight(new B().fromQuaternion(e.rotation)),e.scale&&t.scale(e.scale),t}function bt(e){return e.transformAsPoint([0,0,0])}function vt(e){return e.transformDirection([0,0,-1])}var St=class extends mr{animation;gltfNodeIdToNodeMap;onVisibilityChange;cameras;lightDefinitions;onLightChange;materials;clip;mixer;action;materialTextureTransformState=new Map;constructor(e){if(super({name:e.animation.name||"unnamed"}),this.animation=e.animation,this.gltfNodeIdToNodeMap=e.gltfNodeIdToNodeMap,this.onVisibilityChange=e.onVisibilityChange,this.cameras=e.cameras||[],this.lightDefinitions=e.lightDefinitions||[],this.onLightChange=e.onLightChange,this.materials=e.materials||[],this.animation.name||="unnamed",this.name=this.animation.name,this.animation.channels.some(t=>t.type==="material"||t.type==="textureTransform")&&!this.materials.length)throw new Error(`Animation ${this.animation.name} targets materials, but GLTFAnimator was created without a materials array`);this.mixer=e.mixer||new nt,this.clip=new ur({name:this.name,tracks:this.animation.channels.map(t=>this.createAnimationTrack(t))}),this.action=this.mixer.clipAction(this.clip).play()}applyTime(e){this.action.setTime(e),this.mixer.update(0)}createAnimationTrack(e){const t=Ln(e.sampler.interpolation);if(e.type==="node")return new Ie({name:`${e.targetNodeId}.${e.path}`,times:e.sampler.input,values:e.sampler.output,interpolation:t,valueType:e.path==="rotation"?"quaternion":"vector",binding:{id:`node:${e.targetNodeId}:${e.path}`,getValue:()=>this.getNodeAnimationValue(e.targetNodeId,e.path),setValue:n=>this.applyNodeAnimationValue(e.targetNodeId,e.path,n)}});if(e.type==="camera"||e.type==="light")return new Ie({name:e.pointer,times:e.sampler.input,values:e.sampler.output,interpolation:t,binding:{id:e.pointer,getValue:()=>this.getSceneAnimationValue(e),setValue:n=>this.applySceneAnimationValue(e,n)}});const r=this.materials[e.targetMaterialIndex];if(!r)throw new Error(`Cannot find animation target material ${e.targetMaterialIndex} for ${e.pointer}`);return new Ie({name:e.pointer,times:e.sampler.input,values:e.sampler.output,interpolation:t,binding:{id:e.pointer,getValue:e.type==="material"?()=>Un(r,e):void 0,setValue:n=>{e.type==="material"?Pn(r,e,n):Vn(r,e,n,this.materialTextureTransformState)}}})}getNodeAnimationValue(e,t){const r=this.getTargetNode(e);switch(t){case"translation":return Array.from(r.position);case"rotation":return Array.from(r.rotation);case"scale":return Array.from(r.scale);case"weights":return Array.from(r.userData.morphWeights||[]);case"visibility":return[r.display?1:0];default:return[]}}applyNodeAnimationValue(e,t,r){const n=this.getTargetNode(e);switch(t){case"translation":n.setPosition(r).updateMatrix();break;case"rotation":n.setRotation(r).updateMatrix();break;case"scale":n.setScale(r).updateMatrix();break;case"weights":Ce(n,r);break;case"visibility":n.setProps({display:r[0]!==0}),this.onVisibilityChange?.();break;default:x.warn(`Bad animation path ${t}`)()}}getTargetNode(e){const t=this.gltfNodeIdToNodeMap.get(e);if(!t)throw new Error(`Cannot find animation target node ${e}`);return t}getSceneAnimationValue(e){if(e.type==="camera"){const n=this.cameras[e.targetCameraIndex]?.[e.projection]?.[e.property];return typeof n=="number"?[n]:[]}const t=this.lightDefinitions[e.targetLightIndex],r=e.property==="innerConeAngle"||e.property==="outerConeAngle"?t?.spot?.[e.property]:t?.[e.property];return Array.isArray(r)?e.component===void 0?[...r]:[r[e.component]]:typeof r=="number"?[r]:[]}applySceneAnimationValue(e,t){if(e.type==="camera"){const n=this.cameras[e.targetCameraIndex];n?.[e.projection]&&(n[e.projection][e.property]=t[0]);return}const r=this.lightDefinitions[e.targetLightIndex];if(r){if(e.property==="innerConeAngle"||e.property==="outerConeAngle")r.spot||={},r.spot[e.property]=t[0];else if(e.component!==void 0){const n=[...r[e.property]||[1,1,1]];n[e.component]=t[0],r[e.property]=n}else r[e.property]=t.length===1?t[0]:[...t];this.onLightChange?.()}}},Pe=class extends pr{mixer;activeClip;onUpdate;previousTimeSeconds;constructor(e){const t=new nt;super(e.animations.map((r,n)=>{const o=r.name||`Animation-${n}`;return new St({gltfNodeIdToNodeMap:e.gltfNodeIdToNodeMap,onVisibilityChange:e.onVisibilityChange,cameras:e.cameras,lightDefinitions:e.lightDefinitions,onLightChange:e.onLightChange,materials:e.materials,mixer:t,animation:{name:o,channels:r.channels}})})),this.mixer=t,this.onUpdate=e.onUpdate,this.activeClip=this.clips[0]?.name,e.autoplay===!1?this.clips.forEach(r=>{r.playing=!1,r.action.stop()}):e.autoplay==="first"&&this.activeClip&&this.selectClip(this.activeClip)}setUpdateHandler(e){return this.onUpdate=e,this}setTime(e){const t=e/1e3,r=this.previousTimeSeconds===void 0?0:t-this.previousTimeSeconds;this.previousTimeSeconds=t;const n=r*this.mixer.timeScale;this.clips.forEach(o=>{if(!o.playing){o.action.stop();return}if(o.action.paused)return;o.action.resume();const a=Math.max(0,t-o.startTime)*o.speed;o.action.setTime(a-n*o.action.timeScale)}),this.mixer.update(r),this.onUpdate?.()}update(e){this.mixer.update(e),this.onUpdate?.()}selectClip(e,t={}){const r=this.clips.find(a=>a.name===e);if(!r)throw new Error(`Unknown animation clip: ${e}`);const n=this.clips.find(a=>a.name===this.activeClip),o=t.crossFadeDuration||0;for(const a of this.clips)a!==r&&!(o>0&&a===n)&&(a.playing=!1,a.action.stop());return r.playing=!0,o>0&&n&&n!==r?(n.playing=!0,n.action.crossFadeTo(r.action,o)):r.action.reset().setEffectiveWeight(1).play(),this.activeClip=e,r}};function Ln(e){switch(e){case"STEP":case"LINEAR":case"CUBICSPLINE":return e;default:throw new Error(`Unsupported animation interpolation: ${e}`)}}function Un(e,t){const r=e.shaderInputs.getUniformValues().pbrMaterial?.[t.property];return Array.isArray(r)?t.component===void 0?[...r]:[r[t.component]]:typeof r=="number"?[r]:[]}function Pn(e,t,r){const n=t.component!==void 0?{[t.property]:wn(Fn(e,t.property),t.component,r[0])}:{[t.property]:r.length===1?r[0]:r};e.setProps({pbrMaterial:n})}function Fn(e,t){const r=e.shaderInputs.getUniformValues().pbrMaterial?.[t];return Array.isArray(r)?[...r]:[]}function wn(e,t,r){const n=[...e];return n[t]=r,n}function Vn(e,t,r,n){const o=Ae(t.textureSlot),a=On(n,e,t);switch(t.path){case"offset":t.component!==void 0?a.offset[t.component]=r[0]:a.offset=[r[0],r[1]];break;case"rotation":a.rotation=r[0];break;case"scale":t.component!==void 0?a.scale[t.component]=r[0]:a.scale=[r[0],r[1]]}e.setProps({pbrMaterial:{[o.uvTransformUniform]:Dr(t.baseTransform,a)}})}function On(e,t,r){const n=e.get(t)||{};let o=n[r.textureSlot];return o||(o={offset:[...r.baseTransform.offset],rotation:r.baseTransform.rotation,scale:[...r.baseTransform.scale]},n[r.textureSlot]=o,e.set(t,n)),o}var Fe=class{bindings;scenes;constructor(e){this.scenes=e.scenes,this.bindings=Dn(e),this.update()}update(){if(this.bindings.length===0)return;const e=new Map;for(const t of this.scenes)t.preorderTraversal((r,{worldMatrix:n})=>{r instanceof P&&e.set(r,new B(n))});for(const t of this.bindings){rt({joints:t.joints,meshNode:t.node,worldMatrices:e,inverseBindMatrices:t.inverseBindMatrices,target:t.jointMatrices});for(const r of t.models)r.model.shaderInputs.setProps({skin:{jointMatrices:t.jointMatrices}})}}getBinding(e){return this.bindings.find(t=>typeof e=="number"?t.nodeIndex===e:t.node===e)}};function Dn(e){const{gltf:t,gltfNodeIndexToNodeMap:r}=e,n=[],o=t.skins||[],a=new Set;for(const i of e.scenes)i.preorderTraversal(s=>{s instanceof P&&a.add(s)});for(const[i,s]of t.nodes.entries()){const l=s.skin;if(l===void 0||!s.mesh)continue;const c=_t(t,l),u=o[c],h=r.get(i);if(!u||!h||!a.has(h))continue;const f=u.joints.flatMap(S=>{const R=r.get(S);return R?[R]:[]});if(f.length!==u.joints.length)continue;const p=s.mesh,m=h.userData.gltfMesh,d=m instanceof P?m:h.children.find(S=>S instanceof P&&S.id===(p.name||p.id));if(!(d instanceof P))continue;const g=d.children.flatMap(S=>S instanceof $?[S]:[]),b=u.inverseBindMatrices?.value;n.push({nodeIndex:i,skinIndex:c,node:h,joints:f,...b instanceof Float32Array?{inverseBindMatrices:b}:{},jointMatrices:new Float32Array(f.length*16),models:g})}return n}function _t(e,t){return typeof t=="number"?t:(e.skins||[]).findIndex(r=>{if(r===t||t.id&&r.id===t.id)return!0;if(r.joints.length!==t.joints?.length||!r.joints.every((n,o)=>n===t.joints?.[o]))return!1;if(typeof t.inverseBindMatrices=="number"){const n=e.accessors[t.inverseBindMatrices];return!r.inverseBindMatrices||r.inverseBindMatrices===n}return!0})}var Bn={supportLevel:"none",standardStatus:"unknown",comment:"Not currently listed in the luma.gl glTF extension support registry."},we={KHR_draco_mesh_compression:{supportLevel:"built-in",standardStatus:"ratified",comment:"Decoded by loaders.gl before luma.gl builds the scenegraph."},EXT_meshopt_compression:{supportLevel:"built-in",standardStatus:"ratified",comment:"EXT meshopt-compressed buffer views are decoded by loaders.gl before rendering."},KHR_meshopt_compression:{supportLevel:"none",standardStatus:"release-candidate",comment:"The installed loaders.gl GLTFLoader supports EXT_meshopt_compression, not the KHR release candidate."},KHR_mesh_quantization:{supportLevel:"built-in",standardStatus:"ratified",comment:"Loader-materialized quantized accessors retain their typed values and normalization."},EXT_mesh_features:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Feature identifiers are decoded by loaders.gl; automatic rendering and picking are application-owned."},EXT_structural_metadata:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Structural metadata is decoded by loaders.gl; automatic rendering and querying are application-owned."},KHR_lights_punctual:{supportLevel:"built-in",standardStatus:"ratified",comment:"Parsed into luma.gl Light objects."},KHR_materials_unlit:{supportLevel:"built-in",standardStatus:"ratified",comment:"Unlit materials bypass the default lighting path."},KHR_materials_emissive_strength:{supportLevel:"built-in",standardStatus:"ratified",comment:"Applied by the stock PBR shader."},KHR_texture_basisu:{supportLevel:"built-in",standardStatus:"ratified",comment:"BasisU / KTX2 textures pass through when the device supports them."},KHR_texture_transform:{supportLevel:"built-in",standardStatus:"ratified",comment:"Per-slot UV transforms and animated pointers are applied at runtime; avoid duplicate legacy loader-side baking."},EXT_texture_webp:{supportLevel:"loader-only",standardStatus:"ratified",comment:"Texture source is resolved during load; final support depends on browser and device decode support."},EXT_texture_avif:{supportLevel:"none",standardStatus:"ratified",comment:"The image loader can decode supported AVIF images, but GLTFLoader does not select EXT_texture_avif sources."},KHR_materials_specular:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now applies specular factors and textures to the dielectric F0 term."},KHR_materials_ior:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now drives dielectric reflectance from the glTF IOR value."},KHR_materials_transmission:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now applies transmission to the base layer and exposes transparency through alpha, without a scene-color refraction buffer."},KHR_materials_volume:{supportLevel:"built-in",standardStatus:"ratified",comment:"Thickness and attenuation now tint transmitted light in the stock shader."},KHR_materials_clearcoat:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now adds a secondary clearcoat specular lobe."},KHR_materials_sheen:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now adds a sheen lobe for cloth-like materials."},KHR_materials_iridescence:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now tints specular response with a view-dependent thin-film iridescence approximation."},KHR_materials_anisotropy:{supportLevel:"built-in",standardStatus:"ratified",comment:"The stock shader now shapes highlights and IBL response with an anisotropy-direction approximation."},KHR_materials_pbrSpecularGlossiness:{supportLevel:"loader-only",standardStatus:"archived",comment:"Extension data can be loaded, but it is not translated into the default metallic-roughness material path."},KHR_materials_variants:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Primitive material variants can be selected and restored on the generated scenegraph."},EXT_mesh_gpu_instancing:{supportLevel:"built-in",standardStatus:"ratified",comment:"Accessor-backed instance transforms use one instanced draw per source primitive."},KHR_node_visibility:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Recursive node visibility controls rendered geometry, punctual lights, and animation."},KHR_animation_pointer:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"Node transforms, morph weights and visibility, material factors, texture transforms, camera projections, and punctual lights are wired to runtime updates."},EXT_materials_bump:{supportLevel:"built-in",standardStatus:"draft",comment:"The experimental bump-map draft perturbs the canonical surface normal from a linear height texture."},KHR_materials_diffuse_transmission:{supportLevel:"built-in",standardStatus:"release-candidate",comment:"The Khronos release candidate adds energy-conserving back-lit diffuse transmission and independent color/factor textures."},KHR_materials_dispersion:{supportLevel:"parsed-and-wired",standardStatus:"ratified",comment:"The canonical PBR shader separates red, green, and blue transmission using wavelength-dependent refraction."},KHR_materials_volume_scatter:{supportLevel:"parsed-and-wired",standardStatus:"draft",comment:"The unratified volume-scattering draft is approximated per surface; random-walk and screen-space diffusion are not implemented."},KHR_xmp:{supportLevel:"none",standardStatus:"archived",comment:"Metadata payloads remain in the loaded glTF, but luma.gl does not interpret them."},KHR_xmp_json_ld:{supportLevel:"none",standardStatus:"ratified",comment:"Metadata is preserved in the glTF, but luma.gl does not interpret it."},EXT_lights_image_based:{supportLevel:"none",standardStatus:"multi-vendor",comment:"Use loadPBREnvironment() or custom environment setup instead."},EXT_texture_video:{supportLevel:"none",standardStatus:"multi-vendor",comment:"Video textures are not created automatically by the stock pipeline."},MSFT_lod:{supportLevel:"parsed-and-wired",standardStatus:"vendor",comment:"Node levels are parsed and selected by opt-in animated crowds; material LOD and GPU-driven selection are not implemented."}};function It(){return Object.entries(we).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({extensionName:e,supported:Ct(t.supportLevel),...t}))}function Hn(){const e={total:0,supported:0,bySupportLevel:{"built-in":0,"parsed-and-wired":0,"loader-only":0,none:0},byStandardStatus:{ratified:0,"release-candidate":0,"multi-vendor":0,vendor:0,draft:0,archived:0,unknown:0}};for(const t of It())e.total++,e.supported+=t.supported?1:0,e.bySupportLevel[t.supportLevel]++,e.byStandardStatus[t.standardStatus]++;return e}function Ve(e,t){const r=Array.from(zn(e)).sort(),n=new Set(e.extensionsRequired||[]),o=r.map(a=>{const i=we[a]||Bn,s=kn(a,i,e,t);return[a,{extensionName:a,required:n.has(a),supported:Ct(s.supportLevel),supportLevel:s.supportLevel,standardStatus:i.standardStatus,comment:s.comment}]});return new Map(o)}function Rt(e,t){return Array.from(Ve(e,t).values()).filter(r=>r.required&&!r.supported)}function Tt(e,t){const r=Rt(e,t);if(r.length)throw new Error(`Unsupported required glTF extensions: ${r.map(n=>n.extensionName).join(", ")}`)}function kn(e,t,r,n){if(e!=="KHR_texture_basisu"||!n)return t;const o=Gn(r).find(a=>a===null||!n.isTextureFormatSupported(a));return o===void 0?t:{supportLevel:"none",comment:o===null?`The ${n.type} device cannot use a BasisU texture whose transcoded GPU format is missing.`:`The ${n.type} device does not support the transcoded BasisU texture format '${o}'.`}}function Gn(e){const t=[];for(const r of e.textures||[]){const n=r?.source?.image;if(!n?.compressed)continue;const o=Array.isArray(n.data)?n.data[0]:Array.isArray(n.mipmaps)?n.mipmaps[0]:void 0;t.push(o?.textureFormat??null)}return t}function Mt(e){return we[e]||null}function zn(e){const t=e,r=new Set;return ue(r,e.extensionsUsed),ue(r,e.extensionsRequired),ue(r,t.extensionsRemoved),ue(r,Object.keys(e.extensions||{})),(t.lights?.length||(e.nodes||[]).some(n=>"light"in n))&&r.add("KHR_lights_punctual"),(e.materials||[]).some(n=>{const o=n;return o.unlit||o.extensions?.KHR_materials_unlit})&&r.add("KHR_materials_unlit"),r}function ue(e,t=[]){for(const r of t)e.add(r)}function Ct(e){return e==="built-in"||e==="parsed-and-wired"}function xt(e){const t=e.animations||[],r=new Map,n=new Map;return t.flatMap((o,a)=>{const i=o.name||`Animation-${a}`,s=new Map,l=o.channels.flatMap(({sampler:c,target:u})=>{const h=qn(e,u),f=`${c}:${h??0}`;let p=s.get(f);if(!p){const d=o.samplers[c];if(!d)throw new Error(`Cannot find animation sampler ${c}`);const{input:g,interpolation:b="LINEAR",output:S}=d,R=no(e.accessors[g],r),_=oo(e.accessors[S],n);p={input:R,interpolation:b,output:h!==void 0?Jn(_,R.length,b,h):_},s.set(f,p)}const m=Kn(e,u,p);return m?[m]:[]});return l.length?[{name:i,channels:l}]:[]})}function Kn(e,t,r){if(t.path==="pointer")return jn(e,t,r);const n=At(t.path);if(!n)return null;const o=e.nodes[t.node??0];if(!o)throw new Error(`Cannot find animation target ${t.node}`);return{type:"node",sampler:r,targetNodeId:o.id,path:n}}function jn(e,t,r){const n=t.extensions?.KHR_animation_pointer?.pointer;if(typeof n!="string"||!n.startsWith("/"))return x.warn("KHR_animation_pointer channel is missing a valid JSON pointer and will be skipped")(),null;const o=to(n);switch(o[0]){case"nodes":return Xn(e,o,r,n);case"materials":return Yn(e,o,r,n);case"cameras":return Wn(e,o,r,n);case"extensions":if(o[1]==="KHR_lights_punctual")return $n(e,o,r,n)}return j(n,`top-level target "${o[0]}" has no runtime animation mapping`),null}function Wn(e,t,r,n){const o=Number(t[1]),a=e.cameras?.[o],i=t[2],s=t[3];return t.length!==4||!Number.isInteger(o)||!a||i!=="perspective"&&i!=="orthographic"||a.type!==i||!(i==="perspective"?["aspectRatio","yfov","znear","zfar"]:["xmag","ymag","znear","zfar"]).includes(s)?(j(n,"camera pointers must target a supported projection property"),null):{type:"camera",sampler:r,pointer:n,targetCameraIndex:o,projection:i,property:s}}function $n(e,t,r,n){const o=Number(t[3]),a=e.lights||e.extensions?.KHR_lights_punctual?.lights,i=t[4]==="spot",s=i?t[5]:t[4],l=!i&&s==="color"?t[5]:void 0,c=["color","intensity","range","innerConeAngle","outerConeAngle"],u=i||l!==void 0?6:5;return t[2]!=="lights"||t.length!==u||!Number.isInteger(o)||!Array.isArray(a)||!a[o]||!c.includes(s)||i&&s!=="innerConeAngle"&&s!=="outerConeAngle"||l!==void 0&&(!/^[0-2]$/.test(l)||s!=="color")?(j(n,"punctual-light pointers must target supported typed light properties"),null):{type:"light",sampler:r,pointer:n,targetLightIndex:o,property:s,...l===void 0?{}:{component:Number(l)}}}function Xn(e,t,r,n){const o=t.length===5&&t[2]==="extensions"&&t[3]==="KHR_node_visibility"&&t[4]==="visible";if(t.length!==3&&!o)return j(n,"node pointers must target transforms, morph weights, or KHR_node_visibility.visible"),null;const a=Number(t[1]),i=e.nodes[a];if(!Number.isInteger(a)||!i)return x.warn(`KHR_animation_pointer target ${n} references a missing node and will be skipped`)(),null;if(o&&r.interpolation!=="STEP")return j(n,"boolean visibility animation requires STEP interpolation"),null;const s=o?"visibility":At(t[2]);return s?{type:"node",sampler:r,targetNodeId:i.id,path:s}:(j(n,`node property "${t[2]}" has no runtime animation mapping`),null)}function qn(e,t){let r;if(t.path==="weights")r=t.node;else if(t.path==="pointer"){const a=t.extensions?.KHR_animation_pointer?.pointer,i=typeof a=="string"?/^\/nodes\/(\d+)\/weights$/.exec(a):null;if(!i)return;r=Number(i[1])}else return;const n=e.nodes[r??0],o=typeof n?.mesh=="number"?e.meshes[n.mesh]:n?.mesh;return n?.weights?.length||o?.weights?.length||o?.primitives?.[0]?.targets?.length||1}function Jn(e,t,r,n){const o=r==="CUBICSPLINE"?3:1,a=e.length/(Math.max(t,1)*o),i=n>1?n:Number.isInteger(a)&&a>1?a:n;if(i<=1)return e;const s=e.flat(),l=[];for(let c=0;c<s.length;c+=i)l.push(s.slice(c,c+i));return l}function Yn(e,t,r,n){if(t.length<3)return j(n,"material pointers must include a material index and target property path"),null;const o=Number(t[1]),a=e.materials[o];if(!Number.isInteger(o)||!a)return x.warn(`KHR_animation_pointer target ${n} references a missing material and will be skipped`)(),null;const i=Qn(a,t.slice(2));return"reason"in i?(j(n,i.reason),null):{sampler:r,pointer:n,targetMaterialIndex:o,...i}}function At(e){switch(e){case"translation":case"rotation":case"scale":case"weights":return e;default:return null}}function Qn(e,t){const r=Zn(e,t);if(!("reason"in r)||r.reason!=="not-a-texture-transform-target")return r;switch(t.join("/")){case"pbrMetallicRoughness/baseColorFactor":return e.pbrMetallicRoughness?{type:"material",property:"baseColorFactor"}:{reason:T(t)};case"pbrMetallicRoughness/metallicFactor":return e.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:0}:{reason:T(t)};case"pbrMetallicRoughness/roughnessFactor":return e.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:1}:{reason:T(t)};case"normalTexture/scale":return e.normalTexture?{type:"material",property:"normalScale"}:{reason:T(t)};case"occlusionTexture/strength":return e.occlusionTexture?{type:"material",property:"occlusionStrength"}:{reason:T(t)};case"emissiveFactor":return{type:"material",property:"emissiveFactor"};case"alphaCutoff":return{type:"material",property:"alphaCutoff"};case"extensions/KHR_materials_specular/specularFactor":return e.extensions?.KHR_materials_specular?{type:"material",property:"specularIntensityFactor"}:{reason:T(t)};case"extensions/KHR_materials_specular/specularColorFactor":return e.extensions?.KHR_materials_specular?{type:"material",property:"specularColorFactor"}:{reason:T(t)};case"extensions/KHR_materials_ior/ior":return e.extensions?.KHR_materials_ior?{type:"material",property:"ior"}:{reason:T(t)};case"extensions/EXT_materials_bump/bumpFactor":return e.extensions?.EXT_materials_bump?{type:"material",property:"bumpFactor"}:{reason:T(t)};case"extensions/KHR_materials_diffuse_transmission/diffuseTransmissionFactor":return e.extensions?.KHR_materials_diffuse_transmission?{type:"material",property:"diffuseTransmissionFactor"}:{reason:T(t)};case"extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorFactor":return e.extensions?.KHR_materials_diffuse_transmission?{type:"material",property:"diffuseTransmissionColorFactor"}:{reason:T(t)};case"extensions/KHR_materials_volume_scatter/multiscatterColorFactor":case"extensions/KHR_materials_volume_scatter/multiscatterColor":return e.extensions?.KHR_materials_volume_scatter?{type:"material",property:"multiscatterColorFactor"}:{reason:T(t)};case"extensions/KHR_materials_volume_scatter/scatterAnisotropy":return e.extensions?.KHR_materials_volume_scatter?{type:"material",property:"scatterAnisotropy"}:{reason:T(t)};case"extensions/KHR_materials_dispersion/dispersion":return e.extensions?.KHR_materials_dispersion?{type:"material",property:"dispersion"}:{reason:T(t)};case"extensions/KHR_materials_transmission/transmissionFactor":return e.extensions?.KHR_materials_transmission?{type:"material",property:"transmissionFactor"}:{reason:T(t)};case"extensions/KHR_materials_volume/thicknessFactor":return e.extensions?.KHR_materials_volume?{type:"material",property:"thicknessFactor"}:{reason:T(t)};case"extensions/KHR_materials_volume/attenuationDistance":return e.extensions?.KHR_materials_volume?{type:"material",property:"attenuationDistance"}:{reason:T(t)};case"extensions/KHR_materials_volume/attenuationColor":return e.extensions?.KHR_materials_volume?{type:"material",property:"attenuationColor"}:{reason:T(t)};case"extensions/KHR_materials_clearcoat/clearcoatFactor":return e.extensions?.KHR_materials_clearcoat?{type:"material",property:"clearcoatFactor"}:{reason:T(t)};case"extensions/KHR_materials_clearcoat/clearcoatRoughnessFactor":return e.extensions?.KHR_materials_clearcoat?{type:"material",property:"clearcoatRoughnessFactor"}:{reason:T(t)};case"extensions/KHR_materials_sheen/sheenColorFactor":return e.extensions?.KHR_materials_sheen?{type:"material",property:"sheenColorFactor"}:{reason:T(t)};case"extensions/KHR_materials_sheen/sheenRoughnessFactor":return e.extensions?.KHR_materials_sheen?{type:"material",property:"sheenRoughnessFactor"}:{reason:T(t)};case"extensions/KHR_materials_iridescence/iridescenceFactor":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceFactor"}:{reason:T(t)};case"extensions/KHR_materials_iridescence/iridescenceIor":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceIor"}:{reason:T(t)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMinimum":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:0}:{reason:T(t)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMaximum":return e.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:1}:{reason:T(t)};case"extensions/KHR_materials_anisotropy/anisotropyStrength":return e.extensions?.KHR_materials_anisotropy?{type:"material",property:"anisotropyStrength"}:{reason:T(t)};case"extensions/KHR_materials_anisotropy/anisotropyRotation":return e.extensions?.KHR_materials_anisotropy?{type:"material",property:"anisotropyRotation"}:{reason:T(t)};case"extensions/KHR_materials_emissive_strength/emissiveStrength":return e.extensions?.KHR_materials_emissive_strength?{type:"material",property:"emissiveStrength"}:{reason:T(t)};default:return{reason:T(t)}}}function Zn(e,t){const r=t.lastIndexOf("extensions");if(r<0||t[r+1]!=="KHR_texture_transform"||r<1)return{reason:"not-a-texture-transform-target"};const n=Or(t.slice(0,r));if(!n)return{reason:ro(t.slice(0,r))};const o=eo(e,n.pathSegments);if(!o)return{reason:`texture-transform target "${t.slice(0,r).join("/")}" does not exist on the referenced material`};const a=t[r+2];if(a==="texCoord")return{reason:"animated KHR_texture_transform.texCoord is unsupported because texCoord selection is structural, not a runtime float/vector update"};if(a!=="offset"&&a!=="rotation"&&a!=="scale")return{reason:`KHR_texture_transform property "${a}" is not animatable; supported properties are offset, rotation, and scale`};const i=t[r+3];if(t.length>r+4)return{reason:`KHR_texture_transform.${a} does not support nested property paths`};let s;if(i!==void 0){if(s=Number(i),a==="rotation")return{reason:"KHR_texture_transform.rotation does not support component indices"};if(!Number.isInteger(s)||s<0||s>1)return{reason:`KHR_texture_transform.${a} component index "${i}" is invalid; only 0 and 1 are supported`}}return{type:"textureTransform",textureSlot:n.slot,path:a,component:s,baseTransform:ye(o)}}function eo(e,t){let r=e;for(const n of t)if(r=r?.[n],!r)return null;return r}function to(e){return e.slice(1).split("/").map(t=>t.replace(/~1/g,"/").replace(/~0/g,"~"))}function T(e){const t=yt(e);if(t){const r=Mt(t);if(r?.supportLevel==="none")return`${t} is referenced by this pointer, but ${r.comment.charAt(0).toLowerCase()}${r.comment.slice(1)}`}return`no runtime target exists for material property "${e.join("/")}"`}function ro(e){const t=yt(e);if(t){const r=Mt(t);if(r?.supportLevel==="none")return`${t} is referenced by this pointer, but ${r.comment.charAt(0).toLowerCase()}${r.comment.slice(1)}`}return`texture-transform target "${e.join("/")}" has no runtime texture-slot mapping`}function yt(e){const t=e.indexOf("extensions"),r=e[t+1];return t>=0&&r?r:null}function j(e,t){x.warn(`KHR_animation_pointer target ${e} will be skipped because ${t}`)()}function no(e,t){if(t.has(e))return t.get(e);const{value:r,components:n}=Nt(e);pe(n===1,"accessorToJsArray1D must have exactly 1 component");const o=Array.from(r);return t.set(e,o),o}function oo(e,t){if(t.has(e))return t.get(e);const{value:r,components:n}=Nt(e);pe(n>=1,"accessorToJsArray2D must have at least 1 component");const o=[];for(let a=0;a<r.length;a+=n)o.push(Array.from(r.slice(a,a+n)));return t.set(e,o),o}function Nt(e){if(e.value)return{value:e.value,components:e.components};const t=e.bufferView?.data;pe(t!==void 0),pe(e.componentType===5126);const r=e.type==="SCALAR"?1:Number(e.type.slice(3));return{value:new Float32Array(t.buffer,t.byteOffset+(e.byteOffset||0),e.count*r),components:r}}function pe(e,t){if(!e)throw new Error(t)}var Et=class{variants;names;activeVariant=null;modelNodes;constructor(e,t){const r=e.extensions?.KHR_materials_variants?.variants||[];this.variants=r.map((o,a)=>({name:o.name||`Variant-${a}`,index:a})),this.names=this.variants.map(o=>o.name);const n=new Set;for(const o of t)o.preorderTraversal(a=>{a instanceof $&&a.userData.gltfMaterialVariants&&n.add(a)});this.modelNodes=Array.from(n)}selectVariant(e){const t=this.variants.find(r=>r.name===e);if(!t)throw new Error(`Unknown glTF material variant: ${e}`);for(const r of this.modelNodes){const n=r.userData.gltfMaterialVariants,o=n.mappings.get(t.index);r.model.setMaterial(o?.material||n.defaultMaterial),r.model.setParameters(o?.parameters||n.defaultParameters)}this.activeVariant=e}resetVariant(){for(const e of this.modelNodes){const t=e.userData.gltfMaterialVariants;e.model.setMaterial(t.defaultMaterial),e.model.setParameters(t.defaultParameters)}this.activeVariant=null}};function Lt(e,t,r){r?.strictExtensions&&Tt(t,e);const{scenes:n,materials:o,gltfMeshIdToNodeMap:a,gltfNodeIdToNodeMap:i,gltfNodeIndexToNodeMap:s,generatedTextures:l}=bn(e,t,r),c=xt(t),u=(t.lights||t.extensions?.KHR_lights_punctual?.lights||[]).map(I=>({...I,...Array.isArray(I.color)?{color:[...I.color]}:{},...I.spot?{spot:{...I.spot}}:{}})),h=(t.cameras||[]).map(I=>{const L={...I};return I.perspective&&(L.perspective={...I.perspective}),I.orthographic&&(L.orthographic={...I.orthographic}),L}),f={useByteColors:r?.useByteColors??!0,nodeVisibility:i,lightDefinitions:u},p=Ue(t,f),m=()=>{p.splice(0,p.length,...Ue(t,f))},d=new Pe({onVisibilityChange:m,cameras:h,lightDefinitions:u,onLightChange:m,animations:c,gltfNodeIdToNodeMap:i,materials:o}),g=new Et(t,n),b=Ve(t,e),S=n.map(I=>Ut(I.getBounds())),R=ao(S),_=new Fe({gltf:t,scenes:n,gltfNodeIndexToNodeMap:s});d.setUpdateHandler(()=>_.update());let M=!1;return{scenes:n,materials:o,variants:g,cameras:h,animator:d,animations:c,lights:p,extensionSupport:b,sceneBounds:S,modelBounds:R,gltfMeshIdToNodeMap:a,gltfNodeIdToNodeMap:i,gltfNodeIndexToNodeMap:s,skins:_,gltf:t,destroy:()=>{if(M)return;M=!0;const I=new Set([...n,...a.values(),...i.values()]),L=new Set,N=new Set(o);for(const E of I)E.preorderTraversal(F=>{F instanceof $&&(L.add(F),F.model?.material&&N.add(F.model.material))});for(const E of L)E.destroy();for(const E of I)E.destroy();for(const E of N)E.destroy();for(const E of l)E.destroy();l.clear()}}}function Ut(e){if(!e)return{bounds:null,center:[0,0,0],size:[0,0,0],radius:.5,recommendedOrbitDistance:1};const t=[[e[0][0],e[0][1],e[0][2]],[e[1][0],e[1][1],e[1][2]]],r=[t[1][0]-t[0][0],t[1][1]-t[0][1],t[1][2]-t[0][2]],n=[t[0][0]+r[0]*.5,t[0][1]+r[1]*.5,t[0][2]+r[2]*.5],o=Math.max(r[0],r[1],r[2])*.5,a=Math.max(.5*Math.hypot(r[0],r[1],r[2]),.001);return{bounds:t,center:n,size:r,radius:a,recommendedOrbitDistance:Math.max(Math.max(o,.001)/Math.tan(Math.PI/6)*1.15,a*1.1)}}function ao(e){let t=null;for(const r of e)if(r.bounds){if(!t){t=[[...r.bounds[0]],[...r.bounds[1]]];continue}for(let n=0;n<3;n++)t[0][n]=Math.min(t[0][n],r.bounds[0][n]),t[1][n]=Math.max(t[1][n],r.bounds[1][n])}return Ut(t)}function io(e,t={}){if(t.enabled===!1||!e.animations?.length)return null;const r=t.sampleRate??30,n=t.maxFrames??8192;if(!Number.isFinite(r)||r<=0||!Number.isSafeInteger(n))return null;let o=0;const a=e.animations.map((i,s)=>{let l=0;for(const h of i.samplers||[]){const f=e.accessors[h.input]?.value;for(const p of f||[])l=Math.max(l,Number(p))}const c=Math.max(1,Math.ceil(l*r)+1),u={name:i.name||`Animation-${s}`,duration:l,frameOffset:o,frameCount:c};return o+=c,u});return o<=n?{sampleRate:r,frameCount:o,clips:a}:null}function Pt(e,t,r){const n=Math.min(Math.max(t,0)*r,e.frameCount-1),o=Math.floor(n),a=Math.min(o+1,e.frameCount-1);return[e.frameOffset+o,e.frameOffset+a,n-o]}var so=[.5,.25],Oe=[.5,.2,.01],me="MSFT_lod";function de(e,t){const r=typeof t=="number"?t:e.nodes.findIndex(c=>c===t),n=e.nodes[r];if(!n)return null;const o=n.extensions?.[me];if(!o)return null;O(Array.isArray(o.ids)&&o.ids.length>0);const a=[r,...o.ids],i=new Set;for(const c of a)O(Number.isSafeInteger(c)&&c>=0&&c<e.nodes.length&&!i.has(c)),i.add(c);const s=n.extras?.MSFT_screencoverage,l=wt(a.length,Array.isArray(s)?s:void 0);return a.map((c,u)=>({level:u,nodeIndex:c,node:e.nodes[c],screenCoverage:l[u]}))}function Ft(e,t={}){const r=t.ratios||so;if(r.length===0)return e;let n=1;for(const f of r)O(Number.isFinite(f)&&f>0&&f<n),n=f;const o=new Map(e.nodes.map((f,p)=>[f,p])),a=lo(e,o),i=e.nodes.map(f=>({...f,...f.extensions?{extensions:{...f.extensions}}:{},...f.extras?{extras:{...f.extras}}:{}})),s=[...e.meshes],l=[...e.accessors];for(const[f,p]of e.nodes.entries())p.children&&(i[f].children=p.children.map(m=>i[o.get(m)]));let c=!1;for(const[f,p]of e.nodes.entries()){if(!a.has(f)||!p.mesh||p.extensions?.[me])continue;const m=[];for(const[d,g]of r.entries()){const b=co(p.mesh,l,g,`${f}-${d+1}`,t.preserveBoundary??!1);if(!b)continue;s.push(b);const S=i.length;m.push(S),i.push({...p,id:`${p.id}-lod-${d+1}`,name:`${p.name||p.id} LOD ${d+1}`,mesh:b,children:void 0,extensions:void 0,extras:{geometricError:b.extras?.geometricError}})}if(m.length>0){const d=i[f];d.extensions={...d.extensions,[me]:{ids:m}},d.extras={...d.extras,MSFT_screencoverage:wt(m.length+1,t.screenCoverage)},c=!0}}if(!c)return e;const u=e.scenes.map(f=>({...f,nodes:f.nodes?.map(p=>i[o.get(p)])})),h=e.scene?e.scenes.indexOf(e.scene):-1;return{...e,nodes:i,meshes:s,accessors:l,scenes:u,...h>=0?{scene:u[h]}:{},extensionsUsed:[...new Set([...e.extensionsUsed||[],me])]}}function lo(e,t){const r=new Set,n=e.scenes.flatMap(o=>o.nodes||[]);for(const o of n){const a=t.get(o);a===void 0||r.has(a)||(r.add(a),n.push(...o.children||[]))}return r}function co(e,t,r,n,o){let a=!1,i=0;const s=e.primitives.map((l,c)=>{const u=l.attributes.POSITION;if(!u||l.mode!==void 0&&l.mode!==4)return l;const h=fo(l.indices,u.count);if(!h||h.length<6)return l;const f=[];for(const d of["NORMAL","TEXCOORD_0","TEXCOORD_1","JOINTS_0","WEIGHTS_0"]){const g=l.attributes[d];g&&f.push({values:g.value,size:g.components})}const p=lr({positions:u.value,indices:h,targetRatio:r,attributes:f,preserveBoundary:o});if(p.indices.length>=h.length||p.indices.length<3)return l;a=!0,i=Math.max(i,p.geometricError);const m={...l.indices||{components:1,bytesPerComponent:p.indices.BYTES_PER_ELEMENT,bytesPerElement:p.indices.BYTES_PER_ELEMENT,type:"SCALAR"},id:`${l.indices?.id||e.id}-lod-${n}-${c}`,componentType:uo(p.indices),count:p.indices.length,value:p.indices,byteOffset:0,bufferView:void 0,min:void 0,max:void 0};return t.push(m),{...l,indices:m}});return a?{...e,id:`${e.id}-lod-${n}`,name:`${e.name||e.id} LOD ${n}`,primitives:s,extras:{...e.extras,geometricError:i}}:null}function fo(e,t){if(e){const n=e.value;return n instanceof Uint8Array||n instanceof Uint16Array||n instanceof Uint32Array?n:null}if(t<3)return null;const r=t<=65535?new Uint16Array(t):new Uint32Array(t);for(let n=0;n<t;n++)r[n]=n;return r}function uo(e){return e instanceof Uint8Array?5121:e instanceof Uint16Array?5123:5125}function wt(e,t){return Array.from({length:e},(r,n)=>{const o=t?.[n]??Oe[n]??Oe[Oe.length-1]/2**(n-2);return O(Number.isFinite(o)&&o>0&&o<=1),o})}var De=class{id;root;animator;skins;crowd;nodesByIndex;nodesById;isPlaying;isDestroyed=!1;skinMatricesNeedUpdate=!0;constructor(e,t,r={}){this.crowd=e,this.id=t;const n=mo(e.scenegraphs,t);this.root=n.root,this.nodesByIndex=n.nodesByIndex,this.nodesById=n.nodesById,this.isPlaying=r.playing??!0,this.skins=new Fe({gltf:e.gltf,scenes:n.scenes,gltfNodeIndexToNodeMap:this.nodesByIndex}),this.animator=new Pe({animations:e.scenegraphs.animations.map(a=>({name:a.name,channels:a.channels.filter(i=>i.type==="node")})),gltfNodeIdToNodeMap:this.nodesById,autoplay:"first",onUpdate:()=>{this.skinMatricesNeedUpdate=!0}}),r.transform&&this.root.setMatrix(r.transform);const o=r.clip||this.animator.activeClip;if(o){this.animator.selectClip(o);const a=this.mixer.getAction(o);r.loop&&a?.setLoop(r.loop,r.repetitions),r.time!==void 0||r.phase!==void 0?this.seek(r.time??(r.phase||0)*(a?.clip.duration||0)):e.gpuAnimationEnabled||this.animator.update(0)}this.setSpeed(r.speed??1),this.isPlaying||this.pause()}get mixer(){return this.animator.mixer}get activeClip(){return this.animator.activeClip}get time(){return this.activeClip&&this.mixer.getAction(this.activeClip)?.time||0}get speed(){return this.mixer.timeScale}get playing(){return this.isPlaying}get destroyed(){return this.isDestroyed}getNode(e){return typeof e=="number"?this.nodesByIndex.get(e):this.nodesById.get(e)}setTransform(e){return this.root.setMatrix(e),this.crowd.refresh(),this}selectClip(e,t={}){const r=this.animator.selectClip(e,t);return(t.time!==void 0||t.phase!==void 0)&&this.seek(t.time??(t.phase||0)*r.clip.duration),this.isPlaying||this.pause(),this.crowd.refresh(),this}seek(e){for(const t of this.animator.getAnimations())t.action.playing&&t.action.setTime(e);return this.crowd.gpuAnimationEnabled||this.animator.update(0),this.crowd.refresh(),this}setPhase(e){const t=this.activeClip&&this.mixer.getAction(this.activeClip)?.clip.duration||0;return this.seek(t*e)}setSpeed(e){return this.mixer.timeScale=e,this}setLoop(e,t){return this.activeClip&&this.mixer.getAction(this.activeClip)?.setLoop(e,t),this}play(){this.isPlaying=!0;for(const e of this.animator.getAnimations())e.action.playing&&e.action.resume();return this}pause(){this.isPlaying=!1;for(const e of this.animator.getAnimations())e.action.playing&&e.action.pause();return this}update(e){return this.advance(e),this.crowd.refresh(),this}advance(e){this.isPlaying&&!this.isDestroyed&&(this.crowd.gpuAnimationEnabled?this.mixer.advance(e):this.animator.update(e))}updateSkinMatrices(e){if(this.skinMatricesNeedUpdate){for(const t of this.skins.bindings)rt({joints:t.joints,meshNode:t.node,worldMatrices:e,inverseBindMatrices:t.inverseBindMatrices,target:t.jointMatrices});this.skinMatricesNeedUpdate=!1}}destroy(){this.isDestroyed||(this.isDestroyed=!0,this.isPlaying=!1,this.crowd.removeActor(this.id),this.root.destroy())}},Vt=class{device;gltf;scenegraphs;capacity;primitiveGroups;models;gpuAnimationEnabled;actorsById=new Map;actorLODLevels=new Map;actorLODCoverage=new Map;maximumGroupLevels=new Map;lodOptions;lodSource;lodScreenCoverage;maximumLODLevel;lodVertexCounts;gpuAnimationLayout;gpuAnimationClips;currentLODView=null;currentVertexBudget;isLODEnabled;lodBias=1;currentLODStats;nextActorIndex=0;isDestroyed=!1;suspendedRefreshCount=0;constructor(e,t,r={}){const{capacity:n=16,lod:o,gpuAnimation:a,...i}=r;O(Number.isSafeInteger(n)&&n>0),this.device=e,this.capacity=n,this.lodOptions=o,this.isLODEnabled=o?.enabled??!1,O(o?.vertexBudget===void 0||Number.isSafeInteger(o.vertexBudget)&&o.vertexBudget>=0),this.currentVertexBudget=o?.vertexBudget||void 0;const s=!!(o&&t.nodes.some(d=>{const g=de(t,d);return!!(g&&g.length>1)}));this.gltf=o?.autoGenerate&&!s?Ft(t,{ratios:o.ratios,screenCoverage:o.screenCoverage,preserveBoundary:o.preserveBoundary}):t,this.lodSource=s?"authored":this.gltf!==t?"generated":"none";const l=a?io(this.gltf,a):null,c=Math.max(0,...(this.gltf.skins||[]).map(d=>d.joints.length)),u=Math.max(0,...this.gltf.nodes.flatMap(d=>(d.mesh?.primitives||[]).map(g=>g.targets?.length||0))),h=4+c*4+u;this.gpuAnimationLayout=l&&(e.type==="webgpu"||h<=e.limits.maxTextureDimension2D&&l.frameCount<=e.limits.maxTextureDimension2D)?l:null,this.gpuAnimationEnabled=!!this.gpuAnimationLayout,this.gpuAnimationClips=new Map((this.gpuAnimationLayout?.clips||[]).map(d=>[d.name,d]));const f={capacity:n,jointsPerInstance:c,...this.gpuAnimationLayout?{gpuAnimation:this.gpuAnimationLayout}:{}};this.scenegraphs=Lt(e,this.gltf,{...i,modelOptions:{...i.modelOptions,userData:{...i.modelOptions?.userData,gltfAnimatedCrowd:f}}}),this.primitiveGroups=ho(this.scenegraphs,!!o),this.models=this.primitiveGroups.map(d=>d.model),this.maximumLODLevel=Math.max(0,...this.primitiveGroups.map(d=>d.lodLevel));for(const d of this.primitiveGroups)this.maximumGroupLevels.set(d.nodeIndex,Math.max(this.maximumGroupLevels.get(d.nodeIndex)||0,d.lodLevel));const p=Array.from({length:this.maximumLODLevel+1},()=>0);for(const d of this.primitiveGroups){const g=this.getMaximumGroupLevel(d.nodeIndex);for(let b=0;b<p.length;b++)Math.min(b,g)===d.lodLevel&&(p[b]+=d.vertexCount)}this.lodVertexCounts=p;const m=o?this.getAuthoredScreenCoverage():[0];this.lodScreenCoverage=o?.screenCoverage||m,this.currentLODStats={source:this.lodSource,visibleActors:0,culledActors:0,drawCount:0,triangles:0,vertices:0,...this.currentVertexBudget?{vertexBudget:this.currentVertexBudget}:{},demotedActors:0,budgetSatisfied:!0,levels:[]},this.gpuAnimationLayout&&this.bakeGPUAnimationFrames()}get actors(){return[...this.actorsById.values()]}get actorCount(){return this.actorsById.size}get destroyed(){return this.isDestroyed}get lodEnabled(){return this.isLODEnabled}get lodStats(){return this.currentLODStats}get animationStats(){return{mode:this.gpuAnimationEnabled?"gpu":"cpu",...this.gpuAnimationLayout?{sampleRate:this.gpuAnimationLayout.sampleRate}:{},frameCount:this.gpuAnimationLayout?.frameCount||0,clipCount:this.gpuAnimationLayout?.clips.length||0,morphGroupCount:this.primitiveGroups.filter(e=>e.morphTargetCount>0).length}}setLODEnabled(e){return this.isLODEnabled=e,this.actorLODLevels.clear(),this.actorLODCoverage.clear(),this.refresh(),this}setLODBias(e){return O(Number.isFinite(e)&&e>0),this.lodBias=e,this.refresh(),this}setLODVertexBudget(e){return O(e===void 0||Number.isSafeInteger(e)&&e>=0),this.currentVertexBudget=e||void 0,this.refresh(),this}setLODView(e){return this.currentLODView=e,this.isLODEnabled&&this.refresh(),this}addActor(e={}){O(!this.isDestroyed&&this.actorsById.size<this.capacity);const t=e.id||`gltf-crowd-actor-${this.nextActorIndex++}`;O(!this.actorsById.has(t));let r;this.suspendedRefreshCount++;try{r=new De(this,t,e),this.actorsById.set(t,r)}finally{this.suspendedRefreshCount--}return this.refresh(),r}addActors(e){O(!this.isDestroyed&&this.actorsById.size+e.length<=this.capacity);const t=[];this.suspendedRefreshCount++;try{for(const r of e)t.push(this.addActor(r))}finally{this.suspendedRefreshCount--,this.refresh()}return t}getActor(e){return this.actorsById.get(e)}removeActor(e){const t=this.actorsById.get(e);return t?(this.actorsById.delete(e),this.actorLODLevels.delete(e),this.actorLODCoverage.delete(e),t.destroyed||t.destroy(),this.refresh(),!0):!1}removeActors(e){let t=0;this.suspendedRefreshCount++;try{for(const r of e)this.removeActor(r)&&t++}finally{this.suspendedRefreshCount--,this.refresh()}return t}update(e,t){t&&(this.currentLODView=t);for(const r of this.actorsById.values())r.advance(e);return this.refresh(),this}draw(e){if(this.isDestroyed||this.actorCount===0)return 0;let t=0;for(const r of this.primitiveGroups)r.model.instanceCount>0&&r.model.draw(e)&&t++;return t}refresh(){if(this.isDestroyed||this.suspendedRefreshCount>0||!this.primitiveGroups)return;const e=[...this.actorsById.values()],t=this.gpuAnimationEnabled?[]:e.map(u=>{const h=Ot(u.root);return u.updateSkinMatrices(h),h}),r=e.map(u=>this.selectActorLOD(u)),{levels:n,demotedActors:o}=this.applyVertexBudget(e,r),a=n.filter(u=>u!==null).length,i=new Map;for(const u of n){if(u===null)continue;const h=i.get(u)||{level:u,actors:0,triangles:0};h.actors++,i.set(u,h)}let s=0,l=0,c=0;for(const u of this.primitiveGroups){const h=Be(this.scenegraphs,u.sourceNodeIndex,u.model);if(!h)continue;const f=h.userData.gltfAnimatedCrowd,p=this.getMaximumGroupLevel(u.nodeIndex);let m=0;for(let d=0;d<e.length;d++){const g=n[d];if(g===null||Math.min(g,p)!==u.lodLevel)continue;const b=e[d],S=b.getNode(u.nodeIndex),R=this.gpuAnimationEnabled?b.root.matrix:S&&t[d].get(S);for(let _=0;_<4;_++)for(let M=0;M<4;M++)f.transformColumns[_][m*4+M]=R?.[_*4+M]||0;if(f.animationParameters&&f.animationBlend&&this.writeGPUAnimationParameters(b,f,m),f.morphWeights){const _=f.morphTargetCount,M=Math.ceil(_/4),C=m*M*4;f.morphWeights.fill(0,C,C+M*4);const I=S?.userData.morphWeights;Array.isArray(I)&&f.morphWeights.set(I.slice(0,_),C)}if(f.jointMatrices){const _=b.skins.getBinding(u.nodeIndex)?.jointMatrices,M=m*f.jointsPerInstance*16;f.jointMatrices.fill(0,M,M+f.jointsPerInstance*16),_&&f.jointMatrices.set(_,M)}m++}if(m>0){for(let b=0;b<f.transformBuffers.length;b++)f.transformBuffers[b].write(f.transformColumns[b].subarray(0,m*4));if(f.animationParameterBuffer&&f.animationParameters&&f.animationParameterBuffer.write(f.animationParameters.subarray(0,m*4)),f.animationBlendBuffer&&f.animationBlend&&f.animationBlendBuffer.write(f.animationBlend.subarray(0,m*4)),f.morphWeights&&f.morphWeightData){const b=Math.ceil(f.morphTargetCount/4),S=f.morphWeights.subarray(0,m*b*4);f.morphWeightData instanceof V?f.morphWeightData.write(S):f.morphWeightData.writeData(S,{width:b,height:m})}if(f.jointMatrices&&f.skinJointMatrices){const b=f.jointMatrices.subarray(0,m*f.jointsPerInstance*16);f.skinJointMatrices instanceof V?f.skinJointMatrices.write(b):f.skinJointMatrices.writeData(b,{width:f.jointsPerInstance*4,height:m})}const d=m*u.triangleCount,g=i.get(u.lodLevel)||{level:u.lodLevel,actors:0,triangles:0};g.triangles+=d,i.set(u.lodLevel,g),l+=d,c+=m*u.vertexCount,s++}u.model.setInstanceCount(m)}this.currentLODStats={source:this.lodSource,visibleActors:a,culledActors:e.length-a,drawCount:s,triangles:l,vertices:c,...this.currentVertexBudget?{vertexBudget:this.currentVertexBudget}:{},demotedActors:o,budgetSatisfied:!this.isLODEnabled||!this.currentVertexBudget||c<=this.currentVertexBudget,levels:[...i.values()].sort((u,h)=>u.level-h.level)}}bakeGPUAnimationFrames(){const e=this.gpuAnimationLayout;if(!e)return;this.suspendedRefreshCount++;const t=new De(this,"__gltf-gpu-animation-baker__",{playing:!1});try{for(const r of e.clips){const n=t.animator.selectClip(r.name);n.action.setLoop("once",1);for(let o=0;o<r.frameCount;o++){const a=Math.min(o/e.sampleRate,r.duration);n.action.setTime(a),t.animator.update(0);const i=Ot(t.root);t.updateSkinMatrices(i);for(const s of this.primitiveGroups){const l=Be(this.scenegraphs,s.sourceNodeIndex,s.model);if(!l)continue;const c=l.userData.gltfAnimatedCrowd,u=c.animationFrameValues,h=c.animationFrameStride;if(!u||!h)continue;const f=(r.frameOffset+o)*h*4,p=t.getNode(s.nodeIndex),m=p&&i.get(p);m&&u.set(m,f);const d=t.skins.getBinding(s.nodeIndex)?.jointMatrices;d&&u.set(d,f+16);const g=p?.userData.morphWeights;if(Array.isArray(g))for(let b=0;b<c.morphTargetCount;b++){const S=f+(4+c.animationJointCount*4+b)*4;u[S]=Number(g[b]||0)}}}}}finally{t.destroy(),this.suspendedRefreshCount--}for(const r of this.primitiveGroups){const n=Be(this.scenegraphs,r.sourceNodeIndex,r.model);if(!n)continue;const o=n.userData.gltfAnimatedCrowd;!o.animationFrames||!o.animationFrameValues||(o.animationFrames instanceof V?o.animationFrames.write(o.animationFrameValues):o.animationFrames.writeData(o.animationFrameValues,{width:o.animationFrameStride,height:e.frameCount}))}}writeGPUAnimationParameters(e,t,r){const n=this.gpuAnimationLayout;if(!n||!t.animationParameters||!t.animationBlend)return;const o=e.animator.getAnimations().filter(u=>u.action.shouldApply&&u.action.weight>0),a=o.find(u=>u.name===e.activeClip)||o[0],i=Pt(a&&this.gpuAnimationClips.get(a.name)||n.clips[0],a?.action.time||0,n.sampleRate),s=r*4;t.animationParameters.set([...i,a?.action.weight||1],s);const l=o.find(u=>u!==a),c=l&&this.gpuAnimationClips.get(l.name);if(l&&c){const u=Pt(c,l.action.time,n.sampleRate),h=(a?.action.weight||0)+l.action.weight;t.animationBlend.set([...u,h>0?l.action.weight/h:0],s)}else t.animationBlend.fill(0,s,s+4)}getAuthoredScreenCoverage(){for(let e=0;e<this.gltf.nodes.length;e++){const t=de(this.gltf,e);if(t&&t.length>1)return t.map(r=>r.screenCoverage)}return[0]}getMaximumGroupLevel(e){return this.maximumGroupLevels.get(e)||0}applyVertexBudget(e,t){const r=[...t];if(!this.isLODEnabled||!this.currentVertexBudget||this.maximumLODLevel===0)return{levels:r,demotedActors:0};let n=r.reduce((i,s)=>i+(s===null?0:this.lodVertexCounts[s]),0);if(n<=this.currentVertexBudget)return{levels:r,demotedActors:0};const o=e.map((i,s)=>({actor:i,actorIndex:s})).filter(({actorIndex:i})=>r[i]!==null).sort((i,s)=>(this.actorLODCoverage.get(i.actor.id)??Number.POSITIVE_INFINITY)-(this.actorLODCoverage.get(s.actor.id)??Number.POSITIVE_INFINITY)||i.actorIndex-s.actorIndex);let a=0;for(const{actorIndex:i}of o){if(n<=this.currentVertexBudget)break;let s=r[i],l=!1;for(;n>this.currentVertexBudget&&s<this.maximumLODLevel;){const c=s+1,u=this.lodVertexCounts[s]-this.lodVertexCounts[c];if(u<0)break;r[i]=c,n-=u,s=c,l=!0}l&&a++}return{levels:r,demotedActors:a}}selectActorLOD(e){if(!this.isLODEnabled||!this.currentLODView||this.maximumLODLevel===0)return this.actorLODLevels.set(e.id,0),this.actorLODCoverage.set(e.id,Number.POSITIVE_INFINITY),0;const{viewMatrix:t,projectionMatrix:r,viewportWidth:n,viewportHeight:o}=this.currentLODView,{center:a,radius:i}=this.scenegraphs.modelBounds,s=e.root.matrix,l=s[0]*a[0]+s[4]*a[1]+s[8]*a[2]+s[12],c=s[1]*a[0]+s[5]*a[1]+s[9]*a[2]+s[13],u=s[2]*a[0]+s[6]*a[1]+s[10]*a[2]+s[14],h=t[0]*l+t[4]*c+t[8]*u+t[12],f=t[1]*l+t[5]*c+t[9]*u+t[13],p=t[2]*l+t[6]*c+t[10]*u+t[14],m=i*Math.max(Math.hypot(s[0],s[1],s[2]),Math.hypot(s[4],s[5],s[6]),Math.hypot(s[8],s[9],s[10])),d=r[0]*h+r[4]*f+r[8]*p+r[12],g=r[1]*h+r[5]*f+r[9]*p+r[13],b=r[3]*h+r[7]*f+r[11]*p+r[15];if(b<=0)return this.actorLODLevels.delete(e.id),this.actorLODCoverage.delete(e.id),null;const S=m*Math.abs(r[0])/b,R=m*Math.abs(r[5])/b;if(Math.abs(d/b)>1+S||Math.abs(g/b)>1+R)return this.actorLODLevels.delete(e.id),this.actorLODCoverage.delete(e.id),null;const _=R*(n&&o?o/Math.min(n,o):1)*this.lodBias;this.actorLODCoverage.set(e.id,_);const M=this.lodScreenCoverage.findIndex(N=>_>=N),C=M===-1?null:Math.min(M,this.maximumLODLevel),I=this.actorLODLevels.get(e.id),L=Math.max(0,Math.min(this.lodOptions?.hysteresis??.1,.99));if(I!==void 0&&C!==I){const N=this.lodScreenCoverage[C===null||C>I?I:C];if(!(C===null||C>I?_<N*(1-L):_>=N*(1+L)))return I}return C===null?(this.actorLODLevels.delete(e.id),this.actorLODCoverage.delete(e.id)):this.actorLODLevels.set(e.id,C),C}destroy(){if(!this.isDestroyed){this.isDestroyed=!0;for(const e of[...this.actorsById.values()])e.destroy();this.actorsById.clear(),this.scenegraphs.destroy()}}};function po(e,t,r={}){return new Vt(e,t,r)}function mo(e,t){const{gltf:r,gltfNodeIndexToNodeMap:n}=e,o=new Map,a=new Map;for(let s=0;s<r.nodes.length;s++){const l=r.nodes[s],c=n.get(s);if(!c)continue;const u=new P({id:c.id,position:Array.from(c.position),rotation:Array.from(c.rotation),scale:Array.from(c.scale),matrix:Array.from(c.matrix),display:c.display}),h=c.userData.morphWeights;Array.isArray(h)&&(u.userData.morphWeights=[...h]),o.set(s,u),a.set(l.id,u)}for(let s=0;s<r.nodes.length;s++){const l=r.nodes[s],c=o.get(s);if(c){for(const u of l.children||[]){const h=a.get(u.id);h&&c.add(h)}if(l.mesh){const u=new P({id:l.mesh.name||l.mesh.id});c.userData.gltfMesh=u,c.add(u)}}}const i=r.scenes.map((s,l)=>new P({id:`${t}-scene-${l}`,children:(s.nodes||[]).flatMap(c=>{const u=a.get(c.id);return u?[u]:[]})}));return{root:new P({id:`${t}-root`,children:[...i]}),scenes:i,nodesByIndex:o,nodesById:a}}function ho(e,t){const r=[],n=new Set;for(const o of e.scenes)o.preorderTraversal(a=>{a instanceof P&&n.add(a)});for(const[o,a]of e.gltf.nodes.entries()){if(!a.mesh)continue;const i=e.gltfNodeIndexToNodeMap.get(o);if(!i||!n.has(i))continue;const s=e.skins.getBinding(o),l=(t?de(e.gltf,o):null)||[{level:0,nodeIndex:o,node:a,screenCoverage:0}];for(const c of l){const u=e.gltfNodeIndexToNodeMap.get(c.nodeIndex)?.userData.gltfMesh;if(u instanceof P)for(const[h,f]of u.children.entries()){if(!(f instanceof $))continue;const p=f.userData.gltfAnimatedCrowd;if(!p)continue;const m=c.node.mesh?.primitives[h],d=m?.indices?.count||m?.indices?.value?.length||f.model.vertexCount;r.push({nodeIndex:o,sourceNodeIndex:c.nodeIndex,lodLevel:c.level,triangleCount:Math.floor(d/3),vertexCount:d,model:f.model,transformBuffers:p.transformBuffers,jointCount:s?.joints.length||0,morphTargetCount:p.morphTargetCount,...p.jointMatrices?{jointMatrices:p.jointMatrices}:{},...p.skinJointMatrices?{skinJointMatrices:p.skinJointMatrices}:{},...p.morphTargetData?{morphTargetData:p.morphTargetData}:{},...p.morphWeights?{morphWeights:p.morphWeights}:{},...p.animationFrames?{animationFrames:p.animationFrames}:{},...p.animationParameters?{animationParameters:p.animationParameters}:{}})}}}return r}function Be(e,t,r){const n=e.gltfNodeIndexToNodeMap.get(t)?.userData.gltfMesh;if(n instanceof P)return n.children.find(o=>o instanceof $&&o.model===r)}function Ot(e){const t=new Map;return e.preorderTraversal((r,{worldMatrix:n})=>{r instanceof P&&t.set(r,n)}),t}var go="4.4.5";async function bo(e,t,r,n){return n._parse(e,t,r,n)}function te(e,t){if(!e)throw new Error(t||"loader assertion failed.")}var G={self:typeof self<"u"&&self,window:typeof window<"u"&&window,global:typeof global<"u"&&global,document:typeof document<"u"&&document};G.self||G.window||G.global,G.window||G.self||G.global,G.global||G.self||G.window,G.document;var vo=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),Dt=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Dt&&parseFloat(Dt[1]);function So(e,t){return te(e>=0),te(t>0),e+(t-1)&~(t-1)}function Bt(e,t,r,n){const o=So(r.byteLength,n),a=o-r.byteLength;if(e){const i=new Uint8Array(e.buffer,e.byteOffset+t,r.byteLength),s=new Uint8Array(r);i.set(s);for(let l=0;l<a;++l)e.setUint8(t+r.byteLength+l,32)}return t+=o,t}function _o(e,t,r,n){const o=new TextEncoder().encode(r);return t=Bt(e,t,o,n),t}var Io="",Ht={};function kt(e){for(const t in Ht)if(e.startsWith(t)){const r=Ht[t];e=e.replace(t,r)}return!e.startsWith("http://")&&!e.startsWith("https://")&&(e=`${Io}${e}`),e}function Ro(){if(typeof process<"u"&&typeof process.cwd<"u")return process.cwd();const e=window.location?.pathname;return e?.slice(0,e.lastIndexOf("/")+1)||""}function To(e){const t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(t+1):e}function Gt(e){const t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(0,t):""}function Mo(...e){const t=[];for(let a=0;a<e.length;a++)t[a]=e[a];let r="",n=!1,o;for(let a=t.length-1;a>=-1&&!n;a--){let i;a>=0?i=t[a]:(o===void 0&&(o=Ro()),i=o),i.length!==0&&(r=`${i}/${r}`,n=i.charCodeAt(0)===re)}return r=Co(r,!n),n?`/${r}`:r.length>0?r:"."}var re=47,He=46;function Co(e,t){let r="",n=-1,o=0,a,i=!1;for(let s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(a===re)break;a=re}if(a===re){if(!(n===s-1||o===1))if(n!==s-1&&o===2){if(r.length<2||!i||r.charCodeAt(r.length-1)!==He||r.charCodeAt(r.length-2)!==He){if(r.length>2){const l=r.length-1;let c=l;for(;c>=0&&r.charCodeAt(c)!==re;--c);if(c!==l){r=c===-1?"":r.slice(0,c),n=s,o=0,i=!1;continue}}else if(r.length===2||r.length===1){r="",n=s,o=0,i=!1;continue}}t&&(r.length>0?r+="/..":r="..",i=!0)}else{const l=e.slice(n+1,s);r.length>0?r+=`/${l}`:r=l,i=!1}n=s,o=0}else a===He&&o!==-1?++o:o=-1}return r}var xo=globalThis.loaders?.parseImageNode,ke=typeof Image<"u",Ge=typeof ImageBitmap<"u",ze=vo?!0:!!xo;function Ao(e){switch(e){case"auto":return Ge||ke||ze;case"imagebitmap":return Ge;case"image":return ke;case"data":return ze;default:throw new Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}function yo(){if(Ge)return"imagebitmap";if(ke)return"image";if(ze)return"data";throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js")}function No(e){const t=Lo(e);if(!t)throw new Error("Not an image");return t}function Eo(e){return zt(e)}function zt(e){switch(No(e)){case"data":return e;case"image":case"imagebitmap":const t=document.createElement("canvas"),r=t.getContext("2d");if(!r)throw new Error("getImageData");return t.width=e.width,t.height=e.height,r.drawImage(e,0,0),r.getImageData(0,0,e.width,e.height);default:throw new Error("getImageData")}}function Lo(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap?"imagebitmap":typeof Image<"u"&&e instanceof Image?"image":e&&typeof e=="object"&&e.data&&e.width&&e.height?"data":null}var Uo=/^data:image\/svg\+xml/,Po=/\.svg((\?|#).*)?$/;function Ke(e){return e&&(Uo.test(e)||Po.test(e))}function Fo(e,t){if(Ke(t)){let r=new TextDecoder().decode(e);try{typeof unescape=="function"&&typeof encodeURIComponent=="function"&&(r=unescape(encodeURIComponent(r)))}catch(n){throw new Error(n.message)}return`data:image/svg+xml;base64,${btoa(r)}`}return Kt(e,t)}function Kt(e,t){if(Ke(t))throw new Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(e)])}async function jt(e,t,r){const n=Fo(e,r),o=self.URL||self.webkitURL,a=typeof n!="string"&&o.createObjectURL(n);try{return await wo(a||n,t)}finally{a&&o.revokeObjectURL(a)}}async function wo(e,t){const r=new Image;return r.src=e,t.image&&t.image.decode&&r.decode?(await r.decode(),r):await new Promise((n,o)=>{try{r.onload=()=>n(r),r.onerror=a=>{const i=a instanceof Error?a.message:"error";o(new Error(i))}}catch(a){o(a)}})}var Wt=!0;async function Vo(e,t,r){let n;Ke(r)?n=await jt(e,t,r):n=Kt(e,r);const o=t&&t.imagebitmap;return await Oo(n,o)}async function Oo(e,t=null){if((Do(t)||!Wt)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(r){console.warn(r),Wt=!1}return await createImageBitmap(e)}function Do(e){if(!e)return!0;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Bo(e){return!zo(e,"ftyp",4)||(e[8]&96)===0?null:Ho(e)}function Ho(e){switch(ko(e,8,12).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}function ko(e,t,r){return String.fromCharCode(...e.slice(t,r))}function Go(e){return[...e].map(t=>t.charCodeAt(0))}function zo(e,t,r=0){const n=Go(t);for(let o=0;o<n.length;++o)if(n[o]!==e[o+r])return!1;return!0}var z=!1,ne=!0;function $t(e){const t=oe(e);return jo(t)||Xo(t)||Wo(t)||$o(t)||Ko(t)}function Ko(e){const t=Bo(new Uint8Array(e instanceof DataView?e.buffer:e));return t?{mimeType:t.mimeType,width:0,height:0}:null}function jo(e){const t=oe(e);return t.byteLength>=24&&t.getUint32(0,z)===2303741511?{mimeType:"image/png",width:t.getUint32(16,z),height:t.getUint32(20,z)}:null}function Wo(e){const t=oe(e);return t.byteLength>=10&&t.getUint32(0,z)===1195984440?{mimeType:"image/gif",width:t.getUint16(6,ne),height:t.getUint16(8,ne)}:null}function $o(e){const t=oe(e);return t.byteLength>=14&&t.getUint16(0,z)===16973&&t.getUint32(2,ne)===t.byteLength?{mimeType:"image/bmp",width:t.getUint32(18,ne),height:t.getUint32(22,ne)}:null}function Xo(e){const t=oe(e);if(!(t.byteLength>=3&&t.getUint16(0,z)===65496&&t.getUint8(2)===255))return null;const{tableMarkers:r,sofMarkers:n}=qo();let o=2;for(;o+9<t.byteLength;){const a=t.getUint16(o,z);if(n.has(a))return{mimeType:"image/jpeg",height:t.getUint16(o+5,z),width:t.getUint16(o+7,z)};if(!r.has(a))return null;o+=2,o+=t.getUint16(o,z)}return null}function qo(){const e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function oe(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw new Error("toDataView")}async function Jo(e,t){const{mimeType:r}=$t(e)||{},n=globalThis.loaders?.parseImageNode;return te(n),await n(e,r)}async function Yo(e,t,r){t=t||{};const n=(t.image||{}).type||"auto",{url:o}=r||{},a=Qo(n);let i;switch(a){case"imagebitmap":i=await Vo(e,t,o);break;case"image":i=await jt(e,t,o);break;case"data":i=await Jo(e,t);break;default:te(!1)}return n==="data"&&(i=zt(i)),i}function Qo(e){switch(e){case"auto":case"data":return yo();default:return Ao(e),e}}var Xt={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:go,mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],extensions:["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],parse:Yo,tests:[e=>!!$t(new DataView(e))],options:{image:{type:"auto",decode:!0}}},Zo="4.4.5",ea=e=>e&&typeof e=="object";async function ta(e,t,r={}){return await je(e,t,r)}async function je(e,t,r){return Array.isArray(e)?await na(e,t,r):ea(e)?await ra(e,t,r):await t(e,r)}async function ra(e,t,r){const n=[],o={};for(const a in e){const i=e[a],s=je(i,t,r).then(l=>{o[a]=l});n.push(s)}return await Promise.all(n),o}async function na(e,t,r={}){const n=e.map(o=>je(o,t,r));return await Promise.all(n)}async function oa(e,t={},r){const n=We(t);return await ta(e,async o=>await qt(o,n,r))}async function qt(e,t={},r){const n=aa(e,t,r),o=await fa(t,r)(n),a=ua(t);if(r){const s=pa(n,o,r);return await bo(o,[Xt],a,s)}const i=await o.arrayBuffer();return await Xt.parse(i,a)}function We(e={}){if(e.core?.baseUrl)return e;const t=e.baseUrl;return t?{...e,core:{...e.core,baseUrl:t}}:e}function aa(e,t={},r){const n=kt(e);if(ma(e))return n;const o=ia(t,r);if(!o){if(n!==e||e.startsWith("@"))return n;throw new Error(`Unable to resolve relative image URL ${e} without a base URL`)}return kt(la(o,e))}function ia(e,t){return t?.baseUrl?t.baseUrl:e.baseUrl?$e(e.baseUrl):e.core?.baseUrl?sa(e.core.baseUrl):null}function $e(e){return e.endsWith("/")?e.slice(0,-1):e}function sa(e){return $e(Gt(e))}function la(e,t){if(ca(e))return new URL(t,`${$e(e)}/`).toString();const r=Mo(e.startsWith("/")?e:`/${e}`,t);return e.startsWith("/")?r:r.slice(1)}function ca(e){return e.startsWith("http:")||e.startsWith("https:")||e.startsWith("file:")||e.startsWith("blob:")}function fa(e,t){const r=e.fetch??e.core?.fetch;return t?.fetch?t.fetch:typeof r=="function"?r:r&&typeof r=="object"?n=>fetch(n,r):fetch}function ua(e){const t=e.core,r={...e};if(delete r.baseUrl,!t?.baseUrl)return r;const n={...t};return delete n.baseUrl,{...r,core:n}}function pa(e,t,r){const n=t.url||e,[o,a=""]=n.split("?");return{...r,url:n,response:t,filename:To(o),baseUrl:Gt(o),queryString:a}}function ma(e){return e.startsWith("data:")||e.startsWith("blob:")||e.startsWith("file:")||e.startsWith("http:")||e.startsWith("https:")||e.startsWith("/")}function Xe(e,t,r){return typeof e=="function"?e({...t,...r}):e}async function qe(e,t={}){return await oa(await da(e,t),We(t))}async function da(e,t,r={}){const n=t&&t.image&&t.image.mipLevels||0;return n!==0?await ha(e,n,t,r):Xe(e,t,r)}async function ha(e,t,r,n){const o=[],a=We(r);if(t==="auto"){const i=Xe(e,r,{...n,lod:0}),{width:s,height:l}=Eo(await qt(i,a));t=ga({width:s,height:l}),o.push(i)}te(t>0);for(let i=o.length;i<t;++i){const s=Xe(e,r,{...n,lod:i});o.push(s)}return o}function ga(e){return 1+Math.floor(Math.log2(Math.max(e.width,e.height)))}var ba=1179937895,va=1313821514,Sa=5130562,K=!0;function Jt(e,t,r=0,n={}){const{magic:o=ba,version:a=2,json:i={},binary:s}=e,l=r;t&&(t.setUint32(r+0,o,K),t.setUint32(r+4,a,K),t.setUint32(r+8,0,K));const c=r+8;r+=12;const u=r;t&&(t.setUint32(r+0,0,K),t.setUint32(r+4,va,K)),r+=8;const h=JSON.stringify(i);if(r=_o(t,r,h,4),t){const f=r-u-8;t.setUint32(u+0,f,K)}if(s){const f=r;if(t&&(t.setUint32(r+0,0,K),t.setUint32(r+4,Sa,K)),r+=8,r=Bt(t,r,s,4),t){const p=r-f-8;t.setUint32(f+0,p,K)}}if(t){const f=r-l;t.setUint32(c,f,K)}return r}var _a={name:"GLB",id:"glb",module:"gltf",version:Zo,extensions:["glb"],mimeTypes:["model/gltf-binary"],binary:!0,options:{glb:{}},encode:async(e,t={})=>Yt(e,t),encodeSync:Yt};function Yt(e,t){const{byteOffset:r=0}=t??{},n=Jt(e,null,r,t),o=new ArrayBuffer(n);return Jt(e,new DataView(o),r,t),o}var Qt=34962,Ia=34963;function Ra(e,t={}){return new Ta(e,t).write()}var Ta=class{scene;options;binary=new Ma;bufferViews=[];accessors=[];constructor(e,t){this.scene=e,this.options=t}write(){const e={asset:{version:"2.0",generator:this.scene.generator||"@luma.gl/gltf"},scene:this.scene.scene??0};this.scene.nodes?.length&&(e.nodes=this.scene.nodes.map(n=>this.writeNode(n))),e.scenes=this.scene.scenes?.length?this.scene.scenes.map(n=>({...n,nodes:[...n.nodes]})):[{...this.scene.name?{name:this.scene.name}:{},nodes:this.collectRootNodes()}],this.scene.meshes?.length&&(e.meshes=this.scene.meshes.map(n=>this.writeMesh(n))),this.scene.materials?.length&&(e.materials=this.scene.materials.map(n=>({...n}))),this.scene.textures?.length&&(e.textures=this.scene.textures.map(n=>({...n}))),this.scene.images?.length&&(e.images=this.scene.images.map(n=>this.writeImage(n))),this.scene.samplers?.length&&(e.samplers=this.scene.samplers.map(n=>({...n}))),this.scene.cameras?.length&&(e.cameras=this.scene.cameras.map(n=>({...n}))),this.scene.skins?.length&&(e.skins=this.scene.skins.map(n=>this.writeSkin(n))),this.scene.animations?.length&&(e.animations=this.scene.animations.map(n=>this.writeAnimation(n))),this.scene.extensions&&(e.extensions={...this.scene.extensions}),this.scene.extras!==void 0&&(e.extras=this.scene.extras),this.bufferViews.length&&(e.bufferViews=this.bufferViews),this.accessors.length&&(e.accessors=this.accessors);const t=this.binary.finish();t.byteLength>0&&(e.buffers=[{byteLength:t.byteLength,...this.options.binary?{}:{uri:`data:application/octet-stream;base64,${nr(t)}`}}]);const r=new Set(this.scene.extensionsUsed||[]);return rr(e,r),r.size>0&&(e.extensionsUsed=[...r]),this.scene.extensionsRequired?.length&&(e.extensionsRequired=[...this.scene.extensionsRequired]),this.options.binary?_a.encodeSync({json:e,...t.byteLength>0?{binary:t}:{}},{}):JSON.stringify(e,null,this.options.pretty===!1?void 0:2)}collectRootNodes(){const e=new Set;for(const t of this.scene.nodes||[])for(const r of t.children||[])e.add(r);return(this.scene.nodes||[]).flatMap((t,r)=>e.has(r)?[]:[r])}writeNode(e){const{instances:t,...r}=e,n={...r};if(e.children&&(n.children=[...e.children]),e.weights&&(n.weights=[...e.weights]),t&&Object.keys(t).length>0){const o={};for(const[a,i]of Object.entries(t))o[a]=this.writeAccessor(i);n.extensions={...e.extensions,EXT_mesh_gpu_instancing:{attributes:o}}}return n}writeMesh(e){return{...e.name?{name:e.name}:{},primitives:e.primitives.map(t=>this.writePrimitive(t)),...e.weights?{weights:[...e.weights]}:{},...e.extensions?{extensions:{...e.extensions}}:{},...e.extras!==void 0?{extras:e.extras}:{}}}writePrimitive(e){const t={};for(const[n,o]of Object.entries(e.attributes))t[n]=this.writeAccessor(o,{target:Qt,includeBounds:n==="POSITION"});const r={attributes:t};return e.indices&&(r.indices=this.writeAccessor(e.indices,{target:Ia})),e.material!==void 0&&(r.material=e.material),e.mode!==void 0&&(r.mode=e.mode),e.targets?.length&&(r.targets=e.targets.map(n=>Object.fromEntries(Object.entries(n).map(([o,a])=>[o,this.writeAccessor(a,{target:Qt,includeBounds:o==="POSITION"})])))),e.extensions&&(r.extensions={...e.extensions}),e.extras!==void 0&&(r.extras=e.extras),r}writeSkin(e){const{inverseBindMatrices:t,joints:r,...n}=e;return{...n,joints:[...r],...t?{inverseBindMatrices:this.writeAccessor(t)}:{}}}writeAnimation(e){return{...e.name?{name:e.name}:{},samplers:e.samplers.map(t=>({input:this.writeAccessor(t.input,{includeBounds:!0}),output:this.writeAccessor(t.output),...t.interpolation?{interpolation:t.interpolation}:{}})),channels:e.channels.map(t=>({sampler:t.sampler,target:t.target.path==="pointer"?{path:"pointer",extensions:{KHR_animation_pointer:{pointer:t.target.pointer}}}:{...t.target}})),...e.extensions?{extensions:{...e.extensions}}:{},...e.extras!==void 0?{extras:e.extras}:{}}}writeImage(e){const{data:t,...r}=e;if(!t)return{...r};const n=e.mimeType||"image/png";if(!this.options.binary)return{...r,uri:`data:${n};base64,${nr(t)}`};const o=this.writeBufferView(t);return{...r,bufferView:o,mimeType:n}}writeAccessor(e,t={}){const r=Zt(e.data),n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength),o={bufferView:this.writeBufferView(n,t.target),componentType:er(r),count:r.length/e.size,type:Ca(e.size),...e.normalized?{normalized:!0}:{}};if(e.min?o.min=[...e.min]:t.includeBounds&&(o.min=tr(r,e.size,Math.min)),e.max?o.max=[...e.max]:t.includeBounds&&(o.max=tr(r,e.size,Math.max)),e.sparse){const a=e.sparse.indices,i=Zt(e.sparse.values);o.sparse={count:a.length,indices:{bufferView:this.writeBufferView(new Uint8Array(a.buffer,a.byteOffset,a.byteLength)),componentType:er(a)},values:{bufferView:this.writeBufferView(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}}}return this.accessors.push(o),this.accessors.length-1}writeBufferView(e,t){const r=this.binary.append(e);return this.bufferViews.push({buffer:0,byteOffset:r,byteLength:e.byteLength,...t?{target:t}:{}}),this.bufferViews.length-1}},Ma=class{chunks=[];byteLength=0;append(e){const t=(4-this.byteLength%4)%4;t>0&&(this.chunks.push(new Uint8Array(t)),this.byteLength+=t);const r=this.byteLength;return this.chunks.push(e),this.byteLength+=e.byteLength,r}finish(){const e=(4-this.byteLength%4)%4,t=new Uint8Array(this.byteLength+e);let r=0;for(const n of this.chunks)t.set(n,r),r+=n.byteLength;return t}};function Zt(e){return Array.isArray(e)?new Float32Array(e):e}function er(e){return e instanceof Int8Array?5120:e instanceof Uint8Array?5121:e instanceof Int16Array?5122:e instanceof Uint16Array?5123:e instanceof Uint32Array?5125:5126}function Ca(e){return e===1?"SCALAR":e===9?"MAT3":e===16?"MAT4":`VEC${e}`}function tr(e,t,r){const n=Array.from(e.subarray(0,t));for(let o=t;o<e.length;o+=t)for(let a=0;a<t;a++)n[a]=r(n[a],e[o+a]);return n}function rr(e,t){if(!(!e||typeof e!="object"))for(const[r,n]of Object.entries(e)){if(r==="extensions"&&n&&typeof n=="object")for(const o of Object.keys(n))t.add(o);rr(n,t)}}function nr(e){let t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}function xa(e,t){const r=t.specularMipLevels??1;return{brdfLutTexture:new Re(e,{id:"brdfLUT",sampler:{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",minFilter:"linear",magFilter:"linear"},data:qe(Je(t.brdfLutUrl))}),diffuseEnvSampler:or(e,{id:"DiffuseEnvSampler",getTextureForFace:n=>qe(Je(t.getTexUrl("diffuse",he.indexOf(n),0))),sampler:{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",minFilter:"linear",magFilter:"linear"}}),specularEnvSampler:or(e,{id:"SpecularEnvSampler",getTextureForFace:n=>{const o=[],a=he.indexOf(n);for(let i=0;i<r;i++)o.push(qe(Je(t.getTexUrl("specular",a,i))));return Promise.all(o)},sampler:{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",minFilter:"linear",magFilter:"linear"}})}}var he=["+X","-X","+Y","-Y","+Z","-Z"];function Je(e){const t=globalThis.document?.baseURI??globalThis.location?.href;return t?new URL(e,t).toString():e}function or(e,{id:t,getTextureForFace:r,sampler:n}){const o=Promise.all(he.map(a=>r(a))).then(a=>{const i={};return he.forEach((s,l)=>{i[s]=a[l]}),i});return new Re(e,{id:t,dimension:"cube",mipmaps:!1,sampler:n,data:o})}export{Ce as A,ct as C,lt as D,Ae as E,le as M,Ne as O,pt as S,ce as T,_t as _,po as a,Ue as b,Lt as c,Tt as d,Ve as f,Fe as g,Rt as h,De as i,st as j,ye as k,Et as l,It as m,Ra as n,Ft as o,Hn as p,Vt as r,de as s,xa as t,xt as u,St as v,Br as w,dt as x,Pe as y};
