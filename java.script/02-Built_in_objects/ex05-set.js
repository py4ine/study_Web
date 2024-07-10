// set 집합 - 중복 데이터 허용 x

const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet);

const mySet2 = new Set();
mySet2.add("홍길동");
mySet2.add("이순신");
mySet2.add("강감찬");
mySet2.add("홍길동");
console.log(mySet2);
console.log(mySet2.size);


// 존재 하는 지 확인
console.log(mySet.has(2));
console.log(mySet.has(5));
console.log(mySet2.has("오바마"));
console.log(mySet2.has("아이유"));


// 요소 삭제
console.log(mySet.delete(2));  // 해당 요소를 지우고 true반환
console.log(mySet.delete(5));  // 지울 요소가 없으면 false반환
console.log(mySet)


// 요소 순회
console.log(mySet2.forEach);  // 요소 전체 반복

mySet2.forEach(function(){
    console.log("반복");
})

mySet2.forEach(function(item){
    console.log("반복", item);
})

mySet2.forEach((item) => {
    console.log(item);
})


// 모든 요소 삭제 (clear())


// 리스트를 set으로
const arr = [1, 2, 3, 4, 5, 4, 7, 2];
const mySet3 = new Set(arr);
console.log(mySet3);

// set을 리스트로
const arr2 = Array.from(mySet3);
console.log(arr2);


// 순회
for (let item of mySet3) {
    console.log(item);
}

const iterator = mySet3.values();  // 반복자
console.log(iterator);


// set의 교집합, 합집합, 차집합 구현
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

console.log(...setA);  // ... = 펼치기

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log('교집합', intersection);

const union = new Set([...setA, ...setB]);
console.log('합집합', union);

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log('차집합', difference);