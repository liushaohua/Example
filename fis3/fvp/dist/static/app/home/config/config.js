define('modules/app/home/config/config.es', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  var Config = (function () {
      function Config(x, y) {
          _classCallCheck(this, Config);
  
          this.x = x;
          this.y = y;
      }
  
      _createClass(Config, [{
          key: "toString",
          value: function toString() {
              return "(" + this.x + ", " + this.y + ")00011";
          }
      }]);
  
      return Config;
  })();
  
  exports["default"] = Config;
  module.exports = exports["default"];

});
