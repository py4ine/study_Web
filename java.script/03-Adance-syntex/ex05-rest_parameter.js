// Rest parameter
// 가변길이 인자 처리를 위한 기능
// 역할: 함수에 전달된 나머지 인수들을 배열로 모아줌
// 표기법: ...(점세개)와 함께 사용됨
// 위치: 항상 함수 매개변수 목록의 마지막에 위치해야 함

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3));  // ...numbers가 함수값 1,2,3을 모두 받아, 6 출력
console.log(sum(4,5,6,7,8));  // 30 출력
console.log(sum());  // 0 출력



// 다른 매개변수와 rest parameter 함께 사용
function example(param1, param2, ...rest) {
    console.log(param1);  // 1 출력
    console.log(param2);  // 2 출력
    console.log(rest);  // 나머지 값 3, 4, 5, 6 출력
}
example(1, 2, 3, 4, 5, 6)