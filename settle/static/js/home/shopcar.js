'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            get_prize();

            $('.js_add').on('click', function () {
                var buy_price = $(this).parents('dl').find('.js_endprice').text() - 0;
                var $num_now = $(this).parents('dl');
                var $all_price = $num_now.find('.js_all_price');
                var all_price_text = $all_price.text() - 0;
                var first_num = $num_now.find('.js_num').text() - 0;
                $num_now.find('.js_num').text(first_num + 1);
                var now_num = $num_now.find('.js_num').text() - 0;
                var all_price = buy_price * now_num - 0;
                $all_price.text(all_price.toFixed(2));
                var pre_all_price = $('.js_all_money').text() - 0;
                var now_all_price = (pre_all_price - all_price_text + all_price).toFixed(2);
                $('.js_all_money').text(now_all_price);
            });

            $('.js_min').on('click', function () {
                var buy_price = $(this).parents('dl').find('.js_endprice').text() - 0;
                var $num_now = $(this).parents('dl');
                var $all_price = $num_now.find('.js_all_price');
                var all_price_text = $all_price.text() - 0;
                var first_num = $num_now.find('.js_num').text() - 0;
                if (first_num == 0) {
                    $num_now.find('.js_num').text(0);
                } else {
                    $num_now.find('.js_num').text(first_num - 1);
                }
                var now_num = $num_now.find('.js_num').text() - 0;
                var all_price = buy_price * now_num;
                $all_price.text(all_price.toFixed(2));
                var pre_all_price = $('.js_all_money').text() - 0;
                var now_all_price = (pre_all_price - all_price_text + all_price).toFixed(2);
                $('.js_all_money').text(now_all_price);
            });

            $('.js_del_order').on('click', function () {
                var all_price_text = $(this).parents('dl').find('.js_all_price').text() - 0;

                var pre_all_price = $('.js_all_money').text() - 0;
                var now_all_price = (pre_all_price - all_price_text).toFixed(2);
                $('.js_all_money').text(now_all_price);

                $(this).parents('.order_list_d').remove();
            });

            function get_prize() {
                var list_lenth = $('.order_list_d').length;
                var all_price = 0;
                for (var i = 0; i <= list_lenth; i++) {
                    var now_price = $('.order_list_d').eq(i).find('.js_all_price').text();
                    all_price = (all_price - 0 + (now_price - 0)).toFixed(2);
                }
                $('.js_all_money').text(all_price);
            }
        });
    });
});