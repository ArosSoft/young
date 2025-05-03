var Lg=Object.defineProperty;var $g=(t,e,n)=>e in t?Lg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pe=(t,e,n)=>$g(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Ha(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return s=>!!n[s]}const ye={},Fi=[],Kt=()=>{},Ug=()=>!1,Bg=/^on[^a-z]/,Mo=t=>Bg.test(t),Va=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Ga=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zg=Object.prototype.hasOwnProperty,ie=(t,e)=>zg.call(t,e),G=Array.isArray,Mi=t=>Lo(t)==="[object Map]",_f=t=>Lo(t)==="[object Set]",Z=t=>typeof t=="function",De=t=>typeof t=="string",Ka=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",gf=t=>ve(t)&&Z(t.then)&&Z(t.catch),mf=Object.prototype.toString,Lo=t=>mf.call(t),qg=t=>Lo(t).slice(8,-1),bf=t=>Lo(t)==="[object Object]",Ya=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wr=Ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wg=/-(\w)/g,Zt=$o(t=>t.replace(Wg,(e,n)=>n?n.toUpperCase():"")),jg=/\B([A-Z])/g,os=$o(t=>t.replace(jg,"-$1").toLowerCase()),Uo=$o(t=>t.charAt(0).toUpperCase()+t.slice(1)),Eu=$o(t=>t?`on${Uo(t)}`:""),js=(t,e)=>!Object.is(t,e),jr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},to=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ol;const ea=()=>Ol||(Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bo(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=De(i)?Kg(i):Bo(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(De(t))return t;if(ve(t))return t}}const Hg=/;(?![^(]*\))/g,Vg=/:([^]+)/,Gg=/\/\*[^]*?\*\//g;function Kg(t){const e={};return t.replace(Gg,"").split(Hg).forEach(n=>{if(n){const i=n.split(Vg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function fr(t){let e="";if(De(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const i=fr(t[n]);i&&(e+=i+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qg=Ha(Yg);function yf(t){return!!t||t===""}const Ie=t=>De(t)?t:t==null?"":G(t)||ve(t)&&(t.toString===mf||!Z(t.toString))?JSON.stringify(t,vf,2):String(t),vf=(t,e)=>e&&e.__v_isRef?vf(t,e.value):Mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:_f(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!G(e)&&!bf(e)?String(e):e;let xt;class Zg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jg(t,e=xt){e&&e.active&&e.effects.push(t)}function Xg(){return xt}const Qa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},kf=t=>(t.w&zn)>0,xf=t=>(t.n&zn)>0,em=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=zn},tm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];kf(s)&&!xf(s)?s.delete(t):e[n++]=s,s.w&=~zn,s.n&=~zn}e.length=n}},ta=new WeakMap;let Is=0,zn=1;const na=30;let Et;const ii=Symbol(""),ia=Symbol("");class Za{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jg(this,i)}run(){if(!this.active)return this.fn();let e=Et,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,Fn=!0,zn=1<<++Is,Is<=na?em(this):Fl(this),this.fn()}finally{Is<=na&&tm(this),zn=1<<--Is,Et=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(Fl(this),this.onStop&&this.onStop(),this.active=!1)}}function Fl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const Ef=[];function us(){Ef.push(Fn),Fn=!1}function as(){const t=Ef.pop();Fn=t===void 0?!0:t}function ot(t,e,n){if(Fn&&Et){let i=ta.get(t);i||ta.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Qa()),wf(s)}}function wf(t,e){let n=!1;Is<=na?xf(t)||(t.n|=zn,n=!kf(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function dn(t,e,n,i,s,r){const o=ta.get(t);if(!o)return;let u=[];if(e==="clear")u=[...o.values()];else if(n==="length"&&G(t)){const a=Number(i);o.forEach((c,l)=>{(l==="length"||l>=a)&&u.push(c)})}else switch(n!==void 0&&u.push(o.get(n)),e){case"add":G(t)?Ya(n)&&u.push(o.get("length")):(u.push(o.get(ii)),Mi(t)&&u.push(o.get(ia)));break;case"delete":G(t)||(u.push(o.get(ii)),Mi(t)&&u.push(o.get(ia)));break;case"set":Mi(t)&&u.push(o.get(ii));break}if(u.length===1)u[0]&&sa(u[0]);else{const a=[];for(const c of u)c&&a.push(...c);sa(Qa(a))}}function sa(t,e){const n=G(t)?t:[...t];for(const i of n)i.computed&&Ml(i);for(const i of n)i.computed||Ml(i)}function Ml(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const nm=Ha("__proto__,__v_isRef,__isVue"),Cf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ka)),im=Ja(),sm=Ja(!1,!0),rm=Ja(!0),Ll=om();function om(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=re(this);for(let r=0,o=this.length;r<o;r++)ot(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const i=re(this)[e].apply(this,n);return as(),i}}),t}function um(t){const e=re(this);return ot(e,"has",t),e.hasOwnProperty(t)}function Ja(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Em:Rf:e?Sf:Af).get(i))return i;const o=G(i);if(!t){if(o&&ie(Ll,s))return Reflect.get(Ll,s,r);if(s==="hasOwnProperty")return um}const u=Reflect.get(i,s,r);return(Ka(s)?Cf.has(s):nm(s))||(t||ot(i,"get",s),e)?u:Ve(u)?o&&Ya(s)?u:u.value:ve(u)?t?Pf(u):qo(u):u}}const am=If(),cm=If(!0);function If(t=!1){return function(n,i,s,r){let o=n[i];if(Vi(o)&&Ve(o)&&!Ve(s))return!1;if(!t&&(!no(s)&&!Vi(s)&&(o=re(o),s=re(s)),!G(n)&&Ve(o)&&!Ve(s)))return o.value=s,!0;const u=G(n)&&Ya(i)?Number(i)<n.length:ie(n,i),a=Reflect.set(n,i,s,r);return n===re(r)&&(u?js(s,o)&&dn(n,"set",i,s):dn(n,"add",i,s)),a}}function lm(t,e){const n=ie(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&dn(t,"delete",e,void 0),i}function hm(t,e){const n=Reflect.has(t,e);return(!Ka(e)||!Cf.has(e))&&ot(t,"has",e),n}function dm(t){return ot(t,"iterate",G(t)?"length":ii),Reflect.ownKeys(t)}const Tf={get:im,set:am,deleteProperty:lm,has:hm,ownKeys:dm},fm={get:rm,set(t,e){return!0},deleteProperty(t,e){return!0}},pm=Ge({},Tf,{get:sm,set:cm}),Xa=t=>t,zo=t=>Reflect.getPrototypeOf(t);function Ar(t,e,n=!1,i=!1){t=t.__v_raw;const s=re(t),r=re(e);n||(e!==r&&ot(s,"get",e),ot(s,"get",r));const{has:o}=zo(s),u=i?Xa:n?nc:Hs;if(o.call(s,e))return u(t.get(e));if(o.call(s,r))return u(t.get(r));t!==s&&t.get(e)}function Sr(t,e=!1){const n=this.__v_raw,i=re(n),s=re(t);return e||(t!==s&&ot(i,"has",t),ot(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Rr(t,e=!1){return t=t.__v_raw,!e&&ot(re(t),"iterate",ii),Reflect.get(t,"size",t)}function $l(t){t=re(t);const e=re(this);return zo(e).has.call(e,t)||(e.add(t),dn(e,"add",t,t)),this}function Ul(t,e){e=re(e);const n=re(this),{has:i,get:s}=zo(n);let r=i.call(n,t);r||(t=re(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?js(e,o)&&dn(n,"set",t,e):dn(n,"add",t,e),this}function Bl(t){const e=re(this),{has:n,get:i}=zo(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&dn(e,"delete",t,void 0),r}function zl(){const t=re(this),e=t.size!==0,n=t.clear();return e&&dn(t,"clear",void 0,void 0),n}function Dr(t,e){return function(i,s){const r=this,o=r.__v_raw,u=re(o),a=e?Xa:t?nc:Hs;return!t&&ot(u,"iterate",ii),o.forEach((c,l)=>i.call(s,a(c),a(l),r))}}function Pr(t,e,n){return function(...i){const s=this.__v_raw,r=re(s),o=Mi(r),u=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),l=n?Xa:e?nc:Hs;return!e&&ot(r,"iterate",a?ia:ii),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:u?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:this}}function _m(){const t={get(r){return Ar(this,r)},get size(){return Rr(this)},has:Sr,add:$l,set:Ul,delete:Bl,clear:zl,forEach:Dr(!1,!1)},e={get(r){return Ar(this,r,!1,!0)},get size(){return Rr(this)},has:Sr,add:$l,set:Ul,delete:Bl,clear:zl,forEach:Dr(!1,!0)},n={get(r){return Ar(this,r,!0)},get size(){return Rr(this,!0)},has(r){return Sr.call(this,r,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Dr(!0,!1)},i={get(r){return Ar(this,r,!0,!0)},get size(){return Rr(this,!0)},has(r){return Sr.call(this,r,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Pr(r,!1,!1),n[r]=Pr(r,!0,!1),e[r]=Pr(r,!1,!0),i[r]=Pr(r,!0,!0)}),[t,n,e,i]}const[gm,mm,bm,ym]=_m();function ec(t,e){const n=e?t?ym:bm:t?mm:gm;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ie(n,s)&&s in i?n:i,s,r)}const vm={get:ec(!1,!1)},km={get:ec(!1,!0)},xm={get:ec(!0,!1)},Af=new WeakMap,Sf=new WeakMap,Rf=new WeakMap,Em=new WeakMap;function wm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cm(t){return t.__v_skip||!Object.isExtensible(t)?0:wm(qg(t))}function qo(t){return Vi(t)?t:tc(t,!1,Tf,vm,Af)}function Df(t){return tc(t,!1,pm,km,Sf)}function Pf(t){return tc(t,!0,fm,xm,Rf)}function tc(t,e,n,i,s){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Cm(t);if(o===0)return t;const u=new Proxy(t,o===2?i:n);return s.set(t,u),u}function Li(t){return Vi(t)?Li(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function Nf(t){return Li(t)||Vi(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Of(t){return to(t,"__v_skip",!0),t}const Hs=t=>ve(t)?qo(t):t,nc=t=>ve(t)?Pf(t):t;function Ff(t){Fn&&Et&&(t=re(t),wf(t.dep||(t.dep=Qa())))}function Mf(t,e){t=re(t);const n=t.dep;n&&sa(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Ze(t){return Lf(t,!1)}function Im(t){return Lf(t,!0)}function Lf(t,e){return Ve(t)?t:new Tm(t,e)}class Tm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Hs(e)}get value(){return Ff(this),this._value}set value(e){const n=this.__v_isShallow||no(e)||Vi(e);e=n?e:re(e),js(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hs(e),Mf(this))}}function si(t){return Ve(t)?t.value:t}const Am={get:(t,e,n)=>si(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ve(s)&&!Ve(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function $f(t){return Li(t)?t:new Proxy(t,Am)}class Sm{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Za(e,()=>{this._dirty||(this._dirty=!0,Mf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=re(this);return Ff(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Rm(t,e,n=!1){let i,s;const r=Z(t);return r?(i=t,s=Kt):(i=t.get,s=t.set),new Sm(i,s,r||!s,n)}function Mn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Wo(r,e,n)}return s}function St(t,e,n,i){if(Z(t)){const r=Mn(t,e,n,i);return r&&gf(r)&&r.catch(o=>{Wo(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(St(t[r],e,n,i));return s}function Wo(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,u=n;for(;r;){const c=r.ec;if(c){for(let l=0;l<c.length;l++)if(c[l](t,o,u)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Mn(a,null,10,[t,o,u]);return}}Dm(t,n,s,i)}function Dm(t,e,n,i=!0){console.error(t)}let Vs=!1,ra=!1;const He=[];let qt=0;const $i=[];let rn=null,Jn=0;const Uf=Promise.resolve();let ic=null;function Bf(t){const e=ic||Uf;return t?e.then(this?t.bind(this):t):e}function Pm(t){let e=qt+1,n=He.length;for(;e<n;){const i=e+n>>>1;Gs(He[i])<t?e=i+1:n=i}return e}function sc(t){(!He.length||!He.includes(t,Vs&&t.allowRecurse?qt+1:qt))&&(t.id==null?He.push(t):He.splice(Pm(t.id),0,t),zf())}function zf(){!Vs&&!ra&&(ra=!0,ic=Uf.then(Wf))}function Nm(t){const e=He.indexOf(t);e>qt&&He.splice(e,1)}function Om(t){G(t)?$i.push(...t):(!rn||!rn.includes(t,t.allowRecurse?Jn+1:Jn))&&$i.push(t),zf()}function ql(t,e=Vs?qt+1:0){for(;e<He.length;e++){const n=He[e];n&&n.pre&&(He.splice(e,1),e--,n())}}function qf(t){if($i.length){const e=[...new Set($i)];if($i.length=0,rn){rn.push(...e);return}for(rn=e,rn.sort((n,i)=>Gs(n)-Gs(i)),Jn=0;Jn<rn.length;Jn++)rn[Jn]();rn=null,Jn=0}}const Gs=t=>t.id==null?1/0:t.id,Fm=(t,e)=>{const n=Gs(t)-Gs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wf(t){ra=!1,Vs=!0,He.sort(Fm);try{for(qt=0;qt<He.length;qt++){const e=He[qt];e&&e.active!==!1&&Mn(e,null,14)}}finally{qt=0,He.length=0,qf(),Vs=!1,ic=null,(He.length||$i.length)&&Wf()}}function Mm(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ye;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[l]||ye;d&&(s=n.map(f=>De(f)?f.trim():f)),h&&(s=n.map(Xu))}let u,a=i[u=Eu(e)]||i[u=Eu(Zt(e))];!a&&r&&(a=i[u=Eu(os(e))]),a&&St(a,t,6,s);const c=i[u+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,St(c,t,6,s)}}function jf(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},u=!1;if(!Z(t)){const a=c=>{const l=jf(c,e,!0);l&&(u=!0,Ge(o,l))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!u?(ve(t)&&i.set(t,null),null):(G(r)?r.forEach(a=>o[a]=null):Ge(o,r),ve(t)&&i.set(t,o),o)}function jo(t,e){return!t||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,os(e))||ie(t,e))}let _t=null,Ho=null;function io(t){const e=_t;return _t=t,Ho=t&&t.type.__scopeId||null,e}function mi(t){Ho=t}function bi(){Ho=null}function Qe(t,e=_t,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&eh(-1);const r=io(e);let o;try{o=t(...s)}finally{io(r),i._d&&eh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Wl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:u,attrs:a,emit:c,render:l,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:b}=t;let k,A;const w=io(t);try{if(n.shapeFlag&4){const x=s||i;k=zt(l.call(x,x,h,r,f,d,p)),A=a}else{const x=e;k=zt(x.length>1?x(r,{attrs:a,slots:u,emit:c}):x(r,null)),A=e.props?a:Lm(a)}}catch(x){Ps.length=0,Wo(x,t,1),k=F(ui)}let C=k;if(A&&b!==!1){const x=Object.keys(A),{shapeFlag:M}=C;x.length&&M&7&&(o&&x.some(Va)&&(A=$m(A,o)),C=Gi(C,A))}return n.dirs&&(C=Gi(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),k=C,io(w),k}const Lm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mo(n))&&((e||(e={}))[n]=t[n]);return e},$m=(t,e)=>{const n={};for(const i in t)(!Va(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Um(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:u,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?jl(i,o,c):!!o;if(a&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==i[d]&&!jo(c,d))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:i===o?!1:i?o?jl(i,o,c):!0:!!o;return!1}function jl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!jo(n,r))return!0}return!1}function Bm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zm=t=>t.__isSuspense;function qm(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Om(t)}const Nr={};function Hr(t,e,n){return Hf(t,e,n)}function Hf(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ye){var u;const a=Xg()===((u=qe)==null?void 0:u.scope)?qe:null;let c,l=!1,h=!1;if(Ve(t)?(c=()=>t.value,l=no(t)):Li(t)?(c=()=>t,i=!0):G(t)?(h=!0,l=t.some(x=>Li(x)||no(x)),c=()=>t.map(x=>{if(Ve(x))return x.value;if(Li(x))return ei(x);if(Z(x))return Mn(x,a,2)})):Z(t)?e?c=()=>Mn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),St(t,a,3,[f])}:c=Kt,e&&i){const x=c;c=()=>ei(x())}let d,f=x=>{d=w.onStop=()=>{Mn(x,a,4)}},p;if(Ys)if(f=Kt,e?n&&St(e,a,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const x=M1();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Kt;let b=h?new Array(t.length).fill(Nr):Nr;const k=()=>{if(w.active)if(e){const x=w.run();(i||l||(h?x.some((M,$)=>js(M,b[$])):js(x,b)))&&(d&&d(),St(e,a,3,[x,b===Nr?void 0:h&&b[0]===Nr?[]:b,f]),b=x)}else w.run()};k.allowRecurse=!!e;let A;s==="sync"?A=k:s==="post"?A=()=>nt(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),A=()=>sc(k));const w=new Za(c,A);e?n?k():b=w.run():s==="post"?nt(w.run.bind(w),a&&a.suspense):w.run();const C=()=>{w.stop(),a&&a.scope&&Ga(a.scope.effects,w)};return p&&p.push(C),C}function Wm(t,e,n){const i=this.proxy,s=De(t)?t.includes(".")?Vf(i,t):()=>i[t]:t.bind(i,i);let r;Z(e)?r=e:(r=e.handler,n=e);const o=qe;Ki(this);const u=Hf(s,r.bind(i),n);return o?Ki(o):ri(),u}function Vf(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ei(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))ei(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)ei(t[n],e);else if(_f(t)||Mi(t))t.forEach(n=>{ei(n,e)});else if(bf(t))for(const n in t)ei(t[n],e);return t}function Wt(t,e){const n=_t;if(n===null)return t;const i=Qo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,u,a,c=ye]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&ei(u),s.push({dir:o,instance:i,value:u,oldValue:void 0,arg:a,modifiers:c}))}return t}function Kn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const u=s[o];r&&(u.oldValue=r[o].value);let a=u.dir[i];a&&(us(),St(a,n,8,[t.el,u,t,e]),as())}}function Gf(t,e){return Z(t)?Ge({name:t.name},e,{setup:t}):t}const Vr=t=>!!t.type.__asyncLoader,Kf=t=>t.type.__isKeepAlive;function jm(t,e){Yf(t,"a",e)}function Hm(t,e){Yf(t,"da",e)}function Yf(t,e,n=qe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vo(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Kf(s.parent.vnode)&&Vm(i,e,n,s),s=s.parent}}function Vm(t,e,n,i){const s=Vo(e,t,i,!0);Qf(()=>{Ga(i[e],s)},n)}function Vo(t,e,n=qe,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Ki(n);const u=St(e,n,t,o);return ri(),as(),u});return i?s.unshift(r):s.push(r),r}}const gn=t=>(e,n=qe)=>(!Ys||t==="sp")&&Vo(t,(...i)=>e(...i),n),Gm=gn("bm"),Go=gn("m"),Km=gn("bu"),Ym=gn("u"),Qm=gn("bum"),Qf=gn("um"),Zm=gn("sp"),Jm=gn("rtg"),Xm=gn("rtc");function e1(t,e=qe){Vo("ec",t,e)}const t1="components";function oa(t,e){return i1(t1,t,!0,e)||t}const n1=Symbol.for("v-ndc");function i1(t,e,n=!0,i=!1){const s=_t||qe;if(s){const r=s.type;{const u=N1(r,!1);if(u&&(u===e||u===Zt(e)||u===Uo(Zt(e))))return r}const o=Hl(s[t]||r[t],e)||Hl(s.appContext[t],e);return!o&&i?r:o}}function Hl(t,e){return t&&(t[e]||t[Zt(e)]||t[Uo(Zt(e))])}function Ts(t,e,n,i){let s;const r=n;if(G(t)||De(t)){s=new Array(t.length);for(let o=0,u=t.length;o<u;o++)s[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r)}else if(ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,u)=>e(o,u,void 0,r));else{const o=Object.keys(t);s=new Array(o.length);for(let u=0,a=o.length;u<a;u++){const c=o[u];s[u]=e(t[c],c,u,r)}}else s=[];return s}const ua=t=>t?c0(t)?Qo(t)||t.proxy:ua(t.parent):null,Ds=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ua(t.parent),$root:t=>ua(t.root),$emit:t=>t.emit,$options:t=>Jf(t),$forceUpdate:t=>t.f||(t.f=()=>sc(t.update)),$nextTick:t=>t.n||(t.n=Bf.bind(t.proxy)),$watch:t=>Wm.bind(t)}),wu=(t,e)=>t!==ye&&!t.__isScriptSetup&&ie(t,e),s1={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:u,appContext:a}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(wu(i,e))return o[e]=1,i[e];if(s!==ye&&ie(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,r[e];if(n!==ye&&ie(n,e))return o[e]=4,n[e];aa&&(o[e]=0)}}const l=Ds[e];let h,d;if(l)return e==="$attrs"&&ot(t,"get",e),l(t);if((h=u.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ie(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return wu(s,e)?(s[e]=n,!0):i!==ye&&ie(i,e)?(i[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let u;return!!n[o]||t!==ye&&ie(t,o)||wu(e,o)||(u=r[0])&&ie(u,o)||ie(i,o)||ie(Ds,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vl(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let aa=!0;function r1(t){const e=Jf(t),n=t.proxy,i=t.ctx;aa=!1,e.beforeCreate&&Gl(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:u,provide:a,inject:c,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:b,deactivated:k,beforeDestroy:A,beforeUnmount:w,destroyed:C,unmounted:x,render:M,renderTracked:$,renderTriggered:K,errorCaptured:ne,serverPrefetch:Te,expose:Pe,inheritAttrs:ft,components:tn,directives:pt,filters:bn}=e;if(c&&o1(c,i,null),o)for(const de in o){const oe=o[de];Z(oe)&&(i[de]=oe.bind(n))}if(s){const de=s.call(n,n);ve(de)&&(t.data=qo(de))}if(aa=!0,r)for(const de in r){const oe=r[de],nn=Z(oe)?oe.bind(n,n):Z(oe.get)?oe.get.bind(n,n):Kt,yn=!Z(oe)&&Z(oe.set)?oe.set.bind(n):Kt,Lt=wt({get:nn,set:yn});Object.defineProperty(i,de,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:tt=>Lt.value=tt})}if(u)for(const de in u)Zf(u[de],i,n,de);if(a){const de=Z(a)?a.call(n):a;Reflect.ownKeys(de).forEach(oe=>{Gr(oe,de[oe])})}l&&Gl(l,t,"c");function Ae(de,oe){G(oe)?oe.forEach(nn=>de(nn.bind(n))):oe&&de(oe.bind(n))}if(Ae(Gm,h),Ae(Go,d),Ae(Km,f),Ae(Ym,p),Ae(jm,b),Ae(Hm,k),Ae(e1,ne),Ae(Xm,$),Ae(Jm,K),Ae(Qm,w),Ae(Qf,x),Ae(Zm,Te),G(Pe))if(Pe.length){const de=t.exposed||(t.exposed={});Pe.forEach(oe=>{Object.defineProperty(de,oe,{get:()=>n[oe],set:nn=>n[oe]=nn})})}else t.exposed||(t.exposed={});M&&t.render===Kt&&(t.render=M),ft!=null&&(t.inheritAttrs=ft),tn&&(t.components=tn),pt&&(t.directives=pt)}function o1(t,e,n=Kt){G(t)&&(t=ca(t));for(const i in t){const s=t[i];let r;ve(s)?"default"in s?r=ln(s.from||i,s.default,!0):r=ln(s.from||i):r=ln(s),Ve(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Gl(t,e,n){St(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zf(t,e,n,i){const s=i.includes(".")?Vf(n,i):()=>n[i];if(De(t)){const r=e[t];Z(r)&&Hr(s,r)}else if(Z(t))Hr(s,t.bind(n));else if(ve(t))if(G(t))t.forEach(r=>Zf(r,e,n,i));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&Hr(s,r,t)}}function Jf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,u=r.get(e);let a;return u?a=u:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>so(a,c,o,!0)),so(a,e,o)),ve(e)&&r.set(e,a),a}function so(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&so(t,r,n,!0),s&&s.forEach(o=>so(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const u=u1[o]||n&&n[o];t[o]=u?u(t[o],e[o]):e[o]}return t}const u1={data:Kl,props:Yl,emits:Yl,methods:As,computed:As,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:As,directives:As,watch:c1,provide:Kl,inject:a1};function Kl(t,e){return e?t?function(){return Ge(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function a1(t,e){return As(ca(t),ca(e))}function ca(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?Ge(Object.create(null),t,e):e}function Yl(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Ge(Object.create(null),Vl(t),Vl(e??{})):e}function c1(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const i in e)n[i]=Ye(t[i],e[i]);return n}function Xf(){return{app:null,config:{isNativeTag:Ug,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l1=0;function h1(t,e){return function(i,s=null){Z(i)||(i=Ge({},i)),s!=null&&!ve(s)&&(s=null);const r=Xf(),o=new Set;let u=!1;const a=r.app={_uid:l1++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:L1,get config(){return r.config},set config(c){},use(c,...l){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(a,...l)):Z(c)&&(o.add(c),c(a,...l))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,l){return l?(r.components[c]=l,a):r.components[c]},directive(c,l){return l?(r.directives[c]=l,a):r.directives[c]},mount(c,l,h){if(!u){const d=F(i,s);return d.appContext=r,t(d,c,h),u=!0,a._container=c,c.__vue_app__=a,Qo(d.component)||d.component.proxy}},unmount(){u&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,l){return r.provides[c]=l,a},runWithContext(c){ro=a;try{return c()}finally{ro=null}}};return a}}let ro=null;function Gr(t,e){if(qe){let n=qe.provides;const i=qe.parent&&qe.parent.provides;i===n&&(n=qe.provides=Object.create(i)),n[t]=e}}function ln(t,e,n=!1){const i=qe||_t;if(i||ro){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ro._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(i&&i.proxy):e}}function d1(t,e,n,i=!1){const s={},r={};to(r,Yo,1),t.propsDefaults=Object.create(null),e0(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Df(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function f1(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,u=re(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(jo(t.emitsOptions,d))continue;const f=e[d];if(a)if(ie(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=Zt(d);s[p]=la(a,u,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{e0(t,e,s,r)&&(c=!0);let l;for(const h in u)(!e||!ie(e,h)&&((l=os(h))===h||!ie(e,l)))&&(a?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=la(a,u,h,void 0,t,!0)):delete s[h]);if(r!==u)for(const h in r)(!e||!ie(e,h))&&(delete r[h],c=!0)}c&&dn(t,"set","$attrs")}function e0(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,u;if(e)for(let a in e){if(Wr(a))continue;const c=e[a];let l;s&&ie(s,l=Zt(a))?!r||!r.includes(l)?n[l]=c:(u||(u={}))[l]=c:jo(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=re(n),c=u||ye;for(let l=0;l<r.length;l++){const h=r[l];n[h]=la(s,a,h,c[h],t,!ie(c,h))}}return o}function la(t,e,n,i,s,r){const o=t[n];if(o!=null){const u=ie(o,"default");if(u&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&Z(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(Ki(s),i=c[n]=a.call(null,e),ri())}else i=a}o[0]&&(r&&!u?i=!1:o[1]&&(i===""||i===os(n))&&(i=!0))}return i}function t0(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},u=[];let a=!1;if(!Z(t)){const l=h=>{a=!0;const[d,f]=t0(h,e,!0);Ge(o,d),f&&u.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!r&&!a)return ve(t)&&i.set(t,Fi),Fi;if(G(r))for(let l=0;l<r.length;l++){const h=Zt(r[l]);Ql(h)&&(o[h]=ye)}else if(r)for(const l in r){const h=Zt(l);if(Ql(h)){const d=r[l],f=o[h]=G(d)||Z(d)?{type:d}:Ge({},d);if(f){const p=Xl(Boolean,f.type),b=Xl(String,f.type);f[0]=p>-1,f[1]=b<0||p<b,(p>-1||ie(f,"default"))&&u.push(h)}}}const c=[o,u];return ve(t)&&i.set(t,c),c}function Ql(t){return t[0]!=="$"}function Zl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Jl(t,e){return Zl(t)===Zl(e)}function Xl(t,e){return G(e)?e.findIndex(n=>Jl(n,t)):Z(e)&&Jl(e,t)?0:-1}const n0=t=>t[0]==="_"||t==="$stable",rc=t=>G(t)?t.map(zt):[zt(t)],p1=(t,e,n)=>{if(e._n)return e;const i=Qe((...s)=>rc(e(...s)),n);return i._c=!1,i},i0=(t,e,n)=>{const i=t._ctx;for(const s in t){if(n0(s))continue;const r=t[s];if(Z(r))e[s]=p1(s,r,i);else if(r!=null){const o=rc(r);e[s]=()=>o}}},s0=(t,e)=>{const n=rc(e);t.slots.default=()=>n},_1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),to(e,"_",n)):i0(e,t.slots={})}else t.slots={},e&&s0(t,e);to(t.slots,Yo,1)},g1=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ye;if(i.shapeFlag&32){const u=e._;u?n&&u===1?r=!1:(Ge(s,e),!n&&u===1&&delete s._):(r=!e.$stable,i0(e,s)),o=e}else e&&(s0(t,e),o={default:1});if(r)for(const u in s)!n0(u)&&!(u in o)&&delete s[u]};function ha(t,e,n,i,s=!1){if(G(t)){t.forEach((d,f)=>ha(d,e&&(G(e)?e[f]:e),n,i,s));return}if(Vr(i)&&!s)return;const r=i.shapeFlag&4?Qo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:u,r:a}=t,c=e&&e.r,l=u.refs===ye?u.refs={}:u.refs,h=u.setupState;if(c!=null&&c!==a&&(De(c)?(l[c]=null,ie(h,c)&&(h[c]=null)):Ve(c)&&(c.value=null)),Z(a))Mn(a,u,12,[o,l]);else{const d=De(a),f=Ve(a);if(d||f){const p=()=>{if(t.f){const b=d?ie(h,a)?h[a]:l[a]:a.value;s?G(b)&&Ga(b,r):G(b)?b.includes(r)||b.push(r):d?(l[a]=[r],ie(h,a)&&(h[a]=l[a])):(a.value=[r],t.k&&(l[t.k]=a.value))}else d?(l[a]=o,ie(h,a)&&(h[a]=o)):f&&(a.value=o,t.k&&(l[t.k]=o))};o?(p.id=-1,nt(p,n)):p()}}}const nt=qm;function m1(t){return b1(t)}function b1(t,e){const n=ea();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:u,createComment:a,setText:c,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=Kt,insertStaticContent:p}=t,b=(g,m,y,v=null,E=null,S=null,D=!1,P=null,N=!!m.dynamicChildren)=>{if(g===m)return;g&&!ms(g,m)&&(v=I(g),tt(g,E,S,!0),g=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:T,ref:q,shapeFlag:U}=m;switch(T){case Ko:k(g,m,y,v);break;case ui:A(g,m,y,v);break;case Kr:g==null&&w(m,y,v,D);break;case Re:tn(g,m,y,v,E,S,D,P,N);break;default:U&1?M(g,m,y,v,E,S,D,P,N):U&6?pt(g,m,y,v,E,S,D,P,N):(U&64||U&128)&&T.process(g,m,y,v,E,S,D,P,N,O)}q!=null&&E&&ha(q,g&&g.ref,S,m||g,!m)},k=(g,m,y,v)=>{if(g==null)i(m.el=u(m.children),y,v);else{const E=m.el=g.el;m.children!==g.children&&c(E,m.children)}},A=(g,m,y,v)=>{g==null?i(m.el=a(m.children||""),y,v):m.el=g.el},w=(g,m,y,v)=>{[g.el,g.anchor]=p(g.children,m,y,v,g.el,g.anchor)},C=({el:g,anchor:m},y,v)=>{let E;for(;g&&g!==m;)E=d(g),i(g,y,v),g=E;i(m,y,v)},x=({el:g,anchor:m})=>{let y;for(;g&&g!==m;)y=d(g),s(g),g=y;s(m)},M=(g,m,y,v,E,S,D,P,N)=>{D=D||m.type==="svg",g==null?$(m,y,v,E,S,D,P,N):Te(g,m,E,S,D,P,N)},$=(g,m,y,v,E,S,D,P)=>{let N,T;const{type:q,props:U,shapeFlag:W,transition:Y,dirs:te}=g;if(N=g.el=o(g.type,S,U&&U.is,U),W&8?l(N,g.children):W&16&&ne(g.children,N,null,v,E,S&&q!=="foreignObject",D,P),te&&Kn(g,null,v,"created"),K(N,g,g.scopeId,D,v),U){for(const fe in U)fe!=="value"&&!Wr(fe)&&r(N,fe,null,U[fe],S,g.children,v,E,je);"value"in U&&r(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Ut(T,v,g)}te&&Kn(g,null,v,"beforeMount");const _e=(!E||E&&!E.pendingBranch)&&Y&&!Y.persisted;_e&&Y.beforeEnter(N),i(N,m,y),((T=U&&U.onVnodeMounted)||_e||te)&&nt(()=>{T&&Ut(T,v,g),_e&&Y.enter(N),te&&Kn(g,null,v,"mounted")},E)},K=(g,m,y,v,E)=>{if(y&&f(g,y),v)for(let S=0;S<v.length;S++)f(g,v[S]);if(E){let S=E.subTree;if(m===S){const D=E.vnode;K(g,D,D.scopeId,D.slotScopeIds,E.parent)}}},ne=(g,m,y,v,E,S,D,P,N=0)=>{for(let T=N;T<g.length;T++){const q=g[T]=P?En(g[T]):zt(g[T]);b(null,q,m,y,v,E,S,D,P)}},Te=(g,m,y,v,E,S,D)=>{const P=m.el=g.el;let{patchFlag:N,dynamicChildren:T,dirs:q}=m;N|=g.patchFlag&16;const U=g.props||ye,W=m.props||ye;let Y;y&&Yn(y,!1),(Y=W.onVnodeBeforeUpdate)&&Ut(Y,y,m,g),q&&Kn(m,g,y,"beforeUpdate"),y&&Yn(y,!0);const te=E&&m.type!=="foreignObject";if(T?Pe(g.dynamicChildren,T,P,y,v,te,S):D||oe(g,m,P,null,y,v,te,S,!1),N>0){if(N&16)ft(P,m,U,W,y,v,E);else if(N&2&&U.class!==W.class&&r(P,"class",null,W.class,E),N&4&&r(P,"style",U.style,W.style,E),N&8){const _e=m.dynamicProps;for(let fe=0;fe<_e.length;fe++){const Be=_e[fe],kt=U[Be],Ti=W[Be];(Ti!==kt||Be==="value")&&r(P,Be,kt,Ti,E,g.children,y,v,je)}}N&1&&g.children!==m.children&&l(P,m.children)}else!D&&T==null&&ft(P,m,U,W,y,v,E);((Y=W.onVnodeUpdated)||q)&&nt(()=>{Y&&Ut(Y,y,m,g),q&&Kn(m,g,y,"updated")},v)},Pe=(g,m,y,v,E,S,D)=>{for(let P=0;P<m.length;P++){const N=g[P],T=m[P],q=N.el&&(N.type===Re||!ms(N,T)||N.shapeFlag&70)?h(N.el):y;b(N,T,q,null,v,E,S,D,!0)}},ft=(g,m,y,v,E,S,D)=>{if(y!==v){if(y!==ye)for(const P in y)!Wr(P)&&!(P in v)&&r(g,P,y[P],null,D,m.children,E,S,je);for(const P in v){if(Wr(P))continue;const N=v[P],T=y[P];N!==T&&P!=="value"&&r(g,P,T,N,D,m.children,E,S,je)}"value"in v&&r(g,"value",y.value,v.value)}},tn=(g,m,y,v,E,S,D,P,N)=>{const T=m.el=g?g.el:u(""),q=m.anchor=g?g.anchor:u("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:Y}=m;Y&&(P=P?P.concat(Y):Y),g==null?(i(T,y,v),i(q,y,v),ne(m.children,y,q,E,S,D,P,N)):U>0&&U&64&&W&&g.dynamicChildren?(Pe(g.dynamicChildren,W,y,E,S,D,P),(m.key!=null||E&&m===E.subTree)&&r0(g,m,!0)):oe(g,m,y,q,E,S,D,P,N)},pt=(g,m,y,v,E,S,D,P,N)=>{m.slotScopeIds=P,g==null?m.shapeFlag&512?E.ctx.activate(m,y,v,D,N):bn(m,y,v,E,S,D,N):at(g,m,N)},bn=(g,m,y,v,E,S,D)=>{const P=g.component=A1(g,v,E);if(Kf(g)&&(P.ctx.renderer=O),S1(P),P.asyncDep){if(E&&E.registerDep(P,Ae),!g.el){const N=P.subTree=F(ui);A(null,N,m,y)}return}Ae(P,g,m,y,E,S,D)},at=(g,m,y)=>{const v=m.component=g.component;if(Um(g,m,y))if(v.asyncDep&&!v.asyncResolved){de(v,m,y);return}else v.next=m,Nm(v.update),v.update();else m.el=g.el,v.vnode=m},Ae=(g,m,y,v,E,S,D)=>{const P=()=>{if(g.isMounted){let{next:q,bu:U,u:W,parent:Y,vnode:te}=g,_e=q,fe;Yn(g,!1),q?(q.el=te.el,de(g,q,D)):q=te,U&&jr(U),(fe=q.props&&q.props.onVnodeBeforeUpdate)&&Ut(fe,Y,q,te),Yn(g,!0);const Be=Wl(g),kt=g.subTree;g.subTree=Be,b(kt,Be,h(kt.el),I(kt),g,E,S),q.el=Be.el,_e===null&&Bm(g,Be.el),W&&nt(W,E),(fe=q.props&&q.props.onVnodeUpdated)&&nt(()=>Ut(fe,Y,q,te),E)}else{let q;const{el:U,props:W}=m,{bm:Y,m:te,parent:_e}=g,fe=Vr(m);Yn(g,!1),Y&&jr(Y),!fe&&(q=W&&W.onVnodeBeforeMount)&&Ut(q,_e,m),Yn(g,!0);{const Be=g.subTree=Wl(g);b(null,Be,y,v,g,E,S),m.el=Be.el}if(te&&nt(te,E),!fe&&(q=W&&W.onVnodeMounted)){const Be=m;nt(()=>Ut(q,_e,Be),E)}(m.shapeFlag&256||_e&&Vr(_e.vnode)&&_e.vnode.shapeFlag&256)&&g.a&&nt(g.a,E),g.isMounted=!0,m=y=v=null}},N=g.effect=new Za(P,()=>sc(T),g.scope),T=g.update=()=>N.run();T.id=g.uid,Yn(g,!0),T()},de=(g,m,y)=>{m.component=g;const v=g.vnode.props;g.vnode=m,g.next=null,f1(g,m.props,v,y),g1(g,m.children,y),us(),ql(),as()},oe=(g,m,y,v,E,S,D,P,N=!1)=>{const T=g&&g.children,q=g?g.shapeFlag:0,U=m.children,{patchFlag:W,shapeFlag:Y}=m;if(W>0){if(W&128){yn(T,U,y,v,E,S,D,P,N);return}else if(W&256){nn(T,U,y,v,E,S,D,P,N);return}}Y&8?(q&16&&je(T,E,S),U!==T&&l(y,U)):q&16?Y&16?yn(T,U,y,v,E,S,D,P,N):je(T,E,S,!0):(q&8&&l(y,""),Y&16&&ne(U,y,v,E,S,D,P,N))},nn=(g,m,y,v,E,S,D,P,N)=>{g=g||Fi,m=m||Fi;const T=g.length,q=m.length,U=Math.min(T,q);let W;for(W=0;W<U;W++){const Y=m[W]=N?En(m[W]):zt(m[W]);b(g[W],Y,y,null,E,S,D,P,N)}T>q?je(g,E,S,!0,!1,U):ne(m,y,v,E,S,D,P,N,U)},yn=(g,m,y,v,E,S,D,P,N)=>{let T=0;const q=m.length;let U=g.length-1,W=q-1;for(;T<=U&&T<=W;){const Y=g[T],te=m[T]=N?En(m[T]):zt(m[T]);if(ms(Y,te))b(Y,te,y,null,E,S,D,P,N);else break;T++}for(;T<=U&&T<=W;){const Y=g[U],te=m[W]=N?En(m[W]):zt(m[W]);if(ms(Y,te))b(Y,te,y,null,E,S,D,P,N);else break;U--,W--}if(T>U){if(T<=W){const Y=W+1,te=Y<q?m[Y].el:v;for(;T<=W;)b(null,m[T]=N?En(m[T]):zt(m[T]),y,te,E,S,D,P,N),T++}}else if(T>W)for(;T<=U;)tt(g[T],E,S,!0),T++;else{const Y=T,te=T,_e=new Map;for(T=te;T<=W;T++){const ct=m[T]=N?En(m[T]):zt(m[T]);ct.key!=null&&_e.set(ct.key,T)}let fe,Be=0;const kt=W-te+1;let Ti=!1,Dl=0;const gs=new Array(kt);for(T=0;T<kt;T++)gs[T]=0;for(T=Y;T<=U;T++){const ct=g[T];if(Be>=kt){tt(ct,E,S,!0);continue}let $t;if(ct.key!=null)$t=_e.get(ct.key);else for(fe=te;fe<=W;fe++)if(gs[fe-te]===0&&ms(ct,m[fe])){$t=fe;break}$t===void 0?tt(ct,E,S,!0):(gs[$t-te]=T+1,$t>=Dl?Dl=$t:Ti=!0,b(ct,m[$t],y,null,E,S,D,P,N),Be++)}const Pl=Ti?y1(gs):Fi;for(fe=Pl.length-1,T=kt-1;T>=0;T--){const ct=te+T,$t=m[ct],Nl=ct+1<q?m[ct+1].el:v;gs[T]===0?b(null,$t,y,Nl,E,S,D,P,N):Ti&&(fe<0||T!==Pl[fe]?Lt($t,y,Nl,2):fe--)}}},Lt=(g,m,y,v,E=null)=>{const{el:S,type:D,transition:P,children:N,shapeFlag:T}=g;if(T&6){Lt(g.component.subTree,m,y,v);return}if(T&128){g.suspense.move(m,y,v);return}if(T&64){D.move(g,m,y,O);return}if(D===Re){i(S,m,y);for(let U=0;U<N.length;U++)Lt(N[U],m,y,v);i(g.anchor,m,y);return}if(D===Kr){C(g,m,y);return}if(v!==2&&T&1&&P)if(v===0)P.beforeEnter(S),i(S,m,y),nt(()=>P.enter(S),E);else{const{leave:U,delayLeave:W,afterLeave:Y}=P,te=()=>i(S,m,y),_e=()=>{U(S,()=>{te(),Y&&Y()})};W?W(S,te,_e):_e()}else i(S,m,y)},tt=(g,m,y,v=!1,E=!1)=>{const{type:S,props:D,ref:P,children:N,dynamicChildren:T,shapeFlag:q,patchFlag:U,dirs:W}=g;if(P!=null&&ha(P,null,y,g,!0),q&256){m.ctx.deactivate(g);return}const Y=q&1&&W,te=!Vr(g);let _e;if(te&&(_e=D&&D.onVnodeBeforeUnmount)&&Ut(_e,m,g),q&6)Tr(g.component,y,v);else{if(q&128){g.suspense.unmount(y,v);return}Y&&Kn(g,null,m,"beforeUnmount"),q&64?g.type.remove(g,m,y,E,O,v):T&&(S!==Re||U>0&&U&64)?je(T,m,y,!1,!0):(S===Re&&U&384||!E&&q&16)&&je(N,m,y),v&&Ci(g)}(te&&(_e=D&&D.onVnodeUnmounted)||Y)&&nt(()=>{_e&&Ut(_e,m,g),Y&&Kn(g,null,m,"unmounted")},y)},Ci=g=>{const{type:m,el:y,anchor:v,transition:E}=g;if(m===Re){Ii(y,v);return}if(m===Kr){x(g);return}const S=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(g.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:P}=E,N=()=>D(y,S);P?P(g.el,S,N):N()}else S()},Ii=(g,m)=>{let y;for(;g!==m;)y=d(g),s(g),g=y;s(m)},Tr=(g,m,y)=>{const{bum:v,scope:E,update:S,subTree:D,um:P}=g;v&&jr(v),E.stop(),S&&(S.active=!1,tt(D,g,m,y)),P&&nt(P,m),nt(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},je=(g,m,y,v=!1,E=!1,S=0)=>{for(let D=S;D<g.length;D++)tt(g[D],m,y,v,E)},I=g=>g.shapeFlag&6?I(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),L=(g,m,y)=>{g==null?m._vnode&&tt(m._vnode,null,null,!0):b(m._vnode||null,g,m,null,null,null,y),ql(),qf(),m._vnode=g},O={p:b,um:tt,m:Lt,r:Ci,mt:bn,mc:ne,pc:oe,pbc:Pe,n:I,o:t};return{render:L,hydrate:void 0,createApp:h1(L)}}function Yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function r0(t,e,n=!1){const i=t.children,s=e.children;if(G(i)&&G(s))for(let r=0;r<i.length;r++){const o=i[r];let u=s[r];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[r]=En(s[r]),u.el=o.el),n||r0(o,u)),u.type===Ko&&(u.el=o.el)}}function y1(t){const e=t.slice(),n=[0];let i,s,r,o,u;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)u=r+o>>1,t[n[u]]<c?r=u+1:o=u;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const v1=t=>t.__isTeleport,Re=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),ui=Symbol.for("v-cmt"),Kr=Symbol.for("v-stc"),Ps=[];let It=null;function B(t=!1){Ps.push(It=t?null:[])}function k1(){Ps.pop(),It=Ps[Ps.length-1]||null}let Ks=1;function eh(t){Ks+=t}function o0(t){return t.dynamicChildren=Ks>0?It||Fi:null,k1(),Ks>0&&It&&It.push(t),t}function z(t,e,n,i,s,r){return o0(_(t,e,n,i,s,r,!0))}function x1(t,e,n,i,s){return o0(F(t,e,n,i,s,!0))}function da(t){return t?t.__v_isVNode===!0:!1}function ms(t,e){return t.type===e.type&&t.key===e.key}const Yo="__vInternal",u0=({key:t})=>t??null,Yr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?De(t)||Ve(t)||Z(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,i=0,s=null,r=t===Re?0:1,o=!1,u=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&u0(e),ref:e&&Yr(e),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return u?(oc(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=De(n)?8:16),Ks>0&&!o&&It&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&It.push(a),a}const F=E1;function E1(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===n1)&&(t=ui),da(t)){const u=Gi(t,e,!0);return n&&oc(u,n),Ks>0&&!r&&It&&(u.shapeFlag&6?It[It.indexOf(t)]=u:It.push(u)),u.patchFlag|=-2,u}if(O1(t)&&(t=t.__vccOpts),e){e=w1(e);let{class:u,style:a}=e;u&&!De(u)&&(e.class=fr(u)),ve(a)&&(Nf(a)&&!G(a)&&(a=Ge({},a)),e.style=Bo(a))}const o=De(t)?1:zm(t)?128:v1(t)?64:ve(t)?4:Z(t)?2:0;return _(t,e,n,i,s,o,r,!0)}function w1(t){return t?Nf(t)||Yo in t?Ge({},t):t:null}function Gi(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,u=e?C1(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&u0(u),ref:e&&e.ref?n&&s?G(s)?s.concat(Yr(e)):[s,Yr(e)]:Yr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gi(t.ssContent),ssFallback:t.ssFallback&&Gi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function it(t=" ",e=0){return F(Ko,null,t,e)}function a0(t,e){const n=F(Kr,null,t);return n.staticCount=e,n}function ke(t="",e=!1){return e?(B(),x1(ui,null,t)):F(ui,null,t)}function zt(t){return t==null||typeof t=="boolean"?F(ui):G(t)?F(Re,null,t.slice()):typeof t=="object"?En(t):F(Ko,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gi(t)}function oc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),oc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Yo in e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),i&64?(n=16,e=[it(e)]):n=8);t.children=e,t.shapeFlag|=n}function C1(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=fr([e.class,i.class]));else if(s==="style")e.style=Bo([e.style,i.style]);else if(Mo(s)){const r=e[s],o=i[s];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Ut(t,e,n,i=null){St(t,e,7,[n,i])}const I1=Xf();let T1=0;function A1(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||I1,r={uid:T1++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:t0(i,s),emitsOptions:jf(i,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Mm.bind(null,r),t.ce&&t.ce(r),r}let qe=null,uc,Ai,th="__VUE_INSTANCE_SETTERS__";(Ai=ea()[th])||(Ai=ea()[th]=[]),Ai.push(t=>qe=t),uc=t=>{Ai.length>1?Ai.forEach(e=>e(t)):Ai[0](t)};const Ki=t=>{uc(t),t.scope.on()},ri=()=>{qe&&qe.scope.off(),uc(null)};function c0(t){return t.vnode.shapeFlag&4}let Ys=!1;function S1(t,e=!1){Ys=e;const{props:n,children:i}=t.vnode,s=c0(t);d1(t,n,s,e),_1(t,i);const r=s?R1(t,e):void 0;return Ys=!1,r}function R1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Of(new Proxy(t.ctx,s1));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?P1(t):null;Ki(t),us();const r=Mn(i,t,0,[t.props,s]);if(as(),ri(),gf(r)){if(r.then(ri,ri),e)return r.then(o=>{nh(t,o)}).catch(o=>{Wo(o,t,0)});t.asyncDep=r}else nh(t,r)}else l0(t)}function nh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=$f(e)),l0(t)}function l0(t,e,n){const i=t.type;t.render||(t.render=i.render||Kt),Ki(t),us(),r1(t),as(),ri()}function D1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}}))}function P1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return D1(t)},slots:t.slots,emit:t.emit,expose:e}}function Qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($f(Of(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ds)return Ds[n](t)},has(e,n){return n in e||n in Ds}}))}function N1(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function O1(t){return Z(t)&&"__vccOpts"in t}const wt=(t,e)=>Rm(t,e,Ys);function h0(t,e,n){const i=arguments.length;return i===2?ve(e)&&!G(e)?da(e)?F(t,null,[e]):F(t,e):F(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&da(n)&&(n=[n]),F(t,e,n))}const F1=Symbol.for("v-scx"),M1=()=>ln(F1),L1="3.3.4",$1="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,ih=Xn&&Xn.createElement("template"),U1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Xn.createElementNS($1,t):Xn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ih.innerHTML=i?`<svg>${t}</svg>`:t;const u=ih.content;if(i){const a=u.firstChild;for(;a.firstChild;)u.appendChild(a.firstChild);u.removeChild(a)}e.insertBefore(u,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function B1(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function z1(t,e,n){const i=t.style,s=De(n);if(n&&!s){if(e&&!De(e))for(const r in e)n[r]==null&&fa(i,r,"");for(const r in n)fa(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const sh=/\s*!important$/;function fa(t,e,n){if(G(n))n.forEach(i=>fa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=q1(t,e);sh.test(n)?t.setProperty(os(i),n.replace(sh,""),"important"):t[i]=n}}const rh=["Webkit","Moz","ms"],Cu={};function q1(t,e){const n=Cu[e];if(n)return n;let i=Zt(e);if(i!=="filter"&&i in t)return Cu[e]=i;i=Uo(i);for(let s=0;s<rh.length;s++){const r=rh[s]+i;if(r in t)return Cu[e]=r}return e}const oh="http://www.w3.org/1999/xlink";function W1(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(oh,e.slice(6,e.length)):t.setAttributeNS(oh,e,n);else{const r=Qg(e);n==null||r&&!yf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function j1(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const u=t.tagName;if(e==="value"&&u!=="PROGRESS"&&!u.includes("-")){t._value=n;const c=u==="OPTION"?t.getAttribute("value"):t.value,l=n??"";c!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Di(t,e,n,i){t.addEventListener(e,n,i)}function H1(t,e,n,i){t.removeEventListener(e,n,i)}function V1(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[u,a]=G1(e);if(i){const c=r[e]=Q1(i,s);Di(t,u,c,a)}else o&&(H1(t,u,o,a),r[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function G1(t){let e;if(uh.test(t)){e={};let i;for(;i=t.match(uh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let Iu=0;const K1=Promise.resolve(),Y1=()=>Iu||(K1.then(()=>Iu=0),Iu=Date.now());function Q1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;St(Z1(i,n.value),e,5,[i])};return n.value=t,n.attached=Y1(),n}function Z1(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ah=/^on[a-z]/,J1=(t,e,n,i,s=!1,r,o,u,a)=>{e==="class"?B1(t,i,s):e==="style"?z1(t,n,i):Mo(e)?Va(e)||V1(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):X1(t,e,i,s))?j1(t,e,i,r,o,u,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),W1(t,e,i,s))};function X1(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&ah.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ah.test(e)&&De(n)?!1:e in t}const ch=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>jr(e,n):e};function eb(t){t.target.composing=!0}function lh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=ch(s);const r=i||s.props&&s.props.type==="number";Di(t,e?"change":"input",o=>{if(o.target.composing)return;let u=t.value;n&&(u=u.trim()),r&&(u=Xu(u)),t._assign(u)}),n&&Di(t,"change",()=>{t.value=t.value.trim()}),e||(Di(t,"compositionstart",eb),Di(t,"compositionend",lh),Di(t,"change",lh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=ch(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Xu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},tb=["ctrl","shift","alt","meta"],nb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tb.some(n=>t[`${n}Key`]&&!e.includes(n))},d0=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=nb[e[s]];if(r&&r(n,e))return}return t(n,...i)},ib=Ge({patchProp:J1},U1);let hh;function sb(){return hh||(hh=m1(ib))}const rb=(...t)=>{const e=sb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ob(i);if(!s)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ob(t){return De(t)?document.querySelector(t):t}const ub="/young/assets/logo-Csr1e5C5.jpg",Ot=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ab=t=>(mi("data-v-73db5781"),t=t(),bi(),t),cb={class:"greetings"},lb={class:"green"},hb=ab(()=>_("h3",null,[it(" Платформа для поддержки творческих инициатив детей и молодежи в городе Липецк"),_("br")],-1)),db={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(B(),z("div",cb,[_("h1",lb,Ie(t.msg),1),hb]))}},fb=Ot(db,[["__scopeId","data-v-73db5781"]]),pb=t=>(mi("data-v-66871be8"),t=t(),bi(),t),_b={class:"footer"},gb={class:"footer-content"},mb=pb(()=>_("div",{class:"footer-links"},[_("a",{href:"#"},"Условия использования"),it(" | "),_("a",{href:"#"},"Политика конфиденциальности"),it(" | "),_("a",{href:"#"},"Контакты")],-1)),bb={__name:"TheFooter",setup(t){const e=new Date().getFullYear();return(n,i)=>(B(),z("footer",_b,[_("div",gb,[_("p",null,"© "+Ie(si(e))+" Моё приложение. Все права защищены.",1),mb])]))}},yb=Ot(bb,[["__scopeId","data-v-66871be8"]]),vb=()=>{};var dh={};/**
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
 */const f0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw cs(e)},cs=function(t){return new Error("Firebase Database ("+f0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const p0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kb=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],u=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,u=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,l=r>>2,h=(r&3)<<4|u>>4;let d=(u&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),i.push(n[l],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(p0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||u==null||c==null||h==null)throw new xb;const d=r<<2|u>>4;if(i.push(d),c!==64){const f=u<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _0=function(t){const e=p0(t);return ac.encodeByteArray(e,!0)},oo=function(t){return _0(t).replace(/\./g,"")},uo=function(t){try{return ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Eb(t){return g0(void 0,t)}function g0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wb(n)||(t[n]=g0(t[n],e[n]));return t}function wb(t){return t!=="__proto__"}/**
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
 */function Cb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ib=()=>Cb().__FIREBASE_DEFAULTS__,Tb=()=>{if(typeof process>"u"||typeof dh>"u")return;const t=dh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ab=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uo(t[1]);return e&&JSON.parse(e)},cc=()=>{try{return vb()||Ib()||Tb()||Ab()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},m0=t=>{var e,n;return(n=(e=cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},b0=t=>{const e=m0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},y0=()=>{var t;return(t=cc())===null||t===void 0?void 0:t.config},v0=t=>{var e;return(e=cc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class pr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function k0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oo(JSON.stringify(n)),oo(JSON.stringify(o)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function Sb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function x0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Db(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pb(){return f0.NODE_ADMIN===!0}function Nb(){try{return typeof indexedDB=="object"}catch{return!1}}function Ob(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Fb="FirebaseError";class mn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Fb,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Mb(r,i):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new mn(s,u,i)}}function Mb(t,e){return t.replace(Lb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Lb=/\{\$([^}]+)}/g;/**
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
 */function Qs(t){return JSON.parse(t)}function Le(t){return JSON.stringify(t)}/**
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
 */const E0=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Qs(uo(r[0])||""),n=Qs(uo(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},$b=function(t){const e=E0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ub=function(t){const e=E0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ai(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(fh(r)&&fh(o)){if(!ai(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function fh(t){return t!==null&&typeof t=="object"}/**
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
 */function ls(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ss(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Bb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],u=this.chain_[3],a=this.chain_[4],c,l;for(let h=0;h<80;h++){h<40?h<20?(c=u^r&(o^u),l=1518500249):(c=r^o^u,l=1859775393):h<60?(c=r&o|u&(r|o),l=2400959708):(c=r^o^u,l=3395469782);const d=(s<<5|s>>>27)+c+a+l+i[h]&4294967295;a=u,u=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function zb(t,e){const n=new qb(t,e);return n.subscribe.bind(n)}class qb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Wb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Tu),s.error===void 0&&(s.error=Tu),s.complete===void 0&&(s.complete=Tu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tu(){}function Zo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const jb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,R(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jo=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class Hb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new pr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gb(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(r);i===u&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vb(t){return t===Qn?void 0:t}function Gb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Yb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Qb=le.INFO,Zb={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Jb=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Zb[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=Qb,this._logHandler=Jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Xb=(t,e)=>e.some(n=>t instanceof n);let ph,_h;function e2(){return ph||(ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t2(){return _h||(_h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const w0=new WeakMap,_a=new WeakMap,C0=new WeakMap,Au=new WeakMap,dc=new WeakMap;function n2(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ln(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&w0.set(n,t)}).catch(()=>{}),dc.set(e,t),e}function i2(t){if(_a.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_a.set(t,e)}let ga={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _a.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function s2(t){ga=t(ga)}function r2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Su(this),e,...n);return C0.set(i,e.sort?e.sort():[e]),Ln(i)}:t2().includes(t)?function(...e){return t.apply(Su(this),e),Ln(w0.get(this))}:function(...e){return Ln(t.apply(Su(this),e))}}function o2(t){return typeof t=="function"?r2(t):(t instanceof IDBTransaction&&i2(t),Xb(t,e2())?new Proxy(t,ga):t)}function Ln(t){if(t instanceof IDBRequest)return n2(t);if(Au.has(t))return Au.get(t);const e=o2(t);return e!==t&&(Au.set(t,e),dc.set(e,t)),e}const Su=t=>dc.get(t);function u2(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),u=Ln(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Ln(o.result),a.oldVersion,a.newVersion,Ln(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),u.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),u}const a2=["get","getKey","getAll","getAllKeys","count"],c2=["put","add","delete","clear"],Ru=new Map;function gh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ru.get(e))return Ru.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=c2.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||a2.includes(n)))return;const r=async function(o,...u){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(u.shift())),(await Promise.all([c[n](...u),s&&a.done]))[0]};return Ru.set(e,r),r}s2(t=>({...t,get:(e,n,i)=>gh(e,n)||t.get(e,n,i),has:(e,n)=>!!gh(e,n)||t.has(e,n)}));/**
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
 */class l2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h2(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function h2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ma="@firebase/app",mh="0.11.5";/**
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
 */const fn=new hc("@firebase/app"),d2="@firebase/app-compat",f2="@firebase/analytics-compat",p2="@firebase/analytics",_2="@firebase/app-check-compat",g2="@firebase/app-check",m2="@firebase/auth",b2="@firebase/auth-compat",y2="@firebase/database",v2="@firebase/data-connect",k2="@firebase/database-compat",x2="@firebase/functions",E2="@firebase/functions-compat",w2="@firebase/installations",C2="@firebase/installations-compat",I2="@firebase/messaging",T2="@firebase/messaging-compat",A2="@firebase/performance",S2="@firebase/performance-compat",R2="@firebase/remote-config",D2="@firebase/remote-config-compat",P2="@firebase/storage",N2="@firebase/storage-compat",O2="@firebase/firestore",F2="@firebase/vertexai",M2="@firebase/firestore-compat",L2="firebase",$2="11.6.1";/**
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
 */const ba="[DEFAULT]",U2={[ma]:"fire-core",[d2]:"fire-core-compat",[p2]:"fire-analytics",[f2]:"fire-analytics-compat",[g2]:"fire-app-check",[_2]:"fire-app-check-compat",[m2]:"fire-auth",[b2]:"fire-auth-compat",[y2]:"fire-rtdb",[v2]:"fire-data-connect",[k2]:"fire-rtdb-compat",[x2]:"fire-fn",[E2]:"fire-fn-compat",[w2]:"fire-iid",[C2]:"fire-iid-compat",[I2]:"fire-fcm",[T2]:"fire-fcm-compat",[A2]:"fire-perf",[S2]:"fire-perf-compat",[R2]:"fire-rc",[D2]:"fire-rc-compat",[P2]:"fire-gcs",[N2]:"fire-gcs-compat",[O2]:"fire-fst",[M2]:"fire-fst-compat",[F2]:"fire-vertex","fire-js":"fire-js",[L2]:"fire-js-all"};/**
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
 */const co=new Map,B2=new Map,ya=new Map;function bh(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(ya.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;ya.set(e,t);for(const n of co.values())bh(n,t);for(const n of B2.values())bh(n,t);return!0}function Xo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const z2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new _r("app","Firebase",z2);/**
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
 */class q2{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=$2;function I0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ba,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=y0()),!n)throw $n.create("no-options");const r=co.get(s);if(r){if(ai(n,r.options)&&ai(i,r.config))return r;throw $n.create("duplicate-app",{appName:s})}const o=new Kb(s);for(const a of ya.values())o.addComponent(a);const u=new q2(n,i,o);return co.set(s,u),u}function fc(t=ba){const e=co.get(t);if(!e&&t===ba&&y0())return I0();if(!e)throw $n.create("no-app",{appName:t});return e}function Yt(t,e,n){var i;let s=(i=U2[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const u=[`Unable to register library "${s}" with version "${e}":`];r&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(u.join(" "));return}ci(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const W2="firebase-heartbeat-database",j2=1,Zs="firebase-heartbeat-store";let Du=null;function T0(){return Du||(Du=u2(W2,j2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Du}async function H2(t){try{const n=(await T0()).transaction(Zs),i=await n.objectStore(Zs).get(A0(t));return await n.done,i}catch(e){if(e instanceof mn)fn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function yh(t,e){try{const i=(await T0()).transaction(Zs,"readwrite");await i.objectStore(Zs).put(e,A0(t)),await i.done}catch(n){if(n instanceof mn)fn.warn(n.message);else{const i=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(i.message)}}}function A0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const V2=1024,G2=30;class K2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>G2){const o=Z2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){fn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vh(),{heartbeatsToSend:i,unsentEntries:s}=Y2(this._heartbeatsCache.heartbeats),r=oo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return fn.warn(n),""}}}function vh(){return new Date().toISOString().substring(0,10)}function Y2(t,e=V2){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),kh(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kh(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Q2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nb()?Ob().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await H2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kh(t){return oo(JSON.stringify({version:2,heartbeats:t})).length}function Z2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function J2(t){ci(new qn("platform-logger",e=>new l2(e),"PRIVATE")),ci(new qn("heartbeat",e=>new K2(e),"PRIVATE")),Yt(ma,mh,t),Yt(ma,mh,"esm2017"),Yt("fire-js","")}J2("");var X2="firebase",ey="11.6.1";/**
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
 */Yt(X2,ey,"app");function pc(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function S0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ty=S0,R0=new _r("auth","Firebase",S0());/**
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
 */const lo=new hc("@firebase/auth");function ny(t,...e){lo.logLevel<=le.WARN&&lo.warn(`Auth (${yi}): ${t}`,...e)}function Qr(t,...e){lo.logLevel<=le.ERROR&&lo.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function yt(t,...e){throw gc(t,...e)}function Rt(t,...e){return gc(t,...e)}function _c(t,e,n){const i=Object.assign(Object.assign({},ty()),{[e]:n});return new _r("auth","Firebase",i).create(e,{appName:t.name})}function Un(t){return _c(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iy(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&yt(t,"argument-error"),_c(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return R0.create(t,...e)}function H(t,e,...n){if(!t)throw gc(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qr(e),new Error(e)}function pn(t,e){t||un(e)}/**
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
 */function va(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sy(){return xh()==="http:"||xh()==="https:"}function xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ry(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sy()||Rb()||"connection"in navigator)?navigator.onLine:!0}function oy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=lc()||x0()}get(){return ry()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mc(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class D0{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ay=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cy=new gr(3e4,6e4);function vi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vn(t,e,n,i,s={}){return P0(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const u=ls(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},r);return Sb()||(c.referrerPolicy="no-referrer"),D0.fetch()(await N0(t,t.config.apiHost,n,u),c)})}async function P0(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},uy),e);try{const s=new hy(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Or(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const u=r.ok?o.errorMessage:o.error.message,[a,c]=u.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Or(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Or(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Or(t,"user-disabled",o);const l=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _c(t,l,c);yt(t,l)}}catch(s){if(s instanceof mn)throw s;yt(t,"network-request-failed",{message:String(s)})}}async function eu(t,e,n,i,s={}){const r=await Vn(t,e,n,i,s);return"mfaPendingCredential"in r&&yt(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function N0(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?mc(t.config,s):`${t.config.apiScheme}://${s}`;return ay.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function ly(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Rt(this.auth,"network-request-failed")),cy.get())})}}function Or(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Rt(t,e,i);return s.customData._tokenResponse=n,s}function Eh(t){return t!==void 0&&t.enterprise!==void 0}class dy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ly(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fy(t,e){return Vn(t,"GET","/v2/recaptchaConfig",vi(t,e))}/**
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
 */async function py(t,e){return Vn(t,"POST","/v1/accounts:delete",e)}async function ho(t,e){return Vn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _y(t,e=!1){const n=Ue(t),i=await n.getIdToken(e),s=bc(i);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ns(Pu(s.auth_time)),issuedAtTime:Ns(Pu(s.iat)),expirationTime:Ns(Pu(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pu(t){return Number(t)*1e3}function bc(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Qr("JWT malformed, contained fewer than 3 sections"),null;try{const s=uo(n);return s?JSON.parse(s):(Qr("Failed to decode base64 JWT payload"),null)}catch(s){return Qr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wh(t){const e=bc(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof mn&&gy(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function gy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class my{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ka{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fo(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Js(t,ho(n,{idToken:i}));H(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?O0(r.providerUserInfo):[],u=yy(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(u!=null&&u.length),l=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:u,metadata:new ka(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function by(t){const e=Ue(t);await fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yy(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function O0(t){return t.map(e=>{var{providerId:n}=e,i=pc(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function vy(t,e){const n=await P0(t,{},async()=>{const i=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await N0(t,s,"/v1/token",`key=${r}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",D0.fetch()(o,{method:"POST",headers:u,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ky(t,e){return Vn(t,"POST","/v2/accounts:revokeToken",vi(t,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=wh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await vy(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ui;return i&&(H(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function kn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new my(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ka(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _y(this,e)}reload(){return by(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await fo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await Js(this,py(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,u,a,c,l;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(u=n.tenantId)!==null&&u!==void 0?u:void 0,k=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:C,emailVerified:x,isAnonymous:M,providerData:$,stsTokenManager:K}=n;H(C&&K,e,"internal-error");const ne=Ui.fromJSON(this.name,K);H(typeof C=="string",e,"internal-error"),kn(h,e.name),kn(d,e.name),H(typeof x=="boolean",e,"internal-error"),H(typeof M=="boolean",e,"internal-error"),kn(f,e.name),kn(p,e.name),kn(b,e.name),kn(k,e.name),kn(A,e.name),kn(w,e.name);const Te=new Tt({uid:C,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:M,photoURL:p,phoneNumber:f,tenantId:b,stsTokenManager:ne,createdAt:A,lastLoginAt:w});return $&&Array.isArray($)&&(Te.providerData=$.map(Pe=>Object.assign({},Pe))),k&&(Te._redirectEventId=k),Te}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ui;s.updateFromServerResponse(n);const r=new Tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await fo(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];H(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?O0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),u=new Ui;u.updateFromIdToken(i);const a=new Tt({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ka(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(a,c),a}}/**
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
 */const Ch=new Map;function an(t){pn(t instanceof Function,"Expected a class definition");let e=Ch.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ch.set(t,e),e)}/**
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
 */class F0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F0.type="NONE";const Ih=F0;/**
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
 */function Zr(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Zr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Zr("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ho(this.auth,{idToken:e}).catch(()=>{});return n?Tt._fromGetAccountInfoResponse(this.auth,n,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Bi(an(Ih),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||an(Ih);const o=Zr(i,e.config.apiKey,e.name);let u=null;for(const c of n)try{const l=await c._get(o);if(l){let h;if(typeof l=="string"){const d=await ho(e,{idToken:l}).catch(()=>{});if(!d)break;h=await Tt._fromGetAccountInfoResponse(e,d,l)}else h=Tt._fromJSON(e,l);c!==r&&(u=h),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new Bi(r,e,i):(r=a[0],u&&await r._set(o,u.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Bi(r,e,i))}}/**
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
 */function Th(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z0(e))return"Blackberry";if(q0(e))return"Webos";if(L0(e))return"Safari";if((e.includes("chrome/")||$0(e))&&!e.includes("edge/"))return"Chrome";if(B0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function M0(t=et()){return/firefox\//i.test(t)}function L0(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $0(t=et()){return/crios\//i.test(t)}function U0(t=et()){return/iemobile/i.test(t)}function B0(t=et()){return/android/i.test(t)}function z0(t=et()){return/blackberry/i.test(t)}function q0(t=et()){return/webos/i.test(t)}function yc(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xy(t=et()){var e;return yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ey(){return Db()&&document.documentMode===10}function W0(t=et()){return yc(t)||B0(t)||q0(t)||z0(t)||/windows phone/i.test(t)||U0(t)}/**
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
 */function j0(t,e=[]){let n;switch(t){case"Browser":n=Th(et());break;case"Worker":n=`${Th(et())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${i}`}/**
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
 */class wy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,u)=>{try{const a=e(r);o(a)}catch(a){u(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Cy(t,e={}){return Vn(t,"GET","/v2/passwordPolicy",vi(t,e))}/**
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
 */const Iy=6;class Ty{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Iy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,u;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(u=a.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),a}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Ay{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ah(this),this.idTokenSubscription=new Ah(this),this.beforeStateQueue=new wy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ho(this,{idToken:e}),i=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===u)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Un(this));const n=e?Ue(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cy(this),n=new Ty(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _r("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ky(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(u,this,"internal-error"),u.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,i,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ny(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ki(t){return Ue(t)}class Ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=zb(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sy(t){tu=t}function H0(t){return tu.loadJS(t)}function Ry(){return tu.recaptchaEnterpriseScript}function Dy(){return tu.gapiScript}function Py(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ny{constructor(){this.enterprise=new Oy}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Oy{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Fy="recaptcha-enterprise",V0="NO_RECAPTCHA";class My{constructor(e){this.type=Fy,this.auth=ki(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,u)=>{fy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const c=new dy(a);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(a=>{u(a)})})}function s(r,o,u){const a=window.grecaptcha;Eh(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(V0)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ny().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(u=>{if(!n&&Eh(window.grecaptcha))s(u,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Ry();a.length!==0&&(a+=u),H0(a).then(()=>{s(u,r,o)}).catch(c=>{o(c)})}}).catch(u=>{o(u)})})}}async function Sh(t,e,n,i=!1,s=!1){const r=new My(t);let o;if(s)o=V0;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const u=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const a=u.phoneEnrollmentInfo.phoneNumber,c=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const a=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return i?Object.assign(u,{captchaResp:o}):Object.assign(u,{captchaResponse:o}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Rh(t,e,n,i,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Sh(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Sh(t,e,n,n==="getOobCode");return i(t,u)}else return Promise.reject(o)})}/**
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
 */function Ly(t,e){const n=Xo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ai(r,e??{}))return s;yt(s,"already-initialized")}return n.initialize({options:e})}function $y(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Uy(t,e,n){const i=ki(t);H(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=G0(e),{host:o,port:u}=By(e),a=u===null?"":`:${u}`,c={url:`${r}//${o}${a}/`},l=Object.freeze({host:o,port:u,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){H(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),H(ai(c,i.config.emulator)&&ai(l,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=l,i.settings.appVerificationDisabledForTesting=!0,zy()}function G0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function By(t){const e=G0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Dh(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Dh(o)}}}function Dh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function qy(t,e){return Vn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Wy(t,e){return eu(t,"POST","/v1/accounts:signInWithPassword",vi(t,e))}/**
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
 */async function jy(t,e){return eu(t,"POST","/v1/accounts:signInWithEmailLink",vi(t,e))}async function Hy(t,e){return eu(t,"POST","/v1/accounts:signInWithEmailLink",vi(t,e))}/**
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
 */class Xs extends vc{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xs(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Xs(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rh(e,n,"signInWithPassword",Wy);case"emailLink":return jy(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rh(e,i,"signUpPassword",qy);case"emailLink":return Hy(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zi(t,e){return eu(t,"POST","/v1/accounts:signInWithIdp",vi(t,e))}/**
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
 */const Vy="http://localhost";class li extends vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=pc(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new li(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,zi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:Vy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ls(n)}return e}}/**
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
 */function Gy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ky(t){const e=Ss(Rs(t)).link,n=e?Ss(Rs(e)).deep_link_id:null,i=Ss(Rs(t)).deep_link_id;return(i?Ss(Rs(i)).link:null)||i||n||e||t}class kc{constructor(e){var n,i,s,r,o,u;const a=Ss(Rs(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,l=(i=a.oobCode)!==null&&i!==void 0?i:null,h=Gy((s=a.mode)!==null&&s!==void 0?s:null);H(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=(r=a.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=a.lang)!==null&&o!==void 0?o:null,this.tenantId=(u=a.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=Ky(e);try{return new kc(n)}catch{return null}}}/**
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
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return Xs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=kc.parseLink(n);return H(i,"argument-error"),Xs._fromEmailAndCode(e,i.code,i.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends mr{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class on extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return li._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return on.credential(n,i)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
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
 */class Tn extends mr{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class An extends mr{constructor(){super("twitter.com")}static credential(e,n){return li._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return An.credential(n,i)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
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
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Tt._fromIdTokenResponse(e,i,s),o=Ph(i);return new Qi({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Ph(i);return new Qi({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Ph(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class po extends mn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new po(e,n,i,s)}}function K0(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(t,r,e,i):r})}async function Yy(t,e,n=!1){const i=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",i)}/**
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
 */async function Qy(t,e,n=!1){const{auth:i}=t;if(lt(i.app))return Promise.reject(Un(i));const s="reauthenticate";try{const r=await Js(t,K0(i,s,e,t),n);H(r.idToken,i,"internal-error");const o=bc(r.idToken);H(o,i,"internal-error");const{sub:u}=o;return H(t.uid===u,i,"user-mismatch"),Qi._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&yt(i,"user-mismatch"),r}}/**
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
 */async function Y0(t,e,n=!1){if(lt(t.app))return Promise.reject(Un(t));const i="signIn",s=await K0(t,i,e),r=await Qi._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Zy(t,e){return Y0(ki(t),e)}/**
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
 */async function Jy(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Xy(t,e,n){return lt(t.app)?Promise.reject(Un(t)):Zy(Ue(t),hs.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Jy(t),i})}function ev(t,e,n,i){return Ue(t).onIdTokenChanged(e,n,i)}function tv(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function nv(t){return Ue(t).signOut()}const _o="__sak";/**
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
 */class Q0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iv=1e3,sv=10;class Z0 extends Q0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,a)=>{this.notifyListeners(o,a)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ey()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sv):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},iv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Z0.type="LOCAL";const rv=Z0;/**
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
 */class J0 extends Q0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J0.type="SESSION";const X0=J0;/**
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
 */function ov(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new nu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(o).map(async c=>c(n.origin,r)),a=await ov(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nu.receivers=[];/**
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
 */function Ec(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((u,a)=>{const c=Ec("",20);s.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),u(d.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function av(t){Qt().location.href=t}/**
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
 */function ep(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function cv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hv(){return ep()?self:null}/**
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
 */const tp="firebaseLocalStorageDb",dv=1,go="firebaseLocalStorage",np="fbase_key";class br{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function fv(){const t=indexedDB.deleteDatabase(tp);return new br(t).toPromise()}function xa(){const t=indexedDB.open(tp,dv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(go,{keyPath:np})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(go)?e(i):(i.close(),await fv(),e(await xa()))})})}async function Nh(t,e,n){const i=iu(t,!0).put({[np]:e,value:n});return new br(i).toPromise()}async function pv(t,e){const n=iu(t,!1).get(e),i=await new br(n).toPromise();return i===void 0?null:i.value}function Oh(t,e){const n=iu(t,!0).delete(e);return new br(n).toPromise()}const _v=800,gv=3;class ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>gv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nu._getInstance(hv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cv(),!this.activeServiceWorker)return;this.sender=new uv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await Nh(e,_o,"1"),await Oh(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Nh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>pv(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=iu(s,!1).getAll();return new br(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ip.type="LOCAL";const mv=ip;new gr(3e4,6e4);/**
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
 */function sp(t,e){return e?an(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wc extends vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bv(t){return Y0(t.auth,new wc(t),t.bypassAuthState)}function yv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Qy(n,new wc(t),t.bypassAuthState)}async function vv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Yy(n,new wc(t),t.bypassAuthState)}/**
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
 */class rp{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:u}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bv;case"linkViaPopup":case"linkViaRedirect":return vv;case"reauthViaPopup":case"reauthViaRedirect":return yv;default:yt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kv=new gr(2e3,1e4);async function xv(t,e,n){if(lt(t.app))return Promise.reject(Rt(t,"operation-not-supported-in-this-environment"));const i=ki(t);iy(t,e,xc);const s=sp(i,n);return new ti(i,"signInViaPopup",e,s).executeNotNull()}class ti extends rp{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kv.get())};e()}}ti.currentPopupAction=null;/**
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
 */const Ev="pendingRedirect",Jr=new Map;class wv extends rp{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const i=await Cv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cv(t,e){const n=Av(e),i=Tv(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Iv(t,e){Jr.set(t._key(),e)}function Tv(t){return an(t._redirectPersistence)}function Av(t){return Zr(Ev,t.config.apiKey,t.name)}async function Sv(t,e,n=!1){if(lt(t.app))return Promise.reject(Un(t));const i=ki(t),s=sp(i,e),o=await new wv(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Rv=10*60*1e3;class Dv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!op(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(e))}saveEventToCache(e){this.cachedEventUids.add(Fh(e)),this.lastProcessedEventTime=Date.now()}}function Fh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function op({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return op(t);default:return!1}}/**
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
 */async function Nv(t,e={}){return Vn(t,"GET","/v1/projects",e)}/**
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
 */const Ov=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fv=/^https?/;async function Mv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nv(t);for(const n of e)try{if(Lv(n))return}catch{}yt(t,"unauthorized-domain")}function Lv(t){const e=va(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Fv.test(n))return!1;if(Ov.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const $v=new gr(3e4,6e4);function Mh(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Uv(t){return new Promise((e,n)=>{var i,s,r;function o(){Mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mh(),n(Rt(t,"network-request-failed"))},timeout:$v.get()})}if(!((s=(i=Qt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Qt().gapi)===null||r===void 0)&&r.load)o();else{const u=Py("iframefcb");return Qt()[u]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},H0(`${Dy()}?onload=${u}`).catch(a=>n(a))}}).catch(e=>{throw Xr=null,e})}let Xr=null;function Bv(t){return Xr=Xr||Uv(t),Xr}/**
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
 */const zv=new gr(5e3,15e3),qv="__/auth/iframe",Wv="emulator/auth/iframe",jv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vv(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mc(e,Wv):`https://${t.config.authDomain}/${qv}`,i={apiKey:e.apiKey,appName:t.name,v:yi},s=Hv.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ls(i).slice(1)}`}async function Gv(t){const e=await Bv(t),n=Qt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Vv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),u=Qt().setTimeout(()=>{r(o)},zv.get());function a(){Qt().clearTimeout(u),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
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
 */const Kv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yv=500,Qv=600,Zv="_blank",Jv="http://localhost";class Lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xv(t,e,n,i=Yv,s=Qv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const a=Object.assign(Object.assign({},Kv),{width:i.toString(),height:s.toString(),top:r,left:o}),c=et().toLowerCase();n&&(u=$0(c)?Zv:n),M0(c)&&(e=e||Jv,a.scrollbars="yes");const l=Object.entries(a).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(xy(c)&&u!=="_self")return e3(e||"",u),new Lh(null);const h=window.open(e||"",u,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Lh(h)}function e3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const t3="__/auth/handler",n3="emulator/auth/handler",i3=encodeURIComponent("fac");async function $h(t,e,n,i,s,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:yi,eventId:s};if(e instanceof xc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries({}))o[l]=h}if(e instanceof mr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const l of Object.keys(u))u[l]===void 0&&delete u[l];const a=await t._getAppCheckToken(),c=a?`#${i3}=${encodeURIComponent(a)}`:"";return`${s3(t)}?${ls(u).slice(1)}${c}`}function s3({config:t}){return t.emulator?mc(t,n3):`https://${t.authDomain}/${t3}`}/**
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
 */const Nu="webStorageSupport";class r3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=X0,this._completeRedirectFn=Sv,this._overrideRedirectResult=Iv}async _openPopup(e,n,i,s){var r;pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await $h(e,n,i,va(),s);return Xv(e,o,Ec())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await $h(e,n,i,va(),s);return av(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(pn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Gv(e),i=new Dv(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nu,{type:Nu},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Nu];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return W0()||L0()||yc()}}const o3=r3;var Uh="@firebase/auth",Bh="1.10.1";/**
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
 */class u3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function a3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c3(t){ci(new qn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=i.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j0(t)},c=new Ay(i,s,r,a);return $y(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ci(new qn("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(i=>new u3(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Uh,Bh,a3(t)),Yt(Uh,Bh,"esm2017")}/**
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
 */const l3=5*60,h3=v0("authIdTokenMaxAge")||l3;let zh=null;const d3=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>h3)return;const s=n==null?void 0:n.token;zh!==s&&(zh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function f3(t=fc()){const e=Xo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ly(t,{popupRedirectResolver:o3,persistence:[mv,rv,X0]}),i=v0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=d3(r.toString());tv(n,o,()=>o(n.currentUser)),ev(n,u=>o(u))}}const s=m0("auth");return s&&Uy(n,`http://${s}`),n}function p3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Sy({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Rt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",p3().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c3("Browser");var qh={};const Wh="@firebase/database",jh="1.0.14";/**
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
 */let up="";function _3(t){up=t}/**
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
 */class g3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class m3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ap=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new g3(e)}}catch{}return new m3},ni=ap("localStorage"),b3=ap("sessionStorage");/**
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
 */const qi=new hc("@firebase/database"),y3=function(){let t=1;return function(){return t++}}(),cp=function(t){const e=jb(t),n=new Bb;n.update(e);const i=n.digest();return ac.encodeByteArray(i)},yr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=yr.apply(null,i):typeof i=="object"?e+=Le(i):e+=i,e+=" "}return e};let Os=null,Hh=!0;const v3=function(t,e){R(!0,"Can't turn on custom loggers persistently."),qi.logLevel=le.VERBOSE,Os=qi.log.bind(qi)},ze=function(...t){if(Hh===!0&&(Hh=!1,Os===null&&b3.get("logging_enabled")===!0&&v3()),Os){const e=yr.apply(null,t);Os(e)}},vr=function(t){return function(...e){ze(t,...e)}},Ea=function(...t){const e="FIREBASE INTERNAL ERROR: "+yr(...t);qi.error(e)},_n=function(...t){const e=`FIREBASE FATAL ERROR: ${yr(...t)}`;throw qi.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+yr(...t);qi.warn(e)},k3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},x3=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zi="[MIN_NAME]",hi="[MAX_NAME]",xi=function(t,e){if(t===e)return 0;if(t===Zi||e===hi)return-1;if(e===Zi||t===hi)return 1;{const n=Vh(t),i=Vh(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},E3=function(t,e){return t===e?0:t<e?-1:1},bs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Le(e))},Ic=function(t){if(typeof t!="object"||t===null)return Le(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Le(e[i]),n+=":",n+=Ic(t[e[i]]);return n+="}",n},lp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hp=function(t){R(!Cc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,u,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(u=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=u+i,o=Math.round(t*Math.pow(2,n-u)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const l=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(l.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},w3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},C3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function I3(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const T3=new RegExp("^-?(0*)\\d{1,10}$"),A3=-2147483648,S3=2147483647,Vh=function(t){if(T3.test(t)){const e=Number(t);if(e>=A3&&e<=S3)return e}return null},ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},R3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class D3{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,lt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class P3{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}eo.OWNER="owner";/**
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
 */const Tc="5",dp="v",fp="s",pp="r",_p="f",gp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mp="ls",bp="p",wa="ac",yp="websocket",vp="long_polling";/**
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
 */class kp{constructor(e,n,i,s,r=!1,o="",u=!1,a=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=u,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function N3(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xp(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let i;if(e===yp)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vp)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);N3(t)&&(n.ns=t.namespace);const s=[];return We(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class O3{constructor(){this.counters_={}}incrementCounter(e,n=1){Jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Eb(this.counters_)}}/**
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
 */const Ou={},Fu={};function Ac(t){const e=t.toString();return Ou[e]||(Ou[e]=new O3),Ou[e]}function F3(t,e){const n=t.toString();return Fu[n]||(Fu[n]=e()),Fu[n]}/**
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
 */class M3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ds(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Gh="start",L3="close",$3="pLPCommand",U3="pRTLPCB",Ep="id",wp="pw",Cp="ser",B3="cb",z3="seg",q3="ts",W3="d",j3="dframe",Ip=1870,Tp=30,H3=Ip-Tp,V3=25e3,G3=3e4;class Ni{constructor(e,n,i,s,r,o,u){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vr(e),this.stats_=Ac(n),this.urlFn=a=>(this.appCheckToken&&(a[wa]=this.appCheckToken),xp(n,vp,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new M3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(G3)),x3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sc((...r)=>{const[o,u,a,c,l]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gh)this.id=u,this.password=a;else if(o===L3)u?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(u,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,u]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,u)},()=>{this.onClosed_()},this.urlFn);const i={};i[Gh]="t",i[Cp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[B3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[dp]=Tc,this.transportSessionId&&(i[fp]=this.transportSessionId),this.lastSessionId&&(i[mp]=this.lastSessionId),this.applicationId&&(i[bp]=this.applicationId),this.appCheckToken&&(i[wa]=this.appCheckToken),typeof location<"u"&&location.hostname&&gp.test(location.hostname)&&(i[pp]=_p);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ni.forceAllow_=!0}static forceDisallow(){Ni.forceDisallow_=!0}static isAvailable(){return Ni.forceAllow_?!0:!Ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!w3()&&!C3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=_0(n),s=lp(i,H3);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[j3]="t",i[Ep]=e,i[wp]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sc{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=y3(),window[$3+this.uniqueCallbackIdentifier]=e,window[U3+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(u){ze("frame writing exception"),u.stack&&ze(u.stack),ze(u)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ep]=this.myID,e[wp]=this.myPW,e[Cp]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tp+i.length<=Ip;){const o=this.pendingSegs.shift();i=i+"&"+z3+s+"="+o.seg+"&"+q3+s+"="+o.ts+"&"+W3+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(V3)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const K3=16384,Y3=45e3;let mo=null;typeof MozWebSocket<"u"?mo=MozWebSocket:typeof WebSocket<"u"&&(mo=WebSocket);class Ct{constructor(e,n,i,s,r,o,u){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vr(this.connId),this.stats_=Ac(n),this.connURL=Ct.connectionURL_(n,o,u,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[dp]=Tc,typeof location<"u"&&location.hostname&&gp.test(location.hostname)&&(o[pp]=_p),n&&(o[fp]=n),i&&(o[mp]=i),s&&(o[wa]=s),r&&(o[bp]=r),xp(e,yp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let i;Pb(),this.mySock=new mo(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&mo!==null&&!Ct.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Qs(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=lp(n,K3);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y3))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
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
 */class er{static get ALL_TRANSPORTS(){return[Ni,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ct&&Ct.isAvailable();let i=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ct];else{const s=this.transports_=[];for(const r of er.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);er.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}er.globalTransportInitialized_=!1;/**
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
 */const Q3=6e4,Z3=5e3,J3=10*1024,X3=100*1024,Mu="t",Kh="d",ek="s",Yh="r",tk="e",Qh="o",Zh="a",Jh="n",Xh="p",nk="h";class ik{constructor(e,n,i,s,r,o,u,a,c,l){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=u,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vr("c:"+this.id+":"),this.transportManager_=new er(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>X3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>J3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mu in e){const n=e[Mu];n===Zh?this.upgradeIfSecondaryHealthy_():n===Yh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bs("t",e),i=bs("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bs("t",e),i=bs("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bs(Mu,e);if(Kh in e){const i=e[Kh];if(n===nk){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Jh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ek?this.onConnectionShutdown_(i):n===Yh?this.onReset_(i):n===tk?Ea("Server Error: "+i):n===Qh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ea("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tc!==i&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Q3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Z3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ap{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Sp{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bo extends Sp{static getInstance(){return new bo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ed=32,td=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new he("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function Rc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function tr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function xe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof he)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new he(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function st(t,e){const n=J(t),i=J(e);if(n===null)return e;if(n===i)return st(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rk(t,e){const n=tr(t,0),i=tr(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=xi(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Dc(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function gt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ok{constructor(e,n){this.errorPrefix_=n,this.parts_=tr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Jo(this.parts_[i]);Dp(this)}}function uk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jo(e),Dp(t)}function ak(t){const e=t.parts_.pop();t.byteLength_-=Jo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dp(t){if(t.byteLength_>td)throw new Error(t.errorPrefix_+"has a key path longer than "+td+" bytes ("+t.byteLength_+").");if(t.parts_.length>ed)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ed+") or object contains a cycle "+Zn(t))}function Zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Pc extends Sp{static getInstance(){return new Pc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ys=1e3,ck=60*5*1e3,nd=30*1e3,lk=1.3,hk=3e4,dk="server_kill",id=3;class hn extends Ap{constructor(e,n,i,s,r,o,u,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=u,this.authOverride_=a,this.id=hn.nextPersistentConnectionId_++,this.log_=vr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ys,this.maxReconnectDelay_=ck,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Le(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new pr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const u=o.d;o.s==="ok"?n.resolve(u):n.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const u={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,u),this.connected_&&this.sendListen_(u)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,u=>{const a=u.d,c=u.s;hn.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",u),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jt(e,"w")){const i=Yi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ub(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$b(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ea("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hk&&(this.reconnectDelay_=ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+hn.nextConnectionId_++,r=this.lastSessionId;let o=!1,u=null;const a=function(){u?u.close():(o=!0,i())},c=function(h){R(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,u=new ik(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Xe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(dk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Xe(h),a())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pa(this.interruptReasons_)&&(this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Ic(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new he(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=id&&(this.reconnectDelay_=nd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=id&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+up.replace(/\./g,"-")]=1,lc()?e["framework.cordova"]=1:x0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return pa(this.interruptReasons_)&&e}}hn.nextPersistentConnectionId_=0;hn.nextConnectionId_=0;/**
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
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
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
 */class su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new X(Zi,e),s=new X(Zi,n);return this.compare(i,s)!==0}minPost(){return X.MIN}}/**
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
 */let Fr;class Pp extends su{static get __EMPTY_NODE(){return Fr}static set __EMPTY_NODE(e){Fr=e}compare(e,n){return xi(e.name,n.name)}isDefinedOn(e){throw cs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(hi,Fr)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Fr)}toString(){return".key"}}const Wi=new Pp;/**
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
 */class Mr{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Fe.RED,this.left=s??rt.EMPTY_NODE,this.right=r??rt.EMPTY_NODE}copy(e,n,i,s,r){return new Fe(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class fk{copy(e,n,i,s,r){return this}insert(e,n,i){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Mr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Mr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Mr(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new fk;/**
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
 */function pk(t,e){return xi(t.name,e.name)}function Nc(t,e){return xi(t,e)}/**
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
 */let Ca;function _k(t){Ca=t}const Np=function(t){return typeof t=="number"?"number:"+hp(t):"string:"+t},Op=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jt(e,".sv"),"Priority must be a string or number.")}else R(t===Ca||t.isEmpty(),"priority of unexpected type.");R(t===Ca||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sd;class Oe{static set __childrenNodeConstructor(e){sd=e}static get __childrenNodeConstructor(){return sd}constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Op(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:J(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=J(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(R(i!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Np(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hp(this.value_):e+=this.value_,this.lazyHash_=cp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Oe.VALUE_TYPE_ORDER.indexOf(n),r=Oe.VALUE_TYPE_ORDER.indexOf(i);return R(s>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fp,Mp;function gk(t){Fp=t}function mk(t){Mp=t}class bk extends su{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?xi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(hi,new Oe("[PRIORITY-POST]",Mp))}makePost(e,n){const i=Fp(e);return new X(n,new Oe("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ee=new bk;/**
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
 */const yk=Math.log(2);class vk{constructor(e){const n=r=>parseInt(Math.log(r)/yk,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yo=function(t,e,n,i){t.sort(e);const s=function(a,c){const l=c-a;let h,d;if(l===0)return null;if(l===1)return h=t[a],d=n?n(h):h,new Fe(d,h.node,Fe.BLACK,null,null);{const f=parseInt(l/2,10)+a,p=s(a,f),b=s(f+1,c);return h=t[f],d=n?n(h):h,new Fe(d,h.node,Fe.BLACK,p,b)}},r=function(a){let c=null,l=null,h=t.length;const d=function(p,b){const k=h-p,A=h;h-=p;const w=s(k+1,A),C=t[k],x=n?n(C):C;f(new Fe(x,C.node,b,null,w))},f=function(p){c?(c.left=p,c=p):(l=p,c=p)};for(let p=0;p<a.count;++p){const b=a.nextBitIsOne(),k=Math.pow(2,a.count-(p+1));b?d(k,Fe.BLACK):(d(k,Fe.BLACK),d(k,Fe.RED))}return l},o=new vk(t.length),u=r(o);return new rt(i||e,u)};/**
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
 */let Lu;const Si={};class cn{static get Default(){return R(Si&&Ee,"ChildrenNode.ts has not been loaded"),Lu=Lu||new cn({".priority":Si},{".priority":Ee}),Lu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return Jt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let u;s?u=yo(i,e.getCompare()):u=Si;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=u,new cn(l,c)}addToIndexes(e,n){const i=ao(this.indexes_,(s,r)=>{const o=Yi(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),s===Si)if(o.isDefinedOn(e.node)){const u=[],a=n.getIterator(X.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&u.push(c),c=a.getNext();return u.push(e),yo(u,o.getCompare())}else return Si;else{const u=n.get(e.name);let a=s;return u&&(a=a.remove(new X(e.name,u))),a.insert(e,e.node)}});return new cn(i,this.indexSet_)}removeFromIndexes(e,n){const i=ao(this.indexes_,s=>{if(s===Si)return s;{const r=n.get(e.name);return r?s.remove(new X(e.name,r)):s}});return new cn(i,this.indexSet_)}}/**
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
 */let vs;class V{static get EMPTY_NODE(){return vs||(vs=new V(new rt(Nc),null,cn.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Op(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vs}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vs:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new X(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?vs:this.priorityNode_;return new V(s,o,r)}}updateChild(e,n){const i=J(e);if(i===null)return n;{R(J(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(me(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ee,(o,u)=>{n[o]=u.val(e),i++,r&&V.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const u in n)o[u]=n[u];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Np(this.getPriority().val())+":"),this.forEachChild(Ee,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":cp(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kr?-1:0}withIndex(e){if(e===Wi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ee),s=n.getIterator(Ee);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wi?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kk extends V{constructor(){super(new rt(Nc),V.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const kr=new kk;Object.defineProperties(X,{MIN:{value:new X(Zi,V.EMPTY_NODE)},MAX:{value:new X(hi,kr)}});Pp.__EMPTY_NODE=V.EMPTY_NODE;Oe.__childrenNodeConstructor=V;_k(kr);mk(kr);/**
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
 */const xk=!0;function Me(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,Me(e))}if(!(t instanceof Array)&&xk){const n=[];let i=!1;if(We(t,(o,u)=>{if(o.substring(0,1)!=="."){const a=Me(u);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new X(o,a)))}}),n.length===0)return V.EMPTY_NODE;const r=yo(n,pk,o=>o.name,Nc);if(i){const o=yo(n,Ee.getCompare());return new V(r,Me(e),new cn({".priority":o},{".priority":Ee}))}else return new V(r,Me(e),cn.Default)}else{let n=V.EMPTY_NODE;return We(t,(i,s)=>{if(Jt(t,i)&&i.substring(0,1)!=="."){const r=Me(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Me(e))}}gk(Me);/**
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
 */class Ek extends su{constructor(e){super(),this.indexPath_=e,R(!ee(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?xi(e.name,n.name):r}makePost(e,n){const i=Me(e),s=V.EMPTY_NODE.updateChild(this.indexPath_,i);return new X(n,s)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,kr);return new X(hi,e)}toString(){return tr(this.indexPath_,0).join("/")}}/**
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
 */class wk extends su{compare(e,n){const i=e.node.compareTo(n.node);return i===0?xi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const i=Me(e);return new X(n,i)}toString(){return".value"}}const Ck=new wk;/**
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
 */function Lp(t){return{type:"value",snapshotNode:t}}function Ji(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function nr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ir(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ik(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Oc{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const u=e.getImmediateChild(n);return u.getChild(s).equals(i.getChild(s))&&u.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(nr(n,u)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):u.isEmpty()?o.trackChildChange(Ji(n,i)):o.trackChildChange(ir(n,i,u))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Ee,(s,r)=>{n.hasChild(s)||i.trackChildChange(nr(s,r))}),n.isLeafNode()||n.forEachChild(Ee,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(ir(s,r,o))}else i.trackChildChange(Ji(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class sr{constructor(e){this.indexedFilter_=new Oc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sr.getStartPost_(e),this.endPost_=sr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new X(n,i))||(i=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=V.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(Ee,(o,u)=>{r.matches(new X(o,u))||(s=s.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Tk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new sr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new X(n,i))||(i=V.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const u=r.getNext();if(this.withinDirectionalStart(u))if(this.withinDirectionalEnd(u))s=s.updateImmediateChild(u.name,u.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const u=r.getNext();o<this.limit_&&this.withinDirectionalStart(u)&&this.withinDirectionalEnd(u)?o++:s=s.updateImmediateChild(u.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const u=e;R(u.numChildren()===this.limit_,"");const a=new X(n,i),c=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(u.hasChild(n)){const h=u.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||u.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(l&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(ir(n,i,h)),u.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(nr(n,h));const b=u.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ji(d.name,d.node)),b.updateImmediateChild(d.name,d.node)):b}}else return i.isEmpty()?e:l&&o(c,a)>=0?(r!=null&&(r.trackChildChange(nr(c.name,c.node)),r.trackChildChange(Ji(n,i))),u.updateImmediateChild(n,i).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
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
 */class Fc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zi}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Fc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ak(t){return t.loadsAllData()?new Oc(t.getIndex()):t.hasLimit()?new Tk(t):new sr(t)}function rd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===Ck?n="$value":t.index_===Wi?n="$key":(R(t.index_ instanceof Ek,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Le(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Le(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Le(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Le(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function od(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
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
 */class vo extends Ap{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=vr("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vo.getListenId_(e,i),u={};this.listens_[o]=u;const a=rd(e._queryParams);this.restRequest_(r+".json",a,(c,l)=>{let h=l;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Yi(this.listens_,o)===u){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=vo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=rd(e._queryParams),i=e._path.toString(),s=new pr;return this.restRequest_(i+".json",n,(r,o)=>{let u=o;r===404&&(u=null,r=null),r===null?(this.onDataUpdate_(i,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ls(n);this.log_("Sending REST request for "+o);const u=new XMLHttpRequest;u.onreadystatechange=()=>{if(i&&u.readyState===4){this.log_("REST Response for "+o+" received. status:",u.status,"response:",u.responseText);let a=null;if(u.status>=200&&u.status<300){try{a=Qs(u.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+u.responseText)}i(null,a)}else u.status!==401&&u.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+u.status),i(u.status);i=null}},u.open("GET",o,!0),u.send()})}}/**
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
 */class Sk{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ko(){return{value:null,children:new Map}}function $p(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=J(e);t.children.has(i)||t.children.set(i,ko());const s=t.children.get(i);e=me(e),$p(s,e,n)}}function Ia(t,e,n){t.value!==null?n(e,t.value):Rk(t,(i,s)=>{const r=new he(e.toString()+"/"+i);Ia(s,r,n)})}function Rk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Dk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const ud=10*1e3,Pk=30*1e3,Nk=5*60*1e3;class Ok{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Dk(e);const i=ud+(Pk-ud)*Math.random();Fs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;We(e,(s,r)=>{r>0&&Jt(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nk))}}/**
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
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function Mc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $c(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=At.ACK_USER_WRITE,this.source=Mc()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new xo(se(),n,this.revert)}}else return R(J(this.path)===e,"operationForChild called for unrelated child."),new xo(me(this.path),this.affectedTree,this.revert)}}/**
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
 */class rr{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new rr(this.source,se()):new rr(this.source,me(this.path))}}/**
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
 */class di{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=At.OVERWRITE}operationForChild(e){return ee(this.path)?new di(this.source,se(),this.snap.getImmediateChild(e)):new di(this.source,me(this.path),this.snap)}}/**
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
 */class Xi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=At.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new di(this.source,se(),n.value):new Xi(this.source,se(),n)}else return R(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class fi{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Fk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mk(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ik(o.childName,o.snapshotNode))}),ks(t,s,"child_removed",e,i,n),ks(t,s,"child_added",e,i,n),ks(t,s,"child_moved",r,i,n),ks(t,s,"child_changed",e,i,n),ks(t,s,"value",e,i,n),s}function ks(t,e,n,i,s,r){const o=i.filter(u=>u.type===n);o.sort((u,a)=>$k(t,u,a)),o.forEach(u=>{const a=Lk(t,u,r);s.forEach(c=>{c.respondsTo(u.type)&&e.push(c.createEvent(a,t.query_))})})}function Lk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $k(t,e,n){if(e.childName==null||n.childName==null)throw cs("Should only compare child_ events.");const i=new X(e.childName,e.snapshotNode),s=new X(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function ru(t,e){return{eventCache:t,serverCache:e}}function Ms(t,e,n,i){return ru(new fi(e,n,i),t.serverCache)}function Up(t,e,n,i){return ru(t.eventCache,new fi(e,n,i))}function Ta(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let $u;const Uk=()=>($u||($u=new rt(E3)),$u);class ge{static fromObject(e){let n=new ge(null);return We(e,(i,s)=>{n=n.set(new he(i),s)}),n}constructor(e,n=Uk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(ee(e))return null;{const i=J(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(me(e),n);return r!=null?{path:xe(new he(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=J(e),i=this.children.get(n);return i!==null?i.subtree(me(e)):new ge(null)}}set(e,n){if(ee(e))return new ge(n,this.children);{const i=J(e),r=(this.children.get(i)||new ge(null)).set(me(e),n),o=this.children.insert(i,r);return new ge(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=J(e),i=this.children.get(n);if(i){const s=i.remove(me(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ge(null):new ge(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=J(e),i=this.children.get(n);return i?i.get(me(e)):null}}setTree(e,n){if(ee(e))return n;{const i=J(e),r=(this.children.get(i)||new ge(null)).setTree(me(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ge(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(xe(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(ee(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(me(e),xe(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,i){if(ee(e))return this;{this.value&&i(n,this.value);const s=J(e),r=this.children.get(s);return r?r.foreachOnPath_(me(e),xe(n,s),i):new ge(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(xe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Dt{constructor(e){this.writeTree_=e}static empty(){return new Dt(new ge(null))}}function Ls(t,e,n){if(ee(e))return new Dt(new ge(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=st(s,e);return r=r.updateChild(o,n),new Dt(t.writeTree_.set(s,r))}else{const s=new ge(n),r=t.writeTree_.setTree(e,s);return new Dt(r)}}}function Aa(t,e,n){let i=t;return We(n,(s,r)=>{i=Ls(i,xe(e,s),r)}),i}function ad(t,e){if(ee(e))return Dt.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new Dt(n)}}function Sa(t,e){return Ei(t,e)!=null}function Ei(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(st(n.path,e)):null}function cd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{e.push(new X(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new X(i,s.value))}),e}function Bn(t,e){if(ee(e))return t;{const n=Ei(t,e);return n!=null?new Dt(new ge(n)):new Dt(t.writeTree_.subtree(e))}}function Ra(t){return t.writeTree_.isEmpty()}function es(t,e){return Bp(se(),t.writeTree_,e)}function Bp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Bp(xe(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(xe(t,".priority"),i)),n}}/**
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
 */function Uc(t,e){return jp(e,t)}function Bk(t,e,n,i,s){R(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ls(t.visibleWrites,e,n)),t.lastWriteId=i}function zk(t,e,n,i){R(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Aa(t.visibleWrites,e,n),t.lastWriteId=i}function qk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Wk(t,e){const n=t.allWrites.findIndex(u=>u.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const u=t.allWrites[o];u.visible&&(o>=n&&jk(u,i.path)?s=!1:gt(i.path,u.path)&&(r=!0)),o--}if(s){if(r)return Hk(t),!0;if(i.snap)t.visibleWrites=ad(t.visibleWrites,i.path);else{const u=i.children;We(u,a=>{t.visibleWrites=ad(t.visibleWrites,xe(i.path,a))})}return!0}else return!1}function jk(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(xe(t.path,n),e))return!0;return!1}function Hk(t){t.visibleWrites=zp(t.allWrites,Vk,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vk(t){return t.visible}function zp(t,e,n){let i=Dt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let u;if(r.snap)gt(n,o)?(u=st(n,o),i=Ls(i,u,r.snap)):gt(o,n)&&(u=st(o,n),i=Ls(i,se(),r.snap.getChild(u)));else if(r.children){if(gt(n,o))u=st(n,o),i=Aa(i,u,r.children);else if(gt(o,n))if(u=st(o,n),ee(u))i=Aa(i,se(),r.children);else{const a=Yi(r.children,J(u));if(a){const c=a.getChild(me(u));i=Ls(i,se(),c)}}}else throw cs("WriteRecord should have .snap or .children")}}return i}function qp(t,e,n,i,s){if(!i&&!s){const r=Ei(t.visibleWrites,e);if(r!=null)return r;{const o=Bn(t.visibleWrites,e);if(Ra(o))return n;if(n==null&&!Sa(o,se()))return null;{const u=n||V.EMPTY_NODE;return es(o,u)}}}else{const r=Bn(t.visibleWrites,e);if(!s&&Ra(r))return n;if(!s&&n==null&&!Sa(r,se()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(gt(c.path,e)||gt(e,c.path))},u=zp(t.allWrites,o,e),a=n||V.EMPTY_NODE;return es(u,a)}}}function Gk(t,e,n){let i=V.EMPTY_NODE;const s=Ei(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ee,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Bn(t.visibleWrites,e);return n.forEachChild(Ee,(o,u)=>{const a=es(Bn(r,new he(o)),u);i=i.updateImmediateChild(o,a)}),cd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Bn(t.visibleWrites,e);return cd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Kk(t,e,n,i,s){R(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=xe(e,n);if(Sa(t.visibleWrites,r))return null;{const o=Bn(t.visibleWrites,r);return Ra(o)?s.getChild(n):es(o,s.getChild(n))}}function Yk(t,e,n,i){const s=xe(e,n),r=Ei(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Bn(t.visibleWrites,s);return es(o,i.getNode().getImmediateChild(n))}else return null}function Qk(t,e){return Ei(t.visibleWrites,e)}function Zk(t,e,n,i,s,r,o){let u;const a=Bn(t.visibleWrites,e),c=Ei(a,se());if(c!=null)u=c;else if(n!=null)u=es(a,n);else return[];if(u=u.withIndex(o),!u.isEmpty()&&!u.isLeafNode()){const l=[],h=o.getCompare(),d=r?u.getReverseIteratorFrom(i,o):u.getIteratorFrom(i,o);let f=d.getNext();for(;f&&l.length<s;)h(f,i)!==0&&l.push(f),f=d.getNext();return l}else return[]}function Jk(){return{visibleWrites:Dt.empty(),allWrites:[],lastWriteId:-1}}function Eo(t,e,n,i){return qp(t.writeTree,t.treePath,e,n,i)}function Bc(t,e){return Gk(t.writeTree,t.treePath,e)}function ld(t,e,n,i){return Kk(t.writeTree,t.treePath,e,n,i)}function wo(t,e){return Qk(t.writeTree,xe(t.treePath,e))}function Xk(t,e,n,i,s,r){return Zk(t.writeTree,t.treePath,e,n,i,s,r)}function zc(t,e,n){return Yk(t.writeTree,t.treePath,e,n)}function Wp(t,e){return jp(xe(t.treePath,e),t.writeTree)}function jp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ex{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,ir(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,nr(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Ji(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,ir(i,e.snapshotNode,s.oldSnap));else throw cs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tx{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Hp=new tx;class qc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pi(this.viewCache_),r=Xk(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function nx(t){return{filter:t}}function ix(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sx(t,e,n,i,s){const r=new ex;let o,u;if(n.type===At.OVERWRITE){const c=n;c.source.fromUser?o=Da(t,e,c.path,c.snap,i,s,r):(R(c.source.fromServer,"Unknown source."),u=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=Co(t,e,c.path,c.snap,i,s,u,r))}else if(n.type===At.MERGE){const c=n;c.source.fromUser?o=ox(t,e,c.path,c.children,i,s,r):(R(c.source.fromServer,"Unknown source."),u=c.source.tagged||e.serverCache.isFiltered(),o=Pa(t,e,c.path,c.children,i,s,u,r))}else if(n.type===At.ACK_USER_WRITE){const c=n;c.revert?o=cx(t,e,c.path,i,s,r):o=ux(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===At.LISTEN_COMPLETE)o=ax(t,e,n.path,i,r);else throw cs("Unknown operation type: "+n.type);const a=r.getChanges();return rx(e,o,a),{viewCache:o,changes:a}}function rx(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ta(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Lp(Ta(e)))}}function Vp(t,e,n,i,s,r){const o=e.eventCache;if(wo(i,n)!=null)return e;{let u,a;if(ee(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pi(e),l=c instanceof V?c:V.EMPTY_NODE,h=Bc(i,l);u=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Eo(i,pi(e));u=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=J(n);if(c===".priority"){R(Wn(n)===1,"Can't have a priority with additional path components");const l=o.getNode();a=e.serverCache.getNode();const h=ld(i,n,l,a);h!=null?u=t.filter.updatePriority(l,h):u=o.getNode()}else{const l=me(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=ld(i,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(l,d):h=o.getNode().getImmediateChild(c)}else h=zc(i,c,e.serverCache);h!=null?u=t.filter.updateChild(o.getNode(),c,h,l,s,r):u=o.getNode()}}return Ms(e,u,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Co(t,e,n,i,s,r,o,u){const a=e.serverCache;let c;const l=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=l.updateFullNode(a.getNode(),i,null);else if(l.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(n,i);c=l.updateFullNode(a.getNode(),f,null)}else{const f=J(n);if(!a.isCompleteForPath(n)&&Wn(n)>1)return e;const p=me(n),k=a.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=l.updatePriority(a.getNode(),k):c=l.updateChild(a.getNode(),f,k,p,Hp,null)}const h=Up(e,c,a.isFullyInitialized()||ee(n),l.filtersNodes()),d=new qc(s,h,r);return Vp(t,h,n,s,d,u)}function Da(t,e,n,i,s,r,o){const u=e.eventCache;let a,c;const l=new qc(s,e,r);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Ms(e,c,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=Ms(e,c,u.isFullyInitialized(),u.isFiltered());else{const d=me(n),f=u.getNode().getImmediateChild(h);let p;if(ee(d))p=i;else{const b=l.getCompleteChild(h);b!=null?Rc(d)===".priority"&&b.getChild(Rp(d)).isEmpty()?p=b:p=b.updateChild(d,i):p=V.EMPTY_NODE}if(f.equals(p))a=e;else{const b=t.filter.updateChild(u.getNode(),h,p,d,l,o);a=Ms(e,b,u.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function hd(t,e){return t.eventCache.isCompleteForChild(e)}function ox(t,e,n,i,s,r,o){let u=e;return i.foreach((a,c)=>{const l=xe(n,a);hd(e,J(l))&&(u=Da(t,u,l,c,s,r,o))}),i.foreach((a,c)=>{const l=xe(n,a);hd(e,J(l))||(u=Da(t,u,l,c,s,r,o))}),u}function dd(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Pa(t,e,n,i,s,r,o,u){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;ee(n)?c=i:c=new ge(null).setTree(n,i);const l=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(l.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=dd(t,f,d);a=Co(t,a,new he(h),p,s,r,o,u)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!l.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),b=dd(t,p,d);a=Co(t,a,new he(h),b,s,r,o,u)}}),a}function ux(t,e,n,i,s,r,o){if(wo(s,n)!=null)return e;const u=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(ee(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Co(t,e,n,a.getNode().getChild(n),s,r,u,o);if(ee(n)){let c=new ge(null);return a.getNode().forEachChild(Wi,(l,h)=>{c=c.set(new he(l),h)}),Pa(t,e,n,c,s,r,u,o)}else return e}else{let c=new ge(null);return i.foreach((l,h)=>{const d=xe(n,l);a.isCompleteForPath(d)&&(c=c.set(l,a.getNode().getChild(d)))}),Pa(t,e,n,c,s,r,u,o)}}function ax(t,e,n,i,s){const r=e.serverCache,o=Up(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return Vp(t,o,n,i,Hp,s)}function cx(t,e,n,i,s,r){let o;if(wo(i,n)!=null)return e;{const u=new qc(i,e,s),a=e.eventCache.getNode();let c;if(ee(n)||J(n)===".priority"){let l;if(e.serverCache.isFullyInitialized())l=Eo(i,pi(e));else{const h=e.serverCache.getNode();R(h instanceof V,"serverChildren would be complete if leaf node"),l=Bc(i,h)}l=l,c=t.filter.updateFullNode(a,l,r)}else{const l=J(n);let h=zc(i,l,e.serverCache);h==null&&e.serverCache.isCompleteForChild(l)&&(h=a.getImmediateChild(l)),h!=null?c=t.filter.updateChild(a,l,h,me(n),u,r):e.eventCache.getNode().hasChild(l)?c=t.filter.updateChild(a,l,V.EMPTY_NODE,me(n),u,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eo(i,pi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||wo(i,se())!=null,Ms(e,c,o,t.filter.filtersNodes())}}/**
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
 */class lx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Oc(i.getIndex()),r=Ak(i);this.processor_=nx(r);const o=n.serverCache,u=n.eventCache,a=s.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,u.getNode(),null),l=new fi(a,o.isFullyInitialized(),s.filtersNodes()),h=new fi(c,u.isFullyInitialized(),r.filtersNodes());this.viewCache_=ru(h,l),this.eventGenerator_=new Fk(this.query_)}get query(){return this.query_}}function hx(t){return t.viewCache_.serverCache.getNode()}function dx(t,e){const n=pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function fd(t){return t.eventRegistrations_.length===0}function fx(t,e){t.eventRegistrations_.push(e)}function pd(t,e,n){const i=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function _d(t,e,n,i){e.type===At.MERGE&&e.source.queryId!==null&&(R(pi(t.viewCache_),"We should always have a full cache before handling merges"),R(Ta(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=sx(t.processor_,s,e,n,i);return ix(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Gp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function px(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(r,o)=>{i.push(Ji(r,o))}),n.isFullyInitialized()&&i.push(Lp(n.getNode())),Gp(t,i,n.getNode(),e)}function Gp(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Mk(t.eventGenerator_,e,n,s)}/**
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
 */let Io;class _x{constructor(){this.views=new Map}}function gx(t){R(!Io,"__referenceConstructor has already been defined"),Io=t}function mx(){return R(Io,"Reference.ts has not been loaded"),Io}function bx(t){return t.views.size===0}function Wc(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return R(r!=null,"SyncTree gave us an op for an invalid query."),_d(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(_d(o,e,n,i));return r}}function yx(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let u=Eo(n,s?i:null),a=!1;u?a=!0:i instanceof V?(u=Bc(n,i),a=!1):(u=V.EMPTY_NODE,a=!1);const c=ru(new fi(u,a,!1),new fi(i,s,!1));return new lx(e,c)}return o}function vx(t,e,n,i,s,r){const o=yx(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),fx(o,n),px(o,n)}function kx(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const u=jn(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(pd(c,n,i)),fd(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(pd(a,n,i)),fd(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return u&&!jn(t)&&r.push(new(mx())(e._repo,e._path)),{removed:r,events:o}}function Kp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ji(t,e){let n=null;for(const i of t.views.values())n=n||dx(i,e);return n}function Yp(t,e){if(e._queryParams.loadsAllData())return ou(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Qp(t,e){return Yp(t,e)!=null}function jn(t){return ou(t)!=null}function ou(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let To;function xx(t){R(!To,"__referenceConstructor has already been defined"),To=t}function Ex(){return R(To,"Reference.ts has not been loaded"),To}let wx=1;class gd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=Jk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zp(t,e,n,i,s){return Bk(t.pendingWriteTree_,e,n,i,s),s?fs(t,new di(Mc(),e,n)):[]}function Cx(t,e,n,i){zk(t.pendingWriteTree_,e,n,i);const s=ge.fromObject(n);return fs(t,new Xi(Mc(),e,s))}function Dn(t,e,n=!1){const i=qk(t.pendingWriteTree_,e);if(Wk(t.pendingWriteTree_,e)){let r=new ge(null);return i.snap!=null?r=r.set(se(),!0):We(i.children,o=>{r=r.set(new he(o),!0)}),fs(t,new xo(i.path,r,n))}else return[]}function uu(t,e,n){return fs(t,new di(Lc(),e,n))}function Ix(t,e,n){const i=ge.fromObject(n);return fs(t,new Xi(Lc(),e,i))}function Tx(t,e){return fs(t,new rr(Lc(),e))}function Ax(t,e,n){const i=Hc(t,n);if(i){const s=Vc(i),r=s.path,o=s.queryId,u=st(r,e),a=new rr($c(o),u);return Gc(t,r,a)}else return[]}function Na(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let u=[];if(o&&(e._queryIdentifier==="default"||Qp(o,e))){const a=kx(o,e,n,i);bx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(u=a.events,!s){const l=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>jn(f));if(l&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Dx(d);for(let p=0;p<f.length;++p){const b=f[p],k=b.query,A=e_(t,b);t.listenProvider_.startListening($s(k),Ao(t,k),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!i&&(l?t.listenProvider_.stopListening($s(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(au(d));t.listenProvider_.stopListening($s(d),f)}))}Px(t,c)}return u}function Sx(t,e,n,i){const s=Hc(t,i);if(s!=null){const r=Vc(s),o=r.path,u=r.queryId,a=st(o,e),c=new di($c(u),a,n);return Gc(t,o,c)}else return[]}function Rx(t,e,n,i){const s=Hc(t,i);if(s){const r=Vc(s),o=r.path,u=r.queryId,a=st(o,e),c=ge.fromObject(n),l=new Xi($c(u),a,c);return Gc(t,o,l)}else return[]}function md(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=st(d,s);r=r||ji(f,p),o=o||jn(f)});let u=t.syncPointTree_.get(s);u?(o=o||jn(u),r=r||ji(u,se())):(u=new _x,t.syncPointTree_=t.syncPointTree_.set(s,u));let a;r!=null?a=!0:(a=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const b=ji(p,se());b&&(r=r.updateImmediateChild(f,b))}));const c=Qp(u,e);if(!c&&!e._queryParams.loadsAllData()){const d=au(e);R(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Nx();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const l=Uc(t.pendingWriteTree_,s);let h=vx(u,e,n,l,r,a);if(!c&&!o&&!i){const d=Yp(u,e);h=h.concat(Ox(t,e,d))}return h}function jc(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,u)=>{const a=st(o,e),c=ji(u,a);if(c)return c});return qp(s,e,r,n,!0)}function fs(t,e){return Jp(e,t.syncPointTree_,null,Uc(t.pendingWriteTree_,se()))}function Jp(t,e,n,i){if(ee(t.path))return Xp(t,e,n,i);{const s=e.get(se());n==null&&s!=null&&(n=ji(s,se()));let r=[];const o=J(t.path),u=t.operationForChild(o),a=e.children.get(o);if(a&&u){const c=n?n.getImmediateChild(o):null,l=Wp(i,o);r=r.concat(Jp(u,a,c,l))}return s&&(r=r.concat(Wc(s,t,i,n))),r}}function Xp(t,e,n,i){const s=e.get(se());n==null&&s!=null&&(n=ji(s,se()));let r=[];return e.children.inorderTraversal((o,u)=>{const a=n?n.getImmediateChild(o):null,c=Wp(i,o),l=t.operationForChild(o);l&&(r=r.concat(Xp(l,u,a,c)))}),s&&(r=r.concat(Wc(s,t,i,n))),r}function e_(t,e){const n=e.query,i=Ao(t,n);return{hashFn:()=>(hx(e)||V.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Ax(t,n._path,i):Tx(t,n._path);{const r=I3(s,n);return Na(t,n,null,r)}}}}function Ao(t,e){const n=au(e);return t.queryToTagMap.get(n)}function au(t){return t._path.toString()+"$"+t._queryIdentifier}function Hc(t,e){return t.tagToQueryMap.get(e)}function Vc(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Gc(t,e,n){const i=t.syncPointTree_.get(e);R(i,"Missing sync point for query tag that we're tracking");const s=Uc(t.pendingWriteTree_,e);return Wc(i,n,s,null)}function Dx(t){return t.fold((e,n,i)=>{if(n&&jn(n))return[ou(n)];{let s=[];return n&&(s=Kp(n)),We(i,(r,o)=>{s=s.concat(o)}),s}})}function $s(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ex())(t._repo,t._path):t}function Px(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=au(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Nx(){return wx++}function Ox(t,e,n){const i=e._path,s=Ao(t,e),r=e_(t,n),o=t.listenProvider_.startListening($s(e),s,r.hashFn,r.onComplete),u=t.syncPointTree_.subtree(i);if(s)R(!jn(u.value),"If we're adding a query, it shouldn't be shadowed");else{const a=u.fold((c,l,h)=>{if(!ee(c)&&l&&jn(l))return[ou(l).query];{let d=[];return l&&(d=d.concat(Kp(l).map(f=>f.query))),We(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<a.length;++c){const l=a[c];t.listenProvider_.stopListening($s(l),Ao(t,l))}}return o}/**
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
 */class Kc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kc(n)}node(){return this.node_}}class Yc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Yc(this.syncTree_,n)}node(){return jc(this.syncTree_,this.path_)}}const Fx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bd=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Mx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Lx(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Mx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},Lx=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&R(!1,"Unexpected increment value: "+i);const s=e.node();if(R(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},t_=function(t,e,n,i){return Qc(e,new Yc(n,t),i)},n_=function(t,e,n){return Qc(t,new Kc(e),n)};function Qc(t,e,n){const i=t.getPriority().val(),s=bd(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,u=bd(o.getValue(),e,n);return u!==o.getValue()||s!==o.getPriority().val()?new Oe(u,Me(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Oe(s))),o.forEachChild(Ee,(u,a)=>{const c=Qc(a,e.getImmediateChild(u),n);c!==a&&(r=r.updateImmediateChild(u,c))}),r}}/**
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
 */class Zc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Jc(t,e){let n=e instanceof he?e:new he(e),i=t,s=J(n);for(;s!==null;){const r=Yi(i.node.children,s)||{children:{},childCount:0};i=new Zc(s,i,r),n=me(n),s=J(n)}return i}function ps(t){return t.node.value}function i_(t,e){t.node.value=e,Oa(t)}function s_(t){return t.node.childCount>0}function $x(t){return ps(t)===void 0&&!s_(t)}function cu(t,e){We(t.node.children,(n,i)=>{e(new Zc(n,t,i))})}function r_(t,e,n,i){n&&e(t),cu(t,s=>{r_(s,e,!0)})}function Ux(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xr(t){return new he(t.parent===null?t.name:xr(t.parent)+"/"+t.name)}function Oa(t){t.parent!==null&&Bx(t.parent,t.name,t)}function Bx(t,e,n){const i=$x(n),s=Jt(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Oa(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Oa(t))}/**
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
 */const zx=/[\[\].#$\/\u0000-\u001F\u007F]/,qx=/[\[\].#$\u0000-\u001F\u007F]/,Uu=10*1024*1024,Xc=function(t){return typeof t=="string"&&t.length!==0&&!zx.test(t)},o_=function(t){return typeof t=="string"&&t.length!==0&&!qx.test(t)},Wx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),o_(t)},jx=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Cc(t)||t&&typeof t=="object"&&Jt(t,".sv")},u_=function(t,e,n,i){i&&e===void 0||lu(Zo(t,"value"),e,n)},lu=function(t,e,n){const i=n instanceof he?new ok(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Zn(i)+" with contents = "+e.toString());if(Cc(e))throw new Error(t+"contains "+e.toString()+" "+Zn(i));if(typeof e=="string"&&e.length>Uu/3&&Jo(e)>Uu)throw new Error(t+"contains a string greater than "+Uu+" utf8 bytes "+Zn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(We(e,(o,u)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Xc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uk(i,o),lu(t,u,i),ak(i)}),s&&r)throw new Error(t+' contains ".value" child '+Zn(i)+" in addition to actual children.")}},Hx=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=tr(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Xc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rk);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&gt(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Vx=function(t,e,n,i){const s=Zo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];We(e,(o,u)=>{const a=new he(o);if(lu(s,u,xe(n,a)),Rc(a)===".priority"&&!jx(u))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Hx(s,r)},a_=function(t,e,n,i){if(!o_(n))throw new Error(Zo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gx=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),a_(t,e,n)},el=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Kx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wx(n))throw new Error(Zo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Yx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hu(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Dc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function c_(t,e,n){hu(t,n),l_(t,i=>Dc(i,e))}function Pt(t,e,n){hu(t,n),l_(t,i=>gt(i,e)||gt(e,i))}function l_(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Qx(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Qx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Os&&ze("event: "+n.toString()),ds(i)}}}/**
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
 */const Zx="repo_interrupt",Jx=25;class Xx{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ko(),this.transactionQueueTree_=new Zc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eE(t,e,n){if(t.stats_=Ac(t.repoInfo_),t.forceRestClient_||R3())t.server_=new vo(t.repoInfo_,(i,s,r,o)=>{yd(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new hn(t.repoInfo_,e,(i,s,r,o)=>{yd(t,i,s,r,o)},i=>{vd(t,i)},i=>{tE(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=F3(t.repoInfo_,()=>new Ok(t.stats_,t.server_)),t.infoData_=new Sk,t.infoSyncTree_=new gd({startListening:(i,s,r,o)=>{let u=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(u=uu(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),u},stopListening:()=>{}}),tl(t,"connected",!1),t.serverSyncTree_=new gd({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(u,a)=>{const c=o(u,a);Pt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function h_(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function du(t){return Fx({timestamp:h_(t)})}function yd(t,e,n,i,s){t.dataUpdateCount++;const r=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=ao(n,c=>Me(c));o=Rx(t.serverSyncTree_,r,a,s)}else{const a=Me(n);o=Sx(t.serverSyncTree_,r,a,s)}else if(i){const a=ao(n,c=>Me(c));o=Ix(t.serverSyncTree_,r,a)}else{const a=Me(n);o=uu(t.serverSyncTree_,r,a)}let u=r;o.length>0&&(u=ts(t,r)),Pt(t.eventQueue_,u,o)}function vd(t,e){tl(t,"connected",e),e===!1&&sE(t)}function tE(t,e){We(e,(n,i)=>{tl(t,n,i)})}function tl(t,e,n){const i=new he("/.info/"+e),s=Me(n);t.infoData_.updateSnapshot(i,s);const r=uu(t.infoSyncTree_,i,s);Pt(t.eventQueue_,i,r)}function nl(t){return t.nextWriteId_++}function nE(t,e,n,i,s){fu(t,"set",{path:e.toString(),value:n,priority:i});const r=du(t),o=Me(n,i),u=jc(t.serverSyncTree_,e),a=n_(o,u,r),c=nl(t),l=Zp(t.serverSyncTree_,e,a,c,!0);hu(t.eventQueue_,l),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Xe("set at "+e+" failed: "+d);const b=Dn(t.serverSyncTree_,c,!p);Pt(t.eventQueue_,e,b),Fa(t,s,d,f)});const h=sl(t,e);ts(t,h),Pt(t.eventQueue_,h,[])}function iE(t,e,n,i){fu(t,"update",{path:e.toString(),value:n});let s=!0;const r=du(t),o={};if(We(n,(u,a)=>{s=!1,o[u]=t_(xe(e,u),Me(a),t.serverSyncTree_,r)}),s)ze("update() called with empty data.  Don't do anything."),Fa(t,i,"ok",void 0);else{const u=nl(t),a=Cx(t.serverSyncTree_,e,o,u);hu(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,l)=>{const h=c==="ok";h||Xe("update at "+e+" failed: "+c);const d=Dn(t.serverSyncTree_,u,!h),f=d.length>0?ts(t,e):e;Pt(t.eventQueue_,f,d),Fa(t,i,c,l)}),We(n,c=>{const l=sl(t,xe(e,c));ts(t,l)}),Pt(t.eventQueue_,e,[])}}function sE(t){fu(t,"onDisconnectEvents");const e=du(t),n=ko();Ia(t.onDisconnect_,se(),(s,r)=>{const o=t_(s,r,t.serverSyncTree_,e);$p(n,s,o)});let i=[];Ia(n,se(),(s,r)=>{i=i.concat(uu(t.serverSyncTree_,s,r));const o=sl(t,s);ts(t,o)}),t.onDisconnect_=ko(),Pt(t.eventQueue_,se(),i)}function rE(t,e,n){let i;J(e._path)===".info"?i=md(t.infoSyncTree_,e,n):i=md(t.serverSyncTree_,e,n),c_(t.eventQueue_,e._path,i)}function oE(t,e,n){let i;J(e._path)===".info"?i=Na(t.infoSyncTree_,e,n):i=Na(t.serverSyncTree_,e,n),c_(t.eventQueue_,e._path,i)}function uE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zx)}function fu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function Fa(t,e,n,i){e&&ds(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function d_(t,e,n){return jc(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function il(t,e=t.transactionQueueTree_){if(e||pu(t,e),ps(e)){const n=p_(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&aE(t,xr(e),n)}else s_(e)&&cu(e,n=>{il(t,n)})}function aE(t,e,n){const i=n.map(c=>c.currentWriteId),s=d_(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const l=n[c];R(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;const h=st(e,l.path);r=r.updateChild(h,l.currentOutputSnapshotRaw)}const u=r.val(!0),a=e;t.server_.put(a.toString(),u,c=>{fu(t,"transaction put response",{path:a.toString(),status:c});let l=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,l=l.concat(Dn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();pu(t,Jc(t.transactionQueueTree_,e)),il(t,t.transactionQueueTree_),Pt(t.eventQueue_,e,l);for(let d=0;d<h.length;d++)ds(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Xe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ts(t,e)}},o)}function ts(t,e){const n=f_(t,e),i=xr(n),s=p_(t,n);return cE(t,s,i),i}function cE(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(u=>u.status===0).map(u=>u.currentWriteId);for(let u=0;u<e.length;u++){const a=e[u],c=st(n,a.path);let l=!1,h;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)l=!0,h=a.abortReason,s=s.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Jx)l=!0,h="maxretry",s=s.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=d_(t,a.path,o);a.currentInputSnapshot=d;const f=e[u].update(d.val());if(f!==void 0){lu("transaction failed: Data returned ",f,a.path);let p=Me(f);typeof f=="object"&&f!=null&&Jt(f,".priority")||(p=p.updatePriority(d.getPriority()));const k=a.currentWriteId,A=du(t),w=n_(p,d,A);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=w,a.currentWriteId=nl(t),o.splice(o.indexOf(k),1),s=s.concat(Zp(t.serverSyncTree_,a.path,w,a.currentWriteId,a.applyLocally)),s=s.concat(Dn(t.serverSyncTree_,k,!0))}else l=!0,h="nodata",s=s.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0))}Pt(t.eventQueue_,n,s),s=[],l&&(e[u].status=2,function(d){setTimeout(d,Math.floor(0))}(e[u].unwatcher),e[u].onComplete&&(h==="nodata"?i.push(()=>e[u].onComplete(null,!1,e[u].currentInputSnapshot)):i.push(()=>e[u].onComplete(new Error(h),!1,null))))}pu(t,t.transactionQueueTree_);for(let u=0;u<i.length;u++)ds(i[u]);il(t,t.transactionQueueTree_)}function f_(t,e){let n,i=t.transactionQueueTree_;for(n=J(e);n!==null&&ps(i)===void 0;)i=Jc(i,n),e=me(e),n=J(e);return i}function p_(t,e){const n=[];return __(t,e,n),n.sort((i,s)=>i.order-s.order),n}function __(t,e,n){const i=ps(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);cu(e,s=>{__(t,s,n)})}function pu(t,e){const n=ps(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,i_(e,n.length>0?n:void 0)}cu(e,i=>{pu(t,i)})}function sl(t,e){const n=xr(f_(t,e)),i=Jc(t.transactionQueueTree_,e);return Ux(i,s=>{Bu(t,s)}),Bu(t,i),r_(i,s=>{Bu(t,s)}),n}function Bu(t,e){const n=ps(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?i_(e,void 0):n.length=r+1,Pt(t.eventQueue_,xr(e),s);for(let o=0;o<i.length;o++)ds(i[o])}}/**
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
 */function lE(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function hE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const kd=function(t,e){const n=dE(t),i=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||k3();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kp(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new he(n.pathString)}},dE=function(t){let e="",n="",i="",s="",r="",o=!0,u="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(u=t.substring(0,c-1),t=t.substring(c+2));let l=t.indexOf("/");l===-1&&(l=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(l,h)),l<h&&(s=lE(t.substring(l,h)));const d=hE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=u==="https"||u==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:u,pathString:s,namespace:r}};/**
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
 */const xd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fE=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=xd.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=xd.charAt(e[s]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class pE{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class _E{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class gE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class rl{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return ee(this._path)?null:Rc(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=od(this._queryParams),n=Ic(e);return n==="{}"?"default":n}get _queryObject(){return od(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof rl))return!1;const n=this._repo===e._repo,i=Dc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+sk(this._path)}}class Gn extends rl{constructor(e,n){super(e,n,new Fc,!1)}get parent(){const e=Rp(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class So{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),i=or(this.ref,e);return new So(this._node.getChild(n),i,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new So(s,or(this.ref,i),Ee)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pn(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?or(t._root,e):t._root}function or(t,e){return t=Ue(t),J(t._path)===null?Gx("child","path",e):a_("child","path",e),new Gn(t._repo,xe(t._path,e))}function g_(t,e){t=Ue(t),el("push",t._path),u_("push",e,t._path,!0);const n=h_(t._repo),i=fE(n),s=or(t,i),r=or(t,i);let o;return e!=null?o=b_(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function m_(t){return el("remove",t._path),b_(t,null)}function b_(t,e){t=Ue(t),el("set",t._path),u_("set",e,t._path,!1);const n=new pr;return nE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function y_(t,e){Vx("update",e,t._path);const n=new pr;return iE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class ol{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new pE("value",this,new So(e.snapshotNode,new Gn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _E(this,e,n):null}matches(e){return e instanceof ol?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mE(t,e,n,i,s){const r=new gE(n,void 0),o=new ol(r);return rE(t._repo,t,o),()=>oE(t._repo,t,o)}function v_(t,e,n,i){return mE(t,"value",e)}gx(Gn);xx(Gn);/**
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
 */const bE="FIREBASE_DATABASE_EMULATOR_HOST",Ma={};let yE=!1;function vE(t,e,n,i){t.repoInfo_=new kp(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function kE(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kd(r,s),u=o.repoInfo,a;typeof process<"u"&&qh&&(a=qh[bE]),a?(r=`http://${a}?ns=${u.namespace}`,o=kd(r,s),u=o.repoInfo):o.repoInfo.secure;const c=new P3(t.name,t.options,e);Kx("Invalid Firebase Database URL",o),ee(o.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const l=EE(u,t,c,new D3(t,n));return new wE(l,t)}function xE(t,e){const n=Ma[e];(!n||n[t.key]!==t)&&_n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uE(t),delete n[t.key]}function EE(t,e,n,i){let s=Ma[e.name];s||(s={},Ma[e.name]=s);let r=s[t.toURLString()];return r&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xx(t,yE,n,i),s[t.toURLString()]=r,r}class wE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function CE(t=fc(),e){const n=Xo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=b0("database");i&&IE(n,...i)}return n}function IE(t,e,n,i={}){t=Ue(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&ai(i,r.repoInfo_.emulatorOptions))return;_n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new eo(eo.OWNER);else if(i.mockUserToken){const u=typeof i.mockUserToken=="string"?i.mockUserToken:k0(i.mockUserToken,t.app.options.projectId);o=new eo(u)}vE(r,s,i,o)}/**
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
 */function TE(t){_3(yi),ci(new qn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kE(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Yt(Wh,jh,t),Yt(Wh,jh,"esm2017")}hn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TE();const AE={apiKey:"AIzaSyC58enCNd-UjaZ2QEyrGySa2SJ-18c3Sko",authDomain:"young-dcfa9.firebaseapp.com",projectId:"young-dcfa9",storageBucket:"young-dcfa9.firebasestorage.app",messagingSenderId:"990780712687",appId:"1:990780712687:web:d9fab78006b0d6fdc09d1a"},k_=I0(AE),Oi=f3(k_),Nn=CE(k_),_u=t=>(mi("data-v-116fb367"),t=t(),bi(),t),SE={class:"auth-button"},RE={key:1,class:"user-info"},DE=_u(()=>_("img",{src:ub,style:{width:"250px",height:"auto",display:"block",margin:"0 auto"},alt:"logo"},null,-1)),PE={class:"wrapper"},NE={key:0,class:"auth-modal"},OE={class:"auth-modal-content"},FE=_u(()=>_("h2",null,"Вход",-1)),ME={class:"auth-methods"},LE=_u(()=>_("div",{class:"divider"},"или",-1)),$E=["onSubmit"],UE=_u(()=>_("button",{type:"submit"},"Войти",-1)),BE={__name:"App",setup(t){const e=Ze(null),n=Ze(!1),i=Ze(""),s=Ze("");Go(()=>{Oi.onAuthStateChanged(a=>{e.value=a,a&&(n.value=!1)})});const r=async()=>{try{const a=new on;await xv(Oi,a)}catch(a){console.error("Ошибка входа через Google:",a)}},o=async()=>{try{await Xy(Oi,i.value,s.value)}catch(a){console.error("Ошибка входа:",a),alert("Неверный email или пароль")}},u=async()=>{try{await nv(Oi)}catch(a){console.error("Ошибка выхода:",a)}};return(a,c)=>{const l=oa("router-link"),h=oa("router-view");return B(),z(Re,null,[_("header",null,[_("div",SE,[e.value?(B(),z("div",RE,[_("span",null,Ie(e.value.displayName||e.value.email),1),_("button",{onClick:u},"Выйти")])):(B(),z("button",{key:0,onClick:c[0]||(c[0]=d=>n.value=!0)},"Войти"))]),DE,_("div",PE,[F(fb,{msg:"ИДЕИ МОЛОДЕЖИ"}),_("nav",null,[F(l,{to:"/"},{default:Qe(()=>[it("Домой")]),_:1}),F(l,{to:"/about"},{default:Qe(()=>[it("О нас")]),_:1}),F(l,{to:"/welcome"},{default:Qe(()=>[it("Идеи молодежи")]),_:1}),F(l,{to:"/neuroart"},{default:Qe(()=>[it("Нейро-Арт")]),_:1}),F(l,{to:"/graffiti"},{default:Qe(()=>[it("Граффити")]),_:1}),F(l,{to:"/volonter"},{default:Qe(()=>[it("Волонтёрство")]),_:1}),F(l,{to:"/maker"},{default:Qe(()=>[it("Мэйкерство")]),_:1}),F(l,{to:"/makeProject"},{default:Qe(()=>[it("Сделай проект")]),_:1})])])]),n.value?(B(),z("div",NE,[_("div",OE,[_("span",{class:"close",onClick:c[1]||(c[1]=d=>n.value=!1)},"×"),FE,_("div",ME,[_("button",{onClick:r},"Войти через Google"),LE,_("form",{onSubmit:d0(o,["prevent"])},[Wt(_("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=d=>i.value=d),placeholder:"Email",required:""},null,512),[[jt,i.value]]),Wt(_("input",{type:"password","onUpdate:modelValue":c[3]||(c[3]=d=>s.value=d),placeholder:"Пароль",required:""},null,512),[[jt,s.value]]),UE],40,$E)])])])):ke("",!0),_("main",null,[F(h)]),F(yb)],64)}}},zE=Ot(BE,[["__scopeId","data-v-116fb367"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Pi=typeof document<"u";function x_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&x_(t.default)}const ue=Object.assign;function zu(t,e){const n={};for(const i in e){const s=e[i];n[i]=Nt(s)?s.map(t):t(s)}return n}const Us=()=>{},Nt=Array.isArray,E_=/#/g,WE=/&/g,jE=/\//g,HE=/=/g,VE=/\?/g,w_=/\+/g,GE=/%5B/g,KE=/%5D/g,C_=/%5E/g,YE=/%60/g,I_=/%7B/g,QE=/%7C/g,T_=/%7D/g,ZE=/%20/g;function ul(t){return encodeURI(""+t).replace(QE,"|").replace(GE,"[").replace(KE,"]")}function JE(t){return ul(t).replace(I_,"{").replace(T_,"}").replace(C_,"^")}function La(t){return ul(t).replace(w_,"%2B").replace(ZE,"+").replace(E_,"%23").replace(WE,"%26").replace(YE,"`").replace(I_,"{").replace(T_,"}").replace(C_,"^")}function XE(t){return La(t).replace(HE,"%3D")}function ew(t){return ul(t).replace(E_,"%23").replace(VE,"%3F")}function tw(t){return t==null?"":ew(t).replace(jE,"%2F")}function ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const nw=/\/$/,iw=t=>t.replace(nw,"");function qu(t,e,n="/"){let i,s={},r="",o="";const u=e.indexOf("#");let a=e.indexOf("?");return u<a&&u>=0&&(a=-1),a>-1&&(i=e.slice(0,a),r=e.slice(a+1,u>-1?u:e.length),s=t(r)),u>-1&&(i=i||e.slice(0,u),o=e.slice(u,e.length)),i=uw(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:ur(o)}}function sw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rw(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&ns(e.matched[i],n.matched[s])&&A_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function A_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ow(t[n],e[n]))return!1;return!0}function ow(t,e){return Nt(t)?wd(t,e):Nt(e)?wd(e,t):t===e}function wd(t,e){return Nt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function uw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,u;for(o=0;o<i.length;o++)if(u=i[o],u!==".")if(u==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ar;(function(t){t.pop="pop",t.push="push"})(ar||(ar={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function aw(t){if(!t)if(Pi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iw(t)}const cw=/^[^#]+#/;function lw(t,e){return t.replace(cw,"#")+e}function hw(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const gu=()=>({left:window.scrollX,top:window.scrollY});function dw(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Cd(t,e){return(history.state?history.state.position-e:-1)+t}const $a=new Map;function fw(t,e){$a.set(t,e)}function pw(t){const e=$a.get(t);return $a.delete(t),e}let _w=()=>location.protocol+"//"+location.host;function S_(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let u=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(u);return a[0]!=="/"&&(a="/"+a),Ed(a,"")}return Ed(n,t)+i+s}function gw(t,e,n,i){let s=[],r=[],o=null;const u=({state:d})=>{const f=S_(t,location),p=n.value,b=e.value;let k=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}k=b?d.position-b.position:0}else i(f);s.forEach(A=>{A(n.value,p,{delta:k,type:ar.pop,direction:k?k>0?Bs.forward:Bs.back:Bs.unknown})})};function a(){o=n.value}function c(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return r.push(f),f}function l(){const{history:d}=window;d.state&&d.replaceState(ue({},d.state,{scroll:gu()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function Id(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?gu():null}}function mw(t){const{history:e,location:n}=window,i={value:S_(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:_w()+t+a;try{e[l?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(a,c){const l=ue({},e.state,Id(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});r(a,l,!0),i.value=a}function u(a,c){const l=ue({},s.value,e.state,{forward:a,scroll:gu()});r(l.current,l,!0);const h=ue({},Id(i.value,a,null),{position:l.position+1},c);r(a,h,!1),i.value=a}return{location:i,state:s,push:u,replace:o}}function bw(t){t=aw(t);const e=mw(t),n=gw(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ue({location:"",base:t,go:i,createHref:lw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),bw(t)}function vw(t){return typeof t=="string"||t&&typeof t=="object"}function R_(t){return typeof t=="string"||typeof t=="symbol"}const D_=Symbol("");var Td;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Td||(Td={}));function is(t,e){return ue(new Error,{type:t,[D_]:!0},e)}function sn(t,e){return t instanceof Error&&D_ in t&&(e==null||!!(t.type&e))}const Ad="[^/]+?",kw={sensitive:!1,strict:!1,start:!0,end:!0},xw=/[.+*?^${}()[\]/\\]/g;function Ew(t,e){const n=ue({},kw,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const l=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(xw,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:b,optional:k,regexp:A}=d;r.push({name:p,repeatable:b,optional:k});const w=A||Ad;if(w!==Ad){f+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+x.message)}}let C=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(C=k&&c.length<2?`(?:/${C})`:"/"+C),k&&(C+="?"),s+=C,f+=20,k&&(f+=-8),b&&(f+=-20),w===".*"&&(f+=-50)}l.push(f)}i.push(l)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function u(c){const l=c.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",p=r[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function a(c){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:p,repeatable:b,optional:k}=f,A=p in c?c[p]:"";if(Nt(A)&&!b)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Nt(A)?A.join("/"):A;if(!w)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);l+=w}}return l||"/"}return{re:o,score:i,keys:r,parse:u,stringify:a}}function ww(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function P_(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=ww(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Sd(i))return 1;if(Sd(s))return-1}return s.length-i.length}function Sd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Cw={type:0,value:""},Iw=/[a-zA-Z0-9_]/;function Tw(t){if(!t)return[[]];if(t==="/")return[[Cw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let u=0,a,c="",l="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:l,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;u<t.length;){if(a=t[u++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:a==="("?n=2:Iw.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&u--);break;case 2:a===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&u--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Aw(t,e,n){const i=Ew(Tw(t.path),n),s=ue(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Sw(t,e){const n=[],i=new Map;e=Nd({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,d,f){const p=!f,b=Dd(h);b.aliasOf=f&&f.record;const k=Nd(e,h),A=[b];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const M of x)A.push(Dd(ue({},b,{components:f?f.record.components:b.components,path:M,aliasOf:f?f.record:b})))}let w,C;for(const x of A){const{path:M}=x;if(d&&M[0]!=="/"){const $=d.record.path,K=$[$.length-1]==="/"?"":"/";x.path=d.record.path+(M&&K+M)}if(w=Aw(x,d,k),f?f.alias.push(w):(C=C||w,C!==w&&C.alias.push(w),p&&h.name&&!Pd(w)&&o(h.name)),N_(w)&&a(w),b.children){const $=b.children;for(let K=0;K<$.length;K++)r($[K],w,f&&f.children[K])}f=f||w}return C?()=>{o(C)}:Us}function o(h){if(R_(h)){const d=i.get(h);d&&(i.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function u(){return n}function a(h){const d=Pw(h,n);n.splice(d,0,h),h.record.name&&!Pd(h)&&i.set(h.record.name,h)}function c(h,d){let f,p={},b,k;if("name"in h&&h.name){if(f=i.get(h.name),!f)throw is(1,{location:h});k=f.record.name,p=ue(Rd(d.params,f.keys.filter(C=>!C.optional).concat(f.parent?f.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),h.params&&Rd(h.params,f.keys.map(C=>C.name))),b=f.stringify(p)}else if(h.path!=null)b=h.path,f=n.find(C=>C.re.test(b)),f&&(p=f.parse(b),k=f.record.name);else{if(f=d.name?i.get(d.name):n.find(C=>C.re.test(d.path)),!f)throw is(1,{location:h,currentLocation:d});k=f.record.name,p=ue({},d.params,h.params),b=f.stringify(p)}const A=[];let w=f;for(;w;)A.unshift(w.record),w=w.parent;return{name:k,path:b,params:p,matched:A,meta:Dw(A)}}t.forEach(h=>r(h));function l(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:l,getRoutes:u,getRecordMatcher:s}}function Rd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Dd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Rw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Rw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Pd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dw(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function Nd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Pw(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;P_(t,e[r])<0?i=r:n=r+1}const s=Nw(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Nw(t){let e=t;for(;e=e.parent;)if(N_(e)&&P_(t,e)===0)return e}function N_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ow(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(w_," "),o=r.indexOf("="),u=ur(o<0?r:r.slice(0,o)),a=o<0?null:ur(r.slice(o+1));if(u in e){let c=e[u];Nt(c)||(c=e[u]=[c]),c.push(a)}else e[u]=a}return e}function Od(t){let e="";for(let n in t){const i=t[n];if(n=XE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nt(i)?i.map(r=>r&&La(r)):[i&&La(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Fw(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Nt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Mw=Symbol(""),Fd=Symbol(""),al=Symbol(""),O_=Symbol(""),Ua=Symbol("");function xs(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wn(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((u,a)=>{const c=d=>{d===!1?a(is(4,{from:n,to:e})):d instanceof Error?a(d):vw(d)?a(is(2,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),u())},l=r(()=>t.call(i&&i.instances[s],e,n,c));let h=Promise.resolve(l);t.length<3&&(h=h.then(c)),h.catch(d=>a(d))})}function Wu(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const u in o.components){let a=o.components[u];if(!(e!=="beforeRouteEnter"&&!o.instances[u]))if(x_(a)){const l=(a.__vccOpts||a)[e];l&&r.push(wn(l,n,i,o,u,s))}else{let c=a();r.push(()=>c.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${u}" at "${o.path}"`);const h=qE(l)?l.default:l;o.mods[u]=l,o.components[u]=h;const f=(h.__vccOpts||h)[e];return f&&wn(f,n,i,o,u,s)()}))}}return r}function Md(t){const e=ln(al),n=ln(O_),i=wt(()=>{const a=si(t.to);return e.resolve(a)}),s=wt(()=>{const{matched:a}=i.value,{length:c}=a,l=a[c-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(ns.bind(null,l));if(d>-1)return d;const f=Ld(a[c-2]);return c>1&&Ld(l)===f&&h[h.length-1].path!==f?h.findIndex(ns.bind(null,a[c-2])):d}),r=wt(()=>s.value>-1&&zw(n.params,i.value.params)),o=wt(()=>s.value>-1&&s.value===n.matched.length-1&&A_(n.params,i.value.params));function u(a={}){if(Bw(a)){const c=e[si(t.replace)?"replace":"push"](si(t.to)).catch(Us);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:wt(()=>i.value.href),isActive:r,isExactActive:o,navigate:u}}function Lw(t){return t.length===1?t[0]:t}const $w=Gf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Md,setup(t,{slots:e}){const n=qo(Md(t)),{options:i}=ln(al),s=wt(()=>({[$d(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[$d(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Lw(e.default(n));return t.custom?r:h0("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Uw=$w;function Bw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zw(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Nt(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $d=(t,e,n)=>t??e??n,qw=Gf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ln(Ua),s=wt(()=>t.route||i.value),r=ln(Fd,0),o=wt(()=>{let c=si(r);const{matched:l}=s.value;let h;for(;(h=l[c])&&!h.components;)c++;return c}),u=wt(()=>s.value.matched[o.value]);Gr(Fd,wt(()=>o.value+1)),Gr(Mw,u),Gr(Ua,s);const a=Ze();return Hr(()=>[a.value,u.value,t.name],([c,l,h],[d,f,p])=>{l&&(l.instances[h]=c,f&&f!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!ns(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=s.value,l=t.name,h=u.value,d=h&&h.components[l];if(!d)return Ud(n.default,{Component:d,route:c});const f=h.props[l],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,k=h0(d,ue({},p,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[l]=null)},ref:a}));return Ud(n.default,{Component:k,route:c})||k}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ww=qw;function jw(t){const e=Sw(t.routes,t),n=t.parseQuery||Ow,i=t.stringifyQuery||Od,s=t.history,r=xs(),o=xs(),u=xs(),a=Im(xn);let c=xn;Pi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=zu.bind(null,I=>""+I),h=zu.bind(null,tw),d=zu.bind(null,ur);function f(I,L){let O,j;return R_(I)?(O=e.getRecordMatcher(I),j=L):j=I,e.addRoute(j,O)}function p(I){const L=e.getRecordMatcher(I);L&&e.removeRoute(L)}function b(){return e.getRoutes().map(I=>I.record)}function k(I){return!!e.getRecordMatcher(I)}function A(I,L){if(L=ue({},L||a.value),typeof I=="string"){const v=qu(n,I,L.path),E=e.resolve({path:v.path},L),S=s.createHref(v.fullPath);return ue(v,E,{params:d(E.params),hash:ur(v.hash),redirectedFrom:void 0,href:S})}let O;if(I.path!=null)O=ue({},I,{path:qu(n,I.path,L.path).path});else{const v=ue({},I.params);for(const E in v)v[E]==null&&delete v[E];O=ue({},I,{params:h(v)}),L.params=h(L.params)}const j=e.resolve(O,L),g=I.hash||"";j.params=l(d(j.params));const m=sw(i,ue({},I,{hash:JE(g),path:j.path})),y=s.createHref(m);return ue({fullPath:m,hash:g,query:i===Od?Fw(I.query):I.query||{}},j,{redirectedFrom:void 0,href:y})}function w(I){return typeof I=="string"?qu(n,I,a.value.path):ue({},I)}function C(I,L){if(c!==I)return is(8,{from:L,to:I})}function x(I){return K(I)}function M(I){return x(ue(w(I),{replace:!0}))}function $(I){const L=I.matched[I.matched.length-1];if(L&&L.redirect){const{redirect:O}=L;let j=typeof O=="function"?O(I):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),ue({query:I.query,hash:I.hash,params:j.path!=null?{}:I.params},j)}}function K(I,L){const O=c=A(I),j=a.value,g=I.state,m=I.force,y=I.replace===!0,v=$(O);if(v)return K(ue(w(v),{state:typeof v=="object"?ue({},g,v.state):g,force:m,replace:y}),L||O);const E=O;E.redirectedFrom=L;let S;return!m&&rw(i,j,O)&&(S=is(16,{to:E,from:j}),Lt(j,j,!0,!1)),(S?Promise.resolve(S):Pe(E,j)).catch(D=>sn(D)?sn(D,2)?D:yn(D):oe(D,E,j)).then(D=>{if(D){if(sn(D,2))return K(ue({replace:y},w(D.to),{state:typeof D.to=="object"?ue({},g,D.to.state):g,force:m}),L||E)}else D=tn(E,j,!0,y,g);return ft(E,j,D),D})}function ne(I,L){const O=C(I,L);return O?Promise.reject(O):Promise.resolve()}function Te(I){const L=Ii.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(I):I()}function Pe(I,L){let O;const[j,g,m]=Hw(I,L);O=Wu(j.reverse(),"beforeRouteLeave",I,L);for(const v of j)v.leaveGuards.forEach(E=>{O.push(wn(E,I,L))});const y=ne.bind(null,I,L);return O.push(y),je(O).then(()=>{O=[];for(const v of r.list())O.push(wn(v,I,L));return O.push(y),je(O)}).then(()=>{O=Wu(g,"beforeRouteUpdate",I,L);for(const v of g)v.updateGuards.forEach(E=>{O.push(wn(E,I,L))});return O.push(y),je(O)}).then(()=>{O=[];for(const v of m)if(v.beforeEnter)if(Nt(v.beforeEnter))for(const E of v.beforeEnter)O.push(wn(E,I,L));else O.push(wn(v.beforeEnter,I,L));return O.push(y),je(O)}).then(()=>(I.matched.forEach(v=>v.enterCallbacks={}),O=Wu(m,"beforeRouteEnter",I,L,Te),O.push(y),je(O))).then(()=>{O=[];for(const v of o.list())O.push(wn(v,I,L));return O.push(y),je(O)}).catch(v=>sn(v,8)?v:Promise.reject(v))}function ft(I,L,O){u.list().forEach(j=>Te(()=>j(I,L,O)))}function tn(I,L,O,j,g){const m=C(I,L);if(m)return m;const y=L===xn,v=Pi?history.state:{};O&&(j||y?s.replace(I.fullPath,ue({scroll:y&&v&&v.scroll},g)):s.push(I.fullPath,g)),a.value=I,Lt(I,L,O,y),yn()}let pt;function bn(){pt||(pt=s.listen((I,L,O)=>{if(!Tr.listening)return;const j=A(I),g=$(j);if(g){K(ue(g,{replace:!0,force:!0}),j).catch(Us);return}c=j;const m=a.value;Pi&&fw(Cd(m.fullPath,O.delta),gu()),Pe(j,m).catch(y=>sn(y,12)?y:sn(y,2)?(K(ue(w(y.to),{force:!0}),j).then(v=>{sn(v,20)&&!O.delta&&O.type===ar.pop&&s.go(-1,!1)}).catch(Us),Promise.reject()):(O.delta&&s.go(-O.delta,!1),oe(y,j,m))).then(y=>{y=y||tn(j,m,!1),y&&(O.delta&&!sn(y,8)?s.go(-O.delta,!1):O.type===ar.pop&&sn(y,20)&&s.go(-1,!1)),ft(j,m,y)}).catch(Us)}))}let at=xs(),Ae=xs(),de;function oe(I,L,O){yn(I);const j=Ae.list();return j.length?j.forEach(g=>g(I,L,O)):console.error(I),Promise.reject(I)}function nn(){return de&&a.value!==xn?Promise.resolve():new Promise((I,L)=>{at.add([I,L])})}function yn(I){return de||(de=!I,bn(),at.list().forEach(([L,O])=>I?O(I):L()),at.reset()),I}function Lt(I,L,O,j){const{scrollBehavior:g}=t;if(!Pi||!g)return Promise.resolve();const m=!O&&pw(Cd(I.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Bf().then(()=>g(I,L,m)).then(y=>y&&dw(y)).catch(y=>oe(y,I,L))}const tt=I=>s.go(I);let Ci;const Ii=new Set,Tr={currentRoute:a,listening:!0,addRoute:f,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:b,resolve:A,options:t,push:x,replace:M,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:u.add,onError:Ae.add,isReady:nn,install(I){const L=this;I.component("RouterLink",Uw),I.component("RouterView",Ww),I.config.globalProperties.$router=L,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>si(a)}),Pi&&!Ci&&a.value===xn&&(Ci=!0,x(s.location).catch(g=>{}));const O={};for(const g in xn)Object.defineProperty(O,g,{get:()=>a.value[g],enumerable:!0});I.provide(al,L),I.provide(O_,Df(O)),I.provide(Ua,a);const j=I.unmount;Ii.add(I),I.unmount=function(){Ii.delete(I),Ii.size<1&&(c=xn,pt&&pt(),pt=null,a.value=xn,Ci=!1,de=!1),j()}}};function je(I){return I.reduce((L,O)=>L.then(()=>Te(O)),Promise.resolve())}return Tr}function Hw(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const u=e.matched[o];u&&(t.matched.find(c=>ns(c,u))?i.push(u):n.push(u));const a=t.matched[o];a&&(e.matched.find(c=>ns(c,a))||s.push(a))}return[n,i,s]}const Vw="/young/assets/onas-C4BGOfmC.jpg",Gw="/young/assets/idei-CD8Reew2.png",Kw="/young/assets/neuroart-D6VWulE2.jpg",Yw="/young/assets/cat-C4tugnAR.jpeg",Qw="/young/assets/volont-DTSxDn6v.png",Zw="/young/assets/diy-B0uX1_BT.png",Jw={},Xw={class:"home"},e6={class:"content-block"},t6=_("div",{class:"block"},[_("div",{class:"image-container"},[_("img",{src:Vw,alt:"O NAS"})]),_("div",{class:"text-container"},[_("h2",null,"О нас"),_("p",null,"Мы - команда энтузиастов, которая стремится создать пространство для творчества, общения и реализации идей молодежи.")])],-1),n6=_("div",{class:"block"},[_("div",{class:"image-container"},[_("img",{src:Gw,alt:"idei"})]),_("div",{class:"text-container"},[_("h2",null,"Идеи молодежи"),_("p",null,"Площадка для обсуждения и реализации самых смелых идей молодого поколения. Ваше творчество - наше будущее!")])],-1),i6=_("div",{class:"block"},[_("div",{class:"image-container"},[_("img",{src:Kw,alt:"neuroart"})]),_("div",{class:"text-container"},[_("h2",null,"Нейро-арт"),_("p",null,"Искусство, созданное с помощью нейросетей. Исследуйте границы цифрового творчества и создавайте уникальные произведения.")])],-1),s6=_("div",{class:"block"},[_("div",{class:"image-container"},[_("img",{src:Yw,alt:"graffiti"})]),_("div",{class:"text-container"},[_("h2",null,"Граффити"),_("p",null,"Уличное искусство как форма самовыражения. Откройте для себя мир граффити и создавайте свои уникальные работы.")])],-1),r6=_("div",{class:"block"},[_("div",{class:"image-container"},[_("img",{src:Qw,alt:"volonterstvo"})]),_("div",{class:"text-container"},[_("h2",null,"Волонтерство"),_("p",null,"Возможность сделать мир лучше. Присоединяйтесь к нашим волонтерским программам и станьте частью позитивных изменений.")])],-1),o6=_("div",{class:"block"},[_("div",{class:"image-container"},[_("img",{src:Zw,alt:"neuroart"})]),_("div",{class:"text-container"},[_("h2",null,"Мэйкерство"),_("p",null,"Создавайте, изобретайте, творите! Мэйкерство - это философия DIY (сделай сам) в действии.")])],-1);function u6(t,e){const n=oa("router-link");return B(),z("div",Xw,[_("div",e6,[F(n,{to:"./about",class:"block-link"},{default:Qe(()=>[t6]),_:1}),F(n,{to:"./welcome",class:"block-link"},{default:Qe(()=>[n6]),_:1}),F(n,{to:"./neuroart",class:"block-link"},{default:Qe(()=>[i6]),_:1}),F(n,{to:"./graffiti",class:"block-link"},{default:Qe(()=>[s6]),_:1}),F(n,{to:"./volonter",class:"block-link"},{default:Qe(()=>[r6]),_:1}),F(n,{to:"./maker",class:"block-link"},{default:Qe(()=>[o6]),_:1})])])}const a6=Ot(Jw,[["render",u6]]),c6={},l6={class:"about"},h6=a0('<h1 data-v-c805a92a>О нас</h1><div data-v-c805a92a><h3 data-v-c805a92a>Социальная платформа для молодёжи: пространство для идей и взаимодействия</h3><br data-v-c805a92a><p data-v-c805a92a> Команда проекта: Милославская Екатерина Николаевна - дизайн граффити </p><p data-v-c805a92a>Социальная платформа для молодёжи — это уникальное онлайн-пространство, созданное для того, чтобы объединить активных, инициативных и неравнодушных молодых людей. Основная цель платформы — дать возможность молодёжи реализовать свой потенциал, предлагать и воплощать в жизнь социальные идеи, а также взаимодействовать с различными организациями, которые разделяют их ценности и стремления.</p><br data-v-c805a92a><p class="golov" data-v-c805a92a>Для чего нужна социальная платформа?</p><p data-v-c805a92a>Мир меняется, и молодёжь играет ключевую роль в этих изменениях.Платформа создана для того, чтобы:</p><ul data-v-c805a92a><li data-v-c805a92a>Дать возможность молодым людям выражать свои идеи и инициативы.</li><li data-v-c805a92a>Объединить единомышленников для совместной работы над социальными проектами.</li><li data-v-c805a92a>Предоставить доступ к ресурсам и поддержке от социальных организаций и правительства региона.</li><li data-v-c805a92a>Вдохновлять на создание позитивных изменений в обществе.</li><li data-v-c805a92a>Наблюдать за новыми арт-объектами – граффити в городе.</li></ul><br data-v-c805a92a><p class="golov" data-v-c805a92a>Что можно делать на платформе?</p><br data-v-c805a92a><ol data-v-c805a92a><li data-v-c805a92a><p class="li" data-v-c805a92a>Взаимодействовать с социальными организациями</p> На платформе представлены различные социальные организации, которые занимаются образованием, экологией, благотворительностью, защитой прав человека и многим другим. Вы можете: <ul data-v-c805a92a><li data-v-c805a92a>Узнавать об их деятельности.</li><li data-v-c805a92a>Участвовать в их проектах и мероприятиях.</li><li data-v-c805a92a>Получать поддержку для реализации своих идей.</li></ul></li><li data-v-c805a92a><p class="li" data-v-c805a92a>Предлагать свои социальные идеи</p> Платформа разделена на тематические разделы, где можно публиковать свои идеи и проекты. Например: <ul data-v-c805a92a><li data-v-c805a92a>Идеи по росписи граффити: предлагай места для новых работ.</li><li data-v-c805a92a>Культура и искусство: создавайте инициативы, которые вдохновляют и объединяют людей.</li><li data-v-c805a92a>Идеи по благоустройству: предлагайте идеи по благоустройству дворов, парков, скверов, зон отдыха и различных мест в регионе.</li></ul> Каждая идея может быть поддержана другими пользователями, а также получить экспертную оценку и помощь от организаций. </li><li data-v-c805a92a><p class="li" data-v-c805a92a>Находить единомышленников и создавать команды</p> Платформа позволяет находить людей с похожими интересами, объединяться в команды и вместе работать над реализацией проектов.</li><li data-v-c805a92a><p class="li" data-v-c805a92a>Связаться с правительством региона.</p> На платформе есть возможность оставить заявку в правительство региона, а после получить официальный ответ.</li><li data-v-c805a92a><p class="li" data-v-c805a92a>Выкладывать новости о культурных и образовательных мероприятиях.</p> Платформа позволяет делится и обсуждать последние новости о культурных и образовательных мероприятиях, а также наблюдать за реализацией твоих инициатив через новости.</li></ol><p class="golov" data-v-c805a92a>Почему это важно?</p><p data-v-c805a92a>Социальная платформа для молодёжи — это не просто инструмент для общения, это пространство для действий. Здесь каждый может стать частью чего-то большего, внести свой вклад в развитие общества и найти поддержку для своих инициатив.</p><br data-v-c805a92a><p data-v-c805a92a>Присоединяйтесь к платформе, предлагайте свои идеи, вдохновляйтесь и меняйте мир к лучшему вместе с нами!</p></div>',2),d6=[h6];function f6(t,e){return B(),z("div",l6,d6)}const p6=Ot(c6,[["render",f6],["__scopeId","data-v-c805a92a"]]),F_=t=>(mi("data-v-39e9e5a7"),t=t(),bi(),t),_6={class:"comments-section"},g6=F_(()=>_("h2",null,"Идеи молодежи",-1)),m6={key:0,class:"comment-form"},b6={key:1,class:"auth-prompt"},y6=F_(()=>_("p",null,"Чтобы оставить комментарий, пожалуйста, войдите в систему.",-1)),v6=[y6],k6={class:"comments-list"},x6={class:"comment-header"},E6={class:"comment-actions"},w6=["onClick"],C6=["onClick"],I6={key:0,class:"moderation-notice"},T6={__name:"TheWelcome",setup(t){const e=Ze(""),n=Ze([]),i=Ze(null),s=Ze(!1);Go(()=>{Oi.onAuthStateChanged(async c=>{i.value=c,c?s.value=c.email==="admin@example.com":s.value=!1});const a=Pn(Nn,"comments");v_(a,c=>{const l=c.val();l?n.value=Object.entries(l).map(([h,d])=>({id:h,...d})).sort((h,d)=>h.approved===d.approved?d.timestamp-h.timestamp:h.approved?-1:1):n.value=[]})});const r=()=>{!e.value.trim()||!i.value||(g_(Pn(Nn,"comments"),{text:e.value,author:i.value.displayName||i.value.email,authorId:i.value.uid,timestamp:Date.now(),approved:!1}),e.value="",alert("Ваш комментарий отправлен на модерацию. Он появится после проверки администратором."))},o=(a,c)=>{i.value&&(s.value||i.value.uid===c)&&confirm("Вы уверены, что хотите удалить этот комментарий?")&&m_(Pn(Nn,`comments/${a}`))},u=a=>{s.value&&y_(Pn(Nn,`comments/${a}`),{approved:!0})};return(a,c)=>(B(),z("div",_6,[g6,i.value?(B(),z("div",m6,[Wt(_("textarea",{"onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l),placeholder:"Поделитесь своей идеей..."},null,512),[[jt,e.value]]),_("button",{onClick:r},"Отправить")])):(B(),z("div",b6,v6)),_("div",k6,[(B(!0),z(Re,null,Ts(n.value,l=>{var h;return B(),z(Re,{key:l.id},[l.approved||s.value?(B(),z("div",{key:0,class:fr(["comment",{pending:!l.approved}])},[_("div",x6,[_("strong",null,Ie(l.author)+":",1),_("div",E6,[s.value&&!l.approved?(B(),z("button",{key:0,onClick:d=>u(l.id),class:"approve-button"}," Одобрить ",8,w6)):ke("",!0),s.value||((h=i.value)==null?void 0:h.uid)===l.authorId?(B(),z("button",{key:1,onClick:d=>o(l.id,l.authorId),class:"delete-button"}," Удалить ",8,C6)):ke("",!0)])]),_("p",null,Ie(l.text),1),_("small",null,Ie(new Date(l.timestamp).toLocaleString()),1),l.approved?ke("",!0):(B(),z("div",I6," [На модерации] "))],2)):ke("",!0)],64)}),128))])]))}},A6=Ot(T6,[["__scopeId","data-v-39e9e5a7"]]),S6={props:{imageSrc:{type:String,required:!0},imageWidth:{type:String,default:"200px"}},data(){return{isModalOpen:!1}},methods:{openModal(){this.isModalOpen=!0,document.body.style.overflow="hidden"},closeModal(){this.isModalOpen=!1,document.body.style.overflow=""}}},R6=["src"],D6={class:"modal-content"},P6=["src"];function N6(t,e,n,i,s,r){return B(),z("div",null,[_("img",{src:n.imageSrc,alt:"Click to enlarge",style:Bo({width:n.imageWidth}),class:"clickable-image",onClick:e[0]||(e[0]=(...o)=>r.openModal&&r.openModal(...o))},null,12,R6),s.isModalOpen?(B(),z("div",{key:0,class:"modal-overlay",onClick:e[2]||(e[2]=(...o)=>r.closeModal&&r.closeModal(...o))},[_("div",D6,[_("img",{src:n.imageSrc,alt:"Full size",class:"full-size-image"},null,8,P6),_("button",{class:"close-button",onClick:e[1]||(e[1]=d0((...o)=>r.closeModal&&r.closeModal(...o),["stop"]))},"×")])])):ke("",!0)])}const Q=Ot(S6,[["render",N6],["__scopeId","data-v-7f6ef325"]]),Bd={};function O6(t){let e=Bd[t];if(e)return e;e=Bd[t]=[];for(let n=0;n<128;n++){const i=String.fromCharCode(n);e.push(i)}for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);e[i]="%"+("0"+i.toString(16).toUpperCase()).slice(-2)}return e}function ss(t,e){typeof e!="string"&&(e=ss.defaultChars);const n=O6(e);return t.replace(/(%[a-f0-9]{2})+/gi,function(i){let s="";for(let r=0,o=i.length;r<o;r+=3){const u=parseInt(i.slice(r+1,r+3),16);if(u<128){s+=n[u];continue}if((u&224)===192&&r+3<o){const a=parseInt(i.slice(r+4,r+6),16);if((a&192)===128){const c=u<<6&1984|a&63;c<128?s+="��":s+=String.fromCharCode(c),r+=3;continue}}if((u&240)===224&&r+6<o){const a=parseInt(i.slice(r+4,r+6),16),c=parseInt(i.slice(r+7,r+9),16);if((a&192)===128&&(c&192)===128){const l=u<<12&61440|a<<6&4032|c&63;l<2048||l>=55296&&l<=57343?s+="���":s+=String.fromCharCode(l),r+=6;continue}}if((u&248)===240&&r+9<o){const a=parseInt(i.slice(r+4,r+6),16),c=parseInt(i.slice(r+7,r+9),16),l=parseInt(i.slice(r+10,r+12),16);if((a&192)===128&&(c&192)===128&&(l&192)===128){let h=u<<18&1835008|a<<12&258048|c<<6&4032|l&63;h<65536||h>1114111?s+="����":(h-=65536,s+=String.fromCharCode(55296+(h>>10),56320+(h&1023))),r+=9;continue}}s+="�"}return s})}ss.defaultChars=";/?:@&=+$,#";ss.componentChars="";const zd={};function F6(t){let e=zd[t];if(e)return e;e=zd[t]=[];for(let n=0;n<128;n++){const i=String.fromCharCode(n);/^[0-9a-z]$/i.test(i)?e.push(i):e.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<t.length;n++)e[t.charCodeAt(n)]=t[n];return e}function Er(t,e,n){typeof e!="string"&&(n=e,e=Er.defaultChars),typeof n>"u"&&(n=!0);const i=F6(e);let s="";for(let r=0,o=t.length;r<o;r++){const u=t.charCodeAt(r);if(n&&u===37&&r+2<o&&/^[0-9a-f]{2}$/i.test(t.slice(r+1,r+3))){s+=t.slice(r,r+3),r+=2;continue}if(u<128){s+=i[u];continue}if(u>=55296&&u<=57343){if(u>=55296&&u<=56319&&r+1<o){const a=t.charCodeAt(r+1);if(a>=56320&&a<=57343){s+=encodeURIComponent(t[r]+t[r+1]),r++;continue}}s+="%EF%BF%BD";continue}s+=encodeURIComponent(t[r])}return s}Er.defaultChars=";/?:@&=+$,-_.!~*'()#";Er.componentChars="-_.!~*'()";function cl(t){let e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&t.hostname.indexOf(":")!==-1?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||"",e}function Ro(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const M6=/^([a-z0-9.+-]+:)/i,L6=/:[0-9]*$/,$6=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,U6=["<",">",'"',"`"," ","\r",`
`,"	"],B6=["{","}","|","\\","^","`"].concat(U6),z6=["'"].concat(B6),qd=["%","/","?",";","#"].concat(z6),Wd=["/","?","#"],q6=255,jd=/^[+a-z0-9A-Z_-]{0,63}$/,W6=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Hd={javascript:!0,"javascript:":!0},Vd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ll(t,e){if(t&&t instanceof Ro)return t;const n=new Ro;return n.parse(t,e),n}Ro.prototype.parse=function(t,e){let n,i,s,r=t;if(r=r.trim(),!e&&t.split("#").length===1){const c=$6.exec(r);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=M6.exec(r);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,r=r.substr(o.length)),(e||o||r.match(/^\/\/[^@\/]+@[^@\/]+/))&&(s=r.substr(0,2)==="//",s&&!(o&&Hd[o])&&(r=r.substr(2),this.slashes=!0)),!Hd[o]&&(s||o&&!Vd[o])){let c=-1;for(let p=0;p<Wd.length;p++)i=r.indexOf(Wd[p]),i!==-1&&(c===-1||i<c)&&(c=i);let l,h;c===-1?h=r.lastIndexOf("@"):h=r.lastIndexOf("@",c),h!==-1&&(l=r.slice(0,h),r=r.slice(h+1),this.auth=l),c=-1;for(let p=0;p<qd.length;p++)i=r.indexOf(qd[p]),i!==-1&&(c===-1||i<c)&&(c=i);c===-1&&(c=r.length),r[c-1]===":"&&c--;const d=r.slice(0,c);r=r.slice(c),this.parseHost(d),this.hostname=this.hostname||"";const f=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!f){const p=this.hostname.split(/\./);for(let b=0,k=p.length;b<k;b++){const A=p[b];if(A&&!A.match(jd)){let w="";for(let C=0,x=A.length;C<x;C++)A.charCodeAt(C)>127?w+="x":w+=A[C];if(!w.match(jd)){const C=p.slice(0,b),x=p.slice(b+1),M=A.match(W6);M&&(C.push(M[1]),x.unshift(M[2])),x.length&&(r=x.join(".")+r),this.hostname=C.join(".");break}}}}this.hostname.length>q6&&(this.hostname=""),f&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const u=r.indexOf("#");u!==-1&&(this.hash=r.substr(u),r=r.slice(0,u));const a=r.indexOf("?");return a!==-1&&(this.search=r.substr(a),r=r.slice(0,a)),r&&(this.pathname=r),Vd[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Ro.prototype.parseHost=function(t){let e=L6.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};const j6=Object.freeze(Object.defineProperty({__proto__:null,decode:ss,encode:Er,format:cl,parse:ll},Symbol.toStringTag,{value:"Module"})),M_=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,L_=/[\0-\x1F\x7F-\x9F]/,H6=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,hl=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,$_=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,U_=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,V6=Object.freeze(Object.defineProperty({__proto__:null,Any:M_,Cc:L_,Cf:H6,P:hl,S:$_,Z:U_},Symbol.toStringTag,{value:"Module"})),G6=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(t=>t.charCodeAt(0))),K6=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(t=>t.charCodeAt(0)));var ju;const Y6=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Q6=(ju=String.fromCodePoint)!==null&&ju!==void 0?ju:function(t){let e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|t&1023),e+=String.fromCharCode(t),e};function Z6(t){var e;return t>=55296&&t<=57343||t>1114111?65533:(e=Y6.get(t))!==null&&e!==void 0?e:t}var $e;(function(t){t[t.NUM=35]="NUM",t[t.SEMI=59]="SEMI",t[t.EQUALS=61]="EQUALS",t[t.ZERO=48]="ZERO",t[t.NINE=57]="NINE",t[t.LOWER_A=97]="LOWER_A",t[t.LOWER_F=102]="LOWER_F",t[t.LOWER_X=120]="LOWER_X",t[t.LOWER_Z=122]="LOWER_Z",t[t.UPPER_A=65]="UPPER_A",t[t.UPPER_F=70]="UPPER_F",t[t.UPPER_Z=90]="UPPER_Z"})($e||($e={}));const J6=32;var On;(function(t){t[t.VALUE_LENGTH=49152]="VALUE_LENGTH",t[t.BRANCH_LENGTH=16256]="BRANCH_LENGTH",t[t.JUMP_TABLE=127]="JUMP_TABLE"})(On||(On={}));function Ba(t){return t>=$e.ZERO&&t<=$e.NINE}function X6(t){return t>=$e.UPPER_A&&t<=$e.UPPER_F||t>=$e.LOWER_A&&t<=$e.LOWER_F}function eC(t){return t>=$e.UPPER_A&&t<=$e.UPPER_Z||t>=$e.LOWER_A&&t<=$e.LOWER_Z||Ba(t)}function tC(t){return t===$e.EQUALS||eC(t)}var Ne;(function(t){t[t.EntityStart=0]="EntityStart",t[t.NumericStart=1]="NumericStart",t[t.NumericDecimal=2]="NumericDecimal",t[t.NumericHex=3]="NumericHex",t[t.NamedEntity=4]="NamedEntity"})(Ne||(Ne={}));var Sn;(function(t){t[t.Legacy=0]="Legacy",t[t.Strict=1]="Strict",t[t.Attribute=2]="Attribute"})(Sn||(Sn={}));class nC{constructor(e,n,i){this.decodeTree=e,this.emitCodePoint=n,this.errors=i,this.state=Ne.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Sn.Strict}startEntity(e){this.decodeMode=e,this.state=Ne.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,n){switch(this.state){case Ne.EntityStart:return e.charCodeAt(n)===$e.NUM?(this.state=Ne.NumericStart,this.consumed+=1,this.stateNumericStart(e,n+1)):(this.state=Ne.NamedEntity,this.stateNamedEntity(e,n));case Ne.NumericStart:return this.stateNumericStart(e,n);case Ne.NumericDecimal:return this.stateNumericDecimal(e,n);case Ne.NumericHex:return this.stateNumericHex(e,n);case Ne.NamedEntity:return this.stateNamedEntity(e,n)}}stateNumericStart(e,n){return n>=e.length?-1:(e.charCodeAt(n)|J6)===$e.LOWER_X?(this.state=Ne.NumericHex,this.consumed+=1,this.stateNumericHex(e,n+1)):(this.state=Ne.NumericDecimal,this.stateNumericDecimal(e,n))}addToNumericResult(e,n,i,s){if(n!==i){const r=i-n;this.result=this.result*Math.pow(s,r)+parseInt(e.substr(n,r),s),this.consumed+=r}}stateNumericHex(e,n){const i=n;for(;n<e.length;){const s=e.charCodeAt(n);if(Ba(s)||X6(s))n+=1;else return this.addToNumericResult(e,i,n,16),this.emitNumericEntity(s,3)}return this.addToNumericResult(e,i,n,16),-1}stateNumericDecimal(e,n){const i=n;for(;n<e.length;){const s=e.charCodeAt(n);if(Ba(s))n+=1;else return this.addToNumericResult(e,i,n,10),this.emitNumericEntity(s,2)}return this.addToNumericResult(e,i,n,10),-1}emitNumericEntity(e,n){var i;if(this.consumed<=n)return(i=this.errors)===null||i===void 0||i.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===$e.SEMI)this.consumed+=1;else if(this.decodeMode===Sn.Strict)return 0;return this.emitCodePoint(Z6(this.result),this.consumed),this.errors&&(e!==$e.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,n){const{decodeTree:i}=this;let s=i[this.treeIndex],r=(s&On.VALUE_LENGTH)>>14;for(;n<e.length;n++,this.excess++){const o=e.charCodeAt(n);if(this.treeIndex=iC(i,s,this.treeIndex+Math.max(1,r),o),this.treeIndex<0)return this.result===0||this.decodeMode===Sn.Attribute&&(r===0||tC(o))?0:this.emitNotTerminatedNamedEntity();if(s=i[this.treeIndex],r=(s&On.VALUE_LENGTH)>>14,r!==0){if(o===$e.SEMI)return this.emitNamedEntityData(this.treeIndex,r,this.consumed+this.excess);this.decodeMode!==Sn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:n,decodeTree:i}=this,s=(i[n]&On.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,s,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,n,i){const{decodeTree:s}=this;return this.emitCodePoint(n===1?s[e]&~On.VALUE_LENGTH:s[e+1],i),n===3&&this.emitCodePoint(s[e+2],i),i}end(){var e;switch(this.state){case Ne.NamedEntity:return this.result!==0&&(this.decodeMode!==Sn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ne.NumericDecimal:return this.emitNumericEntity(0,2);case Ne.NumericHex:return this.emitNumericEntity(0,3);case Ne.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ne.EntityStart:return 0}}}function B_(t){let e="";const n=new nC(t,i=>e+=Q6(i));return function(s,r){let o=0,u=0;for(;(u=s.indexOf("&",u))>=0;){e+=s.slice(o,u),n.startEntity(r);const c=n.write(s,u+1);if(c<0){o=u+n.end();break}o=u+c,u=c===0?o+1:o}const a=e+s.slice(o);return e="",a}}function iC(t,e,n,i){const s=(e&On.BRANCH_LENGTH)>>7,r=e&On.JUMP_TABLE;if(s===0)return r!==0&&i===r?n:-1;if(r){const a=i-r;return a<0||a>=s?-1:t[n+a]-1}let o=n,u=o+s-1;for(;o<=u;){const a=o+u>>>1,c=t[a];if(c<i)o=a+1;else if(c>i)u=a-1;else return t[a+s]}return-1}const sC=B_(G6);B_(K6);function z_(t,e=Sn.Legacy){return sC(t,e)}function rC(t){return Object.prototype.toString.call(t)}function dl(t){return rC(t)==="[object String]"}const oC=Object.prototype.hasOwnProperty;function uC(t,e){return oC.call(t,e)}function mu(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(i){t[i]=n[i]})}}),t}function q_(t,e,n){return[].concat(t.slice(0,e),n,t.slice(e+1))}function fl(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function Do(t){if(t>65535){t-=65536;const e=55296+(t>>10),n=56320+(t&1023);return String.fromCharCode(e,n)}return String.fromCharCode(t)}const W_=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,aC=/&([a-z#][a-z0-9]{1,31});/gi,cC=new RegExp(W_.source+"|"+aC.source,"gi"),lC=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function hC(t,e){if(e.charCodeAt(0)===35&&lC.test(e)){const i=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return fl(i)?Do(i):t}const n=z_(t);return n!==t?n:t}function dC(t){return t.indexOf("\\")<0?t:t.replace(W_,"$1")}function rs(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(cC,function(e,n,i){return n||hC(e,i)})}const fC=/[&<>"]/,pC=/[&<>"]/g,_C={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function gC(t){return _C[t]}function Hn(t){return fC.test(t)?t.replace(pC,gC):t}const mC=/[.?*+^$[\]\\(){}|-]/g;function bC(t){return t.replace(mC,"\\$&")}function be(t){switch(t){case 9:case 32:return!0}return!1}function cr(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function lr(t){return hl.test(t)||$_.test(t)}function hr(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function bu(t){return t=t.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(t=t.replace(/ẞ/g,"ß")),t.toLowerCase().toUpperCase()}const yC={mdurl:j6,ucmicro:V6},vC=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:q_,assign:mu,escapeHtml:Hn,escapeRE:bC,fromCodePoint:Do,has:uC,isMdAsciiPunct:hr,isPunctChar:lr,isSpace:be,isString:dl,isValidEntityCode:fl,isWhiteSpace:cr,lib:yC,normalizeReference:bu,unescapeAll:rs,unescapeMd:dC},Symbol.toStringTag,{value:"Module"}));function kC(t,e,n){let i,s,r,o;const u=t.posMax,a=t.pos;for(t.pos=e+1,i=1;t.pos<u;){if(r=t.src.charCodeAt(t.pos),r===93&&(i--,i===0)){s=!0;break}if(o=t.pos,t.md.inline.skipToken(t),r===91){if(o===t.pos-1)i++;else if(n)return t.pos=a,-1}}let c=-1;return s&&(c=t.pos),t.pos=a,c}function xC(t,e,n){let i,s=e;const r={ok:!1,pos:0,str:""};if(t.charCodeAt(s)===60){for(s++;s<n;){if(i=t.charCodeAt(s),i===10||i===60)return r;if(i===62)return r.pos=s+1,r.str=rs(t.slice(e+1,s)),r.ok=!0,r;if(i===92&&s+1<n){s+=2;continue}s++}return r}let o=0;for(;s<n&&(i=t.charCodeAt(s),!(i===32||i<32||i===127));){if(i===92&&s+1<n){if(t.charCodeAt(s+1)===32)break;s+=2;continue}if(i===40&&(o++,o>32))return r;if(i===41){if(o===0)break;o--}s++}return e===s||o!==0||(r.str=rs(t.slice(e,s)),r.pos=s,r.ok=!0),r}function EC(t,e,n,i){let s,r=e;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(i)o.str=i.str,o.marker=i.marker;else{if(r>=n)return o;let u=t.charCodeAt(r);if(u!==34&&u!==39&&u!==40)return o;e++,r++,u===40&&(u=41),o.marker=u}for(;r<n;){if(s=t.charCodeAt(r),s===o.marker)return o.pos=r+1,o.str+=rs(t.slice(e,r)),o.ok=!0,o;if(s===40&&o.marker===41)return o;s===92&&r+1<n&&r++,r++}return o.can_continue=!0,o.str+=rs(t.slice(e,r)),o}const wC=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:xC,parseLinkLabel:kC,parseLinkTitle:EC},Symbol.toStringTag,{value:"Module"})),Xt={};Xt.code_inline=function(t,e,n,i,s){const r=t[e];return"<code"+s.renderAttrs(r)+">"+Hn(r.content)+"</code>"};Xt.code_block=function(t,e,n,i,s){const r=t[e];return"<pre"+s.renderAttrs(r)+"><code>"+Hn(t[e].content)+`</code></pre>
`};Xt.fence=function(t,e,n,i,s){const r=t[e],o=r.info?rs(r.info).trim():"";let u="",a="";if(o){const l=o.split(/(\s+)/g);u=l[0],a=l.slice(2).join("")}let c;if(n.highlight?c=n.highlight(r.content,u,a)||Hn(r.content):c=Hn(r.content),c.indexOf("<pre")===0)return c+`
`;if(o){const l=r.attrIndex("class"),h=r.attrs?r.attrs.slice():[];l<0?h.push(["class",n.langPrefix+u]):(h[l]=h[l].slice(),h[l][1]+=" "+n.langPrefix+u);const d={attrs:h};return`<pre><code${s.renderAttrs(d)}>${c}</code></pre>
`}return`<pre><code${s.renderAttrs(r)}>${c}</code></pre>
`};Xt.image=function(t,e,n,i,s){const r=t[e];return r.attrs[r.attrIndex("alt")][1]=s.renderInlineAsText(r.children,n,i),s.renderToken(t,e,n)};Xt.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};Xt.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Xt.text=function(t,e){return Hn(t[e].content)};Xt.html_block=function(t,e){return t[e].content};Xt.html_inline=function(t,e){return t[e].content};function _s(){this.rules=mu({},Xt)}_s.prototype.renderAttrs=function(e){let n,i,s;if(!e.attrs)return"";for(s="",n=0,i=e.attrs.length;n<i;n++)s+=" "+Hn(e.attrs[n][0])+'="'+Hn(e.attrs[n][1])+'"';return s};_s.prototype.renderToken=function(e,n,i){const s=e[n];let r="";if(s.hidden)return"";s.block&&s.nesting!==-1&&n&&e[n-1].hidden&&(r+=`
`),r+=(s.nesting===-1?"</":"<")+s.tag,r+=this.renderAttrs(s),s.nesting===0&&i.xhtmlOut&&(r+=" /");let o=!1;if(s.block&&(o=!0,s.nesting===1&&n+1<e.length)){const u=e[n+1];(u.type==="inline"||u.hidden||u.nesting===-1&&u.tag===s.tag)&&(o=!1)}return r+=o?`>
`:">",r};_s.prototype.renderInline=function(t,e,n){let i="";const s=this.rules;for(let r=0,o=t.length;r<o;r++){const u=t[r].type;typeof s[u]<"u"?i+=s[u](t,r,e,n,this):i+=this.renderToken(t,r,e)}return i};_s.prototype.renderInlineAsText=function(t,e,n){let i="";for(let s=0,r=t.length;s<r;s++)switch(t[s].type){case"text":i+=t[s].content;break;case"image":i+=this.renderInlineAsText(t[s].children,e,n);break;case"html_inline":case"html_block":i+=t[s].content;break;case"softbreak":case"hardbreak":i+=`
`;break}return i};_s.prototype.render=function(t,e,n){let i="";const s=this.rules;for(let r=0,o=t.length;r<o;r++){const u=t[r].type;u==="inline"?i+=this.renderInline(t[r].children,e,n):typeof s[u]<"u"?i+=s[u](t,r,e,n,this):i+=this.renderToken(t,r,e,n)}return i};function ut(){this.__rules__=[],this.__cache__=null}ut.prototype.__find__=function(t){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};ut.prototype.__compile__=function(){const t=this,e=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(i){e.indexOf(i)<0&&e.push(i)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(i){i.enabled&&(n&&i.alt.indexOf(n)<0||t.__cache__[n].push(i.fn))})})};ut.prototype.at=function(t,e,n){const i=this.__find__(t),s=n||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__[i].fn=e,this.__rules__[i].alt=s.alt||[],this.__cache__=null};ut.prototype.before=function(t,e,n,i){const s=this.__find__(t),r=i||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s,0,{name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};ut.prototype.after=function(t,e,n,i){const s=this.__find__(t),r=i||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s+1,0,{name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};ut.prototype.push=function(t,e,n){const i=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:i.alt||[]}),this.__cache__=null};ut.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(i){const s=this.__find__(i);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[s].enabled=!0,n.push(i)},this),this.__cache__=null,n};ut.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)};ut.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(i){const s=this.__find__(i);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[s].enabled=!1,n.push(i)},this),this.__cache__=null,n};ut.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};function Ft(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Ft.prototype.attrIndex=function(e){if(!this.attrs)return-1;const n=this.attrs;for(let i=0,s=n.length;i<s;i++)if(n[i][0]===e)return i;return-1};Ft.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};Ft.prototype.attrSet=function(e,n){const i=this.attrIndex(e),s=[e,n];i<0?this.attrPush(s):this.attrs[i]=s};Ft.prototype.attrGet=function(e){const n=this.attrIndex(e);let i=null;return n>=0&&(i=this.attrs[n][1]),i};Ft.prototype.attrJoin=function(e,n){const i=this.attrIndex(e);i<0?this.attrPush([e,n]):this.attrs[i][1]=this.attrs[i][1]+" "+n};function j_(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}j_.prototype.Token=Ft;const CC=/\r\n?|\n/g,IC=/\0/g;function TC(t){let e;e=t.src.replace(CC,`
`),e=e.replace(IC,"�"),t.src=e}function AC(t){let e;t.inlineMode?(e=new t.Token("inline","",0),e.content=t.src,e.map=[0,1],e.children=[],t.tokens.push(e)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}function SC(t){const e=t.tokens;for(let n=0,i=e.length;n<i;n++){const s=e[n];s.type==="inline"&&t.md.inline.parse(s.content,t.md,t.env,s.children)}}function RC(t){return/^<a[>\s]/i.test(t)}function DC(t){return/^<\/a\s*>/i.test(t)}function PC(t){const e=t.tokens;if(t.md.options.linkify)for(let n=0,i=e.length;n<i;n++){if(e[n].type!=="inline"||!t.md.linkify.pretest(e[n].content))continue;let s=e[n].children,r=0;for(let o=s.length-1;o>=0;o--){const u=s[o];if(u.type==="link_close"){for(o--;s[o].level!==u.level&&s[o].type!=="link_open";)o--;continue}if(u.type==="html_inline"&&(RC(u.content)&&r>0&&r--,DC(u.content)&&r++),!(r>0)&&u.type==="text"&&t.md.linkify.test(u.content)){const a=u.content;let c=t.md.linkify.match(a);const l=[];let h=u.level,d=0;c.length>0&&c[0].index===0&&o>0&&s[o-1].type==="text_special"&&(c=c.slice(1));for(let f=0;f<c.length;f++){const p=c[f].url,b=t.md.normalizeLink(p);if(!t.md.validateLink(b))continue;let k=c[f].text;c[f].schema?c[f].schema==="mailto:"&&!/^mailto:/i.test(k)?k=t.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):k=t.md.normalizeLinkText(k):k=t.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,"");const A=c[f].index;if(A>d){const M=new t.Token("text","",0);M.content=a.slice(d,A),M.level=h,l.push(M)}const w=new t.Token("link_open","a",1);w.attrs=[["href",b]],w.level=h++,w.markup="linkify",w.info="auto",l.push(w);const C=new t.Token("text","",0);C.content=k,C.level=h,l.push(C);const x=new t.Token("link_close","a",-1);x.level=--h,x.markup="linkify",x.info="auto",l.push(x),d=c[f].lastIndex}if(d<a.length){const f=new t.Token("text","",0);f.content=a.slice(d),f.level=h,l.push(f)}e[n].children=s=q_(s,o,l)}}}}const H_=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,NC=/\((c|tm|r)\)/i,OC=/\((c|tm|r)\)/ig,FC={c:"©",r:"®",tm:"™"};function MC(t,e){return FC[e.toLowerCase()]}function LC(t){let e=0;for(let n=t.length-1;n>=0;n--){const i=t[n];i.type==="text"&&!e&&(i.content=i.content.replace(OC,MC)),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function $C(t){let e=0;for(let n=t.length-1;n>=0;n--){const i=t[n];i.type==="text"&&!e&&H_.test(i.content)&&(i.content=i.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),i.type==="link_open"&&i.info==="auto"&&e--,i.type==="link_close"&&i.info==="auto"&&e++}}function UC(t){let e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)t.tokens[e].type==="inline"&&(NC.test(t.tokens[e].content)&&LC(t.tokens[e].children),H_.test(t.tokens[e].content)&&$C(t.tokens[e].children))}const BC=/['"]/,Gd=/['"]/g,Kd="’";function Lr(t,e,n){return t.slice(0,e)+n+t.slice(e+1)}function zC(t,e){let n;const i=[];for(let s=0;s<t.length;s++){const r=t[s],o=t[s].level;for(n=i.length-1;n>=0&&!(i[n].level<=o);n--);if(i.length=n+1,r.type!=="text")continue;let u=r.content,a=0,c=u.length;e:for(;a<c;){Gd.lastIndex=a;const l=Gd.exec(u);if(!l)break;let h=!0,d=!0;a=l.index+1;const f=l[0]==="'";let p=32;if(l.index-1>=0)p=u.charCodeAt(l.index-1);else for(n=s-1;n>=0&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n--)if(t[n].content){p=t[n].content.charCodeAt(t[n].content.length-1);break}let b=32;if(a<c)b=u.charCodeAt(a);else for(n=s+1;n<t.length&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n++)if(t[n].content){b=t[n].content.charCodeAt(0);break}const k=hr(p)||lr(String.fromCharCode(p)),A=hr(b)||lr(String.fromCharCode(b)),w=cr(p),C=cr(b);if(C?h=!1:A&&(w||k||(h=!1)),w?d=!1:k&&(C||A||(d=!1)),b===34&&l[0]==='"'&&p>=48&&p<=57&&(d=h=!1),h&&d&&(h=k,d=A),!h&&!d){f&&(r.content=Lr(r.content,l.index,Kd));continue}if(d)for(n=i.length-1;n>=0;n--){let x=i[n];if(i[n].level<o)break;if(x.single===f&&i[n].level===o){x=i[n];let M,$;f?(M=e.md.options.quotes[2],$=e.md.options.quotes[3]):(M=e.md.options.quotes[0],$=e.md.options.quotes[1]),r.content=Lr(r.content,l.index,$),t[x.token].content=Lr(t[x.token].content,x.pos,M),a+=$.length-1,x.token===s&&(a+=M.length-1),u=r.content,c=u.length,i.length=n;continue e}}h?i.push({token:s,pos:l.index,single:f,level:o}):d&&f&&(r.content=Lr(r.content,l.index,Kd))}}}function qC(t){if(t.md.options.typographer)for(let e=t.tokens.length-1;e>=0;e--)t.tokens[e].type!=="inline"||!BC.test(t.tokens[e].content)||zC(t.tokens[e].children,t)}function WC(t){let e,n;const i=t.tokens,s=i.length;for(let r=0;r<s;r++){if(i[r].type!=="inline")continue;const o=i[r].children,u=o.length;for(e=0;e<u;e++)o[e].type==="text_special"&&(o[e].type="text");for(e=n=0;e<u;e++)o[e].type==="text"&&e+1<u&&o[e+1].type==="text"?o[e+1].content=o[e].content+o[e+1].content:(e!==n&&(o[n]=o[e]),n++);e!==n&&(o.length=n)}}const Hu=[["normalize",TC],["block",AC],["inline",SC],["linkify",PC],["replacements",UC],["smartquotes",qC],["text_join",WC]];function pl(){this.ruler=new ut;for(let t=0;t<Hu.length;t++)this.ruler.push(Hu[t][0],Hu[t][1])}pl.prototype.process=function(t){const e=this.ruler.getRules("");for(let n=0,i=e.length;n<i;n++)e[n](t)};pl.prototype.State=j_;function en(t,e,n,i){this.src=t,this.md=e,this.env=n,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const s=this.src;for(let r=0,o=0,u=0,a=0,c=s.length,l=!1;o<c;o++){const h=s.charCodeAt(o);if(!l)if(be(h)){u++,h===9?a+=4-a%4:a++;continue}else l=!0;(h===10||o===c-1)&&(h!==10&&o++,this.bMarks.push(r),this.eMarks.push(o),this.tShift.push(u),this.sCount.push(a),this.bsCount.push(0),l=!1,u=0,a=0,r=o+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}en.prototype.push=function(t,e,n){const i=new Ft(t,e,n);return i.block=!0,n<0&&this.level--,i.level=this.level,n>0&&this.level++,this.tokens.push(i),i};en.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};en.prototype.skipEmptyLines=function(e){for(let n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};en.prototype.skipSpaces=function(e){for(let n=this.src.length;e<n;e++){const i=this.src.charCodeAt(e);if(!be(i))break}return e};en.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!be(this.src.charCodeAt(--e)))return e+1;return e};en.prototype.skipChars=function(e,n){for(let i=this.src.length;e<i&&this.src.charCodeAt(e)===n;e++);return e};en.prototype.skipCharsBack=function(e,n,i){if(e<=i)return e;for(;e>i;)if(n!==this.src.charCodeAt(--e))return e+1;return e};en.prototype.getLines=function(e,n,i,s){if(e>=n)return"";const r=new Array(n-e);for(let o=0,u=e;u<n;u++,o++){let a=0;const c=this.bMarks[u];let l=c,h;for(u+1<n||s?h=this.eMarks[u]+1:h=this.eMarks[u];l<h&&a<i;){const d=this.src.charCodeAt(l);if(be(d))d===9?a+=4-(a+this.bsCount[u])%4:a++;else if(l-c<this.tShift[u])a++;else break;l++}a>i?r[o]=new Array(a-i+1).join(" ")+this.src.slice(l,h):r[o]=this.src.slice(l,h)}return r.join("")};en.prototype.Token=Ft;const jC=65536;function Vu(t,e){const n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];return t.src.slice(n,i)}function Yd(t){const e=[],n=t.length;let i=0,s=t.charCodeAt(i),r=!1,o=0,u="";for(;i<n;)s===124&&(r?(u+=t.substring(o,i-1),o=i):(e.push(u+t.substring(o,i)),u="",o=i+1)),r=s===92,i++,s=t.charCodeAt(i);return e.push(u+t.substring(o)),e}function HC(t,e,n,i){if(e+2>n)return!1;let s=e+1;if(t.sCount[s]<t.blkIndent||t.sCount[s]-t.blkIndent>=4)return!1;let r=t.bMarks[s]+t.tShift[s];if(r>=t.eMarks[s])return!1;const o=t.src.charCodeAt(r++);if(o!==124&&o!==45&&o!==58||r>=t.eMarks[s])return!1;const u=t.src.charCodeAt(r++);if(u!==124&&u!==45&&u!==58&&!be(u)||o===45&&be(u))return!1;for(;r<t.eMarks[s];){const x=t.src.charCodeAt(r);if(x!==124&&x!==45&&x!==58&&!be(x))return!1;r++}let a=Vu(t,e+1),c=a.split("|");const l=[];for(let x=0;x<c.length;x++){const M=c[x].trim();if(!M){if(x===0||x===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(M))return!1;M.charCodeAt(M.length-1)===58?l.push(M.charCodeAt(0)===58?"center":"right"):M.charCodeAt(0)===58?l.push("left"):l.push("")}if(a=Vu(t,e).trim(),a.indexOf("|")===-1||t.sCount[e]-t.blkIndent>=4)return!1;c=Yd(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const h=c.length;if(h===0||h!==l.length)return!1;if(i)return!0;const d=t.parentType;t.parentType="table";const f=t.md.block.ruler.getRules("blockquote"),p=t.push("table_open","table",1),b=[e,0];p.map=b;const k=t.push("thead_open","thead",1);k.map=[e,e+1];const A=t.push("tr_open","tr",1);A.map=[e,e+1];for(let x=0;x<c.length;x++){const M=t.push("th_open","th",1);l[x]&&(M.attrs=[["style","text-align:"+l[x]]]);const $=t.push("inline","",0);$.content=c[x].trim(),$.children=[],t.push("th_close","th",-1)}t.push("tr_close","tr",-1),t.push("thead_close","thead",-1);let w,C=0;for(s=e+2;s<n&&!(t.sCount[s]<t.blkIndent);s++){let x=!1;for(let $=0,K=f.length;$<K;$++)if(f[$](t,s,n,!0)){x=!0;break}if(x||(a=Vu(t,s).trim(),!a)||t.sCount[s]-t.blkIndent>=4||(c=Yd(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),C+=h-c.length,C>jC))break;if(s===e+2){const $=t.push("tbody_open","tbody",1);$.map=w=[e+2,0]}const M=t.push("tr_open","tr",1);M.map=[s,s+1];for(let $=0;$<h;$++){const K=t.push("td_open","td",1);l[$]&&(K.attrs=[["style","text-align:"+l[$]]]);const ne=t.push("inline","",0);ne.content=c[$]?c[$].trim():"",ne.children=[],t.push("td_close","td",-1)}t.push("tr_close","tr",-1)}return w&&(t.push("tbody_close","tbody",-1),w[1]=s),t.push("table_close","table",-1),b[1]=s,t.parentType=d,t.line=s,!0}function VC(t,e,n){if(t.sCount[e]-t.blkIndent<4)return!1;let i=e+1,s=i;for(;i<n;){if(t.isEmpty(i)){i++;continue}if(t.sCount[i]-t.blkIndent>=4){i++,s=i;continue}break}t.line=s;const r=t.push("code_block","code",0);return r.content=t.getLines(e,s,4+t.blkIndent,!1)+`
`,r.map=[e,t.line],!0}function GC(t,e,n,i){let s=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||s+3>r)return!1;const o=t.src.charCodeAt(s);if(o!==126&&o!==96)return!1;let u=s;s=t.skipChars(s,o);let a=s-u;if(a<3)return!1;const c=t.src.slice(u,s),l=t.src.slice(s,r);if(o===96&&l.indexOf(String.fromCharCode(o))>=0)return!1;if(i)return!0;let h=e,d=!1;for(;h++,!(h>=n||(s=u=t.bMarks[h]+t.tShift[h],r=t.eMarks[h],s<r&&t.sCount[h]<t.blkIndent));)if(t.src.charCodeAt(s)===o&&!(t.sCount[h]-t.blkIndent>=4)&&(s=t.skipChars(s,o),!(s-u<a)&&(s=t.skipSpaces(s),!(s<r)))){d=!0;break}a=t.sCount[e],t.line=h+(d?1:0);const f=t.push("fence","code",0);return f.info=l,f.content=t.getLines(e+1,h,a,!0),f.markup=c,f.map=[e,t.line],!0}function KC(t,e,n,i){let s=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];const o=t.lineMax;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(s)!==62)return!1;if(i)return!0;const u=[],a=[],c=[],l=[],h=t.md.block.ruler.getRules("blockquote"),d=t.parentType;t.parentType="blockquote";let f=!1,p;for(p=e;p<n;p++){const C=t.sCount[p]<t.blkIndent;if(s=t.bMarks[p]+t.tShift[p],r=t.eMarks[p],s>=r)break;if(t.src.charCodeAt(s++)===62&&!C){let M=t.sCount[p]+1,$,K;t.src.charCodeAt(s)===32?(s++,M++,K=!1,$=!0):t.src.charCodeAt(s)===9?($=!0,(t.bsCount[p]+M)%4===3?(s++,M++,K=!1):K=!0):$=!1;let ne=M;for(u.push(t.bMarks[p]),t.bMarks[p]=s;s<r;){const Te=t.src.charCodeAt(s);if(be(Te))Te===9?ne+=4-(ne+t.bsCount[p]+(K?1:0))%4:ne++;else break;s++}f=s>=r,a.push(t.bsCount[p]),t.bsCount[p]=t.sCount[p]+1+($?1:0),c.push(t.sCount[p]),t.sCount[p]=ne-M,l.push(t.tShift[p]),t.tShift[p]=s-t.bMarks[p];continue}if(f)break;let x=!1;for(let M=0,$=h.length;M<$;M++)if(h[M](t,p,n,!0)){x=!0;break}if(x){t.lineMax=p,t.blkIndent!==0&&(u.push(t.bMarks[p]),a.push(t.bsCount[p]),l.push(t.tShift[p]),c.push(t.sCount[p]),t.sCount[p]-=t.blkIndent);break}u.push(t.bMarks[p]),a.push(t.bsCount[p]),l.push(t.tShift[p]),c.push(t.sCount[p]),t.sCount[p]=-1}const b=t.blkIndent;t.blkIndent=0;const k=t.push("blockquote_open","blockquote",1);k.markup=">";const A=[e,0];k.map=A,t.md.block.tokenize(t,e,p);const w=t.push("blockquote_close","blockquote",-1);w.markup=">",t.lineMax=o,t.parentType=d,A[1]=t.line;for(let C=0;C<l.length;C++)t.bMarks[C+e]=u[C],t.tShift[C+e]=l[C],t.sCount[C+e]=c[C],t.bsCount[C+e]=a[C];return t.blkIndent=b,!0}function YC(t,e,n,i){const s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let r=t.bMarks[e]+t.tShift[e];const o=t.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==95)return!1;let u=1;for(;r<s;){const c=t.src.charCodeAt(r++);if(c!==o&&!be(c))return!1;c===o&&u++}if(u<3)return!1;if(i)return!0;t.line=e+1;const a=t.push("hr","hr",0);return a.map=[e,t.line],a.markup=Array(u+1).join(String.fromCharCode(o)),!0}function Qd(t,e){const n=t.eMarks[e];let i=t.bMarks[e]+t.tShift[e];const s=t.src.charCodeAt(i++);if(s!==42&&s!==45&&s!==43)return-1;if(i<n){const r=t.src.charCodeAt(i);if(!be(r))return-1}return i}function Zd(t,e){const n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];let s=n;if(s+1>=i)return-1;let r=t.src.charCodeAt(s++);if(r<48||r>57)return-1;for(;;){if(s>=i)return-1;if(r=t.src.charCodeAt(s++),r>=48&&r<=57){if(s-n>=10)return-1;continue}if(r===41||r===46)break;return-1}return s<i&&(r=t.src.charCodeAt(s),!be(r))?-1:s}function QC(t,e){const n=t.level+2;for(let i=e+2,s=t.tokens.length-2;i<s;i++)t.tokens[i].level===n&&t.tokens[i].type==="paragraph_open"&&(t.tokens[i+2].hidden=!0,t.tokens[i].hidden=!0,i+=2)}function ZC(t,e,n,i){let s,r,o,u,a=e,c=!0;if(t.sCount[a]-t.blkIndent>=4||t.listIndent>=0&&t.sCount[a]-t.listIndent>=4&&t.sCount[a]<t.blkIndent)return!1;let l=!1;i&&t.parentType==="paragraph"&&t.sCount[a]>=t.blkIndent&&(l=!0);let h,d,f;if((f=Zd(t,a))>=0){if(h=!0,o=t.bMarks[a]+t.tShift[a],d=Number(t.src.slice(o,f-1)),l&&d!==1)return!1}else if((f=Qd(t,a))>=0)h=!1;else return!1;if(l&&t.skipSpaces(f)>=t.eMarks[a])return!1;if(i)return!0;const p=t.src.charCodeAt(f-1),b=t.tokens.length;h?(u=t.push("ordered_list_open","ol",1),d!==1&&(u.attrs=[["start",d]])):u=t.push("bullet_list_open","ul",1);const k=[a,0];u.map=k,u.markup=String.fromCharCode(p);let A=!1;const w=t.md.block.ruler.getRules("list"),C=t.parentType;for(t.parentType="list";a<n;){r=f,s=t.eMarks[a];const x=t.sCount[a]+f-(t.bMarks[a]+t.tShift[a]);let M=x;for(;r<s;){const at=t.src.charCodeAt(r);if(at===9)M+=4-(M+t.bsCount[a])%4;else if(at===32)M++;else break;r++}const $=r;let K;$>=s?K=1:K=M-x,K>4&&(K=1);const ne=x+K;u=t.push("list_item_open","li",1),u.markup=String.fromCharCode(p);const Te=[a,0];u.map=Te,h&&(u.info=t.src.slice(o,f-1));const Pe=t.tight,ft=t.tShift[a],tn=t.sCount[a],pt=t.listIndent;if(t.listIndent=t.blkIndent,t.blkIndent=ne,t.tight=!0,t.tShift[a]=$-t.bMarks[a],t.sCount[a]=M,$>=s&&t.isEmpty(a+1)?t.line=Math.min(t.line+2,n):t.md.block.tokenize(t,a,n,!0),(!t.tight||A)&&(c=!1),A=t.line-a>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=pt,t.tShift[a]=ft,t.sCount[a]=tn,t.tight=Pe,u=t.push("list_item_close","li",-1),u.markup=String.fromCharCode(p),a=t.line,Te[1]=a,a>=n||t.sCount[a]<t.blkIndent||t.sCount[a]-t.blkIndent>=4)break;let bn=!1;for(let at=0,Ae=w.length;at<Ae;at++)if(w[at](t,a,n,!0)){bn=!0;break}if(bn)break;if(h){if(f=Zd(t,a),f<0)break;o=t.bMarks[a]+t.tShift[a]}else if(f=Qd(t,a),f<0)break;if(p!==t.src.charCodeAt(f-1))break}return h?u=t.push("ordered_list_close","ol",-1):u=t.push("bullet_list_close","ul",-1),u.markup=String.fromCharCode(p),k[1]=a,t.line=a,t.parentType=C,c&&QC(t,b),!0}function JC(t,e,n,i){let s=t.bMarks[e]+t.tShift[e],r=t.eMarks[e],o=e+1;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(s)!==91)return!1;function u(w){const C=t.lineMax;if(w>=C||t.isEmpty(w))return null;let x=!1;if(t.sCount[w]-t.blkIndent>3&&(x=!0),t.sCount[w]<0&&(x=!0),!x){const K=t.md.block.ruler.getRules("reference"),ne=t.parentType;t.parentType="reference";let Te=!1;for(let Pe=0,ft=K.length;Pe<ft;Pe++)if(K[Pe](t,w,C,!0)){Te=!0;break}if(t.parentType=ne,Te)return null}const M=t.bMarks[w]+t.tShift[w],$=t.eMarks[w];return t.src.slice(M,$+1)}let a=t.src.slice(s,r+1);r=a.length;let c=-1;for(s=1;s<r;s++){const w=a.charCodeAt(s);if(w===91)return!1;if(w===93){c=s;break}else if(w===10){const C=u(o);C!==null&&(a+=C,r=a.length,o++)}else if(w===92&&(s++,s<r&&a.charCodeAt(s)===10)){const C=u(o);C!==null&&(a+=C,r=a.length,o++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(s=c+2;s<r;s++){const w=a.charCodeAt(s);if(w===10){const C=u(o);C!==null&&(a+=C,r=a.length,o++)}else if(!be(w))break}const l=t.md.helpers.parseLinkDestination(a,s,r);if(!l.ok)return!1;const h=t.md.normalizeLink(l.str);if(!t.md.validateLink(h))return!1;s=l.pos;const d=s,f=o,p=s;for(;s<r;s++){const w=a.charCodeAt(s);if(w===10){const C=u(o);C!==null&&(a+=C,r=a.length,o++)}else if(!be(w))break}let b=t.md.helpers.parseLinkTitle(a,s,r);for(;b.can_continue;){const w=u(o);if(w===null)break;a+=w,s=r,r=a.length,o++,b=t.md.helpers.parseLinkTitle(a,s,r,b)}let k;for(s<r&&p!==s&&b.ok?(k=b.str,s=b.pos):(k="",s=d,o=f);s<r;){const w=a.charCodeAt(s);if(!be(w))break;s++}if(s<r&&a.charCodeAt(s)!==10&&k)for(k="",s=d,o=f;s<r;){const w=a.charCodeAt(s);if(!be(w))break;s++}if(s<r&&a.charCodeAt(s)!==10)return!1;const A=bu(a.slice(1,c));return A?(i||(typeof t.env.references>"u"&&(t.env.references={}),typeof t.env.references[A]>"u"&&(t.env.references[A]={title:k,href:h}),t.line=o),!0):!1}const XC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],eI="[a-zA-Z_:][a-zA-Z0-9:._-]*",tI="[^\"'=<>`\\x00-\\x20]+",nI="'[^']*'",iI='"[^"]*"',sI="(?:"+tI+"|"+nI+"|"+iI+")",rI="(?:\\s+"+eI+"(?:\\s*=\\s*"+sI+")?)",V_="<[A-Za-z][A-Za-z0-9\\-]*"+rI+"*\\s*\\/?>",G_="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",oI="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",uI="<[?][\\s\\S]*?[?]>",aI="<![A-Za-z][^>]*>",cI="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",lI=new RegExp("^(?:"+V_+"|"+G_+"|"+oI+"|"+uI+"|"+aI+"|"+cI+")"),hI=new RegExp("^(?:"+V_+"|"+G_+")"),Ri=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+XC.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(hI.source+"\\s*$"),/^$/,!1]];function dI(t,e,n,i){let s=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||!t.md.options.html||t.src.charCodeAt(s)!==60)return!1;let o=t.src.slice(s,r),u=0;for(;u<Ri.length&&!Ri[u][0].test(o);u++);if(u===Ri.length)return!1;if(i)return Ri[u][2];let a=e+1;if(!Ri[u][1].test(o)){for(;a<n&&!(t.sCount[a]<t.blkIndent);a++)if(s=t.bMarks[a]+t.tShift[a],r=t.eMarks[a],o=t.src.slice(s,r),Ri[u][1].test(o)){o.length!==0&&a++;break}}t.line=a;const c=t.push("html_block","",0);return c.map=[e,a],c.content=t.getLines(e,a,t.blkIndent,!0),!0}function fI(t,e,n,i){let s=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let o=t.src.charCodeAt(s);if(o!==35||s>=r)return!1;let u=1;for(o=t.src.charCodeAt(++s);o===35&&s<r&&u<=6;)u++,o=t.src.charCodeAt(++s);if(u>6||s<r&&!be(o))return!1;if(i)return!0;r=t.skipSpacesBack(r,s);const a=t.skipCharsBack(r,35,s);a>s&&be(t.src.charCodeAt(a-1))&&(r=a),t.line=e+1;const c=t.push("heading_open","h"+String(u),1);c.markup="########".slice(0,u),c.map=[e,t.line];const l=t.push("inline","",0);l.content=t.src.slice(s,r).trim(),l.map=[e,t.line],l.children=[];const h=t.push("heading_close","h"+String(u),-1);return h.markup="########".slice(0,u),!0}function pI(t,e,n){const i=t.md.block.ruler.getRules("paragraph");if(t.sCount[e]-t.blkIndent>=4)return!1;const s=t.parentType;t.parentType="paragraph";let r=0,o,u=e+1;for(;u<n&&!t.isEmpty(u);u++){if(t.sCount[u]-t.blkIndent>3)continue;if(t.sCount[u]>=t.blkIndent){let f=t.bMarks[u]+t.tShift[u];const p=t.eMarks[u];if(f<p&&(o=t.src.charCodeAt(f),(o===45||o===61)&&(f=t.skipChars(f,o),f=t.skipSpaces(f),f>=p))){r=o===61?1:2;break}}if(t.sCount[u]<0)continue;let d=!1;for(let f=0,p=i.length;f<p;f++)if(i[f](t,u,n,!0)){d=!0;break}if(d)break}if(!r)return!1;const a=t.getLines(e,u,t.blkIndent,!1).trim();t.line=u+1;const c=t.push("heading_open","h"+String(r),1);c.markup=String.fromCharCode(o),c.map=[e,t.line];const l=t.push("inline","",0);l.content=a,l.map=[e,t.line-1],l.children=[];const h=t.push("heading_close","h"+String(r),-1);return h.markup=String.fromCharCode(o),t.parentType=s,!0}function _I(t,e,n){const i=t.md.block.ruler.getRules("paragraph"),s=t.parentType;let r=e+1;for(t.parentType="paragraph";r<n&&!t.isEmpty(r);r++){if(t.sCount[r]-t.blkIndent>3||t.sCount[r]<0)continue;let c=!1;for(let l=0,h=i.length;l<h;l++)if(i[l](t,r,n,!0)){c=!0;break}if(c)break}const o=t.getLines(e,r,t.blkIndent,!1).trim();t.line=r;const u=t.push("paragraph_open","p",1);u.map=[e,t.line];const a=t.push("inline","",0);return a.content=o,a.map=[e,t.line],a.children=[],t.push("paragraph_close","p",-1),t.parentType=s,!0}const $r=[["table",HC,["paragraph","reference"]],["code",VC],["fence",GC,["paragraph","reference","blockquote","list"]],["blockquote",KC,["paragraph","reference","blockquote","list"]],["hr",YC,["paragraph","reference","blockquote","list"]],["list",ZC,["paragraph","reference","blockquote"]],["reference",JC],["html_block",dI,["paragraph","reference","blockquote"]],["heading",fI,["paragraph","reference","blockquote"]],["lheading",pI],["paragraph",_I]];function yu(){this.ruler=new ut;for(let t=0;t<$r.length;t++)this.ruler.push($r[t][0],$r[t][1],{alt:($r[t][2]||[]).slice()})}yu.prototype.tokenize=function(t,e,n){const i=this.ruler.getRules(""),s=i.length,r=t.md.options.maxNesting;let o=e,u=!1;for(;o<n&&(t.line=o=t.skipEmptyLines(o),!(o>=n||t.sCount[o]<t.blkIndent));){if(t.level>=r){t.line=n;break}const a=t.line;let c=!1;for(let l=0;l<s;l++)if(c=i[l](t,o,n,!1),c){if(a>=t.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");t.tight=!u,t.isEmpty(t.line-1)&&(u=!0),o=t.line,o<n&&t.isEmpty(o)&&(u=!0,o++,t.line=o)}};yu.prototype.parse=function(t,e,n,i){if(!t)return;const s=new this.State(t,e,n,i);this.tokenize(s,s.line,s.lineMax)};yu.prototype.State=en;function wr(t,e,n,i){this.src=t,this.env=n,this.md=e,this.tokens=i,this.tokens_meta=Array(i.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}wr.prototype.pushPending=function(){const t=new Ft("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};wr.prototype.push=function(t,e,n){this.pending&&this.pushPending();const i=new Ft(t,e,n);let s=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),i.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(i),this.tokens_meta.push(s),i};wr.prototype.scanDelims=function(t,e){const n=this.posMax,i=this.src.charCodeAt(t),s=t>0?this.src.charCodeAt(t-1):32;let r=t;for(;r<n&&this.src.charCodeAt(r)===i;)r++;const o=r-t,u=r<n?this.src.charCodeAt(r):32,a=hr(s)||lr(String.fromCharCode(s)),c=hr(u)||lr(String.fromCharCode(u)),l=cr(s),h=cr(u),d=!h&&(!c||l||a),f=!l&&(!a||h||c);return{can_open:d&&(e||!f||a),can_close:f&&(e||!d||c),length:o}};wr.prototype.Token=Ft;function gI(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function mI(t,e){let n=t.pos;for(;n<t.posMax&&!gI(t.src.charCodeAt(n));)n++;return n===t.pos?!1:(e||(t.pending+=t.src.slice(t.pos,n)),t.pos=n,!0)}const bI=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function yI(t,e){if(!t.md.options.linkify||t.linkLevel>0)return!1;const n=t.pos,i=t.posMax;if(n+3>i||t.src.charCodeAt(n)!==58||t.src.charCodeAt(n+1)!==47||t.src.charCodeAt(n+2)!==47)return!1;const s=t.pending.match(bI);if(!s)return!1;const r=s[1],o=t.md.linkify.matchAtStart(t.src.slice(n-r.length));if(!o)return!1;let u=o.url;if(u.length<=r.length)return!1;u=u.replace(/\*+$/,"");const a=t.md.normalizeLink(u);if(!t.md.validateLink(a))return!1;if(!e){t.pending=t.pending.slice(0,-r.length);const c=t.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const l=t.push("text","",0);l.content=t.md.normalizeLinkText(u);const h=t.push("link_close","a",-1);h.markup="linkify",h.info="auto"}return t.pos+=u.length-r.length,!0}function vI(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==10)return!1;const i=t.pending.length-1,s=t.posMax;if(!e)if(i>=0&&t.pending.charCodeAt(i)===32)if(i>=1&&t.pending.charCodeAt(i-1)===32){let r=i-1;for(;r>=1&&t.pending.charCodeAt(r-1)===32;)r--;t.pending=t.pending.slice(0,r),t.push("hardbreak","br",0)}else t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0);else t.push("softbreak","br",0);for(n++;n<s&&be(t.src.charCodeAt(n));)n++;return t.pos=n,!0}const _l=[];for(let t=0;t<256;t++)_l.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){_l[t.charCodeAt(0)]=1});function kI(t,e){let n=t.pos;const i=t.posMax;if(t.src.charCodeAt(n)!==92||(n++,n>=i))return!1;let s=t.src.charCodeAt(n);if(s===10){for(e||t.push("hardbreak","br",0),n++;n<i&&(s=t.src.charCodeAt(n),!!be(s));)n++;return t.pos=n,!0}let r=t.src[n];if(s>=55296&&s<=56319&&n+1<i){const u=t.src.charCodeAt(n+1);u>=56320&&u<=57343&&(r+=t.src[n+1],n++)}const o="\\"+r;if(!e){const u=t.push("text_special","",0);s<256&&_l[s]!==0?u.content=r:u.content=o,u.markup=o,u.info="escape"}return t.pos=n+1,!0}function xI(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==96)return!1;const s=n;n++;const r=t.posMax;for(;n<r&&t.src.charCodeAt(n)===96;)n++;const o=t.src.slice(s,n),u=o.length;if(t.backticksScanned&&(t.backticks[u]||0)<=s)return e||(t.pending+=o),t.pos+=u,!0;let a=n,c;for(;(c=t.src.indexOf("`",a))!==-1;){for(a=c+1;a<r&&t.src.charCodeAt(a)===96;)a++;const l=a-c;if(l===u){if(!e){const h=t.push("code_inline","code",0);h.markup=o,h.content=t.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return t.pos=a,!0}t.backticks[l]=c}return t.backticksScanned=!0,e||(t.pending+=o),t.pos+=u,!0}function EI(t,e){const n=t.pos,i=t.src.charCodeAt(n);if(e||i!==126)return!1;const s=t.scanDelims(t.pos,!0);let r=s.length;const o=String.fromCharCode(i);if(r<2)return!1;let u;r%2&&(u=t.push("text","",0),u.content=o,r--);for(let a=0;a<r;a+=2)u=t.push("text","",0),u.content=o+o,t.delimiters.push({marker:i,length:0,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0}function Jd(t,e){let n;const i=[],s=e.length;for(let r=0;r<s;r++){const o=e[r];if(o.marker!==126||o.end===-1)continue;const u=e[o.end];n=t.tokens[o.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=t.tokens[u.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",t.tokens[u.token-1].type==="text"&&t.tokens[u.token-1].content==="~"&&i.push(u.token-1)}for(;i.length;){const r=i.pop();let o=r+1;for(;o<t.tokens.length&&t.tokens[o].type==="s_close";)o++;o--,r!==o&&(n=t.tokens[o],t.tokens[o]=t.tokens[r],t.tokens[r]=n)}}function wI(t){const e=t.tokens_meta,n=t.tokens_meta.length;Jd(t,t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&Jd(t,e[i].delimiters)}const K_={tokenize:EI,postProcess:wI};function CI(t,e){const n=t.pos,i=t.src.charCodeAt(n);if(e||i!==95&&i!==42)return!1;const s=t.scanDelims(t.pos,i===42);for(let r=0;r<s.length;r++){const o=t.push("text","",0);o.content=String.fromCharCode(i),t.delimiters.push({marker:i,length:s.length,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close})}return t.pos+=s.length,!0}function Xd(t,e){const n=e.length;for(let i=n-1;i>=0;i--){const s=e[i];if(s.marker!==95&&s.marker!==42||s.end===-1)continue;const r=e[s.end],o=i>0&&e[i-1].end===s.end+1&&e[i-1].marker===s.marker&&e[i-1].token===s.token-1&&e[s.end+1].token===r.token+1,u=String.fromCharCode(s.marker),a=t.tokens[s.token];a.type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?u+u:u,a.content="";const c=t.tokens[r.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?u+u:u,c.content="",o&&(t.tokens[e[i-1].token].content="",t.tokens[e[s.end+1].token].content="",i--)}}function II(t){const e=t.tokens_meta,n=t.tokens_meta.length;Xd(t,t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&Xd(t,e[i].delimiters)}const Y_={tokenize:CI,postProcess:II};function TI(t,e){let n,i,s,r,o="",u="",a=t.pos,c=!0;if(t.src.charCodeAt(t.pos)!==91)return!1;const l=t.pos,h=t.posMax,d=t.pos+1,f=t.md.helpers.parseLinkLabel(t,t.pos,!0);if(f<0)return!1;let p=f+1;if(p<h&&t.src.charCodeAt(p)===40){for(c=!1,p++;p<h&&(n=t.src.charCodeAt(p),!(!be(n)&&n!==10));p++);if(p>=h)return!1;if(a=p,s=t.md.helpers.parseLinkDestination(t.src,p,t.posMax),s.ok){for(o=t.md.normalizeLink(s.str),t.md.validateLink(o)?p=s.pos:o="",a=p;p<h&&(n=t.src.charCodeAt(p),!(!be(n)&&n!==10));p++);if(s=t.md.helpers.parseLinkTitle(t.src,p,t.posMax),p<h&&a!==p&&s.ok)for(u=s.str,p=s.pos;p<h&&(n=t.src.charCodeAt(p),!(!be(n)&&n!==10));p++);}(p>=h||t.src.charCodeAt(p)!==41)&&(c=!0),p++}if(c){if(typeof t.env.references>"u")return!1;if(p<h&&t.src.charCodeAt(p)===91?(a=p+1,p=t.md.helpers.parseLinkLabel(t,p),p>=0?i=t.src.slice(a,p++):p=f+1):p=f+1,i||(i=t.src.slice(d,f)),r=t.env.references[bu(i)],!r)return t.pos=l,!1;o=r.href,u=r.title}if(!e){t.pos=d,t.posMax=f;const b=t.push("link_open","a",1),k=[["href",o]];b.attrs=k,u&&k.push(["title",u]),t.linkLevel++,t.md.inline.tokenize(t),t.linkLevel--,t.push("link_close","a",-1)}return t.pos=p,t.posMax=h,!0}function AI(t,e){let n,i,s,r,o,u,a,c,l="";const h=t.pos,d=t.posMax;if(t.src.charCodeAt(t.pos)!==33||t.src.charCodeAt(t.pos+1)!==91)return!1;const f=t.pos+2,p=t.md.helpers.parseLinkLabel(t,t.pos+1,!1);if(p<0)return!1;if(r=p+1,r<d&&t.src.charCodeAt(r)===40){for(r++;r<d&&(n=t.src.charCodeAt(r),!(!be(n)&&n!==10));r++);if(r>=d)return!1;for(c=r,u=t.md.helpers.parseLinkDestination(t.src,r,t.posMax),u.ok&&(l=t.md.normalizeLink(u.str),t.md.validateLink(l)?r=u.pos:l=""),c=r;r<d&&(n=t.src.charCodeAt(r),!(!be(n)&&n!==10));r++);if(u=t.md.helpers.parseLinkTitle(t.src,r,t.posMax),r<d&&c!==r&&u.ok)for(a=u.str,r=u.pos;r<d&&(n=t.src.charCodeAt(r),!(!be(n)&&n!==10));r++);else a="";if(r>=d||t.src.charCodeAt(r)!==41)return t.pos=h,!1;r++}else{if(typeof t.env.references>"u")return!1;if(r<d&&t.src.charCodeAt(r)===91?(c=r+1,r=t.md.helpers.parseLinkLabel(t,r),r>=0?s=t.src.slice(c,r++):r=p+1):r=p+1,s||(s=t.src.slice(f,p)),o=t.env.references[bu(s)],!o)return t.pos=h,!1;l=o.href,a=o.title}if(!e){i=t.src.slice(f,p);const b=[];t.md.inline.parse(i,t.md,t.env,b);const k=t.push("image","img",0),A=[["src",l],["alt",""]];k.attrs=A,k.children=b,k.content=i,a&&A.push(["title",a])}return t.pos=r,t.posMax=d,!0}const SI=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,RI=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function DI(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==60)return!1;const i=t.pos,s=t.posMax;for(;;){if(++n>=s)return!1;const o=t.src.charCodeAt(n);if(o===60)return!1;if(o===62)break}const r=t.src.slice(i+1,n);if(RI.test(r)){const o=t.md.normalizeLink(r);if(!t.md.validateLink(o))return!1;if(!e){const u=t.push("link_open","a",1);u.attrs=[["href",o]],u.markup="autolink",u.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(r);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=r.length+2,!0}if(SI.test(r)){const o=t.md.normalizeLink("mailto:"+r);if(!t.md.validateLink(o))return!1;if(!e){const u=t.push("link_open","a",1);u.attrs=[["href",o]],u.markup="autolink",u.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(r);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=r.length+2,!0}return!1}function PI(t){return/^<a[>\s]/i.test(t)}function NI(t){return/^<\/a\s*>/i.test(t)}function OI(t){const e=t|32;return e>=97&&e<=122}function FI(t,e){if(!t.md.options.html)return!1;const n=t.posMax,i=t.pos;if(t.src.charCodeAt(i)!==60||i+2>=n)return!1;const s=t.src.charCodeAt(i+1);if(s!==33&&s!==63&&s!==47&&!OI(s))return!1;const r=t.src.slice(i).match(lI);if(!r)return!1;if(!e){const o=t.push("html_inline","",0);o.content=r[0],PI(o.content)&&t.linkLevel++,NI(o.content)&&t.linkLevel--}return t.pos+=r[0].length,!0}const MI=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,LI=/^&([a-z][a-z0-9]{1,31});/i;function $I(t,e){const n=t.pos,i=t.posMax;if(t.src.charCodeAt(n)!==38||n+1>=i)return!1;if(t.src.charCodeAt(n+1)===35){const r=t.src.slice(n).match(MI);if(r){if(!e){const o=r[1][0].toLowerCase()==="x"?parseInt(r[1].slice(1),16):parseInt(r[1],10),u=t.push("text_special","",0);u.content=fl(o)?Do(o):Do(65533),u.markup=r[0],u.info="entity"}return t.pos+=r[0].length,!0}}else{const r=t.src.slice(n).match(LI);if(r){const o=z_(r[0]);if(o!==r[0]){if(!e){const u=t.push("text_special","",0);u.content=o,u.markup=r[0],u.info="entity"}return t.pos+=r[0].length,!0}}}return!1}function ef(t){const e={},n=t.length;if(!n)return;let i=0,s=-2;const r=[];for(let o=0;o<n;o++){const u=t[o];if(r.push(0),(t[i].marker!==u.marker||s!==u.token-1)&&(i=o),s=u.token,u.length=u.length||0,!u.close)continue;e.hasOwnProperty(u.marker)||(e[u.marker]=[-1,-1,-1,-1,-1,-1]);const a=e[u.marker][(u.open?3:0)+u.length%3];let c=i-r[i]-1,l=c;for(;c>a;c-=r[c]+1){const h=t[c];if(h.marker===u.marker&&h.open&&h.end<0){let d=!1;if((h.close||u.open)&&(h.length+u.length)%3===0&&(h.length%3!==0||u.length%3!==0)&&(d=!0),!d){const f=c>0&&!t[c-1].open?r[c-1]+1:0;r[o]=o-c+f,r[c]=f,u.open=!1,h.end=o,h.close=!1,l=-1,s=-2;break}}}l!==-1&&(e[u.marker][(u.open?3:0)+(u.length||0)%3]=l)}}function UI(t){const e=t.tokens_meta,n=t.tokens_meta.length;ef(t.delimiters);for(let i=0;i<n;i++)e[i]&&e[i].delimiters&&ef(e[i].delimiters)}function BI(t){let e,n,i=0;const s=t.tokens,r=t.tokens.length;for(e=n=0;e<r;e++)s[e].nesting<0&&i--,s[e].level=i,s[e].nesting>0&&i++,s[e].type==="text"&&e+1<r&&s[e+1].type==="text"?s[e+1].content=s[e].content+s[e+1].content:(e!==n&&(s[n]=s[e]),n++);e!==n&&(s.length=n)}const Gu=[["text",mI],["linkify",yI],["newline",vI],["escape",kI],["backticks",xI],["strikethrough",K_.tokenize],["emphasis",Y_.tokenize],["link",TI],["image",AI],["autolink",DI],["html_inline",FI],["entity",$I]],Ku=[["balance_pairs",UI],["strikethrough",K_.postProcess],["emphasis",Y_.postProcess],["fragments_join",BI]];function Cr(){this.ruler=new ut;for(let t=0;t<Gu.length;t++)this.ruler.push(Gu[t][0],Gu[t][1]);this.ruler2=new ut;for(let t=0;t<Ku.length;t++)this.ruler2.push(Ku[t][0],Ku[t][1])}Cr.prototype.skipToken=function(t){const e=t.pos,n=this.ruler.getRules(""),i=n.length,s=t.md.options.maxNesting,r=t.cache;if(typeof r[e]<"u"){t.pos=r[e];return}let o=!1;if(t.level<s){for(let u=0;u<i;u++)if(t.level++,o=n[u](t,!0),t.level--,o){if(e>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;o||t.pos++,r[e]=t.pos};Cr.prototype.tokenize=function(t){const e=this.ruler.getRules(""),n=e.length,i=t.posMax,s=t.md.options.maxNesting;for(;t.pos<i;){const r=t.pos;let o=!1;if(t.level<s){for(let u=0;u<n;u++)if(o=e[u](t,!1),o){if(r>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(t.pos>=i)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};Cr.prototype.parse=function(t,e,n,i){const s=new this.State(t,e,n,i);this.tokenize(s);const r=this.ruler2.getRules(""),o=r.length;for(let u=0;u<o;u++)r[u](s)};Cr.prototype.State=wr;function zI(t){const e={};t=t||{},e.src_Any=M_.source,e.src_Cc=L_.source,e.src_Z=U_.source,e.src_P=hl.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const n="[><｜]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function za(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(i){t[i]=n[i]})}),t}function vu(t){return Object.prototype.toString.call(t)}function qI(t){return vu(t)==="[object String]"}function WI(t){return vu(t)==="[object Object]"}function jI(t){return vu(t)==="[object RegExp]"}function tf(t){return vu(t)==="[object Function]"}function HI(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Q_={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function VI(t){return Object.keys(t||{}).reduce(function(e,n){return e||Q_.hasOwnProperty(n)},!1)}const GI={"http:":{validate:function(t,e,n){const i=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(i)?i.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){const i=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(i)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:i.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){const i=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(i)?i.match(n.re.mailto)[0].length:0}}},KI="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",YI="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function QI(t){t.__index__=-1,t.__text_cache__=""}function ZI(t){return function(e,n){const i=e.slice(n);return t.test(i)?i.match(t)[0].length:0}}function nf(){return function(t,e){e.normalize(t)}}function Po(t){const e=t.re=zI(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(KI),n.push(e.src_xn),e.src_tlds=n.join("|");function i(u){return u.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(i(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(i(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(i(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(i(e.tpl_host_fuzzy_test),"i");const s=[];t.__compiled__={};function r(u,a){throw new Error('(LinkifyIt) Invalid schema "'+u+'": '+a)}Object.keys(t.__schemas__).forEach(function(u){const a=t.__schemas__[u];if(a===null)return;const c={validate:null,link:null};if(t.__compiled__[u]=c,WI(a)){jI(a.validate)?c.validate=ZI(a.validate):tf(a.validate)?c.validate=a.validate:r(u,a),tf(a.normalize)?c.normalize=a.normalize:a.normalize?r(u,a):c.normalize=nf();return}if(qI(a)){s.push(u);return}r(u,a)}),s.forEach(function(u){t.__compiled__[t.__schemas__[u]]&&(t.__compiled__[u].validate=t.__compiled__[t.__schemas__[u]].validate,t.__compiled__[u].normalize=t.__compiled__[t.__schemas__[u]].normalize)}),t.__compiled__[""]={validate:null,normalize:nf()};const o=Object.keys(t.__compiled__).filter(function(u){return u.length>0&&t.__compiled__[u]}).map(HI).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),QI(t)}function JI(t,e){const n=t.__index__,i=t.__last_index__,s=t.__text_cache__.slice(n,i);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=i+e,this.raw=s,this.text=s,this.url=s}function qa(t,e){const n=new JI(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function dt(t,e){if(!(this instanceof dt))return new dt(t,e);e||VI(t)&&(e=t,t={}),this.__opts__=za({},Q_,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=za({},GI,t),this.__compiled__={},this.__tlds__=YI,this.__tlds_replaced__=!1,this.re={},Po(this)}dt.prototype.add=function(e,n){return this.__schemas__[e]=n,Po(this),this};dt.prototype.set=function(e){return this.__opts__=za(this.__opts__,e),this};dt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let n,i,s,r,o,u,a,c,l;if(this.re.schema_test.test(e)){for(a=this.re.schema_search,a.lastIndex=0;(n=a.exec(e))!==null;)if(r=this.testSchemaAt(e,n[2],a.lastIndex),r){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=i.index+i[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=i.index+i[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,u=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&u>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=u))),this.__index__>=0};dt.prototype.pretest=function(e){return this.re.pretest.test(e)};dt.prototype.testSchemaAt=function(e,n,i){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,i,this):0};dt.prototype.match=function(e){const n=[];let i=0;this.__index__>=0&&this.__text_cache__===e&&(n.push(qa(this,i)),i=this.__last_index__);let s=i?e.slice(i):e;for(;this.test(s);)n.push(qa(this,i)),s=s.slice(this.__last_index__),i+=this.__last_index__;return n.length?n:null};dt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const n=this.re.schema_at_start.exec(e);if(!n)return null;const i=this.testSchemaAt(e,n[2],n[0].length);return i?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i,qa(this,0)):null};dt.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(i,s,r){return i!==r[s-1]}).reverse(),Po(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Po(this),this)};dt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};dt.prototype.onCompile=function(){};const Hi=2147483647,Ht=36,gl=1,dr=26,XI=38,e4=700,Z_=72,J_=128,X_="-",t4=/^xn--/,n4=/[^\0-\x7F]/,i4=/[\x2E\u3002\uFF0E\uFF61]/g,s4={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Yu=Ht-gl,Vt=Math.floor,Qu=String.fromCharCode;function Cn(t){throw new RangeError(s4[t])}function r4(t,e){const n=[];let i=t.length;for(;i--;)n[i]=e(t[i]);return n}function eg(t,e){const n=t.split("@");let i="";n.length>1&&(i=n[0]+"@",t=n[1]),t=t.replace(i4,".");const s=t.split("."),r=r4(s,e).join(".");return i+r}function tg(t){const e=[];let n=0;const i=t.length;for(;n<i;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}const o4=t=>String.fromCodePoint(...t),u4=function(t){return t>=48&&t<58?26+(t-48):t>=65&&t<91?t-65:t>=97&&t<123?t-97:Ht},sf=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},ng=function(t,e,n){let i=0;for(t=n?Vt(t/e4):t>>1,t+=Vt(t/e);t>Yu*dr>>1;i+=Ht)t=Vt(t/Yu);return Vt(i+(Yu+1)*t/(t+XI))},ig=function(t){const e=[],n=t.length;let i=0,s=J_,r=Z_,o=t.lastIndexOf(X_);o<0&&(o=0);for(let u=0;u<o;++u)t.charCodeAt(u)>=128&&Cn("not-basic"),e.push(t.charCodeAt(u));for(let u=o>0?o+1:0;u<n;){const a=i;for(let l=1,h=Ht;;h+=Ht){u>=n&&Cn("invalid-input");const d=u4(t.charCodeAt(u++));d>=Ht&&Cn("invalid-input"),d>Vt((Hi-i)/l)&&Cn("overflow"),i+=d*l;const f=h<=r?gl:h>=r+dr?dr:h-r;if(d<f)break;const p=Ht-f;l>Vt(Hi/p)&&Cn("overflow"),l*=p}const c=e.length+1;r=ng(i-a,c,a==0),Vt(i/c)>Hi-s&&Cn("overflow"),s+=Vt(i/c),i%=c,e.splice(i++,0,s)}return String.fromCodePoint(...e)},sg=function(t){const e=[];t=tg(t);const n=t.length;let i=J_,s=0,r=Z_;for(const a of t)a<128&&e.push(Qu(a));const o=e.length;let u=o;for(o&&e.push(X_);u<n;){let a=Hi;for(const l of t)l>=i&&l<a&&(a=l);const c=u+1;a-i>Vt((Hi-s)/c)&&Cn("overflow"),s+=(a-i)*c,i=a;for(const l of t)if(l<i&&++s>Hi&&Cn("overflow"),l===i){let h=s;for(let d=Ht;;d+=Ht){const f=d<=r?gl:d>=r+dr?dr:d-r;if(h<f)break;const p=h-f,b=Ht-f;e.push(Qu(sf(f+p%b,0))),h=Vt(p/b)}e.push(Qu(sf(h,0))),r=ng(s,c,u===o),s=0,++u}++s,++i}return e.join("")},a4=function(t){return eg(t,function(e){return t4.test(e)?ig(e.slice(4).toLowerCase()):e})},c4=function(t){return eg(t,function(e){return n4.test(e)?"xn--"+sg(e):e})},rg={version:"2.3.1",ucs2:{decode:tg,encode:o4},decode:ig,encode:sg,toASCII:c4,toUnicode:a4},l4={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},h4={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},d4={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},f4={default:l4,zero:h4,commonmark:d4},p4=/^(vbscript|javascript|file|data):/,_4=/^data:image\/(gif|png|jpeg|webp);/;function g4(t){const e=t.trim().toLowerCase();return p4.test(e)?_4.test(e):!0}const og=["http:","https:","mailto:"];function m4(t){const e=ll(t,!0);if(e.hostname&&(!e.protocol||og.indexOf(e.protocol)>=0))try{e.hostname=rg.toASCII(e.hostname)}catch{}return Er(cl(e))}function b4(t){const e=ll(t,!0);if(e.hostname&&(!e.protocol||og.indexOf(e.protocol)>=0))try{e.hostname=rg.toUnicode(e.hostname)}catch{}return ss(cl(e),ss.defaultChars+"%")}function vt(t,e){if(!(this instanceof vt))return new vt(t,e);e||dl(t)||(e=t||{},t="default"),this.inline=new Cr,this.block=new yu,this.core=new pl,this.renderer=new _s,this.linkify=new dt,this.validateLink=g4,this.normalizeLink=m4,this.normalizeLinkText=b4,this.utils=vC,this.helpers=mu({},wC),this.options={},this.configure(t),e&&this.set(e)}vt.prototype.set=function(t){return mu(this.options,t),this};vt.prototype.configure=function(t){const e=this;if(dl(t)){const n=t;if(t=f4[n],!t)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(n){t.components[n].rules&&e[n].ruler.enableOnly(t.components[n].rules),t.components[n].rules2&&e[n].ruler2.enableOnly(t.components[n].rules2)}),this};vt.prototype.enable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(s){n=n.concat(this[s].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));const i=t.filter(function(s){return n.indexOf(s)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+i);return this};vt.prototype.disable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(s){n=n.concat(this[s].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));const i=t.filter(function(s){return n.indexOf(s)<0});if(i.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+i);return this};vt.prototype.use=function(t){const e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};vt.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");const n=new this.core.State(t,this,e);return this.core.process(n),n.tokens};vt.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};vt.prototype.parseInline=function(t,e){const n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};vt.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};const y4={name:"MoreButton",props:{fileName:{type:String,required:!0,default:"описание.txt"},imageSrc:{type:String,default:""}},data(){return{showDetails:!1,description:"",initialText:"",buttonText:"подробнее",md:new vt}},computed:{formattedDescription(){return this.md.render(this.description)}},methods:{toggleDetails(){this.showDetails=!this.showDetails,this.buttonText=this.showDetails?"свернуть":"подробнее",this.showDetails&&!this.description&&this.loadFullDescription()},async loadInitialText(){try{const t=await fetch(`/${this.fileName}`);if(!t.ok)throw new Error("Ошибка загрузки файла");const e=await t.text(),n=this.extractInitialText(e);this.initialText=this.md.render(n)}catch(t){console.error("Ошибка:",t),this.initialText=this.md.render("Не удалось загрузить описание.")}},async loadFullDescription(){try{const t=await fetch(`/${this.fileName}`);if(!t.ok)throw new Error("Ошибка загрузки файла");this.description=await t.text()}catch(t){console.error("Ошибка:",t),this.description="Не удалось загрузить описание."}},extractInitialText(t){const e=this.findNthOccurrence(t,"#",2);return e!==-1?t.slice(0,e).trim():t.trim()},findNthOccurrence(t,e,n){let i=0;for(let s=0;s<t.length;s++)if(t[s]===e&&(i++,i===n))return s;return-1}},mounted(){this.loadInitialText()}},v4={class:"more-button"},k4={class:"content"},x4=["src"],E4={class:"text"},w4=["innerHTML"],C4={key:0,class:"details"},I4=["innerHTML"];function T4(t,e,n,i,s,r){return B(),z("div",v4,[_("div",k4,[n.imageSrc?(B(),z("img",{key:0,src:n.imageSrc,alt:"Image",class:"image"},null,8,x4)):ke("",!0),_("div",E4,[s.initialText?(B(),z("div",{key:0,innerHTML:s.initialText},null,8,w4)):ke("",!0),_("button",{onClick:e[0]||(e[0]=(...o)=>r.toggleDetails&&r.toggleDetails(...o))},Ie(s.buttonText),1)])]),s.showDetails?(B(),z("div",C4,[_("div",{innerHTML:r.formattedDescription},null,8,I4)])):ke("",!0)])}const ug=Ot(y4,[["render",T4],["__scopeId","data-v-ec385802"]]),A4={id:"morebutton"},S4=a0('<div><h1>Инструменты нейроарта</h1><ol><li> Сайт <a href="https://www.mage.space/" target="_blank" rel="noopener noreferrer">MAGE.SPACE</a> генерирует картинки и видео. Бесплатно!!! </li><li>Сайт HUGGING FACE<a href="https://huggingface.co/spaces/black-forest-labs/FLUX.1-dev" target="_blank" rel="noopener noreferrer"> SPACES</a> Пространство для тестирования новинок нейросетей</li><li>Сайт <a href="https://www.recraft.ai/" target="_blank" rel="noopener noreferrer">Нейросеть RECRAFT.AI</a> от основательницы Яндекса. В настоящий момент из-за санкций временно не доступна</li><li>Перенос лица с фото на генеративное изображение <a href="https://huggingface.co/spaces/yanze/PuLID-FLUX" target="_blank" rel="noopener noreferrer">PulID FLUX</a></li><li>Генерация 3D моделей с экспортом в Blender <a href="https://www.tripo3d.ai/app/home" target="_blank" rel="noopener noreferrer"> Tripo3d.ai</a></li><li>Увеличение разрешения с помощью ИИ <a href="https://huggingface.co/spaces/jasperai/Flux.1-dev-Controlnet-Upscaler" target="_blank" rel="noopener noreferrer"> FLUX ControlNet Upscale</a></li><li>Генератор подсказок по категориям <a href="https://huggingface.co/spaces/gokaygokay/FLUX-Prompt-Generator" target="_blank" rel="noopener noreferrer"> с помощью LLM</a></li><li>Видео генератор <a href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener noreferrer"> LUMA</a></li><li>Видео генератор <a href="https://www.hedra.com/" target="_blank" rel="noopener noreferrer"> HEDRA</a> с синтезом речи </li><li>Стили художников <a href="https://cheatsheet.strea.ly/" target="_blank" rel="noopener noreferrer"> ОООЧЕНЬ тормозит </a> из-за огромной коллекции</li><li>Создание CANNY, DEPTH, POSE <a href="https://posemy.art/app/" target="_blank" rel="noopener noreferrer"> из позы человека или животного </a></li></ol><h1> Нейро-галерея кружка <a href="https://civitai.com/collections/9321690" target="_blank" rel="noopener noreferrer"> &quot;Нейроарт&quot; </a> школы №47 г. Липецка </h1></div>',1),R4={class:"container"},D4={class:"single-image"},P4={class:"single-image"},N4={class:"single-image"},O4={class:"single-image"},F4={class:"single-image"},M4={class:"single-image"},L4={class:"single-image"},$4={class:"single-image"},U4={class:"single-image"},B4={class:"single-image"},z4={class:"single-image"},q4={class:"single-image"},W4={class:"single-image"},j4={class:"single-image"},H4={class:"prompt-item"},V4=_("div",{class:"prompt-text"}," Aliens on the planet Dumpling ",-1),G4={class:"prompt-item"},K4=_("div",{class:"prompt-text"}," A shark in blue Nike sneakers stands on a beach near the sea ",-1),Y4={class:"prompt-item"},Q4=_("div",{class:"prompt-text"}," a cat in a hat and scarf and boots ",-1),Z4={class:"prompt-item"},J4=_("div",{class:"prompt-text"}," A dragon with wings sits on a mountain with a waterfall and dragons fly near bya large dragon flies over the city and nearby flying pterodactyls ",-1),X4={class:"prompt-item"},eT=_("div",{class:"prompt-text"}," A tiny alien gecko with translucent, crystalline skin that refracts light into dazzling rainbow colors. It has six delicate limbs, two of which are curled in a cute resting position. Its tail has a jelly-like glow, shifting in hues of cyan and fuchsia. It clings lightly to the personâs fingertip, looking up with bright, intelligent eyes. The background is a blurred futuristic cityscape, filled with neon holograms and colorful bokeh lights. ",-1),tT={class:"prompt-item"},nT=_("div",{class:"prompt-text"}," watercolor painting A white dog in red top hat . vibrant, beautiful, painterly, detailed, textural, artistic ",-1),iT={class:"prompt-item"},sT=_("div",{class:"prompt-text"}," in the style of ck-mgs, nistyle, Special Ink-drawing mode, intricate linework with expressive contrasts, Mh1$AgThS2, Inkplash art on rice paper, sepia, henna , Silhouette Art, magnificent, inksplash closeup portrait of stunning japanese female sc-fi soldier, helmet, mirrored visor reflecting jungle environment ",-1),rT={class:"prompt-item"},oT=_("div",{class:"prompt-text"},' bmstyle anime "A human head made of translucent, crystallized material shatters outward, with shards transforming into a burst of vibrant flowers. The flowers are varied in color and species, blooming mid-air as if born from the explosion. Soft light refracts through the crystal fragments, creating a surreal, dreamlike atmosphere." ',-1),uT={class:"prompt-item"},aT=_("div",{class:"prompt-text"}," Masterpiece, absurdres, best quality, 1boy, solo, ch1ken, chicken, long beak, cartoon, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet ",-1),cT={class:"prompt-item"},lT=_("div",{class:"prompt-text"}," A dove stands on two legs in an aristocratic coat and spy glasses on the tenth street of a dark city in the middle of a dark night ",-1),hT={__name:"Neuroart",setup(t){return(e,n)=>(B(),z(Re,null,[_("div",A4,[F(ug,{fileName:"./young/text/n1.txt",imageSrc:"./images/3.jpg"})]),S4,_("div",R4,[_("div",D4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/94f45c4a-cc69-4041-86af-90a7bf287110/original=true,quality=90/image%20(14).jpeg",imageWidth:"150px"})]),_("div",P4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/89241a98-9252-4855-b266-1d3f8237ae40/original=true,quality=90/GRBV91j8XTQ.jpeg",imageWidth:"150px"})]),_("div",N4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7a134b0d-6ac1-4246-aabd-315639a0364e/original=true,quality=90/f2wBjZkX7Ek.jpeg",imageWidth:"150px"})]),_("div",O4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/31369ca6-f577-4348-ac98-daf1b48d345a/original=true,quality=90/6hEg4a_P1XI.jpeg",imageWidth:"150px"})]),_("div",F4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/cdca89f0-8cd1-4cdc-a4f1-49de26d9ee15/original=true,quality=90/HMNis5AQ91A.jpeg",imageWidth:"150px"})]),_("div",M4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3d1c4dad-bd8d-4da0-a899-08a3130b9e84/original=true,quality=90/cBFnZ5u_ojs.jpeg",imageWidth:"150px"})]),_("div",L4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/545fa158-492b-4276-a9e4-04efe93e15f6/original=true,quality=90/8iOIoRFSwSM.jpeg",imageWidth:"150px"})]),_("div",$4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1c26c93b-c740-46ff-b980-02459a4f28d8/original=true,quality=90/IYm-PwlGfc0.jpeg",imageWidth:"150px"})]),_("div",U4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2f873f2a-ba41-4300-9de5-ec5ee4ad165e/original=true,quality=90/e1wgSlNSsfk.jpeg",imageWidth:"150px"})]),_("div",B4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/17b35821-754a-4ae5-b9b2-551692fdf737/original=true,quality=90/image%20(1).jpeg",imageWidth:"150px"})]),_("div",z4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c6b690b1-4bec-4106-b580-001fc1f5050d/original=true,quality=90/tmpsrzdkamx.jpeg",imageWidth:"150px"})]),_("div",q4,[F(Q,{imageSrc:"./images/16.jpeg",imageWidth:"150px"})]),_("div",W4,[F(Q,{imageSrc:"./images/17.jpeg",imageWidth:"150px"})]),_("div",j4,[F(Q,{imageSrc:"./images/1.jpg",imageWidth:"150px"})]),_("div",H4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/624b0f6d-6e63-4017-ba7f-b89ddb7e549b/original=true,quality=90/Миша%202.jpeg",imageWidth:"150px"}),V4]),_("div",G4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/008f3106-a1e5-433a-9ced-e6ea7842cb40/original=true,quality=90/тралалелотралала.jpeg",imageWidth:"150px"}),K4]),_("div",Y4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c4a9d170-776d-4e8c-8ad6-d68377072ff9/original=true,quality=90/00015-1215671990.jpeg",imageWidth:"150px"}),Q4]),_("div",Z4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4091aa65-b1d9-4e52-b637-471fc95cbcb9/original=true,quality=90/00003-1070851382.jpeg",imageWidth:"150px"}),J4]),_("div",X4,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a7dd5e4-27d1-4c46-80f8-f71430fca4a7/original=true,quality=90/00018-2846415293.jpeg",imageWidth:"150px"}),eT]),_("div",tT,[F(Q,{imageSrc:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0a9e1a38-14be-4ae4-ac57-57675f0c402a/original=true,quality=90/00012-3032498663.jpeg",imageWidth:"150px"}),nT]),_("div",iT,[F(Q,{imageSrc:"./images/10.jpeg",imageWidth:"150px"}),sT]),_("div",rT,[F(Q,{imageSrc:"./images/11.png",imageWidth:"150px"}),oT]),_("div",uT,[F(Q,{imageSrc:"./images/15.jpeg",imageWidth:"150px"}),aT]),_("div",cT,[F(Q,{imageSrc:"./images/2.jpg",imageWidth:"150px"}),lT])])],64))}},dT={id:"morebutton"},fT=_("div",null,[_("h1",null,"Сайты по граффити"),_("ol",null,[_("li",null,[it("Сайт "),_("a",{href:"https://www.mage.space/",target:"_blank",rel:"noopener noreferrer"},"MAGE.SPACE"),it(" генерирует картинки и видео. Бесплатно!!! ")])]),_("h1",null," Граффити г. Липецка ")],-1),pT={class:"container"},_T={class:"single-image"},gT={class:"container"},mT={class:"single-image"},bT={class:"container"},yT={class:"single-image"},vT={class:"container"},kT={class:"single-image"},xT=_("h1",null," Художники г. Липецка ",-1),ET={class:"prompt-item"},wT=_("div",{class:"prompt-text"}," Дмитрий Савоста - уличный художник, создавший в Липецке много действительно достойных граффити. Если вы идете по улице и видите красивый рисунок на стене кафе или дома, вероятнее всего - это его работа.Дмитрий убежден, что стрит-арт — это тоже искусство, если к нему подходить разумно и творчески. ",-1),CT={class:"prompt-item"},IT=_("div",{class:"prompt-text"}," Владимир Кулик говорил: «В течение года чувствовал себя «звездой», обо мне писали мировые СМИ, пригласили в Индию, у меня появилась аудитория, коллаборация с брендами. Параллельно рисовал холсты, занимался одеждой».С подобным уровнем сложности (задействовано более 1000 элементов изображения) граффити с дополненной реальностью (AR) в России еще не было. ",-1),TT={class:"prompt-item"},AT=_("div",{class:"prompt-text"}," Данил Белый. При поддержке благотворительного фонда «Милосердие» на одной из центральных улиц Липецка открыли новое граффити с 13-метровым изображением бегущего легкоатлета. По замыслу авторов, оно пропагандирует здоровый образ жизни и призывает активно заниматься бегом. ",-1),ST={class:"prompt-item"},RT=_("div",{class:"prompt-text"}," Елизавета Рыжкова. Граффити на фасаде дома №30 по улице Космонавтов появилось в рамках проекта грантовой программы «Стальное дерево». Его авторы - липецкие художники Данил Белый и Елизавета Рыжкова ",-1),DT={__name:"Graffiti",setup(t){return(e,n)=>(B(),z(Re,null,[_("div",dT,[F(ug,{fileName:"./young/text/g1.txt",imageSrc:"./images/cat2.png"})]),fT,_("div",pT,[_("div",_T,[F(Q,{imageSrc:"./images/c1.jpg",imageWidth:"400px"})])]),_("div",gT,[_("div",mT,[F(Q,{imageSrc:"./images/c2.jpg",imageWidth:"400px"})])]),_("div",bT,[_("div",yT,[F(Q,{imageSrc:"./images/c3.jpg",imageWidth:"400px"})])]),_("div",vT,[_("div",kT,[F(Q,{imageSrc:"./images/c4.jpg",imageWidth:"400px"})])]),xT,_("div",ET,[F(Q,{imageSrc:"./images/G1.jpg",imageWidth:"150px"}),wT]),_("div",CT,[F(Q,{imageSrc:"./images/G2.jpg",imageWidth:"150px"}),IT]),_("div",TT,[F(Q,{imageSrc:"./images/G3.jpg",imageWidth:"150px"}),AT]),_("div",ST,[F(Q,{imageSrc:"./images/G4.jpg",imageWidth:"150px"}),RT])],64))}},Ur=["1. Добровольческий отряд Липецкого металлургического колледжа «От сердца к сердцу» телефон +7-474-274-28-86","2. Туристический отряд добровольцев","3. Добровольческий отряд «Сокол» (школа № 63)","4. Клуб Добровольцев РАНХиГС","5. Патриотический сектор профкома ЛГТУ","6. Липецкая Команда Помощи бездомным животным «Велес». (Контакты: Телефон +79119111111; Социальные сети: https://vk.com/club13050764)","7. Поисково-спасательный отряд «Лиза Алерт»"].join(`
`),PT={name:"Volonter",data(){return{userRequest:"",response:null,isLoading:!1,error:null,organizations:[],loadingOrganizations:!0}},async created(){await this.loadDefaultOrganizations()},methods:{async loadDefaultOrganizations(){try{const t=await fetch("./text/official.json",{headers:{Accept:"application/json"}});if(t.ok){const n=await t.json();this.parseJsonOrganizations(n);return}const e=await fetch("./text/official.txt",{headers:{Accept:"text/plain"}});if(e.ok){const n=await e.text();this.parseOrganizations(n);return}throw new Error("Не удалось загрузить ни JSON, ни TXT файлы")}catch(t){console.error("Ошибка загрузки организаций:",t),this.parseOrganizations(Ur)}finally{this.loadingOrganizations=!1}},parseJsonOrganizations(t){this.organizations=t.map(e=>{const n=[];if(e.contacts&&typeof e.contacts=="string"){const i=e.contacts.match(/\+?[0-9\-()\s]{7,}/g),s=e.contacts.match(/(https?:\/\/[^\s]+)/g);i&&n.push(...i),s&&n.push(...s.map(r=>`Соцсети: ${r}`))}return{name:e.name||"Без названия",description:e.description||"",contacts:n.length>0?n:[]}}),this.organizations.length===0&&(this.error="Не найдено организаций в JSON файле",this.parseOrganizations(Ur))},handleFileUpload(t){const e=t.target.files[0];if(!e)return;const n=new FileReader;n.onload=i=>{try{const s=i.target.result;if(e.name.endsWith(".json")){const r=JSON.parse(s);this.parseJsonOrganizations(r)}else this.parseOrganizations(s)}catch(s){this.error="Ошибка чтения файла: "+s.message,this.parseOrganizations(Ur)}},e.name.endsWith(".json"),n.readAsText(e)},parseOrganizations(t){const e=t.split(`
`).filter(n=>n.trim()!=="");this.organizations=e.map(n=>{const i=n.replace(/^\d+\.\s*/,""),s=i.match(/(телефон\s*\+?[0-9\-()\s]+)/i),r=i.match(/(https?:\/\/[^\s]+)/i),o=s?s[0]:null,u=r?r[0]:null;let a=i;o&&(a=a.replace(o,"")),u&&(a=a.replace(u,"")),a=a.replace(/\([^)]*\)/g,"").replace(/\.$/,"").trim();const c=[];return o&&c.push(o),u&&c.push(`Соцсети: ${u}`),{name:a,contacts:c}}),this.organizations.length===0&&(this.error="Не найдено организаций в файле",this.parseOrganizations(Ur))},async sendRequestToMistral(){if(!this.userRequest.trim()){this.error="Пожалуйста, введите запрос";return}this.isLoading=!0,this.error=null,this.response=null;try{const t="z0BIDWOltmlDCI8q4wFFJMjEcc4d4g87",e=this.formatUserRequest(this.userRequest),n=await fetch("https://api.mistral.ai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({model:"mistral-medium",messages:[{role:"system",content:`Ты помощник для волонтеров. В твоем распоряжении информация о волонтерских организациях.
                Отвечай строго по шаблону, используя только предоставленные данные. Если запрос не связан
                с волонтерскими организациями, вежливо сообщи об этом.

                ### Доступные организации:
                ${this.organizations.map(s=>`- ${s.name}${s.contacts.length>0?` (${s.contacts.join(", ")})`:""}`).join(`
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
      Ответ должен быть структурированным, точным и полезным для волонтерской деятельности.`},formatMistralResponse(t){var e,n;try{const i=(n=(e=t.choices[0])==null?void 0:e.message)==null?void 0:n.content;if(!i)throw new Error("Пустой ответ от API");const s=JSON.parse(i);return{answer:s.answer||"Нет информации по вашему запросу",suggestions:Array.isArray(s.suggestions)?s.suggestions:[],sources:Array.isArray(s.sources)?s.sources:[],contacts:Array.isArray(s.contacts)?s.contacts:[],warning:s.warning||null,raw:t}}catch(i){return console.error("Ошибка форматирования ответа:",i),{answer:"Не удалось обработать ответ от Mistral",suggestions:[],sources:[],contacts:[],warning:"Ответ не соответствует ожидаемому формату",raw:t}}}},computed:{formattedResponse(){if(!this.response)return"";let t=`📌 Ответ:
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

⚠️ Внимание: ${this.response.warning}`),t}}},ag=t=>(mi("data-v-7fbda5ee"),t=t(),bi(),t),NT={class:"volonter-container"},OT=ag(()=>_("h1",null,"Привет, волонтер!",-1)),FT={class:"file-upload-section"},MT={key:0,class:"file-info"},LT={key:1,class:"file-info"},$T={class:"ai-interface"},UT={class:"request-section"},BT=["disabled"],zT={key:0,class:"response-section"},qT=ag(()=>_("h3",null,"Ответ от Mistral:",-1)),WT={class:"response-content"},jT={key:1,class:"error-message"};function HT(t,e,n,i,s,r){return B(),z("div",NT,[OT,_("div",FT,[_("input",{type:"file",onChange:e[0]||(e[0]=(...o)=>r.handleFileUpload&&r.handleFileUpload(...o)),accept:".txt",class:"file-input"},null,32),s.organizations.length>0?(B(),z("p",MT," Загружено организаций: "+Ie(s.organizations.length),1)):(B(),z("p",LT," Используется стандартный список организаций "))]),_("div",$T,[_("div",UT,[Wt(_("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.userRequest=o),placeholder:"Введите ваш запрос для Mistral...",class:"request-input"},null,512),[[jt,s.userRequest]]),_("button",{onClick:e[2]||(e[2]=(...o)=>r.sendRequestToMistral&&r.sendRequestToMistral(...o)),disabled:s.isLoading,class:"send-button"},Ie(s.isLoading?"Отправка...":"Отправить запрос"),9,BT)]),s.response?(B(),z("div",zT,[qT,_("div",WT,[_("pre",null,Ie(r.formattedResponse),1)])])):ke("",!0),s.error?(B(),z("div",jT," Ошибка: "+Ie(s.error),1)):ke("",!0)])])}const VT=Ot(PT,[["render",HT],["__scopeId","data-v-7fbda5ee"]]);function ml(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let wi=ml();function cg(t){wi=t}const zs={exec:()=>null};function ce(t,e=""){let n=typeof t=="string"?t:t.source;const i={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(Je.caret,"$1"),n=n.replace(s,o),i},getRegex:()=>new RegExp(n,e)};return i}const Je={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},GT=/^(?:[ \t]*(?:\n|$))+/,KT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,YT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ir=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,QT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,bl=/(?:[*+-]|\d{1,9}[.)])/,lg=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,hg=ce(lg).replace(/bull/g,bl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ZT=ce(lg).replace(/bull/g,bl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),yl=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,JT=/^[^\n]+/,vl=/(?!\s*\])(?:\\.|[^\[\]\\])+/,XT=ce(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",vl).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),eA=ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,bl).getRegex(),ku="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",kl=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,tA=ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",kl).replace("tag",ku).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),dg=ce(yl).replace("hr",Ir).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),nA=ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",dg).getRegex(),xl={blockquote:nA,code:KT,def:XT,fences:YT,heading:QT,hr:Ir,html:tA,lheading:hg,list:eA,newline:GT,paragraph:dg,table:zs,text:JT},rf=ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ir).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),iA={...xl,lheading:ZT,table:rf,paragraph:ce(yl).replace("hr",Ir).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",rf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex()},sA={...xl,html:ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",kl).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:zs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ce(yl).replace("hr",Ir).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hg).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},rA=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,oA=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fg=/^( {2,}|\\)\n(?!\s*$)/,uA=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xu=/[\p{P}\p{S}]/u,El=/[\s\p{P}\p{S}]/u,pg=/[^\s\p{P}\p{S}]/u,aA=ce(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,El).getRegex(),_g=/(?!~)[\p{P}\p{S}]/u,cA=/(?!~)[\s\p{P}\p{S}]/u,lA=/(?:[^\s\p{P}\p{S}]|~)/u,hA=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,gg=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,dA=ce(gg,"u").replace(/punct/g,xu).getRegex(),fA=ce(gg,"u").replace(/punct/g,_g).getRegex(),mg="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",pA=ce(mg,"gu").replace(/notPunctSpace/g,pg).replace(/punctSpace/g,El).replace(/punct/g,xu).getRegex(),_A=ce(mg,"gu").replace(/notPunctSpace/g,lA).replace(/punctSpace/g,cA).replace(/punct/g,_g).getRegex(),gA=ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,pg).replace(/punctSpace/g,El).replace(/punct/g,xu).getRegex(),mA=ce(/\\(punct)/,"gu").replace(/punct/g,xu).getRegex(),bA=ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),yA=ce(kl).replace("(?:-->|$)","-->").getRegex(),vA=ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",yA).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),No=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,kA=ce(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",No).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bg=ce(/^!?\[(label)\]\[(ref)\]/).replace("label",No).replace("ref",vl).getRegex(),yg=ce(/^!?\[(ref)\](?:\[\])?/).replace("ref",vl).getRegex(),xA=ce("reflink|nolink(?!\\()","g").replace("reflink",bg).replace("nolink",yg).getRegex(),wl={_backpedal:zs,anyPunctuation:mA,autolink:bA,blockSkip:hA,br:fg,code:oA,del:zs,emStrongLDelim:dA,emStrongRDelimAst:pA,emStrongRDelimUnd:gA,escape:rA,link:kA,nolink:yg,punctuation:aA,reflink:bg,reflinkSearch:xA,tag:vA,text:uA,url:zs},EA={...wl,link:ce(/^!?\[(label)\]\((.*?)\)/).replace("label",No).getRegex(),reflink:ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",No).getRegex()},Wa={...wl,emStrongRDelimAst:_A,emStrongLDelim:fA,url:ce(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},wA={...Wa,br:ce(fg).replace("{2,}","*").getRegex(),text:ce(Wa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Br={normal:xl,gfm:iA,pedantic:sA},Es={normal:wl,gfm:Wa,breaks:wA,pedantic:EA},CA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},of=t=>CA[t];function Bt(t,e){if(e){if(Je.escapeTest.test(t))return t.replace(Je.escapeReplace,of)}else if(Je.escapeTestNoEncode.test(t))return t.replace(Je.escapeReplaceNoEncode,of);return t}function uf(t){try{t=encodeURI(t).replace(Je.percentDecode,"%")}catch{return null}return t}function af(t,e){var r;const n=t.replace(Je.findPipe,(o,u,a)=>{let c=!1,l=u;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),i=n.split(Je.splitPipe);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!((r=i.at(-1))!=null&&r.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Je.slashPipe,"|");return i}function ws(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i&&t.charAt(i-s-1)===e;)s++;return t.slice(0,i-s)}function IA(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return-1}function cf(t,e,n,i,s){const r=e.href,o=e.title||null,u=t[1].replace(s.other.outputLinkReplace,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:n,href:r,title:o,text:u,tokens:i.inlineTokens(u)};return i.state.inLink=!1,a}return{type:"image",raw:n,href:r,title:o,text:u}}function TA(t,e,n){const i=t.match(n.other.indentCodeCompensation);if(i===null)return e;const s=i[1];return e.split(`
`).map(r=>{const o=r.match(n.other.beginningSpace);if(o===null)return r;const[u]=o;return u.length>=s.length?r.slice(s.length):r}).join(`
`)}class Oo{constructor(e){pe(this,"options");pe(this,"rules");pe(this,"lexer");this.options=e||wi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:ws(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=TA(i,n[3]||"",this.rules);return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(this.rules.other.endingHash.test(i)){const s=ws(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ws(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let i=ws(n[0],`
`).split(`
`),s="",r="";const o=[];for(;i.length>0;){let u=!1;const a=[];let c;for(c=0;c<i.length;c++)if(this.rules.other.blockquoteStart.test(i[c]))a.push(i[c]),u=!0;else if(!u)a.push(i[c]);else break;i=i.slice(c);const l=a.join(`
`),h=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${l}`:l,r=r?`${r}
${h}`:h;const d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,o,!0),this.lexer.state.top=d,i.length===0)break;const f=o.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){const p=f,b=p.raw+`
`+i.join(`
`),k=this.blockquote(b);o[o.length-1]=k,s=s.substring(0,s.length-p.raw.length)+k.raw,r=r.substring(0,r.length-p.text.length)+k.text;break}else if((f==null?void 0:f.type)==="list"){const p=f,b=p.raw+`
`+i.join(`
`),k=this.list(b);o[o.length-1]=k,s=s.substring(0,s.length-f.raw.length)+k.raw,r=r.substring(0,r.length-p.raw.length)+k.raw,i=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const s=i.length>1,r={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const o=this.rules.other.listItemRegex(i);let u=!1;for(;e;){let c=!1,l="",h="";if(!(n=o.exec(e))||this.rules.block.hr.test(e))break;l=n[0],e=e.substring(l.length);let d=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,w=>" ".repeat(3*w.length)),f=e.split(`
`,1)[0],p=!d.trim(),b=0;if(this.options.pedantic?(b=2,h=d.trimStart()):p?b=n[1].length+1:(b=n[2].search(this.rules.other.nonSpaceChar),b=b>4?1:b,h=d.slice(b),b+=n[1].length),p&&this.rules.other.blankLine.test(f)&&(l+=f+`
`,e=e.substring(f.length+1),c=!0),!c){const w=this.rules.other.nextBulletRegex(b),C=this.rules.other.hrRegex(b),x=this.rules.other.fencesBeginRegex(b),M=this.rules.other.headingBeginRegex(b),$=this.rules.other.htmlBeginRegex(b);for(;e;){const K=e.split(`
`,1)[0];let ne;if(f=K,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),ne=f):ne=f.replace(this.rules.other.tabCharGlobal,"    "),x.test(f)||M.test(f)||$.test(f)||w.test(f)||C.test(f))break;if(ne.search(this.rules.other.nonSpaceChar)>=b||!f.trim())h+=`
`+ne.slice(b);else{if(p||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||x.test(d)||M.test(d)||C.test(d))break;h+=`
`+f}!p&&!f.trim()&&(p=!0),l+=K+`
`,e=e.substring(K.length+1),d=ne.slice(b)}}r.loose||(u?r.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(u=!0));let k=null,A;this.options.gfm&&(k=this.rules.other.listIsTask.exec(h),k&&(A=k[0]!=="[ ] ",h=h.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:l,task:!!k,checked:A,loose:!1,text:h,tokens:[]}),r.raw+=l}const a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const l=r.items[c].tokens.filter(d=>d.type==="space"),h=l.length>0&&l.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=h}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:r}}}table(e){var u;const n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const i=af(n[1]),s=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(u=n[3])!=null&&u.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<i.length;a++)o.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:o.align[a]});for(const a of r)o.rows.push(af(a,o.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[l]})));return o}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const o=ws(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=IA(n[2],"()");if(o>-1){const a=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,a).trim(),n[3]=""}}let s=n[2],r="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=n[3]?n[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),cf(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=n[s.toLowerCase()];if(!r){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return cf(i,r,i[0],this.lexer,this.rules)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...s[0]].length-1;let u,a,c=o,l=0;const h=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(s=h.exec(n))!=null;){if(u=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!u)continue;if(a=[...u].length,s[3]||s[4]){c+=a;continue}else if((s[5]||s[6])&&o%3&&!((o+a)%3)){l+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+l);const d=[...s[0]][0].length,f=e.slice(0,o+s.index+d+a);if(Math.min(o,a)%2){const b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}const p=f.slice(2,-2);return{type:"strong",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(i),r=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&r&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=n[1],s="mailto:"+i):(i=n[1],s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let s,r;if(n[2]==="@")s=n[0],r="mailto:"+s;else{let o;do o=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(o!==n[0]);s=n[0],n[1]==="www."?r="http://"+n[0]:r=n[0]}return{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){const i=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:i}}}}class mt{constructor(e){pe(this,"tokens");pe(this,"options");pe(this,"state");pe(this,"tokenizer");pe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||wi,this.options.tokenizer=this.options.tokenizer||new Oo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Je,block:Br.normal,inline:Es.normal};this.options.pedantic?(n.block=Br.pedantic,n.inline=Es.pedantic):this.options.gfm&&(n.block=Br.gfm,this.options.breaks?n.inline=Es.breaks:n.inline=Es.gfm),this.tokenizer.rules=n}static get rules(){return{block:Br,inline:Es}}static lex(e,n){return new mt(n).lex(e)}static lexInline(e,n){return new mt(n).inlineTokens(e)}lex(e){e=e.replace(Je.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){var s,r,o;for(this.options.pedantic&&(e=e.replace(Je.tabCharGlobal,"    ").replace(Je.spaceLine,""));e;){let u;if((r=(s=this.options.extensions)==null?void 0:s.block)!=null&&r.some(c=>(u=c.call({lexer:this},e,n))?(e=e.substring(u.raw.length),n.push(u),!0):!1))continue;if(u=this.tokenizer.space(e)){e=e.substring(u.raw.length);const c=n.at(-1);u.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(u);continue}if(u=this.tokenizer.code(e)){e=e.substring(u.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+u.raw,c.text+=`
`+u.text,this.inlineQueue.at(-1).src=c.text):n.push(u);continue}if(u=this.tokenizer.fences(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.heading(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.hr(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.blockquote(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.list(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.html(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.def(e)){e=e.substring(u.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+u.raw,c.text+=`
`+u.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.lheading(e)){e=e.substring(u.raw.length),n.push(u);continue}let a=e;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0;const l=e.slice(1);let h;this.options.extensions.startBlock.forEach(d=>{h=d.call({lexer:this},l),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(u=this.tokenizer.paragraph(a))){const c=n.at(-1);i&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+u.raw,c.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(u),i=a.length!==e.length,e=e.substring(u.raw.length);continue}if(u=this.tokenizer.text(e)){e=e.substring(u.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+u.raw,c.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(u);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var u,a,c;let i=e,s=null;if(this.tokens.links){const l=Object.keys(this.tokens.links);if(l.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)l.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,o="";for(;e;){r||(o=""),r=!1;let l;if((a=(u=this.options.extensions)==null?void 0:u.inline)!=null&&a.some(d=>(l=d.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);const d=n.at(-1);l.type==="text"&&(d==null?void 0:d.type)==="text"?(d.raw+=l.raw,d.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(e,i,o)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),n.push(l);continue}let h=e;if((c=this.options.extensions)!=null&&c.startInline){let d=1/0;const f=e.slice(1);let p;this.options.extensions.startInline.forEach(b=>{p=b.call({lexer:this},f),typeof p=="number"&&p>=0&&(d=Math.min(d,p))}),d<1/0&&d>=0&&(h=e.substring(0,d+1))}if(l=this.tokenizer.inlineText(h)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(o=l.raw.slice(-1)),r=!0;const d=n.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=l.raw,d.text+=l.text):n.push(l);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return n}}class Fo{constructor(e){pe(this,"options");pe(this,"parser");this.options=e||wi}space(e){return""}code({text:e,lang:n,escaped:i}){var o;const s=(o=(n||"").match(Je.notSpaceStart))==null?void 0:o[0],r=e.replace(Je.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Bt(s)+'">'+(i?r:Bt(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:Bt(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,i=e.start;let s="";for(let u=0;u<e.items.length;u++){const a=e.items[u];s+=this.listitem(a)}const r=n?"ol":"ul",o=n&&i!==1?' start="'+i+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(e){var i;let n="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+Bt(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):n+=s+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",i="";for(let r=0;r<e.header.length;r++)i+=this.tablecell(e.header[r]);n+=this.tablerow({text:i});let s="";for(let r=0;r<e.rows.length;r++){const o=e.rows[r];i="";for(let u=0;u<o.length;u++)i+=this.tablecell(o[u]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+n+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Bt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:i}){const s=this.parser.parseInline(i),r=uf(e);if(r===null)return s;e=r;let o='<a href="'+e+'"';return n&&(o+=' title="'+Bt(n)+'"'),o+=">"+s+"</a>",o}image({href:e,title:n,text:i}){const s=uf(e);if(s===null)return Bt(i);e=s;let r=`<img src="${e}" alt="${i}"`;return n&&(r+=` title="${Bt(n)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Bt(e.text)}}class Cl{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class bt{constructor(e){pe(this,"options");pe(this,"renderer");pe(this,"textRenderer");this.options=e||wi,this.options.renderer=this.options.renderer||new Fo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Cl}static parse(e,n){return new bt(n).parse(e)}static parseInline(e,n){return new bt(n).parseInline(e)}parse(e,n=!0){var s,r;let i="";for(let o=0;o<e.length;o++){const u=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[u.type]){const c=u,l=this.options.extensions.renderers[c.type].call({parser:this},c);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){i+=l||"";continue}}const a=u;switch(a.type){case"space":{i+=this.renderer.space(a);continue}case"hr":{i+=this.renderer.hr(a);continue}case"heading":{i+=this.renderer.heading(a);continue}case"code":{i+=this.renderer.code(a);continue}case"table":{i+=this.renderer.table(a);continue}case"blockquote":{i+=this.renderer.blockquote(a);continue}case"list":{i+=this.renderer.list(a);continue}case"html":{i+=this.renderer.html(a);continue}case"paragraph":{i+=this.renderer.paragraph(a);continue}case"text":{let c=a,l=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],l+=`
`+this.renderer.text(c);n?i+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):i+=l;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return i}parseInline(e,n=this.renderer){var s,r;let i="";for(let o=0;o<e.length;o++){const u=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[u.type]){const c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){i+=c||"";continue}}const a=u;switch(a.type){case"escape":{i+=n.text(a);break}case"html":{i+=n.html(a);break}case"link":{i+=n.link(a);break}case"image":{i+=n.image(a);break}case"strong":{i+=n.strong(a);break}case"em":{i+=n.em(a);break}case"codespan":{i+=n.codespan(a);break}case"br":{i+=n.br(a);break}case"del":{i+=n.del(a);break}case"text":{i+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return i}}class qs{constructor(e){pe(this,"options");pe(this,"block");this.options=e||wi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?mt.lex:mt.lexInline}provideParser(){return this.block?bt.parse:bt.parseInline}}pe(qs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class AA{constructor(...e){pe(this,"defaults",ml());pe(this,"options",this.setOptions);pe(this,"parse",this.parseMarkdown(!0));pe(this,"parseInline",this.parseMarkdown(!1));pe(this,"Parser",bt);pe(this,"Renderer",Fo);pe(this,"TextRenderer",Cl);pe(this,"Lexer",mt);pe(this,"Tokenizer",Oo);pe(this,"Hooks",qs);this.use(...e)}walkTokens(e,n){var s,r;let i=[];for(const o of e)switch(i=i.concat(n.call(this,o)),o.type){case"table":{const u=o;for(const a of u.header)i=i.concat(this.walkTokens(a.tokens,n));for(const a of u.rows)for(const c of a)i=i.concat(this.walkTokens(c.tokens,n));break}case"list":{const u=o;i=i.concat(this.walkTokens(u.items,n));break}default:{const u=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[u.type]?this.defaults.extensions.childTokens[u.type].forEach(a=>{const c=u[a].flat(1/0);i=i.concat(this.walkTokens(c,n))}):u.tokens&&(i=i.concat(this.walkTokens(u.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=n.renderers[r.name];o?n.renderers[r.name]=function(...u){let a=r.renderer.apply(this,u);return a===!1&&(a=o.apply(this,u)),a}:n.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=n[r.level];o?o.unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),s.extensions=n),i.renderer){const r=this.defaults.renderer||new Fo(this.defaults);for(const o in i.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const u=o,a=i.renderer[u],c=r[u];r[u]=(...l)=>{let h=a.apply(r,l);return h===!1&&(h=c.apply(r,l)),h||""}}s.renderer=r}if(i.tokenizer){const r=this.defaults.tokenizer||new Oo(this.defaults);for(const o in i.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const u=o,a=i.tokenizer[u],c=r[u];r[u]=(...l)=>{let h=a.apply(r,l);return h===!1&&(h=c.apply(r,l)),h}}s.tokenizer=r}if(i.hooks){const r=this.defaults.hooks||new qs;for(const o in i.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const u=o,a=i.hooks[u],c=r[u];qs.passThroughHooks.has(o)?r[u]=l=>{if(this.defaults.async)return Promise.resolve(a.call(r,l)).then(d=>c.call(r,d));const h=a.call(r,l);return c.call(r,h)}:r[u]=(...l)=>{let h=a.apply(r,l);return h===!1&&(h=c.apply(r,l)),h}}s.hooks=r}if(i.walkTokens){const r=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(u){let a=[];return a.push(o.call(this,u)),r&&(a=a.concat(r.call(this,u))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return mt.lex(e,n??this.defaults)}parser(e,n){return bt.parse(e,n??this.defaults)}parseMarkdown(e){return(i,s)=>{const r={...s},o={...this.defaults,...r},u=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const a=o.hooks?o.hooks.provideLexer():e?mt.lex:mt.lexInline,c=o.hooks?o.hooks.provideParser():e?bt.parse:bt.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(l=>a(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>c(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(u);try{o.hooks&&(i=o.hooks.preprocess(i));let l=a(i,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let h=c(l,o);return o.hooks&&(h=o.hooks.postprocess(h)),h}catch(l){return u(l)}}}onError(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+Bt(i.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(i);throw i}}}const _i=new AA;function ae(t,e){return _i.parse(t,e)}ae.options=ae.setOptions=function(t){return _i.setOptions(t),ae.defaults=_i.defaults,cg(ae.defaults),ae};ae.getDefaults=ml;ae.defaults=wi;ae.use=function(...t){return _i.use(...t),ae.defaults=_i.defaults,cg(ae.defaults),ae};ae.walkTokens=function(t,e){return _i.walkTokens(t,e)};ae.parseInline=_i.parseInline;ae.Parser=bt;ae.parser=bt.parse;ae.Renderer=Fo;ae.TextRenderer=Cl;ae.Lexer=mt;ae.lexer=mt.lex;ae.Tokenizer=Oo;ae.Hooks=qs;ae.parse=ae;ae.options;ae.setOptions;ae.use;ae.walkTokens;ae.parseInline;bt.parse;mt.lex;const Se=t=>(mi("data-v-db717f6d"),t=t(),bi(),t),SA={class:"podelki-container"},RA=Se(()=>_("h1",null,"Мастерская мэйкера",-1)),DA={class:"ai-helper"},PA=Se(()=>_("h3",null,"Нужна помощь с поделками?",-1)),NA=Se(()=>_("p",null,"Задайте вопрос нашему помощнику:",-1)),OA={class:"request-section"},FA=["disabled"],MA={key:0,class:"response-section"},LA=["innerHTML"],$A={key:1,class:"error-message"},UA=Se(()=>_("br",null,null,-1)),BA={class:"article-container"},zA={class:"craft-article"},qA=Se(()=>_("h2",null,"Бумажный самолетик",-1)),WA={class:"toggle-button"},jA={key:0},HA=Se(()=>_("div",{class:"article-meta"},[_("span",{class:"difficulty"},"Сложность: ★☆☆☆☆"),_("span",{class:"time"},"Время: 5 минут")],-1)),VA={class:"single-image"},GA=Se(()=>_("div",{class:"materials-section"},[_("h3",null,"📦 Материалы"),_("ul",null,[_("li",null,"Лист бумаги А4 (можно цветной)")])],-1)),KA=Se(()=>_("div",{class:"tools-section"},[_("h3",null,"🛠️ Инструменты"),_("ul",null,[_("li",null,"Руки"),_("li",null,"Ровная поверхность для складывания")])],-1)),YA={class:"steps-section"},QA=Se(()=>_("h3",null,"📝 Пошаговая инструкция",-1)),ZA=Se(()=>_("li",null," Возьмите лист бумаги формата А4. ",-1)),JA=Se(()=>_("li",null,"Сложите лист пополам вдоль длинной стороны, затем разверните.",-1)),XA={class:"single-image"},eS=Se(()=>_("li",null,"Верхние углы загните к центральной линии.",-1)),tS={class:"single-image"},nS=Se(()=>_("li",null,"Снова загните новые углы к центру.",-1)),iS={class:"single-image"},sS=Se(()=>_("li",null,"Сложите самолетик пополам по центральной линии.",-1)),rS={class:"single-image"},oS=Se(()=>_("li",null,"Загните крылья, оставив примерно 1 см снизу для корпуса.",-1)),uS={class:"single-image"},aS=Se(()=>_("li",null,"Расправьте крылья под прямым углом к корпусу.",-1)),cS={class:"single-image"},lS={class:"images-section"},hS=Se(()=>_("h3",null,"📷 Фотографии процесса",-1)),dS={class:"container"},fS={class:"single-image"},pS={class:"single-image"},_S={class:"single-image"},gS=Se(()=>_("div",{class:"video-section"},[_("h3",null,"🎥 Видеоинструкция"),_("div",{class:"video-wrapper"},[_("iframe",{width:"720",height:"405",src:"https://rutube.ru/play/embed/e71e95f0b8fd215e7d3907daa2b563dd/",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1)),mS=Se(()=>_("div",{class:"tips-section"},[_("h3",null,"💡 Советы"),_("ul",null,[_("li",null,"Для лучшего полета делайте крылья узкими и длинными."),_("li",null,"Попробуйте разные виды бумаги для сравнения результатов."),_("li",null,"Добавьте небольшой вес в нос самолетика (скрепку) для стабильности.")])],-1)),bS=Se(()=>_("div",{class:"thanks-section"},[_("h3",null,"🙏 Благодарности"),_("p",null,'Спасибо волонтерам детского центра "Солнышко" за идею и тестирование этой инструкции.')],-1)),yS={name:"Podelki",data(){return{userRequest:"",response:null,isLoading:!1,error:null}},methods:{async sendRequestToMistral(){var t,e;if(!this.userRequest.trim()){this.error="Пожалуйста, введите ваш вопрос";return}this.isLoading=!0,this.error=null,this.response=null;try{const n="z0BIDWOltmlDCI8q4wFFJMjEcc4d4g87",i=await fetch("https://api.mistral.ai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({model:"mistral-medium",messages:[{role:"system",content:`Ты помощник для волонтеров, специализирующийся на простых поделках для детей.
                Отвечай подробно, с пошаговыми инструкциями и ссылками на фото и видео на rutube.ru. После каждого шага предложи фото. Если нужны материалы или инструменты - перечисли их в начале.
                Используй формат:

                ### Материалы:
                - список материалов

                ### Инструменты:
                - список инструментов

                ### Инструкция:
                1. Шаг 1
                2. Шаг 2
                ...

                ### Советы:
                - полезные советы

                Будь дружелюбным и поддерживающим!`},{role:"user",content:this.userRequest}],temperature:.7})});if(!i.ok)throw new Error(`Ошибка HTTP: ${i.status}`);const s=await i.json();this.response=((e=(t=s.choices[0])==null?void 0:t.message)==null?void 0:e.content)||"Не удалось получить ответ"}catch(n){this.error=`Ошибка: ${n.message}`,console.error("Mistral API error:",n)}finally{this.isLoading=!1}},renderMarkdown(t){return ae(t||"")}},computed:{formattedResponse(){return this.response?this.response:""}}},vS=Object.assign(yS,{setup(t){const e=Ze(!1),n=()=>{e.value=!e.value},i=s=>ae(s||"");return(s,r)=>(B(),z("div",SA,[RA,_("div",DA,[PA,NA,_("div",OA,[Wt(_("textarea",{"onUpdate:modelValue":r[0]||(r[0]=o=>s.userRequest=o),placeholder:"Например: Как сделать бумажный кораблик?",class:"request-input"},null,512),[[jt,s.userRequest]]),_("button",{onClick:r[1]||(r[1]=(...o)=>s.sendRequestToMistral&&s.sendRequestToMistral(...o)),disabled:s.isLoading,class:"send-button"},Ie(s.isLoading?"Отправка...":"Спросить"),9,FA)]),s.response?(B(),z("div",MA,[_("div",{class:"response-content",innerHTML:i(s.formattedResponse)},null,8,LA)])):ke("",!0),s.error?(B(),z("div",$A," Ошибка: "+Ie(s.error),1)):ke("",!0)]),UA,_("div",BA,[_("article",zA,[_("div",{class:"article-header",onClick:n,style:{cursor:"pointer"}},[qA,_("button",WA,Ie(e.value?"Свернуть":"Подробнее"),1)]),e.value?(B(),z("div",jA,[HA,_("div",VA,[F(Q,{imageSrc:"./images/make/1.jpg",alt:"Шаг 1",imageWidth:"300px"})]),GA,KA,_("div",YA,[QA,_("ol",null,[ZA,JA,_("div",XA,[F(Q,{imageSrc:"./images/make/2.jpg",alt:"Шаг 1",imageWidth:"300px"})]),eS,_("div",tS,[F(Q,{imageSrc:"./images/make/4.jpg",alt:"Шаг 1",imageWidth:"300px"})]),nS,_("div",iS,[F(Q,{imageSrc:"./images/make/6.jpg",alt:"Шаг 1",imageWidth:"300px"})]),sS,_("div",rS,[F(Q,{imageSrc:"./images/make/8.jpg",alt:"Шаг 1",imageWidth:"300px"})]),oS,_("div",uS,[F(Q,{imageSrc:"./images/make/10.jpg",alt:"Шаг 1",imageWidth:"300px"})]),aS,_("div",cS,[F(Q,{imageSrc:"./images/make/12.jpg",alt:"Шаг 1",imageWidth:"300px"})])])]),_("div",lS,[hS,_("div",dS,[_("div",fS,[F(Q,{imageSrc:"./images/1.jpg",alt:"Шаг 1",imageWidth:"100px"})]),_("div",pS,[F(Q,{imageSrc:"./images/2.jpg",alt:"Шаг 2",imageWidth:"100px"})]),_("div",_S,[F(Q,{imageSrc:"./images/3.jpg",alt:"Шаг 3",imageWidth:"100px"})])])]),gS,mS,bS])):ke("",!0)])])]))}}),kS=Ot(vS,[["__scopeId","data-v-db717f6d"]]);/**
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
 */const vg="firebasestorage.googleapis.com",kg="storageBucket",xS=2*60*1e3,ES=10*60*1e3;/**
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
 */class Ce extends mn{constructor(e,n,i=0){super(Zu(e),`Firebase Storage: ${n} (${Zu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function Zu(t){return"storage/"+t}function Il(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(we.UNKNOWN,t)}function wS(t){return new Ce(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function CS(t){return new Ce(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(we.UNAUTHENTICATED,t)}function TS(){return new Ce(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AS(t){return new Ce(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function SS(){return new Ce(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RS(){return new Ce(we.CANCELED,"User canceled the upload/download.")}function DS(t){return new Ce(we.INVALID_URL,"Invalid URL '"+t+"'.")}function PS(t){return new Ce(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function NS(){return new Ce(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kg+"' property when initializing the app?")}function OS(){return new Ce(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function FS(){return new Ce(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MS(t){return new Ce(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ja(t){return new Ce(we.INVALID_ARGUMENT,t)}function xg(){return new Ce(we.APP_DELETED,"The Firebase app was deleted.")}function LS(t){return new Ce(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ws(t,e){return new Ce(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Cs(t){throw new Ce(we.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=ht.makeFromUrl(e,n)}catch{return new ht(e,"")}if(i.path==="")return i;throw PS(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},b=n===vg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",A=new RegExp(`^https?://${b}/${s}/${k}`,"i"),C=[{regex:u,indices:a,postModify:r},{regex:f,indices:p,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<C.length;x++){const M=C[x],$=M.regex.exec(e);if($){const K=$[M.indices.bucket];let ne=$[M.indices.path];ne||(ne=""),i=new ht(K,ne),M.postModify(i);break}}if(i==null)throw DS(e);return i}}class $S{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function US(t,e,n){let i=1,s=null,r=null,o=!1,u=0;function a(){return u===2}let c=!1;function l(...k){c||(c=!0,e.apply(null,k))}function h(k){s=setTimeout(()=>{s=null,t(f,a())},k)}function d(){r&&clearTimeout(r)}function f(k,...A){if(c){d();return}if(k){d(),l.call(null,k,...A);return}if(a()||o){d(),l.call(null,k,...A);return}i<64&&(i*=2);let C;u===1?(u=2,C=0):C=(i+Math.random())*1e3,h(C)}let p=!1;function b(k){p||(p=!0,d(),!c&&(s!==null?(k||(u=2),clearTimeout(s),h(0)):k||(u=1)))}return h(0),r=setTimeout(()=>{o=!0,b(!0)},n),b}function BS(t){t(!1)}/**
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
 */function zS(t){return t!==void 0}function qS(t){return typeof t=="object"&&!Array.isArray(t)}function Tl(t){return typeof t=="string"||t instanceof String}function lf(t){return Al()&&t instanceof Blob}function Al(){return typeof Blob<"u"}function hf(t,e,n,i){if(i<e)throw ja(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ja(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Sl(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Eg(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
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
 */function WS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class jS{constructor(e,n,i,s,r,o,u,a,c,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new zr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=u=>{const a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const u=r.getErrorCode()===oi.NO_ERROR,a=r.getStatus();if(!u||WS(a,this.additionalRetryCodes_)&&this.retry){const l=r.getErrorCode()===oi.ABORT;i(!1,new zr(!1,null,l));return}const c=this.successCodes_.indexOf(a)!==-1;i(!0,new zr(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(u,u.getResponse());zS(a)?r(a):r()}catch(a){o(a)}else if(u!==null){const a=Il();a.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,a)):o(a)}else if(s.canceled){const a=this.appDelete_?xg():RS();o(a)}else{const a=SS();o(a)}};this.canceled_?n(!1,new zr(!1,null,!0)):this.backoffId_=US(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function HS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function VS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function KS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YS(t,e,n,i,s,r,o=!0){const u=Eg(t.urlParams),a=t.url+u,c=Object.assign({},t.headers);return GS(c,e),HS(c,n),VS(c,r),KS(c,i),new jS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function QS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZS(...t){const e=QS();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(Al())return new Blob(t);throw new Ce(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function XS(t){if(typeof atob>"u")throw MS("base-64");return atob(t)}/**
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
 */const Gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ju{constructor(e,n){this.data=e,this.contentType=n||null}}function e8(t,e){switch(t){case Gt.RAW:return new Ju(wg(e));case Gt.BASE64:case Gt.BASE64URL:return new Ju(Cg(t,e));case Gt.DATA_URL:return new Ju(n8(e),i8(e))}throw Il()}function wg(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=t.charCodeAt(++n);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function t8(t){let e;try{e=decodeURIComponent(t)}catch{throw Ws(Gt.DATA_URL,"Malformed data URL.")}return wg(e)}function Cg(t,e){switch(t){case Gt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw Ws(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Gt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw Ws(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XS(e)}catch(s){throw s.message.includes("polyfill")?s:Ws(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class Ig{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ws(Gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=s8(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function n8(t){const e=new Ig(t);return e.base64?Cg(Gt.BASE64,e.rest):t8(e.rest)}function i8(t){return new Ig(t).contentType}function s8(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Rn{constructor(e,n){let i=0,s="";lf(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(lf(this.data_)){const i=this.data_,s=JS(i,e,n);return s===null?null:new Rn(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Rn(i,!0)}}static getBlob(...e){if(Al()){const n=e.map(i=>i instanceof Rn?i.data_:i);return new Rn(ZS.apply(null,n))}else{const n=e.map(o=>Tl(o)?e8(Gt.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return n.forEach(o=>{for(let u=0;u<o.length;u++)s[r++]=o[u]}),new Rn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Tg(t){let e;try{e=JSON.parse(t)}catch{return null}return qS(e)?e:null}/**
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
 */function r8(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function o8(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function Ag(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function u8(t,e){return e}class Ke{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||u8}}let qr=null;function a8(t){return!Tl(t)||t.length<2?t:Ag(t)}function Sg(){if(qr)return qr;const t=[];t.push(new Ke("bucket")),t.push(new Ke("generation")),t.push(new Ke("metageneration")),t.push(new Ke("name","fullPath",!0));function e(r,o){return a8(o)}const n=new Ke("name");n.xform=e,t.push(n);function i(r,o){return o!==void 0?Number(o):o}const s=new Ke("size");return s.xform=i,t.push(s),t.push(new Ke("timeCreated")),t.push(new Ke("updated")),t.push(new Ke("md5Hash",null,!0)),t.push(new Ke("cacheControl",null,!0)),t.push(new Ke("contentDisposition",null,!0)),t.push(new Ke("contentEncoding",null,!0)),t.push(new Ke("contentLanguage",null,!0)),t.push(new Ke("contentType",null,!0)),t.push(new Ke("metadata","customMetadata",!0)),qr=t,qr}function c8(t,e){function n(){const i=t.bucket,s=t.fullPath,r=new ht(i,s);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function l8(t,e,n){const i={};i.type="file";const s=n.length;for(let r=0;r<s;r++){const o=n[r];i[o.local]=o.xform(i,e[o.server])}return c8(i,t),i}function Rg(t,e,n){const i=Tg(e);return i===null?null:l8(t,i,n)}function h8(t,e,n,i){const s=Tg(e);if(s===null||!Tl(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=Sl(d,n,i),p=Eg({alt:"media",token:c});return f+p})[0]}function d8(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Dg{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Pg(t){if(!t)throw Il()}function f8(t,e){function n(i,s){const r=Rg(t,s,e);return Pg(r!==null),r}return n}function p8(t,e){function n(i,s){const r=Rg(t,s,e);return Pg(r!==null),h8(r,s,t.host,t._protocol)}return n}function Ng(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=TS():s=IS():n.getStatus()===402?s=CS(t.bucket):n.getStatus()===403?s=AS(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function _8(t){const e=Ng(t);function n(i,s){let r=e(i,s);return i.getStatus()===404&&(r=wS(t.path)),r.serverResponse=s.serverResponse,r}return n}function g8(t,e,n){const i=e.fullServerUrl(),s=Sl(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,u=new Dg(s,r,p8(t,n),o);return u.errorHandler=_8(e),u}function m8(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function b8(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=m8(null,e)),i}function y8(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let C="";for(let x=0;x<2;x++)C=C+Math.random().toString().slice(2);return C}const a=u();o["Content-Type"]="multipart/related; boundary="+a;const c=b8(e,i,s),l=d8(c,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+a+"--",f=Rn.getBlob(h,i,d);if(f===null)throw OS();const p={name:c.fullPath},b=Sl(r,t.host,t._protocol),k="POST",A=t.maxUploadRetryTime,w=new Dg(b,k,f8(t,n),A);return w.urlParams=p,w.headers=o,w.body=f.uploadData(),w.errorHandler=Ng(e),w}class v8{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s){if(this.sent_)throw Cs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Cs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Cs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Cs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Cs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class k8 extends v8{initXhr(){this.xhr_.responseType="text"}}function Og(){return new k8}/**
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
 */class gi{constructor(e,n){this._service=e,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gi(e,n)}get root(){const e=new ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ag(this._location.path)}get storage(){return this._service}get parent(){const e=r8(this._location.path);if(e===null)return null;const n=new ht(this._location.bucket,e);return new gi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LS(e)}}function x8(t,e,n){t._throwIfRoot("uploadBytes");const i=y8(t.storage,t._location,Sg(),new Rn(e,!0),n);return t.storage.makeRequestWithTokens(i,Og).then(s=>({metadata:s,ref:t}))}function E8(t){t._throwIfRoot("getDownloadURL");const e=g8(t.storage,t._location,Sg());return t.storage.makeRequestWithTokens(e,Og).then(n=>{if(n===null)throw FS();return n})}function w8(t,e){const n=o8(t._location.path,e),i=new ht(t._location.bucket,n);return new gi(t.storage,i)}/**
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
 */function C8(t){return/^[A-Za-z]+:\/\//.test(t)}function I8(t,e){return new gi(t,e)}function Fg(t,e){if(t instanceof Rl){const n=t;if(n._bucket==null)throw NS();const i=new gi(n,n._bucket);return e!=null?Fg(i,e):i}else return e!==void 0?w8(t,e):t}function T8(t,e){if(e&&C8(e)){if(t instanceof Rl)return I8(t,e);throw ja("To use ref(service, url), the first argument must be a Storage instance.")}else return Fg(t,e)}function df(t,e){const n=e==null?void 0:e[kg];return n==null?null:ht.makeFromBucketSpec(n,t)}function A8(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken=typeof s=="string"?s:k0(s,t.app.options.projectId))}class Rl{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=vg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xS,this._maxUploadRetryTime=ES,this._requests=new Set,s!=null?this._bucket=ht.makeFromBucketSpec(s,this._host):this._bucket=df(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,e):this._bucket=df(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gi(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new $S(xg());{const o=YS(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const ff="@firebase/storage",pf="0.13.7";/**
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
 */const Mg="storage";function S8(t,e,n){return t=Ue(t),x8(t,e,n)}function R8(t){return t=Ue(t),E8(t)}function D8(t,e){return t=Ue(t),T8(t,e)}function P8(t=fc(),e){t=Ue(t);const i=Xo(t,Mg).getImmediate({identifier:e}),s=b0("storage");return s&&N8(i,...s),i}function N8(t,e,n,i={}){A8(t,e,n,i)}function O8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Rl(n,i,s,e,yi)}function F8(){ci(new qn(Mg,O8,"PUBLIC").setMultipleInstances(!0)),Yt(ff,pf,""),Yt(ff,pf,"esm2017")}F8();const Mt=t=>(mi("data-v-e552ba27"),t=t(),bi(),t),M8={class:"projects-section"},L8=Mt(()=>_("h2",null,"Детские проекты",-1)),$8={key:0,class:"project-form"},U8={class:"form-group"},B8=Mt(()=>_("label",null,"Название проекта*",-1)),z8={class:"form-group"},q8=Mt(()=>_("label",null,"Описание проекта*",-1)),W8={class:"form-group"},j8=Mt(()=>_("label",null,"Изображение проекта",-1)),H8={key:0,class:"image-preview"},V8=["src"],G8={class:"form-group"},K8=Mt(()=>_("label",null,"Ссылки (через запятую)",-1)),Y8={class:"form-group"},Q8=Mt(()=>_("label",null,"Инструменты (через запятую)",-1)),Z8={class:"form-group"},J8=Mt(()=>_("label",null,"Материалы (через запятую)",-1)),X8={key:1,class:"auth-prompt"},eR=Mt(()=>_("p",null,"Чтобы добавить проект, пожалуйста, войдите в систему.",-1)),tR=[eR],nR={class:"projects-list"},iR={class:"project-header"},sR={class:"project-actions"},rR=["onClick"],oR=["onClick"],uR={key:0,class:"project-image"},aR=["src","alt"],cR={class:"project-description"},lR={key:1,class:"project-links"},hR=Mt(()=>_("h4",null,"Ссылки:",-1)),dR=["href"],fR={key:2,class:"project-tools"},pR=Mt(()=>_("h4",null,"Инструменты:",-1)),_R={key:3,class:"project-materials"},gR=Mt(()=>_("h4",null,"Материалы:",-1)),mR={class:"project-footer"},bR={key:4,class:"moderation-notice"},yR={__name:"MakeProject",setup(t){const e=Ze({title:"",description:"",image:null,links:"",tools:"",materials:""}),n=Ze([]),i=Ze(null),s=Ze(!1),r=P8(),o=Ze(null);Go(()=>{Oi.onAuthStateChanged(async d=>{i.value=d,d?s.value=d.email==="admin@example.com":s.value=!1});const h=Pn(Nn,"projects");v_(h,d=>{const f=d.val();f?n.value=Object.entries(f).map(([p,b])=>({id:p,...b})).sort((p,b)=>p.approved===b.approved?b.timestamp-p.timestamp:p.approved?-1:1):n.value=[]})});const u=h=>{const d=h.target.files[0];if(d){e.value.image=d;const f=new FileReader;f.onload=p=>{o.value=p.target.result},f.readAsDataURL(d)}},a=async()=>{if(i.value){if(!e.value.title.trim()||!e.value.description.trim()){alert("Пожалуйста, заполните название и описание проекта");return}try{let h="";if(e.value.image){const f=D8(r,`project-images/${Date.now()}_${e.value.image.name}`);await S8(f,e.value.image),h=await R8(f)}const d={title:e.value.title,description:e.value.description,imageUrl:h,links:e.value.links.split(",").map(f=>f.trim()).filter(f=>f),tools:e.value.tools.split(",").map(f=>f.trim()).filter(f=>f),materials:e.value.materials.split(",").map(f=>f.trim()).filter(f=>f),author:i.value.displayName||i.value.email,authorId:i.value.uid,timestamp:Date.now(),approved:s.value};g_(Pn(Nn,"projects"),d),e.value={title:"",description:"",image:null,links:"",tools:"",materials:""},o.value=null,s.value||alert("Ваш проект отправлен на модерацию. Он появится после проверки администратором.")}catch(h){console.error("Ошибка при добавлении проекта:",h),alert("Произошла ошибка при сохранении проекта")}}},c=(h,d)=>{i.value&&(s.value||i.value.uid===d)&&confirm("Вы уверены, что хотите удалить этот проект?")&&m_(Pn(Nn,`projects/${h}`))},l=h=>{s.value&&y_(Pn(Nn,`projects/${h}`),{approved:!0})};return(h,d)=>(B(),z("div",M8,[L8,i.value?(B(),z("div",$8,[_("div",U8,[B8,Wt(_("input",{"onUpdate:modelValue":d[0]||(d[0]=f=>e.value.title=f),placeholder:"Введите название проекта"},null,512),[[jt,e.value.title]])]),_("div",z8,[q8,Wt(_("textarea",{"onUpdate:modelValue":d[1]||(d[1]=f=>e.value.description=f),placeholder:"Опишите ваш проект..."},null,512),[[jt,e.value.description]])]),_("div",W8,[j8,_("input",{type:"file",onChange:u,accept:"image/*"},null,32),o.value?(B(),z("div",H8,[_("img",{src:o.value,alt:"Превью изображения"},null,8,V8)])):ke("",!0)]),_("div",G8,[K8,Wt(_("input",{"onUpdate:modelValue":d[2]||(d[2]=f=>e.value.links=f),placeholder:"https://example.com, https://github.com/..."},null,512),[[jt,e.value.links]])]),_("div",Y8,[Q8,Wt(_("input",{"onUpdate:modelValue":d[3]||(d[3]=f=>e.value.tools=f),placeholder:"3D-принтер, Arduino, Photoshop..."},null,512),[[jt,e.value.tools]])]),_("div",Z8,[J8,Wt(_("input",{"onUpdate:modelValue":d[4]||(d[4]=f=>e.value.materials=f),placeholder:"Дерево, пластик, картон..."},null,512),[[jt,e.value.materials]])]),_("button",{onClick:a},"Отправить проект")])):(B(),z("div",X8,tR)),_("div",nR,[(B(!0),z(Re,null,Ts(n.value,f=>{var p;return B(),z(Re,{key:f.id},[f.approved||s.value?(B(),z("div",{key:0,class:fr(["project-card",{pending:!f.approved}])},[_("div",iR,[_("h3",null,Ie(f.title),1),_("div",sR,[s.value&&!f.approved?(B(),z("button",{key:0,onClick:b=>l(f.id),class:"approve-button"}," Одобрить ",8,rR)):ke("",!0),s.value||((p=i.value)==null?void 0:p.uid)===f.authorId?(B(),z("button",{key:1,onClick:b=>c(f.id,f.authorId),class:"delete-button"}," Удалить ",8,oR)):ke("",!0)])]),f.imageUrl?(B(),z("div",uR,[_("img",{src:f.imageUrl,alt:f.title},null,8,aR)])):ke("",!0),_("p",cR,Ie(f.description),1),f.links&&f.links.length?(B(),z("div",lR,[hR,_("ul",null,[(B(!0),z(Re,null,Ts(f.links,(b,k)=>(B(),z("li",{key:k},[_("a",{href:b,target:"_blank"},Ie(b),9,dR)]))),128))])])):ke("",!0),f.tools&&f.tools.length?(B(),z("div",fR,[pR,_("ul",null,[(B(!0),z(Re,null,Ts(f.tools,(b,k)=>(B(),z("li",{key:k},Ie(b),1))),128))])])):ke("",!0),f.materials&&f.materials.length?(B(),z("div",_R,[gR,_("ul",null,[(B(!0),z(Re,null,Ts(f.materials,(b,k)=>(B(),z("li",{key:k},Ie(b),1))),128))])])):ke("",!0),_("div",mR,[_("small",null,"Автор: "+Ie(f.author),1),_("small",null,Ie(new Date(f.timestamp).toLocaleString()),1)]),f.approved?ke("",!0):(B(),z("div",bR," [На модерации] "))],2)):ke("",!0)],64)}),128))])]))}},vR=Ot(yR,[["__scopeId","data-v-e552ba27"]]),kR=jw({history:yw("/young/"),routes:[{path:"/",name:"home",component:a6},{path:"/about",name:"about",component:p6},{path:"/welcome",name:"welcome",component:A6},{path:"/neuroart",name:"neuroart",component:hT},{path:"/graffiti",name:"graffiti",component:DT},{path:"/volonter",name:"volonter",component:VT},{path:"/maker",name:"maker",component:kS},{path:"/makeProject",name:"make",component:vR}]});rb(zE).use(kR).mount("#app");
