'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];exports.__esModule = true;var _default = (function (_think$controller$base) {_inherits(_default, _think$controller$base);function _default() {_classCallCheck(this, _default);_think$controller$base.apply(this, arguments);}_default.prototype.


  init = function init(http) {
    _think$controller$base.prototype.init.call(this, http); //调用父类的init方法     
  };
  //前置操作
  _default.prototype.__before = function __before() {var 



    newmood, 


    tag;return _regeneratorRuntime.async(function __before$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.getConfig());case 2:context$2$0.next = 4;return _regeneratorRuntime.awrap(this.model('moods').getNew());case 4:newmood = context$2$0.sent;this.assign('newmood', newmood); //标签
          context$2$0.next = 8;return _regeneratorRuntime.awrap(this.model('tags').getList());case 8:tag = context$2$0.sent;this.assign('tag', tag);
          //访客统计[非pjax请求记录]
          if (!this.header('x-pjax')) {
            this.count();}case 11:case 'end':return context$2$0.stop();}}, null, this);};


  //获取配置
  _default.prototype.getConfig = function getConfig() {var 
    data;return _regeneratorRuntime.async(function getConfig$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
          data = JSON.parse(data);
          this.assign("_web", data);case 3:case 'end':return context$2$0.stop();}}, null, this);};

  //访客统计
  _default.prototype.count = function count() {var 
    date, 
    http, 
    userAgent, 

    is_spider, 
    spider, 


    i, 






    map, 



    rs, 





    data;return _regeneratorRuntime.async(function count$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:date = Date();http = this.http;userAgent = this.userAgent();is_spider = false;spider = ['Googlebot', 'Baiduspider', 'Yahoo! Slurp', 'msnbot', 'Sosospider', 'YodaoBot', 'Sogou web spider', 'fast-webcrawler', 'Gaisbot', 'ia_archiver', 'altavista', 'lycos_spider', 'Inktomi slurp'];for (i in spider) {if (userAgent.indexOf(spider[i]) > 0) {is_spider = true;}}if (is_spider) {context$2$0.next = 12;break;}map = { ip: this.ip(), time: [">", time() - 86400] };context$2$0.next = 10;return _regeneratorRuntime.awrap(this.model('count').where(map).count());case 10:rs = context$2$0.sent;if (rs) {//增加来访次数
            this.model('count').where(map).increment("num", 1);} else {data = { ip: this.ip(), 
              time: time(), 
              url: http.url, 
              userAgent: userAgent, 
              Referer: this.referrer(), 
              num: 1 };

            this.model('count').add(data);}case 12:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(think.controller.base);exports['default'] = _default;module.exports = exports['default']; //获取配置
//最新心情
//过滤蜘蛛
//判断24小时内有没有访问
//新增浏览记录