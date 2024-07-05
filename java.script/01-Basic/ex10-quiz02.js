// 입력한 데이터가 3의 배수인 경우 출력하시오.
let input01 = parseInt(prompt("정수를 입력하세요"));

if (input01 % 3 == 0) {
    console.log(input01);
}

// 수를 입력 받아 짝, 홀수를 구분하여 출력하시오.
let input02 = parseInt(prompt("정수를 입력하세요"));

if (input02 % 2 == 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}

// 두 수를 입력 받아 큰 수를 출력하시오.
let input03 = parseInt(prompt("정수를 입력하세요"));
let input04 = parseInt(prompt("정수를 입력하세요"));

if (input03 > input04) {
    console.log(input03)
} else if (input04 > input03) {
    console.log(input04)
} else {
    console.log("같음")
}

// 세 수를 입력 받아 큰 순서대로 출력하시오.
let input05 = parseInt(prompt("정수를 입력하세요"));
let input06 = parseInt(prompt("정수를 입력하세요"));
let input07 = parseInt(prompt("정수를 입력하세요"));

if (input05 > input06 && input06 > input07) {
    console.log(input05, input06, input07);
} else if (input05 > input07 && input07 > input06) {
    console.log(input05, input07, input06);
} else if (input06 > input05 && input05 > input07) {
    console.log(input06, input05, input07);
} else if (input06 > input07 && input07 > input05) {
    console.log(input06, input07, input05);
} else if (input07 > input05 && input05 > input06) {
    console.log(input07, input05, input06);
} else {
    console.log(input07, input06, input05);
}

// if (num2 >= num1 && num2 >= num3) {
//     let tmp = num1;
//     num1 = num2;
//     num2 = tmp;
// } else if (num3 >= num1 && num3 >= num2) {
//     let tmp = num1;
//     num1 = num3;
//     num3 = tmp;
// }
// if (num2 <= num3) {
//     let tmp = num2;
//     num2 = num3;
//     num3 = tmp;
// }
// console.log(num1, num2, num3)


// 두수를 입력 받아 큰 수가 짝수이면 출력하시오.
let input08 = parseFloat(prompt("비교할 수를 입력하세요"))
let input09 = parseFloat(prompt("비교할 수를 입력하세요"))

if (input08 > input09) {
    more = input08;
} else if (input08 < input09) {
    more = input09;
} else {
    more = input08;
}
if (more % 2 == 0) {
    console.log(more);
}


// 두수를 입력 받아 합이 짝수이고 3의 배수이면 출력하시오.

let input10 = parseFloat(prompt("수를 입력하세요"));
let input11 = parseFloat(prompt("수를 입력하세요"));
let plus = input10 + input11;

if (plus % 2 == 0 && plus % 3 == 0) {
    console.log(plus)
}


// 수를 입력 받아 출력하시오. (ex: 1,2,4,5,7,...)
// (단, 3의 배수는 제외하고 3의 배수이면서 5의 배수인 수는 출력)

let input12 = parseFloat(prompt("수를 입력하세요"));
if (input12 % 15 == 0) {
    console.log(input12);
} else if (input12 % 3 != 0) {
    console.log(input12);
}

// if (num % 3 != 0 || num % 5 == 0) {
//     console.log(num);
// }