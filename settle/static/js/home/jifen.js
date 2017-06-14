'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            $(document).ready(function () {
                var qian_day = [1, 2, 5, 6, 9]; //ajax请求获得
                var today = new Date();
                var year = today.getFullYear();
                var month = num_long(today.getMonth() + 1);
                var date = today.getDate();

                var first_date = year + '-' + month + '-01';
                var first_day = new Date(first_date).getDay(); //1号对应的星期几

                var days_count = days(year, month); //当月总的天数
                var day_html = '';
                for (var i = 0; i < first_day; i++) {
                    day_html += '<li></li>';
                }

                $('.js_calendar_t').text(year + '年' + month + '月'); //填入当前年月日
                //填入当前天
                for (var i = 1; i <= days_count; i++) {
                    if (i == date) {
                        day_html += '<li class="nowday">' + i + '</li>';
                    } else {
                        day_html += '<li>' + i + '</li>';
                    }
                    for (var j = 0; j < qian_day.length; j++) {
                        if (i == qian_day[j]) {
                            day_html += '<li class="qian">' + i + '</li>';
                        }
                    }
                }
                $('.js_day').html(day_html);

                function num_long(day) {
                    if (day < 10) {
                        return '0' + day;
                    } else {
                        return day;
                    }
                }

                function days(year, month) {
                    if (month.substr(0, 1) == '0') {
                        month = month.substr(1, 1);
                    }
                    if (/^3|5|7|8|10|12$/.test(month)) {
                        //console.log(month);
                        return 31;
                    } else if (/^4|6|9|11$/.test(month)) {
                        //console.log(month);
                        return 30;
                    } else if (/^1$/.test(month)) {
                        //console.log(month);
                        return 31;
                    } else if (/^2$/.test(month)) {
                        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                            return 29;
                        } else {
                            return 28;
                        }
                    } else {
                        throw new Error('month is illegal');
                    }
                };
            });
        });
    });
});