/*
당신은 놀이공원을 가기 위해 11개의 지하철 역을 지나왔다.
출발역에서 도착역까지 37분이 걸렸다면,
한 역을 지나는데 걸리는 시간은?
*/

var station = 11;
var d_time = 37;
let one_st = d_time / station;
console.log(one_st);


/*
호텔 한 층의 높이는 260cm이다.
총 14개의 층을 쓰고 있으며 1층은 500.23cm라면
이 건물의 높이는 총 몇 m인가? (소수점 3자리 까지만 출력)
*/

var total_s = 14;
var one_h = 260;
var one_floor = 500.23;
let total_h = (((total_s - 1) * one_h) + one_floor) / 100;
let total = Math.round(total_h * 1000) /1000
console.log(total);


/*
당신이 키와 몸무게를 출력 하시오. (소수점 1자리까지)
*/

var height = 185;
var weight = 65;
console.log(height, weight)


/*
전동 자전거로 100m를 가는데 11.27초가 걸린다면,
1시간 후 몇 km를 갈 수 있을까? (소수점 2자리까지 표시)
*/

var d100ms = 11.27;
let sm = 100 / d100ms;
let hm = sm * 60 * 60;
let hk = hm / 1000;
let hkr = Math.round(hk * 100) /100
console.log(hkr);