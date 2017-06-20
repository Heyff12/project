'use strict';

var a = 1,
    b = 2,
    c = 3;
var head = 1,
    tail = [2, 3, 4];

console.log(head); // 1
console.log(tail); // [2, 3, 4]

var _ref = ['a'],
    x = _ref[0],
    y = _ref[1],
    z = _ref.slice(2);

console.log(x); // "a"
console.log(y); // undefined
console.log(z); // []


// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x) // "a"


var obj = {};
var arr = [];

var _foo$bar = { foo: 123, bar: true };
obj.prop = _foo$bar.foo;
arr[0] = _foo$bar.bar;


console.log(obj); // {prop:123}
console.log(arr); // [true]