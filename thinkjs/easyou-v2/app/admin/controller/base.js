'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];exports.__esModule = true;var _default = (function (_think$controller$base) {_inherits(_default, _think$controller$base);function _default() {_classCallCheck(this, _default);_think$controller$base.apply(this, arguments);}_default.prototype.


  init = function init(http) {
    _think$controller$base.prototype.init.call(this, http); //调用父类的init方法     
  };
  //前置操作
  _default.prototype.__before = function __before() {var 

    userInfo;return _regeneratorRuntime.async(function __before$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.session('userInfo'));case 2:userInfo = context$2$0.sent;if (
          think.isEmpty(userInfo)) {context$2$0.next = 10;break;}
          this.assign('title', '后台管理');
          this.assign('userInfo', userInfo);
          //获取配置
          context$2$0.next = 8;return _regeneratorRuntime.awrap(this.getConfig());case 8:context$2$0.next = 11;break;case 10:return context$2$0.abrupt('return', 

          this.redirect("/login"));case 11:case 'end':return context$2$0.stop();}}, null, this);};


  //获取配置
  _default.prototype.getConfig = function getConfig() {var 
    data;return _regeneratorRuntime.async(function getConfig$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
          data = JSON.parse(data);
          this.assign("_web", data);case 3:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(think.controller.base);exports['default'] = _default;module.exports = exports['default']; //检测登录状态