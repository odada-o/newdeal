// get
const now = new Date();
console.log(now);
console.log(now.getFullYear()); // 2024
console.log(now.getMonth() + 1); // 7
console.log(now.getDate()); // 15
console.log(now.getDay()); // 1
console.log(now.getHours()); // 15
console.log(now.getMinutes()); // 55
console.log(now.getSeconds()); // 30
console.log(now.getMilliseconds()); // 1초 = 1000ms

// set
const date = new Date();
date.setFullYear(2015);
console.log(date.getFullYear()); // 2015
