'use strict'; /**
               * this file will be loaded before server started
               * you can register middleware
               * https://thinkjs.org/doc/middleware.html
               */

think.middleware('alert', function (http) {
  alert('我是中间件');});