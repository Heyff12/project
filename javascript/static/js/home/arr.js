'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _of = require('babel-runtime/core-js/array/of');

var _of2 = _interopRequireDefault(_of);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arr1 = [].slice.call(arrayLike);
console.log(arr1);

var arr2 = (0, _from2.default)(arrayLike);
console.log(arr2);

(0, _from2.default)(arrayLike, function (x) {
    return x * x;
});

(0, _from2.default)(arrayLike).map(function (x) {
    return x * x;
});

(0, _from2.default)([1, 2, 3], function (x) {
    return x * x;
});

(0, _of2.default)(3, 11, 8);
(0, _of2.default)(3);
(0, _of2.default)(3).length;

Array();
Array(3);
Array(3, 11, 8);
var i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);

[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);

[1, 4, -5, 10].find(function (n) {
    return n < 0;
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = (0, _getIterator3.default)(['a', 'b'].keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        console.log(index);
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

var letter = ['a', 'b', 'c'];
var entries = letter.entries();
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
[1, 2, 3].includes(3, 3);
[1, 2, 3].includes(3, -1);
[, 'a'].forEach(function (x, i) {
    return console.log(i);
});
['a',, 'b'].filter(function (x) {
    return true;
});

(0, _from2.default)(['a',, 'b']);