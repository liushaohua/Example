'use strict';

$('.getOut').click(function () {
    $.ajax({
    	 type: 'get',
    	 url: 'home/index/out' ,
    	 success: function () {
    	        window.location.reload()
    	 }
    });
});
