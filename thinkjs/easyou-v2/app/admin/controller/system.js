'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


    //首页
    _default.prototype.indexAction = function indexAction() {var 



        data, 









        rs;return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 4;break;}this.display();context$2$0.next = 14;break;case 4:data = readFile(think.ROOT_PATH + "/src/common/config/config.json");data = { title: this.post("title"), keyword: this.post("keyword"), description: this.post("description"), url: this.post("url"), duoshuo: this.post("duoshuo"), copyright: trimStr(this.post('copyright')), linkurl: trimStr(this.post('linkurl')) };context$2$0.next = 8;return _regeneratorRuntime.awrap(writeFile(think.ROOT_PATH + "/src/common/config/config.json", JSON.stringify(data)));case 8:rs = context$2$0.sent;if (!
                    rs) {context$2$0.next = 13;break;}return context$2$0.abrupt('return', 
                    this.redirect("/admin/system"));case 13:return context$2$0.abrupt('return', 

                    this.redirect("/admin/system"));case 14:case 'end':return context$2$0.stop();}}, null, this);};



    //密码修改
    _default.prototype.changeAction = function changeAction() {var 



        userInfo, 
        pwd, 

        user, 
        pwd1, 

        rs;return _regeneratorRuntime.async(function changeAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 4;break;}this.display();context$2$0.next = 22;break;case 4:context$2$0.next = 6;return _regeneratorRuntime.awrap(this.session('userInfo'));case 6:userInfo = context$2$0.sent;pwd = think.md5(this.post('password') + 'eyblog');if (!(pwd == userInfo.pass)) {context$2$0.next = 21;break;}user = this.post('user');pwd1 = this.post('password1');context$2$0.next = 13;return _regeneratorRuntime.awrap(this.model('users').
                    where({ id: userInfo.id }).
                    update({ pass: pwd, user: user }));case 13:rs = context$2$0.sent;if (!
                    rs) {context$2$0.next = 18;break;}return context$2$0.abrupt('return', 

                    this.redirect("/admin/system/change?err=1"));case 18:return context$2$0.abrupt('return', 


                    this.redirect("/admin/system/change?err=2"));case 19:context$2$0.next = 22;break;case 21:return context$2$0.abrupt('return', 



                    this.redirect("/admin/system/change?err=3"));case 22:case 'end':return context$2$0.stop();}}, null, this);};



    //访客记录
    _default.prototype.countAction = function countAction() {var 

        start, 
        end, 


        map, 



        data;return _regeneratorRuntime.async(function countAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (!this.isGet()) {context$2$0.next = 11;break;}start = time() - 86400 || this.get('start');end = time() || this.get('end');this.assign('start', formatDate("y-m-d h:i:s", start));this.assign('end', formatDate("y-m-d h:i:s", end));map = { time: ["between", start, end] };context$2$0.next = 8;return _regeneratorRuntime.awrap(this.model('count').getList(map, this.get('p') || 1));case 8:data = context$2$0.sent;
                    this.assign('list', data);
                    this.display();case 11:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //成功
//失败
//修改密码
//修改成功
//修改失败
//密码不正确
//列表