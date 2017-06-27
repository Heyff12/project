//下面是一个模拟next方法返回值的例子。
var it = makeIterator(['a', 'b']);

console.log(it.next()) // { value: "a", done: false }
console.log(it.next()) // { value: "b", done: false }
console.log(it.next()) // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}

//next方法返回一个对象，表示当前数据成员的信息。
// 这个对象具有value和done两个属性，value属性返回当前位置的成员，
// done属性是一个布尔值，表示遍历是否结束，即是否还有必要再一次调用next方法。






let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next())  // { value: 'a', done: false }
console.log(iter.next())  // { value: 'b', done: false }
console.log(iter.next())  // { value: 'c', done: false }
console.log(iter.next())  // { value: undefined, done: true }


var someString = "hi";
console.log(typeof someString[Symbol.iterator])
// "function"

var iterator = someString[Symbol.iterator]();

console.log(iterator.next() ) // { value: "h", done: false }
console.log(iterator.next())  // { value: "i", done: false }
console.log(iterator.next())  // { value: undefined, done: true }



const arr1 = ['red', 'green', 'blue'];

for(let v of arr1) {
  console.log(v); // red green blue
}

const obj = {};
obj[Symbol.iterator] = arr1[Symbol.iterator].bind(arr1);

for(let v of obj) {
  console.log(v); // red green blue
}


var arr2 = ['a', 'b', 'c', 'd'];

for (let a in arr2) {
  console.log(a); // 0 1 2 3
}

for (let a of arr2) {
  console.log(a); // a b c d
}



let arr3 = [3, 5, 7];
arr3.foo = 'hello';

for (let i in arr3) {
  console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr3) {
  console.log(i); //  "3", "5", "7"
}


var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
  console.log(e);
}
// Gecko
// Trident
// Webkit

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262


let map2 = new Map().set('a', 1).set('b', 2);
for (let pair of map2) {
  console.log(pair);
}
// ['a', 1]
// ['b', 2]

for (let [key, value] of map2) {
  console.log(key + ' : ' + value);
}
// a : 1
// b : 2




// 字符串
let str = "hello";

for (let s of str) {
  console.log(s); // h e l l o
}

// DOM NodeList对象
let paras = document.querySelectorAll("p");

for (let p of paras) {
  p.classList.add("test");
}

// arguments对象
function printArgs() {
  for (let x of arguments) {
    console.log(x);
  }
}
printArgs('a', 'b');
// 'a'
// 'b'
























