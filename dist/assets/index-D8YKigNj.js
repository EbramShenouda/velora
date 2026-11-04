(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function cg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pu={exports:{}},Ia={},Lu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function zx(){if(Gp)return gt;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(P,W,fe){this.props=P,this.context=W,this.refs=E,this.updater=fe||M}S.prototype.isReactComponent={},S.prototype.setState=function(P,W){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,W,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(P,W,fe){this.props=P,this.context=W,this.refs=E,this.updater=fe||M}var D=I.prototype=new x;D.constructor=I,b(D,S.prototype),D.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function V(P,W,fe){var $,me={},ye=null,_e=null;if(W!=null)for($ in W.ref!==void 0&&(_e=W.ref),W.key!==void 0&&(ye=""+W.key),W)B.call(W,$)&&!O.hasOwnProperty($)&&(me[$]=W[$]);var Ne=arguments.length-2;if(Ne===1)me.children=fe;else if(1<Ne){for(var Ye=Array(Ne),je=0;je<Ne;je++)Ye[je]=arguments[je+2];me.children=Ye}if(P&&P.defaultProps)for($ in Ne=P.defaultProps,Ne)me[$]===void 0&&(me[$]=Ne[$]);return{$$typeof:s,type:P,key:ye,ref:_e,props:me,_owner:z.current}}function N(P,W){return{$$typeof:s,type:P.type,key:W,ref:P.ref,props:P.props,_owner:P._owner}}function C(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function U(P){var W={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(fe){return W[fe]})}var J=/\/+/g;function Y(P,W){return typeof P=="object"&&P!==null&&P.key!=null?U(""+P.key):W.toString(36)}function de(P,W,fe,$,me){var ye=typeof P;(ye==="undefined"||ye==="boolean")&&(P=null);var _e=!1;if(P===null)_e=!0;else switch(ye){case"string":case"number":_e=!0;break;case"object":switch(P.$$typeof){case s:case e:_e=!0}}if(_e)return _e=P,me=me(_e),P=$===""?"."+Y(_e,0):$,R(me)?(fe="",P!=null&&(fe=P.replace(J,"$&/")+"/"),de(me,W,fe,"",function(je){return je})):me!=null&&(C(me)&&(me=N(me,fe+(!me.key||_e&&_e.key===me.key?"":(""+me.key).replace(J,"$&/")+"/")+P)),W.push(me)),1;if(_e=0,$=$===""?".":$+":",R(P))for(var Ne=0;Ne<P.length;Ne++){ye=P[Ne];var Ye=$+Y(ye,Ne);_e+=de(ye,W,fe,Ye,me)}else if(Ye=y(P),typeof Ye=="function")for(P=Ye.call(P),Ne=0;!(ye=P.next()).done;)ye=ye.value,Ye=$+Y(ye,Ne++),_e+=de(ye,W,fe,Ye,me);else if(ye==="object")throw W=String(P),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return _e}function j(P,W,fe){if(P==null)return P;var $=[],me=0;return de(P,$,"","",function(ye){return W.call(fe,ye,me++)}),$}function Z(P){if(P._status===-1){var W=P._result;W=W(),W.then(function(fe){(P._status===0||P._status===-1)&&(P._status=1,P._result=fe)},function(fe){(P._status===0||P._status===-1)&&(P._status=2,P._result=fe)}),P._status===-1&&(P._status=0,P._result=W)}if(P._status===1)return P._result.default;throw P._result}var oe={current:null},F={transition:null},le={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:F,ReactCurrentOwner:z};function re(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:j,forEach:function(P,W,fe){j(P,function(){W.apply(this,arguments)},fe)},count:function(P){var W=0;return j(P,function(){W++}),W},toArray:function(P){return j(P,function(W){return W})||[]},only:function(P){if(!C(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},gt.Component=S,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=I,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=re,gt.cloneElement=function(P,W,fe){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var $=b({},P.props),me=P.key,ye=P.ref,_e=P._owner;if(W!=null){if(W.ref!==void 0&&(ye=W.ref,_e=z.current),W.key!==void 0&&(me=""+W.key),P.type&&P.type.defaultProps)var Ne=P.type.defaultProps;for(Ye in W)B.call(W,Ye)&&!O.hasOwnProperty(Ye)&&($[Ye]=W[Ye]===void 0&&Ne!==void 0?Ne[Ye]:W[Ye])}var Ye=arguments.length-2;if(Ye===1)$.children=fe;else if(1<Ye){Ne=Array(Ye);for(var je=0;je<Ye;je++)Ne[je]=arguments[je+2];$.children=Ne}return{$$typeof:s,type:P.type,key:me,ref:ye,props:$,_owner:_e}},gt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:c,_context:P},P.Consumer=P},gt.createElement=V,gt.createFactory=function(P){var W=V.bind(null,P);return W.type=P,W},gt.createRef=function(){return{current:null}},gt.forwardRef=function(P){return{$$typeof:f,render:P}},gt.isValidElement=C,gt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:Z}},gt.memo=function(P,W){return{$$typeof:g,type:P,compare:W===void 0?null:W}},gt.startTransition=function(P){var W=F.transition;F.transition={};try{P()}finally{F.transition=W}},gt.unstable_act=re,gt.useCallback=function(P,W){return oe.current.useCallback(P,W)},gt.useContext=function(P){return oe.current.useContext(P)},gt.useDebugValue=function(){},gt.useDeferredValue=function(P){return oe.current.useDeferredValue(P)},gt.useEffect=function(P,W){return oe.current.useEffect(P,W)},gt.useId=function(){return oe.current.useId()},gt.useImperativeHandle=function(P,W,fe){return oe.current.useImperativeHandle(P,W,fe)},gt.useInsertionEffect=function(P,W){return oe.current.useInsertionEffect(P,W)},gt.useLayoutEffect=function(P,W){return oe.current.useLayoutEffect(P,W)},gt.useMemo=function(P,W){return oe.current.useMemo(P,W)},gt.useReducer=function(P,W,fe){return oe.current.useReducer(P,W,fe)},gt.useRef=function(P){return oe.current.useRef(P)},gt.useState=function(P){return oe.current.useState(P)},gt.useSyncExternalStore=function(P,W,fe){return oe.current.useSyncExternalStore(P,W,fe)},gt.useTransition=function(){return oe.current.useTransition()},gt.version="18.3.1",gt}var Wp;function cf(){return Wp||(Wp=1,Lu.exports=zx()),Lu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Bx(){if(Xp)return Ia;Xp=1;var s=cf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var v,_={},y=null,M=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:y,ref:M,props:_,_owner:o.current}}return Ia.Fragment=n,Ia.jsx=d,Ia.jsxs=d,Ia}var qp;function jx(){return qp||(qp=1,Pu.exports=Bx()),Pu.exports}var u=jx(),pe=cf();const ug=cg(pe);var ol={},Du={exports:{}},Ln={},Iu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Vx(){return $p||($p=1,(function(s){function e(F,le){var re=F.length;F.push(le);e:for(;0<re;){var P=re-1>>>1,W=F[P];if(0<o(W,le))F[P]=le,F[re]=W,re=P;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var le=F[0],re=F.pop();if(re!==le){F[0]=re;e:for(var P=0,W=F.length,fe=W>>>1;P<fe;){var $=2*(P+1)-1,me=F[$],ye=$+1,_e=F[ye];if(0>o(me,re))ye<W&&0>o(_e,me)?(F[P]=_e,F[ye]=re,P=ye):(F[P]=me,F[$]=re,P=$);else if(ye<W&&0>o(_e,re))F[P]=_e,F[ye]=re,P=ye;else break e}}return le}function o(F,le){var re=F.sortIndex-le.sortIndex;return re!==0?re:F.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],g=[],v=1,_=null,y=3,M=!1,b=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(F){for(var le=n(g);le!==null;){if(le.callback===null)r(g);else if(le.startTime<=F)r(g),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(g)}}function R(F){if(E=!1,D(F),!b)if(n(p)!==null)b=!0,Z(B);else{var le=n(g);le!==null&&oe(R,le.startTime-F)}}function B(F,le){b=!1,E&&(E=!1,x(V),V=-1),M=!0;var re=y;try{for(D(le),_=n(p);_!==null&&(!(_.expirationTime>le)||F&&!U());){var P=_.callback;if(typeof P=="function"){_.callback=null,y=_.priorityLevel;var W=P(_.expirationTime<=le);le=s.unstable_now(),typeof W=="function"?_.callback=W:_===n(p)&&r(p),D(le)}else r(p);_=n(p)}if(_!==null)var fe=!0;else{var $=n(g);$!==null&&oe(R,$.startTime-le),fe=!1}return fe}finally{_=null,y=re,M=!1}}var z=!1,O=null,V=-1,N=5,C=-1;function U(){return!(s.unstable_now()-C<N)}function J(){if(O!==null){var F=s.unstable_now();C=F;var le=!0;try{le=O(!0,F)}finally{le?Y():(z=!1,O=null)}}else z=!1}var Y;if(typeof I=="function")Y=function(){I(J)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,j=de.port2;de.port1.onmessage=J,Y=function(){j.postMessage(null)}}else Y=function(){S(J,0)};function Z(F){O=F,z||(z=!0,Y())}function oe(F,le){V=S(function(){F(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,Z(B))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(F){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var re=y;y=le;try{return F()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,le){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var re=y;y=F;try{return le()}finally{y=re}},s.unstable_scheduleCallback=function(F,le,re){var P=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?P+re:P):re=P,F){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=re+W,F={id:v++,callback:le,priorityLevel:F,startTime:re,expirationTime:W,sortIndex:-1},re>P?(F.sortIndex=re,e(g,F),n(p)===null&&F===n(g)&&(E?(x(V),V=-1):E=!0,oe(R,re-P))):(F.sortIndex=W,e(p,F),b||M||(b=!0,Z(B))),F},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(F){var le=y;return function(){var re=y;y=le;try{return F.apply(this,arguments)}finally{y=re}}}})(Uu)),Uu}var Yp;function Hx(){return Yp||(Yp=1,Iu.exports=Vx()),Iu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Gx(){if(Kp)return Ln;Kp=1;var s=cf(),e=Hx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function y(t){return p.call(_,t)?!0:p.call(v,t)?!1:g.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,a,l,h,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,I);S[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,I);S[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,I);S[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,a,l){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,h,l)&&(a=null),l||h===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):h.mustUseProperty?t[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,l=h.attributeNamespace,a===null?t.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),U=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),F=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,P;function W(t){if(P===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+t}var fe=!1;function $(t,i){if(!t||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var l=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){l=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){l=ue}t()}}catch(ue){if(ue&&l&&typeof ue.stack=="string"){for(var h=ue.stack.split(`
`),m=l.stack.split(`
`),w=h.length-1,k=m.length-1;1<=w&&0<=k&&h[w]!==m[k];)k--;for(;1<=w&&0<=k;w--,k--)if(h[w]!==m[k]){if(w!==1||k!==1)do if(w--,k--,0>k||h[w]!==m[k]){var G=`
`+h[w].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=w&&0<=k);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?W(t):""}function me(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case z:return"Portal";case N:return"Profiler";case V:return"StrictMode";case Y:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case Z:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ne(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=Ye(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){l=""+w,m.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=je(t))}function Pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ye(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function H(t,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Kt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ne(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function lt(t,i){pt(t,i);var a=Ne(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Et(t,i.type,a):i.hasOwnProperty("defaultValue")&&Et(t,i.type,Ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ke(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Et(t,i,a){(i!=="number"||ct(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ge=Array.isArray;function L(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ne(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function se(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ge(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ne(a)}}function ve(t,i){var a=Ne(i.value),l=Ne(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Se(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,h){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,h)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function dt(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function Qe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function nt(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,h=Qe(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,h):t[a]=h}}var ze=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Je=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,he=null,ge=null;function Ie(t){if(t=_a(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Mo(i),Re(t.stateNode,t.type,i))}}function De(t){he?ge?ge.push(t):ge=[t]:he=t}function ot(){if(he){var t=he,i=ge;if(ge=he=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function Ft(t,i){return t(i)}function Zt(){}var Mt=!1;function Tn(t,i,a){if(Mt)return t(i,a);Mt=!0;try{return Ft(t,i,a)}finally{Mt=!1,(he!==null||ge!==null)&&(Zt(),ot())}}function Sn(t,i){var a=t.stateNode;if(a===null)return null;var l=Mo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Qr=!1;if(f)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Qr=!1}function bi(t,i,a,l,h,m,w,k,G){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(be){this.onError(be)}}var wi=!1,wr=null,Er=!1,Xi=null,Ja={onError:function(t){wi=!0,wr=t}};function Jr(t,i,a,l,h,m,w,k,G){wi=!1,wr=null,bi.apply(Ja,arguments)}function eo(t,i,a,l,h,m,w,k,G){if(Jr.apply(this,arguments),wi){if(wi){var ue=wr;wi=!1,wr=null}else throw Error(n(198));Er||(Er=!0,Xi=ue)}}function pi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function to(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function no(t){if(pi(t)!==t)throw Error(n(188))}function ec(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return no(h),t;if(m===l)return no(h),i;m=m.sibling}throw Error(n(188))}if(a.return!==l.return)a=h,l=m;else{for(var w=!1,k=h.child;k;){if(k===a){w=!0,a=h,l=m;break}if(k===l){w=!0,l=h,a=m;break}k=k.sibling}if(!w){for(k=m.child;k;){if(k===a){w=!0,a=m,l=h;break}if(k===l){w=!0,l=m,a=h;break}k=k.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function io(t){return t=ec(t),t!==null?ro(t):null}function ro(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ro(t);if(i!==null)return i;t=t.sibling}return null}var so=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,K=e.unstable_shouldYield,ce=e.unstable_requestPaint,te=e.unstable_now,Q=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,Pe=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,rt=e.unstable_IdlePriority,it=null,We=null;function _t(t){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(it,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:St,Gt=Math.log,zt=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(Gt(t)/zt|0)|0}var Ze=64,Wt=4194304;function vt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,m=t.pingedLanes,w=a&268435455;if(w!==0){var k=w&~h;k!==0?l=vt(k):(m&=w,m!==0&&(l=vt(m)))}else w=a&~h,w!==0?l=vt(w):m!==0&&(l=vt(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&h)===0&&(h=l&-l,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-ut(i),h=1<<a,l|=t[a],i&=~h;return l}function qi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes;0<m;){var w=31-ut(m),k=1<<w,G=h[w];G===-1?((k&a)===0||(k&l)!==0)&&(h[w]=qi(k,i)):G<=i&&(t.expiredLanes|=k),m&=~k}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function It(){var t=Ze;return Ze<<=1,(Ze&4194240)===0&&(Ze=64),t}function pn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function nn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ut(i),t[i]=a}function cn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var h=31-ut(a),m=1<<h;i[h]=0,l[h]=-1,t[h]=-1,a&=~m}}function rn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-ut(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}var bt=0;function mi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var bf,tc,wf,Ef,Tf,nc=!1,ao=[],$i=null,Yi=null,Ki=null,ia=new Map,ra=new Map,Zi=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(t,i){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(t,i,a,l,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=_a(i),i!==null&&tc(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function l0(t,i,a,l,h){switch(i){case"focusin":return $i=sa($i,t,i,a,l,h),!0;case"dragenter":return Yi=sa(Yi,t,i,a,l,h),!0;case"mouseover":return Ki=sa(Ki,t,i,a,l,h),!0;case"pointerover":var m=h.pointerId;return ia.set(m,sa(ia.get(m)||null,t,i,a,l,h)),!0;case"gotpointercapture":return m=h.pointerId,ra.set(m,sa(ra.get(m)||null,t,i,a,l,h)),!0}return!1}function Af(t){var i=Tr(t.target);if(i!==null){var a=pi(i);if(a!==null){if(i=a.tag,i===13){if(i=to(a),i!==null){t.blockedOn=i,Tf(t.priority,function(){wf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=rc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Je=l,a.target.dispatchEvent(l),Je=null}else return i=_a(a),i!==null&&tc(i),t.blockedOn=a,!1;i.shift()}return!0}function Nf(t,i,a){oo(t)&&a.delete(i)}function c0(){nc=!1,$i!==null&&oo($i)&&($i=null),Yi!==null&&oo(Yi)&&(Yi=null),Ki!==null&&oo(Ki)&&(Ki=null),ia.forEach(Nf),ra.forEach(Nf)}function aa(t,i){t.blockedOn===i&&(t.blockedOn=null,nc||(nc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,c0)))}function oa(t){function i(h){return aa(h,t)}if(0<ao.length){aa(ao[0],t);for(var a=1;a<ao.length;a++){var l=ao[a];l.blockedOn===t&&(l.blockedOn=null)}}for($i!==null&&aa($i,t),Yi!==null&&aa(Yi,t),Ki!==null&&aa(Ki,t),ia.forEach(i),ra.forEach(i),a=0;a<Zi.length;a++)l=Zi[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Zi.length&&(a=Zi[0],a.blockedOn===null);)Af(a),a.blockedOn===null&&Zi.shift()}var es=R.ReactCurrentBatchConfig,lo=!0;function u0(t,i,a,l){var h=bt,m=es.transition;es.transition=null;try{bt=1,ic(t,i,a,l)}finally{bt=h,es.transition=m}}function d0(t,i,a,l){var h=bt,m=es.transition;es.transition=null;try{bt=4,ic(t,i,a,l)}finally{bt=h,es.transition=m}}function ic(t,i,a,l){if(lo){var h=rc(t,i,a,l);if(h===null)Sc(t,i,l,co,a),Cf(t,l);else if(l0(h,t,i,a,l))l.stopPropagation();else if(Cf(t,l),i&4&&-1<o0.indexOf(t)){for(;h!==null;){var m=_a(h);if(m!==null&&bf(m),m=rc(t,i,a,l),m===null&&Sc(t,i,l,co,a),m===h)break;h=m}h!==null&&l.stopPropagation()}else Sc(t,i,l,null,a)}}var co=null;function rc(t,i,a,l){if(co=null,t=q(l),t=Tr(t),t!==null)if(i=pi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=to(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return co=t,null}function Rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case Te:return 1;case Pe:return 4;case Fe:case Ve:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qi=null,sc=null,uo=null;function Pf(){if(uo)return uo;var t,i=sc,a=i.length,l,h="value"in Qi?Qi.value:Qi.textContent,m=h.length;for(t=0;t<a&&i[t]===h[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===h[m-l];l++);return uo=h.slice(t,1<l?1-l:void 0)}function fo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function Lf(){return!1}function Fn(t){function i(a,l,h,m,w){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ho:Lf,this.isPropagationStopped=Lf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=Fn(ts),la=re({},ts,{view:0,detail:0}),f0=Fn(la),oc,lc,ca,po=re({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(oc=t.screenX-ca.screenX,lc=t.screenY-ca.screenY):lc=oc=0,ca=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Df=Fn(po),h0=re({},po,{dataTransfer:0}),p0=Fn(h0),m0=re({},la,{relatedTarget:0}),cc=Fn(m0),g0=re({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=Fn(g0),v0=re({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_0=Fn(v0),y0=re({},ts,{data:0}),If=Fn(y0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=b0[t])?!!i[t]:!1}function uc(){return w0}var E0=re({},la,{key:function(t){if(t.key){var i=S0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T0=Fn(E0),C0=re({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=Fn(C0),A0=re({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),N0=Fn(A0),R0=re({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=Fn(R0),L0=re({},po,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=Fn(L0),I0=[9,13,27,32],dc=f&&"CompositionEvent"in window,ua=null;f&&"documentMode"in document&&(ua=document.documentMode);var U0=f&&"TextEvent"in window&&!ua,Ff=f&&(!dc||ua&&8<ua&&11>=ua),kf=" ",Of=!1;function zf(t,i){switch(t){case"keyup":return I0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function F0(t,i){switch(t){case"compositionend":return Bf(i);case"keypress":return i.which!==32?null:(Of=!0,kf);case"textInput":return t=i.data,t===kf&&Of?null:t;default:return null}}function k0(t,i){if(ns)return t==="compositionend"||!dc&&zf(t,i)?(t=Pf(),uo=sc=Qi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ff&&i.locale!=="ko"?null:i.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!O0[t.type]:i==="textarea"}function Vf(t,i,a,l){De(l),i=_o(i,"onChange"),0<i.length&&(a=new ac("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var da=null,fa=null;function z0(t){ah(t,0)}function mo(t){var i=os(t);if(Pt(i))return t}function B0(t,i){if(t==="change")return i}var Hf=!1;if(f){var fc;if(f){var hc="oninput"in document;if(!hc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),hc=typeof Gf.oninput=="function"}fc=hc}else fc=!1;Hf=fc&&(!document.documentMode||9<document.documentMode)}function Wf(){da&&(da.detachEvent("onpropertychange",Xf),fa=da=null)}function Xf(t){if(t.propertyName==="value"&&mo(fa)){var i=[];Vf(i,fa,t,q(t)),Tn(z0,i)}}function j0(t,i,a){t==="focusin"?(Wf(),da=i,fa=a,da.attachEvent("onpropertychange",Xf)):t==="focusout"&&Wf()}function V0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mo(fa)}function H0(t,i){if(t==="click")return mo(i)}function G0(t,i){if(t==="input"||t==="change")return mo(i)}function W0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:W0;function ha(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!p.call(i,h)||!Jn(t[h],i[h]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $f(t,i){var a=qf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Yf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Yf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Kf(){for(var t=window,i=ct();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ct(t.document)}return i}function pc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function X0(t){var i=Kf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Yf(a.ownerDocument.documentElement,a)){if(l!==null&&pc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var h=a.textContent.length,m=Math.min(l.start,h);l=l.end===void 0?m:Math.min(l.end,h),!t.extend&&m>l&&(h=l,l=m,m=h),h=$f(a,m);var w=$f(a,l);h&&w&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q0=f&&"documentMode"in document&&11>=document.documentMode,is=null,mc=null,pa=null,gc=!1;function Zf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||is==null||is!==ct(l)||(l=is,"selectionStart"in l&&pc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),pa&&ha(pa,l)||(pa=l,l=_o(mc,"onSelect"),0<l.length&&(i=new ac("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=is)))}function go(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var rs={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},xc={},Qf={};f&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function xo(t){if(xc[t])return xc[t];if(!rs[t])return t;var i=rs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Qf)return xc[t]=i[a];return t}var Jf=xo("animationend"),eh=xo("animationiteration"),th=xo("animationstart"),nh=xo("transitionend"),ih=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){ih.set(t,i),c(i,[t])}for(var vc=0;vc<rh.length;vc++){var _c=rh[vc],$0=_c.toLowerCase(),Y0=_c[0].toUpperCase()+_c.slice(1);Ji($0,"on"+Y0)}Ji(Jf,"onAnimationEnd"),Ji(eh,"onAnimationIteration"),Ji(th,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(nh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function sh(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,eo(l,i,void 0,t),t.currentTarget=null}function ah(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var w=l.length-1;0<=w;w--){var k=l[w],G=k.instance,ue=k.currentTarget;if(k=k.listener,G!==m&&h.isPropagationStopped())break e;sh(h,k,ue),m=G}else for(w=0;w<l.length;w++){if(k=l[w],G=k.instance,ue=k.currentTarget,k=k.listener,G!==m&&h.isPropagationStopped())break e;sh(h,k,ue),m=G}}}if(Er)throw t=Xi,Er=!1,Xi=null,t}function kt(t,i){var a=i[Cc];a===void 0&&(a=i[Cc]=new Set);var l=t+"__bubble";a.has(l)||(oh(i,t,2,!1),a.add(l))}function yc(t,i,a){var l=0;i&&(l|=4),oh(a,t,l,i)}var vo="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[vo]){t[vo]=!0,r.forEach(function(a){a!=="selectionchange"&&(K0.has(a)||yc(a,!1,t),yc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[vo]||(i[vo]=!0,yc("selectionchange",!1,i))}}function oh(t,i,a,l){switch(Rf(i)){case 1:var h=u0;break;case 4:h=d0;break;default:h=ic}a=h.bind(null,i,a,t),h=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Sc(t,i,a,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var k=l.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(w===4)for(w=l.return;w!==null;){var G=w.tag;if((G===3||G===4)&&(G=w.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;w=w.return}for(;k!==null;){if(w=Tr(k),w===null)return;if(G=w.tag,G===5||G===6){l=m=w;continue e}k=k.parentNode}}l=l.return}Tn(function(){var ue=m,be=q(a),we=[];e:{var Me=ih.get(t);if(Me!==void 0){var ke=ac,He=t;switch(t){case"keypress":if(fo(a)===0)break e;case"keydown":case"keyup":ke=T0;break;case"focusin":He="focus",ke=cc;break;case"focusout":He="blur",ke=cc;break;case"beforeblur":case"afterblur":ke=cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=N0;break;case Jf:case eh:case th:ke=x0;break;case nh:ke=P0;break;case"scroll":ke=f0;break;case"wheel":ke=D0;break;case"copy":case"cut":case"paste":ke=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Uf}var qe=(i&4)!==0,qt=!qe&&t==="scroll",ee=qe?Me!==null?Me+"Capture":null:Me;qe=[];for(var X=ue,ie;X!==null;){ie=X;var Ce=ie.stateNode;if(ie.tag===5&&Ce!==null&&(ie=Ce,ee!==null&&(Ce=Sn(X,ee),Ce!=null&&qe.push(xa(X,Ce,ie)))),qt)break;X=X.return}0<qe.length&&(Me=new ke(Me,He,null,a,be),we.push({event:Me,listeners:qe}))}}if((i&7)===0){e:{if(Me=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",Me&&a!==Je&&(He=a.relatedTarget||a.fromElement)&&(Tr(He)||He[Ti]))break e;if((ke||Me)&&(Me=be.window===be?be:(Me=be.ownerDocument)?Me.defaultView||Me.parentWindow:window,ke?(He=a.relatedTarget||a.toElement,ke=ue,He=He?Tr(He):null,He!==null&&(qt=pi(He),He!==qt||He.tag!==5&&He.tag!==6)&&(He=null)):(ke=null,He=ue),ke!==He)){if(qe=Df,Ce="onMouseLeave",ee="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Uf,Ce="onPointerLeave",ee="onPointerEnter",X="pointer"),qt=ke==null?Me:os(ke),ie=He==null?Me:os(He),Me=new qe(Ce,X+"leave",ke,a,be),Me.target=qt,Me.relatedTarget=ie,Ce=null,Tr(be)===ue&&(qe=new qe(ee,X+"enter",He,a,be),qe.target=ie,qe.relatedTarget=qt,Ce=qe),qt=Ce,ke&&He)t:{for(qe=ke,ee=He,X=0,ie=qe;ie;ie=ss(ie))X++;for(ie=0,Ce=ee;Ce;Ce=ss(Ce))ie++;for(;0<X-ie;)qe=ss(qe),X--;for(;0<ie-X;)ee=ss(ee),ie--;for(;X--;){if(qe===ee||ee!==null&&qe===ee.alternate)break t;qe=ss(qe),ee=ss(ee)}qe=null}else qe=null;ke!==null&&lh(we,Me,ke,qe,!1),He!==null&&qt!==null&&lh(we,qt,He,qe,!0)}}e:{if(Me=ue?os(ue):window,ke=Me.nodeName&&Me.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Me.type==="file")var $e=B0;else if(jf(Me))if(Hf)$e=G0;else{$e=V0;var et=j0}else(ke=Me.nodeName)&&ke.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&($e=H0);if($e&&($e=$e(t,ue))){Vf(we,$e,a,be);break e}et&&et(t,Me,ue),t==="focusout"&&(et=Me._wrapperState)&&et.controlled&&Me.type==="number"&&Et(Me,"number",Me.value)}switch(et=ue?os(ue):window,t){case"focusin":(jf(et)||et.contentEditable==="true")&&(is=et,mc=ue,pa=null);break;case"focusout":pa=mc=is=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Zf(we,a,be);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":Zf(we,a,be)}var tt;if(dc)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ns?zf(t,a)&&(st="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Ff&&a.locale!=="ko"&&(ns||st!=="onCompositionStart"?st==="onCompositionEnd"&&ns&&(tt=Pf()):(Qi=be,sc="value"in Qi?Qi.value:Qi.textContent,ns=!0)),et=_o(ue,st),0<et.length&&(st=new If(st,t,null,a,be),we.push({event:st,listeners:et}),tt?st.data=tt:(tt=Bf(a),tt!==null&&(st.data=tt)))),(tt=U0?F0(t,a):k0(t,a))&&(ue=_o(ue,"onBeforeInput"),0<ue.length&&(be=new If("onBeforeInput","beforeinput",null,a,be),we.push({event:be,listeners:ue}),be.data=tt))}ah(we,i)})}function xa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function _o(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Sn(t,a),m!=null&&l.unshift(xa(t,m,h)),m=Sn(t,i),m!=null&&l.push(xa(t,m,h))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lh(t,i,a,l,h){for(var m=i._reactName,w=[];a!==null&&a!==l;){var k=a,G=k.alternate,ue=k.stateNode;if(G!==null&&G===l)break;k.tag===5&&ue!==null&&(k=ue,h?(G=Sn(a,m),G!=null&&w.unshift(xa(a,G,k))):h||(G=Sn(a,m),G!=null&&w.push(xa(a,G,k)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var Z0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function ch(t){return(typeof t=="string"?t:""+t).replace(Z0,`
`).replace(Q0,"")}function yo(t,i,a){if(i=ch(i),ch(t)!==i&&a)throw Error(n(425))}function So(){}var Mc=null,bc=null;function wc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(t){return uh.resolve(null).then(t).catch(tx)}:Ec;function tx(t){setTimeout(function(){throw t})}function Tc(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),oa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);oa(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),gi="__reactFiber$"+as,va="__reactProps$"+as,Ti="__reactContainer$"+as,Cc="__reactEvents$"+as,nx="__reactListeners$"+as,ix="__reactHandles$"+as;function Tr(t){var i=t[gi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ti]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=dh(t);t!==null;){if(a=t[gi])return a;t=dh(t)}return i}t=a,a=t.parentNode}return null}function _a(t){return t=t[gi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Mo(t){return t[va]||null}var Ac=[],ls=-1;function tr(t){return{current:t}}function Ot(t){0>ls||(t.current=Ac[ls],Ac[ls]=null,ls--)}function Ut(t,i){ls++,Ac[ls]=t.current,t.current=i}var nr={},mn=tr(nr),Cn=tr(!1),Cr=nr;function cs(t,i){var a=t.type.contextTypes;if(!a)return nr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=h),h}function An(t){return t=t.childContextTypes,t!=null}function bo(){Ot(Cn),Ot(mn)}function fh(t,i,a){if(mn.current!==nr)throw Error(n(168));Ut(mn,i),Ut(Cn,a)}function hh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var h in l)if(!(h in i))throw Error(n(108,_e(t)||"Unknown",h));return re({},a,l)}function wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Cr=mn.current,Ut(mn,t),Ut(Cn,Cn.current),!0}function ph(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=hh(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,Ot(Cn),Ot(mn),Ut(mn,t)):Ot(Cn),Ut(Cn,a)}var Ci=null,Eo=!1,Nc=!1;function mh(t){Ci===null?Ci=[t]:Ci.push(t)}function rx(t){Eo=!0,mh(t)}function ir(){if(!Nc&&Ci!==null){Nc=!0;var t=0,i=bt;try{var a=Ci;for(bt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ci=null,Eo=!1}catch(h){throw Ci!==null&&(Ci=Ci.slice(t+1)),so(Te,ir),h}finally{bt=i,Nc=!1}}return null}var us=[],ds=0,To=null,Co=0,Wn=[],Xn=0,Ar=null,Ai=1,Ni="";function Nr(t,i){us[ds++]=Co,us[ds++]=To,To=t,Co=i}function gh(t,i,a){Wn[Xn++]=Ai,Wn[Xn++]=Ni,Wn[Xn++]=Ar,Ar=t;var l=Ai;t=Ni;var h=32-ut(l)-1;l&=~(1<<h),a+=1;var m=32-ut(i)+h;if(30<m){var w=h-h%5;m=(l&(1<<w)-1).toString(32),l>>=w,h-=w,Ai=1<<32-ut(i)+h|a<<h|l,Ni=m+t}else Ai=1<<m|a<<h|l,Ni=t}function Rc(t){t.return!==null&&(Nr(t,1),gh(t,1,0))}function Pc(t){for(;t===To;)To=us[--ds],us[ds]=null,Co=us[--ds],us[ds]=null;for(;t===Ar;)Ar=Wn[--Xn],Wn[Xn]=null,Ni=Wn[--Xn],Wn[Xn]=null,Ai=Wn[--Xn],Wn[Xn]=null}var kn=null,On=null,Bt=!1,ei=null;function xh(t,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function vh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,On=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ar!==null?{id:Ai,overflow:Ni}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,kn=t,On=null,!0):!1;default:return!1}}function Lc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dc(t){if(Bt){var i=On;if(i){var a=i;if(!vh(t,i)){if(Lc(t))throw Error(n(418));i=er(a.nextSibling);var l=kn;i&&vh(t,i)?xh(l,a):(t.flags=t.flags&-4097|2,Bt=!1,kn=t)}}else{if(Lc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,kn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Ao(t){if(t!==kn)return!1;if(!Bt)return _h(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!wc(t.type,t.memoizedProps)),i&&(i=On)){if(Lc(t))throw yh(),Error(n(418));for(;i;)xh(t,i),i=er(i.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){On=er(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}On=null}}else On=kn?er(t.stateNode.nextSibling):null;return!0}function yh(){for(var t=On;t;)t=er(t.nextSibling)}function fs(){On=kn=null,Bt=!1}function Ic(t){ei===null?ei=[t]:ei.push(t)}var sx=R.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var h=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var k=h.refs;w===null?delete k[m]:k[m]=w},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function No(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Sh(t){var i=t._init;return i(t._payload)}function Mh(t){function i(ee,X){if(t){var ie=ee.deletions;ie===null?(ee.deletions=[X],ee.flags|=16):ie.push(X)}}function a(ee,X){if(!t)return null;for(;X!==null;)i(ee,X),X=X.sibling;return null}function l(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function h(ee,X){return ee=dr(ee,X),ee.index=0,ee.sibling=null,ee}function m(ee,X,ie){return ee.index=ie,t?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<X?(ee.flags|=2,X):ie):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function w(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,X,ie,Ce){return X===null||X.tag!==6?(X=Eu(ie,ee.mode,Ce),X.return=ee,X):(X=h(X,ie),X.return=ee,X)}function G(ee,X,ie,Ce){var $e=ie.type;return $e===O?be(ee,X,ie.props.children,Ce,ie.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&Sh($e)===X.type)?(Ce=h(X,ie.props),Ce.ref=ya(ee,X,ie),Ce.return=ee,Ce):(Ce=Jo(ie.type,ie.key,ie.props,null,ee.mode,Ce),Ce.ref=ya(ee,X,ie),Ce.return=ee,Ce)}function ue(ee,X,ie,Ce){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=Tu(ie,ee.mode,Ce),X.return=ee,X):(X=h(X,ie.children||[]),X.return=ee,X)}function be(ee,X,ie,Ce,$e){return X===null||X.tag!==7?(X=kr(ie,ee.mode,Ce,$e),X.return=ee,X):(X=h(X,ie),X.return=ee,X)}function we(ee,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,ee.mode,ie),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case B:return ie=Jo(X.type,X.key,X.props,null,ee.mode,ie),ie.ref=ya(ee,null,X),ie.return=ee,ie;case z:return X=Tu(X,ee.mode,ie),X.return=ee,X;case Z:var Ce=X._init;return we(ee,Ce(X._payload),ie)}if(Ge(X)||le(X))return X=kr(X,ee.mode,ie,null),X.return=ee,X;No(ee,X)}return null}function Me(ee,X,ie,Ce){var $e=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return $e!==null?null:k(ee,X,""+ie,Ce);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===$e?G(ee,X,ie,Ce):null;case z:return ie.key===$e?ue(ee,X,ie,Ce):null;case Z:return $e=ie._init,Me(ee,X,$e(ie._payload),Ce)}if(Ge(ie)||le(ie))return $e!==null?null:be(ee,X,ie,Ce,null);No(ee,ie)}return null}function ke(ee,X,ie,Ce,$e){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ee=ee.get(ie)||null,k(X,ee,""+Ce,$e);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case B:return ee=ee.get(Ce.key===null?ie:Ce.key)||null,G(X,ee,Ce,$e);case z:return ee=ee.get(Ce.key===null?ie:Ce.key)||null,ue(X,ee,Ce,$e);case Z:var et=Ce._init;return ke(ee,X,ie,et(Ce._payload),$e)}if(Ge(Ce)||le(Ce))return ee=ee.get(ie)||null,be(X,ee,Ce,$e,null);No(X,Ce)}return null}function He(ee,X,ie,Ce){for(var $e=null,et=null,tt=X,st=X=0,on=null;tt!==null&&st<ie.length;st++){tt.index>st?(on=tt,tt=null):on=tt.sibling;var Tt=Me(ee,tt,ie[st],Ce);if(Tt===null){tt===null&&(tt=on);break}t&&tt&&Tt.alternate===null&&i(ee,tt),X=m(Tt,X,st),et===null?$e=Tt:et.sibling=Tt,et=Tt,tt=on}if(st===ie.length)return a(ee,tt),Bt&&Nr(ee,st),$e;if(tt===null){for(;st<ie.length;st++)tt=we(ee,ie[st],Ce),tt!==null&&(X=m(tt,X,st),et===null?$e=tt:et.sibling=tt,et=tt);return Bt&&Nr(ee,st),$e}for(tt=l(ee,tt);st<ie.length;st++)on=ke(tt,ee,st,ie[st],Ce),on!==null&&(t&&on.alternate!==null&&tt.delete(on.key===null?st:on.key),X=m(on,X,st),et===null?$e=on:et.sibling=on,et=on);return t&&tt.forEach(function(fr){return i(ee,fr)}),Bt&&Nr(ee,st),$e}function qe(ee,X,ie,Ce){var $e=le(ie);if(typeof $e!="function")throw Error(n(150));if(ie=$e.call(ie),ie==null)throw Error(n(151));for(var et=$e=null,tt=X,st=X=0,on=null,Tt=ie.next();tt!==null&&!Tt.done;st++,Tt=ie.next()){tt.index>st?(on=tt,tt=null):on=tt.sibling;var fr=Me(ee,tt,Tt.value,Ce);if(fr===null){tt===null&&(tt=on);break}t&&tt&&fr.alternate===null&&i(ee,tt),X=m(fr,X,st),et===null?$e=fr:et.sibling=fr,et=fr,tt=on}if(Tt.done)return a(ee,tt),Bt&&Nr(ee,st),$e;if(tt===null){for(;!Tt.done;st++,Tt=ie.next())Tt=we(ee,Tt.value,Ce),Tt!==null&&(X=m(Tt,X,st),et===null?$e=Tt:et.sibling=Tt,et=Tt);return Bt&&Nr(ee,st),$e}for(tt=l(ee,tt);!Tt.done;st++,Tt=ie.next())Tt=ke(tt,ee,st,Tt.value,Ce),Tt!==null&&(t&&Tt.alternate!==null&&tt.delete(Tt.key===null?st:Tt.key),X=m(Tt,X,st),et===null?$e=Tt:et.sibling=Tt,et=Tt);return t&&tt.forEach(function(Ox){return i(ee,Ox)}),Bt&&Nr(ee,st),$e}function qt(ee,X,ie,Ce){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var $e=ie.key,et=X;et!==null;){if(et.key===$e){if($e=ie.type,$e===O){if(et.tag===7){a(ee,et.sibling),X=h(et,ie.props.children),X.return=ee,ee=X;break e}}else if(et.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&Sh($e)===et.type){a(ee,et.sibling),X=h(et,ie.props),X.ref=ya(ee,et,ie),X.return=ee,ee=X;break e}a(ee,et);break}else i(ee,et);et=et.sibling}ie.type===O?(X=kr(ie.props.children,ee.mode,Ce,ie.key),X.return=ee,ee=X):(Ce=Jo(ie.type,ie.key,ie.props,null,ee.mode,Ce),Ce.ref=ya(ee,X,ie),Ce.return=ee,ee=Ce)}return w(ee);case z:e:{for(et=ie.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){a(ee,X.sibling),X=h(X,ie.children||[]),X.return=ee,ee=X;break e}else{a(ee,X);break}else i(ee,X);X=X.sibling}X=Tu(ie,ee.mode,Ce),X.return=ee,ee=X}return w(ee);case Z:return et=ie._init,qt(ee,X,et(ie._payload),Ce)}if(Ge(ie))return He(ee,X,ie,Ce);if(le(ie))return qe(ee,X,ie,Ce);No(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,X!==null&&X.tag===6?(a(ee,X.sibling),X=h(X,ie),X.return=ee,ee=X):(a(ee,X),X=Eu(ie,ee.mode,Ce),X.return=ee,ee=X),w(ee)):a(ee,X)}return qt}var hs=Mh(!0),bh=Mh(!1),Ro=tr(null),Po=null,ps=null,Uc=null;function Fc(){Uc=ps=Po=null}function kc(t){var i=Ro.current;Ot(Ro),t._currentValue=i}function Oc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ms(t,i){Po=t,Uc=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(Uc!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Po===null)throw Error(n(308));ps=t,Po.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function zc(t){Rr===null?Rr=[t]:Rr.push(t)}function wh(t,i,a,l){var h=i.interleaved;return h===null?(a.next=a,zc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ri(t,l)}function Ri(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var rr=!1;function Bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(wt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,Ri(t,a)}return h=l.interleaved,h===null?(i.next=i,zc(l)):(i.next=h.next,h.next=i),l.interleaved=i,Ri(t,a)}function Lo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,rn(t,a)}}function Th(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Do(t,i,a,l){var h=t.updateQueue;rr=!1;var m=h.firstBaseUpdate,w=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var G=k,ue=G.next;G.next=null,w===null?m=ue:w.next=ue,w=G;var be=t.alternate;be!==null&&(be=be.updateQueue,k=be.lastBaseUpdate,k!==w&&(k===null?be.firstBaseUpdate=ue:k.next=ue,be.lastBaseUpdate=G))}if(m!==null){var we=h.baseState;w=0,be=ue=G=null,k=m;do{var Me=k.lane,ke=k.eventTime;if((l&Me)===Me){be!==null&&(be=be.next={eventTime:ke,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var He=t,qe=k;switch(Me=i,ke=a,qe.tag){case 1:if(He=qe.payload,typeof He=="function"){we=He.call(ke,we,Me);break e}we=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=qe.payload,Me=typeof He=="function"?He.call(ke,we,Me):He,Me==null)break e;we=re({},we,Me);break e;case 2:rr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,Me=h.effects,Me===null?h.effects=[k]:Me.push(k))}else ke={eventTime:ke,lane:Me,tag:k.tag,payload:k.payload,callback:k.callback,next:null},be===null?(ue=be=ke,G=we):be=be.next=ke,w|=Me;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;Me=k,k=Me.next,Me.next=null,h.lastBaseUpdate=Me,h.shared.pending=null}}while(!0);if(be===null&&(G=we),h.baseState=G,h.firstBaseUpdate=ue,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);Dr|=w,t.lanes=w,t.memoizedState=we}}function Ch(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],h=l.callback;if(h!==null){if(l.callback=null,l=a,typeof h!="function")throw Error(n(191,h));h.call(l)}}}var Sa={},xi=tr(Sa),Ma=tr(Sa),ba=tr(Sa);function Pr(t){if(t===Sa)throw Error(n(174));return t}function jc(t,i){switch(Ut(ba,i),Ut(Ma,t),Ut(xi,Sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Xe(i,t)}Ot(xi),Ut(xi,i)}function gs(){Ot(xi),Ot(Ma),Ot(ba)}function Ah(t){Pr(ba.current);var i=Pr(xi.current),a=Xe(i,t.type);i!==a&&(Ut(Ma,t),Ut(xi,a))}function Vc(t){Ma.current===t&&(Ot(xi),Ot(Ma))}var Vt=tr(0);function Io(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Gc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Uo=R.ReactCurrentDispatcher,Wc=R.ReactCurrentBatchConfig,Lr=0,Ht=null,Qt=null,sn=null,Fo=!1,wa=!1,Ea=0,ax=0;function gn(){throw Error(n(321))}function Xc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Jn(t[a],i[a]))return!1;return!0}function qc(t,i,a,l,h,m){if(Lr=m,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Uo.current=t===null||t.memoizedState===null?ux:dx,t=a(l,h),wa){m=0;do{if(wa=!1,Ea=0,25<=m)throw Error(n(301));m+=1,sn=Qt=null,i.updateQueue=null,Uo.current=fx,t=a(l,h)}while(wa)}if(Uo.current=zo,i=Qt!==null&&Qt.next!==null,Lr=0,sn=Qt=Ht=null,Fo=!1,i)throw Error(n(300));return t}function $c(){var t=Ea!==0;return Ea=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=t:sn=sn.next=t,sn}function $n(){if(Qt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Ht.memoizedState=sn=t:sn=sn.next=t}return sn}function Ta(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Qt,h=l.baseQueue,m=a.pending;if(m!==null){if(h!==null){var w=h.next;h.next=m.next,m.next=w}l.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,l=l.baseState;var k=w=null,G=null,ue=m;do{var be=ue.lane;if((Lr&be)===be)G!==null&&(G=G.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),l=ue.hasEagerState?ue.eagerState:t(l,ue.action);else{var we={lane:be,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};G===null?(k=G=we,w=l):G=G.next=we,Ht.lanes|=be,Dr|=be}ue=ue.next}while(ue!==null&&ue!==m);G===null?w=l:G.next=k,Jn(l,i.memoizedState)||(Nn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=G,a.lastRenderedState=l}if(t=a.interleaved,t!==null){h=t;do m=h.lane,Ht.lanes|=m,Dr|=m,h=h.next;while(h!==t)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Kc(t){var i=$n(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do m=t(m,w.action),w=w.next;while(w!==h);Jn(m,i.memoizedState)||(Nn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function Nh(){}function Rh(t,i){var a=Ht,l=$n(),h=i(),m=!Jn(l.memoizedState,h);if(m&&(l.memoizedState=h,Nn=!0),l=l.queue,Zc(Dh.bind(null,a,l,t),[t]),l.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Ca(9,Lh.bind(null,a,l,h,i),void 0,null),an===null)throw Error(n(349));(Lr&30)!==0||Ph(a,i,h)}return h}function Ph(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Lh(t,i,a,l){i.value=a,i.getSnapshot=l,Ih(i)&&Uh(t)}function Dh(t,i,a){return a(function(){Ih(i)&&Uh(t)})}function Ih(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Jn(t,a)}catch{return!0}}function Uh(t){var i=Ri(t,1);i!==null&&ri(i,t,1,-1)}function Fh(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},i.queue=t,t=t.dispatch=cx.bind(null,Ht,t),[i.memoizedState,t]}function Ca(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function kh(){return $n().memoizedState}function ko(t,i,a,l){var h=vi();Ht.flags|=t,h.memoizedState=Ca(1|i,a,void 0,l===void 0?null:l)}function Oo(t,i,a,l){var h=$n();l=l===void 0?null:l;var m=void 0;if(Qt!==null){var w=Qt.memoizedState;if(m=w.destroy,l!==null&&Xc(l,w.deps)){h.memoizedState=Ca(i,a,m,l);return}}Ht.flags|=t,h.memoizedState=Ca(1|i,a,m,l)}function Oh(t,i){return ko(8390656,8,t,i)}function Zc(t,i){return Oo(2048,8,t,i)}function zh(t,i){return Oo(4,2,t,i)}function Bh(t,i){return Oo(4,4,t,i)}function jh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Vh(t,i,a){return a=a!=null?a.concat([t]):null,Oo(4,4,jh.bind(null,i,t),a)}function Qc(){}function Hh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Xc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Gh(t,i){var a=$n();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Xc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Wh(t,i,a){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=a):(Jn(a,i)||(a=It(),Ht.lanes|=a,Dr|=a,t.baseState=!0),i)}function ox(t,i){var a=bt;bt=a!==0&&4>a?a:4,t(!0);var l=Wc.transition;Wc.transition={};try{t(!1),i()}finally{bt=a,Wc.transition=l}}function Xh(){return $n().memoizedState}function lx(t,i,a){var l=cr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},qh(t))$h(i,a);else if(a=wh(t,i,a,l),a!==null){var h=wn();ri(a,t,l,h),Yh(a,i,l)}}function cx(t,i,a){var l=cr(t),h={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(qh(t))$h(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,k=m(w,a);if(h.hasEagerState=!0,h.eagerState=k,Jn(k,w)){var G=i.interleaved;G===null?(h.next=h,zc(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=wh(t,i,h,l),a!==null&&(h=wn(),ri(a,t,l,h),Yh(a,i,l))}}function qh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function $h(t,i){wa=Fo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Yh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,rn(t,a)}}var zo={readContext:qn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},ux={readContext:qn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Oh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,ko(4194308,4,jh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ko(4194308,4,t,i)},useInsertionEffect:function(t,i){return ko(4,2,t,i)},useMemo:function(t,i){var a=vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=vi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=lx.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:Fh,useDebugValue:Qc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Fh(!1),i=t[0];return t=ox.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Ht,h=vi();if(Bt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),an===null)throw Error(n(349));(Lr&30)!==0||Ph(l,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Oh(Dh.bind(null,l,m,t),[t]),l.flags|=2048,Ca(9,Lh.bind(null,l,m,a,i),void 0,null),a},useId:function(){var t=vi(),i=an.identifierPrefix;if(Bt){var a=Ni,l=Ai;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=ax++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},dx={readContext:qn,useCallback:Hh,useContext:qn,useEffect:Zc,useImperativeHandle:Vh,useInsertionEffect:zh,useLayoutEffect:Bh,useMemo:Gh,useReducer:Yc,useRef:kh,useState:function(){return Yc(Ta)},useDebugValue:Qc,useDeferredValue:function(t){var i=$n();return Wh(i,Qt.memoizedState,t)},useTransition:function(){var t=Yc(Ta)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1},fx={readContext:qn,useCallback:Hh,useContext:qn,useEffect:Zc,useImperativeHandle:Vh,useInsertionEffect:zh,useLayoutEffect:Bh,useMemo:Gh,useReducer:Kc,useRef:kh,useState:function(){return Kc(Ta)},useDebugValue:Qc,useDeferredValue:function(t){var i=$n();return Qt===null?i.memoizedState=t:Wh(i,Qt.memoizedState,t)},useTransition:function(){var t=Kc(Ta)[0],i=$n().memoizedState;return[t,i]},useMutableSource:Nh,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Jc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:re({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=wn(),h=cr(t),m=Pi(l,h);m.payload=i,a!=null&&(m.callback=a),i=sr(t,m,h),i!==null&&(ri(i,t,h,l),Lo(i,t,h))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=wn(),h=cr(t),m=Pi(l,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=sr(t,m,h),i!==null&&(ri(i,t,h,l),Lo(i,t,h))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=wn(),l=cr(t),h=Pi(a,l);h.tag=2,i!=null&&(h.callback=i),i=sr(t,h,l),i!==null&&(ri(i,t,l,a),Lo(i,t,l))}};function Kh(t,i,a,l,h,m,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,w):i.prototype&&i.prototype.isPureReactComponent?!ha(a,l)||!ha(h,m):!0}function Zh(t,i,a){var l=!1,h=nr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(h=An(i)?Cr:mn.current,l=i.contextTypes,m=(l=l!=null)?cs(t,h):nr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=m),i}function Qh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function eu(t,i,a,l){var h=t.stateNode;h.props=a,h.state=t.memoizedState,h.refs={},Bc(t);var m=i.contextType;typeof m=="object"&&m!==null?h.context=qn(m):(m=An(i)?Cr:mn.current,h.context=cs(t,m)),h.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Jc(t,i,m,a),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Bo.enqueueReplaceState(h,h.state,null),Do(t,a,h,l),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var a="",l=i;do a+=me(l),l=l.return;while(l);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:h,digest:null}}function tu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function nu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var hx=typeof WeakMap=="function"?WeakMap:Map;function Jh(t,i,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){qo||(qo=!0,xu=l),nu(t,i)},a}function ep(t,i,a){a=Pi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var h=i.value;a.payload=function(){return l(h)},a.callback=function(){nu(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){nu(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function tp(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new hx;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(h.add(a),t=Cx.bind(null,t,i,a),i.then(t,t))}function np(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ip(t,i,a,l,h){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pi(-1,1),i.tag=2,sr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var px=R.ReactCurrentOwner,Nn=!1;function bn(t,i,a,l){i.child=t===null?bh(i,null,a,l):hs(i,t.child,a,l)}function rp(t,i,a,l,h){a=a.render;var m=i.ref;return ms(i,h),l=qc(t,i,a,l,m,h),a=$c(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Li(t,i,h)):(Bt&&a&&Rc(i),i.flags|=1,bn(t,i,l,h),i.child)}function sp(t,i,a,l,h){if(t===null){var m=a.type;return typeof m=="function"&&!wu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,ap(t,i,m,l,h)):(t=Jo(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&h)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(w,l)&&t.ref===i.ref)return Li(t,i,h)}return i.flags|=1,t=dr(m,l),t.ref=i.ref,t.return=i,i.child=t}function ap(t,i,a,l,h){if(t!==null){var m=t.memoizedProps;if(ha(m,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=m,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Li(t,i,h)}return iu(t,i,a,l,h)}function op(t,i,a){var l=i.pendingProps,h=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(_s,zn),zn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(_s,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,Ut(_s,zn),zn|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,Ut(_s,zn),zn|=l;return bn(t,i,h,a),i.child}function lp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function iu(t,i,a,l,h){var m=An(a)?Cr:mn.current;return m=cs(i,m),ms(i,h),a=qc(t,i,a,l,m,h),l=$c(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Li(t,i,h)):(Bt&&l&&Rc(i),i.flags|=1,bn(t,i,a,h),i.child)}function cp(t,i,a,l,h){if(An(a)){var m=!0;wo(i)}else m=!1;if(ms(i,h),i.stateNode===null)Vo(t,i),Zh(i,a,l),eu(i,a,l,h),l=!0;else if(t===null){var w=i.stateNode,k=i.memoizedProps;w.props=k;var G=w.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=qn(ue):(ue=An(a)?Cr:mn.current,ue=cs(i,ue));var be=a.getDerivedStateFromProps,we=typeof be=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==l||G!==ue)&&Qh(i,w,l,ue),rr=!1;var Me=i.memoizedState;w.state=Me,Do(i,l,w,h),G=i.memoizedState,k!==l||Me!==G||Cn.current||rr?(typeof be=="function"&&(Jc(i,a,be,l),G=i.memoizedState),(k=rr||Kh(i,a,k,l,Me,G,ue))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=G),w.props=l,w.state=G,w.context=ue,l=k):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Eh(t,i),k=i.memoizedProps,ue=i.type===i.elementType?k:ti(i.type,k),w.props=ue,we=i.pendingProps,Me=w.context,G=a.contextType,typeof G=="object"&&G!==null?G=qn(G):(G=An(a)?Cr:mn.current,G=cs(i,G));var ke=a.getDerivedStateFromProps;(be=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==we||Me!==G)&&Qh(i,w,l,G),rr=!1,Me=i.memoizedState,w.state=Me,Do(i,l,w,h);var He=i.memoizedState;k!==we||Me!==He||Cn.current||rr?(typeof ke=="function"&&(Jc(i,a,ke,l),He=i.memoizedState),(ue=rr||Kh(i,a,ue,l,Me,He,G)||!1)?(be||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,He,G),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,He,G)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),w.props=l,w.state=He,w.context=G,l=ue):(typeof w.componentDidUpdate!="function"||k===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),l=!1)}return ru(t,i,a,l,m,h)}function ru(t,i,a,l,h,m){lp(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return h&&ph(i,a,!1),Li(t,i,m);l=i.stateNode,px.current=i;var k=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=hs(i,t.child,null,m),i.child=hs(i,null,k,m)):bn(t,i,k,m),i.memoizedState=l.state,h&&ph(i,a,!0),i.child}function up(t){var i=t.stateNode;i.pendingContext?fh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&fh(t,i.context,!1),jc(t,i.containerInfo)}function dp(t,i,a,l,h){return fs(),Ic(h),i.flags|=256,bn(t,i,a,l),i.child}var su={dehydrated:null,treeContext:null,retryLane:0};function au(t){return{baseLanes:t,cachePool:null,transitions:null}}function fp(t,i,a){var l=i.pendingProps,h=Vt.current,m=!1,w=(i.flags&128)!==0,k;if((k=w)||(k=t!==null&&t.memoizedState===null?!1:(h&2)!==0),k?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Ut(Vt,h&1),t===null)return Dc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,m?(l=i.mode,m=i.child,w={mode:"hidden",children:w},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=el(w,l,0,null),t=kr(t,l,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=au(a),i.memoizedState=su,t):ou(i,w));if(h=t.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return mx(t,i,w,l,k,h,a);if(m){m=l.fallback,w=i.mode,h=t.child,k=h.sibling;var G={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==h?(l=i.child,l.childLanes=0,l.pendingProps=G,i.deletions=null):(l=dr(h,G),l.subtreeFlags=h.subtreeFlags&14680064),k!==null?m=dr(k,m):(m=kr(m,w,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,w=t.child.memoizedState,w=w===null?au(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=t.childLanes&~a,i.memoizedState=su,l}return m=t.child,t=m.sibling,l=dr(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function ou(t,i){return i=el({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function jo(t,i,a,l){return l!==null&&Ic(l),hs(i,t.child,null,a),t=ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function mx(t,i,a,l,h,m,w){if(a)return i.flags&256?(i.flags&=-257,l=tu(Error(n(422))),jo(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,h=i.mode,l=el({mode:"visible",children:l.children},h,0,null),m=kr(m,h,w,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,w),i.child.memoizedState=au(w),i.memoizedState=su,m);if((i.mode&1)===0)return jo(t,i,w,null);if(h.data==="$!"){if(l=h.nextSibling&&h.nextSibling.dataset,l)var k=l.dgst;return l=k,m=Error(n(419)),l=tu(m,l,void 0),jo(t,i,w,l)}if(k=(w&t.childLanes)!==0,Nn||k){if(l=an,l!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(l.suspendedLanes|w))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Ri(t,h),ri(l,t,h,-1))}return bu(),l=tu(Error(n(421))),jo(t,i,w,l)}return h.data==="$?"?(i.flags|=128,i.child=t.child,i=Ax.bind(null,t),h._reactRetry=i,null):(t=m.treeContext,On=er(h.nextSibling),kn=i,Bt=!0,ei=null,t!==null&&(Wn[Xn++]=Ai,Wn[Xn++]=Ni,Wn[Xn++]=Ar,Ai=t.id,Ni=t.overflow,Ar=i),i=ou(i,l.children),i.flags|=4096,i)}function hp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Oc(t.return,i,a)}function lu(t,i,a,l,h){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=h)}function pp(t,i,a){var l=i.pendingProps,h=l.revealOrder,m=l.tail;if(bn(t,i,l.children,a),l=Vt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,a,i);else if(t.tag===19)hp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(Vt,l),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Io(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),lu(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Io(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}lu(i,!0,a,null,m);break;case"together":lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Vo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=dr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=dr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function gx(t,i,a){switch(i.tag){case 3:up(i),fs();break;case 5:Ah(i);break;case 1:An(i.type)&&wo(i);break;case 4:jc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,h=i.memoizedProps.value;Ut(Ro,l._currentValue),l._currentValue=h;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(Vt,Vt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?fp(t,i,a):(Ut(Vt,Vt.current&1),t=Li(t,i,a),t!==null?t.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return pp(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ut(Vt,Vt.current),l)break;return null;case 22:case 23:return i.lanes=0,op(t,i,a)}return Li(t,i,a)}var mp,cu,gp,xp;mp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},cu=function(){},gp=function(t,i,a,l){var h=t.memoizedProps;if(h!==l){t=i.stateNode,Pr(xi.current);var m=null;switch(a){case"input":h=H(t,h),l=H(t,l),m=[];break;case"select":h=re({},h,{value:void 0}),l=re({},l,{value:void 0}),m=[];break;case"textarea":h=T(t,h),l=T(t,l),m=[];break;default:typeof h.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=So)}ft(a,l);var w;a=null;for(ue in h)if(!l.hasOwnProperty(ue)&&h.hasOwnProperty(ue)&&h[ue]!=null)if(ue==="style"){var k=h[ue];for(w in k)k.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in l){var G=l[ue];if(k=h!=null?h[ue]:void 0,l.hasOwnProperty(ue)&&G!==k&&(G!=null||k!=null))if(ue==="style")if(k){for(w in k)!k.hasOwnProperty(w)||G&&G.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in G)G.hasOwnProperty(w)&&k[w]!==G[w]&&(a||(a={}),a[w]=G[w])}else a||(m||(m=[]),m.push(ue,a)),a=G;else ue==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,k=k?k.__html:void 0,G!=null&&k!==G&&(m=m||[]).push(ue,G)):ue==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(ue,""+G):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(G!=null&&ue==="onScroll"&&kt("scroll",t),m||k===G||(m=[])):(m=m||[]).push(ue,G))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},xp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Aa(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&14680064,l|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function xx(t,i,a){var l=i.pendingProps;switch(Pc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return An(i.type)&&bo(),xn(i),null;case 3:return l=i.stateNode,gs(),Ot(Cn),Ot(mn),Gc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(yu(ei),ei=null))),cu(t,i),xn(i),null;case 5:Vc(i);var h=Pr(ba.current);if(a=i.type,t!==null&&i.stateNode!=null)gp(t,i,a,l,h),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Pr(xi.current),Ao(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[gi]=i,l[va]=m,t=(i.mode&1)!==0,a){case"dialog":kt("cancel",l),kt("close",l);break;case"iframe":case"object":case"embed":kt("load",l);break;case"video":case"audio":for(h=0;h<ma.length;h++)kt(ma[h],l);break;case"source":kt("error",l);break;case"img":case"image":case"link":kt("error",l),kt("load",l);break;case"details":kt("toggle",l);break;case"input":Kt(l,m),kt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},kt("invalid",l);break;case"textarea":se(l,m),kt("invalid",l)}ft(a,m),h=null;for(var w in m)if(m.hasOwnProperty(w)){var k=m[w];w==="children"?typeof k=="string"?l.textContent!==k&&(m.suppressHydrationWarning!==!0&&yo(l.textContent,k,t),h=["children",k]):typeof k=="number"&&l.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&yo(l.textContent,k,t),h=["children",""+k]):o.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&kt("scroll",l)}switch(a){case"input":Rt(l),Ke(l,m,!0);break;case"textarea":Rt(l),Se(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=So)}l=h,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[gi]=i,t[va]=l,mp(t,i,!1,!1),i.stateNode=t;e:{switch(w=ae(a,l),a){case"dialog":kt("cancel",t),kt("close",t),h=l;break;case"iframe":case"object":case"embed":kt("load",t),h=l;break;case"video":case"audio":for(h=0;h<ma.length;h++)kt(ma[h],t);h=l;break;case"source":kt("error",t),h=l;break;case"img":case"image":case"link":kt("error",t),kt("load",t),h=l;break;case"details":kt("toggle",t),h=l;break;case"input":Kt(t,l),h=H(t,l),kt("invalid",t);break;case"option":h=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},h=re({},l,{value:void 0}),kt("invalid",t);break;case"textarea":se(t,l),h=T(t,l),kt("invalid",t);break;default:h=l}ft(a,h),k=h;for(m in k)if(k.hasOwnProperty(m)){var G=k[m];m==="style"?nt(t,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Ue(t,G)):m==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&dt(t,G):typeof G=="number"&&dt(t,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?G!=null&&m==="onScroll"&&kt("scroll",t):G!=null&&D(t,m,G,w))}switch(a){case"input":Rt(t),Ke(t,l,!1);break;case"textarea":Rt(t),Se(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ne(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?L(t,!!l.multiple,m,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=So)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)xp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Pr(ba.current),Pr(xi.current),Ao(i)){if(l=i.stateNode,a=i.memoizedProps,l[gi]=i,(m=l.nodeValue!==a)&&(t=kn,t!==null))switch(t.tag){case 3:yo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yo(l.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[gi]=i,i.stateNode=l}return xn(i),null;case 13:if(Ot(Vt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)yh(),fs(),i.flags|=98560,m=!1;else if(m=Ao(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[gi]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),m=!1}else ei!==null&&(yu(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Vt.current&1)!==0?Jt===0&&(Jt=3):bu())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return gs(),cu(t,i),t===null&&ga(i.stateNode.containerInfo),xn(i),null;case 10:return kc(i.type._context),xn(i),null;case 17:return An(i.type)&&bo(),xn(i),null;case 19:if(Ot(Vt),m=i.memoizedState,m===null)return xn(i),null;if(l=(i.flags&128)!==0,w=m.rendering,w===null)if(l)Aa(m,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Io(t),w!==null){for(i.flags|=128,Aa(m,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,t=l,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,t=w.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ut(Vt,Vt.current&1|2),i.child}t=t.sibling}m.tail!==null&&te()>ys&&(i.flags|=128,l=!0,Aa(m,!1),i.lanes=4194304)}else{if(!l)if(t=Io(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Aa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Bt)return xn(i),null}else 2*te()-m.renderingStartTime>ys&&a!==1073741824&&(i.flags|=128,l=!0,Aa(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=te(),i.sibling=null,a=Vt.current,Ut(Vt,l?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return Mu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(zn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function vx(t,i){switch(Pc(i),i.tag){case 1:return An(i.type)&&bo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Ot(Cn),Ot(mn),Gc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Vc(i),null;case 13:if(Ot(Vt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Vt),null;case 4:return gs(),null;case 10:return kc(i.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Ho=!1,vn=!1,_x=typeof WeakSet=="function"?WeakSet:Set,Be=null;function vs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Xt(t,i,l)}else a.current=null}function uu(t,i,a){try{a()}catch(l){Xt(t,i,l)}}var vp=!1;function yx(t,i){if(Mc=lo,t=Kf(),pc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,k=-1,G=-1,ue=0,be=0,we=t,Me=null;t:for(;;){for(var ke;we!==a||h!==0&&we.nodeType!==3||(k=w+h),we!==m||l!==0&&we.nodeType!==3||(G=w+l),we.nodeType===3&&(w+=we.nodeValue.length),(ke=we.firstChild)!==null;)Me=we,we=ke;for(;;){if(we===t)break t;if(Me===a&&++ue===h&&(k=w),Me===m&&++be===l&&(G=w),(ke=we.nextSibling)!==null)break;we=Me,Me=we.parentNode}we=ke}a=k===-1||G===-1?null:{start:k,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:t,selectionRange:a},lo=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var qe=He.memoizedProps,qt=He.memoizedState,ee=i.stateNode,X=ee.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ti(i.type,qe),qt);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){Xt(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=vp,vp=!1,He}function Na(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var h=l=l.next;do{if((h.tag&t)===t){var m=h.destroy;h.destroy=void 0,m!==void 0&&uu(i,a,m)}h=h.next}while(h!==l)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function du(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[va],delete i[Cc],delete i[nx],delete i[ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yp(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=So));else if(l!==4&&(t=t.child,t!==null))for(fu(t,i,a),t=t.sibling;t!==null;)fu(t,i,a),t=t.sibling}function hu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(hu(t,i,a),t=t.sibling;t!==null;)hu(t,i,a),t=t.sibling}var un=null,ni=!1;function ar(t,i,a){for(a=a.child;a!==null;)Mp(t,i,a),a=a.sibling}function Mp(t,i,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 5:vn||vs(a,i);case 6:var l=un,h=ni;un=null,ar(t,i,a),un=l,ni=h,un!==null&&(ni?(t=un,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(ni?(t=un,a=a.stateNode,t.nodeType===8?Tc(t.parentNode,a):t.nodeType===1&&Tc(t,a),oa(t)):Tc(un,a.stateNode));break;case 4:l=un,h=ni,un=a.stateNode.containerInfo,ni=!0,ar(t,i,a),un=l,ni=h;break;case 0:case 11:case 14:case 15:if(!vn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){h=l=l.next;do{var m=h,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&uu(a,i,w),h=h.next}while(h!==l)}ar(t,i,a);break;case 1:if(!vn&&(vs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(k){Xt(a,i,k)}ar(t,i,a);break;case 21:ar(t,i,a);break;case 22:a.mode&1?(vn=(l=vn)||a.memoizedState!==null,ar(t,i,a),vn=l):ar(t,i,a);break;default:ar(t,i,a)}}function bp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new _x),i.forEach(function(l){var h=Nx.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}}function ii(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l];try{var m=t,w=i,k=w;e:for(;k!==null;){switch(k.tag){case 5:un=k.stateNode,ni=!1;break e;case 3:un=k.stateNode.containerInfo,ni=!0;break e;case 4:un=k.stateNode.containerInfo,ni=!0;break e}k=k.return}if(un===null)throw Error(n(160));Mp(m,w,h),un=null,ni=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ue){Xt(h,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wp(i,t),i=i.sibling}function wp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),_i(t),l&4){try{Na(3,t,t.return),Go(3,t)}catch(qe){Xt(t,t.return,qe)}try{Na(5,t,t.return)}catch(qe){Xt(t,t.return,qe)}}break;case 1:ii(i,t),_i(t),l&512&&a!==null&&vs(a,a.return);break;case 5:if(ii(i,t),_i(t),l&512&&a!==null&&vs(a,a.return),t.flags&32){var h=t.stateNode;try{dt(h,"")}catch(qe){Xt(t,t.return,qe)}}if(l&4&&(h=t.stateNode,h!=null)){var m=t.memoizedProps,w=a!==null?a.memoizedProps:m,k=t.type,G=t.updateQueue;if(t.updateQueue=null,G!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&pt(h,m),ae(k,w);var ue=ae(k,m);for(w=0;w<G.length;w+=2){var be=G[w],we=G[w+1];be==="style"?nt(h,we):be==="dangerouslySetInnerHTML"?Ue(h,we):be==="children"?dt(h,we):D(h,be,we,ue)}switch(k){case"input":lt(h,m);break;case"textarea":ve(h,m);break;case"select":var Me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?L(h,!!m.multiple,ke,!1):Me!==!!m.multiple&&(m.defaultValue!=null?L(h,!!m.multiple,m.defaultValue,!0):L(h,!!m.multiple,m.multiple?[]:"",!1))}h[va]=m}catch(qe){Xt(t,t.return,qe)}}break;case 6:if(ii(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,m=t.memoizedProps;try{h.nodeValue=m}catch(qe){Xt(t,t.return,qe)}}break;case 3:if(ii(i,t),_i(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch(qe){Xt(t,t.return,qe)}break;case 4:ii(i,t),_i(t);break;case 13:ii(i,t),_i(t),h=t.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(gu=te())),l&4&&bp(t);break;case 22:if(be=a!==null&&a.memoizedState!==null,t.mode&1?(vn=(ue=vn)||be,ii(i,t),vn=ue):ii(i,t),_i(t),l&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!be&&(t.mode&1)!==0)for(Be=t,be=t.child;be!==null;){for(we=Be=be;Be!==null;){switch(Me=Be,ke=Me.child,Me.tag){case 0:case 11:case 14:case 15:Na(4,Me,Me.return);break;case 1:vs(Me,Me.return);var He=Me.stateNode;if(typeof He.componentWillUnmount=="function"){l=Me,a=Me.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(qe){Xt(l,a,qe)}}break;case 5:vs(Me,Me.return);break;case 22:if(Me.memoizedState!==null){Cp(we);continue}}ke!==null?(ke.return=Me,Be=ke):Cp(we)}be=be.sibling}e:for(be=null,we=t;;){if(we.tag===5){if(be===null){be=we;try{h=we.stateNode,ue?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=we.stateNode,G=we.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null,k.style.display=Qe("display",w))}catch(qe){Xt(t,t.return,qe)}}}else if(we.tag===6){if(be===null)try{we.stateNode.nodeValue=ue?"":we.memoizedProps}catch(qe){Xt(t,t.return,qe)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;be===we&&(be=null),we=we.return}be===we&&(be=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:ii(i,t),_i(t),l&4&&bp(t);break;case 21:break;default:ii(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(yp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var h=l.stateNode;l.flags&32&&(dt(h,""),l.flags&=-33);var m=Sp(t);hu(t,m,h);break;case 3:case 4:var w=l.stateNode.containerInfo,k=Sp(t);fu(t,k,w);break;default:throw Error(n(161))}}catch(G){Xt(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Sx(t,i,a){Be=t,Ep(t)}function Ep(t,i,a){for(var l=(t.mode&1)!==0;Be!==null;){var h=Be,m=h.child;if(h.tag===22&&l){var w=h.memoizedState!==null||Ho;if(!w){var k=h.alternate,G=k!==null&&k.memoizedState!==null||vn;k=Ho;var ue=vn;if(Ho=w,(vn=G)&&!ue)for(Be=h;Be!==null;)w=Be,G=w.child,w.tag===22&&w.memoizedState!==null?Ap(h):G!==null?(G.return=w,Be=G):Ap(h);for(;m!==null;)Be=m,Ep(m),m=m.sibling;Be=h,Ho=k,vn=ue}Tp(t)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Be=m):Tp(t)}}function Tp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Go(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!vn)if(a===null)l.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ti(i.type,a.memoizedProps);l.componentDidUpdate(h,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ch(i,m,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ch(i,w,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var be=ue.memoizedState;if(be!==null){var we=be.dehydrated;we!==null&&oa(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&du(i)}catch(Me){Xt(i,i.return,Me)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function Cp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function Ap(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Go(4,i)}catch(G){Xt(i,a,G)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var h=i.return;try{l.componentDidMount()}catch(G){Xt(i,h,G)}}var m=i.return;try{du(i)}catch(G){Xt(i,m,G)}break;case 5:var w=i.return;try{du(i)}catch(G){Xt(i,w,G)}}}catch(G){Xt(i,i.return,G)}if(i===t){Be=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Be=k;break}Be=i.return}}var Mx=Math.ceil,Wo=R.ReactCurrentDispatcher,pu=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,wt=0,an=null,$t=null,dn=0,zn=0,_s=tr(0),Jt=0,Ra=null,Dr=0,Xo=0,mu=0,Pa=null,Rn=null,gu=0,ys=1/0,Di=null,qo=!1,xu=null,or=null,$o=!1,lr=null,Yo=0,La=0,vu=null,Ko=-1,Zo=0;function wn(){return(wt&6)!==0?te():Ko!==-1?Ko:Ko=te()}function cr(t){return(t.mode&1)===0?1:(wt&2)!==0&&dn!==0?dn&-dn:sx.transition!==null?(Zo===0&&(Zo=It()),Zo):(t=bt,t!==0||(t=window.event,t=t===void 0?16:Rf(t.type)),t)}function ri(t,i,a,l){if(50<La)throw La=0,vu=null,Error(n(185));nn(t,a,l),((wt&2)===0||t!==an)&&(t===an&&((wt&2)===0&&(Xo|=a),Jt===4&&ur(t,dn)),Pn(t,l),a===1&&wt===0&&(i.mode&1)===0&&(ys=te()+500,Eo&&ir()))}function Pn(t,i){var a=t.callbackNode;Mn(t,i);var l=hn(t,t===an?dn:0);if(l===0)a!==null&&A(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&A(a),i===1)t.tag===0?rx(Rp.bind(null,t)):mh(Rp.bind(null,t)),ex(function(){(wt&6)===0&&ir()}),a=null;else{switch(mi(l)){case 1:a=Te;break;case 4:a=Pe;break;case 16:a=Fe;break;case 536870912:a=rt;break;default:a=Fe}a=Op(a,Np.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Np(t,i){if(Ko=-1,Zo=0,(wt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ss()&&t.callbackNode!==a)return null;var l=hn(t,t===an?dn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Qo(t,l);else{i=l;var h=wt;wt|=2;var m=Lp();(an!==t||dn!==i)&&(Di=null,ys=te()+500,Ur(t,i));do try{Ex();break}catch(k){Pp(t,k)}while(!0);Fc(),Wo.current=m,wt=h,$t!==null?i=0:(an=null,dn=0,i=Jt)}if(i!==0){if(i===2&&(h=Ei(t),h!==0&&(l=h,i=_u(t,h))),i===1)throw a=Ra,Ur(t,0),ur(t,l),Pn(t,te()),a;if(i===6)ur(t,l);else{if(h=t.current.alternate,(l&30)===0&&!bx(h)&&(i=Qo(t,l),i===2&&(m=Ei(t),m!==0&&(l=m,i=_u(t,m))),i===1))throw a=Ra,Ur(t,0),ur(t,l),Pn(t,te()),a;switch(t.finishedWork=h,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Rn,Di);break;case 3:if(ur(t,l),(l&130023424)===l&&(i=gu+500-te(),10<i)){if(hn(t,0)!==0)break;if(h=t.suspendedLanes,(h&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=Ec(Fr.bind(null,t,Rn,Di),i);break}Fr(t,Rn,Di);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(i=t.eventTimes,h=-1;0<l;){var w=31-ut(l);m=1<<w,w=i[w],w>h&&(h=w),l&=~m}if(l=h,l=te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Mx(l/1960))-l,10<l){t.timeoutHandle=Ec(Fr.bind(null,t,Rn,Di),l);break}Fr(t,Rn,Di);break;case 5:Fr(t,Rn,Di);break;default:throw Error(n(329))}}}return Pn(t,te()),t.callbackNode===a?Np.bind(null,t):null}function _u(t,i){var a=Pa;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Qo(t,i),t!==2&&(i=Rn,Rn=a,i!==null&&yu(i)),t}function yu(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function bx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var h=a[l],m=h.getSnapshot;h=h.value;try{if(!Jn(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~mu,i&=~Xo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-ut(i),l=1<<a;t[a]=-1,i&=~l}}function Rp(t){if((wt&6)!==0)throw Error(n(327));Ss();var i=hn(t,0);if((i&1)===0)return Pn(t,te()),null;var a=Qo(t,i);if(t.tag!==0&&a===2){var l=Ei(t);l!==0&&(i=l,a=_u(t,l))}if(a===1)throw a=Ra,Ur(t,0),ur(t,i),Pn(t,te()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Rn,Di),Pn(t,te()),null}function Su(t,i){var a=wt;wt|=1;try{return t(i)}finally{wt=a,wt===0&&(ys=te()+500,Eo&&ir())}}function Ir(t){lr!==null&&lr.tag===0&&(wt&6)===0&&Ss();var i=wt;wt|=1;var a=Yn.transition,l=bt;try{if(Yn.transition=null,bt=1,t)return t()}finally{bt=l,Yn.transition=a,wt=i,(wt&6)===0&&ir()}}function Mu(){zn=_s.current,Ot(_s)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,J0(a)),$t!==null)for(a=$t.return;a!==null;){var l=a;switch(Pc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&bo();break;case 3:gs(),Ot(Cn),Ot(mn),Gc();break;case 5:Vc(l);break;case 4:gs();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:kc(l.type._context);break;case 22:case 23:Mu()}a=a.return}if(an=t,$t=t=dr(t.current,null),dn=zn=i,Jt=0,Ra=null,mu=Xo=Dr=0,Rn=Pa=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],l=a.interleaved,l!==null){a.interleaved=null;var h=l.next,m=a.pending;if(m!==null){var w=m.next;m.next=h,l.next=w}a.pending=l}Rr=null}return t}function Pp(t,i){do{var a=$t;try{if(Fc(),Uo.current=zo,Fo){for(var l=Ht.memoizedState;l!==null;){var h=l.queue;h!==null&&(h.pending=null),l=l.next}Fo=!1}if(Lr=0,sn=Qt=Ht=null,wa=!1,Ea=0,pu.current=null,a===null||a.return===null){Jt=1,Ra=i,$t=null;break}e:{var m=t,w=a.return,k=a,G=i;if(i=dn,k.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ue=G,be=k,we=be.tag;if((be.mode&1)===0&&(we===0||we===11||we===15)){var Me=be.alternate;Me?(be.updateQueue=Me.updateQueue,be.memoizedState=Me.memoizedState,be.lanes=Me.lanes):(be.updateQueue=null,be.memoizedState=null)}var ke=np(w);if(ke!==null){ke.flags&=-257,ip(ke,w,k,m,i),ke.mode&1&&tp(m,ue,i),i=ke,G=ue;var He=i.updateQueue;if(He===null){var qe=new Set;qe.add(G),i.updateQueue=qe}else He.add(G);break e}else{if((i&1)===0){tp(m,ue,i),bu();break e}G=Error(n(426))}}else if(Bt&&k.mode&1){var qt=np(w);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),ip(qt,w,k,m,i),Ic(xs(G,k));break e}}m=G=xs(G,k),Jt!==4&&(Jt=2),Pa===null?Pa=[m]:Pa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=Jh(m,G,i);Th(m,ee);break e;case 1:k=G;var X=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(or===null||!or.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=ep(m,k,i);Th(m,Ce);break e}}m=m.return}while(m!==null)}Ip(a)}catch($e){i=$e,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function Lp(){var t=Wo.current;return Wo.current=zo,t===null?zo:t}function bu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||(Dr&268435455)===0&&(Xo&268435455)===0||ur(an,dn)}function Qo(t,i){var a=wt;wt|=2;var l=Lp();(an!==t||dn!==i)&&(Di=null,Ur(t,i));do try{wx();break}catch(h){Pp(t,h)}while(!0);if(Fc(),wt=a,Wo.current=l,$t!==null)throw Error(n(261));return an=null,dn=0,Jt}function wx(){for(;$t!==null;)Dp($t)}function Ex(){for(;$t!==null&&!K();)Dp($t)}function Dp(t){var i=kp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?Ip(t):$t=i,pu.current=null}function Ip(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=xx(a,i,zn),a!==null){$t=a;return}}else{if(a=vx(a,i),a!==null){a.flags&=32767,$t=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Jt===0&&(Jt=5)}function Fr(t,i,a){var l=bt,h=Yn.transition;try{Yn.transition=null,bt=1,Tx(t,i,a,l)}finally{Yn.transition=h,bt=l}return null}function Tx(t,i,a,l){do Ss();while(lr!==null);if((wt&6)!==0)throw Error(n(327));a=t.finishedWork;var h=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(cn(t,m),t===an&&($t=an=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||$o||($o=!0,Op(Fe,function(){return Ss(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var w=bt;bt=1;var k=wt;wt|=4,pu.current=null,yx(t,a),wp(a,t),X0(bc),lo=!!Mc,bc=Mc=null,t.current=a,Sx(a),ce(),wt=k,bt=w,Yn.transition=m}else t.current=a;if($o&&($o=!1,lr=t,Yo=h),m=t.pendingLanes,m===0&&(or=null),_t(a.stateNode),Pn(t,te()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)h=i[a],l(h.value,{componentStack:h.stack,digest:h.digest});if(qo)throw qo=!1,t=xu,xu=null,t;return(Yo&1)!==0&&t.tag!==0&&Ss(),m=t.pendingLanes,(m&1)!==0?t===vu?La++:(La=0,vu=t):La=0,ir(),null}function Ss(){if(lr!==null){var t=mi(Yo),i=Yn.transition,a=bt;try{if(Yn.transition=null,bt=16>t?16:t,lr===null)var l=!1;else{if(t=lr,lr=null,Yo=0,(wt&6)!==0)throw Error(n(331));var h=wt;for(wt|=4,Be=t.current;Be!==null;){var m=Be,w=m.child;if((Be.flags&16)!==0){var k=m.deletions;if(k!==null){for(var G=0;G<k.length;G++){var ue=k[G];for(Be=ue;Be!==null;){var be=Be;switch(be.tag){case 0:case 11:case 15:Na(8,be,m)}var we=be.child;if(we!==null)we.return=be,Be=we;else for(;Be!==null;){be=Be;var Me=be.sibling,ke=be.return;if(_p(be),be===ue){Be=null;break}if(Me!==null){Me.return=ke,Be=Me;break}Be=ke}}}var He=m.alternate;if(He!==null){var qe=He.child;if(qe!==null){He.child=null;do{var qt=qe.sibling;qe.sibling=null,qe=qt}while(qe!==null)}}Be=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Be=w;else e:for(;Be!==null;){if(m=Be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Na(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Be=ee;break e}Be=m.return}}var X=t.current;for(Be=X;Be!==null;){w=Be;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,Be=ie;else e:for(w=X;Be!==null;){if(k=Be,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Go(9,k)}}catch($e){Xt(k,k.return,$e)}if(k===w){Be=null;break e}var Ce=k.sibling;if(Ce!==null){Ce.return=k.return,Be=Ce;break e}Be=k.return}}if(wt=h,ir(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(it,t)}catch{}l=!0}return l}finally{bt=a,Yn.transition=i}}return!1}function Up(t,i,a){i=xs(a,i),i=Jh(t,i,1),t=sr(t,i,1),i=wn(),t!==null&&(nn(t,1,i),Pn(t,i))}function Xt(t,i,a){if(t.tag===3)Up(t,t,a);else for(;i!==null;){if(i.tag===3){Up(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=xs(a,t),t=ep(i,t,1),i=sr(i,t,1),t=wn(),i!==null&&(nn(i,1,t),Pn(i,t));break}}i=i.return}}function Cx(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&a,an===t&&(dn&a)===a&&(Jt===4||Jt===3&&(dn&130023424)===dn&&500>te()-gu?Ur(t,0):mu|=a),Pn(t,i)}function Fp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var a=wn();t=Ri(t,i),t!==null&&(nn(t,i,a),Pn(t,a))}function Ax(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Fp(t,a)}function Nx(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Fp(t,a)}var kp;kp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Nn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,gx(t,i,a);Nn=(t.flags&131072)!==0}else Nn=!1,Bt&&(i.flags&1048576)!==0&&gh(i,Co,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Vo(t,i),t=i.pendingProps;var h=cs(i,mn.current);ms(i,a),h=qc(null,i,l,t,h,a);var m=$c();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(m=!0,wo(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Bc(i),h.updater=Bo,i.stateNode=h,h._reactInternals=i,eu(i,l,t,a),i=ru(null,i,l,!0,m,a)):(i.tag=0,Bt&&m&&Rc(i),bn(null,i,h,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Vo(t,i),t=i.pendingProps,h=l._init,l=h(l._payload),i.type=l,h=i.tag=Px(l),t=ti(l,t),h){case 0:i=iu(null,i,l,t,a);break e;case 1:i=cp(null,i,l,t,a);break e;case 11:i=rp(null,i,l,t,a);break e;case 14:i=sp(null,i,l,ti(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),iu(t,i,l,h,a);case 1:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),cp(t,i,l,h,a);case 3:e:{if(up(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,h=m.element,Eh(t,i),Do(i,l,null,a);var w=i.memoizedState;if(l=w.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=xs(Error(n(423)),i),i=dp(t,i,l,a,h);break e}else if(l!==h){h=xs(Error(n(424)),i),i=dp(t,i,l,a,h);break e}else for(On=er(i.stateNode.containerInfo.firstChild),kn=i,Bt=!0,ei=null,a=bh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),l===h){i=Li(t,i,a);break e}bn(t,i,l,a)}i=i.child}return i;case 5:return Ah(i),t===null&&Dc(i),l=i.type,h=i.pendingProps,m=t!==null?t.memoizedProps:null,w=h.children,wc(l,h)?w=null:m!==null&&wc(l,m)&&(i.flags|=32),lp(t,i),bn(t,i,w,a),i.child;case 6:return t===null&&Dc(i),null;case 13:return fp(t,i,a);case 4:return jc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,a):bn(t,i,l,a),i.child;case 11:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),rp(t,i,l,h,a);case 7:return bn(t,i,i.pendingProps,a),i.child;case 8:return bn(t,i,i.pendingProps.children,a),i.child;case 12:return bn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,h=i.pendingProps,m=i.memoizedProps,w=h.value,Ut(Ro,l._currentValue),l._currentValue=w,m!==null)if(Jn(m.value,w)){if(m.children===h.children&&!Cn.current){i=Li(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){w=m.child;for(var G=k.firstContext;G!==null;){if(G.context===l){if(m.tag===1){G=Pi(-1,a&-a),G.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var be=ue.pending;be===null?G.next=G:(G.next=be.next,be.next=G),ue.pending=G}}m.lanes|=a,G=m.alternate,G!==null&&(G.lanes|=a),Oc(m.return,a,i),k.lanes|=a;break}G=G.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(n(341));w.lanes|=a,k=w.alternate,k!==null&&(k.lanes|=a),Oc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}bn(t,i,h.children,a),i=i.child}return i;case 9:return h=i.type,l=i.pendingProps.children,ms(i,a),h=qn(h),l=l(h),i.flags|=1,bn(t,i,l,a),i.child;case 14:return l=i.type,h=ti(l,i.pendingProps),h=ti(l.type,h),sp(t,i,l,h,a);case 15:return ap(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,h=i.pendingProps,h=i.elementType===l?h:ti(l,h),Vo(t,i),i.tag=1,An(l)?(t=!0,wo(i)):t=!1,ms(i,a),Zh(i,l,h),eu(i,l,h,a),ru(null,i,l,!0,t,a);case 19:return pp(t,i,a);case 22:return op(t,i,a)}throw Error(n(156,i.tag))};function Op(t,i){return so(t,i)}function Rx(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,a,l){return new Rx(t,i,a,l)}function wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Px(t){if(typeof t=="function")return wu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===j)return 14}return 2}function dr(t,i){var a=t.alternate;return a===null?(a=Kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Jo(t,i,a,l,h,m){var w=2;if(l=t,typeof t=="function")wu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case O:return kr(a.children,h,m,i);case V:w=8,h|=8;break;case N:return t=Kn(12,a,i,h|2),t.elementType=N,t.lanes=m,t;case Y:return t=Kn(13,a,i,h),t.elementType=Y,t.lanes=m,t;case de:return t=Kn(19,a,i,h),t.elementType=de,t.lanes=m,t;case oe:return el(a,h,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case U:w=9;break e;case J:w=11;break e;case j:w=14;break e;case Z:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(w,a,i,h),i.elementType=t,i.type=l,i.lanes=m,i}function kr(t,i,a,l){return t=Kn(7,t,l,i),t.lanes=a,t}function el(t,i,a,l){return t=Kn(22,t,l,i),t.elementType=oe,t.lanes=a,t.stateNode={isHidden:!1},t}function Eu(t,i,a){return t=Kn(6,t,null,i),t.lanes=a,t}function Tu(t,i,a){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Lx(t,i,a,l,h){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=l,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Cu(t,i,a,l,h,m,w,k,G){return t=new Lx(t,i,a,k,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(m),t}function Dx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function zp(t){if(!t)return nr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(An(a))return hh(t,a,i)}return i}function Bp(t,i,a,l,h,m,w,k,G){return t=Cu(a,l,!0,t,h,m,w,k,G),t.context=zp(null),a=t.current,l=wn(),h=cr(a),m=Pi(l,h),m.callback=i??null,sr(a,m,h),t.current.lanes=h,nn(t,h,l),Pn(t,l),t}function tl(t,i,a,l){var h=i.current,m=wn(),w=cr(h);return a=zp(a),i.context===null?i.context=a:i.pendingContext=a,i=Pi(m,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=sr(h,i,w),t!==null&&(ri(t,h,w,m),Lo(t,h,w)),w}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Au(t,i){jp(t,i),(t=t.alternate)&&jp(t,i)}function Ix(){return null}var Vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nu(t){this._internalRoot=t}il.prototype.render=Nu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));tl(t,i,null,null)},il.prototype.unmount=Nu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){tl(null,t,null,null)}),i[Ti]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ef();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Zi.length&&i!==0&&i<Zi[a].priority;a++);Zi.splice(a,0,t),a===0&&Af(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function Ux(t,i,a,l,h){if(h){if(typeof l=="function"){var m=l;l=function(){var ue=nl(w);m.call(ue)}}var w=Bp(i,l,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=w,t[Ti]=w.current,ga(t.nodeType===8?t.parentNode:t),Ir(),w}for(;h=t.lastChild;)t.removeChild(h);if(typeof l=="function"){var k=l;l=function(){var ue=nl(G);k.call(ue)}}var G=Cu(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=G,t[Ti]=G.current,ga(t.nodeType===8?t.parentNode:t),Ir(function(){tl(i,G,a,l)}),G}function sl(t,i,a,l,h){var m=a._reactRootContainer;if(m){var w=m;if(typeof h=="function"){var k=h;h=function(){var G=nl(w);k.call(G)}}tl(i,w,t,h)}else w=Ux(a,i,t,h,l);return nl(w)}bf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=vt(i.pendingLanes);a!==0&&(rn(i,a|1),Pn(i,te()),(wt&6)===0&&(ys=te()+500,ir()))}break;case 13:Ir(function(){var l=Ri(t,1);if(l!==null){var h=wn();ri(l,t,1,h)}}),Au(t,1)}},tc=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var a=wn();ri(i,t,134217728,a)}Au(t,134217728)}},wf=function(t){if(t.tag===13){var i=cr(t),a=Ri(t,i);if(a!==null){var l=wn();ri(a,t,i,l)}Au(t,i)}},Ef=function(){return bt},Tf=function(t,i){var a=bt;try{return bt=t,i()}finally{bt=a}},Re=function(t,i,a){switch(i){case"input":if(lt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=Mo(l);if(!h)throw Error(n(90));Pt(l),lt(l,h)}}}break;case"textarea":ve(t,a);break;case"select":i=a.value,i!=null&&L(t,!!a.multiple,i,!1)}},Ft=Su,Zt=Ir;var Fx={usingClientEntryPoint:!1,Events:[_a,os,Mo,De,ot,Su]},Da={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kx={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=io(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{it=al.inject(kx),We=al}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(n(200));return Dx(t,i,null,a)},Ln.createRoot=function(t,i){if(!Ru(t))throw Error(n(299));var a=!1,l="",h=Vp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Cu(t,1,!1,null,null,a,!1,l,h),t[Ti]=i.current,ga(t.nodeType===8?t.parentNode:t),new Nu(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=io(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Ir(t)},Ln.hydrate=function(t,i,a){if(!rl(i))throw Error(n(200));return sl(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!Ru(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,h=!1,m="",w=Vp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Bp(i,null,t,1,a??null,h,!1,m,w),t[Ti]=i.current,ga(t),l)for(t=0;t<l.length;t++)a=l[t],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new il(i)},Ln.render=function(t,i,a){if(!rl(i))throw Error(n(200));return sl(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!rl(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){sl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Ln.unstable_batchedUpdates=Su,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!rl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return sl(t,i,a,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Zp;function Wx(){if(Zp)return Du.exports;Zp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Du.exports=Gx(),Du.exports}var Qp;function Xx(){if(Qp)return ol;Qp=1;var s=Wx();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var qx=Xx();const $x=cg(qx),Jp=(s,e)=>{if(!s)return e;const n=parseFloat(s);return isNaN(n)?e:n},Yx="Via Nomentana 38, 00013 Tor Lupara (RM)",dg="Via Nomentana 38, 00013 Tor Lupara, Fonte Nuova RM",Fu=encodeURIComponent(dg),em="+393401234567".replace(/[^0-9]/g,""),Nt={brand:{name:"VELORA",tagline:"Atelier Botanico",subtitle:"Fiori freschi, piante e composizioni d’autore"},contact:{address:Yx,phone:"+39 06 555 8921".replace(/\s+/g,""),phoneDisplay:"+39 06 555 8921",whatsapp:em,whatsappDirectUrl:`https://wa.me/${em}`,email:"atelier@velora-botanico.it",operatingHours:"08:30 - 20:00",openingDays:"Aperto 7 giorni su 7"},storeLocation:{mapsQuery:dg,googleMapsUrl:`https://www.google.com/maps/search/?api=1&query=${Fu}`,directionsUrl:`https://www.google.com/maps/dir/?api=1&destination=${Fu}&travelmode=driving`,embedUrl:`https://maps.google.com/maps?q=${Fu}&z=16&output=embed`},delivery:{area:"tutta Roma",freeShippingThreshold:Jp("50.0",50),freeShippingEnabled:!1,standardShippingFee:Jp("5.0",5)},api:{baseUrl:"http://localhost:8080/api",useMock:!0}},Dl=[{id:"p1",name:'Bouquet "Alba Provenzale"',slug:"bouquet-alba-provenzale",category:"bouquet",badge:"Bestseller • Mazzo",price:48,originalPrice:55,isPromo:!0,promoDiscountPct:12,stockQuantity:14,desc:"Peonie rosa cipria, ranuncoli freschi, rose inglesi David Austin ed eucalipto profumato.",longDesc:"Ogni stelo viene reciso all'alba e assemblato secondo la tecnica a spirale francese. Il bouquet viaggia avvolto in carta seta idrorepellente con fialetta di riserva d'acqua alle radici per mantenere la turgidità ottimale fino a destinazione.",img:"https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",dimensions:"Altezza 45cm • Diametro 35cm",careInstructions:"Accorciare i gambi di 1cm in obliquo e cambiare l'acqua fresca ogni 2 giorni.",isFeatured:!0},{id:"p2",name:"Monstera in Vaso di Terracotta",slug:"monstera-vaso-terracotta",category:"piante",badge:"Vaso Artigianale",price:44,originalPrice:44,isPromo:!1,stockQuantity:8,desc:"Pianta tropicale purificante h 75cm invasata in terracotta toscana lavorata a mano.",longDesc:"Splendido esemplare di Monstera Deliciosa coltivata biologicamente. Invasata con substrato drenante di perlite e corteccia di pino in autentico coccio toscano traspirante con sottovaso coordinato.",img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",dimensions:"Altezza totale 75cm • Vaso Ø 24cm",careInstructions:"Posizione luminosa senza sole diretto. Bagnare solo a terra asciutta.",isFeatured:!0},{id:"p3",name:'Hat-Box "Velluto Imperiale"',slug:"hat-box-velluto-imperiale",category:"composizioni",badge:"Luxury Box 🔥",price:68,originalPrice:85,isPromo:!0,promoDiscountPct:20,stockQuantity:5,desc:"18 Rose rosse Red Naomi a bocciolo grande in cappelliera rigida avorio con riserva d’acqua.",longDesc:"Un'icona di eleganza senza tempo. Le leggendarie rose olandesi Red Naomi dal profumo vellutato disposte armoniosamente in cappelliera rigida goffrata con logo VELORA impresso a caldo.",img:"https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",dimensions:"Diametro 28cm • Altezza 30cm",careInstructions:"Aggiungere mezza tazza d'acqua al centro della spugna floreale ogni 2 giorni.",isFeatured:!0},{id:"p4",name:'Mazzo "Sole di Campo"',slug:"mazzo-sole-di-campo",category:"bouquet",badge:"Appena Colti",price:39,originalPrice:39,isPromo:!1,stockQuantity:18,desc:"Tulipani doppi, camomilla selvatica, craspedia dorata e rami di ulivo mediterraneo.",longDesc:"L'energia luminosa dei prati mediterranei racchiusa in una creazione campestre spontanea e raffinata. Include nastri di lino grezzo naturale.",img:"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",dimensions:"Altezza 40cm • Diametro 30cm",careInstructions:"Tenere lontano da fonti di calore e frutta in maturazione.",isFeatured:!1},{id:"p5",name:"Orchidea Phalaenopsis in Coppa",slug:"orchidea-phalaenopsis-coppa",category:"piante",badge:"Vaso Ceramica",price:56,originalPrice:65,isPromo:!0,promoDiscountPct:14,stockQuantity:0,desc:"Orchidea bianca a cascata a doppio stelo in vaso di ceramica smaltata verde salvia.",longDesc:"Fiori candidi e duraturi fino a 3 mesi. Piantata con corteccia selezionata in vaso smaltato a mano da mastri ceramisti.",img:"https://images.unsplash.com/photo-1566907225472-514215c9e5cd?auto=format&fit=crop&w=800&q=80",dimensions:"Altezza 60cm • Vaso Ø 18cm",careInstructions:"Immergere il vaso trasparente interno in acqua per 10 minuti a settimana.",isFeatured:!1},{id:"p6",name:'Cuscino Floreale "Candore"',slug:"cuscino-floreale-candore",category:"funebre",badge:"Arte Funebre",price:95,originalPrice:95,isPromo:!1,stockQuantity:10,desc:"Rose bianche avalanche, lilium orientali candidi, lisianthus e fronde nobili con nastro in oro.",longDesc:"Omaggio di profondo cordoglio e dignità. Realizzato su spugna bagnata ad alta densità per garantire freschezza impeccabile per tutta la durata del rito funebre. Nastro in raso con incisione a caldo in lamina d'oro incluso.",img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",dimensions:"Lunghezza 65cm • Larghezza 45cm",careInstructions:"Consegna diretta e puntuale curata dal nostro personale in divisa.",isFeatured:!0,isFuneralTribute:!0},{id:"p7",name:'Corona Solenne "Eternità"',slug:"corona-solenne-eternita",category:"funebre",badge:"Alta Cerimonia",price:165,originalPrice:180,isPromo:!1,stockQuantity:6,desc:"Grande corona circolare con orchidee bianche, rose crema, ulivo e cavalletto in legno.",longDesc:"Struttura circolare maestosa da cerimonia. Include cavalletto in legno laccato e nastro commemorativo doppio in raso con lettere dorate personalizzate.",img:"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",dimensions:"Diametro corona 80cm • Altezza su cavalletto 160cm",isFeatured:!1,isFuneralTribute:!0},{id:"p8",name:"Ficus Lyrata Bambino in Cesta",slug:"ficus-lyrata-cesta-juta",category:"piante",badge:"Tendenza Arredo",price:52,originalPrice:52,isPromo:!1,stockQuantity:7,desc:"Foglie a violino scultoree in coprivaso in fibra naturale di juta intrecciata.",longDesc:"Una delle piante d'appartamento più eleganti e decorative, perfetta per impreziosire living moderni e studi professionali.",img:"https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",dimensions:"Altezza 85cm • Cesta Ø 26cm",isFeatured:!1}],fg=[{id:"promo-spring-2026",title:"Offerte del Giorno Botaniche",subtitle:"Fino al 20% di sconto sui nostri bestseller stagionali",badgeText:"Offerta Lampo 🔥",discountCode:"BOTANICA20",discountPercentage:20,bannerNotice:"⚡ Sconto speciale applicato sulle creazioni selezionate per consegne a Roma e provincia.",active:!0,expiresAt:"Oggi alle 23:59",featuredProductIds:["p1","p3","p5"]}],Ha={async getProducts(s){return await new Promise(e=>setTimeout(e,120)),!s||s==="all"?Dl:s==="promo"?Dl.filter(e=>e.isPromo):Dl.filter(e=>e.category===s)},async getActivePromos(){return fg.filter(s=>s.active)},async submitOrder(s){const e=s.orderId||`VEL-${Math.floor(1e3+Math.random()*9e3)}`,n={...s,orderId:e,status:"CONFIRMED",createdAt:s.createdAt||new Date().toISOString()};try{const r="velora_admin_orders_v1",o=localStorage.getItem(r),c=o?JSON.parse(o):[];c.unshift(n),localStorage.setItem(r,JSON.stringify(c))}catch(r){console.warn("Could not save order to localStorage:",r)}return await new Promise(r=>setTimeout(r,400)),{success:!0,orderId:e,message:"Ordine confermato con successo da VELORA Atelier Botanico!"}},async getOrders(){const s="velora_admin_orders_v1";try{const e=localStorage.getItem(s);if(e)return JSON.parse(e)}catch{}return[]},async updateOrderStatus(s,e){const n="velora_admin_orders_v1";try{const r=localStorage.getItem(n);if(r){const c=JSON.parse(r).map(d=>d.orderId===s?{...d,status:e}:d);localStorage.setItem(n,JSON.stringify(c))}}catch{}return!0},async getSettings(){return null},async updateSettings(s){return!0},generateWhatsAppOrderUrl(s){const n=`🌿 *NUOVO ORDINE VELORA - Atelier Botanico*
--------------------------------
📦 *Articoli ordinati:*
${s.items.map(r=>`• *${r.quantity}x ${r.name}* (${(r.price*r.quantity).toFixed(2)}€)
  _${r.meta}_`).join(`
`)}

💌 *Biglietto a mano:* "${s.greetingCardText||"Nessun messaggio"}"
📍 *Indirizzo:* ${s.customer.deliveryAddress||"Ritiro in bottega"}
📅 *Data e Orario:* ${s.customer.deliveryDate} (${s.customer.timeSlot})
--------------------------------
💰 *Subtotale:* ${s.subtotal.toFixed(2)} €
🚚 *Consegna a Roma:* ${s.shippingFee===0?"GRATIS":`${s.shippingFee.toFixed(2)} €`}
✨ *TOTALE:* ${s.total.toFixed(2)} €
--------------------------------
👤 *Cliente:* ${s.customer.fullName||"Cliente VELORA"}
📞 *Telefono:* ${s.customer.phone||"Non indicato"}`;return`https://wa.me/${Nt.contact.whatsapp}?text=${encodeURIComponent(n)}`}},hg=pe.createContext(void 0),tm="velora_custom_products_v1",nm="velora_announcement_v1",ku="velora_delivery_settings_v1",im="velora_admin_orders_v1",Kx={message:"Consegna espressa a mano garantita in tutta Roma dalla nostra bottega",badge:`${Nt.brand.name}:`,secondaryNotice:"🚚 Consegna climatizzata in tutta Roma • 💌 Biglietto a mano incluso",active:!0,specialEvent:"standard"},Zx=({children:s})=>{const[e,n]=pe.useState(()=>{try{const j=localStorage.getItem(tm);if(j)return JSON.parse(j)}catch(j){console.warn("Could not read products from localStorage",j)}return Dl}),[r,o]=pe.useState(fg),[c,d]=pe.useState("all"),[f,p]=pe.useState(!1),[g,v]=pe.useState(!1),[_,y]=pe.useState(()=>{try{const j=localStorage.getItem(nm);if(j)return JSON.parse(j)}catch(j){console.warn("Could not read announcement from localStorage",j)}return Kx}),[M,b]=pe.useState(()=>{try{const j=localStorage.getItem(ku);if(j)return JSON.parse(j)}catch(j){console.warn("Could not read delivery settings from localStorage",j)}return{standardShippingFee:Nt.delivery.standardShippingFee||5,freeShippingEnabled:!1,freeShippingThreshold:Nt.delivery.freeShippingThreshold||50,deliveryArea:Nt.delivery.area}}),[E,S]=pe.useState(()=>{try{const j=localStorage.getItem(im);if(j)return JSON.parse(j)}catch(j){console.warn("Could not read orders from localStorage",j)}return[]});pe.useEffect(()=>{try{localStorage.setItem(ku,JSON.stringify(M))}catch{}},[M]),pe.useEffect(()=>{try{localStorage.setItem(im,JSON.stringify(E))}catch{}},[E]);const x=async()=>{try{const j=await Ha.getOrders();j&&j.length>=0&&S(j)}catch(j){console.warn("Failed to refresh orders:",j)}},I=async j=>{b(Z=>{const oe={...Z,...j};return localStorage.setItem(ku,JSON.stringify(oe)),oe}),await Ha.updateSettings({standardShippingFee:j.standardShippingFee??M.standardShippingFee,freeShippingEnabled:j.freeShippingEnabled??M.freeShippingEnabled,freeShippingThreshold:j.freeShippingThreshold??M.freeShippingThreshold,deliveryArea:j.deliveryArea??M.deliveryArea})},D=async(j,Z)=>{S(oe=>oe.map(F=>F.orderId===j?{...F,status:Z}:F)),await Ha.updateOrderStatus(j,Z)};pe.useEffect(()=>{try{localStorage.setItem(tm,JSON.stringify(e))}catch(j){console.warn("Failed saving products to localStorage",j)}},[e]),pe.useEffect(()=>{try{localStorage.setItem(nm,JSON.stringify(_))}catch(j){console.warn("Failed saving announcement to localStorage",j)}},[_]);const R=async()=>{p(!0);try{Nt.api.useMock}catch(j){console.error("Error refreshing catalog:",j)}finally{p(!1)}},B=j=>{d(j)},z=j=>e.find(Z=>Z.id===j),O=async j=>{const Z=`p-${Date.now()}`,oe=j.imageUrl||j.img||"",F={...j,id:Z,slug:j.slug||j.name.toLowerCase().replace(/\s+/g,"-"),img:oe,imageUrl:oe};return n(le=>[F,...le]),F},V=async(j,Z)=>{let oe;const F=Z.imageUrl!==void 0?Z.imageUrl:Z.img!==void 0?Z.img:void 0;if(n(le=>le.map(re=>re.id===j?(oe={...re,...Z,...F!==void 0?{img:F,imageUrl:F}:{}},oe):re)),!oe)throw new Error("Product not found");return oe},N=async j=>(n(Z=>Z.filter(oe=>oe.id!==j)),!0),C=async j=>{const Z=e.find(F=>F.id===j);if(!Z)return;const oe=Z.stockQuantity>0?0:10;await V(j,{stockQuantity:oe})},U=async(j,Z,oe,F)=>{const le=e.find(re=>re.id===j);if(le)if(Z){const re=le.originalPrice||le.price,P=oe||Math.round(re*.8),W=F||Math.round((re-P)/re*100);await V(j,{isPromo:!0,price:P,originalPrice:re,promoDiscountPct:W,badge:le.badge.includes("Offerta")?le.badge:`${le.badge} 🔥`})}else{const re=le.originalPrice||le.price;await V(j,{isPromo:!1,price:re,originalPrice:re,promoDiscountPct:void 0,badge:le.badge.replace(" 🔥","")})}},J=j=>{y(Z=>({...Z,...j}))},Y=c==="all"?e:c==="promo"?e.filter(j=>j.isPromo):e.filter(j=>j.category===c),de=r.find(j=>j.active)||null;return u.jsx(hg.Provider,{value:{products:Y,isLoading:f,activeCategory:c,promoOffers:r,activePromo:de,isSolemnMode:g,announcement:_,deliverySettings:M,orders:E,setActiveCategory:d,setIsSolemnMode:v,filterByCategory:B,getProductById:z,refreshCatalog:R,refreshOrders:x,addProduct:O,updateProduct:V,deleteProduct:N,toggleStock:C,toggleOffer:U,updateAnnouncement:J,updateDeliverySettings:I,updateOrderStatus:D},children:s})},Gi=()=>{const s=pe.useContext(hg);if(!s)throw new Error("useCatalog must be used within a CatalogProvider");return s},pg=pe.createContext(void 0),rm="velora_cart_items_v2",Qx=({children:s})=>{const{deliverySettings:e,refreshOrders:n}=Gi(),[r,o]=pe.useState(()=>{try{const fe=localStorage.getItem(rm);if(fe)return JSON.parse(fe)}catch(fe){console.warn("Could not read cart from localStorage",fe)}return[]}),[c,d]=pe.useState(!1),[f,p]=pe.useState(""),g=pe.useMemo(()=>new Date().toISOString().split("T")[0],[]),[v,_]=pe.useState(g),[y,M]=pe.useState("Mattina (09:00 - 12:30)"),[b,E]=pe.useState(""),[S,x]=pe.useState(""),[I,D]=pe.useState("");pe.useEffect(()=>{try{localStorage.setItem(rm,JSON.stringify(r))}catch(fe){console.warn("Failed saving cart to localStorage",fe)}},[r]);const R=pe.useMemo(()=>r.reduce((fe,$)=>fe+$.quantity,0),[r]),B=pe.useMemo(()=>r.reduce((fe,$)=>fe+$.price*$.quantity,0),[r]),z=y.includes("Ritiro in Bottega"),O=e.freeShippingEnabled,V=e.freeShippingThreshold||Nt.delivery.freeShippingThreshold,N=e.standardShippingFee??Nt.delivery.standardShippingFee,C=O&&B>=V,U=pe.useMemo(()=>B===0||z||C?0:N,[B,z,C,N]),J=B+U,Y=pe.useMemo(()=>!O||B<=0?0:Math.min(Math.round(B/V*100),100),[B,O,V]),de=pe.useMemo(()=>O?Math.max(0,V-B):0,[B,O,V]),j=(fe,$=1)=>{o(me=>{const ye=me.find(_e=>_e.productId===fe.id&&!_e.isFuneralTribute);return ye?me.map(_e=>_e.id===ye.id?{..._e,quantity:_e.quantity+$}:_e):[...me,{id:`${fe.id}-${Date.now()}`,productId:fe.id,name:fe.name,meta:`${fe.badge} • Consegna refrigerata a Roma`,price:fe.price,originalPrice:fe.originalPrice,quantity:$,img:fe.img}]}),d(!0)},Z=fe=>{o($=>[...$,{id:`fun-${Date.now()}`,productId:fe.tributeId,name:fe.tributeName,meta:`Nastro in Oro: "${fe.ribbonText}" • ${fe.venueType} (${fe.ceremonyTime})${fe.deceasedOrFamilyName?` • ${fe.deceasedOrFamilyName}`:""}`,price:fe.price,quantity:1,img:fe.img,isFuneralTribute:!0,funeralDetails:fe}]),d(!0)},oe=(fe,$)=>{o(me=>me.map(ye=>ye.id===fe?{...ye,quantity:ye.quantity+$}:ye).filter(ye=>ye.quantity>0))},F=fe=>o($=>$.filter(me=>me.id!==fe)),le=()=>o([]),re=fe=>({orderId:`VEL-${Math.floor(1e3+Math.random()*9e3)}`,customer:{fullName:S.trim(),phone:I.trim(),deliveryAddress:z?"Ritiro in Bottega a Tor Lupara (Gratis)":b.trim(),deliveryDate:v,timeSlot:y},items:[...r],greetingCardText:f.trim()||"Nessun bigliettino",subtotal:B,shippingFee:U,total:J,paymentMethod:"cash_on_delivery",createdAt:new Date().toISOString(),...fe}),P=async fe=>{const $=await Ha.submitOrder(re(fe));return await n(),$},W=()=>window.open(Ha.generateWhatsAppOrderUrl(re()),"_blank");return u.jsx(pg.Provider,{value:{items:r,itemCount:R,subtotal:B,shippingFee:U,total:J,freeShippingEnabled:O,freeShippingThreshold:V,freeShippingProgressPct:Y,amountNeededForFreeShipping:de,isFreeShipping:C,isCartOpen:c,greetingCardText:f,deliveryDate:v,timeSlot:y,deliveryAddress:b,customerName:S,customerPhone:I,setIsCartOpen:d,setGreetingCardText:p,setDeliveryDate:_,setTimeSlot:M,setDeliveryAddress:E,setCustomerName:x,setCustomerPhone:D,addToCart:j,addFuneralTributeToCart:Z,updateQuantity:oe,removeFromCart:F,clearCart:le,submitOrder:P,openWhatsAppOrder:W},children:s})},qa=()=>{const s=pe.useContext(pg);if(!s)throw new Error("useCart must be used within a CartProvider");return s},mg=pe.createContext(void 0),Ou="velora_jwt_token",ll="velora_auth_user",Ua="velora_admin_creds_v1",Jx=({children:s})=>{const[e,n]=pe.useState(()=>localStorage.getItem(Ou)),[r,o]=pe.useState(()=>{try{const v=localStorage.getItem(ll);return v?JSON.parse(v):null}catch{return null}}),[c,d]=pe.useState(!0);pe.useEffect(()=>{try{localStorage.getItem(Ua)||localStorage.setItem(Ua,JSON.stringify({username:"admin",password:"velora2026!"}))}catch{}d(!1)},[]);const f=async(v,_)=>{try{const y=localStorage.getItem(Ua),M=y?JSON.parse(y):{username:"admin",password:"velora2026!"};if(v.trim().toLowerCase()!==M.username.toLowerCase()||_!==M.password)return{success:!1,error:"Credenziali non corrette. Riprova con username e password validi."};const b={username:M.username,role:"ADMIN",storeName:Nt.brand.name},E=`mock.${btoa(JSON.stringify({sub:v,role:"ADMIN",exp:Date.now()+864e5}))}.signature`;return n(E),o(b),localStorage.setItem(Ou,E),localStorage.setItem(ll,JSON.stringify(b)),{success:!0}}catch{return{success:!1,error:"Errore imprevisto durante l’autenticazione."}}},p=async(v,_,y)=>{try{const M=localStorage.getItem(Ua),b=M?JSON.parse(M):{username:"admin",password:"velora2026!"};if(v!==b.password)return{success:!1,error:"La password attuale inserita non è corretta."};const E={username:_.trim()||b.username,password:y};if(localStorage.setItem(Ua,JSON.stringify(E)),r){const S={...r,username:E.username};o(S),localStorage.setItem(ll,JSON.stringify(S))}return{success:!0,message:"Credenziali amministratore aggiornate con successo."}}catch{return{success:!1,error:"Errore imprevisto durante il salvataggio delle credenziali."}}},g=()=>{n(null),o(null),localStorage.removeItem(Ou),localStorage.removeItem(ll)};return u.jsx(mg.Provider,{value:{isAuthenticated:!!e,token:e,user:r,isLoading:c,login:f,changeCredentials:p,logout:g},children:s})},ev=()=>{const s=pe.useContext(mg);if(!s)throw new Error("useAuth must be used within an AuthProvider");return s};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="173",tv=0,sm=1,nv=2,gg=1,iv=2,zi=3,Mr=0,In=1,li=2,yr=0,zs=1,am=2,om=3,lm=4,rv=5,Xr=100,sv=101,av=102,ov=103,lv=104,cv=200,uv=201,dv=202,fv=203,xd=204,vd=205,hv=206,pv=207,mv=208,gv=209,xv=210,vv=211,_v=212,yv=213,Sv=214,_d=0,yd=1,Sd=2,Gs=3,Md=4,bd=5,wd=6,Ed=7,xg=0,Mv=1,bv=2,Sr=0,wv=1,Ev=2,Tv=3,Cv=4,Av=5,Nv=6,Rv=7,vg=300,Ws=301,Xs=302,Td=303,Cd=304,$l=306,Ad=1e3,$r=1001,Nd=1002,di=1003,Pv=1004,cl=1005,Si=1006,zu=1007,Yr=1008,Hi=1009,_g=1010,yg=1011,Wa=1012,df=1013,Kr=1014,Bi=1015,$a=1016,ff=1017,hf=1018,qs=1020,Sg=35902,Mg=1021,bg=1022,ui=1023,wg=1024,Eg=1025,Bs=1026,$s=1027,Tg=1028,pf=1029,Cg=1030,mf=1031,gf=1033,Il=33776,Ul=33777,Fl=33778,kl=33779,Rd=35840,Pd=35841,Ld=35842,Dd=35843,Id=36196,Ud=37492,Fd=37496,kd=37808,Od=37809,zd=37810,Bd=37811,jd=37812,Vd=37813,Hd=37814,Gd=37815,Wd=37816,Xd=37817,qd=37818,$d=37819,Yd=37820,Kd=37821,Ol=36492,Zd=36494,Qd=36495,Ag=36283,Jd=36284,ef=36285,tf=36286,Lv=3200,Dv=3201,Ng=0,Iv=1,_r="",Qn="srgb",Ys="srgb-linear",Bl="linear",Lt="srgb",Ms=7680,cm=519,Uv=512,Fv=513,kv=514,Rg=515,Ov=516,zv=517,Bv=518,jv=519,um=35044,dm="300 es",ji=2e3,jl=2001;class ea{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,nf=180/Math.PI;function Ya(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function yt(s,e,n){return Math.max(e,Math.min(n,s))}function Vv(s,e){return(s%e+e)%e}function ju(s,e,n){return(1-n)*s+n*e}function Fa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,r,o,c,d,f,p,g){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,g)}set(e,n,r,o,c,d,f,p,g){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],g=r[1],v=r[4],_=r[7],y=r[2],M=r[5],b=r[8],E=o[0],S=o[3],x=o[6],I=o[1],D=o[4],R=o[7],B=o[2],z=o[5],O=o[8];return c[0]=d*E+f*I+p*B,c[3]=d*S+f*D+p*z,c[6]=d*x+f*R+p*O,c[1]=g*E+v*I+_*B,c[4]=g*S+v*D+_*z,c[7]=g*x+v*R+_*O,c[2]=y*E+M*I+b*B,c[5]=y*S+M*D+b*z,c[8]=y*x+M*R+b*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],g=e[7],v=e[8];return n*d*v-n*f*g-r*c*v+r*f*p+o*c*g-o*d*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],g=e[7],v=e[8],_=v*d-f*g,y=f*p-v*c,M=g*c-d*p,b=n*_+r*y+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=_*E,e[1]=(o*g-v*r)*E,e[2]=(f*r-o*d)*E,e[3]=y*E,e[4]=(v*n-o*p)*E,e[5]=(o*c-f*n)*E,e[6]=M*E,e[7]=(r*p-g*n)*E,e[8]=(d*n-r*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const p=Math.cos(c),g=Math.sin(c);return this.set(r*p,r*g,-r*(p*d+g*f)+d+e,-o*g,o*p,-o*(-g*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Vu.makeScale(e,n)),this}rotate(e){return this.premultiply(Vu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vu=new ht;function Pg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hv(){const s=Vl("canvas");return s.style.display="block",s}const fm={};function Fs(s){s in fm||(fm[s]=!0,console.warn(s))}function Gv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Wv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qv(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Lt&&(o.r=Vi(o.r),o.g=Vi(o.g),o.b=Vi(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Lt&&(o.r=js(o.r),o.g=js(o.g),o.b=js(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_r?Bl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ys]:{primaries:e,whitePoint:r,transfer:Bl,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const Ct=qv();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class $v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Vl("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bs}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Vi(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yv=0;class Lg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(Hu(o[d].image)):c.push(Hu(o[d]))}else c=Hu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$v.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class Un extends ea{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=$r,o=$r,c=Si,d=Yr,f=ui,p=Hi,g=Un.DEFAULT_ANISOTROPY,v=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ya(),this.name="",this.source=new Lg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=vg;Un.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,r=0,o=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,g=p[0],v=p[4],_=p[8],y=p[1],M=p[5],b=p[9],E=p[2],S=p[6],x=p[10];if(Math.abs(v-y)<.01&&Math.abs(_-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+E)<.1&&Math.abs(b+S)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(g+1)/2,R=(M+1)/2,B=(x+1)/2,z=(v+y)/4,O=(_+E)/4,V=(b+S)/4;return D>R&&D>B?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=z/r,c=O/r):R>B?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=z/o,c=V/o):B<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),r=O/c,o=V/c),this.set(r,o,c,n),this}let I=Math.sqrt((S-b)*(S-b)+(_-E)*(_-E)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(S-b)/I,this.y=(_-E)/I,this.z=(y-v)/I,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends ea{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Un(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Lg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends Zv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dg extends Un{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qv extends Un{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let p=r[o+0],g=r[o+1],v=r[o+2],_=r[o+3];const y=c[d+0],M=c[d+1],b=c[d+2],E=c[d+3];if(f===0){e[n+0]=p,e[n+1]=g,e[n+2]=v,e[n+3]=_;return}if(f===1){e[n+0]=y,e[n+1]=M,e[n+2]=b,e[n+3]=E;return}if(_!==E||p!==y||g!==M||v!==b){let S=1-f;const x=p*y+g*M+v*b+_*E,I=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const B=Math.sqrt(D),z=Math.atan2(B,x*I);S=Math.sin(S*z)/B,f=Math.sin(f*z)/B}const R=f*I;if(p=p*S+y*R,g=g*S+M*R,v=v*S+b*R,_=_*S+E*R,S===1-f){const B=1/Math.sqrt(p*p+g*g+v*v+_*_);p*=B,g*=B,v*=B,_*=B}}e[n]=p,e[n+1]=g,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],p=r[o+1],g=r[o+2],v=r[o+3],_=c[d],y=c[d+1],M=c[d+2],b=c[d+3];return e[n]=f*b+v*_+p*M-g*y,e[n+1]=p*b+v*y+g*_-f*M,e[n+2]=g*b+v*M+f*y-p*_,e[n+3]=v*b-f*_-p*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,g=f(r/2),v=f(o/2),_=f(c/2),y=p(r/2),M=p(o/2),b=p(c/2);switch(d){case"XYZ":this._x=y*v*_+g*M*b,this._y=g*M*_-y*v*b,this._z=g*v*b+y*M*_,this._w=g*v*_-y*M*b;break;case"YXZ":this._x=y*v*_+g*M*b,this._y=g*M*_-y*v*b,this._z=g*v*b-y*M*_,this._w=g*v*_+y*M*b;break;case"ZXY":this._x=y*v*_-g*M*b,this._y=g*M*_+y*v*b,this._z=g*v*b+y*M*_,this._w=g*v*_-y*M*b;break;case"ZYX":this._x=y*v*_-g*M*b,this._y=g*M*_+y*v*b,this._z=g*v*b-y*M*_,this._w=g*v*_+y*M*b;break;case"YZX":this._x=y*v*_+g*M*b,this._y=g*M*_+y*v*b,this._z=g*v*b-y*M*_,this._w=g*v*_-y*M*b;break;case"XZY":this._x=y*v*_-g*M*b,this._y=g*M*_-y*v*b,this._z=g*v*b+y*M*_,this._w=g*v*_+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],p=n[9],g=n[2],v=n[6],_=n[10],y=r+f+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-g)*M,this._z=(d-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+g)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(c-g)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(d-o)/M,this._x=(c+g)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,p=n._y,g=n._z,v=n._w;return this._x=r*v+d*f+o*g-c*p,this._y=o*v+d*p+c*f-r*g,this._z=c*v+d*g+r*p-o*f,this._w=d*v-r*f-o*p-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,f),_=Math.sin((1-n)*v)/g,y=Math.sin(n*v)/g;return this._w=d*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,p=e.w,g=2*(d*o-f*r),v=2*(f*n-c*o),_=2*(c*r-d*n);return this.x=n+p*g+d*_-f*v,this.y=r+p*v+f*g-c*_,this.z=o+p*_+c*v-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new ne,mm=new Ka;class Za{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,si):si.fromBufferAttribute(c,d),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),dl.subVectors(this.max,ka),ws.subVectors(e.a,ka),Es.subVectors(e.b,ka),Ts.subVectors(e.c,ka),hr.subVectors(Es,ws),pr.subVectors(Ts,Es),Or.subVectors(ws,Ts);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Or.z,Or.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Or.z,0,-Or.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Or.y,Or.x,0];return!Wu(n,ws,Es,Ts,dl)||(n=[1,0,0,0,1,0,0,0,1],!Wu(n,ws,Es,Ts,dl))?!1:(fl.crossVectors(hr,pr),n=[fl.x,fl.y,fl.z],Wu(n,ws,Es,Ts,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],si=new ne,ul=new Za,ws=new ne,Es=new ne,Ts=new ne,hr=new ne,pr=new ne,Or=new ne,ka=new ne,dl=new ne,fl=new ne,zr=new ne;function Wu(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),p=e.dot(zr),g=n.dot(zr),v=r.dot(zr);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>f)return!1}return!0}const Jv=new Za,Oa=new ne,Xu=new ne;class Yl{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Jv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const n=Oa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Xu)),this.expandByPoint(Oa.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new ne,qu=new ne,hl=new ne,mr=new ne,$u=new ne,pl=new ne,Yu=new ne;class Ig{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){qu.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(qu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(hl),f=mr.dot(this.direction),p=-mr.dot(hl),g=mr.lengthSq(),v=Math.abs(1-d*d);let _,y,M,b;if(v>0)if(_=d*p-f,y=d*f-p,b=c*v,_>=0)if(y>=-b)if(y<=b){const E=1/v;_*=E,y*=E,M=_*(_+d*y+2*f)+y*(d*_+y+2*p)+g}else y=c,_=Math.max(0,-(d*y+f)),M=-_*_+y*(y+2*p)+g;else y=-c,_=Math.max(0,-(d*y+f)),M=-_*_+y*(y+2*p)+g;else y<=-b?(_=Math.max(0,-(-d*c+f)),y=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+g):y<=b?(_=0,y=Math.min(Math.max(-c,-p),c),M=y*(y+2*p)+g):(_=Math.max(0,-(d*c+f)),y=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+g);else y=d>0?-c:c,_=Math.max(0,-(d*y+f)),M=-_*_+y*(y+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(qu).addScaledVector(hl,y),M}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),o=Ui.dot(Ui)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,p;const g=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,o=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,o=(e.min.x-y.x)*g),v>=0?(c=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(f=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,o,c){$u.subVectors(n,e),pl.subVectors(r,e),Yu.crossVectors($u,pl);let d=this.direction.dot(Yu),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;mr.subVectors(this.origin,e);const p=f*this.direction.dot(pl.crossVectors(mr,pl));if(p<0)return null;const g=f*this.direction.dot($u.cross(mr));if(g<0||p+g>d)return null;const v=-f*mr.dot(Yu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,o,c,d,f,p,g,v,_,y,M,b,E,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,g,v,_,y,M,b,E,S)}set(e,n,r,o,c,d,f,p,g,v,_,y,M,b,E,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=d,x[9]=f,x[13]=p,x[2]=g,x[6]=v,x[10]=_,x[14]=y,x[3]=M,x[7]=b,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),d=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),g=Math.sin(o),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const y=d*v,M=d*_,b=f*v,E=f*_;n[0]=p*v,n[4]=-p*_,n[8]=g,n[1]=M+b*g,n[5]=y-E*g,n[9]=-f*p,n[2]=E-y*g,n[6]=b+M*g,n[10]=d*p}else if(e.order==="YXZ"){const y=p*v,M=p*_,b=g*v,E=g*_;n[0]=y+E*f,n[4]=b*f-M,n[8]=d*g,n[1]=d*_,n[5]=d*v,n[9]=-f,n[2]=M*f-b,n[6]=E+y*f,n[10]=d*p}else if(e.order==="ZXY"){const y=p*v,M=p*_,b=g*v,E=g*_;n[0]=y-E*f,n[4]=-d*_,n[8]=b+M*f,n[1]=M+b*f,n[5]=d*v,n[9]=E-y*f,n[2]=-d*g,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const y=d*v,M=d*_,b=f*v,E=f*_;n[0]=p*v,n[4]=b*g-M,n[8]=y*g+E,n[1]=p*_,n[5]=E*g+y,n[9]=M*g-b,n[2]=-g,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*g,b=f*p,E=f*g;n[0]=p*v,n[4]=E-y*_,n[8]=b*_+M,n[1]=_,n[5]=d*v,n[9]=-f*v,n[2]=-g*v,n[6]=M*_+b,n[10]=y-E*_}else if(e.order==="XZY"){const y=d*p,M=d*g,b=f*p,E=f*g;n[0]=p*v,n[4]=-_,n[8]=g*v,n[1]=y*_+E,n[5]=d*v,n[9]=M*_-b,n[2]=b*_-M,n[6]=f*v,n[10]=E*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,n,r){const o=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),gr.crossVectors(r,Bn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),gr.crossVectors(r,Bn)),gr.normalize(),ml.crossVectors(Bn,gr),o[0]=gr.x,o[4]=ml.x,o[8]=Bn.x,o[1]=gr.y,o[5]=ml.y,o[9]=Bn.y,o[2]=gr.z,o[6]=ml.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],g=r[12],v=r[1],_=r[5],y=r[9],M=r[13],b=r[2],E=r[6],S=r[10],x=r[14],I=r[3],D=r[7],R=r[11],B=r[15],z=o[0],O=o[4],V=o[8],N=o[12],C=o[1],U=o[5],J=o[9],Y=o[13],de=o[2],j=o[6],Z=o[10],oe=o[14],F=o[3],le=o[7],re=o[11],P=o[15];return c[0]=d*z+f*C+p*de+g*F,c[4]=d*O+f*U+p*j+g*le,c[8]=d*V+f*J+p*Z+g*re,c[12]=d*N+f*Y+p*oe+g*P,c[1]=v*z+_*C+y*de+M*F,c[5]=v*O+_*U+y*j+M*le,c[9]=v*V+_*J+y*Z+M*re,c[13]=v*N+_*Y+y*oe+M*P,c[2]=b*z+E*C+S*de+x*F,c[6]=b*O+E*U+S*j+x*le,c[10]=b*V+E*J+S*Z+x*re,c[14]=b*N+E*Y+S*oe+x*P,c[3]=I*z+D*C+R*de+B*F,c[7]=I*O+D*U+R*j+B*le,c[11]=I*V+D*J+R*Z+B*re,c[15]=I*N+D*Y+R*oe+B*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],p=e[9],g=e[13],v=e[2],_=e[6],y=e[10],M=e[14],b=e[3],E=e[7],S=e[11],x=e[15];return b*(+c*p*_-o*g*_-c*f*y+r*g*y+o*f*M-r*p*M)+E*(+n*p*M-n*g*y+c*d*y-o*d*M+o*g*v-c*p*v)+S*(+n*g*_-n*f*M-c*d*_+r*d*M+c*f*v-r*g*v)+x*(-o*f*v-n*p*_+n*f*y+o*d*_-r*d*y+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],g=e[7],v=e[8],_=e[9],y=e[10],M=e[11],b=e[12],E=e[13],S=e[14],x=e[15],I=_*S*g-E*y*g+E*p*M-f*S*M-_*p*x+f*y*x,D=b*y*g-v*S*g-b*p*M+d*S*M+v*p*x-d*y*x,R=v*E*g-b*_*g+b*f*M-d*E*M-v*f*x+d*_*x,B=b*_*p-v*E*p-b*f*y+d*E*y+v*f*S-d*_*S,z=n*I+r*D+o*R+c*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=I*O,e[1]=(E*y*c-_*S*c-E*o*M+r*S*M+_*o*x-r*y*x)*O,e[2]=(f*S*c-E*p*c+E*o*g-r*S*g-f*o*x+r*p*x)*O,e[3]=(_*p*c-f*y*c-_*o*g+r*y*g+f*o*M-r*p*M)*O,e[4]=D*O,e[5]=(v*S*c-b*y*c+b*o*M-n*S*M-v*o*x+n*y*x)*O,e[6]=(b*p*c-d*S*c-b*o*g+n*S*g+d*o*x-n*p*x)*O,e[7]=(d*y*c-v*p*c+v*o*g-n*y*g-d*o*M+n*p*M)*O,e[8]=R*O,e[9]=(b*_*c-v*E*c-b*r*M+n*E*M+v*r*x-n*_*x)*O,e[10]=(d*E*c-b*f*c+b*r*g-n*E*g-d*r*x+n*f*x)*O,e[11]=(v*f*c-d*_*c-v*r*g+n*_*g+d*r*M-n*f*M)*O,e[12]=B*O,e[13]=(v*E*o-b*_*o+b*r*y-n*E*y-v*r*S+n*_*S)*O,e[14]=(b*f*o-d*E*o-b*r*p+n*E*p+d*r*S-n*f*S)*O,e[15]=(d*_*o-v*f*o+v*r*p-n*_*p-d*r*y+n*f*y)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,g=c*d,v=c*f;return this.set(g*d+r,g*f-o*p,g*p+o*f,0,g*f+o*p,v*f+r,v*p-o*d,0,g*p-o*f,v*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,g=c+c,v=d+d,_=f+f,y=c*g,M=c*v,b=c*_,E=d*v,S=d*_,x=f*_,I=p*g,D=p*v,R=p*_,B=r.x,z=r.y,O=r.z;return o[0]=(1-(E+x))*B,o[1]=(M+R)*B,o[2]=(b-D)*B,o[3]=0,o[4]=(M-R)*z,o[5]=(1-(y+x))*z,o[6]=(S+I)*z,o[7]=0,o[8]=(b+D)*O,o[9]=(S-I)*O,o[10]=(1-(y+E))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Cs.set(o[0],o[1],o[2]).length();const d=Cs.set(o[4],o[5],o[6]).length(),f=Cs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const g=1/c,v=1/d,_=1/f;return ai.elements[0]*=g,ai.elements[1]*=g,ai.elements[2]*=g,ai.elements[4]*=v,ai.elements[5]*=v,ai.elements[6]*=v,ai.elements[8]*=_,ai.elements[9]*=_,ai.elements[10]*=_,n.setFromRotationMatrix(ai),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=ji){const p=this.elements,g=2*c/(n-e),v=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let M,b;if(f===ji)M=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(f===jl)M=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=ji){const p=this.elements,g=1/(n-e),v=1/(r-o),_=1/(d-c),y=(n+e)*g,M=(r+o)*v;let b,E;if(f===ji)b=(d+c)*_,E=-2*_;else if(f===jl)b=c*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=E,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new ne,ai=new jt,e_=new ne(0,0,0),t_=new ne(1,1,1),gr=new ne,ml=new ne,Bn=new ne,gm=new jt,xm=new Ka;class Mi{constructor(e=0,n=0,r=0,o=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],p=o[1],g=o[5],v=o[9],_=o[2],y=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const vm=new ne,As=new Ka,Fi=new jt,gl=new ne,za=new ne,i_=new ne,r_=new Ka,_m=new ne(1,0,0),ym=new ne(0,1,0),Sm=new ne(0,0,1),Mm={type:"added"},s_={type:"removed"},Ns={type:"childadded",child:null},Ku={type:"childremoved",child:null};class fn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new ne,n=new Mi,r=new Ka,o=new ne(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ht}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?gl.copy(e):gl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(za,gl,this.up):Fi.lookAt(gl,za,this.up),this.quaternion.setFromRotationMatrix(Fi),o&&(Fi.extractRotation(o.matrixWorld),As.setFromRotationMatrix(Fi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s_),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,r_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const _=p[g];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,g=this.material.length;p<g;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),g=d(e.textures),v=d(e.images),_=d(e.shapes),y=d(e.skeletons),M=d(e.animations),b=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function d(f){const p=[];for(const g in f){const v=f[g];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fn.DEFAULT_UP=new ne(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ne,ki=new ne,Zu=new ne,Oi=new ne,Rs=new ne,Ps=new ne,bm=new ne,Qu=new ne,Ju=new ne,ed=new ne,td=new Dt,nd=new Dt,id=new Dt;class ci{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),oi.subVectors(e,n),o.cross(oi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){oi.subVectors(o,n),ki.subVectors(r,n),Zu.subVectors(e,n);const d=oi.dot(oi),f=oi.dot(ki),p=oi.dot(Zu),g=ki.dot(ki),v=ki.dot(Zu),_=d*g-f*f;if(_===0)return c.set(0,0,0),null;const y=1/_,M=(g*p-f*v)*y,b=(d*v-f*p)*y;return c.set(1-M-b,b,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,o,c,d,f,p){return this.getBarycoord(e,n,r,o,Oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Oi.x),p.addScaledVector(d,Oi.y),p.addScaledVector(f,Oi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,d){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,r),id.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(td,c.x),d.addScaledVector(nd,c.y),d.addScaledVector(id,c.z),d}static isFrontFacing(e,n,r,o){return oi.subVectors(r,n),ki.subVectors(e,n),oi.cross(ki).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),oi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Rs.subVectors(o,r),Ps.subVectors(c,r),Qu.subVectors(e,r);const p=Rs.dot(Qu),g=Ps.dot(Qu);if(p<=0&&g<=0)return n.copy(r);Ju.subVectors(e,o);const v=Rs.dot(Ju),_=Ps.dot(Ju);if(v>=0&&_<=v)return n.copy(o);const y=p*_-v*g;if(y<=0&&p>=0&&v<=0)return d=p/(p-v),n.copy(r).addScaledVector(Rs,d);ed.subVectors(e,c);const M=Rs.dot(ed),b=Ps.dot(ed);if(b>=0&&M<=b)return n.copy(c);const E=M*g-p*b;if(E<=0&&g>=0&&b<=0)return f=g/(g-b),n.copy(r).addScaledVector(Ps,f);const S=v*b-M*_;if(S<=0&&_-v>=0&&M-b>=0)return bm.subVectors(c,o),f=(_-v)/(_-v+(M-b)),n.copy(o).addScaledVector(bm,f);const x=1/(S+E+y);return d=E*x,f=y*x,n.copy(r).addScaledVector(Rs,d).addScaledVector(Ps,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function rd(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Ct.workingColorSpace){if(e=Vv(e,1),n=yt(n,0,1),r=yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=rd(d,c,e+1/3),this.g=rd(d,c,e),this.b=rd(d,c,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,n=Qn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=Fg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Ct.fromWorkingColorSpace(yn.copy(this),e),Math.round(yt(yn.r*255,0,255))*65536+Math.round(yt(yn.g*255,0,255))*256+Math.round(yt(yn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(yn.copy(this),n);const r=yn.r,o=yn.g,c=yn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let p,g;const v=(f+d)/2;if(f===d)p=0,g=0;else{const _=d-f;switch(g=v<=.5?_/(d+f):_/(2-d-f),d){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=g,e.l=v,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Qn){Ct.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,o=yn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(xl);const r=ju(xr.h,xl.h,n),o=ju(xr.s,xl.s,n),c=ju(xr.l,xl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new xt;xt.NAMES=Fg;let a_=0;class ta extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=vd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xd&&(r.blendSrc=this.blendSrc),this.blendDst!==vd&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kg extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new ne,vl=new At;let o_=0;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=um,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),o=Dn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),o=Dn(o,this.array),c=Dn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class Og extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class zg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Gn extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let l_=0;const Zn=new jt,sd=new fn,Ls=new ne,jn=new Za,Ba=new Za,ln=new ne;class hi extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?zg:Og)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Ba.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(jn.min,Ba.min),jn.expandByPoint(ln),ln.addVectors(jn.max,Ba.max),jn.expandByPoint(ln)):(jn.expandByPoint(Ba.min),jn.expandByPoint(Ba.max))}jn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)ln.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(ln));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let g=0,v=f.count;g<v;g++)ln.fromBufferAttribute(f,g),p&&(Ls.fromBufferAttribute(e,g),ln.add(Ls)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<r.count;V++)f[V]=new ne,p[V]=new ne;const g=new ne,v=new ne,_=new ne,y=new At,M=new At,b=new At,E=new ne,S=new ne;function x(V,N,C){g.fromBufferAttribute(r,V),v.fromBufferAttribute(r,N),_.fromBufferAttribute(r,C),y.fromBufferAttribute(c,V),M.fromBufferAttribute(c,N),b.fromBufferAttribute(c,C),v.sub(g),_.sub(g),M.sub(y),b.sub(y);const U=1/(M.x*b.y-b.x*M.y);isFinite(U)&&(E.copy(v).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(U),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(U),f[V].add(E),f[N].add(E),f[C].add(E),p[V].add(S),p[N].add(S),p[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let V=0,N=I.length;V<N;++V){const C=I[V],U=C.start,J=C.count;for(let Y=U,de=U+J;Y<de;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const D=new ne,R=new ne,B=new ne,z=new ne;function O(V){B.fromBufferAttribute(o,V),z.copy(B);const N=f[V];D.copy(N),D.sub(B.multiplyScalar(B.dot(N))).normalize(),R.crossVectors(z,N);const U=R.dot(p[V])<0?-1:1;d.setXYZW(V,D.x,D.y,D.z,U)}for(let V=0,N=I.length;V<N;++V){const C=I[V],U=C.start,J=C.count;for(let Y=U,de=U+J;Y<de;Y+=3)O(e.getX(Y+0)),O(e.getX(Y+1)),O(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new ne,c=new ne,d=new ne,f=new ne,p=new ne,g=new ne,v=new ne,_=new ne;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),E=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,S),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),f.add(v),p.add(v),g.add(v),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(S,g.x,g.y,g.z)}else for(let y=0,M=n.count;y<M;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,p){const g=f.array,v=f.itemSize,_=f.normalized,y=new g.constructor(p.length*v);let M=0,b=0;for(let E=0,S=p.length;E<S;E++){f.isInterleavedBufferAttribute?M=p[E]*f.data.stride+f.offset:M=p[E]*v;for(let x=0;x<v;x++)y[b++]=g[M++]}return new fi(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],g=e(p,r);n.setAttribute(f,g)}const c=this.morphAttributes;for(const f in c){const p=[],g=c[f];for(let v=0,_=g.length;v<_;v++){const y=g[v],M=e(y,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const g=d[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let _=0,y=g.length;_<y;_++){const M=g[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const v=o[g];this.setAttribute(g,v.clone(n))}const c=e.morphAttributes;for(const g in c){const v=[],_=c[g];for(let y=0,M=_.length;y<M;y++)v.push(_[y].clone(n));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,v=d.length;g<v;g++){const _=d[g];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new jt,Br=new Ig,_l=new Yl,Em=new ne,yl=new ne,Sl=new ne,Ml=new ne,ad=new ne,bl=new ne,Tm=new ne,wl=new ne;class Hn extends fn{constructor(e=new hi,n=new kg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){bl.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const v=f[p],_=c[p];v!==0&&(ad.fromBufferAttribute(_,e),d?bl.addScaledVector(ad,v):bl.addScaledVector(ad.sub(n),v))}n.add(bl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(_l.containsPoint(Br.origin)===!1&&(Br.intersectSphere(_l,Em)===null||Br.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(wm.copy(c).invert(),Br.copy(e.ray).applyMatrix4(wm),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,y=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let b=0,E=y.length;b<E;b++){const S=y[b],x=d[S.materialIndex],I=Math.max(S.start,M.start),D=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,B=D;R<B;R+=3){const z=f.getX(R),O=f.getX(R+1),V=f.getX(R+2);o=El(this,x,e,r,g,v,_,z,O,V),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),E=Math.min(f.count,M.start+M.count);for(let S=b,x=E;S<x;S+=3){const I=f.getX(S),D=f.getX(S+1),R=f.getX(S+2);o=El(this,d,e,r,g,v,_,I,D,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,E=y.length;b<E;b++){const S=y[b],x=d[S.materialIndex],I=Math.max(S.start,M.start),D=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,B=D;R<B;R+=3){const z=R,O=R+1,V=R+2;o=El(this,x,e,r,g,v,_,z,O,V),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),E=Math.min(p.count,M.start+M.count);for(let S=b,x=E;S<x;S+=3){const I=S,D=S+1,R=S+2;o=El(this,d,e,r,g,v,_,I,D,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function c_(s,e,n,r,o,c,d,f){let p;if(e.side===In?p=r.intersectTriangle(d,c,o,!0,f):p=r.intersectTriangle(o,c,d,e.side===Mr,f),p===null)return null;wl.copy(f),wl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(wl);return g<n.near||g>n.far?null:{distance:g,point:wl.clone(),object:s}}function El(s,e,n,r,o,c,d,f,p,g){s.getVertexPosition(f,yl),s.getVertexPosition(p,Sl),s.getVertexPosition(g,Ml);const v=c_(s,e,n,r,yl,Sl,Ml,Tm);if(v){const _=new ne;ci.getBarycoord(Tm,yl,Sl,Ml,_),o&&(v.uv=ci.getInterpolatedAttribute(o,f,p,g,_,new At)),c&&(v.uv1=ci.getInterpolatedAttribute(c,f,p,g,_,new At)),d&&(v.normal=ci.getInterpolatedAttribute(d,f,p,g,_,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:f,b:p,c:g,normal:new ne,materialIndex:0};ci.getNormal(yl,Sl,Ml,y.normal),v.face=y,v.barycoord=_}return v}class Qa extends hi{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],g=[],v=[],_=[];let y=0,M=0;b("z","y","x",-1,-1,r,n,e,d,c,0),b("z","y","x",1,-1,r,n,-e,d,c,1),b("x","z","y",1,1,e,r,n,o,d,2),b("x","z","y",1,-1,e,r,-n,o,d,3),b("x","y","z",1,-1,e,n,r,o,c,4),b("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(_,2));function b(E,S,x,I,D,R,B,z,O,V,N){const C=R/O,U=B/V,J=R/2,Y=B/2,de=z/2,j=O+1,Z=V+1;let oe=0,F=0;const le=new ne;for(let re=0;re<Z;re++){const P=re*U-Y;for(let W=0;W<j;W++){const fe=W*C-J;le[E]=fe*I,le[S]=P*D,le[x]=de,g.push(le.x,le.y,le.z),le[E]=0,le[S]=0,le[x]=z>0?1:-1,v.push(le.x,le.y,le.z),_.push(W/O),_.push(1-re/V),oe+=1}}for(let re=0;re<V;re++)for(let P=0;P<O;P++){const W=y+P+j*re,fe=y+P+j*(re+1),$=y+(P+1)+j*(re+1),me=y+(P+1)+j*re;p.push(W,fe,me),p.push(fe,$,me),F+=6}f.addGroup(M,F,N),M+=F,y+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function En(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const o in r)e[o]=r[o]}return e}function u_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Bg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const d_={clone:Ks,merge:En};var f_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f_,this.fragmentShader=h_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}let jg=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const vr=new ne,Cm=new At,Am=new At;class Vn extends jg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nf*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,Cm,Am),n.subVectors(Am,Cm)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,g=d.fullHeight;c+=d.offsetX*o/p,n-=d.offsetY*r/g,o*=d.width/p,r*=d.height/g}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Is=1;class p_ extends fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vn(Ds,Is,e,n);o.layers=this.layers,this.add(o);const c=new Vn(Ds,Is,e,n);c.layers=this.layers,this.add(c);const d=new Vn(Ds,Is,e,n);d.layers=this.layers,this.add(d);const f=new Vn(Ds,Is,e,n);f.layers=this.layers,this.add(f);const p=new Vn(Ds,Is,e,n);p.layers=this.layers,this.add(p);const g=new Vn(Ds,Is,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,p]=n;for(const g of n)this.remove(g);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,g,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(_,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Vg extends Un{constructor(e,n,r,o,c,d,f,p,g,v){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,r,o,c,d,f,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m_ extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Vg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qa(5,5,5),c=new br({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:yr});c.uniforms.tEquirect.value=n;const d=new Hn(o,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Si),new p_(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}class ks extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g_={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const E of e.hand.values()){const S=n.getJointPose(E,r),x=this._getHandJoint(g,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],y=v.position.distanceTo(_.position),M=.02,b=.005;g.inputState.pinching&&y>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class x_ extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ld=new ne,v_=new ne,__=new ht;class Gr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=ld.subVectors(r,n).cross(v_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(ld),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||__.getNormalMatrix(e),o=this.coplanarPoint(ld).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Yl,Tl=new ne;class xf{constructor(e=new Gr,n=new Gr,r=new Gr,o=new Gr,c=new Gr,d=new Gr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ji){const r=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],p=o[3],g=o[4],v=o[5],_=o[6],y=o[7],M=o[8],b=o[9],E=o[10],S=o[11],x=o[12],I=o[13],D=o[14],R=o[15];if(r[0].setComponents(p-c,y-g,S-M,R-x).normalize(),r[1].setComponents(p+c,y+g,S+M,R+x).normalize(),r[2].setComponents(p+d,y+v,S+b,R+I).normalize(),r[3].setComponents(p-d,y-v,S-b,R-I).normalize(),r[4].setComponents(p-f,y-_,S-E,R-D).normalize(),n===ji)r[5].setComponents(p+f,y+_,S+E,R+D).normalize();else if(n===jl)r[5].setComponents(f,_,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Tl.x=o.normal.x>0?e.max.x:e.min.x,Tl.y=o.normal.y>0?e.max.y:e.min.y,Tl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hg extends ta{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nm=new jt,rf=new Ig,Cl=new Yl,Al=new ne;class y_ extends fn{constructor(e=new hi,n=new Hg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(o),Cl.radius+=c,e.ray.intersectsSphere(Cl)===!1)return;Nm.copy(o).invert(),rf.copy(e.ray).applyMatrix4(Nm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let b=y,E=M;b<E;b++){const S=g.getX(b);Al.fromBufferAttribute(_,S),Rm(Al,S,p,o,e,n,this)}}else{const y=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let b=y,E=M;b<E;b++)Al.fromBufferAttribute(_,b),Rm(Al,b,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Rm(s,e,n,r,o,c,d){const f=rf.distanceSqToPoint(s);if(f<n){const p=new ne;rf.closestPointToPoint(s,p),p.applyMatrix4(r);const g=o.ray.origin.distanceTo(p);if(g<o.near||g>o.far)return;c.push({distance:g,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Gg extends Un{constructor(e,n,r,o,c,d,f,p,g,v=Bs){if(v!==Bs&&v!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Bs&&(r=Kr),r===void 0&&v===$s&&(r=qs),super(null,o,c,d,f,p,v,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:di,this.minFilter=p!==void 0?p:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Kl extends hi{constructor(e=1,n=1,r=1,o=32,c=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:d,thetaStart:f,thetaLength:p};const g=this;o=Math.floor(o),c=Math.floor(c);const v=[],_=[],y=[],M=[];let b=0;const E=[],S=r/2;let x=0;I(),d===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(y,3)),this.setAttribute("uv",new Gn(M,2));function I(){const R=new ne,B=new ne;let z=0;const O=(n-e)/r;for(let V=0;V<=c;V++){const N=[],C=V/c,U=C*(n-e)+e;for(let J=0;J<=o;J++){const Y=J/o,de=Y*p+f,j=Math.sin(de),Z=Math.cos(de);B.x=U*j,B.y=-C*r+S,B.z=U*Z,_.push(B.x,B.y,B.z),R.set(j,O,Z).normalize(),y.push(R.x,R.y,R.z),M.push(Y,1-C),N.push(b++)}E.push(N)}for(let V=0;V<o;V++)for(let N=0;N<c;N++){const C=E[N][V],U=E[N+1][V],J=E[N+1][V+1],Y=E[N][V+1];(e>0||N!==0)&&(v.push(C,U,Y),z+=3),(n>0||N!==c-1)&&(v.push(U,J,Y),z+=3)}g.addGroup(x,z,0),x+=z}function D(R){const B=b,z=new At,O=new ne;let V=0;const N=R===!0?e:n,C=R===!0?1:-1;for(let J=1;J<=o;J++)_.push(0,S*C,0),y.push(0,C,0),M.push(.5,.5),b++;const U=b;for(let J=0;J<=o;J++){const de=J/o*p+f,j=Math.cos(de),Z=Math.sin(de);O.x=N*Z,O.y=S*C,O.z=N*j,_.push(O.x,O.y,O.z),y.push(0,C,0),z.x=j*.5+.5,z.y=Z*.5*C+.5,M.push(z.x,z.y),b++}for(let J=0;J<o;J++){const Y=B+J,de=U+J;R===!0?v.push(de,de+1,Y):v.push(de+1,de,Y),V+=3}g.addGroup(x,V,R===!0?1:2),x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vf extends Kl{constructor(e=1,n=1,r=32,o=1,c=!1,d=0,f=Math.PI*2){super(0,e,n,r,o,c,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:d,thetaLength:f}}static fromJSON(e){return new vf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zl extends hi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(o),g=f+1,v=p+1,_=e/f,y=n/p,M=[],b=[],E=[],S=[];for(let x=0;x<v;x++){const I=x*y-d;for(let D=0;D<g;D++){const R=D*_-c;b.push(R,-I,0),E.push(0,0,1),S.push(D/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let I=0;I<f;I++){const D=I+g*x,R=I+g*(x+1),B=I+1+g*(x+1),z=I+1+g*x;M.push(D,R,z),M.push(R,B,z)}this.setIndex(M),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(E,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hl extends hi{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:d,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let g=0;const v=[],_=new ne,y=new ne,M=[],b=[],E=[],S=[];for(let x=0;x<=r;x++){const I=[],D=x/r;let R=0;x===0&&d===0?R=.5/n:x===r&&p===Math.PI&&(R=-.5/n);for(let B=0;B<=n;B++){const z=B/n;_.x=-e*Math.cos(o+z*c)*Math.sin(d+D*f),_.y=e*Math.cos(d+D*f),_.z=e*Math.sin(o+z*c)*Math.sin(d+D*f),b.push(_.x,_.y,_.z),y.copy(_).normalize(),E.push(y.x,y.y,y.z),S.push(z+R,1-D),I.push(g++)}v.push(I)}for(let x=0;x<r;x++)for(let I=0;I<n;I++){const D=v[x][I+1],R=v[x][I],B=v[x+1][I],z=v[x+1][I+1];(x!==0||d>0)&&M.push(D,R,z),(x!==r-1||p<Math.PI)&&M.push(R,B,z)}this.setIndex(M),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(E,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nl extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ng,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S_ extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _f extends fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const cd=new jt,Pm=new ne,Lm=new ne;class Wg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dm=new jt,ja=new ne,ud=new ne;class b_ extends Wg{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new ne(1,0,0),new ne(-1,0,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,1,0),new ne(0,-1,0)],this._cubeUps=[new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,0,1),new ne(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),ja.setFromMatrixPosition(e.matrixWorld),r.position.copy(ja),ud.copy(r.position),ud.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(ud),r.updateMatrixWorld(),o.makeTranslation(-ja.x,-ja.y,-ja.z),Dm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}}class w_ extends _f{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new b_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xg extends jg{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class E_ extends Wg{constructor(){super(new Xg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T_ extends _f{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new E_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class C_ extends _f{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class A_ extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Im(s,e,n,r){const o=N_(r);switch(n){case Mg:return s*e;case wg:return s*e;case Eg:return s*e*2;case Tg:return s*e/o.components*o.byteLength;case pf:return s*e/o.components*o.byteLength;case Cg:return s*e*2/o.components*o.byteLength;case mf:return s*e*2/o.components*o.byteLength;case bg:return s*e*3/o.components*o.byteLength;case ui:return s*e*4/o.components*o.byteLength;case gf:return s*e*4/o.components*o.byteLength;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Dd:return Math.max(s,16)*Math.max(e,8)/4;case Rd:case Ld:return Math.max(s,8)*Math.max(e,8)/2;case Id:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Zd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ag:case Jd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function N_(s){switch(s){case Hi:case _g:return{byteLength:1,components:1};case Wa:case yg:case $a:return{byteLength:2,components:1};case ff:case hf:return{byteLength:2,components:4};case Kr:case df:case Bi:return{byteLength:4,components:1};case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qg(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function R_(s){const e=new WeakMap;function n(f,p){const g=f.array,v=f.usage,_=g.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,g,v),f.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,g){const v=p.array,_=p.updateRanges;if(s.bindBuffer(g,f),_.length===0)s.bufferSubData(g,0,v);else{_.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<_.length;M++){const b=_[y],E=_[M];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++y,_[y]=E)}_.length=y+1;for(let M=0,b=_.length;M<b;M++){const E=_[M];s.bufferSubData(g,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,p),g.version=f.version}}return{get:o,remove:c,update:d}}var P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,B_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ey=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ny=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
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
}`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,by=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ny=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,By=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ES=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,kS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,zS=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,YS=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,JS=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,t1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,i1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:P_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:I_,alphatest_fragment:U_,alphatest_pars_fragment:F_,aomap_fragment:k_,aomap_pars_fragment:O_,batching_pars_vertex:z_,batching_vertex:B_,begin_vertex:j_,beginnormal_vertex:V_,bsdfs:H_,iridescence_fragment:G_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:$_,clipping_planes_vertex:Y_,color_fragment:K_,color_pars_fragment:Z_,color_pars_vertex:Q_,color_vertex:J_,common:ey,cube_uv_reflection_fragment:ty,defaultnormal_vertex:ny,displacementmap_pars_vertex:iy,displacementmap_vertex:ry,emissivemap_fragment:sy,emissivemap_pars_fragment:ay,colorspace_fragment:oy,colorspace_pars_fragment:ly,envmap_fragment:cy,envmap_common_pars_fragment:uy,envmap_pars_fragment:dy,envmap_pars_vertex:fy,envmap_physical_pars_fragment:by,envmap_vertex:hy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:gy,fog_pars_fragment:xy,gradientmap_pars_fragment:vy,lightmap_pars_fragment:_y,lights_lambert_fragment:yy,lights_lambert_pars_fragment:Sy,lights_pars_begin:My,lights_toon_fragment:wy,lights_toon_pars_fragment:Ey,lights_phong_fragment:Ty,lights_phong_pars_fragment:Cy,lights_physical_fragment:Ay,lights_physical_pars_fragment:Ny,lights_fragment_begin:Ry,lights_fragment_maps:Py,lights_fragment_end:Ly,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Fy,map_fragment:ky,map_pars_fragment:Oy,map_particle_fragment:zy,map_particle_pars_fragment:By,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Vy,morphinstance_vertex:Hy,morphcolor_vertex:Gy,morphnormal_vertex:Wy,morphtarget_pars_vertex:Xy,morphtarget_vertex:qy,normal_fragment_begin:$y,normal_fragment_maps:Yy,normal_pars_fragment:Ky,normal_pars_vertex:Zy,normal_vertex:Qy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:aS,project_vertex:oS,dithering_fragment:lS,dithering_pars_fragment:cS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:hS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:gS,skinning_pars_vertex:xS,skinning_vertex:vS,skinnormal_vertex:_S,specularmap_fragment:yS,specularmap_pars_fragment:SS,tonemapping_fragment:MS,tonemapping_pars_fragment:bS,transmission_fragment:wS,transmission_pars_fragment:ES,uv_pars_fragment:TS,uv_pars_vertex:CS,uv_vertex:AS,worldpos_vertex:NS,background_vert:RS,background_frag:PS,backgroundCube_vert:LS,backgroundCube_frag:DS,cube_vert:IS,cube_frag:US,depth_vert:FS,depth_frag:kS,distanceRGBA_vert:OS,distanceRGBA_frag:zS,equirect_vert:BS,equirect_frag:jS,linedashed_vert:VS,linedashed_frag:HS,meshbasic_vert:GS,meshbasic_frag:WS,meshlambert_vert:XS,meshlambert_frag:qS,meshmatcap_vert:$S,meshmatcap_frag:YS,meshnormal_vert:KS,meshnormal_frag:ZS,meshphong_vert:QS,meshphong_frag:JS,meshphysical_vert:e1,meshphysical_frag:t1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:r1,points_frag:s1,shadow_vert:a1,shadow_frag:o1,sprite_vert:l1,sprite_frag:c1},Le={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},yi={basic:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:En([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:En([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:En([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:En([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:En([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:En([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:En([Le.common,Le.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:En([Le.lights,Le.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};yi.physical={uniforms:En([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Rl={r:0,b:0,g:0},Vr=new Mi,u1=new jt;function d1(s,e,n,r,o,c,d){const f=new xt(0);let p=c===!0?0:1,g,v,_=null,y=0,M=null;function b(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?n:e).get(R)),R}function E(D){let R=!1;const B=b(D);B===null?x(f,p):B&&B.isColor&&(x(B,1),R=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,R){const B=b(R);B&&(B.isCubeTexture||B.mapping===$l)?(v===void 0&&(v=new Hn(new Qa(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:Ks(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Vr.copy(R.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Vr)),v.material.toneMapped=Ct.getTransfer(B.colorSpace)!==Lt,(_!==B||y!==B.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=B,y=B.version,M=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(g===void 0&&(g=new Hn(new Zl(2,2),new br({name:"BackgroundMaterial",uniforms:Ks(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=B,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.toneMapped=Ct.getTransfer(B.colorSpace)!==Lt,B.matrixAutoUpdate===!0&&B.updateMatrix(),g.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||y!==B.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=B,y=B.version,M=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function x(D,R){D.getRGB(Rl,Bg(s)),r.buffers.color.setClear(Rl.r,Rl.g,Rl.b,R,d)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,R=1){f.set(D),p=R,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(f,p)},render:E,addToRenderList:S,dispose:I}}function f1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,d=!1;function f(C,U,J,Y,de){let j=!1;const Z=_(Y,J,U);c!==Z&&(c=Z,g(c.object)),j=M(C,Y,J,de),j&&b(C,Y,J,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(j||d)&&(d=!1,R(C,U,J,Y),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function g(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function _(C,U,J){const Y=J.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let j=de[U.id];j===void 0&&(j={},de[U.id]=j);let Z=j[Y];return Z===void 0&&(Z=y(p()),j[Y]=Z),Z}function y(C){const U=[],J=[],Y=[];for(let de=0;de<n;de++)U[de]=0,J[de]=0,Y[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:Y,object:C,attributes:{},index:null}}function M(C,U,J,Y){const de=c.attributes,j=U.attributes;let Z=0;const oe=J.getAttributes();for(const F in oe)if(oe[F].location>=0){const re=de[F];let P=j[F];if(P===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),re===void 0||re.attribute!==P||P&&re.data!==P.data)return!0;Z++}return c.attributesNum!==Z||c.index!==Y}function b(C,U,J,Y){const de={},j=U.attributes;let Z=0;const oe=J.getAttributes();for(const F in oe)if(oe[F].location>=0){let re=j[F];re===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const P={};P.attribute=re,re&&re.data&&(P.data=re.data),de[F]=P,Z++}c.attributes=de,c.attributesNum=Z,c.index=Y}function E(){const C=c.newAttributes;for(let U=0,J=C.length;U<J;U++)C[U]=0}function S(C){x(C,0)}function x(C,U){const J=c.newAttributes,Y=c.enabledAttributes,de=c.attributeDivisors;J[C]=1,Y[C]===0&&(s.enableVertexAttribArray(C),Y[C]=1),de[C]!==U&&(s.vertexAttribDivisor(C,U),de[C]=U)}function I(){const C=c.newAttributes,U=c.enabledAttributes;for(let J=0,Y=U.length;J<Y;J++)U[J]!==C[J]&&(s.disableVertexAttribArray(J),U[J]=0)}function D(C,U,J,Y,de,j,Z){Z===!0?s.vertexAttribIPointer(C,U,J,de,j):s.vertexAttribPointer(C,U,J,Y,de,j)}function R(C,U,J,Y){E();const de=Y.attributes,j=J.getAttributes(),Z=U.defaultAttributeValues;for(const oe in j){const F=j[oe];if(F.location>=0){let le=de[oe];if(le===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,P=le.itemSize,W=e.get(le);if(W===void 0)continue;const fe=W.buffer,$=W.type,me=W.bytesPerElement,ye=$===s.INT||$===s.UNSIGNED_INT||le.gpuType===df;if(le.isInterleavedBufferAttribute){const _e=le.data,Ne=_e.stride,Ye=le.offset;if(_e.isInstancedInterleavedBuffer){for(let je=0;je<F.locationSize;je++)x(F.location+je,_e.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let je=0;je<F.locationSize;je++)S(F.location+je);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let je=0;je<F.locationSize;je++)D(F.location+je,P/F.locationSize,$,re,Ne*me,(Ye+P/F.locationSize*je)*me,ye)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<F.locationSize;_e++)x(F.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<F.locationSize;_e++)S(F.location+_e);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let _e=0;_e<F.locationSize;_e++)D(F.location+_e,P/F.locationSize,$,re,P*me,P/F.locationSize*_e*me,ye)}}else if(Z!==void 0){const re=Z[oe];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(F.location,re);break;case 3:s.vertexAttrib3fv(F.location,re);break;case 4:s.vertexAttrib4fv(F.location,re);break;default:s.vertexAttrib1fv(F.location,re)}}}}I()}function B(){V();for(const C in r){const U=r[C];for(const J in U){const Y=U[J];for(const de in Y)v(Y[de].object),delete Y[de];delete U[J]}delete r[C]}}function z(C){if(r[C.id]===void 0)return;const U=r[C.id];for(const J in U){const Y=U[J];for(const de in Y)v(Y[de].object),delete Y[de];delete U[J]}delete r[C.id]}function O(C){for(const U in r){const J=r[U];if(J[C.id]===void 0)continue;const Y=J[C.id];for(const de in Y)v(Y[de].object),delete Y[de];delete J[C.id]}}function V(){N(),d=!0,c!==o&&(c=o,g(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:N,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:S,disableUnusedAttributes:I}}function h1(s,e,n){let r;function o(g){r=g}function c(g,v){s.drawArrays(r,g,v),n.update(v,r,1)}function d(g,v,_){_!==0&&(s.drawArraysInstanced(r,g,v,_),n.update(v,r,_))}function f(g,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=v[b];n.update(M,r,1)}function p(g,v,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)d(g[b],v[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,v,0,y,0,_);let b=0;for(let E=0;E<_;E++)b+=v[E]*y[E];n.update(b,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function p1(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==ui&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const V=O===$a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Hi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Bi&&!V)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:B,maxSamples:z}}function m1(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Gr,f=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||o;return o=y,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=v(_,y,0)},this.setState=function(_,y,M){const b=_.clippingPlanes,E=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!o||b===null||b.length===0||c&&!S)c?v(null):g();else{const I=c?0:r,D=I*4;let R=x.clippingState||null;p.value=R,R=v(b,y,D,M);for(let B=0;B!==D;++B)R[B]=n[B];x.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,y,M,b){const E=_!==null?_.length:0;let S=null;if(E!==0){if(S=p.value,b!==!0||S===null){const x=M+E*4,I=y.matrixWorldInverse;f.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,R=M;D!==E;++D,R+=4)d.copy(_[D]).applyMatrix4(I,f),d.normal.toArray(S,R),S[R+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function g1(s){let e=new WeakMap;function n(d,f){return f===Td?d.mapping=Ws:f===Cd&&(d.mapping=Xs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Td||f===Cd)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new m_(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",o),n(g.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Os=4,Um=[.125,.215,.35,.446,.526,.582],qr=20,dd=new Xg,Fm=new xt;let fd=null,hd=0,pd=0,md=!1;const Wr=(1+Math.sqrt(5))/2,Us=1/Wr,km=[new ne(-Wr,Us,0),new ne(Wr,Us,0),new ne(-Us,0,Wr),new ne(Us,0,Wr),new ne(0,Wr,-Us),new ne(0,Wr,Us),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,hd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:$a,format:ui,colorSpace:Ys,depthBuffer:!1},o=zm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x1(c)),this._blurMaterial=v1(c,e,n)}return o}_compileMaterial(e){const n=new Hn(this._lodPlanes[0],e);this._renderer.compile(n,dd)}_sceneToCubeUV(e,n,r,o){const f=new Vn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(Fm),v.toneMapping=Sr,v.autoClear=!1;const M=new kg({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),b=new Hn(new Qa,M);let E=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,E=!0):(M.color.copy(Fm),E=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(f.up.set(0,p[x],0),f.lookAt(g[x],0,0)):I===1?(f.up.set(0,0,p[x]),f.lookAt(0,g[x],0)):(f.up.set(0,p[x],0),f.lookAt(0,0,g[x]));const D=this._cubeSize;Pl(o,I*D,x>2?D:0,D,D),v.setRenderTarget(o),E&&v.render(b,f),v.render(e,f)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=y,v.autoClear=_,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Ws||e.mapping===Xs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new Hn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,dd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=km[(o-c-1)%km.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const p=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Hn(this._lodPlanes[o],g),y=g.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*qr-1),E=c/b,S=isFinite(c)?1+Math.floor(v*E):qr;S>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qr}`);const x=[];let I=0;for(let O=0;O<qr;++O){const V=O/E,N=Math.exp(-V*V/2);x.push(N),O===0?I+=N:O<S&&(I+=2*N)}for(let O=0;O<x.length;O++)x[O]=x[O]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:D}=this;y.dTheta.value=b,y.mipInt.value=D-r;const R=this._sizeLods[o],B=3*R*(o>D-Os?o-D+Os:0),z=4*(this._cubeSize-R);Pl(n,B,z,3*R,2*R),p.setRenderTarget(n),p.render(_,dd)}}function x1(s){const e=[],n=[],r=[];let o=s;const c=s-Os+1+Um.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);n.push(f);let p=1/f;d>s-Os?p=Um[d-s+Os-1]:d===0&&(p=0),r.push(p);const g=1/(f-2),v=-g,_=1+g,y=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,b=6,E=3,S=2,x=1,I=new Float32Array(E*b*M),D=new Float32Array(S*b*M),R=new Float32Array(x*b*M);for(let z=0;z<M;z++){const O=z%3*2/3-1,V=z>2?0:-1,N=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];I.set(N,E*b*z),D.set(y,S*b*z);const C=[z,z,z,z,z,z];R.set(C,x*b*z)}const B=new hi;B.setAttribute("position",new fi(I,E)),B.setAttribute("uv",new fi(D,S)),B.setAttribute("faceIndex",new fi(R,x)),e.push(B),o>Os&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function zm(s,e,n){const r=new Zr(s,e,n);return r.texture.mapping=$l,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function v1(s,e,n){const r=new Float32Array(qr),o=new ne(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:yf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Bm(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function jm(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function _1(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,g=p===Td||p===Cd,v=p===Ws||p===Xs;if(g||v){let _=e.get(f);const y=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new Om(s)),_=g?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return g&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new Om(s)),_=g?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let p=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function y1(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Fs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function S1(s,e,n,r){const o={},c=new WeakMap;function d(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",d),delete o[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(_,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,n.memory.geometries++),y}function p(_){const y=_.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function g(_){const y=[],M=_.index,b=_.attributes.position;let E=0;if(M!==null){const I=M.array;E=M.version;for(let D=0,R=I.length;D<R;D+=3){const B=I[D+0],z=I[D+1],O=I[D+2];y.push(B,z,z,O,O,B)}}else if(b!==void 0){const I=b.array;E=b.version;for(let D=0,R=I.length/3-1;D<R;D+=3){const B=D+0,z=D+1,O=D+2;y.push(B,z,z,O,O,B)}}else return;const S=new(Pg(y)?zg:Og)(y,1);S.version=E;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function v(_){const y=c.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&g(_)}else g(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function M1(s,e,n){let r;function o(y){r=y}let c,d;function f(y){c=y.type,d=y.bytesPerElement}function p(y,M){s.drawElements(r,M,c,y*d),n.update(M,r,1)}function g(y,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,y*d,b),n.update(M,r,b))}function v(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,b);let S=0;for(let x=0;x<b;x++)S+=M[x];n.update(S,r,1)}function _(y,M,b,E){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)g(y[x]/d,M[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,E,0,b);let x=0;for(let I=0;I<b;I++)x+=M[I]*E[I];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function b1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function w1(s,e,n){const r=new WeakMap,o=new Dt;function c(d,f,p){const g=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(f);if(y===void 0||y.count!==_){let C=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const b=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let R=0;b===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let B=f.attributes.position.count*R,z=1;B>e.maxTextureSize&&(z=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*z*4*_),V=new Dg(O,B,z,_);V.type=Bi,V.needsUpdate=!0;const N=R*4;for(let U=0;U<_;U++){const J=x[U],Y=I[U],de=D[U],j=B*z*4*U;for(let Z=0;Z<J.count;Z++){const oe=Z*N;b===!0&&(o.fromBufferAttribute(J,Z),O[j+oe+0]=o.x,O[j+oe+1]=o.y,O[j+oe+2]=o.z,O[j+oe+3]=0),E===!0&&(o.fromBufferAttribute(Y,Z),O[j+oe+4]=o.x,O[j+oe+5]=o.y,O[j+oe+6]=o.z,O[j+oe+7]=0),S===!0&&(o.fromBufferAttribute(de,Z),O[j+oe+8]=o.x,O[j+oe+9]=o.y,O[j+oe+10]=o.z,O[j+oe+11]=de.itemSize===4?o.w:1)}}y={count:_,texture:V,size:new At(B,z)},r.set(f,y),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let b=0;for(let S=0;S<g.length;S++)b+=g[S];const E=f.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function E1(s,e,n,r){let o=new WeakMap;function c(p){const g=r.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==g&&(e.update(_),o.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return _}function d(){o=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:d}}const $g=new Un,Vm=new Gg(1,1),Yg=new Dg,Kg=new Qv,Zg=new Vg,Hm=[],Gm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function na(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Hm[o];if(c===void 0&&(c=new Float32Array(o),Hm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ql(s,e){let n=Gm[e];n===void 0&&(n=new Int32Array(e),Gm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function T1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function C1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function A1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function N1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function R1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;qm.set(r),s.uniformMatrix2fv(this.addr,!1,qm),tn(n,r)}}function P1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Xm.set(r),s.uniformMatrix3fv(this.addr,!1,Xm),tn(n,r)}}function L1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Wm.set(r),s.uniformMatrix4fv(this.addr,!1,Wm),tn(n,r)}}function D1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function I1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function U1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function F1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function k1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function O1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function z1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function B1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function j1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Vm.compareFunction=Rg,c=Vm):c=$g,n.setTexture2D(e||c,o)}function V1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Kg,o)}function H1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Zg,o)}function G1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Yg,o)}function W1(s){switch(s){case 5126:return T1;case 35664:return C1;case 35665:return A1;case 35666:return N1;case 35674:return R1;case 35675:return P1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return I1;case 35668:case 35672:return U1;case 35669:case 35673:return F1;case 5125:return k1;case 36294:return O1;case 36295:return z1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}function X1(s,e){s.uniform1fv(this.addr,e)}function q1(s,e){const n=na(e,this.size,2);s.uniform2fv(this.addr,n)}function $1(s,e){const n=na(e,this.size,3);s.uniform3fv(this.addr,n)}function Y1(s,e){const n=na(e,this.size,4);s.uniform4fv(this.addr,n)}function K1(s,e){const n=na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Z1(s,e){const n=na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Q1(s,e){const n=na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function J1(s,e){s.uniform1iv(this.addr,e)}function eM(s,e){s.uniform2iv(this.addr,e)}function tM(s,e){s.uniform3iv(this.addr,e)}function nM(s,e){s.uniform4iv(this.addr,e)}function iM(s,e){s.uniform1uiv(this.addr,e)}function rM(s,e){s.uniform2uiv(this.addr,e)}function sM(s,e){s.uniform3uiv(this.addr,e)}function aM(s,e){s.uniform4uiv(this.addr,e)}function oM(s,e,n){const r=this.cache,o=e.length,c=Ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||$g,c[d])}function lM(s,e,n){const r=this.cache,o=e.length,c=Ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||Kg,c[d])}function cM(s,e,n){const r=this.cache,o=e.length,c=Ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||Zg,c[d])}function uM(s,e,n){const r=this.cache,o=e.length,c=Ql(n,o);en(r,c)||(s.uniform1iv(this.addr,c),tn(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Yg,c[d])}function dM(s){switch(s){case 5126:return X1;case 35664:return q1;case 35665:return $1;case 35666:return Y1;case 35674:return K1;case 35675:return Z1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return uM}}class fM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=W1(n.type)}}class hM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dM(n.type)}}class pM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function $m(s,e){s.seq.push(e),s.map[e.id]=e}function mM(s,e,n){const r=s.name,o=r.length;for(gd.lastIndex=0;;){const c=gd.exec(r),d=gd.lastIndex;let f=c[1];const p=c[2]==="]",g=c[3];if(p&&(f=f|0),g===void 0||g==="["&&d+2===o){$m(n,g===void 0?new fM(f,s,e):new hM(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new pM(f),$m(n,_)),n=_}}}class zl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);mM(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function Ym(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const gM=37297;let xM=0;function vM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const Km=new ht;function _M(s){Ct._getMatrix(Km,Ct.workingColorSpace,s);const e=`mat3( ${Km.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Zm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+vM(s.getShaderSource(e),d)}else return o}function yM(s,e){const n=_M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function SM(s,e){let n;switch(e){case wv:n="Linear";break;case Ev:n="Reinhard";break;case Tv:n="Cineon";break;case Cv:n="ACESFilmic";break;case Nv:n="AgX";break;case Rv:n="Neutral";break;case Av:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new ne;function MM(){Ct.getLuminanceCoefficients(Ll);const s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function wM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Va(s){return s!==""}function Qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(s){return s.replace(TM,AM)}const CM=new Map;function AM(s,e){let n=mt[e];if(n===void 0){const r=CM.get(e);if(r!==void 0)n=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sf(n)}const NM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(s){return s.replace(NM,RM)}function RM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function tg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===iv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function LM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function IM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xg:e="ENVMAP_BLENDING_MULTIPLY";break;case Mv:e="ENVMAP_BLENDING_MIX";break;case bv:e="ENVMAP_BLENDING_ADD";break}return e}function UM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function FM(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=PM(n),g=LM(n),v=DM(n),_=IM(n),y=UM(n),M=bM(n),b=wM(c),E=o.createProgram();let S,x,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Va).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Va).join(`
`),x.length>0&&(x+=`
`)):(S=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),x=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?mt.tonemapping_pars_fragment:"",n.toneMapping!==Sr?SM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,yM("linearToOutputTexel",n.outputColorSpace),MM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),d=sf(d),d=Qm(d,n),d=Jm(d,n),f=sf(f),f=Qm(f,n),f=Jm(f,n),d=eg(d),f=eg(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=I+S+d,R=I+x+f,B=Ym(o,o.VERTEX_SHADER,D),z=Ym(o,o.FRAGMENT_SHADER,R);o.attachShader(E,B),o.attachShader(E,z),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function O(U){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(E).trim(),Y=o.getShaderInfoLog(B).trim(),de=o.getShaderInfoLog(z).trim();let j=!0,Z=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,B,z);else{const oe=Zm(o,B,"vertex"),F=Zm(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+oe+`
`+F)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||de==="")&&(Z=!1);Z&&(U.diagnostics={runnable:j,programLog:J,vertexShader:{log:Y,prefix:S},fragmentShader:{log:de,prefix:x}})}o.deleteShader(B),o.deleteShader(z),V=new zl(o,E),N=EM(o,E)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(E,gM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=B,this.fragmentShader=z,this}let kM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new zM(e),n.set(e,r)),r}}class zM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function BM(s,e,n,r,o,c,d){const f=new Ug,p=new OM,g=new Set,v=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return g.add(N),N===0?"uv":`uv${N}`}function S(N,C,U,J,Y){const de=J.fog,j=Y.geometry,Z=N.isMeshStandardMaterial?J.environment:null,oe=(N.isMeshStandardMaterial?n:e).get(N.envMap||Z),F=oe&&oe.mapping===$l?oe.image.height:null,le=b[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,P=re!==void 0?re.length:0;let W=0;j.morphAttributes.position!==void 0&&(W=1),j.morphAttributes.normal!==void 0&&(W=2),j.morphAttributes.color!==void 0&&(W=3);let fe,$,me,ye;if(le){const Mt=yi[le];fe=Mt.vertexShader,$=Mt.fragmentShader}else fe=N.vertexShader,$=N.fragmentShader,p.update(N),me=p.getVertexShaderID(N),ye=p.getFragmentShaderID(N);const _e=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Ye=Y.isInstancedMesh===!0,je=Y.isBatchedMesh===!0,Rt=!!N.map,Pt=!!N.matcap,ct=!!oe,H=!!N.aoMap,Kt=!!N.lightMap,pt=!!N.bumpMap,lt=!!N.normalMap,Ke=!!N.displacementMap,Et=!!N.emissiveMap,Ge=!!N.metalnessMap,L=!!N.roughnessMap,T=N.anisotropy>0,se=N.clearcoat>0,ve=N.dispersion>0,Se=N.iridescence>0,xe=N.sheen>0,Xe=N.transmission>0,Ae=T&&!!N.anisotropyMap,Ue=se&&!!N.clearcoatMap,dt=se&&!!N.clearcoatNormalMap,Ee=se&&!!N.clearcoatRoughnessMap,Oe=Se&&!!N.iridescenceMap,Qe=Se&&!!N.iridescenceThicknessMap,nt=xe&&!!N.sheenColorMap,ze=xe&&!!N.sheenRoughnessMap,ft=!!N.specularMap,ae=!!N.specularColorMap,Je=!!N.specularIntensityMap,q=Xe&&!!N.transmissionMap,Re=Xe&&!!N.thicknessMap,he=!!N.gradientMap,ge=!!N.alphaMap,Ie=N.alphaTest>0,De=!!N.alphaHash,ot=!!N.extensions;let Ft=Sr;N.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Zt={shaderID:le,shaderType:N.type,shaderName:N.name,vertexShader:fe,fragmentShader:$,defines:N.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:je,batchingColor:je&&Y._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&Y.instanceColor!==null,instancingMorph:Ye&&Y.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ys,alphaToCoverage:!!N.alphaToCoverage,map:Rt,matcap:Pt,envMap:ct,envMapMode:ct&&oe.mapping,envMapCubeUVHeight:F,aoMap:H,lightMap:Kt,bumpMap:pt,normalMap:lt,displacementMap:y&&Ke,emissiveMap:Et,normalMapObjectSpace:lt&&N.normalMapType===Iv,normalMapTangentSpace:lt&&N.normalMapType===Ng,metalnessMap:Ge,roughnessMap:L,anisotropy:T,anisotropyMap:Ae,clearcoat:se,clearcoatMap:Ue,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ee,dispersion:ve,iridescence:Se,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:xe,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:ae,specularIntensityMap:Je,transmission:Xe,transmissionMap:q,thicknessMap:Re,gradientMap:he,opaque:N.transparent===!1&&N.blending===zs&&N.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:De,combine:N.combine,mapUv:Rt&&E(N.map.channel),aoMapUv:H&&E(N.aoMap.channel),lightMapUv:Kt&&E(N.lightMap.channel),bumpMapUv:pt&&E(N.bumpMap.channel),normalMapUv:lt&&E(N.normalMap.channel),displacementMapUv:Ke&&E(N.displacementMap.channel),emissiveMapUv:Et&&E(N.emissiveMap.channel),metalnessMapUv:Ge&&E(N.metalnessMap.channel),roughnessMapUv:L&&E(N.roughnessMap.channel),anisotropyMapUv:Ae&&E(N.anisotropyMap.channel),clearcoatMapUv:Ue&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:dt&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(N.sheenRoughnessMap.channel),specularMapUv:ft&&E(N.specularMap.channel),specularColorMapUv:ae&&E(N.specularColorMap.channel),specularIntensityMapUv:Je&&E(N.specularIntensityMap.channel),transmissionMapUv:q&&E(N.transmissionMap.channel),thicknessMapUv:Re&&E(N.thicknessMap.channel),alphaMapUv:ge&&E(N.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(lt||T),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!j.attributes.uv&&(Rt||ge),fog:!!de,useFog:N.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ne,skinning:Y.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:W,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Rt&&N.map.isVideoTexture===!0&&Ct.getTransfer(N.map.colorSpace)===Lt,decodeVideoTextureEmissive:Et&&N.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(N.emissiveMap.colorSpace)===Lt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===li,flipSided:N.side===In,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ot&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&N.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Zt.vertexUv1s=g.has(1),Zt.vertexUv2s=g.has(2),Zt.vertexUv3s=g.has(3),g.clear(),Zt}function x(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const U in N.defines)C.push(U),C.push(N.defines[U]);return N.isRawShaderMaterial===!1&&(I(C,N),D(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function I(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function D(N,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),N.push(f.mask)}function R(N){const C=b[N.type];let U;if(C){const J=yi[C];U=d_.clone(J.uniforms)}else U=N.uniforms;return U}function B(N,C){let U;for(let J=0,Y=v.length;J<Y;J++){const de=v[J];if(de.cacheKey===C){U=de,++U.usedTimes;break}}return U===void 0&&(U=new FM(s,C,N,c),v.push(U)),U}function z(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function O(N){p.remove(N)}function V(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:B,releaseProgram:z,releaseShaderCache:O,programs:v,dispose:V}}function jM(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function VM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ig(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(_,y,M,b,E,S){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:y,material:M,groupOrder:b,renderOrder:_.renderOrder,z:E,group:S},s[e]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=M,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=E,x.group=S),e++,x}function f(_,y,M,b,E,S){const x=d(_,y,M,b,E,S);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):n.push(x)}function p(_,y,M,b,E,S){const x=d(_,y,M,b,E,S);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):n.unshift(x)}function g(_,y){n.length>1&&n.sort(_||VM),r.length>1&&r.sort(y||ng),o.length>1&&o.sort(y||ng)}function v(){for(let _=e,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:v,sort:g}}function HM(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new ig,s.set(r,[d])):o>=c.length?(d=new ig,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function GM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new xt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function WM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let XM=0;function qM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $M(s){const e=new GM,n=WM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new ne);const o=new ne,c=new jt,d=new jt;function f(g){let v=0,_=0,y=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,b=0,E=0,S=0,x=0,I=0,D=0,R=0,B=0,z=0,O=0;g.sort(qM);for(let N=0,C=g.length;N<C;N++){const U=g[N],J=U.color,Y=U.intensity,de=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)v+=J.r*Y,_+=J.g*Y,y+=J.b*Y;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(U.sh.coefficients[Z],Y);O++}else if(U.isDirectionalLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const oe=U.shadow,F=n.get(U);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,r.directionalShadow[M]=F,r.directionalShadowMap[M]=j,r.directionalShadowMatrix[M]=U.shadow.matrix,I++}r.directional[M]=Z,M++}else if(U.isSpotLight){const Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(J).multiplyScalar(Y),Z.distance=de,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,r.spot[E]=Z;const oe=U.shadow;if(U.map&&(r.spotLightMap[B]=U.map,B++,oe.updateMatrices(U),U.castShadow&&z++),r.spotLightMatrix[E]=oe.matrix,U.castShadow){const F=n.get(U);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,r.spotShadow[E]=F,r.spotShadowMap[E]=j,R++}E++}else if(U.isRectAreaLight){const Z=e.get(U);Z.color.copy(J).multiplyScalar(Y),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),r.rectArea[S]=Z,S++}else if(U.isPointLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const oe=U.shadow,F=n.get(U);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,F.shadowCameraNear=oe.camera.near,F.shadowCameraFar=oe.camera.far,r.pointShadow[b]=F,r.pointShadowMap[b]=j,r.pointShadowMatrix[b]=U.shadow.matrix,D++}r.point[b]=Z,b++}else if(U.isHemisphereLight){const Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(Y),Z.groundColor.copy(U.groundColor).multiplyScalar(Y),r.hemi[x]=Z,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==M||V.pointLength!==b||V.spotLength!==E||V.rectAreaLength!==S||V.hemiLength!==x||V.numDirectionalShadows!==I||V.numPointShadows!==D||V.numSpotShadows!==R||V.numSpotMaps!==B||V.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=S,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=O,V.directionalLength=M,V.pointLength=b,V.spotLength=E,V.rectAreaLength=S,V.hemiLength=x,V.numDirectionalShadows=I,V.numPointShadows=D,V.numSpotShadows=R,V.numSpotMaps=B,V.numLightProbes=O,r.version=XM++)}function p(g,v){let _=0,y=0,M=0,b=0,E=0;const S=v.matrixWorldInverse;for(let x=0,I=g.length;x<I;x++){const D=g[x];if(D.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),_++}else if(D.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const R=r.hemi[E];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:f,setupView:p,state:r}}function rg(s){const e=new $M(s),n=[],r=[];function o(v){g.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function d(v){r.push(v)}function f(){e.setup(n)}function p(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function YM(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new rg(s),e.set(o,[f])):c>=d.length?(f=new rg(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
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
}`;function QM(s,e,n){let r=new xf;const o=new At,c=new At,d=new Dt,f=new S_({depthPacking:Dv}),p=new M_,g={},v=n.maxTextureSize,_={[Mr]:In,[In]:Mr,[li]:li},y=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:KM,fragmentShader:ZM}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new hi;b.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Hn(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let x=this.type;this.render=function(z,O,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),J=s.state;J.setBlending(yr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=x!==zi&&this.type===zi,de=x===zi&&this.type!==zi;for(let j=0,Z=z.length;j<Z;j++){const oe=z[j],F=oe.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const le=F.getFrameExtents();if(o.multiply(le),c.copy(F.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/le.x),o.x=c.x*le.x,F.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/le.y),o.y=c.y*le.y,F.mapSize.y=c.y)),F.map===null||Y===!0||de===!0){const P=this.type!==zi?{minFilter:di,magFilter:di}:{};F.map!==null&&F.map.dispose(),F.map=new Zr(o.x,o.y,P),F.map.texture.name=oe.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const re=F.getViewportCount();for(let P=0;P<re;P++){const W=F.getViewport(P);d.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),J.viewport(d),F.updateMatrices(oe,P),r=F.getFrustum(),R(O,V,F.camera,oe,this.type)}F.isPointLightShadow!==!0&&this.type===zi&&I(F,V),F.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(N,C,U)};function I(z,O){const V=e.update(E);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Zr(o.x,o.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(O,null,V,y,E,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(O,null,V,M,E,null)}function D(z,O,V,N){let C=null;const U=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(U!==void 0)C=U;else if(C=V.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const J=C.uuid,Y=O.uuid;let de=g[J];de===void 0&&(de={},g[J]=de);let j=de[Y];j===void 0&&(j=C.clone(),de[Y]=j,O.addEventListener("dispose",B)),C=j}if(C.visible=O.visible,C.wireframe=O.wireframe,N===zi?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=s.properties.get(C);J.light=V}return C}function R(z,O,V,N,C){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===zi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const Y=e.update(z),de=z.material;if(Array.isArray(de)){const j=Y.groups;for(let Z=0,oe=j.length;Z<oe;Z++){const F=j[Z],le=de[F.materialIndex];if(le&&le.visible){const re=D(z,le,N,C);z.onBeforeShadow(s,z,O,V,Y,re,F),s.renderBufferDirect(V,null,Y,re,z,F),z.onAfterShadow(s,z,O,V,Y,re,F)}}}else if(de.visible){const j=D(z,de,N,C);z.onBeforeShadow(s,z,O,V,Y,j,null),s.renderBufferDirect(V,null,Y,j,z,null),z.onAfterShadow(s,z,O,V,Y,j,null)}}const J=z.children;for(let Y=0,de=J.length;Y<de;Y++)R(J[Y],O,V,N,C)}function B(z){z.target.removeEventListener("dispose",B);for(const V in g){const N=g[V],C=z.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const JM={[_d]:yd,[Sd]:wd,[Md]:Ed,[Gs]:bd,[yd]:_d,[wd]:Sd,[Ed]:Md,[bd]:Gs};function eb(s,e){function n(){let q=!1;const Re=new Dt;let he=null;const ge=new Dt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!q&&(s.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){q=Ie},setClear:function(Ie,De,ot,Ft,Zt){Zt===!0&&(Ie*=Ft,De*=Ft,ot*=Ft),Re.set(Ie,De,ot,Ft),ge.equals(Re)===!1&&(s.clearColor(Ie,De,ot,Ft),ge.copy(Re))},reset:function(){q=!1,he=null,ge.set(-1,0,0,0)}}}function r(){let q=!1,Re=!1,he=null,ge=null,Ie=null;return{setReversed:function(De){if(Re!==De){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ie;Ie=null,this.setClear(Ft)}Re=De},getReversed:function(){return Re},setTest:function(De){De?_e(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(De){he!==De&&!q&&(s.depthMask(De),he=De)},setFunc:function(De){if(Re&&(De=JM[De]),ge!==De){switch(De){case _d:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case bd:s.depthFunc(s.GEQUAL);break;case wd:s.depthFunc(s.GREATER);break;case Ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=De}},setLocked:function(De){q=De},setClear:function(De){Ie!==De&&(Re&&(De=1-De),s.clearDepth(De),Ie=De)},reset:function(){q=!1,he=null,ge=null,Ie=null,Re=!1}}}function o(){let q=!1,Re=null,he=null,ge=null,Ie=null,De=null,ot=null,Ft=null,Zt=null;return{setTest:function(Mt){q||(Mt?_e(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!q&&(s.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,Tn,Sn){(he!==Mt||ge!==Tn||Ie!==Sn)&&(s.stencilFunc(Mt,Tn,Sn),he=Mt,ge=Tn,Ie=Sn)},setOp:function(Mt,Tn,Sn){(De!==Mt||ot!==Tn||Ft!==Sn)&&(s.stencilOp(Mt,Tn,Sn),De=Mt,ot=Tn,Ft=Sn)},setLocked:function(Mt){q=Mt},setClear:function(Mt){Zt!==Mt&&(s.clearStencil(Mt),Zt=Mt)},reset:function(){q=!1,Re=null,he=null,ge=null,Ie=null,De=null,ot=null,Ft=null,Zt=null}}}const c=new n,d=new r,f=new o,p=new WeakMap,g=new WeakMap;let v={},_={},y=new WeakMap,M=[],b=null,E=!1,S=null,x=null,I=null,D=null,R=null,B=null,z=null,O=new xt(0,0,0),V=0,N=!1,C=null,U=null,J=null,Y=null,de=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,oe=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=oe>=1):F.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=oe>=2);let le=null,re={};const P=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),fe=new Dt().fromArray(P),$=new Dt().fromArray(W);function me(q,Re,he,ge){const Ie=new Uint8Array(4),De=s.createTexture();s.bindTexture(q,De),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<he;ot++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Re+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return De}const ye={};ye[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),d.setFunc(Gs),pt(!1),lt(sm),_e(s.CULL_FACE),H(yr);function _e(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function Ne(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function Ye(q,Re){return _[q]!==Re?(s.bindFramebuffer(q,Re),_[q]=Re,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function je(q,Re){let he=M,ge=!1;if(q){he=y.get(Re),he===void 0&&(he=[],y.set(Re,he));const Ie=q.textures;if(he.length!==Ie.length||he[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ot=Ie.length;De<ot;De++)he[De]=s.COLOR_ATTACHMENT0+De;he.length=Ie.length,ge=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,ge=!0);ge&&s.drawBuffers(he)}function Rt(q){return b!==q?(s.useProgram(q),b=q,!0):!1}const Pt={[Xr]:s.FUNC_ADD,[sv]:s.FUNC_SUBTRACT,[av]:s.FUNC_REVERSE_SUBTRACT};Pt[ov]=s.MIN,Pt[lv]=s.MAX;const ct={[cv]:s.ZERO,[uv]:s.ONE,[dv]:s.SRC_COLOR,[xd]:s.SRC_ALPHA,[xv]:s.SRC_ALPHA_SATURATE,[mv]:s.DST_COLOR,[hv]:s.DST_ALPHA,[fv]:s.ONE_MINUS_SRC_COLOR,[vd]:s.ONE_MINUS_SRC_ALPHA,[gv]:s.ONE_MINUS_DST_COLOR,[pv]:s.ONE_MINUS_DST_ALPHA,[vv]:s.CONSTANT_COLOR,[_v]:s.ONE_MINUS_CONSTANT_COLOR,[yv]:s.CONSTANT_ALPHA,[Sv]:s.ONE_MINUS_CONSTANT_ALPHA};function H(q,Re,he,ge,Ie,De,ot,Ft,Zt,Mt){if(q===yr){E===!0&&(Ne(s.BLEND),E=!1);return}if(E===!1&&(_e(s.BLEND),E=!0),q!==rv){if(q!==S||Mt!==N){if((x!==Xr||R!==Xr)&&(s.blendEquation(s.FUNC_ADD),x=Xr,R=Xr),Mt)switch(q){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case am:s.blendFunc(s.ONE,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case am:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}I=null,D=null,B=null,z=null,O.set(0,0,0),V=0,S=q,N=Mt}return}Ie=Ie||Re,De=De||he,ot=ot||ge,(Re!==x||Ie!==R)&&(s.blendEquationSeparate(Pt[Re],Pt[Ie]),x=Re,R=Ie),(he!==I||ge!==D||De!==B||ot!==z)&&(s.blendFuncSeparate(ct[he],ct[ge],ct[De],ct[ot]),I=he,D=ge,B=De,z=ot),(Ft.equals(O)===!1||Zt!==V)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Zt),O.copy(Ft),V=Zt),S=q,N=!1}function Kt(q,Re){q.side===li?Ne(s.CULL_FACE):_e(s.CULL_FACE);let he=q.side===In;Re&&(he=!he),pt(he),q.blending===zs&&q.transparent===!1?H(yr):H(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const ge=q.stencilWrite;f.setTest(ge),ge&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Et(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(q){C!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),C=q)}function lt(q){q!==tv?(_e(s.CULL_FACE),q!==U&&(q===sm?s.cullFace(s.BACK):q===nv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),U=q}function Ke(q){q!==J&&(Z&&s.lineWidth(q),J=q)}function Et(q,Re,he){q?(_e(s.POLYGON_OFFSET_FILL),(Y!==Re||de!==he)&&(s.polygonOffset(Re,he),Y=Re,de=he)):Ne(s.POLYGON_OFFSET_FILL)}function Ge(q){q?_e(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function L(q){q===void 0&&(q=s.TEXTURE0+j-1),le!==q&&(s.activeTexture(q),le=q)}function T(q,Re,he){he===void 0&&(le===null?he=s.TEXTURE0+j-1:he=le);let ge=re[he];ge===void 0&&(ge={type:void 0,texture:void 0},re[he]=ge),(ge.type!==q||ge.texture!==Re)&&(le!==he&&(s.activeTexture(he),le=he),s.bindTexture(q,Re||ye[q]),ge.type=q,ge.texture=Re)}function se(){const q=re[le];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(q){fe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),fe.copy(q))}function ze(q){$.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),$.copy(q))}function ft(q,Re){let he=g.get(Re);he===void 0&&(he=new WeakMap,g.set(Re,he));let ge=he.get(q);ge===void 0&&(ge=s.getUniformBlockIndex(Re,q.name),he.set(q,ge))}function ae(q,Re){const ge=g.get(Re).get(q);p.get(Re)!==ge&&(s.uniformBlockBinding(Re,ge,q.__bindingPointIndex),p.set(Re,ge))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,re={},_={},y=new WeakMap,M=[],b=null,E=!1,S=null,x=null,I=null,D=null,R=null,B=null,z=null,O=new xt(0,0,0),V=0,N=!1,C=null,U=null,J=null,Y=null,de=null,fe.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:_e,disable:Ne,bindFramebuffer:Ye,drawBuffers:je,useProgram:Rt,setBlending:H,setMaterial:Kt,setFlipSided:pt,setCullFace:lt,setLineWidth:Ke,setPolygonOffset:Et,setScissorTest:Ge,activeTexture:L,bindTexture:T,unbindTexture:se,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ft,uniformBlockBinding:ae,texStorage2D:dt,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:nt,viewport:ze,reset:Je}}function tb(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new At,v=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return M?new OffscreenCanvas(L,T):Vl("canvas")}function E(L,T,se){let ve=1;const Se=Ge(L);if((Se.width>se||Se.height>se)&&(ve=se/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const xe=Math.floor(ve*Se.width),Xe=Math.floor(ve*Se.height);_===void 0&&(_=b(xe,Xe));const Ae=T?b(xe,Xe):_;return Ae.width=xe,Ae.height=Xe,Ae.getContext("2d").drawImage(L,0,0,xe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+xe+"x"+Xe+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,T,se,ve,Se=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe=T;if(T===s.RED&&(se===s.FLOAT&&(xe=s.R32F),se===s.HALF_FLOAT&&(xe=s.R16F),se===s.UNSIGNED_BYTE&&(xe=s.R8)),T===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.R8UI),se===s.UNSIGNED_SHORT&&(xe=s.R16UI),se===s.UNSIGNED_INT&&(xe=s.R32UI),se===s.BYTE&&(xe=s.R8I),se===s.SHORT&&(xe=s.R16I),se===s.INT&&(xe=s.R32I)),T===s.RG&&(se===s.FLOAT&&(xe=s.RG32F),se===s.HALF_FLOAT&&(xe=s.RG16F),se===s.UNSIGNED_BYTE&&(xe=s.RG8)),T===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RG8UI),se===s.UNSIGNED_SHORT&&(xe=s.RG16UI),se===s.UNSIGNED_INT&&(xe=s.RG32UI),se===s.BYTE&&(xe=s.RG8I),se===s.SHORT&&(xe=s.RG16I),se===s.INT&&(xe=s.RG32I)),T===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),se===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),se===s.UNSIGNED_INT&&(xe=s.RGB32UI),se===s.BYTE&&(xe=s.RGB8I),se===s.SHORT&&(xe=s.RGB16I),se===s.INT&&(xe=s.RGB32I)),T===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),se===s.UNSIGNED_INT&&(xe=s.RGBA32UI),se===s.BYTE&&(xe=s.RGBA8I),se===s.SHORT&&(xe=s.RGBA16I),se===s.INT&&(xe=s.RGBA32I)),T===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),T===s.RGBA){const Xe=Se?Bl:Ct.getTransfer(ve);se===s.FLOAT&&(xe=s.RGBA32F),se===s.HALF_FLOAT&&(xe=s.RGBA16F),se===s.UNSIGNED_BYTE&&(xe=Xe===Lt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function R(L,T){let se;return L?T===null||T===Kr||T===qs?se=s.DEPTH24_STENCIL8:T===Bi?se=s.DEPTH32F_STENCIL8:T===Wa&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Kr||T===qs?se=s.DEPTH_COMPONENT24:T===Bi?se=s.DEPTH_COMPONENT32F:T===Wa&&(se=s.DEPTH_COMPONENT16),se}function B(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==di&&L.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function z(L){const T=L.target;T.removeEventListener("dispose",z),V(T),T.isVideoTexture&&v.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),C(T)}function V(L){const T=r.get(L);if(T.__webglInit===void 0)return;const se=L.source,ve=y.get(se);if(ve){const Se=ve[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&N(L),Object.keys(ve).length===0&&y.delete(se)}r.remove(L)}function N(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const se=L.source,ve=y.get(se);delete ve[T.__cacheKey],d.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Se=0;Se<T.__webglFramebuffer[ve].length;Se++)s.deleteFramebuffer(T.__webglFramebuffer[ve][Se]);else s.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[ve]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const se=L.textures;for(let ve=0,Se=se.length;ve<Se;ve++){const xe=r.get(se[ve]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),d.memory.textures--),r.remove(se[ve])}r.remove(L)}let U=0;function J(){U=0}function Y(){const L=U;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),U+=1,L}function de(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function j(L,T){const se=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&se.__version!==L.version){const ve=L.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(se,L,T);return}}n.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+T)}function Z(L,T){const se=r.get(L);if(L.version>0&&se.__version!==L.version){$(se,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+T)}function oe(L,T){const se=r.get(L);if(L.version>0&&se.__version!==L.version){$(se,L,T);return}n.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+T)}function F(L,T){const se=r.get(L);if(L.version>0&&se.__version!==L.version){me(se,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+T)}const le={[Ad]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[Nd]:s.MIRRORED_REPEAT},re={[di]:s.NEAREST,[Pv]:s.NEAREST_MIPMAP_NEAREST,[cl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[zu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},P={[Uv]:s.NEVER,[jv]:s.ALWAYS,[Fv]:s.LESS,[Rg]:s.LEQUAL,[kv]:s.EQUAL,[Bv]:s.GEQUAL,[Ov]:s.GREATER,[zv]:s.NOTEQUAL};function W(L,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===zu||T.magFilter===cl||T.magFilter===Yr||T.minFilter===Si||T.minFilter===zu||T.minFilter===cl||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===di||T.minFilter!==cl&&T.minFilter!==Yr||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function fe(L,T){let se=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",z));const ve=T.source;let Se=y.get(ve);Se===void 0&&(Se={},y.set(ve,Se));const xe=de(T);if(xe!==L.__cacheKey){Se[xe]===void 0&&(Se[xe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,se=!0),Se[xe].usedTimes++;const Xe=Se[L.__cacheKey];Xe!==void 0&&(Se[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&N(T)),L.__cacheKey=xe,L.__webglTexture=Se[xe].texture}return se}function $(L,T,se){let ve=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=s.TEXTURE_3D);const Se=fe(L,T),xe=T.source;n.bindTexture(ve,L.__webglTexture,s.TEXTURE0+se);const Xe=r.get(xe);if(xe.version!==Xe.__version||Se===!0){n.activeTexture(s.TEXTURE0+se);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Ue=T.colorSpace===_r?null:Ct.getPrimaries(T.colorSpace),dt=T.colorSpace===_r||Ae===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ee=E(T.image,!1,o.maxTextureSize);Ee=Et(T,Ee);const Oe=c.convert(T.format,T.colorSpace),Qe=c.convert(T.type);let nt=D(T.internalFormat,Oe,Qe,T.colorSpace,T.isVideoTexture);W(ve,T);let ze;const ft=T.mipmaps,ae=T.isVideoTexture!==!0,Je=Xe.__version===void 0||Se===!0,q=xe.dataReady,Re=B(T,Ee);if(T.isDepthTexture)nt=R(T.format===$s,T.type),Je&&(ae?n.texStorage2D(s.TEXTURE_2D,1,nt,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Oe,Qe,null));else if(T.isDataTexture)if(ft.length>0){ae&&Je&&n.texStorage2D(s.TEXTURE_2D,Re,nt,ft[0].width,ft[0].height);for(let he=0,ge=ft.length;he<ge;he++)ze=ft[he],ae?q&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,ze.width,ze.height,Oe,Qe,ze.data):n.texImage2D(s.TEXTURE_2D,he,nt,ze.width,ze.height,0,Oe,Qe,ze.data);T.generateMipmaps=!1}else ae?(Je&&n.texStorage2D(s.TEXTURE_2D,Re,nt,Ee.width,Ee.height),q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Oe,Qe,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Oe,Qe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Je&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,ft[0].width,ft[0].height,Ee.depth);for(let he=0,ge=ft.length;he<ge;he++)if(ze=ft[he],T.format!==ui)if(Oe!==null)if(ae){if(q)if(T.layerUpdates.size>0){const Ie=Im(ze.width,ze.height,T.format,T.type);for(const De of T.layerUpdates){const ot=ze.data.subarray(De*Ie/ze.data.BYTES_PER_ELEMENT,(De+1)*Ie/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,De,ze.width,ze.height,1,Oe,ot)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,ze.width,ze.height,Ee.depth,Oe,ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,nt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,ze.width,ze.height,Ee.depth,Oe,Qe,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,he,nt,ze.width,ze.height,Ee.depth,0,Oe,Qe,ze.data)}else{ae&&Je&&n.texStorage2D(s.TEXTURE_2D,Re,nt,ft[0].width,ft[0].height);for(let he=0,ge=ft.length;he<ge;he++)ze=ft[he],T.format!==ui?Oe!==null?ae?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,ze.width,ze.height,Oe,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,he,nt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?q&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,ze.width,ze.height,Oe,Qe,ze.data):n.texImage2D(s.TEXTURE_2D,he,nt,ze.width,ze.height,0,Oe,Qe,ze.data)}else if(T.isDataArrayTexture)if(ae){if(Je&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,Ee.width,Ee.height,Ee.depth),q)if(T.layerUpdates.size>0){const he=Im(Ee.width,Ee.height,T.format,T.type);for(const ge of T.layerUpdates){const Ie=Ee.data.subarray(ge*he/Ee.data.BYTES_PER_ELEMENT,(ge+1)*he/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Ee.width,Ee.height,1,Oe,Qe,Ie)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Qe,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,Oe,Qe,Ee.data);else if(T.isData3DTexture)ae?(Je&&n.texStorage3D(s.TEXTURE_3D,Re,nt,Ee.width,Ee.height,Ee.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Qe,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,Oe,Qe,Ee.data);else if(T.isFramebufferTexture){if(Je)if(ae)n.texStorage2D(s.TEXTURE_2D,Re,nt,Ee.width,Ee.height);else{let he=Ee.width,ge=Ee.height;for(let Ie=0;Ie<Re;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,nt,he,ge,0,Oe,Qe,null),he>>=1,ge>>=1}}else if(ft.length>0){if(ae&&Je){const he=Ge(ft[0]);n.texStorage2D(s.TEXTURE_2D,Re,nt,he.width,he.height)}for(let he=0,ge=ft.length;he<ge;he++)ze=ft[he],ae?q&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Oe,Qe,ze):n.texImage2D(s.TEXTURE_2D,he,nt,Oe,Qe,ze);T.generateMipmaps=!1}else if(ae){if(Je){const he=Ge(Ee);n.texStorage2D(s.TEXTURE_2D,Re,nt,he.width,he.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,Ee)}else n.texImage2D(s.TEXTURE_2D,0,nt,Oe,Qe,Ee);S(T)&&x(ve),Xe.__version=xe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function me(L,T,se){if(T.image.length!==6)return;const ve=fe(L,T),Se=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+se);const xe=r.get(Se);if(Se.version!==xe.__version||ve===!0){n.activeTexture(s.TEXTURE0+se);const Xe=Ct.getPrimaries(Ct.workingColorSpace),Ae=T.colorSpace===_r?null:Ct.getPrimaries(T.colorSpace),Ue=T.colorSpace===_r||Xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!dt&&!Ee?Oe[ge]=E(T.image[ge],!0,o.maxCubemapSize):Oe[ge]=Ee?T.image[ge].image:T.image[ge],Oe[ge]=Et(T,Oe[ge]);const Qe=Oe[0],nt=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),ft=D(T.internalFormat,nt,ze,T.colorSpace),ae=T.isVideoTexture!==!0,Je=xe.__version===void 0||ve===!0,q=Se.dataReady;let Re=B(T,Qe);W(s.TEXTURE_CUBE_MAP,T);let he;if(dt){ae&&Je&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ft,Qe.width,Qe.height);for(let ge=0;ge<6;ge++){he=Oe[ge].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const De=he[Ie];T.format!==ui?nt!==null?ae?q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,De.width,De.height,nt,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,De.width,De.height,nt,ze,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,ft,De.width,De.height,0,nt,ze,De.data)}}}else{if(he=T.mipmaps,ae&&Je){he.length>0&&Re++;const ge=Ge(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ft,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){ae?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,nt,ze,Oe[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ft,Oe[ge].width,Oe[ge].height,0,nt,ze,Oe[ge].data);for(let Ie=0;Ie<he.length;Ie++){const ot=he[Ie].image[ge].image;ae?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,ot.width,ot.height,nt,ze,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,ft,ot.width,ot.height,0,nt,ze,ot.data)}}else{ae?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,nt,ze,Oe[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ft,nt,ze,Oe[ge]);for(let Ie=0;Ie<he.length;Ie++){const De=he[Ie];ae?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,nt,ze,De.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,ft,nt,ze,De.image[ge])}}}S(T)&&x(s.TEXTURE_CUBE_MAP),xe.__version=Se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ye(L,T,se,ve,Se,xe){const Xe=c.convert(se.format,se.colorSpace),Ae=c.convert(se.type),Ue=D(se.internalFormat,Xe,Ae,se.colorSpace),dt=r.get(T),Ee=r.get(se);if(Ee.__renderTarget=T,!dt.__hasExternalTextures){const Oe=Math.max(1,T.width>>xe),Qe=Math.max(1,T.height>>xe);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?n.texImage3D(Se,xe,Ue,Oe,Qe,T.depth,0,Xe,Ae,null):n.texImage2D(Se,xe,Ue,Oe,Qe,0,Xe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),lt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,Se,Ee.__webglTexture,0,pt(T)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,Se,Ee.__webglTexture,xe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(L,T,se){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ve=T.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,xe=R(T.stencilBuffer,Se),Xe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=pt(T);lt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,xe,T.width,T.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,xe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,xe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,L)}else{const ve=T.textures;for(let Se=0;Se<ve.length;Se++){const xe=ve[Se],Xe=c.convert(xe.format,xe.colorSpace),Ae=c.convert(xe.type),Ue=D(xe.internalFormat,Xe,Ae,xe.colorSpace),dt=pt(T);se&&lt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Ue,T.width,T.height):lt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(T.depthTexture);ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const Se=ve.__webglTexture,xe=pt(T);if(T.depthTexture.format===Bs)lt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(T.depthTexture.format===$s)lt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Ye(L){const T=r.get(L),se=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ve=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=ve}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Ne(T.__webglFramebuffer,L)}else if(se){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=s.createRenderbuffer(),_e(T.__webglDepthbuffer[ve],L,!1);else{const Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,xe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),_e(T.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Se)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function je(L,T,se){const ve=r.get(L);T!==void 0&&ye(ve.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Ye(L)}function Rt(L){const T=L.texture,se=r.get(L),ve=r.get(T);L.addEventListener("dispose",O);const Se=L.textures,xe=L.isWebGLCubeRenderTarget===!0,Xe=Se.length>1;if(Xe||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=T.version,d.memory.textures++),xe){se.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)se.__webglFramebuffer[Ae][Ue]=s.createFramebuffer()}else se.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)se.__webglFramebuffer[Ae]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ae=0,Ue=Se.length;Ae<Ue;Ae++){const dt=r.get(Se[Ae]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&lt(L)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Se.length;Ae++){const Ue=Se[Ae];se.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Ae]);const dt=c.convert(Ue.format,Ue.colorSpace),Ee=c.convert(Ue.type),Oe=D(Ue.internalFormat,dt,Ee,Ue.colorSpace,L.isXRRenderTarget===!0),Qe=pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(se.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),W(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ye(se.__webglFramebuffer[Ae][Ue],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else ye(se.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ae=0,Ue=Se.length;Ae<Ue;Ae++){const dt=Se[Ae],Ee=r.get(dt);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),W(s.TEXTURE_2D,dt),ye(se.__webglFramebuffer,L,dt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(dt)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,ve.__webglTexture),W(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ye(se.__webglFramebuffer[Ue],L,T,s.COLOR_ATTACHMENT0,Ae,Ue);else ye(se.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ae,0);S(T)&&x(Ae),n.unbindTexture()}L.depthBuffer&&Ye(L)}function Pt(L){const T=L.textures;for(let se=0,ve=T.length;se<ve;se++){const Se=T[se];if(S(Se)){const xe=I(L),Xe=r.get(Se).__webglTexture;n.bindTexture(xe,Xe),x(xe),n.unbindTexture()}}}const ct=[],H=[];function Kt(L){if(L.samples>0){if(lt(L)===!1){const T=L.textures,se=L.width,ve=L.height;let Se=s.COLOR_BUFFER_BIT;const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(L),Ae=T.length>1;if(Ae)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const dt=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,se,ve,0,0,se,ve,Se,s.NEAREST),p===!0&&(ct.length=0,H.length=0,ct.push(s.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(xe),H.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const dt=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(L){return Math.min(o.maxSamples,L.samples)}function lt(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(L){const T=d.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Et(L,T){const se=L.colorSpace,ve=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||se!==Ys&&se!==_r&&(Ct.getTransfer(se)===Lt?(ve!==ui||Se!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),T}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=F,this.rebindTextures=je,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=lt}function nb(s,e){function n(r,o=_r){let c;const d=Ct.getTransfer(o);if(r===Hi)return s.UNSIGNED_BYTE;if(r===ff)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_g)return s.BYTE;if(r===yg)return s.SHORT;if(r===Wa)return s.UNSIGNED_SHORT;if(r===df)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===$a)return s.HALF_FLOAT;if(r===Mg)return s.ALPHA;if(r===bg)return s.RGB;if(r===ui)return s.RGBA;if(r===wg)return s.LUMINANCE;if(r===Eg)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===Tg)return s.RED;if(r===pf)return s.RED_INTEGER;if(r===Cg)return s.RG;if(r===mf)return s.RG_INTEGER;if(r===gf)return s.RGBA_INTEGER;if(r===Il||r===Ul||r===Fl||r===kl)if(d===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Il)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ul)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Il)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ul)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Pd||r===Ld||r===Dd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id||r===Ud||r===Fd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Id||r===Ud)return d===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Fd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kd||r===Od||r===zd||r===Bd||r===jd||r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===qd||r===$d||r===Yd||r===Kd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===kd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$d)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ol||r===Zd||r===Qd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ol)return d===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ag||r===Jd||r===ef||r===tf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ol)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ef)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Un,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new br({vertexShader:ib,fragmentShader:rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hn(new Zl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ab extends ea{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",p=1,g=null,v=null,_=null,y=null,M=null,b=null;const E=new sb,S=n.getContextAttributes();let x=null,I=null;const D=[],R=[],B=new At;let z=null;const O=new Vn;O.viewport=new Dt;const V=new Vn;V.viewport=new Dt;const N=[O,V],C=new A_;let U=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let me=D[$];return me===void 0&&(me=new od,D[$]=me),me.getTargetRaySpace()},this.getControllerGrip=function($){let me=D[$];return me===void 0&&(me=new od,D[$]=me),me.getGripSpace()},this.getHand=function($){let me=D[$];return me===void 0&&(me=new od,D[$]=me),me.getHandSpace()};function Y($){const me=R.indexOf($.inputSource);if(me===-1)return;const ye=D[me];ye!==void 0&&(ye.update($.inputSource,$.frame,g||d),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function de(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",j);for(let $=0;$<D.length;$++){const me=R[$];me!==null&&(R[$]=null,D[$].disconnect(me))}U=null,J=null,E.reset(),e.setRenderTarget(x),M=null,y=null,_=null,o=null,I=null,fe.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function($){g=$},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",de),o.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,_e=null,Ne=null;S.depth&&(Ne=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=S.stencil?$s:Bs,_e=S.stencil?qs:Kr);const Ye={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:c};_=new XRWebGLBinding(o,n),y=_.createProjectionLayer(Ye),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new Zr(y.textureWidth,y.textureHeight,{format:ui,type:Hi,depthTexture:new Gg(y.textureWidth,y.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Zr(M.framebufferWidth,M.framebufferHeight,{format:ui,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}I.isXRRenderTarget=!0,this.setFoveation(p),g=null,d=await o.requestReferenceSpace(f),fe.setContext(o),fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function j($){for(let me=0;me<$.removed.length;me++){const ye=$.removed[me],_e=R.indexOf(ye);_e>=0&&(R[_e]=null,D[_e].disconnect(ye))}for(let me=0;me<$.added.length;me++){const ye=$.added[me];let _e=R.indexOf(ye);if(_e===-1){for(let Ye=0;Ye<D.length;Ye++)if(Ye>=R.length){R.push(ye),_e=Ye;break}else if(R[Ye]===null){R[Ye]=ye,_e=Ye;break}if(_e===-1)break}const Ne=D[_e];Ne&&Ne.connect(ye)}}const Z=new ne,oe=new ne;function F($,me,ye){Z.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(ye.matrixWorld);const _e=Z.distanceTo(oe),Ne=me.projectionMatrix.elements,Ye=ye.projectionMatrix.elements,je=Ne[14]/(Ne[10]-1),Rt=Ne[14]/(Ne[10]+1),Pt=(Ne[9]+1)/Ne[5],ct=(Ne[9]-1)/Ne[5],H=(Ne[8]-1)/Ne[0],Kt=(Ye[8]+1)/Ye[0],pt=je*H,lt=je*Kt,Ke=_e/(-H+Kt),Et=Ke*-H;if(me.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Et),$.translateZ(Ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ge=je+Ke,L=Rt+Ke,T=pt-Et,se=lt+(_e-Et),ve=Pt*Rt/L*Ge,Se=ct*Rt/L*Ge;$.projectionMatrix.makePerspective(T,se,ve,Se,Ge,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function le($,me){me===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(me.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let me=$.near,ye=$.far;E.texture!==null&&(E.depthNear>0&&(me=E.depthNear),E.depthFar>0&&(ye=E.depthFar)),C.near=V.near=O.near=me,C.far=V.far=O.far=ye,(U!==C.near||J!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,J=C.far),O.layers.mask=$.layers.mask|2,V.layers.mask=$.layers.mask|4,C.layers.mask=O.layers.mask|V.layers.mask;const _e=$.parent,Ne=C.cameras;le(C,_e);for(let Ye=0;Ye<Ne.length;Ye++)le(Ne[Ye],_e);Ne.length===2?F(C,O,V):C.projectionMatrix.copy(O.projectionMatrix),re($,C,_e)};function re($,me,ye){ye===null?$.matrix.copy(me.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(me.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function($){p=$,y!==null&&(y.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let P=null;function W($,me){if(v=me.getViewerPose(g||d),b=me,v!==null){const ye=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let _e=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let je=0;je<ye.length;je++){const Rt=ye[je];let Pt=null;if(M!==null)Pt=M.getViewport(Rt);else{const H=_.getViewSubImage(y,Rt);Pt=H.viewport,je===0&&(e.setRenderTargetTextures(I,H.colorTexture,y.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(I))}let ct=N[je];ct===void 0&&(ct=new Vn,ct.layers.enable(je),ct.viewport=new Dt,N[je]=ct),ct.matrix.fromArray(Rt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Rt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),je===0&&(C.matrix.copy(ct.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(ct)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const je=_.getDepthInformation(ye[0]);je&&je.isValid&&je.texture&&E.init(e,je,o.renderState)}}for(let ye=0;ye<D.length;ye++){const _e=R[ye],Ne=D[ye];_e!==null&&Ne!==void 0&&Ne.update(_e,me,g||d)}P&&P($,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),b=null}const fe=new qg;fe.setAnimationLoop(W),this.setAnimationLoop=function($){P=$},this.dispose=function(){}}}const Hr=new Mi,ob=new jt;function lb(s,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Bg(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,I,D,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),v(S,x)):x.isMeshStandardMaterial?(c(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,R)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),E(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,I,D):x.isSpriteMaterial?g(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===In&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===In&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),D=I.envMap,R=I.envMapRotation;D&&(S.envMap.value=D,Hr.copy(R),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),S.envMapRotation.value.setFromMatrix4(ob.makeRotationFromEuler(Hr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,I,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=D*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===In&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function cb(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const R=D.program;r.uniformBlockBinding(I,R)}function g(I,D){let R=o[I.id];R===void 0&&(b(I),R=v(I),o[I.id]=R,I.addEventListener("dispose",S));const B=D.program;r.updateUBOMapping(I,B);const z=e.render.frame;c[I.id]!==z&&(y(I),c[I.id]=z)}function v(I){const D=_();I.__bindingPointIndex=D;const R=s.createBuffer(),B=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,B,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function _(){for(let I=0;I<f;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const D=o[I.id],R=I.uniforms,B=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,O=R.length;z<O;z++){const V=Array.isArray(R[z])?R[z]:[R[z]];for(let N=0,C=V.length;N<C;N++){const U=V[N];if(M(U,z,N,B)===!0){const J=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let de=0;for(let j=0;j<Y.length;j++){const Z=Y[j],oe=E(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,J+de,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,de),de+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(I,D,R,B){const z=I.value,O=D+"_"+R;if(B[O]===void 0)return typeof z=="number"||typeof z=="boolean"?B[O]=z:B[O]=z.clone(),!0;{const V=B[O];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return B[O]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function b(I){const D=I.uniforms;let R=0;const B=16;for(let O=0,V=D.length;O<V;O++){const N=Array.isArray(D[O])?D[O]:[D[O]];for(let C=0,U=N.length;C<U;C++){const J=N[C],Y=Array.isArray(J.value)?J.value:[J.value];for(let de=0,j=Y.length;de<j;de++){const Z=Y[de],oe=E(Z),F=R%B,le=F%oe.boundary,re=F+le;R+=le,re!==0&&B-re<oe.storage&&(R+=B-re),J.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=R,R+=oe.storage}}}const z=R%B;return z>0&&(R+=B-z),I.__size=R,I.__cache={},this}function E(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function S(I){const D=I.target;D.removeEventListener("dispose",S);const R=d.indexOf(D.__bindingPointIndex);d.splice(R,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function x(){for(const I in o)s.deleteBuffer(o[I]);d=[],o={},c={}}return{bind:p,update:g,dispose:x}}class ub{constructor(e={}){const{canvas:n=Hv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const b=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Sr,this.toneMappingExposure=1;const R=this;let B=!1,z=0,O=0,V=null,N=-1,C=null;const U=new Dt,J=new Dt;let Y=null;const de=new xt(0);let j=0,Z=n.width,oe=n.height,F=1,le=null,re=null;const P=new Dt(0,0,Z,oe),W=new Dt(0,0,Z,oe);let fe=!1;const $=new xf;let me=!1,ye=!1;this.transmissionResolutionScale=1;const _e=new jt,Ne=new jt,Ye=new ne,je=new Dt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function ct(){return V===null?F:1}let H=r;function Kt(A,K){return n.getContext(A,K)}try{const A={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",De,!1),H===null){const K="webgl2";if(H=Kt(K,A),H===null)throw Kt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,lt,Ke,Et,Ge,L,T,se,ve,Se,xe,Xe,Ae,Ue,dt,Ee,Oe,Qe,nt,ze,ft,ae,Je,q;function Re(){pt=new y1(H),pt.init(),ae=new nb(H,pt),lt=new p1(H,pt,e,ae),Ke=new eb(H,pt),lt.reverseDepthBuffer&&y&&Ke.buffers.depth.setReversed(!0),Et=new b1(H),Ge=new jM,L=new tb(H,pt,Ke,Ge,lt,ae,Et),T=new g1(R),se=new _1(R),ve=new R_(H),Je=new f1(H,ve),Se=new S1(H,ve,Et,Je),xe=new E1(H,Se,ve,Et),nt=new w1(H,lt,L),Ee=new m1(Ge),Xe=new BM(R,T,se,pt,lt,Je,Ee),Ae=new lb(R,Ge),Ue=new HM,dt=new YM(pt),Qe=new d1(R,T,se,Ke,xe,M,p),Oe=new QM(R,xe,lt),q=new cb(H,Et,lt,Ke),ze=new h1(H,pt,Et),ft=new M1(H,pt,Et),Et.programs=Xe.programs,R.capabilities=lt,R.extensions=pt,R.properties=Ge,R.renderLists=Ue,R.shadowMap=Oe,R.state=Ke,R.info=Et}Re();const he=new ab(R,H);this.xr=he,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(Z,oe,!1))},this.getSize=function(A){return A.set(Z,oe)},this.setSize=function(A,K,ce=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,oe=K,n.width=Math.floor(A*F),n.height=Math.floor(K*F),ce===!0&&(n.style.width=A+"px",n.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(Z*F,oe*F).floor()},this.setDrawingBufferSize=function(A,K,ce){Z=A,oe=K,F=ce,n.width=Math.floor(A*ce),n.height=Math.floor(K*ce),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,K,ce,te){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,K,ce,te),Ke.viewport(U.copy(P).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,K,ce,te){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,K,ce,te),Ke.scissor(J.copy(W).multiplyScalar(F).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){Ke.setScissorTest(fe=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,K=!0,ce=!0){let te=0;if(A){let Q=!1;if(V!==null){const Te=V.texture.format;Q=Te===gf||Te===mf||Te===pf}if(Q){const Te=V.texture.type,Pe=Te===Hi||Te===Kr||Te===Wa||Te===qs||Te===ff||Te===hf,Fe=Qe.getClearColor(),Ve=Qe.getClearAlpha(),rt=Fe.r,it=Fe.g,We=Fe.b;Pe?(b[0]=rt,b[1]=it,b[2]=We,b[3]=Ve,H.clearBufferuiv(H.COLOR,0,b)):(E[0]=rt,E[1]=it,E[2]=We,E[3]=Ve,H.clearBufferiv(H.COLOR,0,E))}else te|=H.COLOR_BUFFER_BIT}K&&(te|=H.DEPTH_BUFFER_BIT),ce&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Qe.dispose(),Ue.dispose(),dt.dispose(),Ge.dispose(),T.dispose(),se.dispose(),xe.dispose(),Je.dispose(),q.dispose(),Xe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Qr),he.removeEventListener("sessionend",Wi),bi.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=Et.autoReset,K=Oe.enabled,ce=Oe.autoUpdate,te=Oe.needsUpdate,Q=Oe.type;Re(),Et.autoReset=A,Oe.enabled=K,Oe.autoUpdate=ce,Oe.needsUpdate=te,Oe.type=Q}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const K=A.target;K.removeEventListener("dispose",ot),Ft(K)}function Ft(A){Zt(A),Ge.remove(A)}function Zt(A){const K=Ge.get(A).programs;K!==void 0&&(K.forEach(function(ce){Xe.releaseProgram(ce)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ce,te,Q,Te){K===null&&(K=Rt);const Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=to(A,K,ce,te,Q);Ke.setMaterial(te,Pe);let Ve=ce.index,rt=1;if(te.wireframe===!0){if(Ve=Se.getWireframeAttribute(ce),Ve===void 0)return;rt=2}const it=ce.drawRange,We=ce.attributes.position;let _t=it.start*rt,ut=(it.start+it.count)*rt;Te!==null&&(_t=Math.max(_t,Te.start*rt),ut=Math.min(ut,(Te.start+Te.count)*rt)),Ve!==null?(_t=Math.max(_t,0),ut=Math.min(ut,Ve.count)):We!=null&&(_t=Math.max(_t,0),ut=Math.min(ut,We.count));const Gt=ut-_t;if(Gt<0||Gt===1/0)return;Je.setup(Q,te,Fe,ce,Ve);let zt,St=ze;if(Ve!==null&&(zt=ve.get(Ve),St=ft,St.setIndex(zt)),Q.isMesh)te.wireframe===!0?(Ke.setLineWidth(te.wireframeLinewidth*ct()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(Q.isLine){let Ze=te.linewidth;Ze===void 0&&(Ze=1),Ke.setLineWidth(Ze*ct()),Q.isLineSegments?St.setMode(H.LINES):Q.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else Q.isPoints?St.setMode(H.POINTS):Q.isSprite&&St.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)St.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))St.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ze=Q._multiDrawStarts,Wt=Q._multiDrawCounts,vt=Q._multiDrawCount,hn=Ve?ve.get(Ve).bytesPerElement:1,qi=Ge.get(te).currentProgram.getUniforms();for(let Mn=0;Mn<vt;Mn++)qi.setValue(H,"_gl_DrawID",Mn),St.render(Ze[Mn]/hn,Wt[Mn])}else if(Q.isInstancedMesh)St.renderInstances(_t,Gt,Q.count);else if(ce.isInstancedBufferGeometry){const Ze=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Wt=Math.min(ce.instanceCount,Ze);St.renderInstances(_t,Gt,Wt)}else St.render(_t,Gt)};function Mt(A,K,ce){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,Jr(A,K,ce),A.side=Mr,A.needsUpdate=!0,Jr(A,K,ce),A.side=li):Jr(A,K,ce)}this.compile=function(A,K,ce=null){ce===null&&(ce=A),x=dt.get(ce),x.init(K),D.push(x),ce.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),A!==ce&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const te=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Te=Q.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Fe=Te[Pe];Mt(Fe,ce,Q),te.add(Fe)}else Mt(Te,ce,Q),te.add(Te)}),D.pop(),x=null,te},this.compileAsync=function(A,K,ce=null){const te=this.compile(A,K,ce);return new Promise(Q=>{function Te(){if(te.forEach(function(Pe){Ge.get(Pe).currentProgram.isReady()&&te.delete(Pe)}),te.size===0){Q(A);return}setTimeout(Te,10)}pt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tn=null;function Sn(A){Tn&&Tn(A)}function Qr(){bi.stop()}function Wi(){bi.start()}const bi=new qg;bi.setAnimationLoop(Sn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){Tn=A,he.setAnimationLoop(A),A===null?bi.stop():bi.start()},he.addEventListener("sessionstart",Qr),he.addEventListener("sessionend",Wi),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(K),K=he.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,K,V),x=dt.get(A,D.length),x.init(K),D.push(x),Ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),$.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,me=Ee.init(this.clippingPlanes,ye),S=Ue.get(A,I.length),S.init(),I.push(S),he.enabled===!0&&he.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&wi(Te,K,-1/0,R.sortObjects)}wi(A,K,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(le,re),Pt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Pt&&Qe.addToRenderList(S,A),this.info.render.frame++,me===!0&&Ee.beginShadows();const ce=x.state.shadowsArray;Oe.render(ce,A,K),me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,Q=S.transmissive;if(x.setupLights(),K.isArrayCamera){const Te=K.cameras;if(Q.length>0)for(let Pe=0,Fe=Te.length;Pe<Fe;Pe++){const Ve=Te[Pe];Er(te,Q,A,Ve)}Pt&&Qe.render(A);for(let Pe=0,Fe=Te.length;Pe<Fe;Pe++){const Ve=Te[Pe];wr(S,A,Ve,Ve.viewport)}}else Q.length>0&&Er(te,Q,A,K),Pt&&Qe.render(A),wr(S,A,K);V!==null&&O===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(R,A,K),Je.resetDefaultState(),N=-1,C=null,D.pop(),D.length>0?(x=D[D.length-1],me===!0&&Ee.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function wi(A,K,ce,te){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){te&&je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ne);const Pe=xe.update(A),Fe=A.material;Fe.visible&&S.push(A,Pe,Fe,ce,je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const Pe=xe.update(A),Fe=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),je.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),je.copy(Pe.boundingSphere.center)),je.applyMatrix4(A.matrixWorld).applyMatrix4(Ne)),Array.isArray(Fe)){const Ve=Pe.groups;for(let rt=0,it=Ve.length;rt<it;rt++){const We=Ve[rt],_t=Fe[We.materialIndex];_t&&_t.visible&&S.push(A,Pe,_t,ce,je.z,We)}}else Fe.visible&&S.push(A,Pe,Fe,ce,je.z,null)}}const Te=A.children;for(let Pe=0,Fe=Te.length;Pe<Fe;Pe++)wi(Te[Pe],K,ce,te)}function wr(A,K,ce,te){const Q=A.opaque,Te=A.transmissive,Pe=A.transparent;x.setupLightsView(ce),me===!0&&Ee.setGlobalState(R.clippingPlanes,ce),te&&Ke.viewport(U.copy(te)),Q.length>0&&Xi(Q,K,ce),Te.length>0&&Xi(Te,K,ce),Pe.length>0&&Xi(Pe,K,ce),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Er(A,K,ce,te){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new Zr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?$a:Hi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Te=x.state.transmissionRenderTarget[te.id],Pe=te.viewport||U;Te.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const Fe=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(de),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear(),Pt&&Qe.render(ce);const Ve=R.toneMapping;R.toneMapping=Sr;const rt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),me===!0&&Ee.setGlobalState(R.clippingPlanes,te),Xi(A,ce,te),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,_t=K.length;We<_t;We++){const ut=K[We],Gt=ut.object,zt=ut.geometry,St=ut.material,Ze=ut.group;if(St.side===li&&Gt.layers.test(te.layers)){const Wt=St.side;St.side=In,St.needsUpdate=!0,Ja(Gt,ce,te,zt,St,Ze),St.side=Wt,St.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}R.setRenderTarget(Fe),R.setClearColor(de,j),rt!==void 0&&(te.viewport=rt),R.toneMapping=Ve}function Xi(A,K,ce){const te=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Te=A.length;Q<Te;Q++){const Pe=A[Q],Fe=Pe.object,Ve=Pe.geometry,rt=te===null?Pe.material:te,it=Pe.group;Fe.layers.test(ce.layers)&&Ja(Fe,K,ce,Ve,rt,it)}}function Ja(A,K,ce,te,Q,Te){A.onBeforeRender(R,K,ce,te,Q,Te),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(R,K,ce,te,A,Te),Q.transparent===!0&&Q.side===li&&Q.forceSinglePass===!1?(Q.side=In,Q.needsUpdate=!0,R.renderBufferDirect(ce,K,te,Q,A,Te),Q.side=Mr,Q.needsUpdate=!0,R.renderBufferDirect(ce,K,te,Q,A,Te),Q.side=li):R.renderBufferDirect(ce,K,te,Q,A,Te),A.onAfterRender(R,K,ce,te,Q,Te)}function Jr(A,K,ce){K.isScene!==!0&&(K=Rt);const te=Ge.get(A),Q=x.state.lights,Te=x.state.shadowsArray,Pe=Q.state.version,Fe=Xe.getParameters(A,Q.state,Te,K,ce),Ve=Xe.getProgramCacheKey(Fe);let rt=te.programs;te.environment=A.isMeshStandardMaterial?K.environment:null,te.fog=K.fog,te.envMap=(A.isMeshStandardMaterial?se:T).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",ot),rt=new Map,te.programs=rt);let it=rt.get(Ve);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Pe)return pi(A,Fe),it}else Fe.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Fe,R),it=Xe.acquireProgram(Fe,Ve),rt.set(Ve,it),te.uniforms=Fe.uniforms;const We=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Ee.uniform),pi(A,Fe),te.needsLights=ec(A),te.lightsStateVersion=Pe,te.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function eo(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function pi(A,K){const ce=Ge.get(A);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function to(A,K,ce,te,Q){K.isScene!==!0&&(K=Rt),L.resetTextureUnits();const Te=K.fog,Pe=te.isMeshStandardMaterial?K.environment:null,Fe=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ys,Ve=(te.isMeshStandardMaterial?se:T).get(te.envMap||Pe),rt=te.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,it=!!ce.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,ut=!!ce.morphAttributes.color;let Gt=Sr;te.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const zt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,St=zt!==void 0?zt.length:0,Ze=Ge.get(te),Wt=x.state.lights;if(me===!0&&(ye===!0||A!==C)){const cn=A===C&&te.id===N;Ee.setState(te,A,cn)}let vt=!1;te.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Wt.state.version||Ze.outputColorSpace!==Fe||Q.isBatchedMesh&&Ze.batching===!1||!Q.isBatchedMesh&&Ze.batching===!0||Q.isBatchedMesh&&Ze.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ze.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ze.instancing===!1||!Q.isInstancedMesh&&Ze.instancing===!0||Q.isSkinnedMesh&&Ze.skinning===!1||!Q.isSkinnedMesh&&Ze.skinning===!0||Q.isInstancedMesh&&Ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ze.instancingMorph===!1&&Q.morphTexture!==null||Ze.envMap!==Ve||te.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==rt||Ze.vertexTangents!==it||Ze.morphTargets!==We||Ze.morphNormals!==_t||Ze.morphColors!==ut||Ze.toneMapping!==Gt||Ze.morphTargetsCount!==St)&&(vt=!0):(vt=!0,Ze.__version=te.version);let hn=Ze.currentProgram;vt===!0&&(hn=Jr(te,K,Q));let qi=!1,Mn=!1,Ei=!1;const It=hn.getUniforms(),pn=Ze.uniforms;if(Ke.useProgram(hn.program)&&(qi=!0,Mn=!0,Ei=!0),te.id!==N&&(N=te.id,Mn=!0),qi||C!==A){Ke.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),Wv(_e),Xv(_e),It.setValue(H,"projectionMatrix",_e)):It.setValue(H,"projectionMatrix",A.projectionMatrix),It.setValue(H,"viewMatrix",A.matrixWorldInverse);const rn=It.map.cameraPosition;rn!==void 0&&rn.setValue(H,Ye.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&It.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&It.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Mn=!0,Ei=!0)}if(Q.isSkinnedMesh){It.setOptional(H,Q,"bindMatrix"),It.setOptional(H,Q,"bindMatrixInverse");const cn=Q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),It.setValue(H,"boneTexture",cn.boneTexture,L))}Q.isBatchedMesh&&(It.setOptional(H,Q,"batchingTexture"),It.setValue(H,"batchingTexture",Q._matricesTexture,L),It.setOptional(H,Q,"batchingIdTexture"),It.setValue(H,"batchingIdTexture",Q._indirectTexture,L),It.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&It.setValue(H,"batchingColorTexture",Q._colorsTexture,L));const nn=ce.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&nt.update(Q,ce,hn),(Mn||Ze.receiveShadow!==Q.receiveShadow)&&(Ze.receiveShadow=Q.receiveShadow,It.setValue(H,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(pn.envMap.value=Ve,pn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&K.environment!==null&&(pn.envMapIntensity.value=K.environmentIntensity),Mn&&(It.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ze.needsLights&&no(pn,Ei),Te&&te.fog===!0&&Ae.refreshFogUniforms(pn,Te),Ae.refreshMaterialUniforms(pn,te,F,oe,x.state.transmissionRenderTarget[A.id]),zl.upload(H,eo(Ze),pn,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(zl.upload(H,eo(Ze),pn,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&It.setValue(H,"center",Q.center),It.setValue(H,"modelViewMatrix",Q.modelViewMatrix),It.setValue(H,"normalMatrix",Q.normalMatrix),It.setValue(H,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const cn=te.uniformsGroups;for(let rn=0,bt=cn.length;rn<bt;rn++){const mi=cn[rn];q.update(mi,hn),q.bind(mi,hn)}}return hn}function no(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function ec(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,K,ce){Ge.get(A.texture).__webglTexture=K,Ge.get(A.depthTexture).__webglTexture=ce;const te=Ge.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ce===void 0,te.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,K){const ce=Ge.get(A);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0};const io=H.createFramebuffer();this.setRenderTarget=function(A,K=0,ce=0){V=A,z=K,O=ce;let te=!0,Q=null,Te=!1,Pe=!1;if(A){const Ve=Ge.get(A);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(H.FRAMEBUFFER,null),te=!1;else if(Ve.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ve.__hasExternalTextures)L.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Ve.__boundDepthTexture!==We){if(We!==null&&Ge.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Pe=!0);const it=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[K])?Q=it[K][ce]:Q=it[K],Te=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Q=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?Q=it[ce]:Q=it,U.copy(A.viewport),J.copy(A.scissor),Y=A.scissorTest}else U.copy(P).multiplyScalar(F).floor(),J.copy(W).multiplyScalar(F).floor(),Y=fe;if(ce!==0&&(Q=io),Ke.bindFramebuffer(H.FRAMEBUFFER,Q)&&te&&Ke.drawBuffers(A,Q),Ke.viewport(U),Ke.scissor(J),Ke.setScissorTest(Y),Te){const Ve=Ge.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,ce)}else if(Pe){const Ve=Ge.get(A.texture),rt=K;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,ce,rt)}else if(A!==null&&ce!==0){const Ve=Ge.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ve.__webglTexture,ce)}N=-1},this.readRenderTargetPixels=function(A,K,ce,te,Q,Te,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Ke.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const Ve=A.texture,rt=Ve.format,it=Ve.type;if(!lt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-te&&ce>=0&&ce<=A.height-Q&&H.readPixels(K,ce,te,Q,ae.convert(rt),ae.convert(it),Te)}finally{const Ve=V!==null?Ge.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,K,ce,te,Q,Te,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){const Ve=A.texture,rt=Ve.format,it=Ve.type;if(!lt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=A.width-te&&ce>=0&&ce<=A.height-Q){Ke.bindFramebuffer(H.FRAMEBUFFER,Fe);const We=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,We),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels(K,ce,te,Q,ae.convert(rt),ae.convert(it),0);const _t=V!==null?Ge.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,_t);const ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Gv(H,ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,We),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(We),H.deleteSync(ut),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,K=null,ce=0){A.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-ce),Q=Math.floor(A.image.width*te),Te=Math.floor(A.image.height*te),Pe=K!==null?K.x:0,Fe=K!==null?K.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ce,0,0,Pe,Fe,Q,Te),Ke.unbindTexture()};const ro=H.createFramebuffer(),so=H.createFramebuffer();this.copyTextureToTexture=function(A,K,ce=null,te=null,Q=0,Te=null){A.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],K=arguments[2],Te=arguments[3]||0,ce=null),Te===null&&(Q!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Q,Q=0):Te=0);let Pe,Fe,Ve,rt,it,We,_t,ut,Gt;const zt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(ce!==null)Pe=ce.max.x-ce.min.x,Fe=ce.max.y-ce.min.y,Ve=ce.isBox3?ce.max.z-ce.min.z:1,rt=ce.min.x,it=ce.min.y,We=ce.isBox3?ce.min.z:0;else{const nn=Math.pow(2,-Q);Pe=Math.floor(zt.width*nn),Fe=Math.floor(zt.height*nn),A.isDataArrayTexture?Ve=zt.depth:A.isData3DTexture?Ve=Math.floor(zt.depth*nn):Ve=1,rt=0,it=0,We=0}te!==null?(_t=te.x,ut=te.y,Gt=te.z):(_t=0,ut=0,Gt=0);const St=ae.convert(K.format),Ze=ae.convert(K.type);let Wt;K.isData3DTexture?(L.setTexture3D(K,0),Wt=H.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),Wt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const vt=H.getParameter(H.UNPACK_ROW_LENGTH),hn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),qi=H.getParameter(H.UNPACK_SKIP_PIXELS),Mn=H.getParameter(H.UNPACK_SKIP_ROWS),Ei=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,zt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,rt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,We);const It=A.isDataArrayTexture||A.isData3DTexture,pn=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const nn=Ge.get(A),cn=Ge.get(K),rn=Ge.get(nn.__renderTarget),bt=Ge.get(cn.__renderTarget);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mi=0;mi<Ve;mi++)It&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,Q,We+mi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(K).__webglTexture,Te,Gt+mi)),H.blitFramebuffer(rt,it,Pe,Fe,_t,ut,Pe,Fe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||Ge.has(A)){const nn=Ge.get(A),cn=Ge.get(K);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,ro),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,so);for(let rn=0;rn<Ve;rn++)It?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nn.__webglTexture,Q,We+rn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nn.__webglTexture,Q),pn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cn.__webglTexture,Te,Gt+rn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cn.__webglTexture,Te),Q!==0?H.blitFramebuffer(rt,it,Pe,Fe,_t,ut,Pe,Fe,H.COLOR_BUFFER_BIT,H.NEAREST):pn?H.copyTexSubImage3D(Wt,Te,_t,ut,Gt+rn,rt,it,Pe,Fe):H.copyTexSubImage2D(Wt,Te,_t,ut,rt,it,Pe,Fe);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Wt,Te,_t,ut,Gt,Pe,Fe,Ve,St,Ze,zt.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Te,_t,ut,Gt,Pe,Fe,Ve,St,zt.data):H.texSubImage3D(Wt,Te,_t,ut,Gt,Pe,Fe,Ve,St,Ze,zt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,_t,ut,Pe,Fe,St,Ze,zt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,_t,ut,zt.width,zt.height,St,zt.data):H.texSubImage2D(H.TEXTURE_2D,Te,_t,ut,Pe,Fe,St,Ze,zt);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,hn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,qi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ei),Te===0&&K.generateMipmaps&&H.generateMipmap(Wt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ce=null,te=null,Q=0){return A.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,te=arguments[1]||null,A=arguments[2],K=arguments[3],Q=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,K,ce,te,Q)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){z=0,O=0,V=null,Ke.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const db=({className:s=""})=>{const e=pe.useRef(null),{isSolemnMode:n}=Gi(),[r,o]=pe.useState(12),c=pe.useRef(.12),d=pe.useRef(.12),f=pe.useRef(n);return pe.useEffect(()=>{f.current=n},[n]),pe.useEffect(()=>{const p=e.current;if(!p)return;const g=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,v=new x_,_=new Vn(38,window.innerWidth/window.innerHeight,.1,100);_.position.set(0,4.4,7.6),_.lookAt(0,.2,0);const y=new ub({alpha:!0,antialias:!g,powerPreference:"high-performance"});y.setSize(window.innerWidth,window.innerHeight),y.setPixelRatio(Math.min(window.devicePixelRatio,g?1.25:2)),p.innerHTML="",p.appendChild(y.domElement);const M=new C_(16774647,.95);v.add(M);const b=new T_(16771309,1.35);b.position.set(5,9,6),v.add(b);const E=new w_(15235728,1.25,20);E.position.set(-4,3,4),v.add(E);const S=new ks;v.add(S);const x=new Nl({color:2376750,roughness:.6,side:li}),I=new vf(.22,1.1,5);I.rotateX(Math.PI/2);for(let P=0;P<5;P++){const W=P/5*Math.PI*2,fe=new Hn(I,x);fe.position.set(Math.cos(W)*.45,-.35,Math.sin(W)*.45),fe.rotation.y=W,fe.rotation.x=.55,S.add(fe)}const D=new Hl(.38,g?16:24,g?16:24),R=new Nl({color:13938487,roughness:.35,metalness:.3}),B=new Hn(D,R);B.scale.set(1,.65,1),B.position.y=.05,S.add(B);const z=g?16:26,O=new Kl(.012,.012,.42,5),V=new Nl({color:15585403,roughness:.3});for(let P=0;P<z;P++){const W=P/z*Math.PI*2,fe=new Hn(O,V);fe.position.set(Math.cos(W)*.4,.22,Math.sin(W)*.4),fe.rotation.z=Math.cos(W)*.32,fe.rotation.x=Math.sin(W)*.32,S.add(fe)}const N=[{count:5,scale:.72,color:13650024,minTilt:.12,maxTilt:.48,yOffset:.14,widthScale:.75},{count:7,scale:.94,color:14507387,minTilt:.2,maxTilt:.78,yOffset:.08,widthScale:.88},{count:9,scale:1.18,color:15235731,minTilt:.28,maxTilt:1.08,yOffset:.02,widthScale:1.02},{count:11,scale:1.42,color:15834544,minTilt:.36,maxTilt:1.34,yOffset:-.04,widthScale:1.18},{count:13,scale:1.66,color:16499405,minTilt:.45,maxTilt:1.55,yOffset:-.09,widthScale:1.32}],C=new Hl(.72,g?14:22,g?14:22);C.scale(.72,1.42,.18),C.translate(0,.82,0);const U=[];N.forEach((P,W)=>{const fe=new Nl({color:P.color,roughness:.42,metalness:.04,side:li});for(let $=0;$<P.count;$++){const me=$/P.count*Math.PI*2+W*.65,ye=new ks;ye.position.y=P.yOffset,ye.rotation.y=me;const _e=new Hn(C,fe);_e.scale.set(P.scale*P.widthScale,P.scale,P.scale*.95),_e.rotation.z=(Math.random()-.5)*.12,ye.add(_e),S.add(ye),U.push({pivot:ye,petalMesh:_e,mat:fe,baseColor:new xt(P.color),solemnColor:new xt(14541802),minTilt:P.minTilt,maxTilt:P.maxTilt,curlAngle:$%2===0?.08:-.08})}});const J=g?40:80,Y=new hi,de=new Float32Array(J*3);for(let P=0;P<J*3;P++)de[P]=(Math.random()-.5)*13;Y.setAttribute("position",new fi(de,3));const j=new Hg({color:16098229,size:.065,transparent:!0,opacity:.55}),Z=new y_(Y,j);v.add(Z);const oe=()=>{const P=window.scrollY,W=Math.max(document.body.scrollHeight-window.innerHeight,1),$=.12+Math.min(Math.max(P/W,0),1)*.88;c.current=$,o(Math.round($*100))};window.addEventListener("scroll",oe,{passive:!0}),oe();const F=()=>{!y||!_||(_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",F);let le;const re=()=>{le=requestAnimationFrame(re),d.current+=(c.current-d.current)*.06;const P=d.current,W=Date.now()*35e-5;if(S){S.rotation.y=W+P*Math.PI*1.35,S.position.x=Math.sin(P*Math.PI*2)*1.05,S.position.y=Math.cos(P*Math.PI)*.32,S.rotation.z=Math.sin(W*2)*.07,S.rotation.x=.38-P*.22;const fe=f.current;U.forEach($=>{const me=$.minTilt+($.maxTilt-$.minTilt)*P;$.petalMesh.rotation.x=me,$.petalMesh.rotation.y=$.curlAngle*P;const ye=fe?$.solemnColor:$.baseColor;$.mat.color.lerp(ye,.05)}),fe?(b.color.lerp(new xt(14477301),.05),E.color.lerp(new xt(9741240),.05)):(b.color.lerp(new xt(16771309),.05),E.color.lerp(new xt(15235728),.05))}Z&&(Z.rotation.y-=5e-4,Z.position.y=P*1.1),y.render(v,_)};return re(),()=>{cancelAnimationFrame(le),window.removeEventListener("scroll",oe),window.removeEventListener("resize",F),D.dispose(),R.dispose(),O.dispose(),V.dispose(),C.dispose(),I.dispose(),x.dispose(),U.forEach(P=>P.mat.dispose()),Y.dispose(),j.dispose(),y.dispose(),p&&y.domElement&&p.removeChild(y.domElement)}},[]),u.jsxs(u.Fragment,{children:[u.jsx("div",{ref:e,"aria-hidden":"true",className:`fixed inset-0 w-screen h-screen z-0 pointer-events-none transition-filter duration-700 ${s}`}),u.jsx("div",{className:"fixed bottom-5 left-5 z-30 pointer-events-auto select-none",children:u.jsxs("div",{className:"flex items-center gap-3 px-4 py-2.5 rounded-full bg-botanical-950/85 backdrop-blur-xl border border-white/15 text-white shadow-2xl text-xs",children:[u.jsx("span",{className:`w-2.5 h-2.5 rounded-full animate-pulse ${n?"bg-stone-300":"bg-pink-400"}`}),u.jsxs("span",{className:"font-medium tracking-wide",children:["Rosa Rosa 3D • Sboccio:"," ",u.jsxs("strong",{className:"text-petal font-mono",children:[r,"%"]})]}),u.jsx("span",{className:`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-semibold ${n?"bg-white/20 text-stone-200":"bg-pink-900/60 text-pink-200 border border-pink-400/30"}`,children:n?"Luce Argentea":"Rosa Botanica"})]})})]})},sg="/assets/logo%20velora-DJ-0Ma9P.jpeg",Gl=({size:s="md",variant:e="dark",showTagline:n=!1,className:r="",imgClassName:o=""})=>{const c=e==="light",d={sm:"h-14 sm:h-16 max-w-[190px]",md:"h-20 sm:h-24 md:h-28 max-w-[280px]",lg:"h-28 sm:h-32 md:h-36 max-w-[340px]",xl:"h-36 sm:h-44 md:h-48 max-w-[420px]"}[s];return u.jsxs("div",{className:`inline-flex flex-col items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-[1.02] select-none ${r}`,title:`${Nt.brand.name} - Atelier Floreale`,children:[c?u.jsx("div",{className:"relative flex items-center justify-center bg-[#FAF7F2] rounded-2xl p-2.5 sm:p-3 shadow-xl ring-1 ring-gold/50 hover:ring-gold transition-all duration-300",children:u.jsx("img",{src:sg,alt:"VELORA - Atelier Floreale",className:`${d} w-auto object-contain transition-all duration-300 group-hover:brightness-105 ${o}`,loading:"eager"})}):u.jsx("div",{className:"relative flex items-center justify-center",children:u.jsx("img",{src:sg,alt:"VELORA - Atelier Floreale",className:`${d} w-auto object-contain mix-blend-multiply contrast-[1.05] brightness-[0.98] drop-shadow-sm transition-all duration-300 group-hover:scale-[1.02] ${o}`,loading:"eager"})}),n&&u.jsx("span",{className:`text-[10px] uppercase tracking-[0.38em] font-bold mt-1 transition-colors ${c?"text-petal group-hover:text-gold":"text-clay group-hover:text-botanical-800"}`,children:Nt.brand.tagline})]})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=pe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:d,...f},p)=>pe.createElement("svg",{ref:p,...hb,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Qg("lucide",o),...f},[...d.map(([g,v])=>pe.createElement(g,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(s,e)=>{const n=pe.forwardRef(({className:r,...o},c)=>pe.createElement(pb,{ref:c,iconNode:e,className:Qg(`lucide-${fb(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],gb=at("ArrowLeft",mb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Jg=at("ArrowRight",xb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],_b=at("Calendar",vb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],ag=at("Camera",yb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],e0=at("Check",Sb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],bb=at("ChevronLeft",Mb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Eb=at("ChevronRight",wb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]],Cb=at("Church",Tb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],af=at("CircleAlert",Ab);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],t0=at("CircleCheckBig",Nb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ga=at("CircleCheck",Rb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Xa=at("Clock",Pb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Db=at("DollarSign",Lb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Wl=at("ExternalLink",Ib);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Zs=at("Flame",Ub);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],kb=at("Gift",Fb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],zb=at("HeartHandshake",Ob);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],n0=at("Heart",Bb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Vb=at("Image",jb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Gb=at("Key",Hb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],of=at("Lock",Wb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],qb=at("LogOut",Xb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qs=at("MapPin",$b);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]],i0=at("Megaphone",Yb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Zb=at("Menu",Kb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Sf=at("MessageCircle",Qb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M5 12h14",key:"1ays0h"}]],ew=at("Minus",Jb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Vs=at("Navigation",tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],r0=at("Package",nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],rw=at("Pen",iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],aw=at("Phone",sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],s0=at("Plus",ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Xl=at("RefreshCw",lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],uw=at("Search",cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],fw=at("Send",dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pw=at("ShieldCheck",hw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],Hs=at("ShoppingBag",mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Jl=at("Sparkles",gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],vw=at("Store",xw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],yw=at("Sun",_w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Mw=at("Tag",Sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Mf=at("Trash2",bw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ew=at("TriangleAlert",ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],lf=at("Truck",Tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],og=at("Upload",Cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],Nw=at("UserCheck",Aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Js=at("X",Rw),Pw=({onNavigateToAdmin:s})=>{const{itemCount:e,setIsCartOpen:n}=qa(),{announcement:r}=Gi(),[o,c]=pe.useState(!1),[d,f]=pe.useState(!1);pe.useEffect(()=>{const g=()=>{c(window.scrollY>20)};return window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[]);const p=g=>{f(!1);const v=document.getElementById(g);v&&v.scrollIntoView({behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[r.active&&u.jsx("div",{className:"relative z-50 bg-botanical-950 text-stone-200 text-xs py-2 px-4 border-b border-white/10 select-none",children:u.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),u.jsxs("span",{className:"text-[11px] sm:text-xs",children:[u.jsx("strong",{children:r.badge})," ",r.message]})]}),u.jsxs("div",{className:"hidden md:flex items-center gap-4 text-[11px] text-stone-300",children:[u.jsx("span",{children:r.secondaryNotice}),u.jsx("span",{children:"•"}),u.jsx("button",{onClick:()=>p("bottega-mappa"),className:"text-petal underline hover:text-white font-semibold transition-colors flex items-center gap-1",children:u.jsx("span",{children:"Vieni in bottega →"})})]})]})}),u.jsxs("header",{className:`sticky top-0 z-40 transition-all duration-300 ${o?"bg-cream/95 backdrop-blur-xl shadow-md border-b border-stone-300/80 py-1.5 sm:py-2":"bg-cream/90 backdrop-blur-md border-b border-stone-300/50 py-2 sm:py-3"}`,children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 relative flex items-center justify-between min-h-[64px] sm:min-h-[80px] md:min-h-[92px]",children:[u.jsx("div",{className:"flex items-center lg:hidden z-30",children:u.jsx("button",{onClick:()=>f(!d),className:"p-2 -ml-2 rounded-full text-botanical-950 hover:bg-stone-200/60 focus:outline-none","aria-label":"Apri Menu Navigazione",children:d?u.jsx(Js,{className:"w-6 h-6"}):u.jsx(Zb,{className:"w-6 h-6"})})}),u.jsxs("nav",{className:"hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-bold uppercase tracking-[0.16em] text-stone-700 flex-1 justify-start z-10 pr-24 xl:pr-32",children:[u.jsx("button",{onClick:()=>p("hero-parallax"),className:"hover:text-clay transition-colors uppercase tracking-wider",children:"Atelier"}),u.jsx("button",{onClick:()=>p("catalogo-3d"),className:"hover:text-clay transition-colors uppercase tracking-wider",children:"Creazioni"}),u.jsx("button",{onClick:()=>p("apple-carousel-sec"),className:"hover:text-clay transition-colors uppercase tracking-wider",children:"Collezioni"}),u.jsx("button",{onClick:()=>p("bottega-mappa"),className:"hover:text-clay transition-colors uppercase tracking-wider flex items-center gap-1",children:u.jsx("span",{children:"Bottega & Consegne"})}),u.jsxs("button",{onClick:()=>p("arte-funebre"),className:"text-stone-500 hover:text-stone-950 transition-colors flex items-center gap-1.5 uppercase tracking-wider",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-stone-500"})," Arte Funebre"]})]}),u.jsx("div",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20 cursor-pointer transition-transform duration-300 hover:scale-105",title:"VELORA - Torna a inizio pagina",children:u.jsx(Gl,{size:o?"sm":"md",variant:"dark"})}),u.jsxs("div",{className:"flex items-center justify-end gap-2 sm:gap-3 flex-1 z-30 pl-24 xl:pl-32",children:[u.jsxs("button",{onClick:()=>p("bottega-mappa"),className:"hidden xl:inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full bg-white/90 border border-stone-300 text-botanical-900 hover:bg-botanical-900 hover:text-white transition-all shadow-sm group",title:"Vedi Bottega e indicazioni a Tor Lupara",children:[u.jsx(Qs,{className:"w-3.5 h-3.5 text-clay group-hover:text-petal transition-colors"}),u.jsx("span",{children:"Tor Lupara • Tutta Roma"})]}),u.jsxs("button",{onClick:()=>{s?s():window.location.hash="admin"},className:"p-2 sm:px-3 sm:py-2 rounded-full text-stone-600 hover:text-botanical-950 hover:bg-stone-200/50 transition-colors text-xs font-semibold flex items-center gap-1.5",title:"Dashboard Proprietario","aria-label":"Area Riservata Bottega",children:[u.jsx(of,{className:"w-3.5 h-3.5 text-stone-500"}),u.jsx("span",{className:"hidden xl:inline text-[11px] uppercase tracking-wider font-bold",children:"Admin"})]}),u.jsxs("button",{onClick:()=>n(!0),className:"relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-botanical-950 text-white hover:bg-clay transition-all shadow-lg active:scale-95 group","aria-label":"Apri Carrello",children:[u.jsx(Hs,{className:"w-4 h-4 group-hover:scale-110 transition-transform"}),u.jsx("span",{className:"text-xs font-semibold hidden md:inline",children:"Carrello"}),u.jsx("span",{className:"bg-clay group-hover:bg-botanical-950 text-white text-[11px] font-bold px-2 py-0.5 rounded-full transition-all animate-in zoom-in",children:e},e)]})]})]}),d&&u.jsx("div",{className:"lg:hidden bg-cream/95 backdrop-blur-2xl border-t border-stone-300/80 px-6 py-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl",children:u.jsxs("nav",{className:"flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-botanical-950",children:[u.jsx("button",{onClick:()=>p("hero-parallax"),className:"text-left py-2 border-b border-stone-200 hover:text-clay",children:"Atelier Botanico"}),u.jsx("button",{onClick:()=>p("catalogo-3d"),className:"text-left py-2 border-b border-stone-200 hover:text-clay",children:"Creazioni & Bouquet"}),u.jsx("button",{onClick:()=>p("apple-carousel-sec"),className:"text-left py-2 border-b border-stone-200 hover:text-clay",children:"Le Nostre Collezioni"}),u.jsxs("button",{onClick:()=>p("bottega-mappa"),className:"text-left py-2 border-b border-stone-200 hover:text-clay flex items-center justify-between",children:[u.jsx("span",{children:"Bottega & Consegne a Roma"}),u.jsx("span",{className:"text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full",children:"Tor Lupara"})]}),u.jsxs("button",{onClick:()=>p("arte-funebre"),className:"text-left py-2 border-b border-stone-200 text-stone-600 hover:text-botanical-950 flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-stone-500"}),u.jsx("span",{children:"Arte Funebre & Nastro Oro"})]}),u.jsxs("button",{onClick:()=>{f(!1),s?s():window.location.hash="admin"},className:"text-left py-2 border-b border-stone-200 text-clay hover:text-botanical-950 flex items-center justify-between",children:[u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx(of,{className:"w-4 h-4"}),u.jsx("span",{children:"Area Riservata Bottega"})]}),u.jsx("span",{className:"text-[10px] bg-clay/10 text-clay px-2 py-0.5 rounded-full font-bold",children:"Admin"})]}),u.jsx("div",{className:"pt-2 flex flex-col gap-2",children:u.jsxs("a",{href:Nt.storeLocation.directionsUrl,target:"_blank",rel:"noopener noreferrer",className:"text-center py-3 bg-botanical-950 text-white rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2",children:[u.jsx(Vs,{className:"w-3.5 h-3.5 text-petal"}),u.jsx("span",{children:"Naviga a Via Nomentana 38"})]})})]})})]})]})},Lw=()=>{const{products:s,activePromo:e}=Gi(),{addToCart:n}=qa(),[r,o]=pe.useState(0);pe.useEffect(()=>{const I=()=>{o(window.scrollY)};return window.addEventListener("scroll",I,{passive:!0}),()=>window.removeEventListener("scroll",I)},[]);const c=Math.min(r/850,1),d=22-c*22,f=-14+c*14,p=-50+c*50,g=.92+c*.08,v=-260+r*.42,_=-80-r*.42,y=-320+r*.28,M=pe.useMemo(()=>s.length===0?[]:[...s,...s.slice(0,3)],[s]),b=pe.useMemo(()=>s.length===0?[]:[...s.slice().reverse(),...s.slice(1,4)],[s]),E=pe.useMemo(()=>s.length===0?[]:[...s.slice(2),...s.slice(0,4)],[s]),S=I=>{const D=document.getElementById(I);D&&D.scrollIntoView({behavior:"smooth"})},x=(I,D)=>u.jsxs("div",{onClick:()=>n(I),className:"parallax-card group relative w-72 sm:w-80 h-52 sm:h-60 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/85 cursor-pointer shrink-0 bg-botanical-950 transition-all duration-300 hover:scale-105 select-none",children:[u.jsx("img",{src:I.img,alt:I.name,className:"w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none",loading:"lazy"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"}),u.jsxs("div",{className:"absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none",children:[u.jsx("span",{className:"bg-white/95 text-botanical-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-sm",children:I.badge}),I.isPromo&&u.jsxs("span",{className:"bg-clay text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow flex items-center gap-1",children:[u.jsx(Zs,{className:"w-3 h-3 fill-white"})," -",I.promoDiscountPct||15,"%"]})]}),u.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-end justify-between text-white pointer-events-none",children:[u.jsxs("div",{className:"min-w-0 pr-2",children:[u.jsx("p",{className:"font-serif text-lg sm:text-xl font-semibold leading-tight truncate",children:I.name}),u.jsxs("div",{className:"flex items-baseline gap-2 mt-0.5",children:[u.jsxs("span",{className:"text-xs text-petal font-bold",children:[I.price,",00 €"]}),I.originalPrice&&I.originalPrice>I.price&&u.jsxs("span",{className:"text-[10px] text-stone-400 line-through",children:[I.originalPrice,",00 €"]})]})]}),u.jsxs("button",{type:"button",className:"pointer-events-auto px-3.5 py-1.5 rounded-full bg-clay text-white text-[11px] font-bold shadow-lg group-hover:bg-white group-hover:text-botanical-950 transition-colors flex items-center gap-1.5 shrink-0",children:[u.jsx(Hs,{className:"w-3 h-3"}),u.jsx("span",{children:"+ Carrello"})]})]})]},`${I.id}-${D}`);return u.jsxs("section",{id:"hero-parallax",className:"relative z-10 hero-parallax-stage min-h-[145vh] sm:min-h-[160vh] pt-8 sm:pt-12 pb-24 overflow-hidden",style:{perspective:"1500px",transformStyle:"preserve-3d"},children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 relative z-20 pointer-events-none",children:[e&&u.jsxs("div",{className:"mb-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-clay via-rose-600 to-amber-600 text-white text-xs font-semibold shadow-xl pointer-events-auto animate-pulse",children:[u.jsx(Zs,{className:"w-4 h-4 fill-white"}),u.jsxs("span",{children:[u.jsxs("strong",{children:[e.badgeText,":"]})," ",e.bannerNotice]})]}),u.jsxs("div",{className:"max-w-3xl bg-cream/80 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] border border-white/90 shadow-2xl pointer-events-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-950 text-petal text-xs font-semibold mb-5",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-ping"}),u.jsx("span",{children:"Atelier Botanico • Fiori freschi d'autore con consegna espressa a Roma"})]}),u.jsxs("h1",{className:"font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.0] text-botanical-950 font-semibold tracking-tight",children:["L'arte dei fiori che ",u.jsx("span",{className:"italic font-normal text-clay",children:"prende vita"}),"."]}),u.jsxs("p",{className:"mt-5 text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed",children:["Benvenuti nell'atelier botanico di ",u.jsx("strong",{children:Nt.brand.name})," a Tor Lupara. Mazzi sartoriali freschi di giornata, piante d'arredo in terracotta e composizioni di prestigio, recapitati con cura e idratazione garantita in ",u.jsx("strong",{children:"tutta Roma"}),"."]}),u.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3.5",children:[u.jsxs("button",{onClick:()=>S("catalogo-3d"),className:"px-7 py-4 bg-botanical-950 hover:bg-clay text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl hover:scale-105 flex items-center gap-2",children:[u.jsx("span",{children:"Esplora le Creazioni"}),u.jsx(Jg,{className:"w-4 h-4"})]}),u.jsx("button",{onClick:()=>S("apple-carousel-sec"),className:"px-6 py-4 bg-white/90 hover:bg-white text-botanical-950 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider border border-stone-300 transition-all shadow-sm",children:"Le Collezioni"})]})]})]}),u.jsxs("div",{id:"hero-3d-plane",className:"relative z-10 -mt-10 sm:-mt-16 space-y-6 sm:space-y-8 py-6 pointer-events-auto",style:{transformStyle:"preserve-3d",transform:`rotateX(${d.toFixed(2)}deg) rotateZ(${f.toFixed(2)}deg) translateY(${p.toFixed(1)}px) scale(${g.toFixed(3)})`,willChange:"transform"},children:[u.jsx("div",{className:"parallax-track flex gap-5 sm:gap-6 px-4 w-max",style:{transform:`translate3d(${v.toFixed(1)}px, 0, 0)`,willChange:"transform"},children:M.map((I,D)=>x(I,D))}),u.jsx("div",{className:"parallax-track flex gap-5 sm:gap-6 px-4 w-max",style:{transform:`translate3d(${_.toFixed(1)}px, 0, 0)`,willChange:"transform"},children:b.map((I,D)=>x(I,D))}),u.jsx("div",{className:"parallax-track flex gap-5 sm:gap-6 px-4 w-max",style:{transform:`translate3d(${y.toFixed(1)}px, 0, 0)`,willChange:"transform"},children:E.map((I,D)=>x(I,D))})]})]})};async function Dw(s){var d;const e="kah2quoa",n="velora_catalog";if(!s)throw new Error("Nessun file selezionato per il caricamento.");if(!s.type.startsWith("image/"))throw new Error("Il file selezionato non è un'immagine valida (formati supportati: JPG, PNG, WebP, GIF).");const r=10*1024*1024;if(s.size>r)throw new Error("L'immagine supera la dimensione massima consentita di 10MB.");const o=`https://api.cloudinary.com/v1_1/${e}/image/upload`,c=new FormData;c.append("file",s),c.append("upload_preset",n),c.append("folder","velora_catalog");try{const f=await fetch(o,{method:"POST",body:c}),p=await f.json();if(!f.ok||p.error){const g=((d=p.error)==null?void 0:d.message)||`Errore HTTP ${f.status}: Impossibile caricare l'immagine su Cloudinary.`;throw new Error(g)}if(!p.secure_url)throw new Error("Cloudinary non ha restituito un URL sicuro valido.");return p.secure_url}catch(f){throw f instanceof Error?f:new Error("Si è verificato un errore imprevisto durante l'upload dell'immagine.")}}function ql(s,e=800){if(!s||typeof s!="string")return"";if(!(s.includes("cloudinary.com")&&s.includes("/image/upload/"))||s.includes("/image/upload/f_auto")||s.includes("/image/upload/w_"))return s;const r=`f_auto,q_auto,w_${e},c_limit`;return s.replace("/image/upload/",`/image/upload/${r}/`)}function Iw(s){return typeof s=="string"&&s.includes("cloudinary.com")}const Uw=()=>{const{products:s,activeCategory:e,filterByCategory:n}=Gi(),{addToCart:r}=qa(),o=[{id:"all",label:`Tutti (${s.length})`},{id:"bouquet",label:"Bouquet Freschi"},{id:"piante",label:"Piante & Vasi"},{id:"composizioni",label:"Composizioni"},{id:"funebre",label:"Omaggi Funebri"},{id:"promo",label:"In Offerta 🔥"}];return u.jsx("section",{id:"catalogo-3d",className:"relative z-10 py-24 section-glass-light border-y border-stone-200/80",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-14 gap-6",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-xs uppercase tracking-[0.28em] text-clay font-bold",children:"Creazioni Botaniche d'Autore"}),u.jsx("h2",{className:"font-serif text-4xl sm:text-5xl lg:text-6xl text-botanical-950 mt-1 font-semibold",children:"Bouquet, Piante e Composizioni."}),u.jsx("p",{className:"text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed",children:"Ogni creazione viene confezionata a mano dai nostri mastri fioristi con fiori recisi freschissimi di giornata e recapitata con riserva d'acqua in tutta Roma."})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:o.map(c=>{const d=e===c.id;return u.jsx("button",{onClick:()=>n(c.id),className:`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${d?"bg-botanical-950 text-white shadow-md scale-105":"bg-white/90 text-stone-700 border border-stone-300 hover:border-botanical-900 hover:text-botanical-900"}`,children:c.label},c.id)})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10",children:s.map(c=>u.jsx(Fw,{product:c,onAddToCart:()=>r(c)},c.id))}),s.length===0&&u.jsxs("div",{className:"text-center py-16 bg-white/60 rounded-3xl border border-stone-200 p-8",children:[u.jsx("p",{className:"font-serif text-2xl text-botanical-950 font-semibold",children:"Nessun prodotto trovato in questa categoria."}),u.jsx("p",{className:"text-xs text-stone-500 mt-2",children:`Torna a "Tutti" per esplorare l'intero catalogo botanico.`}),u.jsx("button",{onClick:()=>n("all"),className:"mt-4 px-6 py-2.5 rounded-full bg-botanical-950 text-white text-xs font-bold uppercase tracking-wider",children:"Mostra Tutto il Catalogo"})]})]})})},Fw=({product:s,onAddToCart:e})=>{const n=pe.useRef(null),r=pe.useRef(null),o=s.stockQuantity===0,c=f=>{const p=n.current;if(!p)return;const g=p.getBoundingClientRect(),v=f.clientX-g.left,_=f.clientY-g.top,y=g.width/2,M=g.height/2,b=(_-M)/M*-14,E=(v-y)/y*14;p.style.transform=`rotateX(${b.toFixed(2)}deg) rotateY(${E.toFixed(2)}deg)`;const S=r.current;if(S){const x=v/g.width*100,I=_/g.height*100;S.style.background=`radial-gradient(circle at ${x}% ${I}%, rgba(255,255,255,0.7), transparent 60%)`,S.style.opacity="1"}},d=()=>{const f=n.current;f&&(f.style.transform="rotateX(0deg) rotateY(0deg)",r.current&&(r.current.style.opacity="0"))};return u.jsx("div",{className:"tilt-card-scene",children:u.jsxs("div",{ref:n,onMouseMove:c,onMouseLeave:d,className:"tilt-card-body relative bg-white/95 rounded-[2rem] p-6 sm:p-7 border border-stone-200/90 shadow-xl flex flex-col justify-between h-full transition-shadow duration-300 select-none",children:[u.jsx("div",{ref:r,className:"tilt-glare"}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-3 z-layer-badge",children:[u.jsx("span",{className:"px-3.5 py-1 rounded-full bg-botanical-950 text-petal text-[11px] font-bold uppercase tracking-wider shadow-md",children:s.badge}),o?u.jsxs("span",{className:"text-[11px] font-bold text-rose-700 bg-rose-50 px-3 py-0.5 rounded-full border border-rose-200 flex items-center gap-1",children:[u.jsx(af,{className:"w-3 h-3"})," Esaurito"]}):s.isPromo?u.jsxs("span",{className:"text-[11px] font-bold text-amber-900 bg-amber-100 px-3 py-0.5 rounded-full border border-amber-300 flex items-center gap-1",children:[u.jsx(Zs,{className:"w-3 h-3 text-clay fill-clay"})," -",s.promoDiscountPct,"% Offerta"]}):u.jsxs("span",{className:"text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1",children:[u.jsx(t0,{className:"w-3 h-3"})," Consegna a Roma"]})]}),u.jsxs("div",{className:"relative h-64 rounded-2xl overflow-hidden my-3 z-layer-image bg-stone-100 border-2 border-white shadow-inner",children:[u.jsx("img",{src:ql(s.imageUrl||s.img,700),alt:s.name,className:`w-full h-full object-cover pointer-events-none transition-transform duration-700 ${o?"grayscale opacity-60":"hover:scale-105"}`,loading:"lazy"}),o&&u.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center",children:u.jsx("span",{className:"px-4 py-2 rounded-full bg-black/80 text-white text-xs font-bold tracking-widest uppercase",children:"Momentaneamente Esaurito"})})]}),u.jsxs("div",{className:"mt-5 flex items-baseline justify-between z-layer-title gap-2",children:[u.jsx("h3",{className:"font-serif text-2xl sm:text-3xl text-botanical-950 font-semibold leading-tight",children:s.name}),u.jsxs("div",{className:"text-right shrink-0",children:[u.jsxs("span",{className:"text-xl sm:text-2xl font-bold text-clay",children:[s.price,",00 €"]}),s.originalPrice&&s.originalPrice>s.price&&u.jsxs("span",{className:"block text-xs text-stone-400 line-through",children:[s.originalPrice,",00 €"]})]})]}),u.jsx("p",{className:"text-xs text-stone-600 mt-2 leading-relaxed z-layer-desc",children:s.desc}),s.dimensions&&u.jsxs("p",{className:"text-[11px] text-stone-400 mt-1 italic font-serif",children:["✦ ",s.dimensions]})]}),u.jsx("div",{className:"pt-6 mt-5 border-t border-stone-200/70 z-layer-btn",children:u.jsxs("button",{type:"button",disabled:o,onClick:e,className:`w-full py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 ${o?"bg-stone-300 text-stone-500 cursor-not-allowed shadow-none":"bg-botanical-950 hover:bg-clay text-white active:scale-95"}`,children:[u.jsx(Hs,{className:"w-4 h-4"}),u.jsx("span",{children:o?"Esaurito in Bottega":"+ Aggiungi al Carrello"})]})})]})})},kw=[{id:1,tag:"Reparto 01 • Giornaliero",title:"Bouquet d'Autore & Fiori Recisi",subtitle:"Peonie, ranuncoli, rose David Austin ed eucalipto",img:"https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80",desc:"Ogni mattina all'alba il nostro mastro fiorista seleziona le migliori varietà botaniche dai mercati floreali di Sanremo e internazionali. I mazzi sono legati rigorosamente a mano con fusto idratato per preservare il profumo fino al momento della consegna.",highlights:["Garantiti freschi per 7+ giorni","Fialetta d'acqua inclusa sul gambo","Carta cotone cerata di manifattura italiana"]},{id:2,tag:"Reparto 02 • Indoor Design",title:"Piante & Vasi d'Arredo in Terracotta",subtitle:"Monstera variegata, Ficus Lyrata e vasi toscani",img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80",desc:"Verde purificante da interni invasato con miscele organiche studiate per durare anni in appartamento. I nostri vasi sono forgiati al tornio da maestri toscani con argilla porosa a traspirazione naturale.",highlights:["Terrecotte di Impruneta certificate","Scheda botanica di cura inclusa","Substrato arricchito con micorrize attive"]},{id:3,tag:"Reparto 03 • Cerimonie",title:"Eventi, Lauree & Matrimoni",subtitle:"Corone d'alloro, Hat-Box e centrotavola scenografici",img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",desc:"La scenografia botanica come espressione d'arte. Progettiamo allestimenti per lauree, nozze e cene di gala con fiori rari e combinazioni cromatiche su misura.",highlights:["Consulenza floreale personalizzata","Nastri in raso e velluto coordinati","Consegna e posizionamento sul luogo dell'evento"]},{id:4,tag:"Reparto 04 • Cordoglio",title:"Arte Funebre & Omaggi di Memoria",subtitle:"Cuscini, corone e nastro in raso con lettere d'oro",img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80",desc:"Il massimo rispetto e puntualità per il momento del cordoglio. Composizioni sobrie, eleganti e discrete con nastro commemorativo in raso con stampa a caldo in lamina d'oro.",highlights:["Consegna prioritaria e puntuale in Chiesa / Ospedale","Stampa nastro in oro zecchino compresa","Fiori ad altissima tenuta idrica"]}],Ow=()=>{const s=pe.useRef(null),[e,n]=pe.useState(null),r=d=>{const f=s.current;if(!f)return;const p=d==="left"?-380:380;f.scrollBy({left:p,behavior:"smooth"})},o=()=>{const d=s.current;if(!d)return;const f=d.querySelectorAll(".apple-card-item"),p=d.getBoundingClientRect(),g=p.left+p.width/2;f.forEach(v=>{const _=v.getBoundingClientRect(),M=(_.left+_.width/2-g)/p.width,b=v.querySelector(".apple-parallax-img");b&&(b.style.transform=`translateX(${(M*25).toFixed(1)}px) scale(1.06)`)})},c=()=>{n(null);const d=document.getElementById("catalogo-3d");d&&d.scrollIntoView({behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"apple-carousel-sec",className:"relative z-10 py-24 section-glass-dark text-white border-b border-white/10 overflow-hidden",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"text-xs uppercase tracking-[0.3em] text-petal font-bold flex items-center gap-2",children:[u.jsx(Jl,{className:"w-3.5 h-3.5 text-gold"}),"Collezioni Esclusive"]}),u.jsxs("h2",{className:"font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-2 font-semibold",children:["Le Quattro Anime di ",Nt.brand.name,"."]}),u.jsx("p",{className:"text-stone-300 text-sm sm:text-base mt-2 max-w-xl leading-relaxed",children:"Esplora i nostri quattro reparti botanici: bouquet freschi di giornata, piante in terracotta, cerimonie sartoriali e omaggi di cordoglio."})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:()=>r("left"),className:"w-12 h-12 rounded-full bg-white/10 hover:bg-clay border border-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-90","aria-label":"Scorri a sinistra",children:u.jsx(bb,{className:"w-5 h-5"})}),u.jsx("button",{onClick:()=>r("right"),className:"w-12 h-12 rounded-full bg-white/10 hover:bg-clay border border-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-90","aria-label":"Scorri a destra",children:u.jsx(Eb,{className:"w-5 h-5"})})]})]}),u.jsx("div",{ref:s,onScroll:o,className:"apple-carousel-track flex gap-6 sm:gap-7 overflow-x-auto px-4 sm:px-6 max-w-7xl mx-auto pb-6",children:kw.map(d=>u.jsxs("div",{onClick:()=>n(d),className:"apple-card-item relative shrink-0 w-[300px] sm:w-[380px] h-[480px] sm:h-[540px] rounded-[2.2rem] overflow-hidden cursor-pointer group border border-white/15 shadow-2xl transition-transform duration-500 hover:-translate-y-2 select-none",children:[u.jsx("img",{src:d.img,alt:d.title,className:"apple-parallax-img w-[125%] max-w-none h-full object-cover -ml-[12%] transition-transform duration-300 pointer-events-none",loading:"lazy"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/90 pointer-events-none"}),u.jsxs("div",{className:"absolute top-7 left-7 right-7 pointer-events-none",children:[u.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.25em] text-petal border border-white/20",children:d.tag}),u.jsx("h3",{className:"font-serif text-2xl sm:text-3xl lg:text-4xl text-white mt-3 leading-tight font-semibold",children:d.title})]}),u.jsxs("div",{className:"absolute bottom-7 left-7 right-7 flex items-end justify-between pointer-events-none",children:[u.jsx("p",{className:"text-xs text-stone-200 max-w-[220px] leading-relaxed",children:d.subtitle}),u.jsx("span",{className:"w-11 h-11 rounded-full bg-white text-botanical-950 flex items-center justify-center font-bold text-lg group-hover:bg-clay group-hover:text-white transition-colors shadow-lg shrink-0",children:"+"})]})]},d.id))})]}),e&&u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200",children:u.jsxs("div",{className:"bg-cream text-stone-800 max-w-2xl w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 max-h-[92vh] flex flex-col",children:[u.jsxs("div",{className:"relative h-64 sm:h-80 shrink-0",children:[u.jsx("img",{src:e.img,alt:e.title,className:"w-full h-full object-cover"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"}),u.jsx("button",{onClick:()=>n(null),className:"absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-clay text-white flex items-center justify-center transition-colors shadow-lg","aria-label":"Chiudi modale",children:u.jsx(Js,{className:"w-5 h-5"})}),u.jsxs("div",{className:"absolute bottom-6 left-6 right-6 text-white",children:[u.jsx("span",{className:"text-xs uppercase tracking-widest text-petal font-bold",children:e.tag}),u.jsx("h3",{className:"font-serif text-3xl sm:text-4xl lg:text-5xl mt-1 font-semibold leading-tight",children:e.title})]})]}),u.jsxs("div",{className:"p-6 sm:p-8 space-y-6 overflow-y-auto",children:[u.jsx("p",{className:"text-stone-700 text-sm sm:text-base leading-relaxed",children:e.desc}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("span",{className:"text-xs uppercase font-bold tracking-wider text-botanical-900 block",children:"Caratteristiche Artigianali:"}),u.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600",children:e.highlights.map((d,f)=>u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-clay"}),u.jsx("span",{children:d})]},f))})]}),u.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-botanical-50 border border-botanical-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-xs font-bold text-botanical-900 uppercase tracking-wider",children:"Consegna Espressa a Mano in Tutta Roma"}),u.jsx("p",{className:"text-xs text-stone-600 mt-0.5",children:"Preparato con cura botanica e biglietto calligrafico in omaggio."})]}),u.jsxs("button",{onClick:c,className:"px-6 py-3 bg-botanical-950 hover:bg-clay text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 shrink-0",children:[u.jsx("span",{children:"Scegli dal Catalogo"}),u.jsx(Jg,{className:"w-4 h-4"})]})]})]})]})})]})},zw=()=>{const{deliverySettings:s}=Gi();return u.jsx("section",{id:"bottega-mappa",className:"relative z-10 py-24 section-glass-light border-b border-stone-200/80",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[u.jsxs("div",{className:"max-w-3xl mb-12 sm:mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-950 text-petal text-xs font-semibold mb-3",children:[u.jsx(lf,{className:"w-3.5 h-3.5 text-gold"}),u.jsx("span",{children:"Consegna Espressa a Domicilio in Tutta Roma"})]}),u.jsxs("h2",{className:"font-serif text-4xl sm:text-5xl lg:text-6xl text-botanical-950 leading-tight font-semibold",children:["La Nostra Bottega a ",u.jsx("span",{className:"underline decoration-clay",children:"Tor Lupara"}),"."]}),u.jsxs("p",{className:"text-stone-700 text-sm sm:text-base mt-3 leading-relaxed",children:["Vieni a trovarci nel nostro atelier floreale oppure ordina online: recapitiamo mazzi sartoriali, piante e omaggi per eventi con mezzo climatizzato e riserva idrica agli steli in ",u.jsx("strong",{children:"tutti i quartieri di Roma e provincia"}),"."]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"bg-white p-6 sm:p-7 rounded-[2rem] shadow-xl border border-stone-200 space-y-4",children:[u.jsxs("div",{className:"flex items-start gap-3.5",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-botanical-50 border border-botanical-100 flex items-center justify-center text-clay shrink-0 shadow-sm",children:u.jsx(Qs,{className:"w-6 h-6 text-clay"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-clay",children:"Sede & Laboratorio"}),u.jsxs("h3",{className:"font-serif text-2xl font-bold text-botanical-950 leading-tight mt-0.5",children:[Nt.brand.name," Atelier"]}),u.jsx("p",{className:"text-xs font-semibold text-stone-700 mt-1",children:Nt.contact.address})]})]}),u.jsxs("div",{className:"pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx(Xa,{className:"w-4 h-4 text-emerald-600 shrink-0"}),u.jsxs("span",{children:[Nt.contact.openingDays," • ",Nt.contact.operatingHours]})]}),u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx(aw,{className:"w-4 h-4 text-stone-400 shrink-0"}),u.jsxs("span",{children:["Telefono: ",u.jsx("strong",{children:Nt.contact.phoneDisplay})]})]})]}),u.jsxs("a",{href:Nt.storeLocation.directionsUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full py-3.5 px-5 bg-botanical-950 hover:bg-clay text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group active:scale-95",children:[u.jsx(Vs,{className:"w-4 h-4 text-petal group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Avvia Navigazione verso la Bottega"}),u.jsx(Wl,{className:"w-3.5 h-3.5 opacity-70"})]})]}),u.jsxs("div",{className:"p-5 sm:p-6 rounded-[2rem] bg-botanical-50 border border-botanical-200/80 space-y-3",children:[u.jsxs("h4",{className:"font-serif text-lg font-bold text-botanical-950 flex items-center gap-2",children:[u.jsx(Jl,{className:"w-4 h-4 text-gold"}),u.jsx("span",{children:"Servizio di Consegna a Roma"})]}),u.jsxs("ul",{className:"space-y-2 text-xs text-stone-700",children:[u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx(Ga,{className:"w-4 h-4 text-emerald-600 shrink-0 mt-0.5"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Consegna in Tutta Roma:"})," Centro Storico, Roma Nord, Roma Sud, Eur, Parioli e zone limitrofe."]})]}),u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx(Ga,{className:"w-4 h-4 text-emerald-600 shrink-0 mt-0.5"}),u.jsx("span",{children:s.freeShippingEnabled?u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:"Spedizione Gratuita:"})," per tutti gli ordini superiori a ",s.freeShippingThreshold.toFixed(2)," €."]}):u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:"Consegna a Domicilio:"})," tariffa dedicata di ",s.standardShippingFee.toFixed(2)," € (oppure ritiro gratuito in bottega)."]})})]}),u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx(Ga,{className:"w-4 h-4 text-emerald-600 shrink-0 mt-0.5"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Fiori Sempre Idratati:"})," viaggiano in acqua e con mezzo dedicato refrigerato."]})]})]})]})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white group",children:[u.jsx("div",{className:"relative h-80 sm:h-96 w-full",children:u.jsx("iframe",{title:"Mappa Bottega VELORA - Via Nomentana 38 Tor Lupara",src:Nt.storeLocation.embedUrl,width:"100%",height:"100%",style:{border:0},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full object-cover"})}),u.jsxs("div",{className:"p-5 sm:p-6 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"}),u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-stone-500",children:"Posizione Ufficiale Google Maps"})]}),u.jsx("h4",{className:"font-serif text-xl font-bold text-botanical-950 mt-0.5",children:"Via Nomentana 38, Tor Lupara"}),u.jsx("p",{className:"text-xs text-stone-600 mt-0.5",children:"Fonte Nuova (RM) • Ampio parcheggio fronte bottega"})]}),u.jsxs("a",{href:Nt.storeLocation.directionsUrl,target:"_blank",rel:"noopener noreferrer",className:"px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 shrink-0 group active:scale-95",children:[u.jsx(Vs,{className:"w-4 h-4 group-hover:rotate-45 transition-transform"}),u.jsx("span",{children:"Apri Navigatore GPS"}),u.jsx(Wl,{className:"w-3.5 h-3.5 opacity-70"})]})]})]})})]})]})})},lg=[{id:"fun-1",name:'Cuscino Floreale "Candore"',price:95,badge:"Nastro Oro Incluso",desc:"Rose bianche avalanche, lilium orientali candidi, lisianthus e fronde nobili su spugna bagnata.",img:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80"},{id:"fun-2",name:'Corona su Cavalletto "Eternità"',price:165,badge:"Alta Cerimonia",desc:"Grande corona circolare lavorata a mano con orchidee bianche, rose crema e rami di ulivo.",img:"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"}],Bw=()=>{const{setIsSolemnMode:s}=Gi(),{addFuneralTributeToCart:e}=qa(),n=pe.useRef(null),[r,o]=pe.useState(lg[0]),[c,d]=pe.useState("Con profondo affetto e stima, Famiglia Rossi"),[f,p]=pe.useState("Chiesa / Parrocchia"),[g,v]=pe.useState("Entro le ore 09:30"),[_,y]=pe.useState("Chiesa di Santa Maria in Trastevere");pe.useEffect(()=>{const b=new IntersectionObserver(E=>{E.forEach(S=>{s(S.isIntersecting)})},{threshold:.25});return n.current&&b.observe(n.current),()=>b.disconnect()},[s]);const M=()=>{const b={tributeId:r.id,tributeName:r.name,ribbonText:c.trim()||"Con affetto e cordoglio",ribbonColor:"crema",goldFoil:!0,venueType:f,ceremonyTime:g,churchVenueDetails:_,price:r.price,img:r.img};e(b)};return u.jsx("section",{ref:n,id:"arte-funebre",className:"relative z-10 py-24 sm:py-28 section-glass-funeral text-stone-100 border-b border-stone-700/60 transition-colors duration-700",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[u.jsxs("div",{className:"max-w-3xl mb-12 sm:mb-14",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-stone-300 text-xs font-semibold mb-3",children:[u.jsx(zb,{className:"w-3.5 h-3.5 text-amber-300"}),u.jsx("span",{children:"Illuminazione 3D Solenne Attiva • Rispetto e Massima Puntualità"})]}),u.jsx("h2",{className:"font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-1 font-semibold",children:"Arte Funebre & Omaggi di Cordoglio."}),u.jsxs("p",{className:"text-stone-300 text-sm sm:text-base mt-3 leading-relaxed",children:["In questa sezione anche la rosa 3D sullo sfondo assume una luce argentea e raccolta. Personalizza il"," ",u.jsx("strong",{className:"text-amber-300",children:"Nastro di Cordoglio in raso con stampa a caldo in lamina d'oro"})," ","e indica il luogo della cerimonia a Roma o provincia."]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start",children:[u.jsx("div",{className:"lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6",children:lg.map(b=>{const E=r.id===b.id;return u.jsxs("div",{onClick:()=>o(b),className:`bg-stone-900/90 rounded-3xl p-5 border transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer ${E?"border-amber-400/80 ring-2 ring-amber-400/20":"border-stone-700/80 hover:border-stone-500"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative h-56 rounded-2xl overflow-hidden mb-4",children:[u.jsx("img",{src:b.img,alt:b.name,className:"w-full h-full object-cover",loading:"lazy"}),u.jsx("span",{className:"absolute top-3 left-3 bg-black/80 text-stone-200 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-white/20",children:b.badge})]}),u.jsx("h3",{className:"font-serif text-2xl text-white font-semibold",children:b.name}),u.jsx("p",{className:"text-xs text-stone-400 mt-1 leading-relaxed",children:b.desc})]}),u.jsxs("div",{className:"mt-5 pt-4 border-t border-stone-800 flex items-center justify-between",children:[u.jsxs("span",{className:"text-xl font-bold text-amber-300",children:[b.price,",00 €"]}),u.jsx("button",{type:"button",onClick:S=>{S.stopPropagation(),o(b)},className:`px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${E?"bg-amber-400 text-stone-950 shadow-lg":"bg-white/10 hover:bg-white text-white hover:text-stone-950"}`,children:E?"✓ Selezionato":"Scegli Omaggio"})]})]},b.id)})}),u.jsxs("div",{className:"lg:col-span-5 bg-stone-900/95 rounded-[2rem] p-6 sm:p-8 border border-stone-700 shadow-2xl space-y-5",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-stone-800 pb-4",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300",children:"Personalizzazione Omaggio"}),u.jsx("h4",{className:"font-serif text-2xl sm:text-3xl text-white font-semibold mt-0.5",children:r.name})]}),u.jsxs("span",{className:"text-2xl font-bold text-amber-300 shrink-0",children:[r.price,",00 €"]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-stone-300",children:"Testo sul Nastro di Cordoglio"}),u.jsxs("span",{className:"text-[11px] font-mono text-stone-400",children:[c.length,"/45"]})]}),u.jsx("input",{type:"text",maxLength:45,value:c,onChange:b=>d(b.target.value),placeholder:"Es. Con affetto, Famiglia...",className:"w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"}),u.jsxs("div",{className:"mt-3 p-4 rounded-xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-500/40 shadow-inner text-center select-none",children:[u.jsx("span",{className:"block text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-1",children:"Anteprima Nastro in Raso & Lamina d'Oro"}),u.jsxs("p",{className:"font-serif italic text-lg sm:text-xl text-amber-300 tracking-wide drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]",children:["✦ ",c||"Sempre nei nostri cuori"," ✦"]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5 flex items-center gap-1.5",children:[u.jsx(Cb,{className:"w-3.5 h-3.5 text-stone-400"})," Luogo Consegna"]}),u.jsxs("select",{value:f,onChange:b=>p(b.target.value),className:"w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400",children:[u.jsx("option",{value:"Chiesa / Parrocchia",children:"Chiesa / Parrocchia"}),u.jsx("option",{value:"Camera Ardente / Ospedale",children:"Camera Ardente / Ospedale"}),u.jsx("option",{value:"Cimitero Comunale",children:"Cimitero Comunale"}),u.jsx("option",{value:"Domicilio Famiglia",children:"Domicilio Famiglia"})]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5 flex items-center gap-1.5",children:[u.jsx(Xa,{className:"w-3.5 h-3.5 text-stone-400"})," Orario Cerimonia"]}),u.jsxs("select",{value:g,onChange:b=>v(b.target.value),className:"w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400",children:[u.jsx("option",{value:"Entro le ore 09:30",children:"Entro le ore 09:30"}),u.jsx("option",{value:"Entro le ore 11:00",children:"Entro le ore 11:00"}),u.jsx("option",{value:"Entro le ore 15:00",children:"Entro le ore 15:00"}),u.jsx("option",{value:"Entro le ore 16:30",children:"Entro le ore 16:30"})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5",children:"Nome Defunto / Indicazioni Chiesa / Cimitero"}),u.jsx("input",{type:"text",value:_,onChange:b=>y(b.target.value),placeholder:"Es. Fam. Bianchi - Chiesa Santa Maria in Trastevere",className:"w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"})]}),u.jsxs("button",{type:"button",onClick:M,className:"w-full py-4 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95",children:[u.jsx("span",{children:"Aggiungi Omaggio con Nastro al Carrello"}),u.jsx(fw,{className:"w-3.5 h-3.5"})]})]})]})]})})},jw=()=>{const s=e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})};return u.jsx("footer",{className:"relative z-10 bg-botanical-950 text-stone-400 py-16 sm:py-20 border-t border-white/10 text-sm",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[u.jsx("div",{className:"inline-block",children:u.jsx(Gl,{size:"lg",variant:"light"})}),u.jsxs("p",{className:"text-xs text-stone-300 max-w-md leading-relaxed pt-2",children:["Atelier botanico d'autore. Creiamo bouquet sartoriali freschi ogni mattina, selezioniamo piante rare invasate a mano in terrecotte e realizziamo composizioni di cordoglio solenni con consegna espressa in ",u.jsx("strong",{children:"tutta Roma"}),"."]}),u.jsxs("div",{className:"pt-2 flex flex-col gap-2 text-xs",children:[u.jsxs("span",{className:"flex items-center gap-2 text-petal font-medium",children:[u.jsx(Qs,{className:"w-4 h-4 text-clay shrink-0"}),Nt.contact.address]}),u.jsxs("span",{className:"flex items-center gap-2 text-stone-300",children:[u.jsx(Xa,{className:"w-4 h-4 text-emerald-400 shrink-0"}),Nt.contact.openingDays," (",Nt.contact.operatingHours,")"]})]})]}),u.jsxs("div",{className:"lg:col-span-3 space-y-3",children:[u.jsx("h5",{className:"text-xs font-bold uppercase tracking-[0.25em] text-white",children:"Navigazione Atelier"}),u.jsxs("ul",{className:"space-y-2.5 text-xs",children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>s("hero-parallax"),className:"hover:text-petal transition-colors text-left",children:"Atelier Botanico"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>s("catalogo-3d"),className:"hover:text-petal transition-colors text-left",children:"Creazioni Floreali"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>s("apple-carousel-sec"),className:"hover:text-petal transition-colors text-left",children:"Le Nostre Collezioni"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>s("bottega-mappa"),className:"hover:text-petal transition-colors text-left",children:"Bottega a Tor Lupara & Consegne"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>s("arte-funebre"),className:"hover:text-petal transition-colors text-left",children:"Arte Funebre & Nastro Oro"})})]})]}),u.jsxs("div",{className:"lg:col-span-4 space-y-4",children:[u.jsx("h5",{className:"text-xs font-bold uppercase tracking-[0.25em] text-white",children:"Bottega & Assistenza"}),u.jsx("p",{className:"text-xs leading-relaxed text-stone-300",children:"Hai richieste floreali speciali o cerimonie su misura? Il nostro mastro fiorista risponde direttamente su WhatsApp e in bottega."}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-1",children:[u.jsxs("a",{href:Nt.storeLocation.directionsUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-clay hover:bg-clay/90 text-white text-xs font-bold transition-all shadow-md group",children:[u.jsx(Vs,{className:"w-3.5 h-3.5 text-petal group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Naviga verso la Bottega"}),u.jsx(Wl,{className:"w-3 h-3 opacity-80"})]}),u.jsxs("a",{href:Nt.contact.whatsappDirectUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-lg",children:[u.jsx(Sf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WhatsApp Bottega"})]})]})]})]}),u.jsx("div",{className:"mt-12 pt-8 border-t border-white/10",children:u.jsxs("div",{className:"bg-white/5 border border-white/15 rounded-3xl p-4 sm:p-6 backdrop-blur-md",children:[u.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-clay text-white flex items-center justify-center shrink-0",children:u.jsx(Qs,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-serif text-lg text-white font-bold leading-tight",children:"Finestrina Mappa Bottega • Via Nomentana 38, 00013 Tor Lupara (RM)"}),u.jsx("p",{className:"text-xs text-stone-300",children:"Clicca su qualsiasi punto della mappa o sul pulsante per avviare il navigatore GPS"})]})]}),u.jsxs("a",{href:Nt.storeLocation.directionsUrl,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform active:scale-95 shrink-0",children:[u.jsx(Vs,{className:"w-4 h-4"}),u.jsx("span",{children:"Avvia Navigazione GPS"})]})]}),u.jsxs("div",{className:"relative rounded-2xl overflow-hidden h-56 sm:h-64 border border-white/20 bg-stone-900 group",children:[u.jsx("iframe",{title:"Mappa Bottega VELORA Tor Lupara",src:Nt.storeLocation.embedUrl,width:"100%",height:"100%",style:{border:0},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"}),u.jsx("a",{href:Nt.storeLocation.directionsUrl,target:"_blank",rel:"noopener noreferrer",className:"absolute inset-0 z-10 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]",title:"Clicca per aprire la navigazione su Google Maps",children:u.jsxs("span",{className:"px-5 py-3 rounded-full bg-botanical-950 text-white font-bold text-xs shadow-2xl border border-white/30 flex items-center gap-2",children:[u.jsx(Vs,{className:"w-4 h-4 text-petal"}),u.jsx("span",{children:"Portami a Via Nomentana 38, Tor Lupara →"})]})})]})]})}),u.jsxs("div",{className:"mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400",children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," ",Nt.brand.name," • Atelier Botanico Sartoriale • Via Nomentana 38, Tor Lupara. Tutti i diritti riservati."]}),u.jsxs("p",{className:"flex items-center gap-1.5 text-stone-400",children:["Consegne a mano in tutta Roma ",u.jsx(n0,{className:"w-3 h-3 text-clay inline fill-clay"})]})]})]})})},Vw=()=>{const{items:s,subtotal:e,shippingFee:n,total:r,freeShippingEnabled:o,freeShippingProgressPct:c,amountNeededForFreeShipping:d,isFreeShipping:f,isCartOpen:p,setIsCartOpen:g,greetingCardText:v,setGreetingCardText:_,deliveryDate:y,setDeliveryDate:M,timeSlot:b,setTimeSlot:E,deliveryAddress:S,setDeliveryAddress:x,customerName:I,setCustomerName:D,customerPhone:R,setCustomerPhone:B,updateQuantity:z,removeFromCart:O,clearCart:V,submitOrder:N,openWhatsAppOrder:C}=qa(),[U,J]=pe.useState(!1),[Y,de]=pe.useState(null);if(!p)return null;const j=b.includes("Ritiro in Bottega"),Z=()=>{g(!1),de(null)},oe=async()=>{if(!s.length){de("Il tuo carrello è vuoto.");return}if(!I.trim()||!R.trim()||!j&&!S.trim()){de("Inserisci nome, telefono e indirizzo di consegna oppure scegli il ritiro in bottega.");return}J(!0),de(null);try{const F=await N();C(),V(),de(`Ordine confermato (#${F.orderId}).`)}catch(F){console.error("Error confirming order:",F),de("Si è verificato un errore durante l'invio dell'ordine. Riprova.")}finally{J(!1)}};return u.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden font-sans",children:[u.jsx("button",{type:"button","aria-label":"Chiudi carrello",className:"absolute inset-0 w-full cursor-default bg-black/60 backdrop-blur-sm",onClick:Z}),u.jsxs("aside",{className:"fixed inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-stone-200 bg-cream shadow-2xl",children:[u.jsxs("header",{className:"border-b border-stone-200 bg-white p-5 sm:p-6",children:[u.jsxs("div",{className:"flex items-start justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-serif text-3xl font-semibold text-botanical-950",children:"Il tuo carrello"}),u.jsx("p",{className:"mt-1 text-xs text-stone-500",children:"Consegna espressa a domicilio in tutta Roma"})]}),u.jsx("button",{type:"button",onClick:Z,className:"flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-colors hover:bg-stone-200","aria-label":"Chiudi carrello",children:u.jsx(Js,{className:"h-5 w-5"})})]}),o&&u.jsxs("div",{className:"mt-4 rounded-2xl border border-botanical-100 bg-botanical-50 p-3.5",children:[u.jsxs("div",{className:"mb-1.5 flex justify-between text-xs font-semibold text-botanical-900",children:[u.jsx("span",{children:f?"Consegna gratuita sbloccata":`Mancano ${d.toFixed(2)} € per la spedizione gratuita`}),u.jsxs("span",{className:"font-mono text-clay",children:[c,"%"]})]}),u.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-stone-200",children:u.jsx("div",{className:"h-full rounded-full bg-botanical-800 transition-all duration-500",style:{width:`${c}%`}})})]})]}),u.jsxs("div",{className:"flex-1 space-y-5 overflow-y-auto p-5 sm:p-6",children:[s.length?u.jsx("div",{className:"space-y-3",children:s.map(F=>u.jsxs("article",{className:"flex gap-3 rounded-2xl border border-stone-200 bg-white p-3",children:[u.jsx("img",{src:F.img,alt:F.name,className:"h-16 w-16 rounded-xl object-cover"}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex justify-between gap-2",children:[u.jsx("h4",{className:"truncate font-serif text-lg font-semibold text-botanical-950",children:F.name}),u.jsx("button",{type:"button",onClick:()=>O(F.id),"aria-label":`Rimuovi ${F.name}`,className:"text-stone-400 hover:text-clay",children:u.jsx(Mf,{className:"h-4 w-4"})})]}),u.jsx("p",{className:"mt-0.5 text-xs text-stone-500",children:F.meta}),u.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[u.jsxs("span",{className:"text-sm font-bold text-botanical-900",children:[(F.price*F.quantity).toFixed(2)," €"]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:()=>z(F.id,-1),className:"rounded-full border border-stone-200 p-1","aria-label":"Diminuisci quantità",children:u.jsx(ew,{className:"h-3 w-3"})}),u.jsx("span",{className:"w-4 text-center text-xs font-bold",children:F.quantity}),u.jsx("button",{type:"button",onClick:()=>z(F.id,1),className:"rounded-full border border-stone-200 p-1","aria-label":"Aumenta quantità",children:u.jsx(s0,{className:"h-3 w-3"})})]})]})]})]},F.id))}):u.jsx("p",{className:"py-12 text-center text-sm text-stone-500",children:"Il tuo carrello è ancora vuoto."}),u.jsxs("section",{className:"space-y-3 rounded-2xl border border-stone-200 bg-white p-4",children:[u.jsx("input",{value:I,onChange:F=>D(F.target.value),placeholder:"Nome e cognome *",className:"w-full rounded-xl border border-stone-200 px-3 py-2 text-sm outline-none focus:border-botanical-600"}),u.jsx("input",{value:R,onChange:F=>B(F.target.value),placeholder:"Telefono *",type:"tel",className:"w-full rounded-xl border border-stone-200 px-3 py-2 text-sm outline-none focus:border-botanical-600"}),u.jsxs("div",{className:"relative",children:[u.jsx(Qs,{className:"pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-stone-400"}),u.jsx("input",{value:S,onChange:F=>x(F.target.value),placeholder:"Indirizzo di consegna *",disabled:j,className:"w-full rounded-xl border border-stone-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-botanical-600 disabled:bg-stone-100"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("label",{className:"relative",children:[u.jsx(_b,{className:"pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-stone-400"}),u.jsx("input",{value:y,onChange:F=>M(F.target.value),type:"date",className:"w-full rounded-xl border border-stone-200 py-2 pl-9 pr-2 text-sm outline-none focus:border-botanical-600"})]}),u.jsxs("select",{value:b,onChange:F=>E(F.target.value),className:"rounded-xl border border-stone-200 px-2 py-2 text-sm outline-none focus:border-botanical-600",children:[u.jsx("option",{children:"Mattina (09:00 - 12:30)"}),u.jsx("option",{children:"Pomeriggio (15:00 - 19:00)"}),u.jsx("option",{children:"Ritiro in Bottega (Gratis)"})]})]}),u.jsx("textarea",{value:v,onChange:F=>_(F.target.value),placeholder:"Messaggio per il biglietto",rows:3,className:"w-full resize-none rounded-xl border border-stone-200 px-3 py-2 text-sm outline-none focus:border-botanical-600"})]}),Y&&u.jsx("p",{className:"rounded-xl bg-petal p-3 text-sm text-botanical-950",children:Y})]}),u.jsxs("footer",{className:"border-t border-stone-200 bg-white p-5",children:[u.jsxs("dl",{className:"space-y-1 text-sm text-stone-600",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("dt",{children:"Subtotale"}),u.jsxs("dd",{children:[e.toFixed(2)," €"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("dt",{children:"Consegna"}),u.jsx("dd",{children:n===0?"Gratis":`${n.toFixed(2)} €`})]}),u.jsxs("div",{className:"flex justify-between pt-2 font-serif text-xl font-bold text-botanical-950",children:[u.jsx("dt",{children:"Totale"}),u.jsxs("dd",{children:[r.toFixed(2)," €"]})]})]}),u.jsxs("button",{type:"button",onClick:oe,disabled:U||!s.length,className:"mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-botanical-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-botanical-700 disabled:cursor-not-allowed disabled:opacity-50",children:[u.jsx(Sf,{className:"h-4 w-4"}),U?"Invio in corso...":"Conferma ordine su WhatsApp"]})]})]})]})},Hw=({onNavigateToAdmin:s})=>u.jsxs("div",{className:"min-h-screen bg-cream text-stone-800 font-sans antialiased overflow-x-hidden selection:bg-clay selection:text-white relative",children:[u.jsx(db,{}),u.jsx(Pw,{onNavigateToAdmin:s}),u.jsxs("main",{className:"relative z-10",children:[u.jsx(Lw,{}),u.jsx(Uw,{}),u.jsx(Ow,{}),u.jsx(zw,{}),u.jsx(Bw,{})]}),u.jsx(jw,{}),u.jsx(Vw,{})]}),Gw=({currentImageUrl:s="",onImageUploaded:e,onImageRemoved:n,label:r="Fotografia Botanica del Prodotto",helperText:o="Trascina una foto o carica da smartphone/PC (Cloudinary ottimizza automaticamente la qualità)",className:c=""})=>{const[d,f]=pe.useState(!1),[p,g]=pe.useState(0),[v,_]=pe.useState(null),[y,M]=pe.useState(!1),[b,E]=pe.useState(s),S=pe.useRef(null),x=pe.useRef(null);ug.useEffect(()=>{E(s)},[s]);const I=pe.useCallback(async U=>{if(_(null),!U.type.startsWith("image/")){_("Seleziona un formato immagine valido (JPEG, PNG, WebP).");return}f(!0),g(15);const J=setInterval(()=>{g(Y=>Y>=85?(clearInterval(J),Y):Y+15)},250);try{const Y=await Dw(U);clearInterval(J),g(100),E(Y),e(Y)}catch(Y){clearInterval(J);const de=Y instanceof Error?Y.message:"Errore durante il caricamento dell'immagine su Cloudinary.";_(de)}finally{setTimeout(()=>{f(!1),g(0)},400)}},[e]),D=U=>{const J=U.target.files;J&&J[0]&&I(J[0]),U.target.value=""},R=U=>{U.preventDefault(),U.stopPropagation(),M(!0)},B=U=>{U.preventDefault(),U.stopPropagation(),M(!1)},z=U=>{U.preventDefault(),U.stopPropagation(),M(!1),U.dataTransfer.files&&U.dataTransfer.files[0]&&I(U.dataTransfer.files[0])},O=()=>{E(""),_(null),n?n():e("")},V=()=>{!d&&S.current&&S.current.click()},N=()=>{!d&&x.current&&x.current.click()},C=Iw(b);return u.jsxs("div",{className:`space-y-2.5 font-sans ${c}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wider text-botanical-950 flex items-center gap-1.5",children:[u.jsx(Vb,{className:"w-3.5 h-3.5 text-clay"}),u.jsx("span",{children:r})]}),C&&u.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200",children:[u.jsx(Jl,{className:"w-3 h-3 text-gold"}),"Cloudinary CDN Attivo"]})]}),o&&u.jsx("p",{className:"text-[11px] text-stone-500 leading-normal",children:o}),u.jsx("input",{ref:S,type:"file",accept:"image/jpeg,image/png,image/webp,image/gif",className:"hidden",onChange:D,disabled:d}),u.jsx("input",{ref:x,type:"file",accept:"image/*",capture:"environment",className:"hidden",onChange:D,disabled:d}),b?u.jsxs("div",{className:"relative rounded-2xl overflow-hidden border-2 border-botanical-900/20 bg-cream/60 p-3 shadow-md transition-all group",children:[u.jsxs("div",{className:"relative h-60 sm:h-72 w-full rounded-xl overflow-hidden bg-stone-900 flex items-center justify-center border border-stone-200",children:[u.jsx("img",{src:ql(b,800),alt:"Anteprima Creazione Botanica",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),u.jsx("div",{className:"absolute top-3 left-3 bg-botanical-950/85 backdrop-blur-md text-petal text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/20 shadow-md",children:C?"Ottimizzata WebP / AVIF":"Immagine Esterna"}),u.jsxs("div",{className:"absolute inset-0 bg-botanical-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px] p-4",children:[u.jsxs("button",{type:"button",onClick:V,disabled:d,className:"px-4 py-2 rounded-xl bg-white text-botanical-950 font-bold text-xs uppercase tracking-wider hover:bg-clay hover:text-white transition-all shadow-lg flex items-center gap-1.5 active:scale-95",children:[u.jsx(Xl,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Sostituisci"})]}),u.jsxs("button",{type:"button",onClick:N,disabled:d,className:"sm:hidden px-3.5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-lg flex items-center gap-1.5",children:[u.jsx(ag,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Fotocamera"})]}),u.jsxs("button",{type:"button",onClick:O,disabled:d,className:"px-4 py-2 rounded-xl bg-rose-600/90 text-white font-bold text-xs uppercase tracking-wider hover:bg-rose-700 transition-all shadow-lg flex items-center gap-1.5 active:scale-95",children:[u.jsx(Js,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Rimuovi"})]})]})]}),u.jsxs("div",{className:"mt-2.5 px-1 flex items-center justify-between text-xs text-stone-600",children:[u.jsx("span",{className:"truncate max-w-[240px] sm:max-w-xs text-[11px] font-mono text-stone-500",children:b}),u.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"text-clay hover:text-botanical-950 font-bold flex items-center gap-1 transition-colors text-[11px] shrink-0",children:[u.jsx("span",{children:"Apri intera"}),u.jsx(Wl,{className:"w-3 h-3"})]})]})]}):u.jsx("div",{onDragOver:R,onDragLeave:B,onDrop:z,onClick:V,className:`relative rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center cursor-pointer transition-all duration-200 select-none ${y?"border-clay bg-petal/20 scale-[1.01]":"border-stone-300 hover:border-botanical-900 bg-cream/40 hover:bg-white"} ${d?"pointer-events-none opacity-80":""}`,children:d?u.jsxs("div",{className:"py-6 flex flex-col items-center justify-center space-y-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx(Xl,{className:"w-10 h-10 text-clay animate-spin"}),u.jsxs("span",{className:"absolute inset-0 flex items-center justify-center text-[10px] font-bold text-botanical-950",children:[p,"%"]})]}),u.jsxs("div",{className:"w-full max-w-xs space-y-1.5",children:[u.jsx("div",{className:"h-2 w-full bg-stone-200 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-clay via-rose-500 to-botanical-900 transition-all duration-300 rounded-full",style:{width:`${p}%`}})}),u.jsx("p",{className:"text-xs font-semibold text-botanical-950",children:"Caricamento su Cloudinary in corso..."}),u.jsx("p",{className:"text-[10px] text-stone-500",children:"Generazione URL sicuro HTTPS e ottimizzazione automatica"})]})]}):u.jsxs("div",{className:"space-y-4 py-3",children:[u.jsx("div",{className:"mx-auto w-14 h-14 rounded-2xl bg-botanical-50 border border-botanical-200/80 flex items-center justify-center text-botanical-950 shadow-sm transition-transform group-hover:scale-110",children:u.jsx(og,{className:"w-6 h-6 text-clay"})}),u.jsxs("div",{className:"space-y-1",children:[u.jsx("p",{className:"text-sm font-bold text-botanical-950",children:"Trascina qui l'immagine del fiore o pianta"}),u.jsx("p",{className:"text-xs text-stone-500",children:"oppure clicca per sfogliare i file dal tuo computer"})]}),u.jsxs("div",{className:"pt-2 flex flex-wrap items-center justify-center gap-2.5",children:[u.jsxs("button",{type:"button",onClick:U=>{U.stopPropagation(),V()},className:"px-4 py-2 rounded-xl bg-botanical-950 hover:bg-clay text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 active:scale-95",children:[u.jsx(og,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Seleziona File"})]}),u.jsxs("button",{type:"button",onClick:U=>{U.stopPropagation(),N()},className:"px-4 py-2 rounded-xl bg-white hover:bg-stone-50 text-botanical-950 border border-stone-300 text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 active:scale-95",children:[u.jsx(ag,{className:"w-3.5 h-3.5 text-clay"}),u.jsx("span",{children:"Scatta con Fotocamera"})]})]}),u.jsx("div",{className:"pt-2 text-[10px] text-stone-400",children:"Formati supportati: JPEG, PNG, WebP (max 10MB) • Preset: Unsigned Cloudinary"})]})}),v&&u.jsxs("div",{className:"p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-in fade-in",children:[u.jsx(Ew,{className:"w-4 h-4 text-rose-600 shrink-0 mt-0.5"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("span",{className:"font-bold",children:"Attenzione durante l'upload:"})," ",v]}),u.jsx("button",{type:"button",onClick:()=>_(null),className:"text-rose-600 hover:text-rose-900",children:u.jsx(Js,{className:"w-4 h-4"})})]})]})},Ww=({isOpen:s,productToEdit:e,onClose:n,onSave:r,onDelete:o})=>{const[c,d]=pe.useState(""),[f,p]=pe.useState("bouquet"),[g,v]=pe.useState(45),[_,y]=pe.useState(45),[M,b]=pe.useState(10),[E,S]=pe.useState("Bestseller • Mazzo"),[x,I]=pe.useState(""),[D,R]=pe.useState(""),[B,z]=pe.useState(""),[O,V]=pe.useState(!1),[N,C]=pe.useState(38),[U,J]=pe.useState(15),[Y,de]=pe.useState(!1),[j,Z]=pe.useState(!1);if(pe.useEffect(()=>{e?(d(e.name),p(e.category),v(e.price),y(e.originalPrice||e.price),b(e.stockQuantity),S(e.badge),I(e.desc),R(e.dimensions||""),z(e.imageUrl||e.img||""),V(!!e.isPromo),C(e.price),J(e.promoDiscountPct||15)):(d(""),p("bouquet"),v(45),y(45),b(12),S("Novità • Mazzo"),I("Composizione floreale fresca con fiori di stagione selezionati e riserva d’acqua agli steli."),R("Altezza 45cm • Diametro 30cm"),z("https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80"),V(!1),C(38),J(15))},[e,s]),!s)return null;const oe=W=>{J(W);const fe=Math.round(_*(1-W/100));C(fe)},F=W=>{if(C(W),_>0){const fe=Math.round((_-W)/_*100);J(Math.max(1,fe))}},le=W=>{b(W?10:0)},re=async W=>{if(W.preventDefault(),!c.trim()){alert("Inserisci il titolo del prodotto.");return}if(!B){alert("Aggiungi o scatta una foto del prodotto.");return}de(!0);try{const fe=O?N:_;await r({name:c.trim(),category:f,price:fe,originalPrice:O?_:fe,stockQuantity:Number(M),badge:E.trim(),desc:x.trim(),dimensions:D.trim(),img:B,imageUrl:B,isPromo:O,promoDiscountPct:O?U:void 0}),n()}catch(fe){console.error("Error saving product:",fe),alert("Si è verificato un errore durante il salvataggio.")}finally{de(!1)}},P=async()=>{if(!(!e||!o)&&window.confirm(`Sei sicuro di voler eliminare definitivamente "${e.name}" dal catalogo?`)){Z(!0);try{await o(e.id),n()}catch(W){console.error("Delete failed:",W)}finally{Z(!1)}}};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto",children:u.jsxs("div",{className:"bg-white rounded-[2.2rem] max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[95vh] flex flex-col",children:[u.jsxs("div",{className:"p-5 sm:p-6 bg-cream border-b border-stone-200 flex items-center justify-between shrink-0",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-[0.25em] text-clay",children:"Gestione Catalogo VELORA"}),u.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-semibold text-botanical-950 leading-tight",children:e?`Modifica: ${e.name}`:"Aggiungi Nuovo Fiore / Vaso"})]}),u.jsx("button",{type:"button",onClick:n,className:"w-10 h-10 rounded-full bg-white hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors shadow-sm",children:u.jsx(Js,{className:"w-5 h-5"})})]}),u.jsxs("form",{onSubmit:re,className:"p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-xs",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Nome Creazione Botanica *"}),u.jsx("input",{type:"text",required:!0,value:c,onChange:W=>d(W.target.value),placeholder:"Es. Bouquet 'Tramonto di Positano'",className:"w-full px-4 py-3 rounded-xl border border-stone-300 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-botanical-900"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Categoria Catalogo"}),u.jsxs("select",{value:f,onChange:W=>p(W.target.value),className:"w-full px-3.5 py-3 rounded-xl border border-stone-300 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900",children:[u.jsx("option",{value:"bouquet",children:"Bouquet Freschi"}),u.jsx("option",{value:"piante",children:"Piante & Vasi d'Arredo"}),u.jsx("option",{value:"composizioni",children:"Composizioni & Hat-Box"}),u.jsx("option",{value:"funebre",children:"Arte Funebre & Cordoglio"})]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1 flex items-center gap-1",children:[u.jsx(Mw,{className:"w-3.5 h-3.5 text-clay"}),u.jsx("span",{children:"Badge Distintivo"})]}),u.jsx("input",{type:"text",value:E,onChange:W=>S(W.target.value),placeholder:"Es. Bestseller • Vaso Terracotta",className:"w-full px-4 py-3 rounded-xl border border-stone-300 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"})]})]})]}),u.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4",children:[u.jsxs("h4",{className:"font-bold uppercase tracking-wider text-botanical-900 flex items-center gap-2",children:[u.jsx(Db,{className:"w-4 h-4 text-emerald-700"}),u.jsx("span",{children:"Prezzo e Disponibilità Stock"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 items-center",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-stone-600 mb-1",children:"Prezzo Base di Listino (€)"}),u.jsx("input",{type:"number",min:"1",step:"1",required:!0,value:_,onChange:W=>{const fe=parseFloat(W.target.value)||0;y(fe),O||v(fe)},className:"w-full px-4 py-3 rounded-xl border border-stone-300 text-base font-bold text-botanical-950 bg-white"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1",children:[u.jsxs("label",{className:"font-bold text-stone-600 flex items-center gap-1",children:[u.jsx(r0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Giacenza (Quantità)"})]}),u.jsx("span",{className:`font-bold px-2 py-0.5 rounded-full text-[10px] ${M>0?"bg-emerald-100 text-emerald-900":"bg-rose-100 text-rose-900"}`,children:M>0?"Disponibile":"Esaurito"})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"number",min:"0",value:M,onChange:W=>b(parseInt(W.target.value,10)||0),className:"w-24 px-3 py-2.5 rounded-xl border border-stone-300 font-bold text-center bg-white"}),u.jsx("button",{type:"button",onClick:()=>le(!1),className:`flex-1 py-2 rounded-xl font-bold uppercase transition-all ${M===0?"bg-rose-600 text-white shadow":"bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"}`,children:"Segna Esaurito"}),u.jsx("button",{type:"button",onClick:()=>le(!0),className:`flex-1 py-2 rounded-xl font-bold uppercase transition-all ${M>0?"bg-emerald-700 text-white shadow":"bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"}`,children:"In Stock"})]})]})]})]}),u.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Zs,{className:"w-5 h-5 text-clay fill-clay"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold uppercase tracking-wider text-amber-950",children:"Metti in Offerta Speciale"}),u.jsx("p",{className:"text-[11px] text-amber-800",children:"Mostra il prezzo barrato e il badge dinamico sul sito"})]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:O,onChange:W=>V(W.target.checked),className:"sr-only peer"}),u.jsx("div",{className:"w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-clay"})]})]}),O&&u.jsxs("div",{className:"pt-2 border-t border-amber-200/80 space-y-3 animate-in fade-in",children:[u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-amber-900 mb-1",children:"Prezzo Scontato Finale (€)"}),u.jsx("input",{type:"number",min:"1",value:N,onChange:W=>F(parseFloat(W.target.value)||0),className:"w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white font-bold text-clay text-sm"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-amber-900 mb-1",children:"Sconto Applicato (%)"}),u.jsx("input",{type:"number",min:"1",max:"90",value:U,onChange:W=>oe(parseInt(W.target.value,10)||0),className:"w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white font-bold text-amber-950 text-sm"})]})]}),u.jsxs("div",{className:"p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between",children:[u.jsx("span",{className:"text-[11px] text-stone-500 font-semibold",children:"Anteprima Visiva Prezzo:"}),u.jsxs("div",{className:"flex items-baseline gap-2",children:[u.jsxs("span",{className:"text-sm text-stone-400 line-through",children:[_,",00 €"]}),u.jsxs("span",{className:"text-base font-bold text-clay",children:[N,",00 €"]}),u.jsxs("span",{className:"text-[10px] font-bold bg-clay text-white px-2 py-0.5 rounded-full",children:["-",U,"%"]})]})]})]})]}),u.jsx("div",{className:"space-y-2",children:u.jsx(Gw,{currentImageUrl:B,onImageUploaded:W=>z(W),onImageRemoved:()=>z(""),label:"Fotografia della Creazione Floreale o Pianta *",helperText:"Carica una foto da smartphone/PC o trascinala qui. L'immagine verrà inviata direttamente a Cloudinary con ottimizzazione automatica WebP/AVIF."})}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Descrizione Dettagliata"}),u.jsx("textarea",{rows:3,required:!0,value:x,onChange:W=>I(W.target.value),placeholder:"Descrivi i fiori, il profumo, la provenienza...",className:"w-full p-3.5 rounded-xl border border-stone-300 bg-cream text-xs focus:outline-none focus:ring-2 focus:ring-botanical-900"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Dimensioni / Confezionamento"}),u.jsx("input",{type:"text",value:D,onChange:W=>R(W.target.value),placeholder:"Es. Altezza 50cm • Vaso Ø 22cm in terracotta",className:"w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-cream text-xs"})]})]}),u.jsxs("div",{className:"pt-4 border-t border-stone-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-3",children:[e&&o?u.jsxs("button",{type:"button",disabled:j,onClick:P,className:"w-full sm:w-auto px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors",children:[u.jsx(Mf,{className:"w-4 h-4"}),u.jsx("span",{children:j?"Eliminazione...":"Elimina dal Catalogo"})]}):u.jsx("div",{}),u.jsxs("div",{className:"flex gap-2.5 w-full sm:w-auto",children:[u.jsx("button",{type:"button",onClick:n,className:"flex-1 sm:flex-none px-6 py-3 rounded-xl border border-stone-300 text-stone-700 font-bold uppercase hover:bg-stone-100 transition-colors",children:"Annulla"}),u.jsxs("button",{type:"submit",disabled:Y,className:"flex-1 sm:flex-none px-8 py-3 rounded-xl bg-botanical-950 hover:bg-clay text-white font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50",children:[u.jsx(e0,{className:"w-4 h-4"}),u.jsx("span",{children:Y?"Salvataggio...":"Salva Prodotto"})]})]})]})]})]})})},Xw=()=>{const{announcement:s,updateAnnouncement:e}=Gi(),[n,r]=pe.useState(s.message),[o,c]=pe.useState(s.badge),[d,f]=pe.useState(s.secondaryNotice),[p,g]=pe.useState(s.active),[v,_]=pe.useState(!1),y=E=>{c(E.badge),r(E.message),f(E.secondary),e({badge:E.badge,message:E.message,secondaryNotice:E.secondary,specialEvent:E.specialEvent,active:!0}),g(!0),b()},M=E=>{E.preventDefault(),e({badge:o.trim(),message:n.trim(),secondaryNotice:d.trim(),active:p}),b()},b=()=>{_(!0),setTimeout(()=>_(!1),3e3)};return u.jsxs("div",{className:"bg-white rounded-[2rem] p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"text-[10px] uppercase font-bold tracking-[0.25em] text-clay flex items-center gap-1.5",children:[u.jsx(i0,{className:"w-3.5 h-3.5"}),"Top Announcement Bar"]}),u.jsx("h3",{className:"font-serif text-2xl sm:text-3xl font-semibold text-botanical-950 mt-0.5",children:"Banner Promozionale Superiore"}),u.jsx("p",{className:"text-xs text-stone-500 mt-1",children:"Modifica in tempo reale l'annuncio visibile in cima a tutte le pagine del sito."})]}),u.jsxs("div",{className:"flex items-center gap-3 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200",children:[u.jsx("span",{className:"text-xs font-bold text-stone-700",children:p?"Banner Attivo":"Banner Nascosto"}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:p,onChange:E=>{g(E.target.checked),e({active:E.target.checked})},className:"sr-only peer"}),u.jsx("div",{className:"w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5",children:"Modelli Rapidi per Festività & Eventi:"}),u.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[u.jsxs("button",{type:"button",onClick:()=>y({badge:"VELORA:",message:"Consegna espressa a mano garantita in tutta Roma dalla nostra bottega di Tor Lupara",secondary:"🚚 Mezzo refrigerato a domicilio • 💌 Biglietto a mano incluso",specialEvent:"standard"}),className:"px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold flex items-center gap-1.5 transition-colors",children:[u.jsx(Xl,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Standard Bottega"})]}),u.jsxs("button",{type:"button",onClick:()=>y({badge:"❤️ SPECIALE SAN VALENTINO:",message:"Prenota il bouquet di rose per la tua dolce metà. Consegna garantita il 14 Febbraio!",secondary:"🌹 Rosa d'Omaggio nei primi 50 ordini • 💌 Biglietto ceralacca gratis",specialEvent:"san_valentino"}),className:"px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 font-semibold flex items-center gap-1.5 transition-colors",children:[u.jsx(n0,{className:"w-3.5 h-3.5 text-rose-600 fill-rose-600"}),u.jsx("span",{children:"San Valentino"})]}),u.jsxs("button",{type:"button",onClick:()=>y({badge:"🌸 FESTA DELLA MAMMA:",message:"Dille quanto le vuoi bene con le peonie fresche di giornata di VELORA.",secondary:"✨ Consegna Gratuita • 💌 Scrivi una dedica personalizzata da consegnare a mano",specialEvent:"festa_della_mamma"}),className:"px-3.5 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-900 border border-pink-200 font-semibold flex items-center gap-1.5 transition-colors",children:[u.jsx(Jl,{className:"w-3.5 h-3.5 text-pink-600"}),u.jsx("span",{children:"Festa della Mamma"})]}),u.jsxs("button",{type:"button",onClick:()=>y({badge:"⚡ PROMOZIONE LAMPPO:",message:"Sconto esclusivo 15% su tutti i vasi e composizioni ordinati per oggi!",secondary:"🔥 Usa il codice BOTANICA15 al checkout • Valido in tutta Roma",specialEvent:"primavera"}),className:"px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold flex items-center gap-1.5 transition-colors",children:[u.jsx(yw,{className:"w-3.5 h-3.5 text-amber-600"}),u.jsx("span",{children:"Offerta Lampo 15%"})]}),u.jsxs("button",{type:"button",onClick:()=>y({badge:"🎄 MAGIA DEL NATALE:",message:"Centrotavola profumati con pino nobile, cannella e candele artigianali in pronta consegna.",secondary:"✨ Prenota prima del 20 Dicembre • Consegna refrigerata garantita",specialEvent:"natale"}),className:"px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-semibold flex items-center gap-1.5 transition-colors",children:[u.jsx(kb,{className:"w-3.5 h-3.5 text-emerald-600"}),u.jsx("span",{children:"Natale & Feste"})]})]})]}),u.jsxs("form",{onSubmit:M,className:"space-y-4 text-xs",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase text-stone-600 mb-1",children:"Badge Evidenziato"}),u.jsx("input",{type:"text",value:o,onChange:E=>c(E.target.value),placeholder:"Es. VELORA: o SPECIALE:",className:"w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-cream font-bold text-botanical-950"})]}),u.jsxs("div",{className:"sm:col-span-2",children:[u.jsx("label",{className:"block font-bold uppercase text-stone-600 mb-1",children:"Messaggio Principale dell'Annuncio"}),u.jsx("input",{type:"text",required:!0,value:n,onChange:E=>r(E.target.value),placeholder:"Testo visibile a tutti i visitatori...",className:"w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-cream text-stone-800"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase text-stone-600 mb-1",children:"Testo Secondario (Desktop)"}),u.jsx("input",{type:"text",value:d,onChange:E=>f(E.target.value),placeholder:"Es. Consegna gratuita sopra 50€ • Biglietto incluso...",className:"w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-cream text-stone-800"})]}),u.jsxs("div",{className:"pt-2",children:[u.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2",children:"Anteprima Esatta sul Negozio:"}),u.jsxs("div",{className:"bg-botanical-950 text-stone-200 text-xs py-2.5 px-4 rounded-xl border border-white/10 shadow-inner flex flex-wrap justify-between items-center gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),u.jsxs("span",{className:"text-[11px] sm:text-xs",children:[u.jsx("strong",{children:o})," ",n]})]}),u.jsx("div",{className:"text-[11px] text-stone-300 hidden sm:block",children:d})]})]}),u.jsxs("div",{className:"pt-3 flex items-center justify-between",children:[v?u.jsxs("span",{className:"text-emerald-700 font-bold flex items-center gap-1.5 text-xs",children:[u.jsx(e0,{className:"w-4 h-4"})," Banner aggiornato con successo su tutto il sito!"]}):u.jsx("div",{}),u.jsx("button",{type:"submit",className:"px-6 py-3 bg-botanical-950 hover:bg-clay text-white rounded-xl font-bold uppercase tracking-wider shadow-lg transition-all active:scale-95",children:"Pubblica Banner Ora"})]})]})]})},qw=({onBackToStore:s})=>{const{isAuthenticated:e,user:n,login:r,changeCredentials:o,logout:c,isLoading:d}=ev(),{products:f,addProduct:p,updateProduct:g,deleteProduct:v,toggleStock:_,toggleOffer:y,announcement:M,deliverySettings:b,updateDeliverySettings:E,orders:S,refreshOrders:x,updateOrderStatus:I}=Gi(),[D,R]=pe.useState(""),[B,z]=pe.useState(""),[O,V]=pe.useState(null),[N,C]=pe.useState(!1),[U,J]=pe.useState("catalog"),[Y,de]=pe.useState(""),[j,Z]=pe.useState("all"),[oe,F]=pe.useState(!1),[le,re]=pe.useState(null),[P,W]=pe.useState(b.standardShippingFee),[fe,$]=pe.useState(b.freeShippingEnabled),[me,ye]=pe.useState(b.freeShippingThreshold),[_e,Ne]=pe.useState(b.deliveryArea),[Ye,je]=pe.useState(null),[Rt,Pt]=pe.useState(!1),[ct,H]=pe.useState((n==null?void 0:n.username)||""),[Kt,pt]=pe.useState(""),[lt,Ke]=pe.useState(""),[Et,Ge]=pe.useState(""),[L,T]=pe.useState(null),[se,ve]=pe.useState(null),[Se,xe]=pe.useState(!1);pe.useEffect(()=>{W(b.standardShippingFee),$(b.freeShippingEnabled),ye(b.freeShippingThreshold),Ne(b.deliveryArea)},[b]),pe.useEffect(()=>{n!=null&&n.username&&H(n.username)},[n]),pe.useEffect(()=>{U==="orders"&&x()},[U]);const Xe=async ae=>{ae.preventDefault(),V(null),C(!0);try{const Je=await r(D.trim(),B);Je.success?(R(""),z("")):V(Je.error||"Credenziali non valide.")}catch{V("Impossibile accedere al servizio.")}finally{C(!1)}},Ae=pe.useMemo(()=>{const ae=f.length,Je=f.filter(ge=>ge.stockQuantity>0).length,q=f.filter(ge=>ge.stockQuantity===0).length,Re=f.filter(ge=>ge.isPromo).length,he=S.length;return{total:ae,inStock:Je,outOfStock:q,inPromo:Re,ordersCount:he}},[f,S]),Ue=pe.useMemo(()=>f.filter(ae=>Y===""||ae.name.toLowerCase().includes(Y.toLowerCase())||ae.desc.toLowerCase().includes(Y.toLowerCase())||ae.badge.toLowerCase().includes(Y.toLowerCase())?j==="all"?!0:j==="stock"?ae.stockQuantity>0:j==="out_of_stock"?ae.stockQuantity===0:j==="promo"?!!ae.isPromo:ae.category===j:!1),[f,Y,j]),dt=()=>{re(null),F(!0)},Ee=ae=>{re(ae),F(!0)},Oe=async ae=>{le?await g(le.id,ae):await p(ae)},Qe=async ae=>{await v(ae)},nt=async ae=>{ae.preventDefault(),Pt(!0),je(null);try{await E({standardShippingFee:Number(P),freeShippingEnabled:fe,freeShippingThreshold:Number(me),deliveryArea:_e.trim()||"tutta Roma"}),je("✓ Tariffe di consegna e politiche di spedizione aggiornate con successo!"),setTimeout(()=>je(null),4e3)}catch{je("Errore durante il salvataggio delle impostazioni di consegna.")}finally{Pt(!1)}},ze=async ae=>{if(ae.preventDefault(),T(null),ve(null),!Kt){ve("La password attuale è obbligatoria per confermare la modifica.");return}if(lt.length<6){ve("La nuova password deve contenere almeno 6 caratteri.");return}if(lt!==Et){ve("La nuova password e la conferma non coincidono.");return}xe(!0);try{const Je=await o(Kt,ct,lt);Je.success?(T(Je.message||"Credenziali aggiornate con successo su MongoDB!"),pt(""),Ke(""),Ge("")):ve(Je.error||"Errore durante l'aggiornamento delle credenziali.")}catch{ve("Impossibile contattare il server per aggiornare le credenziali.")}finally{xe(!1)}},ft=()=>{s?s():(window.location.hash="",window.scrollTo({top:0,behavior:"smooth"}))};return!e&&!d?u.jsxs("div",{className:"min-h-screen bg-cream flex flex-col justify-center items-center p-4 sm:p-6 relative select-none",children:[u.jsxs("button",{onClick:ft,className:"absolute top-6 left-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-botanical-950 transition-colors bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-sm border border-stone-200",children:[u.jsx(gb,{className:"w-4 h-4"}),u.jsx("span",{children:"Torna al Negozio"})]}),u.jsxs("div",{className:"max-w-md w-full bg-white rounded-[2.5rem] p-7 sm:p-10 shadow-2xl border border-stone-200 space-y-6",children:[u.jsxs("div",{className:"text-center space-y-2",children:[u.jsx(Gl,{size:"lg",variant:"dark"}),u.jsxs("div",{className:"pt-3",children:[u.jsx("span",{className:"px-3 py-1 rounded-full bg-botanical-950 text-petal text-[10px] font-bold uppercase tracking-[0.25em]",children:"Pannello Riservato Fiorista"}),u.jsx("h2",{className:"font-serif text-3xl font-semibold text-botanical-950 mt-2",children:"Accesso Dashboard"}),u.jsx("p",{className:"text-xs text-stone-500",children:"Gestisci catalogo prodotti, ordini ricevuti, tariffe di consegna e sicurezza."})]})]}),O&&u.jsxs("div",{className:"p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center gap-2 animate-in fade-in",children:[u.jsx(af,{className:"w-4 h-4 text-rose-600 shrink-0"}),u.jsx("span",{children:O})]}),u.jsxs("form",{onSubmit:Xe,className:"space-y-4 text-xs",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-600 mb-1",children:"Username / Identificativo"}),u.jsx("input",{type:"text",required:!0,value:D,onChange:ae=>R(ae.target.value),placeholder:"Inserisci username o email...",className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium placeholder:text-stone-400"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-600 mb-1",children:"Password Amministratore"}),u.jsx("input",{type:"password",required:!0,value:B,onChange:ae=>z(ae.target.value),placeholder:"••••••••",className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium placeholder:text-stone-400"})]}),u.jsxs("button",{type:"submit",disabled:N,className:"w-full py-4 bg-botanical-950 hover:bg-clay text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50",children:[u.jsx(of,{className:"w-4 h-4"}),u.jsx("span",{children:N?"Verifica in corso...":"Accedi al Pannello →"})]})]})]})]}):u.jsxs("div",{className:"min-h-screen bg-[#F6F4EE] text-stone-800 font-sans antialiased pb-24",children:[u.jsx("header",{className:"sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-stone-200/80 shadow-sm py-3 px-4 sm:px-8",children:u.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Gl,{size:"sm",variant:"dark",showTagline:!1}),u.jsxs("div",{className:"hidden sm:block pl-3 border-l border-stone-300",children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-[0.25em] text-clay block",children:"Dashboard Amministrazione"}),u.jsxs("span",{className:"text-xs text-stone-500 font-medium",children:["Connesso come: ",u.jsx("strong",{className:"text-botanical-950",children:(n==null?void 0:n.username)||"Titolare"})]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[u.jsxs("button",{onClick:ft,className:"px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-botanical-950 text-xs font-bold transition-colors flex items-center gap-1.5",children:[u.jsx(vw,{className:"w-3.5 h-3.5 text-clay"}),u.jsx("span",{className:"hidden sm:inline",children:"Vedi Negozio Online"})]}),u.jsxs("button",{onClick:c,className:"p-2 sm:px-3 sm:py-2 rounded-xl border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-bold transition-colors flex items-center gap-1.5",title:"Disconnetti",children:[u.jsx(qb,{className:"w-4 h-4"}),u.jsx("span",{className:"hidden sm:inline",children:"Esci"})]})]})]})}),u.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5",children:[u.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-stone-500",children:"Totale Creazioni"}),u.jsx("p",{className:"text-2xl sm:text-3xl font-serif font-bold text-botanical-950 mt-0.5",children:Ae.total})]}),u.jsx("div",{className:"w-10 h-10 rounded-xl bg-botanical-50 text-botanical-900 flex items-center justify-center font-bold",children:"🌿"})]}),u.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-stone-500",children:"Disponibili (In Stock)"}),u.jsx("p",{className:"text-2xl sm:text-3xl font-serif font-bold text-emerald-700 mt-0.5",children:Ae.inStock})]}),u.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center",children:u.jsx(t0,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-stone-500",children:"Ordini Ricevuti"}),u.jsx("p",{className:"text-2xl sm:text-3xl font-serif font-bold text-botanical-950 mt-0.5",children:Ae.ordersCount})]}),u.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-50 text-clay flex items-center justify-center",children:u.jsx(Hs,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-stone-500",children:"Tariffa Consegna"}),u.jsxs("p",{className:"text-2xl sm:text-3xl font-serif font-bold text-clay mt-0.5",children:[b.standardShippingFee.toFixed(2)," €"]})]}),u.jsx("div",{className:"w-10 h-10 rounded-xl bg-stone-50 text-stone-700 flex items-center justify-center",children:u.jsx(lf,{className:"w-5 h-5"})})]})]}),u.jsxs("div",{className:"flex border-b border-stone-300 gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider overflow-x-auto pb-1",children:[u.jsxs("button",{onClick:()=>J("catalog"),className:`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${U==="catalog"?"border-botanical-950 text-botanical-950 font-bold":"border-transparent text-stone-500 hover:text-stone-800"}`,children:[u.jsx(r0,{className:"w-4 h-4"}),u.jsxs("span",{children:["Catalogo Prodotti (",f.length,")"]})]}),u.jsxs("button",{onClick:()=>J("orders"),className:`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${U==="orders"?"border-botanical-950 text-botanical-950 font-bold":"border-transparent text-stone-500 hover:text-stone-800"}`,children:[u.jsx(Hs,{className:"w-4 h-4"}),u.jsxs("span",{children:["Ordini Ricevuti (",S.length,")"]})]}),u.jsxs("button",{onClick:()=>J("logistics"),className:`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${U==="logistics"?"border-botanical-950 text-botanical-950 font-bold":"border-transparent text-stone-500 hover:text-stone-800"}`,children:[u.jsx(lf,{className:"w-4 h-4"}),u.jsx("span",{children:"Tariffe & Spedizioni"})]}),u.jsxs("button",{onClick:()=>J("announcement"),className:`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${U==="announcement"?"border-botanical-950 text-botanical-950 font-bold":"border-transparent text-stone-500 hover:text-stone-800"}`,children:[u.jsx(i0,{className:"w-4 h-4"}),u.jsx("span",{children:"Top Announcement"}),M.active&&u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"})]}),u.jsxs("button",{onClick:()=>J("security"),className:`pb-3 px-2 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${U==="security"?"border-botanical-950 text-botanical-950 font-bold":"border-transparent text-stone-500 hover:text-stone-800"}`,children:[u.jsx(Gb,{className:"w-4 h-4"}),u.jsx("span",{children:"Account & Sicurezza"})]})]}),U==="catalog"&&u.jsxs("div",{className:"space-y-5",children:[u.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4",children:[u.jsxs("div",{className:"relative flex-1",children:[u.jsx(uw,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-3.5"}),u.jsx("input",{type:"text",value:Y,onChange:ae=>de(ae.target.value),placeholder:"Cerca per titolo, fiore o categoria...",className:"w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"})]}),u.jsxs("button",{type:"button",onClick:dt,className:"px-5 py-2.5 rounded-xl bg-botanical-950 hover:bg-clay text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 shrink-0 active:scale-95",children:[u.jsx(s0,{className:"w-4 h-4"}),u.jsx("span",{children:"+ Aggiungi Creazione"})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[u.jsx("span",{className:"text-stone-500 font-semibold text-[11px] uppercase mr-1",children:"Filtra:"}),u.jsxs("button",{onClick:()=>Z("all"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="all"?"bg-botanical-950 text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:["Tutti (",f.length,")"]}),u.jsxs("button",{onClick:()=>Z("stock"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="stock"?"bg-emerald-800 text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:["In Stock (",Ae.inStock,")"]}),u.jsxs("button",{onClick:()=>Z("out_of_stock"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="out_of_stock"?"bg-rose-700 text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:["Esauriti (",Ae.outOfStock,")"]}),u.jsxs("button",{onClick:()=>Z("promo"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="promo"?"bg-clay text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:["In Offerta 🔥 (",Ae.inPromo,")"]}),u.jsx("button",{onClick:()=>Z("bouquet"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="bouquet"?"bg-botanical-950 text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:"Bouquet"}),u.jsx("button",{onClick:()=>Z("piante"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="piante"?"bg-botanical-950 text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:"Piante & Vasi"}),u.jsx("button",{onClick:()=>Z("composizioni"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="composizioni"?"bg-botanical-950 text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:"Composizioni"}),u.jsx("button",{onClick:()=>Z("funebre"),className:`px-3 py-1.5 rounded-full font-bold uppercase text-[11px] transition-all ${j==="funebre"?"bg-botanical-950 text-white":"bg-white border border-stone-300 text-stone-600 hover:bg-stone-50"}`,children:"Arte Funebre"})]}),u.jsxs("div",{className:"bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden",children:[u.jsx("div",{className:"hidden lg:block overflow-x-auto",children:u.jsxs("table",{className:"w-full text-left text-xs",children:[u.jsx("thead",{className:"bg-stone-50 text-stone-500 font-bold uppercase tracking-wider border-b border-stone-200",children:u.jsxs("tr",{children:[u.jsx("th",{className:"py-3.5 px-4",children:"Foto & Titolo"}),u.jsx("th",{className:"py-3.5 px-4",children:"Categoria"}),u.jsx("th",{className:"py-3.5 px-4",children:"Prezzo / Offerta"}),u.jsx("th",{className:"py-3.5 px-4 text-center",children:"Giacenza Stock"}),u.jsx("th",{className:"py-3.5 px-4 text-center",children:"Stato Offerta"}),u.jsx("th",{className:"py-3.5 px-4 text-right",children:"Azioni"})]})}),u.jsx("tbody",{className:"divide-y divide-stone-100",children:Ue.map(ae=>{const Je=ae.stockQuantity===0;return u.jsxs("tr",{className:"hover:bg-cream/40 transition-colors",children:[u.jsx("td",{className:"py-3 px-4",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:ql(ae.imageUrl||ae.img,150),alt:ae.name,className:"w-12 h-12 rounded-xl object-cover shrink-0 border border-stone-200"}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:"font-serif text-base font-bold text-botanical-950 leading-tight",children:ae.name}),u.jsx("span",{className:"text-[10px] text-stone-500 font-medium",children:ae.badge})]})]})}),u.jsx("td",{className:"py-3 px-4 uppercase text-[11px] font-semibold text-stone-600",children:ae.category}),u.jsx("td",{className:"py-3 px-4",children:ae.isPromo?u.jsxs("div",{children:[u.jsxs("span",{className:"font-bold text-clay text-sm",children:[ae.price,",00 €"]}),ae.originalPrice&&u.jsxs("span",{className:"text-[11px] text-stone-400 line-through ml-1.5",children:[ae.originalPrice,",00 €"]})]}):u.jsxs("span",{className:"font-bold text-botanical-950 text-sm",children:[ae.price,",00 €"]})}),u.jsx("td",{className:"py-3 px-4 text-center",children:u.jsx("button",{type:"button",onClick:()=>_(ae.id),className:`px-3 py-1 rounded-full font-bold text-[11px] transition-all active:scale-95 ${Je?"bg-rose-100 text-rose-800 border border-rose-300":"bg-emerald-100 text-emerald-900 border border-emerald-300"}`,children:Je?"Esaurito (0)":`Disponibile (${ae.stockQuantity})`})}),u.jsx("td",{className:"py-3 px-4 text-center",children:u.jsxs("button",{type:"button",onClick:()=>y(ae.id,!ae.isPromo),className:`px-3 py-1 rounded-full font-bold text-[11px] transition-all flex items-center justify-center gap-1 mx-auto ${ae.isPromo?"bg-amber-100 text-amber-900 border border-amber-300":"bg-stone-100 text-stone-600 hover:bg-stone-200"}`,children:[u.jsx(Zs,{className:"w-3.5 h-3.5 text-clay"}),u.jsx("span",{children:ae.isPromo?`Offerta (-${ae.promoDiscountPct||15}%)`:"No Sconto"})]})}),u.jsx("td",{className:"py-3 px-4 text-right",children:u.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[u.jsx("button",{onClick:()=>Ee(ae),className:"p-2 rounded-lg hover:bg-stone-100 text-stone-600 hover:text-botanical-950 transition-colors",title:"Modifica",children:u.jsx(rw,{className:"w-4 h-4"})}),u.jsx("button",{onClick:()=>Qe(ae.id),className:"p-2 rounded-lg hover:bg-rose-50 text-stone-400 hover:text-rose-600 transition-colors",title:"Elimina",children:u.jsx(Mf,{className:"w-4 h-4"})})]})})]},ae.id)})})]})}),u.jsx("div",{className:"lg:hidden divide-y divide-stone-100",children:Ue.map(ae=>{const Je=ae.stockQuantity===0;return u.jsxs("div",{className:"p-4 space-y-3",children:[u.jsxs("div",{className:"flex gap-3",children:[u.jsx("img",{src:ql(ae.imageUrl||ae.img,200),alt:ae.name,className:"w-20 h-20 rounded-xl object-cover shrink-0 border border-stone-200"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("span",{className:"text-[10px] uppercase font-bold text-clay",children:[ae.category," • ",ae.badge]}),u.jsx("h4",{className:"font-serif text-lg font-bold text-botanical-950 leading-tight",children:ae.name}),u.jsxs("div",{className:"flex items-baseline gap-2 mt-1",children:[u.jsxs("span",{className:"font-bold text-clay text-base",children:[ae.price,",00 €"]}),ae.originalPrice&&ae.originalPrice>ae.price&&u.jsxs("span",{className:"text-xs text-stone-400 line-through",children:[ae.originalPrice,",00 €"]})]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pt-2 border-t border-stone-100",children:[u.jsx("button",{type:"button",onClick:()=>_(ae.id),className:`px-3 py-1.5 rounded-lg text-xs font-bold ${Je?"bg-rose-100 text-rose-800":"bg-emerald-100 text-emerald-900"}`,children:Je?"Esaurito":`In Stock (${ae.stockQuantity})`}),u.jsxs("button",{type:"button",onClick:()=>y(ae.id,!ae.isPromo),className:`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${ae.isPromo?"bg-amber-100 text-amber-900 border border-amber-300":"bg-stone-100 text-stone-600"}`,children:[u.jsx(Zs,{className:"w-3.5 h-3.5 text-clay"}),u.jsx("span",{children:ae.isPromo?"Offerta Attiva":"Metti Offerta"})]}),u.jsx("button",{onClick:()=>Ee(ae),className:"px-3.5 py-1.5 rounded-lg bg-botanical-950 text-white text-xs font-bold ml-auto",children:"Modifica"})]})]},ae.id)})}),Ue.length===0&&u.jsx("div",{className:"text-center py-12 text-stone-400 text-xs",children:"Nessuna creazione corrisponde ai criteri di ricerca."})]})]}),U==="orders"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-serif text-2xl font-bold text-botanical-950",children:"Registro Ordini Ricevuti"}),u.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:"Ordini confermati dal carrello e sincronizzati con il database MongoDB."})]}),u.jsxs("button",{type:"button",onClick:x,className:"px-4 py-2 bg-stone-100 hover:bg-stone-200 rounded-xl text-xs font-bold text-botanical-950 flex items-center gap-1.5 self-start sm:self-auto",children:[u.jsx(Xl,{className:"w-3.5 h-3.5 text-clay"}),u.jsx("span",{children:"Aggiorna Elenco"})]})]}),S.length===0?u.jsxs("div",{className:"bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-400 space-y-2",children:[u.jsx(Hs,{className:"w-10 h-10 mx-auto text-stone-300"}),u.jsx("p",{className:"text-sm font-semibold",children:"Nessun ordine presente al momento."}),u.jsx("p",{className:"text-xs",children:"Quando un cliente conferma un ordine nel carrello, apparirà istantaneamente qui."})]}):u.jsx("div",{className:"space-y-4",children:S.map(ae=>u.jsxs("div",{className:"bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:"font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-botanical-950 text-petal",children:["#",ae.orderId]}),u.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${ae.status==="COMPLETED"?"bg-emerald-100 text-emerald-800":ae.status==="DELIVERING"?"bg-amber-100 text-amber-800":"bg-blue-100 text-blue-800"}`,children:ae.status})]}),u.jsxs("p",{className:"text-[11px] text-stone-400 mt-1 flex items-center gap-1",children:[u.jsx(Xa,{className:"w-3 h-3"}),u.jsx("span",{children:ae.createdAt?new Date(ae.createdAt).toLocaleString("it-IT"):"Recente"})]})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("span",{className:"text-xs text-stone-500",children:"Totale Ordine:"}),u.jsxs("p",{className:"font-serif text-xl font-bold text-clay leading-tight",children:[ae.total.toFixed(2)," €"]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-stone-50/70 p-4 rounded-xl border border-stone-200/80",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("p",{className:"font-bold text-botanical-950 flex items-center gap-1.5",children:[u.jsx(Nw,{className:"w-3.5 h-3.5 text-clay"}),u.jsxs("span",{children:["Cliente: ",ae.customer.fullName]})]}),u.jsxs("p",{className:"text-stone-600",children:["Telefono: ",u.jsx("strong",{children:ae.customer.phone})]}),u.jsxs("p",{className:"text-stone-600 flex items-start gap-1",children:[u.jsx(Qs,{className:"w-3.5 h-3.5 text-clay shrink-0 mt-0.5"}),u.jsx("span",{children:ae.customer.deliveryAddress})]})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("p",{className:"text-stone-600 flex items-center gap-1",children:[u.jsx(Xa,{className:"w-3.5 h-3.5 text-stone-400"}),u.jsxs("span",{children:["Data Consegna: ",u.jsx("strong",{children:ae.customer.deliveryDate})," (",ae.customer.timeSlot,")"]})]}),ae.greetingCardText&&ae.greetingCardText!=="Nessun bigliettino"&&u.jsxs("div",{className:"p-2 bg-white rounded-lg border border-stone-200 text-stone-700 italic",children:['💌 "',ae.greetingCardText,'"']})]})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsx("p",{className:"text-[11px] font-bold uppercase text-stone-500",children:"Articoli Ordinati:"}),u.jsx("div",{className:"space-y-1",children:ae.items.map((Je,q)=>u.jsxs("div",{className:"flex justify-between text-xs text-stone-700",children:[u.jsxs("span",{children:[Je.quantity,"x ",u.jsx("strong",{children:Je.name})]}),u.jsxs("span",{className:"font-bold text-stone-900",children:[(Je.price*Je.quantity).toFixed(2)," €"]})]},q))})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100",children:[u.jsxs("a",{href:`https://wa.me/${ae.customer.phone.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm",children:[u.jsx(Sf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Contatta su WhatsApp"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[u.jsx("span",{className:"text-stone-500 font-semibold",children:"Stato:"}),u.jsxs("select",{value:ae.status,onChange:Je=>I(ae.orderId,Je.target.value),className:"px-3 py-1.5 rounded-lg border border-stone-300 bg-white font-bold text-botanical-950 focus:outline-none",children:[u.jsx("option",{value:"CONFIRMED",children:"Confermato"}),u.jsx("option",{value:"DELIVERING",children:"In Consegna"}),u.jsx("option",{value:"COMPLETED",children:"Completato"}),u.jsx("option",{value:"CANCELLED",children:"Annullato"})]})]})]})]},ae.orderId))})]}),U==="logistics"&&u.jsxs("div",{className:"bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm max-w-3xl space-y-6",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-[0.25em] text-clay",children:"Logistica & Politiche Commerciali"}),u.jsx("h3",{className:"font-serif text-3xl font-bold text-botanical-950 mt-1",children:"Configurazione Tariffe di Consegna"}),u.jsx("p",{className:"text-xs text-stone-500 mt-1",children:"Configura se la consegna ha sempre un costo standard (non azzerabile oltre i 50 €) oppure se attivare la soglia di spedizione gratuita."})]}),Ye&&u.jsxs("div",{className:"p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2 animate-in fade-in",children:[u.jsx(Ga,{className:"w-4 h-4 text-emerald-600 shrink-0"}),u.jsx("span",{children:Ye})]}),u.jsxs("form",{onSubmit:nt,className:"space-y-6 text-xs",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700",children:"Costo Standard di Consegna a Domicilio (€) *"}),u.jsx("p",{className:"text-[11px] text-stone-500",children:"Importo applicato per le consegne a mano su Roma."}),u.jsxs("div",{className:"relative max-w-xs",children:[u.jsx("input",{type:"number",step:"0.5",min:"0",required:!0,value:P,onChange:ae=>W(parseFloat(ae.target.value)||0),className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-base font-bold text-botanical-950 focus:outline-none focus:ring-2 focus:ring-botanical-900"}),u.jsx("span",{className:"absolute right-4 top-3.5 text-stone-400 font-bold",children:"€"})]})]}),u.jsxs("div",{className:"p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"pr-4",children:[u.jsx("span",{className:"font-bold text-sm text-botanical-950 block",children:"Abilita Spedizione Gratuita oltre Soglia di Spesa"}),u.jsxs("p",{className:"text-[11px] text-stone-500 mt-0.5 leading-relaxed",children:["Se ",u.jsx("strong",{children:"disattivata"}),", il costo di consegna (",P.toFixed(2)," €) viene sempre applicato a tutti gli ordini a domicilio, anche superando 50 € (il ritiro in bottega resta sempre a 0 €)."]})]}),u.jsxs("label",{className:"relative inline-flex items-center cursor-pointer shrink-0",children:[u.jsx("input",{type:"checkbox",checked:fe,onChange:ae=>$(ae.target.checked),className:"sr-only peer"}),u.jsx("div",{className:"w-12 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-clay"})]})]}),fe&&u.jsxs("div",{className:"pt-3 border-t border-stone-200/80 space-y-2 animate-in fade-in",children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700",children:"Soglia Minima di Spesa per la Spedizione Gratuita (€)"}),u.jsxs("div",{className:"relative max-w-xs",children:[u.jsx("input",{type:"number",step:"1",min:"1",value:me,onChange:ae=>ye(parseFloat(ae.target.value)||0),className:"w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-bold text-botanical-950"}),u.jsx("span",{className:"absolute right-4 top-3 text-stone-400 font-bold",children:"€"})]})]})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700",children:"Area Geografica Coperta"}),u.jsx("input",{type:"text",value:_e,onChange:ae=>Ne(ae.target.value),placeholder:"Es. tutta Roma e provincia",className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-xs focus:outline-none focus:ring-1 focus:ring-botanical-900"})]}),u.jsx("button",{type:"submit",disabled:Rt,className:"px-7 py-3.5 bg-botanical-950 hover:bg-clay text-white rounded-xl font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-50",children:Rt?"Salvataggio...":"Salva Impostazioni Consegna"})]})]}),U==="announcement"&&u.jsx(Xw,{}),U==="security"&&u.jsxs("div",{className:"bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm max-w-2xl space-y-6",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] uppercase font-bold tracking-[0.25em] text-clay",children:"Sicurezza Bottega & Accesso"}),u.jsx("h3",{className:"font-serif text-3xl font-bold text-botanical-950 mt-1",children:"Modifica Credenziali Amministratore"}),u.jsx("p",{className:"text-xs text-stone-500 mt-1",children:"Aggiorna il nome utente o la password di accesso alla Dashboard. Le credenziali vengono verificate e salvate direttamente su MongoDB con cifratura sicura BCrypt."})]}),L&&u.jsxs("div",{className:"p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2 animate-in fade-in",children:[u.jsx(Ga,{className:"w-4 h-4 text-emerald-600 shrink-0"}),u.jsx("span",{children:L})]}),se&&u.jsxs("div",{className:"p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center gap-2 animate-in fade-in",children:[u.jsx(af,{className:"w-4 h-4 text-rose-600 shrink-0"}),u.jsx("span",{children:se})]}),u.jsxs("form",{onSubmit:ze,className:"space-y-4 text-xs",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Nuovo Username / Email"}),u.jsx("input",{type:"text",required:!0,value:ct,onChange:ae=>H(ae.target.value),placeholder:"Es. fiorista_peter",className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Password Attuale (per verifica sicurezza) *"}),u.jsx("input",{type:"password",required:!0,value:Kt,onChange:ae=>pt(ae.target.value),placeholder:"Inserisci la password attuale...",className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Nuova Password *"}),u.jsx("input",{type:"password",required:!0,value:lt,onChange:ae=>Ke(ae.target.value),placeholder:"Minimo 6 caratteri...",className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold uppercase tracking-wider text-stone-700 mb-1",children:"Conferma Nuova Password *"}),u.jsx("input",{type:"password",required:!0,value:Et,onChange:ae=>Ge(ae.target.value),placeholder:"Ripeti la nuova password...",className:"w-full px-4 py-3 rounded-xl border border-stone-300 bg-cream text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900 font-medium"})]})]}),u.jsxs("button",{type:"submit",disabled:Se,className:"px-7 py-3.5 bg-botanical-950 hover:bg-clay text-white rounded-xl font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center gap-2",children:[u.jsx(pw,{className:"w-4 h-4 text-petal"}),u.jsx("span",{children:Se?"Salvataggio su MongoDB...":"Aggiorna Credenziali su MongoDB"})]})]})]})]}),u.jsx(Ww,{isOpen:oe,productToEdit:le,onClose:()=>F(!1),onSave:Oe,onDelete:Qe})]})},$w=()=>{const[s,e]=pe.useState(()=>{const r=window.location.pathname.toLowerCase(),o=window.location.hash.toLowerCase();return r==="/admin"||r.startsWith("/admin/")||o==="#admin"?"admin":"home"});pe.useEffect(()=>{const r=()=>{const o=window.location.pathname.toLowerCase(),c=window.location.hash.toLowerCase();o==="/admin"||o.startsWith("/admin/")||c==="#admin"?e("admin"):e("home")};return window.addEventListener("popstate",r),window.addEventListener("hashchange",r),()=>{window.removeEventListener("popstate",r),window.removeEventListener("hashchange",r)}},[]);const n=r=>{e(r),r==="admin"?window.location.hash="admin":(window.location.hash="",window.history.pushState(null,"","/")),window.scrollTo({top:0,behavior:"smooth"})};return u.jsx(Jx,{children:u.jsx(Zx,{children:u.jsx(Qx,{children:s==="admin"?u.jsx(qw,{onBackToStore:()=>n("home")}):u.jsx(Hw,{onNavigateToAdmin:()=>n("admin")})})})})},a0=document.getElementById("root");if(!a0)throw new Error("Root element not found in DOM.");$x.createRoot(a0).render(u.jsx(ug.StrictMode,{children:u.jsx($w,{})}));
