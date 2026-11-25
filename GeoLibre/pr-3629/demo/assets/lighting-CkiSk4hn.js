import{I as P}from"./get-attribute-from-layouts-Bj7i7MoM.js";import{_t as T,dn as y,vt as U}from"./dist-BDsRXmU8.js";function D(){const t=new y(9);return y!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function G(t,i){if(t===i){const n=i[1],c=i[2],o=i[5];t[1]=i[3],t[2]=i[6],t[3]=n,t[5]=i[7],t[6]=c,t[7]=o}else t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8];return t}function z(t,i){const n=i[0],c=i[1],o=i[2],s=i[3],e=i[4],r=i[5],h=i[6],l=i[7],g=i[8],d=g*e-r*l,a=-g*s+r*h,L=l*s-e*h;let f=n*d+c*a+o*L;return f?(f=1/f,t[0]=d*f,t[1]=(-g*c+o*l)*f,t[2]=(r*c-o*e)*f,t[3]=a*f,t[4]=(g*n-o*h)*f,t[5]=(-r*n+o*s)*f,t[6]=L*f,t[7]=(-l*n+c*h)*f,t[8]=(e*n-c*s)*f,t):null}function R(t){const i=t[0],n=t[1],c=t[2],o=t[3],s=t[4],e=t[5],r=t[6],h=t[7],l=t[8];return i*(l*s-e*h)+n*(-l*o+e*r)+c*(h*o-s*r)}function I(t,i,n){const c=i[0],o=i[1],s=i[2],e=i[3],r=i[4],h=i[5],l=i[6],g=i[7],d=i[8],a=n[0],L=n[1],f=n[2],u=n[3],m=n[4],v=n[5],A=n[6],b=n[7],_=n[8];return t[0]=a*c+L*e+f*l,t[1]=a*o+L*r+f*g,t[2]=a*s+L*h+f*d,t[3]=u*c+m*e+v*l,t[4]=u*o+m*r+v*g,t[5]=u*s+m*h+v*d,t[6]=A*c+b*e+_*l,t[7]=A*o+b*r+_*g,t[8]=A*s+b*h+_*d,t}function M(t,i,n){const c=i[0],o=i[1],s=i[2],e=i[3],r=i[4],h=i[5],l=i[6],g=i[7],d=i[8],a=n[0],L=n[1];return t[0]=c,t[1]=o,t[2]=s,t[3]=e,t[4]=r,t[5]=h,t[6]=a*c+L*e+l,t[7]=a*o+L*r+g,t[8]=a*s+L*h+d,t}function H(t,i,n){const c=i[0],o=i[1],s=i[2],e=i[3],r=i[4],h=i[5],l=i[6],g=i[7],d=i[8],a=Math.sin(n),L=Math.cos(n);return t[0]=L*c+a*e,t[1]=L*o+a*r,t[2]=L*s+a*h,t[3]=L*e-a*c,t[4]=L*r-a*o,t[5]=L*h-a*s,t[6]=l,t[7]=g,t[8]=d,t}function F(t,i,n){const c=n[0],o=n[1];return t[0]=c*i[0],t[1]=c*i[1],t[2]=c*i[2],t[3]=o*i[3],t[4]=o*i[4],t[5]=o*i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t}function N(t,i){const n=i[0],c=i[1],o=i[2],s=i[3],e=n+n,r=c+c,h=o+o,l=n*e,g=c*e,d=c*r,a=o*e,L=o*r,f=o*h,u=s*e,m=s*r,v=s*h;return t[0]=1-d-f,t[3]=g-v,t[6]=a+m,t[1]=g+v,t[4]=1-l-f,t[7]=L-u,t[2]=a-m,t[5]=L+u,t[8]=1-l-d,t}var S=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,w=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`,p=5,W={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",directionalLightCount:"i32",pointLightCount:"i32",spotLightCount:"i32",ambientColor:"vec3<f32>",lights:[{color:"vec3<f32>",position:"vec3<f32>",direction:"vec3<f32>",attenuation:"vec3<f32>",coneCos:"vec2<f32>"},p]},defaultUniforms:x(),bindingLayout:[{name:"lighting",group:2}],firstBindingSlot:0,source:w,vs:S,fs:S,getUniforms:X};function X(t,i={}){if(t=t&&{...t},!t)return x();t.lights&&(t={...t,...Y(t.lights),lights:void 0});const{useByteColors:n,ambientLight:c,pointLights:o,spotLights:s,directionalLights:e}=t||{};if(!(c||o&&o.length>0||s&&s.length>0||e&&e.length>0))return{...x(),enabled:0};const r={...x(),...k({useByteColors:n,ambientLight:c,pointLights:o,spotLights:s,directionalLights:e})};return t.enabled!==void 0&&(r.enabled=t.enabled?1:0),r}function k({useByteColors:t,ambientLight:i,pointLights:n=[],spotLights:c=[],directionalLights:o=[]}){const s=E();let e=0,r=0,h=0,l=0;for(const g of n){if(e>=p)break;s[e]={...s[e],color:C(g,t),position:g.position,attenuation:g.attenuation||[1,0,0]},e++,r++}for(const g of c){if(e>=p)break;s[e]={...s[e],color:C(g,t),position:g.position,direction:g.direction,attenuation:g.attenuation||[1,0,0],coneCos:B(g)},e++,h++}for(const g of o){if(e>=p)break;s[e]={...s[e],color:C(g,t),direction:g.direction},e++,l++}return n.length+c.length+o.length>p&&P.warn(`MAX_LIGHTS exceeded, truncating to ${p}`)(),{ambientColor:C(i,t),directionalLightCount:l,pointLightCount:r,spotLightCount:h,lights:s}}function Y(t){const i={pointLights:[],spotLights:[],directionalLights:[]};for(const n of t||[])switch(n.type){case"ambient":i.ambientLight=n;break;case"directional":i.directionalLights?.push(n);break;case"point":i.pointLights?.push(n);break;case"spot":i.spotLights?.push(n)}return i}function C(t={},i){const{color:n=[0,0,0],intensity:c=1}=t;return T(n,U(i,!0)).map(o=>o*c)}function x(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:E()}}function E(){return Array.from({length:p},()=>V())}function V(){return{color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}}function B(t){const i=t.innerConeAngle??0,n=t.outerConeAngle??Math.PI/4;return[Math.cos(i),Math.cos(n)]}export{z as a,F as c,N as i,M as l,D as n,I as o,R as r,H as s,W as t,G as u};
