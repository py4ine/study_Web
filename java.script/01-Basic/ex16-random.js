// Math.random(): 0~1사이의 난수 생성
for (let i =0; i<5; ++i) {
    console.log(Math.random());
}


let n1 = Math.random();
let n2 = n1 * 100;
let n3 = Math.floor(n2)
console.log(n1);
console.log(n2);
console.log(n3);

console.log(Math.floor(Math.random()*100));