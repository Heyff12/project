'use strict';

require('../plug/zepto.min');
require('../plug/mock_define');

$.ajax({
    url: '/yaya/hello',
    type: 'get',
    dataType: 'json',
    success: function success(data) {
        console.log(data.list);
    },
    error: function error(data) {}
});