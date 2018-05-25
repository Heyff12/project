"use strict";

require(["../require-config"], function () {
  require(["zepto"], function ($) {
    $(function () {
      $(".js_center").get(0) && function () {
        getTable();
      }();

      $(".js_mend").on("click", function () {
        $(".js_bank").removeAttr("readonly").focus();
        $(this).hide();
        $(".js_sure").show();
      });

      $(".js_sure").on("click", function () {
        $(".js_bank").attr("readonly", "readonly");
        $(this).hide();
        $(".js_mend").show();
      });

      $(".js_verify").on("click", function () {
        var name = $(".js_name").html();
        window.location.href = "/wapmanage/html/mendpass.html?name=" + name;
      });

      $(".js_entryrecord").get(0) && function () {
        getTable();
      }();

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