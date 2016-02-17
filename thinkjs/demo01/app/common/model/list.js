'use strict';
/**
 * model
 */exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$model$base) {(0, _inherits3.default)(_class, _think$model$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));}_class.prototype.

	getList = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
			data;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.field("id,user_id,user_name,text,date").order('id DESC').select();case 2:data = _context.sent;return _context.abrupt('return', 
							data);case 4:case 'end':return _context.stop();}}}, _callee, this);}));return function getList() {return ref.apply(this, arguments);};}();_class.prototype.


	addList = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(d) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
								this.add(d));case 2:case 'end':return _context2.stop();}}}, _callee2, this);}));return function addList(_x) {return ref.apply(this, arguments);};}();_class.prototype.


	delete_list = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(data) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
								this.where({ id: data }).delete());case 2:case 'end':return _context3.stop();}}}, _callee3, this);}));return function delete_list(_x2) {return ref.apply(this, arguments);};}();return _class;}(think.model.base);exports.default = _class;