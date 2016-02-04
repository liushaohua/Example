'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  //首页
  _default.prototype.indexAction = function indexAction() {var 

    content, 


    mood, 


    comment, 


    count, 


    newmood;return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('contents').count());case 2:content = context$2$0.sent;this.assign('content', content); //心情
          context$2$0.next = 6;return _regeneratorRuntime.awrap(this.model('moods').count());case 6:mood = context$2$0.sent;this.assign('mood', mood); //留言
          context$2$0.next = 10;return _regeneratorRuntime.awrap(this.model('comments').count());case 10:comment = context$2$0.sent;this.assign('comment', comment); //访客
          context$2$0.next = 14;return _regeneratorRuntime.awrap(this.model('count').count());case 14:count = context$2$0.sent;this.assign('count', count); //最新心情
          context$2$0.next = 18;return _regeneratorRuntime.awrap(this.model('moods').getNew());case 18:newmood = context$2$0.sent;this.assign('newMood', newmood);this.display();case 21:case 'end':return context$2$0.stop();}}, null, this);}; //退出登录
  _default.prototype.loginoutAction = function loginoutAction() {return _regeneratorRuntime.async(function loginoutAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(
          this.session('userInfo', ""));case 2:
          this.redirect("/");case 3:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //文章