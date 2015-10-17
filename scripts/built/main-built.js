/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */


define("module-one",[],function(){console.log("Module 1 : loaded")}),!function(e,t,n,r){"use strict";function i(e,t,n){return setTimeout(l(e,n),t)}function s(e,t,n){return Array.isArray(e)?(o(e,n[t],n),!0):!1}function o(e,t,n){var i;if(e)if(e.forEach)e.forEach(t,n);else if(e.length!==r)for(i=0;i<e.length;)t.call(n,e[i],i,e),i++;else for(i in e)e.hasOwnProperty(i)&&t.call(n,e[i],i,e)}function u(e,t,n){for(var i=Object.keys(t),s=0;s<i.length;)(!n||n&&e[i[s]]===r)&&(e[i[s]]=t[i[s]]),s++;return e}function a(e,t){return u(e,t,!0)}function f(e,t,n){var r,i=t.prototype;r=e.prototype=Object.create(i),r.constructor=e,r._super=i,n&&u(r,n)}function l(e,t){return function(){return e.apply(t,arguments)}}function c(e,t){return typeof e==lt?e.apply(t?t[0]||r:r,t):e}function h(e,t){return e===r?t:e}function p(e,t,n){o(g(t),function(t){e.addEventListener(t,n,!1)})}function d(e,t,n){o(g(t),function(t){e.removeEventListener(t,n,!1)})}function v(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}function m(e,t){return e.indexOf(t)>-1}function g(e){return e.trim().split(/\s+/g)}function y(e,t,n){if(e.indexOf&&!n)return e.indexOf(t);for(var r=0;r<e.length;){if(n&&e[r][n]==t||!n&&e[r]===t)return r;r++}return-1}function b(e){return Array.prototype.slice.call(e,0)}function w(e,t,n){for(var r=[],i=[],s=0;s<e.length;){var o=t?e[s][t]:e[s];y(i,o)<0&&r.push(e[s]),i[s]=o,s++}return n&&(r=t?r.sort(function(e,n){return e[t]>n[t]}):r.sort()),r}function E(e,t){for(var n,i,s=t[0].toUpperCase()+t.slice(1),o=0;o<at.length;){if(n=at[o],i=n?n+s:t,i in e)return i;o++}return r}function S(){return dt++}function x(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function T(e,t){var n=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){c(e.options.enable,[e])&&n.handler(t)},this.init()}function N(e){var t,n=e.options.inputClass;return new(t=n?n:gt?I:yt?U:mt?W:F)(e,C)}function C(e,t,n){var r=n.pointers.length,i=n.changedPointers.length,s=t&Tt&&r-i===0,o=t&(Ct|kt)&&r-i===0;n.isFirst=!!s,n.isFinal=!!o,s&&(e.session={}),n.eventType=t,k(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n}function k(e,t){var n=e.session,r=t.pointers,i=r.length;n.firstInput||(n.firstInput=O(t)),i>1&&!n.firstMultiple?n.firstMultiple=O(t):1===i&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,u=o?o.center:s.center,a=t.center=M(r);t.timeStamp=pt(),t.deltaTime=t.timeStamp-s.timeStamp,t.angle=H(u,a),t.distance=P(u,a),L(n,t),t.offsetDirection=D(t.deltaX,t.deltaY),t.scale=o?j(o.pointers,r):1,t.rotation=o?B(o.pointers,r):0,A(n,t);var f=e.element;v(t.srcEvent.target,f)&&(f=t.srcEvent.target),t.target=f}function L(e,t){var n=t.center,r=e.offsetDelta||{},i=e.prevDelta||{},s=e.prevInput||{};(t.eventType===Tt||s.eventType===Ct)&&(i=e.prevDelta={x:s.deltaX||0,y:s.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y}),t.deltaX=i.x+(n.x-r.x),t.deltaY=i.y+(n.y-r.y)}function A(e,t){var n,i,s,o,u=e.lastInterval||t,a=t.timeStamp-u.timeStamp;if(t.eventType!=kt&&(a>xt||u.velocity===r)){var f=u.deltaX-t.deltaX,l=u.deltaY-t.deltaY,c=_(a,f,l);i=c.x,s=c.y,n=ht(c.x)>ht(c.y)?c.x:c.y,o=D(f,l),e.lastInterval=t}else n=u.velocity,i=u.velocityX,s=u.velocityY,o=u.direction;t.velocity=n,t.velocityX=i,t.velocityY=s,t.direction=o}function O(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:ct(e.pointers[n].clientX),clientY:ct(e.pointers[n].clientY)},n++;return{timeStamp:pt(),pointers:t,center:M(t),deltaX:e.deltaX,deltaY:e.deltaY}}function M(e){var t=e.length;if(1===t)return{x:ct(e[0].clientX),y:ct(e[0].clientY)};for(var n=0,r=0,i=0;t>i;)n+=e[i].clientX,r+=e[i].clientY,i++;return{x:ct(n/t),y:ct(r/t)}}function _(e,t,n){return{x:t/e||0,y:n/e||0}}function D(e,t){return e===t?Lt:ht(e)>=ht(t)?e>0?At:Ot:t>0?Mt:_t}function P(e,t,n){n||(n=Bt);var r=t[n[0]]-e[n[0]],i=t[n[1]]-e[n[1]];return Math.sqrt(r*r+i*i)}function H(e,t,n){n||(n=Bt);var r=t[n[0]]-e[n[0]],i=t[n[1]]-e[n[1]];return 180*Math.atan2(i,r)/Math.PI}function B(e,t){return H(t[1],t[0],jt)-H(e[1],e[0],jt)}function j(e,t){return P(t[0],t[1],jt)/P(e[0],e[1],jt)}function F(){this.evEl=It,this.evWin=qt,this.allow=!0,this.pressed=!1,T.apply(this,arguments)}function I(){this.evEl=zt,this.evWin=Wt,T.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function q(){this.evTarget=Vt,this.evWin=$t,this.started=!1,T.apply(this,arguments)}function R(e,t){var n=b(e.touches),r=b(e.changedTouches);return t&(Ct|kt)&&(n=w(n.concat(r),"identifier",!0)),[n,r]}function U(){this.evTarget=Kt,this.targetIds={},T.apply(this,arguments)}function z(e,t){var n=b(e.touches),r=this.targetIds;if(t&(Tt|Nt)&&1===n.length)return r[n[0].identifier]=!0,[n,n];var i,s,o=b(e.changedTouches),u=[],a=this.target;if(s=n.filter(function(e){return v(e.target,a)}),t===Tt)for(i=0;i<s.length;)r[s[i].identifier]=!0,i++;for(i=0;i<o.length;)r[o[i].identifier]&&u.push(o[i]),t&(Ct|kt)&&delete r[o[i].identifier],i++;return u.length?[w(s.concat(u),"identifier",!0),u]:void 0}function W(){T.apply(this,arguments);var e=l(this.handler,this);this.touch=new U(this.manager,e),this.mouse=new F(this.manager,e)}function X(e,t){this.manager=e,this.set(t)}function V(e){if(m(e,tn))return tn;var t=m(e,nn),n=m(e,rn);return t&&n?nn+" "+rn:t||n?t?nn:rn:m(e,en)?en:Zt}function $(e){this.id=S(),this.manager=null,this.options=a(e||{},this.defaults),this.options.enable=h(this.options.enable,!0),this.state=sn,this.simultaneous={},this.requireFail=[]}function J(e){return e&ln?"cancel":e&an?"end":e&un?"move":e&on?"start":""}function K(e){return e==_t?"down":e==Mt?"up":e==At?"left":e==Ot?"right":""}function Q(e,t){var n=t.manager;return n?n.get(e):e}function G(){$.apply(this,arguments)}function Y(){G.apply(this,arguments),this.pX=null,this.pY=null}function Z(){G.apply(this,arguments)}function et(){$.apply(this,arguments),this._timer=null,this._input=null}function tt(){G.apply(this,arguments)}function nt(){G.apply(this,arguments)}function rt(){$.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function it(e,t){return t=t||{},t.recognizers=h(t.recognizers,it.defaults.preset),new st(e,t)}function st(e,t){t=t||{},this.options=a(t,it.defaults),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.element=e,this.input=N(this),this.touchAction=new X(this,this.options.touchAction),ot(this,!0),o(t.recognizers,function(e){var t=this.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])},this)}function ot(e,t){var n=e.element;o(e.options.cssProps,function(e,r){n.style[E(n.style,r)]=t?e:""})}function ut(e,n){var r=t.createEvent("Event");r.initEvent(e,!0,!0),r.gesture=n,n.target.dispatchEvent(r)}var at=["","webkit","moz","MS","ms","o"],ft=t.createElement("div"),lt="function",ct=Math.round,ht=Math.abs,pt=Date.now,dt=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,mt="ontouchstart"in e,gt=E(e,"PointerEvent")!==r,yt=mt&&vt.test(navigator.userAgent),bt="touch",wt="pen",Et="mouse",St="kinect",xt=25,Tt=1,Nt=2,Ct=4,kt=8,Lt=1,At=2,Ot=4,Mt=8,_t=16,Dt=At|Ot,Pt=Mt|_t,Ht=Dt|Pt,Bt=["x","y"],jt=["clientX","clientY"];T.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(x(this.element),this.evWin,this.domHandler)}};var Ft={mousedown:Tt,mousemove:Nt,mouseup:Ct},It="mousedown",qt="mousemove mouseup";f(F,T,{handler:function(e){var t=Ft[e.type];t&Tt&&0===e.button&&(this.pressed=!0),t&Nt&&1!==e.which&&(t=Ct),this.pressed&&this.allow&&(t&Ct&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:Et,srcEvent:e}))}});var Rt={pointerdown:Tt,pointermove:Nt,pointerup:Ct,pointercancel:kt,pointerout:kt},Ut={2:bt,3:wt,4:Et,5:St},zt="pointerdown",Wt="pointermove pointerup pointercancel";e.MSPointerEvent&&(zt="MSPointerDown",Wt="MSPointerMove MSPointerUp MSPointerCancel"),f(I,T,{handler:function(e){var t=this.store,n=!1,r=e.type.toLowerCase().replace("ms",""),i=Rt[r],s=Ut[e.pointerType]||e.pointerType,o=s==bt,u=y(t,e.pointerId,"pointerId");i&Tt&&(0===e.button||o)?0>u&&(t.push(e),u=t.length-1):i&(Ct|kt)&&(n=!0),0>u||(t[u]=e,this.callback(this.manager,i,{pointers:t,changedPointers:[e],pointerType:s,srcEvent:e}),n&&t.splice(u,1))}});var Xt={touchstart:Tt,touchmove:Nt,touchend:Ct,touchcancel:kt},Vt="touchstart",$t="touchstart touchmove touchend touchcancel";f(q,T,{handler:function(e){var t=Xt[e.type];if(t===Tt&&(this.started=!0),this.started){var n=R.call(this,e,t);t&(Ct|kt)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:bt,srcEvent:e})}}});var Jt={touchstart:Tt,touchmove:Nt,touchend:Ct,touchcancel:kt},Kt="touchstart touchmove touchend touchcancel";f(U,T,{handler:function(e){var t=Jt[e.type],n=z.call(this,e,t);n&&this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:bt,srcEvent:e})}}),f(W,T,{handler:function(e,t,n){var r=n.pointerType==bt,i=n.pointerType==Et;if(r)this.mouse.allow=!1;else if(i&&!this.mouse.allow)return;t&(Ct|kt)&&(this.mouse.allow=!0),this.callback(e,t,n)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Qt=E(ft.style,"touchAction"),Gt=Qt!==r,Yt="compute",Zt="auto",en="manipulation",tn="none",nn="pan-x",rn="pan-y";X.prototype={set:function(e){e==Yt&&(e=this.compute()),Gt&&(this.manager.element.style[Qt]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return o(this.manager.recognizers,function(t){c(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))}),V(e.join(" "))},preventDefaults:function(e){if(!Gt){var t=e.srcEvent,n=e.offsetDirection;if(this.manager.session.prevented)return void t.preventDefault();var r=this.actions,i=m(r,tn),s=m(r,rn),o=m(r,nn);return i||s&&n&Dt||o&&n&Pt?this.preventSrc(t):void 0}},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}};var sn=1,on=2,un=4,an=8,fn=an,ln=16,cn=32;$.prototype={defaults:{},set:function(e){return u(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(s(e,"recognizeWith",this))return this;var t=this.simultaneous;return e=Q(e,this),t[e.id]||(t[e.id]=e,e.recognizeWith(this)),this},dropRecognizeWith:function(e){return s(e,"dropRecognizeWith",this)?this:(e=Q(e,this),delete this.simultaneous[e.id],this)},requireFailure:function(e){if(s(e,"requireFailure",this))return this;var t=this.requireFail;return e=Q(e,this),-1===y(t,e)&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(s(e,"dropRequireFailure",this))return this;e=Q(e,this);var t=y(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(e){function t(t){n.manager.emit(n.options.event+(t?J(r):""),e)}var n=this,r=this.state;an>r&&t(!0),t(),r>=an&&t(!0)},tryEmit:function(e){return this.canEmit()?this.emit(e):void (this.state=cn)},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(cn|sn)))return!1;e++}return!0},recognize:function(e){var t=u({},e);return c(this.options.enable,[this,t])?(this.state&(fn|ln|cn)&&(this.state=sn),this.state=this.process(t),void (this.state&(on|un|an|ln)&&this.tryEmit(t))):(this.reset(),void (this.state=cn))},process:function(){},getTouchAction:function(){},reset:function(){}},f(G,$,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},process:function(e){var t=this.state,n=e.eventType,r=t&(on|un),i=this.attrTest(e);return r&&(n&kt||!i)?t|ln:r||i?n&Ct?t|an:t&on?t|un:on:cn}}),f(Y,G,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ht},getTouchAction:function(){var e=this.options.direction,t=[];return e&Dt&&t.push(rn),e&Pt&&t.push(nn),t},directionTest:function(e){var t=this.options,n=!0,r=e.distance,i=e.direction,s=e.deltaX,o=e.deltaY;return i&t.direction||(t.direction&Dt?(i=0===s?Lt:0>s?At:Ot,n=s!=this.pX,r=Math.abs(e.deltaX)):(i=0===o?Lt:0>o?Mt:_t,n=o!=this.pY,r=Math.abs(e.deltaY))),e.direction=i,n&&r>t.threshold&&i&t.direction},attrTest:function(e){return G.prototype.attrTest.call(this,e)&&(this.state&on||!(this.state&on)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=K(e.direction);t&&this.manager.emit(this.options.event+t,e),this._super.emit.call(this,e)}}),f(Z,G,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[tn]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||this.state&on)},emit:function(e){if(this._super.emit.call(this,e),1!==e.scale){var t=e.scale<1?"in":"out";this.manager.emit(this.options.event+t,e)}}}),f(et,$,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Zt]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,s=e.deltaTime>t.time;if(this._input=e,!r||!n||e.eventType&(Ct|kt)&&!s)this.reset();else if(e.eventType&Tt)this.reset(),this._timer=i(function(){this.state=fn,this.tryEmit()},t.time,this);else if(e.eventType&Ct)return fn;return cn},reset:function(){clearTimeout(this._timer)},emit:function(e){this.state===fn&&(e&&e.eventType&Ct?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=pt(),this.manager.emit(this.options.event,this._input)))}}),f(tt,G,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[tn]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||this.state&on)}}),f(nt,G,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Dt|Pt,pointers:1},getTouchAction:function(){return Y.prototype.getTouchAction.call(this)},attrTest:function(e){var t,n=this.options.direction;return n&(Dt|Pt)?t=e.velocity:n&Dt?t=e.velocityX:n&Pt&&(t=e.velocityY),this._super.attrTest.call(this,e)&&n&e.direction&&e.distance>this.options.threshold&&ht(t)>this.options.velocity&&e.eventType&Ct},emit:function(e){var t=K(e.direction);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}}),f(rt,$,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[en]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,s=e.deltaTime<t.time;if(this.reset(),e.eventType&Tt&&0===this.count)return this.failTimeout();if(r&&s&&n){if(e.eventType!=Ct)return this.failTimeout();var o=this.pTime?e.timeStamp-this.pTime<t.interval:!0,u=!this.pCenter||P(this.pCenter,e.center)<t.posThreshold;this.pTime=e.timeStamp,this.pCenter=e.center,u&&o?this.count+=1:this.count=1,this._input=e;var a=this.count%t.taps;if(0===a)return this.hasRequireFailures()?(this._timer=i(function(){this.state=fn,this.tryEmit()},t.interval,this),on):fn}return cn},failTimeout:function(){return this._timer=i(function(){this.state=cn},this.options.interval,this),cn},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==fn&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),it.VERSION="2.0.4",it.defaults={domEvents:!1,touchAction:Yt,enable:!0,inputTarget:null,inputClass:null,preset:[[tt,{enable:!1}],[Z,{enable:!1},["rotate"]],[nt,{direction:Dt}],[Y,{direction:Dt},["swipe"]],[rt],[rt,{event:"doubletap",taps:2},["tap"]],[et]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var hn=1,pn=2;st.prototype={set:function(e){return u(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?pn:hn},recognize:function(e){var t=this.session;if(!t.stopped){this.touchAction.preventDefaults(e);var n,r=this.recognizers,i=t.curRecognizer;(!i||i&&i.state&fn)&&(i=t.curRecognizer=null);for(var s=0;s<r.length;)n=r[s],t.stopped===pn||i&&n!=i&&!n.canRecognizeWith(i)?n.reset():n.recognize(e),!i&&n.state&(on|un|an)&&(i=t.curRecognizer=n),s++}},get:function(e){if(e instanceof $)return e;for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n];return null},add:function(e){if(s(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},remove:function(e){if(s(e,"remove",this))return this;var t=this.recognizers;return e=this.get(e),t.splice(y(t,e),1),this.touchAction.update(),this},on:function(e,t){var n=this.handlers;return o(g(e),function(e){n[e]=n[e]||[],n[e].push(t)}),this},off:function(e,t){var n=this.handlers;return o(g(e),function(e){t?n[e].splice(y(n[e],t),1):delete n[e]}),this},emit:function(e,t){this.options.domEvents&&ut(e,t);var n=this.handlers[e]&&this.handlers[e].slice();if(n&&n.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var r=0;r<n.length;)n[r](t),r++}},destroy:function(){this.element&&ot(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},u(it,{INPUT_START:Tt,INPUT_MOVE:Nt,INPUT_END:Ct,INPUT_CANCEL:kt,STATE_POSSIBLE:sn,STATE_BEGAN:on,STATE_CHANGED:un,STATE_ENDED:an,STATE_RECOGNIZED:fn,STATE_CANCELLED:ln,STATE_FAILED:cn,DIRECTION_NONE:Lt,DIRECTION_LEFT:At,DIRECTION_RIGHT:Ot,DIRECTION_UP:Mt,DIRECTION_DOWN:_t,DIRECTION_HORIZONTAL:Dt,DIRECTION_VERTICAL:Pt,DIRECTION_ALL:Ht,Manager:st,Input:T,TouchAction:X,TouchInput:U,MouseInput:F,PointerEventInput:I,TouchMouseInput:W,SingleTouchInput:q,Recognizer:$,AttrRecognizer:G,Tap:rt,Pan:Y,Swipe:nt,Pinch:Z,Rotate:tt,Press:et,on:p,off:d,each:o,merge:a,extend:u,inherit:f,bindFn:l,prefixed:E}),typeof define==lt&&define.amd?define("hammer",[],function(){return it}):"undefined"!=typeof module&&module.exports?module.exports=it:e[n]=it}(window,document,"Hammer"),define("module-two",["hammer"],function(e){console.log("Module 2: loaded"),e&&console.log("Hammer: loaded")}),define("module-three",[],function(){console.log("Module 3: loaded")}),require.config({paths:{hammer:"external/hammer.min"}}),require(["module-one","module-two","module-three"],function(){console.log("Main: loaded")}),define("main",function(){});
