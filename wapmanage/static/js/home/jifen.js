'use strict';

require(['../require-config'], function () {
    require(["zepto"], function ($) {
        $(function () {
            $(document).ready(function () {
                var qian_day = [1, 2, 5, 6, 9, 13];
                var today = new Date();
                var year = today.getFullYear();
                var month = num_long(today.getMonth() + 1);
                var date = today.getDate();

                var first_date = year + '-' + month + '-01';
                var first_day = new Date(first_date).getDay();

                var days_count = days(year, month);
                var day_html = '';
                for (var i = 0; i < first_day; i++) {
                    day_html += '<li><span></span></li>';
                }

                $('.js_calendar_t').text(year + '年' + month + '月');
                for (var i = 1; i <= days_count; i++) {
                    var if_qian = false;
                    var if_now = false;
                    for (var j = 0; j < qian_day.length; j++) {
                        if (i == qian_day[j]) {
                            if (i == date) {
                                day_html += '<li class="qian js_nowday"><span>' + i + '</span></li>';
                                $('.js_qian').addClass('hide');
                                $('.js_qian_over').removeClass('hide');
                            } else {
                                day_html += '<li class="qian"><span>' + i + '</span></li>';
                            }
                            if_qian = true;
                        }
                    }
                    if (!if_qian && i == date) {
                        day_html += '<li class="nowday js_nowday"><span>' + i + '</span></li>';
                        if_now = true;
                    }
                    if (!if_qian && !if_now) {
                        day_html += '<li><span>' + i + '</span></li>';
                    }
                }
                $('.js_day').html(day_html);

                $('.js_qian').on('click', function () {
                    $('.js_nowday').addClass('qian');
                    $('.js_qian').addClass('hide');
                    $('.js_qian_over').removeClass('hide');
                });

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
                        return 31;
                    } else if (/^4|6|9|11$/.test(month)) {
                        return 30;
                    } else if (/^1$/.test(month)) {
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