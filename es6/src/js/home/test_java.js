function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp"
                ],
                i, len;
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}

var xhr = createXHR();
xhr.open("get", "example.txt", false);
xhr.send(null);
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText);
} else {
    alert("Request was unsuccessful: " + xhr.status);
}

// var xhr = createXHR();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//             alert(xhr.responseText);
//         } else {
//             alert("Request was unsuccessful: " + xhr.status);
//         }
//     }
// };
// xhr.open("get", "example.txt", true);
// xhr.send(null);



//轮询
function createStreamingClient(url, progress, finished) {
    var xhr = new XMLHttpRequest(),
        received = 0;
    xhr.open("get", url, true);
    xhr.onreadystatechange = function() {
        var result;
        if (xhr.readyState == 3) {
            //只取得最新数据并调整计数器
            result = xhr.responseText.substring(received);
            received += result.length;
            //调用 progress 回调函数
            progress(result);
        } else if (xhr.readyState == 4) {
            finished(xhr.responseText);
        }
    };
    xhr.send(null);
    return xhr;
}
var client = createStreamingClient("streaming.php", function(data) {
    alert("Received: " + data);
}, function(data) {
    alert("Done!");
});




var socket = new WebSocket("ws://www.example.com/server.php");
socket.onopen = function() {
    alert("Connection established.");
};
socket.onerror = function() {
    alert("Connection error.");
};
socket.onclose = function() {
    alert("Connection closed.");
};
