let [a, b, c] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3, 4];
console.log(head) // 1
console.log(tail) // [2, 3, 4]

let [x, y, ...z] = ['a'];
console.log(x) // "a"
console.log(y) // undefined
console.log(z) // []



// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x) // "a"


let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

console.log(obj) // {prop:123}
console.log(arr) // [true]