'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var marked0$0 = [helloWorld].map(_regeneratorRuntime.mark);

var fs = require('fs'),
    path = require('path');

var a = function a() {
    //console.log('a');
};

a();

var human = {
    's': 'abc',
    'd': 'edf'
};

var work = {
    __proto__: human,
    'u': 'u'
};

//console.log(work,'s');

function helloWorld() {
    return _regeneratorRuntime.wrap(function helloWorld$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return 'hello';

            case 2:
                context$1$0.next = 4;
                return 'world';

            case 4:
                return context$1$0.abrupt('return', 'ending');

            case 5:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

var readFile = function readFile(fileName) {
    return new _Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

var asyncReadFile = function asyncReadFile() {
    var f1;
    return _regeneratorRuntime.async(function asyncReadFile$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return _regeneratorRuntime.awrap(readFile(path.normalize(__dirname + '/003.js')));

            case 2:
                f1 = context$1$0.sent;

                console.log(f1.toString());

            case 4:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
};
var result = asyncReadFile();