(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function tl(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Vu={exports:{}},co={},Wu={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function Kg(){if(ph)return Qe;ph=1;var u=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(F,I,J){this.props=F,this.context=I,this.refs=y,this.updater=J||M}v.prototype.isReactComponent={},v.prototype.setState=function(F,I){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,I,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function T(){}T.prototype=v.prototype;function N(F,I,J){this.props=F,this.context=I,this.refs=y,this.updater=J||M}var b=N.prototype=new T;b.constructor=N,C(b,v.prototype),b.isPureReactComponent=!0;var D=Array.isArray,R=Object.prototype.hasOwnProperty,G={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function E(F,I,J){var ue,de={},H=null,Le=null;if(I!=null)for(ue in I.ref!==void 0&&(Le=I.ref),I.key!==void 0&&(H=""+I.key),I)R.call(I,ue)&&!X.hasOwnProperty(ue)&&(de[ue]=I[ue]);var ye=arguments.length-2;if(ye===1)de.children=J;else if(1<ye){for(var Me=Array(ye),we=0;we<ye;we++)Me[we]=arguments[we+2];de.children=Me}if(F&&F.defaultProps)for(ue in ye=F.defaultProps,ye)de[ue]===void 0&&(de[ue]=ye[ue]);return{$$typeof:u,type:F,key:H,ref:Le,props:de,_owner:G.current}}function k(F,I){return{$$typeof:u,type:F.type,key:I,ref:F.ref,props:F.props,_owner:F._owner}}function Y(F){return typeof F=="object"&&F!==null&&F.$$typeof===u}function ce(F){var I={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(J){return I[J]})}var me=/\/+/g;function W(F,I){return typeof F=="object"&&F!==null&&F.key!=null?ce(""+F.key):I.toString(36)}function V(F,I,J,ue,de){var H=typeof F;(H==="undefined"||H==="boolean")&&(F=null);var Le=!1;if(F===null)Le=!0;else switch(H){case"string":case"number":Le=!0;break;case"object":switch(F.$$typeof){case u:case e:Le=!0}}if(Le)return Le=F,de=de(Le),F=ue===""?"."+W(Le,0):ue,D(de)?(J="",F!=null&&(J=F.replace(me,"$&/")+"/"),V(de,I,J,"",function(we){return we})):de!=null&&(Y(de)&&(de=k(de,J+(!de.key||Le&&Le.key===de.key?"":(""+de.key).replace(me,"$&/")+"/")+F)),I.push(de)),1;if(Le=0,ue=ue===""?".":ue+":",D(F))for(var ye=0;ye<F.length;ye++){H=F[ye];var Me=ue+W(H,ye);Le+=V(H,I,J,Me,de)}else if(Me=_(F),typeof Me=="function")for(F=Me.call(F),ye=0;!(H=F.next()).done;)H=H.value,Me=ue+W(H,ye++),Le+=V(H,I,J,Me,de);else if(H==="object")throw I=String(F),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Le}function re(F,I,J){if(F==null)return F;var ue=[],de=0;return V(F,ue,"","",function(H){return I.call(J,H,de++)}),ue}function fe(F){if(F._status===-1){var I=F._result;I=I(),I.then(function(J){(F._status===0||F._status===-1)&&(F._status=1,F._result=J)},function(J){(F._status===0||F._status===-1)&&(F._status=2,F._result=J)}),F._status===-1&&(F._status=0,F._result=I)}if(F._status===1)return F._result.default;throw F._result}var le={current:null},O={transition:null},ee={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:O,ReactCurrentOwner:G};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Qe.Children={map:re,forEach:function(F,I,J){re(F,function(){I.apply(this,arguments)},J)},count:function(F){var I=0;return re(F,function(){I++}),I},toArray:function(F){return re(F,function(I){return I})||[]},only:function(F){if(!Y(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Qe.Component=v,Qe.Fragment=n,Qe.Profiler=o,Qe.PureComponent=N,Qe.StrictMode=s,Qe.Suspense=p,Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,Qe.act=Z,Qe.cloneElement=function(F,I,J){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ue=C({},F.props),de=F.key,H=F.ref,Le=F._owner;if(I!=null){if(I.ref!==void 0&&(H=I.ref,Le=G.current),I.key!==void 0&&(de=""+I.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Me in I)R.call(I,Me)&&!X.hasOwnProperty(Me)&&(ue[Me]=I[Me]===void 0&&ye!==void 0?ye[Me]:I[Me])}var Me=arguments.length-2;if(Me===1)ue.children=J;else if(1<Me){ye=Array(Me);for(var we=0;we<Me;we++)ye[we]=arguments[we+2];ue.children=ye}return{$$typeof:u,type:F.type,key:de,ref:H,props:ue,_owner:Le}},Qe.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Qe.createElement=E,Qe.createFactory=function(F){var I=E.bind(null,F);return I.type=F,I},Qe.createRef=function(){return{current:null}},Qe.forwardRef=function(F){return{$$typeof:c,render:F}},Qe.isValidElement=Y,Qe.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:fe}},Qe.memo=function(F,I){return{$$typeof:m,type:F,compare:I===void 0?null:I}},Qe.startTransition=function(F){var I=O.transition;O.transition={};try{F()}finally{O.transition=I}},Qe.unstable_act=Z,Qe.useCallback=function(F,I){return le.current.useCallback(F,I)},Qe.useContext=function(F){return le.current.useContext(F)},Qe.useDebugValue=function(){},Qe.useDeferredValue=function(F){return le.current.useDeferredValue(F)},Qe.useEffect=function(F,I){return le.current.useEffect(F,I)},Qe.useId=function(){return le.current.useId()},Qe.useImperativeHandle=function(F,I,J){return le.current.useImperativeHandle(F,I,J)},Qe.useInsertionEffect=function(F,I){return le.current.useInsertionEffect(F,I)},Qe.useLayoutEffect=function(F,I){return le.current.useLayoutEffect(F,I)},Qe.useMemo=function(F,I){return le.current.useMemo(F,I)},Qe.useReducer=function(F,I,J){return le.current.useReducer(F,I,J)},Qe.useRef=function(F){return le.current.useRef(F)},Qe.useState=function(F){return le.current.useState(F)},Qe.useSyncExternalStore=function(F,I,J){return le.current.useSyncExternalStore(F,I,J)},Qe.useTransition=function(){return le.current.useTransition()},Qe.version="18.3.1",Qe}var mh;function Bc(){return mh||(mh=1,Wu.exports=Kg()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function Qg(){if(gh)return co;gh=1;var u=Bc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,p,m){var g,x={},_=null,M=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(M=p.ref);for(g in p)s.call(p,g)&&!l.hasOwnProperty(g)&&(x[g]=p[g]);if(c&&c.defaultProps)for(g in p=c.defaultProps,p)x[g]===void 0&&(x[g]=p[g]);return{$$typeof:e,type:c,key:_,ref:M,props:x,_owner:o.current}}return co.Fragment=n,co.jsx=d,co.jsxs=d,co}var _h;function Jg(){return _h||(_h=1,Vu.exports=Qg()),Vu.exports}var sn=Jg(),ut=Bc();const e_=tl(ut);var Pa={},vh;function t_(){if(vh)return Pa;vh=1,Pa.match=l,Pa.parse=d;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,s=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(g,x){return d(g).some(function(_){var M=_.inverse,C=_.type==="all"||x.type===_.type;if(C&&M||!(C||M))return!1;var y=_.expressions.every(function(v){var T=v.feature,N=v.modifier,b=v.value,D=x[T];if(!D)return!1;switch(T){case"orientation":case"scan":return D.toLowerCase()===b.toLowerCase();case"width":case"height":case"device-width":case"device-height":b=m(b),D=m(D);break;case"resolution":b=p(b),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":b=c(b),D=c(D);break;case"grid":case"color":case"color-index":case"monochrome":b=parseInt(b,10)||1,D=parseInt(D,10)||0;break}switch(N){case"min":return D>=b;case"max":return D<=b;default:return D===b}});return y&&!M||!y&&M})}function d(g){return g.split(",").map(function(x){x=x.trim();var _=x.match(u),M=_[1],C=_[2],y=_[3]||"",v={};return v.inverse=!!M&&M.toLowerCase()==="not",v.type=C?C.toLowerCase():"all",y=y.match(/\([^\)]+\)/g)||[],v.expressions=y.map(function(T){var N=T.match(e),b=N[1].toLowerCase().match(n);return{modifier:b[1],feature:b[2],value:N[2]}}),v})}function c(g){var x=Number(g),_;return x||(_=g.match(/^(\d+)\s*\/\s*(\d+)$/),x=_[1]/_[2]),x}function p(g){var x=parseFloat(g),_=String(g).match(o)[1];switch(_){case"dpcm":return x/2.54;case"dppx":return x*96;default:return x}}function m(g){var x=parseFloat(g),_=String(g).match(s)[1];switch(_){case"em":return x*16;case"rem":return x*16;case"cm":return x*96/2.54;case"mm":return x*96/2.54/10;case"in":return x*96;case"pt":return x*72;case"pc":return x*72/12;default:return x}}return Pa}var Hu,xh;function n_(){if(xh)return Hu;xh=1;var u=t_().match,e=typeof window<"u"?window.matchMedia:null;function n(o,l,d){var c=this,p;e&&!d&&(p=e.call(window,o)),p?(this.matches=p.matches,this.media=p.media,p.addListener(x)):(this.matches=u(o,l),this.media=o),this.addListener=m,this.removeListener=g,this.dispose=_;function m(M){p&&p.addListener(M)}function g(M){p&&p.removeListener(M)}function x(M){c.matches=M.matches,c.media=M.media}function _(){p&&p.removeListener(x)}}function s(o,l,d){return new n(o,l,d)}return Hu=s,Hu}var i_=n_();const r_=tl(i_);var s_=/[A-Z]/g,o_=/^ms-/,ju={};function a_(u){return"-"+u.toLowerCase()}function Wp(u){if(ju.hasOwnProperty(u))return ju[u];var e=u.replace(s_,a_);return ju[u]=o_.test(e)?"-"+e:e}function l_(u,e){if(u===e)return!0;if(!u||!e)return!1;const n=Object.keys(u),s=Object.keys(e),o=n.length;if(s.length!==o)return!1;for(let l=0;l<o;l++){const d=n[l];if(u[d]!==e[d]||!Object.prototype.hasOwnProperty.call(e,d))return!1}return!0}var Xu={exports:{}},qu,yh;function u_(){if(yh)return qu;yh=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return qu=u,qu}var Yu,Sh;function c_(){if(Sh)return Yu;Sh=1;var u=u_();function e(){}function n(){}return n.resetWarningCache=e,Yu=function(){function s(d,c,p,m,g,x){if(x!==u){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:e};return l.PropTypes=l,l},Yu}var Mh;function f_(){return Mh||(Mh=1,Xu.exports=c_()()),Xu.exports}var d_=f_();const ct=tl(d_),pn=ct.oneOfType([ct.string,ct.number]),Hp={all:ct.bool,grid:ct.bool,aural:ct.bool,braille:ct.bool,handheld:ct.bool,print:ct.bool,projection:ct.bool,screen:ct.bool,tty:ct.bool,tv:ct.bool,embossed:ct.bool},h_={orientation:ct.oneOf(["portrait","landscape"]),scan:ct.oneOf(["progressive","interlace"]),aspectRatio:ct.string,deviceAspectRatio:ct.string,height:pn,deviceHeight:pn,width:pn,deviceWidth:pn,color:ct.bool,colorIndex:ct.bool,monochrome:ct.bool,resolution:pn,type:Object.keys(Hp)},{type:UM,...p_}=h_,m_={minAspectRatio:ct.string,maxAspectRatio:ct.string,minDeviceAspectRatio:ct.string,maxDeviceAspectRatio:ct.string,minHeight:pn,maxHeight:pn,minDeviceHeight:pn,maxDeviceHeight:pn,minWidth:pn,maxWidth:pn,minDeviceWidth:pn,maxDeviceWidth:pn,minColor:ct.number,maxColor:ct.number,minColorIndex:ct.number,maxColorIndex:ct.number,minMonochrome:ct.number,maxMonochrome:ct.number,minResolution:pn,maxResolution:pn,...p_},g_={...Hp,...m_};var __={all:g_};const v_=u=>`not ${u}`,x_=(u,e)=>{const n=Wp(u);return typeof e=="number"&&(e=`${e}px`),e===!0?n:e===!1?v_(n):`(${n}: ${e})`},y_=u=>u.join(" and "),S_=u=>{const e=[];return Object.keys(__.all).forEach(n=>{const s=u[n];s!=null&&e.push(x_(n,s))}),y_(e)},M_=ut.createContext(void 0),w_=u=>u.query||S_(u),wh=u=>u?Object.keys(u).reduce((n,s)=>(n[Wp(s)]=u[s],n),{}):void 0,jp=()=>{const u=ut.useRef(!1);return ut.useEffect(()=>{u.current=!0},[]),u.current},E_=u=>{const e=ut.useContext(M_),n=()=>wh(u)||wh(e),[s,o]=ut.useState(n);return ut.useEffect(()=>{const l=n();l_(s,l)||o(l)},[u,e]),s},T_=u=>{const e=()=>w_(u),[n,s]=ut.useState(e);return ut.useEffect(()=>{const o=e();n!==o&&s(o)},[u]),n},C_=(u,e)=>{const n=()=>r_(u,e||{},!!e),[s,o]=ut.useState(n),l=jp();return ut.useEffect(()=>{if(l){const d=n();return o(d),()=>{d&&d.dispose()}}},[u,e]),s},b_=u=>{const[e,n]=ut.useState(u.matches);return ut.useEffect(()=>{const s=o=>{n(o.matches)};return u.addListener(s),n(u.matches),()=>{u.removeListener(s)}},[u]),e},A_=(u,e,n)=>{const s=E_(e),o=T_(u);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=C_(o,s),d=b_(l);return jp(),ut.useEffect(()=>{},[d]),ut.useEffect(()=>()=>{l&&l.dispose()},[]),d};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="149",L_=0,Eh=1,P_=2,Xp=1,R_=2,xo=3,rr=0,Rn=1,er=2,tr=0,Ms=1,Th=2,Ch=3,bh=4,D_=5,ys=100,I_=101,N_=102,Ah=103,Lh=104,F_=200,k_=201,z_=202,U_=203,qp=204,Yp=205,O_=206,B_=207,G_=208,V_=209,W_=210,H_=0,j_=1,X_=2,Dc=3,q_=4,Y_=5,$_=6,Z_=7,$p=0,K_=1,Q_=2,Ai=0,J_=1,e0=2,t0=3,n0=4,i0=5,Zp=300,Es=301,Ts=302,Ic=303,Nc=304,nl=306,Fc=1e3,ni=1001,kc=1002,mn=1003,Ph=1004,$u=1005,Wn=1006,r0=1007,Mo=1008,Dr=1009,s0=1010,o0=1011,Kp=1012,a0=1013,br=1014,Ar=1015,wo=1016,l0=1017,u0=1018,ws=1020,c0=1021,ii=1023,f0=1024,d0=1025,Lr=1026,Cs=1027,h0=1028,p0=1029,m0=1030,g0=1031,_0=1033,Zu=33776,Ku=33777,Qu=33778,Ju=33779,Rh=35840,Dh=35841,Ih=35842,Nh=35843,v0=36196,Fh=37492,kh=37496,zh=37808,Uh=37809,Oh=37810,Bh=37811,Gh=37812,Vh=37813,Wh=37814,Hh=37815,jh=37816,Xh=37817,qh=37818,Yh=37819,$h=37820,Zh=37821,ec=36492,x0=36283,Kh=36284,Qh=36285,Jh=36286,Ir=3e3,xt=3001,y0=3200,S0=3201,M0=0,w0=1,ui="srgb",Eo="srgb-linear",tc=7680,E0=519,ep=35044,tp="300 es",zc=1035;class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nc=Math.PI/180,np=180/Math.PI;function To(){const u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(rn[u&255]+rn[u>>8&255]+rn[u>>16&255]+rn[u>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]).toLowerCase()}function Ln(u,e,n){return Math.max(e,Math.min(n,u))}function T0(u,e){return(u%e+e)%e}function ic(u,e,n){return(1-n)*u+n*e}function ip(u){return(u&u-1)===0&&u!==0}function Uc(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}function Ra(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function Cn(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,n=0){gt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,o=e.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),o=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*s-d*o+e.x,this.y=l*o+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pn{constructor(){Pn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,s,o,l,d,c,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=c,g[3]=n,g[4]=l,g[5]=p,g[6]=s,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,d=s[0],c=s[3],p=s[6],m=s[1],g=s[4],x=s[7],_=s[2],M=s[5],C=s[8],y=o[0],v=o[3],T=o[6],N=o[1],b=o[4],D=o[7],R=o[2],G=o[5],X=o[8];return l[0]=d*y+c*N+p*R,l[3]=d*v+c*b+p*G,l[6]=d*T+c*D+p*X,l[1]=m*y+g*N+x*R,l[4]=m*v+g*b+x*G,l[7]=m*T+g*D+x*X,l[2]=_*y+M*N+C*R,l[5]=_*v+M*b+C*G,l[8]=_*T+M*D+C*X,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],p=e[6],m=e[7],g=e[8];return n*d*g-n*c*m-s*l*g+s*c*p+o*l*m-o*d*p}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],p=e[6],m=e[7],g=e[8],x=g*d-c*m,_=c*p-g*l,M=m*l-d*p,C=n*x+s*_+o*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/C;return e[0]=x*y,e[1]=(o*m-g*s)*y,e[2]=(c*s-o*d)*y,e[3]=_*y,e[4]=(g*n-o*p)*y,e[5]=(o*l-c*n)*y,e[6]=M*y,e[7]=(s*p-m*n)*y,e[8]=(d*n-s*l)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,o,l,d,c){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*d+m*c)+d+e,-o*m,o*p,-o*(-m*d+p*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(rc.makeScale(e,n)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(rc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new Pn;function Qp(u){for(let e=u.length-1;e>=0;--e)if(u[e]>=65535)return!0;return!1}function el(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function Pr(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function Qa(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const sc={[ui]:{[Eo]:Pr},[Eo]:{[ui]:Qa}},dn={legacyMode:!0,get workingColorSpace(){return Eo},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,e,n){if(this.legacyMode||e===n||!e||!n)return u;if(sc[e]&&sc[e][n]!==void 0){const s=sc[e][n];return u.r=s(u.r),u.g=s(u.g),u.b=s(u.b),u}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(u,e){return this.convert(u,this.workingColorSpace,e)},toWorkingColorSpace:function(u,e){return this.convert(u,e,this.workingColorSpace)}},Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ut={r:0,g:0,b:0},Jn={h:0,s:0,l:0},Da={h:0,s:0,l:0};function oc(u,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?u+(e-u)*6*n:n<1/2?e:n<2/3?u+(e-u)*6*(2/3-n):u}function Ia(u,e){return e.r=u.r,e.g=u.g,e.b=u.b,e}class Et{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&s===void 0?this.set(e):this.setRGB(e,n,s)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,n),this}setRGB(e,n,s,o=dn.workingColorSpace){return this.r=e,this.g=n,this.b=s,dn.toWorkingColorSpace(this,o),this}setHSL(e,n,s,o=dn.workingColorSpace){if(e=T0(e,1),n=Ln(n,0,1),s=Ln(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,d=2*s-l;this.r=oc(d,l,e+1/3),this.g=oc(d,l,e),this.b=oc(d,l,e-1/3)}return dn.toWorkingColorSpace(this,o),this}setStyle(e,n=ui){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],c=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(l[1],10))/255,this.g=Math.min(255,parseInt(l[2],10))/255,this.b=Math.min(255,parseInt(l[3],10))/255,dn.toWorkingColorSpace(this,n),s(l[4]),this;if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(l[1],10))/100,this.g=Math.min(100,parseInt(l[2],10))/100,this.b=Math.min(100,parseInt(l[3],10))/100,dn.toWorkingColorSpace(this,n),s(l[4]),this;break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const p=parseFloat(l[1])/360,m=parseFloat(l[2])/100,g=parseFloat(l[3])/100;return s(l[4]),this.setHSL(p,m,g,n)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,dn.toWorkingColorSpace(this,n),this;if(d===6)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,dn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=ui){const s=Jp[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return dn.fromWorkingColorSpace(Ia(this,Ut),e),Ln(Ut.r*255,0,255)<<16^Ln(Ut.g*255,0,255)<<8^Ln(Ut.b*255,0,255)<<0}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dn.workingColorSpace){dn.fromWorkingColorSpace(Ia(this,Ut),n);const s=Ut.r,o=Ut.g,l=Ut.b,d=Math.max(s,o,l),c=Math.min(s,o,l);let p,m;const g=(c+d)/2;if(c===d)p=0,m=0;else{const x=d-c;switch(m=g<=.5?x/(d+c):x/(2-d-c),d){case s:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-s)/x+2;break;case l:p=(s-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=dn.workingColorSpace){return dn.fromWorkingColorSpace(Ia(this,Ut),n),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=ui){return dn.fromWorkingColorSpace(Ia(this,Ut),e),e!==ui?`color(${e} ${Ut.r} ${Ut.g} ${Ut.b})`:`rgb(${Ut.r*255|0},${Ut.g*255|0},${Ut.b*255|0})`}offsetHSL(e,n,s){return this.getHSL(Jn),Jn.h+=e,Jn.s+=n,Jn.l+=s,this.setHSL(Jn.h,Jn.s,Jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Jn),e.getHSL(Da);const s=ic(Jn.h,Da.h,n),o=ic(Jn.s,Da.s,n),l=ic(Jn.l,Da.l,n);return this.setHSL(s,o,l),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Et.NAMES=Jp;let os;class em{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=el("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=el("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Pr(l[d]/255)*255;return s.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Pr(n[s]/255)*255):n[s]=Pr(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class tm{constructor(e=null){this.isSource=!0,this.uuid=To(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,c=o.length;d<c;d++)o[d].isDataTexture?l.push(ac(o[d].image)):l.push(ac(o[d]))}else l=ac(o);s.url=l}return n||(e.images[this.uuid]=s),s}}function ac(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?em.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;class Dn extends As{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,s=ni,o=ni,l=Wn,d=Mo,c=ii,p=Dr,m=Dn.DEFAULT_ANISOTROPY,g=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=To(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=n,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Zp;Dn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,o){return this.x=e,this.y=n,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*s+d[8]*o+d[12]*l,this.y=d[1]*n+d[5]*s+d[9]*o+d[13]*l,this.z=d[2]*n+d[6]*s+d[10]*o+d[14]*l,this.w=d[3]*n+d[7]*s+d[11]*o+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,o,l;const p=e.elements,m=p[0],g=p[4],x=p[8],_=p[1],M=p[5],C=p[9],y=p[2],v=p[6],T=p[10];if(Math.abs(g-_)<.01&&Math.abs(x-y)<.01&&Math.abs(C-v)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+y)<.1&&Math.abs(C+v)<.1&&Math.abs(m+M+T-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,D=(M+1)/2,R=(T+1)/2,G=(g+_)/4,X=(x+y)/4,E=(C+v)/4;return b>D&&b>R?b<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(b),o=G/s,l=X/s):D>R?D<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),s=G/o,l=E/o):R<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(R),s=X/l,o=E/l),this.set(s,o,l,n),this}let N=Math.sqrt((v-C)*(v-C)+(x-y)*(x-y)+(_-g)*(_-g));return Math.abs(N)<.001&&(N=1),this.x=(v-C)/N,this.y=(x-y)/N,this.z=(_-g)/N,this.w=Math.acos((m+M+T-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nr extends As{constructor(e=1,n=1,s={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const o={width:e,height:n,depth:1};this.texture=new Dn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:Wn,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(e,n,s=1){(this.width!==e||this.height!==n||this.depth!==s)&&(this.width=e,this.height=n,this.depth=s,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new tm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nm extends Dn{constructor(e=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b0 extends Dn{constructor(e=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=o}static slerpFlat(e,n,s,o,l,d,c){let p=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];const _=l[d+0],M=l[d+1],C=l[d+2],y=l[d+3];if(c===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(c===1){e[n+0]=_,e[n+1]=M,e[n+2]=C,e[n+3]=y;return}if(x!==y||p!==_||m!==M||g!==C){let v=1-c;const T=p*_+m*M+g*C+x*y,N=T>=0?1:-1,b=1-T*T;if(b>Number.EPSILON){const R=Math.sqrt(b),G=Math.atan2(R,T*N);v=Math.sin(v*G)/R,c=Math.sin(c*G)/R}const D=c*N;if(p=p*v+_*D,m=m*v+M*D,g=g*v+C*D,x=x*v+y*D,v===1-c){const R=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=R,m*=R,g*=R,x*=R}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,s,o,l,d){const c=s[o],p=s[o+1],m=s[o+2],g=s[o+3],x=l[d],_=l[d+1],M=l[d+2],C=l[d+3];return e[n]=c*C+g*x+p*M-m*_,e[n+1]=p*C+g*_+m*x-c*M,e[n+2]=m*C+g*M+c*_-p*x,e[n+3]=g*C-c*x-p*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,o){return this._x=e,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const s=e._x,o=e._y,l=e._z,d=e._order,c=Math.cos,p=Math.sin,m=c(s/2),g=c(o/2),x=c(l/2),_=p(s/2),M=p(o/2),C=p(l/2);switch(d){case"XYZ":this._x=_*g*x+m*M*C,this._y=m*M*x-_*g*C,this._z=m*g*C+_*M*x,this._w=m*g*x-_*M*C;break;case"YXZ":this._x=_*g*x+m*M*C,this._y=m*M*x-_*g*C,this._z=m*g*C-_*M*x,this._w=m*g*x+_*M*C;break;case"ZXY":this._x=_*g*x-m*M*C,this._y=m*M*x+_*g*C,this._z=m*g*C+_*M*x,this._w=m*g*x-_*M*C;break;case"ZYX":this._x=_*g*x-m*M*C,this._y=m*M*x+_*g*C,this._z=m*g*C-_*M*x,this._w=m*g*x+_*M*C;break;case"YZX":this._x=_*g*x+m*M*C,this._y=m*M*x+_*g*C,this._z=m*g*C-_*M*x,this._w=m*g*x-_*M*C;break;case"XZY":this._x=_*g*x-m*M*C,this._y=m*M*x-_*g*C,this._z=m*g*C+_*M*x,this._w=m*g*x+_*M*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],o=n[4],l=n[8],d=n[1],c=n[5],p=n[9],m=n[2],g=n[6],x=n[10],_=s+c+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(s>c&&s>x){const M=2*Math.sqrt(1+s-c-x);this._w=(g-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(c>x){const M=2*Math.sqrt(1+c-s-x);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+x-s-c);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,o=e._y,l=e._z,d=e._w,c=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+d*c+o*m-l*p,this._y=o*g+d*p+l*c-s*m,this._z=l*g+d*m+s*p-o*c,this._w=d*g-s*c-o*p-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,d=this._w;let c=d*e._w+s*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=s,this._y=o,this._z=l,this;const p=1-c*c;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*s+n*this._x,this._y=M*o+n*this._y,this._z=M*l+n*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(p),g=Math.atan2(m,c),x=Math.sin((1-n)*g)/m,_=Math.sin(n*g)/m;return this._w=d*x+this._w*_,this._x=s*x+this._x*_,this._y=o*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=Math.random(),n=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(o),s*Math.sin(l),s*Math.cos(l),n*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,s=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*o,this.y=l[1]*n+l[4]*s+l[7]*o,this.z=l[2]*n+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=e.elements,d=1/(l[3]*n+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*o+l[12])*d,this.y=(l[1]*n+l[5]*s+l[9]*o+l[13])*d,this.z=(l[2]*n+l[6]*s+l[10]*o+l[14])*d,this}applyQuaternion(e){const n=this.x,s=this.y,o=this.z,l=e.x,d=e.y,c=e.z,p=e.w,m=p*n+d*o-c*s,g=p*s+c*n-l*o,x=p*o+l*s-d*n,_=-l*n-d*s-c*o;return this.x=m*p+_*-l+g*-c-x*-d,this.y=g*p+_*-d+x*-l-m*-c,this.z=x*p+_*-c+m*-d-g*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*o,this.y=l[1]*n+l[5]*s+l[9]*o,this.z=l[2]*n+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,o=e.y,l=e.z,d=n.x,c=n.y,p=n.z;return this.x=o*p-l*c,this.y=l*d-s*p,this.z=s*c-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return n*n+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const o=Math.sin(n)*e;return this.x=o*Math.sin(s),this.y=Math.cos(n)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(n),this.y=s*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new te,rp=new Co;class nr{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,s=1/0,o=1/0,l=-1/0,d=-1/0,c=-1/0;for(let p=0,m=e.length;p<m;p+=3){const g=e[p],x=e[p+1],_=e[p+2];g<n&&(n=g),x<s&&(s=x),_<o&&(o=_),g>l&&(l=g),x>d&&(d=x),_>c&&(c=_)}return this.min.set(n,s,o),this.max.set(l,d,c),this}setFromBufferAttribute(e){let n=1/0,s=1/0,o=1/0,l=-1/0,d=-1/0,c=-1/0;for(let p=0,m=e.count;p<m;p++){const g=e.getX(p),x=e.getY(p),_=e.getZ(p);g<n&&(n=g),x<s&&(s=x),_<o&&(o=_),g>l&&(l=g),x>d&&(d=x),_>c&&(c=_)}return this.min.set(n,s,o),this.max.set(l,d,c),this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Sr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0)if(n&&s.attributes!=null&&s.attributes.position!==void 0){const l=s.attributes.position;for(let d=0,c=l.count;d<c;d++)Sr.fromBufferAttribute(l,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Sr)}else s.boundingBox===null&&s.computeBoundingBox(),uc.copy(s.boundingBox),uc.applyMatrix4(e.matrixWorld),this.union(uc);const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sr),Sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Na.subVectors(this.max,fo),as.subVectors(e.a,fo),ls.subVectors(e.b,fo),us.subVectors(e.c,fo),Zi.subVectors(ls,as),Ki.subVectors(us,ls),Mr.subVectors(as,us);let n=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-Mr.z,Mr.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,Mr.z,0,-Mr.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-Mr.y,Mr.x,0];return!cc(n,as,ls,us,Na)||(n=[1,0,0,0,1,0,0,0,1],!cc(n,as,ls,us,Na))?!1:(Fa.crossVectors(Zi,Ki),n=[Fa.x,Fa.y,Fa.z],cc(n,as,ls,us,Na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Sr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Sr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new te,new te,new te,new te,new te,new te,new te,new te],Sr=new te,uc=new nr,as=new te,ls=new te,us=new te,Zi=new te,Ki=new te,Mr=new te,fo=new te,Na=new te,Fa=new te,wr=new te;function cc(u,e,n,s,o){for(let l=0,d=u.length-3;l<=d;l+=3){wr.fromArray(u,l);const c=o.x*Math.abs(wr.x)+o.y*Math.abs(wr.y)+o.z*Math.abs(wr.z),p=e.dot(wr),m=n.dot(wr),g=s.dot(wr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>c)return!1}return!0}const A0=new nr,ho=new te,fc=new te;class Vc{constructor(e=new te,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):A0.setFromPoints(e).getCenter(s);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const n=ho.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(ho,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(fc)),this.expandByPoint(ho.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new te,dc=new te,ka=new te,Qi=new te,hc=new te,za=new te,pc=new te;class L0{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(s).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.direction).multiplyScalar(n).add(this.origin),wi.distanceToSquared(e))}distanceSqToSegment(e,n,s,o){dc.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(dc);const l=e.distanceTo(n)*.5,d=-this.direction.dot(ka),c=Qi.dot(this.direction),p=-Qi.dot(ka),m=Qi.lengthSq(),g=Math.abs(1-d*d);let x,_,M,C;if(g>0)if(x=d*p-c,_=d*c-p,C=l*g,x>=0)if(_>=-C)if(_<=C){const y=1/g;x*=y,_*=y,M=x*(x+d*_+2*c)+_*(d*x+_+2*p)+m}else _=l,x=Math.max(0,-(d*_+c)),M=-x*x+_*(_+2*p)+m;else _=-l,x=Math.max(0,-(d*_+c)),M=-x*x+_*(_+2*p)+m;else _<=-C?(x=Math.max(0,-(-d*l+c)),_=x>0?-l:Math.min(Math.max(-l,-p),l),M=-x*x+_*(_+2*p)+m):_<=C?(x=0,_=Math.min(Math.max(-l,-p),l),M=_*(_+2*p)+m):(x=Math.max(0,-(d*l+c)),_=x>0?l:Math.min(Math.max(-l,-p),l),M=-x*x+_*(_+2*p)+m);else _=d>0?-l:l,x=Math.max(0,-(d*_+c)),M=-x*x+_*(_+2*p)+m;return s&&s.copy(this.direction).multiplyScalar(x).add(this.origin),o&&o.copy(ka).multiplyScalar(_).add(dc),M}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const s=wi.dot(this.direction),o=wi.dot(wi)-s*s,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),c=s-d,p=s+d;return c<0&&p<0?null:c<0?this.at(p,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,o,l,d,c,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,d=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,d=(e.min.y-_.y)*g),s>d||l>o||((l>s||isNaN(s))&&(s=l),(d<o||isNaN(o))&&(o=d),x>=0?(c=(e.min.z-_.z)*x,p=(e.max.z-_.z)*x):(c=(e.max.z-_.z)*x,p=(e.min.z-_.z)*x),s>p||c>o)||((c>s||s!==s)&&(s=c),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,s,o,l){hc.subVectors(n,e),za.subVectors(s,e),pc.crossVectors(hc,za);let d=this.direction.dot(pc),c;if(d>0){if(o)return null;c=1}else if(d<0)c=-1,d=-d;else return null;Qi.subVectors(this.origin,e);const p=c*this.direction.dot(za.crossVectors(Qi,za));if(p<0)return null;const m=c*this.direction.dot(hc.cross(Qi));if(m<0||p+m>d)return null;const g=-c*Qi.dot(pc);return g<0?null:this.at(g/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,s,o,l,d,c,p,m,g,x,_,M,C,y,v){const T=this.elements;return T[0]=e,T[4]=n,T[8]=s,T[12]=o,T[1]=l,T[5]=d,T[9]=c,T[13]=p,T[2]=m,T[6]=g,T[10]=x,T[14]=_,T[3]=M,T[7]=C,T[11]=y,T[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,o=1/cs.setFromMatrixColumn(e,0).length(),l=1/cs.setFromMatrixColumn(e,1).length(),d=1/cs.setFromMatrixColumn(e,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*d,n[9]=s[9]*d,n[10]=s[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,o=e.y,l=e.z,d=Math.cos(s),c=Math.sin(s),p=Math.cos(o),m=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=d*g,M=d*x,C=c*g,y=c*x;n[0]=p*g,n[4]=-p*x,n[8]=m,n[1]=M+C*m,n[5]=_-y*m,n[9]=-c*p,n[2]=y-_*m,n[6]=C+M*m,n[10]=d*p}else if(e.order==="YXZ"){const _=p*g,M=p*x,C=m*g,y=m*x;n[0]=_+y*c,n[4]=C*c-M,n[8]=d*m,n[1]=d*x,n[5]=d*g,n[9]=-c,n[2]=M*c-C,n[6]=y+_*c,n[10]=d*p}else if(e.order==="ZXY"){const _=p*g,M=p*x,C=m*g,y=m*x;n[0]=_-y*c,n[4]=-d*x,n[8]=C+M*c,n[1]=M+C*c,n[5]=d*g,n[9]=y-_*c,n[2]=-d*m,n[6]=c,n[10]=d*p}else if(e.order==="ZYX"){const _=d*g,M=d*x,C=c*g,y=c*x;n[0]=p*g,n[4]=C*m-M,n[8]=_*m+y,n[1]=p*x,n[5]=y*m+_,n[9]=M*m-C,n[2]=-m,n[6]=c*p,n[10]=d*p}else if(e.order==="YZX"){const _=d*p,M=d*m,C=c*p,y=c*m;n[0]=p*g,n[4]=y-_*x,n[8]=C*x+M,n[1]=x,n[5]=d*g,n[9]=-c*g,n[2]=-m*g,n[6]=M*x+C,n[10]=_-y*x}else if(e.order==="XZY"){const _=d*p,M=d*m,C=c*p,y=c*m;n[0]=p*g,n[4]=-x,n[8]=m*g,n[1]=_*x+y,n[5]=d*g,n[9]=M*x-C,n[2]=C*x-M,n[6]=c*g,n[10]=y*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,R0)}lookAt(e,n,s){const o=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ji.crossVectors(s,bn),Ji.lengthSq()===0&&(Math.abs(s.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ji.crossVectors(s,bn)),Ji.normalize(),Ua.crossVectors(bn,Ji),o[0]=Ji.x,o[4]=Ua.x,o[8]=bn.x,o[1]=Ji.y,o[5]=Ua.y,o[9]=bn.y,o[2]=Ji.z,o[6]=Ua.z,o[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,d=s[0],c=s[4],p=s[8],m=s[12],g=s[1],x=s[5],_=s[9],M=s[13],C=s[2],y=s[6],v=s[10],T=s[14],N=s[3],b=s[7],D=s[11],R=s[15],G=o[0],X=o[4],E=o[8],k=o[12],Y=o[1],ce=o[5],me=o[9],W=o[13],V=o[2],re=o[6],fe=o[10],le=o[14],O=o[3],ee=o[7],Z=o[11],F=o[15];return l[0]=d*G+c*Y+p*V+m*O,l[4]=d*X+c*ce+p*re+m*ee,l[8]=d*E+c*me+p*fe+m*Z,l[12]=d*k+c*W+p*le+m*F,l[1]=g*G+x*Y+_*V+M*O,l[5]=g*X+x*ce+_*re+M*ee,l[9]=g*E+x*me+_*fe+M*Z,l[13]=g*k+x*W+_*le+M*F,l[2]=C*G+y*Y+v*V+T*O,l[6]=C*X+y*ce+v*re+T*ee,l[10]=C*E+y*me+v*fe+T*Z,l[14]=C*k+y*W+v*le+T*F,l[3]=N*G+b*Y+D*V+R*O,l[7]=N*X+b*ce+D*re+R*ee,l[11]=N*E+b*me+D*fe+R*Z,l[15]=N*k+b*W+D*le+R*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],o=e[8],l=e[12],d=e[1],c=e[5],p=e[9],m=e[13],g=e[2],x=e[6],_=e[10],M=e[14],C=e[3],y=e[7],v=e[11],T=e[15];return C*(+l*p*x-o*m*x-l*c*_+s*m*_+o*c*M-s*p*M)+y*(+n*p*M-n*m*_+l*d*_-o*d*M+o*m*g-l*p*g)+v*(+n*m*x-n*c*M-l*d*x+s*d*M+l*c*g-s*m*g)+T*(-o*c*g-n*p*x+n*c*_+o*d*x-s*d*_+s*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],p=e[6],m=e[7],g=e[8],x=e[9],_=e[10],M=e[11],C=e[12],y=e[13],v=e[14],T=e[15],N=x*v*m-y*_*m+y*p*M-c*v*M-x*p*T+c*_*T,b=C*_*m-g*v*m-C*p*M+d*v*M+g*p*T-d*_*T,D=g*y*m-C*x*m+C*c*M-d*y*M-g*c*T+d*x*T,R=C*x*p-g*y*p-C*c*_+d*y*_+g*c*v-d*x*v,G=n*N+s*b+o*D+l*R;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/G;return e[0]=N*X,e[1]=(y*_*l-x*v*l-y*o*M+s*v*M+x*o*T-s*_*T)*X,e[2]=(c*v*l-y*p*l+y*o*m-s*v*m-c*o*T+s*p*T)*X,e[3]=(x*p*l-c*_*l-x*o*m+s*_*m+c*o*M-s*p*M)*X,e[4]=b*X,e[5]=(g*v*l-C*_*l+C*o*M-n*v*M-g*o*T+n*_*T)*X,e[6]=(C*p*l-d*v*l-C*o*m+n*v*m+d*o*T-n*p*T)*X,e[7]=(d*_*l-g*p*l+g*o*m-n*_*m-d*o*M+n*p*M)*X,e[8]=D*X,e[9]=(C*x*l-g*y*l-C*s*M+n*y*M+g*s*T-n*x*T)*X,e[10]=(d*y*l-C*c*l+C*s*m-n*y*m-d*s*T+n*c*T)*X,e[11]=(g*c*l-d*x*l-g*s*m+n*x*m+d*s*M-n*c*M)*X,e[12]=R*X,e[13]=(g*y*o-C*x*o+C*s*_-n*y*_-g*s*v+n*x*v)*X,e[14]=(C*c*o-d*y*o-C*s*p+n*y*p+d*s*v-n*c*v)*X,e[15]=(d*x*o-g*c*o+g*s*p-n*x*p-d*s*_+n*c*_)*X,this}scale(e){const n=this.elements,s=e.x,o=e.y,l=e.z;return n[0]*=s,n[4]*=o,n[8]*=l,n[1]*=s,n[5]*=o,n[9]*=l,n[2]*=s,n[6]*=o,n[10]*=l,n[3]*=s,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(e,n,s){return this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),o=Math.sin(n),l=1-s,d=e.x,c=e.y,p=e.z,m=l*d,g=l*c;return this.set(m*d+s,m*c-o*p,m*p+o*c,0,m*c+o*p,g*c+s,g*p-o*d,0,m*p-o*c,g*p+o*d,l*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,o,l,d){return this.set(1,s,l,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,s){const o=this.elements,l=n._x,d=n._y,c=n._z,p=n._w,m=l+l,g=d+d,x=c+c,_=l*m,M=l*g,C=l*x,y=d*g,v=d*x,T=c*x,N=p*m,b=p*g,D=p*x,R=s.x,G=s.y,X=s.z;return o[0]=(1-(y+T))*R,o[1]=(M+D)*R,o[2]=(C-b)*R,o[3]=0,o[4]=(M-D)*G,o[5]=(1-(_+T))*G,o[6]=(v+N)*G,o[7]=0,o[8]=(C+b)*X,o[9]=(v-N)*X,o[10]=(1-(_+y))*X,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,s){const o=this.elements;let l=cs.set(o[0],o[1],o[2]).length();const d=cs.set(o[4],o[5],o[6]).length(),c=cs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ei.copy(this);const m=1/l,g=1/d,x=1/c;return ei.elements[0]*=m,ei.elements[1]*=m,ei.elements[2]*=m,ei.elements[4]*=g,ei.elements[5]*=g,ei.elements[6]*=g,ei.elements[8]*=x,ei.elements[9]*=x,ei.elements[10]*=x,n.setFromRotationMatrix(ei),s.x=l,s.y=d,s.z=c,this}makePerspective(e,n,s,o,l,d){const c=this.elements,p=2*l/(n-e),m=2*l/(s-o),g=(n+e)/(n-e),x=(s+o)/(s-o),_=-(d+l)/(d-l),M=-2*d*l/(d-l);return c[0]=p,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=m,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,s,o,l,d){const c=this.elements,p=1/(n-e),m=1/(s-o),g=1/(d-l),x=(n+e)*p,_=(s+o)*m,M=(d+l)*g;return c[0]=2*p,c[4]=0,c[8]=0,c[12]=-x,c[1]=0,c[5]=2*m,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=-2*g,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const cs=new te,ei=new Zt,P0=new te(0,0,0),R0=new te(1,1,1),Ji=new te,Ua=new te,bn=new te,sp=new Zt,op=new Co;class il{constructor(e=0,n=0,s=0,o=il.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,o=this._order){return this._x=e,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const o=e.elements,l=o[0],d=o[4],c=o[8],p=o[1],m=o[5],g=o[9],x=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ln(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ln(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return op.setFromEuler(this),this.setFromQuaternion(op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}il.DEFAULT_ORDER="XYZ";class im{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D0=0;const ap=new te,fs=new Co,Ei=new Zt,Oa=new te,po=new te,I0=new te,N0=new Co,lp=new te(1,0,0),up=new te(0,1,0),cp=new te(0,0,1),F0={type:"added"},fp={type:"removed"};class In extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new te,n=new il,s=new Co,o=new te(1,1,1);function l(){s.setFromEuler(n,!1)}function d(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Pn}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new im,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(lp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,n){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Oa.copy(e):Oa.set(e,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(po,Oa,this.up):Ei.lookAt(Oa,po,this.up),this.quaternion.setFromRotationMatrix(Ei),o&&(Ei.extractRotation(o.matrixWorld),fs.setFromRotationMatrix(Ei),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(F0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(fp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n){let s=[];this[e]===n&&s.push(this);for(let o=0,l=this.children.length;o<l;o++){const d=this.children[o].getObjectsByProperty(e,n);d.length>0&&(s=s.concat(d))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++){const l=n[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(c,p){return c[p.uuid]===void 0&&(c[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const p=c.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let p=0,m=this.material.length;p<m;p++)c.push(l(e.materials,this.material[p]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const p=this.animations[c];o.animations.push(l(e.animations,p))}}if(n){const c=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),x=d(e.shapes),_=d(e.skeletons),M=d(e.animations),C=d(e.nodes);c.length>0&&(s.geometries=c),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),C.length>0&&(s.nodes=C)}return s.object=o,s;function d(c){const p=[];for(const m in c){const g=c[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}In.DEFAULT_UP=new te(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new te,Ti=new te,mc=new te,Ci=new te,ds=new te,hs=new te,dp=new te,gc=new te,_c=new te,vc=new te;class bi{constructor(e=new te,n=new te,s=new te){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,o){o.subVectors(s,n),ti.subVectors(e,n),o.cross(ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,s,o,l){ti.subVectors(o,n),Ti.subVectors(s,n),mc.subVectors(e,n);const d=ti.dot(ti),c=ti.dot(Ti),p=ti.dot(mc),m=Ti.dot(Ti),g=Ti.dot(mc),x=d*m-c*c;if(x===0)return l.set(-2,-1,-1);const _=1/x,M=(m*p-c*g)*_,C=(d*g-c*p)*_;return l.set(1-M-C,C,M)}static containsPoint(e,n,s,o){return this.getBarycoord(e,n,s,o,Ci),Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,n,s,o,l,d,c,p){return this.getBarycoord(e,n,s,o,Ci),p.set(0,0),p.addScaledVector(l,Ci.x),p.addScaledVector(d,Ci.y),p.addScaledVector(c,Ci.z),p}static isFrontFacing(e,n,s,o){return ti.subVectors(s,n),Ti.subVectors(e,n),ti.cross(Ti).dot(o)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,o){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,s,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ti.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,s,o,l){return bi.getUV(e,this.a,this.b,this.c,n,s,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,o=this.b,l=this.c;let d,c;ds.subVectors(o,s),hs.subVectors(l,s),gc.subVectors(e,s);const p=ds.dot(gc),m=hs.dot(gc);if(p<=0&&m<=0)return n.copy(s);_c.subVectors(e,o);const g=ds.dot(_c),x=hs.dot(_c);if(g>=0&&x<=g)return n.copy(o);const _=p*x-g*m;if(_<=0&&p>=0&&g<=0)return d=p/(p-g),n.copy(s).addScaledVector(ds,d);vc.subVectors(e,l);const M=ds.dot(vc),C=hs.dot(vc);if(C>=0&&M<=C)return n.copy(l);const y=M*m-p*C;if(y<=0&&m>=0&&C<=0)return c=m/(m-C),n.copy(s).addScaledVector(hs,c);const v=g*C-M*x;if(v<=0&&x-g>=0&&M-C>=0)return dp.subVectors(l,o),c=(x-g)/(x-g+(M-C)),n.copy(o).addScaledVector(dp,c);const T=1/(v+y+_);return d=y*T,c=_*T,n.copy(s).addScaledVector(ds,d).addScaledVector(hs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let k0=0;class rl extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=To(),this.name="",this.type="Material",this.blending=Ms,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qp,this.blendDst=Yp,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tc,this.stencilZFail=tc,this.stencilZPass=tc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const o=this[n];if(o===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(s.blending=this.blending),this.side!==rr&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(s.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const d=[];for(const c in l){const p=l[c];delete p.metadata,d.push(p)}return d}if(n){const l=o(e.textures),d=o(e.images);l.length>0&&(s.textures=l),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class So extends rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new te,Ba=new gt;class fi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=ep,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Ba.fromBufferAttribute(this,n),Ba.applyMatrix3(e),this.setXY(n,Ba.x,Ba.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),s=Cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,o){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),s=Cn(s,this.array),o=Cn(o,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,n,s,o,l){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),s=Cn(s,this.array),o=Cn(o,this.array),l=Cn(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rm extends fi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class sm extends fi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Rr extends fi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let z0=0;const Vn=new Zt,xc=new In,ps=new te,An=new nr,mo=new nr,Xt=new te;class kr extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Pn().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,s){return Vn.makeTranslation(e,n,s),this.applyMatrix4(Vn),this}scale(e,n,s){return Vn.makeScale(e,n,s),this.applyMatrix4(Vn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Rr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];An.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const c=n[l];mo.setFromBufferAttribute(c),this.morphTargetsRelative?(Xt.addVectors(An.min,mo.min),An.expandByPoint(Xt),Xt.addVectors(An.max,mo.max),An.expandByPoint(Xt)):(An.expandByPoint(mo.min),An.expandByPoint(mo.max))}An.getCenter(s);let o=0;for(let l=0,d=e.count;l<d;l++)Xt.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Xt));if(n)for(let l=0,d=n.length;l<d;l++){const c=n[l],p=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)Xt.fromBufferAttribute(c,m),p&&(ps.fromBufferAttribute(e,m),Xt.add(ps)),o=Math.max(o,s.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=n.position.array,l=n.normal.array,d=n.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*c),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let Y=0;Y<c;Y++)m[Y]=new te,g[Y]=new te;const x=new te,_=new te,M=new te,C=new gt,y=new gt,v=new gt,T=new te,N=new te;function b(Y,ce,me){x.fromArray(o,Y*3),_.fromArray(o,ce*3),M.fromArray(o,me*3),C.fromArray(d,Y*2),y.fromArray(d,ce*2),v.fromArray(d,me*2),_.sub(x),M.sub(x),y.sub(C),v.sub(C);const W=1/(y.x*v.y-v.x*y.y);isFinite(W)&&(T.copy(_).multiplyScalar(v.y).addScaledVector(M,-y.y).multiplyScalar(W),N.copy(M).multiplyScalar(y.x).addScaledVector(_,-v.x).multiplyScalar(W),m[Y].add(T),m[ce].add(T),m[me].add(T),g[Y].add(N),g[ce].add(N),g[me].add(N))}let D=this.groups;D.length===0&&(D=[{start:0,count:s.length}]);for(let Y=0,ce=D.length;Y<ce;++Y){const me=D[Y],W=me.start,V=me.count;for(let re=W,fe=W+V;re<fe;re+=3)b(s[re+0],s[re+1],s[re+2])}const R=new te,G=new te,X=new te,E=new te;function k(Y){X.fromArray(l,Y*3),E.copy(X);const ce=m[Y];R.copy(ce),R.sub(X.multiplyScalar(X.dot(ce))).normalize(),G.crossVectors(E,ce);const W=G.dot(g[Y])<0?-1:1;p[Y*4]=R.x,p[Y*4+1]=R.y,p[Y*4+2]=R.z,p[Y*4+3]=W}for(let Y=0,ce=D.length;Y<ce;++Y){const me=D[Y],W=me.start,V=me.count;for(let re=W,fe=W+V;re<fe;re+=3)k(s[re+0]),k(s[re+1]),k(s[re+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const o=new te,l=new te,d=new te,c=new te,p=new te,m=new te,g=new te,x=new te;if(e)for(let _=0,M=e.count;_<M;_+=3){const C=e.getX(_+0),y=e.getX(_+1),v=e.getX(_+2);o.fromBufferAttribute(n,C),l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),g.subVectors(d,l),x.subVectors(o,l),g.cross(x),c.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),m.fromBufferAttribute(s,v),c.add(g),p.add(g),m.add(g),s.setXYZ(C,c.x,c.y,c.z),s.setXYZ(y,p.x,p.y,p.z),s.setXYZ(v,m.x,m.y,m.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),d.fromBufferAttribute(n,_+2),g.subVectors(d,l),x.subVectors(o,l),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(c,p){const m=c.array,g=c.itemSize,x=c.normalized,_=new m.constructor(p.length*g);let M=0,C=0;for(let y=0,v=p.length;y<v;y++){c.isInterleavedBufferAttribute?M=p[y]*c.data.stride+c.offset:M=p[y]*g;for(let T=0;T<g;T++)_[C++]=m[M++]}return new fi(_,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kr,s=this.index.array,o=this.attributes;for(const c in o){const p=o[c],m=e(p,s);n.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const p=[],m=l[c];for(let g=0,x=m.length;g<x;g++){const _=m[g],M=e(_,s);p.push(M)}n.morphAttributes[c]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,p=d.length;c<p;c++){const m=d[c];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,_=m.length;x<_;x++){const M=m[x];g.push(M.toJSON(e.data))}g.length>0&&(o[p]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const l=e.morphAttributes;for(const m in l){const g=[],x=l[m];for(let _=0,M=x.length;_<M;_++)g.push(x[_].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const hp=new Zt,ms=new L0,yc=new Vc,go=new te,_o=new te,vo=new te,Sc=new te,Ga=new te,Va=new gt,Wa=new gt,Ha=new gt,Mc=new te,ja=new te;class jn extends In{constructor(e=new kr,n=new So){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,n){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,d=s.morphTargetsRelative;n.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){Ga.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const g=c[p],x=l[p];g!==0&&(Sc.fromBufferAttribute(x,e),d?Ga.addScaledVector(Sc,g):Ga.addScaledVector(Sc.sub(n),g))}n.add(Ga)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const s=this.geometry,o=this.material,l=this.matrixWorld;if(o===void 0||(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(l),e.ray.intersectsSphere(yc)===!1)||(hp.copy(l).invert(),ms.copy(e.ray).applyMatrix4(hp),s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1))return;let d;const c=s.index,p=s.attributes.position,m=s.attributes.uv,g=s.attributes.uv2,x=s.groups,_=s.drawRange;if(c!==null)if(Array.isArray(o))for(let M=0,C=x.length;M<C;M++){const y=x[M],v=o[y.materialIndex],T=Math.max(y.start,_.start),N=Math.min(c.count,Math.min(y.start+y.count,_.start+_.count));for(let b=T,D=N;b<D;b+=3){const R=c.getX(b),G=c.getX(b+1),X=c.getX(b+2);d=Xa(this,v,e,ms,m,g,R,G,X),d&&(d.faceIndex=Math.floor(b/3),d.face.materialIndex=y.materialIndex,n.push(d))}}else{const M=Math.max(0,_.start),C=Math.min(c.count,_.start+_.count);for(let y=M,v=C;y<v;y+=3){const T=c.getX(y),N=c.getX(y+1),b=c.getX(y+2);d=Xa(this,o,e,ms,m,g,T,N,b),d&&(d.faceIndex=Math.floor(y/3),n.push(d))}}else if(p!==void 0)if(Array.isArray(o))for(let M=0,C=x.length;M<C;M++){const y=x[M],v=o[y.materialIndex],T=Math.max(y.start,_.start),N=Math.min(p.count,Math.min(y.start+y.count,_.start+_.count));for(let b=T,D=N;b<D;b+=3){const R=b,G=b+1,X=b+2;d=Xa(this,v,e,ms,m,g,R,G,X),d&&(d.faceIndex=Math.floor(b/3),d.face.materialIndex=y.materialIndex,n.push(d))}}else{const M=Math.max(0,_.start),C=Math.min(p.count,_.start+_.count);for(let y=M,v=C;y<v;y+=3){const T=y,N=y+1,b=y+2;d=Xa(this,o,e,ms,m,g,T,N,b),d&&(d.faceIndex=Math.floor(y/3),n.push(d))}}}}function U0(u,e,n,s,o,l,d,c){let p;if(e.side===Rn?p=s.intersectTriangle(d,l,o,!0,c):p=s.intersectTriangle(o,l,d,e.side===rr,c),p===null)return null;ja.copy(c),ja.applyMatrix4(u.matrixWorld);const m=n.ray.origin.distanceTo(ja);return m<n.near||m>n.far?null:{distance:m,point:ja.clone(),object:u}}function Xa(u,e,n,s,o,l,d,c,p){u.getVertexPosition(d,go),u.getVertexPosition(c,_o),u.getVertexPosition(p,vo);const m=U0(u,e,n,s,go,_o,vo,Mc);if(m){o&&(Va.fromBufferAttribute(o,d),Wa.fromBufferAttribute(o,c),Ha.fromBufferAttribute(o,p),m.uv=bi.getUV(Mc,go,_o,vo,Va,Wa,Ha,new gt)),l&&(Va.fromBufferAttribute(l,d),Wa.fromBufferAttribute(l,c),Ha.fromBufferAttribute(l,p),m.uv2=bi.getUV(Mc,go,_o,vo,Va,Wa,Ha,new gt));const g={a:d,b:c,c:p,normal:new te,materialIndex:0};bi.getNormal(go,_o,vo,g.normal),m.face=g}return m}class ir extends kr{constructor(e=1,n=1,s=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:o,heightSegments:l,depthSegments:d};const c=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],g=[],x=[];let _=0,M=0;C("z","y","x",-1,-1,s,n,e,d,l,0),C("z","y","x",1,-1,s,n,-e,d,l,1),C("x","z","y",1,1,e,s,n,o,d,2),C("x","z","y",1,-1,e,s,-n,o,d,3),C("x","y","z",1,-1,e,n,s,o,l,4),C("x","y","z",-1,-1,e,n,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new Rr(m,3)),this.setAttribute("normal",new Rr(g,3)),this.setAttribute("uv",new Rr(x,2));function C(y,v,T,N,b,D,R,G,X,E,k){const Y=D/X,ce=R/E,me=D/2,W=R/2,V=G/2,re=X+1,fe=E+1;let le=0,O=0;const ee=new te;for(let Z=0;Z<fe;Z++){const F=Z*ce-W;for(let I=0;I<re;I++){const J=I*Y-me;ee[y]=J*N,ee[v]=F*b,ee[T]=V,m.push(ee.x,ee.y,ee.z),ee[y]=0,ee[v]=0,ee[T]=G>0?1:-1,g.push(ee.x,ee.y,ee.z),x.push(I/X),x.push(1-Z/E),le+=1}}for(let Z=0;Z<E;Z++)for(let F=0;F<X;F++){const I=_+F+re*Z,J=_+F+re*(Z+1),ue=_+(F+1)+re*(Z+1),de=_+(F+1)+re*Z;p.push(I,J,de),p.push(J,ue,de),O+=6}c.addGroup(M,O,k),M+=O,_+=le}}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(u){const e={};for(const n in u){e[n]={};for(const s in u[n]){const o=u[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[n][s]=o.clone():Array.isArray(o)?e[n][s]=o.slice():e[n][s]=o}}return e}function hn(u){const e={};for(let n=0;n<u.length;n++){const s=bs(u[n]);for(const o in s)e[o]=s[o]}return e}function O0(u){const e=[];for(let n=0;n<u.length;n++)e.push(u[n].clone());return e}function om(u){return u.getRenderTarget()===null&&u.outputEncoding===xt?ui:Eo}const B0={clone:bs,merge:hn};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class am extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends am{constructor(e=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,s,o,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nc*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,n-=d.offsetY*s/m,o*=d.width/p,s*=d.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-s,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,_s=1;class W0 extends In{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s;const o=new Hn(gs,_s,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const l=new Hn(gs,_s,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(-1,0,0),this.add(l);const d=new Hn(gs,_s,e,n);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const c=new Hn(gs,_s,e,n);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const p=new Hn(gs,_s,e,n);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,1),this.add(p);const m=new Hn(gs,_s,e,n);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,-1),this.add(m)}update(e,n){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget,[o,l,d,c,p,m]=this.children,g=e.getRenderTarget(),x=e.toneMapping,_=e.xr.enabled;e.toneMapping=Ai,e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0),e.render(n,o),e.setRenderTarget(s,1),e.render(n,l),e.setRenderTarget(s,2),e.render(n,d),e.setRenderTarget(s,3),e.render(n,c),e.setRenderTarget(s,4),e.render(n,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5),e.render(n,m),e.setRenderTarget(g),e.toneMapping=x,e.xr.enabled=_,s.texture.needsPMREMUpdate=!0}}class lm extends Dn{constructor(e,n,s,o,l,d,c,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,s,o,l,d,c,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H0 extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new lm(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ir(5,5,5),l=new Fr({name:"CubemapFromEquirect",uniforms:bs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Rn,blending:tr});l.uniforms.tEquirect.value=n;const d=new jn(o,l),c=n.minFilter;return n.minFilter===Mo&&(n.minFilter=Wn),new W0(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,s,o){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,s,o);e.setRenderTarget(l)}}const wc=new te,j0=new te,X0=new Pn;class Er{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,o){return this.normal.set(e,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const o=wc.subVectors(s,n).cross(j0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const s=e.delta(wc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(s).multiplyScalar(l).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||X0.getNormalMatrix(e),o=this.coplanarPoint(wc).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Vc,qa=new te;class um{constructor(e=new Er,n=new Er,s=new Er,o=new Er,l=new Er,d=new Er){this.planes=[e,n,s,o,l,d]}set(e,n,s,o,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(s),c[3].copy(o),c[4].copy(l),c[5].copy(d),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e){const n=this.planes,s=e.elements,o=s[0],l=s[1],d=s[2],c=s[3],p=s[4],m=s[5],g=s[6],x=s[7],_=s[8],M=s[9],C=s[10],y=s[11],v=s[12],T=s[13],N=s[14],b=s[15];return n[0].setComponents(c-o,x-p,y-_,b-v).normalize(),n[1].setComponents(c+o,x+p,y+_,b+v).normalize(),n[2].setComponents(c+l,x+m,y+M,b+T).normalize(),n[3].setComponents(c-l,x-m,y-M,b-T).normalize(),n[4].setComponents(c-d,x-g,y-C,b-N).normalize(),n[5].setComponents(c+d,x+g,y+C,b+N).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(qa.x=o.normal.x>0?e.max.x:e.min.x,qa.y=o.normal.y>0?e.max.y:e.min.y,qa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cm(){let u=null,e=!1,n=null,s=null;function o(l,d){n(l,d),s=u.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(s=u.requestAnimationFrame(o),e=!0)},stop:function(){u.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){u=l}}}function q0(u,e){const n=e.isWebGL2,s=new WeakMap;function o(m,g){const x=m.array,_=m.usage,M=u.createBuffer();u.bindBuffer(g,M),u.bufferData(g,x,_),m.onUploadCallback();let C;if(x instanceof Float32Array)C=5126;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)C=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C=5123;else if(x instanceof Int16Array)C=5122;else if(x instanceof Uint32Array)C=5125;else if(x instanceof Int32Array)C=5124;else if(x instanceof Int8Array)C=5120;else if(x instanceof Uint8Array)C=5121;else if(x instanceof Uint8ClampedArray)C=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:M,type:C,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version}}function l(m,g,x){const _=g.array,M=g.updateRange;u.bindBuffer(x,m),M.count===-1?u.bufferSubData(x,0,_):(n?u.bufferSubData(x,M.offset*_.BYTES_PER_ELEMENT,_,M.offset,M.count):u.bufferSubData(x,M.offset*_.BYTES_PER_ELEMENT,_.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(u.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const _=s.get(m);(!_||_.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=s.get(m);x===void 0?s.set(m,o(m,g)):x.version<m.version&&(l(x.buffer,m,g),x.version=m.version)}return{get:d,remove:c,update:p}}class sl extends kr{constructor(e=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:o};const l=e/2,d=n/2,c=Math.floor(s),p=Math.floor(o),m=c+1,g=p+1,x=e/c,_=n/p,M=[],C=[],y=[],v=[];for(let T=0;T<g;T++){const N=T*_-d;for(let b=0;b<m;b++){const D=b*x-l;C.push(D,-N,0),y.push(0,0,1),v.push(b/c),v.push(1-T/p)}}for(let T=0;T<p;T++)for(let N=0;N<c;N++){const b=N+m*T,D=N+m*(T+1),R=N+1+m*(T+1),G=N+1+m*T;M.push(b,D,G),M.push(D,R,G)}this.setIndex(M),this.setAttribute("position",new Rr(C,3)),this.setAttribute("normal",new Rr(y,3)),this.setAttribute("uv",new Rr(v,2))}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ev="vec3 transformed = vec3( position );",tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ov=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ox=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,My=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:Y0,alphamap_pars_fragment:$0,alphatest_fragment:Z0,alphatest_pars_fragment:K0,aomap_fragment:Q0,aomap_pars_fragment:J0,begin_vertex:ev,beginnormal_vertex:tv,bsdfs:nv,iridescence_fragment:iv,bumpmap_pars_fragment:rv,clipping_planes_fragment:sv,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:av,clipping_planes_vertex:lv,color_fragment:uv,color_pars_fragment:cv,color_pars_vertex:fv,color_vertex:dv,common:hv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:gv,displacementmap_vertex:_v,emissivemap_fragment:vv,emissivemap_pars_fragment:xv,encodings_fragment:yv,encodings_pars_fragment:Sv,envmap_fragment:Mv,envmap_common_pars_fragment:wv,envmap_pars_fragment:Ev,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:zv,envmap_vertex:Cv,fog_vertex:bv,fog_pars_vertex:Av,fog_fragment:Lv,fog_pars_fragment:Pv,gradientmap_pars_fragment:Rv,lightmap_fragment:Dv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Nv,lights_lambert_pars_fragment:Fv,lights_pars_begin:kv,lights_toon_fragment:Uv,lights_toon_pars_fragment:Ov,lights_phong_fragment:Bv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Vv,lights_physical_pars_fragment:Wv,lights_fragment_begin:Hv,lights_fragment_maps:jv,lights_fragment_end:Xv,logdepthbuf_fragment:qv,logdepthbuf_pars_fragment:Yv,logdepthbuf_pars_vertex:$v,logdepthbuf_vertex:Zv,map_fragment:Kv,map_pars_fragment:Qv,map_particle_fragment:Jv,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphcolor_vertex:ix,morphnormal_vertex:rx,morphtarget_pars_vertex:sx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:ux,normal_pars_vertex:cx,normal_vertex:fx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,output_fragment:_x,packing:vx,premultiplied_alpha_fragment:xx,project_vertex:yx,dithering_fragment:Sx,dithering_pars_fragment:Mx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Cx,shadowmap_vertex:bx,shadowmask_pars_fragment:Ax,skinbase_vertex:Lx,skinning_pars_vertex:Px,skinning_vertex:Rx,skinnormal_vertex:Dx,specularmap_fragment:Ix,specularmap_pars_fragment:Nx,tonemapping_fragment:Fx,tonemapping_pars_fragment:kx,transmission_fragment:zx,transmission_pars_fragment:Ux,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:Gx,uv2_pars_fragment:Vx,uv2_pars_vertex:Wx,uv2_vertex:Hx,worldpos_vertex:jx,background_vert:Xx,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:$x,cube_vert:Zx,cube_frag:Kx,depth_vert:Qx,depth_frag:Jx,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:ry,linedashed_frag:sy,meshbasic_vert:oy,meshbasic_frag:ay,meshlambert_vert:ly,meshlambert_frag:uy,meshmatcap_vert:cy,meshmatcap_frag:fy,meshnormal_vert:dy,meshnormal_frag:hy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:gy,meshphysical_frag:_y,meshtoon_vert:vy,meshtoon_frag:xy,points_vert:yy,points_frag:Sy,shadow_vert:My,shadow_frag:wy,sprite_vert:Ey,sprite_frag:Ty},Ee={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pn},uv2Transform:{value:new Pn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pn}}},ci={basic:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:hn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:hn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:hn([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:hn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:hn([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:hn([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:hn([Ee.common,Ee.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:hn([Ee.lights,Ee.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ci.physical={uniforms:hn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new gt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ya={r:0,b:0,g:0};function Cy(u,e,n,s,o,l,d){const c=new Et(0);let p=l===!0?0:1,m,g,x=null,_=0,M=null;function C(v,T){let N=!1,b=T.isScene===!0?T.background:null;b&&b.isTexture&&(b=(T.backgroundBlurriness>0?n:e).get(b));const D=u.xr,R=D.getSession&&D.getSession();R&&R.environmentBlendMode==="additive"&&(b=null),b===null?y(c,p):b&&b.isColor&&(y(b,1),N=!0),(u.autoClear||N)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),b&&(b.isCubeTexture||b.mapping===nl)?(g===void 0&&(g=new jn(new ir(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:bs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,X,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=b,g.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,g.material.toneMapped=b.encoding!==xt,(x!==b||_!==b.version||M!==u.toneMapping)&&(g.material.needsUpdate=!0,x=b,_=b.version,M=u.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new jn(new sl(2,2),new Fr({name:"BackgroundMaterial",uniforms:bs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.toneMapped=b.encoding!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||_!==b.version||M!==u.toneMapping)&&(m.material.needsUpdate=!0,x=b,_=b.version,M=u.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function y(v,T){v.getRGB(Ya,om(u)),s.buffers.color.setClear(Ya.r,Ya.g,Ya.b,T,d)}return{getClearColor:function(){return c},setClearColor:function(v,T=1){c.set(v),p=T,y(c,p)},getClearAlpha:function(){return p},setClearAlpha:function(v){p=v,y(c,p)},render:C}}function by(u,e,n,s){const o=u.getParameter(34921),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||l!==null,c={},p=v(null);let m=p,g=!1;function x(V,re,fe,le,O){let ee=!1;if(d){const Z=y(le,fe,re);m!==Z&&(m=Z,M(m.object)),ee=T(V,le,fe,O),ee&&N(V,le,fe,O)}else{const Z=re.wireframe===!0;(m.geometry!==le.id||m.program!==fe.id||m.wireframe!==Z)&&(m.geometry=le.id,m.program=fe.id,m.wireframe=Z,ee=!0)}O!==null&&n.update(O,34963),(ee||g)&&(g=!1,E(V,re,fe,le),O!==null&&u.bindBuffer(34963,n.get(O).buffer))}function _(){return s.isWebGL2?u.createVertexArray():l.createVertexArrayOES()}function M(V){return s.isWebGL2?u.bindVertexArray(V):l.bindVertexArrayOES(V)}function C(V){return s.isWebGL2?u.deleteVertexArray(V):l.deleteVertexArrayOES(V)}function y(V,re,fe){const le=fe.wireframe===!0;let O=c[V.id];O===void 0&&(O={},c[V.id]=O);let ee=O[re.id];ee===void 0&&(ee={},O[re.id]=ee);let Z=ee[le];return Z===void 0&&(Z=v(_()),ee[le]=Z),Z}function v(V){const re=[],fe=[],le=[];for(let O=0;O<o;O++)re[O]=0,fe[O]=0,le[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:fe,attributeDivisors:le,object:V,attributes:{},index:null}}function T(V,re,fe,le){const O=m.attributes,ee=re.attributes;let Z=0;const F=fe.getAttributes();for(const I in F)if(F[I].location>=0){const ue=O[I];let de=ee[I];if(de===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),ue===void 0||ue.attribute!==de||de&&ue.data!==de.data)return!0;Z++}return m.attributesNum!==Z||m.index!==le}function N(V,re,fe,le){const O={},ee=re.attributes;let Z=0;const F=fe.getAttributes();for(const I in F)if(F[I].location>=0){let ue=ee[I];ue===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(ue=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(ue=V.instanceColor));const de={};de.attribute=ue,ue&&ue.data&&(de.data=ue.data),O[I]=de,Z++}m.attributes=O,m.attributesNum=Z,m.index=le}function b(){const V=m.newAttributes;for(let re=0,fe=V.length;re<fe;re++)V[re]=0}function D(V){R(V,0)}function R(V,re){const fe=m.newAttributes,le=m.enabledAttributes,O=m.attributeDivisors;fe[V]=1,le[V]===0&&(u.enableVertexAttribArray(V),le[V]=1),O[V]!==re&&((s.isWebGL2?u:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,re),O[V]=re)}function G(){const V=m.newAttributes,re=m.enabledAttributes;for(let fe=0,le=re.length;fe<le;fe++)re[fe]!==V[fe]&&(u.disableVertexAttribArray(fe),re[fe]=0)}function X(V,re,fe,le,O,ee){s.isWebGL2===!0&&(fe===5124||fe===5125)?u.vertexAttribIPointer(V,re,fe,O,ee):u.vertexAttribPointer(V,re,fe,le,O,ee)}function E(V,re,fe,le){if(s.isWebGL2===!1&&(V.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const O=le.attributes,ee=fe.getAttributes(),Z=re.defaultAttributeValues;for(const F in ee){const I=ee[F];if(I.location>=0){let J=O[F];if(J===void 0&&(F==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),F==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),J!==void 0){const ue=J.normalized,de=J.itemSize,H=n.get(J);if(H===void 0)continue;const Le=H.buffer,ye=H.type,Me=H.bytesPerElement;if(J.isInterleavedBufferAttribute){const we=J.data,lt=we.stride,qe=J.offset;if(we.isInstancedInterleavedBuffer){for(let Ve=0;Ve<I.locationSize;Ve++)R(I.location+Ve,we.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)D(I.location+Ve);u.bindBuffer(34962,Le);for(let Ve=0;Ve<I.locationSize;Ve++)X(I.location+Ve,de/I.locationSize,ye,ue,lt*Me,(qe+de/I.locationSize*Ve)*Me)}else{if(J.isInstancedBufferAttribute){for(let we=0;we<I.locationSize;we++)R(I.location+we,J.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let we=0;we<I.locationSize;we++)D(I.location+we);u.bindBuffer(34962,Le);for(let we=0;we<I.locationSize;we++)X(I.location+we,de/I.locationSize,ye,ue,de*Me,de/I.locationSize*we*Me)}}else if(Z!==void 0){const ue=Z[F];if(ue!==void 0)switch(ue.length){case 2:u.vertexAttrib2fv(I.location,ue);break;case 3:u.vertexAttrib3fv(I.location,ue);break;case 4:u.vertexAttrib4fv(I.location,ue);break;default:u.vertexAttrib1fv(I.location,ue)}}}}G()}function k(){me();for(const V in c){const re=c[V];for(const fe in re){const le=re[fe];for(const O in le)C(le[O].object),delete le[O];delete re[fe]}delete c[V]}}function Y(V){if(c[V.id]===void 0)return;const re=c[V.id];for(const fe in re){const le=re[fe];for(const O in le)C(le[O].object),delete le[O];delete re[fe]}delete c[V.id]}function ce(V){for(const re in c){const fe=c[re];if(fe[V.id]===void 0)continue;const le=fe[V.id];for(const O in le)C(le[O].object),delete le[O];delete fe[V.id]}}function me(){W(),g=!0,m!==p&&(m=p,M(m.object))}function W(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:me,resetDefaultState:W,dispose:k,releaseStatesOfGeometry:Y,releaseStatesOfProgram:ce,initAttributes:b,enableAttribute:D,disableUnusedAttributes:G}}function Ay(u,e,n,s){const o=s.isWebGL2;let l;function d(m){l=m}function c(m,g){u.drawArrays(l,m,g),n.update(g,l,1)}function p(m,g,x){if(x===0)return;let _,M;if(o)_=u,M="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[M](l,m,g,x),n.update(g,l,x)}this.setMode=d,this.render=c,this.renderInstances=p}function Ly(u,e,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");s=u.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(X){if(X==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";X="mediump"}return X==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&u instanceof WebGL2RenderingContext;let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const m=d||e.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,x=u.getParameter(34930),_=u.getParameter(35660),M=u.getParameter(3379),C=u.getParameter(34076),y=u.getParameter(34921),v=u.getParameter(36347),T=u.getParameter(36348),N=u.getParameter(36349),b=_>0,D=d||e.has("OES_texture_float"),R=b&&D,G=d?u.getParameter(36183):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:C,maxAttributes:y,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:N,vertexTextures:b,floatFragmentTextures:D,floatVertexTextures:R,maxSamples:G}}function Py(u){const e=this;let n=null,s=0,o=!1,l=!1;const d=new Er,c=new Pn,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||s!==0||o;return o=_,s=x.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){n=g(x,_,0)},this.setState=function(x,_,M){const C=x.clippingPlanes,y=x.clipIntersection,v=x.clipShadows,T=u.get(x);if(!o||C===null||C.length===0||l&&!v)l?g(null):m();else{const N=l?0:s,b=N*4;let D=T.clippingState||null;p.value=D,D=g(C,_,b,M);for(let R=0;R!==b;++R)D[R]=n[R];T.clippingState=D,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,_,M,C){const y=x!==null?x.length:0;let v=null;if(y!==0){if(v=p.value,C!==!0||v===null){const T=M+y*4,N=_.matrixWorldInverse;c.getNormalMatrix(N),(v===null||v.length<T)&&(v=new Float32Array(T));for(let b=0,D=M;b!==y;++b,D+=4)d.copy(x[b]).applyMatrix4(N,c),d.normal.toArray(v,D),v[D+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Ry(u){let e=new WeakMap;function n(d,c){return c===Ic?d.mapping=Es:c===Nc&&(d.mapping=Ts),d}function s(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const c=d.mapping;if(c===Ic||c===Nc)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new H0(p.height/2);return m.fromEquirectangularTexture(u,d),e.set(d,m),d.addEventListener("dispose",o),n(m.texture,d.mapping)}else return null}}return d}function o(d){const c=d.target;c.removeEventListener("dispose",o);const p=e.get(c);p!==void 0&&(e.delete(c),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Dy extends am{constructor(e=-1,n=1,s=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,d=s+e,c=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,c-=g*this.view.offsetY,p=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ss=4,pp=[.125,.215,.35,.446,.526,.582],Cr=20,Ec=new Dy,mp=new Et;let Tc=null;const Tr=(1+Math.sqrt(5))/2,xs=1/Tr,gp=[new te(1,1,1),new te(-1,1,1),new te(1,1,-1),new te(-1,1,-1),new te(0,Tr,xs),new te(0,Tr,-xs),new te(xs,0,Tr),new te(-xs,0,Tr),new te(Tr,xs,0),new te(-Tr,xs,0)];class _p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,o=100){Tc=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget();const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:wo,format:ii,encoding:Ir,depthBuffer:!1},o=vp(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,n,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(l)),this._blurMaterial=Ny(l,e,n)}return o}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,Ec)}_sceneToCubeUV(e,n,s,o){const c=new Hn(90,1,n,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,_=g.toneMapping;g.getClearColor(mp),g.toneMapping=Ai,g.autoClear=!1;const M=new So({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),C=new jn(new ir,M);let y=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,y=!0):(M.color.copy(mp),y=!0);for(let T=0;T<6;T++){const N=T%3;N===0?(c.up.set(0,p[T],0),c.lookAt(m[T],0,0)):N===1?(c.up.set(0,0,p[T]),c.lookAt(0,m[T],0)):(c.up.set(0,p[T],0),c.lookAt(0,0,m[T]));const b=this._cubeSize;$a(o,N*b,T>2?b:0,b,b),g.setRenderTarget(o),y&&g.render(C,c),g.render(e,c)}C.geometry.dispose(),C.material.dispose(),g.toneMapping=_,g.autoClear=x,e.background=v}_textureToCubeUV(e,n){const s=this._renderer,o=e.mapping===Es||e.mapping===Ts;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());const l=o?this._cubemapMaterial:this._equirectMaterial,d=new jn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const p=this._cubeSize;$a(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(d,Ec)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),d=gp[(o-1)%gp.length];this._blur(e,o-1,o,l,d)}n.autoClear=s}_blur(e,n,s,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,s,o,"latitudinal",l),this._halfBlur(d,e,s,s,o,"longitudinal",l)}_halfBlur(e,n,s,o,l,d,c){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new jn(this._lodPlanes[o],m),_=m.uniforms,M=this._sizeLods[s]-1,C=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Cr-1),y=l/C,v=isFinite(l)?1+Math.floor(g*y):Cr;v>Cr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Cr}`);const T=[];let N=0;for(let X=0;X<Cr;++X){const E=X/y,k=Math.exp(-E*E/2);T.push(k),X===0?N+=k:X<v&&(N+=2*k)}for(let X=0;X<T.length;X++)T[X]=T[X]/N;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=T,_.latitudinal.value=d==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:b}=this;_.dTheta.value=C,_.mipInt.value=b-s;const D=this._sizeLods[o],R=3*D*(o>b-Ss?o-b+Ss:0),G=4*(this._cubeSize-D);$a(n,R,G,3*D,2*D),p.setRenderTarget(n),p.render(x,Ec)}}function Iy(u){const e=[],n=[],s=[];let o=u;const l=u-Ss+1+pp.length;for(let d=0;d<l;d++){const c=Math.pow(2,o);n.push(c);let p=1/c;d>u-Ss?p=pp[d-u+Ss-1]:d===0&&(p=0),s.push(p);const m=1/(c-2),g=-m,x=1+m,_=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,C=6,y=3,v=2,T=1,N=new Float32Array(y*C*M),b=new Float32Array(v*C*M),D=new Float32Array(T*C*M);for(let G=0;G<M;G++){const X=G%3*2/3-1,E=G>2?0:-1,k=[X,E,0,X+2/3,E,0,X+2/3,E+1,0,X,E,0,X+2/3,E+1,0,X,E+1,0];N.set(k,y*C*G),b.set(_,v*C*G);const Y=[G,G,G,G,G,G];D.set(Y,T*C*G)}const R=new kr;R.setAttribute("position",new fi(N,y)),R.setAttribute("uv",new fi(b,v)),R.setAttribute("faceIndex",new fi(D,T)),e.push(R),o>Ss&&o--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function vp(u,e,n){const s=new Nr(u,e,n);return s.texture.mapping=nl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $a(u,e,n,s,o){u.viewport.set(e,n,s,o),u.scissor.set(e,n,s,o)}function Ny(u,e,n){const s=new Float32Array(Cr),o=new te(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function xp(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function yp(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fy(u){let e=new WeakMap,n=null;function s(c){if(c&&c.isTexture){const p=c.mapping,m=p===Ic||p===Nc,g=p===Es||p===Ts;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let x=e.get(c);return n===null&&(n=new _p(u)),x=m?n.fromEquirectangular(c,x):n.fromCubemap(c,x),e.set(c,x),x.texture}else{if(e.has(c))return e.get(c).texture;{const x=c.image;if(m&&x&&x.height>0||g&&x&&o(x)){n===null&&(n=new _p(u));const _=m?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",l),_.texture}else return null}}}return c}function o(c){let p=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&p++;return p===m}function l(c){const p=c.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ky(u){const e={};function n(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=u.getExtension(s)}return e[s]=o,o}return{has:function(s){return n(s)!==null},init:function(s){s.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(s){const o=n(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function zy(u,e,n,s){const o={},l=new WeakMap;function d(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const C in _.attributes)e.remove(_.attributes[C]);_.removeEventListener("dispose",d),delete o[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(x,_){return o[_.id]===!0||(_.addEventListener("dispose",d),o[_.id]=!0,n.memory.geometries++),_}function p(x){const _=x.attributes;for(const C in _)e.update(_[C],34962);const M=x.morphAttributes;for(const C in M){const y=M[C];for(let v=0,T=y.length;v<T;v++)e.update(y[v],34962)}}function m(x){const _=[],M=x.index,C=x.attributes.position;let y=0;if(M!==null){const N=M.array;y=M.version;for(let b=0,D=N.length;b<D;b+=3){const R=N[b+0],G=N[b+1],X=N[b+2];_.push(R,G,G,X,X,R)}}else{const N=C.array;y=C.version;for(let b=0,D=N.length/3-1;b<D;b+=3){const R=b+0,G=b+1,X=b+2;_.push(R,G,G,X,X,R)}}const v=new(Qp(_)?sm:rm)(_,1);v.version=y;const T=l.get(x);T&&e.remove(T),l.set(x,v)}function g(x){const _=l.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&m(x)}else m(x);return l.get(x)}return{get:c,update:p,getWireframeAttribute:g}}function Uy(u,e,n,s){const o=s.isWebGL2;let l;function d(_){l=_}let c,p;function m(_){c=_.type,p=_.bytesPerElement}function g(_,M){u.drawElements(l,M,c,_*p),n.update(M,l,1)}function x(_,M,C){if(C===0)return;let y,v;if(o)y=u,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](l,M,c,_*p,C),n.update(M,l,C)}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=x}function Oy(u){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,d,c){switch(n.calls++,d){case 4:n.triangles+=c*(l/3);break;case 1:n.lines+=c*(l/2);break;case 3:n.lines+=c*(l-1);break;case 2:n.lines+=c*l;break;case 0:n.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:s}}function By(u,e){return u[0]-e[0]}function Gy(u,e){return Math.abs(e[1])-Math.abs(u[1])}function Vy(u,e,n){const s={},o=new Float32Array(8),l=new WeakMap,d=new $t,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function p(m,g,x,_){const M=m.morphTargetInfluences;if(e.isWebGL2===!0){const y=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,v=y!==void 0?y.length:0;let T=l.get(g);if(T===void 0||T.count!==v){let fe=function(){V.dispose(),l.delete(g),g.removeEventListener("dispose",fe)};var C=fe;T!==void 0&&T.texture.dispose();const D=g.morphAttributes.position!==void 0,R=g.morphAttributes.normal!==void 0,G=g.morphAttributes.color!==void 0,X=g.morphAttributes.position||[],E=g.morphAttributes.normal||[],k=g.morphAttributes.color||[];let Y=0;D===!0&&(Y=1),R===!0&&(Y=2),G===!0&&(Y=3);let ce=g.attributes.position.count*Y,me=1;ce>e.maxTextureSize&&(me=Math.ceil(ce/e.maxTextureSize),ce=e.maxTextureSize);const W=new Float32Array(ce*me*4*v),V=new nm(W,ce,me,v);V.type=Ar,V.needsUpdate=!0;const re=Y*4;for(let le=0;le<v;le++){const O=X[le],ee=E[le],Z=k[le],F=ce*me*4*le;for(let I=0;I<O.count;I++){const J=I*re;D===!0&&(d.fromBufferAttribute(O,I),W[F+J+0]=d.x,W[F+J+1]=d.y,W[F+J+2]=d.z,W[F+J+3]=0),R===!0&&(d.fromBufferAttribute(ee,I),W[F+J+4]=d.x,W[F+J+5]=d.y,W[F+J+6]=d.z,W[F+J+7]=0),G===!0&&(d.fromBufferAttribute(Z,I),W[F+J+8]=d.x,W[F+J+9]=d.y,W[F+J+10]=d.z,W[F+J+11]=Z.itemSize===4?d.w:1)}}T={count:v,texture:V,size:new gt(ce,me)},l.set(g,T),g.addEventListener("dispose",fe)}let N=0;for(let D=0;D<M.length;D++)N+=M[D];const b=g.morphTargetsRelative?1:1-N;_.getUniforms().setValue(u,"morphTargetBaseInfluence",b),_.getUniforms().setValue(u,"morphTargetInfluences",M),_.getUniforms().setValue(u,"morphTargetsTexture",T.texture,n),_.getUniforms().setValue(u,"morphTargetsTextureSize",T.size)}else{const y=M===void 0?0:M.length;let v=s[g.id];if(v===void 0||v.length!==y){v=[];for(let R=0;R<y;R++)v[R]=[R,0];s[g.id]=v}for(let R=0;R<y;R++){const G=v[R];G[0]=R,G[1]=M[R]}v.sort(Gy);for(let R=0;R<8;R++)R<y&&v[R][1]?(c[R][0]=v[R][0],c[R][1]=v[R][1]):(c[R][0]=Number.MAX_SAFE_INTEGER,c[R][1]=0);c.sort(By);const T=g.morphAttributes.position,N=g.morphAttributes.normal;let b=0;for(let R=0;R<8;R++){const G=c[R],X=G[0],E=G[1];X!==Number.MAX_SAFE_INTEGER&&E?(T&&g.getAttribute("morphTarget"+R)!==T[X]&&g.setAttribute("morphTarget"+R,T[X]),N&&g.getAttribute("morphNormal"+R)!==N[X]&&g.setAttribute("morphNormal"+R,N[X]),o[R]=E,b+=E):(T&&g.hasAttribute("morphTarget"+R)===!0&&g.deleteAttribute("morphTarget"+R),N&&g.hasAttribute("morphNormal"+R)===!0&&g.deleteAttribute("morphNormal"+R),o[R]=0)}const D=g.morphTargetsRelative?1:1-b;_.getUniforms().setValue(u,"morphTargetBaseInfluence",D),_.getUniforms().setValue(u,"morphTargetInfluences",o)}}return{update:p}}function Wy(u,e,n,s){let o=new WeakMap;function l(p){const m=s.render.frame,g=p.geometry,x=e.get(p,g);return o.get(x)!==m&&(e.update(x),o.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",c)===!1&&p.addEventListener("dispose",c),n.update(p.instanceMatrix,34962),p.instanceColor!==null&&n.update(p.instanceColor,34962)),x}function d(){o=new WeakMap}function c(p){const m=p.target;m.removeEventListener("dispose",c),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:d}}const fm=new Dn,dm=new nm,hm=new b0,pm=new lm,Sp=[],Mp=[],wp=new Float32Array(16),Ep=new Float32Array(9),Tp=new Float32Array(4);function Ls(u,e,n){const s=u[0];if(s<=0||s>0)return u;const o=e*n;let l=Sp[o];if(l===void 0&&(l=new Float32Array(o),Sp[o]=l),e!==0){s.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=n,u[d].toArray(l,c)}return l}function Ot(u,e){if(u.length!==e.length)return!1;for(let n=0,s=u.length;n<s;n++)if(u[n]!==e[n])return!1;return!0}function Bt(u,e){for(let n=0,s=e.length;n<s;n++)u[n]=e[n]}function ol(u,e){let n=Mp[e];n===void 0&&(n=new Int32Array(e),Mp[e]=n);for(let s=0;s!==e;++s)n[s]=u.allocateTextureUnit();return n}function Hy(u,e){const n=this.cache;n[0]!==e&&(u.uniform1f(this.addr,e),n[0]=e)}function jy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;u.uniform2fv(this.addr,e),Bt(n,e)}}function Xy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(u.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;u.uniform3fv(this.addr,e),Bt(n,e)}}function qy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;u.uniform4fv(this.addr,e),Bt(n,e)}}function Yy(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ot(n,e))return;u.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,s))return;Tp.set(s),u.uniformMatrix2fv(this.addr,!1,Tp),Bt(n,s)}}function $y(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ot(n,e))return;u.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,s))return;Ep.set(s),u.uniformMatrix3fv(this.addr,!1,Ep),Bt(n,s)}}function Zy(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ot(n,e))return;u.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,s))return;wp.set(s),u.uniformMatrix4fv(this.addr,!1,wp),Bt(n,s)}}function Ky(u,e){const n=this.cache;n[0]!==e&&(u.uniform1i(this.addr,e),n[0]=e)}function Qy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;u.uniform2iv(this.addr,e),Bt(n,e)}}function Jy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;u.uniform3iv(this.addr,e),Bt(n,e)}}function eS(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;u.uniform4iv(this.addr,e),Bt(n,e)}}function tS(u,e){const n=this.cache;n[0]!==e&&(u.uniform1ui(this.addr,e),n[0]=e)}function nS(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;u.uniform2uiv(this.addr,e),Bt(n,e)}}function iS(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;u.uniform3uiv(this.addr,e),Bt(n,e)}}function rS(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;u.uniform4uiv(this.addr,e),Bt(n,e)}}function sS(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture2D(e||fm,o)}function oS(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(e||hm,o)}function aS(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(e||pm,o)}function lS(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(e||dm,o)}function uS(u){switch(u){case 5126:return Hy;case 35664:return jy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return $y;case 35676:return Zy;case 5124:case 35670:return Ky;case 35667:case 35671:return Qy;case 35668:case 35672:return Jy;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return lS}}function cS(u,e){u.uniform1fv(this.addr,e)}function fS(u,e){const n=Ls(e,this.size,2);u.uniform2fv(this.addr,n)}function dS(u,e){const n=Ls(e,this.size,3);u.uniform3fv(this.addr,n)}function hS(u,e){const n=Ls(e,this.size,4);u.uniform4fv(this.addr,n)}function pS(u,e){const n=Ls(e,this.size,4);u.uniformMatrix2fv(this.addr,!1,n)}function mS(u,e){const n=Ls(e,this.size,9);u.uniformMatrix3fv(this.addr,!1,n)}function gS(u,e){const n=Ls(e,this.size,16);u.uniformMatrix4fv(this.addr,!1,n)}function _S(u,e){u.uniform1iv(this.addr,e)}function vS(u,e){u.uniform2iv(this.addr,e)}function xS(u,e){u.uniform3iv(this.addr,e)}function yS(u,e){u.uniform4iv(this.addr,e)}function SS(u,e){u.uniform1uiv(this.addr,e)}function MS(u,e){u.uniform2uiv(this.addr,e)}function wS(u,e){u.uniform3uiv(this.addr,e)}function ES(u,e){u.uniform4uiv(this.addr,e)}function TS(u,e,n){const s=this.cache,o=e.length,l=ol(n,o);Ot(s,l)||(u.uniform1iv(this.addr,l),Bt(s,l));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||fm,l[d])}function CS(u,e,n){const s=this.cache,o=e.length,l=ol(n,o);Ot(s,l)||(u.uniform1iv(this.addr,l),Bt(s,l));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||hm,l[d])}function bS(u,e,n){const s=this.cache,o=e.length,l=ol(n,o);Ot(s,l)||(u.uniform1iv(this.addr,l),Bt(s,l));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||pm,l[d])}function AS(u,e,n){const s=this.cache,o=e.length,l=ol(n,o);Ot(s,l)||(u.uniform1iv(this.addr,l),Bt(s,l));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||dm,l[d])}function LS(u){switch(u){case 5126:return cS;case 35664:return fS;case 35665:return dS;case 35666:return hS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return _S;case 35667:case 35671:return vS;case 35668:case 35672:return xS;case 35669:case 35673:return yS;case 5125:return SS;case 36294:return MS;case 36295:return wS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return AS}}class PS{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.setValue=uS(n.type)}}class RS{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.size=n.size,this.setValue=LS(n.type)}}class DS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const c=o[l];c.setValue(e,n[c.id],s)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function Cp(u,e){u.seq.push(e),u.map[e.id]=e}function IS(u,e,n){const s=u.name,o=s.length;for(Cc.lastIndex=0;;){const l=Cc.exec(s),d=Cc.lastIndex;let c=l[1];const p=l[2]==="]",m=l[3];if(p&&(c=c|0),m===void 0||m==="["&&d+2===o){Cp(n,m===void 0?new PS(c,u,e):new RS(c,u,e));break}else{let x=n.map[c];x===void 0&&(x=new DS(c),Cp(n,x)),n=x}}}class Ja{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,35718);for(let o=0;o<s;++o){const l=e.getActiveUniform(n,o),d=e.getUniformLocation(n,l.name);IS(l,d,this)}}setValue(e,n,s,o){const l=this.map[n];l!==void 0&&l.setValue(e,s,o)}setOptional(e,n,s){const o=n[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,n,s,o){for(let l=0,d=n.length;l!==d;++l){const c=n[l],p=s[c.id];p.needsUpdate!==!1&&c.setValue(e,p.value,o)}}static seqWithValue(e,n){const s=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in n&&s.push(d)}return s}}function bp(u,e,n){const s=u.createShader(e);return u.shaderSource(s,n),u.compileShader(s),s}let NS=0;function FS(u,e){const n=u.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=o;d<l;d++){const c=d+1;s.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return s.join(`
`)}function kS(u){switch(u){case Ir:return["Linear","( value )"];case xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function Ap(u,e,n){const s=u.getShaderParameter(e,35713),o=u.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+FS(u.getShaderSource(e),d)}else return o}function zS(u,e){const n=kS(e);return"vec4 "+u+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function US(u,e){let n;switch(e){case J_:n="Linear";break;case e0:n="Reinhard";break;case t0:n="OptimizedCineon";break;case n0:n="ACESFilmic";break;case i0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+u+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function OS(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.tangentSpaceNormalMap||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yo).join(`
`)}function BS(u){const e=[];for(const n in u){const s=u[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function GS(u,e){const n={},s=u.getProgramParameter(e,35721);for(let o=0;o<s;o++){const l=u.getActiveAttrib(e,o),d=l.name;let c=1;l.type===35674&&(c=2),l.type===35675&&(c=3),l.type===35676&&(c=4),n[d]={type:l.type,location:u.getAttribLocation(e,d),locationSize:c}}return n}function yo(u){return u!==""}function Lp(u,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return u.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(u,e){return u.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(u){return u.replace(VS,WS)}function WS(u,e){const n=Ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Oc(n)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(u){return u.replace(HS,jS)}function jS(u,e,n,s){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Dp(u){let e="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?e+=`
#define HIGH_PRECISION`:u.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XS(u){let e="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===Xp?e="SHADOWMAP_TYPE_PCF":u.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===xo&&(e="SHADOWMAP_TYPE_VSM"),e}function qS(u){let e="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YS(u){let e="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function $S(u){let e="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case $p:e="ENVMAP_BLENDING_MULTIPLY";break;case K_:e="ENVMAP_BLENDING_MIX";break;case Q_:e="ENVMAP_BLENDING_ADD";break}return e}function ZS(u){const e=u.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function KS(u,e,n,s){const o=u.getContext(),l=n.defines;let d=n.vertexShader,c=n.fragmentShader;const p=XS(n),m=qS(n),g=YS(n),x=$S(n),_=ZS(n),M=n.isWebGL2?"":OS(n),C=BS(l),y=o.createProgram();let v,T,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[C].filter(yo).join(`
`),v.length>0&&(v+=`
`),T=[M,C].filter(yo).join(`
`),T.length>0&&(T+=`
`)):(v=[Dp(n),"#define SHADER_NAME "+n.shaderName,C,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),T=[M,Dp(n),"#define SHADER_NAME "+n.shaderName,C,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Ai?US("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,zS("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),d=Oc(d),d=Lp(d,n),d=Pp(d,n),c=Oc(c),c=Lp(c,n),c=Pp(c,n),d=Rp(d),c=Rp(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,T=["#define varying in",n.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const b=N+v+d,D=N+T+c,R=bp(o,35633,b),G=bp(o,35632,D);if(o.attachShader(y,R),o.attachShader(y,G),n.index0AttributeName!==void 0?o.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y),u.debug.checkShaderErrors){const k=o.getProgramInfoLog(y).trim(),Y=o.getShaderInfoLog(R).trim(),ce=o.getShaderInfoLog(G).trim();let me=!0,W=!0;if(o.getProgramParameter(y,35714)===!1){me=!1;const V=Ap(o,R,"vertex"),re=Ap(o,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,35715)+`

Program Info Log: `+k+`
`+V+`
`+re)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(Y===""||ce==="")&&(W=!1);W&&(this.diagnostics={runnable:me,programLog:k,vertexShader:{log:Y,prefix:v},fragmentShader:{log:ce,prefix:T}})}o.deleteShader(R),o.deleteShader(G);let X;this.getUniforms=function(){return X===void 0&&(X=new Ja(o,y)),X};let E;return this.getAttributes=function(){return E===void 0&&(E=GS(o,y)),E},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=NS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=G,this}let QS=0;class JS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new eM(e),n.set(e,s)),s}}class eM{constructor(e){this.id=QS++,this.code=e,this.usedTimes=0}}function tM(u,e,n,s,o,l,d){const c=new im,p=new JS,m=[],g=o.isWebGL2,x=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E,k,Y,ce,me){const W=ce.fog,V=me.geometry,re=E.isMeshStandardMaterial?ce.environment:null,fe=(E.isMeshStandardMaterial?n:e).get(E.envMap||re),le=fe&&fe.mapping===nl?fe.image.height:null,O=C[E.type];E.precision!==null&&(M=o.getMaxPrecision(E.precision),M!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Z=ee!==void 0?ee.length:0;let F=0;V.morphAttributes.position!==void 0&&(F=1),V.morphAttributes.normal!==void 0&&(F=2),V.morphAttributes.color!==void 0&&(F=3);let I,J,ue,de;if(O){const lt=ci[O];I=lt.vertexShader,J=lt.fragmentShader}else I=E.vertexShader,J=E.fragmentShader,p.update(E),ue=p.getVertexShaderID(E),de=p.getFragmentShaderID(E);const H=u.getRenderTarget(),Le=E.alphaTest>0,ye=E.clearcoat>0,Me=E.iridescence>0;return{isWebGL2:g,shaderID:O,shaderName:E.type,vertexShader:I,fragmentShader:J,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,instancing:me.isInstancedMesh===!0,instancingColor:me.isInstancedMesh===!0&&me.instanceColor!==null,supportsVertexTextures:_,outputEncoding:H===null?u.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Ir,map:!!E.map,matcap:!!E.matcap,envMap:!!fe,envMapMode:fe&&fe.mapping,envMapCubeUVHeight:le,lightMap:!!E.lightMap,aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===w0,tangentSpaceNormalMap:E.normalMapType===M0,decodeVideoTexture:!!E.map&&E.map.isVideoTexture===!0&&E.map.encoding===xt,clearcoat:ye,clearcoatMap:ye&&!!E.clearcoatMap,clearcoatRoughnessMap:ye&&!!E.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!E.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!E.iridescenceMap,iridescenceThicknessMap:Me&&!!E.iridescenceThicknessMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,specularIntensityMap:!!E.specularIntensityMap,specularColorMap:!!E.specularColorMap,opaque:E.transparent===!1&&E.blending===Ms,alphaMap:!!E.alphaMap,alphaTest:Le,gradientMap:!!E.gradientMap,sheen:E.sheen>0,sheenColorMap:!!E.sheenColorMap,sheenRoughnessMap:!!E.sheenRoughnessMap,transmission:E.transmission>0,transmissionMap:!!E.transmissionMap,thicknessMap:!!E.thicknessMap,combine:E.combine,vertexTangents:!!E.normalMap&&!!V.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.iridescenceMap||!!E.iridescenceThicknessMap||!!E.displacementMap||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||!!E.sheenColorMap||!!E.sheenRoughnessMap,uvsVertexOnly:!(E.map||E.bumpMap||E.normalMap||E.specularMap||E.alphaMap||E.emissiveMap||E.roughnessMap||E.metalnessMap||E.clearcoatNormalMap||E.iridescenceMap||E.iridescenceThicknessMap||E.transmission>0||E.transmissionMap||E.thicknessMap||E.specularIntensityMap||E.specularColorMap||E.sheen>0||E.sheenColorMap||E.sheenRoughnessMap)&&!!E.displacementMap,fog:!!W,useFog:E.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:x,skinning:me.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:F,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:u.shadowMap.enabled&&Y.length>0,shadowMapType:u.shadowMap.type,toneMapping:E.toneMapped?u.toneMapping:Ai,physicallyCorrectLights:u.physicallyCorrectLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===er,flipSided:E.side===Rn,useDepthPacking:!!E.depthPacking,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function v(E){const k=[];if(E.shaderID?k.push(E.shaderID):(k.push(E.customVertexShaderID),k.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)k.push(Y),k.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(T(k,E),N(k,E),k.push(u.outputEncoding)),k.push(E.customProgramCacheKey),k.join()}function T(E,k){E.push(k.precision),E.push(k.outputEncoding),E.push(k.envMapMode),E.push(k.envMapCubeUVHeight),E.push(k.combine),E.push(k.vertexUvs),E.push(k.fogExp2),E.push(k.sizeAttenuation),E.push(k.morphTargetsCount),E.push(k.morphAttributeCount),E.push(k.numDirLights),E.push(k.numPointLights),E.push(k.numSpotLights),E.push(k.numSpotLightMaps),E.push(k.numHemiLights),E.push(k.numRectAreaLights),E.push(k.numDirLightShadows),E.push(k.numPointLightShadows),E.push(k.numSpotLightShadows),E.push(k.numSpotLightShadowsWithMaps),E.push(k.shadowMapType),E.push(k.toneMapping),E.push(k.numClippingPlanes),E.push(k.numClipIntersection),E.push(k.depthPacking)}function N(E,k){c.disableAll(),k.isWebGL2&&c.enable(0),k.supportsVertexTextures&&c.enable(1),k.instancing&&c.enable(2),k.instancingColor&&c.enable(3),k.map&&c.enable(4),k.matcap&&c.enable(5),k.envMap&&c.enable(6),k.lightMap&&c.enable(7),k.aoMap&&c.enable(8),k.emissiveMap&&c.enable(9),k.bumpMap&&c.enable(10),k.normalMap&&c.enable(11),k.objectSpaceNormalMap&&c.enable(12),k.tangentSpaceNormalMap&&c.enable(13),k.clearcoat&&c.enable(14),k.clearcoatMap&&c.enable(15),k.clearcoatRoughnessMap&&c.enable(16),k.clearcoatNormalMap&&c.enable(17),k.iridescence&&c.enable(18),k.iridescenceMap&&c.enable(19),k.iridescenceThicknessMap&&c.enable(20),k.displacementMap&&c.enable(21),k.specularMap&&c.enable(22),k.roughnessMap&&c.enable(23),k.metalnessMap&&c.enable(24),k.gradientMap&&c.enable(25),k.alphaMap&&c.enable(26),k.alphaTest&&c.enable(27),k.vertexColors&&c.enable(28),k.vertexAlphas&&c.enable(29),k.vertexUvs&&c.enable(30),k.vertexTangents&&c.enable(31),k.uvsVertexOnly&&c.enable(32),E.push(c.mask),c.disableAll(),k.fog&&c.enable(0),k.useFog&&c.enable(1),k.flatShading&&c.enable(2),k.logarithmicDepthBuffer&&c.enable(3),k.skinning&&c.enable(4),k.morphTargets&&c.enable(5),k.morphNormals&&c.enable(6),k.morphColors&&c.enable(7),k.premultipliedAlpha&&c.enable(8),k.shadowMapEnabled&&c.enable(9),k.physicallyCorrectLights&&c.enable(10),k.doubleSided&&c.enable(11),k.flipSided&&c.enable(12),k.useDepthPacking&&c.enable(13),k.dithering&&c.enable(14),k.specularIntensityMap&&c.enable(15),k.specularColorMap&&c.enable(16),k.transmission&&c.enable(17),k.transmissionMap&&c.enable(18),k.thicknessMap&&c.enable(19),k.sheen&&c.enable(20),k.sheenColorMap&&c.enable(21),k.sheenRoughnessMap&&c.enable(22),k.decodeVideoTexture&&c.enable(23),k.opaque&&c.enable(24),E.push(c.mask)}function b(E){const k=C[E.type];let Y;if(k){const ce=ci[k];Y=B0.clone(ce.uniforms)}else Y=E.uniforms;return Y}function D(E,k){let Y;for(let ce=0,me=m.length;ce<me;ce++){const W=m[ce];if(W.cacheKey===k){Y=W,++Y.usedTimes;break}}return Y===void 0&&(Y=new KS(u,k,E,l),m.push(Y)),Y}function R(E){if(--E.usedTimes===0){const k=m.indexOf(E);m[k]=m[m.length-1],m.pop(),E.destroy()}}function G(E){p.remove(E)}function X(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:D,releaseProgram:R,releaseShaderCache:G,programs:m,dispose:X}}function nM(){let u=new WeakMap;function e(l){let d=u.get(l);return d===void 0&&(d={},u.set(l,d)),d}function n(l){u.delete(l)}function s(l,d,c){u.get(l)[d]=c}function o(){u=new WeakMap}return{get:e,remove:n,update:s,dispose:o}}function iM(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.material.id!==e.material.id?u.material.id-e.material.id:u.z!==e.z?u.z-e.z:u.id-e.id}function Ip(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.z!==e.z?e.z-u.z:u.id-e.id}function Np(){const u=[];let e=0;const n=[],s=[],o=[];function l(){e=0,n.length=0,s.length=0,o.length=0}function d(x,_,M,C,y,v){let T=u[e];return T===void 0?(T={id:x.id,object:x,geometry:_,material:M,groupOrder:C,renderOrder:x.renderOrder,z:y,group:v},u[e]=T):(T.id=x.id,T.object=x,T.geometry=_,T.material=M,T.groupOrder=C,T.renderOrder=x.renderOrder,T.z=y,T.group=v),e++,T}function c(x,_,M,C,y,v){const T=d(x,_,M,C,y,v);M.transmission>0?s.push(T):M.transparent===!0?o.push(T):n.push(T)}function p(x,_,M,C,y,v){const T=d(x,_,M,C,y,v);M.transmission>0?s.unshift(T):M.transparent===!0?o.unshift(T):n.unshift(T)}function m(x,_){n.length>1&&n.sort(x||iM),s.length>1&&s.sort(_||Ip),o.length>1&&o.sort(_||Ip)}function g(){for(let x=e,_=u.length;x<_;x++){const M=u[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:o,init:l,push:c,unshift:p,finish:g,sort:m}}function rM(){let u=new WeakMap;function e(s,o){const l=u.get(s);let d;return l===void 0?(d=new Np,u.set(s,[d])):o>=l.length?(d=new Np,l.push(d)):d=l[o],d}function n(){u=new WeakMap}return{get:e,dispose:n}}function sM(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Et};break;case"SpotLight":n={position:new te,direction:new te,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new te,halfWidth:new te,halfHeight:new te};break}return u[e.id]=n,n}}}function oM(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[e.id]=n,n}}}let aM=0;function lM(u,e){return(e.castShadow?2:0)-(u.castShadow?2:0)+(e.map?1:0)-(u.map?1:0)}function uM(u,e){const n=new sM,s=oM(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new te);const l=new te,d=new Zt,c=new Zt;function p(g,x){let _=0,M=0,C=0;for(let ce=0;ce<9;ce++)o.probe[ce].set(0,0,0);let y=0,v=0,T=0,N=0,b=0,D=0,R=0,G=0,X=0,E=0;g.sort(lM);const k=x!==!0?Math.PI:1;for(let ce=0,me=g.length;ce<me;ce++){const W=g[ce],V=W.color,re=W.intensity,fe=W.distance,le=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)_+=V.r*re*k,M+=V.g*re*k,C+=V.b*re*k;else if(W.isLightProbe)for(let O=0;O<9;O++)o.probe[O].addScaledVector(W.sh.coefficients[O],re);else if(W.isDirectionalLight){const O=n.get(W);if(O.color.copy(W.color).multiplyScalar(W.intensity*k),W.castShadow){const ee=W.shadow,Z=s.get(W);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,o.directionalShadow[y]=Z,o.directionalShadowMap[y]=le,o.directionalShadowMatrix[y]=W.shadow.matrix,D++}o.directional[y]=O,y++}else if(W.isSpotLight){const O=n.get(W);O.position.setFromMatrixPosition(W.matrixWorld),O.color.copy(V).multiplyScalar(re*k),O.distance=fe,O.coneCos=Math.cos(W.angle),O.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),O.decay=W.decay,o.spot[T]=O;const ee=W.shadow;if(W.map&&(o.spotLightMap[X]=W.map,X++,ee.updateMatrices(W),W.castShadow&&E++),o.spotLightMatrix[T]=ee.matrix,W.castShadow){const Z=s.get(W);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,o.spotShadow[T]=Z,o.spotShadowMap[T]=le,G++}T++}else if(W.isRectAreaLight){const O=n.get(W);O.color.copy(V).multiplyScalar(re),O.halfWidth.set(W.width*.5,0,0),O.halfHeight.set(0,W.height*.5,0),o.rectArea[N]=O,N++}else if(W.isPointLight){const O=n.get(W);if(O.color.copy(W.color).multiplyScalar(W.intensity*k),O.distance=W.distance,O.decay=W.decay,W.castShadow){const ee=W.shadow,Z=s.get(W);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,Z.shadowCameraNear=ee.camera.near,Z.shadowCameraFar=ee.camera.far,o.pointShadow[v]=Z,o.pointShadowMap[v]=le,o.pointShadowMatrix[v]=W.shadow.matrix,R++}o.point[v]=O,v++}else if(W.isHemisphereLight){const O=n.get(W);O.skyColor.copy(W.color).multiplyScalar(re*k),O.groundColor.copy(W.groundColor).multiplyScalar(re*k),o.hemi[b]=O,b++}}N>0&&(e.isWebGL2||u.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ee.LTC_FLOAT_1,o.rectAreaLTC2=Ee.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ee.LTC_HALF_1,o.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=M,o.ambient[2]=C;const Y=o.hash;(Y.directionalLength!==y||Y.pointLength!==v||Y.spotLength!==T||Y.rectAreaLength!==N||Y.hemiLength!==b||Y.numDirectionalShadows!==D||Y.numPointShadows!==R||Y.numSpotShadows!==G||Y.numSpotMaps!==X)&&(o.directional.length=y,o.spot.length=T,o.rectArea.length=N,o.point.length=v,o.hemi.length=b,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=R,o.pointShadowMap.length=R,o.spotShadow.length=G,o.spotShadowMap.length=G,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=R,o.spotLightMatrix.length=G+X-E,o.spotLightMap.length=X,o.numSpotLightShadowsWithMaps=E,Y.directionalLength=y,Y.pointLength=v,Y.spotLength=T,Y.rectAreaLength=N,Y.hemiLength=b,Y.numDirectionalShadows=D,Y.numPointShadows=R,Y.numSpotShadows=G,Y.numSpotMaps=X,o.version=aM++)}function m(g,x){let _=0,M=0,C=0,y=0,v=0;const T=x.matrixWorldInverse;for(let N=0,b=g.length;N<b;N++){const D=g[N];if(D.isDirectionalLight){const R=o.directional[_];R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(T),_++}else if(D.isSpotLight){const R=o.spot[C];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(T),R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(T),C++}else if(D.isRectAreaLight){const R=o.rectArea[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(T),c.identity(),d.copy(D.matrixWorld),d.premultiply(T),c.extractRotation(d),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),y++}else if(D.isPointLight){const R=o.point[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(T),M++}else if(D.isHemisphereLight){const R=o.hemi[v];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(T),v++}}}return{setup:p,setupView:m,state:o}}function Fp(u,e){const n=new uM(u,e),s=[],o=[];function l(){s.length=0,o.length=0}function d(x){s.push(x)}function c(x){o.push(x)}function p(x){n.setup(s,x)}function m(x){n.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:n},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:c}}function cM(u,e){let n=new WeakMap;function s(l,d=0){const c=n.get(l);let p;return c===void 0?(p=new Fp(u,e),n.set(l,[p])):d>=c.length?(p=new Fp(u,e),c.push(p)):p=c[d],p}function o(){n=new WeakMap}return{get:s,dispose:o}}class fM extends rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dM extends rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new te,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mM(u,e,n){let s=new um;const o=new gt,l=new gt,d=new $t,c=new fM({depthPacking:S0}),p=new dM,m={},g=n.maxTextureSize,x={[rr]:Rn,[Rn]:rr,[er]:er},_=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:hM,fragmentShader:pM}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const C=new kr;C.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new jn(C,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xp,this.render=function(D,R,G){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;const X=u.getRenderTarget(),E=u.getActiveCubeFace(),k=u.getActiveMipmapLevel(),Y=u.state;Y.setBlending(tr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let ce=0,me=D.length;ce<me;ce++){const W=D[ce],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const re=V.getFrameExtents();if(o.multiply(re),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/re.x),o.x=l.x*re.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/re.y),o.y=l.y*re.y,V.mapSize.y=l.y)),V.map===null){const le=this.type!==xo?{minFilter:mn,magFilter:mn}:{};V.map=new Nr(o.x,o.y,le),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}u.setRenderTarget(V.map),u.clear();const fe=V.getViewportCount();for(let le=0;le<fe;le++){const O=V.getViewport(le);d.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),Y.viewport(d),V.updateMatrices(W,le),s=V.getFrustum(),b(R,G,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===xo&&T(V,G),V.needsUpdate=!1}v.needsUpdate=!1,u.setRenderTarget(X,E,k)};function T(D,R){const G=e.update(y);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Nr(o.x,o.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,u.setRenderTarget(D.mapPass),u.clear(),u.renderBufferDirect(R,null,G,_,y,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,u.setRenderTarget(D.map),u.clear(),u.renderBufferDirect(R,null,G,M,y,null)}function N(D,R,G,X,E,k){let Y=null;const ce=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(ce!==void 0)Y=ce;else if(Y=G.isPointLight===!0?p:c,u.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const me=Y.uuid,W=R.uuid;let V=m[me];V===void 0&&(V={},m[me]=V);let re=V[W];re===void 0&&(re=Y.clone(),V[W]=re),Y=re}return Y.visible=R.visible,Y.wireframe=R.wireframe,k===xo?Y.side=R.shadowSide!==null?R.shadowSide:R.side:Y.side=R.shadowSide!==null?R.shadowSide:x[R.side],Y.alphaMap=R.alphaMap,Y.alphaTest=R.alphaTest,Y.map=R.map,Y.clipShadows=R.clipShadows,Y.clippingPlanes=R.clippingPlanes,Y.clipIntersection=R.clipIntersection,Y.displacementMap=R.displacementMap,Y.displacementScale=R.displacementScale,Y.displacementBias=R.displacementBias,Y.wireframeLinewidth=R.wireframeLinewidth,Y.linewidth=R.linewidth,G.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(G.matrixWorld),Y.nearDistance=X,Y.farDistance=E),Y}function b(D,R,G,X,E){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===xo)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),me=D.material;if(Array.isArray(me)){const W=ce.groups;for(let V=0,re=W.length;V<re;V++){const fe=W[V],le=me[fe.materialIndex];if(le&&le.visible){const O=N(D,le,X,G.near,G.far,E);u.renderBufferDirect(G,null,ce,O,D,fe)}}}else if(me.visible){const W=N(D,me,X,G.near,G.far,E);u.renderBufferDirect(G,null,ce,W,D,null)}}const Y=D.children;for(let ce=0,me=Y.length;ce<me;ce++)b(Y[ce],R,G,X,E)}}function gM(u,e,n){const s=n.isWebGL2;function o(){let B=!1;const ne=new $t;let ge=null;const Te=new $t(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!B&&(u.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){B=Fe},setClear:function(Fe,st,At,Ft,ri){ri===!0&&(Fe*=Ft,st*=Ft,At*=Ft),ne.set(Fe,st,At,Ft),Te.equals(ne)===!1&&(u.clearColor(Fe,st,At,Ft),Te.copy(ne))},reset:function(){B=!1,ge=null,Te.set(-1,0,0,0)}}}function l(){let B=!1,ne=null,ge=null,Te=null;return{setTest:function(Fe){Fe?Le(2929):ye(2929)},setMask:function(Fe){ne!==Fe&&!B&&(u.depthMask(Fe),ne=Fe)},setFunc:function(Fe){if(ge!==Fe){switch(Fe){case H_:u.depthFunc(512);break;case j_:u.depthFunc(519);break;case X_:u.depthFunc(513);break;case Dc:u.depthFunc(515);break;case q_:u.depthFunc(514);break;case Y_:u.depthFunc(518);break;case $_:u.depthFunc(516);break;case Z_:u.depthFunc(517);break;default:u.depthFunc(515)}ge=Fe}},setLocked:function(Fe){B=Fe},setClear:function(Fe){Te!==Fe&&(u.clearDepth(Fe),Te=Fe)},reset:function(){B=!1,ne=null,ge=null,Te=null}}}function d(){let B=!1,ne=null,ge=null,Te=null,Fe=null,st=null,At=null,Ft=null,ri=null;return{setTest:function(ht){B||(ht?Le(2960):ye(2960))},setMask:function(ht){ne!==ht&&!B&&(u.stencilMask(ht),ne=ht)},setFunc:function(ht,Nn,Vt){(ge!==ht||Te!==Nn||Fe!==Vt)&&(u.stencilFunc(ht,Nn,Vt),ge=ht,Te=Nn,Fe=Vt)},setOp:function(ht,Nn,Vt){(st!==ht||At!==Nn||Ft!==Vt)&&(u.stencilOp(ht,Nn,Vt),st=ht,At=Nn,Ft=Vt)},setLocked:function(ht){B=ht},setClear:function(ht){ri!==ht&&(u.clearStencil(ht),ri=ht)},reset:function(){B=!1,ne=null,ge=null,Te=null,Fe=null,st=null,At=null,Ft=null,ri=null}}}const c=new o,p=new l,m=new d,g=new WeakMap,x=new WeakMap;let _={},M={},C=new WeakMap,y=[],v=null,T=!1,N=null,b=null,D=null,R=null,G=null,X=null,E=null,k=!1,Y=null,ce=null,me=null,W=null,V=null;const re=u.getParameter(35661);let fe=!1,le=0;const O=u.getParameter(7938);O.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(O)[1]),fe=le>=1):O.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),fe=le>=2);let ee=null,Z={};const F=u.getParameter(3088),I=u.getParameter(2978),J=new $t().fromArray(F),ue=new $t().fromArray(I);function de(B,ne,ge){const Te=new Uint8Array(4),Fe=u.createTexture();u.bindTexture(B,Fe),u.texParameteri(B,10241,9728),u.texParameteri(B,10240,9728);for(let st=0;st<ge;st++)u.texImage2D(ne+st,0,6408,1,1,0,6408,5121,Te);return Fe}const H={};H[3553]=de(3553,3553,1),H[34067]=de(34067,34069,6),c.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Le(2929),p.setFunc(Dc),Nt(!1),Kt(Eh),Le(2884),It(tr);function Le(B){_[B]!==!0&&(u.enable(B),_[B]=!0)}function ye(B){_[B]!==!1&&(u.disable(B),_[B]=!1)}function Me(B,ne){return M[B]!==ne?(u.bindFramebuffer(B,ne),M[B]=ne,s&&(B===36009&&(M[36160]=ne),B===36160&&(M[36009]=ne)),!0):!1}function we(B,ne){let ge=y,Te=!1;if(B)if(ge=C.get(ne),ge===void 0&&(ge=[],C.set(ne,ge)),B.isWebGLMultipleRenderTargets){const Fe=B.texture;if(ge.length!==Fe.length||ge[0]!==36064){for(let st=0,At=Fe.length;st<At;st++)ge[st]=36064+st;ge.length=Fe.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(n.isWebGL2?u.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function lt(B){return v!==B?(u.useProgram(B),v=B,!0):!1}const qe={[ys]:32774,[I_]:32778,[N_]:32779};if(s)qe[Ah]=32775,qe[Lh]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(qe[Ah]=B.MIN_EXT,qe[Lh]=B.MAX_EXT)}const Ve={[F_]:0,[k_]:1,[z_]:768,[qp]:770,[W_]:776,[G_]:774,[O_]:772,[U_]:769,[Yp]:771,[V_]:775,[B_]:773};function It(B,ne,ge,Te,Fe,st,At,Ft){if(B===tr){T===!0&&(ye(3042),T=!1);return}if(T===!1&&(Le(3042),T=!0),B!==D_){if(B!==N||Ft!==k){if((b!==ys||G!==ys)&&(u.blendEquation(32774),b=ys,G=ys),Ft)switch(B){case Ms:u.blendFuncSeparate(1,771,1,771);break;case Th:u.blendFunc(1,1);break;case Ch:u.blendFuncSeparate(0,769,0,1);break;case bh:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ms:u.blendFuncSeparate(770,771,1,771);break;case Th:u.blendFunc(770,1);break;case Ch:u.blendFuncSeparate(0,769,0,1);break;case bh:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}D=null,R=null,X=null,E=null,N=B,k=Ft}return}Fe=Fe||ne,st=st||ge,At=At||Te,(ne!==b||Fe!==G)&&(u.blendEquationSeparate(qe[ne],qe[Fe]),b=ne,G=Fe),(ge!==D||Te!==R||st!==X||At!==E)&&(u.blendFuncSeparate(Ve[ge],Ve[Te],Ve[st],Ve[At]),D=ge,R=Te,X=st,E=At),N=B,k=!1}function on(B,ne){B.side===er?ye(2884):Le(2884);let ge=B.side===Rn;ne&&(ge=!ge),Nt(ge),B.blending===Ms&&B.transparent===!1?It(tr):It(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),p.setFunc(B.depthFunc),p.setTest(B.depthTest),p.setMask(B.depthWrite),c.setMask(B.colorWrite);const Te=B.stencilWrite;m.setTest(Te),Te&&(m.setMask(B.stencilWriteMask),m.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),m.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),rt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Le(32926):ye(32926)}function Nt(B){Y!==B&&(B?u.frontFace(2304):u.frontFace(2305),Y=B)}function Kt(B){B!==L_?(Le(2884),B!==ce&&(B===Eh?u.cullFace(1029):B===P_?u.cullFace(1028):u.cullFace(1032))):ye(2884),ce=B}function Tt(B){B!==me&&(fe&&u.lineWidth(B),me=B)}function rt(B,ne,ge){B?(Le(32823),(W!==ne||V!==ge)&&(u.polygonOffset(ne,ge),W=ne,V=ge)):ye(32823)}function an(B){B?Le(3089):ye(3089)}function Gt(B){B===void 0&&(B=33984+re-1),ee!==B&&(u.activeTexture(B),ee=B)}function P(B,ne,ge){ge===void 0&&(ee===null?ge=33984+re-1:ge=ee);let Te=Z[ge];Te===void 0&&(Te={type:void 0,texture:void 0},Z[ge]=Te),(Te.type!==B||Te.texture!==ne)&&(ee!==ge&&(u.activeTexture(ge),ee=ge),u.bindTexture(B,ne||H[B]),Te.type=B,Te.texture=ne)}function w(){const B=Z[ee];B!==void 0&&B.type!==void 0&&(u.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{u.compressedTexImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{u.compressedTexImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{u.texSubImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{u.texSubImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function je(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{u.compressedTexSubImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{u.texStorage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{u.texStorage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{u.texImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{u.texImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){J.equals(B)===!1&&(u.scissor(B.x,B.y,B.z,B.w),J.copy(B))}function ze(B){ue.equals(B)===!1&&(u.viewport(B.x,B.y,B.z,B.w),ue.copy(B))}function tt(B,ne){let ge=x.get(ne);ge===void 0&&(ge=new WeakMap,x.set(ne,ge));let Te=ge.get(B);Te===void 0&&(Te=u.getUniformBlockIndex(ne,B.name),ge.set(B,Te))}function dt(B,ne){const Te=x.get(ne).get(B);g.get(ne)!==Te&&(u.uniformBlockBinding(ne,Te,B.__bindingPointIndex),g.set(ne,Te))}function Ct(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),s===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),_={},ee=null,Z={},M={},C=new WeakMap,y=[],v=null,T=!1,N=null,b=null,D=null,R=null,G=null,X=null,E=null,k=!1,Y=null,ce=null,me=null,W=null,V=null,J.set(0,0,u.canvas.width,u.canvas.height),ue.set(0,0,u.canvas.width,u.canvas.height),c.reset(),p.reset(),m.reset()}return{buffers:{color:c,depth:p,stencil:m},enable:Le,disable:ye,bindFramebuffer:Me,drawBuffers:we,useProgram:lt,setBlending:It,setMaterial:on,setFlipSided:Nt,setCullFace:Kt,setLineWidth:Tt,setPolygonOffset:rt,setScissorTest:an,activeTexture:Gt,bindTexture:P,unbindTexture:w,compressedTexImage2D:se,compressedTexImage3D:ve,texImage2D:He,texImage3D:Ie,updateUBOMapping:tt,uniformBlockBinding:dt,texStorage2D:ae,texStorage3D:ke,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:je,compressedTexSubImage3D:be,scissor:Oe,viewport:ze,reset:Ct}}function _M(u,e,n,s,o,l,d){const c=o.isWebGL2,p=o.maxTextures,m=o.maxCubemapSize,g=o.maxTextureSize,x=o.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),C=new WeakMap;let y;const v=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(P,w){return T?new OffscreenCanvas(P,w):el("canvas")}function b(P,w,se,ve){let Se=1;if((P.width>ve||P.height>ve)&&(Se=ve/Math.max(P.width,P.height)),Se<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Ce=w?Uc:Math.floor,je=Ce(Se*P.width),be=Ce(Se*P.height);y===void 0&&(y=N(je,be));const ae=se?N(je,be):y;return ae.width=je,ae.height=be,ae.getContext("2d").drawImage(P,0,0,je,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+je+"x"+be+")."),ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function D(P){return ip(P.width)&&ip(P.height)}function R(P){return c?!1:P.wrapS!==ni||P.wrapT!==ni||P.minFilter!==mn&&P.minFilter!==Wn}function G(P,w){return P.generateMipmaps&&w&&P.minFilter!==mn&&P.minFilter!==Wn}function X(P){u.generateMipmap(P)}function E(P,w,se,ve,Se=!1){if(c===!1)return w;if(P!==null){if(u[P]!==void 0)return u[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ce=w;return w===6403&&(se===5126&&(Ce=33326),se===5131&&(Ce=33325),se===5121&&(Ce=33321)),w===33319&&(se===5126&&(Ce=33328),se===5131&&(Ce=33327),se===5121&&(Ce=33323)),w===6408&&(se===5126&&(Ce=34836),se===5131&&(Ce=34842),se===5121&&(Ce=ve===xt&&Se===!1?35907:32856),se===32819&&(Ce=32854),se===32820&&(Ce=32855)),(Ce===33325||Ce===33326||Ce===33327||Ce===33328||Ce===34842||Ce===34836)&&e.get("EXT_color_buffer_float"),Ce}function k(P,w,se){return G(P,se)===!0||P.isFramebufferTexture&&P.minFilter!==mn&&P.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function Y(P){return P===mn||P===Ph||P===$u?9728:9729}function ce(P){const w=P.target;w.removeEventListener("dispose",ce),W(w),w.isVideoTexture&&C.delete(w)}function me(P){const w=P.target;w.removeEventListener("dispose",me),re(w)}function W(P){const w=s.get(P);if(w.__webglInit===void 0)return;const se=P.source,ve=v.get(se);if(ve){const Se=ve[w.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&V(P),Object.keys(ve).length===0&&v.delete(se)}s.remove(P)}function V(P){const w=s.get(P);u.deleteTexture(w.__webglTexture);const se=P.source,ve=v.get(se);delete ve[w.__cacheKey],d.memory.textures--}function re(P){const w=P.texture,se=s.get(P),ve=s.get(w);if(ve.__webglTexture!==void 0&&(u.deleteTexture(ve.__webglTexture),d.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)u.deleteFramebuffer(se.__webglFramebuffer[Se]),se.__webglDepthbuffer&&u.deleteRenderbuffer(se.__webglDepthbuffer[Se]);else{if(u.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&u.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&u.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let Se=0;Se<se.__webglColorRenderbuffer.length;Se++)se.__webglColorRenderbuffer[Se]&&u.deleteRenderbuffer(se.__webglColorRenderbuffer[Se]);se.__webglDepthRenderbuffer&&u.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let Se=0,Ce=w.length;Se<Ce;Se++){const je=s.get(w[Se]);je.__webglTexture&&(u.deleteTexture(je.__webglTexture),d.memory.textures--),s.remove(w[Se])}s.remove(w),s.remove(P)}let fe=0;function le(){fe=0}function O(){const P=fe;return P>=p&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+p),fe+=1,P}function ee(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function Z(P,w){const se=s.get(P);if(P.isVideoTexture&&an(P),P.isRenderTargetTexture===!1&&P.version>0&&se.__version!==P.version){const ve=P.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(se,P,w);return}}n.bindTexture(3553,se.__webglTexture,33984+w)}function F(P,w){const se=s.get(P);if(P.version>0&&se.__version!==P.version){ye(se,P,w);return}n.bindTexture(35866,se.__webglTexture,33984+w)}function I(P,w){const se=s.get(P);if(P.version>0&&se.__version!==P.version){ye(se,P,w);return}n.bindTexture(32879,se.__webglTexture,33984+w)}function J(P,w){const se=s.get(P);if(P.version>0&&se.__version!==P.version){Me(se,P,w);return}n.bindTexture(34067,se.__webglTexture,33984+w)}const ue={[Fc]:10497,[ni]:33071,[kc]:33648},de={[mn]:9728,[Ph]:9984,[$u]:9986,[Wn]:9729,[r0]:9985,[Mo]:9987};function H(P,w,se){if(se?(u.texParameteri(P,10242,ue[w.wrapS]),u.texParameteri(P,10243,ue[w.wrapT]),(P===32879||P===35866)&&u.texParameteri(P,32882,ue[w.wrapR]),u.texParameteri(P,10240,de[w.magFilter]),u.texParameteri(P,10241,de[w.minFilter])):(u.texParameteri(P,10242,33071),u.texParameteri(P,10243,33071),(P===32879||P===35866)&&u.texParameteri(P,32882,33071),(w.wrapS!==ni||w.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(P,10240,Y(w.magFilter)),u.texParameteri(P,10241,Y(w.minFilter)),w.minFilter!==mn&&w.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===mn||w.minFilter!==$u&&w.minFilter!==Mo||w.type===Ar&&e.has("OES_texture_float_linear")===!1||c===!1&&w.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||s.get(w).__currentAnisotropy)&&(u.texParameterf(P,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy)}}function Le(P,w){let se=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",ce));const ve=w.source;let Se=v.get(ve);Se===void 0&&(Se={},v.set(ve,Se));const Ce=ee(w);if(Ce!==P.__cacheKey){Se[Ce]===void 0&&(Se[Ce]={texture:u.createTexture(),usedTimes:0},d.memory.textures++,se=!0),Se[Ce].usedTimes++;const je=Se[P.__cacheKey];je!==void 0&&(Se[P.__cacheKey].usedTimes--,je.usedTimes===0&&V(w)),P.__cacheKey=Ce,P.__webglTexture=Se[Ce].texture}return se}function ye(P,w,se){let ve=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=35866),w.isData3DTexture&&(ve=32879);const Se=Le(P,w),Ce=w.source;n.bindTexture(ve,P.__webglTexture,33984+se);const je=s.get(Ce);if(Ce.version!==je.__version||Se===!0){n.activeTexture(33984+se),u.pixelStorei(37440,w.flipY),u.pixelStorei(37441,w.premultiplyAlpha),u.pixelStorei(3317,w.unpackAlignment),u.pixelStorei(37443,0);const be=R(w)&&D(w.image)===!1;let ae=b(w.image,be,!1,g);ae=Gt(w,ae);const ke=D(ae)||c,He=l.convert(w.format,w.encoding);let Ie=l.convert(w.type),Oe=E(w.internalFormat,He,Ie,w.encoding,w.isVideoTexture);H(ve,w,ke);let ze;const tt=w.mipmaps,dt=c&&w.isVideoTexture!==!0,Ct=je.__version===void 0||Se===!0,B=k(w,ae,ke);if(w.isDepthTexture)Oe=6402,c?w.type===Ar?Oe=36012:w.type===br?Oe=33190:w.type===ws?Oe=35056:Oe=33189:w.type===Ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Lr&&Oe===6402&&w.type!==Kp&&w.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=br,Ie=l.convert(w.type)),w.format===Cs&&Oe===6402&&(Oe=34041,w.type!==ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ws,Ie=l.convert(w.type))),Ct&&(dt?n.texStorage2D(3553,1,Oe,ae.width,ae.height):n.texImage2D(3553,0,Oe,ae.width,ae.height,0,He,Ie,null));else if(w.isDataTexture)if(tt.length>0&&ke){dt&&Ct&&n.texStorage2D(3553,B,Oe,tt[0].width,tt[0].height);for(let ne=0,ge=tt.length;ne<ge;ne++)ze=tt[ne],dt?n.texSubImage2D(3553,ne,0,0,ze.width,ze.height,He,Ie,ze.data):n.texImage2D(3553,ne,Oe,ze.width,ze.height,0,He,Ie,ze.data);w.generateMipmaps=!1}else dt?(Ct&&n.texStorage2D(3553,B,Oe,ae.width,ae.height),n.texSubImage2D(3553,0,0,0,ae.width,ae.height,He,Ie,ae.data)):n.texImage2D(3553,0,Oe,ae.width,ae.height,0,He,Ie,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){dt&&Ct&&n.texStorage3D(35866,B,Oe,tt[0].width,tt[0].height,ae.depth);for(let ne=0,ge=tt.length;ne<ge;ne++)ze=tt[ne],w.format!==ii?He!==null?dt?n.compressedTexSubImage3D(35866,ne,0,0,0,ze.width,ze.height,ae.depth,He,ze.data,0,0):n.compressedTexImage3D(35866,ne,Oe,ze.width,ze.height,ae.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?n.texSubImage3D(35866,ne,0,0,0,ze.width,ze.height,ae.depth,He,Ie,ze.data):n.texImage3D(35866,ne,Oe,ze.width,ze.height,ae.depth,0,He,Ie,ze.data)}else{dt&&Ct&&n.texStorage2D(3553,B,Oe,tt[0].width,tt[0].height);for(let ne=0,ge=tt.length;ne<ge;ne++)ze=tt[ne],w.format!==ii?He!==null?dt?n.compressedTexSubImage2D(3553,ne,0,0,ze.width,ze.height,He,ze.data):n.compressedTexImage2D(3553,ne,Oe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?n.texSubImage2D(3553,ne,0,0,ze.width,ze.height,He,Ie,ze.data):n.texImage2D(3553,ne,Oe,ze.width,ze.height,0,He,Ie,ze.data)}else if(w.isDataArrayTexture)dt?(Ct&&n.texStorage3D(35866,B,Oe,ae.width,ae.height,ae.depth),n.texSubImage3D(35866,0,0,0,0,ae.width,ae.height,ae.depth,He,Ie,ae.data)):n.texImage3D(35866,0,Oe,ae.width,ae.height,ae.depth,0,He,Ie,ae.data);else if(w.isData3DTexture)dt?(Ct&&n.texStorage3D(32879,B,Oe,ae.width,ae.height,ae.depth),n.texSubImage3D(32879,0,0,0,0,ae.width,ae.height,ae.depth,He,Ie,ae.data)):n.texImage3D(32879,0,Oe,ae.width,ae.height,ae.depth,0,He,Ie,ae.data);else if(w.isFramebufferTexture){if(Ct)if(dt)n.texStorage2D(3553,B,Oe,ae.width,ae.height);else{let ne=ae.width,ge=ae.height;for(let Te=0;Te<B;Te++)n.texImage2D(3553,Te,Oe,ne,ge,0,He,Ie,null),ne>>=1,ge>>=1}}else if(tt.length>0&&ke){dt&&Ct&&n.texStorage2D(3553,B,Oe,tt[0].width,tt[0].height);for(let ne=0,ge=tt.length;ne<ge;ne++)ze=tt[ne],dt?n.texSubImage2D(3553,ne,0,0,He,Ie,ze):n.texImage2D(3553,ne,Oe,He,Ie,ze);w.generateMipmaps=!1}else dt?(Ct&&n.texStorage2D(3553,B,Oe,ae.width,ae.height),n.texSubImage2D(3553,0,0,0,He,Ie,ae)):n.texImage2D(3553,0,Oe,He,Ie,ae);G(w,ke)&&X(ve),je.__version=Ce.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Me(P,w,se){if(w.image.length!==6)return;const ve=Le(P,w),Se=w.source;n.bindTexture(34067,P.__webglTexture,33984+se);const Ce=s.get(Se);if(Se.version!==Ce.__version||ve===!0){n.activeTexture(33984+se),u.pixelStorei(37440,w.flipY),u.pixelStorei(37441,w.premultiplyAlpha),u.pixelStorei(3317,w.unpackAlignment),u.pixelStorei(37443,0);const je=w.isCompressedTexture||w.image[0].isCompressedTexture,be=w.image[0]&&w.image[0].isDataTexture,ae=[];for(let ne=0;ne<6;ne++)!je&&!be?ae[ne]=b(w.image[ne],!1,!0,m):ae[ne]=be?w.image[ne].image:w.image[ne],ae[ne]=Gt(w,ae[ne]);const ke=ae[0],He=D(ke)||c,Ie=l.convert(w.format,w.encoding),Oe=l.convert(w.type),ze=E(w.internalFormat,Ie,Oe,w.encoding),tt=c&&w.isVideoTexture!==!0,dt=Ce.__version===void 0||ve===!0;let Ct=k(w,ke,He);H(34067,w,He);let B;if(je){tt&&dt&&n.texStorage2D(34067,Ct,ze,ke.width,ke.height);for(let ne=0;ne<6;ne++){B=ae[ne].mipmaps;for(let ge=0;ge<B.length;ge++){const Te=B[ge];w.format!==ii?Ie!==null?tt?n.compressedTexSubImage2D(34069+ne,ge,0,0,Te.width,Te.height,Ie,Te.data):n.compressedTexImage2D(34069+ne,ge,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?n.texSubImage2D(34069+ne,ge,0,0,Te.width,Te.height,Ie,Oe,Te.data):n.texImage2D(34069+ne,ge,ze,Te.width,Te.height,0,Ie,Oe,Te.data)}}}else{B=w.mipmaps,tt&&dt&&(B.length>0&&Ct++,n.texStorage2D(34067,Ct,ze,ae[0].width,ae[0].height));for(let ne=0;ne<6;ne++)if(be){tt?n.texSubImage2D(34069+ne,0,0,0,ae[ne].width,ae[ne].height,Ie,Oe,ae[ne].data):n.texImage2D(34069+ne,0,ze,ae[ne].width,ae[ne].height,0,Ie,Oe,ae[ne].data);for(let ge=0;ge<B.length;ge++){const Fe=B[ge].image[ne].image;tt?n.texSubImage2D(34069+ne,ge+1,0,0,Fe.width,Fe.height,Ie,Oe,Fe.data):n.texImage2D(34069+ne,ge+1,ze,Fe.width,Fe.height,0,Ie,Oe,Fe.data)}}else{tt?n.texSubImage2D(34069+ne,0,0,0,Ie,Oe,ae[ne]):n.texImage2D(34069+ne,0,ze,Ie,Oe,ae[ne]);for(let ge=0;ge<B.length;ge++){const Te=B[ge];tt?n.texSubImage2D(34069+ne,ge+1,0,0,Ie,Oe,Te.image[ne]):n.texImage2D(34069+ne,ge+1,ze,Ie,Oe,Te.image[ne])}}}G(w,He)&&X(34067),Ce.__version=Se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function we(P,w,se,ve,Se){const Ce=l.convert(se.format,se.encoding),je=l.convert(se.type),be=E(se.internalFormat,Ce,je,se.encoding);s.get(w).__hasExternalTextures||(Se===32879||Se===35866?n.texImage3D(Se,0,be,w.width,w.height,w.depth,0,Ce,je,null):n.texImage2D(Se,0,be,w.width,w.height,0,Ce,je,null)),n.bindFramebuffer(36160,P),rt(w)?_.framebufferTexture2DMultisampleEXT(36160,ve,Se,s.get(se).__webglTexture,0,Tt(w)):(Se===3553||Se>=34069&&Se<=34074)&&u.framebufferTexture2D(36160,ve,Se,s.get(se).__webglTexture,0),n.bindFramebuffer(36160,null)}function lt(P,w,se){if(u.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let ve=33189;if(se||rt(w)){const Se=w.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Ar?ve=36012:Se.type===br&&(ve=33190));const Ce=Tt(w);rt(w)?_.renderbufferStorageMultisampleEXT(36161,Ce,ve,w.width,w.height):u.renderbufferStorageMultisample(36161,Ce,ve,w.width,w.height)}else u.renderbufferStorage(36161,ve,w.width,w.height);u.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const ve=Tt(w);se&&rt(w)===!1?u.renderbufferStorageMultisample(36161,ve,35056,w.width,w.height):rt(w)?_.renderbufferStorageMultisampleEXT(36161,ve,35056,w.width,w.height):u.renderbufferStorage(36161,34041,w.width,w.height),u.framebufferRenderbuffer(36160,33306,36161,P)}else{const ve=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Se=0;Se<ve.length;Se++){const Ce=ve[Se],je=l.convert(Ce.format,Ce.encoding),be=l.convert(Ce.type),ae=E(Ce.internalFormat,je,be,Ce.encoding),ke=Tt(w);se&&rt(w)===!1?u.renderbufferStorageMultisample(36161,ke,ae,w.width,w.height):rt(w)?_.renderbufferStorageMultisampleEXT(36161,ke,ae,w.width,w.height):u.renderbufferStorage(36161,ae,w.width,w.height)}}u.bindRenderbuffer(36161,null)}function qe(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const ve=s.get(w.depthTexture).__webglTexture,Se=Tt(w);if(w.depthTexture.format===Lr)rt(w)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,Se):u.framebufferTexture2D(36160,36096,3553,ve,0);else if(w.depthTexture.format===Cs)rt(w)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,Se):u.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function Ve(P){const w=s.get(P),se=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");qe(w.__webglFramebuffer,P)}else if(se){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)n.bindFramebuffer(36160,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]=u.createRenderbuffer(),lt(w.__webglDepthbuffer[ve],P,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=u.createRenderbuffer(),lt(w.__webglDepthbuffer,P,!1);n.bindFramebuffer(36160,null)}function It(P,w,se){const ve=s.get(P);w!==void 0&&we(ve.__webglFramebuffer,P,P.texture,36064,3553),se!==void 0&&Ve(P)}function on(P){const w=P.texture,se=s.get(P),ve=s.get(w);P.addEventListener("dispose",me),P.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=u.createTexture()),ve.__version=w.version,d.memory.textures++);const Se=P.isWebGLCubeRenderTarget===!0,Ce=P.isWebGLMultipleRenderTargets===!0,je=D(P)||c;if(Se){se.__webglFramebuffer=[];for(let be=0;be<6;be++)se.__webglFramebuffer[be]=u.createFramebuffer()}else{if(se.__webglFramebuffer=u.createFramebuffer(),Ce)if(o.drawBuffers){const be=P.texture;for(let ae=0,ke=be.length;ae<ke;ae++){const He=s.get(be[ae]);He.__webglTexture===void 0&&(He.__webglTexture=u.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&P.samples>0&&rt(P)===!1){const be=Ce?w:[w];se.__webglMultisampledFramebuffer=u.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,se.__webglMultisampledFramebuffer);for(let ae=0;ae<be.length;ae++){const ke=be[ae];se.__webglColorRenderbuffer[ae]=u.createRenderbuffer(),u.bindRenderbuffer(36161,se.__webglColorRenderbuffer[ae]);const He=l.convert(ke.format,ke.encoding),Ie=l.convert(ke.type),Oe=E(ke.internalFormat,He,Ie,ke.encoding,P.isXRRenderTarget===!0),ze=Tt(P);u.renderbufferStorageMultisample(36161,ze,Oe,P.width,P.height),u.framebufferRenderbuffer(36160,36064+ae,36161,se.__webglColorRenderbuffer[ae])}u.bindRenderbuffer(36161,null),P.depthBuffer&&(se.__webglDepthRenderbuffer=u.createRenderbuffer(),lt(se.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(36160,null)}}if(Se){n.bindTexture(34067,ve.__webglTexture),H(34067,w,je);for(let be=0;be<6;be++)we(se.__webglFramebuffer[be],P,w,36064,34069+be);G(w,je)&&X(34067),n.unbindTexture()}else if(Ce){const be=P.texture;for(let ae=0,ke=be.length;ae<ke;ae++){const He=be[ae],Ie=s.get(He);n.bindTexture(3553,Ie.__webglTexture),H(3553,He,je),we(se.__webglFramebuffer,P,He,36064+ae,3553),G(He,je)&&X(3553)}n.unbindTexture()}else{let be=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(c?be=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(be,ve.__webglTexture),H(be,w,je),we(se.__webglFramebuffer,P,w,36064,be),G(w,je)&&X(be),n.unbindTexture()}P.depthBuffer&&Ve(P)}function Nt(P){const w=D(P)||c,se=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ve=0,Se=se.length;ve<Se;ve++){const Ce=se[ve];if(G(Ce,w)){const je=P.isWebGLCubeRenderTarget?34067:3553,be=s.get(Ce).__webglTexture;n.bindTexture(je,be),X(je),n.unbindTexture()}}}function Kt(P){if(c&&P.samples>0&&rt(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],se=P.width,ve=P.height;let Se=16384;const Ce=[],je=P.stencilBuffer?33306:36096,be=s.get(P),ae=P.isWebGLMultipleRenderTargets===!0;if(ae)for(let ke=0;ke<w.length;ke++)n.bindFramebuffer(36160,be.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+ke,36161,null),n.bindFramebuffer(36160,be.__webglFramebuffer),u.framebufferTexture2D(36009,36064+ke,3553,null,0);n.bindFramebuffer(36008,be.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,be.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){Ce.push(36064+ke),P.depthBuffer&&Ce.push(je);const He=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(He===!1&&(P.depthBuffer&&(Se|=256),P.stencilBuffer&&(Se|=1024)),ae&&u.framebufferRenderbuffer(36008,36064,36161,be.__webglColorRenderbuffer[ke]),He===!0&&(u.invalidateFramebuffer(36008,[je]),u.invalidateFramebuffer(36009,[je])),ae){const Ie=s.get(w[ke]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,Ie,0)}u.blitFramebuffer(0,0,se,ve,0,0,se,ve,Se,9728),M&&u.invalidateFramebuffer(36008,Ce)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),ae)for(let ke=0;ke<w.length;ke++){n.bindFramebuffer(36160,be.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+ke,36161,be.__webglColorRenderbuffer[ke]);const He=s.get(w[ke]).__webglTexture;n.bindFramebuffer(36160,be.__webglFramebuffer),u.framebufferTexture2D(36009,36064+ke,3553,He,0)}n.bindFramebuffer(36009,be.__webglMultisampledFramebuffer)}}function Tt(P){return Math.min(x,P.samples)}function rt(P){const w=s.get(P);return c&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function an(P){const w=d.render.frame;C.get(P)!==w&&(C.set(P,w),P.update())}function Gt(P,w){const se=P.encoding,ve=P.format,Se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===zc||se!==Ir&&(se===xt?c===!1?e.has("EXT_sRGB")===!0&&ve===ii?(P.format=zc,P.minFilter=Wn,P.generateMipmaps=!1):w=em.sRGBToLinear(w):(ve!==ii||Se!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",se)),w}this.allocateTextureUnit=O,this.resetTextureUnits=le,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=J,this.rebindTextures=It,this.setupRenderTarget=on,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=we,this.useMultisampledRTT=rt}function vM(u,e,n){const s=n.isWebGL2;function o(l,d=null){let c;if(l===Dr)return 5121;if(l===l0)return 32819;if(l===u0)return 32820;if(l===s0)return 5120;if(l===o0)return 5122;if(l===Kp)return 5123;if(l===a0)return 5124;if(l===br)return 5125;if(l===Ar)return 5126;if(l===wo)return s?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===c0)return 6406;if(l===ii)return 6408;if(l===f0)return 6409;if(l===d0)return 6410;if(l===Lr)return 6402;if(l===Cs)return 34041;if(l===zc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===h0)return 6403;if(l===p0)return 36244;if(l===m0)return 33319;if(l===g0)return 33320;if(l===_0)return 36249;if(l===Zu||l===Ku||l===Qu||l===Ju)if(d===xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Zu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Zu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Ku)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Ju)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Rh||l===Dh||l===Ih||l===Nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===v0)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Fh||l===kh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Fh)return d===xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===kh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===zh||l===Uh||l===Oh||l===Bh||l===Gh||l===Vh||l===Wh||l===Hh||l===jh||l===Xh||l===qh||l===Yh||l===$h||l===Zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===zh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Uh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Oh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Bh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Gh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Vh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Wh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Hh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===jh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Xh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===qh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Yh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===$h)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Zh)return d===xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===ec)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===ec)return d===xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===x0||l===Kh||l===Qh||l===Jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===ec)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Qh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===ws?s?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):u[l]!==void 0?u[l]:null}return{convert:o}}class xM extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Za extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yM={type:"move"};class bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let o=null,l=null,d=null;const c=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,s),T=this._getHandJoint(m,y);v!==null&&(T.matrix.fromArray(v.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.jointRadius=v.radius),T.visible=v!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=g.position.distanceTo(x.position),M=.02,C=.005;m.inputState.pinching&&_>M+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));c!==null&&(o=n.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return c!==null&&(c.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Za;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class SM extends Dn{constructor(e,n,s,o,l,d,c,p,m,g){if(g=g!==void 0?g:Lr,g!==Lr&&g!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Lr&&(s=br),s===void 0&&g===Cs&&(s=ws),super(null,o,l,d,c,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:mn,this.minFilter=p!==void 0?p:mn,this.flipY=!1,this.generateMipmaps=!1}}class MM extends As{constructor(e,n){super();const s=this;let o=null,l=1,d=null,c="local-floor",p=1,m=null,g=null,x=null,_=null,M=null,C=null;const y=n.getContextAttributes();let v=null,T=null;const N=[],b=[],D=new Set,R=new Map,G=new Hn;G.layers.enable(1),G.viewport=new $t;const X=new Hn;X.layers.enable(2),X.viewport=new $t;const E=[G,X],k=new xM;k.layers.enable(1),k.layers.enable(2);let Y=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let J=N[I];return J===void 0&&(J=new bc,N[I]=J),J.getTargetRaySpace()},this.getControllerGrip=function(I){let J=N[I];return J===void 0&&(J=new bc,N[I]=J),J.getGripSpace()},this.getHand=function(I){let J=N[I];return J===void 0&&(J=new bc,N[I]=J),J.getHandSpace()};function me(I){const J=b.indexOf(I.inputSource);if(J===-1)return;const ue=N[J];ue!==void 0&&ue.dispatchEvent({type:I.type,data:I.inputSource})}function W(){o.removeEventListener("select",me),o.removeEventListener("selectstart",me),o.removeEventListener("selectend",me),o.removeEventListener("squeeze",me),o.removeEventListener("squeezestart",me),o.removeEventListener("squeezeend",me),o.removeEventListener("end",W),o.removeEventListener("inputsourceschange",V);for(let I=0;I<N.length;I++){const J=b[I];J!==null&&(b[I]=null,N[I].disconnect(J))}Y=null,ce=null,e.setRenderTarget(v),M=null,_=null,x=null,o=null,T=null,F.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){l=I,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){c=I,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(I){m=I},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x},this.getFrame=function(){return C},this.getSession=function(){return o},this.setSession=async function(I){if(o=I,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",me),o.addEventListener("selectstart",me),o.addEventListener("selectend",me),o.addEventListener("squeeze",me),o.addEventListener("squeezestart",me),o.addEventListener("squeezeend",me),o.addEventListener("end",W),o.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await n.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:o.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,J),o.updateRenderState({baseLayer:M}),T=new Nr(M.framebufferWidth,M.framebufferHeight,{format:ii,type:Dr,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let J=null,ue=null,de=null;y.depth&&(de=y.stencil?35056:33190,J=y.stencil?Cs:Lr,ue=y.stencil?ws:br);const H={colorFormat:32856,depthFormat:de,scaleFactor:l};x=new XRWebGLBinding(o,n),_=x.createProjectionLayer(H),o.updateRenderState({layers:[_]}),T=new Nr(_.textureWidth,_.textureHeight,{format:ii,type:Dr,depthTexture:new SM(_.textureWidth,_.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const Le=e.properties.get(T);Le.__ignoreDepthValues=_.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(c),F.setContext(o),F.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}};function V(I){for(let J=0;J<I.removed.length;J++){const ue=I.removed[J],de=b.indexOf(ue);de>=0&&(b[de]=null,N[de].disconnect(ue))}for(let J=0;J<I.added.length;J++){const ue=I.added[J];let de=b.indexOf(ue);if(de===-1){for(let Le=0;Le<N.length;Le++)if(Le>=b.length){b.push(ue),de=Le;break}else if(b[Le]===null){b[Le]=ue,de=Le;break}if(de===-1)break}const H=N[de];H&&H.connect(ue)}}const re=new te,fe=new te;function le(I,J,ue){re.setFromMatrixPosition(J.matrixWorld),fe.setFromMatrixPosition(ue.matrixWorld);const de=re.distanceTo(fe),H=J.projectionMatrix.elements,Le=ue.projectionMatrix.elements,ye=H[14]/(H[10]-1),Me=H[14]/(H[10]+1),we=(H[9]+1)/H[5],lt=(H[9]-1)/H[5],qe=(H[8]-1)/H[0],Ve=(Le[8]+1)/Le[0],It=ye*qe,on=ye*Ve,Nt=de/(-qe+Ve),Kt=Nt*-qe;J.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Kt),I.translateZ(Nt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Tt=ye+Nt,rt=Me+Nt,an=It-Kt,Gt=on+(de-Kt),P=we*Me/rt*Tt,w=lt*Me/rt*Tt;I.projectionMatrix.makePerspective(an,Gt,P,w,Tt,rt)}function O(I,J){J===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(J.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(o===null)return;k.near=X.near=G.near=I.near,k.far=X.far=G.far=I.far,(Y!==k.near||ce!==k.far)&&(o.updateRenderState({depthNear:k.near,depthFar:k.far}),Y=k.near,ce=k.far);const J=I.parent,ue=k.cameras;O(k,J);for(let H=0;H<ue.length;H++)O(ue[H],J);k.matrixWorld.decompose(k.position,k.quaternion,k.scale),I.matrix.copy(k.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const de=I.children;for(let H=0,Le=de.length;H<Le;H++)de[H].updateMatrixWorld(!0);ue.length===2?le(k,G,X):k.projectionMatrix.copy(G.projectionMatrix)},this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(I){p=I,_!==null&&(_.fixedFoveation=I),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=I)},this.getPlanes=function(){return D};let ee=null;function Z(I,J){if(g=J.getViewerPose(m||d),C=J,g!==null){const ue=g.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let de=!1;ue.length!==k.cameras.length&&(k.cameras.length=0,de=!0);for(let H=0;H<ue.length;H++){const Le=ue[H];let ye=null;if(M!==null)ye=M.getViewport(Le);else{const we=x.getViewSubImage(_,Le);ye=we.viewport,H===0&&(e.setRenderTargetTextures(T,we.colorTexture,_.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(T))}let Me=E[H];Me===void 0&&(Me=new Hn,Me.layers.enable(H),Me.viewport=new $t,E[H]=Me),Me.matrix.fromArray(Le.transform.matrix),Me.projectionMatrix.fromArray(Le.projectionMatrix),Me.viewport.set(ye.x,ye.y,ye.width,ye.height),H===0&&k.matrix.copy(Me.matrix),de===!0&&k.cameras.push(Me)}}for(let ue=0;ue<N.length;ue++){const de=b[ue],H=N[ue];de!==null&&H!==void 0&&H.update(de,J,m||d)}if(ee&&ee(I,J),J.detectedPlanes){s.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ue=null;for(const de of D)J.detectedPlanes.has(de)||(ue===null&&(ue=[]),ue.push(de));if(ue!==null)for(const de of ue)D.delete(de),R.delete(de),s.dispatchEvent({type:"planeremoved",data:de});for(const de of J.detectedPlanes)if(!D.has(de))D.add(de),R.set(de,J.lastChangedTime),s.dispatchEvent({type:"planeadded",data:de});else{const H=R.get(de);de.lastChangedTime>H&&(R.set(de,de.lastChangedTime),s.dispatchEvent({type:"planechanged",data:de}))}}C=null}const F=new cm;F.setAnimationLoop(Z),this.setAnimationLoop=function(I){ee=I},this.dispose=function(){}}}function wM(u,e){function n(y,v){v.color.getRGB(y.fogColor.value,om(u)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,T,N,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(y,v):v.isMeshToonMaterial?(o(y,v),g(y,v)):v.isMeshPhongMaterial?(o(y,v),m(y,v)):v.isMeshStandardMaterial?(o(y,v),x(y,v),v.isMeshPhysicalMaterial&&_(y,v,b)):v.isMeshMatcapMaterial?(o(y,v),M(y,v)):v.isMeshDepthMaterial?o(y,v):v.isMeshDistanceMaterial?(o(y,v),C(y,v)):v.isMeshNormalMaterial?o(y,v):v.isLineBasicMaterial?(l(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?c(y,v,T,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map),v.alphaMap&&(y.alphaMap.value=v.alphaMap),v.bumpMap&&(y.bumpMap.value=v.bumpMap,y.bumpScale.value=v.bumpScale,v.side===Rn&&(y.bumpScale.value*=-1)),v.displacementMap&&(y.displacementMap.value=v.displacementMap,y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap),v.normalMap&&(y.normalMap.value=v.normalMap,y.normalScale.value.copy(v.normalScale),v.side===Rn&&y.normalScale.value.negate()),v.specularMap&&(y.specularMap.value=v.specularMap),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const T=e.get(v).envMap;if(T&&(y.envMap.value=T,y.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const D=u.physicallyCorrectLights!==!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*D}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity);let N;v.map?N=v.map:v.specularMap?N=v.specularMap:v.displacementMap?N=v.displacementMap:v.normalMap?N=v.normalMap:v.bumpMap?N=v.bumpMap:v.roughnessMap?N=v.roughnessMap:v.metalnessMap?N=v.metalnessMap:v.alphaMap?N=v.alphaMap:v.emissiveMap?N=v.emissiveMap:v.clearcoatMap?N=v.clearcoatMap:v.clearcoatNormalMap?N=v.clearcoatNormalMap:v.clearcoatRoughnessMap?N=v.clearcoatRoughnessMap:v.iridescenceMap?N=v.iridescenceMap:v.iridescenceThicknessMap?N=v.iridescenceThicknessMap:v.specularIntensityMap?N=v.specularIntensityMap:v.specularColorMap?N=v.specularColorMap:v.transmissionMap?N=v.transmissionMap:v.thicknessMap?N=v.thicknessMap:v.sheenColorMap?N=v.sheenColorMap:v.sheenRoughnessMap&&(N=v.sheenRoughnessMap),N!==void 0&&(N.isWebGLRenderTarget&&(N=N.texture),N.matrixAutoUpdate===!0&&N.updateMatrix(),y.uvTransform.value.copy(N.matrix));let b;v.aoMap?b=v.aoMap:v.lightMap&&(b=v.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),y.uv2Transform.value.copy(b.matrix))}function l(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function c(y,v,T,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*T,y.scale.value=N*.5,v.map&&(y.map.value=v.map),v.alphaMap&&(y.alphaMap.value=v.alphaMap),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);let b;v.map?b=v.map:v.alphaMap&&(b=v.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),y.uvTransform.value.copy(b.matrix))}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map),v.alphaMap&&(y.alphaMap.value=v.alphaMap),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);let T;v.map?T=v.map:v.alphaMap&&(T=v.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),y.uvTransform.value.copy(T.matrix))}function m(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.roughness.value=v.roughness,y.metalness.value=v.metalness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function _(y,v,T){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),y.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===Rn&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap)}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){y.referencePosition.value.copy(v.referencePosition),y.nearDistance.value=v.nearDistance,y.farDistance.value=v.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function EM(u,e,n,s){let o={},l={},d=[];const c=n.isWebGL2?u.getParameter(35375):0;function p(N,b){const D=b.program;s.uniformBlockBinding(N,D)}function m(N,b){let D=o[N.id];D===void 0&&(C(N),D=g(N),o[N.id]=D,N.addEventListener("dispose",v));const R=b.program;s.updateUBOMapping(N,R);const G=e.render.frame;l[N.id]!==G&&(_(N),l[N.id]=G)}function g(N){const b=x();N.__bindingPointIndex=b;const D=u.createBuffer(),R=N.__size,G=N.usage;return u.bindBuffer(35345,D),u.bufferData(35345,R,G),u.bindBuffer(35345,null),u.bindBufferBase(35345,b,D),D}function x(){for(let N=0;N<c;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const b=o[N.id],D=N.uniforms,R=N.__cache;u.bindBuffer(35345,b);for(let G=0,X=D.length;G<X;G++){const E=D[G];if(M(E,G,R)===!0){const k=E.__offset,Y=Array.isArray(E.value)?E.value:[E.value];let ce=0;for(let me=0;me<Y.length;me++){const W=Y[me],V=y(W);typeof W=="number"?(E.__data[0]=W,u.bufferSubData(35345,k+ce,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=W.elements[0],E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=W.elements[0],E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=W.elements[0]):(W.toArray(E.__data,ce),ce+=V.storage/Float32Array.BYTES_PER_ELEMENT)}u.bufferSubData(35345,k,E.__data)}}u.bindBuffer(35345,null)}function M(N,b,D){const R=N.value;if(D[b]===void 0){if(typeof R=="number")D[b]=R;else{const G=Array.isArray(R)?R:[R],X=[];for(let E=0;E<G.length;E++)X.push(G[E].clone());D[b]=X}return!0}else if(typeof R=="number"){if(D[b]!==R)return D[b]=R,!0}else{const G=Array.isArray(D[b])?D[b]:[D[b]],X=Array.isArray(R)?R:[R];for(let E=0;E<G.length;E++){const k=G[E];if(k.equals(X[E])===!1)return k.copy(X[E]),!0}}return!1}function C(N){const b=N.uniforms;let D=0;const R=16;let G=0;for(let X=0,E=b.length;X<E;X++){const k=b[X],Y={boundary:0,storage:0},ce=Array.isArray(k.value)?k.value:[k.value];for(let me=0,W=ce.length;me<W;me++){const V=ce[me],re=y(V);Y.boundary+=re.boundary,Y.storage+=re.storage}if(k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=D,X>0){G=D%R;const me=R-G;G!==0&&me-Y.boundary<0&&(D+=R-G,k.__offset=D)}D+=Y.storage}return G=D%R,G>0&&(D+=R-G),N.__size=D,N.__cache={},this}function y(N){const b={boundary:0,storage:0};return typeof N=="number"?(b.boundary=4,b.storage=4):N.isVector2?(b.boundary=8,b.storage=8):N.isVector3||N.isColor?(b.boundary=16,b.storage=12):N.isVector4?(b.boundary=16,b.storage=16):N.isMatrix3?(b.boundary=48,b.storage=48):N.isMatrix4?(b.boundary=64,b.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),b}function v(N){const b=N.target;b.removeEventListener("dispose",v);const D=d.indexOf(b.__bindingPointIndex);d.splice(D,1),u.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function T(){for(const N in o)u.deleteBuffer(o[N]);d=[],o={},l={}}return{bind:p,update:m,dispose:T}}function TM(){const u=el("canvas");return u.style.display="block",u}function mm(u={}){this.isWebGLRenderer=!0;const e=u.canvas!==void 0?u.canvas:TM(),n=u.context!==void 0?u.context:null,s=u.depth!==void 0?u.depth:!0,o=u.stencil!==void 0?u.stencil:!0,l=u.antialias!==void 0?u.antialias:!1,d=u.premultipliedAlpha!==void 0?u.premultipliedAlpha:!0,c=u.preserveDrawingBuffer!==void 0?u.preserveDrawingBuffer:!1,p=u.powerPreference!==void 0?u.powerPreference:"default",m=u.failIfMajorPerformanceCaveat!==void 0?u.failIfMajorPerformanceCaveat:!1;let g;n!==null?g=n.getContextAttributes().alpha:g=u.alpha!==void 0?u.alpha:!1;let x=null,_=null;const M=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ir,this.physicallyCorrectLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;const y=this;let v=!1,T=0,N=0,b=null,D=-1,R=null;const G=new $t,X=new $t;let E=null,k=e.width,Y=e.height,ce=1,me=null,W=null;const V=new $t(0,0,k,Y),re=new $t(0,0,k,Y);let fe=!1;const le=new um;let O=!1,ee=!1,Z=null;const F=new Zt,I=new gt,J=new te,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return b===null?ce:1}let H=n;function Le(A,K){for(let ie=0;ie<A.length;ie++){const q=A[ie],oe=e.getContext(q,K);if(oe!==null)return oe}return null}try{const A={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",tt,!1),H===null){const K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),H=Le(K,A),H===null)throw Le(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,Me,we,lt,qe,Ve,It,on,Nt,Kt,Tt,rt,an,Gt,P,w,se,ve,Se,Ce,je,be,ae,ke;function He(){ye=new ky(H),Me=new Ly(H,ye,u),ye.init(Me),be=new vM(H,ye,Me),we=new gM(H,ye,Me),lt=new Oy,qe=new nM,Ve=new _M(H,ye,we,qe,Me,be,lt),It=new Ry(y),on=new Fy(y),Nt=new q0(H,Me),ae=new by(H,ye,Nt,Me),Kt=new zy(H,Nt,lt,ae),Tt=new Wy(H,Kt,Nt,lt),Se=new Vy(H,Me,Ve),w=new Py(qe),rt=new tM(y,It,on,ye,Me,ae,w),an=new wM(y,qe),Gt=new rM,P=new cM(ye,Me),ve=new Cy(y,It,on,we,Tt,g,d),se=new mM(y,Tt,Me),ke=new EM(H,lt,Me,we),Ce=new Ay(H,ye,lt,Me),je=new Uy(H,ye,lt,Me),lt.programs=rt.programs,y.capabilities=Me,y.extensions=ye,y.properties=qe,y.renderLists=Gt,y.shadowMap=se,y.state=we,y.info=lt}He();const Ie=new MM(y,H);this.xr=Ie,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(A){A!==void 0&&(ce=A,this.setSize(k,Y,!1))},this.getSize=function(A){return A.set(k,Y)},this.setSize=function(A,K,ie){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,Y=K,e.width=Math.floor(A*ce),e.height=Math.floor(K*ce),ie!==!1&&(e.style.width=A+"px",e.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(k*ce,Y*ce).floor()},this.setDrawingBufferSize=function(A,K,ie){k=A,Y=K,ce=ie,e.width=Math.floor(A*ie),e.height=Math.floor(K*ie),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(V)},this.setViewport=function(A,K,ie,q){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,K,ie,q),we.viewport(G.copy(V).multiplyScalar(ce).floor())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,K,ie,q){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,K,ie,q),we.scissor(X.copy(re).multiplyScalar(ce).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){we.setScissorTest(fe=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,K=!0,ie=!0){let q=0;A&&(q|=16384),K&&(q|=256),ie&&(q|=1024),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Gt.dispose(),P.dispose(),qe.dispose(),It.dispose(),on.dispose(),Tt.dispose(),ae.dispose(),ke.dispose(),rt.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Te),Ie.removeEventListener("sessionend",Fe),Z&&(Z.dispose(),Z=null),st.stop()};function Oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=lt.autoReset,K=se.enabled,ie=se.autoUpdate,q=se.needsUpdate,oe=se.type;He(),lt.autoReset=A,se.enabled=K,se.autoUpdate=ie,se.needsUpdate=q,se.type=oe}function tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function dt(A){const K=A.target;K.removeEventListener("dispose",dt),Ct(K)}function Ct(A){B(A),qe.remove(A)}function B(A){const K=qe.get(A).programs;K!==void 0&&(K.forEach(function(ie){rt.releaseProgram(ie)}),A.isShaderMaterial&&rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ie,q,oe,Ue){K===null&&(K=ue);const We=oe.isMesh&&oe.matrixWorld.determinant()<0,$e=sr(A,K,ie,q,oe);we.setMaterial(q,We);let Ze=ie.index,it=1;q.wireframe===!0&&(Ze=Kt.getWireframeAttribute(ie),it=2);const Je=ie.drawRange,et=ie.attributes.position;let St=Je.start*it,Qt=(Je.start+Je.count)*it;Ue!==null&&(St=Math.max(St,Ue.start*it),Qt=Math.min(Qt,(Ue.start+Ue.count)*it)),Ze!==null?(St=Math.max(St,0),Qt=Math.min(Qt,Ze.count)):et!=null&&(St=Math.max(St,0),Qt=Math.min(Qt,et.count));const Xn=Qt-St;if(Xn<0||Xn===1/0)return;ae.setup(oe,q,$e,ie,Ze);let di,Ye=Ce;if(Ze!==null&&(di=Nt.get(Ze),Ye=je,Ye.setIndex(di)),oe.isMesh)q.wireframe===!0?(we.setLineWidth(q.wireframeLinewidth*de()),Ye.setMode(1)):Ye.setMode(4);else if(oe.isLine){let nt=q.linewidth;nt===void 0&&(nt=1),we.setLineWidth(nt*de()),oe.isLineSegments?Ye.setMode(1):oe.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else oe.isPoints?Ye.setMode(0):oe.isSprite&&Ye.setMode(4);if(oe.isInstancedMesh)Ye.renderInstances(St,Xn,oe.count);else if(ie.isInstancedBufferGeometry){const nt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ar=Math.min(ie.instanceCount,nt);Ye.renderInstances(St,Xn,ar)}else Ye.render(St,Xn)},this.compile=function(A,K){function ie(q,oe,Ue){q.transparent===!0&&q.side===er&&q.forceSinglePass===!1?(q.side=Rn,q.needsUpdate=!0,Vt(q,oe,Ue),q.side=rr,q.needsUpdate=!0,Vt(q,oe,Ue),q.side=er):Vt(q,oe,Ue)}_=P.get(A),_.init(),C.push(_),A.traverseVisible(function(q){q.isLight&&q.layers.test(K.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights(y.physicallyCorrectLights),A.traverse(function(q){const oe=q.material;if(oe)if(Array.isArray(oe))for(let Ue=0;Ue<oe.length;Ue++){const We=oe[Ue];ie(We,A,q)}else ie(oe,A,q)}),C.pop(),_=null};let ne=null;function ge(A){ne&&ne(A)}function Te(){st.stop()}function Fe(){st.start()}const st=new cm;st.setAnimationLoop(ge),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(A){ne=A,Ie.setAnimationLoop(A),A===null?st.stop():st.start()},Ie.addEventListener("sessionstart",Te),Ie.addEventListener("sessionend",Fe),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(K),K=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,K,b),_=P.get(A,C.length),_.init(),C.push(_),F.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),le.setFromProjectionMatrix(F),ee=this.localClippingEnabled,O=w.init(this.clippingPlanes,ee),x=Gt.get(A,M.length),x.init(),M.push(x),At(A,K,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(me,W),O===!0&&w.beginShadows();const ie=_.state.shadowsArray;if(se.render(ie,A,K),O===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(x,A),_.setupLights(y.physicallyCorrectLights),K.isArrayCamera){const q=K.cameras;for(let oe=0,Ue=q.length;oe<Ue;oe++){const We=q[oe];Ft(x,A,We,We.viewport)}}else Ft(x,A,K);b!==null&&(Ve.updateMultisampleRenderTarget(b),Ve.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(y,A,K),ae.resetDefaultState(),D=-1,R=null,C.pop(),C.length>0?_=C[C.length-1]:_=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function At(A,K,ie,q){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){q&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const We=Tt.update(A),$e=A.material;$e.visible&&x.push(A,We,$e,ie,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==lt.render.frame&&(A.skeleton.update(),A.skeleton.frame=lt.render.frame),!A.frustumCulled||le.intersectsObject(A))){q&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const We=Tt.update(A),$e=A.material;if(Array.isArray($e)){const Ze=We.groups;for(let it=0,Je=Ze.length;it<Je;it++){const et=Ze[it],St=$e[et.materialIndex];St&&St.visible&&x.push(A,We,St,ie,J.z,et)}}else $e.visible&&x.push(A,We,$e,ie,J.z,null)}}const Ue=A.children;for(let We=0,$e=Ue.length;We<$e;We++)At(Ue[We],K,ie,q)}function Ft(A,K,ie,q){const oe=A.opaque,Ue=A.transmissive,We=A.transparent;_.setupLightsView(ie),O===!0&&w.setGlobalState(y.clippingPlanes,ie),Ue.length>0&&ri(oe,K,ie),q&&we.viewport(G.copy(q)),oe.length>0&&ht(oe,K,ie),Ue.length>0&&ht(Ue,K,ie),We.length>0&&ht(We,K,ie),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ri(A,K,ie){const q=Me.isWebGL2;Z===null&&(Z=new Nr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?wo:Dr,minFilter:Mo,samples:q&&l===!0?4:0})),y.getDrawingBufferSize(I),q?Z.setSize(I.x,I.y):Z.setSize(Uc(I.x),Uc(I.y));const oe=y.getRenderTarget();y.setRenderTarget(Z),y.clear();const Ue=y.toneMapping;y.toneMapping=Ai,ht(A,K,ie),y.toneMapping=Ue,Ve.updateMultisampleRenderTarget(Z),Ve.updateRenderTargetMipmap(Z),y.setRenderTarget(oe)}function ht(A,K,ie){const q=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Ue=A.length;oe<Ue;oe++){const We=A[oe],$e=We.object,Ze=We.geometry,it=q===null?We.material:q,Je=We.group;$e.layers.test(ie.layers)&&Nn($e,K,ie,Ze,it,Je)}}function Nn(A,K,ie,q,oe,Ue){A.onBeforeRender(y,K,ie,q,oe,Ue),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(y,K,ie,q,A,Ue),oe.transparent===!0&&oe.side===er&&oe.forceSinglePass===!1?(oe.side=Rn,oe.needsUpdate=!0,y.renderBufferDirect(ie,K,q,oe,A,Ue),oe.side=rr,oe.needsUpdate=!0,y.renderBufferDirect(ie,K,q,oe,A,Ue),oe.side=er):y.renderBufferDirect(ie,K,q,oe,A,Ue),A.onAfterRender(y,K,ie,q,oe,Ue)}function Vt(A,K,ie){K.isScene!==!0&&(K=ue);const q=qe.get(A),oe=_.state.lights,Ue=_.state.shadowsArray,We=oe.state.version,$e=rt.getParameters(A,oe.state,Ue,K,ie),Ze=rt.getProgramCacheKey($e);let it=q.programs;q.environment=A.isMeshStandardMaterial?K.environment:null,q.fog=K.fog,q.envMap=(A.isMeshStandardMaterial?on:It).get(A.envMap||q.environment),it===void 0&&(A.addEventListener("dispose",dt),it=new Map,q.programs=it);let Je=it.get(Ze);if(Je!==void 0){if(q.currentProgram===Je&&q.lightsStateVersion===We)return zr(A,$e),Je}else $e.uniforms=rt.getUniforms(A),A.onBuild(ie,$e,y),A.onBeforeCompile($e,y),Je=rt.acquireProgram($e,Ze),it.set(Ze,Je),q.uniforms=$e.uniforms;const et=q.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=w.uniform),zr(A,$e),q.needsLights=or(A),q.lightsStateVersion=We,q.needsLights&&(et.ambientLightColor.value=oe.state.ambient,et.lightProbe.value=oe.state.probe,et.directionalLights.value=oe.state.directional,et.directionalLightShadows.value=oe.state.directionalShadow,et.spotLights.value=oe.state.spot,et.spotLightShadows.value=oe.state.spotShadow,et.rectAreaLights.value=oe.state.rectArea,et.ltc_1.value=oe.state.rectAreaLTC1,et.ltc_2.value=oe.state.rectAreaLTC2,et.pointLights.value=oe.state.point,et.pointLightShadows.value=oe.state.pointShadow,et.hemisphereLights.value=oe.state.hemi,et.directionalShadowMap.value=oe.state.directionalShadowMap,et.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,et.spotShadowMap.value=oe.state.spotShadowMap,et.spotLightMatrix.value=oe.state.spotLightMatrix,et.spotLightMap.value=oe.state.spotLightMap,et.pointShadowMap.value=oe.state.pointShadowMap,et.pointShadowMatrix.value=oe.state.pointShadowMatrix);const St=Je.getUniforms(),Qt=Ja.seqWithValue(St.seq,et);return q.currentProgram=Je,q.uniformsList=Qt,Je}function zr(A,K){const ie=qe.get(A);ie.outputEncoding=K.outputEncoding,ie.instancing=K.instancing,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function sr(A,K,ie,q,oe){K.isScene!==!0&&(K=ue),Ve.resetTextureUnits();const Ue=K.fog,We=q.isMeshStandardMaterial?K.environment:null,$e=b===null?y.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Ir,Ze=(q.isMeshStandardMaterial?on:It).get(q.envMap||We),it=q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!q.normalMap&&!!ie.attributes.tangent,et=!!ie.morphAttributes.position,St=!!ie.morphAttributes.normal,Qt=!!ie.morphAttributes.color,Xn=q.toneMapped?y.toneMapping:Ai,di=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ye=di!==void 0?di.length:0,nt=qe.get(q),ar=_.state.lights;if(O===!0&&(ee===!0||A!==R)){const un=A===R&&q.id===D;w.setState(q,A,un)}let Lt=!1;q.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==ar.state.version||nt.outputEncoding!==$e||oe.isInstancedMesh&&nt.instancing===!1||!oe.isInstancedMesh&&nt.instancing===!0||oe.isSkinnedMesh&&nt.skinning===!1||!oe.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==Ze||q.fog===!0&&nt.fog!==Ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==w.numPlanes||nt.numIntersection!==w.numIntersection)||nt.vertexAlphas!==it||nt.vertexTangents!==Je||nt.morphTargets!==et||nt.morphNormals!==St||nt.morphColors!==Qt||nt.toneMapping!==Xn||Me.isWebGL2===!0&&nt.morphTargetsCount!==Ye)&&(Lt=!0):(Lt=!0,nt.__version=q.version);let Fn=nt.currentProgram;Lt===!0&&(Fn=Vt(q,K,oe));let bo=!1,Li=!1,Pi=!1;const pt=Fn.getUniforms(),hi=nt.uniforms;if(we.useProgram(Fn.program)&&(bo=!0,Li=!0,Pi=!0),q.id!==D&&(D=q.id,Li=!0),bo||R!==A){if(pt.setValue(H,"projectionMatrix",A.projectionMatrix),Me.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),R!==A&&(R=A,Li=!0,Pi=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const un=pt.map.cameraPosition;un!==void 0&&un.setValue(H,J.setFromMatrixPosition(A.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||oe.isSkinnedMesh)&&pt.setValue(H,"viewMatrix",A.matrixWorldInverse)}if(oe.isSkinnedMesh){pt.setOptional(H,oe,"bindMatrix"),pt.setOptional(H,oe,"bindMatrixInverse");const un=oe.skeleton;un&&(Me.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),pt.setValue(H,"boneTexture",un.boneTexture,Ve),pt.setValue(H,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ln=ie.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0&&Me.isWebGL2===!0)&&Se.update(oe,ie,q,Fn),(Li||nt.receiveShadow!==oe.receiveShadow)&&(nt.receiveShadow=oe.receiveShadow,pt.setValue(H,"receiveShadow",oe.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hi.envMap.value=Ze,hi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Li&&(pt.setValue(H,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&al(hi,Pi),Ue&&q.fog===!0&&an.refreshFogUniforms(hi,Ue),an.refreshMaterialUniforms(hi,q,ce,Y,Z),Ja.upload(H,nt.uniformsList,hi,Ve)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ja.upload(H,nt.uniformsList,hi,Ve),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(H,"center",oe.center),pt.setValue(H,"modelViewMatrix",oe.modelViewMatrix),pt.setValue(H,"normalMatrix",oe.normalMatrix),pt.setValue(H,"modelMatrix",oe.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let Ps=0,ll=un.length;Ps<ll;Ps++)if(Me.isWebGL2){const lr=un[Ps];ke.update(lr,Fn),ke.bind(lr,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function al(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function or(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,K,ie){qe.get(A.texture).__webglTexture=K,qe.get(A.depthTexture).__webglTexture=ie;const q=qe.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ie===void 0,q.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,K){const ie=qe.get(A);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ie=0){b=A,T=K,N=ie;let q=!0,oe=null,Ue=!1,We=!1;if(A){const Ze=qe.get(A);Ze.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),q=!1):Ze.__webglFramebuffer===void 0?Ve.setupRenderTarget(A):Ze.__hasExternalTextures&&Ve.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(We=!0);const Je=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(oe=Je[K],Ue=!0):Me.isWebGL2&&A.samples>0&&Ve.useMultisampledRTT(A)===!1?oe=qe.get(A).__webglMultisampledFramebuffer:oe=Je,G.copy(A.viewport),X.copy(A.scissor),E=A.scissorTest}else G.copy(V).multiplyScalar(ce).floor(),X.copy(re).multiplyScalar(ce).floor(),E=fe;if(we.bindFramebuffer(36160,oe)&&Me.drawBuffers&&q&&we.drawBuffers(A,oe),we.viewport(G),we.scissor(X),we.setScissorTest(E),Ue){const Ze=qe.get(A.texture);H.framebufferTexture2D(36160,36064,34069+K,Ze.__webglTexture,ie)}else if(We){const Ze=qe.get(A.texture),it=K||0;H.framebufferTextureLayer(36160,36064,Ze.__webglTexture,ie||0,it)}D=-1},this.readRenderTargetPixels=function(A,K,ie,q,oe,Ue,We){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){we.bindFramebuffer(36160,$e);try{const Ze=A.texture,it=Ze.format,Je=Ze.type;if(it!==ii&&be.convert(it)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Je===wo&&(ye.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Je!==Dr&&be.convert(Je)!==H.getParameter(35738)&&!(Je===Ar&&(Me.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-q&&ie>=0&&ie<=A.height-oe&&H.readPixels(K,ie,q,oe,be.convert(it),be.convert(Je),Ue)}finally{const Ze=b!==null?qe.get(b).__webglFramebuffer:null;we.bindFramebuffer(36160,Ze)}}},this.copyFramebufferToTexture=function(A,K,ie=0){const q=Math.pow(2,-ie),oe=Math.floor(K.image.width*q),Ue=Math.floor(K.image.height*q);Ve.setTexture2D(K,0),H.copyTexSubImage2D(3553,ie,0,0,A.x,A.y,oe,Ue),we.unbindTexture()},this.copyTextureToTexture=function(A,K,ie,q=0){const oe=K.image.width,Ue=K.image.height,We=be.convert(ie.format),$e=be.convert(ie.type);Ve.setTexture2D(ie,0),H.pixelStorei(37440,ie.flipY),H.pixelStorei(37441,ie.premultiplyAlpha),H.pixelStorei(3317,ie.unpackAlignment),K.isDataTexture?H.texSubImage2D(3553,q,A.x,A.y,oe,Ue,We,$e,K.image.data):K.isCompressedTexture?H.compressedTexSubImage2D(3553,q,A.x,A.y,K.mipmaps[0].width,K.mipmaps[0].height,We,K.mipmaps[0].data):H.texSubImage2D(3553,q,A.x,A.y,We,$e,K.image),q===0&&ie.generateMipmaps&&H.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ie,q,oe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=A.max.x-A.min.x+1,We=A.max.y-A.min.y+1,$e=A.max.z-A.min.z+1,Ze=be.convert(q.format),it=be.convert(q.type);let Je;if(q.isData3DTexture)Ve.setTexture3D(q,0),Je=32879;else if(q.isDataArrayTexture)Ve.setTexture2DArray(q,0),Je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,q.flipY),H.pixelStorei(37441,q.premultiplyAlpha),H.pixelStorei(3317,q.unpackAlignment);const et=H.getParameter(3314),St=H.getParameter(32878),Qt=H.getParameter(3316),Xn=H.getParameter(3315),di=H.getParameter(32877),Ye=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;H.pixelStorei(3314,Ye.width),H.pixelStorei(32878,Ye.height),H.pixelStorei(3316,A.min.x),H.pixelStorei(3315,A.min.y),H.pixelStorei(32877,A.min.z),ie.isDataTexture||ie.isData3DTexture?H.texSubImage3D(Je,oe,K.x,K.y,K.z,Ue,We,$e,Ze,it,Ye.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Je,oe,K.x,K.y,K.z,Ue,We,$e,Ze,Ye.data)):H.texSubImage3D(Je,oe,K.x,K.y,K.z,Ue,We,$e,Ze,it,Ye),H.pixelStorei(3314,et),H.pixelStorei(32878,St),H.pixelStorei(3316,Qt),H.pixelStorei(3315,Xn),H.pixelStorei(32877,di),oe===0&&q.generateMipmaps&&H.generateMipmap(Je),we.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ve.setTextureCube(A,0):A.isData3DTexture?Ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ve.setTexture2DArray(A,0):Ve.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){T=0,N=0,b=null,we.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class CM extends mm{}CM.prototype.isWebGL1Renderer=!0;class bM extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);const AM=.2,kp=2,zp=75,Ac=30,LM=()=>{const u=ut.useRef(null),[e,n]=ut.useState(0),[s,o]=ut.useState(0),[l,d]=ut.useState([]),[c,p]=ut.useState(!1),[m,g]=ut.useState(!0),[x,_]=ut.useState(0),M=ut.useRef(null),C=ut.useRef(null),y=ut.useRef([]),v=ut.useRef(!1);return ut.useEffect(()=>{const T=new bM,N=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3);N.position.z=500;const b=new mm;b.setSize(window.innerWidth,window.innerHeight),u.current.appendChild(b.domElement),M.current=T;const D=new sl(800,600),R=new So({color:"skyblue"}),G=new jn(D,R);G.position.z=-100,T.add(G);const X=new ir(Ac,Ac,Ac),E=new So({color:"gray"}),k=new jn(X,E);k.position.set(-200,e,0),T.add(k),C.current=k;const Y=()=>{const fe=75+Math.random()*225,le=600-(fe+150),O=new ir(zp,fe,50),ee=new ir(zp,le,50),Z=new So({color:"blue"}),F=new jn(O,Z);F.position.set(400,300-fe/2,0),T.add(F);const I=new jn(ee,Z);I.position.set(400,-300+le/2,0),T.add(I),y.current.push({top:F,bottom:I})};let ce;const me=()=>{v.current||(o(W=>W+AM),n(W=>{const V=W+s;return k.position.y=V,V}),y.current.forEach(W=>{W.top.position.x-=kp,W.bottom.position.x-=kp;const V=new nr().setFromObject(k),re=new nr().setFromObject(W.top),fe=new nr().setFromObject(W.bottom);(V.intersectsBox(re)||V.intersectsBox(fe))&&(v.current=!0,p(!0))}),(k.position.y<-300||k.position.y>300)&&(v.current=!0,p(!0)),b.render(T,N),ce=requestAnimationFrame(me))};return m||(Y(),setInterval(Y,1500),ce=requestAnimationFrame(me)),()=>{cancelAnimationFrame(ce),u.current.removeChild(b.domElement)}},[m,c]),ut.useEffect(()=>{const T=()=>{v.current||o(-4)};return window.addEventListener("click",T),()=>{window.removeEventListener("click",T)}},[]),sn.jsxs(sn.Fragment,{children:[sn.jsx("div",{ref:u,style:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0}}),m&&sn.jsxs("div",{style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"},children:[sn.jsx("h1",{children:"Welcome to Pigeon Flight"}),sn.jsx("button",{onClick:()=>g(!1),style:{padding:"10px 20px",fontSize:"20px",background:"limegreen",color:"white"},children:"Start Game"})]}),c&&sn.jsxs("div",{style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"},children:[sn.jsx("h1",{children:"Game Over"}),sn.jsxs("p",{children:["Score: ",x]}),sn.jsx("button",{onClick:()=>{p(!1),g(!0),v.current=!1,d([]),n(0),o(0)},style:{padding:"10px 20px",fontSize:"20px",background:"red",color:"white"},children:"Restart"})]})]})};var Ka={},Lc={exports:{}},Sn={},Pc={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function PM(){return Up||(Up=1,function(u){function e(O,ee){var Z=O.length;O.push(ee);e:for(;0<Z;){var F=Z-1>>>1,I=O[F];if(0<o(I,ee))O[F]=ee,O[Z]=I,Z=F;else break e}}function n(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var ee=O[0],Z=O.pop();if(Z!==ee){O[0]=Z;e:for(var F=0,I=O.length,J=I>>>1;F<J;){var ue=2*(F+1)-1,de=O[ue],H=ue+1,Le=O[H];if(0>o(de,Z))H<I&&0>o(Le,de)?(O[F]=Le,O[H]=Z,F=H):(O[F]=de,O[ue]=Z,F=ue);else if(H<I&&0>o(Le,Z))O[F]=Le,O[H]=Z,F=H;else break e}}return ee}function o(O,ee){var Z=O.sortIndex-ee.sortIndex;return Z!==0?Z:O.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;u.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();u.unstable_now=function(){return d.now()-c}}var p=[],m=[],g=1,x=null,_=3,M=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var ee=n(m);ee!==null;){if(ee.callback===null)s(m);else if(ee.startTime<=O)s(m),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=n(m)}}function D(O){if(y=!1,b(O),!C)if(n(p)!==null)C=!0,fe(R);else{var ee=n(m);ee!==null&&le(D,ee.startTime-O)}}function R(O,ee){C=!1,y&&(y=!1,T(E),E=-1),M=!0;var Z=_;try{for(b(ee),x=n(p);x!==null&&(!(x.expirationTime>ee)||O&&!ce());){var F=x.callback;if(typeof F=="function"){x.callback=null,_=x.priorityLevel;var I=F(x.expirationTime<=ee);ee=u.unstable_now(),typeof I=="function"?x.callback=I:x===n(p)&&s(p),b(ee)}else s(p);x=n(p)}if(x!==null)var J=!0;else{var ue=n(m);ue!==null&&le(D,ue.startTime-ee),J=!1}return J}finally{x=null,_=Z,M=!1}}var G=!1,X=null,E=-1,k=5,Y=-1;function ce(){return!(u.unstable_now()-Y<k)}function me(){if(X!==null){var O=u.unstable_now();Y=O;var ee=!0;try{ee=X(!0,O)}finally{ee?W():(G=!1,X=null)}}else G=!1}var W;if(typeof N=="function")W=function(){N(me)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,re=V.port2;V.port1.onmessage=me,W=function(){re.postMessage(null)}}else W=function(){v(me,0)};function fe(O){X=O,G||(G=!0,W())}function le(O,ee){E=v(function(){O(u.unstable_now())},ee)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(O){O.callback=null},u.unstable_continueExecution=function(){C||M||(C=!0,fe(R))},u.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<O?Math.floor(1e3/O):5},u.unstable_getCurrentPriorityLevel=function(){return _},u.unstable_getFirstCallbackNode=function(){return n(p)},u.unstable_next=function(O){switch(_){case 1:case 2:case 3:var ee=3;break;default:ee=_}var Z=_;_=ee;try{return O()}finally{_=Z}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(O,ee){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=_;_=O;try{return ee()}finally{_=Z}},u.unstable_scheduleCallback=function(O,ee,Z){var F=u.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?F+Z:F):Z=F,O){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Z+I,O={id:g++,callback:ee,priorityLevel:O,startTime:Z,expirationTime:I,sortIndex:-1},Z>F?(O.sortIndex=Z,e(m,O),n(p)===null&&O===n(m)&&(y?(T(E),E=-1):y=!0,le(D,Z-F))):(O.sortIndex=I,e(p,O),C||M||(C=!0,fe(R))),O},u.unstable_shouldYield=ce,u.unstable_wrapCallback=function(O){var ee=_;return function(){var Z=_;_=ee;try{return O.apply(this,arguments)}finally{_=Z}}}}(Rc)),Rc}var Op;function RM(){return Op||(Op=1,Pc.exports=PM()),Pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function DM(){if(Bp)return Sn;Bp=1;var u=Bc(),e=RM();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)s.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function _(t){return p.call(x,t)?!0:p.call(g,t)?!1:m.test(t)?x[t]=!0:(g[t]=!0,!1)}function M(t,i,r,a){if(r!==null&&r.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C(t,i,r,a){if(i===null||typeof i>"u"||M(t,i,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function y(t,i,r,a,f,h,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=f,this.mustUseProperty=r,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=S}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new y(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new y(t,5,!1,t.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(T,N);v[i]=new y(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(T,N);v[i]=new y(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(T,N);v[i]=new y(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new y(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new y(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,r,a){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(C(i,r,f,a)&&(r=null),a||f===null?_(i)&&(r===null?t.removeAttribute(i):t.setAttribute(i,""+r)):f.mustUseProperty?t[f.propertyName]=r===null?f.type===3?!1:"":r:(i=f.attributeName,a=f.attributeNamespace,r===null?t.removeAttribute(i):(f=f.type,r=f===3||f===4&&r===!0?"":""+r,a?t.setAttributeNS(a,i,r):t.setAttribute(i,r))))}var D=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),G=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),ce=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),O=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,F;function I(t){if(F===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var J=!1;function ue(t,i){if(!t||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var a=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){a=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){a=Q}t()}}catch(Q){if(Q&&a&&typeof Q.stack=="string"){for(var f=Q.stack.split(`
`),h=a.stack.split(`
`),S=f.length-1,L=h.length-1;1<=S&&0<=L&&f[S]!==h[L];)L--;for(;1<=S&&0<=L;S--,L--)if(f[S]!==h[L]){if(S!==1||L!==1)do if(S--,L--,0>L||f[S]!==h[L]){var z=`
`+f[S].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=S&&0<=L);break}}}finally{J=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?I(t):""}function de(t){switch(t.tag){case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function H(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case G:return"Portal";case k:return"Profiler";case E:return"StrictMode";case W:return"Suspense";case V:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ce:return(t.displayName||"Context")+".Consumer";case Y:return(t._context.displayName||"Context")+".Provider";case me:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case re:return i=t.displayName||null,i!==null?i:H(t.type)||"Memo";case fe:i=t._payload,t=t._init;try{return H(t(i))}catch{}}return null}function Le(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function we(t){var i=Me(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,h=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function lt(t){t._valueTracker||(t._valueTracker=we(t))}function qe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),a="";return t&&(a=Me(t)?t.checked?"true":"false":t.value),t=a,t!==r?(i.setValue(t),!0):!1}function Ve(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function It(t,i){var r=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function on(t,i){var r=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;r=ye(i.value!=null?i.value:r),t._wrapperState={initialChecked:a,initialValue:r,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Nt(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function Kt(t,i){Nt(t,i);var r=ye(i.value),a=i.type;if(r!=null)a==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?rt(t,i.type,r):i.hasOwnProperty("defaultValue")&&rt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,r){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,r||i===t.value||(t.value=i),t.defaultValue=i}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function rt(t,i,r){(i!=="number"||Ve(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var an=Array.isArray;function Gt(t,i,r,a){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&a&&(t[r].defaultSelected=!0)}else{for(r=""+ye(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,a&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function P(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function w(t,i){var r=i.value;if(r==null){if(r=i.children,i=i.defaultValue,r!=null){if(i!=null)throw Error(n(92));if(an(r)){if(1<r.length)throw Error(n(93));r=r[0]}i=r}i==null&&(i=""),r=i}t._wrapperState={initialValue:ye(r)}}function se(t,i){var r=ye(i.value),a=ye(i.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),i.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),a!=null&&(t.defaultValue=""+a)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Se(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Se(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var je,be=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,r,a,f){MSApp.execUnsafeLocalFunction(function(){return t(i,r,a,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(je=je||document.createElement("div"),je.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=je.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ae(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){He.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function Ie(t,i,r){return i==null||typeof i=="boolean"||i===""?"":r||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function Oe(t,i){t=t.style;for(var r in i)if(i.hasOwnProperty(r)){var a=r.indexOf("--")===0,f=Ie(r,i[r],a);r==="float"&&(r="cssFloat"),a?t.setProperty(r,f):t[r]=f}}var ze=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function dt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ne=null,ge=null,Te=null;function Fe(t){if(t=$s(t)){if(typeof ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=jo(i),ne(t.stateNode,t.type,i))}}function st(t){ge?Te?Te.push(t):Te=[t]:ge=t}function At(){if(ge){var t=ge,i=Te;if(Te=ge=null,Fe(t),i)for(t=0;t<i.length;t++)Fe(i[t])}}function Ft(t,i){return t(i)}function ri(){}var ht=!1;function Nn(t,i,r){if(ht)return t(i,r);ht=!0;try{return Ft(t,i,r)}finally{ht=!1,(ge!==null||Te!==null)&&(ri(),At())}}function Vt(t,i){var r=t.stateNode;if(r===null)return null;var a=jo(r);if(a===null)return null;r=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(n(231,i,typeof r));return r}var zr=!1;if(c)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){zr=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{zr=!1}function al(t,i,r,a,f,h,S,L,z){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(r,Q)}catch(pe){this.onError(pe)}}var or=!1,A=null,K=!1,ie=null,q={onError:function(t){or=!0,A=t}};function oe(t,i,r,a,f,h,S,L,z){or=!1,A=null,al.apply(q,arguments)}function Ue(t,i,r,a,f,h,S,L,z){if(oe.apply(this,arguments),or){if(or){var Q=A;or=!1,A=null}else throw Error(n(198));K||(K=!0,ie=Q)}}function We(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function $e(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ze(t){if(We(t)!==t)throw Error(n(188))}function it(t){var i=t.alternate;if(!i){if(i=We(t),i===null)throw Error(n(188));return i!==t?null:t}for(var r=t,a=i;;){var f=r.return;if(f===null)break;var h=f.alternate;if(h===null){if(a=f.return,a!==null){r=a;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===r)return Ze(f),t;if(h===a)return Ze(f),i;h=h.sibling}throw Error(n(188))}if(r.return!==a.return)r=f,a=h;else{for(var S=!1,L=f.child;L;){if(L===r){S=!0,r=f,a=h;break}if(L===a){S=!0,a=f,r=h;break}L=L.sibling}if(!S){for(L=h.child;L;){if(L===r){S=!0,r=h,a=f;break}if(L===a){S=!0,a=h,r=f;break}L=L.sibling}if(!S)throw Error(n(189))}}if(r.alternate!==a)throw Error(n(190))}if(r.tag!==3)throw Error(n(188));return r.stateNode.current===r?t:i}function Je(t){return t=it(t),t!==null?et(t):null}function et(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=et(t);if(i!==null)return i;t=t.sibling}return null}var St=e.unstable_scheduleCallback,Qt=e.unstable_cancelCallback,Xn=e.unstable_shouldYield,di=e.unstable_requestPaint,Ye=e.unstable_now,nt=e.unstable_getCurrentPriorityLevel,ar=e.unstable_ImmediatePriority,Lt=e.unstable_UserBlockingPriority,Fn=e.unstable_NormalPriority,bo=e.unstable_LowPriority,Li=e.unstable_IdlePriority,Pi=null,pt=null;function hi(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Pi,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:ll,un=Math.log,Ps=Math.LN2;function ll(t){return t>>>=0,t===0?32:31-(un(t)/Ps|0)|0}var lr=64,Ao=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lo(t,i){var r=t.pendingLanes;if(r===0)return 0;var a=0,f=t.suspendedLanes,h=t.pingedLanes,S=r&268435455;if(S!==0){var L=S&~f;L!==0?a=Rs(L):(h&=S,h!==0&&(a=Rs(h)))}else S=r&~f,S!==0?a=Rs(S):h!==0&&(a=Rs(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&f)===0&&(f=a&-a,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=r&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)r=31-ln(i),f=1<<r,a|=t[r],i&=~f;return a}function gm(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _m(t,i){for(var r=t.suspendedLanes,a=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var S=31-ln(h),L=1<<S,z=f[S];z===-1?((L&r)===0||(L&a)!==0)&&(f[S]=gm(L,i)):z<=i&&(t.expiredLanes|=L),h&=~L}}function ul(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hc(){var t=lr;return lr<<=1,(lr&4194240)===0&&(lr=64),t}function cl(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Ds(t,i,r){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ln(i),t[i]=r}function vm(t,i){var r=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<r;){var f=31-ln(r),h=1<<f;i[f]=0,a[f]=-1,t[f]=-1,r&=~h}}function fl(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var a=31-ln(r),f=1<<a;f&i|t[a]&i&&(t[a]|=i),r&=~f}}var ft=0;function jc(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Xc,dl,qc,Yc,$c,hl=!1,Po=[],Ri=null,Di=null,Ii=null,Is=new Map,Ns=new Map,Ni=[],xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zc(t,i){switch(t){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":Is.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(i.pointerId)}}function Fs(t,i,r,a,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:a,nativeEvent:h,targetContainers:[f]},i!==null&&(i=$s(i),i!==null&&dl(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function ym(t,i,r,a,f){switch(i){case"focusin":return Ri=Fs(Ri,t,i,r,a,f),!0;case"dragenter":return Di=Fs(Di,t,i,r,a,f),!0;case"mouseover":return Ii=Fs(Ii,t,i,r,a,f),!0;case"pointerover":var h=f.pointerId;return Is.set(h,Fs(Is.get(h)||null,t,i,r,a,f)),!0;case"gotpointercapture":return h=f.pointerId,Ns.set(h,Fs(Ns.get(h)||null,t,i,r,a,f)),!0}return!1}function Kc(t){var i=ur(t.target);if(i!==null){var r=We(i);if(r!==null){if(i=r.tag,i===13){if(i=$e(r),i!==null){t.blockedOn=i,$c(t.priority,function(){qc(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=ml(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var a=new r.constructor(r.type,r);Ct=a,r.target.dispatchEvent(a),Ct=null}else return i=$s(r),i!==null&&dl(i),t.blockedOn=r,!1;i.shift()}return!0}function Qc(t,i,r){Ro(t)&&r.delete(i)}function Sm(){hl=!1,Ri!==null&&Ro(Ri)&&(Ri=null),Di!==null&&Ro(Di)&&(Di=null),Ii!==null&&Ro(Ii)&&(Ii=null),Is.forEach(Qc),Ns.forEach(Qc)}function ks(t,i){t.blockedOn===i&&(t.blockedOn=null,hl||(hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sm)))}function zs(t){function i(f){return ks(f,t)}if(0<Po.length){ks(Po[0],t);for(var r=1;r<Po.length;r++){var a=Po[r];a.blockedOn===t&&(a.blockedOn=null)}}for(Ri!==null&&ks(Ri,t),Di!==null&&ks(Di,t),Ii!==null&&ks(Ii,t),Is.forEach(i),Ns.forEach(i),r=0;r<Ni.length;r++)a=Ni[r],a.blockedOn===t&&(a.blockedOn=null);for(;0<Ni.length&&(r=Ni[0],r.blockedOn===null);)Kc(r),r.blockedOn===null&&Ni.shift()}var Ur=D.ReactCurrentBatchConfig,Do=!0;function Mm(t,i,r,a){var f=ft,h=Ur.transition;Ur.transition=null;try{ft=1,pl(t,i,r,a)}finally{ft=f,Ur.transition=h}}function wm(t,i,r,a){var f=ft,h=Ur.transition;Ur.transition=null;try{ft=4,pl(t,i,r,a)}finally{ft=f,Ur.transition=h}}function pl(t,i,r,a){if(Do){var f=ml(t,i,r,a);if(f===null)Dl(t,i,a,Io,r),Zc(t,a);else if(ym(f,t,i,r,a))a.stopPropagation();else if(Zc(t,a),i&4&&-1<xm.indexOf(t)){for(;f!==null;){var h=$s(f);if(h!==null&&Xc(h),h=ml(t,i,r,a),h===null&&Dl(t,i,a,Io,r),h===f)break;f=h}f!==null&&a.stopPropagation()}else Dl(t,i,a,null,r)}}var Io=null;function ml(t,i,r,a){if(Io=null,t=B(a),t=ur(t),t!==null)if(i=We(t),i===null)t=null;else if(r=i.tag,r===13){if(t=$e(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Io=t,null}function Jc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nt()){case ar:return 1;case Lt:return 4;case Fn:case bo:return 16;case Li:return 536870912;default:return 16}default:return 16}}var Fi=null,gl=null,No=null;function ef(){if(No)return No;var t,i=gl,r=i.length,a,f="value"in Fi?Fi.value:Fi.textContent,h=f.length;for(t=0;t<r&&i[t]===f[t];t++);var S=r-t;for(a=1;a<=S&&i[r-a]===f[h-a];a++);return No=f.slice(t,1<a?1-a:void 0)}function Fo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function tf(){return!1}function Mn(t){function i(r,a,f,h,S){this._reactName=r,this._targetInst=f,this.type=a,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(r=t[L],this[L]=r?r(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ko:tf,this.isPropagationStopped=tf,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),i}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Mn(Or),Us=Z({},Or,{view:0,detail:0}),Em=Mn(Us),vl,xl,Os,zo=Z({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(vl=t.screenX-Os.screenX,xl=t.screenY-Os.screenY):xl=vl=0,Os=t),vl)},movementY:function(t){return"movementY"in t?t.movementY:xl}}),nf=Mn(zo),Tm=Z({},zo,{dataTransfer:0}),Cm=Mn(Tm),bm=Z({},Us,{relatedTarget:0}),yl=Mn(bm),Am=Z({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Lm=Mn(Am),Pm=Z({},Or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rm=Mn(Pm),Dm=Z({},Or,{data:0}),rf=Mn(Dm),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function km(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Fm[t])?!!i[t]:!1}function Sl(){return km}var zm=Z({},Us,{key:function(t){if(t.key){var i=Im[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sl,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Um=Mn(zm),Om=Z({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=Mn(Om),Bm=Z({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sl}),Gm=Mn(Bm),Vm=Z({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=Mn(Vm),Hm=Z({},zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jm=Mn(Hm),Xm=[9,13,27,32],Ml=c&&"CompositionEvent"in window,Bs=null;c&&"documentMode"in document&&(Bs=document.documentMode);var qm=c&&"TextEvent"in window&&!Bs,of=c&&(!Ml||Bs&&8<Bs&&11>=Bs),af=" ",lf=!1;function uf(t,i){switch(t){case"keyup":return Xm.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function Ym(t,i){switch(t){case"compositionend":return cf(i);case"keypress":return i.which!==32?null:(lf=!0,af);case"textInput":return t=i.data,t===af&&lf?null:t;default:return null}}function $m(t,i){if(Br)return t==="compositionend"||!Ml&&uf(t,i)?(t=ef(),No=gl=Fi=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return of&&i.locale!=="ko"?null:i.data;default:return null}}var Zm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Zm[t.type]:i==="textarea"}function df(t,i,r,a){st(a),i=Vo(i,"onChange"),0<i.length&&(r=new _l("onChange","change",null,r,a),t.push({event:r,listeners:i}))}var Gs=null,Vs=null;function Km(t){Pf(t,0)}function Uo(t){var i=jr(t);if(qe(i))return t}function Qm(t,i){if(t==="change")return i}var hf=!1;if(c){var wl;if(c){var El="oninput"in document;if(!El){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),El=typeof pf.oninput=="function"}wl=El}else wl=!1;hf=wl&&(!document.documentMode||9<document.documentMode)}function mf(){Gs&&(Gs.detachEvent("onpropertychange",gf),Vs=Gs=null)}function gf(t){if(t.propertyName==="value"&&Uo(Vs)){var i=[];df(i,Vs,t,B(t)),Nn(Km,i)}}function Jm(t,i,r){t==="focusin"?(mf(),Gs=i,Vs=r,Gs.attachEvent("onpropertychange",gf)):t==="focusout"&&mf()}function eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uo(Vs)}function tg(t,i){if(t==="click")return Uo(i)}function ng(t,i){if(t==="input"||t==="change")return Uo(i)}function ig(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:ig;function Ws(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),a=Object.keys(i);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var f=r[a];if(!p.call(i,f)||!qn(t[f],i[f]))return!1}return!0}function _f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vf(t,i){var r=_f(t);t=0;for(var a;r;){if(r.nodeType===3){if(a=t+r.textContent.length,t<=i&&a>=i)return{node:r,offset:i-t};t=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_f(r)}}function xf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?xf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yf(){for(var t=window,i=Ve();i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Ve(t.document)}return i}function Tl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function rg(t){var i=yf(),r=t.focusedElem,a=t.selectionRange;if(i!==r&&r&&r.ownerDocument&&xf(r.ownerDocument.documentElement,r)){if(a!==null&&Tl(r)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in r)r.selectionStart=i,r.selectionEnd=Math.min(t,r.value.length);else if(t=(i=r.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=r.textContent.length,h=Math.min(a.start,f);a=a.end===void 0?h:Math.min(a.end,f),!t.extend&&h>a&&(f=a,a=h,h=f),f=vf(r,h);var S=vf(r,a);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=r;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<i.length;r++)t=i[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sg=c&&"documentMode"in document&&11>=document.documentMode,Gr=null,Cl=null,Hs=null,bl=!1;function Sf(t,i,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;bl||Gr==null||Gr!==Ve(a)||(a=Gr,"selectionStart"in a&&Tl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hs&&Ws(Hs,a)||(Hs=a,a=Vo(Cl,"onSelect"),0<a.length&&(i=new _l("onSelect","select",null,i,r),t.push({event:i,listeners:a}),i.target=Gr)))}function Oo(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Vr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Al={},Mf={};c&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Bo(t){if(Al[t])return Al[t];if(!Vr[t])return t;var i=Vr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Mf)return Al[t]=i[r];return t}var wf=Bo("animationend"),Ef=Bo("animationiteration"),Tf=Bo("animationstart"),Cf=Bo("transitionend"),bf=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,i){bf.set(t,i),l(i,[t])}for(var Ll=0;Ll<Af.length;Ll++){var Pl=Af[Ll],og=Pl.toLowerCase(),ag=Pl[0].toUpperCase()+Pl.slice(1);ki(og,"on"+ag)}ki(wf,"onAnimationEnd"),ki(Ef,"onAnimationIteration"),ki(Tf,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(Cf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Lf(t,i,r){var a=t.type||"unknown-event";t.currentTarget=r,Ue(a,i,void 0,t),t.currentTarget=null}function Pf(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var a=t[r],f=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var S=a.length-1;0<=S;S--){var L=a[S],z=L.instance,Q=L.currentTarget;if(L=L.listener,z!==h&&f.isPropagationStopped())break e;Lf(f,L,Q),h=z}else for(S=0;S<a.length;S++){if(L=a[S],z=L.instance,Q=L.currentTarget,L=L.listener,z!==h&&f.isPropagationStopped())break e;Lf(f,L,Q),h=z}}}if(K)throw t=ie,K=!1,ie=null,t}function _t(t,i){var r=i[Ul];r===void 0&&(r=i[Ul]=new Set);var a=t+"__bubble";r.has(a)||(Rf(i,t,2,!1),r.add(a))}function Rl(t,i,r){var a=0;i&&(a|=4),Rf(r,t,a,i)}var Go="_reactListening"+Math.random().toString(36).slice(2);function Xs(t){if(!t[Go]){t[Go]=!0,s.forEach(function(r){r!=="selectionchange"&&(lg.has(r)||Rl(r,!1,t),Rl(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Go]||(i[Go]=!0,Rl("selectionchange",!1,i))}}function Rf(t,i,r,a){switch(Jc(i)){case 1:var f=Mm;break;case 4:f=wm;break;default:f=pl}r=f.bind(null,i,r,t),f=void 0,!zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),a?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function Dl(t,i,r,a,f){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var S=a.tag;if(S===3||S===4){var L=a.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(S===4)for(S=a.return;S!==null;){var z=S.tag;if((z===3||z===4)&&(z=S.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;S=S.return}for(;L!==null;){if(S=ur(L),S===null)return;if(z=S.tag,z===5||z===6){a=h=S;continue e}L=L.parentNode}}a=a.return}Nn(function(){var Q=h,pe=B(r),_e=[];e:{var he=bf.get(t);if(he!==void 0){var Ae=_l,Re=t;switch(t){case"keypress":if(Fo(r)===0)break e;case"keydown":case"keyup":Ae=Um;break;case"focusin":Re="focus",Ae=yl;break;case"focusout":Re="blur",Ae=yl;break;case"beforeblur":case"afterblur":Ae=yl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ae=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ae=Cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ae=Gm;break;case wf:case Ef:case Tf:Ae=Lm;break;case Cf:Ae=Wm;break;case"scroll":Ae=Em;break;case"wheel":Ae=jm;break;case"copy":case"cut":case"paste":Ae=Rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ae=sf}var De=(i&4)!==0,Pt=!De&&t==="scroll",j=De?he!==null?he+"Capture":null:he;De=[];for(var U=Q,$;U!==null;){$=U;var xe=$.stateNode;if($.tag===5&&xe!==null&&($=xe,j!==null&&(xe=Vt(U,j),xe!=null&&De.push(qs(U,xe,$)))),Pt)break;U=U.return}0<De.length&&(he=new Ae(he,Re,null,r,pe),_e.push({event:he,listeners:De}))}}if((i&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",Ae=t==="mouseout"||t==="pointerout",he&&r!==Ct&&(Re=r.relatedTarget||r.fromElement)&&(ur(Re)||Re[pi]))break e;if((Ae||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,Ae?(Re=r.relatedTarget||r.toElement,Ae=Q,Re=Re?ur(Re):null,Re!==null&&(Pt=We(Re),Re!==Pt||Re.tag!==5&&Re.tag!==6)&&(Re=null)):(Ae=null,Re=Q),Ae!==Re)){if(De=nf,xe="onMouseLeave",j="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(De=sf,xe="onPointerLeave",j="onPointerEnter",U="pointer"),Pt=Ae==null?he:jr(Ae),$=Re==null?he:jr(Re),he=new De(xe,U+"leave",Ae,r,pe),he.target=Pt,he.relatedTarget=$,xe=null,ur(pe)===Q&&(De=new De(j,U+"enter",Re,r,pe),De.target=$,De.relatedTarget=Pt,xe=De),Pt=xe,Ae&&Re)t:{for(De=Ae,j=Re,U=0,$=De;$;$=Wr($))U++;for($=0,xe=j;xe;xe=Wr(xe))$++;for(;0<U-$;)De=Wr(De),U--;for(;0<$-U;)j=Wr(j),$--;for(;U--;){if(De===j||j!==null&&De===j.alternate)break t;De=Wr(De),j=Wr(j)}De=null}else De=null;Ae!==null&&Df(_e,he,Ae,De,!1),Re!==null&&Pt!==null&&Df(_e,Pt,Re,De,!0)}}e:{if(he=Q?jr(Q):window,Ae=he.nodeName&&he.nodeName.toLowerCase(),Ae==="select"||Ae==="input"&&he.type==="file")var Ne=Qm;else if(ff(he))if(hf)Ne=ng;else{Ne=eg;var Be=Jm}else(Ae=he.nodeName)&&Ae.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Ne=tg);if(Ne&&(Ne=Ne(t,Q))){df(_e,Ne,r,pe);break e}Be&&Be(t,he,Q),t==="focusout"&&(Be=he._wrapperState)&&Be.controlled&&he.type==="number"&&rt(he,"number",he.value)}switch(Be=Q?jr(Q):window,t){case"focusin":(ff(Be)||Be.contentEditable==="true")&&(Gr=Be,Cl=Q,Hs=null);break;case"focusout":Hs=Cl=Gr=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,Sf(_e,r,pe);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":Sf(_e,r,pe)}var Ge;if(Ml)e:{switch(t){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else Br?uf(t,r)&&(Xe="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Xe="onCompositionStart");Xe&&(of&&r.locale!=="ko"&&(Br||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&Br&&(Ge=ef()):(Fi=pe,gl="value"in Fi?Fi.value:Fi.textContent,Br=!0)),Be=Vo(Q,Xe),0<Be.length&&(Xe=new rf(Xe,t,null,r,pe),_e.push({event:Xe,listeners:Be}),Ge?Xe.data=Ge:(Ge=cf(r),Ge!==null&&(Xe.data=Ge)))),(Ge=qm?Ym(t,r):$m(t,r))&&(Q=Vo(Q,"onBeforeInput"),0<Q.length&&(pe=new rf("onBeforeInput","beforeinput",null,r,pe),_e.push({event:pe,listeners:Q}),pe.data=Ge))}Pf(_e,i)})}function qs(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Vo(t,i){for(var r=i+"Capture",a=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Vt(t,r),h!=null&&a.unshift(qs(t,h,f)),h=Vt(t,i),h!=null&&a.push(qs(t,h,f))),t=t.return}return a}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Df(t,i,r,a,f){for(var h=i._reactName,S=[];r!==null&&r!==a;){var L=r,z=L.alternate,Q=L.stateNode;if(z!==null&&z===a)break;L.tag===5&&Q!==null&&(L=Q,f?(z=Vt(r,h),z!=null&&S.unshift(qs(r,z,L))):f||(z=Vt(r,h),z!=null&&S.push(qs(r,z,L)))),r=r.return}S.length!==0&&t.push({event:i,listeners:S})}var ug=/\r\n?/g,cg=/\u0000|\uFFFD/g;function If(t){return(typeof t=="string"?t:""+t).replace(ug,`
`).replace(cg,"")}function Wo(t,i,r){if(i=If(i),If(t)!==i&&r)throw Error(n(425))}function Ho(){}var Il=null,Nl=null;function Fl(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,fg=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,dg=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(hg)}:kl;function hg(t){setTimeout(function(){throw t})}function zl(t,i){var r=i,a=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(a===0){t.removeChild(f),zs(i);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=f}while(r);zs(i)}function zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ff(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),si="__reactFiber$"+Hr,Ys="__reactProps$"+Hr,pi="__reactContainer$"+Hr,Ul="__reactEvents$"+Hr,pg="__reactListeners$"+Hr,mg="__reactHandles$"+Hr;function ur(t){var i=t[si];if(i)return i;for(var r=t.parentNode;r;){if(i=r[pi]||r[si]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Ff(t);t!==null;){if(r=t[si])return r;t=Ff(t)}return i}t=r,r=t.parentNode}return null}function $s(t){return t=t[si]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function jo(t){return t[Ys]||null}var Ol=[],Xr=-1;function Ui(t){return{current:t}}function vt(t){0>Xr||(t.current=Ol[Xr],Ol[Xr]=null,Xr--)}function mt(t,i){Xr++,Ol[Xr]=t.current,t.current=i}var Oi={},Jt=Ui(Oi),gn=Ui(!1),cr=Oi;function qr(t,i){var r=t.type.contextTypes;if(!r)return Oi;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in r)f[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function _n(t){return t=t.childContextTypes,t!=null}function Xo(){vt(gn),vt(Jt)}function kf(t,i,r){if(Jt.current!==Oi)throw Error(n(168));mt(Jt,i),mt(gn,r)}function zf(t,i,r){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var f in a)if(!(f in i))throw Error(n(108,Le(t)||"Unknown",f));return Z({},r,a)}function qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Oi,cr=Jt.current,mt(Jt,t),mt(gn,gn.current),!0}function Uf(t,i,r){var a=t.stateNode;if(!a)throw Error(n(169));r?(t=zf(t,i,cr),a.__reactInternalMemoizedMergedChildContext=t,vt(gn),vt(Jt),mt(Jt,t)):vt(gn),mt(gn,r)}var mi=null,Yo=!1,Bl=!1;function Of(t){mi===null?mi=[t]:mi.push(t)}function gg(t){Yo=!0,Of(t)}function Bi(){if(!Bl&&mi!==null){Bl=!0;var t=0,i=ft;try{var r=mi;for(ft=1;t<r.length;t++){var a=r[t];do a=a(!0);while(a!==null)}mi=null,Yo=!1}catch(f){throw mi!==null&&(mi=mi.slice(t+1)),St(ar,Bi),f}finally{ft=i,Bl=!1}}return null}var Yr=[],$r=0,$o=null,Zo=0,kn=[],zn=0,fr=null,gi=1,_i="";function dr(t,i){Yr[$r++]=Zo,Yr[$r++]=$o,$o=t,Zo=i}function Bf(t,i,r){kn[zn++]=gi,kn[zn++]=_i,kn[zn++]=fr,fr=t;var a=gi;t=_i;var f=32-ln(a)-1;a&=~(1<<f),r+=1;var h=32-ln(i)+f;if(30<h){var S=f-f%5;h=(a&(1<<S)-1).toString(32),a>>=S,f-=S,gi=1<<32-ln(i)+f|r<<f|a,_i=h+t}else gi=1<<h|r<<f|a,_i=t}function Gl(t){t.return!==null&&(dr(t,1),Bf(t,1,0))}function Vl(t){for(;t===$o;)$o=Yr[--$r],Yr[$r]=null,Zo=Yr[--$r],Yr[$r]=null;for(;t===fr;)fr=kn[--zn],kn[zn]=null,_i=kn[--zn],kn[zn]=null,gi=kn[--zn],kn[zn]=null}var wn=null,En=null,yt=!1,Yn=null;function Gf(t,i){var r=Gn(5,null,null,0);r.elementType="DELETED",r.stateNode=i,r.return=t,i=t.deletions,i===null?(t.deletions=[r],t.flags|=16):i.push(r)}function Vf(t,i){switch(t.tag){case 5:var r=t.type;return i=i.nodeType!==1||r.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,wn=t,En=zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,wn=t,En=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(r=fr!==null?{id:gi,overflow:_i}:null,t.memoizedState={dehydrated:i,treeContext:r,retryLane:1073741824},r=Gn(18,null,null,0),r.stateNode=i,r.return=t,t.child=r,wn=t,En=null,!0):!1;default:return!1}}function Wl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hl(t){if(yt){var i=En;if(i){var r=i;if(!Vf(t,i)){if(Wl(t))throw Error(n(418));i=zi(r.nextSibling);var a=wn;i&&Vf(t,i)?Gf(a,r):(t.flags=t.flags&-4097|2,yt=!1,wn=t)}}else{if(Wl(t))throw Error(n(418));t.flags=t.flags&-4097|2,yt=!1,wn=t}}}function Wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Ko(t){if(t!==wn)return!1;if(!yt)return Wf(t),yt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Fl(t.type,t.memoizedProps)),i&&(i=En)){if(Wl(t))throw Hf(),Error(n(418));for(;i;)Gf(t,i),i=zi(i.nextSibling)}if(Wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(i===0){En=zi(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++}t=t.nextSibling}En=null}}else En=wn?zi(t.stateNode.nextSibling):null;return!0}function Hf(){for(var t=En;t;)t=zi(t.nextSibling)}function Zr(){En=wn=null,yt=!1}function jl(t){Yn===null?Yn=[t]:Yn.push(t)}var _g=D.ReactCurrentBatchConfig;function Zs(t,i,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(n(309));var a=r.stateNode}if(!a)throw Error(n(147,t));var f=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(S){var L=f.refs;S===null?delete L[h]:L[h]=S},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!r._owner)throw Error(n(290,t))}return t}function Qo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function jf(t){var i=t._init;return i(t._payload)}function Xf(t){function i(j,U){if(t){var $=j.deletions;$===null?(j.deletions=[U],j.flags|=16):$.push(U)}}function r(j,U){if(!t)return null;for(;U!==null;)i(j,U),U=U.sibling;return null}function a(j,U){for(j=new Map;U!==null;)U.key!==null?j.set(U.key,U):j.set(U.index,U),U=U.sibling;return j}function f(j,U){return j=Yi(j,U),j.index=0,j.sibling=null,j}function h(j,U,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<U?(j.flags|=2,U):$):(j.flags|=2,U)):(j.flags|=1048576,U)}function S(j){return t&&j.alternate===null&&(j.flags|=2),j}function L(j,U,$,xe){return U===null||U.tag!==6?(U=ku($,j.mode,xe),U.return=j,U):(U=f(U,$),U.return=j,U)}function z(j,U,$,xe){var Ne=$.type;return Ne===X?pe(j,U,$.props.children,xe,$.key):U!==null&&(U.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===fe&&jf(Ne)===U.type)?(xe=f(U,$.props),xe.ref=Zs(j,U,$),xe.return=j,xe):(xe=Ma($.type,$.key,$.props,null,j.mode,xe),xe.ref=Zs(j,U,$),xe.return=j,xe)}function Q(j,U,$,xe){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=zu($,j.mode,xe),U.return=j,U):(U=f(U,$.children||[]),U.return=j,U)}function pe(j,U,$,xe,Ne){return U===null||U.tag!==7?(U=yr($,j.mode,xe,Ne),U.return=j,U):(U=f(U,$),U.return=j,U)}function _e(j,U,$){if(typeof U=="string"&&U!==""||typeof U=="number")return U=ku(""+U,j.mode,$),U.return=j,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return $=Ma(U.type,U.key,U.props,null,j.mode,$),$.ref=Zs(j,null,U),$.return=j,$;case G:return U=zu(U,j.mode,$),U.return=j,U;case fe:var xe=U._init;return _e(j,xe(U._payload),$)}if(an(U)||ee(U))return U=yr(U,j.mode,$,null),U.return=j,U;Qo(j,U)}return null}function he(j,U,$,xe){var Ne=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ne!==null?null:L(j,U,""+$,xe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return $.key===Ne?z(j,U,$,xe):null;case G:return $.key===Ne?Q(j,U,$,xe):null;case fe:return Ne=$._init,he(j,U,Ne($._payload),xe)}if(an($)||ee($))return Ne!==null?null:pe(j,U,$,xe,null);Qo(j,$)}return null}function Ae(j,U,$,xe,Ne){if(typeof xe=="string"&&xe!==""||typeof xe=="number")return j=j.get($)||null,L(U,j,""+xe,Ne);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case R:return j=j.get(xe.key===null?$:xe.key)||null,z(U,j,xe,Ne);case G:return j=j.get(xe.key===null?$:xe.key)||null,Q(U,j,xe,Ne);case fe:var Be=xe._init;return Ae(j,U,$,Be(xe._payload),Ne)}if(an(xe)||ee(xe))return j=j.get($)||null,pe(U,j,xe,Ne,null);Qo(U,xe)}return null}function Re(j,U,$,xe){for(var Ne=null,Be=null,Ge=U,Xe=U=0,jt=null;Ge!==null&&Xe<$.length;Xe++){Ge.index>Xe?(jt=Ge,Ge=null):jt=Ge.sibling;var at=he(j,Ge,$[Xe],xe);if(at===null){Ge===null&&(Ge=jt);break}t&&Ge&&at.alternate===null&&i(j,Ge),U=h(at,U,Xe),Be===null?Ne=at:Be.sibling=at,Be=at,Ge=jt}if(Xe===$.length)return r(j,Ge),yt&&dr(j,Xe),Ne;if(Ge===null){for(;Xe<$.length;Xe++)Ge=_e(j,$[Xe],xe),Ge!==null&&(U=h(Ge,U,Xe),Be===null?Ne=Ge:Be.sibling=Ge,Be=Ge);return yt&&dr(j,Xe),Ne}for(Ge=a(j,Ge);Xe<$.length;Xe++)jt=Ae(Ge,j,Xe,$[Xe],xe),jt!==null&&(t&&jt.alternate!==null&&Ge.delete(jt.key===null?Xe:jt.key),U=h(jt,U,Xe),Be===null?Ne=jt:Be.sibling=jt,Be=jt);return t&&Ge.forEach(function($i){return i(j,$i)}),yt&&dr(j,Xe),Ne}function De(j,U,$,xe){var Ne=ee($);if(typeof Ne!="function")throw Error(n(150));if($=Ne.call($),$==null)throw Error(n(151));for(var Be=Ne=null,Ge=U,Xe=U=0,jt=null,at=$.next();Ge!==null&&!at.done;Xe++,at=$.next()){Ge.index>Xe?(jt=Ge,Ge=null):jt=Ge.sibling;var $i=he(j,Ge,at.value,xe);if($i===null){Ge===null&&(Ge=jt);break}t&&Ge&&$i.alternate===null&&i(j,Ge),U=h($i,U,Xe),Be===null?Ne=$i:Be.sibling=$i,Be=$i,Ge=jt}if(at.done)return r(j,Ge),yt&&dr(j,Xe),Ne;if(Ge===null){for(;!at.done;Xe++,at=$.next())at=_e(j,at.value,xe),at!==null&&(U=h(at,U,Xe),Be===null?Ne=at:Be.sibling=at,Be=at);return yt&&dr(j,Xe),Ne}for(Ge=a(j,Ge);!at.done;Xe++,at=$.next())at=Ae(Ge,j,Xe,at.value,xe),at!==null&&(t&&at.alternate!==null&&Ge.delete(at.key===null?Xe:at.key),U=h(at,U,Xe),Be===null?Ne=at:Be.sibling=at,Be=at);return t&&Ge.forEach(function(Zg){return i(j,Zg)}),yt&&dr(j,Xe),Ne}function Pt(j,U,$,xe){if(typeof $=="object"&&$!==null&&$.type===X&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case R:e:{for(var Ne=$.key,Be=U;Be!==null;){if(Be.key===Ne){if(Ne=$.type,Ne===X){if(Be.tag===7){r(j,Be.sibling),U=f(Be,$.props.children),U.return=j,j=U;break e}}else if(Be.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===fe&&jf(Ne)===Be.type){r(j,Be.sibling),U=f(Be,$.props),U.ref=Zs(j,Be,$),U.return=j,j=U;break e}r(j,Be);break}else i(j,Be);Be=Be.sibling}$.type===X?(U=yr($.props.children,j.mode,xe,$.key),U.return=j,j=U):(xe=Ma($.type,$.key,$.props,null,j.mode,xe),xe.ref=Zs(j,U,$),xe.return=j,j=xe)}return S(j);case G:e:{for(Be=$.key;U!==null;){if(U.key===Be)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){r(j,U.sibling),U=f(U,$.children||[]),U.return=j,j=U;break e}else{r(j,U);break}else i(j,U);U=U.sibling}U=zu($,j.mode,xe),U.return=j,j=U}return S(j);case fe:return Be=$._init,Pt(j,U,Be($._payload),xe)}if(an($))return Re(j,U,$,xe);if(ee($))return De(j,U,$,xe);Qo(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,U!==null&&U.tag===6?(r(j,U.sibling),U=f(U,$),U.return=j,j=U):(r(j,U),U=ku($,j.mode,xe),U.return=j,j=U),S(j)):r(j,U)}return Pt}var Kr=Xf(!0),qf=Xf(!1),Jo=Ui(null),ea=null,Qr=null,Xl=null;function ql(){Xl=Qr=ea=null}function Yl(t){var i=Jo.current;vt(Jo),t._currentValue=i}function $l(t,i,r){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===r)break;t=t.return}}function Jr(t,i){ea=t,Xl=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(vn=!0),t.firstContext=null)}function Un(t){var i=t._currentValue;if(Xl!==t)if(t={context:t,memoizedValue:i,next:null},Qr===null){if(ea===null)throw Error(n(308));Qr=t,ea.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return i}var hr=null;function Zl(t){hr===null?hr=[t]:hr.push(t)}function Yf(t,i,r,a){var f=i.interleaved;return f===null?(r.next=r,Zl(i)):(r.next=f.next,f.next=r),i.interleaved=r,vi(t,a)}function vi(t,i){t.lanes|=i;var r=t.alternate;for(r!==null&&(r.lanes|=i),r=t,t=t.return;t!==null;)t.childLanes|=i,r=t.alternate,r!==null&&(r.childLanes|=i),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Gi=!1;function Kl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Vi(t,i,r){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ot&2)!==0){var f=a.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i,vi(t,r)}return f=a.interleaved,f===null?(i.next=i,Zl(a)):(i.next=f.next,f.next=i),a.interleaved=i,vi(t,r)}function ta(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,r|=a,i.lanes=r,fl(t,r)}}function Zf(t,i){var r=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var f=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};h===null?f=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?f=h=i:h=h.next=i}else f=h=i;r={baseState:a.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}function na(t,i,r,a){var f=t.updateQueue;Gi=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var z=L,Q=z.next;z.next=null,S===null?h=Q:S.next=Q,S=z;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,L=pe.lastBaseUpdate,L!==S&&(L===null?pe.firstBaseUpdate=Q:L.next=Q,pe.lastBaseUpdate=z))}if(h!==null){var _e=f.baseState;S=0,pe=Q=z=null,L=h;do{var he=L.lane,Ae=L.eventTime;if((a&he)===he){pe!==null&&(pe=pe.next={eventTime:Ae,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Re=t,De=L;switch(he=i,Ae=r,De.tag){case 1:if(Re=De.payload,typeof Re=="function"){_e=Re.call(Ae,_e,he);break e}_e=Re;break e;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=De.payload,he=typeof Re=="function"?Re.call(Ae,_e,he):Re,he==null)break e;_e=Z({},_e,he);break e;case 2:Gi=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,he=f.effects,he===null?f.effects=[L]:he.push(L))}else Ae={eventTime:Ae,lane:he,tag:L.tag,payload:L.payload,callback:L.callback,next:null},pe===null?(Q=pe=Ae,z=_e):pe=pe.next=Ae,S|=he;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;he=L,L=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);if(pe===null&&(z=_e),f.baseState=z,f.firstBaseUpdate=Q,f.lastBaseUpdate=pe,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);gr|=S,t.lanes=S,t.memoizedState=_e}}function Kf(t,i,r){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],f=a.callback;if(f!==null){if(a.callback=null,a=r,typeof f!="function")throw Error(n(191,f));f.call(a)}}}var Ks={},oi=Ui(Ks),Qs=Ui(Ks),Js=Ui(Ks);function pr(t){if(t===Ks)throw Error(n(174));return t}function Ql(t,i){switch(mt(Js,i),mt(Qs,t),mt(oi,Ks),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ce(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ce(i,t)}vt(oi),mt(oi,i)}function es(){vt(oi),vt(Qs),vt(Js)}function Qf(t){pr(Js.current);var i=pr(oi.current),r=Ce(i,t.type);i!==r&&(mt(Qs,t),mt(oi,r))}function Jl(t){Qs.current===t&&(vt(oi),vt(Qs))}var Mt=Ui(0);function ia(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var eu=[];function tu(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var ra=D.ReactCurrentDispatcher,nu=D.ReactCurrentBatchConfig,mr=0,wt=null,kt=null,Wt=null,sa=!1,eo=!1,to=0,vg=0;function en(){throw Error(n(321))}function iu(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!qn(t[r],i[r]))return!1;return!0}function ru(t,i,r,a,f,h){if(mr=h,wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ra.current=t===null||t.memoizedState===null?Mg:wg,t=r(a,f),eo){h=0;do{if(eo=!1,to=0,25<=h)throw Error(n(301));h+=1,Wt=kt=null,i.updateQueue=null,ra.current=Eg,t=r(a,f)}while(eo)}if(ra.current=la,i=kt!==null&&kt.next!==null,mr=0,Wt=kt=wt=null,sa=!1,i)throw Error(n(300));return t}function su(){var t=to!==0;return to=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function On(){if(kt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var i=Wt===null?wt.memoizedState:Wt.next;if(i!==null)Wt=i,kt=t;else{if(t===null)throw Error(n(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function no(t,i){return typeof i=="function"?i(t):i}function ou(t){var i=On(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var a=kt,f=a.baseQueue,h=r.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}a.baseQueue=f=h,r.pending=null}if(f!==null){h=f.next,a=a.baseState;var L=S=null,z=null,Q=h;do{var pe=Q.lane;if((mr&pe)===pe)z!==null&&(z=z.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),a=Q.hasEagerState?Q.eagerState:t(a,Q.action);else{var _e={lane:pe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};z===null?(L=z=_e,S=a):z=z.next=_e,wt.lanes|=pe,gr|=pe}Q=Q.next}while(Q!==null&&Q!==h);z===null?S=a:z.next=L,qn(a,i.memoizedState)||(vn=!0),i.memoizedState=a,i.baseState=S,i.baseQueue=z,r.lastRenderedState=a}if(t=r.interleaved,t!==null){f=t;do h=f.lane,wt.lanes|=h,gr|=h,f=f.next;while(f!==t)}else f===null&&(r.lanes=0);return[i.memoizedState,r.dispatch]}function au(t){var i=On(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var a=r.dispatch,f=r.pending,h=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);qn(h,i.memoizedState)||(vn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,a]}function Jf(){}function ed(t,i){var r=wt,a=On(),f=i(),h=!qn(a.memoizedState,f);if(h&&(a.memoizedState=f,vn=!0),a=a.queue,lu(id.bind(null,r,a,t),[t]),a.getSnapshot!==i||h||Wt!==null&&Wt.memoizedState.tag&1){if(r.flags|=2048,io(9,nd.bind(null,r,a,f,i),void 0,null),Ht===null)throw Error(n(349));(mr&30)!==0||td(r,i,f)}return f}function td(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=wt.updateQueue,i===null?(i={lastEffect:null,stores:null},wt.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function nd(t,i,r,a){i.value=r,i.getSnapshot=a,rd(i)&&sd(t)}function id(t,i,r){return r(function(){rd(i)&&sd(t)})}function rd(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!qn(t,r)}catch{return!0}}function sd(t){var i=vi(t,1);i!==null&&Qn(i,t,1,-1)}function od(t){var i=ai();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},i.queue=t,t=t.dispatch=Sg.bind(null,wt,t),[i.memoizedState,t]}function io(t,i,r,a){return t={tag:t,create:i,destroy:r,deps:a,next:null},i=wt.updateQueue,i===null?(i={lastEffect:null,stores:null},wt.updateQueue=i,i.lastEffect=t.next=t):(r=i.lastEffect,r===null?i.lastEffect=t.next=t:(a=r.next,r.next=t,t.next=a,i.lastEffect=t)),t}function ad(){return On().memoizedState}function oa(t,i,r,a){var f=ai();wt.flags|=t,f.memoizedState=io(1|i,r,void 0,a===void 0?null:a)}function aa(t,i,r,a){var f=On();a=a===void 0?null:a;var h=void 0;if(kt!==null){var S=kt.memoizedState;if(h=S.destroy,a!==null&&iu(a,S.deps)){f.memoizedState=io(i,r,h,a);return}}wt.flags|=t,f.memoizedState=io(1|i,r,h,a)}function ld(t,i){return oa(8390656,8,t,i)}function lu(t,i){return aa(2048,8,t,i)}function ud(t,i){return aa(4,2,t,i)}function cd(t,i){return aa(4,4,t,i)}function fd(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dd(t,i,r){return r=r!=null?r.concat([t]):null,aa(4,4,fd.bind(null,i,t),r)}function uu(){}function hd(t,i){var r=On();i=i===void 0?null:i;var a=r.memoizedState;return a!==null&&i!==null&&iu(i,a[1])?a[0]:(r.memoizedState=[t,i],t)}function pd(t,i){var r=On();i=i===void 0?null:i;var a=r.memoizedState;return a!==null&&i!==null&&iu(i,a[1])?a[0]:(t=t(),r.memoizedState=[t,i],t)}function md(t,i,r){return(mr&21)===0?(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=r):(qn(r,i)||(r=Hc(),wt.lanes|=r,gr|=r,t.baseState=!0),i)}function xg(t,i){var r=ft;ft=r!==0&&4>r?r:4,t(!0);var a=nu.transition;nu.transition={};try{t(!1),i()}finally{ft=r,nu.transition=a}}function gd(){return On().memoizedState}function yg(t,i,r){var a=Xi(t);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},_d(t))vd(i,r);else if(r=Yf(t,i,r,a),r!==null){var f=fn();Qn(r,t,a,f),xd(r,i,a)}}function Sg(t,i,r){var a=Xi(t),f={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(_d(t))vd(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,L=h(S,r);if(f.hasEagerState=!0,f.eagerState=L,qn(L,S)){var z=i.interleaved;z===null?(f.next=f,Zl(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}r=Yf(t,i,f,a),r!==null&&(f=fn(),Qn(r,t,a,f),xd(r,i,a))}}function _d(t){var i=t.alternate;return t===wt||i!==null&&i===wt}function vd(t,i){eo=sa=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function xd(t,i,r){if((r&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,r|=a,i.lanes=r,fl(t,r)}}var la={readContext:Un,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},Mg={readContext:Un,useCallback:function(t,i){return ai().memoizedState=[t,i===void 0?null:i],t},useContext:Un,useEffect:ld,useImperativeHandle:function(t,i,r){return r=r!=null?r.concat([t]):null,oa(4194308,4,fd.bind(null,i,t),r)},useLayoutEffect:function(t,i){return oa(4194308,4,t,i)},useInsertionEffect:function(t,i){return oa(4,2,t,i)},useMemo:function(t,i){var r=ai();return i=i===void 0?null:i,t=t(),r.memoizedState=[t,i],t},useReducer:function(t,i,r){var a=ai();return i=r!==void 0?r(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=yg.bind(null,wt,t),[a.memoizedState,t]},useRef:function(t){var i=ai();return t={current:t},i.memoizedState=t},useState:od,useDebugValue:uu,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=od(!1),i=t[0];return t=xg.bind(null,t[1]),ai().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,r){var a=wt,f=ai();if(yt){if(r===void 0)throw Error(n(407));r=r()}else{if(r=i(),Ht===null)throw Error(n(349));(mr&30)!==0||td(a,i,r)}f.memoizedState=r;var h={value:r,getSnapshot:i};return f.queue=h,ld(id.bind(null,a,h,t),[t]),a.flags|=2048,io(9,nd.bind(null,a,h,r,i),void 0,null),r},useId:function(){var t=ai(),i=Ht.identifierPrefix;if(yt){var r=_i,a=gi;r=(a&~(1<<32-ln(a)-1)).toString(32)+r,i=":"+i+"R"+r,r=to++,0<r&&(i+="H"+r.toString(32)),i+=":"}else r=vg++,i=":"+i+"r"+r.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},wg={readContext:Un,useCallback:hd,useContext:Un,useEffect:lu,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:pd,useReducer:ou,useRef:ad,useState:function(){return ou(no)},useDebugValue:uu,useDeferredValue:function(t){var i=On();return md(i,kt.memoizedState,t)},useTransition:function(){var t=ou(no)[0],i=On().memoizedState;return[t,i]},useMutableSource:Jf,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1},Eg={readContext:Un,useCallback:hd,useContext:Un,useEffect:lu,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:pd,useReducer:au,useRef:ad,useState:function(){return au(no)},useDebugValue:uu,useDeferredValue:function(t){var i=On();return kt===null?i.memoizedState=t:md(i,kt.memoizedState,t)},useTransition:function(){var t=au(no)[0],i=On().memoizedState;return[t,i]},useMutableSource:Jf,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1};function $n(t,i){if(t&&t.defaultProps){i=Z({},i),t=t.defaultProps;for(var r in t)i[r]===void 0&&(i[r]=t[r]);return i}return i}function cu(t,i,r,a){i=t.memoizedState,r=r(a,i),r=r==null?i:Z({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ua={isMounted:function(t){return(t=t._reactInternals)?We(t)===t:!1},enqueueSetState:function(t,i,r){t=t._reactInternals;var a=fn(),f=Xi(t),h=xi(a,f);h.payload=i,r!=null&&(h.callback=r),i=Vi(t,h,f),i!==null&&(Qn(i,t,f,a),ta(i,t,f))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var a=fn(),f=Xi(t),h=xi(a,f);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Vi(t,h,f),i!==null&&(Qn(i,t,f,a),ta(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=fn(),a=Xi(t),f=xi(r,a);f.tag=2,i!=null&&(f.callback=i),i=Vi(t,f,a),i!==null&&(Qn(i,t,a,r),ta(i,t,a))}};function yd(t,i,r,a,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,S):i.prototype&&i.prototype.isPureReactComponent?!Ws(r,a)||!Ws(f,h):!0}function Sd(t,i,r){var a=!1,f=Oi,h=i.contextType;return typeof h=="object"&&h!==null?h=Un(h):(f=_n(i)?cr:Jt.current,a=i.contextTypes,h=(a=a!=null)?qr(t,f):Oi),i=new i(r,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ua,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Md(t,i,r,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,a),i.state!==t&&ua.enqueueReplaceState(i,i.state,null)}function fu(t,i,r,a){var f=t.stateNode;f.props=r,f.state=t.memoizedState,f.refs={},Kl(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Un(h):(h=_n(i)?cr:Jt.current,f.context=qr(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(cu(t,i,h,r),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ua.enqueueReplaceState(f,f.state,null),na(t,r,f,a),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,i){try{var r="",a=i;do r+=de(a),a=a.return;while(a);var f=r}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function du(t,i,r){return{value:t,source:null,stack:r??null,digest:i??null}}function hu(t,i){try{console.error(i.value)}catch(r){setTimeout(function(){throw r})}}var Tg=typeof WeakMap=="function"?WeakMap:Map;function wd(t,i,r){r=xi(-1,r),r.tag=3,r.payload={element:null};var a=i.value;return r.callback=function(){ga||(ga=!0,Au=a),hu(t,i)},r}function Ed(t,i,r){r=xi(-1,r),r.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var f=i.value;r.payload=function(){return a(f)},r.callback=function(){hu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(r.callback=function(){hu(t,i),typeof a!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),r}function Td(t,i,r){var a=t.pingCache;if(a===null){a=t.pingCache=new Tg;var f=new Set;a.set(i,f)}else f=a.get(i),f===void 0&&(f=new Set,a.set(i,f));f.has(r)||(f.add(r),t=Og.bind(null,t,i,r),i.then(t,t))}function Cd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function bd(t,i,r,a,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(i=xi(-1,1),i.tag=2,Vi(r,i,1))),r.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Cg=D.ReactCurrentOwner,vn=!1;function cn(t,i,r,a){i.child=t===null?qf(i,null,r,a):Kr(i,t.child,r,a)}function Ad(t,i,r,a,f){r=r.render;var h=i.ref;return Jr(i,f),a=ru(t,i,r,a,h,f),r=su(),t!==null&&!vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,yi(t,i,f)):(yt&&r&&Gl(i),i.flags|=1,cn(t,i,a,f),i.child)}function Ld(t,i,r,a,f){if(t===null){var h=r.type;return typeof h=="function"&&!Fu(h)&&h.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(i.tag=15,i.type=h,Pd(t,i,h,a,f)):(t=Ma(r.type,null,a,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:Ws,r(S,a)&&t.ref===i.ref)return yi(t,i,f)}return i.flags|=1,t=Yi(h,a),t.ref=i.ref,t.return=i,i.child=t}function Pd(t,i,r,a,f){if(t!==null){var h=t.memoizedProps;if(Ws(h,a)&&t.ref===i.ref)if(vn=!1,i.pendingProps=a=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(vn=!0);else return i.lanes=t.lanes,yi(t,i,f)}return pu(t,i,r,a,f)}function Rd(t,i,r){var a=i.pendingProps,f=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(is,Tn),Tn|=r;else{if((r&1073741824)===0)return t=h!==null?h.baseLanes|r:r,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,mt(is,Tn),Tn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:r,mt(is,Tn),Tn|=a}else h!==null?(a=h.baseLanes|r,i.memoizedState=null):a=r,mt(is,Tn),Tn|=a;return cn(t,i,f,r),i.child}function Dd(t,i){var r=i.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(i.flags|=512,i.flags|=2097152)}function pu(t,i,r,a,f){var h=_n(r)?cr:Jt.current;return h=qr(i,h),Jr(i,f),r=ru(t,i,r,a,h,f),a=su(),t!==null&&!vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,yi(t,i,f)):(yt&&a&&Gl(i),i.flags|=1,cn(t,i,r,f),i.child)}function Id(t,i,r,a,f){if(_n(r)){var h=!0;qo(i)}else h=!1;if(Jr(i,f),i.stateNode===null)fa(t,i),Sd(i,r,a),fu(i,r,a,f),a=!0;else if(t===null){var S=i.stateNode,L=i.memoizedProps;S.props=L;var z=S.context,Q=r.contextType;typeof Q=="object"&&Q!==null?Q=Un(Q):(Q=_n(r)?cr:Jt.current,Q=qr(i,Q));var pe=r.getDerivedStateFromProps,_e=typeof pe=="function"||typeof S.getSnapshotBeforeUpdate=="function";_e||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==a||z!==Q)&&Md(i,S,a,Q),Gi=!1;var he=i.memoizedState;S.state=he,na(i,a,S,f),z=i.memoizedState,L!==a||he!==z||gn.current||Gi?(typeof pe=="function"&&(cu(i,r,pe,a),z=i.memoizedState),(L=Gi||yd(i,r,L,a,he,z,Q))?(_e||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=z),S.props=a,S.state=z,S.context=Q,a=L):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{S=i.stateNode,$f(t,i),L=i.memoizedProps,Q=i.type===i.elementType?L:$n(i.type,L),S.props=Q,_e=i.pendingProps,he=S.context,z=r.contextType,typeof z=="object"&&z!==null?z=Un(z):(z=_n(r)?cr:Jt.current,z=qr(i,z));var Ae=r.getDerivedStateFromProps;(pe=typeof Ae=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==_e||he!==z)&&Md(i,S,a,z),Gi=!1,he=i.memoizedState,S.state=he,na(i,a,S,f);var Re=i.memoizedState;L!==_e||he!==Re||gn.current||Gi?(typeof Ae=="function"&&(cu(i,r,Ae,a),Re=i.memoizedState),(Q=Gi||yd(i,r,Q,a,he,Re,z)||!1)?(pe||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(a,Re,z),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(a,Re,z)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=Re),S.props=a,S.state=Re,S.context=z,a=Q):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),a=!1)}return mu(t,i,r,a,h,f)}function mu(t,i,r,a,f,h){Dd(t,i);var S=(i.flags&128)!==0;if(!a&&!S)return f&&Uf(i,r,!1),yi(t,i,h);a=i.stateNode,Cg.current=i;var L=S&&typeof r.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&S?(i.child=Kr(i,t.child,null,h),i.child=Kr(i,null,L,h)):cn(t,i,L,h),i.memoizedState=a.state,f&&Uf(i,r,!0),i.child}function Nd(t){var i=t.stateNode;i.pendingContext?kf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kf(t,i.context,!1),Ql(t,i.containerInfo)}function Fd(t,i,r,a,f){return Zr(),jl(f),i.flags|=256,cn(t,i,r,a),i.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function kd(t,i,r){var a=i.pendingProps,f=Mt.current,h=!1,S=(i.flags&128)!==0,L;if((L=S)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),mt(Mt,f&1),t===null)return Hl(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=a.children,t=a.fallback,h?(a=i.mode,h=i.child,S={mode:"hidden",children:S},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=S):h=wa(S,a,0,null),t=yr(t,a,r,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=_u(r),i.memoizedState=gu,t):vu(i,S));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return bg(t,i,S,a,L,f,r);if(h){h=a.fallback,S=i.mode,f=t.child,L=f.sibling;var z={mode:"hidden",children:a.children};return(S&1)===0&&i.child!==f?(a=i.child,a.childLanes=0,a.pendingProps=z,i.deletions=null):(a=Yi(f,z),a.subtreeFlags=f.subtreeFlags&14680064),L!==null?h=Yi(L,h):(h=yr(h,S,r,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,S=t.child.memoizedState,S=S===null?_u(r):{baseLanes:S.baseLanes|r,cachePool:null,transitions:S.transitions},h.memoizedState=S,h.childLanes=t.childLanes&~r,i.memoizedState=gu,a}return h=t.child,t=h.sibling,a=Yi(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=r),a.return=i,a.sibling=null,t!==null&&(r=i.deletions,r===null?(i.deletions=[t],i.flags|=16):r.push(t)),i.child=a,i.memoizedState=null,a}function vu(t,i){return i=wa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ca(t,i,r,a){return a!==null&&jl(a),Kr(i,t.child,null,r),t=vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function bg(t,i,r,a,f,h,S){if(r)return i.flags&256?(i.flags&=-257,a=du(Error(n(422))),ca(t,i,S,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,f=i.mode,a=wa({mode:"visible",children:a.children},f,0,null),h=yr(h,f,S,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&Kr(i,t.child,null,S),i.child.memoizedState=_u(S),i.memoizedState=gu,h);if((i.mode&1)===0)return ca(t,i,S,null);if(f.data==="$!"){if(a=f.nextSibling&&f.nextSibling.dataset,a)var L=a.dgst;return a=L,h=Error(n(419)),a=du(h,a,void 0),ca(t,i,S,a)}if(L=(S&t.childLanes)!==0,vn||L){if(a=Ht,a!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(a.suspendedLanes|S))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,vi(t,f),Qn(a,t,f,-1))}return Nu(),a=du(Error(n(421))),ca(t,i,S,a)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Bg.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,En=zi(f.nextSibling),wn=i,yt=!0,Yn=null,t!==null&&(kn[zn++]=gi,kn[zn++]=_i,kn[zn++]=fr,gi=t.id,_i=t.overflow,fr=i),i=vu(i,a.children),i.flags|=4096,i)}function zd(t,i,r){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),$l(t.return,i,r)}function xu(t,i,r,a,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=r,h.tailMode=f)}function Ud(t,i,r){var a=i.pendingProps,f=a.revealOrder,h=a.tail;if(cn(t,i,a.children,r),a=Mt.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zd(t,r,i);else if(t.tag===19)zd(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(mt(Mt,a),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&ia(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),xu(i,!1,f,r,h);break;case"backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&ia(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}xu(i,!0,r,null,h);break;case"together":xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function yi(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),gr|=i.lanes,(r&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,r=Yi(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Yi(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Ag(t,i,r){switch(i.tag){case 3:Nd(i),Zr();break;case 5:Qf(i);break;case 1:_n(i.type)&&qo(i);break;case 4:Ql(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,f=i.memoizedProps.value;mt(Jo,a._currentValue),a._currentValue=f;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(mt(Mt,Mt.current&1),i.flags|=128,null):(r&i.child.childLanes)!==0?kd(t,i,r):(mt(Mt,Mt.current&1),t=yi(t,i,r),t!==null?t.sibling:null);mt(Mt,Mt.current&1);break;case 19:if(a=(r&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Ud(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),mt(Mt,Mt.current),a)break;return null;case 22:case 23:return i.lanes=0,Rd(t,i,r)}return yi(t,i,r)}var Od,yu,Bd,Gd;Od=function(t,i){for(var r=i.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},yu=function(){},Bd=function(t,i,r,a){var f=t.memoizedProps;if(f!==a){t=i.stateNode,pr(oi.current);var h=null;switch(r){case"input":f=It(t,f),a=It(t,a),h=[];break;case"select":f=Z({},f,{value:void 0}),a=Z({},a,{value:void 0}),h=[];break;case"textarea":f=P(t,f),a=P(t,a),h=[];break;default:typeof f.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Ho)}tt(r,a);var S;r=null;for(Q in f)if(!a.hasOwnProperty(Q)&&f.hasOwnProperty(Q)&&f[Q]!=null)if(Q==="style"){var L=f[Q];for(S in L)L.hasOwnProperty(S)&&(r||(r={}),r[S]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in a){var z=a[Q];if(L=f!=null?f[Q]:void 0,a.hasOwnProperty(Q)&&z!==L&&(z!=null||L!=null))if(Q==="style")if(L){for(S in L)!L.hasOwnProperty(S)||z&&z.hasOwnProperty(S)||(r||(r={}),r[S]="");for(S in z)z.hasOwnProperty(S)&&L[S]!==z[S]&&(r||(r={}),r[S]=z[S])}else r||(h||(h=[]),h.push(Q,r)),r=z;else Q==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,L=L?L.__html:void 0,z!=null&&L!==z&&(h=h||[]).push(Q,z)):Q==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(Q,""+z):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(z!=null&&Q==="onScroll"&&_t("scroll",t),h||L===z||(h=[])):(h=h||[]).push(Q,z))}r&&(h=h||[]).push("style",r);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},Gd=function(t,i,r,a){r!==a&&(i.flags|=4)};function ro(t,i){if(!yt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function tn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,a=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,a|=f.subtreeFlags&14680064,a|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,a|=f.subtreeFlags,a|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=a,t.childLanes=r,i}function Lg(t,i,r){var a=i.pendingProps;switch(Vl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return _n(i.type)&&Xo(),tn(i),null;case 3:return a=i.stateNode,es(),vt(gn),vt(Jt),tu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ko(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Yn!==null&&(Ru(Yn),Yn=null))),yu(t,i),tn(i),null;case 5:Jl(i);var f=pr(Js.current);if(r=i.type,t!==null&&i.stateNode!=null)Bd(t,i,r,a,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return tn(i),null}if(t=pr(oi.current),Ko(i)){a=i.stateNode,r=i.type;var h=i.memoizedProps;switch(a[si]=i,a[Ys]=h,t=(i.mode&1)!==0,r){case"dialog":_t("cancel",a),_t("close",a);break;case"iframe":case"object":case"embed":_t("load",a);break;case"video":case"audio":for(f=0;f<js.length;f++)_t(js[f],a);break;case"source":_t("error",a);break;case"img":case"image":case"link":_t("error",a),_t("load",a);break;case"details":_t("toggle",a);break;case"input":on(a,h),_t("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},_t("invalid",a);break;case"textarea":w(a,h),_t("invalid",a)}tt(r,h),f=null;for(var S in h)if(h.hasOwnProperty(S)){var L=h[S];S==="children"?typeof L=="string"?a.textContent!==L&&(h.suppressHydrationWarning!==!0&&Wo(a.textContent,L,t),f=["children",L]):typeof L=="number"&&a.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&Wo(a.textContent,L,t),f=["children",""+L]):o.hasOwnProperty(S)&&L!=null&&S==="onScroll"&&_t("scroll",a)}switch(r){case"input":lt(a),Tt(a,h,!0);break;case"textarea":lt(a),ve(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Ho)}a=f,i.updateQueue=a,a!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Se(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=S.createElement(r,{is:a.is}):(t=S.createElement(r),r==="select"&&(S=t,a.multiple?S.multiple=!0:a.size&&(S.size=a.size))):t=S.createElementNS(t,r),t[si]=i,t[Ys]=a,Od(t,i,!1,!1),i.stateNode=t;e:{switch(S=dt(r,a),r){case"dialog":_t("cancel",t),_t("close",t),f=a;break;case"iframe":case"object":case"embed":_t("load",t),f=a;break;case"video":case"audio":for(f=0;f<js.length;f++)_t(js[f],t);f=a;break;case"source":_t("error",t),f=a;break;case"img":case"image":case"link":_t("error",t),_t("load",t),f=a;break;case"details":_t("toggle",t),f=a;break;case"input":on(t,a),f=It(t,a),_t("invalid",t);break;case"option":f=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},f=Z({},a,{value:void 0}),_t("invalid",t);break;case"textarea":w(t,a),f=P(t,a),_t("invalid",t);break;default:f=a}tt(r,f),L=f;for(h in L)if(L.hasOwnProperty(h)){var z=L[h];h==="style"?Oe(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&be(t,z)):h==="children"?typeof z=="string"?(r!=="textarea"||z!=="")&&ae(t,z):typeof z=="number"&&ae(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?z!=null&&h==="onScroll"&&_t("scroll",t):z!=null&&b(t,h,z,S))}switch(r){case"input":lt(t),Tt(t,a,!1);break;case"textarea":lt(t),ve(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ye(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Gt(t,!!a.multiple,h,!1):a.defaultValue!=null&&Gt(t,!!a.multiple,a.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ho)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return tn(i),null;case 6:if(t&&i.stateNode!=null)Gd(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(r=pr(Js.current),pr(oi.current),Ko(i)){if(a=i.stateNode,r=i.memoizedProps,a[si]=i,(h=a.nodeValue!==r)&&(t=wn,t!==null))switch(t.tag){case 3:Wo(a.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(a.nodeValue,r,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[si]=i,i.stateNode=a}return tn(i),null;case 13:if(vt(Mt),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&En!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hf(),Zr(),i.flags|=98560,h=!1;else if(h=Ko(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[si]=i}else Zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),h=!1}else Yn!==null&&(Ru(Yn),Yn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=r,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Mt.current&1)!==0?zt===0&&(zt=3):Nu())),i.updateQueue!==null&&(i.flags|=4),tn(i),null);case 4:return es(),yu(t,i),t===null&&Xs(i.stateNode.containerInfo),tn(i),null;case 10:return Yl(i.type._context),tn(i),null;case 17:return _n(i.type)&&Xo(),tn(i),null;case 19:if(vt(Mt),h=i.memoizedState,h===null)return tn(i),null;if(a=(i.flags&128)!==0,S=h.rendering,S===null)if(a)ro(h,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=ia(t),S!==null){for(i.flags|=128,ro(h,!1),a=S.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=r,r=i.child;r!==null;)h=r,t=a,h.flags&=14680066,S=h.alternate,S===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=S.childLanes,h.lanes=S.lanes,h.child=S.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=S.memoizedProps,h.memoizedState=S.memoizedState,h.updateQueue=S.updateQueue,h.type=S.type,t=S.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return mt(Mt,Mt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ye()>rs&&(i.flags|=128,a=!0,ro(h,!1),i.lanes=4194304)}else{if(!a)if(t=ia(S),t!==null){if(i.flags|=128,a=!0,r=t.updateQueue,r!==null&&(i.updateQueue=r,i.flags|=4),ro(h,!0),h.tail===null&&h.tailMode==="hidden"&&!S.alternate&&!yt)return tn(i),null}else 2*Ye()-h.renderingStartTime>rs&&r!==1073741824&&(i.flags|=128,a=!0,ro(h,!1),i.lanes=4194304);h.isBackwards?(S.sibling=i.child,i.child=S):(r=h.last,r!==null?r.sibling=S:i.child=S,h.last=S)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ye(),i.sibling=null,r=Mt.current,mt(Mt,a?r&1|2:r&1),i):(tn(i),null);case 22:case 23:return Iu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(Tn&1073741824)!==0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Pg(t,i){switch(Vl(i),i.tag){case 1:return _n(i.type)&&Xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return es(),vt(gn),vt(Jt),tu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Jl(i),null;case 13:if(vt(Mt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return vt(Mt),null;case 4:return es(),null;case 10:return Yl(i.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var da=!1,nn=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function ns(t,i){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){bt(t,i,a)}else r.current=null}function Su(t,i,r){try{r()}catch(a){bt(t,i,a)}}var Vd=!1;function Dg(t,i){if(Il=Do,t=yf(),Tl(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var f=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var S=0,L=-1,z=-1,Q=0,pe=0,_e=t,he=null;t:for(;;){for(var Ae;_e!==r||f!==0&&_e.nodeType!==3||(L=S+f),_e!==h||a!==0&&_e.nodeType!==3||(z=S+a),_e.nodeType===3&&(S+=_e.nodeValue.length),(Ae=_e.firstChild)!==null;)he=_e,_e=Ae;for(;;){if(_e===t)break t;if(he===r&&++Q===f&&(L=S),he===h&&++pe===a&&(z=S),(Ae=_e.nextSibling)!==null)break;_e=he,he=_e.parentNode}_e=Ae}r=L===-1||z===-1?null:{start:L,end:z}}else r=null}r=r||{start:0,end:0}}else r=null;for(Nl={focusedElem:t,selectionRange:r},Do=!1,Pe=i;Pe!==null;)if(i=Pe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Pe=t;else for(;Pe!==null;){i=Pe;try{var Re=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Re!==null){var De=Re.memoizedProps,Pt=Re.memoizedState,j=i.stateNode,U=j.getSnapshotBeforeUpdate(i.elementType===i.type?De:$n(i.type,De),Pt);j.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(xe){bt(i,i.return,xe)}if(t=i.sibling,t!==null){t.return=i.return,Pe=t;break}Pe=i.return}return Re=Vd,Vd=!1,Re}function so(t,i,r){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var f=a=a.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Su(i,r,h)}f=f.next}while(f!==a)}}function ha(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.create;r.destroy=a()}r=r.next}while(r!==i)}}function Mu(t){var i=t.ref;if(i!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof i=="function"?i(t):i.current=t}}function Wd(t){var i=t.alternate;i!==null&&(t.alternate=null,Wd(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[si],delete i[Ys],delete i[Ul],delete i[pg],delete i[mg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hd(t){return t.tag===5||t.tag===3||t.tag===4}function jd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wu(t,i,r){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?r.nodeType===8?r.parentNode.insertBefore(t,i):r.insertBefore(t,i):(r.nodeType===8?(i=r.parentNode,i.insertBefore(t,r)):(i=r,i.appendChild(t)),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ho));else if(a!==4&&(t=t.child,t!==null))for(wu(t,i,r),t=t.sibling;t!==null;)wu(t,i,r),t=t.sibling}function Eu(t,i,r){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Eu(t,i,r),t=t.sibling;t!==null;)Eu(t,i,r),t=t.sibling}var qt=null,Zn=!1;function Wi(t,i,r){for(r=r.child;r!==null;)Xd(t,i,r),r=r.sibling}function Xd(t,i,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Pi,r)}catch{}switch(r.tag){case 5:nn||ns(r,i);case 6:var a=qt,f=Zn;qt=null,Wi(t,i,r),qt=a,Zn=f,qt!==null&&(Zn?(t=qt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):qt.removeChild(r.stateNode));break;case 18:qt!==null&&(Zn?(t=qt,r=r.stateNode,t.nodeType===8?zl(t.parentNode,r):t.nodeType===1&&zl(t,r),zs(t)):zl(qt,r.stateNode));break;case 4:a=qt,f=Zn,qt=r.stateNode.containerInfo,Zn=!0,Wi(t,i,r),qt=a,Zn=f;break;case 0:case 11:case 14:case 15:if(!nn&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){f=a=a.next;do{var h=f,S=h.destroy;h=h.tag,S!==void 0&&((h&2)!==0||(h&4)!==0)&&Su(r,i,S),f=f.next}while(f!==a)}Wi(t,i,r);break;case 1:if(!nn&&(ns(r,i),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(L){bt(r,i,L)}Wi(t,i,r);break;case 21:Wi(t,i,r);break;case 22:r.mode&1?(nn=(a=nn)||r.memoizedState!==null,Wi(t,i,r),nn=a):Wi(t,i,r);break;default:Wi(t,i,r)}}function qd(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Rg),i.forEach(function(a){var f=Gg.bind(null,t,a);r.has(a)||(r.add(a),a.then(f,f))})}}function Kn(t,i){var r=i.deletions;if(r!==null)for(var a=0;a<r.length;a++){var f=r[a];try{var h=t,S=i,L=S;e:for(;L!==null;){switch(L.tag){case 5:qt=L.stateNode,Zn=!1;break e;case 3:qt=L.stateNode.containerInfo,Zn=!0;break e;case 4:qt=L.stateNode.containerInfo,Zn=!0;break e}L=L.return}if(qt===null)throw Error(n(160));Xd(h,S,f),qt=null,Zn=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(Q){bt(f,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Yd(i,t),i=i.sibling}function Yd(t,i){var r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(i,t),li(t),a&4){try{so(3,t,t.return),ha(3,t)}catch(De){bt(t,t.return,De)}try{so(5,t,t.return)}catch(De){bt(t,t.return,De)}}break;case 1:Kn(i,t),li(t),a&512&&r!==null&&ns(r,r.return);break;case 5:if(Kn(i,t),li(t),a&512&&r!==null&&ns(r,r.return),t.flags&32){var f=t.stateNode;try{ae(f,"")}catch(De){bt(t,t.return,De)}}if(a&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,S=r!==null?r.memoizedProps:h,L=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&Nt(f,h),dt(L,S);var Q=dt(L,h);for(S=0;S<z.length;S+=2){var pe=z[S],_e=z[S+1];pe==="style"?Oe(f,_e):pe==="dangerouslySetInnerHTML"?be(f,_e):pe==="children"?ae(f,_e):b(f,pe,_e,Q)}switch(L){case"input":Kt(f,h);break;case"textarea":se(f,h);break;case"select":var he=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ae=h.value;Ae!=null?Gt(f,!!h.multiple,Ae,!1):he!==!!h.multiple&&(h.defaultValue!=null?Gt(f,!!h.multiple,h.defaultValue,!0):Gt(f,!!h.multiple,h.multiple?[]:"",!1))}f[Ys]=h}catch(De){bt(t,t.return,De)}}break;case 6:if(Kn(i,t),li(t),a&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(De){bt(t,t.return,De)}}break;case 3:if(Kn(i,t),li(t),a&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(i.containerInfo)}catch(De){bt(t,t.return,De)}break;case 4:Kn(i,t),li(t);break;case 13:Kn(i,t),li(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(bu=Ye())),a&4&&qd(t);break;case 22:if(pe=r!==null&&r.memoizedState!==null,t.mode&1?(nn=(Q=nn)||pe,Kn(i,t),nn=Q):Kn(i,t),li(t),a&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!pe&&(t.mode&1)!==0)for(Pe=t,pe=t.child;pe!==null;){for(_e=Pe=pe;Pe!==null;){switch(he=Pe,Ae=he.child,he.tag){case 0:case 11:case 14:case 15:so(4,he,he.return);break;case 1:ns(he,he.return);var Re=he.stateNode;if(typeof Re.componentWillUnmount=="function"){a=he,r=he.return;try{i=a,Re.props=i.memoizedProps,Re.state=i.memoizedState,Re.componentWillUnmount()}catch(De){bt(a,r,De)}}break;case 5:ns(he,he.return);break;case 22:if(he.memoizedState!==null){Kd(_e);continue}}Ae!==null?(Ae.return=he,Pe=Ae):Kd(_e)}pe=pe.sibling}e:for(pe=null,_e=t;;){if(_e.tag===5){if(pe===null){pe=_e;try{f=_e.stateNode,Q?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=_e.stateNode,z=_e.memoizedProps.style,S=z!=null&&z.hasOwnProperty("display")?z.display:null,L.style.display=Ie("display",S))}catch(De){bt(t,t.return,De)}}}else if(_e.tag===6){if(pe===null)try{_e.stateNode.nodeValue=Q?"":_e.memoizedProps}catch(De){bt(t,t.return,De)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===t)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===t)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===t)break e;pe===_e&&(pe=null),_e=_e.return}pe===_e&&(pe=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Kn(i,t),li(t),a&4&&qd(t);break;case 21:break;default:Kn(i,t),li(t)}}function li(t){var i=t.flags;if(i&2){try{e:{for(var r=t.return;r!==null;){if(Hd(r)){var a=r;break e}r=r.return}throw Error(n(160))}switch(a.tag){case 5:var f=a.stateNode;a.flags&32&&(ae(f,""),a.flags&=-33);var h=jd(t);Eu(t,h,f);break;case 3:case 4:var S=a.stateNode.containerInfo,L=jd(t);wu(t,L,S);break;default:throw Error(n(161))}}catch(z){bt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ig(t,i,r){Pe=t,$d(t)}function $d(t,i,r){for(var a=(t.mode&1)!==0;Pe!==null;){var f=Pe,h=f.child;if(f.tag===22&&a){var S=f.memoizedState!==null||da;if(!S){var L=f.alternate,z=L!==null&&L.memoizedState!==null||nn;L=da;var Q=nn;if(da=S,(nn=z)&&!Q)for(Pe=f;Pe!==null;)S=Pe,z=S.child,S.tag===22&&S.memoizedState!==null?Qd(f):z!==null?(z.return=S,Pe=z):Qd(f);for(;h!==null;)Pe=h,$d(h),h=h.sibling;Pe=f,da=L,nn=Q}Zd(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Pe=h):Zd(t)}}function Zd(t){for(;Pe!==null;){var i=Pe;if((i.flags&8772)!==0){var r=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:nn||ha(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!nn)if(r===null)a.componentDidMount();else{var f=i.elementType===i.type?r.memoizedProps:$n(i.type,r.memoizedProps);a.componentDidUpdate(f,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Kf(i,h,a);break;case 3:var S=i.updateQueue;if(S!==null){if(r=null,i.child!==null)switch(i.child.tag){case 5:r=i.child.stateNode;break;case 1:r=i.child.stateNode}Kf(i,S,r)}break;case 5:var L=i.stateNode;if(r===null&&i.flags&4){r=L;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&r.focus();break;case"img":z.src&&(r.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var pe=Q.memoizedState;if(pe!==null){var _e=pe.dehydrated;_e!==null&&zs(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}nn||i.flags&512&&Mu(i)}catch(he){bt(i,i.return,he)}}if(i===t){Pe=null;break}if(r=i.sibling,r!==null){r.return=i.return,Pe=r;break}Pe=i.return}}function Kd(t){for(;Pe!==null;){var i=Pe;if(i===t){Pe=null;break}var r=i.sibling;if(r!==null){r.return=i.return,Pe=r;break}Pe=i.return}}function Qd(t){for(;Pe!==null;){var i=Pe;try{switch(i.tag){case 0:case 11:case 15:var r=i.return;try{ha(4,i)}catch(z){bt(i,r,z)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var f=i.return;try{a.componentDidMount()}catch(z){bt(i,f,z)}}var h=i.return;try{Mu(i)}catch(z){bt(i,h,z)}break;case 5:var S=i.return;try{Mu(i)}catch(z){bt(i,S,z)}}}catch(z){bt(i,i.return,z)}if(i===t){Pe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Pe=L;break}Pe=i.return}}var Ng=Math.ceil,pa=D.ReactCurrentDispatcher,Tu=D.ReactCurrentOwner,Bn=D.ReactCurrentBatchConfig,ot=0,Ht=null,Rt=null,Yt=0,Tn=0,is=Ui(0),zt=0,oo=null,gr=0,ma=0,Cu=0,ao=null,xn=null,bu=0,rs=1/0,Si=null,ga=!1,Au=null,Hi=null,_a=!1,ji=null,va=0,lo=0,Lu=null,xa=-1,ya=0;function fn(){return(ot&6)!==0?Ye():xa!==-1?xa:xa=Ye()}function Xi(t){return(t.mode&1)===0?1:(ot&2)!==0&&Yt!==0?Yt&-Yt:_g.transition!==null?(ya===0&&(ya=Hc()),ya):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Jc(t.type)),t)}function Qn(t,i,r,a){if(50<lo)throw lo=0,Lu=null,Error(n(185));Ds(t,r,a),((ot&2)===0||t!==Ht)&&(t===Ht&&((ot&2)===0&&(ma|=r),zt===4&&qi(t,Yt)),yn(t,a),r===1&&ot===0&&(i.mode&1)===0&&(rs=Ye()+500,Yo&&Bi()))}function yn(t,i){var r=t.callbackNode;_m(t,i);var a=Lo(t,t===Ht?Yt:0);if(a===0)r!==null&&Qt(r),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(r!=null&&Qt(r),i===1)t.tag===0?gg(eh.bind(null,t)):Of(eh.bind(null,t)),dg(function(){(ot&6)===0&&Bi()}),r=null;else{switch(jc(a)){case 1:r=ar;break;case 4:r=Lt;break;case 16:r=Fn;break;case 536870912:r=Li;break;default:r=Fn}r=lh(r,Jd.bind(null,t))}t.callbackPriority=i,t.callbackNode=r}}function Jd(t,i){if(xa=-1,ya=0,(ot&6)!==0)throw Error(n(327));var r=t.callbackNode;if(ss()&&t.callbackNode!==r)return null;var a=Lo(t,t===Ht?Yt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Sa(t,a);else{i=a;var f=ot;ot|=2;var h=nh();(Ht!==t||Yt!==i)&&(Si=null,rs=Ye()+500,vr(t,i));do try{zg();break}catch(L){th(t,L)}while(!0);ql(),pa.current=h,ot=f,Rt!==null?i=0:(Ht=null,Yt=0,i=zt)}if(i!==0){if(i===2&&(f=ul(t),f!==0&&(a=f,i=Pu(t,f))),i===1)throw r=oo,vr(t,0),qi(t,a),yn(t,Ye()),r;if(i===6)qi(t,a);else{if(f=t.current.alternate,(a&30)===0&&!Fg(f)&&(i=Sa(t,a),i===2&&(h=ul(t),h!==0&&(a=h,i=Pu(t,h))),i===1))throw r=oo,vr(t,0),qi(t,a),yn(t,Ye()),r;switch(t.finishedWork=f,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:xr(t,xn,Si);break;case 3:if(qi(t,a),(a&130023424)===a&&(i=bu+500-Ye(),10<i)){if(Lo(t,0)!==0)break;if(f=t.suspendedLanes,(f&a)!==a){fn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=kl(xr.bind(null,t,xn,Si),i);break}xr(t,xn,Si);break;case 4:if(qi(t,a),(a&4194240)===a)break;for(i=t.eventTimes,f=-1;0<a;){var S=31-ln(a);h=1<<S,S=i[S],S>f&&(f=S),a&=~h}if(a=f,a=Ye()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ng(a/1960))-a,10<a){t.timeoutHandle=kl(xr.bind(null,t,xn,Si),a);break}xr(t,xn,Si);break;case 5:xr(t,xn,Si);break;default:throw Error(n(329))}}}return yn(t,Ye()),t.callbackNode===r?Jd.bind(null,t):null}function Pu(t,i){var r=ao;return t.current.memoizedState.isDehydrated&&(vr(t,i).flags|=256),t=Sa(t,i),t!==2&&(i=xn,xn=r,i!==null&&Ru(i)),t}function Ru(t){xn===null?xn=t:xn.push.apply(xn,t)}function Fg(t){for(var i=t;;){if(i.flags&16384){var r=i.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var f=r[a],h=f.getSnapshot;f=f.value;try{if(!qn(h(),f))return!1}catch{return!1}}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function qi(t,i){for(i&=~Cu,i&=~ma,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var r=31-ln(i),a=1<<r;t[r]=-1,i&=~a}}function eh(t){if((ot&6)!==0)throw Error(n(327));ss();var i=Lo(t,0);if((i&1)===0)return yn(t,Ye()),null;var r=Sa(t,i);if(t.tag!==0&&r===2){var a=ul(t);a!==0&&(i=a,r=Pu(t,a))}if(r===1)throw r=oo,vr(t,0),qi(t,i),yn(t,Ye()),r;if(r===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,xr(t,xn,Si),yn(t,Ye()),null}function Du(t,i){var r=ot;ot|=1;try{return t(i)}finally{ot=r,ot===0&&(rs=Ye()+500,Yo&&Bi())}}function _r(t){ji!==null&&ji.tag===0&&(ot&6)===0&&ss();var i=ot;ot|=1;var r=Bn.transition,a=ft;try{if(Bn.transition=null,ft=1,t)return t()}finally{ft=a,Bn.transition=r,ot=i,(ot&6)===0&&Bi()}}function Iu(){Tn=is.current,vt(is)}function vr(t,i){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,fg(r)),Rt!==null)for(r=Rt.return;r!==null;){var a=r;switch(Vl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Xo();break;case 3:es(),vt(gn),vt(Jt),tu();break;case 5:Jl(a);break;case 4:es();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:Yl(a.type._context);break;case 22:case 23:Iu()}r=r.return}if(Ht=t,Rt=t=Yi(t.current,null),Yt=Tn=i,zt=0,oo=null,Cu=ma=gr=0,xn=ao=null,hr!==null){for(i=0;i<hr.length;i++)if(r=hr[i],a=r.interleaved,a!==null){r.interleaved=null;var f=a.next,h=r.pending;if(h!==null){var S=h.next;h.next=f,a.next=S}r.pending=a}hr=null}return t}function th(t,i){do{var r=Rt;try{if(ql(),ra.current=la,sa){for(var a=wt.memoizedState;a!==null;){var f=a.queue;f!==null&&(f.pending=null),a=a.next}sa=!1}if(mr=0,Wt=kt=wt=null,eo=!1,to=0,Tu.current=null,r===null||r.return===null){zt=1,oo=i,Rt=null;break}e:{var h=t,S=r.return,L=r,z=i;if(i=Yt,L.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var Q=z,pe=L,_e=pe.tag;if((pe.mode&1)===0&&(_e===0||_e===11||_e===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Ae=Cd(S);if(Ae!==null){Ae.flags&=-257,bd(Ae,S,L,h,i),Ae.mode&1&&Td(h,Q,i),i=Ae,z=Q;var Re=i.updateQueue;if(Re===null){var De=new Set;De.add(z),i.updateQueue=De}else Re.add(z);break e}else{if((i&1)===0){Td(h,Q,i),Nu();break e}z=Error(n(426))}}else if(yt&&L.mode&1){var Pt=Cd(S);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),bd(Pt,S,L,h,i),jl(ts(z,L));break e}}h=z=ts(z,L),zt!==4&&(zt=2),ao===null?ao=[h]:ao.push(h),h=S;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=wd(h,z,i);Zf(h,j);break e;case 1:L=z;var U=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Hi===null||!Hi.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var xe=Ed(h,L,i);Zf(h,xe);break e}}h=h.return}while(h!==null)}rh(r)}catch(Ne){i=Ne,Rt===r&&r!==null&&(Rt=r=r.return);continue}break}while(!0)}function nh(){var t=pa.current;return pa.current=la,t===null?la:t}function Nu(){(zt===0||zt===3||zt===2)&&(zt=4),Ht===null||(gr&268435455)===0&&(ma&268435455)===0||qi(Ht,Yt)}function Sa(t,i){var r=ot;ot|=2;var a=nh();(Ht!==t||Yt!==i)&&(Si=null,vr(t,i));do try{kg();break}catch(f){th(t,f)}while(!0);if(ql(),ot=r,pa.current=a,Rt!==null)throw Error(n(261));return Ht=null,Yt=0,zt}function kg(){for(;Rt!==null;)ih(Rt)}function zg(){for(;Rt!==null&&!Xn();)ih(Rt)}function ih(t){var i=ah(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,i===null?rh(t):Rt=i,Tu.current=null}function rh(t){var i=t;do{var r=i.alternate;if(t=i.return,(i.flags&32768)===0){if(r=Lg(r,i,Tn),r!==null){Rt=r;return}}else{if(r=Pg(r,i),r!==null){r.flags&=32767,Rt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Rt=null;return}}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=t}while(i!==null);zt===0&&(zt=5)}function xr(t,i,r){var a=ft,f=Bn.transition;try{Bn.transition=null,ft=1,Ug(t,i,r,a)}finally{Bn.transition=f,ft=a}return null}function Ug(t,i,r,a){do ss();while(ji!==null);if((ot&6)!==0)throw Error(n(327));r=t.finishedWork;var f=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=r.lanes|r.childLanes;if(vm(t,h),t===Ht&&(Rt=Ht=null,Yt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||_a||(_a=!0,lh(Fn,function(){return ss(),null})),h=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||h){h=Bn.transition,Bn.transition=null;var S=ft;ft=1;var L=ot;ot|=4,Tu.current=null,Dg(t,r),Yd(r,t),rg(Nl),Do=!!Il,Nl=Il=null,t.current=r,Ig(r),di(),ot=L,ft=S,Bn.transition=h}else t.current=r;if(_a&&(_a=!1,ji=t,va=f),h=t.pendingLanes,h===0&&(Hi=null),hi(r.stateNode),yn(t,Ye()),i!==null)for(a=t.onRecoverableError,r=0;r<i.length;r++)f=i[r],a(f.value,{componentStack:f.stack,digest:f.digest});if(ga)throw ga=!1,t=Au,Au=null,t;return(va&1)!==0&&t.tag!==0&&ss(),h=t.pendingLanes,(h&1)!==0?t===Lu?lo++:(lo=0,Lu=t):lo=0,Bi(),null}function ss(){if(ji!==null){var t=jc(va),i=Bn.transition,r=ft;try{if(Bn.transition=null,ft=16>t?16:t,ji===null)var a=!1;else{if(t=ji,ji=null,va=0,(ot&6)!==0)throw Error(n(331));var f=ot;for(ot|=4,Pe=t.current;Pe!==null;){var h=Pe,S=h.child;if((Pe.flags&16)!==0){var L=h.deletions;if(L!==null){for(var z=0;z<L.length;z++){var Q=L[z];for(Pe=Q;Pe!==null;){var pe=Pe;switch(pe.tag){case 0:case 11:case 15:so(8,pe,h)}var _e=pe.child;if(_e!==null)_e.return=pe,Pe=_e;else for(;Pe!==null;){pe=Pe;var he=pe.sibling,Ae=pe.return;if(Wd(pe),pe===Q){Pe=null;break}if(he!==null){he.return=Ae,Pe=he;break}Pe=Ae}}}var Re=h.alternate;if(Re!==null){var De=Re.child;if(De!==null){Re.child=null;do{var Pt=De.sibling;De.sibling=null,De=Pt}while(De!==null)}}Pe=h}}if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,Pe=S;else e:for(;Pe!==null;){if(h=Pe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:so(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,Pe=j;break e}Pe=h.return}}var U=t.current;for(Pe=U;Pe!==null;){S=Pe;var $=S.child;if((S.subtreeFlags&2064)!==0&&$!==null)$.return=S,Pe=$;else e:for(S=U;Pe!==null;){if(L=Pe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:ha(9,L)}}catch(Ne){bt(L,L.return,Ne)}if(L===S){Pe=null;break e}var xe=L.sibling;if(xe!==null){xe.return=L.return,Pe=xe;break e}Pe=L.return}}if(ot=f,Bi(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Pi,t)}catch{}a=!0}return a}finally{ft=r,Bn.transition=i}}return!1}function sh(t,i,r){i=ts(r,i),i=wd(t,i,1),t=Vi(t,i,1),i=fn(),t!==null&&(Ds(t,1,i),yn(t,i))}function bt(t,i,r){if(t.tag===3)sh(t,t,r);else for(;i!==null;){if(i.tag===3){sh(i,t,r);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Hi===null||!Hi.has(a))){t=ts(r,t),t=Ed(i,t,1),i=Vi(i,t,1),t=fn(),i!==null&&(Ds(i,1,t),yn(i,t));break}}i=i.return}}function Og(t,i,r){var a=t.pingCache;a!==null&&a.delete(i),i=fn(),t.pingedLanes|=t.suspendedLanes&r,Ht===t&&(Yt&r)===r&&(zt===4||zt===3&&(Yt&130023424)===Yt&&500>Ye()-bu?vr(t,0):Cu|=r),yn(t,i)}function oh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ao,Ao<<=1,(Ao&130023424)===0&&(Ao=4194304)));var r=fn();t=vi(t,i),t!==null&&(Ds(t,i,r),yn(t,r))}function Bg(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),oh(t,r)}function Gg(t,i){var r=0;switch(t.tag){case 13:var a=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),oh(t,r)}var ah;ah=function(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps||gn.current)vn=!0;else{if((t.lanes&r)===0&&(i.flags&128)===0)return vn=!1,Ag(t,i,r);vn=(t.flags&131072)!==0}else vn=!1,yt&&(i.flags&1048576)!==0&&Bf(i,Zo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;fa(t,i),t=i.pendingProps;var f=qr(i,Jt.current);Jr(i,r),f=ru(null,i,a,t,f,r);var h=su();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,_n(a)?(h=!0,qo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Kl(i),f.updater=ua,i.stateNode=f,f._reactInternals=i,fu(i,a,t,r),i=mu(null,i,a,!0,h,r)):(i.tag=0,yt&&h&&Gl(i),cn(null,i,f,r),i=i.child),i;case 16:a=i.elementType;e:{switch(fa(t,i),t=i.pendingProps,f=a._init,a=f(a._payload),i.type=a,f=i.tag=Wg(a),t=$n(a,t),f){case 0:i=pu(null,i,a,t,r);break e;case 1:i=Id(null,i,a,t,r);break e;case 11:i=Ad(null,i,a,t,r);break e;case 14:i=Ld(null,i,a,$n(a.type,t),r);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:$n(a,f),pu(t,i,a,f,r);case 1:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:$n(a,f),Id(t,i,a,f,r);case 3:e:{if(Nd(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,f=h.element,$f(t,i),na(i,a,null,r);var S=i.memoizedState;if(a=S.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=ts(Error(n(423)),i),i=Fd(t,i,a,r,f);break e}else if(a!==f){f=ts(Error(n(424)),i),i=Fd(t,i,a,r,f);break e}else for(En=zi(i.stateNode.containerInfo.firstChild),wn=i,yt=!0,Yn=null,r=qf(i,null,a,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zr(),a===f){i=yi(t,i,r);break e}cn(t,i,a,r)}i=i.child}return i;case 5:return Qf(i),t===null&&Hl(i),a=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,S=f.children,Fl(a,f)?S=null:h!==null&&Fl(a,h)&&(i.flags|=32),Dd(t,i),cn(t,i,S,r),i.child;case 6:return t===null&&Hl(i),null;case 13:return kd(t,i,r);case 4:return Ql(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Kr(i,null,a,r):cn(t,i,a,r),i.child;case 11:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:$n(a,f),Ad(t,i,a,f,r);case 7:return cn(t,i,i.pendingProps,r),i.child;case 8:return cn(t,i,i.pendingProps.children,r),i.child;case 12:return cn(t,i,i.pendingProps.children,r),i.child;case 10:e:{if(a=i.type._context,f=i.pendingProps,h=i.memoizedProps,S=f.value,mt(Jo,a._currentValue),a._currentValue=S,h!==null)if(qn(h.value,S)){if(h.children===f.children&&!gn.current){i=yi(t,i,r);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){S=h.child;for(var z=L.firstContext;z!==null;){if(z.context===a){if(h.tag===1){z=xi(-1,r&-r),z.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var pe=Q.pending;pe===null?z.next=z:(z.next=pe.next,pe.next=z),Q.pending=z}}h.lanes|=r,z=h.alternate,z!==null&&(z.lanes|=r),$l(h.return,r,i),L.lanes|=r;break}z=z.next}}else if(h.tag===10)S=h.type===i.type?null:h.child;else if(h.tag===18){if(S=h.return,S===null)throw Error(n(341));S.lanes|=r,L=S.alternate,L!==null&&(L.lanes|=r),$l(S,r,i),S=h.sibling}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}cn(t,i,f.children,r),i=i.child}return i;case 9:return f=i.type,a=i.pendingProps.children,Jr(i,r),f=Un(f),a=a(f),i.flags|=1,cn(t,i,a,r),i.child;case 14:return a=i.type,f=$n(a,i.pendingProps),f=$n(a.type,f),Ld(t,i,a,f,r);case 15:return Pd(t,i,i.type,i.pendingProps,r);case 17:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:$n(a,f),fa(t,i),i.tag=1,_n(a)?(t=!0,qo(i)):t=!1,Jr(i,r),Sd(i,a,f),fu(i,a,f,r),mu(null,i,a,!0,t,r);case 19:return Ud(t,i,r);case 22:return Rd(t,i,r)}throw Error(n(156,i.tag))};function lh(t,i){return St(t,i)}function Vg(t,i,r,a){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,r,a){return new Vg(t,i,r,a)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wg(t){if(typeof t=="function")return Fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===me)return 11;if(t===re)return 14}return 2}function Yi(t,i){var r=t.alternate;return r===null?(r=Gn(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ma(t,i,r,a,f,h){var S=2;if(a=t,typeof t=="function")Fu(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case X:return yr(r.children,f,h,i);case E:S=8,f|=8;break;case k:return t=Gn(12,r,i,f|2),t.elementType=k,t.lanes=h,t;case W:return t=Gn(13,r,i,f),t.elementType=W,t.lanes=h,t;case V:return t=Gn(19,r,i,f),t.elementType=V,t.lanes=h,t;case le:return wa(r,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:S=10;break e;case ce:S=9;break e;case me:S=11;break e;case re:S=14;break e;case fe:S=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(S,r,i,f),i.elementType=t,i.type=a,i.lanes=h,i}function yr(t,i,r,a){return t=Gn(7,t,a,i),t.lanes=r,t}function wa(t,i,r,a){return t=Gn(22,t,a,i),t.elementType=le,t.lanes=r,t.stateNode={isHidden:!1},t}function ku(t,i,r){return t=Gn(6,t,null,i),t.lanes=r,t}function zu(t,i,r){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Hg(t,i,r,a,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=a,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Uu(t,i,r,a,f,h,S,L,z){return t=new Hg(t,i,r,L,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(h),t}function jg(t,i,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:a==null?null:""+a,children:t,containerInfo:i,implementation:r}}function uh(t){if(!t)return Oi;t=t._reactInternals;e:{if(We(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(_n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var r=t.type;if(_n(r))return zf(t,r,i)}return i}function ch(t,i,r,a,f,h,S,L,z){return t=Uu(r,a,!0,t,f,h,S,L,z),t.context=uh(null),r=t.current,a=fn(),f=Xi(r),h=xi(a,f),h.callback=i??null,Vi(r,h,f),t.current.lanes=f,Ds(t,f,a),yn(t,a),t}function Ea(t,i,r,a){var f=i.current,h=fn(),S=Xi(f);return r=uh(r),i.context===null?i.context=r:i.pendingContext=r,i=xi(h,S),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Vi(f,i,S),t!==null&&(Qn(t,f,S,h),ta(t,f,S)),S}function Ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Ou(t,i){fh(t,i),(t=t.alternate)&&fh(t,i)}function Xg(){return null}var dh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bu(t){this._internalRoot=t}Ca.prototype.render=Bu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ea(t,i,null,null)},Ca.prototype.unmount=Bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;_r(function(){Ea(null,t,null,null)}),i[pi]=null}};function Ca(t){this._internalRoot=t}Ca.prototype.unstable_scheduleHydration=function(t){if(t){var i=Yc();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Ni.length&&i!==0&&i<Ni[r].priority;r++);Ni.splice(r,0,t),r===0&&Kc(t)}};function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ba(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hh(){}function qg(t,i,r,a,f){if(f){if(typeof a=="function"){var h=a;a=function(){var Q=Ta(S);h.call(Q)}}var S=ch(i,a,t,0,null,!1,!1,"",hh);return t._reactRootContainer=S,t[pi]=S.current,Xs(t.nodeType===8?t.parentNode:t),_r(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof a=="function"){var L=a;a=function(){var Q=Ta(z);L.call(Q)}}var z=Uu(t,0,!1,null,null,!1,!1,"",hh);return t._reactRootContainer=z,t[pi]=z.current,Xs(t.nodeType===8?t.parentNode:t),_r(function(){Ea(i,z,r,a)}),z}function Aa(t,i,r,a,f){var h=r._reactRootContainer;if(h){var S=h;if(typeof f=="function"){var L=f;f=function(){var z=Ta(S);L.call(z)}}Ea(i,S,t,f)}else S=qg(r,i,t,f,a);return Ta(S)}Xc=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var r=Rs(i.pendingLanes);r!==0&&(fl(i,r|1),yn(i,Ye()),(ot&6)===0&&(rs=Ye()+500,Bi()))}break;case 13:_r(function(){var a=vi(t,1);if(a!==null){var f=fn();Qn(a,t,1,f)}}),Ou(t,1)}},dl=function(t){if(t.tag===13){var i=vi(t,134217728);if(i!==null){var r=fn();Qn(i,t,134217728,r)}Ou(t,134217728)}},qc=function(t){if(t.tag===13){var i=Xi(t),r=vi(t,i);if(r!==null){var a=fn();Qn(r,t,i,a)}Ou(t,i)}},Yc=function(){return ft},$c=function(t,i){var r=ft;try{return ft=t,i()}finally{ft=r}},ne=function(t,i,r){switch(i){case"input":if(Kt(t,r),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<r.length;i++){var a=r[i];if(a!==t&&a.form===t.form){var f=jo(a);if(!f)throw Error(n(90));qe(a),Kt(a,f)}}}break;case"textarea":se(t,r);break;case"select":i=r.value,i!=null&&Gt(t,!!r.multiple,i,!1)}},Ft=Du,ri=_r;var Yg={usingClientEntryPoint:!1,Events:[$s,jr,jo,st,At,Du]},uo={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$g={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Je(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Pi=La.inject($g),pt=La}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yg,Sn.createPortal=function(t,i){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(i))throw Error(n(200));return jg(t,i,null,r)},Sn.createRoot=function(t,i){if(!Gu(t))throw Error(n(299));var r=!1,a="",f=dh;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Uu(t,1,!1,null,null,r,!1,a,f),t[pi]=i.current,Xs(t.nodeType===8?t.parentNode:t),new Bu(i)},Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Je(i),t=t===null?null:t.stateNode,t},Sn.flushSync=function(t){return _r(t)},Sn.hydrate=function(t,i,r){if(!ba(i))throw Error(n(200));return Aa(null,t,i,!0,r)},Sn.hydrateRoot=function(t,i,r){if(!Gu(t))throw Error(n(405));var a=r!=null&&r.hydratedSources||null,f=!1,h="",S=dh;if(r!=null&&(r.unstable_strictMode===!0&&(f=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(S=r.onRecoverableError)),i=ch(i,null,t,1,r??null,f,!1,h,S),t[pi]=i.current,Xs(t),a)for(t=0;t<a.length;t++)r=a[t],f=r._getVersion,f=f(r._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[r,f]:i.mutableSourceEagerHydrationData.push(r,f);return new Ca(i)},Sn.render=function(t,i,r){if(!ba(i))throw Error(n(200));return Aa(null,t,i,!1,r)},Sn.unmountComponentAtNode=function(t){if(!ba(t))throw Error(n(40));return t._reactRootContainer?(_r(function(){Aa(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1},Sn.unstable_batchedUpdates=Du,Sn.unstable_renderSubtreeIntoContainer=function(t,i,r,a){if(!ba(r))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Aa(t,i,r,!1,a)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var Gp;function IM(){if(Gp)return Lc.exports;Gp=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(e){console.error(e)}}return u(),Lc.exports=DM(),Lc.exports}var Vp;function NM(){if(Vp)return Ka;Vp=1;var u=IM();return Ka.createRoot=u.createRoot,Ka.hydrateRoot=u.hydrateRoot,Ka}var FM=NM();const kM=tl(FM);function zM(){const u=A_({query:"(max-width: 600px)"}),e=ut.useRef(null);ut.useEffect(()=>{var s;(s=e.current)!=null&&s.startGame&&e.current.startGame()},[]);const n={global:{margin:0,padding:0,boxSizing:"border-box",width:"100%",height:"100%",overflow:"hidden"},app:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#000",color:"white",fontFamily:"Arial, sans-serif"},mobileMessage:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",textAlign:"center",padding:"20px",fontSize:"18px",backgroundColor:"#000",color:"red"}};return ut.useEffect(()=>{Object.assign(document.body.style,n.global),Object.assign(document.documentElement.style,n.global)},[]),u?sn.jsx("div",{style:n.mobileMessage,children:sn.jsx("p",{children:"Sorry, this site is currently not available on mobile devices at this time. Please visit on a tablet, laptop, or desktop."})}):sn.jsx("div",{style:n.app,children:sn.jsx(LM,{ref:e})})}kM.createRoot(document.getElementById("root")).render(sn.jsx(e_.StrictMode,{children:sn.jsx(zM,{})}));
