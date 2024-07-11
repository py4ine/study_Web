// Global Scope  전역/지역 변수
//글로벌에서의 변수 선언
var globalVar = "글로벌 변수";

function globalFunction() {
    console.log('함수내', globalVar);
}
globalFunction();  // 전역변수이기에 함수내에서 호출해여도 문제 없음

console.log("전역", globalVar);  // 전역에서 글로벌 변수 사용하여 문제 없음



// Function Scope 함수 안에서의 변수 선언
function myFunction() {
    var functionVar = "함수 안 변수";
    console.log(functionVar);
}
myFunction();
// console.log(functionVar);  // functionVar는 함수 내에서 선언되었기 떄문에 에러 발생



// Block Scope
if (true) {
    let blockVar = "블록 안 변수";
    console.log(blockVar);  // 같은 블록안에서 선언된 변수를 사용해서 문제 없음
}
// console.log(blockVar);  // 블록안에서 선언된 변수를 전역에서 사용해서 에러 발생



// Lexical Scope
// 함수가 선언된 위치에 따라 결정되는 스코프
// 내부 함수는 외부 함수의 변수에 접근 가능
function outerFunc() {
    var outerVar = "outter 변수";
    function innerFunc() {
        console.log('inner', outerVar);
    }
    console.log('outter의', outerVar);
}
outerFunc();  // 문제없음
// innerFunc();  // 전역에서 함수 안 함수를 호출하여 에러발생



// Closuer
// 함수가 선언될 때의 렉시컬 환경 조합
// 함수가 선언된 스코프 외부에서 해당 스코프의 변수에 접근 가능

function outerFunction() {
    var outerVar = "I'm an outer variable";

    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}
const closure = outerFunction();
closure();  // I'm an outer variable 출력


function closureFunction(init) {
    var counter = init;

    return function () {
        return ++counter;
    }
}
var myClosure = closureFunction(1);
console.log(myClosure());
console.log(myClosure());
console.log(myClosure());