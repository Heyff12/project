"use strict";

require(["../require-config"], function () {
    require(["zepto"], function ($) {
        $(function () {
            getTeam();

            function getTeam() {
                var new_list = '<ul class="tableTr three"><li>张三丰</li><li>15896589658</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>谭维维</li><li>14763212236</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>张三丰</li><li>15896589658</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>谭维维</li><li>14763212236</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>张三丰</li><li>15896589658</li><li>2018-05-12</li></ul><ul class="tableTr three"><li>谭维维</li><li>14763212236</li><li>2018-05-12</li></ul>';
                $(".js_tablelist").append(new_list);
            }
        });
    });
});