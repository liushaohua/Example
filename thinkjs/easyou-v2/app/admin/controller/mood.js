'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


    //心情添加
    _default.prototype.addAction = function addAction() {var 

        userInfo, 
        data, 









        rs;return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isPost()) {context$2$0.next = 17;break;}context$2$0.next = 3;return _regeneratorRuntime.awrap(this.session('userInfo'));case 3:userInfo = context$2$0.sent;data = { uid: userInfo.id, mood: this.post('mood'), time: time() };if (!(think.isEmpty(this.post('id')) || this.post('id') == "0")) {context$2$0.next = 11;break;}context$2$0.next = 8;return _regeneratorRuntime.awrap(this.model('moods').add(data));case 8:rs = context$2$0.sent;context$2$0.next = 14;break;case 11:context$2$0.next = 13;return _regeneratorRuntime.awrap(this.model('moods').where({ id: this.post('id') }).update(data));case 13:rs = context$2$0.sent;case 14:

                    if (rs) {
                        this.redirect("/admin/content/mood?err=1");} else 
                    {
                        this.redirect("/admin/content/mood?err=2");}context$2$0.next = 18;break;case 17:


                    this.redirect("/admin/content/mood?err=3");case 18:case 'end':return context$2$0.stop();}}, null, this);};


    //获取单条心情
    _default.prototype.getAction = function getAction() {var 
        data;return _regeneratorRuntime.async(function getAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('moods').where({ id: this.get('id') }).find());case 2:data = context$2$0.sent;
                    this.json(data);case 4:case 'end':return context$2$0.stop();}}, null, this);};

    //删除
    _default.prototype.deleteAction = function deleteAction() {var 
        data;return _regeneratorRuntime.async(function deleteAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('moods').where({ id: this.get('id') })['delete']());case 2:data = context$2$0.sent;
                    if (data) {
                        this.redirect("/admin/content/mood?err=1");} else 
                    {
                        this.redirect("/admin/content/mood?err=2");}case 4:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //新增
//更新