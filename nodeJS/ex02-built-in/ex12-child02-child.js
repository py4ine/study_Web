process.on('message', (message) => {
    console.log('부모 프로세스로부터의 메시지:', message);
    process.send('안녕 나는 자식 프로세스야');

    if (message === 'exit') {
        process.exit(10);  // 프로세스 종료
    }
});