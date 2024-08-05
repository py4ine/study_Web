const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');  // 쿠키를 파싱해주는 역할
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());  // 미들웨어 장착
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ex04.html'));
});

app.post('login', (req, res) => {
    const { email, password, remember } = req.body;

    // 로그인 로직 (간단한 예제, 실제로는 DB와 연동해야 함)
    if (email === 'test@exmaple.com' && password === 'password') {
        if (remember) {
            res.cookie('remember', email, { maxAge: 30 * 24 * 60 * 60 * 1000 });
        } else {
            res.clearCookie('remember');
        }
        res.send('로그인 성공!');
    } else {
        res.send('로그인 실패. 다시 시도하세요.');
    }
});