import{C as Y,D as W,E as j,S as q,T as X,_ as Z,a as N,b as H,d as K,g as J,h as Q,k as ee,m as B,n as re,r as A,t as te,v as ne,w as se,x as F}from"./expression-Cqv6w4A8.js";import{_ as ie,b as x,p as ae,u as oe}from"./array-utils-flat-CVWyf9o7.js";var P=2,ue=1e4,_=class V{static defaultProps={...W.defaultProps,id:"unnamed",handle:void 0,userData:{},source:"",modules:[],defines:{},plugins:[],bindings:void 0,shaderInputs:void 0,pipelineFactory:void 0,shaderFactory:void 0,shaderAssembler:H.getDefaultShaderAssembler("wgsl"),debugShaders:void 0};device;id;pipelineFactory;shaderFactory;userData={};bindings={};pipeline;source;shader;shaderInputs;_uniformStore;_pipelineNeedsUpdate="newly created";_getModuleUniforms;props;_destroyed=!1;constructor(e,t){if(e.type!=="webgpu")throw new Error("Computation is only supported in WebGPU");this.props={...V.defaultProps,...t},t=this.props,this.id=t.id||Z("model"),this.device=e,Object.assign(this.userData,t.userData);const s=le(e),n=Y(this.props.plugins,s.shaderLanguage);if(Object.keys(n.vertexInputs).length>0||Object.keys(n.varyings).length>0)throw new Error("Computation does not support ShaderPlugin vertex inputs or varyings");const o=q(this.props.modules,n.modules),i=Object.fromEntries(o.map($=>[$.name,$]));this.shaderInputs=t.shaderInputs||new K(i),t.shaderInputs&&n.modules.length>0&&this.shaderInputs.addModules(n.modules),this.setShaderInputs(this.shaderInputs);const l=Q(this.props.modules,this.shaderInputs?.getModules()),a={...n.defines,...this.props.defines};this.props.shaderLayout=B(this.props.shaderLayout,l)||null,this.pipelineFactory=t.pipelineFactory||j.getDefaultPipelineFactory(this.device),this.shaderFactory=t.shaderFactory||X.getDefaultShaderFactory(this.device);const u=this.props.shaderAssembler;oe(u instanceof F);const{source:d,getUniforms:c,shaderLayout:m}=u.assembleWGSLShader({platformInfo:s,...this.props,modules:l,defines:a,scanVertexAttributes:!1,pluginInjections:n.injections});this.source=d,this._getModuleUniforms=c;const p=m??e.getShaderLayout?.(this.source,{scanVertexAttributes:!1});this.props.shaderLayout=B(this.props.shaderLayout||p||null,l)||null,this.pipeline=this._updatePipeline(),t.bindings&&this.setBindings(t.bindings)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.shader),this._uniformStore.destroy(),this._destroyed=!0)}predraw(e){this.updateShaderInputs(e)}dispatch(e,t,s,n){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatch(t,s,n)}finally{this._logDrawCallEnd()}}dispatchIndirect(e,t,s=0){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatchIndirect(t,s)}finally{this._logDrawCallEnd()}}_setPipeline(e){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),e.setPipeline(this.pipeline),e.setBindings({})}setVertexCount(e){}setInstanceCount(e){}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new se(this.device,this.shaderInputs.modules);for(const[t,s]of Object.entries(this.shaderInputs.modules))if(J(s)){const n=this._uniformStore.getManagedUniformBuffer(t);this.bindings[`${t}Uniforms`]=n}}setShaderModuleProps(e){const t=this._getModuleUniforms(e),s=Object.keys(t).filter(o=>{const i=t[o];return!ee(i)&&typeof i!="number"&&typeof i!="boolean"}),n={};for(const o of s)n[o]=t[o],delete t[o]}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e)}setBindings(e){Object.assign(this.bindings,e)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||e}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null;this.pipeline&&(x.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.shader),this._pipelineNeedsUpdate=!1,this.shader=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"compute",source:this.source,debugShaders:this.props.debugShaders}),this.pipeline=this.pipelineFactory.createComputePipeline({...this.props,shader:this.shader}),e&&this.shaderFactory.release(e)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){const e=x.level>3?0:ue;x.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,x.group(P,`>>> DRAWING MODEL ${this.id}`,{collapsed:x.level<=2})())}_logDrawCallEnd(){if(this._logOpen){const e=this.shaderInputs.getDebugTable();x.table(P,e)(),x.groupEnd(P)(),this._logOpen=!1}}_drawCount=0;_getBufferOrConstantValues(e,t){const s=ae.getTypedArrayConstructor(t);return(e instanceof ie?new s(e.debugData):e).toString()}};function le(r){return{type:r.type,shaderLanguage:r.info.shadingLanguage,shaderLanguageVersion:r.info.shadingLanguageVersion,gpu:r.info.gpu,limits:r.limits,features:r.features}}var de=65535;function v(r,e){const t=ce(e),s=Math.max(1,Math.ceil(r)),n=Math.min(s,t),o=Math.min(Math.ceil(s/n),t),i=Math.ceil(s/n/o);if(i>t)throw new Error(`WebGPU dispatch requires ${s} workgroups, exceeding the 3D dispatch limit of ${t} per dimension`);return{x:n,y:o,z:i}}function R(r,e="workgroupId"){return`((${e}.z * ${r.y}u + ${e}.y) * ${r.x}u + ${e}.x)`}function I(r,e,t="workgroupId",s="localId"){return`(${R(r,t)} * ${e}u + ${s}.x)`}function ce(r){return Number.isFinite(r)&&r>0?Math.floor(r):de}function E(r,e){switch(r){case"u32":return`${e}u`;case"f32":return Number.isInteger(e)?`${e}.0`:`${e}`;default:return`${e}`}}function fe(r,e){switch(r){case"uint32":return E("u32",Math.trunc(e));case"sint32":return`${Math.trunc(e)}`;case"float32":return E("f32",e);default:throw new Error(`WebGPU operations only support 32-bit output types, got ${r}`)}}function b(r){switch(r){case"uint32":return"0u";case"sint32":return"0";case"float32":return"0.0";default:throw new Error(`WebGPU operations only support 32-bit output types, got ${r}`)}}function f(r){switch(r){case"uint32":return"u32";case"sint32":return"i32";case"float32":return"f32";default:throw new Error(`WebGPU operations only support 32-bit storage types, got ${r}`)}}var S=64,he="GPGPU Operation Counts",pe="Computation Runs",ge=new F;function y({module:r,elementWise:e=!1,expression:t,inputs:s,output:n,operationType:o=n.type,outputBuffer:i}){if(!r.source)throw new Error(`WebGPU computation ${r.name} requires WGSL source`);const l=_e(s),a=l.map(([h,g])=>({name:h,input:g})),u=a.filter(({input:h})=>!h.isConstant).map((h,g)=>({...h,index:g})),d=f(o),c=f(n.type),m={TYPE:d,RESULT_LEN:n.size.toString()},p=v(Math.ceil(n.length/S),i.device.limits.maxComputeWorkgroupsPerDimension);for(const[h,g]of l)m[`${h.toUpperCase()}_LEN`]=g.size.toString();const $=`
${Ee(r.source,m)}
${u.map(({name:h,input:g,index:D})=>me(h,g,D)).join(`
`)}
${a.map(({name:h,input:g})=>$e(h,g,o)).join(`
`)}
${ye(n,u.length)}
${xe(n)}

@compute @workgroup_size(${S}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${I(p,S)};
  if (rowIndex >= ${n.length}u) {
    return;
  }

${a.map(({name:h})=>`  let ${h} = read_${h}(rowIndex);`).join(`
`)}
  var result: array<${c}, ${n.size}>;
${we(r.name,l,n,e,t)}
  write_result(rowIndex, result);
}
`,w=new _(i.device,{source:$,modules:r.dependencies,shaderAssembler:ge,shaderLayout:{bindings:[...u.map(({name:h},g)=>({name:h,type:"storage",group:0,location:g})),{name:"result",type:"storage",group:0,location:u.length}]}}),O=Object.fromEntries(u.map(({name:h,input:g})=>[h,g.buffer]));O.result=i,w.setBindings(O);const U=i.device.beginComputePass({});i.device.statsManager.getStats(he).get(pe).incrementCount(),w.dispatch(U,p.x,p.y,p.z),U.end(),i.device.submit(),w.destroy()}function me(r,e,t){return e.isConstant?"":`@group(0) @binding(${t}) var<storage, read> ${r}: array<${f(e.type)}>;`}function $e(r,e,t){const s=f(t),n=e.type===t?"":s,o=e.stride/e.ValueType.BYTES_PER_ELEMENT,i=e.offset/e.ValueType.BYTES_PER_ELEMENT;return e.isConstant?`fn read_${r}(_rowIndex: u32) -> array<${s}, ${e.size}> {
  return array<${s}, ${e.size}>(${ve(e,n)});
}`:`fn read_${r}(rowIndex: u32) -> array<${s}, ${e.size}> {
  var value: array<${s}, ${e.size}>;
  let rowOffset = ${i}u + rowIndex * ${o}u;
${Array.from({length:e.size},(l,a)=>n?`  value[${a}] = ${n}(${r}[rowOffset + ${a}u]);`:`  value[${a}] = ${r}[rowOffset + ${a}u];`).join(`
`)}
  return value;
}`}function ye(r,e){return`@group(0) @binding(${e}) var<storage, read_write> result: array<${f(r.type)}>;`}function xe(r){const e=r.stride/r.ValueType.BYTES_PER_ELEMENT,t=r.offset/r.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${f(r.type)}, ${r.size}>) {
  let rowOffset = ${t}u + rowIndex * ${e}u;
${Array.from({length:r.size},(s,n)=>`  result[rowOffset + ${n}u] = value[${n}];`).join(`
`)}
}`}function we(r,e,t,s,n){let o="";if(n)for(let i=0;i<t.size;i++)o+=`  result[${i}] = ${n(i)};
`;else if(s){const i=b(t.type),l=f(t.type);for(let a=0;a<t.size;a++){const u=e.map(([d,c])=>a<c.size?f(c.type)===l?`${d}[${a}]`:`${l}(${d}[${a}])`:i);o+=`  result[${a}] = ${r}(${u.join(", ")});
`}}else o+=`result = ${r}(${e.map(([i])=>i).join(", ")});`;return o.trimEnd()}function _e(r){return Array.isArray(r)?r.map((e,t)=>[`x${t}`,e]):Object.entries(r)}function ve(r,e){const t=r.value;if(!t)throw new Error(`Constant input ${r} is missing CPU values`);return Array.from({length:r.size},(s,n)=>E(e,t[n]??0)).join(", ")}function Ee(r,e){for(const t in e)r=r.replaceAll(`{${t}}`,e[t]);return r}var Ie=`fn arithmetic_add(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x + y;
}

fn arithmetic_subtract(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x - y;
}

fn arithmetic_multiply(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x * y;
}

fn arithmetic_divide(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x / y;
}

fn arithmetic_tan(x: f32) -> f32 {
  return tan_fp32(x);
}
`,be=({inputs:r,output:e,target:t})=>{const s=e.type,n=f(s),o=b(s),i=r.namedInputs;return y({module:{name:"arithmetic",source:Ie,dependencies:[ne]},inputs:i,output:e,operationType:s,outputBuffer:t,expression:l=>te(r.expression,{operations:re,inputs:i,laneIndex:l,formatInput:a=>`${a}[${l}]`,formatOutOfBoundsInput:a=>i[a].size===1?`${a}[0]`:o,formatLiteral:a=>{const u=Array.isArray(a)?a[l]??0:a;return`${n}(${fe(s,u)})`},formatCall:(a,u)=>`${a}(${u.join(", ")})`})}),{success:!0}},Pe=`fn row_dot(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(y[i]);
  }
  return array<f32, 1>(sum);
}
`,Se=({inputs:r,output:e,target:t})=>(y({module:{name:"row_dot",source:Pe},inputs:r,output:e,operationType:"float32",outputBuffer:t}),{success:!0}),Te=`fn equalAll(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<u32, 1> {
  var allEqual = 1u;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    if (x[i] != y[i]) {
      allEqual = 0u;
      break;
    }
  }
  return array<u32, 1>(allEqual);
}
`,Le=({inputs:r,output:e,target:t})=>(y({module:{name:"equalAll",source:Te},inputs:r,output:e,operationType:r.x.type,outputBuffer:t}),{success:!0});function T(r,e,t){return`@group(0) @binding(${t}) var<storage, read> ${r}: array<${f(e.type)}>;`}function k(r,e,t,s=r){const n=f(t);if(e.isConstant){const a=e.value;if(!a)throw new Error(`Constant input ${e} is missing CPU values`);return`fn read_${s}(_sourceIndex: u32) -> array<${n}, ${e.size}> {
  return array<${n}, ${e.size}>(${Array.from({length:e.size},(u,d)=>E(n,a[d]??0)).join(", ")});
}`}const o=e.stride/e.ValueType.BYTES_PER_ELEMENT,i=e.offset/e.ValueType.BYTES_PER_ELEMENT,l=f(e.type)===n?"":`${n}`;return`fn read_${s}(sourceIndex: u32) -> array<${n}, ${e.size}> {
  var value: array<${n}, ${e.size}>;
  let rowOffset = ${i}u + sourceIndex * ${o}u;
${Array.from({length:e.size},(a,u)=>l?`  value[${u}] = ${l}(${r}[rowOffset + ${u}u]);`:`  value[${u}] = ${r}[rowOffset + ${u}u];`).join(`
`)}
  return value;
}`}function G(r,e){return k("sourceValues",r,e,"source_values")}function L(r,e){return`@group(0) @binding(${e}) var<storage, read_write> result: array<${f(r.type)}>;`}function M(r){const e=r.stride/r.ValueType.BYTES_PER_ELEMENT,t=r.offset/r.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${f(r.type)}, ${r.size}>) {
  let rowOffset = ${t}u + rowIndex * ${e}u;
${Array.from({length:r.size},(s,n)=>`  result[rowOffset + ${n}u] = value[${n}];`).join(`
`)}
}`}function Me(r,e){const t=b(r);return`fn zero_result() -> array<${f(r)}, ${e}> {
  var result: array<${f(r)}, ${e}>;
${Array.from({length:e},(s,n)=>`  result[${n}] = ${t};`).join(`
`)}
  return result;
}`}var Ce=({inputs:r,output:e,target:t})=>{const{sourceValues:s}=r;if(s.length===0){const a=new e.ValueType(e.length*e.size);return t.write(a),{success:!0,value:a}}if(s.isConstant){const a=s.value;if(!a)throw new Error(`Constant input ${s} is missing CPU values`);const u=new e.ValueType(e.length*e.size);for(let d=0;d<e.length;d++){const c=a[d];u[d*2]=c,u[d*2+1]=c}return t.write(u),{success:!0,value:u}}const n=[];let o=s,i="raw",l=s.length;try{for(;;){const a=Math.ceil(l/64),u=e.length*a,d=a===1?t:N.createOrReuse(t.device,u*e.stride);if(a>1&&n.push(d),ze({input:o,inputMode:i,inputGroupCount:l,channelCount:e.length,outputType:e.type,outputBuffer:d,outputLength:u,outputStride:e.stride,outputOffset:e.offset}),a===1)break;o=new A({buffer:d,type:e.type,size:2,length:u}),i="partial",l=a}return{success:!0}}finally{for(const a of n)N.recycle(a)}};function ze({input:r,inputMode:e,inputGroupCount:t,channelCount:s,outputType:n,outputBuffer:o,outputLength:i,outputStride:l,outputOffset:a}){const u=f(n),d=v(i,o.device.limits.maxComputeWorkgroupsPerDimension),c=new A({buffer:o,type:n,size:2,length:i,stride:l,offset:a}),m=`
${r.isConstant?"":T("sourceValues",r,0)}
${G(r,n)}
${L(c,r.isConstant?0:1)}
${M(c)}
${Oe(e,n,s,t)}

var<workgroup> sharedMin: array<${u}, 64>;
var<workgroup> sharedMax: array<${u}, 64>;

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let outputRowIndex = ${R(d)};
  if (outputRowIndex >= ${i}u) {
    return;
  }

  let channelIndex = outputRowIndex % ${s}u;
  let outputGroupIndex = outputRowIndex / ${s}u;
  let inputGroupIndex = outputGroupIndex * 64u + localId.x;

  let result = extent_pass(channelIndex, inputGroupIndex);
  sharedMin[localId.x] = result[0];
  sharedMax[localId.x] = result[1];
  workgroupBarrier();

  var stride = ${Math.floor(32)}u;
  loop {
    if (stride == 0u) {
      break;
    }
    if (localId.x < stride) {
      let compareIndex = localId.x + stride;
      if (sharedMin[compareIndex] < sharedMin[localId.x]) {
        sharedMin[localId.x] = sharedMin[compareIndex];
      }
      if (sharedMax[compareIndex] > sharedMax[localId.x]) {
        sharedMax[localId.x] = sharedMax[compareIndex];
      }
    }
    workgroupBarrier();
    stride = stride / 2u;
  }

  if (localId.x == 0u) {
    write_result(outputRowIndex, array<${u}, 2>(sharedMin[0], sharedMax[0]));
  }
}
`,p=new _(o.device,{source:m,shaderLayout:{bindings:[...r.isConstant?[]:[{name:"sourceValues",type:"storage",group:0,location:0}],{name:"result",type:"storage",group:0,location:r.isConstant?0:1}]}}),$={result:o};r.isConstant||($.sourceValues=r.buffer),p.setBindings($);const w=o.device.beginComputePass({});p.dispatch(w,d.x,d.y,d.z),w.end(),o.device.submit(),p.destroy()}function Oe(r,e,t,s){const n=f(e),[o,i]=Ue(e);return r==="raw"?`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${n}, 2> {
  var result: array<${n}, 2>;
  result[0] = ${o};
  result[1] = ${i};

  if (inputGroupIndex < ${s}u) {
    let value = read_source_values(inputGroupIndex);
    result[0] = value[channelIndex];
    result[1] = value[channelIndex];
  }

  return result;
}`:`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${n}, 2> {
  var result: array<${n}, 2>;
  result[0] = ${o};
  result[1] = ${i};

  if (inputGroupIndex < ${s}u) {
    let rowIndex = inputGroupIndex * ${t}u + channelIndex;
    let value = read_source_values(rowIndex);
    result[0] = value[0];
    result[1] = value[1];
  }

  return result;
}`}function Ue(r){switch(r){case"uint32":return["0xffffffffu","0u"];case"sint32":return["2147483647","-2147483648"];case"float32":return["3.402823e38","-3.402823e38"];default:throw new Error(`Unsupported WebGPU extent type for ${r}`)}}function Ne(){const r=new Uint16Array([255]);return new Uint8Array(r.buffer)[0]>0}var Be=`const LE: bool = ${Ne()?"true":"false"};
const F32_NAN: u32 = 0xffffffffu;
const F32_INF: u32 = 0x7f800000u;

fn roundShiftRight(value: u32, shift: i32) -> u32 {
  if (shift <= 0) {
    return value << u32(-shift);
  }

  if (shift >= 32) {
    if (shift == 32 && value > 0x80000000u) {
      return 1u;
    }
    return 0u;
  }

  let shiftU32 = u32(shift);
  let truncated = value >> shiftU32;
  let halfShift = 1u << u32(shift - 1);
  let remainder = value & ((1u << shiftU32) - 1u);
  if (remainder > halfShift || (remainder == halfShift && (truncated & 1u) == 1u)) {
    return truncated + 1u;
  }
  return truncated;
}

fn makeFloatImmediate(sign: u32, exponent: i32, mantissa: u32) -> u32 {
  return (sign << 31u) | (u32(exponent + 127) << 23u) | (mantissa & 0x7fffffu);
}

fn makeFloat(sign: u32, exponent: i32, significand: u32) -> u32 {
  if (significand == 0u) {
    return sign << 31u;
  }

  let leadingZeros = i32(countLeadingZeros(significand));
  var normalizedExponent = exponent + 31 - leadingZeros;

  if (normalizedExponent > 127) {
    return (sign << 31u) | F32_INF;
  }

  var mantissa: u32;
  if (normalizedExponent >= -126) {
    mantissa = roundShiftRight(significand, 8 - leadingZeros);
    if (mantissa >= 0x1000000u) {
      mantissa = mantissa >> 1u;
      normalizedExponent += 1;
      if (normalizedExponent > 127) {
        return (sign << 31u) | F32_INF;
      }
    }
    return makeFloatImmediate(sign, normalizedExponent, mantissa);
  }

  let subnormalShift = -149 - exponent;
  mantissa = roundShiftRight(significand, subnormalShift);
  if (mantissa >= 0x800000u) {
    return (sign << 31u) | (1u << 23u);
  }
  return (sign << 31u) | mantissa;
}

fn parseAsDouble(words: vec2<u32>) -> vec2<u32> {
  var d = words;
  if (LE) {
    d = d.yx;
  }

  let sign = (d.x >> 31u) & 1u;
  let exponentBits = (d.x >> 20u) & 0x7ffu;
  let exponent = i32(exponentBits) - 1023;
  let fractionHigh = d.x & 0xfffffu;
  let fractionLow = d.y;

  if (exponentBits == 0x7ffu) {
    if (fractionHigh == 0u && fractionLow == 0u) {
      return vec2<u32>((sign << 31u) | F32_INF, F32_NAN);
    }
    return vec2<u32>(F32_NAN);
  }

  if (exponentBits == 0u) {
    return vec2<u32>(sign << 31u);
  }

  if (exponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highSignificand = 0x800000u | (fractionHigh << 3u) | (fractionLow >> 29u);
  let lowSignificand = fractionLow & 0x1fffffffu;

  if (exponent < -126) {
    let highPart = makeFloat(sign, exponent - 23, highSignificand);
    let lowPart = makeFloat(sign, exponent - 52, lowSignificand);
    return vec2<u32>(highPart, lowPart);
  }

  let roundUp = lowSignificand > 0x10000000u ||
    (lowSignificand == 0x10000000u && (highSignificand & 1u) == 1u);

  var roundedSignificand = highSignificand + select(0u, 1u, roundUp);
  var highExponent = exponent;
  if (roundedSignificand == 0x1000000u) {
    roundedSignificand = 0x800000u;
    highExponent += 1;
  }

  if (highExponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highPart = makeFloatImmediate(sign, highExponent, roundedSignificand);

  var remainder = i32(lowSignificand);
  var lowSign = sign;
  if (roundUp) {
    remainder -= 0x20000000;
  }
  if (remainder < 0) {
    lowSign = 1u - sign;
    remainder = -remainder;
  }

  let lowPart = makeFloat(lowSign, exponent - 52, u32(remainder));
  return vec2<u32>(highPart, lowPart);
}

fn fround(x: array<u32, {X_LEN}>) -> array<f32, {RESULT_LEN}> {
  var result: array<f32, {RESULT_LEN}>;
  let n = {X_LEN}u / 2u;
  for (var i = 0u; i < n; i = i + 1u) {
    let parts = parseAsDouble(vec2<u32>(x[i * 2u], x[i * 2u + 1u]));
    result[i] = bitcast<f32>(parts.x);
    result[i + n] = bitcast<f32>(parts.y);
  }
  return result;
}
`,Ae=({inputs:r,output:e,target:t})=>(y({module:{name:"fround",source:Be},inputs:r,output:e,operationType:"uint32",outputBuffer:t}),{success:!0}),Fe=async({inputs:r,output:e,target:t})=>{const{ids:s,sourceValues:n}=r,o=f(s.type),i=[];s.isConstant||i.push({name:"ids",input:s,index:i.length}),n.isConstant||i.push({name:"sourceValues",input:n,index:i.length});const l=v(Math.ceil(e.length/64),t.device.limits.maxComputeWorkgroupsPerDimension),a=`
${i.map(({name:m,input:p,index:$})=>T(m,p,$)).join(`
`)}
${Re(s,o)}
${G(n,e.type)}
${L(e,i.length)}
${M(e)}
${Me(e.type,e.size)}
${ke(s.type,e.type,e.size,n.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${I(l,64)};
  if (rowIndex >= ${e.length}u) {
    return;
  }

  let idsValue = read_ids(rowIndex);
  let result = gather(idsValue);
  write_result(rowIndex, result);
}
`,u=new _(t.device,{source:a,shaderLayout:{bindings:[...i.map(({name:m,index:p})=>({name:m,type:"storage",group:0,location:p})),{name:"result",type:"storage",group:0,location:i.length}]}}),d={};s.isConstant||(d.ids=s.buffer),n.isConstant||(d.sourceValues=n.buffer),d.result=t,u.setBindings(d);const c=t.device.beginComputePass({});return u.dispatch(c,l.x,l.y,l.z),c.end(),t.device.submit(),u.destroy(),{success:!0}};function Re(r,e){if(r.isConstant){const s=r.value;if(!s)throw new Error(`Constant input ${r} is missing CPU values`);return`fn read_ids(_rowIndex: u32) -> ${e} {
  return ${E(e,s[0]??0)};
}`}const t=r.stride/r.ValueType.BYTES_PER_ELEMENT;return`fn read_ids(rowIndex: u32) -> ${e} {
  let rowOffset = ${r.offset/r.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${t}u;
  return ids[rowOffset];
}`}function ke(r,e,t,s){const n=f(r);return`fn gather(idsValue: ${n}) -> array<${f(e)}, ${t}> {
  let sourceIndex = ${n==="u32"?"i32(idsValue)":n==="i32"?"idsValue":"i32(idsValue)"};
  if (sourceIndex < 0 || sourceIndex >= ${s}) {
    return zero_result();
  }
  return read_source_values(u32(sourceIndex));
}`}var Ge=async({inputs:r,output:e,target:t})=>{const{segments:s}=r,n=s.isConstant?[]:[{name:"segments",input:s,index:0}],o=v(Math.ceil(e.length/64),t.device.limits.maxComputeWorkgroupsPerDimension),i=`
${n.map(({name:d,input:c,index:m})=>T(d,c,m)).join(`
`)}
${k("segments",s,"uint32")}
${L(e,n.length)}
${M(e)}
${Ve(s.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${I(o,64)};
  if (rowIndex >= ${e.length}u) {
    return;
  }

  let result = segmented_map(rowIndex);
  write_result(rowIndex, result);
}
`,l=new _(t.device,{source:i,shaderLayout:{bindings:[...n.map(({name:d,index:c})=>({name:d,type:"storage",group:0,location:c})),{name:"result",type:"storage",group:0,location:n.length}]}}),a=Object.fromEntries(n.map(({name:d,input:c})=>[d,c.buffer]));a.result=t,l.setBindings(a);const u=t.device.beginComputePass({});return l.dispatch(u,o.x,o.y,o.z),u.end(),t.device.submit(),l.destroy(),{success:!0}};function Ve(r){return`fn segmented_map(vertexIndex: u32) -> array<u32, 2> {
  var low = 0i;
  var high = ${r}i;
  while (low < high) {
    let mid = low + (high - low) / 2i;
    let midStart = read_segments(u32(mid))[0];
    if (midStart <= vertexIndex) {
      low = mid + 1i;
    } else {
      high = mid;
    }
  }

  let segmentIndex = u32(max(low - 1i, 0i));
  let segmentStart = read_segments(segmentIndex)[0];
  return array<u32, 2>(segmentIndex, vertexIndex - segmentStart);
}`}var De=({inputs:r,output:e,target:t})=>{const s=r.map((i,l)=>[`x${l}`,i]);Ye(t.device.limits,s);const n=s.map(([i,l])=>`${i}: array<{TYPE}, ${l.size}>`).join(", ");let o=0;return y({module:{name:"interleave",source:`fn interleave(${n}) -> array<{TYPE}, {RESULT_LEN}> {
  var out: array<{TYPE}, {RESULT_LEN}>;
${s.map(([i,l])=>{const a=Array.from({length:l.size},(u,d)=>`  out[${o+d}] = ${i}[${d}];`).join(`
`);return o+=l.size,a}).join(`
`)}
  return out;
}
`},inputs:r,output:e,outputBuffer:t}),{success:!0}};function Ye(r,e){const t=e.filter(([,s])=>!s.isConstant).length+1;if(t>r.maxStorageBuffersPerShaderStage)throw new Error(`interleave() requires ${t} storage buffers, exceeding device limit ${r.maxStorageBuffersPerShaderStage}`);if(t>r.maxBindingsPerBindGroup)throw new Error(`interleave() requires ${t} bindings, exceeding bind group limit ${r.maxBindingsPerBindGroup}`)}var We=`fn row_length(x: array<{TYPE}, {X_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(x[i]);
  }
  return array<f32, 1>(sqrt(sum));
}
`,je=({inputs:r,output:e,target:t})=>(y({module:{name:"row_length",source:We},inputs:r,output:e,operationType:"float32",outputBuffer:t}),{success:!0}),qe=async({inputs:r,output:e,target:t})=>{const s=b(e.type);return y({module:{name:"select",source:`// inline expression select
`},inputs:r,output:e,operationType:e.type,outputBuffer:t,expression:n=>{const o=C("condition",r.condition,n,s),i=C("whenTrue",r.whenTrue,n,s);return`select(${C("whenFalse",r.whenFalse,n,s)}, ${i}, ${o} != ${s})`}}),{success:!0}};function C(r,e,t,s){return t<e.size?`${r}[${t}]`:e.size===1?`${r}[0]`:s}var z=64,Xe=({inputs:r,output:e,target:t})=>{const s=v(Math.ceil(e.length/z),t.device.limits.maxComputeWorkgroupsPerDimension),n=`@group(0) @binding(0) var<storage, read_write> result: array<i32>;

@compute @workgroup_size(${z}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${I(s,z)};
  if (rowIndex >= ${e.length}u) {
    return;
  }

  let rowOffset = ${e.offset/e.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${e.stride/e.ValueType.BYTES_PER_ELEMENT}u;
  result[rowOffset] = ${r.start} + i32(rowIndex) * ${r.step};
}
`,o=new _(t.device,{source:n,shaderLayout:{bindings:[{name:"result",type:"storage",group:0,location:0}]}});o.setBindings({result:t});const i=t.device.beginComputePass({});return o.dispatch(i,s.x,s.y,s.z),i.end(),t.device.submit(),o.destroy(),{success:!0}},Ze=({inputs:r,output:e,target:t})=>{const{columns:s}=r;return y({module:{name:"swizzle",source:"// swizzle expression handled inline"},expression:n=>`x[${s[n]}]`,inputs:{x:r.x},output:e,outputBuffer:t}),{success:!0}};export{De as a,Ae as c,Se as d,be as f,je as i,Ce as l,Xe as n,Ge as o,qe as r,Fe as s,Ze as t,Le as u};
