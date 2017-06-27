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

	//1.set------------------------------------------------------------------
	const s = new Set();

	[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

	for (let i of s) {
	  console.log(i);
	}// 2 3 5 4


	// 例一
	const set = new Set([1, 2, 3, 4, 4]);
	console.log([...set]);
	// [1, 2, 3, 4]



	s.add(1).add(2).add(2);
	// 注意2被加入了两次

	console.log(s.size); // 2

	console.log(s.has(1)); // true
	console.log(s.has(2)); // true
	console.log(s.has(3)); // false

	console.log(s.delete(2));
	console.log(s.has(2)); // false



	//这就提供了去除数组重复成员的另一种方法

	function dedupe(array) {
	  return Array.from(new Set(array));
	}

	console.log(dedupe([1, 1, 2, 3])); // [1, 2, 3]


	let setzu = new Set(['red', 'green', 'blue']);

	for (let item of setzu.keys()) {
	  console.log(item);
	}
	// red
	// green
	// blue

	for (let item of setzu.values()) {
	  console.log(item);
	}
	// red
	// green
	// blue

	for (let item of setzu.entries()) {
	  console.log(item);
	}
	// ["red", "red"]
	// ["green", "green"]
	// ["blue", "blue"]

	for (let x of setzu) {
	  console.log(x);
	}

	let setzu1 = new Set([1, 2, 3]);
	setzu1.forEach((value, key) => console.log(value * 2) )

	let a = new Set([1, 2, 3]);
	let b = new Set([4, 3, 2]);

	// 并集
	let union = new Set([...a, ...b]);
	// Set {1, 2, 3, 4}

	// 交集
	let intersect = new Set([...a].filter(x => b.has(x)));
	// set {2, 3}

	// 差集
	let difference = new Set([...a].filter(x => !b.has(x)));
	// Set {1}
	console.log(union);
	console.log(intersect);
	console.log(difference);



	const map = new Map();
	map.set('foo', true);
	map.set('bar', false);

	console.log(map.size); // 2


	const mapzu = new Map([
	  ['F', 'no'],
	  ['T',  'yes'],
	]);

	for (let key of mapzu.keys()) {
	  console.log(key);
	}
	// "F"
	// "T"

	for (let value of mapzu.values()) {
	  console.log(value);
	}
	// "no"
	// "yes"

	for (let item of mapzu.entries()) {
	  console.log(item[0], item[1]);
	}
	// "F" "no"
	// "T" "yes"

	// 或者
	for (let [key, value] of mapzu.entries()) {
	  console.log(key, value);
	}
	// "F" "no"
	// "T" "yes"

	// 等同于使用map.entries()
	for (let [key, value] of mapzu) {
	  console.log(key, value);
	}
	// "F" "no"
	// "T" "yes"



	const map2 = new Map([
	  [1, 'one'],
	  [2, 'two'],
	  [3, 'three'],
	]);

	console.log([...map2.keys()]);
	// [1, 2, 3]

	console.log([...map2.values()]);
	// ['one', 'two', 'three']

	console.log([...map2.entries()]);
	// [[1,'one'], [2, 'two'], [3, 'three']]

	console.log([...map2]);
	// [[1,'one'], [2, 'two'], [3, 'three']]











/***/ })
/******/ ]);