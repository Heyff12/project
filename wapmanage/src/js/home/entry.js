require(["../require-config"], function() {
    require(["zepto", "alert_word"], function ($, alert_word) {
    $(function() {
      //获取银行卡号
      getBankNum();
        //插入提示插件
        alert_word.toast_data_short("body", "");
      //登录提交
        $(".js_sure").on("click", function () {
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
