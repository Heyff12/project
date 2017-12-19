function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
// { value: 'hello', done: false }

console.log(hw.next());
// { value: 'world', done: false }

console.log(hw.next());
// { value: 'ending', done: true }

console.log(hw.next());
// { value: undefined, done: true }




var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}
// 1, 2, 3, 4, 5, 6



var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterable]) // [1, 2, 3]


function* fest() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = fest();

console.log(g.next()) // { value: 0, done: false }
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.next()) // { value: 3, done: false }
console.log(g.next(true)) // { value: 0, done: false }
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }



function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5


//下面是一个利用 Generator 函数和for...of循环，实现斐波那契数列的例子。---
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 30) break;
  console.log(n);
}

// 利用for...of循环，可以写出遍历任意对象（object）的方法。
// 原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，
// 通过 Generator 函数为它加上这个接口，就可以用了。
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe

function* objectEntries1() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let jane1 = { first: 'Jane', last: 'Doe' };

jane1[Symbol.iterator] = objectEntries1;

for (let [key, value] of jane1) {
  console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe


function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
 console.log([...numbers()]); // [1, 2]

// Array.from 方法
 console.log(Array.from(numbers())); // [1, 2]

// 解构赋值
let [x, y] = numbers();
 console.log(x); // 1
 console.log(y); // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2

var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b


//throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法。
var gen = function* gen(){
  try {
    yield console.log('a');
  } catch (e) {
    // ...
  }
  yield console.log('b');
  yield console.log('c');
}

var g = gen();
g.next() // a
g.throw() // b
g.next() // c


function* gtest() {
  yield 1;
  console.log('throwing an exception');
  throw new Error('generator broke!');
  yield 2;
  yield 3;
}

function log(generator) {
  var v;
  console.log('starting generator');
  try {
    v = generator.next();
    console.log('第一次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第二次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第三次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  console.log('caller done');
}

log(gtest());
// starting generator
// 第一次运行next方法 { value: 1, done: false }
// throwing an exception
// 捕捉错误 { value: 1, done: false }
// 第三次运行next方法 { value: undefined, done: true }
// caller done

// 上面代码一共三次运行next方法，第二次运行的时候会抛出错误，
// 然后第三次运行的时候，Generator 函数就已经结束了，不再执行下去了。


function* gen2() {
  yield 1;
  yield 2;
  yield 3;
}

var g2 = gen2();

console.log(g2.next())        // { value: 1, done: false }
console.log(g2.return('foo')) // { value: "foo", done: true }
console.log(g2.next() )       // { value: undefined, done: true }


// 如果 Generator 函数内部有try...finally代码块，
// 那么return方法会推迟到finally代码块执行完再执行。
function* numbers2 () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers2();
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.return(7)) // { value: 4, done: false }
console.log(g.next()) // { value: 5, done: false }
console.log(g.next()) // { value: 7, done: true }


function* inner() {
  yield 'hello!';
}

function* outer1() {
  yield 'open';
  yield inner();
  yield 'close';
}

var gen = outer1()
console.log(gen.next().value) // "open"
console.log(gen.next().value) // 返回一个遍历器对象
console.log(gen.next().value) // "close"

function* outer2() {
  yield 'open'
  yield* inner()
  yield 'close'
}

var gen = outer2()
console.log(gen.next().value) // "open"
console.log(gen.next().value) // "hello!"
console.log(gen.next().value) // "close"

//上面例子中，outer2使用了yield*，outer1没使用。结果就是，outer1返回一个遍历器对象，outer2返回该遍历器对象的内部值。

function *foo3() {
  yield 2;
  yield 3;
  return "foo";
}

function *bar3() {
  yield 1;
  var v = yield *foo3();
  console.log( "v: " + v );
  yield 4;
}

var it = bar3();

console.log(it.next())
// {value: 1, done: false}
console.log(it.next())
// {value: 2, done: false}
console.log(it.next())
// {value: 3, done: false}
console.log(it.next());
// "v: foo"
// {value: 4, done: false}
console.log(it.next())
// {value: undefined, done: true}


function* genFuncWithReturn() {
  yield 'a';
  yield 'b';
  return 'The result';
}
function* logReturned(genObj) {
  let result = yield* genObj;
  console.log(result);
}

console.log([...logReturned(genFuncWithReturn())])
// The result
// 值为 [ 'a', 'b' ]




function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree)) {
  console.log(x);
}
// a
// b
// c
// d
// e


//下面是一个稍微复杂的例子，使用yield*语句遍历完全二叉树。--------
// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree2(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// 下面生成二叉树
function make(array) {
  // 判断是否为叶节点
  if (array.length == 1) return new Tree2(null, array[0], null);
  return new Tree2(make(array[0]), array[1], make(array[2]));
}
let tree3 = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree3)) {
  result.push(node);
}
console.log(result);
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']


function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
var obj = {};
var f = F.call(obj);

console.log(f.next());  // Object {value: 2, done: false}
console.log(f.next());  // Object {value: 3, done: false}
console.log(f.next());  // Object {value: undefined, done: true}

console.log(obj.a) // 1
console.log(obj.b) // 2
console.log(obj.c) // 3

//Generator 是实现状态机的最佳结构。比如，下面的clock函数就是一个状态机。-----
var ticking = true;
var clock = function() {
  if (ticking)
    console.log('Tick!');
  else
    console.log('Tock!');
  ticking = !ticking;
}
clock();
clock();
clock();
clock();
clock();
clock();


var clock2 = function* () {
  while (true) {
    console.log('Tick!');
    yield;
    console.log('Tock!');
    yield;
  }
};
clock2().next();
clock2().next();
clock2().next();
clock2().next();
clock2().next();
clock2().next();

//下面是另一个例子，通过 Generator 函数逐行读取文本文件。

// function* numbers5() {
//   let file = new FileReader("numbers.txt");
//   try {
//     while(!file.eof) {
//       yield parseInt(file.readLine(), 10);
//     }
//   } finally {
//     file.close();
//   }
// }
// var filef=numbers5();
// console.log(filef.next());
// console.log(filef.next());
// console.log(filef.next());
// console.log(filef.next());
// console.log(filef.next());
// console.log(filef.next());



function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}

let myObj = { foo: 3, bar: 7 };

for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}

// foo 3
// bar 7













