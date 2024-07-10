// date 날짜와 시간

const now = new Date();  // 현재시점의 시간
console.log(now);

let d = new Date(2024, 2, 23, 8, 20, 10, 0)
console.log(d);

d = new Date(10000000000);
console.log(d)

d2 = new Date("October 13, 2014 11:13:00");  //문자열로 생성
console.log(d2);


// 현재 날짜/시간 가여조이
d = new Date()
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());  //요일 (월=1, 화=2, 수=3,,,)
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
