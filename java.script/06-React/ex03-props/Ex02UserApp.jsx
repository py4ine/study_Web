// 사용자 정보 표시
import Ex02UserInfo from './Ex02UserInfo'

function Ex02UserApp() {
    return (
        <Ex02UserInfo
        name='홍지디'
        age='20' 
        header={<header title="회원정보" />}
        footer='copyright by ...'/>
    );
}

export default Ex02UserApp