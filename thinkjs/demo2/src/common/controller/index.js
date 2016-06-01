/**
 * @file 主控制器，主要写一些所有模块全部都用的，比如标题设置，压缩
 */

'use strict';

import fs from 'fs';
import path from 'path';

export default class extends think.controller.base {
  /**
   * 设置标题
   *
   * @param {string} data 标题
   */
  set_title(...data) {
    this.assign('title', data.join(''));
  }

  /**
   * 显示404页面
   *
   * @return {Promise} []
   */
  error404() {
    return think.statusAction(404, this.http);
  }


  /**
     * 提示
     *
     * @param  {strin} str 字符
     *
     * @return {Promise}     []
     */
  tips(str = '', url = '') {
    /*this.set_location({
      name: '操作提示'
  });*/
    this.assign({
      msg: str,
      back_url: url
    });

    this.set_title('操作提示');

    return this.display('tip');
  }

  /**
   * 打印日志
   *
   * @param  {string|Object} data 数据
   *
   * @return {Promise}      []
   */
  log(data) {
    if (think.isObject(data)) {
      data = JSON.stringify(data);
    }
    return think.log(data, 'BLOG');
  }

  /**
   * 前置
   */
  // __before() {
  // }

  /**
   * 初始化
   *
   * @param  {Object} http http
   */
  init(http) {
    // 调用父类的init方法
    super.init(http);
  }

}
