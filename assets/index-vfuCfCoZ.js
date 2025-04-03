(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Uo(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return r=>!!n[r]}const fe={},ti=[],It=()=>{},Sp=()=>!1,Dp=/^on[^a-z]/,$s=t=>Dp.test(t),Bo=t=>t.startsWith("onUpdate:"),Me=Object.assign,$o=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rp=Object.prototype.hasOwnProperty,X=(t,e)=>Rp.call(t,e),W=Array.isArray,ni=t=>zs(t)==="[object Map]",Ld=t=>zs(t)==="[object Set]",G=t=>typeof t=="function",Ee=t=>typeof t=="string",zo=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Ud=t=>pe(t)&&G(t.then)&&G(t.catch),Bd=Object.prototype.toString,zs=t=>Bd.call(t),Pp=t=>zs(t).slice(8,-1),$d=t=>zs(t)==="[object Object]",Ho=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yr=Uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Np=/-(\w)/g,At=Hs(t=>t.replace(Np,(e,n)=>n?n.toUpperCase():"")),Fp=/\B([A-Z])/g,ki=Hs(t=>t.replace(Fp,"-$1").toLowerCase()),qs=Hs(t=>t.charAt(0).toUpperCase()+t.slice(1)),vu=Hs(t=>t?`on${qs(t)}`:""),ir=(t,e)=>!Object.is(t,e),Qr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},as=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Yu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hc;const Qu=()=>hc||(hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ws(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ee(i)?Up(i):Ws(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ee(t))return t;if(pe(t))return t}}const Op=/;(?![^(]*\))/g,Mp=/:([^]+)/,Lp=/\/\*[^]*?\*\//g;function Up(t){const e={};return t.replace(Lp,"").split(Op).forEach(n=>{if(n){const i=n.split(Mp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qo(t){let e="";if(Ee(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const i=qo(t[n]);i&&(e+=i+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$p=Uo(Bp);function zd(t){return!!t||t===""}const Nn=t=>Ee(t)?t:t==null?"":W(t)||pe(t)&&(t.toString===Bd||!G(t.toString))?JSON.stringify(t,Hd,2):String(t),Hd=(t,e)=>e&&e.__v_isRef?Hd(t,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!W(e)&&!$d(e)?String(e):e;let rt;class zp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Hp(t,e=rt){e&&e.active&&e.effects.push(t)}function qp(){return rt}const Wo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qd=t=>(t.w&mn)>0,Wd=t=>(t.n&mn)>0,Wp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mn},jp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];qd(r)&&!Wd(r)?r.delete(t):e[n++]=r,r.w&=~mn,r.n&=~mn}e.length=n}},Ju=new WeakMap;let qi=0,mn=1;const Zu=30;let st;const Fn=Symbol(""),Xu=Symbol("");class jo{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hp(this,i)}run(){if(!this.active)return this.fn();let e=st,n=ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=st,st=this,ln=!0,mn=1<<++qi,qi<=Zu?Wp(this):pc(this),this.fn()}finally{qi<=Zu&&jp(this),mn=1<<--qi,st=this.parent,ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){st===this?this.deferStop=!0:this.active&&(pc(this),this.onStop&&this.onStop(),this.active=!1)}}function pc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ln=!0;const jd=[];function Ii(){jd.push(ln),ln=!1}function Ti(){const t=jd.pop();ln=t===void 0?!0:t}function je(t,e,n){if(ln&&st){let i=Ju.get(t);i||Ju.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Wo()),Vd(r)}}function Vd(t,e){let n=!1;qi<=Zu?Wd(t)||(t.n|=mn,n=!qd(t)):n=!t.has(st),n&&(t.add(st),st.deps.push(t))}function qt(t,e,n,i,r,s){const u=Ju.get(t);if(!u)return;let o=[];if(e==="clear")o=[...u.values()];else if(n==="length"&&W(t)){const a=Number(i);u.forEach((c,l)=>{(l==="length"||l>=a)&&o.push(c)})}else switch(n!==void 0&&o.push(u.get(n)),e){case"add":W(t)?Ho(n)&&o.push(u.get("length")):(o.push(u.get(Fn)),ni(t)&&o.push(u.get(Xu)));break;case"delete":W(t)||(o.push(u.get(Fn)),ni(t)&&o.push(u.get(Xu)));break;case"set":ni(t)&&o.push(u.get(Fn));break}if(o.length===1)o[0]&&eo(o[0]);else{const a=[];for(const c of o)c&&a.push(...c);eo(Wo(a))}}function eo(t,e){const n=W(t)?t:[...t];for(const i of n)i.computed&&_c(i);for(const i of n)i.computed||_c(i)}function _c(t,e){(t!==st||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Vp=Uo("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zo)),Gp=Vo(),Kp=Vo(!1,!0),Yp=Vo(!0),mc=Qp();function Qp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=te(this);for(let s=0,u=this.length;s<u;s++)je(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ii();const i=te(this)[e].apply(this,n);return Ti(),i}}),t}function Jp(t){const e=te(this);return je(e,"has",t),e.hasOwnProperty(t)}function Vo(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?h_:Zd:e?Jd:Qd).get(i))return i;const u=W(i);if(!t){if(u&&X(mc,r))return Reflect.get(mc,r,s);if(r==="hasOwnProperty")return Jp}const o=Reflect.get(i,r,s);return(zo(r)?Gd.has(r):Vp(r))||(t||je(i,"get",r),e)?o:Fe(o)?u&&Ho(r)?o:o.value:pe(o)?t?ef(o):Vs(o):o}}const Zp=Kd(),Xp=Kd(!0);function Kd(t=!1){return function(n,i,r,s){let u=n[i];if(fi(u)&&Fe(u)&&!Fe(r))return!1;if(!t&&(!cs(r)&&!fi(r)&&(u=te(u),r=te(r)),!W(n)&&Fe(u)&&!Fe(r)))return u.value=r,!0;const o=W(n)&&Ho(i)?Number(i)<n.length:X(n,i),a=Reflect.set(n,i,r,s);return n===te(s)&&(o?ir(r,u)&&qt(n,"set",i,r):qt(n,"add",i,r)),a}}function e_(t,e){const n=X(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&qt(t,"delete",e,void 0),i}function t_(t,e){const n=Reflect.has(t,e);return(!zo(e)||!Gd.has(e))&&je(t,"has",e),n}function n_(t){return je(t,"iterate",W(t)?"length":Fn),Reflect.ownKeys(t)}const Yd={get:Gp,set:Zp,deleteProperty:e_,has:t_,ownKeys:n_},i_={get:Yp,set(t,e){return!0},deleteProperty(t,e){return!0}},r_=Me({},Yd,{get:Kp,set:Xp}),Go=t=>t,js=t=>Reflect.getPrototypeOf(t);function Ur(t,e,n=!1,i=!1){t=t.__v_raw;const r=te(t),s=te(e);n||(e!==s&&je(r,"get",e),je(r,"get",s));const{has:u}=js(r),o=i?Go:n?Qo:rr;if(u.call(r,e))return o(t.get(e));if(u.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function Br(t,e=!1){const n=this.__v_raw,i=te(n),r=te(t);return e||(t!==r&&je(i,"has",t),je(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function $r(t,e=!1){return t=t.__v_raw,!e&&je(te(t),"iterate",Fn),Reflect.get(t,"size",t)}function gc(t){t=te(t);const e=te(this);return js(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function bc(t,e){e=te(e);const n=te(this),{has:i,get:r}=js(n);let s=i.call(n,t);s||(t=te(t),s=i.call(n,t));const u=r.call(n,t);return n.set(t,e),s?ir(e,u)&&qt(n,"set",t,e):qt(n,"add",t,e),this}function yc(t){const e=te(this),{has:n,get:i}=js(e);let r=n.call(e,t);r||(t=te(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&qt(e,"delete",t,void 0),s}function vc(){const t=te(this),e=t.size!==0,n=t.clear();return e&&qt(t,"clear",void 0,void 0),n}function zr(t,e){return function(i,r){const s=this,u=s.__v_raw,o=te(u),a=e?Go:t?Qo:rr;return!t&&je(o,"iterate",Fn),u.forEach((c,l)=>i.call(r,a(c),a(l),s))}}function Hr(t,e,n){return function(...i){const r=this.__v_raw,s=te(r),u=ni(s),o=t==="entries"||t===Symbol.iterator&&u,a=t==="keys"&&u,c=r[t](...i),l=n?Go:e?Qo:rr;return!e&&je(s,"iterate",a?Xu:Fn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[l(d[0]),l(d[1])]:l(d),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function s_(){const t={get(s){return Ur(this,s)},get size(){return $r(this)},has:Br,add:gc,set:bc,delete:yc,clear:vc,forEach:zr(!1,!1)},e={get(s){return Ur(this,s,!1,!0)},get size(){return $r(this)},has:Br,add:gc,set:bc,delete:yc,clear:vc,forEach:zr(!1,!0)},n={get(s){return Ur(this,s,!0)},get size(){return $r(this,!0)},has(s){return Br.call(this,s,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:zr(!0,!1)},i={get(s){return Ur(this,s,!0,!0)},get size(){return $r(this,!0)},has(s){return Br.call(this,s,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Hr(s,!1,!1),n[s]=Hr(s,!0,!1),e[s]=Hr(s,!1,!0),i[s]=Hr(s,!0,!0)}),[t,n,e,i]}const[u_,o_,a_,c_]=s_();function Ko(t,e){const n=e?t?c_:a_:t?o_:u_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(X(n,r)&&r in i?n:i,r,s)}const l_={get:Ko(!1,!1)},d_={get:Ko(!1,!0)},f_={get:Ko(!0,!1)},Qd=new WeakMap,Jd=new WeakMap,Zd=new WeakMap,h_=new WeakMap;function p_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function __(t){return t.__v_skip||!Object.isExtensible(t)?0:p_(Pp(t))}function Vs(t){return fi(t)?t:Yo(t,!1,Yd,l_,Qd)}function Xd(t){return Yo(t,!1,r_,d_,Jd)}function ef(t){return Yo(t,!0,i_,f_,Zd)}function Yo(t,e,n,i,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const u=__(t);if(u===0)return t;const o=new Proxy(t,u===2?i:n);return r.set(t,o),o}function ii(t){return fi(t)?ii(t.__v_raw):!!(t&&t.__v_isReactive)}function fi(t){return!!(t&&t.__v_isReadonly)}function cs(t){return!!(t&&t.__v_isShallow)}function tf(t){return ii(t)||fi(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function nf(t){return as(t,"__v_skip",!0),t}const rr=t=>pe(t)?Vs(t):t,Qo=t=>pe(t)?ef(t):t;function rf(t){ln&&st&&(t=te(t),Vd(t.dep||(t.dep=Wo())))}function sf(t,e){t=te(t);const n=t.dep;n&&eo(n)}function Fe(t){return!!(t&&t.__v_isRef===!0)}function ji(t){return uf(t,!1)}function m_(t){return uf(t,!0)}function uf(t,e){return Fe(t)?t:new g_(t,e)}class g_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:rr(e)}get value(){return rf(this),this._value}set value(e){const n=this.__v_isShallow||cs(e)||fi(e);e=n?e:te(e),ir(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rr(e),sf(this))}}function On(t){return Fe(t)?t.value:t}const b_={get:(t,e,n)=>On(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Fe(r)&&!Fe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function of(t){return ii(t)?t:new Proxy(t,b_)}class y_{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new jo(e,()=>{this._dirty||(this._dirty=!0,sf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=te(this);return rf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function v_(t,e,n=!1){let i,r;const s=G(t);return s?(i=t,r=It):(i=t.get,r=t.set),new y_(i,r,s||!r,n)}function dn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Gs(s,e,n)}return r}function ht(t,e,n,i){if(G(t)){const s=dn(t,e,n,i);return s&&Ud(s)&&s.catch(u=>{Gs(u,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(ht(t[s],e,n,i));return r}function Gs(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const u=e.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let l=0;l<c.length;l++)if(c[l](t,u,o)===!1)return}s=s.parent}const a=e.appContext.config.errorHandler;if(a){dn(a,null,10,[t,u,o]);return}}E_(t,n,r,i)}function E_(t,e,n,i=!0){console.error(t)}let sr=!1,to=!1;const Ne=[];let xt=0;const ri=[];let Mt=null,Tn=0;const af=Promise.resolve();let Jo=null;function cf(t){const e=Jo||af;return t?e.then(this?t.bind(this):t):e}function C_(t){let e=xt+1,n=Ne.length;for(;e<n;){const i=e+n>>>1;ur(Ne[i])<t?e=i+1:n=i}return e}function Zo(t){(!Ne.length||!Ne.includes(t,sr&&t.allowRecurse?xt+1:xt))&&(t.id==null?Ne.push(t):Ne.splice(C_(t.id),0,t),lf())}function lf(){!sr&&!to&&(to=!0,Jo=af.then(ff))}function x_(t){const e=Ne.indexOf(t);e>xt&&Ne.splice(e,1)}function w_(t){W(t)?ri.push(...t):(!Mt||!Mt.includes(t,t.allowRecurse?Tn+1:Tn))&&ri.push(t),lf()}function Ec(t,e=sr?xt+1:0){for(;e<Ne.length;e++){const n=Ne[e];n&&n.pre&&(Ne.splice(e,1),e--,n())}}function df(t){if(ri.length){const e=[...new Set(ri)];if(ri.length=0,Mt){Mt.push(...e);return}for(Mt=e,Mt.sort((n,i)=>ur(n)-ur(i)),Tn=0;Tn<Mt.length;Tn++)Mt[Tn]();Mt=null,Tn=0}}const ur=t=>t.id==null?1/0:t.id,k_=(t,e)=>{const n=ur(t)-ur(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ff(t){to=!1,sr=!0,Ne.sort(k_);try{for(xt=0;xt<Ne.length;xt++){const e=Ne[xt];e&&e.active!==!1&&dn(e,null,14)}}finally{xt=0,Ne.length=0,df(),sr=!1,Jo=null,(Ne.length||ri.length)&&ff()}}function I_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||fe;let r=n;const s=e.startsWith("update:"),u=s&&e.slice(7);if(u&&u in i){const l=`${u==="modelValue"?"model":u}Modifiers`,{number:d,trim:f}=i[l]||fe;f&&(r=n.map(h=>Ee(h)?h.trim():h)),d&&(r=n.map(Yu))}let o,a=i[o=vu(e)]||i[o=vu(At(e))];!a&&s&&(a=i[o=vu(ki(e))]),a&&ht(a,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,ht(c,t,6,r)}}function hf(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let u={},o=!1;if(!G(t)){const a=c=>{const l=hf(c,e,!0);l&&(o=!0,Me(u,l))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!s&&!o?(pe(t)&&i.set(t,null),null):(W(s)?s.forEach(a=>u[a]=null):Me(u,s),pe(t)&&i.set(t,u),u)}function Ks(t,e){return!t||!$s(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,ki(e))||X(t,e))}let Oe=null,Ys=null;function ls(t){const e=Oe;return Oe=t,Ys=t&&t.type.__scopeId||null,e}function Qs(t){Ys=t}function Js(){Ys=null}function Et(t,e=Oe,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Nc(-1);const s=ls(e);let u;try{u=t(...r)}finally{ls(s),i._d&&Nc(1)}return u};return i._n=!0,i._c=!0,i._d=!0,i}function Cc(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[u],slots:o,attrs:a,emit:c,render:l,renderCache:d,data:f,setupState:h,ctx:_,inheritAttrs:y}=t;let k,R;const C=ls(t);try{if(n.shapeFlag&4){const x=r||i;k=Ct(l.call(x,x,d,s,h,f,_)),R=a}else{const x=e;k=Ct(x.length>1?x(s,{attrs:a,slots:o,emit:c}):x(s,null)),R=e.props?a:T_(a)}}catch(x){Ki.length=0,Gs(x,t,1),k=V(gn)}let w=k;if(R&&y!==!1){const x=Object.keys(R),{shapeFlag:M}=w;x.length&&M&7&&(u&&x.some(Bo)&&(R=A_(R,u)),w=hi(w,R))}return n.dirs&&(w=hi(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),k=w,ls(C),k}const T_=t=>{let e;for(const n in t)(n==="class"||n==="style"||$s(n))&&((e||(e={}))[n]=t[n]);return e},A_=(t,e)=>{const n={};for(const i in t)(!Bo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function S_(t,e,n){const{props:i,children:r,component:s}=t,{props:u,children:o,patchFlag:a}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?xc(i,u,c):!!u;if(a&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const f=l[d];if(u[f]!==i[f]&&!Ks(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===u?!1:i?u?xc(i,u,c):!0:!!u;return!1}function xc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ks(n,s))return!0}return!1}function D_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const R_=t=>t.__isSuspense;function P_(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):w_(t)}const qr={};function Jr(t,e,n){return pf(t,e,n)}function pf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:u}=fe){var o;const a=qp()===((o=De)==null?void 0:o.scope)?De:null;let c,l=!1,d=!1;if(Fe(t)?(c=()=>t.value,l=cs(t)):ii(t)?(c=()=>t,i=!0):W(t)?(d=!0,l=t.some(x=>ii(x)||cs(x)),c=()=>t.map(x=>{if(Fe(x))return x.value;if(ii(x))return Sn(x);if(G(x))return dn(x,a,2)})):G(t)?e?c=()=>dn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),ht(t,a,3,[h])}:c=It,e&&i){const x=c;c=()=>Sn(x())}let f,h=x=>{f=C.onStop=()=>{dn(x,a,4)}},_;if(ar)if(h=It,e?n&&ht(e,a,3,[c(),d?[]:void 0,h]):c(),r==="sync"){const x=A1();_=x.__watcherHandles||(x.__watcherHandles=[])}else return It;let y=d?new Array(t.length).fill(qr):qr;const k=()=>{if(C.active)if(e){const x=C.run();(i||l||(d?x.some((M,$)=>ir(M,y[$])):ir(x,y)))&&(f&&f(),ht(e,a,3,[x,y===qr?void 0:d&&y[0]===qr?[]:y,h]),y=x)}else C.run()};k.allowRecurse=!!e;let R;r==="sync"?R=k:r==="post"?R=()=>ze(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),R=()=>Zo(k));const C=new jo(c,R);e?n?k():y=C.run():r==="post"?ze(C.run.bind(C),a&&a.suspense):C.run();const w=()=>{C.stop(),a&&a.scope&&$o(a.scope.effects,C)};return _&&_.push(w),w}function N_(t,e,n){const i=this.proxy,r=Ee(t)?t.includes(".")?_f(i,t):()=>i[t]:t.bind(i,i);let s;G(e)?s=e:(s=e.handler,n=e);const u=De;pi(this);const o=pf(r,s.bind(i),n);return u?pi(u):Mn(),o}function _f(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Sn(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))Sn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Sn(t[n],e);else if(Ld(t)||ni(t))t.forEach(n=>{Sn(n,e)});else if($d(t))for(const n in t)Sn(t[n],e);return t}function F_(t,e){const n=Oe;if(n===null)return t;const i=tu(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[u,o,a,c=fe]=e[s];u&&(G(u)&&(u={mounted:u,updated:u}),u.deep&&Sn(o),r.push({dir:u,instance:i,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function xn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let u=0;u<r.length;u++){const o=r[u];s&&(o.oldValue=s[u].value);let a=o.dir[i];a&&(Ii(),ht(a,n,8,[t.el,o,t,e]),Ti())}}function mf(t,e){return G(t)?Me({name:t.name},e,{setup:t}):t}const Vi=t=>!!t.type.__asyncLoader,gf=t=>t.type.__isKeepAlive;function O_(t,e){bf(t,"a",e)}function M_(t,e){bf(t,"da",e)}function bf(t,e,n=De){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Zs(e,i,n),n){let r=n.parent;for(;r&&r.parent;)gf(r.parent.vnode)&&L_(i,e,n,r),r=r.parent}}function L_(t,e,n,i){const r=Zs(e,t,i,!0);yf(()=>{$o(i[e],r)},n)}function Zs(t,e,n=De,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...u)=>{if(n.isUnmounted)return;Ii(),pi(n);const o=ht(e,n,t,u);return Mn(),Ti(),o});return i?r.unshift(s):r.push(s),s}}const Kt=t=>(e,n=De)=>(!ar||t==="sp")&&Zs(t,(...i)=>e(...i),n),U_=Kt("bm"),Xo=Kt("m"),B_=Kt("bu"),$_=Kt("u"),z_=Kt("bum"),yf=Kt("um"),H_=Kt("sp"),q_=Kt("rtg"),W_=Kt("rtc");function j_(t,e=De){Zs("ec",t,e)}const V_="components";function no(t,e){return K_(V_,t,!0,e)||t}const G_=Symbol.for("v-ndc");function K_(t,e,n=!0,i=!1){const r=Oe||De;if(r){const s=r.type;{const o=k1(s,!1);if(o&&(o===e||o===At(e)||o===qs(At(e))))return s}const u=wc(r[t]||s[t],e)||wc(r.appContext[t],e);return!u&&i?s:u}}function wc(t,e){return t&&(t[e]||t[At(e)]||t[qs(At(e))])}function Y_(t,e,n,i){let r;const s=n;if(W(t)||Ee(t)){r=new Array(t.length);for(let u=0,o=t.length;u<o;u++)r[u]=e(t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let u=0;u<t;u++)r[u]=e(u+1,u,void 0,s)}else if(pe(t))if(t[Symbol.iterator])r=Array.from(t,(u,o)=>e(u,o,void 0,s));else{const u=Object.keys(t);r=new Array(u.length);for(let o=0,a=u.length;o<a;o++){const c=u[o];r[o]=e(t[c],c,o,s)}}else r=[];return r}function Eu(t,e,n={},i,r){if(Oe.isCE||Oe.parent&&Vi(Oe.parent)&&Oe.parent.isCE)return e!=="default"&&(n.name=e),V("slot",n,i);let s=t[e];s&&s._c&&(s._d=!1),he();const u=s&&vf(s(n)),o=Rf(Ue,{key:n.key||u&&u.key||`_${e}`},u||[],u&&t._===1?64:-2);return s&&s._c&&(s._d=!0),o}function vf(t){return t.some(e=>hs(e)?!(e.type===gn||e.type===Ue&&!vf(e.children)):!0)?t:null}const io=t=>t?Nf(t)?tu(t)||t.proxy:io(t.parent):null,Gi=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>io(t.parent),$root:t=>io(t.root),$emit:t=>t.emit,$options:t=>Cf(t),$forceUpdate:t=>t.f||(t.f=()=>Zo(t.update)),$nextTick:t=>t.n||(t.n=cf.bind(t.proxy)),$watch:t=>N_.bind(t)}),Cu=(t,e)=>t!==fe&&!t.__isScriptSetup&&X(t,e),Q_={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:u,type:o,appContext:a}=t;let c;if(e[0]!=="$"){const h=u[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Cu(i,e))return u[e]=1,i[e];if(r!==fe&&X(r,e))return u[e]=2,r[e];if((c=t.propsOptions[0])&&X(c,e))return u[e]=3,s[e];if(n!==fe&&X(n,e))return u[e]=4,n[e];ro&&(u[e]=0)}}const l=Gi[e];let d,f;if(l)return e==="$attrs"&&je(t,"get",e),l(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==fe&&X(n,e))return u[e]=4,n[e];if(f=a.config.globalProperties,X(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Cu(r,e)?(r[e]=n,!0):i!==fe&&X(i,e)?(i[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},u){let o;return!!n[u]||t!==fe&&X(t,u)||Cu(e,u)||(o=s[0])&&X(o,u)||X(i,u)||X(Gi,u)||X(r.config.globalProperties,u)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kc(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ro=!0;function J_(t){const e=Cf(t),n=t.proxy,i=t.ctx;ro=!1,e.beforeCreate&&Ic(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:u,watch:o,provide:a,inject:c,created:l,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:y,deactivated:k,beforeDestroy:R,beforeUnmount:C,destroyed:w,unmounted:x,render:M,renderTracked:$,renderTriggered:K,errorCaptured:_e,serverPrefetch:be,expose:Ce,inheritAttrs:et,components:Nt,directives:tt,filters:Qt}=e;if(c&&Z_(c,i,null),u)for(const se in u){const ne=u[se];G(ne)&&(i[se]=ne.bind(n))}if(r){const se=r.call(n,n);pe(se)&&(t.data=Vs(se))}if(ro=!0,s)for(const se in s){const ne=s[se],Ft=G(ne)?ne.bind(n,n):G(ne.get)?ne.get.bind(n,n):It,Jt=!G(ne)&&G(ne.set)?ne.set.bind(n):It,bt=ut({get:Ft,set:Jt});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>bt.value,set:$e=>bt.value=$e})}if(o)for(const se in o)Ef(o[se],i,n,se);if(a){const se=G(a)?a.call(n):a;Reflect.ownKeys(se).forEach(ne=>{Zr(ne,se[ne])})}l&&Ic(l,t,"c");function ye(se,ne){W(ne)?ne.forEach(Ft=>se(Ft.bind(n))):ne&&se(ne.bind(n))}if(ye(U_,d),ye(Xo,f),ye(B_,h),ye($_,_),ye(O_,y),ye(M_,k),ye(j_,_e),ye(W_,$),ye(q_,K),ye(z_,C),ye(yf,x),ye(H_,be),W(Ce))if(Ce.length){const se=t.exposed||(t.exposed={});Ce.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:Ft=>n[ne]=Ft})})}else t.exposed||(t.exposed={});M&&t.render===It&&(t.render=M),et!=null&&(t.inheritAttrs=et),Nt&&(t.components=Nt),tt&&(t.directives=tt)}function Z_(t,e,n=It){W(t)&&(t=so(t));for(const i in t){const r=t[i];let s;pe(r)?"default"in r?s=zt(r.from||i,r.default,!0):s=zt(r.from||i):s=zt(r),Fe(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:u=>s.value=u}):e[i]=s}}function Ic(t,e,n){ht(W(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ef(t,e,n,i){const r=i.includes(".")?_f(n,i):()=>n[i];if(Ee(t)){const s=e[t];G(s)&&Jr(r,s)}else if(G(t))Jr(r,t.bind(n));else if(pe(t))if(W(t))t.forEach(s=>Ef(s,e,n,i));else{const s=G(t.handler)?t.handler.bind(n):e[t.handler];G(s)&&Jr(r,s,t)}}function Cf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:u}}=t.appContext,o=s.get(e);let a;return o?a=o:!r.length&&!n&&!i?a=e:(a={},r.length&&r.forEach(c=>ds(a,c,u,!0)),ds(a,e,u)),pe(e)&&s.set(e,a),a}function ds(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ds(t,s,n,!0),r&&r.forEach(u=>ds(t,u,n,!0));for(const u in e)if(!(i&&u==="expose")){const o=X_[u]||n&&n[u];t[u]=o?o(t[u],e[u]):e[u]}return t}const X_={data:Tc,props:Ac,emits:Ac,methods:Wi,computed:Wi,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Wi,directives:Wi,watch:t1,provide:Tc,inject:e1};function Tc(t,e){return e?t?function(){return Me(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function e1(t,e){return Wi(so(t),so(e))}function so(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function Wi(t,e){return t?Me(Object.create(null),t,e):e}function Ac(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Me(Object.create(null),kc(t),kc(e??{})):e}function t1(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const i in e)n[i]=Le(t[i],e[i]);return n}function xf(){return{app:null,config:{isNativeTag:Sp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n1=0;function i1(t,e){return function(i,r=null){G(i)||(i=Me({},i)),r!=null&&!pe(r)&&(r=null);const s=xf(),u=new Set;let o=!1;const a=s.app={_uid:n1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:S1,get config(){return s.config},set config(c){},use(c,...l){return u.has(c)||(c&&G(c.install)?(u.add(c),c.install(a,...l)):G(c)&&(u.add(c),c(a,...l))),a},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),a},component(c,l){return l?(s.components[c]=l,a):s.components[c]},directive(c,l){return l?(s.directives[c]=l,a):s.directives[c]},mount(c,l,d){if(!o){const f=V(i,r);return f.appContext=s,t(f,c,d),o=!0,a._container=c,c.__vue_app__=a,tu(f.component)||f.component.proxy}},unmount(){o&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,l){return s.provides[c]=l,a},runWithContext(c){fs=a;try{return c()}finally{fs=null}}};return a}}let fs=null;function Zr(t,e){if(De){let n=De.provides;const i=De.parent&&De.parent.provides;i===n&&(n=De.provides=Object.create(i)),n[t]=e}}function zt(t,e,n=!1){const i=De||Oe;if(i||fs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:fs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(i&&i.proxy):e}}function r1(t,e,n,i=!1){const r={},s={};as(s,eu,1),t.propsDefaults=Object.create(null),wf(t,e,r,s);for(const u in t.propsOptions[0])u in r||(r[u]=void 0);n?t.props=i?r:Xd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function s1(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:u}}=t,o=te(r),[a]=t.propsOptions;let c=!1;if((i||u>0)&&!(u&16)){if(u&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let f=l[d];if(Ks(t.emitsOptions,f))continue;const h=e[f];if(a)if(X(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const _=At(f);r[_]=uo(a,o,_,h,t,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{wf(t,e,r,s)&&(c=!0);let l;for(const d in o)(!e||!X(e,d)&&((l=ki(d))===d||!X(e,l)))&&(a?n&&(n[d]!==void 0||n[l]!==void 0)&&(r[d]=uo(a,o,d,void 0,t,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!X(e,d))&&(delete s[d],c=!0)}c&&qt(t,"set","$attrs")}function wf(t,e,n,i){const[r,s]=t.propsOptions;let u=!1,o;if(e)for(let a in e){if(Yr(a))continue;const c=e[a];let l;r&&X(r,l=At(a))?!s||!s.includes(l)?n[l]=c:(o||(o={}))[l]=c:Ks(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,u=!0)}if(s){const a=te(n),c=o||fe;for(let l=0;l<s.length;l++){const d=s[l];n[d]=uo(r,a,d,c[d],t,!X(c,d))}}return u}function uo(t,e,n,i,r,s){const u=t[n];if(u!=null){const o=X(u,"default");if(o&&i===void 0){const a=u.default;if(u.type!==Function&&!u.skipFactory&&G(a)){const{propsDefaults:c}=r;n in c?i=c[n]:(pi(r),i=c[n]=a.call(null,e),Mn())}else i=a}u[0]&&(s&&!o?i=!1:u[1]&&(i===""||i===ki(n))&&(i=!0))}return i}function kf(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,u={},o=[];let a=!1;if(!G(t)){const l=d=>{a=!0;const[f,h]=kf(d,e,!0);Me(u,f),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!a)return pe(t)&&i.set(t,ti),ti;if(W(s))for(let l=0;l<s.length;l++){const d=At(s[l]);Sc(d)&&(u[d]=fe)}else if(s)for(const l in s){const d=At(l);if(Sc(d)){const f=s[l],h=u[d]=W(f)||G(f)?{type:f}:Me({},f);if(h){const _=Pc(Boolean,h.type),y=Pc(String,h.type);h[0]=_>-1,h[1]=y<0||_<y,(_>-1||X(h,"default"))&&o.push(d)}}}const c=[u,o];return pe(t)&&i.set(t,c),c}function Sc(t){return t[0]!=="$"}function Dc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Rc(t,e){return Dc(t)===Dc(e)}function Pc(t,e){return W(e)?e.findIndex(n=>Rc(n,t)):G(e)&&Rc(e,t)?0:-1}const If=t=>t[0]==="_"||t==="$stable",ea=t=>W(t)?t.map(Ct):[Ct(t)],u1=(t,e,n)=>{if(e._n)return e;const i=Et((...r)=>ea(e(...r)),n);return i._c=!1,i},Tf=(t,e,n)=>{const i=t._ctx;for(const r in t){if(If(r))continue;const s=t[r];if(G(s))e[r]=u1(r,s,i);else if(s!=null){const u=ea(s);e[r]=()=>u}}},Af=(t,e)=>{const n=ea(e);t.slots.default=()=>n},o1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),as(e,"_",n)):Tf(e,t.slots={})}else t.slots={},e&&Af(t,e);as(t.slots,eu,1)},a1=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,u=fe;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(Me(r,e),!n&&o===1&&delete r._):(s=!e.$stable,Tf(e,r)),u=e}else e&&(Af(t,e),u={default:1});if(s)for(const o in r)!If(o)&&!(o in u)&&delete r[o]};function oo(t,e,n,i,r=!1){if(W(t)){t.forEach((f,h)=>oo(f,e&&(W(e)?e[h]:e),n,i,r));return}if(Vi(i)&&!r)return;const s=i.shapeFlag&4?tu(i.component)||i.component.proxy:i.el,u=r?null:s,{i:o,r:a}=t,c=e&&e.r,l=o.refs===fe?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==a&&(Ee(c)?(l[c]=null,X(d,c)&&(d[c]=null)):Fe(c)&&(c.value=null)),G(a))dn(a,o,12,[u,l]);else{const f=Ee(a),h=Fe(a);if(f||h){const _=()=>{if(t.f){const y=f?X(d,a)?d[a]:l[a]:a.value;r?W(y)&&$o(y,s):W(y)?y.includes(s)||y.push(s):f?(l[a]=[s],X(d,a)&&(d[a]=l[a])):(a.value=[s],t.k&&(l[t.k]=a.value))}else f?(l[a]=u,X(d,a)&&(d[a]=u)):h&&(a.value=u,t.k&&(l[t.k]=u))};u?(_.id=-1,ze(_,n)):_()}}}const ze=P_;function c1(t){return l1(t)}function l1(t,e){const n=Qu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:u,createText:o,createComment:a,setText:c,setElementText:l,parentNode:d,nextSibling:f,setScopeId:h=It,insertStaticContent:_}=t,y=(p,m,g,b=null,v=null,T=null,S=!1,D=null,P=!!m.dynamicChildren)=>{if(p===m)return;p&&!Li(p,m)&&(b=E(p),$e(p,v,T,!0),p=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:I,ref:U,shapeFlag:L}=m;switch(I){case Xs:k(p,m,g,b);break;case gn:R(p,m,g,b);break;case Xr:p==null&&C(m,g,b,S);break;case Ue:Nt(p,m,g,b,v,T,S,D,P);break;default:L&1?M(p,m,g,b,v,T,S,D,P):L&6?tt(p,m,g,b,v,T,S,D,P):(L&64||L&128)&&I.process(p,m,g,b,v,T,S,D,P,N)}U!=null&&v&&oo(U,p&&p.ref,T,m||p,!m)},k=(p,m,g,b)=>{if(p==null)i(m.el=o(m.children),g,b);else{const v=m.el=p.el;m.children!==p.children&&c(v,m.children)}},R=(p,m,g,b)=>{p==null?i(m.el=a(m.children||""),g,b):m.el=p.el},C=(p,m,g,b)=>{[p.el,p.anchor]=_(p.children,m,g,b,p.el,p.anchor)},w=({el:p,anchor:m},g,b)=>{let v;for(;p&&p!==m;)v=f(p),i(p,g,b),p=v;i(m,g,b)},x=({el:p,anchor:m})=>{let g;for(;p&&p!==m;)g=f(p),r(p),p=g;r(m)},M=(p,m,g,b,v,T,S,D,P)=>{S=S||m.type==="svg",p==null?$(m,g,b,v,T,S,D,P):be(p,m,v,T,S,D,P)},$=(p,m,g,b,v,T,S,D)=>{let P,I;const{type:U,props:L,shapeFlag:B,transition:j,dirs:Z}=p;if(P=p.el=u(p.type,T,L&&L.is,L),B&8?l(P,p.children):B&16&&_e(p.children,P,null,b,v,T&&U!=="foreignObject",S,D),Z&&xn(p,null,b,"created"),K(P,p,p.scopeId,S,b),L){for(const ue in L)ue!=="value"&&!Yr(ue)&&s(P,ue,null,L[ue],T,p.children,b,v,Re);"value"in L&&s(P,"value",null,L.value),(I=L.onVnodeBeforeMount)&&vt(I,b,p)}Z&&xn(p,null,b,"beforeMount");const ae=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;ae&&j.beforeEnter(P),i(P,m,g),((I=L&&L.onVnodeMounted)||ae||Z)&&ze(()=>{I&&vt(I,b,p),ae&&j.enter(P),Z&&xn(p,null,b,"mounted")},v)},K=(p,m,g,b,v)=>{if(g&&h(p,g),b)for(let T=0;T<b.length;T++)h(p,b[T]);if(v){let T=v.subTree;if(m===T){const S=v.vnode;K(p,S,S.scopeId,S.slotScopeIds,v.parent)}}},_e=(p,m,g,b,v,T,S,D,P=0)=>{for(let I=P;I<p.length;I++){const U=p[I]=D?tn(p[I]):Ct(p[I]);y(null,U,m,g,b,v,T,S,D)}},be=(p,m,g,b,v,T,S)=>{const D=m.el=p.el;let{patchFlag:P,dynamicChildren:I,dirs:U}=m;P|=p.patchFlag&16;const L=p.props||fe,B=m.props||fe;let j;g&&wn(g,!1),(j=B.onVnodeBeforeUpdate)&&vt(j,g,m,p),U&&xn(m,p,g,"beforeUpdate"),g&&wn(g,!0);const Z=v&&m.type!=="foreignObject";if(I?Ce(p.dynamicChildren,I,D,g,b,Z,T):S||ne(p,m,D,null,g,b,Z,T,!1),P>0){if(P&16)et(D,m,L,B,g,b,v);else if(P&2&&L.class!==B.class&&s(D,"class",null,B.class,v),P&4&&s(D,"style",L.style,B.style,v),P&8){const ae=m.dynamicProps;for(let ue=0;ue<ae.length;ue++){const Ae=ae[ue],it=L[Ae],Kn=B[Ae];(Kn!==it||Ae==="value")&&s(D,Ae,it,Kn,v,p.children,g,b,Re)}}P&1&&p.children!==m.children&&l(D,m.children)}else!S&&I==null&&et(D,m,L,B,g,b,v);((j=B.onVnodeUpdated)||U)&&ze(()=>{j&&vt(j,g,m,p),U&&xn(m,p,g,"updated")},b)},Ce=(p,m,g,b,v,T,S)=>{for(let D=0;D<m.length;D++){const P=p[D],I=m[D],U=P.el&&(P.type===Ue||!Li(P,I)||P.shapeFlag&70)?d(P.el):g;y(P,I,U,null,b,v,T,S,!0)}},et=(p,m,g,b,v,T,S)=>{if(g!==b){if(g!==fe)for(const D in g)!Yr(D)&&!(D in b)&&s(p,D,g[D],null,S,m.children,v,T,Re);for(const D in b){if(Yr(D))continue;const P=b[D],I=g[D];P!==I&&D!=="value"&&s(p,D,I,P,S,m.children,v,T,Re)}"value"in b&&s(p,"value",g.value,b.value)}},Nt=(p,m,g,b,v,T,S,D,P)=>{const I=m.el=p?p.el:o(""),U=m.anchor=p?p.anchor:o("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:j}=m;j&&(D=D?D.concat(j):j),p==null?(i(I,g,b),i(U,g,b),_e(m.children,g,U,v,T,S,D,P)):L>0&&L&64&&B&&p.dynamicChildren?(Ce(p.dynamicChildren,B,g,v,T,S,D),(m.key!=null||v&&m===v.subTree)&&Sf(p,m,!0)):ne(p,m,g,U,v,T,S,D,P)},tt=(p,m,g,b,v,T,S,D,P)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?v.ctx.activate(m,g,b,S,P):Qt(m,g,b,v,T,S,P):Ke(p,m,P)},Qt=(p,m,g,b,v,T,S)=>{const D=p.component=v1(p,b,v);if(gf(p)&&(D.ctx.renderer=N),E1(D),D.asyncDep){if(v&&v.registerDep(D,ye),!p.el){const P=D.subTree=V(gn);R(null,P,m,g)}return}ye(D,p,m,g,v,T,S)},Ke=(p,m,g)=>{const b=m.component=p.component;if(S_(p,m,g))if(b.asyncDep&&!b.asyncResolved){se(b,m,g);return}else b.next=m,x_(b.update),b.update();else m.el=p.el,b.vnode=m},ye=(p,m,g,b,v,T,S)=>{const D=()=>{if(p.isMounted){let{next:U,bu:L,u:B,parent:j,vnode:Z}=p,ae=U,ue;wn(p,!1),U?(U.el=Z.el,se(p,U,S)):U=Z,L&&Qr(L),(ue=U.props&&U.props.onVnodeBeforeUpdate)&&vt(ue,j,U,Z),wn(p,!0);const Ae=Cc(p),it=p.subTree;p.subTree=Ae,y(it,Ae,d(it.el),E(it),p,v,T),U.el=Ae.el,ae===null&&D_(p,Ae.el),B&&ze(B,v),(ue=U.props&&U.props.onVnodeUpdated)&&ze(()=>vt(ue,j,U,Z),v)}else{let U;const{el:L,props:B}=m,{bm:j,m:Z,parent:ae}=p,ue=Vi(m);wn(p,!1),j&&Qr(j),!ue&&(U=B&&B.onVnodeBeforeMount)&&vt(U,ae,m),wn(p,!0);{const Ae=p.subTree=Cc(p);y(null,Ae,g,b,p,v,T),m.el=Ae.el}if(Z&&ze(Z,v),!ue&&(U=B&&B.onVnodeMounted)){const Ae=m;ze(()=>vt(U,ae,Ae),v)}(m.shapeFlag&256||ae&&Vi(ae.vnode)&&ae.vnode.shapeFlag&256)&&p.a&&ze(p.a,v),p.isMounted=!0,m=g=b=null}},P=p.effect=new jo(D,()=>Zo(I),p.scope),I=p.update=()=>P.run();I.id=p.uid,wn(p,!0),I()},se=(p,m,g)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,s1(p,m.props,b,g),a1(p,m.children,g),Ii(),Ec(),Ti()},ne=(p,m,g,b,v,T,S,D,P=!1)=>{const I=p&&p.children,U=p?p.shapeFlag:0,L=m.children,{patchFlag:B,shapeFlag:j}=m;if(B>0){if(B&128){Jt(I,L,g,b,v,T,S,D,P);return}else if(B&256){Ft(I,L,g,b,v,T,S,D,P);return}}j&8?(U&16&&Re(I,v,T),L!==I&&l(g,L)):U&16?j&16?Jt(I,L,g,b,v,T,S,D,P):Re(I,v,T,!0):(U&8&&l(g,""),j&16&&_e(L,g,b,v,T,S,D,P))},Ft=(p,m,g,b,v,T,S,D,P)=>{p=p||ti,m=m||ti;const I=p.length,U=m.length,L=Math.min(I,U);let B;for(B=0;B<L;B++){const j=m[B]=P?tn(m[B]):Ct(m[B]);y(p[B],j,g,null,v,T,S,D,P)}I>U?Re(p,v,T,!0,!1,L):_e(m,g,b,v,T,S,D,P,L)},Jt=(p,m,g,b,v,T,S,D,P)=>{let I=0;const U=m.length;let L=p.length-1,B=U-1;for(;I<=L&&I<=B;){const j=p[I],Z=m[I]=P?tn(m[I]):Ct(m[I]);if(Li(j,Z))y(j,Z,g,null,v,T,S,D,P);else break;I++}for(;I<=L&&I<=B;){const j=p[L],Z=m[B]=P?tn(m[B]):Ct(m[B]);if(Li(j,Z))y(j,Z,g,null,v,T,S,D,P);else break;L--,B--}if(I>L){if(I<=B){const j=B+1,Z=j<U?m[j].el:b;for(;I<=B;)y(null,m[I]=P?tn(m[I]):Ct(m[I]),g,Z,v,T,S,D,P),I++}}else if(I>B)for(;I<=L;)$e(p[I],v,T,!0),I++;else{const j=I,Z=I,ae=new Map;for(I=Z;I<=B;I++){const Ye=m[I]=P?tn(m[I]):Ct(m[I]);Ye.key!=null&&ae.set(Ye.key,I)}let ue,Ae=0;const it=B-Z+1;let Kn=!1,lc=0;const Mi=new Array(it);for(I=0;I<it;I++)Mi[I]=0;for(I=j;I<=L;I++){const Ye=p[I];if(Ae>=it){$e(Ye,v,T,!0);continue}let yt;if(Ye.key!=null)yt=ae.get(Ye.key);else for(ue=Z;ue<=B;ue++)if(Mi[ue-Z]===0&&Li(Ye,m[ue])){yt=ue;break}yt===void 0?$e(Ye,v,T,!0):(Mi[yt-Z]=I+1,yt>=lc?lc=yt:Kn=!0,y(Ye,m[yt],g,null,v,T,S,D,P),Ae++)}const dc=Kn?d1(Mi):ti;for(ue=dc.length-1,I=it-1;I>=0;I--){const Ye=Z+I,yt=m[Ye],fc=Ye+1<U?m[Ye+1].el:b;Mi[I]===0?y(null,yt,g,fc,v,T,S,D,P):Kn&&(ue<0||I!==dc[ue]?bt(yt,g,fc,2):ue--)}}},bt=(p,m,g,b,v=null)=>{const{el:T,type:S,transition:D,children:P,shapeFlag:I}=p;if(I&6){bt(p.component.subTree,m,g,b);return}if(I&128){p.suspense.move(m,g,b);return}if(I&64){S.move(p,m,g,N);return}if(S===Ue){i(T,m,g);for(let L=0;L<P.length;L++)bt(P[L],m,g,b);i(p.anchor,m,g);return}if(S===Xr){w(p,m,g);return}if(b!==2&&I&1&&D)if(b===0)D.beforeEnter(T),i(T,m,g),ze(()=>D.enter(T),v);else{const{leave:L,delayLeave:B,afterLeave:j}=D,Z=()=>i(T,m,g),ae=()=>{L(T,()=>{Z(),j&&j()})};B?B(T,Z,ae):ae()}else i(T,m,g)},$e=(p,m,g,b=!1,v=!1)=>{const{type:T,props:S,ref:D,children:P,dynamicChildren:I,shapeFlag:U,patchFlag:L,dirs:B}=p;if(D!=null&&oo(D,null,g,p,!0),U&256){m.ctx.deactivate(p);return}const j=U&1&&B,Z=!Vi(p);let ae;if(Z&&(ae=S&&S.onVnodeBeforeUnmount)&&vt(ae,m,p),U&6)Lr(p.component,g,b);else{if(U&128){p.suspense.unmount(g,b);return}j&&xn(p,null,m,"beforeUnmount"),U&64?p.type.remove(p,m,g,v,N,b):I&&(T!==Ue||L>0&&L&64)?Re(I,m,g,!1,!0):(T===Ue&&L&384||!v&&U&16)&&Re(P,m,g),b&&Vn(p)}(Z&&(ae=S&&S.onVnodeUnmounted)||j)&&ze(()=>{ae&&vt(ae,m,p),j&&xn(p,null,m,"unmounted")},g)},Vn=p=>{const{type:m,el:g,anchor:b,transition:v}=p;if(m===Ue){Gn(g,b);return}if(m===Xr){x(p);return}const T=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(p.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:D}=v,P=()=>S(g,T);D?D(p.el,T,P):P()}else T()},Gn=(p,m)=>{let g;for(;p!==m;)g=f(p),r(p),p=g;r(m)},Lr=(p,m,g)=>{const{bum:b,scope:v,update:T,subTree:S,um:D}=p;b&&Qr(b),v.stop(),T&&(T.active=!1,$e(S,p,m,g)),D&&ze(D,m),ze(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Re=(p,m,g,b=!1,v=!1,T=0)=>{for(let S=T;S<p.length;S++)$e(p[S],m,g,b,v)},E=p=>p.shapeFlag&6?E(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),F=(p,m,g)=>{p==null?m._vnode&&$e(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,g),Ec(),df(),m._vnode=p},N={p:y,um:$e,m:bt,r:Vn,mt:Qt,mc:_e,pc:ne,pbc:Ce,n:E,o:t};return{render:F,hydrate:void 0,createApp:i1(F)}}function wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sf(t,e,n=!1){const i=t.children,r=e.children;if(W(i)&&W(r))for(let s=0;s<i.length;s++){const u=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=tn(r[s]),o.el=u.el),n||Sf(u,o)),o.type===Xs&&(o.el=u.el)}}function d1(t){const e=t.slice(),n=[0];let i,r,s,u,o;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,u=n.length-1;s<u;)o=s+u>>1,t[n[o]]<c?s=o+1:u=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,u=n[s-1];s-- >0;)n[s]=u,u=e[u];return n}const f1=t=>t.__isTeleport,Ue=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),Xr=Symbol.for("v-stc"),Ki=[];let ct=null;function he(t=!1){Ki.push(ct=t?null:[])}function h1(){Ki.pop(),ct=Ki[Ki.length-1]||null}let or=1;function Nc(t){or+=t}function Df(t){return t.dynamicChildren=or>0?ct||ti:null,h1(),or>0&&ct&&ct.push(t),t}function me(t,e,n,i,r,s){return Df(O(t,e,n,i,r,s,!0))}function Rf(t,e,n,i,r){return Df(V(t,e,n,i,r,!0))}function hs(t){return t?t.__v_isVNode===!0:!1}function Li(t,e){return t.type===e.type&&t.key===e.key}const eu="__vInternal",Pf=({key:t})=>t??null,es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ee(t)||Fe(t)||G(t)?{i:Oe,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,i=0,r=null,s=t===Ue?0:1,u=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pf(e),ref:e&&es(e),scopeId:Ys,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Oe};return o?(ta(a,n),s&128&&t.normalize(a)):n&&(a.shapeFlag|=Ee(n)?8:16),or>0&&!u&&ct&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&ct.push(a),a}const V=p1;function p1(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===G_)&&(t=gn),hs(t)){const o=hi(t,e,!0);return n&&ta(o,n),or>0&&!s&&ct&&(o.shapeFlag&6?ct[ct.indexOf(t)]=o:ct.push(o)),o.patchFlag|=-2,o}if(I1(t)&&(t=t.__vccOpts),e){e=_1(e);let{class:o,style:a}=e;o&&!Ee(o)&&(e.class=qo(o)),pe(a)&&(tf(a)&&!W(a)&&(a=Me({},a)),e.style=Ws(a))}const u=Ee(t)?1:R_(t)?128:f1(t)?64:pe(t)?4:G(t)?2:0;return O(t,e,n,i,r,u,s,!0)}function _1(t){return t?tf(t)||eu in t?Me({},t):t:null}function hi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:u}=t,o=e?g1(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Pf(o),ref:e&&e.ref?n&&r?W(r)?r.concat(es(e)):[r,es(e)]:es(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hi(t.ssContent),ssFallback:t.ssFallback&&hi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Je(t=" ",e=0){return V(Xs,null,t,e)}function m1(t,e){const n=V(Xr,null,t);return n.staticCount=e,n}function ts(t="",e=!1){return e?(he(),Rf(gn,null,t)):V(gn,null,t)}function Ct(t){return t==null||typeof t=="boolean"?V(gn):W(t)?V(Ue,null,t.slice()):typeof t=="object"?tn(t):V(Xs,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hi(t)}function ta(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ta(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(eu in e)?e._ctx=Oe:r===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),i&64?(n=16,e=[Je(e)]):n=8);t.children=e,t.shapeFlag|=n}function g1(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=qo([e.class,i.class]));else if(r==="style")e.style=Ws([e.style,i.style]);else if($s(r)){const s=e[r],u=i[r];u&&s!==u&&!(W(s)&&s.includes(u))&&(e[r]=s?[].concat(s,u):u)}else r!==""&&(e[r]=i[r])}return e}function vt(t,e,n,i=null){ht(t,e,7,[n,i])}const b1=xf();let y1=0;function v1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||b1,s={uid:y1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(i,r),emitsOptions:hf(i,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=I_.bind(null,s),t.ce&&t.ce(s),s}let De=null,na,Yn,Fc="__VUE_INSTANCE_SETTERS__";(Yn=Qu()[Fc])||(Yn=Qu()[Fc]=[]),Yn.push(t=>De=t),na=t=>{Yn.length>1?Yn.forEach(e=>e(t)):Yn[0](t)};const pi=t=>{na(t),t.scope.on()},Mn=()=>{De&&De.scope.off(),na(null)};function Nf(t){return t.vnode.shapeFlag&4}let ar=!1;function E1(t,e=!1){ar=e;const{props:n,children:i}=t.vnode,r=Nf(t);r1(t,n,r,e),o1(t,i);const s=r?C1(t,e):void 0;return ar=!1,s}function C1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nf(new Proxy(t.ctx,Q_));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?w1(t):null;pi(t),Ii();const s=dn(i,t,0,[t.props,r]);if(Ti(),Mn(),Ud(s)){if(s.then(Mn,Mn),e)return s.then(u=>{Oc(t,u)}).catch(u=>{Gs(u,t,0)});t.asyncDep=s}else Oc(t,s)}else Ff(t)}function Oc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=of(e)),Ff(t)}function Ff(t,e,n){const i=t.type;t.render||(t.render=i.render||It),pi(t),Ii(),J_(t),Ti(),Mn()}function x1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return je(t,"get","$attrs"),e[n]}}))}function w1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return x1(t)},slots:t.slots,emit:t.emit,expose:e}}function tu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(of(nf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gi)return Gi[n](t)},has(e,n){return n in e||n in Gi}}))}function k1(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function I1(t){return G(t)&&"__vccOpts"in t}const ut=(t,e)=>v_(t,e,ar);function Of(t,e,n){const i=arguments.length;return i===2?pe(e)&&!W(e)?hs(e)?V(t,null,[e]):V(t,e):V(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&hs(n)&&(n=[n]),V(t,e,n))}const T1=Symbol.for("v-scx"),A1=()=>zt(T1),S1="3.3.4",D1="http://www.w3.org/2000/svg",An=typeof document<"u"?document:null,Mc=An&&An.createElement("template"),R1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?An.createElementNS(D1,t):An.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const u=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Mc.innerHTML=i?`<svg>${t}</svg>`:t;const o=Mc.content;if(i){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}e.insertBefore(o,n)}return[u?u.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function P1(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function N1(t,e,n){const i=t.style,r=Ee(n);if(n&&!r){if(e&&!Ee(e))for(const s in e)n[s]==null&&ao(i,s,"");for(const s in n)ao(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Lc=/\s*!important$/;function ao(t,e,n){if(W(n))n.forEach(i=>ao(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=F1(t,e);Lc.test(n)?t.setProperty(ki(i),n.replace(Lc,""),"important"):t[i]=n}}const Uc=["Webkit","Moz","ms"],xu={};function F1(t,e){const n=xu[e];if(n)return n;let i=At(e);if(i!=="filter"&&i in t)return xu[e]=i;i=qs(i);for(let r=0;r<Uc.length;r++){const s=Uc[r]+i;if(s in t)return xu[e]=s}return e}const Bc="http://www.w3.org/1999/xlink";function O1(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bc,e.slice(6,e.length)):t.setAttributeNS(Bc,e,n);else{const s=$p(e);n==null||s&&!zd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function M1(t,e,n,i,r,s,u){if(e==="innerHTML"||e==="textContent"){i&&u(i,r,s),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const c=o==="OPTION"?t.getAttribute("value"):t.value,l=n??"";c!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=zd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Zn(t,e,n,i){t.addEventListener(e,n,i)}function L1(t,e,n,i){t.removeEventListener(e,n,i)}function U1(t,e,n,i,r=null){const s=t._vei||(t._vei={}),u=s[e];if(i&&u)u.value=i;else{const[o,a]=B1(e);if(i){const c=s[e]=H1(i,r);Zn(t,o,c,a)}else u&&(L1(t,o,u,a),s[e]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function B1(t){let e;if($c.test(t)){e={};let i;for(;i=t.match($c);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ki(t.slice(2)),e]}let wu=0;const $1=Promise.resolve(),z1=()=>wu||($1.then(()=>wu=0),wu=Date.now());function H1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ht(q1(i,n.value),e,5,[i])};return n.value=t,n.attached=z1(),n}function q1(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const zc=/^on[a-z]/,W1=(t,e,n,i,r=!1,s,u,o,a)=>{e==="class"?P1(t,i,r):e==="style"?N1(t,n,i):$s(e)?Bo(e)||U1(t,e,n,i,u):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):j1(t,e,i,r))?M1(t,e,i,s,u,o,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),O1(t,e,i,r))};function j1(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&zc.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zc.test(e)&&Ee(n)?!1:e in t}const Hc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Qr(e,n):e};function V1(t){t.target.composing=!0}function qc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const G1={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=Hc(r);const s=i||r.props&&r.props.type==="number";Zn(t,e?"change":"input",u=>{if(u.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=Yu(o)),t._assign(o)}),n&&Zn(t,"change",()=>{t.value=t.value.trim()}),e||(Zn(t,"compositionstart",V1),Zn(t,"compositionend",qc),Zn(t,"change",qc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=Hc(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&Yu(t.value)===e))return;const u=e??"";t.value!==u&&(t.value=u)}},K1=["ctrl","shift","alt","meta"],Y1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>K1.some(n=>t[`${n}Key`]&&!e.includes(n))},Q1=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=Y1[e[r]];if(s&&s(n,e))return}return t(n,...i)},J1=Me({patchProp:W1},R1);let Wc;function Z1(){return Wc||(Wc=c1(J1))}const X1=(...t)=>{const e=Z1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=em(i);if(!r)return;const s=e._component;!G(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const u=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),u},e};function em(t){return Ee(t)?document.querySelector(t):t}const tm="/young/assets/logo-Dln01LZm.jfif",Dt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},nm=t=>(Qs("data-v-02d15251"),t=t(),Js(),t),im={class:"greetings"},rm={class:"green"},sm=nm(()=>O("h3",null,[Je(" Платформа для поддержки творческих инициатив детей и молодежи в городе Липецк"),O("br")],-1)),um={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(he(),me("div",im,[O("h1",rm,Nn(t.msg),1),sm]))}},om=Dt(um,[["__scopeId","data-v-02d15251"]]),am=t=>(Qs("data-v-66871be8"),t=t(),Js(),t),cm={class:"footer"},lm={class:"footer-content"},dm=am(()=>O("div",{class:"footer-links"},[O("a",{href:"#"},"Условия использования"),Je(" | "),O("a",{href:"#"},"Политика конфиденциальности"),Je(" | "),O("a",{href:"#"},"Контакты")],-1)),fm={__name:"TheFooter",setup(t){const e=new Date().getFullYear();return(n,i)=>(he(),me("footer",cm,[O("div",lm,[O("p",null,"© "+Nn(On(e))+" Моё приложение. Все права защищены.",1),dm])]))}},hm=Dt(fm,[["__scopeId","data-v-66871be8"]]),pm=()=>{};var jc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw Ai(e)},Ai=function(t){return new Error("Firebase Database ("+Mf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_m=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],u=t[n++],o=t[n++],a=((r&7)<<18|(s&63)<<12|(u&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],u=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|u&63)}}return e.join("")},ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],u=r+1<t.length,o=u?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=s>>2,d=(s&3)<<4|o>>4;let f=(o&15)<<2|c>>6,h=c&63;a||(h=64,u||(f=64)),i.push(n[l],n[d],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_m(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||o==null||c==null||d==null)throw new mm;const f=s<<2|o>>4;if(i.push(f),c!==64){const h=o<<4&240|c>>2;if(i.push(h),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(t){const e=Lf(t);return ia.encodeByteArray(e,!0)},ps=function(t){return Uf(t).replace(/\./g,"")},_s=function(t){try{return ia.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){return Bf(void 0,t)}function Bf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bm(n)||(t[n]=Bf(t[n],e[n]));return t}function bm(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=()=>ym().__FIREBASE_DEFAULTS__,Em=()=>{if(typeof process>"u"||typeof jc>"u")return;const t=jc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_s(t[1]);return e&&JSON.parse(e)},ra=()=>{try{return pm()||vm()||Em()||Cm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$f=t=>{var e,n;return(n=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xm=t=>{const e=$f(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},zf=()=>{var t;return(t=ra())===null||t===void 0?void 0:t.config},Hf=t=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ps(JSON.stringify(n)),ps(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function km(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Im(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tm(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Am(){return Mf.NODE_ADMIN===!0}function Sm(){try{return typeof indexedDB=="object"}catch{return!1}}function Dm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="FirebaseError";class En extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Rm,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],u=s?Pm(s,i):"Error",o=`${this.serviceName}: ${u} (${r}).`;return new En(r,o,i)}}function Pm(t,e){return t.replace(Nm,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Nm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=cr(_s(s[0])||""),n=cr(_s(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Fm=function(t){const e=Wf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Om=function(t){const e=Wf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function co(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Un(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],u=e[r];if(Vc(s)&&Vc(u)){if(!Un(s,u))return!1}else if(s!==u)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],u=this.chain_[2],o=this.chain_[3],a=this.chain_[4],c,l;for(let d=0;d<80;d++){d<40?d<20?(c=o^s&(u^o),l=1518500249):(c=s^u^o,l=1859775393):d<60?(c=s&u|o&(s|u),l=2400959708):(c=s^u^o,l=3395469782);const f=(r<<5|r>>>27)+c+a+l+i[d]&4294967295;a=o,o=u,u=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let u=this.inbuf_;for(;r<n;){if(u===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[u]=e.charCodeAt(r),++u,++r,u===this.blockSize){this.compress_(s),u=0;break}}else for(;r<n;)if(s[u]=e[r],++u,++r,u===this.blockSize){this.compress_(s),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Lm(t,e){const n=new Um(t,e);return n.subscribe.bind(n)}class Um{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Bm(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=ku),r.error===void 0&&(r.error=ku),r.complete===void 0&&(r.complete=ku);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ku(){}function ua(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,A(i<t.length,"Surrogate pair missing trail surrogate.");const u=t.charCodeAt(i)-56320;r=65536+(s<<10)+u}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},iu=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new nu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qm(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,u]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&u.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const u=this.instances.get(r);return u&&e(u,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Hm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hm(t){return t===kn?void 0:t}function qm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const jm={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Vm=re.INFO,Gm={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Km=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Gm[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=Vm,this._logHandler=Km,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Ym=(t,e)=>e.some(n=>t instanceof n);let Gc,Kc;function Qm(){return Gc||(Gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jm(){return Kc||(Kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jf=new WeakMap,lo=new WeakMap,Vf=new WeakMap,Iu=new WeakMap,aa=new WeakMap;function Zm(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",u)},s=()=>{n(fn(t.result)),r()},u=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&jf.set(n,t)}).catch(()=>{}),aa.set(e,t),e}function Xm(t){if(lo.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",u),t.removeEventListener("abort",u)},s=()=>{n(),r()},u=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",u),t.addEventListener("abort",u)});lo.set(t,e)}let fo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eg(t){fo=t(fo)}function tg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Tu(this),e,...n);return Vf.set(i,e.sort?e.sort():[e]),fn(i)}:Jm().includes(t)?function(...e){return t.apply(Tu(this),e),fn(jf.get(this))}:function(...e){return fn(t.apply(Tu(this),e))}}function ng(t){return typeof t=="function"?tg(t):(t instanceof IDBTransaction&&Xm(t),Ym(t,Qm())?new Proxy(t,fo):t)}function fn(t){if(t instanceof IDBRequest)return Zm(t);if(Iu.has(t))return Iu.get(t);const e=ng(t);return e!==t&&(Iu.set(t,e),aa.set(e,t)),e}const Tu=t=>aa.get(t);function ig(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const u=indexedDB.open(t,e),o=fn(u);return i&&u.addEventListener("upgradeneeded",a=>{i(fn(u.result),a.oldVersion,a.newVersion,fn(u.transaction),a)}),n&&u.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),o.then(a=>{s&&a.addEventListener("close",()=>s()),r&&a.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const rg=["get","getKey","getAll","getAllKeys","count"],sg=["put","add","delete","clear"],Au=new Map;function Yc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Au.get(e))return Au.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=sg.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||rg.includes(n)))return;const s=async function(u,...o){const a=this.transaction(u,r?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),r&&a.done]))[0]};return Au.set(e,s),s}eg(t=>({...t,get:(e,n,i)=>Yc(e,n)||t.get(e,n,i),has:(e,n)=>!!Yc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(og(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function og(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ho="@firebase/app",Qc="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new oa("@firebase/app"),ag="@firebase/app-compat",cg="@firebase/analytics-compat",lg="@firebase/analytics",dg="@firebase/app-check-compat",fg="@firebase/app-check",hg="@firebase/auth",pg="@firebase/auth-compat",_g="@firebase/database",mg="@firebase/data-connect",gg="@firebase/database-compat",bg="@firebase/functions",yg="@firebase/functions-compat",vg="@firebase/installations",Eg="@firebase/installations-compat",Cg="@firebase/messaging",xg="@firebase/messaging-compat",wg="@firebase/performance",kg="@firebase/performance-compat",Ig="@firebase/remote-config",Tg="@firebase/remote-config-compat",Ag="@firebase/storage",Sg="@firebase/storage-compat",Dg="@firebase/firestore",Rg="@firebase/vertexai",Pg="@firebase/firestore-compat",Ng="firebase",Fg="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="[DEFAULT]",Og={[ho]:"fire-core",[ag]:"fire-core-compat",[lg]:"fire-analytics",[cg]:"fire-analytics-compat",[fg]:"fire-app-check",[dg]:"fire-app-check-compat",[hg]:"fire-auth",[pg]:"fire-auth-compat",[_g]:"fire-rtdb",[mg]:"fire-data-connect",[gg]:"fire-rtdb-compat",[bg]:"fire-fn",[yg]:"fire-fn-compat",[vg]:"fire-iid",[Eg]:"fire-iid-compat",[Cg]:"fire-fcm",[xg]:"fire-fcm-compat",[wg]:"fire-perf",[kg]:"fire-perf-compat",[Ig]:"fire-rc",[Tg]:"fire-rc-compat",[Ag]:"fire-gcs",[Sg]:"fire-gcs-compat",[Dg]:"fire-fst",[Pg]:"fire-fst-compat",[Rg]:"fire-vertex","fire-js":"fire-js",[Ng]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Map,Mg=new Map,_o=new Map;function Jc(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(_o.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,t);for(const n of gs.values())Jc(n,t);for(const n of Mg.values())Jc(n,t);return!0}function ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new kr("app","Firebase",Lg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=Fg;function Gf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:po,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw hn.create("bad-app-name",{appName:String(r)});if(n||(n=zf()),!n)throw hn.create("no-options");const s=gs.get(r);if(s){if(Un(n,s.options)&&Un(i,s.config))return s;throw hn.create("duplicate-app",{appName:r})}const u=new Wm(r);for(const a of _o.values())u.addComponent(a);const o=new Ug(n,i,u);return gs.set(r,o),o}function Kf(t=po){const e=gs.get(t);if(!e&&t===po&&zf())return Gf();if(!e)throw hn.create("no-app",{appName:t});return e}function pn(t,e,n){var i;let r=(i=Og[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),u=e.match(/\s|\//);if(s||u){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&u&&o.push("and"),u&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(o.join(" "));return}mi(new Bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="firebase-heartbeat-database",$g=1,lr="firebase-heartbeat-store";let Su=null;function Yf(){return Su||(Su=ig(Bg,$g,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lr)}catch(n){console.warn(n)}}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),Su}async function zg(t){try{const n=(await Yf()).transaction(lr),i=await n.objectStore(lr).get(Qf(t));return await n.done,i}catch(e){if(e instanceof En)Wt.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function Zc(t,e){try{const i=(await Yf()).transaction(lr,"readwrite");await i.objectStore(lr).put(e,Qf(t)),await i.done}catch(n){if(n instanceof En)Wt.warn(n.message);else{const i=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(i.message)}}}function Qf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=1024,qg=30;class Wg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(u=>u.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>qg){const u=Gg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Wt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xc(),{heartbeatsToSend:i,unsentEntries:r}=jg(this._heartbeatsCache.heartbeats),s=ps(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Wt.warn(n),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function jg(t,e=Hg){const n=[];let i=t.slice();for(const r of t){const s=n.find(u=>u.agent===r.agent);if(s){if(s.dates.push(r.date),el(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),el(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Vg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sm()?Dm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function el(t){return ps(JSON.stringify({version:2,heartbeats:t})).length}function Gg(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){mi(new Bn("platform-logger",e=>new ug(e),"PRIVATE")),mi(new Bn("heartbeat",e=>new Wg(e),"PRIVATE")),pn(ho,Qc,t),pn(ho,Qc,"esm2017"),pn("fire-js","")}Kg("");var Yg="firebase",Qg="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(Yg,Qg,"app");function la(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Jf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jg=Jf,Zf=new kr("auth","Firebase",Jf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new oa("@firebase/auth");function Zg(t,...e){bs.logLevel<=re.WARN&&bs.warn(`Auth (${Di}): ${t}`,...e)}function ns(t,...e){bs.logLevel<=re.ERROR&&bs.error(`Auth (${Di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,...e){throw fa(t,...e)}function pt(t,...e){return fa(t,...e)}function da(t,e,n){const i=Object.assign(Object.assign({},Jg()),{[e]:n});return new kr("auth","Firebase",i).create(e,{appName:t.name})}function Ln(t){return da(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xg(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&St(t,"argument-error"),da(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fa(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Zf.create(t,...e)}function q(t,e,...n){if(!t)throw fa(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ns(e),new Error(e)}function jt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eb(){return tl()==="http:"||tl()==="https:"}function tl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eb()||Im()||"connection"in navigator)?navigator.onLine:!0}function nb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=sa()||qf()}get(){return tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sb=new Ir(3e4,6e4);function pa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ri(t,e,n,i,r={}){return eh(t,r,async()=>{let s={},u={};i&&(e==="GET"?u=i:s={body:JSON.stringify(i)});const o=Si(Object.assign({key:t.config.apiKey},u)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},s);return km()||(c.referrerPolicy="no-referrer"),Xf.fetch()(await th(t,t.config.apiHost,n,o),c)})}async function eh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ib),e);try{const r=new ob(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const u=await s.json();if("needConfirmation"in u)throw Wr(t,"account-exists-with-different-credential",u);if(s.ok&&!("errorMessage"in u))return u;{const o=s.ok?u.errorMessage:u.error.message,[a,c]=o.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wr(t,"credential-already-in-use",u);if(a==="EMAIL_EXISTS")throw Wr(t,"email-already-in-use",u);if(a==="USER_DISABLED")throw Wr(t,"user-disabled",u);const l=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw da(t,l,c);St(t,l)}}catch(r){if(r instanceof En)throw r;St(t,"network-request-failed",{message:String(r)})}}async function ub(t,e,n,i,r={}){const s=await Ri(t,e,n,i,r);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function th(t,e,n,i){const r=`${e}${n}?${i}`,s=t,u=s.config.emulator?ha(t.config,r):`${t.config.apiScheme}://${r}`;return rb.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(u).toString():u}class ob{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(pt(this.auth,"network-request-failed")),sb.get())})}}function Wr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=pt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function ys(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cb(t,e=!1){const n=Xe(t),i=await n.getIdToken(e),r=_a(i);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,u=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Yi(Du(r.auth_time)),issuedAtTime:Yi(Du(r.iat)),expirationTime:Yi(Du(r.exp)),signInProvider:u||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Du(t){return Number(t)*1e3}function _a(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{const r=_s(n);return r?JSON.parse(r):(ns("Failed to decode base64 JWT payload"),null)}catch(r){return ns("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function nl(t){const e=_a(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof En&&lb(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function lb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t){var e;const n=t.auth,i=await t.getIdToken(),r=await dr(t,ys(n,{idToken:i}));q(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const u=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nh(s.providerUserInfo):[],o=hb(t.providerData,u),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new go(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function fb(t){const e=Xe(t);await vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hb(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function nh(t){return t.map(e=>{var{providerId:n}=e,i=la(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e){const n=await eh(t,{},async()=>{const i=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,u=await th(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Xf.fetch()(u,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _b(t,e){return Ri(t,"POST","/v2/accounts:revokeToken",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=nl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await pb(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,u=new si;return i&&(q(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),r&&(q(typeof r=="string","internal-error",{appName:e}),u.accessToken=r),s&&(q(typeof s=="number","internal-error",{appName:e}),u.expirationTime=s),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lt{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new db(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new go(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cb(this,e)}reload(){return fb(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await vs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await dr(this,ab(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,u,o,a,c,l;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(u=n.photoURL)!==null&&u!==void 0?u:void 0,y=(o=n.tenantId)!==null&&o!==void 0?o:void 0,k=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:w,emailVerified:x,isAnonymous:M,providerData:$,stsTokenManager:K}=n;q(w&&K,e,"internal-error");const _e=si.fromJSON(this.name,K);q(typeof w=="string",e,"internal-error"),Xt(d,e.name),Xt(f,e.name),q(typeof x=="boolean",e,"internal-error"),q(typeof M=="boolean",e,"internal-error"),Xt(h,e.name),Xt(_,e.name),Xt(y,e.name),Xt(k,e.name),Xt(R,e.name),Xt(C,e.name);const be=new lt({uid:w,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:M,photoURL:_,phoneNumber:h,tenantId:y,stsTokenManager:_e,createdAt:R,lastLoginAt:C});return $&&Array.isArray($)&&(be.providerData=$.map(Ce=>Object.assign({},Ce))),k&&(be._redirectEventId=k),be}static async _fromIdTokenResponse(e,n,i=!1){const r=new si;r.updateFromServerResponse(n);const s=new lt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await vs(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];q(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?nh(r.providerUserInfo):[],u=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),o=new si;o.updateFromIdToken(i);const a=new lt({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:u}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new go(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Map;function Bt(t){jt(t instanceof Function,"Expected a class definition");let e=il.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,il.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ih.type="NONE";const rl=ih;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=is(this.userKey,r.apiKey,s),this.fullPersistenceKey=is("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ys(this.auth,{idToken:e}).catch(()=>{});return n?lt._fromGetAccountInfoResponse(this.auth,n,e):null}return lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ui(Bt(rl),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Bt(rl);const u=is(i,e.config.apiKey,e.name);let o=null;for(const c of n)try{const l=await c._get(u);if(l){let d;if(typeof l=="string"){const f=await ys(e,{idToken:l}).catch(()=>{});if(!f)break;d=await lt._fromGetAccountInfoResponse(e,f,l)}else d=lt._fromJSON(e,l);c!==s&&(o=d),s=c;break}}catch{}const a=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ui(s,e,i):(s=a[0],o&&await s._set(u,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(u)}catch{}})),new ui(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ch(e))return"Blackberry";if(lh(e))return"Webos";if(sh(e))return"Safari";if((e.includes("chrome/")||uh(e))&&!e.includes("edge/"))return"Chrome";if(ah(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function rh(t=Be()){return/firefox\//i.test(t)}function sh(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uh(t=Be()){return/crios\//i.test(t)}function oh(t=Be()){return/iemobile/i.test(t)}function ah(t=Be()){return/android/i.test(t)}function ch(t=Be()){return/blackberry/i.test(t)}function lh(t=Be()){return/webos/i.test(t)}function ma(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mb(t=Be()){var e;return ma(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gb(){return Tm()&&document.documentMode===10}function dh(t=Be()){return ma(t)||ah(t)||lh(t)||ch(t)||/windows phone/i.test(t)||oh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e=[]){let n;switch(t){case"Browser":n=sl(Be());break;case"Worker":n=`${sl(Be())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((u,o)=>{try{const a=e(s);u(a)}catch(a){o(a)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e={}){return Ri(t,"GET","/v2/passwordPolicy",pa(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=6;class Eb{constructor(e){var n,i,r,s;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:vb,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,u,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(u=a.containsNumericCharacter)!==null&&u!==void 0?u:!0),a.isValid&&(a.isValid=(o=a.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),a}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ul(this),this.idTokenSubscription=new ul(this),this.beforeStateQueue=new bb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ys(this,{idToken:e}),i=await lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ot(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(o,o))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!u||u===o)&&(a!=null&&a.user)&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(Ln(this));const n=e?Xe(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yb(this),n=new Eb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await _b(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let u=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(o,this,"internal-error"),o.then(()=>{u||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,i,r);return()=>{u=!0,a()}}else{const a=e.addObserver(n);return()=>{u=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Zg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ru(t){return Xe(t)}class ul{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lm(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xb(t){ga=t}function wb(t){return ga.loadJS(t)}function kb(){return ga.gapiScript}function Ib(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t,e){const n=ca(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Un(s,e??{}))return r;St(r,"already-initialized")}return n.initialize({options:e})}function Ab(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Sb(t,e,n){const i=ru(t);q(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=hh(e),{host:u,port:o}=Db(e),a=o===null?"":`:${o}`,c={url:`${s}//${u}${a}/`},l=Object.freeze({host:u,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){q(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),q(Un(c,i.config.emulator)&&Un(l,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=l,i.settings.appVerificationDisabledForTesting=!0,Rb()}function hh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Db(t){const e=hh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ol(i.substr(s.length+1))}}else{const[s,u]=i.split(":");return{host:s,port:ol(u)}}}function ol(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return ub(t,"POST","/v1/accounts:signInWithIdp",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="http://localhost";class $n extends ph{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=la(n,["providerId","signInMethod"]);if(!i||!r)return null;const u=new $n(i,r);return u.idToken=s.idToken||void 0,u.accessToken=s.accessToken||void 0,u.secret=s.secret,u.nonce=s.nonce,u.pendingToken=s.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,oi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:Pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ba{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Tr{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Lt.credential(n,i)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Tr{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Tr{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return on.credential(n,i)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await lt._fromIdTokenResponse(e,i,r),u=al(i);return new gi({user:s,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=al(i);return new gi({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function al(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends En{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Es.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Es(e,n,i,r)}}function _h(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Es._fromErrorAndOperation(t,s,e,i):s})}async function Nb(t,e,n=!1){const i=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e,n=!1){const{auth:i}=t;if(ot(i.app))return Promise.reject(Ln(i));const r="reauthenticate";try{const s=await dr(t,_h(i,r,e,t),n);q(s.idToken,i,"internal-error");const u=_a(s.idToken);q(u,i,"internal-error");const{sub:o}=u;return q(t.uid===o,i,"user-mismatch"),gi._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e,n=!1){if(ot(t.app))return Promise.reject(Ln(t));const i="signIn",r=await _h(t,i,e),s=await gi._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function Mb(t,e,n,i){return Xe(t).onIdTokenChanged(e,n,i)}function Lb(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Ub(t){return Xe(t).signOut()}const Cs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=1e3,$b=10;class gh extends mh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,o,a)=>{this.notifyListeners(u,a)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},s=this.storage.getItem(i);gb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$b):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gh.type="LOCAL";const zb=gh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends mh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bh.type="SESSION";const yh=bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new su(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,u=this.handlersMap[r];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(u).map(async c=>c(n.origin,s)),a=await Hb(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,u;return new Promise((o,a)=>{const c=ya("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},i);u={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(f.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(u),r.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function Wb(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function jb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gb(){return vh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="firebaseLocalStorageDb",Kb=1,xs="firebaseLocalStorage",Ch="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uu(t,e){return t.transaction([xs],e?"readwrite":"readonly").objectStore(xs)}function Yb(){const t=indexedDB.deleteDatabase(Eh);return new Ar(t).toPromise()}function bo(){const t=indexedDB.open(Eh,Kb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(xs,{keyPath:Ch})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(xs)?e(i):(i.close(),await Yb(),e(await bo()))})})}async function cl(t,e,n){const i=uu(t,!0).put({[Ch]:e,value:n});return new Ar(i).toPromise()}async function Qb(t,e){const n=uu(t,!1).get(e),i=await new Ar(n).toPromise();return i===void 0?null:i.value}function ll(t,e){const n=uu(t,!0).delete(e);return new Ar(n).toPromise()}const Jb=800,Zb=3;class xh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Zb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(Gb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jb(),!this.activeServiceWorker)return;this.sender=new qb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bo();return await cl(e,Cs,"1"),await ll(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>cl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Qb(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ll(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=uu(r,!1).getAll();return new Ar(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xh.type="LOCAL";const Xb=xh;new Ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t,e){return e?Bt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends ph{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e2(t){return Ob(t.auth,new va(t),t.bypassAuthState)}function t2(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Fb(n,new va(t),t.bypassAuthState)}async function n2(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Nb(n,new va(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:u,type:o}=e;if(u){this.reject(u);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e2;case"linkViaPopup":case"linkViaRedirect":return n2;case"reauthViaPopup":case"reauthViaRedirect":return t2;default:St(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new Ir(2e3,1e4);async function r2(t,e,n){if(ot(t.app))return Promise.reject(pt(t,"operation-not-supported-in-this-environment"));const i=ru(t);Xg(t,e,ba);const r=wh(i,n);return new Dn(i,"signInViaPopup",e,r).executeNotNull()}class Dn extends kh{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i2.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="pendingRedirect",rs=new Map;class u2 extends kh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const i=await o2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o2(t,e){const n=l2(e),i=c2(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function a2(t,e){rs.set(t._key(),e)}function c2(t){return Bt(t._redirectPersistence)}function l2(t){return is(s2,t.config.apiKey,t.name)}async function d2(t,e,n=!1){if(ot(t.app))return Promise.reject(Ln(t));const i=ru(t),r=wh(i,e),u=await new u2(i,r,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=10*60*1e3;class h2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ih(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f2&&this.cachedEventUids.clear(),this.cachedEventUids.has(dl(e))}saveEventToCache(e){this.cachedEventUids.add(dl(e)),this.lastProcessedEventTime=Date.now()}}function dl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ih({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g2=/^https?/;async function b2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _2(t);for(const n of e)try{if(y2(n))return}catch{}St(t,"unauthorized-domain")}function y2(t){const e=mo(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!g2.test(n))return!1;if(m2.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=new Ir(3e4,6e4);function fl(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E2(t){return new Promise((e,n)=>{var i,r,s;function u(){fl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fl(),n(pt(t,"network-request-failed"))},timeout:v2.get()})}if(!((r=(i=Tt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)u();else{const o=Ib("iframefcb");return Tt()[o]=()=>{gapi.load?u():n(pt(t,"network-request-failed"))},wb(`${kb()}?onload=${o}`).catch(a=>n(a))}}).catch(e=>{throw ss=null,e})}let ss=null;function C2(t){return ss=ss||E2(t),ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new Ir(5e3,15e3),w2="__/auth/iframe",k2="emulator/auth/iframe",I2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A2(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ha(e,k2):`https://${t.config.authDomain}/${w2}`,i={apiKey:e.apiKey,appName:t.name,v:Di},r=T2.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Si(i).slice(1)}`}async function S2(t){const e=await C2(t),n=Tt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:A2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I2,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const u=pt(t,"network-request-failed"),o=Tt().setTimeout(()=>{s(u)},x2.get());function a(){Tt().clearTimeout(o),r(i)}i.ping(a).then(a,()=>{s(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R2=500,P2=600,N2="_blank",F2="http://localhost";class hl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O2(t,e,n,i=R2,r=P2){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const a=Object.assign(Object.assign({},D2),{width:i.toString(),height:r.toString(),top:s,left:u}),c=Be().toLowerCase();n&&(o=uh(c)?N2:n),rh(c)&&(e=e||F2,a.scrollbars="yes");const l=Object.entries(a).reduce((f,[h,_])=>`${f}${h}=${_},`,"");if(mb(c)&&o!=="_self")return M2(e||"",o),new hl(null);const d=window.open(e||"",o,l);q(d,t,"popup-blocked");try{d.focus()}catch{}return new hl(d)}function M2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="__/auth/handler",U2="emulator/auth/handler",B2=encodeURIComponent("fac");async function pl(t,e,n,i,r,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Di,eventId:r};if(e instanceof ba){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",co(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,d]of Object.entries({}))u[l]=d}if(e instanceof Tr){const l=e.getScopes().filter(d=>d!=="");l.length>0&&(u.scopes=l.join(","))}t.tenantId&&(u.tid=t.tenantId);const o=u;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];const a=await t._getAppCheckToken(),c=a?`#${B2}=${encodeURIComponent(a)}`:"";return`${$2(t)}?${Si(o).slice(1)}${c}`}function $2({config:t}){return t.emulator?ha(t,U2):`https://${t.authDomain}/${L2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="webStorageSupport";class z2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yh,this._completeRedirectFn=d2,this._overrideRedirectResult=a2}async _openPopup(e,n,i,r){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const u=await pl(e,n,i,mo(),r);return O2(e,u,ya())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await pl(e,n,i,mo(),r);return Wb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(jt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await S2(e),i=new h2(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ru,{type:Ru},r=>{var s;const u=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ru];u!==void 0&&n(!!u),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dh()||sh()||ma()}}const H2=z2;var _l="@firebase/auth",ml="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j2(t){mi(new Bn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:u,authDomain:o}=i.options;q(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:u,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fh(t)},c=new Cb(i,r,s,a);return Ab(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),mi(new Bn("auth-internal",e=>{const n=ru(e.getProvider("auth").getImmediate());return(i=>new q2(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(_l,ml,W2(t)),pn(_l,ml,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=5*60,G2=Hf("authIdTokenMaxAge")||V2;let gl=null;const K2=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>G2)return;const r=n==null?void 0:n.token;gl!==r&&(gl=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Y2(t=Kf()){const e=ca(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tb(t,{popupRedirectResolver:H2,persistence:[Xb,zb,yh]}),i=Hf("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const u=K2(s.toString());Lb(n,u,()=>u(n.currentUser)),Mb(n,o=>u(o))}}const r=$f("auth");return r&&Sb(n,`http://${r}`),n}function Q2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xb({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=pt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Q2().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j2("Browser");var bl={};const yl="@firebase/database",vl="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th="";function J2(t){Th=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Z2(e)}}catch{}return new X2},Rn=Ah("localStorage"),e3=Ah("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new oa("@firebase/database"),t3=function(){let t=1;return function(){return t++}}(),Sh=function(t){const e=$m(t),n=new Mm;n.update(e);const i=n.digest();return ia.encodeByteArray(i)},Sr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Sr.apply(null,i):typeof i=="object"?e+=Ie(i):e+=i,e+=" "}return e};let Qi=null,El=!0;const n3=function(t,e){A(!0,"Can't turn on custom loggers persistently."),ai.logLevel=re.VERBOSE,Qi=ai.log.bind(ai)},Pe=function(...t){if(El===!0&&(El=!1,Qi===null&&e3.get("logging_enabled")===!0&&n3()),Qi){const e=Sr.apply(null,t);Qi(e)}},Dr=function(t){return function(...e){Pe(t,...e)}},yo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sr(...t);ai.error(e)},Vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Sr(...t)}`;throw ai.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Sr(...t);ai.warn(e)},i3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},r3=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bi="[MIN_NAME]",zn="[MAX_NAME]",Pi=function(t,e){if(t===e)return 0;if(t===bi||e===zn)return-1;if(e===bi||t===zn)return 1;{const n=Cl(t),i=Cl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},s3=function(t,e){return t===e?0:t<e?-1:1},Ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Ea=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ie(e[i]),n+=":",n+=Ea(t[e[i]]);return n+="}",n},Rh=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ph=function(t){A(!Dh(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,u,o,a;t===0?(s=0,u=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(o=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=o+i,u=Math.round(t*Math.pow(2,n-o)-Math.pow(2,n))):(s=0,u=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(u%2?1:0),u=Math.floor(u/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const l=c.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(l.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},u3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},o3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function a3(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const c3=new RegExp("^-?(0*)\\d{1,10}$"),l3=-2147483648,d3=2147483647,Cl=function(t){if(c3.test(t)){const e=Number(t);if(e>=l3&&e<=d3)return e}return null},Ni=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},f3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class us{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}us.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="5",Nh="v",Fh="s",Oh="r",Mh="f",Lh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uh="ls",Bh="p",vo="ac",$h="websocket",zh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n,i,r,s=!1,u="",o=!1,a=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=u,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _3(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qh(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let i;if(e===$h)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zh)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_3(t)&&(n.ns=t.namespace);const r=[];return Ve(n,(s,u)=>{r.push(s+"="+u)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={},Nu={};function xa(t){const e=t.toString();return Pu[e]||(Pu[e]=new m3),Pu[e]}function g3(t,e){const n=t.toString();return Nu[n]||(Nu[n]=e()),Nu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ni(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="start",y3="close",v3="pLPCommand",E3="pRTLPCB",Wh="id",jh="pw",Vh="ser",C3="cb",x3="seg",w3="ts",k3="d",I3="dframe",Gh=1870,Kh=30,T3=Gh-Kh,A3=25e3,S3=3e4;class ei{constructor(e,n,i,r,s,u,o){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=u,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dr(e),this.stats_=xa(n),this.urlFn=a=>(this.appCheckToken&&(a[vo]=this.appCheckToken),qh(n,zh,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new b3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(S3)),r3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wa((...s)=>{const[u,o,a,c,l]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===xl)this.id=o,this.password=a;else if(u===y3)o?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(o,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...s)=>{const[u,o]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(u,o)},()=>{this.onClosed_()},this.urlFn);const i={};i[xl]="t",i[Vh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[C3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Nh]=Ca,this.transportSessionId&&(i[Fh]=this.transportSessionId),this.lastSessionId&&(i[Uh]=this.lastSessionId),this.applicationId&&(i[Bh]=this.applicationId),this.appCheckToken&&(i[vo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lh.test(location.hostname)&&(i[Oh]=Mh);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ei.forceAllow_=!0}static forceDisallow(){ei.forceDisallow_=!0}static isAvailable(){return ei.forceAllow_?!0:!ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!u3()&&!o3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Uf(n),r=Rh(i,T3);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[I3]="t",i[Wh]=e,i[jh]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wa{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=t3(),window[v3+this.uniqueCallbackIdentifier]=e,window[E3+this.uniqueCallbackIdentifier]=n,this.myIFrame=wa.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(o){Pe("frame writing exception"),o.stack&&Pe(o.stack),Pe(o)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wh]=this.myID,e[jh]=this.myPW,e[Vh]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kh+i.length<=Gh;){const u=this.pendingSegs.shift();i=i+"&"+x3+r+"="+u.seg+"&"+w3+r+"="+u.ts+"&"+k3+r+"="+u.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(A3)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3=16384,R3=45e3;let ws=null;typeof MozWebSocket<"u"?ws=MozWebSocket:typeof WebSocket<"u"&&(ws=WebSocket);class at{constructor(e,n,i,r,s,u,o){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dr(this.connId),this.stats_=xa(n),this.connURL=at.connectionURL_(n,u,o,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const u={};return u[Nh]=Ca,typeof location<"u"&&location.hostname&&Lh.test(location.hostname)&&(u[Oh]=Mh),n&&(u[Fh]=n),i&&(u[Uh]=i),r&&(u[vo]=r),s&&(u[Bh]=s),qh(e,$h,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rn.set("previous_websocket_failure",!0);try{let i;Am(),this.mySock=new ws(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ws!==null&&!at.forceDisallow_}static previouslyFailed(){return Rn.isInMemoryStorage||Rn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=cr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Rh(n,D3);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(R3))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{static get ALL_TRANSPORTS(){return[ei,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=at&&at.isAvailable();let i=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[at];else{const r=this.transports_=[];for(const s of fr.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);fr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P3=6e4,N3=5e3,F3=10*1024,O3=100*1024,Fu="t",wl="d",M3="s",kl="r",L3="e",Il="o",Tl="a",Al="n",Sl="p",U3="h";class B3{constructor(e,n,i,r,s,u,o,a,c,l){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=u,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dr("c:"+this.id+":"),this.transportManager_=new fr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>O3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>F3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fu in e){const n=e[Fu];n===Tl?this.upgradeIfSecondaryHealthy_():n===kl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Il&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ui("t",e),i=Ui("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Al,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ui("t",e),i=Ui("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ui(Fu,e);if(wl in e){const i=e[wl];if(n===U3){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Al){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===M3?this.onConnectionShutdown_(i):n===kl?this.onReset_(i):n===L3?yo("Server Error: "+i):n===Il?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ca!==i&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(P3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(N3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Qh{static getInstance(){return new ks}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=32,Rl=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new oe("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Jh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $3(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function ve(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof oe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new oe(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return He(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ka(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function dt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class z3{constructor(e,n){this.errorPrefix_=n,this.parts_=Zh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=iu(this.parts_[i]);e0(this)}}function H3(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=iu(e),e0(t)}function q3(t){const e=t.parts_.pop();t.byteLength_-=iu(e),t.parts_.length>0&&(t.byteLength_-=1)}function e0(t){if(t.byteLength_>Rl)throw new Error(t.errorPrefix_+"has a key path longer than "+Rl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dl+") or object contains a cycle "+In(t))}function In(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends Qh{static getInstance(){return new Ia}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=1e3,W3=60*5*1e3,Pl=30*1e3,j3=1.3,V3=3e4,G3="server_kill",Nl=3;class Ht extends Yh{constructor(e,n,i,r,s,u,o,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=u,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ht.nextPersistentConnectionId_++,this.log_=Dr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bi,this.maxReconnectDelay_=W3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ia.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ks.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Ie(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new nu,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const o=u.d;u.s==="ok"?n.resolve(o):n.reject(o)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+s),this.listens.has(u)||this.listens.set(u,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(u).has(s),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(u).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},u="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(u,s,o=>{const a=o.d,c=o.s;Ht.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",o),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const i=_i(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Om(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fm(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,u=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},u="n";r&&(s.q=i,s.t=r),this.sendRequest(u,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,u=>{r&&setTimeout(()=>{r(u.s,u.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const u={p:n,d:i};s!==void 0&&(u.h=s),this.outstandingPuts_.push({action:e,request:u,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yo("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>V3&&(this.reconnectDelay_=Bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*j3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ht.nextConnectionId_++,s=this.lastSessionId;let u=!1,o=null;const a=function(){o?o.close():(u=!0,i())},c=function(d){A(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);u?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,o=new B3(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,h=>{We(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(G3)},s))}catch(d){this.log_("Failed to get token: "+d),u||(this.repoInfo_.nodeAdmin&&We(d),a())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],co(this.interruptReasons_)&&(this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Ea(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new oe(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nl&&(this.reconnectDelay_=Pl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Th.replace(/\./g,"-")]=1,sa()?e["framework.cordova"]=1:qf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ks.getInstance().currentlyOnline();return co(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Q(bi,e),r=new Q(bi,n);return this.compare(i,r)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr;class t0 extends ou{static get __EMPTY_NODE(){return jr}static set __EMPTY_NODE(e){jr=e}compare(e,n){return Pi(e.name,n.name)}isDefinedOn(e){throw Ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(zn,jr)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,jr)}toString(){return".key"}}const ci=new t0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?i(e.key,n):1,r&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ke.RED,this.left=r??qe.EMPTY_NODE,this.right=s??qe.EMPTY_NODE}copy(e,n,i,r,s){return new ke(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class K3{copy(e,n,i,r,s){return this}insert(e,n,i){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vr(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new K3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(t,e){return Pi(t.name,e.name)}function Ta(t,e){return Pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;function Q3(t){Eo=t}const n0=function(t){return typeof t=="number"?"number:"+Ph(t):"string:"+t},i0=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else A(t===Eo||t.isEmpty(),"priority of unexpected type.");A(t===Eo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;class we{static set __childrenNodeConstructor(e){Fl=e}static get __childrenNodeConstructor(){return Fl}constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),i0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Y(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(A(i!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+n0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ph(this.value_):e+=this.value_,this.lazyHash_=Sh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(i);return A(r>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r0,s0;function J3(t){r0=t}function Z3(t){s0=t}class X3 extends ou{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Pi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(zn,new we("[PRIORITY-POST]",s0))}makePost(e,n){const i=r0(e);return new Q(n,new we("[PRIORITY-POST]",i))}toString(){return".priority"}}const ge=new X3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=Math.log(2);class ty{constructor(e){const n=s=>parseInt(Math.log(s)/ey,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Is=function(t,e,n,i){t.sort(e);const r=function(a,c){const l=c-a;let d,f;if(l===0)return null;if(l===1)return d=t[a],f=n?n(d):d,new ke(f,d.node,ke.BLACK,null,null);{const h=parseInt(l/2,10)+a,_=r(a,h),y=r(h+1,c);return d=t[h],f=n?n(d):d,new ke(f,d.node,ke.BLACK,_,y)}},s=function(a){let c=null,l=null,d=t.length;const f=function(_,y){const k=d-_,R=d;d-=_;const C=r(k+1,R),w=t[k],x=n?n(w):w;h(new ke(x,w.node,y,null,C))},h=function(_){c?(c.left=_,c=_):(l=_,c=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),k=Math.pow(2,a.count-(_+1));y?f(k,ke.BLACK):(f(k,ke.BLACK),f(k,ke.RED))}return l},u=new ty(t.length),o=s(u);return new qe(i||e,o)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;const Qn={};class $t{static get Default(){return A(Qn&&ge,"ChildrenNode.ts has not been loaded"),Ou=Ou||new $t({".priority":Qn},{".priority":ge}),Ou}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=_i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Q.Wrap);let u=s.getNext();for(;u;)r=r||e.isDefinedOn(u.node),i.push(u),u=s.getNext();let o;r?o=Is(i,e.getCompare()):o=Qn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=o,new $t(l,c)}addToIndexes(e,n){const i=ms(this.indexes_,(r,s)=>{const u=_i(this.indexSet_,s);if(A(u,"Missing index implementation for "+s),r===Qn)if(u.isDefinedOn(e.node)){const o=[],a=n.getIterator(Q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&o.push(c),c=a.getNext();return o.push(e),Is(o,u.getCompare())}else return Qn;else{const o=n.get(e.name);let a=r;return o&&(a=a.remove(new Q(e.name,o))),a.insert(e,e.node)}});return new $t(i,this.indexSet_)}removeFromIndexes(e,n){const i=ms(this.indexes_,r=>{if(r===Qn)return r;{const s=n.get(e.name);return s?r.remove(new Q(e.name,s)):r}});return new $t(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class H{static get EMPTY_NODE(){return $i||($i=new H(new qe(Ta),null,$t.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&i0(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$i}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$i:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Q(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const u=r.isEmpty()?$i:this.priorityNode_;return new H(r,u,s)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{A(Y(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ce(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ge,(u,o)=>{n[u]=o.val(e),i++,s&&H.INTEGER_REGEXP_.test(u)?r=Math.max(r,Number(u)):s=!1}),!e&&s&&r<2*i){const u=[];for(const o in n)u[o]=n[o];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+n0(this.getPriority().val())+":"),this.forEachChild(ge,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Sh(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ge),r=n.getIterator(ge);let s=i.getNext(),u=r.getNext();for(;s&&u;){if(s.name!==u.name||!s.node.equals(u.node))return!1;s=i.getNext(),u=r.getNext()}return s===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ci?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ny extends H{constructor(){super(new qe(Ta),H.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Rr=new ny;Object.defineProperties(Q,{MIN:{value:new Q(bi,H.EMPTY_NODE)},MAX:{value:new Q(zn,Rr)}});t0.__EMPTY_NODE=H.EMPTY_NODE;we.__childrenNodeConstructor=H;Q3(Rr);Z3(Rr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=!0;function Se(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Se(e))}if(!(t instanceof Array)&&iy){const n=[];let i=!1;if(Ve(t,(u,o)=>{if(u.substring(0,1)!=="."){const a=Se(o);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new Q(u,a)))}}),n.length===0)return H.EMPTY_NODE;const s=Is(n,Y3,u=>u.name,Ta);if(i){const u=Is(n,ge.getCompare());return new H(s,Se(e),new $t({".priority":u},{".priority":ge}))}else return new H(s,Se(e),$t.Default)}else{let n=H.EMPTY_NODE;return Ve(t,(i,r)=>{if(Yt(t,i)&&i.substring(0,1)!=="."){const s=Se(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Se(e))}}J3(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry extends ou{constructor(e){super(),this.indexPath_=e,A(!J(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Pi(e.name,n.name):s}makePost(e,n){const i=Se(e),r=H.EMPTY_NODE.updateChild(this.indexPath_,i);return new Q(n,r)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new Q(zn,e)}toString(){return Zh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends ou{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Pi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const i=Se(e);return new Q(n,i)}toString(){return".value"}}const uy=new sy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){return{type:"value",snapshotNode:t}}function yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function pr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function oy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.index_=e}updateChild(e,n,i,r,s,u){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(n);return o.getChild(r).equals(i.getChild(r))&&o.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(n)?u.trackChildChange(hr(n,o)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?u.trackChildChange(yi(n,i)):u.trackChildChange(pr(n,i,o))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ge,(r,s)=>{n.hasChild(r)||i.trackChildChange(hr(r,s))}),n.isLeafNode()||n.forEachChild(ge,(r,s)=>{if(e.hasChild(r)){const u=e.getImmediateChild(r);u.equals(s)||i.trackChildChange(pr(r,s,u))}else i.trackChildChange(yi(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.indexedFilter_=new Aa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_r.getStartPost_(e),this.endPost_=_r.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,u){return this.matches(new Q(n,i))||(i=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,u)}updateFullNode(e,n,i){n.isLeafNode()&&(n=H.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(H.EMPTY_NODE);const s=this;return n.forEachChild(ge,(u,o)=>{s.matches(new Q(u,o))||(r=r.updateImmediateChild(u,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new _r(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,u){return this.rangedFilter_.matches(new Q(n,i))||(i=H.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,u):this.fullLimitUpdateChild_(e,n,i,s,u)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;s.hasNext()&&u<this.limit_;){const o=s.getNext();if(this.withinDirectionalStart(o))if(this.withinDirectionalEnd(o))r=r.updateImmediateChild(o.name,o.node),u++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(H.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let u=0;for(;s.hasNext();){const o=s.getNext();u<this.limit_&&this.withinDirectionalStart(o)&&this.withinDirectionalEnd(o)?u++:r=r.updateImmediateChild(o.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let u;if(this.reverse_){const d=this.index_.getCompare();u=(f,h)=>d(h,f)}else u=this.index_.getCompare();const o=e;A(o.numChildren()===this.limit_,"");const a=new Q(n,i),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(n)){const d=o.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||o.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:u(f,a);if(l&&!i.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(pr(n,i,d)),o.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(hr(n,d));const y=o.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(yi(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return i.isEmpty()?e:l&&u(c,a)>=0?(s!=null&&(s.trackChildChange(hr(c.name,c.node)),s.trackChildChange(yi(n,i))),o.updateImmediateChild(n,i).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Sa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cy(t){return t.loadsAllData()?new Aa(t.getIndex()):t.hasLimit()?new ay(t):new _r(t)}function Ol(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===uy?n="$value":t.index_===ci?n="$key":(A(t.index_ instanceof ry,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ie(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ie(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ie(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ml(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Yh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Dr("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const u=Ts.getListenId_(e,i),o={};this.listens_[u]=o;const a=Ol(e._queryParams);this.restRequest_(s+".json",a,(c,l)=>{let d=l;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),_i(this.listens_,u)===o){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const i=Ts.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ol(e._queryParams),i=e._path.toString(),r=new nu;return this.restRequest_(i+".json",n,(s,u)=>{let o=u;s===404&&(o=null,s=null),s===null?(this.onDataUpdate_(i,o,!1,null),r.resolve(o)):r.reject(new Error(o))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Si(n);this.log_("Sending REST request for "+u);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&o.readyState===4){this.log_("REST Response for "+u+" received. status:",o.status,"response:",o.responseText);let a=null;if(o.status>=200&&o.status<300){try{a=cr(o.responseText)}catch{We("Failed to parse JSON response for "+u+": "+o.responseText)}i(null,a)}else o.status!==401&&o.status!==404&&We("Got unsuccessful REST response for "+u+" Status: "+o.status),i(o.status);i=null}},o.open("GET",u,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return{value:null,children:new Map}}function o0(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,As());const r=t.children.get(i);e=ce(e),o0(r,e,n)}}function Co(t,e,n){t.value!==null?n(e,t.value):dy(t,(i,r)=>{const s=new oe(e.toString()+"/"+i);Co(r,s,n)})}function dy(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=10*1e3,hy=30*1e3,py=5*60*1e3;class _y{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fy(e);const i=Ll+(hy-Ll)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ve(e,(r,s)=>{s>0&&Yt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*py))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function a0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Da(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ra(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ft.ACK_USER_WRITE,this.source=a0()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Ss(ee(),n,this.revert)}}else return A(Y(this.path)===e,"operationForChild called for unrelated child."),new Ss(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new mr(this.source,ee()):new mr(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ft.OVERWRITE}operationForChild(e){return J(this.path)?new Hn(this.source,ee(),this.snap.getImmediateChild(e)):new Hn(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ft.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Hn(this.source,ee(),n.value):new gr(this.source,ee(),n)}else return A(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gr(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gy(t,e,n,i){const r=[],s=[];return e.forEach(u=>{u.type==="child_changed"&&t.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&s.push(oy(u.childName,u.snapshotNode))}),zi(t,r,"child_removed",e,i,n),zi(t,r,"child_added",e,i,n),zi(t,r,"child_moved",s,i,n),zi(t,r,"child_changed",e,i,n),zi(t,r,"value",e,i,n),r}function zi(t,e,n,i,r,s){const u=i.filter(o=>o.type===n);u.sort((o,a)=>yy(t,o,a)),u.forEach(o=>{const a=by(t,o,s);r.forEach(c=>{c.respondsTo(o.type)&&e.push(c.createEvent(a,t.query_))})})}function by(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yy(t,e,n){if(e.childName==null||n.childName==null)throw Ai("Should only compare child_ events.");const i=new Q(e.childName,e.snapshotNode),r=new Q(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){return{eventCache:t,serverCache:e}}function Zi(t,e,n,i){return au(new qn(e,n,i),t.serverCache)}function c0(t,e,n,i){return au(t.eventCache,new qn(e,n,i))}function xo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu;const vy=()=>(Mu||(Mu=new qe(s3)),Mu);class de{static fromObject(e){let n=new de(null);return Ve(e,(i,r)=>{n=n.set(new oe(i),r)}),n}constructor(e,n=vy()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(J(e))return null;{const i=Y(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:ve(new oe(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(ce(e)):new de(null)}}set(e,n){if(J(e))return new de(n,this.children);{const i=Y(e),s=(this.children.get(i)||new de(null)).set(ce(e),n),u=this.children.insert(i,s);return new de(this.value,u)}}remove(e){if(J(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const r=i.remove(ce(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new de(null):new de(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(ce(e)):null}}setTree(e,n){if(J(e))return n;{const i=Y(e),s=(this.children.get(i)||new de(null)).setTree(ce(e),n);let u;return s.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,s),new de(this.value,u)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ve(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(J(e))return null;{const s=Y(e),u=this.children.get(s);return u?u.findOnPath_(ce(e),ve(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,i){if(J(e))return this;{this.value&&i(n,this.value);const r=Y(e),s=this.children.get(r);return s?s.foreachOnPath_(ce(e),ve(n,r),i):new de(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(ve(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new de(null))}}function Xi(t,e,n){if(J(e))return new _t(new de(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const u=He(r,e);return s=s.updateChild(u,n),new _t(t.writeTree_.set(r,s))}else{const r=new de(n),s=t.writeTree_.setTree(e,r);return new _t(s)}}}function Ul(t,e,n){let i=t;return Ve(n,(r,s)=>{i=Xi(i,ve(e,r),s)}),i}function Bl(t,e){if(J(e))return _t.empty();{const n=t.writeTree_.setTree(e,new de(null));return new _t(n)}}function wo(t,e){return jn(t,e)!=null}function jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function $l(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(i,r)=>{e.push(new Q(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Q(i,r.value))}),e}function _n(t,e){if(J(e))return t;{const n=jn(t,e);return n!=null?new _t(new de(n)):new _t(t.writeTree_.subtree(e))}}function ko(t){return t.writeTree_.isEmpty()}function vi(t,e){return l0(ee(),t.writeTree_,e)}function l0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=l0(ve(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ve(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e){return p0(e,t)}function Ey(t,e,n,i,r){A(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Xi(t.visibleWrites,e,n)),t.lastWriteId=i}function Cy(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function xy(t,e){const n=t.allWrites.findIndex(o=>o.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,u=t.allWrites.length-1;for(;r&&u>=0;){const o=t.allWrites[u];o.visible&&(u>=n&&wy(o,i.path)?r=!1:dt(i.path,o.path)&&(s=!0)),u--}if(r){if(s)return ky(t),!0;if(i.snap)t.visibleWrites=Bl(t.visibleWrites,i.path);else{const o=i.children;Ve(o,a=>{t.visibleWrites=Bl(t.visibleWrites,ve(i.path,a))})}return!0}else return!1}function wy(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(ve(t.path,n),e))return!0;return!1}function ky(t){t.visibleWrites=d0(t.allWrites,Iy,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Iy(t){return t.visible}function d0(t,e,n){let i=_t.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const u=s.path;let o;if(s.snap)dt(n,u)?(o=He(n,u),i=Xi(i,o,s.snap)):dt(u,n)&&(o=He(u,n),i=Xi(i,ee(),s.snap.getChild(o)));else if(s.children){if(dt(n,u))o=He(n,u),i=Ul(i,o,s.children);else if(dt(u,n))if(o=He(u,n),J(o))i=Ul(i,ee(),s.children);else{const a=_i(s.children,Y(o));if(a){const c=a.getChild(ce(o));i=Xi(i,ee(),c)}}}else throw Ai("WriteRecord should have .snap or .children")}}return i}function f0(t,e,n,i,r){if(!i&&!r){const s=jn(t.visibleWrites,e);if(s!=null)return s;{const u=_n(t.visibleWrites,e);if(ko(u))return n;if(n==null&&!wo(u,ee()))return null;{const o=n||H.EMPTY_NODE;return vi(u,o)}}}else{const s=_n(t.visibleWrites,e);if(!r&&ko(s))return n;if(!r&&n==null&&!wo(s,ee()))return null;{const u=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},o=d0(t.allWrites,u,e),a=n||H.EMPTY_NODE;return vi(o,a)}}}function Ty(t,e,n){let i=H.EMPTY_NODE;const r=jn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ge,(s,u)=>{i=i.updateImmediateChild(s,u)}),i;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(ge,(u,o)=>{const a=vi(_n(s,new oe(u)),o);i=i.updateImmediateChild(u,a)}),$l(s).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const s=_n(t.visibleWrites,e);return $l(s).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function Ay(t,e,n,i,r){A(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(wo(t.visibleWrites,s))return null;{const u=_n(t.visibleWrites,s);return ko(u)?r.getChild(n):vi(u,r.getChild(n))}}function Sy(t,e,n,i){const r=ve(e,n),s=jn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const u=_n(t.visibleWrites,r);return vi(u,i.getNode().getImmediateChild(n))}else return null}function Dy(t,e){return jn(t.visibleWrites,e)}function Ry(t,e,n,i,r,s,u){let o;const a=_n(t.visibleWrites,e),c=jn(a,ee());if(c!=null)o=c;else if(n!=null)o=vi(a,n);else return[];if(o=o.withIndex(u),!o.isEmpty()&&!o.isLeafNode()){const l=[],d=u.getCompare(),f=s?o.getReverseIteratorFrom(i,u):o.getIteratorFrom(i,u);let h=f.getNext();for(;h&&l.length<r;)d(h,i)!==0&&l.push(h),h=f.getNext();return l}else return[]}function Py(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Ds(t,e,n,i){return f0(t.writeTree,t.treePath,e,n,i)}function Na(t,e){return Ty(t.writeTree,t.treePath,e)}function zl(t,e,n,i){return Ay(t.writeTree,t.treePath,e,n,i)}function Rs(t,e){return Dy(t.writeTree,ve(t.treePath,e))}function Ny(t,e,n,i,r,s){return Ry(t.writeTree,t.treePath,e,n,i,r,s)}function Fa(t,e,n){return Sy(t.writeTree,t.treePath,e,n)}function h0(t,e){return p0(ve(t.treePath,e),t.writeTree)}function p0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,pr(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,hr(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,yi(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,pr(i,e.snapshotNode,r.oldSnap));else throw Ai("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const _0=new Oy;class Oa{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fa(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wn(this.viewCache_),s=Ny(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){return{filter:t}}function Ly(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Uy(t,e,n,i,r){const s=new Fy;let u,o;if(n.type===ft.OVERWRITE){const c=n;c.source.fromUser?u=Io(t,e,c.path,c.snap,i,r,s):(A(c.source.fromServer,"Unknown source."),o=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),u=Ps(t,e,c.path,c.snap,i,r,o,s))}else if(n.type===ft.MERGE){const c=n;c.source.fromUser?u=$y(t,e,c.path,c.children,i,r,s):(A(c.source.fromServer,"Unknown source."),o=c.source.tagged||e.serverCache.isFiltered(),u=To(t,e,c.path,c.children,i,r,o,s))}else if(n.type===ft.ACK_USER_WRITE){const c=n;c.revert?u=qy(t,e,c.path,i,r,s):u=zy(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===ft.LISTEN_COMPLETE)u=Hy(t,e,n.path,i,s);else throw Ai("Unknown operation type: "+n.type);const a=s.getChanges();return By(e,u,a),{viewCache:u,changes:a}}function By(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=xo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(u0(xo(e)))}}function m0(t,e,n,i,r,s){const u=e.eventCache;if(Rs(i,n)!=null)return e;{let o,a;if(J(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Wn(e),l=c instanceof H?c:H.EMPTY_NODE,d=Na(i,l);o=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ds(i,Wn(e));o=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Y(n);if(c===".priority"){A(bn(n)===1,"Can't have a priority with additional path components");const l=u.getNode();a=e.serverCache.getNode();const d=zl(i,n,l,a);d!=null?o=t.filter.updatePriority(l,d):o=u.getNode()}else{const l=ce(n);let d;if(u.isCompleteForChild(c)){a=e.serverCache.getNode();const f=zl(i,n,u.getNode(),a);f!=null?d=u.getNode().getImmediateChild(c).updateChild(l,f):d=u.getNode().getImmediateChild(c)}else d=Fa(i,c,e.serverCache);d!=null?o=t.filter.updateChild(u.getNode(),c,d,l,r,s):o=u.getNode()}}return Zi(e,o,u.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Ps(t,e,n,i,r,s,u,o){const a=e.serverCache;let c;const l=u?t.filter:t.filter.getIndexedFilter();if(J(n))c=l.updateFullNode(a.getNode(),i,null);else if(l.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(n,i);c=l.updateFullNode(a.getNode(),h,null)}else{const h=Y(n);if(!a.isCompleteForPath(n)&&bn(n)>1)return e;const _=ce(n),k=a.getNode().getImmediateChild(h).updateChild(_,i);h===".priority"?c=l.updatePriority(a.getNode(),k):c=l.updateChild(a.getNode(),h,k,_,_0,null)}const d=c0(e,c,a.isFullyInitialized()||J(n),l.filtersNodes()),f=new Oa(r,d,s);return m0(t,d,n,r,f,o)}function Io(t,e,n,i,r,s,u){const o=e.eventCache;let a,c;const l=new Oa(r,e,s);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,u),a=Zi(e,c,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=Zi(e,c,o.isFullyInitialized(),o.isFiltered());else{const f=ce(n),h=o.getNode().getImmediateChild(d);let _;if(J(f))_=i;else{const y=l.getCompleteChild(d);y!=null?Jh(f)===".priority"&&y.getChild(Xh(f)).isEmpty()?_=y:_=y.updateChild(f,i):_=H.EMPTY_NODE}if(h.equals(_))a=e;else{const y=t.filter.updateChild(o.getNode(),d,_,f,l,u);a=Zi(e,y,o.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Hl(t,e){return t.eventCache.isCompleteForChild(e)}function $y(t,e,n,i,r,s,u){let o=e;return i.foreach((a,c)=>{const l=ve(n,a);Hl(e,Y(l))&&(o=Io(t,o,l,c,r,s,u))}),i.foreach((a,c)=>{const l=ve(n,a);Hl(e,Y(l))||(o=Io(t,o,l,c,r,s,u))}),o}function ql(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function To(t,e,n,i,r,s,u,o){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;J(n)?c=i:c=new de(null).setTree(n,i);const l=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(l.hasChild(d)){const h=e.serverCache.getNode().getImmediateChild(d),_=ql(t,h,f);a=Ps(t,a,new oe(d),_,r,s,u,o)}}),c.children.inorderTraversal((d,f)=>{const h=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!l.hasChild(d)&&!h){const _=e.serverCache.getNode().getImmediateChild(d),y=ql(t,_,f);a=Ps(t,a,new oe(d),y,r,s,u,o)}}),a}function zy(t,e,n,i,r,s,u){if(Rs(r,n)!=null)return e;const o=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(J(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ps(t,e,n,a.getNode().getChild(n),r,s,o,u);if(J(n)){let c=new de(null);return a.getNode().forEachChild(ci,(l,d)=>{c=c.set(new oe(l),d)}),To(t,e,n,c,r,s,o,u)}else return e}else{let c=new de(null);return i.foreach((l,d)=>{const f=ve(n,l);a.isCompleteForPath(f)&&(c=c.set(l,a.getNode().getChild(f)))}),To(t,e,n,c,r,s,o,u)}}function Hy(t,e,n,i,r){const s=e.serverCache,u=c0(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return m0(t,u,n,i,_0,r)}function qy(t,e,n,i,r,s){let u;if(Rs(i,n)!=null)return e;{const o=new Oa(i,e,r),a=e.eventCache.getNode();let c;if(J(n)||Y(n)===".priority"){let l;if(e.serverCache.isFullyInitialized())l=Ds(i,Wn(e));else{const d=e.serverCache.getNode();A(d instanceof H,"serverChildren would be complete if leaf node"),l=Na(i,d)}l=l,c=t.filter.updateFullNode(a,l,s)}else{const l=Y(n);let d=Fa(i,l,e.serverCache);d==null&&e.serverCache.isCompleteForChild(l)&&(d=a.getImmediateChild(l)),d!=null?c=t.filter.updateChild(a,l,d,ce(n),o,s):e.eventCache.getNode().hasChild(l)?c=t.filter.updateChild(a,l,H.EMPTY_NODE,ce(n),o,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Ds(i,Wn(e)),u.isLeafNode()&&(c=t.filter.updateFullNode(c,u,s)))}return u=e.serverCache.isFullyInitialized()||Rs(i,ee())!=null,Zi(e,c,u,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Aa(i.getIndex()),s=cy(i);this.processor_=My(s);const u=n.serverCache,o=n.eventCache,a=r.updateFullNode(H.EMPTY_NODE,u.getNode(),null),c=s.updateFullNode(H.EMPTY_NODE,o.getNode(),null),l=new qn(a,u.isFullyInitialized(),r.filtersNodes()),d=new qn(c,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=au(d,l),this.eventGenerator_=new my(this.query_)}get query(){return this.query_}}function jy(t){return t.viewCache_.serverCache.getNode()}function Vy(t,e){const n=Wn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Wl(t){return t.eventRegistrations_.length===0}function Gy(t,e){t.eventRegistrations_.push(e)}function jl(t,e,n){const i=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const u=s.createCancelEvent(n,r);u&&i.push(u)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const u=t.eventRegistrations_[s];if(!u.matches(e))r.push(u);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Vl(t,e,n,i){e.type===ft.MERGE&&e.source.queryId!==null&&(A(Wn(t.viewCache_),"We should always have a full cache before handling merges"),A(xo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=Uy(t.processor_,r,e,n,i);return Ly(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,g0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ky(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(s,u)=>{i.push(yi(s,u))}),n.isFullyInitialized()&&i.push(u0(n.getNode())),g0(t,i,n.getNode(),e)}function g0(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return gy(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class Yy{constructor(){this.views=new Map}}function Qy(t){A(!Ns,"__referenceConstructor has already been defined"),Ns=t}function Jy(){return A(Ns,"Reference.ts has not been loaded"),Ns}function Zy(t){return t.views.size===0}function Ma(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return A(s!=null,"SyncTree gave us an op for an invalid query."),Vl(s,e,n,i)}else{let s=[];for(const u of t.views.values())s=s.concat(Vl(u,e,n,i));return s}}function Xy(t,e,n,i,r){const s=e._queryIdentifier,u=t.views.get(s);if(!u){let o=Ds(n,r?i:null),a=!1;o?a=!0:i instanceof H?(o=Na(n,i),a=!1):(o=H.EMPTY_NODE,a=!1);const c=au(new qn(o,a,!1),new qn(i,r,!1));return new Wy(e,c)}return u}function ev(t,e,n,i,r,s){const u=Xy(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,u),Gy(u,n),Ky(u,n)}function tv(t,e,n,i){const r=e._queryIdentifier,s=[];let u=[];const o=yn(t);if(r==="default")for(const[a,c]of t.views.entries())u=u.concat(jl(c,n,i)),Wl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(r);a&&(u=u.concat(jl(a,n,i)),Wl(a)&&(t.views.delete(r),a.query._queryParams.loadsAllData()||s.push(a.query)))}return o&&!yn(t)&&s.push(new(Jy())(e._repo,e._path)),{removed:s,events:u}}function b0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function li(t,e){let n=null;for(const i of t.views.values())n=n||Vy(i,e);return n}function y0(t,e){if(e._queryParams.loadsAllData())return cu(t);{const i=e._queryIdentifier;return t.views.get(i)}}function v0(t,e){return y0(t,e)!=null}function yn(t){return cu(t)!=null}function cu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;function nv(t){A(!Fs,"__referenceConstructor has already been defined"),Fs=t}function iv(){return A(Fs,"Reference.ts has not been loaded"),Fs}let rv=1;class Gl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Py(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function E0(t,e,n,i,r){return Ey(t.pendingWriteTree_,e,n,i,r),r?Pr(t,new Hn(a0(),e,n)):[]}function Pn(t,e,n=!1){const i=Cy(t.pendingWriteTree_,e);if(xy(t.pendingWriteTree_,e)){let s=new de(null);return i.snap!=null?s=s.set(ee(),!0):Ve(i.children,u=>{s=s.set(new oe(u),!0)}),Pr(t,new Ss(i.path,s,n))}else return[]}function lu(t,e,n){return Pr(t,new Hn(Da(),e,n))}function sv(t,e,n){const i=de.fromObject(n);return Pr(t,new gr(Da(),e,i))}function uv(t,e){return Pr(t,new mr(Da(),e))}function ov(t,e,n){const i=Ua(t,n);if(i){const r=Ba(i),s=r.path,u=r.queryId,o=He(s,e),a=new mr(Ra(u),o);return $a(t,s,a)}else return[]}function Ao(t,e,n,i,r=!1){const s=e._path,u=t.syncPointTree_.get(s);let o=[];if(u&&(e._queryIdentifier==="default"||v0(u,e))){const a=tv(u,e,n,i);Zy(u)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(o=a.events,!r){const l=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,h)=>yn(h));if(l&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const h=lv(f);for(let _=0;_<h.length;++_){const y=h[_],k=y.query,R=w0(t,y);t.listenProvider_.startListening(er(k),Os(t,k),R.hashFn,R.onComplete)}}}!d&&c.length>0&&!i&&(l?t.listenProvider_.stopListening(er(e),null):c.forEach(f=>{const h=t.queryToTagMap.get(du(f));t.listenProvider_.stopListening(er(f),h)}))}dv(t,c)}return o}function av(t,e,n,i){const r=Ua(t,i);if(r!=null){const s=Ba(r),u=s.path,o=s.queryId,a=He(u,e),c=new Hn(Ra(o),a,n);return $a(t,u,c)}else return[]}function cv(t,e,n,i){const r=Ua(t,i);if(r){const s=Ba(r),u=s.path,o=s.queryId,a=He(u,e),c=de.fromObject(n),l=new gr(Ra(o),a,c);return $a(t,u,l)}else return[]}function Kl(t,e,n,i=!1){const r=e._path;let s=null,u=!1;t.syncPointTree_.foreachOnPath(r,(f,h)=>{const _=He(f,r);s=s||li(h,_),u=u||yn(h)});let o=t.syncPointTree_.get(r);o?(u=u||yn(o),s=s||li(o,ee())):(o=new Yy,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;s!=null?a=!0:(a=!1,s=H.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,_)=>{const y=li(_,ee());y&&(s=s.updateImmediateChild(h,y))}));const c=v0(o,e);if(!c&&!e._queryParams.loadsAllData()){const f=du(e);A(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=fv();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const l=Pa(t.pendingWriteTree_,r);let d=ev(o,e,n,l,s,a);if(!c&&!u&&!i){const f=y0(o,e);d=d.concat(hv(t,e,f))}return d}function La(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(u,o)=>{const a=He(u,e),c=li(o,a);if(c)return c});return f0(r,e,s,n,!0)}function Pr(t,e){return C0(e,t.syncPointTree_,null,Pa(t.pendingWriteTree_,ee()))}function C0(t,e,n,i){if(J(t.path))return x0(t,e,n,i);{const r=e.get(ee());n==null&&r!=null&&(n=li(r,ee()));let s=[];const u=Y(t.path),o=t.operationForChild(u),a=e.children.get(u);if(a&&o){const c=n?n.getImmediateChild(u):null,l=h0(i,u);s=s.concat(C0(o,a,c,l))}return r&&(s=s.concat(Ma(r,t,i,n))),s}}function x0(t,e,n,i){const r=e.get(ee());n==null&&r!=null&&(n=li(r,ee()));let s=[];return e.children.inorderTraversal((u,o)=>{const a=n?n.getImmediateChild(u):null,c=h0(i,u),l=t.operationForChild(u);l&&(s=s.concat(x0(l,o,a,c)))}),r&&(s=s.concat(Ma(r,t,i,n))),s}function w0(t,e){const n=e.query,i=Os(t,n);return{hashFn:()=>(jy(e)||H.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?ov(t,n._path,i):uv(t,n._path);{const s=a3(r,n);return Ao(t,n,null,s)}}}}function Os(t,e){const n=du(e);return t.queryToTagMap.get(n)}function du(t){return t._path.toString()+"$"+t._queryIdentifier}function Ua(t,e){return t.tagToQueryMap.get(e)}function Ba(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function $a(t,e,n){const i=t.syncPointTree_.get(e);A(i,"Missing sync point for query tag that we're tracking");const r=Pa(t.pendingWriteTree_,e);return Ma(i,n,r,null)}function lv(t){return t.fold((e,n,i)=>{if(n&&yn(n))return[cu(n)];{let r=[];return n&&(r=b0(n)),Ve(i,(s,u)=>{r=r.concat(u)}),r}})}function er(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iv())(t._repo,t._path):t}function dv(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=du(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function fv(){return rv++}function hv(t,e,n){const i=e._path,r=Os(t,e),s=w0(t,n),u=t.listenProvider_.startListening(er(e),r,s.hashFn,s.onComplete),o=t.syncPointTree_.subtree(i);if(r)A(!yn(o.value),"If we're adding a query, it shouldn't be shadowed");else{const a=o.fold((c,l,d)=>{if(!J(c)&&l&&yn(l))return[cu(l).query];{let f=[];return l&&(f=f.concat(b0(l).map(h=>h.query))),Ve(d,(h,_)=>{f=f.concat(_)}),f}});for(let c=0;c<a.length;++c){const l=a[c];t.listenProvider_.stopListening(er(l),Os(t,l))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new za(n)}node(){return this.node_}}class Ha{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Ha(this.syncTree_,n)}node(){return La(this.syncTree_,this.path_)}}const pv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yl=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _v(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mv(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_v=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},mv=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&A(!1,"Unexpected increment value: "+i);const r=e.node();if(A(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const u=r.getValue();return typeof u!="number"?i:u+i},gv=function(t,e,n,i){return qa(e,new Ha(n,t),i)},k0=function(t,e,n){return qa(t,new za(e),n)};function qa(t,e,n){const i=t.getPriority().val(),r=Yl(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const u=t,o=Yl(u.getValue(),e,n);return o!==u.getValue()||r!==u.getPriority().val()?new we(o,Se(r)):t}else{const u=t;return s=u,r!==u.getPriority().val()&&(s=s.updatePriority(new we(r))),u.forEachChild(ge,(o,a)=>{const c=qa(a,e.getImmediateChild(o),n);c!==a&&(s=s.updateImmediateChild(o,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ja(t,e){let n=e instanceof oe?e:new oe(e),i=t,r=Y(n);for(;r!==null;){const s=_i(i.node.children,r)||{children:{},childCount:0};i=new Wa(r,i,s),n=ce(n),r=Y(n)}return i}function Fi(t){return t.node.value}function I0(t,e){t.node.value=e,So(t)}function T0(t){return t.node.childCount>0}function bv(t){return Fi(t)===void 0&&!T0(t)}function fu(t,e){Ve(t.node.children,(n,i)=>{e(new Wa(n,t,i))})}function A0(t,e,n,i){n&&e(t),fu(t,r=>{A0(r,e,!0)})}function yv(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Nr(t){return new oe(t.parent===null?t.name:Nr(t.parent)+"/"+t.name)}function So(t){t.parent!==null&&vv(t.parent,t.name,t)}function vv(t,e,n){const i=bv(n),r=Yt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,So(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,So(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=/[\[\].#$\/\u0000-\u001F\u007F]/,Cv=/[\[\].#$\u0000-\u001F\u007F]/,Lu=10*1024*1024,S0=function(t){return typeof t=="string"&&t.length!==0&&!Ev.test(t)},D0=function(t){return typeof t=="string"&&t.length!==0&&!Cv.test(t)},xv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),D0(t)},R0=function(t,e,n,i){i&&e===void 0||Va(ua(t,"value"),e,n)},Va=function(t,e,n){const i=n instanceof oe?new z3(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+In(i));if(typeof e=="function")throw new Error(t+"contains a function "+In(i)+" with contents = "+e.toString());if(Dh(e))throw new Error(t+"contains "+e.toString()+" "+In(i));if(typeof e=="string"&&e.length>Lu/3&&iu(e)>Lu)throw new Error(t+"contains a string greater than "+Lu+" utf8 bytes "+In(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Ve(e,(u,o)=>{if(u===".value")r=!0;else if(u!==".priority"&&u!==".sv"&&(s=!0,!S0(u)))throw new Error(t+" contains an invalid key ("+u+") "+In(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);H3(i,u),Va(t,o,i),q3(i)}),r&&s)throw new Error(t+' contains ".value" child '+In(i)+" in addition to actual children.")}},P0=function(t,e,n,i){if(!D0(n))throw new Error(ua(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wv=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),P0(t,e,n)},N0=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!S0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xv(n))throw new Error(ua(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ga(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!ka(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function F0(t,e,n){Ga(t,n),O0(t,i=>ka(i,e))}function Gt(t,e,n){Ga(t,n),O0(t,i=>dt(i,e)||dt(e,i))}function O0(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(Tv(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Tv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Qi&&Pe("event: "+n.toString()),Ni(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="repo_interrupt",Sv=25;class Dv{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Iv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=As(),this.transactionQueueTree_=new Wa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Rv(t,e,n){if(t.stats_=xa(t.repoInfo_),t.forceRestClient_||f3())t.server_=new Ts(t.repoInfo_,(i,r,s,u)=>{Ql(t,i,r,s,u)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ht(t.repoInfo_,e,(i,r,s,u)=>{Ql(t,i,r,s,u)},i=>{Jl(t,i)},i=>{Pv(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=g3(t.repoInfo_,()=>new _y(t.stats_,t.server_)),t.infoData_=new ly,t.infoSyncTree_=new Gl({startListening:(i,r,s,u)=>{let o=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(o=lu(t.infoSyncTree_,i._path,a),setTimeout(()=>{u("ok")},0)),o},stopListening:()=>{}}),Ya(t,"connected",!1),t.serverSyncTree_=new Gl({startListening:(i,r,s,u)=>(t.server_.listen(i,s,r,(o,a)=>{const c=u(o,a);Gt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function M0(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ka(t){return pv({timestamp:M0(t)})}function Ql(t,e,n,i,r){t.dataUpdateCount++;const s=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let u=[];if(r)if(i){const a=ms(n,c=>Se(c));u=cv(t.serverSyncTree_,s,a,r)}else{const a=Se(n);u=av(t.serverSyncTree_,s,a,r)}else if(i){const a=ms(n,c=>Se(c));u=sv(t.serverSyncTree_,s,a)}else{const a=Se(n);u=lu(t.serverSyncTree_,s,a)}let o=s;u.length>0&&(o=hu(t,s)),Gt(t.eventQueue_,o,u)}function Jl(t,e){Ya(t,"connected",e),e===!1&&Fv(t)}function Pv(t,e){Ve(e,(n,i)=>{Ya(t,n,i)})}function Ya(t,e,n){const i=new oe("/.info/"+e),r=Se(n);t.infoData_.updateSnapshot(i,r);const s=lu(t.infoSyncTree_,i,r);Gt(t.eventQueue_,i,s)}function L0(t){return t.nextWriteId_++}function Nv(t,e,n,i,r){Qa(t,"set",{path:e.toString(),value:n,priority:i});const s=Ka(t),u=Se(n,i),o=La(t.serverSyncTree_,e),a=k0(u,o,s),c=L0(t),l=E0(t.serverSyncTree_,e,a,c,!0);Ga(t.eventQueue_,l),t.server_.put(e.toString(),u.val(!0),(f,h)=>{const _=f==="ok";_||We("set at "+e+" failed: "+f);const y=Pn(t.serverSyncTree_,c,!_);Gt(t.eventQueue_,e,y),Uv(t,r,f,h)});const d=H0(t,e);hu(t,d),Gt(t.eventQueue_,d,[])}function Fv(t){Qa(t,"onDisconnectEvents");const e=Ka(t),n=As();Co(t.onDisconnect_,ee(),(r,s)=>{const u=gv(r,s,t.serverSyncTree_,e);o0(n,r,u)});let i=[];Co(n,ee(),(r,s)=>{i=i.concat(lu(t.serverSyncTree_,r,s));const u=H0(t,r);hu(t,u)}),t.onDisconnect_=As(),Gt(t.eventQueue_,ee(),i)}function Ov(t,e,n){let i;Y(e._path)===".info"?i=Kl(t.infoSyncTree_,e,n):i=Kl(t.serverSyncTree_,e,n),F0(t.eventQueue_,e._path,i)}function Mv(t,e,n){let i;Y(e._path)===".info"?i=Ao(t.infoSyncTree_,e,n):i=Ao(t.serverSyncTree_,e,n),F0(t.eventQueue_,e._path,i)}function Lv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Av)}function Qa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function Uv(t,e,n,i){e&&Ni(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const u=new Error(s);u.code=r,e(u)}})}function U0(t,e,n){return La(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function Ja(t,e=t.transactionQueueTree_){if(e||pu(t,e),Fi(e)){const n=$0(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&Bv(t,Nr(e),n)}else T0(e)&&fu(e,n=>{Ja(t,n)})}function Bv(t,e,n){const i=n.map(c=>c.currentWriteId),r=U0(t,e,i);let s=r;const u=r.hash();for(let c=0;c<n.length;c++){const l=n[c];A(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;const d=He(e,l.path);s=s.updateChild(d,l.currentOutputSnapshotRaw)}const o=s.val(!0),a=e;t.server_.put(a.toString(),o,c=>{Qa(t,"transaction put response",{path:a.toString(),status:c});let l=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,l=l.concat(Pn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();pu(t,ja(t.transactionQueueTree_,e)),Ja(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,l);for(let f=0;f<d.length;f++)Ni(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{We("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}hu(t,e)}},u)}function hu(t,e){const n=B0(t,e),i=Nr(n),r=$0(t,n);return $v(t,r,i),i}function $v(t,e,n){if(e.length===0)return;const i=[];let r=[];const u=e.filter(o=>o.status===0).map(o=>o.currentWriteId);for(let o=0;o<e.length;o++){const a=e[o],c=He(n,a.path);let l=!1,d;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)l=!0,d=a.abortReason,r=r.concat(Pn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Sv)l=!0,d="maxretry",r=r.concat(Pn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=U0(t,a.path,u);a.currentInputSnapshot=f;const h=e[o].update(f.val());if(h!==void 0){Va("transaction failed: Data returned ",h,a.path);let _=Se(h);typeof h=="object"&&h!=null&&Yt(h,".priority")||(_=_.updatePriority(f.getPriority()));const k=a.currentWriteId,R=Ka(t),C=k0(_,f,R);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=C,a.currentWriteId=L0(t),u.splice(u.indexOf(k),1),r=r.concat(E0(t.serverSyncTree_,a.path,C,a.currentWriteId,a.applyLocally)),r=r.concat(Pn(t.serverSyncTree_,k,!0))}else l=!0,d="nodata",r=r.concat(Pn(t.serverSyncTree_,a.currentWriteId,!0))}Gt(t.eventQueue_,n,r),r=[],l&&(e[o].status=2,function(f){setTimeout(f,Math.floor(0))}(e[o].unwatcher),e[o].onComplete&&(d==="nodata"?i.push(()=>e[o].onComplete(null,!1,e[o].currentInputSnapshot)):i.push(()=>e[o].onComplete(new Error(d),!1,null))))}pu(t,t.transactionQueueTree_);for(let o=0;o<i.length;o++)Ni(i[o]);Ja(t,t.transactionQueueTree_)}function B0(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Fi(i)===void 0;)i=ja(i,n),e=ce(e),n=Y(e);return i}function $0(t,e){const n=[];return z0(t,e,n),n.sort((i,r)=>i.order-r.order),n}function z0(t,e,n){const i=Fi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);fu(e,r=>{z0(t,r,n)})}function pu(t,e){const n=Fi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,I0(e,n.length>0?n:void 0)}fu(e,i=>{pu(t,i)})}function H0(t,e){const n=Nr(B0(t,e)),i=ja(t.transactionQueueTree_,e);return yv(i,r=>{Uu(t,r)}),Uu(t,i),A0(i,r=>{Uu(t,r)}),n}function Uu(t,e){const n=Fi(e);if(n){const i=[];let r=[],s=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(A(s===u-1,"All SENT items should be at beginning of queue."),s=u,n[u].status=3,n[u].abortReason="set"):(A(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),r=r.concat(Pn(t.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));s===-1?I0(e,void 0):n.length=s+1,Gt(t.eventQueue_,Nr(e),r);for(let u=0;u<i.length;u++)Ni(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Hv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zl=function(t,e){const n=qv(t),i=n.namespace;n.domain==="firebase.com"&&Vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||i3();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Hh(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new oe(n.pathString)}},qv=function(t){let e="",n="",i="",r="",s="",u=!0,o="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(o=t.substring(0,c-1),t=t.substring(c+2));let l=t.indexOf("/");l===-1&&(l=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(l,d)),l<d&&(r=zv(t.substring(l,d)));const f=Hv(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(u=o==="https"||o==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:u,scheme:o,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Wv=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Xl.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let u=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)u+=Xl.charAt(e[r]);return A(u.length===20,"nextPushId: Length should be 20."),u}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class Vv{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return J(this._path)?null:Jh(this._path)}get ref(){return new Cn(this._repo,this._path)}get _queryIdentifier(){const e=Ml(this._queryParams),n=Ea(e);return n==="{}"?"default":n}get _queryObject(){return Ml(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof Za))return!1;const n=this._repo===e._repo,i=ka(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+$3(this._path)}}class Cn extends Za{constructor(e,n){super(e,n,new Sa,!1)}get parent(){const e=Xh(this._path);return e===null?null:new Cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ms{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),i=br(this.ref,e);return new Ms(this._node.getChild(n),i,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Ms(r,br(this.ref,i),ge)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ed(t,e){return t=Xe(t),t._checkNotDeleted("ref"),br(t._root,e)}function br(t,e){return t=Xe(t),Y(t._path)===null?wv("child","path",e):P0("child","path",e),new Cn(t._repo,ve(t._path,e))}function Kv(t,e){t=Xe(t),N0("push",t._path),R0("push",e,t._path,!0);const n=M0(t._repo),i=Wv(n),r=br(t,i),s=br(t,i);let u;return e!=null?u=Yv(s,e).then(()=>s):u=Promise.resolve(s),r.then=u.then.bind(u),r.catch=u.then.bind(u,void 0),r}function Yv(t,e){t=Xe(t),N0("set",t._path),R0("set",e,t._path,!1);const n=new nu;return Nv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Xa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new jv("value",this,new Ms(e.snapshotNode,new Cn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Vv(this,e,n):null}matches(e){return e instanceof Xa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Qv(t,e,n,i,r){const s=new Gv(n,void 0),u=new Xa(s);return Ov(t._repo,t,u),()=>Mv(t._repo,t,u)}function Jv(t,e,n,i){return Qv(t,"value",e)}Qy(Cn);nv(Cn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="FIREBASE_DATABASE_EMULATOR_HOST",Do={};let Xv=!1;function e6(t,e,n,i){t.repoInfo_=new Hh(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function t6(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let u=Zl(s,r),o=u.repoInfo,a;typeof process<"u"&&bl&&(a=bl[Zv]),a?(s=`http://${a}?ns=${o.namespace}`,u=Zl(s,r),o=u.repoInfo):u.repoInfo.secure;const c=new p3(t.name,t.options,e);kv("Invalid Firebase Database URL",u),J(u.path)||Vt("Database URL must point to the root of a Firebase Database (not including a child path).");const l=i6(o,t,c,new h3(t,n));return new r6(l,t)}function n6(t,e){const n=Do[e];(!n||n[t.key]!==t)&&Vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Lv(t),delete n[t.key]}function i6(t,e,n,i){let r=Do[e.name];r||(r={},Do[e.name]=r);let s=r[t.toURLString()];return s&&Vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Dv(t,Xv,n,i),r[t.toURLString()]=s,s}class r6{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Rv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n6(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vt("Cannot call "+e+" on a deleted database.")}}function s6(t=Kf(),e){const n=ca(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=xm("database");i&&u6(n,...i)}return n}function u6(t,e,n,i={}){t=Xe(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&Un(i,s.repoInfo_.emulatorOptions))return;Vt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new us(us.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:wm(i.mockUserToken,t.app.options.projectId);u=new us(o)}e6(s,r,i,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o6(t){J2(Di),mi(new Bn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return t6(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),pn(yl,vl,t),pn(yl,vl,"esm2017")}Ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};o6();const a6={apiKey:"AIzaSyC58enCNd-UjaZ2QEyrGySa2SJ-18c3Sko",authDomain:"young-dcfa9.firebaseapp.com",projectId:"young-dcfa9",storageBucket:"young-dcfa9.firebasestorage.app",messagingSenderId:"990780712687",appId:"1:990780712687:web:d9fab78006b0d6fdc09d1a"},q0=Gf(a6),os=Y2(q0),td=s6(q0),c6=t=>(Qs("data-v-5c477613"),t=t(),Js(),t),l6={class:"auth-button"},d6={key:1,class:"user-info"},f6=c6(()=>O("img",{alt:"logo",class:"logo",src:tm,width:"320",height:"250"},null,-1)),h6={class:"wrapper"},p6={__name:"App",setup(t){const e=ji(null);Xo(()=>{os.onAuthStateChanged(r=>{e.value=r})});const n=async()=>{try{const r=new Lt;await r2(os,r)}catch(r){console.error("Ошибка входа:",r)}},i=async()=>{try{await Ub(os)}catch(r){console.error("Ошибка выхода:",r)}};return(r,s)=>{const u=no("router-link"),o=no("router-view");return he(),me(Ue,null,[O("header",null,[O("div",l6,[e.value?(he(),me("div",d6,[O("span",null,Nn(e.value.displayName),1),O("button",{onClick:i},"Выйти")])):(he(),me("button",{key:0,onClick:n},"Войти"))]),f6,O("div",h6,[V(om,{msg:"ИДЕИ МОЛОДЕЖИ"}),O("nav",null,[V(u,{to:"/"},{default:Et(()=>[Je("Домой")]),_:1}),V(u,{to:"/about"},{default:Et(()=>[Je("О нас")]),_:1}),V(u,{to:"/welcome"},{default:Et(()=>[Je("Идеи молодежи")]),_:1}),V(u,{to:"/neuroart"},{default:Et(()=>[Je("Нейро-Арт")]),_:1}),V(u,{to:"/graffiti"},{default:Et(()=>[Je("Граффити")]),_:1}),V(u,{to:"/volonter"},{default:Et(()=>[Je("Волонтёрство")]),_:1})])])]),O("main",null,[V(o)]),V(hm)],64)}}},_6=Dt(p6,[["__scopeId","data-v-5c477613"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Xn=typeof document<"u";function W0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function m6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&W0(t.default)}const ie=Object.assign;function Bu(t,e){const n={};for(const i in e){const r=e[i];n[i]=mt(r)?r.map(t):t(r)}return n}const tr=()=>{},mt=Array.isArray,j0=/#/g,g6=/&/g,b6=/\//g,y6=/=/g,v6=/\?/g,V0=/\+/g,E6=/%5B/g,C6=/%5D/g,G0=/%5E/g,x6=/%60/g,K0=/%7B/g,w6=/%7C/g,Y0=/%7D/g,k6=/%20/g;function ec(t){return encodeURI(""+t).replace(w6,"|").replace(E6,"[").replace(C6,"]")}function I6(t){return ec(t).replace(K0,"{").replace(Y0,"}").replace(G0,"^")}function Ro(t){return ec(t).replace(V0,"%2B").replace(k6,"+").replace(j0,"%23").replace(g6,"%26").replace(x6,"`").replace(K0,"{").replace(Y0,"}").replace(G0,"^")}function T6(t){return Ro(t).replace(y6,"%3D")}function A6(t){return ec(t).replace(j0,"%23").replace(v6,"%3F")}function S6(t){return t==null?"":A6(t).replace(b6,"%2F")}function yr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const D6=/\/$/,R6=t=>t.replace(D6,"");function $u(t,e,n="/"){let i,r={},s="",u="";const o=e.indexOf("#");let a=e.indexOf("?");return o<a&&o>=0&&(a=-1),a>-1&&(i=e.slice(0,a),s=e.slice(a+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),u=e.slice(o,e.length)),i=O6(i??e,n),{fullPath:i+(s&&"?")+s+u,path:i,query:r,hash:yr(u)}}function P6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function N6(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ei(e.matched[i],n.matched[r])&&Q0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Q0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!F6(t[n],e[n]))return!1;return!0}function F6(t,e){return mt(t)?id(t,e):mt(e)?id(e,t):t===e}function id(t,e){return mt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function O6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,u,o;for(u=0;u<i.length;u++)if(o=i[u],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(u).join("/")}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var vr;(function(t){t.pop="pop",t.push="push"})(vr||(vr={}));var nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(nr||(nr={}));function M6(t){if(!t)if(Xn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),R6(t)}const L6=/^[^#]+#/;function U6(t,e){return t.replace(L6,"#")+e}function B6(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const _u=()=>({left:window.scrollX,top:window.scrollY});function $6(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=B6(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rd(t,e){return(history.state?history.state.position-e:-1)+t}const Po=new Map;function z6(t,e){Po.set(t,e)}function H6(t){const e=Po.get(t);return Po.delete(t),e}let q6=()=>location.protocol+"//"+location.host;function J0(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),nd(a,"")}return nd(n,t)+i+r}function W6(t,e,n,i){let r=[],s=[],u=null;const o=({state:f})=>{const h=J0(t,location),_=n.value,y=e.value;let k=0;if(f){if(n.value=h,e.value=f,u&&u===_){u=null;return}k=y?f.position-y.position:0}else i(h);r.forEach(R=>{R(n.value,_,{delta:k,type:vr.pop,direction:k?k>0?nr.forward:nr.back:nr.unknown})})};function a(){u=n.value}function c(f){r.push(f);const h=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(h),h}function l(){const{history:f}=window;f.state&&f.replaceState(ie({},f.state,{scroll:_u()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function sd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?_u():null}}function j6(t){const{history:e,location:n}=window,i={value:J0(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(a,c,l){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:q6()+t+a;try{e[l?"replaceState":"pushState"](c,"",f),r.value=c}catch(h){console.error(h),n[l?"replace":"assign"](f)}}function u(a,c){const l=ie({},e.state,sd(r.value.back,a,r.value.forward,!0),c,{position:r.value.position});s(a,l,!0),i.value=a}function o(a,c){const l=ie({},r.value,e.state,{forward:a,scroll:_u()});s(l.current,l,!0);const d=ie({},sd(i.value,a,null),{position:l.position+1},c);s(a,d,!1),i.value=a}return{location:i,state:r,push:o,replace:u}}function V6(t){t=M6(t);const e=j6(t),n=W6(t,e.state,e.location,e.replace);function i(s,u=!0){u||n.pauseListeners(),history.go(s)}const r=ie({location:"",base:t,go:i,createHref:U6.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function G6(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),V6(t)}function K6(t){return typeof t=="string"||t&&typeof t=="object"}function Z0(t){return typeof t=="string"||typeof t=="symbol"}const X0=Symbol("");var ud;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ud||(ud={}));function Ci(t,e){return ie(new Error,{type:t,[X0]:!0},e)}function Ot(t,e){return t instanceof Error&&X0 in t&&(e==null||!!(t.type&e))}const od="[^/]+?",Y6={sensitive:!1,strict:!1,start:!0,end:!0},Q6=/[.+*?^${}()[\]/\\]/g;function J6(t,e){const n=ie({},Y6,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const l=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Q6,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:y,optional:k,regexp:R}=f;s.push({name:_,repeatable:y,optional:k});const C=R||od;if(C!==od){h+=10;try{new RegExp(`(${C})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+x.message)}}let w=y?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(w=k&&c.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),r+=w,h+=20,k&&(h+=-8),y&&(h+=-20),C===".*"&&(h+=-50)}l.push(h)}i.push(l)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const u=new RegExp(r,n.sensitive?"":"i");function o(c){const l=c.match(u),d={};if(!l)return null;for(let f=1;f<l.length;f++){const h=l[f]||"",_=s[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function a(c){let l="",d=!1;for(const f of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const h of f)if(h.type===0)l+=h.value;else if(h.type===1){const{value:_,repeatable:y,optional:k}=h,R=_ in c?c[_]:"";if(mt(R)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=mt(R)?R.join("/"):R;if(!C)if(k)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);l+=C}}return l||"/"}return{re:u,score:i,keys:s,parse:o,stringify:a}}function Z6(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ep(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Z6(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(ad(i))return 1;if(ad(r))return-1}return r.length-i.length}function ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const X6={type:0,value:""},eE=/[a-zA-Z0-9_]/;function tE(t){if(!t)return[[]];if(t==="/")return[[X6]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function u(){s&&r.push(s),s=[]}let o=0,a,c="",l="";function d(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:l,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;o<t.length;){if(a=t[o++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),u()):a===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:a==="("?n=2:eE.test(a)?f():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&o--);break;case 2:a===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&o--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),u(),r}function nE(t,e,n){const i=J6(tE(t.path),n),r=ie(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function iE(t,e){const n=[],i=new Map;e=fd({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,f,h){const _=!h,y=ld(d);y.aliasOf=h&&h.record;const k=fd(e,d),R=[y];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of x)R.push(ld(ie({},y,{components:h?h.record.components:y.components,path:M,aliasOf:h?h.record:y})))}let C,w;for(const x of R){const{path:M}=x;if(f&&M[0]!=="/"){const $=f.record.path,K=$[$.length-1]==="/"?"":"/";x.path=f.record.path+(M&&K+M)}if(C=nE(x,f,k),h?h.alias.push(C):(w=w||C,w!==C&&w.alias.push(C),_&&d.name&&!dd(C)&&u(d.name)),tp(C)&&a(C),y.children){const $=y.children;for(let K=0;K<$.length;K++)s($[K],C,h&&h.children[K])}h=h||C}return w?()=>{u(w)}:tr}function u(d){if(Z0(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(u),f.alias.forEach(u))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(u),d.alias.forEach(u))}}function o(){return n}function a(d){const f=uE(d,n);n.splice(f,0,d),d.record.name&&!dd(d)&&i.set(d.record.name,d)}function c(d,f){let h,_={},y,k;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Ci(1,{location:d});k=h.record.name,_=ie(cd(f.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&cd(d.params,h.keys.map(w=>w.name))),y=h.stringify(_)}else if(d.path!=null)y=d.path,h=n.find(w=>w.re.test(y)),h&&(_=h.parse(y),k=h.record.name);else{if(h=f.name?i.get(f.name):n.find(w=>w.re.test(f.path)),!h)throw Ci(1,{location:d,currentLocation:f});k=h.record.name,_=ie({},f.params,d.params),y=h.stringify(_)}const R=[];let C=h;for(;C;)R.unshift(C.record),C=C.parent;return{name:k,path:y,params:_,matched:R,meta:sE(R)}}t.forEach(d=>s(d));function l(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:u,clearRoutes:l,getRoutes:o,getRecordMatcher:r}}function cd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function ld(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function rE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function dd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sE(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function fd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function uE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;ep(t,e[s])<0?i=s:n=s+1}const r=oE(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function oE(t){let e=t;for(;e=e.parent;)if(tp(e)&&ep(t,e)===0)return e}function tp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function aE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(V0," "),u=s.indexOf("="),o=yr(u<0?s:s.slice(0,u)),a=u<0?null:yr(s.slice(u+1));if(o in e){let c=e[o];mt(c)||(c=e[o]=[c]),c.push(a)}else e[o]=a}return e}function hd(t){let e="";for(let n in t){const i=t[n];if(n=T6(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(i)?i.map(s=>s&&Ro(s)):[i&&Ro(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function cE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=mt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const lE=Symbol(""),pd=Symbol(""),tc=Symbol(""),np=Symbol(""),No=Symbol("");function Hi(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function nn(t,e,n,i,r,s=u=>u()){const u=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Ci(4,{from:n,to:e})):f instanceof Error?a(f):K6(f)?a(Ci(2,{from:e,to:f})):(u&&i.enterCallbacks[r]===u&&typeof f=="function"&&u.push(f),o())},l=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(l);t.length<3&&(d=d.then(c)),d.catch(f=>a(f))})}function zu(t,e,n,i,r=s=>s()){const s=[];for(const u of t)for(const o in u.components){let a=u.components[o];if(!(e!=="beforeRouteEnter"&&!u.instances[o]))if(W0(a)){const l=(a.__vccOpts||a)[e];l&&s.push(nn(l,n,i,u,o,r))}else{let c=a();s.push(()=>c.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${o}" at "${u.path}"`);const d=m6(l)?l.default:l;u.mods[o]=l,u.components[o]=d;const h=(d.__vccOpts||d)[e];return h&&nn(h,n,i,u,o,r)()}))}}return s}function _d(t){const e=zt(tc),n=zt(np),i=ut(()=>{const a=On(t.to);return e.resolve(a)}),r=ut(()=>{const{matched:a}=i.value,{length:c}=a,l=a[c-1],d=n.matched;if(!l||!d.length)return-1;const f=d.findIndex(Ei.bind(null,l));if(f>-1)return f;const h=md(a[c-2]);return c>1&&md(l)===h&&d[d.length-1].path!==h?d.findIndex(Ei.bind(null,a[c-2])):f}),s=ut(()=>r.value>-1&&_E(n.params,i.value.params)),u=ut(()=>r.value>-1&&r.value===n.matched.length-1&&Q0(n.params,i.value.params));function o(a={}){if(pE(a)){const c=e[On(t.replace)?"replace":"push"](On(t.to)).catch(tr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ut(()=>i.value.href),isActive:s,isExactActive:u,navigate:o}}function dE(t){return t.length===1?t[0]:t}const fE=mf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_d,setup(t,{slots:e}){const n=Vs(_d(t)),{options:i}=zt(tc),r=ut(()=>({[gd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[gd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&dE(e.default(n));return t.custom?s:Of("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),hE=fE;function pE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _E(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!mt(r)||r.length!==i.length||i.some((s,u)=>s!==r[u]))return!1}return!0}function md(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gd=(t,e,n)=>t??e??n,mE=mf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=zt(No),r=ut(()=>t.route||i.value),s=zt(pd,0),u=ut(()=>{let c=On(s);const{matched:l}=r.value;let d;for(;(d=l[c])&&!d.components;)c++;return c}),o=ut(()=>r.value.matched[u.value]);Zr(pd,ut(()=>u.value+1)),Zr(lE,o),Zr(No,r);const a=ji();return Jr(()=>[a.value,o.value,t.name],([c,l,d],[f,h,_])=>{l&&(l.instances[d]=c,h&&h!==l&&c&&c===f&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!Ei(l,h)||!f)&&(l.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=t.name,d=o.value,f=d&&d.components[l];if(!f)return bd(n.default,{Component:f,route:c});const h=d.props[l],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,k=Of(f,ie({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[l]=null)},ref:a}));return bd(n.default,{Component:k,route:c})||k}}});function bd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gE=mE;function bE(t){const e=iE(t.routes,t),n=t.parseQuery||aE,i=t.stringifyQuery||hd,r=t.history,s=Hi(),u=Hi(),o=Hi(),a=m_(en);let c=en;Xn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Bu.bind(null,E=>""+E),d=Bu.bind(null,S6),f=Bu.bind(null,yr);function h(E,F){let N,z;return Z0(E)?(N=e.getRecordMatcher(E),z=F):z=E,e.addRoute(z,N)}function _(E){const F=e.getRecordMatcher(E);F&&e.removeRoute(F)}function y(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function R(E,F){if(F=ie({},F||a.value),typeof E=="string"){const b=$u(n,E,F.path),v=e.resolve({path:b.path},F),T=r.createHref(b.fullPath);return ie(b,v,{params:f(v.params),hash:yr(b.hash),redirectedFrom:void 0,href:T})}let N;if(E.path!=null)N=ie({},E,{path:$u(n,E.path,F.path).path});else{const b=ie({},E.params);for(const v in b)b[v]==null&&delete b[v];N=ie({},E,{params:d(b)}),F.params=d(F.params)}const z=e.resolve(N,F),p=E.hash||"";z.params=l(f(z.params));const m=P6(i,ie({},E,{hash:I6(p),path:z.path})),g=r.createHref(m);return ie({fullPath:m,hash:p,query:i===hd?cE(E.query):E.query||{}},z,{redirectedFrom:void 0,href:g})}function C(E){return typeof E=="string"?$u(n,E,a.value.path):ie({},E)}function w(E,F){if(c!==E)return Ci(8,{from:F,to:E})}function x(E){return K(E)}function M(E){return x(ie(C(E),{replace:!0}))}function $(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:N}=F;let z=typeof N=="function"?N(E):N;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=C(z):{path:z},z.params={}),ie({query:E.query,hash:E.hash,params:z.path!=null?{}:E.params},z)}}function K(E,F){const N=c=R(E),z=a.value,p=E.state,m=E.force,g=E.replace===!0,b=$(N);if(b)return K(ie(C(b),{state:typeof b=="object"?ie({},p,b.state):p,force:m,replace:g}),F||N);const v=N;v.redirectedFrom=F;let T;return!m&&N6(i,z,N)&&(T=Ci(16,{to:v,from:z}),bt(z,z,!0,!1)),(T?Promise.resolve(T):Ce(v,z)).catch(S=>Ot(S)?Ot(S,2)?S:Jt(S):ne(S,v,z)).then(S=>{if(S){if(Ot(S,2))return K(ie({replace:g},C(S.to),{state:typeof S.to=="object"?ie({},p,S.to.state):p,force:m}),F||v)}else S=Nt(v,z,!0,g,p);return et(v,z,S),S})}function _e(E,F){const N=w(E,F);return N?Promise.reject(N):Promise.resolve()}function be(E){const F=Gn.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(E):E()}function Ce(E,F){let N;const[z,p,m]=yE(E,F);N=zu(z.reverse(),"beforeRouteLeave",E,F);for(const b of z)b.leaveGuards.forEach(v=>{N.push(nn(v,E,F))});const g=_e.bind(null,E,F);return N.push(g),Re(N).then(()=>{N=[];for(const b of s.list())N.push(nn(b,E,F));return N.push(g),Re(N)}).then(()=>{N=zu(p,"beforeRouteUpdate",E,F);for(const b of p)b.updateGuards.forEach(v=>{N.push(nn(v,E,F))});return N.push(g),Re(N)}).then(()=>{N=[];for(const b of m)if(b.beforeEnter)if(mt(b.beforeEnter))for(const v of b.beforeEnter)N.push(nn(v,E,F));else N.push(nn(b.beforeEnter,E,F));return N.push(g),Re(N)}).then(()=>(E.matched.forEach(b=>b.enterCallbacks={}),N=zu(m,"beforeRouteEnter",E,F,be),N.push(g),Re(N))).then(()=>{N=[];for(const b of u.list())N.push(nn(b,E,F));return N.push(g),Re(N)}).catch(b=>Ot(b,8)?b:Promise.reject(b))}function et(E,F,N){o.list().forEach(z=>be(()=>z(E,F,N)))}function Nt(E,F,N,z,p){const m=w(E,F);if(m)return m;const g=F===en,b=Xn?history.state:{};N&&(z||g?r.replace(E.fullPath,ie({scroll:g&&b&&b.scroll},p)):r.push(E.fullPath,p)),a.value=E,bt(E,F,N,g),Jt()}let tt;function Qt(){tt||(tt=r.listen((E,F,N)=>{if(!Lr.listening)return;const z=R(E),p=$(z);if(p){K(ie(p,{replace:!0,force:!0}),z).catch(tr);return}c=z;const m=a.value;Xn&&z6(rd(m.fullPath,N.delta),_u()),Ce(z,m).catch(g=>Ot(g,12)?g:Ot(g,2)?(K(ie(C(g.to),{force:!0}),z).then(b=>{Ot(b,20)&&!N.delta&&N.type===vr.pop&&r.go(-1,!1)}).catch(tr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ne(g,z,m))).then(g=>{g=g||Nt(z,m,!1),g&&(N.delta&&!Ot(g,8)?r.go(-N.delta,!1):N.type===vr.pop&&Ot(g,20)&&r.go(-1,!1)),et(z,m,g)}).catch(tr)}))}let Ke=Hi(),ye=Hi(),se;function ne(E,F,N){Jt(E);const z=ye.list();return z.length?z.forEach(p=>p(E,F,N)):console.error(E),Promise.reject(E)}function Ft(){return se&&a.value!==en?Promise.resolve():new Promise((E,F)=>{Ke.add([E,F])})}function Jt(E){return se||(se=!E,Qt(),Ke.list().forEach(([F,N])=>E?N(E):F()),Ke.reset()),E}function bt(E,F,N,z){const{scrollBehavior:p}=t;if(!Xn||!p)return Promise.resolve();const m=!N&&H6(rd(E.fullPath,0))||(z||!N)&&history.state&&history.state.scroll||null;return cf().then(()=>p(E,F,m)).then(g=>g&&$6(g)).catch(g=>ne(g,E,F))}const $e=E=>r.go(E);let Vn;const Gn=new Set,Lr={currentRoute:a,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:y,resolve:R,options:t,push:x,replace:M,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:s.add,beforeResolve:u.add,afterEach:o.add,onError:ye.add,isReady:Ft,install(E){const F=this;E.component("RouterLink",hE),E.component("RouterView",gE),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>On(a)}),Xn&&!Vn&&a.value===en&&(Vn=!0,x(r.location).catch(p=>{}));const N={};for(const p in en)Object.defineProperty(N,p,{get:()=>a.value[p],enumerable:!0});E.provide(tc,F),E.provide(np,Xd(N)),E.provide(No,a);const z=E.unmount;Gn.add(E),E.unmount=function(){Gn.delete(E),Gn.size<1&&(c=en,tt&&tt(),tt=null,a.value=en,Vn=!1,se=!1),z()}}};function Re(E){return E.reduce((F,N)=>F.then(()=>be(N)),Promise.resolve())}return Lr}function yE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let u=0;u<s;u++){const o=e.matched[u];o&&(t.matched.find(c=>Ei(c,o))?i.push(o):n.push(o));const a=t.matched[u];a&&(e.matched.find(c=>Ei(c,a))||r.push(a))}return[n,i,r]}const vE={},EE={class:"home"},CE=O("h1",null,"Домашняя страница",-1),xE=[CE];function wE(t,e){return he(),me("div",EE,xE)}const kE=Dt(vE,[["render",wE]]),IE={},TE={class:"about"},AE=m1('<h1 data-v-2b309673>О нас</h1><div data-v-2b309673><h3 data-v-2b309673>Социальная платформа для молодёжи: пространство для идей и взаимодействия</h3><br data-v-2b309673><p data-v-2b309673>Социальная платформа для молодёжи — это уникальное онлайн-пространство, созданное для того, чтобы объединить активных, инициативных и неравнодушных молодых людей. Основная цель платформы — дать возможность молодёжи реализовать свой потенциал, предлагать и воплощать в жизнь социальные идеи, а также взаимодействовать с различными организациями, которые разделяют их ценности и стремления.</p><br data-v-2b309673><p class="golov" data-v-2b309673>Для чего нужна социальная платформа?</p><p data-v-2b309673>Мир меняется, и молодёжь играет ключевую роль в этих изменениях.Платформа создана для того, чтобы:</p><ul data-v-2b309673><li data-v-2b309673>Дать возможность молодым людям выражать свои идеи и инициативы.</li><li data-v-2b309673>Объединить единомышленников для совместной работы над социальными проектами.</li><li data-v-2b309673>Предоставить доступ к ресурсам и поддержке от социальных организаций и правительства региона.</li><li data-v-2b309673>Вдохновлять на создание позитивных изменений в обществе.</li><li data-v-2b309673>Наблюдать за новыми арт-объектами – граффити в городе.</li></ul><br data-v-2b309673><p class="golov" data-v-2b309673>Что можно делать на платформе?</p><br data-v-2b309673><ol data-v-2b309673><li data-v-2b309673><p class="li" data-v-2b309673>Взаимодействовать с социальными организациями</p> На платформе представлены различные социальные организации, которые занимаются образованием, экологией, благотворительностью, защитой прав человека и многим другим. Вы можете: <ul data-v-2b309673><li data-v-2b309673>Узнавать об их деятельности.</li><li data-v-2b309673>Участвовать в их проектах и мероприятиях.</li><li data-v-2b309673>Получать поддержку для реализации своих идей.</li></ul></li><li data-v-2b309673><p class="li" data-v-2b309673>Предлагать свои социальные идеи</p> Платформа разделена на тематические разделы, где можно публиковать свои идеи и проекты. Например: <ul data-v-2b309673><li data-v-2b309673>Идеи по росписи граффити: предлагай места для новых работ.</li><li data-v-2b309673>Культура и искусство: создавайте инициативы, которые вдохновляют и объединяют людей.</li><li data-v-2b309673>Идеи по благоустройству: предлагайте идеи по благоустройству дворов, парков, скверов, зон отдыха и различных мест в регионе.</li></ul> Каждая идея может быть поддержана другими пользователями, а также получить экспертную оценку и помощь от организаций. </li><li data-v-2b309673><p class="li" data-v-2b309673>Находить единомышленников и создавать команды</p> Платформа позволяет находить людей с похожими интересами, объединяться в команды и вместе работать над реализацией проектов.</li><li data-v-2b309673><p class="li" data-v-2b309673>Связаться с правительством региона.</p> На платформе есть возможность оставить заявку в правительство региона, а после получить официальный ответ.</li><li data-v-2b309673><p class="li" data-v-2b309673>Выкладывать новости о культурных и образовательных мероприятиях.</p> Платформа позволяет делится и обсуждать последние новости о культурных и образовательных мероприятиях, а также наблюдать за реализацией твоих инициатив через новости.</li></ol><p class="golov" data-v-2b309673>Почему это важно?</p><p data-v-2b309673>Социальная платформа для молодёжи — это не просто инструмент для общения, это пространство для действий. Здесь каждый может стать частью чего-то большего, внести свой вклад в развитие общества и найти поддержку для своих инициатив.</p><br data-v-2b309673><p data-v-2b309673>Присоединяйтесь к платформе, предлагайте свои идеи, вдохновляйтесь и меняйте мир к лучшему вместе с нами!</p></div>',2),SE=[AE];function DE(t,e){return he(),me("div",TE,SE)}const RE=Dt(IE,[["render",DE],["__scopeId","data-v-2b309673"]]),PE={},NE={class:"item"},FE={class:"details"};function OE(t,e){return he(),me("div",NE,[O("i",null,[Eu(t.$slots,"icon",{},void 0)]),O("div",FE,[O("h3",null,[Eu(t.$slots,"heading",{},void 0)]),Eu(t.$slots,"default",{},void 0)])])}const ME=Dt(PE,[["render",OE],["__scopeId","data-v-7b10b192"]]),ip=t=>(Qs("data-v-3920110c"),t=t(),Js(),t),LE={class:"comments-section"},UE=ip(()=>O("h2",null,"Идеи молодежи",-1)),BE={key:0,class:"comment-form"},$E={key:1,class:"auth-prompt"},zE=ip(()=>O("p",null,"Чтобы оставить комментарий, пожалуйста, войдите в систему.",-1)),HE=[zE],qE={class:"comments-list"},WE={__name:"TheWelcome",setup(t){const e=ji(""),n=ji([]),i=ji(null);Xo(()=>{os.onAuthStateChanged(u=>{i.value=u});const s=ed(td,"comments");Jv(s,u=>{const o=u.val();n.value=o?Object.values(o):[]})});const r=()=>{!e.value.trim()||!i.value||(Kv(ed(td,"comments"),{text:e.value,author:i.value.displayName,authorId:i.value.uid,timestamp:Date.now()}),e.value="")};return(s,u)=>(he(),me("div",LE,[UE,i.value?(he(),me("div",BE,[F_(O("textarea",{"onUpdate:modelValue":u[0]||(u[0]=o=>e.value=o),placeholder:"Поделитесь своей идеей..."},null,512),[[G1,e.value]]),O("button",{onClick:r},"Отправить")])):(he(),me("div",$E,HE)),O("div",qE,[(he(!0),me(Ue,null,Y_(n.value,(o,a)=>(he(),me("div",{key:a,class:"comment"},[O("strong",null,Nn(o.author)+":",1),O("p",null,Nn(o.text),1),O("small",null,Nn(new Date(o.timestamp).toLocaleString()),1)]))),128))])]))}},jE=Dt(WE,[["__scopeId","data-v-3920110c"]]),VE={props:{imageSrc:{type:String,required:!0},imageWidth:{type:String,default:"200px"}},data(){return{isModalOpen:!1}},methods:{openModal(){this.isModalOpen=!0,document.body.style.overflow="hidden"},closeModal(){this.isModalOpen=!1,document.body.style.overflow=""}}},GE=["src"],KE={class:"modal-content"},YE=["src"];function QE(t,e,n,i,r,s){return he(),me("div",null,[O("img",{src:n.imageSrc,alt:"Click to enlarge",style:Ws({width:n.imageWidth}),class:"clickable-image",onClick:e[0]||(e[0]=(...u)=>s.openModal&&s.openModal(...u))},null,12,GE),r.isModalOpen?(he(),me("div",{key:0,class:"modal-overlay",onClick:e[2]||(e[2]=(...u)=>s.closeModal&&s.closeModal(...u))},[O("div",KE,[O("img",{src:n.imageSrc,alt:"Full size",class:"full-size-image"},null,8,YE),O("button",{class:"close-button",onClick:e[1]||(e[1]=Q1((...u)=>s.closeModal&&s.closeModal(...u),["stop"]))},"×")])])):ts("",!0)])}const Qe=Dt(VE,[["render",QE],["__scopeId","data-v-7f6ef325"]]),yd={};function JE(t){let e=yd[t];if(e)return e;e=yd[t]=[];for(let n=0;n<128;n++){const i=String.fromCharCode(n);e.push(i)}for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);e[i]="%"+("0"+i.toString(16).toUpperCase()).slice(-2)}return e}function xi(t,e){typeof e!="string"&&(e=xi.defaultChars);const n=JE(e);return t.replace(/(%[a-f0-9]{2})+/gi,function(i){let r="";for(let s=0,u=i.length;s<u;s+=3){const o=parseInt(i.slice(s+1,s+3),16);if(o<128){r+=n[o];continue}if((o&224)===192&&s+3<u){const a=parseInt(i.slice(s+4,s+6),16);if((a&192)===128){const c=o<<6&1984|a&63;c<128?r+="��":r+=String.fromCharCode(c),s+=3;continue}}if((o&240)===224&&s+6<u){const a=parseInt(i.slice(s+4,s+6),16),c=parseInt(i.slice(s+7,s+9),16);if((a&192)===128&&(c&192)===128){const l=o<<12&61440|a<<6&4032|c&63;l<2048||l>=55296&&l<=57343?r+="���":r+=String.fromCharCode(l),s+=6;continue}}if((o&248)===240&&s+9<u){const a=parseInt(i.slice(s+4,s+6),16),c=parseInt(i.slice(s+7,s+9),16),l=parseInt(i.slice(s+10,s+12),16);if((a&192)===128&&(c&192)===128&&(l&192)===128){let d=o<<18&1835008|a<<12&258048|c<<6&4032|l&63;d<65536||d>1114111?r+="����":(d-=65536,r+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),s+=9;continue}}r+="�"}return r})}xi.defaultChars=";/?:@&=+$,#";xi.componentChars="";const vd={};function ZE(t){let e=vd[t];if(e)return e;e=vd[t]=[];for(let n=0;n<128;n++){const i=String.fromCharCode(n);/^[0-9a-z]$/i.test(i)?e.push(i):e.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<t.length;n++)e[t.charCodeAt(n)]=t[n];return e}function Fr(t,e,n){typeof e!="string"&&(n=e,e=Fr.defaultChars),typeof n>"u"&&(n=!0);const i=ZE(e);let r="";for(let s=0,u=t.length;s<u;s++){const o=t.charCodeAt(s);if(n&&o===37&&s+2<u&&/^[0-9a-f]{2}$/i.test(t.slice(s+1,s+3))){r+=t.slice(s,s+3),s+=2;continue}if(o<128){r+=i[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&s+1<u){const a=t.charCodeAt(s+1);if(a>=56320&&a<=57343){r+=encodeURIComponent(t[s]+t[s+1]),s++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(t[s])}return r}Fr.defaultChars=";/?:@&=+$,-_.!~*'()#";Fr.componentChars="-_.!~*'()";function nc(t){let e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&t.hostname.indexOf(":")!==-1?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||"",e}function Ls(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const XE=/^([a-z0-9.+-]+:)/i,eC=/:[0-9]*$/,tC=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,nC=["<",">",'"',"`"," ","\r",`
`,"	"],iC=["{","}","|","\\","^","`"].concat(nC),rC=["'"].concat(iC),Ed=["%","/","?",";","#"].concat(rC),Cd=["/","?","#"],sC=255,xd=/^[+a-z0-9A-Z_-]{0,63}$/,uC=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,wd={javascript:!0,"javascript:":!0},kd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ic(t,e){if(t&&t instanceof Ls)return t;const n=new Ls;return n.parse(t,e),n}Ls.prototype.parse=function(t,e){let n,i,r,s=t;if(s=s.trim(),!e&&t.split("#").length===1){const c=tC.exec(s);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let u=XE.exec(s);if(u&&(u=u[0],n=u.toLowerCase(),this.protocol=u,s=s.substr(u.length)),(e||u||s.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=s.substr(0,2)==="//",r&&!(u&&wd[u])&&(s=s.substr(2),this.slashes=!0)),!wd[u]&&(r||u&&!kd[u])){let c=-1;for(let _=0;_<Cd.length;_++)i=s.indexOf(Cd[_]),i!==-1&&(c===-1||i<c)&&(c=i);let l,d;c===-1?d=s.lastIndexOf("@"):d=s.lastIndexOf("@",c),d!==-1&&(l=s.slice(0,d),s=s.slice(d+1),this.auth=l),c=-1;for(let _=0;_<Ed.length;_++)i=s.indexOf(Ed[_]),i!==-1&&(c===-1||i<c)&&(c=i);c===-1&&(c=s.length),s[c-1]===":"&&c--;const f=s.slice(0,c);s=s.slice(c),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const _=this.hostname.split(/\./);for(let y=0,k=_.length;y<k;y++){const R=_[y];if(R&&!R.match(xd)){let C="";for(let w=0,x=R.length;w<x;w++)R.charCodeAt(w)>127?C+="x":C+=R[w];if(!C.match(xd)){const w=_.slice(0,y),x=_.slice(y+1),M=R.match(uC);M&&(w.push(M[1]),x.unshift(M[2])),x.length&&(s=x.join(".")+s),this.hostname=w.join(".");break}}}}this.hostname.length>sC&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const o=s.indexOf("#");o!==-1&&(this.hash=s.substr(o),s=s.slice(0,o));const a=s.indexOf("?");return a!==-1&&(this.search=s.substr(a),s=s.slice(0,a)),s&&(this.pathname=s),kd[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Ls.prototype.parseHost=function(t){let e=eC.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};const oC=Object.freeze(Object.defineProperty({__proto__:null,decode:xi,encode:Fr,format:nc,parse:ic},Symbol.toStringTag,{value:"Module"})),rp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,sp=/[\0-\x1F\x7F-\x9F]/,aC=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,rc=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,up=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,op=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,cC=Object.freeze(Object.defineProperty({__proto__:null,Any:rp,Cc:sp,Cf:aC,P:rc,S:up,Z:op},Symbol.toStringTag,{value:"Module"})),lC=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(t=>t.charCodeAt(0))),dC=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(t=>t.charCodeAt(0)));var Hu;const fC=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),hC=(Hu=String.fromCodePoint)!==null&&Hu!==void 0?Hu:function(t){let e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|t&1023),e+=String.fromCharCode(t),e};function pC(t){var e;return t>=55296&&t<=57343||t>1114111?65533:(e=fC.get(t))!==null&&e!==void 0?e:t}var Te;(function(t){t[t.NUM=35]="NUM",t[t.SEMI=59]="SEMI",t[t.EQUALS=61]="EQUALS",t[t.ZERO=48]="ZERO",t[t.NINE=57]="NINE",t[t.LOWER_A=97]="LOWER_A",t[t.LOWER_F=102]="LOWER_F",t[t.LOWER_X=120]="LOWER_X",t[t.LOWER_Z=122]="LOWER_Z",t[t.UPPER_A=65]="UPPER_A",t[t.UPPER_F=70]="UPPER_F",t[t.UPPER_Z=90]="UPPER_Z"})(Te||(Te={}));const _C=32;var cn;(function(t){t[t.VALUE_LENGTH=49152]="VALUE_LENGTH",t[t.BRANCH_LENGTH=16256]="BRANCH_LENGTH",t[t.JUMP_TABLE=127]="JUMP_TABLE"})(cn||(cn={}));function Fo(t){return t>=Te.ZERO&&t<=Te.NINE}function mC(t){return t>=Te.UPPER_A&&t<=Te.UPPER_F||t>=Te.LOWER_A&&t<=Te.LOWER_F}function gC(t){return t>=Te.UPPER_A&&t<=Te.UPPER_Z||t>=Te.LOWER_A&&t<=Te.LOWER_Z||Fo(t)}function bC(t){return t===Te.EQUALS||gC(t)}var xe;(function(t){t[t.EntityStart=0]="EntityStart",t[t.NumericStart=1]="NumericStart",t[t.NumericDecimal=2]="NumericDecimal",t[t.NumericHex=3]="NumericHex",t[t.NamedEntity=4]="NamedEntity"})(xe||(xe={}));var an;(function(t){t[t.Legacy=0]="Legacy",t[t.Strict=1]="Strict",t[t.Attribute=2]="Attribute"})(an||(an={}));class yC{constructor(e,n,i){this.decodeTree=e,this.emitCodePoint=n,this.errors=i,this.state=xe.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=an.Strict}startEntity(e){this.decodeMode=e,this.state=xe.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,n){switch(this.state){case xe.EntityStart:return e.charCodeAt(n)===Te.NUM?(this.state=xe.NumericStart,this.consumed+=1,this.stateNumericStart(e,n+1)):(this.state=xe.NamedEntity,this.stateNamedEntity(e,n));case xe.NumericStart:return this.stateNumericStart(e,n);case xe.NumericDecimal:return this.stateNumericDecimal(e,n);case xe.NumericHex:return this.stateNumericHex(e,n);case xe.NamedEntity:return this.stateNamedEntity(e,n)}}stateNumericStart(e,n){return n>=e.length?-1:(e.charCodeAt(n)|_C)===Te.LOWER_X?(this.state=xe.NumericHex,this.consumed+=1,this.stateNumericHex(e,n+1)):(this.state=xe.NumericDecimal,this.stateNumericDecimal(e,n))}addToNumericResult(e,n,i,r){if(n!==i){const s=i-n;this.result=this.result*Math.pow(r,s)+parseInt(e.substr(n,s),r),this.consumed+=s}}stateNumericHex(e,n){const i=n;for(;n<e.length;){const r=e.charCodeAt(n);if(Fo(r)||mC(r))n+=1;else return this.addToNumericResult(e,i,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,i,n,16),-1}stateNumericDecimal(e,n){const i=n;for(;n<e.length;){const r=e.charCodeAt(n);if(Fo(r))n+=1;else return this.addToNumericResult(e,i,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,i,n,10),-1}emitNumericEntity(e,n){var i;if(this.consumed<=n)return(i=this.errors)===null||i===void 0||i.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Te.SEMI)this.consumed+=1;else if(this.decodeMode===an.Strict)return 0;return this.emitCodePoint(pC(this.result),this.consumed),this.errors&&(e!==Te.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,n){const{decodeTree:i}=this;let r=i[this.treeIndex],s=(r&cn.VALUE_LENGTH)>>14;for(;n<e.length;n++,this.excess++){const u=e.charCodeAt(n);if(this.treeIndex=vC(i,r,this.treeIndex+Math.max(1,s),u),this.treeIndex<0)return this.result===0||this.decodeMode===an.Attribute&&(s===0||bC(u))?0:this.emitNotTerminatedNamedEntity();if(r=i[this.treeIndex],s=(r&cn.VALUE_LENGTH)>>14,s!==0){if(u===Te.SEMI)return this.emitNamedEntityData(this.treeIndex,s,this.consumed+this.excess);this.decodeMode!==an.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:n,decodeTree:i}=this,r=(i[n]&cn.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,n,i){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[e]&~cn.VALUE_LENGTH:r[e+1],i),n===3&&this.emitCodePoint(r[e+2],i),i}end(){var e;switch(this.state){case xe.NamedEntity:return this.result!==0&&(this.decodeMode!==an.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case xe.NumericDecimal:return this.emitNumericEntity(0,2);case xe.NumericHex:return this.emitNumericEntity(0,3);case xe.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case xe.EntityStart:return 0}}}function ap(t){let e="";const n=new yC(t,i=>e+=hC(i));return function(r,s){let u=0,o=0;for(;(o=r.indexOf("&",o))>=0;){e+=r.slice(u,o),n.startEntity(s);const c=n.write(r,o+1);if(c<0){u=o+n.end();break}u=o+c,o=c===0?u+1:u}const a=e+r.slice(u);return e="",a}}function vC(t,e,n,i){const r=(e&cn.BRANCH_LENGTH)>>7,s=e&cn.JUMP_TABLE;if(r===0)return s!==0&&i===s?n:-1;if(s){const a=i-s;return a<0||a>=r?-1:t[n+a]-1}let u=n,o=u+r-1;for(;u<=o;){const a=u+o>>>1,c=t[a];if(c<i)u=a+1;else if(c>i)o=a-1;else return t[a+r]}return-1}const EC=ap(lC);ap(dC);function cp(t,e=an.Legacy){return EC(t,e)}function CC(t){return Object.prototype.toString.call(t)}function sc(t){return CC(t)==="[object String]"}const xC=Object.prototype.hasOwnProperty;function wC(t,e){return xC.call(t,e)}function mu(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(i){t[i]=n[i]})}}),t}function lp(t,e,n){return[].concat(t.slice(0,e),n,t.slice(e+1))}function uc(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function Us(t){if(t>65535){t-=65536;const e=55296+(t>>10),n=56320+(t&1023);return String.fromCharCode(e,n)}return String.fromCharCode(t)}const dp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,kC=/&([a-z#][a-z0-9]{1,31});/gi,IC=new RegExp(dp.source+"|"+kC.source,"gi"),TC=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function AC(t,e){if(e.charCodeAt(0)===35&&TC.test(e)){const i=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return uc(i)?Us(i):t}const n=cp(t);return n!==t?n:t}function SC(t){return t.indexOf("\\")<0?t:t.replace(dp,"$1")}function wi(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(IC,function(e,n,i){return n||AC(e,i)})}const DC=/[&<>"]/,RC=/[&<>"]/g,PC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function NC(t){return PC[t]}function vn(t){return DC.test(t)?t.replace(RC,NC):t}const FC=/[.?*+^$[\]\\(){}|-]/g;function OC(t){return t.replace(FC,"\\$&")}function le(t){switch(t){case 9:case 32:return!0}return!1}function Er(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Cr(t){return rc.test(t)||up.test(t)}function xr(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function gu(t){return t=t.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(t=t.replace(/ẞ/g,"ß")),t.toLowerCase().toUpperCase()}const MC={mdurl:oC,ucmicro:cC},LC=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:lp,assign:mu,escapeHtml:vn,escapeRE:OC,fromCodePoint:Us,has:wC,isMdAsciiPunct:xr,isPunctChar:Cr,isSpace:le,isString:sc,isValidEntityCode:uc,isWhiteSpace:Er,lib:MC,normalizeReference:gu,unescapeAll:wi,unescapeMd:SC},Symbol.toStringTag,{value:"Module"}));function UC(t,e,n){let i,r,s,u;const o=t.posMax,a=t.pos;for(t.pos=e+1,i=1;t.pos<o;){if(s=t.src.charCodeAt(t.pos),s===93&&(i--,i===0)){r=!0;break}if(u=t.pos,t.md.inline.skipToken(t),s===91){if(u===t.pos-1)i++;else if(n)return t.pos=a,-1}}let c=-1;return r&&(c=t.pos),t.pos=a,c}function BC(t,e,n){let i,r=e;const s={ok:!1,pos:0,str:""};if(t.charCodeAt(r)===60){for(r++;r<n;){if(i=t.charCodeAt(r),i===10||i===60)return s;if(i===62)return s.pos=r+1,s.str=wi(t.slice(e+1,r)),s.ok=!0,s;if(i===92&&r+1<n){r+=2;continue}r++}return s}let u=0;for(;r<n&&(i=t.charCodeAt(r),!(i===32||i<32||i===127));){if(i===92&&r+1<n){if(t.charCodeAt(r+1)===32)break;r+=2;continue}if(i===40&&(u++,u>32))return s;if(i===41){if(u===0)break;u--}r++}return e===r||u!==0||(s.str=wi(t.slice(e,r)),s.pos=r,s.ok=!0),s}function $C(t,e,n,i){let r,s=e;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(i)u.str=i.str,u.marker=i.marker;else{if(s>=n)return u;let o=t.charCodeAt(s);if(o!==34&&o!==39&&o!==40)return u;e++,s++,o===40&&(o=41),u.marker=o}for(;s<n;){if(r=t.charCodeAt(s),r===u.marker)return u.pos=s+1,u.str+=wi(t.slice(e,s)),u.ok=!0,u;if(r===40&&u.marker===41)return u;r===92&&s+1<n&&s++,s++}return u.can_continue=!0,u.str+=wi(t.slice(e,s)),u}const zC=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:BC,parseLinkLabel:UC,parseLinkTitle:$C},Symbol.toStringTag,{value:"Module"})),Rt={};Rt.code_inline=function(t,e,n,i,r){const s=t[e];return"<code"+r.renderAttrs(s)+">"+vn(s.content)+"</code>"};Rt.code_block=function(t,e,n,i,r){const s=t[e];return"<pre"+r.renderAttrs(s)+"><code>"+vn(t[e].content)+`</code></pre>
`};Rt.fence=function(t,e,n,i,r){const s=t[e],u=s.info?wi(s.info).trim():"";let o="",a="";if(u){const l=u.split(/(\s+)/g);o=l[0],a=l.slice(2).join("")}let c;if(n.highlight?c=n.highlight(s.content,o,a)||vn(s.content):c=vn(s.content),c.indexOf("<pre")===0)return c+`
`;if(u){const l=s.attrIndex("class"),d=s.attrs?s.attrs.slice():[];l<0?d.push(["class",n.langPrefix+o]):(d[l]=d[l].slice(),d[l][1]+=" "+n.langPrefix+o);const f={attrs:d};return`<pre><code${r.renderAttrs(f)}>${c}</code></pre>
`}return`<pre><code${r.renderAttrs(s)}>${c}</code></pre>
`};Rt.image=function(t,e,n,i,r){const s=t[e];return s.attrs[s.attrIndex("alt")][1]=r.renderInlineAsText(s.children,n,i),r.renderToken(t,e,n)};Rt.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};Rt.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Rt.text=function(t,e){return vn(t[e].content)};Rt.html_block=function(t,e){return t[e].content};Rt.html_inline=function(t,e){return t[e].content};function Oi(){this.rules=mu({},Rt)}Oi.prototype.renderAttrs=function(e){let n,i,r;if(!e.attrs)return"";for(r="",n=0,i=e.attrs.length;n<i;n++)r+=" "+vn(e.attrs[n][0])+'="'+vn(e.attrs[n][1])+'"';return r};Oi.prototype.renderToken=function(e,n,i){const r=e[n];let s="";if(r.hidden)return"";r.block&&r.nesting!==-1&&n&&e[n-1].hidden&&(s+=`
`),s+=(r.nesting===-1?"</":"<")+r.tag,s+=this.renderAttrs(r),r.nesting===0&&i.xhtmlOut&&(s+=" /");let u=!1;if(r.block&&(u=!0,r.nesting===1&&n+1<e.length)){const o=e[n+1];(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===r.tag)&&(u=!1)}return s+=u?`>
`:">",s};Oi.prototype.renderInline=function(t,e,n){let i="";const r=this.rules;for(let s=0,u=t.length;s<u;s++){const o=t[s].type;typeof r[o]<"u"?i+=r[o](t,s,e,n,this):i+=this.renderToken(t,s,e)}return i};Oi.prototype.renderInlineAsText=function(t,e,n){let i="";for(let r=0,s=t.length;r<s;r++)switch(t[r].type){case"text":i+=t[r].content;break;case"image":i+=this.renderInlineAsText(t[r].children,e,n);break;case"html_inline":case"html_block":i+=t[r].content;break;case"softbreak":case"hardbreak":i+=`
`;break}return i};Oi.prototype.render=function(t,e,n){let i="";const r=this.rules;for(let s=0,u=t.length;s<u;s++){const o=t[s].type;o==="inline"?i+=this.renderInline(t[s].children,e,n):typeof r[o]<"u"?i+=r[o](t,s,e,n,this):i+=this.renderToken(t,s,e,n)}return i};function Ge(){this.__rules__=[],this.__cache__=null}Ge.prototype.__find__=function(t){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};Ge.prototype.__compile__=function(){const t=this,e=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(i){e.indexOf(i)<0&&e.push(i)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(i){i.enabled&&(n&&i.alt.indexOf(n)<0||t.__cache__[n].push(i.fn))})})};Ge.prototype.at=function(t,e,n){const i=this.__find__(t),r=n||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__[i].fn=e,this.__rules__[i].alt=r.alt||[],this.__cache__=null};Ge.prototype.before=function(t,e,n,i){const r=this.__find__(t),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(r,0,{name:e,enabled:!0,fn:n,alt:s.alt||[]}),this.__cache__=null};Ge.prototype.after=function(t,e,n,i){const r=this.__find__(t),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(r+1,0,{name:e,enabled:!0,fn:n,alt:s.alt||[]}),this.__cache__=null};Ge.prototype.push=function(t,e,n){const i=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:i.alt||[]}),this.__cache__=null};Ge.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(i){const r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!0,n.push(i)},this),this.__cache__=null,n};Ge.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)};Ge.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(i){const r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!1,n.push(i)},this),this.__cache__=null,n};Ge.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};function gt(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}gt.prototype.attrIndex=function(e){if(!this.attrs)return-1;const n=this.attrs;for(let i=0,r=n.length;i<r;i++)if(n[i][0]===e)return i;return-1};gt.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};gt.prototype.attrSet=function(e,n){const i=this.attrIndex(e),r=[e,n];i<0?this.attrPush(r):this.attrs[i]=r};gt.prototype.attrGet=function(e){const n=this.attrIndex(e);let i=null;return n>=0&&(i=this.attrs[n][1]),i};gt.prototype.attrJoin=function(e,n){const i=this.attrIndex(e);i<0?this.attrPush([e,n]):this.attrs[i][1]=this.attrs[i][1]+" "+n};function fp(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}fp.prototype.Token=gt;const HC=/\r\n?|\n/g,qC=/\0/g;function WC(t){let e;e=t.src.replace(HC,`
`),e=e.replace(qC,"�"),t.src=e}function jC(t){let e;t.inlineMode?(e=new t.Token("inline","",0),e.content=t.src,e.map=[0,1],e.children=[],t.tokens.push(e)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}function VC(t){const e=t.tokens;for(let n=0,i=e.length;n<i;n++){const r=e[n];r.type==="inline"&&t.md.inline.parse(r.content,t.md,t.env,r.children)}}function GC(t){return/^<a[>\s]/i.test(t)}function KC(t){return/^<\/a\s*>/i.test(t)}function YC(t){const e=t.tokens;if(t.md.options.linkify)for(let n=0,i=e.length;n<i;n++){if(e[n].type!=="inline"||!t.md.linkify.pretest(e[n].content))continue;let r=e[n].children,s=0;for(let u=r.length-1;u>=0;u--){const o=r[u];if(o.type==="link_close"){for(u--;r[u].level!==o.level&&r[u].type!=="link_open";)u--;continue}if(o.type==="html_inline"&&(GC(o.content)&&s>0&&s--,KC(o.content)&&s++),!(s>0)&&o.type==="text"&&t.md.linkify.test(o.content)){const a=o.content;let c=t.md.linkify.match(a);const l=[];let d=o.level,f=0;c.length>0&&c[0].index===0&&u>0&&r[u-1].type==="text_special"&&(c=c.slice(1));for(let h=0;h<c.length;h++){const _=c[h].url,y=t.md.normalizeLink(_);if(!t.md.validateLink(y))continue;let k=c[h].text;c[h].schema?c[h].schema==="mailto:"&&!/^mailto:/i.test(k)?k=t.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):k=t.md.normalizeLinkText(k):k=t.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,"");const R=c[h].index;if(R>f){const M=new t.Token("text","",0);M.content=a.slice(f,R),M.level=d,l.push(M)}const C=new t.Token("link_open","a",1);C.attrs=[["href",y]],C.level=d++,C.markup="linkify",C.info="auto",l.push(C);const w=new t.Token("text","",0);w.content=k,w.level=d,l.push(w);const x=new t.Token("link_close","a",-1);x.level=--d,x.markup="linkify",x.info="auto",l.push(x),f=c[h].lastIndex}if(f<a.length){const h=new t.Token("text","",0);h.content=a.slice(f),h.level=d,l.push(h)}e[n].children=r=lp(r,u,l)}}}}const hp=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,QC=/\((c|tm|r)\)/i,JC=/\((c|tm|r)\)/ig,ZC={c:"©",r:"®",tm:"™"};function XC(t,e){return ZC[e.toLowerCase()]}function ex(t){let e=0;for(let n=t.length-1;n>=0;n--){const i=t[n];i.type==="text"&&!e&&(i.content=i.content.replace(JC,XC)),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function tx(t){let e=0;for(let n=t.length-1;n>=0;n--){const i=t[n];i.type==="text"&&!e&&hp.test(i.content)&&(i.content=i.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function nx(t){let e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)t.tokens[e].type==="inline"&&(QC.test(t.tokens[e].content)&&ex(t.tokens[e].children),hp.test(t.tokens[e].content)&&tx(t.tokens[e].children))}const ix=/['"]/,Id=/['"]/g,Td="’";function Gr(t,e,n){return t.slice(0,e)+n+t.slice(e+1)}function rx(t,e){let n;const i=[];for(let r=0;r<t.length;r++){const s=t[r],u=t[r].level;for(n=i.length-1;n>=0&&!(i[n].level<=u);n--);if(i.length=n+1,s.type!=="text")continue;let o=s.content,a=0,c=o.length;e:for(;a<c;){Id.lastIndex=a;const l=Id.exec(o);if(!l)break;let d=!0,f=!0;a=l.index+1;const h=l[0]==="'";let _=32;if(l.index-1>=0)_=o.charCodeAt(l.index-1);else for(n=r-1;n>=0&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n--)if(t[n].content){_=t[n].content.charCodeAt(t[n].content.length-1);break}let y=32;if(a<c)y=o.charCodeAt(a);else for(n=r+1;n<t.length&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n++)if(t[n].content){y=t[n].content.charCodeAt(0);break}const k=xr(_)||Cr(String.fromCharCode(_)),R=xr(y)||Cr(String.fromCharCode(y)),C=Er(_),w=Er(y);if(w?d=!1:R&&(C||k||(d=!1)),C?f=!1:k&&(w||R||(f=!1)),y===34&&l[0]==='"'&&_>=48&&_<=57&&(f=d=!1),d&&f&&(d=k,f=R),!d&&!f){h&&(s.content=Gr(s.content,l.index,Td));continue}if(f)for(n=i.length-1;n>=0;n--){let x=i[n];if(i[n].level<u)break;if(x.single===h&&i[n].level===u){x=i[n];let M,$;h?(M=e.md.options.quotes[2],$=e.md.options.quotes[3]):(M=e.md.options.quotes[0],$=e.md.options.quotes[1]),s.content=Gr(s.content,l.index,$),t[x.token].content=Gr(t[x.token].content,x.pos,M),a+=$.length-1,x.token===r&&(a+=M.length-1),o=s.content,c=o.length,i.length=n;continue e}}d?i.push({token:r,pos:l.index,single:h,level:u}):f&&h&&(s.content=Gr(s.content,l.index,Td))}}}function sx(t){if(t.md.options.typographer)for(let e=t.tokens.length-1;e>=0;e--)t.tokens[e].type!=="inline"||!ix.test(t.tokens[e].content)||rx(t.tokens[e].children,t)}function ux(t){let e,n;const i=t.tokens,r=i.length;for(let s=0;s<r;s++){if(i[s].type!=="inline")continue;const u=i[s].children,o=u.length;for(e=0;e<o;e++)u[e].type==="text_special"&&(u[e].type="text");for(e=n=0;e<o;e++)u[e].type==="text"&&e+1<o&&u[e+1].type==="text"?u[e+1].content=u[e].content+u[e+1].content:(e!==n&&(u[n]=u[e]),n++);e!==n&&(u.length=n)}}const qu=[["normalize",WC],["block",jC],["inline",VC],["linkify",YC],["replacements",nx],["smartquotes",sx],["text_join",ux]];function oc(){this.ruler=new Ge;for(let t=0;t<qu.length;t++)this.ruler.push(qu[t][0],qu[t][1])}oc.prototype.process=function(t){const e=this.ruler.getRules("");for(let n=0,i=e.length;n<i;n++)e[n](t)};oc.prototype.State=fp;function Pt(t,e,n,i){this.src=t,this.md=e,this.env=n,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let s=0,u=0,o=0,a=0,c=r.length,l=!1;u<c;u++){const d=r.charCodeAt(u);if(!l)if(le(d)){o++,d===9?a+=4-a%4:a++;continue}else l=!0;(d===10||u===c-1)&&(d!==10&&u++,this.bMarks.push(s),this.eMarks.push(u),this.tShift.push(o),this.sCount.push(a),this.bsCount.push(0),l=!1,o=0,a=0,s=u+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Pt.prototype.push=function(t,e,n){const i=new gt(t,e,n);return i.block=!0,n<0&&this.level--,i.level=this.level,n>0&&this.level++,this.tokens.push(i),i};Pt.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Pt.prototype.skipEmptyLines=function(e){for(let n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Pt.prototype.skipSpaces=function(e){for(let n=this.src.length;e<n;e++){const i=this.src.charCodeAt(e);if(!le(i))break}return e};Pt.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!le(this.src.charCodeAt(--e)))return e+1;return e};Pt.prototype.skipChars=function(e,n){for(let i=this.src.length;e<i&&this.src.charCodeAt(e)===n;e++);return e};Pt.prototype.skipCharsBack=function(e,n,i){if(e<=i)return e;for(;e>i;)if(n!==this.src.charCodeAt(--e))return e+1;return e};Pt.prototype.getLines=function(e,n,i,r){if(e>=n)return"";const s=new Array(n-e);for(let u=0,o=e;o<n;o++,u++){let a=0;const c=this.bMarks[o];let l=c,d;for(o+1<n||r?d=this.eMarks[o]+1:d=this.eMarks[o];l<d&&a<i;){const f=this.src.charCodeAt(l);if(le(f))f===9?a+=4-(a+this.bsCount[o])%4:a++;else if(l-c<this.tShift[o])a++;else break;l++}a>i?s[u]=new Array(a-i+1).join(" ")+this.src.slice(l,d):s[u]=this.src.slice(l,d)}return s.join("")};Pt.prototype.Token=gt;const ox=65536;function Wu(t,e){const n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];return t.src.slice(n,i)}function Ad(t){const e=[],n=t.length;let i=0,r=t.charCodeAt(i),s=!1,u=0,o="";for(;i<n;)r===124&&(s?(o+=t.substring(u,i-1),u=i):(e.push(o+t.substring(u,i)),o="",u=i+1)),s=r===92,i++,r=t.charCodeAt(i);return e.push(o+t.substring(u)),e}function ax(t,e,n,i){if(e+2>n)return!1;let r=e+1;if(t.sCount[r]<t.blkIndent||t.sCount[r]-t.blkIndent>=4)return!1;let s=t.bMarks[r]+t.tShift[r];if(s>=t.eMarks[r])return!1;const u=t.src.charCodeAt(s++);if(u!==124&&u!==45&&u!==58||s>=t.eMarks[r])return!1;const o=t.src.charCodeAt(s++);if(o!==124&&o!==45&&o!==58&&!le(o)||u===45&&le(o))return!1;for(;s<t.eMarks[r];){const x=t.src.charCodeAt(s);if(x!==124&&x!==45&&x!==58&&!le(x))return!1;s++}let a=Wu(t,e+1),c=a.split("|");const l=[];for(let x=0;x<c.length;x++){const M=c[x].trim();if(!M){if(x===0||x===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(M))return!1;M.charCodeAt(M.length-1)===58?l.push(M.charCodeAt(0)===58?"center":"right"):M.charCodeAt(0)===58?l.push("left"):l.push("")}if(a=Wu(t,e).trim(),a.indexOf("|")===-1||t.sCount[e]-t.blkIndent>=4)return!1;c=Ad(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const d=c.length;if(d===0||d!==l.length)return!1;if(i)return!0;const f=t.parentType;t.parentType="table";const h=t.md.block.ruler.getRules("blockquote"),_=t.push("table_open","table",1),y=[e,0];_.map=y;const k=t.push("thead_open","thead",1);k.map=[e,e+1];const R=t.push("tr_open","tr",1);R.map=[e,e+1];for(let x=0;x<c.length;x++){const M=t.push("th_open","th",1);l[x]&&(M.attrs=[["style","text-align:"+l[x]]]);const $=t.push("inline","",0);$.content=c[x].trim(),$.children=[],t.push("th_close","th",-1)}t.push("tr_close","tr",-1),t.push("thead_close","thead",-1);let C,w=0;for(r=e+2;r<n&&!(t.sCount[r]<t.blkIndent);r++){let x=!1;for(let $=0,K=h.length;$<K;$++)if(h[$](t,r,n,!0)){x=!0;break}if(x||(a=Wu(t,r).trim(),!a)||t.sCount[r]-t.blkIndent>=4||(c=Ad(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),w+=d-c.length,w>ox))break;if(r===e+2){const $=t.push("tbody_open","tbody",1);$.map=C=[e+2,0]}const M=t.push("tr_open","tr",1);M.map=[r,r+1];for(let $=0;$<d;$++){const K=t.push("td_open","td",1);l[$]&&(K.attrs=[["style","text-align:"+l[$]]]);const _e=t.push("inline","",0);_e.content=c[$]?c[$].trim():"",_e.children=[],t.push("td_close","td",-1)}t.push("tr_close","tr",-1)}return C&&(t.push("tbody_close","tbody",-1),C[1]=r),t.push("table_close","table",-1),y[1]=r,t.parentType=f,t.line=r,!0}function cx(t,e,n){if(t.sCount[e]-t.blkIndent<4)return!1;let i=e+1,r=i;for(;i<n;){if(t.isEmpty(i)){i++;continue}if(t.sCount[i]-t.blkIndent>=4){i++,r=i;continue}break}t.line=r;const s=t.push("code_block","code",0);return s.content=t.getLines(e,r,4+t.blkIndent,!1)+`
`,s.map=[e,t.line],!0}function lx(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||r+3>s)return!1;const u=t.src.charCodeAt(r);if(u!==126&&u!==96)return!1;let o=r;r=t.skipChars(r,u);let a=r-o;if(a<3)return!1;const c=t.src.slice(o,r),l=t.src.slice(r,s);if(u===96&&l.indexOf(String.fromCharCode(u))>=0)return!1;if(i)return!0;let d=e,f=!1;for(;d++,!(d>=n||(r=o=t.bMarks[d]+t.tShift[d],s=t.eMarks[d],r<s&&t.sCount[d]<t.blkIndent));)if(t.src.charCodeAt(r)===u&&!(t.sCount[d]-t.blkIndent>=4)&&(r=t.skipChars(r,u),!(r-o<a)&&(r=t.skipSpaces(r),!(r<s)))){f=!0;break}a=t.sCount[e],t.line=d+(f?1:0);const h=t.push("fence","code",0);return h.info=l,h.content=t.getLines(e+1,d,a,!0),h.markup=c,h.map=[e,t.line],!0}function dx(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];const u=t.lineMax;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(r)!==62)return!1;if(i)return!0;const o=[],a=[],c=[],l=[],d=t.md.block.ruler.getRules("blockquote"),f=t.parentType;t.parentType="blockquote";let h=!1,_;for(_=e;_<n;_++){const w=t.sCount[_]<t.blkIndent;if(r=t.bMarks[_]+t.tShift[_],s=t.eMarks[_],r>=s)break;if(t.src.charCodeAt(r++)===62&&!w){let M=t.sCount[_]+1,$,K;t.src.charCodeAt(r)===32?(r++,M++,K=!1,$=!0):t.src.charCodeAt(r)===9?($=!0,(t.bsCount[_]+M)%4===3?(r++,M++,K=!1):K=!0):$=!1;let _e=M;for(o.push(t.bMarks[_]),t.bMarks[_]=r;r<s;){const be=t.src.charCodeAt(r);if(le(be))be===9?_e+=4-(_e+t.bsCount[_]+(K?1:0))%4:_e++;else break;r++}h=r>=s,a.push(t.bsCount[_]),t.bsCount[_]=t.sCount[_]+1+($?1:0),c.push(t.sCount[_]),t.sCount[_]=_e-M,l.push(t.tShift[_]),t.tShift[_]=r-t.bMarks[_];continue}if(h)break;let x=!1;for(let M=0,$=d.length;M<$;M++)if(d[M](t,_,n,!0)){x=!0;break}if(x){t.lineMax=_,t.blkIndent!==0&&(o.push(t.bMarks[_]),a.push(t.bsCount[_]),l.push(t.tShift[_]),c.push(t.sCount[_]),t.sCount[_]-=t.blkIndent);break}o.push(t.bMarks[_]),a.push(t.bsCount[_]),l.push(t.tShift[_]),c.push(t.sCount[_]),t.sCount[_]=-1}const y=t.blkIndent;t.blkIndent=0;const k=t.push("blockquote_open","blockquote",1);k.markup=">";const R=[e,0];k.map=R,t.md.block.tokenize(t,e,_);const C=t.push("blockquote_close","blockquote",-1);C.markup=">",t.lineMax=u,t.parentType=f,R[1]=t.line;for(let w=0;w<l.length;w++)t.bMarks[w+e]=o[w],t.tShift[w+e]=l[w],t.sCount[w+e]=c[w],t.bsCount[w+e]=a[w];return t.blkIndent=y,!0}function fx(t,e,n,i){const r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let s=t.bMarks[e]+t.tShift[e];const u=t.src.charCodeAt(s++);if(u!==42&&u!==45&&u!==95)return!1;let o=1;for(;s<r;){const c=t.src.charCodeAt(s++);if(c!==u&&!le(c))return!1;c===u&&o++}if(o<3)return!1;if(i)return!0;t.line=e+1;const a=t.push("hr","hr",0);return a.map=[e,t.line],a.markup=Array(o+1).join(String.fromCharCode(u)),!0}function Sd(t,e){const n=t.eMarks[e];let i=t.bMarks[e]+t.tShift[e];const r=t.src.charCodeAt(i++);if(r!==42&&r!==45&&r!==43)return-1;if(i<n){const s=t.src.charCodeAt(i);if(!le(s))return-1}return i}function Dd(t,e){const n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];let r=n;if(r+1>=i)return-1;let s=t.src.charCodeAt(r++);if(s<48||s>57)return-1;for(;;){if(r>=i)return-1;if(s=t.src.charCodeAt(r++),s>=48&&s<=57){if(r-n>=10)return-1;continue}if(s===41||s===46)break;return-1}return r<i&&(s=t.src.charCodeAt(r),!le(s))?-1:r}function hx(t,e){const n=t.level+2;for(let i=e+2,r=t.tokens.length-2;i<r;i++)t.tokens[i].level===n&&t.tokens[i].type==="paragraph_open"&&(t.tokens[i+2].hidden=!0,t.tokens[i].hidden=!0,i+=2)}function px(t,e,n,i){let r,s,u,o,a=e,c=!0;if(t.sCount[a]-t.blkIndent>=4||t.listIndent>=0&&t.sCount[a]-t.listIndent>=4&&t.sCount[a]<t.blkIndent)return!1;let l=!1;i&&t.parentType==="paragraph"&&t.sCount[a]>=t.blkIndent&&(l=!0);let d,f,h;if((h=Dd(t,a))>=0){if(d=!0,u=t.bMarks[a]+t.tShift[a],f=Number(t.src.slice(u,h-1)),l&&f!==1)return!1}else if((h=Sd(t,a))>=0)d=!1;else return!1;if(l&&t.skipSpaces(h)>=t.eMarks[a])return!1;if(i)return!0;const _=t.src.charCodeAt(h-1),y=t.tokens.length;d?(o=t.push("ordered_list_open","ol",1),f!==1&&(o.attrs=[["start",f]])):o=t.push("bullet_list_open","ul",1);const k=[a,0];o.map=k,o.markup=String.fromCharCode(_);let R=!1;const C=t.md.block.ruler.getRules("list"),w=t.parentType;for(t.parentType="list";a<n;){s=h,r=t.eMarks[a];const x=t.sCount[a]+h-(t.bMarks[a]+t.tShift[a]);let M=x;for(;s<r;){const Ke=t.src.charCodeAt(s);if(Ke===9)M+=4-(M+t.bsCount[a])%4;else if(Ke===32)M++;else break;s++}const $=s;let K;$>=r?K=1:K=M-x,K>4&&(K=1);const _e=x+K;o=t.push("list_item_open","li",1),o.markup=String.fromCharCode(_);const be=[a,0];o.map=be,d&&(o.info=t.src.slice(u,h-1));const Ce=t.tight,et=t.tShift[a],Nt=t.sCount[a],tt=t.listIndent;if(t.listIndent=t.blkIndent,t.blkIndent=_e,t.tight=!0,t.tShift[a]=$-t.bMarks[a],t.sCount[a]=M,$>=r&&t.isEmpty(a+1)?t.line=Math.min(t.line+2,n):t.md.block.tokenize(t,a,n,!0),(!t.tight||R)&&(c=!1),R=t.line-a>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=tt,t.tShift[a]=et,t.sCount[a]=Nt,t.tight=Ce,o=t.push("list_item_close","li",-1),o.markup=String.fromCharCode(_),a=t.line,be[1]=a,a>=n||t.sCount[a]<t.blkIndent||t.sCount[a]-t.blkIndent>=4)break;let Qt=!1;for(let Ke=0,ye=C.length;Ke<ye;Ke++)if(C[Ke](t,a,n,!0)){Qt=!0;break}if(Qt)break;if(d){if(h=Dd(t,a),h<0)break;u=t.bMarks[a]+t.tShift[a]}else if(h=Sd(t,a),h<0)break;if(_!==t.src.charCodeAt(h-1))break}return d?o=t.push("ordered_list_close","ol",-1):o=t.push("bullet_list_close","ul",-1),o.markup=String.fromCharCode(_),k[1]=a,t.line=a,t.parentType=w,c&&hx(t,y),!0}function _x(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e],u=e+1;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(r)!==91)return!1;function o(C){const w=t.lineMax;if(C>=w||t.isEmpty(C))return null;let x=!1;if(t.sCount[C]-t.blkIndent>3&&(x=!0),t.sCount[C]<0&&(x=!0),!x){const K=t.md.block.ruler.getRules("reference"),_e=t.parentType;t.parentType="reference";let be=!1;for(let Ce=0,et=K.length;Ce<et;Ce++)if(K[Ce](t,C,w,!0)){be=!0;break}if(t.parentType=_e,be)return null}const M=t.bMarks[C]+t.tShift[C],$=t.eMarks[C];return t.src.slice(M,$+1)}let a=t.src.slice(r,s+1);s=a.length;let c=-1;for(r=1;r<s;r++){const C=a.charCodeAt(r);if(C===91)return!1;if(C===93){c=r;break}else if(C===10){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}else if(C===92&&(r++,r<s&&a.charCodeAt(r)===10)){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(r=c+2;r<s;r++){const C=a.charCodeAt(r);if(C===10){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}else if(!le(C))break}const l=t.md.helpers.parseLinkDestination(a,r,s);if(!l.ok)return!1;const d=t.md.normalizeLink(l.str);if(!t.md.validateLink(d))return!1;r=l.pos;const f=r,h=u,_=r;for(;r<s;r++){const C=a.charCodeAt(r);if(C===10){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}else if(!le(C))break}let y=t.md.helpers.parseLinkTitle(a,r,s);for(;y.can_continue;){const C=o(u);if(C===null)break;a+=C,r=s,s=a.length,u++,y=t.md.helpers.parseLinkTitle(a,r,s,y)}let k;for(r<s&&_!==r&&y.ok?(k=y.str,r=y.pos):(k="",r=f,u=h);r<s;){const C=a.charCodeAt(r);if(!le(C))break;r++}if(r<s&&a.charCodeAt(r)!==10&&k)for(k="",r=f,u=h;r<s;){const C=a.charCodeAt(r);if(!le(C))break;r++}if(r<s&&a.charCodeAt(r)!==10)return!1;const R=gu(a.slice(1,c));return R?(i||(typeof t.env.references>"u"&&(t.env.references={}),typeof t.env.references[R]>"u"&&(t.env.references[R]={title:k,href:d}),t.line=u),!0):!1}const mx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],gx="[a-zA-Z_:][a-zA-Z0-9:._-]*",bx="[^\"'=<>`\\x00-\\x20]+",yx="'[^']*'",vx='"[^"]*"',Ex="(?:"+bx+"|"+yx+"|"+vx+")",Cx="(?:\\s+"+gx+"(?:\\s*=\\s*"+Ex+")?)",pp="<[A-Za-z][A-Za-z0-9\\-]*"+Cx+"*\\s*\\/?>",_p="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",xx="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",wx="<[?][\\s\\S]*?[?]>",kx="<![A-Za-z][^>]*>",Ix="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Tx=new RegExp("^(?:"+pp+"|"+_p+"|"+xx+"|"+wx+"|"+kx+"|"+Ix+")"),Ax=new RegExp("^(?:"+pp+"|"+_p+")"),Jn=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+mx.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Ax.source+"\\s*$"),/^$/,!1]];function Sx(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||!t.md.options.html||t.src.charCodeAt(r)!==60)return!1;let u=t.src.slice(r,s),o=0;for(;o<Jn.length&&!Jn[o][0].test(u);o++);if(o===Jn.length)return!1;if(i)return Jn[o][2];let a=e+1;if(!Jn[o][1].test(u)){for(;a<n&&!(t.sCount[a]<t.blkIndent);a++)if(r=t.bMarks[a]+t.tShift[a],s=t.eMarks[a],u=t.src.slice(r,s),Jn[o][1].test(u)){u.length!==0&&a++;break}}t.line=a;const c=t.push("html_block","",0);return c.map=[e,a],c.content=t.getLines(e,a,t.blkIndent,!0),!0}function Dx(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let u=t.src.charCodeAt(r);if(u!==35||r>=s)return!1;let o=1;for(u=t.src.charCodeAt(++r);u===35&&r<s&&o<=6;)o++,u=t.src.charCodeAt(++r);if(o>6||r<s&&!le(u))return!1;if(i)return!0;s=t.skipSpacesBack(s,r);const a=t.skipCharsBack(s,35,r);a>r&&le(t.src.charCodeAt(a-1))&&(s=a),t.line=e+1;const c=t.push("heading_open","h"+String(o),1);c.markup="########".slice(0,o),c.map=[e,t.line];const l=t.push("inline","",0);l.content=t.src.slice(r,s).trim(),l.map=[e,t.line],l.children=[];const d=t.push("heading_close","h"+String(o),-1);return d.markup="########".slice(0,o),!0}function Rx(t,e,n){const i=t.md.block.ruler.getRules("paragraph");if(t.sCount[e]-t.blkIndent>=4)return!1;const r=t.parentType;t.parentType="paragraph";let s=0,u,o=e+1;for(;o<n&&!t.isEmpty(o);o++){if(t.sCount[o]-t.blkIndent>3)continue;if(t.sCount[o]>=t.blkIndent){let h=t.bMarks[o]+t.tShift[o];const _=t.eMarks[o];if(h<_&&(u=t.src.charCodeAt(h),(u===45||u===61)&&(h=t.skipChars(h,u),h=t.skipSpaces(h),h>=_))){s=u===61?1:2;break}}if(t.sCount[o]<0)continue;let f=!1;for(let h=0,_=i.length;h<_;h++)if(i[h](t,o,n,!0)){f=!0;break}if(f)break}if(!s)return!1;const a=t.getLines(e,o,t.blkIndent,!1).trim();t.line=o+1;const c=t.push("heading_open","h"+String(s),1);c.markup=String.fromCharCode(u),c.map=[e,t.line];const l=t.push("inline","",0);l.content=a,l.map=[e,t.line-1],l.children=[];const d=t.push("heading_close","h"+String(s),-1);return d.markup=String.fromCharCode(u),t.parentType=r,!0}function Px(t,e,n){const i=t.md.block.ruler.getRules("paragraph"),r=t.parentType;let s=e+1;for(t.parentType="paragraph";s<n&&!t.isEmpty(s);s++){if(t.sCount[s]-t.blkIndent>3||t.sCount[s]<0)continue;let c=!1;for(let l=0,d=i.length;l<d;l++)if(i[l](t,s,n,!0)){c=!0;break}if(c)break}const u=t.getLines(e,s,t.blkIndent,!1).trim();t.line=s;const o=t.push("paragraph_open","p",1);o.map=[e,t.line];const a=t.push("inline","",0);return a.content=u,a.map=[e,t.line],a.children=[],t.push("paragraph_close","p",-1),t.parentType=r,!0}const Kr=[["table",ax,["paragraph","reference"]],["code",cx],["fence",lx,["paragraph","reference","blockquote","list"]],["blockquote",dx,["paragraph","reference","blockquote","list"]],["hr",fx,["paragraph","reference","blockquote","list"]],["list",px,["paragraph","reference","blockquote"]],["reference",_x],["html_block",Sx,["paragraph","reference","blockquote"]],["heading",Dx,["paragraph","reference","blockquote"]],["lheading",Rx],["paragraph",Px]];function bu(){this.ruler=new Ge;for(let t=0;t<Kr.length;t++)this.ruler.push(Kr[t][0],Kr[t][1],{alt:(Kr[t][2]||[]).slice()})}bu.prototype.tokenize=function(t,e,n){const i=this.ruler.getRules(""),r=i.length,s=t.md.options.maxNesting;let u=e,o=!1;for(;u<n&&(t.line=u=t.skipEmptyLines(u),!(u>=n||t.sCount[u]<t.blkIndent));){if(t.level>=s){t.line=n;break}const a=t.line;let c=!1;for(let l=0;l<r;l++)if(c=i[l](t,u,n,!1),c){if(a>=t.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");t.tight=!o,t.isEmpty(t.line-1)&&(o=!0),u=t.line,u<n&&t.isEmpty(u)&&(o=!0,u++,t.line=u)}};bu.prototype.parse=function(t,e,n,i){if(!t)return;const r=new this.State(t,e,n,i);this.tokenize(r,r.line,r.lineMax)};bu.prototype.State=Pt;function Or(t,e,n,i){this.src=t,this.env=n,this.md=e,this.tokens=i,this.tokens_meta=Array(i.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Or.prototype.pushPending=function(){const t=new gt("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};Or.prototype.push=function(t,e,n){this.pending&&this.pushPending();const i=new gt(t,e,n);let r=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),i.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(i),this.tokens_meta.push(r),i};Or.prototype.scanDelims=function(t,e){const n=this.posMax,i=this.src.charCodeAt(t),r=t>0?this.src.charCodeAt(t-1):32;let s=t;for(;s<n&&this.src.charCodeAt(s)===i;)s++;const u=s-t,o=s<n?this.src.charCodeAt(s):32,a=xr(r)||Cr(String.fromCharCode(r)),c=xr(o)||Cr(String.fromCharCode(o)),l=Er(r),d=Er(o),f=!d&&(!c||l||a),h=!l&&(!a||d||c);return{can_open:f&&(e||!h||a),can_close:h&&(e||!f||c),length:u}};Or.prototype.Token=gt;function Nx(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Fx(t,e){let n=t.pos;for(;n<t.posMax&&!Nx(t.src.charCodeAt(n));)n++;return n===t.pos?!1:(e||(t.pending+=t.src.slice(t.pos,n)),t.pos=n,!0)}const Ox=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Mx(t,e){if(!t.md.options.linkify||t.linkLevel>0)return!1;const n=t.pos,i=t.posMax;if(n+3>i||t.src.charCodeAt(n)!==58||t.src.charCodeAt(n+1)!==47||t.src.charCodeAt(n+2)!==47)return!1;const r=t.pending.match(Ox);if(!r)return!1;const s=r[1],u=t.md.linkify.matchAtStart(t.src.slice(n-s.length));if(!u)return!1;let o=u.url;if(o.length<=s.length)return!1;o=o.replace(/\*+$/,"");const a=t.md.normalizeLink(o);if(!t.md.validateLink(a))return!1;if(!e){t.pending=t.pending.slice(0,-s.length);const c=t.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const l=t.push("text","",0);l.content=t.md.normalizeLinkText(o);const d=t.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return t.pos+=o.length-s.length,!0}function Lx(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==10)return!1;const i=t.pending.length-1,r=t.posMax;if(!e)if(i>=0&&t.pending.charCodeAt(i)===32)if(i>=1&&t.pending.charCodeAt(i-1)===32){let s=i-1;for(;s>=1&&t.pending.charCodeAt(s-1)===32;)s--;t.pending=t.pending.slice(0,s),t.push("hardbreak","br",0)}else t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0);else t.push("softbreak","br",0);for(n++;n<r&&le(t.src.charCodeAt(n));)n++;return t.pos=n,!0}const ac=[];for(let t=0;t<256;t++)ac.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){ac[t.charCodeAt(0)]=1});function Ux(t,e){let n=t.pos;const i=t.posMax;if(t.src.charCodeAt(n)!==92||(n++,n>=i))return!1;let r=t.src.charCodeAt(n);if(r===10){for(e||t.push("hardbreak","br",0),n++;n<i&&(r=t.src.charCodeAt(n),!!le(r));)n++;return t.pos=n,!0}let s=t.src[n];if(r>=55296&&r<=56319&&n+1<i){const o=t.src.charCodeAt(n+1);o>=56320&&o<=57343&&(s+=t.src[n+1],n++)}const u="\\"+s;if(!e){const o=t.push("text_special","",0);r<256&&ac[r]!==0?o.content=s:o.content=u,o.markup=u,o.info="escape"}return t.pos=n+1,!0}function Bx(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==96)return!1;const r=n;n++;const s=t.posMax;for(;n<s&&t.src.charCodeAt(n)===96;)n++;const u=t.src.slice(r,n),o=u.length;if(t.backticksScanned&&(t.backticks[o]||0)<=r)return e||(t.pending+=u),t.pos+=o,!0;let a=n,c;for(;(c=t.src.indexOf("`",a))!==-1;){for(a=c+1;a<s&&t.src.charCodeAt(a)===96;)a++;const l=a-c;if(l===o){if(!e){const d=t.push("code_inline","code",0);d.markup=u,d.content=t.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return t.pos=a,!0}t.backticks[l]=c}return t.backticksScanned=!0,e||(t.pending+=u),t.pos+=o,!0}function $x(t,e){const n=t.pos,i=t.src.charCodeAt(n);if(e||i!==126)return!1;const r=t.scanDelims(t.pos,!0);let s=r.length;const u=String.fromCharCode(i);if(s<2)return!1;let o;s%2&&(o=t.push("text","",0),o.content=u,s--);for(let a=0;a<s;a+=2)o=t.push("text","",0),o.content=u+u,t.delimiters.push({marker:i,length:0,token:t.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return t.pos+=r.length,!0}function Rd(t,e){let n;const i=[],r=e.length;for(let s=0;s<r;s++){const u=e[s];if(u.marker!==126||u.end===-1)continue;const o=e[u.end];n=t.tokens[u.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=t.tokens[o.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",t.tokens[o.token-1].type==="text"&&t.tokens[o.token-1].content==="~"&&i.push(o.token-1)}for(;i.length;){const s=i.pop();let u=s+1;for(;u<t.tokens.length&&t.tokens[u].type==="s_close";)u++;u--,s!==u&&(n=t.tokens[u],t.tokens[u]=t.tokens[s],t.tokens[s]=n)}}function zx(t){const e=t.tokens_meta,n=t.tokens_meta.length;Rd(t,t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&Rd(t,e[i].delimiters)}const mp={tokenize:$x,postProcess:zx};function Hx(t,e){const n=t.pos,i=t.src.charCodeAt(n);if(e||i!==95&&i!==42)return!1;const r=t.scanDelims(t.pos,i===42);for(let s=0;s<r.length;s++){const u=t.push("text","",0);u.content=String.fromCharCode(i),t.delimiters.push({marker:i,length:r.length,token:t.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return t.pos+=r.length,!0}function Pd(t,e){const n=e.length;for(let i=n-1;i>=0;i--){const r=e[i];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const s=e[r.end],u=i>0&&e[i-1].end===r.end+1&&e[i-1].marker===r.marker&&e[i-1].token===r.token-1&&e[r.end+1].token===s.token+1,o=String.fromCharCode(r.marker),a=t.tokens[r.token];a.type=u?"strong_open":"em_open",a.tag=u?"strong":"em",a.nesting=1,a.markup=u?o+o:o,a.content="";const c=t.tokens[s.token];c.type=u?"strong_close":"em_close",c.tag=u?"strong":"em",c.nesting=-1,c.markup=u?o+o:o,c.content="",u&&(t.tokens[e[i-1].token].content="",t.tokens[e[r.end+1].token].content="",i--)}}function qx(t){const e=t.tokens_meta,n=t.tokens_meta.length;Pd(t,t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&Pd(t,e[i].delimiters)}const gp={tokenize:Hx,postProcess:qx};function Wx(t,e){let n,i,r,s,u="",o="",a=t.pos,c=!0;if(t.src.charCodeAt(t.pos)!==91)return!1;const l=t.pos,d=t.posMax,f=t.pos+1,h=t.md.helpers.parseLinkLabel(t,t.pos,!0);if(h<0)return!1;let _=h+1;if(_<d&&t.src.charCodeAt(_)===40){for(c=!1,_++;_<d&&(n=t.src.charCodeAt(_),!(!le(n)&&n!==10));_++);if(_>=d)return!1;if(a=_,r=t.md.helpers.parseLinkDestination(t.src,_,t.posMax),r.ok){for(u=t.md.normalizeLink(r.str),t.md.validateLink(u)?_=r.pos:u="",a=_;_<d&&(n=t.src.charCodeAt(_),!(!le(n)&&n!==10));_++);if(r=t.md.helpers.parseLinkTitle(t.src,_,t.posMax),_<d&&a!==_&&r.ok)for(o=r.str,_=r.pos;_<d&&(n=t.src.charCodeAt(_),!(!le(n)&&n!==10));_++);}(_>=d||t.src.charCodeAt(_)!==41)&&(c=!0),_++}if(c){if(typeof t.env.references>"u")return!1;if(_<d&&t.src.charCodeAt(_)===91?(a=_+1,_=t.md.helpers.parseLinkLabel(t,_),_>=0?i=t.src.slice(a,_++):_=h+1):_=h+1,i||(i=t.src.slice(f,h)),s=t.env.references[gu(i)],!s)return t.pos=l,!1;u=s.href,o=s.title}if(!e){t.pos=f,t.posMax=h;const y=t.push("link_open","a",1),k=[["href",u]];y.attrs=k,o&&k.push(["title",o]),t.linkLevel++,t.md.inline.tokenize(t),t.linkLevel--,t.push("link_close","a",-1)}return t.pos=_,t.posMax=d,!0}function jx(t,e){let n,i,r,s,u,o,a,c,l="";const d=t.pos,f=t.posMax;if(t.src.charCodeAt(t.pos)!==33||t.src.charCodeAt(t.pos+1)!==91)return!1;const h=t.pos+2,_=t.md.helpers.parseLinkLabel(t,t.pos+1,!1);if(_<0)return!1;if(s=_+1,s<f&&t.src.charCodeAt(s)===40){for(s++;s<f&&(n=t.src.charCodeAt(s),!(!le(n)&&n!==10));s++);if(s>=f)return!1;for(c=s,o=t.md.helpers.parseLinkDestination(t.src,s,t.posMax),o.ok&&(l=t.md.normalizeLink(o.str),t.md.validateLink(l)?s=o.pos:l=""),c=s;s<f&&(n=t.src.charCodeAt(s),!(!le(n)&&n!==10));s++);if(o=t.md.helpers.parseLinkTitle(t.src,s,t.posMax),s<f&&c!==s&&o.ok)for(a=o.str,s=o.pos;s<f&&(n=t.src.charCodeAt(s),!(!le(n)&&n!==10));s++);else a="";if(s>=f||t.src.charCodeAt(s)!==41)return t.pos=d,!1;s++}else{if(typeof t.env.references>"u")return!1;if(s<f&&t.src.charCodeAt(s)===91?(c=s+1,s=t.md.helpers.parseLinkLabel(t,s),s>=0?r=t.src.slice(c,s++):s=_+1):s=_+1,r||(r=t.src.slice(h,_)),u=t.env.references[gu(r)],!u)return t.pos=d,!1;l=u.href,a=u.title}if(!e){i=t.src.slice(h,_);const y=[];t.md.inline.parse(i,t.md,t.env,y);const k=t.push("image","img",0),R=[["src",l],["alt",""]];k.attrs=R,k.children=y,k.content=i,a&&R.push(["title",a])}return t.pos=s,t.posMax=f,!0}const Vx=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Gx=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Kx(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==60)return!1;const i=t.pos,r=t.posMax;for(;;){if(++n>=r)return!1;const u=t.src.charCodeAt(n);if(u===60)return!1;if(u===62)break}const s=t.src.slice(i+1,n);if(Gx.test(s)){const u=t.md.normalizeLink(s);if(!t.md.validateLink(u))return!1;if(!e){const o=t.push("link_open","a",1);o.attrs=[["href",u]],o.markup="autolink",o.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(s);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=s.length+2,!0}if(Vx.test(s)){const u=t.md.normalizeLink("mailto:"+s);if(!t.md.validateLink(u))return!1;if(!e){const o=t.push("link_open","a",1);o.attrs=[["href",u]],o.markup="autolink",o.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(s);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=s.length+2,!0}return!1}function Yx(t){return/^<a[>\s]/i.test(t)}function Qx(t){return/^<\/a\s*>/i.test(t)}function Jx(t){const e=t|32;return e>=97&&e<=122}function Zx(t,e){if(!t.md.options.html)return!1;const n=t.posMax,i=t.pos;if(t.src.charCodeAt(i)!==60||i+2>=n)return!1;const r=t.src.charCodeAt(i+1);if(r!==33&&r!==63&&r!==47&&!Jx(r))return!1;const s=t.src.slice(i).match(Tx);if(!s)return!1;if(!e){const u=t.push("html_inline","",0);u.content=s[0],Yx(u.content)&&t.linkLevel++,Qx(u.content)&&t.linkLevel--}return t.pos+=s[0].length,!0}const Xx=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,ew=/^&([a-z][a-z0-9]{1,31});/i;function tw(t,e){const n=t.pos,i=t.posMax;if(t.src.charCodeAt(n)!==38||n+1>=i)return!1;if(t.src.charCodeAt(n+1)===35){const s=t.src.slice(n).match(Xx);if(s){if(!e){const u=s[1][0].toLowerCase()==="x"?parseInt(s[1].slice(1),16):parseInt(s[1],10),o=t.push("text_special","",0);o.content=uc(u)?Us(u):Us(65533),o.markup=s[0],o.info="entity"}return t.pos+=s[0].length,!0}}else{const s=t.src.slice(n).match(ew);if(s){const u=cp(s[0]);if(u!==s[0]){if(!e){const o=t.push("text_special","",0);o.content=u,o.markup=s[0],o.info="entity"}return t.pos+=s[0].length,!0}}}return!1}function Nd(t){const e={},n=t.length;if(!n)return;let i=0,r=-2;const s=[];for(let u=0;u<n;u++){const o=t[u];if(s.push(0),(t[i].marker!==o.marker||r!==o.token-1)&&(i=u),r=o.token,o.length=o.length||0,!o.close)continue;e.hasOwnProperty(o.marker)||(e[o.marker]=[-1,-1,-1,-1,-1,-1]);const a=e[o.marker][(o.open?3:0)+o.length%3];let c=i-s[i]-1,l=c;for(;c>a;c-=s[c]+1){const d=t[c];if(d.marker===o.marker&&d.open&&d.end<0){let f=!1;if((d.close||o.open)&&(d.length+o.length)%3===0&&(d.length%3!==0||o.length%3!==0)&&(f=!0),!f){const h=c>0&&!t[c-1].open?s[c-1]+1:0;s[u]=u-c+h,s[c]=h,o.open=!1,d.end=u,d.close=!1,l=-1,r=-2;break}}}l!==-1&&(e[o.marker][(o.open?3:0)+(o.length||0)%3]=l)}}function nw(t){const e=t.tokens_meta,n=t.tokens_meta.length;Nd(t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&Nd(e[i].delimiters)}function iw(t){let e,n,i=0;const r=t.tokens,s=t.tokens.length;for(e=n=0;e<s;e++)r[e].nesting<0&&i--,r[e].level=i,r[e].nesting>0&&i++,r[e].type==="text"&&e+1<s&&r[e+1].type==="text"?r[e+1].content=r[e].content+r[e+1].content:(e!==n&&(r[n]=r[e]),n++);e!==n&&(r.length=n)}const ju=[["text",Fx],["linkify",Mx],["newline",Lx],["escape",Ux],["backticks",Bx],["strikethrough",mp.tokenize],["emphasis",gp.tokenize],["link",Wx],["image",jx],["autolink",Kx],["html_inline",Zx],["entity",tw]],Vu=[["balance_pairs",nw],["strikethrough",mp.postProcess],["emphasis",gp.postProcess],["fragments_join",iw]];function Mr(){this.ruler=new Ge;for(let t=0;t<ju.length;t++)this.ruler.push(ju[t][0],ju[t][1]);this.ruler2=new Ge;for(let t=0;t<Vu.length;t++)this.ruler2.push(Vu[t][0],Vu[t][1])}Mr.prototype.skipToken=function(t){const e=t.pos,n=this.ruler.getRules(""),i=n.length,r=t.md.options.maxNesting,s=t.cache;if(typeof s[e]<"u"){t.pos=s[e];return}let u=!1;if(t.level<r){for(let o=0;o<i;o++)if(t.level++,u=n[o](t,!0),t.level--,u){if(e>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;u||t.pos++,s[e]=t.pos};Mr.prototype.tokenize=function(t){const e=this.ruler.getRules(""),n=e.length,i=t.posMax,r=t.md.options.maxNesting;for(;t.pos<i;){const s=t.pos;let u=!1;if(t.level<r){for(let o=0;o<n;o++)if(u=e[o](t,!1),u){if(s>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(t.pos>=i)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};Mr.prototype.parse=function(t,e,n,i){const r=new this.State(t,e,n,i);this.tokenize(r);const s=this.ruler2.getRules(""),u=s.length;for(let o=0;o<u;o++)s[o](r)};Mr.prototype.State=Or;function rw(t){const e={};t=t||{},e.src_Any=rp.source,e.src_Cc=sp.source,e.src_Z=op.source,e.src_P=rc.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const n="[><｜]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Oo(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(i){t[i]=n[i]})}),t}function yu(t){return Object.prototype.toString.call(t)}function sw(t){return yu(t)==="[object String]"}function uw(t){return yu(t)==="[object Object]"}function ow(t){return yu(t)==="[object RegExp]"}function Fd(t){return yu(t)==="[object Function]"}function aw(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const bp={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function cw(t){return Object.keys(t||{}).reduce(function(e,n){return e||bp.hasOwnProperty(n)},!1)}const lw={"http:":{validate:function(t,e,n){const i=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(i)?i.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){const i=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(i)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:i.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){const i=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(i)?i.match(n.re.mailto)[0].length:0}}},dw="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",fw="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function hw(t){t.__index__=-1,t.__text_cache__=""}function pw(t){return function(e,n){const i=e.slice(n);return t.test(i)?i.match(t)[0].length:0}}function Od(){return function(t,e){e.normalize(t)}}function Bs(t){const e=t.re=rw(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(dw),n.push(e.src_xn),e.src_tlds=n.join("|");function i(o){return o.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(i(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(i(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(i(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(i(e.tpl_host_fuzzy_test),"i");const r=[];t.__compiled__={};function s(o,a){throw new Error('(LinkifyIt) Invalid schema "'+o+'": '+a)}Object.keys(t.__schemas__).forEach(function(o){const a=t.__schemas__[o];if(a===null)return;const c={validate:null,link:null};if(t.__compiled__[o]=c,uw(a)){ow(a.validate)?c.validate=pw(a.validate):Fd(a.validate)?c.validate=a.validate:s(o,a),Fd(a.normalize)?c.normalize=a.normalize:a.normalize?s(o,a):c.normalize=Od();return}if(sw(a)){r.push(o);return}s(o,a)}),r.forEach(function(o){t.__compiled__[t.__schemas__[o]]&&(t.__compiled__[o].validate=t.__compiled__[t.__schemas__[o]].validate,t.__compiled__[o].normalize=t.__compiled__[t.__schemas__[o]].normalize)}),t.__compiled__[""]={validate:null,normalize:Od()};const u=Object.keys(t.__compiled__).filter(function(o){return o.length>0&&t.__compiled__[o]}).map(aw).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),hw(t)}function _w(t,e){const n=t.__index__,i=t.__last_index__,r=t.__text_cache__.slice(n,i);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=i+e,this.raw=r,this.text=r,this.url=r}function Mo(t,e){const n=new _w(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Ze(t,e){if(!(this instanceof Ze))return new Ze(t,e);e||cw(t)&&(e=t,t={}),this.__opts__=Oo({},bp,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Oo({},lw,t),this.__compiled__={},this.__tlds__=fw,this.__tlds_replaced__=!1,this.re={},Bs(this)}Ze.prototype.add=function(e,n){return this.__schemas__[e]=n,Bs(this),this};Ze.prototype.set=function(e){return this.__opts__=Oo(this.__opts__,e),this};Ze.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let n,i,r,s,u,o,a,c,l;if(this.re.schema_test.test(e)){for(a=this.re.schema_search,a.lastIndex=0;(n=a.exec(e))!==null;)if(s=this.testSchemaAt(e,n[2],a.lastIndex),s){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+s;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=i.index+i[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=i.index+i[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(u=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=o))),this.__index__>=0};Ze.prototype.pretest=function(e){return this.re.pretest.test(e)};Ze.prototype.testSchemaAt=function(e,n,i){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,i,this):0};Ze.prototype.match=function(e){const n=[];let i=0;this.__index__>=0&&this.__text_cache__===e&&(n.push(Mo(this,i)),i=this.__last_index__);let r=i?e.slice(i):e;for(;this.test(r);)n.push(Mo(this,i)),r=r.slice(this.__last_index__),i+=this.__last_index__;return n.length?n:null};Ze.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const n=this.re.schema_at_start.exec(e);if(!n)return null;const i=this.testSchemaAt(e,n[2],n[0].length);return i?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i,Mo(this,0)):null};Ze.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(i,r,s){return i!==s[r-1]}).reverse(),Bs(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Bs(this),this)};Ze.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Ze.prototype.onCompile=function(){};const di=2147483647,wt=36,cc=1,wr=26,mw=38,gw=700,yp=72,vp=128,Ep="-",bw=/^xn--/,yw=/[^\0-\x7F]/,vw=/[\x2E\u3002\uFF0E\uFF61]/g,Ew={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Gu=wt-cc,kt=Math.floor,Ku=String.fromCharCode;function rn(t){throw new RangeError(Ew[t])}function Cw(t,e){const n=[];let i=t.length;for(;i--;)n[i]=e(t[i]);return n}function Cp(t,e){const n=t.split("@");let i="";n.length>1&&(i=n[0]+"@",t=n[1]),t=t.replace(vw,".");const r=t.split("."),s=Cw(r,e).join(".");return i+s}function xp(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}const xw=t=>String.fromCodePoint(...t),ww=function(t){return t>=48&&t<58?26+(t-48):t>=65&&t<91?t-65:t>=97&&t<123?t-97:wt},Md=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},wp=function(t,e,n){let i=0;for(t=n?kt(t/gw):t>>1,t+=kt(t/e);t>Gu*wr>>1;i+=wt)t=kt(t/Gu);return kt(i+(Gu+1)*t/(t+mw))},kp=function(t){const e=[],n=t.length;let i=0,r=vp,s=yp,u=t.lastIndexOf(Ep);u<0&&(u=0);for(let o=0;o<u;++o)t.charCodeAt(o)>=128&&rn("not-basic"),e.push(t.charCodeAt(o));for(let o=u>0?u+1:0;o<n;){const a=i;for(let l=1,d=wt;;d+=wt){o>=n&&rn("invalid-input");const f=ww(t.charCodeAt(o++));f>=wt&&rn("invalid-input"),f>kt((di-i)/l)&&rn("overflow"),i+=f*l;const h=d<=s?cc:d>=s+wr?wr:d-s;if(f<h)break;const _=wt-h;l>kt(di/_)&&rn("overflow"),l*=_}const c=e.length+1;s=wp(i-a,c,a==0),kt(i/c)>di-r&&rn("overflow"),r+=kt(i/c),i%=c,e.splice(i++,0,r)}return String.fromCodePoint(...e)},Ip=function(t){const e=[];t=xp(t);const n=t.length;let i=vp,r=0,s=yp;for(const a of t)a<128&&e.push(Ku(a));const u=e.length;let o=u;for(u&&e.push(Ep);o<n;){let a=di;for(const l of t)l>=i&&l<a&&(a=l);const c=o+1;a-i>kt((di-r)/c)&&rn("overflow"),r+=(a-i)*c,i=a;for(const l of t)if(l<i&&++r>di&&rn("overflow"),l===i){let d=r;for(let f=wt;;f+=wt){const h=f<=s?cc:f>=s+wr?wr:f-s;if(d<h)break;const _=d-h,y=wt-h;e.push(Ku(Md(h+_%y,0))),d=kt(_/y)}e.push(Ku(Md(d,0))),s=wp(r,c,o===u),r=0,++o}++r,++i}return e.join("")},kw=function(t){return Cp(t,function(e){return bw.test(e)?kp(e.slice(4).toLowerCase()):e})},Iw=function(t){return Cp(t,function(e){return yw.test(e)?"xn--"+Ip(e):e})},Tp={version:"2.3.1",ucs2:{decode:xp,encode:xw},decode:kp,encode:Ip,toASCII:Iw,toUnicode:kw},Tw={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Aw={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Sw={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Dw={default:Tw,zero:Aw,commonmark:Sw},Rw=/^(vbscript|javascript|file|data):/,Pw=/^data:image\/(gif|png|jpeg|webp);/;function Nw(t){const e=t.trim().toLowerCase();return Rw.test(e)?Pw.test(e):!0}const Ap=["http:","https:","mailto:"];function Fw(t){const e=ic(t,!0);if(e.hostname&&(!e.protocol||Ap.indexOf(e.protocol)>=0))try{e.hostname=Tp.toASCII(e.hostname)}catch{}return Fr(nc(e))}function Ow(t){const e=ic(t,!0);if(e.hostname&&(!e.protocol||Ap.indexOf(e.protocol)>=0))try{e.hostname=Tp.toUnicode(e.hostname)}catch{}return xi(nc(e),xi.defaultChars+"%")}function nt(t,e){if(!(this instanceof nt))return new nt(t,e);e||sc(t)||(e=t||{},t="default"),this.inline=new Mr,this.block=new bu,this.core=new oc,this.renderer=new Oi,this.linkify=new Ze,this.validateLink=Nw,this.normalizeLink=Fw,this.normalizeLinkText=Ow,this.utils=LC,this.helpers=mu({},zC),this.options={},this.configure(t),e&&this.set(e)}nt.prototype.set=function(t){return mu(this.options,t),this};nt.prototype.configure=function(t){const e=this;if(sc(t)){const n=t;if(t=Dw[n],!t)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(n){t.components[n].rules&&e[n].ruler.enableOnly(t.components[n].rules),t.components[n].rules2&&e[n].ruler2.enableOnly(t.components[n].rules2)}),this};nt.prototype.enable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));const i=t.filter(function(r){return n.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+i);return this};nt.prototype.disable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));const i=t.filter(function(r){return n.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+i);return this};nt.prototype.use=function(t){const e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};nt.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");const n=new this.core.State(t,this,e);return this.core.process(n),n.tokens};nt.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};nt.prototype.parseInline=function(t,e){const n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};nt.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};const Mw={name:"MoreButton",props:{fileName:{type:String,required:!0,default:"описание.txt"},imageSrc:{type:String,default:""}},data(){return{showDetails:!1,description:"",initialText:"",buttonText:"подробнее",md:new nt}},computed:{formattedDescription(){return this.md.render(this.description)}},methods:{toggleDetails(){this.showDetails=!this.showDetails,this.buttonText=this.showDetails?"свернуть":"подробнее",this.showDetails&&!this.description&&this.loadFullDescription()},async loadInitialText(){try{const t=await fetch(`/${this.fileName}`);if(!t.ok)throw new Error("Ошибка загрузки файла");const e=await t.text(),n=this.extractInitialText(e);this.initialText=this.md.render(n)}catch(t){console.error("Ошибка:",t),this.initialText=this.md.render("Не удалось загрузить описание.")}},async loadFullDescription(){try{const t=await fetch(`/${this.fileName}`);if(!t.ok)throw new Error("Ошибка загрузки файла");this.description=await t.text()}catch(t){console.error("Ошибка:",t),this.description="Не удалось загрузить описание."}},extractInitialText(t){const e=this.findNthOccurrence(t,"#",2);return e!==-1?t.slice(0,e).trim():t.trim()},findNthOccurrence(t,e,n){let i=0;for(let r=0;r<t.length;r++)if(t[r]===e&&(i++,i===n))return r;return-1}},mounted(){this.loadInitialText()}},Lw={class:"more-button"},Uw={class:"content"},Bw=["src"],$w={class:"text"},zw=["innerHTML"],Hw={key:0,class:"details"},qw=["innerHTML"];function Ww(t,e,n,i,r,s){return he(),me("div",Lw,[O("div",Uw,[n.imageSrc?(he(),me("img",{key:0,src:n.imageSrc,alt:"Image",class:"image"},null,8,Bw)):ts("",!0),O("div",$w,[r.initialText?(he(),me("div",{key:0,innerHTML:r.initialText},null,8,zw)):ts("",!0),O("button",{onClick:e[0]||(e[0]=(...u)=>s.toggleDetails&&s.toggleDetails(...u))},Nn(r.buttonText),1)])]),r.showDetails?(he(),me("div",Hw,[O("div",{innerHTML:s.formattedDescription},null,8,qw)])):ts("",!0)])}const Lo=Dt(Mw,[["render",Ww],["__scopeId","data-v-d05dd550"]]),jw={id:"morebutton"},Vw={class:"container"},Gw={class:"single-image"},Kw={class:"single-image"},Yw={class:"single-image"},Qw={class:"single-image"},Jw={class:"single-image"},Zw={class:"single-image"},Xw={class:"single-image"},e4={class:"prompt-item"},t4=O("div",{class:"prompt-text"}," in the style of ck-mgs, nistyle, Special Ink-drawing mode, intricate linework with expressive contrasts, Mh1$AgThS2, Inkplash art on rice paper, sepia, henna , Silhouette Art, magnificent, inksplash closeup portrait of stunning japanese female sc-fi soldier, helmet, mirrored visor reflecting jungle environment ",-1),n4={class:"prompt-item"},i4=O("div",{class:"prompt-text"},' bmstyle anime "A human head made of translucent, crystallized material shatters outward, with shards transforming into a burst of vibrant flowers. The flowers are varied in color and species, blooming mid-air as if born from the explosion. Soft light refracts through the crystal fragments, creating a surreal, dreamlike atmosphere." ',-1),r4={class:"prompt-item"},s4=O("div",{class:"prompt-text"}," Masterpiece, absurdres, best quality, 1boy, solo, Scrat, long snout, bushy tail, bulging eyes, striped tail, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet, acorn insignia ",-1),u4={class:"prompt-item"},o4=O("div",{class:"prompt-text"}," Masterpiece, absurdres, best quality, 1boy, solo, ch1ken, chicken, long beak, cartoon, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet ",-1),a4={class:"prompt-item"},c4=O("div",{class:"prompt-text"}," A dove stands on two legs in an aristocratic coat and spy glasses on the tenth street of a dark city in the middle of a dark night ",-1),l4=O("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1),d4={__name:"Neuroart",setup(t){return(e,n)=>{const i=no("DocumentationIcon");return he(),me(Ue,null,[O("div",jw,[V(Lo,{fileName:"./young/public/text/t1.txt",imageSrc:"./images/Image.jpg"}),V(Lo,{fileName:"./young/public/text/t2.txt",imageSrc:"./images/Image1.jpg"})]),O("div",Vw,[O("div",Gw,[V(Qe,{imageSrc:"./images/Image.jpg",imageWidth:"150px"})]),O("div",Kw,[V(Qe,{imageSrc:"./images/Imagevag.jpg",imageWidth:"150px"})]),O("div",Yw,[V(Qe,{imageSrc:"./images/Image1.jpg",imageWidth:"150px"})]),O("div",Qw,[V(Qe,{imageSrc:"./images/16.jpeg",imageWidth:"150px"})]),O("div",Jw,[V(Qe,{imageSrc:"./images/17.jpeg",imageWidth:"150px"})]),O("div",Zw,[V(Qe,{imageSrc:"./images/18.png",imageWidth:"150px"})]),O("div",Xw,[V(Qe,{imageSrc:"./images/1.jpg",imageWidth:"150px"})]),O("div",e4,[V(Qe,{imageSrc:"./images/10.jpeg",imageWidth:"150px"}),t4]),O("div",n4,[V(Qe,{imageSrc:"./images/11.png",imageWidth:"150px"}),i4]),O("div",r4,[V(Qe,{imageSrc:"./images/12.jpeg",imageWidth:"150px"}),s4]),O("div",u4,[V(Qe,{imageSrc:"./images/15.jpeg",imageWidth:"150px"}),o4]),O("div",a4,[V(Qe,{imageSrc:"./images/2.jpg",imageWidth:"150px"}),c4])]),V(ME,null,{icon:Et(()=>[V(i)]),heading:Et(()=>[Je(" Documentation ")]),default:Et(()=>[Je(" Vue's "),l4,Je(" provides you with all information you need to get started. ")]),_:1})],64)}}},f4={id:"morebutton"},h4={class:"image-container"},p4={class:"content-wrapper"},_4=O("div",{class:"text-content"}," Вася Пупкин ",-1),m4={__name:"Graffiti",setup(t){return(e,n)=>(he(),me(Ue,null,[O("div",f4,[V(Lo,{fileName:"./young/public/text/t1.txt",imageSrc:"./images/Image.jpg"})]),O("div",h4,[O("div",p4,[V(Qe,{imageSrc:"./images/Image.jpg",imageWidth:"300px"}),_4])])],64))}},g4={};function b4(t,e){return he(),me("div",null," Привет ")}const y4=Dt(g4,[["render",b4]]),v4=bE({history:G6("/young/"),routes:[{path:"/",name:"home",component:kE},{path:"/about",name:"about",component:RE},{path:"/welcome",name:"welcome",component:jE},{path:"/neuroart",name:"neuroart",component:d4},{path:"/graffiti",name:"graffiti",component:m4},{path:"/volonter",name:"volonter",component:y4}]});X1(_6).use(v4).mount("#app");
