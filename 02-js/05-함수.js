// 함수 선언하기
// function 함수이름(매개변수1, 매개변수2) {
//     // 코드 작성
//     return 결과값;
// }
// 함수이름(인자1, 인자2);

function hello1(name) {
    console.log('Hello, ' + name + '!');
}
hello1('김가을'); // Hello, 김가을!
hello1('김겨울'); // Hello, 김겨울!

// 함수 표현식
const hello2 = function () {
    console.log('아!! 내일 쉰다.');
};
hello2(); // 아!! 내일 쉰다.
