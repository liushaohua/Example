define("components/es6-promise/es6-promise",function(t,e,n){(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function r(t){return"object"==typeof t&&null!==t}function o(){}function i(){return function(){process.nextTick(a)}}function s(){var t=0,e=new K(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;Y>t;t+=2){var e=U[t],n=U[t+1];e(n),U[t]=void 0,U[t+1]=void 0}Y=0}function f(){}function l(){return new TypeError("You cannot resolve a promise with itself")}function h(){return new TypeError("A promises callback cannot return that same promise.")}function p(t){try{return t.then}catch(e){return B.error=e,B}}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function d(t,e,n){I(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?y(t,n):g(t,n))},function(e){r||(r=!0,b(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,b(t,o))},t)}function v(t,e){e._state===q?g(t,e._result):t._state===z?b(t,e._result):A(e,void 0,function(e){y(t,e)},function(e){b(t,e)})}function m(t,n){if(n.constructor===t.constructor)v(t,n);else{var r=p(n);r===B?b(t,B.error):void 0===r?g(t,n):e(r)?d(t,n,r):g(t,n)}}function y(e,n){e===n?b(e,l()):t(n)?m(e,n):g(e,n)}function w(t){t._onerror&&t._onerror(t._result),j(t)}function g(t,e){t._state===W&&(t._result=e,t._state=q,0===t._subscribers.length||I(j,t))}function b(t,e){t._state===W&&(t._state=z,t._result=e,I(w,t))}function A(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+q]=n,o[i+z]=r,0===i&&t._state&&I(j,t)}function j(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function E(){this.error=null}function P(t,e){try{return t(e)}catch(n){return G.error=n,G}}function T(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===G?(c=!0,s=i.error,i=null):u=!0,n===i)return void b(n,h())}else i=o,u=!0;n._state!==W||(a&&u?y(n,i):c?b(n,s):t===q?g(n,i):t===z&&b(n,i))}function S(t,e){try{e(function(e){y(t,e)},function(e){b(t,e)})}catch(n){b(t,n)}}function k(t,e,n,r){this._instanceConstructor=t,this.promise=new t(f,r),this._abortOnReject=n,this._validateInput(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._init(),0===this.length?g(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&g(this.promise,this._result))):b(this.promise,this._validationError())}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function O(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function C(t){this._id=X++,this._state=void 0,this._result=void 0,this._subscribers=[],f!==t&&(e(t)||M(),this instanceof C||O(),S(this,t))}var R;R=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var x,D=R,Y=(Date.now||function(){return(new Date).getTime()},Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return o.prototype=t,new o},0),I=function(t,e){U[Y]=t,U[Y+1]=e,Y+=2,2===Y&&x()},F="undefined"!=typeof window?window:{},K=F.MutationObserver||F.WebKitMutationObserver,N="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,U=new Array(1e3);x="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?i():K?s():N?u():c();var W=void 0,q=1,z=2,B=new E,G=new E;k.prototype._validateInput=function(t){return D(t)},k.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},k.prototype._init=function(){this._result=new Array(this.length)};var H=k;k.prototype._enumerate=function(){for(var t=this.length,e=this.promise,n=this._input,r=0;e._state===W&&t>r;r++)this._eachEntry(n[r],r)},k.prototype._eachEntry=function(t,e){var n=this._instanceConstructor;r(t)?t.constructor===n&&t._state!==W?(t._onerror=null,this._settledAt(t._state,e,t._result)):this._willSettleAt(n.resolve(t),e):(this._remaining--,this._result[e]=this._makeResult(q,e,t))},k.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===W&&(this._remaining--,this._abortOnReject&&t===z?b(r,n):this._result[e]=this._makeResult(t,e,n)),0===this._remaining&&g(r,this._result)},k.prototype._makeResult=function(t,e,n){return n},k.prototype._willSettleAt=function(t,e){var n=this;A(t,void 0,function(t){n._settledAt(q,e,t)},function(t){n._settledAt(z,e,t)})};var J=function(t,e){return new H(this,t,!0,e).promise},L=function(t,e){function n(t){y(i,t)}function r(t){b(i,t)}var o=this,i=new o(f,e);if(!D(t))return b(i,new TypeError("You must pass an array to race.")),i;for(var s=t.length,u=0;i._state===W&&s>u;u++)A(o.resolve(t[u]),void 0,n,r);return i},Q=function(t,e){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var r=new n(f,e);return y(r,t),r},V=function(t,e){var n=this,r=new n(f,e);return b(r,t),r},X=0,Z=C;C.all=J,C.race=L,C.resolve=Q,C.reject=V,C.prototype={constructor:C,then:function(t,e){var n=this,r=n._state;if(r===q&&!t||r===z&&!e)return this;var o=new this.constructor(f),i=n._result;if(r){var s=arguments[r-1];I(function(){T(r,o,s,i)})}else A(n,o,t,e);return o},"catch":function(t){return this.then(null,t)}};var $=function(){var t;t="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var n="Promise"in t&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var n;return new t.Promise(function(t){n=t}),e(n)}();n||(t.Promise=Z)},te={Promise:Z,polyfill:$};"function"==typeof define&&define.amd?define(function(){return te}):"undefined"!=typeof n&&n.exports?n.exports=te:"undefined"!=typeof this&&(this.ES6Promise=te)}).call(this)});