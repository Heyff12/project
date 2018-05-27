require(["../require-config"], function() {
    require(["zepto", "alert_word", "iosselect"], function($, alert_word, iosselect) {
        $(function() {
            var bank_ajax = [
                { 'id': '10001', 'value': '工商银行' },
                { 'id': '10002', 'value': '农业银行' },
                { 'id': '10003', 'value': '建设银行' },
                { 'id': '10004', 'value': '中国银行' },
                { 'id': '10005', 'value': '交通银行' },
                { 'id': '10006', 'value': '浦发银行' },
                { 'id': '10007', 'value': '上海银行' },
                { 'id': '10008', 'value': '汇丰银行' },
                { 'id': '10009', 'value': '光大银行' },
                { 'id': '10010', 'value': '招商银行' },
                { 'id': '10011', 'value': '中信银行' },
                { 'id': '10012', 'value': '民生银行' },
                { 'id': '10013', 'value': '平安银行' },
                { 'id': '10014', 'value': '华夏银行' },
                { 'id': '10015', 'value': '广发银行' },
                { 'id': '10016', 'value': '北京银行' }
            ];
            //点击银行
            $('.js_bank').on('click', function() {
                var showDom = document.querySelector('.js_bank');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [bank_ajax], {
                    container: '.ios_select_container',
                    title: '选择所属银行',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_bank').val(bank_data.value);
                    }
                });
            });
            //获取银行卡号
            getBankNum();
            //插入提示插件
            alert_word.toast_data_short("body", "");
            //登录提交
            $(".js_sure").on("click", function() {
                //验证
                testNull(".js_name");
                testTel(".js_tel");
                testTel(".js_telR");
                testTel(".js_telS");
                testNull(".js_bank");
                testNum(".js_card");
                var error_len = $(".red_border").length;
                if (error_len > 0) {
                    return false;
                }
                var grade = $("input[name='grade']:checked").val();
                var name = $(".js_name").val();
                var tel = $(".js_tel").val();
                var telR = $(".js_telR").val();
                var telS = $(".js_telS").val();
                var bank = $(".js_bank").val();
                var card = $(".js_card").val();

                //提交数据
                alert_word.alert_word_show_short("报单成功");

            });
            //获取银行卡号信息
            function getBankNum() {
                //请求银行卡号
                var card = "1234444444444444";
                if (card) {
                    $(".js_card")
                        .val(card)
                        .attr("readonly", "readonly");
                } else {
                    $(".js_card")
                        .val("")
                        .removeAttr("readonly");
                }
            }

            //点击校验
            $('.js_get_entycode').on('click', function() { //验证
                testTel(".js_tel");
                var error_len = $(".red_border").length;
                if (error_len > 0) {
                    return false;
                }
                var tel = $(".js_tel").val();
                $('.js_get_entycode').hide();
                $('.js_show_entycode').show();
                timedCount();
                //成功后--可以继续填写信息
                $('.js_nextinput').removeAttr('readonly');
            });
            //倒计时不可点击
            $('.js_show_entycode').on('click', function() {
                $('#alert_tip').show();
                $('#alert_tip .alert_con_br').html("一分钟后再次获取！");
                $('.zheceng').show();
            });
        });
    });
});
//验证手机号
function testTel(id) {
    var val = $(id).val();
    var val_exp = /^1[0-9]{10}$/;
    if (!val_exp.test(val)) {
        $(id)
            .parents("dl")
            .addClass("red_border");
    } else {
        $(id)
            .parents("dl")
            .removeClass("red_border");
    }
}
//验证非空
function testNull(id) {
    var val = $(id).val();
    var val_exp = /^[\S\s]{1,80}$/;
    if (!val_exp.test(val)) {
        $(id)
            .parents("dl")
            .addClass("red_border");
    } else {
        $(id)
            .parents("dl")
            .removeClass("red_border");
    }
}
//验证银行卡号
function testNum(id) {
    var val = $(id).val();
    var val_exp = /^[\d]{10,30}$/;
    if (!val_exp.test(val)) {
        $(id)
            .parents("dl")
            .addClass("red_border");
    } else {
        $(id)
            .parents("dl")
            .removeClass("red_border");
    }
}

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