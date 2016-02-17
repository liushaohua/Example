'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$logic$base) {(0, _inherits3.default)(_class, _think$logic$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$logic$base.apply(this, arguments));}

  /**
   * index action logic
   * @return {} []
   * 逻辑处理。每个操作执行前可以先进行逻辑校验，可以包含：参数是否合法、提交的数据是否正常、当前用户是否已经登录、当前用户是否有权限等。这样可以降低 controller 里的 action 的复杂度。
   */_class.prototype.
  indexAction = function indexAction() {};return _class;}(think.logic.base);exports.default = _class;