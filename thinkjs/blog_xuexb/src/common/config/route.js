/**
 * @file 路由
 * @author xiaowu
 */

export default [
    // 列表
    [/^list\/([a-zA-Z\-\_]+)(?:\/(\d+))?$/, 'index/list?xssurl=:1&xsspage=:2'],

    // 搜索列表
    [/^search\/([^\/]+)(?:\/(\d+))?$/, 'index/search?key=:1&page=:2'],

    // 标签列表
    [/^tags\/([^\/]+)(?:\/(\d+))?$/, 'index/tags_list/?xssurl=:1&xsspage=:2'],

    // 标签主页
    [/^tags$/, 'index/tags/'],

    // 详情页
    [/^html\/([a-zA-Z0-9\-\_]+)$/, 'index/view/?url=:1'],

    // rss订阅
    [/rss$/, 'index/rss']
];
