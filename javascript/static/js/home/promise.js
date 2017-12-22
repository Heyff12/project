'use strict';

var promise = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function () {
  console.log('Resolved.');
});

console.log('Hi!');

function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}

var getJSON = function getJSON(url) {
  var promise = new Promise(function (resolve, reject) {
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON("/posts.json").then(function (json) {
  console.log('Contents: ' + json);
}, function (error) {
  console.error('出错了', error);
});

var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    return reject(new Error('fail'));
  }, 500);
});

var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    return resolve(p1);
  }, 1000);
});

p2.then(function (result) {
  return console.log(result);
}).catch(function (error) {
  return console.log(error);
});


var someAsyncThing = function someAsyncThing() {
  return new Promise(function (resolve, reject) {
    resolve(x + 2);
  });
};

someAsyncThing().catch(function (error) {
  console.log('oh no', error);
}).then(function () {
  console.log('carry on');
});


var p11 = new Promise(function (resolve, reject) {
  resolve('hello');
}).then(function (result) {
  return result;
}).catch(function (e) {
  return e;
});

var p22 = new Promise(function (resolve, reject) {
  throw new Error('报错了');
}).then(function (result) {
  return result;
}).catch(function (e) {
  return e;
});

Promise.all([p11, p22]).then(function (result) {
  return console.log(result);
}).catch(function (e) {
  return console.log(e);
});


var p13 = new Promise(function (resolve, reject) {
  resolve('hello');
}).then(function (result) {
  return result;
});

var p23 = new Promise(function (resolve, reject) {
  throw new Error('报错了');
}).then(function (result) {
  return result;
});

Promise.all([p13, p23]).then(function (result) {
  return console.log(result);
}).catch(function (e) {
  return console.log(e);
});


var thenable = {
  then: function then(resolve, reject) {
    resolve(42);
  }
};

var p14 = Promise.resolve(thenable);
p14.then(function (value) {
  console.log(value);
});

setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');

var preloadImage = function preloadImage(path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};