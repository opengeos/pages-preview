import{A as P,E as m,O as q,j as p,l as M}from"./get-attribute-from-layouts-Bj7i7MoM.js";import{K as j}from"./dist-CcqFK1yo.js";var Y={name:"fp32",source:`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
const FP32_TWO_PI: f32 = 6.2831854820251465;
const FP32_PI_2: f32 = 1.5707963705062866;
const FP32_PI_16: f32 = 0.1963495463132858;

const FP32_SIN_TABLE_0: f32 = 0.19509032368659973;
const FP32_SIN_TABLE_1: f32 = 0.3826834261417389;
const FP32_SIN_TABLE_2: f32 = 0.5555702447891235;
const FP32_SIN_TABLE_3: f32 = 0.7071067690849304;

const FP32_COS_TABLE_0: f32 = 0.9807852506637573;
const FP32_COS_TABLE_1: f32 = 0.9238795042037964;
const FP32_COS_TABLE_2: f32 = 0.8314695954322815;
const FP32_COS_TABLE_3: f32 = 0.7071067690849304;

const FP32_INVERSE_FACTORIAL_3: f32 = 1.666666716337204e-01;
const FP32_INVERSE_FACTORIAL_5: f32 = 8.333333767950535e-03;
const FP32_INVERSE_FACTORIAL_7: f32 = 1.9841270113829523e-04;
const FP32_INVERSE_FACTORIAL_9: f32 = 2.75573188446287533e-06;
const FP32_OVERFLOW: f32 = 3.402823466e+38;

fn sin_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let x = -a * a;
  var sum = a;
  var term = a;

  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_3;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_5;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_7;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_9;

  return sum;
}

fn tan_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let z = floor(a / FP32_TWO_PI);
  let reduced = a - FP32_TWO_PI * z;

  var quadrantValue = floor(reduced / FP32_PI_2 + 0.5);
  let quadrant = i32(quadrantValue);
  if (quadrant < -2 || quadrant > 2) {
    return FP32_OVERFLOW;
  }

  var angle = reduced - FP32_PI_2 * quadrantValue;
  quadrantValue = floor(angle / FP32_PI_16 + 0.5);
  let tableIndex = i32(quadrantValue);
  let absoluteTableIndex = abs(tableIndex);
  if (absoluteTableIndex > 4) {
    return FP32_OVERFLOW;
  }

  angle = angle - FP32_PI_16 * quadrantValue;
  let sinAngle = sin_taylor_fp32(angle);
  let cosAngle = sqrt(1.0 - sinAngle * sinAngle);

  var tableCos = 0.0;
  var tableSin = 0.0;
  if (absoluteTableIndex == 1) {
    tableCos = FP32_COS_TABLE_0;
    tableSin = FP32_SIN_TABLE_0;
  } else if (absoluteTableIndex == 2) {
    tableCos = FP32_COS_TABLE_1;
    tableSin = FP32_SIN_TABLE_1;
  } else if (absoluteTableIndex == 3) {
    tableCos = FP32_COS_TABLE_2;
    tableSin = FP32_SIN_TABLE_2;
  } else if (absoluteTableIndex == 4) {
    tableCos = FP32_COS_TABLE_3;
    tableSin = FP32_SIN_TABLE_3;
  }

  var sinReduced = sinAngle;
  var cosReduced = cosAngle;
  if (tableIndex > 0) {
    sinReduced = tableCos * sinAngle + tableSin * cosAngle;
    cosReduced = tableCos * cosAngle - tableSin * sinAngle;
  } else if (tableIndex < 0) {
    sinReduced = tableCos * sinAngle - tableSin * cosAngle;
    cosReduced = tableCos * cosAngle + tableSin * sinAngle;
  }

  var sinValue = 0.0;
  var cosValue = 0.0;
  if (quadrant == 0) {
    sinValue = sinReduced;
    cosValue = cosReduced;
  } else if (quadrant == 1) {
    sinValue = cosReduced;
    cosValue = -sinReduced;
  } else if (quadrant == -1) {
    sinValue = -cosReduced;
    cosValue = sinReduced;
  } else {
    sinValue = -sinReduced;
    cosValue = -cosReduced;
  }

  return sinValue / cosValue;
}

fn tan_fp32(a: f32) -> f32 {
  return tan_taylor_fp32(a);
}
#else
fn tan_fp32(a: f32) -> f32 {
  return tan(a);
}
#endif
`,vs:`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`},U=/^vertex-list<([^<>]+)>$/,D=/^value-list<([^<>]+)>$/;function F(e){return U.test(e)}function G(e){return D.test(e)}function W(e){const t=U.exec(e),r=D.exec(e),a=t?.[1]??r?.[1]??e;try{m.getVertexFormatInfo(a)}catch{throw new Error(`Unsupported GPUVector format ${e}`)}return a}function L(e){const t=W(e),r=F(e),a=G(e),s=m.getVertexFormatInfo(t),o=s.type,i=s.normalized,n=K(o,i);return{format:e,elementFormat:t,vertexList:r,valueList:a,type:o,signedDataType:X(t,o),primitiveType:n,components:s.components,byteLength:s.byteLength,integer:s.integer,signed:s.signed,normalized:i,...s.webglOnly?{webglOnly:!0}:{}}}function K(e,t){if(t)return"f32";switch(e){case"float32":return"f32";case"float16":return"f16";case"uint8":case"uint16":case"uint32":return"u32";case"sint8":case"sint16":case"sint32":return"i32";default:throw new Error(`Unsupported GPUVector component type ${e}`)}}function X(e,t){if(e==="unorm10-10-10-2")return"uint32";switch(t){case"unorm8":return"uint8";case"snorm8":return"sint8";case"unorm16":return"uint16";case"snorm16":return"sint16";default:return t}}var S=class{buffer;format;length;byteOffset;byteStride;constructor(e){const t=m.getVertexFormatInfo(e.format).byteLength,r=e.byteOffset??0,a=e.byteStride??t;if(V(e.length,"GPUDataView length"),V(r,"GPUDataView byteOffset"),V(a,"GPUDataView byteStride"),a<t)throw new Error(`GPUDataView byteStride ${a} is smaller than ${e.format} byte length ${t}`);const s=e.length===0?0:(e.length-1)*a+t,o=r+s;if(!Number.isSafeInteger(s)||!Number.isSafeInteger(o))throw new Error("GPUDataView byte range must use safe integers");if(o>e.buffer.byteLength)throw new Error("GPUDataView exceeds its backing buffer byte length");this.buffer=e.buffer,this.format=e.format,this.length=e.length,this.byteOffset=r,this.byteStride=a}get elementByteLength(){return m.getVertexFormatInfo(this.format).byteLength}get byteLength(){return this.length===0?0:(this.length-1)*this.byteStride+this.elementByteLength}};function V(e,t){if(!Number.isSafeInteger(e)||e<0)throw new Error(`${t} must be a non-negative safe integer`)}function O(e){return!!(e&&typeof e=="object"&&e.type==="struct")}function H(e,t){const r=Object.entries(e);if(r.length===0)throw new Error("GPUData struct format must declare at least one field");return t==="packed"?J(r):Q(r)}function J(e){const t=[];let r=0,a=0;for(const[s,o]of e){const i=m.getVertexFormatInfo(o);if(i.webglOnly)throw new Error(`Packed GPUData struct field "${s}" uses WebGL-only format ${o}`);r=R(r,Math.min(4,i.byteLength)),t.push([s,Object.freeze({format:o,byteOffset:r,byteLength:i.byteLength})]),r+=i.byteLength,a+=i.components}return Object.freeze({type:"struct",layout:"packed",fields:Object.freeze(Object.fromEntries(t)),components:a,byteStride:R(r,4),rowByteLength:r})}function Q(e){const t=Object.fromEntries(e.map(([i,n])=>[i,Z(n)])),r=M(t,{layout:"wgsl-storage"}),a=[];let s=0,o=0;for(const[i,n]of e){const f=m.getVertexFormatInfo(n),u=r.fields[i].offset*4;a.push([i,Object.freeze({format:n,byteOffset:u,byteLength:f.byteLength})]),s=Math.max(s,u+f.byteLength),o+=f.components}return Object.freeze({type:"struct",layout:"wgsl-storage",fields:Object.freeze(Object.fromEntries(a)),components:o,byteStride:r.byteLength,rowByteLength:s})}function Z(e){const t=m.getVertexFormatInfo(e);switch(t.type){case"float32":return v("f32",t.components);case"sint32":return v("i32",t.components);case"uint32":return v("u32",t.components);default:return v("u32",Math.ceil(t.byteLength/4))}}function v(e,t){return t===1?e:`vec${t}<${e}>`}function R(e,t){return Math.ceil(e/t)*t}var tt=class{buffer;ownsDataBuffer;constructor(e,t){this.buffer=e,this.ownsDataBuffer=t}get ownsBuffer(){return this.ownsDataBuffer}transferBufferOwnership(e){if(e.buffer!==this.buffer)throw new Error("GPUData ownership can only be transferred to the same buffer");e.ownsDataBuffer=this.ownsDataBuffer,this.ownsDataBuffer=!1}destroy(){this.ownsDataBuffer&&(this.buffer.destroy(),this.ownsDataBuffer=!1)}},et=class extends tt{dataType;format;length;valueLength;stride;byteOffset;byteStride;rowByteLength;readbackMetadata;valueOffsets;nullBitmap;valueByteLength;constructor(e){const{buffer:t,format:r,length:a,valueLength:s,stride:o,byteOffset:i=0,byteStride:n,rowByteLength:f,ownsBuffer:u=!1,readbackMetadata:h,valueOffsets:c,nullBitmap:l,valueByteLength:b,dataType:d}=e;super(t,u);let y;r?typeof r=="string"?y=r:y=H(r,e.layout??"wgsl-storage"):y=void 0;const _=O(y)?y:void 0,I=typeof y=="string"?L(y):void 0;if(this.dataType=d,this.format=y,this.length=a,this.valueLength=s??a,this.stride=o??I?.components??_?.components??n??f??1,this.byteOffset=i,this.rowByteLength=f??_?.rowByteLength??I?.byteLength??n??this.stride,this.byteStride=n??_?.byteStride??this.rowByteLength,_){if(this.rowByteLength<_.rowByteLength)throw new Error(`GPUData rowByteLength ${this.rowByteLength} is smaller than struct format row byte length ${_.rowByteLength}`);if(this.byteStride<Math.max(_.byteStride,this.rowByteLength))throw new Error(`GPUData byteStride ${this.byteStride} is smaller than its struct row layout`)}this.readbackMetadata=h,this.valueOffsets=c,this.nullBitmap=l,this.valueByteLength=b}getChild(e){if(!O(this.format))return null;const t=this.format.fields[e];return t?new S({buffer:this.buffer,format:t.format,length:this.length,byteOffset:this.byteOffset+t.byteOffset,byteStride:this.byteStride}):null}getChildAt(e){if(!O(this.format))return null;const t=Object.values(this.format.fields)[e];return t?new S({buffer:this.buffer,format:t.format,length:this.length,byteOffset:this.byteOffset+t.byteOffset,byteStride:this.byteStride}):null}},A=et,B=class{name;dataType;format;length;valueLength;stride;byteOffset;byteStride;rowByteLength;bufferLayout;data=[];device;bufferProps;isAppendable=!1;ownsDataChunks=!0;ownedVectors=[];appendableByteLength=0;constructor(e){switch(e.type){case"buffer":{const{name:t,buffer:r,format:a,length:s,valueLength:o=s,byteOffset:i=0,ownsBuffer:n=!1}=e,{stride:f,byteStride:u,rowByteLength:h}=C(e);this.name=t,this.dataType=e.dataType,this.format=a,this.length=s,this.valueLength=o,this.stride=f,this.byteOffset=i,this.byteStride=u,this.rowByteLength=h,this.data.push(new A({buffer:r,format:a,length:s,valueLength:o,stride:f,byteOffset:i,byteStride:u,rowByteLength:h,ownsBuffer:n,dataType:e.dataType}));return}case"interleaved":{const{name:t,buffer:r,format:a,length:s,valueLength:o=s,byteOffset:i=0,byteStride:n,attributes:f,ownsBuffer:u=!1}=e;this.name=t,this.dataType=e.dataType,this.format=a,this.length=s,this.valueLength=o,this.stride=n,this.byteOffset=i,this.byteStride=n,this.rowByteLength=n,this.bufferLayout={name:t,byteStride:n,attributes:f},this.data.push(new A({buffer:r,format:a,length:s,valueLength:o,stride:n,byteOffset:i,byteStride:n,rowByteLength:n,ownsBuffer:u,dataType:e.dataType}));return}case"data":{const t=e.format??rt(e.data),r=t?L(t):void 0,{name:a,data:s,stride:o=s[0]?.stride??r?.components??1,valueLength:i=s.reduce((c,l)=>c+l.valueLength,0),byteStride:n=s[0]?.byteStride??r?.byteLength,rowByteLength:f=s[0]?.rowByteLength??r?.byteLength,bufferLayout:u,ownsData:h=!1}=e;if(n===void 0||f===void 0)throw new Error("GPUVector requires format or explicit byte layout metadata");t&&at(s,t),this.name=a,this.dataType=e.dataType,this.format=t,this.length=s.reduce((c,l)=>c+l.length,0),this.valueLength=i,this.stride=o,this.byteOffset=s.length===1?s[0].byteOffset:0,this.byteStride=n,this.rowByteLength=f,this.bufferLayout=u,this.ownsDataChunks=h,this.data.push(...s);return}case"appendable":{const{name:t,device:r,format:a,valueLength:s=0,bufferProps:o}=e,{stride:i,byteStride:n,rowByteLength:f}=C(e);this.name=t,this.dataType=e.dataType,this.format=a,this.length=0,this.valueLength=s,this.stride=i,this.byteOffset=0,this.byteStride=n,this.rowByteLength=f,this.device=r,this.bufferProps=o,this.isAppendable=!0;return}}}get ownsBuffer(){return this.ownsDataChunks&&this.data.some(e=>e.ownsBuffer)||this.ownedVectors.some(e=>e.ownsBuffer)}get capacityRows(){return this.isAppendable?this.length:void 0}get appendedByteLength(){return this.appendableByteLength}addData(e){if(this.format&&e.format!==this.format)throw new Error("GPUVector.addData() requires matching formats");if(e.byteStride!==this.byteStride)throw new Error("GPUVector.addData() requires matching byteStride");if(e.rowByteLength!==this.rowByteLength)throw new Error("GPUVector.addData() requires matching rowByteLength");return this.data.push(e),this.length+=e.length,this.valueLength+=e.valueLength,this}appendDataChunk(e,t=this.appendableByteLength+e.buffer.byteLength){if(!this.isAppendable)throw new Error("GPUVector.appendDataChunk() requires appendable vector storage");if(this.format&&e.format!==this.format)throw new Error("GPUVector.appendDataChunk() requires matching formats");if(e.byteStride!==this.byteStride||e.rowByteLength!==this.rowByteLength)throw new Error("GPUVector.appendDataChunk() requires matching byte layout metadata");return this.data.push(e),this.length+=e.length,this.valueLength+=e.valueLength,this.appendableByteLength=t,this}resetLastBatch(){if(!this.isAppendable)throw new Error("GPUVector.resetLastBatch() requires appendable vector storage");for(const e of this.data.splice(0))e.destroy();return this.length=0,this.valueLength=0,this.appendableByteLength=0,this}retainOwnedVectors(e){return this.ownedVectors.push(...e),this}transferBufferOwnership(e){const t=this.data[0],r=e.data[0];if(!t||!r||t.buffer!==r.buffer)throw new Error("GPUVector ownership can only be transferred to the same buffer");t.transferBufferOwnership(r)}destroy(){if(this.ownsDataChunks)for(const e of this.data)e.destroy();for(const e of this.ownedVectors.splice(0))e.destroy()}};function C(e){const t=e.format?L(e.format):void 0,r=e.rowByteLength??e.byteStride??t?.byteLength;if(r===void 0)throw new Error("GPUVector requires format or explicit rowByteLength");return{stride:e.stride??t?.components??1,byteStride:e.byteStride??r,rowByteLength:r}}function rt(e){return e[0]?.format}function at(e,t){if(e.find(r=>r.format!==t))throw new Error("GPUVector data chunks must share the declared format")}var st=class{poolSize=20;bufferPools;constructor(){this.bufferPools=new Map}createOrReuse(e,t){if(t>e.limits.maxBufferSize)throw new Error(`Buffer pool cannot allocate ${t} bytes: device.limits.maxBufferSize is ${e.limits.maxBufferSize}`);const r=this.bufferPools.get(e),a=r?r.findIndex(o=>o.byteLength>=t):-1;if(a<0)return e.createBuffer({usage:p.VERTEX|p.STORAGE|p.COPY_DST|p.COPY_SRC,byteLength:t});const[s]=r.splice(a,1);return s}recycle(e){const t=e.device;this.bufferPools.has(t)||this.bufferPools.set(t,[]);const r=this.bufferPools.get(t),a=r.findIndex(s=>s.byteLength>e.byteLength);a<0?r.push(e):r.splice(a,0,e),this.purge()}purge(){for(const[e,t]of this.bufferPools){const r=e.isLost?0:this.poolSize;for(;t.length>r;)t.shift().destroy();t.length===0&&this.bufferPools.delete(e)}}},w=new st,E=class g{static get bufferPoolSize(){return w.poolSize}static set bufferPoolSize(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("GPUDataEvaluator.bufferPoolSize must be a non-negative safe integer");w.poolSize=t,w.purge()}type;size;get offset(){return this._offset}get stride(){return this._stride}normalized;isConstant;length;get byteLength(){return this._byteLength}ValueType;source=null;format;_id;_destroyed=!1;_value;_offset;_stride;_byteLength;_gpuVector;_bufferOwnership="owned";_targetBuffer;static fromArray(t,{type:r,size:a=1,offset:s=0,stride:o=0,normalized:i=!1}){let n=r,f;Array.isArray(t)?(n=n||"float32",f=new(P(n))(t)):t instanceof Float64Array?(n="uint32",a*=2,s*=2,o*=2,f=new Uint32Array(t.buffer,t.byteOffset,t.byteLength/4)):(n=n||q(t),f=t);const u=`<${n} * ${a}>`;return new g({id:u,type:n,size:a,offset:s,stride:o,normalized:i,value:f})}static fromConstant(t,r="float32"){const a=P(r);let s;return Array.isArray(t)?s=`[${t.join(",")}]`:(s=String(t),t=[t]),new g({id:s,isConstant:!0,type:r,size:t.length,value:new a(t)})}static fromGPUData(t,r={}){it(t);const a=new S({buffer:t.buffer,format:t.format,length:t.length,byteOffset:t.byteOffset,byteStride:t.byteStride});return new g({...N(a),id:r.id,gpuData:t})}static fromGPUDataView(t,r={}){return new g({...N(t),id:r.id,buffer:t.buffer})}constructor(t){const{id:r,value:a,buffer:s,gpuData:o,format:i,source:n=null,isConstant:f=!1}=t;if(!n&&!a&&!s&&!o)throw new Error("GPUDataEvaluator must have a value source");let{type:u,size:h,offset:c,stride:l,normalized:b,length:d}=t;if(n instanceof g?(u=u??n.type,h=h??n.size,c=c??n.offset,l=l??n.stride,b=b??n.normalized,d=d??n.length):(h=h??1,c=c??0,b=b??!1,d=f?1:d),!u)throw new Error("GPUDataEvaluator: type not defined");if(this._id=r,this.type=u,this.size=h,this.ValueType=P(this.type),this._offset=c,this._stride=l||this.ValueType.BYTES_PER_ELEMENT*h,this.normalized=b,this.source=n,this.format=i,d===void 0)if(f)d=1;else{if(!a)throw new Error("GPUDataEvaluator: length not defined");d=Math.ceil(a.byteLength/this.stride)}this.isConstant=f,this.length=d;const y=this.ValueType.BYTES_PER_ELEMENT*this.size;this._byteLength=d===0?0:(d-1)*this.stride+y,this._value=a,this._bufferOwnership=n instanceof g||s||o?"borrowed":"owned",o?this._gpuVector=new B({type:"data",name:this._id??"data",format:o.format,data:[o],stride:o.stride,byteStride:o.byteStride,rowByteLength:o.rowByteLength}):s&&(this._gpuVector=this.createGPUVectorView({buffer:s,name:this._id,format:this.format}))}get value(){return this._value||(this.source instanceof g?this.source.value:void 0)}get evaluated(){return!!this._gpuVector}get id(){return this._id}get gpuVector(){if(!this._gpuVector)throw new Error(`${this} not evaluated`);return this._gpuVector}get buffer(){return T(this.gpuVector)}setTargetBuffer({buffer:t,byteOffset:r=0,byteStride:a=this.stride}){if(this._destroyed)throw new Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)throw new Error(`GPUDataEvaluator ${this} already evaluated`);if(!this.source||this.source instanceof g)throw new Error("GPUDataEvaluator target buffers require a deferred operation source");this._targetBuffer={buffer:t,byteOffset:r,byteStride:a}}async evaluate(t,r={}){if(this._destroyed)throw new Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let a;if(this.source instanceof g){const s=await this.source.evaluate(t);return this._gpuVector=this.createGPUVectorView({...r,buffer:T(s)}),this._gpuVector}if(a=this._getEvaluationBuffer(t),this._value)a.write(this._value);else{const s=await this.source.execute(t,a);if(!s.success)throw s.error||new Error(`${this.source} evaluation failed`);s.value&&(this._value=s.value)}return this._gpuVector=this.createGPUVectorView({...r,buffer:a}),this._gpuVector}evaluateSync(t,r={}){if(this._destroyed)throw new Error(`GPUDataEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let a;if(this.source instanceof g){const s=this.source.evaluateSync(t);return this._gpuVector=this.createGPUVectorView({...r,buffer:T(s)}),this._gpuVector}if(a=this._getEvaluationBuffer(t),this._value)a.write(this._value);else{const s=this.source.executeSync(t,a);if(!s.success)throw s.error||new Error(`${this.source} evaluation failed`);s.value&&(this._value=s.value)}return this._gpuVector=this.createGPUVectorView({...r,buffer:a}),this._gpuVector}createGPUVectorView(t){const r=t.name??this._id??"vector",a=t.format??this.format??lt(this.type,this.size,this.normalized);if(t.interleaved){const s=typeof t.interleaved=="object"&&t.interleaved.attributes?t.interleaved.attributes:ut(this);return new B({type:"interleaved",name:r,buffer:t.buffer,format:t.format??this.format,length:this.length,byteOffset:this.offset,byteStride:this.stride,attributes:s,ownsBuffer:!1})}return new B({type:"buffer",name:r,buffer:t.buffer,format:a,length:this.length,stride:this.size,byteOffset:this.offset,byteStride:this.stride,rowByteLength:this.ValueType.BYTES_PER_ELEMENT*this.size,ownsBuffer:!1})}_getEvaluationBuffer(t){const r=this._targetBuffer;if(!r)return w.createOrReuse(t,this.byteLength);if(r.buffer.device!==t)throw new Error("GPUDataEvaluator target buffer belongs to a different device");const a=this.ValueType.BYTES_PER_ELEMENT*this.size,s=this.length===0?0:(this.length-1)*r.byteStride+a;if(r.byteOffset+s>r.buffer.byteLength)throw new Error("GPUDataEvaluator target buffer is too small for the output layout");return this._offset=r.byteOffset,this._stride=r.byteStride,this._byteLength=s,this._bufferOwnership="borrowed",this._targetBuffer=void 0,r.buffer}async readValue(t=0,r){const{ValueType:a}=this,{size:s,offset:o,stride:i,length:n}=this,f=a.BYTES_PER_ELEMENT*s;if(r=r??n,t=Math.max(0,Math.min(n,t)),r=Math.max(t,Math.min(n,r)),this._value)return nt(this,this._value,t,r);const u=r-t;if(u===0)return new a(0);const h=o+t*i,c=i===f?u*f:(u-1)*i+f,l=await this.buffer.readAsync(h,c),b=new a(l.buffer,l.byteOffset,l.byteLength/a.BYTES_PER_ELEMENT);if(i===f)return b;const d=new Uint8Array(f*u);for(let y=0;y<u;y++){const _=y*i;d.set(l.subarray(_,_+f),y*f)}return new a(d.buffer)}async ensureCPUValue(){const t=this.value;if(t)return t;const r=await this.buffer.readAsync(0,this.offset+this.byteLength);if(r.byteLength%this.ValueType.BYTES_PER_ELEMENT!==0)throw new Error(`${this} backing buffer byte length is not aligned to its scalar type`);const a=r.slice();return this._value=new this.ValueType(a.buffer,a.byteOffset,a.byteLength/this.ValueType.BYTES_PER_ELEMENT),this._value}ensureCPUValueSync(){const t=this.value;if(t)return t;throw new Error(`${this} CPU value is not available for synchronous evaluation`)}toString(){return this._id??this.source?.toString()??this.constructor.name}destroy(){this._gpuVector&&(this._bufferOwnership==="owned"&&w.recycle(T(this._gpuVector)),this._gpuVector=void 0),this._targetBuffer=void 0,this._destroyed=!0}};function nt(e,t,r,a){const{ValueType:s,size:o,offset:i,stride:n}=e,f=n/s.BYTES_PER_ELEMENT,u=i/s.BYTES_PER_ELEMENT,h=a-r;if(f===o){const l=u+r*f;return t.subarray(l,l+h*o)}const c=new s(h*o);for(let l=0;l<h;l++){const b=u+(r+l)*f;c.set(t.subarray(b,b+o),l*o)}return c}function ot(e){if(e instanceof E)return e;if(typeof e=="number"||Array.isArray(e))return E.fromConstant(e);if(e instanceof A)return E.fromGPUData(e);if(e instanceof S)return E.fromGPUDataView(e);throw new Error("getGPUDataEvaluator() requires GPUDataEvaluator, GPUData, GPUDataView, number, or number[]")}function it(e){if(!e.format)throw new Error("GPUDataEvaluator.fromGPUData() requires GPUData format metadata");if(F(e.format)||G(e.format))throw new Error("GPUDataEvaluator.fromGPUData() does not support variable-length input");const t=L(e.format).byteLength;if(e.rowByteLength!==t)throw new Error(`GPUDataEvaluator.fromGPUData() requires rowByteLength ${t} for GPUData`)}function N(e){const t=L(e.format),r=P(t.signedDataType),a=r.BYTES_PER_ELEMENT*t.components;if(t.byteLength!==a)throw new Error(`GPUDataEvaluator does not support packed vertex format ${e.format}: ${t.byteLength} physical bytes cannot expose ${t.components} ${t.signedDataType} components`);if(e.byteOffset%r.BYTES_PER_ELEMENT!==0||e.byteStride%r.BYTES_PER_ELEMENT!==0)throw new Error(`GPUDataEvaluator requires ${e.format} offset and stride aligned to ${r.BYTES_PER_ELEMENT} bytes`);return{type:t.signedDataType,size:t.components,offset:e.byteOffset,stride:e.byteStride,normalized:t.normalized,length:e.length,format:e.format}}function T(e){const t=ft(e).buffer;return t instanceof j?t.buffer:t}function ft(e){const[t,...r]=e.data;if(!t||r.length>0)throw new Error(`GPUDataEvaluator requires exactly one GPUData chunk for "${e.name}"`);return t}function ut(e){const t=[];return x(e,t,{byteOffset:0}),t}function x(e,t,r){const a=e.source;if(a&&!(a instanceof E)&&a.name==="interleave"){for(const s of Object.values(a.inputs))s instanceof E&&x(s,t,r);return}t.push({attribute:e.id??e.toString(),format:$(e.type,e.size,e.normalized),byteOffset:r.byteOffset}),r.byteOffset+=e.ValueType.BYTES_PER_ELEMENT*e.size}function $(e,t,r=!1){if(t<1||t>4)throw new Error(`Cannot synthesize a GPUVector vertex format with ${t} components`);let a=e;if(r)switch(e){case"uint8":a="unorm8";break;case"sint8":a="snorm8";break;case"uint16":a="unorm16";break;case"sint16":a="snorm16";break;case"float32":a="float32";break;default:throw new Error(`Unsupported normalized vertex format for ${e}`)}return(a==="uint8"||a==="sint8"||a==="uint16"||a==="sint16"||a==="unorm8"||a==="snorm8"||a==="unorm16"||a==="snorm16")&&t===3?`${a}x3-webgl`:`${a}${t===1?"":`x${t}`}`}function lt(e,t,r=!1){return t>=1&&t<=4?$(e,t,r):void 0}var ht={add:{arity:2,symbol:"arithmetic_add"},subtract:{arity:2,symbol:"arithmetic_subtract"},multiply:{arity:2,symbol:"arithmetic_multiply"},divide:{arity:2,symbol:"arithmetic_divide"},pow:{arity:2,symbol:"pow"},sqrt:{arity:1,symbol:"sqrt"},abs:{arity:1,symbol:"abs"},sin:{arity:1,symbol:"sin"},cos:{arity:1,symbol:"cos"},tan:{arity:1,symbol:"arithmetic_tan"},exp:{arity:1,symbol:"exp"},log:{arity:1,symbol:"log"}};function k(e,{operations:t,inputs:r}){switch(e.kind){case"input":if(!(e.name in r))throw new Error(`Unknown expression input '${e.name}'`);return;case"literal":if(Array.isArray(e.value)){for(const a of e.value)if(!Number.isFinite(a))throw new Error(`Expression literal array must contain only finite values, got ${a}`)}else if(!Number.isFinite(e.value))throw new Error(`Expression literal must be finite, got ${e.value}`);return;case"call":{const a=t[e.op];if(!a)throw new Error(`Unknown expression op '${e.op}'`);if(e.args.length!==a.arity)throw new Error(`Expression op '${e.op}' expects ${a.arity} args, got ${e.args.length}`);for(const s of e.args)k(s,{operations:t,inputs:r});return}default:throw new Error(`Unsupported expression node ${e.kind}`)}}function ct(e,t){return k(e,t),z(e,t)}function z(e,t){switch(e.kind){case"input":{const r=t.inputs[e.name];return t.laneIndex<r.size?t.formatInput(e.name):t.formatOutOfBoundsInput(e.name)}case"literal":return t.formatLiteral(e.value);case"call":{const r=t.operations[e.op],a=e.args.map(s=>z(s,t));return t.formatCall(r.symbol,a)}default:throw new Error(`Unsupported expression node ${e.kind}`)}}export{w as a,ot as i,ht as n,B as o,E as r,Y as s,ct as t};
