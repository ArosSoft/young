(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ko(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return r=>!!n[r]}const pe={},ui=[],Tt=()=>{},Vp=()=>!1,Gp=/^on[^a-z]/,Qs=t=>Gp.test(t),Yo=t=>t.startsWith("onUpdate:"),Me=Object.assign,Qo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kp=Object.prototype.hasOwnProperty,X=(t,e)=>Kp.call(t,e),H=Array.isArray,oi=t=>Js(t)==="[object Map]",Qd=t=>Js(t)==="[object Set]",G=t=>typeof t=="function",Ce=t=>typeof t=="string",Jo=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Jd=t=>_e(t)&&G(t.then)&&G(t.catch),Zd=Object.prototype.toString,Js=t=>Zd.call(t),Yp=t=>Js(t).slice(8,-1),Xd=t=>Js(t)==="[object Object]",Zo=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ss=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qp=/-(\w)/g,St=Zs(t=>t.replace(Qp,(e,n)=>n?n.toUpperCase():"")),Jp=/\B([A-Z])/g,Di=Zs(t=>t.replace(Jp,"-$1").toLowerCase()),Xs=Zs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Du=Zs(t=>t?`on${Xs(t)}`:""),cr=(t,e)=>!Object.is(t,e),us=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},uo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wc;const oo=()=>wc||(wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ce(i)?t_(i):eu(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ce(t))return t;if(_e(t))return t}}const Zp=/;(?![^(]*\))/g,Xp=/:([^]+)/,e_=/\/\*[^]*?\*\//g;function t_(t){const e={};return t.replace(e_,"").split(Zp).forEach(n=>{if(n){const i=n.split(Xp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xo(t){let e="";if(Ce(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const i=Xo(t[n]);i&&(e+=i+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i_=Ko(n_);function ef(t){return!!t||t===""}const ct=t=>Ce(t)?t:t==null?"":H(t)||_e(t)&&(t.toString===Zd||!G(t.toString))?JSON.stringify(t,tf,2):String(t),tf=(t,e)=>e&&e.__v_isRef?tf(t,e.value):oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Qd(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!H(e)&&!Xd(e)?String(e):e;let st;class r_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function s_(t,e=st){e&&e.active&&e.effects.push(t)}function u_(){return st}const ea=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nf=t=>(t.w&yn)>0,rf=t=>(t.n&yn)>0,o_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yn},a_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];nf(r)&&!rf(r)?r.delete(t):e[n++]=r,r.w&=~yn,r.n&=~yn}e.length=n}},ao=new WeakMap;let Ki=0,yn=1;const co=30;let ut;const Ln=Symbol(""),lo=Symbol("");class ta{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,s_(this,i)}run(){if(!this.active)return this.fn();let e=ut,n=dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,dn=!0,yn=1<<++Ki,Ki<=co?o_(this):kc(this),this.fn()}finally{Ki<=co&&a_(this),yn=1<<--Ki,ut=this.parent,dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(kc(this),this.onStop&&this.onStop(),this.active=!1)}}function kc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dn=!0;const sf=[];function Ri(){sf.push(dn),dn=!1}function Pi(){const t=sf.pop();dn=t===void 0?!0:t}function He(t,e,n){if(dn&&ut){let i=ao.get(t);i||ao.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=ea()),uf(r)}}function uf(t,e){let n=!1;Ki<=co?rf(t)||(t.n|=yn,n=!nf(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function Wt(t,e,n,i,r,s){const u=ao.get(t);if(!u)return;let o=[];if(e==="clear")o=[...u.values()];else if(n==="length"&&H(t)){const a=Number(i);u.forEach((c,l)=>{(l==="length"||l>=a)&&o.push(c)})}else switch(n!==void 0&&o.push(u.get(n)),e){case"add":H(t)?Zo(n)&&o.push(u.get("length")):(o.push(u.get(Ln)),oi(t)&&o.push(u.get(lo)));break;case"delete":H(t)||(o.push(u.get(Ln)),oi(t)&&o.push(u.get(lo)));break;case"set":oi(t)&&o.push(u.get(Ln));break}if(o.length===1)o[0]&&fo(o[0]);else{const a=[];for(const c of o)c&&a.push(...c);fo(ea(a))}}function fo(t,e){const n=H(t)?t:[...t];for(const i of n)i.computed&&Ic(i);for(const i of n)i.computed||Ic(i)}function Ic(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const c_=Ko("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jo)),l_=na(),d_=na(!1,!0),f_=na(!0),Tc=h_();function h_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=te(this);for(let s=0,u=this.length;s<u;s++)He(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(te)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ri();const i=te(this)[e].apply(this,n);return Pi(),i}}),t}function p_(t){const e=te(this);return He(e,"has",t),e.hasOwnProperty(t)}function na(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?D_:ff:e?df:lf).get(i))return i;const u=H(i);if(!t){if(u&&X(Tc,r))return Reflect.get(Tc,r,s);if(r==="hasOwnProperty")return p_}const o=Reflect.get(i,r,s);return(Jo(r)?of.has(r):c_(r))||(t||He(i,"get",r),e)?o:Oe(o)?u&&Zo(r)?o:o.value:_e(o)?t?pf(o):nu(o):o}}const __=af(),m_=af(!0);function af(t=!1){return function(n,i,r,s){let u=n[i];if(gi(u)&&Oe(u)&&!Oe(r))return!1;if(!t&&(!bs(r)&&!gi(r)&&(u=te(u),r=te(r)),!H(n)&&Oe(u)&&!Oe(r)))return u.value=r,!0;const o=H(n)&&Zo(i)?Number(i)<n.length:X(n,i),a=Reflect.set(n,i,r,s);return n===te(s)&&(o?cr(r,u)&&Wt(n,"set",i,r):Wt(n,"add",i,r)),a}}function g_(t,e){const n=X(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Wt(t,"delete",e,void 0),i}function b_(t,e){const n=Reflect.has(t,e);return(!Jo(e)||!of.has(e))&&He(t,"has",e),n}function y_(t){return He(t,"iterate",H(t)?"length":Ln),Reflect.ownKeys(t)}const cf={get:l_,set:__,deleteProperty:g_,has:b_,ownKeys:y_},v_={get:f_,set(t,e){return!0},deleteProperty(t,e){return!0}},E_=Me({},cf,{get:d_,set:m_}),ia=t=>t,tu=t=>Reflect.getPrototypeOf(t);function Gr(t,e,n=!1,i=!1){t=t.__v_raw;const r=te(t),s=te(e);n||(e!==s&&He(r,"get",e),He(r,"get",s));const{has:u}=tu(r),o=i?ia:n?ua:lr;if(u.call(r,e))return o(t.get(e));if(u.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function Kr(t,e=!1){const n=this.__v_raw,i=te(n),r=te(t);return e||(t!==r&&He(i,"has",t),He(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Yr(t,e=!1){return t=t.__v_raw,!e&&He(te(t),"iterate",Ln),Reflect.get(t,"size",t)}function Ac(t){t=te(t);const e=te(this);return tu(e).has.call(e,t)||(e.add(t),Wt(e,"add",t,t)),this}function Sc(t,e){e=te(e);const n=te(this),{has:i,get:r}=tu(n);let s=i.call(n,t);s||(t=te(t),s=i.call(n,t));const u=r.call(n,t);return n.set(t,e),s?cr(e,u)&&Wt(n,"set",t,e):Wt(n,"add",t,e),this}function Dc(t){const e=te(this),{has:n,get:i}=tu(e);let r=n.call(e,t);r||(t=te(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Wt(e,"delete",t,void 0),s}function Rc(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Wt(t,"clear",void 0,void 0),n}function Qr(t,e){return function(i,r){const s=this,u=s.__v_raw,o=te(u),a=e?ia:t?ua:lr;return!t&&He(o,"iterate",Ln),u.forEach((c,l)=>i.call(r,a(c),a(l),s))}}function Jr(t,e,n){return function(...i){const r=this.__v_raw,s=te(r),u=oi(s),o=t==="entries"||t===Symbol.iterator&&u,a=t==="keys"&&u,c=r[t](...i),l=n?ia:e?ua:lr;return!e&&He(s,"iterate",a?lo:Ln),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[l(d[0]),l(d[1])]:l(d),done:f}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function C_(){const t={get(s){return Gr(this,s)},get size(){return Yr(this)},has:Kr,add:Ac,set:Sc,delete:Dc,clear:Rc,forEach:Qr(!1,!1)},e={get(s){return Gr(this,s,!1,!0)},get size(){return Yr(this)},has:Kr,add:Ac,set:Sc,delete:Dc,clear:Rc,forEach:Qr(!1,!0)},n={get(s){return Gr(this,s,!0)},get size(){return Yr(this,!0)},has(s){return Kr.call(this,s,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Qr(!0,!1)},i={get(s){return Gr(this,s,!0,!0)},get size(){return Yr(this,!0)},has(s){return Kr.call(this,s,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Qr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Jr(s,!1,!1),n[s]=Jr(s,!0,!1),e[s]=Jr(s,!1,!0),i[s]=Jr(s,!0,!0)}),[t,n,e,i]}const[x_,w_,k_,I_]=C_();function ra(t,e){const n=e?t?I_:k_:t?w_:x_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(X(n,r)&&r in i?n:i,r,s)}const T_={get:ra(!1,!1)},A_={get:ra(!1,!0)},S_={get:ra(!0,!1)},lf=new WeakMap,df=new WeakMap,ff=new WeakMap,D_=new WeakMap;function R_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function P_(t){return t.__v_skip||!Object.isExtensible(t)?0:R_(Yp(t))}function nu(t){return gi(t)?t:sa(t,!1,cf,T_,lf)}function hf(t){return sa(t,!1,E_,A_,df)}function pf(t){return sa(t,!0,v_,S_,ff)}function sa(t,e,n,i,r){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const u=P_(t);if(u===0)return t;const o=new Proxy(t,u===2?i:n);return r.set(t,o),o}function ai(t){return gi(t)?ai(t.__v_raw):!!(t&&t.__v_isReactive)}function gi(t){return!!(t&&t.__v_isReadonly)}function bs(t){return!!(t&&t.__v_isShallow)}function _f(t){return ai(t)||gi(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function mf(t){return gs(t,"__v_skip",!0),t}const lr=t=>_e(t)?nu(t):t,ua=t=>_e(t)?pf(t):t;function gf(t){dn&&ut&&(t=te(t),uf(t.dep||(t.dep=ea())))}function bf(t,e){t=te(t);const n=t.dep;n&&fo(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Lt(t){return yf(t,!1)}function N_(t){return yf(t,!0)}function yf(t,e){return Oe(t)?t:new F_(t,e)}class F_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:lr(e)}get value(){return gf(this),this._value}set value(e){const n=this.__v_isShallow||bs(e)||gi(e);e=n?e:te(e),cr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:lr(e),bf(this))}}function Un(t){return Oe(t)?t.value:t}const O_={get:(t,e,n)=>Un(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function vf(t){return ai(t)?t:new Proxy(t,O_)}class M_{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ta(e,()=>{this._dirty||(this._dirty=!0,bf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=te(this);return gf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function L_(t,e,n=!1){let i,r;const s=G(t);return s?(i=t,r=Tt):(i=t.get,r=t.set),new M_(i,r,s||!r,n)}function fn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){iu(s,e,n)}return r}function pt(t,e,n,i){if(G(t)){const s=fn(t,e,n,i);return s&&Jd(s)&&s.catch(u=>{iu(u,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(pt(t[s],e,n,i));return r}function iu(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const u=e.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let l=0;l<c.length;l++)if(c[l](t,u,o)===!1)return}s=s.parent}const a=e.appContext.config.errorHandler;if(a){fn(a,null,10,[t,u,o]);return}}U_(t,n,r,i)}function U_(t,e,n,i=!0){console.error(t)}let dr=!1,ho=!1;const Fe=[];let wt=0;const ci=[];let Ot=null,Rn=0;const Ef=Promise.resolve();let oa=null;function Cf(t){const e=oa||Ef;return t?e.then(this?t.bind(this):t):e}function B_(t){let e=wt+1,n=Fe.length;for(;e<n;){const i=e+n>>>1;fr(Fe[i])<t?e=i+1:n=i}return e}function aa(t){(!Fe.length||!Fe.includes(t,dr&&t.allowRecurse?wt+1:wt))&&(t.id==null?Fe.push(t):Fe.splice(B_(t.id),0,t),xf())}function xf(){!dr&&!ho&&(ho=!0,oa=Ef.then(kf))}function $_(t){const e=Fe.indexOf(t);e>wt&&Fe.splice(e,1)}function q_(t){H(t)?ci.push(...t):(!Ot||!Ot.includes(t,t.allowRecurse?Rn+1:Rn))&&ci.push(t),xf()}function Pc(t,e=dr?wt+1:0){for(;e<Fe.length;e++){const n=Fe[e];n&&n.pre&&(Fe.splice(e,1),e--,n())}}function wf(t){if(ci.length){const e=[...new Set(ci)];if(ci.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,i)=>fr(n)-fr(i)),Rn=0;Rn<Ot.length;Rn++)Ot[Rn]();Ot=null,Rn=0}}const fr=t=>t.id==null?1/0:t.id,z_=(t,e)=>{const n=fr(t)-fr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function kf(t){ho=!1,dr=!0,Fe.sort(z_);try{for(wt=0;wt<Fe.length;wt++){const e=Fe[wt];e&&e.active!==!1&&fn(e,null,14)}}finally{wt=0,Fe.length=0,wf(),dr=!1,oa=null,(Fe.length||ci.length)&&kf()}}function W_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||pe;let r=n;const s=e.startsWith("update:"),u=s&&e.slice(7);if(u&&u in i){const l=`${u==="modelValue"?"model":u}Modifiers`,{number:d,trim:f}=i[l]||pe;f&&(r=n.map(h=>Ce(h)?h.trim():h)),d&&(r=n.map(uo))}let o,a=i[o=Du(e)]||i[o=Du(St(e))];!a&&s&&(a=i[o=Du(Di(e))]),a&&pt(a,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,pt(c,t,6,r)}}function If(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let u={},o=!1;if(!G(t)){const a=c=>{const l=If(c,e,!0);l&&(o=!0,Me(u,l))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!s&&!o?(_e(t)&&i.set(t,null),null):(H(s)?s.forEach(a=>u[a]=null):Me(u,s),_e(t)&&i.set(t,u),u)}function ru(t,e){return!t||!Qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Di(e))||X(t,e))}let tt=null,su=null;function ys(t){const e=tt;return tt=t,su=t&&t.type.__scopeId||null,e}function Pr(t){su=t}function Nr(){su=null}function An(t,e=tt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&jc(-1);const s=ys(e);let u;try{u=t(...r)}finally{ys(s),i._d&&jc(1)}return u};return i._n=!0,i._c=!0,i._d=!0,i}function Nc(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[u],slots:o,attrs:a,emit:c,render:l,renderCache:d,data:f,setupState:h,ctx:_,inheritAttrs:y}=t;let k,P;const C=ys(t);try{if(n.shapeFlag&4){const x=r||i;k=xt(l.call(x,x,d,s,h,f,_)),P=a}else{const x=e;k=xt(x.length>1?x(s,{attrs:a,slots:o,emit:c}):x(s,null)),P=e.props?a:H_(a)}}catch(x){er.length=0,iu(x,t,1),k=V($n)}let w=k;if(P&&y!==!1){const x=Object.keys(P),{shapeFlag:M}=w;x.length&&M&7&&(u&&x.some(Yo)&&(P=j_(P,u)),w=bi(w,P))}return n.dirs&&(w=bi(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),k=w,ys(C),k}const H_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qs(n))&&((e||(e={}))[n]=t[n]);return e},j_=(t,e)=>{const n={};for(const i in t)(!Yo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function V_(t,e,n){const{props:i,children:r,component:s}=t,{props:u,children:o,patchFlag:a}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Fc(i,u,c):!!u;if(a&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const f=l[d];if(u[f]!==i[f]&&!ru(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===u?!1:i?u?Fc(i,u,c):!0:!!u;return!1}function Fc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ru(n,s))return!0}return!1}function G_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const K_=t=>t.__isSuspense;function Y_(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):q_(t)}const Zr={};function os(t,e,n){return Tf(t,e,n)}function Tf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:u}=pe){var o;const a=u_()===((o=Re)==null?void 0:o.scope)?Re:null;let c,l=!1,d=!1;if(Oe(t)?(c=()=>t.value,l=bs(t)):ai(t)?(c=()=>t,i=!0):H(t)?(d=!0,l=t.some(x=>ai(x)||bs(x)),c=()=>t.map(x=>{if(Oe(x))return x.value;if(ai(x))return Nn(x);if(G(x))return fn(x,a,2)})):G(t)?e?c=()=>fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),pt(t,a,3,[h])}:c=Tt,e&&i){const x=c;c=()=>Nn(x())}let f,h=x=>{f=C.onStop=()=>{fn(x,a,4)}},_;if(pr)if(h=Tt,e?n&&pt(e,a,3,[c(),d?[]:void 0,h]):c(),r==="sync"){const x=H1();_=x.__watcherHandles||(x.__watcherHandles=[])}else return Tt;let y=d?new Array(t.length).fill(Zr):Zr;const k=()=>{if(C.active)if(e){const x=C.run();(i||l||(d?x.some((M,$)=>cr(M,y[$])):cr(x,y)))&&(f&&f(),pt(e,a,3,[x,y===Zr?void 0:d&&y[0]===Zr?[]:y,h]),y=x)}else C.run()};k.allowRecurse=!!e;let P;r==="sync"?P=k:r==="post"?P=()=>$e(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),P=()=>aa(k));const C=new ta(c,P);e?n?k():y=C.run():r==="post"?$e(C.run.bind(C),a&&a.suspense):C.run();const w=()=>{C.stop(),a&&a.scope&&Qo(a.scope.effects,C)};return _&&_.push(w),w}function Q_(t,e,n){const i=this.proxy,r=Ce(t)?t.includes(".")?Af(i,t):()=>i[t]:t.bind(i,i);let s;G(e)?s=e:(s=e.handler,n=e);const u=Re;yi(this);const o=Tf(r,s.bind(i),n);return u?yi(u):Bn(),o}function Af(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Nn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Nn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(Qd(t)||oi(t))t.forEach(n=>{Nn(n,e)});else if(Xd(t))for(const n in t)Nn(t[n],e);return t}function vs(t,e){const n=tt;if(n===null)return t;const i=cu(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[u,o,a,c=pe]=e[s];u&&(G(u)&&(u={mounted:u,updated:u}),u.deep&&Nn(o),r.push({dir:u,instance:i,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function In(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let u=0;u<r.length;u++){const o=r[u];s&&(o.oldValue=s[u].value);let a=o.dir[i];a&&(Ri(),pt(a,n,8,[t.el,o,t,e]),Pi())}}function Sf(t,e){return G(t)?Me({name:t.name},e,{setup:t}):t}const as=t=>!!t.type.__asyncLoader,Df=t=>t.type.__isKeepAlive;function J_(t,e){Rf(t,"a",e)}function Z_(t,e){Rf(t,"da",e)}function Rf(t,e,n=Re){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(uu(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Df(r.parent.vnode)&&X_(i,e,n,r),r=r.parent}}function X_(t,e,n,i){const r=uu(e,t,i,!0);Pf(()=>{Qo(i[e],r)},n)}function uu(t,e,n=Re,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...u)=>{if(n.isUnmounted)return;Ri(),yi(n);const o=pt(e,n,t,u);return Bn(),Pi(),o});return i?r.unshift(s):r.push(s),s}}const Kt=t=>(e,n=Re)=>(!pr||t==="sp")&&uu(t,(...i)=>e(...i),n),e1=Kt("bm"),ca=Kt("m"),t1=Kt("bu"),n1=Kt("u"),i1=Kt("bum"),Pf=Kt("um"),r1=Kt("sp"),s1=Kt("rtg"),u1=Kt("rtc");function o1(t,e=Re){uu("ec",t,e)}const a1="components";function Oc(t,e){return l1(a1,t,!0,e)||t}const c1=Symbol.for("v-ndc");function l1(t,e,n=!0,i=!1){const r=tt||Re;if(r){const s=r.type;{const o=q1(s,!1);if(o&&(o===e||o===St(e)||o===Xs(St(e))))return s}const u=Mc(r[t]||s[t],e)||Mc(r.appContext[t],e);return!u&&i?s:u}}function Mc(t,e){return t&&(t[e]||t[St(e)]||t[Xs(St(e))])}function d1(t,e,n,i){let r;const s=n;if(H(t)||Ce(t)){r=new Array(t.length);for(let u=0,o=t.length;u<o;u++)r[u]=e(t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let u=0;u<t;u++)r[u]=e(u+1,u,void 0,s)}else if(_e(t))if(t[Symbol.iterator])r=Array.from(t,(u,o)=>e(u,o,void 0,s));else{const u=Object.keys(t);r=new Array(u.length);for(let o=0,a=u.length;o<a;o++){const c=u[o];r[o]=e(t[c],c,o,s)}}else r=[];return r}const po=t=>t?jf(t)?cu(t)||t.proxy:po(t.parent):null,Xi=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>po(t.parent),$root:t=>po(t.root),$emit:t=>t.emit,$options:t=>Ff(t),$forceUpdate:t=>t.f||(t.f=()=>aa(t.update)),$nextTick:t=>t.n||(t.n=Cf.bind(t.proxy)),$watch:t=>Q_.bind(t)}),Ru=(t,e)=>t!==pe&&!t.__isScriptSetup&&X(t,e),f1={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:u,type:o,appContext:a}=t;let c;if(e[0]!=="$"){const h=u[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ru(i,e))return u[e]=1,i[e];if(r!==pe&&X(r,e))return u[e]=2,r[e];if((c=t.propsOptions[0])&&X(c,e))return u[e]=3,s[e];if(n!==pe&&X(n,e))return u[e]=4,n[e];_o&&(u[e]=0)}}const l=Xi[e];let d,f;if(l)return e==="$attrs"&&He(t,"get",e),l(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==pe&&X(n,e))return u[e]=4,n[e];if(f=a.config.globalProperties,X(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ru(r,e)?(r[e]=n,!0):i!==pe&&X(i,e)?(i[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},u){let o;return!!n[u]||t!==pe&&X(t,u)||Ru(e,u)||(o=s[0])&&X(o,u)||X(i,u)||X(Xi,u)||X(r.config.globalProperties,u)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lc(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _o=!0;function h1(t){const e=Ff(t),n=t.proxy,i=t.ctx;_o=!1,e.beforeCreate&&Uc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:u,watch:o,provide:a,inject:c,created:l,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:y,deactivated:k,beforeDestroy:P,beforeUnmount:C,destroyed:w,unmounted:x,render:M,renderTracked:$,renderTriggered:K,errorCaptured:me,serverPrefetch:be,expose:xe,inheritAttrs:Ze,components:Pt,directives:Xe,filters:Jt}=e;if(c&&p1(c,i,null),u)for(const ue in u){const ne=u[ue];G(ne)&&(i[ue]=ne.bind(n))}if(r){const ue=r.call(n,n);_e(ue)&&(t.data=nu(ue))}if(_o=!0,s)for(const ue in s){const ne=s[ue],Nt=G(ne)?ne.bind(n,n):G(ne.get)?ne.get.bind(n,n):Tt,Zt=!G(ne)&&G(ne.set)?ne.set.bind(n):Tt,yt=ot({get:Nt,set:Zt});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Be=>yt.value=Be})}if(o)for(const ue in o)Nf(o[ue],i,n,ue);if(a){const ue=G(a)?a.call(n):a;Reflect.ownKeys(ue).forEach(ne=>{cs(ne,ue[ne])})}l&&Uc(l,t,"c");function ye(ue,ne){H(ne)?ne.forEach(Nt=>ue(Nt.bind(n))):ne&&ue(ne.bind(n))}if(ye(e1,d),ye(ca,f),ye(t1,h),ye(n1,_),ye(J_,y),ye(Z_,k),ye(o1,me),ye(u1,$),ye(s1,K),ye(i1,C),ye(Pf,x),ye(r1,be),H(xe))if(xe.length){const ue=t.exposed||(t.exposed={});xe.forEach(ne=>{Object.defineProperty(ue,ne,{get:()=>n[ne],set:Nt=>n[ne]=Nt})})}else t.exposed||(t.exposed={});M&&t.render===Tt&&(t.render=M),Ze!=null&&(t.inheritAttrs=Ze),Pt&&(t.components=Pt),Xe&&(t.directives=Xe)}function p1(t,e,n=Tt){H(t)&&(t=mo(t));for(const i in t){const r=t[i];let s;_e(r)?"default"in r?s=qt(r.from||i,r.default,!0):s=qt(r.from||i):s=qt(r),Oe(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:u=>s.value=u}):e[i]=s}}function Uc(t,e,n){pt(H(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nf(t,e,n,i){const r=i.includes(".")?Af(n,i):()=>n[i];if(Ce(t)){const s=e[t];G(s)&&os(r,s)}else if(G(t))os(r,t.bind(n));else if(_e(t))if(H(t))t.forEach(s=>Nf(s,e,n,i));else{const s=G(t.handler)?t.handler.bind(n):e[t.handler];G(s)&&os(r,s,t)}}function Ff(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:u}}=t.appContext,o=s.get(e);let a;return o?a=o:!r.length&&!n&&!i?a=e:(a={},r.length&&r.forEach(c=>Es(a,c,u,!0)),Es(a,e,u)),_e(e)&&s.set(e,a),a}function Es(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Es(t,s,n,!0),r&&r.forEach(u=>Es(t,u,n,!0));for(const u in e)if(!(i&&u==="expose")){const o=_1[u]||n&&n[u];t[u]=o?o(t[u],e[u]):e[u]}return t}const _1={data:Bc,props:$c,emits:$c,methods:Yi,computed:Yi,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Yi,directives:Yi,watch:g1,provide:Bc,inject:m1};function Bc(t,e){return e?t?function(){return Me(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function m1(t,e){return Yi(mo(t),mo(e))}function mo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function Yi(t,e){return t?Me(Object.create(null),t,e):e}function $c(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Me(Object.create(null),Lc(t),Lc(e??{})):e}function g1(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const i in e)n[i]=Le(t[i],e[i]);return n}function Of(){return{app:null,config:{isNativeTag:Vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let b1=0;function y1(t,e){return function(i,r=null){G(i)||(i=Me({},i)),r!=null&&!_e(r)&&(r=null);const s=Of(),u=new Set;let o=!1;const a=s.app={_uid:b1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:j1,get config(){return s.config},set config(c){},use(c,...l){return u.has(c)||(c&&G(c.install)?(u.add(c),c.install(a,...l)):G(c)&&(u.add(c),c(a,...l))),a},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),a},component(c,l){return l?(s.components[c]=l,a):s.components[c]},directive(c,l){return l?(s.directives[c]=l,a):s.directives[c]},mount(c,l,d){if(!o){const f=V(i,r);return f.appContext=s,t(f,c,d),o=!0,a._container=c,c.__vue_app__=a,cu(f.component)||f.component.proxy}},unmount(){o&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,l){return s.provides[c]=l,a},runWithContext(c){Cs=a;try{return c()}finally{Cs=null}}};return a}}let Cs=null;function cs(t,e){if(Re){let n=Re.provides;const i=Re.parent&&Re.parent.provides;i===n&&(n=Re.provides=Object.create(i)),n[t]=e}}function qt(t,e,n=!1){const i=Re||tt;if(i||Cs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Cs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(i&&i.proxy):e}}function v1(t,e,n,i=!1){const r={},s={};gs(s,au,1),t.propsDefaults=Object.create(null),Mf(t,e,r,s);for(const u in t.propsOptions[0])u in r||(r[u]=void 0);n?t.props=i?r:hf(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function E1(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:u}}=t,o=te(r),[a]=t.propsOptions;let c=!1;if((i||u>0)&&!(u&16)){if(u&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let f=l[d];if(ru(t.emitsOptions,f))continue;const h=e[f];if(a)if(X(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const _=St(f);r[_]=go(a,o,_,h,t,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{Mf(t,e,r,s)&&(c=!0);let l;for(const d in o)(!e||!X(e,d)&&((l=Di(d))===d||!X(e,l)))&&(a?n&&(n[d]!==void 0||n[l]!==void 0)&&(r[d]=go(a,o,d,void 0,t,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!X(e,d))&&(delete s[d],c=!0)}c&&Wt(t,"set","$attrs")}function Mf(t,e,n,i){const[r,s]=t.propsOptions;let u=!1,o;if(e)for(let a in e){if(ss(a))continue;const c=e[a];let l;r&&X(r,l=St(a))?!s||!s.includes(l)?n[l]=c:(o||(o={}))[l]=c:ru(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,u=!0)}if(s){const a=te(n),c=o||pe;for(let l=0;l<s.length;l++){const d=s[l];n[d]=go(r,a,d,c[d],t,!X(c,d))}}return u}function go(t,e,n,i,r,s){const u=t[n];if(u!=null){const o=X(u,"default");if(o&&i===void 0){const a=u.default;if(u.type!==Function&&!u.skipFactory&&G(a)){const{propsDefaults:c}=r;n in c?i=c[n]:(yi(r),i=c[n]=a.call(null,e),Bn())}else i=a}u[0]&&(s&&!o?i=!1:u[1]&&(i===""||i===Di(n))&&(i=!0))}return i}function Lf(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,u={},o=[];let a=!1;if(!G(t)){const l=d=>{a=!0;const[f,h]=Lf(d,e,!0);Me(u,f),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!a)return _e(t)&&i.set(t,ui),ui;if(H(s))for(let l=0;l<s.length;l++){const d=St(s[l]);qc(d)&&(u[d]=pe)}else if(s)for(const l in s){const d=St(l);if(qc(d)){const f=s[l],h=u[d]=H(f)||G(f)?{type:f}:Me({},f);if(h){const _=Hc(Boolean,h.type),y=Hc(String,h.type);h[0]=_>-1,h[1]=y<0||_<y,(_>-1||X(h,"default"))&&o.push(d)}}}const c=[u,o];return _e(t)&&i.set(t,c),c}function qc(t){return t[0]!=="$"}function zc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wc(t,e){return zc(t)===zc(e)}function Hc(t,e){return H(e)?e.findIndex(n=>Wc(n,t)):G(e)&&Wc(e,t)?0:-1}const Uf=t=>t[0]==="_"||t==="$stable",la=t=>H(t)?t.map(xt):[xt(t)],C1=(t,e,n)=>{if(e._n)return e;const i=An((...r)=>la(e(...r)),n);return i._c=!1,i},Bf=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Uf(r))continue;const s=t[r];if(G(s))e[r]=C1(r,s,i);else if(s!=null){const u=la(s);e[r]=()=>u}}},$f=(t,e)=>{const n=la(e);t.slots.default=()=>n},x1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),gs(e,"_",n)):Bf(e,t.slots={})}else t.slots={},e&&$f(t,e);gs(t.slots,au,1)},w1=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,u=pe;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(Me(r,e),!n&&o===1&&delete r._):(s=!e.$stable,Bf(e,r)),u=e}else e&&($f(t,e),u={default:1});if(s)for(const o in r)!Uf(o)&&!(o in u)&&delete r[o]};function bo(t,e,n,i,r=!1){if(H(t)){t.forEach((f,h)=>bo(f,e&&(H(e)?e[h]:e),n,i,r));return}if(as(i)&&!r)return;const s=i.shapeFlag&4?cu(i.component)||i.component.proxy:i.el,u=r?null:s,{i:o,r:a}=t,c=e&&e.r,l=o.refs===pe?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==a&&(Ce(c)?(l[c]=null,X(d,c)&&(d[c]=null)):Oe(c)&&(c.value=null)),G(a))fn(a,o,12,[u,l]);else{const f=Ce(a),h=Oe(a);if(f||h){const _=()=>{if(t.f){const y=f?X(d,a)?d[a]:l[a]:a.value;r?H(y)&&Qo(y,s):H(y)?y.includes(s)||y.push(s):f?(l[a]=[s],X(d,a)&&(d[a]=l[a])):(a.value=[s],t.k&&(l[t.k]=a.value))}else f?(l[a]=u,X(d,a)&&(d[a]=u)):h&&(a.value=u,t.k&&(l[t.k]=u))};u?(_.id=-1,$e(_,n)):_()}}}const $e=Y_;function k1(t){return I1(t)}function I1(t,e){const n=oo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:u,createText:o,createComment:a,setText:c,setElementText:l,parentNode:d,nextSibling:f,setScopeId:h=Tt,insertStaticContent:_}=t,y=(p,m,g,b=null,v=null,T=null,S=!1,R=null,N=!!m.dynamicChildren)=>{if(p===m)return;p&&!zi(p,m)&&(b=E(p),Be(p,v,T,!0),p=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:I,ref:U,shapeFlag:L}=m;switch(I){case ou:k(p,m,g,b);break;case $n:P(p,m,g,b);break;case ls:p==null&&C(m,g,b,S);break;case Qe:Pt(p,m,g,b,v,T,S,R,N);break;default:L&1?M(p,m,g,b,v,T,S,R,N):L&6?Xe(p,m,g,b,v,T,S,R,N):(L&64||L&128)&&I.process(p,m,g,b,v,T,S,R,N,F)}U!=null&&v&&bo(U,p&&p.ref,T,m||p,!m)},k=(p,m,g,b)=>{if(p==null)i(m.el=o(m.children),g,b);else{const v=m.el=p.el;m.children!==p.children&&c(v,m.children)}},P=(p,m,g,b)=>{p==null?i(m.el=a(m.children||""),g,b):m.el=p.el},C=(p,m,g,b)=>{[p.el,p.anchor]=_(p.children,m,g,b,p.el,p.anchor)},w=({el:p,anchor:m},g,b)=>{let v;for(;p&&p!==m;)v=f(p),i(p,g,b),p=v;i(m,g,b)},x=({el:p,anchor:m})=>{let g;for(;p&&p!==m;)g=f(p),r(p),p=g;r(m)},M=(p,m,g,b,v,T,S,R,N)=>{S=S||m.type==="svg",p==null?$(m,g,b,v,T,S,R,N):be(p,m,v,T,S,R,N)},$=(p,m,g,b,v,T,S,R)=>{let N,I;const{type:U,props:L,shapeFlag:B,transition:j,dirs:Z}=p;if(N=p.el=u(p.type,T,L&&L.is,L),B&8?l(N,p.children):B&16&&me(p.children,N,null,b,v,T&&U!=="foreignObject",S,R),Z&&In(p,null,b,"created"),K(N,p,p.scopeId,S,b),L){for(const oe in L)oe!=="value"&&!ss(oe)&&s(N,oe,null,L[oe],T,p.children,b,v,Pe);"value"in L&&s(N,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Et(I,b,p)}Z&&In(p,null,b,"beforeMount");const le=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;le&&j.beforeEnter(N),i(N,m,g),((I=L&&L.onVnodeMounted)||le||Z)&&$e(()=>{I&&Et(I,b,p),le&&j.enter(N),Z&&In(p,null,b,"mounted")},v)},K=(p,m,g,b,v)=>{if(g&&h(p,g),b)for(let T=0;T<b.length;T++)h(p,b[T]);if(v){let T=v.subTree;if(m===T){const S=v.vnode;K(p,S,S.scopeId,S.slotScopeIds,v.parent)}}},me=(p,m,g,b,v,T,S,R,N=0)=>{for(let I=N;I<p.length;I++){const U=p[I]=R?nn(p[I]):xt(p[I]);y(null,U,m,g,b,v,T,S,R)}},be=(p,m,g,b,v,T,S)=>{const R=m.el=p.el;let{patchFlag:N,dynamicChildren:I,dirs:U}=m;N|=p.patchFlag&16;const L=p.props||pe,B=m.props||pe;let j;g&&Tn(g,!1),(j=B.onVnodeBeforeUpdate)&&Et(j,g,m,p),U&&In(m,p,g,"beforeUpdate"),g&&Tn(g,!0);const Z=v&&m.type!=="foreignObject";if(I?xe(p.dynamicChildren,I,R,g,b,Z,T):S||ne(p,m,R,null,g,b,Z,T,!1),N>0){if(N&16)Ze(R,m,L,B,g,b,v);else if(N&2&&L.class!==B.class&&s(R,"class",null,B.class,v),N&4&&s(R,"style",L.style,B.style,v),N&8){const le=m.dynamicProps;for(let oe=0;oe<le.length;oe++){const Se=le[oe],rt=L[Se],Xn=B[Se];(Xn!==rt||Se==="value")&&s(R,Se,rt,Xn,v,p.children,g,b,Pe)}}N&1&&p.children!==m.children&&l(R,m.children)}else!S&&I==null&&Ze(R,m,L,B,g,b,v);((j=B.onVnodeUpdated)||U)&&$e(()=>{j&&Et(j,g,m,p),U&&In(m,p,g,"updated")},b)},xe=(p,m,g,b,v,T,S)=>{for(let R=0;R<m.length;R++){const N=p[R],I=m[R],U=N.el&&(N.type===Qe||!zi(N,I)||N.shapeFlag&70)?d(N.el):g;y(N,I,U,null,b,v,T,S,!0)}},Ze=(p,m,g,b,v,T,S)=>{if(g!==b){if(g!==pe)for(const R in g)!ss(R)&&!(R in b)&&s(p,R,g[R],null,S,m.children,v,T,Pe);for(const R in b){if(ss(R))continue;const N=b[R],I=g[R];N!==I&&R!=="value"&&s(p,R,I,N,S,m.children,v,T,Pe)}"value"in b&&s(p,"value",g.value,b.value)}},Pt=(p,m,g,b,v,T,S,R,N)=>{const I=m.el=p?p.el:o(""),U=m.anchor=p?p.anchor:o("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:j}=m;j&&(R=R?R.concat(j):j),p==null?(i(I,g,b),i(U,g,b),me(m.children,g,U,v,T,S,R,N)):L>0&&L&64&&B&&p.dynamicChildren?(xe(p.dynamicChildren,B,g,v,T,S,R),(m.key!=null||v&&m===v.subTree)&&qf(p,m,!0)):ne(p,m,g,U,v,T,S,R,N)},Xe=(p,m,g,b,v,T,S,R,N)=>{m.slotScopeIds=R,p==null?m.shapeFlag&512?v.ctx.activate(m,g,b,S,N):Jt(m,g,b,v,T,S,N):Ke(p,m,N)},Jt=(p,m,g,b,v,T,S)=>{const R=p.component=M1(p,b,v);if(Df(p)&&(R.ctx.renderer=F),L1(R),R.asyncDep){if(v&&v.registerDep(R,ye),!p.el){const N=R.subTree=V($n);P(null,N,m,g)}return}ye(R,p,m,g,v,T,S)},Ke=(p,m,g)=>{const b=m.component=p.component;if(V_(p,m,g))if(b.asyncDep&&!b.asyncResolved){ue(b,m,g);return}else b.next=m,$_(b.update),b.update();else m.el=p.el,b.vnode=m},ye=(p,m,g,b,v,T,S)=>{const R=()=>{if(p.isMounted){let{next:U,bu:L,u:B,parent:j,vnode:Z}=p,le=U,oe;Tn(p,!1),U?(U.el=Z.el,ue(p,U,S)):U=Z,L&&us(L),(oe=U.props&&U.props.onVnodeBeforeUpdate)&&Et(oe,j,U,Z),Tn(p,!0);const Se=Nc(p),rt=p.subTree;p.subTree=Se,y(rt,Se,d(rt.el),E(rt),p,v,T),U.el=Se.el,le===null&&G_(p,Se.el),B&&$e(B,v),(oe=U.props&&U.props.onVnodeUpdated)&&$e(()=>Et(oe,j,U,Z),v)}else{let U;const{el:L,props:B}=m,{bm:j,m:Z,parent:le}=p,oe=as(m);Tn(p,!1),j&&us(j),!oe&&(U=B&&B.onVnodeBeforeMount)&&Et(U,le,m),Tn(p,!0);{const Se=p.subTree=Nc(p);y(null,Se,g,b,p,v,T),m.el=Se.el}if(Z&&$e(Z,v),!oe&&(U=B&&B.onVnodeMounted)){const Se=m;$e(()=>Et(U,le,Se),v)}(m.shapeFlag&256||le&&as(le.vnode)&&le.vnode.shapeFlag&256)&&p.a&&$e(p.a,v),p.isMounted=!0,m=g=b=null}},N=p.effect=new ta(R,()=>aa(I),p.scope),I=p.update=()=>N.run();I.id=p.uid,Tn(p,!0),I()},ue=(p,m,g)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,E1(p,m.props,b,g),w1(p,m.children,g),Ri(),Pc(),Pi()},ne=(p,m,g,b,v,T,S,R,N=!1)=>{const I=p&&p.children,U=p?p.shapeFlag:0,L=m.children,{patchFlag:B,shapeFlag:j}=m;if(B>0){if(B&128){Zt(I,L,g,b,v,T,S,R,N);return}else if(B&256){Nt(I,L,g,b,v,T,S,R,N);return}}j&8?(U&16&&Pe(I,v,T),L!==I&&l(g,L)):U&16?j&16?Zt(I,L,g,b,v,T,S,R,N):Pe(I,v,T,!0):(U&8&&l(g,""),j&16&&me(L,g,b,v,T,S,R,N))},Nt=(p,m,g,b,v,T,S,R,N)=>{p=p||ui,m=m||ui;const I=p.length,U=m.length,L=Math.min(I,U);let B;for(B=0;B<L;B++){const j=m[B]=N?nn(m[B]):xt(m[B]);y(p[B],j,g,null,v,T,S,R,N)}I>U?Pe(p,v,T,!0,!1,L):me(m,g,b,v,T,S,R,N,L)},Zt=(p,m,g,b,v,T,S,R,N)=>{let I=0;const U=m.length;let L=p.length-1,B=U-1;for(;I<=L&&I<=B;){const j=p[I],Z=m[I]=N?nn(m[I]):xt(m[I]);if(zi(j,Z))y(j,Z,g,null,v,T,S,R,N);else break;I++}for(;I<=L&&I<=B;){const j=p[L],Z=m[B]=N?nn(m[B]):xt(m[B]);if(zi(j,Z))y(j,Z,g,null,v,T,S,R,N);else break;L--,B--}if(I>L){if(I<=B){const j=B+1,Z=j<U?m[j].el:b;for(;I<=B;)y(null,m[I]=N?nn(m[I]):xt(m[I]),g,Z,v,T,S,R,N),I++}}else if(I>B)for(;I<=L;)Be(p[I],v,T,!0),I++;else{const j=I,Z=I,le=new Map;for(I=Z;I<=B;I++){const Ye=m[I]=N?nn(m[I]):xt(m[I]);Ye.key!=null&&le.set(Ye.key,I)}let oe,Se=0;const rt=B-Z+1;let Xn=!1,Ec=0;const qi=new Array(rt);for(I=0;I<rt;I++)qi[I]=0;for(I=j;I<=L;I++){const Ye=p[I];if(Se>=rt){Be(Ye,v,T,!0);continue}let vt;if(Ye.key!=null)vt=le.get(Ye.key);else for(oe=Z;oe<=B;oe++)if(qi[oe-Z]===0&&zi(Ye,m[oe])){vt=oe;break}vt===void 0?Be(Ye,v,T,!0):(qi[vt-Z]=I+1,vt>=Ec?Ec=vt:Xn=!0,y(Ye,m[vt],g,null,v,T,S,R,N),Se++)}const Cc=Xn?T1(qi):ui;for(oe=Cc.length-1,I=rt-1;I>=0;I--){const Ye=Z+I,vt=m[Ye],xc=Ye+1<U?m[Ye+1].el:b;qi[I]===0?y(null,vt,g,xc,v,T,S,R,N):Xn&&(oe<0||I!==Cc[oe]?yt(vt,g,xc,2):oe--)}}},yt=(p,m,g,b,v=null)=>{const{el:T,type:S,transition:R,children:N,shapeFlag:I}=p;if(I&6){yt(p.component.subTree,m,g,b);return}if(I&128){p.suspense.move(m,g,b);return}if(I&64){S.move(p,m,g,F);return}if(S===Qe){i(T,m,g);for(let L=0;L<N.length;L++)yt(N[L],m,g,b);i(p.anchor,m,g);return}if(S===ls){w(p,m,g);return}if(b!==2&&I&1&&R)if(b===0)R.beforeEnter(T),i(T,m,g),$e(()=>R.enter(T),v);else{const{leave:L,delayLeave:B,afterLeave:j}=R,Z=()=>i(T,m,g),le=()=>{L(T,()=>{Z(),j&&j()})};B?B(T,Z,le):le()}else i(T,m,g)},Be=(p,m,g,b=!1,v=!1)=>{const{type:T,props:S,ref:R,children:N,dynamicChildren:I,shapeFlag:U,patchFlag:L,dirs:B}=p;if(R!=null&&bo(R,null,g,p,!0),U&256){m.ctx.deactivate(p);return}const j=U&1&&B,Z=!as(p);let le;if(Z&&(le=S&&S.onVnodeBeforeUnmount)&&Et(le,m,p),U&6)Vr(p.component,g,b);else{if(U&128){p.suspense.unmount(g,b);return}j&&In(p,null,m,"beforeUnmount"),U&64?p.type.remove(p,m,g,v,F,b):I&&(T!==Qe||L>0&&L&64)?Pe(I,m,g,!1,!0):(T===Qe&&L&384||!v&&U&16)&&Pe(N,m,g),b&&Jn(p)}(Z&&(le=S&&S.onVnodeUnmounted)||j)&&$e(()=>{le&&Et(le,m,p),j&&In(p,null,m,"unmounted")},g)},Jn=p=>{const{type:m,el:g,anchor:b,transition:v}=p;if(m===Qe){Zn(g,b);return}if(m===ls){x(p);return}const T=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(p.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:R}=v,N=()=>S(g,T);R?R(p.el,T,N):N()}else T()},Zn=(p,m)=>{let g;for(;p!==m;)g=f(p),r(p),p=g;r(m)},Vr=(p,m,g)=>{const{bum:b,scope:v,update:T,subTree:S,um:R}=p;b&&us(b),v.stop(),T&&(T.active=!1,Be(S,p,m,g)),R&&$e(R,m),$e(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Pe=(p,m,g,b=!1,v=!1,T=0)=>{for(let S=T;S<p.length;S++)Be(p[S],m,g,b,v)},E=p=>p.shapeFlag&6?E(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),O=(p,m,g)=>{p==null?m._vnode&&Be(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,g),Pc(),wf(),m._vnode=p},F={p:y,um:Be,m:yt,r:Jn,mt:Jt,mc:me,pc:ne,pbc:xe,n:E,o:t};return{render:O,hydrate:void 0,createApp:y1(O)}}function Tn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qf(t,e,n=!1){const i=t.children,r=e.children;if(H(i)&&H(r))for(let s=0;s<i.length;s++){const u=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=nn(r[s]),o.el=u.el),n||qf(u,o)),o.type===ou&&(o.el=u.el)}}function T1(t){const e=t.slice(),n=[0];let i,r,s,u,o;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,u=n.length-1;s<u;)o=s+u>>1,t[n[o]]<c?s=o+1:u=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,u=n[s-1];s-- >0;)n[s]=u,u=e[u];return n}const A1=t=>t.__isTeleport,Qe=Symbol.for("v-fgt"),ou=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),ls=Symbol.for("v-stc"),er=[];let lt=null;function se(t=!1){er.push(lt=t?null:[])}function S1(){er.pop(),lt=er[er.length-1]||null}let hr=1;function jc(t){hr+=t}function zf(t){return t.dynamicChildren=hr>0?lt||ui:null,S1(),hr>0&&lt&&lt.push(t),t}function ae(t,e,n,i,r,s){return zf(D(t,e,n,i,r,s,!0))}function D1(t,e,n,i,r){return zf(V(t,e,n,i,r,!0))}function yo(t){return t?t.__v_isVNode===!0:!1}function zi(t,e){return t.type===e.type&&t.key===e.key}const au="__vInternal",Wf=({key:t})=>t??null,ds=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Oe(t)||G(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,i=0,r=null,s=t===Qe?0:1,u=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wf(e),ref:e&&ds(e),scopeId:su,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tt};return o?(da(a,n),s&128&&t.normalize(a)):n&&(a.shapeFlag|=Ce(n)?8:16),hr>0&&!u&&lt&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&lt.push(a),a}const V=R1;function R1(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===c1)&&(t=$n),yo(t)){const o=bi(t,e,!0);return n&&da(o,n),hr>0&&!s&&lt&&(o.shapeFlag&6?lt[lt.indexOf(t)]=o:lt.push(o)),o.patchFlag|=-2,o}if(z1(t)&&(t=t.__vccOpts),e){e=P1(e);let{class:o,style:a}=e;o&&!Ce(o)&&(e.class=Xo(o)),_e(a)&&(_f(a)&&!H(a)&&(a=Me({},a)),e.style=eu(a))}const u=Ce(t)?1:K_(t)?128:A1(t)?64:_e(t)?4:G(t)?2:0;return D(t,e,n,i,r,u,s,!0)}function P1(t){return t?_f(t)||au in t?Me({},t):t:null}function bi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:u}=t,o=e?N1(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Wf(o),ref:e&&e.ref?n&&r?H(r)?r.concat(ds(e)):[r,ds(e)]:ds(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bi(t.ssContent),ssFallback:t.ssFallback&&bi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ct(t=" ",e=0){return V(ou,null,t,e)}function Hf(t,e){const n=V(ls,null,t);return n.staticCount=e,n}function hn(t="",e=!1){return e?(se(),D1($n,null,t)):V($n,null,t)}function xt(t){return t==null||typeof t=="boolean"?V($n):H(t)?V(Qe,null,t.slice()):typeof t=="object"?nn(t):V(ou,null,String(t))}function nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bi(t)}function da(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),da(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(au in e)?e._ctx=tt:r===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),i&64?(n=16,e=[Ct(e)]):n=8);t.children=e,t.shapeFlag|=n}function N1(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xo([e.class,i.class]));else if(r==="style")e.style=eu([e.style,i.style]);else if(Qs(r)){const s=e[r],u=i[r];u&&s!==u&&!(H(s)&&s.includes(u))&&(e[r]=s?[].concat(s,u):u)}else r!==""&&(e[r]=i[r])}return e}function Et(t,e,n,i=null){pt(t,e,7,[n,i])}const F1=Of();let O1=0;function M1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||F1,s={uid:O1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new r_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lf(i,r),emitsOptions:If(i,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:i.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=W_.bind(null,s),t.ce&&t.ce(s),s}let Re=null,fa,ei,Vc="__VUE_INSTANCE_SETTERS__";(ei=oo()[Vc])||(ei=oo()[Vc]=[]),ei.push(t=>Re=t),fa=t=>{ei.length>1?ei.forEach(e=>e(t)):ei[0](t)};const yi=t=>{fa(t),t.scope.on()},Bn=()=>{Re&&Re.scope.off(),fa(null)};function jf(t){return t.vnode.shapeFlag&4}let pr=!1;function L1(t,e=!1){pr=e;const{props:n,children:i}=t.vnode,r=jf(t);v1(t,n,r,e),x1(t,i);const s=r?U1(t,e):void 0;return pr=!1,s}function U1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mf(new Proxy(t.ctx,f1));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?$1(t):null;yi(t),Ri();const s=fn(i,t,0,[t.props,r]);if(Pi(),Bn(),Jd(s)){if(s.then(Bn,Bn),e)return s.then(u=>{Gc(t,u)}).catch(u=>{iu(u,t,0)});t.asyncDep=s}else Gc(t,s)}else Vf(t)}function Gc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=vf(e)),Vf(t)}function Vf(t,e,n){const i=t.type;t.render||(t.render=i.render||Tt),yi(t),Ri(),h1(t),Pi(),Bn()}function B1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}}))}function $1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return B1(t)},slots:t.slots,emit:t.emit,expose:e}}function cu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vf(mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xi)return Xi[n](t)},has(e,n){return n in e||n in Xi}}))}function q1(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function z1(t){return G(t)&&"__vccOpts"in t}const ot=(t,e)=>L_(t,e,pr);function Gf(t,e,n){const i=arguments.length;return i===2?_e(e)&&!H(e)?yo(e)?V(t,null,[e]):V(t,e):V(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&yo(n)&&(n=[n]),V(t,e,n))}const W1=Symbol.for("v-scx"),H1=()=>qt(W1),j1="3.3.4",V1="http://www.w3.org/2000/svg",Pn=typeof document<"u"?document:null,Kc=Pn&&Pn.createElement("template"),G1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Pn.createElementNS(V1,t):Pn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const u=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Kc.innerHTML=i?`<svg>${t}</svg>`:t;const o=Kc.content;if(i){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}e.insertBefore(o,n)}return[u?u.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function K1(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Y1(t,e,n){const i=t.style,r=Ce(n);if(n&&!r){if(e&&!Ce(e))for(const s in e)n[s]==null&&vo(i,s,"");for(const s in n)vo(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Yc=/\s*!important$/;function vo(t,e,n){if(H(n))n.forEach(i=>vo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Q1(t,e);Yc.test(n)?t.setProperty(Di(i),n.replace(Yc,""),"important"):t[i]=n}}const Qc=["Webkit","Moz","ms"],Pu={};function Q1(t,e){const n=Pu[e];if(n)return n;let i=St(e);if(i!=="filter"&&i in t)return Pu[e]=i;i=Xs(i);for(let r=0;r<Qc.length;r++){const s=Qc[r]+i;if(s in t)return Pu[e]=s}return e}const Jc="http://www.w3.org/1999/xlink";function J1(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jc,e.slice(6,e.length)):t.setAttributeNS(Jc,e,n);else{const s=i_(e);n==null||s&&!ef(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Z1(t,e,n,i,r,s,u){if(e==="innerHTML"||e==="textContent"){i&&u(i,r,s),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const c=o==="OPTION"?t.getAttribute("value"):t.value,l=n??"";c!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ef(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ii(t,e,n,i){t.addEventListener(e,n,i)}function X1(t,e,n,i){t.removeEventListener(e,n,i)}function em(t,e,n,i,r=null){const s=t._vei||(t._vei={}),u=s[e];if(i&&u)u.value=i;else{const[o,a]=tm(e);if(i){const c=s[e]=rm(i,r);ii(t,o,c,a)}else u&&(X1(t,o,u,a),s[e]=void 0)}}const Zc=/(?:Once|Passive|Capture)$/;function tm(t){let e;if(Zc.test(t)){e={};let i;for(;i=t.match(Zc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Di(t.slice(2)),e]}let Nu=0;const nm=Promise.resolve(),im=()=>Nu||(nm.then(()=>Nu=0),Nu=Date.now());function rm(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;pt(sm(i,n.value),e,5,[i])};return n.value=t,n.attached=im(),n}function sm(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xc=/^on[a-z]/,um=(t,e,n,i,r=!1,s,u,o,a)=>{e==="class"?K1(t,i,r):e==="style"?Y1(t,n,i):Qs(e)?Yo(e)||em(t,e,n,i,u):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):om(t,e,i,r))?Z1(t,e,i,s,u,o,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),J1(t,e,i,r))};function om(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Xc.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xc.test(e)&&Ce(n)?!1:e in t}const el=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>us(e,n):e};function am(t){t.target.composing=!0}function tl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xs={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=el(r);const s=i||r.props&&r.props.type==="number";ii(t,e?"change":"input",u=>{if(u.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=uo(o)),t._assign(o)}),n&&ii(t,"change",()=>{t.value=t.value.trim()}),e||(ii(t,"compositionstart",am),ii(t,"compositionend",tl),ii(t,"change",tl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=el(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&uo(t.value)===e))return;const u=e??"";t.value!==u&&(t.value=u)}},cm=["ctrl","shift","alt","meta"],lm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cm.some(n=>t[`${n}Key`]&&!e.includes(n))},Kf=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=lm[e[r]];if(s&&s(n,e))return}return t(n,...i)},dm=Me({patchProp:um},G1);let nl;function fm(){return nl||(nl=k1(dm))}const hm=(...t)=>{const e=fm().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=pm(i);if(!r)return;const s=e._component;!G(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const u=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),u},e};function pm(t){return Ce(t)?document.querySelector(t):t}const _m="/young/assets/logo-Dln01LZm.jfif",Yt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},mm=t=>(Pr("data-v-02d15251"),t=t(),Nr(),t),gm={class:"greetings"},bm={class:"green"},ym=mm(()=>D("h3",null,[Ct(" Платформа для поддержки творческих инициатив детей и молодежи в городе Липецк"),D("br")],-1)),vm={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(se(),ae("div",gm,[D("h1",bm,ct(t.msg),1),ym]))}},Em=Yt(vm,[["__scopeId","data-v-02d15251"]]),Cm=t=>(Pr("data-v-66871be8"),t=t(),Nr(),t),xm={class:"footer"},wm={class:"footer-content"},km=Cm(()=>D("div",{class:"footer-links"},[D("a",{href:"#"},"Условия использования"),Ct(" | "),D("a",{href:"#"},"Политика конфиденциальности"),Ct(" | "),D("a",{href:"#"},"Контакты")],-1)),Im={__name:"TheFooter",setup(t){const e=new Date().getFullYear();return(n,i)=>(se(),ae("footer",xm,[D("div",wm,[D("p",null,"© "+ct(Un(e))+" Моё приложение. Все права защищены.",1),km])]))}},Tm=Yt(Im,[["__scopeId","data-v-66871be8"]]),Am=()=>{};var il={};/**
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
 */const Yf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw Ni(e)},Ni=function(t){return new Error("Firebase Database ("+Yf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Qf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Sm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],u=t[n++],o=t[n++],a=((r&7)<<18|(s&63)<<12|(u&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],u=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|u&63)}}return e.join("")},ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],u=r+1<t.length,o=u?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=s>>2,d=(s&3)<<4|o>>4;let f=(o&15)<<2|c>>6,h=c&63;a||(h=64,u||(f=64)),i.push(n[l],n[d],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||o==null||c==null||d==null)throw new Dm;const f=s<<2|o>>4;if(i.push(f),c!==64){const h=o<<4&240|c>>2;if(i.push(h),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jf=function(t){const e=Qf(t);return ha.encodeByteArray(e,!0)},ws=function(t){return Jf(t).replace(/\./g,"")},ks=function(t){try{return ha.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rm(t){return Zf(void 0,t)}function Zf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Pm(n)||(t[n]=Zf(t[n],e[n]));return t}function Pm(t){return t!=="__proto__"}/**
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
 */function Nm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fm=()=>Nm().__FIREBASE_DEFAULTS__,Om=()=>{if(typeof process>"u"||typeof il>"u")return;const t=il.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ks(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return Am()||Fm()||Om()||Mm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xf=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lm=t=>{const e=Xf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},eh=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},th=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Um(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ws(JSON.stringify(n)),ws(JSON.stringify(u)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Bm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $m(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qm(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zm(){return Yf.NODE_ADMIN===!0}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Hm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const jm="FirebaseError";class xn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=jm,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],u=s?Vm(s,i):"Error",o=`${this.serviceName}: ${u} (${r}).`;return new xn(r,o,i)}}function Vm(t,e){return t.replace(Gm,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Gm=/\{\$([^}]+)}/g;/**
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
 */function _r(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
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
 */const ih=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=_r(ks(s[0])||""),n=_r(ks(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Km=function(t){const e=ih(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ym=function(t){const e=ih(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Eo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function qn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],u=e[r];if(rl(s)&&rl(u)){if(!qn(s,u))return!1}else if(s!==u)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function rl(t){return t!==null&&typeof t=="object"}/**
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
 */function Fi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Ji(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Qm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],u=this.chain_[2],o=this.chain_[3],a=this.chain_[4],c,l;for(let d=0;d<80;d++){d<40?d<20?(c=o^s&(u^o),l=1518500249):(c=s^u^o,l=1859775393):d<60?(c=s&u|o&(s|u),l=2400959708):(c=s^u^o,l=3395469782);const f=(r<<5|r>>>27)+c+a+l+i[d]&4294967295;a=o,o=u,u=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let u=this.inbuf_;for(;r<n;){if(u===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[u]=e.charCodeAt(r),++u,++r,u===this.blockSize){this.compress_(s),u=0;break}}else for(;r<n;)if(s[u]=e[r],++u,++r,u===this.blockSize){this.compress_(s),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Jm(t,e){const n=new Zm(t,e);return n.subscribe.bind(n)}class Zm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Xm(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Fu),r.error===void 0&&(r.error=Fu),r.complete===void 0&&(r.complete=Fu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fu(){}function ma(t,e){return`${t} failed: ${e} argument `}/**
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
 */const eg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,A(i<t.length,"Surrogate pair missing trail surrogate.");const u=t.charCodeAt(i)-56320;r=65536+(s<<10)+u}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},du=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new lu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ig(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,u]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&u.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const u=this.instances.get(r);return u&&e(u,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ng(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ng(t){return t===Sn?void 0:t}function ig(t){return t.instantiationMode==="EAGER"}/**
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
 */class rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const sg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ug=re.INFO,og={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ag=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=og[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ga{constructor(e){this.name=e,this._logLevel=ug,this._logHandler=ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const cg=(t,e)=>e.some(n=>t instanceof n);let sl,ul;function lg(){return sl||(sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dg(){return ul||(ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rh=new WeakMap,Co=new WeakMap,sh=new WeakMap,Ou=new WeakMap,ba=new WeakMap;function fg(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",u)},s=()=>{n(pn(t.result)),r()},u=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&rh.set(n,t)}).catch(()=>{}),ba.set(e,t),e}function hg(t){if(Co.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",u),t.removeEventListener("abort",u)},s=()=>{n(),r()},u=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",u),t.addEventListener("abort",u)});Co.set(t,e)}let xo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Co.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pg(t){xo=t(xo)}function _g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Mu(this),e,...n);return sh.set(i,e.sort?e.sort():[e]),pn(i)}:dg().includes(t)?function(...e){return t.apply(Mu(this),e),pn(rh.get(this))}:function(...e){return pn(t.apply(Mu(this),e))}}function mg(t){return typeof t=="function"?_g(t):(t instanceof IDBTransaction&&hg(t),cg(t,lg())?new Proxy(t,xo):t)}function pn(t){if(t instanceof IDBRequest)return fg(t);if(Ou.has(t))return Ou.get(t);const e=mg(t);return e!==t&&(Ou.set(t,e),ba.set(e,t)),e}const Mu=t=>ba.get(t);function gg(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const u=indexedDB.open(t,e),o=pn(u);return i&&u.addEventListener("upgradeneeded",a=>{i(pn(u.result),a.oldVersion,a.newVersion,pn(u.transaction),a)}),n&&u.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),o.then(a=>{s&&a.addEventListener("close",()=>s()),r&&a.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const bg=["get","getKey","getAll","getAllKeys","count"],yg=["put","add","delete","clear"],Lu=new Map;function ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lu.get(e))return Lu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=yg.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||bg.includes(n)))return;const s=async function(u,...o){const a=this.transaction(u,r?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),r&&a.done]))[0]};return Lu.set(e,s),s}pg(t=>({...t,get:(e,n,i)=>ol(e,n)||t.get(e,n,i),has:(e,n)=>!!ol(e,n)||t.has(e,n)}));/**
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
 */class vg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eg(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Eg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wo="@firebase/app",al="0.11.4";/**
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
 */const Ht=new ga("@firebase/app"),Cg="@firebase/app-compat",xg="@firebase/analytics-compat",wg="@firebase/analytics",kg="@firebase/app-check-compat",Ig="@firebase/app-check",Tg="@firebase/auth",Ag="@firebase/auth-compat",Sg="@firebase/database",Dg="@firebase/data-connect",Rg="@firebase/database-compat",Pg="@firebase/functions",Ng="@firebase/functions-compat",Fg="@firebase/installations",Og="@firebase/installations-compat",Mg="@firebase/messaging",Lg="@firebase/messaging-compat",Ug="@firebase/performance",Bg="@firebase/performance-compat",$g="@firebase/remote-config",qg="@firebase/remote-config-compat",zg="@firebase/storage",Wg="@firebase/storage-compat",Hg="@firebase/firestore",jg="@firebase/vertexai",Vg="@firebase/firestore-compat",Gg="firebase",Kg="11.6.0";/**
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
 */const ko="[DEFAULT]",Yg={[wo]:"fire-core",[Cg]:"fire-core-compat",[wg]:"fire-analytics",[xg]:"fire-analytics-compat",[Ig]:"fire-app-check",[kg]:"fire-app-check-compat",[Tg]:"fire-auth",[Ag]:"fire-auth-compat",[Sg]:"fire-rtdb",[Dg]:"fire-data-connect",[Rg]:"fire-rtdb-compat",[Pg]:"fire-fn",[Ng]:"fire-fn-compat",[Fg]:"fire-iid",[Og]:"fire-iid-compat",[Mg]:"fire-fcm",[Lg]:"fire-fcm-compat",[Ug]:"fire-perf",[Bg]:"fire-perf-compat",[$g]:"fire-rc",[qg]:"fire-rc-compat",[zg]:"fire-gcs",[Wg]:"fire-gcs-compat",[Hg]:"fire-fst",[Vg]:"fire-fst-compat",[jg]:"fire-vertex","fire-js":"fire-js",[Gg]:"fire-js-all"};/**
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
 */const Ts=new Map,Qg=new Map,Io=new Map;function cl(t,e){try{t.container.addComponent(e)}catch(n){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(Io.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;Io.set(e,t);for(const n of Ts.values())cl(n,t);for(const n of Qg.values())cl(n,t);return!0}function ya(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function et(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Fr("app","Firebase",Jg);/**
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
 */class Zg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const Oi=Kg;function uh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ko,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw _n.create("bad-app-name",{appName:String(r)});if(n||(n=eh()),!n)throw _n.create("no-options");const s=Ts.get(r);if(s){if(qn(n,s.options)&&qn(i,s.config))return s;throw _n.create("duplicate-app",{appName:r})}const u=new rg(r);for(const a of Io.values())u.addComponent(a);const o=new Zg(n,i,u);return Ts.set(r,o),o}function oh(t=ko){const e=Ts.get(t);if(!e&&t===ko&&eh())return uh();if(!e)throw _n.create("no-app",{appName:t});return e}function mn(t,e,n){var i;let r=(i=Yg[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),u=e.match(/\s|\//);if(s||u){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&u&&o.push("and"),u&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(o.join(" "));return}Ei(new zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xg="firebase-heartbeat-database",eb=1,mr="firebase-heartbeat-store";let Uu=null;function ah(){return Uu||(Uu=gg(Xg,eb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mr)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Uu}async function tb(t){try{const n=(await ah()).transaction(mr),i=await n.objectStore(mr).get(ch(t));return await n.done,i}catch(e){if(e instanceof xn)Ht.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(n.message)}}}async function ll(t,e){try{const i=(await ah()).transaction(mr,"readwrite");await i.objectStore(mr).put(e,ch(t)),await i.done}catch(n){if(n instanceof xn)Ht.warn(n.message);else{const i=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(i.message)}}}function ch(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nb=1024,ib=30;class rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ub(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(u=>u.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>ib){const u=ob(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ht.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dl(),{heartbeatsToSend:i,unsentEntries:r}=sb(this._heartbeatsCache.heartbeats),s=ws(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ht.warn(n),""}}}function dl(){return new Date().toISOString().substring(0,10)}function sb(t,e=nb){const n=[];let i=t.slice();for(const r of t){const s=n.find(u=>u.agent===r.agent);if(s){if(s.dates.push(r.date),fl(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ub{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?Hm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function fl(t){return ws(JSON.stringify({version:2,heartbeats:t})).length}function ob(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function ab(t){Ei(new zn("platform-logger",e=>new vg(e),"PRIVATE")),Ei(new zn("heartbeat",e=>new rb(e),"PRIVATE")),mn(wo,al,t),mn(wo,al,"esm2017"),mn("fire-js","")}ab("");var cb="firebase",lb="11.6.0";/**
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
 */mn(cb,lb,"app");function va(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function lh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const db=lh,dh=new Fr("auth","Firebase",lh());/**
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
 */const As=new ga("@firebase/auth");function fb(t,...e){As.logLevel<=re.WARN&&As.warn(`Auth (${Oi}): ${t}`,...e)}function fs(t,...e){As.logLevel<=re.ERROR&&As.error(`Auth (${Oi}): ${t}`,...e)}/**
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
 */function nt(t,...e){throw Ca(t,...e)}function _t(t,...e){return Ca(t,...e)}function Ea(t,e,n){const i=Object.assign(Object.assign({},db()),{[e]:n});return new Fr("auth","Firebase",i).create(e,{appName:t.name})}function gn(t){return Ea(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hb(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&nt(t,"argument-error"),Ea(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ca(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return dh.create(t,...e)}function z(t,e,...n){if(!t)throw Ca(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function jt(t,e){t||Ut(e)}/**
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
 */function To(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pb(){return hl()==="http:"||hl()==="https:"}function hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _b(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pb()||$m()||"connection"in navigator)?navigator.onLine:!0}function mb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=_a()||nh()}get(){return _b()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xa(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fh{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yb=new Or(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wn(t,e,n,i,r={}){return hh(t,r,async()=>{let s={},u={};i&&(e==="GET"?u=i:s={body:JSON.stringify(i)});const o=Fi(Object.assign({key:t.config.apiKey},u)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},s);return Bm()||(c.referrerPolicy="no-referrer"),fh.fetch()(await ph(t,t.config.apiHost,n,o),c)})}async function hh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},gb),e);try{const r=new Eb(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const u=await s.json();if("needConfirmation"in u)throw Xr(t,"account-exists-with-different-credential",u);if(s.ok&&!("errorMessage"in u))return u;{const o=s.ok?u.errorMessage:u.error.message,[a,c]=o.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(t,"credential-already-in-use",u);if(a==="EMAIL_EXISTS")throw Xr(t,"email-already-in-use",u);if(a==="USER_DISABLED")throw Xr(t,"user-disabled",u);const l=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ea(t,l,c);nt(t,l)}}catch(r){if(r instanceof xn)throw r;nt(t,"network-request-failed",{message:String(r)})}}async function fu(t,e,n,i,r={}){const s=await wn(t,e,n,i,r);return"mfaPendingCredential"in s&&nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ph(t,e,n,i){const r=`${e}${n}?${i}`,s=t,u=s.config.emulator?xa(t.config,r):`${t.config.apiScheme}://${r}`;return bb.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(u).toString():u}function vb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Eb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(_t(this.auth,"network-request-failed")),yb.get())})}}function Xr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=_t(t,e,i);return r.customData._tokenResponse=n,r}function pl(t){return t!==void 0&&t.enterprise!==void 0}class Cb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xb(t,e){return wn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
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
 */async function wb(t,e){return wn(t,"POST","/v1/accounts:delete",e)}async function Ss(t,e){return wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function tr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kb(t,e=!1){const n=Ge(t),i=await n.getIdToken(e),r=wa(i);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,u=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:tr(Bu(r.auth_time)),issuedAtTime:tr(Bu(r.iat)),expirationTime:tr(Bu(r.exp)),signInProvider:u||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bu(t){return Number(t)*1e3}function wa(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const r=ks(n);return r?JSON.parse(r):(fs("Failed to decode base64 JWT payload"),null)}catch(r){return fs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function _l(t){const e=wa(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof xn&&Ib(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ib({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Tb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ao{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ds(t){var e;const n=t.auth,i=await t.getIdToken(),r=await gr(t,Ss(n,{idToken:i}));z(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const u=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_h(s.providerUserInfo):[],o=Sb(t.providerData,u),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ao(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function Ab(t){const e=Ge(t);await Ds(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sb(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function _h(t){return t.map(e=>{var{providerId:n}=e,i=va(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Db(t,e){const n=await hh(t,{},async()=>{const i=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,u=await ph(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",fh.fetch()(u,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rb(t,e){return wn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=_l(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Db(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,u=new li;return i&&(z(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),r&&(z(typeof r=="string","internal-error",{appName:e}),u.accessToken=r),s&&(z(typeof s=="number","internal-error",{appName:e}),u.expirationTime=s),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function en(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=va(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ao(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kb(this,e)}reload(){return Ab(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ds(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await gr(this,wb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,u,o,a,c,l;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(u=n.photoURL)!==null&&u!==void 0?u:void 0,y=(o=n.tenantId)!==null&&o!==void 0?o:void 0,k=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:w,emailVerified:x,isAnonymous:M,providerData:$,stsTokenManager:K}=n;z(w&&K,e,"internal-error");const me=li.fromJSON(this.name,K);z(typeof w=="string",e,"internal-error"),en(d,e.name),en(f,e.name),z(typeof x=="boolean",e,"internal-error"),z(typeof M=="boolean",e,"internal-error"),en(h,e.name),en(_,e.name),en(y,e.name),en(k,e.name),en(P,e.name),en(C,e.name);const be=new dt({uid:w,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:M,photoURL:_,phoneNumber:h,tenantId:y,stsTokenManager:me,createdAt:P,lastLoginAt:C});return $&&Array.isArray($)&&(be.providerData=$.map(xe=>Object.assign({},xe))),k&&(be._redirectEventId=k),be}static async _fromIdTokenResponse(e,n,i=!1){const r=new li;r.updateFromServerResponse(n);const s=new dt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ds(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];z(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?_h(r.providerUserInfo):[],u=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),o=new li;o.updateFromIdToken(i);const a=new dt({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:u}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Ao(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
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
 */const ml=new Map;function Bt(t){jt(t instanceof Function,"Expected a class definition");let e=ml.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ml.set(t,e),e)}/**
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
 */class mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mh.type="NONE";const gl=mh;/**
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
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=hs(this.userKey,r.apiKey,s),this.fullPersistenceKey=hs("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ss(this.auth,{idToken:e}).catch(()=>{});return n?dt._fromGetAccountInfoResponse(this.auth,n,e):null}return dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new di(Bt(gl),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Bt(gl);const u=hs(i,e.config.apiKey,e.name);let o=null;for(const c of n)try{const l=await c._get(u);if(l){let d;if(typeof l=="string"){const f=await Ss(e,{idToken:l}).catch(()=>{});if(!f)break;d=await dt._fromGetAccountInfoResponse(e,f,l)}else d=dt._fromJSON(e,l);c!==s&&(o=d),s=c;break}}catch{}const a=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new di(s,e,i):(s=a[0],o&&await s._set(u,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(u)}catch{}})),new di(s,e,i))}}/**
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
 */function bl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ch(e))return"Blackberry";if(xh(e))return"Webos";if(bh(e))return"Safari";if((e.includes("chrome/")||yh(e))&&!e.includes("edge/"))return"Chrome";if(Eh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gh(t=Ue()){return/firefox\//i.test(t)}function bh(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yh(t=Ue()){return/crios\//i.test(t)}function vh(t=Ue()){return/iemobile/i.test(t)}function Eh(t=Ue()){return/android/i.test(t)}function Ch(t=Ue()){return/blackberry/i.test(t)}function xh(t=Ue()){return/webos/i.test(t)}function ka(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pb(t=Ue()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nb(){return qm()&&document.documentMode===10}function wh(t=Ue()){return ka(t)||Eh(t)||xh(t)||Ch(t)||/windows phone/i.test(t)||vh(t)}/**
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
 */function kh(t,e=[]){let n;switch(t){case"Browser":n=bl(Ue());break;case"Worker":n=`${bl(Ue())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${i}`}/**
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
 */class Fb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((u,o)=>{try{const a=e(s);u(a)}catch(a){o(a)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Ob(t,e={}){return wn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
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
 */const Mb=6;class Lb{constructor(e){var n,i,r,s;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:Mb,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,u,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(u=a.containsNumericCharacter)!==null&&u!==void 0?u:!0),a.isValid&&(a.isValid=(o=a.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),a}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ub{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yl(this),this.idTokenSubscription=new yl(this),this.beforeStateQueue=new Fb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ss(this,{idToken:e}),i=await dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(et(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(o,o))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!u||u===o)&&(a!=null&&a.user)&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ds(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(gn(this));const n=e?Ge(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ob(this),n=new Lb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Rb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let u=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(o,this,"internal-error"),o.then(()=>{u||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,i,r);return()=>{u=!0,a()}}else{const a=e.addObserver(n);return()=>{u=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yn(t){return Ge(t)}class yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jm(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bb(t){hu=t}function Ih(t){return hu.loadJS(t)}function $b(){return hu.recaptchaEnterpriseScript}function qb(){return hu.gapiScript}function zb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Wb{constructor(){this.enterprise=new Hb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Hb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jb="recaptcha-enterprise",Th="NO_RECAPTCHA";class Vb{constructor(e){this.type=jb,this.auth=Yn(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(u,o)=>{xb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new Cb(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,u(c.siteKey)}}).catch(a=>{o(a)})})}function r(s,u,o){const a=window.grecaptcha;pl(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{u(c)}).catch(()=>{u(Th)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wb().execute("siteKey",{action:"verify"}):new Promise((s,u)=>{i(this.auth).then(o=>{if(!n&&pl(window.grecaptcha))r(o,s,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let a=$b();a.length!==0&&(a+=o),Ih(a).then(()=>{r(o,s,u)}).catch(c=>{u(c)})}}).catch(o=>{u(o)})})}}async function vl(t,e,n,i=!1,r=!1){const s=new Vb(t);let u;if(r)u=Th;else try{u=await s.verify(n)}catch{u=await s.verify(n,!0)}const o=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const a=o.phoneEnrollmentInfo.phoneNumber,c=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const a=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return i?Object.assign(o,{captchaResp:u}):Object.assign(o,{captchaResponse:u}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function El(t,e,n,i,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await vl(t,e,n,n==="getOobCode");return i(t,u)}else return i(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vl(t,e,n,n==="getOobCode");return i(t,o)}else return Promise.reject(u)})}/**
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
 */function Gb(t,e){const n=ya(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(qn(s,e??{}))return r;nt(r,"already-initialized")}return n.initialize({options:e})}function Kb(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Yb(t,e,n){const i=Yn(t);z(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Ah(e),{host:u,port:o}=Qb(e),a=o===null?"":`:${o}`,c={url:`${s}//${u}${a}/`},l=Object.freeze({host:u,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){z(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),z(qn(c,i.config.emulator)&&qn(l,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=l,i.settings.appVerificationDisabledForTesting=!0,Jb()}function Ah(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qb(t){const e=Ah(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Cl(i.substr(s.length+1))}}else{const[s,u]=i.split(":");return{host:s,port:Cl(u)}}}function Cl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Jb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ia{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function Zb(t,e){return wn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xb(t,e){return fu(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}/**
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
 */async function e2(t,e){return fu(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function t2(t,e){return fu(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
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
 */class br extends Ia{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new br(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new br(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,n,"signInWithPassword",Xb);case"emailLink":return e2(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,i,"signUpPassword",Zb);case"emailLink":return t2(e,{idToken:n,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fi(t,e){return fu(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
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
 */const n2="http://localhost";class Wn extends Ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=va(n,["providerId","signInMethod"]);if(!i||!r)return null;const u=new Wn(i,r);return u.idToken=s.idToken||void 0,u.accessToken=s.accessToken||void 0,u.secret=s.secret,u.nonce=s.nonce,u.pendingToken=s.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,fi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:n2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
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
 */function i2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r2(t){const e=Qi(Ji(t)).link,n=e?Qi(Ji(e)).deep_link_id:null,i=Qi(Ji(t)).deep_link_id;return(i?Qi(Ji(i)).link:null)||i||n||e||t}class Ta{constructor(e){var n,i,r,s,u,o;const a=Qi(Ji(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,l=(i=a.oobCode)!==null&&i!==void 0?i:null,d=i2((r=a.mode)!==null&&r!==void 0?r:null);z(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(u=a.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(o=a.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=r2(e);try{return new Ta(n)}catch{return null}}}/**
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
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,n){return br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ta.parseLink(n);return z(i,"argument-error"),br._fromEmailAndCode(e,i.code,i.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Aa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends Aa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends Mr{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mt.credential(n,i)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class on extends Mr{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends Mr{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return an.credential(n,i)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await dt._fromIdTokenResponse(e,i,r),u=xl(i);return new Ci({user:s,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=xl(i);return new Ci({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function xl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rs extends xn{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Rs(e,n,i,r)}}function Sh(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(t,s,e,i):s})}async function s2(t,e,n=!1){const i=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",i)}/**
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
 */async function u2(t,e,n=!1){const{auth:i}=t;if(et(i.app))return Promise.reject(gn(i));const r="reauthenticate";try{const s=await gr(t,Sh(i,r,e,t),n);z(s.idToken,i,"internal-error");const u=wa(s.idToken);z(u,i,"internal-error");const{sub:o}=u;return z(t.uid===o,i,"user-mismatch"),Ci._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nt(i,"user-mismatch"),s}}/**
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
 */async function Dh(t,e,n=!1){if(et(t.app))return Promise.reject(gn(t));const i="signIn",r=await Sh(t,i,e),s=await Ci._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function o2(t,e){return Dh(Yn(t),e)}/**
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
 */async function a2(t){const e=Yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function c2(t,e,n){return et(t.app)?Promise.reject(gn(t)):o2(Ge(t),Mi.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&a2(t),i})}function l2(t,e,n,i){return Ge(t).onIdTokenChanged(e,n,i)}function d2(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function f2(t){return Ge(t).signOut()}const Ps="__sak";/**
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
 */class Rh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const h2=1e3,p2=10;class Ph extends Rh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,o,a)=>{this.notifyListeners(u,a)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},s=this.storage.getItem(i);Nb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,p2):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},h2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ph.type="LOCAL";const _2=Ph;/**
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
 */class Nh extends Rh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nh.type="SESSION";const Fh=Nh;/**
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
 */function m2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new pu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,u=this.handlersMap[r];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(u).map(async c=>c(n.origin,s)),a=await m2(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
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
 */function Sa(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class g2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,u;return new Promise((o,a)=>{const c=Sa("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},i);u={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(f.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(u),r.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function At(){return window}function b2(t){At().location.href=t}/**
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
 */function Oh(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function y2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function E2(){return Oh()?self:null}/**
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
 */const Mh="firebaseLocalStorageDb",C2=1,Ns="firebaseLocalStorage",Lh="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _u(t,e){return t.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function x2(){const t=indexedDB.deleteDatabase(Mh);return new Lr(t).toPromise()}function So(){const t=indexedDB.open(Mh,C2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ns,{keyPath:Lh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ns)?e(i):(i.close(),await x2(),e(await So()))})})}async function wl(t,e,n){const i=_u(t,!0).put({[Lh]:e,value:n});return new Lr(i).toPromise()}async function w2(t,e){const n=_u(t,!1).get(e),i=await new Lr(n).toPromise();return i===void 0?null:i.value}function kl(t,e){const n=_u(t,!0).delete(e);return new Lr(n).toPromise()}const k2=800,I2=3;class Uh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await So(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>I2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance(E2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y2(),!this.activeServiceWorker)return;this.sender=new g2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await So();return await wl(e,Ps,"1"),await kl(e,Ps),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>wl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>w2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=_u(r,!1).getAll();return new Lr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uh.type="LOCAL";const T2=Uh;new Or(3e4,6e4);/**
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
 */function Bh(t,e){return e?Bt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Da extends Ia{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function A2(t){return Dh(t.auth,new Da(t),t.bypassAuthState)}function S2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),u2(n,new Da(t),t.bypassAuthState)}async function D2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),s2(n,new Da(t),t.bypassAuthState)}/**
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
 */class $h{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:u,type:o}=e;if(u){this.reject(u);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return A2;case"linkViaPopup":case"linkViaRedirect":return D2;case"reauthViaPopup":case"reauthViaRedirect":return S2;default:nt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const R2=new Or(2e3,1e4);async function P2(t,e,n){if(et(t.app))return Promise.reject(_t(t,"operation-not-supported-in-this-environment"));const i=Yn(t);hb(t,e,Aa);const r=Bh(i,n);return new Fn(i,"signInViaPopup",e,r).executeNotNull()}class Fn extends $h{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,R2.get())};e()}}Fn.currentPopupAction=null;/**
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
 */const N2="pendingRedirect",ps=new Map;class F2 extends $h{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ps.get(this.auth._key());if(!e){try{const i=await O2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ps.set(this.auth._key(),e)}return this.bypassAuthState||ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O2(t,e){const n=U2(e),i=L2(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function M2(t,e){ps.set(t._key(),e)}function L2(t){return Bt(t._redirectPersistence)}function U2(t){return hs(N2,t.config.apiKey,t.name)}async function B2(t,e,n=!1){if(et(t.app))return Promise.reject(gn(t));const i=Yn(t),r=Bh(i,e),u=await new F2(i,r,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
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
 */const $2=10*60*1e3;class q2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!qh(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Il(e))}saveEventToCache(e){this.cachedEventUids.add(Il(e)),this.lastProcessedEventTime=Date.now()}}function Il(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qh(t);default:return!1}}/**
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
 */async function W2(t,e={}){return wn(t,"GET","/v1/projects",e)}/**
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
 */const H2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j2=/^https?/;async function V2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await W2(t);for(const n of e)try{if(G2(n))return}catch{}nt(t,"unauthorized-domain")}function G2(t){const e=To(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!j2.test(n))return!1;if(H2.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const K2=new Or(3e4,6e4);function Tl(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y2(t){return new Promise((e,n)=>{var i,r,s;function u(){Tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tl(),n(_t(t,"network-request-failed"))},timeout:K2.get()})}if(!((r=(i=At().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)u();else{const o=zb("iframefcb");return At()[o]=()=>{gapi.load?u():n(_t(t,"network-request-failed"))},Ih(`${qb()}?onload=${o}`).catch(a=>n(a))}}).catch(e=>{throw _s=null,e})}let _s=null;function Q2(t){return _s=_s||Y2(t),_s}/**
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
 */const J2=new Or(5e3,15e3),Z2="__/auth/iframe",X2="emulator/auth/iframe",e3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n3(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xa(e,X2):`https://${t.config.authDomain}/${Z2}`,i={apiKey:e.apiKey,appName:t.name,v:Oi},r=t3.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Fi(i).slice(1)}`}async function i3(t){const e=await Q2(t),n=At().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:n3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e3,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const u=_t(t,"network-request-failed"),o=At().setTimeout(()=>{s(u)},J2.get());function a(){At().clearTimeout(o),r(i)}i.ping(a).then(a,()=>{s(u)})}))}/**
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
 */const r3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s3=500,u3=600,o3="_blank",a3="http://localhost";class Al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c3(t,e,n,i=s3,r=u3){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const a=Object.assign(Object.assign({},r3),{width:i.toString(),height:r.toString(),top:s,left:u}),c=Ue().toLowerCase();n&&(o=yh(c)?o3:n),gh(c)&&(e=e||a3,a.scrollbars="yes");const l=Object.entries(a).reduce((f,[h,_])=>`${f}${h}=${_},`,"");if(Pb(c)&&o!=="_self")return l3(e||"",o),new Al(null);const d=window.open(e||"",o,l);z(d,t,"popup-blocked");try{d.focus()}catch{}return new Al(d)}function l3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const d3="__/auth/handler",f3="emulator/auth/handler",h3=encodeURIComponent("fac");async function Sl(t,e,n,i,r,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Oi,eventId:r};if(e instanceof Aa){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",Eo(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,d]of Object.entries({}))u[l]=d}if(e instanceof Mr){const l=e.getScopes().filter(d=>d!=="");l.length>0&&(u.scopes=l.join(","))}t.tenantId&&(u.tid=t.tenantId);const o=u;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];const a=await t._getAppCheckToken(),c=a?`#${h3}=${encodeURIComponent(a)}`:"";return`${p3(t)}?${Fi(o).slice(1)}${c}`}function p3({config:t}){return t.emulator?xa(t,f3):`https://${t.authDomain}/${d3}`}/**
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
 */const $u="webStorageSupport";class _3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fh,this._completeRedirectFn=B2,this._overrideRedirectResult=M2}async _openPopup(e,n,i,r){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const u=await Sl(e,n,i,To(),r);return c3(e,u,Sa())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Sl(e,n,i,To(),r);return b2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(jt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await i3(e),i=new q2(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($u,{type:$u},r=>{var s;const u=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[$u];u!==void 0&&n(!!u),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=V2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wh()||bh()||ka()}}const m3=_3;var Dl="@firebase/auth",Rl="1.10.0";/**
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
 */class g3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y3(t){Ei(new zn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:u,authDomain:o}=i.options;z(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:u,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kh(t)},c=new Ub(i,r,s,a);return Kb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ei(new zn("auth-internal",e=>{const n=Yn(e.getProvider("auth").getImmediate());return(i=>new g3(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Dl,Rl,b3(t)),mn(Dl,Rl,"esm2017")}/**
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
 */const v3=5*60,E3=th("authIdTokenMaxAge")||v3;let Pl=null;const C3=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>E3)return;const r=n==null?void 0:n.token;Pl!==r&&(Pl=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function x3(t=oh()){const e=ya(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gb(t,{popupRedirectResolver:m3,persistence:[T2,_2,Fh]}),i=th("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const u=C3(s.toString());d2(n,u,()=>u(n.currentUser)),l2(n,o=>u(o))}}const r=Xf("auth");return r&&Yb(n,`http://${r}`),n}function w3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Bb({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=_t("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",w3().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y3("Browser");var Nl={};const Fl="@firebase/database",Ol="1.0.14";/**
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
 */let zh="";function k3(t){zh=t}/**
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
 */class I3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_r(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class T3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new I3(e)}}catch{}return new T3},On=Wh("localStorage"),A3=Wh("sessionStorage");/**
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
 */const hi=new ga("@firebase/database"),S3=function(){let t=1;return function(){return t++}}(),Hh=function(t){const e=eg(t),n=new Qm;n.update(e);const i=n.digest();return ha.encodeByteArray(i)},Ur=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ur.apply(null,i):typeof i=="object"?e+=Te(i):e+=i,e+=" "}return e};let nr=null,Ml=!0;const D3=function(t,e){A(!0,"Can't turn on custom loggers persistently."),hi.logLevel=re.VERBOSE,nr=hi.log.bind(hi)},Ne=function(...t){if(Ml===!0&&(Ml=!1,nr===null&&A3.get("logging_enabled")===!0&&D3()),nr){const e=Ur.apply(null,t);nr(e)}},Br=function(t){return function(...e){Ne(t,...e)}},Do=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ur(...t);hi.error(e)},Vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ur(...t)}`;throw hi.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Ur(...t);hi.warn(e)},R3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},P3=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xi="[MIN_NAME]",Hn="[MAX_NAME]",Li=function(t,e){if(t===e)return 0;if(t===xi||e===Hn)return-1;if(e===xi||t===Hn)return 1;{const n=Ll(t),i=Ll(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},N3=function(t,e){return t===e?0:t<e?-1:1},Wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},Ra=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Te(e[i]),n+=":",n+=Ra(t[e[i]]);return n+="}",n},Vh=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gh=function(t){A(!jh(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,u,o,a;t===0?(s=0,u=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(o=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=o+i,u=Math.round(t*Math.pow(2,n-o)-Math.pow(2,n))):(s=0,u=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(u%2?1:0),u=Math.floor(u/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const l=c.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(l.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},F3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function M3(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const L3=new RegExp("^-?(0*)\\d{1,10}$"),U3=-2147483648,B3=2147483647,Ll=function(t){if(L3.test(t)){const e=Number(t);if(e>=U3&&e<=B3)return e}return null},Ui=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},$3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ir=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class q3{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,et(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class z3{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class ms{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ms.OWNER="owner";/**
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
 */const Pa="5",Kh="v",Yh="s",Qh="r",Jh="f",Zh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xh="ls",e0="p",Ro="ac",t0="websocket",n0="long_polling";/**
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
 */class i0{constructor(e,n,i,r,s=!1,u="",o=!1,a=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=u,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=On.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&On.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function W3(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function r0(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let i;if(e===t0)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===n0)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W3(t)&&(n.ns=t.namespace);const r=[];return je(n,(s,u)=>{r.push(s+"="+u)}),i+r.join("&")}/**
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
 */class H3{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Rm(this.counters_)}}/**
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
 */const qu={},zu={};function Na(t){const e=t.toString();return qu[e]||(qu[e]=new H3),qu[e]}function j3(t,e){const n=t.toString();return zu[n]||(zu[n]=e()),zu[n]}/**
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
 */class V3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ui(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ul="start",G3="close",K3="pLPCommand",Y3="pRTLPCB",s0="id",u0="pw",o0="ser",Q3="cb",J3="seg",Z3="ts",X3="d",ey="dframe",a0=1870,c0=30,ty=a0-c0,ny=25e3,iy=3e4;class si{constructor(e,n,i,r,s,u,o){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=u,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Br(e),this.stats_=Na(n),this.urlFn=a=>(this.appCheckToken&&(a[Ro]=this.appCheckToken),r0(n,n0,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new V3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iy)),P3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fa((...s)=>{const[u,o,a,c,l]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ul)this.id=o,this.password=a;else if(u===G3)o?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(o,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...s)=>{const[u,o]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(u,o)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ul]="t",i[o0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Q3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Kh]=Pa,this.transportSessionId&&(i[Yh]=this.transportSessionId),this.lastSessionId&&(i[Xh]=this.lastSessionId),this.applicationId&&(i[e0]=this.applicationId),this.appCheckToken&&(i[Ro]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zh.test(location.hostname)&&(i[Qh]=Jh);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){si.forceAllow_=!0}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){return si.forceAllow_?!0:!si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!F3()&&!O3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Jf(n),r=Vh(i,ty);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[ey]="t",i[s0]=e,i[u0]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fa{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=S3(),window[K3+this.uniqueCallbackIdentifier]=e,window[Y3+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fa.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(o){Ne("frame writing exception"),o.stack&&Ne(o.stack),Ne(o)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[s0]=this.myID,e[u0]=this.myPW,e[o0]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+c0+i.length<=a0;){const u=this.pendingSegs.shift();i=i+"&"+J3+r+"="+u.seg+"&"+Z3+r+"="+u.ts+"&"+X3+r+"="+u.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(ny)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const ry=16384,sy=45e3;let Fs=null;typeof MozWebSocket<"u"?Fs=MozWebSocket:typeof WebSocket<"u"&&(Fs=WebSocket);class at{constructor(e,n,i,r,s,u,o){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Br(this.connId),this.stats_=Na(n),this.connURL=at.connectionURL_(n,u,o,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const u={};return u[Kh]=Pa,typeof location<"u"&&location.hostname&&Zh.test(location.hostname)&&(u[Qh]=Jh),n&&(u[Yh]=n),i&&(u[Xh]=i),r&&(u[Ro]=r),s&&(u[e0]=s),r0(e,t0,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,On.set("previous_websocket_failure",!0);try{let i;zm(),this.mySock=new Fs(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Fs!==null&&!at.forceDisallow_}static previouslyFailed(){return On.isInMemoryStorage||On.get("previous_websocket_failure")===!0}markConnectionHealthy(){On.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=_r(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Vh(n,ry);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class yr{static get ALL_TRANSPORTS(){return[si,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=at&&at.isAvailable();let i=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[at];else{const r=this.transports_=[];for(const s of yr.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);yr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yr.globalTransportInitialized_=!1;/**
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
 */const uy=6e4,oy=5e3,ay=10*1024,cy=100*1024,Wu="t",Bl="d",ly="s",$l="r",dy="e",ql="o",zl="a",Wl="n",Hl="p",fy="h";class hy{constructor(e,n,i,r,s,u,o,a,c,l){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=u,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Br("c:"+this.id+":"),this.transportManager_=new yr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ir(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ay?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wu in e){const n=e[Wu];n===zl?this.upgradeIfSecondaryHealthy_():n===$l?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ql&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wi("t",e),i=Wi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wi("t",e),i=Wi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wi(Wu,e);if(Bl in e){const i=e[Bl];if(n===fy){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Wl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ly?this.onConnectionShutdown_(i):n===$l?this.onReset_(i):n===dy?Do("Server Error: "+i):n===ql?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Do("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pa!==i&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ir(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ir(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(On.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class l0{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class d0{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Os extends d0{static getInstance(){return new Os}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_a()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jl=32,Vl=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new ce("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vn(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function f0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function py(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function h0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function p0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function Ee(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ce(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return qe(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Oa(t,e){if(vn(t)!==vn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ft(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(vn(t)>vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class _y{constructor(e,n){this.errorPrefix_=n,this.parts_=h0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=du(this.parts_[i]);_0(this)}}function my(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=du(e),_0(t)}function gy(t){const e=t.parts_.pop();t.byteLength_-=du(e),t.parts_.length>0&&(t.byteLength_-=1)}function _0(t){if(t.byteLength_>Vl)throw new Error(t.errorPrefix_+"has a key path longer than "+Vl+" bytes ("+t.byteLength_+").");if(t.parts_.length>jl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jl+") or object contains a cycle "+Dn(t))}function Dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ma extends d0{static getInstance(){return new Ma}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Hi=1e3,by=60*5*1e3,Gl=30*1e3,yy=1.3,vy=3e4,Ey="server_kill",Kl=3;class zt extends l0{constructor(e,n,i,r,s,u,o,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=u,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=zt.nextPersistentConnectionId_++,this.log_=Br("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hi,this.maxReconnectDelay_=by,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ma.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Os.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Te(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new lu,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const o=u.d;u.s==="ok"?n.resolve(o):n.reject(o)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+s),this.listens.has(u)||this.listens.set(u,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(u).has(s),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(u).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},u="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(u,s,o=>{const a=o.d,c=o.s;zt.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",o),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const i=vi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ym(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Km(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,u=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},u="n";r&&(s.q=i,s.t=r),this.sendRequest(u,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,u=>{r&&setTimeout(()=>{r(u.s,u.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const u={p:n,d:i};s!==void 0&&(u.h=s),this.outstandingPuts_.push({action:e,request:u,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Do("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vy&&(this.reconnectDelay_=Hi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+zt.nextConnectionId_++,s=this.lastSessionId;let u=!1,o=null;const a=function(){o?o.close():(u=!0,i())},c=function(d){A(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);u?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,o=new hy(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,h=>{We(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ey)},s))}catch(d){this.log_("Failed to get token: "+d),u||(this.repoInfo_.nodeAdmin&&We(d),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eo(this.interruptReasons_)&&(this.reconnectDelay_=Hi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Ra(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ce(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kl&&(this.reconnectDelay_=Gl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zh.replace(/\./g,"-")]=1,_a()?e["framework.cordova"]=1:nh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Os.getInstance().currentlyOnline();return Eo(this.interruptReasons_)&&e}}zt.nextPersistentConnectionId_=0;zt.nextConnectionId_=0;/**
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
 */class mu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Q(xi,e),r=new Q(xi,n);return this.compare(i,r)!==0}minPost(){return Q.MIN}}/**
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
 */let es;class m0 extends mu{static get __EMPTY_NODE(){return es}static set __EMPTY_NODE(e){es=e}compare(e,n){return Li(e.name,n.name)}isDefinedOn(e){throw Ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Hn,es)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,es)}toString(){return".key"}}const pi=new m0;/**
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
 */class ts{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?i(e.key,n):1,r&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Ie.RED,this.left=r??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,i,r,s){return new Ie(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class Cy{copy(e,n,i,r,s){return this}insert(e,n,i){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ts(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ts(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ts(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ts(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new Cy;/**
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
 */function xy(t,e){return Li(t.name,e.name)}function La(t,e){return Li(t,e)}/**
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
 */let Po;function wy(t){Po=t}const g0=function(t){return typeof t=="number"?"number:"+Gh(t):"string:"+t},b0=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else A(t===Po||t.isEmpty(),"priority of unexpected type.");A(t===Po||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Yl;class ke{static set __childrenNodeConstructor(e){Yl=e}static get __childrenNodeConstructor(){return Yl}constructor(e,n=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),b0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Y(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(A(i!==".priority"||vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+g0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gh(this.value_):e+=this.value_,this.lazyHash_=Hh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=ke.VALUE_TYPE_ORDER.indexOf(n),s=ke.VALUE_TYPE_ORDER.indexOf(i);return A(r>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let y0,v0;function ky(t){y0=t}function Iy(t){v0=t}class Ty extends mu{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Li(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Hn,new ke("[PRIORITY-POST]",v0))}makePost(e,n){const i=y0(e);return new Q(n,new ke("[PRIORITY-POST]",i))}toString(){return".priority"}}const ge=new Ty;/**
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
 */const Ay=Math.log(2);class Sy{constructor(e){const n=s=>parseInt(Math.log(s)/Ay,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ms=function(t,e,n,i){t.sort(e);const r=function(a,c){const l=c-a;let d,f;if(l===0)return null;if(l===1)return d=t[a],f=n?n(d):d,new Ie(f,d.node,Ie.BLACK,null,null);{const h=parseInt(l/2,10)+a,_=r(a,h),y=r(h+1,c);return d=t[h],f=n?n(d):d,new Ie(f,d.node,Ie.BLACK,_,y)}},s=function(a){let c=null,l=null,d=t.length;const f=function(_,y){const k=d-_,P=d;d-=_;const C=r(k+1,P),w=t[k],x=n?n(w):w;h(new Ie(x,w.node,y,null,C))},h=function(_){c?(c.left=_,c=_):(l=_,c=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),k=Math.pow(2,a.count-(_+1));y?f(k,Ie.BLACK):(f(k,Ie.BLACK),f(k,Ie.RED))}return l},u=new Sy(t.length),o=s(u);return new ze(i||e,o)};/**
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
 */let Hu;const ti={};class $t{static get Default(){return A(ti&&ge,"ChildrenNode.ts has not been loaded"),Hu=Hu||new $t({".priority":ti},{".priority":ge}),Hu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Q.Wrap);let u=s.getNext();for(;u;)r=r||e.isDefinedOn(u.node),i.push(u),u=s.getNext();let o;r?o=Ms(i,e.getCompare()):o=ti;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=o,new $t(l,c)}addToIndexes(e,n){const i=Is(this.indexes_,(r,s)=>{const u=vi(this.indexSet_,s);if(A(u,"Missing index implementation for "+s),r===ti)if(u.isDefinedOn(e.node)){const o=[],a=n.getIterator(Q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&o.push(c),c=a.getNext();return o.push(e),Ms(o,u.getCompare())}else return ti;else{const o=n.get(e.name);let a=r;return o&&(a=a.remove(new Q(e.name,o))),a.insert(e,e.node)}});return new $t(i,this.indexSet_)}removeFromIndexes(e,n){const i=Is(this.indexes_,r=>{if(r===ti)return r;{const s=n.get(e.name);return s?r.remove(new Q(e.name,s)):r}});return new $t(i,this.indexSet_)}}/**
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
 */let ji;class W{static get EMPTY_NODE(){return ji||(ji=new W(new ze(La),null,$t.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&b0(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ji}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ji:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Q(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const u=r.isEmpty()?ji:this.priorityNode_;return new W(r,u,s)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{A(Y(e)!==".priority"||vn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(de(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ge,(u,o)=>{n[u]=o.val(e),i++,s&&W.INTEGER_REGEXP_.test(u)?r=Math.max(r,Number(u)):s=!1}),!e&&s&&r<2*i){const u=[];for(const o in n)u[o]=n[o];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+g0(this.getPriority().val())+":"),this.forEachChild(ge,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Hh(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$r?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ge),r=n.getIterator(ge);let s=i.getNext(),u=r.getNext();for(;s&&u;){if(s.name!==u.name||!s.node.equals(u.node))return!1;s=i.getNext(),u=r.getNext()}return s===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dy extends W{constructor(){super(new ze(La),W.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const $r=new Dy;Object.defineProperties(Q,{MIN:{value:new Q(xi,W.EMPTY_NODE)},MAX:{value:new Q(Hn,$r)}});m0.__EMPTY_NODE=W.EMPTY_NODE;ke.__childrenNodeConstructor=W;wy($r);Iy($r);/**
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
 */const Ry=!0;function De(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ke(n,De(e))}if(!(t instanceof Array)&&Ry){const n=[];let i=!1;if(je(t,(u,o)=>{if(u.substring(0,1)!=="."){const a=De(o);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new Q(u,a)))}}),n.length===0)return W.EMPTY_NODE;const s=Ms(n,xy,u=>u.name,La);if(i){const u=Ms(n,ge.getCompare());return new W(s,De(e),new $t({".priority":u},{".priority":ge}))}else return new W(s,De(e),$t.Default)}else{let n=W.EMPTY_NODE;return je(t,(i,r)=>{if(Qt(t,i)&&i.substring(0,1)!=="."){const s=De(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(De(e))}}ky(De);/**
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
 */class Py extends mu{constructor(e){super(),this.indexPath_=e,A(!J(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Li(e.name,n.name):s}makePost(e,n){const i=De(e),r=W.EMPTY_NODE.updateChild(this.indexPath_,i);return new Q(n,r)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,$r);return new Q(Hn,e)}toString(){return h0(this.indexPath_,0).join("/")}}/**
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
 */class Ny extends mu{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Li(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const i=De(e);return new Q(n,i)}toString(){return".value"}}const Fy=new Ny;/**
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
 */function E0(t){return{type:"value",snapshotNode:t}}function wi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Er(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Oy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ua{constructor(e){this.index_=e}updateChild(e,n,i,r,s,u){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(n);return o.getChild(r).equals(i.getChild(r))&&o.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(n)?u.trackChildChange(vr(n,o)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?u.trackChildChange(wi(n,i)):u.trackChildChange(Er(n,i,o))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ge,(r,s)=>{n.hasChild(r)||i.trackChildChange(vr(r,s))}),n.isLeafNode()||n.forEachChild(ge,(r,s)=>{if(e.hasChild(r)){const u=e.getImmediateChild(r);u.equals(s)||i.trackChildChange(Er(r,s,u))}else i.trackChildChange(wi(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Cr{constructor(e){this.indexedFilter_=new Ua(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cr.getStartPost_(e),this.endPost_=Cr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,u){return this.matches(new Q(n,i))||(i=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,u)}updateFullNode(e,n,i){n.isLeafNode()&&(n=W.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(ge,(u,o)=>{s.matches(new Q(u,o))||(r=r.updateImmediateChild(u,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class My{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Cr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,u){return this.rangedFilter_.matches(new Q(n,i))||(i=W.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,u):this.fullLimitUpdateChild_(e,n,i,s,u)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;s.hasNext()&&u<this.limit_;){const o=s.getNext();if(this.withinDirectionalStart(o))if(this.withinDirectionalEnd(o))r=r.updateImmediateChild(o.name,o.node),u++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let u=0;for(;s.hasNext();){const o=s.getNext();u<this.limit_&&this.withinDirectionalStart(o)&&this.withinDirectionalEnd(o)?u++:r=r.updateImmediateChild(o.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let u;if(this.reverse_){const d=this.index_.getCompare();u=(f,h)=>d(h,f)}else u=this.index_.getCompare();const o=e;A(o.numChildren()===this.limit_,"");const a=new Q(n,i),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(n)){const d=o.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||o.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:u(f,a);if(l&&!i.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(Er(n,i,d)),o.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(vr(n,d));const y=o.updateImmediateChild(n,W.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(wi(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return i.isEmpty()?e:l&&u(c,a)>=0?(s!=null&&(s.trackChildChange(vr(c.name,c.node)),s.trackChildChange(wi(n,i))),o.updateImmediateChild(n,i).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
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
 */class Ba{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xi}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Ba;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ly(t){return t.loadsAllData()?new Ua(t.getIndex()):t.hasLimit()?new My(t):new Cr(t)}function Ql(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===Fy?n="$value":t.index_===pi?n="$key":(A(t.index_ instanceof Py,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Te(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Te(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Te(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
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
 */class Ls extends l0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Br("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const u=Ls.getListenId_(e,i),o={};this.listens_[u]=o;const a=Ql(e._queryParams);this.restRequest_(s+".json",a,(c,l)=>{let d=l;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),vi(this.listens_,u)===o){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const i=Ls.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ql(e._queryParams),i=e._path.toString(),r=new lu;return this.restRequest_(i+".json",n,(s,u)=>{let o=u;s===404&&(o=null,s=null),s===null?(this.onDataUpdate_(i,o,!1,null),r.resolve(o)):r.reject(new Error(o))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fi(n);this.log_("Sending REST request for "+u);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&o.readyState===4){this.log_("REST Response for "+u+" received. status:",o.status,"response:",o.responseText);let a=null;if(o.status>=200&&o.status<300){try{a=_r(o.responseText)}catch{We("Failed to parse JSON response for "+u+": "+o.responseText)}i(null,a)}else o.status!==401&&o.status!==404&&We("Got unsuccessful REST response for "+u+" Status: "+o.status),i(o.status);i=null}},o.open("GET",u,!0),o.send()})}}/**
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
 */class Uy{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Us(){return{value:null,children:new Map}}function C0(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,Us());const r=t.children.get(i);e=de(e),C0(r,e,n)}}function No(t,e,n){t.value!==null?n(e,t.value):By(t,(i,r)=>{const s=new ce(e.toString()+"/"+i);No(r,s,n)})}function By(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class $y{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Zl=10*1e3,qy=30*1e3,zy=5*60*1e3;class Wy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $y(e);const i=Zl+(qy-Zl)*Math.random();ir(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;je(e,(r,s)=>{s>0&&Qt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ir(this.reportStats_.bind(this),Math.floor(Math.random()*2*zy))}}/**
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
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function x0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $a(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Bs{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ht.ACK_USER_WRITE,this.source=x0()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new Bs(ee(),n,this.revert)}}else return A(Y(this.path)===e,"operationForChild called for unrelated child."),new Bs(de(this.path),this.affectedTree,this.revert)}}/**
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
 */class xr{constructor(e,n){this.source=e,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new xr(this.source,ee()):new xr(this.source,de(this.path))}}/**
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
 */class jn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ht.OVERWRITE}operationForChild(e){return J(this.path)?new jn(this.source,ee(),this.snap.getImmediateChild(e)):new jn(this.source,de(this.path),this.snap)}}/**
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
 */class wr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ht.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new jn(this.source,ee(),n.value):new wr(this.source,ee(),n)}else return A(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wr(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Vn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Hy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jy(t,e,n,i){const r=[],s=[];return e.forEach(u=>{u.type==="child_changed"&&t.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&s.push(Oy(u.childName,u.snapshotNode))}),Vi(t,r,"child_removed",e,i,n),Vi(t,r,"child_added",e,i,n),Vi(t,r,"child_moved",s,i,n),Vi(t,r,"child_changed",e,i,n),Vi(t,r,"value",e,i,n),r}function Vi(t,e,n,i,r,s){const u=i.filter(o=>o.type===n);u.sort((o,a)=>Gy(t,o,a)),u.forEach(o=>{const a=Vy(t,o,s);r.forEach(c=>{c.respondsTo(o.type)&&e.push(c.createEvent(a,t.query_))})})}function Vy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Gy(t,e,n){if(e.childName==null||n.childName==null)throw Ni("Should only compare child_ events.");const i=new Q(e.childName,e.snapshotNode),r=new Q(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function gu(t,e){return{eventCache:t,serverCache:e}}function rr(t,e,n,i){return gu(new Vn(e,n,i),t.serverCache)}function w0(t,e,n,i){return gu(t.eventCache,new Vn(e,n,i))}function Fo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ju;const Ky=()=>(ju||(ju=new ze(N3)),ju);class he{static fromObject(e){let n=new he(null);return je(e,(i,r)=>{n=n.set(new ce(i),r)}),n}constructor(e,n=Ky()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(J(e))return null;{const i=Y(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(de(e),n);return s!=null?{path:Ee(new ce(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(de(e)):new he(null)}}set(e,n){if(J(e))return new he(n,this.children);{const i=Y(e),s=(this.children.get(i)||new he(null)).set(de(e),n),u=this.children.insert(i,s);return new he(this.value,u)}}remove(e){if(J(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const r=i.remove(de(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(de(e)):null}}setTree(e,n){if(J(e))return n;{const i=Y(e),s=(this.children.get(i)||new he(null)).setTree(de(e),n);let u;return s.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,s),new he(this.value,u)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ee(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(J(e))return null;{const s=Y(e),u=this.children.get(s);return u?u.findOnPath_(de(e),Ee(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,i){if(J(e))return this;{this.value&&i(n,this.value);const r=Y(e),s=this.children.get(r);return s?s.foreachOnPath_(de(e),Ee(n,r),i):new he(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Ee(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class mt{constructor(e){this.writeTree_=e}static empty(){return new mt(new he(null))}}function sr(t,e,n){if(J(e))return new mt(new he(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const u=qe(r,e);return s=s.updateChild(u,n),new mt(t.writeTree_.set(r,s))}else{const r=new he(n),s=t.writeTree_.setTree(e,r);return new mt(s)}}}function Xl(t,e,n){let i=t;return je(n,(r,s)=>{i=sr(i,Ee(e,r),s)}),i}function ed(t,e){if(J(e))return mt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new mt(n)}}function Oo(t,e){return Qn(t,e)!=null}function Qn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function td(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(i,r)=>{e.push(new Q(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Q(i,r.value))}),e}function bn(t,e){if(J(e))return t;{const n=Qn(t,e);return n!=null?new mt(new he(n)):new mt(t.writeTree_.subtree(e))}}function Mo(t){return t.writeTree_.isEmpty()}function ki(t,e){return k0(ee(),t.writeTree_,e)}function k0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=k0(Ee(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ee(t,".priority"),i)),n}}/**
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
 */function za(t,e){return S0(e,t)}function Yy(t,e,n,i,r){A(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=sr(t.visibleWrites,e,n)),t.lastWriteId=i}function Qy(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Jy(t,e){const n=t.allWrites.findIndex(o=>o.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,u=t.allWrites.length-1;for(;r&&u>=0;){const o=t.allWrites[u];o.visible&&(u>=n&&Zy(o,i.path)?r=!1:ft(i.path,o.path)&&(s=!0)),u--}if(r){if(s)return Xy(t),!0;if(i.snap)t.visibleWrites=ed(t.visibleWrites,i.path);else{const o=i.children;je(o,a=>{t.visibleWrites=ed(t.visibleWrites,Ee(i.path,a))})}return!0}else return!1}function Zy(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(Ee(t.path,n),e))return!0;return!1}function Xy(t){t.visibleWrites=I0(t.allWrites,ev,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ev(t){return t.visible}function I0(t,e,n){let i=mt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const u=s.path;let o;if(s.snap)ft(n,u)?(o=qe(n,u),i=sr(i,o,s.snap)):ft(u,n)&&(o=qe(u,n),i=sr(i,ee(),s.snap.getChild(o)));else if(s.children){if(ft(n,u))o=qe(n,u),i=Xl(i,o,s.children);else if(ft(u,n))if(o=qe(u,n),J(o))i=Xl(i,ee(),s.children);else{const a=vi(s.children,Y(o));if(a){const c=a.getChild(de(o));i=sr(i,ee(),c)}}}else throw Ni("WriteRecord should have .snap or .children")}}return i}function T0(t,e,n,i,r){if(!i&&!r){const s=Qn(t.visibleWrites,e);if(s!=null)return s;{const u=bn(t.visibleWrites,e);if(Mo(u))return n;if(n==null&&!Oo(u,ee()))return null;{const o=n||W.EMPTY_NODE;return ki(u,o)}}}else{const s=bn(t.visibleWrites,e);if(!r&&Mo(s))return n;if(!r&&n==null&&!Oo(s,ee()))return null;{const u=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},o=I0(t.allWrites,u,e),a=n||W.EMPTY_NODE;return ki(o,a)}}}function tv(t,e,n){let i=W.EMPTY_NODE;const r=Qn(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ge,(s,u)=>{i=i.updateImmediateChild(s,u)}),i;if(n){const s=bn(t.visibleWrites,e);return n.forEachChild(ge,(u,o)=>{const a=ki(bn(s,new ce(u)),o);i=i.updateImmediateChild(u,a)}),td(s).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const s=bn(t.visibleWrites,e);return td(s).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function nv(t,e,n,i,r){A(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(e,n);if(Oo(t.visibleWrites,s))return null;{const u=bn(t.visibleWrites,s);return Mo(u)?r.getChild(n):ki(u,r.getChild(n))}}function iv(t,e,n,i){const r=Ee(e,n),s=Qn(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const u=bn(t.visibleWrites,r);return ki(u,i.getNode().getImmediateChild(n))}else return null}function rv(t,e){return Qn(t.visibleWrites,e)}function sv(t,e,n,i,r,s,u){let o;const a=bn(t.visibleWrites,e),c=Qn(a,ee());if(c!=null)o=c;else if(n!=null)o=ki(a,n);else return[];if(o=o.withIndex(u),!o.isEmpty()&&!o.isLeafNode()){const l=[],d=u.getCompare(),f=s?o.getReverseIteratorFrom(i,u):o.getIteratorFrom(i,u);let h=f.getNext();for(;h&&l.length<r;)d(h,i)!==0&&l.push(h),h=f.getNext();return l}else return[]}function uv(){return{visibleWrites:mt.empty(),allWrites:[],lastWriteId:-1}}function $s(t,e,n,i){return T0(t.writeTree,t.treePath,e,n,i)}function Wa(t,e){return tv(t.writeTree,t.treePath,e)}function nd(t,e,n,i){return nv(t.writeTree,t.treePath,e,n,i)}function qs(t,e){return rv(t.writeTree,Ee(t.treePath,e))}function ov(t,e,n,i,r,s){return sv(t.writeTree,t.treePath,e,n,i,r,s)}function Ha(t,e,n){return iv(t.writeTree,t.treePath,e,n)}function A0(t,e){return S0(Ee(t.treePath,e),t.writeTree)}function S0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class av{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Er(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,vr(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,wi(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Er(i,e.snapshotNode,r.oldSnap));else throw Ni("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class cv{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const D0=new cv;class ja{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ha(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),s=ov(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function lv(t){return{filter:t}}function dv(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fv(t,e,n,i,r){const s=new av;let u,o;if(n.type===ht.OVERWRITE){const c=n;c.source.fromUser?u=Lo(t,e,c.path,c.snap,i,r,s):(A(c.source.fromServer,"Unknown source."),o=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),u=zs(t,e,c.path,c.snap,i,r,o,s))}else if(n.type===ht.MERGE){const c=n;c.source.fromUser?u=pv(t,e,c.path,c.children,i,r,s):(A(c.source.fromServer,"Unknown source."),o=c.source.tagged||e.serverCache.isFiltered(),u=Uo(t,e,c.path,c.children,i,r,o,s))}else if(n.type===ht.ACK_USER_WRITE){const c=n;c.revert?u=gv(t,e,c.path,i,r,s):u=_v(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===ht.LISTEN_COMPLETE)u=mv(t,e,n.path,i,s);else throw Ni("Unknown operation type: "+n.type);const a=s.getChanges();return hv(e,u,a),{viewCache:u,changes:a}}function hv(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Fo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(E0(Fo(e)))}}function R0(t,e,n,i,r,s){const u=e.eventCache;if(qs(i,n)!=null)return e;{let o,a;if(J(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gn(e),l=c instanceof W?c:W.EMPTY_NODE,d=Wa(i,l);o=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=$s(i,Gn(e));o=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Y(n);if(c===".priority"){A(vn(n)===1,"Can't have a priority with additional path components");const l=u.getNode();a=e.serverCache.getNode();const d=nd(i,n,l,a);d!=null?o=t.filter.updatePriority(l,d):o=u.getNode()}else{const l=de(n);let d;if(u.isCompleteForChild(c)){a=e.serverCache.getNode();const f=nd(i,n,u.getNode(),a);f!=null?d=u.getNode().getImmediateChild(c).updateChild(l,f):d=u.getNode().getImmediateChild(c)}else d=Ha(i,c,e.serverCache);d!=null?o=t.filter.updateChild(u.getNode(),c,d,l,r,s):o=u.getNode()}}return rr(e,o,u.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function zs(t,e,n,i,r,s,u,o){const a=e.serverCache;let c;const l=u?t.filter:t.filter.getIndexedFilter();if(J(n))c=l.updateFullNode(a.getNode(),i,null);else if(l.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(n,i);c=l.updateFullNode(a.getNode(),h,null)}else{const h=Y(n);if(!a.isCompleteForPath(n)&&vn(n)>1)return e;const _=de(n),k=a.getNode().getImmediateChild(h).updateChild(_,i);h===".priority"?c=l.updatePriority(a.getNode(),k):c=l.updateChild(a.getNode(),h,k,_,D0,null)}const d=w0(e,c,a.isFullyInitialized()||J(n),l.filtersNodes()),f=new ja(r,d,s);return R0(t,d,n,r,f,o)}function Lo(t,e,n,i,r,s,u){const o=e.eventCache;let a,c;const l=new ja(r,e,s);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,u),a=rr(e,c,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=rr(e,c,o.isFullyInitialized(),o.isFiltered());else{const f=de(n),h=o.getNode().getImmediateChild(d);let _;if(J(f))_=i;else{const y=l.getCompleteChild(d);y!=null?f0(f)===".priority"&&y.getChild(p0(f)).isEmpty()?_=y:_=y.updateChild(f,i):_=W.EMPTY_NODE}if(h.equals(_))a=e;else{const y=t.filter.updateChild(o.getNode(),d,_,f,l,u);a=rr(e,y,o.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function id(t,e){return t.eventCache.isCompleteForChild(e)}function pv(t,e,n,i,r,s,u){let o=e;return i.foreach((a,c)=>{const l=Ee(n,a);id(e,Y(l))&&(o=Lo(t,o,l,c,r,s,u))}),i.foreach((a,c)=>{const l=Ee(n,a);id(e,Y(l))||(o=Lo(t,o,l,c,r,s,u))}),o}function rd(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Uo(t,e,n,i,r,s,u,o){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;J(n)?c=i:c=new he(null).setTree(n,i);const l=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(l.hasChild(d)){const h=e.serverCache.getNode().getImmediateChild(d),_=rd(t,h,f);a=zs(t,a,new ce(d),_,r,s,u,o)}}),c.children.inorderTraversal((d,f)=>{const h=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!l.hasChild(d)&&!h){const _=e.serverCache.getNode().getImmediateChild(d),y=rd(t,_,f);a=zs(t,a,new ce(d),y,r,s,u,o)}}),a}function _v(t,e,n,i,r,s,u){if(qs(r,n)!=null)return e;const o=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(J(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return zs(t,e,n,a.getNode().getChild(n),r,s,o,u);if(J(n)){let c=new he(null);return a.getNode().forEachChild(pi,(l,d)=>{c=c.set(new ce(l),d)}),Uo(t,e,n,c,r,s,o,u)}else return e}else{let c=new he(null);return i.foreach((l,d)=>{const f=Ee(n,l);a.isCompleteForPath(f)&&(c=c.set(l,a.getNode().getChild(f)))}),Uo(t,e,n,c,r,s,o,u)}}function mv(t,e,n,i,r){const s=e.serverCache,u=w0(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return R0(t,u,n,i,D0,r)}function gv(t,e,n,i,r,s){let u;if(qs(i,n)!=null)return e;{const o=new ja(i,e,r),a=e.eventCache.getNode();let c;if(J(n)||Y(n)===".priority"){let l;if(e.serverCache.isFullyInitialized())l=$s(i,Gn(e));else{const d=e.serverCache.getNode();A(d instanceof W,"serverChildren would be complete if leaf node"),l=Wa(i,d)}l=l,c=t.filter.updateFullNode(a,l,s)}else{const l=Y(n);let d=Ha(i,l,e.serverCache);d==null&&e.serverCache.isCompleteForChild(l)&&(d=a.getImmediateChild(l)),d!=null?c=t.filter.updateChild(a,l,d,de(n),o,s):e.eventCache.getNode().hasChild(l)?c=t.filter.updateChild(a,l,W.EMPTY_NODE,de(n),o,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=$s(i,Gn(e)),u.isLeafNode()&&(c=t.filter.updateFullNode(c,u,s)))}return u=e.serverCache.isFullyInitialized()||qs(i,ee())!=null,rr(e,c,u,t.filter.filtersNodes())}}/**
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
 */class bv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Ua(i.getIndex()),s=Ly(i);this.processor_=lv(s);const u=n.serverCache,o=n.eventCache,a=r.updateFullNode(W.EMPTY_NODE,u.getNode(),null),c=s.updateFullNode(W.EMPTY_NODE,o.getNode(),null),l=new Vn(a,u.isFullyInitialized(),r.filtersNodes()),d=new Vn(c,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=gu(d,l),this.eventGenerator_=new Hy(this.query_)}get query(){return this.query_}}function yv(t){return t.viewCache_.serverCache.getNode()}function vv(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function sd(t){return t.eventRegistrations_.length===0}function Ev(t,e){t.eventRegistrations_.push(e)}function ud(t,e,n){const i=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const u=s.createCancelEvent(n,r);u&&i.push(u)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const u=t.eventRegistrations_[s];if(!u.matches(e))r.push(u);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function od(t,e,n,i){e.type===ht.MERGE&&e.source.queryId!==null&&(A(Gn(t.viewCache_),"We should always have a full cache before handling merges"),A(Fo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=fv(t.processor_,r,e,n,i);return dv(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,P0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Cv(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(s,u)=>{i.push(wi(s,u))}),n.isFullyInitialized()&&i.push(E0(n.getNode())),P0(t,i,n.getNode(),e)}function P0(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return jy(t.eventGenerator_,e,n,r)}/**
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
 */let Ws;class xv{constructor(){this.views=new Map}}function wv(t){A(!Ws,"__referenceConstructor has already been defined"),Ws=t}function kv(){return A(Ws,"Reference.ts has not been loaded"),Ws}function Iv(t){return t.views.size===0}function Va(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return A(s!=null,"SyncTree gave us an op for an invalid query."),od(s,e,n,i)}else{let s=[];for(const u of t.views.values())s=s.concat(od(u,e,n,i));return s}}function Tv(t,e,n,i,r){const s=e._queryIdentifier,u=t.views.get(s);if(!u){let o=$s(n,r?i:null),a=!1;o?a=!0:i instanceof W?(o=Wa(n,i),a=!1):(o=W.EMPTY_NODE,a=!1);const c=gu(new Vn(o,a,!1),new Vn(i,r,!1));return new bv(e,c)}return u}function Av(t,e,n,i,r,s){const u=Tv(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,u),Ev(u,n),Cv(u,n)}function Sv(t,e,n,i){const r=e._queryIdentifier,s=[];let u=[];const o=En(t);if(r==="default")for(const[a,c]of t.views.entries())u=u.concat(ud(c,n,i)),sd(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(r);a&&(u=u.concat(ud(a,n,i)),sd(a)&&(t.views.delete(r),a.query._queryParams.loadsAllData()||s.push(a.query)))}return o&&!En(t)&&s.push(new(kv())(e._repo,e._path)),{removed:s,events:u}}function N0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _i(t,e){let n=null;for(const i of t.views.values())n=n||vv(i,e);return n}function F0(t,e){if(e._queryParams.loadsAllData())return bu(t);{const i=e._queryIdentifier;return t.views.get(i)}}function O0(t,e){return F0(t,e)!=null}function En(t){return bu(t)!=null}function bu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Hs;function Dv(t){A(!Hs,"__referenceConstructor has already been defined"),Hs=t}function Rv(){return A(Hs,"Reference.ts has not been loaded"),Hs}let Pv=1;class ad{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=uv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function M0(t,e,n,i,r){return Yy(t.pendingWriteTree_,e,n,i,r),r?qr(t,new jn(x0(),e,n)):[]}function Mn(t,e,n=!1){const i=Qy(t.pendingWriteTree_,e);if(Jy(t.pendingWriteTree_,e)){let s=new he(null);return i.snap!=null?s=s.set(ee(),!0):je(i.children,u=>{s=s.set(new ce(u),!0)}),qr(t,new Bs(i.path,s,n))}else return[]}function yu(t,e,n){return qr(t,new jn($a(),e,n))}function Nv(t,e,n){const i=he.fromObject(n);return qr(t,new wr($a(),e,i))}function Fv(t,e){return qr(t,new xr($a(),e))}function Ov(t,e,n){const i=Ka(t,n);if(i){const r=Ya(i),s=r.path,u=r.queryId,o=qe(s,e),a=new xr(qa(u),o);return Qa(t,s,a)}else return[]}function Bo(t,e,n,i,r=!1){const s=e._path,u=t.syncPointTree_.get(s);let o=[];if(u&&(e._queryIdentifier==="default"||O0(u,e))){const a=Sv(u,e,n,i);Iv(u)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(o=a.events,!r){const l=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,h)=>En(h));if(l&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const h=Uv(f);for(let _=0;_<h.length;++_){const y=h[_],k=y.query,P=B0(t,y);t.listenProvider_.startListening(ur(k),js(t,k),P.hashFn,P.onComplete)}}}!d&&c.length>0&&!i&&(l?t.listenProvider_.stopListening(ur(e),null):c.forEach(f=>{const h=t.queryToTagMap.get(vu(f));t.listenProvider_.stopListening(ur(f),h)}))}Bv(t,c)}return o}function Mv(t,e,n,i){const r=Ka(t,i);if(r!=null){const s=Ya(r),u=s.path,o=s.queryId,a=qe(u,e),c=new jn(qa(o),a,n);return Qa(t,u,c)}else return[]}function Lv(t,e,n,i){const r=Ka(t,i);if(r){const s=Ya(r),u=s.path,o=s.queryId,a=qe(u,e),c=he.fromObject(n),l=new wr(qa(o),a,c);return Qa(t,u,l)}else return[]}function cd(t,e,n,i=!1){const r=e._path;let s=null,u=!1;t.syncPointTree_.foreachOnPath(r,(f,h)=>{const _=qe(f,r);s=s||_i(h,_),u=u||En(h)});let o=t.syncPointTree_.get(r);o?(u=u||En(o),s=s||_i(o,ee())):(o=new xv,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;s!=null?a=!0:(a=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,_)=>{const y=_i(_,ee());y&&(s=s.updateImmediateChild(h,y))}));const c=O0(o,e);if(!c&&!e._queryParams.loadsAllData()){const f=vu(e);A(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=$v();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const l=za(t.pendingWriteTree_,r);let d=Av(o,e,n,l,s,a);if(!c&&!u&&!i){const f=F0(o,e);d=d.concat(qv(t,e,f))}return d}function Ga(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(u,o)=>{const a=qe(u,e),c=_i(o,a);if(c)return c});return T0(r,e,s,n,!0)}function qr(t,e){return L0(e,t.syncPointTree_,null,za(t.pendingWriteTree_,ee()))}function L0(t,e,n,i){if(J(t.path))return U0(t,e,n,i);{const r=e.get(ee());n==null&&r!=null&&(n=_i(r,ee()));let s=[];const u=Y(t.path),o=t.operationForChild(u),a=e.children.get(u);if(a&&o){const c=n?n.getImmediateChild(u):null,l=A0(i,u);s=s.concat(L0(o,a,c,l))}return r&&(s=s.concat(Va(r,t,i,n))),s}}function U0(t,e,n,i){const r=e.get(ee());n==null&&r!=null&&(n=_i(r,ee()));let s=[];return e.children.inorderTraversal((u,o)=>{const a=n?n.getImmediateChild(u):null,c=A0(i,u),l=t.operationForChild(u);l&&(s=s.concat(U0(l,o,a,c)))}),r&&(s=s.concat(Va(r,t,i,n))),s}function B0(t,e){const n=e.query,i=js(t,n);return{hashFn:()=>(yv(e)||W.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Ov(t,n._path,i):Fv(t,n._path);{const s=M3(r,n);return Bo(t,n,null,s)}}}}function js(t,e){const n=vu(e);return t.queryToTagMap.get(n)}function vu(t){return t._path.toString()+"$"+t._queryIdentifier}function Ka(t,e){return t.tagToQueryMap.get(e)}function Ya(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Qa(t,e,n){const i=t.syncPointTree_.get(e);A(i,"Missing sync point for query tag that we're tracking");const r=za(t.pendingWriteTree_,e);return Va(i,n,r,null)}function Uv(t){return t.fold((e,n,i)=>{if(n&&En(n))return[bu(n)];{let r=[];return n&&(r=N0(n)),je(i,(s,u)=>{r=r.concat(u)}),r}})}function ur(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Rv())(t._repo,t._path):t}function Bv(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=vu(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function $v(){return Pv++}function qv(t,e,n){const i=e._path,r=js(t,e),s=B0(t,n),u=t.listenProvider_.startListening(ur(e),r,s.hashFn,s.onComplete),o=t.syncPointTree_.subtree(i);if(r)A(!En(o.value),"If we're adding a query, it shouldn't be shadowed");else{const a=o.fold((c,l,d)=>{if(!J(c)&&l&&En(l))return[bu(l).query];{let f=[];return l&&(f=f.concat(N0(l).map(h=>h.query))),je(d,(h,_)=>{f=f.concat(_)}),f}});for(let c=0;c<a.length;++c){const l=a[c];t.listenProvider_.stopListening(ur(l),js(t,l))}}return u}/**
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
 */class Ja{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ja(n)}node(){return this.node_}}class Za{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Za(this.syncTree_,n)}node(){return Ga(this.syncTree_,this.path_)}}const zv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ld=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Wv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Hv(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Wv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},Hv=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&A(!1,"Unexpected increment value: "+i);const r=e.node();if(A(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const u=r.getValue();return typeof u!="number"?i:u+i},jv=function(t,e,n,i){return Xa(e,new Za(n,t),i)},$0=function(t,e,n){return Xa(t,new Ja(e),n)};function Xa(t,e,n){const i=t.getPriority().val(),r=ld(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const u=t,o=ld(u.getValue(),e,n);return o!==u.getValue()||r!==u.getPriority().val()?new ke(o,De(r)):t}else{const u=t;return s=u,r!==u.getPriority().val()&&(s=s.updatePriority(new ke(r))),u.forEachChild(ge,(o,a)=>{const c=Xa(a,e.getImmediateChild(o),n);c!==a&&(s=s.updateImmediateChild(o,c))}),s}}/**
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
 */class ec{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function tc(t,e){let n=e instanceof ce?e:new ce(e),i=t,r=Y(n);for(;r!==null;){const s=vi(i.node.children,r)||{children:{},childCount:0};i=new ec(r,i,s),n=de(n),r=Y(n)}return i}function Bi(t){return t.node.value}function q0(t,e){t.node.value=e,$o(t)}function z0(t){return t.node.childCount>0}function Vv(t){return Bi(t)===void 0&&!z0(t)}function Eu(t,e){je(t.node.children,(n,i)=>{e(new ec(n,t,i))})}function W0(t,e,n,i){n&&e(t),Eu(t,r=>{W0(r,e,!0)})}function Gv(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function zr(t){return new ce(t.parent===null?t.name:zr(t.parent)+"/"+t.name)}function $o(t){t.parent!==null&&Kv(t.parent,t.name,t)}function Kv(t,e,n){const i=Vv(n),r=Qt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,$o(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,$o(t))}/**
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
 */const Yv=/[\[\].#$\/\u0000-\u001F\u007F]/,Qv=/[\[\].#$\u0000-\u001F\u007F]/,Vu=10*1024*1024,H0=function(t){return typeof t=="string"&&t.length!==0&&!Yv.test(t)},j0=function(t){return typeof t=="string"&&t.length!==0&&!Qv.test(t)},Jv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),j0(t)},V0=function(t,e,n,i){i&&e===void 0||nc(ma(t,"value"),e,n)},nc=function(t,e,n){const i=n instanceof ce?new _y(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Dn(i)+" with contents = "+e.toString());if(jh(e))throw new Error(t+"contains "+e.toString()+" "+Dn(i));if(typeof e=="string"&&e.length>Vu/3&&du(e)>Vu)throw new Error(t+"contains a string greater than "+Vu+" utf8 bytes "+Dn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(je(e,(u,o)=>{if(u===".value")r=!0;else if(u!==".priority"&&u!==".sv"&&(s=!0,!H0(u)))throw new Error(t+" contains an invalid key ("+u+") "+Dn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);my(i,u),nc(t,o,i),gy(i)}),r&&s)throw new Error(t+' contains ".value" child '+Dn(i)+" in addition to actual children.")}},G0=function(t,e,n,i){if(!j0(n))throw new Error(ma(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Zv=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),G0(t,e,n)},ic=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Xv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!H0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Jv(n))throw new Error(ma(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class eE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rc(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Oa(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function K0(t,e,n){rc(t,n),Y0(t,i=>Oa(i,e))}function Gt(t,e,n){rc(t,n),Y0(t,i=>ft(i,e)||ft(e,i))}function Y0(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(tE(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();nr&&Ne("event: "+n.toString()),Ui(i)}}}/**
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
 */const nE="repo_interrupt",iE=25;class rE{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Us(),this.transactionQueueTree_=new ec,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sE(t,e,n){if(t.stats_=Na(t.repoInfo_),t.forceRestClient_||$3())t.server_=new Ls(t.repoInfo_,(i,r,s,u)=>{dd(t,i,r,s,u)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new zt(t.repoInfo_,e,(i,r,s,u)=>{dd(t,i,r,s,u)},i=>{fd(t,i)},i=>{uE(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=j3(t.repoInfo_,()=>new Wy(t.stats_,t.server_)),t.infoData_=new Uy,t.infoSyncTree_=new ad({startListening:(i,r,s,u)=>{let o=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(o=yu(t.infoSyncTree_,i._path,a),setTimeout(()=>{u("ok")},0)),o},stopListening:()=>{}}),uc(t,"connected",!1),t.serverSyncTree_=new ad({startListening:(i,r,s,u)=>(t.server_.listen(i,s,r,(o,a)=>{const c=u(o,a);Gt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function Q0(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sc(t){return zv({timestamp:Q0(t)})}function dd(t,e,n,i,r){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let u=[];if(r)if(i){const a=Is(n,c=>De(c));u=Lv(t.serverSyncTree_,s,a,r)}else{const a=De(n);u=Mv(t.serverSyncTree_,s,a,r)}else if(i){const a=Is(n,c=>De(c));u=Nv(t.serverSyncTree_,s,a)}else{const a=De(n);u=yu(t.serverSyncTree_,s,a)}let o=s;u.length>0&&(o=Cu(t,s)),Gt(t.eventQueue_,o,u)}function fd(t,e){uc(t,"connected",e),e===!1&&aE(t)}function uE(t,e){je(e,(n,i)=>{uc(t,n,i)})}function uc(t,e,n){const i=new ce("/.info/"+e),r=De(n);t.infoData_.updateSnapshot(i,r);const s=yu(t.infoSyncTree_,i,r);Gt(t.eventQueue_,i,s)}function J0(t){return t.nextWriteId_++}function oE(t,e,n,i,r){oc(t,"set",{path:e.toString(),value:n,priority:i});const s=sc(t),u=De(n,i),o=Ga(t.serverSyncTree_,e),a=$0(u,o,s),c=J0(t),l=M0(t.serverSyncTree_,e,a,c,!0);rc(t.eventQueue_,l),t.server_.put(e.toString(),u.val(!0),(f,h)=>{const _=f==="ok";_||We("set at "+e+" failed: "+f);const y=Mn(t.serverSyncTree_,c,!_);Gt(t.eventQueue_,e,y),fE(t,r,f,h)});const d=np(t,e);Cu(t,d),Gt(t.eventQueue_,d,[])}function aE(t){oc(t,"onDisconnectEvents");const e=sc(t),n=Us();No(t.onDisconnect_,ee(),(r,s)=>{const u=jv(r,s,t.serverSyncTree_,e);C0(n,r,u)});let i=[];No(n,ee(),(r,s)=>{i=i.concat(yu(t.serverSyncTree_,r,s));const u=np(t,r);Cu(t,u)}),t.onDisconnect_=Us(),Gt(t.eventQueue_,ee(),i)}function cE(t,e,n){let i;Y(e._path)===".info"?i=cd(t.infoSyncTree_,e,n):i=cd(t.serverSyncTree_,e,n),K0(t.eventQueue_,e._path,i)}function lE(t,e,n){let i;Y(e._path)===".info"?i=Bo(t.infoSyncTree_,e,n):i=Bo(t.serverSyncTree_,e,n),K0(t.eventQueue_,e._path,i)}function dE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nE)}function oc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function fE(t,e,n,i){e&&Ui(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const u=new Error(s);u.code=r,e(u)}})}function Z0(t,e,n){return Ga(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function ac(t,e=t.transactionQueueTree_){if(e||xu(t,e),Bi(e)){const n=ep(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&hE(t,zr(e),n)}else z0(e)&&Eu(e,n=>{ac(t,n)})}function hE(t,e,n){const i=n.map(c=>c.currentWriteId),r=Z0(t,e,i);let s=r;const u=r.hash();for(let c=0;c<n.length;c++){const l=n[c];A(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;const d=qe(e,l.path);s=s.updateChild(d,l.currentOutputSnapshotRaw)}const o=s.val(!0),a=e;t.server_.put(a.toString(),o,c=>{oc(t,"transaction put response",{path:a.toString(),status:c});let l=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,l=l.concat(Mn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();xu(t,tc(t.transactionQueueTree_,e)),ac(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,l);for(let f=0;f<d.length;f++)Ui(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{We("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Cu(t,e)}},u)}function Cu(t,e){const n=X0(t,e),i=zr(n),r=ep(t,n);return pE(t,r,i),i}function pE(t,e,n){if(e.length===0)return;const i=[];let r=[];const u=e.filter(o=>o.status===0).map(o=>o.currentWriteId);for(let o=0;o<e.length;o++){const a=e[o],c=qe(n,a.path);let l=!1,d;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)l=!0,d=a.abortReason,r=r.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=iE)l=!0,d="maxretry",r=r.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Z0(t,a.path,u);a.currentInputSnapshot=f;const h=e[o].update(f.val());if(h!==void 0){nc("transaction failed: Data returned ",h,a.path);let _=De(h);typeof h=="object"&&h!=null&&Qt(h,".priority")||(_=_.updatePriority(f.getPriority()));const k=a.currentWriteId,P=sc(t),C=$0(_,f,P);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=C,a.currentWriteId=J0(t),u.splice(u.indexOf(k),1),r=r.concat(M0(t.serverSyncTree_,a.path,C,a.currentWriteId,a.applyLocally)),r=r.concat(Mn(t.serverSyncTree_,k,!0))}else l=!0,d="nodata",r=r.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0))}Gt(t.eventQueue_,n,r),r=[],l&&(e[o].status=2,function(f){setTimeout(f,Math.floor(0))}(e[o].unwatcher),e[o].onComplete&&(d==="nodata"?i.push(()=>e[o].onComplete(null,!1,e[o].currentInputSnapshot)):i.push(()=>e[o].onComplete(new Error(d),!1,null))))}xu(t,t.transactionQueueTree_);for(let o=0;o<i.length;o++)Ui(i[o]);ac(t,t.transactionQueueTree_)}function X0(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Bi(i)===void 0;)i=tc(i,n),e=de(e),n=Y(e);return i}function ep(t,e){const n=[];return tp(t,e,n),n.sort((i,r)=>i.order-r.order),n}function tp(t,e,n){const i=Bi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Eu(e,r=>{tp(t,r,n)})}function xu(t,e){const n=Bi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,q0(e,n.length>0?n:void 0)}Eu(e,i=>{xu(t,i)})}function np(t,e){const n=zr(X0(t,e)),i=tc(t.transactionQueueTree_,e);return Gv(i,r=>{Gu(t,r)}),Gu(t,i),W0(i,r=>{Gu(t,r)}),n}function Gu(t,e){const n=Bi(e);if(n){const i=[];let r=[],s=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(A(s===u-1,"All SENT items should be at beginning of queue."),s=u,n[u].status=3,n[u].abortReason="set"):(A(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),r=r.concat(Mn(t.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));s===-1?q0(e,void 0):n.length=s+1,Gt(t.eventQueue_,zr(e),r);for(let u=0;u<i.length;u++)Ui(i[u])}}/**
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
 */function _E(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function mE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const hd=function(t,e){const n=gE(t),i=n.namespace;n.domain==="firebase.com"&&Vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R3();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new i0(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ce(n.pathString)}},gE=function(t){let e="",n="",i="",r="",s="",u=!0,o="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(o=t.substring(0,c-1),t=t.substring(c+2));let l=t.indexOf("/");l===-1&&(l=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(l,d)),l<d&&(r=_E(t.substring(l,d)));const f=mE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(u=o==="https"||o==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:u,scheme:o,pathString:r,namespace:s}};/**
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
 */const pd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bE=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=pd.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let u=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)u+=pd.charAt(e[r]);return A(u.length===20,"nextPushId: Length should be 20."),u}}();/**
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
 */class yE{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class vE{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class EE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cc{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return J(this._path)?null:f0(this._path)}get ref(){return new kn(this._repo,this._path)}get _queryIdentifier(){const e=Jl(this._queryParams),n=Ra(e);return n==="{}"?"default":n}get _queryObject(){return Jl(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof cc))return!1;const n=this._repo===e._repo,i=Oa(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+py(this._path)}}class kn extends cc{constructor(e,n){super(e,n,new Ba,!1)}get parent(){const e=p0(this._path);return e===null?null:new kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vs{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),i=kr(this.ref,e);return new Vs(this._node.getChild(n),i,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Vs(r,kr(this.ref,i),ge)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ku(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?kr(t._root,e):t._root}function kr(t,e){return t=Ge(t),Y(t._path)===null?Zv("child","path",e):G0("child","path",e),new kn(t._repo,Ee(t._path,e))}function CE(t,e){t=Ge(t),ic("push",t._path),V0("push",e,t._path,!0);const n=Q0(t._repo),i=bE(n),r=kr(t,i),s=kr(t,i);let u;return e!=null?u=ip(s,e).then(()=>s):u=Promise.resolve(s),r.then=u.then.bind(u),r.catch=u.then.bind(u,void 0),r}function xE(t){return ic("remove",t._path),ip(t,null)}function ip(t,e){t=Ge(t),ic("set",t._path),V0("set",e,t._path,!1);const n=new lu;return oE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class lc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new yE("value",this,new Vs(e.snapshotNode,new kn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vE(this,e,n):null}matches(e){return e instanceof lc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wE(t,e,n,i,r){const s=new EE(n,void 0),u=new lc(s);return cE(t._repo,t,u),()=>lE(t._repo,t,u)}function kE(t,e,n,i){return wE(t,"value",e)}wv(kn);Dv(kn);/**
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
 */const IE="FIREBASE_DATABASE_EMULATOR_HOST",qo={};let TE=!1;function AE(t,e,n,i){t.repoInfo_=new i0(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function SE(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let u=hd(s,r),o=u.repoInfo,a;typeof process<"u"&&Nl&&(a=Nl[IE]),a?(s=`http://${a}?ns=${o.namespace}`,u=hd(s,r),o=u.repoInfo):u.repoInfo.secure;const c=new z3(t.name,t.options,e);Xv("Invalid Firebase Database URL",u),J(u.path)||Vt("Database URL must point to the root of a Firebase Database (not including a child path).");const l=RE(o,t,c,new q3(t,n));return new PE(l,t)}function DE(t,e){const n=qo[e];(!n||n[t.key]!==t)&&Vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dE(t),delete n[t.key]}function RE(t,e,n,i){let r=qo[e.name];r||(r={},qo[e.name]=r);let s=r[t.toURLString()];return s&&Vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new rE(t,TE,n,i),r[t.toURLString()]=s,s}class PE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vt("Cannot call "+e+" on a deleted database.")}}function NE(t=oh(),e){const n=ya(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Lm("database");i&&FE(n,...i)}return n}function FE(t,e,n,i={}){t=Ge(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&qn(i,s.repoInfo_.emulatorOptions))return;Vt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ms(ms.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Um(i.mockUserToken,t.app.options.projectId);u=new ms(o)}AE(s,r,i,u)}/**
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
 */function OE(t){k3(Oi),Ei(new zn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SE(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),mn(Fl,Ol,t),mn(Fl,Ol,"esm2017")}zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OE();const ME={apiKey:"AIzaSyC58enCNd-UjaZ2QEyrGySa2SJ-18c3Sko",authDomain:"young-dcfa9.firebaseapp.com",projectId:"young-dcfa9",storageBucket:"young-dcfa9.firebasestorage.app",messagingSenderId:"990780712687",appId:"1:990780712687:web:d9fab78006b0d6fdc09d1a"},rp=uh(ME),Zi=x3(rp),Yu=NE(rp),wu=t=>(Pr("data-v-5dee43ac"),t=t(),Nr(),t),LE={class:"auth-button"},UE={key:1,class:"user-info"},BE=wu(()=>D("img",{alt:"logo",class:"logo",src:_m,width:"320",height:"250"},null,-1)),$E={class:"wrapper"},qE={key:0,class:"auth-modal"},zE={class:"auth-modal-content"},WE=wu(()=>D("h2",null,"Вход",-1)),HE={class:"auth-methods"},jE=wu(()=>D("div",{class:"divider"},"или",-1)),VE=["onSubmit"],GE=wu(()=>D("button",{type:"submit"},"Войти",-1)),KE={__name:"App",setup(t){const e=Lt(null),n=Lt(!1),i=Lt(""),r=Lt("");ca(()=>{Zi.onAuthStateChanged(a=>{e.value=a,a&&(n.value=!1)})});const s=async()=>{try{const a=new Mt;await P2(Zi,a)}catch(a){console.error("Ошибка входа через Google:",a)}},u=async()=>{try{await c2(Zi,i.value,r.value)}catch(a){console.error("Ошибка входа:",a),alert("Неверный email или пароль")}},o=async()=>{try{await f2(Zi)}catch(a){console.error("Ошибка выхода:",a)}};return(a,c)=>{const l=Oc("router-link"),d=Oc("router-view");return se(),ae(Qe,null,[D("header",null,[D("div",LE,[e.value?(se(),ae("div",UE,[D("span",null,ct(e.value.displayName||e.value.email),1),D("button",{onClick:o},"Выйти")])):(se(),ae("button",{key:0,onClick:c[0]||(c[0]=f=>n.value=!0)},"Войти"))]),BE,D("div",$E,[V(Em,{msg:"ИДЕИ МОЛОДЕЖИ"}),D("nav",null,[V(l,{to:"/"},{default:An(()=>[Ct("Домой")]),_:1}),V(l,{to:"/about"},{default:An(()=>[Ct("О нас")]),_:1}),V(l,{to:"/welcome"},{default:An(()=>[Ct("Идеи молодежи")]),_:1}),V(l,{to:"/neuroart"},{default:An(()=>[Ct("Нейро-Арт")]),_:1}),V(l,{to:"/graffiti"},{default:An(()=>[Ct("Граффити")]),_:1}),V(l,{to:"/volonter"},{default:An(()=>[Ct("Волонтёрство")]),_:1})])])]),n.value?(se(),ae("div",qE,[D("div",zE,[D("span",{class:"close",onClick:c[1]||(c[1]=f=>n.value=!1)},"×"),WE,D("div",HE,[D("button",{onClick:s},"Войти через Google"),jE,D("form",{onSubmit:Kf(u,["prevent"])},[vs(D("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=f=>i.value=f),placeholder:"Email",required:""},null,512),[[xs,i.value]]),vs(D("input",{type:"password","onUpdate:modelValue":c[3]||(c[3]=f=>r.value=f),placeholder:"Пароль",required:""},null,512),[[xs,r.value]]),GE],40,VE)])])])):hn("",!0),D("main",null,[V(d)]),V(Tm)],64)}}},YE=Yt(KE,[["__scopeId","data-v-5dee43ac"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ri=typeof document<"u";function sp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function QE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sp(t.default)}const ie=Object.assign;function Qu(t,e){const n={};for(const i in e){const r=e[i];n[i]=gt(r)?r.map(t):t(r)}return n}const or=()=>{},gt=Array.isArray,up=/#/g,JE=/&/g,ZE=/\//g,XE=/=/g,e6=/\?/g,op=/\+/g,t6=/%5B/g,n6=/%5D/g,ap=/%5E/g,i6=/%60/g,cp=/%7B/g,r6=/%7C/g,lp=/%7D/g,s6=/%20/g;function dc(t){return encodeURI(""+t).replace(r6,"|").replace(t6,"[").replace(n6,"]")}function u6(t){return dc(t).replace(cp,"{").replace(lp,"}").replace(ap,"^")}function zo(t){return dc(t).replace(op,"%2B").replace(s6,"+").replace(up,"%23").replace(JE,"%26").replace(i6,"`").replace(cp,"{").replace(lp,"}").replace(ap,"^")}function o6(t){return zo(t).replace(XE,"%3D")}function a6(t){return dc(t).replace(up,"%23").replace(e6,"%3F")}function c6(t){return t==null?"":a6(t).replace(ZE,"%2F")}function Ir(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const l6=/\/$/,d6=t=>t.replace(l6,"");function Ju(t,e,n="/"){let i,r={},s="",u="";const o=e.indexOf("#");let a=e.indexOf("?");return o<a&&o>=0&&(a=-1),a>-1&&(i=e.slice(0,a),s=e.slice(a+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),u=e.slice(o,e.length)),i=_6(i??e,n),{fullPath:i+(s&&"?")+s+u,path:i,query:r,hash:Ir(u)}}function f6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _d(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h6(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ii(e.matched[i],n.matched[r])&&dp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ii(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!p6(t[n],e[n]))return!1;return!0}function p6(t,e){return gt(t)?md(t,e):gt(e)?md(e,t):t===e}function md(t,e){return gt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function _6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,u,o;for(u=0;u<i.length;u++)if(o=i[u],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(u).join("/")}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Tr;(function(t){t.pop="pop",t.push="push"})(Tr||(Tr={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function m6(t){if(!t)if(ri){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),d6(t)}const g6=/^[^#]+#/;function b6(t,e){return t.replace(g6,"#")+e}function y6(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ku=()=>({left:window.scrollX,top:window.scrollY});function v6(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=y6(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gd(t,e){return(history.state?history.state.position-e:-1)+t}const Wo=new Map;function E6(t,e){Wo.set(t,e)}function C6(t){const e=Wo.get(t);return Wo.delete(t),e}let x6=()=>location.protocol+"//"+location.host;function fp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),_d(a,"")}return _d(n,t)+i+r}function w6(t,e,n,i){let r=[],s=[],u=null;const o=({state:f})=>{const h=fp(t,location),_=n.value,y=e.value;let k=0;if(f){if(n.value=h,e.value=f,u&&u===_){u=null;return}k=y?f.position-y.position:0}else i(h);r.forEach(P=>{P(n.value,_,{delta:k,type:Tr.pop,direction:k?k>0?ar.forward:ar.back:ar.unknown})})};function a(){u=n.value}function c(f){r.push(f);const h=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(h),h}function l(){const{history:f}=window;f.state&&f.replaceState(ie({},f.state,{scroll:ku()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function bd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ku():null}}function k6(t){const{history:e,location:n}=window,i={value:fp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(a,c,l){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:x6()+t+a;try{e[l?"replaceState":"pushState"](c,"",f),r.value=c}catch(h){console.error(h),n[l?"replace":"assign"](f)}}function u(a,c){const l=ie({},e.state,bd(r.value.back,a,r.value.forward,!0),c,{position:r.value.position});s(a,l,!0),i.value=a}function o(a,c){const l=ie({},r.value,e.state,{forward:a,scroll:ku()});s(l.current,l,!0);const d=ie({},bd(i.value,a,null),{position:l.position+1},c);s(a,d,!1),i.value=a}return{location:i,state:r,push:o,replace:u}}function I6(t){t=m6(t);const e=k6(t),n=w6(t,e.state,e.location,e.replace);function i(s,u=!0){u||n.pauseListeners(),history.go(s)}const r=ie({location:"",base:t,go:i,createHref:b6.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function T6(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),I6(t)}function A6(t){return typeof t=="string"||t&&typeof t=="object"}function hp(t){return typeof t=="string"||typeof t=="symbol"}const pp=Symbol("");var yd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yd||(yd={}));function Ti(t,e){return ie(new Error,{type:t,[pp]:!0},e)}function Ft(t,e){return t instanceof Error&&pp in t&&(e==null||!!(t.type&e))}const vd="[^/]+?",S6={sensitive:!1,strict:!1,start:!0,end:!0},D6=/[.+*?^${}()[\]/\\]/g;function R6(t,e){const n=ie({},S6,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const l=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(D6,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:y,optional:k,regexp:P}=f;s.push({name:_,repeatable:y,optional:k});const C=P||vd;if(C!==vd){h+=10;try{new RegExp(`(${C})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+x.message)}}let w=y?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(w=k&&c.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),r+=w,h+=20,k&&(h+=-8),y&&(h+=-20),C===".*"&&(h+=-50)}l.push(h)}i.push(l)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const u=new RegExp(r,n.sensitive?"":"i");function o(c){const l=c.match(u),d={};if(!l)return null;for(let f=1;f<l.length;f++){const h=l[f]||"",_=s[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function a(c){let l="",d=!1;for(const f of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const h of f)if(h.type===0)l+=h.value;else if(h.type===1){const{value:_,repeatable:y,optional:k}=h,P=_ in c?c[_]:"";if(gt(P)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=gt(P)?P.join("/"):P;if(!C)if(k)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);l+=C}}return l||"/"}return{re:u,score:i,keys:s,parse:o,stringify:a}}function P6(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function _p(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=P6(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Ed(i))return 1;if(Ed(r))return-1}return r.length-i.length}function Ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const N6={type:0,value:""},F6=/[a-zA-Z0-9_]/;function O6(t){if(!t)return[[]];if(t==="/")return[[N6]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function u(){s&&r.push(s),s=[]}let o=0,a,c="",l="";function d(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:l,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;o<t.length;){if(a=t[o++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),u()):a===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:a==="("?n=2:F6.test(a)?f():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&o--);break;case 2:a===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&o--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),u(),r}function M6(t,e,n){const i=R6(O6(t.path),n),r=ie(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function L6(t,e){const n=[],i=new Map;e=kd({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,f,h){const _=!h,y=xd(d);y.aliasOf=h&&h.record;const k=kd(e,d),P=[y];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of x)P.push(xd(ie({},y,{components:h?h.record.components:y.components,path:M,aliasOf:h?h.record:y})))}let C,w;for(const x of P){const{path:M}=x;if(f&&M[0]!=="/"){const $=f.record.path,K=$[$.length-1]==="/"?"":"/";x.path=f.record.path+(M&&K+M)}if(C=M6(x,f,k),h?h.alias.push(C):(w=w||C,w!==C&&w.alias.push(C),_&&d.name&&!wd(C)&&u(d.name)),mp(C)&&a(C),y.children){const $=y.children;for(let K=0;K<$.length;K++)s($[K],C,h&&h.children[K])}h=h||C}return w?()=>{u(w)}:or}function u(d){if(hp(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(u),f.alias.forEach(u))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(u),d.alias.forEach(u))}}function o(){return n}function a(d){const f=$6(d,n);n.splice(f,0,d),d.record.name&&!wd(d)&&i.set(d.record.name,d)}function c(d,f){let h,_={},y,k;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Ti(1,{location:d});k=h.record.name,_=ie(Cd(f.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Cd(d.params,h.keys.map(w=>w.name))),y=h.stringify(_)}else if(d.path!=null)y=d.path,h=n.find(w=>w.re.test(y)),h&&(_=h.parse(y),k=h.record.name);else{if(h=f.name?i.get(f.name):n.find(w=>w.re.test(f.path)),!h)throw Ti(1,{location:d,currentLocation:f});k=h.record.name,_=ie({},f.params,d.params),y=h.stringify(_)}const P=[];let C=h;for(;C;)P.unshift(C.record),C=C.parent;return{name:k,path:y,params:_,matched:P,meta:B6(P)}}t.forEach(d=>s(d));function l(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:u,clearRoutes:l,getRoutes:o,getRecordMatcher:r}}function Cd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function xd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:U6(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function U6(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B6(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function kd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function $6(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;_p(t,e[s])<0?i=s:n=s+1}const r=q6(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function q6(t){let e=t;for(;e=e.parent;)if(mp(e)&&_p(t,e)===0)return e}function mp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function z6(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(op," "),u=s.indexOf("="),o=Ir(u<0?s:s.slice(0,u)),a=u<0?null:Ir(s.slice(u+1));if(o in e){let c=e[o];gt(c)||(c=e[o]=[c]),c.push(a)}else e[o]=a}return e}function Id(t){let e="";for(let n in t){const i=t[n];if(n=o6(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gt(i)?i.map(s=>s&&zo(s)):[i&&zo(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function W6(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const H6=Symbol(""),Td=Symbol(""),fc=Symbol(""),gp=Symbol(""),Ho=Symbol("");function Gi(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rn(t,e,n,i,r,s=u=>u()){const u=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Ti(4,{from:n,to:e})):f instanceof Error?a(f):A6(f)?a(Ti(2,{from:e,to:f})):(u&&i.enterCallbacks[r]===u&&typeof f=="function"&&u.push(f),o())},l=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(l);t.length<3&&(d=d.then(c)),d.catch(f=>a(f))})}function Zu(t,e,n,i,r=s=>s()){const s=[];for(const u of t)for(const o in u.components){let a=u.components[o];if(!(e!=="beforeRouteEnter"&&!u.instances[o]))if(sp(a)){const l=(a.__vccOpts||a)[e];l&&s.push(rn(l,n,i,u,o,r))}else{let c=a();s.push(()=>c.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${o}" at "${u.path}"`);const d=QE(l)?l.default:l;u.mods[o]=l,u.components[o]=d;const h=(d.__vccOpts||d)[e];return h&&rn(h,n,i,u,o,r)()}))}}return s}function Ad(t){const e=qt(fc),n=qt(gp),i=ot(()=>{const a=Un(t.to);return e.resolve(a)}),r=ot(()=>{const{matched:a}=i.value,{length:c}=a,l=a[c-1],d=n.matched;if(!l||!d.length)return-1;const f=d.findIndex(Ii.bind(null,l));if(f>-1)return f;const h=Sd(a[c-2]);return c>1&&Sd(l)===h&&d[d.length-1].path!==h?d.findIndex(Ii.bind(null,a[c-2])):f}),s=ot(()=>r.value>-1&&Y6(n.params,i.value.params)),u=ot(()=>r.value>-1&&r.value===n.matched.length-1&&dp(n.params,i.value.params));function o(a={}){if(K6(a)){const c=e[Un(t.replace)?"replace":"push"](Un(t.to)).catch(or);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ot(()=>i.value.href),isActive:s,isExactActive:u,navigate:o}}function j6(t){return t.length===1?t[0]:t}const V6=Sf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ad,setup(t,{slots:e}){const n=nu(Ad(t)),{options:i}=qt(fc),r=ot(()=>({[Dd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Dd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&j6(e.default(n));return t.custom?s:Gf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),G6=V6;function K6(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Y6(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!gt(r)||r.length!==i.length||i.some((s,u)=>s!==r[u]))return!1}return!0}function Sd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dd=(t,e,n)=>t??e??n,Q6=Sf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=qt(Ho),r=ot(()=>t.route||i.value),s=qt(Td,0),u=ot(()=>{let c=Un(s);const{matched:l}=r.value;let d;for(;(d=l[c])&&!d.components;)c++;return c}),o=ot(()=>r.value.matched[u.value]);cs(Td,ot(()=>u.value+1)),cs(H6,o),cs(Ho,r);const a=Lt();return os(()=>[a.value,o.value,t.name],([c,l,d],[f,h,_])=>{l&&(l.instances[d]=c,h&&h!==l&&c&&c===f&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!Ii(l,h)||!f)&&(l.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=t.name,d=o.value,f=d&&d.components[l];if(!f)return Rd(n.default,{Component:f,route:c});const h=d.props[l],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,k=Gf(f,ie({},_,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[l]=null)},ref:a}));return Rd(n.default,{Component:k,route:c})||k}}});function Rd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const J6=Q6;function Z6(t){const e=L6(t.routes,t),n=t.parseQuery||z6,i=t.stringifyQuery||Id,r=t.history,s=Gi(),u=Gi(),o=Gi(),a=N_(tn);let c=tn;ri&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Qu.bind(null,E=>""+E),d=Qu.bind(null,c6),f=Qu.bind(null,Ir);function h(E,O){let F,q;return hp(E)?(F=e.getRecordMatcher(E),q=O):q=E,e.addRoute(q,F)}function _(E){const O=e.getRecordMatcher(E);O&&e.removeRoute(O)}function y(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function P(E,O){if(O=ie({},O||a.value),typeof E=="string"){const b=Ju(n,E,O.path),v=e.resolve({path:b.path},O),T=r.createHref(b.fullPath);return ie(b,v,{params:f(v.params),hash:Ir(b.hash),redirectedFrom:void 0,href:T})}let F;if(E.path!=null)F=ie({},E,{path:Ju(n,E.path,O.path).path});else{const b=ie({},E.params);for(const v in b)b[v]==null&&delete b[v];F=ie({},E,{params:d(b)}),O.params=d(O.params)}const q=e.resolve(F,O),p=E.hash||"";q.params=l(f(q.params));const m=f6(i,ie({},E,{hash:u6(p),path:q.path})),g=r.createHref(m);return ie({fullPath:m,hash:p,query:i===Id?W6(E.query):E.query||{}},q,{redirectedFrom:void 0,href:g})}function C(E){return typeof E=="string"?Ju(n,E,a.value.path):ie({},E)}function w(E,O){if(c!==E)return Ti(8,{from:O,to:E})}function x(E){return K(E)}function M(E){return x(ie(C(E),{replace:!0}))}function $(E){const O=E.matched[E.matched.length-1];if(O&&O.redirect){const{redirect:F}=O;let q=typeof F=="function"?F(E):F;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=C(q):{path:q},q.params={}),ie({query:E.query,hash:E.hash,params:q.path!=null?{}:E.params},q)}}function K(E,O){const F=c=P(E),q=a.value,p=E.state,m=E.force,g=E.replace===!0,b=$(F);if(b)return K(ie(C(b),{state:typeof b=="object"?ie({},p,b.state):p,force:m,replace:g}),O||F);const v=F;v.redirectedFrom=O;let T;return!m&&h6(i,q,F)&&(T=Ti(16,{to:v,from:q}),yt(q,q,!0,!1)),(T?Promise.resolve(T):xe(v,q)).catch(S=>Ft(S)?Ft(S,2)?S:Zt(S):ne(S,v,q)).then(S=>{if(S){if(Ft(S,2))return K(ie({replace:g},C(S.to),{state:typeof S.to=="object"?ie({},p,S.to.state):p,force:m}),O||v)}else S=Pt(v,q,!0,g,p);return Ze(v,q,S),S})}function me(E,O){const F=w(E,O);return F?Promise.reject(F):Promise.resolve()}function be(E){const O=Zn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(E):E()}function xe(E,O){let F;const[q,p,m]=X6(E,O);F=Zu(q.reverse(),"beforeRouteLeave",E,O);for(const b of q)b.leaveGuards.forEach(v=>{F.push(rn(v,E,O))});const g=me.bind(null,E,O);return F.push(g),Pe(F).then(()=>{F=[];for(const b of s.list())F.push(rn(b,E,O));return F.push(g),Pe(F)}).then(()=>{F=Zu(p,"beforeRouteUpdate",E,O);for(const b of p)b.updateGuards.forEach(v=>{F.push(rn(v,E,O))});return F.push(g),Pe(F)}).then(()=>{F=[];for(const b of m)if(b.beforeEnter)if(gt(b.beforeEnter))for(const v of b.beforeEnter)F.push(rn(v,E,O));else F.push(rn(b.beforeEnter,E,O));return F.push(g),Pe(F)}).then(()=>(E.matched.forEach(b=>b.enterCallbacks={}),F=Zu(m,"beforeRouteEnter",E,O,be),F.push(g),Pe(F))).then(()=>{F=[];for(const b of u.list())F.push(rn(b,E,O));return F.push(g),Pe(F)}).catch(b=>Ft(b,8)?b:Promise.reject(b))}function Ze(E,O,F){o.list().forEach(q=>be(()=>q(E,O,F)))}function Pt(E,O,F,q,p){const m=w(E,O);if(m)return m;const g=O===tn,b=ri?history.state:{};F&&(q||g?r.replace(E.fullPath,ie({scroll:g&&b&&b.scroll},p)):r.push(E.fullPath,p)),a.value=E,yt(E,O,F,g),Zt()}let Xe;function Jt(){Xe||(Xe=r.listen((E,O,F)=>{if(!Vr.listening)return;const q=P(E),p=$(q);if(p){K(ie(p,{replace:!0,force:!0}),q).catch(or);return}c=q;const m=a.value;ri&&E6(gd(m.fullPath,F.delta),ku()),xe(q,m).catch(g=>Ft(g,12)?g:Ft(g,2)?(K(ie(C(g.to),{force:!0}),q).then(b=>{Ft(b,20)&&!F.delta&&F.type===Tr.pop&&r.go(-1,!1)}).catch(or),Promise.reject()):(F.delta&&r.go(-F.delta,!1),ne(g,q,m))).then(g=>{g=g||Pt(q,m,!1),g&&(F.delta&&!Ft(g,8)?r.go(-F.delta,!1):F.type===Tr.pop&&Ft(g,20)&&r.go(-1,!1)),Ze(q,m,g)}).catch(or)}))}let Ke=Gi(),ye=Gi(),ue;function ne(E,O,F){Zt(E);const q=ye.list();return q.length?q.forEach(p=>p(E,O,F)):console.error(E),Promise.reject(E)}function Nt(){return ue&&a.value!==tn?Promise.resolve():new Promise((E,O)=>{Ke.add([E,O])})}function Zt(E){return ue||(ue=!E,Jt(),Ke.list().forEach(([O,F])=>E?F(E):O()),Ke.reset()),E}function yt(E,O,F,q){const{scrollBehavior:p}=t;if(!ri||!p)return Promise.resolve();const m=!F&&C6(gd(E.fullPath,0))||(q||!F)&&history.state&&history.state.scroll||null;return Cf().then(()=>p(E,O,m)).then(g=>g&&v6(g)).catch(g=>ne(g,E,O))}const Be=E=>r.go(E);let Jn;const Zn=new Set,Vr={currentRoute:a,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:y,resolve:P,options:t,push:x,replace:M,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:s.add,beforeResolve:u.add,afterEach:o.add,onError:ye.add,isReady:Nt,install(E){const O=this;E.component("RouterLink",G6),E.component("RouterView",J6),E.config.globalProperties.$router=O,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Un(a)}),ri&&!Jn&&a.value===tn&&(Jn=!0,x(r.location).catch(p=>{}));const F={};for(const p in tn)Object.defineProperty(F,p,{get:()=>a.value[p],enumerable:!0});E.provide(fc,O),E.provide(gp,hf(F)),E.provide(Ho,a);const q=E.unmount;Zn.add(E),E.unmount=function(){Zn.delete(E),Zn.size<1&&(c=tn,Xe&&Xe(),Xe=null,a.value=tn,Jn=!1,ue=!1),q()}}};function Pe(E){return E.reduce((O,F)=>O.then(()=>be(F)),Promise.resolve())}return Vr}function X6(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let u=0;u<s;u++){const o=e.matched[u];o&&(t.matched.find(c=>Ii(c,o))?i.push(o):n.push(o));const a=t.matched[u];a&&(e.matched.find(c=>Ii(c,a))||r.push(a))}return[n,i,r]}const eC={},tC={class:"home"},nC=D("h1",null,"Домашняя страница",-1),iC=[nC];function rC(t,e){return se(),ae("div",tC,iC)}const sC=Yt(eC,[["render",rC]]),uC={},oC={class:"about"},aC=Hf('<h1 data-v-2b309673>О нас</h1><div data-v-2b309673><h3 data-v-2b309673>Социальная платформа для молодёжи: пространство для идей и взаимодействия</h3><br data-v-2b309673><p data-v-2b309673>Социальная платформа для молодёжи — это уникальное онлайн-пространство, созданное для того, чтобы объединить активных, инициативных и неравнодушных молодых людей. Основная цель платформы — дать возможность молодёжи реализовать свой потенциал, предлагать и воплощать в жизнь социальные идеи, а также взаимодействовать с различными организациями, которые разделяют их ценности и стремления.</p><br data-v-2b309673><p class="golov" data-v-2b309673>Для чего нужна социальная платформа?</p><p data-v-2b309673>Мир меняется, и молодёжь играет ключевую роль в этих изменениях.Платформа создана для того, чтобы:</p><ul data-v-2b309673><li data-v-2b309673>Дать возможность молодым людям выражать свои идеи и инициативы.</li><li data-v-2b309673>Объединить единомышленников для совместной работы над социальными проектами.</li><li data-v-2b309673>Предоставить доступ к ресурсам и поддержке от социальных организаций и правительства региона.</li><li data-v-2b309673>Вдохновлять на создание позитивных изменений в обществе.</li><li data-v-2b309673>Наблюдать за новыми арт-объектами – граффити в городе.</li></ul><br data-v-2b309673><p class="golov" data-v-2b309673>Что можно делать на платформе?</p><br data-v-2b309673><ol data-v-2b309673><li data-v-2b309673><p class="li" data-v-2b309673>Взаимодействовать с социальными организациями</p> На платформе представлены различные социальные организации, которые занимаются образованием, экологией, благотворительностью, защитой прав человека и многим другим. Вы можете: <ul data-v-2b309673><li data-v-2b309673>Узнавать об их деятельности.</li><li data-v-2b309673>Участвовать в их проектах и мероприятиях.</li><li data-v-2b309673>Получать поддержку для реализации своих идей.</li></ul></li><li data-v-2b309673><p class="li" data-v-2b309673>Предлагать свои социальные идеи</p> Платформа разделена на тематические разделы, где можно публиковать свои идеи и проекты. Например: <ul data-v-2b309673><li data-v-2b309673>Идеи по росписи граффити: предлагай места для новых работ.</li><li data-v-2b309673>Культура и искусство: создавайте инициативы, которые вдохновляют и объединяют людей.</li><li data-v-2b309673>Идеи по благоустройству: предлагайте идеи по благоустройству дворов, парков, скверов, зон отдыха и различных мест в регионе.</li></ul> Каждая идея может быть поддержана другими пользователями, а также получить экспертную оценку и помощь от организаций. </li><li data-v-2b309673><p class="li" data-v-2b309673>Находить единомышленников и создавать команды</p> Платформа позволяет находить людей с похожими интересами, объединяться в команды и вместе работать над реализацией проектов.</li><li data-v-2b309673><p class="li" data-v-2b309673>Связаться с правительством региона.</p> На платформе есть возможность оставить заявку в правительство региона, а после получить официальный ответ.</li><li data-v-2b309673><p class="li" data-v-2b309673>Выкладывать новости о культурных и образовательных мероприятиях.</p> Платформа позволяет делится и обсуждать последние новости о культурных и образовательных мероприятиях, а также наблюдать за реализацией твоих инициатив через новости.</li></ol><p class="golov" data-v-2b309673>Почему это важно?</p><p data-v-2b309673>Социальная платформа для молодёжи — это не просто инструмент для общения, это пространство для действий. Здесь каждый может стать частью чего-то большего, внести свой вклад в развитие общества и найти поддержку для своих инициатив.</p><br data-v-2b309673><p data-v-2b309673>Присоединяйтесь к платформе, предлагайте свои идеи, вдохновляйтесь и меняйте мир к лучшему вместе с нами!</p></div>',2),cC=[aC];function lC(t,e){return se(),ae("div",oC,cC)}const dC=Yt(uC,[["render",lC],["__scopeId","data-v-2b309673"]]),bp=t=>(Pr("data-v-abfb42e3"),t=t(),Nr(),t),fC={class:"comments-section"},hC=bp(()=>D("h2",null,"Идеи молодежи",-1)),pC={key:0,class:"comment-form"},_C={key:1,class:"auth-prompt"},mC=bp(()=>D("p",null,"Чтобы оставить комментарий, пожалуйста, войдите в систему.",-1)),gC=[mC],bC={class:"comments-list"},yC={class:"comment-header"},vC=["onClick"],EC={__name:"TheWelcome",setup(t){const e=Lt(""),n=Lt([]),i=Lt(null),r=Lt(!1);ca(()=>{Zi.onAuthStateChanged(async a=>{i.value=a,a?r.value=a.email==="admin@example.com":r.value=!1});const o=Ku(Yu,"comments");kE(o,a=>{const c=a.val();c?n.value=Object.entries(c).map(([l,d])=>({id:l,...d})):n.value=[]})});const s=()=>{!e.value.trim()||!i.value||(CE(Ku(Yu,"comments"),{text:e.value,author:i.value.displayName||i.value.email,authorId:i.value.uid,timestamp:Date.now()}),e.value="")},u=o=>{r.value&&confirm("Вы уверены, что хотите удалить этот комментарий?")&&xE(Ku(Yu,`comments/${o}`))};return(o,a)=>(se(),ae("div",fC,[hC,i.value?(se(),ae("div",pC,[vs(D("textarea",{"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),placeholder:"Поделитесь своей идеей..."},null,512),[[xs,e.value]]),D("button",{onClick:s},"Отправить")])):(se(),ae("div",_C,gC)),D("div",bC,[(se(!0),ae(Qe,null,d1(n.value,c=>(se(),ae("div",{key:c.id,class:"comment"},[D("div",yC,[D("strong",null,ct(c.author)+":",1),r.value?(se(),ae("button",{key:0,onClick:l=>u(c.id),class:"delete-button"}," Удалить ",8,vC)):hn("",!0)]),D("p",null,ct(c.text),1),D("small",null,ct(new Date(c.timestamp).toLocaleString()),1)]))),128))])]))}},CC=Yt(EC,[["__scopeId","data-v-abfb42e3"]]),xC={props:{imageSrc:{type:String,required:!0},imageWidth:{type:String,default:"200px"}},data(){return{isModalOpen:!1}},methods:{openModal(){this.isModalOpen=!0,document.body.style.overflow="hidden"},closeModal(){this.isModalOpen=!1,document.body.style.overflow=""}}},wC=["src"],kC={class:"modal-content"},IC=["src"];function TC(t,e,n,i,r,s){return se(),ae("div",null,[D("img",{src:n.imageSrc,alt:"Click to enlarge",style:eu({width:n.imageWidth}),class:"clickable-image",onClick:e[0]||(e[0]=(...u)=>s.openModal&&s.openModal(...u))},null,12,wC),r.isModalOpen?(se(),ae("div",{key:0,class:"modal-overlay",onClick:e[2]||(e[2]=(...u)=>s.closeModal&&s.closeModal(...u))},[D("div",kC,[D("img",{src:n.imageSrc,alt:"Full size",class:"full-size-image"},null,8,IC),D("button",{class:"close-button",onClick:e[1]||(e[1]=Kf((...u)=>s.closeModal&&s.closeModal(...u),["stop"]))},"×")])])):hn("",!0)])}const ve=Yt(xC,[["render",TC],["__scopeId","data-v-7f6ef325"]]),Pd={};function AC(t){let e=Pd[t];if(e)return e;e=Pd[t]=[];for(let n=0;n<128;n++){const i=String.fromCharCode(n);e.push(i)}for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);e[i]="%"+("0"+i.toString(16).toUpperCase()).slice(-2)}return e}function Ai(t,e){typeof e!="string"&&(e=Ai.defaultChars);const n=AC(e);return t.replace(/(%[a-f0-9]{2})+/gi,function(i){let r="";for(let s=0,u=i.length;s<u;s+=3){const o=parseInt(i.slice(s+1,s+3),16);if(o<128){r+=n[o];continue}if((o&224)===192&&s+3<u){const a=parseInt(i.slice(s+4,s+6),16);if((a&192)===128){const c=o<<6&1984|a&63;c<128?r+="��":r+=String.fromCharCode(c),s+=3;continue}}if((o&240)===224&&s+6<u){const a=parseInt(i.slice(s+4,s+6),16),c=parseInt(i.slice(s+7,s+9),16);if((a&192)===128&&(c&192)===128){const l=o<<12&61440|a<<6&4032|c&63;l<2048||l>=55296&&l<=57343?r+="���":r+=String.fromCharCode(l),s+=6;continue}}if((o&248)===240&&s+9<u){const a=parseInt(i.slice(s+4,s+6),16),c=parseInt(i.slice(s+7,s+9),16),l=parseInt(i.slice(s+10,s+12),16);if((a&192)===128&&(c&192)===128&&(l&192)===128){let d=o<<18&1835008|a<<12&258048|c<<6&4032|l&63;d<65536||d>1114111?r+="����":(d-=65536,r+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),s+=9;continue}}r+="�"}return r})}Ai.defaultChars=";/?:@&=+$,#";Ai.componentChars="";const Nd={};function SC(t){let e=Nd[t];if(e)return e;e=Nd[t]=[];for(let n=0;n<128;n++){const i=String.fromCharCode(n);/^[0-9a-z]$/i.test(i)?e.push(i):e.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<t.length;n++)e[t.charCodeAt(n)]=t[n];return e}function Wr(t,e,n){typeof e!="string"&&(n=e,e=Wr.defaultChars),typeof n>"u"&&(n=!0);const i=SC(e);let r="";for(let s=0,u=t.length;s<u;s++){const o=t.charCodeAt(s);if(n&&o===37&&s+2<u&&/^[0-9a-f]{2}$/i.test(t.slice(s+1,s+3))){r+=t.slice(s,s+3),s+=2;continue}if(o<128){r+=i[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&s+1<u){const a=t.charCodeAt(s+1);if(a>=56320&&a<=57343){r+=encodeURIComponent(t[s]+t[s+1]),s++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(t[s])}return r}Wr.defaultChars=";/?:@&=+$,-_.!~*'()#";Wr.componentChars="-_.!~*'()";function hc(t){let e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&t.hostname.indexOf(":")!==-1?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||"",e}function Gs(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const DC=/^([a-z0-9.+-]+:)/i,RC=/:[0-9]*$/,PC=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,NC=["<",">",'"',"`"," ","\r",`
`,"	"],FC=["{","}","|","\\","^","`"].concat(NC),OC=["'"].concat(FC),Fd=["%","/","?",";","#"].concat(OC),Od=["/","?","#"],MC=255,Md=/^[+a-z0-9A-Z_-]{0,63}$/,LC=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Ld={javascript:!0,"javascript:":!0},Ud={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function pc(t,e){if(t&&t instanceof Gs)return t;const n=new Gs;return n.parse(t,e),n}Gs.prototype.parse=function(t,e){let n,i,r,s=t;if(s=s.trim(),!e&&t.split("#").length===1){const c=PC.exec(s);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let u=DC.exec(s);if(u&&(u=u[0],n=u.toLowerCase(),this.protocol=u,s=s.substr(u.length)),(e||u||s.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=s.substr(0,2)==="//",r&&!(u&&Ld[u])&&(s=s.substr(2),this.slashes=!0)),!Ld[u]&&(r||u&&!Ud[u])){let c=-1;for(let _=0;_<Od.length;_++)i=s.indexOf(Od[_]),i!==-1&&(c===-1||i<c)&&(c=i);let l,d;c===-1?d=s.lastIndexOf("@"):d=s.lastIndexOf("@",c),d!==-1&&(l=s.slice(0,d),s=s.slice(d+1),this.auth=l),c=-1;for(let _=0;_<Fd.length;_++)i=s.indexOf(Fd[_]),i!==-1&&(c===-1||i<c)&&(c=i);c===-1&&(c=s.length),s[c-1]===":"&&c--;const f=s.slice(0,c);s=s.slice(c),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const _=this.hostname.split(/\./);for(let y=0,k=_.length;y<k;y++){const P=_[y];if(P&&!P.match(Md)){let C="";for(let w=0,x=P.length;w<x;w++)P.charCodeAt(w)>127?C+="x":C+=P[w];if(!C.match(Md)){const w=_.slice(0,y),x=_.slice(y+1),M=P.match(LC);M&&(w.push(M[1]),x.unshift(M[2])),x.length&&(s=x.join(".")+s),this.hostname=w.join(".");break}}}}this.hostname.length>MC&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const o=s.indexOf("#");o!==-1&&(this.hash=s.substr(o),s=s.slice(0,o));const a=s.indexOf("?");return a!==-1&&(this.search=s.substr(a),s=s.slice(0,a)),s&&(this.pathname=s),Ud[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Gs.prototype.parseHost=function(t){let e=RC.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};const UC=Object.freeze(Object.defineProperty({__proto__:null,decode:Ai,encode:Wr,format:hc,parse:pc},Symbol.toStringTag,{value:"Module"})),yp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,vp=/[\0-\x1F\x7F-\x9F]/,BC=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,_c=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Ep=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Cp=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,$C=Object.freeze(Object.defineProperty({__proto__:null,Any:yp,Cc:vp,Cf:BC,P:_c,S:Ep,Z:Cp},Symbol.toStringTag,{value:"Module"})),qC=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(t=>t.charCodeAt(0))),zC=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(t=>t.charCodeAt(0)));var Xu;const WC=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),HC=(Xu=String.fromCodePoint)!==null&&Xu!==void 0?Xu:function(t){let e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|t&1023),e+=String.fromCharCode(t),e};function jC(t){var e;return t>=55296&&t<=57343||t>1114111?65533:(e=WC.get(t))!==null&&e!==void 0?e:t}var Ae;(function(t){t[t.NUM=35]="NUM",t[t.SEMI=59]="SEMI",t[t.EQUALS=61]="EQUALS",t[t.ZERO=48]="ZERO",t[t.NINE=57]="NINE",t[t.LOWER_A=97]="LOWER_A",t[t.LOWER_F=102]="LOWER_F",t[t.LOWER_X=120]="LOWER_X",t[t.LOWER_Z=122]="LOWER_Z",t[t.UPPER_A=65]="UPPER_A",t[t.UPPER_F=70]="UPPER_F",t[t.UPPER_Z=90]="UPPER_Z"})(Ae||(Ae={}));const VC=32;var ln;(function(t){t[t.VALUE_LENGTH=49152]="VALUE_LENGTH",t[t.BRANCH_LENGTH=16256]="BRANCH_LENGTH",t[t.JUMP_TABLE=127]="JUMP_TABLE"})(ln||(ln={}));function jo(t){return t>=Ae.ZERO&&t<=Ae.NINE}function GC(t){return t>=Ae.UPPER_A&&t<=Ae.UPPER_F||t>=Ae.LOWER_A&&t<=Ae.LOWER_F}function KC(t){return t>=Ae.UPPER_A&&t<=Ae.UPPER_Z||t>=Ae.LOWER_A&&t<=Ae.LOWER_Z||jo(t)}function YC(t){return t===Ae.EQUALS||KC(t)}var we;(function(t){t[t.EntityStart=0]="EntityStart",t[t.NumericStart=1]="NumericStart",t[t.NumericDecimal=2]="NumericDecimal",t[t.NumericHex=3]="NumericHex",t[t.NamedEntity=4]="NamedEntity"})(we||(we={}));var cn;(function(t){t[t.Legacy=0]="Legacy",t[t.Strict=1]="Strict",t[t.Attribute=2]="Attribute"})(cn||(cn={}));class QC{constructor(e,n,i){this.decodeTree=e,this.emitCodePoint=n,this.errors=i,this.state=we.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=cn.Strict}startEntity(e){this.decodeMode=e,this.state=we.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,n){switch(this.state){case we.EntityStart:return e.charCodeAt(n)===Ae.NUM?(this.state=we.NumericStart,this.consumed+=1,this.stateNumericStart(e,n+1)):(this.state=we.NamedEntity,this.stateNamedEntity(e,n));case we.NumericStart:return this.stateNumericStart(e,n);case we.NumericDecimal:return this.stateNumericDecimal(e,n);case we.NumericHex:return this.stateNumericHex(e,n);case we.NamedEntity:return this.stateNamedEntity(e,n)}}stateNumericStart(e,n){return n>=e.length?-1:(e.charCodeAt(n)|VC)===Ae.LOWER_X?(this.state=we.NumericHex,this.consumed+=1,this.stateNumericHex(e,n+1)):(this.state=we.NumericDecimal,this.stateNumericDecimal(e,n))}addToNumericResult(e,n,i,r){if(n!==i){const s=i-n;this.result=this.result*Math.pow(r,s)+parseInt(e.substr(n,s),r),this.consumed+=s}}stateNumericHex(e,n){const i=n;for(;n<e.length;){const r=e.charCodeAt(n);if(jo(r)||GC(r))n+=1;else return this.addToNumericResult(e,i,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,i,n,16),-1}stateNumericDecimal(e,n){const i=n;for(;n<e.length;){const r=e.charCodeAt(n);if(jo(r))n+=1;else return this.addToNumericResult(e,i,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,i,n,10),-1}emitNumericEntity(e,n){var i;if(this.consumed<=n)return(i=this.errors)===null||i===void 0||i.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Ae.SEMI)this.consumed+=1;else if(this.decodeMode===cn.Strict)return 0;return this.emitCodePoint(jC(this.result),this.consumed),this.errors&&(e!==Ae.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,n){const{decodeTree:i}=this;let r=i[this.treeIndex],s=(r&ln.VALUE_LENGTH)>>14;for(;n<e.length;n++,this.excess++){const u=e.charCodeAt(n);if(this.treeIndex=JC(i,r,this.treeIndex+Math.max(1,s),u),this.treeIndex<0)return this.result===0||this.decodeMode===cn.Attribute&&(s===0||YC(u))?0:this.emitNotTerminatedNamedEntity();if(r=i[this.treeIndex],s=(r&ln.VALUE_LENGTH)>>14,s!==0){if(u===Ae.SEMI)return this.emitNamedEntityData(this.treeIndex,s,this.consumed+this.excess);this.decodeMode!==cn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:n,decodeTree:i}=this,r=(i[n]&ln.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,n,i){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[e]&~ln.VALUE_LENGTH:r[e+1],i),n===3&&this.emitCodePoint(r[e+2],i),i}end(){var e;switch(this.state){case we.NamedEntity:return this.result!==0&&(this.decodeMode!==cn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case we.NumericDecimal:return this.emitNumericEntity(0,2);case we.NumericHex:return this.emitNumericEntity(0,3);case we.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case we.EntityStart:return 0}}}function xp(t){let e="";const n=new QC(t,i=>e+=HC(i));return function(r,s){let u=0,o=0;for(;(o=r.indexOf("&",o))>=0;){e+=r.slice(u,o),n.startEntity(s);const c=n.write(r,o+1);if(c<0){u=o+n.end();break}u=o+c,o=c===0?u+1:u}const a=e+r.slice(u);return e="",a}}function JC(t,e,n,i){const r=(e&ln.BRANCH_LENGTH)>>7,s=e&ln.JUMP_TABLE;if(r===0)return s!==0&&i===s?n:-1;if(s){const a=i-s;return a<0||a>=r?-1:t[n+a]-1}let u=n,o=u+r-1;for(;u<=o;){const a=u+o>>>1,c=t[a];if(c<i)u=a+1;else if(c>i)o=a-1;else return t[a+r]}return-1}const ZC=xp(qC);xp(zC);function wp(t,e=cn.Legacy){return ZC(t,e)}function XC(t){return Object.prototype.toString.call(t)}function mc(t){return XC(t)==="[object String]"}const ex=Object.prototype.hasOwnProperty;function tx(t,e){return ex.call(t,e)}function Iu(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(i){t[i]=n[i]})}}),t}function kp(t,e,n){return[].concat(t.slice(0,e),n,t.slice(e+1))}function gc(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function Ks(t){if(t>65535){t-=65536;const e=55296+(t>>10),n=56320+(t&1023);return String.fromCharCode(e,n)}return String.fromCharCode(t)}const Ip=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,nx=/&([a-z#][a-z0-9]{1,31});/gi,ix=new RegExp(Ip.source+"|"+nx.source,"gi"),rx=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function sx(t,e){if(e.charCodeAt(0)===35&&rx.test(e)){const i=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return gc(i)?Ks(i):t}const n=wp(t);return n!==t?n:t}function ux(t){return t.indexOf("\\")<0?t:t.replace(Ip,"$1")}function Si(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(ix,function(e,n,i){return n||sx(e,i)})}const ox=/[&<>"]/,ax=/[&<>"]/g,cx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function lx(t){return cx[t]}function Cn(t){return ox.test(t)?t.replace(ax,lx):t}const dx=/[.?*+^$[\]\\(){}|-]/g;function fx(t){return t.replace(dx,"\\$&")}function fe(t){switch(t){case 9:case 32:return!0}return!1}function Ar(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Sr(t){return _c.test(t)||Ep.test(t)}function Dr(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Tu(t){return t=t.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(t=t.replace(/ẞ/g,"ß")),t.toLowerCase().toUpperCase()}const hx={mdurl:UC,ucmicro:$C},px=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:kp,assign:Iu,escapeHtml:Cn,escapeRE:fx,fromCodePoint:Ks,has:tx,isMdAsciiPunct:Dr,isPunctChar:Sr,isSpace:fe,isString:mc,isValidEntityCode:gc,isWhiteSpace:Ar,lib:hx,normalizeReference:Tu,unescapeAll:Si,unescapeMd:ux},Symbol.toStringTag,{value:"Module"}));function _x(t,e,n){let i,r,s,u;const o=t.posMax,a=t.pos;for(t.pos=e+1,i=1;t.pos<o;){if(s=t.src.charCodeAt(t.pos),s===93&&(i--,i===0)){r=!0;break}if(u=t.pos,t.md.inline.skipToken(t),s===91){if(u===t.pos-1)i++;else if(n)return t.pos=a,-1}}let c=-1;return r&&(c=t.pos),t.pos=a,c}function mx(t,e,n){let i,r=e;const s={ok:!1,pos:0,str:""};if(t.charCodeAt(r)===60){for(r++;r<n;){if(i=t.charCodeAt(r),i===10||i===60)return s;if(i===62)return s.pos=r+1,s.str=Si(t.slice(e+1,r)),s.ok=!0,s;if(i===92&&r+1<n){r+=2;continue}r++}return s}let u=0;for(;r<n&&(i=t.charCodeAt(r),!(i===32||i<32||i===127));){if(i===92&&r+1<n){if(t.charCodeAt(r+1)===32)break;r+=2;continue}if(i===40&&(u++,u>32))return s;if(i===41){if(u===0)break;u--}r++}return e===r||u!==0||(s.str=Si(t.slice(e,r)),s.pos=r,s.ok=!0),s}function gx(t,e,n,i){let r,s=e;const u={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(i)u.str=i.str,u.marker=i.marker;else{if(s>=n)return u;let o=t.charCodeAt(s);if(o!==34&&o!==39&&o!==40)return u;e++,s++,o===40&&(o=41),u.marker=o}for(;s<n;){if(r=t.charCodeAt(s),r===u.marker)return u.pos=s+1,u.str+=Si(t.slice(e,s)),u.ok=!0,u;if(r===40&&u.marker===41)return u;r===92&&s+1<n&&s++,s++}return u.can_continue=!0,u.str+=Si(t.slice(e,s)),u}const bx=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:mx,parseLinkLabel:_x,parseLinkTitle:gx},Symbol.toStringTag,{value:"Module"})),Dt={};Dt.code_inline=function(t,e,n,i,r){const s=t[e];return"<code"+r.renderAttrs(s)+">"+Cn(s.content)+"</code>"};Dt.code_block=function(t,e,n,i,r){const s=t[e];return"<pre"+r.renderAttrs(s)+"><code>"+Cn(t[e].content)+`</code></pre>
`};Dt.fence=function(t,e,n,i,r){const s=t[e],u=s.info?Si(s.info).trim():"";let o="",a="";if(u){const l=u.split(/(\s+)/g);o=l[0],a=l.slice(2).join("")}let c;if(n.highlight?c=n.highlight(s.content,o,a)||Cn(s.content):c=Cn(s.content),c.indexOf("<pre")===0)return c+`
`;if(u){const l=s.attrIndex("class"),d=s.attrs?s.attrs.slice():[];l<0?d.push(["class",n.langPrefix+o]):(d[l]=d[l].slice(),d[l][1]+=" "+n.langPrefix+o);const f={attrs:d};return`<pre><code${r.renderAttrs(f)}>${c}</code></pre>
`}return`<pre><code${r.renderAttrs(s)}>${c}</code></pre>
`};Dt.image=function(t,e,n,i,r){const s=t[e];return s.attrs[s.attrIndex("alt")][1]=r.renderInlineAsText(s.children,n,i),r.renderToken(t,e,n)};Dt.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};Dt.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Dt.text=function(t,e){return Cn(t[e].content)};Dt.html_block=function(t,e){return t[e].content};Dt.html_inline=function(t,e){return t[e].content};function $i(){this.rules=Iu({},Dt)}$i.prototype.renderAttrs=function(e){let n,i,r;if(!e.attrs)return"";for(r="",n=0,i=e.attrs.length;n<i;n++)r+=" "+Cn(e.attrs[n][0])+'="'+Cn(e.attrs[n][1])+'"';return r};$i.prototype.renderToken=function(e,n,i){const r=e[n];let s="";if(r.hidden)return"";r.block&&r.nesting!==-1&&n&&e[n-1].hidden&&(s+=`
`),s+=(r.nesting===-1?"</":"<")+r.tag,s+=this.renderAttrs(r),r.nesting===0&&i.xhtmlOut&&(s+=" /");let u=!1;if(r.block&&(u=!0,r.nesting===1&&n+1<e.length)){const o=e[n+1];(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===r.tag)&&(u=!1)}return s+=u?`>
`:">",s};$i.prototype.renderInline=function(t,e,n){let i="";const r=this.rules;for(let s=0,u=t.length;s<u;s++){const o=t[s].type;typeof r[o]<"u"?i+=r[o](t,s,e,n,this):i+=this.renderToken(t,s,e)}return i};$i.prototype.renderInlineAsText=function(t,e,n){let i="";for(let r=0,s=t.length;r<s;r++)switch(t[r].type){case"text":i+=t[r].content;break;case"image":i+=this.renderInlineAsText(t[r].children,e,n);break;case"html_inline":case"html_block":i+=t[r].content;break;case"softbreak":case"hardbreak":i+=`
`;break}return i};$i.prototype.render=function(t,e,n){let i="";const r=this.rules;for(let s=0,u=t.length;s<u;s++){const o=t[s].type;o==="inline"?i+=this.renderInline(t[s].children,e,n):typeof r[o]<"u"?i+=r[o](t,s,e,n,this):i+=this.renderToken(t,s,e,n)}return i};function Ve(){this.__rules__=[],this.__cache__=null}Ve.prototype.__find__=function(t){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};Ve.prototype.__compile__=function(){const t=this,e=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(i){e.indexOf(i)<0&&e.push(i)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(i){i.enabled&&(n&&i.alt.indexOf(n)<0||t.__cache__[n].push(i.fn))})})};Ve.prototype.at=function(t,e,n){const i=this.__find__(t),r=n||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__[i].fn=e,this.__rules__[i].alt=r.alt||[],this.__cache__=null};Ve.prototype.before=function(t,e,n,i){const r=this.__find__(t),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(r,0,{name:e,enabled:!0,fn:n,alt:s.alt||[]}),this.__cache__=null};Ve.prototype.after=function(t,e,n,i){const r=this.__find__(t),s=i||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(r+1,0,{name:e,enabled:!0,fn:n,alt:s.alt||[]}),this.__cache__=null};Ve.prototype.push=function(t,e,n){const i=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:i.alt||[]}),this.__cache__=null};Ve.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(i){const r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!0,n.push(i)},this),this.__cache__=null,n};Ve.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)};Ve.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(i){const r=this.__find__(i);if(r<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[r].enabled=!1,n.push(i)},this),this.__cache__=null,n};Ve.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};function bt(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}bt.prototype.attrIndex=function(e){if(!this.attrs)return-1;const n=this.attrs;for(let i=0,r=n.length;i<r;i++)if(n[i][0]===e)return i;return-1};bt.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};bt.prototype.attrSet=function(e,n){const i=this.attrIndex(e),r=[e,n];i<0?this.attrPush(r):this.attrs[i]=r};bt.prototype.attrGet=function(e){const n=this.attrIndex(e);let i=null;return n>=0&&(i=this.attrs[n][1]),i};bt.prototype.attrJoin=function(e,n){const i=this.attrIndex(e);i<0?this.attrPush([e,n]):this.attrs[i][1]=this.attrs[i][1]+" "+n};function Tp(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}Tp.prototype.Token=bt;const yx=/\r\n?|\n/g,vx=/\0/g;function Ex(t){let e;e=t.src.replace(yx,`
`),e=e.replace(vx,"�"),t.src=e}function Cx(t){let e;t.inlineMode?(e=new t.Token("inline","",0),e.content=t.src,e.map=[0,1],e.children=[],t.tokens.push(e)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}function xx(t){const e=t.tokens;for(let n=0,i=e.length;n<i;n++){const r=e[n];r.type==="inline"&&t.md.inline.parse(r.content,t.md,t.env,r.children)}}function wx(t){return/^<a[>\s]/i.test(t)}function kx(t){return/^<\/a\s*>/i.test(t)}function Ix(t){const e=t.tokens;if(t.md.options.linkify)for(let n=0,i=e.length;n<i;n++){if(e[n].type!=="inline"||!t.md.linkify.pretest(e[n].content))continue;let r=e[n].children,s=0;for(let u=r.length-1;u>=0;u--){const o=r[u];if(o.type==="link_close"){for(u--;r[u].level!==o.level&&r[u].type!=="link_open";)u--;continue}if(o.type==="html_inline"&&(wx(o.content)&&s>0&&s--,kx(o.content)&&s++),!(s>0)&&o.type==="text"&&t.md.linkify.test(o.content)){const a=o.content;let c=t.md.linkify.match(a);const l=[];let d=o.level,f=0;c.length>0&&c[0].index===0&&u>0&&r[u-1].type==="text_special"&&(c=c.slice(1));for(let h=0;h<c.length;h++){const _=c[h].url,y=t.md.normalizeLink(_);if(!t.md.validateLink(y))continue;let k=c[h].text;c[h].schema?c[h].schema==="mailto:"&&!/^mailto:/i.test(k)?k=t.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):k=t.md.normalizeLinkText(k):k=t.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,"");const P=c[h].index;if(P>f){const M=new t.Token("text","",0);M.content=a.slice(f,P),M.level=d,l.push(M)}const C=new t.Token("link_open","a",1);C.attrs=[["href",y]],C.level=d++,C.markup="linkify",C.info="auto",l.push(C);const w=new t.Token("text","",0);w.content=k,w.level=d,l.push(w);const x=new t.Token("link_close","a",-1);x.level=--d,x.markup="linkify",x.info="auto",l.push(x),f=c[h].lastIndex}if(f<a.length){const h=new t.Token("text","",0);h.content=a.slice(f),h.level=d,l.push(h)}e[n].children=r=kp(r,u,l)}}}}const Ap=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Tx=/\((c|tm|r)\)/i,Ax=/\((c|tm|r)\)/ig,Sx={c:"©",r:"®",tm:"™"};function Dx(t,e){return Sx[e.toLowerCase()]}function Rx(t){let e=0;for(let n=t.length-1;n>=0;n--){const i=t[n];i.type==="text"&&!e&&(i.content=i.content.replace(Ax,Dx)),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function Px(t){let e=0;for(let n=t.length-1;n>=0;n--){const i=t[n];i.type==="text"&&!e&&Ap.test(i.content)&&(i.content=i.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function Nx(t){let e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)t.tokens[e].type==="inline"&&(Tx.test(t.tokens[e].content)&&Rx(t.tokens[e].children),Ap.test(t.tokens[e].content)&&Px(t.tokens[e].children))}const Fx=/['"]/,Bd=/['"]/g,$d="’";function ns(t,e,n){return t.slice(0,e)+n+t.slice(e+1)}function Ox(t,e){let n;const i=[];for(let r=0;r<t.length;r++){const s=t[r],u=t[r].level;for(n=i.length-1;n>=0&&!(i[n].level<=u);n--);if(i.length=n+1,s.type!=="text")continue;let o=s.content,a=0,c=o.length;e:for(;a<c;){Bd.lastIndex=a;const l=Bd.exec(o);if(!l)break;let d=!0,f=!0;a=l.index+1;const h=l[0]==="'";let _=32;if(l.index-1>=0)_=o.charCodeAt(l.index-1);else for(n=r-1;n>=0&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n--)if(t[n].content){_=t[n].content.charCodeAt(t[n].content.length-1);break}let y=32;if(a<c)y=o.charCodeAt(a);else for(n=r+1;n<t.length&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n++)if(t[n].content){y=t[n].content.charCodeAt(0);break}const k=Dr(_)||Sr(String.fromCharCode(_)),P=Dr(y)||Sr(String.fromCharCode(y)),C=Ar(_),w=Ar(y);if(w?d=!1:P&&(C||k||(d=!1)),C?f=!1:k&&(w||P||(f=!1)),y===34&&l[0]==='"'&&_>=48&&_<=57&&(f=d=!1),d&&f&&(d=k,f=P),!d&&!f){h&&(s.content=ns(s.content,l.index,$d));continue}if(f)for(n=i.length-1;n>=0;n--){let x=i[n];if(i[n].level<u)break;if(x.single===h&&i[n].level===u){x=i[n];let M,$;h?(M=e.md.options.quotes[2],$=e.md.options.quotes[3]):(M=e.md.options.quotes[0],$=e.md.options.quotes[1]),s.content=ns(s.content,l.index,$),t[x.token].content=ns(t[x.token].content,x.pos,M),a+=$.length-1,x.token===r&&(a+=M.length-1),o=s.content,c=o.length,i.length=n;continue e}}d?i.push({token:r,pos:l.index,single:h,level:u}):f&&h&&(s.content=ns(s.content,l.index,$d))}}}function Mx(t){if(t.md.options.typographer)for(let e=t.tokens.length-1;e>=0;e--)t.tokens[e].type!=="inline"||!Fx.test(t.tokens[e].content)||Ox(t.tokens[e].children,t)}function Lx(t){let e,n;const i=t.tokens,r=i.length;for(let s=0;s<r;s++){if(i[s].type!=="inline")continue;const u=i[s].children,o=u.length;for(e=0;e<o;e++)u[e].type==="text_special"&&(u[e].type="text");for(e=n=0;e<o;e++)u[e].type==="text"&&e+1<o&&u[e+1].type==="text"?u[e+1].content=u[e].content+u[e+1].content:(e!==n&&(u[n]=u[e]),n++);e!==n&&(u.length=n)}}const eo=[["normalize",Ex],["block",Cx],["inline",xx],["linkify",Ix],["replacements",Nx],["smartquotes",Mx],["text_join",Lx]];function bc(){this.ruler=new Ve;for(let t=0;t<eo.length;t++)this.ruler.push(eo[t][0],eo[t][1])}bc.prototype.process=function(t){const e=this.ruler.getRules("");for(let n=0,i=e.length;n<i;n++)e[n](t)};bc.prototype.State=Tp;function Rt(t,e,n,i){this.src=t,this.md=e,this.env=n,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let s=0,u=0,o=0,a=0,c=r.length,l=!1;u<c;u++){const d=r.charCodeAt(u);if(!l)if(fe(d)){o++,d===9?a+=4-a%4:a++;continue}else l=!0;(d===10||u===c-1)&&(d!==10&&u++,this.bMarks.push(s),this.eMarks.push(u),this.tShift.push(o),this.sCount.push(a),this.bsCount.push(0),l=!1,o=0,a=0,s=u+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Rt.prototype.push=function(t,e,n){const i=new bt(t,e,n);return i.block=!0,n<0&&this.level--,i.level=this.level,n>0&&this.level++,this.tokens.push(i),i};Rt.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Rt.prototype.skipEmptyLines=function(e){for(let n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Rt.prototype.skipSpaces=function(e){for(let n=this.src.length;e<n;e++){const i=this.src.charCodeAt(e);if(!fe(i))break}return e};Rt.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!fe(this.src.charCodeAt(--e)))return e+1;return e};Rt.prototype.skipChars=function(e,n){for(let i=this.src.length;e<i&&this.src.charCodeAt(e)===n;e++);return e};Rt.prototype.skipCharsBack=function(e,n,i){if(e<=i)return e;for(;e>i;)if(n!==this.src.charCodeAt(--e))return e+1;return e};Rt.prototype.getLines=function(e,n,i,r){if(e>=n)return"";const s=new Array(n-e);for(let u=0,o=e;o<n;o++,u++){let a=0;const c=this.bMarks[o];let l=c,d;for(o+1<n||r?d=this.eMarks[o]+1:d=this.eMarks[o];l<d&&a<i;){const f=this.src.charCodeAt(l);if(fe(f))f===9?a+=4-(a+this.bsCount[o])%4:a++;else if(l-c<this.tShift[o])a++;else break;l++}a>i?s[u]=new Array(a-i+1).join(" ")+this.src.slice(l,d):s[u]=this.src.slice(l,d)}return s.join("")};Rt.prototype.Token=bt;const Ux=65536;function to(t,e){const n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];return t.src.slice(n,i)}function qd(t){const e=[],n=t.length;let i=0,r=t.charCodeAt(i),s=!1,u=0,o="";for(;i<n;)r===124&&(s?(o+=t.substring(u,i-1),u=i):(e.push(o+t.substring(u,i)),o="",u=i+1)),s=r===92,i++,r=t.charCodeAt(i);return e.push(o+t.substring(u)),e}function Bx(t,e,n,i){if(e+2>n)return!1;let r=e+1;if(t.sCount[r]<t.blkIndent||t.sCount[r]-t.blkIndent>=4)return!1;let s=t.bMarks[r]+t.tShift[r];if(s>=t.eMarks[r])return!1;const u=t.src.charCodeAt(s++);if(u!==124&&u!==45&&u!==58||s>=t.eMarks[r])return!1;const o=t.src.charCodeAt(s++);if(o!==124&&o!==45&&o!==58&&!fe(o)||u===45&&fe(o))return!1;for(;s<t.eMarks[r];){const x=t.src.charCodeAt(s);if(x!==124&&x!==45&&x!==58&&!fe(x))return!1;s++}let a=to(t,e+1),c=a.split("|");const l=[];for(let x=0;x<c.length;x++){const M=c[x].trim();if(!M){if(x===0||x===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(M))return!1;M.charCodeAt(M.length-1)===58?l.push(M.charCodeAt(0)===58?"center":"right"):M.charCodeAt(0)===58?l.push("left"):l.push("")}if(a=to(t,e).trim(),a.indexOf("|")===-1||t.sCount[e]-t.blkIndent>=4)return!1;c=qd(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const d=c.length;if(d===0||d!==l.length)return!1;if(i)return!0;const f=t.parentType;t.parentType="table";const h=t.md.block.ruler.getRules("blockquote"),_=t.push("table_open","table",1),y=[e,0];_.map=y;const k=t.push("thead_open","thead",1);k.map=[e,e+1];const P=t.push("tr_open","tr",1);P.map=[e,e+1];for(let x=0;x<c.length;x++){const M=t.push("th_open","th",1);l[x]&&(M.attrs=[["style","text-align:"+l[x]]]);const $=t.push("inline","",0);$.content=c[x].trim(),$.children=[],t.push("th_close","th",-1)}t.push("tr_close","tr",-1),t.push("thead_close","thead",-1);let C,w=0;for(r=e+2;r<n&&!(t.sCount[r]<t.blkIndent);r++){let x=!1;for(let $=0,K=h.length;$<K;$++)if(h[$](t,r,n,!0)){x=!0;break}if(x||(a=to(t,r).trim(),!a)||t.sCount[r]-t.blkIndent>=4||(c=qd(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),w+=d-c.length,w>Ux))break;if(r===e+2){const $=t.push("tbody_open","tbody",1);$.map=C=[e+2,0]}const M=t.push("tr_open","tr",1);M.map=[r,r+1];for(let $=0;$<d;$++){const K=t.push("td_open","td",1);l[$]&&(K.attrs=[["style","text-align:"+l[$]]]);const me=t.push("inline","",0);me.content=c[$]?c[$].trim():"",me.children=[],t.push("td_close","td",-1)}t.push("tr_close","tr",-1)}return C&&(t.push("tbody_close","tbody",-1),C[1]=r),t.push("table_close","table",-1),y[1]=r,t.parentType=f,t.line=r,!0}function $x(t,e,n){if(t.sCount[e]-t.blkIndent<4)return!1;let i=e+1,r=i;for(;i<n;){if(t.isEmpty(i)){i++;continue}if(t.sCount[i]-t.blkIndent>=4){i++,r=i;continue}break}t.line=r;const s=t.push("code_block","code",0);return s.content=t.getLines(e,r,4+t.blkIndent,!1)+`
`,s.map=[e,t.line],!0}function qx(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||r+3>s)return!1;const u=t.src.charCodeAt(r);if(u!==126&&u!==96)return!1;let o=r;r=t.skipChars(r,u);let a=r-o;if(a<3)return!1;const c=t.src.slice(o,r),l=t.src.slice(r,s);if(u===96&&l.indexOf(String.fromCharCode(u))>=0)return!1;if(i)return!0;let d=e,f=!1;for(;d++,!(d>=n||(r=o=t.bMarks[d]+t.tShift[d],s=t.eMarks[d],r<s&&t.sCount[d]<t.blkIndent));)if(t.src.charCodeAt(r)===u&&!(t.sCount[d]-t.blkIndent>=4)&&(r=t.skipChars(r,u),!(r-o<a)&&(r=t.skipSpaces(r),!(r<s)))){f=!0;break}a=t.sCount[e],t.line=d+(f?1:0);const h=t.push("fence","code",0);return h.info=l,h.content=t.getLines(e+1,d,a,!0),h.markup=c,h.map=[e,t.line],!0}function zx(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];const u=t.lineMax;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(r)!==62)return!1;if(i)return!0;const o=[],a=[],c=[],l=[],d=t.md.block.ruler.getRules("blockquote"),f=t.parentType;t.parentType="blockquote";let h=!1,_;for(_=e;_<n;_++){const w=t.sCount[_]<t.blkIndent;if(r=t.bMarks[_]+t.tShift[_],s=t.eMarks[_],r>=s)break;if(t.src.charCodeAt(r++)===62&&!w){let M=t.sCount[_]+1,$,K;t.src.charCodeAt(r)===32?(r++,M++,K=!1,$=!0):t.src.charCodeAt(r)===9?($=!0,(t.bsCount[_]+M)%4===3?(r++,M++,K=!1):K=!0):$=!1;let me=M;for(o.push(t.bMarks[_]),t.bMarks[_]=r;r<s;){const be=t.src.charCodeAt(r);if(fe(be))be===9?me+=4-(me+t.bsCount[_]+(K?1:0))%4:me++;else break;r++}h=r>=s,a.push(t.bsCount[_]),t.bsCount[_]=t.sCount[_]+1+($?1:0),c.push(t.sCount[_]),t.sCount[_]=me-M,l.push(t.tShift[_]),t.tShift[_]=r-t.bMarks[_];continue}if(h)break;let x=!1;for(let M=0,$=d.length;M<$;M++)if(d[M](t,_,n,!0)){x=!0;break}if(x){t.lineMax=_,t.blkIndent!==0&&(o.push(t.bMarks[_]),a.push(t.bsCount[_]),l.push(t.tShift[_]),c.push(t.sCount[_]),t.sCount[_]-=t.blkIndent);break}o.push(t.bMarks[_]),a.push(t.bsCount[_]),l.push(t.tShift[_]),c.push(t.sCount[_]),t.sCount[_]=-1}const y=t.blkIndent;t.blkIndent=0;const k=t.push("blockquote_open","blockquote",1);k.markup=">";const P=[e,0];k.map=P,t.md.block.tokenize(t,e,_);const C=t.push("blockquote_close","blockquote",-1);C.markup=">",t.lineMax=u,t.parentType=f,P[1]=t.line;for(let w=0;w<l.length;w++)t.bMarks[w+e]=o[w],t.tShift[w+e]=l[w],t.sCount[w+e]=c[w],t.bsCount[w+e]=a[w];return t.blkIndent=y,!0}function Wx(t,e,n,i){const r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let s=t.bMarks[e]+t.tShift[e];const u=t.src.charCodeAt(s++);if(u!==42&&u!==45&&u!==95)return!1;let o=1;for(;s<r;){const c=t.src.charCodeAt(s++);if(c!==u&&!fe(c))return!1;c===u&&o++}if(o<3)return!1;if(i)return!0;t.line=e+1;const a=t.push("hr","hr",0);return a.map=[e,t.line],a.markup=Array(o+1).join(String.fromCharCode(u)),!0}function zd(t,e){const n=t.eMarks[e];let i=t.bMarks[e]+t.tShift[e];const r=t.src.charCodeAt(i++);if(r!==42&&r!==45&&r!==43)return-1;if(i<n){const s=t.src.charCodeAt(i);if(!fe(s))return-1}return i}function Wd(t,e){const n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];let r=n;if(r+1>=i)return-1;let s=t.src.charCodeAt(r++);if(s<48||s>57)return-1;for(;;){if(r>=i)return-1;if(s=t.src.charCodeAt(r++),s>=48&&s<=57){if(r-n>=10)return-1;continue}if(s===41||s===46)break;return-1}return r<i&&(s=t.src.charCodeAt(r),!fe(s))?-1:r}function Hx(t,e){const n=t.level+2;for(let i=e+2,r=t.tokens.length-2;i<r;i++)t.tokens[i].level===n&&t.tokens[i].type==="paragraph_open"&&(t.tokens[i+2].hidden=!0,t.tokens[i].hidden=!0,i+=2)}function jx(t,e,n,i){let r,s,u,o,a=e,c=!0;if(t.sCount[a]-t.blkIndent>=4||t.listIndent>=0&&t.sCount[a]-t.listIndent>=4&&t.sCount[a]<t.blkIndent)return!1;let l=!1;i&&t.parentType==="paragraph"&&t.sCount[a]>=t.blkIndent&&(l=!0);let d,f,h;if((h=Wd(t,a))>=0){if(d=!0,u=t.bMarks[a]+t.tShift[a],f=Number(t.src.slice(u,h-1)),l&&f!==1)return!1}else if((h=zd(t,a))>=0)d=!1;else return!1;if(l&&t.skipSpaces(h)>=t.eMarks[a])return!1;if(i)return!0;const _=t.src.charCodeAt(h-1),y=t.tokens.length;d?(o=t.push("ordered_list_open","ol",1),f!==1&&(o.attrs=[["start",f]])):o=t.push("bullet_list_open","ul",1);const k=[a,0];o.map=k,o.markup=String.fromCharCode(_);let P=!1;const C=t.md.block.ruler.getRules("list"),w=t.parentType;for(t.parentType="list";a<n;){s=h,r=t.eMarks[a];const x=t.sCount[a]+h-(t.bMarks[a]+t.tShift[a]);let M=x;for(;s<r;){const Ke=t.src.charCodeAt(s);if(Ke===9)M+=4-(M+t.bsCount[a])%4;else if(Ke===32)M++;else break;s++}const $=s;let K;$>=r?K=1:K=M-x,K>4&&(K=1);const me=x+K;o=t.push("list_item_open","li",1),o.markup=String.fromCharCode(_);const be=[a,0];o.map=be,d&&(o.info=t.src.slice(u,h-1));const xe=t.tight,Ze=t.tShift[a],Pt=t.sCount[a],Xe=t.listIndent;if(t.listIndent=t.blkIndent,t.blkIndent=me,t.tight=!0,t.tShift[a]=$-t.bMarks[a],t.sCount[a]=M,$>=r&&t.isEmpty(a+1)?t.line=Math.min(t.line+2,n):t.md.block.tokenize(t,a,n,!0),(!t.tight||P)&&(c=!1),P=t.line-a>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=Xe,t.tShift[a]=Ze,t.sCount[a]=Pt,t.tight=xe,o=t.push("list_item_close","li",-1),o.markup=String.fromCharCode(_),a=t.line,be[1]=a,a>=n||t.sCount[a]<t.blkIndent||t.sCount[a]-t.blkIndent>=4)break;let Jt=!1;for(let Ke=0,ye=C.length;Ke<ye;Ke++)if(C[Ke](t,a,n,!0)){Jt=!0;break}if(Jt)break;if(d){if(h=Wd(t,a),h<0)break;u=t.bMarks[a]+t.tShift[a]}else if(h=zd(t,a),h<0)break;if(_!==t.src.charCodeAt(h-1))break}return d?o=t.push("ordered_list_close","ol",-1):o=t.push("bullet_list_close","ul",-1),o.markup=String.fromCharCode(_),k[1]=a,t.line=a,t.parentType=w,c&&Hx(t,y),!0}function Vx(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e],u=e+1;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(r)!==91)return!1;function o(C){const w=t.lineMax;if(C>=w||t.isEmpty(C))return null;let x=!1;if(t.sCount[C]-t.blkIndent>3&&(x=!0),t.sCount[C]<0&&(x=!0),!x){const K=t.md.block.ruler.getRules("reference"),me=t.parentType;t.parentType="reference";let be=!1;for(let xe=0,Ze=K.length;xe<Ze;xe++)if(K[xe](t,C,w,!0)){be=!0;break}if(t.parentType=me,be)return null}const M=t.bMarks[C]+t.tShift[C],$=t.eMarks[C];return t.src.slice(M,$+1)}let a=t.src.slice(r,s+1);s=a.length;let c=-1;for(r=1;r<s;r++){const C=a.charCodeAt(r);if(C===91)return!1;if(C===93){c=r;break}else if(C===10){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}else if(C===92&&(r++,r<s&&a.charCodeAt(r)===10)){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(r=c+2;r<s;r++){const C=a.charCodeAt(r);if(C===10){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}else if(!fe(C))break}const l=t.md.helpers.parseLinkDestination(a,r,s);if(!l.ok)return!1;const d=t.md.normalizeLink(l.str);if(!t.md.validateLink(d))return!1;r=l.pos;const f=r,h=u,_=r;for(;r<s;r++){const C=a.charCodeAt(r);if(C===10){const w=o(u);w!==null&&(a+=w,s=a.length,u++)}else if(!fe(C))break}let y=t.md.helpers.parseLinkTitle(a,r,s);for(;y.can_continue;){const C=o(u);if(C===null)break;a+=C,r=s,s=a.length,u++,y=t.md.helpers.parseLinkTitle(a,r,s,y)}let k;for(r<s&&_!==r&&y.ok?(k=y.str,r=y.pos):(k="",r=f,u=h);r<s;){const C=a.charCodeAt(r);if(!fe(C))break;r++}if(r<s&&a.charCodeAt(r)!==10&&k)for(k="",r=f,u=h;r<s;){const C=a.charCodeAt(r);if(!fe(C))break;r++}if(r<s&&a.charCodeAt(r)!==10)return!1;const P=Tu(a.slice(1,c));return P?(i||(typeof t.env.references>"u"&&(t.env.references={}),typeof t.env.references[P]>"u"&&(t.env.references[P]={title:k,href:d}),t.line=u),!0):!1}const Gx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Kx="[a-zA-Z_:][a-zA-Z0-9:._-]*",Yx="[^\"'=<>`\\x00-\\x20]+",Qx="'[^']*'",Jx='"[^"]*"',Zx="(?:"+Yx+"|"+Qx+"|"+Jx+")",Xx="(?:\\s+"+Kx+"(?:\\s*=\\s*"+Zx+")?)",Sp="<[A-Za-z][A-Za-z0-9\\-]*"+Xx+"*\\s*\\/?>",Dp="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",ew="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",tw="<[?][\\s\\S]*?[?]>",nw="<![A-Za-z][^>]*>",iw="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",rw=new RegExp("^(?:"+Sp+"|"+Dp+"|"+ew+"|"+tw+"|"+nw+"|"+iw+")"),sw=new RegExp("^(?:"+Sp+"|"+Dp+")"),ni=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Gx.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(sw.source+"\\s*$"),/^$/,!1]];function uw(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||!t.md.options.html||t.src.charCodeAt(r)!==60)return!1;let u=t.src.slice(r,s),o=0;for(;o<ni.length&&!ni[o][0].test(u);o++);if(o===ni.length)return!1;if(i)return ni[o][2];let a=e+1;if(!ni[o][1].test(u)){for(;a<n&&!(t.sCount[a]<t.blkIndent);a++)if(r=t.bMarks[a]+t.tShift[a],s=t.eMarks[a],u=t.src.slice(r,s),ni[o][1].test(u)){u.length!==0&&a++;break}}t.line=a;const c=t.push("html_block","",0);return c.map=[e,a],c.content=t.getLines(e,a,t.blkIndent,!0),!0}function ow(t,e,n,i){let r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let u=t.src.charCodeAt(r);if(u!==35||r>=s)return!1;let o=1;for(u=t.src.charCodeAt(++r);u===35&&r<s&&o<=6;)o++,u=t.src.charCodeAt(++r);if(o>6||r<s&&!fe(u))return!1;if(i)return!0;s=t.skipSpacesBack(s,r);const a=t.skipCharsBack(s,35,r);a>r&&fe(t.src.charCodeAt(a-1))&&(s=a),t.line=e+1;const c=t.push("heading_open","h"+String(o),1);c.markup="########".slice(0,o),c.map=[e,t.line];const l=t.push("inline","",0);l.content=t.src.slice(r,s).trim(),l.map=[e,t.line],l.children=[];const d=t.push("heading_close","h"+String(o),-1);return d.markup="########".slice(0,o),!0}function aw(t,e,n){const i=t.md.block.ruler.getRules("paragraph");if(t.sCount[e]-t.blkIndent>=4)return!1;const r=t.parentType;t.parentType="paragraph";let s=0,u,o=e+1;for(;o<n&&!t.isEmpty(o);o++){if(t.sCount[o]-t.blkIndent>3)continue;if(t.sCount[o]>=t.blkIndent){let h=t.bMarks[o]+t.tShift[o];const _=t.eMarks[o];if(h<_&&(u=t.src.charCodeAt(h),(u===45||u===61)&&(h=t.skipChars(h,u),h=t.skipSpaces(h),h>=_))){s=u===61?1:2;break}}if(t.sCount[o]<0)continue;let f=!1;for(let h=0,_=i.length;h<_;h++)if(i[h](t,o,n,!0)){f=!0;break}if(f)break}if(!s)return!1;const a=t.getLines(e,o,t.blkIndent,!1).trim();t.line=o+1;const c=t.push("heading_open","h"+String(s),1);c.markup=String.fromCharCode(u),c.map=[e,t.line];const l=t.push("inline","",0);l.content=a,l.map=[e,t.line-1],l.children=[];const d=t.push("heading_close","h"+String(s),-1);return d.markup=String.fromCharCode(u),t.parentType=r,!0}function cw(t,e,n){const i=t.md.block.ruler.getRules("paragraph"),r=t.parentType;let s=e+1;for(t.parentType="paragraph";s<n&&!t.isEmpty(s);s++){if(t.sCount[s]-t.blkIndent>3||t.sCount[s]<0)continue;let c=!1;for(let l=0,d=i.length;l<d;l++)if(i[l](t,s,n,!0)){c=!0;break}if(c)break}const u=t.getLines(e,s,t.blkIndent,!1).trim();t.line=s;const o=t.push("paragraph_open","p",1);o.map=[e,t.line];const a=t.push("inline","",0);return a.content=u,a.map=[e,t.line],a.children=[],t.push("paragraph_close","p",-1),t.parentType=r,!0}const is=[["table",Bx,["paragraph","reference"]],["code",$x],["fence",qx,["paragraph","reference","blockquote","list"]],["blockquote",zx,["paragraph","reference","blockquote","list"]],["hr",Wx,["paragraph","reference","blockquote","list"]],["list",jx,["paragraph","reference","blockquote"]],["reference",Vx],["html_block",uw,["paragraph","reference","blockquote"]],["heading",ow,["paragraph","reference","blockquote"]],["lheading",aw],["paragraph",cw]];function Au(){this.ruler=new Ve;for(let t=0;t<is.length;t++)this.ruler.push(is[t][0],is[t][1],{alt:(is[t][2]||[]).slice()})}Au.prototype.tokenize=function(t,e,n){const i=this.ruler.getRules(""),r=i.length,s=t.md.options.maxNesting;let u=e,o=!1;for(;u<n&&(t.line=u=t.skipEmptyLines(u),!(u>=n||t.sCount[u]<t.blkIndent));){if(t.level>=s){t.line=n;break}const a=t.line;let c=!1;for(let l=0;l<r;l++)if(c=i[l](t,u,n,!1),c){if(a>=t.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");t.tight=!o,t.isEmpty(t.line-1)&&(o=!0),u=t.line,u<n&&t.isEmpty(u)&&(o=!0,u++,t.line=u)}};Au.prototype.parse=function(t,e,n,i){if(!t)return;const r=new this.State(t,e,n,i);this.tokenize(r,r.line,r.lineMax)};Au.prototype.State=Rt;function Hr(t,e,n,i){this.src=t,this.env=n,this.md=e,this.tokens=i,this.tokens_meta=Array(i.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Hr.prototype.pushPending=function(){const t=new bt("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};Hr.prototype.push=function(t,e,n){this.pending&&this.pushPending();const i=new bt(t,e,n);let r=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),i.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(i),this.tokens_meta.push(r),i};Hr.prototype.scanDelims=function(t,e){const n=this.posMax,i=this.src.charCodeAt(t),r=t>0?this.src.charCodeAt(t-1):32;let s=t;for(;s<n&&this.src.charCodeAt(s)===i;)s++;const u=s-t,o=s<n?this.src.charCodeAt(s):32,a=Dr(r)||Sr(String.fromCharCode(r)),c=Dr(o)||Sr(String.fromCharCode(o)),l=Ar(r),d=Ar(o),f=!d&&(!c||l||a),h=!l&&(!a||d||c);return{can_open:f&&(e||!h||a),can_close:h&&(e||!f||c),length:u}};Hr.prototype.Token=bt;function lw(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function dw(t,e){let n=t.pos;for(;n<t.posMax&&!lw(t.src.charCodeAt(n));)n++;return n===t.pos?!1:(e||(t.pending+=t.src.slice(t.pos,n)),t.pos=n,!0)}const fw=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function hw(t,e){if(!t.md.options.linkify||t.linkLevel>0)return!1;const n=t.pos,i=t.posMax;if(n+3>i||t.src.charCodeAt(n)!==58||t.src.charCodeAt(n+1)!==47||t.src.charCodeAt(n+2)!==47)return!1;const r=t.pending.match(fw);if(!r)return!1;const s=r[1],u=t.md.linkify.matchAtStart(t.src.slice(n-s.length));if(!u)return!1;let o=u.url;if(o.length<=s.length)return!1;o=o.replace(/\*+$/,"");const a=t.md.normalizeLink(o);if(!t.md.validateLink(a))return!1;if(!e){t.pending=t.pending.slice(0,-s.length);const c=t.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const l=t.push("text","",0);l.content=t.md.normalizeLinkText(o);const d=t.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return t.pos+=o.length-s.length,!0}function pw(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==10)return!1;const i=t.pending.length-1,r=t.posMax;if(!e)if(i>=0&&t.pending.charCodeAt(i)===32)if(i>=1&&t.pending.charCodeAt(i-1)===32){let s=i-1;for(;s>=1&&t.pending.charCodeAt(s-1)===32;)s--;t.pending=t.pending.slice(0,s),t.push("hardbreak","br",0)}else t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0);else t.push("softbreak","br",0);for(n++;n<r&&fe(t.src.charCodeAt(n));)n++;return t.pos=n,!0}const yc=[];for(let t=0;t<256;t++)yc.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){yc[t.charCodeAt(0)]=1});function _w(t,e){let n=t.pos;const i=t.posMax;if(t.src.charCodeAt(n)!==92||(n++,n>=i))return!1;let r=t.src.charCodeAt(n);if(r===10){for(e||t.push("hardbreak","br",0),n++;n<i&&(r=t.src.charCodeAt(n),!!fe(r));)n++;return t.pos=n,!0}let s=t.src[n];if(r>=55296&&r<=56319&&n+1<i){const o=t.src.charCodeAt(n+1);o>=56320&&o<=57343&&(s+=t.src[n+1],n++)}const u="\\"+s;if(!e){const o=t.push("text_special","",0);r<256&&yc[r]!==0?o.content=s:o.content=u,o.markup=u,o.info="escape"}return t.pos=n+1,!0}function mw(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==96)return!1;const r=n;n++;const s=t.posMax;for(;n<s&&t.src.charCodeAt(n)===96;)n++;const u=t.src.slice(r,n),o=u.length;if(t.backticksScanned&&(t.backticks[o]||0)<=r)return e||(t.pending+=u),t.pos+=o,!0;let a=n,c;for(;(c=t.src.indexOf("`",a))!==-1;){for(a=c+1;a<s&&t.src.charCodeAt(a)===96;)a++;const l=a-c;if(l===o){if(!e){const d=t.push("code_inline","code",0);d.markup=u,d.content=t.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return t.pos=a,!0}t.backticks[l]=c}return t.backticksScanned=!0,e||(t.pending+=u),t.pos+=o,!0}function gw(t,e){const n=t.pos,i=t.src.charCodeAt(n);if(e||i!==126)return!1;const r=t.scanDelims(t.pos,!0);let s=r.length;const u=String.fromCharCode(i);if(s<2)return!1;let o;s%2&&(o=t.push("text","",0),o.content=u,s--);for(let a=0;a<s;a+=2)o=t.push("text","",0),o.content=u+u,t.delimiters.push({marker:i,length:0,token:t.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return t.pos+=r.length,!0}function Hd(t,e){let n;const i=[],r=e.length;for(let s=0;s<r;s++){const u=e[s];if(u.marker!==126||u.end===-1)continue;const o=e[u.end];n=t.tokens[u.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=t.tokens[o.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",t.tokens[o.token-1].type==="text"&&t.tokens[o.token-1].content==="~"&&i.push(o.token-1)}for(;i.length;){const s=i.pop();let u=s+1;for(;u<t.tokens.length&&t.tokens[u].type==="s_close";)u++;u--,s!==u&&(n=t.tokens[u],t.tokens[u]=t.tokens[s],t.tokens[s]=n)}}function bw(t){const e=t.tokens_meta,n=t.tokens_meta.length;Hd(t,t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&Hd(t,e[i].delimiters)}const Rp={tokenize:gw,postProcess:bw};function yw(t,e){const n=t.pos,i=t.src.charCodeAt(n);if(e||i!==95&&i!==42)return!1;const r=t.scanDelims(t.pos,i===42);for(let s=0;s<r.length;s++){const u=t.push("text","",0);u.content=String.fromCharCode(i),t.delimiters.push({marker:i,length:r.length,token:t.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return t.pos+=r.length,!0}function jd(t,e){const n=e.length;for(let i=n-1;i>=0;i--){const r=e[i];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const s=e[r.end],u=i>0&&e[i-1].end===r.end+1&&e[i-1].marker===r.marker&&e[i-1].token===r.token-1&&e[r.end+1].token===s.token+1,o=String.fromCharCode(r.marker),a=t.tokens[r.token];a.type=u?"strong_open":"em_open",a.tag=u?"strong":"em",a.nesting=1,a.markup=u?o+o:o,a.content="";const c=t.tokens[s.token];c.type=u?"strong_close":"em_close",c.tag=u?"strong":"em",c.nesting=-1,c.markup=u?o+o:o,c.content="",u&&(t.tokens[e[i-1].token].content="",t.tokens[e[r.end+1].token].content="",i--)}}function vw(t){const e=t.tokens_meta,n=t.tokens_meta.length;jd(t,t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&jd(t,e[i].delimiters)}const Pp={tokenize:yw,postProcess:vw};function Ew(t,e){let n,i,r,s,u="",o="",a=t.pos,c=!0;if(t.src.charCodeAt(t.pos)!==91)return!1;const l=t.pos,d=t.posMax,f=t.pos+1,h=t.md.helpers.parseLinkLabel(t,t.pos,!0);if(h<0)return!1;let _=h+1;if(_<d&&t.src.charCodeAt(_)===40){for(c=!1,_++;_<d&&(n=t.src.charCodeAt(_),!(!fe(n)&&n!==10));_++);if(_>=d)return!1;if(a=_,r=t.md.helpers.parseLinkDestination(t.src,_,t.posMax),r.ok){for(u=t.md.normalizeLink(r.str),t.md.validateLink(u)?_=r.pos:u="",a=_;_<d&&(n=t.src.charCodeAt(_),!(!fe(n)&&n!==10));_++);if(r=t.md.helpers.parseLinkTitle(t.src,_,t.posMax),_<d&&a!==_&&r.ok)for(o=r.str,_=r.pos;_<d&&(n=t.src.charCodeAt(_),!(!fe(n)&&n!==10));_++);}(_>=d||t.src.charCodeAt(_)!==41)&&(c=!0),_++}if(c){if(typeof t.env.references>"u")return!1;if(_<d&&t.src.charCodeAt(_)===91?(a=_+1,_=t.md.helpers.parseLinkLabel(t,_),_>=0?i=t.src.slice(a,_++):_=h+1):_=h+1,i||(i=t.src.slice(f,h)),s=t.env.references[Tu(i)],!s)return t.pos=l,!1;u=s.href,o=s.title}if(!e){t.pos=f,t.posMax=h;const y=t.push("link_open","a",1),k=[["href",u]];y.attrs=k,o&&k.push(["title",o]),t.linkLevel++,t.md.inline.tokenize(t),t.linkLevel--,t.push("link_close","a",-1)}return t.pos=_,t.posMax=d,!0}function Cw(t,e){let n,i,r,s,u,o,a,c,l="";const d=t.pos,f=t.posMax;if(t.src.charCodeAt(t.pos)!==33||t.src.charCodeAt(t.pos+1)!==91)return!1;const h=t.pos+2,_=t.md.helpers.parseLinkLabel(t,t.pos+1,!1);if(_<0)return!1;if(s=_+1,s<f&&t.src.charCodeAt(s)===40){for(s++;s<f&&(n=t.src.charCodeAt(s),!(!fe(n)&&n!==10));s++);if(s>=f)return!1;for(c=s,o=t.md.helpers.parseLinkDestination(t.src,s,t.posMax),o.ok&&(l=t.md.normalizeLink(o.str),t.md.validateLink(l)?s=o.pos:l=""),c=s;s<f&&(n=t.src.charCodeAt(s),!(!fe(n)&&n!==10));s++);if(o=t.md.helpers.parseLinkTitle(t.src,s,t.posMax),s<f&&c!==s&&o.ok)for(a=o.str,s=o.pos;s<f&&(n=t.src.charCodeAt(s),!(!fe(n)&&n!==10));s++);else a="";if(s>=f||t.src.charCodeAt(s)!==41)return t.pos=d,!1;s++}else{if(typeof t.env.references>"u")return!1;if(s<f&&t.src.charCodeAt(s)===91?(c=s+1,s=t.md.helpers.parseLinkLabel(t,s),s>=0?r=t.src.slice(c,s++):s=_+1):s=_+1,r||(r=t.src.slice(h,_)),u=t.env.references[Tu(r)],!u)return t.pos=d,!1;l=u.href,a=u.title}if(!e){i=t.src.slice(h,_);const y=[];t.md.inline.parse(i,t.md,t.env,y);const k=t.push("image","img",0),P=[["src",l],["alt",""]];k.attrs=P,k.children=y,k.content=i,a&&P.push(["title",a])}return t.pos=s,t.posMax=f,!0}const xw=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,ww=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function kw(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==60)return!1;const i=t.pos,r=t.posMax;for(;;){if(++n>=r)return!1;const u=t.src.charCodeAt(n);if(u===60)return!1;if(u===62)break}const s=t.src.slice(i+1,n);if(ww.test(s)){const u=t.md.normalizeLink(s);if(!t.md.validateLink(u))return!1;if(!e){const o=t.push("link_open","a",1);o.attrs=[["href",u]],o.markup="autolink",o.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(s);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=s.length+2,!0}if(xw.test(s)){const u=t.md.normalizeLink("mailto:"+s);if(!t.md.validateLink(u))return!1;if(!e){const o=t.push("link_open","a",1);o.attrs=[["href",u]],o.markup="autolink",o.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(s);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=s.length+2,!0}return!1}function Iw(t){return/^<a[>\s]/i.test(t)}function Tw(t){return/^<\/a\s*>/i.test(t)}function Aw(t){const e=t|32;return e>=97&&e<=122}function Sw(t,e){if(!t.md.options.html)return!1;const n=t.posMax,i=t.pos;if(t.src.charCodeAt(i)!==60||i+2>=n)return!1;const r=t.src.charCodeAt(i+1);if(r!==33&&r!==63&&r!==47&&!Aw(r))return!1;const s=t.src.slice(i).match(rw);if(!s)return!1;if(!e){const u=t.push("html_inline","",0);u.content=s[0],Iw(u.content)&&t.linkLevel++,Tw(u.content)&&t.linkLevel--}return t.pos+=s[0].length,!0}const Dw=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Rw=/^&([a-z][a-z0-9]{1,31});/i;function Pw(t,e){const n=t.pos,i=t.posMax;if(t.src.charCodeAt(n)!==38||n+1>=i)return!1;if(t.src.charCodeAt(n+1)===35){const s=t.src.slice(n).match(Dw);if(s){if(!e){const u=s[1][0].toLowerCase()==="x"?parseInt(s[1].slice(1),16):parseInt(s[1],10),o=t.push("text_special","",0);o.content=gc(u)?Ks(u):Ks(65533),o.markup=s[0],o.info="entity"}return t.pos+=s[0].length,!0}}else{const s=t.src.slice(n).match(Rw);if(s){const u=wp(s[0]);if(u!==s[0]){if(!e){const o=t.push("text_special","",0);o.content=u,o.markup=s[0],o.info="entity"}return t.pos+=s[0].length,!0}}}return!1}function Vd(t){const e={},n=t.length;if(!n)return;let i=0,r=-2;const s=[];for(let u=0;u<n;u++){const o=t[u];if(s.push(0),(t[i].marker!==o.marker||r!==o.token-1)&&(i=u),r=o.token,o.length=o.length||0,!o.close)continue;e.hasOwnProperty(o.marker)||(e[o.marker]=[-1,-1,-1,-1,-1,-1]);const a=e[o.marker][(o.open?3:0)+o.length%3];let c=i-s[i]-1,l=c;for(;c>a;c-=s[c]+1){const d=t[c];if(d.marker===o.marker&&d.open&&d.end<0){let f=!1;if((d.close||o.open)&&(d.length+o.length)%3===0&&(d.length%3!==0||o.length%3!==0)&&(f=!0),!f){const h=c>0&&!t[c-1].open?s[c-1]+1:0;s[u]=u-c+h,s[c]=h,o.open=!1,d.end=u,d.close=!1,l=-1,r=-2;break}}}l!==-1&&(e[o.marker][(o.open?3:0)+(o.length||0)%3]=l)}}function Nw(t){const e=t.tokens_meta,n=t.tokens_meta.length;Vd(t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&Vd(e[i].delimiters)}function Fw(t){let e,n,i=0;const r=t.tokens,s=t.tokens.length;for(e=n=0;e<s;e++)r[e].nesting<0&&i--,r[e].level=i,r[e].nesting>0&&i++,r[e].type==="text"&&e+1<s&&r[e+1].type==="text"?r[e+1].content=r[e].content+r[e+1].content:(e!==n&&(r[n]=r[e]),n++);e!==n&&(r.length=n)}const no=[["text",dw],["linkify",hw],["newline",pw],["escape",_w],["backticks",mw],["strikethrough",Rp.tokenize],["emphasis",Pp.tokenize],["link",Ew],["image",Cw],["autolink",kw],["html_inline",Sw],["entity",Pw]],io=[["balance_pairs",Nw],["strikethrough",Rp.postProcess],["emphasis",Pp.postProcess],["fragments_join",Fw]];function jr(){this.ruler=new Ve;for(let t=0;t<no.length;t++)this.ruler.push(no[t][0],no[t][1]);this.ruler2=new Ve;for(let t=0;t<io.length;t++)this.ruler2.push(io[t][0],io[t][1])}jr.prototype.skipToken=function(t){const e=t.pos,n=this.ruler.getRules(""),i=n.length,r=t.md.options.maxNesting,s=t.cache;if(typeof s[e]<"u"){t.pos=s[e];return}let u=!1;if(t.level<r){for(let o=0;o<i;o++)if(t.level++,u=n[o](t,!0),t.level--,u){if(e>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;u||t.pos++,s[e]=t.pos};jr.prototype.tokenize=function(t){const e=this.ruler.getRules(""),n=e.length,i=t.posMax,r=t.md.options.maxNesting;for(;t.pos<i;){const s=t.pos;let u=!1;if(t.level<r){for(let o=0;o<n;o++)if(u=e[o](t,!1),u){if(s>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}if(u){if(t.pos>=i)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};jr.prototype.parse=function(t,e,n,i){const r=new this.State(t,e,n,i);this.tokenize(r);const s=this.ruler2.getRules(""),u=s.length;for(let o=0;o<u;o++)s[o](r)};jr.prototype.State=Hr;function Ow(t){const e={};t=t||{},e.src_Any=yp.source,e.src_Cc=vp.source,e.src_Z=Cp.source,e.src_P=_c.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const n="[><｜]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Vo(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(i){t[i]=n[i]})}),t}function Su(t){return Object.prototype.toString.call(t)}function Mw(t){return Su(t)==="[object String]"}function Lw(t){return Su(t)==="[object Object]"}function Uw(t){return Su(t)==="[object RegExp]"}function Gd(t){return Su(t)==="[object Function]"}function Bw(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Np={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function $w(t){return Object.keys(t||{}).reduce(function(e,n){return e||Np.hasOwnProperty(n)},!1)}const qw={"http:":{validate:function(t,e,n){const i=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(i)?i.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){const i=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(i)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:i.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){const i=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(i)?i.match(n.re.mailto)[0].length:0}}},zw="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Ww="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Hw(t){t.__index__=-1,t.__text_cache__=""}function jw(t){return function(e,n){const i=e.slice(n);return t.test(i)?i.match(t)[0].length:0}}function Kd(){return function(t,e){e.normalize(t)}}function Ys(t){const e=t.re=Ow(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(zw),n.push(e.src_xn),e.src_tlds=n.join("|");function i(o){return o.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(i(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(i(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(i(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(i(e.tpl_host_fuzzy_test),"i");const r=[];t.__compiled__={};function s(o,a){throw new Error('(LinkifyIt) Invalid schema "'+o+'": '+a)}Object.keys(t.__schemas__).forEach(function(o){const a=t.__schemas__[o];if(a===null)return;const c={validate:null,link:null};if(t.__compiled__[o]=c,Lw(a)){Uw(a.validate)?c.validate=jw(a.validate):Gd(a.validate)?c.validate=a.validate:s(o,a),Gd(a.normalize)?c.normalize=a.normalize:a.normalize?s(o,a):c.normalize=Kd();return}if(Mw(a)){r.push(o);return}s(o,a)}),r.forEach(function(o){t.__compiled__[t.__schemas__[o]]&&(t.__compiled__[o].validate=t.__compiled__[t.__schemas__[o]].validate,t.__compiled__[o].normalize=t.__compiled__[t.__schemas__[o]].normalize)}),t.__compiled__[""]={validate:null,normalize:Kd()};const u=Object.keys(t.__compiled__).filter(function(o){return o.length>0&&t.__compiled__[o]}).map(Bw).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+u+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),Hw(t)}function Vw(t,e){const n=t.__index__,i=t.__last_index__,r=t.__text_cache__.slice(n,i);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=i+e,this.raw=r,this.text=r,this.url=r}function Go(t,e){const n=new Vw(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Je(t,e){if(!(this instanceof Je))return new Je(t,e);e||$w(t)&&(e=t,t={}),this.__opts__=Vo({},Np,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Vo({},qw,t),this.__compiled__={},this.__tlds__=Ww,this.__tlds_replaced__=!1,this.re={},Ys(this)}Je.prototype.add=function(e,n){return this.__schemas__[e]=n,Ys(this),this};Je.prototype.set=function(e){return this.__opts__=Vo(this.__opts__,e),this};Je.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let n,i,r,s,u,o,a,c,l;if(this.re.schema_test.test(e)){for(a=this.re.schema_search,a.lastIndex=0;(n=a.exec(e))!==null;)if(s=this.testSchemaAt(e,n[2],a.lastIndex),s){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+s;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(u=i.index+i[1].length,(this.__index__<0||u<this.__index__)&&(this.__schema__="",this.__index__=u,this.__last_index__=i.index+i[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(u=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||u<this.__index__||u===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=u,this.__last_index__=o))),this.__index__>=0};Je.prototype.pretest=function(e){return this.re.pretest.test(e)};Je.prototype.testSchemaAt=function(e,n,i){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,i,this):0};Je.prototype.match=function(e){const n=[];let i=0;this.__index__>=0&&this.__text_cache__===e&&(n.push(Go(this,i)),i=this.__last_index__);let r=i?e.slice(i):e;for(;this.test(r);)n.push(Go(this,i)),r=r.slice(this.__last_index__),i+=this.__last_index__;return n.length?n:null};Je.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const n=this.re.schema_at_start.exec(e);if(!n)return null;const i=this.testSchemaAt(e,n[2],n[0].length);return i?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i,Go(this,0)):null};Je.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(i,r,s){return i!==s[r-1]}).reverse(),Ys(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Ys(this),this)};Je.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Je.prototype.onCompile=function(){};const mi=2147483647,kt=36,vc=1,Rr=26,Gw=38,Kw=700,Fp=72,Op=128,Mp="-",Yw=/^xn--/,Qw=/[^\0-\x7F]/,Jw=/[\x2E\u3002\uFF0E\uFF61]/g,Zw={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ro=kt-vc,It=Math.floor,so=String.fromCharCode;function sn(t){throw new RangeError(Zw[t])}function Xw(t,e){const n=[];let i=t.length;for(;i--;)n[i]=e(t[i]);return n}function Lp(t,e){const n=t.split("@");let i="";n.length>1&&(i=n[0]+"@",t=n[1]),t=t.replace(Jw,".");const r=t.split("."),s=Xw(r,e).join(".");return i+s}function Up(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}const ek=t=>String.fromCodePoint(...t),tk=function(t){return t>=48&&t<58?26+(t-48):t>=65&&t<91?t-65:t>=97&&t<123?t-97:kt},Yd=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},Bp=function(t,e,n){let i=0;for(t=n?It(t/Kw):t>>1,t+=It(t/e);t>ro*Rr>>1;i+=kt)t=It(t/ro);return It(i+(ro+1)*t/(t+Gw))},$p=function(t){const e=[],n=t.length;let i=0,r=Op,s=Fp,u=t.lastIndexOf(Mp);u<0&&(u=0);for(let o=0;o<u;++o)t.charCodeAt(o)>=128&&sn("not-basic"),e.push(t.charCodeAt(o));for(let o=u>0?u+1:0;o<n;){const a=i;for(let l=1,d=kt;;d+=kt){o>=n&&sn("invalid-input");const f=tk(t.charCodeAt(o++));f>=kt&&sn("invalid-input"),f>It((mi-i)/l)&&sn("overflow"),i+=f*l;const h=d<=s?vc:d>=s+Rr?Rr:d-s;if(f<h)break;const _=kt-h;l>It(mi/_)&&sn("overflow"),l*=_}const c=e.length+1;s=Bp(i-a,c,a==0),It(i/c)>mi-r&&sn("overflow"),r+=It(i/c),i%=c,e.splice(i++,0,r)}return String.fromCodePoint(...e)},qp=function(t){const e=[];t=Up(t);const n=t.length;let i=Op,r=0,s=Fp;for(const a of t)a<128&&e.push(so(a));const u=e.length;let o=u;for(u&&e.push(Mp);o<n;){let a=mi;for(const l of t)l>=i&&l<a&&(a=l);const c=o+1;a-i>It((mi-r)/c)&&sn("overflow"),r+=(a-i)*c,i=a;for(const l of t)if(l<i&&++r>mi&&sn("overflow"),l===i){let d=r;for(let f=kt;;f+=kt){const h=f<=s?vc:f>=s+Rr?Rr:f-s;if(d<h)break;const _=d-h,y=kt-h;e.push(so(Yd(h+_%y,0))),d=It(_/y)}e.push(so(Yd(d,0))),s=Bp(r,c,o===u),r=0,++o}++r,++i}return e.join("")},nk=function(t){return Lp(t,function(e){return Yw.test(e)?$p(e.slice(4).toLowerCase()):e})},ik=function(t){return Lp(t,function(e){return Qw.test(e)?"xn--"+qp(e):e})},zp={version:"2.3.1",ucs2:{decode:Up,encode:ek},decode:$p,encode:qp,toASCII:ik,toUnicode:nk},rk={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},sk={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},uk={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},ok={default:rk,zero:sk,commonmark:uk},ak=/^(vbscript|javascript|file|data):/,ck=/^data:image\/(gif|png|jpeg|webp);/;function lk(t){const e=t.trim().toLowerCase();return ak.test(e)?ck.test(e):!0}const Wp=["http:","https:","mailto:"];function dk(t){const e=pc(t,!0);if(e.hostname&&(!e.protocol||Wp.indexOf(e.protocol)>=0))try{e.hostname=zp.toASCII(e.hostname)}catch{}return Wr(hc(e))}function fk(t){const e=pc(t,!0);if(e.hostname&&(!e.protocol||Wp.indexOf(e.protocol)>=0))try{e.hostname=zp.toUnicode(e.hostname)}catch{}return Ai(hc(e),Ai.defaultChars+"%")}function it(t,e){if(!(this instanceof it))return new it(t,e);e||mc(t)||(e=t||{},t="default"),this.inline=new jr,this.block=new Au,this.core=new bc,this.renderer=new $i,this.linkify=new Je,this.validateLink=lk,this.normalizeLink=dk,this.normalizeLinkText=fk,this.utils=px,this.helpers=Iu({},bx),this.options={},this.configure(t),e&&this.set(e)}it.prototype.set=function(t){return Iu(this.options,t),this};it.prototype.configure=function(t){const e=this;if(mc(t)){const n=t;if(t=ok[n],!t)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(n){t.components[n].rules&&e[n].ruler.enableOnly(t.components[n].rules),t.components[n].rules2&&e[n].ruler2.enableOnly(t.components[n].rules2)}),this};it.prototype.enable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));const i=t.filter(function(r){return n.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+i);return this};it.prototype.disable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));const i=t.filter(function(r){return n.indexOf(r)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+i);return this};it.prototype.use=function(t){const e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};it.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");const n=new this.core.State(t,this,e);return this.core.process(n),n.tokens};it.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};it.prototype.parseInline=function(t,e){const n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};it.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};const hk={name:"MoreButton",props:{fileName:{type:String,required:!0,default:"описание.txt"},imageSrc:{type:String,default:""}},data(){return{showDetails:!1,description:"",initialText:"",buttonText:"подробнее",md:new it}},computed:{formattedDescription(){return this.md.render(this.description)}},methods:{toggleDetails(){this.showDetails=!this.showDetails,this.buttonText=this.showDetails?"свернуть":"подробнее",this.showDetails&&!this.description&&this.loadFullDescription()},async loadInitialText(){try{const t=await fetch(`/${this.fileName}`);if(!t.ok)throw new Error("Ошибка загрузки файла");const e=await t.text(),n=this.extractInitialText(e);this.initialText=this.md.render(n)}catch(t){console.error("Ошибка:",t),this.initialText=this.md.render("Не удалось загрузить описание.")}},async loadFullDescription(){try{const t=await fetch(`/${this.fileName}`);if(!t.ok)throw new Error("Ошибка загрузки файла");this.description=await t.text()}catch(t){console.error("Ошибка:",t),this.description="Не удалось загрузить описание."}},extractInitialText(t){const e=this.findNthOccurrence(t,"#",2);return e!==-1?t.slice(0,e).trim():t.trim()},findNthOccurrence(t,e,n){let i=0;for(let r=0;r<t.length;r++)if(t[r]===e&&(i++,i===n))return r;return-1}},mounted(){this.loadInitialText()}},pk={class:"more-button"},_k={class:"content"},mk=["src"],gk={class:"text"},bk=["innerHTML"],yk={key:0,class:"details"},vk=["innerHTML"];function Ek(t,e,n,i,r,s){return se(),ae("div",pk,[D("div",_k,[n.imageSrc?(se(),ae("img",{key:0,src:n.imageSrc,alt:"Image",class:"image"},null,8,mk)):hn("",!0),D("div",gk,[r.initialText?(se(),ae("div",{key:0,innerHTML:r.initialText},null,8,bk)):hn("",!0),D("button",{onClick:e[0]||(e[0]=(...u)=>s.toggleDetails&&s.toggleDetails(...u))},ct(r.buttonText),1)])]),r.showDetails?(se(),ae("div",yk,[D("div",{innerHTML:s.formattedDescription},null,8,vk)])):hn("",!0)])}const Hp=Yt(hk,[["render",Ek],["__scopeId","data-v-ec385802"]]),Ck={id:"morebutton"},xk=Hf('<div><h1>Инструменты нейроарта</h1><ol><li>Сайт <a href="https://www.mage.space/" target="_blank" rel="noopener noreferrer">MAGE.SPACE</a> генерирует картинки и видео. Бесплатно!!! </li><li>Сайт HUGGING FACE<a href="https://huggingface.co/spaces/black-forest-labs/FLUX.1-dev" target="_blank" rel="noopener noreferrer"> SPACES</a> Пространство для тестирования новинок нейросетей</li><li>Сайт <a href="https://www.recraft.ai/" target="_blank" rel="noopener noreferrer">Нейросеть RECRAFT.AI</a> от основательницы Яндекса. В настоящий момент из-за санкций временно не доступна</li><li>Перенос лица с фото на генеративное изображение <a href="https://huggingface.co/spaces/yanze/PuLID-FLUX" target="_blank" rel="noopener noreferrer">PulID FLUX</a></li><li>Генерация 3D моделей с экспортом в Blender <a href="https://www.tripo3d.ai/app/home" target="_blank" rel="noopener noreferrer"> Tripo3d.ai</a></li><li>Увеличение разрешения с помощью ИИ <a href="https://huggingface.co/spaces/jasperai/Flux.1-dev-Controlnet-Upscaler" target="_blank" rel="noopener noreferrer"> FLUX ControlNet Upscale</a></li><li>Генератор подсказок по категориям <a href="https://huggingface.co/spaces/gokaygokay/FLUX-Prompt-Generator" target="_blank" rel="noopener noreferrer"> с помощью LLM</a></li><li>Видео генератор <a href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener noreferrer"> LUMA</a></li><li>Видео генератор <a href="https://www.hedra.com/" target="_blank" rel="noopener noreferrer"> HEDRA</a> с синтезом речи </li><li>Стили художников <a href="https://cheatsheet.strea.ly/" target="_blank" rel="noopener noreferrer"> ОООЧЕНЬ тормозит </a> из-за огромной коллекции</li></ol><h1> Нейро-галерея кружка <a href="https://civitai.com/collections/9321690" target="_blank" rel="noopener noreferrer"> &quot;Нейроарт&quot; </a> школы №47 г. Липецка </h1></div>',1),wk={class:"container"},kk={class:"single-image"},Ik={class:"single-image"},Tk={class:"single-image"},Ak={class:"single-image"},Sk={class:"single-image"},Dk={class:"single-image"},Rk={class:"single-image"},Pk={class:"single-image"},Nk={class:"single-image"},Fk={class:"single-image"},Ok={class:"single-image"},Mk={class:"single-image"},Lk={class:"single-image"},Uk={class:"single-image"},Bk={class:"prompt-item"},$k=D("div",{class:"prompt-text"}," in the style of ck-mgs, nistyle, Special Ink-drawing mode, intricate linework with expressive contrasts, Mh1$AgThS2, Inkplash art on rice paper, sepia, henna , Silhouette Art, magnificent, inksplash closeup portrait of stunning japanese female sc-fi soldier, helmet, mirrored visor reflecting jungle environment ",-1),qk={class:"prompt-item"},zk=D("div",{class:"prompt-text"},' bmstyle anime "A human head made of translucent, crystallized material shatters outward, with shards transforming into a burst of vibrant flowers. The flowers are varied in color and species, blooming mid-air as if born from the explosion. Soft light refracts through the crystal fragments, creating a surreal, dreamlike atmosphere." ',-1),Wk={class:"prompt-item"},Hk=D("div",{class:"prompt-text"}," Masterpiece, absurdres, best quality, 1boy, solo, ch1ken, chicken, long beak, cartoon, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet ",-1),jk={class:"prompt-item"},Vk=D("div",{class:"prompt-text"}," A dove stands on two legs in an aristocratic coat and spy glasses on the tenth street of a dark city in the middle of a dark night ",-1),Gk={__name:"Neuroart",setup(t){return(e,n)=>(se(),ae(Qe,null,[D("div",Ck,[V(Hp,{fileName:"./young/public/text/n1.txt",imageSrc:"./images/3.jpg"})]),xk,D("div",wk,[D("div",kk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/94f45c4a-cc69-4041-86af-90a7bf287110/original=true,quality=90/image%20(14).jpeg",imageWidth:"150px"})]),D("div",Ik,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/89241a98-9252-4855-b266-1d3f8237ae40/original=true,quality=90/GRBV91j8XTQ.jpeg",imageWidth:"150px"})]),D("div",Tk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7a134b0d-6ac1-4246-aabd-315639a0364e/original=true,quality=90/f2wBjZkX7Ek.jpeg",imageWidth:"150px"})]),D("div",Ak,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/31369ca6-f577-4348-ac98-daf1b48d345a/original=true,quality=90/6hEg4a_P1XI.jpeg",imageWidth:"150px"})]),D("div",Sk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/cdca89f0-8cd1-4cdc-a4f1-49de26d9ee15/original=true,quality=90/HMNis5AQ91A.jpeg",imageWidth:"150px"})]),D("div",Dk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3d1c4dad-bd8d-4da0-a899-08a3130b9e84/original=true,quality=90/cBFnZ5u_ojs.jpeg",imageWidth:"150px"})]),D("div",Rk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/545fa158-492b-4276-a9e4-04efe93e15f6/original=true,quality=90/8iOIoRFSwSM.jpeg",imageWidth:"150px"})]),D("div",Pk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1c26c93b-c740-46ff-b980-02459a4f28d8/original=true,quality=90/IYm-PwlGfc0.jpeg",imageWidth:"150px"})]),D("div",Nk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2f873f2a-ba41-4300-9de5-ec5ee4ad165e/original=true,quality=90/e1wgSlNSsfk.jpeg",imageWidth:"150px"})]),D("div",Fk,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/17b35821-754a-4ae5-b9b2-551692fdf737/original=true,quality=90/image%20(1).jpeg",imageWidth:"150px"})]),D("div",Ok,[V(ve,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c6b690b1-4bec-4106-b580-001fc1f5050d/original=true,quality=90/tmpsrzdkamx.jpeg",imageWidth:"150px"})]),D("div",Mk,[V(ve,{imageSrc:"./images/16.jpeg",imageWidth:"150px"})]),D("div",Lk,[V(ve,{imageSrc:"./images/17.jpeg",imageWidth:"150px"})]),D("div",Uk,[V(ve,{imageSrc:"./images/1.jpg",imageWidth:"150px"})]),D("div",Bk,[V(ve,{imageSrc:"./images/10.jpeg",imageWidth:"150px"}),$k]),D("div",qk,[V(ve,{imageSrc:"./images/11.png",imageWidth:"150px"}),zk]),D("div",Wk,[V(ve,{imageSrc:"./images/15.jpeg",imageWidth:"150px"}),Hk]),D("div",jk,[V(ve,{imageSrc:"./images/2.jpg",imageWidth:"150px"}),Vk])])],64))}},Kk={id:"morebutton"},Yk={class:"image-container"},Qk={class:"content-wrapper"},Jk=D("div",{class:"text-content"}," Вася Пупкин ",-1),Zk={__name:"Graffiti",setup(t){return(e,n)=>(se(),ae(Qe,null,[D("div",Kk,[V(Hp,{fileName:"./young/public/text/t1.txt",imageSrc:"./images/Image.jpg"})]),D("div",Yk,[D("div",Qk,[V(ve,{imageSrc:"./images/Image.jpg",imageWidth:"300px"}),Jk])])],64))}},rs=["1. Добровольческий отряд Липецкого металлургического колледжа «От сердца к сердцу» телефон +7-474-274-28-86","2. Туристический отряд добровольцев","3. Добровольческий отряд «Сокол» (школа № 63)","4. Клуб Добровольцев РАНХиГС","5. Патриотический сектор профкома ЛГТУ","6. Липецкая Команда Помощи бездомным животным «Велес». (Контакты: Телефон +79119111111; Социальные сети: https://vk.com/club13050764)","7. Поисково-спасательный отряд «Лиза Алерт»"].join(`
`),Xk={name:"Volonter",data(){return{userRequest:"",response:null,isLoading:!1,error:null,organizations:[],loadingOrganizations:!0}},async created(){await this.loadDefaultOrganizations()},methods:{async loadDefaultOrganizations(){try{const t=await fetch("/official.txt");if(t.ok){const e=await t.text();this.parseOrganizations(e)}else this.parseOrganizations(rs)}catch(t){console.error("Ошибка загрузки организаций:",t),this.parseOrganizations(rs)}finally{this.loadingOrganizations=!1}},handleFileUpload(t){const e=t.target.files[0];if(!e)return;const n=new FileReader;n.onload=i=>{try{const r=i.target.result;this.parseOrganizations(r)}catch(r){this.error="Ошибка чтения файла: "+r.message,this.parseOrganizations(rs)}},n.readAsText(e)},parseOrganizations(t){const e=t.split(`
`).filter(n=>n.trim()!=="");this.organizations=e.map(n=>{const i=n.replace(/^\d+\.\s*/,""),r=i.match(/(телефон\s*\+?[0-9\-()\s]+)/i),s=i.match(/(https?:\/\/[^\s]+)/i),u=r?r[0]:null,o=s?s[0]:null;let a=i;u&&(a=a.replace(u,"")),o&&(a=a.replace(o,"")),a=a.replace(/\([^)]*\)/g,"").replace(/\.$/,"").trim();const c=[];return u&&c.push(u),o&&c.push(`Соцсети: ${o}`),{name:a,contacts:c}}),this.organizations.length===0&&(this.error="Не найдено организаций в файле",this.parseOrganizations(rs))},async sendRequestToMistral(){if(!this.userRequest.trim()){this.error="Пожалуйста, введите запрос";return}this.isLoading=!0,this.error=null,this.response=null;try{const t="z0BIDWOltmlDCI8q4wFFJMjEcc4d4g87",e=this.formatUserRequest(this.userRequest),n=await fetch("https://api.mistral.ai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({model:"mistral-tiny",messages:[{role:"system",content:`Ты помощник для волонтеров. В твоем распоряжении информация о волонтерских организациях.
                Отвечай строго по шаблону, используя только предоставленные данные. Если запрос не связан
                с волонтерскими организациями, вежливо сообщи об этом.

                ### Доступные организации:
                ${this.organizations.map(r=>`- ${r.name}${r.contacts.length>0?` (${r.contacts.join(", ")})`:""}`).join(`
`)}

                ### Шаблон ответа:
                {
                  "answer": "четкий ответ на вопрос",
                  "suggestions": ["список", "рекомендаций"],
                  "sources": ["источники", "информации"],
                  "contacts": ["контакты", "организаций"],
                  "warning": "предупреждение или ограничения ответа (если есть)"
                }`},{role:"user",content:e}],temperature:.7,response_format:{type:"json_object"}})});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();this.response=this.formatMistralResponse(i)}catch(t){this.error=`Ошибка: ${t.message}`,console.error("Mistral API error:",t)}finally{this.isLoading=!1}},formatUserRequest(t){return`Запрос волонтера:

      Тема: ${t}

      Прошу предоставить информацию по указанной теме, используя данные о волонтерских организациях.
      Включи в ответ контактные данные соответствующих организаций, если они есть.
      Ответ должен быть структурированным, точным и полезным для волонтерской деятельности.`},formatMistralResponse(t){var e,n;try{const i=(n=(e=t.choices[0])==null?void 0:e.message)==null?void 0:n.content;if(!i)throw new Error("Пустой ответ от API");const r=JSON.parse(i);return{answer:r.answer||"Нет информации по вашему запросу",suggestions:Array.isArray(r.suggestions)?r.suggestions:[],sources:Array.isArray(r.sources)?r.sources:[],contacts:Array.isArray(r.contacts)?r.contacts:[],warning:r.warning||null,raw:t}}catch(i){return console.error("Ошибка форматирования ответа:",i),{answer:"Не удалось обработать ответ от Mistral",suggestions:[],sources:[],contacts:[],warning:"Ответ не соответствует ожидаемому формату",raw:t}}}},computed:{formattedResponse(){if(!this.response)return"";let t=`📌 Ответ:
${this.response.answer}
`;return this.response.suggestions.length>0&&(t+=`
💡 Рекомендации:
${this.response.suggestions.map(e=>`• ${e}`).join(`
`)}`),this.response.contacts.length>0&&(t+=`

📞 Контакты:
${this.response.contacts.map(e=>`• ${e}`).join(`
`)}`),this.response.sources.length>0&&(t+=`

📚 Источники:
${this.response.sources.map(e=>`• ${e}`).join(`
`)}`),this.response.warning&&(t+=`

⚠️ Внимание: ${this.response.warning}`),t}}},jp=t=>(Pr("data-v-ca61bedd"),t=t(),Nr(),t),e4={class:"volonter-container"},t4=jp(()=>D("h1",null,"Привет, волонтер!",-1)),n4={class:"file-upload-section"},i4={key:0,class:"file-info"},r4={key:1,class:"file-info"},s4={class:"ai-interface"},u4={class:"request-section"},o4=["disabled"],a4={key:0,class:"response-section"},c4=jp(()=>D("h3",null,"Ответ от Mistral:",-1)),l4={class:"response-content"},d4={key:1,class:"error-message"};function f4(t,e,n,i,r,s){return se(),ae("div",e4,[t4,D("div",n4,[D("input",{type:"file",onChange:e[0]||(e[0]=(...u)=>s.handleFileUpload&&s.handleFileUpload(...u)),accept:".txt",class:"file-input"},null,32),r.organizations.length>0?(se(),ae("p",i4," Загружено организаций: "+ct(r.organizations.length),1)):(se(),ae("p",r4," Используется стандартный список организаций "))]),D("div",s4,[D("div",u4,[vs(D("textarea",{"onUpdate:modelValue":e[1]||(e[1]=u=>r.userRequest=u),placeholder:"Введите ваш запрос для Mistral...",class:"request-input"},null,512),[[xs,r.userRequest]]),D("button",{onClick:e[2]||(e[2]=(...u)=>s.sendRequestToMistral&&s.sendRequestToMistral(...u)),disabled:r.isLoading,class:"send-button"},ct(r.isLoading?"Отправка...":"Отправить запрос"),9,o4)]),r.response?(se(),ae("div",a4,[c4,D("div",l4,[D("pre",null,ct(s.formattedResponse),1)])])):hn("",!0),r.error?(se(),ae("div",d4," Ошибка: "+ct(r.error),1)):hn("",!0)])])}const h4=Yt(Xk,[["render",f4],["__scopeId","data-v-ca61bedd"]]),p4=Z6({history:T6("/young/"),routes:[{path:"/",name:"home",component:sC},{path:"/about",name:"about",component:dC},{path:"/welcome",name:"welcome",component:CC},{path:"/neuroart",name:"neuroart",component:Gk},{path:"/graffiti",name:"graffiti",component:Zk},{path:"/volonter",name:"volonter",component:h4}]});hm(YE).use(p4).mount("#app");
