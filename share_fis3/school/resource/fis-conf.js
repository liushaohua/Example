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
