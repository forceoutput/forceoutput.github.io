var St=Array.isArray,Dt=Array.from,Ot=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Kn=Object.getOwnPropertyDescriptors,kt=Object.prototype,Nt=Array.prototype,$n=Object.getPrototypeOf;const It=()=>{};function Pt(n){return n()}function Zn(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,dn=4,M=8,en=16,m=32,Z=64,Q=128,D=256,V=512,h=1024,x=2048,j=4096,P=8192,b=16384,Wn=32768,yn=65536,bt=1<<17,zn=1<<19,En=1<<20,cn=Symbol("$state"),Ct=Symbol("legacy props");function wn(n){return n===this.v}function Jn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!Jn(n,this.v)}function Qn(n){throw new Error("effect_in_teardown")}function Xn(){throw new Error("effect_in_unowned_derived")}function nt(n){throw new Error("effect_orphan")}function tt(){throw new Error("effect_update_depth_exceeded")}function Ft(){throw new Error("hydration_failed")}function qt(n){throw new Error("props_invalid_value")}function Lt(){throw new Error("state_descriptors_fixed")}function Yt(){throw new Error("state_prototype_fixed")}function rt(){throw new Error("state_unsafe_local_read")}function et(){throw new Error("state_unsafe_mutation")}let W=!1;function Mt(){W=!0}function ln(n){return{f:0,v:n,reactions:null,equals:wn,version:0}}function jt(n){return lt(ln(n))}function Ut(n,t=!1){var e;const r=ln(n);return t||(r.equals=Tn),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function lt(n){return a!==null&&a.f&E&&(T===null?Et([n]):T.push(n)),n}function Ht(n,t){return a!==null&&on()&&a.f&(E|en)&&(T===null||!T.includes(n))&&et(),st(n,t)}function st(n,t){return n.equals(t)||(n.v=t,n.version=jn(),mn(n,x),on()&&o!==null&&o.f&h&&!(o.f&m)&&(v!==null&&v.includes(n)?(g(o,x),J(o)):A===null?wt([n]):A.push(n))),t}function mn(n,t){var r=n.reactions;if(r!==null)for(var e=on(),l=r.length,s=0;s<l;s++){var u=r[s],i=u.f;i&x||!e&&u===o||(g(u,t),i&(h|D)&&(i&E?mn(u,j):J(u)))}}const Bt=1,Vt=2,Gt=4,Kt=8,$t=16,Zt=1,Wt=2,ut="[",ot="[!",at="]",gn={},zt=Symbol();function An(n){console.warn("hydration_mismatch")}let S=!1;function Jt(n){S=n}let w;function q(n){if(n===null)throw An(),gn;return w=n}function Qt(){return q(O(w))}function Xt(n){if(S){if(O(w)!==null)throw An(),gn;w=n}}function nr(n=1){if(S){for(var t=n,r=w;t--;)r=O(r);w=r}}function tr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===at){if(n===0)return t;n-=1}else(r===ut||r===ot)&&(n+=1)}var e=O(t);t.remove(),t=e}}var vn,xn,Rn;function rr(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;xn=_n(t,"firstChild").get,Rn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function nn(n){return xn.call(n)}function O(n){return Rn.call(n)}function er(n,t){if(!S)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),q(e),e}return q(r),r}function lr(n,t){if(!S){var r=nn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function sr(n,t=1,r=!1){let e=S?w:n;for(var l;t--;)l=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=X();return e===null?l==null||l.after(u):e.before(u),q(u),u}return q(e),e}function ur(n){n.textContent=""}function it(n){var t=E|x;o===null?t|=D:o.f|=En;var r=a!==null&&a.f&E?a:null;const e={children:null,ctx:f,deps:null,equals:wn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function or(n){const t=it(n);return t.equals=Tn,t}function Sn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?sn(e):F(e)}}}function ft(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function Dn(n){var t,r=o;$(ft(n));try{Sn(n),t=Un(n)}finally{$(r)}return t}function On(n){var t=Dn(n),r=(k||n.f&D)&&n.deps!==null?j:h;g(n,r),n.equals(t)||(n.v=t,n.version=jn())}function sn(n){Sn(n),Y(n,0),g(n,b),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){o===null&&a===null&&nt(),a!==null&&a.f&D&&Xn(),un&&Qn()}function _t(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function C(n,t,r,e=!0){var l=(n&Z)!==0,s=o,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{pn(!0),z(u),u.f|=Wn}catch(_){throw F(u),_}finally{pn(i)}}else t!==null&&J(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&En)===0;if(!p&&!l&&e&&(s!==null&&_t(u,s),a!==null&&a.f&E)){var d=a;(d.children??(d.children=[])).push(u)}return u}function ar(n){const t=C(M,null,!1);return g(t,h),t.teardown=n,t}function ir(n){kn();var t=o!==null&&(o.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:a})}else{var e=Nn(n);return e}}function fr(n){return kn(),ct(n)}function _r(n){const t=C(Z,n,!0);return()=>{F(t)}}function Nn(n){return C(dn,n,!1)}function ct(n){return C(M,n,!0)}function cr(n){return vt(n)}function vt(n,t=0){return C(M|en|t,n,!0)}function vr(n,t=!0){return C(M|m,n,!0,t)}function In(n){var t=n.teardown;if(t!==null){const r=un,e=a;hn(!0),K(null);try{t.call(null)}finally{hn(r),K(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function bn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function pt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&zn)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var s=e===l?null:O(e);e.remove(),e=s}r=!0}bn(n,t&&!r),Pn(n),Y(n,0),g(n,b);var u=n.transitions;if(u!==null)for(const p of u)p.stop();In(n);var i=n.parent;i!==null&&i.first!==null&&Cn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Cn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function pr(n,t){var r=[];Fn(n,r,!0),ht(r,()=>{F(n),t&&t()})}function ht(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function Fn(n,t,r){if(!(n.f&P)){if(n.f^=P,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var l=e.next,s=(e.f&yn)!==0||(e.f&m)!==0;Fn(e,t,s?r:!1),e=l}}}function hr(n){qn(n,!0)}function qn(n,t){if(n.f&P){U(n)&&z(n),n.f^=P;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&yn)!==0||(r.f&m)!==0;qn(r,l?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let G=!1,tn=[];function Ln(){G=!1;const n=tn.slice();tn=[],Zn(n)}function dr(n){G||(G=!0,queueMicrotask(Ln)),tn.push(n)}function dt(){G&&Ln()}const Yn=0,yt=1;let H=!1,B=Yn,L=!1,N=!1,un=!1;function pn(n){N=n}function hn(n){un=n}let R=[],I=0;let a=null;function K(n){a=n}let o=null;function $(n){o=n}let T=null;function Et(n){T=n}let v=null,y=0,A=null;function wt(n){A=n}let Mn=0,k=!1,f=null;function jn(){return++Mn}function on(){return!W||f!==null&&f.l===null}function U(n){var u,i;var t=n.f;if(t&x)return!0;if(t&j){var r=n.deps,e=(t&D)!==0;if(r!==null){var l;if(t&V){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(n);n.f^=V}for(l=0;l<r.length;l++){var s=r[l];if(U(s)&&On(s),e&&o!==null&&!k&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||g(n,h)}return!1}function Tt(n,t){for(var r=t;r!==null;){if(r.f&Q)try{r.fn(n);return}catch{r.f^=Q}r=r.parent}throw H=!1,n}function mt(n){return(n.f&b)===0&&(n.parent===null||(n.parent.f&Q)===0)}function an(n,t,r,e){if(H){if(r===null&&(H=!1),mt(t))throw n;return}r!==null&&(H=!0);{Tt(n,t);return}}function Un(n){var fn;var t=v,r=y,e=A,l=a,s=k,u=T,i=f,p=n.f;v=null,y=0,A=null,a=p&(m|Z)?null:n,k=!N&&(p&D)!==0,T=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else n.deps=_=v;if(!k)for(c=y;c<_.length;c++)((fn=_[c]).reactions??(fn.reactions=[])).push(n)}else _!==null&&y<_.length&&(Y(n,y),_.length=y);return d}finally{v=t,y=r,A=e,a=l,k=s,T=u,f=i}}function gt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&E&&(v===null||!v.includes(t))&&(g(t,j),t.f&(D|V)||(t.f^=V),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)gt(n,r[e])}function z(n){var t=n.f;if(!(t&b)){g(n,h);var r=o,e=f;o=n;try{t&en?pt(n):bn(n),Pn(n),In(n);var l=Un(n);n.teardown=typeof l=="function"?l:null,n.version=Mn}catch(s){an(s,n,r,e||n.ctx)}finally{o=r}}}function Hn(){I>1e3&&(I=0,tt()),I++}function Bn(n){var t=n.length;if(t!==0){Hn();var r=N;N=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var s=[];Vn(l,s),At(s)}}finally{N=r}}}function At(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(b|P)))try{U(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Cn(e):e.fn=null))}catch(l){an(l,e,null,e.ctx)}}}function xt(){if(L=!1,I>1001)return;const n=R;R=[],Bn(n),L||(I=0)}function J(n){B===Yn&&(L||(L=!0,queueMicrotask(xt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|m)){if(!(r&h))return;t.f^=h}}R.push(t)}function Vn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,s=(l&m)!==0,u=s&&(l&h)!==0,i=r.next;if(!u&&!(l&P))if(l&M){if(s)r.f^=h;else try{U(r)&&z(r)}catch(c){an(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&dn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Vn(p,t)}function Gn(n){var t=B,r=R;try{Hn();const l=[];B=yt,R=l,L=!1,Bn(r);var e=n==null?void 0:n();return dt(),(R.length>0||l.length>0)&&Gn(),I=0,e}finally{B=t,R=r}}async function yr(){await Promise.resolve(),Gn()}function Er(n){var _;var t=n.f,r=(t&E)!==0;if(r&&t&b){var e=Dn(n);return sn(n),e}if(a!==null){T!==null&&T.includes(n)&&rt();var l=a.deps;v===null&&l!==null&&l[y]===n?y++:v===null?v=[n]:v.push(n),A!==null&&o!==null&&o.f&h&&!(o.f&m)&&A.includes(n)&&(g(o,x),J(o))}else if(r&&n.deps===null)for(var s=n,u=s.parent,i=s;u!==null;)if(u.f&E){var p=u;i=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(s=n,U(s)&&On(s)),n.v}function wr(n){const t=a;try{return a=null,n()}finally{a=t}}const Rt=~(x|j|h);function g(n,t){n.f=n.f&Rt|t}function Tr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:ln(!1)})}function mr(n){const t=f;if(t!==null){const u=t.e;if(u!==null){var r=o,e=a;t.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];$(s.effect),K(s.reaction),Nn(s.fn)}}finally{$(r),K(e)}}f=t.p,t.m=!0}return{}}function gr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=$n(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(n)}catch{}}}}}export{Nt as $,o as A,Wt as B,q as C,Qt as D,yn as E,Ot as F,K as G,$ as H,St as I,a as J,rr as K,ut as L,O as M,gn as N,Jt as O,at as P,An as Q,Ft as R,ur as S,Zt as T,Dt as U,_r as V,ar as W,Ut as X,Ht as Y,cn as Z,kt as _,ir as a,ln as a0,Lt as a1,zt as a2,_n as a3,Yt as a4,$n as a5,ot as a6,tr as a7,hr as a8,pr as a9,Nn as aa,ct as ab,dr as ac,qt as ad,bt as ae,Gt as af,Tn as ag,m as ah,Z as ai,Bt as aj,W as ak,Vt as al,Kt as am,Ct as an,or as ao,$t as ap,Gn as aq,yr as ar,jt as as,Jn as at,wr as b,f as c,Pt as d,Mt as e,gr as f,Er as g,it as h,lr as i,mr as j,er as k,Xt as l,vt as m,nr as n,vr as o,Tr as p,It as q,Zn as r,sr as s,cr as t,fr as u,F as v,S as w,w as x,X as y,nn as z};
