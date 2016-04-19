define('modules/util/template/template.es', function(require, exports, module) {

  /**
   * @file template 引擎
   * @author yanhaijing
   * @date 2015年8月12日 11:27:55
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _libTemplateTemplateJs = require('modules/lib/template/template');
  
  var _libTemplateTemplateJs2 = _interopRequireDefault(_libTemplateTemplateJs);
  
  _libTemplateTemplateJs2['default'].config({
    sTag: '<#',
    eTag: '#>'
  });
  
  window.template = _libTemplateTemplateJs2['default']; // 暴漏到windows，供预编译使用
  
  exports.template = _libTemplateTemplateJs2['default'];

});
