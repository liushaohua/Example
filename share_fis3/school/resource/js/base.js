var DEBUG;

var base = {
	getURLParam: function(key) {
        if (typeof key == 'undefined') {
            return '';
        }

        var raw = location.search.substr(1).split('&'),
            param = [],
            tmp = [];

        for (var i = 0, l = raw.length; i < l; i++) {
            tmp = raw[i].split('=');
            param[tmp[0]] = tmp[1];
        }

        if (typeof param[key] != 'undefined') {
            return param[key];
        } else {
            return '';
        }
    },
    // 去掉所有的html标记
    removeHtmlTag: function (str) {
        return str.replace(/<[^>]+>/g,"");
    },
    // 格式化时间 返回格式如2015:12:12 10:52
    formatDate: function(num) {
		function d(n) { return n<10?'0'+n:''+n; }
		var oDate = new Date(Number(num));
		return oDate.getFullYear()
			+'-'+ d(oDate.getMonth()+1)
			+'-'+ d(oDate.getDate())
			+' '+ d(oDate.getHours())
			+':'+ d(oDate.getMinutes())
			+':'+ d(oDate.getSeconds());
    },

    // 格式化时间  返回格式： 9月18日
    formatDateBymonths: function(num) {
        function d(n) { return n<10?'0'+n:''+n; }
        var oDate = new Date(Number(num));
        return d(oDate.getMonth()+1) +'月'+d(oDate.getDate()) + '日';
                
    },

    joinUrlParam: function(url) {
        // 有拼接url参数
        if (url.toString().indexOf('?') != -1 ) {
            return url + '&sso_id=' + base.getURLParam('sso_id') + '&token=' + base.getURLParam('token');
        }
        return url + '?sso_id=' + base.getURLParam('sso_id') + '&token=' + base.getURLParam('token');
    },

    loading: function(status) {

        if(status == false) {
            $(document).find('.spinner').remove();
            return;
        }
        var content = '<div class="spinner js_loading">'+
                    '       <div class="spinner-container container1">'+
                    '           <div class="circle1"></div>'+
                    '           <div class="circle2"></div>'+
                    '           <div class="circle3"></div>'+
                    '           <div class="circle4"></div>'+
                    '       </div>'+
                    '       <div class="spinner-container container2">'+
                    '           <div class="circle1"></div>'+
                    '           <div class="circle2"></div>'+
                    '           <div class="circle3"></div>'+
                    '           <div class="circle4"></div>'+
                    '       </div>'+
                    '       <div class="spinner-container container3">'+
                    '           <div class="circle1"></div>'+
                    '           <div class="circle2"></div>'+
                    '           <div class="circle3"></div>'+
                    '           <div class="circle4"></div>'+
                    '       </div>'+
                    '   </div>';

        $(document.body).append(content);          
    },
    // 访问真实接口
    sendAjax: function(url, param, callback, type, async) {
    	
    	var type = type || 'get';
    	var _async = true;

    	if(async === false) _async = false;

    	var realCallback = function(data) {
    		if (data.salon.status == 1) {
                callback(data.salon.result);
            } else {
                alert(data.salon.msg);
            }
    	} 

    	var sendData = {
    		url: url,
    		type: type,
    		data: param,
            cache: false,
    		dataType: "json",
    		async: _async,
    		success: realCallback
    	}

    	$.ajax(sendData);
    },
    // 获取mock数据
    _sendAjax: function(url, param, callback) {
    	callback(mockData[url].salon.result);
    }
}

