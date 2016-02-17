'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}




  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  indexAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      data;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.model('list').getList();case 2:data = _context.sent;
              this.assign('data', data);return _context.abrupt('return', 
              this.display());case 5:case 'end':return _context.stop();}}}, _callee, this);}));return function indexAction() {return ref.apply(this, arguments);};}();


  //登录
  _class.prototype.loginAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              this.display();case 1:case 'end':return _context2.stop();}}}, _callee2, this);}));return function loginAction() {return ref.apply(this, arguments);};}();

  //搜索
  _class.prototype.searchAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              this.display();case 1:case 'end':return _context3.stop();}}}, _callee3, this);}));return function searchAction() {return ref.apply(this, arguments);};}();

  //详情
  _class.prototype.pageAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {var 
      id, 
      ip;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:id = this.get('id') ? this.get('id') : 1;ip = this.ip(); //获取请求用户的ip
              this.assign('id', id);
              this.display();case 4:case 'end':return _context4.stop();}}}, _callee4, this);}));return function pageAction() {return ref.apply(this, arguments);};}();


  //广播消息
  _class.prototype.sendAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:if (!
              this.isPost()) {_context5.next = 4;break;}_context5.next = 3;return (
                this.model('list').addList(this.post()));case 3:
              this.success();case 4:case 'end':return _context5.stop();}}}, _callee5, this);}));return function sendAction() {return ref.apply(this, arguments);};}();_class.prototype.



  deleteAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:if (!
              this.isAjax()) {_context6.next = 4;break;}_context6.next = 3;return (
                this.model('list').delete_list(this.post('id')));case 3:
              this.success();case 4:case 'end':return _context6.stop();}}}, _callee6, this);}));return function deleteAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;