'use strict';

console.log(503 === 503);
console.log(503 === 503);

console.log(Number('0b111'));
console.log(Number('0o10'));
Number.isFinite(15);
Number.isFinite(0.8);
Number.isFinite(NaN);
Number.isFinite(Infinity);
Number.isFinite(-Infinity);
Number.isFinite('foo');
Number.isFinite('15');
Number.isFinite(true);
(function (global) {
  var global_isFinite = global.isFinite;

  Object.defineProperty(Number, 'isFinite', {
    value: function isFinite(value) {
      return typeof value === 'number' && global_isFinite(value);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
})(undefined);

Number.isNaN(NaN);
Number.isNaN(15);
Number.isNaN('15');
Number.isNaN(true);
Number.isNaN(9 / NaN);
Number.isNaN('true' / 0);
Number.isNaN('true' / 'true')(function (global) {
  var global_isNaN = global.isNaN;

  Object.defineProperty(Number, 'isNaN', {
    value: function isNaN(value) {
      return typeof value === 'number' && global_isNaN(value);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
})(undefined);

isFinite(25);
isFinite("25");
Number.isFinite(25);
Number.isFinite("25");

isNaN(NaN);
isNaN("NaN");
Number.isNaN(NaN);
Number.isNaN("NaN");
Number.isNaN(1);
parseInt('12.34');
parseFloat('123.45#');
Number.parseInt('12.34');
Number.parseFloat('123.45#');

Number.parseInt === parseInt;
Number.parseFloat === parseFloat;
Number.isInteger(25);
Number.isInteger(25.0);
Number.isInteger(25.1);
Number.isInteger("15");
Number.isInteger(true)(function (global) {
  var floor = Math.floor,
      isFinite = global.isFinite;

  Object.defineProperty(Number, 'isInteger', {
    value: function isInteger(value) {
      return typeof value === 'number' && isFinite(value) && floor(value) === value;
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
})(undefined);

Math.pow(2, 53);

9007199254740992;
9007199254740993;

Math.pow(2, 53) === Math.pow(2, 53) + 1;

Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1;
Number.MAX_SAFE_INTEGER === 9007199254740991;

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER === -9007199254740991;
Math.trunc(4.1);
Math.trunc(4.9);
Math.trunc(-4.1);
Math.trunc(-4.9);
Math.trunc(-0.1234);

Math.trunc('123.456');
Math.trunc(NaN);
Math.trunc('foo');
Math.trunc();

Math.trunc = Math.trunc || function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};


Math.sign(-5);
Math.sign(5);
Math.sign(0);
Math.sign(-0);
Math.sign(NaN);
Math.sign('foo');
Math.sign();

Math.sign = Math.sign || function (x) {
  x = +x;
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};

Math.hypot(3, 4);
Math.hypot(3, 4, 5);
Math.hypot();
Math.hypot(NaN);
Math.hypot(3, 4, 'foo');
Math.hypot(3, 4, '5');
Math.hypot(-3);
Math.pow(2, 2);
Math.pow(2, 3);

var a = 1.5;
a = Math.pow(a, 2);


var b = 4;
b = Math.pow(b, 3)