// 제어문 - 분기문 switch
 // 해당 위치로 이동하고, 해당 구문부터 계속 실행

let n = 4;
switch (n) {
    case 1:
        console.log('1');
        console.log('11');
    case 2: console.log('2');
    case 3: console.log('3');
    case 4: console.log('4');
    case 5: console.log('5');
}
console.log('end');


let m = 2;
switch (m) {
    case 1:
        console.log('1');
        console.log('11');
        break
    case 2: console.log('2');
        break
    case 3: console.log('3');
        break
    case 4: console.log('4');
        break
    case 5: console.log('5');
        break
}
console.log('end');


score = 10;
switch (true) {
    case score >= 90:
        grade = "A"; break;
    case score >= 80:
        grade = "B"; break;
    case score >= 70:
        grade = "C"; break;
    case score >= 60:
        grade = "D"; break;
    default:
        grade = "F";
}
console.log(grade)