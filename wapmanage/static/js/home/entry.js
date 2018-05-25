"use strict";

require(["../require-config"], function () {
  require(["zepto", "alert_word"], function ($, alert_word) {
    $(function () {
      getBankNum();

      alert_word.toast_data_short("body", "");

      $(".js_sure").on("click", function () {
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

        alert_word.alert_word_show_short("报单成功");
      });

      function getBankNum() {
        var card = "1234444444444444";
        if (card) {
          $(".js_card").val(card).attr("readonly", "readonly");
        } else {
          $(".js_card").val("").removeAttr("readonly");
        }
      }
    });
  });
});

function testTel(id) {
  var val = $(id).val();
  var val_exp = /^1[0-9]{10}$/;
  if (!val_exp.test(val)) {
    $(id).parents("dl").addClass("red_border");
  } else {
    $(id).parents("dl").removeClass("red_border");
  }
}

function testNull(id) {
  var val = $(id).val();
  var val_exp = /^[\S\s]{1,80}$/;
  if (!val_exp.test(val)) {
    $(id).parents("dl").addClass("red_border");
  } else {
    $(id).parents("dl").removeClass("red_border");
  }
}

function testNum(id) {
  var val = $(id).val();
  var val_exp = /^[\d]{10,30}$/;
  if (!val_exp.test(val)) {
    $(id).parents("dl").addClass("red_border");
  } else {
    $(id).parents("dl").removeClass("red_border");
  }
}