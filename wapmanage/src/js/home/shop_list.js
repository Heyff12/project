require(['../require-config'], function() {
    require(["zepto"], function($) {
        $(function() {
            //点击切换
            $('.js_fenlei').on('click', 'li', function() {
                var li_index = $(this).index();
                $(this).addClass('tab').siblings('li').removeClass('tab');
                $('.js_shop_body_r ul').html('');
            });
            $(window).scroll(function() {
                var i = document.documentElement.scrollTop || document.body.scrollTop;
                var i_t = 105 - i;
                if (i_t >= 0) {
                    $('.js_shop_body_l').css({ 'top': i_t });
                } else {
                    $('.js_shop_body_l').css({ 'top': 0 });
                }
            });
        })
    })
})
