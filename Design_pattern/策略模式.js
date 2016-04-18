/*
*  策略模式
*  通过使用策略模式重构代码，消除了原程序中大片的条件分支语句，易于理解和扩展
*/
var strategies = {
    'S': function (salary) {
        return salary * 4;
    },
    'A': function (salary) {
        return salary * 3;
    },
    'B': function (salary) {
        return salary * 2;
    }
};

var calculateBonus = function (level, salary) {
    return strategies[level](salary);
}

calculateBonus('S',2000);

/*
*   可扩展的校验规则
*
*
*/

/*****策略对象*****/
var strategies = {
    isNonEmpty: function (value, errorMsg) {
        if (value == '') {
            return errorMsg;
        }
    },
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    isMobile: function (value, errorMsg) {
        if (!/(ˆ1[3|5|8][0-9]{9})$/.test(value)) {
            return errorMsg;
        }
    }
};

/******Validator*******/
var Validator = function () {
    this.cache = [];
}

Validator.prototype.add = function (dom, rules) {
    var self = this;

    for (var i = 0, rule; rule = rules[i++]) {
        (function () {
            var strategyAry = rule.strategy.split(':');
            var errorMsg = rule.errorMsg;

            self.cache.push(function () {
                var strategy = strategyAry.shift();
                strategyAry.unshift(dom.value);
                strategyAry.push(errorMsg);
                return strategies[strategy].apply(dom, strategyAry);
            });
        } (rule));
    }
}

Validator.prototype.start = function () {
    for (var i = 0; validatorFunc; validatorFunc = this.cache[i++];) {
        var errorMsg = validatorFunc();
        if (errorMsg) {
            return errorMsg;
        }
    }
};

/*******客户端调用*********/
var registerForm = document.getElementById('registerForm');

var validatorFunc = function() {
    var Validator = new Validator();

    Validator.add(registerForm.userName,[{
        strategy: 'isNonEmpty',
        errorMsg: ‘用户名不能为空’
    },{
        strategy: 'minLength:6',
        'errorMsg': '用户名不能小于6位'
    }]);

    Validator.add(registerForm.phone,[{
        strategy: 'isMobile',
        errorMsg: ‘手机号格式不正确’
    }]);

    var errorMsg = Validator.start();
    return errorMsg;
}

registerForm.onsubmit = function () {
    var errorMsg = validatorFunc();

    if (errorMsg) {
        alert(errorMsg);
        return false;
    }
}
