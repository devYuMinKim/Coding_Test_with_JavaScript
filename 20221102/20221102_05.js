// 제로베이스 프론트엔드 스쿨_MatrixFullWith
/*
[문제 설명]
n * n 크기의 2차원 배열 matrix와 boolean 값 b 가 있습니다. 이 배열이 모두 b로 이루어져 있는지를 출력하는 함수, solution을 완성해주세요.

[입력 형식]
- matrix는 길이가 1 이상 100 이하의 2차원 배열입니다.
- matrix의 요소는 boolean 입니다.
- b는 boolean 입니다.

[출력 형식]
- 배열이 모두 b로 이루어져 있는지를 출력합니다.
*/

function solution(matrix, b) {
  for (let element of matrix) {
    for (let elements of element) {
      if (elements !== b) return false;
    }
  }
  return true;
}

console.log(
  solution(
    [
      [true, true, true, true],
      [true, true, false, true],
      [true, false, true, true],
      [true, true, true, true],
    ],
    true
  )
); // output: false
