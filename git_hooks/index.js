var http = require('http');
var Url = require('url');
var Fs = require("fs");
var Path = require("path");
var Child_process = require('child_process');
var root = {
	'/update': '../blog/',
	'/e_update': '../Example',
	'/img_update': '../img.liushaohua.cn'
};


http.createServer(function (req, res) {
	var url = Url.parse(req.url).pathname;

    if(root[url]){
        Child_process.exec('cd '+ root[url] +' && git pull', function(a, b){
            console.log(a, b);
        });

        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        return res.end('ok');
    }
}).listen(7777);