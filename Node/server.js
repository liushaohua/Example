var http = require('http');

http.createServer(function (req, res) {

  if (/\/api\/.*$/.test(req.url)) {
	setTimeout(function () {
		res.write('hello2');
		res.end();
	  }, 500);
  } else {
	res.write('hello');
	res.end();
  }
  
}).listen(9805);