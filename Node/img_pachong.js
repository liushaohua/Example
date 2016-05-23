var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var requrl = 'http://jandan.net/ooxx/page-1319';
request(requrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);    //返回请求页面的HTML
    acquireData(body);
}
})
 
function acquireData(data) {
    var $ = cheerio.load(data);
 
    var meizi = $('.text img').toArray();
    console.log(meizi.length);
    var len = meizi.length;
    for (var i=0; i<len; i++) {
        var imgsrc = meizi[i].attribs.src;
        console.log(imgsrc);
        var filename = parseUrlForFileName(imgsrc);  //生成文件名
        downloadImg(imgsrc,filename,function() {
            console.log(filename + ' done');
        });
    }
}
 
function parseUrlForFileName(address) {
    var filename = path.basename(address);
    return filename;
}
 
var downloadImg = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
    // console.log('content-type:', res.headers['content-type']);  //这里返回图片的类型
    // console.log('content-length:', res.headers['content-length']);  //图片大小
    if (err) {
        console.log('err: '+ err);
        return false;
    }
    console.log('res: '+ res);
    request(uri).pipe(fs.createWriteStream('images/'+filename)).on('close', callback);  //调用request的管道来下载到 images文件夹下,可读流的数据写入到可写流中
    });
};