// 함수 선언하기
// function 함수이름(매개변수1, 매개변수2) {
//     // 코드 작성
//     return 결과값;
// }
// 함수이름(인자1, 인자2);

hello1('김가을'); // Hello, 김가을!
hello1('김겨울'); // Hello, 김겨울!
function hello1(name) {
    console.log('Hello, ' + name + '!');
}

// 함수 표현식
const hello2 = function () {
    console.log('아!! 내일 쉰다.');
};
hello2(); // 아!! 내일 쉰다.

// 매개변수 패턴
function sum(x, y = 0) {
    return x + y;
}
console.log(sum(1, 2)); // 3
console.log(sum(3)); // 3

// 객체 구조 분해 할당
const user1 = {
    name: '김가을',
    age: 3,
};
const user2 = {
    name: '김겨울',
    age: 5,
    email: 'eehd@email.com',
};

function getName({ name }) {
    // const { name } = user;
    return name;
}
function getEmail({ email = '이메일이 없습니다.' }) {
    // const { email = '이메일이 없습니다.' } = user;

    return email;
}

console.log(getName(user1));
console.log(getEmail(user1));

// 배열 구조 분해 할당
const animals = ['개', '고양이', '물고기'];

function getS([, b = '두 번째 요소가 없습니다.']) {
    // const [, b] = arr;
    return b;
}

console.log(getS(animals));

// 나머지 매개변수
function printNum(...rest) {
    console.log(rest);
}

printNum(1, 2, 3, 4, 5, 6); // [1, 2, 3, 4, 5, 6]

// 화살표 함수
const hello3 = () => {
    console.log('안녕! 화살표 함수');
};
hello3();

const printNum2 = a => a;
console.log(printNum2(1));

const a = () => {};
const b = x => {};
const c = (x, y) => {};
const d = x => x;
const e = x => {
    console.log(x);
};
const f = () => ({ a: 1 });
const g = () => [1, 2, 3];

// 호출 스케줄링
// setInterval(함수, 시간);
// const timer = setInterval(() => {
//     console.log('3초');
// }, 1000);

// #btn 요소를 찾아서 클릭했을 때
document.querySelector('#btn').addEventListener('click', () => {
    console.log('버튼 클릭');
    clearInterval(timer);
});

// 콜백 함수
const aa = callback => {
    callback();
    console.log('A');
};

const bb = () => {
    console.log('B');
};

aa(bb);

// this
const obj = {
    first: '겨울',
    last: '김',
    getFullName() {
        return `${this.last}${this.first} `;
    },
};
console.log(obj.getFullName()); // 김겨울
