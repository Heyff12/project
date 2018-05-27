require(["../require-config"], function() {
    require(["zepto", "iosselect", "date_get", "alert_word"], function(
        $,
        iosselect,
        date_get,
        alert_word
    ) {
        $(function() {
            //插入提示插件
            alert_word.toast_data_short("body", "");

            //执行获取保单记录
            getTableMore();

            //报单记录---获取报单记录信息--
            function getTableMore() {
                //发送加载请求——
                //请求成功后执行
                var new_list =
                    '<ul class="tableTr five"><li>2018-05-12</li><li>胡红杰</li><li>张三</li><li>张三丰</li><li>￥2000</li></ul><ul class="tableTr five"><li>2018-05-12</li><li>唐晓霞</li><li>张三</li><li>邓三超</li><li>￥2000</li></ul>';
                $(".js_tablelist").append(new_list);
            }

            //点击搜索
            $(".js_search").on("click", function() {
                let stimeS = $(".js_startime").val();
                let etimeS = $(".js_endtime").val();
                let name = $('.js_name').val();
                // console.log(stimeS);
                // console.log(etimeS);
                // console.log(name);
                if (!name && !stimeS && !etimeS) {
                    alert_word.alert_word_show_short("请输入搜索条件");
                    return false;
                }
                //判断时间
                let stime = $("#startime").val();
                let etime = $("#endtime").val();
                let sHas = stime && !etime;
                let eHas = etime && !stime;
                if (!name) {
                    if (!stime || !etime) {
                        alert_word.alert_word_show_short("请选择开始时间和结束时间");
                        return false;
                    }
                } else if (sHas || eHas) {
                    alert_word.alert_word_show_short("请选择开始时间和结束时间");
                    return false;
                }
                let stimeD = new Date(stime.replace(/-/g, "/"));
                let etimeD = new Date(etime.replace(/-/g, "/"));
                // console.log(stimeD);
                // console.log(etimeD);
                // console.log(stimeD - etimeD);
                if (stimeD - etimeD > 0) {
                    alert_word.alert_word_show_short("开始时间不能大于结束时间");
                    return false;
                }

                //发送加载请求——
                //请求成功后执行
                var new_list =
                    '<ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="red">+886</li><li>招商奖</li><li>张三丰</li></ul><ul class="tableTr"><li>2018-05-12</li><li class="green">-1200</li><li>提现</li><li>——</li></ul>';
                $(".js_tablelist").html(new_list);
            });

            //点击开始时间
            $(".js_startime").on("click", function() {
                var showDom = document.querySelector(".js_startime");
                var year = showDom.dataset["year"];
                var month = showDom.dataset["month"];
                var day = showDom.dataset["day"];

                var bankSelect = new iosselect(
                    3, [date_get.yearData, date_get.monthData, date_get.dateData], {
                        container: ".ios_select_container",
                        title: "选择开始时间",
                        itemHeight: 50,
                        itemShowCount: 3,
                        relation: [1, 1, 0, 0],
                        oneLevelId: year,
                        twoLevelId: month,
                        threeLevelId: day,
                        //showLoading: true,
                        callback: function(year_data, month_data, day_data) {
                            showDom.dataset["year"] = year_data.id;
                            showDom.dataset["month"] = month_data.id;
                            showDom.dataset["day"] = day_data.id;
                            showDom.value =
                                year_data.id + "-" + month_data.id + "-" + day_data.id;
                            $("#startime").val(
                                year_data.id + "-" + date_long(month_data.id) + "-" + date_long(day_data.id)
                            );
                            //设置结束时间的默认时间--开始时间
                            // $('.js_endtime').attr('data-year', year_data.id);
                            // $('.js_endtime').attr('data-month', month_data.id);
                            // $('.js_endtime').attr('data-day', day_data.id);
                        }
                    }
                );
            });
            //点击到期时间
            $(".js_endtime").on("click", function() {
                var showDom = document.querySelector(".js_endtime");
                var year = showDom.dataset["year"];
                var month = showDom.dataset["month"];
                var day = showDom.dataset["day"];

                var bankSelect = new iosselect(
                    3, [date_get.yearData, date_get.monthData, date_get.dateData], {
                        container: ".ios_select_container",
                        title: "选择结束时间",
                        itemHeight: 50,
                        itemShowCount: 3,
                        relation: [1, 1, 0, 0],
                        oneLevelId: year,
                        twoLevelId: month,
                        threeLevelId: day,
                        //showLoading: true,
                        callback: function(year_data, month_data, day_data) {
                            showDom.dataset["year"] = year_data.id;
                            showDom.dataset["month"] = month_data.id;
                            showDom.dataset["day"] = day_data.id;
                            showDom.value =
                                year_data.id + "-" + month_data.id + "-" + day_data.id;
                            $("#endtime").val(
                                year_data.id + "-" + date_long(month_data.id) + "-" + date_long(day_data.id)
                            );
                        }
                    }
                );
            });
        });
    });
});
//处理1位01---取消区间选择，取消时间转化: 
function date_long(n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}