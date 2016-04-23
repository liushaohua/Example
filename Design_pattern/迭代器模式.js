/* 迭代器模式是一种相对简单的模式，可以减少逻辑分之判断，直接上代码
 *
 */

 let getActiveUploadObj => () { //IE上传控件
     try {
         return new ActiveXObject('TXFTNActive.FTNupload');
     } catch (e) {
         return false;
     }
 };

 let getFlashUploadObj => () {  //supportFlash flash上传
     if (supportFlash()) {
         let str = '<object type="application/x-shockwave-flash"></object>';
         return $(str).appendTo($('body'));
     }

     return false;
 }

 let getFormUpladObj => () {    //表单上传
     var str = 'input name="file" type="file" class="ui-file"/>';
     return $(str).appendTo($('body'));
 }

 let iteratorUploadObj => () {
     for (let i = 0,fn; fn = arguments[i++];) {
         let uploadObj = fn();
         if (uploadObj !== false) {
             return uploadObj;
         }
     }
 }

 let uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUpladObj);
