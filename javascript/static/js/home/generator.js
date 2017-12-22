'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = [helloWorldGenerator, fest, foo, fibonacci, objectEntries, objectEntries1, numbers, gtest, gen2, numbers2, inner, outer1, outer2, foo3, bar3, genFuncWithReturn, logReturned, iterTree, inorder, F, iterEntries].map(regeneratorRuntime.mark);

function helloWorldGenerator() {
  return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'hello';

        case 2:
          _context.next = 4;
          return 'world';

        case 4:
          return _context.abrupt('return', 'ending');

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var hw = helloWorldGenerator();
console.log(hw.next());


console.log(hw.next());


console.log(hw.next());


console.log(hw.next());


var arr = [1, [[2, 3], 4], [5, 6]];

var flat = regeneratorRuntime.mark(function flat(a) {
  var length, i, item;
  return regeneratorRuntime.wrap(function flat$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          length = a.length;
          i = 0;

        case 2:
          if (!(i < length)) {
            _context2.next = 13;
            break;
          }

          item = a[i];

          if (!(typeof item !== 'number')) {
            _context2.next = 8;
            break;
          }

          return _context2.delegateYield(flat(item), 't0', 6);

        case 6:
          _context2.next = 10;
          break;

        case 8:
          _context2.next = 10;
          return item;

        case 10:
          i++;
          _context2.next = 2;
          break;

        case 13:
        case 'end':
          return _context2.stop();
      }
    }
  }, flat, this);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = flat(arr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var f = _step.value;

    console.log(f);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var myIterable = {};
myIterable[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return 1;

        case 2:
          _context3.next = 4;
          return 2;

        case 4:
          _context3.next = 6;
          return 3;

        case 6:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee, this);
});

console.log([].concat(_toConsumableArray(myIterable)));

function fest() {
  var i, reset;
  return regeneratorRuntime.wrap(function fest$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          i = 0;

        case 1:
          if (!true) {
            _context4.next = 9;
            break;
          }

          _context4.next = 4;
          return i;

        case 4:
          reset = _context4.sent;

          if (reset) {
            i = -1;
          }

        case 6:
          i++;
          _context4.next = 1;
          break;

        case 9:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[1], this);
}

var g = fest();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next(true));
console.log(g.next());
console.log(g.next());

function foo() {
  return regeneratorRuntime.wrap(function foo$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return 1;

        case 2:
          _context5.next = 4;
          return 2;

        case 4:
          _context5.next = 6;
          return 3;

        case 6:
          _context5.next = 8;
          return 4;

        case 8:
          _context5.next = 10;
          return 5;

        case 10:
          return _context5.abrupt('return', 6);

        case 11:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[2], this);
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = foo()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var v = _step2.value;

    console.log(v);
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

function fibonacci() {
  var prev, curr, _ref;

  return regeneratorRuntime.wrap(function fibonacci$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          prev = 0, curr = 1;

        case 1:
          _ref = [curr, prev + curr];
          prev = _ref[0];
          curr = _ref[1];
          _context6.next = 6;
          return curr;

        case 6:
          _context6.next = 1;
          break;

        case 8:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[3], this);
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = fibonacci()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var n = _step3.value;

    if (n > 30) break;
    console.log(n);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

function objectEntries(obj) {
  var propKeys, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, propKey;

  return regeneratorRuntime.wrap(function objectEntries$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          propKeys = Reflect.ownKeys(obj);
          _iteratorNormalCompletion4 = true;
          _didIteratorError4 = false;
          _iteratorError4 = undefined;
          _context7.prev = 4;
          _iterator4 = propKeys[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
            _context7.next = 13;
            break;
          }

          propKey = _step4.value;
          _context7.next = 10;
          return [propKey, obj[propKey]];

        case 10:
          _iteratorNormalCompletion4 = true;
          _context7.next = 6;
          break;

        case 13:
          _context7.next = 19;
          break;

        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7['catch'](4);
          _didIteratorError4 = true;
          _iteratorError4 = _context7.t0;

        case 19:
          _context7.prev = 19;
          _context7.prev = 20;

          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }

        case 22:
          _context7.prev = 22;

          if (!_didIteratorError4) {
            _context7.next = 25;
            break;
          }

          throw _iteratorError4;

        case 25:
          return _context7.finish(22);

        case 26:
          return _context7.finish(19);

        case 27:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[4], this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

var jane = { first: 'Jane', last: 'Doe' };

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = objectEntries(jane)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var _step5$value = _slicedToArray(_step5.value, 2),
        key = _step5$value[0],
        value = _step5$value[1];

    console.log(key + ': ' + value);
  }
} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5.return) {
      _iterator5.return();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

function objectEntries1() {
  var propKeys, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, propKey;

  return regeneratorRuntime.wrap(function objectEntries1$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          propKeys = Object.keys(this);
          _iteratorNormalCompletion6 = true;
          _didIteratorError6 = false;
          _iteratorError6 = undefined;
          _context8.prev = 4;
          _iterator6 = propKeys[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
            _context8.next = 13;
            break;
          }

          propKey = _step6.value;
          _context8.next = 10;
          return [propKey, this[propKey]];

        case 10:
          _iteratorNormalCompletion6 = true;
          _context8.next = 6;
          break;

        case 13:
          _context8.next = 19;
          break;

        case 15:
          _context8.prev = 15;
          _context8.t0 = _context8['catch'](4);
          _didIteratorError6 = true;
          _iteratorError6 = _context8.t0;

        case 19:
          _context8.prev = 19;
          _context8.prev = 20;

          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }

        case 22:
          _context8.prev = 22;

          if (!_didIteratorError6) {
            _context8.next = 25;
            break;
          }

          throw _iteratorError6;

        case 25:
          return _context8.finish(22);

        case 26:
          return _context8.finish(19);

        case 27:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[5], this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

var jane1 = { first: 'Jane', last: 'Doe' };

jane1[Symbol.iterator] = objectEntries1;

var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
  for (var _iterator7 = jane1[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
    var _step7$value = _slicedToArray(_step7.value, 2),
        key = _step7$value[0],
        value = _step7$value[1];

    console.log(key + ': ' + value);
  }
} catch (err) {
  _didIteratorError7 = true;
  _iteratorError7 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion7 && _iterator7.return) {
      _iterator7.return();
    }
  } finally {
    if (_didIteratorError7) {
      throw _iteratorError7;
    }
  }
}

function numbers() {
  return regeneratorRuntime.wrap(function numbers$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return 1;

        case 2:
          _context9.next = 4;
          return 2;

        case 4:
          return _context9.abrupt('return', 3);

        case 7:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[6], this);
}

console.log([].concat(_toConsumableArray(numbers())));
console.log(Array.from(numbers()));
var _numbers = numbers(),
    _numbers2 = _slicedToArray(_numbers, 2),
    x = _numbers2[0],
    y = _numbers2[1];

console.log(x);
console.log(y);var _iteratorNormalCompletion8 = true;
var _didIteratorError8 = false;
var _iteratorError8 = undefined;

try {
  for (var _iterator8 = numbers()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
    var _n2 = _step8.value;

    console.log(_n2);
  }
} catch (err) {
  _didIteratorError8 = true;
  _iteratorError8 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion8 && _iterator8.return) {
      _iterator8.return();
    }
  } finally {
    if (_didIteratorError8) {
      throw _iteratorError8;
    }
  }
}

var g = regeneratorRuntime.mark(function g() {
  return regeneratorRuntime.wrap(function g$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return;

        case 3:
          _context10.next = 8;
          break;

        case 5:
          _context10.prev = 5;
          _context10.t0 = _context10['catch'](0);

          console.log('内部捕获', _context10.t0);

        case 8:
        case 'end':
          return _context10.stop();
      }
    }
  }, g, this, [[0, 5]]);
});

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}

var gen = regeneratorRuntime.mark(function gen() {
  return regeneratorRuntime.wrap(function gen$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return console.log('a');

        case 3:
          _context11.next = 7;
          break;

        case 5:
          _context11.prev = 5;
          _context11.t0 = _context11['catch'](0);

        case 7:
          _context11.next = 9;
          return console.log('b');

        case 9:
          _context11.next = 11;
          return console.log('c');

        case 11:
        case 'end':
          return _context11.stop();
      }
    }
  }, gen, this, [[0, 5]]);
});

var g = gen();
g.next();
g.throw();
g.next();

function gtest() {
  return regeneratorRuntime.wrap(function gtest$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return 1;

        case 2:
          console.log('throwing an exception');
          throw new Error('generator broke!');

        case 6:
          _context12.next = 8;
          return 3;

        case 8:
        case 'end':
          return _context12.stop();
      }
    }
  }, _marked[7], this);
}

function log(generator) {
  var v;
  console.log('starting generator');
  try {
    v = generator.next();
    console.log('第一次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第二次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第三次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  console.log('caller done');
}

log(gtest());


function gen2() {
  return regeneratorRuntime.wrap(function gen2$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return 1;

        case 2:
          _context13.next = 4;
          return 2;

        case 4:
          _context13.next = 6;
          return 3;

        case 6:
        case 'end':
          return _context13.stop();
      }
    }
  }, _marked[8], this);
}

var g2 = gen2();

console.log(g2.next());
console.log(g2.return('foo'));
console.log(g2.next());
function numbers2() {
  return regeneratorRuntime.wrap(function numbers2$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return 1;

        case 2:
          _context14.prev = 2;
          _context14.next = 5;
          return 2;

        case 5:
          _context14.next = 7;
          return 3;

        case 7:
          _context14.prev = 7;
          _context14.next = 10;
          return 4;

        case 10:
          _context14.next = 12;
          return 5;

        case 12:
          return _context14.finish(7);

        case 13:
          _context14.next = 15;
          return 6;

        case 15:
        case 'end':
          return _context14.stop();
      }
    }
  }, _marked[9], this, [[2,, 7, 13]]);
}
var g = numbers2();
console.log(g.next());
console.log(g.next());
console.log(g.return(7));
console.log(g.next());
console.log(g.next());

function inner() {
  return regeneratorRuntime.wrap(function inner$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return 'hello!';

        case 2:
        case 'end':
          return _context15.stop();
      }
    }
  }, _marked[10], this);
}

function outer1() {
  return regeneratorRuntime.wrap(function outer1$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return 'open';

        case 2:
          _context16.next = 4;
          return inner();

        case 4:
          _context16.next = 6;
          return 'close';

        case 6:
        case 'end':
          return _context16.stop();
      }
    }
  }, _marked[11], this);
}

var gen = outer1();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function outer2() {
  return regeneratorRuntime.wrap(function outer2$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return 'open';

        case 2:
          return _context17.delegateYield(inner(), 't0', 3);

        case 3:
          _context17.next = 5;
          return 'close';

        case 5:
        case 'end':
          return _context17.stop();
      }
    }
  }, _marked[12], this);
}

var gen = outer2();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function foo3() {
  return regeneratorRuntime.wrap(function foo3$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return 2;

        case 2:
          _context18.next = 4;
          return 3;

        case 4:
          return _context18.abrupt('return', "foo");

        case 5:
        case 'end':
          return _context18.stop();
      }
    }
  }, _marked[13], this);
}

function bar3() {
  var v;
  return regeneratorRuntime.wrap(function bar3$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return 1;

        case 2:
          return _context19.delegateYield(foo3(), 't0', 3);

        case 3:
          v = _context19.t0;

          console.log("v: " + v);
          _context19.next = 7;
          return 4;

        case 7:
        case 'end':
          return _context19.stop();
      }
    }
  }, _marked[14], this);
}

var it = bar3();

console.log(it.next());

console.log(it.next());

console.log(it.next());

console.log(it.next());

console.log(it.next());


function genFuncWithReturn() {
  return regeneratorRuntime.wrap(function genFuncWithReturn$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return 'a';

        case 2:
          _context20.next = 4;
          return 'b';

        case 4:
          return _context20.abrupt('return', 'The result');

        case 5:
        case 'end':
          return _context20.stop();
      }
    }
  }, _marked[15], this);
}
function logReturned(genObj) {
  var result;
  return regeneratorRuntime.wrap(function logReturned$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          return _context21.delegateYield(genObj, 't0', 1);

        case 1:
          result = _context21.t0;

          console.log(result);

        case 3:
        case 'end':
          return _context21.stop();
      }
    }
  }, _marked[16], this);
}

console.log([].concat(_toConsumableArray(logReturned(genFuncWithReturn()))));


function iterTree(tree) {
  var _i;

  return regeneratorRuntime.wrap(function iterTree$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          if (!Array.isArray(tree)) {
            _context22.next = 9;
            break;
          }

          _i = 0;

        case 2:
          if (!(_i < tree.length)) {
            _context22.next = 7;
            break;
          }

          return _context22.delegateYield(iterTree(tree[_i]), 't0', 4);

        case 4:
          _i++;
          _context22.next = 2;
          break;

        case 7:
          _context22.next = 11;
          break;

        case 9:
          _context22.next = 11;
          return tree;

        case 11:
        case 'end':
          return _context22.stop();
      }
    }
  }, _marked[17], this);
}

var tree = ['a', ['b', 'c'], ['d', 'e']];

var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
  for (var _iterator9 = iterTree(tree)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
    var _x = _step9.value;

    console.log(_x);
  }
} catch (err) {
  _didIteratorError9 = true;
  _iteratorError9 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion9 && _iterator9.return) {
      _iterator9.return();
    }
  } finally {
    if (_didIteratorError9) {
      throw _iteratorError9;
    }
  }
}

function Tree2(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

function inorder(t) {
  return regeneratorRuntime.wrap(function inorder$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          if (!t) {
            _context23.next = 5;
            break;
          }

          return _context23.delegateYield(inorder(t.left), 't0', 2);

        case 2:
          _context23.next = 4;
          return t.label;

        case 4:
          return _context23.delegateYield(inorder(t.right), 't1', 5);

        case 5:
        case 'end':
          return _context23.stop();
      }
    }
  }, _marked[18], this);
}

function make(array) {
  if (array.length == 1) return new Tree2(null, array[0], null);
  return new Tree2(make(array[0]), array[1], make(array[2]));
}
var tree3 = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

var result = [];
var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
  for (var _iterator10 = inorder(tree3)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
    var node = _step10.value;

    result.push(node);
  }
} catch (err) {
  _didIteratorError10 = true;
  _iteratorError10 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion10 && _iterator10.return) {
      _iterator10.return();
    }
  } finally {
    if (_didIteratorError10) {
      throw _iteratorError10;
    }
  }
}

console.log(result);


function F() {
  return regeneratorRuntime.wrap(function F$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          this.a = 1;
          _context24.next = 3;
          return this.b = 2;

        case 3:
          _context24.next = 5;
          return this.c = 3;

        case 5:
        case 'end':
          return _context24.stop();
      }
    }
  }, _marked[19], this);
}
var obj = {};
var f = F.call(obj);

console.log(f.next());
console.log(f.next());
console.log(f.next());

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
var ticking = true;
var clock = function clock() {
  if (ticking) console.log('Tick!');else console.log('Tock!');
  ticking = !ticking;
};
clock();
clock();
clock();
clock();
clock();
clock();

var clock2 = regeneratorRuntime.mark(function clock2() {
  return regeneratorRuntime.wrap(function clock2$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          if (!true) {
            _context25.next = 9;
            break;
          }

          console.log('Tick!');
          _context25.next = 4;
          return;

        case 4:
          console.log('Tock!');
          _context25.next = 7;
          return;

        case 7:
          _context25.next = 0;
          break;

        case 9:
        case 'end':
          return _context25.stop();
      }
    }
  }, clock2, this);
});
clock2().next();
clock2().next();
clock2().next();
clock2().next();
clock2().next();
clock2().next();

function iterEntries(obj) {
  var keys, _i2, key;

  return regeneratorRuntime.wrap(function iterEntries$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          keys = Object.keys(obj);
          _i2 = 0;

        case 2:
          if (!(_i2 < keys.length)) {
            _context26.next = 9;
            break;
          }

          key = keys[_i2];
          _context26.next = 6;
          return [key, obj[key]];

        case 6:
          _i2++;
          _context26.next = 2;
          break;

        case 9:
        case 'end':
          return _context26.stop();
      }
    }
  }, _marked[20], this);
}

var myObj = { foo: 3, bar: 7 };

var _iteratorNormalCompletion11 = true;
var _didIteratorError11 = false;
var _iteratorError11 = undefined;

try {
  for (var _iterator11 = iterEntries(myObj)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
    var _step11$value = _slicedToArray(_step11.value, 2),
        key = _step11$value[0],
        value = _step11$value[1];

    console.log(key, value);
  }
} catch (err) {
  _didIteratorError11 = true;
  _iteratorError11 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion11 && _iterator11.return) {
      _iterator11.return();
    }
  } finally {
    if (_didIteratorError11) {
      throw _iteratorError11;
    }
  }
}