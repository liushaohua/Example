'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
	let data = await this.model('list').getList();
	this.assign('data', data);
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
  
  //广播消息
  async sendAction() {
	  if(this.isPost()){
		  await this.model('list').addList(this.post());
          this.success();
      }
  }
  
  async deleteAction() {
	  if (this.isAjax()) {
		  await this.model('list').delete_list(this.post('id'));	
          this.success();
	  }
  }	  
}