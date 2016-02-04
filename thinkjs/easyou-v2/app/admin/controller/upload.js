'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


    //首页
    _default.prototype.indexAction = function indexAction() {var 

        file, 

        fs, 

        path, 

        filename, 

        uploadPath, 



        basename;return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:file = this.file("file");fs = think.require('fs');path = think.require('path');filename = path.basename(file.path);uploadPath = think.RESOURCE_PATH + '/static/upload'; //创建目录
                    think.mkdir(uploadPath); //新文件名
                    basename = think.md5(filename) + path.extname(file.path); //path.extname获取文件后缀名，可做控制
                    //移动文件
                    fs.renameSync(file.path, uploadPath + '/' + basename); //输出文件路径
                    this.end('/static/upload/' + basename);case 9:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //获取上传信息
//引入fs处理文件 
//引入path处理文件名
//文件名
//保存目录