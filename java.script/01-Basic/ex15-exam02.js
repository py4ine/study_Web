// 재귀 함수 만들기 실습
// 먼저 일반 함수로 정의 후 반복되는 부분을 파악하여 재귀 함수 정의
// 인자로 n을 전달하면 n에 대한 팩토리얼을 반환하는 함수
// 1 * 2 * 3 * 4 ... * n

// 일반코드
let n = 10;
let fac = 1;
for (let i=1 ; n >= i ; ++i) {
    fac *= i;
    console.log("i=",i, "fac=",fac);
}
console.log(fac);

// 함수
function factorial(n) {
    let fac = 1;
    for (let i=1; n>=i; ++i ) {
        fac *= i;
        console.log("i=",i, "fac=",fac);
    }
    return fac;
}
console.log(factorial(5))


// 재귀함수
function factorial2(n) {
    let fac = 1;
    if (n == 0) {
        return;
    }
    factorial2(n-1);
    console.log(n,"번");
    fac *= n;
    console.log(n);

}
factorial2(5);