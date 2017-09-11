require.config({
    baseUrl: "../static/js",
    paths: {
        "jquery": ["plug/jquery.min1124", "plug/jquery-1.7.2.min", "http://libs.baidu.com/jquery/2.0.3/jquery"],
        "zepto": "plug/zepto.min",
        "bootstrap": "plug/bootstrap.min",
    },
    shim: {　
        'zepto': {　　　　　　　　　　　　　　　　
            exports: '$'　　　　　　
        },　
        'bootstrap': {　
            deps: ['jquery'],　　　　　　　　　　　　　　　
            exports: 'bootstrap'　　　　　　
        },
    }
});