## ʹ�÷���
### 1������fis3�Լ��������÷�����.bat
### 2����װnode������
������json
	Ŀǰ�õ���Node��v0.12.2�汾������ʾ��

	��װFis3��
	npm install -g fis3
	npm install -g fis-parser-less  #less������
	npm install -g fis3-postpackager-loader  #������߲��

	���õ�ǰ������Ŀ��localhost��
	fis3 server start -p 803 --root D:\work\share\school\output

	ע��803�Ƕ˿ںţ����Ըĳ���ϲ���ĺţ�ֻҪ����֮ǰ����Ŀ��ͻ���У�
		E:\demo\output����Ŀ������ĸ�Ŀ¼��
		��������ʵ�ַ��http://localhost:803/html/


	�Զ��������ļ����Զ�ˢ�������
	fis3 release -wL
	(ע��-wL�У�L�Ǵ�д�ģ�ֹͣ����������������ctrl+C)

	����ʱ����CDN��ַ�Լ�����MD5��
	fis3 release cdn

	ֹͣ������
	fis3 server stop
������	