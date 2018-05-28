(function () {
    var tipAlert = function (options) {
        //   this.options = $.extend({
        //       "id": 'body',
        //       "content": '错误信息',
        //       "leftPx": 0
        //   }, options);
        this.options = {
            "id": 'body',
            "content": options.content || '错误信息',
            "leftPx": 0
        };
        this.init();
        this.Tip();
    };
    tipAlert.prototype.init = function () {
        let tipE = document.createElement("div");
        tipE.id = "toast_data_short";
        tipE.className = "toast_data_short";
        // let tipK = '<div class="toast_data_short" id = "toast_data_short" ></div>';
        // $(this.options.id).append(tipK);
        document.body.appendChild(tipE);
        // document.getElementById("wap").appendChild(tipE);
    };
    //显示弹框
    tipAlert.prototype.showTip = function () {
        let leftpx = this.options.leftPx;
        let tipE = document.getElementById("toast_data_short");
        tipE.style.zIndex = 12;
        tipE.style.left = leftpx + "px";
        tipE.style.opacity = 0.85;
        // $("#toast_data_short")
        //   .css({ "z-index": 12, left: leftpx + "px" })
        //   .animate({ opacity: 0.85 }, 500, "ease-out");
    };
    //隐藏弹框
    tipAlert.prototype.hideTip = function () {
        let tipE = document.getElementById("toast_data_short");
        tipE.style.zIndex = -12;
        tipE.style.opacity = 0;
        // $("#toast_data_short")
        //   .animate({ opacity: 0 }, 500, "ease-out", function() {
        //     $("#toast_data_short").css("z-index", -12);
        //   });
    };
    //调用
    tipAlert.prototype.Tip = function () {
        let tipE = document.getElementById("toast_data_short");
        tipE.innerHTML = this.options.content;
        // $('#toast_data_short').text(this.options.content);
        this.options.leftPx = this.count_leftpx();
        this.showTip();
        window.setTimeout(this.hideTip, 3000);
    };
    //计算距离左侧距离
    tipAlert.prototype.count_leftpx = function () {
        let tipE = document.getElementById("toast_data_short");
        var toast_w = tipE.offsetWidth;
        var body_w = document.body.clientWidth;
        // var toast_w = $("#toast_data_short").width();
        // var body_w = $("body").width();
        var leftpx = (body_w - toast_w) / 2;
        return Math.floor(leftpx);
    };
    window.tipAlert = tipAlert;
})();
