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

	function Point(x, y) {
	  this.x = x;
	  this.y = y;
	}

	Point.prototype.toString = function () {
	  return '(' + this.x + ', ' + this.y + ')';
	};

	var p = new Point(1, 2);
	console.log(p);
	console.log(p.toString());


	//定义类
	class Point2 {
	  constructor(x, y) {
	    this.x = x;
	    this.y = y;
	  }

	  toString() {
	    return '(' + this.x + ', ' + this.y + ')';
	  }
	}
	console.log(typeof Point2); // "function"
	console.log(Point2 === Point2.prototype.constructor); // true
	var point2 = new Point(2, 3);

	console.log(point2.toString()); // (2, 3)
	console.log(point2.hasOwnProperty('x')); // true
	console.log(point2.hasOwnProperty('y')); // true
	console.log(point2.hasOwnProperty('toString')); // false
	console.log(point2.__proto__.hasOwnProperty('toString')); // true

	Object.assign(Point2.prototype, {
	  toString2(){},
	  toValue(){}
	});

	class Bar {
	  doStuff() {
	    console.log('stuff');
	  }
	}

	var b = new Bar();
	b.doStuff() // "stuff"



	var p1 = new Point(2,3);
	var p2 = new Point(3,2);

	p1.__proto__.printName = function () { return 'Oops' };

	console.log(p1.printName()) // "Oops"
	console.log(p2.printName()) // "Oops"

	var p3 = new Point(4,2);
	console.log(p3.printName()) // "Oops"


	class MyClass {
	  constructor() {
	    // ...
	  }
	  get prop() {
	    return 'getter';
	  }
	  set prop(value) {
	    console.log('setter: '+value);
	  }
	}

	let inst = new MyClass();

	console.log(inst.prop = 123);
	// setter: 123

	console.log(inst.prop)
	// 'getter'
	//上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。





	class Foo2 {
	  constructor(...args) {
	    this.args = args;
	  }
	  * [Symbol.iterator]() {
	    for (let arg of this.args) {
	      yield arg;
	    }
	  }
	}

	for (let x of new Foo2('hello', 'world')) {
	  console.log(x);
	}
	// hello
	// world

	class Foo3 {
	  static classMethod() {
	    return 'hello';
	  }
	}

	console.log(Foo3.classMethod()) // 'hello'

	var foo3 = new Foo3();
	//foo3.classMethod()
	// TypeError: foo.classMethod is not a function







































/***/ })
/******/ ]);