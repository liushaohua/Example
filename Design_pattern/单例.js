/* 登录弹窗
* 惰性单例
*/

let createLoginLayer = (function () {
    let div;
    return function () {
        if (!div) {
            div = document.createElement('div');
            div.innerHTML = '我是登录浮窗';
            div.style.display = 'none';
            document.body.appendChild(div);
        }

        return div;
    }
})();

document.getElementById('loginBtn').click = function () {
    let loginLayer = createLoginLayer();
    loginLayer.style.display = 'block';
}


/*
* 通用单例
*/

let getSingle = function (fn) {
    let result;
    return function () {
        return result || (result = fn.apply(this,arguments));
    }
}

let createLoginLayer = function () {
    let div = document.createElement('div');
    div.innerHTML = 'im loginWindow';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
}

let createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').click = function () {
    let loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
}

/*
*   实例 动态只增加一次点击⌚️
*
*/

let bindEvent = getSingle(function () {
    document.getElementById('div1').click = function () {
        alert(1);
    }

    return true;
});

let render = function () {
    bindEvent();
}

render();
render();
render();
