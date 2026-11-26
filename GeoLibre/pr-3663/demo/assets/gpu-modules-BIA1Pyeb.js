var l={name:"black-is-zero",inject:{"fs:#decl":`
  vec3 black_zero_to_rgb(float value) {
    return vec3(value, value, value);
  }
`,"fs:DECKGL_FILTER_COLOR":`
      color.rgb = black_zero_to_rgb(color.r);
    `}},o={name:"create-texture-unorm",inject:{"fs:#decl":"uniform sampler2D textureName;","fs:DECKGL_FILTER_COLOR":`
      color = texture(textureName, geometry.uv);
    `},getUniforms:e=>({textureName:e.textureName})},r="nodata",t={name:r,fs:`uniform ${r}Uniforms {
  float value;
} ${r};
`,inject:{"fs:DECKGL_FILTER_COLOR":`
    if (color.r == nodata.value || (isnan(nodata.value) && isnan(color.r))) {
      discard;
    }
    `},uniformTypes:{value:"f32"},getUniforms:e=>({value:e.value})},a="linearRescale",n={name:a,fs:`uniform ${a}Uniforms {
  float rescaleMin;
  float rescaleMax;
} ${a};
`,inject:{"fs:DECKGL_FILTER_COLOR":`
  color.rgb = clamp((color.rgb - ${a}.rescaleMin) / (${a}.rescaleMax - ${a}.rescaleMin), 0.0, 1.0);
`},uniformTypes:{rescaleMin:"f32",rescaleMax:"f32"},getUniforms:e=>({rescaleMin:e.rescaleMin??0,rescaleMax:e.rescaleMax??1})};export{l as i,t as n,o as r,n as t};
