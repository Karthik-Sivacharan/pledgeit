(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b){for(var c=ca,e=a.split("."),d=0;d<e.length-1;d++){var f=e[d];f in c||(c[f]={});c=c[f]}e=e[e.length-1];d=c[e];f=b(d);f!=d&&null!=f&&aa(c,e,{configurable:!0,writable:!0,value:f})}}
var ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(a[d]=e[d])}return a};
da("Object.assign",function(a){return a||ea});
var g=this||self,fa=/^[\w+/_-]+[=]{0,2}$/,h=null;function l(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&fa.test(a)?a:""}
function n(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function p(){}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ha(a){Object.prototype.hasOwnProperty.call(a,r)&&a[r]||(a[r]=++ia)}
var r="closure_uid_"+(1E9*Math.random()>>>0),ia=0;function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=ja:t=ka;return t.apply(null,arguments)}
function la(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var e=c.slice();e.push.apply(e,arguments);return a.apply(this,e)}}
function u(a,b){var c=a.split("."),e=g;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
function ma(a,b){function c(){}
c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,d="string"===typeof a?a.split(""):a,f=0;f<e;f++)f in d&&b.call(c,d[f],f,a)};function w(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
w.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};var x;a:{var y=g.navigator;if(y){var z=y.userAgent;if(z){x=z;break a}}x=""};function A(a,b){this.f=a===B&&b||"";this.g=C}
A.prototype.b=!0;A.prototype.a=function(){return this.f.toString()};
var C={},B={};function D(a,b){this.f=a===E&&b||"";this.g=F}
D.prototype.b=!0;D.prototype.a=function(){return this.f.toString()};
var oa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,F={},E={};function pa(a,b){a.src=b instanceof A&&b.constructor===A&&b.g===C?b.f:"type_error:TrustedResourceUrl";var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=g?c=l(c.document):(null===h&&(h=l(g.document)),c=h);c&&a.setAttribute("nonce",c)}
;function G(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
;function qa(a){g.setTimeout(function(){throw a;},0)}
var H;
function ra(){var a=g.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==x.indexOf("Presto")&&(a=function(){var d=G("IFRAME");d.style.display="none";document.documentElement.appendChild(d);var f=d.contentWindow;d=f.document;d.open();d.close();var k="callImmediate"+Math.random(),m="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;d=t(function(T){if(("*"==m||T.origin==m)&&T.data==k)this.port1.onmessage()},this);
f.addEventListener("message",d,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,m)}}});
if("undefined"!==typeof a&&-1==x.indexOf("Trident")&&-1==x.indexOf("MSIE")){var b=new a,c={},e=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var d=c.m;c.m=null;d()}};
return function(d){e.next={m:d};e=e.next;b.port2.postMessage(0)}}return function(d){g.setTimeout(d,0)}}
;function I(){this.b=this.a=null}
var K=new w(function(){return new J},function(a){a.reset()});
I.prototype.add=function(a,b){var c=K.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
I.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function J(){this.next=this.b=this.a=null}
J.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
J.prototype.reset=function(){this.next=this.b=this.a=null};function sa(a){L||ta();M||(L(),M=!0);N.add(a,void 0)}
var L;function ta(){if(g.Promise&&g.Promise.resolve){var a=g.Promise.resolve(void 0);L=function(){a.then(O)}}else L=function(){var b=O,c;
!(c="function"!=q(g.setImmediate))&&(c=g.Window&&g.Window.prototype)&&(c=-1==x.indexOf("Edge")&&g.Window.prototype.setImmediate==g.setImmediate);c?(H||(H=ra()),H(b)):g.setImmediate(b)}}
var M=!1,N=new I;function O(){for(var a;a=N.remove();){try{a.a.call(a.b)}catch(c){qa(c)}var b=K;b.g(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}M=!1}
;function P(){this.f=this.f;this.g=this.g}
P.prototype.f=!1;P.prototype.dispose=function(){this.f||(this.f=!0,this.j())};
P.prototype.j=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function ua(a){va();return new A(B,a)}
var va=p;function Q(a){P.call(this);this.o=1;this.h=[];this.i=0;this.a=[];this.b={};this.s=!!a}
ma(Q,P);Q.prototype.subscribe=function(a,b,c){var e=this.b[a];e||(e=this.b[a]=[]);var d=this.o;this.a[d]=a;this.a[d+1]=b;this.a[d+2]=c;this.o=d+3;e.push(d);return d};
Q.prototype.l=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.i)this.h.push(a),this.a[a+1]=p;else{if(c){var e=na(c,a);0<=e&&Array.prototype.splice.call(c,e,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
Q.prototype.u=function(a,b){var c=this.b[a];if(c){for(var e=Array(arguments.length-1),d=1,f=arguments.length;d<f;d++)e[d-1]=arguments[d];if(this.s)for(d=0;d<c.length;d++){var k=c[d];wa(this.a[k+1],this.a[k+2],e)}else{this.i++;try{for(d=0,f=c.length;d<f;d++)k=c[d],this.a[k+1].apply(this.a[k+2],e)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.l(c)}}return 0!=d}return!1};
function wa(a,b,c){sa(function(){a.apply(b,c)})}
Q.prototype.clear=function(a){if(a){var b=this.b[a];b&&(v(b,this.l,this),delete this.b[a])}else this.a.length=0,this.b={}};
Q.prototype.j=function(){Q.v.j.call(this);this.clear();this.h.length=0};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var R=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",R);function S(a){var b=arguments;1<b.length?R[b[0]]=b[1]:1===b.length&&Object.assign(R,b[0])}
function U(a,b){return a in R?R[a]:b}
;function V(a){return a?a.dataset?a.dataset[W()]:a.getAttribute("data-loaded"):null}
var xa={};function W(){return xa.loaded||(xa.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var ya=[];function za(a){ya.forEach(function(b){return b(a)})}
function Aa(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ba(b),za(b)}}:a}
function Ba(a){var b=n("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),S("ERRORS",b))}
;function Ca(a){"function"==q(a)&&(a=Aa(a));window.setTimeout(a,0)}
;var Da=n("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.l;Q.prototype.publish=Q.prototype.u;Q.prototype.clear=Q.prototype.clear;u("ytPubsubPubsubInstance",Da);var X=n("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",X);var Y=n("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",Y);var Ea=n("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",Ea);
function Fa(a,b){var c=Z();if(c){var e=c.subscribe(a,function(){var d=arguments;var f=function(){X[e]&&b.apply&&"function"==typeof b.apply&&b.apply(window,d)};
try{Ea[a]?f():Ca(f)}catch(k){Ba(k)}},void 0);
X[e]=!0;Y[a]||(Y[a]=[]);Y[a].push(e)}}
function Ga(a,b){var c=Z();c&&c.publish.apply(c,arguments)}
function Ha(a){var b=Z();if(b)if(b.clear(a),a)Ia(a);else for(var c in Y)Ia(c)}
function Z(){return n("ytPubsubPubsubInstance")}
function Ia(a){Y[a]&&(a=Y[a],v(a,function(b){X[b]&&delete X[b]}),a.length=0)}
;var Ja=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ka=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function La(a,b){var c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var e=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),f=e+6;-1<e&&-1<d&&d>f&&(c=a.substring(f,d),c=c.replace(Ja,""),c=c.replace(Ka,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ma(a,b,c)}
function Ma(a,b,c){c=void 0===c?null:c;var e=Na(a),d=document.getElementById(e),f=d&&V(d),k=d&&!f;f?b&&b():(b&&(Fa(e,b),ha(b)),k||(d=Oa(a,e,function(){if(!V(d)){var m=d;m&&(m.dataset?m.dataset[W()]="true":m.setAttribute("data-loaded","true"));Ga(e);Ca(la(Ha,e))}},c)))}
function Oa(a,b,c,e){e=void 0===e?null:e;var d=G("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
e&&d.setAttribute("nonce",e);pa(d,ua(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Na(a){var b=document.createElement("a");a instanceof D||a instanceof D||(a="object"==typeof a&&a.b?a.a():String(a),oa.test(a)||(a="about:invalid#zClosurez"),a=new D(E,a));b.href=a instanceof D&&a.constructor===D&&a.g===F?a.f:"type_error:SafeUrl";b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"js-"+a}
;u("_gel",function(a){var b=document;return"string"===typeof a?b.getElementById(a):a});
u("yt.setConfig",S);u("yt.config.set",S);u("yt.www.notfound.init",function(){var a=U("SBOX_JS_URL",void 0);a&&La(a,function(){try{n("yt.www.masthead.searchbox.init")()}catch(b){throw b.message+=' SboxUrl: "'+a+'"',b;}})});}).call(this);
