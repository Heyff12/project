'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: 'toString',
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);

  return Point;
}();

var ColorPoint = function (_Point) {
  _inherits(ColorPoint, _Point);

  function ColorPoint(x, y, color) {
    _classCallCheck(this, ColorPoint);

    var _this = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

    _this.color = color;
    return _this;
  }

  _createClass(ColorPoint, [{
    key: 'toString',
    value: function toString() {
      return this.color + ' ' + _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this);
    }
  }]);

  return ColorPoint;
}(Point);

var A = function A() {
  _classCallCheck(this, A);

  console.log(new.target.name);
};

var B = function (_A) {
  _inherits(B, _A);

  function B() {
    _classCallCheck(this, B);

    return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this));
  }

  return B;
}(A);

console.log(new A());
console.log(new B());
var A2 = function () {
  function A2() {
    _classCallCheck(this, A2);

    this.x = 1;
  }

  _createClass(A2, [{
    key: 'print',
    value: function print() {
      console.log(this.x);
    }
  }]);

  return A2;
}();

var B2 = function (_A2) {
  _inherits(B2, _A2);

  function B2() {
    _classCallCheck(this, B2);

    var _this3 = _possibleConstructorReturn(this, (B2.__proto__ || Object.getPrototypeOf(B2)).call(this));

    _this3.x = 2;
    return _this3;
  }

  _createClass(B2, [{
    key: 'm',
    value: function m() {
      _get(B2.prototype.__proto__ || Object.getPrototypeOf(B2.prototype), 'print', this).call(this);
    }
  }]);

  return B2;
}(A2);

var b = new B2();
b.m();
var A3 = function A3() {
  _classCallCheck(this, A3);
};

var B3 = function (_A3) {
  _inherits(B3, _A3);

  function B3() {
    _classCallCheck(this, B3);

    return _possibleConstructorReturn(this, (B3.__proto__ || Object.getPrototypeOf(B3)).apply(this, arguments));
  }

  return B3;
}(A3);

console.log(B3.__proto__ === A3);
console.log(B3.prototype.__proto__ === A3.prototype);