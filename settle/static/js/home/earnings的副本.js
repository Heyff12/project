'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            //点击切换
            $('.js_qiehuan_menu').on('click', 'li', function () {
                var li_index = $(this).index();
                $(this).addClass('tab').siblings('li').removeClass('tab');
                //ajax请求数据替换
                $('.js_list').html();
            });
            //点击加载更多
            $('.js_more').on('click', function () {
                //发送加载请求——
                //请求成功后执行
                var new_list = '<li><dl><dd><span class="tel">155****3333</span><span class="name">小草</span><span class="price orange">+￥240.0</span><span class="price2 orange">行政费-￥20.0</span></dd><dd class="grey">2017-5-7 17:13:45</dd></dl></li>';
                $('.js_list').append(new_list);
            });
        });
    });
});