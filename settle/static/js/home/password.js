'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            $('.js_get_entycode').on('click', function () {
                $('.js_get_entycode').hide();
                $('.js_show_entycode').show();
                timedCount();
            });

            $('.js_show_entycode').on('click', function () {
                $('.alert_con').show();
                $('.alert_con .alert_con_br').html("一分钟后再次获取！");
                $('.zheceng').show();
            });

            $('.js_submit').on('click', function () {
                code_test('.js_code');
                pass_test('.js_pass');
                pass_test('.js_pass_re');
                var pass = $('.js_pass').val();
                var re_pass = $('.js_pass_re').val();
                if (pass !== re_pass) {
                    $('.js_pass_re').parents('dl').addClass('red_border');
                } else {
                    $('.js_pass_re').parents('dl').removeClass('red_border');
                }
                var red_num = $('.red_border').length;
                if (red_num > 0) {
                    return false;
                } else {}
            });

            function pass_test(id) {
                var val = $(id).val();
                var val_exp = /^[0-9a-zA-Z]{6,22}$/;
                if (!val_exp.test(val)) {
                    $(id).parents('dl').addClass('red_border');
                } else {
                    $(id).parents('dl').removeClass('red_border');
                }
            }

            function code_test(id) {
                var val = $(id).val();
                var val_exp = /^[0-9]{6}$/;
                if (!val_exp.test(val)) {
                    $(id).parents('dl').addClass('red_border');
                } else {
                    $(id).parents('dl').removeClass('red_border');
                }
            }

            $('.js_alert_con_close').on('click', function () {
                $('.alert_con').hide();
                $('.alert_con .alert_con_br').html();
                $('.zheceng').hide();
            });
        });
    });
});

function timedCount() {
    var time0 = $('.js_show_entycode i').text();
    $('.js_show_entycode i').text(time0 - 1);
    var t = setTimeout("timedCount()", 1000);
    if (time0 == 0) {
        clearTimeout(t);
        $('.js_get_entycode').show();
        $('.js_show_entycode i').text(61);
        $('.js_show_entycode').hide();
    }
}