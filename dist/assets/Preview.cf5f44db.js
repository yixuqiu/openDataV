var D=Object.defineProperty;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(s,a,e)=>a in s?D(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,l=(s,a)=>{for(var e in a||(a={}))B.call(a,e)&&y(s,e,a[e]);if(m)for(var e of m(a))C.call(a,e)&&y(s,e,a[e]);return s};var S=(s,a,e)=>new Promise((u,o)=>{var d=n=>{try{c(e.next(n))}catch(t){o(t)}},i=n=>{try{c(e.throw(n))}catch(t){o(t)}},c=n=>n.done?u(n.value):Promise.resolve(n.value).then(d,i);c((e=e.apply(s,a)).next())});import{C as x}from"./ComponentWrapper.64d12479.js";import{d as z,bB as E,q as L,i as v,r as f,b6 as W,H as h,a as P,v as q,b7 as F,o as _,c as b,b as H,F as I,e as O,A,u as g,l as k,_ as M}from"./index.83c15d91.js";const N=z({__name:"Preview",setup(s){const a=E(),e=L(),u=v(()=>e.componentData),o=f({width:0,height:0,background:{backgroundColor:"#272e3b"}}),d=f(null),i=v(()=>{const t=W(o.value.background),r=l(l({},o.value),t);return h(r,["backgroundImage","backgroundSize","backgroundColor"])}),c=v(()=>{const t=l({},o.value);return h(t,["width","height"])});P(()=>S(this,null,function*(){const t=yield a.latestRecord();t&&e.setLayoutData({canvasData:t.canvasData,canvasStyle:t.canvasStyle}),o.value=e.canvasStyleData,n(),window.addEventListener("resize",n)})),q(()=>{window.removeEventListener("resize",n)});const n=()=>{const t=document.querySelector(".screen");if(t){const r=o.value.width,p=o.value.height;F(t,r,p)}};return(t,r)=>(_(),b("div",{class:"bg",style:k(g(i))},[H("div",{style:k(g(c)),ref_key:"screen",ref:d,class:"screen"},[(_(!0),b(I,null,O(g(u),(p,w)=>(_(),A(x,{key:w,component:p},null,8,["component"]))),128))],4)],4))}});const V=M(N,[["__scopeId","data-v-dfa9fd92"]]);export{V as default};
