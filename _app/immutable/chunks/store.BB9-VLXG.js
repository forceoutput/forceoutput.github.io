import{at as P,ac as L,Q as k,A as $,al as q,x as I,a4 as V,D as z,au as G,B as g,av as B,ap as D,G as y,F as T,L as b,a5 as F,aw as N,ax as S,C as J,ag as Q,ay as W,az as x,aj as K,af as U,aA as X,J as Z,p as ee,a as ae,d as re,a2 as R,e as te,aB as ne,a1 as se,h as ie,v as ue}from"./runtime.8gyb8hvD.js";import{b as oe}from"./disclose-version.CKkcoknJ.js";const fe=new Set,H=new Set;function m(e){var C;var a=this,n=a.ownerDocument,t=e.type,u=((C=e.composedPath)==null?void 0:C.call(e))||[],r=u[0]||e.target,l=0,p=e.__root;if(p){var c=u.indexOf(p);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var _=u.indexOf(a);if(_===-1)return;c<=_&&(l=c)}if(r=u[l]||e.target,r!==a){P(e,"currentTarget",{configurable:!0,get(){return r||n}});var A=q,f=I;L(null),k(null);try{for(var s,i=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+t];if(h!==void 0&&!r.disabled)if($(h)){var[Y,...j]=h;Y.apply(r,[e,...j])}else h.call(r,e)}catch(w){s?i.push(w):s=w}if(e.cancelBubble||d===a||d===null)break;r=d}if(s){for(let w of i)queueMicrotask(()=>{throw w});throw s}}finally{e.__root=a,delete e.currentTarget,L(A),k(f)}}}let o;function de(){o=void 0}function ve(e){let a=null,n=g;var t;if(g){for(a=b,o===void 0&&(o=F(document.head));o!==null&&(o.nodeType!==8||o.data!==B);)o=D(o);o===null?y(!1):o=T(D(o))}g||(t=document.head.appendChild(V()));try{z(()=>e(t),G)}finally{n&&(y(!0),o=b,T(a))}}const le=["touchstart","touchmove"];function ce(e){return le.includes(e)}function ye(e,a){var n=a==null?"":typeof a=="object"?a+"":a;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function _e(e,a){return M(e,a)}function ge(e,a){N(),a.intro=a.intro??!1;const n=a.target,t=g,u=b;try{for(var r=F(n);r&&(r.nodeType!==8||r.data!==B);)r=D(r);if(!r)throw S;y(!0),T(r),J();const l=M(e,{...a,anchor:r});if(b===null||b.nodeType!==8||b.data!==Q)throw W(),S;return y(!1),l}catch(l){if(l===S)return a.recover===!1&&x(),N(),K(n),y(!1),_e(e,a);throw l}finally{y(t),T(u),de()}}const v=new Map;function M(e,{target:a,anchor:n,props:t={},events:u,context:r,intro:l=!0}){N();var p=new Set,c=f=>{for(var s=0;s<f.length;s++){var i=f[s];if(!p.has(i)){p.add(i);var d=ce(i);a.addEventListener(i,m,{passive:d});var h=v.get(i);h===void 0?(document.addEventListener(i,m,{passive:d}),v.set(i,1)):v.set(i,h+1)}}};c(U(fe)),H.add(c);var _=void 0,A=X(()=>{var f=n??a.appendChild(V());return Z(()=>{if(r){ee({});var s=re;s.c=r}u&&(t.$$events=u),g&&oe(f,null),_=e(f,t)||{},g&&(I.nodes_end=b),r&&ae()}),()=>{var d;for(var s of p){a.removeEventListener(s,m);var i=v.get(s);--i===0?(document.removeEventListener(s,m),v.delete(s)):v.set(s,i)}H.delete(c),O.delete(_),f!==n&&((d=f.parentNode)==null||d.removeChild(f))}});return O.set(_,A),_}let O=new WeakMap;function we(e){const a=O.get(e);a&&a()}function he(e,a,n){if(e==null)return a(void 0),R;const t=te(()=>e.subscribe(a,n));return t.unsubscribe?()=>t.unsubscribe():t}let E=!1;function me(e,a,n){const t=n[a]??(n[a]={store:null,source:se(void 0),unsubscribe:R});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=R;else{var u=!0;t.unsubscribe=he(e,r=>{u?t.source.v=r:ue(t.source,r)}),u=!1}return ie(t.source)}function Ee(){const e={};return ne(()=>{for(var a in e)e[a].unsubscribe()}),e}function Te(e){var a=E;try{return E=!1,[e(),E]}finally{E=a}}export{ye as a,me as b,Te as c,ge as d,ve as h,_e as m,Ee as s,we as u};
