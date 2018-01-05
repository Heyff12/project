var pro = require('../plug/profile');
// import { firstName, lastName, year, area, circumference } from '../plug/profile';

function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}

console.log('圆面积：' + pro.area(4));
console.log('圆周长：' + pro.circumference(14));
// console.log('圆面积：' + area(4));
// console.log('圆周长：' + circumference(14));

//整体加载----------------------------------------
// import * as circle from './circle';

// console.log('圆面积：' + circle.area(4));
// console.log('圆周长：' + circle.circumference(14));