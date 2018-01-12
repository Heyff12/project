'use strict';

var _set = require('babel-runtime/core-js/reflect/set');

var _set2 = _interopRequireDefault(_set);

var _get = require('babel-runtime/core-js/reflect/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = new Proxy({}, {
  get: function get(target, key, receiver) {
    console.log('getting ' + key + '!');
    return (0, _get2.default)(target, key, receiver);
  },
  set: function set(target, key, value, receiver) {
    console.log('setting ' + key + '!');
    return (0, _set2.default)(target, key, value, receiver);
  }
});

obj.count = 1;

++obj.count;


var handler = {
  get: function get(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function apply(target, thisBinding, args) {
    return args[0];
  },

  construct: function construct(target, args) {
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);

console.log(fproxy(1, 2));
console.log(new fproxy(1, 2));
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo);

var stu1 = { name: '张三', score: 59 };
var stu2 = { name: '李四', score: 99 };

var handler1 = {
  has: function has(target, prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(target.name + ' \u4E0D\u53CA\u683C');
      return false;
    }
    return prop in target;
  }
};

var oproxy1 = new Proxy(stu1, handler1);
var oproxy2 = new Proxy(stu2, handler1);

'score' in oproxy1;


'score' in oproxy2;


for (var a in oproxy1) {
  console.log(oproxy1[a]);
}


for (var b in oproxy2) {
  console.log(oproxy2[b]);
}


var p = new Proxy(function () {}, {
  construct: function construct(target, args) {
    console.log('called: ' + args.join(', '));
    return { value: args[0] * 10 };
  }
});

new p(1).value;