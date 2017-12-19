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

	// export var firstName = 'Michael';
	// export var lastName = 'Jackson';
	// export var year = 1958;
	// export function multiply(x, y) {
	//   return x * y;
	// };
	// export function area(radius) {
	//   return Math.PI * radius * radius;
	// }

	// export function circumference(radius) {
	//   return 2 * Math.PI * radius;
	// }


	// var firstName = 'Michael';
	// var lastName = 'Jackson';
	// var year = 1958;

	// export {firstName, lastName, year};

	function area(radius) {
	    return Math.PI * radius * radius;
	}

	function circumference(radius) {
	    return 2 * Math.PI * radius;
	}
	module.exports = {
	    area: area,
	    circumference: circumference,
	};


/***/ })
/******/ ]);