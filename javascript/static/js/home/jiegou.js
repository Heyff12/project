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

	let [a, b, c] = [1, 2, 3];

	let [head, ...tail] = [1, 2, 3, 4];
	console.log(head) // 1
	console.log(tail) // [2, 3, 4]

	let [x, y, ...z] = ['a'];
	console.log(x) // "a"
	console.log(y) // undefined
	console.log(z) // []



	// let [x, y, z] = new Set(['a', 'b', 'c']);
	// console.log(x) // "a"


	let obj = {};
	let arr = [];

	({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

	console.log(obj) // {prop:123}
	console.log(arr) // [true]

/***/ })
/******/ ]);