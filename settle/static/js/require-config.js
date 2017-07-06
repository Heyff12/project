require.config({
    baseUrl: "../static/js",
    paths: {
        "jquery": ["plug/jquery-2.1.4.min", "plug/jquery-1.7.2.min", "http://libs.baidu.com/jquery/2.0.3/jquery"],
        "zepto": "plug/zepto.min",
        "iosselect": "plug/iosselect/iosSelect",//ios select样式
        "common": "plug/common",//ios select样式
        "common1": "plug/common1",//ios select样式
    },
    shim: {　
        'zepto': {　　　　　　　　　　　　　　　　
            exports: '$'　　　　　　
        },
    }
});