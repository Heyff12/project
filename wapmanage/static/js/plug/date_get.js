define(function () {
    // 初始化时间
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDate = now.getDate();
    // 数据初始化
    function formatYear(nowYear) {
        var arr = [];
        for (var i = nowYear - 30; i <= nowYear; i++) {
            arr.push({
                id: i + '',
                value: i + '年'
            });
        }
        return arr;
    }

    function formatMonth(year) {
        var arr = [];
        if (year == nowYear){
            for (var i = 1; i <= nowMonth; i++) {
              // if (i < 10) {
              //     i = '0' + i;
              // }
              arr.push({ id: i + "", value: i + "月" });
            }
            return arr;
        }
        for (var i = 1; i <= 12; i++) {
            // if (i < 10) {
            //     i = '0' + i;
            // }
            arr.push({
                id: i + '',
                value: i + '月'
            });
        }
        return arr;
    }

    function formatDate(count,year,month) {
        //console.log(count);
        var arr = [];
        if (year == nowYear && month == nowMonth) {
            for (var i = 1; i <= nowDate; i++) {
            // if (i < 10) {
            //     i = '0' + i;
            // }
                arr.push({
                    id: i + '',
                    value: i + '日'
                });
          }
          return arr;
        }
        for (var i = 1; i <= count; i++) {
            // if (i < 10) {
            //     i = '0' + i;
            // }
            arr.push({
                id: i + '',
                value: i + '日'
            });
        }
        return arr;
    }
    var yearData = function (callback) {
        setTimeout(function () {
            callback(formatYear(nowYear))
        }, 0)
    }
    var monthData = function (year, callback) {
        setTimeout(function () {
            callback(formatMonth(year));
        }, 0);
    };
    var dateData = function (year, month, callback) {
        // if (month.substr(0, 1) == '0') {
        //     month = month.substr(1, 1);
        // }
        setTimeout(function () {
            if (/^3|5|7|8|10|12$/.test(month)) {
                //console.log(month);
                callback(formatDate(31,year,month));
            } else if (/^4|6|9|11$/.test(month)) {
                //console.log(month);
                callback(formatDate(30,year,month));
            } else if (/^1$/.test(month)) {
                //console.log(month);
                callback(formatDate(31,year,month));
            } else if (/^2$/.test(month)) {
                if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                    callback(formatDate(29,year,month));
                } else {
                    callback(formatDate(28,year,month));
                }
            } else {
                throw new Error('month is illegal');
            }
        }, 0);
        // ajax请求可以这样写
        /*
        $.ajax({
            type: 'get',
            url: '/example',
            success: function(data) {
                callback(data);
            }
        });
        */
    };

    return {
        yearData: yearData,
        monthData: monthData,
        dateData: dateData,
        nowYear: nowYear,
        nowMonth: nowMonth,
        nowDate: nowDate,
    };
});
