require(['../require-config'], function() {
    require(["zepto"], function($) {
        $(function() {
        	$('.js_min').on('click',function(){
        		var num=$('.js_num').text();
        		var now_num;
        		if(num<=0){
					now_num=0;
        		}else{
        			now_num=--num;
        		}
        		$('.js_num').text(now_num);  
        	});
        	$('.js_add').on('click',function(){
        		var num=$('.js_num').text();
        		$('.js_num').text(++num);        		
        	});
        });
    });
})
