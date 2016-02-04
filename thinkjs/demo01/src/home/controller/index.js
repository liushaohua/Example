'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
	this.assign('title', '首页');
	let page = this.get('page') ? this.get('page') : 1;
	if (this.get('tag')) {
		this.assign('title', "tag");
	}
	this.assign('page', page);
    return this.display();
  }
  
  //登录
  async loginAction(){
    this.display();
  }
  //搜索
  async searchAction(){
    this.display();
  }
  //详情
  async pageAction(){
	let id = this.get('id') ? this.get('id') : 1;  
	let ip = this.ip();		//获取请求用户的ip
	this.assign('id', id);
    this.display();
  }
}