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

// Number.parseInt
console.log(Number.parseInt('3.14', 10)); // 3

// Number.parseFloat
console.log(Number.parseFloat('3.14')); // 3.14

// Math.abs
console.log(Math.abs(-3)); // 3
console.log(Math.abs('-3')); // 3
console.log(Math.abs('')); // 0
console.log(Math.abs(null)); // 0

// Math.ceil
console.log(Math.ceil(3.14)); // 4

// Math.floor
console.log(Math.floor(3.14)); // 3

// Math.max
console.log(Math.max(1, 2, 3)); // 3

// Math.min
console.log(Math.min(1, 2, 3)); // 1

// Math.random
console.log(Math.random()); // 0.12345678901234

function getRandomInt(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInt()); // 0 ~ 10 사이의 랜덤한 숫자
console.log(getRandomInt(5, 10)); // 5 ~ 10 사이의 랜덤한 숫자

// Math.round
console.log(Math.round(3.14)); // 3
console.log(Math.round(3.54)); // 4
