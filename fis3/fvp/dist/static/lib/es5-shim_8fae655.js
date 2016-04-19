!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){var t,e=Array,r=e.prototype,n=Object,o=n.prototype,i=Function.prototype,a=String,u=a.prototype,s=Number,f=s.prototype,l=r.slice,c=r.splice,h=r.push,p=r.unshift,g=r.concat,y=i.call,d=i.apply,v=Math.max,b=Math.min,m=o.toString,w="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,T=Function.prototype.toString,D=function(t){try{return T.call(t),!0}catch(e){return!1}},x="[object Function]",S="[object GeneratorFunction]";t=function(t){if("function"!=typeof t)return!1;if(w)return D(t);var e=m.call(t);return e===x||e===S};var O,E=RegExp.prototype.exec,j=function(t){try{return E.call(t),!0}catch(e){return!1}},M="[object RegExp]";O=function(t){return"object"!=typeof t?!1:w?j(t):m.call(t)===M};var I,U=String.prototype.valueOf,F=function(t){try{return U.call(t),!0}catch(e){return!1}},k="[object String]";I=function(t){return"string"==typeof t?!0:"object"!=typeof t?!1:w?F(t):m.call(t)===k};var N=n.defineProperty&&function(){try{var t={};n.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(r){return!1}}(),C=function(t){var e;return e=N?function(t,e,r,o){!o&&e in t||n.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,o){for(var i in n)t.call(n,i)&&e(r,i,n[i],o)}}(o.hasOwnProperty),R=function(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e},A=s.isNaN||function(t){return t!==t},$={ToInteger:function(t){var e=+t;return A(e)?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},ToPrimitive:function(e){var r,n,o;if(R(e))return e;if(n=e.valueOf,t(n)&&(r=n.call(e),R(r)))return r;if(o=e.toString,t(o)&&(r=o.call(e),R(r)))return r;throw new TypeError},ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return n(t)},ToUint32:function(t){return t>>>0}},P=function(){};C(i,{bind:function(e){var r=this;if(!t(r))throw new TypeError("Function.prototype.bind called on incompatible "+r);for(var o,i=l.call(arguments,1),a=function(){if(this instanceof o){var t=r.apply(this,g.call(i,l.call(arguments)));return n(t)===t?t:this}return r.apply(e,g.call(i,l.call(arguments)))},u=v(0,r.length-i.length),s=[],f=0;u>f;f++)h.call(s,"$"+f);return o=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this, arguments); }")(a),r.prototype&&(P.prototype=r.prototype,o.prototype=new P,P.prototype=null),o}});var J=y.bind(o.hasOwnProperty),Z=y.bind(o.toString),z=y.bind(l),G=d.bind(l),Y=y.bind(u.slice),B=y.bind(u.split),H=y.bind(u.indexOf),W=y.bind(h),L=y.bind(o.propertyIsEnumerable),X=y.bind(r.sort),q=e.isArray||function(t){return"[object Array]"===Z(t)},K=1!==[].unshift(0);C(r,{unshift:function(){return p.apply(this,arguments),this.length}},K),C(e,{isArray:q});var Q=n("a"),V="a"!==Q[0]||!(0 in Q),_=function(t){var e=!0,r=!0;return t&&(t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){"use strict";r="string"==typeof this},"x")),!!t&&e&&r};C(r,{forEach:function(e){var r,n=$.ToObject(this),o=V&&I(this)?B(this,""):n,i=-1,a=$.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++i<a;)i in o&&("undefined"==typeof r?e(o[i],i,n):e.call(r,o[i],i,n))}},!_(r.forEach)),C(r,{map:function(r){var n,o=$.ToObject(this),i=V&&I(this)?B(this,""):o,a=$.ToUint32(i.length),u=e(a);if(arguments.length>1&&(n=arguments[1]),!t(r))throw new TypeError("Array.prototype.map callback must be a function");for(var s=0;a>s;s++)s in i&&(u[s]="undefined"==typeof n?r(i[s],s,o):r.call(n,i[s],s,o));return u}},!_(r.map)),C(r,{filter:function(e){var r,n,o=$.ToObject(this),i=V&&I(this)?B(this,""):o,a=$.ToUint32(i.length),u=[];if(arguments.length>1&&(n=arguments[1]),!t(e))throw new TypeError("Array.prototype.filter callback must be a function");for(var s=0;a>s;s++)s in i&&(r=i[s],("undefined"==typeof n?e(r,s,o):e.call(n,r,s,o))&&W(u,r));return u}},!_(r.filter)),C(r,{every:function(e){var r,n=$.ToObject(this),o=V&&I(this)?B(this,""):n,i=$.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.every callback must be a function");for(var a=0;i>a;a++)if(a in o&&!("undefined"==typeof r?e(o[a],a,n):e.call(r,o[a],a,n)))return!1;return!0}},!_(r.every)),C(r,{some:function(e){var r,n=$.ToObject(this),o=V&&I(this)?B(this,""):n,i=$.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.some callback must be a function");for(var a=0;i>a;a++)if(a in o&&("undefined"==typeof r?e(o[a],a,n):e.call(r,o[a],a,n)))return!0;return!1}},!_(r.some));var te=!1;r.reduce&&(te="object"==typeof r.reduce.call("es5",function(t,e,r,n){return n})),C(r,{reduce:function(e){var r=$.ToObject(this),n=V&&I(this)?B(this,""):r,o=$.ToUint32(n.length);if(!t(e))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,a=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a++];break}if(++a>=o)throw new TypeError("reduce of empty array with no initial value")}for(;o>a;a++)a in n&&(i=e(i,n[a],a,r));return i}},!te);var ee=!1;r.reduceRight&&(ee="object"==typeof r.reduceRight.call("es5",function(t,e,r,n){return n})),C(r,{reduceRight:function(e){var r=$.ToObject(this),n=V&&I(this)?B(this,""):r,o=$.ToUint32(n.length);if(!t(e))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,a=o-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a--];break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>a)return i;do a in n&&(i=e(i,n[a],a,r));while(a--);return i}},!ee);var re=r.indexOf&&-1!==[0,1].indexOf(1,2);C(r,{indexOf:function(t){var e=V&&I(this)?B(this,""):$.ToObject(this),r=$.ToUint32(e.length);if(0===r)return-1;var n=0;for(arguments.length>1&&(n=$.ToInteger(arguments[1])),n=n>=0?n:v(0,r+n);r>n;n++)if(n in e&&e[n]===t)return n;return-1}},re);var ne=r.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);C(r,{lastIndexOf:function(t){var e=V&&I(this)?B(this,""):$.ToObject(this),r=$.ToUint32(e.length);if(0===r)return-1;var n=r-1;for(arguments.length>1&&(n=b(n,$.ToInteger(arguments[1]))),n=n>=0?n:r-Math.abs(n);n>=0;n--)if(n in e&&t===e[n])return n;return-1}},ne);var oe=function(){var t=[1,2],e=t.splice();return 2===t.length&&q(e)&&0===e.length}();C(r,{splice:function(){return 0===arguments.length?[]:c.apply(this,arguments)}},!oe);var ie=function(){var t={};return r.splice.call(t,0,0,1),1===t.length}();C(r,{splice:function(t,e){if(0===arguments.length)return[];var r=arguments;return this.length=v($.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof e&&(r=z(arguments),r.length<2?W(r,this.length-t):r[1]=$.ToInteger(e)),c.apply(this,r)}},!ie);var ae=function(){var t=new e(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),ue=function(){var t=256,e=[];return e[t]="a",e.splice(t+1,0,"b"),"a"===e[t]}();C(r,{splice:function(t,e){for(var r,n=$.ToObject(this),o=[],i=$.ToUint32(n.length),u=$.ToInteger(t),s=0>u?v(i+u,0):b(u,i),f=b(v($.ToInteger(e),0),i-s),l=0;f>l;)r=a(s+l),J(n,r)&&(o[l]=n[r]),l+=1;var c,h=z(arguments,2),p=h.length;if(f>p){for(l=s;i-f>l;)r=a(l+f),c=a(l+p),J(n,r)?n[c]=n[r]:delete n[c],l+=1;for(l=i;l>i-f+p;)delete n[l-1],l-=1}else if(p>f)for(l=i-f;l>s;)r=a(l+f-1),c=a(l+p-1),J(n,r)?n[c]=n[r]:delete n[c],l-=1;l=s;for(var g=0;g<h.length;++g)n[l]=h[g],l+=1;return n.length=i-f+p,o}},!ae||!ue);var se,fe=r.join;try{se="1,2,3"!==Array.prototype.join.call("123",",")}catch(le){se=!0}se&&C(r,{join:function(t){var e="undefined"==typeof t?",":t;return fe.call(I(this)?B(this,""):this,e)}},se);var ce="1,2"!==[1,2].join(void 0);ce&&C(r,{join:function(t){var e="undefined"==typeof t?",":t;return fe.call(this,e)}},ce);var he=function(){for(var t=$.ToObject(this),e=$.ToUint32(t.length),r=0;r<arguments.length;)t[e+r]=arguments[r],r+=1;return t.length=e+r,e+r},pe=function(){var t={},e=Array.prototype.push.call(t,void 0);return 1!==e||1!==t.length||"undefined"!=typeof t[0]||!J(t,0)}();C(r,{push:function(){return q(this)?h.apply(this,arguments):he.apply(this,arguments)}},pe);var ge=function(){var t=[],e=t.push(void 0);return 1!==e||1!==t.length||"undefined"!=typeof t[0]||!J(t,0)}();C(r,{push:he},ge),C(r,{slice:function(){var t=I(this)?B(this,""):this;return G(t,arguments)}},V);var ye=function(){try{return[1,2].sort(null),[1,2].sort({}),!0}catch(t){}return!1}(),de=function(){try{return[1,2].sort(/a/),!1}catch(t){}return!0}(),ve=function(){try{return[1,2].sort(void 0),!0}catch(t){}return!1}();C(r,{sort:function(e){if("undefined"==typeof e)return X(this);if(!t(e))throw new TypeError("Array.prototype.sort callback must be a function");return X(this,e)}},ye||!ve||!de);var be=!{toString:null}.propertyIsEnumerable("toString"),me=function(){}.propertyIsEnumerable("prototype"),we=!J("x","0"),Te=function(t){var e=t.constructor;return e&&e.prototype===t},De={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0},xe=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!De["$"+t]&&J(window,t)&&null!==window[t]&&"object"==typeof window[t]&&Te(window[t])}catch(e){return!0}return!1}(),Se=function(t){if("undefined"==typeof window||!xe)return Te(t);try{return Te(t)}catch(e){return!1}},Oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Ee=Oe.length,je=function(t){return"[object Arguments]"===Z(t)},Me=function(e){return null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&!q(e)&&t(e.callee)},Ie=je(arguments)?je:Me;C(n,{keys:function(e){var r=t(e),n=Ie(e),o=null!==e&&"object"==typeof e,i=o&&I(e);if(!o&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var u=[],s=me&&r;if(i&&we||n)for(var f=0;f<e.length;++f)W(u,a(f));if(!n)for(var l in e)s&&"prototype"===l||!J(e,l)||W(u,a(l));if(be)for(var c=Se(e),h=0;Ee>h;h++){var p=Oe[h];c&&"constructor"===p||!J(e,p)||W(u,p)}return u}});var Ue=n.keys&&function(){return 2===n.keys(arguments).length}(1,2),Fe=n.keys&&function(){var t=n.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),ke=n.keys;C(n,{keys:function(t){return ke(Ie(t)?z(t):t)}},!Ue||Fe);var Ne,Ce,Re=0!==new Date(-0xc782b5b342b24).getUTCMonth(),Ae=new Date(-0x55d318d56a724),$e=new Date(14496624e5),Pe="Mon, 01 Jan -45875 11:59:59 GMT"!==Ae.toUTCString(),Je=Ae.getTimezoneOffset();-720>Je?(Ne="Tue Jan 02 -45875"!==Ae.toDateString(),Ce=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test($e.toString())):(Ne="Mon Jan 01 -45875"!==Ae.toDateString(),Ce=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test($e.toString()));var Ze=y.bind(Date.prototype.getFullYear),ze=y.bind(Date.prototype.getMonth),Ge=y.bind(Date.prototype.getDate),Ye=y.bind(Date.prototype.getUTCFullYear),Be=y.bind(Date.prototype.getUTCMonth),He=y.bind(Date.prototype.getUTCDate),We=y.bind(Date.prototype.getUTCDay),Le=y.bind(Date.prototype.getUTCHours),Xe=y.bind(Date.prototype.getUTCMinutes),qe=y.bind(Date.prototype.getUTCSeconds),Ke=y.bind(Date.prototype.getUTCMilliseconds),Qe=["Sun","Mon","Tue","Wed","Thu","Fri"],Ve=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],_e=function(t,e){return Ge(new Date(e,t,0))};C(Date.prototype,{getFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Ze(this);return 0>t&&ze(this)>11?t+1:t},getMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Ze(this),e=ze(this);return 0>t&&e>11?0:e},getDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Ze(this),e=ze(this),r=Ge(this);if(0>t&&e>11){if(12===e)return r;var n=_e(0,t+1);return n-r+1}return r},getUTCFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Ye(this);return 0>t&&Be(this)>11?t+1:t},getUTCMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Ye(this),e=Be(this);return 0>t&&e>11?0:e},getUTCDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Ye(this),e=Be(this),r=He(this);if(0>t&&e>11){if(12===e)return r;var n=_e(0,t+1);return n-r+1}return r}},Re),C(Date.prototype,{toUTCString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=We(this),e=He(this),r=Be(this),n=Ye(this),o=Le(this),i=Xe(this),a=qe(this);return Qe[t]+", "+(10>e?"0"+e:e)+" "+Ve[r]+" "+n+" "+(10>o?"0"+o:o)+":"+(10>i?"0"+i:i)+":"+(10>a?"0"+a:a)+" GMT"}},Re||Pe),C(Date.prototype,{toDateString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear();return Qe[t]+" "+Ve[r]+" "+(10>e?"0"+e:e)+" "+n}},Re||Ne),(Re||Ce)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear(),o=this.getHours(),i=this.getMinutes(),a=this.getSeconds(),u=this.getTimezoneOffset(),s=Math.floor(Math.abs(u)/60),f=Math.floor(Math.abs(u)%60);return Qe[t]+" "+Ve[r]+" "+(10>e?"0"+e:e)+" "+n+" "+(10>o?"0"+o:o)+":"+(10>i?"0"+i:i)+":"+(10>a?"0"+a:a)+" GMT"+(u>0?"-":"+")+(10>s?"0"+s:s)+(10>f?"0"+f:f)},N&&n.defineProperty(Date.prototype,"toString",{configurable:!0,enumerable:!1,writable:!0}));var tr=-621987552e5,er="-000001",rr=Date.prototype.toISOString&&-1===new Date(tr).toISOString().indexOf(er),nr=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString();C(Date.prototype,{toISOString:function(){if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t=Ye(this),e=Be(this);t+=Math.floor(e/12),e=(e%12+12)%12;var r=[e+1,He(this),Le(this),Xe(this),qe(this)];t=(0>t?"-":t>9999?"+":"")+Y("00000"+Math.abs(t),t>=0&&9999>=t?-4:-6);for(var n=0;n<r.length;++n)r[n]=Y("00"+r[n],-2);return t+"-"+z(r,0,2).join("-")+"T"+z(r,2).join(":")+"."+Y("000"+Ke(this),-3)+"Z"}},rr||nr);var or=function(){try{return Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(tr).toJSON().indexOf(er)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(t){return!1}}();or||(Date.prototype.toJSON=function(){var e=n(this),r=$.ToPrimitive(e);if("number"==typeof r&&!isFinite(r))return null;var o=e.toISOString;if(!t(o))throw new TypeError("toISOString property is not callable");return o.call(e)});var ir=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),ar=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z")),ur=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(ur||ar||!ir){var sr=Math.pow(2,31)-1,fr=A(new Date(1970,0,1,0,0,0,sr+1).getTime());Date=function(t){var e=function(r,n,o,i,u,s,f){var l,c=arguments.length;if(this instanceof t){var h=s,p=f;if(fr&&c>=7&&f>sr){var g=Math.floor(f/sr)*sr,y=Math.floor(g/1e3);h+=y,p-=1e3*y}l=1===c&&a(r)===r?new t(e.parse(r)):c>=7?new t(r,n,o,i,u,h,p):c>=6?new t(r,n,o,i,u,h):c>=5?new t(r,n,o,i,u):c>=4?new t(r,n,o,i):c>=3?new t(r,n,o):c>=2?new t(r,n):c>=1?new t(r):new t}else l=t.apply(this,arguments);return R(l)||C(l,{constructor:e},!0),l},r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)},i=function(e){var r=0,n=e;if(fr&&n>sr){var o=Math.floor(n/sr)*sr,i=Math.floor(o/1e3);r+=i,n-=1e3*i}return s(new t(1970,0,1,0,0,r,n))};for(var u in t)J(t,u)&&(e[u]=t[u]);C(e,{now:t.now,UTC:t.UTC},!0),e.prototype=t.prototype,C(e.prototype,{constructor:e},!0);var f=function(e){var n=r.exec(e);if(n){var a,u=s(n[1]),f=s(n[2]||1)-1,l=s(n[3]||1)-1,c=s(n[4]||0),h=s(n[5]||0),p=s(n[6]||0),g=Math.floor(1e3*s(n[7]||0)),y=Boolean(n[4]&&!n[8]),d="-"===n[9]?1:-1,v=s(n[10]||0),b=s(n[11]||0),m=h>0||p>0||g>0;return(m?24:25)>c&&60>h&&60>p&&1e3>g&&f>-1&&12>f&&24>v&&60>b&&l>-1&&l<o(u,f+1)-o(u,f)&&(a=60*(24*(o(u,f)+l)+c+v*d),a=1e3*(60*(a+h+b*d)+p)+g,y&&(a=i(a)),a>=-864e13&&864e13>=a)?a:0/0}return t.parse.apply(this,arguments)};return C(e,{parse:f}),e}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var lr=f.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),cr={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var r=-1,n=e;++r<cr.size;)n+=t*cr.data[r],cr.data[r]=n%cr.base,n=Math.floor(n/cr.base)},divide:function(t){for(var e=cr.size,r=0;--e>=0;)r+=cr.data[e],cr.data[e]=Math.floor(r/t),r=r%t*cr.base},numToString:function(){for(var t=cr.size,e="";--t>=0;)if(""!==e||0===t||0!==cr.data[t]){var r=a(cr.data[t]);""===e?e=r:e+=Y("0000000",0,7-r.length)+r}return e},pow:function Ur(t,e,r){return 0===e?r:e%2===1?Ur(t,e-1,r*t):Ur(t*t,e/2,r)},log:function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}},hr=function(t){var e,r,n,o,i,u,f,l;if(e=s(t),e=A(e)?0:Math.floor(e),0>e||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=s(this),A(r))return"NaN";if(-1e21>=r||r>=1e21)return a(r);if(n="",0>r&&(n="-",r=-r),o="0",r>1e-21)if(i=cr.log(r*cr.pow(2,69,1))-69,u=0>i?r*cr.pow(2,-i,1):r/cr.pow(2,i,1),u*=4503599627370496,i=52-i,i>0){for(cr.multiply(0,u),f=e;f>=7;)cr.multiply(1e7,0),f-=7;for(cr.multiply(cr.pow(10,f,1),0),f=i-1;f>=23;)cr.divide(1<<23),f-=23;cr.divide(1<<f),cr.multiply(1,1),cr.divide(2),o=cr.numToString()}else cr.multiply(0,u),cr.multiply(1<<-i,0),o=cr.numToString()+Y("0.00000000000000000000",2,2+e);return e>0?(l=o.length,o=e>=l?n+Y("0.0000000000000000000",0,e-l+2)+o:n+Y(o,0,l-e)+"."+Y(o,l-e)):o=n+o,o};C(f,{toFixed:hr},lr);var pr=function(){try{return"1"===1..toPrecision(void 0)}catch(t){return!0}}(),gr=f.toPrecision;C(f,{toPrecision:function(t){return"undefined"==typeof t?gr.call(this):gr.call(this,t)}},pr),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t="undefined"==typeof/()??/.exec("")[1],e=Math.pow(2,32)-1;u.split=function(r,n){var o=String(this);if("undefined"==typeof r&&0===n)return[];if(!O(r))return B(this,r,n);var i,a,u,s,f=[],l=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(r.sticky?"y":""),c=0,p=new RegExp(r.source,l+"g");t||(i=new RegExp("^"+p.source+"$(?!\\s)",l));var g="undefined"==typeof n?e:$.ToUint32(n);for(a=p.exec(o);a&&(u=a.index+a[0].length,!(u>c&&(W(f,Y(o,c,a.index)),!t&&a.length>1&&a[0].replace(i,function(){for(var t=1;t<arguments.length-2;t++)"undefined"==typeof arguments[t]&&(a[t]=void 0)}),a.length>1&&a.index<o.length&&h.apply(f,z(a,1)),s=a[0].length,c=u,f.length>=g)));)p.lastIndex===a.index&&p.lastIndex++,a=p.exec(o);return c===o.length?(s||!p.test(""))&&W(f,""):W(f,Y(o,c)),f.length>g?Y(f,0,g):f}}():"0".split(void 0,0).length&&(u.split=function(t,e){return"undefined"==typeof t&&0===e?[]:B(this,t,e)});var yr=u.replace,dr=function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){W(t,r)}),1===t.length&&"undefined"==typeof t[0]}();dr||(u.replace=function(e,r){var n=t(r),o=O(e)&&/\)[*?]/.test(e.source);if(n&&o){var i=function(t){var n=arguments.length,o=e.lastIndex;e.lastIndex=0;var i=e.exec(t)||[];return e.lastIndex=o,W(i,arguments[n-2],arguments[n-1]),r.apply(this,i)};return yr.call(this,e,i)}return yr.call(this,e,r)});var vr=u.substr,br="".substr&&"b"!=="0b".substr(-1);C(u,{substr:function(t,e){var r=t;return 0>t&&(r=v(this.length+t,0)),vr.call(this,r,e)}},br);var mr="	\n\f\r   ᠎             　\u2028\u2029﻿",wr="​",Tr="["+mr+"]",Dr=new RegExp("^"+Tr+Tr+"*"),xr=new RegExp(Tr+Tr+"*$"),Sr=u.trim&&(mr.trim()||!wr.trim());C(u,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return a(this).replace(Dr,"").replace(xr,"")}},Sr);var Or=u.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);C(u,{lastIndexOf:function(t){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");for(var e=a(this),r=a(t),n=arguments.length>1?s(arguments[1]):0/0,o=A(n)?1/0:$.ToInteger(n),i=b(v(o,0),e.length),u=r.length,f=i+u;f>0;){f=v(0,f-u);var l=H(Y(e,f,i+u),r);if(-1!==l)return f+l}return-1}},Or);var Er=u.lastIndexOf;if(C(u,{lastIndexOf:function(){return Er.apply(this,arguments)}},1!==u.lastIndexOf.length),(8!==parseInt(mr+"08")||22!==parseInt(mr+"0x16"))&&(parseInt=function(t){var e=/^[\-+]?0[xX]/;return function(r,n){var o=a(r).trim(),i=s(n)||(e.test(o)?16:10);return t(o,i)}}(parseInt)),"RangeError: test"!==String(new RangeError("test"))){var jr=function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");var t=this.name;"undefined"==typeof t?t="Error":"string"!=typeof t&&(t=a(t));var e=this.message;return"undefined"==typeof e?e="":"string"!=typeof e&&(e=a(e)),t?e?t+": "+e:t:e};Error.prototype.toString=jr}if(N){var Mr=function(t,e){if(L(t,e)){var r=Object.getOwnPropertyDescriptor(t,e);r.enumerable=!1,Object.defineProperty(t,e,r)}};Mr(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),Mr(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){var Ir=function(){var t="/"+this.source+"/";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),t};RegExp.prototype.toString=Ir}});