import{a as _,t as v}from"../chunks/disclose-version.v1lGmzWR.js";import"../chunks/legacy.B8xTbDP7.js";import{u as h,a as f,c as $,b as x,r as u,g as d,d as k,f as y,h as j,p as E,i as S,t as q,j as w,k as l,l as g,s as z}from"../chunks/runtime.BoYDTSl7.js";import{s as A,a as b,b as B}from"../chunks/store.CacKg0Rh.js";import{s as C}from"../chunks/entry.CUgsGhwI.js";function D(s=!1){const t=$,e=t.l.u;if(!e)return;let n=()=>y(t.s);if(s){let a=0,r={};const p=j(()=>{let i=!1;const c=t.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>d(p)}e.b.length&&h(()=>{m(t,n),u(e.b)}),f(()=>{const a=x(()=>e.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&f(()=>{m(t,n),u(e.a)})}function m(s,t){if(s.l.s)for(const e of s.l.s)d(e);t()}const F=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=v("<h1> </h1> <p> </p>",1);function N(s,t){E(t,!1);const e=A(),n=()=>B(G,"$page",e);D();var a=H(),r=S(a),p=l(r,!0);g(r);var i=z(r,2),c=l(i,!0);g(i),q(()=>{var o;b(p,n().status),b(c,(o=n().error)==null?void 0:o.message)}),_(s,a),w()}export{N as component};
