import{H as ve}from"../chunks/control.CYgJF_JY.js";import{a as A,t as I}from"../chunks/disclose-version.DKHAQcQj.js";import{i as pe}from"../chunks/legacy.DhKPwosb.js";import{a3 as _e,O as ie,X as x,a2 as oe,a4 as de,a5 as S,T as M,a6 as he,U as j,Y as C,d as O,F as X,q as Q,a7 as V,a8 as W,a9 as D,aa as U,ab as me,I as ge,a1 as Y,_ as xe,Z as Ee,m as be,ac as le,ad as ye,ae as z,af as q,ag as we,ah as K,j as G,ai as Ae,aj as Te,ak as Ne,W as Ie,al as ke,am as Ce,an as Me,ao as De,ap as He,l as $,aq as Be,p as Re,a as Se,ar as Ue,as as ee,s as H,c as T,r as b,t as ae,i as N}from"../chunks/runtime.DMki_37a.js";import{h as Ke,a as B}from"../chunks/store.BChq-loN.js";import{p as Oe}from"../chunks/props.CAN9dSfM.js";const F=0,R=1,J=2;function re(t,e,a,c,u){x&&oe();var f=t,_=_e(),h=ge,i=j,l,r,v,o=(_?O:X)(void 0),n=(_?O:X)(void 0),d=!1;function g(s,p){d=!0,p&&(Q(m),V(m),W(h));try{s===F&&a&&(l?D(l):l=M(()=>a(f))),s===R&&c&&(r?D(r):r=M(()=>c(f,o))),s===J&&u&&(v?D(v):v=M(()=>u(f,n))),s!==F&&l&&U(l,()=>l=null),s!==R&&r&&U(r,()=>r=null),s!==J&&v&&U(v,()=>v=null)}finally{p&&(W(null),V(null),Q(null),me())}}var m=ie(()=>{if(i!==(i=e())){if(de(i)){var s=i;d=!1,s.then(p=>{s===i&&(S(o,p),g(R,!0))},p=>{if(s===i)throw S(n,p),g(J,!0),n.v}),x?a&&(l=M(()=>a(f))):he(()=>{d||g(F,!0)})}else S(o,i),g(R,!1);return()=>i=j}});x&&(f=C)}function Pe(t,e){return e}function Le(t,e,a,c){for(var u=[],f=e.length,_=0;_<f;_++)Ae(e[_].e,u,!0);var h=f>0&&u.length===0&&a!==null;if(h){var i=a.parentNode;Te(i),i.append(a),c.clear(),y(t,e[0].prev,e[f-1].next)}Ne(u,()=>{for(var l=0;l<f;l++){var r=e[l];h||(c.delete(r.k),y(t,r.prev,r.next)),Ie(r.e,!h)}})}function Ye(t,e,a,c,u,f=null){var _=t,h={flags:e,items:new Map,first:null};{var i=t;_=x?Y(xe(i)):i.appendChild(Ee())}x&&oe();var l=null,r=!1;ie(()=>{var v=a(),o=be(v)?v:v==null?[]:le(v),n=o.length;if(r&&n===0)return;r=n===0;let d=!1;if(x){var g=_.data===ye;g!==(n===0)&&(_=z(),Y(_),q(!1),d=!0)}if(x){for(var m=null,s,p=0;p<n;p++){if(C.nodeType===8&&C.data===we){_=C,d=!0,q(!1);break}var k=o[p],w=c(k,p);s=fe(C,h,m,null,k,w,p,u,e),h.items.set(w,s),m=s}n>0&&Y(z())}if(!x){var E=ke;qe(o,h,_,u,e,(E.f&K)!==0,c)}f!==null&&(n===0?l?D(l):l=M(()=>f(_)):l!==null&&U(l,()=>{l=null})),d&&q(!0),a()}),x&&(_=C)}function qe(t,e,a,c,u,f,_){var h=t.length,i=e.items,l=e.first,r=l,v,o=null,n=[],d=[],g,m,s,p;for(p=0;p<h;p+=1){if(g=t[p],m=_(g,p),s=i.get(m),s===void 0){var k=r?r.e.nodes_start:a;o=fe(k,e,o,o===null?e.first:o.next,g,m,p,c,u),i.set(m,o),n=[],d=[],r=o.next;continue}if(Fe(s,g,p),s.e.f&K&&D(s.e),s!==r){if(v!==void 0&&v.has(s)){if(n.length<d.length){var w=d[0],E;o=w.prev;var Z=n[0],P=n[n.length-1];for(E=0;E<n.length;E+=1)te(n[E],w,a);for(E=0;E<d.length;E+=1)v.delete(d[E]);y(e,Z.prev,P.next),y(e,o,Z),y(e,P,w),r=w,o=P,p-=1,n=[],d=[]}else v.delete(s),te(s,r,a),y(e,s.prev,s.next),y(e,s,o===null?e.first:o.next),y(e,o,s),o=s;continue}for(n=[],d=[];r!==null&&r.k!==m;)(f||!(r.e.f&K))&&(v??(v=new Set)).add(r),d.push(r),r=r.next;if(r===null)continue;s=r}n.push(s),o=s,r=s.next}if(r!==null||v!==void 0){for(var L=v===void 0?[]:le(v);r!==null;)(f||!(r.e.f&K))&&L.push(r),r=r.next;var ce=L.length;if(ce>0){var ue=h===0?a:null;Le(e,L,ue,i)}}G.first=e.first&&e.first.e,G.last=o&&o.e}function Fe(t,e,a,c){S(t.v,e),t.i=a}function fe(t,e,a,c,u,f,_,h,i){var l=(i&Me)!==0,r=(i&De)===0,v=l?r?X(u):O(u):u,o=i&Ce?O(_):_,n={i:o,v,k:f,a:null,e:null,prev:a,next:c};try{return n.e=M(()=>h(t,v,o),x),n.e.prev=a&&a.e,n.e.next=c&&c.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),c!==null&&(c.prev=n,c.e.prev=n.e),n}finally{}}function te(t,e,a){for(var c=t.next?t.next.e.nodes_start:a,u=e?e.e.nodes_start:a,f=t.e.nodes_start;f!==c;){var _=He(f);u.before(f),f=_}}function y(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ne(t,e,a,c){var u=t.__attributes??(t.__attributes={});x&&(u[e]=t.getAttribute(e),t.nodeName==="LINK")||u[e]!==(u[e]=a)&&(a==null?t.removeAttribute(e):typeof a!="string"&&Je(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var se=new Map;function Je(t){var e=se.get(t.nodeName);if(e)return e;se.set(t.nodeName,e=[]);for(var a,c=$(t),u=Element.prototype;u!==c;){a=Be(c);for(var f in a)a[f].set&&e.push(f);c=$(c)}return e}function Xe(t,e){throw new ve(t,e)}new TextEncoder;async function Ze(){const t=await fetch("https://script.google.com/macros/s/AKfycbxwRjP-igPQeNIrTf2jenKcBp7MAl4Z_F_J7S6MQN9gJ2MX-2kJj4UEwC3AKYvxBSb1/exec");if(!t.ok)throw Xe(500,"Woops! Kleshas are still there. Please try again later.");return{blogData:t.json()}}const ia=Object.freeze(Object.defineProperty({__proto__:null,load:Ze},Symbol.toStringTag,{value:"Module"}));var je=I(`<meta name="description" content="'さもなくばイメージ画像のように「あとはやるだけ」のものが複雑に絡み合って足枷になるぞ．—— tomio2480'"> <meta name="og:image" content="https://media.connpass.com/thumbs/a8/c5/a8c5a75cd0917b3344a86de8c15983e9.png"> <meta name="og:title" content="力強くブログを108記事アウトプットする日"> <meta name="twitter:image" content="https://media.connpass.com/thumbs/a8/c5/a8c5a75cd0917b3344a86de8c15983e9.png"> <meta name="twitter:title" content="力強くブログを108記事アウトプットする日"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:creator" content="@tomio2480">`,1),Qe=I("<span> </span>"),Ve=I("<span>...</span>"),We=I('<li><span> </span> <a class="text-blue-600 underline" target="_blank" rel="noopener noreferrer"> </a> <span>by</span> <a class="text-blue-600 underline" target="_blank" rel="noopener noreferrer"> </a></li>'),ze=I("<ul></ul>"),Ge=I("<p>loading...</p>"),$e=I('<main class="md:max-x-[500px] flex max-h-full flex-col items-center justify-center px-5 py-8"><img src="https://media.connpass.com/thumbs/a8/c5/a8c5a75cd0917b3344a86de8c15983e9.png" alt="建物の外側に放置されている複数の椅子が絡み合って、複雑な様子を写した画像"> <h1>力強くブログを108記事アウトプットする日</h1> <h2><!> / 108</h2> <h3><a class="text-blue-600 underline" target="_blank" rel="noopener noreferer" href="https://x.com/hashtag/%E5%8A%9B%E5%BC%B7%E3%81%8F%E3%82%A2%E3%82%A6%E3%83%88%E3%83%97%E3%83%83%E3%83%88%E3%81%99%E3%82%8B%E6%97%A5">#力強くブログを108記事アウトプットする日</a></h3> <h3><a href="https://forceoutput.connpass.com/event/339151/" target="_blank">connpassページ</a></h3> <!></main>');function oa(t,e){Re(e,!1);let a=Oe(e,"data",8);const c=a().blogData.then(i=>i.data.length);pe();var u=$e();Ke(i=>{var l=je();Ue.title="力強くブログを108記事アウトプットする日",ee(12),A(i,l)});var f=H(T(u),4),_=T(f);re(_,()=>c,i=>{var l=Ve();A(i,l)},(i,l)=>{var r=Qe(),v=T(r,!0);b(r),ae(()=>B(v,N(l))),A(i,r)}),ee(),b(f);var h=H(f,6);re(h,()=>a().blogData,i=>{var l=Ge();A(i,l)},(i,l)=>{var r=ze();Ye(r,5,()=>N(l).data,Pe,(v,o)=>{var n=We(),d=T(n),g=T(d);b(d);var m=H(d,2),s=T(m,!0);b(m);var p=H(m,4),k=T(p,!0);b(p),b(n),ae(()=>{B(g,`No.${N(o).id+1}`),ne(m,"href",N(o).blogUrl),B(s,N(o).blogTitle),ne(p,"href",N(o).profileUrl),B(k,N(o).name)}),A(v,n)}),b(r),A(i,r)}),b(u),A(t,u),Se()}export{oa as component,ia as universal};
