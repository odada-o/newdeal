const container = document.querySelector('.container');
console.dir(container);
// 자식노드 (요소, 주석, 텍스트)
console.log(container.childNodes);
// 자식요소 (요소만)
console.log(container.children);

// id로 요소를 찾기
const item1 = document.getElementById('item1');
console.log(item1);

// class로 요소를 찾기
const item2 = document.querySelector('.item:nth-child(2)');
console.log(item2);

// 모든 요소를 찾기
const items = document.querySelectorAll('.item');
console.log(items); // NodeList [div.item, div.item, div.item]

items.forEach(item => console.log(item));

// 부모노드
const item = document.querySelector('.item');
console.log(item.parentNode); // <div class="container">...</div>

// closest()
console.log(item.closest('div'));
console.log(item.closest('.container'));

// 형제노드
console.log(item.previousSibling); // #text
console.log(item.nextSibling); // #text

console.log(item.previousElementSibling); // null
console.log(item.nextElementSibling);

// 자식 요소
console.log(container.children); // #text
console.log(container.firstElementChild);
console.log(container.lastElementChild);

// 요소 생성
const newItem = document.createElement('div');
newItem.textContent = '3';
console.log(newItem); // <div>3</div>

// 요소 추가
container.prepend(new Comment(' prepend comment '));
container.append(newItem);
container.append('ddddd');

// 요소 삭제
item.remove();

// 요소 추가
// 대상요소.insertAdjacentElement('위치', 추가할요소)

container.insertAdjacentElement('beforebegin', newItem);
// container.insertAdjacentElement('afterbegin', 'dddd');

// contains()
console.log(document.body.contains(container)); // true
console.log(container.contains(document.body)); // false

// textContent
console.log(item.textContent);
item.textContent = 'new text';
console.log(item.textContent);
