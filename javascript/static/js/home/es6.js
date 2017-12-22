'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

if (true) {
    tmp = 'abc';
    console.log(tmp);

    var tmp = void 0;
    console.log(tmp);

    tmp = 123;
    console.log(tmp);
}

(function () {
    var tmp = 1;
})();

{
    var _tmp = 1;
}

{
    var f = function f() {
        return _a;
    };

    var _a = 'secret';
}

{
    var _a2 = 'secret';
    var _f = function _f() {
        return _a2;
    };
}

typeof window !== 'undefined' ? window : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && typeof require === 'function' && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' ? global : undefined;

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