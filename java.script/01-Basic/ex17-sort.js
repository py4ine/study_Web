// // 정렬
//  // 정렬 함수 객체.sort()
// let arr = [4, 8, 2, 7, 6];
// arr.sort();
// console.log(arr);

// // select sort(선택정렬)
// arr = [4, 8, 2, 7, 6];
// for(let i=0; i<arr.length -1; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//         if(arr[i] > arr[j]) {
//             let tmp = arr[i];
//             arr[i] = arr[j]
//             arr[j] = tmp;
//             console.log(arr);
//         }
//     }

// }
// console.log(arr)


// // 주민번호 판독기
// let k_number = prompt("번호입력:");
// let code = [];

// if (k_number.includes('-')) {
//     k_number = k_number.replace('-', "")
// } else if (k_number.includes(' ')) {
//     k_number = k_number.replace(' ', "")
// }
// // console.log(k_number);
// let x_code = parseInt(k_number[12]);
// k_number = k_number.slice(0, 12);

// for (let i of k_number) {
//     let number = parseInt(i);
//     code.push(number);
// }

// let sum_code = code[0]*2 + code[1]*3 + code[2]*4 + code[3]*5 + code[4]*6 + code[5]*7 + code[6]*8 + code[7]*9 + code[8]*2 + code[9]*3 + code[10]*4 + code[11]*5;
// // let sum_code = k_number[0]*2 + k_number[1]*3 + k_number[2]*4 + k_number[3]*5 + k_number[4]*6 + k_number[5]*7 + k_number[6]*8 + k_number[7]*9 + k_number[8]*2 + k_number[9]*3 + k_number[10]*4 + k_number[11]*5;
// // console.log(sum_code);
// sum_code = 11 - (sum_code % 11);
// if (sum_code == 11) {
//     sum_code = 1;
// } else if (sum_code == 10) {
//     sum_code = 0;
// }
// // console.log(sum_code);
// // console.log(x_code);

// if (sum_code == x_code) {
//     console.log("정상 주민등록번호");
// } else {
//     console.log("비정상 주민등록번호");
// }


// // 정상 주민번호 판별 함수로 만들기
// function k_number(number) {
//     if (number.includes('-')) {
//         number = number.replace('-', "")
//     } else if (number.includes(' ')) {
//         number = number.replace(' ', "")
//     }
//     let x_code = parseInt(number[12]);
//     number = number.slice(0, 12);

//     let code = [];
//     for (let i of number) {
//         let int_no = parseInt(i);
//         code.push(int_no);
//     }
    
//     let sum_code = code[0]*2 + code[1]*3 + code[2]*4 + code[3]*5 + code[4]*6 + code[5]*7 + code[6]*8 + code[7]*9 + code[8]*2 + code[9]*3 + code[10]*4 + code[11]*5;
//     sum_code = 11 - (sum_code % 11);
    
//     if (sum_code == 11) {
//         sum_code = 1;
//     } else if (sum_code == 10) {
//         sum_code = 0;
//     }

//     if (sum_code == x_code) {
//         return console.log("정상 주민등록번호");
//     } else {
//         return console.log("비정상 주민등록번호");
//     }
// }

// k_number(prompt("검증번호"));



/* 제너레이터 구하기
어떤 자연수 n이 있을 때,
d(n)을 n의 각 자릿수 숫자들과 n 자신을 더한 숫자라고 정의.
예를 들어 d(91)=9+1+91=101과 같은 식이 있을 때,
n을 d(n)의 제너레이터라고 함. 위의 예에서 91은 101의 제너레이터이다.
어떤 숫자들은 다음과 같이 하나 이상의 제너레이터를 가지고 있다.
101의 제너레이터는 91뿐 아니라 100( d(100)=1+0+0+100=101 )e도 있다.
어떤 숫자들은 제너레이터를 가지고 있지 않다.
제너레이터가 없는 숫자를 인도의 수학자 Kaprekar가 셀프넘버라 이름 붙였다.
예를 들어 1,3,5,7,9,20,31,...은 셀프넘버들이다.

1이상이고 5000보다 작은 모든 셀프넘버들의 합을 구하라. */

function generator(value) {
    let str_value = value.toString();
    let sum_value = 0
    for ( let i of str_value) {
        let each_value = parseInt(i);
        sum_value += each_value;
    }
    let result = value + sum_value
    return result

}

let generator_num = [];
for (let i=1; i<=5000; ++i) {
    generator_num.push(generator(i));
}
console.log(generator_num);

let self_num = []
let sum_self_num = 0
for (let i=1; i<=5000; ++i) {
    if (generator_num.includes(i)) {
        continue;
    } else {
        self_num.push(i);
        sum_self_num += i;
    }
    
}
console.log(self_num);
console.log("셀프넘버합:", sum_self_num);

/* 코드개선 by GPT
let generator_num = new Set();
for (let i = 1; i <= 5000; ++i) {
    generator_num.add(generator(i));
}

let self_num = [];
let sum_self_num = 0;
for (let i = 1; i <= 5000; ++i) {
    if (!generator_num.has(i)) {
        self_num.push(i);
        sum_self_num += i;
    }
}
console.log(self_num);
console.log("셀프넘버합:", sum_self_num);
*/
