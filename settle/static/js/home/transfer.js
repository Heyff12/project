'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            $('.js_get_entycode').on('click', function () {
                $('.js_get_entycode').hide();
                $('.js_show_entycode').show();
                timedCount();

                $('.js_yanzhengmsg').text('用户名 15896589658');
            });

            $('.js_show_entycode').on('click', function () {
                $('#alert_tip').show();
                $('#alert_tip .alert_con_br').html("一分钟后再次获取！");
                $('.zheceng').show();
            });

            $('.js_submit').on('click', function () {
                var tel = $('.js_tel').val();
                var money = $('.js_money').val();
                $('#alert_alert').show();
                $('#alert_alert .alert_con_br').html('您确认将' + money + '元转入以下账户？<br/>' + tel);
                $('.zheceng').show();
            });

            $('.js_alert_con_close').on('click', function () {
                $('.alert_con').hide();
                $('.alert_con .alert_con_br').html();
                $('.zheceng').hide();
            });

            $('.js_transfer').on('click', function () {
                window.location.href = 'http://www.yaya12.com';
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