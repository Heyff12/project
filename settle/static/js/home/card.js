"use strict";

require(['../require-config'], function () {
    require(["zepto", "iosselect"], function ($, iosselect) {
        $(function () {
            var bank_ajax = [{ 'id': '10001', 'value': '工商银行' }, { 'id': '10002', 'value': '农业银行' }, { 'id': '10003', 'value': '建设银行' }, { 'id': '10004', 'value': '中国银行' }, { 'id': '10005', 'value': '交通银行' }, { 'id': '10006', 'value': '浦发银行' }, { 'id': '10007', 'value': '上海银行' }, { 'id': '10008', 'value': '汇丰银行' }, { 'id': '10009', 'value': '光大银行' }, { 'id': '10010', 'value': '招商银行' }, { 'id': '10011', 'value': '中信银行' }, { 'id': '10012', 'value': '民生银行' }, { 'id': '10013', 'value': '平安银行' }, { 'id': '10014', 'value': '华夏银行' }, { 'id': '10015', 'value': '广发银行' }, { 'id': '10016', 'value': '北京银行' }];
            // 省份列表
            var iosProvinces_ajax = [
            /*******华北五省********/
            { 'id': '110000', 'value': '北京市', 'parentId': '0' }, { 'id': '120000', 'value': '天津市', 'parentId': '0' }, { 'id': '130000', 'value': '河北省', 'parentId': '0' }, { 'id': '140000', 'value': '山西省', 'parentId': '0' }, { 'id': '150000', 'value': '内蒙古自治区', 'parentId': '0' },
            /*******东北三省********/
            { 'id': '210000', 'value': '辽宁省', 'parentId': '0' }, { 'id': '220000', 'value': '吉林省', 'parentId': '0' }, { 'id': '230000', 'value': '黑龙江省', 'parentId': '0' },
            /*******华东省********/
            { 'id': '310000', 'value': '上海市', 'parentId': '0' }, { 'id': '320000', 'value': '江苏省', 'parentId': '0' }, { 'id': '330000', 'value': '浙江省', 'parentId': '0' }, { 'id': '340000', 'value': '安徽省', 'parentId': '0' }, { 'id': '350000', 'value': '福建省', 'parentId': '0' }, { 'id': '360000', 'value': '江西省', 'parentId': '0' }, { 'id': '370000', 'value': '山东省', 'parentId': '0' },
            /****华中、华南六省******/
            { 'id': '410000', 'value': '河南省', 'parentId': '0' }, { 'id': '420000', 'value': '湖北省', 'parentId': '0' }, { 'id': '430000', 'value': '湖南省', 'parentId': '0' }, { 'id': '440000', 'value': '广东省', 'parentId': '0' }, { 'id': '450000', 'value': '广西壮族自治区', 'parentId': '0' }, { 'id': '460000', 'value': '海南省', 'parentId': '0' },
            /****西南五省******/
            { 'id': '500000', 'value': '重庆市', 'parentId': '0' }, { 'id': '510000', 'value': '四川省', 'parentId': '0' }, { 'id': '520000', 'value': '贵州省', 'parentId': '0' }, { 'id': '530000', 'value': '云南省', 'parentId': '0' }, { 'id': '540000', 'value': '西藏自治区', 'parentId': '0' },
            /****西北五省******/
            { 'id': '610000', 'value': '陕西省', 'parentId': '0' }, { 'id': '620000', 'value': '甘肃省', 'parentId': '0' }, { 'id': '630000', 'value': '青海省', 'parentId': '0' }, { 'id': '640000', 'value': '宁夏回族自治区', 'parentId': '0' }, { 'id': '650000', 'value': '新疆维吾尔族自治区', 'parentId': '0' }];
            // 城市列表
            var iosCitys_ajax = [
            /**********北京市********/
            { "id": "110100", "value": "北京市", "parentId": "110000" },
            /**********天津市********/
            { "id": "120100", "value": "天津市", "parentId": "120000" },
            /**********河北省********/
            { "id": "130100", "value": "石家庄市", "parentId": "130000" }, { "id": "130200", "value": "唐山市", "parentId": "130000" }, { "id": "130300", "value": "秦皇岛市", "parentId": "130000" }, { "id": "130400", "value": "邯郸市", "parentId": "130000" }, { "id": "130500", "value": "邢台市", "parentId": "130000" }, { "id": "130600", "value": "保定市", "parentId": "130000" }, { "id": "130700", "value": "张家口市", "parentId": "130000" }, { "id": "130800", "value": "承德市", "parentId": "130000" }, { "id": "130900", "value": "沧州市", "parentId": "130000" }, { "id": "131000", "value": "廊坊市", "parentId": "130000" }, { "id": "131100", "value": "衡水市", "parentId": "130000" },
            /**********山西省********/
            { "id": "140100", "value": "太原市", "parentId": "140000" }, { "id": "140200", "value": "大同市", "parentId": "140000" }, { "id": "140300", "value": "阳泉市", "parentId": "140000" }, { "id": "140400", "value": "长治市", "parentId": "140000" }, { "id": "140500", "value": "晋城市", "parentId": "140000" }, { "id": "140600", "value": "朔州市", "parentId": "140000" }, { "id": "140700", "value": "晋中市", "parentId": "140000" }, { "id": "140800", "value": "运城市", "parentId": "140000" }, { "id": "140900", "value": "忻州市", "parentId": "140000" }, { "id": "141000", "value": "临汾市", "parentId": "140000" }, { "id": "141100", "value": "吕梁市", "parentId": "140000" }];
            // 城市列表
            var net_ajax = [
            /**********北京市********/
            { "id": "110100", "value": "北京市", "parentId": "110000" },
            /**********天津市********/
            { "id": "120100", "value": "天津市", "parentId": "120000" },
            /**********河北省********/
            { "id": "130100", "value": "石家庄市", "parentId": "130000" }, { "id": "130200", "value": "唐山市", "parentId": "130000" }, { "id": "130300", "value": "秦皇岛市", "parentId": "130000" }, { "id": "130400", "value": "邯郸市", "parentId": "130000" }, { "id": "130500", "value": "邢台市", "parentId": "130000" }, { "id": "130600", "value": "保定市", "parentId": "130000" }, { "id": "130700", "value": "张家口市", "parentId": "130000" }, { "id": "130800", "value": "承德市", "parentId": "130000" }, { "id": "130900", "value": "沧州市", "parentId": "130000" }, { "id": "131000", "value": "廊坊市", "parentId": "130000" }, { "id": "131100", "value": "衡水市", "parentId": "130000" },
            /**********山西省********/
            { "id": "140100", "value": "太原市", "parentId": "140000" }, { "id": "140200", "value": "大同市", "parentId": "140000" }, { "id": "140300", "value": "阳泉市", "parentId": "140000" }, { "id": "140400", "value": "长治市", "parentId": "140000" }, { "id": "140500", "value": "晋城市", "parentId": "140000" }, { "id": "140600", "value": "朔州市", "parentId": "140000" }, { "id": "140700", "value": "晋中市", "parentId": "140000" }, { "id": "140800", "value": "运城市", "parentId": "140000" }, { "id": "140900", "value": "忻州市", "parentId": "140000" }, { "id": "141000", "value": "临汾市", "parentId": "140000" }, { "id": "141100", "value": "吕梁市", "parentId": "140000" }];
            //点击银行
            $('.js_bank').on('click', function () {
                var showDom = document.querySelector('.js_bank');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [bank_ajax], {
                    container: '.ios_select_container',
                    title: '选择所属银行',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function callback(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_bank').val(bank_data.value);
                    }
                });
            });
            //点击省
            $('.js_province').on('click', function () {
                var showDom = document.querySelector('.js_province');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [iosProvinces_ajax], {
                    container: '.ios_select_container_pro',
                    title: '选择开户行所在省',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function callback(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_province').val(bank_data.value);
                    }
                });
            });
            //点击市
            $('.js_city').on('click', function () {
                var showDom = document.querySelector('.js_city');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [iosCitys_ajax], {
                    container: '.ios_select_container_city',
                    title: '选择开户行所在市',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function callback(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_city').val(bank_data.value);
                    }
                });
            });
            //点击网店
            $('.js_net').on('click', function () {
                var showDom = document.querySelector('.js_net');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [net_ajax], {
                    container: '.ios_select_container_net',
                    title: '选择开户行网点',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function callback(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_net').val(bank_data.value);
                    }
                });
            });
        });
    });
});