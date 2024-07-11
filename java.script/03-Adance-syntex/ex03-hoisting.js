// 호이스팅(hoisting)
// 변수 및 함수 선언이 스코프의 최상위로 끌어올려지는 동작


// 변수 호이스팅(var, let, const가 동작이 다름)
console.log(hoistingVar1);  // hoistingVar1이 이후에 선언되었기 때문에 undefined 출력
var hoistingVar1 = "This variable is hoisted";

function hoistedFunction() {
    console.log(hoistedVar2);
    var hoistedVar2 = 'Hoisted within function';
}
hoistedFunction()



// let, const 호이스팅 -> 에러발생
// console.log(hoistedLet);  // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "This variable is hoisted with let";

// console.log(hoistedConst);  // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "This variable is hoisted with const";



// 함수 호이스팅
hoistedFunc();  // 함수는 호이스팅이 되어, 아래 만든 함수가 작동됨.

function hoistedFunc() {
    console.log("This function is hoisted");
}



// 함수 표현식
// hoistedExpression();  // 함수로 지정한 변수는 작동하지 않음. TypeError: hoistedExpression is not a function

var hoistedExpression = function() {
    console.log("This is a hoisted function expression");
}