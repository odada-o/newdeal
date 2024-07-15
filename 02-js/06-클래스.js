// 생성자 함수를 통해 객체를 생성하는 방법

// const animals = ['dog', 'cat', 'fish'];
const animals = new Array('dog', 'cat', 'fish');

console.log(animals);
console.log(animals.length); // 배열의 길이
console.log(animals.includes('cat')); // true
// 배열에 해당 요소가 있는지 확인

// prototype을 이용한 메서드 생성
const starbucks = new Array('아메리카노', '라떼', '고구마라떼');
const mega = new Array('메가리카노', '메가라떼', '메가고구마라떼');

// 메뉴 출력 메서드
Array.prototype.menu = function () {
    console.log(this); // this는 배열을 가리킨다.
};

starbucks.menu();
mega.menu();

// prototype을 이용한 메서드 재활용
const americano = {
    name: '아메리카노',
    price: 4000,
    orderCoffee() {
        return `${this.name}는 ${this.price}원 입니다.`;
    },
};

const latte = {
    name: '라떼',
    price: 4500,
    orderCoffee() {
        return `${this.name}는 ${this.price}원 입니다.`;
    },
};

console.log(americano.orderCoffee()); // 아메리카노는 4000원 입니다.
console.log(latte.orderCoffee()); // 라떼는 4500원 입니다.
