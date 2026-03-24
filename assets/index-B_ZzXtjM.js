const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddFishView-BICh5P3H.js","assets/compressImage-BPxjL0Y_.js","assets/leaflet-BKwr_onr.js","assets/leaflet-Dgihpmma.css","assets/fishCatalog-CAloRjMg.js","assets/FishDetailView-BhdK05Oi.js","assets/PhotoViewer-BmLAp4eQ.js","assets/PhotoViewer-CP6ItG9N.css","assets/CatchMap-Uku-W-yW.js","assets/CatalogView-CSnuXJIG.js","assets/CatalogFishView-BAK3NomI.js","assets/FeedView-CwTN5n8K.js","assets/FeedCard-Bz1Ym1wH.js","assets/MapModal-CdhhpkFW.js","assets/MapModal-C07i8D89.css","assets/FeedView-sFOepQN1.css","assets/ProfileView-QPYLXKVf.js","assets/EditFishView-DvElLG9S.js","assets/StatsView-COASJiCD.js","assets/ClubView-CGgDCpgd.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Ss=[],wn=()=>{},mm=()=>!1,Ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uu=t=>t.startsWith("onUpdate:"),et=Object.assign,hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},XE=Object.prototype.hasOwnProperty,be=(t,e)=>XE.call(t,e),ie=Array.isArray,Cs=t=>uo(t)==="[object Map]",Js=t=>uo(t)==="[object Set]",Cf=t=>uo(t)==="[object Date]",ue=t=>typeof t=="function",qe=t=>typeof t=="string",Cn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",gm=t=>(Ce(t)||ue(t))&&ue(t.then)&&ue(t.catch),_m=Object.prototype.toString,uo=t=>_m.call(t),ZE=t=>uo(t).slice(8,-1),ym=t=>uo(t)==="[object Object]",fu=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},eT=/-\w/g,bt=$a(t=>t.replace(eT,e=>e.slice(1).toUpperCase())),tT=/\B([A-Z])/g,Dr=$a(t=>t.replace(tT,"-$1").toLowerCase()),ja=$a(t=>t.charAt(0).toUpperCase()+t.slice(1)),qc=$a(t=>t?`on${ja(t)}`:""),Tn=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Em=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nT=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Pf;const Ha=()=>Pf||(Pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function du(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?oT(r):du(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Ce(t))return t}const rT=/;(?![^(]*\))/g,sT=/:([^]+)/,iT=/\/\*[^]*?\*\//g;function oT(t){const e={};return t.replace(iT,"").split(rT).forEach(n=>{if(n){const r=n.split(sT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ga(t){let e="";if(qe(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Ga(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const aT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cT=lu(aT);function Tm(t){return!!t||t===""}function lT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ys(t[r],e[r]);return n}function Ys(t,e){if(t===e)return!0;let n=Cf(t),r=Cf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Cn(t),r=Cn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?lT(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ys(t[o],e[o]))return!1}}return String(t)===String(e)}function pu(t,e){return t.findIndex(n=>Ys(n,e))}const vm=t=>!!(t&&t.__v_isRef===!0),wm=t=>qe(t)?t:t==null?"":ie(t)||Ce(t)&&(t.toString===_m||!ue(t.toString))?vm(t)?wm(t.value):JSON.stringify(t,Im,2):String(t),Im=(t,e)=>vm(e)?Im(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Hc(r,i)+" =>"]=s,n),{})}:Js(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Hc(n))}:Cn(e)?Hc(e):Ce(e)&&!ie(e)&&!ym(e)?String(e):e,Hc=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class uT{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){this._on>0&&--this._on===0&&(Dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hT(){return Dt}let Ve;const Gc=new WeakSet;class Am{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gc.has(this)&&(Gc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nf(this),Sm(this);const e=Ve,n=tn;Ve=this,tn=!0;try{return this.fn()}finally{Cm(this),Ve=e,tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_u(e);this.deps=this.depsTail=void 0,Nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let Rm=0,ki,Di;function bm(t,e=!1){if(t.flags|=8,e){t.next=Di,Di=t;return}t.next=ki,ki=t}function mu(){Rm++}function gu(){if(--Rm>0)return;if(Di){let e=Di;for(Di=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ki;){let e=ki;for(ki=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Sm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),_u(r),fT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function El(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Pm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Pm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wi)||(t.globalVersion=Wi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!El(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=tn;Ve=t,tn=!0;try{Sm(t);const s=t.fn(t._value);(e.version===0||Tn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,tn=r,Cm(t),t.flags&=-3}}function _u(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_u(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let tn=!0;const Nm=[];function Kn(){Nm.push(tn),tn=!1}function Qn(){const t=Nm.pop();tn=t===void 0?!0:t}function Nf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Wi=0;class dT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!tn||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new dT(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,km(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Wi++,this.notify(e)}notify(e){mu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gu()}}}function km(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)km(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,Xr=Symbol(""),vl=Symbol(""),zi=Symbol("");function mt(t,e,n){if(tn&&Ve){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new yu),s.map=r,s.key=n),s.track()}}function Un(t,e,n,r,s,i){const o=Tl.get(t);if(!o){Wi++;return}const c=l=>{l&&l.trigger()};if(mu(),e==="clear")o.forEach(c);else{const l=ie(t),u=l&&fu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===zi||!Cn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(zi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Xr)),Cs(t)&&c(o.get(vl)));break;case"delete":l||(c(o.get(Xr)),Cs(t)&&c(o.get(vl)));break;case"set":Cs(t)&&c(o.get(Xr));break}}gu()}function Ts(t){const e=Ie(t);return e===t?e:(mt(e,"iterate",zi),Qt(t)?e:e.map(on))}function Wa(t){return mt(t=Ie(t),"iterate",zi),t}function _n(t,e){return Jn(t)?Ls(Zr(t)?on(e):e):on(e)}const pT={__proto__:null,[Symbol.iterator](){return Wc(this,Symbol.iterator,t=>_n(this,t))},concat(...t){return Ts(this).concat(...t.map(e=>ie(e)?Ts(e):e))},entries(){return Wc(this,"entries",t=>(t[1]=_n(this,t[1]),t))},every(t,e){return xn(this,"every",t,e,void 0,arguments)},filter(t,e){return xn(this,"filter",t,e,n=>n.map(r=>_n(this,r)),arguments)},find(t,e){return xn(this,"find",t,e,n=>_n(this,n),arguments)},findIndex(t,e){return xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return xn(this,"findLast",t,e,n=>_n(this,n),arguments)},findLastIndex(t,e){return xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return zc(this,"includes",t)},indexOf(...t){return zc(this,"indexOf",t)},join(t){return Ts(this).join(t)},lastIndexOf(...t){return zc(this,"lastIndexOf",t)},map(t,e){return xn(this,"map",t,e,void 0,arguments)},pop(){return Ei(this,"pop")},push(...t){return Ei(this,"push",t)},reduce(t,...e){return kf(this,"reduce",t,e)},reduceRight(t,...e){return kf(this,"reduceRight",t,e)},shift(){return Ei(this,"shift")},some(t,e){return xn(this,"some",t,e,void 0,arguments)},splice(...t){return Ei(this,"splice",t)},toReversed(){return Ts(this).toReversed()},toSorted(t){return Ts(this).toSorted(t)},toSpliced(...t){return Ts(this).toSpliced(...t)},unshift(...t){return Ei(this,"unshift",t)},values(){return Wc(this,"values",t=>_n(this,t))}};function Wc(t,e,n){const r=Wa(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const mT=Array.prototype;function xn(t,e,n,r,s,i){const o=Wa(t),c=o!==t&&!Qt(t),l=o[e];if(l!==mT[e]){const p=l.apply(t,i);return c?on(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,_n(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function kf(t,e,n,r){const s=Wa(t),i=s!==t&&!Qt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=_n(t,u)),n.call(this,u,_n(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?_n(t,l):l}function zc(t,e,n){const r=Ie(t);mt(r,"iterate",zi);const s=r[e](...n);return(s===-1||s===!1)&&vu(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Ei(t,e,n=[]){Kn(),mu();const r=Ie(t)[e].apply(t,n);return gu(),Qn(),r}const gT=lu("__proto__,__v_isRef,__isVue"),Dm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function _T(t){Cn(t)||(t=String(t));const e=Ie(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Vm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ST:Mm:i?Lm:Om).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=pT[n]))return l;if(n==="hasOwnProperty")return _T}const c=Reflect.get(e,n,yt(e)?e:r);if((Cn(n)?Dm.has(n):gT(n))||(s||mt(e,"get",n),i))return c;if(yt(c)){const l=o&&fu(n)?c:c.value;return s&&Ce(l)?Il(l):l}return Ce(c)?s?Il(c):za(c):c}}class xm extends Vm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&fu(n);if(!this._isShallow){const u=Jn(i);if(!Qt(r)&&!Jn(r)&&(i=Ie(i),r=Ie(r)),!o&&yt(i)&&!yt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,yt(e)?e:s);return e===Ie(s)&&(c?Tn(r,i)&&Un(e,"set",n,r):Un(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Cn(n)||!Dm.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",ie(e)?"length":Xr),Reflect.ownKeys(e)}}class yT extends Vm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ET=new xm,TT=new yT,vT=new xm(!0);const wl=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function wT(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Cs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?wl:e?Ls:on;return!e&&mt(i,"iterate",l?vl:Xr),et(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Uo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function IT(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(Tn(s,c)&&mt(o,"get",s),mt(o,"get",c));const{has:l}=Fo(o),u=e?wl:t?Ls:on;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(Ie(s),"iterate",Xr),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(Tn(s,c)&&mt(o,"has",s),mt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),u=e?wl:t?Ls:on;return!t&&mt(l,"iterate",Xr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return et(n,t?{add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear")}:{add(s){const i=Ie(this),o=Fo(i),c=Ie(s),l=!e&&!Qt(s)&&!Jn(s)?c:s;return o.has.call(i,l)||Tn(s,l)&&o.has.call(i,s)||Tn(c,l)&&o.has.call(i,c)||(i.add(l),Un(i,"add",l,l)),this},set(s,i){!e&&!Qt(i)&&!Jn(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=Fo(o);let u=c.call(o,s);u||(s=Ie(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?Tn(i,f)&&Un(o,"set",s,i):Un(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=Fo(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Un(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Un(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=wT(s,t,e)}),n}function Eu(t,e){const n=IT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const AT={get:Eu(!1,!1)},RT={get:Eu(!1,!0)},bT={get:Eu(!0,!1)};const Om=new WeakMap,Lm=new WeakMap,Mm=new WeakMap,ST=new WeakMap;function CT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function PT(t){return t.__v_skip||!Object.isExtensible(t)?0:CT(ZE(t))}function za(t){return Jn(t)?t:Tu(t,!1,ET,AT,Om)}function Fm(t){return Tu(t,!1,vT,RT,Lm)}function Il(t){return Tu(t,!0,TT,bT,Mm)}function Tu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=PT(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Zr(t){return Jn(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function Jn(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function vu(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function NT(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&Em(t,"__v_skip",!0),t}const on=t=>Ce(t)?za(t):t,Ls=t=>Ce(t)?Il(t):t;function yt(t){return t?t.__v_isRef===!0:!1}function Ms(t){return Um(t,!1)}function kT(t){return Um(t,!0)}function Um(t,e){return yt(t)?t:new DT(t,e)}class DT{constructor(e,n){this.dep=new yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:on(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Jn(e);e=r?e:Ie(e),Tn(e,n)&&(this._rawValue=e,this._value=r?e:on(e),this.dep.trigger())}}function $t(t){return yt(t)?t.value:t}const VT={get:(t,e,n)=>e==="__v_raw"?t:$t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bm(t){return Zr(t)?t:new Proxy(t,VT)}class xT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return bm(this,!0),!0}get value(){const e=this.dep.track();return Pm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function OT(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new xT(r,s,n)}const Bo={},da=new WeakMap;let Wr;function LT(t,e=!1,n=Wr){if(n){let r=da.get(n);r||da.set(n,r=[]),r.push(t)}}function MT(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:Qt(H)||s===!1||s===0?Bn(H,1):Bn(H);let f,p,m,_,S=!1,N=!1;if(yt(t)?(p=()=>t.value,S=Qt(t)):Zr(t)?(p=()=>u(t),S=!0):ie(t)?(N=!0,S=t.some(H=>Zr(H)||Qt(H)),p=()=>t.map(H=>{if(yt(H))return H.value;if(Zr(H))return u(H);if(ue(H))return l?l(H,2):H()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Kn();try{m()}finally{Qn()}}const H=Wr;Wr=f;try{return l?l(t,3,[_]):t(_)}finally{Wr=H}}:p=wn,e&&s){const H=p,Z=s===!0?1/0:s;p=()=>Bn(H(),Z)}const D=hT(),B=()=>{f.stop(),D&&D.active&&hu(D.effects,f)};if(i&&e){const H=e;e=(...Z)=>{H(...Z),B()}}let V=N?new Array(t.length).fill(Bo):Bo;const j=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const Z=f.run();if(s||S||(N?Z.some((ee,A)=>Tn(ee,V[A])):Tn(Z,V))){m&&m();const ee=Wr;Wr=f;try{const A=[Z,V===Bo?void 0:N&&V[0]===Bo?[]:V,_];V=Z,l?l(e,3,A):e(...A)}finally{Wr=ee}}}else f.run()};return c&&c(j),f=new Am(p),f.scheduler=o?()=>o(j,!1):j,_=H=>LT(H,!1,f),m=f.onStop=()=>{const H=da.get(f);if(H){if(l)l(H,4);else for(const Z of H)Z();da.delete(f)}},e?r?j(!0):V=f.run():o?o(j.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function Bn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,yt(t))Bn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Bn(t[r],e,n);else if(Js(t)||Cs(t))t.forEach(r=>{Bn(r,e,n)});else if(ym(t)){for(const r in t)Bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ho(t,e,n,r){try{return r?t(...r):t()}catch(s){Ka(s,e,n)}}function an(t,e,n,r){if(ue(t)){const s=ho(t,e,n,r);return s&&gm(s)&&s.catch(i=>{Ka(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function Ka(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Kn(),ho(i,null,10,[t,l,u]),Qn();return}}FT(t,n,s,r,o)}function FT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let pn=-1;const Ps=[];let fr=null,vs=0;const $m=Promise.resolve();let pa=null;function wu(t){const e=pa||$m;return t?e.then(this?t.bind(this):t):e}function UT(t){let e=pn+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=Ki(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Iu(t){if(!(t.flags&1)){const e=Ki(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=Ki(n)?At.push(t):At.splice(UT(e),0,t),t.flags|=1,jm()}}function jm(){pa||(pa=$m.then(Hm))}function BT(t){ie(t)?Ps.push(...t):fr&&t.id===-1?fr.splice(vs+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1),jm()}function Df(t,e,n=pn+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qm(t){if(Ps.length){const e=[...new Set(Ps)].sort((n,r)=>Ki(n)-Ki(r));if(Ps.length=0,fr){fr.push(...e);return}for(fr=e,vs=0;vs<fr.length;vs++){const n=fr[vs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fr=null,vs=0}}const Ki=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hm(t){try{for(pn=0;pn<At.length;pn++){const e=At[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<At.length;pn++){const e=At[pn];e&&(e.flags&=-2)}pn=-1,At.length=0,qm(),pa=null,(At.length||Ps.length)&&Hm()}}let jt=null,Gm=null;function ma(t){const e=jt;return jt=t,Gm=t&&t.type.__scopeId||null,e}function kt(t,e=jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ya(-1);const i=ma(e);let o;try{o=t(...s)}finally{ma(i),r._d&&ya(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function TN(t,e){if(jt===null)return t;const n=ec(jt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=De]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function jr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Kn(),an(l,n,8,[t.el,c,t,e]),Qn())}}function Yo(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function nn(t,e,n=!1){const r=Rg();if(r||Ns){let s=Ns?Ns._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const $T=Symbol.for("v-scx"),jT=()=>nn($T);function Xo(t,e,n){return Wm(t,e,n)}function Wm(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,c=et({},n),l=e&&r||!e&&i!=="post";let u;if(Yi){if(i==="sync"){const _=jT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=wn,_.resume=wn,_.pause=wn,_}}const f=_t;c.call=(_,S,N)=>an(_,f,S,N);let p=!1;i==="post"?c.scheduler=_=>{dt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():Iu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=MT(t,e,c);return Yi&&(u?u.push(m):l&&m()),m}function qT(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?zm(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=po(this),c=Wm(s,i.bind(r),n);return o(),c}function zm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Km=Symbol("_vte"),Qm=t=>t.__isTeleport,Vi=t=>t&&(t.disabled||t.disabled===""),Vf=t=>t&&(t.defer||t.defer===""),xf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Of=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Al=(t,e)=>{const n=t&&t.to;return qe(n)?e?e(n):null:n},Jm={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:p,pbc:m,o:{insert:_,querySelector:S,createText:N,createComment:D}}=u,B=Vi(e.props);let{shapeFlag:V,children:j,dynamicChildren:H}=e;if(t==null){const Z=e.el=N(""),ee=e.anchor=N("");_(Z,n,r),_(ee,n,r);const A=(y,b)=>{V&16&&f(j,y,b,s,i,o,c,l)},E=()=>{const y=e.target=Al(e.props,S),b=Rl(y,e,N,_);y&&(o!=="svg"&&xf(y)?o="svg":o!=="mathml"&&Of(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),B||(A(y,b),Zo(e,!1)))};B&&(A(n,ee),Zo(e,!0)),Vf(e.props)?(e.el.__isMounted=!1,dt(()=>{E(),delete e.el.__isMounted},i)):E()}else{if(Vf(e.props)&&t.el.__isMounted===!1){dt(()=>{Jm.process(t,e,n,r,s,i,o,c,l,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const Z=e.anchor=t.anchor,ee=e.target=t.target,A=e.targetAnchor=t.targetAnchor,E=Vi(t.props),y=E?n:ee,b=E?Z:A;if(o==="svg"||xf(ee)?o="svg":(o==="mathml"||Of(ee))&&(o="mathml"),H?(m(t.dynamicChildren,H,y,s,i,o,c),bu(t,e,!0)):l||p(t,e,y,b,s,i,o,c,!1),B)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):$o(e,n,Z,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Al(e.props,S);R&&$o(e,R,null,u,0)}else E&&$o(e,ee,A,u,1);Zo(e,B)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:p,props:m}=t;if(p&&(s(u),s(f)),i&&s(l),o&16){const _=i||!Vi(m);for(let S=0;S<c.length;S++){const N=c[S];r(N,e,n,_,!!N.dynamicChildren)}}},move:$o,hydrate:HT};function $o(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||Vi(f))&&l&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(c,e,n)}function HT(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},p){function m(D,B){let V=B;for(;V;){if(V&&V.nodeType===8){if(V.data==="teleport start anchor")e.targetStart=V;else if(V.data==="teleport anchor"){e.targetAnchor=V,D._lpa=e.targetAnchor&&o(e.targetAnchor);break}}V=o(V)}}function _(D,B){B.anchor=p(o(D),B,c(D),n,r,s,i)}const S=e.target=Al(e.props,l),N=Vi(e.props);if(S){const D=S._lpa||S.firstChild;e.shapeFlag&16&&(N?(_(t,e),m(S,D),e.targetAnchor||Rl(S,e,f,u,c(t)===S?t:null)):(e.anchor=o(t),m(S,D),e.targetAnchor||Rl(S,e,f,u),p(D&&o(D),e,S,n,r,s,i))),Zo(e,N)}else N&&e.shapeFlag&16&&(_(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const vN=Jm;function Zo(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Rl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Km]=o,t&&(r(i,t,s),r(o,t,s)),o}const mn=Symbol("_leaveCb"),Ti=Symbol("_enterCb");function GT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fo(()=>{t.isMounted=!0}),ig(()=>{t.isUnmounting=!0}),t}const Wt=[Function,Array],Ym={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},Xm=t=>{const e=t.subTree;return e.component?Xm(e.component):e},WT={name:"BaseTransition",props:Ym,setup(t,{slots:e}){const n=Rg(),r=GT();return()=>{const s=e.default&&tg(e.default(),!0);if(!s||!s.length)return;const i=Zm(s),o=Ie(t),{mode:c}=o;if(r.isLeaving)return Kc(i);const l=Lf(i);if(!l)return Kc(i);let u=bl(l,o,r,n,p=>u=p);l.type!==Rt&&Qi(l,u);let f=n.subTree&&Lf(n.subTree);if(f&&f.type!==Rt&&!Kr(f,l)&&Xm(n).type!==Rt){let p=bl(f,o,r,n);if(Qi(f,p),c==="out-in"&&l.type!==Rt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Kc(i);c==="in-out"&&l.type!==Rt?p.delayLeave=(m,_,S)=>{const N=eg(r,f);N[String(f.key)]=f,m[mn]=()=>{_(),m[mn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Zm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Rt){e=n;break}}return e}const zT=WT;function eg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:S,onLeaveCancelled:N,onBeforeAppear:D,onAppear:B,onAfterAppear:V,onAppearCancelled:j}=e,H=String(t.key),Z=eg(n,t),ee=(y,b)=>{y&&an(y,r,9,b)},A=(y,b)=>{const R=b[1];ee(y,b),ie(y)?y.every(I=>I.length<=1)&&R():y.length<=1&&R()},E={mode:o,persisted:c,beforeEnter(y){let b=l;if(!n.isMounted)if(i)b=D||l;else return;y[mn]&&y[mn](!0);const R=Z[H];R&&Kr(t,R)&&R.el[mn]&&R.el[mn](),ee(b,[y])},enter(y){if(Z[H]===t)return;let b=u,R=f,I=p;if(!n.isMounted)if(i)b=B||u,R=V||f,I=j||p;else return;let T=!1;y[Ti]=We=>{T||(T=!0,We?ee(I,[y]):ee(R,[y]),E.delayedLeave&&E.delayedLeave(),y[Ti]=void 0)};const ve=y[Ti].bind(null,!1);b?A(b,[y,ve]):ve()},leave(y,b){const R=String(t.key);if(y[Ti]&&y[Ti](!0),n.isUnmounting)return b();ee(m,[y]);let I=!1;y[mn]=ve=>{I||(I=!0,b(),ve?ee(N,[y]):ee(S,[y]),y[mn]=void 0,Z[R]===t&&delete Z[R])};const T=y[mn].bind(null,!1);Z[R]=t,_?A(_,[y,T]):T()},clone(y){const b=bl(y,e,n,r,s);return s&&s(b),b}};return E}function Kc(t){if(Qa(t))return t=Ar(t),t.children=null,t}function Lf(t){if(!Qa(t))return Qm(t.type)&&t.children?Zm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Qi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ut?(o.patchFlag&128&&s++,r=r.concat(tg(o.children,e,c))):(e||o.type!==Rt)&&r.push(c!=null?Ar(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ng(t,e){return ue(t)?et({name:t.name},e,{setup:t}):t}function rg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ga=new WeakMap;function xi(t,e,n,r,s=!1){if(ie(t)){t.forEach((N,D)=>xi(N,e&&(ie(e)?e[D]:e),n,r,s));return}if(Oi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ec(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===De?c.refs={}:c.refs,p=c.setupState,m=Ie(p),_=p===De?mm:N=>Mf(f,N)?!1:be(m,N),S=(N,D)=>!(D&&Mf(f,D));if(u!=null&&u!==l){if(Ff(e),qe(u))f[u]=null,_(u)&&(p[u]=null);else if(yt(u)){const N=e;S(u,N.k)&&(u.value=null),N.k&&(f[N.k]=null)}}if(ue(l))ho(l,c,12,[o,f]);else{const N=qe(l),D=yt(l);if(N||D){const B=()=>{if(t.f){const V=N?_(l)?p[l]:f[l]:S()||!t.k?l.value:f[t.k];if(s)ie(V)&&hu(V,i);else if(ie(V))V.includes(i)||V.push(i);else if(N)f[l]=[i],_(l)&&(p[l]=f[l]);else{const j=[i];S(l,t.k)&&(l.value=j),t.k&&(f[t.k]=j)}}else N?(f[l]=o,_(l)&&(p[l]=o)):D&&(S(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const V=()=>{B(),ga.delete(t)};V.id=-1,ga.set(t,V),dt(V,n)}else Ff(t),B()}}}function Ff(t){const e=ga.get(t);e&&(e.flags|=8,ga.delete(t))}Ha().requestIdleCallback;Ha().cancelIdleCallback;const Oi=t=>!!t.type.__asyncLoader,Qa=t=>t.type.__isKeepAlive;function KT(t,e){sg(t,"a",e)}function QT(t,e){sg(t,"da",e)}function sg(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ja(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qa(s.parent.vnode)&&JT(r,e,n,s),s=s.parent}}function JT(t,e,n,r){const s=Ja(e,t,r,!0);Ya(()=>{hu(r[e],s)},n)}function Ja(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Kn();const c=po(n),l=an(e,n,t,o);return c(),Qn(),l});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=_t)=>{(!Yi||t==="sp")&&Ja(t,(...r)=>e(...r),n)},YT=nr("bm"),fo=nr("m"),XT=nr("bu"),ZT=nr("u"),ig=nr("bum"),Ya=nr("um"),ev=nr("sp"),tv=nr("rtg"),nv=nr("rtc");function rv(t,e=_t){Ja("ec",t,e)}const sv="components";function og(t,e){return ov(sv,t,!0,e)||t}const iv=Symbol.for("v-ndc");function ov(t,e,n=!0,r=!1){const s=jt||_t;if(s){const i=s.type;{const c=Hv(i,!1);if(c&&(c===e||c===bt(e)||c===ja(bt(e))))return i}const o=Uf(s[t]||i[t],e)||Uf(s.appContext[t],e);return!o&&r?i:o}}function Uf(t,e){return t&&(t[e]||t[bt(e)]||t[ja(bt(e))])}function wN(t,e,n,r){let s;const i=n,o=ie(t);if(o||qe(t)){const c=o&&Zr(t);let l=!1,u=!1;c&&(l=!Qt(t),u=Jn(t),t=Wa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Ls(on(t[f])):on(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Sl=t=>t?bg(t)?ec(t):Sl(t.parent):null,Li=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cg(t),$forceUpdate:t=>t.f||(t.f=()=>{Iu(t.update)}),$nextTick:t=>t.n||(t.n=wu.bind(t.proxy)),$watch:t=>qT.bind(t)}),Qc=(t,e)=>t!==De&&!t.__isScriptSetup&&be(t,e),av={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qc(r,e))return o[e]=1,r[e];if(s!==De&&be(s,e))return o[e]=2,s[e];if(be(i,e))return o[e]=3,i[e];if(n!==De&&be(n,e))return o[e]=4,n[e];Cl&&(o[e]=0)}}const u=Li[e];let f,p;if(u)return e==="$attrs"&&mt(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==De&&be(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,be(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qc(s,e)?(s[e]=n,!0):r!==De&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==De&&c[0]!=="$"&&be(t,c)||Qc(e,c)||be(i,c)||be(r,c)||be(Li,c)||be(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bf(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function cv(t){const e=cg(t),n=t.proxy,r=t.ctx;Cl=!1,e.beforeCreate&&$f(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:N,deactivated:D,beforeDestroy:B,beforeUnmount:V,destroyed:j,unmounted:H,render:Z,renderTracked:ee,renderTriggered:A,errorCaptured:E,serverPrefetch:y,expose:b,inheritAttrs:R,components:I,directives:T,filters:ve}=e;if(u&&lv(u,r,null),o)for(const Ae in o){const Ee=o[Ae];ue(Ee)&&(r[Ae]=Ee.bind(n))}if(s){const Ae=s.call(n,n);Ce(Ae)&&(t.data=za(Ae))}if(Cl=!0,i)for(const Ae in i){const Ee=i[Ae],Pt=ue(Ee)?Ee.bind(n,n):ue(Ee.get)?Ee.get.bind(n,n):wn,un=!ue(Ee)&&ue(Ee.set)?Ee.set.bind(n):wn,Ot=Zt({get:Pt,set:un});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:st=>Ot.value=st})}if(c)for(const Ae in c)ag(c[Ae],r,n,Ae);if(l){const Ae=ue(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(Ee=>{Yo(Ee,Ae[Ee])})}f&&$f(f,t,"c");function Fe(Ae,Ee){ie(Ee)?Ee.forEach(Pt=>Ae(Pt.bind(n))):Ee&&Ae(Ee.bind(n))}if(Fe(YT,p),Fe(fo,m),Fe(XT,_),Fe(ZT,S),Fe(KT,N),Fe(QT,D),Fe(rv,E),Fe(nv,ee),Fe(tv,A),Fe(ig,V),Fe(Ya,H),Fe(ev,y),ie(b))if(b.length){const Ae=t.exposed||(t.exposed={});b.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>n[Ee],set:Pt=>n[Ee]=Pt,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===wn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),T&&(t.directives=T),y&&rg(t)}function lv(t,e,n=wn){ie(t)&&(t=Pl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=nn(s.from||r,s.default,!0):i=nn(s.from||r):i=nn(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $f(t,e,n){an(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ag(t,e,n,r){let s=r.includes(".")?zm(n,r):()=>n[r];if(qe(t)){const i=e[t];ue(i)&&Xo(s,i)}else if(ue(t))Xo(s,t.bind(n));else if(Ce(t))if(ie(t))t.forEach(i=>ag(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Xo(s,i,t)}}function cg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>_a(l,u,o,!0)),_a(l,e,o)),Ce(e)&&i.set(e,l),l}function _a(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_a(t,i,n,!0),s&&s.forEach(o=>_a(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=uv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const uv={data:jf,props:qf,emits:qf,methods:Ri,computed:Ri,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Ri,directives:Ri,watch:fv,provide:jf,inject:hv};function jf(t,e){return e?t?function(){return et(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function hv(t,e){return Ri(Pl(t),Pl(e))}function Pl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?et(Object.create(null),t,e):e}function qf(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:et(Object.create(null),Bf(t),Bf(e??{})):e}function fv(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function lg(){return{app:null,config:{isNativeTag:mm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dv=0;function pv(t,e){return function(r,s=null){ue(r)||(r=et({},r)),s!=null&&!Ce(s)&&(s=null);const i=lg(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:dv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(u,...p)):ue(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||ke(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,ec(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(an(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Ns;Ns=u;try{return f()}finally{Ns=p}}};return u}}let Ns=null;const mv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${Dr(e)}Modifiers`];function gv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&mv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>qe(f)?f.trim():f)),o.number&&(s=n.map(qa)));let c,l=r[c=qc(e)]||r[c=qc(bt(e))];!l&&i&&(l=r[c=qc(Dr(e))]),l&&an(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,an(u,t,6,s)}}const _v=new WeakMap;function ug(t,e,n=!1){const r=n?_v:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=u=>{const f=ug(u,e,!0);f&&(c=!0,et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ce(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):et(o,i),Ce(t)&&r.set(t,o),o)}function Xa(t,e){return!t||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Dr(e))||be(t,e))}function Hf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:S,inheritAttrs:N}=t,D=ma(t);let B,V;try{if(n.shapeFlag&4){const H=s||r,Z=H;B=En(u.call(Z,H,f,p,_,m,S)),V=c}else{const H=e;B=En(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),V=e.props?c:yv(c)}}catch(H){Mi.length=0,Ka(H,t,1),B=ke(Rt)}let j=B;if(V&&N!==!1){const H=Object.keys(V),{shapeFlag:Z}=j;H.length&&Z&7&&(i&&H.some(uu)&&(V=Ev(V,i)),j=Ar(j,V,!1,!0))}return n.dirs&&(j=Ar(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Qi(j,n.transition),B=j,ma(D),B}const yv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ba(n))&&((e||(e={}))[n]=t[n]);return e},Ev=(t,e)=>{const n={};for(const r in t)(!uu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Tv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Gf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(hg(o,r,m)&&!Xa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Gf(r,o,u):!0:!!o;return!1}function Gf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(hg(e,t,i)&&!Xa(n,i))return!0}return!1}function hg(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ce(r)&&Ce(s)?!Ys(r,s):r!==s}function vv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const fg={},dg=()=>Object.create(fg),pg=t=>Object.getPrototypeOf(t)===fg;function wv(t,e,n,r=!1){const s={},i=dg();t.propsDefaults=Object.create(null),mg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Iv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Xa(t.emitsOptions,m))continue;const _=e[m];if(l)if(be(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=bt(m);s[S]=Nl(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{mg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!be(e,p)&&((f=Dr(p))===p||!be(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Nl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&Un(t.attrs,"set","")}function mg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ni(l))continue;const u=e[l];let f;s&&be(s,f=bt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Nl(s,l,p,u[p],t,!be(u,p))}}return o}function Nl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=po(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Dr(n))&&(r=!0))}return r}const Av=new WeakMap;function gg(t,e,n=!1){const r=n?Av:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[m,_]=gg(p,e,!0);et(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ce(t)&&r.set(t,Ss),Ss;if(ie(i))for(let f=0;f<i.length;f++){const p=bt(i[f]);Wf(p)&&(o[p]=De)}else if(i)for(const f in i){const p=bt(f);if(Wf(p)){const m=i[f],_=o[p]=ie(m)||ue(m)?{type:m}:et({},m),S=_.type;let N=!1,D=!0;if(ie(S))for(let B=0;B<S.length;++B){const V=S[B],j=ue(V)&&V.name;if(j==="Boolean"){N=!0;break}else j==="String"&&(D=!1)}else N=ue(S)&&S.name==="Boolean";_[0]=N,_[1]=D,(N||be(_,"default"))&&c.push(p)}}const u=[o,c];return Ce(t)&&r.set(t,u),u}function Wf(t){return t[0]!=="$"&&!Ni(t)}const Au=t=>t==="_"||t==="_ctx"||t==="$stable",Ru=t=>ie(t)?t.map(En):[En(t)],Rv=(t,e,n)=>{if(e._n)return e;const r=kt((...s)=>Ru(e(...s)),n);return r._c=!1,r},_g=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Au(s))continue;const i=t[s];if(ue(i))e[s]=Rv(s,i,r);else if(i!=null){const o=Ru(i);e[s]=()=>o}}},yg=(t,e)=>{const n=Ru(e);t.slots.default=()=>n},Eg=(t,e,n)=>{for(const r in e)(n||!Au(r))&&(t[r]=e[r])},bv=(t,e,n)=>{const r=t.slots=dg();if(t.vnode.shapeFlag&32){const s=e._;s?(Eg(r,e,n),n&&Em(r,"_",s,!0)):_g(e,r)}else e&&yg(t,e)},Sv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Eg(s,e,n):(i=!e.$stable,_g(e,s)),o=e}else e&&(yg(t,e),o={default:1});if(i)for(const c in s)!Au(c)&&o[c]==null&&delete s[c]},dt=Dv;function Cv(t){return Pv(t)}function Pv(t,e){const n=Ha();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=wn,insertStaticContent:S}=t,N=(v,w,C,O=null,U=null,L=null,z=void 0,G=null,q=!!w.dynamicChildren)=>{if(v===w)return;v&&!Kr(v,w)&&(O=M(v),st(v,U,L,!0),v=null),w.patchFlag===-2&&(q=!1,w.dynamicChildren=null);const{type:$,ref:se,shapeFlag:J}=w;switch($){case Za:D(v,w,C,O);break;case Rt:B(v,w,C,O);break;case ea:v==null&&V(w,C,O,z);break;case Ut:I(v,w,C,O,U,L,z,G,q);break;default:J&1?Z(v,w,C,O,U,L,z,G,q):J&6?T(v,w,C,O,U,L,z,G,q):(J&64||J&128)&&$.process(v,w,C,O,U,L,z,G,q,te)}se!=null&&U?xi(se,v&&v.ref,L,w||v,!w):se==null&&v&&v.ref!=null&&xi(v.ref,null,L,v,!0)},D=(v,w,C,O)=>{if(v==null)r(w.el=c(w.children),C,O);else{const U=w.el=v.el;w.children!==v.children&&u(U,w.children)}},B=(v,w,C,O)=>{v==null?r(w.el=l(w.children||""),C,O):w.el=v.el},V=(v,w,C,O)=>{[v.el,v.anchor]=S(v.children,w,C,O,v.el,v.anchor)},j=({el:v,anchor:w},C,O)=>{let U;for(;v&&v!==w;)U=m(v),r(v,C,O),v=U;r(w,C,O)},H=({el:v,anchor:w})=>{let C;for(;v&&v!==w;)C=m(v),s(v),v=C;s(w)},Z=(v,w,C,O,U,L,z,G,q)=>{if(w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),v==null)ee(w,C,O,U,L,z,G,q);else{const $=v.el&&v.el._isVueCE?v.el:null;try{$&&$._beginPatch(),y(v,w,U,L,z,G,q)}finally{$&&$._endPatch()}}},ee=(v,w,C,O,U,L,z,G)=>{let q,$;const{props:se,shapeFlag:J,transition:ne,dirs:oe}=v;if(q=v.el=o(v.type,L,se&&se.is,se),J&8?f(q,v.children):J&16&&E(v.children,q,null,O,U,Jc(v,L),z,G),oe&&jr(v,null,O,"created"),A(q,v,v.scopeId,z,O),se){for(const Pe in se)Pe!=="value"&&!Ni(Pe)&&i(q,Pe,null,se[Pe],L,O);"value"in se&&i(q,"value",null,se.value,L),($=se.onVnodeBeforeMount)&&dn($,O,v)}oe&&jr(v,null,O,"beforeMount");const de=Nv(U,ne);de&&ne.beforeEnter(q),r(q,w,C),(($=se&&se.onVnodeMounted)||de||oe)&&dt(()=>{$&&dn($,O,v),de&&ne.enter(q),oe&&jr(v,null,O,"mounted")},U)},A=(v,w,C,O,U)=>{if(C&&_(v,C),O)for(let L=0;L<O.length;L++)_(v,O[L]);if(U){let L=U.subTree;if(w===L||wg(L.type)&&(L.ssContent===w||L.ssFallback===w)){const z=U.vnode;A(v,z,z.scopeId,z.slotScopeIds,U.parent)}}},E=(v,w,C,O,U,L,z,G,q=0)=>{for(let $=q;$<v.length;$++){const se=v[$]=G?Fn(v[$]):En(v[$]);N(null,se,w,C,O,U,L,z,G)}},y=(v,w,C,O,U,L,z)=>{const G=w.el=v.el;let{patchFlag:q,dynamicChildren:$,dirs:se}=w;q|=v.patchFlag&16;const J=v.props||De,ne=w.props||De;let oe;if(C&&qr(C,!1),(oe=ne.onVnodeBeforeUpdate)&&dn(oe,C,w,v),se&&jr(w,v,C,"beforeUpdate"),C&&qr(C,!0),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&f(G,""),$?b(v.dynamicChildren,$,G,C,O,Jc(w,U),L):z||Ee(v,w,G,null,C,O,Jc(w,U),L,!1),q>0){if(q&16)R(G,J,ne,C,U);else if(q&2&&J.class!==ne.class&&i(G,"class",null,ne.class,U),q&4&&i(G,"style",J.style,ne.style,U),q&8){const de=w.dynamicProps;for(let Pe=0;Pe<de.length;Pe++){const we=de[Pe],ut=J[we],ht=ne[we];(ht!==ut||we==="value")&&i(G,we,ut,ht,U,C)}}q&1&&v.children!==w.children&&f(G,w.children)}else!z&&$==null&&R(G,J,ne,C,U);((oe=ne.onVnodeUpdated)||se)&&dt(()=>{oe&&dn(oe,C,w,v),se&&jr(w,v,C,"updated")},O)},b=(v,w,C,O,U,L,z)=>{for(let G=0;G<w.length;G++){const q=v[G],$=w[G],se=q.el&&(q.type===Ut||!Kr(q,$)||q.shapeFlag&198)?p(q.el):C;N(q,$,se,null,O,U,L,z,!0)}},R=(v,w,C,O,U)=>{if(w!==C){if(w!==De)for(const L in w)!Ni(L)&&!(L in C)&&i(v,L,w[L],null,U,O);for(const L in C){if(Ni(L))continue;const z=C[L],G=w[L];z!==G&&L!=="value"&&i(v,L,G,z,U,O)}"value"in C&&i(v,"value",w.value,C.value,U)}},I=(v,w,C,O,U,L,z,G,q)=>{const $=w.el=v?v.el:c(""),se=w.anchor=v?v.anchor:c("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:oe}=w;oe&&(G=G?G.concat(oe):oe),v==null?(r($,C,O),r(se,C,O),E(w.children||[],C,se,U,L,z,G,q)):J>0&&J&64&&ne&&v.dynamicChildren&&v.dynamicChildren.length===ne.length?(b(v.dynamicChildren,ne,C,U,L,z,G),(w.key!=null||U&&w===U.subTree)&&bu(v,w,!0)):Ee(v,w,C,se,U,L,z,G,q)},T=(v,w,C,O,U,L,z,G,q)=>{w.slotScopeIds=G,v==null?w.shapeFlag&512?U.ctx.activate(w,C,O,z,q):ve(w,C,O,U,L,z,q):We(v,w,q)},ve=(v,w,C,O,U,L,z)=>{const G=v.component=Uv(v,O,U);if(Qa(v)&&(G.ctx.renderer=te),Bv(G,!1,z),G.asyncDep){if(U&&U.registerDep(G,Fe,z),!v.el){const q=G.subTree=ke(Rt);B(null,q,w,C),v.placeholder=q.el}}else Fe(G,v,w,C,U,L,z)},We=(v,w,C)=>{const O=w.component=v.component;if(Tv(v,w,C))if(O.asyncDep&&!O.asyncResolved){Ae(O,w,C);return}else O.next=w,O.update();else w.el=v.el,O.vnode=w},Fe=(v,w,C,O,U,L,z)=>{const G=()=>{if(v.isMounted){let{next:J,bu:ne,u:oe,parent:de,vnode:Pe}=v;{const Mt=Tg(v);if(Mt){J&&(J.el=Pe.el,Ae(v,J,z)),Mt.asyncDep.then(()=>{dt(()=>{v.isUnmounted||$()},U)});return}}let we=J,ut;qr(v,!1),J?(J.el=Pe.el,Ae(v,J,z)):J=Pe,ne&&Jo(ne),(ut=J.props&&J.props.onVnodeBeforeUpdate)&&dn(ut,de,J,Pe),qr(v,!0);const ht=Hf(v),Lt=v.subTree;v.subTree=ht,N(Lt,ht,p(Lt.el),M(Lt),v,U,L),J.el=ht.el,we===null&&vv(v,ht.el),oe&&dt(oe,U),(ut=J.props&&J.props.onVnodeUpdated)&&dt(()=>dn(ut,de,J,Pe),U)}else{let J;const{el:ne,props:oe}=w,{bm:de,m:Pe,parent:we,root:ut,type:ht}=v,Lt=Oi(w);qr(v,!1),de&&Jo(de),!Lt&&(J=oe&&oe.onVnodeBeforeMount)&&dn(J,we,w),qr(v,!0);{ut.ce&&ut.ce._hasShadowRoot()&&ut.ce._injectChildStyle(ht,v.parent?v.parent.type:void 0);const Mt=v.subTree=Hf(v);N(null,Mt,C,O,v,U,L),w.el=Mt.el}if(Pe&&dt(Pe,U),!Lt&&(J=oe&&oe.onVnodeMounted)){const Mt=w;dt(()=>dn(J,we,Mt),U)}(w.shapeFlag&256||we&&Oi(we.vnode)&&we.vnode.shapeFlag&256)&&v.a&&dt(v.a,U),v.isMounted=!0,w=C=O=null}};v.scope.on();const q=v.effect=new Am(G);v.scope.off();const $=v.update=q.run.bind(q),se=v.job=q.runIfDirty.bind(q);se.i=v,se.id=v.uid,q.scheduler=()=>Iu(se),qr(v,!0),$()},Ae=(v,w,C)=>{w.component=v;const O=v.vnode.props;v.vnode=w,v.next=null,Iv(v,w.props,O,C),Sv(v,w.children,C),Kn(),Df(v),Qn()},Ee=(v,w,C,O,U,L,z,G,q=!1)=>{const $=v&&v.children,se=v?v.shapeFlag:0,J=w.children,{patchFlag:ne,shapeFlag:oe}=w;if(ne>0){if(ne&128){un($,J,C,O,U,L,z,G,q);return}else if(ne&256){Pt($,J,C,O,U,L,z,G,q);return}}oe&8?(se&16&&lt($,U,L),J!==$&&f(C,J)):se&16?oe&16?un($,J,C,O,U,L,z,G,q):lt($,U,L,!0):(se&8&&f(C,""),oe&16&&E(J,C,O,U,L,z,G,q))},Pt=(v,w,C,O,U,L,z,G,q)=>{v=v||Ss,w=w||Ss;const $=v.length,se=w.length,J=Math.min($,se);let ne;for(ne=0;ne<J;ne++){const oe=w[ne]=q?Fn(w[ne]):En(w[ne]);N(v[ne],oe,C,null,U,L,z,G,q)}$>se?lt(v,U,L,!0,!1,J):E(w,C,O,U,L,z,G,q,J)},un=(v,w,C,O,U,L,z,G,q)=>{let $=0;const se=w.length;let J=v.length-1,ne=se-1;for(;$<=J&&$<=ne;){const oe=v[$],de=w[$]=q?Fn(w[$]):En(w[$]);if(Kr(oe,de))N(oe,de,C,null,U,L,z,G,q);else break;$++}for(;$<=J&&$<=ne;){const oe=v[J],de=w[ne]=q?Fn(w[ne]):En(w[ne]);if(Kr(oe,de))N(oe,de,C,null,U,L,z,G,q);else break;J--,ne--}if($>J){if($<=ne){const oe=ne+1,de=oe<se?w[oe].el:O;for(;$<=ne;)N(null,w[$]=q?Fn(w[$]):En(w[$]),C,de,U,L,z,G,q),$++}}else if($>ne)for(;$<=J;)st(v[$],U,L,!0),$++;else{const oe=$,de=$,Pe=new Map;for($=de;$<=ne;$++){const it=w[$]=q?Fn(w[$]):En(w[$]);it.key!=null&&Pe.set(it.key,$)}let we,ut=0;const ht=ne-de+1;let Lt=!1,Mt=0;const Xt=new Array(ht);for($=0;$<ht;$++)Xt[$]=0;for($=oe;$<=J;$++){const it=v[$];if(ut>=ht){st(it,U,L,!0);continue}let tt;if(it.key!=null)tt=Pe.get(it.key);else for(we=de;we<=ne;we++)if(Xt[we-de]===0&&Kr(it,w[we])){tt=we;break}tt===void 0?st(it,U,L,!0):(Xt[tt-de]=$+1,tt>=Mt?Mt=tt:Lt=!0,N(it,w[tt],C,null,U,L,z,G,q),ut++)}const gs=Lt?kv(Xt):Ss;for(we=gs.length-1,$=ht-1;$>=0;$--){const it=de+$,tt=w[it],si=w[it+1],Mr=it+1<se?si.el||vg(si):O;Xt[$]===0?N(null,tt,C,Mr,U,L,z,G,q):Lt&&(we<0||$!==gs[we]?Ot(tt,C,Mr,2):we--)}}},Ot=(v,w,C,O,U=null)=>{const{el:L,type:z,transition:G,children:q,shapeFlag:$}=v;if($&6){Ot(v.component.subTree,w,C,O);return}if($&128){v.suspense.move(w,C,O);return}if($&64){z.move(v,w,C,te);return}if(z===Ut){r(L,w,C);for(let J=0;J<q.length;J++)Ot(q[J],w,C,O);r(v.anchor,w,C);return}if(z===ea){j(v,w,C);return}if(O!==2&&$&1&&G)if(O===0)G.beforeEnter(L),r(L,w,C),dt(()=>G.enter(L),U);else{const{leave:J,delayLeave:ne,afterLeave:oe}=G,de=()=>{v.ctx.isUnmounted?s(L):r(L,w,C)},Pe=()=>{L._isLeaving&&L[mn](!0),J(L,()=>{de(),oe&&oe()})};ne?ne(L,de,Pe):Pe()}else r(L,w,C)},st=(v,w,C,O=!1,U=!1)=>{const{type:L,props:z,ref:G,children:q,dynamicChildren:$,shapeFlag:se,patchFlag:J,dirs:ne,cacheIndex:oe}=v;if(J===-2&&(U=!1),G!=null&&(Kn(),xi(G,null,C,v,!0),Qn()),oe!=null&&(w.renderCache[oe]=void 0),se&256){w.ctx.deactivate(v);return}const de=se&1&&ne,Pe=!Oi(v);let we;if(Pe&&(we=z&&z.onVnodeBeforeUnmount)&&dn(we,w,v),se&6)Yt(v.component,C,O);else{if(se&128){v.suspense.unmount(C,O);return}de&&jr(v,null,w,"beforeUnmount"),se&64?v.type.remove(v,w,C,te,O):$&&!$.hasOnce&&(L!==Ut||J>0&&J&64)?lt($,w,C,!1,!0):(L===Ut&&J&384||!U&&se&16)&&lt(q,w,C),O&&Vn(v)}(Pe&&(we=z&&z.onVnodeUnmounted)||de)&&dt(()=>{we&&dn(we,w,v),de&&jr(v,null,w,"unmounted")},C)},Vn=v=>{const{type:w,el:C,anchor:O,transition:U}=v;if(w===Ut){Jt(C,O);return}if(w===ea){H(v);return}const L=()=>{s(C),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:z,delayLeave:G}=U,q=()=>z(C,L);G?G(v.el,L,q):q()}else L()},Jt=(v,w)=>{let C;for(;v!==w;)C=m(v),s(v),v=C;s(w)},Yt=(v,w,C)=>{const{bum:O,scope:U,job:L,subTree:z,um:G,m:q,a:$}=v;zf(q),zf($),O&&Jo(O),U.stop(),L&&(L.flags|=8,st(z,v,w,C)),G&&dt(G,w),dt(()=>{v.isUnmounted=!0},w)},lt=(v,w,C,O=!1,U=!1,L=0)=>{for(let z=L;z<v.length;z++)st(v[z],w,C,O,U)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=m(v.anchor||v.el),C=w&&w[Km];return C?m(C):w};let Y=!1;const Q=(v,w,C)=>{let O;v==null?w._vnode&&(st(w._vnode,null,null,!0),O=w._vnode.component):N(w._vnode||null,v,w,null,null,null,C),w._vnode=v,Y||(Y=!0,Df(O),qm(),Y=!1)},te={p:N,um:st,m:Ot,r:Vn,mt:ve,mc:E,pc:Ee,pbc:b,n:M,o:t};return{render:Q,hydrate:void 0,createApp:pv(Q)}}function Jc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Nv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bu(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Fn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&bu(o,c)),c.type===Za&&(c.patchFlag===-1&&(c=s[i]=Fn(c)),c.el=o.el),c.type===Rt&&!c.el&&(c.el=o.el)}}function kv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tg(e)}function zf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function vg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?vg(e.subTree):null}const wg=t=>t.__isSuspense;function Dv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):BT(t)}const Ut=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),Mi=[];let qt=null;function Bt(t=!1){Mi.push(qt=t?null:[])}function Vv(){Mi.pop(),qt=Mi[Mi.length-1]||null}let Ji=1;function ya(t,e=!1){Ji+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function Ig(t){return t.dynamicChildren=Ji>0?qt||Ss:null,Vv(),Ji>0&&qt&&qt.push(t),t}function qn(t,e,n,r,s,i){return Ig(pe(t,e,n,r,s,i,!0))}function Ea(t,e,n,r,s){return Ig(ke(t,e,n,r,s,!0))}function Ta(t){return t?t.__v_isVNode===!0:!1}function Kr(t,e){return t.type===e.type&&t.key===e.key}const Ag=({key:t})=>t??null,ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||yt(t)||ue(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function pe(t,e=null,n=null,r=0,s=null,i=t===Ut?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ag(e),ref:e&&ta(e),scopeId:Gm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return c?(Su(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),Ji>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const ke=xv;function xv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iv)&&(t=Rt),Ta(t)){const c=Ar(t,e,!0);return n&&Su(c,n),Ji>0&&!i&&qt&&(c.shapeFlag&6?qt[qt.indexOf(t)]=c:qt.push(c)),c.patchFlag=-2,c}if(Gv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=Ga(c)),Ce(l)&&(vu(l)&&!ie(l)&&(l=et({},l)),e.style=du(l))}const o=qe(t)?1:wg(t)?128:Qm(t)?64:Ce(t)?4:ue(t)?2:0;return pe(t,e,n,r,s,o,i,!0)}function Ov(t){return t?vu(t)||pg(t)?et({},t):t:null}function Ar(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Lv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ag(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(ta(e)):[i,ta(e)]:ta(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Qi(f,l.clone(f)),f}function yn(t=" ",e=0){return ke(Za,null,t,e)}function IN(t,e){const n=ke(ea,null,t);return n.staticCount=e,n}function Fs(t="",e=!1){return e?(Bt(),Ea(Rt,null,t)):ke(Rt,null,t)}function En(t){return t==null||typeof t=="boolean"?ke(Rt):ie(t)?ke(Ut,null,t.slice()):Ta(t)?Fn(t):ke(Za,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function Su(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Su(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pg(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),r&64?(n=16,e=[yn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ga([e.class,r.class]));else if(s==="style")e.style=du([e.style,r.style]);else if(Ba(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){an(t,e,7,[n,r])}const Mv=lg();let Fv=0;function Uv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mv,i={uid:Fv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gg(r,s),emitsOptions:ug(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gv.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const Rg=()=>_t||jt;let va,kl;{const t=Ha(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};va=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),kl=e("__VUE_SSR_SETTERS__",n=>Yi=n)}const po=t=>{const e=_t;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Kf=()=>{_t&&_t.scope.off(),va(null)};function bg(t){return t.vnode.shapeFlag&4}let Yi=!1;function Bv(t,e=!1,n=!1){e&&kl(e);const{props:r,children:s}=t.vnode,i=bg(t);wv(t,r,i,e),bv(t,s,n||e);const o=i?$v(t,e):void 0;return e&&kl(!1),o}function $v(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,av);const{setup:r}=n;if(r){Kn();const s=t.setupContext=r.length>1?qv(t):null,i=po(t),o=ho(r,t,0,[t.props,s]),c=gm(o);if(Qn(),i(),(c||t.sp)&&!Oi(t)&&rg(t),c){if(o.then(Kf,Kf),e)return o.then(l=>{Qf(t,l)}).catch(l=>{Ka(l,t,0)});t.asyncDep=o}else Qf(t,o)}else Sg(t)}function Qf(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Bm(e)),Sg(t)}function Sg(t,e,n){const r=t.type;t.render||(t.render=r.render||wn);{const s=po(t);Kn();try{cv(t)}finally{Qn(),s()}}}const jv={get(t,e){return mt(t,"get",""),t[e]}};function qv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,jv),slots:t.slots,emit:t.emit,expose:e}}function ec(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bm(NT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Li)return Li[n](t)},has(e,n){return n in e||n in Li}})):t.proxy}function Hv(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Gv(t){return ue(t)&&"__vccOpts"in t}const Zt=(t,e)=>OT(t,e,Yi);function Cu(t,e,n){try{ya(-1);const r=arguments.length;return r===2?Ce(e)&&!ie(e)?Ta(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ta(n)&&(n=[n]),ke(t,e,n))}finally{ya(1)}}const Wv="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dl;const Jf=typeof window<"u"&&window.trustedTypes;if(Jf)try{Dl=Jf.createPolicy("vue",{createHTML:t=>t})}catch{}const Cg=Dl?t=>Dl.createHTML(t):t=>t,zv="http://www.w3.org/2000/svg",Kv="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,Yf=Mn&&Mn.createElement("template"),Qv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Mn.createElementNS(zv,t):e==="mathml"?Mn.createElementNS(Kv,t):n?Mn.createElement(t,{is:n}):Mn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yf.innerHTML=Cg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Yf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lr="transition",vi="animation",Xi=Symbol("_vtc"),Pg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Jv=et({},Ym,Pg),Yv=t=>(t.displayName="Transition",t.props=Jv,t),Xv=Yv((t,{slots:e})=>Cu(zT,Zv(t),e)),Hr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xf=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Zv(t){const e={};for(const I in t)I in Pg||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=ew(s),N=S&&S[0],D=S&&S[1],{onBeforeEnter:B,onEnter:V,onEnterCancelled:j,onLeave:H,onLeaveCancelled:Z,onBeforeAppear:ee=B,onAppear:A=V,onAppearCancelled:E=j}=e,y=(I,T,ve,We)=>{I._enterCancelled=We,Gr(I,T?f:c),Gr(I,T?u:o),ve&&ve()},b=(I,T)=>{I._isLeaving=!1,Gr(I,p),Gr(I,_),Gr(I,m),T&&T()},R=I=>(T,ve)=>{const We=I?A:V,Fe=()=>y(T,I,ve);Hr(We,[T,Fe]),Zf(()=>{Gr(T,I?l:i),On(T,I?f:c),Xf(We)||ed(T,r,N,Fe)})};return et(e,{onBeforeEnter(I){Hr(B,[I]),On(I,i),On(I,o)},onBeforeAppear(I){Hr(ee,[I]),On(I,l),On(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,T){I._isLeaving=!0;const ve=()=>b(I,T);On(I,p),I._enterCancelled?(On(I,m),rd(I)):(rd(I),On(I,m)),Zf(()=>{I._isLeaving&&(Gr(I,p),On(I,_),Xf(H)||ed(I,r,D,ve))}),Hr(H,[I,ve])},onEnterCancelled(I){y(I,!1,void 0,!0),Hr(j,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),Hr(E,[I])},onLeaveCancelled(I){b(I),Hr(Z,[I])}})}function ew(t){if(t==null)return null;if(Ce(t))return[Yc(t.enter),Yc(t.leave)];{const e=Yc(t);return[e,e]}}function Yc(t){return nT(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xi]||(t[Xi]=new Set)).add(e)}function Gr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Xi];n&&(n.delete(e),n.size||(t[Xi]=void 0))}function Zf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let tw=0;function ed(t,e,n,r){const s=t._endId=++tw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=nw(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function nw(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${lr}Delay`),i=r(`${lr}Duration`),o=td(s,i),c=r(`${vi}Delay`),l=r(`${vi}Duration`),u=td(c,l);let f=null,p=0,m=0;e===lr?o>0&&(f=lr,p=o,m=i.length):e===vi?u>0&&(f=vi,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?lr:vi:null,m=f?f===lr?i.length:l.length:0);const _=f===lr&&/\b(?:transform|all)(?:,|$)/.test(r(`${lr}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:_}}function td(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>nd(n)+nd(t[r])))}function nd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function rd(t){return(t?t.ownerDocument:document).body.offsetHeight}function rw(t,e,n){const r=t[Xi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sd=Symbol("_vod"),sw=Symbol("_vsh"),iw=Symbol(""),ow=/(?:^|;)\s*display\s*:/;function aw(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&na(r,c,"")}else for(const o in e)n[o]==null&&na(r,o,"");for(const o in n)o==="display"&&(i=!0),na(r,o,n[o])}else if(s){if(e!==n){const o=r[iw];o&&(n+=";"+o),r.cssText=n,i=ow.test(n)}}else e&&t.removeAttribute("style");sd in t&&(t[sd]=i?r.display:"",t[sw]&&(r.display="none"))}const id=/\s*!important$/;function na(t,e,n){if(ie(n))n.forEach(r=>na(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cw(t,e);id.test(n)?t.setProperty(Dr(r),n.replace(id,""),"important"):t[r]=n}}const od=["Webkit","Moz","ms"],Xc={};function cw(t,e){const n=Xc[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return Xc[e]=r;r=ja(r);for(let s=0;s<od.length;s++){const i=od[s]+r;if(i in t)return Xc[e]=i}return e}const ad="http://www.w3.org/1999/xlink";function cd(t,e,n,r,s,i=cT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ad,e.slice(6,e.length)):t.setAttributeNS(ad,e,n):n==null||i&&!Tm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function ld(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Tm(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function pr(t,e,n,r){t.addEventListener(e,n,r)}function lw(t,e,n,r){t.removeEventListener(e,n,r)}const ud=Symbol("_vei");function uw(t,e,n,r,s=null){const i=t[ud]||(t[ud]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=hw(e);if(r){const u=i[e]=pw(r,s);pr(t,c,u,l)}else o&&(lw(t,c,o,l),i[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function hw(t){let e;if(hd.test(t)){e={};let r;for(;r=t.match(hd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let Zc=0;const fw=Promise.resolve(),dw=()=>Zc||(fw.then(()=>Zc=0),Zc=Date.now());function pw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;an(mw(r,n.value),e,5,[r])};return n.value=t,n.attached=dw(),n}function mw(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const fd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?rw(t,r,o):e==="style"?aw(t,n,r):Ba(e)?uu(e)||uw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_w(t,e,r,o))?(ld(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&cd(t,e,r,o,i,e!=="value")):t._isVueCE&&(yw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!qe(r)))?ld(t,bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),cd(t,e,r,o))};function _w(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&fd(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fd(e)&&qe(n)?!1:e in t}function yw(t,e){const n=t._def.props;if(!n)return!1;const r=bt(e);return Array.isArray(n)?n.some(s=>bt(s)===r):Object.keys(n).some(s=>bt(s)===r)}const Us=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Jo(e,n):e};function Ew(t){t.target.composing=!0}function dd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wn=Symbol("_assign");function pd(t,e,n){return e&&(t=t.trim()),n&&(t=qa(t)),t}const AN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wn]=Us(s);const i=r||s.props&&s.props.type==="number";pr(t,e?"change":"input",o=>{o.target.composing||t[Wn](pd(t.value,n,i))}),(n||i)&&pr(t,"change",()=>{t.value=pd(t.value,n,i)}),e||(pr(t,"compositionstart",Ew),pr(t,"compositionend",dd),pr(t,"change",dd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Wn]=Us(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?qa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},RN={deep:!0,created(t,e,n){t[Wn]=Us(n),pr(t,"change",()=>{const r=t._modelValue,s=Zi(t),i=t.checked,o=t[Wn];if(ie(r)){const c=pu(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Js(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Ng(t,i))})},mounted:md,beforeUpdate(t,e,n){t[Wn]=Us(n),md(t,e,n)}};function md(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=pu(e,r.props.value)>-1;else if(Js(e))s=e.has(r.props.value);else{if(e===n)return;s=Ys(e,Ng(t,!0))}t.checked!==s&&(t.checked=s)}const bN={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Js(e);pr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qa(Zi(o)):Zi(o));t[Wn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,wu(()=>{t._assigning=!1})}),t[Wn]=Us(r)},mounted(t,{value:e}){gd(t,e)},beforeUpdate(t,e,n){t[Wn]=Us(n)},updated(t,{value:e}){t._assigning||gd(t,e)}};function gd(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!Js(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Zi(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=pu(e,c)>-1}else o.selected=e.has(c);else if(Ys(Zi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Zi(t){return"_value"in t?t._value:t.value}function Ng(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tw=["ctrl","shift","alt","meta"],vw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tw.some(n=>t[`${n}Key`]&&!e.includes(n))},SN=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=vw[e[o]];if(c&&c(s,e))return}return t(s,...i)})},ww={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},CN=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Dr(s.key);if(e.some(o=>o===i||ww[o]===i))return t(s)})},Iw=et({patchProp:gw},Qv);let _d;function Aw(){return _d||(_d=Cv(Iw))}const Rw=(...t)=>{const e=Aw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Sw(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,bw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Sw(t){return qe(t)?document.querySelector(t):t}const Cw=()=>{};var yd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Nw;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kw=function(t){const e=kg(t);return Dg.encodeByteArray(e,!0)},wa=function(t){return kw(t).replace(/\./g,"")},Vg=function(t){try{return Dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vw=()=>Dw().__FIREBASE_DEFAULTS__,xw=()=>{if(typeof process>"u"||typeof yd>"u")return;const t=yd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ow=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vg(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return Cw()||Vw()||xw()||Ow()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xg=t=>{var e,n;return(n=(e=tc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Og=t=>{const e=xg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lg=()=>{var t;return(t=tc())==null?void 0:t.config},Mg=t=>{var e;return(e=tc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Fg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),""].join(".")}const Fi={};function Mw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fi))Fi[e]?t.emulator.push(e):t.prod.push(e);return t}function Fw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ed=!1;function Nu(t,e){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||Fi[t]===e||Fi[t]||Ed)return;Fi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Mw().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ed=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Fw(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),B=n("preprendIcon"),V=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;c(j),f(D,N);const H=u();l(V,B),j.append(V,S,D,H),document.body.appendChild(j)}i?(S.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function Bw(){var e;const t=(e=tc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $w(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hw(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gw(){return!Bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function zw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kw,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,c,r)}}function Qw(t,e){return t.replace(Jw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jw=/\{\$([^}]+)}/g;function Yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Td(i)&&Td(o)){if(!Yn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Td(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xw(t,e){const n=new Zw(t,e);return n.subscribe.bind(n)}class Zw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=el),s.error===void 0&&(s.error=el),s.complete===void 0&&(s.complete=el);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function el(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class tI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rI(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(t){return t===zr?void 0:t}function rI(t){return t.instantiationMode==="EAGER"}/**
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
 */class sI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const iI={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},oI=ge.INFO,aI={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},cI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=oI,this._logHandler=cI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const lI=(t,e)=>e.some(n=>t instanceof n);let vd,wd;function uI(){return vd||(vd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hI(){return wd||(wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ug=new WeakMap,Vl=new WeakMap,Bg=new WeakMap,tl=new WeakMap,Du=new WeakMap;function fI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ug.set(n,t)}).catch(()=>{}),Du.set(e,t),e}function dI(t){if(Vl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vl.set(t,e)}let xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pI(t){xl=t(xl)}function mI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nl(this),e,...n);return Bg.set(r,e.sort?e.sort():[e]),Tr(r)}:hI().includes(t)?function(...e){return t.apply(nl(this),e),Tr(Ug.get(this))}:function(...e){return Tr(t.apply(nl(this),e))}}function gI(t){return typeof t=="function"?mI(t):(t instanceof IDBTransaction&&dI(t),lI(t,uI())?new Proxy(t,xl):t)}function Tr(t){if(t instanceof IDBRequest)return fI(t);if(tl.has(t))return tl.get(t);const e=gI(t);return e!==t&&(tl.set(t,e),Du.set(e,t)),e}const nl=t=>Du.get(t);function _I(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tr(o.result),l.oldVersion,l.newVersion,Tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const yI=["get","getKey","getAll","getAllKeys","count"],EI=["put","add","delete","clear"],rl=new Map;function Id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rl.get(e))return rl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=EI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return rl.set(e,i),i}pI(t=>({...t,get:(e,n,r)=>Id(e,n)||t.get(e,n,r),has:(e,n)=>!!Id(e,n)||t.has(e,n)}));/**
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
 */class TI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ol="@firebase/app",Ad="0.14.9";/**
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
 */const Xn=new ku("@firebase/app"),wI="@firebase/app-compat",II="@firebase/analytics-compat",AI="@firebase/analytics",RI="@firebase/app-check-compat",bI="@firebase/app-check",SI="@firebase/auth",CI="@firebase/auth-compat",PI="@firebase/database",NI="@firebase/data-connect",kI="@firebase/database-compat",DI="@firebase/functions",VI="@firebase/functions-compat",xI="@firebase/installations",OI="@firebase/installations-compat",LI="@firebase/messaging",MI="@firebase/messaging-compat",FI="@firebase/performance",UI="@firebase/performance-compat",BI="@firebase/remote-config",$I="@firebase/remote-config-compat",jI="@firebase/storage",qI="@firebase/storage-compat",HI="@firebase/firestore",GI="@firebase/ai",WI="@firebase/firestore-compat",zI="firebase",KI="12.10.0";/**
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
 */const Ll="[DEFAULT]",QI={[Ol]:"fire-core",[wI]:"fire-core-compat",[AI]:"fire-analytics",[II]:"fire-analytics-compat",[bI]:"fire-app-check",[RI]:"fire-app-check-compat",[SI]:"fire-auth",[CI]:"fire-auth-compat",[PI]:"fire-rtdb",[NI]:"fire-data-connect",[kI]:"fire-rtdb-compat",[DI]:"fire-fn",[VI]:"fire-fn-compat",[xI]:"fire-iid",[OI]:"fire-iid-compat",[LI]:"fire-fcm",[MI]:"fire-fcm-compat",[FI]:"fire-perf",[UI]:"fire-perf-compat",[BI]:"fire-rc",[$I]:"fire-rc-compat",[jI]:"fire-gcs",[qI]:"fire-gcs-compat",[HI]:"fire-fst",[WI]:"fire-fst-compat",[GI]:"fire-vertex","fire-js":"fire-js",[zI]:"fire-js-all"};/**
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
 */const Ia=new Map,JI=new Map,Ml=new Map;function Rd(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(Ml.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Ml.set(e,t);for(const n of Ia.values())Rd(n,t);for(const n of JI.values())Rd(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const YI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new mo("app","Firebase",YI);/**
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
 */class XI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=KI;function $g(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ll,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=Lg()),!n)throw vr.create("no-options");const i=Ia.get(s);if(i){if(Yn(n,i.options)&&Yn(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new sI(s);for(const l of Ml.values())o.addComponent(l);const c=new XI(n,r,o);return Ia.set(s,c),c}function Vu(t=Ll){const e=Ia.get(t);if(!e&&t===Ll&&Lg())return $g();if(!e)throw vr.create("no-app",{appName:t});return e}function In(t,e,n){let r=QI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(o.join(" "));return}ss(new Rr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ZI="firebase-heartbeat-database",eA=1,eo="firebase-heartbeat-store";let sl=null;function jg(){return sl||(sl=_I(ZI,eA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),sl}async function tA(t){try{const n=(await jg()).transaction(eo),r=await n.objectStore(eo).get(qg(t));return await n.done,r}catch(e){if(e instanceof Dn)Xn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function bd(t,e){try{const r=(await jg()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,qg(t)),await r.done}catch(n){if(n instanceof Dn)Xn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function qg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nA=1024,rA=30;class sA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>rA){const o=aA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sd(),{heartbeatsToSend:r,unsentEntries:s}=iA(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Xn.warn(n),""}}}function Sd(){return new Date().toISOString().substring(0,10)}function iA(t,e=nA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Cd(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}function aA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function cA(t){ss(new Rr("platform-logger",e=>new TI(e),"PRIVATE")),ss(new Rr("heartbeat",e=>new sA(e),"PRIVATE")),In(Ol,Ad,t),In(Ol,Ad,"esm2020"),In("fire-js","")}cA("");function Hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lA=Hg,Gg=new mo("auth","Firebase",Hg());/**
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
 */const Aa=new ku("@firebase/auth");function uA(t,...e){Aa.logLevel<=ge.WARN&&Aa.warn(`Auth (${hs}): ${t}`,...e)}function ra(t,...e){Aa.logLevel<=ge.ERROR&&Aa.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function Pn(t,...e){throw Ou(t,...e)}function rn(t,...e){return Ou(t,...e)}function xu(t,e,n){const r={...lA(),[e]:n};return new mo("auth","Firebase",r).create(e,{appName:t.name})}function es(t){return xu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pn(t,"argument-error"),xu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gg.create(t,...e)}function ce(t,e,...n){if(!t)throw Ou(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function Zn(t,e){t||Hn(e)}/**
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
 */function Fl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function fA(){return Pd()==="http:"||Pd()==="https:"}function Pd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function dA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fA()||jw()||"connection"in navigator)?navigator.onLine:!0}function pA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=Uw()||qw()}get(){return dA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lu(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_A=new _o(3e4,6e4);function Mu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xs(t,e,n,r,s={}){return zg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=go({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return $w()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Vr(t.emulatorConfig.host)&&(u.credentials="include"),Wg.fetch()(await Kg(t,t.config.apiHost,n,c),u)})}async function zg(t,e,n){t._canInitEmulator=!1;const r={...mA,...e};try{const s=new EA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xu(t,f,u);Pn(t,f)}}catch(s){if(s instanceof Dn)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function yA(t,e,n,r,s={}){const i=await Xs(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Lu(t.config,s):`${t.config.apiScheme}://${s}`;return gA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class EA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),_A.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function TA(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function Ra(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vA(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=Fu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ui(il(s.auth_time)),issuedAtTime:Ui(il(s.iat)),expirationTime:Ui(il(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function il(t){return Number(t)*1e3}function Fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vg(n);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(s){return ra("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nd(t){const e=Fu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&wA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ba(t){var p;const e=t.auth,n=await t.getIdToken(),r=await to(t,Ra(e,{idToken:n}));ce(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Qg(s.providerUserInfo):[],o=RA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ul(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function AA(t){const e=Me(t);await ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function bA(t,e){const n=await zg(t,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Kg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Vr(t.emulatorConfig.host)&&(l.credentials="include"),Wg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SA(t,e){return Xs(t,"POST","/v2/accounts:revokeToken",Mu(t,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Nd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ks;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
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
 */function ur(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new IA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ul(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vA(this,e)}reload(){return AA(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await to(this,TA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:S,stsTokenManager:N}=n;ce(p&&N,e,"internal-error");const D=ks.fromJSON(this.name,N);ce(typeof p=="string",e,"internal-error"),ur(r,e.name),ur(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof _=="boolean",e,"internal-error"),ur(i,e.name),ur(o,e.name),ur(c,e.name),ur(l,e.name),ur(u,e.name),ur(f,e.name);const B=new en({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:u,lastLoginAt:f});return S&&Array.isArray(S)&&(B.providerData=S.map(V=>({...V}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new ks;s.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ba(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ks;c.updateFromIdToken(r);const l=new en({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const kd=new Map;function Gn(t){Zn(t instanceof Function,"Expected a class definition");let e=kd.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kd.set(t,e),e)}/**
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
 */class Jg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jg.type="NONE";const Dd=Jg;/**
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
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sa(this.userKey,s.apiKey,i),this.fullPersistenceKey=sa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ra(this.auth,{idToken:e}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,e):null}return en._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(Gn(Dd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Gn(Dd);const o=sa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ra(e,{idToken:f}).catch(()=>{});if(!m)break;p=await en._fromGetAccountInfoResponse(e,m,f)}else p=en._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ds(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ds(i,e,r))}}/**
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
 */function Vd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(Xg(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yg(t=Et()){return/firefox\//i.test(t)}function Xg(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(t=Et()){return/crios\//i.test(t)}function e_(t=Et()){return/iemobile/i.test(t)}function t_(t=Et()){return/android/i.test(t)}function n_(t=Et()){return/blackberry/i.test(t)}function r_(t=Et()){return/webos/i.test(t)}function Uu(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CA(t=Et()){var e;return Uu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function PA(){return Hw()&&document.documentMode===10}function s_(t=Et()){return Uu(t)||t_(t)||r_(t)||n_(t)||/windows phone/i.test(t)||e_(t)}/**
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
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=Vd(Et());break;case"Worker":n=`${Vd(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class NA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kA(t,e={}){return Xs(t,"GET","/v2/passwordPolicy",Mu(t,e))}/**
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
 */const DA=6;class VA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??DA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class xA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xd(this),this.idTokenSubscription=new xd(this),this.beforeStateQueue=new NA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ra(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ba(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(es(this));const n=e?Me(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kA(this),n=new VA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&uA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rc(t){return Me(t)}class xd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OA(t){Bu=t}function LA(t){return Bu.loadJS(t)}function MA(){return Bu.gapiScript}function FA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function UA(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Yn(i,e??{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function BA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $A(t,e,n){const r=rc(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=o_(e),{host:o,port:c}=jA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Yn(u,r.config.emulator)&&Yn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vr(o)?(Pu(`${i}//${o}${l}`),Nu("Auth",!0)):qA()}function o_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jA(t){const e=o_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Od(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Od(o)}}}function Od(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class a_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
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
 */async function Vs(t,e){return yA(t,"POST","/v1/accounts:signInWithIdp",Mu(t,e))}/**
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
 */const HA="http://localhost";class is extends a_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:HA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
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
 */class $u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yo extends $u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mr extends yo{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
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
 */class $n extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class gr extends yo{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class _r extends yo{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await en._fromIdTokenResponse(e,r,s),o=Ld(r);return new Bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ld(r);return new Bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sa extends Dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sa(e,n,r,s)}}function c_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,i,e,r):i})}async function GA(t,e,n=!1){const r=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",r)}/**
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
 */async function WA(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(es(r));const s="reauthenticate";try{const i=await to(t,c_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Fu(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Bs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
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
 */async function zA(t,e,n=!1){if(zt(t.app))return Promise.reject(es(t));const r="signIn",s=await c_(t,r,e),i=await Bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function KA(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function QA(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function l_(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function JA(t){return Me(t).signOut()}const Ca="__sak";/**
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
 */class u_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YA=1e3,XA=10;class h_ extends u_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);PA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,XA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h_.type="LOCAL";const ZA=h_;/**
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
 */class f_ extends u_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}f_.type="SESSION";const d_=f_;/**
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
 */function eR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await eR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=ju("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function An(){return window}function nR(t){An().location.href=t}/**
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
 */function p_(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function rR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iR(){return p_()?self:null}/**
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
 */const m_="firebaseLocalStorageDb",oR=1,Pa="firebaseLocalStorage",g_="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function aR(){const t=indexedDB.deleteDatabase(m_);return new Eo(t).toPromise()}function Bl(){const t=indexedDB.open(m_,oR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pa,{keyPath:g_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pa)?e(r):(r.close(),await aR(),e(await Bl()))})})}async function Md(t,e,n){const r=ic(t,!0).put({[g_]:e,value:n});return new Eo(r).toPromise()}async function cR(t,e){const n=ic(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function Fd(t,e){const n=ic(t,!0).delete(e);return new Eo(n).toPromise()}const lR=800,uR=3;class __{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await rR(),!this.activeServiceWorker)return;this.sender=new tR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bl();return await Md(e,Ca,"1"),await Fd(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Md(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ic(s,!1).getAll();return new Eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}__.type="LOCAL";const hR=__;new _o(3e4,6e4);/**
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
 */function y_(t,e){return e?Gn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qu extends a_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fR(t){return zA(t.auth,new qu(t),t.bypassAuthState)}function dR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),WA(n,new qu(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),GA(n,new qu(t),t.bypassAuthState)}/**
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
 */class E_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return dR;default:Pn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mR=new _o(2e3,1e4);async function PN(t,e,n){if(zt(t.app))return Promise.reject(rn(t,"operation-not-supported-in-this-environment"));const r=rc(t);hA(t,e,$u);const s=y_(r,n);return new Qr(r,"signInViaPopup",e,s).executeNotNull()}class Qr extends E_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}Qr.currentPopupAction=null;/**
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
 */const gR="pendingRedirect",ia=new Map;class _R extends E_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await yR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yR(t,e){const n=vR(e),r=TR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ER(t,e){ia.set(t._key(),e)}function TR(t){return Gn(t._redirectPersistence)}function vR(t){return sa(gR,t.config.apiKey,t.name)}async function wR(t,e,n=!1){if(zt(t.app))return Promise.reject(es(t));const r=rc(t),s=y_(r,e),o=await new _R(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IR=10*60*1e3;class AR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!T_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))}saveEventToCache(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()}}function Ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function T_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return T_(t);default:return!1}}/**
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
 */async function bR(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
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
 */const SR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CR=/^https?/;async function PR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bR(t);for(const n of e)try{if(NR(n))return}catch{}Pn(t,"unauthorized-domain")}function NR(t){const e=Fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CR.test(n))return!1;if(SR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kR=new _o(3e4,6e4);function Bd(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DR(t){return new Promise((e,n)=>{var s,i,o;function r(){Bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bd(),n(rn(t,"network-request-failed"))},timeout:kR.get()})}if((i=(s=An().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=An().gapi)!=null&&o.load)r();else{const c=FA("iframefcb");return An()[c]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},LA(`${MA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw oa=null,e})}let oa=null;function VR(t){return oa=oa||DR(t),oa}/**
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
 */const xR=new _o(5e3,15e3),OR="__/auth/iframe",LR="emulator/auth/iframe",MR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UR(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lu(e,LR):`https://${t.config.authDomain}/${OR}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=FR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${go(r).slice(1)}`}async function BR(t){const e=await VR(t),n=An().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:UR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),c=An().setTimeout(()=>{i(o)},xR.get());function l(){An().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const $R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jR=500,qR=600,HR="_blank",GR="http://localhost";class $d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(t,e,n,r=jR,s=qR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...$R,width:r.toString(),height:s.toString(),top:i,left:o},u=Et().toLowerCase();n&&(c=Zg(u)?HR:n),Yg(u)&&(e=e||GR,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(CA(u)&&c!=="_self")return zR(e||"",c),new $d(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new $d(p)}function zR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KR="__/auth/handler",QR="emulator/auth/handler",JR=encodeURIComponent("fac");async function jd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof $u){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof yo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${JR}=${encodeURIComponent(l)}`:"";return`${YR(t)}?${go(c).slice(1)}${u}`}function YR({config:t}){return t.emulator?Lu(t,QR):`https://${t.authDomain}/${KR}`}/**
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
 */const ol="webStorageSupport";class XR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d_,this._completeRedirectFn=wR,this._overrideRedirectResult=ER}async _openPopup(e,n,r,s){var o;Zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await jd(e,n,r,Fl(),s);return WR(e,i,ju())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jd(e,n,r,Fl(),s);return nR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BR(e),r=new AR(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ol,{type:ol},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ol];i!==void 0&&n(!!i),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s_()||Xg()||Uu()}}const ZR=XR;var qd="@firebase/auth",Hd="1.12.1";/**
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
 */class eb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nb(t){ss(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},u=new xA(r,s,i,l);return BA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new Rr("auth-internal",e=>{const n=rc(e.getProvider("auth").getImmediate());return(r=>new eb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(qd,Hd,tb(t)),In(qd,Hd,"esm2020")}/**
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
 */const rb=5*60,sb=Mg("authIdTokenMaxAge")||rb;let Gd=null;const ib=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sb)return;const s=n==null?void 0:n.token;Gd!==s&&(Gd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ob(t=Vu()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UA(t,{popupRedirectResolver:ZR,persistence:[hR,ZA,d_]}),r=Mg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ib(i.toString());QA(n,o,()=>o(n.currentUser)),KA(n,c=>o(c))}}const s=xg("auth");return s&&$A(n,`http://${s}`),n}function ab(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}OA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ab().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nb("Browser");var cb="firebase",lb="12.10.0";/**
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
 */In(cb,lb,"app");var Wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,v_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function y(){}y.prototype=E.prototype,A.F=E.prototype,A.prototype=new y,A.prototype.constructor=A,A.D=function(b,R,I){for(var T=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)T[ve-2]=arguments[ve];return E.prototype[R].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,y){y||(y=0);const b=Array(16);if(typeof E=="string")for(var R=0;R<16;++R)b[R]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(R=0;R<16;++R)b[R]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=A.g[0],y=A.g[1],R=A.g[2];let I=A.g[3],T;T=E+(I^y&(R^I))+b[0]+3614090360&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(R^E&(y^R))+b[1]+3905402710&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(y^I&(E^y))+b[2]+606105819&4294967295,R=I+(T<<17&4294967295|T>>>15),T=y+(E^R&(I^E))+b[3]+3250441966&4294967295,y=R+(T<<22&4294967295|T>>>10),T=E+(I^y&(R^I))+b[4]+4118548399&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(R^E&(y^R))+b[5]+1200080426&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(y^I&(E^y))+b[6]+2821735955&4294967295,R=I+(T<<17&4294967295|T>>>15),T=y+(E^R&(I^E))+b[7]+4249261313&4294967295,y=R+(T<<22&4294967295|T>>>10),T=E+(I^y&(R^I))+b[8]+1770035416&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(R^E&(y^R))+b[9]+2336552879&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(y^I&(E^y))+b[10]+4294925233&4294967295,R=I+(T<<17&4294967295|T>>>15),T=y+(E^R&(I^E))+b[11]+2304563134&4294967295,y=R+(T<<22&4294967295|T>>>10),T=E+(I^y&(R^I))+b[12]+1804603682&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(R^E&(y^R))+b[13]+4254626195&4294967295,I=E+(T<<12&4294967295|T>>>20),T=R+(y^I&(E^y))+b[14]+2792965006&4294967295,R=I+(T<<17&4294967295|T>>>15),T=y+(E^R&(I^E))+b[15]+1236535329&4294967295,y=R+(T<<22&4294967295|T>>>10),T=E+(R^I&(y^R))+b[1]+4129170786&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^R&(E^y))+b[6]+3225465664&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^y&(I^E))+b[11]+643717713&4294967295,R=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(R^I))+b[0]+3921069994&4294967295,y=R+(T<<20&4294967295|T>>>12),T=E+(R^I&(y^R))+b[5]+3593408605&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^R&(E^y))+b[10]+38016083&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^y&(I^E))+b[15]+3634488961&4294967295,R=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(R^I))+b[4]+3889429448&4294967295,y=R+(T<<20&4294967295|T>>>12),T=E+(R^I&(y^R))+b[9]+568446438&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^R&(E^y))+b[14]+3275163606&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^y&(I^E))+b[3]+4107603335&4294967295,R=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(R^I))+b[8]+1163531501&4294967295,y=R+(T<<20&4294967295|T>>>12),T=E+(R^I&(y^R))+b[13]+2850285829&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^R&(E^y))+b[2]+4243563512&4294967295,I=E+(T<<9&4294967295|T>>>23),T=R+(E^y&(I^E))+b[7]+1735328473&4294967295,R=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(R^I))+b[12]+2368359562&4294967295,y=R+(T<<20&4294967295|T>>>12),T=E+(y^R^I)+b[5]+4294588738&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^R)+b[8]+2272392833&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^y)+b[11]+1839030562&4294967295,R=I+(T<<16&4294967295|T>>>16),T=y+(R^I^E)+b[14]+4259657740&4294967295,y=R+(T<<23&4294967295|T>>>9),T=E+(y^R^I)+b[1]+2763975236&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^R)+b[4]+1272893353&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^y)+b[7]+4139469664&4294967295,R=I+(T<<16&4294967295|T>>>16),T=y+(R^I^E)+b[10]+3200236656&4294967295,y=R+(T<<23&4294967295|T>>>9),T=E+(y^R^I)+b[13]+681279174&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^R)+b[0]+3936430074&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^y)+b[3]+3572445317&4294967295,R=I+(T<<16&4294967295|T>>>16),T=y+(R^I^E)+b[6]+76029189&4294967295,y=R+(T<<23&4294967295|T>>>9),T=E+(y^R^I)+b[9]+3654602809&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^R)+b[12]+3873151461&4294967295,I=E+(T<<11&4294967295|T>>>21),T=R+(I^E^y)+b[15]+530742520&4294967295,R=I+(T<<16&4294967295|T>>>16),T=y+(R^I^E)+b[2]+3299628645&4294967295,y=R+(T<<23&4294967295|T>>>9),T=E+(R^(y|~I))+b[0]+4096336452&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~R))+b[7]+1126891415&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~y))+b[14]+2878612391&4294967295,R=I+(T<<15&4294967295|T>>>17),T=y+(I^(R|~E))+b[5]+4237533241&4294967295,y=R+(T<<21&4294967295|T>>>11),T=E+(R^(y|~I))+b[12]+1700485571&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~R))+b[3]+2399980690&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~y))+b[10]+4293915773&4294967295,R=I+(T<<15&4294967295|T>>>17),T=y+(I^(R|~E))+b[1]+2240044497&4294967295,y=R+(T<<21&4294967295|T>>>11),T=E+(R^(y|~I))+b[8]+1873313359&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~R))+b[15]+4264355552&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~y))+b[6]+2734768916&4294967295,R=I+(T<<15&4294967295|T>>>17),T=y+(I^(R|~E))+b[13]+1309151649&4294967295,y=R+(T<<21&4294967295|T>>>11),T=E+(R^(y|~I))+b[4]+4149444226&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~R))+b[11]+3174756917&4294967295,I=E+(T<<10&4294967295|T>>>22),T=R+(E^(I|~y))+b[2]+718787259&4294967295,R=I+(T<<15&4294967295|T>>>17),T=y+(I^(R|~E))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.v=function(A,E){E===void 0&&(E=A.length);const y=E-this.blockSize,b=this.C;let R=this.h,I=0;for(;I<E;){if(R==0)for(;I<=y;)s(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<E;)if(b[R++]=A.charCodeAt(I++),R==this.blockSize){s(this,b),R=0;break}}else for(;I<E;)if(b[R++]=A[I++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=E},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,y=0;y<4;++y)for(let b=0;b<32;b+=8)A[E++]=this.g[y]>>>b&255;return A};function i(A,E){var y=c;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=E(A)}function o(A,E){this.h=E;const y=[];let b=!0;for(let R=A.length-1;R>=0;R--){const I=A[R]|0;b&&I==E||(y[R]=I,b=!1)}this.g=y}var c={};function l(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return D(u(-A));const E=[];let y=1;for(let b=0;A>=y;b++)E[b]=A/y|0,y*=4294967296;return new o(E,0)}function f(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return D(f(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(E,8));let b=p;for(let I=0;I<A.length;I+=8){var R=Math.min(8,A.length-I);const T=parseInt(A.substring(I,I+R),E);R<8?(R=u(Math.pow(E,R)),b=b.j(R).add(u(T))):(b=b.j(y),b=b.add(u(T)))}return b}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let A=0,E=1;for(let y=0;y<this.g.length;y++){const b=this.i(y);A+=(b>=0?b:4294967296+b)*E,E*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(N(this))return"-"+D(this).toString(A);const E=u(Math.pow(A,6));var y=this;let b="";for(;;){const R=H(y,E).g;y=B(y,R.j(E));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(A);if(y=R,S(y))return I+b;for(;I.length<6;)I="0"+I;b=I+b}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=B(this,A),N(A)?-1:S(A)?0:1};function D(A){const E=A.g.length,y=[];for(let b=0;b<E;b++)y[b]=~A.g[b];return new o(y,~A.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(A){const E=Math.max(this.g.length,A.g.length),y=[];let b=0;for(let R=0;R<=E;R++){let I=b+(this.i(R)&65535)+(A.i(R)&65535),T=(I>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=T>>>16,I&=65535,T&=65535,y[R]=T<<16|I}return new o(y,y[y.length-1]&-2147483648?-1:0)};function B(A,E){return A.add(D(E))}t.j=function(A){if(S(this)||S(A))return p;if(N(this))return N(A)?D(this).j(D(A)):D(D(this).j(A));if(N(A))return D(this.j(D(A)));if(this.l(_)<0&&A.l(_)<0)return u(this.m()*A.m());const E=this.g.length+A.g.length,y=[];for(var b=0;b<2*E;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(let R=0;R<A.g.length;R++){const I=this.i(b)>>>16,T=this.i(b)&65535,ve=A.i(R)>>>16,We=A.i(R)&65535;y[2*b+2*R]+=T*We,V(y,2*b+2*R),y[2*b+2*R+1]+=I*We,V(y,2*b+2*R+1),y[2*b+2*R+1]+=T*ve,V(y,2*b+2*R+1),y[2*b+2*R+2]+=I*ve,V(y,2*b+2*R+2)}for(A=0;A<E;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=E;A<2*E;A++)y[A]=0;return new o(y,0)};function V(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function j(A,E){this.g=A,this.h=E}function H(A,E){if(S(E))throw Error("division by zero");if(S(A))return new j(p,p);if(N(A))return E=H(D(A),E),new j(D(E.g),D(E.h));if(N(E))return E=H(A,D(E)),new j(D(E.g),E.h);if(A.g.length>30){if(N(A)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var y=m,b=E;b.l(A)<=0;)y=Z(y),b=Z(b);var R=ee(y,1),I=ee(b,1);for(b=ee(b,2),y=ee(y,2);!S(b);){var T=I.add(b);T.l(A)<=0&&(R=R.add(y),I=T),b=ee(b,1),y=ee(y,1)}return E=B(A,R.j(E)),new j(R,E)}for(R=p;A.l(E)>=0;){for(y=Math.max(1,Math.floor(A.m()/E.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),I=u(y),T=I.j(E);N(T)||T.l(A)>0;)y-=b,I=u(y),T=I.j(E);S(I)&&(I=m),R=R.add(I),A=B(A,T)}return new j(R,A)}t.B=function(A){return H(this,A).h},t.and=function(A){const E=Math.max(this.g.length,A.g.length),y=[];for(let b=0;b<E;b++)y[b]=this.i(b)&A.i(b);return new o(y,this.h&A.h)},t.or=function(A){const E=Math.max(this.g.length,A.g.length),y=[];for(let b=0;b<E;b++)y[b]=this.i(b)|A.i(b);return new o(y,this.h|A.h)},t.xor=function(A){const E=Math.max(this.g.length,A.g.length),y=[];for(let b=0;b<E;b++)y[b]=this.i(b)^A.i(b);return new o(y,this.h^A.h)};function Z(A){const E=A.g.length+1,y=[];for(let b=0;b<E;b++)y[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(y,A.h)}function ee(A,E){const y=E>>5;E%=32;const b=A.g.length-y,R=[];for(let I=0;I<b;I++)R[I]=E>0?A.i(I+y)>>>E|A.i(I+y+1)<<32-E:A.i(I+y);return new o(R,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,v_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,wr=o}).apply(typeof Wd<"u"?Wd:typeof self<"u"?self:typeof window<"u"?window:{});var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var w_,bi,I_,aa,$l,A_,R_,b_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qo=="object"&&qo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,k){for(var W=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)W[fe-2]=arguments[fe];return h.prototype[P].apply(g,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const k=P.length||0;a.length=d+k;for(let W=0;W<k;W++)a[d+W]=P[W]}else a.push(P)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function B(){var a=A;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class V{constructor(){this.h=this.g=null}add(h,d){const g=j.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var j=new N(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ee=!1,A=new V,E=()=>{const a=Promise.resolve(void 0);Z=()=>{a.then(y)}};function y(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){D(d)}var h=j;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ee=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function ve(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ve,R),ve.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var We="closure_listenable_"+(Math.random()*1e6|0),Fe=0;function Ae(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++Fe,this.da=this.fa=!1}function Ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function un(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Ot(a){const h={};for(const d in a)h[d]=a[d];return h}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vn(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let k=0;k<st.length;k++)d=st[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Jt(a){this.src=a,this.g={},this.h=0}Jt.prototype.add=function(a,h,d,g,P){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const W=lt(a,h,g,P);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new Ae(h,this.src,k,!!g,P),h.fa=d,a.push(h)),h};function Yt(a,h){const d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),k;(k=P>=0)&&Array.prototype.splice.call(g,P,1),k&&(Ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function lt(a,h,d,g){for(let P=0;P<a.length;++P){const k=a[P];if(!k.da&&k.listener==h&&k.capture==!!d&&k.ha==g)return P}return-1}var M="closure_lm_"+(Math.random()*1e6|0),Y={};function Q(a,h,d,g,P){if(Array.isArray(h)){for(let k=0;k<h.length;k++)Q(a,h[k],d,g,P);return null}return d=z(d),a&&a[We]?a.J(h,d,c(g)?!!g.capture:!1,P):te(a,h,d,!1,g,P)}function te(a,h,d,g,P,k){if(!h)throw Error("Invalid event type");const W=c(P)?!!P.capture:!!P;let fe=U(a);if(fe||(a[M]=fe=new Jt(a)),d=fe.add(h,d,g,W,k),d.proxy)return d;if(g=me(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)I||(P=W),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(C(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function me(){function a(d){return h.call(a.src,a.listener,d)}const h=O;return a}function v(a,h,d,g,P){if(Array.isArray(h))for(var k=0;k<h.length;k++)v(a,h[k],d,g,P);else g=c(g)?!!g.capture:!!g,d=z(d),a&&a[We]?(a=a.i,k=String(h).toString(),k in a.g&&(h=a.g[k],d=lt(h,d,g,P),d>-1&&(Ee(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[k],a.h--)))):a&&(a=U(a))&&(h=a.g[h.toString()],a=-1,h&&(a=lt(h,d,g,P)),(d=a>-1?h[a]:null)&&w(d))}function w(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[We])Yt(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(C(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=U(h))?(Yt(d,a),d.h==0&&(d.src=null,h[M]=null)):Ee(a)}}}function C(a){return a in Y?Y[a]:Y[a]="on"+a}function O(a,h){if(a.da)a=!0;else{h=new ve(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&w(a),a=d.call(g,h)}return a}function U(a){return a=a[M],a instanceof Jt?a:null}var L="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[L]||(a[L]=function(h){return a.handleEvent(h)}),a[L])}function G(){b.call(this),this.i=new Jt(this),this.M=this,this.G=null}p(G,b),G.prototype[We]=!0,G.prototype.removeEventListener=function(a,h,d,g){v(this,a,h,d,g)};function q(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var P=h;h=new R(g,a),Vn(h,P)}P=!0;let k,W;if(d)for(W=d.length-1;W>=0;W--)k=h.g=d[W],P=$(k,g,!0,h)&&P;if(k=h.g=a,P=$(k,g,!0,h)&&P,P=$(k,g,!1,h)&&P,d)for(W=0;W<d.length;W++)k=h.g=d[W],P=$(k,g,!1,h)&&P}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Ee(d[g]);delete a.g[h],a.h--}}this.G=null},G.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},G.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function $(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let k=0;k<h.length;++k){const W=h[k];if(W&&!W.da&&W.capture==d){const fe=W.listener,Ye=W.ha||W.src;W.fa&&Yt(a.i,W),P=fe.call(Ye,g)!==!1&&P}}return P&&!g.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ne extends b{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(a){b.call(this),this.h=a,this.g={}}p(oe,b);var de=[];function Pe(a){Pt(a.g,function(h,d){this.g.hasOwnProperty(d)&&w(h)},a),a.g={}}oe.prototype.N=function(){oe.Z.N.call(this),Pe(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var we=o.JSON.stringify,ut=o.JSON.parse,ht=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Lt(){}function Mt(){}var Xt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gs(){R.call(this,"d")}p(gs,R);function it(){R.call(this,"c")}p(it,R);var tt={},si=null;function Mr(){return si=si||new G}tt.Ia="serverreachability";function Uh(a){R.call(this,tt.Ia,a)}p(Uh,R);function ii(a){const h=Mr();q(h,new Uh(h))}tt.STAT_EVENT="statevent";function Bh(a,h){R.call(this,tt.STAT_EVENT,a),this.stat=h}p(Bh,R);function Tt(a){const h=Mr();q(h,new Bh(h,a))}tt.Ja="timingevent";function $h(a,h){R.call(this,tt.Ja,a),this.size=h}p($h,R);function oi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ai(){this.g=!0}ai.prototype.ua=function(){this.g=!1};function NE(a,h,d,g,P,k){a.info(function(){if(a.g)if(k){var W="",fe=k.split("&");for(let Ne=0;Ne<fe.length;Ne++){var Ye=fe[Ne].split("=");if(Ye.length>1){const nt=Ye[0];Ye=Ye[1];const fn=nt.split("_");W=fn.length>=2&&fn[1]=="type"?W+(nt+"="+Ye+"&"):W+(nt+"=redacted&")}}}else W=null;else W=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+W})}function kE(a,h,d,g,P,k,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+k+" "+W})}function _s(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+VE(a,d)+(g?" "+g:"")})}function DE(a,h){a.info(function(){return"TIMEOUT: "+h})}ai.prototype.info=function(){};function VE(a,h){if(!a.g)return h;if(!h)return null;try{const k=JSON.parse(h);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return we(k)}catch{return h}}var Co={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qh;function Pc(){}p(Pc,Lt),Pc.prototype.g=function(){return new XMLHttpRequest},qh=new Pc;function ci(a){return encodeURIComponent(String(a))}function xE(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function rr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hh}function Hh(){this.i=null,this.g="",this.h=!1}var Gh={},Nc={};function kc(a,h,d){a.M=1,a.A=No(hn(h)),a.u=d,a.R=!0,Wh(a,null)}function Wh(a,h){a.F=Date.now(),Po(a),a.B=hn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),of(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Hh,a.g=Af(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ne(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(de[0]=P.toString()),P=de);for(let k=0;k<P.length;k++){const W=Q(d,P[k],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?Ot(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ii(),NE(a.i,a.v,a.B,a.l,a.S,a.u)}rr.prototype.ba=function(a){a=a.target;const h=this.O;h&&or(a)==3?h.j():this.Y(a)},rr.prototype.Y=function(a){try{if(a==this.g)e:{const fe=or(this.g),Ye=this.g.ya(),Ne=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||df(this.g)))){this.K||fe!=4||Ye==7||(Ye==8||Ne<=0?ii(3):ii(2)),Dc(this);var h=this.g.ca();this.X=h;var d=OE(this);if(this.o=h==200,kE(this.i,this.v,this.B,this.l,this.S,fe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var k=g;break t}}k=null}if(a=k)_s(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vc(this,a);else{this.o=!1,this.m=3,Tt(12),Fr(this),li(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<d.length;)if(nt=LE(this,d),nt==Nc){fe==4&&(this.m=4,Tt(14),a=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Gh){this.m=4,Tt(15),_s(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else _s(this.i,this.l,nt,null),Vc(this,nt);if(zh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||d.length!=0||this.h.h||(this.m=1,Tt(16),a=!1),this.o=this.o&&a,!a)_s(this.i,this.l,d,"[Invalid Chunked Response]"),Fr(this),li(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),$c(W),W.P=!0,Tt(11))}}else _s(this.i,this.l,d,null),Vc(this,d);fe==4&&Fr(this),this.o&&!this.K&&(fe==4?Tf(this.j,this):(this.o=!1,Po(this)))}else JE(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),Fr(this),li(this)}}}catch{}finally{}};function OE(a){if(!zh(a))return a.g.la();const h=df(a.g);if(h==="")return"";let d="";const g=h.length,P=or(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Fr(a),li(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,d+=a.h.i.decode(h[k],{stream:!(P&&k==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function zh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function LE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Nc:(d=Number(h.substring(d,g)),isNaN(d)?Gh:(g+=1,g+d>h.length?Nc:(h=h.slice(g,g+d),a.C=g+d,h)))}rr.prototype.cancel=function(){this.K=!0,Fr(this)};function Po(a){a.T=Date.now()+a.H,Kh(a,a.H)}function Kh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=oi(u(a.aa,a),h)}function Dc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}rr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(DE(this.i,this.B),this.M!=2&&(ii(),Tt(17)),Fr(this),this.m=2,li(this)):Kh(this,this.T-a)};function li(a){a.j.I==0||a.K||Tf(a.j,a)}function Fr(a){Dc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Pe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Vc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||xc(d.h,a))){if(!a.L&&xc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Oo(d),Vo(d);else break e;Bc(d),Tt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=oi(u(d.Va,d),6e3));Yh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Br(d,11)}else if((a.L||d.g==a)&&Oo(d),!T(h))for(P=d.Ba.g.parse(h),h=0;h<P.length;h++){let Ne=P[h];const nt=Ne[0];if(!(nt<=d.K))if(d.K=nt,Ne=Ne[1],d.I==2)if(Ne[0]=="c"){d.M=Ne[1],d.ba=Ne[2];const fn=Ne[3];fn!=null&&(d.ka=fn,d.j.info("VER="+d.ka));const $r=Ne[4];$r!=null&&(d.za=$r,d.j.info("SVER="+d.za));const ar=Ne[5];ar!=null&&typeof ar=="number"&&ar>0&&(g=1.5*ar,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const cr=a.g;if(cr){const Mo=cr.g?cr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var k=g.h;k.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Oc(k,k.h),k.h=null))}if(g.G){const jc=cr.g?cr.g.getResponseHeader("X-HTTP-Session-Id"):null;jc&&(g.wa=jc,Oe(g.J,g.G,jc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var W=a;if(g.na=If(g,g.L?g.ba:null,g.W),W.L){Xh(g.h,W);var fe=W,Ye=g.O;Ye&&(fe.H=Ye),fe.D&&(Dc(fe),Po(fe)),g.g=W}else yf(g);d.i.length>0&&xo(d)}else Ne[0]!="stop"&&Ne[0]!="close"||Br(d,7);else d.I==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Br(d,7):Uc(d):Ne[0]!="noop"&&d.l&&d.l.qa(Ne),d.A=0)}}ii(4)}catch{}}var ME=class{constructor(a,h){this.g=a,this.map=h}};function Qh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yh(a){return a.h?1:a.g?a.g.size:0}function xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oc(a,h){a.g?a.g.add(h):a.h=h}function Xh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Qh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var ef=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,k=null;g>=0?(P=a[d].substring(0,g),k=a[d].substring(g+1)):P=a[d],h(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function sr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof sr?(this.l=a.l,ui(this,a.j),this.o=a.o,this.g=a.g,hi(this,a.u),this.h=a.h,Lc(this,af(a.i)),this.m=a.m):a&&(h=String(a).match(ef))?(this.l=!1,ui(this,h[1]||"",!0),this.o=fi(h[2]||""),this.g=fi(h[3]||"",!0),hi(this,h[4]),this.h=fi(h[5]||"",!0),Lc(this,h[6]||"",!0),this.m=fi(h[7]||"")):(this.l=!1,this.i=new pi(null,this.l))}sr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(di(h,tf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(di(h,tf,!0),"@"),a.push(ci(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(di(d,d.charAt(0)=="/"?$E:BE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",di(d,qE)),a.join("")},sr.prototype.resolve=function(a){const h=hn(this);let d=!!a.j;d?ui(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)hi(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=h.h.lastIndexOf("/");P!=-1&&(g=h.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const k=[];for(let W=0;W<P.length;){const fe=P[W++];fe=="."?g&&W==P.length&&k.push(""):fe==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&W==P.length&&k.push("")):(k.push(fe),g=!0)}g=k.join("/")}else g=P}return d?h.h=g:d=a.i.toString()!=="",d?Lc(h,af(a.i)):d=!!a.m,d&&(h.m=a.m),h};function hn(a){return new sr(a)}function ui(a,h,d){a.j=d?fi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function hi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Lc(a,h,d){h instanceof pi?(a.i=h,HE(a.i,a.l)):(d||(h=di(h,jE)),a.i=new pi(h,a.l))}function Oe(a,h,d){a.i.set(h,d)}function No(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function fi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function di(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,UE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function UE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tf=/[#\/\?@]/g,BE=/[#\?:]/g,$E=/[#\?]/g,jE=/[#\?@]/g,qE=/#/g;function pi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ur(a){a.g||(a.g=new Map,a.h=0,a.i&&FE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=pi.prototype,t.add=function(a,h){Ur(this),this.i=null,a=ys(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function nf(a,h){Ur(a),h=ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function rf(a,h){return Ur(a),h=ys(a,h),a.g.has(h)}t.forEach=function(a,h){Ur(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)};function sf(a,h){Ur(a);let d=[];if(typeof h=="string")rf(a,h)&&(d=d.concat(a.g.get(ys(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ur(this),this.i=null,a=ys(this,a),rf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=sf(this,a),a.length>0?String(a[0]):h):h};function of(a,h,d){nf(a,h),d.length>0&&(a.i=null,a.g.set(ys(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const P=ci(d);d=sf(this,d);for(let k=0;k<d.length;k++){let W=P;d[k]!==""&&(W+="="+ci(d[k])),a.push(W)}}return this.i=a.join("&")};function af(a){const h=new pi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function HE(a,h){h&&!a.j&&(Ur(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(nf(this,g),of(this,P,d))},a)),a.j=h}function GE(a,h){const d=new ai;if(o.Image){const g=new Image;g.onload=f(ir,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(ir,d,"TestLoadImage: error",!1,h,g),g.onabort=f(ir,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(ir,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function WE(a,h){const d=new ai,g=new AbortController,P=setTimeout(()=>{g.abort(),ir(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?ir(d,"TestPingServer: ok",!0,h):ir(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),ir(d,"TestPingServer: error",!1,h)})}function ir(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function zE(){this.g=new ht}function Mc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Mc,Lt),Mc.prototype.g=function(){return new ko(this.i,this.h)};function ko(a,h){G.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ko,G),t=ko.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,gi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?mi(this):gi(this),this.readyState==3&&cf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,mi(this))},t.Na=function(a){this.g&&(this.response=a,mi(this))},t.ga=function(){this.g&&mi(this)};function mi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,gi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lf(a){let h="";return Pt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Fc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=lf(d),typeof a=="string"?d!=null&&ci(d):Oe(a,h,d))}function Be(a){G.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Be,G);var KE=/^https?$/i,QE=["POST","PUT"];t=Be.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){uf(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(QE,h,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of d)this.g.setRequestHeader(k,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){uf(this,k)}};function uf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,hf(a),Do(a)}function hf(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),Do(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),Be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ff(this):this.Xa())},t.Xa=function(){ff(this)};function ff(a){if(a.h&&typeof i<"u"){if(a.v&&or(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),or(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=k===0){let W=String(a.D).match(ef)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!KE.test(W?W.toLowerCase():"")}d=g}if(d)q(a,"complete"),q(a,"success");else{a.o=6;try{var P=or(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",hf(a)}}finally{Do(a)}}}}function Do(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function or(a){return a.g?a.g.readyState:0}t.ca=function(){try{return or(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ut(h)}};function df(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function JE(a){const h={};a=(a.g&&or(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=xE(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=h[P]||[];h[P]=k,k.push(d)}un(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function pf(a){this.za=0,this.i=[],this.j=new ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_i("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_i("baseRetryDelayMs",5e3,a),this.Za=_i("retryDelaySeedMs",1e4,a),this.Ta=_i("forwardChannelMaxRetries",2,a),this.va=_i("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Qh(a&&a.concurrentRequestLimit),this.Ba=new zE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pf.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){Tt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=If(this,null,this.W),xo(this)};function Uc(a){if(mf(a),a.I==3){var h=a.V++,d=hn(a.J);if(Oe(d,"SID",a.M),Oe(d,"RID",h),Oe(d,"TYPE","terminate"),yi(a,d),h=new rr(a,a.j,h),h.M=2,h.A=No(hn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Af(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Po(h)}wf(a)}function Vo(a){a.g&&($c(a),a.g.cancel(),a.g=null)}function mf(a){Vo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Oo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function xo(a){if(!Jh(a.h)&&!a.m){a.m=!0;var h=a.Ea;Z||E(),ee||(Z(),ee=!0),A.add(h,a),a.D=0}}function YE(a,h){return Yh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=oi(u(a.Ea,a,h),vf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new rr(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Ot(k),Vn(k,this.U)):k=this.U),this.u!==null||this.R||(P.J=k,k=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=_f(this,P,h),d=hn(this.J),Oe(d,"RID",a),Oe(d,"CVER",22),this.G&&Oe(d,"X-HTTP-Session-Id",this.G),yi(this,d),k&&(this.R?h="headers="+ci(lf(k))+"&"+h:this.u&&Fc(d,this.u,k)),Oc(this.h,P),this.Ra&&Oe(d,"TYPE","init"),this.S?(Oe(d,"$req",h),Oe(d,"SID","null"),P.U=!0,kc(P,d,null)):kc(P,d,h),this.I=2}}else this.I==3&&(a?gf(this,a):this.i.length==0||Jh(this.h)||gf(this))};function gf(a,h){var d;h?d=h.l:d=a.V++;const g=hn(a.J);Oe(g,"SID",a.M),Oe(g,"RID",d),Oe(g,"AID",a.K),yi(a,g),a.u&&a.o&&Fc(g,a.u,a.o),d=new rr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=_f(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Oc(a.h,d),kc(d,g,h)}function yi(a,h){a.H&&Pt(a.H,function(d,g){Oe(h,g,d)}),a.l&&Pt({},function(d,g){Oe(h,g,d)})}function _f(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let fe=-1;for(;;){const Ye=["count="+d];fe==-1?d>0?(fe=P[0].g,Ye.push("ofs="+fe)):fe=0:Ye.push("ofs="+fe);let Ne=!0;for(let nt=0;nt<d;nt++){var k=P[nt].g;const fn=P[nt].map;if(k-=fe,k<0)fe=Math.max(0,P[nt].g-100),Ne=!1;else try{k="req"+k+"_"||"";try{var W=fn instanceof Map?fn:Object.entries(fn);for(const[$r,ar]of W){let cr=ar;c(ar)&&(cr=we(ar)),Ye.push(k+$r+"="+encodeURIComponent(cr))}}catch($r){throw Ye.push(k+"type="+encodeURIComponent("_badmap")),$r}}catch{g&&g(fn)}}if(Ne){W=Ye.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function yf(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Z||E(),ee||(Z(),ee=!0),A.add(h,a),a.A=0}}function Bc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=oi(u(a.Da,a),vf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ef(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=oi(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),Vo(this),Ef(this))};function $c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ef(a){a.g=new rr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=hn(a.na);Oe(h,"RID","rpc"),Oe(h,"SID",a.M),Oe(h,"AID",a.K),Oe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(h,"TO",a.ia),Oe(h,"TYPE","xmlhttp"),yi(a,h),a.u&&a.o&&Fc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=No(hn(h)),d.u=null,d.R=!0,Wh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Vo(this),Bc(this),Tt(19))};function Oo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Tf(a,h){var d=null;if(a.g==h){Oo(a),$c(a),a.g=null;var g=2}else if(xc(a.h,h))d=h.G,Xh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;g=Mr(),q(g,new $h(g,d)),xo(a)}else yf(a);else if(P=h.m,P==3||P==0&&h.X>0||!(g==1&&YE(a,h)||g==2&&Bc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function vf(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Br(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const P=!g;g=new sr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ui(g,"https"),No(g),P?GE(g.toString(),d):WE(g.toString(),d)}else Tt(2);a.I=0,a.l&&a.l.pa(h),wf(a),mf(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function wf(a){if(a.I=0,a.ja=[],a.l){const h=Zh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function If(a,h,d){var g=d instanceof sr?hn(d):new sr(d);if(g.g!="")h&&(g.g=h+"."+g.g),hi(g,g.u);else{var P=o.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const k=new sr(null);g&&ui(k,g),h&&(k.g=h),P&&hi(k,P),d&&(k.h=d),g=k}return d=a.G,h=a.wa,d&&h&&Oe(g,d,h),Oe(g,"VER",a.ka),yi(a,g),g}function Af(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Be(new Mc({ab:d})):new Be(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rf(){}t=Rf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Lo(){}Lo.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){G.call(this),this.g=new pf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Es(this)}p(Ft,G),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Uc(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=we(a),a=d);h.i.push(new ME(h.Ya++,a)),h.I==3&&xo(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Uc(this.g),delete this.g,Ft.Z.N.call(this)};function bf(a){gs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(bf,gs);function Sf(){it.call(this),this.status=1}p(Sf,it);function Es(a){this.g=a}p(Es,Rf),Es.prototype.ra=function(){q(this.g,"a")},Es.prototype.qa=function(a){q(this.g,new bf(a))},Es.prototype.pa=function(a){q(this.g,new Sf)},Es.prototype.oa=function(){q(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,b_=function(){return new Lo},R_=function(){return Mr()},A_=tt,$l={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Co.NO_ERROR=0,Co.TIMEOUT=8,Co.HTTP_ERROR=6,aa=Co,jh.COMPLETE="complete",I_=jh,Mt.EventType=Xt,Xt.OPEN="a",Xt.CLOSE="b",Xt.ERROR="c",Xt.MESSAGE="d",G.prototype.listen=G.prototype.J,bi=Mt,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,w_=Be}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs="12.10.0";function ub(t){Zs=t}/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new ku("@firebase/firestore");function ws(){return os.logLevel}function X(t,...e){if(os.logLevel<=ge.DEBUG){const n=e.map(Hu);os.debug(`Firestore (${Zs}): ${t}`,...n)}}function er(t,...e){if(os.logLevel<=ge.ERROR){const n=e.map(Hu);os.error(`Firestore (${Zs}): ${t}`,...n)}}function as(t,...e){if(os.logLevel<=ge.WARN){const n=e.map(Hu);os.warn(`Firestore (${Zs}): ${t}`,...n)}}function Hu(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,S_(t,r,n)}function S_(t,e,n){let r=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||S_(e,s,r)}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class fb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new C_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class pb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class mb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new zd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new zd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _b(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_b(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function jl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return al(s)===al(i)?_e(s,i):al(s)?1:-1}return _e(t.length,e.length)}const yb=55296,Eb=57343;function al(t){const e=t.charCodeAt(0);return e>=yb&&e<=Eb}function $s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="__name__";class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=gn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=gn.isNumericId(e),s=gn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?gn.extractNumericId(e).compare(gn.extractNumericId(n)):jl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wr.fromString(e.substring(4,e.length-2))}}class xe extends gn{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const Tb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends gn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return Tb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kd}static keyField(){return new at([Kd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new K(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(xe.fromString(e))}static fromName(e){return new re(xe.fromString(e).popFirst(5))}static empty(){return new re(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e,n){if(!n)throw new K(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vb(t,e,n,r){if(e===!0&&r===!0)throw new K(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qd(t){if(!re.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jd(t){if(re.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function N_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function St(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oc(t);throw new K(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){const n={typeString:t};return e&&(n.value=e),n}function To(t,e){if(!N_(t))throw new K(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=-62135596800,Xd=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Xd);return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Yd)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xd}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(To(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:Je("string",Le._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Le(0,0))}static max(){return new le(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const no=-1;function wb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new br(s,re.empty(),e)}function Ib(t){return new br(t.readTime,t.key,no)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(le.min(),re.empty(),no)}static max(){return new br(le.max(),re.empty(),no)}}function Ab(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const Rb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==Rb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Sb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ti(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ac.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=-1;function cc(t){return t==null}function Na(t){return t===0&&1/t==-1/0}function Cb(t){return typeof t=="number"&&Number.isInteger(t)&&!Na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="";function Pb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zd(e)),e=Nb(t.get(n),e);return Zd(e)}function Nb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case k_:n+="";break;default:n+=i}}return n}function Zd(t){return t+k_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function D_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ho(this.root,e,this.comparator,!0)}}class Ho{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tp(this.data.getIterator())}getIteratorFrom(e){return new tp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class tp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Ze(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class V_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new V_("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=kb.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */const x_="server_timestamp",O_="__type__",L_="__previous_value__",M_="__local_write_time__";function zu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[O_])==null?void 0:r.stringValue)===x_}function lc(t){const e=t.mapValue.fields[L_];return zu(e)?lc(e):e}function ro(t){const e=Sr(t.mapValue.fields[M_].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,s,i,o,c,l,u,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f,this.apiKey=p}}const ka="(default)";class so{constructor(e,n){this.projectId=e,this.database=n||ka}static empty(){return new so("","")}get isDefaultDatabase(){return this.database===ka}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}function Vb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(t.options.projectId,e)}/**
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
 */const F_="__type__",xb="__max__",Go={mapValue:{}},U_="__vector__",Da="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zu(t)?4:Lb(t)?9007199254740991:Ob(t)?10:11:ae(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),c=Sr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Cr(s.bytesValue).isEqual(Cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),c=ze(i.doubleValue);return o===c?Na(o)===Na(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return $s(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ep(o)!==ep(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Nn(o[l],c[l])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function io(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return np(t.timestampValue,e.timestampValue);case 4:return np(ro(t),ro(e));case 5:return jl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Cr(i),l=Cr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=_e(c[u],l[u]);if(f!==0)return f}return _e(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=_e(ze(i.latitude),ze(o.latitude));return c!==0?c:_e(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return rp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,S,N;const c=i.fields||{},l=o.fields||{},u=(m=c[Da])==null?void 0:m.arrayValue,f=(_=l[Da])==null?void 0:_.arrayValue,p=_e(((S=u==null?void 0:u.values)==null?void 0:S.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:rp(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Go.mapValue&&o===Go.mapValue)return 0;if(i===Go.mapValue)return 1;if(o===Go.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=jl(l[p],f[p]);if(m!==0)return m;const _=js(c[l[p]],u[f[p]]);if(_!==0)return _}return _e(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{he:n})}}function np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Sr(t),r=Sr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function rp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=js(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function qs(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ql(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ql(n.fields[o])}`;return s+"}"}(t.mapValue):ae(61005,{value:t})}function ca(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(t);return e?16+ca(e):16;case 5:return 2*t.stringValue.length;case 6:return Cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ca(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return xr(r.fields,(i,o)=>{s+=i.length+ca(o)}),s}(t.mapValue);default:throw ae(13486,{value:t})}}function sp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hl(t){return!!t&&"integerValue"in t}function Ku(t){return!!t&&"arrayValue"in t}function ip(t){return!!t&&"nullValue"in t}function op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function Ob(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[F_])==null?void 0:r.stringValue)===U_}function Bi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bi(t.arrayValue.values[n]);return e}return{...t}}function Lb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===xb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Bi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(Bi(this.value))}}function B_(t){const e=[];return xr(t.fields,(n,r)=>{const s=new at([n]);if(la(r)){const i=B_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,le.min(),le.min(),le.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,le.min(),le.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,le.min(),le.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Va{constructor(e,n){this.position=e,this.inclusive=n}}function ap(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=js(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $_{}class Qe extends $_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ub(e,n,r):n==="array-contains"?new jb(e,r):n==="in"?new qb(e,r):n==="not-in"?new Hb(e,r):n==="array-contains-any"?new Gb(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Bb(e,r):new $b(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(js(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends $_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new cn(e,n)}matches(e){return j_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function j_(t){return t.op==="and"}function q_(t){return Fb(t)&&j_(t)}function Fb(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Gl(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+qs(t.value);if(q_(t))return t.filters.map(e=>Gl(e)).join(",");{const e=t.filters.map(n=>Gl(n)).join(",");return`${t.op}(${e})`}}function H_(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Nn(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&H_(o,s.filters[c]),!0):!1}(t,e):void ae(19439)}function G_(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${qs(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(G_).join(" ,")+"}"}(t):"Filter"}class Ub extends Qe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class Bb extends Qe{constructor(e,n){super(e,"in",n),this.keys=W_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $b extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=W_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class jb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ku(n)&&io(n.arrayValue,this.value)}}class qb extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class Hb extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!io(this.value.arrayValue,n)}}class Gb extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>io(this.value.arrayValue,r))}}/**
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
 */class Wb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function lp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Wb(t,e,n,r,s,i,o)}function Qu(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qs(r)).join(",")),e.Te=n}return e.Te}function Ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!H_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cp(t.startAt,e.startAt)&&cp(t.endAt,e.endAt)}function Wl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function zb(t,e,n,r,s,i,o,c){return new ni(t,e,n,r,s,i,o,c)}function uc(t){return new ni(t)}function up(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kb(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function z_(t){return t.collectionGroup!==null}function $i(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new oo(i,r))}),n.has(at.keyField().canonicalString())||e.Ie.push(new oo(at.keyField(),r))}return e.Ie}function Rn(t){const e=he(t);return e.Ee||(e.Ee=Qb(e,$i(t))),e.Ee}function Qb(t,e){if(t.limitType==="F")return lp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new oo(s.field,i)});const n=t.endAt?new Va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Va(t.startAt.position,t.startAt.inclusive):null;return lp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zl(t,e){const n=t.filters.concat([e]);return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jb(t,e){const n=t.explicitOrderBy.concat([e]);return new ni(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Kl(t,e,n){return new ni(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return Ju(Rn(t),Rn(e))&&t.limitType===e.limitType}function K_(t){return`${Qu(Rn(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>G_(s)).join(", ")}]`),cc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>qs(s)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of $i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=ap(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,$i(r),s)||r.endAt&&!function(o,c,l){const u=ap(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,$i(r),s))}(t,e)}function Yb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q_(t){return(e,n)=>{let r=!1;for(const s of $i(t)){const i=Xb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Xb(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?js(l,u):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return D_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new Ue(re.comparator);function tr(){return Zb}const J_=new Ue(re.comparator);function Si(...t){let e=J_;for(const n of t)e=e.insert(n.key,n);return e}function Y_(t){let e=J_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return ji()}function X_(){return ji()}function ji(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const e0=new Ue(re.comparator),t0=new Ze(re.comparator);function ye(...t){let e=t0;for(const n of t)e=e.add(n);return e}const n0=new Ze(_e);function r0(){return n0}/**
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
 */function Yu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Na(e)?"-0":e}}function Z_(t){return{integerValue:""+t}}function ey(t,e){return Cb(e)?Z_(e):Yu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this._=void 0}}function s0(t,e,n){return t instanceof ao?function(s,i){const o={fields:{[O_]:{stringValue:x_},[M_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zu(i)&&(i=lc(i)),i&&(o.fields[L_]=i),{mapValue:o}}(n,e):t instanceof Hs?ny(t,e):t instanceof Gs?ry(t,e):function(s,i){const o=ty(s,i),c=hp(o)+hp(s.Ae);return Hl(o)&&Hl(s.Ae)?Z_(c):Yu(s.serializer,c)}(t,e)}function i0(t,e,n){return t instanceof Hs?ny(t,e):t instanceof Gs?ry(t,e):n}function ty(t,e){return t instanceof co?function(r){return Hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ao extends dc{}class Hs extends dc{constructor(e){super(),this.elements=e}}function ny(t,e){const n=sy(e);for(const r of t.elements)n.some(s=>Nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends dc{constructor(e){super(),this.elements=e}}function ry(t,e){let n=sy(e);for(const r of t.elements)n=n.filter(s=>!Nn(s,r));return{arrayValue:{values:n}}}class co extends dc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hp(t){return ze(t.integerValue||t.doubleValue)}function sy(t){return Ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.field=e,this.transform=n}}function o0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Hs&&s instanceof Hs||r instanceof Gs&&s instanceof Gs?$s(r.elements,s.elements,Nn):r instanceof co&&s instanceof co?Nn(r.Ae,s.Ae):r instanceof ao&&s instanceof ao}(t.transform,e.transform)}class a0{constructor(e,n){this.version=e,this.transformResults=n}}class Ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function iy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gc(t.key,Ct.none()):new vo(t.key,t.data,Ct.none());{const n=t.data,r=xt.empty();let s=new Ze(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Or(t.key,r,new Ht(s.toArray()),Ct.none())}}function c0(t,e,n){t instanceof vo?function(s,i,o){const c=s.value.clone(),l=dp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(s,i,o){if(!ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=dp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(oy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qi(t,e,n,r){return t instanceof vo?function(i,o,c,l){if(!ua(i.precondition,o))return c;const u=i.value.clone(),f=pp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(i,o,c,l){if(!ua(i.precondition,o))return c;const u=pp(i.fieldTransforms,l,o),f=o.data;return f.setAll(oy(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function l0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ty(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function fp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$s(r,s,(i,o)=>o0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Or extends mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function oy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dp(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,i0(o,c,n[s]))}return r}function pp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,s0(i,o,e))}return r}class gc extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u0 extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&c0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=X_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=iy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,(n,r)=>fp(n,r))&&$s(this.baseMutations,e.baseMutations,(n,r)=>fp(n,r))}}class Xu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return e0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xu(e,n,r,s)}}/**
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
 */class f0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Te;function p0(t){switch(t){case x.OK:return ae(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function ay(t){if(t===void 0)return er("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ke.OK:return x.OK;case Ke.CANCELLED:return x.CANCELLED;case Ke.UNKNOWN:return x.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return x.INTERNAL;case Ke.UNAVAILABLE:return x.UNAVAILABLE;case Ke.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ke.NOT_FOUND:return x.NOT_FOUND;case Ke.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ke.ABORTED:return x.ABORTED;case Ke.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ke.DATA_LOSS:return x.DATA_LOSS;default:return ae(39323,{code:t})}}(Te=Ke||(Ke={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function m0(){return new TextEncoder}/**
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
 */const g0=new wr([4294967295,4294967295],0);function mp(t){const e=m0().encode(t),n=new v_;return n.update(e),new Uint8Array(n.digest())}function gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wr([n,r],0),new wr([s,i],0)]}class Zu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=wr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(wr.fromNumber(r)));return s.compare(g0)===1&&(s=new wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=mp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=mp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _c(le.min(),s,new Ue(_e),tr(),ye())}}class wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wo(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class cy{constructor(e,n){this.targetId=e,this.Ce=n}}class ly{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _p{constructor(){this.ve=0,this.Fe=yp(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new wo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=yp()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class _0{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.He=Wo(),this.Je=Wo(),this.Ze=new Ue(_e)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Wl(i))if(r===0){const o=new re(i.path);this.et(n,o,gt.newNoDocument(o,le.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Cr(r).toUint8Array()}catch(l){if(l instanceof V_)return as("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zu(o,s,i)}catch(l){return as(l instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Wl(c.target)){const l=new re(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,gt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ye();this.Je.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new _c(e,n,this.Ze,this.je,r);return this.je=tr(),this.He=Wo(),this.Je=Wo(),this.Ze=new Ue(_e),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new _p,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ze(_e),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ze(_e),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _p),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Wo(){return new Ue(re.comparator)}function yp(){return new Ue(re.comparator)}const y0={asc:"ASCENDING",desc:"DESCENDING"},E0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T0={and:"AND",or:"OR"};class v0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ql(t,e){return t.useProto3Json||cc(e)?e:{value:e}}function xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function w0(t,e){return xa(t,e.toTimestamp())}function bn(t){return Se(!!t,49232),le.fromTimestamp(function(n){const r=Sr(n);return new Le(r.seconds,r.nanos)}(t))}function eh(t,e){return Jl(t,e).canonicalString()}function Jl(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hy(t){const e=xe.fromString(t);return Se(gy(e),10190,{key:e.toString()}),e}function Yl(t,e){return eh(t.databaseId,e.path)}function cl(t,e){const n=hy(e);if(n.get(1)!==t.databaseId.projectId)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(dy(n))}function fy(t,e){return eh(t.databaseId,e)}function I0(t){const e=hy(t);return e.length===4?xe.emptyPath():dy(e)}function Xl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dy(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ep(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function A0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Se(f===void 0||typeof f=="string",58123),ct.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ct.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?x.UNKNOWN:ay(u.code);return new K(f,u.message||"")}(o);n=new ly(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cl(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):le.min(),c=new xt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ha(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cl(t,r.document),i=r.readTime?bn(r.readTime):le.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ha([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cl(t,r.document),i=r.removedTargetIds||[];n=new ha([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new d0(s,i),c=r.targetId;n=new cy(c,o)}}return n}function R0(t,e){let n;if(e instanceof vo)n={update:Ep(t,e.key,e.value)};else if(e instanceof gc)n={delete:Yl(t,e.key)};else if(e instanceof Or)n={update:Ep(t,e.key,e.data),updateMask:x0(e.fieldMask)};else{if(!(e instanceof u0))return ae(16599,{dt:e.type});n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ao)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Hs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof co)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ae(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:w0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(t,e.precondition)),n}function b0(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(le.min())&&(o=bn(i)),new a0(o,s.transformResults||[])}(n,e))):[]}function S0(t,e){return{documents:[fy(t,e.path)]}}function C0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fy(t,s);const i=function(u){if(u.length!==0)return my(cn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:As(m.field),direction:k0(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ql(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function P0(t){let e=I0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=py(p);return m instanceof cn&&q_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new oo(Rs(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,cc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new Va(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new Va(_,m)}(n.endAt)),zb(e,s,o,i,c,"F",l,u)}function N0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function py(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>py(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(n.compositeFilter.op))}(t):ae(30097,{filter:t})}function k0(t){return y0[t]}function D0(t){return E0[t]}function V0(t){return T0[t]}function As(t){return{fieldPath:t.canonicalString()}}function Rs(t){return at.fromServerFormat(t.fieldPath)}function my(t){return t instanceof Qe?function(n){if(n.op==="=="){if(op(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(ip(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(op(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(ip(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:D0(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>my(s));return r.length===1?r[0]:{compositeFilter:{op:V0(n.op),filters:r}}}(t):ae(54877,{filter:t})}function x0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function _y(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r,s,i=le.min(),o=le.min(),c=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.yt=e}}function L0(t){const e=P0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
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
 */class M0{constructor(){this.Sn=new F0}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(br.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class F0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yy=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(yy,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ws(0)}static ar(){return new Ws(-1)}}/**
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
 */const vp="LruGarbageCollector",U0=1048576;function wp([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class B0{constructor(e){this.Pr=e,this.buffer=new Ze(wp),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){X(vp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ti(n)?X(vp,"Ignoring IndexedDB error during garbage collection: ",n):await ei(n)}await this.Ar(3e5)})}}class j0{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(ac.ce);const r=new B0(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Tp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tp):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ws()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function q0(t,e){return new j0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class G0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qi(r.mutation,s,Ht.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Si();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=tr();const o=ji(),c=function(){return ji()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Or)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),qi(f.mutation,u,f.mutation.getFieldMask(),Le.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>c.set(u,new G0(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=ji();let s=new Ue((o,c)=>o-c),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Ht.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||ye()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=X_();f.forEach(m=>{if(!i.has(m)){const _=iy(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return Kb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):z_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Jr());let c=no,l=i;return o.next(u=>F.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ye())).next(f=>({batchId:c,changes:Y_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Si();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,l=>{const u=function(p,m){return new ni(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))});let c=Si();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&qi(f.mutation,u,Ht.empty(),Le.now()),fc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class z0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:L0(s.bundledQuery),readTime:bn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class K0{constructor(){this.overlays=new Ue(re.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Jr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Jr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return F.resolve(c)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f0(n,r));let i=this.Lr.get(n);i===void 0&&(i=ye(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.kr=new Ze(rt.Kr),this.qr=new Ze(rt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new rt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new re(new xe([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new re(new xe([])),r=new rt(n,e),s=new rt(n,e+1);let i=ye();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return re.comparator(e.key,n.key)||_e(e.Hr,n.Hr)}static Ur(e,n){return _e(e.Hr,n.Hr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ze(rt.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new h0(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Wu:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const c=this.Zr(o.Hr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(_e);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],c=>{r=r.add(c.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new rt(new re(i),0);let c=new Ze(_e);return this.Jr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)},o),F.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new rt(n,0),s=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.ti=e,this.docs=function(){return new Ue(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ab(Ib(f),r)<=0||(s.has(f.key)||fc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new X0(this)}getSize(e){return F.resolve(this.size)}}class X0 extends H0{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.persistence=e,this.ri=new fs(n=>Qu(n),Ju),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.ii=0,this.si=new th,this.targetCount=0,this.oi=Ws._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this._i={},this.overlays={},this.ai=new ac(0),this.ui=!1,this.ui=!0,this.ci=new Q0,this.referenceDelegate=e(this),this.li=new Z0(this),this.indexManager=new M0,this.remoteDocumentCache=function(s){return new Y0(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new O0(n),this.Pi=new z0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new K0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new J0(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new eS(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class eS extends bb{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Ri=new th,this.Ai=null}static Vi(e){return new nh(e)}get di(){if(this.Ai)return this.Ai;throw ae(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=re.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Oa{constructor(e,n){this.persistence=e,this.fi=new fs(r=>Pb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=q0(this,n)}static Vi(e,n){return new Oa(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ca(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rh(e,n.fromCache,r,s)}}/**
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
 */class tS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Gw()?8:Sb(Et())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new tS;return this.ys(e,n,o).next(c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ws()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(ws()<=ge.DEBUG&&X("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ws()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):F.resolve())}gs(e,n){if(up(n))return F.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kl(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,c);return this.Ss(n,u,o,l.readTime)?this.gs(e,Kl(n,null,"F")):this.Ds(e,u,n,l)}))})))}ps(e,n,r,s){return up(n)||s.isEqual(le.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?F.resolve(null):(ws()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Is(n)),this.Ds(e,o,n,wb(s,no)).next(c=>c))})}bs(e,n){let r=new Ze(Q_(e));return n.forEach((s,i)=>{fc(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ws()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Is(n)),this.fs.getDocumentsMatchingQuery(e,n,br.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const sh="LocalStore",rS=3e8;class sS{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ue(_e),this.Fs=new fs(i=>Qu(i),Ju),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function iS(t,e,n,r){return new sS(t,e,n,r)}async function Ty(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ye();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:c}))})})}function oS(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach(S=>{_=_.next(()=>f.getEntry(l,S)).next(N=>{const D=u.docVersions.get(S);Se(D!==null,48541),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ye();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function vy(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function aS(t,e){const n=he(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ct.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(N,D,B){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=rS?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,_,f)&&c.push(n.li.updateTargetData(i,_))});let l=tr(),u=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(cS(i,o,e.documentUpdates).next(f=>{l=f.Bs,u=f.Ls})),!r.isEqual(le.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.vs=s,i))}function cS(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=tr();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(sh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function lS(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uS(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Zl(t,e,n){const r=he(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ti(o))throw o;X(sh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ip(t,e,n){const r=he(t);let s=le.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=he(l),m=p.Fs.get(f);return m!==void 0?F.resolve(p.vs.get(m)):p.li.getTargetData(u,f)}(r,o,Rn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:ye())).next(c=>(hS(r,Yb(e),c),{documents:c,ks:i})))}function hS(t,e,n){let r=t.Ms.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Ap{constructor(){this.activeTargetIds=r0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fS{constructor(){this.vo=new Ap,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ap,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dS{Mo(e){}shutdown(){}}/**
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
 */const Rp="ConnectivityMonitor";class bp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){X(Rp,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){X(Rp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function eu(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
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
 */const ll="RestConnection",pS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class mS{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ka?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=eu(),c=this.Qo(e,n.toUriEncodedString());X(ll,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),f=Vr(u);return this.zo(e,c,l,r,f).then(p=>(X(ll,`Received RPC '${e}' ${o}: `,p),p),p=>{throw as(ll,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=pS[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection",wi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class xs extends mS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!xs.c_){const e=R_();wi(e,A_.STAT_EVENT,n=>{n.stat===$l.PROXY?X(ft,"STAT_EVENT: detected buffering proxy"):n.stat===$l.NOPROXY&&X(ft,"STAT_EVENT: detected no buffering proxy")}),xs.c_=!0}}zo(e,n,r,s,i){const o=eu();return new Promise((c,l)=>{const u=new w_;u.setWithCredentials(!0),u.listenOnce(I_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case aa.NO_ERROR:const p=u.getResponseJson();X(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case aa.TIMEOUT:X(ft,`RPC '${e}' ${o} timed out`),l(new K(x.DEADLINE_EXCEEDED,"Request time out"));break;case aa.HTTP_ERROR:const m=u.getStatus();if(X(ft,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const N=function(B){const V=B.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(V)>=0?V:x.UNKNOWN}(S.status);l(new K(N,S.message))}else l(new K(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(x.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(ft,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);X(ft,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=eu(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");X(ft,`Creating RPC '${e}' stream ${s}: ${u}`,c);const f=o.createWebChannel(u,c);this.I_(f);let p=!1,m=!1;const _=new gS({Ho:S=>{m?X(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(p||(X(ft,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),X(ft,`RPC '${e}' stream ${s} sending:`,S),f.send(S))},Jo:()=>f.close()});return wi(f,bi.EventType.OPEN,()=>{m||(X(ft,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),wi(f,bi.EventType.CLOSE,()=>{m||(m=!0,X(ft,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.E_(f))}),wi(f,bi.EventType.ERROR,S=>{m||(m=!0,as(ft,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),_.o_(new K(x.UNAVAILABLE,"The operation could not be completed")))}),wi(f,bi.EventType.MESSAGE,S=>{var N;if(!m){const D=S.data[0];Se(!!D,16349);const B=D,V=(B==null?void 0:B.error)||((N=B[0])==null?void 0:N.error);if(V){X(ft,`RPC '${e}' stream ${s} received error:`,V);const j=V.status;let H=function(A){const E=Ke[A];if(E!==void 0)return ay(E)}(j),Z=V.message;j==="NOT_FOUND"&&Z.includes("database")&&Z.includes("does not exist")&&Z.includes(this.databaseId.database)&&as(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),H===void 0&&(H=x.INTERNAL,Z="Unknown error status: "+j+" with message "+V.message),m=!0,_.o_(new K(H,Z)),f.close()}else X(ft,`RPC '${e}' stream ${s} received:`,D),_.__(D)}}),xs.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return b_()}}/**
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
 */function _S(t){return new xs(t)}function ul(){return typeof document<"u"?document:null}/**
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
 */function yc(t){return new v0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xs.c_=!1;class wy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="PersistentStream";class Iy{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(Sp,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(X(Sp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yS extends Iy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=A0(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?bn(o.readTime):le.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Xl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Wl(l)?{documents:S0(i,l)}:{query:C0(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=uy(i,o.resumeToken);const u=Ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=xa(i,o.snapshotVersion.toTimestamp());const u=Ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=N0(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Xl(this.serializer),n.removeTarget=e,this.K_(n)}}class ES extends Iy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=b0(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Xl(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>R0(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{}class vS extends TS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Jl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(x.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Jl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(x.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function wS(t,e,n,r){return new vS(t,e,n,r)}class IS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RemoteStore";class AS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ds(this)&&(X(cs,"Restarting streams for network reachability change."),await async function(l){const u=he(l);u.Ea.add(4),await Io(u),u.Va.set("Unknown"),u.Ea.delete(4),await Ec(u)}(this))})}),this.Va=new IS(r,s)}}async function Ec(t){if(ds(t))for(const e of t.Ra)await e(!0)}async function Io(t){for(const e of t.Ra)await e(!1)}function Ay(t,e){const n=he(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ch(n)?ah(n):ri(n).O_()&&oh(n,e))}function ih(t,e){const n=he(t),r=ri(n);n.Ia.delete(e),r.O_()&&Ry(n,e),n.Ia.size===0&&(r.O_()?r.L_():ds(n)&&n.Va.set("Unknown"))}function oh(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ri(t).Z_(e)}function Ry(t,e){t.da.$e(e),ri(t).X_(e)}function ah(t){t.da=new _0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ri(t).start(),t.Va.ua()}function ch(t){return ds(t)&&!ri(t).x_()&&t.Ia.size>0}function ds(t){return he(t).Ea.size===0}function by(t){t.da=void 0}async function RS(t){t.Va.set("Online")}async function bS(t){t.Ia.forEach((e,n)=>{oh(t,e)})}async function SS(t,e){by(t),ch(t)?(t.Va.ha(e),ah(t)):t.Va.set("Unknown")}async function CS(t,e,n){if(t.Va.set("Online"),e instanceof ly&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))}(t,e)}catch(r){X(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await La(t,r)}else if(e instanceof ha?t.da.Xe(e):e instanceof cy?t.da.st(e):t.da.tt(e),!n.isEqual(le.min()))try{const r=await vy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),Ry(i,l);const p=new Er(f.target,l,u,f.sequenceNumber);oh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(cs,"Failed to raise snapshot:",r),await La(t,r)}}async function La(t,e,n){if(!ti(e))throw e;t.Ea.add(1),await Io(t),t.Va.set("Offline"),n||(n=()=>vy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(cs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ec(t)})}function Sy(t,e){return e().catch(n=>La(t,n,e))}async function Tc(t){const e=he(t),n=Nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wu;for(;PS(e);)try{const s=await lS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,NS(e,s)}catch(s){await La(e,s)}Cy(e)&&Py(e)}function PS(t){return ds(t)&&t.Ta.length<10}function NS(t,e){t.Ta.push(e);const n=Nr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Cy(t){return ds(t)&&!Nr(t).x_()&&t.Ta.length>0}function Py(t){Nr(t).start()}async function kS(t){Nr(t).ra()}async function DS(t){const e=Nr(t);for(const n of t.Ta)e.ea(n.mutations)}async function VS(t,e,n){const r=t.Ta.shift(),s=Xu.from(r,e,n);await Sy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Tc(t)}async function xS(t,e){e&&Nr(t).Y_&&await async function(r,s){if(function(o){return p0(o)&&o!==x.ABORTED}(s.code)){const i=r.Ta.shift();Nr(r).B_(),await Sy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Tc(r)}}(t,e),Cy(t)&&Py(t)}async function Cp(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X(cs,"RemoteStore received new credentials");const r=ds(n);n.Ea.add(3),await Io(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ec(n)}async function OS(t,e){const n=he(t);e?(n.Ea.delete(2),await Ec(n)):e||(n.Ea.add(2),await Io(n),n.Va.set("Unknown"))}function ri(t){return t.ma||(t.ma=function(n,r,s){const i=he(n);return i.sa(),new yS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:RS.bind(null,t),Yo:bS.bind(null,t),t_:SS.bind(null,t),J_:CS.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ch(t)?ah(t):t.Va.set("Unknown")):(await t.ma.stop(),by(t))})),t.ma}function Nr(t){return t.fa||(t.fa=function(n,r,s){const i=he(n);return i.sa(),new ES(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kS.bind(null,t),t_:xS.bind(null,t),ta:DS.bind(null,t),na:VS.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Tc(t)):(await t.fa.stop(),t.Ta.length>0&&(X(cs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new lh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uh(t,e){if(er("AsyncQueue",`${e}: ${t}`),ti(t))return new K(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{static emptySet(e){return new Os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Si(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.ga=new Ue(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class zs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new zs(e,n,Os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class MS{constructor(){this.queries=Np(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Np(),i.forEach((o,c)=>{for(const l of c.ba)l.onError(r)})})(this,new K(x.ABORTED,"Firestore shutting down"))}}function Np(){return new fs(t=>K_(t),hc)}async function hh(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new LS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=uh(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&dh(n)}async function fh(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FS(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&dh(n)}function US(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function dh(t){t.Ca.forEach(e=>{e.next()})}var tu,kp;(kp=tu||(tu={})).Ma="default",kp.Cache="cache";class ph{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==tu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.key=e}}class ky{constructor(e){this.key=e}}class BS{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ye(),this.mutatedKeys=ye(),this.eu=Q_(e),this.tu=new Os(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Pp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=fc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;m&&_?m.data.isEqual(_.data)?S!==N&&(r.track({type:3,doc:_}),D=!0):this.su(m,_)||(r.track({type:2,doc:_}),D=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),D=!0):m&&!_&&(r.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(_?(o=o.add(_),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,S){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:D})}};return N(_)-N(S)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new zs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pp,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new ky(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Ny(r))}),n}cu(e){this.Za=e.ks,this.Ya=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return zs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const mh="SyncEngine";class $S{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jS{constructor(e){this.key=e,this.hu=!1}}class qS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fs(c=>K_(c),hc),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ue(re.comparator),this.Au=new Map,this.Vu=new th,this.du={},this.mu=new Map,this.fu=Ws.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function HS(t,e,n=!0){const r=My(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Dy(r,e,n,!0),s}async function GS(t,e){const n=My(t);await Dy(n,e,!0,!1)}async function Dy(t,e,n,r){const s=await uS(t.localStore,Rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await WS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ay(t.remoteStore,s),c}async function WS(t,e,n,r,s){t.pu=(p,m,_)=>async function(N,D,B,V){let j=D.view.ru(B);j.Ss&&(j=await Ip(N.localStore,D.query,!1).then(({documents:A})=>D.view.ru(A,j)));const H=V&&V.targetChanges.get(D.targetId),Z=V&&V.targetMismatches.get(D.targetId)!=null,ee=D.view.applyChanges(j,N.isPrimaryClient,H,Z);return Vp(N,D.targetId,ee.au),ee.snapshot}(t,p,m,_);const i=await Ip(t.localStore,e,!0),o=new BS(e,i.ks),c=o.ru(i.documents),l=wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Vp(t,n,u.au);const f=new $S(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function zS(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!hc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Zl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ih(r.remoteStore,s.targetId),nu(r,s.targetId)}).catch(ei)):(nu(r,s.targetId),await Zl(r.localStore,s.targetId,!0))}async function KS(t,e){const n=he(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ih(n.remoteStore,r.targetId))}async function QS(t,e,n){const r=nC(t);try{const s=await function(o,c){const l=he(o),u=Le.now(),f=c.reduce((_,S)=>_.add(S.key),ye());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=tr(),N=ye();return l.xs.getEntries(_,f).next(D=>{S=D,S.forEach((B,V)=>{V.isValidDocument()||(N=N.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(D=>{p=D;const B=[];for(const V of c){const j=l0(V,p.get(V.key).overlayedDocument);j!=null&&B.push(new Or(V.key,j,B_(j.value.mapValue),Ct.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,B,c)}).next(D=>{m=D;const B=D.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(_,D.batchId,B)})}).then(()=>({batchId:m.batchId,changes:Y_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new Ue(_e)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ao(r,s.changes),await Tc(r.remoteStore)}catch(s){const i=uh(s,"Failed to persist write");n.reject(i)}}async function Vy(t,e){const n=he(t);try{const r=await aS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Se(o.hu,14607):s.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await Ao(n,r,e)}catch(r){await ei(r)}}function Dp(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.ba)m.va(c)&&(u=!0)}),u&&dh(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JS(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ue(re.comparator);o=o.insert(i,gt.newNoDocument(i,le.min()));const c=ye().add(i),l=new _c(le.min(),new Map,new Ue(_e),o,c);await Vy(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),gh(r)}else await Zl(r.localStore,e,!1).then(()=>nu(r,e,n)).catch(ei)}async function YS(t,e){const n=he(t),r=e.batch.batchId;try{const s=await oS(n.localStore,e);Oy(n,r,null),xy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,s)}catch(s){await ei(s)}}async function XS(t,e,n){const r=he(t);try{const s=await function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Se(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);Oy(r,e,n),xy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,s)}catch(s){await ei(s)}}function xy(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Oy(t,e,n){const r=he(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Ly(t,r)})}function Ly(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(ih(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),gh(t))}function Vp(t,e,n){for(const r of n)r instanceof Ny?(t.Vu.addReference(r.key,e),ZS(t,r)):r instanceof ky?(X(mh,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Ly(t,r.key)):ae(19791,{wu:r})}function ZS(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(X(mh,"New document in limbo: "+n),t.Eu.add(r),gh(t))}function gh(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(xe.fromString(e)),r=t.fu.next();t.Au.set(r,new jS(n)),t.Ru=t.Ru.insert(n,r),Ay(t.remoteStore,new Er(Rn(uc(n.path)),r,"TargetPurposeLimboResolution",ac.ce))}}async function Ao(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=rh.Es(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(u,m=>F.forEach(m.Ts,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>F.forEach(m.Is,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!ti(p))throw p;X(sh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.vs.get(m),S=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(S);f.vs=f.vs.insert(m,N)}}}(r.localStore,i))}async function eC(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X(mh,"User change. New user:",e.toKey());const r=await Ty(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new K(x.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.Ns)}}function tC(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let s=ye();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function My(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JS.bind(null,e),e.Pu.J_=FS.bind(null,e.eventManager),e.Pu.yu=US.bind(null,e.eventManager),e}function nC(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XS.bind(null,e),e}class Ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return iS(this.persistence,new nS,e.initialUser,this.serializer)}Cu(e){return new Ey(nh.Vi,this.serializer)}Du(e){return new fS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ma.provider={build:()=>new Ma};class rC extends Ma{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof Oa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $0(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Ey(r=>Oa.Vi(r,n),this.serializer)}}class ru{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eC.bind(null,this.syncEngine),await OS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MS}()}createDatastore(e){const n=yc(e.databaseInfo.databaseId),r=_S(e.databaseInfo);return wS(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new AS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Dp(this.syncEngine,n,0),function(){return bp.v()?new bp:new dS}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new qS(s,i,o,c,l,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);X(cs,"RemoteStore shutting down."),i.Ea.add(5),await Io(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ru.provider={build:()=>new ru};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="FirestoreClient";class sC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hl(t,e){t.asyncQueue.verifyOperationInProgress(),X(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ty(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iC(t);X(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Cp(e.remoteStore,s)),t._onlineComponents=e}async function iC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(kr,"Using user provided OfflineComponentProvider");try{await hl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await hl(t,new Ma)}}else X(kr,"Using default OfflineComponentProvider"),await hl(t,new rC(void 0));return t._offlineComponents}async function Fy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(kr,"Using user provided OnlineComponentProvider"),await xp(t,t._uninitializedComponentsProvider._online)):(X(kr,"Using default OnlineComponentProvider"),await xp(t,new ru))),t._onlineComponents}function oC(t){return Fy(t).then(e=>e.syncEngine)}async function Fa(t){const e=await Fy(t),n=e.eventManager;return n.onListen=HS.bind(null,e.syncEngine),n.onUnlisten=zS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KS.bind(null,e.syncEngine),n}function aC(t,e,n,r){const s=new _h(r),i=new ph(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>hh(await Fa(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>fh(await Fa(t),i))}}function cC(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new _h({next:m=>{f.Nu(),o.enqueueAndForget(()=>fh(i,p));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new K(x.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new K(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ph(uc(c.path),f,{includeMetadataChanges:!0,Ka:!0});return hh(i,p)}(await Fa(t),t.asyncQueue,e,n,r)),r.promise}function lC(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new _h({next:m=>{f.Nu(),o.enqueueAndForget(()=>fh(i,p)),m.fromCache&&l.source==="server"?u.reject(new K(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ph(c,f,{includeMetadataChanges:!0,Ka:!0});return hh(i,p)}(await Fa(t),t.asyncQueue,e,n,r)),r.promise}function uC(t,e){const n=new zn;return t.asyncQueue.enqueueAndForget(async()=>QS(await oC(t),e,n)),n.promise}/**
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
 */function Uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hC="ComponentProvider",Op=new Map;function fC(t,e,n,r,s){return new Db(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Uy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const By="firestore.googleapis.com",Lp=!0;class Mp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=By,this.ssl=Lp}else this.host=e.host,this.ssl=e.ssl??Lp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<U0)throw new K(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uy(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hb;switch(r.type){case"firstParty":return new mb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Op.get(n);r&&(X(hC,"Removing Datastore"),Op.delete(n),r.terminate())}(this),Promise.resolve()}}function dC(t,e,n,r={}){var u;t=St(t,vc);const s=Vr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Pu(`https://${c}`),Nu("Firestore",!0)),i.host!==By&&i.host!==c&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Yn(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=pt.MOCK_USER;else{f=Fg(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pt(m)}t._authCredentials=new fb(new C_(f,p))}}/**
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
 */class Lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lr(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(To(n,je._jsonSchema))return new je(e,r||null,new re(xe.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Je("string",je._jsonSchemaVersion),referencePath:Je("string")};class Ir extends Lr{constructor(e,n,r){super(e,n,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new re(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function pC(t,e,...n){if(t=Me(t),P_("collection","path",e),t instanceof vc){const r=xe.fromString(e,...n);return Jd(r),new Ir(t,null,r)}{if(!(t instanceof je||t instanceof Ir))throw new K(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Jd(r),new Ir(t.firestore,null,r)}}function mC(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Gu.newId()),P_("doc","path",e),t instanceof vc){const r=xe.fromString(e,...n);return Qd(r),new je(t,null,new re(r))}{if(!(t instanceof je||t instanceof Ir))throw new K(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Qd(r),new je(t.firestore,t instanceof Ir?t.converter:null,new re(r))}}/**
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
 */const Fp="AsyncQueue";class Up{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wy(this,"async_queue_retry"),this._c=()=>{const r=ul();r&&X(Fp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ul();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ti(e))throw e;X(Fp,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",Bp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=lh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ae(47125,{Pc:Bp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Bp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class kn extends vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Up,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Up(e),this._firestoreClient=void 0,await e}}}function gC(t,e){const n=typeof t=="object"?t:Vu(),r=typeof t=="string"?t:ka,s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Og("firestore");i&&dC(s,...i)}return s}function Ro(t){if(t._terminated)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_C(t),t._firestoreClient}function _C(t){var r,s,i,o;const e=t._freezeSettings(),n=fC(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new sC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(ct.fromBase64String(e))}catch(n){throw new K(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(To(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Je("string",Kt._jsonSchemaVersion),bytes:Je("string")};/**
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
 */class wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ps{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sn._jsonSchemaVersion}}static fromJSON(e){if(To(e,Sn._jsonSchema))return new Sn(e.latitude,e.longitude)}}Sn._jsonSchemaVersion="firestore/geoPoint/1.0",Sn._jsonSchema={type:Je("string",Sn._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(To(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sn(e.vectorValues);throw new K(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:Je("string",sn._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=/^__.*__$/;class EC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}class $y{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{dataSource:t})}}class Ic{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ic({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ua(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(jy(this.dataSource)&&yC.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class TC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yc(e)}createContext(e,n,r,s=!1){return new Ic({dataSource:e,methodName:n,targetDoc:r,path:at.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bo(t){const e=t._freezeSettings(),n=yc(t._databaseId);return new TC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yh(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Ih("Data must be an object, but it was:",o,r);const c=Wy(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ls(e,p,n);if(!o.contains(m))throw new K(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Qy(f,m)||f.push(m)}l=new Ht(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new EC(new xt(c),l,u)}class Ac extends ps{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function qy(t,e,n){return new Ic({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Eh extends ps{_toFieldTransform(e){return new pc(e.path,new ao)}isEqual(e){return e instanceof Eh}}class Th extends ps{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=qy(this,e,!0),r=this.Ac.map(i=>ms(i,n)),s=new Hs(r);return new pc(e.path,s)}isEqual(e){return e instanceof Th&&Yn(this.Ac,e.Ac)}}class vh extends ps{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=qy(this,e,!0),r=this.Ac.map(i=>ms(i,n)),s=new Gs(r);return new pc(e.path,s)}isEqual(e){return e instanceof vh&&Yn(this.Ac,e.Ac)}}class wh extends ps{constructor(e,n){super(e),this.Vc=n}_toFieldTransform(e){const n=new co(e.serializer,ey(e.serializer,this.Vc));return new pc(e.path,n)}isEqual(e){return e instanceof wh&&this.Vc===e.Vc}}function Hy(t,e,n,r){const s=t.createContext(1,e,n);Ih("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();xr(r,(l,u)=>{const f=Ky(e,l,n);u=Me(u);const p=s.childContextForFieldPath(f);if(u instanceof Ac)i.push(f);else{const m=ms(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new Ht(i);return new $y(o,c,s.fieldTransforms)}function Gy(t,e,n,r,s,i){const o=t.createContext(1,e,n),c=[ls(e,r,n)],l=[s];if(i.length%2!=0)throw new K(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ls(e,i[m])),l.push(i[m+1]);const u=[],f=xt.empty();for(let m=c.length-1;m>=0;--m)if(!Qy(u,c[m])){const _=c[m];let S=l[m];S=Me(S);const N=o.childContextForFieldPath(_);if(S instanceof Ac)u.push(_);else{const D=ms(S,N);D!=null&&(u.push(_),f.set(_,D))}}const p=new Ht(u);return new $y(f,p,o.fieldTransforms)}function vC(t,e,n,r=!1){return ms(n,t.createContext(r?4:3,e))}function ms(t,e){if(zy(t=Me(t)))return Ih("Unsupported field value:",e,t),Wy(t,e);if(t instanceof ps)return function(r,s){if(!jy(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ms(c,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ey(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:xa(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xa(s.serializer,i)}}if(r instanceof Sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:uy(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:eh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof sn)return function(o,c){const l=o instanceof sn?o.toArray():o;return{mapValue:{fields:{[F_]:{stringValue:U_},[Da]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Yu(c.serializer,f)})}}}}}}(r,s);if(_y(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${oc(r)}`)}(t,e)}function Wy(t,e){const n={};return D_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(r,s)=>{const i=ms(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Sn||t instanceof Kt||t instanceof je||t instanceof ps||t instanceof sn||_y(t))}function Ih(t,e,n){if(!zy(n)||!N_(n)){const r=oc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function ls(t,e,n){if((e=Me(e))instanceof wc)return e._internalPath;if(typeof e=="string")return Ky(t,e);throw Ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const wC=new RegExp("[~\\*/\\[\\]]");function Ky(t,e,n){if(e.search(wC)>=0)throw Ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wc(...e.split("."))._internalPath}catch{throw Ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new K(x.INVALID_ARGUMENT,c+t+l)}function Qy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class IC{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Da].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ze(o.doubleValue));return new sn(n)}convertGeoPoint(e){return new Sn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Se(gy(r),9688,{name:e});const s=new so(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends IC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function kN(){return new Eh("serverTimestamp")}function DN(...t){return new Th("arrayUnion",t)}function VN(...t){return new vh("arrayRemove",t)}function xN(t){return new wh("increment",t)}const $p="@firebase/firestore",jp="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class Jy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ls("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AC extends Jy{data(){return super.data()}}/**
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
 */function Yy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rh{}class Xy extends Rh{}function RC(t,e,...n){let r=[];e instanceof Rh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof bh).length,c=i.filter(l=>l instanceof Rc).length;if(o>1||o>0&&c>0)throw new K(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Rc extends Xy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rc(e,n,r)}_apply(e){const n=this._parse(e);return Zy(e._query,n),new Lr(e.firestore,e.converter,zl(e._query,n))}_parse(e){const n=bo(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Gp(p,f);const S=[];for(const N of p)S.push(Hp(l,i,N));m={arrayValue:{values:S}}}else m=Hp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Gp(p,f),m=vC(c,o,p,f==="in"||f==="not-in");return Qe.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bC(t,e,n){const r=e,s=ls("where",t);return Rc._create(s,r,n)}class bh extends Rh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Zy(o,l),o=zl(o,l)}(e._query,n),new Lr(e.firestore,e.converter,zl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sh extends Xy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Sh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oo(i,o)}(e._query,this._field,this._direction);return new Lr(e.firestore,e.converter,Jb(e._query,n))}}function ON(t,e="asc"){const n=e,r=ls("orderBy",t);return Sh._create(r,n)}function Hp(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new K(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!z_(e)&&n.indexOf("/")!==-1)throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!re.isDocumentKey(r))throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sp(t,new re(r))}if(n instanceof je)return sp(t,n._key);throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(n)}.`)}function Gp(t,e){if(!Array.isArray(t)||t.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ch(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends Jy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ls("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:Je("string",ts._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class fa extends ts{data(e={}){return super.data(e)}}class ns{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fa(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new fa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new fa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:SC(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}/**
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
 */ns._jsonSchemaVersion="firestore/querySnapshot/1.0",ns._jsonSchema={type:Je("string",ns._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};/**
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
 */class CC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=bo(e)}set(e,n,r){this._verifyNotCommitted();const s=fl(e,this._firestore),i=Ch(s.converter,n,r),o=yh(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ct.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=fl(e,this._firestore);let o;return o=typeof(n=Me(n))=="string"||n instanceof wc?Gy(this._dataReader,"WriteBatch.update",i._key,n,r,s):Hy(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ct.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=fl(e,this._firestore);return this._mutations=this._mutations.concat(new gc(n._key,Ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fl(t,e){if((t=Me(t)).firestore!==e)throw new K(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function LN(t){t=St(t,je);const e=St(t.firestore,kn),n=Ro(e);return cC(n,t._key).then(r=>eE(e,t,r))}function MN(t){t=St(t,Lr);const e=St(t.firestore,kn),n=Ro(e),r=new Ah(e);return Yy(t._query),lC(n,t._query).then(s=>new ns(e,r,t,s))}function FN(t,e,n){t=St(t,je);const r=St(t.firestore,kn),s=Ch(t.converter,e,n),i=bo(r);return So(r,[yh(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ct.none())])}function UN(t,e,n,...r){t=St(t,je);const s=St(t.firestore,kn),i=bo(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof wc?Gy(i,"updateDoc",t._key,e,n,r):Hy(i,"updateDoc",t._key,e),So(s,[o.toMutation(t._key,Ct.exists(!0))])}function BN(t){return So(St(t.firestore,kn),[new gc(t._key,Ct.none())])}function $N(t,e){const n=St(t.firestore,kn),r=mC(t),s=Ch(t.converter,e),i=bo(t.firestore);return So(n,[yh(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function PC(t,...e){var u,f,p;t=Me(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||qp(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(qp(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,c;if(t instanceof je)o=St(t.firestore,kn),c=uc(t._key.path),i={next:m=>{e[r]&&e[r](eE(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=St(t,Lr);o=St(m.firestore,kn),c=m._query;const _=new Ah(o);i={next:S=>{e[r]&&e[r](new ns(o,_,m,S))},error:e[r+1],complete:e[r+2]},Yy(t._query)}const l=Ro(o);return aC(l,c,s,i)}function So(t,e){const n=Ro(t);return uC(n,e)}function eE(t,e,n){const r=n.docs.get(e._key),s=new Ah(t);return new ts(t,s,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}function jN(t){return t=St(t,kn),Ro(t),new CC(t,e=>So(t,e))}(function(e,n=!0){ub(hs),ss(new Rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new kn(new db(r.getProvider("auth-internal")),new gb(o,r.getProvider("app-check-internal")),Vb(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),In($p,jp,e),In($p,jp,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="firebasestorage.googleapis.com",nE="storageBucket",NC=2*60*1e3,kC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Dn{constructor(e,n,r=0){super(dl(e),`Firebase Storage: ${n} (${dl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function dl(t){return"storage/"+t}function Ph(){const t="An unknown error occurred, please check the error payload for server response.";return new Ge(He.UNKNOWN,t)}function DC(t){return new Ge(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function VC(t){return new Ge(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(He.UNAUTHENTICATED,t)}function OC(){return new Ge(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LC(t){return new Ge(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MC(){return new Ge(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FC(){return new Ge(He.CANCELED,"User canceled the upload/download.")}function UC(t){return new Ge(He.INVALID_URL,"Invalid URL '"+t+"'.")}function BC(t){return new Ge(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $C(){return new Ge(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nE+"' property when initializing the app?")}function jC(){return new Ge(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qC(){return new Ge(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HC(t){return new Ge(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function su(t){return new Ge(He.INVALID_ARGUMENT,t)}function rE(){return new Ge(He.APP_DELETED,"The Firebase app was deleted.")}function GC(t){return new Ge(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hi(t,e){return new Ge(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ii(t){throw new Ge(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(r.path==="")return r;throw BC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),S={bucket:1,path:3},N=n===tE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",B=new RegExp(`^https?://${N}/${s}/${D}`,"i"),j=[{regex:c,indices:l,postModify:i},{regex:_,indices:S,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<j.length;H++){const Z=j[H],ee=Z.regex.exec(e);if(ee){const A=ee[Z.indices.bucket];let E=ee[Z.indices.path];E||(E=""),r=new Gt(A,E),Z.postModify(r);break}}if(r==null)throw UC(e);return r}}class WC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(_,l())},D)}function m(){i&&clearTimeout(i)}function _(D,...B){if(u){m();return}if(D){m(),f.call(null,D,...B);return}if(l()||o){m(),f.call(null,D,...B);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,p(j)}let S=!1;function N(D){S||(S=!0,m(),!u&&(s!==null?(D||(c=2),clearTimeout(s),p(0)):D||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function KC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){return t!==void 0}function JC(t){return typeof t=="object"&&!Array.isArray(t)}function Nh(t){return typeof t=="string"||t instanceof String}function Wp(t){return kh()&&t instanceof Blob}function kh(){return typeof Blob<"u"}function zp(t,e,n,r){if(r<e)throw su(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw su(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var rs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(rs||(rs={}));/**
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
 */function YC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ko(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===rs.NO_ERROR,l=i.getStatus();if(!c||YC(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===rs.ABORT;r(!1,new Ko(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ko(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());QC(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Ph();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?rE():FC();o(l)}else{const l=MC();o(l)}};this.canceled_?n(!1,new Ko(!1,null,!0)):this.backoffId_=zC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ko{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rP(t,e,n,r,s,i,o=!0,c=!1){const l=sE(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return tP(f,e),ZC(f,n),eP(f,i),nP(f,r),new XC(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iP(...t){const e=sP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kh())return new Blob(t);throw new Ge(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aP(t){if(typeof atob>"u")throw HC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pl{constructor(e,n){this.data=e,this.contentType=n||null}}function cP(t,e){switch(t){case vn.RAW:return new pl(iE(e));case vn.BASE64:case vn.BASE64URL:return new pl(oE(t,e));case vn.DATA_URL:return new pl(uP(e),hP(e))}throw Ph()}function iE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lP(t){let e;try{e=decodeURIComponent(t)}catch{throw Hi(vn.DATA_URL,"Malformed data URL.")}return iE(e)}function oE(t,e){switch(t){case vn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Hi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Hi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aP(e)}catch(s){throw s.message.includes("polyfill")?s:Hi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class aE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Hi(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uP(t){const e=new aE(t);return e.base64?oE(vn.BASE64,e.rest):lP(e.rest)}function hP(t){return new aE(t).contentType}function fP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){let r=0,s="";Wp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Wp(this.data_)){const r=this.data_,s=oP(r,e,n);return s===null?null:new yr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yr(r,!0)}}static getBlob(...e){if(kh()){const n=e.map(r=>r instanceof yr?r.data_:r);return new yr(iP.apply(null,n))}else{const n=e.map(o=>Nh(o)?cP(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new yr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){let e;try{e=JSON.parse(t)}catch{return null}return JC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function lE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e){return e}class vt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||mP}}let Qo=null;function gP(t){return!Nh(t)||t.length<2?t:lE(t)}function uE(){if(Qo)return Qo;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(i,o){return gP(o)}const n=new vt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new vt("size");return s.xform=r,t.push(s),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),Qo=t,Qo}function _P(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function yP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return _P(r,t),r}function hE(t,e,n){const r=cE(e);return r===null?null:yP(t,r,n)}function EP(t,e,n,r){const s=cE(e);if(s===null||!Nh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),_=bc(m,n,r),S=sE({alt:"media",token:u});return _+S})[0]}function TP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Dh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){if(!t)throw Ph()}function vP(t,e){function n(r,s){const i=hE(t,s,e);return fE(i!==null),i}return n}function wP(t,e){function n(r,s){const i=hE(t,s,e);return fE(i!==null),EP(i,s,t.host,t._protocol)}return n}function dE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=OC():s=xC():n.getStatus()===402?s=VC(t.bucket):n.getStatus()===403?s=LC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pE(t){const e=dE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=DC(t.path)),i.serverResponse=s.serverResponse,i}return n}function IP(t,e,n){const r=e.fullServerUrl(),s=bc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Dh(s,i,wP(t,n),o);return c.errorHandler=pE(e),c}function AP(t,e){const n=e.fullServerUrl(),r=bc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,u){}const c=new Dh(r,s,o,i);return c.successCodes=[200,204],c.errorHandler=pE(e),c}function RP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RP(null,e)),r}function SP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let j="";for(let H=0;H<2;H++)j=j+Math.random().toString().slice(2);return j}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=bP(e,r,s),f=TP(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=yr.getBlob(p,r,m);if(_===null)throw jC();const S={name:u.fullPath},N=bc(i,t.host,t._protocol),D="POST",B=t.maxUploadRetryTime,V=new Dh(N,D,vP(t,n),B);return V.urlParams=S,V.headers=o,V.body=_.uploadData(),V.errorHandler=dE(e),V}class CP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=rs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=rs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=rs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ii("cannot .send() more than once");if(Vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ii("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ii("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ii("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ii("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PP extends CP{initXhr(){this.xhr_.responseType="text"}}function Vh(){return new PP}/**
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
 */class us{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new us(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lE(this._location.path)}get storage(){return this._service}get parent(){const e=dP(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new us(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GC(e)}}function NP(t,e,n){t._throwIfRoot("uploadBytes");const r=SP(t.storage,t._location,uE(),new yr(e,!0),n);return t.storage.makeRequestWithTokens(r,Vh).then(s=>({metadata:s,ref:t}))}function kP(t){t._throwIfRoot("getDownloadURL");const e=IP(t.storage,t._location,uE());return t.storage.makeRequestWithTokens(e,Vh).then(n=>{if(n===null)throw qC();return n})}function DP(t){t._throwIfRoot("deleteObject");const e=AP(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Vh)}function VP(t,e){const n=pP(t._location.path,e),r=new Gt(t._location.bucket,n);return new us(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){return/^[A-Za-z]+:\/\//.test(t)}function OP(t,e){return new us(t,e)}function mE(t,e){if(t instanceof xh){const n=t;if(n._bucket==null)throw $C();const r=new us(n,n._bucket);return e!=null?mE(r,e):r}else return e!==void 0?VP(t,e):t}function LP(t,e){if(e&&xP(e)){if(t instanceof xh)return OP(t,e);throw su("To use ref(service, url), the first argument must be a Storage instance.")}else return mE(t,e)}function Kp(t,e){const n=e==null?void 0:e[nE];return n==null?null:Gt.makeFromBucketSpec(n,t)}function MP(t,e,n,r={}){t.host=`${e}:${n}`;const s=Vr(e);s&&(Pu(`https://${t.host}/b`),Nu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Fg(i,t.app.options.projectId))}class xh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=tE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NC,this._maxUploadRetryTime=kC,this._requests=new Set,s!=null?this._bucket=Gt.makeFromBucketSpec(s,this._host):this._bucket=Kp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=Kp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new us(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new WC(rE());{const o=rP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Qp="@firebase/storage",Jp="0.14.1";/**
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
 */const gE="storage";function qN(t,e,n){return t=Me(t),NP(t,e,n)}function HN(t){return t=Me(t),kP(t)}function GN(t){return t=Me(t),DP(t)}function WN(t,e){return t=Me(t),LP(t,e)}function FP(t=Vu(),e){t=Me(t);const r=nc(t,gE).getImmediate({identifier:e}),s=Og("storage");return s&&UP(r,...s),r}function UP(t,e,n,r={}){MP(t,e,n,r)}function BP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xh(n,r,s,e,hs)}function $P(){ss(new Rr(gE,BP,"PUBLIC").setMultipleInstances(!0)),In(Qp,Jp,""),In(Qp,Jp,"esm2020")}$P();const jP={apiKey:"AIzaSyB165ycYidryPXkKOWsd73mnw8olhoYThc",authDomain:"fishdex-ac331.firebaseapp.com",projectId:"fishdex-ac331",storageBucket:"fishdex-ac331.firebasestorage.app",messagingSenderId:"484181647433",appId:"1:484181647433:web:ad996470babc6c6642df98"},Oh=$g(jP),Lh=ob(Oh),zN=new $n,qP=gC(Oh),KN=FP(Oh),jn=Ms(null),Yp=Ms(!1);/*!
 * vue-router v5.0.3
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const bs=typeof document<"u";function _E(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function HP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&_E(t.default)}const Re=Object.assign;function ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const Gi=()=>{},ln=Array.isArray;function Xp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}let $e=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const yE=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function Ks(t,e){return Re(new Error,{type:t,[yE]:!0},e)}function Ln(t,e){return t instanceof Error&&yE in t&&(e==null||!!(t.type&e))}const GP=["params","query","hash"];function WP(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of GP)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const zP=Symbol(""),Zp=Symbol(""),Sc=Symbol(""),Mh=Symbol(""),iu=Symbol("");function KP(){return nn(Sc)}function QN(t){return nn(Mh)}/*!
 * vue-router v5.0.3
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const EE=/#/g,QP=/&/g,JP=/\//g,YP=/=/g,XP=/\?/g,TE=/\+/g,ZP=/%5B/g,e1=/%5D/g,vE=/%5E/g,t1=/%60/g,wE=/%7B/g,n1=/%7C/g,IE=/%7D/g,r1=/%20/g;function Fh(t){return t==null?"":encodeURI(""+t).replace(n1,"|").replace(ZP,"[").replace(e1,"]")}function s1(t){return Fh(t).replace(wE,"{").replace(IE,"}").replace(vE,"^")}function ou(t){return Fh(t).replace(TE,"%2B").replace(r1,"+").replace(EE,"%23").replace(QP,"%26").replace(t1,"`").replace(wE,"{").replace(IE,"}").replace(vE,"^")}function i1(t){return ou(t).replace(YP,"%3D")}function o1(t){return Fh(t).replace(EE,"%23").replace(XP,"%3F")}function a1(t){return o1(t).replace(JP,"%2F")}function lo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const c1=/\/$/,l1=t=>t.replace(c1,"");function gl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=d1(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:lo(o)}}function u1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function em(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h1(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qs(e.matched[r],n.matched[s])&&AE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function AE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!f1(t[n],e[n]))return!1;return!0}function f1(t,e){return ln(t)?tm(t,e):ln(e)?tm(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function tm(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function d1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const hr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let au=function(t){return t.pop="pop",t.push="push",t}({}),_l=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function p1(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),l1(t)}const m1=/^[^#]+#/;function g1(t,e){return t.replace(m1,"#")+e}function _1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Cc=()=>({left:window.scrollX,top:window.scrollY});function y1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nm(t,e){return(history.state?history.state.position-e:-1)+t}const cu=new Map;function E1(t,e){cu.set(t,e)}function T1(t){const e=cu.get(t);return cu.delete(t),e}function v1(t){return typeof t=="string"||t&&typeof t=="object"}function RE(t){return typeof t=="string"||typeof t=="symbol"}function w1(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(TE," "),i=s.indexOf("="),o=lo(i<0?s:s.slice(0,i)),c=i<0?null:lo(s.slice(i+1));if(o in e){let l=e[o];ln(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function rm(t){let e="";for(let n in t){const r=t[n];if(n=i1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(s=>s&&ou(s)):[r&&ou(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function I1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Ai(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ks($e.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):v1(m)?l(Ks($e.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function yl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(_E(l)){const u=(l.__vccOpts||l)[e];u&&i.push(dr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=HP(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&dr(m,n,r,o,c,s)()}))}}return i}function A1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Qs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Qs(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v5.0.3
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let R1=()=>location.protocol+"//"+location.host;function bE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),em(c,"")}return em(n,t)+r+s}function b1(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=bE(t,location),S=n.value,N=e.value;let D=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}D=N?m.position-N.position:0}else r(_);s.forEach(B=>{B(n.value,S,{delta:D,type:au.pop,direction:D?D>0?_l.forward:_l.back:_l.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Re({},m.state,{scroll:Cc()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function sm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Cc():null}}function S1(t){const{history:e,location:n}=window,r={value:bE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:R1()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Re({},e.state,sm(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:Cc()});i(f.current,f,!0),i(l,Re({},sm(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function C1(t){t=p1(t);const e=S1(t),n=b1(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:g1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Yr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Xe=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Xe||{});const P1={type:Yr.Static,value:""},N1=/[a-zA-Z0-9_]/;function k1(t){if(!t)return[[]];if(t==="/")return[[P1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Xe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Xe.Static?i.push({type:Yr.Static,value:u}):n===Xe.Param||n===Xe.ParamRegExp||n===Xe.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Yr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Xe.ParamRegExp){r=n,n=Xe.EscapeNext;continue}switch(n){case Xe.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Xe.Param):m();break;case Xe.EscapeNext:m(),n=r;break;case Xe.Param:l==="("?n=Xe.ParamRegExp:N1.test(l)?m():(p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Xe.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Xe.ParamRegExpEnd:f+=l;break;case Xe.ParamRegExpEnd:p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Xe.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const im="[^/]+?",D1={sensitive:!1,strict:!1,start:!0,end:!0};var It=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(It||{});const V1=/[.+*?^${}()[\]/\\]/g;function x1(t,e){const n=Re({},D1,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[It.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=It.Segment+(n.sensitive?It.BonusCaseSensitive:0);if(m.type===Yr.Static)p||(s+="/"),s+=m.value.replace(V1,"\\$&"),_+=It.Static;else if(m.type===Yr.Param){const{value:S,repeatable:N,optional:D,regexp:B}=m;i.push({name:S,repeatable:N,optional:D});const V=B||im;if(V!==im){_+=It.BonusCustomRegExp;try{new RegExp(`(${V})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${S}" (${V}): `+H.message)}}let j=N?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;p||(j=D&&u.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,_+=It.Dynamic,D&&(_+=It.BonusOptional),N&&(_+=It.BonusRepeatable),V===".*"&&(_+=It.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=It.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===Yr.Static)f+=_.value;else if(_.type===Yr.Param){const{value:S,repeatable:N,optional:D}=_,B=S in u?u[S]:"";if(ln(B)&&!N)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const V=ln(B)?B.join("/"):B;if(!V)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=V}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function O1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===It.Static+It.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===It.Static+It.Segment?1:-1:0}function SE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=O1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(om(r))return 1;if(om(s))return-1}return s.length-r.length}function om(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const L1={strict:!1,end:!0,sensitive:!1};function M1(t,e,n){const r=x1(k1(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function F1(t,e){const n=[],r=new Map;e=Xp(L1,e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,N=cm(p);N.aliasOf=_&&_.record;const D=Xp(e,p),B=[N];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of H)B.push(cm(Re({},N,{components:_?_.record.components:N.components,path:Z,aliasOf:_?_.record:N})))}let V,j;for(const H of B){const{path:Z}=H;if(m&&Z[0]!=="/"){const ee=m.record.path,A=ee[ee.length-1]==="/"?"":"/";H.path=m.record.path+(Z&&A+Z)}if(V=M1(H,m,D),_?_.alias.push(V):(j=j||V,j!==V&&j.alias.push(V),S&&p.name&&!lm(V)&&o(p.name)),CE(V)&&l(V),N.children){const ee=N.children;for(let A=0;A<ee.length;A++)i(ee[A],V,_&&_.children[A])}_=_||V}return j?()=>{o(j)}:Gi}function o(p){if(RE(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=$1(p,n);n.splice(m,0,p),p.record.name&&!lm(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},N,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ks($e.MATCHER_NOT_FOUND,{location:p});D=_.record.name,S=Re(am(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&am(p.params,_.keys.map(j=>j.name))),N=_.stringify(S)}else if(p.path!=null)N=p.path,_=n.find(j=>j.re.test(N)),_&&(S=_.parse(N),D=_.record.name);else{if(_=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw Ks($e.MATCHER_NOT_FOUND,{location:p,currentLocation:m});D=_.record.name,S=Re({},m.params,p.params),N=_.stringify(S)}const B=[];let V=_;for(;V;)B.unshift(V.record),V=V.parent;return{name:D,path:N,params:S,matched:B,meta:B1(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function am(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:U1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function U1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function lm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B1(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function $1(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;SE(t,e[i])<0?r=i:n=i+1}const s=j1(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function j1(t){let e=t;for(;e=e.parent;)if(CE(e)&&SE(t,e)===0)return e}function CE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function um(t){const e=nn(Sc),n=nn(Mh),r=Zt(()=>{const l=$t(t.to);return e.resolve(l)}),s=Zt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Qs.bind(null,f));if(m>-1)return m;const _=hm(l[u-2]);return u>1&&hm(f)===_&&p[p.length-1].path!==_?p.findIndex(Qs.bind(null,l[u-2])):m}),i=Zt(()=>s.value>-1&&z1(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&AE(n.params,r.value.params));function c(l={}){if(W1(l)){const u=e[$t(t.replace)?"replace":"push"]($t(t.to)).catch(Gi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function q1(t){return t.length===1?t[0]:t}const H1=ng({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:um,setup(t,{slots:e}){const n=za(um(t)),{options:r}=nn(Sc),s=Zt(()=>({[fm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&q1(e.default(n));return t.custom?i:Cu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),G1=H1;function W1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function hm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fm=(t,e,n)=>t??e??n,K1=ng({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nn(iu),s=Zt(()=>t.route||r.value),i=nn(Zp,0),o=Zt(()=>{let u=$t(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Zt(()=>s.value.matched[o.value]);Yo(Zp,Zt(()=>o.value+1)),Yo(zP,c),Yo(iu,s);const l=Ms();return Xo(()=>[l.value,c.value,t.name],([u,f,p],[m,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Qs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return dm(n.default,{Component:m,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,D=Cu(m,Re({},S,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return dm(n.default,{Component:D,route:u})||D}}});function dm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Q1=K1;function J1(t){const e=F1(t.routes,t),n=t.parseQuery||w1,r=t.stringifyQuery||rm,s=t.history,i=Ai(),o=Ai(),c=Ai(),l=kT(hr);let u=hr;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ml.bind(null,M=>""+M),p=ml.bind(null,a1),m=ml.bind(null,lo);function _(M,Y){let Q,te;return RE(M)?(Q=e.getRecordMatcher(M),te=Y):te=M,e.addRoute(te,Q)}function S(M){const Y=e.getRecordMatcher(M);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(M=>M.record)}function D(M){return!!e.getRecordMatcher(M)}function B(M,Y){if(Y=Re({},Y||l.value),typeof M=="string"){const C=gl(n,M,Y.path),O=e.resolve({path:C.path},Y),U=s.createHref(C.fullPath);return Re(C,O,{params:m(O.params),hash:lo(C.hash),redirectedFrom:void 0,href:U})}let Q;if(M.path!=null)Q=Re({},M,{path:gl(n,M.path,Y.path).path});else{const C=Re({},M.params);for(const O in C)C[O]==null&&delete C[O];Q=Re({},M,{params:p(C)}),Y.params=p(Y.params)}const te=e.resolve(Q,Y),me=M.hash||"";te.params=f(m(te.params));const v=u1(r,Re({},M,{hash:s1(me),path:te.path})),w=s.createHref(v);return Re({fullPath:v,hash:me,query:r===rm?I1(M.query):M.query||{}},te,{redirectedFrom:void 0,href:w})}function V(M){return typeof M=="string"?gl(n,M,l.value.path):Re({},M)}function j(M,Y){if(u!==M)return Ks($e.NAVIGATION_CANCELLED,{from:Y,to:M})}function H(M){return A(M)}function Z(M){return H(Re(V(M),{replace:!0}))}function ee(M,Y){const Q=M.matched[M.matched.length-1];if(Q&&Q.redirect){const{redirect:te}=Q;let me=typeof te=="function"?te(M,Y):te;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=V(me):{path:me},me.params={}),Re({query:M.query,hash:M.hash,params:me.path!=null?{}:M.params},me)}}function A(M,Y){const Q=u=B(M),te=l.value,me=M.state,v=M.force,w=M.replace===!0,C=ee(Q,te);if(C)return A(Re(V(C),{state:typeof C=="object"?Re({},me,C.state):me,force:v,replace:w}),Y||Q);const O=Q;O.redirectedFrom=Y;let U;return!v&&h1(r,te,Q)&&(U=Ks($e.NAVIGATION_DUPLICATED,{to:O,from:te}),Ot(te,te,!0,!1)),(U?Promise.resolve(U):b(O,te)).catch(L=>Ln(L)?Ln(L,$e.NAVIGATION_GUARD_REDIRECT)?L:un(L):Ee(L,O,te)).then(L=>{if(L){if(Ln(L,$e.NAVIGATION_GUARD_REDIRECT))return A(Re({replace:w},V(L.to),{state:typeof L.to=="object"?Re({},me,L.to.state):me,force:v}),Y||O)}else L=I(O,te,!0,w,me);return R(O,te,L),L})}function E(M,Y){const Q=j(M,Y);return Q?Promise.reject(Q):Promise.resolve()}function y(M){const Y=Jt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(M):M()}function b(M,Y){let Q;const[te,me,v]=A1(M,Y);Q=yl(te.reverse(),"beforeRouteLeave",M,Y);for(const C of te)C.leaveGuards.forEach(O=>{Q.push(dr(O,M,Y))});const w=E.bind(null,M,Y);return Q.push(w),lt(Q).then(()=>{Q=[];for(const C of i.list())Q.push(dr(C,M,Y));return Q.push(w),lt(Q)}).then(()=>{Q=yl(me,"beforeRouteUpdate",M,Y);for(const C of me)C.updateGuards.forEach(O=>{Q.push(dr(O,M,Y))});return Q.push(w),lt(Q)}).then(()=>{Q=[];for(const C of v)if(C.beforeEnter)if(ln(C.beforeEnter))for(const O of C.beforeEnter)Q.push(dr(O,M,Y));else Q.push(dr(C.beforeEnter,M,Y));return Q.push(w),lt(Q)}).then(()=>(M.matched.forEach(C=>C.enterCallbacks={}),Q=yl(v,"beforeRouteEnter",M,Y,y),Q.push(w),lt(Q))).then(()=>{Q=[];for(const C of o.list())Q.push(dr(C,M,Y));return Q.push(w),lt(Q)}).catch(C=>Ln(C,$e.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function R(M,Y,Q){c.list().forEach(te=>y(()=>te(M,Y,Q)))}function I(M,Y,Q,te,me){const v=j(M,Y);if(v)return v;const w=Y===hr,C=bs?history.state:{};Q&&(te||w?s.replace(M.fullPath,Re({scroll:w&&C&&C.scroll},me)):s.push(M.fullPath,me)),l.value=M,Ot(M,Y,Q,w),un()}let T;function ve(){T||(T=s.listen((M,Y,Q)=>{if(!Yt.listening)return;const te=B(M),me=ee(te,Yt.currentRoute.value);if(me){A(Re(me,{replace:!0,force:!0}),te).catch(Gi);return}u=te;const v=l.value;bs&&E1(nm(v.fullPath,Q.delta),Cc()),b(te,v).catch(w=>Ln(w,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?w:Ln(w,$e.NAVIGATION_GUARD_REDIRECT)?(A(Re(V(w.to),{force:!0}),te).then(C=>{Ln(C,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===au.pop&&s.go(-1,!1)}).catch(Gi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),Ee(w,te,v))).then(w=>{w=w||I(te,v,!1),w&&(Q.delta&&!Ln(w,$e.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===au.pop&&Ln(w,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(te,v,w)}).catch(Gi)}))}let We=Ai(),Fe=Ai(),Ae;function Ee(M,Y,Q){un(M);const te=Fe.list();return te.length?te.forEach(me=>me(M,Y,Q)):console.error(M),Promise.reject(M)}function Pt(){return Ae&&l.value!==hr?Promise.resolve():new Promise((M,Y)=>{We.add([M,Y])})}function un(M){return Ae||(Ae=!M,ve(),We.list().forEach(([Y,Q])=>M?Q(M):Y()),We.reset()),M}function Ot(M,Y,Q,te){const{scrollBehavior:me}=t;if(!bs||!me)return Promise.resolve();const v=!Q&&T1(nm(M.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return wu().then(()=>me(M,Y,v)).then(w=>w&&y1(w)).catch(w=>Ee(w,M,Y))}const st=M=>s.go(M);let Vn;const Jt=new Set,Yt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:B,options:t,push:H,replace:Z,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Fe.add,isReady:Pt,install(M){M.component("RouterLink",G1),M.component("RouterView",Q1),M.config.globalProperties.$router=Yt,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>$t(l)}),bs&&!Vn&&l.value===hr&&(Vn=!0,H(s.location).catch(te=>{}));const Y={};for(const te in hr)Object.defineProperty(Y,te,{get:()=>l.value[te],enumerable:!0});M.provide(Sc,Yt),M.provide(Mh,Fm(Y)),M.provide(iu,l);const Q=M.unmount;Jt.add(M),M.unmount=function(){Jt.delete(M),Jt.size<1&&(u=hr,T&&T(),T=null,l.value=hr,Vn=!1,Ae=!1),Q()}}};function lt(M){return M.reduce((Y,Q)=>Y.then(()=>y(Q)),Promise.resolve())}return Yt}const Y1={class:"bg-ocean-800 text-white shadow-lg"},X1={class:"max-w-5xl mx-auto px-4 py-3 flex items-center justify-between"},Z1={class:"flex items-center gap-6"},eN={class:"hidden sm:flex items-center gap-5 text-sm font-medium"},tN={class:"flex items-center gap-3"},nN={key:0,class:"absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none"},rN=["src","alt"],sN={class:"sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 flex"},iN={__name:"Navbar",setup(t){const e=KP(),n=Ms(0);let r=null;fo(()=>{if(!jn.value)return;const i=RC(pC(qP,`users/${jn.value.uid}/notifications`),bC("read","==",!1));r=PC(i,o=>{n.value=o.size})}),Ya(()=>{r&&r()});async function s(){await JA(Lh),e.push("/login")}return(i,o)=>{var l;const c=og("router-link");return Bt(),qn(Ut,null,[pe("nav",Y1,[pe("div",X1,[pe("div",Z1,[ke(c,{to:"/",class:"flex items-center gap-2 font-bold text-xl hover:text-ocean-200 transition-colors"},{default:kt(()=>[...o[0]||(o[0]=[yn(" 🎣 Fishdex ",-1)])]),_:1}),pe("div",eN,[ke(c,{to:"/","exact-active-class":"text-white",class:"text-ocean-300 hover:text-white transition-colors"},{default:kt(()=>[...o[1]||(o[1]=[yn(" My Catches ",-1)])]),_:1}),ke(c,{to:"/catalog","active-class":"text-white",class:"text-ocean-300 hover:text-white transition-colors"},{default:kt(()=>[...o[2]||(o[2]=[yn(" Catalog ",-1)])]),_:1}),ke(c,{to:"/feed","active-class":"text-white",class:"text-ocean-300 hover:text-white transition-colors"},{default:kt(()=>[...o[3]||(o[3]=[yn(" Feed ",-1)])]),_:1}),ke(c,{to:"/stats","active-class":"text-white",class:"text-ocean-300 hover:text-white transition-colors"},{default:kt(()=>[...o[4]||(o[4]=[yn(" Stats ",-1)])]),_:1})])]),pe("div",tN,[ke(c,{to:"/add",class:"hidden sm:block bg-ocean-500 hover:bg-ocean-400 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors"},{default:kt(()=>[...o[5]||(o[5]=[yn(" + Add catch ",-1)])]),_:1}),ke(c,{to:"/notifications",class:"relative text-ocean-300 hover:text-white transition-colors"},{default:kt(()=>[o[6]||(o[6]=pe("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})],-1)),n.value>0?(Bt(),qn("span",nN,wm(n.value>9?"9+":n.value),1)):Fs("",!0)]),_:1}),(l=$t(jn))!=null&&l.photoURL?(Bt(),qn("img",{key:0,src:$t(jn).photoURL,alt:$t(jn).displayName,class:"w-8 h-8 rounded-full border-2 border-ocean-400 flex-shrink-0"},null,8,rN)):Fs("",!0),pe("button",{onClick:s,class:"text-ocean-300 hover:text-white text-sm transition-colors"}," Logout ")])])]),pe("div",sN,[ke(c,{to:"/","exact-active-class":"text-ocean-600 border-t-2 border-ocean-600 -mt-px",class:"flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"},{default:kt(()=>[...o[7]||(o[7]=[pe("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),pe("span",{class:"text-xs font-medium"},"Catches",-1)])]),_:1}),ke(c,{to:"/catalog","active-class":"text-ocean-600 border-t-2 border-ocean-600 -mt-px",class:"flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"},{default:kt(()=>[...o[8]||(o[8]=[pe("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1),pe("span",{class:"text-xs font-medium"},"Catalog",-1)])]),_:1}),ke(c,{to:"/add",class:"flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400","active-class":"text-ocean-600"},{default:kt(()=>[...o[9]||(o[9]=[pe("div",{class:"w-10 h-10 rounded-full bg-ocean-600 flex items-center justify-center -mt-5 shadow-lg border-4 border-white"},[pe("svg",{class:"w-5 h-5 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2.5"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"})])],-1),pe("span",{class:"text-xs font-medium"},"Add",-1)])]),_:1}),ke(c,{to:"/feed","active-class":"text-ocean-600 border-t-2 border-ocean-600 -mt-px",class:"flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"},{default:kt(()=>[...o[10]||(o[10]=[pe("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})],-1),pe("span",{class:"text-xs font-medium"},"Feed",-1)])]),_:1}),ke(c,{to:"/stats","active-class":"text-ocean-600 border-t-2 border-ocean-600 -mt-px",class:"flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-ocean-500 transition-colors"},{default:kt(()=>[...o[11]||(o[11]=[pe("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})],-1),pe("span",{class:"text-xs font-medium"},"Stats",-1)])]),_:1})])],64)}}},oN=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},aN={key:0,class:"fixed bottom-20 left-4 right-4 z-50 bg-ocean-600 text-white rounded-2xl shadow-xl p-4 flex items-center gap-3"},cN={class:"flex-1 min-w-0"},lN={class:"text-xs text-ocean-100 mt-0.5"},uN={class:"flex flex-col gap-1.5 shrink-0"},hN={__name:"InstallBanner",setup(t){const e=Ms(!1),n=Ms(!1);let r=null;fo(()=>{if(window.matchMedia("(display-mode: standalone)").matches||localStorage.getItem("pwa-banner-dismissed"))return;const o=/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()),c=/safari/.test(navigator.userAgent.toLowerCase())&&!/chrome/.test(navigator.userAgent.toLowerCase());if(o&&c){n.value=!0,e.value=!0;return}window.addEventListener("beforeinstallprompt",l=>{l.preventDefault(),r=l,e.value=!0})});async function s(){if(!r)return;r.prompt();const{outcome:o}=await r.userChoice;o==="accepted"&&(e.value=!1),r=null}function i(){e.value=!1,localStorage.setItem("pwa-banner-dismissed","1")}return(o,c)=>(Bt(),Ea(Xv,{name:"slide-up"},{default:kt(()=>[e.value?(Bt(),qn("div",aN,[c[5]||(c[5]=pe("div",{class:"text-3xl"},"🎣",-1)),pe("div",cN,[c[4]||(c[4]=pe("p",{class:"font-semibold text-sm"},"Install Fishdex",-1)),pe("p",lN,[n.value?(Bt(),qn(Ut,{key:0},[c[0]||(c[0]=yn("Tap ",-1)),c[1]||(c[1]=pe("strong",null,"Share",-1)),c[2]||(c[2]=yn(" then ",-1)),c[3]||(c[3]=pe("strong",null,"Add to Home Screen",-1))],64)):(Bt(),qn(Ut,{key:1},[yn("Add to your home screen for the full app experience")],64))])]),pe("div",uN,[n.value?Fs("",!0):(Bt(),qn("button",{key:0,onClick:s,class:"bg-white text-ocean-600 text-xs font-semibold px-3 py-1.5 rounded-lg"}," Install ")),pe("button",{onClick:i,class:"text-ocean-200 text-xs px-3 py-1.5"}," Not now ")])])):Fs("",!0)]),_:1}))}},fN=oN(hN,[["__scopeId","data-v-c89f6d5d"]]),dN={key:0},pN={key:1,class:"min-h-screen flex items-center justify-center bg-ocean-900"},mN={__name:"App",setup(t){let e=null;return fo(()=>{e=l_(Lh,n=>{jn.value=n,Yp.value=!0})}),Ya(()=>{e&&e()}),(n,r)=>{const s=og("router-view");return $t(Yp)?(Bt(),qn("div",dN,[$t(jn)?(Bt(),Ea(iN,{key:0})):Fs("",!0),pe("main",{class:Ga($t(jn)?"pb-20 sm:pb-0":"")},[ke(s)],2),$t(jn)?(Bt(),Ea(fN,{key:1})):Fs("",!0)])):(Bt(),qn("div",pN,[...r[0]||(r[0]=[pe("div",{class:"text-white text-xl animate-pulse"},"🎣 Loading Fishdex...",-1)])]))}}},gN="modulepreload",_N=function(t){return"/fishdex/"+t},pm={},Nt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=_N(l),l in pm)return;pm[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":gN,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},yN=[{path:"/login",name:"Login",component:()=>Nt(()=>import("./LoginView-C381C8fv.js"),[]),meta:{requiresGuest:!0}},{path:"/",name:"Home",component:()=>Nt(()=>import("./HomeView-CkXQc2tg.js"),[]),meta:{requiresAuth:!0}},{path:"/add",name:"AddFish",component:()=>Nt(()=>import("./AddFishView-BICh5P3H.js"),__vite__mapDeps([0,1,2,3,4])),meta:{requiresAuth:!0}},{path:"/fish/:id",name:"FishDetail",component:()=>Nt(()=>import("./FishDetailView-BhdK05Oi.js"),__vite__mapDeps([5,6,7,8,2,3])),meta:{requiresAuth:!0}},{path:"/catalog",name:"Catalog",component:()=>Nt(()=>import("./CatalogView-CSnuXJIG.js"),__vite__mapDeps([9,4])),meta:{requiresAuth:!0}},{path:"/catalog/:id",name:"CatalogFish",component:()=>Nt(()=>import("./CatalogFishView-BAK3NomI.js"),__vite__mapDeps([10,4])),meta:{requiresAuth:!0}},{path:"/feed",name:"Feed",component:()=>Nt(()=>import("./FeedView-CwTN5n8K.js"),__vite__mapDeps([11,12,13,2,3,14,6,7,15])),meta:{requiresAuth:!0}},{path:"/profile/:uid",name:"Profile",component:()=>Nt(()=>import("./ProfileView-QPYLXKVf.js"),__vite__mapDeps([16,12,13,2,3,14,6,7])),meta:{requiresAuth:!0}},{path:"/edit/:id",name:"EditFish",component:()=>Nt(()=>import("./EditFishView-DvElLG9S.js"),__vite__mapDeps([17,1,2,3,4])),meta:{requiresAuth:!0}},{path:"/stats",name:"Stats",component:()=>Nt(()=>import("./StatsView-COASJiCD.js"),__vite__mapDeps([18,8,2,3])),meta:{requiresAuth:!0}},{path:"/notifications",name:"Notifications",component:()=>Nt(()=>import("./NotificationsView-Bg4a7nk9.js"),[]),meta:{requiresAuth:!0}},{path:"/clubs/:id",name:"Club",component:()=>Nt(()=>import("./ClubView-CGgDCpgd.js"),__vite__mapDeps([19,13,2,3,14,6,7])),meta:{requiresAuth:!0}},{path:"/clubs/:id/admin",name:"ClubAdmin",component:()=>Nt(()=>import("./ClubAdminView-CUazN3D9.js"),[]),meta:{requiresAuth:!0}},{path:"/join/:code",name:"JoinClub",component:()=>Nt(()=>import("./JoinClubView-DIzbPFFn.js"),[]),meta:{requiresAuth:!0}}],PE=J1({history:C1("/fishdex/"),routes:yN});function EN(){return new Promise(t=>{const e=l_(Lh,n=>{e(),t(n)})})}PE.beforeEach(async t=>{const e=await EN();if(t.meta.requiresAuth&&!e)return{name:"Login"};if(t.meta.requiresGuest&&e)return{name:"Home"}});Rw(mN).use(PE).mount("#app");export{xN as $,ke as A,Zt as B,yn as C,MN as D,bC as E,Ut as F,Ga as G,SN as H,$t as I,RN as J,WN as K,KN as L,qN as M,HN as N,kN as O,$N as P,FN as Q,mC as R,LN as S,vN as T,QN as U,GN as V,BN as W,UN as X,du as Y,Xv as Z,oN as _,pe as a,Xo as a0,jN as a1,VN as a2,CN as a3,wu as a4,DN as a5,IN as b,qn as c,Fs as d,Lh as e,og as f,zN as g,Ea as h,fo as i,jn as j,ON as k,pC as l,qP as m,PC as n,Bt as o,Ya as p,RC as q,Ms as r,PN as s,wm as t,KP as u,TN as v,kt as w,AN as x,bN as y,wN as z};
