// Map - 키:값 쌍으로 이루어진 집합

const userMap = new Map();
userMap.set("name", "홍길동");
userMap.set("email", "hong-dg@naver.com");
userMap.set("phone", "010-2312-3299");
console.log(userMap)


console.log(userMap.size)  // 길이

console.log(userMap.get("name"));  // key값을 입력하면 value값 출력

console.log(userMap.has("name"));  // (key)값이 존재하는지 확인
console.log(userMap.has("info"));

console.log(userMap.delete("phone"));  // 삭제하고 true 반환
console.log(userMap.delete("phon"));  // 삭제 못하여 false 반환

// 맵 순회하기
userMap.forEach((value, key) => {
    console.log(key, value);
})
console.log(userMap);

console.log(userMap.keys());  // key값들만 출력
console.log(userMap.values());  // value값들만 출력
console.log(userMap.entries());  // 모든 key, value 출력
console.log([...userMap.entries()]);


// map을 객체로 변환
const obj = Object.fromEntries(userMap);
console.log(obj);

// 객체를 map으로 변환
let objToMap = new Map(Object.entries(obj));

