var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

console.log(s1 === s2) // true

console.log(Symbol.for("bar") === Symbol.for("bar")) 
// true

console.log(Symbol("bar") === Symbol("bar")) 



var s3 = Symbol.for("fooo");
console.log(Symbol.keyFor(s3))  // "fooo"

var s4 = Symbol("foo0");
console.log(Symbol.keyFor(s4))  // undefined