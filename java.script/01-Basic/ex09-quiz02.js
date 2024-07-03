/*
let inputData = prompt();  // 입력되는 데이터의 타입은 문자열
console.log(inputData + 1);
console.log(parseInt(inputData) + 1);  // parseInt -> 문자를 숫자로 변환
console.log(parseFlot(inputData) + 1);  // parseFloat -> 문자를 실수로 변환

let n =parseInt("123");
console.log(n + 1);
*/

/*
표준 체중을 구하도록 작성
표준체중 = (현재 키 - 100) x 0.9
*/
let input_height = parseFloat(prompt("키를 입력하세요(cm):"));
let standard_weight = (input_height - 100) * 0.9;
console.log(standard_weight);
console.log(`표준 체중: ${standard_weight.toFixed(2)} kg`)


/*
비만도 비율을 구하도록 작성
비만도(%) = (현재체중 / 표준 체중) x 100
*/
let input_weight = parseFloat(prompt("몸무게를 입력하세요(kg):"));
let overweight_rate = (input_weight / standard_weight) * 100;
console.log(overweight_rate)


/*
위 동작을 합하여 키와 몸무게를 입력 받아 비만도를 구하도록 작성
*/
console.log("표준 체중:", Math.round(standard_weight*100)/100,"kg");
console.log("비만도 비율:", Math.round(overweight_rate*100)/100,"%");