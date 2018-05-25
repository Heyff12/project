require(["../require-config"], function() {
  require(["zepto"], function($) {
    $(function() {
      //登录提交
      $(".js_submit").on("click", function() {
        //验证
        testName(".js_name");
        testPass(".js_password");
        var error_len = $(".red_border").length;
        if (error_len > 0) {
          return false;
        }
        var name = $(".js_name").val();
        var password = $(".js_password").val();

        //提交数据

        //跳转页面
        window.location.href = "/wapmanage/html/center.html";
      });
      //修改密码页面初次判断是否有name参数
      $(".js_mendPass").get(0) && (function() {
        var ifLogin = getParams('name');
        console.log(ifLogin);
        if (ifLogin){
          let name = decodeURI(ifLogin);
          $(".js_name")
            .val(name)
            .attr("readonly", "readonly");
        }
      })();

      //修改密码提交
      $(".js_mend").on("click", function() {
        var Newpassword = $(".js_NewPass").val();
        //验证
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

        //提交数据

        //跳转页面
        window.location.href = "/wapmanage/html/center.html";
      });
    });
  });
});
//验证手机号
function testName(id) {
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
//验证手机号
function testPass(id) {
  var val = $(id).val();
  var val_exp = /^[\S\s]{6,20}$/;
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
//是否相同
function testEqual(id, pass) {
  var val = $(id).val();
  if (val != pass) {
    $(id)
      .parents("dl")
      .addClass("red_border");
  } else {
    $(id)
      .parents("dl")
      .removeClass("red_border");
  }
}

//获取连接当中的指定 字段
function getParams(key) {
  let url = location.href;
  let key_len = url.split("?");
  if (key_len.length <= 1) {
    return false;
  }
  let params = key_len[1];
  let params_arr = params.split("&");
  let key_val;
  params_arr.forEach(item => {
    let val = item.split("=");
    if (val[0] == key) {
      key_val = val[1];
      return false;
    }
  });
  return key_val;
}
