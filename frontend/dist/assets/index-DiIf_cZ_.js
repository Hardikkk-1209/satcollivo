(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var zh={exports:{}},yl={};var Wv;function UE(){if(Wv)return yl;Wv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:f}}return yl.Fragment=e,yl.jsx=i,yl.jsxs=i,yl}var Yv;function LE(){return Yv||(Yv=1,zh.exports=UE()),zh.exports}var B=LE(),Bh={exports:{}},ue={};var Zv;function OE(){if(Zv)return ue;Zv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function I(F,tt,Y){this.props=F,this.context=tt,this.refs=S,this.updater=Y||C}I.prototype.isReactComponent={},I.prototype.setState=function(F,tt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,tt,"setState")},I.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function z(){}z.prototype=I.prototype;function w(F,tt,Y){this.props=F,this.context=tt,this.refs=S,this.updater=Y||C}var P=w.prototype=new z;P.constructor=w,y(P,I.prototype),P.isPureReactComponent=!0;var N=Array.isArray;function L(){}var T={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function W(F,tt,Y){var dt=Y.ref;return{$$typeof:o,type:F,key:tt,ref:dt!==void 0?dt:null,props:Y}}function H(F,tt){return W(F.type,tt,F.props)}function et(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function pt(F){var tt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Y){return tt[Y]})}var St=/\/+/g;function Q(F,tt){return typeof F=="object"&&F!==null&&F.key!=null?pt(""+F.key):tt.toString(36)}function k(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(L,L):(F.status="pending",F.then(function(tt){F.status==="pending"&&(F.status="fulfilled",F.value=tt)},function(tt){F.status==="pending"&&(F.status="rejected",F.reason=tt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function V(F,tt,Y,dt,mt){var Rt=typeof F;(Rt==="undefined"||Rt==="boolean")&&(F=null);var wt=!1;if(F===null)wt=!0;else switch(Rt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(F.$$typeof){case o:case e:wt=!0;break;case x:return wt=F._init,V(wt(F._payload),tt,Y,dt,mt)}}if(wt)return mt=mt(F),wt=dt===""?"."+Q(F,0):dt,N(mt)?(Y="",wt!=null&&(Y=wt.replace(St,"$&/")+"/"),V(mt,tt,Y,"",function(ne){return ne})):mt!=null&&(et(mt)&&(mt=H(mt,Y+(mt.key==null||F&&F.key===mt.key?"":(""+mt.key).replace(St,"$&/")+"/")+wt)),tt.push(mt)),1;wt=0;var Et=dt===""?".":dt+":";if(N(F))for(var Vt=0;Vt<F.length;Vt++)dt=F[Vt],Rt=Et+Q(dt,Vt),wt+=V(dt,tt,Y,Rt,mt);else if(Vt=b(F),typeof Vt=="function")for(F=Vt.call(F),Vt=0;!(dt=F.next()).done;)dt=dt.value,Rt=Et+Q(dt,Vt++),wt+=V(dt,tt,Y,Rt,mt);else if(Rt==="object"){if(typeof F.then=="function")return V(k(F),tt,Y,dt,mt);throw tt=String(F),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return wt}function rt(F,tt,Y){if(F==null)return F;var dt=[],mt=0;return V(F,dt,"","",function(Rt){return tt.call(Y,Rt,mt++)}),dt}function _t(F){if(F._status===-1){var tt=F._result,Y=tt();Y.then(function(dt){(F._status===0||F._status===-1)&&(F._status=1,F._result=dt,Y.status===void 0&&(Y.status="fulfilled",Y.value=dt))},function(dt){(F._status===0||F._status===-1)&&(F._status=2,F._result=dt,Y.status===void 0&&(Y.status="rejected",Y.reason=dt))}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var K=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Tt(F){var tt=T.T,Y={};Y.types=tt!==null?tt.types:null,T.T=Y;try{var dt=F(),mt=T.S;mt!==null&&mt(Y,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(L,K)}catch(Rt){K(Rt)}finally{tt!==null&&Y.types!==null&&(tt.types=Y.types),T.T=tt}}function Pt(F){var tt=T.T;if(tt!==null){var Y=tt.types;Y===null?tt.types=[F]:Y.indexOf(F)===-1&&Y.push(F)}else Tt(Pt.bind(null,F))}var de={map:rt,forEach:function(F,tt,Y){rt(F,function(){tt.apply(this,arguments)},Y)},count:function(F){var tt=0;return rt(F,function(){tt++}),tt},toArray:function(F){return rt(F,function(tt){return tt})||[]},only:function(F){if(!et(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ue.Activity=v,ue.Children=de,ue.Component=I,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=w,ue.StrictMode=r,ue.Suspense=p,ue.ViewTransition=_,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,ue.__COMPILER_RUNTIME={__proto__:null,c:function(F){return T.H.useMemoCache(F)}},ue.addTransitionType=Pt,ue.cache=function(F){return function(){return F.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(F,tt,Y){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var dt=y({},F.props),mt=F.key;if(tt!=null)for(Rt in tt.key!==void 0&&(mt=""+tt.key),tt)!U.call(tt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&tt.ref===void 0||(dt[Rt]=tt[Rt]);var Rt=arguments.length-2;if(Rt===1)dt.children=Y;else if(1<Rt){for(var wt=Array(Rt),Et=0;Et<Rt;Et++)wt[Et]=arguments[Et+2];dt.children=wt}return W(F.type,mt,dt)},ue.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},ue.createElement=function(F,tt,Y){var dt,mt={},Rt=null;if(tt!=null)for(dt in tt.key!==void 0&&(Rt=""+tt.key),tt)U.call(tt,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(mt[dt]=tt[dt]);var wt=arguments.length-2;if(wt===1)mt.children=Y;else if(1<wt){for(var Et=Array(wt),Vt=0;Vt<wt;Vt++)Et[Vt]=arguments[Vt+2];mt.children=Et}if(F&&F.defaultProps)for(dt in wt=F.defaultProps,wt)mt[dt]===void 0&&(mt[dt]=wt[dt]);return W(F,Rt,mt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(F){return{$$typeof:h,render:F}},ue.isValidElement=et,ue.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:_t}},ue.memo=function(F,tt){return{$$typeof:m,type:F,compare:tt===void 0?null:tt}},ue.startTransition=Tt,ue.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},ue.use=function(F){return T.H.use(F)},ue.useActionState=function(F,tt,Y){return T.H.useActionState(F,tt,Y)},ue.useCallback=function(F,tt){return T.H.useCallback(F,tt)},ue.useContext=function(F){return T.H.useContext(F)},ue.useDebugValue=function(){},ue.useDeferredValue=function(F,tt){return T.H.useDeferredValue(F,tt)},ue.useEffect=function(F,tt){return T.H.useEffect(F,tt)},ue.useEffectEvent=function(F){return T.H.useEffectEvent(F)},ue.useId=function(){return T.H.useId()},ue.useImperativeHandle=function(F,tt,Y){return T.H.useImperativeHandle(F,tt,Y)},ue.useInsertionEffect=function(F,tt){return T.H.useInsertionEffect(F,tt)},ue.useLayoutEffect=function(F,tt){return T.H.useLayoutEffect(F,tt)},ue.useMemo=function(F,tt){return T.H.useMemo(F,tt)},ue.useOptimistic=function(F,tt){return T.H.useOptimistic(F,tt)},ue.useReducer=function(F,tt,Y){return T.H.useReducer(F,tt,Y)},ue.useRef=function(F){return T.H.useRef(F)},ue.useState=function(F){return T.H.useState(F)},ue.useSyncExternalStore=function(F,tt,Y){return T.H.useSyncExternalStore(F,tt,Y)},ue.useTransition=function(){return T.H.useTransition()},ue.version="19.3.1",ue}var jv;function xm(){return jv||(jv=1,Bh.exports=OE()),Bh.exports}var Fe=xm(),Fh={exports:{}},Ml={},Hh={exports:{}},Gh={};var Kv;function PE(){return Kv||(Kv=1,(function(o){function e(k,V){var rt=k.length;k.push(V);t:for(;0<rt;){var _t=rt-1>>>1,K=k[_t];if(0<l(K,V))k[_t]=V,k[rt]=K,rt=_t;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var V=k[0],rt=k.pop();if(rt!==V){k[0]=rt;t:for(var _t=0,K=k.length,Tt=K>>>1;_t<Tt;){var Pt=2*(_t+1)-1,de=k[Pt],F=Pt+1,tt=k[F];if(0>l(de,rt))F<K&&0>l(tt,de)?(k[_t]=tt,k[F]=rt,_t=F):(k[_t]=de,k[Pt]=rt,_t=Pt);else if(F<K&&0>l(tt,rt))k[_t]=tt,k[F]=rt,_t=F;else break t}}return V}function l(k,V){var rt=k.sortIndex-V.sortIndex;return rt!==0?rt:k.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],x=1,v=null,_=3,M=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function w(k){for(var V=i(m);V!==null;){if(V.callback===null)r(m);else if(V.startTime<=k)r(m),V.sortIndex=V.expirationTime,e(p,V);else break;V=i(m)}}function P(k){if(C=!1,w(k),!b)if(i(p)!==null)b=!0,N||(N=!0,et());else{var V=i(m);V!==null&&Q(P,V.startTime-k)}}var N=!1,L=-1,T=5,U=-1;function W(){return y?!0:!(o.unstable_now()-U<T)}function H(){if(y=!1,N){var k=o.unstable_now();U=k;var V=!0;try{t:{b=!1,C&&(C=!1,I(L),L=-1),M=!0;var rt=_;try{e:{for(w(k),v=i(p);v!==null&&!(v.expirationTime>k&&W());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,_=v.priorityLevel;var K=_t(v.expirationTime<=k);if(k=o.unstable_now(),typeof K=="function"){v.callback=K,w(k),V=!0;break e}v===i(p)&&r(p),w(k)}else r(p);v=i(p)}if(v!==null)V=!0;else{var Tt=i(m);Tt!==null&&Q(P,Tt.startTime-k),V=!1}}break t}finally{v=null,_=rt,M=!1}V=void 0}}finally{V?et():N=!1}}}var et;if(typeof z=="function")et=function(){z(H)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,St=pt.port2;pt.port1.onmessage=H,et=function(){St.postMessage(null)}}else et=function(){S(H,0)};function Q(k,V){L=S(function(){k(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var rt=_;_=V;try{return k()}finally{_=rt}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(k,V){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var rt=_;_=k;try{return V()}finally{_=rt}},o.unstable_scheduleCallback=function(k,V,rt){var _t=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?_t+rt:_t):rt=_t,k){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=rt+K,k={id:x++,callback:V,priorityLevel:k,startTime:rt,expirationTime:K,sortIndex:-1},rt>_t?(k.sortIndex=rt,e(m,k),i(p)===null&&k===i(m)&&(C?(I(L),L=-1):C=!0,Q(P,rt-_t))):(k.sortIndex=K,e(p,k),b||M||(b=!0,N||(N=!0,et()))),k},o.unstable_shouldYield=W,o.unstable_wrapCallback=function(k){var V=_;return function(){var rt=_;_=V;try{return k.apply(this,arguments)}finally{_=rt}}}})(Gh)),Gh}var Qv;function IE(){return Qv||(Qv=1,Hh.exports=PE()),Hh.exports}var Vh={exports:{}},Ln={};var Jv;function zE(){if(Jv)return Ln;Jv=1;var o=xm();function e(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,v,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===d?d:""+M,children:x,containerInfo:v,implementation:_}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(x){return{$$typeof:f,_reason:x}},Ln.createPortal=function(x,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(x,v,null,_)},Ln.flushSync=function(x){var v=p.T,_=r.p;try{if(p.T=null,r.p=2,x)return x()}finally{p.T=v,r.p=_,r.d.f()}},Ln.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(x,v))},Ln.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},Ln.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var _=v.as,M=m(_,v.crossOrigin),b=typeof v.integrity=="string"?v.integrity:void 0,C=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?r.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:C}):_==="script"&&r.d.X(x,{crossOrigin:M,integrity:b,fetchPriority:C,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ln.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=m(v.as,v.crossOrigin);r.d.M(x,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&r.d.M(x)},Ln.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,M=m(_,v.crossOrigin);r.d.L(x,_,{crossOrigin:M,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ln.preloadModule=function(x,v){if(typeof x=="string")if(v){var _=m(v.as,v.crossOrigin);r.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else r.d.m(x)},Ln.requestFormReset=function(x){r.d.r(x)},Ln.unstable_batchedUpdates=function(x,v){return x(v)},Ln.useFormState=function(x,v,_){return p.H.useFormState(x,v,_)},Ln.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var $v;function BE(){if($v)return Vh.exports;$v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vh.exports=zE(),Vh.exports}var tx;function FE(){if(tx)return Ml;tx=1;var o=IE(),e=xm(),i=BE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===s)return p(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var g=!1,A=u.child;A;){if(A===a){g=!0,a=u,s=c;break}if(A===s){g=!0,s=u,a=c;break}A=A.sibling}if(!g){for(A=c.child;A;){if(A===a){g=!0,a=c,s=u;break}if(A===s){g=!0,s=c,a=u;break}A=A.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function v(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=_(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,I=null;function z(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function w(t,n,a){return t===a?(I=t,!1):t===n?(I!==null&&(S=t),!0):!1}function P(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function N(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,T=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),pt=Symbol.for("react.profiler"),St=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Pt=Symbol.for("react.legacy_hidden"),de=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),tt=Symbol.for("react.recoverable"),Y=Symbol.iterator;function dt(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Symbol.for("react.client.reference");function Rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case pt:return"Profiler";case et:return"StrictMode";case V:return"Suspense";case rt:return"SuspenseList";case Tt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case Q:return t.displayName||"Context";case St:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return n=t.displayName||null,n!==null?n:Rt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return Rt(t(n))}catch{}}return null}var wt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},he=[],ve=-1;function oe(t){return{current:t}}function Te(t){0>ve||(t.current=he[ve],he[ve]=null,ve--)}function le(t,n){ve++,he[ve]=t.current,t.current=n}var Ve=oe(null),an=oe(null),Pe=oe(null),$e=oe(null);function Z(t,n){switch(le(Pe,n),le(an,t),le(Ve,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ev(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ev(n),t=nv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Te(Ve),le(Ve,t)}function un(){Te(Ve),Te(an),Te(Pe)}function Oe(t){var n=t.memoizedState;n!==null&&(ks._currentValue=n.memoizedState,le($e,t)),n=Ve.current;var a=nv(n,t.type);n!==a&&(le(an,t),le(Ve,a))}function D(t){an.current===t&&(Te(Ve),Te(an)),$e.current===t&&(Te($e),ks._currentValue=ne)}var E,nt;function ut(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+t+nt}var ht=!1;function At(t,n){if(!t||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(Lt){var j=Lt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(Lt){j=Lt}xt=!1;try{var ot=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(ot!==void 0?Object.defineProperty(t.prototype,"props",ot):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){j=Lt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(Lt){if(Lt&&j&&typeof Lt.stack=="string")return[Lt.stack,j.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),g=c[0],A=c[1];if(g&&A){var O=g.split(`
`),$=A.split(`
`);for(u=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===O.length||u===$.length)for(s=O.length-1,u=$.length-1;1<=s&&0<=u&&O[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(O[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||O[s]!==$[u]){var ft=`
`+O[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ut(a):""}function Nt(t,n){switch(t.tag){case 26:case 27:case 5:return ut(t.type);case 16:return ut("Lazy");case 13:return t.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return ut("Activity");case 30:return ut("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Nt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var yt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,Jt=o.unstable_cancelCallback,It=o.unstable_shouldYield,Ot=o.unstable_requestPaint,kt=o.unstable_now,ee=o.unstable_getCurrentPriorityLevel,ce=o.unstable_ImmediatePriority,q=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Gt=o.log,bt=o.unstable_setDisableYieldValue,Zt=null,Bt=null;function Ie(t){if(typeof Gt=="function"&&bt(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Zt,t)}catch{}}var xe=Math.clz32?Math.clz32:df,_i=Math.log,vi=Math.LN2;function df(t){return t>>>=0,t===0?32:31-(_i(t)/vi|0)|0}var ss=256,Tr=262144,Ba=4194304;function da(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function br(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~c,s!==0?u=da(s):(g&=A,g!==0?u=da(g):a||(a=A&~t,a!==0&&(u=da(a))))):(A=s&~c,A!==0?u=da(A):g!==0?u=da(g):a||(a=s&~t,a!==0&&(u=da(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Fa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-xe(a),u=1<<s;n|=t[s],a&=~u}return n}function Ao(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var t=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),t}function os(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Wi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yl(t,n,a,s,u,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,O=t.expirationTimes,$=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-xe(a),xt=1<<ft;A[ft]=0,O[ft]=-1;var j=$[ft];if(j!==null)for($[ft]=null,ft=0;ft<j.length;ft++){var ot=j[ft];ot!==null&&(ot.lane&=-536870913)}a&=~xt}s!==0&&Ar(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function Ar(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-xe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Co(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-xe(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function wo(t,n){var a=n&-n;return a=(a&42)!==0?1:Do(a),(a&(t.suspendedLanes|n))!==0?0:a}function Do(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function No(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zl(){var t=Vt.p;return t!==0?t:(t=window.event,t===void 0?32:Fv(t.type))}function jl(t,n){var a=Vt.p;try{return Vt.p=t,n()}finally{Vt.p=a}}var R=Math.random().toString(36).slice(2),X="__reactFiber$"+R,lt="__reactProps$"+R,st="__reactContainer$"+R,ct="__reactEvents$"+R,Ft="__reactListeners$"+R,qt="__reactHandles$"+R,zt="__reactResources$"+R,Yt="__reactMarker$"+R,Qt="__reactLoad$"+R;function re(t){delete t[X],delete t[lt],delete t[Ft],delete t[qt]}function se(t){var n;if(n=t[X])return n;for(var a=t.parentNode;a;){if(n=a[st]||a[X]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xv(t);t!==null;){if(a=t[X])return a;t=xv(t)}return n}t=a,a=t.parentNode}return null}function Kt(t){if(t=t[X]||t[st]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ne(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ze(t){var n=t[zt];return n||(n=t[zt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ge(t){t[Yt]=!0}function He(t){t[Qt]=void 0}var vn=new Set,Xt={};function cn(t,n){Se(t,n),Se(t+"Capture",n)}function Se(t,n){for(Xt[t]=n,t=0;t<n.length;t++)vn.add(n[t])}var jn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ni={},Li={};function Ha(t){return yt.call(Li,t)?!0:yt.call(ni,t)?!1:jn.test(t)?Li[t]=!0:(ni[t]=!0,!1)}var $t=!1;function en(){var t=$t;return $t=!1,t}function ii(t,n,a){if(Ha(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function En(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function dn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uo(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function JS(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function hf(t){if(!t._valueTracker){var n=Uo(t)?"checked":"value";t._valueTracker=JS(t,n,""+t[n])}}function Xm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Uo(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var $S=/[\n"\\]/g;function xi(t){return t.replace($S,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function pf(t,n,a,s,u,c,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+dn(n)):t.value!==""+dn(n)&&(t.value=""+dn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?mf(t,dn(t.value)):mf(t,dn(n)):a!=null?mf(t,dn(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+dn(A):t.removeAttribute("name")}function km(t,n,a,s,u,c,g,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){hf(t);return}a=a!=null?""+dn(a):"",n=n!=null?""+dn(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),hf(t)}function mf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ls(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+dn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function qm(t,n,a){if(n!=null&&(n=""+dn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+dn(a):""}function Wm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(wt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=dn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),hf(t)}function us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ym(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||ty.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Zm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",$t=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(Ym(t,u,s),$t=!0)}else for(var c in n)n.hasOwnProperty(c)&&Ym(t,c,n[c])}function gf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ny=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(t){return ny.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var _f=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cs=null,fs=null;function jm(t){var n=Kt(t);if(n&&(t=n.stateNode)){var a=t[lt]||null;t:switch(t=n.stateNode,n.type){case"input":if(pf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[lt]||null;if(!u)throw Error(r(90));pf(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Xm(s)}break t;case"textarea":qm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ls(t,!!a.multiple,n,!1)}}}var xf=!1;function Km(t,n,a){if(xf)return t(n,a);xf=!0;try{var s=t(n);return s}finally{if(xf=!1,(cs!==null||fs!==null)&&(Ku(),cs&&(n=cs,t=fs,fs=cs=null,jm(n),t)))for(n=0;n<t.length;n++)jm(t[n])}}function Lo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[lt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(ha)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Sf=!1}var Ga=null,yf=null,Ql=null;function Qm(){if(Ql)return Ql;var t,n=yf,a=n.length,s,u="value"in Ga?Ga.value:Ga.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[c-s];s++);return Ql=u.slice(t,1<s?1-s:void 0)}function Jl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Jm(){return!1}function Gn(t){function n(a,s,u,c,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?$l:Jm,this.isPropagationStopped=Jm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=Gn(Va),Po=L({},Va,{view:0,detail:0}),iy=Gn(Po),Mf,Ef,Io,eu=L({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(Mf=t.screenX-Io.screenX,Ef=t.screenY-Io.screenY):Ef=Mf=0,Io=t),Mf)},movementY:function(t){return"movementY"in t?t.movementY:Ef}}),$m=Gn(eu),ay=L({},eu,{dataTransfer:0}),ry=Gn(ay),sy=L({},Po,{relatedTarget:0}),Tf=Gn(sy),oy=L({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=Gn(oy),uy=L({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=Gn(uy),fy=L({},Va,{data:0}),tg=Gn(fy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=py[t])?!!n[t]:!1}function bf(){return my}var gy=L({},Po,{key:function(t){if(t.key){var n=dy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_y=Gn(gy),vy=L({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Gn(vy),xy=L({},Va,{submitter:0}),Sy=Gn(xy),yy=L({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),My=Gn(yy),Ey=L({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Gn(Ey),by=L({},eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=Gn(by),Ry=L({},Va,{newState:0,oldState:0,source:0}),Cy=Gn(Ry),wy=[9,13,27,32],Af=ha&&"CompositionEvent"in window,zo=null;ha&&"documentMode"in document&&(zo=document.documentMode);var Dy=ha&&"TextEvent"in window&&!zo,ng=ha&&(!Af||zo&&8<zo&&11>=zo),ig=" ",ag=!1;function rg(t,n){switch(t){case"keyup":return wy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Ny(t,n){switch(t){case"compositionend":return sg(n);case"keypress":return n.which!==32?null:(ag=!0,ig);case"textInput":return t=n.data,t===ig&&ag?null:t;default:return null}}function Uy(t,n){if(ds)return t==="compositionend"||!Af&&rg(t,n)?(t=Qm(),Ql=yf=Ga=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ng&&n.locale!=="ko"?null:n.data;default:return null}}var Ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ly[t.type]:n==="textarea"}function lg(t,n,a,s){cs?fs?fs.push(s):fs=[s]:cs=s,n=nc(n,"onChange"),0<n.length&&(a=new tu("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bo=null,Fo=null;function Oy(t){j_(t,0)}function nu(t){var n=Ne(t);if(Xm(n))return t}function ug(t,n){if(t==="change")return n}var cg=!1;if(ha){var Rf;if(ha){var Cf="oninput"in document;if(!Cf){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),Cf=typeof fg.oninput=="function"}Rf=Cf}else Rf=!1;cg=Rf&&(!document.documentMode||9<document.documentMode)}function dg(){Bo&&(Bo.detachEvent("onpropertychange",hg),Fo=Bo=null)}function hg(t){if(t.propertyName==="value"&&nu(Fo)){var n=[];lg(n,Fo,t,vf(t)),Km(Oy,n)}}function Py(t,n,a){t==="focusin"?(dg(),Bo=n,Fo=a,Bo.attachEvent("onpropertychange",hg)):t==="focusout"&&dg()}function Iy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Fo)}function zy(t,n){if(t==="click")return nu(n)}function By(t,n){if(t==="input"||t==="change")return nu(n)}function Fy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:Fy;function Ho(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!yt.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function wf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mg(t,n){var a=pg(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pg(a)}}function gg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?gg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _g(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=wf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=wf(t.document)}return n}function Df(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Hy=ha&&"documentMode"in document&&11>=document.documentMode,hs=null,Nf=null,Go=null,Uf=!1;function vg(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uf||hs==null||hs!==wf(s)||(s=hs,"selectionStart"in s&&Df(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Go&&Ho(Go,s)||(Go=s,s=nc(Nf,"onSelect"),0<s.length&&(n=new tu("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=hs)))}function Rr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ps={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},Lf={},xg={};ha&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Cr(t){if(Lf[t])return Lf[t];if(!ps[t])return t;var n=ps[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in xg)return Lf[t]=n[a];return t}var Sg=Cr("animationend"),yg=Cr("animationiteration"),Mg=Cr("animationstart"),Gy=Cr("transitionrun"),Vy=Cr("transitionstart"),Xy=Cr("transitioncancel"),Eg=Cr("transitionend"),Tg=new Map,Of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Of.push("scrollEnd");function Oi(t,n){Tg.set(t,n),cn(n,[t])}var ky=0;function pa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Bi.identifierPrefix;var a=ky++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function bg(t){if(t==null||typeof t=="string")return t;var n=null,a=Os;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ma(t,n){return t=bg(t),n=bg(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var iu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],ms=0,Pf=0;function au(){for(var t=ms,n=Pf=ms=0;n<t;){var a=Si[n];Si[n++]=null;var s=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var c=Si[n];if(Si[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}c!==0&&Ag(a,u,c)}}function ru(t,n,a,s){Si[ms++]=t,Si[ms++]=n,Si[ms++]=a,Si[ms++]=s,Pf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function If(t,n,a,s){return ru(t,n,a,s),su(t)}function wr(t,n){return ru(t,null,null,n),su(t)}function Ag(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-xe(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function su(t){if(50<ul)throw ul=0,ju=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gs={};function qy(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,s){return new qy(t,n,a,s)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Rg(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ou(t,n,a,s,u,c){var g=0;if(s=t,typeof s=="function")zf(s)&&(g=1);else if(typeof s=="string")g=xE(t,a,Ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Tt:return t=Kn(31,a,n,u),t.elementType=Tt,t.lanes=c,t;case H:return Dr(a.children,u,c,n);case et:g=8,u|=24;break;case pt:return t=Kn(12,a,n,u|2),t.elementType=pt,t.lanes=c,t;case V:return t=Kn(13,a,n,u),t.elementType=V,t.lanes=c,t;case rt:return t=Kn(19,a,n,u),t.elementType=rt,t.lanes=c,t;case Pt:case F:return t=u|32,t=Kn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Q:g=10;break t;case St:g=9;break t;case k:g=11;break t;case _t:g=14;break t;case K:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Kn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function Dr(t,n,a,s){return t=Kn(7,t,s,n),t.lanes=a,t}function Bf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Cg(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Ff(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wg=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=wg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},wg.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var _s=[],vs=0,lu=null,Vo=0,Mi=[],Ei=0,Xa=null,Zi=1,ji="";function _a(t,n){_s[vs++]=Vo,_s[vs++]=lu,lu=t,Vo=n}function Dg(t,n,a){Mi[Ei++]=Zi,Mi[Ei++]=ji,Mi[Ei++]=Xa,Xa=t;var s=Zi;t=ji;var u=32-xe(s)-1;s&=~(1<<u),a+=1;var c=32-xe(n)+u;if(30<c){var g=u-u%5;c=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Zi=1<<32-xe(n)+u|a<<u|s,ji=c+t}else Zi=1<<c|a<<u|s,ji=t}function uu(t){t.return!==null&&(_a(t,1),Dg(t,1,0))}function Hf(t){for(;t===lu;)lu=_s[--vs],_s[vs]=null,Vo=_s[--vs],_s[vs]=null;for(;t===Xa;)Xa=Mi[--Ei],Mi[Ei]=null,ji=Mi[--Ei],Mi[Ei]=null,Zi=Mi[--Ei],Mi[Ei]=null}function Ng(t,n){Mi[Ei++]=Zi,Mi[Ei++]=ji,Mi[Ei++]=Xa,Zi=n.id,ji=n.overflow,Xa=t}var Tn=null,Qe=null,Me=!1,ka=null,Ti=!1,Gf=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(yi(n,t)),Gf}function Ug(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[X]=t,n[lt]=s,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<fl.length;a++)Ae(fl[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),km(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Wm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||$_(n.textContent,a)?(s.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),s.onScroll!=null&&Ae("scroll",n),s.onScrollEnd!=null&&Ae("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||qa(t,!0)}function cu(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Tn=Tn.return}}function xs(t){if(t!==Tn)return!1;if(!Me)return cu(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_h(t.type,t.memoizedProps)),a=!a),a&&Qe&&qa(t),cu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=vv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=vv(t)}else n===27?(n=Qe,or(t.type)?(t=Ah,Ah=null,Qe=t):Qe=n):Qe=Tn?Ai(t.stateNode.nextSibling):null;return!0}function Nr(){Qe=Tn=null,Me=!1}function Vf(){var t=ka;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),ka=null),t}function Xo(t){ka===null?ka=[t]:ka.push(t)}var Xf=oe(null),Ur=null,va=null;function Wa(t,n,a){le(Xf,n._currentValue),n._currentValue=a}function xa(t){t._currentValue=Xf.current,Te(Xf)}function fu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function kf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var g=u.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=u;for(var O=0;O<n.length;O++)if(A.context===n[O]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),fu(c.return,a,t),s||(g=null);break t}c=A.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),fu(g,a,t),g=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,g=u.alternate,g!==null&&(g.lanes|=a),fu(u.return,a,t),g=u.child,g=g!==null?g.sibling:null):g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Lr(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var A=u.type;ai(u.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(u===$e.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ks):t=[ks])}u=u.return}return t!==null&&kf(n,t,a,s),n.flags|=262144,t!==null}function du(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Or(t){Ur=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Lg(Ur,t)}function hu(t,n){return Ur===null&&Or(t),Lg(t,n)}function Lg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(t===null)throw Error(r(308));va=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else va=va.next=n;return a}var Wy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Yy=o.unstable_scheduleCallback,Zy=o.unstable_NormalPriority,hn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new Wy,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&Yy(Zy,function(){t.controller.abort()})}function Og(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var qo=null;function jy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Wo=null,Wf=0,Pr=0,Ss=null;function Ky(t,n){if(Wo===null){var a=Wo=[];Wf=0,Pr=lh(),Ss={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Wf++,n.then(Pg,Pg),n}function Pg(){if(--Wf===0&&(qo=null,Wo!==null)){Ss!==null&&(Ss.status="fulfilled");var t=Wo;Wo=null,Pr=0,Ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Qy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Ig=Et.S;Et.S=function(t,n){if(C_=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ky(t,n),qo!==null)for(var a=Bs;a!==null;)Og(a,qo),a=a.next;if(a=t.types,a!==null){for(var s=Bs;s!==null;)Og(s,a),s=s.next;if(Pr!==0){s=qo,s===null&&(s=qo=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}Ig!==null&&Ig(t,n)};var Ir=oe(null);function Yf(){var t=Ir.current;return t!==null?t:Ke.pooledCache}function pu(t,n){n===null?le(Ir,Ir.current):le(Ir,n.pool)}function zg(){var t=Yf();return t===null?null:{parent:hn._currentValue,pool:t}}var ys=Error(r(460)),Zf=Error(r(474)),mu=Error(r(542)),gu={then:function(){}};function Bg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gg(t),t}throw Br=n,ys}}function zr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Br=a,ys):a}}var Br=null;function Hg(){if(Br===null)throw Error(r(459));var t=Br;return Br=null,t}function Gg(t){if(t===ys||t===mu)throw Error(r(483))}var Ms=null,Yo=0;function _u(t){var n=Yo;return Yo+=1,Ms===null&&(Ms=[]),Fg(Ms,t,n)}function Ya(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vu(t,n){throw n.$$typeof===T?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Vg(t){function n(J,G){if(t){var at=J.deletions;at===null?(J.deletions=[G],J.flags|=16):at.push(G)}}function a(J,G){if(!t)return null;for(;G!==null;)n(J,G),G=G.sibling;return null}function s(J){for(var G=new Map;J!==null;)J.key===null?G.set(J.index,J):G.set(J.key,J),J=J.sibling;return G}function u(J,G){return J=ga(J,G),J.index=0,J.sibling=null,J}function c(J,G,at){return J.index=at,t?(at=J.alternate,at!==null?(at=at.index,at<G?(J.flags|=2,G):at):(J.flags|=134217730,G)):(J.flags|=1048576,G)}function g(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function A(J,G,at,vt){return G===null||G.tag!==6?(G=Bf(at,J.mode,vt),G.return=J,G):(G=u(G,at),G.return=J,G)}function O(J,G,at,vt){var Wt=at.type;return Wt===H?(J=ft(J,G,at.props.children,vt,at.key),Ya(J,at),J):G!==null&&(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===K&&zr(Wt)===G.type)?(G=u(G,at.props),Ya(G,at),G.return=J,G):(G=ou(at.type,at.key,at.props,null,J.mode,vt),Ya(G,at),G.return=J,G)}function $(J,G,at,vt){return G===null||G.tag!==4||G.stateNode.containerInfo!==at.containerInfo||G.stateNode.implementation!==at.implementation?(G=Ff(at,J.mode,vt),G.return=J,G):(G=u(G,at.children||[]),G.return=J,G)}function ft(J,G,at,vt,Wt){return G===null||G.tag!==7?(G=Dr(at,J.mode,vt,Wt),G.return=J,G):(G=u(G,at),G.return=J,G)}function xt(J,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Bf(""+G,J.mode,at),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return at=ou(G.type,G.key,G.props,null,J.mode,at),Ya(at,G),at.return=J,at;case W:return G=Ff(G,J.mode,at),G.return=J,G;case K:return G=zr(G),xt(J,G,at)}if(wt(G)||dt(G))return G=Dr(G,J.mode,at,null),G.return=J,G;if(typeof G.then=="function")return xt(J,_u(G),at);if(G.$$typeof===Q)return xt(J,hu(J,G),at);vu(J,G)}return null}function j(J,G,at,vt){var Wt=G!==null?G.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Wt!==null?null:A(J,G,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case U:return at.key===Wt?O(J,G,at,vt):null;case W:return at.key===Wt?$(J,G,at,vt):null;case K:return at=zr(at),j(J,G,at,vt)}if(wt(at)||dt(at))return Wt!==null?null:ft(J,G,at,vt,null);if(typeof at.then=="function")return j(J,G,_u(at),vt);if(at.$$typeof===Q)return j(J,G,hu(J,at),vt);vu(J,at)}return null}function ot(J,G,at,vt,Wt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(at)||null,A(G,J,""+vt,Wt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case U:return J=J.get(vt.key===null?at:vt.key)||null,O(G,J,vt,Wt);case W:return J=J.get(vt.key===null?at:vt.key)||null,$(G,J,vt,Wt);case K:return vt=zr(vt),ot(J,G,at,vt,Wt)}if(wt(vt)||dt(vt))return J=J.get(at)||null,ft(G,J,vt,Wt,null);if(typeof vt.then=="function")return ot(J,G,at,_u(vt),Wt);if(vt.$$typeof===Q)return ot(J,G,at,hu(G,vt),Wt);vu(G,vt)}return null}function Lt(J,G,at,vt){for(var Wt=null,Ce=null,te=G,ie=G=0,gn=null;te!==null&&ie<at.length;ie++){te.index>ie?(gn=te,te=null):gn=te.sibling;var Ue=j(J,te,at[ie],vt);if(Ue===null){te===null&&(te=gn);break}t&&te&&Ue.alternate===null&&n(J,te),G=c(Ue,G,ie),Ce===null?Wt=Ue:Ce.sibling=Ue,Ce=Ue,te=gn}if(ie===at.length)return a(J,te),Me&&_a(J,ie),Wt;if(te===null){for(;ie<at.length;ie++)te=xt(J,at[ie],vt),te!==null&&(G=c(te,G,ie),Ce===null?Wt=te:Ce.sibling=te,Ce=te);return Me&&_a(J,ie),Wt}for(te=s(te);ie<at.length;ie++)gn=ot(te,J,ie,at[ie],vt),gn!==null&&(t&&(Ue=gn.alternate,Ue!==null&&te.delete(Ue.key===null?ie:Ue.key)),G=c(gn,G,ie),Ce===null?Wt=gn:Ce.sibling=gn,Ce=gn);return t&&te.forEach(function(dr){return n(J,dr)}),Me&&_a(J,ie),Wt}function jt(J,G,at,vt){if(at==null)throw Error(r(151));for(var Wt=null,Ce=null,te=G,ie=G=0,gn=null,Ue=at.next();te!==null&&!Ue.done;ie++,Ue=at.next()){te.index>ie?(gn=te,te=null):gn=te.sibling;var dr=j(J,te,Ue.value,vt);if(dr===null){te===null&&(te=gn);break}t&&te&&dr.alternate===null&&n(J,te),G=c(dr,G,ie),Ce===null?Wt=dr:Ce.sibling=dr,Ce=dr,te=gn}if(Ue.done)return a(J,te),Me&&_a(J,ie),Wt;if(te===null){for(;!Ue.done;ie++,Ue=at.next())Ue=xt(J,Ue.value,vt),Ue!==null&&(G=c(Ue,G,ie),Ce===null?Wt=Ue:Ce.sibling=Ue,Ce=Ue);return Me&&_a(J,ie),Wt}for(te=s(te);!Ue.done;ie++,Ue=at.next())Ue=ot(te,J,ie,Ue.value,vt),Ue!==null&&(t&&(gn=Ue.alternate,gn!==null&&te.delete(gn.key===null?ie:gn.key)),G=c(Ue,G,ie),Ce===null?Wt=Ue:Ce.sibling=Ue,Ce=Ue);return t&&te.forEach(function(NE){return n(J,NE)}),Me&&_a(J,ie),Wt}function me(J,G,at,vt){if(typeof at=="object"&&at!==null&&at.type===H&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case U:t:{for(var Wt=at.key;G!==null;){if(G.key===Wt){if(Wt=at.type,Wt===H){if(G.tag===7){a(J,G.sibling),vt=u(G,at.props.children),Ya(vt,at),vt.return=J,J=vt;break t}}else if(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===K&&zr(Wt)===G.type){a(J,G.sibling),vt=u(G,at.props),Ya(vt,at),vt.return=J,J=vt;break t}a(J,G);break}else n(J,G);G=G.sibling}at.type===H?(vt=Dr(at.props.children,J.mode,vt,at.key),Ya(vt,at),vt.return=J,J=vt):(vt=ou(at.type,at.key,at.props,null,J.mode,vt),Ya(vt,at),vt.return=J,J=vt)}return g(J);case W:t:{for(Wt=at.key;G!==null;){if(G.key===Wt)if(G.tag===4&&G.stateNode.containerInfo===at.containerInfo&&G.stateNode.implementation===at.implementation){a(J,G.sibling),vt=u(G,at.children||[]),vt.return=J,J=vt;break t}else{a(J,G);break}else n(J,G);G=G.sibling}vt=Ff(at,J.mode,vt),vt.return=J,J=vt}return g(J);case K:return at=zr(at),me(J,G,at,vt)}if(wt(at))return Lt(J,G,at,vt);if(dt(at)){if(Wt=dt(at),typeof Wt!="function")throw Error(r(150));return at=Wt.call(at),jt(J,G,at,vt)}if(typeof at.then=="function")return me(J,G,_u(at),vt);if(at.$$typeof===Q)return me(J,G,hu(J,at),vt);vu(J,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,G!==null&&G.tag===6?(a(J,G.sibling),vt=u(G,at),vt.return=J,J=vt):(a(J,G),vt=Bf(at,J.mode,vt),vt.return=J,J=vt),g(J)):a(J,G)}return function(J,G,at,vt){try{Yo=0;var Wt=me(J,G,at,vt);return Ms=null,Wt}catch(te){if(te===ys||te===mu)throw te;var Ce=Kn(29,te,null,J.mode);return Ce.lanes=vt,Ce.return=J,Ce}}}var Fr=Vg(!0),Xg=Vg(!1),Za=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Be&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=su(t),Ag(t,null,a),n}return ru(t,s,n,a),su(t)}function Zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Co(t,a)}}function Qf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Jf=!1;function jo(){if(Jf){var t=Ss;if(t!==null)throw t}}function Ko(t,n,a,s){Jf=!1;var u=t.updateQueue;Za=!1;var c=u.firstBaseUpdate,g=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var O=A,$=O.next;O.next=null,g===null?c=$:g.next=$,g=O;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=$:A.next=$,ft.lastBaseUpdate=O))}if(c!==null){var xt=u.baseState;g=0,ft=$=O=null,A=c;do{var j=A.lane&-536870913,ot=j!==A.lane;if(ot?(Re&j)===j:(s&j)===j){j!==0&&j===Pr&&(Jf=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Lt=t,jt=A;j=n;var me=a;switch(jt.tag){case 1:if(Lt=jt.payload,typeof Lt=="function"){xt=Lt.call(me,xt,j);break t}xt=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=jt.payload,j=typeof Lt=="function"?Lt.call(me,xt,j):Lt,j==null)break t;xt=L({},xt,j);break t;case 2:Za=!0}}j=A.callback,j!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[j]:ot.push(j))}else ot={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?($=ft=ot,O=xt):ft=ft.next=ot,g|=j;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(O=xt),u.baseState=O,u.firstBaseUpdate=$,u.lastBaseUpdate=ft,c===null&&(u.shared.lanes=0),ir|=g,t.lanes=g,t.memoizedState=xt}}function kg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function qg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)kg(a[t],n)}var Qa=oe(null),xu=oe(0);function Wg(t,n){t=Ta,le(xu,t),le(Qa,n),Ta=t|n.baseLanes}function $f(){le(xu,Ta),le(Qa,Qa.current)}function td(){Ta=xu.current,Te(Qa),Te(xu)}var wn=oe(null),In=null;function Ja(t){var n=t.alternate;le(Dn,Dn.current&1),le(wn,t),In===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(In=t)}function ed(t){le(Dn,Dn.current),le(wn,t),In===null&&(In=t)}function Yg(t){t.tag===22?(le(Dn,Dn.current),le(wn,t),In===null&&(In=t)):$a()}function $a(){le(Dn,Dn.current),le(wn,wn.current)}function ri(t){Te(wn),In===t&&(In=null),Te(Dn)}var Dn=oe(0);function Qo(t,n){le(wn,wn.current),le(Dn,n)}function nd(t){Te(Dn),Te(wn),In===t&&(In=null)}function Su(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Th(a)||bh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,pe=null,je=null,pn=null,yu=!1,Es=!1,Hr=!1,Mu=0,Jo=0,Ts=null,Jy=0;function on(){throw Error(r(321))}function id(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function ad(t,n,a,s,u,c){return Sa=c,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?D0:N0,Hr=!1,c=a(s,u),Hr=!1,Es&&(c=jg(n,a,s,u)),Zg(t),c}function Zg(t){Et.H=wu;var n=je!==null&&je.next!==null;if(Sa=0,pn=je=pe=null,yu=!1,Jo=0,Ts=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&du(t)&&(mn=!0))}function jg(t,n,a,s){pe=t;var u=0;do{if(Es&&(Ts=null),Jo=0,Es=!1,25<=u)throw Error(r(301));if(u+=1,pn=je=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=sM,c=n(a,s)}while(Es);return c}function $y(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?$o(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(pe.flags|=1024),n}function rd(){var t=Mu!==0;return Mu=0,t}function sd(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function od(t){if(yu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yu=!1}Sa=0,pn=je=pe=null,Es=!1,Jo=Mu=0,Ts=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?pe.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(je===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=pn===null?pe.memoizedState:pn.next;if(n!==null)pn=n,je=t;else{if(t===null)throw pe.alternate===null?Error(r(467)):Error(r(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},pn===null?pe.memoizedState=pn=t:pn=pn.next=t}return pn}function Eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(t){var n=Jo;return Jo+=1,Ts===null&&(Ts=[]),t=Fg(Ts,t,n),n=pe,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?D0:N0),t}function Tu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $o(t);if(t.$$typeof===tt)return;if(t.$$typeof===Q)return Cn(t)}throw Error(r(438,String(t)))}function ld(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=pe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Eu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=de;return n.index++,a}function ya(t,n){return typeof n=="function"?n(t):n}function bu(t){var n=fn();return ud(n,je,t)}function ud(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var g=u.next;u.next=c.next,c.next=g}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var A=g=null,O=null,$=n,ft=!1;do{var xt=$.lane&-536870913;if(xt!==$.lane?(Re&xt)===xt:(Sa&xt)===xt){var j=$.revertLane;if(j===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xt===Pr&&(ft=!0);else if((Sa&j)===j){$=$.next,j===Pr&&(ft=!0);continue}else xt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(A=O=xt,g=c):O=O.next=xt,pe.lanes|=j,ir|=j;xt=$.action,Hr&&a(c,xt),c=$.hasEagerState?$.eagerState:a(c,xt)}else j={lane:xt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(A=O=j,g=c):O=O.next=j,pe.lanes|=xt,ir|=xt;$=$.next}while($!==null&&$!==n);if(O===null?g=c:O.next=A,!ai(c,t.memoizedState)&&(mn=!0,ft&&(a=Ss,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=O,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function cd(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do c=t(c,g.action),g=g.next;while(g!==u);ai(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function Kg(t,n,a){var s=pe,u=fn(),c=Me;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!ai((je||u).memoizedState,a);if(g&&(u.memoizedState=a,mn=!0),u=u.queue,hd($g.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||g||pn!==null&&(pn.memoizedState.tag&1)!==0,bs(t?9:8,{destroy:void 0},Jg.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Ke===null)throw Error(r(349));c||(Sa&127)!==0||Qg(s,n,a)}return a}function Qg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Eu(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Jg(t,n,a,s){n.value=a,n.getSnapshot=s,t0(n)&&e0(t)}function $g(t,n,a){return a(function(){t0(n)&&e0(t)})}function t0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function e0(t){var n=wr(t,2);n!==null&&ti(n,t,2)}function fd(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Hr){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function n0(t,n,a,s){return t.baseState=a,ud(t,je,typeof s=="function"?s:ya)}function tM(t,n,a,s,u){if(Cu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};Et.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,i0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function i0(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=Et.T,g={};g.types=c!==null?c.types:null,Et.T=g;try{var A=a(u,s),O=Et.S;O!==null&&O(g,A),a0(t,n,A)}catch($){dd(t,n,$)}finally{c!==null&&g.types!==null&&(c.types=g.types),Et.T=c}}else try{c=a(u,s),a0(t,n,c)}catch($){dd(t,n,$)}}function a0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){r0(t,n,s)},function(s){return dd(t,n,s)}):r0(t,n,a)}function r0(t,n,a){n.status="fulfilled",n.value=a,s0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,i0(t,a)))}function dd(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,s0(n),n=n.next;while(n!==s)}t.action=null}function s0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function o0(t,n){return n}function l0(t,n){if(Me){var a=Ke.formState;if(a!==null){t:{var s=pe;if(Me){if(Qe){e:{for(var u=Qe,c=Ti;u.nodeType!==8;){if(!c){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Qe=Ai(u.nextSibling),s=u.data==="F!";break t}}qa(s)}s=!1}s&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o0,lastRenderedState:n},a.queue=s,a=R0.bind(null,pe,s),s.dispatch=a,s=fd(!1),c=vd.bind(null,pe,!1,s.queue),s=Vn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=tM.bind(null,pe,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function u0(t){var n=fn();return c0(n,je,t)}function c0(t,n,a){if(n=ud(t,n,o0)[0],t=bu(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$o(n)}catch(g){throw g===ys?mu:g}else s=n;n=fn();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,bs(9,{destroy:void 0},eM.bind(null,u,a),null)),[s,c,t]}function eM(t,n){t.action=n}function f0(t){var n=fn(),a=je;if(a!==null)return c0(n,a,t);fn(),n=n.memoizedState,a=fn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function bs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Eu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function d0(){return fn().memoizedState}function Au(t,n,a,s){var u=Vn();pe.flags|=t,u.memoizedState=bs(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ru(t,n,a,s){var u=fn();s=s===void 0?null:s;var c=u.memoizedState.inst;je!==null&&s!==null&&id(s,je.memoizedState.deps)?u.memoizedState=bs(n,c,a,s):(pe.flags|=t,u.memoizedState=bs(1|n,c,a,s))}function h0(t,n){Au(8390656,8,t,n)}function hd(t,n){Ru(2048,8,t,n)}function nM(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Eu(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function p0(t){var n=fn().memoizedState;return nM({ref:n,nextImpl:t}),function(){if((Be&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function m0(t,n){return Ru(4,2,t,n)}function g0(t,n){return Ru(4,4,t,n)}function _0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function v0(t,n,a){a=a!=null?a.concat([t]):null,Ru(4,4,_0.bind(null,n,t),a)}function pd(){}function x0(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&id(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function S0(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&id(n,s[1]))return s[0];if(s=t(),Hr){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[s,n],s}function md(t,n,a){return a===void 0||(Sa&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=D_(),pe.lanes|=t,ir|=t,a)}function y0(t,n,a,s){return ai(a,n)?a:Qa.current!==null?(t=md(t,a,s),ai(t,n)||(mn=!0),t):(Sa&106)===0||(Sa&1073741824)!==0&&(Re&261930)===0?(mn=!0,t.memoizedState=a):(t=D_(),pe.lanes|=t,ir|=t,n)}function M0(t,n,a,s,u){var c=Vt.p;Vt.p=c!==0&&8>c?c:8;var g=Et.T,A={};A.types=g!==null?g.types:null,Et.T=A,vd(t,!1,n,a);try{var O=u(),$=Et.S;if($!==null&&$(A,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ft=Qy(O,s);tl(t,n,ft,ui(t))}else tl(t,n,s,ui(t))}catch(xt){tl(t,n,{then:function(){},status:"rejected",reason:xt},ui())}finally{Vt.p=c,g!==null&&A.types!==null&&(g.types=A.types),Et.T=g}}function iM(){}function gd(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=E0(t).queue;M0(t,u,n,ne,a===null?iM:function(){return T0(t),a(s)})}function E0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function T0(t){var n=E0(t);n.next===null&&(n=t.alternate.memoizedState),tl(t,n.next.queue,{},ui())}function _d(){return Cn(ks)}function b0(){return fn().memoizedState}function A0(){return fn().memoizedState}function aM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=ja(a);var s=Ka(n,t,a);s!==null&&(ti(s,n,a),Zo(s,n,a)),n={cache:qf()},t.payload=n;return}n=n.return}}function rM(t,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(t)?C0(n,a):(a=If(t,n,a,s),a!==null&&(ti(a,t,s),w0(a,n,s)))}function R0(t,n,a){var s=ui();tl(t,n,a,s)}function tl(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(t))C0(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,A=c(g,a);if(u.hasEagerState=!0,u.eagerState=A,ai(A,g))return ru(t,n,u,0),Ke===null&&au(),!1}catch{}if(a=If(t,n,u,s),a!==null)return ti(a,t,s),w0(a,n,s),!0}return!1}function vd(t,n,a,s){if(s={lane:2,revertLane:lh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Cu(t)){if(n)throw Error(r(479))}else n=If(t,a,s,2),n!==null&&ti(n,t,2)}function Cu(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function C0(t,n){Es=yu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function w0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Co(t,a)}}var wu={readContext:Cn,use:Tu,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},D0={readContext:Cn,use:Tu,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:h0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Au(4194308,4,_0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Au(4194308,4,t,n)},useInsertionEffect:function(t,n){Au(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var s=t();if(Hr){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Vn();if(a!==void 0){var u=a(n);if(Hr){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=rM.bind(null,pe,t),[s.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=fd(t);var n=t.queue,a=R0.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pd,useDeferredValue:function(t,n){var a=Vn();return md(a,t,n)},useTransition:function(){var t=fd(!1);return t=M0.bind(null,pe,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=pe,u=Vn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ke===null)throw Error(r(349));(Re&127)!==0||Qg(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,h0($g.bind(null,s,c,t),[t]),s.flags|=2048,bs(9,{destroy:void 0},Jg.bind(null,s,c,a,n),null),a},useId:function(){var t=Vn(),n=Ke.identifierPrefix;if(Me){var a=ji,s=Zi;a=(s&~(1<<32-xe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Mu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_d,useFormState:l0,useActionState:l0,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vd.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:ld,useCacheRefresh:function(){return Vn().memoizedState=aM.bind(null,pe)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},N0={readContext:Cn,use:Tu,useCallback:x0,useContext:Cn,useEffect:hd,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:bu,useRef:d0,useState:function(){return bu(ya)},useDebugValue:pd,useDeferredValue:function(t,n){var a=fn();return y0(a,je.memoizedState,t,n)},useTransition:function(){var t=bu(ya)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:Kg,useId:b0,useHostTransitionStatus:_d,useFormState:u0,useActionState:u0,useOptimistic:function(t,n){var a=fn();return n0(a,je,t,n)},useMemoCache:ld,useCacheRefresh:A0,useEffectEvent:p0},sM={readContext:Cn,use:Tu,useCallback:x0,useContext:Cn,useEffect:hd,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:cd,useRef:d0,useState:function(){return cd(ya)},useDebugValue:pd,useDeferredValue:function(t,n){var a=fn();return je===null?md(a,t,n):y0(a,je.memoizedState,t,n)},useTransition:function(){var t=cd(ya)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:Kg,useId:b0,useHostTransitionStatus:_d,useFormState:f0,useActionState:f0,useOptimistic:function(t,n){var a=fn();return je!==null?n0(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ld,useCacheRefresh:A0,useEffectEvent:p0};function xd(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sd={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ui(),u=ja(s);u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,s),n!==null&&(ti(n,t,s),Zo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ui(),u=ja(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,s),n!==null&&(ti(n,t,s),Zo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),s=ja(a);s.tag=2,n!=null&&(s.callback=n),n=Ka(t,s,a),n!==null&&(ti(n,t,a),Zo(n,t,a))}};function U0(t,n,a,s,u,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,g):n.prototype&&n.prototype.isPureReactComponent?!Ho(a,s)||!Ho(u,c):!0}function L0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Sd.enqueueReplaceState(n,n.state,null)}function Gr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function O0(t){iu(t)}function P0(t){console.error(t)}function I0(t){iu(t)}function Du(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function z0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yd(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Du(t,n)},a}function B0(t){return t=ja(t),t.tag=3,t}function F0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){z0(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){z0(n,a,s),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function oM(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Lr(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Qu():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),rh(t,s,u)),!1;case 22:return a.flags|=65536,s===gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),rh(t,s,u)),!1}throw Error(r(435,a.tag))}return rh(t,s,u),Qu(),!1}if(Me)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Gf&&(t=Error(r(422),{cause:s}),Xo(yi(t,a)))):(s!==Gf&&(n=Error(r(423),{cause:s}),Xo(yi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=yi(s,a),u=yd(t.stateNode,s,u),Qf(t,u),ln!==4&&(ln=2)),!1;var c=Error(r(520),{cause:s});if(c=yi(c,a),ll===null?ll=[c]:ll.push(c),ln!==4&&(ln=2),n===null)return!0;s=yi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yd(a.stateNode,s,t),Qf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ar===null||!ar.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=B0(u),F0(u,t,a,s),Qf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Md=Error(r(461)),mn=!1;function xn(t,n,a,s){n.child=t===null?Xg(n,null,a,s):Fr(n,t.child,a,s)}function H0(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var g={};for(var A in s)A!=="ref"&&(g[A]=s[A])}else g=s;return Or(n),s=ad(t,n,a,g,c,u),A=rd(),t!==null&&!mn?(sd(t,n,u),Ma(t,n,u)):(Me&&A&&uu(n),n.flags|=1,xn(t,n,s,u),n.child)}function G0(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!zf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,V0(t,n,c,s,u)):(t=ou(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Dd(t,u)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(g,s)&&t.ref===n.ref)return Ma(t,n,u)}return n.flags|=1,t=ga(c,s),t.ref=n.ref,t.return=n,n.child=t}function V0(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(Ho(c,s)&&t.ref===n.ref)if(mn=!1,n.pendingProps=s=c,Dd(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Ma(t,n,u)}return Ed(t,n,a,s,u)}function X0(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return k0(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pu(n,c!==null?c.cachePool:null),c!==null?Wg(n,c):$f(),Yg(n);else return s=n.lanes=536870912,k0(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(pu(n,c.cachePool),Wg(n,c),$a(),n.memoizedState=null):(t!==null&&pu(n,null),$f(),$a());return xn(t,n,u,a),n.child}function el(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function k0(t,n,a,s,u){var c=Yf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&pu(n,null),$f(),Yg(n),t!==null&&Lr(t,n,s,!0),n.childLanes=u,null}function Nu(t,n){return n=Uu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function q0(t,n,a){return Fr(n,t.child,null,a),t=Nu(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function lM(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=Nu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},el(null,t);if(ed(n),(t=Qe)?(t=_v(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Cg(t),a.return=n,n.child=a,Tn=n,Qe=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Nu(n,s)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(ed(n),u)if(n.flags&256)n.flags&=-257,n=q0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||Lr(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(Qa.current===null){if(s=Ke,s!==null&&(g=wo(s,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,wr(t,g),ti(s,t,g),Md;Qu()}n=q0(t,n,a)}else t=c.treeContext,Qe=Ai(g.nextSibling),Tn=n,Me=!0,ka=null,Ti=!1,t!==null&&Ng(n,t),n=Nu(n,s),n.flags|=134221824;return n}return t=ga(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function As(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ed(t,n,a,s,u){return Or(n),a=ad(t,n,a,s,void 0,u),s=rd(),t!==null&&!mn?(sd(t,n,u),Ma(t,n,u)):(Me&&s&&uu(n),n.flags|=1,xn(t,n,a,u),n.child)}function W0(t,n,a,s,u,c){return Or(n),n.updateQueue=null,a=jg(n,s,a,u),Zg(t),s=rd(),t!==null&&!mn?(sd(t,n,c),Ma(t,n,c)):(Me&&s&&uu(n),n.flags|=1,xn(t,n,a,c),n.child)}function Y0(t,n,a,s,u){if(Or(n),n.stateNode===null){var c=gs,g=a.contextType;typeof g=="object"&&g!==null&&(c=Cn(g)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Sd,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},jf(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?Cn(g):gs,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(xd(n,a,g,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Sd.enqueueReplaceState(c,c.state,null),Ko(n,s,c,u),jo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,O=Gr(a,A);c.props=O;var $=c.context,ft=a.contextType;g=gs,typeof ft=="object"&&ft!==null&&(g=Cn(ft));var xt=a.getDerivedStateFromProps;ft=typeof xt=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||$!==g)&&L0(n,c,s,g),Za=!1;var j=n.memoizedState;c.state=j,Ko(n,s,c,u),jo(),$=n.memoizedState,A||j!==$||Za?(typeof xt=="function"&&(xd(n,a,xt,s),$=n.memoizedState),(O=Za||U0(n,a,O,s,j,$,g))?(ft||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),c.props=s,c.state=$,c.context=g,s=O):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Kf(t,n),g=n.memoizedProps,ft=Gr(a,g),c.props=ft,xt=n.pendingProps,j=c.context,$=a.contextType,O=gs,typeof $=="object"&&$!==null&&(O=Cn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==xt||j!==O)&&L0(n,c,s,O),Za=!1,j=n.memoizedState,c.state=j,Ko(n,s,c,u),jo();var ot=n.memoizedState;g!==xt||j!==ot||Za||t!==null&&t.dependencies!==null&&du(t.dependencies)?(typeof A=="function"&&(xd(n,a,A,s),ot=n.memoizedState),(ft=Za||U0(n,a,ft,s,j,ot,O)||t!==null&&t.dependencies!==null&&du(t.dependencies))?($||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,ot,O),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,ot,O)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),c.props=s,c.state=ot,c.context=O,s=ft):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,As(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Fr(n,t.child,null,u),n.child=Fr(n,null,a,u)):xn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=Ma(t,n,u),t}function Z0(t,n,a,s){return Nr(),n.flags|=256,xn(t,n,a,s),n.child}var Td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(t){return{baseLanes:t,cachePool:zg()}}function Ad(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function j0(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Ja(n):$a(),(t=Qe)?(t=_v(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Cg(t),a.return=n,n.child=a,Tn=n,Qe=null)):t=null,t===null)throw qa(n);return bh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?($a(),u=n.mode,c=Uu({mode:"hidden",children:c},u),s=Dr(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=bd(a),s.childLanes=Ad(t,g,a),n.memoizedState=Td,el(null,s)):(Ja(n),Rd(n,c))}var A=t.memoizedState;if(A!==null){var O=A.dehydrated;if(O!==null)return uM(t,n,c,g,s,O,A,a)}return u?($a(),u=s.fallback,c=n.mode,A=t.child,O=A.sibling,s=ga(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,O!==null?u=ga(O,u):(u=Dr(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,el(null,s),s=n.child,u=t.child.memoizedState,u===null?u=bd(a):(c=u.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=zg(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=Ad(t,g,a),n.memoizedState=Td,el(t.child,s)):(Ja(n),a=t.child,t=a.sibling,a=ga(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Rd(t,n){return n=Uu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Uu(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Lu(t,n,a){return Fr(n,t.child,null,a),t=Rd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function uM(t,n,a,s,u,c,g,A){if(a)return n.flags&256?(Ja(n),n.flags&=-257,Lu(t,n,A)):n.memoizedState!==null?($a(),n.child=t.child,n.flags|=128,null):($a(),c=u.fallback,g=n.mode,u=Uu({mode:"visible",children:u.children},g),c=Dr(c,g,A,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Fr(n,t.child,null,A),u=n.child,u.memoizedState=bd(A),u.childLanes=Ad(t,s,A),n.memoizedState=Td,el(null,u));if(Ja(n),bh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var O=s.dgst;return s=O,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Xo({value:u,source:null,stack:null})),Lu(t,n,A)}if(mn||Lr(t,n,A,!1),s=(A&t.childLanes)!==0,mn||s){if(Qa.current!==null)return Lu(t,n,A);if(s=Ke,s!==null&&(u=wo(s,A),u!==0&&u!==g.retryLane))throw g.retryLane=u,wr(t,u),ti(s,t,u),Md;return Th(c)||Qu(),Lu(t,n,A)}return Th(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Qe=Ai(c.nextSibling),Tn=n,Me=!0,ka=null,Ti=!1,t!==null&&Ng(n,t),n=Rd(n,u.children),n.flags|=134221824,n)}function K0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),fu(t.return,n,a)}function Q0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Su(a)===null&&(n=t),t=t.sibling}return n}function Ou(t,n,a,s,u,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=c)}function Cd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function wd(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var g=Dn.current;if(n.flags&128)return Qo(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Qo(n,g),u==="backwards"&&t!==null?(Cd(t),xn(t,n,s,a),Cd(t)):xn(t,n,s,a),s=Me?Vo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K0(t,a,n);else if(t.tag===19)K0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=Q0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Cd(n)),Ou(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Su(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ou(n,!0,a,null,c,s);break;case"together":Ou(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Q0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ou(n,!1,u,a,c,s)}return n.child}function J0(t,n,a){var s=n.pendingProps;return Wa(n,n.type,s.value),xn(t,n,s.children,a),n.child}function Ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Lr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ga(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ga(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Dd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&du(t)))}function cM(t,n,a){switch(n.tag){case 3:Z(n,n.stateNode.containerInfo),Wa(n,hn,t.memoizedState.cache),Nr();break;case 27:case 5:Oe(n);break;case 4:Z(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ed(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ja(n),n.flags|=128,null;s=Lr(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?j0(t,n,a):(Ja(n),t=Ma(t,n,a),t!==null?t.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return wd(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Lr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return wd(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Qo(n,Dn.current),s)break;return null;case 22:return n.lanes=0,X0(t,n,a,n.pendingProps);case 24:Wa(n,hn,t.memoizedState.cache)}return Ma(t,n,a)}function $0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Dd(t,a)&&(n.flags&128)===0)return mn=!1,cM(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Me&&(n.flags&1048576)!==0&&Dg(n,Vo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=zr(n.elementType),n.type=t,typeof t=="function")zf(t)?(s=Gr(t,s),n.tag=1,n=Y0(null,n,t,s,a)):(n.tag=0,n=Ed(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===k){n.tag=11,n=H0(null,n,t,s,a);break t}else if(u===_t){n.tag=14,n=G0(null,n,t,s,a);break t}else if(u===Q){n.tag=10,n.type=t,n=J0(null,n,a);break t}}throw n=Rt(t)||t,Error(r(306,n,""))}}return n;case 0:return Ed(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Gr(s,n.pendingProps),Y0(t,n,s,u,a);case 3:t:{if(Z(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,Kf(t,n),Ko(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Wa(n,hn,s),s!==c.cache&&kf(n,[hn],a,!0),jo(),s=g.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Z0(t,n,s,a);break t}else if(s!==u){u=yi(Error(r(424)),n),Xo(u),n=Z0(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qe=Ai(t.firstChild),Tn=n,Me=!0,ka=null,Ti=!0,a=Xg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Nr(),s===u){n=Ma(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return As(t,n),t===null?(a=Tv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=iv(n.type,n.pendingProps,Pe.current,n)):n.memoizedState=Tv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Oe(n),t===null&&Me&&(s=n.stateNode=Sv(n.type,n.pendingProps,Pe.current),Tn=n,Ti=!0,u=Qe,or(n.type)?(Ah=u,Qe=Ai(s.firstChild)):Qe=u),xn(t,n,n.pendingProps.children,a),As(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=s=Qe)&&(s=aE(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,Tn=n,Qe=Ai(s.firstChild),Ti=!1,u=!0):u=!1),u||qa(n)),Oe(n),u=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,s=c.children,_h(u,c)?s=null:g!==null&&_h(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=ad(t,n,$y,null,null,a),ks._currentValue=u),As(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Qe)&&(a=rE(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Tn=n,Qe=null,t=!0):t=!1),t||qa(n)),null;case 13:return j0(t,n,a);case 4:return Z(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Fr(n,null,s,a):xn(t,n,s,a),n.child;case 11:return H0(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,As(t,n),xn(t,n,s,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return J0(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Or(n),u=Cn(u),s=s(u),n.flags|=1,xn(t,n,s,a),n.child;case 14:return G0(t,n,n.type,n.pendingProps,a);case 15:return V0(t,n,n.type,n.pendingProps,a);case 19:return wd(t,n,a);case 31:return lM(t,n,a);case 22:return X0(t,n,a,n.pendingProps);case 24:return Or(n),s=Cn(hn),t===null?(u=Yf(),u===null&&(u=Ke,c=qf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},jf(n),Wa(n,hn,u)):((t.lanes&a)!==0&&(Kf(t,n),Ko(n,null,null,a),jo()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Wa(n,hn,s)):(s=c.cache,Wa(n,hn,s),s!==u.cache&&kf(n,[hn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&uu(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:As(t,n),xn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ea(t){t.flags|=4}function Nd(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Cv(n,s):Cv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(O_())t.flags|=8192;else throw Br=gu,Zf}else t.flags&=-16777217}function t_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wv(n))if(O_())t.flags|=8192;else throw Br=gu,Zf}function Pu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ro():536870912,t.lanes|=n,Ns|=n)}function nl(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function fM(t,n,a){var s=n.pendingProps;switch(Hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),xa(hn),un(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xs(n)?Ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vf())),Je(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(Ea(n),c!==null?(Je(n),t_(n,c)):(Je(n),Nd(n,u,null,s,a))):c?c!==t.memoizedState?(Ea(n),Je(n),t_(n,c)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ea(n),Je(n),Nd(n,u,t,s,a)),null;case 27:if(D(n),a=Pe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Ve.current,xs(n)?Ug(n):(t=Sv(u,s,a),n.stateNode=t,Ea(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(D(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}if(c=Ve.current,xs(n))Ug(n);else{var g=hl(Pe.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}c[X]=n,c[lt]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Un(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ea(n)}}return Je(n),n.subtreeFlags&=-33554433,Nd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ea(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Pe.current,xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[X]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||$_(t.nodeValue,a)),t||qa(n,!0)}else t=hl(t).createTextNode(s),t[X]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=xs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[X]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[X]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pu(n,n.updateQueue),Je(n),null);case 4:return un(),t===null&&dh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return xa(n.type),Je(n),null;case 19:if(nd(n),s=n.memoizedState,s===null)return Je(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)nl(s,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Su(t),c!==null){for(n.flags|=128,nl(s,!1),t=c.updateQueue,n.updateQueue=t,Pu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Rg(a,t),a=a.sibling;return Qo(n,Dn.current&1|2),Me&&_a(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&kt()>Yu&&(n.flags|=128,u=!0,nl(s,!1),n.lanes=4194304)}else{if(!u)if(t=Su(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pu(n,t),nl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!Me)return Je(n),null}else 2*kt()-s.renderingStartTime>Yu&&a!==536870912&&(n.flags|=128,u=!0,nl(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=kt(),t.sibling=null,c=Dn.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Me?Qo(n,c):(a=c,le(wn,n),le(Dn,a),In===null&&(In=n)),Me&&_a(n,s.treeForkCount),t}return Je(n),null;case 22:case 23:return ri(n),td(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Pu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Te(Ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(hn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(r(156,n.tag))}function dM(t,n){switch(Hf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return xa(hn),un(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return D(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nd(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return un(),null;case 10:return xa(n.type),null;case 22:case 23:return ri(n),td(),t!==null&&Te(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return xa(hn),null;case 25:return null;default:return null}}function e_(t,n){switch(Hf(n),n.tag){case 3:xa(hn),un();break;case 26:case 27:case 5:D(n);break;case 4:un();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:nd(n);break;case 10:xa(n.type);break;case 22:case 23:ri(n),td(),t!==null&&Te(Ir);break;case 24:xa(hn)}}function il(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,g=a.inst;s=c(),g.destroy=s}a=a.next}while(a!==u)}}catch(A){ke(n,n.return,A)}}function tr(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var g=s.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,u=n;var O=a,$=A;try{$()}catch(ft){ke(u,O,ft)}}}s=s.next}while(s!==c)}}catch(ft){ke(n,n.return,ft)}}function n_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{qg(n,a)}catch(s){ke(t,t.return,s)}}}function i_(t,n,a){a.props=Gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ke(t,n,s)}}function Ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=pa(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=cv(c)),s=u.ref;break;case 7:if(t.stateNode===null){var g=new ci(t);v(t.child,!1,nE,g,void 0,void 0),t.stateNode=g}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){ke(t,n,A)}}function Nn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(t,n,u)}else a.current=null}function Iu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)gv(t.stateNode,n[a])}function a_(t){for(var n=t.return;n!==null&&(Ld(n)&&gv(t.stateNode,n.stateNode),!Ud(n));)n=n.return}function al(t){for(var n=t.return;n!==null&&(Ld(n)&&iE(t.stateNode,n.stateNode),!Ud(n));)n=n.return}function Ud(t){return t.tag===5||t.tag===3||t.tag===27}function Ld(t){return t&&t.tag===7&&t.stateNode!==null}function Od(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ke(t,t.return,u)}}function Pd(t,n,a){try{var s=t.stateNode;BM(s,t.type,a,n),s[lt]=n}catch(u){ke(t,t.return,u)}}function r_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function Id(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),Iu(t,s),$t=!0;else if(u!==4&&(u===27&&(Iu(t,s),s=null,or(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(zd(t,n,a,s),t=t.sibling;t!==null;)zd(t,n,a,s),t=t.sibling}function zu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Iu(t,s),$t=!0;else if(u!==4&&(u===27&&(Iu(t,s),s=null,or(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(zu(t,n,a,s),t=t.sibling;t!==null;)zu(t,n,a,s),t=t.sibling}function s_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,s,a),n[X]=t,n[lt]=a}catch(c){ke(t,t.return,c)}}var Bu=!1,si=null;function o_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Bu=!0)}var Qi=null;function l_(){var t=Qi;return Qi=null,t}var Qn=0;function Rs(t,n,a,s,u){return Qn=0,u_(t.child,n,a,s,u)}function u_(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(s!==null){var A=Sh(g);s.push(A),A.view&&(c=!0)}else c||Sh(g).view&&(c=!0);Bu=!0,lv(g,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||u_(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Ji(t,n){for(;t!==null;)t.tag===5?uv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ji(t.child,n)),t=t.sibling}function Fu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Fu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ma(n.default,n.share),n!=="none"&&(Rs(t,a,n,null,!1)||Ji(t.child,!1))}t=t.sibling}}function Bd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=pa(s,a),c=ma(s.default,a.paired?s.share:s.enter);c!=="none"?Rs(t,u,c,null,!1)?(Fu(t),a.paired||n||Ps(t,s.onEnter)):Ji(t.child,!1):Fu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Bd(t,n),t=t.sibling;else Fu(t)}function Fd(t){if(si!==null&&si.size!==0){var n=si;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=ma(a.default,a.share);if(c!=="none"&&(Rs(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Ps(t,a.onShare)):Ji(t.child,!1)),n.delete(s),n.size===0)break}}}Fd(t)}t=t.sibling}}}function Hd(t){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode),s=si!==null?si.get(a):void 0,u=ma(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Rs(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,si.delete(a),Ps(t,n.onShare)):Ps(t,n.onExit):Ji(t.child,!1)),si!==null&&Fd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Hd(t),t=t.sibling;else si!==null&&Fd(t)}function c_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode);n=ma(n.default,n.update),t.flags&=-5,n!=="none"&&Rs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&c_(t);t=t.sibling}}function Gd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ji(t.child,!1))}Gd(t)}t=t.sibling}}function Hu(t){if(t.tag===30)t.stateNode.paired=null,Ji(t.child,!1),Gd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Hu(t),t=t.sibling;else Gd(t)}function f_(t){for(t=t.child;t!==null;)t.tag===30?Ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&f_(t),t=t.sibling}function Vd(t,n,a,s,u,c,g){for(var A=!1;n!==null;){if(n.tag===5){var O=n.stateNode;if(c!==null&&Qn<c.length){var $=c[Qn],ft=Sh(O);($.view||ft.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(ft.clip)xt=!0;else{xt=$.rect;var j=ft.rect;xt=xt.y!==j.y||xt.x!==j.x||xt.height!==j.height||xt.width!==j.width}xt&&(t.flags|=4),ft.abs?ft=!$.abs:($=$.rect,ft=ft.rect,ft=$.height!==ft.height||$.width!==ft.width),ft&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&lv(O,Qn===0?a:a+"_"+Qn,u),A&&(t.flags&4)!==0||(Qi===null&&(Qi=[]),Qi.push(O,Qn===0?s:s+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:Vd(t,n.child,a,s,u,c,g)&&(A=!0));n=n.sibling}return A}function d_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=pa(a,s),c=ma(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;Qn=0,u=Vd(s,A,u,u,c,g,!1),(t.flags&4)!==0&&u&&Ps(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&d_(t);t=t.sibling}}var bn=!1,Ge=!1,$i=!1,Xd=!1,h_=typeof WeakSet=="function"?WeakSet:Set,An=null,ta=!1,rl=!1,Gu=!1,kd=!1;function hM(t,n,a){if(t=t.containerInfo,mh=qs,t=_g(t),Df(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var A=0,O=-1,$=-1,ft=0,xt=0,j=t,ot=null;e:for(;;){for(var Lt;j!==s||c!==0&&j.nodeType!==3||(O=A+c),j!==g||u!==0&&j.nodeType!==3||($=A+u),j.nodeType===3&&(A+=j.nodeValue.length),(Lt=j.firstChild)!==null;)ot=j,j=Lt;for(;;){if(j===t)break e;if(ot===s&&++ft===c&&(O=A),ot===g&&++xt===u&&($=A),(Lt=j.nextSibling)!==null)break;j=ot,ot=j.parentNode}j=Lt}s=O===-1||$===-1?null:{start:O,end:$}}else s=null}s=s||{start:0,end:0}}else s=null;for(gh={focusedElem:t,selectionRange:s},qs=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&Hd(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&o_(t),Vu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Hd(s),Vu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&o_(t),Vu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,An=s):(a&&c_(t),Vu(a))}}si=null}function Vu(t){for(;An!==null;){var n=An,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var g=Gr(n.type,u);a=c.getSnapshotBeforeUpdate(g,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){ke(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Eh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Eh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=pa(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=ma(u.default,u.update),u!=="none"&&Rs(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function p_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&il(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ke(a,a.return,g)}else{var u=Gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ke(a,a.return,g)}}s&64&&n_(a),s&512&&Ki(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qg(t,n)}catch(g){ke(a,a.return,g)}}break;case 27:n===null&&s&4&&s_(a);case 26:case 5:ea(t,a),n===null&&s&4&&Od(a),s&512&&Ki(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&v_(t,a);break;case 13:ea(t,a),s&4&&x_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=bM.bind(null,a),sE(t,a))));break;case 22:if(s=a.memoizedState!==null||bn,!s){var c=n!==null&&n.memoizedState!==null||Ge;n=bn,u=Ge,bn=s,(Ge=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),zi(t,a,s)):ea(t,a),bn=n,Ge=u}break;case 30:ea(t,a),s&512&&Ki(a,a.return);break;case 7:s&512&&Ki(a,a.return);default:ea(t,a)}}function qd(t,n){for(t=t.child;t!==null;)m_(t,n),t=t.sibling}function m_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(O){ke(t,t.return,O)}Wd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,$t=!0}catch(O){ke(t,t.return,O)}break;case 18:try{var A=t.stateNode;n?ov(A,!0):ov(t.stateNode,!1)}catch(O){ke(t,t.return,O)}break;case 22:case 23:t.memoizedState===null&&qd(t,n);break;default:qd(t,n)}}function Wd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:m_(a,s);break t;case 22:a.memoizedState===null&&Wd(a,s);break t;default:Wd(a,s)}}t=t.sibling}}function g_(t){var n=t.alternate;n!==null&&(t.alternate=null,g_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&re(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,Jn=!1;function Pi(t,n,a){for(a=a.child;a!==null;)__(t,n,a),a=a.sibling}function __(t,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:Ge||Nn(a,n),Pi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Nn(a,n),al(a);var s=nn,u=Jn;or(a.type)&&(nn=a.stateNode,Jn=!1),Pi(t,n,a),yv(a.stateNode,a.type,a.memoizedProps),nn=s,Jn=u;break;case 5:Ge||Nn(a,n),al(a);case 6:if(a.tag===6&&al(a),s=nn,u=Jn,nn=null,Pi(t,n,a),nn=s,Jn=u,nn!==null)if(Jn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),$t=!0}catch(c){ke(a,n,c)}else try{nn.removeChild(a.stateNode),$t=!0}catch(c){ke(a,n,c)}break;case 18:nn!==null&&(Jn?(t=nn,sv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ws(t)):sv(nn,a.stateNode));break;case 4:s=nn,u=Jn,nn=a.stateNode.containerInfo,Jn=!0,Pi(t,n,a),nn=s,Jn=u;break;case 0:case 11:case 14:case 15:tr(2,a,n),Ge||tr(4,a,n),Pi(t,n,a);break;case 1:Ge||(Nn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&i_(a,n,s)),Pi(t,n,a);break;case 21:Pi(t,n,a);break;case 22:Ge=(s=Ge)||a.memoizedState!==null,Pi(t,n,a),Ge=s;break;case 30:Nn(a,n),Pi(t,n,a);break;case 7:Ge||Nn(a,n),Pi(t,n,a);break;default:Pi(t,n,a)}}function v_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ws(t)}catch(a){ke(n,n.return,a)}}}function x_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ws(t)}catch(a){ke(n,n.return,a)}}function pM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new h_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new h_),n;default:throw Error(r(435,t.tag))}}function Xu(t,n){var a=pM(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=AM.bind(null,t,s);s.then(u,u)}})}function Xn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],g=t,A=n,O=A;t:for(;O!==null;){switch(O.tag){case 27:if(or(O.type)){nn=O.stateNode,Jn=!1;break t}break;case 5:nn=O.stateNode,Jn=!1;break t;case 3:case 4:nn=O.stateNode.containerInfo,Jn=!0;break t}O=O.return}if(nn===null)throw Error(r(160));__(g,A,c),nn=null,Jn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)S_(n,t,a),n=n.sibling}var Ii=null;function S_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var g=s[c];g.ref.impl=g.nextImpl}Xn(n,t,a),kn(t),u&4&&(tr(3,t,t.return),il(3,t),tr(5,t,t.return));break;case 1:Xn(n,t,a),kn(t),u&512&&(Ge||s===null||Nn(s,s.return)),u&64&&bn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ii,Xn(n,t,a),kn(t),u&512&&(Ge||s===null||Nn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(bn)t.stateNode=iv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Yt]||s[X]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Un(s,n,a),s[X]=t,ge(s),n=s;break t;case"link":if(c=Rv("link","href",u).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(s=c[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}s=u.createElement(n),Un(s,n,a),u.head.appendChild(s);break;case"meta":if(c=Rv("meta","content",u).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(s=c[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}s=u.createElement(n),Un(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[X]=t,ge(s),n=s}t.stateNode=n}else bn||Dh(c,t.type,t.stateNode);else t.stateNode=Av(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Ge||n.parentNode.removeChild(n)):u.count--,a===null?bn||Dh(c,t.type,t.stateNode):Av(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 27:Xn(n,t,a),kn(t),u&512&&(Ge||s===null||Nn(s,s.return)),s!==null&&u&4&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=$i,$i=!1,Xn(n,t,a),$i=c,kn(t),u&512&&(Ge||s===null||Nn(s,s.return)),t.flags&32){n=t.stateNode;try{us(n,""),$t=!0}catch(ft){ke(t,t.return,ft)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Pd(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Xd=!0);break;case 6:if(Xn(n,t,a),kn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,$t=!0}catch(ft){ke(t,t.return,ft)}}break;case 3:if($t=!1,ac=null,c=Ii,Ii=pl(n.containerInfo),Xn(n,t,a),Ii=c,kn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Ws(n.containerInfo)}catch(ft){ke(t,t.return,ft)}Xd&&(Xd=!1,y_(t)),$t=!1;break;case 4:u=$i,$i=bn,s=en(),c=Ii,Ii=pl(t.stateNode.containerInfo),Xn(n,t,a),kn(t),Ii=c,$t&&rl&&(Gu=!0),$t=s,$i=u;break;case 12:Xn(n,t,a),kn(t);break;case 31:Xn(n,t,a),kn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xu(t,n)));break;case 13:Xn(n,t,a),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wu=kt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xu(t,n)));break;case 22:c=t.memoizedState!==null,g=s!==null&&s.memoizedState!==null;var A=bn,O=Ge,$=$i;bn=A||c,$i=$||c,Ge=O||g,Xn(n,t,a),Ge=O,$i=$,bn=A,kn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||g||bn||Ge||(n=g||Ge,a=bn,s=Ge,bn=c||bn,Ge=n,er(t,2),bn=a,Ge=s),!c&&$i||qd(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xu(t,a))));break;case 19:Xn(n,t,a),kn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xu(t,n)));break;case 30:u&512&&(Ge||s===null||Nn(s,s.return)),u=en(),c=rl,g=(a&335544064)===a,A=t.memoizedProps,rl=g&&ma(A.default,A.update)!=="none",Xn(n,t,a),kn(t),g&&s!==null&&$t&&(t.flags|=4),rl=c,$t=u;break;case 21:break;case 7:u&512&&(Ge||s===null||Nn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Xn(n,t,a),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(r_(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(Ld(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(Ud(u))break;u=u.return}var g=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,O=Id(t);zu(t,O,A,g);break;case 5:var $=a.stateNode;a.flags&32&&(us($,""),a.flags&=-33);var ft=Id(t);zu(t,ft,$,g);break;case 3:case 4:var xt=a.stateNode.containerInfo,j=Id(t);zd(t,j,xt,g);break;default:throw Error(r(161))}}catch(ot){ke(t,t.return,ot)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function y_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;y_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,qs=!0,n.reset(),qs=!1),t=t.sibling}}function Cs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)M_(n,t),n=n.sibling;else d_(n)}function M_(t,n){var a=t.alternate;if(a===null)Bd(t,!1);else switch(t.tag){case 3:if(kd=ta=!1,l_(),Cs(n,t),!ta&&!Gu){if(t=Qi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];uv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),kd=!0}Qi=null;break;case 5:Cs(n,t);break;case 4:s=ta,ta=!1,Cs(n,t),ta&&(Gu=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Bd(t,!1):Cs(n,t));break;case 30:s=ta,u=l_(),ta=!1,Cs(n,t),ta&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=pa(c,g),g=pa(a.memoizedProps,g);var A=ma(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=Vd(t,a,n,g,A,c,!0),Qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ps(t,t.memoizedProps.onUpdate),Qi=u):u!==null&&(u.push.apply(u,Qi),Qi=u),ta=(t.flags&32)!==0?!0:s;break;default:Cs(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)p_(t,n.alternate,n),n=n.sibling}function er(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:tr(4,a,a.return),er(a,s);break;case 1:Nn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&i_(a,a.return,u),er(a,s);break;case 27:(s&2)!==0&&yv(a.stateNode,a.type,a.memoizedProps);case 5:Nn(a,a.return),a.tag!==5&&a.tag!==27||al(a),er(a,s);break;case 6:al(a);break;case 26:Nn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ge||u.parentNode.removeChild(u),er(a,s);break;case 22:a.memoizedState===null&&er(a,s);break;case 30:Nn(a,a.return),er(a,s);break;case 7:Nn(a,a.return);default:er(a,s)}t=t.sibling}}function zi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,g=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:zi(u,c,a),il(4,c);break;case 1:if(zi(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ft){ke(s,s.return,ft)}if(s=c,u=s.updateQueue,u!==null){var O=s.stateNode;try{var $=u.shared.hiddenCallbacks;if($!==null)for(u.shared.hiddenCallbacks=null,u=0;u<$.length;u++)kg($[u],O)}catch(ft){ke(s,s.return,ft)}}A&&g&64&&n_(c),Ki(c,c.return);break;case 27:(a&2)!==0&&s_(c);case 5:c.tag!==5&&c.tag!==27||a_(c),zi(u,c,a),A&&s===null&&g&4&&Od(c),Ki(c,c.return);break;case 6:a_(c);break;case 26:O=c.stateNode,c.memoizedState!==null||O===null||bn||Dh(pl(O.ownerDocument),c.type,O),zi(u,c,a),A&&s===null&&g&4&&Od(c),Ki(c,c.return);break;case 12:zi(u,c,a);break;case 31:zi(u,c,a),A&&g&4&&v_(u,c);break;case 13:zi(u,c,a),A&&g&4&&x_(u,c);break;case 22:c.memoizedState===null&&zi(u,c,a),Ki(c,c.return);break;case 30:zi(u,c,a),Ki(c,c.return);break;case 7:Ki(c,c.return);default:zi(u,c,a)}n=n.sibling}}function Yd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ko(a))}function Zd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ko(t))}function bi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)E_(t,n,a,s),n=n.sibling;else u&&f_(n)}function E_(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Hu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,s),c&2048&&il(9,n);break;case 1:bi(t,n,a,s);break;case 3:bi(t,n,a,s),u&&kd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&ko(c)));break;case 12:if(c&2048){bi(t,n,a,s),c=n.stateNode;try{var g=n.memoizedProps,A=g.id,O=g.onPostCommit;typeof O=="function"&&O(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch($){ke(n,n.return,$)}}else bi(t,n,a,s);break;case 31:bi(t,n,a,s);break;case 13:bi(t,n,a,s);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&Hu(A),g._visibility&2?bi(t,n,a,s):sl(t,n)):(u&&A!==null&&A.memoizedState!==null&&Hu(n),g._visibility&2?bi(t,n,a,s):(g._visibility|=2,ws(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Yd(A,n);break;case 24:bi(t,n,a,s),c&2048&&Zd(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Ji(c.child,!0),Ji(n.child,!0))),bi(t,n,a,s);break;default:bi(t,n,a,s)}}function ws(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,A=a,O=s,$=g.flags;switch(g.tag){case 0:case 11:case 15:ws(c,g,A,O,u),il(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?ws(c,g,A,O,u):sl(c,g):(ft._visibility|=2,ws(c,g,A,O,u)),u&&$&2048&&Yd(g.alternate,g);break;case 24:ws(c,g,A,O,u),u&&$&2048&&Zd(g.alternate,g);break;default:ws(c,g,A,O,u)}n=n.sibling}}function sl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:sl(a,s),u&2048&&Yd(s.alternate,s);break;case 24:sl(a,s),u&2048&&Zd(s.alternate,s);break;default:sl(a,s)}n=n.sibling}}var Vr=8192;function Xr(t,n,a){if(t.subtreeFlags&Vr)for(t=t.child;t!==null;)T_(t,n,a),t=t.sibling}function T_(t,n,a){switch(t.tag){case 26:Xr(t,n,a),t.flags&Vr&&(t.memoizedState!==null?SE(a,Ii,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Nv(a,t)));break;case 5:Xr(t,n,a),t.flags&Vr&&(t=t.stateNode,(n&335544128)===n&&Nv(a,t));break;case 3:case 4:var s=Ii;Ii=pl(t.stateNode.containerInfo),Xr(t,n,a),Ii=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Vr,Vr=16777216,Xr(t,n,a),Vr=s):Xr(t,n,a));break;case 30:if((t.flags&Vr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,si===null&&(si=new Map),si.set(s,u)}Xr(t,n,a);break;default:Xr(t,n,a)}}function b_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,R_(s,t)}b_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)A_(t),t=t.sibling}function A_(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&tr(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ku(t)):ol(t);break;default:ol(t)}}function ku(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,R_(s,t)}b_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:tr(8,n,n.return),ku(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ku(n));break;default:ku(n)}t=t.sibling}}function R_(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:tr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ko(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else t:for(a=t;An!==null;){s=An;var u=s.sibling,c=s.return;if(g_(s),s===a){An=null;break t}if(u!==null){u.return=c,An=u;break t}An=c}}}var mM={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},gM=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ke=null,be=null,Re=0,Xe=0,oi=null,nr=!1,Ds=!1,jd=!1,Ta=0,ln=0,ir=0,kr=0,qu=0,li=0,Ns=0,ll=null,$n=null,Kd=!1,Wu=0,C_=0,Yu=1/0,Zu=null,ar=null,rn=0,Bi=null,qr=null,na=0,Qd=0,Jd=null,w_=null,Us=null,Ls=null,Os=null,ul=0,ju=null;function ui(){return(Be&2)!==0&&Re!==0?Re&-Re:Et.T!==null?lh():Zl()}function D_(){if(li===0)if((Re&536870912)===0||Me){var t=Tr;Tr<<=1,(Tr&3932160)===0&&(Tr=262144),li=t}else li=536870912;return t=wn.current,t!==null&&(t.flags|=32),li}function Ps(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=cv(pa(t.memoizedProps,a))),Ls===null&&(Ls=[]),Ls.push(n.bind(null,s))}}function ti(t,n,a){(t===Ke&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Is(t,0),rr(t,Re,li,!1)),Wi(t,a),((Be&2)===0||t!==Ke)&&(t===Ke&&((Be&2)===0&&(kr|=a),ln===4&&rr(t,Re,li,!1)),ia(t))}function N_(t,n,a){if((Be&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fa(t,n),u=s?xM(t,n):th(t,n,!0),c=s;do{if(u===0){Ds&&!s&&rr(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!_M(a)){u=th(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;u=ll;var O=A.current.memoizedState.isDehydrated;if(O&&(Is(A,g).flags|=256),g=th(A,g,!1),g!==2&&g!==6){if(jd&&!O){A.errorRecoveryDisabledLanes|=c,kr|=c,u=4;break t}c=$n,$n=u,c!==null&&($n===null?$n=c:$n.push.apply($n,c))}u=g}if(c=!1,u!==2)continue}}if(u===1){Is(t,0),rr(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:rr(s,n,li,!nr);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wu+300-kt(),10<u)){if(rr(s,n,li,!nr),br(s,0,!0)!==0)break t;na=n,s.timeoutHandle=xh(U_.bind(null,s,a,$n,Zu,Kd,n,li,kr,Ns,nr,c,"Throttled",-0,0),u);break t}U_(s,a,$n,Zu,Kd,n,li,kr,Ns,nr,c,null,-0,0)}}break}while(!0);ia(t)}function U_(t,n,a,s,u,c,g,A,O,$,ft,xt,j,ot){t.timeoutHandle=-1;var Lt=n.subtreeFlags,jt=(c&335544064)===c;if(xt=null,(jt||Lt&8192||(Lt&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},si=null,T_(n,c,xt),jt&&(Lt=xt,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=_l.bind(Lt),jt.finished.then(Lt,Lt))),Lt=(c&62914560)===c?Wu-kt():(c&4194048)===c?C_-kt():0,Lt=yE(xt,Lt),Lt!==null)){na=c,t.cancelPendingCommit=Lt(H_.bind(null,t,n,c,a,s,u,g,A,O,$,ft,xt,null,j,ot)),rr(t,c,g,!$);return}H_(t,n,c,a,s,u,g,A,O,$,ft,xt)}function _M(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!ai(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(t,n,a,s){n=qi(t,n),n&=~qu,n&=~kr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-xe(u),g=1<<c;s[c]=-1,u&=~g}a!==0&&Ar(t,a,n)}function Ku(){return(Be&6)===0?(cl(0),!1):!0}function $d(){if(be!==null){if(Xe===0)var t=be.return;else t=be,va=Ur=null,od(t),Ms=null,Yo=0,t=be;for(;t!==null;)e_(t.alternate,t),t=t.return;be=null}}function Is(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,GM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,$d(),Ke=t,be=a=ga(t.current,null),Re=n,Xe=0,oi=null,nr=!1,Ds=Fa(t,n),jd=!1,Ns=li=qu=kr=ir=ln=0,$n=ll=null,Kd=!1,Ta=qi(t,n),au(),a}function L_(t,n){pe=null,Et.H=wu,n===ys||n===mu?(n=Hg(),Xe=3):n===Zf?(n=Hg(),Xe=4):Xe=n===Md?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,be===null&&(ln=1,Du(t,yi(n,t.current)))}function O_(){var t=wn.current;return t===null?!0:(Re&4194048)===Re?In===null:(Re&62914560)===Re||(Re&536870912)!==0?t===In:!1}function P_(){var t=Et.H;return Et.H=wu,t===null?wu:t}function I_(){var t=Et.A;return Et.A=mM,t}function Qu(){ln=4,nr||(Re&4194048)!==Re&&wn.current!==null||(Ds=!0),(ir&134217727)===0&&(kr&134217727)===0||Ke===null||rr(Ke,Re,li,!1)}function th(t,n,a){var s=Be;Be|=2;var u=P_(),c=I_();(Ke!==t||Re!==n)&&(Zu=null,Is(t,n)),n=!1;var g=ln;t:do try{if(Xe!==0&&be!==null){var A=be,O=oi;switch(Xe){case 8:$d(),g=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var $=Xe;if(Xe=0,oi=null,zs(t,A,O,$),a&&Ds){g=0;break t}break;default:$=Xe,Xe=0,oi=null,zs(t,A,O,$)}}vM(),g=ln;break}catch(ft){L_(t,ft)}while(!0);return n&&t.shellSuspendCounter++,va=Ur=null,Be=s,Et.H=u,Et.A=c,be===null&&(Ke=null,Re=0,au()),g}function vM(){for(;be!==null;)z_(be)}function xM(t,n){var a=Be;Be|=2;var s=P_(),u=I_();Ke!==t||Re!==n?(Zu=null,Yu=kt()+500,Is(t,n)):Ds=Fa(t,n);t:do try{if(Xe!==0&&be!==null){n=be;var c=oi;e:switch(Xe){case 1:Xe=0,oi=null,zs(t,n,c,1);break;case 2:case 9:if(Bg(c)){Xe=0,oi=null,B_(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==t||(Xe=7),ia(t)},c.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Bg(c)?(Xe=0,oi=null,B_(n)):(Xe=0,oi=null,zs(t,n,c,7));break;case 5:var g=null;switch(be.tag){case 26:g=be.memoizedState;case 5:case 27:var A=be;if(g?wv(g):A.stateNode.complete){Xe=0,oi=null;var O=A.sibling;if(O!==null)be=O;else{var $=A.return;$!==null?(be=$,Ju($)):be=null}break e}}Xe=0,oi=null,zs(t,n,c,5);break;case 6:Xe=0,oi=null,zs(t,n,c,6);break;case 8:$d(),ln=6;break t;default:throw Error(r(462))}}SM();break}catch(ft){L_(t,ft)}while(!0);return va=Ur=null,Et.H=s,Et.A=u,Be=a,be!==null?0:(Ke=null,Re=0,au(),ln)}function SM(){for(;be!==null&&!It();)z_(be)}function z_(t){var n=$0(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,n===null?Ju(t):be=n}function B_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=W0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=W0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:od(n);var s=n;s===Tn&&(Me?(cu(s),s.tag===5&&s.stateNode!=null&&(Qe=s.stateNode)):(cu(s),Me=!0));default:e_(a,n),n=be=Rg(n,Ta),n=$0(a,n,Ta)}t.memoizedProps=t.pendingProps,n===null?Ju(t):be=n}function zs(t,n,a,s){va=Ur=null,od(n),Ms=null,Yo=0;var u=n.return;try{if(oM(t,u,n,a,Re)){ln=1,Du(t,yi(a,t.current)),be=null;return}}catch(c){if(u!==null)throw be=u,c;ln=1,Du(t,yi(a,t.current)),be=null;return}n.flags&32768?(Me||s===1?t=!0:Ds||(Re&536870912)!==0?t=!1:(nr=t=!0,(s===2||s===9||s===3||s===6)&&(s=wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),F_(n,t)):Ju(n)}function Ju(t){var n=t;do{if((n.flags&32768)!==0){F_(n,nr);return}t=n.return;var a=fM(n.alternate,n,Ta);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);ln===0&&(ln=5)}function F_(t,n){do{var a=dM(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);ln=6,be=null}function H_(t,n,a,s,u,c,g,A,O,$,ft,xt){t.cancelPendingCommit=null;do $u();while(rn!==0);if((Be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ke&&(be=Ke=null,Re=0),qr=n,Bi=t,na=a,Jd=u,w_=s,yM(t,n,a,g,A,O,xt)}}function yM(t,n,a,s,u,c,g){var A=n.lanes|n.childLanes;if(Qd=A,A|=Pf,Yl(t,a,A,s,u,c),Ls=null,(a&335544064)===a?(Os=jy(t),s=10262):(Os=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,RM(Ct,function(){return ah(),null})):(t.callbackNode=null,t.callbackPriority=0),Bu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null,u=Vt.p,Vt.p=2,c=Be,Be|=4;try{hM(t,n,a)}finally{Be=c,Vt.p=u,Et.T=s}}rn=1,Bu?Us=YM(g,t.containerInfo,Os,eh,nh,EM,ih,ah,MM):(eh(),nh(),ih())}function MM(t){if(rn!==0){var n=Bi.onRecoverableError;n(t,{componentStack:null})}}function EM(){rn===3&&(rn=0,M_(qr,Bi),rn=4)}function eh(){if(rn===1){rn=0;var t=Bi,n=qr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null;var u=Vt.p;Vt.p=2;var c=Be;Be|=4;try{rl=Gu=!1,S_(n,t,a),a=gh;var g=_g(t.containerInfo),A=a.focusedElem,O=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&gg(A.ownerDocument.documentElement,A)){if(O!==null&&Df(A)){var $=O.start,ft=O.end;if(ft===void 0&&(ft=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ft,A.value.length);else{var xt=A.ownerDocument||document,j=xt&&xt.defaultView||window;if(j.getSelection){var ot=j.getSelection(),Lt=A.textContent.length,jt=Math.min(O.start,Lt),me=O.end===void 0?jt:Math.min(O.end,Lt);!ot.extend&&jt>me&&(g=me,me=jt,jt=g);var J=mg(A,jt),G=mg(A,me);if(J&&G&&(ot.rangeCount!==1||ot.anchorNode!==J.node||ot.anchorOffset!==J.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var at=xt.createRange();at.setStart(J.node,J.offset),ot.removeAllRanges(),jt>me?(ot.addRange(at),ot.extend(G.node,G.offset)):(at.setEnd(G.node,G.offset),ot.addRange(at))}}}}for(xt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&xt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}qs=!!mh,gh=mh=null}finally{Be=c,Vt.p=u,Et.T=s}}t.current=n,rn=2}}function nh(){if(rn===2){rn=0;var t=Bi,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var s=Vt.p;Vt.p=2;var u=Be;Be|=4;try{p_(t,n.alternate,n)}finally{Be=u,Vt.p=s,Et.T=a}}rn=3}}function ih(){if(rn===4||rn===3){rn=0;var t=Us;Us=null,Ot();var n=Bi,a=qr,s=na,u=w_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?rn=5:(rn=0,qr=Bi=null,G_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ar=null),No(s),a=a.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Zt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Et.T,c=Vt.p,Vt.p=2,Et.T=null;try{for(var g=n.onRecoverableError,A=0;A<u.length;A++){var O=u[A];g(O.value,{componentStack:O.stack})}}finally{Et.T=a,Vt.p=c}}if(u=Ls,g=Os,Os=null,u!==null&&(Ls=null,g===null&&(g=[]),t!==null))for(O=0;O<u.length;O++)a=(0,u[O])(g),a!==void 0&&t.finished.finally(a);(na&3)!==0&&$u(),ia(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===ju?ul++:(ul=0,ju=n):(ul=0,ju=null),cl(0)}}function G_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ko(n)))}function $u(){return Us!==null&&(Us.skipTransition(),Us=null),eh(),nh(),ih(),ah()}function ah(){if(rn!==5)return!1;var t=Bi,n=Qd;Qd=0;var a=No(na),s=Et.T,u=Vt.p;try{Vt.p=32>a?32:a,Et.T=null,a=Jd,Jd=null;var c=Bi,g=na;if(rn=0,qr=Bi=null,na=0,(Be&6)!==0)throw Error(r(331));var A=Be;if(Be|=4,A_(c.current),E_(c,c.current,g,a),Be=A,cl(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Zt,c)}catch{}return!0}finally{Vt.p=u,Et.T=s,G_(t,n)}}function V_(t,n,a){n=yi(a,n),n=yd(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Wi(t,2),ia(t))}function ke(t,n,a){if(t.tag===3)V_(t,t,a);else for(;n!==null;){if(n.tag===3){V_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ar===null||!ar.has(s))){t=yi(a,t),a=B0(2),s=Ka(n,a,2),s!==null&&(F0(a,s,n,t),Wi(s,2),ia(s));break}}n=n.return}}function rh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new gM;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(jd=!0,u.add(a),t=TM.bind(null,t,n,a),n.then(t,t))}function TM(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(Re&a)===a&&((ln===4||ln===3&&(Re&62914560)===Re&&300>kt()-Wu)&&(Be&2)===0?Is(t,0):qu|=a,Ns===Re&&(Ns=0)),ia(t)}function X_(t,n){n===0&&(n=Ro()),t=wr(t,n),t!==null&&(Wi(t,n),ia(t))}function bM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),X_(t,a)}function AM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),X_(t,a)}function RM(t,n){return Dt(t,n)}var Bs=null,Fs=null,sh=!1,tc=!1,oh=!1,sr=0;function ia(t){t!==Fs&&t.next===null&&(Fs===null?Bs=Fs=t:Fs=Fs.next=t),tc=!0,sh||(sh=!0,wM())}function cl(t,n){if(!oh&&tc){oh=!0;do for(var a=!1,s=Bs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var g=s.suspendedLanes,A=s.pingedLanes;c=(1<<31-xe(42|t)+1)-1,c&=u&~(g&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Y_(s,c))}else c=Re,c=br(s,s===Ke?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Fa(s,c)||(a=!0,Y_(s,c));s=s.next}while(a);oh=!1}}function CM(){k_()}function k_(){tc=sh=!1;var t=0;sr!==0&&HM()&&(t=sr);for(var n=kt(),a=null,s=Bs;s!==null;){var u=s.next,c=q_(s,n);c===0?(s.next=null,a===null?Bs=u:a.next=u,u===null&&(Fs=a)):(a=s,(t!==0||(c&3)!==0)&&(tc=!0)),s=u}rn!==0&&rn!==5||cl(t),sr!==0&&(sr=0)}function q_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-xe(c),A=1<<g,O=u[g];O===-1?((A&a)===0||(A&s)!==0)&&(u[g]=Ao(A,n)):O<=n&&(t.expiredLanes|=A),c&=~A}if(n=Ke,a=Re,a=br(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Jt(s),No(a)){case 2:case 8:a=q;break;case 32:a=Ct;break;case 268435456:a=Ut;break;default:a=Ct}return s=W_.bind(null,t),a=Dt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Jt(s),t.callbackPriority=2,t.callbackNode=null,2}function W_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($u()&&t.callbackNode!==a)return null;var s=Re;return s=br(t,t===Ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(N_(t,s,n),q_(t,kt()),t.callbackNode!=null&&t.callbackNode===a?W_.bind(null,t):null)}function Y_(t,n){if($u())return null;N_(t,n,!0)}function wM(){VM(function(){(Be&6)!==0?Dt(ce,CM):k_()})}function lh(){if(sr===0){var t=Pr;t===0&&(t=ss,ss<<=1,(ss&261888)===0&&(ss=256)),sr=t}return sr}function Z_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Kl(t)}function DM(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=Z_((u[lt]||null).action),g=s.submitter;g&&(n=(n=g[lt]||null)?Z_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var A=new tu("action","action",null,s,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var O=new FormData(u,g);gd(a,{pending:!0,data:O,method:u.method,action:c},null,O)}}else typeof c=="function"&&(A.preventDefault(),O=new FormData(u,g),gd(a,{pending:!0,data:O,method:u.method,action:c},c,O))},currentTarget:u}]})}}for(var uh=0;uh<Of.length;uh++){var ch=Of[uh],NM=ch.toLowerCase(),UM=ch[0].toUpperCase()+ch.slice(1);Oi(NM,"on"+UM)}Oi(Sg,"onAnimationEnd"),Oi(yg,"onAnimationIteration"),Oi(Mg,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(Gy,"onTransitionRun"),Oi(Vy,"onTransitionStart"),Oi(Xy,"onTransitionCancel"),Oi(Eg,"onTransitionEnd"),Se("onMouseEnter",["mouseout","mouseover"]),Se("onMouseLeave",["mouseout","mouseover"]),Se("onPointerEnter",["pointerout","pointerover"]),Se("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function j_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var g=s.length-1;0<=g;g--){var A=s[g],O=A.instance,$=A.currentTarget;if(A=A.listener,O!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=$;try{c(u)}catch(ft){iu(ft)}u.currentTarget=null,c=O}else for(g=0;g<s.length;g++){if(A=s[g],O=A.instance,$=A.currentTarget,A=A.listener,O!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=$;try{c(u)}catch(ft){iu(ft)}u.currentTarget=null,c=O}}}}function Ae(t,n){var a=n[ct];a===void 0&&(a=n[ct]=new Set);var s=t+"__bubble";a.has(s)||(K_(n,t,2,!1),a.add(s))}function fh(t,n,a){var s=0;n&&(s|=4),K_(a,t,s,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function dh(t){if(!t[ec]){t[ec]=!0,vn.forEach(function(a){a!=="selectionchange"&&(LM.has(a)||fh(a,!1,t),fh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ec]||(n[ec]=!0,fh("selectionchange",!1,n))}}function K_(t,n,a,s){switch(Fv(n)){case 2:var u=bE;break;case 8:u=AE;break;default:u=Uh}a=u.bind(null,n,a,t),u=void 0,!Sf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function hh(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var A=s.stateNode.containerInfo;if(A===u)break;if(g===4)for(g=s.return;g!==null;){var O=g.tag;if((O===3||O===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;A!==null;){if(g=se(A),g===null)return;if(O=g.tag,O===5||O===6||O===26||O===27){s=c=g;continue t}A=A.parentNode}}s=s.return}Km(function(){var $=c,ft=vf(a),xt=[];t:{var j=Tg.get(t);if(j!==void 0){var ot=tu,Lt=t;switch(t){case"keypress":if(Jl(a)===0)break t;case"keydown":case"keyup":ot=_y;break;case"focusin":Lt="focus",ot=Tf;break;case"focusout":Lt="blur",ot=Tf;break;case"beforeblur":case"afterblur":ot=Tf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=My;break;case Sg:case yg:case Mg:ot=ly;break;case Eg:ot=Ty;break;case"scroll":case"scrollend":ot=iy;break;case"wheel":ot=Ay;break;case"copy":case"cut":case"paste":ot=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=eg;break;case"submit":ot=Sy;break;case"toggle":case"beforetoggle":ot=Cy}var jt=(n&4)!==0,me=!jt&&(t==="scroll"||t==="scrollend"),J=jt?j!==null?j+"Capture":null:j;jt=[];for(var G=$,at;G!==null;){var vt=G;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||J===null||(vt=Lo(G,J),vt!=null&&jt.push(dl(G,vt,at))),me)break;G=G.return}0<jt.length&&(j=new ot(j,Lt,null,a,ft),xt.push({event:j,listeners:jt}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",ot&&a!==_f&&(Lt=a.relatedTarget||a.fromElement)&&(se(Lt)||Lt[st]))break t;(j||ot)&&(Lt=ft.window===ft?ft:(ot=ft.ownerDocument)?ot.defaultView||ot.parentWindow:window,j?(ot=a.relatedTarget||a.toElement,j=$,ot=ot?se(ot):null,ot!==null&&(me=f(ot),jt=ot.tag,ot!==me||jt!==5&&jt!==27&&jt!==6)&&(ot=null)):(j=null,ot=$),j!==ot&&(jt=$m,vt="onMouseLeave",J="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(jt=eg,vt="onPointerLeave",J="onPointerEnter",G="pointer"),me=j==null?Lt:Ne(j),at=ot==null?Lt:Ne(ot),Lt=new jt(vt,G+"leave",j,a,ft),Lt.target=me,Lt.relatedTarget=at,vt=null,se(ft)===$&&(jt=new jt(J,G+"enter",ot,a,ft),jt.target=at,jt.relatedTarget=me,vt=jt),me=vt,jt=j&&ot?N(j,ot,OM):null,j!==null&&Q_(xt,Lt,j,jt,!1),ot!==null&&me!==null&&Q_(xt,me,ot,jt,!0)))}t:{if(j=$?Ne($):window,ot=j.nodeName&&j.nodeName.toLowerCase(),ot==="select"||ot==="input"&&j.type==="file")var Wt=ug;else if(og(j))if(cg)Wt=By;else{Wt=Iy;var Ce=Py}else ot=j.nodeName,!ot||ot.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?$&&gf($.elementType)&&(Wt=ug):Wt=zy;if(Wt&&(Wt=Wt(t,$))){lg(xt,Wt,a,ft);break t}Ce&&Ce(t,j,$)}switch(Ce=$?Ne($):window,t){case"focusin":(og(Ce)||Ce.contentEditable==="true")&&(hs=Ce,Nf=$,Go=null);break;case"focusout":Go=Nf=hs=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,vg(xt,a,ft);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":vg(xt,a,ft)}var te;if(Af)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else ds?rg(t,a)&&(ie="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(ng&&a.locale!=="ko"&&(ds||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&ds&&(te=Qm()):(Ga=ft,yf="value"in Ga?Ga.value:Ga.textContent,ds=!0)),Ce=nc($,ie),0<Ce.length&&(ie=new tg(ie,t,null,a,ft),xt.push({event:ie,listeners:Ce}),te?ie.data=te:(te=sg(a),te!==null&&(ie.data=te)))),(te=Dy?Ny(t,a):Uy(t,a))&&(ie=nc($,"onBeforeInput"),0<ie.length&&(Ce=new tg("onBeforeInput","beforeinput",null,a,ft),xt.push({event:Ce,listeners:ie}),Ce.data=te)),DM(xt,t,$,a,ft)}j_(xt,n)})}function dl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nc(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=Lo(t,a),u!=null&&s.unshift(dl(t,u,c)),u=Lo(t,n),u!=null&&s.push(dl(t,u,c))),t.tag===3)return s;t=t.return}return[]}function OM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q_(t,n,a,s,u){for(var c=n._reactName,g=[];a!==null&&a!==s;){var A=a,O=A.alternate,$=A.stateNode;if(A=A.tag,O!==null&&O===s)break;A!==5&&A!==26&&A!==27||$===null||(O=$,u?($=Lo(a,c),$!=null&&g.unshift(dl(a,$,O))):u||($=Lo(a,c),$!=null&&g.push(dl(a,$,O)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var PM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function J_(t){return(typeof t=="string"?t:""+t).replace(PM,`
`).replace(IM,"")}function $_(t,n){return n=J_(n),J_(t)===n}function qe(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||us(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&us(t,""+s);else return;break;case"className":ze(t,"class",s);break;case"tabIndex":ze(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,a,s);break;case"style":Zm(t,s,c);return;case"data":if(n!=="object"){ze(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Kl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&qe(t,n,"name",u.name,u,null),qe(t,n,"formEncType",u.formEncType,u,null),qe(t,n,"formMethod",u.formMethod,u,null),qe(t,n,"formTarget",u.formTarget,u,null)):(qe(t,n,"encType",u.encType,u,null),qe(t,n,"method",u.method,u,null),qe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Kl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);return;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Kl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),ii(t,"popover",s);break;case"xlinkActuate":En(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":En(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":En(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":En(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":En(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":En(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":En(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":En(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":En(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ii(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=ey.get(a)||a,ii(t,a,s);else return}$t=!0}function ph(t,n,a,s,u,c){switch(a){case"style":Zm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")us(t,s);else if(typeof s=="number"||typeof s=="bigint")us(t,""+s);else return;break;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Xt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[lt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}$t=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):ii(t,a,s)}return}$t=!0}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qe(t,n,c,g,a,null)}}u&&qe(t,n,"srcSet",a.srcSet,a,null),s&&qe(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var A=c=g=u=null,O=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":g=ft;break;case"checked":O=ft;break;case"defaultChecked":$=ft;break;case"value":c=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:qe(t,n,s,ft,a,null)}}km(t,c,A,O,$,g,u,!1);return;case"select":Ae("invalid",t),s=g=c=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":c=A;break;case"defaultValue":g=A;break;case"multiple":s=A;default:qe(t,n,u,A,a,null)}n=c,a=g,t.multiple=!!s,n!=null?ls(t,!!s,n,!1):a!=null&&ls(t,!!s,a,!0);return;case"textarea":Ae("invalid",t),c=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":s=A;break;case"defaultValue":u=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:qe(t,n,g,A,a,null)}Wm(t,s,u,c);return;case"option":for(O in a)a.hasOwnProperty(O)&&(s=a[O],s!=null)&&(O==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":qe(t,n,O,s,a,null));return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(s=0;s<fl.length;s++)Ae(fl[s],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qe(t,n,$,s,a,null)}return;default:if(gf(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&ph(t,n,ft,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&qe(t,n,A,s,a,null))}var zM={};function BM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,g=null,A=null,O=null,$=null,ft=null;for(ot in a){var xt=a[ot];if(a.hasOwnProperty(ot)&&xt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":O=xt;default:s.hasOwnProperty(ot)||qe(t,n,ot,null,s,xt)}}for(var j in s){var ot=s[j];if(xt=a[j],s.hasOwnProperty(j)&&(ot!=null||xt!=null))switch(j){case"type":ot!==xt&&($t=!0),c=ot;break;case"name":ot!==xt&&($t=!0),u=ot;break;case"checked":ot!==xt&&($t=!0),$=ot;break;case"defaultChecked":ot!==xt&&($t=!0),ft=ot;break;case"value":ot!==xt&&($t=!0),g=ot;break;case"defaultValue":ot!==xt&&($t=!0),A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==xt&&qe(t,n,j,ot,s,xt)}}pf(t,g,A,O,$,ft,c,u);return;case"select":ot=g=A=j=null;for(c in a)if(O=a[c],a.hasOwnProperty(c)&&O!=null)switch(c){case"value":break;case"multiple":ot=O;default:s.hasOwnProperty(c)||qe(t,n,c,null,s,O)}for(u in s)if(c=s[u],O=a[u],s.hasOwnProperty(u)&&(c!=null||O!=null))switch(u){case"value":c!==O&&($t=!0),j=c;break;case"defaultValue":c!==O&&($t=!0),A=c;break;case"multiple":c!==O&&($t=!0),g=c;default:c!==O&&qe(t,n,u,c,s,O)}n=A,a=g,s=ot,j!=null?ls(t,!!a,j,!1):!!s!=!!a&&(n!=null?ls(t,!!a,n,!0):ls(t,!!a,a?[]:"",!1));return;case"textarea":ot=j=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(t,n,A,null,s,u)}for(g in s)if(u=s[g],c=a[g],s.hasOwnProperty(g)&&(u!=null||c!=null))switch(g){case"value":u!==c&&($t=!0),j=u;break;case"defaultValue":u!==c&&($t=!0),ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&qe(t,n,g,u,s,c)}qm(t,j,ot);return;case"option":for(var Lt in a)j=a[Lt],a.hasOwnProperty(Lt)&&j!=null&&!s.hasOwnProperty(Lt)&&(Lt==="selected"?t.selected=!1:qe(t,n,Lt,null,s,j));for(O in s)j=s[O],ot=a[O],s.hasOwnProperty(O)&&j!==ot&&(j!=null||ot!=null)&&(O==="selected"?(j!==ot&&($t=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):qe(t,n,O,j,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)j=a[jt],a.hasOwnProperty(jt)&&j!=null&&!s.hasOwnProperty(jt)&&qe(t,n,jt,null,s,j);for($ in s)if(j=s[$],ot=a[$],s.hasOwnProperty($)&&j!==ot&&(j!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:qe(t,n,$,j,s,ot)}return;default:if(gf(n)){for(var me in a)j=a[me],a.hasOwnProperty(me)&&j!==void 0&&!s.hasOwnProperty(me)&&ph(t,n,me,void 0,s,j);for(ft in s)j=s[ft],ot=a[ft],!s.hasOwnProperty(ft)||j===ot||j===void 0&&ot===void 0||ph(t,n,ft,j,s,ot);return}}for(var J in a)j=a[J],a.hasOwnProperty(J)&&j!=null&&!s.hasOwnProperty(J)&&qe(t,n,J,null,s,j);for(xt in s)j=s[xt],ot=a[xt],!s.hasOwnProperty(xt)||j===ot||j==null&&ot==null||qe(t,n,xt,j,s,ot)}function tv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function FM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,g=u.initiatorType,A=u.duration;if(c&&A&&tv(g)){for(g=0,A=u.responseEnd,s+=1;s<a.length;s++){var O=a[s],$=O.startTime;if($>A)break;var ft=O.transferSize,xt=O.initiatorType;ft&&tv(xt)&&(O=O.responseEnd,g+=ft*(O<A?1:(A-$)/(O-$)))}if(--s,n+=8*(c+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var mh=null,gh=null;function hl(t){return t.nodeType===9?t:t.ownerDocument}function ev(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function iv(t,n,a,s){return a=hl(a).createElement(t),a[X]=s,a[lt]=n,Un(a,t,n),ge(a),a}function _h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vh=null;function HM(){var t=window.event;return t&&t.type==="popstate"?t===vh?!1:(vh=t,!0):(vh=null,!1)}var xh=typeof setTimeout=="function"?setTimeout:void 0,GM=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,rv=typeof requestAnimationFrame=="function"?requestAnimationFrame:xh,VM=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(t){return av.resolve(null).then(t).catch(XM)}:xh;function XM(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function sv(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Ws(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Rh(a);for(var c=a.firstChild;c;){var g=c.nextSibling,A=c.nodeName;c[Yt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&Rh(t.ownerDocument.body);a=u}while(a);Ws(n)}function ov(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function lv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function uv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function kM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Sh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return kM(n,a,t)}function qM(t){return t.documentElement.clientHeight}function WM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function YM(t,n,a,s,u,c,g,A,O){var $=n.nodeType===9?n:n.ownerDocument;try{var ft=$.startViewTransition({update:function(){var j=$.defaultView,ot=j.navigation&&j.navigation.transition,Lt=$.fonts.status;s();var jt=[];if(Lt==="loaded"&&(qM($),$.fonts.status==="loading"&&jt.push($.fonts.ready)),Lt=jt.length,t!==null)for(var me=t.suspenseyImages,J=0,G=0;G<me.length;G++){var at=me[G];if(!at.complete){var vt=at.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<j.innerHeight&&vt.left<j.innerWidth){if(J+=Dv(at),J>rc){jt.length=Lt;break}at=new Promise(WM.bind(at)),jt.push(at)}}}if(0<jt.length)return j=Promise.race([Promise.all(jt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(u,u),(ot?Promise.allSettled([ot.finished,j]):j).then(c,c);if(u(),ot)return ot.finished.then(c,c);c()},types:a});$.__reactViewTransition=ft;var xt=[];return ft.ready.then(function(){for(var j=$.documentElement.getAnimations({subtree:!0}),ot=0;ot<j.length;ot++){var Lt=j[ot],jt=Lt.effect,me=jt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){xt.push(Lt),Lt=jt.getKeyframes();for(var J=me=void 0,G=!0,at=0;at<Lt.length;at++){var vt=Lt[at],Wt=vt.width;if(me===void 0)me=Wt;else if(me!==Wt){G=!1;break}if(Wt=vt.height,J===void 0)J=Wt;else if(J!==Wt){G=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}G&&me!==void 0&&J!==void 0&&(jt.setKeyframes(Lt),G=getComputedStyle(jt.target,jt.pseudoElement),G.width!==me||G.height!==J)&&(G=Lt[0],G.width=me,G.height=J,G=Lt[Lt.length-1],G.width=me,G.height=J,jt.setKeyframes(Lt))}}g()},function(j){$.__reactViewTransition===ft&&($.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&O(j)}finally{s(),u(),g()}}),ft.finished.finally(function(){for(var j=0;j<xt.length;j++)xt[j].cancel();$.__reactViewTransition===ft&&($.__reactViewTransition=null),A()}),ft}catch{return s(),u(),g(),null}}function Wr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Wr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Wr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Wr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function cv(t){return{name:t,group:new Wr("group",t),imagePair:new Wr("image-pair",t),old:new Wr("old",t),new:new Wr("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(dv(c,t,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(O){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,O):n.handleEvent(O)}),s!==null&&(u=g.removeEventListener.bind(g,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Hs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),v(this._fragmentFiber.child,!1,ZM,t,A,s)}this._eventListeners=c}};function ZM(t,n,a,s){return y(t).addEventListener(n,a,s),!1}ci.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=dv(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Hs(u.optionsOrUseCapture),v(this._fragmentFiber.child,!1,jM,t,a,u),s.splice(n,1),c!==null&&c()}};function jM(t,n,a,s){return y(t).removeEventListener(n,a,s),!1}function Hs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function fv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function dv(t,n,a,s){if(t.length===0)return-1;s=fv(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&fv(c.optionsOrUseCapture)===s)return u}return-1}ci.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Hs(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Hs(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){v(this._fragmentFiber.child,!0,hv,t,void 0,void 0)};function hv(t,n){return t.tag===6?!1:(t=y(t),oE(t,n))}ci.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,yh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!hv(n[a],t);a--);};function yh(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=y(t),t=hl(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,KM,t,void 0,void 0))};function KM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,QM,t,void 0,void 0)};function QM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,JM,t,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var s=Fi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Fi[n++]=s}Fi.length=n}};function JM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Fi=[],Mh=!1;function $M(t,n,a){Fi.push({fragmentInstance:t,observer:n,instance:a}),Mh||(Mh=!0,lE(function(){Mh=!1;var s=Fi;Fi=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,tE,t,void 0,void 0),t};function tE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,yh,a,void 0,void 0);var s=y(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=u.compareDocumentPosition(t),O=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||O||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||eE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function eE(t,n,a,s,u){var c=se(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=N(a,c,P),n===null?n=!1:(v(n,!0,z,c,a),c=S,S=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=N(s,c,P),n===null?n=!1:(v(n,!0,w,c,s),c=S,I=S=null,n=c!==null)),n):!1}function pv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];v(this._fragmentFiber.child,!1,yh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||_(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=y(s),pv(t,a);return}if(s=y(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=y(u),pv(u,a)):y(u).scrollIntoView(t),s+=a?-1:1}};function nE(t,n){return t=y(t),mv(t,n),!1}function mv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function gv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Hs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,A=0;A<Fi.length;A++){var O=Fi[A];(O.fragmentInstance!==n||O.observer!==c||O.instance!==t)&&(Fi[g++]=O)}Fi.length=g,c.observe(t)}),mv(t,n))}function iE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Hs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?$M(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Eh(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function aE(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Yt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function rE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ai(t.nextSibling),t===null))return null;return t}function _v(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function Th(t){return t.data==="$?"||t.data==="$~"}function bh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ah=null;function vv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function oE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function lE(t){rv(function(){rv(function(n){return t(n)})})}function Sv(t,n,a){switch(n=hl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&qe(t,n,s,null,zM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Yi&&(t.onclick=null),re(t)}function Rh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);re(t)}var Ri=new Map,Mv=new Set;function pl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ba=Vt.d;Vt.d={f:uE,r:cE,D:fE,C:dE,L:hE,m:pE,X:gE,S:mE,M:_E};function uE(){var t=ba.f(),n=Ku();return t||n}function cE(t){var n=Kt(t);n!==null&&n.tag===5&&n.type==="form"?T0(n):ba.r(t)}var Gs=typeof document>"u"?null:document;function Ev(t,n,a){var s=Gs;if(s&&typeof n=="string"&&n){var u=xi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mv.has(u)||(Mv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Un(n,"link",t),ge(n),s.head.appendChild(n)))}}function fE(t){ba.D(t),Ev("dns-prefetch",t,null)}function dE(t,n){ba.C(t,n),Ev("preconnect",t,n)}function hE(t,n,a){ba.L(t,n,a);var s=Gs;if(s&&t&&n){var u='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xi(a.imageSizes)+'"]')):u+='[href="'+xi(t)+'"]';var c=u;switch(n){case"style":c=Vs(t);break;case"script":c=Xs(t)}if(!(Ri.has(c)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ri.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(ml(c))||n==="script"&&s.querySelector(gl(c))))){var g=s.createElement("link");Un(g,"link",t),n==="style"&&(g[Qt]=!0,g.onload=g.onerror=function(){He(g)}),ge(g),s.head.appendChild(g)}}}function pE(t,n){ba.m(t,n);var a=Gs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xi(s)+'"][href="'+xi(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Xs(t)}if(!Ri.has(c)&&(t=L({rel:"modulepreload",href:t},n),Ri.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(c)))return}s=a.createElement("link"),Un(s,"link",t),ge(s),a.head.appendChild(s)}}}function mE(t,n,a){ba.S(t,n,a);var s=Gs;if(s&&t){var u=Ze(s).hoistableStyles,c=Vs(t);n=n||"default";var g=u.get(c);if(!g){var A={loading:0,preload:null};if(g=s.querySelector(ml(c)))A.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ri.get(c))&&Ch(t,a);var O=g=s.createElement("link");ge(O),Un(O,"link",t),O._p=new Promise(function($,ft){O.onload=$,O.onerror=ft}),O.addEventListener("load",function(){A.loading|=1}),O.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ic(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:A},u.set(c,g)}}}function gE(t,n){ba.X(t,n);var a=Gs;if(a&&t){var s=Ze(a).hoistableScripts,u=Xs(t),c=s.get(u);c||(c=a.querySelector(gl(u)),c||(t=L({src:t,async:!0},n),(n=Ri.get(u))&&wh(t,n),c=a.createElement("script"),ge(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function _E(t,n){ba.M(t,n);var a=Gs;if(a&&t){var s=Ze(a).hoistableScripts,u=Xs(t),c=s.get(u);c||(c=a.querySelector(gl(u)),c||(t=L({src:t,async:!0,type:"module"},n),(n=Ri.get(u))&&wh(t,n),c=a.createElement("script"),ge(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function Tv(t,n,a,s){var u=(u=Pe.current)?pl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vs(a.href),n=Ze(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vs(a.href);var c=Ze(u).hoistableStyles,g=c.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=u.querySelector(ml(t)))?c._p||(g.instance=c,g.state.loading=5):(c=Ri.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(t,c)),vE(u,t,c,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Xs(a),n=Ze(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vs(t){return'href="'+xi(t)+'"'}function ml(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function vE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Qt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Qt]=!0,n.onload=n.onerror=He.bind(null,n),Un(n,"link",a),ge(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Xs(t){return'[src="'+xi(t)+'"]'}function gl(t){return"script[async]"+t}function Av(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+xi(a.href)+'"]');if(s)return n.instance=s,ge(s),s;var u=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),ge(s),Un(s,"style",u),ic(s,a.precedence,t),n.instance=s;case"stylesheet":u=Vs(a.href);var c=t.querySelector(ml(u));if(c)return n.state.loading|=4,n.instance=c,ge(c),c;s=bv(a),(u=Ri.get(u))&&Ch(s,u),c=(t.ownerDocument||t).createElement("link"),ge(c);var g=c;return g._p=new Promise(function(A,O){g.onload=A,g.onerror=O}),Un(c,"link",s),n.state.loading|=4,ic(c,a.precedence,t),n.instance=c;case"script":return c=Xs(a.src),(u=t.querySelector(gl(c)))?(n.instance=u,ge(u),u):(s=a,(u=Ri.get(c))&&(s=L({},a),wh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),ge(u),Un(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ic(s,a.precedence,t));return n.instance}function ic(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,g=0;g<s.length;g++){var A=s[g];if(A.dataset.precedence===n)c=A;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function Rv(t,n,a){if(ac===null){var s=new Map,u=ac=new Map;u.set(a,s)}else u=ac,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Yt]||c[X]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var A=s.get(g);A?A.push(c):s.set(g,[c])}}return s}function Dh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Cv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function wv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Dv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Nv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Dv(n),t.suspenseyImages.push(n)),t=ME.bind(t),n.decode().then(t,t))}function SE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Vs(s.href),c=n.querySelector(ml(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_l.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,ge(c);return}c=n.ownerDocument||n,s=bv(s),(u=Ri.get(u))&&Ch(s,u),c=c.createElement("link"),ge(c);var g=c;g._p=new Promise(function(A,O){g.onload=A,g.onerror=O}),Un(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_l.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var rc=0;function yE(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&rc===0&&(rc=62500*FM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>rc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Uv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)oc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function _l(){this.count--,Uv(this)}function ME(){this.imgCount--,Uv(this)}var sc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,sc=new Map,n.forEach(EE,t),sc=null,_l.call(t))}function EE(t,n){if(!(n.state.loading&4)){var a=sc.get(t);if(a)var s=a.get(null);else{a=new Map,sc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var g=u[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),c=a.get(g)||s,c===s&&a.set(null,u),a.set(g,u),this.count++,s=_l.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ks={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function TE(t,n,a,s,u,c,g,A,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.transitionTypes=null,this.incompleteTransitions=new Map}function Lv(t,n,a,s,u,c,g,A,O,$,ft,xt){return t=new TE(t,n,a,g,O,$,ft,xt,A),n=1,c===!0&&(n|=24),c=Kn(3,null,null,n),t.current=c,c.stateNode=t,n=qf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},jf(c),t}function Ov(t){return t?(t=gs,t):gs}function Pv(t,n,a,s,u,c){u=Ov(u),s.context===null?s.context=u:s.pendingContext=u,s=ja(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ka(t,s,n),a!==null&&(ti(a,t,n),Zo(a,t,n))}function Iv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nh(t,n){Iv(t,n),(t=t.alternate)&&Iv(t,n)}function zv(t){if(t.tag===13||t.tag===31){var n=wr(t,67108864);n!==null&&ti(n,t,67108864),Nh(t,67108864)}}function Bv(t){if(t.tag===13||t.tag===31){var n=ui();n=Do(n);var a=wr(t,n);a!==null&&ti(a,t,n),Nh(t,n)}}var qs=!0;function bE(t,n,a,s){var u=Et.T;Et.T=null;var c=Vt.p;try{Vt.p=2,Uh(t,n,a,s)}finally{Vt.p=c,Et.T=u}}function AE(t,n,a,s){var u=Et.T;Et.T=null;var c=Vt.p;try{Vt.p=8,Uh(t,n,a,s)}finally{Vt.p=c,Et.T=u}}function Uh(t,n,a,s){if(qs){var u=Lh(s);if(u===null)hh(t,n,s,lc,a),Hv(t,s);else if(CE(u,t,n,a,s))s.stopPropagation();else if(Hv(t,s),n&4&&-1<RE.indexOf(t)){for(;u!==null;){var c=Kt(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=da(c.pendingLanes);if(g!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var O=1<<31-xe(g);A.entanglements[1]|=O,g&=~O}ia(c),(Be&6)===0&&(Yu=kt()+500,cl(0))}}break;case 31:case 13:A=wr(c,2),A!==null&&ti(A,c,2),Ku(),Nh(c,2)}if(c=Lh(s),c===null&&hh(t,n,s,lc,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else hh(t,n,s,null,a)}}function Lh(t){return t=vf(t),Oh(t)}var lc=null;function Oh(t){if(lc=null,t=se(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lc=t,null}function Fv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case ce:return 2;case q:return 8;case Ct:case Mt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Ph=!1,lr=null,ur=null,cr=null,vl=new Map,xl=new Map,fr=[],RE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hv(t,n){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(n.pointerId)}}function Sl(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=Kt(n),n!==null&&zv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function CE(t,n,a,s,u){switch(n){case"focusin":return lr=Sl(lr,t,n,a,s,u),!0;case"dragenter":return ur=Sl(ur,t,n,a,s,u),!0;case"mouseover":return cr=Sl(cr,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return vl.set(c,Sl(vl.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,xl.set(c,Sl(xl.get(c)||null,t,n,a,s,u)),!0}return!1}function Gv(t){var n=se(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,jl(t.priority,function(){Bv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,jl(t.priority,function(){Bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);_f=s,a.target.dispatchEvent(s),_f=null}else return n=Kt(a),n!==null&&zv(n),t.blockedOn=a,!1;n.shift()}return!0}function Vv(t,n,a){uc(t)&&a.delete(n)}function wE(){Ph=!1,lr!==null&&uc(lr)&&(lr=null),ur!==null&&uc(ur)&&(ur=null),cr!==null&&uc(cr)&&(cr=null),vl.forEach(Vv),xl.forEach(Vv)}function cc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ph||(Ph=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,wE)))}var fc=null;function Xv(t){fc!==t&&(fc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Oh(s||a)===null)continue;break}var c=Kt(a);c!==null&&(t.splice(n,3),n-=3,gd(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Ws(t){function n(O){return cc(O,t)}lr!==null&&cc(lr,t),ur!==null&&cc(ur,t),cr!==null&&cc(cr,t),vl.forEach(n),xl.forEach(n);for(var a=0;a<fr.length;a++){var s=fr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Gv(a),a.blockedOn===null&&fr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],g=u[lt]||null;if(typeof c=="function")g||Xv(a);else if(g){var A=null;if(c&&c.hasAttribute("formAction")){if(u=c,g=c[lt]||null)A=g.formAction;else if(Oh(u)!==null)continue}else A=g.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Xv(a)}}}function kv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ih(t){this._internalRoot=t}dc.prototype.render=Ih.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();Pv(a,s,t,n,null,null)},dc.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Pv(t.current,2,null,t,null,null),Ku(),n[st]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fr.length&&n!==0&&n<fr[a].priority;a++);fr.splice(a,0,t),a===0&&Gv(t)}};var qv=e.version;if(qv!=="19.3.1")throw Error(r(527,qv,"19.3.1"));Vt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var DE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Zt=hc.inject(DE),Bt=hc}catch{}}return Ml.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=O0,c=P0,g=I0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Lv(t,1,!1,null,null,a,s,null,u,c,g,kv),t[st]=n.current,dh(t),new Ih(n)},Ml.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=O0,g=P0,A=I0,O=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=Lv(t,1,!0,n,a??null,s,u,O,c,g,A,kv),n.context=Ov(null),a=n.current,s=ui(),s=Do(s),u=ja(s),u.callback=null,Ka(a,u,s),a=s,n.current.lanes=a,Wi(n,a),ia(n),t[st]=n.current,dh(t),new dc(n)},Ml.version="19.3.1",Ml}var ex;function HE(){if(ex)return Fh.exports;ex=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Fh.exports=FE(),Fh.exports}var GE=HE();const VE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fS=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();var XE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const kE=Fe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:f,iconNode:d,...h},p)=>Fe.createElement("svg",{ref:p,...XE,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:fS("lucide",l),...h},[...d.map(([m,x])=>Fe.createElement(m,x)),...Array.isArray(f)?f:[f]]));const Hn=(o,e)=>{const i=Fe.forwardRef(({className:r,...l},f)=>Fe.createElement(kE,{ref:f,iconNode:e,className:fS(`lucide-${VE(o)}`,r),...l}));return i.displayName=`${o}`,i};const nx=Hn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const dS=Hn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const qE=Hn("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);const WE=Hn("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);const hS=Hn("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);const YE=Hn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);const ZE=Hn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);const jE=Hn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const KE=Hn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);const ix=Hn("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);const ax=Hn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const QE=Hn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);const JE=Hn("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const bp=Hn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Sm=Hn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const $E=Hn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);const ym="185",tT=0,rx=1,eT=2,kc=1,nT=2,Ol=3,yr=0,Yn=1,Na=2,La=0,go=1,Kc=2,sx=3,ox=4,iT=5,Jr=100,aT=101,rT=102,sT=103,oT=104,lT=200,uT=201,cT=202,fT=203,Ap=204,Rp=205,dT=206,hT=207,pT=208,mT=209,gT=210,_T=211,vT=212,xT=213,ST=214,Cp=0,wp=1,Dp=2,So=3,Np=4,Up=5,Lp=6,Op=7,Mm=0,yT=1,MT=2,ua=0,pS=1,mS=2,gS=3,_S=4,vS=5,xS=6,SS=7,yS=300,is=301,yo=302,Xh=303,kh=304,lf=306,Pp=1e3,Ua=1001,Ip=1002,On=1003,ET=1004,pc=1005,Fn=1006,qh=1007,ts=1008,hi=1009,MS=1010,ES=1011,Fl=1012,Em=1013,fa=1014,oa=1015,Ia=1016,Tm=1017,bm=1018,Hl=1020,TS=35902,bS=35899,AS=1021,RS=1022,ki=1023,za=1026,es=1027,CS=1028,Am=1029,as=1030,Rm=1031,Cm=1033,qc=33776,Wc=33777,Yc=33778,Zc=33779,zp=35840,Bp=35841,Fp=35842,Hp=35843,Gp=36196,Vp=37492,Xp=37496,kp=37488,qp=37489,Qc=37490,Wp=37491,Yp=37808,Zp=37809,jp=37810,Kp=37811,Qp=37812,Jp=37813,$p=37814,tm=37815,em=37816,nm=37817,im=37818,am=37819,rm=37820,sm=37821,om=36492,lm=36494,um=36495,cm=36283,fm=36284,Jc=36285,dm=36286,TT=3200,hm=0,bT=1,xr="",ei="srgb",$c="srgb-linear",tf="linear",We="srgb",Ys=7680,lx=519,AT=512,RT=513,CT=514,wm=515,wT=516,DT=517,Dm=518,NT=519,pm=35044,ux="300 es",la=2e3,Gl=2001;function UT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Vl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function LT(){const o=Vl("canvas");return o.style.display="block",o}const cx={};function ef(...o){const e="THREE."+o.shift();console.log(e,...o)}function wS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ae(...o){o=wS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Le(...o){o=wS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function _o(...o){const e=o.join(" ");e in cx||(cx[e]=!0,ae(...o))}function OT(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const PT={[Cp]:wp,[Dp]:Lp,[Np]:Op,[So]:Up,[wp]:Cp,[Lp]:Dp,[Op]:Np,[Up]:So};class rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fx=1234567;const zl=Math.PI/180,Xl=180/Math.PI;function Oa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function we(o,e,i){return Math.max(e,Math.min(i,o))}function Nm(o,e){return(o%e+e)%e}function IT(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function zT(o,e,i){return o!==e?(i-o)/(e-o):0}function Bl(o,e,i){return(1-i)*o+i*e}function BT(o,e,i,r){return Bl(o,e,1-Math.exp(-i*r))}function FT(o,e=1){return e-Math.abs(Nm(o,e*2)-e)}function HT(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function GT(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function VT(o,e){return o+Math.floor(Math.random()*(e-o+1))}function XT(o,e){return o+Math.random()*(e-o)}function kT(o){return o*(.5-Math.random())}function qT(o){o!==void 0&&(fx=o);let e=fx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WT(o){return o*zl}function YT(o){return o*Xl}function ZT(o){return(o&o-1)===0&&o!==0}function jT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function KT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function QT(o,e,i,r,l){const f=Math.cos,d=Math.sin,h=f(i/2),p=d(i/2),m=f((e+r)/2),x=d((e+r)/2),v=f((e-r)/2),_=d((e-r)/2),M=f((r-e)/2),b=d((r-e)/2);switch(l){case"XYX":o.set(h*x,p*v,p*_,h*m);break;case"YZY":o.set(p*_,h*x,p*v,h*m);break;case"ZXZ":o.set(p*v,p*_,h*x,h*m);break;case"XZX":o.set(h*x,p*b,p*M,h*m);break;case"YXY":o.set(p*M,h*x,p*b,h*m);break;case"ZYZ":o.set(p*b,p*M,h*x,h*m);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Xi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dx={DEG2RAD:zl,RAD2DEG:Xl,generateUUID:Oa,clamp:we,euclideanModulo:Nm,mapLinear:IT,inverseLerp:zT,lerp:Bl,damp:BT,pingpong:FT,smoothstep:HT,smootherstep:GT,randInt:VT,randFloat:XT,randFloatSpread:kT,seededRandom:qT,degToRad:WT,radToDeg:YT,isPowerOfTwo:ZT,ceilPowerOfTwo:jT,floorPowerOfTwo:KT,setQuaternionFromProperEuler:QT,normalize:Ye,denormalize:Xi},Bm=class Bm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(we(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*l+e.x,this.y=f*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bm.prototype.isVector2=!0;let _e=Bm;class To{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,d,h){let p=r[l+0],m=r[l+1],x=r[l+2],v=r[l+3],_=f[d+0],M=f[d+1],b=f[d+2],C=f[d+3];if(v!==C||p!==_||m!==M||x!==b){let y=p*_+m*M+x*b+v*C;y<0&&(_=-_,M=-M,b=-b,C=-C,y=-y);let S=1-h;if(y<.9995){const I=Math.acos(y),z=Math.sin(I);S=Math.sin(S*I)/z,h=Math.sin(h*I)/z,p=p*S+_*h,m=m*S+M*h,x=x*S+b*h,v=v*S+C*h}else{p=p*S+_*h,m=m*S+M*h,x=x*S+b*h,v=v*S+C*h;const I=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=I,m*=I,x*=I,v*=I}}e[i]=p,e[i+1]=m,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,f,d){const h=r[l],p=r[l+1],m=r[l+2],x=r[l+3],v=f[d],_=f[d+1],M=f[d+2],b=f[d+3];return e[i]=h*b+x*v+p*M-m*_,e[i+1]=p*b+x*_+m*v-h*M,e[i+2]=m*b+x*M+h*_-p*v,e[i+3]=x*b-h*v-p*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),x=h(l/2),v=h(f/2),_=p(r/2),M=p(l/2),b=p(f/2);switch(d){case"XYZ":this._x=_*x*v+m*M*b,this._y=m*M*v-_*x*b,this._z=m*x*b+_*M*v,this._w=m*x*v-_*M*b;break;case"YXZ":this._x=_*x*v+m*M*b,this._y=m*M*v-_*x*b,this._z=m*x*b-_*M*v,this._w=m*x*v+_*M*b;break;case"ZXY":this._x=_*x*v-m*M*b,this._y=m*M*v+_*x*b,this._z=m*x*b+_*M*v,this._w=m*x*v-_*M*b;break;case"ZYX":this._x=_*x*v-m*M*b,this._y=m*M*v+_*x*b,this._z=m*x*b-_*M*v,this._w=m*x*v+_*M*b;break;case"YZX":this._x=_*x*v+m*M*b,this._y=m*M*v+_*x*b,this._z=m*x*b-_*M*v,this._w=m*x*v-_*M*b;break;case"XZY":this._x=_*x*v-m*M*b,this._y=m*M*v-_*x*b,this._z=m*x*b+_*M*v,this._w=m*x*v+_*M*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],x=i[6],v=i[10],_=r+h+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-p)*M,this._y=(f-m)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(x-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(f+m)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(f-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(f+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(we(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,d=e._w,h=i._x,p=i._y,m=i._z,x=i._w;return this._x=r*x+d*h+l*m-f*p,this._y=l*x+d*p+f*h-r*m,this._z=f*x+d*m+r*p-l*h,this._w=d*x-r*h-l*p-f*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),x=Math.sin(m);p=Math.sin(p*m)/x,i=Math.sin(i*m)/x,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fm=class Fm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(hx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(hx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),x=2*(h*i-f*l),v=2*(f*r-d*i);return this.x=i+p*m+d*v-h*x,this.y=r+p*x+h*m-f*v,this.z=l+p*v+f*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-f*h,this.y=f*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(we(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fm.prototype.isVector3=!0;let it=Fm;const Wh=new it,hx=new To,Hm=class Hm{constructor(e,i,r,l,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,p,m)}set(e,i,r,l,f,d,h,p,m){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=f,x[5]=p,x[6]=r,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],x=r[4],v=r[7],_=r[2],M=r[5],b=r[8],C=l[0],y=l[3],S=l[6],I=l[1],z=l[4],w=l[7],P=l[2],N=l[5],L=l[8];return f[0]=d*C+h*I+p*P,f[3]=d*y+h*z+p*N,f[6]=d*S+h*w+p*L,f[1]=m*C+x*I+v*P,f[4]=m*y+x*z+v*N,f[7]=m*S+x*w+v*L,f[2]=_*C+M*I+b*P,f[5]=_*y+M*z+b*N,f[8]=_*S+M*w+b*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8];return i*d*x-i*h*m-r*f*x+r*h*p+l*f*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8],v=x*d-h*m,_=h*p-x*f,M=m*f-d*p,b=i*v+r*_+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*m-x*r)*C,e[2]=(h*r-l*d)*C,e[3]=_*C,e[4]=(x*i-l*p)*C,e[5]=(l*f-h*i)*C,e[6]=M*C,e[7]=(r*p-m*i)*C,e[8]=(d*i-r*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return _o("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(e,i)),this}rotate(e){return _o("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-e)),this}translate(e,i){return _o("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hm.prototype.isMatrix3=!0;let fe=Hm;const Yh=new fe,px=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mx=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JT(){const o={enabled:!0,workingColorSpace:$c,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===We&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===We&&(l.r=vo(l.r),l.g=vo(l.g),l.b=vo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===xr?tf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return _o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return _o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[$c]:{primaries:e,whitePoint:r,transfer:tf,toXYZ:px,fromXYZ:mx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:We,toXYZ:px,fromXYZ:mx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const De=JT();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Zs;class $T{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=Vl("canvas")),Zs.width=e.width,Zs.height=e.height;const l=Zs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vl("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:e.width,height:e.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tb=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(Zh(l[d].image)):f.push(Zh(l[d]))}else f=Zh(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Zh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$T.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let eb=0;const jh=new it;class Pn extends rs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=Ua,l=Ua,f=Fn,d=ts,h=ki,p=hi,m=Pn.DEFAULT_ANISOTROPY,x=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Oa(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pp:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case Ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pp:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case Ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=yS;Pn.DEFAULT_ANISOTROPY=1;const Gm=class Gm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const p=e.elements,m=p[0],x=p[4],v=p[8],_=p[1],M=p[5],b=p[9],C=p[2],y=p[6],S=p[10];if(Math.abs(x-_)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(m+1)/2,w=(M+1)/2,P=(S+1)/2,N=(x+_)/4,L=(v+C)/4,T=(b+y)/4;return z>w&&z>P?z<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(z),l=N/r,f=L/r):w>P?w<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(w),r=N/l,f=T/l):P<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(P),r=L/f,l=T/f),this.set(r,l,f,i),this}let I=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(_-x)*(_-x));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(v-C)/I,this.z=(_-x)/I,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this.w=we(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this.w=we(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gm.prototype.isVector4=!0;let sn=Gm;class nb extends rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},f=new Pn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Um(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ca extends nb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class DS extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ib extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=class of{constructor(e,i,r,l,f,d,h,p,m,x,v,_,M,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,p,m,x,v,_,M,b,C,y)}set(e,i,r,l,f,d,h,p,m,x,v,_,M,b,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=f,S[5]=d,S[9]=h,S[13]=p,S[2]=m,S[6]=x,S[10]=v,S[14]=_,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new of().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/js.setFromMatrixColumn(e,0).length(),f=1/js.setFromMatrixColumn(e,1).length(),d=1/js.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),x=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*x,M=d*v,b=h*x,C=h*v;i[0]=p*x,i[4]=-p*v,i[8]=m,i[1]=M+b*m,i[5]=_-C*m,i[9]=-h*p,i[2]=C-_*m,i[6]=b+M*m,i[10]=d*p}else if(e.order==="YXZ"){const _=p*x,M=p*v,b=m*x,C=m*v;i[0]=_+C*h,i[4]=b*h-M,i[8]=d*m,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=M*h-b,i[6]=C+_*h,i[10]=d*p}else if(e.order==="ZXY"){const _=p*x,M=p*v,b=m*x,C=m*v;i[0]=_-C*h,i[4]=-d*v,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*x,i[9]=C-_*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const _=d*x,M=d*v,b=h*x,C=h*v;i[0]=p*x,i[4]=b*m-M,i[8]=_*m+C,i[1]=p*v,i[5]=C*m+_,i[9]=M*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const _=d*p,M=d*m,b=h*p,C=h*m;i[0]=p*x,i[4]=C-_*v,i[8]=b*v+M,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-m*x,i[6]=M*v+b,i[10]=_-C*v}else if(e.order==="XZY"){const _=d*p,M=d*m,b=h*p,C=h*m;i[0]=p*x,i[4]=-v,i[8]=m*x,i[1]=_*v+C,i[5]=d*x,i[9]=M*v-b,i[2]=b*v-M,i[6]=h*x,i[10]=C*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ab,e,rb)}lookAt(e,i,r){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),hr.crossVectors(r,fi),hr.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),hr.crossVectors(r,fi)),hr.normalize(),mc.crossVectors(fi,hr),l[0]=hr.x,l[4]=mc.x,l[8]=fi.x,l[1]=hr.y,l[5]=mc.y,l[9]=fi.y,l[2]=hr.z,l[6]=mc.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],x=r[1],v=r[5],_=r[9],M=r[13],b=r[2],C=r[6],y=r[10],S=r[14],I=r[3],z=r[7],w=r[11],P=r[15],N=l[0],L=l[4],T=l[8],U=l[12],W=l[1],H=l[5],et=l[9],pt=l[13],St=l[2],Q=l[6],k=l[10],V=l[14],rt=l[3],_t=l[7],K=l[11],Tt=l[15];return f[0]=d*N+h*W+p*St+m*rt,f[4]=d*L+h*H+p*Q+m*_t,f[8]=d*T+h*et+p*k+m*K,f[12]=d*U+h*pt+p*V+m*Tt,f[1]=x*N+v*W+_*St+M*rt,f[5]=x*L+v*H+_*Q+M*_t,f[9]=x*T+v*et+_*k+M*K,f[13]=x*U+v*pt+_*V+M*Tt,f[2]=b*N+C*W+y*St+S*rt,f[6]=b*L+C*H+y*Q+S*_t,f[10]=b*T+C*et+y*k+S*K,f[14]=b*U+C*pt+y*V+S*Tt,f[3]=I*N+z*W+w*St+P*rt,f[7]=I*L+z*H+w*Q+P*_t,f[11]=I*T+z*et+w*k+P*K,f[15]=I*U+z*pt+w*V+P*Tt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],d=e[1],h=e[5],p=e[9],m=e[13],x=e[2],v=e[6],_=e[10],M=e[14],b=e[3],C=e[7],y=e[11],S=e[15],I=p*M-m*_,z=h*M-m*v,w=h*_-p*v,P=d*M-m*x,N=d*_-p*x,L=d*v-h*x;return i*(C*I-y*z+S*w)-r*(b*I-y*P+S*N)+l*(b*z-C*P+S*L)-f*(b*w-C*N+y*L)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[1],d=e[5],h=e[9],p=e[2],m=e[6],x=e[10];return i*(d*x-h*m)-r*(f*x-h*p)+l*(f*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8],v=e[9],_=e[10],M=e[11],b=e[12],C=e[13],y=e[14],S=e[15],I=i*h-r*d,z=i*p-l*d,w=i*m-f*d,P=r*p-l*h,N=r*m-f*h,L=l*m-f*p,T=x*C-v*b,U=x*y-_*b,W=x*S-M*b,H=v*y-_*C,et=v*S-M*C,pt=_*S-M*y,St=I*pt-z*et+w*H+P*W-N*U+L*T;if(St===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/St;return e[0]=(h*pt-p*et+m*H)*Q,e[1]=(l*et-r*pt-f*H)*Q,e[2]=(C*L-y*N+S*P)*Q,e[3]=(_*N-v*L-M*P)*Q,e[4]=(p*W-d*pt-m*U)*Q,e[5]=(i*pt-l*W+f*U)*Q,e[6]=(y*w-b*L-S*z)*Q,e[7]=(x*L-_*w+M*z)*Q,e[8]=(d*et-h*W+m*T)*Q,e[9]=(r*W-i*et-f*T)*Q,e[10]=(b*N-C*w+S*I)*Q,e[11]=(v*w-x*N-M*I)*Q,e[12]=(h*U-d*H-p*T)*Q,e[13]=(i*H-r*U+l*T)*Q,e[14]=(C*z-b*P-y*I)*Q,e[15]=(x*P-v*z+_*I)*Q,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,d=e.x,h=e.y,p=e.z,m=f*d,x=f*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,x*h+r,x*p-l*d,0,m*p-l*h,x*p+l*d,f*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,d){return this.set(1,r,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,x=d+d,v=h+h,_=f*m,M=f*x,b=f*v,C=d*x,y=d*v,S=h*v,I=p*m,z=p*x,w=p*v,P=r.x,N=r.y,L=r.z;return l[0]=(1-(C+S))*P,l[1]=(M+w)*P,l[2]=(b-z)*P,l[3]=0,l[4]=(M-w)*N,l[5]=(1-(_+S))*N,l[6]=(y+I)*N,l[7]=0,l[8]=(b+z)*L,l[9]=(y-I)*L,l[10]=(1-(_+C))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const f=this.determinantAffine();if(f===0)return r.set(1,1,1),i.identity(),this;let d=js.set(l[0],l[1],l[2]).length();const h=js.set(l[4],l[5],l[6]).length(),p=js.set(l[8],l[9],l[10]).length();f<0&&(d=-d),Hi.copy(this);const m=1/d,x=1/h,v=1/p;return Hi.elements[0]*=m,Hi.elements[1]*=m,Hi.elements[2]*=m,Hi.elements[4]*=x,Hi.elements[5]*=x,Hi.elements[6]*=x,Hi.elements[8]*=v,Hi.elements[9]*=v,Hi.elements[10]*=v,i.setFromRotationMatrix(Hi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,f,d,h=la,p=!1){const m=this.elements,x=2*f/(i-e),v=2*f/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let b,C;if(p)b=f/(d-f),C=d*f/(d-f);else if(h===la)b=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(h===Gl)b=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,f,d,h=la,p=!1){const m=this.elements,x=2/(i-e),v=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,C;if(p)b=1/(d-f),C=d/(d-f);else if(h===la)b=-2/(d-f),C=-(d+f)/(d-f);else if(h===Gl)b=-1/(d-f),C=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};of.prototype.isMatrix4=!0;let tn=of;const js=new it,Hi=new tn,ab=new it(0,0,0),rb=new it(1,1,1),hr=new it,mc=new it,fi=new it,gx=new tn,_x=new To;class Mr{constructor(e=0,i=0,r=0,l=Mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],p=l[1],m=l[5],x=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-we(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-we(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return gx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return _x.setFromEuler(this),this.setFromQuaternion(_x,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mr.DEFAULT_ORDER="XYZ";class NS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sb=0;const vx=new it,Ks=new To,Aa=new tn,gc=new it,El=new it,ob=new it,lb=new To,xx=new it(1,0,0),Sx=new it(0,1,0),yx=new it(0,0,1),Mx={type:"added"},ub={type:"removed"},Qs={type:"childadded",child:null},Kh={type:"childremoved",child:null};class Sn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new it,i=new Mr,r=new To,l=new it(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new fe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new NS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(xx,e)}rotateY(e){return this.rotateOnAxis(Sx,e)}rotateZ(e){return this.rotateOnAxis(yx,e)}translateOnAxis(e,i){return vx.copy(e).applyQuaternion(this.quaternion),this.position.add(vx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(xx,e)}translateY(e){return this.translateOnAxis(Sx,e)}translateZ(e){return this.translateOnAxis(yx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gc.copy(e):gc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(El,gc,this.up):Aa.lookAt(gc,El,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Aa),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ub),Kh.child=e,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mx),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,lb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*r-f[8]*l,f[13]+=r-f[1]*i-f[5]*r-f[9]*l,f[14]+=l-f[2]*i-f[6]*r-f[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];f(e.shapes,v)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(e.materials,this.material[p]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),v=d(e.shapes),_=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const p=[];for(const m in h){const x=h[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new it(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class po extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),S=this._getHandJoint(m,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=x.position.distanceTo(v.position),M=.02,b=.005;m.inputState.pinching&&_>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new po;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const US={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Jh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ee{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=Nm(e,1),i=we(i,0,1),r=we(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Jh(d,f,e+1/3),this.g=Jh(d,f,e),this.b=Jh(d,f,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=ei){function r(f){f!==void 0&&parseFloat(f)<1&&ae("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:ae("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const r=US[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return De.workingToColorSpace(Bn.copy(this),e),Math.round(we(Bn.r*255,0,255))*65536+Math.round(we(Bn.g*255,0,255))*256+Math.round(we(Bn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,l=Bn.g,f=Bn.b,d=Math.max(r,l,f),h=Math.min(r,l,f);let p,m;const x=(h+d)/2;if(h===d)p=0,m=0;else{const v=d-h;switch(m=x<=.5?v/(d+h):v/(2-d-h),d){case r:p=(l-f)/v+(l<f?6:0);break;case l:p=(f-r)/v+2;break;case f:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=ei){De.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,l=Bn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+i,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(pr),e.getHSL(_c);const r=Bl(pr.h,_c.h,i),l=Bl(pr.s,_c.s,i),f=Bl(pr.l,_c.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Ee;Ee.NAMES=US;class fb extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mr,this.environmentIntensity=1,this.environmentRotation=new Mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Gi=new it,Ra=new it,$h=new it,Ca=new it,Js=new it,$s=new it,Ex=new it,tp=new it,ep=new it,np=new it,ip=new sn,ap=new sn,rp=new sn;class Ni{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Gi.subVectors(e,i),l.cross(Gi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Gi.subVectors(l,i),Ra.subVectors(r,i),$h.subVectors(e,i);const d=Gi.dot(Gi),h=Gi.dot(Ra),p=Gi.dot($h),m=Ra.dot(Ra),x=Ra.dot($h),v=d*m-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,M=(m*p-h*x)*_,b=(d*x-h*p)*_;return f.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,r,l,f,d,h,p){return this.getBarycoord(e,i,r,l,Ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ca.x),p.addScaledVector(d,Ca.y),p.addScaledVector(h,Ca.z),p)}static getInterpolatedAttribute(e,i,r,l,f,d){return ip.setScalar(0),ap.setScalar(0),rp.setScalar(0),ip.fromBufferAttribute(e,i),ap.fromBufferAttribute(e,r),rp.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(ip,f.x),d.addScaledVector(ap,f.y),d.addScaledVector(rp,f.z),d}static isFrontFacing(e,i,r,l){return Gi.subVectors(r,i),Ra.subVectors(e,i),Gi.cross(Ra).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Gi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Ni.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let d,h;Js.subVectors(l,r),$s.subVectors(f,r),tp.subVectors(e,r);const p=Js.dot(tp),m=$s.dot(tp);if(p<=0&&m<=0)return i.copy(r);ep.subVectors(e,l);const x=Js.dot(ep),v=$s.dot(ep);if(x>=0&&v<=x)return i.copy(l);const _=p*v-x*m;if(_<=0&&p>=0&&x<=0)return d=p/(p-x),i.copy(r).addScaledVector(Js,d);np.subVectors(e,f);const M=Js.dot(np),b=$s.dot(np);if(b>=0&&M<=b)return i.copy(f);const C=M*m-p*b;if(C<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(r).addScaledVector($s,h);const y=x*b-M*v;if(y<=0&&v-x>=0&&M-b>=0)return Ex.subVectors(f,l),h=(v-x)/(v-x+(M-b)),i.copy(l).addScaledVector(Ex,h);const S=1/(y+C+_);return d=C*S,h=_*S,i.copy(r).addScaledVector(Js,d).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class kl{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Vi):Vi.fromBufferAttribute(f,d),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),xc.subVectors(this.max,Tl),to.subVectors(e.a,Tl),eo.subVectors(e.b,Tl),no.subVectors(e.c,Tl),mr.subVectors(eo,to),gr.subVectors(no,eo),Yr.subVectors(to,no);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Yr.z,Yr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Yr.z,0,-Yr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Yr.y,Yr.x,0];return!sp(i,to,eo,no,xc)||(i=[1,0,0,0,1,0,0,0,1],!sp(i,to,eo,no,xc))?!1:(Sc.crossVectors(mr,gr),i=[Sc.x,Sc.y,Sc.z],sp(i,to,eo,no,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new it,new it,new it,new it,new it,new it,new it,new it],Vi=new it,vc=new kl,to=new it,eo=new it,no=new it,mr=new it,gr=new it,Yr=new it,Tl=new it,xc=new it,Sc=new it,Zr=new it;function sp(o,e,i,r,l){for(let f=0,d=o.length-3;f<=d;f+=3){Zr.fromArray(o,f);const h=l.x*Math.abs(Zr.x)+l.y*Math.abs(Zr.y)+l.z*Math.abs(Zr.z),p=e.dot(Zr),m=i.dot(Zr),x=r.dot(Zr);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>h)return!1}return!0}const _n=new it,yc=new _e;let db=0;class mi extends rs{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=pm,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ye(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array),l=Ye(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array),l=Ye(l,this.array),f=Ye(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class LS extends mi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class OS extends mi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class gi extends mi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const hb=new kl,bl=new it,op=new it;class ql{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):hb.setFromPoints(e).getCenter(r);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const i=bl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(op.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(op)),this.expandByPoint(bl.copy(e.center).sub(op))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pb=0;const Ci=new tn,lp=new Sn,io=new it,di=new kl,Al=new kl,Rn=new it;class Zn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UT(e)?OS:LS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new fe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,i,r){return Ci.makeTranslation(e,i,r),this.applyMatrix4(Ci),this}scale(e,i,r){return Ci.makeScale(e,i,r),this.applyMatrix4(Ci),this}lookAt(e){return lp.lookAt(e),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];di.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];Al.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(di.min,Al.min),di.expandByPoint(Rn),Rn.addVectors(di.max,Al.max),di.expandByPoint(Rn)):(di.expandByPoint(Al.min),di.expandByPoint(Al.max))}di.getCenter(r);let l=0;for(let f=0,d=e.count;f<d;f++)Rn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,x=h.count;m<x;m++)Rn.fromBufferAttribute(h,m),p&&(io.fromBufferAttribute(e,m),Rn.add(io)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new mi(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<r.count;T++)h[T]=new it,p[T]=new it;const m=new it,x=new it,v=new it,_=new _e,M=new _e,b=new _e,C=new it,y=new it;function S(T,U,W){m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,U),v.fromBufferAttribute(r,W),_.fromBufferAttribute(f,T),M.fromBufferAttribute(f,U),b.fromBufferAttribute(f,W),x.sub(m),v.sub(m),M.sub(_),b.sub(_);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(C.copy(x).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(H),h[T].add(C),h[U].add(C),h[W].add(C),p[T].add(y),p[U].add(y),p[W].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,U=I.length;T<U;++T){const W=I[T],H=W.start,et=W.count;for(let pt=H,St=H+et;pt<St;pt+=3)S(e.getX(pt+0),e.getX(pt+1),e.getX(pt+2))}const z=new it,w=new it,P=new it,N=new it;function L(T){P.fromBufferAttribute(l,T),N.copy(P);const U=h[T];z.copy(U),z.sub(P.multiplyScalar(P.dot(U))).normalize(),w.crossVectors(N,U);const H=w.dot(p[T])<0?-1:1;d.setXYZW(T,z.x,z.y,z.z,H)}for(let T=0,U=I.length;T<U;++T){const W=I[T],H=W.start,et=W.count;for(let pt=H,St=H+et;pt<St;pt+=3)L(e.getX(pt+0)),L(e.getX(pt+1)),L(e.getX(pt+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new mi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new it,f=new it,d=new it,h=new it,p=new it,m=new it,x=new it,v=new it;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),C=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,b),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),x.subVectors(d,f),v.subVectors(l,f),x.cross(v),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),h.add(x),p.add(x),m.add(x),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,f),v.subVectors(l,f),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,p){const m=h.array,x=h.itemSize,v=h.normalized,_=new m.constructor(p.length*x);let M=0,b=0;for(let C=0,y=p.length;C<y;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*x;for(let S=0;S<x;S++)_[b++]=m[M++]}return new mi(_,x,v)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zn,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let x=0,v=m.length;x<v;x++){const _=m[x],M=e(_,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,_=m.length;v<_;v++){const M=m[v];x.push(M.toJSON(e.data))}x.length>0&&(l[p]=x,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const x=l[m];this.setAttribute(m,x.clone(i))}const f=e.morphAttributes;for(const m in f){const x=[],v=f[m];for(let _=0,M=v.length;_<M;_++)x.push(v[_].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mb{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=pm,this.updateRanges=[],this.version=0,this.uuid=Oa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,f=this.stride;l<f;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new it;class nf{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)qn.fromBufferAttribute(this,i),qn.applyMatrix4(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)qn.fromBufferAttribute(this,i),qn.applyNormalMatrix(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)qn.fromBufferAttribute(this,i),qn.transformDirection(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ye(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Xi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Xi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Xi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Xi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array),l=Ye(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),r=Ye(r,this.array),l=Ye(l,this.array),f=Ye(f,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=f,this}clone(e){if(e===void 0){ef("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[l+f])}return new mi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ef("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[l+f])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let gb=0;class Er extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=go,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Rp,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ap&&(r.blendSrc=this.blendSrc),this.blendDst!==Rp&&(r.blendDst=this.blendDst),this.blendEquation!==Jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new _e().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class PS extends Er{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ao;const Rl=new it,ro=new it,so=new it,oo=new _e,Cl=new _e,IS=new tn,Mc=new it,wl=new it,Ec=new it,Tx=new _e,up=new _e,bx=new _e;class _b extends Sn{constructor(e=new PS){if(super(),this.isSprite=!0,this.type="Sprite",ao===void 0){ao=new Zn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new mb(i,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new nf(r,3,0,!1)),ao.setAttribute("uv",new nf(r,2,3,!1))}this.geometry=ao,this.material=e,this.center=new _e(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),IS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),so.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-so.z);const r=this.material.rotation;let l,f;r!==0&&(f=Math.cos(r),l=Math.sin(r));const d=this.center;Tc(Mc.set(-.5,-.5,0),so,d,ro,l,f),Tc(wl.set(.5,-.5,0),so,d,ro,l,f),Tc(Ec.set(.5,.5,0),so,d,ro,l,f),Tx.set(0,0),up.set(1,0),bx.set(1,1);let h=e.ray.intersectTriangle(Mc,wl,Ec,!1,Rl);if(h===null&&(Tc(wl.set(-.5,.5,0),so,d,ro,l,f),up.set(0,1),h=e.ray.intersectTriangle(Mc,Ec,wl,!1,Rl),h===null))return;const p=e.ray.origin.distanceTo(Rl);p<e.near||p>e.far||i.push({distance:p,point:Rl.clone(),uv:Ni.getInterpolation(Rl,Mc,wl,Ec,Tx,up,bx,new _e),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tc(o,e,i,r,l,f){oo.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Cl.x=f*oo.x-l*oo.y,Cl.y=l*oo.x+f*oo.y):Cl.copy(oo),o.copy(e),o.x+=Cl.x,o.y+=Cl.y,o.applyMatrix4(IS)}const Da=new it,cp=new it,bc=new it,_r=new it,fp=new it,Ac=new it,dp=new it;class Lm{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){cp.copy(e).add(i).multiplyScalar(.5),bc.copy(i).sub(e).normalize(),_r.copy(this.origin).sub(cp);const f=e.distanceTo(i)*.5,d=-this.direction.dot(bc),h=_r.dot(this.direction),p=-_r.dot(bc),m=_r.lengthSq(),x=Math.abs(1-d*d);let v,_,M,b;if(x>0)if(v=d*p-h,_=d*h-p,b=f*x,v>=0)if(_>=-b)if(_<=b){const C=1/x;v*=C,_*=C,M=v*(v+d*_+2*h)+_*(d*v+_+2*p)+m}else _=f,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*p)+m;else _=-f,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*p)+m;else _<=-b?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-p),f),M=-v*v+_*(_+2*p)+m):_<=b?(v=0,_=Math.min(Math.max(-f,-p),f),M=_*(_+2*p)+m):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-p),f),M=-v*v+_*(_+2*p)+m);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(cp).addScaledVector(bc,_),M}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),l=Da.dot(Da)-r*r,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,d,h,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,l=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,l=(e.min.x-_.x)*m),x>=0?(f=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(f=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||f>l||((f>r||isNaN(r))&&(r=f),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,r,l,f){fp.subVectors(i,e),Ac.subVectors(r,e),dp.crossVectors(fp,Ac);let d=this.direction.dot(dp),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;_r.subVectors(this.origin,e);const p=h*this.direction.dot(Ac.crossVectors(_r,Ac));if(p<0)return null;const m=h*this.direction.dot(fp.cross(_r));if(m<0||p+m>d)return null;const x=-h*_r.dot(dp);return x<0?null:this.at(x/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Om extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ax=new tn,jr=new Lm,Rc=new ql,Rx=new it,Cc=new it,wc=new it,Dc=new it,hp=new it,Nc=new it,Cx=new it,Uc=new it;class pi extends Sn{constructor(e=new Zn,i=new Om){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){Nc.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const x=h[p],v=f[p];x!==0&&(hp.fromBufferAttribute(v,e),d?Nc.addScaledVector(hp,x):Nc.addScaledVector(hp.sub(i),x))}i.add(Nc)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(f),jr.copy(e.ray).recast(e.near),!(Rc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Rc,Rx)===null||jr.origin.distanceToSquared(Rx)>(e.far-e.near)**2))&&(Ax.copy(f).invert(),jr.copy(e.ray).applyMatrix4(Ax),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,jr)))}_computeIntersections(e,i,r){let l;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,x=f.attributes.uv1,v=f.attributes.normal,_=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=d[y.materialIndex],I=Math.max(y.start,M.start),z=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let w=I,P=z;w<P;w+=3){const N=h.getX(w),L=h.getX(w+1),T=h.getX(w+2);l=Lc(this,S,e,r,m,x,v,N,L,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const I=h.getX(y),z=h.getX(y+1),w=h.getX(y+2);l=Lc(this,d,e,r,m,x,v,I,z,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=d[y.materialIndex],I=Math.max(y.start,M.start),z=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let w=I,P=z;w<P;w+=3){const N=w,L=w+1,T=w+2;l=Lc(this,S,e,r,m,x,v,N,L,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const I=y,z=y+1,w=y+2;l=Lc(this,d,e,r,m,x,v,I,z,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vb(o,e,i,r,l,f,d,h){let p;if(e.side===Yn?p=r.intersectTriangle(d,f,l,!0,h):p=r.intersectTriangle(l,f,d,e.side===yr,h),p===null)return null;Uc.copy(h),Uc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Uc);return m<i.near||m>i.far?null:{distance:m,point:Uc.clone(),object:o}}function Lc(o,e,i,r,l,f,d,h,p,m){o.getVertexPosition(h,Cc),o.getVertexPosition(p,wc),o.getVertexPosition(m,Dc);const x=vb(o,e,i,r,Cc,wc,Dc,Cx);if(x){const v=new it;Ni.getBarycoord(Cx,Cc,wc,Dc,v),l&&(x.uv=Ni.getInterpolatedAttribute(l,h,p,m,v,new _e)),f&&(x.uv1=Ni.getInterpolatedAttribute(f,h,p,m,v,new _e)),d&&(x.normal=Ni.getInterpolatedAttribute(d,h,p,m,v,new it),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new it,materialIndex:0};Ni.getNormal(Cc,wc,Dc,_.normal),x.face=_,x.barycoord=v}return x}class xb extends Pn{constructor(e=null,i=1,r=1,l,f,d,h,p,m=On,x=On,v,_){super(null,d,h,p,m,x,l,f,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pp=new it,Sb=new it,yb=new fe;class Qr{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=pp.subVectors(r,i).cross(Sb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(pp),f=this.normal.dot(l);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yb.getNormalMatrix(e),l=this.coplanarPoint(pp).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new ql,Mb=new _e(.5,.5),Oc=new it;class Pm{constructor(e=new Qr,i=new Qr,r=new Qr,l=new Qr,f=new Qr,d=new Qr){this.planes=[e,i,r,l,f,d]}set(e,i,r,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=la,r=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],p=f[2],m=f[3],x=f[4],v=f[5],_=f[6],M=f[7],b=f[8],C=f[9],y=f[10],S=f[11],I=f[12],z=f[13],w=f[14],P=f[15];if(l[0].setComponents(m-d,M-x,S-b,P-I).normalize(),l[1].setComponents(m+d,M+x,S+b,P+I).normalize(),l[2].setComponents(m+h,M+v,S+C,P+z).normalize(),l[3].setComponents(m-h,M-v,S-C,P-z).normalize(),r)l[4].setComponents(p,_,y,w).normalize(),l[5].setComponents(m-p,M-_,S-y,P-w).normalize();else if(l[4].setComponents(m-p,M-_,S-y,P-w).normalize(),i===la)l[5].setComponents(m+p,M+_,S+y,P+w).normalize();else if(i===Gl)l[5].setComponents(p,_,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const i=Mb.distanceTo(e.center);return Kr.radius=.7071067811865476+i,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zS extends Er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const af=new it,rf=new it,wx=new tn,Dl=new Lm,Pc=new ql,mp=new it,Dx=new it;class Eb extends Sn{constructor(e=new Zn,i=new zS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,f=i.count;l<f;l++)af.fromBufferAttribute(i,l-1),rf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=af.distanceTo(rf);e.setAttribute("lineDistance",new gi(r,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=f,e.ray.intersectsSphere(Pc)===!1)return;wx.copy(l).invert(),Dl.copy(e.ray).applyMatrix4(wx);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,x=r.index,_=r.attributes.position;if(x!==null){const M=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let C=M,y=b-1;C<y;C+=m){const S=x.getX(C),I=x.getX(C+1),z=Ic(this,e,Dl,p,S,I,C);z&&i.push(z)}if(this.isLineLoop){const C=x.getX(b-1),y=x.getX(M),S=Ic(this,e,Dl,p,C,y,b-1);S&&i.push(S)}}else{const M=Math.max(0,d.start),b=Math.min(_.count,d.start+d.count);for(let C=M,y=b-1;C<y;C+=m){const S=Ic(this,e,Dl,p,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=Ic(this,e,Dl,p,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Ic(o,e,i,r,l,f,d){const h=o.geometry.attributes.position;if(af.fromBufferAttribute(h,l),rf.fromBufferAttribute(h,f),i.distanceSqToSegment(af,rf,mp,Dx)>r)return;mp.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(mp);if(!(m<e.near||m>e.far))return{distance:m,point:Dx.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class BS extends Er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nx=new tn,mm=new Lm,zc=new ql,Bc=new it;class Tb extends Sn{constructor(e=new Zn,i=new BS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=f,e.ray.intersectsSphere(zc)===!1)return;Nx.copy(l).invert(),mm.copy(e.ray).applyMatrix4(Nx);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,v=r.attributes.position;if(m!==null){const _=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let b=_,C=M;b<C;b++){const y=m.getX(b);Bc.fromBufferAttribute(v,y),Ux(Bc,y,p,l,e,i,this)}}else{const _=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let b=_,C=M;b<C;b++)Bc.fromBufferAttribute(v,b),Ux(Bc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Ux(o,e,i,r,l,f,d){const h=mm.distanceSqToPoint(o);if(h<i){const p=new it;mm.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;f.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class FS extends Pn{constructor(e=[],i=is,r,l,f,d,h,p,m,x){super(e,i,r,l,f,d,h,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bb extends Pn{constructor(e,i,r,l,f,d,h,p,m){super(e,i,r,l,f,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mo extends Pn{constructor(e,i,r=fa,l,f,d,h=On,p=On,m,x=za,v=1){if(x!==za&&x!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,f,d,h,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ab extends Mo{constructor(e,i=fa,r=is,l,f,d=On,h=On,p,m=za){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,r,l,f,d,h,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class HS extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wl extends Zn{constructor(e=1,i=1,r=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],x=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,r,i,e,d,f,0),b("z","y","x",1,-1,r,i,-e,d,f,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,f,4),b("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(p),this.setAttribute("position",new gi(m,3)),this.setAttribute("normal",new gi(x,3)),this.setAttribute("uv",new gi(v,2));function b(C,y,S,I,z,w,P,N,L,T,U){const W=w/L,H=P/T,et=w/2,pt=P/2,St=N/2,Q=L+1,k=T+1;let V=0,rt=0;const _t=new it;for(let K=0;K<k;K++){const Tt=K*H-pt;for(let Pt=0;Pt<Q;Pt++){const de=Pt*W-et;_t[C]=de*I,_t[y]=Tt*z,_t[S]=St,m.push(_t.x,_t.y,_t.z),_t[C]=0,_t[y]=0,_t[S]=N>0?1:-1,x.push(_t.x,_t.y,_t.z),v.push(Pt/L),v.push(1-K/T),V+=1}}for(let K=0;K<T;K++)for(let Tt=0;Tt<L;Tt++){const Pt=_+Tt+Q*K,de=_+Tt+Q*(K+1),F=_+(Tt+1)+Q*(K+1),tt=_+(Tt+1)+Q*K;p.push(Pt,de,tt),p.push(de,F,tt),rt+=6}h.addGroup(M,rt,U),M+=rt,_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uf extends Zn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,x=p+1,v=e/h,_=i/p,M=[],b=[],C=[],y=[];for(let S=0;S<x;S++){const I=S*_-d;for(let z=0;z<m;z++){const w=z*v-f;b.push(w,-I,0),C.push(0,0,1),y.push(z/h),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let I=0;I<h;I++){const z=I+m*S,w=I+m*(S+1),P=I+1+m*(S+1),N=I+1+m*S;M.push(z,w,N),M.push(w,P,N)}this.setIndex(M),this.setAttribute("position",new gi(b,3)),this.setAttribute("normal",new gi(C,3)),this.setAttribute("uv",new gi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.width,e.height,e.widthSegments,e.heightSegments)}}class mo extends Zn{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let m=0;const x=[],v=new it,_=new it,M=[],b=[],C=[],y=[];for(let S=0;S<=r;S++){const I=[],z=S/r,w=d+z*h,P=e*Math.cos(w),N=Math.sqrt(e*e-P*P);let L=0;S===0&&d===0?L=.5/i:S===r&&p===Math.PI&&(L=-.5/i);for(let T=0;T<=i;T++){const U=T/i,W=l+U*f;v.x=-N*Math.cos(W),v.y=P,v.z=N*Math.sin(W),b.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),y.push(U+L,1-z),I.push(m++)}x.push(I)}for(let S=0;S<r;S++)for(let I=0;I<i;I++){const z=x[S][I+1],w=x[S][I],P=x[S+1][I],N=x[S+1][I+1];(S!==0||d>0)&&M.push(z,w,N),(S!==r-1||p<Math.PI)&&M.push(w,P,N)}this.setIndex(M),this.setAttribute("position",new gi(b,3)),this.setAttribute("normal",new gi(C,3)),this.setAttribute("uv",new gi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Eo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(Lx(l))l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(Lx(l[0])){const f=[];for(let d=0,h=l.length;d<h;d++)f[d]=l[d].clone();e[i][r]=f}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Wn(o){const e={};for(let i=0;i<o.length;i++){const r=Eo(o[i]);for(const l in r)e[l]=r[l]}return e}function Lx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Rb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function GS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const Cb={clone:Eo,merge:Wn};var wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=Rb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Ee().setHex(l.value);break;case"v2":this.uniforms[r].value=new _e().fromArray(l.value);break;case"v3":this.uniforms[r].value=new it().fromArray(l.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new fe().fromArray(l.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Nb extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ub extends Er{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.combine=Mm,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lb extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ob extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gp={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Ox(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Ox(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Ox(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Pb{constructor(e,i,r){const l=this;let f=!1,d=0,h=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){h++,f===!1&&l.onStart!==void 0&&l.onStart(x,d,h),f=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,h),d===h&&(f=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,_=m.length;v<_;v+=2){const M=m[v],b=m[v+1];if(M.global&&(M.lastIndex=0),M.test(x))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ib=new Pb;class Im{constructor(e){this.manager=e!==void 0?e:Ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,f){r.load(e,l,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Im.DEFAULT_MATERIAL_NAME="__DEFAULT";const lo=new WeakMap;class zb extends Im{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=this,d=gp.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(e),setTimeout(function(){i&&i(d),f.manager.itemEnd(e)},0);else{let v=lo.get(d);v===void 0&&(v=[],lo.set(d,v)),v.push({onLoad:i,onError:l})}return d}const h=Vl("img");function p(){x(),i&&i(this);const v=lo.get(this)||[];for(let _=0;_<v.length;_++){const M=v[_];M.onLoad&&M.onLoad(this)}lo.delete(this),f.manager.itemEnd(e)}function m(v){x(),l&&l(v),gp.remove(`image:${e}`);const _=lo.get(this)||[];for(let M=0;M<_.length;M++){const b=_[M];b.onError&&b.onError(v)}lo.delete(this),f.manager.itemError(e),f.manager.itemEnd(e)}function x(){h.removeEventListener("load",p,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),gp.add(`image:${e}`,h),f.manager.itemStart(e),h.src=e,h}}class Bb extends Im{constructor(e){super(e)}load(e,i,r,l){const f=new Pn,d=new zb(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},r,l),f}}class Fb extends Sn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const _p=new tn,Px=new it,Ix=new it;class Hb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pm,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Px.setFromMatrixPosition(e.matrixWorld),i.position.copy(Px),Ix.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ix),i.updateMatrixWorld(),_p.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_p,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Gl||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(_p)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fc=new it,Hc=new To,aa=new it;class VS extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fc,Hc,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Hc,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Fc,Hc,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Hc,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vr=new it,zx=new _e,Bx=new _e;class wi extends VS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,i){return this.getViewBounds(e,zx,Bx),i.subVectors(Bx,zx)}setViewOffset(e,i,r,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class zm extends VS{constructor(e=-1,i=1,r=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=x*this.view.offsetY,p=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Gb extends Hb{constructor(){super(new zm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vb extends Fb{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new Gb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const uo=-90,co=1;class Xb extends Sn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(uo,co,e,i);l.layers=this.layers,this.add(l);const f=new wi(uo,co,e,i);f.layers=this.layers,this.add(f);const d=new wi(uo,co,e,i);d.layers=this.layers,this.add(d);const h=new wi(uo,co,e,i);h.layers=this.layers,this.add(h);const p=new wi(uo,co,e,i);p.layers=this.layers,this.add(p);const m=new wi(uo,co,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,d,h,p]=i;for(const m of i)this.remove(m);if(e===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,_,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class kb extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ae("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Vm=class Vm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const f=this.elements;return f[0]=e,f[2]=i,f[1]=r,f[3]=l,this}};Vm.prototype.isMatrix2=!0;let Fx=Vm;function Hx(o,e,i,r){const l=Wb(r);switch(i){case AS:return o*e;case CS:return o*e/l.components*l.byteLength;case Am:return o*e/l.components*l.byteLength;case as:return o*e*2/l.components*l.byteLength;case Rm:return o*e*2/l.components*l.byteLength;case RS:return o*e*3/l.components*l.byteLength;case ki:return o*e*4/l.components*l.byteLength;case Cm:return o*e*4/l.components*l.byteLength;case qc:case Wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yc:case Zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bp:case Hp:return Math.max(o,16)*Math.max(e,8)/4;case zp:case Fp:return Math.max(o,8)*Math.max(e,8)/2;case Gp:case Vp:case kp:case qp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xp:case Qc:case Wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case jp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $p:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case tm:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case nm:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case im:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case am:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case om:case lm:case um:return Math.ceil(o/4)*Math.ceil(e/4)*16;case cm:case fm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Jc:case dm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Wb(o){switch(o){case hi:case MS:return{byteLength:1,components:1};case Fl:case ES:case Ia:return{byteLength:2,components:1};case Tm:case bm:return{byteLength:2,components:4};case fa:case Em:case oa:return{byteLength:4,components:1};case TS:case bS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ym}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ym);function XS(){let o=null,e=!1,i=null,r=null;function l(f,d){i(f,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function Yb(o){const e=new WeakMap;function i(h,p){const m=h.array,x=h.usage,v=m.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,m,x),h.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const x=p.array,v=p.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,x);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,v[_]=C)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];o.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:f,update:d}}var Zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jb=`#ifdef USE_ALPHAHASH
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
#endif`,Kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o1=`#ifdef USE_IRIDESCENCE
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
#endif`,l1=`#ifdef USE_BUMPMAP
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,x1=`vec3 transformedNormal = objectNormal;
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
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P1=`#ifdef USE_GRADIENTMAP
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
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F1=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,W1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aA=`#if defined( USE_POINTS_UV )
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
#endif`,rA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
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
#endif`,fA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_A=`#ifdef USE_NORMALMAP
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
#endif`,vA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,TA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,LA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,OA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PA=`#ifdef USE_SKINNING
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
#endif`,IA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
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
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VA=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XA=`#ifdef USE_TRANSMISSION
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
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jA=`uniform sampler2D t2D;
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`#include <common>
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
}`,eR=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nR=`#define DISTANCE
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
}`,iR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`uniform float scale;
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
}`,oR=`uniform vec3 diffuse;
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
}`,lR=`#include <common>
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
}`,uR=`uniform vec3 diffuse;
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
}`,cR=`#define LAMBERT
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
}`,fR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,dR=`#define MATCAP
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
}`,hR=`#define MATCAP
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
}`,pR=`#define NORMAL
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
}`,mR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gR=`#define PHONG
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
}`,_R=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,vR=`#define STANDARD
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
}`,xR=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,SR=`#define TOON
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
}`,yR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,MR=`uniform float size;
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
}`,ER=`uniform vec3 diffuse;
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
}`,TR=`#include <common>
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
}`,bR=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,AR=`uniform float rotation;
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
}`,RR=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Zb,alphahash_pars_fragment:jb,alphamap_fragment:Kb,alphamap_pars_fragment:Qb,alphatest_fragment:Jb,alphatest_pars_fragment:$b,aomap_fragment:t1,aomap_pars_fragment:e1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:a1,beginnormal_vertex:r1,bsdfs:s1,iridescence_fragment:o1,bumpmap_pars_fragment:l1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:d1,color_fragment:h1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:_1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:x1,displacementmap_pars_vertex:S1,displacementmap_vertex:y1,emissivemap_fragment:M1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:b1,envmap_fragment:A1,envmap_common_pars_fragment:R1,envmap_pars_fragment:C1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:H1,envmap_vertex:D1,fog_vertex:N1,fog_pars_vertex:U1,fog_fragment:L1,fog_pars_fragment:O1,gradientmap_pars_fragment:P1,lightmap_pars_fragment:I1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:B1,lights_pars_begin:F1,lights_toon_fragment:G1,lights_toon_pars_fragment:V1,lights_phong_fragment:X1,lights_phong_pars_fragment:k1,lights_physical_fragment:q1,lights_physical_pars_fragment:W1,lights_fragment_begin:Y1,lights_fragment_maps:Z1,lights_fragment_end:j1,lightprobes_pars_fragment:K1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:tA,map_fragment:eA,map_pars_fragment:nA,map_particle_fragment:iA,map_particle_pars_fragment:aA,metalnessmap_fragment:rA,metalnessmap_pars_fragment:sA,morphinstance_vertex:oA,morphcolor_vertex:lA,morphnormal_vertex:uA,morphtarget_pars_vertex:cA,morphtarget_vertex:fA,normal_fragment_begin:dA,normal_fragment_maps:hA,normal_pars_fragment:pA,normal_pars_vertex:mA,normal_vertex:gA,normalmap_pars_fragment:_A,clearcoat_normal_fragment_begin:vA,clearcoat_normal_fragment_maps:xA,clearcoat_pars_fragment:SA,iridescence_pars_fragment:yA,opaque_fragment:MA,packing:EA,premultiplied_alpha_fragment:TA,project_vertex:bA,dithering_fragment:AA,dithering_pars_fragment:RA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:DA,shadowmap_pars_vertex:NA,shadowmap_vertex:UA,shadowmask_pars_fragment:LA,skinbase_vertex:OA,skinning_pars_vertex:PA,skinning_vertex:IA,skinnormal_vertex:zA,specularmap_fragment:BA,specularmap_pars_fragment:FA,tonemapping_fragment:HA,tonemapping_pars_fragment:GA,transmission_fragment:VA,transmission_pars_fragment:XA,uv_pars_fragment:kA,uv_pars_vertex:qA,uv_vertex:WA,worldpos_vertex:YA,background_vert:ZA,background_frag:jA,backgroundCube_vert:KA,backgroundCube_frag:QA,cube_vert:JA,cube_frag:$A,depth_vert:tR,depth_frag:eR,distance_vert:nR,distance_frag:iR,equirect_vert:aR,equirect_frag:rR,linedashed_vert:sR,linedashed_frag:oR,meshbasic_vert:lR,meshbasic_frag:uR,meshlambert_vert:cR,meshlambert_frag:fR,meshmatcap_vert:dR,meshmatcap_frag:hR,meshnormal_vert:pR,meshnormal_frag:mR,meshphong_vert:gR,meshphong_frag:_R,meshphysical_vert:vR,meshphysical_frag:xR,meshtoon_vert:SR,meshtoon_frag:yR,points_vert:MR,points_frag:ER,shadow_vert:TR,shadow_frag:bR,sprite_vert:AR,sprite_frag:RR},Ht={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new it},probesMax:{value:new it},probesResolution:{value:new it}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},sa={basic:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Wn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Wn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Wn([Ht.points,Ht.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Wn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Wn([Ht.common,Ht.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Wn([Ht.sprite,Ht.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Wn([Ht.common,Ht.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Wn([Ht.lights,Ht.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};sa.physical={uniforms:Wn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Gc={r:0,b:0,g:0},CR=new tn,kS=new fe;kS.set(-1,0,0,0,1,0,0,0,1);function wR(o,e,i,r,l,f){const d=new Ee(0);let h=l===!0?0:1,p,m,x=null,v=0,_=null;function M(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const w=I.backgroundBlurriness>0;z=e.get(z,w)}return z}function b(I){let z=!1;const w=M(I);w===null?y(d,h):w&&w.isColor&&(y(w,1),z=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(I,z){const w=M(z);w&&(w.isCubeTexture||w.mapping===lf)?(m===void 0&&(m=new pi(new Wl(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Eo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(CR.makeRotationFromEuler(z.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(kS),m.material.toneMapped=De.getTransfer(w.colorSpace)!==We,(x!==w||v!==w.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=w,v=w.version,_=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new pi(new uf(2,2),new Ui({name:"BackgroundMaterial",uniforms:Eo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=De.getTransfer(w.colorSpace)!==We,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(x!==w||v!==w.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,x=w,v=w.version,_=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function y(I,z){I.getRGB(Gc,GS(o)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,z,f)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,z=1){d.set(I),h=z,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(d,h)},render:b,addToRenderList:C,dispose:S}}function DR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let f=l,d=!1;function h(H,et,pt,St,Q){let k=!1;const V=v(H,St,pt,et);f!==V&&(f=V,m(f.object)),k=M(H,St,pt,Q),k&&b(H,St,pt,Q),Q!==null&&e.update(Q,o.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,w(H,et,pt,St),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return o.createVertexArray()}function m(H){return o.bindVertexArray(H)}function x(H){return o.deleteVertexArray(H)}function v(H,et,pt,St){const Q=St.wireframe===!0;let k=r[et.id];k===void 0&&(k={},r[et.id]=k);const V=H.isInstancedMesh===!0?H.id:0;let rt=k[V];rt===void 0&&(rt={},k[V]=rt);let _t=rt[pt.id];_t===void 0&&(_t={},rt[pt.id]=_t);let K=_t[Q];return K===void 0&&(K=_(p()),_t[Q]=K),K}function _(H){const et=[],pt=[],St=[];for(let Q=0;Q<i;Q++)et[Q]=0,pt[Q]=0,St[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:pt,attributeDivisors:St,object:H,attributes:{},index:null}}function M(H,et,pt,St){const Q=f.attributes,k=et.attributes;let V=0;const rt=pt.getAttributes();for(const _t in rt)if(rt[_t].location>=0){const Tt=Q[_t];let Pt=k[_t];if(Pt===void 0&&(_t==="instanceMatrix"&&H.instanceMatrix&&(Pt=H.instanceMatrix),_t==="instanceColor"&&H.instanceColor&&(Pt=H.instanceColor)),Tt===void 0||Tt.attribute!==Pt||Pt&&Tt.data!==Pt.data)return!0;V++}return f.attributesNum!==V||f.index!==St}function b(H,et,pt,St){const Q={},k=et.attributes;let V=0;const rt=pt.getAttributes();for(const _t in rt)if(rt[_t].location>=0){let Tt=k[_t];Tt===void 0&&(_t==="instanceMatrix"&&H.instanceMatrix&&(Tt=H.instanceMatrix),_t==="instanceColor"&&H.instanceColor&&(Tt=H.instanceColor));const Pt={};Pt.attribute=Tt,Tt&&Tt.data&&(Pt.data=Tt.data),Q[_t]=Pt,V++}f.attributes=Q,f.attributesNum=V,f.index=St}function C(){const H=f.newAttributes;for(let et=0,pt=H.length;et<pt;et++)H[et]=0}function y(H){S(H,0)}function S(H,et){const pt=f.newAttributes,St=f.enabledAttributes,Q=f.attributeDivisors;pt[H]=1,St[H]===0&&(o.enableVertexAttribArray(H),St[H]=1),Q[H]!==et&&(o.vertexAttribDivisor(H,et),Q[H]=et)}function I(){const H=f.newAttributes,et=f.enabledAttributes;for(let pt=0,St=et.length;pt<St;pt++)et[pt]!==H[pt]&&(o.disableVertexAttribArray(pt),et[pt]=0)}function z(H,et,pt,St,Q,k,V){V===!0?o.vertexAttribIPointer(H,et,pt,Q,k):o.vertexAttribPointer(H,et,pt,St,Q,k)}function w(H,et,pt,St){C();const Q=St.attributes,k=pt.getAttributes(),V=et.defaultAttributeValues;for(const rt in k){const _t=k[rt];if(_t.location>=0){let K=Q[rt];if(K===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),K!==void 0){const Tt=K.normalized,Pt=K.itemSize,de=e.get(K);if(de===void 0)continue;const F=de.buffer,tt=de.type,Y=de.bytesPerElement,dt=tt===o.INT||tt===o.UNSIGNED_INT||K.gpuType===Em;if(K.isInterleavedBufferAttribute){const mt=K.data,Rt=mt.stride,wt=K.offset;if(mt.isInstancedInterleavedBuffer){for(let Et=0;Et<_t.locationSize;Et++)S(_t.location+Et,mt.meshPerAttribute);H.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Et=0;Et<_t.locationSize;Et++)y(_t.location+Et);o.bindBuffer(o.ARRAY_BUFFER,F);for(let Et=0;Et<_t.locationSize;Et++)z(_t.location+Et,Pt/_t.locationSize,tt,Tt,Rt*Y,(wt+Pt/_t.locationSize*Et)*Y,dt)}else{if(K.isInstancedBufferAttribute){for(let mt=0;mt<_t.locationSize;mt++)S(_t.location+mt,K.meshPerAttribute);H.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let mt=0;mt<_t.locationSize;mt++)y(_t.location+mt);o.bindBuffer(o.ARRAY_BUFFER,F);for(let mt=0;mt<_t.locationSize;mt++)z(_t.location+mt,Pt/_t.locationSize,tt,Tt,Pt*Y,Pt/_t.locationSize*mt*Y,dt)}}else if(V!==void 0){const Tt=V[rt];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(_t.location,Tt);break;case 3:o.vertexAttrib3fv(_t.location,Tt);break;case 4:o.vertexAttrib4fv(_t.location,Tt);break;default:o.vertexAttrib1fv(_t.location,Tt)}}}}I()}function P(){U();for(const H in r){const et=r[H];for(const pt in et){const St=et[pt];for(const Q in St){const k=St[Q];for(const V in k)x(k[V].object),delete k[V];delete St[Q]}}delete r[H]}}function N(H){if(r[H.id]===void 0)return;const et=r[H.id];for(const pt in et){const St=et[pt];for(const Q in St){const k=St[Q];for(const V in k)x(k[V].object),delete k[V];delete St[Q]}}delete r[H.id]}function L(H){for(const et in r){const pt=r[et];for(const St in pt){const Q=pt[St];if(Q[H.id]===void 0)continue;const k=Q[H.id];for(const V in k)x(k[V].object),delete k[V];delete Q[H.id]}}}function T(H){for(const et in r){const pt=r[et],St=H.isInstancedMesh===!0?H.id:0,Q=pt[St];if(Q!==void 0){for(const k in Q){const V=Q[k];for(const rt in V)x(V[rt].object),delete V[rt];delete Q[k]}delete pt[St],Object.keys(pt).length===0&&delete r[et]}}}function U(){W(),d=!0,f!==l&&(f=l,m(f.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:L,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function NR(o,e,i){let r;function l(p){r=p}function f(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,x){x!==0&&(o.drawArraysInstanced(r,p,m,x),i.update(m,r,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let _=0;for(let M=0;M<x;M++)_+=m[M];i.update(_,r,1)}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function UR(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(L){return!(L!==ki&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const T=L===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==hi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==oa&&!T)}function p(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=p(m);x!==m&&(ae("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:w,maxSamples:P,samples:N}}function LR(o){const e=this;let i=null,r=0,l=!1,f=!1;const d=new Qr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||l;return l=_,r=v.length,M},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!l||b===null||b.length===0||f&&!y)f?x(null):m();else{const I=f?0:r,z=I*4;let w=S.clippingState||null;p.value=w,w=x(b,_,z,M);for(let P=0;P!==z;++P)w[P]=i[P];S.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,_,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=p.value,b!==!0||y===null){const S=M+C*4,I=_.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<S)&&(y=new Float32Array(S));for(let z=0,w=M;z!==C;++z,w+=4)d.copy(v[z]).applyMatrix4(I,h),d.normal.toArray(y,w),y[w+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Sr=4,Gx=[.125,.215,.35,.446,.526,.582],$r=20,OR=256,Nl=new zm,Vx=new Ee;let vp=null,xp=0,Sp=0,yp=!1;const PR=new it;class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,f={}){const{size:d=256,position:h=PR}=f;vp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),Sp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vp,xp,Sp),this._renderer.xr.enabled=yp,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===is||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),Sp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ia,format:ki,colorSpace:$c,depthBuffer:!1},l=kx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kx(e,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IR(f)),this._blurMaterial=BR(f,e,i),this._ggxMaterial=zR(f,e,i)}return l}_compileMaterial(e){const i=new pi(new Zn,e);this._renderer.compile(i,Nl)}_sceneToCubeUV(e,i,r,l,f){const p=new wi(90,1,i,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(Vx),v.toneMapping=ua,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Wl,new Om({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,S=!0):(y.color.copy(Vx),S=!0);for(let z=0;z<6;z++){const w=z%3;w===0?(p.up.set(0,m[z],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+x[z],f.y,f.z)):w===1?(p.up.set(0,0,m[z]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+x[z],f.z)):(p.up.set(0,m[z],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+x[z]));const P=this._cubeSize;fo(l,w*P,z>2?P:0,P,P),v.setRenderTarget(l),S&&v.render(C,p),v.render(e,p)}v.toneMapping=M,v.autoClear=_,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===is||e.mapping===yo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qx());const f=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;fo(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Nl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),_=0+m*1.25,M=v*_,{_lodMax:b}=this,C=this._sizeLods[r],y=3*C*(r>b-Sr?r-b+Sr:0),S=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=b-i,fo(f,y,S,3*C,2*C),l.setRenderTarget(f),l.render(h,Nl),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=b-r,fo(e,y,S,3*C,2*C),l.setRenderTarget(e),l.render(h,Nl)}_blur(e,i,r,l,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",f),this._halfBlur(d,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=m;const _=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*$r-1),C=f/b,y=isFinite(f)?1+Math.floor(x*C):$r;y>$r&&ae(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const S=[];let I=0;for(let L=0;L<$r;++L){const T=L/C,U=Math.exp(-T*T/2);S.push(U),L===0?I+=U:L<y&&(I+=2*U)}for(let L=0;L<S.length;L++)S[L]=S[L]/I;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:z}=this;_.dTheta.value=b,_.mipInt.value=z-r;const w=this._sizeLods[l],P=3*w*(l>z-Sr?l-z+Sr:0),N=4*(this._cubeSize-w);fo(i,P,N,3*w,2*w),p.setRenderTarget(i),p.render(v,Nl)}}function IR(o){const e=[],i=[],r=[];let l=o;const f=o-Sr+1+Gx.length;for(let d=0;d<f;d++){const h=Math.pow(2,l);e.push(h);let p=1/h;d>o-Sr?p=Gx[d-o+Sr-1]:d===0&&(p=0),i.push(p);const m=1/(h-2),x=-m,v=1+m,_=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,b=6,C=3,y=2,S=1,I=new Float32Array(C*b*M),z=new Float32Array(y*b*M),w=new Float32Array(S*b*M);for(let N=0;N<M;N++){const L=N%3*2/3-1,T=N>2?0:-1,U=[L,T,0,L+2/3,T,0,L+2/3,T+1,0,L,T,0,L+2/3,T+1,0,L,T+1,0];I.set(U,C*b*N),z.set(_,y*b*N);const W=[N,N,N,N,N,N];w.set(W,S*b*N)}const P=new Zn;P.setAttribute("position",new mi(I,C)),P.setAttribute("uv",new mi(z,y)),P.setAttribute("faceIndex",new mi(w,S)),r.push(new pi(P,null)),l>Sr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function kx(o,e,i){const r=new ca(o,e,i);return r.texture.mapping=lf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fo(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function zR(o,e,i){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function BR(o,e,i){const r=new Float32Array($r),l=new it(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cf(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function qx(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Wx(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}class qS extends ca{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new FS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wl(5,5,5),f=new Ui({name:"CubemapFromEquirect",uniforms:Eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:La});f.uniforms.tEquirect.value=i;const d=new pi(l,f),h=i.minFilter;return i.minFilter===ts&&(i.minFilter=Fn),new Xb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(f)}}function FR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(_,M=!1){return _==null?null:M?d(_):f(_)}function f(_){if(_&&_.isTexture){const M=_.mapping;if(M===Xh||M===kh)if(e.has(_)){const b=e.get(_).texture;return h(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new qS(b.height);return C.fromEquirectangularTexture(o,_),e.set(_,C),_.addEventListener("dispose",m),h(C.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const M=_.mapping,b=M===Xh||M===kh,C=M===is||M===yo;if(b||C){let y=i.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new Xx(o)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const I=_.image;return b&&I&&I.height>0||C&&I&&p(I)?(r===null&&(r=new Xx(o)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function h(_,M){return M===Xh?_.mapping=is:M===kh&&(_.mapping=yo),_}function p(_){let M=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&M++;return M===b}function m(_){const M=_.target;M.removeEventListener("dispose",m);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(_){const M=_.target;M.removeEventListener("dispose",x);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function HR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_o("WebGLRenderer: "+r+" extension not supported."),l}}}function GR(o,e,i,r){const l={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",d),delete l[_.id];const M=f.get(_);M&&(e.remove(M),f.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER)}function m(v){const _=[],M=v.index,b=v.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const I=M.array;C=M.version;for(let z=0,w=I.length;z<w;z+=3){const P=I[z+0],N=I[z+1],L=I[z+2];_.push(P,N,N,L,L,P)}}else{const I=b.array;C=b.version;for(let z=0,w=I.length/3-1;z<w;z+=3){const P=z+0,N=z+1,L=z+2;_.push(P,N,N,L,L,P)}}const y=new(b.count>=65535?OS:LS)(_,1);y.version=C;const S=f.get(v);S&&e.remove(S),f.set(v,y)}function x(v){const _=f.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&m(v)}else m(v);return f.get(v)}return{get:h,update:p,getWireframeAttribute:x}}function VR(o,e,i){let r;function l(v){r=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function p(v,_){o.drawElements(r,_,f,v*d),i.update(_,r,1)}function m(v,_,M){M!==0&&(o.drawElementsInstanced(r,_,f,v*d,M),i.update(_,r,M))}function x(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,f,v,0,M);let C=0;for(let y=0;y<M;y++)C+=_[y];i.update(C,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function XR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Le("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function kR(o,e,i){const r=new WeakMap,l=new sn;function f(d,h,p){const m=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let W=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",W)};var M=W;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let w=0;b===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let P=h.attributes.position.count*w,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*N*4*v),T=new DS(L,P,N,v);T.type=oa,T.needsUpdate=!0;const U=w*4;for(let H=0;H<v;H++){const et=S[H],pt=I[H],St=z[H],Q=P*N*4*H;for(let k=0;k<et.count;k++){const V=k*U;b===!0&&(l.fromBufferAttribute(et,k),L[Q+V+0]=l.x,L[Q+V+1]=l.y,L[Q+V+2]=l.z,L[Q+V+3]=0),C===!0&&(l.fromBufferAttribute(pt,k),L[Q+V+4]=l.x,L[Q+V+5]=l.y,L[Q+V+6]=l.z,L[Q+V+7]=0),y===!0&&(l.fromBufferAttribute(St,k),L[Q+V+8]=l.x,L[Q+V+9]=l.y,L[Q+V+10]=l.z,L[Q+V+11]=St.itemSize===4?l.w:1)}}_={count:v,texture:T,size:new _e(P,N)},r.set(h,_),h.addEventListener("dispose",W)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const C=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function qR(o,e,i,r,l){let f=new WeakMap;function d(m){const x=l.render.frame,v=m.geometry,_=e.get(m,v);if(f.get(_)!==x&&(e.update(_),f.set(_,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==x&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,x))),m.isSkinnedMesh){const M=m.skeleton;f.get(M)!==x&&(M.update(),f.set(M,x))}return _}function h(){f=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const WR={[pS]:"LINEAR_TONE_MAPPING",[mS]:"REINHARD_TONE_MAPPING",[gS]:"CINEON_TONE_MAPPING",[_S]:"ACES_FILMIC_TONE_MAPPING",[xS]:"AGX_TONE_MAPPING",[SS]:"NEUTRAL_TONE_MAPPING",[vS]:"CUSTOM_TONE_MAPPING"};function YR(o,e,i,r,l,f){const d=new ca(e,i,{type:o,depthBuffer:l,stencilBuffer:f,samples:r?4:0,depthTexture:l?new Mo(e,i):void 0}),h=new ca(e,i,{type:Ia,depthBuffer:!1,stencilBuffer:!1}),p=new Zn;p.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new gi([0,2,0,0,2,0],2));const m=new Nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new pi(p,m),v=new zm(-1,1,1,-1,0,1);let _=null,M=null,b=!1,C,y=null,S=[],I=!1;this.setSize=function(z,w){d.setSize(z,w),h.setSize(z,w);for(let P=0;P<S.length;P++){const N=S[P];N.setSize&&N.setSize(z,w)}},this.setEffects=function(z){S=z,I=S.length>0&&S[0].isRenderPass===!0;const w=d.width,P=d.height;for(let N=0;N<S.length;N++){const L=S[N];L.setSize&&L.setSize(w,P)}},this.begin=function(z,w){if(b||z.toneMapping===ua&&S.length===0)return!1;if(y=w,w!==null){const P=w.width,N=w.height;(d.width!==P||d.height!==N)&&this.setSize(P,N)}return I===!1&&z.setRenderTarget(d),C=z.toneMapping,z.toneMapping=ua,!0},this.hasRenderPass=function(){return I},this.end=function(z,w){z.toneMapping=C,b=!0;let P=d,N=h;for(let L=0;L<S.length;L++){const T=S[L];if(T.enabled!==!1&&(T.render(z,N,P,w),T.needsSwap!==!1)){const U=P;P=N,N=U}}if(_!==z.outputColorSpace||M!==z.toneMapping){_=z.outputColorSpace,M=z.toneMapping,m.defines={},De.getTransfer(_)===We&&(m.defines.SRGB_TRANSFER="");const L=WR[M];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,z.setRenderTarget(y),z.render(x,v),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),h.dispose(),p.dispose(),m.dispose()}}const WS=new Pn,gm=new Mo(1,1),YS=new DS,ZS=new ib,jS=new FS,Yx=[],Zx=[],jx=new Float32Array(16),Kx=new Float32Array(9),Qx=new Float32Array(4);function bo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=Yx[l];if(f===void 0&&(f=new Float32Array(l),Yx[l]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function yn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function ff(o,e){let i=Zx[e];i===void 0&&(i=new Int32Array(e),Zx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function ZR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function jR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function KR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function QR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function JR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;Qx.set(r),o.uniformMatrix2fv(this.addr,!1,Qx),Mn(i,r)}}function $R(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;Kx.set(r),o.uniformMatrix3fv(this.addr,!1,Kx),Mn(i,r)}}function t3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;jx.set(r),o.uniformMatrix4fv(this.addr,!1,jx),Mn(i,r)}}function e3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function n3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function i3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function a3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function r3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function s3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function o3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function l3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function u3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(gm.compareFunction=i.isReversedDepthBuffer()?Dm:wm,f=gm):f=WS,i.setTexture2D(e||f,l)}function c3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ZS,l)}function f3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||jS,l)}function d3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||YS,l)}function h3(o){switch(o){case 5126:return ZR;case 35664:return jR;case 35665:return KR;case 35666:return QR;case 35674:return JR;case 35675:return $R;case 35676:return t3;case 5124:case 35670:return e3;case 35667:case 35671:return n3;case 35668:case 35672:return i3;case 35669:case 35673:return a3;case 5125:return r3;case 36294:return s3;case 36295:return o3;case 36296:return l3;case 35678:case 36198:case 36298:case 36306:case 35682:return u3;case 35679:case 36299:case 36307:return c3;case 35680:case 36300:case 36308:case 36293:return f3;case 36289:case 36303:case 36311:case 36292:return d3}}function p3(o,e){o.uniform1fv(this.addr,e)}function m3(o,e){const i=bo(e,this.size,2);o.uniform2fv(this.addr,i)}function g3(o,e){const i=bo(e,this.size,3);o.uniform3fv(this.addr,i)}function _3(o,e){const i=bo(e,this.size,4);o.uniform4fv(this.addr,i)}function v3(o,e){const i=bo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function x3(o,e){const i=bo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function S3(o,e){const i=bo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function y3(o,e){o.uniform1iv(this.addr,e)}function M3(o,e){o.uniform2iv(this.addr,e)}function E3(o,e){o.uniform3iv(this.addr,e)}function T3(o,e){o.uniform4iv(this.addr,e)}function b3(o,e){o.uniform1uiv(this.addr,e)}function A3(o,e){o.uniform2uiv(this.addr,e)}function R3(o,e){o.uniform3uiv(this.addr,e)}function C3(o,e){o.uniform4uiv(this.addr,e)}function w3(o,e,i){const r=this.cache,l=e.length,f=ff(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=gm:d=WS;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,f[h])}function D3(o,e,i){const r=this.cache,l=e.length,f=ff(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||ZS,f[d])}function N3(o,e,i){const r=this.cache,l=e.length,f=ff(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||jS,f[d])}function U3(o,e,i){const r=this.cache,l=e.length,f=ff(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||YS,f[d])}function L3(o){switch(o){case 5126:return p3;case 35664:return m3;case 35665:return g3;case 35666:return _3;case 35674:return v3;case 35675:return x3;case 35676:return S3;case 5124:case 35670:return y3;case 35667:case 35671:return M3;case 35668:case 35672:return E3;case 35669:case 35673:return T3;case 5125:return b3;case 36294:return A3;case 36295:return R3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return w3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return N3;case 36289:case 36303:case 36311:case 36292:return U3}}class O3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=h3(i.type)}}class P3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=L3(i.type)}}class I3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],r)}}}const Mp=/(\w+)(\])?(\[|\.)?/g;function Jx(o,e){o.seq.push(e),o.map[e.id]=e}function z3(o,e,i){const r=o.name,l=r.length;for(Mp.lastIndex=0;;){const f=Mp.exec(r),d=Mp.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){Jx(i,m===void 0?new O3(h,o,e):new P3(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new I3(h),Jx(i,v)),i=v}}}class jc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);z3(h,p,this)}const l=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):f.push(d);l.length>0&&(this.seq=l.concat(f))}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function $x(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const B3=37297;let F3=0;function H3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const tS=new fe;function G3(o){De._getMatrix(tS,De.workingColorSpace,o);const e=`mat3( ${tS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case tf:return[e,"LinearTransferOETF"];case We:return[e,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function eS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+H3(o.getShaderSource(e),h)}else return f}function V3(o,e){const i=G3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const X3={[pS]:"Linear",[mS]:"Reinhard",[gS]:"Cineon",[_S]:"ACESFilmic",[xS]:"AgX",[SS]:"Neutral",[vS]:"Custom"};function k3(o,e){const i=X3[e];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new it;function q3(){De.getLuminanceCoefficients(Vc);const o=Vc.x.toFixed(4),e=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function Y3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Z3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Pl(o){return o!==""}function nS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j3=/^[ \t]*#include +<([\w\d./]+)>/gm;function _m(o){return o.replace(j3,Q3)}const K3=new Map;function Q3(o,e){let i=ye[e];if(i===void 0){const r=K3.get(e);if(r!==void 0)i=ye[r],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _m(i)}const J3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aS(o){return o.replace(J3,$3)}function $3(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function rS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tC={[kc]:"SHADOWMAP_TYPE_PCF",[Ol]:"SHADOWMAP_TYPE_VSM"};function eC(o){return tC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nC={[is]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[lf]:"ENVMAP_TYPE_CUBE_UV"};function iC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":nC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const aC={[yo]:"ENVMAP_MODE_REFRACTION"};function rC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":aC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sC={[Mm]:"ENVMAP_BLENDING_MULTIPLY",[yT]:"ENVMAP_BLENDING_MIX",[MT]:"ENVMAP_BLENDING_ADD"};function oC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":sC[o.combine]||"ENVMAP_BLENDING_NONE"}function lC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uC(o,e,i,r){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=eC(i),m=iC(i),x=rC(i),v=oC(i),_=lC(i),M=W3(i),b=Y3(f),C=l.createProgram();let y,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Pl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Pl).join(`
`),S.length>0&&(S+=`
`)):(y=[rS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),S=[rS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ua?"#define TONE_MAPPING":"",i.toneMapping!==ua?ye.tonemapping_pars_fragment:"",i.toneMapping!==ua?k3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,V3("linearToOutputTexel",i.outputColorSpace),q3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pl).join(`
`)),d=_m(d),d=nS(d,i),d=iS(d,i),h=_m(h),h=nS(h,i),h=iS(h,i),d=aS(d),h=aS(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===ux?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ux?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=I+y+d,w=I+S+h,P=$x(l,l.VERTEX_SHADER,z),N=$x(l,l.FRAGMENT_SHADER,w);l.attachShader(C,P),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function L(H){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(C)||"",pt=l.getShaderInfoLog(P)||"",St=l.getShaderInfoLog(N)||"",Q=et.trim(),k=pt.trim(),V=St.trim();let rt=!0,_t=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,P,N);else{const K=eS(l,P,"vertex"),Tt=eS(l,N,"fragment");Le("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+K+`
`+Tt)}else Q!==""?ae("WebGLProgram: Program Info Log:",Q):(k===""||V==="")&&(_t=!1);_t&&(H.diagnostics={runnable:rt,programLog:Q,vertexShader:{log:k,prefix:y},fragmentShader:{log:V,prefix:S}})}l.deleteShader(P),l.deleteShader(N),T=new jc(l,C),U=Z3(l,C)}let T;this.getUniforms=function(){return T===void 0&&L(this),T};let U;this.getAttributes=function(){return U===void 0&&L(this),U};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(C,B3)),W},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=F3++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=N,this}let cC=0;class fC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new dC(e),i.set(e,r)),r}}class dC{constructor(e){this.id=cC++,this.code=e,this.usedTimes=0}}function hC(o){return o===as||o===Qc||o===Jc}function pC(o,e,i,r,l,f){const d=new NS,h=new fC,p=new Set,m=[],x=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function C(T,U,W,H,et,pt){const St=H.fog,Q=et.geometry,k=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,rt=e.get(T.envMap||k,V),_t=rt&&rt.mapping===lf?rt.image.height:null,K=M[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const Tt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pt=Tt!==void 0?Tt.length:0;let de=0;Q.morphAttributes.position!==void 0&&(de=1),Q.morphAttributes.normal!==void 0&&(de=2),Q.morphAttributes.color!==void 0&&(de=3);let F,tt,Y,dt;if(K){const Bt=sa[K];F=Bt.vertexShader,tt=Bt.fragmentShader}else{F=T.vertexShader,tt=T.fragmentShader;const Bt=h.getVertexShaderStage(T),Ie=h.getFragmentShaderStage(T);h.update(T,Bt,Ie),Y=Bt.id,dt=Ie.id}const mt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),wt=et.isInstancedMesh===!0,Et=et.isBatchedMesh===!0,Vt=!!T.map,ne=!!T.matcap,he=!!rt,ve=!!T.aoMap,oe=!!T.lightMap,Te=!!T.bumpMap&&T.wireframe===!1,le=!!T.normalMap,Ve=!!T.displacementMap,an=!!T.emissiveMap,Pe=!!T.metalnessMap,$e=!!T.roughnessMap,Z=T.anisotropy>0,un=T.clearcoat>0,Oe=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,nt=T.transmission>0,ut=Z&&!!T.anisotropyMap,ht=un&&!!T.clearcoatMap,At=un&&!!T.clearcoatNormalMap,Nt=un&&!!T.clearcoatRoughnessMap,gt=D&&!!T.iridescenceMap,yt=D&&!!T.iridescenceThicknessMap,Dt=E&&!!T.sheenColorMap,Jt=E&&!!T.sheenRoughnessMap,It=!!T.specularMap,Ot=!!T.specularColorMap,kt=!!T.specularIntensityMap,ee=nt&&!!T.transmissionMap,ce=nt&&!!T.thicknessMap,q=!!T.gradientMap,Ct=!!T.alphaMap,Mt=T.alphaTest>0,Ut=!!T.alphaHash,Gt=!!T.extensions;let bt=ua;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(bt=o.toneMapping);const Zt={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:F,fragmentShader:tt,defines:T.defines,customVertexShaderID:Y,customFragmentShaderID:dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Et,batchingColor:Et&&et._colorsTexture!==null,instancing:wt,instancingColor:wt&&et.instanceColor!==null,instancingMorph:wt&&et.morphTexture!==null,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Vt,matcap:ne,envMap:he,envMapMode:he&&rt.mapping,envMapCubeUVHeight:_t,aoMap:ve,lightMap:oe,bumpMap:Te,normalMap:le,displacementMap:Ve,emissiveMap:an,normalMapObjectSpace:le&&T.normalMapType===bT,normalMapTangentSpace:le&&T.normalMapType===hm,packedNormalMap:le&&T.normalMapType===hm&&hC(T.normalMap.format),metalnessMap:Pe,roughnessMap:$e,anisotropy:Z,anisotropyMap:ut,clearcoat:un,clearcoatMap:ht,clearcoatNormalMap:At,clearcoatRoughnessMap:Nt,dispersion:Oe,iridescence:D,iridescenceMap:gt,iridescenceThicknessMap:yt,sheen:E,sheenColorMap:Dt,sheenRoughnessMap:Jt,specularMap:It,specularColorMap:Ot,specularIntensityMap:kt,transmission:nt,transmissionMap:ee,thicknessMap:ce,gradientMap:q,opaque:T.transparent===!1&&T.blending===go&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Mt,alphaHash:Ut,combine:T.combine,mapUv:Vt&&b(T.map.channel),aoMapUv:ve&&b(T.aoMap.channel),lightMapUv:oe&&b(T.lightMap.channel),bumpMapUv:Te&&b(T.bumpMap.channel),normalMapUv:le&&b(T.normalMap.channel),displacementMapUv:Ve&&b(T.displacementMap.channel),emissiveMapUv:an&&b(T.emissiveMap.channel),metalnessMapUv:Pe&&b(T.metalnessMap.channel),roughnessMapUv:$e&&b(T.roughnessMap.channel),anisotropyMapUv:ut&&b(T.anisotropyMap.channel),clearcoatMapUv:ht&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&b(T.sheenRoughnessMap.channel),specularMapUv:It&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:kt&&b(T.specularIntensityMap.channel),transmissionMapUv:ee&&b(T.transmissionMap.channel),thicknessMapUv:ce&&b(T.thicknessMap.channel),alphaMapUv:Ct&&b(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(le||Z),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!Q.attributes.uv&&(Vt||Ct),fog:!!St,useFog:T.fog===!0,fogExp2:!!St&&St.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&le===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Rt,skinning:et.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:de,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:pt.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&W.length>0,shadowMapType:o.shadowMap.type,toneMapping:bt,decodeVideoTexture:Vt&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===We,decodeVideoTextureEmissive:an&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===We,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Na,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Zt.vertexUv1s=p.has(1),Zt.vertexUv2s=p.has(2),Zt.vertexUv3s=p.has(3),p.clear(),Zt}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)U.push(W),U.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(S(U,T),I(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function I(T,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),U.packedNormalMap&&d.enable(22),U.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),U.numLightProbeGrids>0&&d.enable(22),U.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function z(T){const U=M[T.type];let W;if(U){const H=sa[U];W=Cb.clone(H.uniforms)}else W=T.uniforms;return W}function w(T,U){let W=x.get(U);return W!==void 0?++W.usedTimes:(W=new uC(o,U,T,l),m.push(W),x.set(U,W)),W}function P(T){if(--T.usedTimes===0){const U=m.indexOf(T);m[U]=m[m.length-1],m.pop(),x.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function L(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:z,acquireProgram:w,releaseProgram:P,releaseShaderCache:N,programs:m,dispose:L}}function mC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function gC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function sS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function oS(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function d(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function h(_,M,b,C,y,S){let I=o[e];return I===void 0?(I={id:_.id,object:_,geometry:M,material:b,materialVariant:d(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:S},o[e]=I):(I.id=_.id,I.object=_,I.geometry=M,I.material=b,I.materialVariant=d(_),I.groupOrder=C,I.renderOrder=_.renderOrder,I.z=y,I.group=S),e++,I}function p(_,M,b,C,y,S){const I=h(_,M,b,C,y,S);b.transmission>0?r.push(I):b.transparent===!0?l.push(I):i.push(I)}function m(_,M,b,C,y,S){const I=h(_,M,b,C,y,S);b.transmission>0?r.unshift(I):b.transparent===!0?l.unshift(I):i.unshift(I)}function x(_,M,b){i.length>1&&i.sort(_||gC),r.length>1&&r.sort(M||sS),l.length>1&&l.sort(M||sS),b&&(i.reverse(),r.reverse(),l.reverse())}function v(){for(let _=e,M=o.length;_<M;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:p,unshift:m,finish:v,sort:x}}function _C(){let o=new WeakMap;function e(r,l){const f=o.get(r);let d;return f===void 0?(d=new oS,o.set(r,[d])):l>=f.length?(d=new oS,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function vC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Ee};break;case"SpotLight":i={position:new it,direction:new it,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":i={color:new Ee,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function xC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let SC=0;function yC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function MC(o){const e=new vC,i=xC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new it);const l=new it,f=new tn,d=new tn;function h(m){let x=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,I=0,z=0,w=0,P=0,N=0,L=0;m.sort(yC);for(let U=0,W=m.length;U<W;U++){const H=m[U],et=H.color,pt=H.intensity,St=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===as?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=et.r*pt,v+=et.g*pt,_+=et.b*pt;else if(H.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(H.sh.coefficients[k],pt);L++}else if(H.isDirectionalLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,rt=i.get(H);rt.shadowIntensity=V.intensity,rt.shadowBias=V.bias,rt.shadowNormalBias=V.normalBias,rt.shadowRadius=V.radius,rt.shadowMapSize=V.mapSize,r.directionalShadow[M]=rt,r.directionalShadowMap[M]=Q,r.directionalShadowMatrix[M]=H.shadow.matrix,I++}r.directional[M]=k,M++}else if(H.isSpotLight){const k=e.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(et).multiplyScalar(pt),k.distance=St,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,r.spot[C]=k;const V=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,V.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[C]=V.matrix,H.castShadow){const rt=i.get(H);rt.shadowIntensity=V.intensity,rt.shadowBias=V.bias,rt.shadowNormalBias=V.normalBias,rt.shadowRadius=V.radius,rt.shadowMapSize=V.mapSize,r.spotShadow[C]=rt,r.spotShadowMap[C]=Q,w++}C++}else if(H.isRectAreaLight){const k=e.get(H);k.color.copy(et).multiplyScalar(pt),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=k,y++}else if(H.isPointLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),k.distance=H.distance,k.decay=H.decay,H.castShadow){const V=H.shadow,rt=i.get(H);rt.shadowIntensity=V.intensity,rt.shadowBias=V.bias,rt.shadowNormalBias=V.normalBias,rt.shadowRadius=V.radius,rt.shadowMapSize=V.mapSize,rt.shadowCameraNear=V.camera.near,rt.shadowCameraFar=V.camera.far,r.pointShadow[b]=rt,r.pointShadowMap[b]=Q,r.pointShadowMatrix[b]=H.shadow.matrix,z++}r.point[b]=k,b++}else if(H.isHemisphereLight){const k=e.get(H);k.skyColor.copy(H.color).multiplyScalar(pt),k.groundColor.copy(H.groundColor).multiplyScalar(pt),r.hemi[S]=k,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==I||T.numPointShadows!==z||T.numSpotShadows!==w||T.numSpotMaps!==P||T.numLightProbes!==L)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=w+P-N,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=L,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=I,T.numPointShadows=z,T.numSpotShadows=w,T.numSpotMaps=P,T.numLightProbes=L,r.version=SC++)}function p(m,x){let v=0,_=0,M=0,b=0,C=0;const y=x.matrixWorldInverse;for(let S=0,I=m.length;S<I;S++){const z=m[S];if(z.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(z.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(y),d.identity(),f.copy(z.matrixWorld),f.premultiply(y),d.extractRotation(f),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),b++}else if(z.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(z.matrixWorld),w.position.applyMatrix4(y),_++}else if(z.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(z.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:h,setupView:p,state:r}}function lS(o){const e=new MC(o),i=[],r=[],l=[];function f(_){v.camera=_,i.length=0,r.length=0,l.length=0}function d(_){i.push(_)}function h(_){r.push(_)}function p(_){l.push(_)}function m(){e.setup(i)}function x(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:m,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function EC(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new lS(o),e.set(l,[h])):f>=d.length?(h=new lS(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const TC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AC=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],RC=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],uS=new tn,Ul=new it,Ep=new it;function CC(o,e,i){let r=new Pm;const l=new _e,f=new _e,d=new sn,h=new Lb,p=new Ob,m={},x=i.maxTextureSize,v={[yr]:Yn,[Yn]:yr,[Na]:Na},_=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:TC,fragmentShader:bC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Zn;b.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new pi(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let S=this.type;this.render=function(N,L,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===nT&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kc);const U=o.getRenderTarget(),W=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),et=o.state;et.setBlending(La),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const pt=S!==this.type;pt&&L.traverse(function(St){St.material&&(Array.isArray(St.material)?St.material.forEach(Q=>Q.needsUpdate=!0):St.material.needsUpdate=!0)});for(let St=0,Q=N.length;St<Q;St++){const k=N[St],V=k.shadow;if(V===void 0){ae("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const rt=V.getFrameExtents();l.multiply(rt),f.copy(V.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(f.x=Math.floor(x/rt.x),l.x=f.x*rt.x,V.mapSize.x=f.x),l.y>x&&(f.y=Math.floor(x/rt.y),l.y=f.y*rt.y,V.mapSize.y=f.y));const _t=o.state.buffers.depth.getReversed();if(V.camera._reversedDepth=_t,V.map===null||pt===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ol){if(k.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ca(l.x,l.y,{format:as,type:Ia,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new Mo(l.x,l.y,oa),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=za,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On}else k.isPointLight?(V.map=new qS(l.x),V.map.depthTexture=new Ab(l.x,fa)):(V.map=new ca(l.x,l.y),V.map.depthTexture=new Mo(l.x,l.y,fa)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=za,this.type===kc?(V.map.depthTexture.compareFunction=_t?Dm:wm,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On);V.camera.updateProjectionMatrix()}const K=V.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<K;Tt++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,Tt),o.clear();else{Tt===0&&(o.setRenderTarget(V.map),o.clear());const Pt=V.getViewport(Tt);d.set(f.x*Pt.x,f.y*Pt.y,f.x*Pt.z,f.y*Pt.w),et.viewport(d)}if(k.isPointLight){const Pt=V.camera,de=V.matrix,F=k.distance||Pt.far;F!==Pt.far&&(Pt.far=F,Pt.updateProjectionMatrix()),Ul.setFromMatrixPosition(k.matrixWorld),Pt.position.copy(Ul),Ep.copy(Pt.position),Ep.add(AC[Tt]),Pt.up.copy(RC[Tt]),Pt.lookAt(Ep),Pt.updateMatrixWorld(),de.makeTranslation(-Ul.x,-Ul.y,-Ul.z),uS.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(uS,Pt.coordinateSystem,Pt.reversedDepth)}else V.updateMatrices(k);r=V.getFrustum(),w(L,T,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===Ol&&I(V,T),V.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(U,W,H)};function I(N,L){const T=e.update(C);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ca(l.x,l.y,{format:as,type:Ia})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(L,null,T,_,C,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(L,null,T,M,C,null)}function z(N,L,T,U){let W=null;const H=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)W=H;else if(W=T.isPointLight===!0?p:h,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const et=W.uuid,pt=L.uuid;let St=m[et];St===void 0&&(St={},m[et]=St);let Q=St[pt];Q===void 0&&(Q=W.clone(),St[pt]=Q,L.addEventListener("dispose",P)),W=Q}if(W.visible=L.visible,W.wireframe=L.wireframe,U===Ol?W.side=L.shadowSide!==null?L.shadowSide:L.side:W.side=L.shadowSide!==null?L.shadowSide:v[L.side],W.alphaMap=L.alphaMap,W.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,W.map=L.map,W.clipShadows=L.clipShadows,W.clippingPlanes=L.clippingPlanes,W.clipIntersection=L.clipIntersection,W.displacementMap=L.displacementMap,W.displacementScale=L.displacementScale,W.displacementBias=L.displacementBias,W.wireframeLinewidth=L.wireframeLinewidth,W.linewidth=L.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const et=o.properties.get(W);et.light=T}return W}function w(N,L,T,U,W){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===Ol)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const pt=e.update(N),St=N.material;if(Array.isArray(St)){const Q=pt.groups;for(let k=0,V=Q.length;k<V;k++){const rt=Q[k],_t=St[rt.materialIndex];if(_t&&_t.visible){const K=z(N,_t,U,W);N.onBeforeShadow(o,N,L,T,pt,K,rt),o.renderBufferDirect(T,null,pt,K,N,rt),N.onAfterShadow(o,N,L,T,pt,K,rt)}}}else if(St.visible){const Q=z(N,St,U,W);N.onBeforeShadow(o,N,L,T,pt,Q,null),o.renderBufferDirect(T,null,pt,Q,N,null),N.onAfterShadow(o,N,L,T,pt,Q,null)}}const et=N.children;for(let pt=0,St=et.length;pt<St;pt++)w(et[pt],L,T,U,W)}function P(N){N.target.removeEventListener("dispose",P);for(const T in m){const U=m[T],W=N.target.uuid;W in U&&(U[W].dispose(),delete U[W])}}}function wC(o,e){function i(){let q=!1;const Ct=new sn;let Mt=null;const Ut=new sn(0,0,0,0);return{setMask:function(Gt){Mt!==Gt&&!q&&(o.colorMask(Gt,Gt,Gt,Gt),Mt=Gt)},setLocked:function(Gt){q=Gt},setClear:function(Gt,bt,Zt,Bt,Ie){Ie===!0&&(Gt*=Bt,bt*=Bt,Zt*=Bt),Ct.set(Gt,bt,Zt,Bt),Ut.equals(Ct)===!1&&(o.clearColor(Gt,bt,Zt,Bt),Ut.copy(Ct))},reset:function(){q=!1,Mt=null,Ut.set(-1,0,0,0)}}}function r(){let q=!1,Ct=!1,Mt=null,Ut=null,Gt=null;return{setReversed:function(bt){if(Ct!==bt){const Zt=e.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Ct=bt;const Bt=Gt;Gt=null,this.setClear(Bt)}},getReversed:function(){return Ct},setTest:function(bt){bt?mt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(bt){Mt!==bt&&!q&&(o.depthMask(bt),Mt=bt)},setFunc:function(bt){if(Ct&&(bt=PT[bt]),Ut!==bt){switch(bt){case Cp:o.depthFunc(o.NEVER);break;case wp:o.depthFunc(o.ALWAYS);break;case Dp:o.depthFunc(o.LESS);break;case So:o.depthFunc(o.LEQUAL);break;case Np:o.depthFunc(o.EQUAL);break;case Up:o.depthFunc(o.GEQUAL);break;case Lp:o.depthFunc(o.GREATER);break;case Op:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ut=bt}},setLocked:function(bt){q=bt},setClear:function(bt){Gt!==bt&&(Gt=bt,Ct&&(bt=1-bt),o.clearDepth(bt))},reset:function(){q=!1,Mt=null,Ut=null,Gt=null,Ct=!1}}}function l(){let q=!1,Ct=null,Mt=null,Ut=null,Gt=null,bt=null,Zt=null,Bt=null,Ie=null;return{setTest:function(xe){q||(xe?mt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(xe){Ct!==xe&&!q&&(o.stencilMask(xe),Ct=xe)},setFunc:function(xe,_i,vi){(Mt!==xe||Ut!==_i||Gt!==vi)&&(o.stencilFunc(xe,_i,vi),Mt=xe,Ut=_i,Gt=vi)},setOp:function(xe,_i,vi){(bt!==xe||Zt!==_i||Bt!==vi)&&(o.stencilOp(xe,_i,vi),bt=xe,Zt=_i,Bt=vi)},setLocked:function(xe){q=xe},setClear:function(xe){Ie!==xe&&(o.clearStencil(xe),Ie=xe)},reset:function(){q=!1,Ct=null,Mt=null,Ut=null,Gt=null,bt=null,Zt=null,Bt=null,Ie=null}}}const f=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let x={},v={},_={},M=new WeakMap,b=[],C=null,y=!1,S=null,I=null,z=null,w=null,P=null,N=null,L=null,T=new Ee(0,0,0),U=0,W=!1,H=null,et=null,pt=null,St=null,Q=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const _t=o.getParameter(o.VERSION);_t.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(_t)[1]),V=rt>=1):_t.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),V=rt>=2);let K=null,Tt={};const Pt=o.getParameter(o.SCISSOR_BOX),de=o.getParameter(o.VIEWPORT),F=new sn().fromArray(Pt),tt=new sn().fromArray(de);function Y(q,Ct,Mt,Ut){const Gt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(q,bt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<Mt;Zt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ut,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Ct+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return bt}const dt={};dt[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),mt(o.DEPTH_TEST),d.setFunc(So),Te(!1),le(rx),mt(o.CULL_FACE),ve(La);function mt(q){x[q]!==!0&&(o.enable(q),x[q]=!0)}function Rt(q){x[q]!==!1&&(o.disable(q),x[q]=!1)}function wt(q,Ct){return _[q]!==Ct?(o.bindFramebuffer(q,Ct),_[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Et(q,Ct){let Mt=b,Ut=!1;if(q){Mt=M.get(Ct),Mt===void 0&&(Mt=[],M.set(Ct,Mt));const Gt=q.textures;if(Mt.length!==Gt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Zt=Gt.length;bt<Zt;bt++)Mt[bt]=o.COLOR_ATTACHMENT0+bt;Mt.length=Gt.length,Ut=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Ut=!0);Ut&&o.drawBuffers(Mt)}function Vt(q){return C!==q?(o.useProgram(q),C=q,!0):!1}const ne={[Jr]:o.FUNC_ADD,[aT]:o.FUNC_SUBTRACT,[rT]:o.FUNC_REVERSE_SUBTRACT};ne[sT]=o.MIN,ne[oT]=o.MAX;const he={[lT]:o.ZERO,[uT]:o.ONE,[cT]:o.SRC_COLOR,[Ap]:o.SRC_ALPHA,[gT]:o.SRC_ALPHA_SATURATE,[pT]:o.DST_COLOR,[dT]:o.DST_ALPHA,[fT]:o.ONE_MINUS_SRC_COLOR,[Rp]:o.ONE_MINUS_SRC_ALPHA,[mT]:o.ONE_MINUS_DST_COLOR,[hT]:o.ONE_MINUS_DST_ALPHA,[_T]:o.CONSTANT_COLOR,[vT]:o.ONE_MINUS_CONSTANT_COLOR,[xT]:o.CONSTANT_ALPHA,[ST]:o.ONE_MINUS_CONSTANT_ALPHA};function ve(q,Ct,Mt,Ut,Gt,bt,Zt,Bt,Ie,xe){if(q===La){y===!0&&(Rt(o.BLEND),y=!1);return}if(y===!1&&(mt(o.BLEND),y=!0),q!==iT){if(q!==S||xe!==W){if((I!==Jr||P!==Jr)&&(o.blendEquation(o.FUNC_ADD),I=Jr,P=Jr),xe)switch(q){case go:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kc:o.blendFunc(o.ONE,o.ONE);break;case sx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ox:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Le("WebGLState: Invalid blending: ",q);break}else switch(q){case go:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case sx:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ox:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",q);break}z=null,w=null,N=null,L=null,T.set(0,0,0),U=0,S=q,W=xe}return}Gt=Gt||Ct,bt=bt||Mt,Zt=Zt||Ut,(Ct!==I||Gt!==P)&&(o.blendEquationSeparate(ne[Ct],ne[Gt]),I=Ct,P=Gt),(Mt!==z||Ut!==w||bt!==N||Zt!==L)&&(o.blendFuncSeparate(he[Mt],he[Ut],he[bt],he[Zt]),z=Mt,w=Ut,N=bt,L=Zt),(Bt.equals(T)===!1||Ie!==U)&&(o.blendColor(Bt.r,Bt.g,Bt.b,Ie),T.copy(Bt),U=Ie),S=q,W=!1}function oe(q,Ct){q.side===Na?Rt(o.CULL_FACE):mt(o.CULL_FACE);let Mt=q.side===Yn;Ct&&(Mt=!Mt),Te(Mt),q.blending===go&&q.transparent===!1?ve(La):ve(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),f.setMask(q.colorWrite);const Ut=q.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),an(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Te(q){H!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),H=q)}function le(q){q!==tT?(mt(o.CULL_FACE),q!==et&&(q===rx?o.cullFace(o.BACK):q===eT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),et=q}function Ve(q){q!==pt&&(V&&o.lineWidth(q),pt=q)}function an(q,Ct,Mt){q?(mt(o.POLYGON_OFFSET_FILL),(St!==Ct||Q!==Mt)&&(St=Ct,Q=Mt,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,Mt))):Rt(o.POLYGON_OFFSET_FILL)}function Pe(q){q?mt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function $e(q){q===void 0&&(q=o.TEXTURE0+k-1),K!==q&&(o.activeTexture(q),K=q)}function Z(q,Ct,Mt){Mt===void 0&&(K===null?Mt=o.TEXTURE0+k-1:Mt=K);let Ut=Tt[Mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Tt[Mt]=Ut),(Ut.type!==q||Ut.texture!==Ct)&&(K!==Mt&&(o.activeTexture(Mt),K=Mt),o.bindTexture(q,Ct||dt[q]),Ut.type=q,Ut.texture=Ct)}function un(){const q=Tt[K];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Oe(){try{o.compressedTexImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function E(){try{o.texSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function nt(){try{o.texSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function ht(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function At(){try{o.texStorage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Nt(){try{o.texStorage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function gt(){try{o.texImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function yt(){try{o.texImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function Dt(q){return v[q]!==void 0?v[q]:o.getParameter(q)}function Jt(q,Ct){v[q]!==Ct&&(o.pixelStorei(q,Ct),v[q]=Ct)}function It(q){F.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),F.copy(q))}function Ot(q){tt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),tt.copy(q))}function kt(q,Ct){let Mt=m.get(Ct);Mt===void 0&&(Mt=new WeakMap,m.set(Ct,Mt));let Ut=Mt.get(q);Ut===void 0&&(Ut=o.getUniformBlockIndex(Ct,q.name),Mt.set(q,Ut))}function ee(q,Ct){const Ut=m.get(Ct).get(q);p.get(Ct)!==Ut&&(o.uniformBlockBinding(Ct,Ut,q.__bindingPointIndex),p.set(Ct,Ut))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},K=null,Tt={},_={},M=new WeakMap,b=[],C=null,y=!1,S=null,I=null,z=null,w=null,P=null,N=null,L=null,T=new Ee(0,0,0),U=0,W=!1,H=null,et=null,pt=null,St=null,Q=null,F.set(0,0,o.canvas.width,o.canvas.height),tt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:mt,disable:Rt,bindFramebuffer:wt,drawBuffers:Et,useProgram:Vt,setBlending:ve,setMaterial:oe,setFlipSided:Te,setCullFace:le,setLineWidth:Ve,setPolygonOffset:an,setScissorTest:Pe,activeTexture:$e,bindTexture:Z,unbindTexture:un,compressedTexImage2D:Oe,compressedTexImage3D:D,texImage2D:gt,texImage3D:yt,pixelStorei:Jt,getParameter:Dt,updateUBOMapping:kt,uniformBlockBinding:ee,texStorage2D:At,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:nt,compressedTexSubImage2D:ut,compressedTexSubImage3D:ht,scissor:It,viewport:Ot,reset:ce}}function DC(o,e,i,r,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new _e,x=new WeakMap,v=new Set;let _;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,E){return b?new OffscreenCanvas(D,E):Vl("canvas")}function y(D,E,nt){let ut=1;const ht=Oe(D);if((ht.width>nt||ht.height>nt)&&(ut=nt/Math.max(ht.width,ht.height)),ut<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const At=Math.floor(ut*ht.width),Nt=Math.floor(ut*ht.height);_===void 0&&(_=C(At,Nt));const gt=E?C(At,Nt):_;return gt.width=At,gt.height=Nt,gt.getContext("2d").drawImage(D,0,0,At,Nt),ae("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+At+"x"+Nt+")."),gt}else return"data"in D&&ae("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),D;return D}function S(D){return D.generateMipmaps}function I(D){o.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(D,E,nt,ut,ht,At=!1){if(D!==null){if(o[D]!==void 0)return o[D];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Nt;ut&&(Nt=e.get("EXT_texture_norm16"),Nt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(nt===o.FLOAT&&(gt=o.R32F),nt===o.HALF_FLOAT&&(gt=o.R16F),nt===o.UNSIGNED_BYTE&&(gt=o.R8),nt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.R16_EXT),nt===o.SHORT&&Nt&&(gt=Nt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.R8UI),nt===o.UNSIGNED_SHORT&&(gt=o.R16UI),nt===o.UNSIGNED_INT&&(gt=o.R32UI),nt===o.BYTE&&(gt=o.R8I),nt===o.SHORT&&(gt=o.R16I),nt===o.INT&&(gt=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(gt=o.RG32F),nt===o.HALF_FLOAT&&(gt=o.RG16F),nt===o.UNSIGNED_BYTE&&(gt=o.RG8),nt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RG16_EXT),nt===o.SHORT&&Nt&&(gt=Nt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RG16UI),nt===o.UNSIGNED_INT&&(gt=o.RG32UI),nt===o.BYTE&&(gt=o.RG8I),nt===o.SHORT&&(gt=o.RG16I),nt===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),nt===o.UNSIGNED_INT&&(gt=o.RGB32UI),nt===o.BYTE&&(gt=o.RGB8I),nt===o.SHORT&&(gt=o.RGB16I),nt===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(gt=o.RGBA32UI),nt===o.BYTE&&(gt=o.RGBA8I),nt===o.SHORT&&(gt=o.RGBA16I),nt===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(nt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGB16_EXT),nt===o.SHORT&&Nt&&(gt=Nt.RGB16_SNORM_EXT),nt===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const yt=At?tf:De.getTransfer(ht);nt===o.FLOAT&&(gt=o.RGBA32F),nt===o.HALF_FLOAT&&(gt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(gt=yt===We?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGBA16_EXT),nt===o.SHORT&&Nt&&(gt=Nt.RGBA16_SNORM_EXT),nt===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function P(D,E){let nt;return D?E===null||E===fa||E===Hl?nt=o.DEPTH24_STENCIL8:E===oa?nt=o.DEPTH32F_STENCIL8:E===Fl&&(nt=o.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fa||E===Hl?nt=o.DEPTH_COMPONENT24:E===oa?nt=o.DEPTH_COMPONENT32F:E===Fl&&(nt=o.DEPTH_COMPONENT16),nt}function N(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==On&&D.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function L(D){const E=D.target;E.removeEventListener("dispose",L),U(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),H(E)}function U(D){const E=r.get(D);if(E.__webglInit===void 0)return;const nt=D.source,ut=M.get(nt);if(ut){const ht=ut[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&W(D),Object.keys(ut).length===0&&M.delete(nt)}r.remove(D)}function W(D){const E=r.get(D);o.deleteTexture(E.__webglTexture);const nt=D.source,ut=M.get(nt);delete ut[E.__cacheKey],d.memory.textures--}function H(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let ht=0;ht<E.__webglFramebuffer[ut].length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ut][ht]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=D.textures;for(let ut=0,ht=nt.length;ut<ht;ut++){const At=r.get(nt[ut]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),d.memory.textures--),r.remove(nt[ut])}r.remove(D)}let et=0;function pt(){et=0}function St(){return et}function Q(D){et=D}function k(){const D=et;return D>=l.maxTextures&&ae("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),et+=1,D}function V(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function rt(D,E){const nt=r.get(D);if(D.isVideoTexture&&Z(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&nt.__version!==D.version){const ut=D.image;if(ut===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(nt,D,E);return}}else D.isExternalTexture&&(nt.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function _t(D,E){const nt=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&nt.__version!==D.version){Rt(nt,D,E);return}else D.isExternalTexture&&(nt.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function K(D,E){const nt=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&nt.__version!==D.version){Rt(nt,D,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function Tt(D,E){const nt=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&nt.__version!==D.version){wt(nt,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const Pt={[Pp]:o.REPEAT,[Ua]:o.CLAMP_TO_EDGE,[Ip]:o.MIRRORED_REPEAT},de={[On]:o.NEAREST,[ET]:o.NEAREST_MIPMAP_NEAREST,[pc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[qh]:o.LINEAR_MIPMAP_NEAREST,[ts]:o.LINEAR_MIPMAP_LINEAR},F={[AT]:o.NEVER,[NT]:o.ALWAYS,[RT]:o.LESS,[wm]:o.LEQUAL,[CT]:o.EQUAL,[Dm]:o.GEQUAL,[wT]:o.GREATER,[DT]:o.NOTEQUAL};function tt(D,E){if(E.type===oa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===qh||E.magFilter===pc||E.magFilter===ts||E.minFilter===Fn||E.minFilter===qh||E.minFilter===pc||E.minFilter===ts)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Pt[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Pt[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Pt[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,de[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==pc&&E.minFilter!==ts||E.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Y(D,E){let nt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",L));const ut=E.source;let ht=M.get(ut);ht===void 0&&(ht={},M.set(ut,ht));const At=V(E);if(At!==D.__cacheKey){ht[At]===void 0&&(ht[At]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),ht[At].usedTimes++;const Nt=ht[D.__cacheKey];Nt!==void 0&&(ht[D.__cacheKey].usedTimes--,Nt.usedTimes===0&&W(E)),D.__cacheKey=At,D.__webglTexture=ht[At].texture}return nt}function dt(D,E,nt){return Math.floor(Math.floor(D/nt)/E)}function mt(D,E,nt,ut){const At=D.updateRanges;if(At.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,nt,ut,E.data);else{At.sort((Jt,It)=>Jt.start-It.start);let Nt=0;for(let Jt=1;Jt<At.length;Jt++){const It=At[Nt],Ot=At[Jt],kt=It.start+It.count,ee=dt(Ot.start,E.width,4),ce=dt(It.start,E.width,4);Ot.start<=kt+1&&ee===ce&&dt(Ot.start+Ot.count-1,E.width,4)===ee?It.count=Math.max(It.count,Ot.start+Ot.count-It.start):(++Nt,At[Nt]=Ot)}At.length=Nt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Jt=0,It=At.length;Jt<It;Jt++){const Ot=At[Jt],kt=Math.floor(Ot.start/4),ee=Math.ceil(Ot.count/4),ce=kt%E.width,q=Math.floor(kt/E.width),Ct=ee,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ce,q,Ct,Mt,nt,ut,E.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function Rt(D,E,nt){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const ht=Y(D,E),At=E.source;i.bindTexture(ut,D.__webglTexture,o.TEXTURE0+nt);const Nt=r.get(At);if(At.version!==Nt.__version||ht===!0){if(i.activeTexture(o.TEXTURE0+nt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Mt=De.getPrimaries(De.workingColorSpace),Ut=E.colorSpace===xr?null:De.getPrimaries(E.colorSpace),Gt=E.colorSpace===xr||Mt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let yt=y(E.image,!1,l.maxTextureSize);yt=un(E,yt);const Dt=f.convert(E.format,E.colorSpace),Jt=f.convert(E.type);let It=w(E.internalFormat,Dt,Jt,E.normalized,E.colorSpace,E.isVideoTexture);tt(ut,E);let Ot;const kt=E.mipmaps,ee=E.isVideoTexture!==!0,ce=Nt.__version===void 0||ht===!0,q=At.dataReady,Ct=N(E,yt);if(E.isDepthTexture)It=P(E.format===es,E.type),ce&&(ee?i.texStorage2D(o.TEXTURE_2D,1,It,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,Dt,Jt,null));else if(E.isDataTexture)if(kt.length>0){ee&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)Ot=kt[Mt],ee?q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,Dt,Jt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Ot.width,Ot.height,0,Dt,Jt,Ot.data);E.generateMipmaps=!1}else ee?(ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height),q&&mt(E,yt,Dt,Jt)):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,Dt,Jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ee&&ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,kt[0].width,kt[0].height,yt.depth);for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)if(Ot=kt[Mt],E.format!==ki)if(Dt!==null)if(ee){if(q)if(E.layerUpdates.size>0){const Gt=Hx(Ot.width,Ot.height,E.format,E.type);for(const bt of E.layerUpdates){const Zt=Ot.data.subarray(bt*Gt/Ot.data.BYTES_PER_ELEMENT,(bt+1)*Gt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,bt,Ot.width,Ot.height,1,Dt,Zt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,Dt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,Dt,Jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Ot.width,Ot.height,yt.depth,0,Dt,Jt,Ot.data)}else{ee&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)Ot=kt[Mt],E.format!==ki?Dt!==null?ee?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,Dt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,It,Ot.width,Ot.height,0,Ot.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,Dt,Jt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Ot.width,Ot.height,0,Dt,Jt,Ot.data)}else if(E.isDataArrayTexture)if(ee){if(ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,yt.width,yt.height,yt.depth),q)if(E.layerUpdates.size>0){const Mt=Hx(yt.width,yt.height,E.format,E.type);for(const Ut of E.layerUpdates){const Gt=yt.data.subarray(Ut*Mt/yt.data.BYTES_PER_ELEMENT,(Ut+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,yt.width,yt.height,1,Dt,Jt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Dt,Jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,yt.width,yt.height,yt.depth,0,Dt,Jt,yt.data);else if(E.isData3DTexture)ee?(ce&&i.texStorage3D(o.TEXTURE_3D,Ct,It,yt.width,yt.height,yt.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Dt,Jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,It,yt.width,yt.height,yt.depth,0,Dt,Jt,yt.data);else if(E.isFramebufferTexture){if(ce)if(ee)i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height);else{let Mt=yt.width,Ut=yt.height;for(let Gt=0;Gt<Ct;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,It,Mt,Ut,0,Dt,Jt,null),Mt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),v.add(E),Mt.onpaint=Ut=>{const Gt=Ut.changedElements;for(const bt of v)Gt.includes(bt.image)&&(bt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Gt=o.RGBA,bt=o.RGBA,Zt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Gt,bt,Zt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ee&&ce){const Mt=Oe(kt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)Ot=kt[Mt],ee?q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt,Jt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,It,Dt,Jt,Ot);E.generateMipmaps=!1}else if(ee){if(ce){const Mt=Oe(yt);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,Jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,It,Dt,Jt,yt);S(E)&&I(ut),Nt.__version=At.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function wt(D,E,nt){if(E.image.length!==6)return;const ut=Y(D,E),ht=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+nt);const At=r.get(ht);if(ht.version!==At.__version||ut===!0){i.activeTexture(o.TEXTURE0+nt);const Nt=De.getPrimaries(De.workingColorSpace),gt=E.colorSpace===xr?null:De.getPrimaries(E.colorSpace),yt=E.colorSpace===xr||Nt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,Jt=E.image[0]&&E.image[0].isDataTexture,It=[];for(let bt=0;bt<6;bt++)!Dt&&!Jt?It[bt]=y(E.image[bt],!0,l.maxCubemapSize):It[bt]=Jt?E.image[bt].image:E.image[bt],It[bt]=un(E,It[bt]);const Ot=It[0],kt=f.convert(E.format,E.colorSpace),ee=f.convert(E.type),ce=w(E.internalFormat,kt,ee,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ct=At.__version===void 0||ut===!0,Mt=ht.dataReady;let Ut=N(E,Ot);tt(o.TEXTURE_CUBE_MAP,E);let Gt;if(Dt){q&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ce,Ot.width,Ot.height);for(let bt=0;bt<6;bt++){Gt=It[bt].mipmaps;for(let Zt=0;Zt<Gt.length;Zt++){const Bt=Gt[Zt];E.format!==ki?kt!==null?q?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,Bt.width,Bt.height,kt,Bt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,ce,Bt.width,Bt.height,0,Bt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,Bt.width,Bt.height,kt,ee,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,ce,Bt.width,Bt.height,0,kt,ee,Bt.data)}}}else{if(Gt=E.mipmaps,q&&Ct){Gt.length>0&&Ut++;const bt=Oe(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ce,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Jt){q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,It[bt].width,It[bt].height,kt,ee,It[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,It[bt].width,It[bt].height,0,kt,ee,It[bt].data);for(let Zt=0;Zt<Gt.length;Zt++){const Ie=Gt[Zt].image[bt].image;q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,Ie.width,Ie.height,kt,ee,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,ce,Ie.width,Ie.height,0,kt,ee,Ie.data)}}else{q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,kt,ee,It[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,kt,ee,It[bt]);for(let Zt=0;Zt<Gt.length;Zt++){const Bt=Gt[Zt];q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,kt,ee,Bt.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,ce,kt,ee,Bt.image[bt])}}}S(E)&&I(o.TEXTURE_CUBE_MAP),At.__version=ht.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Et(D,E,nt,ut,ht,At){const Nt=f.convert(nt.format,nt.colorSpace),gt=f.convert(nt.type),yt=w(nt.internalFormat,Nt,gt,nt.normalized,nt.colorSpace),Dt=r.get(E),Jt=r.get(nt);if(Jt.__renderTarget=E,!Dt.__hasExternalTextures){const It=Math.max(1,E.width>>At),Ot=Math.max(1,E.height>>At);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?i.texImage3D(ht,At,yt,It,Ot,E.depth,0,Nt,gt,null):i.texImage2D(ht,At,yt,It,Ot,0,Nt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,ht,Jt.__webglTexture,0,Pe(E)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,ht,Jt.__webglTexture,At),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(D,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const ut=E.depthTexture,ht=ut&&ut.isDepthTexture?ut.type:null,At=P(E.stencilBuffer,ht),Nt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(E),At,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(E),At,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,At,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,D)}else{const ut=E.textures;for(let ht=0;ht<ut.length;ht++){const At=ut[ht],Nt=f.convert(At.format,At.colorSpace),gt=f.convert(At.type),yt=w(At.internalFormat,Nt,gt,At.normalized,At.colorSpace);$e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(E),yt,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(E),yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ne(D,E,nt){const ut=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=r.get(E.depthTexture);if(ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),ht.__webglTexture===void 0){ht.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),tt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=f.convert(E.depthTexture.format),Jt=f.convert(E.depthTexture.type);let It;E.depthTexture.format===za?It=o.DEPTH_COMPONENT24:E.depthTexture.format===es&&(It=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,It,E.width,E.height,0,Dt,Jt,null)}}else rt(E.depthTexture,0);const At=ht.__webglTexture,Nt=Pe(E),gt=ut?o.TEXTURE_CUBE_MAP_POSITIVE_X+nt:o.TEXTURE_2D,yt=E.depthTexture.format===es?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===za)$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,At,0);else if(E.depthTexture.format===es)$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,At,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(D){const E=r.get(D),nt=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ut=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",ht)};ut.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=ut}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(nt)for(let ut=0;ut<6;ut++)ne(E.__webglFramebuffer[ut],D,ut);else{const ut=D.texture.mipmaps;ut&&ut.length>0?ne(E.__webglFramebuffer[0],D,0):ne(E.__webglFramebuffer,D,0)}else if(nt){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),Vt(E.__webglDepthbuffer[ut],D,!1);else{const ht=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,At)}}else{const ut=D.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Vt(E.__webglDepthbuffer,D,!1);else{const ht=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,At)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(D,E,nt){const ut=r.get(D);E!==void 0&&Et(ut.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&he(D)}function oe(D){const E=D.texture,nt=r.get(D),ut=r.get(E);D.addEventListener("dispose",T);const ht=D.textures,At=D.isWebGLCubeRenderTarget===!0,Nt=ht.length>1;if(Nt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,d.memory.textures++),At){nt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[gt]=[];for(let yt=0;yt<E.mipmaps.length;yt++)nt.__webglFramebuffer[gt][yt]=o.createFramebuffer()}else nt.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)nt.__webglFramebuffer[gt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let gt=0,yt=ht.length;gt<yt;gt++){const Dt=r.get(ht[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&$e(D)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){const yt=ht[gt];nt.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[gt]);const Dt=f.convert(yt.format,yt.colorSpace),Jt=f.convert(yt.type),It=w(yt.internalFormat,Dt,Jt,yt.normalized,yt.colorSpace,D.isXRRenderTarget===!0),Ot=Pe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,It,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(nt.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),tt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)Et(nt.__webglFramebuffer[gt][yt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else Et(nt.__webglFramebuffer[gt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);S(E)&&I(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let gt=0,yt=ht.length;gt<yt;gt++){const Dt=ht[gt],Jt=r.get(Dt);let It=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(It=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,Jt.__webglTexture),tt(It,Dt),Et(nt.__webglFramebuffer,D,Dt,o.COLOR_ATTACHMENT0+gt,It,0),S(Dt)&&I(It)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(gt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,ut.__webglTexture),tt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)Et(nt.__webglFramebuffer[yt],D,E,o.COLOR_ATTACHMENT0,gt,yt);else Et(nt.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,gt,0);S(E)&&I(gt),i.unbindTexture()}D.depthBuffer&&he(D)}function Te(D){const E=D.textures;for(let nt=0,ut=E.length;nt<ut;nt++){const ht=E[nt];if(S(ht)){const At=z(D),Nt=r.get(ht).__webglTexture;i.bindTexture(At,Nt),I(At),i.unbindTexture()}}}const le=[],Ve=[];function an(D){if(D.samples>0){if($e(D)===!1){const E=D.textures,nt=D.width,ut=D.height;let ht=o.COLOR_BUFFER_BIT;const At=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=r.get(D),gt=E.length>1;if(gt)for(let Dt=0;Dt<E.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const yt=D.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const Jt=r.get(E[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Jt,0)}o.blitFramebuffer(0,0,nt,ut,0,0,nt,ut,ht,o.NEAREST),p===!0&&(le.length=0,Ve.length=0,le.push(o.COLOR_ATTACHMENT0+Dt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(At),Ve.push(At),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,le))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let Dt=0;Dt<E.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const Jt=r.get(E[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,Jt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Pe(D){return Math.min(l.maxSamples,D.samples)}function $e(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(D){const E=d.render.frame;x.get(D)!==E&&(x.set(D,E),D.update())}function un(D,E){const nt=D.colorSpace,ut=D.format,ht=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||nt!==$c&&nt!==xr&&(De.getTransfer(nt)===We?(ut!==ki||ht!==hi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",nt)),E}function Oe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=k,this.resetTextureUnits=pt,this.getTextureUnits=St,this.setTextureUnits=Q,this.setTexture2D=rt,this.setTexture2DArray=_t,this.setTexture3D=K,this.setTextureCube=Tt,this.rebindTextures=ve,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NC(o,e){function i(r,l=xr){let f;const d=De.getTransfer(l);if(r===hi)return o.UNSIGNED_BYTE;if(r===Tm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===bm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===TS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===bS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===MS)return o.BYTE;if(r===ES)return o.SHORT;if(r===Fl)return o.UNSIGNED_SHORT;if(r===Em)return o.INT;if(r===fa)return o.UNSIGNED_INT;if(r===oa)return o.FLOAT;if(r===Ia)return o.HALF_FLOAT;if(r===AS)return o.ALPHA;if(r===RS)return o.RGB;if(r===ki)return o.RGBA;if(r===za)return o.DEPTH_COMPONENT;if(r===es)return o.DEPTH_STENCIL;if(r===CS)return o.RED;if(r===Am)return o.RED_INTEGER;if(r===as)return o.RG;if(r===Rm)return o.RG_INTEGER;if(r===Cm)return o.RGBA_INTEGER;if(r===qc||r===Wc||r===Yc||r===Zc)if(d===We)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===qc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===qc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zp||r===Bp||r===Fp||r===Hp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===zp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gp||r===Vp||r===Xp||r===kp||r===qp||r===Qc||r===Wp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Gp||r===Vp)return d===We?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Xp)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(r===kp)return f.COMPRESSED_R11_EAC;if(r===qp)return f.COMPRESSED_SIGNED_R11_EAC;if(r===Qc)return f.COMPRESSED_RG11_EAC;if(r===Wp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Yp||r===Zp||r===jp||r===Kp||r===Qp||r===Jp||r===$p||r===tm||r===em||r===nm||r===im||r===am||r===rm||r===sm)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Yp)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zp)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jp)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kp)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qp)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jp)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$p)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tm)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===em)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nm)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===im)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===am)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rm)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sm)return d===We?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===om||r===lm||r===um)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===om)return d===We?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lm)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===um)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cm||r===fm||r===Jc||r===dm)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===cm)return f.COMPRESSED_RED_RGTC1_EXT;if(r===fm)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dm)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const UC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LC=`
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

}`;class OC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new HS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ui({vertexShader:UC,fragmentShader:LC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new uf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PC extends rs{constructor(e,i){super();const r=this;let l=null,f=1,d=null,h="local-floor",p=1,m=null,x=null,v=null,_=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new OC,S={},I=i.getContextAttributes();let z=null,w=null;const P=[],N=[],L=new _e;let T=null;const U=new wi;U.viewport=new sn;const W=new wi;W.viewport=new sn;const H=[U,W],et=new kb;let pt=null,St=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let dt=P[Y];return dt===void 0&&(dt=new Qh,P[Y]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Y){let dt=P[Y];return dt===void 0&&(dt=new Qh,P[Y]=dt),dt.getGripSpace()},this.getHand=function(Y){let dt=P[Y];return dt===void 0&&(dt=new Qh,P[Y]=dt),dt.getHandSpace()};function Q(Y){const dt=N.indexOf(Y.inputSource);if(dt===-1)return;const mt=P[dt];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,m||d),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",V);for(let Y=0;Y<P.length;Y++){const dt=N[Y];dt!==null&&(N[Y]=null,P[Y].disconnect(dt))}pt=null,St=null,y.reset();for(const Y in S)delete S[Y];e.setRenderTarget(z),M=null,_=null,v=null,l=null,w=null,tt.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){f=Y,r.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,r.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",k),l.addEventListener("inputsourceschange",V),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Rt=null,wt=null;I.depth&&(wt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mt=I.stencil?es:za,Rt=I.stencil?Hl:fa);const Et={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(Et),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new ca(_.textureWidth,_.textureHeight,{format:ki,type:hi,depthTexture:new Mo(_.textureWidth,_.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const mt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new ca(M.framebufferWidth,M.framebufferHeight,{format:ki,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),tt.setContext(l),tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(Y){for(let dt=0;dt<Y.removed.length;dt++){const mt=Y.removed[dt],Rt=N.indexOf(mt);Rt>=0&&(N[Rt]=null,P[Rt].disconnect(mt))}for(let dt=0;dt<Y.added.length;dt++){const mt=Y.added[dt];let Rt=N.indexOf(mt);if(Rt===-1){for(let Et=0;Et<P.length;Et++)if(Et>=N.length){N.push(mt),Rt=Et;break}else if(N[Et]===null){N[Et]=mt,Rt=Et;break}if(Rt===-1)break}const wt=P[Rt];wt&&wt.connect(mt)}}const rt=new it,_t=new it;function K(Y,dt,mt){rt.setFromMatrixPosition(dt.matrixWorld),_t.setFromMatrixPosition(mt.matrixWorld);const Rt=rt.distanceTo(_t),wt=dt.projectionMatrix.elements,Et=mt.projectionMatrix.elements,Vt=wt[14]/(wt[10]-1),ne=wt[14]/(wt[10]+1),he=(wt[9]+1)/wt[5],ve=(wt[9]-1)/wt[5],oe=(wt[8]-1)/wt[0],Te=(Et[8]+1)/Et[0],le=Vt*oe,Ve=Vt*Te,an=Rt/(-oe+Te),Pe=an*-oe;if(dt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(an),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const $e=Vt+an,Z=ne+an,un=le-Pe,Oe=Ve+(Rt-Pe),D=he*ne/Z*$e,E=ve*ne/Z*$e;Y.projectionMatrix.makePerspective(un,Oe,D,E,$e,Z),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Tt(Y,dt){dt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(dt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let dt=Y.near,mt=Y.far;y.texture!==null&&(y.depthNear>0&&(dt=y.depthNear),y.depthFar>0&&(mt=y.depthFar)),et.near=W.near=U.near=dt,et.far=W.far=U.far=mt,(pt!==et.near||St!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),pt=et.near,St=et.far),et.layers.mask=Y.layers.mask|6,U.layers.mask=et.layers.mask&-5,W.layers.mask=et.layers.mask&-3;const Rt=Y.parent,wt=et.cameras;Tt(et,Rt);for(let Et=0;Et<wt.length;Et++)Tt(wt[Et],Rt);wt.length===2?K(et,U,W):et.projectionMatrix.copy(U.projectionMatrix),Pt(Y,et,Rt)};function Pt(Y,dt,mt){mt===null?Y.matrix.copy(dt.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(dt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(Y){p=Y,_!==null&&(_.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(et)},this.getCameraTexture=function(Y){return S[Y]};let de=null;function F(Y,dt){if(x=dt.getViewerPose(m||d),b=dt,x!==null){const mt=x.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Rt=!1;mt.length!==et.cameras.length&&(et.cameras.length=0,Rt=!0);for(let ne=0;ne<mt.length;ne++){const he=mt[ne];let ve=null;if(M!==null)ve=M.getViewport(he);else{const Te=v.getViewSubImage(_,he);ve=Te.viewport,ne===0&&(e.setRenderTargetTextures(w,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(w))}let oe=H[ne];oe===void 0&&(oe=new wi,oe.layers.enable(ne),oe.viewport=new sn,H[ne]=oe),oe.matrix.fromArray(he.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(he.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ve.x,ve.y,ve.width,ve.height),ne===0&&(et.matrix.copy(oe.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Rt===!0&&et.cameras.push(oe)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ne=v.getDepthInformation(mt[0]);ne&&ne.isValid&&ne.texture&&y.init(ne,l.renderState)}if(wt&&wt.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ne=0;ne<mt.length;ne++){const he=mt[ne].camera;if(he){let ve=S[he];ve||(ve=new HS,S[he]=ve);const oe=v.getCameraImage(he);ve.sourceTexture=oe}}}}for(let mt=0;mt<P.length;mt++){const Rt=N[mt],wt=P[mt];Rt!==null&&wt!==void 0&&wt.update(Rt,dt,m||d)}de&&de(Y,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const tt=new XS;tt.setAnimationLoop(F),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const IC=new tn,KS=new fe;KS.set(-1,0,0,0,1,0,0,0,1);function zC(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,GS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,I,z,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(y,S):S.isMeshLambertMaterial?(f(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(y,S),v(y,S)):S.isMeshPhongMaterial?(f(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,w)):S.isMeshMatcapMaterial?(f(y,S),b(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),C(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?p(y,S,I,z):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Yn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Yn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const I=e.get(S),z=I.envMap,w=I.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(IC.makeRotationFromEuler(w)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(KS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,I,z){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*I,y.scale.value=z*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,I){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Yn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const I=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function BC(o,e,i,r){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,P){const N=P.program;r.uniformBlockBinding(w,N)}function m(w,P){let N=l[w.id];N===void 0&&(y(w),N=x(w),l[w.id]=N,w.addEventListener("dispose",I));const L=P.program;r.updateUBOMapping(w,L);const T=e.render.frame;f[w.id]!==T&&(_(w),f[w.id]=T)}function x(w){const P=v();w.__bindingPointIndex=P;const N=o.createBuffer(),L=w.__size,T=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,L,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function v(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const P=l[w.id],N=w.uniforms,L=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let T=0,U=N.length;T<U;T++){const W=N[T];if(Array.isArray(W))for(let H=0,et=W.length;H<et;H++)M(W[H],T,H,L);else M(W,T,0,L)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(w,P,N,L){if(C(w,P,N,L)===!0){const T=w.__offset,U=w.value;if(Array.isArray(U)){let W=0;for(let H=0;H<U.length;H++){const et=U[H],pt=S(et);b(et,w.__data,W),typeof et!="number"&&typeof et!="boolean"&&!et.isMatrix3&&!ArrayBuffer.isView(et)&&(W+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,w.__data)}}function b(w,P,N){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,N)}function C(w,P,N,L){const T=w.value,U=P+"_"+N;if(L[U]===void 0)return typeof T=="number"||typeof T=="boolean"?L[U]=T:ArrayBuffer.isView(T)?L[U]=T.slice():L[U]=T.clone(),!0;{const W=L[U];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return L[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(W.equals(T)===!1)return W.copy(T),!0}}return!1}function y(w){const P=w.uniforms;let N=0;const L=16;for(let U=0,W=P.length;U<W;U++){const H=Array.isArray(P[U])?P[U]:[P[U]];for(let et=0,pt=H.length;et<pt;et++){const St=H[et],Q=Array.isArray(St.value)?St.value:[St.value];for(let k=0,V=Q.length;k<V;k++){const rt=Q[k],_t=S(rt),K=N%L,Tt=K%_t.boundary,Pt=K+Tt;N+=Tt,Pt!==0&&L-Pt<_t.storage&&(N+=L-Pt),St.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),St.__offset=N,N+=_t.storage}}}const T=N%L;return T>0&&(N+=L-T),w.__size=N,w.__cache={},this}function S(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",w),P}function I(w){const P=w.target;P.removeEventListener("dispose",I);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete f[P.id]}function z(){for(const w in l)o.deleteBuffer(l[w]);d=[],l={},f={}}return{bind:p,update:m,dispose:z}}const FC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function HC(){return ra===null&&(ra=new xb(FC,16,16,as,Ia),ra.name="DFG_LUT",ra.minFilter=Fn,ra.magFilter=Fn,ra.wrapS=Ua,ra.wrapT=Ua,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class GC{constructor(e={}){const{canvas:i=LT(),context:r=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=hi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const C=M,y=new Set([Cm,Rm,Am]),S=new Set([hi,fa,Fl,Hl,Tm,bm]),I=new Uint32Array(4),z=new Int32Array(4),w=new it;let P=null,N=null;const L=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let H=!1,et=null,pt=null,St=null,Q=null;this._outputColorSpace=ei;let k=0,V=0,rt=null,_t=-1,K=null;const Tt=new sn,Pt=new sn;let de=null;const F=new Ee(0);let tt=0,Y=i.width,dt=i.height,mt=1,Rt=null,wt=null;const Et=new sn(0,0,Y,dt),Vt=new sn(0,0,Y,dt);let ne=!1;const he=new Pm;let ve=!1,oe=!1;const Te=new tn,le=new it,Ve=new sn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function $e(){return rt===null?mt:1}let Z=r;function un(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ym}`),i.addEventListener("webglcontextlost",Ie,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",_i,!1),Z===null){const X="webgl2";if(Z=un(X,R),Z===null)throw un(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Le("WebGLRenderer: "+R.message),R}let Oe,D,E,nt,ut,ht,At,Nt,gt,yt,Dt,Jt,It,Ot,kt,ee,ce,q,Ct,Mt,Ut,Gt,bt;function Zt(){Oe=new HR(Z),Oe.init(),Ut=new NC(Z,Oe),D=new UR(Z,Oe,e,Ut),E=new wC(Z,Oe),D.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),pt=Z.createFramebuffer(),St=Z.createFramebuffer(),Q=Z.createFramebuffer(),nt=new XR(Z),ut=new mC,ht=new DC(Z,Oe,E,ut,D,Ut,nt),At=new FR(W),Nt=new Yb(Z),Gt=new DR(Z,Nt),gt=new GR(Z,Nt,nt,Gt),yt=new qR(Z,gt,Nt,Gt,nt),q=new kR(Z,D,ht),kt=new LR(ut),Dt=new pC(W,At,Oe,D,Gt,kt),Jt=new zC(W,ut),It=new _C,Ot=new EC(Oe),ce=new wR(W,At,E,yt,b,p),ee=new CC(W,yt,D),bt=new BC(Z,nt,D,E),Ct=new NR(Z,Oe,nt),Mt=new VR(Z,Oe,nt),nt.programs=Dt.programs,W.capabilities=D,W.extensions=Oe,W.properties=ut,W.renderLists=It,W.shadowMap=ee,W.state=E,W.info=nt}Zt(),C!==hi&&(U=new YR(C,i.width,i.height,h,l,f));const Bt=new PC(W,Z);this.xr=Bt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=Oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(R){R!==void 0&&(mt=R,this.setSize(Y,dt,!1))},this.getSize=function(R){return R.set(Y,dt)},this.setSize=function(R,X,lt=!0){if(Bt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,dt=X,i.width=Math.floor(R*mt),i.height=Math.floor(X*mt),lt===!0&&(i.style.width=R+"px",i.style.height=X+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Y*mt,dt*mt).floor()},this.setDrawingBufferSize=function(R,X,lt){Y=R,dt=X,mt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(X*lt),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(C===hi){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Tt)},this.getViewport=function(R){return R.copy(Et)},this.setViewport=function(R,X,lt,st){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,X,lt,st),E.viewport(Tt.copy(Et).multiplyScalar(mt).round())},this.getScissor=function(R){return R.copy(Vt)},this.setScissor=function(R,X,lt,st){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,X,lt,st),E.scissor(Pt.copy(Vt).multiplyScalar(mt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){E.setScissorTest(ne=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){wt=R},this.getClearColor=function(R){return R.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,lt=!0){let st=0;if(R){let ct=!1;if(rt!==null){const Ft=rt.texture.format;ct=y.has(Ft)}if(ct){const Ft=rt.texture.type,qt=S.has(Ft),zt=ce.getClearColor(),Yt=ce.getClearAlpha(),Qt=zt.r,re=zt.g,se=zt.b;qt?(I[0]=Qt,I[1]=re,I[2]=se,I[3]=Yt,Z.clearBufferuiv(Z.COLOR,0,I)):(z[0]=Qt,z[1]=re,z[2]=se,z[3]=Yt,Z.clearBufferiv(Z.COLOR,0,z))}else st|=Z.COLOR_BUFFER_BIT}X&&(st|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(st|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&Z.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),et=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Ie,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",_i,!1),ce.dispose(),It.dispose(),Ot.dispose(),ut.dispose(),At.dispose(),yt.dispose(),Gt.dispose(),bt.dispose(),Dt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",br),Bt.removeEventListener("sessionend",Fa),qi.stop()};function Ie(R){R.preventDefault(),ef("WebGLRenderer: Context Lost."),H=!0}function xe(){ef("WebGLRenderer: Context Restored."),H=!1;const R=nt.autoReset,X=ee.enabled,lt=ee.autoUpdate,st=ee.needsUpdate,ct=ee.type;Zt(),nt.autoReset=R,ee.enabled=X,ee.autoUpdate=lt,ee.needsUpdate=st,ee.type=ct}function _i(R){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vi(R){const X=R.target;X.removeEventListener("dispose",vi),df(X)}function df(R){ss(R),ut.remove(R)}function ss(R){const X=ut.get(R).programs;X!==void 0&&(X.forEach(function(lt){Dt.releaseProgram(lt)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,lt,st,ct,Ft){X===null&&(X=an);const qt=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,zt=No(R,X,lt,st,ct);E.setMaterial(st,qt);let Yt=lt.index,Qt=1;if(st.wireframe===!0){if(Yt=gt.getWireframeAttribute(lt),Yt===void 0)return;Qt=2}const re=lt.drawRange,se=lt.attributes.position;let Kt=re.start*Qt,Ne=(re.start+re.count)*Qt;Ft!==null&&(Kt=Math.max(Kt,Ft.start*Qt),Ne=Math.min(Ne,(Ft.start+Ft.count)*Qt)),Yt!==null?(Kt=Math.max(Kt,0),Ne=Math.min(Ne,Yt.count)):se!=null&&(Kt=Math.max(Kt,0),Ne=Math.min(Ne,se.count));const Ze=Ne-Kt;if(Ze<0||Ze===1/0)return;Gt.setup(ct,st,zt,lt,Yt);let ge,He=Ct;if(Yt!==null&&(ge=Nt.get(Yt),He=Mt,He.setIndex(ge)),ct.isMesh)st.wireframe===!0?(E.setLineWidth(st.wireframeLinewidth*$e()),He.setMode(Z.LINES)):He.setMode(Z.TRIANGLES);else if(ct.isLine){let vn=st.linewidth;vn===void 0&&(vn=1),E.setLineWidth(vn*$e()),ct.isLineSegments?He.setMode(Z.LINES):ct.isLineLoop?He.setMode(Z.LINE_LOOP):He.setMode(Z.LINE_STRIP)}else ct.isPoints?He.setMode(Z.POINTS):ct.isSprite&&He.setMode(Z.TRIANGLES);if(ct.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))He.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const vn=ct._multiDrawStarts,Xt=ct._multiDrawCounts,cn=ct._multiDrawCount,Se=Yt?Nt.get(Yt).bytesPerElement:1,jn=ut.get(st).currentProgram.getUniforms();for(let ni=0;ni<cn;ni++)jn.setValue(Z,"_gl_DrawID",ni),He.render(vn[ni]/Se,Xt[ni])}else if(ct.isInstancedMesh)He.renderInstances(Kt,Ze,ct.count);else if(lt.isInstancedBufferGeometry){const vn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Xt=Math.min(lt.instanceCount,vn);He.renderInstances(Kt,Ze,Xt)}else He.render(Kt,Ze)};function Tr(R,X,lt){R.transparent===!0&&R.side===Na&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Ar(R,X,lt),R.side=yr,R.needsUpdate=!0,Ar(R,X,lt),R.side=Na):Ar(R,X,lt)}this.compile=function(R,X,lt=null){lt===null&&(lt=R),N=Ot.get(lt),N.init(X),T.push(N),lt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(X.layers)&&(N.pushLight(ct),ct.castShadow&&N.pushShadow(ct))}),R!==lt&&R.traverseVisible(function(ct){ct.isLight&&ct.layers.test(X.layers)&&(N.pushLight(ct),ct.castShadow&&N.pushShadow(ct))}),N.setupLights();const st=new Set;return R.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Ft=ct.material;if(Ft)if(Array.isArray(Ft))for(let qt=0;qt<Ft.length;qt++){const zt=Ft[qt];Tr(zt,lt,ct),st.add(zt)}else Tr(Ft,lt,ct),st.add(Ft)}),N=T.pop(),st},this.compileAsync=function(R,X,lt=null){const st=this.compile(R,X,lt);return new Promise(ct=>{function Ft(){if(st.forEach(function(qt){ut.get(qt).currentProgram.isReady()&&st.delete(qt)}),st.size===0){ct(R);return}setTimeout(Ft,10)}Oe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Ba=null;function da(R){Ba&&Ba(R)}function br(){qi.stop()}function Fa(){qi.start()}const qi=new XS;qi.setAnimationLoop(da),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(R){Ba=R,Bt.setAnimationLoop(R),R===null?qi.stop():qi.start()},Bt.addEventListener("sessionstart",br),Bt.addEventListener("sessionend",Fa),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;et!==null&&et.renderStart(R,X);const lt=Bt.enabled===!0&&Bt.isPresenting===!0,st=U!==null&&(rt===null||lt)&&U.begin(W,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(X),X=Bt.getCamera()),R.isScene===!0&&R.onBeforeRender(W,R,X,rt),N=Ot.get(R,T.length),N.init(X),N.state.textureUnits=ht.getTextureUnits(),T.push(N),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),he.setFromProjectionMatrix(Te,la,X.reversedDepth),oe=this.localClippingEnabled,ve=kt.init(this.clippingPlanes,oe),P=It.get(R,L.length),P.init(),L.push(P),Bt.enabled===!0&&Bt.isPresenting===!0){const qt=W.xr.getDepthSensingMesh();qt!==null&&Ao(qt,X,-1/0,W.sortObjects)}Ao(R,X,0,W.sortObjects),P.finish(),W.sortObjects===!0&&P.sort(Rt,wt,X.reversedDepth),Pe=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Pe&&ce.addToRenderList(P,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&kt.beginShadows();const ct=N.state.shadowsArray;if(ee.render(ct,R,X),ve===!0&&kt.endShadows(),(st&&U.hasRenderPass())===!1){const qt=P.opaque,zt=P.transmissive;if(N.setupLights(),X.isArrayCamera){const Yt=X.cameras;if(zt.length>0)for(let Qt=0,re=Yt.length;Qt<re;Qt++){const se=Yt[Qt];os(qt,zt,R,se)}Pe&&ce.render(R);for(let Qt=0,re=Yt.length;Qt<re;Qt++){const se=Yt[Qt];Ro(P,R,se,se.viewport)}}else zt.length>0&&os(qt,zt,R,X),Pe&&ce.render(R),Ro(P,R,X)}rt!==null&&V===0&&(ht.updateMultisampleRenderTarget(rt),ht.updateRenderTargetMipmap(rt)),st&&U.end(W),R.isScene===!0&&R.onAfterRender(W,R,X),Gt.resetDefaultState(),_t=-1,K=null,T.pop(),T.length>0?(N=T[T.length-1],ht.setTextureUnits(N.state.textureUnits),ve===!0&&kt.setGlobalState(W.clippingPlanes,N.state.camera)):N=null,L.pop(),L.length>0?P=L[L.length-1]:P=null,et!==null&&et.renderEnd()};function Ao(R,X,lt,st){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||he.intersectsSprite(R)){st&&Ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Te);const qt=yt.update(R),zt=R.material;zt.visible&&P.push(R,qt,zt,lt,Ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||he.intersectsObject(R))){const qt=yt.update(R),zt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ve.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Ve.copy(qt.boundingSphere.center)),Ve.applyMatrix4(R.matrixWorld).applyMatrix4(Te)),Array.isArray(zt)){const Yt=qt.groups;for(let Qt=0,re=Yt.length;Qt<re;Qt++){const se=Yt[Qt],Kt=zt[se.materialIndex];Kt&&Kt.visible&&P.push(R,qt,Kt,lt,Ve.z,se)}}else zt.visible&&P.push(R,qt,zt,lt,Ve.z,null)}}const Ft=R.children;for(let qt=0,zt=Ft.length;qt<zt;qt++)Ao(Ft[qt],X,lt,st)}function Ro(R,X,lt,st){const{opaque:ct,transmissive:Ft,transparent:qt}=R;N.setupLightsView(lt),ve===!0&&kt.setGlobalState(W.clippingPlanes,lt),st&&E.viewport(Tt.copy(st)),ct.length>0&&Wi(ct,X,lt),Ft.length>0&&Wi(Ft,X,lt),qt.length>0&&Wi(qt,X,lt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function os(R,X,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[st.id]===void 0){const Kt=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[st.id]=new ca(1,1,{generateMipmaps:!0,type:Kt?Ia:hi,minFilter:ts,samples:Math.max(4,D.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Ft=N.state.transmissionRenderTarget[st.id],qt=st.viewport||Tt;Ft.setSize(qt.z*W.transmissionResolutionScale,qt.w*W.transmissionResolutionScale);const zt=W.getRenderTarget(),Yt=W.getActiveCubeFace(),Qt=W.getActiveMipmapLevel();W.setRenderTarget(Ft),W.getClearColor(F),tt=W.getClearAlpha(),tt<1&&W.setClearColor(16777215,.5),W.clear(),Pe&&ce.render(lt);const re=W.toneMapping;W.toneMapping=ua;const se=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),N.setupLightsView(st),ve===!0&&kt.setGlobalState(W.clippingPlanes,st),Wi(R,lt,st),ht.updateMultisampleRenderTarget(Ft),ht.updateRenderTargetMipmap(Ft),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ne=0,Ze=X.length;Ne<Ze;Ne++){const ge=X[Ne],{object:He,geometry:vn,material:Xt,group:cn}=ge;if(Xt.side===Na&&He.layers.test(st.layers)){const Se=Xt.side;Xt.side=Yn,Xt.needsUpdate=!0,Yl(He,lt,st,vn,Xt,cn),Xt.side=Se,Xt.needsUpdate=!0,Kt=!0}}Kt===!0&&(ht.updateMultisampleRenderTarget(Ft),ht.updateRenderTargetMipmap(Ft))}W.setRenderTarget(zt,Yt,Qt),W.setClearColor(F,tt),se!==void 0&&(st.viewport=se),W.toneMapping=re}function Wi(R,X,lt){const st=X.isScene===!0?X.overrideMaterial:null;for(let ct=0,Ft=R.length;ct<Ft;ct++){const qt=R[ct],{object:zt,geometry:Yt,group:Qt}=qt;let re=qt.material;re.allowOverride===!0&&st!==null&&(re=st),zt.layers.test(lt.layers)&&Yl(zt,X,lt,Yt,re,Qt)}}function Yl(R,X,lt,st,ct,Ft){R.onBeforeRender(W,X,lt,st,ct,Ft),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ct.onBeforeRender(W,X,lt,st,R,Ft),ct.transparent===!0&&ct.side===Na&&ct.forceSinglePass===!1?(ct.side=Yn,ct.needsUpdate=!0,W.renderBufferDirect(lt,X,st,ct,R,Ft),ct.side=yr,ct.needsUpdate=!0,W.renderBufferDirect(lt,X,st,ct,R,Ft),ct.side=Na):W.renderBufferDirect(lt,X,st,ct,R,Ft),R.onAfterRender(W,X,lt,st,ct,Ft)}function Ar(R,X,lt){X.isScene!==!0&&(X=an);const st=ut.get(R),ct=N.state.lights,Ft=N.state.shadowsArray,qt=ct.state.version,zt=Dt.getParameters(R,ct.state,Ft,X,lt,N.state.lightProbeGridArray),Yt=Dt.getProgramCacheKey(zt);let Qt=st.programs;st.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,st.fog=X.fog;const re=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;st.envMap=At.get(R.envMap||st.environment,re),st.envMapRotation=st.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",vi),Qt=new Map,st.programs=Qt);let se=Qt.get(Yt);if(se!==void 0){if(st.currentProgram===se&&st.lightsStateVersion===qt)return wo(R,zt),se}else zt.uniforms=Dt.getUniforms(R),et!==null&&R.isNodeMaterial&&et.build(R,lt,zt),R.onBeforeCompile(zt,W),se=Dt.acquireProgram(zt,Yt),Qt.set(Yt,se),st.uniforms=zt.uniforms;const Kt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=kt.uniform),wo(R,zt),st.needsLights=jl(R),st.lightsStateVersion=qt,st.needsLights&&(Kt.ambientLightColor.value=ct.state.ambient,Kt.lightProbe.value=ct.state.probe,Kt.directionalLights.value=ct.state.directional,Kt.directionalLightShadows.value=ct.state.directionalShadow,Kt.spotLights.value=ct.state.spot,Kt.spotLightShadows.value=ct.state.spotShadow,Kt.rectAreaLights.value=ct.state.rectArea,Kt.ltc_1.value=ct.state.rectAreaLTC1,Kt.ltc_2.value=ct.state.rectAreaLTC2,Kt.pointLights.value=ct.state.point,Kt.pointLightShadows.value=ct.state.pointShadow,Kt.hemisphereLights.value=ct.state.hemi,Kt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Kt.spotLightMatrix.value=ct.state.spotLightMatrix,Kt.spotLightMap.value=ct.state.spotLightMap,Kt.pointShadowMatrix.value=ct.state.pointShadowMatrix),st.lightProbeGrid=N.state.lightProbeGridArray.length>0,st.currentProgram=se,st.uniformsList=null,se}function Co(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=jc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function wo(R,X){const lt=ut.get(R);lt.outputColorSpace=X.outputColorSpace,lt.batching=X.batching,lt.batchingColor=X.batchingColor,lt.instancing=X.instancing,lt.instancingColor=X.instancingColor,lt.instancingMorph=X.instancingMorph,lt.skinning=X.skinning,lt.morphTargets=X.morphTargets,lt.morphNormals=X.morphNormals,lt.morphColors=X.morphColors,lt.morphTargetsCount=X.morphTargetsCount,lt.numClippingPlanes=X.numClippingPlanes,lt.numIntersection=X.numClipIntersection,lt.vertexAlphas=X.vertexAlphas,lt.vertexTangents=X.vertexTangents,lt.toneMapping=X.toneMapping}function Do(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(X.matrixWorld);for(let lt=0,st=R.length;lt<st;lt++){const ct=R[lt];if(ct.texture!==null&&ct.boundingBox.containsPoint(w))return ct}return null}function No(R,X,lt,st,ct){X.isScene!==!0&&(X=an),ht.resetTextureUnits();const Ft=X.fog,qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?X.environment:null,zt=rt===null?W.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:De.workingColorSpace,Yt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Qt=At.get(st.envMap||qt,Yt),re=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,se=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Kt=!!lt.morphAttributes.position,Ne=!!lt.morphAttributes.normal,Ze=!!lt.morphAttributes.color;let ge=ua;st.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ge=W.toneMapping);const He=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,vn=He!==void 0?He.length:0,Xt=ut.get(st),cn=N.state.lights;if(ve===!0&&(oe===!0||R!==K)){const ze=R===K&&st.id===_t;kt.setState(st,R,ze)}let Se=!1;st.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==cn.state.version||Xt.outputColorSpace!==zt||ct.isBatchedMesh&&Xt.batching===!1||!ct.isBatchedMesh&&Xt.batching===!0||ct.isBatchedMesh&&Xt.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&Xt.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&Xt.instancing===!1||!ct.isInstancedMesh&&Xt.instancing===!0||ct.isSkinnedMesh&&Xt.skinning===!1||!ct.isSkinnedMesh&&Xt.skinning===!0||ct.isInstancedMesh&&Xt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Xt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Xt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Xt.instancingMorph===!1&&ct.morphTexture!==null||Xt.envMap!==Qt||st.fog===!0&&Xt.fog!==Ft||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==kt.numPlanes||Xt.numIntersection!==kt.numIntersection)||Xt.vertexAlphas!==re||Xt.vertexTangents!==se||Xt.morphTargets!==Kt||Xt.morphNormals!==Ne||Xt.morphColors!==Ze||Xt.toneMapping!==ge||Xt.morphTargetsCount!==vn||!!Xt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Xt.__version=st.version);let jn=Xt.currentProgram;Se===!0&&(jn=Ar(st,X,ct),et&&st.isNodeMaterial&&et.onUpdateProgram(st,jn,Xt));let ni=!1,Li=!1,Ha=!1;const $t=jn.getUniforms(),en=Xt.uniforms;if(E.useProgram(jn.program)&&(ni=!0,Li=!0,Ha=!0),st.id!==_t&&(_t=st.id,Li=!0),Xt.needsLights){const ze=Do(N.state.lightProbeGridArray,ct);Xt.lightProbeGrid!==ze&&(Xt.lightProbeGrid=ze,Li=!0)}if(ni||K!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),$t.setValue(Z,"projectionMatrix",R.projectionMatrix),$t.setValue(Z,"viewMatrix",R.matrixWorldInverse);const En=$t.map.cameraPosition;En!==void 0&&En.setValue(Z,le.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&$t.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&$t.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Li=!0,Ha=!0)}if(Xt.needsLights&&(cn.state.directionalShadowMap.length>0&&$t.setValue(Z,"directionalShadowMap",cn.state.directionalShadowMap,ht),cn.state.spotShadowMap.length>0&&$t.setValue(Z,"spotShadowMap",cn.state.spotShadowMap,ht),cn.state.pointShadowMap.length>0&&$t.setValue(Z,"pointShadowMap",cn.state.pointShadowMap,ht)),ct.isSkinnedMesh){$t.setOptional(Z,ct,"bindMatrix"),$t.setOptional(Z,ct,"bindMatrixInverse");const ze=ct.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),$t.setValue(Z,"boneTexture",ze.boneTexture,ht))}ct.isBatchedMesh&&($t.setOptional(Z,ct,"batchingTexture"),$t.setValue(Z,"batchingTexture",ct._matricesTexture,ht),$t.setOptional(Z,ct,"batchingIdTexture"),$t.setValue(Z,"batchingIdTexture",ct._indirectTexture,ht),$t.setOptional(Z,ct,"batchingColorTexture"),ct._colorsTexture!==null&&$t.setValue(Z,"batchingColorTexture",ct._colorsTexture,ht));const ii=lt.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&q.update(ct,lt,jn),(Li||Xt.receiveShadow!==ct.receiveShadow)&&(Xt.receiveShadow=ct.receiveShadow,$t.setValue(Z,"receiveShadow",ct.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&X.environment!==null&&(en.envMapIntensity.value=X.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=HC()),Li){if($t.setValue(Z,"toneMappingExposure",W.toneMappingExposure),Xt.needsLights&&Zl(en,Ha),Ft&&st.fog===!0&&Jt.refreshFogUniforms(en,Ft),Jt.refreshMaterialUniforms(en,st,mt,dt,N.state.transmissionRenderTarget[R.id]),Xt.needsLights&&Xt.lightProbeGrid){const ze=Xt.lightProbeGrid;en.probesSH.value=ze.texture,en.probesMin.value.copy(ze.boundingBox.min),en.probesMax.value.copy(ze.boundingBox.max),en.probesResolution.value.copy(ze.resolution)}jc.upload(Z,Co(Xt),en,ht)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(jc.upload(Z,Co(Xt),en,ht),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&$t.setValue(Z,"center",ct.center),$t.setValue(Z,"modelViewMatrix",ct.modelViewMatrix),$t.setValue(Z,"normalMatrix",ct.normalMatrix),$t.setValue(Z,"modelMatrix",ct.matrixWorld),st.uniformsGroups!==void 0){const ze=st.uniformsGroups;for(let En=0,dn=ze.length;En<dn;En++){const Uo=ze[En];bt.update(Uo,jn),bt.bind(Uo,jn)}}return jn}function Zl(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function jl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,X,lt){const st=ut.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ut.get(R.texture).__webglTexture=X,ut.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const lt=ut.get(R);lt.__webglFramebuffer=X,lt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,lt=0){rt=R,k=X,V=lt;let st=null,ct=!1,Ft=!1;if(R){const zt=ut.get(R);if(zt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,zt.__webglFramebuffer),Tt.copy(R.viewport),Pt.copy(R.scissor),de=R.scissorTest,E.viewport(Tt),E.scissor(Pt),E.setScissorTest(de),_t=-1;return}else if(zt.__webglFramebuffer===void 0)ht.setupRenderTarget(R);else if(zt.__hasExternalTextures)ht.rebindTextures(R,ut.get(R.texture).__webglTexture,ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const re=R.depthTexture;if(zt.__boundDepthTexture!==re){if(re!==null&&ut.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ft=!0);const Qt=ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?st=Qt[X][lt]:st=Qt[X],ct=!0):R.samples>0&&ht.useMultisampledRTT(R)===!1?st=ut.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?st=Qt[lt]:st=Qt,Tt.copy(R.viewport),Pt.copy(R.scissor),de=R.scissorTest}else Tt.copy(Et).multiplyScalar(mt).floor(),Pt.copy(Vt).multiplyScalar(mt).floor(),de=ne;if(lt!==0&&(st=pt),E.bindFramebuffer(Z.FRAMEBUFFER,st)&&E.drawBuffers(R,st),E.viewport(Tt),E.scissor(Pt),E.setScissorTest(de),ct){const zt=ut.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,zt.__webglTexture,lt)}else if(Ft){const zt=X;for(let Yt=0;Yt<R.textures.length;Yt++){const Qt=ut.get(R.textures[Yt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Yt,Qt.__webglTexture,lt,zt)}}else if(R!==null&&lt!==0){const zt=ut.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,zt.__webglTexture,lt)}_t=-1},this.readRenderTargetPixels=function(R,X,lt,st,ct,Ft,qt,zt=0){if(!(R&&R.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Yt=Yt[qt]),Yt){E.bindFramebuffer(Z.FRAMEBUFFER,Yt);try{const Qt=R.textures[zt],re=Qt.format,se=Qt.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+zt),!D.textureFormatReadable(re)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(se)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-st&&lt>=0&&lt<=R.height-ct&&Z.readPixels(X,lt,st,ct,Ut.convert(re),Ut.convert(se),Ft)}finally{const Qt=rt!==null?ut.get(rt).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(R,X,lt,st,ct,Ft,qt,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Yt=Yt[qt]),Yt)if(X>=0&&X<=R.width-st&&lt>=0&&lt<=R.height-ct){E.bindFramebuffer(Z.FRAMEBUFFER,Yt);const Qt=R.textures[zt],re=Qt.format,se=Qt.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+zt),!D.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Kt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ft.byteLength,Z.STREAM_READ),Z.readPixels(X,lt,st,ct,Ut.convert(re),Ut.convert(se),0);const Ne=rt!==null?ut.get(rt).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Ne);const Ze=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await OT(Z,Ze,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Kt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ft),Z.deleteBuffer(Kt),Z.deleteSync(Ze),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,lt=0){const st=Math.pow(2,-lt),ct=Math.floor(R.image.width*st),Ft=Math.floor(R.image.height*st),qt=X!==null?X.x:0,zt=X!==null?X.y:0;ht.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,lt,0,0,qt,zt,ct,Ft),E.unbindTexture()},this.copyTextureToTexture=function(R,X,lt=null,st=null,ct=0,Ft=0){let qt,zt,Yt,Qt,re,se,Kt,Ne,Ze;const ge=R.isCompressedTexture?R.mipmaps[Ft]:R.image;if(lt!==null)qt=lt.max.x-lt.min.x,zt=lt.max.y-lt.min.y,Yt=lt.isBox3?lt.max.z-lt.min.z:1,Qt=lt.min.x,re=lt.min.y,se=lt.isBox3?lt.min.z:0;else{const en=Math.pow(2,-ct);qt=Math.floor(ge.width*en),zt=Math.floor(ge.height*en),R.isDataArrayTexture?Yt=ge.depth:R.isData3DTexture?Yt=Math.floor(ge.depth*en):Yt=1,Qt=0,re=0,se=0}st!==null?(Kt=st.x,Ne=st.y,Ze=st.z):(Kt=0,Ne=0,Ze=0);const He=Ut.convert(X.format),vn=Ut.convert(X.type);let Xt;X.isData3DTexture?(ht.setTexture3D(X,0),Xt=Z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ht.setTexture2DArray(X,0),Xt=Z.TEXTURE_2D_ARRAY):(ht.setTexture2D(X,0),Xt=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,X.unpackAlignment);const cn=E.getParameter(Z.UNPACK_ROW_LENGTH),Se=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),jn=E.getParameter(Z.UNPACK_SKIP_PIXELS),ni=E.getParameter(Z.UNPACK_SKIP_ROWS),Li=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,ge.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ge.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Qt),E.pixelStorei(Z.UNPACK_SKIP_ROWS,re),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,se);const Ha=R.isDataArrayTexture||R.isData3DTexture,$t=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const en=ut.get(R),ii=ut.get(X),ze=ut.get(en.__renderTarget),En=ut.get(ii.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,ze.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let dn=0;dn<Yt;dn++)Ha&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ut.get(R).__webglTexture,ct,se+dn),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ut.get(X).__webglTexture,Ft,Ze+dn)),Z.blitFramebuffer(Qt,re,qt,zt,Kt,Ne,qt,zt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ct!==0||R.isRenderTargetTexture||ut.has(R)){const en=ut.get(R),ii=ut.get(X);E.bindFramebuffer(Z.READ_FRAMEBUFFER,St),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Q);for(let ze=0;ze<Yt;ze++)Ha?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,en.__webglTexture,ct,se+ze):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,en.__webglTexture,ct),$t?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ii.__webglTexture,Ft,Ze+ze):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ii.__webglTexture,Ft),ct!==0?Z.blitFramebuffer(Qt,re,qt,zt,Kt,Ne,qt,zt,Z.COLOR_BUFFER_BIT,Z.NEAREST):$t?Z.copyTexSubImage3D(Xt,Ft,Kt,Ne,Ze+ze,Qt,re,qt,zt):Z.copyTexSubImage2D(Xt,Ft,Kt,Ne,Qt,re,qt,zt);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else $t?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(Xt,Ft,Kt,Ne,Ze,qt,zt,Yt,He,vn,ge.data):X.isCompressedArrayTexture?Z.compressedTexSubImage3D(Xt,Ft,Kt,Ne,Ze,qt,zt,Yt,He,ge.data):Z.texSubImage3D(Xt,Ft,Kt,Ne,Ze,qt,zt,Yt,He,vn,ge):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ft,Kt,Ne,qt,zt,He,vn,ge.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ft,Kt,Ne,ge.width,ge.height,He,ge.data):Z.texSubImage2D(Z.TEXTURE_2D,Ft,Kt,Ne,qt,zt,He,vn,ge);E.pixelStorei(Z.UNPACK_ROW_LENGTH,cn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Se),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,jn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,ni),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,Li),Ft===0&&X.generateMipmaps&&Z.generateMipmap(Xt),E.unbindTexture()},this.initRenderTarget=function(R){ut.get(R).__webglFramebuffer===void 0&&ht.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ht.setTextureCube(R,0):R.isData3DTexture?ht.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ht.setTexture2DArray(R,0):ht.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){k=0,V=0,rt=null,E.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const Tp=1.28,Il=Math.PI/180,VC=o=>(280.46061837+360.98564736629*(o/864e5+24405875e-1-2451545))%360*Il,XC=o=>{const e=o/864e5+24405875e-1-2451545,i=(280.46+.9856474*e)*Il,r=(357.528+.9856003*e)*Il,l=i+(1.915*Math.sin(r)+.02*Math.sin(2*r))*Il,f=23.439*Il,d=Math.cos(l),h=Math.cos(f)*Math.sin(l),p=Math.sin(f)*Math.sin(l);return new it(d,p,-h).normalize()};function kC({orbit:o,offset:e=0}){const i=Fe.useRef(null),r=Fe.useRef(null),l=Fe.useRef(e);return l.current=e,Fe.useEffect(()=>{const f=i.current;let d=!1,h=0,p=!1,m=0,x=0,v=0,_=7.4,M=null;const b=new fb,C=new wi(40,1,.1,300),y=new GC({antialias:!0,alpha:!0});y.setPixelRatio(Math.min(devicePixelRatio||1,2)),y.outputColorSpace=ei,f.appendChild(y.domElement);const S=new Float32Array(2400*3);for(let tt=0;tt<2400;tt++)new it().randomDirection().multiplyScalar(60+Math.random()*60).toArray(S,tt*3);const I=new Zn;I.setAttribute("position",new mi(S,3)),b.add(new Tb(I,new BS({color:14674687,size:.14,transparent:!0,opacity:.7})));const z=new po;z.rotation.set(.42,-.6,0),b.add(z);const w=new Bb,P=tt=>{const Y=w.load(tt);return Y.colorSpace=ei,Y.anisotropy=8,Y},N=XC(Date.now()),L=new Ui({uniforms:{uDay:{value:P("/textures/earth_atmos_2048.jpg")},uNight:{value:P("/textures/earth_lights_2048.png")},uSun:{value:N},uRot:{value:new fe}},vertexShader:"varying vec2 vUv;varying vec3 vN,vWN;uniform mat3 uRot;void main(){vUv=uv;vN=normalize(normalMatrix*normal);vWN=uRot*normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv;varying vec3 vN,vWN;uniform sampler2D uDay,uNight;uniform vec3 uSun;
        void main(){float d=dot(normalize(vWN),uSun),k=smoothstep(-.28,.32,d);
          vec3 day=texture2D(uDay,vUv).rgb*(.34+1.05*max(d,0.)),night=texture2D(uNight,vUv).rgb*vec3(1.5,1.1,.65)+texture2D(uDay,vUv).rgb*.035;
          vec3 c=mix(night,day,k);c+=vec3(1.,.5,.25)*smoothstep(-.02,.12,d)*(1.-smoothstep(.12,.35,d))*.07;
          float f=pow(1.-max(dot(normalize(vN),vec3(0.,0.,1.)),0.),3.);c+=vec3(.25,.5,1.)*f*.3*(.25+.75*k);
          gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),T=new pi(new mo(Tp,96,96),L);z.add(T);const U=new Vb(16777215,2.4);U.position.copy(N).multiplyScalar(10),z.add(U);const W=new pi(new mo(Tp*1.012,64,64),new Ub({alphaMap:P("/textures/earth_clouds_1024.png"),color:16777215,transparent:!0,opacity:.55,depthWrite:!1}));z.add(W),b.add(new pi(new mo(Tp*1.16,64,64),new Ui({transparent:!0,side:Yn,blending:Kc,depthWrite:!1,vertexShader:"varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 n;void main(){float i=pow(max(.72-dot(n,vec3(0.,0.,1.)),0.),5.);gl_FragColor=vec4(.35,.6,1.,1.)*i*0.55;}"})));const H=new po;z.add(H);const et=(()=>{const tt=document.createElement("canvas");tt.width=tt.height=64;const Y=tt.getContext("2d"),dt=Y.createRadialGradient(32,32,0,32,32,32);return dt.addColorStop(0,"rgba(255,190,90,1)"),dt.addColorStop(.3,"rgba(255,170,70,.35)"),dt.addColorStop(1,"rgba(255,170,70,0)"),Y.fillStyle=dt,Y.fillRect(0,0,64,64),new bb(tt)})();r.current={setOrbit(tt){if(H.children.slice().forEach(he=>{he.geometry?.dispose(),he.material?.dispose(),H.remove(he)}),M=null,!tt?.points?.length)return;const Y=tt.points.map(he=>[Number(he.position_km?.x)||0,Number(he.position_km?.y)||0,Number(he.position_km?.z)||0]),dt=Math.max(...Y.map(he=>Math.hypot(...he)),1),mt=2.05/dt,Rt=Y.map(([he,ve,oe])=>new it(he*mt,oe*mt,-ve*mt)),wt=new Zn().setFromPoints(Rt);wt.setAttribute("color",new mi(new Float32Array(Rt.length*3),3));const Et=new Eb(wt,new zS({vertexColors:!0,transparent:!0}));H.add(Et);const Vt=new pi(new mo(.045,20,20),new Om({color:16773590}));H.add(Vt);const ne=new _b(new PS({map:et,transparent:!0,depthWrite:!1,blending:Kc}));ne.scale.setScalar(.6),Vt.add(ne),M={pts:Rt,geo:wt,dot:Vt,glow:ne,t0:new Date(tt.points[0].time).getTime(),step:new Date(tt.points[1]?.time||tt.points[0].time)-new Date(tt.points[0].time)||6e4}}},r.current.setOrbit(o);const pt=()=>{const tt=Math.max(f.clientWidth,1),Y=Math.max(f.clientHeight,1);y.setSize(tt,Y,!1),C.aspect=tt/Y;const dt=tt>1e3?l.current:0;C.setViewOffset(tt,Y,dt,0,tt,Y),_=Math.min(22,Math.max(7.4,1.95/(.364*(tt/Y))))};pt();const St=new ResizeObserver(pt);St.observe(f),window.addEventListener("resize",pt);const Q=y.domElement,k=tt=>{p=!0,m=tt.clientX,x=tt.clientY,Q.setPointerCapture?.(tt.pointerId)},V=tt=>{p&&(z.rotation.y+=(tt.clientX-m)*.006,z.rotation.x=dx.clamp(z.rotation.x+(tt.clientY-x)*.006,-1.3,1.3),m=tt.clientX,x=tt.clientY)},rt=()=>{p=!1,v=performance.now()},_t=tt=>{!tt.ctrlKey&&!tt.metaKey||(tt.preventDefault(),_=dx.clamp(_+tt.deltaY*.01,4.5,12))};Q.addEventListener("pointerdown",k),Q.addEventListener("pointermove",V),Q.addEventListener("pointerup",rt),Q.addEventListener("pointerleave",rt),Q.addEventListener("wheel",_t,{passive:!1});const K=new qb,Tt=new Ee(16761963),Pt=new Ee(1911357),de=new Ee;C.position.set(0,.5,_);const F=()=>{if(d)return;h=requestAnimationFrame(F);const tt=K.getElapsedTime();!p&&performance.now()-v>1500&&(z.rotation.y+=.0012);let Y=Date.now();if(M){const dt=M.pts.length,mt=tt*6%dt,Rt=Math.floor(mt);M.dot.position.lerpVectors(M.pts[Rt],M.pts[(Rt+1)%dt],mt-Rt),M.glow.material.opacity=.8+Math.sin(tt*4)*.2;const wt=M.geo.attributes.color;for(let Et=0;Et<dt;Et++)de.copy(Pt).lerp(Tt,Math.pow(1-(Rt-Et+dt)%dt/dt,3)),wt.setXYZ(Et,de.r,de.g,de.b);wt.needsUpdate=!0,Y=M.t0+mt*M.step}T.rotation.y=VC(Y),W.rotation.y=T.rotation.y*1+tt*.004,T.updateMatrix(),L.uniforms.uRot.value.setFromMatrix4(T.matrix),C.position.z+=(_-C.position.z)*.08,C.position.y=.5,C.lookAt(0,0,0),C.updateProjectionMatrix(),y.render(b,C)};return F(),()=>{d=!0,cancelAnimationFrame(h),St.disconnect(),window.removeEventListener("resize",pt),["pointerdown","pointermove","pointerup","pointerleave","wheel"].forEach(tt=>Q.removeEventListener(tt,{pointerdown:k,pointermove:V,pointerup:rt,pointerleave:rt,wheel:_t}[tt])),y.dispose(),Q.remove(),r.current=null}},[]),Fe.useEffect(()=>{r.current?.setOrbit(o)},[o]),Fe.useEffect(()=>{window.dispatchEvent(new Event("resize"))},[e]),B.jsx("div",{ref:i,className:"globe",role:"img","aria-label":"Interactive 3D Earth with the selected satellite's orbit"})}const qC="http://localhost:8000",sf=o=>Number(o||0).toExponential(2),xo=o=>{const e=Number(o||0);return e>=1e-4?"CRITICAL":e>=1e-5?"HIGH":e>=1e-6?"MEDIUM":"LOW"},ns=o=>o?new Date(o).toLocaleString([],{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—";async function QS(o,e){const i=await fetch(`${qC}${o}`,e),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error(r.detail||`Request failed (${i.status})`);return r}const Ll=o=>QS(o),WC=(o,e)=>QS(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});function YC(){const[o,e]=Fe.useState(()=>localStorage.getItem("satcollivo-theme")||"dark"),[i,r]=Fe.useState("overview"),[l,f]=Fe.useState(null),[d,h]=Fe.useState([]),[p,m]=Fe.useState([]),[x,v]=Fe.useState("25544"),[_,M]=Fe.useState(null),[b,C]=Fe.useState(null),[y,S]=Fe.useState(24),[I,z]=Fe.useState(null),[w,P]=Fe.useState(null),[N,L]=Fe.useState(""),[T,U]=Fe.useState(!1),W=async()=>{U(!0);try{const[K,Tt]=await Promise.all([Ll("/api/stats"),Ll("/api/events?limit=50")]);f(K),m(Tt),L("")}catch(K){L(K.message)}finally{U(!1)}},H=async K=>{try{const Tt=await Ll(`/api/satellites?search=${encodeURIComponent(K)}&limit=100`);h(Tt.objects||[]),L("")}catch(Tt){L(Tt.message)}},et=async K=>{M(K),C(null),z(null);try{C(await Ll(`/api/satellites/${K.norad_id}/orbit?duration_minutes=120&step_seconds=60`))}catch(Tt){L(Tt.message)}},pt=async()=>{if(!(!_||_.docked)){z({status:"running"});try{const K=await WC("/api/assessments",{primary_norad_id:_.norad_id,hours:y,screening_km:25,top:20}),Tt=await Ll(`/api/assessments/${K.job_id}`);z(Tt),await W()}catch(K){z({status:"failed",error:K.message})}}};Fe.useEffect(()=>{document.documentElement.dataset.theme=o,localStorage.setItem("satcollivo-theme",o)},[o]),Fe.useEffect(()=>{W(),H("25544")},[]),Fe.useEffect(()=>{const K=setTimeout(()=>H(x),250);return()=>clearTimeout(K)},[x]),Fe.useEffect(()=>{if(!_&&d.length){const K=d.find(Tt=>Tt.norad_id===25544)||d[0];et(K)}},[d,_]);const St=Fe.useMemo(()=>p.filter(K=>Number(K.probability_of_collision)>=1e-6),[p]),Q=Fe.useMemo(()=>p.filter(K=>K.maneuver_recommended),[p]),k=!!_?.docked,V=Fe.useMemo(()=>{if(!b?.points?.length)return null;const K=b.points.map(Tt=>Math.hypot(Tt.position_km?.x||0,Tt.position_km?.y||0,Tt.position_km?.z||0)-6371);return{lo:Math.round(Math.min(...K)),hi:Math.round(Math.max(...K))}},[b]),rt=[["overview",WE,"Overview"],["objects",ix,"Objects"],["conjunctions",JE,"Conjunctions"],["threats",bp,"Threats"],["maneuvers",$E,"Maneuvers"],["data",qE,"System"]],_t=()=>e(K=>K==="dark"?"light":"dark");return B.jsxs("div",{className:"app",children:[B.jsxs("div",{className:"shell",children:[B.jsxs("nav",{className:"rail","aria-label":"Primary",children:[B.jsx("button",{className:"logo",onClick:()=>r("overview"),"aria-label":"SatCollivo home",children:B.jsx(ZE,{size:20})}),B.jsx("div",{className:"rail-nav",children:rt.map(([K,Tt,Pt])=>B.jsxs("button",{className:i===K?"nav active":"nav",onClick:()=>r(K),"aria-label":Pt,children:[B.jsx(Tt,{size:19}),B.jsx("span",{className:"tip",children:Pt}),K==="threats"&&St.length>0&&B.jsx("i",{className:"dot crit"}),K==="maneuvers"&&Q.length>0&&B.jsx("i",{className:"dot"})]},K))}),B.jsxs("div",{className:"rail-foot",children:[B.jsxs("button",{className:"nav",onClick:W,"aria-label":"Refresh",children:[B.jsx(KE,{size:17,className:T?"spin":""}),B.jsx("span",{className:"tip",children:"Refresh data"})]}),B.jsxs("button",{className:"nav",onClick:_t,"aria-label":"Toggle theme",children:[o==="dark"?B.jsx(QE,{size:17}):B.jsx(YE,{size:17}),B.jsx("span",{className:"tip",children:o==="dark"?"Light theme":"Dark theme"})]})]})]}),B.jsxs("main",{className:i==="overview"?"main is-overview":"main",children:[N&&B.jsxs("div",{className:"error",children:[B.jsx(bp,{size:15}),B.jsx("span",{children:N}),B.jsx("button",{onClick:()=>L(""),children:B.jsx(Sm,{size:15})})]}),i==="overview"?B.jsxs(B.Fragment,{children:[B.jsxs("section",{className:"stage scope-dark",children:[B.jsx(kC,{orbit:b,offset:190}),B.jsxs("div",{className:"hud",children:[B.jsxs("div",{className:"hero",children:[B.jsxs("span",{className:"live",children:[B.jsx("i",{})," LIVE · ORBITAL SAFETY CONSOLE"]}),B.jsx("h1",{children:_?.name||"Select an object"}),B.jsx("p",{children:_?`NORAD ${_.norad_id} · ${_.object_type||"Tracked object"}`:"Search the catalog to begin."}),B.jsxs("div",{className:"chips",children:[V&&B.jsxs(B.Fragment,{children:[B.jsxs("span",{children:["PERIGEE ",B.jsxs("b",{children:[V.lo," km"]})]}),B.jsxs("span",{children:["APOGEE ",B.jsxs("b",{children:[V.hi," km"]})]})]}),b&&B.jsxs("span",{children:["FRAME ",B.jsx("b",{children:"TEME"})]}),k&&B.jsx("span",{className:"warn",children:"DOCKED · SELECT HOST"})]})]}),B.jsxs("div",{className:"kpis",children:[B.jsx(Xc,{label:"Tracked",value:l?.unique_objects??"—"}),B.jsx(Xc,{label:"Conjunctions",value:l?.event_count??0}),B.jsx(Xc,{label:"Threats",value:St.length,tone:St.length?"crit":""}),B.jsx(Xc,{label:"Maneuvers",value:l?.maneuver_count??0,tone:l?.maneuver_count?"warn":""})]})]}),B.jsxs("aside",{className:"finder glass",children:[B.jsxs("div",{className:"search-box",children:[B.jsx(ax,{size:15}),B.jsx("input",{value:x,onChange:K=>v(K.target.value),placeholder:"Search name or NORAD ID"})]}),B.jsxs("div",{className:"object-list",children:[d.slice(0,7).map(K=>B.jsxs("button",{className:_?.norad_id===K.norad_id?"object-row chosen":"object-row",onClick:()=>et(K),children:[B.jsxs("span",{children:[B.jsx("b",{children:K.name||"Unknown object"}),B.jsxs("small",{children:["NORAD ",K.norad_id]})]}),B.jsx("em",{className:K.docked?"tag warn":"tag",children:K.docked?"DOCKED":K.object_type||"UNKNOWN"})]},K.norad_id)),!d.length&&B.jsx("div",{className:"empty",children:"No matching objects."})]}),B.jsxs("button",{className:"link-button",onClick:()=>r("objects"),children:["Browse full catalog ",B.jsx(nx,{size:14})]})]}),B.jsxs("div",{className:"dock glass",children:[B.jsx("div",{className:"seg",role:"group","aria-label":"Assessment window",children:[1,6,24,48,72].map(K=>B.jsxs("button",{className:y===K?"on":"",onClick:()=>S(K),children:[K,"h"]},K))}),B.jsxs("button",{className:"primary",disabled:!_||k||I?.status==="running",onClick:pt,children:[I?.status==="running"?B.jsx(hS,{className:"spin",size:16}):B.jsx(jE,{size:16}),I?.status==="running"?"Running…":k?"Select host":"Run conjunction assessment"]})]}),B.jsx("span",{className:"drag-hint",children:"DRAG TO ROTATE · ⌘/CTRL + SCROLL TO ZOOM · ORBIT NOT TO SCALE"})]}),B.jsxs("section",{className:"feed",children:[B.jsxs("div",{className:"feed-head",children:[B.jsxs("div",{children:[B.jsx("span",{className:"eyebrow",children:"RECENT CONJUNCTIONS"}),B.jsx("h2",{children:"Independent objects only"})]}),B.jsxs("button",{className:"link-inline",onClick:()=>r("conjunctions"),children:["View all ",B.jsx(nx,{size:14})]})]}),B.jsx("div",{className:"card",children:B.jsx(vm,{events:p.slice(0,8),onSelect:P,loading:T})})]})]}):B.jsxs("div",{className:"page-heading",children:[B.jsx("span",{className:"eyebrow",children:"SATCOLLIVO"}),B.jsx("h1",{children:i==="data"?"System":i})]}),i==="objects"&&B.jsxs("section",{className:"card",children:[B.jsx(ho,{title:"TRACKED OBJECTS",subtitle:`${d.length} objects matching your search`}),B.jsx("div",{className:"toolbar",children:B.jsxs("div",{className:"search-box wide",children:[B.jsx(ax,{size:16}),B.jsx("input",{value:x,onChange:K=>v(K.target.value),placeholder:"Search name or NORAD ID"})]})}),B.jsx("div",{className:"catalog",children:d.map(K=>B.jsxs("button",{className:_?.norad_id===K.norad_id?"catalog-item selected":"catalog-item",onClick:()=>et(K),children:[B.jsx("span",{className:"catalog-icon",children:B.jsx(ix,{size:17})}),B.jsxs("span",{children:[B.jsx("b",{children:K.name||"Unknown object"}),B.jsxs("small",{children:["NORAD ",K.norad_id]})]}),B.jsx("em",{children:K.object_type||"UNKNOWN"})]},K.norad_id))})]}),i==="conjunctions"&&B.jsxs("section",{className:"card",children:[B.jsx(ho,{title:"CONJUNCTION HISTORY",subtitle:"Independent-object events only"}),B.jsx(vm,{events:p,onSelect:P})]}),i==="threats"&&B.jsxs("section",{className:"card",children:[B.jsx(ho,{title:"THREAT MONITOR",subtitle:"Stored independent-object events with Pc ≥ 1×10⁻⁶"}),B.jsxs("div",{className:"threat-grid",children:[St.map(K=>B.jsxs("button",{className:"threat",onClick:()=>P(K),children:[B.jsxs("div",{className:"threat-top",children:[B.jsx("b",{className:`risk ${xo(K.probability_of_collision).toLowerCase()}`,children:xo(K.probability_of_collision)}),B.jsx("span",{children:ns(K.tca)})]}),B.jsx("h3",{children:K.primary_name||`NORAD ${K.primary_norad_id}`}),B.jsxs("p",{children:["vs ",K.secondary_name||`NORAD ${K.secondary_norad_id}`]}),B.jsxs("div",{children:[B.jsxs("span",{children:["Miss distance",B.jsxs("strong",{children:[Number(K.miss_distance_km).toFixed(3)," km"]})]}),B.jsxs("span",{children:["Pc",B.jsx("strong",{children:sf(K.probability_of_collision)})]})]})]},K.id)),!St.length&&B.jsx("div",{className:"empty",children:"No elevated threats in stored history."})]})]}),i==="maneuvers"&&B.jsxs("section",{className:"card",children:[B.jsx(ho,{title:"MANEUVER ANALYSIS",subtitle:"Prototype decision-support recommendations"}),Q.map(K=>{const Tt=K.maneuver_details||{};return B.jsxs("button",{className:"maneuver-row",onClick:()=>P(K),children:[B.jsxs("span",{children:[B.jsx("b",{children:K.primary_name||`NORAD ${K.primary_norad_id}`}),B.jsxs("small",{children:["vs ",K.secondary_name||`NORAD ${K.secondary_norad_id}`]})]}),B.jsxs("span",{children:[B.jsx("small",{children:"ΔV"}),B.jsx("b",{children:Tt.delta_v_m_s!=null?`${Tt.delta_v_m_s} m/s`:"—"})]}),B.jsxs("span",{children:[B.jsx("small",{children:"LEAD"}),B.jsx("b",{children:Tt.lead_time_hours!=null?`${Tt.lead_time_hours} h`:"—"})]}),B.jsxs("span",{children:[B.jsx("small",{children:"BURN"}),B.jsx("b",{children:Tt.burn_time?ns(Tt.burn_time):"—"})]})]},K.id)}),!Q.length&&B.jsx("div",{className:"empty",children:"No maneuver recommendations have been stored."}),B.jsx("div",{className:"notice",children:"Maneuver estimates are prototype linearized decision support, not flight commands."})]}),i==="data"&&B.jsxs("div",{className:"system-grid",children:[B.jsxs("section",{className:"card",children:[B.jsx(ho,{title:"DATABASE",subtitle:"Current tracking store"}),B.jsx(Di,{label:"Tracked records",value:l?.total_records}),B.jsx(Di,{label:"Unique objects",value:l?.unique_objects}),B.jsx(Di,{label:"Conjunction events",value:l?.event_count}),B.jsx(Di,{label:"Maneuver recommendations",value:l?.maneuver_count}),B.jsx(Di,{label:"Latest data fetch",value:ns(l?.latest_fetch)}),B.jsx(Di,{label:"Latest assessment",value:ns(l?.latest_assessment)})]}),B.jsxs("section",{className:"card",children:[B.jsx(ho,{title:"PIPELINE",subtitle:"Application components"}),["CelesTrak ingestion","Docked-object metadata","SQLite catalog","SGP4 propagation","Altitude pre-filter","Conjunction search","DPWC covariance","Collision probability","Maneuver planner","React console","3D orbit viewer"].map(K=>B.jsxs("div",{className:"pipeline-row",children:[B.jsx(dS,{size:16}),B.jsx("span",{children:K}),B.jsx("b",{children:"READY"})]},K))]})]})]})]}),I&&B.jsx(ZC,{data:I,onClose:()=>z(null)}),w&&B.jsx(jC,{event:w,onClose:()=>P(null)})]})}function Xc({label:o,value:e,tone:i=""}){return B.jsxs("div",{className:`kpi ${i}`,children:[B.jsx("strong",{children:e}),B.jsx("span",{children:o})]})}function ho({title:o,subtitle:e}){return B.jsx("div",{className:"card-header",children:B.jsxs("div",{children:[B.jsx("span",{children:o}),B.jsx("small",{children:e})]})})}function Di({label:o,value:e}){return B.jsxs("div",{className:"info-row",children:[B.jsx("span",{children:o}),B.jsx("b",{children:e??"—"})]})}function vm({events:o=[],onSelect:e,loading:i}){return B.jsxs("div",{className:"table-wrap",children:[B.jsxs("div",{className:"table head",children:[B.jsx("span",{children:"PRIMARY"}),B.jsx("span",{children:"SECONDARY"}),B.jsx("span",{children:"TCA"}),B.jsx("span",{children:"MISS"}),B.jsx("span",{children:"PC"}),B.jsx("span",{children:"RISK"})]}),o.map((r,l)=>B.jsxs("button",{className:"table row","data-risk":xo(r.probability_of_collision).toLowerCase(),onClick:()=>e?.(r),children:[B.jsx("span",{children:r.primary_name||`#${r.primary_norad_id}`}),B.jsx("span",{children:r.secondary_name||`#${r.secondary_norad_id}`}),B.jsx("span",{children:ns(r.tca)}),B.jsxs("span",{children:[Number(r.miss_distance_km).toFixed(3)," km"]}),B.jsx("span",{className:"mono",children:sf(r.probability_of_collision)}),B.jsx("span",{children:B.jsx("b",{className:`risk ${xo(r.probability_of_collision).toLowerCase()}`,children:xo(r.probability_of_collision)})})]},r.id||l)),!o.length&&!i&&B.jsx("div",{className:"empty",children:"No independent conjunctions stored yet. Run an assessment to create history."})]})}function ZC({data:o,onClose:e}){const i=o.result,r=o.status==="running",l=o.status==="failed",f=o.status==="complete",d=r?"Assessment running…":l?"Assessment failed":i?.event_count?"Conjunctions detected":"No qualifying conjunctions";return B.jsx("div",{className:"overlay",children:B.jsxs("section",{className:"modal",children:[B.jsxs("div",{className:"modal-top",children:[B.jsxs("div",{children:[B.jsx("span",{className:"eyebrow",children:"ASSESSMENT RESULT"}),B.jsx("h2",{children:d})]}),B.jsx("button",{className:"icon-button",onClick:e,children:B.jsx(Sm,{size:17})})]}),r&&B.jsxs("div",{className:"modal-state",children:[B.jsx(hS,{className:"spin",size:28}),B.jsx("strong",{children:"Running conjunction assessment…"}),B.jsx("span",{children:"Propagation → pre-filter → docked filtering → TCA → covariance → Pc"})]}),l&&B.jsxs("div",{className:"modal-state",children:[B.jsx(bp,{size:28}),B.jsx("strong",{children:o.error})]}),f&&B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"result-stats",children:[B.jsx(Di,{label:"Primary",value:i.primary.name}),B.jsx(Di,{label:"Candidates",value:i.candidate_count}),B.jsx(Di,{label:"Orbit filter",value:i.filtered_out}),B.jsx(Di,{label:"Docked excluded",value:i.docked_excluded??0}),B.jsx(Di,{label:"Events",value:i.event_count}),B.jsx(Di,{label:"Window",value:`${i.window_hours} hours`})]}),i.events?.length?B.jsx(vm,{events:i.events}):B.jsxs("div",{className:"modal-empty",children:[B.jsx(dS,{size:28}),B.jsx("b",{children:"NO QUALIFYING CONJUNCTIONS"}),B.jsx("span",{children:"No independent object passed the configured screening threshold in this window."})]})]}),B.jsx("button",{className:"secondary wide",onClick:e,children:"Close"})]})})}function jC({event:o,onClose:e}){const i=o.maneuver_details||{};return B.jsx("div",{className:"overlay",children:B.jsxs("section",{className:"modal",children:[B.jsxs("div",{className:"modal-top",children:[B.jsxs("div",{children:[B.jsx("span",{className:"eyebrow",children:"CONJUNCTION EVENT"}),B.jsxs("h2",{children:[o.primary_name||`NORAD ${o.primary_norad_id}`," ",B.jsxs("small",{children:["vs ",o.secondary_name||`NORAD ${o.secondary_norad_id}`]})]})]}),B.jsx("button",{className:"icon-button",onClick:e,children:B.jsx(Sm,{size:17})})]}),B.jsx("div",{className:"detail-grid",children:[["TCA",ns(o.tca)],["MISS DISTANCE",`${Number(o.miss_distance_km).toFixed(3)} km`],["PROBABILITY OF COLLISION",sf(o.probability_of_collision)],["RISK",xo(o.probability_of_collision)]].map(([r,l])=>B.jsx(cS,{label:r,value:l},r))}),B.jsxs("div",{className:"detail-section",children:[B.jsx("span",{className:"eyebrow",children:"MANEUVER RECOMMENDATION"}),o.maneuver_recommended?B.jsx("div",{className:"detail-grid nested",children:[["ΔV",i.delta_v_m_s!=null?`${i.delta_v_m_s} m/s`:"—"],["DIRECTION",i.direction_ric||"—"],["BURN TIME",i.burn_time?ns(i.burn_time):"—"],["TARGET PC",i.target_pc?sf(i.target_pc):"—"]].map(([r,l])=>B.jsx(cS,{label:r,value:l},r))}):B.jsx("p",{className:"muted",children:"No maneuver was recommended for this event."})]}),B.jsx("div",{className:"notice",children:"Validate any maneuver with higher-fidelity numerical re-propagation before operational use."}),B.jsx("button",{className:"secondary wide",onClick:e,children:"Close"})]})})}function cS({label:o,value:e}){return B.jsxs("div",{className:"info-box",children:[B.jsx("small",{children:o}),B.jsx("b",{children:e})]})}GE.createRoot(document.getElementById("root")).render(B.jsx(YC,{}));
