// JSON 문서형식 -> 파이썬의 딕셔너리와 비슷

//자바스크립트 객체를 JSON 문자열로 변환 (stringify)
const data = {
    person: [
        {name: "홍길동", age: 20},
        {name: "이순신", age: 32},
        {name: "강감찬", age: 24}
    ]
}
console.log(data);

jsonString = JSON.stringify(data);  // json형식을 문자열로 변환
console.log(jsonString);


// 문자열을 JSON형힉으로 변환
const text = `{
    "person": [
        {"name": "홍길동", "age": 20},
        {"name": "이순신", "age": 32},
        {"name": "강감찬", "age": 24}
    ]
}`
console.log(text);

const obj = JSON.parse(text);
console.log(obj);


const newPerson = {name: "임꺽정", age: 78};
obj.person.push(newPerson);
console.log(obj);

const objString = JSON.stringify(obj);
console.log(objString);