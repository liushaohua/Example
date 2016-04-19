define("modules/lib/data.js/data",function(t,n,e){!function(t,r){var i=r(t);if("function"==typeof define&&define.amd)define("data",function(){return i});else if("object"==typeof n)e.exports=i;else{var u=t.Data;i.noConflict=function(){return t.Data===i&&(t.Data=u),i},t.Data=i}}(this,function(){"use strict";function t(t){if(null===t)return"null";var n=typeof t;if("object"!==n)return n;var e;try{e=d.call(t).slice(8,-1).toLowerCase()}catch(r){return"unknow"}return"object"!==e?e:t.constructor===Object?e:"unknow"}function n(n){return"function"===t(n)}function e(n){return Array.isArray?Array.isArray(n):"array"===t(n)}function r(n){return"object"===t(n)}function i(){for(var t,n,u=arguments[0]||{},o=s.call(arguments,1),f=o.length,a=0;f>a;a++){var c=o[a];for(var d in c){var v=u[d],p=c[d];u!==p&&l.call(c,d)&&(p&&(r(p)||(t=e(p)))?(t?(t=!1,n=v&&e(v)?v:[]):n=v&&r(v)?v:{},u[d]=i(n,p)):"undefined"!=typeof p&&(u[d]=p))}}return u}function u(t,n,e,i){if(t=t[n][e],r(t))for(var u in t)t.hasOwnProperty(u)&&t[u]({type:n,key:e,data:i})}function o(t,n,i,f){var a;for(var s in f){var c,d=i[s],v=f[s],p=!1,y=!1;i!==v&&l.call(f,s)&&("undefined"==typeof v?y=!0:"undefined"==typeof i[s]&&(p=!0),a=("undefined"==typeof t?"":t+".")+s,v&&(r(v)||(c=e(v)))?(c?(c=!1,i[s]=d&&e(d)?d:[]):i[s]=d&&r(d)?d:{},i[s]=o(a,n,i[s],v)):i[s]=v,u(n,"set",a,i[s]),y?u(n,"delete",a,i[s]):p?u(n,"add",a,i[s]):u(n,"update",a,i[s]))}return i}function f(t){return t.split(".")}function a(t){return r(t)?i({},t):e(t)?i([],t):t}var s=[].slice,c={},d=c.toString,l=c.hasOwnProperty,v=0,p=function(){return this instanceof p?void this._init():new p};i(p.prototype,{_init:function(){this._context={},this._events={set:{},"delete":{},add:{},update:{}}},set:function(t,n){var i=this._context;if("string"!=typeof t)return!1;var u,a,s=f(t),c=s.length,d=0;if(2>c)return a={},a[t]=n,o(void 0,this._events,i,a),!0;for(;c-1>d;d++){if(u=s[d],!e(i[u])&&!r(i[u])){if("undefined"==typeof n)return!1;i[u]=isNaN(Number(u))?{}:[]}i=i[u]}return u=s.pop(),a=e(i)?[]:{},a[u]=n,i=o(s.join("."),this._events,i,a),!0},get:function(t){if("string"!=typeof t)return void 0;for(var n,e=f(t),r=e.length,i=0,u=this._context;r>i;i++)if(n=e[i],u=u[n],"undefined"==typeof u||null===u)return u;return a(u)},has:function(t){return"undefined"==typeof this.get(t)?!1:!0},sub:function(t,e,r){if("string"!=typeof t||"string"!=typeof e||!n(r))return-1;if(!(t in this._events))return-2;var i=this._events[t];return i[e]=i[e]||{},i[e][v++]=r,v-1},unsub:function(t,n,e){if("string"!=typeof t||"string"!=typeof n)return!1;if(!(t in this._events))return!1;var i=this._events[t];return r(i[n])?"number"!=typeof e?(delete i[n],!0):(delete i[n][e],!0):!1},_clear:function(){return this._init()}});var y=new p;return i(p,{version:"0.3.0",has:function(t){return y.has(t)},get:function(t){return y.get(t)},set:function(t,n){return y.set(t,n)},sub:function(t,n,e){return y.sub(t,n,e)},unsub:function(t,n,e){return y.unsub(t,n,e)},_clear:function(){return y._clear()}}),p})});