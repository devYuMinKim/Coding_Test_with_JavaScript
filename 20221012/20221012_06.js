// 제로베이스 프론트엔드 스쿨_MaxBetween
/*
[문제 설명]
배열 arr와 정수 a, b가 있습니다. 배열에서 a 이상 b 이하의 가장 큰 정수를 반환하는 함수, solution을 완성해주세요.

[제한 사항]
- 가장 큰 정수를 구할 수 없는 경우 -1을 반환합니다.
- a < b 입니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하의 배열입니다.
- arr의 요소는 1 이상 100_000 이하의 정수로 구성되어 있습니다.
- a, b는 1 이상 100_000 이하의 정수입니다.

[출력 형식]
- 배열에서 a 이상 b 이하의 가장 큰 정수를 반환합니다.
*/

function solution(arr, a, b) {
  let answer = -1;

  for (let element of arr) {
    if (element >= a && element <= b) {
      if (answer < element) answer = element;
    }
  }

  return answer;
}

console.log(solution([1, 3, 5, 7, 9], 3, 7));