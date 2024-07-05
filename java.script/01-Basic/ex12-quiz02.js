// 구구단을 출력해보세요.

// for (let i=2 ; i<10 ; ++i) {
//     console.log(`구구단 ${i}단`)
//     for ( let j=1 ; j<10 ; ++j) {
//         console.log(`${i} x ${j} = ${j*i}`)
//     }
// }


/*
쌀 100통이 저장되어 있는 창고에 암수 1쌍의 쥐가 있다.
쥐 한마리가 하루에 20g씩의 쌀을 먹고 10일마다 쥐의 수가 2배씩 증가한다.
며칠 만에 창고의 쌀이 모두 쥐의 먹이가 될까? 그리고 쥐는 총 몇마리인가?
(한통은 80kg)
*/

let rice_basket = 100;  // 통
let one_basket = 80;  // kg
let total_rice = one_basket * rice_basket * 1000;  // g
let rat = 2;  // 처음 쥐의 마리 수
let day_eat = 20 * rat; // g

let day = 0;
for ( total_rice ; total_rice > day_eat ; --day_eat ) {  // 증감부분이 --day_eat이나 ++day_eat나 동일한 결과값, day로 설정하면 쥐의 수가 계속 2가 되며 이상해짐
    day += 1
    let day_eat = 20 * rat; // g
    
    if (day % 10 == 0) {
        rat += rat;  // 가독성 상 rat *=2가 더 선호됨
    }
    
    total_rice -= day_eat;

    // 디버깅을 위해 현재 상태 출력 (필요에 따라 제거 가능)
    // console.log(`Day ${day}: 남은 쌀 ${total_rice}g, 쥐 수 ${rat}`);
        
}
console.log("쌀이 모두 없어지는 날:", day+"일");
console.log("총 쥐의 수:", rat+"마리");


/*
다른 풀이1 by GPT
let rice_basket = 100;  // 통
const one_basket = 80;  // kg
let total_rice = one_basket * rice_basket * 1000;  // g (전체 쌀의 양)
let rat = 2;  // 초기 쥐의 수
const daily_consumption_per_rat = 20;  // 쥐 한 마리가 하루에 먹는 쌀의 양 (g)
let day = 0;

// total_rice가 0 이하가 될 때까지 반복    
// 매일 쥐들이 먹는 쌀의 양을 total_rice에서 차감 (total_rice -= daily_consumption_per_rat * rat)
for (; total_rice > 0; total_rice -= daily_consumption_per_rat * rat) {
    day++;

    // 10일마다 쥐의 수가 2배로 증가
    if (day % 10 === 0) {
        rat *= 2;
    }

    // 디버깅을 위해 현재 상태 출력 (필요에 따라 제거 가능)
    console.log(`Day ${day}: 남은 쌀 ${total_rice}g, 쥐 수 ${rat}`);
}

console.log(`총 ${day}일 만에 쌀이 모두 먹혔습니다.`);
console.log(`마지막 날 쥐의 수는 ${rat}마리입니다.`);


다른 풀이2 by GPT
let rice_basket = 100;  // 통
const one_basket = 80;  // kg
let total_rice = one_basket * rice_basket * 1000;  // g (전체 쌀의 양)
let rat = 2;  // 초기 쥐의 수
const daily_consumption_per_rat = 20;  // 쥐 한 마리가 하루에 먹는 쌀의 양 (g)

for (let day = 1; total_rice > 0; day++) {
    // 하루 동안 쥐들이 먹는 쌀의 양 계산
    let day_eat = daily_consumption_per_rat * rat;
    total_rice -= day_eat;

    // 10일마다 쥐의 수가 2배로 증가
    if (day % 10 === 0) {
        rat *= 2;
    }
    // 디버깅을 위해 현재 상태 출력 (필요에 따라 제거 가능)
    // console.log(`Day ${day}: 남은 쌀 ${total_rice}g, 쥐 수 ${rat}`);

    // 쌀이 모두 먹혔을 때의 일수와 쥐의 수를 출력
    if (total_rice <= 0) {
        console.log(`총 ${day}일 만에 쌀이 모두 먹혔습니다.`);
        console.log(`마지막 날 쥐의 수는 ${rat}마리입니다.`);
    }
}


다른 풀이3 by GPT
let rice_basket = 100;  // 통
const one_basket = 80;  // kg
let total_rice = one_basket * rice_basket * 1000;  // g (전체 쌀의 양)
let rat = 2;  // 초기 쥐의 수
const daily_consumption_per_rat = 20;  // 쥐 한 마리가 하루에 먹는 쌀의 양 (g)
let day = 0;

while (total_rice > 0) {
    day += 1;
    // 하루 동안 쥐들이 먹는 쌀의 양 계산
    let day_eat = daily_consumption_per_rat * rat;
    total_rice -= day_eat;

    // 10일마다 쥐의 수가 2배로 증가
    if (day % 10 === 0) {
        rat *= 2;
    }

    // 디버깅을 위해 현재 상태 출력 (필요에 따라 제거 가능)
    // console.log(`Day ${day}: 남은 쌀 ${total_rice}g, 쥐 수 ${rat}`);
}

console.log(`총 ${day}일 만에 쌀이 모두 먹혔습니다.`);
console.log(`마지막 날 쥐의 수는 ${rat}마리입니다.`);
*/


/*
첫날에 10원을 예금하고, 다음날에는 전날의 2배를 예금하는 방식으로
한달 동안 저축한 금액은?
*/

let total_save = 0; // 총 저축액 초기화
let save = 10;  // 첫 저축액

for (let i=1; i<30+1; ++i ) {
    total_save += save;
    // console.log(i+"일", "저축금액:", save, "총 저축금액:", total_save);
    save *=2  // 전날의 2배 저금
}
console.log("총 저축금액:", total_save+"원");


// // 다른 풀이1 by 진석님
// var money = 10;

// for (var i=1; i<31; i++) {
//     money = money*2;
// }
// console.log(money+"원");


// // 다른 풀이2 by 진수님
// let deposit = 10;
// let savings = 0;

// // 한달 30일 기준
// for (let i = 0; i < 30; i++) {
//     savings += deposit;
//     deposit *= 2;
// }
// console.log(`30일 동안 저축된 금액: ${savings}원`);


/*
1부터 시작하여 홀수의 합을 구하면서 그 합이 10,000을 넘지 않는
마지막 수를 구하는 프로그램을 작성하여라
*/

let count = 0;
let sum_num = 0;

for (let i=1 ; sum_num<10000; i+=2) {  // 조건식은 sum_num+i<=10000이 더 명확함
    count = i;
    sum_num +=i;
}

console.log("마지막 홀수의 합:", sum_num);
console.log("마지막 수:", count);


// // 다른 풀이1 by 건희님 
// var oddSum = 0;
// var lastOdd = 0;

// for (var i = 1; ; i += 2) { // i를 1부터 시작하여 매번 2씩 증가시킴
//     if (oddSum + i > 10000) {
//         break; // 합이 10000을 넘으면 루프 종료
//     }
//     oddSum += i; // 홀수를 합계에 더함
//     lastOdd = i; // 마지막으로 더한 홀수를 저장
// }

// console.log(`합계가 10000을 넘지 않는 마지막 홀수: ${lastOdd}, 총합: ${oddSum}`); // 마지막 홀수와 합계 출력

// // 다른 풀이2 by 진석님
// var a = 1;
// var h = 0;

// while (true) {
//     if (a % 2 != 0) {
//         h = h + a;
//     }
//     if (h >= 10000) {
//         console.log(a);
//         break;
//     }
//     a = a + 1;
// }