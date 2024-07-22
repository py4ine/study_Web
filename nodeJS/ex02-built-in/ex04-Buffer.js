/*
Buffer 객체
    바이너리 데이터(사진, 영상, 압축파일 -> 텍스트로 해석할 수 없는)를 다루기 위해 사용
    특히, 네트워크 통신이나 파일 입출력과 같은 I/O 작업에서 유용
    Buffer는 고정 크기이며 버퍼 내의 데이터는 raw메모리로 저장 (바이트 배열과 )
*/

const buf1 = Buffer.alloc(5);  // 5byte 크기로 버퍼 생성
buf1.write('hello');  // 버퍼에 쓰기
console.log(buf1);  // 버퍼 출력

const buf2 = Buffer.from('hello');  // 문자열로 부터 buffer 만들기
console.log(buf2);

console.log(buf1.toString());
console.log(buf1.toString('hex'));
console.log(buf1.toString('base64'));