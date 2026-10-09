function o(r){return new Promise((a,n)=>{const e=()=>{const t=new Error("The run was cancelled.");t.name="AbortError",n(t)};r.aborted?e():r.addEventListener("abort",e,{once:!0})})}export{o as t};
