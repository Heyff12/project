require(["../require-config"], function() {
  require(["zepto"], function($) {
    $(function() {
        //执行获取保单记录
      getTable();
      //点击修改
      $(".js_mend").on("click", function() {
        $(".js_bank")
          .removeAttr("readonly")
          .focus();
        $(this).hide();
        $(".js_sure").show();
      });
      //点击确定
      $(".js_sure").on("click", function() {
        $(".js_bank").attr("readonly", "readonly");
        $(this).hide();
        $(".js_mend").show();
      });
      //点击查看收支明细
      $(".js_goList").on("click", function() {
        window.location.href='http://www.yaya12.com'
      });
      function getTable(){
          //发送加载请求——
          //请求成功后执行
          var new_list = '<ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>张三丰</li><li>￥2000</li></ul><ul class="tableTr"><li>2018-05-12</li><li>张三</li><li>邓三超</li><li>￥2000</li></ul>';
          $(".js_tablelist").append(new_list);
      }
    });
  });
});
