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










































