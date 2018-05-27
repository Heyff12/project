require(["../require-config"], function() {
    require(["zepto"], function($) {
        $(function() {

            //获取信息
            getTeam();

            //获取收支明细信息
            function getTeam() {
                //发送加载请求——
                //请求成功后执行
                var new_list =
                    '<ul class="tableTr three"><li>张三丰</li><li>15896589658</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>谭维维</li><li>14763212236</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>张三丰</li><li>15896589658</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>谭维维</li><li>14763212236</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>张三丰</li><li>15896589658</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>谭维维</li><li>14763212236</li><li>2018-05-12</li></ul>';
                $(".js_tablelist").append(new_list);
            }
        });
    });
});