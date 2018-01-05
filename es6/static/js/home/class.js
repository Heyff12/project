'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator3 = require('babel-runtime/core-js/symbol/iterator');

var _iterator4 = _interopRequireDefault(_iterator3);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log(p);
console.log(p.toString());

var Point2 = function () {
  function Point2(x, y) {
    (0, _classCallCheck3.default)(this, Point2);

    this.x = x;
    this.y = y;
  }

  (0, _createClass3.default)(Point2, [{
    key: 'toString',
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);
  return Point2;
}();

console.log(typeof Point2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(Point2));
console.log(Point2 === Point2.prototype.constructor);
var point2 = new Point(2, 3);

console.log(point2.toString());
console.log(point2.hasOwnProperty('x'));
console.log(point2.hasOwnProperty('y'));
console.log(point2.hasOwnProperty('toString'));
console.log(point2.__proto__.hasOwnProperty('toString'));

(0, _assign2.default)(Point2.prototype, {
  toString2: function toString2() {},
  toValue: function toValue() {}
});

var Bar = function () {
  function Bar() {
    (0, _classCallCheck3.default)(this, Bar);
  }

  (0, _createClass3.default)(Bar, [{
    key: 'doStuff',
    value: function doStuff() {
      console.log('stuff');
    }
  }]);
  return Bar;
}();

var b = new Bar();
b.doStuff();

var p1 = new Point(2, 3);
var p2 = new Point(3, 2);

p1.__proto__.printName = function () {
  return 'Oops';
};

console.log(p1.printName());
console.log(p2.printName());

var p3 = new Point(4, 2);
console.log(p3.printName());
var MyClass = function () {
  function MyClass() {
    (0, _classCallCheck3.default)(this, MyClass);
  }

  (0, _createClass3.default)(MyClass, [{
    key: 'prop',
    get: function get() {
      return 'getter';
    },
    set: function set(value) {
      console.log('setter: ' + value);
    }
  }]);
  return MyClass;
}();

var inst = new MyClass();

console.log(inst.prop = 123);


console.log(inst.prop);

var Foo2 = function () {
  function Foo2() {
    (0, _classCallCheck3.default)(this, Foo2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.args = args;
  }

  (0, _createClass3.default)(Foo2, [{
    key: _iterator4.default,
    value: _regenerator2.default.mark(function value() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, arg;

      return _regenerator2.default.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 3;
              _iterator = (0, _getIterator3.default)(this.args);

            case 5:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 12;
                break;
              }

              arg = _step.value;
              _context.next = 9;
              return arg;

            case 9:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 12:
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError) {
                _context.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
            case 'end':
              return _context.stop();
          }
        }
      }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })
  }]);
  return Foo2;
}();

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {

  for (var _iterator2 = (0, _getIterator3.default)(new Foo2('hello', 'world')), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var x = _step2.value;

    console.log(x);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var Foo3 = function () {
  function Foo3() {
    (0, _classCallCheck3.default)(this, Foo3);
  }

  (0, _createClass3.default)(Foo3, null, [{
    key: 'classMethod',
    value: function classMethod() {
      return 'hello';
    }
  }]);
  return Foo3;
}();

console.log(Foo3.classMethod());

var foo3 = new Foo3();