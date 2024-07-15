// toFixed
const num = 10.123456;
console.log(num.toFixed(3)); // 10.123
console.log(typeof num.toFixed(3)); // string
console.log(parseFloat(num.toFixed(3))); // 10.123

// toLocalString
const num2 = 100000000;
console.log(num2.toLocaleString()); // 100,000,000

// Number.isInteger
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(3.14)); // false

// Number.isNaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(0)); // false
