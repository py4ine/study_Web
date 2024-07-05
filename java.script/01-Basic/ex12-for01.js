// 제어문 - 반복문 for

 let company = ["네", "카", "라", "쿠", "베", "당", "토"];

console.log(company[0]);
console.log(company[1]);
console.log(company[2]);
console.log(company[3]);
console.log(company[4]);
console.log(company[5]);
console.log(company[-1]);  // undefined로 출력됨

for(let i = 0 ; i < 7 ; i++) {
    console.log(company[i]);
}


for(let i = 0 ; i < 10 ; i++) {  //초과분은 undefined로 출력됨
    console.log(company[i]);
}

for(let i = 0 ; i < company.length ; i++) {
    console.log(company[i]);
}