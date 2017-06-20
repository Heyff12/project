'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//1、块级作用域---------------------------------------------
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();

var a = [];

var _loop = function _loop(_i) {
    a[_i] = function () {
        console.log(_i);
    };
};

for (var _i = 0; _i < 10; _i++) {
    _loop(_i);
}
a[6]();

//3、暂时性死区---------------------------------------------
if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    var tmp = void 0; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}

//块级作用域---------------------------------------------
// IIFE 写法
(function () {
    var tmp = 1;
})();

// 块级作用域写法
{
    var _tmp = 1;
}

// 函数声明语句
{
    var f = function f() {
        return _a;
    };

    var _a = 'secret';
}

// 函数表达式
{
    var _a2 = 'secret';
    var _f = function _f() {
        return _a2;
    };
}

//5、do表达式---------------------------------------------
// let x = do {
//         let t = f();
//         t * t + 1;
//     };


//综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。---------------------------------------------
// 方法一
typeof window !== 'undefined' ? window : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && typeof require === 'function' && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' ? global : undefined;

// 方法二
var getGlobal = function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('unable to locate global object');
};