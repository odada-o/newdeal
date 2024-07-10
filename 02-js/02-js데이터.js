const str1 = '안녕!!';
const str2 = '김겨울';
const str3 = `${str1} 나는 ${str2}야`;
console.log(str3); // 안녕!! 나는 김겨울야

// 배열
const arr = ['dog', 'cat', 'fish'];
console.log(arr);
console.log(arr.length); // 3
console.log(arr[1]); // cat
// 나는 cat을 키우고 싶어요.
console.log(`나는 ${arr[1]}을 키우고 싶어요.`); // 나는 cat을 키우고 싶어요.

// 객체
const user = {
    name: '김겨울',
    age: 2,
};
console.log(user);
console.log(user.name); // 김겨울
// 김겨울은 2살입니다.
console.log(`${user.name}은 ${user.age}살입니다.`); // 김겨울은 2살입니다.

const users = [
    {
        name: '김겨울',
        age: 2,
    },
    {
        name: '김가을',
        age: 1,
    },
];
console.log(users);
console.log(users[0]);
console.log(users[0].name); // 김겨울
// 김겨울님 안녕하세요.
console.log(`${users[0].name}님 안녕하세요.`); // 김겨울님 안녕하세요.

// 함수
// 함수 선언식 (기명 함수)
function fn() {
    console.log('안녕하세요');
}
fn(); // 안녕하세요

// 함수 표현식 (익명 함수)
const fn2 = function () {
    console.log('안녕하세요. 익명 함수입니다.');
};
fn2(); // 안녕하세요. 익명 함수입니다.

// 형 변환
const num = 1;
const str = '1';
console.log(num === str); // 일치 연산자 (값과 타입이 일치하는지 확인)
console.log(num == str); // 동등 연산자 (값만 비교)
