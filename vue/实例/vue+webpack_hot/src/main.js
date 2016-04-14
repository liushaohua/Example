import Point from './sess/Point.js';
let s = new Point(1, 23);
console.log(s);
let vm = new Vue({
	  el: '#app',
	  data: {
		message: 'Hello Vue.js!',
		raw_html: '<div>'+ s +'</div>',
		todos: [
			{'text':'啦啦1','value':'1'},
			{'text': '啦啦2','value':'2'}
		],
		isUser: false,
		alert: function() {
			alert('我是2');
		}
	  }
	});
	
	setTimeout(function () {
		vm.todos = [
			{'text':'woainill','value':'123434'},
			{'text': '啦啦ggg2','value':'555'}
		];
	},3000);
	
	
	vm.$watch('todos', function (newVal, oldVal) {
	  console.log('数据改变了33333ll');
	});
	
	$('.page span').click(function () {
		var $this = $(this),
			index = $(this).index();
			
		$this.addClass('active').siblings().removeClass('active');	
		vm.todos = [
			{'text':'woainill' + index,'value':'123434'},
			{'text': '啦啦ggg2' + index,'value':'555'}
		];
		vm.isUser = true;
	});