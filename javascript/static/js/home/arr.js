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

	//1、Array.from()-------------------------------------------------------
	let arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};

	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
	console.log(arr1)

	// ES6的写法
	let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
	console.log(arr2)


	Array.from(arrayLike, x => x * x);
	// 等同于
	Array.from(arrayLike).map(x => x * x);

	Array.from([1, 2, 3], (x) => x * x)
	// [1, 4, 9]


	//2、Array.of()-------------------------------------------------------
	Array.of(3, 11, 8) // [3,11,8]
	Array.of(3) // [3]
	Array.of(3).length // 1

	Array() // []
	Array(3) // [, , ,]
	Array(3, 11, 8) // [3, 11, 8]

	//3、数组实例的copyWithin()-------------------------------------------------------
	//[1, 2, 3, 4, 5].copyWithin(0, 3)
	// [4, 5, 3, 4, 5]

	// 将3号位复制到0号位
	//[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
	// [4, 2, 3, 4, 5]

	// -2相当于3号位，-1相当于4号位
	//[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
	// [4, 2, 3, 4, 5]

	// 将3号位复制到0号位
	// [].copyWithin.call({length: 5, 3: 1}, 0, 3)
	// {0: 1, 3: 1, length: 5}

	// 将2号位到数组结束，复制到0号位
	var i32a = new Int32Array([1, 2, 3, 4, 5]);
	i32a.copyWithin(0, 2);
	// Int32Array [3, 4, 5, 4, 5]

	// 对于没有部署TypedArray的copyWithin方法的平台
	// 需要采用下面的写法
	[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
	// Int32Array [4, 2, 3, 4, 5]



	//4、数组实例的find()和findIndex()-------------------------------------------------------
	[1, 4, -5, 10].find((n) => n < 0)
	// -5
	// [1, 5, 10, 15].find(function(value, index, arr) {
	//   return value > 9;
	// }) // 10
	// [1, 5, 10, 15].findIndex(function(value, index, arr) {
	//   return value > 9;
	// }) // 2

	//5、数组实例的fill()-------------------------------------------------------
	// ['a', 'b', 'c'].fill(7)
	// // [7, 7, 7]

	// new Array(3).fill(7)
	// // [7, 7, 7]

	// ['a', 'b', 'c'].fill(7, 1, 2)
	// ['a', 7, 'c']

	//6、数组实例的entries()，keys()和values()------------------------------------------------------
	for (let index of ['a', 'b'].keys()) {
	  console.log(index);
	}
	// 0
	// 1

	// for (let elem of ['a', 'b'].values()) {
	//   console.log(elem);
	// }
	// // 'a'
	// // 'b'

	// for (let [index, elem] of ['a', 'b'].entries()) {
	//   console.log(index, elem);
	// }
	// // 0 "a"
	// // 1 "b"

	let letter = ['a', 'b', 'c'];
	let entries = letter.entries();
	console.log(entries.next().value); // [0, 'a']
	console.log(entries.next().value); // [1, 'b']
	console.log(entries.next().value); // [2, 'c']

	//7、数组实例的 includes()-------------------------------------------------------
	[1, 2, 3].includes(3, 3);  // false
	[1, 2, 3].includes(3, -1); // true



	//8、数组的空位-------------------------------------------------------
	// forEach方法
	[,'a'].forEach((x,i) => console.log(i)); // 1

	// filter方法
	['a',,'b'].filter(x => true) // ['a','b']

	// // every方法
	// [,'a'].every(x => x==='a') // true

	// // some方法
	// [,'a'].some(x => x !== 'a') // false

	// map方法
	// [,'a'].map(x => 1) // [,1]

	// join方法
	// [,'a',undefined,null].join('#') // "#a##"

	// toString方法
	// [,'a',undefined,null].toString() // ",a,,"


	Array.from(['a',,'b'])
	// [ "a", undefined, "b" ]

	//1、二进制和八进制表示法-------------------------------------------------------






/***/ })
/******/ ]);