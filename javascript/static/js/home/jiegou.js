'use strict';

var a = 1,
    b = 2,
    c = 3;
var head = 1,
    tail = [2, 3, 4];

console.log(head);
console.log(tail);
var _ref = ['a'],
    x = _ref[0],
    y = _ref[1],
    z = _ref.slice(2);

console.log(x);
console.log(y);
console.log(z);

var obj = {};
var arr = [];

var _foo$bar = { foo: 123, bar: true };
obj.prop = _foo$bar.foo;
arr[0] = _foo$bar.bar;


console.log(obj);
console.log(arr);