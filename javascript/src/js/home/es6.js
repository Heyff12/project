//1、块级作用域---------------------------------------------
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6]();



var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6]();


//3、暂时性死区---------------------------------------------
if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}



//块级作用域---------------------------------------------
// IIFE 写法
(function() {
    var tmp = 1;
}());

// 块级作用域写法
{
    let tmp = 1;
}



// 函数声明语句
{
    let a = 'secret';

    function f() {
        return a;
    }
}

// 函数表达式
{
    let a = 'secret';
    let f = function() {
        return a;
    };
}

//5、do表达式---------------------------------------------
// let x = do {
//         let t = f();
//         t * t + 1;
//     };


//综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。---------------------------------------------
// 方法一
(typeof window !== 'undefined' ? window : (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object') ? global : this);

// 方法二
var getGlobal = function() {
    if (typeof self !== 'undefined') {
        return self; }
    if (typeof window !== 'undefined') {
        return window; }
    if (typeof global !== 'undefined') {
        return global; }
    throw new Error('unable to locate global object');
};
