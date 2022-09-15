// 제로베이스 프론트엔드 스쿨_MaximumCubicNumber
/*
[문제 설명]
정수 n이 주어질 때, n보다 작거나 같은 수 중 가장 큰 세제곱 수를 출력하는 함수, solution을 완성해주세요.

예를 들어, 정수 n이 15일 때, 결과는 8입니다.

[입력 형식]

n은 1 이상 100,000,000 이하의 정수입니다.
[출력 형식]

n 이하의 정수 중 가장 큰 세제곱 수를 int 형식으로 출력합니다.
*/

function solution(n) {
  for (let i = n ; i >= 1 ; i--) {
    if (Math.cbrt(Number.isInteger(Math.cbrt(i)))) {
      return i;
    }
  }
}

console.log(solution(99));

