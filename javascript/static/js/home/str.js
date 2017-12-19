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

	//var $ = require('../plug/zepto.min.js');
	//import $ from '../plug/zepto.min.js';


	console.log("\u{20BB7}")
	    // "𠮷"

	/////JavaScript 共有6种方法可以表示一个字符。------------------------
	console.log('\z' === 'z') // true
	    //console.log('\172' === 'z') // true
	console.log('\x7A' === 'z') // true
	console.log('\u007A' === 'z') // true
	console.log('\u{7A}' === 'z') // true

	/////2、codePointAt()--------------------------------------------
	var s = "𠮷";

	console.log(s.length) // 2
	console.log(s.charAt(0)) // ''
	console.log(s.charAt(1)) // ''
	console.log(s.charCodeAt(0)) // 55362
	console.log(s.charCodeAt(1)) // 57271


	var s = '𠮷a';

	console.log(s.codePointAt(0)) // 134071
	console.log(s.codePointAt(1)) // 57271

	console.log(s.codePointAt(2)) // 97

	/////3、String.fromCodePoint()--------------------------------------------
	console.log(String.fromCodePoint(0x20BB7))
	    // "𠮷"
	console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y')
	    // true


	/////4、字符串的遍历器接口--------------------------------------------
	var text = String.fromCodePoint(0x20BB7);

	for (let i = 0; i < text.length; i++) {
	    console.log(text[i]);
	}
	// " "
	// " "

	for (let i of text) {
	    console.log(i);
	}
	// "𠮷"


	/////5、at()--------------------------------------------
	console.log('abc'.charAt(0)) // "a"
	console.log('𠮷'.charAt(0)) // "\uD842"
	    // console.log('abc'.at(0)) // "a"
	    // console.log('𠮷'.at(0)) // "𠮷"

	/////7、includes(), startsWith(), endsWith()--------------------------------------------
	var s = 'Hello world!';

	s.startsWith('Hello') // true
	s.endsWith('!') // true
	s.includes('o') // true


	var s = 'Hello world!';

	s.startsWith('world', 6) // true
	s.endsWith('Hello', 5) // true
	s.includes('Hello', 6) // false

	/////8、repeat()--------------------------------------------

	'x'.repeat(3) // "xxx"
	'hello'.repeat(2) // "hellohello"
	'na'.repeat(0) // ""

	/////9、padStart()，padEnd()--------------------------------------------
	'x'.padStart(5, 'ab') // 'ababx'
	'x'.padStart(4, 'ab') // 'abax'

	'x'.padEnd(5, 'ab') // 'xabab'
	'x'.padEnd(4, 'ab') // 'xaba'

	/////10、模板字符串--------------------------------------------
	console.log(`string text line 1
	string text line 2`);

	// 字符串中嵌入变量
	var name = "Bob",
	    time = "today";
	console.log(`Hello ${name}, how are you ${time}?`)

	document.getElementById('list').innerHTML=`
	<ul>
	  <li>first--${name}</li>
	  <li>second</li>
	  <li>first22--${time}</li>
	  <li>second44</li>
	</ul>
	`.trim();


	// 写法一
	let str = 'return ' + '`Hello ${name}!`';
	let func = new Function('name', str);
	console.log(func('Jack')) // "Hello Jack!"

	// 写法二
	let str1 = '(name) => `Hello ${name}!`';
	let func1 = eval.call(null, str1);
	console.log(func1('Jack')) // "Hello Jack!"


/***/ })
/******/ ]);