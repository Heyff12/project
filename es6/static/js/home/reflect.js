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

	// // 老写法
	// try {
	//   Object.defineProperty(target, property, attributes);
	//   // success
	// } catch (e) {
	//   // failure
	// }

	// // 新写法
	// if (Reflect.defineProperty(target, property, attributes)) {
	//   // success
	// } else {
	//   // failure
	// }




	var myObject = {
	  foo: 1,
	  bar: 2,
	  get baz() {
	  	console.log(this.foo + this.bar);
	    return this.foo + this.bar;
	  },
	};

	var myReceiverObject = {
	  foo: 4,
	  bar: 4,
	};

	Reflect.get(myObject, 'baz', myReceiverObject) // 8



































/***/ })
/******/ ]);