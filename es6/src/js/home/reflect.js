// // 老写法
// try {
//   Object.defineProperty(target, property, attributes);
//   // success
// } catch (e) {
//   // failure
// }

// // 新写法
// if (Reflect.defineProperty(target, property, attributes)) {
//   // success
// } else {
//   // failure
// }




var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
  	console.log(this.foo + this.bar);
    return this.foo + this.bar;
  },
};

var myReceiverObject = {
  foo: 4,
  bar: 4,
};

Reflect.get(myObject, 'baz', myReceiverObject) // 8

































