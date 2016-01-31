## 使用方法
### 1、进入fis3以及开启内置服务器.bat
### 2、安装node环境：
···json
	目前用的是Node的v0.12.2版本做的演示。

	安装Fis3：
	npm install -g fis3
	npm install -g fis-parser-less  #less编译插件
	npm install -g fis3-postpackager-loader  #打包工具插件

	设置当前开发项目的localhost：
	fis3 server start -p 803 --root D:\work\share\school\output

	注：803是端口号，可以改成你喜欢的号，只要不和之前的项目冲突就行，
		E:\demo\output是项目发布后的根目录。
		浏览器访问地址：http://localhost:803/html/


	自动发布新文件、自动刷新浏览器
	fis3 release -wL
	(注意-wL中，L是大写的；停止监听：在命令行中ctrl+C)

	发布时加入CDN地址以及打上MD5戳
	fis3 release cdn

	停止服务器
	fis3 server stop
···	