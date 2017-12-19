/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	let promise = new Promise(function(resolve, reject) {
	  console.log('Promise');
	  resolve();
	});

	promise.then(function() {
	  console.log('Resolved.');
	});

	console.log('Hi!');
	// Promise
	// Hi!
	// Resolved





	//下面是异步加载图片的例子。------------------------------
	function loadImageAsync(url) {
	  return new Promise(function(resolve, reject) {
	    var image = new Image();

	    image.onload = function() {
	      resolve(image);
	    };

	    image.onerror = function() {
	      reject(new Error('Could not load image at ' + url));
	    };

	    image.src = url;
	  });
	}

	//下面是一个用Promise对象实现的 Ajax 操作的例子。------------------------------
	var getJSON = function(url) {
	  var promise = new Promise(function(resolve, reject){
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

	getJSON("/posts.json").then(function(json) {
	  console.log('Contents: ' + json);
	}, function(error) {
	  console.error('出错了', error);
	});

	//p1是一个Promise，3秒之后变为rejected。
	// p2的状态在1秒之后改变，resolve方法返回的是p1。
	// 由于p2返回的是另一个 Promise，导致p2自己的状态无效了，
	// 由p1的状态决定p2的状态。
	// 所以，后面的then语句都变成针对后者（p1）。
	// 又过了2秒，p1变为rejected，导致触发catch方法指定的回调函数。
	var p1 = new Promise(function (resolve, reject) {
	  setTimeout(() => reject(new Error('fail')), 500)
	})

	var p2 = new Promise(function (resolve, reject) {
	  setTimeout(() => resolve(p1), 1000)
	})

	p2
	  .then(result => console.log(result))
	  .catch(error => console.log(error))
	// Error: fail

	var someAsyncThing = function() {
	  return new Promise(function(resolve, reject) {
	    // 下面一行会报错，因为x没有声明
	    resolve(x + 2);
	  });
	};

	someAsyncThing()
	.catch(function(error) {
	  console.log('oh no', error);
	})
	.then(function() {
	  console.log('carry on');
	});
	// oh no [ReferenceError: x is not defined]
	// carry on






	const p11 = new Promise((resolve, reject) => {
	  resolve('hello');
	})
	.then(result => result)
	.catch(e => e);

	const p22 = new Promise((resolve, reject) => {
	  throw new Error('报错了');
	})
	.then(result => result)
	.catch(e => e);

	Promise.all([p11, p22])
	.then(result => console.log(result))
	.catch(e => console.log(e));
	// ["hello", Error: 报错了]

	//如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。------

	const p13 = new Promise((resolve, reject) => {
	  resolve('hello');
	})
	.then(result => result);

	const p23 = new Promise((resolve, reject) => {
	  throw new Error('报错了');
	})
	.then(result => result);

	Promise.all([p13, p23])
	.then(result => console.log(result))
	.catch(e => console.log(e));
	// Error: 报错了


	let thenable = {
	  then: function(resolve, reject) {
	    resolve(42);
	  }
	};

	let p14 = Promise.resolve(thenable);
	p14.then(function(value) {
	  console.log(value);  // 42
	});


	//下面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
	//Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。
	setTimeout(function () {
	  console.log('three');
	}, 0);

	Promise.resolve().then(function () {
	  console.log('two');
	});

	console.log('one');

	// one
	// two
	// three



	const preloadImage = function (path) {
	  return new Promise(function (resolve, reject) {
	    var image = new Image();
	    image.onload  = resolve;
	    image.onerror = reject;
	    image.src = path;
	  });
	};



	// const f = () => console.log('now');
	// Promise.try(f);
	// console.log('next');
	// // now
	// // next












/***/ })
/******/ ]);