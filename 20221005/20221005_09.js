// 제로베이스 프론트엔드 스쿨_MatrixHasOutline
/*
[문제 설명]
n * n 크기의 2차원 배열 matrix가 있습니다. 이 배열이 다음 조건을 만족하는지를 출력하는 함수, solution을 완성해주세요.

1. matrix[n - 1][0], matrix[0][n - 1] 값은 true이다.

[입력 형식]
- matrix는 길이가 1 이상 100 이하의 2차원 배열입니다.
- matrix의 요소는 boolean입니다.

[출력 형식]
- 규칙을 만족하는지를 출력합니다.
*/

function solution(matrix) {
  let arr = [...matrix];
  let n = arr.length;
  
  for (let i = 0 ; i < n ; i++) {
    if (arr[n - 1][0] === true && arr[0][n - 1] === true) continue;
    else {
      return false;
    }
  }

  return true;
}

console.log(solution([[true, true, true, true], [true, true, false, true], [true, false, true, true], [true, true, true, true]]));