// 재귀 함수
 // 함수 속에서 다시 그 함수를 호출

// overstack이 되면 오류를 발생하고 종료
//  function recursive() {
//     console.log('재귀 호출');
//     recursive();
// }
// recursive();


/*
  재귀함수(Recursive Function)
  함수 정의에 자기자신을 호출하도록 정의한 함수(반복 연산 등에 쓰임)
    사용 예)
      디렉토리 트리 탐색: 파일 시스템의 디렉토리를 재귀적으로 탐색
      JSON 파싱: 중첩된 JSON 객체를 재귀적으로 탐색
*/

function recursive(n){
    console.log('call!', n);
    if(n == 1){
      console.log('재귀 호출 끝! 이제부터 return');
      return console.log('!llac');
    }
    recursive(n-1);
    console.log('return', n);
    console.log("Ya!".repeat(n))
  }
//   debugger;  // 브라우저 Sources탭에서 한단계씩 확인 가능
  recursive(5)