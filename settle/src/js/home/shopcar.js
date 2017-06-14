require(['../require-config'], function() {
    require(["zepto"], function($) {
        $(function() {
            //购物车------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            get_prize();
            //商品数量增加----------------------------------------------------------------------
            $('.js_add').on('click', function() {
                var buy_price = $(this).parents('dl').find('.js_endprice').text() - 0; //当前购买价格
                var $num_now = $(this).parents('dl'); //当前父元素
                var $all_price = $num_now.find('.js_all_price'); //当前总价元素
                var all_price_text = $all_price.text() - 0; //当前总价元素
                var first_num = $num_now.find('.js_num').text() - 0; //当前数量
                $num_now.find('.js_num').text(first_num + 1); //增加后的数量赋值
                var now_num = $num_now.find('.js_num').text() - 0; //增加后的数量
                var all_price = buy_price * now_num - 0; //增加后的总价
                $all_price.text(all_price.toFixed(2)); //增加后的总价赋值
                //修改总价格
                var pre_all_price = $('.js_all_money').text() - 0;
                var now_all_price = (pre_all_price - all_price_text + all_price).toFixed(2);
                $('.js_all_money').text(now_all_price);
            });
            //商品数量减少
            $('.js_min').on('click', function() {
                var buy_price = $(this).parents('dl').find('.js_endprice').text() - 0; //当前购买价格
                var $num_now = $(this).parents('dl'); //当前父元素
                var $all_price = $num_now.find('.js_all_price'); //当前总价元素
                var all_price_text = $all_price.text() - 0; //当前总价元素
                var first_num = $num_now.find('.js_num').text() - 0; //当前数量
                if (first_num == 0) {
                    $num_now.find('.js_num').text(0); //增加后的数量赋值
                } else {
                    $num_now.find('.js_num').text(first_num - 1); //增加后的数量赋值
                }
                var now_num = $num_now.find('.js_num').text() - 0; //增加后的数量
                var all_price = buy_price * now_num; //增加后的总价
                $all_price.text(all_price.toFixed(2)); //增加后的总价赋值
                //修改总价格
                var pre_all_price = $('.js_all_money').text() - 0;
                var now_all_price = (pre_all_price - all_price_text + all_price).toFixed(2);
                $('.js_all_money').text(now_all_price);
            });
            //删除
            $('.js_del_order').on('click', function() {
                var all_price_text = $(this).parents('dl').find('.js_all_price').text() - 0;
                //修改总价格
                var pre_all_price = $('.js_all_money').text() - 0;
                var now_all_price = (pre_all_price - all_price_text).toFixed(2);
                $('.js_all_money').text(now_all_price);
                //删除当前元素
                $(this).parents('.order_list_d').remove();
            });
            //获取总价格----------------------------------------------------------------------
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
})
