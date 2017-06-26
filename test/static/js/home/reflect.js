'use strict';

var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    console.log(this.foo + this.bar);
    return this.foo + this.bar;
  }
};

var myReceiverObject = {
  foo: 4,
  bar: 4
};

Reflect.get(myObject, 'baz', myReceiverObject);