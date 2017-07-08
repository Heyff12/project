var xmlhttp;
if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
//xmlhttp.withCredentials = true;
function aiqiyi() {
    //---掘金获取个人收藏
    xmlhttp.open("GET", 'http://vote.i.iqiyi.com/eagle/outer/join_common_vote?options=%7B%221429240967020250%22%3A%5B%220174703747030481%22%5D%7D&appid=0&vid=1056511533010586&authCookie=1bVX66uDm1dNm2gjgRpXvx28wxL28FMWfgS279xnCNG9HywXEGA8RuYdlsE5Z0m3tRMaR1b&callback=window.Q.__callbacks__.cbrxyd60', true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            var obj = eval("(" + data + ")");
            
            console.log(obj);
        }
    }
}
function juejin(p,s) {
    //---掘金获取个人收藏
    xmlhttp.open("GET", 'https://user-like-wrapper-ms.juejin.im/v1/user/582595a90ce4630058bd0c31/like/entry?page='+p+'&pageSize='+s, true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.setRequestHeader("X-Juejin-Client", "1498701023818");
    xmlhttp.setRequestHeader("X-Juejin-Src", "web");
    xmlhttp.setRequestHeader("X-Juejin-Token", "eyJhY2Nlc3NfdG9rZW4iOiJMVEVxYXd5ZDdZZk9XbGFEIiwicmVmcmVzaF90b2tlbiI6Im5WYllhQXFFcUIwQ0lqZDkiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjo2MDQ4MDB9");
    xmlhttp.setRequestHeader("X-Juejin-Uid", "582595a90ce4630058bd0c31");
    xmlhttp.setRequestHeader('X-Custom-Header', 'value');
    // xmlhttp.setRequestHeader('Access-Control-Request-Method', 'OPTIONS,POST,GET');
    xmlhttp.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            var obj = eval("(" + data + ")");
            var list = obj.d.entryList;
            var title = [];
            var url = [];
            for (var item of list) {
                let now = {
                    title: item.title,
                    url: item.originalUrl,
                };
                title.push(item.title);
                url.push(now)
            }
            console.log(title);
            console.log(url);
        }
    }
}
