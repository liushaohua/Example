'use strict';
/**
 * contents model
 */var _inherits = require("babel-runtime/helpers/inherits")["default"];var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];exports.__esModule = true;var _default = (function (_think$model$base) {_inherits(_default, _think$model$base);function _default() {_classCallCheck(this, _default);_think$model$base.apply(this, arguments);}

  //获取文章列表
  _default.prototype.getList = function getList(map, page, nums) {var 
    data, 







    k;return _regeneratorRuntime.async(function getList$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.where(map).page(page, nums || 10).join("ey_users ON ey_contents.uid=ey_users.id").join("ey_tags ON ey_contents.tid=ey_tags.id").field("ey_contents.*,ey_users.user,ey_users.img,ey_tags.name as tag").order("ey_contents.id desc").countSelect());case 2:data = context$2$0.sent; //数据处理
          for (k in data['data']) {/*
                                   *注1：纯粹是为了模版显示
                                   */
            data['data'][k]['m'] = formatDate("m", data['data'][k]['time']);
            data['data'][k]['d'] = formatDate("d", data['data'][k]['time']);
            data['data'][k]['time'] = formatDate("y-m-d h:i:s", data['data'][k]['time']);}return context$2$0.abrupt("return", 

          data);case 5:case "end":return context$2$0.stop();}}, null, this);};_default.prototype.

  getOne = function getOne(map) {var 
    data;return _regeneratorRuntime.async(function getOne$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.where(map).
          join("ey_tags ON ey_contents.tid=ey_tags.id").
          field("ey_contents.*,ey_tags.name as tag").
          find());case 2:data = context$2$0.sent;
          //注1
          data['d'] = formatDate("d", data['time']);
          data['m'] = formatDate("m", data['time']);return context$2$0.abrupt("return", 
          data);case 6:case "end":return context$2$0.stop();}}, null, this);};return _default;})(think.model.base);exports["default"] = _default;module.exports = exports["default"];