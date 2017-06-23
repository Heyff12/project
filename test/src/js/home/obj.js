//4、Object.is()------------------------------------------
console.log(Object.is('foo', 'foo'))
// true
console.log(Object.is({}, {}))
// false



//5、Object.assign()------------------------------------------

var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target) // {a:1, b:2, c:3}


//9、Object.keys()，Object.values()，Object.entries()------------------------------------------

let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}







