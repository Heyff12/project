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

	//定义类
	class Point {
	  constructor(x, y) {
	    this.x = x;
	    this.y = y;
	  }

	  toString() {
	    return '(' + this.x + ', ' + this.y + ')';
	  }
	}
	class ColorPoint extends Point {
	  constructor(x, y, color) {
	    super(x, y); // 调用父类的constructor(x, y)
	    this.color = color;
	  }

	  toString() {
	    return this.color + ' ' + super.toString(); // 调用父类的toString()
	  }
	}




	class A {
	  constructor() {
	    console.log(new.target.name);
	  }
	}
	class B extends A {
	  constructor() {
	    super();
	  }
	}
	console.log(new A()) // A
	console.log(new B()) // B



	class A2 {
	  constructor() {
	    this.x = 1;
	  }
	  print() {
	    console.log(this.x);
	  }
	}

	class B2 extends A2 {
	  constructor() {
	    super();
	    this.x = 2;
	  }
	  m() {
	    super.print();
	  }
	}

	let b = new B2();
	b.m()// 2
	//上面代码中，super.print()虽然调用的是A.prototype.print()，但是A.prototype.print()会绑定子类B的this，导致输出的是2，而不是1。也就是说，实际上执行的是super.print.call(this)。






	class A3 {
	}

	class B3 extends A3 {
	}

	console.log(B3.__proto__ === A3) // true
	console.log(B3.prototype.__proto__ === A3.prototype) // true
	//上面代码中，子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性。
	//作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；
	//作为一个构造函数，子类（B）的原型（prototype属性）是父类的实例。
















































/***/ })
/******/ ]);