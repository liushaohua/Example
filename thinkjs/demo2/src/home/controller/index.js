'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    this.assign('userName', this.session('user'));
    this.display();
  }

  /*
  * 登录
  *
  */

  async loginAction() {
    if (this.isGet()) {
      this.set_title('请登录');
      return this.display();
    }

    let PostData = this.post();

    if (!PostData.user || !PostData.password) {
      this.log({
        msg: '登录用户失败',
        data: data
      });
      return this.tips('请填写用户名或密码', '/login');
    }


    let map = {
      'user': this.post('user'),
      'password': this.post('password')
    };
    let data = await this.model('users').login(map);
    if (data) {
      this.session('user', map.user);
      this.redirect('/');
    } else {
      return this.fail('login fail');
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

  /*
  * 退出
  *
  **/
  async outAction() {
    if (this.isAjax()) {
      this.session();
      this.success();
    }
  }

}
