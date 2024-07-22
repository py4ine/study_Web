/*
fs 모듈
    파일 시스템과 상호 작용할 수 있는 메서드를 제공하는 모듈

주요 메서드:
    fs.readFile() : 파일읽기
    fs.writeFile() : 파일쓰기
    fs.appendFile() : 파일에 데이터 추가
    fs.unlink : 파일 삭제
    fs.

*/

// 1. 파일에 쓰기(write)
const fs = require('fs');  // 내장된 모듈

// const content = 'Hello~';
// fs.writeFile('exam.txt', content, 'utf-8', (err) => {
//     if(err) {
//         console.error('파일 쓰기 에러', err);
//         return;
//     }
//     console.log('파일 쓰기 성공');
// });

fs.readFile('exam.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('파일 읽기 에러:', err);
        return;
    }
    console.log('파일로부터 읽은 데이터:', data);
})