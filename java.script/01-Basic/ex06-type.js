// String 문자열
let name1 = '홍길동';
let name2 = '이순신';
let s1 = "hello~'홍길동'!";
let s2 = 'hello~"홍길동"!';
let s3 = "hello~\"홍길동\"!";  //이스케이프 문자
let s4 = '1' + 'abc';
let s5 = '123' + 456;
let s6 = '123' + '456';
console.log("s4 :", s4);
console.log(s5);
console.log(s6);
console.log(s5+s6)


// Number 숫자
let x1 = 3.14;  // 실수
let x2 = 34;  // 정수

// Boolean
let isOk = true;  // or false

// undefined - 정의 되지 않음
let a;
console.log(a);
console.log(a + 10);

// null - 값이 없음
let b = null;
console.log(b);
console.log(b + 10);
console.log(a + b);
console.log(b + s1)
console.log(x2 + b)