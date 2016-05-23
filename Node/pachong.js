//��������
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

//����expressʵ��
var app = express();

app.get('/', function (req, res, next) {
  // �� superagent ȥץȡ https://cnodejs.org/ ������
  superagent.get('https://liushaohua.cn')
    .end(function (err, sres) {
      // ����Ĵ�����
      if (err) {
        return next(err);
      }
      // sres.text ����洢����ҳ�� html ���ݣ��������� cheerio.load ֮��
      // �Ϳ��Եõ�һ��ʵ���� jquery �ӿڵı���������ϰ���Եؽ�������Ϊ `$`
      // ʣ�¾Ͷ��� jquery ��������
      var $ = cheerio.load(sres.text);
      var items = [];
      $('.article-type-post').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.find('.article-title').html(),
          href: $element.find('.article-title').attr('href')
        });
      });

      res.send(items);
    });
});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});