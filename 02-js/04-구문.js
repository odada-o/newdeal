// 구문

// 구조 분해 할당
// 객체, 배열을 인수로 받아 변수를 선언하고 값을 할당하는 것을 구조 분해 할당이라고 한다.

// 배열의 구조 분해
// function sum(a, b, c) {
//     console.log(a + b + c);
// }

// const num = [1, 2, 3];

// sum(num[0], num[1], num[2]); // 6

const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [, b, c] = arr;

console.log(b, c);

// 나머지 할당
const arr2 = [1, 2, 3, 4, 5];
const [a, ...rest] = arr2;
console.log(a, rest); // 1 [2, 3, 4, 5]

// 객체의 구조 분해
const obj = {
    w: 30,
    h: 30,
    bg: 'red',
};

// console.log(obj.w, obj.h, obj.bg);
const { w = 10, h: height, bg, p: padding = 10 } = obj;
console.log(w, height, bg, padding); // 30 30 red

// 선택적 체이닝
const user1 = {
    name: '김겨울',
    address: {
        city: '서울',
        dong: '신정동',
    },
};
const user2 = {
    name: '김가을',
};

function printCity(user) {
    return user.address?.city || '주소 정보가 없습니다.';
}

console.log(printCity(user1)); // 서울
console.log(printCity(user2)); // 주소 정보가 없습니다.

// 조건문
// if (조건) {
// } else if (조건) {
// } else {
// }

function isPositive(num) {
    if (num > 0) {
        return '양수입니다.';
    } else if (num < 0) {
        return '음수입니다.';
    } else {
        return '0입니다.';
    }
}
console.log(isPositive(1)); // 양수입니다.
console.log(isPositive(-1)); // 음수입니다.
console.log(isPositive(0)); // undefined

// switch 문
// switch (조건) {
//     case '값1':
//         return '출력할 값';
//     case '값2':
//         return '출력할 값';
//     default:
//         return '출력할 값';
// }

function getSound(animal) {
    switch (animal) {
        case '개':
            return '멍멍';
        case '고양이':
            return '야옹';
        default:
            return '...';
    }
}

console.log(getSound('개')); // 멍멍
console.log(getSound('물고기')); // ...

// if문
function getSound2(animal) {
    if (animal === '개') return '멍멍';
    if (animal === '고양이') return '야옹';
    return '...';
}
console.log(getSound2('개')); // 멍멍
console.log(getSound2('물고기')); // ...

// 반복문
// for문
// for(초기값; 조건; 증감) {
//     // 실행할 코드
// }
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for of문
const animals = ['개', '고양이', '물고기'];

// for (let i = 0; i < 3; i++) {
//     console.log(animals[i]);
// }

// for (변수 of 배열) {
//     // 실행할 코드
// }
for (let animal of animals) {
    console.log(animal);
}
