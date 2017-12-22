'use strict';

require('../plug/zepto.min');
var num = 0;
$('.js_ul').on('click', 'li', function () {
    alert($(this).index());
});
$('.js_add').on('click', function () {
    num++;
    var new_li = '<li>666666666' + num + '</li>';
    $('.js_ul').append(new_li);
});