require.config({
  baseUrl: "../static/js",
  paths: {
    jquery: [
      "plug/jquery-2.1.4.min",
      "plug/jquery-1.7.2.min",
      "http://libs.baidu.com/jquery/2.0.3/jquery"
    ],
    zepto: "plug/zepto.min",
    iosselect: "plug/iosselect/iosSelect", //ios select样式
    date_get: "plug/date_get", //获取年月日--创建活动日期
    area: "plug/area", //获取年月日--创建活动日期
    alert_word: "plug/alert_word", //弹框
    common: "plug/common", //弹框
    common1: "plug/common1" //
  },
  shim: {
    zepto: {
      exports: "$"
    }
  }
});
