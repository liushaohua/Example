"use strict"; //自定义路由规则
module.exports = [
["page/:id", "index/page"], //详情页
["p/:page", "index/index"], //首页翻页
["mood/:page", "mood/index"], //心情
["search", "index/search"], //搜索
["login", "index/login"], //登录
["cate/:cate", "index/index"], 
["tag/:tag", "index/index"], //标签云
["about", "index/page?id=1"], //关于
["comment", "index/page?id=2"], //留言
["archives", "index/archives"], //归档
["error", "index/error"] //错误
];