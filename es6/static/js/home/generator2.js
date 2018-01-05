'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [gen, gen1].map(_regenerator2.default.mark);

function gen(x) {
  var y;
  return _regenerator2.default.wrap(function gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return x + 2;

        case 2:
          y = _context.sent;
          return _context.abrupt('return', y);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var g = gen(1);
console.log(g.next());
console.log(g.next(2));
console.log(g.next(8));

function gen1(x) {
  var y;
  return _regenerator2.default.wrap(function gen1$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return x + 2;

        case 3:
          y = _context2.sent;
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2['catch'](0);

          console.log(_context2.t0);

        case 9:
          return _context2.abrupt('return', y);

        case 10:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 6]]);
}

var g1 = gen1(1);
console.log(g1.next());
console.log(g1.throw('出错了'));


var x = 1;
function f1(m) {
  return m * 2;
}

f1(x + 5);

var thunk = function thunk() {
  return x + 5;
};

function f2(thunk) {
  return thunk() * 2;
}

var Thunk2 = function Thunk2(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (callback) {
      return fn.call.apply(fn, [this].concat(args, [callback]));
    };
  };
};
function f(a, cb) {
  cb(a);
}
var ft = Thunk2(f);

ft(1)(console.log);

function thunkify(fn) {
  return function () {
    var args = new Array(arguments.length);
    var ctx = this;

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function (done) {
      var called;

      args.push(function () {
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    };
  };
};