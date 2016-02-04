'use strict';
/**
 * users model
 */var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];exports.__esModule = true;var _default = (function (_think$model$base) {_inherits(_default, _think$model$base);function _default() {_classCallCheck(this, _default);_think$model$base.apply(this, arguments);}

	//登录
	_default.prototype.login = function login(map) {var 

		data;return _regeneratorRuntime.async(function login$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:map.pass = think.md5(map.pass + 'eyblog');context$2$0.next = 3;return _regeneratorRuntime.awrap(this.where(map).find());case 3:data = context$2$0.sent;return context$2$0.abrupt('return', 
					data);case 5:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(think.model.base);exports['default'] = _default;module.exports = exports['default'];