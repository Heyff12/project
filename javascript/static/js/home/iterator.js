'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _iterator12 = require('babel-runtime/core-js/symbol/iterator');

var _iterator13 = _interopRequireDefault(_iterator12);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function next() {
      return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true };
    }
  };
}

var arr = ['a', 'b', 'c'];
var iter = (0, _getIterator3.default)(arr);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var someString = "hi";
console.log((0, _typeof3.default)(someString[_iterator13.default]));


var iterator = (0, _getIterator3.default)(someString);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

var arr1 = ['red', 'green', 'blue'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = (0, _getIterator3.default)(arr1), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var v = _step.value;

    console.log(v);
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

var obj = {};
obj[_iterator13.default] = arr1[_iterator13.default].bind(arr1);

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = (0, _getIterator3.default)(obj), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _v = _step2.value;

    console.log(_v);
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

var arr2 = ['a', 'b', 'c', 'd'];

for (var a in arr2) {
  console.log(a);
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = (0, _getIterator3.default)(arr2), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _a = _step3.value;

    console.log(_a);
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

var arr3 = [3, 5, 7];
arr3.foo = 'hello';

for (var i in arr3) {
  console.log(i);
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = (0, _getIterator3.default)(arr3), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var _i = _step4.value;

    console.log(_i);
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

var engines = new _set2.default(["Gecko", "Trident", "Webkit", "Webkit"]);
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = (0, _getIterator3.default)(engines), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var e = _step5.value;

    console.log(e);
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

var es6 = new _map2.default();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  for (var _iterator6 = (0, _getIterator3.default)(es6), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    var _step6$value = (0, _slicedToArray3.default)(_step6.value, 2),
        name = _step6$value[0],
        value = _step6$value[1];

    console.log(name + ": " + value);
  }
} catch (err) {
  _didIteratorError6 = true;
  _iteratorError6 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion6 && _iterator6.return) {
      _iterator6.return();
    }
  } finally {
    if (_didIteratorError6) {
      throw _iteratorError6;
    }
  }
}

var map2 = new _map2.default().set('a', 1).set('b', 2);
var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
  for (var _iterator7 = (0, _getIterator3.default)(map2), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
    var pair = _step7.value;

    console.log(pair);
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

var _iteratorNormalCompletion8 = true;
var _didIteratorError8 = false;
var _iteratorError8 = undefined;

try {

  for (var _iterator8 = (0, _getIterator3.default)(map2), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
    var _step8$value = (0, _slicedToArray3.default)(_step8.value, 2),
        key = _step8$value[0],
        _value = _step8$value[1];

    console.log(key + ' : ' + _value);
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

var str = "hello";

var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
  for (var _iterator9 = (0, _getIterator3.default)(str), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
    var s = _step9.value;

    console.log(s);
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

var paras = document.querySelectorAll("p");

var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
  for (var _iterator10 = (0, _getIterator3.default)(paras), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
    var p = _step10.value;

    p.classList.add("test");
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

function printArgs() {
  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = (0, _getIterator3.default)(arguments), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var x = _step11.value;

      console.log(x);
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
}
printArgs('a', 'b');