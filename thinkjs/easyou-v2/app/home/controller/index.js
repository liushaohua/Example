'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


	//列表页
	_default.prototype.indexAction = function indexAction() {var 

		page, 
		map, 




















		data, 



		k;return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:this.assign('title', "首页");page = this.get('page') ? this.get('page') : 1;map = {};if (this.post('keyword')) {//关键词
						map = { 'ey_contents.title': ['like', '%' + this.post('keyword') + '%'] };this.assign('title', "搜索");}if (this.get('tag')) {//标签
						map = { 'ey_contents.tid': this.get('tag') };this.assign('title', "标签");}if (this.get('cate')) {//分类
						map = { 'ey_contents.cid': this.get('cate') };this.assign('title', "分类");}map.ispage = 1;map.status = 1;context$2$0.next = 10;return _regeneratorRuntime.awrap(this.model('contents').getList(map, page, 6));case 10:data = context$2$0.sent; /*
                                                                                                                                                                                                                                                    *注1：此处略坑，因为之前使用ID做文章标识，为了兼容之前的数据才这样写的
                                                                                                                                                                                                                                                    */for (k in data['data']) {if (!think.isEmpty(data['data'][k]['url'])) {data['data'][k]['id'] = data['data'][k]['url'];}}this.assign('list', data);
					this.display();case 14:case 'end':return context$2$0.stop();}}, null, this);};

	//详情页
	_default.prototype.pageAction = function pageAction() {var 
		map, 



		data;return _regeneratorRuntime.async(function pageAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:map = { status: 1, 'ey_contents.id|ey_contents.url': this.get('id') //注1
					};context$2$0.next = 3;return _regeneratorRuntime.awrap(this.model('contents').getOne(map));case 3:data = context$2$0.sent;if (!think.isEmpty(data.url)) {
						data.id = data.url;}

					this.assign('title', data.title);
					this.assign('data', data);
					//阅读量+1
					this.model('contents').where(map).increment('view');
					this.display();case 9:case 'end':return context$2$0.stop();}}, null, this);};

	//归档页
	_default.prototype.archivesAction = function archivesAction() {var 

		data, 





		k;return _regeneratorRuntime.async(function archivesAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:this.assign('title', '归档');context$2$0.next = 3;return _regeneratorRuntime.awrap(this.model('contents').where("ispage=1 AND status=1").field("id,title,time,view,url").order("time desc").select());case 3:data = context$2$0.sent; //注1
					for (k in data) {data[k]['time'] = formatDate("y-m-d h:i:s", data[k]['time']);
						if (!think.isEmpty(data[k]['url'])) {
							data[k]['id'] = data[k]['url'];}}


					this.assign('data', data);
					this.display();case 7:case 'end':return context$2$0.stop();}}, null, this);};

	//登录
	_default.prototype.loginAction = function loginAction() {var 














		data, map;return _regeneratorRuntime.async(function loginAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 7;break;}context$2$0.next = 3;return _regeneratorRuntime.awrap(this.session('userInfo'));case 3:data = context$2$0.sent;if (!think.isEmpty(data)) {this.redirect("/admin");} else {this.assign('title', "登录到后台");this.display();}context$2$0.next = 18;break;case 7:map = { user: this.post('user'), pass: this.post('pass') };context$2$0.next = 10;return _regeneratorRuntime.awrap(this.model('users').login(map));case 10:data = context$2$0.sent;if (!
					data) {context$2$0.next = 17;break;}context$2$0.next = 14;return _regeneratorRuntime.awrap(

					this.session('userInfo', data));case 14:return context$2$0.abrupt('return', 
					this.redirect("/admin"));case 17:return context$2$0.abrupt('return', 

					this.redirect("/login"));case 18:case 'end':return context$2$0.stop();}}, null, this);};



	//异常页
	_default.prototype.errorAction = function errorAction() {return _regeneratorRuntime.async(function errorAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:
					this.assign('title', '未找到该信息');
					this.display();case 2:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //判断是否登录
//设置session