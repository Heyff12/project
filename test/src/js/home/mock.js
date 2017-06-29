// 使用 Mock
require('../plug/zepto.min')
require('../plug/mock_define')
// var Mock = require('mockjs')
// Mock.mock('/yaya/hello', 'get', {
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// });
// 输出结果
//console.log(JSON.stringify(data, null, 4))
$.ajax({
    url: '/yaya/hello',
    type: 'get',
    dataType: 'json',
    success: function(data) {
        console.log(data.list)
    },
    error: function(data) {

    }
});
