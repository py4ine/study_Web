// 제어문 - break, continue

 // break
for (let i=1; i<5; ++i) {
    console.log(i);
    if(i==3) {
        break;
    }
    console.log('for end');
}
console.log('break end');


 // continue
for (let i=1; i<5; ++i) {
    console.log(i);
    if(i==3) {
        continue;
    }
    console.log('for end');
}
console.log('cycle end');


let n = 0;
while(true) {
    while(true) {
        console.log(`${n}반복`);
        if ( n > 5 ) {
            break;
        }
        n++;
    }
    console.log('반복종료');
    break;
}
