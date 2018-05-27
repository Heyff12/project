"use strict";

require(["../require-config"], function () {
    require(["zepto", "iosselect"], function ($, iosselect) {
        $(function () {
            var bank_ajax = [{ 'value': '工商银行' }, { 'value': '农业银行' }, { 'value': '建设银行' }, { 'value': '中国银行' }, { 'value': '交通银行' }, { 'value': '浦发银行' }, { 'value': '上海银行' }, { 'value': '汇丰银行' }, { 'value': '光大银行' }, { 'value': '招商银行' }, { 'value': '中信银行' }, { 'value': '民生银行' }, { 'value': '平安银行' }, { 'value': '华夏银行' }, { 'value': '广发银行' }, { 'value': '北京银行' }];

            $('.js_bank').on('click', function () {
                var showDom = document.querySelector('.js_bank');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [bank_ajax], {
                    container: '.ios_select_container',
                    title: '选择所属银行',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function callback(bank_data) {
                        showDom.dataset['bank'] = bank_data.value;
                        showDom.value = bank_data.value;
                        $('.js_bank').val(bank_data.value);
                    }
                });
            });

            $(".js_center").get(0) && function () {
                getTable();
            }();

            $(".js_mendbank").on("click", function () {
                var bank = $('.js_bankval').text();
                var card = $('.js_cardval').text();
                $(".js_bank").val(bank).attr('data-bank', bank);
                $(".js_card").val(card);
                $("#alert_alert").show();
                $(".zheceng").show();
            });

            $(".js_sure").on("click", function () {
                testNum(".js_card");
                var error_len = $(".red_border").length;
                if (error_len > 0) {
                    return false;
                }
                var card = $(".js_card").val();
                var bank = $(".js_bank").val();

                $(".alert_con").hide();
                $(".zheceng").hide();

                $(".js_card").val("");
            });

            $(".js_alert_con_close").on("click", function () {
                $(".alert_con").hide();
                $("#alert_tip .alert_con_br").html();
                $(".zheceng").hide();
            });

            $(".js_verify").on("click", function () {
                var name = $(".js_name").html();
                window.location.href = "/wapmanage/html/mendpass.html?name=" + name;
            });

            function getTable() {
                var new_list = '<ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>张三丰</li><li>￥2000</li></ul><ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>邓三超</li><li>￥2000</li></ul>';
                $(".js_tablelist").append(new_list);
            }

            $(".js_payment").get(0) && function () {
                getPayment();
            }();

            $(".js_more_payment").on("click", function () {
                var new_list = '<ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul>';
                $(".js_tablelist").append(new_list);
            });

            function getPayment() {
                var new_list = '<ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul>';
                $(".js_tablelist").append(new_list);
            }
        });
    });
});

function testNum(id) {
    var val = $(id).val();
    var val_exp = /^[\d]{10,30}$/;
    if (!val_exp.test(val)) {
        $(id).parents("dl").addClass("red_border");
    } else {
        $(id).parents("dl").removeClass("red_border");
    }
}