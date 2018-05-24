require(['../require-config'], function() {
    require(["zepto", "iosselect"], function($, iosselect) {
        $(function() {
            get_prize();
            //价格
            $('.js_all_list').on('blur', '.js_num', function() {
                //var price = $(this).parents('ul').find('.js_price').text() - 0;
                //验证数字
                var num_val = $(this).parents('ul').find('.js_num').val();
                var num_reg = num_val.toString().replace(/\D/g, '') - 0;
                $(this).parents('ul').find('.js_num').val(num_reg);
                get_prize();
            });
            //积分
            $('.js_keyong').on('blur', function() {
                //验证数字
                var num_val = $(this).val().toString().replace(/\D/g, '') - 0;
                $(this).val(num_val);
                get_prize();
            });
            $('.js_fuxiao').on('blur', function() {
                //验证数字
                var num_val = $(this).val().toString().replace(/\D/g, '') - 0;
                $(this).val(num_val);
                get_prize();
            });
            $('.js_left').on('blur', function() {
                //验证数字
                var num_val = $(this).val().toString().replace(/\D/g, '') - 0;
                $(this).val(num_val);
                get_prize();
            });
            //获取总价格----------------------------------------------------------------------
            function get_prize() {
                var list_lenth = $('.js_join_list').length;
                var all_price = 0;
                var keyong = $('.js_keyong').val().toString().replace(/\D/g, '') - 0;
                var fuxiao = $('.js_fuxiao').val().toString().replace(/\D/g, '') - 0;
                var left = $('.js_left').val().toString().replace(/\D/g, '') - 0;
                var min_all = keyong + fuxiao + left;
                for (var i = 0; i < list_lenth; i++) {
                    var now_price = $('.js_join_list').eq(i).find('.js_price').text() - 0;
                    var now_num = $('.js_join_list').eq(i).find('.js_num').val() - 0;
                    var now_all = now_price * now_num;
                    all_price = (all_price - 0 + (now_all - 0)).toFixed(0);
                }
                $('.js_all_money').text(all_price);
                $('.js_end_money').text(all_price - min_all);
            }
            //总页数--获取
            var all_page = 26;
            //分页
            $('.js_page').on('click', '.js_li', function() {
                var li_index = $(this).index();
                $(this).addClass('tab').siblings('li').removeClass('tab');
                //ajax请求数据替换
                $('.js_all_list').html();
            });
            $('.js_pre').on('click', function() {
                var $parent_ul = $(this).parents('.js_page');
                var num = $parent_ul.find('.tab').index();
                var num_text = $parent_ul.find('.tab').text() - 0; //当前tab的值
                //console.log(num);
                if (num_text > 1 && num_text % 10 !== 1) {
                    $('.js_page .js_li').eq(num - 1).removeClass('tab');
                    $('.js_page .js_li').eq(num - 2).addClass('tab');
                } else if (num_text > 1 && num_text % 10 == 1) {
                    $('.js_li').each(function(index) {
                        $(this).text(num_text - 10 + index);
                        $('.js_page .js_li').eq(0).removeClass('tab');
                        $('.js_page .js_li').eq(9).addClass('tab');
                    })
                }
                var now_num = $parent_ul.find('.tab').index();
                if (now_num !== num) {
                    //内容替换ajax---todo
                    console.log('new')
                }
            });
            $('.js_next').on('click', function() {
                var $parent_ul = $(this).parents('.js_page')
                var num = $parent_ul.find('.tab').index(); //当前tab的index
                var num_text = $parent_ul.find('.tab').text() - 0; //当前tab的值
                //console.log(num);
                if (num_text < all_page && num_text % 10 !== 0) {
                    $('.js_page .js_li').eq(num - 1).removeClass('tab');
                    $('.js_page .js_li').eq(num).addClass('tab');
                } else if (num_text < all_page && num_text % 10 == 0) {
                    $('.js_li').each(function(index) {
                        $(this).text(num_text + index + 1);
                        $('.js_page .js_li').eq(9).removeClass('tab');
                        $('.js_page .js_li').eq(0).addClass('tab');
                    })
                }
                var now_num = $parent_ul.find('.tab').index();
                if (now_num !== num) {
                    //内容替换ajax---todo
                    console.log('new')
                }
            });
            // 省份列表
            var iosProvinces_ajax = [
                /*******华北五省********/
                { 'id': '110000', 'value': '北京市', 'parentId': '0' },
                { 'id': '120000', 'value': '天津市', 'parentId': '0' },
                { 'id': '130000', 'value': '河北省', 'parentId': '0' },
                { 'id': '140000', 'value': '山西省', 'parentId': '0' },
                { 'id': '150000', 'value': '内蒙古自治区', 'parentId': '0' },
                /*******东北三省********/
                { 'id': '210000', 'value': '辽宁省', 'parentId': '0' },
                { 'id': '220000', 'value': '吉林省', 'parentId': '0' },
                { 'id': '230000', 'value': '黑龙江省', 'parentId': '0' },
                /*******华东省********/
                { 'id': '310000', 'value': '上海市', 'parentId': '0' },
                { 'id': '320000', 'value': '江苏省', 'parentId': '0' },
                { 'id': '330000', 'value': '浙江省', 'parentId': '0' },
                { 'id': '340000', 'value': '安徽省', 'parentId': '0' },
                { 'id': '350000', 'value': '福建省', 'parentId': '0' },
                { 'id': '360000', 'value': '江西省', 'parentId': '0' },
                { 'id': '370000', 'value': '山东省', 'parentId': '0' },
                /****华中、华南六省******/
                { 'id': '410000', 'value': '河南省', 'parentId': '0' },
                { 'id': '420000', 'value': '湖北省', 'parentId': '0' },
                { 'id': '430000', 'value': '湖南省', 'parentId': '0' },
                { 'id': '440000', 'value': '广东省', 'parentId': '0' },
                { 'id': '450000', 'value': '广西壮族自治区', 'parentId': '0' },
                { 'id': '460000', 'value': '海南省', 'parentId': '0' },
                /****西南五省******/
                { 'id': '500000', 'value': '重庆市', 'parentId': '0' },
                { 'id': '510000', 'value': '四川省', 'parentId': '0' },
                { 'id': '520000', 'value': '贵州省', 'parentId': '0' },
                { 'id': '530000', 'value': '云南省', 'parentId': '0' },
                { 'id': '540000', 'value': '西藏自治区', 'parentId': '0' },
                /****西北五省******/
                { 'id': '610000', 'value': '陕西省', 'parentId': '0' },
                { 'id': '620000', 'value': '甘肃省', 'parentId': '0' },
                { 'id': '630000', 'value': '青海省', 'parentId': '0' },
                { 'id': '640000', 'value': '宁夏回族自治区', 'parentId': '0' },
                { 'id': '650000', 'value': '新疆维吾尔族自治区', 'parentId': '0' }
            ];
            // 城市列表
            var iosCitys_ajax = [
                /**********北京市********/
                { "id": "110100", "value": "北京市", "parentId": "110000" },
                /**********天津市********/
                { "id": "120100", "value": "天津市", "parentId": "120000" },
                /**********河北省********/
                { "id": "130100", "value": "石家庄市", "parentId": "130000" },
                { "id": "130200", "value": "唐山市", "parentId": "130000" },
                { "id": "130300", "value": "秦皇岛市", "parentId": "130000" },
                { "id": "130400", "value": "邯郸市", "parentId": "130000" },
                { "id": "130500", "value": "邢台市", "parentId": "130000" },
                { "id": "130600", "value": "保定市", "parentId": "130000" },
                { "id": "130700", "value": "张家口市", "parentId": "130000" },
                { "id": "130800", "value": "承德市", "parentId": "130000" },
                { "id": "130900", "value": "沧州市", "parentId": "130000" },
                { "id": "131000", "value": "廊坊市", "parentId": "130000" },
                { "id": "131100", "value": "衡水市", "parentId": "130000" },
                /**********山西省********/
                { "id": "140100", "value": "太原市", "parentId": "140000" },
                { "id": "140200", "value": "大同市", "parentId": "140000" },
                { "id": "140300", "value": "阳泉市", "parentId": "140000" },
                { "id": "140400", "value": "长治市", "parentId": "140000" },
                { "id": "140500", "value": "晋城市", "parentId": "140000" },
                { "id": "140600", "value": "朔州市", "parentId": "140000" },
                { "id": "140700", "value": "晋中市", "parentId": "140000" },
                { "id": "140800", "value": "运城市", "parentId": "140000" },
                { "id": "140900", "value": "忻州市", "parentId": "140000" },
                { "id": "141000", "value": "临汾市", "parentId": "140000" },
                { "id": "141100", "value": "吕梁市", "parentId": "140000" }
            ];
            // 城市列表
            var net_ajax = [
                /**********北京市********/
                { "id": "110100", "value": "北京市", "parentId": "110000" },
                /**********天津市********/
                { "id": "120100", "value": "天津市", "parentId": "120000" },
                /**********河北省********/
                { "id": "130100", "value": "石家庄市", "parentId": "130000" },
                { "id": "130200", "value": "唐山市", "parentId": "130000" },
                { "id": "130300", "value": "秦皇岛市", "parentId": "130000" },
                { "id": "130400", "value": "邯郸市", "parentId": "130000" },
                { "id": "130500", "value": "邢台市", "parentId": "130000" },
                { "id": "130600", "value": "保定市", "parentId": "130000" },
                { "id": "130700", "value": "张家口市", "parentId": "130000" },
                { "id": "130800", "value": "承德市", "parentId": "130000" },
                { "id": "130900", "value": "沧州市", "parentId": "130000" },
                { "id": "131000", "value": "廊坊市", "parentId": "130000" },
                { "id": "131100", "value": "衡水市", "parentId": "130000" },
                /**********山西省********/
                { "id": "140100", "value": "太原市", "parentId": "140000" },
                { "id": "140200", "value": "大同市", "parentId": "140000" },
                { "id": "140300", "value": "阳泉市", "parentId": "140000" },
                { "id": "140400", "value": "长治市", "parentId": "140000" },
                { "id": "140500", "value": "晋城市", "parentId": "140000" },
                { "id": "140600", "value": "朔州市", "parentId": "140000" },
                { "id": "140700", "value": "晋中市", "parentId": "140000" },
                { "id": "140800", "value": "运城市", "parentId": "140000" },
                { "id": "140900", "value": "忻州市", "parentId": "140000" },
                { "id": "141000", "value": "临汾市", "parentId": "140000" },
                { "id": "141100", "value": "吕梁市", "parentId": "140000" }
            ];
            //点击省
            $('.js_province').on('click', function() {
                var showDom = document.querySelector('.js_province');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [iosProvinces_ajax], {
                    container: '.ios_select_container_pro',
                    title: '选择开户行所在省',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_province').val(bank_data.value);
                    }
                });
            });
            //点击市
            $('.js_city').on('click', function() {
                var showDom = document.querySelector('.js_city');
                var bank = showDom.dataset['bank'];

                var bankSelect = new iosselect(1, [iosCitys_ajax], {
                    container: '.ios_select_container_city',
                    title: '选择开户行所在市',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bank,
                    callback: function(bank_data) {
                        showDom.dataset['bank'] = bank_data.id;
                        showDom.value = bank_data.value;
                        $('.js_city').val(bank_data.value);
                    }
                });
            });
            //点击网店
            $('.js_erea').on('click', function() {
                var showDom = document.querySelector('.js_erea');
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
                        $('.js_erea').val(bank_data.value);
                    }
                });
            });
        });
    });
});
