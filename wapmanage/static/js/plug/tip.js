(function() {
  var tipAlert = function(options) {
      this.options = {
          "id": 'body',
          "content": options.content ? options.content : '错误信息',
          "leftPx": 0
      };
      this.init();
      this.Tip();
    };    
    tipAlert.prototype.init = function() {
        let tipE = document.createElement("div");
        tipE.id = "toast_data_short";
        tipE.className = "toast_data_short";
        document.body.appendChild(tipE);
    };
    //显示弹框
    tipAlert.prototype.showTip = function() {
        let leftpx = this.options.leftPx;
        let tipE = document.getElementById("toast_data_short");
        tipE.style.zIndex = 12;
        tipE.style.left = leftpx + "px";
        tipE.style.opacity = 0.85;
    };
    //隐藏弹框
    tipAlert.prototype.hideTip = function() {
        let tipE = document.getElementById("toast_data_short");
        tipE.style.zIndex = -12;
        tipE.style.opacity = 0;
    };
    //调用
    tipAlert.prototype.Tip = function() {
        let tipE = document.getElementById("toast_data_short");
        tipE.innerHTML = this.options.content;
        this.options.leftPx = this.count_leftpx();
        this.showTip();
        window.setTimeout(this.hideTip, 3000);
    };
    //计算距离左侧距离
    tipAlert.prototype.count_leftpx = function() {
        let tipE = document.getElementById("toast_data_short");
        var toast_w = tipE.offsetWidth;
        var body_w = document.body.clientWidth;
        var leftpx = (body_w - toast_w) / 2;
        return Math.floor(leftpx);
    };
  window.tipAlert = tipAlert;
})();
