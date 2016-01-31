
var fs = require('fs'),
    path = require('path');

let a = () => {
    //console.log('a');
};

a();

let human = {
    's': 'abc',
    'd': 'edf'
};

let work = {
    __proto__ : human,
    'u': 'u'
};

//console.log(work,'s');


function* helloWorld() {
	yield 'hello';
	yield 'world';
	return 'ending';
}


var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) reject(error);
            resolve(data);
        });
    });
};

var asyncReadFile = async function (){
  var f1 = await readFile(path.normalize(__dirname + '/003.js'));
  console.log(f1.toString());
};
var result = asyncReadFile();
