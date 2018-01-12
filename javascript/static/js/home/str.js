'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _fromCodePoint = require('babel-runtime/core-js/string/from-code-point');

var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('\uD842\uDFB7');

console.log('\z' === 'z');
console.log('\x7A' === 'z');
console.log('z' === 'z');
console.log('z' === 'z');
var s = "𠮷";

console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));

var s = '𠮷a';

console.log(s.codePointAt(0));
console.log(s.codePointAt(1));

console.log(s.codePointAt(2));
console.log((0, _fromCodePoint2.default)(0x20BB7));

console.log((0, _fromCodePoint2.default)(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');

var text = (0, _fromCodePoint2.default)(0x20BB7);

for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {

    for (var _iterator = (0, _getIterator3.default)(text), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i = _step.value;

        console.log(_i);
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

console.log('abc'.charAt(0));
console.log('𠮷'.charAt(0));
var s = 'Hello world!';

s.startsWith('Hello');
s.endsWith('!');
s.includes('o');

var s = 'Hello world!';

s.startsWith('world', 6);
s.endsWith('Hello', 5);
s.includes('Hello', 6);

'x'.repeat(3);
'hello'.repeat(2);
'na'.repeat(0);
'x'.padStart(5, 'ab');
'x'.padStart(4, 'ab');

'x'.padEnd(5, 'ab');
'x'.padEnd(4, 'ab');
console.log('string text line 1\nstring text line 2');

var name = "Bob",
    time = "today";
console.log('Hello ' + name + ', how are you ' + time + '?');

document.getElementById('list').innerHTML = ('\n<ul>\n  <li>first--' + name + '</li>\n  <li>second</li>\n  <li>first22--' + time + '</li>\n  <li>second44</li>\n</ul>\n').trim();

var str = 'return ' + '`Hello ${name}!`';
var func = new Function('name', str);
console.log(func('Jack'));
var str1 = '(name) => `Hello ${name}!`';
var func1 = eval.call(null, str1);
console.log(func1('Jack'));