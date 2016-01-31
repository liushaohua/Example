
// 调试模式
DEBUG     = true;
SSO_ID    = base.getURLParam('sso_id') || '20009999';
TOKEN     = base.getURLParam('token')  || 'dsds6f566dfg6fg5ff';
window.UA = window.navigator.userAgent;

window.shareData = {};


(function() {
	var sendAjax = DEBUG ? base._sendAjax : base.sendAjax;

	window.homeInit = function() {

		getBanners();
		base.loading();
		// 1 移动展业  0分享沙龙
		getCourses("0");
	}
	
	
	function getCourses(typeCode) {

		var param = {
			"course_type": typeCode,
			"limit": "10",
			"page": "1",
			"token": TOKEN
		}

		sendAjax('/salon/homepage/courselist', param, function(data) {
			base.loading(false);
			data = data.list;
			if(! data.length) {
				console.log("没有数据");
				return;
			}

			data = data.slice(0, 6);
			var _html = '';
			for(var i = 0; i < data.length; i++) {
				var _class = (i%2) ? 'right': 'left';
				_html += '<div class="'+_class+'">'
					  +		'<img data-id="'+data[i].id+'" src="'+data[i].cover_small_url+'" />'
					  +		'<span>'+ data[i].title +'</span>'
					  +	 '</div>';
			}

			if(typeCode == 1) {
				$('.yidong .list').html(_html);
			} else {
				$('.jingpin .list').html(_html);
			}

		})
	}

	function getBanners() {

		var linkArr = [];
		var param   = {
			"limit": 10,
			"page": 1,
			"token": TOKEN
		}

		sendAjax('/salon/homepage/bannerlist', param, function(data) {
			data = data.list;
			var _html = '';
			for(var i = 0; i < data.length; i++) {
				if(i == 3) break;
				linkArr.push(data[i].forward_url);
				_html = '<a href="Javascript:;"><img src="'+ data[i].cover_big_url +'" /></a>';

				$('.swiper-slide').eq(i).html(_html);
			}

			var mySwiper = new Swiper ('.swiper-container', {
				loop: true,
				autoplay: 4000,
				// 切换效果
				//effect : 'coverflow',
				// 监听当前progress值
				watchSlidesProgress: true,
				// 懒惰加载
				lazyLoading : false,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				// 用户手动轮播不关闭swipe内部autoplay
				autoplayDisableOnInteraction : false,
			}) 

		});
	}
})();