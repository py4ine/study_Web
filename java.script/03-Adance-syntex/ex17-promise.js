// promise 예시1

// pending 상태에서 시작??
const myPromise = new Promise( (resolve, reject) => {
    console.log("myPromise작동");
    const success = false;  // 작업의 성공 여부를 결정하는 변수

    //비동기 작업을 시뮬레이션
    setTimeout( () => {
        if (success) {
            resolve('작업성공!');  // fulfilled 상태로 변경
        } else {
            reject('작업실패!');  // rejected 상태로 변경
        }
    }, 1000);  // 1초 후, 작업결과 반환
})
console.log('promise상태: Pending');
myPromise
    .then (result => {
        console.log('Promise상태: fulfilled');
        console.log(result);  // 작업이 성공했을때, 메세지를 출력
    })
    .catch(error => {
        console.log('Promise상태: rejected');
        console.log(error);  // 작업이 실패했을때, 에러 메세지 출력
    });


// promise 예시2
const fetchData = () => {
    return new Promise( (resolve, reject) => {
        console.log('Promise객체 함수 작동');
        setTimeout( () => {
            resolve('[fetchData 응답 데이터]');
        }, 1000);
    });
};
fetchData().then(data => {
    console.log('fetchData:', data);  // fetchData: [fetchData 응답]
})


// promise 예시3
const promise1 = new Promise( (resolve, reject) => {
    let success = true;
    if (success) {
        resolve('[요청성공1]');
    } else {
        reject('[요청실패1');
    }
});
promise1
    .then(message => {
        console.log('promise1:', message);
    })
    .catch(error => {
        console.log(error);
    });


// promise 예시4
const promise2 = new Promise( (resolve, reject) => {
    let success = true;
    if (success) {
        resolve('[요청성공2]');
    } else {
        reject('[요청실패2]');
    }
});
promise2
    .then (message => {
        console.log('promise2:', message);
    })
    .catch (error => {
        console.log('promise2:', error);
    })


// promise 예시5
const delay = ms => {
    return new Promise( resolve => {
        setTimeout(resolve, ms);
    });
};
console.log(delay);
delay(2000)
    .then( () => {
        console.log('2총 후 delay 진행완료!');
    });