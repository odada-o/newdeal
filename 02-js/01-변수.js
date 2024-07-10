// const : 변수 재선언, 재할당 불가능
const a = 1;
// a = 2;
console.log(a);

// let : 변수 재선언 불가능, 재할당 가능
let b = 1;
// let b
b = 2;
console.log(b);

// var : 변수 재선언, 재할당 가능
var c = 1;
var c = 2;
console.log(c);

// 변수 참조
const d = 1;
const e = d;
console.log(d, e);

// 변수 범위
const f = 1;
function test() {
    const f = 2;
    console.log(f);
}
test(); // 2

// 변수 형 변환
const g = '1';
const h = '2';
console.log(g + h); // 12
console.log(+g + +h); // 3
