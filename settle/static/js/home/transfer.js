'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            //获取验证码
            $('.js_get_entycode').on('click', function () {
                $('.js_get_entycode').hide();
                $('.js_show_entycode').show();
                timedCount();
                //成功后--填入信息
                $('.js_yanzhengmsg').text('用户名 15896589658');
            });
            //倒计时不可点击
            $('.js_show_entycode').on('click', function () {
                $('.alert_con').show();
                $('.alert_con .alert_con_br').html("一分钟后再次获取！");
                $('.zheceng').show();
            });
            //点击提交
            $('.js_submit').on('click', function () {
                var tel = $('.js_tel').val();
                var money = $('.js_money').val();
                $('.alert_con').show();
                $('.alert_con .alert_con_br').html('您确认将' + money + '元转入以下账户？<br/>' + tel);
                $('.zheceng').show();
            });
            //关闭弹框
            $('.js_alert_con_close').on('click', function () {
                $('.alert_con').hide();
                $('.alert_con .alert_con_br').html();
                $('.zheceng').hide();
            });
        });
    });
});
//倒计时60s
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