'use strict';

var _console, _console2;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello');
log('Hello', 'China');
log('Hello', '');

function log1(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';

  console.log(x, y);
}

log1('Hello');
log1('Hello', 'China');
log1('Hello', '');
function m1() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y;

  return [x, y];
}

function m2() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
      x = _ref2.x,
      y = _ref2.y;

  return [x, y];
}

m1();
m2();
m1({ x: 3, y: 8 });
m2({ x: 3, y: 8 });
m1({ x: 3 });
m2({ x: 3 });
m1({});
m2({});

m1({ z: 3 });
m2({ z: 3 });

function add() {
  var sum = 0;

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      sum += val;
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

  return sum;
}

console.log(add(2, 5, 3));
var sortNumbers = function sortNumbers() {
  for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }

  return numbers.sort();
};

function push(array) {
  for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    items[_key3 - 1] = arguments[_key3];
  }

  items.forEach(function (item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3);
console.log(a);

(_console = console).log.apply(_console, [1, 2, 3]);


(_console2 = console).log.apply(_console2, [1].concat([2, 3, 4], [5]));

function f(x, y, z) {}
var args = [0, 1, 2];
f.apply(null, args);

function f1(x, y, z) {}
var args1 = [0, 1, 2];
f.apply(undefined, args1);

var aaa = Math.max.apply(null, [14, 3, 77]);
console.log(aaa);

var aaa1 = Math.max.apply(Math, [14, 3, 77]);
console.log(aaa1);

var aaa2 = Math.max(14, 3, 77);
console.log(aaa2);

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));

console.log([].concat(arr1, arr2, arr3));


var map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

var arr12 = [].concat(_toConsumableArray(map.keys()));
console.log(arr12);


function Timer() {
  var _this = this;

  this.s1 = 0;
  this.s2 = 0;

  setInterval(function () {
    return _this.s1++;
  }, 1000);

  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(function () {
  return console.log('s1: ', timer.s1);
}, 3100);
setTimeout(function () {
  return console.log('s2: ', timer.s2);
}, 3100);


function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

var zong = factorial(5, 1);
console.log(zong);

function Fibonacci2(n) {
  var ac1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var ac2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n <= 1) {
    return ac2;
  };

  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}

var fib = Fibonacci2(100);
console.log(fib);