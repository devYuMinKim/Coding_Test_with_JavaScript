// 제로베이스 프론트엔드 스쿨_josephusProblem
/*
[문제 설명]
1번부터 N번까지의 사람이  동그랗게 모여있습니다.
1번 부터 순서를 세어 K번째 사람을 모임에서 제외시킵니다. 
남은 N-1명에서 제외된 다음 사람부터 원을따라 다시 순서를 세서 K번째 사람을 모임에서 제외하는 과정을 마지막 사람이 남을때까지 반복합니다.

이때 마지막으로 남는  사람의 번호를 구하는 함수를 작성하세요.

예를들어 N이 7, K가 3인 경우
1, 2, 3, 4, 5, 6, 7 번의 사람이 있고 순서대로 3, 6, 2, 7, 5, 1 번이 제외되어 최종 4번이 마지막으로 남는 사람입니다.

[입력 형식]
 참여 인원 N, 건너뛰는 횟수 K

[출력 형식]
 마지막 남은 사람 번호

매개변수 : int N, int K
리턴타입 : int
*/

function solution(N, K) {
  let array = [];

  for (let i = 1 ; i <= N ; i++) {
    array.push(i);
  }

  let cnt = 0;

  while(array.length > 1) {
    cnt = (cnt + K - 1) % array.length;
    array.splice(cnt, 1);
  }

  return array[0];
}

console.log(solution(7, 3));
