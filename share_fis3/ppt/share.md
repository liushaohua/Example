title: 随便扯扯
speaker: 小企鹅
url: http://www.58.com
transition: card
files: /css/demo.css,/img

[slide]

# 随便扯扯
## 分享人：小企鹅 

[slide]

# FIS3 , 为你定制的前端工程构建工具

* 静态资源打包工具
* 兼容多种JS书写规范，具有更强大的JS模块化功能
* 具有Grunt、Gulp对于静态资源自动化构建的能力
> fis是一个出色的前端自动化构建工具、模块化工具、资源管理工具

[slide]

# 为什么要用FIS3 ?

* js模块规范复杂化 - AMD、CommonJS、ES6 {:&.moveIn}
* 项目中资源多样性和依赖性 - js、css、png、svg、sass、less、jade等
* 开发与线上文件一致性

[slide]

# FIS3的特性 ?

* 用于处理文件依赖分析和进行打包，让程序员可以专注组件开发 {:&.moveIn}
* 兼容各种JS模块规范 - AMD、CommonJS、ES6
* 对各种资源都可支持打包 css、js/jsx、img、svg、fonts等
* 仅需要对应的加载器即可支持，配置简单，关注文件依赖关系即可
* 可打包成多个模块，实现公共模块、独立模块按需加载
* 支持实时打包生成文件，性能更快


[slide]

## 安装

*  基于node环境运行

    ```javascript
    npm install -g fis3	#安装fis
    ```

    ```javascript
    npm install -g fis-parser-less  #less编译插件
    ```
	
	```javascript
    npm install -g fis3-postpackager-loader  #打包工具插件
    ```
	
	```javascript
    fis3 server start -p 803 --root D:\work\share\school\output  #设置当前开发项目的localhost
    ```
	
*	浏览器访问地址：http://localhost:803/html/

[slide]

## fis3 使用和配置

* 默认使用当前目录的fis-conf.js作为配置文件。可以根据不同的需求配置不同的config


## fis3 基本命令

* `fis3 release -wL`    // 设置当前开发项目的localhost #自动发布新文件、自动刷新浏览器 (注意-wL中，L是大写的；停止监听：在命令行中ctrl+C)
* `fis3 release cdn` // 发布时加入CDN地址以及打上MD5戳
* `fis3 server stop` // 停止服务器


[slide]



##  配置相关

*  resource/fis-conf.js

```javascript
var pageName = "test",  //当前项目的名称,用来命名当前项目专用的JS和CSS
static_path = "static",//静态资源的相对路径,默认为static
html_path = "html",//HTML文件的相对路径,默认为html
cdn_url = 'http://123.57.46.65:8082/school/v1.0', //CDN的地址
cdn_type = 'less,png,js,jpg,css,svg,gif'//需要放在CDN里面的文件的类型，用逗号相隔


//启用打包
fis.match('::package', {
  postpackager: fis.plugin('loader')
});

//启用less编译
fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css',
  optimizer: fis.plugin('clean-css')
});

//开始合并、打包各个模块
fis.match('/module/**.{less,css}', {
  packTo: '/css/'+pageName+'.css'
});
fis.match('/module/**.js', {
  packTo: '/js/'+pageName+'.js'
});

//加载雪碧图插件
 fis.match('::packager', {
   spriter: fis.plugin('csssprites')
 });

// 生成雪碧图
 fis.match('*.{less,css}', {
    release: '/'+static_path+'/$0',
    useSprite: true
 });
 
//li.list-1::before {background-image: url('./img/list-1.png?__sprite');}

//转换为png8格式，文件大小会减少很多，但是会有一定程度的颜色、alpha丢失,不用时就注释掉。
 fis.match('*.png', {
   optimizer: fis.plugin('png-compressor',{type:"pngquant"})
 });

//设置发布路径

fis.match('*', {
    release: '/'+static_path+'/$0'
});
fis.match('/*.html', {
    release: '/'+html_path+'/$0'
});


//运行 fis3 release cdn即可打上戳并且发布CDN地址
fis.media('cdn').match('*.{'+cdn_type+'}', {
  domain: cdn_url,
  useHash: true,   //设置为true则开启md5戳，不想打就设置为false，默认所有放在cdn中的文件都打上MD5戳；
  release: '/'+static_path+'/cdn/$0'
});
// 压缩js文件
 fis.media('cdn').match('*.js', {
   optimizer: fis.plugin('uglify-js')
 });

//启用less编译
fis.media('cdn').match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css',
  optimizer: fis.plugin('clean-css')
});
// 压缩css文件
 fis.media('cdn').match('*.css', {
   useSprite: true,
   optimizer: fis.plugin('clean-css')
 });



//这里是一些不需要发布的文件列表，以下为默认值，需要时可以解封然后添加需要屏蔽的文件夹/文件。
fis.set('project.ignore', [
  'fis-conf.js',
  '.git/**',
  '*.bat'
]);

```

[slide]

## 参考资料

*  <a href="http://fis.baidu.com/">fis3 官网</a>

