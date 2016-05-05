/* 迭代器模式是一种相对简单的模式，可以减少逻辑分之判断，直接上代码
 *
 */

 let getActiveUploadObj = () => { //IE上传控件
     try {
         return new ActiveXObject('TXFTNActive.FTNupload');
     } catch (e) {
         return 'next';
     }
 };

 let getFlashUploadObj = () => {  //supportFlash flash上传
     if (supportFlash()) {
         let str = '<object type="application/x-shockwave-flash"></object>';
         return $(str).appendTo($('body'));
     }

     return 'next';
 }

 let getFormUpladObj  = () => {    //表单上传
     var str = 'input name="file" type="file" class="ui-file"/>';
     return $(str).appendTo($('body'));
 }

 function.prototype.after = function (fn) {
     let _this = this;
     return function () {
         let ret = _this.apply(this,arguments);
         if (ret == 'next') {
             return fn.apply(this,argumets);
         }

         return ret;
     }
 }

 let uploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUpladObj);
 uploadObj();
