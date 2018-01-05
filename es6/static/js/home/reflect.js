'use strict';

var _get = require('babel-runtime/core-js/reflect/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

(0, _get2.default)(myObject, 'baz', myReceiverObject);