// 객체

let person = new Object();

person.name = "홍길동";  // 속성부여
person.age = 20;  // 속성부여
person.getPerson = function () {
    console.log('person:', this);
    return `이름:${this.name}, 나이:${this.age}, \
이름:${person.name}, 나이:${person.age}`;
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.getPerson());
console.log(this);  // class로 정의된 것이 아니면, this는 문서전체

let person2 = Object();
console.log(person2.name);
console.log(person2.this);
console.log(this);