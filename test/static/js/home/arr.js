'use strict';

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arr1 = [].slice.call(arrayLike);
console.log(arr1);

var arr2 = Array.from(arrayLike);
console.log(arr2);

Array.from(arrayLike, function (x) {
    return x * x;
});

Array.from(arrayLike).map(function (x) {
    return x * x;
});

Array.from([1, 2, 3], function (x) {
    return x * x;
});

Array.of(3, 11, 8);
Array.of(3);
Array.of(3).length;

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
    for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

Array.from(['a',, 'b']);