const mysql = requirl('mysql2');

// MySQL 커넥션 풀 설정
const pool = mysql.createPool( {
    host: "locallhost",  // 데이터베이스 서버의 호스트 이름이나 IP주소를 지정(필수!)
    user: "root",  // 데이터베이스에 연결할 사용자 이름(필수)
    password: "root1234",  //데이터베이스에 연결할 사용자 비번(필수)
    database: "mydb",  // 연결할 데이터베이스 이름 지정(필수)
    // port: 3306,  // 데이터베이스 서버 포트 지정
    // waitForConnections: true,  // 풀에 여유 연결이 없는 경우, 대기 여부를 지정 (true설정시, 여유연결이 생길때까지 대기)
    // connectionLimit: 10,  // 풀에 유지할 최대 연결 수
    // queueLimit: 0,  // 대기열에 넣을 수 있는 최대 연결 요청수를 지정 (0으로 설정하면 대기열에 재한 없음)
    // acquireTimeout: 10000,  // 연결을 가져올 때, 대기할 최대 시간을 밀리초 단위로 지정. 기본값 10000(10초) 초과 시 오류 발생
    // connectTimeout: 10000,  // 연결을 시도할 때, 대기할 최대 시간을 밀리초 단위로 지정. 기본값 10000(10초) 초과 시 연결시도 실패
    // charset: 'UTF8_GENERAL_CI'  // 데이터베이스 연결에서 사용할 문자 세트 지정
});

// 연결
pool.getConnection( (err, connection) => {
    if (err) {
        console.error('MySQL 접속 에러:', err);
        return;
    }
    console.log ('MySQL 접속 성공');

    // MySQL 버전 정보 출력
    connection.query('SELECT VERSION() AS version', (err, results) => {
        if (err) {
            console.error('query 실행 에러:', err);
            connection.release();  // 연결반환-연결을 풀로 돌려보내 풀에서 대기
            return;
        }
        console.log('MySQL Version:', results[0].version);

        //데이터베이스 목록 출력
        connection.query('SHOW DATABASES', (err, results) => {
            if (err) {
                console.error('query 실행 에러:', err);
                console.release();  // 연결반환-연결을 풀로 돌려보내 풀에서 대기
                return;
            }
            console.log('Databases:');
            results.forEach( (row) => {
                console.log(`\t${row.Database}`);
            });

            // 연결 반환
            connection.release();
            console.log('Connection 반환');

            // 커넥션 풀 종료
            pool.end( (err) => {
                if (err) {
                    console.error('커넥션 풀 종료 에러:', err);
                    return;
                }
                console.log('커넥션 풀 종료');
            });
            
        });
    });

});
