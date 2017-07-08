require(['../require-config'], function() {
    require(["zepto", "iosselect", "area"], function($, iosselect, area) {
        $(function() {
            var bank_ajax = [
                { 'id': '10001', 'value': '工商银行' },
                { 'id': '10002', 'value': '农业银行' },
                { 'id': '10003', 'value': '建设银行' },
                { 'id': '10004', 'value': '中国银行' },
                { 'id': '10005', 'value': '交通银行' },
                { 'id': '10006', 'value': '浦发银行' },
                { 'id': '10007', 'value': '上海银行' },
                { 'id': '10008', 'value': '汇丰银行' },
                { 'id': '10009', 'value': '光大银行' },
                { 'id': '10010', 'value': '招商银行' },
                { 'id': '10011', 'value': '中信银行' },
                { 'id': '10012', 'value': '民生银行' },
                { 'id': '10013', 'value': '平安银行' },
                { 'id': '10014', 'value': '华夏银行' },
                { 'id': '10015', 'value': '广发银行' },
                { 'id': '10016', 'value': '北京银行' }
            ];
            // 省份列表
            var iosProvinces_ajax = area.iosProvinces;
            // 城市列表
            var iosCitys_ajax = area.iosCitys;
            // 区域列表
            var iosCountys_ajax = area.iosCountys;
            // 城市列表
            var net_ajax = area.iosCitys;
            //点击银行
            $('.js_bank').on('click', function() {
                var showDom = document.querySelector('.js_bank');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [bank_ajax], {
                    container: '.ios_select_container',
                    title: '选择所属银行',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_bank').val(bank_data.value);
                    }
                });
            });
            var selectContactDom = $('#select_pc');
            //var showContactDom = $('#show_contact');
            var contactProvinceCodeDom = $('.js_province');
            var contactCityCodeDom = $('.js_city');
            var contactCountyCodeDom = $('.js_district');
            selectContactDom.bind('click', function() {
                var sccode = contactCityCodeDom.attr('data-bank');
                var scname = contactCityCodeDom.val();

                var oneLevelId = contactProvinceCodeDom.attr('data-bank');
                var twoLevelId = contactCityCodeDom.attr('data-bank');
                var threeLevelId = contactCountyCodeDom.attr('data-bank');
                var iosSelect = new iosselect(3, [iosProvinces_ajax, iosCitys_ajax, iosCountys_ajax], {
                    title: '地址选择',
                    itemHeight: 35,
                    relation: [1, 1, 0, 0],
                    oneLevelId: oneLevelId,
                    twoLevelId: twoLevelId,
                    threeLevelId: threeLevelId,
                    callback: function(selectOneObj, selectTwoObj, selectThreeObj) {
                        contactProvinceCodeDom.val(selectOneObj.value);
                        contactProvinceCodeDom.attr('data-bank', selectOneObj.id);
                        contactCityCodeDom.val(selectTwoObj.value);
                        contactCityCodeDom.attr('data-bank', selectTwoObj.id);
                        contactCountyCodeDom.val(selectThreeObj.value);
                        contactCountyCodeDom.attr('data-bank', selectThreeObj.id);
                    }
                });
            });
            // //点击省
            // $('.js_province').on('click', function() {
            //     var showDom = document.querySelector('.js_province');
            //     var bank = showDom.dataset['bank'];

            //     var bankSelect = new iosselect(1, [iosProvinces_ajax], {
            //         container: '.ios_select_container_pro',
            //         title: '选择开户行所在省',
            //         itemHeight: 50,
            //         itemShowCount: 3,
            //         oneLevelId: bank,
            //         callback: function(bank_data) {
            //             showDom.dataset['bank'] = bank_data.id;
            //             showDom.value = bank_data.value;
            //             $('.js_province').val(bank_data.value);
            //             // //ajax获取相应市
            //             // iosCitys_ajax = [
            //             //     /**********山西省********/
            //             //     { "id": "140100", "value": "太原市", "parentId": "140000" },
            //             //     { "id": "140200", "value": "大同市", "parentId": "140000" },
            //             //     { "id": "140300", "value": "阳泉市", "parentId": "140000" },
            //             //     { "id": "140400", "value": "长治市", "parentId": "140000" },
            //             //     { "id": "140500", "value": "晋城市", "parentId": "140000" },
            //             //     { "id": "140600", "value": "朔州市", "parentId": "140000" },
            //             //     { "id": "140700", "value": "晋中市", "parentId": "140000" },
            //             //     { "id": "140800", "value": "运城市", "parentId": "140000" },
            //             //     { "id": "140900", "value": "忻州市", "parentId": "140000" },
            //             //     { "id": "141000", "value": "临汾市", "parentId": "140000" },
            //             //     { "id": "141100", "value": "吕梁市", "parentId": "140000" }
            //             // ];
            //             // document.querySelector('.js_city').dataset['bank'] = iosCitys_ajax[0].id;
            //             // document.querySelector('.js_city').value = iosCitys_ajax[0].value;
            //         }
            //     });
            // });
            // //点击市
            // $('.js_city').on('click', function() {
            //     var showDom = document.querySelector('.js_city');
            //     var bank = showDom.dataset['bank'];

            //     var bankSelect = new iosselect(1, [iosCitys_ajax], {
            //         container: '.ios_select_container_city',
            //         title: '选择开户行所在市',
            //         itemHeight: 50,
            //         itemShowCount: 3,
            //         oneLevelId: bank,
            //         callback: function(bank_data) {
            //             showDom.dataset['bank'] = bank_data.id;
            //             showDom.value = bank_data.value;
            //             $('.js_city').val(bank_data.value);
            //         }
            //     });
            // });
            //点击网店
            $('.js_net').on('click', function() {
                var showDom = document.querySelector('.js_net');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [net_ajax], {
                    container: '.ios_select_container_net',
                    title: '选择开户行网点',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_net').val(bank_data.value);
                    }
                });
            });
        });
    });
});
