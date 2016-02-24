'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  /*
  * 登录
  *
  */

  async loginAction() {
      if (this.isGet()) {
          return this.display();
      } else {
          let map = {
              'user': this.post('user'),
              'password': this.post('password')
          };
          let data = await this.model('users').login(map);
          if (data) {
              this.redirect('/?login=1');
          } else {
              this.redirect('/?login=0');
          }
      }
  }

  /*
  * 注册
  *
  */

  async regAction() {
      if (this.isGet()) {
          return this.display();
      } else {
          let map = {
              'user': this.post('user'),
              'password': think.md5(this.post('password'))
          };
          let data = await this.model('users').reg(map);
          if (data) {
              this.redirect('/login');
          }
      }
  }
}
