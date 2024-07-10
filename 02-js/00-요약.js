// function 함수이름() {}
function myF() {
    const text = document.getElementById('text');

    console.log('함수 호출');
    text.style.color = 'blue';
    text.style.fontSize = '30px';
    text.style.backgroundColor = 'yellow';
    text.style.transform = 'rotate(45deg) translate(100px, 30px)';
}

// 변수
// 변수란 데이터를 저장하는 공간
// 변수 선언 (let, const, var)

let a = 1;
a = 2;
console.log(a);

const b = 2;
// b = 3;
console.log(b);

// 데이터 타입
// 숫자(number)
const num1 = 1;
const num2 = 3;
console.log(num1 + num2);

// 문자열(string)
const str1 = '2';
const str2 = '3';
console.log(str1 + str2);

// 불리언(boolean)
const isTrue = true;
const isFalse = false;
console.log(isTrue, isFalse);

// 객체(object)
const user = {
    name: '홍길동',
    age: 20,
};
console.log(user);
console.log(user.name);
console.log(user.age);

// 배열(array)
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);

const users = [
    { name: '홍길동', age: 20 },
    { name: '김철수', age: 30 },
];
console.log(users[0]);
console.log(users[0].name);
console.log(`안녕하세요. ${users[1].name}님`);

// 함수(function)
const func = function () {
    console.log('함수 또또 호출');
};

func();

// 연산자
// 산술 연산자 (+, -, *, /, %)

const aa = 1;
const bb = 2;
console.log(aa + bb); // 3
console.log(aa - bb); // -1
console.log(aa * bb); // 2
console.log(aa / bb); // 0.5
console.log(aa % bb); // 1

// 대입 연산자 (=)
let cc = 1;
cc += 2; // cc = cc + 2;
console.log(cc); // 3

cc -= 2; // cc = cc - 2;
console.log(cc); // 1

cc *= 2; // cc = cc * 2;
console.log(cc); // 2

cc /= 2; // cc = cc / 2;
console.log(cc); // 1

cc %= 2; // cc = cc % 2;
console.log(cc); // 1

// 비교 연산자
// (==, ===, !=, !==, >, <, >=, <=)

const dd = 1;
const ee = 2;
console.log(dd === ee); // false
console.log(dd !== ee); // true
console.log(dd <= ee); // true

// 논리 연산자

const f = true;
const g = false;
console.log(f && g); // false
console.log(f || g); // true
console.log(!f); // false

// 삼항 연산자
// 조건 ? 참 : 거짓

const i = 2 > 1 ? '참' : '거짓';
console.log(i); // 참

// 조건문

const h = 1;
if (h === 1) {
    // 조건이 참일 경우 실행될 코드
    console.log('h는 1입니다.');
} else if (h === 2) {
    console.log('h는 2입니다.');
} else {
    // 조건이 거짓일 경우 실행될 코드
    console.log('h는 1이 아닙니다.');
}

// 반복문
// for문
// 0부터 9까지 출력
for (let i = 0; i < 10; i++) {
    // 실행될 코드
    console.log(i);
}

// while문

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// 함수 (function)
// 기명 함수
myFunc1();
function myFunc1() {
    console.log('기명 함수 호출');
}

// 익명 함수 (함수 표현식)
const myFunc2 = function () {
    console.log('익명 함수 호출');
};

myFunc2();

// 화살표 함수(es6)
const myFunc3 = () => {
    console.log('화살표 함수 호출');
};
myFunc3();
