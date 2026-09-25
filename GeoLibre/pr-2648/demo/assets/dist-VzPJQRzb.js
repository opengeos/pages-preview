import{o as Pi,t as _i}from"./rolldown-runtime-CEgmsyvS.js";import{at as Ci,tt as Fe}from"./quaternion-DF1Daale.js";import{_ as bi}from"./expression-Cqv6w4A8.js";import{E as ye,X as Si,_ as Ne,_t as Be,gt as Li,ht as ee,it as te,lt as ie,mt as Y,ot as dt,t as ut,ut as wi,v as oe,xt as K}from"./dist-CtUxfRRE.js";import{a as je,n as Z,o as X}from"./buffer-transform-CjLF12DR.js";var gt=class extends X{constructor(e={}){const{id:t=bi("cube-geometry"),indices:i=!0}=e;super(i?{...e,id:t,topology:"triangle-list",indices:{size:1,value:Ai},attributes:{...Di,...e.attributes}}:{...e,id:t,topology:"triangle-list",indices:void 0,attributes:{...Fi,...e.attributes}})}},Ai=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),Ii=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),Ei=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),Oi=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),Ti=new Uint32Array([0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]),Ri=new Float32Array([1,-1,1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,-1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,1,1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,1,1,1,-1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1]),zi=new Float32Array([1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0]),Mi=new Float32Array([1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1]),ki=new Uint32Array([3,3,3,3,3,3,4,4,4,4,4,4,2,2,2,2,2,2,5,5,5,5,5,5,0,0,0,0,0,0,1,1,1,1,1,1]),Di={POSITION:{size:3,value:Ii},NORMAL:{size:3,value:Ei},TEXCOORD_0:{size:2,value:Oi},faceIndex:{size:1,value:Ti}},Fi={POSITION:{size:3,value:Ri},TEXCOORD_0:{size:2,value:zi},COLOR_0:{size:3,value:Mi},faceIndex:{size:1,value:ki}},Ni=`struct ArcUniforms {
  greatCircle: f32,
  useShortestPath: f32,
  numSegments: f32,
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  widthUnits: i32,
};

@group(0) @binding(auto) var<uniform> arc: ArcUniforms;
`,pt=`layout(std140) uniform arcUniforms {
  bool greatCircle;
  bool useShortestPath;
  float numSegments;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int widthUnits;
} arc;
`,Bi={name:"arc",source:Ni,vs:pt,fs:pt,uniformTypes:{greatCircle:"f32",useShortestPath:"f32",numSegments:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",widthUnits:"i32"}},ji=`const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct Attributes {
  @location(0) instanceSourcePositions: vec3<f32>,
  @location(1) instanceSourcePositions64Low: vec3<f32>,
  @location(2) instanceTargetPositions: vec3<f32>,
  @location(3) instanceTargetPositions64Low: vec3<f32>,
  @location(4) instanceSourceColors: vec4<f32>,
  @location(5) instanceTargetColors: vec4<f32>,
  @location(6) instanceWidths: f32,
  @location(7) instanceHeights: f32,
  @location(8) instanceTilts: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
  @location(3) isValid: f32,
};

fn paraboloid(
  distance: f32,
  sourceZ: f32,
  targetZ: f32,
  ratio: f32,
  height: f32
) -> f32 {
  let deltaZ = targetZ - sourceZ;
  let dh = distance * height;
  if (dh == 0.0) {
    return sourceZ + deltaZ * ratio;
  }
  let unitZ = deltaZ / dh;
  let p2 = unitZ * unitZ + 1.0;
  let dir = select(0.0, 1.0, deltaZ <= 0.0);
  let z0 = mix(sourceZ, targetZ, dir);
  let r = mix(ratio, 1.0 - ratio, dir);
  return sqrt(max(r * (p2 - r), 0.0)) * dh + z0;
}

fn getExtrusionOffset(lineClipspace: vec2<f32>, side: f32, width: f32) -> vec2<f32> {
  var direction = normalize(lineClipspace * project.viewportSize);
  direction = vec2<f32>(-direction.y, direction.x);
  return direction * side * width / 2.0;
}

fn getSegmentRatio(index: f32) -> f32 {
  return smoothstep(0.0, 1.0, index / max(arc.numSegments - 1.0, 1.0));
}

fn interpolateFlat(
  source: vec3<f32>,
  targetPosition: vec3<f32>,
  ratio: f32,
  height: f32,
  tiltDegrees: f32
) -> vec3<f32> {
  let distance = length(source.xy - targetPosition.xy);
  let z = paraboloid(distance, source.z, targetPosition.z, ratio, height);
  let tiltAngle = radians(tiltDegrees);
  let tiltDirection = normalize(targetPosition.xy - source.xy);
  let tilt = vec2<f32>(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
  return vec3<f32>(mix(source.xy, targetPosition.xy, ratio) + tilt, z * cos(tiltAngle));
}

// Great circle interpolation
// http://www.movable-type.co.uk/scripts/latlong.html
fn getAngularDistance(source: vec2<f32>, targetPosition: vec2<f32>) -> f32 {
  let sourceRadians = radians(source);
  let targetRadians = radians(targetPosition);
  let sinHalfDelta = sin((sourceRadians - targetRadians) / 2.0);
  let sinHalfDeltaSquared = sinHalfDelta * sinHalfDelta;
  let a = sinHalfDeltaSquared.y +
    cos(sourceRadians.y) * cos(targetRadians.y) * sinHalfDeltaSquared.x;
  return 2.0 * asin(sqrt(a));
}

fn interpolateGreatCircle(
  source: vec3<f32>,
  targetPosition: vec3<f32>,
  source3D: vec3<f32>,
  target3D: vec3<f32>,
  angularDistance: f32,
  ratio: f32,
  height: f32
) -> vec3<f32> {
  var longitudeLatitude: vec2<f32>;

  // If the angular distance is PI, use linear interpolation. Otherwise use spherical interpolation.
  if (abs(angularDistance - PI) < 0.001) {
    longitudeLatitude = (1.0 - ratio) * source.xy + ratio * targetPosition.xy;
  } else {
    let a = sin((1.0 - ratio) * angularDistance);
    let b = sin(ratio * angularDistance);
    let p = source3D.yxz * a + target3D.yxz * b;
    longitudeLatitude = degrees(vec2<f32>(
      atan2(p.y, -p.x),
      atan2(p.z, length(p.xy))
    ));
  }

  let z = paraboloid(
    angularDistance * EARTH_RADIUS,
    source.z,
    targetPosition.z,
    ratio,
    height
  );
  return vec3<f32>(longitudeLatitude, z);
}

@vertex
fn vertexMain(
  attributes: Attributes,
  @builtin(vertex_index) vertexIndex: u32,
  @builtin(instance_index) instanceIndex: u32
) -> Varyings {
  geometry.worldPosition = attributes.instanceSourcePositions;
  geometry.worldPositionAlt = attributes.instanceTargetPositions;

  let segmentIndex = f32(vertexIndex / 2u);
  let segmentSide = select(-1.0, 1.0, vertexIndex % 2u == 1u);
  var segmentRatio = getSegmentRatio(segmentIndex);
  let previousRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
  var nextRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
  // If this is the first point, use next - current as direction.
  var indexDirection = select(-1.0, 1.0, segmentIndex <= 0.0);
  var isValid = 1.0;

  var currentClip: vec4<f32>;
  var nextClip: vec4<f32>;

  if (
    (arc.greatCircle != 0.0 || project.projectionMode == PROJECTION_MODE_GLOBE) &&
    project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT
  ) {
    let source = project_globe_(vec3<f32>(attributes.instanceSourcePositions.xy, 0.0));
    let targetPosition = project_globe_(vec3<f32>(attributes.instanceTargetPositions.xy, 0.0));
    let angularDistance = getAngularDistance(
      attributes.instanceSourcePositions.xy,
      attributes.instanceTargetPositions.xy
    );

    let previousPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      previousRatio,
      attributes.instanceHeights
    );
    var currentPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      segmentRatio,
      attributes.instanceHeights
    );
    var nextPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      nextRatio,
      attributes.instanceHeights
    );

    if (abs(currentPosition.x - previousPosition.x) > 180.0) {
      indexDirection = -1.0;
      isValid = 0.0;
    } else if (abs(currentPosition.x - nextPosition.x) > 180.0) {
      indexDirection = 1.0;
      isValid = 0.0;
    }
    nextPosition = select(nextPosition, previousPosition, indexDirection < 0.0);
    nextRatio = select(nextRatio, previousRatio, indexDirection < 0.0);

    if (isValid == 0.0) {
      // Split at the antimeridian.
      nextPosition.x += select(360.0, -360.0, nextPosition.x > 0.0);
      let ratio = (
        select(-180.0, 180.0, currentPosition.x > 0.0) - currentPosition.x
      ) / (nextPosition.x - currentPosition.x);
      currentPosition = mix(currentPosition, nextPosition, ratio);
      segmentRatio = mix(segmentRatio, nextRatio, ratio);
    }

    let currentPosition64Low = mix(
      attributes.instanceSourcePositions64Low,
      attributes.instanceTargetPositions64Low,
      segmentRatio
    );
    let nextPosition64Low = mix(
      attributes.instanceSourcePositions64Low,
      attributes.instanceTargetPositions64Low,
      nextRatio
    );
    let currentProjection = project_position_to_clipspace_and_commonspace(
      currentPosition,
      currentPosition64Low,
      ZERO_OFFSET
    );
    currentClip = currentProjection.clipPosition;
    nextClip = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
    geometry.position = currentProjection.commonPosition;
  } else {
    var sourceWorld = attributes.instanceSourcePositions;
    var targetWorld = attributes.instanceTargetPositions;
    if (arc.useShortestPath != 0.0) {
      sourceWorld.x = ((sourceWorld.x + 180.0) % 360.0) - 180.0;
      targetWorld.x = ((targetWorld.x + 180.0) % 360.0) - 180.0;
      let deltaLongitude = targetWorld.x - sourceWorld.x;
      if (deltaLongitude > 180.0) {
        targetWorld.x -= 360.0;
      }
      if (deltaLongitude < -180.0) {
        sourceWorld.x -= 360.0;
      }
    }

    let source = project_position_vec3_f64(
      sourceWorld,
      attributes.instanceSourcePositions64Low
    );
    let targetPosition = project_position_vec3_f64(
      targetWorld,
      attributes.instanceTargetPositions64Low
    );

    // Common x at longitude=-180.
    var antimeridianX = 0.0;
    if (arc.useShortestPath != 0.0) {
      if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
        antimeridianX = -(project.coordinateOrigin.x + 180.0) / 360.0 * TILE_SIZE;
      }
      let thresholdRatio = (antimeridianX - source.x) / (targetPosition.x - source.x);
      if (previousRatio <= thresholdRatio && nextRatio > thresholdRatio) {
        isValid = 0.0;
        indexDirection = sign(segmentRatio - thresholdRatio);
        segmentRatio = thresholdRatio;
      }
    }

    nextRatio = select(nextRatio, previousRatio, indexDirection < 0.0);
    var currentPosition = interpolateFlat(
      source,
      targetPosition,
      segmentRatio,
      attributes.instanceHeights,
      attributes.instanceTilts
    );
    var nextPosition = interpolateFlat(
      source,
      targetPosition,
      nextRatio,
      attributes.instanceHeights,
      attributes.instanceTilts
    );

    if (arc.useShortestPath != 0.0 && nextPosition.x < antimeridianX) {
      currentPosition.x += TILE_SIZE;
      nextPosition.x += TILE_SIZE;
    }

    currentClip = project_common_position_to_clipspace(vec4<f32>(currentPosition, 1.0));
    nextClip = project_common_position_to_clipspace(vec4<f32>(nextPosition, 1.0));
    geometry.position = vec4<f32>(currentPosition, 1.0);
  }

  geometry.uv = vec2<f32>(segmentRatio, segmentSide);
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);

  let widthPixels = clamp(
    project_unit_size_to_pixel(attributes.instanceWidths * arc.widthScale, arc.widthUnits),
    arc.widthMinPixels,
    arc.widthMaxPixels
  );
#ifdef ANTIALIASING
  var offset = getExtrusionOffset(
#else
  let offset = getExtrusionOffset(
#endif
    (nextClip.xy - currentClip.xy) * indexDirection,
    segmentSide,
    widthPixels
  );
#ifdef ANTIALIASING
  let halfWidthPixels = length(offset);
  if (halfWidthPixels > 0.0) {
    // Keep the declared edge at abs(uv.y) == 1 while rasterizing the outer half of the centered
    // one-device-pixel coverage ramp.
    let coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
    offset *= coverageScale;
    geometry.uv.y *= coverageScale;
  }
#endif

  var output: Varyings;
  output.position = currentClip + vec4<f32>(project_pixel_size_to_clipspace(offset), 0.0, 0.0);
  let color = mix(attributes.instanceSourceColors, attributes.instanceTargetColors, segmentRatio);
  output.color = vec4<f32>(color.rgb, color.a * layer.opacity);
  output.uv = geometry.uv;
  output.pickingColor = geometry.pickingColor;
  output.isValid = isValid;
  return output;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
#ifdef ANTIALIASING
  let edgeCoord = abs(varyings.uv.y);
  let edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
#endif

  if (varyings.isValid == 0.0) {
    discard;
  }

#ifdef ANTIALIASING
  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }
#endif
  var color = varyings.color;
#ifdef ANTIALIASING
  // Feather one device pixel across the width. Arc segments meet lengthwise, so only soften the
  // two outer edges of the strip.
  color.a *= smoothedge(0.0, edgePixels);
#endif
  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }
  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + color.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      }
    }
  }
  return deckgl_premultiplied_alpha(color);
}
`,Gi=`#version 300 es
#define SHADER_NAME arc-layer-vertex-shader
in vec4 instanceSourceColors;
in vec4 instanceTargetColors;
in vec3 instanceSourcePositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions;
in vec3 instanceTargetPositions64Low;
in float instanceWidths;
in float instanceHeights;
in float instanceTilts;
out vec4 vColor;
out vec2 uv;
out float isValid;
float paraboloid(float distance, float sourceZ, float targetZ, float ratio) {
float deltaZ = targetZ - sourceZ;
float dh = distance * instanceHeights;
if (dh == 0.0) {
return sourceZ + deltaZ * ratio;
}
float unitZ = deltaZ / dh;
float p2 = unitZ * unitZ + 1.0;
float dir = step(deltaZ, 0.0);
float z0 = mix(sourceZ, targetZ, dir);
float r = mix(ratio, 1.0 - ratio, dir);
return sqrt(r * (p2 - r)) * dh + z0;
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
float getSegmentRatio(float index) {
return smoothstep(0.0, 1.0, index / (arc.numSegments - 1.0));
}
vec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {
float distance = length(source.xy - target.xy);
float z = paraboloid(distance, source.z, target.z, segmentRatio);
float tiltAngle = radians(instanceTilts);
vec2 tiltDirection = normalize(target.xy - source.xy);
vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
return vec3(
mix(source.xy, target.xy, segmentRatio) + tilt,
z * cos(tiltAngle)
);
}
float getAngularDist (vec2 source, vec2 target) {
vec2 sourceRadians = radians(source);
vec2 targetRadians = radians(target);
vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);
vec2 shd_sq = sin_half_delta * sin_half_delta;
float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;
return 2.0 * asin(sqrt(a));
}
vec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {
vec2 lngLat;
if(abs(angularDist - PI) < 0.001) {
lngLat = (1.0 - t) * source.xy + t * target.xy;
} else {
float a = sin((1.0 - t) * angularDist);
float b = sin(t * angularDist);
vec3 p = source3D.yxz * a + target3D.yxz * b;
lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));
}
float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);
return vec3(lngLat, z);
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
float segmentIndex = float(gl_VertexID / 2);
float segmentSide = mod(float(gl_VertexID), 2.) == 0. ? -1. : 1.;
float segmentRatio = getSegmentRatio(segmentIndex);
float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
float nextSegmentRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
isValid = 1.0;
uv = vec2(segmentRatio, segmentSide);
geometry.uv = uv;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec4 curr;
vec4 next;
vec3 source;
vec3 target;
if ((arc.greatCircle || project.projectionMode == PROJECTION_MODE_GLOBE) && project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));
target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));
float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);
vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);
vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);
vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);
if (abs(currPos.x - prevPos.x) > 180.0) {
indexDir = -1.0;
isValid = 0.0;
} else if (abs(currPos.x - nextPos.x) > 180.0) {
indexDir = 1.0;
isValid = 0.0;
}
nextPos = indexDir < 0.0 ? prevPos : nextPos;
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
if (isValid == 0.0) {
nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;
float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);
currPos = mix(currPos, nextPos, t);
segmentRatio = mix(segmentRatio, nextSegmentRatio, t);
}
vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);
vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);
curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);
next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));
} else {
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
if (arc.useShortestPath) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng > 180.) target_world.x -= 360.;
if (deltaLng < -180.) source_world.x -= 360.;
}
source = project_position(source_world, instanceSourcePositions64Low);
target = project_position(target_world, instanceTargetPositions64Low);
float antiMeridianX = 0.0;
if (arc.useShortestPath) {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
antiMeridianX = -(project.coordinateOrigin.x + 180.) / 360. * TILE_SIZE;
}
float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);
if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {
isValid = 0.0;
indexDir = sign(segmentRatio - thresholdRatio);
segmentRatio = thresholdRatio;
}
}
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
vec3 currPos = interpolateFlat(source, target, segmentRatio);
vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);
if (arc.useShortestPath) {
if (nextPos.x < antiMeridianX) {
currPos.x += TILE_SIZE;
nextPos.x += TILE_SIZE;
}
}
curr = project_common_position_to_clipspace(vec4(currPos, 1.0));
next = project_common_position_to_clipspace(vec4(nextPos, 1.0));
geometry.position = vec4(currPos, 1.0);
}
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * arc.widthScale, arc.widthUnits),
arc.widthMinPixels, arc.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset((next.xy - curr.xy) * indexDir, segmentSide, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float halfWidthPixels = length(offset.xy);
if (halfWidthPixels > 0.0) {
float coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
offset.xy *= coverageScale;
uv.y *= coverageScale;
}
geometry.uv = uv;
#endif
DECKGL_FILTER_GL_POSITION(curr, geometry);
gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);
vColor = vec4(color.rgb, color.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Ui=`#version 300 es
#define SHADER_NAME arc-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
in float isValid;
out vec4 fragColor;
void main(void) {
#ifdef ANTIALIASING
float edgeCoord = abs(uv.y);
float edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
#endif
if (isValid == 0.0) {
discard;
}
#ifdef ANTIALIASING
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
#endif
fragColor = vColor;
geometry.uv = uv;
#ifdef ANTIALIASING
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Pe=[0,0,0,255],Wi={getSourcePosition:{type:"accessor",value:e=>e.sourcePosition},getTargetPosition:{type:"accessor",value:e=>e.targetPosition},getSourceColor:{type:"accessor",value:Pe},getTargetColor:{type:"accessor",value:Pe},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},greatCircle:!1,numSegments:{type:"number",value:50,min:1},widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0},antialiasing:!1},Ge=class extends oe{getBounds(){return this.getAttributeManager()?.getBounds(["instanceSourcePositions","instanceTargetPositions"])}getShaders(){const{antialiasing:e}=this.props;return super.getShaders({vs:Gi,fs:Ui,source:ji,defines:e?{ANTIALIASING:1}:{},modules:[ie,ee,te,Bi]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceSourceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getSourceColor",defaultValue:Pe},instanceTargetColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getTargetColor",defaultValue:Pe},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}updateState(e){super.updateState(e);const{props:t,oldProps:i,changeFlags:o}=e;(o.extensionsChanged||t.antialiasing!==i.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{widthUnits:t,widthScale:i,widthMinPixels:o,widthMaxPixels:n,greatCircle:s,wrapLongitude:r,numSegments:a}=this.props,c={numSegments:a,widthUnits:Y[t],widthScale:i,widthMinPixels:o,widthMaxPixels:n,greatCircle:s,useShortestPath:r},l=this.state.model;l.shaderInputs.setProps({arc:c}),l.setVertexCount(a*2),l.draw(this.context.renderPass)}_getModel(){return new Z(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),topology:"triangle-strip",isInstanced:!0})}};Ge.layerName="ArcLayer",Ge.defaultProps=Wi;var Vi=new Uint32Array([0,2,1,0,3,2]),Hi=new Float32Array([0,1,0,0,1,0,1,1]);function Zi(e,t){if(!t)return $i(e);const i=Math.max(Math.abs(e[0][0]-e[3][0]),Math.abs(e[1][0]-e[2][0])),o=Math.max(Math.abs(e[1][1]-e[0][1]),Math.abs(e[2][1]-e[3][1])),n=Math.ceil(i/t)+1,s=Math.ceil(o/t)+1,r=(n-1)*(s-1)*6,a=new Uint32Array(r),c=new Float32Array(n*s*2),l=new Float64Array(n*s*3);let d=0,g=0;for(let h=0;h<n;h++){const v=h/(n-1);for(let _=0;_<s;_++){const C=_/(s-1),S=Ki(e,v,C);l[d*3+0]=S[0],l[d*3+1]=S[1],l[d*3+2]=S[2]||0,c[d*2+0]=v,c[d*2+1]=1-C,h>0&&_>0&&(a[g++]=d-s,a[g++]=d-s-1,a[g++]=d-1,a[g++]=d-s,a[g++]=d-1,a[g++]=d),d++}}return{vertexCount:r,positions:l,indices:a,texCoords:c}}function $i(e){const t=new Float64Array(12);for(let i=0;i<e.length;i++)t[i*3+0]=e[i][0],t[i*3+1]=e[i][1],t[i*3+2]=e[i][2]||0;return{vertexCount:6,positions:t,indices:Vi,texCoords:Hi}}function Ki(e,t,i){return Fe(Fe(e[0],e[1],i),Fe(e[3],e[2],i),t)}var Xi=`
struct BitmapUniforms {
  bounds: vec4<f32>,
  coordinateConversion: f32,
  desaturate: f32,
  tintColor: vec3<f32>,
  transparentColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> bitmap: BitmapUniforms;
@group(0) @binding(auto) var bitmapTexture: texture_2d<f32>;
@group(0) @binding(auto) var bitmapTextureSampler: sampler;
`,ht=`layout(std140) uniform bitmapUniforms {
  vec4 bounds;
  float coordinateConversion;
  float desaturate;
  vec3 tintColor;
  vec4 transparentColor;
} bitmap;
`,Ji={name:"bitmap",source:Xi,vs:ht,fs:ht,uniformTypes:{bounds:"vec4<f32>",coordinateConversion:"f32",desaturate:"f32",tintColor:"vec3<f32>",transparentColor:"vec4<f32>"}},Yi=`struct Attributes {
  @location(0) positions: vec3<f32>,
  @location(1) positions64Low: vec3<f32>,
  @location(2) texCoords: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vTexCoord: vec2<f32>,
  @location(1) vTexPos: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
  @location(3) pickingDepth: f32,
};

// from degrees to Web Mercator
fn lnglat_to_mercator(lnglat: vec2<f32>) -> vec2<f32> {
  let x = lnglat.x;
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
fn mercator_to_lnglat(xy: vec2<f32>) -> vec2<f32> {
  let position = xy / WORLD_SCALE;
  return degrees(vec2<f32>(
    position.x - PI,
    atan(exp(position.y - PI)) * 2.0 - PI * 0.5
  ));
}

fn color_desaturate(colorValue: vec3<f32>) -> vec3<f32> {
  let luminance = (colorValue.r + colorValue.g + colorValue.b) * 0.333333333;
  return mix(colorValue, vec3<f32>(luminance), bitmap.desaturate);
}

fn color_tint(colorValue: vec3<f32>) -> vec3<f32> {
  return colorValue * bitmap.tintColor;
}

fn apply_opacity(colorValue: vec3<f32>, alpha: f32) -> vec4<f32> {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4<f32>(colorValue, alpha);
  }
  let blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  let highLightRatio = alpha / blendedAlpha;
  let blendedRGB = mix(bitmap.transparentColor.rgb, colorValue, highLightRatio);
  return vec4<f32>(blendedRGB, blendedAlpha);
}

fn getUV(position: vec2<f32>) -> vec2<f32> {
  return vec2<f32>(
    (position.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (position.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}

// Pack the top 12 bits of two normalized floats into three 8-bit values.
fn packUVsIntoRGB(uv: vec2<f32>) -> vec3<f32> {
  let uv8bit = floor(uv * 256.0);
  let uvFraction = fract(uv * 256.0);
  let uvFraction4bit = floor(uvFraction * 16.0);
  let fractions = uvFraction4bit.x + uvFraction4bit.y * 16.0;
  return vec3<f32>(uv8bit, fractions) / 255.0;
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var output: Varyings;
  geometry.worldPosition = attributes.positions;
  geometry.uv = attributes.texCoords;
  geometry.pickingColor = picking_getPickingColorFromIndex(0u);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    attributes.positions,
    attributes.positions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  output.position = projectedPosition.clipPosition;
  output.vTexCoord = attributes.texCoords;
  output.vTexPos = vec2<f32>(0.0);
  output.pickingColor = geometry.pickingColor;
  output.pickingDepth = output.position.z / output.position.w;

  if (bitmap.coordinateConversion < -0.5) {
    output.vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    output.vTexPos = geometry.worldPosition.xy;
  }

  return output;
}

@fragment
fn fragmentMain(input: Varyings) -> @location(0) vec4<f32> {
  var uv = input.vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    uv = getUV(mercator_to_lnglat(input.vTexPos));
  } else if (bitmap.coordinateConversion > 0.5) {
    uv = getUV(lnglat_to_mercator(input.vTexPos));
  }

  let bitmapColor = textureSample(bitmapTexture, bitmapTextureSampler, uv);
  var fragColor = apply_opacity(
    color_tint(color_desaturate(bitmapColor.rgb)),
    bitmapColor.a * layer.opacity
  );

  geometry.uv = uv;

  if (picking.isActive > 0.5) {
    if (picking.isAttribute > 0.5) {
      return vec4<f32>(input.pickingDepth, 0.0, 0.0, 1.0);
    }
    return vec4<f32>(packUVsIntoRGB(uv), 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(input.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,qi=`#version 300 es
#define SHADER_NAME bitmap-layer-vertex-shader

in vec2 texCoords;
in vec3 positions;
in vec3 positions64Low;

out vec2 vTexCoord;
out vec2 vTexPos;

const vec3 pickingColor = vec3(1.0, 0.0, 0.0);

void main(void) {
  geometry.worldPosition = positions;
  geometry.uv = texCoords;
  geometry.pickingColor = pickingColor;

  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTexCoord = texCoords;

  if (bitmap.coordinateConversion < -0.5) {
    vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    vTexPos = geometry.worldPosition.xy;
  }

  vec4 color = vec4(0.0);
  DECKGL_FILTER_COLOR(color, geometry);
}
`,Qi=`#version 300 es
#define SHADER_NAME bitmap-layer-fragment-shader

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D bitmapTexture;

in vec2 vTexCoord;
in vec2 vTexPos;

out vec4 fragColor;

/* projection utils */
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / PI / 2.0;

// from degrees to Web Mercator
vec2 lnglat_to_mercator(vec2 lnglat) {
  float x = lnglat.x;
  float y = clamp(lnglat.y, -89.9, 89.9);
  return vec2(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
vec2 mercator_to_lnglat(vec2 xy) {
  xy /= WORLD_SCALE;
  return degrees(vec2(
    xy.x - PI,
    atan(exp(xy.y - PI)) * 2.0 - PI * 0.5
  ));
}
/* End projection utils */

// apply desaturation
vec3 color_desaturate(vec3 color) {
  float luminance = (color.r + color.g + color.b) * 0.333333333;
  return mix(color, vec3(luminance), bitmap.desaturate);
}

// apply tint
vec3 color_tint(vec3 color) {
  return color * bitmap.tintColor;
}

// blend with background color
vec4 apply_opacity(vec3 color, float alpha) {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4(color, alpha);
  }
  float blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  float highLightRatio = alpha / blendedAlpha;
  vec3 blendedRGB = mix(bitmap.transparentColor.rgb, color, highLightRatio);
  return vec4(blendedRGB, blendedAlpha);
}

vec2 getUV(vec2 pos) {
  return vec2(
    (pos.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (pos.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}


vec3 packUVsIntoRGB(vec2 uv) {
  // Extract the top 8 bits. We want values to be truncated down so we can add a fraction
  vec2 uv8bit = floor(uv * 256.);

  // Calculate the normalized remainders of u and v parts that do not fit into 8 bits
  // Scale and clamp to 0-1 range
  vec2 uvFraction = fract(uv * 256.);
  vec2 uvFraction4bit = floor(uvFraction * 16.);

  // Remainder can be encoded in blue channel, encode as 4 bits for pixel coordinates
  float fractions = uvFraction4bit.x + uvFraction4bit.y * 16.;

  return vec3(uv8bit, fractions) / 255.;
}


void main(void) {
  vec2 uv = vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    vec2 lnglat = mercator_to_lnglat(vTexPos);
    uv = getUV(lnglat);
  } else if (bitmap.coordinateConversion > 0.5) {
    vec2 commonPos = lnglat_to_mercator(vTexPos);
    uv = getUV(commonPos);
  }
  vec4 bitmapColor = texture(bitmapTexture, uv);

  fragColor = apply_opacity(color_tint(color_desaturate(bitmapColor.rgb)), bitmapColor.a * layer.opacity);

  geometry.uv = uv;
  DECKGL_FILTER_COLOR(fragColor, geometry);

  if (bool(picking.isActive) && !bool(picking.isAttribute)) {
    // Since instance information is not used, we can use picking color for pixel index
    fragColor.rgb = packUVsIntoRGB(uv);
  }
}
`,eo={image:{type:"image",value:null,async:!0},bounds:{type:"array",value:[1,0,0,1],compare:!0},_imageCoordinateSystem:"default",desaturate:{type:"number",min:0,max:1,value:0},transparentColor:{type:"color",value:[0,0,0,0]},tintColor:{type:"color",value:[255,255,255]},textureParameters:{type:"object",ignore:!0,value:null}},Ue=class extends oe{getShaders(){return super.getShaders({vs:qi,fs:Qi,source:Yi,modules:[ee,ie,te,Ji]})}initializeState(){const e=this.getAttributeManager(),t=!0;e.add({indices:{size:1,isIndexed:!0,update:i=>i.value=this.state.mesh.indices,noAlloc:t},positions:{size:3,type:"float64",fp64:this.use64bitPositions(),update:i=>i.value=this.state.mesh.positions,noAlloc:t},texCoords:{size:2,update:i=>i.value=this.state.mesh.texCoords,noAlloc:t}})}updateState({props:e,oldProps:t,changeFlags:i}){const o=this.getAttributeManager();if(i.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),o.invalidateAll()),e.bounds!==t.bounds){const n=this.state.mesh,s=this._createMesh();this.state.model.setVertexCount(s.vertexCount);for(const r in s)n&&n[r]!==s[r]&&o.invalidate(r);this.setState({mesh:s,...this._getCoordinateUniforms()})}else e._imageCoordinateSystem!==t._imageCoordinateSystem&&this.setState(this._getCoordinateUniforms())}getPickingInfo(e){const{image:t}=this.props,i=e.info;if(!i.color||!t)return i.bitmap=null,i;const{width:o,height:n}=t;i.index=0;const s=to(i.color);return i.bitmap={size:{width:o,height:n},uv:s,pixel:[Math.floor(s[0]*o),Math.floor(s[1]*n)]},i}disablePickingIndex(){this.setState({disablePicking:!0})}restorePickingColors(){this.setState({disablePicking:!1})}_updateAutoHighlight(e){super._updateAutoHighlight({...e,color:this.encodePickingColor(0)})}_createMesh(){const{bounds:e}=this.props;let t=e;return vt(e)&&(t=[[e[0],e[1]],[e[0],e[3]],[e[2],e[3]],[e[2],e[1]]]),Zi(t,this.context.viewport.resolution)}_getModel(){const e=this.context.device.type==="webgpu"?this.getAttributeManager().getBufferLayouts({isInstanced:!1}).filter(t=>t.name!=="indices"):this.getAttributeManager().getBufferLayouts();return new Z(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:e,topology:"triangle-list",isInstanced:!1})}draw(e){const{shaderModuleProps:t}=e,{model:i,coordinateConversion:o,bounds:n,disablePicking:s}=this.state,{image:r,desaturate:a,transparentColor:c,tintColor:l}=this.props;if(!(t.picking.isActive&&s)&&r&&i){const d={bitmapTexture:r,bounds:n,coordinateConversion:o,desaturate:a,tintColor:l.slice(0,3).map(g=>g/255),transparentColor:c.map(g=>g/255)};i.shaderInputs.setProps({bitmap:d}),i.draw(this.context.renderPass)}}_getCoordinateUniforms(){let{_imageCoordinateSystem:e}=this.props;if(e!=="default"){const{bounds:t}=this.props;if(!vt(t))throw new Error("_imageCoordinateSystem only supports rectangular bounds");const i=this.context.viewport.resolution?"lnglat":"cartesian";if(e=e==="lnglat"?"lnglat":"cartesian",e==="lnglat"&&i==="cartesian")return{coordinateConversion:-1,bounds:t};if(e==="cartesian"&&i==="lnglat"){const o=dt([t[0],t[1]]),n=dt([t[2],t[3]]);return{coordinateConversion:1,bounds:[o[0],o[1],n[0],n[1]]}}}return{coordinateConversion:0,bounds:[0,0,0,0]}}};Ue.layerName="BitmapLayer",Ue.defaultProps=eo;function to(e){const[t,i,o]=e,n=(o&240)/256;return[(t+(o&15)/16)/256,(i+n)/256]}function vt(e){return Number.isFinite(e[0])}var xt=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,io={name:"icon",vs:xt,fs:xt,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},oo=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,no=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,so=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = geometry.pickingColor;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`;function ro(e){return so.replace("PICKING_COLOR_ATTRIBUTE",e?"@location(10) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",e?"picking_getPickingColorFromIndex(inp.rowIndexes)":"picking_getPickingColorFromIndex(inp.instanceIndex)")}var ao=1024,lo=4,mt=()=>{},yt={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},co={x:0,y:0,width:0,height:0};function fo(e){return Math.pow(2,Math.ceil(Math.log2(e)))}function uo(e,t,i,o){const n=Math.min(i/t.width,o/t.height),s=Math.floor(t.width*n),r=Math.floor(t.height*n);return n===1?{image:t,width:s,height:r}:(e.canvas.height=r,e.canvas.width=s,e.clearRect(0,0,s,r),e.drawImage(t,0,0,t.width,t.height,0,0,s,r),{image:e.canvas,width:s,height:r})}function fe(e){return e&&(e.id||e.url)}function Pt(e){const{device:t}=e;t.type==="webgl"?e.generateMipmapsWebGL():t.type==="webgpu"&&t.generateMipmapsWebGPU(e)}function go(e,t,i,o){const{width:n,height:s,device:r}=e,a=r.createTexture({format:"rgba8unorm",width:t,height:i,sampler:o,mipLevels:r.getMipLevelCount(t,i)}),c=r.createCommandEncoder();c.copyTextureToTexture({sourceTexture:e,destinationTexture:a,width:n,height:s});const l=c.finish();return r.submit(l),Pt(a),e.destroy(),a}function _t(e,t,i){for(let o=0;o<t.length;o++){const{icon:n,xOffset:s}=t[o],r=fe(n);e[r]={...n,x:s,y:i}}}function po({icons:e,buffer:t,mapping:i={},xOffset:o=0,yOffset:n=0,rowHeight:s=0,canvasWidth:r}){let a=[];for(let c=0;c<e.length;c++){const l=e[c];if(!i[fe(l)]){const{height:d,width:g}=l;o+g+t>r&&(_t(i,a,n),o=0,n=s+n+t,s=0,a=[]),a.push({icon:l,xOffset:o}),o=o+g+t,s=Math.max(s,d)}}return a.length>0&&_t(i,a,n),{mapping:i,rowHeight:s,xOffset:o,yOffset:n,canvasWidth:r,canvasHeight:fo(s+n+t)}}function ho(e,t,i){if(!e||!t)return null;i=i||{};const o={},{iterable:n,objectInfo:s}=ye(e);for(const r of n){s.index++;const a=t(r,s),c=fe(a);if(!a)throw new Error("Icon is missing.");if(!a.url)throw new Error("Icon url is missing.");!o[c]&&(!i[c]||a.url!==i[c].url)&&(o[c]={...a,source:r,sourceIndex:s.index})}return o}var vo=class{constructor(e,{onUpdate:t=mt,onError:i=mt}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=lo,this._canvasWidth=ao,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=i}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){const t=this._autoPacking?fe(e):e;return this._mapping[t]||co}setProps({loadOptions:e,autoPacking:t,iconAtlas:i,iconMapping:o,textureParameters:n}){e&&(this._loadOptions=e),t!==void 0&&(this._autoPacking=t),o&&(this._mapping=o),i&&(this._texture?.delete(),this._texture=null,this._externalTexture=i),n&&(this._samplerParameters=n)}get isLoaded(){return this._pendingCount===0}packIcons(e,t){if(!this._autoPacking||typeof document>"u")return;const i=Object.values(ho(e,t,this._mapping)||{});if(i.length>0){const{mapping:o,xOffset:n,yOffset:s,rowHeight:r,canvasHeight:a}=po({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=r,this._mapping=o,this._xOffset=n,this._yOffset=s,this._canvasHeight=a,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||yt,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=go(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||yt)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){const t=this._canvas.getContext("2d",{willReadFrequently:!0});for(const i of e)this._pendingCount++,Ci(i.url,this._loadOptions).then(o=>{const n=fe(i),s=this._mapping[n],{x:r,y:a,width:c,height:l}=s,{image:d,width:g,height:h}=uo(t,o,c,l),v=r+(c-g)/2,_=a+(l-h)/2;this._texture?.copyExternalImage({image:d,x:v,y:_,width:g,height:h}),s.x=v,s.y=_,s.width=g,s.height=h,this._texture&&Pt(this._texture),this.onUpdate(g!==c||h!==l)}).catch(o=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:o})}).finally(()=>{this._pendingCount--})}},Ct=[0,0,0,255],xo={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:e=>e.position},getIcon:{type:"accessor",value:e=>e.icon},getColor:{type:"accessor",value:Ct},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}},de=class extends oe{getShaders(){const e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:oo,fs:no,source:ro(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[ie,ee,te,io]})}initializeState(){this.state={iconManager:new vo(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getSize",defaultValue:1},instanceIconDefs:{size:7,bufferGroup:"icon-instance-data",accessor:"getIcon",transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,bufferGroup:"icon-instance-data",accessor:"getColor",defaultValue:Ct},instanceAngles:{size:1,transition:!0,bufferGroup:"icon-instance-data",accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,bufferGroup:"icon-instance-data",accessor:"getPixelOffset"},...this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{}})}updateState(e){super.updateState(e);const{props:t,oldProps:i,changeFlags:o}=e,n=this.getAttributeManager(),{iconAtlas:s,iconMapping:r,data:a,getIcon:c,textureParameters:l}=t,{iconManager:d}=this.state;if(typeof s=="string")return;const g=s||this.internalState.isAsyncPropLoading("iconAtlas");d.setProps({loadOptions:t.loadOptions,autoPacking:!g,iconAtlas:s,iconMapping:g?r:null,textureParameters:l}),g?i.iconMapping!==t.iconMapping&&n.invalidate("getIcon"):(o.dataChanged||o.updateTriggersChanged&&(o.updateTriggersChanged.all||o.updateTriggersChanged.getIcon))&&d.packIcons(a,c),o.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),n.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){this._drawModel(this.state.model)}_drawModel(e){const{sizeScale:t,sizeBasis:i,sizeMinPixels:o,sizeMaxPixels:n,sizeUnits:s,billboard:r,alphaCutoff:a}=this.props,{iconManager:c}=this.state,l=c.getTexture();if(l){const d={iconsTexture:l,iconsTextureDim:[l.width,l.height],sizeUnits:Y[s],sizeScale:t,sizeBasis:i==="height"?1:0,sizeMinPixels:o,sizeMaxPixels:n,billboard:r,alphaCutoff:a};e.shaderInputs.setProps({icon:d}),e.draw(this.context.renderPass)}}_getModel(e=this.props.id){const t=[-1,-1,1,-1,-1,1,1,1];return new Z(this.context.device,{...this.getShaders(),id:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new X({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array(t)}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){const t=this.getCurrentLayer()?.props.onIconError;t?t(e):K.error(e.error.message)()}getInstanceIconDef(e){const{x:t,y:i,width:o,height:n,mask:s,anchorX:r=o/2,anchorY:a=n/2}=this.state.iconManager.getIconMapping(e);return[o/2-r,n/2-a,t,i,o,n,s?1:0]}};de.defaultProps=xo,de.layerName="IconLayer";var bt=`layout(std140) uniform lineUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float useShortestPath;
  highp int widthUnits;
} line;
`,mo={name:"line",source:"",vs:bt,fs:bt,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",useShortestPath:"f32",widthUnits:"i32"}},yo=`// ---------- Helper Structures & Functions ----------

// Placeholder filter functions.
fn deckgl_filter_size(offset: vec3<f32>, geometry: Geometry) -> vec3<f32> {
  return offset;
}
fn deckgl_filter_gl_position(p: vec4<f32>, geometry: Geometry) -> vec4<f32> {
  if (picking.isAttribute > 0.5) {
    // For depth picking, write normalized depth into the picking payload.
    // This mirrors the legacy DECKGL_FILTER_GL_POSITION hook on WebGL.
  }
  return p;
}

// Compute an extrusion offset given a line direction (in clipspace),
// an offset direction (-1 or 1), and a width in pixels.
// Assumes a uniform "project" with a viewportSize field is available.
fn getExtrusionOffset(line_clipspace: vec2<f32>, offset_direction: f32, width: f32) -> vec2<f32> {
  // project.viewportSize should be provided as a uniform (not shown here)
  let dir_screenspace = normalize(line_clipspace * project.viewportSize);
  // Rotate by 90\xB0: (x,y) becomes (-y,x)
  let rotated = vec2<f32>(-dir_screenspace.y, dir_screenspace.x);
  return rotated * offset_direction * width / 2.0;
}

// Splits the line between two points at a given x coordinate.
// Interpolates the y and z components.
fn splitLine(a: vec3<f32>, b: vec3<f32>, x: f32) -> vec3<f32> {
  let t: f32 = (x - a.x) / (b.x - a.x);
  return vec3<f32>(x, a.yz + t * (b.yz - a.yz));
}

// ---------- Uniforms & Global Structures ----------

struct LineUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  useShortestPath: f32,
  widthUnits: i32,
};

@group(0) @binding(0)
var<uniform> line: LineUniforms;



// ---------- Vertex Output Structure ----------

struct Varyings {
  @builtin(position) gl_Position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
};

// ---------- Vertex Shader Entry Point ----------

@vertex
fn vertexMain(
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) instanceSourcePositions: vec3<f32>,
  @location(2) instanceTargetPositions: vec3<f32>,
  @location(3) instanceSourcePositions64Low: vec3<f32>,
  @location(4) instanceTargetPositions64Low: vec3<f32>,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceWidths: f32
) -> Varyings {
  geometry.worldPosition = instanceSourcePositions;
  geometry.worldPositionAlt = instanceTargetPositions;

  var source_world: vec3<f32> = instanceSourcePositions;
  var target_world: vec3<f32> = instanceTargetPositions;
  var source_world_64low: vec3<f32> = instanceSourcePositions64Low;
  var target_world_64low: vec3<f32> = instanceTargetPositions64Low;

  // Apply shortest-path adjustments if needed.
  if (line.useShortestPath > 0.5 || line.useShortestPath < -0.5) {
    source_world.x = (source_world.x + 180.0 % 360.0) - 180.0;
    target_world.x = (target_world.x + 180.0 % 360.0) - 180.0;
    let deltaLng: f32 = target_world.x - source_world.x;

    if (deltaLng * line.useShortestPath > 180.0) {
      source_world.x = source_world.x + 360.0 * line.useShortestPath;
      source_world = splitLine(source_world, target_world, 180.0 * line.useShortestPath);
      source_world_64low = vec3<f32>(0.0, 0.0, 0.0);
    } else if (deltaLng * line.useShortestPath < -180.0) {
      target_world.x = target_world.x + 360.0 * line.useShortestPath;
      target_world = splitLine(source_world, target_world, 180.0 * line.useShortestPath);
      target_world_64low = vec3<f32>(0.0, 0.0, 0.0);
    } else if (line.useShortestPath < 0.0) {
      var abortOut: Varyings;
      abortOut.gl_Position = vec4<f32>(0.0);
      abortOut.vColor = vec4<f32>(0.0);
      abortOut.uv = vec2<f32>(0.0);
      return abortOut;
    }
  }

  // Project Pos and target positions to clip space.
  let sourceResult = project_position_to_clipspace_and_commonspace(source_world, source_world_64low, vec3<f32>(0.0));
  let targetResult = project_position_to_clipspace_and_commonspace(target_world, target_world_64low, vec3<f32>(0.0));
  let sourcePos: vec4<f32> = sourceResult.clipPosition;
  let targetPos: vec4<f32> = targetResult.clipPosition;
  let source_commonspace: vec4<f32> = sourceResult.commonPosition;
  let target_commonspace: vec4<f32> = targetResult.commonPosition;

  // Interpolate along the line segment.
  let segmentIndex: f32 = positions.x;
  let p: vec4<f32> = sourcePos + segmentIndex * (targetPos - sourcePos);
  geometry.position = source_commonspace + segmentIndex * (target_commonspace - source_commonspace);
#ifdef ANTIALIASING
  var uv: vec2<f32> = positions.xy;
#else
  let uv: vec2<f32> = positions.xy;
#endif
  geometry.uv = uv;
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);

  // Determine width in pixels.
  let widthPixels: f32 = clamp(
    project_unit_size_to_pixel(instanceWidths * line.widthScale, line.widthUnits),
    line.widthMinPixels, line.widthMaxPixels
  );

  // Compute extrusion offset.
  let extrusion: vec2<f32> = getExtrusionOffset(targetPos.xy - sourcePos.xy, positions.y, widthPixels);
  let offset: vec3<f32> = vec3<f32>(extrusion, 0.0);

  // Apply deck.gl filter functions.
#ifdef ANTIALIASING
  var filteredOffset = deckgl_filter_size(offset, geometry);
  let halfWidthPixels = length(filteredOffset.xy);
  if (halfWidthPixels > 0.0) {
    // Keep the declared edge at abs(uv.y) == 1 while rasterizing the outer half of the centered
    // one-device-pixel coverage ramp.
    let coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
    filteredOffset *= coverageScale;
    uv.y *= coverageScale;
  }
  geometry.uv = uv;
#else
  let filteredOffset = deckgl_filter_size(offset, geometry);
#endif
  let filteredP = deckgl_filter_gl_position(p, geometry);

  let clipOffset: vec2<f32> = project_pixel_size_to_clipspace(filteredOffset.xy);
  let finalPosition: vec4<f32> = filteredP + vec4<f32>(clipOffset, 0.0, 0.0);

  // Compute color.
  var vColor: vec4<f32> = vec4<f32>(instanceColors.rgb, instanceColors.a * layer.opacity);
  // vColor = deckgl_filter_color(vColor, geometry);

  var output: Varyings;
  output.gl_Position = finalPosition;
  output.vColor = vColor;
  output.uv = uv;
  output.pickingColor = geometry.pickingColor;
  return output;
}

@fragment
fn fragmentMain(
  @location(0) vColor: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>
) -> @location(0) vec4<f32> {
  // Create and initialize geometry with the provided uv.
  var geometry: Geometry;
  geometry.uv = uv;

  // Start with the input color.
  var fragColor: vec4<f32> = vColor;

#ifdef ANTIALIASING
  // Distance to the edge in device pixels, from the derivative of uv.y. Taken in uniform control
  // flow, ahead of the picking discard below
  let edgeCoord = abs(uv.y);
  let edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  // Feather one device pixel across the width, before premultiplication below. The ends are left
  // hard - they abut neighbors
  fragColor.a *= smoothedge(0.0, edgePixels);
#endif

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(pickingColor)) {
      discard;
    }
    return vec4<f32>(pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
}
`,Po=`#version 300 es
#define SHADER_NAME line-layer-vertex-shader
in vec3 positions;
in vec3 instanceSourcePositions;
in vec3 instanceTargetPositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions64Low;
in vec4 instanceColors;
in float instanceWidths;
out vec4 vColor;
out vec2 uv;
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
vec3 splitLine(vec3 a, vec3 b, float x) {
float t = (x - a.x) / (b.x - a.x);
return vec3(x, mix(a.yz, b.yz, t));
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
vec3 source_world_64low = instanceSourcePositions64Low;
vec3 target_world_64low = instanceTargetPositions64Low;
if (line.useShortestPath > 0.5 || line.useShortestPath < -0.5) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng * line.useShortestPath > 180.) {
source_world.x += 360. * line.useShortestPath;
source_world = splitLine(source_world, target_world, 180. * line.useShortestPath);
source_world_64low = vec3(0.0);
} else if (deltaLng * line.useShortestPath < -180.) {
target_world.x += 360. * line.useShortestPath;
target_world = splitLine(source_world, target_world, 180. * line.useShortestPath);
target_world_64low = vec3(0.0);
} else if (line.useShortestPath < 0.) {
gl_Position = vec4(0.);
return;
}
}
vec4 source_commonspace;
vec4 target_commonspace;
vec4 source = project_position_to_clipspace(source_world, source_world_64low, vec3(0.), source_commonspace);
vec4 target = project_position_to_clipspace(target_world, target_world_64low, vec3(0.), target_commonspace);
float segmentIndex = positions.x;
vec4 p = mix(source, target, segmentIndex);
geometry.position = mix(source_commonspace, target_commonspace, segmentIndex);
uv = positions.xy;
geometry.uv = uv;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * line.widthScale, line.widthUnits),
line.widthMinPixels, line.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset(target.xy - source.xy, positions.y, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float halfWidthPixels = length(offset.xy);
if (halfWidthPixels > 0.0) {
float coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
offset.xy *= coverageScale;
uv.y *= coverageScale;
}
geometry.uv = uv;
#endif
DECKGL_FILTER_GL_POSITION(p, geometry);
gl_Position = p + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,_o=`#version 300 es
#define SHADER_NAME line-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
fragColor = vColor;
#ifdef ANTIALIASING
float edgeCoord = abs(uv.y);
float edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Co={getSourcePosition:{type:"accessor",value:e=>e.sourcePosition},getTargetPosition:{type:"accessor",value:e=>e.targetPosition},getColor:{type:"accessor",value:[0,0,0,255]},getWidth:{type:"accessor",value:1},widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0},antialiasing:!1},We=class extends oe{getBounds(){return this.getAttributeManager()?.getBounds(["instanceSourcePositions","instanceTargetPositions"])}getShaders(){const{antialiasing:e}=this.props;return super.getShaders({vs:Po,fs:_o,source:yo,defines:e?{ANTIALIASING:1}:{},modules:[ie,ee,te,mo]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:[0,0,0,255]},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1}})}updateState(e){super.updateState(e);const{props:t,oldProps:i,changeFlags:o}=e;(o.extensionsChanged||t.antialiasing!==i.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{widthUnits:t,widthScale:i,widthMinPixels:o,widthMaxPixels:n,wrapLongitude:s}=this.props,r=this.state.model,a={widthUnits:Y[t],widthScale:i,widthMinPixels:o,widthMaxPixels:n,useShortestPath:s?1:0};r.shaderInputs.setProps({line:a}),r.draw(this.context.renderPass),s&&(r.shaderInputs.setProps({line:{...a,useShortestPath:-1}}),r.draw(this.context.renderPass))}_getModel(){const e=[0,-1,0,0,1,0,1,-1,0,1,1,0];return new Z(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new X({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};We.layerName="LineLayer",We.defaultProps=Co;var St=`layout(std140) uniform pointCloudUniforms {
  float radiusPixels;
  highp int sizeUnits;
} pointCloud;
`,bo={name:"pointCloud",source:"",vs:St,fs:St,uniformTypes:{radiusPixels:"f32",sizeUnits:"i32"}},So=`#version 300 es
#define SHADER_NAME point-cloud-layer-vertex-shader
in vec3 positions;
in vec3 instanceNormals;
in vec4 instanceColors;
in vec3 instancePositions;
in vec3 instancePositions64Low;
out vec4 vColor;
out vec2 unitPosition;
void main(void) {
geometry.worldPosition = instancePositions;
geometry.normal = project_normal(instanceNormals);
unitPosition = positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec3 offset = vec3(positions.xy * project_size_to_pixel(pointCloud.radiusPixels, pointCloud.sizeUnits), 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float triangleRadiusPixels = length(offset.xy);
if (triangleRadiusPixels > 0.0) {
float coverageScale = 1.0 + 1.0 / project.devicePixelRatio / triangleRadiusPixels;
offset.xy *= coverageScale;
unitPosition *= coverageScale;
geometry.uv = unitPosition;
}
#endif
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
vec3 lightColor = lighting_getLightColor(instanceColors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, instanceColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Lo=`#version 300 es
#define SHADER_NAME point-cloud-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 unitPosition;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition.xy;
float distToCenter = length(unitPosition);
#ifdef ANTIALIASING
float edgePixels = (1.0 - distToCenter) / max(fwidth(distToCenter), 1e-6);
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
#else
if (distToCenter > 1.0) {
#endif
discard;
}
fragColor = vColor;
#ifdef ANTIALIASING
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,wo=`struct PointCloudUniforms {
  radiusPixels: f32,
  sizeUnits: i32,
};

@group(0) @binding(0)
var<uniform> pointCloudUniforms: PointCloudUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceNormals: vec3<f32>,
  @location(4) instanceColors: vec4<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) unitPosition: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;

  let centerResult = project_position_to_clipspace_and_commonspace(
    attributes.instancePositions,
    attributes.instancePositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = centerResult.commonPosition;
  geometry.normal = project_normal(attributes.instanceNormals);

  // Position on the enclosing triangle. Its edges are tangent to the unit circle.
  varyings.unitPosition = attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  // Find the center of the point and add the current vertex
#ifdef ANTIALIASING
  var offset = vec3<f32>(
#else
  let offset = vec3<f32>(
#endif
    attributes.positions.xy *
      project_unit_size_to_pixel(pointCloudUniforms.radiusPixels, pointCloudUniforms.sizeUnits),
    0.0
  );
  // DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
  let triangleRadiusPixels = length(offset.xy);
  if (triangleRadiusPixels > 0.0) {
    // The triangle's inradius is half its vertex radius. Scaling its vertex radius by one device
    // pixel therefore adds half a device pixel around all three tangent points.
    let coverageScale = 1.0 + 1.0 / project.devicePixelRatio / triangleRadiusPixels;
    offset *= coverageScale;
    varyings.unitPosition *= coverageScale;
    geometry.uv = varyings.unitPosition;
  }
#endif

  varyings.position = centerResult.clipPosition;
  // DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  let clipPixels = project_pixel_size_to_clipspace(offset.xy);
  varyings.position.x += clipPixels.x;
  varyings.position.y += clipPixels.y;

  // Apply lighting
  let lightColor = lighting_getLightColor2(attributes.instanceColors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);

  // Apply opacity to instance color, or return instance picking color
  varyings.vColor = vec4(lightColor, attributes.instanceColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(vColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition.xy;

  let distToCenter = length(varyings.unitPosition);
#ifdef ANTIALIASING
  let edgePixels = (1.0 - distToCenter) / max(fwidth(distToCenter), 1e-6);
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
#else
  if (distToCenter > 1.0) {
#endif
    discard;
  }

  var fragColor: vec4<f32>;

  fragColor = varyings.vColor;

#ifdef ANTIALIASING
  fragColor.a *= smoothedge(0.0, edgePixels);
#endif

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
}
`,Lt=[0,0,0,255],wt=[0,0,1],Ao={sizeUnits:"pixels",pointSize:{type:"number",min:0,value:10},antialiasing:!1,getPosition:{type:"accessor",value:e=>e.position},getNormal:{type:"accessor",value:wt},getColor:{type:"accessor",value:Lt},material:!0,radiusPixels:{deprecatedFor:"pointSize"}};function Io(e){const{header:t,attributes:i}=e;if(!(!t||!i)&&(e.length=t.vertexCount,i.POSITION&&(i.instancePositions=i.POSITION),i.NORMAL&&(i.instanceNormals=i.NORMAL),i.COLOR_0)){const{size:o,value:n}=i.COLOR_0;i.instanceColors={size:o,type:"unorm8",value:n}}}var Ve=class extends oe{getShaders(){const{antialiasing:e}=this.props;return super.getShaders({vs:So,fs:Lo,source:wo,defines:e?{ANTIALIASING:1}:{},modules:[ie,ee,Be,te,bo]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceNormals:{size:3,transition:!0,accessor:"getNormal",defaultValue:wt},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:Lt}})}updateState(e){const{changeFlags:t,props:i,oldProps:o}=e;super.updateState(e),(t.extensionsChanged||i.antialiasing!==o.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll()),t.dataChanged&&Io(i.data)}draw({uniforms:e}){const{pointSize:t,sizeUnits:i}=this.props,o=this.state.model,n={sizeUnits:Y[i],radiusPixels:t};o.shaderInputs.setProps({pointCloud:n}),o.draw(this.context.renderPass)}_getModel(){const e=[];for(let t=0;t<3;t++){const i=t/3*Math.PI*2;e.push(Math.cos(i)*2,Math.sin(i)*2,0)}return new Z(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new X({topology:"triangle-list",attributes:{positions:new Float32Array(e)}}),isInstanced:!0})}};Ve.layerName="PointCloudLayer",Ve.defaultProps=Ao;var At=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,Eo={name:"scatterplot",vs:At,fs:At,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},Oo=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,To=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Ro=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
  @location(6) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  // WGSL selects the second value when the condition is true, so keep the antialiased path second.
  let edgePadding = select(
    1.0,
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
    geometry.position = vec4<f32>(
      geometry.position.xy + project_pixel_size_vec2(offset.xy),
      geometry.position.zw
    );
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offset
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    step(distToCenter, varyings.outerRadiusPixels),
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  clip_filterColor(varyings.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`;function zo(e){return Ro.replace("PICKING_COLOR_ATTRIBUTE",e?"@location(8) rowIndexes: u32,":"").replace("PICKING_COLOR_VALUE",e?"picking_getPickingColorFromIndex(attributes.rowIndexes)":"picking_getPickingColorFromIndex(attributes.instanceIndex)")}var He=0,It=1,Ze={name:"clip",source:`struct ClipUniforms {
  enabled: i32,
  mode: i32,
  bounds: vec4<f32>,
};

@group(2) @binding(auto) var<uniform> clipUniforms: ClipUniforms;

fn clip_isInBounds(coordinates: vec2<f32>) -> bool {
  return coordinates.x >= clipUniforms.bounds.x &&
    coordinates.y >= clipUniforms.bounds.y &&
    coordinates.x < clipUniforms.bounds.z &&
    coordinates.y < clipUniforms.bounds.w;
}

fn clip_filterPosition(position: ptr<function, vec4<f32>>, instanceCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${It} &&
    !clip_isInBounds(instanceCoordinates)
  ) {
    *position = vec4<f32>(2.0, 2.0, 2.0, 1.0);
  }
}

fn clip_filterColor(geometryCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${He} &&
    !clip_isInBounds(geometryCoordinates)
  ) {
    discard;
  }
}
`,props:{},uniforms:{},bindingLayout:[{name:"clip",group:2}],uniformTypes:{enabled:"i32",mode:"i32",bounds:"vec4<f32>"},defaultUniforms:{enabled:0,mode:He,bounds:[0,0,1,1]},getUniforms(e={}){const t={};return e.enabled!==void 0&&(t.enabled=e.enabled?1:0),e.mode!==void 0&&(t.mode=e.mode==="instance"?It:He),e.bounds!==void 0&&(t.bounds=e.bounds),t}},Et=[0,0,0,255],Mo={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:e=>e.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:Et},getLineColor:{type:"accessor",value:Et},getLineWidth:{type:"accessor",value:1},getPixelOffset:{type:"accessor",value:[0,0]},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}},_e=class extends oe{getShaders(){const e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:Oo,fs:To,source:zo(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[ie,ee,te,Eo,...this.context.device.type==="webgpu"?[Ze]:[]]})}initializeState(){const e=this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:"uint32",noAlloc:!0}}:{};this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255],bufferGroup:"scatterplot-instance-data"},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1,bufferGroup:"scatterplot-instance-data"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset",bufferGroup:"scatterplot-instance-data"},...e})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{radiusUnits:t,radiusScale:i,radiusMinPixels:o,radiusMaxPixels:n,stroked:s,filled:r,billboard:a,antialiasing:c,lineWidthUnits:l,lineWidthScale:d,lineWidthMinPixels:g,lineWidthMaxPixels:h}=this.props,v={stroked:s,filled:r,billboard:a,antialiasing:c,radiusUnits:Y[t],radiusScale:i,radiusMinPixels:o,radiusMaxPixels:n,lineWidthUnits:Y[l],lineWidthScale:d,lineWidthMinPixels:g,lineWidthMaxPixels:h},_=this.state.model;_.shaderInputs.setProps({scatterplot:v}),_.draw(this.context.renderPass)}_getModel(){const e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new Z(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new X({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};_e.defaultProps=Mo,_e.layerName="ScatterplotLayer";var $e={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function Ke(e,t,i={}){return ko(e,i)!==t?(Do(e,i),!0):!1}function ko(e,t={}){return Math.sign(Ot(e,t))}var Xe={x:0,y:1,z:2};function Ot(e,t={}){const{start:i=0,end:o=e.length,plane:n="xy"}=t,s=t.size||2;let r=0;const a=Xe[n[0]],c=Xe[n[1]];for(let l=i,d=o-s;l<o;l+=s)r+=(e[l+a]-e[d+a])*(e[l+c]+e[d+c]),d=l;return r/2}function Do(e,t){const{start:i=0,end:o=e.length,size:n=2}=t,s=(o-i)/n,r=Math.floor(s/2);for(let a=0;a<r;++a){const c=i+a*n,l=i+(s-1-a)*n;for(let d=0;d<n;++d){const g=e[c+d];e[c+d]=e[l+d],e[l+d]=g}}}function q(e,t){const i=t.length,o=e.length;if(o>0){let n=!0;for(let s=0;s<i;s++)if(e[o-i+s]!==t[s]){n=!1;break}if(n)return!1}for(let n=0;n<i;n++)e[o+n]=t[n];return!0}function Je(e,t){const i=t.length;for(let o=0;o<i;o++)e[o]=t[o]}function ue(e,t,i,o,n=[]){const s=o+t*i;for(let r=0;r<i;r++)n[r]=e[s+r];return n}function Ye(e,t,i,o,n=[]){let s,r;if(i&8)s=(o[3]-e[1])/(t[1]-e[1]),r=3;else if(i&4)s=(o[1]-e[1])/(t[1]-e[1]),r=1;else if(i&2)s=(o[2]-e[0])/(t[0]-e[0]),r=2;else if(i&1)s=(o[0]-e[0])/(t[0]-e[0]),r=0;else return null;for(let a=0;a<e.length;a++)n[a]=(r&1)===a?o[r]:s*(t[a]-e[a])+e[a];return n}function Ce(e,t){let i=0;return e[0]<t[0]?i|=1:e[0]>t[2]&&(i|=2),e[1]<t[1]?i|=4:e[1]>t[3]&&(i|=8),i}function Tt(e,t){const{size:i=2,broken:o=!1,gridResolution:n=10,gridOffset:s=[0,0],startIndex:r=0,endIndex:a=e.length}=t||{},c=(a-r)/i;let l=[];const d=[l],g=ue(e,0,i,r);let h,v;const _=kt(g,n,s,[]),C=[];q(l,g);for(let S=1;S<c;S++){for(h=ue(e,S,i,r,h),v=Ce(h,_);v;){Ye(g,h,v,_,C);const I=Ce(C,_);I&&(Ye(g,C,I,_,C),v=I),q(l,C),Je(g,C),No(_,n,v),o&&l.length>i&&(l=[],d.push(l),q(l,g)),v=Ce(h,_)}q(l,h),Je(g,h)}return o?d:d[0]}var Rt=0,Fo=1;function zt(e,t=null,i){if(!e.length)return[];const{size:o=2,gridResolution:n=10,gridOffset:s=[0,0],edgeTypes:r=!1}=i||{},a=[],c=[{pos:e,types:r?new Array(e.length/o).fill(Fo):null,holes:t||[]}],l=[[],[]];let d=[];for(;c.length;){const{pos:g,types:h,holes:v}=c.shift();Bo(g,o,v[0]||g.length,l),d=kt(l[0],n,s,d);const _=Ce(l[1],d);if(_){let C=Mt(g,h,o,0,v[0]||g.length,d,_);const S={pos:C[0].pos,types:C[0].types,holes:[]},I={pos:C[1].pos,types:C[1].types,holes:[]};c.push(S,I);for(let E=0;E<v.length;E++)C=Mt(g,h,o,v[E],v[E+1]||g.length,d,_),C[0]&&(S.holes.push(S.pos.length),S.pos=be(S.pos,C[0].pos),r&&(S.types=be(S.types,C[0].types))),C[1]&&(I.holes.push(I.pos.length),I.pos=be(I.pos,C[1].pos),r&&(I.types=be(I.types,C[1].types)))}else{const C={positions:g};r&&(C.edgeTypes=h),v.length&&(C.holeIndices=v),a.push(C)}}return a}function Mt(e,t,i,o,n,s,r){const a=(n-o)/i,c=[],l=[],d=[],g=[],h=[];let v,_,C;const S=ue(e,a-1,i,o);let I=Math.sign(r&8?S[1]-s[3]:S[0]-s[2]),E=t&&t[a-1],O=0,T=0;for(let L=0;L<a;L++)v=ue(e,L,i,o,v),_=Math.sign(r&8?v[1]-s[3]:v[0]-s[2]),C=t&&t[o/i+L],_&&I&&I!==_&&(Ye(S,v,r,s,h),q(c,h)&&d.push(E),q(l,h)&&g.push(E)),_<=0?(q(c,v)&&d.push(C),O-=_):d.length&&(d[d.length-1]=Rt),_>=0?(q(l,v)&&g.push(C),T+=_):g.length&&(g[g.length-1]=Rt),Je(S,v),I=_,E=C;return[O?{pos:c,types:t&&d}:null,T?{pos:l,types:t&&g}:null]}function kt(e,t,i,o){const n=Math.floor((e[0]-i[0])/t)*t+i[0],s=Math.floor((e[1]-i[1])/t)*t+i[1];return o[0]=n,o[1]=s,o[2]=n+t,o[3]=s+t,o}function No(e,t,i){i&8?(e[1]+=t,e[3]+=t):i&4?(e[1]-=t,e[3]-=t):i&2?(e[0]+=t,e[2]+=t):i&1&&(e[0]-=t,e[2]-=t)}function Bo(e,t,i,o){let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let c=0;c<i;c+=t){const l=e[c],d=e[c+1];n=l<n?l:n,s=l>s?l:s,r=d<r?d:r,a=d>a?d:a}return o[0][0]=n,o[0][1]=r,o[1][0]=s,o[1][1]=a,o}function be(e,t){for(let i=0;i<t.length;i++)e.push(t[i]);return e}var jo=85.051129;function Go(e,t){const{size:i=2,startIndex:o=0,endIndex:n=e.length,normalize:s=!0}=t||{},r=e.slice(o,n);Dt(r,i,0,n-o);const a=Tt(r,{size:i,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(s)for(const c of a)Ft(c,i);return a}function Uo(e,t=null,i){const{size:o=2,normalize:n=!0,edgeTypes:s=!1}=i||{};t=t||[];const r=[],a=[];let c=0,l=0;for(let g=0;g<=t.length;g++){const h=t[g]||e.length,v=l,_=Wo(e,o,c,h);for(let C=_;C<h;C++)r[l++]=e[C];for(let C=c;C<_;C++)r[l++]=e[C];Dt(r,o,v,l),Vo(r,o,v,l,i?.maxLatitude),c=h,a[g]=l}a.pop();const d=zt(r,a,{size:o,gridResolution:360,gridOffset:[-180,-180],edgeTypes:s});if(n)for(const g of d)Ft(g.positions,o);return d}function Wo(e,t,i,o){let n=-1,s=-1;for(let r=i+1;r<o;r+=t){const a=Math.abs(e[r]);a>n&&(n=a,s=r-1)}return s}function Vo(e,t,i,o,n=jo){const s=e[i],r=e[o-t];if(Math.abs(s-r)>180){const a=ue(e,0,t,i);a[0]+=Math.round((r-s)/360)*360,q(e,a),a[1]=Math.sign(a[1])*n,q(e,a),a[0]=s,q(e,a)}}function Dt(e,t,i,o){let n=e[0],s;for(let r=i;r<o;r+=t){s=e[r];const a=s-n;(a>180||a<-180)&&(s-=Math.round(a/360)*360),e[r]=n=s}}function Ft(e,t){let i;const o=e.length/t;for(let s=0;s<o&&(i=e[s*t],(i+180)%360===0);s++);const n=-Math.round(i/360)*360;if(n!==0)for(let s=0;s<o;s++)e[s*t]+=n}var Ho=class extends X{constructor(e){const{indices:t,attributes:i}=Zo(e);super({...e,topology:"line-list",indices:t,attributes:i})}};function Zo(e){const{radius:t,height:i=1,nradial:o=10}=e;let{vertices:n}=e;n&&(K.assert(n.length>=o),n=n.flatMap(v=>[v[0],v[1]]),Ke(n,$e.COUNTER_CLOCKWISE));const s=i>0,r=o+1,a=s?r*3+1:o,c=Math.PI*2/o,l=new Uint16Array(s?o*3*2:0),d=new Float32Array(a*3),g=new Float32Array(a*3);let h=0;if(s){for(let v=0;v<r;v++){const _=v*c,C=v%o,S=Math.sin(_),I=Math.cos(_);for(let E=0;E<2;E++)d[h+0]=n?n[C*2]:I*t,d[h+1]=n?n[C*2+1]:S*t,d[h+2]=(1/2-E)*i,g[h+0]=n?n[C*2]:I,g[h+1]=n?n[C*2+1]:S,h+=3}d[h+0]=d[h-3],d[h+1]=d[h-2],d[h+2]=d[h-1],h+=3}for(let v=s?0:1;v<r;v++){const _=Math.floor(v/2)*Math.sign(.5-v%2),C=_*c,S=(_+o)%o,I=Math.sin(C),E=Math.cos(C);d[h+0]=n?n[S*2]:E*t,d[h+1]=n?n[S*2+1]:I*t,d[h+2]=i/2,g[h+2]=1,h+=3}if(s){let v=0;for(let _=0;_<o;_++)l[v++]=_*2+0,l[v++]=_*2+2,l[v++]=_*2+0,l[v++]=_*2+1,l[v++]=_*2+1,l[v++]=_*2+3}return{indices:l,attributes:{POSITION:{size:3,value:d},NORMAL:{size:3,value:g}}}}var $o=`struct ColumnUniforms {
  radius: f32,
  angle: f32,
  offset: vec2<f32>,
  extruded: f32,
  stroked: f32,
  isStroke: f32,
  coverage: f32,
  elevationScale: f32,
  edgeDistance: f32,
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  radiusUnits: i32,
  widthUnits: i32,
};

@group(0) @binding(auto) var<uniform> column: ColumnUniforms;
`,Nt=`layout(std140) uniform columnUniforms {
  float radius;
  float angle;
  vec2 offset;
  bool extruded;
  bool stroked;
  bool isStroke;
  float coverage;
  float elevationScale;
  float edgeDistance;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int radiusUnits;
  highp int widthUnits;
} column;
`,Ko={name:"column",source:$o,vs:Nt,fs:Nt,uniformTypes:{radius:"f32",angle:"f32",offset:"vec2<f32>",extruded:"f32",stroked:"f32",isStroke:"f32",coverage:"f32",elevationScale:"f32",edgeDistance:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",radiusUnits:"i32",widthUnits:"i32"}},Bt=`struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) instancePositions: vec3<f32>,
  @location(3) instancePositions64Low: vec3<f32>,
  @location(4) instanceElevations: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instanceStrokeWidths: f32
};

fn getRotationMatrix(angle: f32) -> mat2x2<f32> {
  let s = sin(angle);
  let c = cos(angle);
  return mat2x2<f32>(
    vec2<f32>(c, s),
    vec2<f32>(-s, c)
  );
}

fn getOffset(
  positions: vec3<f32>,
  strokeOffsetRatio: f32,
  dotRadius: f32,
  rotationMatrix: mat2x2<f32>
) -> vec3<f32> {
  var offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
  if (column.radiusUnits == UNIT_METERS) {
    offset = project_size_vec2(offset);
  } else if (column.radiusUnits == UNIT_PIXELS) {
    offset = project_pixel_size_vec2(offset);
  }
  return vec3<f32>(offset, 0.0);
}
`,Xo=`${Bt}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  let lightColor = lighting_getLightColor2(
    baseColor.rgb,
    project.cameraPosition,
    geometry.position.xyz,
    geometry.normal
  );

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(
    select(baseColor.rgb, lightColor, column.extruded > 0.5 && !isStroke),
    baseColor.a * layer.opacity
  );

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);
  return deckgl_premultiplied_alpha(varyings.color);
}
`,Jo=`${Bt}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) cameraPosition: vec3<f32>,
  @location(2) positionCommonspace: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(baseColor.rgb, baseColor.a * layer.opacity);
  varyings.cameraPosition = project.cameraPosition;
  varyings.positionCommonspace = projected.commonPosition;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);

  var fragColor = varyings.color;
  if (column.extruded > 0.5 && column.isStroke < 0.5) {
    // WebGPU's screen-space Y axis reverses the derivative orientation used by GLSL flat shading.
    let normal = normalize(cross(dpdy(varyings.positionCommonspace.xyz), dpdx(varyings.positionCommonspace.xyz)));
    fragColor = vec4<f32>(
      lighting_getLightColor2(
        varyings.color.rgb,
        varyings.cameraPosition,
        varyings.positionCommonspace.xyz,
        normal
      ),
      varyings.color.a
    );
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`;function Yo(e){return e?Jo:Xo}var qo=`#version 300 es
#define SHADER_NAME column-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec3 instancePositions;
in float instanceElevations;
in vec3 instancePositions64Low;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in float instanceStrokeWidths;
out vec4 vColor;
#ifdef FLAT_SHADING
out vec3 cameraPosition;
out vec4 position_commonspace;
#endif
void main(void) {
geometry.worldPosition = instancePositions;
vec4 color = column.isStroke ? instanceLineColors : instanceFillColors;
mat2 rotationMatrix = mat2(cos(column.angle), sin(column.angle), -sin(column.angle), cos(column.angle));
float elevation = 0.0;
float strokeOffsetRatio = 1.0;
if (column.extruded) {
elevation = instanceElevations * (positions.z + 1.0) / 2.0 * column.elevationScale;
} else if (column.stroked) {
float widthPixels = clamp(
project_size_to_pixel(instanceStrokeWidths * column.widthScale, column.widthUnits),
column.widthMinPixels, column.widthMaxPixels) / 2.0;
float halfOffset = project_pixel_size(widthPixels) / project_size(column.edgeDistance * column.coverage * column.radius);
if (column.isStroke) {
strokeOffsetRatio -= sign(positions.z) * halfOffset;
} else {
strokeOffsetRatio -= halfOffset;
}
}
float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
float dotRadius = column.radius * column.coverage * shouldRender;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
vec3 centroidPosition64Low = instancePositions64Low;
vec2 offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
if (column.radiusUnits == UNIT_METERS) {
offset = project_size(offset);
} else if (column.radiusUnits == UNIT_PIXELS) {
offset = project_pixel_size(offset);
}
vec3 pos = vec3(offset, 0.);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);
geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (column.extruded && !column.isStroke) {
#ifdef FLAT_SHADING
cameraPosition = project.cameraPosition;
position_commonspace = geometry.position;
vColor = vec4(color.rgb, color.a * layer.opacity);
#else
vec3 lightColor = lighting_getLightColor(color.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, color.a * layer.opacity);
#endif
} else {
vColor = vec4(color.rgb, color.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Qo=`#version 300 es
#define SHADER_NAME column-layer-fragment-shader
precision highp float;
out vec4 fragColor;
in vec4 vColor;
#ifdef FLAT_SHADING
in vec3 cameraPosition;
in vec4 position_commonspace;
#endif
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
#ifdef FLAT_SHADING
if (column.extruded && !column.isStroke && !bool(picking.isActive)) {
vec3 normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
fragColor.rgb = lighting_getLightColor(vColor.rgb, cameraPosition, position_commonspace.xyz, normal);
}
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Se=[0,0,0,255],en={name:"geometry",stepMode:"vertex",byteStride:24,attributes:[{attribute:"positions",format:"float32x3",byteOffset:0},{attribute:"normals",format:"float32x3",byteOffset:12}]},tn={diskResolution:{type:"number",min:4,value:20},vertices:null,radius:{type:"number",min:0,value:1e3},angle:{type:"number",value:0},offset:{type:"array",value:[0,0]},coverage:{type:"number",min:0,max:1,value:1},elevationScale:{type:"number",min:0,value:1},radiusUnits:"meters",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,extruded:!0,wireframe:!1,filled:!0,stroked:!1,flatShading:!1,getPosition:{type:"accessor",value:e=>e.position},getFillColor:{type:"accessor",value:Se},getLineColor:{type:"accessor",value:Se},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0,getColor:{deprecatedFor:["getFillColor","getLineColor"]}},Le=class extends oe{getShaders(){const e={},{flatShading:t}=this.props;return t&&(e.FLAT_SHADING=1),super.getShaders({vs:qo,fs:Qo,source:Yo(t),defines:e,modules:[ie,ee,t?Li:Be,te,Ko]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceElevations:{size:1,transition:!0,accessor:"getElevation"},instanceFillColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getFillColor",defaultValue:Se},instanceLineColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getLineColor",defaultValue:Se},instanceStrokeWidths:{size:1,accessor:"getLineWidth",transition:!0}})}updateState(e){super.updateState(e);const{props:t,oldProps:i,changeFlags:o}=e,n=o.extensionsChanged||t.flatShading!==i.flatShading;n&&(this.state.models?.forEach(r=>r.destroy()),this.setState(this._getModels()),this.getAttributeManager().invalidateAll());const s=this.getNumInstances();this.state.fillModel.setInstanceCount(s),this.state.strokeModel.setInstanceCount(s),this.state.wireframeModel.setInstanceCount(s),(n||t.diskResolution!==i.diskResolution||t.vertices!==i.vertices||t.extruded!==i.extruded||t.stroked!==i.stroked)&&this._updateGeometry(t)}getGeometry(e,t,i){const o=new Ho({radius:1,height:i?2:0,vertices:t,nradial:e});let n=0;if(t)for(let s=0;s<e;s++){const r=t[s],a=Math.sqrt(r[0]*r[0]+r[1]*r[1]);n+=a/e}else n=1;return this.setState({edgeDistance:Math.cos(Math.PI/e)*n}),o}_getModels(){const e=this.getShaders(),t=[...this.getAttributeManager().getBufferLayouts(),en],i=new Z(this.context.device,{...e,id:`${this.props.id}-fill`,bufferLayout:t,isInstanced:!0}),o=new Z(this.context.device,{...e,id:`${this.props.id}-stroke`,bufferLayout:t,isInstanced:!0}),n=new Z(this.context.device,{...e,id:`${this.props.id}-wireframe`,bufferLayout:t,isInstanced:!0});return{fillModel:i,strokeModel:o,wireframeModel:n,models:[n,i,o]}}_updateGeometry({diskResolution:e,vertices:t,extruded:i,stroked:o}){const n=this.getGeometry(e,t,i||o),s=n.attributes.POSITION,r=n.attributes.NORMAL;if(this._setFillGeometry(new X({topology:"triangle-strip",attributes:{POSITION:s,NORMAL:r}})),!i&&o){const a=s.value.length/3;this._setStrokeGeometry(new X({topology:"triangle-strip",vertexCount:a-e-1,attributes:{POSITION:s,NORMAL:r}}))}i&&this._setWireframeGeometry(n)}_setFillGeometry(e){const t=je(e,{attributes:["POSITION","NORMAL"]});this.state.fillModel.setGeometry(t)}_setStrokeGeometry(e){const t=je(e,{attributes:["POSITION","NORMAL"]});this.state.strokeModel.setGeometry(t)}_setWireframeGeometry(e){const t=je(e,{attributes:["POSITION","NORMAL"]}),i=this.state.wireframeModel;i.setGeometry(t),i.setTopology("line-list")}draw({uniforms:e}){const{lineWidthUnits:t,lineWidthScale:i,lineWidthMinPixels:o,lineWidthMaxPixels:n,radiusUnits:s,elevationScale:r,extruded:a,filled:c,stroked:l,wireframe:d,offset:g,coverage:h,radius:v,angle:_}=this.props,C=this.state.fillModel,S=this.state.strokeModel,I=this.state.wireframeModel,{edgeDistance:E}=this.state,O={radius:v,angle:_/180*Math.PI,offset:g,extruded:a,stroked:l,coverage:h,elevationScale:r,edgeDistance:E,radiusUnits:Y[s],widthUnits:Y[t],widthScale:i,widthMinPixels:o,widthMaxPixels:n};a&&d&&(I.shaderInputs.setProps({column:{...O,isStroke:!0}}),I.draw(this.context.renderPass)),c&&(C.shaderInputs.setProps({column:{...O,isStroke:!1}}),C.draw(this.context.renderPass)),!a&&l&&(S.shaderInputs.setProps({column:{...O,isStroke:!0}}),S.draw(this.context.renderPass))}};Le.layerName="ColumnLayer",Le.defaultProps=tn;var on={cellSize:{type:"number",min:0,value:1e3},offset:{type:"array",value:[1,1]}},qe=class extends Le{_updateGeometry(){const e=new gt;this._setFillGeometry(e)}draw({uniforms:e}){const{elevationScale:t,extruded:i,offset:o,coverage:n,cellSize:s,angle:r,radiusUnits:a}=this.props,c=this.state.fillModel,l={radius:s/2,radiusUnits:Y[a],angle:r,offset:o,extruded:i,stroked:!1,coverage:n,elevationScale:t,edgeDistance:1,isStroke:!1,widthUnits:0,widthScale:0,widthMinPixels:0,widthMaxPixels:0};c.shaderInputs.setProps({column:l}),c.draw(this.context.renderPass)}};qe.layerName="GridCellLayer",qe.defaultProps=on;function nn(e,t,i,o){let n;if(Array.isArray(e[0])){const s=e.length*t;n=new Array(s);for(let r=0;r<e.length;r++)for(let a=0;a<t;a++)n[r*t+a]=e[r][a]||0}else n=e;return i?Tt(n,{size:t,gridResolution:i}):o?Go(n,{size:t}):n}var sn=1,rn=2,ge=4,an=class extends ut{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:e.isWebGPU?Float32Array:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getPathSegmentIndices(e){const t=this.attributes.segmentTypes,i=this.vertexStarts[e],o=Math.min(this.vertexStarts[e+1]??this.instanceCount,this.instanceCount),n=[];for(let s=i;s<o-1;s++)(t[s]&ge)===0&&n.push(s);return n.length&&(t[i]&ge)!==0&&n.unshift(n.pop()),n}getGeometryFromBuffer(e){return this.normalize||this.opts.isWebGPU?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?nn(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(jt(e)){let i=0;for(const o of e)i+=this.getGeometrySize(o);return i}const t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(t.geometrySize!==0)if(e&&jt(e))for(const i of e){const o=this.getGeometrySize(i);t.geometrySize=o,this.updateGeometryAttributes(i,t),t.vertexStart+=o}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}_updateSegmentTypes(e,t){const i=this.attributes.segmentTypes,o=e?this.isClosed(e):!1,{vertexStart:n,geometrySize:s}=t;i.fill(0,n,n+s),o?(i[n]=ge,i[n+s-2]=ge):(i[n]+=sn,i[n+s-2]+=rn),i[n+s-1]=ge}_updatePositions(e,t){const{positions:i}=this.attributes;if(!i||!e)return;const{vertexStart:o,geometrySize:n}=t,s=new Array(3);for(let r=o,a=0;a<n;r++,a++)this.getPointOnPath(e,a,s),i[r*3]=s[0],i[r*3+1]=s[1],i[r*3+2]=s[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,i=[]){const{positionSize:o}=this;t*o>=e.length&&(t+=1-e.length/o);const n=t*o;return i[0]=e[n],i[1]=e[n+1],i[2]=o===3&&e[n+2]||0,i}isClosed(e){if(!this.normalize)return!!this.opts.loop;const{positionSize:t}=this,i=e.length-t;return e[0]===e[i]&&e[1]===e[i+1]&&(t===2||e[2]===e[i+2])}};function jt(e){return Array.isArray(e[0])}var ln=`struct PathUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  jointType: f32,
  capType: f32,
  miterLimit: f32,
  billboard: f32,
  widthUnits: i32,
};

@group(0) @binding(auto)
var<uniform> path: PathUniforms;
`,Gt=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,cn={name:"path",source:ln,vs:Gt,fs:Gt,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},fn=`const EPSILON: f32 = 0.001;
const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct JoinResult {
  offset: vec3<f32>,
  cornerOffset: vec2<f32>,
  miterLength: f32,
  pathPosition: vec2<f32>,
  pathLength: f32,
  jointType: f32,
};

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) instanceTypes: f32,
  @location(2) instanceLeftPositions: vec3<f32>,
  @location(3) instanceStartPositions: vec3<f32>,
  @location(4) instanceEndPositions: vec3<f32>,
  @location(5) instanceRightPositions: vec3<f32>,
  @location(6) instanceLeftPositions64Low: vec3<f32>,
  @location(7) instanceStartPositions64Low: vec3<f32>,
  @location(8) instanceEndPositions64Low: vec3<f32>,
  @location(9) instanceRightPositions64Low: vec3<f32>,
  @location(10) instanceStrokeWidths: f32,
  @location(11) instanceColors: vec4<f32>,
  @location(12) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vCornerOffset: vec2<f32>,
  @location(2) vMiterLength: f32,
  @location(3) vPathPosition: vec2<f32>,
  @location(4) vPathLength: f32,
  @location(5) vJointType: f32,
  // Location 6 is reserved for TripsLayer's injected vTime varying.
  @location(7) clipCoordinates: vec2<f32>,
#ifdef DASH_ENABLED
  @location(8) vPathBounds: vec2<f32>,
#endif
};

fn flipIfTrue(flag: bool) -> f32 {
  return select(1.0, -1.0, flag);
}

fn clipLine(position: vec4<f32>, refPosition: vec4<f32>) -> vec4<f32> {
  if (position.w < EPSILON) {
    let r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    return refPosition + (position - refPosition) * r;
  }
  return position;
}

#ifdef DASH_ENABLED
// Return the visible interval of the original segment before clipLine moves either endpoint.
fn getClippedPathRange(startW: f32, endW: f32) -> vec2<f32> {
  let startClipped = startW < EPSILON;
  let endClipped = endW < EPSILON;
  if (startClipped && endClipped) {
    return vec2<f32>(0.0, 0.0);
  }
  if (startClipped || endClipped) {
    let intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
    if (startClipped) {
      return vec2<f32>(intersection, 1.0);
    }
    return vec2<f32>(0.0, intersection);
  }
  return vec2<f32>(0.0, 1.0);
}
#endif

fn getLineJoinOffset(
  prevPoint: vec3<f32>,
  currPoint: vec3<f32>,
  nextPoint: vec3<f32>,
  width: vec2<f32>,
#ifdef DASH_ENABLED
  sourcePathLength: f32,
  sourcePathRange: vec2<f32>,
#endif
#ifdef ANTIALIASING
  coverageScale: f32,
#endif
  positions: vec2<f32>,
  instanceTypes: f32
) -> JoinResult {
  let isEnd = positions.x > 0.0;
  let sideOfPath = positions.y;
  let isJoint = select(0.0, 1.0, sideOfPath == 0.0);

  var deltaA3 = currPoint - prevPoint;
  var deltaB3 = nextPoint - currPoint;

  let rotationResult = project_needs_rotation(currPoint);
  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    deltaA3 = rotationResult.transform * deltaA3;
    deltaB3 = rotationResult.transform * deltaB3;
  }

  let deltaA = deltaA3.xy / width;
  let deltaB = deltaB3.xy / width;

  let lenA = length(deltaA);
  let lenB = length(deltaB);

  let dirA = select(vec2<f32>(0.0, 0.0), normalize(deltaA), lenA > 0.0);
  let dirB = select(vec2<f32>(0.0, 0.0), normalize(deltaB), lenB > 0.0);

  let perpA = vec2<f32>(-dirA.y, dirA.x);
  let perpB = vec2<f32>(-dirB.y, dirB.x);

  var tangent = dirA + dirB;
  tangent = select(perpA, normalize(tangent), length(tangent) > 0.0);
  let miterVec = vec2<f32>(-tangent.y, tangent.x);
  let dir = select(dirB, dirA, isEnd);
  let perp = select(perpB, perpA, isEnd);
#ifdef DASH_ENABLED
  let segmentLength2D = select(lenB, lenA, isEnd);

  // Extrusion happens in the XY plane, so segmentLength2D is a 2D length and pathPosition.y
  // below measures 2D distance along the segment. For a path that also moves in Z the true
  // arc length is longer by this ratio. Scaling pathLength and pathPosition.y by it makes
  // the coordinate measure real 3D distance while leaving the joint tests unchanged, since
  // they compare the two against each other and both are scaled alike. Billboard mode
  // extrudes in clip space, where the perspective divide has already reduced the segment to
  // its screen projection, so its complete common-space length is supplied by the caller.
  // Mirrors path-layer-vertex.glsl.ts.
  let currDelta3 = select(deltaB3, deltaA3, isEnd);
  let currLength2D = length(currDelta3.xy);
  // Do not clamp a valid denominator to EPSILON: high-zoom Web Mercator deltas are often
  // smaller than that in common space, and changing their scale corrupts even flat paths.
  let safeLength2D = select(1.0, currLength2D, currLength2D > 0.0);
  var arcLengthRatio = 1.0;
  var pathPositionOffset = 0.0;
  var pathLength = segmentLength2D;
  if (path.billboard != 0.0) {
    // clipLine may shorten the visible screen-space segment. Preserve the corresponding interval
    // of the complete common-space arclength instead of compressing the full dash period into the
    // visible span. Keep pathLength complete so justification is stable as the camera clips it.
    let visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
    arcLengthRatio = 0.0;
    if (segmentLength2D > 0.0) {
      arcLengthRatio = visiblePathLength / segmentLength2D;
    }
    pathPositionOffset = sourcePathLength * sourcePathRange.x;
    pathLength = sourcePathLength;
  } else if (currLength2D > 0.0) {
    arcLengthRatio = length(currDelta3) / safeLength2D;
    pathLength = segmentLength2D * arcLengthRatio;
  }
#else
  let pathLength = select(lenB, lenA, isEnd);
#endif

  let sinHalfA = abs(dot(miterVec, perp));
  let cosHalfA = abs(dot(dirA, miterVec));
  let turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  let cornerPosition = sideOfPath * turnDirection;

  var miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  var offsetVec =
    mix(miterVec * miterSize, perp, step(0.5, cornerPosition)) *
    (sideOfPath + isJoint * turnDirection);

  let isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  let isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  let isCap = isStartCap || isEndCap;

  var jointType = path.jointType;
  if (isCap) {
    offsetVec = mix(
      perp * sideOfPath,
      dir * path.capType * 4.0 * flipIfTrue(isStartCap),
      isJoint
    );
    jointType = path.capType;
  }

#ifdef ANTIALIASING
  let coverageOffsetVec = offsetVec * coverageScale;
  var miterLength = dot(coverageOffsetVec, miterVec * turnDirection);
#else
  var miterLength = dot(offsetVec, miterVec * turnDirection);
#endif
  miterLength = select(miterLength, isJoint, isCap);

#ifdef ANTIALIASING
  let offsetFromStartOfPath = coverageOffsetVec + deltaA * select(0.0, 1.0, isEnd);
#else
  let offsetFromStartOfPath = offsetVec + deltaA * select(0.0, 1.0, isEnd);
#endif
  let pathPosition = vec2<f32>(
    dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
    pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
    dot(offsetFromStartOfPath, dir)
#endif
  );
  let isValid = step(f32(instanceTypes), 3.5);
#ifdef ANTIALIASING
  var offset = vec3<f32>(coverageOffsetVec * width * isValid, 0.0);
#else
  var offset = vec3<f32>(offsetVec * width * isValid, 0.0);
#endif

  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    offset = rotationResult.transform * offset;
  }

#ifdef ANTIALIASING
  return JoinResult(
    offset, coverageOffsetVec, miterLength, pathPosition, pathLength, jointType
  );
#else
  return JoinResult(offset, offsetVec, miterLength, pathPosition, pathLength, jointType);
#endif
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let isEnd = attributes.positions.x;

  let prevPosition = mix(attributes.instanceLeftPositions, attributes.instanceStartPositions, isEnd);
  let prevPosition64Low = mix(
    attributes.instanceLeftPositions64Low,
    attributes.instanceStartPositions64Low,
    isEnd
  );
  let currPosition = mix(attributes.instanceStartPositions, attributes.instanceEndPositions, isEnd);
  let currPosition64Low = mix(
    attributes.instanceStartPositions64Low,
    attributes.instanceEndPositions64Low,
    isEnd
  );
  let nextPosition = mix(attributes.instanceEndPositions, attributes.instanceRightPositions, isEnd);
  let nextPosition64Low = mix(
    attributes.instanceEndPositions64Low,
    attributes.instanceRightPositions64Low,
    isEnd
  );

  geometry.worldPosition = currPosition;

  let widthPixels =
    clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * path.widthScale, path.widthUnits),
      path.widthMinPixels,
      path.widthMaxPixels
    ) / 2.0;

  if (path.billboard != 0.0) {
#ifdef DASH_ENABLED
    let prevProjection = project_position_to_clipspace_and_commonspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    let nextProjection = project_position_to_clipspace_and_commonspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
    let prevPositionCommon = prevProjection.commonPosition.xyz;
    let nextPositionCommon = nextProjection.commonPosition.xyz;
    var prevPositionScreen = prevProjection.clipPosition;
    var nextPositionScreen = nextProjection.clipPosition;
#else
    var prevPositionScreen = project_position_to_clipspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    var nextPositionScreen = project_position_to_clipspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
#endif
    let currProjection = project_position_to_clipspace_and_commonspace(
      currPosition, currPosition64Low, ZERO_OFFSET
    );
    geometry.position = currProjection.commonPosition;
    var currPositionScreen = currProjection.clipPosition;
#ifdef DASH_ENABLED
    let currPositionCommon = currProjection.commonPosition.xyz;
    let sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
    let sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
    let billboardPathRange = getClippedPathRange(
      sourcePathStartScreen.w, sourcePathEndScreen.w
    );
#endif

    prevPositionScreen = clipLine(prevPositionScreen, currPositionScreen);
    nextPositionScreen = clipLine(nextPositionScreen, currPositionScreen);
    currPositionScreen = clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
#ifdef DASH_ENABLED
    let currentDeltaCommon = select(
      nextPositionCommon - currPositionCommon,
      currPositionCommon - prevPositionCommon,
      isEnd > 0.0
    );
    let billboardPathLength = select(
      0.0,
      length(currentDeltaCommon) * project.scale / (widthPixels * project.focalDistance),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(vec2<f32>(widthPixels, widthPixels)),
#ifdef DASH_ENABLED
      billboardPathLength,
      billboardPathRange,
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    // Phase and justification use the complete source segment, while cap and joint coverage
    // must still recognize the endpoints moved by clipLine.
    varyings.vPathBounds = billboardPathLength * billboardPathRange;
#endif

    geometry.uv = join.pathPosition;
    varyings.position = vec4<f32>(
      currPositionScreen.xyz + join.offset * currPositionScreen.w,
      currPositionScreen.w
    );
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  } else {
    let prevPositionCommon = project_position_vec3_f64(prevPosition, prevPosition64Low);
    let currPositionCommon = project_position_vec3_f64(currPosition, currPosition64Low);
    let nextPositionCommon = project_position_vec3_f64(nextPosition, nextPosition64Low);

    let width = vec2<f32>(
      project_pixel_size_float(widthPixels),
      project_pixel_size_float(widthPixels)
    );
#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionCommon,
      currPositionCommon,
      nextPositionCommon,
      width,
#ifdef DASH_ENABLED
      1.0,
      vec2<f32>(0.0, 1.0),
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    varyings.vPathBounds = vec2<f32>(0.0, join.pathLength);
#endif

    geometry.position = vec4<f32>(currPositionCommon + join.offset, 1.0);
    geometry.uv = join.pathPosition;
    varyings.position = project_common_position_to_clipspace(geometry.position);
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  varyings.vColor = vec4<f32>(
    attributes.instanceColors.rgb,
    attributes.instanceColors.a * layer.opacity
  );
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.vPathPosition;

#ifdef ANTIALIASING
  // Coordinates of the outer silhouette, in units of half-width: rounded joints and caps are
  // bounded by the corner offset, everywhere else by the edge of the stroke. Dividing by the
  // screen-space derivative converts the distance to the boundary into device pixels, which stays
  // correct under perspective foreshortening and under extensions that rescale the stroke.
#ifdef DASH_ENABLED
  let isCorner =
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y;
#else
  let isCorner = varyings.vPathPosition.y < 0.0 || varyings.vPathPosition.y > varyings.vPathLength;
#endif
  let isRound = varyings.vJointType > 0.5;

  // Distance to the silhouette in device pixels, from the derivative of the coordinate that
  // bounds it. Computed before the discards below: derivatives need uniform control flow and are
  // undefined after a discard in the quad. See dev-docs/RFCs/v9.4/analytic-antialiasing-rfc.md
  let bodyCoord = abs(varyings.vPathPosition.x);
  let cornerCoord = length(varyings.vCornerOffset);
  // Both evaluated so each derivative stays on one field across the corner/body boundary
  let bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
  let cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
  // Rounded corners still intersect the stroke-width envelope. Extensions may remap
  // vPathPosition.x independently of vCornerOffset, as PathStyleExtension does for offsets.
  let edgePixels = select(bodyPixels, min(cornerPixels, bodyPixels), isRound && isCorner);
#else
  let edgePixels = select(bodyPixels, cornerPixels, isRound && isCorner);
#endif

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  if (isCorner) {
    if (!isRound && varyings.vMiterLength > path.miterLimit + 1.0) {
      discard;
    }
  }

  var color = varyings.vColor;

  // Feather one device pixel across the width only, before premultiplication. edgePixels is a
  // signed device-pixel distance and SMOOTH_EDGE_RADIUS is 0.5, so this ramps across one pixel.
  color.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
  if (
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y
  ) {
#else
  if (
    varyings.vPathPosition.y < 0.0 ||
    varyings.vPathPosition.y > varyings.vPathLength
  ) {
#endif
    if (varyings.vJointType > 0.5 && length(varyings.vCornerOffset) > 1.0) {
      discard;
    }
    if (
      varyings.vJointType < 0.5 &&
      varyings.vMiterLength > path.miterLimit + 1.0
    ) {
      discard;
    }
  }
#endif

  // Fragment-layer injections that discard pixels must run after analytic coverage derivatives.
  // See TripsLayer, which rejects fragments outside of the active time window at this anchor.
  // DECKGL_FILTER_COLOR
  clip_filterColor(varyings.clipCoordinates);
#ifdef ANTIALIASING
  return deckgl_premultiplied_alpha(color);
#else
  return deckgl_premultiplied_alpha(varyings.vColor);
#endif
}
`,dn=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in float rowIndexes;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
#ifdef DASH_ENABLED
out vec2 vPathBounds;
#endif
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
#ifdef DASH_ENABLED
, float sourcePathLength, vec2 sourcePathRange
#endif
#ifdef ANTIALIASING
, float coverageScale
#endif
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
#ifdef DASH_ENABLED
vec3 currDelta3 = isEnd ? deltaA3 : deltaB3;
float currLength2D = length(currDelta3.xy);
float arcLengthRatio = 1.0;
float pathPositionOffset = 0.0;
float pathLength = L;
if (path.billboard) {
float visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
arcLengthRatio = L > 0.0 ? visiblePathLength / L : 0.0;
pathPositionOffset = sourcePathLength * sourcePathRange.x;
pathLength = sourcePathLength;
} else if (currLength2D > 0.0) {
arcLengthRatio = length(currDelta3) / currLength2D;
pathLength = L * arcLengthRatio;
}
#endif
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
#ifdef ANTIALIASING
vec2 coverageOffsetVec = offsetVec * coverageScale;
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = coverageOffsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = coverageOffsetVec + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(coverageOffsetVec * width * isValid, 0.0);
#else
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
#endif
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
#ifdef DASH_ENABLED
vec2 getClippedPathRange(float startW, float endW) {
bool startClipped = startW < EPSILON;
bool endClipped = endW < EPSILON;
if (startClipped && endClipped) {
return vec2(0.0);
}
if (startClipped || endClipped) {
float intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
return startClipped ? vec2(intersection, 1.0) : vec2(0.0, intersection);
}
return vec2(0.0, 1.0);
}
#endif
void main() {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
#ifdef DASH_ENABLED
vec4 prevPositionCommon;
vec4 nextPositionCommon;
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET, prevPositionCommon
);
#else
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET
);
#endif
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
#ifdef DASH_ENABLED
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET, nextPositionCommon
);
#else
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET
);
#endif
#ifdef DASH_ENABLED
vec4 sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
vec4 sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
vec2 billboardPathRange = getClippedPathRange(
sourcePathStartScreen.w, sourcePathEndScreen.w
);
#endif
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = vec2(0.5 / project.devicePixelRatio);
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
#ifdef DASH_ENABLED
vec3 currentDeltaCommon = isEnd > 0.0
? geometry.position.xyz - prevPositionCommon.xyz
: nextPositionCommon.xyz - geometry.position.xyz;
float billboardPathLength = width.x > 0.0
? length(currentDeltaCommon) * project.scale / (width.x * project.focalDistance)
: 0.0;
#endif
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
#ifdef DASH_ENABLED
,
billboardPathLength, billboardPathRange
#endif
#ifdef ANTIALIASING
,
coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = billboardPathLength * billboardPathRange;
#endif
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = project_pixel_size(vec2(0.5 / project.devicePixelRatio));
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
vec3 offset = getLineJoinOffset(
prevPosition, currPosition, nextPosition, width.xy
#ifdef DASH_ENABLED
, 1.0, vec2(0.0, 1.0)
#endif
#ifdef ANTIALIASING
, coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = vec2(0.0, vPathLength);
#endif
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,un=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
#ifdef DASH_ENABLED
in vec2 vPathBounds;
#endif
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
#ifdef ANTIALIASING
#ifdef DASH_ENABLED
bool isCorner = vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y;
#else
bool isCorner = vPathPosition.y < 0.0 || vPathPosition.y > vPathLength;
#endif
bool isRound = vJointType > 0.5;
float bodyCoord = abs(vPathPosition.x);
float cornerCoord = length(vCornerOffset);
float bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
float cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
float edgePixels = isRound && isCorner ? min(cornerPixels, bodyPixels) : bodyPixels;
#else
float edgePixels = isRound && isCorner ? cornerPixels : bodyPixels;
#endif
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
if (isCorner) {
if (!isRound && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
fragColor.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
if (vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y) {
#else
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
#endif
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Ut=[0,0,0,255],gn={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},antialiasing:!1,billboard:!1,_pathType:null,getPath:{type:"accessor",value:e=>e.path},getColor:{type:"accessor",value:Ut},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},Qe={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};function pn(e){if(e.isGeospatial)return null;const{unitsPerMeter:t}=e.distanceScales;return[t[0],t[1],t[2]]}function Wt(e,t){return e===t||!!(e&&t&&e.length===t.length&&e.every((i,o)=>i===t[o]))}var pe=class extends oe{getShaders(){const{antialiasing:e}=this.props;return super.getShaders({vs:dn,fs:un,source:fn,defines:e?{ANTIALIASING:1}:{},modules:[ie,ee,te,cn,...this.context.device.type==="webgpu"?[Ze]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.context.device.type==="webgpu"?null:this.getAttributeManager()?.getBounds(["vertexPositions"])}getPathProjectionScale(e){const t=this.props.coordinateSystem;if(!this.getAttributeManager()?.getAttributes().instanceDashOffsets)return null;if(e instanceof Si&&e.zoom>=12&&(t==="default"||t==="lnglat"||t==="cartesian")){const o=wi.getUniforms({viewport:e,coordinateSystem:t,coordinateOrigin:this.props.coordinateOrigin,autoWrapLongitude:this.wrapLongitude});return[e.projectionMode,o.coordinateOrigin[1],o.commonOrigin[1],...o.commonUnitsPerWorldUnit,...o.commonUnitsPerWorldUnit2,o.commonUnitsPerMeter[2]]}const i=pn(e);return i?[e.projectionMode,...i]:[e.projectionMode]}shouldUpdateState(e){const{viewport:t}=this.context;return super.shouldUpdateState(e)||this.state?.tessellationResolution!==t.resolution||!Wt(this.state?.pathProjectionScale,this.getPathProjectionScale(t))}initializeState(){const t=this.context.device.type==="webgpu";this.getAttributeManager().addInstanced({...t?{pathPositions:{size:24,type:"float32",transition:!1,accessor:"getPath",update:this.calculateWebGPUPositions,shaderAttributes:{instanceLeftPositions:{size:3,elementOffset:0},instanceStartPositions:{size:3,elementOffset:3},instanceEndPositions:{size:3,elementOffset:6},instanceRightPositions:{size:3,elementOffset:9},instanceLeftPositions64Low:{size:3,elementOffset:12},instanceStartPositions64Low:{size:3,elementOffset:15},instanceEndPositions64Low:{size:3,elementOffset:18},instanceRightPositions64Low:{size:3,elementOffset:21}},noAlloc:!0}}:{vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:Qe,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}}},instanceTypes:{size:1,type:t?"float32":"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:t?!1:Qe,defaultValue:1,bufferGroup:"path-instance-data"},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:t?!1:Qe,defaultValue:Ut,bufferGroup:"path-instance-data"},rowIndexes:{size:1,type:"uint32",accessor:(i,{index:o})=>i&&i.__source?i.__source.index:o,bufferGroup:"path-instance-data"}}),this.setState({pathTesselator:new an({fp64:this.use64bitPositions(),isWebGPU:t}),tessellationResolution:this.context.viewport.resolution,pathProjectionScale:this.getPathProjectionScale(this.context.viewport)})}updateState(e){super.updateState(e);const{props:t,oldProps:i,changeFlags:o}=e,n=this.getAttributeManager(),{viewport:s}=this.context,r=this.state.tessellationResolution!==s.resolution,a=this.getPathProjectionScale(s),c=!Wt(this.state.pathProjectionScale,a),l=o.updateTriggersChanged&&(o.updateTriggersChanged.all||o.updateTriggersChanged.getPath)||t._pathType!==i._pathType||t.positionFormat!==i.positionFormat||t.wrapLongitude!==i.wrapLongitude||r;if(o.dataChanged||l){const{pathTesselator:d}=this.state,g=t.data.attributes||{};d.updateGeometry({data:t.data,geometryBuffer:g.getPath,buffers:g,normalize:!t._pathType,loop:t._pathType==="loop",getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:s.resolution,dataChanged:l?void 0:o.dataChanged}),this.setState({numInstances:d.instanceCount,startIndices:d.vertexStarts,tessellationResolution:s.resolution,pathProjectionScale:a}),!o.dataChanged||l?n.invalidateAll():c&&n.invalidate("instanceDashOffsets")}else c&&(this.setState({pathProjectionScale:a}),n.invalidate("instanceDashOffsets"));(o.extensionsChanged||t.antialiasing!==i.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),n.invalidateAll())}getPickingInfo(e){const t=super.getPickingInfo(e),{index:i}=t,o=this.props.data;return o[0]&&o[0].__source&&(t.object=o.find(n=>n.__source.index===i)),t}disablePickingIndex(e){const t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){const{jointRounded:t,capRounded:i,billboard:o,miterLimit:n,widthUnits:s,widthScale:r,widthMinPixels:a,widthMaxPixels:c}=this.props,l=this.state.model,d={jointType:Number(t),capType:Number(i),billboard:o,widthUnits:Y[s],widthScale:r,miterLimit:n,widthMinPixels:a,widthMaxPixels:c};l.shaderInputs.setProps({path:d}),l.draw(this.context.renderPass)}_getModel(){const e=[0,1,2,1,4,2,1,3,4,3,5,4],t=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new Z(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new X({topology:"triangle-list",attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(t),size:2}}}),isInstanced:!0})}calculatePositions(e){const{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateSegmentTypes(e){const{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("segmentTypes")}calculateWebGPUPositions(e){const{pathTesselator:t}=this.state,i=t.get("positions");if(!i){e.value=null;return}const o=t.instanceCount,n=new Float32Array(o*24),s=[-1,0,1,2];for(let r=0;r<o;r++){const a=r*24;for(let c=0;c<4;c++){const l=r+s[c],d=a+c*3;for(let g=0;g<3;g++){const h=l>=0&&l<o?i[l*3+g]:0,v=Math.fround(h);n[d+g]=v,n[d+g+12]=h-v}}}e.startIndices=t.vertexStarts,e.value=n}};pe.defaultProps=gn,pe.layerName="PathLayer";var hn=Pi(_i(((e,t)=>{t.exports=i,t.exports.default=i;function i(f,p,u){u=u||2;var x=p&&p.length,m=x?p[0]*u:f.length,y=o(f,0,m,u,!0),P=[];if(!y||y.next===y.prev)return P;var b,A,w,G,D,R,V;if(x&&(y=d(f,p,y,u)),f.length>80*u){b=w=f[0],A=G=f[1];for(var F=u;F<m;F+=u)D=f[F],R=f[F+1],D<b&&(b=D),R<A&&(A=R),D>w&&(w=D),R>G&&(G=R);V=Math.max(w-b,G-A),V=V!==0?32767/V:0}return s(y,P,u,b,A,V,0),P}function o(f,p,u,x,m){var y,P;if(m===re(f,p,u,x)>0)for(y=p;y<u;y+=x)P=ne(y,f[y],f[y+1],P);else for(y=u-x;y>=p;y-=x)P=ne(y,f[y],f[y+1],P);return P&&W(P,P.next)&&(j(P),P=P.next),P}function n(f,p){if(!f)return f;p||(p=f);var u=f,x;do if(x=!1,!u.steiner&&(W(u,u.next)||L(u.prev,u,u.next)===0)){if(j(u),u=p=u.prev,u===u.next)break;x=!0}else u=u.next;while(x||u!==p);return p}function s(f,p,u,x,m,y,P){if(f){!P&&y&&C(f,x,m,y);for(var b=f,A,w;f.prev!==f.next;){if(A=f.prev,w=f.next,y?a(f,x,m,y):r(f)){p.push(A.i/u|0),p.push(f.i/u|0),p.push(w.i/u|0),j(f),f=w.next,b=w.next;continue}if(f=w,f===b){P?P===1?(f=c(n(f),p,u),s(f,p,u,x,m,y,2)):P===2&&l(f,p,u,x,m,y):s(n(f),p,u,x,m,y,1);break}}}}function r(f){var p=f.prev,u=f,x=f.next;if(L(p,u,x)>=0)return!1;for(var m=p.x,y=u.x,P=x.x,b=p.y,A=u.y,w=x.y,G=m<y?m<P?m:P:y<P?y:P,D=b<A?b<w?b:w:A<w?A:w,R=m>y?m>P?m:P:y>P?y:P,V=b>A?b>w?b:w:A>w?A:w,F=x.next;F!==p;){if(F.x>=G&&F.x<=R&&F.y>=D&&F.y<=V&&O(m,b,y,A,P,w,F.x,F.y)&&L(F.prev,F,F.next)>=0)return!1;F=F.next}return!0}function a(f,p,u,x){var m=f.prev,y=f,P=f.next;if(L(m,y,P)>=0)return!1;for(var b=m.x,A=y.x,w=P.x,G=m.y,D=y.y,R=P.y,V=b<A?b<w?b:w:A<w?A:w,F=G<D?G<R?G:R:D<R?D:R,le=b>A?b>w?b:w:A>w?A:w,ce=G>D?G>R?G:R:D>R?D:R,ct=I(V,F,p,u,x),ft=I(le,ce,p,u,x),z=f.prevZ,M=f.nextZ;z&&z.z>=ct&&M&&M.z<=ft;){if(z.x>=V&&z.x<=le&&z.y>=F&&z.y<=ce&&z!==m&&z!==P&&O(b,G,A,D,w,R,z.x,z.y)&&L(z.prev,z,z.next)>=0||(z=z.prevZ,M.x>=V&&M.x<=le&&M.y>=F&&M.y<=ce&&M!==m&&M!==P&&O(b,G,A,D,w,R,M.x,M.y)&&L(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;z&&z.z>=ct;){if(z.x>=V&&z.x<=le&&z.y>=F&&z.y<=ce&&z!==m&&z!==P&&O(b,G,A,D,w,R,z.x,z.y)&&L(z.prev,z,z.next)>=0)return!1;z=z.prevZ}for(;M&&M.z<=ft;){if(M.x>=V&&M.x<=le&&M.y>=F&&M.y<=ce&&M!==m&&M!==P&&O(b,G,A,D,w,R,M.x,M.y)&&L(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function c(f,p,u){var x=f;do{var m=x.prev,y=x.next.next;!W(m,y)&&H(m,x,x.next,y)&&U(m,y)&&U(y,m)&&(p.push(m.i/u|0),p.push(x.i/u|0),p.push(y.i/u|0),j(x),j(x.next),x=f=y),x=x.next}while(x!==f);return n(x)}function l(f,p,u,x,m,y){var P=f;do{for(var b=P.next.next;b!==P.prev;){if(P.i!==b.i&&T(P,b)){var A=Q(P,b);P=n(P,P.next),A=n(A,A.next),s(P,p,u,x,m,y,0),s(A,p,u,x,m,y,0);return}b=b.next}P=P.next}while(P!==f)}function d(f,p,u,x){for(var m=[],y=0,P=p.length,b,A,w;y<P;y++)b=p[y]*x,A=y<P-1?p[y+1]*x:f.length,w=o(f,b,A,x,!1),w===w.next&&(w.steiner=!0),m.push(E(w));for(m.sort(g),y=0;y<m.length;y++)u=h(m[y],u);return u}function g(f,p){return f.x-p.x}function h(f,p){var u=v(f,p);if(!u)return p;var x=Q(u,f);return n(x,x.next),n(u,u.next)}function v(f,p){var u=p,x=f.x,m=f.y,y=-1/0,P;do{if(m<=u.y&&m>=u.next.y&&u.next.y!==u.y){var b=u.x+(m-u.y)*(u.next.x-u.x)/(u.next.y-u.y);if(b<=x&&b>y&&(y=b,P=u.x<u.next.x?u:u.next,b===x))return P}u=u.next}while(u!==p);if(!P)return null;var A=P,w=P.x,G=P.y,D=1/0,R;u=P;do x>=u.x&&u.x>=w&&x!==u.x&&O(m<G?x:y,m,w,G,m<G?y:x,m,u.x,u.y)&&(R=Math.abs(m-u.y)/(x-u.x),U(u,f)&&(R<D||R===D&&(u.x>P.x||u.x===P.x&&_(P,u)))&&(P=u,D=R)),u=u.next;while(u!==A);return P}function _(f,p){return L(f.prev,f,p.prev)<0&&L(p.next,f,f.next)<0}function C(f,p,u,x){var m=f;do m.z===0&&(m.z=I(m.x,m.y,p,u,x)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==f);m.prevZ.nextZ=null,m.prevZ=null,S(m)}function S(f){var p,u,x,m,y,P,b,A,w=1;do{for(u=f,f=null,y=null,P=0;u;){for(P++,x=u,b=0,p=0;p<w&&(b++,x=x.nextZ,!!x);p++);for(A=w;b>0||A>0&&x;)b!==0&&(A===0||!x||u.z<=x.z)?(m=u,u=u.nextZ,b--):(m=x,x=x.nextZ,A--),y?y.nextZ=m:f=m,m.prevZ=y,y=m;u=x}y.nextZ=null,w*=2}while(P>1);return f}function I(f,p,u,x,m){return f=(f-u)*m|0,p=(p-x)*m|0,f=(f|f<<8)&16711935,f=(f|f<<4)&252645135,f=(f|f<<2)&858993459,f=(f|f<<1)&1431655765,p=(p|p<<8)&16711935,p=(p|p<<4)&252645135,p=(p|p<<2)&858993459,p=(p|p<<1)&1431655765,f|p<<1}function E(f){var p=f,u=f;do(p.x<u.x||p.x===u.x&&p.y<u.y)&&(u=p),p=p.next;while(p!==f);return u}function O(f,p,u,x,m,y,P,b){return(m-P)*(p-b)>=(f-P)*(y-b)&&(f-P)*(x-b)>=(u-P)*(p-b)&&(u-P)*(y-b)>=(m-P)*(x-b)}function T(f,p){return f.next.i!==p.i&&f.prev.i!==p.i&&!J(f,p)&&(U(f,p)&&U(p,f)&&$(f,p)&&(L(f.prev,f,p.prev)||L(f,p.prev,p))||W(f,p)&&L(f.prev,f,f.next)>0&&L(p.prev,p,p.next)>0)}function L(f,p,u){return(p.y-f.y)*(u.x-p.x)-(p.x-f.x)*(u.y-p.y)}function W(f,p){return f.x===p.x&&f.y===p.y}function H(f,p,u,x){var m=N(L(f,p,u)),y=N(L(f,p,x)),P=N(L(u,x,f)),b=N(L(u,x,p));return!!(m!==y&&P!==b||m===0&&k(f,u,p)||y===0&&k(f,x,p)||P===0&&k(u,f,x)||b===0&&k(u,p,x))}function k(f,p,u){return p.x<=Math.max(f.x,u.x)&&p.x>=Math.min(f.x,u.x)&&p.y<=Math.max(f.y,u.y)&&p.y>=Math.min(f.y,u.y)}function N(f){return f>0?1:f<0?-1:0}function J(f,p){var u=f;do{if(u.i!==f.i&&u.next.i!==f.i&&u.i!==p.i&&u.next.i!==p.i&&H(u,u.next,f,p))return!0;u=u.next}while(u!==f);return!1}function U(f,p){return L(f.prev,f,f.next)<0?L(f,p,f.next)>=0&&L(f,f.prev,p)>=0:L(f,p,f.prev)<0||L(f,f.next,p)<0}function $(f,p){var u=f,x=!1,m=(f.x+p.x)/2,y=(f.y+p.y)/2;do u.y>y!=u.next.y>y&&u.next.y!==u.y&&m<(u.next.x-u.x)*(y-u.y)/(u.next.y-u.y)+u.x&&(x=!x),u=u.next;while(u!==f);return x}function Q(f,p){var u=new B(f.i,f.x,f.y),x=new B(p.i,p.x,p.y),m=f.next,y=p.prev;return f.next=p,p.prev=f,u.next=m,m.prev=u,x.next=u,u.prev=x,y.next=x,x.prev=y,x}function ne(f,p,u,x){var m=new B(f,p,u);return x?(m.next=x.next,m.prev=x,x.next.prev=m,x.next=m):(m.prev=m,m.next=m),m}function j(f){f.next.prev=f.prev,f.prev.next=f.next,f.prevZ&&(f.prevZ.nextZ=f.nextZ),f.nextZ&&(f.nextZ.prevZ=f.prevZ)}function B(f,p,u){this.i=f,this.x=p,this.y=u,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}i.deviation=function(f,p,u,x){var m=p&&p.length,y=m?p[0]*u:f.length,P=Math.abs(re(f,0,y,u));if(m)for(var b=0,A=p.length;b<A;b++){var w=p[b]*u,G=b<A-1?p[b+1]*u:f.length;P-=Math.abs(re(f,w,G,u))}var D=0;for(b=0;b<x.length;b+=3){var R=x[b]*u,V=x[b+1]*u,F=x[b+2]*u;D+=Math.abs((f[R]-f[F])*(f[V+1]-f[R+1])-(f[R]-f[V])*(f[F+1]-f[R+1]))}return P===0&&D===0?0:Math.abs((D-P)/P)};function re(f,p,u,x){for(var m=0,y=p,P=u-x;y<u;y+=x)m+=(f[P]-f[y])*(f[y+1]+f[P+1]),P=y;return m}i.flatten=function(f){for(var p=f[0][0].length,u={vertices:[],holes:[],dimensions:p},x=0,m=0;m<f.length;m++){for(var y=0;y<f[m].length;y++)for(var P=0;P<p;P++)u.vertices.push(f[m][y][P]);m>0&&(x+=f[m-1].length,u.holes.push(x))}return u}}))(),1),we=$e.CLOCKWISE,Vt=$e.COUNTER_CLOCKWISE,se={isClosed:!0};function vn(e){if(e=e&&e.positions||e,!Array.isArray(e)&&!ArrayBuffer.isView(e))throw new Error("invalid polygon")}function he(e){return"positions"in e?e.positions:e}function Ae(e){return"holeIndices"in e?e.holeIndices:null}function xn(e){return Array.isArray(e[0])}function mn(e){return e.length>=1&&e[0].length>=2&&Number.isFinite(e[0][0])}function yn(e){const t=e[0],i=e[e.length-1];return t[0]===i[0]&&t[1]===i[1]&&t[2]===i[2]}function Pn(e,t,i,o){for(let n=0;n<t;n++)if(e[i+n]!==e[o-t+n])return!1;return!0}function Ht(e,t,i,o,n){let s=t;const r=i.length;for(let a=0;a<r;a++)for(let c=0;c<o;c++)e[s++]=i[a][c]||0;if(!yn(i))for(let a=0;a<o;a++)e[s++]=i[0][a]||0;return se.start=t,se.end=s,se.size=o,Ke(e,n,se),s}function Zt(e,t,i,o,n=0,s,r){s=s||i.length;const a=s-n;if(a<=0)return t;let c=t;for(let l=0;l<a;l++)e[c++]=i[n+l];if(!Pn(i,o,n,s))for(let l=0;l<o;l++)e[c++]=i[n+l];return se.start=t,se.end=c,se.size=o,Ke(e,r,se),c}function $t(e,t){vn(e);const i=[],o=[];if("positions"in e){const{positions:n,holeIndices:s}=e;if(s){let r=0;for(let a=0;a<=s.length;a++)r=Zt(i,r,n,t,s[a-1],s[a],a===0?we:Vt),o.push(r);return o.pop(),{positions:i,holeIndices:o}}e=n}if(!xn(e))return Zt(i,0,e,t,0,i.length,we),i;if(!mn(e)){let n=0;for(const[s,r]of e.entries())n=Ht(i,n,r,t,s===0?we:Vt),o.push(n);return o.pop(),{positions:i,holeIndices:o}}return Ht(i,0,e,t,we),i}function et(e,t,i){const o=e.length/3;let n=0;for(let s=0;s<o;s++){const r=(s+1)%o;n+=e[s*3+t]*e[r*3+i],n-=e[r*3+t]*e[s*3+i]}return Math.abs(n/2)}function Kt(e,t,i,o){const n=e.length/3;for(let s=0;s<n;s++){const r=s*3,a=e[r+0],c=e[r+1],l=e[r+2];e[r+t]=a,e[r+i]=c,e[r+o]=l}}function _n(e,t,i,o){let n=Ae(e);n&&(n=n.map(a=>a/t));let s=he(e);const r=o&&t===3;if(i){const a=s.length;s=s.slice();const c=[];for(let l=0;l<a;l+=t){c[0]=s[l],c[1]=s[l+1],r&&(c[2]=s[l+2]);const d=i(c);s[l]=d[0],s[l+1]=d[1],r&&(s[l+2]=d[2])}}if(r){const a=et(s,0,1),c=et(s,0,2),l=et(s,1,2);if(!a&&!c&&!l)return[];a>c&&a>l||(c>l?(i||(s=s.slice()),Kt(s,0,2,1)):(i||(s=s.slice()),Kt(s,2,0,1)))}return(0,hn.default)(s,n,t)}var Cn=class extends ut{constructor(e){const{fp64:t,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:i,size:1}}})}get(e){const{attributes:t}=this;return e==="indices"?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);const t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw new Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){const t=$t(e,this.positionSize);return this.opts.resolution?zt(he(t),Ae(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?Uo(he(t),Ae(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(Xt(e)){let t=0;for(const i of e)t+=this.getGeometrySize(i);return t}return he(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&Xt(e))for(const i of e){const o=this.getGeometrySize(i);t.geometrySize=o,this.updateGeometryAttributes(i,t),t.vertexStart+=o,t.indexStart=this.indexStarts[t.geometryIndex+1]}else{const i=e;this._updateIndices(i,t),this._updatePositions(i,t),this._updateVertexValid(i,t)}}_updateIndices(e,{geometryIndex:t,vertexStart:i,indexStart:o}){const{attributes:n,indexStarts:s,typedArrayManager:r}=this;let a=n.indices;if(!a||!e)return;let c=o;const l=_n(e,this.positionSize,this.opts.preproject,this.opts.full3d);a=r.allocate(a,o+l.length,{copy:!0});for(let d=0;d<l.length;d++)a[c++]=l[d]+i;s[t+1]=o+l.length,n.indices=a}_updatePositions(e,{vertexStart:t,geometrySize:i}){const{attributes:{positions:o},positionSize:n}=this;if(!o||!e)return;const s=he(e);for(let r=t,a=0;a<i;r++,a++){const c=s[a*n],l=s[a*n+1],d=n>2?s[a*n+2]:0;o[r*3]=c,o[r*3+1]=l,o[r*3+2]=d}}_updateVertexValid(e,{vertexStart:t,geometrySize:i}){const{positionSize:o}=this,n=this.attributes.vertexValid,s=e&&Ae(e);if(e&&e.edgeTypes?n.set(e.edgeTypes,t):n.fill(1,t,t+i),s)for(let r=0;r<s.length;r++)n[t+s[r]/o-1]=0;n[t+i-1]=0}};function Xt(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}var bn=`struct SolidPolygonUniforms {
  extruded: f32,
  isWireframe: f32,
  elevationScale: f32,
};

@group(0) @binding(auto) var<uniform> solidPolygon: SolidPolygonUniforms;
`,Jt=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,Sn={name:"solidPolygon",source:bn,vs:Jt,fs:Jt,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},Yt=`in vec4 fillColors;
in vec4 lineColors;
in float rowIndexes;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Ln=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${Yt}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,wn=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${Yt}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,An=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function qt(){return`fn project_offset_normal(vector: vec3<f32>) -> vec3<f32> {
  if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project.commonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

fn apply_polygon_color(
  colors: vec4<f32>,
  normal: vec3<f32>,
  position: vec4<f32>
) -> vec4<f32> {
  if (solidPolygon.extruded > 0.5) {
    let lightColor = lighting_getLightColor2(
      colors.rgb,
      project.cameraPosition,
      position.xyz,
      normal
    );
    return vec4<f32>(lightColor, colors.a * layer.opacity);
  }
  return vec4<f32>(colors.rgb, colors.a * layer.opacity);
}
`}function Qt(){return`@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0, 0.0);

  clip_filterColor(inp.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = inp.vColor;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`}function In(){return`${qt()}

struct Attributes {
  @location(0) vertexPositions: vec3<f32>,
  @location(1) vertexPositions64Low: vec3<f32>,
  @location(2) elevations: f32,
  @location(3) fillColors: vec4<f32>,
  @location(4) lineColors: vec4<f32>,
  @location(5) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;

  var pos = attributes.vertexPositions;
  if (solidPolygon.extruded > 0.5) {
    pos.z += attributes.elevations * solidPolygon.elevationScale;
  }

  geometry.worldPosition = attributes.vertexPositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    pos,
    attributes.vertexPositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_normal(vec3<f32>(0.0, 0.0, 1.0));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${Qt()}
`}function En(e){return`const RING_WINDING_ORDER_CW: bool = ${e?"true":"false"};

${qt()}

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) vertexPositions: vec3<f32>,
  @location(2) vertexPositions64Low: vec3<f32>,
  @location(3) nextVertexPositions: vec3<f32>,
  @location(4) nextVertexPositions64Low: vec3<f32>,
  @location(5) vertexValid: f32,
  @location(6) elevations: f32,
  @location(7) fillColors: vec4<f32>,
  @location(8) lineColors: vec4<f32>,
  @location(9) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;
  outp.position = vec4<f32>(0.0);
  outp.vColor = vec4<f32>(0.0);
  outp.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);
  outp.clipCoordinates = vec2<f32>(0.0);

  if (attributes.vertexValid < 0.5) {
    return outp;
  }

  let pos = select(attributes.nextVertexPositions, attributes.vertexPositions, RING_WINDING_ORDER_CW);
  let pos64Low = select(
    attributes.nextVertexPositions64Low,
    attributes.vertexPositions64Low,
    RING_WINDING_ORDER_CW
  );
  let nextPos = select(attributes.vertexPositions, attributes.nextVertexPositions, RING_WINDING_ORDER_CW);
  let nextPos64Low = select(
    attributes.vertexPositions64Low,
    attributes.nextVertexPositions64Low,
    RING_WINDING_ORDER_CW
  );

  let position = mix(pos, nextPos, attributes.positions.x);
  let position64Low = mix(pos64Low, nextPos64Low, attributes.positions.x);

  var worldPosition = position;
  if (solidPolygon.extruded > 0.5) {
    worldPosition.z += attributes.elevations * attributes.positions.y * solidPolygon.elevationScale;
  }

  geometry.worldPosition = position;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    worldPosition,
    position64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_offset_normal(vec3<f32>(
    pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
    nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
    0.0
  ));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${Qt()}
`}function On(e,t){return e==="top"?In():En(t)}var Ie=[0,0,0,255],Tn={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:e=>e.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:Ie},getLineColor:{type:"accessor",value:Ie},material:!0},Ee={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},ve=class extends oe{getShaders(e){const t=!this.props._normalize&&this.props._windingOrder==="CCW"?0:1;return super.getShaders({vs:e==="top"?Ln:wn,fs:An,source:On(e,!!t),defines:{RING_WINDING_ORDER_CW:t},modules:[ie,ee,Be,te,Sn,...this.context.device.type==="webgpu"?[Ze]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){const{viewport:e}=this.context;let{coordinateSystem:t}=this.props;const{_full3d:i}=this.props;e.isGeospatial&&t==="default"&&(t="lnglat");let o;t==="lnglat"&&(i?o=e.projectPosition.bind(e):o=e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new Cn({preproject:o,fp64:this.use64bitPositions(),IndexType:Uint32Array})});const n=this.getAttributeManager(),s=!0,r=this.context.device.type==="webgpu";n.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:s},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:Ee,accessor:"getPolygon",update:this.calculatePositions,noAlloc:s,...r?{}:{shaderAttributes:{nextVertexPositions:{vertexOffset:1}}}},...r?{nextVertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:!1,update:this.calculateNextPositions,noAlloc:s}}:{},[r?"vertexValid":"instanceVertexValid"]:{size:1,type:r?"float32":"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:s},elevations:{size:1,stepMode:"dynamic",transition:Ee,accessor:"getElevation",bufferGroup:"solid-polygon-instance-data"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:Ee,accessor:"getFillColor",defaultValue:Ie,bufferGroup:"solid-polygon-instance-data"},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:Ee,accessor:"getLineColor",defaultValue:Ie,bufferGroup:"solid-polygon-instance-data"},rowIndexes:{size:1,type:"uint32",stepMode:"dynamic",accessor:(a,{index:c})=>a&&a.__source?a.__source.index:c,bufferGroup:"solid-polygon-instance-data"}})}getPickingInfo(e){const t=super.getPickingInfo(e),{index:i}=t,o=this.props.data;return o[0]&&o[0].__source&&(t.object=o.find(n=>n.__source.index===i)),t}disablePickingIndex(e){const t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){const{extruded:t,filled:i,wireframe:o,elevationScale:n}=this.props,{topModel:s,sideModel:r,wireframeModel:a,polygonTesselator:c}=this.state,l={extruded:!!t,elevationScale:n,isWireframe:!1};a&&o&&(a.setInstanceCount(c.instanceCount-1),a.shaderInputs.setProps({solidPolygon:{...l,isWireframe:!0}}),a.draw(this.context.renderPass)),r&&i&&(r.setInstanceCount(c.instanceCount-1),r.shaderInputs.setProps({solidPolygon:l}),r.draw(this.context.renderPass)),s&&i&&(s.setVertexCount(c.vertexCount),s.shaderInputs.setProps({solidPolygon:l}),s.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);const{props:t,oldProps:i,changeFlags:o}=e,n=this.getAttributeManager();(o.extensionsChanged||t.filled!==i.filled||t.extruded!==i.extruded)&&(this.state.models?.forEach(s=>s.destroy()),this.setState(this._getModels()),n.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){const{polygonTesselator:o}=this.state,n=e.data.attributes||{};o.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:n.getPolygon,buffers:this.context.device.type==="webgpu"?{...n}:n,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:o.instanceCount,startIndices:o.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){const{id:e,filled:t,extruded:i}=this.props;let o,n,s;if(t){const r=this.getShaders("top");r.defines={...r.defines,NON_INSTANCED_MODEL:1};let a=this.getAttributeManager().getBufferLayouts({isInstanced:!1});this.context.device.type==="webgpu"&&(a=a.filter(c=>c.name!=="indices"&&c.name!=="vertexValid"&&c.name!=="instanceVertexValid"&&c.name!=="nextVertexPositions")),o=new Z(this.context.device,{...r,id:`${e}-top`,topology:"triangle-list",bufferLayout:a,isIndexed:!0,userData:{excludeAttributes:{vertexValid:!0,instanceVertexValid:!0,nextVertexPositions:!0}}})}if(i){let r=this.getAttributeManager().getBufferLayouts({isInstanced:!0});this.context.device.type==="webgpu"&&(r=r.filter(a=>a.name!=="indices")),n=new Z(this.context.device,{...this.getShaders("side"),id:`${e}-side`,bufferLayout:r,geometry:new X({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),s=new Z(this.context.device,{...this.getShaders("side"),id:`${e}-wireframe`,bufferLayout:r,geometry:new X({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[n,s,o].filter(Boolean),topModel:o,sideModel:n,wireframeModel:s}}calculateIndices(e){const{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get("indices")}calculatePositions(e){const{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts;const i=this.props.data.attributes?.getPolygon;if(this.context.device.type==="webgpu"&&ArrayBuffer.isView(i?.value)){const{value:o,size:n=3,offset:s=0,stride:r}=i,a=s/o.BYTES_PER_ELEMENT,c=r?r/o.BYTES_PER_ELEMENT:n,l=new Float64Array(t.instanceCount*3);for(let d=0;d<t.instanceCount;d++){const g=a+d*c,h=d*3;l[h]=o[g],l[h+1]=o[g+1],l[h+2]=n>2?o[g+2]:0}e.value=l;return}e.value=t.get("positions")}calculateVertexValid(e){const t=this.props.data.attributes?.instanceVertexValid?.value,i=this.context.device.type==="webgpu"&&t?t:this.state.polygonTesselator.get("vertexValid");e.value=this.context.device.type==="webgpu"&&i?Float32Array.from(i):i}calculateNextPositions(e){const{polygonTesselator:t}=this.state,i=this.getAttributeManager().getAttributes(),o=i.vertexPositions.value,n=this.props.data.attributes?.instanceVertexValid?.value||i.vertexValid?.value||t.get("vertexValid");if(e.startIndices=t.vertexStarts,!o){e.value=o;return}const s=o.length/3,r=new o.constructor(o.length);for(let a=0;a<s;a++){const c=a*3,l=n?.[a]&&a+1<s?c+3:c;for(let d=0;d<3;d++)r[c+d]=o[l+d]}e.value=r}};ve.defaultProps=Tn,ve.layerName="SolidPolygonLayer";function ei({data:e,getIndex:t,dataRange:i,replace:o}){const{startRow:n=0,endRow:s=1/0}=i,r=e.length;let a=r,c=r;for(let g=0;g<r;g++){const h=t(e[g]);if(a>g&&h>=n&&(a=g),h>=s){c=g;break}}let l=a;const d=c-a!==o.length?e.slice(c):void 0;for(let g=0;g<o.length;g++)e[l++]=o[g];if(d){for(let g=0;g<d.length;g++)e[l++]=d[g];e.length=l}return{startRow:a,endRow:a+o.length}}var ti=[0,0,0,255],Rn={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,lineAntialiasing:!1,getPolygon:{type:"accessor",value:e=>e.polygon},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:ti},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0},tt=class extends Ne{initializeState(){this.state={paths:[],pathsDiff:null},this.props.getLineDashArray&&K.removed("getLineDashArray","PathStyleExtension")()}updateState({changeFlags:e}){const t=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(t&&Array.isArray(e.dataChanged)){const i=this.state.paths.slice(),o=e.dataChanged.map(n=>ei({data:i,getIndex:s=>s.__source.index,dataRange:n,replace:this._getPaths(n)}));this.setState({paths:i,pathsDiff:o})}else t&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){const{data:t,getPolygon:i,positionFormat:o,_normalize:n}=this.props,s=[],r=o==="XY"?2:3,{startRow:a,endRow:c}=e,{iterable:l,objectInfo:d}=ye(t,a,c);for(const g of l){d.index++;let h=i(g,d);n&&(h=$t(h,r));const{holeIndices:v}=h,_=h.positions||h;if(v)for(let C=0;C<=v.length;C++){const S=_.slice(v[C-1]||0,v[C]||_.length);s.push(this.getSubLayerRow({path:S},g,d.index))}else s.push(this.getSubLayerRow({path:_},g,d.index))}return s}renderLayers(){const{data:e,_dataDiff:t,stroked:i,filled:o,extruded:n,wireframe:s,_normalize:r,_windingOrder:a,elevationScale:c,transitions:l,positionFormat:d}=this.props,{lineWidthUnits:g,lineWidthScale:h,lineWidthMinPixels:v,lineWidthMaxPixels:_,lineJointRounded:C,lineMiterLimit:S,lineAntialiasing:I,lineDashJustified:E}=this.props,{getFillColor:O,getLineColor:T,getLineWidth:L,getLineDashArray:W,getElevation:H,getPolygon:k,updateTriggers:N,material:J}=this.props,{paths:U,pathsDiff:$}=this.state,Q=this.getSubLayerClass("fill",ve),ne=this.getSubLayerClass("stroke",pe),j=this.shouldRenderSubLayer("fill",U)&&new Q({_dataDiff:t,extruded:n,elevationScale:c,filled:o,wireframe:s,_normalize:r,_windingOrder:a,getElevation:H,getFillColor:O,getLineColor:n&&s?T:ti,material:J,transitions:l},this.getSubLayerProps({id:"fill",updateTriggers:N&&{getPolygon:N.getPolygon,getElevation:N.getElevation,getFillColor:N.getFillColor,lineColors:n&&s,getLineColor:N.getLineColor}}),{data:e,positionFormat:d,getPolygon:k}),B=!n&&i&&this.shouldRenderSubLayer("stroke",U)&&new ne({_dataDiff:$&&(()=>$),widthUnits:g,widthScale:h,widthMinPixels:v,widthMaxPixels:_,jointRounded:C,miterLimit:S,antialiasing:I,dashJustified:E,_pathType:"loop",transitions:l&&{getWidth:l.getLineWidth,getColor:l.getLineColor,getPath:l.getPolygon},getColor:this.getSubLayerAccessor(T),getWidth:this.getSubLayerAccessor(L),getDashArray:this.getSubLayerAccessor(W)},this.getSubLayerProps({id:"stroke",updateTriggers:N&&{getWidth:N.getLineWidth,getColor:N.getLineColor,getDashArray:N.getLineDashArray}}),{data:U,positionFormat:d,getPath:re=>re.path});return[!n&&j,B,n&&j]}};tt.layerName="PolygonLayer",tt.defaultProps=Rn;function zn(e,t){if(!e)return null;const i="startIndices"in e?e.startIndices[t]:t,o=e.featureIds.value[i];return i!==-1?Mn(e,o,i):null}function Mn(e,t,i){const o={properties:{...e.properties[t]}};for(const n in e.numericProps)o.properties[n]=e.numericProps[n].value[i];return o}function kn(e){const t={points:null,lines:null,polygons:null};for(const i in t){const o=e[i].globalFeatureIds.value;t[i]=new Uint32Array(o)}return t}var ii=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,Dn={name:"sdf",vs:ii,fs:ii,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}},xe={none:0,start:1,center:2,end:3},oi={name:"text",vs:`layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${xe.start}
#define ALIGN_MODE_CENTER ${xe.center}
#define ALIGN_MODE_END ${xe.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t="none",contentAlignVertical:i="none",fontSize:o,viewport:n})=>({cutoffPixels:e,align:[xe[t],xe[i]],fontSize:o,flipY:n?.flipY??!1}),uniformTypes:{cutoffPixels:"vec2<f32>",align:"vec2<i32>",fontSize:"f32",flipY:"f32"}},Fn=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in float rowIndexes;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,Nn=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function Bn({collision:e=!1}={}){return`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32
};

struct SdfUniforms {
  gamma: f32,
  enabled: f32,
  buffer: f32,
  outlineBuffer: f32,
  outlineColor: vec4<f32>
};

${e?`struct CollisionUniforms {
  sort: i32,
  enabled: i32
};
`:""}

const ALIGN_MODE_START: i32 = 1;
const ALIGN_MODE_CENTER: i32 = 2;
const ALIGN_MODE_END: i32 = 3;

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var<uniform> text: TextUniforms;
@group(0) @binding(auto) var<uniform> sdf: SdfUniforms;
${e?"@group(0) @binding(auto) var<uniform> collision: CollisionUniforms;":""}
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;
${e?`@group(0) @binding(auto) var collision_texture : texture_2d<f32>;
`:""}

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  return rotation * vertex;
}

fn get_pixel_offset_from_alignment(
  anchor: f32,
  extent: f32,
  clipStart: f32,
  clipEnd: f32,
  mode: i32
) -> f32 {
  if (clipEnd < clipStart) {
    return 0.0;
  }
  if (mode == ALIGN_MODE_START) {
    return max(-(anchor + clipStart), 0.0);
  }
  if (mode == ALIGN_MODE_CENTER) {
    let minValue = max(0.0, anchor + clipStart);
    let maxValue = min(extent, anchor + clipEnd);
    if (minValue < maxValue) {
      return (minValue + maxValue) / 2.0 - anchor;
    }
    return 0.0;
  }
  if (mode == ALIGN_MODE_END) {
    return min(extent - (anchor + clipEnd), 0.0);
  }
  return 0.0;
}

${e?`fn collision_match(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  let textureSize = vec2<i32>(textureDimensions(collision_texture));
  let pixelCoords = clamp(
    vec2<i32>(texCoords * vec2<f32>(textureSize)),
    vec2<i32>(0),
    textureSize - vec2<i32>(1)
  );
  let collisionPickingColor = textureLoad(collision_texture, pixelCoords, 0);
  let delta = dot(abs(collisionPickingColor.rgb - pickingColor), vec3<f32>(1.0));
  return step(delta, 0.001);
}

fn collision_is_visible(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  if (collision.enabled == 0) {
    return 1.0;
  }

  var accumulator = 0.0;
  let stepSize = vec2<f32>(1.0) / project.viewportSize;

  for (var i: i32 = -2; i <= 2; i = i + 1) {
    for (var j: i32 = -2; j <= 2; j = j + 1) {
      let delta = vec2<f32>(f32(j), f32(i)) * stepSize;
      accumulator = accumulator + collision_match(texCoords + delta, pickingColor);
    }
  }

  return pow(accumulator / 25.0, 2.2);
}
`:""}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  @location(10) rowIndexes: u32,
  @location(11) instanceClipRect: vec4<f32>,
  ${e?"@location(12) collisionPriorities: f32,":""}
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  var pos: vec4<f32>;
  var anchorPosScreen: vec2<f32>;
  if (icon.billboard != 0) {
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = pos.xy / pos.w;

    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    let anchorPos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = anchorPos.xy / anchorPos.w;
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offsetCommon);
  }

  anchorPosScreen = vec2<f32>(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 *
    project.viewportSize / project.devicePixelRatio;
  var xy = project_size_vec2(inp.instanceClipRect.xy) * project.scale;
  var wh = project_size_vec2(inp.instanceClipRect.zw) * project.scale;

  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (text.align.x > 0 || text.align.y > 0) {
    let viewportPixels = project.viewportSize / project.devicePixelRatio;
    let scrollPixels = vec2<f32>(
      get_pixel_offset_from_alignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
      -get_pixel_offset_from_alignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
    );
    pixelOffset = pixelOffset + scrollPixels;
    let scrollClipOffset = project_pixel_size_to_clipspace(scrollPixels);
    pos.x = pos.x + scrollClipOffset.x;
    pos.y = pos.y + scrollClipOffset.y;
  }

  if (inp.instanceClipRect.z >= 0.0) {
    if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.x > 0.0) {
      let viewportWidth = project.viewportSize.x / project.devicePixelRatio;
      let left = max(anchorPosScreen.x + xy.x, 0.0);
      let right = min(anchorPosScreen.x + xy.x + wh.x, viewportWidth);
      if (right - left < text.cutoffPixels.x) {
        pos = vec4<f32>(0.0);
      }
    }
  }
  if (inp.instanceClipRect.w >= 0.0) {
    if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.y > 0.0) {
      let viewportHeight = project.viewportSize.y / project.devicePixelRatio;
      let top = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
      let bottom = min(anchorPosScreen.y - xy.y, viewportHeight);
      if (bottom - top < text.cutoffPixels.y) {
        pos = vec4<f32>(0.0);
      }
    }
  }

  ${e?`  if (collision.sort != 0) {
    pos.z = -0.001 * inp.collisionPriorities * pos.w;
  }
  `:""}

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.position = pos;
  outp.vColor = inp.instanceColors;
  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);
  var alpha = texColor.a;
  var color = inp.vColor;

  if (sdf.enabled > 0.5) {
    let distance = alpha;
    alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);

    if (sdf.outlineBuffer > 0.0) {
      let inFill = alpha;
      let inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
      color = mix(sdf.outlineColor, inp.vColor, inFill);
      alpha = inBorder;
    }
  } else if (inp.vColorMode == 0.0) {
    color = texColor;
  }

  var a = alpha * color.a * layer.opacity;
  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  ${e?`  let collisionFade = collision_is_visible(inp.position.xy / project.viewportSize, inp.pickingColor);
  a = a * collisionFade;
  if (a <= 0.0001) {
    discard;
  }
  `:""}

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(color.rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}var jn=Bn(),it=192/256,Gn={getIconOffsets:{type:"accessor",value:e=>e.offsets},getContentBox:{type:"accessor",value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none"},Oe=class extends de{getShaders(){const e=super.getShaders();return{...e,modules:[...e.modules,oi,Dn],vs:Fn,fs:Nn,source:jn}}initializeState(){super.initializeState();const e=this.getAttributeManager(),t=e.attributes.instanceIconDefs;t.settings.update=this.calculateInstanceIconDefs,e.addInstanced({rowIndexes:{type:"uint32",size:1,bufferGroup:"icon-instance-data",accessor:(i,{index:o})=>o},instanceClipRect:{size:4,bufferGroup:"icon-instance-data",accessor:"getContentBox",defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);const{props:t,oldProps:i,changeFlags:o}=e,{outlineColor:n}=t;if(o.extensionsChanged){this.state.fillModel?.destroy();const s=this.context.device.type==="webgpu"?this._getModel(`${this.props.id}-fill`):void 0;this.setState({fillModel:s,models:s?[this.state.model,s]:[this.state.model]})}if(o.updateTriggersChanged&&(o.updateTriggersChanged.getIcon||o.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate("instanceIconDefs"),n!==i.outlineColor){const s=[n[0]/255,n[1]/255,n[2]/255,(n[3]??255)/255];this.setState({outlineColor:s})}!t.sdf&&t.outlineWidth&&K.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){const{sdf:t,smoothing:i,fontSize:o,outlineWidth:n,contentCutoffPixels:s,contentAlignHorizontal:r,contentAlignVertical:a}=this.props,{outlineColor:c}=this.state,l=n?Math.max(i,it*(1-n)):-1,d=this.state.model,g={buffer:it,outlineBuffer:l,gamma:i,enabled:!!t,outlineColor:c},h={contentCutoffPixels:s,contentAlignHorizontal:r,contentAlignVertical:a,fontSize:o,viewport:this.context.viewport};if(d.shaderInputs.setProps({sdf:g,text:h}),super.draw(e),t&&n){const{iconManager:v}=this.state;if(v.getTexture()){const _=this.state.fillModel||d;_.shaderInputs.setProps({sdf:{...g,outlineBuffer:it},text:h}),this._drawModel(_)}}}calculateInstanceIconDefs(e,{startRow:t,endRow:i}){const{data:o,getIcon:n,getIconOffsets:s}=this.props;let r=e.getVertexOffset(t);const a=e.value,{iterable:c,objectInfo:l}=ye(o,t,i);for(const d of c){l.index++;const g=n(d,l),h=s(d,l);if(g){let v=0;for(const _ of Array.from(g)){const C=super.getInstanceIconDef(_);C[0]=h[v*2],C[1]+=h[v*2+1],C[6]=1,a.set(C,r),r+=e.size,v++}}}}};Oe.defaultProps=Gn,Oe.layerName="MultiIconLayer";var ot=1e20,nt=new Float64Array(256);for(let e=0;e<256;e++){const t=.5-Math.pow(e/255,.45454545454545453);nt[e]=t*Math.abs(t)}nt[255]=-1e20;var Un=class{constructor({fontSize:e=24,buffer:t=3,radius:i=8,cutoff:o=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:r="normal",lang:a=null}={}){this.buffer=t,this.radius=i,this.cutoff=o,this.lang=a;const c=this.size=e+t*4,l=this._createCanvas(c),d=this.ctx=l.getContext("2d",{willReadFrequently:!0});d.font=`${r} ${s} ${e}px ${n}`,d.textBaseline="alphabetic",d.textAlign="left",d.fillStyle="black",this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(e){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(e,e);const t=document.createElement("canvas");return t.width=t.height=e,t}draw(e){const{width:t,actualBoundingBoxAscent:i,actualBoundingBoxDescent:o,actualBoundingBoxLeft:n,actualBoundingBoxRight:s}=this.ctx.measureText(e),r=Math.ceil(i),a=Math.floor(-n),c=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s)-a)),l=Math.max(0,Math.min(this.size-this.buffer,r+Math.ceil(o))),d=c+2*this.buffer,g=l+2*this.buffer,h=Math.max(d*g,0),v=new Uint8ClampedArray(h),_={data:v,width:d,height:g,glyphWidth:c,glyphHeight:l,glyphTop:r,glyphLeft:a,glyphAdvance:t};if(c===0||l===0)return _;const{ctx:C,buffer:S,gridInner:I,gridOuter:E}=this;this.lang&&(C.lang=this.lang),C.clearRect(S,S,c,l),C.fillText(e,S-a,S+r);const O=C.getImageData(S,S,c,l);E.fill(ot,0,h),I.fill(0,0,h);let T=3;for(let k=0;k<l;k++){let N=(k+S)*d+S;for(let J=0;J<c;J++,T+=4,N++){const U=O.data[T];if(U===0)continue;const $=nt[U];E[N]=Math.max(0,$),I[N]=Math.max(0,-$)}}ni(E,0,0,d,g,d,this.f,this.v,this.z);const L=Math.min(S,1);ni(I,S-L,S-L,c+2*L,l+2*L,d,this.f,this.v,this.z);const W=255/this.radius,H=255*(1-this.cutoff);for(let k=0;k<h;k++){const N=Math.sqrt(E[k])-Math.sqrt(I[k]);v[k]=Math.round(H-W*N)}return _}};function ni(e,t,i,o,n,s,r,a,c){for(let l=t;l<t+o;l++)si(e,i*s+l,s,n,r,a,c);for(let l=i;l<i+n;l++)si(e,l*s+t,1,o,r,a,c)}function si(e,t,i,o,n,s,r){s[0]=0,r[0]=-1e20,r[1]=ot,n[0]=e[t];for(let a=1,c=0,l=0;a<o;a++){n[a]=e[t+a*i];const d=a*a;do{const g=s[c];l=(n[a]-n[g]+d-g*g)/(a-g)/2}while(l<=r[c]&&--c>-1);c++,s[c]=a,r[c]=l,r[c+1]=ot}for(let a=0,c=0;a<o;a++){for(;r[c+1]<a;)c++;const l=s[c],d=a-l;e[t+a*i]=n[l]+d*d}}var Wn=32,Vn=[];function Hn(e){return Math.pow(2,Math.ceil(Math.log2(e)))}function Zn({characterSet:e,measureText:t,buffer:i,maxCanvasWidth:o,mapping:n={},xOffset:s=0,yOffsetMin:r=0,yOffsetMax:a=0}){let c=s,l=r,d=a;for(const g of e)if(!n[g]){const{advance:h,width:v,ascent:_,descent:C}=t(g),S=_+C;c+v+i*2>o&&(c=0,l=d),n[g]={x:c+i,y:l+i,width:v,height:S,advance:h,anchorX:v/2,anchorY:_},c+=v+i*2,d=Math.max(d,l+S+i*2)}return{mapping:n,xOffset:c,yOffsetMin:l,yOffsetMax:d,canvasHeight:Hn(d)}}function ri(e,t,i,o){let n=0;for(let s=t;s<i;s++){const r=e[s];n+=o[r]?.advance||0}return n}function ai(e,t,i,o,n,s){let r=t,a=0;for(let c=t;c<i;c++){const l=ri(e,c,c+1,n);a+l>o&&(r<c&&s.push(c),r=c,a=0),a+=l}return a}function $n(e,t,i,o,n,s){let r=t,a=t,c=t,l=0;for(let d=t;d<i;d++)if((e[d]===" "||e[d+1]===" "||d+1===i)&&(c=d+1),c>a){let g=ri(e,a,c,n);l+g>o&&(r<a&&(s.push(a),r=a,l=0),g>o&&(g=ai(e,a,c,o,n,s),r=s[s.length-1])),a=c,l+=g}return l}function Kn(e,t,i,o,n=0,s){s===void 0&&(s=e.length);const r=[];return t==="break-all"?ai(e,n,s,i,o,r):$n(e,n,s,i,o,r),r}function Xn(e,t,i,o,n,s){let r=0,a=0;for(let c=t;c<i;c++){const l=o[e[c]];l&&(a=Math.max(a,l.height))}for(let c=t;c<i;c++){const l=e[c],d=o[l];d?(n[c]=r+d.anchorX,r+=d.advance):(K.warn(`Missing character: ${l} (${l.codePointAt(0)})`)(),n[c]=r,r+=Wn)}s[0]=r,s[1]=a}function Jn(e,t,i,o,n,s){const r=Array.from(e),a=r.length,c=new Array(a),l=new Array(a),d=new Array(a),g=(o==="break-word"||o==="break-all")&&isFinite(n)&&n>0,h=[0,0],v=[0,0];let _=0,C=t+i/2,S=0,I=0;for(let E=0;E<=a;E++){const O=r[E];if((O===`
`||E===a)&&(I=E),I>S){const T=g?Kn(r,o,n,s,S,I):Vn;for(let L=0;L<=T.length;L++){const W=L===0?S:T[L-1],H=L<T.length?T[L]:I;Xn(r,W,H,s,c,v);for(let k=W;k<H;k++)l[k]=C,d[k]=v[0];_++,C+=i,h[0]=Math.max(h[0],v[0])}S=I}O===`
`&&(c[S]=0,l[S]=0,d[S]=0,S++)}return h[1]=_*i,{x:c,y:l,rowWidth:d,size:h}}function Yn({value:e,length:t,stride:i,offset:o,startIndices:n,characterSet:s}){const r=e.BYTES_PER_ELEMENT,a=i?i/r:1,c=o?o/r:0,l=n[t]||Math.ceil((e.length-c)/a),d=s&&new Set,g=new Array(t);let h=e;if(a>1||c>0){const v=e.constructor;h=new v(l);for(let _=0;_<l;_++)h[_]=e[_*a+c]}for(let v=0;v<t;v++){const _=n[v],C=n[v+1]||l,S=h.subarray(_,C);g[v]=String.fromCodePoint.apply(null,S),d&&S.forEach(d.add,d)}if(d)for(const v of d)s.add(String.fromCodePoint(v));return{texts:g,characterCount:l}}var li=class{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){const t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?(this.delete(e),this._cache[e]=t,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){const t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}};function qn(){const e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}var ae={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:qn(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},ci=1024,fi=.9,di=.3,ui=3,Te=new li(ui);function Qn(e,t){let i;typeof t=="string"?i=new Set(Array.from(t)):i=new Set(t);const o=Te.get(e);if(!o)return i;for(const n in o.mapping)i.has(n)&&i.delete(n);return i}function es(e,t){for(let i=0;i<e.length;i++)t.data[4*i+3]=e[i]}function gi(e,t,i,o){e.font=`${o} ${i}px ${t}`,e.fillStyle="#000",e.textBaseline="alphabetic",e.textAlign="left"}function ts(e,t,i){if(i===void 0){const n=e.measureText("A");return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:t*fi,descent:t*di}}const o=e.measureText(i);return o.actualBoundingBoxAscent?{advance:o.width,width:Math.ceil(o.actualBoundingBoxRight-o.actualBoundingBoxLeft),ascent:Math.ceil(o.actualBoundingBoxAscent),descent:Math.ceil(o.actualBoundingBoxDescent)}:{advance:o.width,width:o.width,ascent:t*fi,descent:t*di}}function is(e){K.assert(Number.isFinite(e)&&e>=ui,"Invalid cache limit"),Te=new li(e)}var os=class{constructor(){this.props={...ae}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();const t=Qn(this._key,this.props.characterSet),i=Te.get(this._key);if(i&&t.size===0){this._atlas!==i&&(this._atlas=i);return}const o=this._generateFontAtlas(t,i);this._atlas=o,Te.set(this._key,o)}_generateFontAtlas(e,t){const{fontFamily:i,fontWeight:o,fontSize:n,buffer:s,sdf:r,radius:a,cutoff:c}=this.props;let l=t&&t.data;l||(l=document.createElement("canvas"),l.width=ci);const d=l.getContext("2d",{willReadFrequently:!0});gi(d,i,n,o);const g=O=>ts(d,n,O);let h;this._getFontRenderer?h=this._getFontRenderer(this.props):r&&(h={measure:g,draw:ns(this.props)});const{mapping:v,canvasHeight:_,xOffset:C,yOffsetMin:S,yOffsetMax:I}=Zn({measureText:O=>h?h.measure(O):g(O),buffer:s,characterSet:e,maxCanvasWidth:ci,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(l.height!==_){const O=l.height>0?d.getImageData(0,0,l.width,l.height):null;l.height=_,O&&d.putImageData(O,0,0)}if(gi(d,i,n,o),h)for(const O of e){const T=v[O],L=T.width,{data:W,left:H=0,top:k=0}=h.draw(O),N=T.x-H,J=T.y-k,U=Math.max(0,Math.round(N)),$=Math.max(0,Math.round(J)),Q=Math.min(W.width,l.width-U),ne=Math.min(W.height,l.height-$);d.putImageData(W,U,$,0,0,Q,ne),T.x=U,T.y=$,T.width=Q,T.height=ne,T.anchorX+=Q/2-H-L/2,T.anchorY+=k}else for(const O of e){const T=v[O];d.fillText(O,T.x,T.y+T.anchorY)}const E=h?h.measure():g();return{baselineOffset:(E.ascent-E.descent)/2,xOffset:C,yOffsetMin:S,yOffsetMax:I,mapping:v,data:l,width:l.width,height:l.height}}_getKey(){const{fontFamily:e,fontWeight:t,fontSize:i,buffer:o,sdf:n,radius:s,cutoff:r}=this.props;return n?`${e} ${t} ${i} ${o} ${s} ${r}`:`${e} ${t} ${i} ${o}`}};function ns({fontSize:e,buffer:t,radius:i,cutoff:o,fontFamily:n,fontWeight:s}){const r=new Un({fontSize:e,buffer:t,radius:i,cutoff:o,fontFamily:n,fontWeight:`${s}`});return a=>{const{data:c,width:l,height:d}=r.draw(a),g=new ImageData(l,d);return es(c,g),{data:g,left:t,top:t}}}var ss=`struct TextBackgroundUniforms {
  billboard: f32,
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  borderRadius: vec4<f32>,
  padding: vec4<f32>,
  sizeUnits: i32,
  stroked: f32,
};

@group(0) @binding(auto) var<uniform> textBackground: TextBackgroundUniforms;
`,pi=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,rs={name:"textBackground",source:ss,vs:pi,fs:pi,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}},as=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,ls=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,cs=`struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32,
};

@group(0) @binding(auto) var<uniform> text: TextUniforms;

fn rotate_by_angle(vertex: vec2<f32>, angle: f32) -> vec2<f32> {
  let angleRadian = radians(angle);
  let cosine = cos(angleRadian);
  let sine = sin(angleRadian);
  let rotationMatrix = mat2x2<f32>(
    vec2<f32>(cosine, -sine),
    vec2<f32>(sine, cosine)
  );
  return rotationMatrix * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec2<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceRects: vec4<f32>,
  @location(6) instanceClipRect: vec4<f32>,
  @location(7) instancePixelOffsets: vec2<f32>,
  @location(8) instanceFillColors: vec4<f32>,
  @location(9) instanceLineColors: vec4<f32>,
  @location(10) instanceLineWidths: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) vLineWidth: f32,
  @location(3) uv: vec2<f32>,
  @location(4) dimensions: vec2<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  var varyings: Varyings;
  varyings.uv = attributes.positions;
  varyings.vLineWidth = attributes.instanceLineWidths;

  let sizePixels = clamp(
    project_unit_size_to_pixel(
      attributes.instanceSizes * textBackground.sizeScale,
      textBackground.sizeUnits
    ),
    textBackground.sizeMinPixels,
    textBackground.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  varyings.dimensions = attributes.instanceRects.zw * instanceScale +
    textBackground.padding.xy + textBackground.padding.zw;

  var pixelOffset =
    (attributes.positions * attributes.instanceRects.zw + attributes.instanceRects.xy) *
      instanceScale +
    mix(-textBackground.padding.xy, textBackground.padding.zw, attributes.positions);
  pixelOffset = rotate_by_angle(pixelOffset, attributes.instanceAngles);
  pixelOffset = pixelOffset + attributes.instancePixelOffsets;
  pixelOffset.y = pixelOffset.y * -1.0;

  var xy = project_size_vec2(attributes.instanceClipRect.xy) * project.scale;
  let wh = project_size_vec2(attributes.instanceClipRect.zw) * project.scale;
  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (attributes.instanceClipRect.z >= 0.0) {
    varyings.dimensions.x = wh.x;
    pixelOffset.x = xy.x + varyings.uv.x * wh.x + mix(
      -textBackground.padding.x,
      textBackground.padding.z,
      varyings.uv.x
    );
  }
  if (attributes.instanceClipRect.w >= 0.0) {
    varyings.dimensions.y = wh.y;
    pixelOffset.y = xy.y + varyings.uv.y * wh.y + mix(
      -textBackground.padding.y,
      textBackground.padding.w,
      varyings.uv.y
    );
  }

  if (textBackground.billboard > 0.5) {
    var position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    position = vec4<f32>(
      position.x + clipOffset.x,
      position.y + clipOffset.y,
      position.z,
      position.w
    );
    varyings.position = position;
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    varyings.position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offsetCommon
    );
  }

  varyings.vFillColor = vec4<f32>(
    attributes.instanceFillColors.rgb,
    attributes.instanceFillColors.a * layer.opacity
  );
  varyings.vLineColor = vec4<f32>(
    attributes.instanceLineColors.rgb,
    attributes.instanceLineColors.a * layer.opacity
  );
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

fn round_rect(point: vec2<f32>, size: vec2<f32>, radii: vec4<f32>) -> f32 {
  let pixelPosition = (point - 0.5) * size;
  let halfSize = size * 0.5;
  let maxBorderRadius = min(size.x, size.y) * 0.5;
  var borderRadius = min(radii, vec4<f32>(maxBorderRadius));

  borderRadius = select(borderRadius.zwxy, borderRadius, pixelPosition.x > 0.0);
  let radius = select(borderRadius.y, borderRadius.x, pixelPosition.y > 0.0);
  let q = abs(pixelPosition) - halfSize + radius;
  return -(min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius);
}

fn rect(point: vec2<f32>, size: vec2<f32>) -> f32 {
  let pixelPosition = point * size;
  return min(
    min(pixelPosition.x, size.x - pixelPosition.x),
    min(pixelPosition.y, size.y - pixelPosition.y)
  );
}

fn get_stroked_frag_color(
  distanceToEdge: f32,
  lineWidth: f32,
  fillColor: vec4<f32>,
  lineColor: vec4<f32>
) -> vec4<f32> {
  let isBorder = smoothedge(distanceToEdge, lineWidth);
  return mix(fillColor, lineColor, isBorder);
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.uv;
  var fragColor: vec4<f32>;

  if (any(textBackground.borderRadius != vec4<f32>(0.0))) {
    let distanceToEdge = round_rect(
      varyings.uv,
      varyings.dimensions,
      textBackground.borderRadius
    );
    let shapeAlpha = smoothedge(-distanceToEdge, 0.0);
    if (shapeAlpha == 0.0) {
      discard;
    }
    if (textBackground.stroked > 0.5) {
      fragColor = get_stroked_frag_color(
        distanceToEdge,
        varyings.vLineWidth,
        varyings.vFillColor,
        varyings.vLineColor
      );
    } else {
      fragColor = varyings.vFillColor;
    }
    fragColor.a = fragColor.a * shapeAlpha;
  } else if (textBackground.stroked > 0.5) {
    let distanceToEdge = rect(varyings.uv, varyings.dimensions);
    fragColor = get_stroked_frag_color(
      distanceToEdge,
      varyings.vLineWidth,
      varyings.vFillColor,
      varyings.vLineColor
    );
  } else {
    fragColor = varyings.vFillColor;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,fs={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,fontSize:1,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:e=>e.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getClipRect:{type:"accessor",value:[0,0,-1,-1]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}},Re=class extends oe{getShaders(){return super.getShaders({vs:as,fs:ls,source:cs,modules:[ie,ee,te,rs,oi]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getAngle"},instanceRects:{size:4,bufferGroup:"text-background-instance-data",accessor:"getBoundingRect"},instanceClipRect:{size:4,bufferGroup:"text-background-instance-data",accessor:"getClipRect",defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,bufferGroup:"text-background-instance-data",accessor:"getLineWidth",defaultValue:1}})}updateState(e){super.updateState(e);const{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{billboard:t,sizeScale:i,sizeUnits:o,sizeMinPixels:n,sizeMaxPixels:s,getLineWidth:r,fontSize:a}=this.props;let{padding:c,borderRadius:l}=this.props;c.length<4&&(c=[c[0],c[1],c[0],c[1]]),Array.isArray(l)||(l=[l,l,l,l]);const d=this.state.model,g={billboard:t,stroked:!!r,borderRadius:l,padding:c,sizeUnits:Y[o],sizeScale:i,sizeMinPixels:n,sizeMaxPixels:s},h={fontSize:a,viewport:this.context.viewport};d.shaderInputs.setProps({textBackground:g,text:h}),d.draw(this.context.renderPass)}_getModel(){const e=[0,0,1,0,0,1,1,1];return new Z(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new X({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}};Re.defaultProps=fs,Re.layerName="TextBackgroundLayer";var hi={start:1,middle:0,end:-1},vi={top:1,center:0,bottom:-1},st=[0,0,0,255],ds={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:st},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:ae.characterSet},fontFamily:ae.fontFamily,fontWeight:ae.fontWeight,lineHeight:1,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:st},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none",getText:{type:"accessor",value:e=>e.text},getPosition:{type:"accessor",value:e=>e.position},getColor:{type:"accessor",value:st},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},getContentBox:{type:"accessor",value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}},ze=class extends Ne{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{const{size:[i,o]}=this.transformParagraph(e,t),{getTextAnchor:n,getAlignmentBaseline:s}=this.props,r=hi[typeof n=="function"?n(e,t):n],a=vi[typeof s=="function"?s(e,t):s];return[(r-1)*i/2,(a-1)*o/2,i,o]},this.getIconOffsets=(e,t)=>{const{getTextAnchor:i,getAlignmentBaseline:o}=this.props,{x:n,y:s,rowWidth:r,size:[,a]}=this.transformParagraph(e,t),c=hi[typeof i=="function"?i(e,t):i],l=vi[typeof o=="function"?o(e,t):o],d=n.length,g=new Array(d*2);let h=0;for(let v=0;v<d;v++)g[h++]=(c-1)*r[v]/2+n[v],g[h++]=(l-1)*a/2+s[v];return g}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new os},this.props.maxWidth>0&&K.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(e){const{props:t,oldProps:i,changeFlags:o}=e;(o.dataChanged||o.updateTriggersChanged&&(o.updateTriggersChanged.all||o.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==i.lineHeight||t.wordBreak!==i.wordBreak||t.maxWidth!==i.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){const{fontSettings:e,fontFamily:t,fontWeight:i,_getFontRenderer:o}=this.props,{fontAtlasManager:n,characterSet:s}=this.state,r={...e,characterSet:s,fontFamily:t,fontWeight:i,_getFontRenderer:o};if(!n.mapping)return n.setProps(r),!0;for(const a in r)if(r[a]!==n.props[a])return n.setProps(r),!0;return!1}_updateText(){const{data:e,characterSet:t}=this.props,i=e.attributes?.getText;let{getText:o}=this.props,n=e.startIndices,s;const r=t==="auto"&&new Set;if(i&&n){const{texts:a,characterCount:c}=Yn({...ArrayBuffer.isView(i)?{value:i}:i,length:e.length,startIndices:n,characterSet:r});s=c,o=(l,{index:d})=>a[d]}else{const{iterable:a,objectInfo:c}=ye(e);n=[0],s=0;for(const l of a){c.index++;const d=Array.from(o(l,c)||"");r&&d.forEach(r.add,r),s+=d.length,n.push(s)}}this.setState({getText:o,startIndices:n,numInstances:s,characterSet:r||t})}transformParagraph(e,t){const{fontAtlasManager:i}=this.state,o=i.mapping,{baselineOffset:n}=i.atlas,{fontSize:s}=i.props,r=this.state.getText,{wordBreak:a,lineHeight:c,maxWidth:l}=this.props;return Jn(r(e,t)||"",n,c*s,a,l*s,o)}renderLayers(){const{startIndices:e,numInstances:t,getText:i,fontAtlasManager:{atlas:o,mapping:n},styleVersion:s}=this.state,{data:r,_dataDiff:a,getPosition:c,getColor:l,getSize:d,getAngle:g,getPixelOffset:h,getBackgroundColor:v,getBorderColor:_,getBorderWidth:C,getContentBox:S,backgroundBorderRadius:I,backgroundPadding:E,background:O,billboard:T,fontSettings:L,outlineWidth:W,outlineColor:H,sizeScale:k,sizeUnits:N,sizeMinPixels:J,sizeMaxPixels:U,contentCutoffPixels:$,contentAlignHorizontal:Q,contentAlignVertical:ne,transitions:j,updateTriggers:B}=this.props,re=this.getSubLayerClass("characters",Oe),f=this.getSubLayerClass("background",Re),{fontSize:p}=this.state.fontAtlasManager.props;return[O&&new f({getFillColor:v,getLineColor:_,getLineWidth:C,borderRadius:I,padding:E,getPosition:c,getSize:d,getAngle:g,getPixelOffset:h,getClipRect:S,billboard:T,sizeScale:k,sizeUnits:N,sizeMinPixels:J,sizeMaxPixels:U,fontSize:p,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getSize:j.getSize,getFillColor:j.getBackgroundColor,getLineColor:j.getBorderColor,getLineWidth:j.getBorderWidth,getPixelOffset:j.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:B.getPosition,getAngle:B.getAngle,getSize:B.getSize,getFillColor:B.getBackgroundColor,getLineColor:B.getBorderColor,getLineWidth:B.getBorderWidth,getPixelOffset:B.getPixelOffset,getBoundingRect:{getText:B.getText,getTextAnchor:B.getTextAnchor,getAlignmentBaseline:B.getAlignmentBaseline,styleVersion:s}}}),{data:r.attributes&&r.attributes.background?{length:r.length,attributes:r.attributes.background}:r,_dataDiff:a,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new re({sdf:L.sdf,smoothing:Number.isFinite(L.smoothing)?L.smoothing:ae.smoothing,outlineWidth:W/(L.radius||ae.radius),outlineColor:H,iconAtlas:o,iconMapping:n,getPosition:c,getColor:l,getSize:d,getAngle:g,getPixelOffset:h,getContentBox:S,billboard:T,sizeScale:k,sizeUnits:N,sizeMinPixels:J,sizeMaxPixels:U,fontSize:p,contentCutoffPixels:$,contentAlignHorizontal:Q,contentAlignVertical:ne,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getColor:j.getColor,getSize:j.getSize,getPixelOffset:j.getPixelOffset,getContentBox:j.getContentBox}},this.getSubLayerProps({id:"characters",updateTriggers:{all:B.getText,getPosition:B.getPosition,getAngle:B.getAngle,getColor:B.getColor,getSize:B.getSize,getPixelOffset:B.getPixelOffset,getContentBox:B.getContentBox,getIconOffsets:{getTextAnchor:B.getTextAnchor,getAlignmentBaseline:B.getAlignmentBaseline,styleVersion:s}}}),{data:r,_dataDiff:a,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:i})]}static set fontAtlasCacheLimit(e){is(e)}};ze.defaultProps=ds,ze.layerName="TextLayer";var Me={circle:{type:_e,props:{filled:"filled",stroked:"stroked",lineWidthMaxPixels:"lineWidthMaxPixels",lineWidthMinPixels:"lineWidthMinPixels",lineWidthScale:"lineWidthScale",lineWidthUnits:"lineWidthUnits",pointRadiusMaxPixels:"radiusMaxPixels",pointRadiusMinPixels:"radiusMinPixels",pointRadiusScale:"radiusScale",pointRadiusUnits:"radiusUnits",pointAntialiasing:"antialiasing",pointBillboard:"billboard",getFillColor:"getFillColor",getLineColor:"getLineColor",getLineWidth:"getLineWidth",getPointRadius:"getRadius"}},icon:{type:de,props:{iconAtlas:"iconAtlas",iconMapping:"iconMapping",iconSizeMaxPixels:"sizeMaxPixels",iconSizeMinPixels:"sizeMinPixels",iconSizeScale:"sizeScale",iconSizeUnits:"sizeUnits",iconAlphaCutoff:"alphaCutoff",iconBillboard:"billboard",getIcon:"getIcon",getIconAngle:"getAngle",getIconColor:"getColor",getIconPixelOffset:"getPixelOffset",getIconSize:"getSize"}},text:{type:ze,props:{textSizeMaxPixels:"sizeMaxPixels",textSizeMinPixels:"sizeMinPixels",textSizeScale:"sizeScale",textSizeUnits:"sizeUnits",textBackground:"background",textBackgroundPadding:"backgroundPadding",textFontFamily:"fontFamily",textFontWeight:"fontWeight",textLineHeight:"lineHeight",textMaxWidth:"maxWidth",textOutlineColor:"outlineColor",textOutlineWidth:"outlineWidth",textWordBreak:"wordBreak",textCharacterSet:"characterSet",textBillboard:"billboard",textFontSettings:"fontSettings",getText:"getText",getTextAngle:"getAngle",getTextColor:"getColor",getTextPixelOffset:"getPixelOffset",getTextSize:"getSize",getTextAnchor:"getTextAnchor",getTextAlignmentBaseline:"getAlignmentBaseline",getTextBackgroundColor:"getBackgroundColor",getTextBorderColor:"getBorderColor",getTextBorderWidth:"getBorderWidth"}}},ke={type:pe,props:{lineWidthUnits:"widthUnits",lineWidthScale:"widthScale",lineWidthMinPixels:"widthMinPixels",lineWidthMaxPixels:"widthMaxPixels",lineJointRounded:"jointRounded",lineCapRounded:"capRounded",lineMiterLimit:"miterLimit",lineBillboard:"billboard",lineAntialiasing:"antialiasing",getLineColor:"getColor",getLineWidth:"getWidth"}},rt={type:ve,props:{extruded:"extruded",filled:"filled",wireframe:"wireframe",elevationScale:"elevationScale",material:"material",_full3d:"_full3d",getElevation:"getElevation",getFillColor:"getFillColor",getLineColor:"getLineColor"}};function me({type:e,props:t}){const i={};for(const o in t)i[o]=e.defaultProps[t[o]];return i}function at(e,t){const{transitions:i,updateTriggers:o}=e.props,n={updateTriggers:{},transitions:i&&{getPosition:i.geometry}};for(const s in t){const r=t[s];let a=e.props[s];s.startsWith("get")&&(a=e.getSubLayerAccessor(a),n.updateTriggers[r]=o[s],i&&(n.transitions[r]=i[s])),n[r]=a}return n}function us(e){if(Array.isArray(e))return e;switch(K.assert(e.type,"GeoJSON does not have type"),e.type){case"Feature":return[e];case"FeatureCollection":return K.assert(Array.isArray(e.features),"GeoJSON does not have features array"),e.features;default:return[{geometry:e}]}}function xi(e,t,i={}){const o={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:n=0,endRow:s=e.length}=i;for(let r=n;r<s;r++){const a=e[r],{geometry:c}=a;if(c)if(c.type==="GeometryCollection"){K.assert(Array.isArray(c.geometries),"GeoJSON does not have geometries array");const{geometries:l}=c;for(let d=0;d<l.length;d++){const g=l[d];mi(g,o,t,a,r)}}else mi(c,o,t,a,r)}return o}function mi(e,t,i,o,n){const{type:s,coordinates:r}=e,{pointFeatures:a,lineFeatures:c,polygonFeatures:l,polygonOutlineFeatures:d}=t;if(!ps(s,r)){K.warn(`${s} coordinates are malformed`)();return}switch(s){case"Point":a.push(i({geometry:e},o,n));break;case"MultiPoint":r.forEach(g=>{a.push(i({geometry:{type:"Point",coordinates:g}},o,n))});break;case"LineString":c.push(i({geometry:e},o,n));break;case"MultiLineString":r.forEach(g=>{c.push(i({geometry:{type:"LineString",coordinates:g}},o,n))});break;case"Polygon":l.push(i({geometry:e},o,n)),r.forEach(g=>{d.push(i({geometry:{type:"LineString",coordinates:g}},o,n))});break;case"MultiPolygon":r.forEach(g=>{l.push(i({geometry:{type:"Polygon",coordinates:g}},o,n)),g.forEach(h=>{d.push(i({geometry:{type:"LineString",coordinates:h}},o,n))})})}}var gs={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function ps(e,t){let i=gs[e];for(K.assert(i,`Unknown GeoJSON type ${e}`);t&&--i>0;)t=t[0];return t&&Number.isFinite(t[0])}function yi(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function De(e){return e.geometry.coordinates}function hs(e,t){const i=yi(),{pointFeatures:o,lineFeatures:n,polygonFeatures:s,polygonOutlineFeatures:r}=e;return i.points.data=o,i.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),i.points.getPosition=De,i.lines.data=n,i.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),i.lines.getPath=De,i.polygons.data=s,i.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),i.polygons.getPolygon=De,i.polygonsOutline.data=r,i.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),i.polygonsOutline.getPath=De,i}function vs(e){const t=yi(),{points:i,lines:o,polygons:n}=e,s=kn(e);t.points.data={length:i.positions.value.length/i.positions.size,attributes:{...i.attributes,getPosition:i.positions,rowIndexes:{size:1,type:"uint32",value:s.points}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},t.lines.data={length:o.pathIndices.value.length-1,startIndices:o.pathIndices.value,attributes:{...o.attributes,getPath:o.positions,rowIndexes:{size:1,type:"uint32",value:s.lines}},properties:o.properties,numericProps:o.numericProps,featureIds:o.featureIds},t.lines._pathType="open";const r=n.positions.value.length/n.positions.size,a=Array(r).fill(1);for(const c of n.primitivePolygonIndices.value)a[c-1]=0;return t.polygons.data={length:n.polygonIndices.value.length-1,startIndices:n.polygonIndices.value,attributes:{...n.attributes,getPolygon:n.positions,instanceVertexValid:{size:1,value:new Uint16Array(a)},rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},t.polygons._normalize=!1,n.triangles&&(t.polygons.data.attributes.indices=n.triangles.value),t.polygonsOutline.data={length:n.primitivePolygonIndices.value.length-1,startIndices:n.primitivePolygonIndices.value,attributes:{...n.attributes,getPath:n.positions,rowIndexes:{size:1,type:"uint32",value:s.polygons}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},t.polygonsOutline._pathType="open",t}var xs=["points","linestrings","polygons"],ms={...me(Me.circle),...me(Me.icon),...me(Me.text),...me(ke),...me(rt),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:"object",value:null},iconMapping:{type:"object",value:{}},getIcon:{type:"accessor",value:e=>e.properties.icon},getText:{type:"accessor",value:e=>e.properties.text},pointType:"circle",getRadius:{deprecatedFor:"getPointRadius"}},lt=class extends Ne{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;const{data:i}=this.props,o=i&&"points"in i&&"polygons"in i&&"lines"in i;this.setState({binary:o}),o?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){const i=vs(e.data);this.setState({layerProps:i})}_updateStateJSON({props:e,changeFlags:t}){const i=us(e.data),o=this.getSubLayerRow.bind(this);let n={};const s={};if(Array.isArray(t.dataChanged)){const a=this.state.features;for(const c in a)n[c]=a[c].slice(),s[c]=[];for(const c of t.dataChanged){const l=xi(i,o,c);for(const d in a)s[d].push(ei({data:n[d],getIndex:g=>g.__source.index,dataRange:c,replace:l[d]}))}}else n=xi(i,o);const r=hs(n,s);this.setState({features:n,featuresDiff:s,layerProps:r})}getPickingInfo(e){const t=super.getPickingInfo(e),{index:i,sourceLayer:o}=t;return t.featureType=xs.find(n=>o.id.startsWith(`${this.id}-${n}-`)),i>=0&&o.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[i]),t}_updateAutoHighlight(e){const t=`${this.id}-points-`,i=e.featureType==="points";for(const o of this.getSubLayers())o.id.startsWith(t)===i&&o.updateAutoHighlight(e)}_renderPolygonLayer(){const{extruded:e,wireframe:t}=this.props,{layerProps:i}=this.state,o="polygons-fill",n=this.shouldRenderSubLayer(o,i.polygons?.data)&&this.getSubLayerClass(o,rt.type);if(n){const s=at(this,rt.props),r=e&&t;return r||delete s.getLineColor,s.updateTriggers.lineColors=r,new n(s,this.getSubLayerProps({id:o,updateTriggers:s.updateTriggers}),i.polygons)}return null}_renderLineLayers(){const{extruded:e,stroked:t}=this.props,{layerProps:i}=this.state,o="polygons-stroke",n="linestrings",s=!e&&t&&this.shouldRenderSubLayer(o,i.polygonsOutline?.data)&&this.getSubLayerClass(o,ke.type),r=this.shouldRenderSubLayer(n,i.lines?.data)&&this.getSubLayerClass(n,ke.type);if(s||r){const a=at(this,ke.props);return[s&&new s(a,this.getSubLayerProps({id:o,updateTriggers:a.updateTriggers}),i.polygonsOutline),r&&new r(a,this.getSubLayerProps({id:n,updateTriggers:a.updateTriggers}),i.lines)]}return null}_renderPointLayers(){const{pointType:e}=this.props,{layerProps:t,binary:i}=this.state;let{highlightedObjectIndex:o}=this.props;!i&&Number.isFinite(o)&&(o=t.points.data.findIndex(r=>r.__source.index===o));const n=new Set(e.split("+")),s=[];for(const r of n){const a=`points-${r}`,c=Me[r],l=c&&this.shouldRenderSubLayer(a,t.points?.data)&&this.getSubLayerClass(a,c.type);if(l){const d=at(this,c.props);let g=t.points;if(r==="text"&&i){const{rowIndexes:h,...v}=g.data.attributes;g={...g,data:{...g.data,attributes:v}}}s.push(new l(d,this.getSubLayerProps({id:a,updateTriggers:d.updateTriggers,highlightedObjectIndex:o}),g))}}return s}renderLayers(){const{extruded:e}=this.props,t=this._renderPolygonLayer(),i=this._renderLineLayers(),o=this._renderPointLayers();return[!e&&t,i,o,e&&t]}getSubLayerAccessor(e){const{binary:t}=this.state;return!t||typeof e!="function"?super.getSubLayerAccessor(e):(i,o)=>{const{data:n,index:s}=o;return e(zn(n,s),o)}}};lt.layerName="GeoJsonLayer",lt.defaultProps=ms;export{Ge as _,tt as a,qe as c,Ot as d,_e as f,Ue as g,de as h,Oe as i,Le as l,We as m,ze as n,ve as o,Ve as p,Re as r,pe as s,lt as t,Xe as u,gt as v};
