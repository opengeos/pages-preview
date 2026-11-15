var o={name:"create-texture-unorm",inject:{"fs:#decl":"uniform sampler2D textureName;","fs:DECKGL_FILTER_COLOR":`
      color = texture(textureName, geometry.uv);
    `},getUniforms:e=>({textureName:e.textureName})},r="colormap",t={name:r,fs:`uniform ${r}Uniforms {
  int colormapIndex;
  float reversed;
} ${r};
`,inject:{"fs:#decl":`precision highp sampler2DArray;
uniform sampler2DArray colormapTexture;
`,"fs:DECKGL_FILTER_COLOR":`
      float idx = mix(color.r, 1.0 - color.r, ${r}.reversed);
      color = texture(
        colormapTexture,
        vec3(idx, 0.5, float(${r}.colormapIndex))
      );
    `},uniformTypes:{colormapIndex:"i32",reversed:"f32"},getUniforms:e=>({colormapTexture:e.colormapTexture,colormapIndex:e.colormapIndex??0,reversed:e.reversed??!1})},a="nodata",m={name:a,fs:`uniform ${a}Uniforms {
  float value;
} ${a};
`,inject:{"fs:DECKGL_FILTER_COLOR":`
    if (color.r == nodata.value) {
      discard;
    }
    `},uniformTypes:{value:"f32"},getUniforms:e=>({value:e.value})},s={name:"mask-texture",inject:{"fs:#decl":"uniform sampler2D maskTexture;","fs:DECKGL_FILTER_COLOR":`
      float maskValue = texture(maskTexture, geometry.uv).r;
      if (maskValue == 0.0) {
        discard;
      }
    `},getUniforms:e=>({maskTexture:e.maskTexture})};export{o as i,m as n,t as r,s as t};
