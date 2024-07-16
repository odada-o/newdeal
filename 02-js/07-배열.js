// length
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

// at()
console.log(arr[0]); // 1
console.log(arr.at(0)); // 1

console.log(arr[arr.length - 1]); // 5
console.log(arr.at(-1)); // 5

// concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// every()
const a = arr.every(item => item > 0);
console.log(a);

// filter()
const b = arr.filter(item => item > 2); // 2보다 큰 값만 필터링
console.log(b); // [3, 4, 5]

// 7세 이하 필터링
const users = [
    { name: '김봄', age: 7 },
    { name: '김여름', age: 25 },
    { name: '김겨울', age: 30 },
];

const summer = users.find(item => item.name === '김여름');
console.log(summer.age); // 25

const child = users.filter(user => user.age <= 7);
console.log(child); // [{ name: '이봄', age: 7 }]

// find()
const c = arr.find(item => item > 2);
console.log(c); // 3

// findIndex()
const d = arr.findIndex(item => item > 1);
console.log(d); // 1

// flat()
const arr4 = [1, 2, [3, [4]]];
console.log(arr4.flat(Infinity)); // [1, 2, 3, 4]
console.log(arr4.flat(1)); // [1, 2, 3, [4]] (1차원만 펼침)

// forEach()
arr.forEach(item => console.log(item));

// includes()
console.log(arr.includes(3)); // true
console.log(arr.includes(10)); // false

// join()
console.log(arr.join(', ')); // 1, 2, 3, 4, 5

// map()
const e = arr.map(item => item * 2);
console.log(e); // [2, 4, 6, 8, 10]
console.log(arr); // [1, 2, 3, 4, 5]

const userss = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

const newUsers = userss.map(user => ({
    ...user,
    email: `${user.name}@gmail.com`,
}));
console.log(newUsers);
