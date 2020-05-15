(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function u(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ea=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ka(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var la=ka(this);function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ma("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ma("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
function qa(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||ua});
ma("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
ma("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=t(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ta(k,g)){var m=new c;ja(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n["delete"](k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=m;return this};
b.prototype.get=function(k){return d(k)&&ta(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.f)?delete k[g][this.f]:!1};
return b});
ma("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.f;return sa(function(){if(m){for(;m.head!=h.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.l[m];if(n&&ta(h.l,m))for(var p=0;p<n.length;p++){var r=n[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:n,index:p,X:r}}return{id:m,list:n,index:-1,X:void 0}}
function e(h){this.l={};this.f=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(p){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.l[m.id]=[]);m.X?m.X.value=k:(m.X={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},m.list.push(m.X),this.f.previous.next=m.X,this.f.previous=m.X,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.X&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.l[h.id],h.X.previous.next=h.X.next,h.X.next.previous=h.X.previous,h.X.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).X};
e.prototype.get=function(h){return(h=d(this,h).X)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ma("Set",function(a){function b(c){this.f=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ma("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
ma("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
var v=this||self;function w(a,b){for(var c=a.split("."),d=b||v,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function xa(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ya(a){return"function"==wa(a)}
function za(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Aa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Aa:x=Ba;return x.apply(null,arguments)}
function Da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var y=Date.now||function(){return+new Date};
function A(a,b){var c=a.split("."),d=v;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function B(a,b){function c(){}
c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Ea(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(Ea,Error);Ea.prototype.name="CustomError";function Fa(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Ea.call(this,d+c[e])}
B(Fa,Ea);Fa.prototype.name="AssertionError";var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ha=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Ia=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Ja=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ka(a,b){var c=Ga(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function La(a){return Array.prototype.concat.apply([],arguments)}
function Ma(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Na(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Oa(a,b){return La.apply([],Ia(a,b,void 0))}
;function Pa(){return null}
function Qa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ra(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Ta(a,b){return null!==a&&b in a}
function Ua(a){for(var b in a)return!1;return!0}
function Va(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Wa(a){var b=wa(a);if("object"==b||"array"==b){if(ya(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Wa(a[c]);return b}return a}
var Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Xa.length;f++)c=Xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Za(a,b){this.f=a===$a&&b||"";this.l=ab}
Za.prototype.ka=!0;Za.prototype.ga=function(){return this.f};
function bb(a){return a instanceof Za&&a.constructor===Za&&a.l===ab?a.f:"type_error:Const"}
var ab={},$a={};var D=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},cb=/&/g,db=/</g,eb=/>/g,fb=/"/g,gb=/'/g,hb=/\x00/g,ib=/[\x00&<>"']/;
function jb(){return-1!=kb.toLowerCase().indexOf("webkit")}
function lb(a,b){for(var c=0,d=D(String(a)).split("."),e=D(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=mb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||mb(0==h[2].length,0==k[2].length)||mb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function mb(a,b){return a<b?-1:a>b?1:0}
;function E(a,b){this.f=a===nb&&b||"";this.l=ob}
E.prototype.ka=!0;E.prototype.ga=function(){return this.f.toString()};
E.prototype.Jb=!0;E.prototype.cb=function(){return 1};
function pb(a){return a instanceof E&&a.constructor===E&&a.l===ob?a.f:"type_error:SafeUrl"}
var qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function rb(a){if(a instanceof E)return a;a="object"==typeof a&&a.ka?a.ga():String(a);qb.test(a)||(a="about:invalid#zClosurez");return new E(nb,a)}
function sb(a){if(a instanceof E)return a;a="object"==typeof a&&a.ka?a.ga():String(a);qb.test(a)||(a="about:invalid#zClosurez");return new E(nb,a)}
var ob={},nb={};function tb(){this.f="";this.l=ub}
tb.prototype.ka=!0;var ub={};tb.prototype.ga=function(){return this.f};
function vb(a){var b=new tb;b.f=a;return b}
var wb=vb("");function xb(a){if(a instanceof E)return'url("'+pb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof Za)a=bb(a);else{a=String(a);var b=a.replace(yb,"$1").replace(yb,"$1").replace(zb,"url");if(Ab.test(b)){if(b=!Bb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Cb(a)}a=b?Db(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Fa("Value does not allow [{;}], got: %s.",[a]);return a}
function Cb(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Ab=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,zb=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),yb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Bb=/\/\*/;function Db(a){return a.replace(zb,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=rb(d).ga();return c+f+b+f+e})}
;function Eb(){this.f="";this.l=Fb}
Eb.prototype.ka=!0;var Fb={};
function Gb(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else{b:{var h=void 0;for(h in d)if(d[h]==g){h=!0;break b}h=!1}if(h&&e.pop()!=g){c=!1;break a}}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+
a);if(!(b instanceof tb)){c=b;d="";for(var k in c){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);e=c[k];null!=e&&(e=Array.isArray(e)?Ia(e,xb).join(" "):xb(e),d+=k+":"+e+";")}b=d?vb(d):wb}k=a+"{"+(b instanceof tb&&b.constructor===tb&&b.l===ub?b.f:"type_error:SafeStyle").replace(/</g,"\\3C ")+"}";return Hb(k)}
function Ib(a){function b(d){Array.isArray(d)?C(d,b):c+=Jb(d)}
var c="";C(arguments,b);return Hb(c)}
Eb.prototype.ga=function(){return this.f};
function Jb(a){return a instanceof Eb&&a.constructor===Eb&&a.l===Fb?a.f:"type_error:SafeStyleSheet"}
function Hb(a){var b=new Eb;b.f=a;return b}
var Kb=Hb("");var kb;a:{var Lb=v.navigator;if(Lb){var Mb=Lb.userAgent;if(Mb){kb=Mb;break a}}kb=""}function F(a){return-1!=kb.indexOf(a)}
function Nb(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function Ob(){return F("Opera")}
function Pb(){return F("Trident")||F("MSIE")}
function Qb(){return F("Safari")&&!(Rb()||F("Coast")||Ob()||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))}
function Rb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")}
function Sb(){function a(e){a:{var f=d;for(var g=e.length,h="string"===typeof e?e.split(""):e,k=0;k<g;k++)if(k in h&&f.call(void 0,h[k],k,e)){f=k;break a}f=-1}return c[0>f?null:"string"===typeof e?e.charAt(f):e[f]]||""}
var b=kb;if(Pb())return Tb(b);b=Nb(b);var c={};C(b,function(e){c[e[0]]=e[1]});
var d=Da(Ta,c);return Ob()?a(["Version","Opera"]):F("Edge")?a(["Edge"]):F("Edg/")?a(["Edg"]):Rb()?a(["Chrome","CriOS","HeadlessChrome"]):(b=b[2])&&b[1]||""}
function Tb(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function G(){this.f="";this.g=Ub;this.l=null}
G.prototype.Jb=!0;G.prototype.cb=function(){return this.l};
G.prototype.ka=!0;G.prototype.ga=function(){return this.f.toString()};
function Vb(a){return a instanceof G&&a.constructor===G&&a.g===Ub?a.f:"type_error:SafeHtml"}
var Ub={};function Wb(a,b){var c=new G;c.f=a;c.l=b;return c}
var Yb=new G;Yb.f=v.trustedTypes?v.trustedTypes.emptyHTML:"";Yb.l=0;var Zb=Qa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Vb(Yb);return!b.parentElement});
function $b(a,b){if(Zb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Vb(b)}
function ac(a,b){var c=b instanceof E?b:sb(b);a.href=pb(c)}
;function bc(a){return decodeURIComponent(a.replace(/\+/g," "))}
;function cc(){return F("Gecko")&&!(jb()&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge")}
;function dc(a){dc[" "](a);return a}
dc[" "]=va;function ec(a,b){var c=fc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var gc=Ob(),H=Pb(),hc=F("Edge"),ic=cc(),jc=jb()&&!F("Edge");function kc(){var a=v.document;return a?a.documentMode:void 0}
var lc;a:{var mc="",nc=function(){var a=kb;if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(gc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nc&&(mc=nc?nc[1]:"");if(H){var oc=kc();if(null!=oc&&oc>parseFloat(mc)){lc=String(oc);break a}}lc=mc}var pc=lc,fc={};function qc(a){return ec(a,function(){return 0<=lb(pc,a)})}
var rc;if(v.document&&H){var sc=kc();rc=sc?sc:parseInt(pc,10)||void 0}else rc=void 0;var tc=rc;var uc={},vc=null;var I=window;function wc(a){this.f=a||{cookie:""}}
l=wc.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Me;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Kb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
l.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=D(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Kb:0,path:b,domain:c});return d};
l.isEmpty=function(){return!this.f.cookie};
l.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=D(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var xc=new wc("undefined"==typeof document?null:document);function yc(a,b){this.width=a;this.height=b}
l=yc.prototype;l.clone=function(){return new yc(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zc(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ac(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
;function Bc(){return!(F("iPad")||F("Android")&&!F("Mobile")||F("Silk"))&&(F("iPod")||F("iPhone")||F("Android")||F("IEMobile"))}
;var Cc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Dc(a){return a?decodeURI(a):a}
function K(a,b){return b.match(Cc)[a]||null}
function Ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Fc(a){var b=[],c;for(c in a)Ec(c,a[c],b);return b.join("&")}
function Gc(a,b){var c=Fc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Hc(a){var b=Ic;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Jc(){var a=[];Hc(function(b){a.push(b)});
return a}
var Ic={Zd:"allow-forms",ae:"allow-modals",be:"allow-orientation-lock",ce:"allow-pointer-lock",de:"allow-popups",ee:"allow-popups-to-escape-sandbox",fe:"allow-presentation",ge:"allow-same-origin",he:"allow-scripts",ie:"allow-top-navigation",je:"allow-top-navigation-by-user-activation"},Kc=Qa(function(){return Jc()});
function Lc(){var a=zc("IFRAME"),b={};C(Kc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Mc(){this.g=this.g;this.m=this.m}
Mc.prototype.g=!1;Mc.prototype.dispose=function(){this.g||(this.g=!0,this.ja())};
Mc.prototype.ja=function(){if(this.m)for(;this.m.length;)this.m.shift()()};/*
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
function Nc(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Oc=(new Date).getTime();function Pc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Qc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],J=e[2],V=e[3],Ca=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var ba=V^z&(J^V);var Xb=1518500249}else ba=z^J^V,Xb=1859775393;else 60>q?(ba=z&J|V&(z|J),Xb=2400959708):(ba=z^J^V,Xb=3395469782);ba=((p<<5|p>>>27)&4294967295)+ba+Ca+Xb+r[q]&4294967295;Ca=V;V=J;J=(z<<30|z>>>2)&4294967295;z=p;p=ba}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+J&4294967295;e[3]=e[3]+V&4294967295;e[4]=e[4]+Ca&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,J=p.length;z<J;++z)q.push(p.charCodeAt(z));p=q}r||(r=p.length);q=0;if(0==m)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[m++]=p[q++],n++,64==m)for(m=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var z=24;0<=z;z-=8)p[r++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,zc:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Rc(a,b,c){var d=[],e=[];if(1==("array"==wa(c)?2:1))return e=[b,a],C(d,function(h){e.push(h)}),Sc(e.join(" "));
var f=[],g=[];C(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(h){e.push(h)});
a=Sc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Sc(a){var b=Qc();b.update(a);return b.zc().toLowerCase()}
;function Tc(a){var b=Pc(String(v.location.href)),c;(c=v.__SAPISID||v.__APISID||v.__OVERRIDE_SID)?c=!0:(c=new wc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?v.__SAPISID:v.__APISID,c||(c=new wc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(v.location.href);return d&&c&&b?[b,Rc(Pc(d),c,a||null)].join(" "):null}return null}
;function Uc(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Vc(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Wc(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Uc(a).match(/\S+/g)||[],c=0<=Ga(c,b);return c}
function Xc(a,b){if(a.classList)a.classList.add(b);else if(!Wc(a,b)){var c=Uc(a);Vc(a,c+(0<c.length?" "+b:b))}}
function Yc(a,b){a.classList?a.classList.remove(b):Wc(a,b)&&Vc(a,Ha(a.classList?a.classList:Uc(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;var Zc="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function $c(){}
$c.prototype.next=function(){throw Zc;};
$c.prototype.fa=function(){return this};
function ad(a){if(a instanceof $c)return a;if("function"==typeof a.fa)return a.fa(!1);if(xa(a)){var b=0,c=new $c;c.next=function(){for(;;){if(b>=a.length)throw Zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function bd(a,b){if(xa(a))try{C(a,b,void 0)}catch(c){if(c!==Zc)throw c;}else{a=ad(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Zc)throw c;}}}
function cd(a){if(xa(a))return Ma(a);a=ad(a);var b=[];bd(a,function(c){b.push(c)});
return b}
;var dd={};
function ed(a){if(H&&!qc(9))return[0,0,0,0];var b=dd.hasOwnProperty(a)?dd[a]:null;if(b)return b;65536<Object.keys(dd).length&&(dd={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=fd(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=fd(b,d);b=fd(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=gd(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=gd(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=gd(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=
gd(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=gd(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=gd(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");gd(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return dd[a]=b}
function gd(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}
function fd(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})}
;var hd={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},id=/[\n\f\r"'()*<>]/g,jd={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function kd(a){return jd[a]}
function ld(a,b,c){b=D(b);if(""==b)return null;var d=String(b.substr(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=pb(a)?'url("'+pb(a).replace(id,kd)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1].toLowerCase()in hd))return null}return b}
;function md(a,b){var c=v[a];return c&&c.prototype?(c=Object.getOwnPropertyDescriptor(c.prototype,b))&&c.get||null:null}
function nd(a,b){var c=v[a];return c&&c.prototype&&c.prototype[b]||null}
var od=md("Element","attributes")||md("Node","attributes"),pd=nd("Element","hasAttribute"),qd=nd("Element","getAttribute"),rd=nd("Element","setAttribute"),sd=nd("Element","removeAttribute"),td=nd("Element","getElementsByTagName"),ud=nd("Element","matches")||nd("Element","msMatchesSelector"),vd=md("Node","nodeName"),wd=md("Node","nodeType"),xd=md("Node","parentNode"),yd=md("HTMLElement","style")||md("Element","style"),zd=md("HTMLStyleElement","sheet"),Ad=nd("CSSStyleDeclaration","getPropertyValue"),
Bd=nd("CSSStyleDeclaration","setProperty");function Cd(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}
function Dd(a,b,c,d){if(a)return a.apply(b,d);if(H&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}
function Ed(a){return Cd(od,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Fd(a,b,c){try{Dd(rd,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}
function Gd(a){return Cd(yd,a,"style",function(b){return b instanceof CSSStyleDeclaration})}
function Hd(a){return Cd(zd,a,"sheet",function(b){return b instanceof CSSStyleSheet})}
function Id(a){return Cd(vd,a,"nodeName",function(b){return"string"==typeof b})}
function Jd(a){return Cd(wd,a,"nodeType",function(b){return"number"==typeof b})}
function Kd(a){return Cd(xd,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}
function Ld(a,b){return Dd(Ad,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}
function Md(a,b,c){Dd(Bd,a,a.setProperty?"setProperty":"setAttribute",[b,c])}
;var Nd=H&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),Od={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function Pd(a,b,c){var d=[];a=Qd(Ma(a.cssRules));C(a,function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&H&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(Nd,"#"+b+" $1"):e.selectorText;d.push(Gb(f,Rd(e.style,c)))}});
return Ib(d)}
function Qd(a){return Ha(a,function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}
function Sd(a,b,c){a=Td("<style>"+a+"</style>");return null==a||null==a.sheet?Kb:Pd(a.sheet,void 0!=b?b:null,c)}
function Td(a){if(H&&!qc(10)||"function"!=typeof v.DOMParser)return null;a=Wb("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString(Vb(a),"text/html").body.children[0]}
function Rd(a,b){if(!a)return wb;var c=document.createElement("div").style,d=Ud(a);C(d,function(e){var f=jc&&e in Od?e:e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=f.lastIndexOf("--",0)&&0!=f.lastIndexOf("var",0)&&(e=Ld(a,e),e=ld(f,e,b),null!=e&&Md(c,f,e))});
return vb(c.cssText||"")}
function Vd(a){var b=Array.from(Dd(td,a,"getElementsByTagName",["STYLE"])),c=Oa(b,function(e){return Ma(Hd(e).cssRules)});
c=Qd(c);c.sort(function(e,f){var g=ed(e.selectorText);a:{var h=ed(f.selectorText);for(var k=Math.min(g.length,h.length),m=0;m<k;m++){var n=g[m];var p=h[m];n=n>p?1:n<p?-1:0;if(0!=n){h=n;break a}}g=g.length;h=h.length;h=g>h?1:g<h?-1:0}return-h});
a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)C(c,function(e){Dd(ud,d,d.matches?"matches":"msMatchesSelector",[e.selectorText])&&e.style&&Wd(d,e.style)});
C(b,Ac)}
function Wd(a,b){var c=Ud(a.style),d=Ud(b);C(d,function(e){if(!(0<=c.indexOf(e))){var f=Ld(b,e);Md(a.style,e,f)}})}
function Ud(a){xa(a)?a=Ma(a):(a=Sa(a),Ka(a,"cssText"));return a}
;zc("DIV");var Xd={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-CONTROLS":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-EXPANDED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-HASPOPUP":!0,"* ARIA-HIDDEN":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,
"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,
"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},Yd={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,
"* CLASS":!0,"* ID":!0,"* STYLE":!0};var Zd="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),$d=0;function ae(){this.g=[];this.l=[];this.f="data-elementweakmap-index-"+$d++}
ae.prototype.set=function(a,b){if(Dd(pd,a,"hasAttribute",[this.f])){var c=parseInt(Dd(qd,a,"getAttribute",[this.f])||null,10);this.l[c]=b}else c=this.l.push(b)-1,Fd(a,this.f,c.toString()),this.g.push(a);return this};
ae.prototype.get=function(a){if(Dd(pd,a,"hasAttribute",[this.f]))return a=parseInt(Dd(qd,a,"getAttribute",[this.f])||null,10),this.l[a]};
ae.prototype.clear=function(){this.g.forEach(function(a){Dd(sd,a,"removeAttribute",[this.f])},this);
this.g=[];this.l=[]};var be=!H||10<=Number(tc),ce=!H||null==document.documentMode;function de(){}
;var ee={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var fe={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var ge={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function he(a){a=a||new ie;je(a);this.f=Va(a.f);this.m=Va(a.D);this.g=Va(a.F);this.u=a.w;C(a.s,function(b){if(0!=b.lastIndexOf("data-",0))throw new Fa('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new Fa('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.f["* "+b.toUpperCase()]=ke},this);
C(a.o,function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||ge[b])throw new Fa("Only valid custom element tag names allowed, got: %s.",[b]);this.g[b]=!0},this);
this.s=a.g;this.i=a.C;this.l=null;this.o=a.u}
B(he,de);function le(a){return function(b,c){var d=a(D(b),c);return d&&"about:invalid#zClosurez"!=pb(d)?pb(d):null}}
function ie(){this.f={};C([Xd,Yd],function(a){C(Sa(a),function(b){this.f[b]=ke},this)},this);
this.l={};this.s=[];this.o=[];this.D=Va(ee);this.F=Va(fe);this.w=!1;this.L=rb;this.H=this.m=this.G=this.g=Pa;this.C=null;this.i=this.u=!1}
function me(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function ne(a,b,c,d){a[c]&&!b[c]&&(a[c]=me(a[c],d))}
function je(a){if(a.i)throw Error("HtmlSanitizer.Builder.build() can only be used once.");ne(a.f,a.l,"* USEMAP",oe);var b=le(a.L);C(["* ACTION","* CITE","* HREF"],function(d){ne(this.f,this.l,d,b)},a);
var c=le(a.g);C(["* LONGDESC","* SRC","LINK HREF"],function(d){ne(this.f,this.l,d,c)},a);
C(["* FOR","* HEADERS","* NAME"],function(d){ne(this.f,this.l,d,Da(pe,this.G))},a);
ne(a.f,a.l,"A TARGET",Da(qe,["_blank","_self"]));ne(a.f,a.l,"* CLASS",Da(re,a.m));ne(a.f,a.l,"* ID",Da(se,a.m));ne(a.f,a.l,"* STYLE",Da(a.H,c));a.i=!0}
function te(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function ke(a){return D(a)}
function qe(a,b){var c=D(b);return 0<=Ga(a,c.toLowerCase())?c:null}
function oe(a){return(a=D(a))&&"#"==a.charAt(0)?a:null}
function pe(a,b,c){return a(D(b),c)}
function re(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function se(a,b,c){return a(D(b),c)}
function ue(a,b){var c=b.data,d=Kd(b);d&&"style"==Id(d).toLowerCase()&&!("STYLE"in a.m)&&"STYLE"in a.g&&(c=Jb(Sd(c,a.l,x(function(e,f){return this.s(e,{pe:f})},a))));
return document.createTextNode(c)}
;function ve(a){var b=new ie;b=new he(b);var c=!("STYLE"in b.m)&&"STYLE"in b.g;c="*"==b.i&&c?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^y()).toString(36)):b.i;b.l=c;if(be){c=a;if(be){a=zc("SPAN");b.l&&"*"==b.i&&(a.id=b.l);b.o&&(c=Td("<div>"+c+"</div>"),Vd(c),c=c.innerHTML);c=Wb(c,null);var d=document.createElement("template");if(ce&&"content"in d)$b(d,c),d=d.content;else{var e=document.implementation.createHTMLDocument("x");d=e.body;
$b(e.body,c)}c=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(d=Zd?new WeakMap:new ae;e=c.nextNode();){c:{var f=b;var g=e;switch(Jd(g)){case 3:f=ue(f,g);break c;case 1:if("TEMPLATE"==Id(g).toUpperCase())f=null;else{var h=Id(g).toUpperCase();if(h in f.m)var k=null;else f.g[h]?k=document.createElement(h):(k=zc("SPAN"),f.u&&Fd(k,"data-sanitizer-original-tag",h.toLowerCase()));if(k){var m=k,n=Ed(g);if(null!=n)for(var p=0;h=n[p];p++)if(h.specified){var r=f;var q=
g,z=h,J=z.name;if(0==J.lastIndexOf("data-sanitizer-",0))r=null;else{var V=Id(q);z=z.value;var Ca={tagName:D(V).toLowerCase(),attributeName:D(J).toLowerCase()},ba={yc:void 0};"style"==Ca.attributeName&&(ba.yc=Gd(q));q=te(V,J);q in r.f?(r=r.f[q],r=r(z,Ca,ba)):(J=te(null,J),J in r.f?(r=r.f[J],r=r(z,Ca,ba)):r=null)}null!==r&&Fd(m,h.name,r)}f=k}else f=null}break c;default:f=null}}if(f){if(1==Jd(f)&&d.set(e,f),e=Kd(e),g=!1,e)h=Jd(e),k=Id(e).toLowerCase(),m=Kd(e),11!=h||m?"body"==k&&m&&(h=Kd(m))&&!Kd(h)&&
(g=!0):g=!0,h=null,g||!e?h=a:1==Jd(e)&&(h=d.get(e)),h.content&&(h=h.content),h.appendChild(f)}else for(f=e;e=f.firstChild;)f.removeChild(e)}d.clear&&d.clear();b=a}else b=zc("SPAN");0<Ed(b).length&&(a=zc("SPAN"),a.appendChild(b),b=a);b=(new XMLSerializer).serializeToString(b);b=b.slice(b.indexOf(">")+1,b.lastIndexOf("</"))}else b="";return Wb(b,null)}
;var we=/^[6-9]$/,xe=/<\/?(?:b|em)>/gi;function ye(a){this.f=a}
var ze=new ye({});function Ae(a,b,c,d,e,f){var g;a instanceof G?g=a:g=Wb(a,null);this.u=g;this.f=b;this.l=c;this.o=d;this.g=e;this.m=f||ze;this.i=!1;switch(this.o){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.i=!0}}
Ae.prototype.getHtml=function(){return Vb(this.u).toString()};
Ae.prototype.s=function(){return this.l};
Ae.prototype.T=function(){return this.o};var Be=/^\s/,Ce=/\s+/,De=/\s+/g,Ee=/^\s+|\s+$/g,Fe=/^\s+$/,Ge=/<[^>]*>/g,He=/&nbsp;/g,Ie=/&#x3000;/g,Je=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Ke=document.getElementsByTagName("head")[0],Le=0,Me=1;function Ne(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Oe(a,b){function c(){return b}
void 0===b&&(b=a);return{Ia:c,Eb:function(){return a},
Qc:c,Ce:function(){return a<b},
equals:function(d){return d&&a==d.Eb()&&b==d.Qc()}}}
function L(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Pe(a,b){var c=[],d;for(d in a)L(d,a[d],c,b);return c.join("&")}
function Qe(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Re(a){return!!a&&!Fe.test(a)}
function Se(a){for(var b=Je.length,c=0;c<b;c+=2)a=a.replace(Je[c],Je[c+1].source);return a}
function Te(a){for(var b=Je.length,c=0;c<b;c+=2)a=a.replace(Je[c+1],Je[c].source);a=a.replace(He," ");return a.replace(Ie,"\u3000")}
function Ue(a,b){return a&&(-1<a.indexOf(" ")||Ce.test(a))?(a=a.replace(De," "),a.replace(b?Ee:Be,"")):a}
function Ve(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function We(){}
function Xe(a){var b=Ye;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Ze(){return 0}
function $e(a){var b={},c;for(c in a)b[c]=a[c];return b}
function af(a,b){var c=a+"";b.length&&(c+="i"+b.join("i"),c+="k"+(-1!=Ga(b,173)?14:1));return c}
;function bf(a,b,c){this.f=a;this.H=b;this.C=c||"";this.s=(Le++).toString(36);this.w=this.f.toLowerCase();this.l=Ue(this.w);this.G={};this.u={};this.m=this.F=this.i=!1;this.D=1}
bf.prototype.getId=function(){return this.s};
function cf(a){a=parseInt(a.s,36);return isNaN(a)?-1:a}
function df(a,b,c,d){a.i||(a.G[b]=c,d&&(a.u[b]=c))}
;function ef(a,b,c,d,e,f){this.l=a;this.f=b;this.g=c;this.m=d;this.i=e;this.s=f;this.o=!0;this.f?this.f.length&&33==this.f[0].T()&&(this.i=this.o=!1):this.f=[];this.g||(this.g=ze)}
ef.prototype.T=function(){return this.o};function ff(){}
ff.prototype.search=function(){};
ff.prototype.redirect=function(){};
ff.prototype.fc=function(){return""};
ff.prototype.Mb=function(){};function gf(){this.l={};this.f={}}
gf.prototype.set=function(a,b){this.l[a]=b};
gf.prototype.has=function(a){return!!this.l[a]};
function M(a,b,c){b in a.f||(a.f[b]=[]);a.f[b].push(c)}
;function hf(a,b,c,d,e,f){this.u=a;this.w=b;this.C=c;this.m=d;this.g=e;this.o=f;this.s={};this.i={};this.f=[];this.l=!1;a=this.w;d=a.l;for(var g in d)if(b=g,c=d[b])this.s[b]=c,this.f.push(c);a=a.f;for(g in a){b=g;d=c=a[b];e=this.i[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.f.push(c);this.i[b]=e}this.f.sort(jf);for(g=0;a=this.f[g++];)a.Z(this.C,this.m);this.u.Mb(this.m);this.m.wc();for(g=0;a=this.f[g++];)a.J(this);for(g=0;a=this.f[g++];)a.setup(this.o);for(g=0;a=this.f[g++];)a.ma(this.o);
for(g=0;a=this.f[g++];)a.K(this.o);this.l=!0}
var Ye=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function kf(a){if(a.l){for(var b=0,c;c=a.f[b++];)c.ca();a.l=!1}}
hf.prototype.isActive=function(){return this.l};
hf.prototype.get=function(a){return this.s[a]};
function N(a,b){return a.i[b]||[]}
function jf(a,b){var c=Xe(a.T()),d=Xe(b.T());return 0>c?1:0>d?-1:c-d}
;function O(a){this.l=a}
l=O.prototype;l.Z=function(){};
l.J=function(){};
l.setup=function(){};
l.ma=function(){};
l.K=function(){};
l.T=function(){return this.l};
l.ca=function(){};function lf(){}
lf.prototype.f=null;lf.prototype.getOptions=function(){var a;(a=this.f)||(a={},mf(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var nf;function of(){}
B(of,lf);function pf(){var a=mf(nf);return a?new ActiveXObject(a):new XMLHttpRequest}
function mf(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l}
nf=new of;function qf(){this.l=149;this.f={};this.g=0}
B(qf,O);l=qf.prototype;l.J=function(a){this.w=a.get(127)};
l.K=function(a){if(a.connectionType==this.va()){this.i=a;var b=this.w.g,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.Da;this.u=b.Na;this.m=b.oc}};
l.ca=function(){rf(this);this.g=0};
l.kc=function(a,b,c){sf(this,a.getId(),a.f,b,c);return!0};
l.va=function(){return 1};
l.eb=function(){return this.g};
l.Ya=function(a){var b=this.f[a];b&&(tf(b),delete this.f[a])};
function sf(a,b,c,d,e){a.i.xb||rf(a);var f=pf();f&&(c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t",f.open("GET",c,!0),f.withCredentials=!0,a.i.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.i.visitorData),f.onreadystatechange=function(){if(4==f.readyState){switch(f.status){case 403:a.g=1E3;break;case 302:case 500:case 502:case 503:++a.g;break;case 200:var g=f.responseText;0==g.lastIndexOf(")]}'\n",0)&&(g=g.substring(5));e(JSON.parse(g));default:a.g=
0}a.Ya(b)}},a.f[b]=f,f.send(null))}
function rf(a){for(var b in a.f)tf(a.f[b]);a.f={}}
function tf(a){a.onreadystatechange=We;var b=a.readyState;0!=b&&4!=b&&a.abort()}
;var uf;function vf(){this.l=153}
u(vf,O);function wf(a,b){a.length&&b.push({T:function(){return 507},
position:2})}
;function xf(a){this.o=a}
xf.prototype.T=function(){return this.o};
xf.prototype.isSelectable=function(){return!0};function yf(a){this.l=152;this.m=a}
B(yf,O);yf.prototype.Oa=We;var zf=Pb(),Af=zf&&0<=lb(Sb(),10),Bf=cc();Bf&&Sb();var Cf=Ob(),Df=jb()&&!F("Edge"),Ef=Qb(),Ff=Rb(),Gf=Bc()&&Qb(),Hf=F("Android"),If=F("Macintosh"),Jf=Bc();var Kf=void 0!=document.documentElement.style.opacity,Lf={rtl:"right",ltr:"left"};function Mf(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Nf(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Sa:b,ha:c}}
function Of(a){try{return Pf(a).activeElement==a}catch(b){}return!1}
function P(a,b){var c=document.createElement(a);b&&(c.className=b);return c}
function Q(a){return P("div",a)}
function Qf(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Lf[b])}
function Rf(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Sf(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Rf(a)}
function Tf(a){var b=P("a");ac(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Uf(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{uc:c,Hb:b}}
function Pf(a){return a?a.ownerDocument||a.document:window.document}
function Vf(a){return a?(a=Pf(a),a.defaultView||a.parentWindow):window}
function Wf(){return Kf?"opacity":"filter"}
function Xf(a){return Kf?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function Yf(){this.o=507;Zf(this)}
u(Yf,xf);Yf.prototype.f=function(){return this.g};
function $f(a,b,c,d){Zf(a,c,d);b=ve(b);$b(a.l,b)}
function Zf(a,b,c){a.g=Q("sbfl_a");a.l=Q("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.g.appendChild(a.l)}
;var ag=[30,35,33,41],bg=[39,10,21];function cg(a,b){yf.call(this,507);this.f=a;this.g=b}
u(cg,yf);cg.prototype.J=function(a){this.i=a.get(128)};
cg.prototype.Z=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
cg.prototype.Ea=function(){return new Yf};
function dg(a){return a.map(function(b){return{label:b.f}})}
cg.prototype.Pa=function(a,b){var c=Ha(this.i.g,function(d){a:if(0<=ag.indexOf(d.T()))d=!1;else{d=d.g||[];for(var e=t(bg),f=e.next();!f.done;f=e.next())if(0<=d.indexOf(f.value)){d=!1;break a}d=!0}return d},this);
0<c.length?($f(b,this.f,dg(c),this.g),b.f().style.display=""):b.f().style.display="none"};function eg(a,b,c,d,e,f,g,h){this.o=35;this.N=b;this.M=c;this.F=d;this.w=e;this.G=g;this.O=h;this.u=!0;this.s=!1;this.g=Q("sbpqs_d");this.m=Q();this.H=P("span","sbpqs_a");this.G&&(this.i=P("a"),ac(this.i,"#ps"),this.i.className="sbsb_i",this.C=Q("fr sbpqs_b"),this.m.appendChild(this.C),this.C.appendChild(this.i),this.l=Q("sbpqs_c"),a=ve(this.O),$b(this.l,a),this.l.setAttribute("role","alert"));this.m.appendChild(this.H);this.g.appendChild(this.m);this.l&&this.g.appendChild(this.l)}
u(eg,xf);eg.prototype.f=function(){return this.g};
eg.prototype.isSelectable=function(){return this.u};
eg.prototype.L=function(a){this.s=!0;var b=x(this.V,this),c=this.N.g,d=this.R;c.g[d]=b;b=[];"1"===Qe(window.location.search).ssl_dbg&&L("ssl_dbg","1",b);L("delq",d,b);L("client",c.o,b);L("callback","google.sbox.d"+c.m,b);d=c.s;L("tok",c.u,b);c.i&&L("authuser",c.i,b);c.f=P("script");c.f.src=d+b.join("&");fg.appendChild(c.f);return Sf(a)};
eg.prototype.V=function(){if(this.s){var a=this.M;if(a.g){a=a.f;for(var b in a.g)for(var c=a.g[b].f,d=0,e;e=c[d++];)if(35==e.T()){delete a.g[b];break}for(b=0;b<a.f.length;++b)a.f[b].reset()}this.g.onmouseover=this.g.onmouseout=this.g.onclick=null;this.m.style.display="none";this.l.style.display="";this.w.i==this.D&&gg(this.F);this.w.f==this.D&&(hg(this.w),this.F.g.focus());this.u=!1}};function ig(){yf.call(this,35)}
u(ig,yf);l=ig.prototype;l.Z=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
l.J=function(a){this.g=a.get(123);this.i=a.get(118);this.o=a.get(189);this.u=a.get(127);this.C=a.get(128)};
l.setup=function(a){this.K(a)};
l.K=function(a){this.w=a.nc;this.f=a.Yb;this.s=a.Xb};
l.Ea=function(a){return new eg(this.u,this.o,this.g,this.i,this.C,a,this.w,this.s)};
l.Pa=function(a,b){var c=a.getHtml(),d=a.f,e=a.l,f=this.f;b.s=!1;b.u=!0;b.R=d;b.D=e;b.m.style.display="";c=ve(c);$b(b.H,c);b.G&&(b.l.style.display="none",f=ve(f),$b(b.i,f),b.i.onclick=x(b.L,b))};
l.Oa=function(a,b,c){c.search(b.f,1)};function jg(){this.l=134;this.g={}}
u(jg,O);l=jg.prototype;l.J=function(a){this.m=a.g.getId()};
l.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=x(this.Od,this)};
l.K=function(a){this.s="//"+(a.Zb||"clients1."+a.Da)+"/complete/deleteitems?";this.u=a.sb;this.i=a.authuser;this.o=a.clientName};
l.ca=function(){kg(this)};
function kg(a){a.f&&(fg.removeChild(a.f),a.f=null)}
l.Od=function(a){kg(this);a=a[0];var b=this.g[a];b&&(delete this.g[a],b())};
var fg=Ke;function lg(){this.l=189}
u(lg,O);lg.prototype.J=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.w=a.get(553)};
lg.prototype.setup=function(a){this.f=a.Mc};
lg.prototype.K=function(a){this.m=a.sb;this.u=!(!this.g||!this.m);this.f&&(a=this.s.f?3E3:0,window.setTimeout(x(this.o,this),a),this.f=!1)};
lg.prototype.o=function(){var a=mg(this.w,"",void 0,void 0,!0);ng(this.i,a);a=this.i;a.m=a.i};function og(){this.l=156}
u(og,O);og.prototype.J=function(a){this.i=a.get(189)};
og.prototype.g=function(a){var b=this.i,c={};b.u&&(c.tok=b.m);"1"===Qe(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)df(a,d,c[d]);return 1};
og.prototype.f=function(){return 12};function pg(){this.l=157}
B(pg,O);function qg(){this.l=156}
B(qg,O);qg.prototype.g=function(a){var b=Qe(bc(window.location.href));b.v&&df(a,"video_id",b.v,!0);return 1};
qg.prototype.f=function(){return 24};function rg(a,b,c){this.l=598;this.C=b;this.u=c;this.o="";this.g=a;this.s=!1}
B(rg,O);rg.prototype.J=function(a){this.G=a.get(553);this.f=a.get(128);this.F=a.get(118);this.D=a.get(150)};
rg.prototype.setup=function(a){this.m=a.ob;this.w=a.Kc};
function sg(a,b){a.o=b;a.G.pb(a.o)}
function tg(a){if(!a.C||a.f.isVisible())return!1;var b=a.F.f;if(!b||0==b.length)return!1;if(b!=a.m)return"always"==a.u&&a.f&&a.f.g&&0<a.f.g.length&&a.f.show(),!1;if(a.g&&a.g.getRefinementsTuple){var c=a.g.getRefinementsTuple();if(c){var d=c[0];"ClearBySearchbox"==d?a.i=[]:"FromSearchResponse"==d&&a.s&&(a.i=c[1],a.s=!1)}}if(!a.i||0>=a.i.length)return a.f&&a.f.g&&0<a.f.g.length?(a.f.show(),!1):"always"==a.u||"fallback"==a.u;c=[];for(var e=d=0;e<a.i.length&&!(c.length>=a.w);++e){var f=a.i[e];f&&0<f.length&&
c.push(new Ae(a.D.bold(b,f),f,d++,0,[71],null))}0<c.length&&ug(a.f,c,!1);return!1}
;function vg(){this.l=156}
B(vg,O);vg.prototype.J=function(a){this.i=a.get(598)};
vg.prototype.g=function(a){var b=this.i,c;a:{if(b.g&&b.g.getPreviousQuery&&(c=b.g.getPreviousQuery()))break a;c=null}var d;d=(d=Qe(bc(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.s=!0,b.m=c,sg(b,c)):d||""==b.o?d&&""==b.o&&sg(b,b.m):sg(b,"");return"mousedown"!=a.C&&"focus"!=a.C||!tg(this.i)?1:2};
vg.prototype.f=function(){return 46};function wg(){this.l=149;this.g=Ke;this.f={}}
u(wg,O);l=wg.prototype;l.J=function(a){this.F=a.get(127);this.u=a.g.getId()};
l.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
l.K=function(a){this.m=a;a.connectionType==this.va()&&(a=this.F.g,this.s=a.protocol,this.o=a.host,this.D=a.Na,this.w=a.oc,this.C="https:"==document.location.protocol,xg(this,x(this.Nd,this)),(new Image).src=this.s+this.o+"/generate_204")};
l.ca=function(){xg(this,null);yg(this)};
l.kc=function(a,b,c,d){c=a.getId();var e=a.f;this.m.xb||yg(this);b=this.s+this.o+this.D+"?"+(this.w?this.w+"&":"")+(b?b+"&":"");a=[];L("q",e,a,!0);this.m.tc||L("callback","google.sbox.p"+this.u,a);if(this.C){e="";for(var f=4+Math.floor(32*Math.random()),g=0,h;g<f;++g)h=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),e+=String.fromCharCode(h);L("gs_gbg",e,a)}e=P("script");e.src=b+a.join("&");e.charset="utf-8";this.f[c]=e;this.i=d;this.g.appendChild(e);
return!0};
l.va=function(){return 0};
l.eb=function(){return 0};
l.Ya=function(a){var b=this.f[a];b&&(this.g.removeChild(b),delete this.f[a])};
function yg(a){for(var b in a.f)a.g.removeChild(a.f[b]);a.f={};a.i=null}
l.Nd=function(a){this.i&&this.i(a)};
function xg(a,b){b||(b=We);var c=window.google;a.m.tc?c.ac.h=b:c.sbox["p"+a.u]=b}
;function zg(){this.l=115;this.m={}}
u(zg,O);l=zg.prototype;l.J=function(a){this.i=a.get(116);if(a=N(a,154))for(var b=0,c;c=a[b++];)this.m[Ag]=c};
l.K=function(){this.f=!1};
l.ca=function(){this.hide()};
l.isVisible=function(){return this.f};
l.getHeight=function(){return this.f?this.i.getHeight():0};
l.show=function(){this.f||(this.i.show(Bg(this)),this.f=!0)};
l.hide=function(){this.f&&(this.i.hide(),this.f=!1)};
function Bg(a){var b=$e(Cg);if(a.g){a=a.g.g;b.na=a.C;b.marginWidth=a.H;var c=a.w.Ud;c||(c="rtl"==a.C?"right":"left");b.horizontalAlignment=c}return b}
var Cg={horizontalAlignment:"left",yd:!0,na:null,marginWidth:0};function Dg(){this.l=118}
u(Dg,O);l=Dg.prototype;l.J=function(a){this.g=a.get(119);this.C=a.get(130);this.R=a.get(145);this.s=a.get(117);this.M=a.get(123);this.D=a.get(374);this.L=a.get(121);this.V=a.get(553);this.i=a.get(128);this.N=a.get(139);this.Y=a.get(173);this.aa=N(a,160)};
l.setup=function(a){this.o=a;this.f=this.m=this.g.f.value||""};
l.K=function(a){this.o=a;this.w=this.G=!1;Eg(this)};
function Fg(a){var b={};R(a.s,11,b);!b.cancel&&a.o.kd&&Gg(a.s,function(){a.i.dismiss()})}
function Hg(a,b){if(0==a.o.Ra||2==a.o.Ra||3==a.o.Ra&&!a.m&&!b)return!1;a:{if(S(a.i)){if(null!=a.i.i)var c=Ig(a.i);else c=a.i,c=S(c)?c.g[0]:null;if(c.i)break a}c=null}var d;if(d=c){if(d=c=c.f)d=a.m,d=!(d||c?d&&c&&d.toLowerCase()==c.toLowerCase():1);d?(a.m=a.f,Ve(c,a.f,!0)&&(c=a.f+c.substr(a.f.length)),Jg(a,c,Oe(c.length),"",!0),Kg(a,c,!0),d=!0):d=!1}return d?(a.D.add(8),!0):!1}
function Jg(a,b,c,d,e){a.o.Cc&&!a.i.isVisible()&&"mousedown"==d&&Lg(a.i,c,d);var f=!1,g=!1;if(b!=a.f||"onremovechip"==d)Ve(d,"key")?a.D.add(1):"paste"==d&&a.D.add(2),f=!0,Mg(a,b),R(a.s,1,{za:d,na:a.u}),g=y(),a.F||(a.F=g),a.H=g,Re(b)&&(e=!0),g=!0;b=mg(a.V,b,c,d);switch(b.D){case 3:b.m=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.m&&!f.s&&(f.s=window.setTimeout(x(f.clear,f),f.w.ld))),a.G&&df(b,"gs_is",1),ng(a.M,b)):g&&(a.i.clear(),f=a.M,f.m=f.i);R(a.s,2,{za:d})}
function Ng(a,b){Mg(a,b);a.g.refresh();R(a.s,4,{na:a.u,input:b})}
function gg(a){a.f!=a.m&&Mg(a,a.m);R(a.s,5,{input:a.m,suggestions:a.i.g,na:a.u});a.g.refresh()}
l.getHeight=function(){return this.g.getHeight()};
function Og(a){if(a.Y){if(a.o.ib)return!0;for(var b=0,c;c=a.aa[b++];)if(c.isEnabled())return!0}return!1}
l.search=function(a){this.L.search(this.f,a)};
l.clear=function(){this.f&&(Mg(this,""),this.g.clear(),R(this.s,1),R(this.s,16),this.i.clear())};
function Pg(a,b){var c=a.g.s.Ia();a.u==b?S(a.i)&&c==a.f.length&&(null!=a.i.i?a.o.Ga&&a.L.search(Ig(a.i).f,6):a.o.Lb&&Hg(a,!0)):a.C&&0==c&&a.C.f()}
function Kg(a,b,c){a.f=b||"";Eg(a);a.g.refresh();c||R(a.s,4,{na:a.u,input:a.f})}
function Eg(a){var b=Qg(a.R,a.f);if(b!=a.u){var c=a.g;c.C&&(c.C.dir=b);c.f.dir=b;c.u&&(c.u.dir=b);if(c.ia){c=c.f;var d=0,e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function Mg(a,b){a.f=a.m=b||"";Eg(a)}
;function Rg(){this.l=128}
u(Rg,O);l=Rg.prototype;l.J=function(a){this.o=a.get(129);this.M=a.get(145);this.G=a.get(115);this.N=a.get(123);this.u=a.get(118);this.O=a.get(147);this.L=N(a,153);this.V=a.get(553);this.F=a.get(184);this.Y=a.get(157)};
l.setup=function(){this.L.sort(Ze)};
l.K=function(a){this.w=a;this.i=this.f=null;this.m=this.D=!1;this.R=!0;this.C="";this.H=0};
l.ca=function(){this.s&&(window.clearTimeout(this.s),this.s=null);this.g=null;this.hide()};
function ug(a,b,c){var d=a.F&&a.F.g(b);a.clear();a.g=b;var e=S(a)?b[0].f:a.u.m;a:{var f=e;if(a.M.f){for(var g=!1,h=!1,k=0,m;k<f.length;++k)if(m=f.charAt(k),!Sg.test(m)&&(Tg.test(m)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.m);a.C=Qg(a.M,e);if(a.w.Hd&&S(a)&&c&&!Jf){a.D=!0;c=a.o;if(c.m){c.D=a.C;Ug(c);e=!1;for(f=0;g=b[f++];)Vg(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.f.a||"";e=Te(e);b=a.O;f=0;e&&(b.f||Wg(b),Xg(b),e in b.i?f=b.i[e]:(f=b.f,g=Se(e),f.innerHTML!=g&&(f.innerHTML=g),b.i[e]=f=b.f.offsetWidth,
b=b.f,""!=b.innerHTML&&(b.innerHTML="")));a.H=f}else{a.D=!1;b=a.o;if(a.D||!a.w.Qd&&!S(a))c=[];else{c=[];e=[];for(f=0;a.L[f++]&&!wf(a.g,e););(f=e?e.length:0)&&(f-=Yg(e,c,0));for(g=0;g<a.g.length;++g)c.push(a.g[g]);f&&(f-=Yg(e,c,1));a.w.gd&&c.push(1);f&&(f-=Yg(e,c,2));f&&Yg(e,c,3);a.w.Gb&&c.push(2);a.Y&&1<c.length&&5==c[0].T()&&c.splice(1,0,3)}if(b.m){b.D=a.C;Ug(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.s?g.s.style.display="":(h=P("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace=
"nowrap",h.dir=g.F,g.i=Q(),g.i.className="sbsb_g",g.f.Gb&&(g.i.style.paddingBottom="1px"),Zg(g,g.f.searchText,g.i,13),g.f.fd?Zg(g,g.f.zb,g.i,8):g.f.hd&&Zg(g,g.f.Pd,g.i,14),h.appendChild(g.i),h.onmousedown=x(g.nb,g),h.className=g.f.Qa,g.s=h),g.g.appendChild(g.s);else if(2==g)if(g=b,g.o)g.o.style.display="";else{h=Q("sbsb_j "+g.f.Qa);k=P("a");k.id="sbsb_f";ac(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.f.kb+"&answer=106230");var n=g.f.learnMoreText;if(n instanceof G)m=n;else{if(n instanceof
G)m=n;else{var p="object"==typeof n;m=null;p&&n.Jb&&(m=n.cb());n=p&&n.ka?n.ga():String(n);ib.test(n)&&(-1!=n.indexOf("&")&&(n=n.replace(cb,"&amp;")),-1!=n.indexOf("<")&&(n=n.replace(db,"&lt;")),-1!=n.indexOf(">")&&(n=n.replace(eb,"&gt;")),-1!=n.indexOf('"')&&(n=n.replace(fb,"&quot;")),-1!=n.indexOf("'")&&(n=n.replace(gb,"&#39;")),-1!=n.indexOf("\x00")&&(n=n.replace(hb,"&#0;")));m=Wb(n,m)}n=Vb(m).toString().replace(/(\r\n|\r|\n)/g,"<br>");m=Wb(n,m.cb())}$b(k,m);h.appendChild(k);h.onmousedown=x(g.nb,
g);g.o=h;g.m.appendChild(g.o)}else 3==g?(g=b,h=g.O.pop(),h||(h=P("li"),h.setAttribute("aria-hidden","true"),h.l=!0,k=P("div","sbsb_e"),h.appendChild(k)),g.g.appendChild(h)):Vg(b,g)&&(e=!0);c=e}else c=!1;a.H=0}d&&(a.i=a.F.l(),$g(a,a.F.f()));c?a.show():a.clear()}
function $g(a,b){if(a.f!=b){var c=a.f;a.f=b;ah(a,c)}}
l.dc=function(){if(S(this))if(this.m){var a=this.f;this.f==this.g.length-1?this.i=this.f=null:null==this.f?this.f=0:++this.f;this.i=this.f;bh(this,a,x(this.dc,this))}else this.show()};
l.ec=function(){if(S(this))if(this.m){var a=this.f;this.g&&0!=this.f?null==this.f?this.f=this.g.length-1:--this.f:this.i=this.f=null;this.i=this.f;bh(this,a,x(this.ec,this))}else this.show()};
l.isVisible=function(){return this.m};
l.isEnabled=function(){return this.R};
function Ig(a){return null!=a.i?a.g[a.i]:null}
function S(a){return!(!a.g||!a.g.length)}
l.show=function(){if(!this.m){a:{var a=this.G,b=Ag;if(b in a.m){if(a.g){if(b==Ag)break a;a.hide();a.g.g.m=!1}a.g=a.m[b];b=a.i;a=a.g;a!=b.u&&(b.u=a,a=a.f.m,b.F?a!=b.F&&b.o.replaceChild(a,b.F):b.o.appendChild(a),b.F=a)}}this.G.show();this.m=!0}};
l.hide=function(){this.m&&(this.s&&(window.clearTimeout(this.s),this.s=null),this.G.hide(),this.m=!1)};
l.clear=function(){this.hide();this.g=null;this.D=!1;null!=this.f&&ch(this.o,this.f);this.i=this.f=null;this.o.clear()};
l.dismiss=function(){var a=this.N;a.m=a.i;this.hide()};
function hg(a){null!=a.f&&ch(a.o,a.f);a.i=a.f=null}
function Lg(a,b,c){if(S(a))a.show();else{var d=a.u.m;d&&(b=mg(a.V,d,b||a.u.g.s,c),ng(a.N,b))}}
function Yg(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.vd&&f.vd(b)&&++d:(b.push(f),++d));return d}
function bh(a,b,c){null==a.f||a.o.isSelectable(a.f)?(ah(a,b),null==a.f?gg(a.u):Kg(a.u,a.g[a.f].f)):(ch(a.o,b),c())}
function ah(a,b){null!=b&&ch(a.o,b);null!=a.f&&a.o.highlight(a.f)}
var Ag=Me++;function dh(){this.l=154}
u(dh,O);dh.prototype.J=function(a){this.g=a.get(128);this.f=a.get(129)};function eh(){this.l=145;this.f=Tg.test("x")}
u(eh,O);eh.prototype.Z=function(a){this.g=a.Ha()};
function Qg(a,b){var c=a.g;a.f&&(Tg.test(b)?c="ltr":Sg.test(b)||(c="rtl"));return c}
var Sg=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Tg=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function fh(){this.l=117;this.g=[];this.i={vc:1}}
u(fh,O);fh.prototype.ca=function(){this.f=null};
function T(a,b,c,d,e,f){var g=gh(a,b);g||(g={},a.g.push({element:b,bd:g}));var h=g[c];h||(h=g[c]=[],a=hh(a,c,b.vc?window:Vf(b),h),"string"!==typeof c?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({xd:!!f,lb:!1,priority:e||0,process:d});h.sort(ih);d.Jc=c}
function jh(a,b,c){if(a=gh(a,b))if(a=a[c.Jc]){b=0;for(var d;d=a[b++];)if(d.process==c){d.lb=!0;break}}}
function kh(a,b,c){T(a,a.i,b,c,void 0,void 0)}
function R(a,b,c){c=c||{};(a=a.i[b])&&a(c,c.za)}
function lh(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function Gg(a,b){if(mh){if(!a.f){a.f=[];var c=x(a.m,a);lh(window,"message",c)}a.f.push(b);c=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(c)?c:"*")}else window.setTimeout(b,0)}
fh.prototype.m=function(a){this.f&&a&&a.source==window&&"sbox.df"==a.data&&this.f.length&&(this.f.shift()(),this.f&&this.f.length&&window.postMessage("sbox.df",window.location.href))};
function hh(a,b,c,d){return x(function(e,f){if(d.length){var g;if(!(g=e)){g={};var h=c.event;h&&(h.keyCode&&(g.keyCode=h.keyCode),g.wd=!0)}g.za=f||b;h=g;for(var k,m,n=0,p;p=d[n++];)p.lb?m=!0:k||(p.xd?nh(this,p,h):k=p.process(h));if(m)for(n=0;p=d[n];)p.lb?d.splice(n,1):++n;if(g.La)return delete g.La,g.wd&&(g=c.event||g),Sf(g),g.returnValue=!1}},a)}
function gh(a,b){for(var c=0,d;c<a.g.length;++c)if(d=a.g[c],d.element==b)return d.bd;return null}
function nh(a,b,c){Gg(a,function(){b.process(c)})}
function ih(a,b){return b.priority-a.priority}
var mh=window.postMessage&&!(zf||Ef||Cf);function oh(){this.l=494;this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}}
u(oh,O);oh.prototype.K=function(){this.reset()};
oh.prototype.reset=function(){this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}};function ph(){this.l=374}
u(ph,O);ph.prototype.K=function(){this.reset()};
ph.prototype.add=function(a){this.f||(this.f={});this.f[a]=!0};
ph.prototype.reset=function(){this.f={}};function qh(){this.l=120;this.D=-1}
u(qh,O);qh.prototype.J=function(a){this.G=a.get(191);this.f=a.get(123);this.m=a.get(118);this.w=a.get(374);this.g=a.get(494);this.C=a.get(126);this.o=a.get(128);this.F=N(a,311)};
qh.prototype.setup=function(a){this.u=a.Cd};
qh.prototype.K=function(a){this.i=a;this.reset()};
function rh(a,b,c,d){var e=a.m.m;c&&(e=e.replace(sh,"#"));c=[];c[27]=64;c[0]=th(a.i.clientName);c[28]=th(a.i.requestIdentifier);c[1]=void 0==b?"":b+"";b=a.w;var f=[];for(g in b.f)f.push(parseInt(g,10));c[26]=f.join("j");var g="";null!=a.o.i?g=a.o.i+"":(b=a.C.g,(10<=b.u||3<=b.w.eb())&&(g="o"));c[2]=g;g="";if(b=a.o.g){for(var h=f=0,k;k=b[h++];){k=af(k.T(),k.g||[]);if(k!=m){1<f&&(g+="l"+f);g+=(m?"j":"")+k;f=0;var m=k}++f}1<f&&(g+="l"+f)}c[3]=g;m="";g=a.o.g;b=a.g.o;if(g)for(f=0;h=g[f++];){var n=af(h.T(),
h.g||[]);n in b&&delete b[n]}if(b)for(n in b)m+=(m?"j":"")+n;c[35]=m;n=a.g.g;c[33]=-1<n?String(n):"";c[4]=Math.max(a.m.F-a.s,0);c[5]=Math.max(a.m.H-a.s,0);c[6]=a.D;c[7]=y()-a.s;c[18]=Math.max(a.m.O-a.s,0);c[8]=a.f.aa;m=a.f;m=(n=m.g)?m.f.i:0;c[25]=n?"1"+(a.i.Fc?"a":"")+(a.i.vb?"c":""):"";c[10]=m;n=a.f;c[11]=n.g?n.f.m:0;c[12]=a.f.V;g=a.f;n=g.O;m=g.N;g=g.R;c[9]=n;c[22]=m;c[17]=g;c[13]=a.f.Y;c[14]=a.f.G;c[15]=a.f.L;n=a.f;m=[];for(b=f=0;b<=uh;++b)g=n.H[b],0==g?f++:(f=1==f?"0j":1<f?b+"-":"",m.push(f+g),
f=0);c[16]=m.join("j");c[36]=a.f.M;n=0;for(var p in a.g.f)n++;c[30]=n;c[31]=a.g.s;c[32]=a.g.m;c[19]=th(a.i.qb);p=a.g;m=a.C.f;n=!1;m&&(n=m.g.f.e||"");m=0;n?(m|=1,1<p.i&&(m|=2)):0<p.i&&(m|=2);p=m;c[20]=0==p?"":p+"";for(p=0;n=a.F[p++];)m=n.l,vh[m]&&(c[m]=void 0==c[m]?th(n.f()):"");c=c.join(".").replace(wh,"");if(a.G&&a.u){p=e+c;b:{n=a.u;m=[];if(n)for(f=b=g=0;f<n.length;++f){h=n.charCodeAt(f);if(32>h||127<h||!xh[h-32]){n=[];break b}g<<=6;g|=xh[h-32]-1;b+=6;8<=b&&(m.push(g>>b-8&255),b-=8)}n=m}g=n;n={};
n.W=Array(4);n.buffer=Array(4);n.Yd=Array(4);n.padding=Array(64);n.padding[0]=128;for(m=1;64>m;++m)n.padding[m]=0;yh(n);m=Array(64);64<g.length&&(yh(n),zh(n,g),g=Ah(n));for(b=0;b<g.length;++b)m[b]=g[b]^92;for(b=g.length;64>b;++b)m[b]=92;yh(n);for(b=0;64>b;++b)n.buffer[b]=m[b]^106;Bh(n,n.buffer);n.total=64;zh(n,Ch(p));p=Ah(n);yh(n);Bh(n,m);n.total=64;zh(n,p);p=Ah(n);p=p.slice(0,8);"string"===typeof p&&(p=Ch(p));n="";if(p){m=p.length;for(f=b=g=0;m--;)for(b<<=8,b|=p[f++],g+=8;6<=g;)n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>
g-6&63),g-=6;g&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>g+8-6&63))}p=n}else p="";e={oq:e,gs_l:c+"."+p};d&&(e.ei=d);a.i.zd&&(e.q=a.m.f);return e}
qh.prototype.reset=function(){this.s=y();++this.D;var a=this.m;a.F=0;a.H=0;a.O=0;this.w.reset();a=this.f;if(a.g){var b=a.f;b.i=0;b.m=0}a.aa=0;a.u=0;a.V=0;a.O=0;a.N=0;a.R=0;a.Y=0;a.G=0;a.L=0;a.M=0;a.H=[];for(b=0;b<=uh;++b)a.H[b]=0;for(a=0;b=this.F[a++];)b.reset();this.g.reset()};
function th(a){return a?a.replace(Dh,"-"):""}
var wh=/\.+$/,Dh=/\./g,sh=/./g,vh=Ne([23]);function Eh(){this.l=121}
u(Eh,O);l=Eh.prototype;l.Z=function(a){this.m=a.Cb()};
l.J=function(a){this.g=a.get(347);this.u=a.get(130);this.F=a.get(117);this.C=a.get(123);this.o=a.get(118);this.G=a.get(120);this.H=a.get(128);this.D=a.get(139);this.w=a.u;this.s=N(a,294)};
l.K=function(a){this.i=a};
l.search=function(a,b){if(this.s){for(var c=!1,d=0,e;e=this.s[d++];)2==e.f(a,b)&&(c=!0);if(c)return}if(Re(a)||this.i.la||this.u&&this.u.la()){if(we.test(b)){if(this.m&&!this.f){c=this.m;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=P("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.f=c}}else this.f&&(this.m.removeChild(this.f),this.f=null);this.g&&this.i.Za&&Fh(this.g,
b);this.w.search(a,b);Gh(this);R(this.F,12,{query:a})}};
l.redirect=function(a){this.g&&this.i.Za&&Fh(this.g,void 0);this.w.redirect(a);Gh(this)};
function Gh(a){var b=a.C;b.m=b.i;a.C.s=null;a.G.reset();a.H.clear();a.o.m!=a.o.f&&(b=a.o,b.m=b.f);a.D&&a.D.clear()}
;function Hh(){this.l=553}
u(Hh,O);Hh.prototype.J=function(a){this.g=N(a,156);a.get(126)};
Hh.prototype.setup=function(){this.g.sort(Ih)};
Hh.prototype.K=function(a){this.f=a;this.i=a.ob};
Hh.prototype.pb=function(a){this.i=a};
function mg(a,b,c,d,e){b=new bf(b,c||Oe(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.g(b),f>c&&(c=f)}b.D=c;null!=a.f.Xa&&df(b,"ds",a.f.Xa,!0);null!=a.f.mc&&df(b,"swl",a.f.mc,!0);df(b,"pq",a.i,!0);e&&!b.i&&(b.F=!0);b.i||(b.o=y(),"cp"in b.u||(a=b.H.Ia(),df(b,"cp",a,!0)),df(b,"gs_id",b.s),b.g=Pe(b.u)+":"+b.w,b.i=!0);return b}
function Ih(a,b){return a.f()-b.f()}
;function Jh(){this.l=123;this.C=!1;this.i=-1}
u(Jh,O);l=Jh.prototype;l.J=function(a){this.f=a.get(133);this.qa=a.get(130);this.Aa=a.get(118);this.Lc=a.get(120);this.sa=a.get(494);this.Ec=a.get(124);this.ia=a.get(125);this.pa=a.get(230);this.Pc=a.get(127)};
l.K=function(a){this.w=this.Pc.f;this.ra=a;this.C=!0;this.o={};this.F=0;this.Va=a.Nc;this.Wa=a.Ib;this.m=-1;this.g=this.ra.Gc&&!!this.f};
l.ca=function(){this.C=!1;Kh(this);this.o=this.s=null;this.m=this.i};
function ng(a,b){if(!(!a.C||a.Wa||a.qa&&a.qa.l())){var c=!0,d=cf(b);d>a.i&&(a.i=d);++a.aa;a.sa.f[b.getId()]=!0;Re(a.Aa.f)||Re(b.f)||(d=a.sa,d.g=Math.max(d.g,0));d=y();for(var e in a.o)2500<d-a.o[e].o&&Lh(a,e);a.g&&(e=a.f.get(b))&&((c=a.Va||b.F)&&a.ra.nd&&(b.m=!0),a.ia.process(e),e.m&&++a.V,a.s=null);c&&(a.s=b,a.D||a.Ub())}}
function Mh(a,b){return x(function(c){this.jc(c,b)},a)}
l.Ub=function(){Kh(this);if(!(2<this.w.eb())){var a=this.s;this.s=null;if(a){var b=[],c=a.G;if(c)for(var d in c)L(d,c[d],b);b=this.w.kc(a,b.join("&"),Mh(this,a),x(this.jc,this));a.m||(++this.O,b?(this.o[a.getId()]=a,++this.u):++this.N);a=100;b=(this.u-2)/2;for(c=1;c++<=b;)a*=2;a<this.F&&(a=this.F);this.D=window.setTimeout(x(this.Ub,this),a)}}};
function Kh(a){null!=a.D&&(window.clearTimeout(a.D),a.D=null)}
function Lh(a,b){a.w.Ya(b);delete a.o[b];a.u&&--a.u}
l.jc=function(a,b){if(this.C){if(!b&&(b=this.o[(a[2]||{}).j],!b))return;if(!b.m){var c=this.Ec;var d=b,e=a[0],f=a[1],g={},h=a[2];if(h)for(var k in h){var m=h[k];k in c.f&&(m=c.f[k].parse(m));g[k]=m}var n=m=!1;h=!1;k=0;for(var p;p=f[k++];)if(33==(p[1]||0)?n=!0:m=!0,n&&m){h=!0;break}m=0;n=[];for(k=0;p=f[k++];){var r=p[1]||0;if(!h||33!=r){var q=p[0];c.i&&(q=c.g.bold(e.toLowerCase(),Te(q).replace(Ge,"")));n.push(new Ae(q,Te(q).replace(Ge,""),m++,r,p[2]||[],Nh(p)))}}c=new ef(d,n,new ye(g),!1,!0,!1);this.pa&&
(c=this.pa.f(c,this.Aa.f));if(this.g)for(d=this.f,e=c,(e.f&&e.f[0]||""!=e.l.f)&&e&&e.i&&(d.g[e.l.g]=e),f=0;f<d.f.length;++f)d.f[f].update(e);cf(b)<=this.m?!b||b.f||c.m||(d=b,this.M=y()-d.o):(++this.R,this.ia.process(c)||++this.Y,d=b,this.F=c.g.f.d||0,d&&(Lh(this,d.getId()),e=d.o,e=y()-e,d.f?(this.L+=e,this.G=Math.max(e,this.G),++this.H[e>Oh?uh:Ph[Math.floor(e/100)]]):this.M=e));c&&(c=c.g.f.q||"")&&(this.Lc.u=c)}}};
var Ph=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],uh=Ph[Ph.length-1]+1,Oh=100*Ph.length-1;function Qh(){this.l=124;this.f={}}
u(Qh,O);Qh.prototype.J=function(a){this.g=a.get(150);if(a=N(a,158))for(var b=0,c;c=a[b++];)this.f[c.ze()]=c};
Qh.prototype.K=function(a){this.i=a.hb};
function Nh(a){return(a=a[3])?new ye(a):ze}
;function Rh(){this.l=125}
u(Rh,O);Rh.prototype.J=function(a){this.m=a.get(117);this.s=a.get(118);this.o=a.get(494);this.f=N(a,122);this.g=a.get(126);this.i=a.get(128);this.f.sort(Sh)};
Rh.prototype.process=function(a){var b=a,c=this.s.f.toLowerCase(),d=this.g.f;c=Ue(c);var e=b.l;b=e?e.l:Ue(b.l.f.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.f)for(e=0;b=this.f[e++];)a=b.edit(a);d=this.g.f=a;a=d.l.f;e=d.f;this.i.isEnabled()&&ug(this.i,e,0==d.T());b=this.o;var g=d.l;f=g.getId();if(f in b.f){var h=d.f.length;0<h&&(Re(g.f)||(b.g=h),g=g.o,g=y()-g,b.m+=g,++b.s);d.g.f.e&&++b.i;
delete b.f[f]}d=d.f;for(f=0;g=d[f++];)b.o[af(g.T(),g.g||[])]=!0;R(this.m,3,{input:a,suggestions:e})}return c};
function Sh(a,b){return a.f()-b.f()}
;function Th(){this.l=126}
u(Th,O);Th.prototype.J=function(a){this.g=a.get(123)};
Th.prototype.K=function(){this.f=null};function Uh(){this.l=127;this.i={}}
u(Uh,O);Uh.prototype.J=function(a){a=N(a,149);for(var b=0,c;c=a[b++];)this.i[c.va()]=c};
Uh.prototype.K=function(a){var b="https:"==document.location.protocol,c=[];L("client",a.clientName,c);L("hl",a.kb,c);L("gl",a.pc,c);L("sugexp",a.qb,c);L("gs_rn",64,c);L("gs_ri",a.requestIdentifier,c);a.authuser&&L("authuser",a.authuser,c);this.g={protocol:"http"+(b?"s":"")+"://",host:a.Zb||"clients1."+a.Da,Na:a.Na||"/complete/search",oc:c.length?c.join("&"):""};this.f&&this.f.va()==a.connectionType||(this.f=this.i[a.connectionType])};function Vh(){this.l=191}
B(Vh,O);
var xh=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Wh=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Xh=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Ch(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function yh(a){a.W[0]=1732584193;a.W[1]=4023233417;a.W[2]=2562383102;a.W[3]=271733878;a.Ba=a.total=0}
function Bh(a,b){for(var c=a.Yd,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.W[0];d=a.W[1];for(var f=a.W[2],g=a.W[3],h,k,m,n=0;64>n;++n)16>n?(h=g^d&(f^g),k=n):32>n?(h=f^g&(d^f),k=5*n+1&15):48>n?(h=d^f^g,k=3*n+5&15):(h=f^(d|~g),k=7*n&15),m=g,g=f,f=d,e=e+h+Xh[n]+c[k]&4294967295,h=Wh[n],d=d+((e<<h|e>>>32-h)&4294967295)&4294967295,e=m;a.W[0]=a.W[0]+e&4294967295;a.W[1]=a.W[1]+d&4294967295;a.W[2]=a.W[2]+f&4294967295;a.W[3]=a.W[3]+g&4294967295}
function zh(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Ba++]=b[d],64==a.Ba&&(Bh(a,a.buffer),a.Ba=0)}
function Ah(a){var b=Array(16),c=8*a.total,d=a.Ba;zh(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Bh(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.W[e]>>c&255;return b}
;function Yh(){this.l=150}
B(Yh,O);
Yh.prototype.bold=function(a,b){b=Se(b.replace(xe,""));a=Se(Ue(a,!0));if(Ve(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,ya:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,ya:g,e:f+1}));c=a.split(/\s+/);f={};for(e=0;g=c[e++];)f[g]=1;h=-1;c=[];var k=d.length-1;for(e=0;g=d[e];++e)f[g.t]?(g=-1==h,e==k?c.push({ya:g?e:h,e:e}):g&&(h=e)):-1<h&&(c.push({ya:h,e:e-1}),h=-1);if(!c.length)return"<b>"+b+
"</b>";e="";for(f=g=0;h=c[f];++f)(k=d[h.ya].ya)&&(e+="<b>"+b.substring(g,k-1)+"</b> "),g=d[h.e].e,e+=b.substring(k,g);g<b.length&&(e+="<b>"+b.substring(g)+"</b> ");return e};function Zh(){this.l=146}
B(Zh,O);function $h(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
$h("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");$h("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");$h("D1,D4,D7,DA,DD");$h("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");$h("D1__,D4__,D7__,DA__,DD");$h("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");$h("CF,D2,D5,D8,DB");function ai(){this.l=116;this.M=!0}
B(ai,O);l=ai.prototype;
l.Z=function(a,b){this.R=a.Ha();b.addRule(".sbdd_a",(Jf?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Jf?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
l.J=function(a){this.N=a.get(130);a.get(115);this.s=a.get(118);this.H=a.get(117);this.Y=a.g.getId()};
l.setup=function(a){this.f=a};
l.ma=function(a){this.g=Q();this.g.className="gstl_"+this.Y+" sbdd_a";bi(this.g,!1);this.O=this.g;this.D=Q("fl");this.g.appendChild(this.D);this.w=Q();this.g.appendChild(this.w);this.o=Q("sbdd_b");this.w.appendChild(this.o);this.aa=Q();this.w.appendChild(this.aa);this.f.Fb&&(this.i=P("iframe","gstl_"+this.Y+" sbdd_c"),bi(this.i,!1),(this.f.da||document.body).appendChild(this.i));if(this.m=this.f.Dc)"number"===typeof this.m&&(this.m+=this.f.Fa[2],this.m-=ci(this)),di(this,this.g,this.m);ei(this);(a.da||
document.body).appendChild(this.g);kh(this.H,8,x(this.hc,this))};
l.K=function(a){this.f=a;this.g.style.position=a.ta};
l.getHeight=function(){this.C||(this.C=this.o?Math.max(this.o.offsetHeight,0):0);return this.C};
l.show=function(a){fi(this,a.na||this.R);var b=a.marginWidth;if(this.V!=b){var c=this.D.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.V=b}this.M=a.yd;this.L=a.horizontalAlignment;gi(this.s.g,!0);bi(this.O,!0);bi(this.i,!0);R(this.H,14);this.hc()};
l.hide=function(){this.C=0;gi(this.s.g,!1);bi(this.O,!1);bi(this.i,!1);fi(this,this.R);R(this.H,9)};
l.hc=function(){this.C=0;ei(this);if(this.i){var a=this.f.tb[0],b=this.i.style;"relative"!=this.f.ta&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.D.offsetWidth+"px");a=this.getHeight()+a;this.i.style.height=Math.max(a,0)+"px";di(this,this.i,this.o.offsetWidth)}this.u&&Ug(this.u.f)};
function ei(a){var b,c;if(c=a.u)c=a.u.f,c=c.f.ed||c.F==c.D?c.V:null;var d=(b=c)?b.offsetWidth:hi(a.s.g);var e=a.m;c=ci(a);e?"string"===typeof e&&(e=null):a.V||!a.M?a.w.style.display="inline-block":(a.w.style.display="",e=d+a.f.Fa[2]-c,di(a,a.g,e));if("relative"!=a.f.ta){var f="rtl"==Nc()!=("rtl"==a.G),g=a.f.da;var h={ha:0,Sa:0};if(f||!g||g==document.body||a.f.Ab)h=Nf(a.s.g.D),b&&(h.ha=Nf(b).ha);b=h;h=e;e=a.f.Fa;g=e[1];e=e[0];e=b.Sa+a.s.getHeight()+e;if("right"==a.L){h="rtl"==Nc()!=("rtl"==a.G);var k=
a.f.da;g=-g;if(h||!k||k==document.body)g+=(Vf(a.g)||window).document.documentElement.clientWidth-d-b.ha;d=g;h=e;b=void 0}else b=b.ha+g,"center"==a.L&&h&&(b+=(d-h)/2),h=e,d=void 0;e={ha:0,Sa:0};"absolute"==a.f.ta&&a.f.da&&a.f.da!=document.body&&(f||a.f.Ab)&&(e=Nf(a.f.da));g=a.g.style;g.top=h-e.Sa+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.ha+"px":(b=0,a.f.da&&f&&(b=document.body.clientWidth-(e.ha+a.f.da.offsetWidth)),g.right=d+c-b+"px")}}
function di(a,b,c){"number"===typeof c?0<c&&(a.f.Xd?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function bi(a,b){a&&(a.style.display=b?"":"none")}
function fi(a,b){if(a.G!=b){a.G=b;var c=a.f.da;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");Qf(a.g,b)}}
function ci(a){return a.N&&a.N.g()&&(a=a.s.g.u.offsetWidth,"number"===typeof a)?a:0}
;function ii(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.l=!1}
ii.prototype.stopPropagation=function(){this.l=!0};
ii.prototype.preventDefault=function(){this.defaultPrevented=!0};var ji=!H||9<=Number(tc),ki=H&&!qc("9"),li=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{v.addEventListener("test",va,b),v.removeEventListener("test",va,b)}catch(c){}return a}();function mi(a,b){ii.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
B(mi,ii);var ni={2:"touch",3:"pen",4:"mouse"};
mi.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(ic){a:{try{dc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ni[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
mi.prototype.stopPropagation=function(){mi.ea.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
mi.prototype.preventDefault=function(){mi.ea.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ki)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var oi="closure_listenable_"+(1E6*Math.random()|0),pi=0;function qi(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.Ja=e;this.key=++pi;this.oa=this.Ca=!1}
function ri(a){a.oa=!0;a.listener=null;a.f=null;a.src=null;a.Ja=null}
;function si(a){this.src=a;this.listeners={};this.f=0}
si.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=ti(a,b,d,e);-1<g?(b=a[g],c||(b.Ca=!1)):(b=new qi(b,this.src,f,!!d,e),b.Ca=c,a.push(b));return b};
si.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ti(e,b,c,d);return-1<b?(ri(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ui(a,b){var c=b.type;c in a.listeners&&Ka(a.listeners[c],b)&&(ri(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function ti(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.oa&&f.listener==b&&f.capture==!!c&&f.Ja==d)return e}return-1}
;var vi="closure_lm_"+(1E6*Math.random()|0),wi={},xi=0;function yi(a,b,c,d,e){if(d&&d.once)zi(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)yi(a,b[f],c,d,e);else c=Ai(c),a&&a[oi]?a.f.add(String(b),c,!1,za(d)?!!d.capture:!!d,e):Bi(a,b,c,!1,d,e)}
function Bi(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=za(e)?!!e.capture:!!e,h=Ci(a);h||(a[vi]=h=new si(a));c=h.add(b,c,d,g,f);if(!c.f){d=Di();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)li||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ei(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xi++}}
function Di(){var a=Fi,b=ji?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function zi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)zi(a,b[f],c,d,e);else c=Ai(c),a&&a[oi]?a.f.add(String(b),c,!0,za(d)?!!d.capture:!!d,e):Bi(a,b,c,!0,d,e)}
function Gi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Gi(a,b[f],c,d,e);else(d=za(d)?!!d.capture:!!d,c=Ai(c),a&&a[oi])?a.f.remove(String(b),c,d,e):a&&(a=Ci(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ti(b,c,d,e)),(c=-1<a?b[a]:null)&&Hi(c))}
function Hi(a){if("number"!==typeof a&&a&&!a.oa){var b=a.src;if(b&&b[oi])ui(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ei(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xi--;(c=Ci(b))?(ui(c,a),0==c.f&&(c.src=null,b[vi]=null)):ri(a)}}}
function Ei(a){return a in wi?wi[a]:wi[a]="on"+a}
function Ii(a,b,c,d){var e=!0;if(a=Ci(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.oa&&(f=Ji(f,d),e=e&&!1!==f)}return e}
function Ji(a,b){var c=a.listener,d=a.Ja||a.src;a.Ca&&Hi(a);return c.call(d,b)}
function Fi(a,b){if(a.oa)return!0;if(!ji){var c=b||w("window.event"),d=new mi(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.l&&0<=g;g--){d.f=c[g];var h=Ii(c[g],f,!0,d);e=e&&h}for(g=0;!d.l&&g<c.length;g++)d.f=c[g],h=Ii(c[g],f,!1,d),e=e&&h}return e}return Ji(a,new mi(b,this))}
function Ci(a){a=a[vi];return a instanceof si?a:null}
var Ki="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ai(a){if(ya(a))return a;a[Ki]||(a[Ki]=function(b){return a.handleEvent(b)});
return a[Ki]}
;function Li(){Mc.call(this);this.f=new si(this);this.w=this;this.o=null}
B(Li,Mc);Li.prototype[oi]=!0;Li.prototype.addEventListener=function(a,b,c,d){yi(this,a,b,c,d)};
Li.prototype.removeEventListener=function(a,b,c,d){Gi(this,a,b,c,d)};
Li.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.w;d=a.type||a;if("string"===typeof a)a=new ii(a,b);else if(a instanceof ii)a.target=a.target||b;else{var e=a;a=new ii(d,b);Ya(a,e)}e=!0;if(c)for(var f=c.length-1;!a.l&&0<=f;f--){var g=a.f=c[f];e=Mi(g,d,!0,a)&&e}a.l||(g=a.f=b,e=Mi(g,d,!0,a)&&e,a.l||(e=Mi(g,d,!1,a)&&e));if(c)for(f=0;!a.l&&f<c.length;f++)g=a.f=c[f],e=Mi(g,d,!1,a)&&e;return e};
Li.prototype.ja=function(){Li.ea.ja.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ri(d[e]);delete a.listeners[c];a.f--}}this.o=null};
function Mi(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.oa&&g.capture==c){var h=g.listener,k=g.Ja||g.src;g.Ca&&ui(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ni(a,b){this.g=a;this.i=b;this.l=0;this.f=null}
Ni.prototype.get=function(){if(0<this.l){this.l--;var a=this.f;this.f=a.next;a.next=null}else a=this.g();return a};function Oi(a){v.setTimeout(function(){throw a;},0)}
var Pi;function Qi(){var a=v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=zc("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=x(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Pb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ub;c.ub=null;e()}};
return function(e){d.next={ub:e};d=d.next;b.port2.postMessage(0)}}return function(e){v.setTimeout(e,0)}}
;function Ri(){this.l=this.f=null}
var Ti=new Ni(function(){return new Si},function(a){a.reset()});
Ri.prototype.add=function(a,b){var c=Ti.get();c.set(a,b);this.l?this.l.next=c:this.f=c;this.l=c};
Ri.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.l=null),a.next=null);return a};
function Si(){this.next=this.scope=this.f=null}
Si.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Si.prototype.reset=function(){this.next=this.scope=this.f=null};function Ui(a){Vi||Wi();Xi||(Vi(),Xi=!0);Yi.add(a,void 0)}
var Vi;function Wi(){if(v.Promise&&v.Promise.resolve){var a=v.Promise.resolve(void 0);Vi=function(){a.then(Zi)}}else Vi=function(){var b=Zi;
!ya(v.setImmediate)||v.Window&&v.Window.prototype&&!F("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(Pi||(Pi=Qi()),Pi(b)):v.setImmediate(b)}}
var Xi=!1,Yi=new Ri;function Zi(){for(var a;a=Yi.remove();){try{a.f.call(a.scope)}catch(c){Oi(c)}var b=Ti;b.i(a);100>b.l&&(b.l++,a.next=b.f,b.f=a)}Xi=!1}
;function $i(a,b){Li.call(this);this.i=a||1;this.l=b||v;this.s=x(this.Wd,this);this.u=y()}
B($i,Li);l=$i.prototype;l.enabled=!1;l.ba=null;l.setInterval=function(a){this.i=a;this.ba&&this.enabled?(this.stop(),this.start()):this.ba&&this.stop()};
l.Wd=function(){if(this.enabled){var a=y()-this.u;0<a&&a<.8*this.i?this.ba=this.l.setTimeout(this.s,this.i-a):(this.ba&&(this.l.clearTimeout(this.ba),this.ba=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ba||(this.ba=this.l.setTimeout(this.s,this.i),this.u=y())};
l.stop=function(){this.enabled=!1;this.ba&&(this.l.clearTimeout(this.ba),this.ba=null)};
l.ja=function(){$i.ea.ja.call(this);this.stop();delete this.l};function aj(){this.l=119;this.N=!1;this.s=Oe(0);this.R=-1;this.V=!1}
B(aj,O);l=aj.prototype;
l.Z=function(a,b){this.G=a;this.f=a.fb();this.f.setAttribute("aria-haspopup",!1);this.f.setAttribute("role","combobox");this.f.setAttribute("aria-autocomplete","list");this.Va=a.Ha();if(!a.Ua()){b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;"));var c=If&&Df||zf?6:5;b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+c+"px 9px 0");b.addRule(".sbib_c[dir=ltr]","float:right");b.addRule(".sbib_c[dir=rtl]","float:left");b.addRule(".sbib_d",
b.prefix("box-sizing:border-box;")+"height:100%;unicode-bidi:embed;white-space:nowrap");b.addRule(".sbib_d[dir=ltr]","float:left");b.addRule(".sbib_d[dir=rtl]","float:right");Af&&b.addRule(".sbib_a input::-ms-clear","display: none");b.addRule(".sbib_a,.sbib_c","vertical-align:top")}};
l.J=function(a){this.g=a.get(118);this.i=a.get(117);this.sa=a.get(128);this.H=a.get(173);this.ia=!!a.get(136);this.Wa=a.g.getId()};
l.setup=function(a){this.w=a;this.L=a.wa;this.M=a.ud;this.Aa=a.wb;this.m=Of(this.f);this.Ta();var b=this;zf&&T(this.i,this.f,"beforedeactivate",function(c){b.V&&(b.V=!1,c.La=!0)},10);
a=(F("iPhone")&&!F("iPod")&&!F("iPad")||F("iPad")||F("iPod"))&&Ff;Bf&&bj(this);(Gf||a)&&cj(this);this.D=this.f};
l.ma=function(a){var b=!!a.Ic[130];if(this.ia||Og(this.g)||b||a.Oc)(this.o=this.G.get("gs_id"))?(b&&(this.u=this.G.get("sb_chc")),this.C=this.G.get("sb_ifc")):(this.o=Q("gstl_"+this.Wa+" sbib_a"),a=this.o.style,this.M&&(a.width=this.M+"px"),this.L&&(a.height=this.L+"px"),a=this.f.style,a.border="none",a.padding=Cf||zf?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.f.className=this.w.jb,b&&(this.u=Q("sbib_d"),this.u.id=this.G.getId("sb_chc"),this.o.appendChild(this.u)),Og(this.g)&&this.H&&
(this.H.f.className+=" sbib_c",b=this.H,a=this.Va,b.s!=a&&(b.f.dir=b.s=a),this.o.appendChild(this.H.f)),this.C=Q("sbib_b"),this.C.id=this.G.getId("sb_ifc"),this.o.appendChild(this.C),dj(this,this.o,this.C)),this.w.Rd||this.w.Ac||ej(this,this.o),this.D=this.o;this.Aa&&(b=x(this.Sb,this),T(this.i,this.f,"blur",b,10),b=x(this.cc,this),T(this.i,this.f,"focus",b,10),this.ra=!0);kh(this.i,8,x(this.ad,this));fj(this)};
l.K=function(a){this.w=a;this.f.setAttribute("autocomplete","off");this.f.setAttribute("spellcheck",!1);this.f.style.outline=a.Nb?"":"none";this.pa=this.f.value;this.ra&&this.cc();gj(this)};
l.ca=function(){this.ra&&this.Sb();hj(this)};
function dj(a,b,c){hj(a);c||(c=b);a.f.parentNode.replaceChild(b,a.f);c.appendChild(a.f);a.m&&a.w.Jd&&(zf||Bf?Gg(a.i,function(){a.f.focus();Mf(a.f,a.s.Ia())}):a.f.focus());
gj(a)}
l.getHeight=function(){var a=this.D?this.D.offsetHeight:0;this.L>a&&(a=this.L);return a};
function hi(a){return a.M?a.M:a.D?a.D.offsetWidth:0}
l.select=function(){this.f.select();this.Ta()};
l.refresh=function(){Hf&&(this.f.value="");this.f.value=this.g.f;Hf&&(this.f.value=this.f.value);ij(this)};
l.focus=function(){if(!this.m)try{this.f.focus(),this.m=!0,ij(this)}catch(a){}};
l.blur=function(){this.m&&(this.f.blur(),this.m=!1)};
l.isFocused=function(){return this.m};
l.clear=function(){this.f.value=""};
function ij(a){if(a.m){var b=a.f.value.length;a.s=Oe(b);Mf(a.f,b)}}
function ej(a,b){T(a.i,b,"mouseup",function(){a.f.focus()})}
function fj(a){function b(e){T(a.i,a.f,e,x(a.Wb,a),10,c)}
T(a.i,a.f,"keydown",x(a.Yc,a));(Cf||a.w.xc)&&T(a.i,a.f,"keypress",x(a.Zc,a));T(a.i,a.f,"select",x(a.Ta,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=x(a.Vc,a);T(a.i,a.f,"compositionstart",d);T(a.i,a.f,"compositionend",d)}
l.Vc=function(a){a=a.type;"compositionstart"==a?(a=this.g,1!=a.w&&(a.w=!0)):"compositionend"==a&&(a=this.g,0!=a.w&&(a.w=!1))};
l.Yc=function(a){var b=a.keyCode;this.R=b;var c=(Df||Bf)&&(38==b||40==b)&&S(this.sa),d=13==b,e=27==b;this.O=!1;9!=b||a.shiftKey||(this.O=Hg(this.g));if(d){var f=this;Gg(this.i,function(){f.sa.u.search(a.shiftKey?4:3)})}if(c||d||e||this.O)a.La=!0};
l.Zc=function(a){var b=a.keyCode,c=9==b&&this.O;if(13==b||27==b||c)a.La=!0};
l.Wb=function(a){if(!this.qa){var b=a.za;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.g;var e=229==a;(d.G=e)&&d.D.add(4);if(c)break a}else if(d=a!=this.R,this.R=-1,!c||d)break a;switch(a){case 27:a=this.g;a.o.Md?a.search(5):(a.i.isVisible()?a.i.dismiss():a.g.blur(),gg(a));break;case 37:Pg(this.g,"rtl");break;case 39:Pg(this.g,"ltr");break;case 38:this.g.i.ec();break;case 40:a=this.g;c=this.s;S(a.i)?
a.i.dc():Lg(a.i,c);break;case 46:a=this.g;a.f&&this.s.Eb()==a.f.length&&(a.N&&a.N.clear(),a.o.Ld&&a.search(2));break;case 8:a=this.g,a.C&&0==this.s.Ia()&&a.C.f()}}this.Ta();Jg(this.g,this.f.value,this.s,b)}};
l.Uc=function(){this.m=!0;R(this.g.s,10)};
l.Sc=function(){this.m=!1;Fg(this.g)};
function gj(a){a.N||(a.N=!0,a.aa=x(a.Uc,a),T(a.i,a.f,"focus",a.aa,99),a.Y=x(a.Sc,a),T(a.i,a.f,"blur",a.Y,99))}
function hj(a){a.N&&(a.N=!1,jh(a.i,a.f,a.aa),jh(a.i,a.f,a.Y))}
l.cc=function(){this.F||(this.F=new $i(this.w.pollingInterval||50),this.F.f.add("tick",this.Gd,!1,void 0,this),this.F.start())};
l.Sb=function(){this.F&&(this.F.stop(),this.F=null)};
l.Gd=function(){this.Wb({za:"polling"})};
l.ad=function(){if(Bf){var a=this.f,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
l.Ta=function(){if(this.m){a:{var a=this.f;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Pf(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=Oe(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function bj(a){var b;lh(window,"pagehide",function(){a.qa=!0;b=a.f.value});
lh(window,"pageshow",function(c){a.qa=!1;(c.persisted||void 0!==b)&&Ng(a.g,b)})}
function cj(a){lh(window,"pageshow",function(b){b.persisted&&a.pa&&Ng(a.g,a.pa)})}
function gi(a,b){a.f.setAttribute("aria-haspopup",b);b||a.f.removeAttribute("aria-activedescendant")}
;function jj(){this.l=129;this.H={};this.L=[];this.N=[];this.O=[];this.w=[];this.R=0}
B(jj,O);l=jj.prototype;
l.Z=function(a,b){this.Y=a;this.aa=a.fb();this.F=a.Ha();Jf||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Jf||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Df?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Jf&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
l.J=function(a){this.C=a.get(128);this.u=a.get(118);this.G=a.get(121);a=N(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.m]=d;this.ia=b};
l.setup=function(a){this.f=a};
l.ma=function(){this.m=Q();this.g=P("ul","sbsb_b");this.g.setAttribute("role","listbox");this.m.appendChild(this.g)};
l.K=function(a){this.f=a;var b=a.Vb;b&&(this.V=this.Y.Bb(b));this.m.className=a.Vd||"sbsb_a";this.M=a.Td||"sbsb_d"};
l.highlight=function(a){(a=this.w[a])&&a.isSelectable()&&(Xc(a.f().parentNode,this.M),(a=a.f().id)&&this.aa.setAttribute("aria-activedescendant",a))};
function ch(a,b){var c=a.w[b];c&&Yc(c.f().parentNode,a.M)}
l.clear=function(){for(var a,b,c;c=this.L.pop();)a=c.T(),(b=this.H[a])||(b=this.H[a]=[]),b.push(c),a=c.f(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.O.push(a):a!=this.s&&a!=this.o&&this.N.push(a);this.s&&(this.s.style.display="none");this.o&&(this.o.style.display="none");this.w=[]};
l.isSelectable=function(a){return(a=this.w[a])?a.isSelectable():!1};
function Vg(a,b){var c=b.T(),d=a.ia[c];if(!d)return!1;(c=(c=a.H[c])&&c.pop())||(c=kj(a,d));d.Pa(b,c);a.L.push(c);var e=c.f(),f=lj(a);f.appendChild(e);if(void 0!==b.s){a.w.push(c);var g=a.D;var h=b.l;a.f.md&&(e.onmouseover=function(){$g(a.C,h)},e.onmouseout=function(){hg(a.C)});
var k=c.f();k.onclick=function(m){a.u.g.blur();b.i&&Kg(a.u,b.f);hg(a.C);var n=a.C;n.i=n.f=h;m=m||Vf(k).event;d.Oa(m,b,a.G)}}else g=a.F;
Qf(f,g);return!0}
function kj(a,b){var c=b.Ea(a.G),d=c.f();Xc(d,"sbse");d.id="sbse"+a.R;(d=c.f())&&d.setAttribute("role","option");a.R++;return c}
function Zg(a,b,c,d){var e=P("input");e.type="button";e.value=Te(b);e.onclick=function(){a.G.search(a.u.f,d)};
if(a.f.dd){b="lsb";var f=P("span");var g=P("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function lj(a){var b=a.N.pop();if(b)return a.g.appendChild(b),b;b=P("li");b.setAttribute("role","presentation");b.className="sbsb_c "+a.f.Qa;b.onmousedown=x(a.nb,a);a.g.appendChild(b);return b}
l.nb=function(a){a=a||Vf(this.m).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):zf&&!Cf&&(this.u.g.V=!0);return!1};
function Ug(a){if(a.i){var b=0,c=a.u.g.u;c&&(b=c.offsetWidth);b=hi(a.u.g)-b-3;0<b&&(a.i.style.width=b+"px")}}
;function mj(){this.l=147}
B(mj,O);mj.prototype.Z=function(a){this.s=a.Cb()||document.body};
mj.prototype.setup=function(a){this.u=a};
mj.prototype.getHeight=function(){this.f||Wg(this);Xg(this);if(!this.g){var a=this.f;"|"!=a.innerHTML&&(a.innerHTML="|");this.g=this.f.offsetHeight}return this.g};
function Wg(a){var b=Q(a.u.jb),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.f=b;a.f.style.visibility="hidden";a.s.appendChild(a.f)}
function Xg(a){var b=y();if(!a.m||a.m+3E3<b){a.m=b;b=a.f;var c=Vf(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.o&&b==a.o||(a.i={},a.g=null,a.o=b)}}
;function nj(){gf.call(this);this.set(191,new Vh);this.set(150,new Yh);this.set(146,new Zh);this.set(147,new mj);M(this,149,new wg);this.set(145,new eh);this.set(117,new fh);this.set(494,new oh);this.set(374,new ph);this.set(120,new qh);this.set(121,new Eh);this.set(553,new Hh);this.set(124,new Qh);this.set(125,new Rh);this.set(123,new Jh);this.set(126,new Th);this.set(127,new Uh);this.set(115,new zg);this.set(118,new Dg);this.set(128,new Rg);M(this,154,new dh);this.set(116,new ai);this.set(119,new aj);
this.set(129,new jj)}
B(nj,gf);function oj(){this.l=347;this.f=[];this.g=0}
B(oj,O);oj.prototype.J=function(a){this.o=a.get(120)};
oj.prototype.K=function(a){this.m="//"+(a.Bd||"www."+a.Da)+"/gen_204?";this.i=a.Sd||{}};
function Fh(a,b){var c=rh(a.o,b,void 0,void 0),d;for(d in a.i)d in c||(c[d]=a.i[d]);c=Pe(c,!0);pj(a,a.m+c)}
function pj(a,b){var c=new Image,d=a.g,e=a.f;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.f[a.g++]=c;c.src=b}
;function qj(){this.l=151;this.g=!0;this.f={}}
u(qj,O);l=qj.prototype;l.J=function(a){this.i=a.get(150)};
l.setup=function(){this.o=Ne([0])};
l.K=function(a){this.m=a.hb;this.g=a.vb};
l.ca=function(){this.g=!1};
l.update=function(a){if(this.g){var b=a.f;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.o[e.T()]){d=-1;break a}e=e.f;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].f;if(Ve(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.f;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.f[c]=a;++f}}}}};
l.get=function(a){if(this.g){var b=this.f[a.l];if(b){for(var c=a.w,d=a.l,e=b.g,f=this.m||!e.f.k,g=[],h,k,m=b.f,n=0,p;p=m[n++];)k=p.f,h=f?this.i.bold(c,k):Se(k),g.push(new Ae(h,k,p.l,p.T(),p.g||[],p.m));delete this.f[d];return new ef(a,g,e,!0,b.i,!1)}}return null};
l.reset=function(){this.f={}};function rj(){this.l=133;this.g={};this.f=[];this.m=this.i=0}
B(rj,O);rj.prototype.J=function(a){this.f=N(a,151);this.f.sort(sj)};
rj.prototype.K=function(){this.m=this.i=0};
rj.prototype.get=function(a){var b=this.g[a.g];if(b)++this.i;else if(this.f)for(var c=0;c<this.f.length;++c)if(b=this.f[c].get(a)){b&&b.i&&(this.g[b.l.g]=b);++this.m;break}return b?new ef(a,b.f,b.g,b.m,b.i,b.s):null};
rj.prototype.has=function(a){return!!this.g[a.g]};
function sj(){return 0}
;function tj(a){this.l=a;this.f=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function uj(a,b){b&&!a.f.test(b.className)&&(b.className+=" "+a.l)}
function vj(a,b){b&&(b.className=b.className.replace(a.f," "))}
;function wj(){this.l=570;this.m=!1}
B(wj,O);l=wj.prototype;l.Z=function(a){this.s=a};
l.J=function(a){this.o=a.get(117);this.u=a.get(118)};
l.setup=function(a){var b=a.ua;if(this.f=b?this.s.Bb(b):null)kh(this.o,10,x(this.Tc,this)),kh(this.o,11,x(this.Rc,this)),T(this.o,this.f,"mouseover",x(this.Xc,this)),T(this.o,this.f,"mouseout",x(this.Wc,this)),a.bb&&(this.i=new tj(a.bb)),a.ab&&(this.g=new tj(a.ab))};
l.K=function(){this.m=!0;this.f&&this.u.g.isFocused()&&this.g&&uj(this.g,this.f)};
l.ca=function(){this.m=!1;this.f&&(this.i&&vj(this.i,this.f),this.g&&vj(this.g,this.f))};
l.Xc=function(){this.m&&this.i&&uj(this.i,this.f)};
l.Wc=function(){this.m&&this.i&&vj(this.i,this.f)};
l.Tc=function(){this.m&&this.g&&uj(this.g,this.f)};
l.Rc=function(){this.m&&this.g&&vj(this.g,this.f)};function xj(){this.l=156}
B(xj,O);xj.prototype.g=function(a){var b=1,c=a.C;Re(a.f)||"focus"!=c&&"input"!=c||(b=2);return b};
xj.prototype.f=function(){return 2};function yj(){this.l=160}
B(yj,O);l=yj.prototype;l.Z=function(a,b){this.i=a;a.Ua()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
l.J=function(a){this.w=a.get(374);this.C=a.get(128)};
l.setup=function(a){this.m=!!a.Ka;this.o=a.Pb;this.u=a.Ma;this.D=a.Fd;this.F=a.Ed};
l.ma=function(){(this.g=this.i.get("gs_ok"))?this.f=this.g.firstChild:(this.f=P("img"),this.f.src=this.o+"/tia.png",this.g=P("span","gsok_a gsst_e"),this.g.id=this.i.getId("gs_ok"),this.g.appendChild(this.f));this.f.ds=x(this.Bc,this);this.f.setAttribute("tia_field_name",this.i.fb().name);this.f.setAttribute("tia_disable_swap",!0)};
l.K=function(a){a.ib&&(this.m=!!a.Ka);this.f.setAttribute("tia_property",a.Qb)};
l.isEnabled=function(){return this.m};
l.Db=function(){return{tooltip:this.F}};
l.ic=function(a){if(!this.s)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.D+"/"+this.u+"_tia.js",document.body.appendChild(a),this.s=!0,this.w.add(3);else if(this.f.onclick)this.f.onclick(a)};
l.Bc=function(){this.C.dismiss()};
var zj=Me++;function Aj(){this.l=173;this.i={}}
B(Aj,O);l=Aj.prototype;
l.Z=function(a,b){this.m=a;a.Ua()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(Wf()+":"+Xf(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Wf()+":"+Xf(.8)+";"),b.addRule(".gsst_a:active .gsst_e",Wf()+":"+
Xf(1)+";"))};
l.J=function(a){this.u=a.get(118);this.g=N(a,160)};
l.setup=function(a){this.o=a.ib;this.g.sort(Bj)};
l.ma=function(a){this.f=this.m.get("gs_st");if(!this.f){this.f=Q("gsst_b");this.f.id=this.m.getId("gs_st");if(a=a.wa)this.f.style.lineHeight=a+"px";Cj(this)}Dj(this)};
l.K=function(){if(this.o)for(var a=0,b;b=this.g[a++];){var c=!!this.i[zj];if(b.isEnabled()!=c){for(;this.f.hasChildNodes();)this.f.removeChild(this.f.lastChild);Cj(this);Dj(this);break}}};
function Bj(){return 0}
function Cj(a){for(var b,c=0,d;d=a.g[c++];)if(d.isEnabled()){b=!0;var e=P("a","gsst_a");Ej(a,e,d);e.appendChild(d.g);a.f.appendChild(e)}a.f.style.display=b?"":"none"}
function Dj(a){a.i={};for(var b=0,c;c=a.g[b++];)if(c.isEnabled()){var d=zj,e=c.g.parentNode;e.onclick=x(c.ic,c);a.i[d]=e;c.Db&&(c=c.Db(),c.Fe&&(d=a.i[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Ej(a,b,c){ac(b,new E(nb,bb(new Za($a,"javascript:void(0)"))));Cf&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.ic(d),a.u.g.focus(),Sf(d)}}
Me++;function Fj(){this.o=33;this.l=Q();this.l.className="gspr_a"}
B(Fj,xf);Fj.prototype.f=function(){return this.l};function Gj(){yf.call(this,33)}
B(Gj,yf);Gj.prototype.Z=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
Gj.prototype.Ea=function(){return new Fj};
Gj.prototype.Pa=function(a,b){var c=ve(a.m.f.b||"");$b(b.l,c)};
Gj.prototype.Oa=function(a,b,c){c.search(b.f,1)};function Hj(a,b){this.o=0;this.m=a;this.w=b;this.i=Q();this.l=Q("sbqs_a");this.i.appendChild(this.l);this.u=Q("sbqs_c");this.i.appendChild(this.u)}
B(Hj,xf);Hj.prototype.f=function(){return this.i};
function Ij(a,b,c,d){a.u.innerHTML=b;a.s=c;d&&!a.g&&(a.g=Tf(a.l),a.g.onclick=x(function(e){this.m.g.blur();Kg(this.m,this.s);this.w.search(this.s,9);return Sf(e)},a));
d?(a.g.innerHTML=d+" &raquo;",a.l.style.display="",a.l.setAttribute("aria-hidden","true")):a.g&&(a.l.style.display="none")}
;function Jj(){yf.call(this,0)}
B(Jj,yf);l=Jj.prototype;l.Z=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
l.J=function(a){this.g=a.get(118)};
l.K=function(a){this.f=a.yb?a.zb:""};
l.Ea=function(a){return new Hj(this.g,a)};
l.Pa=function(a,b){Ij(b,a.getHtml(),a.f,this.f)};
l.Oa=function(a,b,c){c.search(b.f,1)};function Kj(a){nj.call(this);M(this,149,new qf);this.set(347,new oj);this.set(133,new rj);M(this,151,new qj);this.set(570,new wj);this.set(134,new jg);this.set(189,new lg);M(this,156,new og);M(this,152,new ig);M(this,152,new Gj);M(this,152,new Jj);this.set(173,new Aj);M(this,160,new yj);this.set(157,new pg);M(this,156,new qg);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&M(this,156,new xj);var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&b.SBOX_REPORT_SUGGESTIONS&&(M(this,
153,new vf),M(this,152,new cg(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new rg(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),M(this,156,new vg))}
B(Kj,nj);function Lj(){return{gb:function(){return{clientName:"hp",requestIdentifier:"hp",Da:"google.com",pc:"",kb:"en",Xa:"",ob:"",videoId:"",sb:"",authuser:0,Cd:"",Ue:"",mc:null,qb:"",xb:!1,Zb:"",Na:"",connectionType:0,Se:null,tc:!1,Le:!1,Ib:!1,Gc:!0,Kc:10,ye:10,Fc:!0,vb:!0,se:!1,Nc:!1,zd:!1,Ad:!1,He:!1,kd:!0,Cc:!1,ld:500,ib:!1,cd:!0,De:!0,Oe:!1,Ka:!1,Ma:"",Pb:"//www.google.com/textinputassistant",Qb:"",Fd:7,Ae:!1,Be:!1,gd:!1,fd:!0,hd:!1,Gb:!1,Md:!1,Ld:!1,Ra:1,Lb:!0,Ga:!1,yb:!1,wb:!1,pollingInterval:10,
hb:!1,Jd:!0,da:document.body,jd:!0,qc:null,Ic:{},ue:{},Ke:0,Oc:!1,nd:!0,la:!1,Mc:!1,Qd:!1,Pe:null,Hc:!1,Bd:null,Sd:null,Za:!1,md:!0,xc:!1,Re:1,Nb:!1,searchText:"Search",zb:"I'm  Feeling Lucky",Pd:"",learnMoreText:"Learn more",Yb:"Remove",Xb:"This search was removed from your Web History",hintText:"",re:"Did you mean:",Ed:"",Ne:"",Xe:"Search by voice",We:'Listening for "Ok Google"',Ve:'Say "Ok Google"',ne:"Clear Search",wa:0,ud:0,jb:"",Qa:"",isRtl:!1,ta:"absolute",dd:!1,Fb:!1,Vb:null,ed:!0,Fa:[0,0,
0],Dc:null,Ud:null,tb:[0],nc:!0,sc:"",Vd:"",Td:"",ua:null,bb:"",ab:"",me:1,Xd:!1,Ab:!1,Ie:0,Rd:!1,Ac:!1,te:!1,Hd:!0}}}}
;function Mj(a,b,c,d,e){var f=Bf?"-moz-":zf?"-ms-":Cf?"-o-":Df?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(m,n){if(b){if(c){for(var p=m.split(","),r=[],q=0,z;z=p[q++];)z=h.test(z)?z.replace(h,g+"$1"):g+" "+z,r.push(z);m=r.join(",")}k.push(m,"{",n,"}")}},
wc:function(){if(b&&k.length){b=!1;var m=P("style");m.setAttribute("type","text/css");(a||Ke).appendChild(m);var n=k.join("");k=null;m.styleSheet?m.styleSheet.cssText=n:m.appendChild(document.createTextNode(n))}},
prefix:function(m,n){var p=m+(n||"");f&&(p+=n?m+f+n:f+m);return p}}}
;function Nj(a,b,c,d){this.g=a;this.L=b;this.F=c;this.G=d;this.l=-1;this.w=!1}
l=Nj.prototype;l.install=function(a){if(!this.w){a=Oj(a);0>this.l&&(this.l=Pj(a));var b=Pf(this.g),c=Qj(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.sc&&f.push(a.sc);f=Mj(a.qc,a.jd,a.Hc,this.l,f);this.s=a.la;this.f=new hf(this.F,this.G,{Ua:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Bb:function(g){return b.getElementById(g)},
Cb:function(){return e.L},
Ha:function(){return c},
getId:function(g){return g+e.l},
fb:function(){return e.g}},f,this,a);
this.f.get(347);this.C=this.f.get(130);this.f.get(115);this.H=this.f.get(117);this.f.get(123);this.f.get(135);this.M=this.f.get(118);this.i=this.f.get(119);this.f.get(374);this.m=this.f.get(120);this.f.get(189);this.N=this.f.get(553);this.f.get(419);this.f.get(126);this.f.get(128);this.f.get(139);this.D=this.f.get(121);a=Vf(this.g);this.o=Uf(a);this.u=x(this.Kd,this);lh(a,"resize",this.u);this.w=!0}};
l.isActive=function(){return!!this.f&&this.f.isActive()};
function Rj(a,b){function c(d){a.D.search(a.M.f,12);return Rf(d)}
lh(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
lh(b,"click",c)}
l.focus=function(){this.i.focus()};
l.blur=function(){this.i.blur()};
l.isFocused=function(){return this.i.isFocused()};
l.getId=function(){return this.l};
l.search=function(a,b){this.D.search(a,b)};
l.la=function(){return this.s||!!this.C&&this.C.la()};
l.pb=function(a){this.N.pb(a)};
function Pj(a){a=Vf(a.qc||Ke);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Qj(a){if(a.g)for(a=a.g;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function Oj(a){a=$e(a);var b=a.Ma;b?a.Ma=b.toLowerCase():a.Ka=!1;a.Ga&&!a.yb&&(a.Ga=!1);Ff||(a.Ad=!1);return a}
l.Kd=function(){var a=Uf(Vf(this.g));if(a.uc!=this.o.uc||a.Hb!=this.o.Hb)this.o=a,R(this.H,8)};function Sj(){this.C=/\/(movie|show)s?($|[?#/])/i;this.D=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i;this.s="sbhcn";this.o="sbfcn";this.i="gsfi";this.m="gsfs";this.w=function(){return!0}}
B(Sj,ff);l=Sj.prototype;l.search=function(a,b){this.w(rh(this.f.m,b,void 0))&&this.H.submit()};
l.redirect=function(a){this.F(this.fc(a))};
l.fc=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=rh(this.f.m,void 0,void 0))||(c=rh(this.f.m,void 0));c=Pe(c);return a+b+c};
l.Mb=function(a){if(this.g||this.l){if(22<this.u){var b=(this.u-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.G?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}this.g?(a.addRule("."+this.m,"font-size:1.6rem;color:#222"),a.addRule(".sbqs_c b","font-weight:500"),a.addRule(".sbdd_c",
"z-index:2010"),a.addRule(".sbdd_a","z-index:2011"),a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;"),a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)")):(a.addRule("."+this.i,"font-size:16px;height:100% !important"),a.addRule(".sbib_b ."+this.i,"position:relative !important"),a.addRule("."+this.m,"font-size:16px"),a.addRule("a.sbsb_i","font-size:12px;color:#03c"),a.addRule(".sbdd_c","z-index:2000000006"),a.addRule(".sbdd_a","z-index:2000000007"),this.l||(a.addRule(".sbsb_c,.sbsb_c td",
"line-height:20px"),a.addRule(".sbsb_c","padding:0 6px"),a.addRule(".sbsb_d td","background:#eee"),a.addRule(".sbsb_e","margin:2px 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b","padding:2px 6px"),a.addRule(".gsok_a","padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule("."+this.s,"border:1px solid #b9b9b9;border-top-color:#a0a0a0"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);")),a.addRule("."+this.o,"border:1px solid #1c62b9;"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);")+
"outline:none;")))};
l.install=function(a,b,c,d,e,f,g){this.H=a;this.F=f;g&&(this.w=g);f=Lj().gb();f.clientName="youtube";f.requestIdentifier="youtube";f.Xa="v";f.kb=d.REQUEST_LANGUAGE;f.pc=d.REQUEST_DOMAIN;f.cd=!1;f.Ra=0;f.Lb=!1;f.Ga=!1;f.Nb=!1;f.hb=!0;f.jb=this.i;f.Qa=this.m;f.bb=this.s;f.ab=this.o;f.Ge=!0;g=window.location.href;g=this.C.test(g)||this.D.test(g);f.Ib=g;f.Ka=d.HAS_ON_SCREEN_KEYBOARD;f.Ma=d.REQUEST_LANGUAGE;f.Pb="//www.gstatic.com/inputtools/images";f.Qb="youtube";f.Za=!0;f.ta="fixed";this.g=d.IS_POLYMER;
this.l=d.IS_FUSION;this.G=d.SEARCHBOX_REPORTING;this.u=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;d.PQ&&(f.ob=d.PQ);f.sb=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.Xb=e.SUGGESTION_DISMISSED_LABEL;f.Yb=e.SUGGESTION_DISMISS_LABEL;f.nc=!d.HIDE_REMOVE_LINK;f.Qe=Ne([0,33,35]);this.g?(f.ua="search-container",f.wa=24):this.l?(f.ua="masthead-search",f.wa=24):(f.ua="masthead-search-terms",f.wa=30);Ob()||(f.Fb=!0);f.Vb=f.ua;e=-3;F("Windows")&&Pb()&&"8.0"==Sb()&&(e=-5);this.l?e=17:this.g&&(e=16);f.Fa=[e,0,0];e=[0];
Pb()&&"8.0"==Sb()&&(e[0]=-1);f.tb=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.wb=!0);if(e=d.SUGG_EXP_ID)f.qb=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.f){a=this.f;b=f;c=Vf(a.g);d=a.u;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);kf(a.f);b=Oj(b);a.s=b.la;a=a.f;kf(a);for(c=0;d=a.f[c++];)d.K(b);a.l=!0}else d=new Kj(d),this.f=
new Nj(b,a,this,d),this.f.install(f),c&&(Rj(this.f,c),c.onclick=null)};function Tj(){this.l=[];this.f=-1}
Tj.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.l[a]!=b&&(this.l[a]=b,this.f=-1)};
Tj.prototype.get=function(a){return!!this.l[a]};
function Uj(a){-1==a.f&&(a.f=Ja(a.l,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Vj(){this.l=-1}
;function Wj(){this.l=64;this.f=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.l;++a)this.i[a]=0;this.m=this.g=0;this.reset()}
B(Wj,Vj);Wj.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.m=this.g=0};
function Xj(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Wj.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.l,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)Xj(this,a,d),d+=this.l;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.l){Xj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.l){Xj(this,e);f=0;break}}this.g=f;this.m+=b}};
Wj.prototype.digest=function(){var a=[],b=8*this.m;56>this.g?this.update(this.i,56-this.g):this.update(this.i,this.l-(this.g-56));for(var c=this.l-1;56<=c;c--)this.o[c]=b&255,b/=256;Xj(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Yj(a,b){this.g={};this.f=[];this.i=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Yj)for(c=Zj(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Zj(a){ak(a);return a.f.concat()}
l=Yj.prototype;l.equals=function(a,b){if(this===a)return!0;if(this.l!=a.l)return!1;var c=b||bk;ak(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function bk(a,b){return a===b}
l.isEmpty=function(){return 0==this.l};
l.clear=function(){this.g={};this.i=this.l=this.f.length=0};
l.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.l--,this.i++,this.f.length>2*this.l&&ak(this),!0):!1};
function ak(a){if(a.l!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.l!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
l.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
l.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.l++,this.f.push(a),this.i++);this.g[a]=b};
l.forEach=function(a,b){for(var c=Zj(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Yj(this)};
l.fa=function(a){ak(this);var b=0,c=this.i,d=this,e=new $c;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Zc;var f=d.f[b++];return a?f:d.g[f]};
return e};function ck(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function dk(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function ek(a){var b=[];fk(new gk,a,b);return b.join("")}
function gk(){}
function fk(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),fk(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),hk(d,c),c.push(":"),fk(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":hk(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ik={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},jk=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function hk(a,b){b.push('"',a.replace(jk,function(c){var d=ik[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ik[c]=d);return d}),'"')}
;function U(a){Mc.call(this);this.s=1;this.i=[];this.o=0;this.f=[];this.l={};this.u=!!a}
B(U,Mc);l=U.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
l.rb=function(a){var b=this.f[a];if(b){var c=this.l[b];0!=this.o?(this.i.push(a),this.f[a+1]=va):(c&&Ka(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
l.Id=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];kk(this.f[g+1],this.f[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.rb(c)}}return 0!=e}return!1};
function kk(a,b,c){Ui(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(C(b,this.rb,this),delete this.l[a])}else this.f.length=0,this.l={}};
l.ja=function(){U.ea.ja.call(this);this.clear();this.i.length=0};function lk(a){this.f=a}
lk.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ek(b))};
lk.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
lk.prototype.remove=function(a){this.f.remove(a)};function mk(a){this.f=a}
B(mk,lk);function nk(a){this.data=a}
function ok(a){return void 0===a||a instanceof nk?a:new nk(a)}
mk.prototype.set=function(a,b){mk.ea.set.call(this,a,ok(b))};
mk.prototype.l=function(a){a=mk.ea.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
mk.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function pk(a){this.f=a}
B(pk,mk);pk.prototype.set=function(a,b,c){if(b=ok(b)){if(c){if(c<y()){pk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}pk.ea.set.call(this,a,b)};
pk.prototype.l=function(a){var b=pk.ea.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<y()||c&&c>y())pk.prototype.remove.call(this,a);else return b}};function qk(){}
;function rk(){}
B(rk,qk);rk.prototype.clear=function(){var a=cd(this.fa(!0)),b=this;C(a,function(c){b.remove(c)})};function sk(a){this.f=a}
B(sk,rk);l=sk.prototype;l.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeItem(a)};
l.fa=function(a){var b=0,c=this.f,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){this.f.clear()};
l.key=function(a){return this.f.key(a)};function tk(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
B(tk,sk);function uk(a,b){this.l=a;this.f=null;if(H&&!(9<=Number(tc))){vk||(vk=new Yj);this.f=vk.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),vk.set(a,this.f));try{this.f.load(this.l)}catch(c){this.f=null}}}
B(uk,rk);var wk={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},vk=null;function xk(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return wk[b]})}
l=uk.prototype;l.isAvailable=function(){return!!this.f};
l.set=function(a,b){this.f.setAttribute(xk(a),b);yk(this)};
l.get=function(a){a=this.f.getAttribute(xk(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.f.removeAttribute(xk(a));yk(this)};
l.fa=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new $c;d.next=function(){if(b>=c.length)throw Zc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
l.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);yk(this)};
function yk(a){try{a.f.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function zk(a,b){this.l=a;this.f=b+"::"}
B(zk,rk);zk.prototype.set=function(a,b){this.l.set(this.f+a,b)};
zk.prototype.get=function(a){return this.l.get(this.f+a)};
zk.prototype.remove=function(a){this.l.remove(this.f+a)};
zk.prototype.fa=function(a){var b=this.l.fa(!0),c=this,d=new $c;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.l.get(e)};
return d};var Ak=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",Ak);function Bk(a){var b=arguments;1<b.length?Ak[b[0]]=b[1]:1===b.length&&Object.assign(Ak,b[0])}
function W(a,b){return a in Ak?Ak[a]:b}
;var Ck={};function Dk(){return Ck.clicktracking||(Ck.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Ek(){}
Ek.prototype.f=function(a,b){return Fk(a,1,b)};var Gk=[];function Hk(a){Gk.forEach(function(b){return b(a)})}
function Ik(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jk(b),Hk(b)}}:a}
function Jk(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Bk("ERRORS",b))}
function Kk(a){var b=w("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Bk("ERRORS",b))}
;function Lk(a,b){ya(a)&&(a=Ik(a));return window.setTimeout(a,b)}
function Mk(a){window.clearTimeout(a)}
;function Nk(){}
u(Nk,Ek);function Fk(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Lk(a,c||0)}
Nk.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
Nk.f=void 0;Nk.gb=function(){return Nk.f?Nk.f:Nk.f=new Nk};
var Ok=Nk.gb();function X(a){a=Pk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Qk(a,b){var c=Pk(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Pk(a){var b=W("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:W("EXPERIMENT_FLAGS",{})[a]}
;var Rk=w("ytPubsubPubsubInstance")||new U;U.prototype.subscribe=U.prototype.subscribe;U.prototype.unsubscribeByKey=U.prototype.rb;U.prototype.publish=U.prototype.Id;U.prototype.clear=U.prototype.clear;A("ytPubsubPubsubInstance",Rk);A("ytPubsubPubsubSubscribedKeys",w("ytPubsubPubsubSubscribedKeys")||{});A("ytPubsubPubsubTopicToKeys",w("ytPubsubPubsubTopicToKeys")||{});A("ytPubsubPubsubIsSynchronous",w("ytPubsubPubsubIsSynchronous")||{});var Sk=window,Y=Sk.ytcsi&&Sk.ytcsi.now?Sk.ytcsi.now:Sk.performance&&Sk.performance.timing&&Sk.performance.now&&Sk.performance.timing.navigationStart?function(){return Sk.performance.timing.navigationStart+Sk.performance.now()}:function(){return(new Date).getTime()};var Tk=Qk("initial_gel_batch_timeout",1E3),Uk=Math.pow(2,16)-1,Vk=null,Wk=0,Xk=void 0,Yk=0,Zk=0,$k=0,al=!0,bl=w("ytLoggingTransportLogPayloadsQueue_")||{};A("ytLoggingTransportLogPayloadsQueue_",bl);var cl=w("ytLoggingTransportGELQueue_")||new Map;A("ytLoggingTransportGELQueue_",cl);var dl=w("ytLoggingTransportTokensToCttTargetIds_")||{};A("ytLoggingTransportTokensToCttTargetIds_",dl);
function el(){Mk(Yk);Mk(Zk);Zk=0;Xk&&Xk.isReady()?(fl(cl),"log_event"in bl&&fl(Object.entries(bl.log_event)),cl.clear(),delete bl.log_event):gl()}
function gl(){X("web_gel_timeout_cap")&&!Zk&&(Zk=Lk(el,6E4));Mk(Yk);var a=W("LOGGING_BATCH_TIMEOUT",Qk("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&al&&(a=Tk);Yk=Lk(el,a)}
function fl(a){var b=Xk,c=Math.round(Y());a=t(a);for(var d=a.next();!d.done;d=a.next()){var e=t(d.value);d=e.next().value;var f=e.next().value;e=Wa({context:hl(b.f||il())});e.events=f;(f=dl[d])&&jl(e,d,f);delete dl[d];kl(e,c);ll(b,"log_event",e,{retry:!0,onSuccess:function(){Wk=Math.round(Y()-c)}});
al=!1}}
function kl(a,b){a.requestTimeMs=String(b);X("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=W("EVENT_ID",void 0);if(c){var d=W("BATCH_CLIENT_COUNTER",void 0)||0;!d&&X("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Uk/2));d++;d>Uk&&(d=1);Bk("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Vk&&Wk&&X("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Vk,roundtripMs:String(Wk)});Vk=c;Wk=0}}
function jl(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var ml=Qk("initial_gel_batch_timeout",1E3),nl=Math.pow(2,16)-1,ol=null,pl=0,ql={log_event:"events",log_interaction:"interactions"},rl=new Set(["log_event"]),sl={},tl=0,ul=0,vl=0,wl=!0,Z=w("ytLoggingTransportLogPayloadsQueue_")||{};A("ytLoggingTransportLogPayloadsQueue_",Z);var xl=w("ytLoggingTransportTokensToCttTargetIds_")||{};A("ytLoggingTransportTokensToCttTargetIds_",xl);
function yl(){if(X("use_typescript_transport"))el();else if(Mk(tl),Mk(ul),ul=0,!Ua(Z)){for(var a in Z){var b=sl[a];if(b&&b.isReady()){var c=void 0,d=a,e=ql[d],f=Math.round(Y());for(c in Z[d]){var g=Wa({context:hl(b.f||il())});g[e]=zl(d,c);var h=xl[c];if(h)a:{var k=g,m=c;if(h.videoId)var n="VIDEO";else if(h.playlistId)n="PLAYLIST";else break a;k.credentialTransferTokenTargetId=h;k.context=k.context||{};k.context.user=k.context.user||{};k.context.user.credentialTransferTokens=[{token:m,scope:n}]}delete xl[c];
h=g;h.requestTimeMs=f;X("unsplit_gel_payloads_in_logs")&&(h.unsplitGelPayloadsInLogs=!0);if(n=W("EVENT_ID",void 0))k=W("BATCH_CLIENT_COUNTER",void 0)||0,!k&&X("web_client_counter_random_seed")&&(k=Math.floor(Math.random()*nl/2)),k++,k>nl&&(k=1),Bk("BATCH_CLIENT_COUNTER",k),n={serializedEventId:n,clientCounter:k},h.serializedClientEventId=n,ol&&pl&&X("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:ol,roundtripMs:pl}),ol=n,pl=0;ll(b,d,g,{retry:rl.has(d),onSuccess:Da(Al,Y())})}delete Z[a];
wl=!1}}Ua(Z)||Bl()}}
function Bl(){X("web_gel_timeout_cap")&&!ul&&(ul=Lk(yl,6E4));Mk(tl);var a=W("LOGGING_BATCH_TIMEOUT",Qk("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&wl&&(a=ml);tl=Lk(yl,a)}
function zl(a,b){b=void 0===b?"":b;Z[a]=Z[a]||{};Z[a][b]=Z[a][b]||[];return Z[a][b]}
function Al(a){pl=Math.round(Y()-a)}
;var Cl=0;A("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++Cl});A("ytEventsEventsListeners",w("ytEventsEventsListeners")||{});A("ytEventsEventsCounter",w("ytEventsEventsCounter")||{count:0});var Dl=w("ytLoggingGelSequenceIdObj_")||{};A("ytLoggingGelSequenceIdObj_",Dl);function El(a){var b=[];Ra(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==wa(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Fl(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=bc(e[0]||""),g=bc(e[1]||"");f in b?"array"==wa(b[f])?Na(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};Jk(h)}}}return b}
function Gl(a,b){return Hl(a,b||{},!0)}
function Hl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Fl(e[1]||"");for(var f in b)if(c||!Ta(e,f))e[f]=b[f];return Gc(a,e)+d}
;function Il(a){var b=Jl;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Kl(b),Ll(b));b.ca_type="image";a&&(b.bid=a);return b}
function Kl(a){var b={};b.dt=Oc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.l.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function Ll(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,m="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new yc(m.clientWidth,m.clientHeight)).round()}catch(p){n=new yc(-12245933,-12245933)}k=n;n={};m=new Tj;v.SVGElement&&
v.document.createElementNS&&m.set(0);c=Lc();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);v.crypto&&v.crypto.subtle&&m.set(3);v.TextDecoder&&v.TextEncoder&&m.set(4);m=Uj(m);n.bc=m;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.l;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!I.WebGLRenderingContext,n}
var Jl=new function(){var a=window.document;this.f=window;this.l=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return El(Il(a))});y();var Ml=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Nl(){if(!Ml)return null;var a=Ml();return"open"in a?a:null}
;var Ol={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Pl="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ql=!1;
function Rl(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=Dc(K(3,a));d&&e?(d=c,c=a.match(Cc),d=d.match(Cc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Dc(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=X("web_ajax_ignore_global_headers_if_set");for(var f in Ol)e=W(Ol[f]),!e||!c&&!Sl(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Sl(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Sl(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Sl(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=El(Il(void 0));return b}
function Tl(a){var b=window.location.search,c=Dc(K(3,a)),d=Dc(K(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Fl(b),f={};C(Pl,function(g){e[g]&&(f[g]=e[g])});
return Hl(a,f||{},!1)}
function Sl(a,b){var c=W("CORS_HEADER_WHITELIST")||{},d=Dc(K(3,a));return d?(c=c[d])?0<=Ga(c,b):!1:!0}
function Ul(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Vl(a,b);var d=Wl(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Mk(f);var h=g.ok,k=function(m){m=m||{};var n=b.context||v;h?b.onSuccess&&b.onSuccess.call(n,m,g):b.onError&&b.onError.call(n,m,g);b.mb&&b.mb.call(n,m,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Dd&&0<b.timeout&&(f=Lk(function(){e||(e=!0,Mk(f))},b.timeout))}else Xl(a,b)}
function Xl(a,b){var c=b.format||"JSON";a=Vl(a,b);var d=Wl(a,b),e=!1,f,g=Yl(a,function(h){if(!e){e=!0;f&&Mk(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,n=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(k||n||p)m=Zl(c,h,b.oe);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(m&&m.return_code,10);break a;case "RAW":k=!0;break a}k=!!m}m=m||{};n=b.context||v;
k?b.onSuccess&&b.onSuccess.call(n,h,m):b.onError&&b.onError.call(n,h,m);b.mb&&b.mb.call(n,h,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Rb&&0<b.timeout&&(f=Lk(function(){e||(e=!0,g.abort(),Mk(f))},b.timeout))}
function Vl(a,b){b.Ee&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=W("XSRF_FIELD_NAME",void 0),d=b.Te;d&&(d[c]&&delete d[c],a=Gl(a,d));return a}
function Wl(a,b){var c=W("XSRF_FIELD_NAME",void 0),d=W("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.xa,g=W("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.xe||Dc(K(3,a))&&!b.withCredentials&&Dc(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.xa&&b.xa[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Fl(e),Ya(e,f),e=b.Tb&&"JSON"==b.Tb?JSON.stringify(e):Fc(e));f=e||f&&!Ua(f);!Ql&&f&&"POST"!=b.method&&(Ql=!0,Jk(Error("AJAX request with postData should use POST")));
return e}
function Zl(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?$l(b):null)d={},C(b.getElementsByTagName("*"),function(e){d[e.tagName]=am(e)})}c&&bm(d);
return d}
function bm(a){if(za(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Wb(a[b],null):bm(a[b])}}
function $l(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function am(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Yl(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ik(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Nl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;X("debug_forward_web_query_parameters")&&(a=Tl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Rl(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function cm(){for(var a={},b=t(Object.entries(Fl(W("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=t(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function dm(){return"INNERTUBE_API_KEY"in Ak&&"INNERTUBE_API_VERSION"in Ak}
function il(){return{innertubeApiKey:W("INNERTUBE_API_KEY",void 0),innertubeApiVersion:W("INNERTUBE_API_VERSION",void 0),od:W("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),pd:W("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:W("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),rd:W("INNERTUBE_CONTEXT_HL",void 0),qd:W("INNERTUBE_CONTEXT_GL",void 0),sd:W("INNERTUBE_HOST_OVERRIDE",void 0)||"",td:!!W("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function hl(a){a={client:{hl:a.rd,gl:a.qd,clientName:a.pd,clientVersion:a.innertubeContextClientVersion,configInfo:a.od}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=W("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=W("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=W("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
W("DELEGATED_SESSION_ID")&&!X("pageid_as_header_web")&&(a.user={onBehalfOfUser:W("DELEGATED_SESSION_ID")});X("enable_device_forwarding_from_xhr_client")&&(a.client=Object.assign(a.client,cm()));return a}
function em(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||W("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.le||W("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().ke:b=Tc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=W("SESSION_INDEX",0),X("pageid_as_header_web")&&(d["X-Goog-PageId"]=W("DELEGATED_SESSION_ID")));return d}
function fm(a){a=Object.assign({},a);delete a.Authorization;var b=Tc();if(b){var c=new Wj;c.update(W("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!vc){vc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));uc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===vc[k]&&(vc[k]=h)}}}c=uc[c];d=[];for(e=0;e<b.length;e+=3){var m=b[e],n=(f=e+1<b.length)?b[e+1]:
0;k=(g=e+2<b.length)?b[e+2]:0;h=m>>2;m=(m&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[m],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function gm(a,b,c,d){xc.set(""+a,b,{Kb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function hm(){var a=new tk;(a=a.isAvailable()?new zk(a,"yt.innertube"):null)||(a=new uk("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new pk(a):null;this.l=document.domain||window.location.hostname}
hm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,y()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ek(b))}catch(f){return}else e=escape(b);gm(a,e,c,this.l)};
hm.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=xc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
hm.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.l;xc.remove(""+a,"/",void 0===b?"youtube.com":b)};var im=new hm;function jm(a,b,c,d){if(d)return null;d=im.get("nextId",!0)||1;var e=im.get("requests",!0)||{};e[d]={method:a,request:b,authState:fm(c),requestTime:Math.round(Y())};im.set("nextId",d+1,86400,!0);im.set("requests",e,86400,!0);return d}
function km(a){var b=im.get("requests",!0)||{};delete b[a];im.set("requests",b,86400,!0)}
function lm(a){var b=im.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState;var f=fm(em(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),ll(a,d.method,e,{}));delete b[c]}}im.set("requests",b,86400,!0)}}
;function mm(a){var b=this;this.f=null;a?this.f=a:dm()&&(this.f=il());Fk(function(){lm(b)},0,5E3)}
mm.prototype.isReady=function(){!this.f&&dm()&&(this.f=il());return!!this.f};
function ll(a,b,c,d){!W("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Kk(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",xa:c,Tb:"JSON",Rb:function(){},
Dd:d.Rb,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
Ob:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
Je:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.sd;g&&(f=g);g=a.f.td||!1;var h=em(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Gl(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&X("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=jm(b,c,h,g))){var n=e.onSuccess,p=e.Ob;e.onSuccess=function(r,q){km(m);n(r,q)};
c.Ob=function(r,q){km(m);p(r,q)}}try{X("use_fetch_for_op_xhr")?Ul(k,e):(e.method="POST",e.xa||(e.xa={}),Xl(k,e))}catch(r){if("InvalidAccessError"==r)m&&(km(m),m=0),Kk(Error("An extension is blocking network request."));
else throw r;}m&&Fk(function(){lm(a)},0,5E3)}
;var nm=y().toString();var om;
if(!(om=w("ytLoggingDocDocumentNonce_"))){var pm;a:{if(window.crypto&&window.crypto.getRandomValues)try{var qm=Array(16),rm=new Uint8Array(16);window.crypto.getRandomValues(rm);for(var sm=0;sm<qm.length;sm++)qm[sm]=rm[sm];pm=qm;break a}catch(a){}for(var tm=Array(16),um=0;16>um;um++){for(var vm=y(),wm=0;wm<vm%23;wm++)tm[um]=Math.random();tm[um]=Math.floor(256*Math.random())}if(nm)for(var xm=1,ym=0;ym<nm.length;ym++)tm[xm%16]=tm[xm%16]^tm[(xm-1)%16]/4^nm.charCodeAt(ym),xm++;pm=tm}for(var zm=pm,Am=[],
Bm=0;Bm<zm.length;Bm++)Am.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(zm[Bm]&63));om=Am.join("")}var Cm=om;A("ytLoggingDocDocumentNonce_",Cm);function Dm(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Em(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
A("yt_logging_screen.getRootVeType",function(a){return W(Em(void 0===a?0:a),void 0)});
function Fm(){var a=W("csn-to-ctt-auth-info");a||(a={},Bk("csn-to-ctt-auth-info",a));return a}
function Gm(a){a=void 0===a?0:a;var b=W(Dm(a));if(!b&&!W("USE_CSN_FALLBACK",!0))return null;b||0!=a||(X("kevlar_client_side_screens")||X("c3_client_side_screens")?b="UNDEFINED_CSN":b=W("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",Gm);function Hm(a,b,c){var d=Fm();(c=Gm(c))&&delete d[c];b&&(d[a]=b)}
A("yt_logging_screen.getCttAuthInfo",function(a){return Fm()[a]});
A("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==W(Dm(c))||b!==W(Em(c)))if(Hm(a,d,c),Bk(Dm(c),a),Bk(Em(c),b),0==c||X("web_screen_associated_all_layers"))b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:Cm,clientScreenNonce:a};var f=void 0===f?{}:f;var g={};g.eventTimeMs=Math.round(f.timestamp||Y());g.foregroundHeartbeatScreenAssociated=e;e=String;if(f.timestamp)var h=-1;else h=w("_lact",window),h=null==h?-1:Math.max(y()-h,0);g.context={lastActivityMs:e(h)};
X("log_sequence_info_on_gel_web")&&f.lc&&(e=g.context,h=f.lc,Dl[h]=h in Dl?Dl[h]+1:0,e.sequence={index:Dl[h],groupKey:h},f.we&&delete Dl[f.lc]);f=f.qe;X("use_typescript_transport")?(e="",f&&(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),dl[f.token]=e,e=f.token),f=cl.get(e)||[],cl.set(e,f),f.push(g),mm&&(Xk=new mm),g=Qk("web_logging_max_batch")||100,e=Y(),f.length>=g?el():10<=e-$k&&(gl(),$k=e)):(f?(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),
xl[f.token]=e,f=zl("log_event",f.token)):f=zl("log_event"),f.push(g),mm&&(sl.log_event=new mm),g=Qk("web_logging_max_batch")||100,e=Y(),f.length>=g?yl():10<=e-vl&&(Bl(),vl=e))}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function Im(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?Fc(b):"";gm(a,b,c||5)}
;function Jm(a,b,c,d,e){if(a&&e){var f=W("SBOX_SETTINGS"),g=W("SBOX_LABELS");f&&g&&(a=w("searchbox.yt.install")(a,b,c,f,g,Km,d))&&e(a,100)}}
function Lm(a,b){var c=W("EVENT_ID");if(c){b.ei=c;c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Dk()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";var d=a;c=b;var e=void 0===e?!0:e;var f=W("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Dc(K(3,window.location.href));g&&f.push(g);g=Dc(K(3,d));if(0<=Ga(f,g)||!g&&0==d.lastIndexOf("/",0))if(X("autoescape_tempdata_url")&&(f=document.createElement("a"),ac(f,d),d=f.href),d){g=d.match(Cc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&
(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!c.csn&&(c.itct||c.ved)&&(c=Object.assign({csn:Gm()},c)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Im(d,c,k)}else Im(d,c)}}}
function Km(a,b){Lm(a,b?{feature:b}:{});var c=w("yt.window.navigate");try{c(a)}catch(g){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;c=f.location;d=Gc(a,d)+e;d=d instanceof E?d:sb(d);c.href=pb(d)}}
function Mm(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d.item(f);f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=dk(e);if(null!=e)for(var h,k=0;h=e[k];k++)ck(c,g,h);break;default:h=dk(e),null!=h&&ck(c,g,h)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,ck(c,g,e.value),ck(c,
g+".x","0"),ck(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;Lm(b,a);a=!!W("SPF_SEARCH_BOX");if(!w("ytspf.enabled")||!a)return!0;a=w("yt.window.navigate");try{a(b)}catch(m){return!0}return!1}
;A("searchbox.yt.install",function(a,b,c,d,e,f,g){uf||(uf=new Sj);uf.install(a,b,c,d,e,f,g)});
A("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");Jm(a,a.search_query,document.getElementById("search-btn"),Mm,window.setTimeout)});
A("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){Jm(a,b,c,d,Ok.f)});}).call(this);
