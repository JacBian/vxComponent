import{ad as n}from"./framework.f055ea7d.js";import{i as c}from"./index.de32cb22.js";const o=(r="")=>r.split(" ").filter(t=>!!t.trim()),d=(r,t)=>{if(!r||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return r.classList.contains(t)},f=(r,t)=>{!r||!t.trim()||r.classList.add(...o(t))},l=(r,t)=>{!r||!t.trim()||r.classList.remove(...o(t))},m=(r,t)=>{var a;if(!c||!r||!t)return"";n(t);try{const s=r.style[t];if(s)return s;const i=(a=document.defaultView)==null?void 0:a.getComputedStyle(r,"");return i?i[t]:""}catch{return r.style[t]}};export{f as a,m as g,d as h,l as r};