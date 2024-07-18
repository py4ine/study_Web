/*
Spread Operator
배열이나 객체의 요소를 개별적으로 분리하거나 확장하는 데 사용되는 문법
ES6(ECMAScript 2015)에서 도입
배열과 객체 작업을 간단하게 만들어 줌
세 개의 점(...)으로 표현

주요 용도 - 배열 복사 및 병합, 객체 복사 및 병합, 함수 인수
*/

// 배열 복사
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
const copiedArray1 = [originalArray];

console.log(originalArray);
console.log(copiedArray);
console.log(copiedArray == originalArray);
console.log(copiedArray1);

// 배열 병합
const array1 = [1,2,3];
const array2 = [4,5,6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray);