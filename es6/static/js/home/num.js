'use strict';

var _hypot = require('babel-runtime/core-js/math/hypot');

var _hypot2 = _interopRequireDefault(_hypot);

var _sign = require('babel-runtime/core-js/math/sign');

var _sign2 = _interopRequireDefault(_sign);

var _trunc = require('babel-runtime/core-js/math/trunc');

var _trunc2 = _interopRequireDefault(_trunc);

var _minSafeInteger = require('babel-runtime/core-js/number/min-safe-integer');

var _minSafeInteger2 = _interopRequireDefault(_minSafeInteger);

var _maxSafeInteger = require('babel-runtime/core-js/number/max-safe-integer');

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _parseFloat = require('babel-runtime/core-js/number/parse-float');

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _parseInt = require('babel-runtime/core-js/number/parse-int');

var _parseInt2 = _interopRequireDefault(_parseInt);

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

var _isFinite = require('babel-runtime/core-js/number/is-finite');

var _isFinite2 = _interopRequireDefault(_isFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(503 === 503);
console.log(503 === 503);

console.log(Number('0b111'));
console.log(Number('0o10'));
(0, _isFinite2.default)(15);
(0, _isFinite2.default)(0.8);
(0, _isFinite2.default)(NaN);
(0, _isFinite2.default)(Infinity);
(0, _isFinite2.default)(-Infinity);
(0, _isFinite2.default)('foo');
(0, _isFinite2.default)('15');
(0, _isFinite2.default)(true);
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

(0, _isNan2.default)(NaN);
(0, _isNan2.default)(15);
(0, _isNan2.default)('15');
(0, _isNan2.default)(true);
(0, _isNan2.default)(9 / NaN);
(0, _isNan2.default)('true' / 0);
(0, _isNan2.default)('true' / 'true')(function (global) {
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
(0, _isFinite2.default)(25);
(0, _isFinite2.default)("25");

isNaN(NaN);
isNaN("NaN");
(0, _isNan2.default)(NaN);
(0, _isNan2.default)("NaN");
(0, _isNan2.default)(1);
parseInt('12.34');
parseFloat('123.45#');
(0, _parseInt2.default)('12.34');
(0, _parseFloat2.default)('123.45#');

_parseInt2.default === parseInt;
_parseFloat2.default === parseFloat;
(0, _isInteger2.default)(25);
(0, _isInteger2.default)(25.0);
(0, _isInteger2.default)(25.1);
(0, _isInteger2.default)("15");
(0, _isInteger2.default)(true)(function (global) {
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

_maxSafeInteger2.default === Math.pow(2, 53) - 1;
_maxSafeInteger2.default === 9007199254740991;

_minSafeInteger2.default === -_maxSafeInteger2.default;
_minSafeInteger2.default === -9007199254740991;
(0, _trunc2.default)(4.1);
(0, _trunc2.default)(4.9);
(0, _trunc2.default)(-4.1);
(0, _trunc2.default)(-4.9);
(0, _trunc2.default)(-0.1234);

(0, _trunc2.default)('123.456');
(0, _trunc2.default)(NaN);
(0, _trunc2.default)('foo');
(0, _trunc2.default)();

Math.trunc = _trunc2.default || function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};


(0, _sign2.default)(-5);
(0, _sign2.default)(5);
(0, _sign2.default)(0);
(0, _sign2.default)(-0);
(0, _sign2.default)(NaN);
(0, _sign2.default)('foo');
(0, _sign2.default)();

Math.sign = _sign2.default || function (x) {
  x = +x;
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};

(0, _hypot2.default)(3, 4);
(0, _hypot2.default)(3, 4, 5);
(0, _hypot2.default)();
(0, _hypot2.default)(NaN);
(0, _hypot2.default)(3, 4, 'foo');
(0, _hypot2.default)(3, 4, '5');
(0, _hypot2.default)(-3);