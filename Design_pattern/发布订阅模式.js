/* 发布订阅模式，减少模块间的强耦
 * 以登陆为例子
 */

let Event = (function() {
  let clientList = [],
    on = (key, fn) => {
      if (!clientList[key]) {
        clientList[key] = [];
      }
      clientList[key].push(fn);
    },
    emit = () => {
      let key = Array.prototype.shift.call(arguments),
        fns = clientList[key];

      if (!fns || fns.length === 0) {
        return false;
      }

      for (let i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
      }
    };

  return {
    on,
    emit
  }
})();

let header = (function() {
  Event.on('loginSucc', function(data) {
    header.setAvatar(data.avater);
  });

  return {
    setAvatar(data) {
      console.log('设置header模块的头像');
    }
  }
})();

let address = (function() {
  Event.on('loginSucc', function(obj) {
    address.refresh(obj);
  });

  return {
    refresh(obj) {
      console.log('刷新收货地址列表');
    }
  }
})();


$.ajax('http://xx.com?login', function(data) {
  Event.emit('loginSucc', data);
});
