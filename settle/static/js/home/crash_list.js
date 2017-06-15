'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            //点击加载更多
            $('.js_more').on('click', function () {
                //发送加载请求——
                //请求成功后执行
                var new_list = '<li><span class="tel">144××××7777</span><span class="name">-200</span><span class="status">进行中</span></li>';
                $('.js_car_ul').append(new_list);
            });
        });
    });
});