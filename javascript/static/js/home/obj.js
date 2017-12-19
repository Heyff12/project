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

	//4、Object.is()------------------------------------------
	console.log(Object.is('foo', 'foo'))
	// true
	console.log(Object.is({}, {}))
	// false



	//5、Object.assign()------------------------------------------

	var target = { a: 1 };

	var source1 = { b: 2 };
	var source2 = { c: 3 };

	Object.assign(target, source1, source2);
	console.log(target) // {a:1, b:2, c:3}


	//9、Object.keys()，Object.values()，Object.entries()------------------------------------------

	let {keys, values, entries} = Object;
	let obj = { a: 1, b: 2, c: 3 };

	for (let key of keys(obj)) {
	  console.log(key); // 'a', 'b', 'c'
	}

	for (let value of values(obj)) {
	  console.log(value); // 1, 2, 3
	}

	for (let [key, value] of entries(obj)) {
	  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
	}









/***/ })
/******/ ]);