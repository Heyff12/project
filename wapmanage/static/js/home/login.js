"use strict";

require(["../require-config"], function () {
  require(["zepto"], function ($) {
    $(function () {
      $(".js_submit").on("click", function () {
        testName(".js_name");
        testPass(".js_password");
        var error_len = $(".red_border").length;
        if (error_len > 0) {
          return false;
        }
        var name = $(".js_name").val();
        var password = $(".js_password").val();

        window.location.href = "/wapmanage/html/center.html";
      });

      $(".js_mendPass").get(0) && ~function () {
        var ifLogin = getParams('name');
        if (ifLogin) {
          $(".js_name").val(ifLogin).attr('readonly', 'readonly');
        }
      };

      $(".js_mend").on("click", function () {
        var Newpassword = $(".js_NewPass").val();

        testName(".js_name");
        testPass(".js_password");
        testPass(".js_NewPass");
        testEqual(".js_NewPass2", Newpassword);
        var error_len = $(".red_border").length;
        if (error_len > 0) {
          return false;
        }
        var name = $(".js_name").val();
        var password = $(".js_password").val();

        window.location.href = "/wapmanage/html/center.html";
      });
    });
  });
});

function testName(id) {
  var val = $(id).val();
  var val_exp = /^1[0-9]{10}$/;
  if (!val_exp.test(val)) {
    $(id).parents("dl").addClass("red_border");
  } else {
    $(id).parents("dl").removeClass("red_border");
  }
}

function testPass(id) {
  var val = $(id).val();
  var val_exp = /^[\S\s]{6,20}$/;
  if (!val_exp.test(val)) {
    $(id).parents("dl").addClass("red_border");
  } else {
    $(id).parents("dl").removeClass("red_border");
  }
}

function testEqual(id, pass) {
  var val = $(id).val();
  if (val != pass) {
    $(id).parents("dl").addClass("red_border");
  } else {
    $(id).parents("dl").removeClass("red_border");
  }
}

function getParams(key) {
  var url = location.href;
  var key_len = url.split("?");
  if (key_len.length <= 1) {
    return false;
  }
  var params = key_len[1];
  var params_arr = params.split("&");
  var key_val = void 0;
  params_arr.forEach(function (item) {
    var val = item.split("=");
    if (val[0] == key) {
      key_val = val[1];
      return false;
    }
  });
  return key_val;
}