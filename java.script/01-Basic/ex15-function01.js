// function -> 함수 = 기능

function 자판기(choice) {
    let drink = choice + "물";
    switch (choice) {
        case "커피":
            drink = "밀크커피"; break;
        case "우리차":
            drink = "율무차"; break;
    }
    return drink;
}
// let choice = prompt("마실음료?");
// console.log(자판기(choice));


function sum1(p1, p2) {
    let sum = p1 + p2;
    return sum;
}
let s1 = sum1(23, 42);  // 함수호출
console.log(s1);


// 함수를 변수로 설정하는 것 가능
sum2 = function sum1(p1, p2) {
    let sum = p1 + p2;
    return sum;
}
console.log(sum2(1, 1));  // 함수호출


s = sum2;
console.log(s(2, 2));  // 함수호출


// Arrow Function (화살표 함수)
sum3 = (p1, p2) => {
    let sum = p1 + p2;
    return sum;
}
console.log(sum3(3,2));


mf = (a, b)  => a * b;  // 함수정의: 중괄호와 return 생략
console.log(mf(2, 3));


// 함수를 왜? 사용 -> 반복 사용 + 수정사항 발생시 편리
 // 자주 사요하는 기능을 정의 해두고 필요할 때 호출하여 사용
 //입력(매개변수), 처리(본문), 출력(return)