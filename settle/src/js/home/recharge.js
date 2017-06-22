require(['../require-config'], function() {
    require(["zepto"], function($) {
        $(function() {
            //点击切换
            $('.js_select').on('click', 'li', function() {
                var li_index = $(this).index();
                $(this).addClass('tab').siblings('li').removeClass('tab');
            });
            //点击是否选中
            $('.js_radio').on('click', function() {
                var sel = $(this).attr('data-click');
                if (sel == 1) {
                    $(this).attr('data-click', '0');
                    $('.js_dd_no').removeClass('hide');
                    $('.js_dd_yes').addClass('hide');
                } else {
                    $(this).attr('data-click', '1');
                    $('.js_dd_no').addClass('hide');
                    $('.js_dd_yes').removeClass('hide');
                }
            });
            //点击是否选中-------加盟变更
            $('.js_join_list').on('click', function() {
                var sel = $(this).attr('data-click');
                if (sel == 1) {
                    $(this).attr('data-click', '1');
                    $(this).find('.js_dd_no').addClass('hide');
                    $(this).find('.js_dd_yes').removeClass('hide');
                } else {
                    $(this).attr('data-click', '1').siblings('.js_join_list').attr('data-click', '0');
                    $(this).find('.js_dd_no').addClass('hide');
                    $(this).find('.js_dd_yes').removeClass('hide');
                    $(this).siblings('.js_join_list').find('.js_dd_no').removeClass('hide');
                    $(this).siblings('.js_join_list').find('.js_dd_yes').addClass('hide');
                }
            });
        });
    });
});
