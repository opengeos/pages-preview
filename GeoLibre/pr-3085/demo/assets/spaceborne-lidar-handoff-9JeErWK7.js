var n=null,r=new Set;function t(e){n=e;for(const a of[...r])a()}function u(){const e=n;return n=null,e}function o(e){return r.add(e),()=>{r.delete(e)}}export{t as n,u as r,o as t};
