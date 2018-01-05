'use strict';

var _keyFor = require('babel-runtime/core-js/symbol/key-for');

var _keyFor2 = _interopRequireDefault(_keyFor);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _for = require('babel-runtime/core-js/symbol/for');

var _for2 = _interopRequireDefault(_for);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s1 = (0, _for2.default)('foo');
var s2 = (0, _for2.default)('foo');

console.log(s1 === s2);

console.log((0, _for2.default)("bar") === (0, _for2.default)("bar"));


console.log((0, _symbol2.default)("bar") === (0, _symbol2.default)("bar"));

var s3 = (0, _for2.default)("fooo");
console.log((0, _keyFor2.default)(s3));

var s4 = (0, _symbol2.default)("foo0");
console.log((0, _keyFor2.default)(s4));