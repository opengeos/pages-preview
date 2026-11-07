import{a as N,n as G,r as B,s as A,t as V}from"./expression-CONw41x2.js";import{m as w,xt as Y}from"./dist-CcqFK1yo.js";var F=65535;function E(e,r){const n=W(r),t=Math.max(1,Math.ceil(e)),s=Math.min(t,n),o=Math.min(Math.ceil(t/s),n),i=Math.ceil(t/s/o);if(i>n)throw new Error(`WebGPU dispatch requires ${t} workgroups, exceeding the 3D dispatch limit of ${n} per dimension`);return{x:s,y:o,z:i}}function O(e,r="workgroupId"){return`((${r}.z * ${e.y}u + ${r}.y) * ${e.x}u + ${r}.x)`}function _(e,r,n="workgroupId",t="localId"){return`(${O(e,n)} * ${r}u + ${t}.x)`}function W(e){return Number.isFinite(e)&&e>0?Math.floor(e):F}function v(e,r){switch(e){case"u32":return`${r}u`;case"f32":return Number.isInteger(r)?`${r}.0`:`${r}`;default:return`${r}`}}function j(e,r){switch(e){case"uint32":return v("u32",Math.trunc(r));case"sint32":return`${Math.trunc(r)}`;case"float32":return v("f32",r);default:throw new Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function I(e){switch(e){case"uint32":return"0u";case"sint32":return"0";case"float32":return"0.0";default:throw new Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function d(e){switch(e){case"uint32":return"u32";case"sint32":return"i32";case"float32":return"f32";default:throw new Error(`WebGPU operations only support 32-bit storage types, got ${e}`)}}var P=64,D="GPGPU Operation Counts",q="Computation Runs",X=new Y;function x({module:e,elementWise:r=!1,expression:n,inputs:t,output:s,operationType:o=s.type,outputBuffer:i}){if(!e.source)throw new Error(`WebGPU computation ${e.name} requires WGSL source`);const l=ee(t),a=l.map(([g,m])=>({name:g,input:m})),u=a.filter(({input:g})=>!g.isConstant).map((g,m)=>({...g,index:m})),c=d(o),f=d(s.type),p={TYPE:c,RESULT_LEN:s.size.toString()},$=E(Math.ceil(s.length/P),i.device.limits.maxComputeWorkgroupsPerDimension);for(const[g,m]of l)p[`${g.toUpperCase()}_LEN`]=m.size.toString();const h=`
${ne(e.source,p)}
${u.map(({name:g,input:m,index:U})=>Z(g,m,U)).join(`
`)}
${a.map(({name:g,input:m})=>H(g,m,o)).join(`
`)}
${K(s,u.length)}
${J(s)}

@compute @workgroup_size(${P}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${_($,P)};
  if (rowIndex >= ${s.length}u) {
    return;
  }

${a.map(({name:g})=>`  let ${g} = read_${g}(rowIndex);`).join(`
`)}
  var result: array<${f}, ${s.size}>;
${Q(e.name,l,s,r,n)}
  write_result(rowIndex, result);
}
`,y=new w(i.device,{source:h,modules:e.dependencies,shaderAssembler:X,shaderLayout:{bindings:[...u.map(({name:g},m)=>({name:g,type:"storage",group:0,location:m})),{name:"result",type:"storage",group:0,location:u.length}]}}),M=Object.fromEntries(u.map(({name:g,input:m})=>[g,m.buffer]));M.result=i,y.setBindings(M);const C=i.device.beginComputePass({});i.device.statsManager.getStats(D).get(q).incrementCount(),y.dispatch(C,$.x,$.y,$.z),C.end(),i.device.submit(),y.destroy()}function Z(e,r,n){return r.isConstant?"":`@group(0) @binding(${n}) var<storage, read> ${e}: array<${d(r.type)}>;`}function H(e,r,n){const t=d(n),s=r.type===n?"":t,o=r.stride/r.ValueType.BYTES_PER_ELEMENT,i=r.offset/r.ValueType.BYTES_PER_ELEMENT;return r.isConstant?`fn read_${e}(_rowIndex: u32) -> array<${t}, ${r.size}> {
  return array<${t}, ${r.size}>(${re(r,s)});
}`:`fn read_${e}(rowIndex: u32) -> array<${t}, ${r.size}> {
  var value: array<${t}, ${r.size}>;
  let rowOffset = ${i}u + rowIndex * ${o}u;
${Array.from({length:r.size},(l,a)=>s?`  value[${a}] = ${s}(${e}[rowOffset + ${a}u]);`:`  value[${a}] = ${e}[rowOffset + ${a}u];`).join(`
`)}
  return value;
}`}function K(e,r){return`@group(0) @binding(${r}) var<storage, read_write> result: array<${d(e.type)}>;`}function J(e){const r=e.stride/e.ValueType.BYTES_PER_ELEMENT,n=e.offset/e.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${d(e.type)}, ${e.size}>) {
  let rowOffset = ${n}u + rowIndex * ${r}u;
${Array.from({length:e.size},(t,s)=>`  result[rowOffset + ${s}u] = value[${s}];`).join(`
`)}
}`}function Q(e,r,n,t,s){let o="";if(s)for(let i=0;i<n.size;i++)o+=`  result[${i}] = ${s(i)};
`;else if(t){const i=I(n.type),l=d(n.type);for(let a=0;a<n.size;a++){const u=r.map(([c,f])=>a<f.size?d(f.type)===l?`${c}[${a}]`:`${l}(${c}[${a}])`:i);o+=`  result[${a}] = ${e}(${u.join(", ")});
`}}else o+=`result = ${e}(${r.map(([i])=>i).join(", ")});`;return o.trimEnd()}function ee(e){return Array.isArray(e)?e.map((r,n)=>[`x${n}`,r]):Object.entries(e)}function re(e,r){const n=e.value;if(!n)throw new Error(`Constant input ${e} is missing CPU values`);return Array.from({length:e.size},(t,s)=>v(r,n[s]??0)).join(", ")}function ne(e,r){for(const n in r)e=e.replaceAll(`{${n}}`,r[n]);return e}var te=`fn arithmetic_add(x: {TYPE}, y: {TYPE}) -> {TYPE} {
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
`,se=({inputs:e,output:r,target:n})=>{const t=r.type,s=d(t),o=I(t),i=e.namedInputs;return x({module:{name:"arithmetic",source:te,dependencies:[A]},inputs:i,output:r,operationType:t,outputBuffer:n,expression:l=>V(e.expression,{operations:G,inputs:i,laneIndex:l,formatInput:a=>`${a}[${l}]`,formatOutOfBoundsInput:a=>i[a].size===1?`${a}[0]`:o,formatLiteral:a=>{const u=Array.isArray(a)?a[l]??0:a;return`${s}(${j(t,u)})`},formatCall:(a,u)=>`${a}(${u.join(", ")})`})}),{success:!0}},ie=`fn row_dot(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(y[i]);
  }
  return array<f32, 1>(sum);
}
`,ae=({inputs:e,output:r,target:n})=>(x({module:{name:"row_dot",source:ie},inputs:e,output:r,operationType:"float32",outputBuffer:n}),{success:!0}),oe=`fn equalAll(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<u32, 1> {
  var allEqual = 1u;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    if (x[i] != y[i]) {
      allEqual = 0u;
      break;
    }
  }
  return array<u32, 1>(allEqual);
}
`,ue=({inputs:e,output:r,target:n})=>(x({module:{name:"equalAll",source:oe},inputs:e,output:r,operationType:e.x.type,outputBuffer:n}),{success:!0});function T(e,r,n){return`@group(0) @binding(${n}) var<storage, read> ${e}: array<${d(r.type)}>;`}function R(e,r,n,t=e){const s=d(n);if(r.isConstant){const a=r.value;if(!a)throw new Error(`Constant input ${r} is missing CPU values`);return`fn read_${t}(_sourceIndex: u32) -> array<${s}, ${r.size}> {
  return array<${s}, ${r.size}>(${Array.from({length:r.size},(u,c)=>v(s,a[c]??0)).join(", ")});
}`}const o=r.stride/r.ValueType.BYTES_PER_ELEMENT,i=r.offset/r.ValueType.BYTES_PER_ELEMENT,l=d(r.type)===s?"":`${s}`;return`fn read_${t}(sourceIndex: u32) -> array<${s}, ${r.size}> {
  var value: array<${s}, ${r.size}>;
  let rowOffset = ${i}u + sourceIndex * ${o}u;
${Array.from({length:r.size},(a,u)=>l?`  value[${u}] = ${l}(${e}[rowOffset + ${u}u]);`:`  value[${u}] = ${e}[rowOffset + ${u}u];`).join(`
`)}
  return value;
}`}function k(e,r){return R("sourceValues",e,r,"source_values")}function b(e,r){return`@group(0) @binding(${r}) var<storage, read_write> result: array<${d(e.type)}>;`}function S(e){const r=e.stride/e.ValueType.BYTES_PER_ELEMENT,n=e.offset/e.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${d(e.type)}, ${e.size}>) {
  let rowOffset = ${n}u + rowIndex * ${r}u;
${Array.from({length:e.size},(t,s)=>`  result[rowOffset + ${s}u] = value[${s}];`).join(`
`)}
}`}function le(e,r){const n=I(e);return`fn zero_result() -> array<${d(e)}, ${r}> {
  var result: array<${d(e)}, ${r}>;
${Array.from({length:r},(t,s)=>`  result[${s}] = ${n};`).join(`
`)}
  return result;
}`}var ce=({inputs:e,output:r,target:n})=>{const{sourceValues:t}=e;if(t.length===0){const a=new r.ValueType(r.length*r.size);return n.write(a),{success:!0,value:a}}if(t.isConstant){const a=t.value;if(!a)throw new Error(`Constant input ${t} is missing CPU values`);const u=new r.ValueType(r.length*r.size);for(let c=0;c<r.length;c++){const f=a[c];u[c*2]=f,u[c*2+1]=f}return n.write(u),{success:!0,value:u}}const s=[];let o=t,i="raw",l=t.length;try{for(;;){const a=Math.ceil(l/64),u=r.length*a,c=a===1?n:N.createOrReuse(n.device,u*r.stride);if(a>1&&s.push(c),de({input:o,inputMode:i,inputGroupCount:l,channelCount:r.length,outputType:r.type,outputBuffer:c,outputLength:u,outputStride:r.stride,outputOffset:r.offset}),a===1)break;o=new B({buffer:c,type:r.type,size:2,length:u}),i="partial",l=a}return{success:!0}}finally{for(const a of s)N.recycle(a)}};function de({input:e,inputMode:r,inputGroupCount:n,channelCount:t,outputType:s,outputBuffer:o,outputLength:i,outputStride:l,outputOffset:a}){const u=d(s),c=E(i,o.device.limits.maxComputeWorkgroupsPerDimension),f=new B({buffer:o,type:s,size:2,length:i,stride:l,offset:a}),p=`
${e.isConstant?"":T("sourceValues",e,0)}
${k(e,s)}
${b(f,e.isConstant?0:1)}
${S(f)}
${fe(r,s,t,n)}

var<workgroup> sharedMin: array<${u}, 64>;
var<workgroup> sharedMax: array<${u}, 64>;

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let outputRowIndex = ${O(c)};
  if (outputRowIndex >= ${i}u) {
    return;
  }

  let channelIndex = outputRowIndex % ${t}u;
  let outputGroupIndex = outputRowIndex / ${t}u;
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
`,$=new w(o.device,{source:p,shaderLayout:{bindings:[...e.isConstant?[]:[{name:"sourceValues",type:"storage",group:0,location:0}],{name:"result",type:"storage",group:0,location:e.isConstant?0:1}]}}),h={result:o};e.isConstant||(h.sourceValues=e.buffer),$.setBindings(h);const y=o.device.beginComputePass({});$.dispatch(y,c.x,c.y,c.z),y.end(),o.device.submit(),$.destroy()}function fe(e,r,n,t){const s=d(r),[o,i]=ge(r);return e==="raw"?`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${s}, 2> {
  var result: array<${s}, 2>;
  result[0] = ${o};
  result[1] = ${i};

  if (inputGroupIndex < ${t}u) {
    let value = read_source_values(inputGroupIndex);
    result[0] = value[channelIndex];
    result[1] = value[channelIndex];
  }

  return result;
}`:`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${s}, 2> {
  var result: array<${s}, 2>;
  result[0] = ${o};
  result[1] = ${i};

  if (inputGroupIndex < ${t}u) {
    let rowIndex = inputGroupIndex * ${n}u + channelIndex;
    let value = read_source_values(rowIndex);
    result[0] = value[0];
    result[1] = value[1];
  }

  return result;
}`}function ge(e){switch(e){case"uint32":return["0xffffffffu","0u"];case"sint32":return["2147483647","-2147483648"];case"float32":return["3.402823e38","-3.402823e38"];default:throw new Error(`Unsupported WebGPU extent type for ${e}`)}}function me(){const e=new Uint16Array([255]);return new Uint8Array(e.buffer)[0]>0}var $e=`const LE: bool = ${me()?"true":"false"};
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
`,pe=({inputs:e,output:r,target:n})=>(x({module:{name:"fround",source:$e},inputs:e,output:r,operationType:"uint32",outputBuffer:n}),{success:!0}),xe=async({inputs:e,output:r,target:n})=>{const{ids:t,sourceValues:s}=e,o=d(t.type),i=[];t.isConstant||i.push({name:"ids",input:t,index:i.length}),s.isConstant||i.push({name:"sourceValues",input:s,index:i.length});const l=E(Math.ceil(r.length/64),n.device.limits.maxComputeWorkgroupsPerDimension),a=`
${i.map(({name:p,input:$,index:h})=>T(p,$,h)).join(`
`)}
${he(t,o)}
${k(s,r.type)}
${b(r,i.length)}
${S(r)}
${le(r.type,r.size)}
${ye(t.type,r.type,r.size,s.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${_(l,64)};
  if (rowIndex >= ${r.length}u) {
    return;
  }

  let idsValue = read_ids(rowIndex);
  let result = gather(idsValue);
  write_result(rowIndex, result);
}
`,u=new w(n.device,{source:a,shaderLayout:{bindings:[...i.map(({name:p,index:$})=>({name:p,type:"storage",group:0,location:$})),{name:"result",type:"storage",group:0,location:i.length}]}}),c={};t.isConstant||(c.ids=t.buffer),s.isConstant||(c.sourceValues=s.buffer),c.result=n,u.setBindings(c);const f=n.device.beginComputePass({});return u.dispatch(f,l.x,l.y,l.z),f.end(),n.device.submit(),u.destroy(),{success:!0}};function he(e,r){if(e.isConstant){const t=e.value;if(!t)throw new Error(`Constant input ${e} is missing CPU values`);return`fn read_ids(_rowIndex: u32) -> ${r} {
  return ${v(r,t[0]??0)};
}`}const n=e.stride/e.ValueType.BYTES_PER_ELEMENT;return`fn read_ids(rowIndex: u32) -> ${r} {
  let rowOffset = ${e.offset/e.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${n}u;
  return ids[rowOffset];
}`}function ye(e,r,n,t){const s=d(e);return`fn gather(idsValue: ${s}) -> array<${d(r)}, ${n}> {
  let sourceIndex = ${s==="u32"?"i32(idsValue)":s==="i32"?"idsValue":"i32(idsValue)"};
  if (sourceIndex < 0 || sourceIndex >= ${t}) {
    return zero_result();
  }
  return read_source_values(u32(sourceIndex));
}`}var we=async({inputs:e,output:r,target:n})=>{const{segments:t}=e,s=t.isConstant?[]:[{name:"segments",input:t,index:0}],o=E(Math.ceil(r.length/64),n.device.limits.maxComputeWorkgroupsPerDimension),i=`
${s.map(({name:c,input:f,index:p})=>T(c,f,p)).join(`
`)}
${R("segments",t,"uint32")}
${b(r,s.length)}
${S(r)}
${Ee(t.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${_(o,64)};
  if (rowIndex >= ${r.length}u) {
    return;
  }

  let result = segmented_map(rowIndex);
  write_result(rowIndex, result);
}
`,l=new w(n.device,{source:i,shaderLayout:{bindings:[...s.map(({name:c,index:f})=>({name:c,type:"storage",group:0,location:f})),{name:"result",type:"storage",group:0,location:s.length}]}}),a=Object.fromEntries(s.map(({name:c,input:f})=>[c,f.buffer]));a.result=n,l.setBindings(a);const u=n.device.beginComputePass({});return l.dispatch(u,o.x,o.y,o.z),u.end(),n.device.submit(),l.destroy(),{success:!0}};function Ee(e){return`fn segmented_map(vertexIndex: u32) -> array<u32, 2> {
  var low = 0i;
  var high = ${e}i;
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
}`}var ve=({inputs:e,output:r,target:n})=>{const t=e.map((i,l)=>[`x${l}`,i]);_e(n.device.limits,t);const s=t.map(([i,l])=>`${i}: array<{TYPE}, ${l.size}>`).join(", ");let o=0;return x({module:{name:"interleave",source:`fn interleave(${s}) -> array<{TYPE}, {RESULT_LEN}> {
  var out: array<{TYPE}, {RESULT_LEN}>;
${t.map(([i,l])=>{const a=Array.from({length:l.size},(u,c)=>`  out[${o+c}] = ${i}[${c}];`).join(`
`);return o+=l.size,a}).join(`
`)}
  return out;
}
`},inputs:e,output:r,outputBuffer:n}),{success:!0}};function _e(e,r){const n=r.filter(([,t])=>!t.isConstant).length+1;if(n>e.maxStorageBuffersPerShaderStage)throw new Error(`interleave() requires ${n} storage buffers, exceeding device limit ${e.maxStorageBuffersPerShaderStage}`);if(n>e.maxBindingsPerBindGroup)throw new Error(`interleave() requires ${n} bindings, exceeding bind group limit ${e.maxBindingsPerBindGroup}`)}var Ie=`fn row_length(x: array<{TYPE}, {X_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(x[i]);
  }
  return array<f32, 1>(sqrt(sum));
}
`,Pe=({inputs:e,output:r,target:n})=>(x({module:{name:"row_length",source:Ie},inputs:e,output:r,operationType:"float32",outputBuffer:n}),{success:!0}),Te=async({inputs:e,output:r,target:n})=>{const t=I(r.type);return x({module:{name:"select",source:`// inline expression select
`},inputs:e,output:r,operationType:r.type,outputBuffer:n,expression:s=>{const o=L("condition",e.condition,s,t),i=L("whenTrue",e.whenTrue,s,t);return`select(${L("whenFalse",e.whenFalse,s,t)}, ${i}, ${o} != ${t})`}}),{success:!0}};function L(e,r,n,t){return n<r.size?`${e}[${n}]`:r.size===1?`${e}[0]`:t}var z=64,be=({inputs:e,output:r,target:n})=>{const t=E(Math.ceil(r.length/z),n.device.limits.maxComputeWorkgroupsPerDimension),s=`@group(0) @binding(0) var<storage, read_write> result: array<i32>;

@compute @workgroup_size(${z}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${_(t,z)};
  if (rowIndex >= ${r.length}u) {
    return;
  }

  let rowOffset = ${r.offset/r.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${r.stride/r.ValueType.BYTES_PER_ELEMENT}u;
  result[rowOffset] = ${e.start} + i32(rowIndex) * ${e.step};
}
`,o=new w(n.device,{source:s,shaderLayout:{bindings:[{name:"result",type:"storage",group:0,location:0}]}});o.setBindings({result:n});const i=n.device.beginComputePass({});return o.dispatch(i,t.x,t.y,t.z),i.end(),n.device.submit(),o.destroy(),{success:!0}},Se=({inputs:e,output:r,target:n})=>{const{columns:t}=e;return x({module:{name:"swizzle",source:"// swizzle expression handled inline"},expression:s=>`x[${t[s]}]`,inputs:{x:e.x},output:r,outputBuffer:n}),{success:!0}};export{ve as a,pe as c,ae as d,se as f,Pe as i,ce as l,be as n,we as o,Te as r,xe as s,Se as t,ue as u};
