// // 1~10
// console.log(Math.floor(Math.random()*10+1));

// // 10~20
// console.log(Math.floor(Math.random()*10+1+10));

// // -1 ~ 1
// console.log((Math.random()-Math.random()).toFixed(1));
// console.log(Math.floor(Math.random()*3-1));



// // Array 활용(index만 사용하기)하여 로또번호 생성1
// let numbers = [0, 0, 0, 0, 0, 0];  // 6개의 요소

// // 로또번호 생성
// for (let i=0; i<numbers.length; i++) {
//     let pick = Math.floor(Math.random() * 45 + 1); // 1~45랜덤값
//     console.log("뽑은번호:", pick);
    
//     // 중복 체킹 함수
//     if (numbers.includes(pick) == true) {
//         console.log("중복!");
//         i -=1; 
//     } else {
//         numbers[i] = pick;
//     }
// }

// // 출력
// for (let i=0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// }


// // Array 활용(index만 사용하기)하여 로또번호 생성2 - flag
// let numbers = [0, 0, 0, 0, 0, 0];  // 6개의 요소

// // 중복확인용 flag 생성
// let flag = "0 ".repeat(46);
// flag = flag.trim().split(" ");
// console.log(flag);
// for (let i=0; i <46; ++i) {
//     flag[i] = 0;
// }
// // 위 for문 대신 let flag = "0 ".repeat(46).trim().split(" ").map(Number);
// console.log(flag);

// // 로또번호 생성
// for (let i=0; i<numbers.length; i++) {
//     let pick = Math.floor(Math.random() * 45 + 1);  // 1~45랜덤값
//     console.log("뽑은수:", pick);
    
//     // 중복 체킹 함수
//     if (flag[pick] == false) {
//         flag[pick] = true;
//         numbers[i] = pick;
//         console.log(flag);
//         console.log(numbers);

//     } else {
//         i -=1;
//     }
// }

// // 출력
// for (let i=0; i<numbers.length; i++) {
//     console.log(numbers[i]);
// }


// 로또번호 생성3 (shuffle)
let shuffle = [];
for (let i = 0; i < 45; i++) {
  shuffle[i] = i+1;
}
// console.log("초기배열", shuffle);

let n = 200;
for (let i=0; i<n; ++i) {
    let pick1 = Math.floor(Math.random() * 45); //인덱스로 사용할 번호 0~45
    let pick2 = Math.floor(Math.random() * 45); //인덱스로 사용할 번호 0~45
    // console.log("뽑은수1:", pick1, "뽑은수2:", pick2);

    let tmp = shuffle[pick1];
    shuffle[pick1] = shuffle[pick2];
    shuffle[pick2] = tmp;
    // console.log(`${i+1}셔플\n ${shuffle}`);
}

console.log(shuffle[0], shuffle[1], shuffle[2], shuffle[3], shuffle[4],shuffle[5]);
console.log(shuffle.slice(0, 6));






