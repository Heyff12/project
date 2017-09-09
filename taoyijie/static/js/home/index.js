require(['../require-config'], function() {
    require(["jquery", "bootstrap"], function($) {
        $(function() {
            $('.js_menu').on('click','li',function(){
                var index=$(this).index;
                $(this).addClass('tab').siblings('li').removeClass('tab');
            });
            $('.js_menu_btn').on('click',function(){
                var if_show=$(this).attr('data-show');
                if(if_show=='1'){
                    $('.js_menus').removeClass('menu_show');
                    $(this).attr('data-show','0');
                }else{
                    $('.js_menus').addClass('menu_show');
                    $(this).attr('data-show','1');
                }
            });
        });
    });
})