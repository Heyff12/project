require(["../require-config"], function() {
    require(["zepto", "iosselect"], function($, iosselect) {
        $(function() {
            // var bank_ajax = [
            //     { 'value': '工商银行' },
            //     { 'value': '农业银行' },
            //     { 'value': '建设银行' },
            //     { 'value': '中国银行' },
            //     { 'value': '交通银行' },
            //     { 'value': '浦发银行' },
            //     { 'value': '上海银行' },
            //     { 'value': '汇丰银行' },
            //     { 'value': '光大银行' },
            //     { 'value': '招商银行' },
            //     { 'value': '中信银行' },
            //     { 'value': '民生银行' },
            //     { 'value': '平安银行' },
            //     { 'value': '华夏银行' },
            //     { 'value': '广发银行' },
            //     { 'value': '北京银行' }
            // ];
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
            //用户中心--进入普通用户界面
            $(".js_center").get(0) &&
                (function() {
                    //执行获取保单记录
                    getTable();
                })();

            //用户中心--点击修改-银行卡号
            // $(".js_mend").on("click", function() {
            //     $(".js_bank")
            //         .removeAttr("readonly")
            //         .focus();
            //     $(this).hide();
            //     $(".js_sure").show();
            // });
            $(".js_mendbank").on("click", function() {
                var bank = $('.js_bankval').text();
                var id = $('.js_bankval').attr('data-id');
                var card = $('.js_cardval').text();
                $(".js_bank").val(bank).attr('data-bank', id);
                $(".js_card").val(card);
                $("#alert_alert").show();
                $(".zheceng").show();
            });
            //确定提交
            $(".js_sure").on("click", function() {
                testNum(".js_card");
                var error_len = $(".red_border").length;
                if (error_len > 0) {
                    return false;
                }
                var card = $(".js_card").val();
                var bank = $(".js_bank").val();
                //提交请求
                //关闭弹框
                $(".alert_con").hide();
                $(".zheceng").hide();
                //清空id
                $(".js_card").val("");
            });
            //关闭弹框
            $(".js_alert_con_close").on("click", function() {
                $(".alert_con").hide();
                $("#alert_tip .alert_con_br").html();
                $(".zheceng").hide();
            });
            //用户中心--点击确定-银行卡号
            // $(".js_sure").on("click", function() {
            //     $(".js_bank").attr("readonly", "readonly");
            //     $(this).hide();
            //     $(".js_mend").show();
            // });
            //用户中心--点击修改密码
            $(".js_verify").on("click", function() {
                var name = $(".js_name").html();
                window.location.href = "/wapmanage/html/mendpass.html?name=" + name;
            });



            //获取报单记录信息
            function getTable() {
                //发送加载请求——
                //请求成功后执行
                var new_list =
                    '<ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>张三丰</li><li>￥2000</li></ul><ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>邓三超</li><li>￥2000</li></ul>';
                $(".js_tablelist").append(new_list);
            }



            //收支明细---进入收支明细页面
            $(".js_payment").get(0) &&
                (function() {
                    //执行获取保单记录
                    getPayment();
                })();

            //收支明细--点击加载更多
            $(".js_more_payment").on("click", function() {
                //发送加载请求——
                //请求成功后执行
                var new_list =
                    '<ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul>';
                $(".js_tablelist").append(new_list);
            });

            //获取收支明细信息
            function getPayment() {
                //发送加载请求——
                //请求成功后执行
                var new_list =
                    '<ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul>';
                $(".js_tablelist").append(new_list);
            }
        });
    });
});
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