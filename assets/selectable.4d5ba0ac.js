import{d as p,y as h,o as b,z as g,u as f,A as S,e as $,v as w,F as N,k as M,b as z,G as K,H as x}from"./framework.f055ea7d.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";const O=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return new Array(o).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,height:208},null,8,["data"])}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const j=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return new Array(o).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,height:208},{default:S(({node:l})=>[$("span",{class:w(["prefix",{"is-leaf":l.isLeaf}])},"[ElementPlus]",2),$("span",null,N(l.label),1)]),_:1},8,["data"])}}});var T=A(j,[["__scopeId","data-v-9ebdb8d0"]]),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const V=p({setup(v){const u=(n,r)=>`${n}-${r}`,s=(n,r,c,a=1,m="node")=>{let k=0;return new Array(c).fill(a).map(()=>{const y=a===n?0:Math.round(Math.random()*r),i=u(m,++k);return{id:i,label:i,children:y?s(n,r,y,a+1,i):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40),e=[],t=[];for(let n=0;n<d.length;++n){const r=d[n].children;if(r){t.push(d[n].id),e.push(r[0].id);break}}const o=M(e),l=M(t);return(n,r)=>{const c=h("el-tree-v2");return b(),g(c,{data:f(d),height:208,props:_,"show-checkbox":"","default-checked-keys":o.value,"default-expanded-keys":l.value},null,8,["data","default-checked-keys","default-expanded-keys"])}}});var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const B=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return new Array(o).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children",disabled:"disabled"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const E=p({setup(v){const u=(n,r)=>`${n}-${r}`,s=(n,r,c,a=1,m="node")=>{let k=0;return new Array(c).fill(a).map(()=>{const y=a===n?0:Math.round(Math.random()*r),i=u(m,++k);return{id:i,label:i,children:y?s(n,r,y,a+1,i):void 0}})},_=M(""),d=M(),e=s(4,30,5),t={value:"id",label:"label",children:"children"},o=n=>{d.value.filter(n)},l=(n,r)=>r.label.indexOf(n)!==-1;return(n,r)=>{const c=h("el-input"),a=h("el-tree-v2");return b(),z(x,null,[K(c,{modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=m=>_.value=m),placeholder:"Please enter keyword",onInput:o},null,8,["modelValue"]),K(a,{ref_key:"treeRef",ref:d,data:f(e),props:t,"filter-method":l,height:208},null,8,["data"])],64)}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const F=p({setup(v){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let r=0;return new Array(o).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),a=u(n,++r);return{id:a,label:a,children:c?s(e,t,c,l+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=h("el-tree-v2");return b(),g(o,{data:f(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{R as _,q as a,D as b,G as c,H as d,L as e};
