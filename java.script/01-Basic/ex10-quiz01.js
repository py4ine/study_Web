/*
버스는 10정거장 미만일 경우 각 역의 평균 이동 시간은 2분이 소요되며,
10정거장이 넘으면 4분의 소요시간이 걸린다.
버스 정거장 수를 입력하면 소요시간을 계산하는 프로그램을 작성하시오.
*/

let bus_station = parseInt(prompt("버스 정거장 수를 입력하세요:"));
let bus_less_min = 2;
let bus_more_min = 4;

if(bus_station < 10){
    move_time = bus_station * bus_less_min;
} else{
    move_time = ((bus_station - 10) * bus_more_min) + (10 * bus_less_min);
}
console.log(`총 소요시간은 ${move_time}분 입니다.`);


/*
지하철은 7정거장까지 각 역의 평균 이동 시간은 3분이 소요되며,
8정거장부터는 2분의 소요시간이 걸린다.
지하철 정거장 수를 입력하면 소요시간을 계산하는 프로그램을 작성하시오.
*/

let subway_station = parseInt(prompt("지하철 정거장 수를 입력하세요:"));
let subway_less_min = 3;
let subway_more_min = 2;

if(subway_station <= 7){
    move_time = subway_station * subway_less_min;
} else{
    move_time = ((subway_station - 7) * subway_more_min) + (7 * subway_less_min);
}
console.log(`총 소요시간은 ${move_time}분 입니다.`);