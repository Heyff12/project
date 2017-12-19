//1、函数参数的默认值-------------------------------------------------------
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

function log1(x, y = 'World') {
  console.log(x, y);
}

log1('Hello') // Hello World
log1('Hello', 'China') // Hello China
log1('Hello', '') // Hello

// function foo({x, y = 5}) {
//   console.log(x, y);
// }

// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // TypeError: Cannot read property 'x' of undefined


// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

//2、rest 参数-------------------------------------------------------

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

console.log(add(2, 5, 3)) // 10


// arguments变量的写法
// function sortNumbers() {
//   return Array.prototype.slice.call(arguments).sort();
// }

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();

function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3);
console.log(a);

//3、扩展运算符-------------------------------------------------------
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5


// ES5的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f1(x, y, z) {
  // ...
}
var args1 = [0, 1, 2];
f(...args1);

// ES5的写法
var aaa=Math.max.apply(null, [14, 3, 77])
console.log(aaa);
// ES6的写法
var aaa1=Math.max(...[14, 3, 77])
console.log(aaa1);
// 等同于
var aaa2=Math.max(14, 3, 77);
console.log(aaa2);

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
console.log(arr1.concat(arr2, arr3));
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
console.log([...arr1, ...arr2, ...arr3])
// [ 'a', 'b', 'c', 'd', 'e' ]

let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr12 = [...map.keys()]; // [1, 2, 3]
console.log(arr12);
//6、箭头函数------------------------------------------------------

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0






//8、尾调用优化-------------------------------------------------------

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

var zong=factorial(5, 1) // 120
console.log(zong);

//尾递归优化过的 Fibonacci 数列实现如下。
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

// Fibonacci2(100) // 573147844013817200000
// Fibonacci2(1000) // 7.0330367711422765e+208
// Fibonacci2(10000) // Infinity
var fib=Fibonacci2(100)
console.log(fib);


















