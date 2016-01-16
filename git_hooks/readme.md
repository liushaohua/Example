http://www.lovelucy.info/auto-deploy-website-by-webhooks-of-github-and-gitlab.html

pm2:
http://segmentfault.com/a/1190000002539204

#pm2 开机自动启动
pm2 startup centos   

#pm2 查看列表
pm2 list 

$ pm2 start app.js --name serverone  # 启动一个进程并把它命名为 serverone


运行进程的不同方式：
$ pm2 start app.js -i max  # 根据有效CPU数目启动最大进程数目
$ pm2 start app.js -i 3      # 启动3个进程
$ pm2 start app.js -x        #用fork模式启动 app.js 而不是使用 cluster
$ pm2 start app.js -x -- -a 23   # 用fork模式启动 app.js 并且传递参数 (-a 23)
$ pm2 start app.js --name serverone  # 启动一个进程并把它命名为 serverone
$ pm2 stop serverone       # 停止 serverone 进程
$ pm2 start app.json        # 启动进程, 在 app.json里设置选项
$ pm2 start app.js -i max -- -a 23                   #在--之后给 app.js 传递参数
$ pm2 start app.js -i max -e err.log -o out.log  # 启动 并 生成一个配置文件
你也可以执行用其他语言编写的app  ( fork 模式):
$ pm2 start my-bash-script.sh    -x --interpreter bash
$ pm2 start my-python-script.py -x --interpreter python
$ pm2 restart all        # 重启所有进程

查看nginx安装目录
rpm -qal nginx

启动
/usr/sbin/nginx

重启nginx
/usr/sbin/nginx -s reload