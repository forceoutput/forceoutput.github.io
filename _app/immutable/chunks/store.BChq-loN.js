import{at as B,a7 as V,q as k,m as P,al as $,j as H,Z as L,O as z,au as W,X as g,av as Y,ap as N,af as y,a1 as E,Y as b,_ as j,aw as O,ax as A,a2 as X,ag as Z,ay as x,az as G,aj as J,ac as K,aA as Q,T as U,p as ee,a as ae,I as re,V as R,x as te,aB as ne,F as se,i as ie,g as ue}from"./runtime.DMki_37a.js";import{b as oe}from"./disclose-version.DKHAQcQj.js";const fe=new Set,C=new Set;function m(e){var I;var a=this,n=a.ownerDocument,t=e.type,u=((I=e.composedPath)==null?void 0:I.call(e))||[],r=u[0]||e.target,l=0,p=e.__root;if(p){var c=u.indexOf(p);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var _=u.indexOf(a);if(_===-1)return;c<=_&&(l=c)}if(r=u[l]||e.target,r!==a){B(e,"currentTarget",{configurable:!0,get(){return r||n}});var S=$,f=H;V(null),k(null);try{for(var s,i=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+t];if(h!==void 0&&!r.disabled)if(P(h)){var[M,...q]=h;M.apply(r,[e,...q])}else h.call(r,e)}catch(w){s?i.push(w):s=w}if(e.cancelBubble||d===a||d===null)break;r=d}if(s){for(let w of i)queueMicrotask(()=>{throw w});throw s}}finally{e.__root=a,delete e.currentTarget,V(S),k(f)}}}let o;function de(){o=void 0}function ve(e){let a=null,n=g;var t;if(g){for(a=b,o===void 0&&(o=j(document.head));o!==null&&(o.nodeType!==8||o.data!==Y);)o=N(o);o===null?y(!1):o=E(N(o))}g||(t=document.head.appendChild(L()));try{z(()=>e(t),W)}finally{n&&(y(!0),o=b,E(a))}}const le=["touchstart","touchmove"];function ce(e){return le.includes(e)}function ye(e,a){var n=a==null?"":typeof a=="object"?a+"":a;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function _e(e,a){return F(e,a)}function ge(e,a){O(),a.intro=a.intro??!1;const n=a.target,t=g,u=b;try{for(var r=j(n);r&&(r.nodeType!==8||r.data!==Y);)r=N(r);if(!r)throw A;y(!0),E(r),X();const l=F(e,{...a,anchor:r});if(b===null||b.nodeType!==8||b.data!==Z)throw x(),A;return y(!1),l}catch(l){if(l===A)return a.recover===!1&&G(),O(),J(n),y(!1),_e(e,a);throw l}finally{y(t),E(u),de()}}const v=new Map;function F(e,{target:a,anchor:n,props:t={},events:u,context:r,intro:l=!0}){O();var p=new Set,c=f=>{for(var s=0;s<f.length;s++){var i=f[s];if(!p.has(i)){p.add(i);var d=ce(i);a.addEventListener(i,m,{passive:d});var h=v.get(i);h===void 0?(document.addEventListener(i,m,{passive:d}),v.set(i,1)):v.set(i,h+1)}}};c(K(fe)),C.add(c);var _=void 0,S=Q(()=>{var f=n??a.appendChild(L());return U(()=>{if(r){ee({});var s=re;s.c=r}u&&(t.$$events=u),g&&oe(f,null),_=e(f,t)||{},g&&(H.nodes_end=b),r&&ae()}),()=>{var d;for(var s of p){a.removeEventListener(s,m);var i=v.get(s);--i===0?(document.removeEventListener(s,m),v.delete(s)):v.set(s,i)}C.delete(c),D.delete(_),f!==n&&((d=f.parentNode)==null||d.removeChild(f))}});return D.set(_,S),_}let D=new WeakMap;function we(e){const a=D.get(e);a&&a()}function he(e,a,n){if(e==null)return a(void 0),R;const t=te(()=>e.subscribe(a,n));return t.unsubscribe?()=>t.unsubscribe():t}let T=!1;function me(e,a,n){const t=n[a]??(n[a]={store:null,source:se(void 0),unsubscribe:R});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=R;else{var u=!0;t.unsubscribe=he(e,r=>{u?t.source.v=r:ue(t.source,r)}),u=!1}return ie(t.source)}function Te(){const e={};return ne(()=>{for(var a in e)e[a].unsubscribe()}),e}function Ee(e){var a=T;try{return T=!1,[e(),T]}finally{T=a}}export{ye as a,me as b,Ee as c,ge as d,ve as h,_e as m,Te as s,we as u};
