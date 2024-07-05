// 제어문 - 반복문 for
// for .. in

// python=딕셔너리, java.script=객체, java=map
let person = {
    name : '홍길동',
    age : 20
}

for (let key in person) {
    console.log(person[key]);
}

for (let k in person) {
    console.log(person[k]);
}

let company = ["네", "카", "라", "쿠", "베", "당", "토"];
for ( let c in company ) {
    console.log(c);  // 인덱스 번호 출력
    console.log(company[c]);  //인덱스 번호에 해당하는 값 출력
}


// for .. of
for (let c of company) {
    console.log(c);
}

let str = "abcdefg"
for (let ch of str) {
    console.log(ch)
}

for (let ch of "hijklmn") {
    console.log(ch)
}