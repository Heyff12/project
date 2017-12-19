function* gen(x){
  var y = yield x + 2;
  return y;
}

var g = gen(1);
console.log(g.next()) // { value: 3, done: false }
console.log(g.next(2)) // { value: 2, done: true }
console.log(g.next(8)) // { value: undfined, done: true }



function* gen1(x){
  try {
    var y = yield x + 2;
  } catch (e){
    console.log(e);
  }
  return y;
}

var g1 = gen1(1);
console.log(g1.next());
console.log(g1.throw('出错了'));
// 出错了


let x=1;
function f1(m) {
  return m * 2;
}

f1(x + 5);

// 等同于

var thunk = function () {
  return x + 5;
};

function f2(thunk) {
  return thunk() * 2;
}
//这就是 Thunk 函数的定义，它是“传名调用”的一种实现策略，用来替换某个表达式。
// ES6版本
const Thunk2 = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};
function f(a, cb) {
  cb(a);
}
const ft = Thunk2(f);

ft(1)(console.log) // 1





function thunkify(fn) {
  return function() {
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
    }
  }
};
// function f(a, b, callback){
//   var sum = a + b;
//   callback(sum);
//   callback(sum);
// }

// var ft2 = thunkify(f);
// var print = console.log.bind(console);
// ft2(1, 2)(print);
// // 3
















































