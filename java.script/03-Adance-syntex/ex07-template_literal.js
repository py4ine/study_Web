/* 탬플릿 리터럴 (Template Literal)
ES6(ECMAScript 2015)에서 도입된 JavaScript의 새로운 문자열 표기법
백틱(backtick)(`)으로 둘러싸여 있으며,
문자열 내에서 변수와 표현식을 삽입할 수 있는 기능을 제공

탬플릿 리터럴의 주요 기능
문자열 내 변수 삽입
여러 줄 문자열
내장 표현식
태그드 탬플릿 리터럴 */

// 문자열 내 변수 삽입 (String Interpolation)
const name = "홍길동";
const age = 25;
const greeting = `안녕하세요, 저는 ${name}이고, ${age}살 입니다.`;

console.log(greeting);