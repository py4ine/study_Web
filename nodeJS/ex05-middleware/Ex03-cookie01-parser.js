// npm install cookie parser

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');  // 쿠키를 파싱하는 역할

const app = express();
app.use(cookieParser());

// get방식으로 /(최상위) url로 요청이 오면, public폴더 ex03.html을 응답으로 보냄
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ex03.html'));
});

// 쿠키 생성 res.cookie('쿠키이름', '쿠키값', { 옵션값 });
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'Doraemon', { maxAge: 60 * 1000, httpOnly: true });
    res.cookie('cookie', 'session-cookie', { httpOnly: true });
    res.send('응답에 쿠키 포함됨');
})

app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    const cookie = req.cookies.cookie;
    console.log('영구 쿠키:', username);
    console.log('세션 쿠키:', cookie);
    res.send(`요청에 포함된 쿠키: ${username}`);
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('쿠키가 삭제되었습니다');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});