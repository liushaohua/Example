'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


    //添加
    _default.prototype.addAction = function addAction() {var 

        data, 








        rs;return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isPost()) {context$2$0.next = 14;break;}data = { tid: 1, name: this.post('tag') };if (!(think.isEmpty(this.post('id')) || this.post('id') == "0")) {context$2$0.next = 8;break;}context$2$0.next = 5;return _regeneratorRuntime.awrap(this.model('tags').add(data));case 5:rs = context$2$0.sent;context$2$0.next = 11;break;case 8:context$2$0.next = 10;return _regeneratorRuntime.awrap(this.model('tags').where({ id: this.post('id') }).update(data));case 10:rs = context$2$0.sent;case 11:

                    if (rs) {
                        this.redirect("/admin/content/tag?err=1");} else 
                    {
                        this.redirect("/admin/content/tag?err=2");}context$2$0.next = 15;break;case 14:


                    this.redirect("/admin/content/tag?err=3");case 15:case 'end':return context$2$0.stop();}}, null, this);};


    //获取单条心情
    _default.prototype.getAction = function getAction() {var 
        data;return _regeneratorRuntime.async(function getAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('tags').where({ id: this.get('id') }).find());case 2:data = context$2$0.sent;
                    this.json(data);case 4:case 'end':return context$2$0.stop();}}, null, this);};

    //删除
    _default.prototype.deleteAction = function deleteAction() {var 
        data;return _regeneratorRuntime.async(function deleteAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('tags').where({ id: this.get('id') })['delete']());case 2:data = context$2$0.sent;
                    if (data) {
                        this.redirect("/admin/content/tag?err=1");} else 
                    {
                        this.redirect("/admin/content/tag?err=2");}case 4:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //新增
//更新