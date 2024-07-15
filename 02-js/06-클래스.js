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
};

console.log(americano.orderCoffee()); // 아메리카노는 4000원 입니다.
console.log(americano.orderCoffee.call(latte)); // 라떼는 4500원 입니다.

// prototype을 이용한 메서드 재활용
const americano2 = new OrderCoffee('아메리카노', 4000);
const latte2 = new OrderCoffee('라떼', 4500);

function OrderCoffee(name, price) {
    this.name = name;
    this.price = price;
}

OrderCoffee.prototype.printOrder = function () {
    return `${this.name}는 ${this.price}원 입니다.`;
};

console.log(americano2.printOrder()); // 아메리카노는 4000원 입니다.
console.log(latte2.printOrder()); // 라떼는 4500원 입니다.

// es6 class 문법을 이용한 생성자 함수
class OrderCoffee2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printOrder() {
        return `${this.name}는 ${this.price}원 입니다.`;
    }

    making() {
        return `${this.name}를 만들고 있습니다.`;
    }

    made() {
        return `${this.name}가 완성되었습니다.`;
    }
}

class CharacterCoffee extends OrderCoffee2 {
    constructor(name, price, character) {
        super(name, price);
        this.character = character;
    }

    printOrder() {
        return `${this.character} ${this.name}는 ${this.price}원입니다.`;
    }
}

// 객체 생성을 위한 클래스
const americano3 = new OrderCoffee2('아메리카노', 4000);
const latte3 = new OrderCoffee2('라떼', 4500);

console.log(americano3.printOrder()); // 아메리카노는 4000원 입니다.
console.log(latte3.printOrder()); // 라떼는 4500원 입니다.

console.log(americano3.making()); // 아메리카노를 만들고 있습니다.
console.log(latte3.making()); // 라떼를 만들고 있습니다.

console.log(americano3.made()); // 아메리카노가 완성되었습니다.
console.log(latte3.made()); // 라떼가 완성되었습니다.

const charLatte = new CharacterCoffee('라떼', 6500, '미니언즈');
console.log(charLatte.printOrder()); // 미니언즈 라떼는 6500원입니다.
