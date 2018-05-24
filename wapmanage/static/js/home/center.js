"use strict";

require(["../require-config"], function () {
  require(["zepto"], function ($) {
    $(function () {
      getTable();

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

      $(".js_goList").on("click", function () {
        window.location.href = 'http://www.yaya12.com';
      });

      $(".js_verify").on("click", function () {
        var name = $(".js_name").html();
        window.location.href = "/wapmanage/html/mendpass.html?name=" + name;
      });
      function getTable() {
        var new_list = '<ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>张三丰</li><li>￥2000</li></ul><ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>邓三超</li><li>￥2000</li></ul>';
        $(".js_tablelist").append(new_list);
      }
    });
  });
});