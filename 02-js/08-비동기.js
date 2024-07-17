// 동기
console.log('1번');
console.log('2번');
console.log('3번');

// 비동기
console.log('1번');

setTimeout(() => {
    console.log('2번');
}, 1000);

console.log('3번');

// fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(date => console.log(date));

console.log('데이터 요청 중...');

// 콜백 패턴
const a = callback => {
    setTimeout(() => {
        console.log('aa');
        callback();
    }, 1000);
};
const b = () => {
    console.log('bb');
};

a(b);

// promise 패턴
const aa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aa');
            resolve();
        }, 1000);
    });
};

const bb = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bb');
            resolve();
        }, 1000);
    });
};

const cc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('cc');
            resolve();
        }, 1000);
    });
};

// aa()
//     .then(bb)
//     .then(cc)
//     .then(() => {
//         console.log('끝');
//     });

Promise.all([aa(), bb(), cc()]).then(() => {
    console.log('끝');
});

// promise 예제
const getUser = userId => {
    return new Promise((resolve, reject) => {
        // api 호출
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                if (!res.ok) {
                    return reject('사용자 정보를 가져오지 못했습니다.');
                }
                return res.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
};

getUser(1)
    .then(data => {
        console.log(data.name);
        return getUser(2);
    })
    .then(data => {
        console.log(data.name);
        return getUser(3);
    })
    .then(data => {
        console.log(data.name);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        console.log('끝');
    });

// async await
const main = async () => {
    try {
        const data1 = await getUser(1);
        console.log(`async await : ${data1.name}`);

        const data2 = await getUser(2);
        console.log(`async await : ${data2.name}`);

        const data3 = await getUser(3);
        console.log(`async await : ${data3.name}`);
    } catch (err) {
        console.error(err);
    } finally {
        console.log('async await 끝');
    }
};

main();

console.log('aa' + fetch('https://jsonplaceholder.typicode.com/users').then(res => console.log(res.json())));
