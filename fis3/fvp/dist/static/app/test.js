define('modules/app/test.es', function(require, exports, module) {

  'use strict';
  
  var $ = require('components/jquery/jquery');
  // 测试UIbase
  var UIBase = require('modules/ui/base/base.es');
  console.log(UIBase);
  
  // 测试Promise
  var Promise = require('components/es6-promise/es6-promise').Promise;
  console.log(Promise);
  
  // 测试template
  require('modules/util/template/template.es').template;
  var tpl = function render(data) {
          'use strict';
          var keyArr = [], valArr = [];
          data = data || {};
          data.__encodeHTML__ = window['template'].__encodeHTML;
          for(var key in data) {
              keyArr.push('"' + key + '"');
              valArr.push(data[key]);
          }
          var source = 'new Function(' + keyArr.join(',') + ', "\\"use strict\\";var __code__ = \\"\\";;__code__ += (\\"\\");for (var i = 0; i < 3; i++) {;__code__ += (\\" template.js \\");};__code__ += (\\"  \\");return __code__")';
          try {
              var fn = eval(source);
              var html = fn.apply(null, valArr);
          } catch (e) {
              e.name = 'RenderError';
              e.tpl = 'modules/app/test.tmpl';
              window['template'].__handelError(e);
              return 'template.js error';
          }
          
          return html;
      };
  $('body').append(tpl({}));
  
  // 测试 underscore
  var _ = require('components/underscore/underscore');
  console.log(_);
  
  // 测试data.js
  
  var Data = require('modules/lib/data.js/data');
  console.log(Data);

});
