'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Point = function () {
  function Point(x, y) {
    (0, _classCallCheck3.default)(this, Point);

    this.x = x;
    this.y = y;
  }

  (0, _createClass3.default)(Point, [{
    key: 'toString',
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);
  return Point;
}();

var ColorPoint = function (_Point) {
  (0, _inherits3.default)(ColorPoint, _Point);

  function ColorPoint(x, y, color) {
    (0, _classCallCheck3.default)(this, ColorPoint);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColorPoint.__proto__ || (0, _getPrototypeOf2.default)(ColorPoint)).call(this, x, y));

    _this.color = color;
    return _this;
  }

  (0, _createClass3.default)(ColorPoint, [{
    key: 'toString',
    value: function toString() {
      return this.color + ' ' + (0, _get3.default)(ColorPoint.prototype.__proto__ || (0, _getPrototypeOf2.default)(ColorPoint.prototype), 'toString', this).call(this);
    }
  }]);
  return ColorPoint;
}(Point);

var A = function A() {
  (0, _classCallCheck3.default)(this, A);

  console.log(new.target.name);
};

var B = function (_A) {
  (0, _inherits3.default)(B, _A);

  function B() {
    (0, _classCallCheck3.default)(this, B);
    return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));
  }

  return B;
}(A);

console.log(new A());
console.log(new B());
var A2 = function () {
  function A2() {
    (0, _classCallCheck3.default)(this, A2);

    this.x = 1;
  }

  (0, _createClass3.default)(A2, [{
    key: 'print',
    value: function print() {
      console.log(this.x);
    }
  }]);
  return A2;
}();

var B2 = function (_A2) {
  (0, _inherits3.default)(B2, _A2);

  function B2() {
    (0, _classCallCheck3.default)(this, B2);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (B2.__proto__ || (0, _getPrototypeOf2.default)(B2)).call(this));

    _this3.x = 2;
    return _this3;
  }

  (0, _createClass3.default)(B2, [{
    key: 'm',
    value: function m() {
      (0, _get3.default)(B2.prototype.__proto__ || (0, _getPrototypeOf2.default)(B2.prototype), 'print', this).call(this);
    }
  }]);
  return B2;
}(A2);

var b = new B2();
b.m();
var A3 = function A3() {
  (0, _classCallCheck3.default)(this, A3);
};

var B3 = function (_A3) {
  (0, _inherits3.default)(B3, _A3);

  function B3() {
    (0, _classCallCheck3.default)(this, B3);
    return (0, _possibleConstructorReturn3.default)(this, (B3.__proto__ || (0, _getPrototypeOf2.default)(B3)).apply(this, arguments));
  }

  return B3;
}(A3);

console.log(B3.__proto__ === A3);
console.log(B3.prototype.__proto__ === A3.prototype);