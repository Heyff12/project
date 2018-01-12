'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = new _set2.default();

[2, 3, 5, 4, 5, 2, 2].forEach(function (x) {
  return s.add(x);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = (0, _getIterator3.default)(s), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;

    console.log(i);
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

var set = new _set2.default([1, 2, 3, 4, 4]);
console.log([].concat((0, _toConsumableArray3.default)(set)));


s.add(1).add(2).add(2);


console.log(s.size);

console.log(s.has(1));
console.log(s.has(2));
console.log(s.has(3));

console.log(s.delete(2));
console.log(s.has(2));

function dedupe(array) {
  return (0, _from2.default)(new _set2.default(array));
}

console.log(dedupe([1, 1, 2, 3]));

var setzu = new _set2.default(['red', 'green', 'blue']);

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = (0, _getIterator3.default)(setzu.keys()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var item = _step2.value;

    console.log(item);
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

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {

  for (var _iterator3 = (0, _getIterator3.default)(setzu.values()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _item = _step3.value;

    console.log(_item);
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

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {

  for (var _iterator4 = (0, _getIterator3.default)(setzu.entries()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var _item2 = _step4.value;

    console.log(_item2);
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

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {

  for (var _iterator5 = (0, _getIterator3.default)(setzu), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var x = _step5.value;

    console.log(x);
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

var setzu1 = new _set2.default([1, 2, 3]);
setzu1.forEach(function (value, key) {
  return console.log(value * 2);
});

var a = new _set2.default([1, 2, 3]);
var b = new _set2.default([4, 3, 2]);

var union = new _set2.default([].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b)));

var intersect = new _set2.default([].concat((0, _toConsumableArray3.default)(a)).filter(function (x) {
  return b.has(x);
}));

var difference = new _set2.default([].concat((0, _toConsumableArray3.default)(a)).filter(function (x) {
  return !b.has(x);
}));

console.log(union);
console.log(intersect);
console.log(difference);

var map = new _map2.default();
map.set('foo', true);
map.set('bar', false);

console.log(map.size);

var mapzu = new _map2.default([['F', 'no'], ['T', 'yes']]);

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  for (var _iterator6 = (0, _getIterator3.default)(mapzu.keys()), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    var key = _step6.value;

    console.log(key);
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

var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {

  for (var _iterator7 = (0, _getIterator3.default)(mapzu.values()), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
    var value = _step7.value;

    console.log(value);
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

  for (var _iterator8 = (0, _getIterator3.default)(mapzu.entries()), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
    var _item3 = _step8.value;

    console.log(_item3[0], _item3[1]);
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

var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
  for (var _iterator9 = (0, _getIterator3.default)(mapzu.entries()), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
    var _step9$value = (0, _slicedToArray3.default)(_step9.value, 2),
        _key = _step9$value[0],
        _value = _step9$value[1];

    console.log(_key, _value);
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

var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
  for (var _iterator10 = (0, _getIterator3.default)(mapzu), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
    var _step10$value = (0, _slicedToArray3.default)(_step10.value, 2),
        _key2 = _step10$value[0],
        _value2 = _step10$value[1];

    console.log(_key2, _value2);
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

var map2 = new _map2.default([[1, 'one'], [2, 'two'], [3, 'three']]);

console.log([].concat((0, _toConsumableArray3.default)(map2.keys())));


console.log([].concat((0, _toConsumableArray3.default)(map2.values())));


console.log([].concat((0, _toConsumableArray3.default)(map2.entries())));


console.log([].concat((0, _toConsumableArray3.default)(map2)));