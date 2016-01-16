var http = require('http');
var Url = require('url');
var Fs = require("fs");
var Path = require("path");
var Child_process = require('child_process');
var root = '../blog/';


http.createServer(function (req, res) {
	var url = Url.parse(req.url).pathname;

    if(url === '/update'){
        Child_process.exec('cd '+ root +' && git pull', function(a, b){
            console.log(a, b);
        });
		console.log('pull');

        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        return res.end('ok');
    }
}).listen(7777);