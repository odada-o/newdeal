// 산술 연산자
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
console.log(1 / 2); // 0.5
console.log(7 % 5); // 2

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(1)); // false
console.log(isEven(2)); // true

// 할당 연산자
let a = 1;
// a = a + 1;
a += 1;
console.log(a); // 2

// 증감 연산자
// 증가 연산자
let b = 1;
console.log(b++); // 1 선출력 후연산
console.log(b); // 2

let c = 1;
console.log(++c); // 2 선연산 후출력

// 부정 연산자
console.log(!true); // false
console.log(!false); // true

// 논리 연산자

// AND 연산자
const d = true;
const e = false;
if (d && e) {
    console.log('d와 e는 모두 참입니다.');
} else {
    console.log('d와 e 중 하나 이상이 거짓입니다.');
}

console.log(true && false && ''); // false
console.log(1 && 0 && 2); // 0

// OR 연산자
const f = true;
const g = false;
if (f || g) {
    console.log('f와 g 중 하나 이상이 참입니다.');
}

// 연산자를 기준으로 가장 먼저 만나는 true 값을 반환
console.log(true || false || ''); // true
console.log(1 || 0 || 2); // 1
console.log(false || 0 || ''); // ''

// 병합 연산자
const h = 0;
console.log(h ?? 5); // 0

// 삼항 연산자
// 조건 ? 참 : 거짓
console.log(true ? '김겨울님 안녕하세요.' : '로그인이 필요합니다.');

function isCat(text) {
    return text === '고양이' ? '고양이 맞아!' : '고양이 아냐!';
}

console.log(isCat('고양이')); // 고양이 맞아!
console.log(isCat('강아지')); // 고양이 아냐!
