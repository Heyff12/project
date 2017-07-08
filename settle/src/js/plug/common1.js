"use strict";

require(['../require-config'], function () {
    require(["jquery"], function ($) {
        $(function () {

	        /**
	         * 标题,内容,确定按钮的点击事件,取消按钮的点击事件
	         */
	        $.fn.dialogAlert = function(content, Funb, Func){
		        var dialogAlert = '<!-- </*弹框*/>  -->        ' +
		            '<div class="alert_con" id="alert_alert">   ' +
			        '<div class="alert_con_b">               ' +
			        '<div class="alert_con_br">' + content + '</div>' +
			        '<div class="clearfix"></div>' +
			        '</div>' +
			        '<ul class="both_button_fen">' +
			        '<li><span class="cancle js_alert_con_close">取消</span></li>' +
			        '<li><span class="sure js_alert_con_close js_transfer">确认</span></li>' +
			        '</ul>' +
			        '</div>';
		        if ($('div.zheceng').length < 1) {
			        dialogAlert += '<div class="zheceng"></div>';
		        }
		        $("body").append(dialogAlert);
		        $('body div.zheceng').show();
		        $('#alert_alert').show().on('click', '.js_alert_con_close.cancle', function(){
			        $('div.zheceng').hide();
			        $('#alert_alert').off('click').remove();
			        if($.isFunction(Func)){
				        Func();
			        }
			        return false;
		        });
		        $('#alert_alert').show().on('click', '.js_alert_con_close.sure', function(){
			        $('div.zheceng').hide();
			        $('#alert_alert').off('click').remove();
			        if($.isFunction(Funb)){
				        Funb();
			        }
			        return true;
		        });
	        };
	        /**
	         * 标题,内容,按钮的点击事件
	         */
	        $.fn.dialogTip = function(content, Func){
		        var dialogTip = '<!-- </*弹框--提示框*/>  -->' +
			        '<div class="alert_con" id="alert_tip">' +
			        '<div class="alert_con_t orange">提示<span class="pass_close js_alert_con_close">×</span></div>' +
			        '<div class="alert_con_b">' +
		            '<div class="alert_con_br">' + content + '</div>' +
			        '<div class="clearfix"></div>' +
			        '<span class="alert_con_close js_alert_con_close">关闭</span>' +
			        '</div>' +
			        '</div>';
		        if ($('div.zheceng').length < 1) {
			        dialogTip += '<div class="zheceng"></div>';
                }
		        $("body").append(dialogTip);
		        $('div.zheceng').show();
		        $('#alert_tip').show().on('click', '.js_alert_con_close', function(){
			        $('div.zheceng').hide();
			        $('#alert_tip').off('click').remove();
			        if($.isFunction(Func)){
				        Func();
			        }
			        return true;
		        });
	        };

        });
    });
});