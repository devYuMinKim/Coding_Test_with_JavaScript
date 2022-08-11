// 제로베이스 프론트엔드 스쿨_numberCheck
/*
[문제 설명]

0 ~ N 까지 수를 나열했을때 숫자 K가 몇번이나 등장하는지 확인하는 함수를 구현하세요.

K의 등장 횟수이기 때문에 K가 1인 경우 111에서는 1이 3번 등장했고 결과에 3을 합해야 합니다.

[입력 형식]
 양의 정수 N, 0~9 사이의 정수 K

[출력 형식]
 0 ~ N 까지 K 등장 횟수

매개변수 : int N, int K
리턴타입 : int
*/

function solution(N, K) {
  let answer = 0;

  for(let i = 0 ; i <= N ; i++) {
    let tmp = i;
    let array = [];
    do {
      array.unshift(tmp % 10);
      tmp = Math.floor(tmp / 10);
    } while(tmp > 0);

    for(let j = 0 ; j < array.length ; j++) {
      if(array[j] == K) answer++;
    }
  }

  return answer;
}

console.log(solution(25, 2));