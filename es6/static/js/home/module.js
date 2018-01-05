'use strict';

var pro = require('../plug/profile');


function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}

console.log('圆面积：' + pro.area(4));
console.log('圆周长：' + pro.circumference(14));