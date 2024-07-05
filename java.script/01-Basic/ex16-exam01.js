// // 1~10
// console.log(Math.floor(Math.random()*10+1));

// // 10~20
// console.log(Math.floor(Math.random()*10+1+10));

// // -1 ~ 1
// console.log((Math.random()-Math.random()).toFixed(1));
// console.log(Math.floor(Math.random()*3-1));

// Array 활용(index만 사용하기)
let numbers = [0, 0, 0, 0, 0, 0];  // 6개의 요소

// 로또번호 생성
for (let i=0; i<numbers.length; i++) {
    numbers[i] = Math.floor(Math.random() * 45 + 1);
}

// 출력
for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}


중복 체킹 함수
number = numbers[i];
switch (number) {
    case numbers[0]:
        number = Math.floor(Math.random() * 45 + 1); break;
    case numbers[1]:
        number = Math.floor(Math.random() * 45 + 1); break;
    case numbers[2]:
        number = Math.floor(Math.random() * 45 + 1); break;
    case numbers[3]:
        number = Math.floor(Math.random() * 45 + 1); break;
    case numbers[4]:
        number = Math.floor(Math.random() * 45 + 1); break;
    case numbers[5]:
        number = Math.floor(Math.random() * 45 + 1); break;
}
console.log(grade)

