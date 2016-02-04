'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


    //首页
    _default.prototype.indexAction = function indexAction() {var 
        page, 
        data;return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:page = this.get('p') ? this.get('p') : 1;context$2$0.next = 3;return _regeneratorRuntime.awrap(this.model('contents').getList({}, page, 10));case 3:data = context$2$0.sent;
                    this.assign('list', data);
                    this.display();case 6:case 'end':return context$2$0.stop();}}, null, this);};

    //文章添加
    _default.prototype.addAction = function addAction() {var 


        tag, 


        category, 



        content, 









        userInfo, 
        data, 














        rs;return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 16;break;}tag = this.model('tags').getList();this.assign('tag', tag); //获取分类
                    category = this.model('categorys').getList();this.assign('category', category); //编辑或者新增
                    if (!this.get('id')) {context$2$0.next = 12;break;}context$2$0.next = 8;return _regeneratorRuntime.awrap(this.model('contents').getOne({ 'ey_contents.id': this.get('id') }));case 8:content = context$2$0.sent;this.assign('content', content);context$2$0.next = 13;break;case 12:this.assign('content', {});case 13: //输出模版
                    this.display();context$2$0.next = 39;break;case 16:userInfo = this.session('userInfo');data = {};data.title = this.post('title');data.cid = this.post('category');data.tid = this.post('tag');data.text = this.post('content');data.abscontent = subStr(removeTag(this.post('content')), 400);data.status = this.post('status') || 0;data.ispage = this.post('ispage') || 1;data.iscomment = this.post('iscomment') || 0;data.url = this.post('url');data.uid = userInfo.id;if (!this.post('id')) {context$2$0.next = 34;break;}context$2$0.next = 31;return _regeneratorRuntime.awrap(this.model('contents').where({ id: this.post('id') }).update(data));case 31:rs = context$2$0.sent;context$2$0.next = 38;break;case 34: //新增
                    data.time = time();context$2$0.next = 37;return _regeneratorRuntime.awrap(this.model('contents').add(data));case 37:rs = context$2$0.sent;case 38:if (rs) {//操作成功
                        this.redirect("/admin/content?err=1");} else {
                        //操作失败
                        this.redirect("/admin/content?err=2");}case 39:case 'end':return context$2$0.stop();}}, null, this);};



    //删除
    _default.prototype.deleteAction = function deleteAction() {var 
        map, 



        _post, 



        rs;return _regeneratorRuntime.async(function deleteAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:map = {};if (this.isGet()) {map.id = this.get('id');} else {_post = think.require('querystring').parse(this.http.payload);map.id = ['in', _post.id];}if (!think.isEmpty(map)) {rs = this.model('contents').where(map)['delete']();
                        if (rs) {
                            this.redirect("/admin/content?err=1");} else 
                        {
                            this.redirect("/admin/content?err=2");}} else 

                    {
                        this.redirect("/admin/content?err=3");}case 3:case 'end':return context$2$0.stop();}}, null, this);};


    //分类管理
    _default.prototype.cateAction = function cateAction() {var 

        category;return _regeneratorRuntime.async(function cateAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 6;break;}context$2$0.next = 3;return _regeneratorRuntime.awrap(this.model('categorys').getList());case 3:category = context$2$0.sent;
                    this.assign('category', category);
                    this.display();case 6:case 'end':return context$2$0.stop();}}, null, this);};


    //标签管理
    _default.prototype.tagAction = function tagAction() {var 

        tag;return _regeneratorRuntime.async(function tagAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 6;break;}context$2$0.next = 3;return _regeneratorRuntime.awrap(this.model('tags').getList());case 3:tag = context$2$0.sent;
                    this.assign('tag', tag);
                    this.display();case 6:case 'end':return context$2$0.stop();}}, null, this);};


    //心情管理
    _default.prototype.moodAction = function moodAction() {var 

        page, 
        mood;return _regeneratorRuntime.async(function moodAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 7;break;}page = this.get('p') || 1;context$2$0.next = 4;return _regeneratorRuntime.awrap(this.model('moods').getList({}, page));case 4:mood = context$2$0.sent;
                    this.assign('list', mood);
                    this.display();case 7:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //获取标签
//编辑