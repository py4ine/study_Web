// 기본값 파라미터

function greet(name = "guest") {
    console.log(`Hello, ${name}`);
}
greet();  // 함수에 값 입력이 없어, 기본값으로 설정한 guest가 name으로 반환되어 출력
greet("Alice");  // 함수 값이 name에 적용되어 Hello, Alice! 출력


function calculateArea(width=10, height=5) {
    return width * height
}
console.log(calculateArea());  // 함수 입력값 없어, 기본값(10*5) 반영되어 50출력
console.log(calculateArea(7)); // 출력: 35 (7 * 기본값 5)
console.log(calculateArea(7, 3)); // 출력: 21 (7 * 3)
