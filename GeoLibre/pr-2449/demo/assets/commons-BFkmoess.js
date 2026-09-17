import{Bs as x,Vs as y,_s as _,vs as A}from"./maplibre-JsgHkUgt.js";async function S(e){return new Promise(a=>{const t=new _({controller:!1,gl:e,parameters:{depthCompare:"less-equal"},width:null,height:null,onDeviceInitialized:r=>{a({deckInstance:t,device:r})}})})}async function C(e){const{deckInstance:a,device:t}=await S(e),r=t.createTexture({format:"rgba8unorm",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}}),l=new x(t,{vs:`#version 300 es
in vec2 pos;
out vec2 v_texcoord;
void main(void) {
    gl_Position = vec4(pos, 0.0, 1.0);
    v_texcoord = (pos + 1.0) / 2.0;
}
    `,fs:`#version 300 es
precision mediump float;
uniform sampler2D deckglTexture;
in vec2 v_texcoord;
out vec4 fragColor;

void main(void) {
    vec4 imageColor = texture(deckglTexture, v_texcoord);
    // FBO stores premultiplied RGBA (rgb already multiplied by alpha).
    // The composite blend (ONE, ONE_MINUS_SRC_ALPHA) handles premultiplied
    // input correctly; multiplying again here would darken overlays.
    fragColor = imageColor;
}
    `,bindings:{deckglTexture:r},parameters:{depthWriteEnabled:!1,depthCompare:"always",blendColorSrcFactor:"one",blendColorDstFactor:"one-minus-src-alpha",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",blendColorOperation:"add",blendAlphaOperation:"add"},geometry:new y({topology:"triangle-strip",attributes:{pos:{size:2,value:new Int8Array([-1,-1,1,-1,-1,1,-1,1,1,1,1,-1])}}}),vertexCount:6,disableWarnings:!0}),n=t.createFramebuffer({id:"deckfbo",width:1,height:1,colorAttachments:[r],depthStencilAttachment:"depth16unorm"});return a.setProps({_framebuffer:n,_customRender:i=>{if(i==="arcgis"){const o=t.gl;o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA),a._drawLayers(i)}else this.redraw()}}),{deck:a,texture:r,fbo:n,model:l}}function k(e,a){const{model:t,deck:r,fbo:l}=e,n=t.device;if(n instanceof A){const i=n.getParametersWebGL(36006),{width:o,height:u,views:m,viewState:b,...v}=a,h=window.devicePixelRatio,d=Math.round(o*h),c=Math.round(u*h);l.resize({width:d,height:c});const p=l.colorAttachments[0].texture??l.colorAttachments[0];p!==e.texture&&(e.texture=p,t.setBindings({deckglTexture:p}));const f={width:o,height:u,viewState:b||v};m&&(f.views=m),r.setProps(f),r.redraw("arcgis");const{gl:s}=n;i?(s.bindFramebuffer(36160,i),s.drawBuffers([36064])):s.drawBuffers([1029]),s.enable(3042),s.blendFuncSeparate(1,771,1,771),s.blendEquationSeparate(32774,32774);const w={handle:i,width:d,height:c,colorAttachments:[null]},g=n.beginRenderPass({framebuffer:w,parameters:{viewport:[0,0,d,c]},clearColor:!1,clearDepth:!1});try{t.draw(g)}finally{g.end()}}}function F(e){e.deck.finalize(),e.model.destroy(),e.fbo.destroy(),e.texture.destroy()}export{C as n,k as r,F as t};
