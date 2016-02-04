'use strict';
/**
 * moods model
 */var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];exports.__esModule = true;var _default = (function (_think$model$base) {_inherits(_default, _think$model$base);function _default() {_classCallCheck(this, _default);_think$model$base.apply(this, arguments);}

	//获取访客记录
	_default.prototype.getList = function getList(map, page, nums) {var 
		data, 



		k;return _regeneratorRuntime.async(function getList$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.where(map).page(page, nums || 20).order('time desc').countSelect());case 2:data = context$2$0.sent;for (k in data['data']) {
						data['data'][k]['time'] = formatDate("y-m-d h:i:s", data['data'][k]['time']);}context$2$0.next = 6;return _regeneratorRuntime.awrap(

					this.where(map).sum("num"));case 6:data.pv = context$2$0.sent;return context$2$0.abrupt('return', 
					data);case 8:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(think.model.base);exports['default'] = _default;module.exports = exports['default'];