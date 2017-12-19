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

	var obj = new Proxy({}, {
	  get: function (target, key, receiver) {
	    console.log(`getting ${key}!`);
	    return Reflect.get(target, key, receiver);
	  },
	  set: function (target, key, value, receiver) {
	    console.log(`setting ${key}!`);
	    return Reflect.set(target, key, value, receiver);
	  }
	});




	obj.count = 1
	//  setting count!
	++obj.count
	//  getting count!
	//  setting count!




	var handler = {
	  get: function(target, name) {
	    if (name === 'prototype') {
	      return Object.prototype;
	    }
	    return 'Hello, ' + name;
	  },

	  apply: function(target, thisBinding, args) {
	    return args[0];
	  },

	  construct: function(target, args) {
	    return {value: args[1]};
	  }
	};

	var fproxy = new Proxy(function(x, y) {
	  return x + y;
	}, handler);

	console.log(fproxy(1, 2)); // 1
	console.log(new fproxy(1,2)); // {value: 2}
	console.log(fproxy.prototype === Object.prototype); // true
	console.log(fproxy.foo); // "Hello, foo"



	let stu1 = {name: '张三', score: 59};
	let stu2 = {name: '李四', score: 99};

	let handler1 = {
	  has(target, prop) {
	    if (prop === 'score' && target[prop] < 60) {
	      console.log(`${target.name} 不及格`);
	      return false;
	    }
	    return prop in target;
	  }
	}

	let oproxy1 = new Proxy(stu1, handler1);
	let oproxy2 = new Proxy(stu2, handler1);

	'score' in oproxy1
	// 张三 不及格
	// false

	'score' in oproxy2
	// true

	for (let a in oproxy1) {
	  console.log(oproxy1[a]);
	}
	// 张三
	// 59

	for (let b in oproxy2) {
	  console.log(oproxy2[b]);
	}
	// 李四
	// 99




	var p = new Proxy(function () {}, {
	  construct: function(target, args) {
	    console.log('called: ' + args.join(', '));
	    return { value: args[0] * 10 };
	  }
	});

	(new p(1)).value
	// "called: 1"
	// 10

























































/***/ })
/******/ ]);