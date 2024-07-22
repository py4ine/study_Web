/*

*/

const path = require('path');

const filePath = '/home/usr/dir/file.txt';
console.log(path.basename(filePath));  // 파일이름
console.log(path.dirname(filePath));  // 파일경로
console.log(path.extname(filePath));  // 파일확장자
console.log(path.resolve(filePath));  // 절대경로