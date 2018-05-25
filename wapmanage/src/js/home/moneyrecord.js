require(["../require-config"], function() {
  require(["zepto"], function($) {
    $(function() {
      //执行获取保单记录
      getTable();

      //获取报单记录信息
      function getTable() {
        //发送加载请求——
        //请求成功后执行
        var new_list =
          '<ul class="tableTr" data-id="111"><li>张三丰</li><li class="blue">￥12000</li><li class="green">￥6000</li><li onclick="goCrash(this)">提现</li></ul><ul class="tableTr" data-id="222"><li>张三丰</li><li class="blue">￥12000</li><li class="green">￥6000</li><li onclick="goCrash(this)">提现</li></ul>';
        $(".js_tablelist").append(new_list);
      }

      //提交
      $(".js_sure").on("click", function() {
          var crash = $(".js_crash").val();
          var id = $(".js_id").val();
          console.log(id);
          //提交请求
          //关闭弹框
        $(".alert_con").hide();
        $(".zheceng").hide();
        //清空id
          $(".js_id").val('');
      });
      //关闭弹框
      $(".js_alert_con_close").on("click", function() {
        $(".alert_con").hide();
        $("#alert_tip .alert_con_br").html();
        $(".zheceng").hide();
      });
    });
  });
});
function goCrash(obj) {
  $(".js_id")=obj.parents('ul').attr('data-id');
  $("#alert_alert").show();
  $(".zheceng").show();
}
