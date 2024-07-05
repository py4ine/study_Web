// 1부터 100까지의 합을 구하세요.
let a = 0
for (let i=1 ; i<100+1 ; ++i) {
    // console.log(i);
    a += i;
}
console.log("1부터 100까지의 합:", a);


// 1부터 100까지 홀수의 합과 짝수의 합을 구하세요.

let one = 0
let two = 0
for (let i=1 ; i<100+1 ; ++i) {
    // console.log(i);
    if (i % 2 == 0) {
        two += i;
    } else {
        one += i;
    }
}
console.log("1부터 100까지 홀수의 합:", one);
console.log("1부터 100까지 짝수의 합:", two);


// 100부터 1까지의 수 중 3의 배수만 출력하세요.

console.log("100부터 1까지의 수중 3의 배수");
for (let i=100 ; i>0 ; --i) {
    // console.log(i);
    if (i % 3 == 0) {
        console.log(i);
    }
}
console.log("---");


// 1부터 100까지의 수 중, 3의 배수는 제외하고,
// 3의 배수이면서 5의 배수인 수를 더하여 출력하세요.

fifteen = 0
for (let i=1 ; i<100+1 ; ++i) {
    if (i % 3 == 0 && i % 5 ==0) {
        // console.log(i);
        fifteen += i;
    }
}
console.log("1~100 중, 3과 5의 배수 합:", fifteen);


// 두 수를 입력 받아 두 수 사이의 합을 구하세요. (ex. 0~11=55)
let input_plus = 0;
let input1 = parseInt(prompt("수1"));
let input2 = parseInt(prompt("수2"));

if (input1 > input2) {
    let tmp = input1;
    input1 = input2;
    input2 = tmp;
}

for (let i=input1+1 ; i<input2 ; ++i) {
    input_plus += i;
}
console.log("두 수 사이의 합:", input_plus);


// 사용자로부터 열 개의 정수를 입력 받아 평균을 구하세요.(변수만 사용)

let total = 0
for (let i=0; i<10; ++i) {
    let v = parseInt(prompt("정수입력:"));
    total += v;
}
let mean = total / 10;
console.log("평균:", mean);