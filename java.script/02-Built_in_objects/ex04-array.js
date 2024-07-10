// 배열

// 배열을 문자열로 변환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(typeof(fruits.toString()));


// 구분자 지정
console.log(fruits.join("-"));
console.log(typeof(fruits.toString()));


// 배열의 마지막 요소 가져나오기 (pop)
console.log(fruits.pop());  //
console.log(fruits);

// 배열의 마지막에 요소 추가
fruits.push("Mango");
console.log(fruits);

// 배열의 첫 번째 요소 가져나오기 (shift)
console.log(fruits.shift());
console.log(fruits);

// 배열의 첫 번째에 요소 추가 (unshift)
fruits.unshift("Lemon");
console.log(fruits);

// 배열의 요소 변경
fruits[0] = "Banana";
console.log(fruits);

// 특정 위치에 요소 추가/제거 (splice)
fruits = ["Kiwi", "Banana", "Apple", "Pineapple"];
fruits.splice(2, 1, "Lemon", "Mango");  // (넣을 위치, (넣을 위치로부터)삭제할 수, 넣을거)
console.log(fruits)


// 배열 합치기 (concat)
let f1 = ["kiwi", "Banana"];
let f2 = ["Apple", "Pineapple"];
console.log(f1.concat(3));


// 배열 일부 자르기 (slice)
fruits = ["Banana", "Orange", "Lemon", "Apple"]
console.log(fruits.slice(3));
console.log(fruits.slice(1,3));