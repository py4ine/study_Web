// window 객체: 전역 객체 window.~ [window는 생략가능]

prompt
console

window.alert("이것이 알림창이다.");  // 알림창을 띄우는 함수
inputData = window.prompt('입력:');
window.console.log(inputData);


// confirm() 허락받는 창을 띄우는 함수
if (window.confirm("허락plz")) {
    alert("허~");
} else {
    alert("삐~");
}


// 새 창을 여는 함수
// window.open("http://www.naver.com");


// 일정 시간 후 실행
window.setTimeout( function() {
    alert('코드실행');
}, 1000);  // 1초후


// 일정 시간 간격으로 실행
let count = 0;
const func = window.setInterval( function() {
    if (count < 0) {
        console.log('코드실행', count);
        count++;
    } else {
        alert('코드 종료');
        clearInterval(func)  // 초기화
    }
}, 1000);  // 1초마다
