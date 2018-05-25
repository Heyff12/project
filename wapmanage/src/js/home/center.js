require(["../require-config"], function() {
  require(["zepto"], function($) {
    $(function() {
      //用户中心--进入普通用户界面
      $(".js_center").get(0) &&
        (function() {
          //执行获取保单记录
          getTable();
        })();

      //用户中心--点击修改-银行卡号
      $(".js_mend").on("click", function() {
        $(".js_bank")
          .removeAttr("readonly")
          .focus();
        $(this).hide();
        $(".js_sure").show();
      });
      //用户中心--点击确定-银行卡号
      $(".js_sure").on("click", function() {
        $(".js_bank").attr("readonly", "readonly");
        $(this).hide();
        $(".js_mend").show();
      });
      //用户中心--点击修改密码
      $(".js_verify").on("click", function() {
        var name = $(".js_name").html();
        window.location.href = "/wapmanage/html/mendpass.html?name=" + name;
      });

      //报单记录---第一次进入
      $(".js_entryrecord").get(0) &&
        (function() {
          //执行获取保单记录
          getTable();
        })();

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
