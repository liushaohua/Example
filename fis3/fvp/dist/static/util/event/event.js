define('modules/util/event/event.es', function(require, exports, module) {

  /**
   * @file 事件发射器类
   * @author yanhaijing.com
   * @date 2015年12月16日 20:17:32
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _jquery = require('components/jquery/jquery');
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var EventEmitter = (function () {
      function EventEmitter() {
          _classCallCheck(this, EventEmitter);
  
          this.eventMonitor = (0, _jquery2['default'])({});
      }
  
      _createClass(EventEmitter, [{
          key: 'addListener',
          value: function addListener(event, listener) {
              this.eventMonitor.on(event, listener);
              return this;
          }
      }, {
          key: 'removeListener',
          value: function removeListener(event) {
              this.eventMonitor.off(event);
              return this;
          }
      }, {
          key: 'emit',
          value: function emit(event) {
              var _eventMonitor;
  
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
              }
  
              (_eventMonitor = this.eventMonitor).trigger.apply(_eventMonitor, [event].concat(args));
              return this;
          }
      }, {
          key: 'on',
          value: function on() {
              return this.addListener.apply(this, arguments);
          }
      }, {
          key: 'off',
          value: function off() {
              return this.removeListener.apply(this, arguments);
          }
      }, {
          key: 'once',
          value: function once(event, listener) {
              this.eventMonitor.once(event, listener);
              return this;
          }
      }]);
  
      return EventEmitter;
  })();
  
  var event = new EventEmitter();
  
  exports.EventEmitter = EventEmitter;
  exports.event = event;

});
