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
