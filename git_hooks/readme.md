http://www.lovelucy.info/auto-deploy-website-by-webhooks-of-github-and-gitlab.html

pm2:
http://segmentfault.com/a/1190000002539204

#pm2 �����Զ�����
pm2 startup centos   

#pm2 �鿴�б�
pm2 list 

$ pm2 start app.js --name serverone  # ����һ�����̲���������Ϊ serverone


���н��̵Ĳ�ͬ��ʽ��
$ pm2 start app.js -i max  # ������ЧCPU��Ŀ������������Ŀ
$ pm2 start app.js -i 3      # ����3������
$ pm2 start app.js -x        #��forkģʽ���� app.js ������ʹ�� cluster
$ pm2 start app.js -x -- -a 23   # ��forkģʽ���� app.js ���Ҵ��ݲ��� (-a 23)
$ pm2 start app.js --name serverone  # ����һ�����̲���������Ϊ serverone
$ pm2 stop serverone       # ֹͣ serverone ����
$ pm2 start app.json        # ��������, �� app.json������ѡ��
$ pm2 start app.js -i max -- -a 23                   #��--֮��� app.js ���ݲ���
$ pm2 start app.js -i max -e err.log -o out.log  # ���� �� ����һ�������ļ�
��Ҳ����ִ�����������Ա�д��app  ( fork ģʽ):
$ pm2 start my-bash-script.sh    -x --interpreter bash
$ pm2 start my-python-script.py -x --interpreter python
$ pm2 restart all        # �������н���

�鿴nginx��װĿ¼
rpm -qal nginx

����
/usr/sbin/nginx

����nginx
/usr/sbin/nginx -s reload