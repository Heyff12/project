"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}


function aiqiyi() {
    xmlhttp.open("GET", 'http://vote.i.iqiyi.com/eagle/outer/join_common_vote?options=%7B%221429240967020250%22%3A%5B%220174703747030481%22%5D%7D&appid=0&vid=1056511533010586&authCookie=1bVX66uDm1dNm2gjgRpXvx28wxL28FMWfgS279xnCNG9HywXEGA8RuYdlsE5Z0m3tRMaR1b&callback=window.Q.__callbacks__.cbrxyd60', true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            var obj = eval("(" + data + ")");

            console.log(obj);
        }
    };
}

function juejin(p, s) {
    xmlhttp.open("GET", 'https://user-like-wrapper-ms.juejin.im/v1/user/582595a90ce4630058bd0c31/like/entry?page=' + p + '&pageSize=' + s, true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.setRequestHeader("X-Juejin-Client", "1498701023818");
    xmlhttp.setRequestHeader("X-Juejin-Src", "web");
    xmlhttp.setRequestHeader("X-Juejin-Token", "eyJhY2Nlc3NfdG9rZW4iOiJMVEVxYXd5ZDdZZk9XbGFEIiwicmVmcmVzaF90b2tlbiI6Im5WYllhQXFFcUIwQ0lqZDkiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjo2MDQ4MDB9");
    xmlhttp.setRequestHeader("X-Juejin-Uid", "582595a90ce4630058bd0c31");
    xmlhttp.setRequestHeader('X-Custom-Header', 'value');

    xmlhttp.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            var obj = eval("(" + data + ")");
            var list = obj.d.entryList;
            var title = [];
            var url = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    var now = {
                        title: item.title,
                        url: item.originalUrl
                    };
                    title.push(item.title);
                    url.push(now);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            console.log(title);
            console.log(url);
        }
    };
}
juejin(3, 20);


var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://www.yaya12.com/getdata.js";
document.body.appendChild(script);