const str = '점심이야. 뭐 먹을래?';

// length
console.log(str.length); // 12

// includes
console.log(str.includes('먹을래')); // true
console.log(str.includes('점심', 1)); // false

// indexOf
console.log(str.indexOf('먹을래')); // 9
console.log(str.indexOf('아침')); // -1

// padStart, padEnd
const str2 = '12345';
console.log(str2.padStart(10, '0')); // 0000012345
console.log(str2.padStart(3, '0')); // 12345
console.log(str2.padEnd(10, '0')); // 1234500000

// replace
const str3 = 'hello winter winter';
console.log(str3.replace('winter', 'fall')); // hello fall winter
console.log(str3.replace(/winter/g, 'fall')); // hello fall fall
console.log(str3); // hello winter winter

// slice
const str4 = 'hello world';
//           01234/5/678910
console.log(str4.slice(0, 5)); // hello
console.log(str4.slice(6, -1)); // worl
console.log(str4.slice(6)); // world
console.log(str4); // hello world

// split
console.log(str4.split(' ')); // ['hello', 'world']
console.log(str4.split('')); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// toLowerCase, toUpperCase
const str5 = 'Hello World';
console.log(str5.toLowerCase()); // hello world
console.log(str5.toUpperCase()); // HELLO WORLD

// trim
const str6 = '   hello world   ';
console.log(str6.trim()); // hello world
console.log(str6); //    hello world
