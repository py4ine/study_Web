/*
유원지에서 말을 태워주는데 처음 30분의 기본요금은 1인당 3,000원이다.
이후에는 10분당 500원씩의 추가요금을 받는다.
말을 탄 시간을 입력 받아서 전체 금액을 계산하는 프로그램을 작성하라.
*/

let play_time = parseInt(prompt("탑승할 시간을 '분'단위로 입력"));
var basic_cost = 3000  // 30분당
var ex_cost = 500  // 10분당

if (play_time <= 30) {
    console.log(`탑승요금: ${basic_cost}원`);
} else {
    console.log("탑승요금:", basic_cost + (Math.ceil((play_time - 30) / 10) * 10) /10 * ex_cost + "원");
}


/*
배달 도시락을 주문하는데 10개까지는 개당 2,500원이고,
10개를 초과하는 양에 대해서는 개당 2,400원이다.
배달 도시락의 개수를 입력 받아서 금액을 계산하는 프로그램을 작성하라.
*/

let order_count = parseInt(prompt("배달도시락 개수를 입력하세요."));
var basic_cost = 2500;  // 10개까지 1개당
var ex_cost = 2400;  // 10개이상 1개당
let basic_amount = basic_cost * order_count;  // 10개 주문까지 총 배송비

if (order_count <= 10) {
    console.log(`배송료 : ${basic_amount}원`);
} else {
    let ex_count = order_count - 10;
    console.log(`배송료 : ${basic_amount + (ex_count * 2400)}원`);
}


/*
디스켓 1통에 5,000원한다.
그런데 한번에 10통 이상을 사면, 전체 금액의 10%를 할인해 준다.
그리고 100통 이상을 사면 전체 금액의 12%를 할인하여 준다.
x통의 디스켓을 사려면 얼마가 있어야 하는가?
*/

let disket_count = parseInt(prompt("디스켓 구매 수량:"));
let disket_cost = 5000  // 1개 금액
let DC10 = 0.1  // 10개 구매 10%
let DC100 = 0.12  // 100개 구매 12%
let total_amount = disket_count * disket_cost

if (disket_count >= 100) {
    console.log(total_amount - (total_amount * DC100) + "원");
} else if (disket_count >= 10) {
    console.log(total_amount - (total_amount * DC10) + "원");
} else {
    console.log(total_amount + "원");
}


/*
세 과목의 성적을 입력 받아 합계와 평균을 구하고
평균이 90이상이면 "A", 80이상이면 "B", 70이상이면 "C", 60이상이면 "D",
60미만이면 "F"를 출력하시오.
*/

let score1 = parseInt(prompt("시험성적1:"));
let score2 = parseInt(prompt("시험성적2:"));
let score3 = parseInt(prompt("시험성적3:"));

let total_score = score1 + score2 + score3;
let mean = total_score / 3;

if (mean >= 90) {
    console.log("A학점");
} else if (mean >= 80) {
    console.log("B학점");
} else if (mean >= 70) {
    console.log("C학점")
} else if (mean >= 60) {
    console.log("D학점");
} else {
    console.log("F학점");
}