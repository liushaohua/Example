;/*!/modules/util/event/event.es*/
define('modules/util/event/event.es', function(require, exports, module) {

  /**
   * @file 事件发射器类
   * @author yanhaijing.com
   * @date 2015年12月16日 20:17:32
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _jquery = require('components/jquery/jquery');
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var EventEmitter = (function () {
      function EventEmitter() {
          _classCallCheck(this, EventEmitter);
  
          this.eventMonitor = (0, _jquery2['default'])({});
      }
  
      _createClass(EventEmitter, [{
          key: 'addListener',
          value: function addListener(event, listener) {
              this.eventMonitor.on(event, listener);
              return this;
          }
      }, {
          key: 'removeListener',
          value: function removeListener(event) {
              this.eventMonitor.off(event);
              return this;
          }
      }, {
          key: 'emit',
          value: function emit(event) {
              var _eventMonitor;
  
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
              }
  
              (_eventMonitor = this.eventMonitor).trigger.apply(_eventMonitor, [event].concat(args));
              return this;
          }
      }, {
          key: 'on',
          value: function on() {
              return this.addListener.apply(this, arguments);
          }
      }, {
          key: 'off',
          value: function off() {
              return this.removeListener.apply(this, arguments);
          }
      }, {
          key: 'once',
          value: function once(event, listener) {
              this.eventMonitor.once(event, listener);
              return this;
          }
      }]);
  
      return EventEmitter;
  })();
  
  var event = new EventEmitter();
  
  exports.EventEmitter = EventEmitter;
  exports.event = event;

});

;/*!/modules/ui/base/base.es*/
define('modules/ui/base/base.es', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _utilEventEvent = require('modules/util/event/event.es');
  
  var guid = 1;
  
  var UIBase = (function (_EventEmitter) {
      _inherits(UIBase, _EventEmitter);
  
      function UIBase() {
          _classCallCheck(this, UIBase);
  
          _get(Object.getPrototypeOf(UIBase.prototype), 'constructor', this).call(this);
          this.guid = guid++;
      }
  
      return UIBase;
  })(_utilEventEvent.EventEmitter);
  
  exports.UIBase = UIBase;

});

;/*!/modules/lib/template/template.js*/
define('modules/lib/template/template', function(require, exports, module) {

  /*!
   * template.js v0.6.1 (https://github.com/yanhaijing/template.js)
   * API https://github.com/yanhaijing/template.js/blob/master/doc/api.md
   * Copyright 2015 yanhaijing. All Rights Reserved
   * Licensed under MIT (https://github.com/yanhaijing/template.js/blob/master/MIT-LICENSE.txt)
   */
  ;(function(root, factory) {
      var template = factory(root);
      if (typeof define === 'function' && define.amd) {
          // AMD
          define('template', function() {
              return template;
          });
      } else if (typeof exports === 'object') {
          // Node.js
          module.exports = template;
      } else {
          // Browser globals
          var _template = root.template;
  
          template.noConflict = function() {
              if (root.template === template) {
                  root.template = _template;
              }
  
              return template;
          };
          root.template = template;
      }
  }(this, function(root) {
      'use strict';
      var o = {
          sTag: '<%',//开始标签
          eTag: '%>',//结束标签
          compress: false,//是否压缩html
          escape: true, //默认输出是否进行HTML转义
          error: function (e) {}//错误回调
      };
      var toString = {}.toString;
  
      function getType(x) {
          if(x === null){
              return 'null';
          }
  
          var t= typeof x;
  
          if(t !== 'object'){
              return t;
          }
  
          var c = toString.call(x).slice(8, -1).toLowerCase();
          if(c !== 'object'){
              return c;
          }
  
          if(x.constructor==Object){
              return c;
          }
  
          return 'unkonw';
      }
  
      function isObject(obj) {
          return getType(obj) === 'object';
      }
      function extend() {
          var target = arguments[0] || {};
          var arrs = Array.prototype.slice.call(arguments, 1);
          var len = arrs.length;
       
          for (var i = 0; i < len; i++) {
              var arr = arrs[i];
              for (var name in arr) {
                  target[name] = arr[name];
              }
       
          }
          return target;
      }
      function encodeHTML(source) {
          return String(source)
              .replace(/&/g,'&amp;')
              .replace(/</g,'&lt;')
              .replace(/>/g,'&gt;')
              .replace(/\\/g,'&#92;')
              .replace(/"/g,'&quot;')
              .replace(/'/g,'&#39;');
      };
      function compress(html) {
          return html.replace(/\s+/g, ' ').replace(/<!--[\w\W]*?-->/g, '');
      }
      function handelError(e) {
          var message = 'template.js error\n\n';
  
          for (var key in e) {
              message += '<' + key + '>\n' + e[key] + '\n\n';
          }
          message += '<message>\n' + e.message + '\n\n';
          typeof console !== 'undefined' && console.error && console.error(message);
  
          o.error(e);
          function error() {
              return 'template.js error';
          }
          error.toString = function () {
              return '__code__ = "template.js error"';
          }
          return error;
      }
      function parse(tpl, opt) {
          var code = '';
          var sTag = opt.sTag;
          var eTag = opt.eTag;
          var escape = opt.escape;
          function parsehtml(line) {
              // 单双引号转义，换行符替换为空格
              line = line.replace(/('|")/g, '\\$1').replace(/\n/g, ' ');
              return ';__code__ += ("' + line + '")\n';
          }
          function parsejs(line) {              
              var html;
              if (line.search(/^=/) !== -1) {
                  //默认输出
                  html = line.slice(1);
                  html = escape ? ('__encodeHTML__(typeof (' + html + ') === "undefined" ? "" : ' + html + ')') : html;
                  return ';__code__ += (' + html + ')\n';
              }
  
              if (line.search(/^:h=/) !== -1) {
                  //HTML转义输出
                  html = line.slice(3);
                  return ';__code__ += (__encodeHTML__(typeof (' + html + ') === "undefined" ? "" : ' + html + '))\n';
              }
  
              if (line.search(/^:=/) !== -1) {
                  //不转义
                  html = line.slice(2);
                  return ';__code__ += (typeof (' + html + ') === "undefined" ? "" : ' + html + ')\n';
              }
  
              if (line.search(/^:u=/) !== -1) {
                  //URL转义
                  html = line.slice(3);
                  return ';__code__ += (typeof (' + html + ') === "undefined" ? "" : encodeURI(' + html + '))\n';
              }
  
              //原生js
              return ';' + line + '\n';
          }
  
          var tokens = tpl.split(sTag);
  
          for (var i = 0, len = tokens.length; i < len; i++) {
              var token = tokens[i].split(eTag);
  
              if (token.length === 1) {
                  code += parsehtml(token[0]);
              } else {
                  code += parsejs(token[0], true);
                  if (token[1]) {
                      code += parsehtml(token[1]);
                  }
              }
          }
  
          return code;
      }
      function compiler(tpl, opt) {
          var mainCode = parse(tpl, opt);
  
          var headerCode = '\n' + 
          '    var html = (function (__data__, __encodeHTML__) {\n' + 
          '        var __str__ = "", __code__ = "";\n' + 
          '        for(var key in __data__) {\n' + 
          '            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n' + 
          '        }\n' + 
          '        eval(__str__);\n\n';
  
          var footerCode = '\n' + 
          '        ;return __code__;\n' + 
          '    }(__data__, __encodeHTML__));\n' + 
          '    return html;\n';
  
          var code = headerCode + mainCode + footerCode;
          code = code.replace(/[\r]/g, ' '); // ie 7 8 会报错，不知道为什么
          try {
              var Render = new Function('__data__', '__encodeHTML__', code); 
              Render.toString = function () {
                  return mainCode;
              }
              return Render;
          } catch(e) {
              e.temp = 'function anonymous(__data__, __encodeHTML__) {' + code + '}';
              throw e;
          }  
      }
      function compile(tpl, opt) {
          opt = extend({}, o, opt);
  
          try {
              var Render = compiler(tpl, opt);
          } catch(e) {
              e.name = 'CompileError';
              e.tpl = tpl;
              e.render = e.temp;
              delete e.temp;
              return handelError(e);
          }
  
          function render(data) {
              try {
                  var html = Render(data, encodeHTML);
                  html = opt.compress ? compress(html) : html;
                  return html;
              } catch(e) {
                  e.name = 'RenderError';
                  e.tpl = tpl;
                  e.render = Render.toString();
                  return handelError(e);
              }            
          }
  
          render.toString = function () {
              return Render.toString();
          };
          return render;
      }
      function template(tpl, data) {
          if (typeof tpl !== 'string') {
              return '';
          }
  
          var fn = compile(tpl);
          if (!isObject(data)) {
              return fn;
          }
  
          return fn(data);
      }
  
      template.config = function (option) {
          if (isObject(option)) {
              o = extend(o, option);
          }
          
          return extend({}, o);
      };
  
      template.__encodeHTML = encodeHTML;
      template.__compress = compress;
      template.__handelError = handelError;
      template.__compile = compile;
      template.version = '0.6.1';
      return template;
  }));
  

});

;/*!/modules/util/template/template.es*/
define('modules/util/template/template.es', function(require, exports, module) {

  /**
   * @file template 引擎
   * @author yanhaijing
   * @date 2015年8月12日 11:27:55
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _libTemplateTemplateJs = require('modules/lib/template/template');
  
  var _libTemplateTemplateJs2 = _interopRequireDefault(_libTemplateTemplateJs);
  
  _libTemplateTemplateJs2['default'].config({
    sTag: '<#',
    eTag: '#>'
  });
  
  window.template = _libTemplateTemplateJs2['default']; // 暴漏到windows，供预编译使用
  
  exports.template = _libTemplateTemplateJs2['default'];

});

;/*!/modules/lib/data.js/data.js*/
define('modules/lib/data.js/data', function(require, exports, module) {

  /*!
   * data.js v0.3.0 (https://github.com/yanhaijing/data.js)
   * Copyright 2013 yanhaijing. All Rights Reserved
   * Licensed under MIT (https://github.com/yanhaijing/data.js/blob/master/MIT-LICENSE.txt)
   */
  (function (root, factory) {
      var Data = factory(root);
      if ( typeof define === 'function' && define.amd) {
          // AMD
          define('data', function() {
              return Data;
          });
      } else if ( typeof exports === 'object') {
          // Node.js
          module.exports = Data;
      } else {
          // Browser globals
          var _Data = root.Data;
          
          Data.noConflict = function () {
              if (root.Data === Data) {
                  root.Data = _Data;
              }
              
              return Data;
          };
          root.Data = Data;
      }
  }(this, function (root) {
      'use strict';
      var slice = [].slice;
      var obj = {};
      var toString = obj.toString;
      var hasOwn = obj.hasOwnProperty;
      var euid = 0;
      function getType(x) {
          if(x === null){
              return 'null';
          }
  
          var t= typeof x;
  
          if(t !== 'object'){
              return t;
          }
          var c;
          // 某些类型会报错
          try {
              c = toString.call(x).slice(8, -1).toLowerCase();
          } catch(exp) {
              return 'unknow';
          }
          if(c !== 'object'){
              return c;
          }
  
          if(x.constructor===Object){
              return c;
          }
  
          return 'unknow';
      }
      function isFn(fn) {
          return getType(fn) === 'function';
      }
      function isArr(arr) {
          return Array.isArray ? Array.isArray(arr) : getType(arr) === 'array';
      }
      function isObj(obj) {
          return getType(obj) === 'object';
      }
      function extendDeep() {
          var target = arguments[0] || {};
          var arrs = slice.call(arguments, 1);
          var len = arrs.length;
          var copyIsArr;
          var clone;
  
          for (var i = 0; i < len; i++) {
              var arr = arrs[i];
              for (var name in arr) {
                  var src = target[name];
                  var copy = arr[name];
                  
                  //避免无限循环
                  if (target === copy) {
                      continue;
                  }
  
                  // 非可枚举属性
                  if (!hasOwn.call(arr, name)) {
                      continue;
                  }
                  
                  if (copy && (isObj(copy) || (copyIsArr = isArr(copy)))) {
                      if (copyIsArr) {
                          copyIsArr = false;
                          clone = src && isArr(src) ? src : [];
  
                      } else {
                          clone = src && isObj(src) ? src : {};
                      }
                      target[ name ] = extendDeep(clone, copy);
                  } else if (typeof copy !== 'undefined'){
                      target[name] = copy;
                  }
              }
  
          }
  
          return target;
      }
      
      function pub(events, event, key, data) {
          events = events[event][key];
          
          if (isObj(events)) {
              for (var name in events) {
                  if (events.hasOwnProperty(name)) {
                      events[name]({
                          type: event,
                          key: key,
                          data: data
                      });
                  }
              }
          }
      }
      function extendData(key, events, context, src) {
          var nkey;
          for (var name in src) {
              var ctx = context[name];
              var copy = src[name];
              var copyIsArr;
              var isadd = false;
              var isdelete = false;
              //避免无限循环
              if (context === copy) {
                  continue;
              }
              
              // 非可枚举属性
              if (!hasOwn.call(src, name)) {
                  continue;
              }
                  
              if (typeof copy === 'undefined') {
                  isdelete = true;
              } else if (typeof context[name] === 'undefined') {
                  isadd = true;
              }
  
              nkey = (typeof key === 'undefined' ? '' : (key + '.')) + name;
              
              if (copy && (isObj(copy) || (copyIsArr = isArr(copy)))) {                
                  if (copyIsArr) {
                      copyIsArr = false;
                      context[name] = ctx && isArr(ctx) ? ctx : [];
  
                  } else {
                      context[name] = ctx && isObj(ctx) ? ctx : {};
                  }
                  context[name] = extendData(nkey, events, context[name], copy);
              } else {                
                  context[name] = copy;
              }
              
              pub(events, 'set', nkey, context[name]);
              
              if (isdelete) {
                  pub(events, 'delete', nkey, context[name]);
              } else if (isadd) {
                  pub(events, 'add', nkey, context[name]);
              } else {
                  pub(events, 'update', nkey, context[name]);
              }
          }
          
          return context;
      }
      
      function parseKey(key) {
          return key.split('.');
      }
      
      function cloneDeep(src) {
          if (isObj(src)) {
              return extendDeep({}, src);
          }
          
          if (isArr(src)){
              return extendDeep([], src);
          }
          
          return src;
      }
      
      //Data构造函数
      var Data = function () {
          if (!(this instanceof Data)) {
              return new Data();
          }
          this._init();
      };
      
      //扩展Data原型
      extendDeep(Data.prototype, {
          _init: function () {
              this._context = {};
              this._events = {
                  'set': {},
                  'delete': {},
                  'add': {},
                  'update': {}
              };
          },
          set: function (key, val) {
              var ctx = this._context;            
              
              if (typeof key !== 'string') {
                  return false;
              }
              
              var keys = parseKey(key);
              var len = keys.length;
              var i = 0; 
              var name; 
              var src;
              //键值为 单个的情况      
              if (len < 2) {
                  src = {};
                  src[key] = val;
                  extendData(undefined, this._events, ctx, src);
                  return true;
              } 
                          
              //切换到对应上下文
              for (; i < len - 1; i++) {
                  name = keys[i];
                  
                  //若不存在对应上下文自动创建
                  if (!isArr(ctx[name]) && !isObj(ctx[name])) {
                      //删除操作不存在对应值时，提前退出
                      if (typeof val === 'undefined') {
                          return false;
                      }
                      //若键值为数组则新建数组，否则新建对象
                      ctx[name] = isNaN(Number(name)) ? {} : [];               
                  }
  
                  ctx = ctx[name];
              }
              
              name = keys.pop();
  
              src = isArr(ctx) ? [] : {};
  
              src[name] = val;                                   
              
              ctx = extendData(keys.join('.'), this._events, ctx, src);
              
              return true;
          },
          get: function (key) {
              //key不为字符串返回undefined
              if (typeof key !== 'string') {
                  return undefined;
              }
              
              var keys = parseKey(key);
              var len = keys.length;
              var i = 0;
              var ctx = this._context;
              var name;
              
              for (; i < len; i++) {
                  name = keys[i];
                  ctx = ctx[name];
                  
                  if (typeof ctx === 'undefined' || ctx === null) {
                      return ctx;
                  }
              }
              
              //返回数据的副本
              return cloneDeep(ctx);
          },
          has: function (key) {
              return typeof  this.get(key) === 'undefined' ? false : true;
          },
          sub: function (type, key, callback) {
              //参数不合法
              if (typeof type !== 'string' || typeof key !== 'string' || !isFn(callback)) {
                  return -1;
              }
  
              //不支持的事件
              if (!(type in this._events)) {
                  return -2;
              }
              
              var events = this._events[type];
              
              events[key] = events[key] || {};
              
              events[key][euid++] = callback;
              
              return euid - 1;
          },
          unsub: function (type, key, id ) {   
              //参数不合法         
              if (typeof type !== 'string' || typeof key !== 'string') {
                  return false;
              }
  
              //不支持的事件
              if (!(type in this._events)) {
                  return false;
              }
              
              var events = this._events[type];
              
              if (!isObj(events[key])) {
                  return false;
              }
              
              if (typeof id !== 'number') {
                  delete events[key];               
                  return true;
              }
              
              delete events[key][id];
              
              return true;
          },
          _clear: function () {
              return this._init();
          }
      });
      
      //新建默认数据中心
      var data = new Data();
      
      //扩展Data接口
      extendDeep(Data, {
          version: '0.3.0',
          has: function (key) {
              return data.has(key);
          },
          get: function (key) {
              return data.get(key);
          },
          set: function (key, val) {
              return data.set(key, val);
          },
          sub: function (type, key, callback) {
              return data.sub(type, key, callback);
          },
          unsub: function (type, key, id) {
              return data.unsub(type, key, id);
          },
          _clear: function () {
              return data._clear();
          }
      });
      
      return Data;//return Data
  }));
  

});
