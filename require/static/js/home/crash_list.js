'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            $('.js_more').on('click', function () {
                var new_list = '<li><span class="tel">144××××7777</span><span class="name">-200</span><span class="status">进行中</span></li>';
                $('.js_car_ul').append(new_list);
            });
        });
    });
});