/*
Log-in 페이지
session 사용하기
DB와 비교해서 login
id/pw 찾기?
*/

// 초기세팅
const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const port = 5000;

const app = express();  // express 객체생성

// 미들웨어 적용
app.use(express.static(path.join(__dirname, 'public')));  // 정적파일 공유 경로 설정
app.use(bodyParser.json());  // JSON형식 요청본문을 파싱하여 req.body객체로 변환
app.use(bodyParser.urlencoded({ extended: true }));  // URL인코딩 형식의 요청본문을 파싱하여 req.body객체로 변환

// MySQL 커넥션 풀 설정
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10
});

// 세션 설정
app.use(session ({
    secret: 'secret-key',
    resave: false,  // 세션이 수정되지 않아도 항상 저장
    saveUninitialized: true,  // 초기화되지 않은 세션도 저장
    cookie: {
        httpOnly: true,  // 브라우저에서 javascript로 접근 불가
        secure: false,  // HTTPS가 아닌 환경에서도 사용할 수 있도록 설정
        maxAge: 1000 * 60 * 60  // 1시간 후 세션 만료
    }
}));

// app.get('/', (req, res) => {
//     console.log('현재 요청한 브라우저의 세션ID:', req.session.id);
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// 로그인
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // email과 password를 입력하지 않았을때,
    if (!email || !password) {
        return res.status(400).json({ message: 'id와 password를 정확히 입력해주세요'})
    }

    // email과 password 정상 입력시, DB의 ID/PW 정보 가지고 오기
    try {
        const connection = await pool.getConnection()
        const [rows] = await connection.query('SELECT user_id_email, user_passwd FROM tb_user WHERE user_id_email = ?', [email]);

        if (rows.length === 0) {
            return res.status(404).send('ID를 찾을 수 없습니다');
        } else {
            const user = rows[0];
            if (email === user.user_id_email && password === user.user_passwd) {  // 입력데이터와 DB데이터 비교
               req.session.user = { email: email };  // 세션에 사용자 정보 저장
               res.redirect('/');
            } else {
                res.send('로그인에 실패하였습니다. 다시 시도하세요.');
            }
        }
    } catch (err) {
        console.error('쿼리실행에러:', err);
        res.status(500).send('서버에러');
    } finally {
        if (connection) {
            connection.release();
        }
    }
});

// 로그아웃
app.get('/logout', (req, res) => {
    req.session.destroy()  // 세션삭제
    res.redirect('/');
});


// 서버 시작
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});