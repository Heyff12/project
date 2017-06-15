'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            //点击加载更多
            $('.js_more').on('click', function () {
                //发送加载请求——
                //请求成功后执行
                var new_list = '<li><dl><dt><img src="http://img3.imgtn.bdimg.com/it/u=3749875149,3961380760&fm=23&gp=0.jpg"></dt><dd><span class="name">小草</span><span class="tel">155****3333</span><span class="price orange">+￥240.0</span></dd><dd class="grey">2017-5-7 17:13:45</dd></dl></li>';
                $('.js_list').append(new_list);
            });
        });
    });
});