import{d as L,n as S,c as z,i as P,t as W}from"./index.de32cb22.js";import{f as y,u as O,k as r,r as B,c as _}from"./framework.f055ea7d.js";function w(t){var e;const n=O(t);return(e=n==null?void 0:n.$el)!=null?e:n}const g=P?window:void 0,F=P?window.document:void 0,M=P?window.navigator:void 0;function h(...t){let e,n,o,a;if(L(t[0])?([n,o,a]=t,e=g):[e,n,o,a]=t,!e)return S;let i=S;const l=y(()=>O(e),c=>{i(),!!c&&(c.addEventListener(n,o,a),i=()=>{c.removeEventListener(n,o,a),i=S})},{immediate:!0,flush:"post"}),s=()=>{l(),i()};return W(s),s}function ie(t,e,n={}){const{window:o=g,ignore:a}=n;if(!o)return;const i=r(!0),s=[h(o,"click",v=>{const d=w(t),p=v.composedPath();!d||d===v.target||p.includes(d)||!i.value||a&&a.length>0&&a.some(u=>{const m=w(u);return m&&(v.target===m||p.includes(m))})||e(v)},{passive:!0,capture:!0}),h(o,"pointerdown",v=>{const d=w(t);i.value=!!d&&!v.composedPath().includes(d)},{passive:!0})];return()=>s.forEach(v=>v())}function se(t={}){const{navigator:e=M,read:n=!1,source:o,copiedDuring:a=1500}=t,i=["copy","cut"],l=Boolean(e&&"clipboard"in e),s=r(""),c=r(!1),v=z(()=>c.value=!1,a);function d(){e.clipboard.readText().then(u=>{s.value=u})}if(l&&n)for(const u of i)h(u,d);async function p(u=O(o)){l&&u!=null&&(await e.clipboard.writeText(u),s.value=u,c.value=!0,v.start())}return{isSupported:l,text:s,copied:c,copy:p}}const T=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$="__vueuse_ssr_handlers__";T[$]=T[$]||{};T[$];function ae(t,e,{window:n=g}={}){const o=r(""),a=_(()=>{var i;return w(e)||((i=n==null?void 0:n.document)==null?void 0:i.documentElement)});return y([a,()=>O(t)],([i,l])=>{i&&n&&(o.value=n.getComputedStyle(i).getPropertyValue(l))},{immediate:!0}),y(o,i=>{var l;((l=a.value)==null?void 0:l.style)&&a.value.style.setProperty(O(t),i)}),o}function N(t={}){const{window:e=g}=t,n=Boolean(e&&"DeviceOrientationEvent"in e),o=r(!1),a=r(null),i=r(null),l=r(null);return e&&n&&h(e,"deviceorientation",s=>{o.value=s.absolute,a.value=s.alpha,i.value=s.beta,l.value=s.gamma}),{isSupported:n,isAbsolute:o,alpha:a,beta:i,gamma:l}}function le({document:t=F}={}){if(!t)return r("visible");const e=r(t.visibilityState);return h(t,"visibilitychange",()=>{e.value=t.visibilityState}),e}var R=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,q=(t,e)=>{var n={};for(var o in t)k.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&R)for(var o of R(t))e.indexOf(o)<0&&K.call(t,o)&&(n[o]=t[o]);return n};function ue(t,e,n={}){const o=n,{window:a=g}=o,i=q(o,["window"]);let l;const s=a&&"ResizeObserver"in a,c=()=>{l&&(l.disconnect(),l=void 0)},v=y(()=>w(t),p=>{c(),s&&a&&p&&(l=new a.ResizeObserver(e),l.observe(p,i))},{immediate:!0,flush:"post"}),d=()=>{c(),v()};return W(d),{isSupported:s,stop:d}}function G(t={}){const{type:e="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:a={x:0,y:0},window:i=g}=t,l=r(a.x),s=r(a.y),c=r(null),v=u=>{e==="page"?(l.value=u.pageX,s.value=u.pageY):e==="client"&&(l.value=u.clientX,s.value=u.clientY),c.value="mouse"},d=()=>{l.value=a.x,s.value=a.y},p=u=>{if(u.touches.length>0){const m=u.touches[0];e==="page"?(l.value=m.pageX,s.value=m.pageY):e==="client"&&(l.value=m.clientX,s.value=m.clientY),c.value="touch"}};return i&&(h(i,"mousemove",v,{passive:!0}),h(i,"dragover",v,{passive:!0}),n&&(h(i,"touchstart",p,{passive:!0}),h(i,"touchmove",p,{passive:!0}),o&&h(i,"touchend",d,{passive:!0}))),{x:l,y:s,sourceType:c}}function J(t,e={}){const{handleOutside:n=!0,window:o=g}=e,{x:a,y:i,sourceType:l}=G(e),s=r(t!=null?t:o==null?void 0:o.document.body),c=r(0),v=r(0),d=r(0),p=r(0),u=r(0),m=r(0),b=r(!1);let f=()=>{};return o&&(f=y([s,a,i],()=>{const j=w(s);if(!j)return;const{left:A,top:I,width:V,height:H}=j.getBoundingClientRect();d.value=A+o.pageXOffset,p.value=I+o.pageYOffset,u.value=H,m.value=V;const x=a.value-d.value,E=i.value-p.value;b.value=x<0||E<0||x>m.value||E>u.value,(n||!b.value)&&(c.value=x,v.value=E)},{immediate:!0})),{x:a,y:i,sourceType:l,elementX:c,elementY:v,elementPositionX:d,elementPositionY:p,elementHeight:u,elementWidth:m,isOutside:b,stop:f}}function re(t,e={}){const{deviceOrientationTiltAdjust:n=f=>f,deviceOrientationRollAdjust:o=f=>f,mouseTiltAdjust:a=f=>f,mouseRollAdjust:i=f=>f,window:l=g}=e,s=B(N({window:l})),{elementX:c,elementY:v,elementWidth:d,elementHeight:p}=J(t,{handleOutside:!1,window:l}),u=_(()=>s.isSupported&&(s.alpha!=null&&s.alpha!==0||s.gamma!=null&&s.gamma!==0)?"deviceOrientation":"mouse"),m=_(()=>{if(u.value==="deviceOrientation"){const f=-s.beta/90;return o(f)}else{const f=-(v.value-p.value/2)/p.value;return i(f)}}),b=_(()=>{if(u.value==="deviceOrientation"){const f=s.gamma/90;return n(f)}else{const f=(c.value-d.value/2)/d.value;return a(f)}});return{roll:m,tilt:b,source:u}}var X,Y;P&&(window==null?void 0:window.navigator)&&((X=window==null?void 0:window.navigator)==null?void 0:X.platform)&&/iP(ad|hone|od)/.test((Y=window==null?void 0:window.navigator)==null?void 0:Y.platform);var Q=Object.defineProperty,C=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,D=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ee=(t,e)=>{for(var n in e||(e={}))U.call(e,n)&&D(t,n,e[n]);if(C)for(var n of C(e))Z.call(e,n)&&D(t,n,e[n]);return t};const te={top:0,left:0,bottom:0,right:0,height:0,width:0};ee({text:""},te);function ce({window:t=g}={}){if(!t)return r(!1);const e=r(t.document.hasFocus());return h(t,"blur",()=>{e.value=!1}),h(t,"focus",()=>{e.value=!0}),e}export{ue as a,le as b,ce as c,se as d,re as e,ae as f,ie as o,h as u};
