'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    _classCallCheck(this, Point2);

    this.x = x;
    this.y = y;
  }

  _createClass(Point2, [{
    key: 'toString',
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);

  return Point2;
}();

console.log(typeof Point2 === 'undefined' ? 'undefined' : _typeof(Point2));
console.log(Point2 === Point2.prototype.constructor);
var point2 = new Point(2, 3);

console.log(point2.toString());
console.log(point2.hasOwnProperty('x'));
console.log(point2.hasOwnProperty('y'));
console.log(point2.hasOwnProperty('toString'));
console.log(point2.__proto__.hasOwnProperty('toString'));

Object.assign(Point2.prototype, {
  toString2: function toString2() {},
  toValue: function toValue() {}
});

var Bar = function () {
  function Bar() {
    _classCallCheck(this, Bar);
  }

  _createClass(Bar, [{
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
    _classCallCheck(this, MyClass);
  }

  _createClass(MyClass, [{
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
    _classCallCheck(this, Foo2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.args = args;
  }

  _createClass(Foo2, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, arg;

      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 3;
              _iterator = this.args[Symbol.iterator]();

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

  for (var _iterator2 = new Foo2('hello', 'world')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
    _classCallCheck(this, Foo3);
  }

  _createClass(Foo3, null, [{
    key: 'classMethod',
    value: function classMethod() {
      return 'hello';
    }
  }]);

  return Foo3;
}();

console.log(Foo3.classMethod());

var foo3 = new Foo3();