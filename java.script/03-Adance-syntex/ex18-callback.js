// 콜백 함수

let onclick = (n, callback=undefined) => {
    console.log('callback함수를 필요로 하는 함수');
    if (callback === undefined) {
        return n;
    }
    return callback(n);
}
let ret = onclick(10);
console.log(ret);

ret = onclick(10, (value) => value*10);
console.log(ret);



let button = (callback=undefined) => {
    console.log('버튼함수');
    console.log(callback);
    if (callback !== undefined) {
        return callback();
    }
}

button();
button(() => console.log('동작1'));
button(() => console.log('동작2'));
button(() => console.log('동작3'));