var St=Array.isArray,It=Array.from,Ot=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,$n=Object.getOwnPropertyDescriptors,kt=Object.prototype,Ct=Array.prototype,Kn=Object.getPrototypeOf;const Nt=()=>{};function Ft(n){return typeof(n==null?void 0:n.then)=="function"}function Pt(n){return n()}function Zn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,dn=4,Y=8,en=16,m=32,Z=64,J=128,S=256,V=512,h=1024,x=2048,j=4096,N=8192,F=16384,zn=32768,En=65536,bt=1<<17,Wn=1<<19,yn=1<<20,cn=Symbol("$state"),qt=Symbol("legacy props");function wn(n){return n===this.v}function Xn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!Xn(n,this.v)}function Jn(n){throw new Error("effect_in_teardown")}function Qn(){throw new Error("effect_in_unowned_derived")}function nt(n){throw new Error("effect_orphan")}function tt(){throw new Error("effect_update_depth_exceeded")}function Mt(){throw new Error("hydration_failed")}function Lt(n){throw new Error("props_invalid_value")}function Yt(){throw new Error("state_descriptors_fixed")}function jt(){throw new Error("state_prototype_fixed")}function rt(){throw new Error("state_unsafe_local_read")}function et(){throw new Error("state_unsafe_mutation")}let z=!1;function Ht(){z=!0}function sn(n){return{f:0,v:n,reactions:null,equals:wn,version:0}}function Ut(n){return st(sn(n))}function Bt(n,t=!1){var e;const r=sn(n);return t||(r.equals=Tn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function st(n){return u!==null&&u.f&y&&(T===null?wt([n]):T.push(n)),n}function Vt(n,t){return u!==null&&on()&&u.f&(y|en)&&(T===null||!T.includes(n))&&et(),lt(n,t)}function lt(n,t){return n.equals(t)||(n.v=t,n.version=jn(),mn(n,x),on()&&o!==null&&o.f&h&&!(o.f&m)&&(v!==null&&v.includes(n)?(g(o,x),X(o)):A===null?Tt([n]):A.push(n))),t}function mn(n,t){var r=n.reactions;if(r!==null)for(var e=on(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&x||!e&&a===o||(g(a,t),i&(h|S)&&(i&y?mn(a,j):X(a)))}}const Gt=1,$t=2,Kt=16,Zt=1,zt=2,Wt=4,Xt=8,Jt=16,Qt=1,nr=2,at="[",ot="[!",ut="]",gn={},tr=Symbol();function An(n){console.warn("hydration_mismatch")}let D=!1;function rr(n){D=n}let w;function q(n){if(n===null)throw An(),gn;return w=n}function er(){return q(I(w))}function sr(n){if(D){if(I(w)!==null)throw An(),gn;w=n}}function lr(n=1){if(D){for(var t=n,r=w;t--;)r=I(r);w=r}}function ar(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===ut){if(n===0)return t;n-=1}else(r===at||r===ot)&&(n+=1)}var e=I(t);t.remove(),t=e}}var vn,it,xn,Rn;function or(){if(vn===void 0){vn=window,it=document;var n=Element.prototype,t=Node.prototype;xn=_n(t,"firstChild").get,Rn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Q(n=""){return document.createTextNode(n)}function nn(n){return xn.call(n)}function I(n){return Rn.call(n)}function ur(n,t){if(!D)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(Q());else if(t&&r.nodeType!==3){var e=Q();return r==null||r.before(e),q(e),e}return q(r),r}function ir(n,t){if(!D){var r=nn(n);return r instanceof Comment&&r.data===""?I(r):r}return w}function fr(n,t=1,r=!1){let e=D?w:n;for(var s;t--;)s=e,e=I(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=Q();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function _r(n){n.textContent=""}function ft(n){var t=y|x;o===null?t|=S:o.f|=yn;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:wn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function cr(n){const t=ft(n);return t.equals=Tn,t}function Dn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?ln(e):b(e)}}}function _t(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Sn(n){var t,r=o;K(_t(n));try{Dn(n),t=Hn(n)}finally{K(r)}return t}function In(n){var t=Sn(n),r=(O||n.f&S)&&n.deps!==null?j:h;g(n,r),n.equals(t)||(n.v=t,n.version=jn())}function ln(n){Dn(n),L(n,0),g(n,F),n.v=n.children=n.deps=n.ctx=n.reactions=null}function On(n){o===null&&u===null&&nt(),u!==null&&u.f&S&&Qn(),an&&Jn()}function ct(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&Z)!==0,l=o,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{pn(!0),W(a),a.f|=zn}catch(_){throw b(a),_}finally{pn(i)}}else t!==null&&X(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yn)===0;if(!p&&!s&&e&&(l!==null&&ct(a,l),u!==null&&u.f&y)){var d=u;(d.children??(d.children=[])).push(a)}return a}function vr(n){const t=P(Y,null,!1);return g(t,h),t.teardown=n,t}function pr(n){On();var t=o!==null&&(o.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:u})}else{var e=kn(n);return e}}function hr(n){return On(),vt(n)}function dr(n){const t=P(Z,n,!0);return()=>{b(t)}}function kn(n){return P(dn,n,!1)}function vt(n){return P(Y,n,!0)}function Er(n){return pt(n)}function pt(n,t=0){return P(Y|en|t,n,!0)}function yr(n,t=!0){return P(Y|m,n,!0,t)}function Cn(n){var t=n.teardown;if(t!==null){const r=an,e=u;hn(!0),$(null);try{t.call(null)}finally{hn(r),$(e)}}}function Nn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)ln(t[r])}}function Fn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;b(r,t),r=e}}function ht(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||b(t),t=r}}function b(n,t=!0){var r=!1;if((t||n.f&Wn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:I(e);e.remove(),e=l}r=!0}Fn(n,t&&!r),Nn(n),L(n,0),g(n,F);var a=n.transitions;if(a!==null)for(const p of a)p.stop();Cn(n);var i=n.parent;i!==null&&i.first!==null&&Pn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Pn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function wr(n,t){var r=[];bn(n,r,!0),dt(r,()=>{b(n),t&&t()})}function dt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function bn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&En)!==0||(e.f&m)!==0;bn(e,t,l?r:!1),e=s}}}function Tr(n){qn(n,!0)}function qn(n,t){if(n.f&N){H(n)&&W(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&En)!==0||(r.f&m)!==0;qn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}let G=!1,tn=[];function Mn(){G=!1;const n=tn.slice();tn=[],Zn(n)}function mr(n){G||(G=!0,queueMicrotask(Mn)),tn.push(n)}function Et(){G&&Mn()}const Ln=0,yt=1;let U=!1,B=Ln,M=!1,k=!1,an=!1;function pn(n){k=n}function hn(n){an=n}let R=[],C=0;let u=null;function $(n){u=n}let o=null;function K(n){o=n}let T=null;function wt(n){T=n}let v=null,E=0,A=null;function Tt(n){A=n}let Yn=0,O=!1,f=null;function gr(n){f=n}function jn(){return++Yn}function on(){return!z||f!==null&&f.l===null}function H(n){var a,i;var t=n.f;if(t&x)return!0;if(t&j){var r=n.deps,e=(t&S)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&In(l),e&&o!==null&&!O&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||g(n,h)}return!1}function mt(n,t){for(var r=t;r!==null;){if(r.f&J)try{r.fn(n);return}catch{r.f^=J}r=r.parent}throw U=!1,n}function gt(n){return(n.f&F)===0&&(n.parent===null||(n.parent.f&J)===0)}function un(n,t,r,e){if(U){if(r===null&&(U=!1),gt(t))throw n;return}r!==null&&(U=!0);{mt(n,t);return}}function Hn(n){var fn;var t=v,r=E,e=A,s=u,l=O,a=T,i=f,p=n.f;v=null,E=0,A=null,u=p&(m|Z)?null:n,O=!k&&(p&S)!==0,T=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(L(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!O)for(c=E;c<_.length;c++)((fn=_[c]).reactions??(fn.reactions=[])).push(n)}else _!==null&&E<_.length&&(L(n,E),_.length=E);return d}finally{v=t,E=r,A=e,u=s,O=l,T=a,f=i}}function At(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(g(t,j),t.f&(S|V)||(t.f^=V),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)At(n,r[e])}function W(n){var t=n.f;if(!(t&F)){g(n,h);var r=o,e=f;o=n;try{t&en?ht(n):Fn(n),Nn(n),Cn(n);var s=Hn(n);n.teardown=typeof s=="function"?s:null,n.version=Yn}catch(l){un(l,n,r,e||n.ctx)}finally{o=r}}}function Un(){C>1e3&&(C=0,tt()),C++}function Bn(n){var t=n.length;if(t!==0){Un();var r=k;k=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var l=[];Vn(s,l),xt(l)}}finally{k=r}}}function xt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(F|N)))try{H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pn(e):e.fn=null))}catch(s){un(s,e,null,e.ctx)}}}function Rt(){if(M=!1,C>1001)return;const n=R;R=[],Bn(n),M||(C=0)}function X(n){B===Ln&&(M||(M=!0,queueMicrotask(Rt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|m)){if(!(r&h))return;t.f^=h}}R.push(t)}function Vn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&N))if(s&Y){if(l)r.f^=h;else try{H(r)&&W(r)}catch(c){un(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&dn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Vn(p,t)}function Gn(n){var t=B,r=R;try{Un();const s=[];B=yt,R=s,M=!1,Bn(r);var e=n==null?void 0:n();return Et(),(R.length>0||s.length>0)&&Gn(),C=0,e}finally{B=t,R=r}}async function Ar(){await Promise.resolve(),Gn()}function xr(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&F){var e=Sn(n);return ln(n),e}if(u!==null){T!==null&&T.includes(n)&&rt();var s=u.deps;v===null&&s!==null&&s[E]===n?E++:v===null?v=[n]:v.push(n),A!==null&&o!==null&&o.f&h&&!(o.f&m)&&A.includes(n)&&(g(o,x),X(o))}else if(r&&n.deps===null)for(var l=n,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=n,H(l)&&In(l)),n.v}function Rr(n){const t=u;try{return u=null,n()}finally{u=t}}const Dt=~(x|j|h);function g(n,t){n.f=n.f&Dt|t}function Dr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:sn(!1)})}function Sr(n){const t=f;if(t!==null){const a=t.e;if(a!==null){var r=o,e=u;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];K(l.effect),$(l.reaction),kn(l.fn)}}finally{K(r),$(e)}}f=t.p,t.m=!0}return{}}function Ir(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Kn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$n(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}export{Qt as $,Wt as A,m as B,Tn as C,Zt as D,Jt as E,Bt as F,hr as G,pr as H,f as I,Zn as J,Pt as K,bt as L,Ir as M,Ht as N,pt as O,zt as P,En as Q,Z as R,cn as S,yr as T,tr as U,Nt as V,b as W,D as X,w as Y,Q as Z,nn as _,Sr as a,nr as a0,q as a1,er as a2,on as a3,Ft as a4,lt as a5,mr as a6,$ as a7,gr as a8,Tr as a9,dr as aA,vr as aB,kn as aC,vt as aD,Ar as aE,Ut as aF,Xn as aG,wr as aa,Gn as ab,It as ac,ot as ad,ar as ae,rr as af,ut as ag,N as ah,bn as ai,_r as aj,dt as ak,u as al,$t as am,Gt as an,Kt as ao,I as ap,$n as aq,it as ar,lr as as,Ot as at,Wn as au,at as av,or as aw,gn as ax,An as ay,Mt as az,Ct as b,ur as c,sn as d,Yt as e,ir as f,Vt as g,_n as h,xr as i,o as j,jt as k,Kn as l,St as m,Lt as n,kt as o,Dr as p,K as q,sr as r,fr as s,Er as t,z as u,Xt as v,qt as w,Rr as x,ft as y,cr as z};
