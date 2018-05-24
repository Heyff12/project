require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            //点击提交
            $('.js_submit').on('click', function () {
                var name = $(".js_name").val();
                var password = $(".js_password").val();
                //验证
                testName(".js_name");

                $('#alert_alert').show();
                $('#alert_alert .alert_con_br').html('您确认将' + money + '元转入以下账户？<br/>' + tel);
                $('.zheceng').show();
            });
            //关闭弹框
            $('.js_alert_con_close').on('click', function () {
                $('.alert_con').hide();
                $('.alert_con .alert_con_br').html();
                $('.zheceng').hide();
            });
            //点击转账确认按钮
            $('.js_transfer').on('click', function () {
                //验证校验码todo

                //提交数据

                //跳转页面
                window.location.href = 'http://www.yaya12.com';

            });
        });
    });
});
//验证手机号
function testName(id){
    var val = $(id).val();
    var val_exp = /^1[0-9]{10}$/;
    if (!val_exp.test(val)) {
        $(id).parents('dl').addClass('red_border');
    } else {
        $(id).parents('dl'.removeClass('red_border');
    }
}
