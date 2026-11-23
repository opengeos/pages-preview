function i(a,o){const e=new Set;for(const t of o)e.add(t.name.trim());const n=a.trim();if(!e.has(n))return n;for(let t=2;;t++){const r=`${n} (${t})`;if(!e.has(r))return r}}export{i as t};
