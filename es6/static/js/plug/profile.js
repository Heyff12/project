// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;
// export function multiply(x, y) {
//   return x * y;
// };
// export function area(radius) {
//   return Math.PI * radius * radius;
// }

// export function circumference(radius) {
//   return 2 * Math.PI * radius;
// }
function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

// export { firstName, lastName, year, area, circumference };


module.exports = {
    area: area,
    circumference: circumference,
};