import{d as u,k as n,y as d,o as c,z as m,b as i,e as s,G as _,H as v}from"./framework.f055ea7d.js";const f=u({setup(p){const e=n("rgba(19, 206, 102, 0.8)");return(t,a)=>{const l=d("el-color-picker");return c(),m(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),"show-alpha":""},null,8,["modelValue"])}}});var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const V={class:"demo-color-block"},b=s("span",{class:"demonstration"},"With default value",-1),g={class:"demo-color-block"},k=s("span",{class:"demonstration"},"With no default value",-1),y=u({setup(p){const e=n("#409EFF"),t=n();return(a,l)=>{const o=d("el-color-picker");return c(),i(v,null,[s("div",V,[b,_(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r)},null,8,["modelValue"])]),s("div",g,[k,_(o,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=r=>t.value=r)},null,8,["modelValue"])])],64)}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const z=u({setup(p){const e=n("rgba(255, 69, 0, 0.68)"),t=n(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(a,l)=>{const o=d("el-color-picker");return c(),m(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r),"show-alpha":"",predefine:t.value},null,8,["modelValue","predefine"])}}});var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const S={class:"demo-color-sizes"},x=u({setup(p){const e=n("409EFF");return(t,a)=>{const l=d("el-color-picker");return c(),i("div",S,[_(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),size:"large"},null,8,["modelValue"]),_(l,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o)},null,8,["modelValue"]),_(l,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value=o),size:"small"},null,8,["modelValue"])])}}});var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});export{h as _,F as a,j as b,B as c};
