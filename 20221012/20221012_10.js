// 제로베이스 프론트엔드 스쿨_CountBingo
/*
[문제 설명]
n * n 크기의 2차원 빙고 판 board가 있습니다. 이 빙고 판에서 빙고의 개수를 출력하는 함수, solution을 완성해주세요.

[제한 사항]
- 빙고는 가로 혹은 세로 전체가 true 이면 1빙고입니다.

[입력 형식]
- board는 길이가 1 이상 100 이하의 2차원 배열입니다.
- board의 요소는 boolean입니다.

[출력 형식]
- 빙고의 개수를 출력합니다.
*/

function solution(board) {
  let answer = 0;
  let bool = false;

  let arr = [...board];

  for (let i = 0 ; i < arr.length ; i++) {
    for (let j = 0 ; j < arr[0].length ; j++) {
      if (j === 0 && arr[i][j] === true) bool = true;
      else {
        if (arr[i][j] === bool) {
          if (j === arr[0].length - 1) {
            answer++;
          }
          continue;
        }
        else {
          break;
        }
      }
    }
  }

  for (let i = 0 ; i < arr[0].length ; i++) {
    for (let j = 0 ; j < arr.length ; j++) {
      if (j === 0 && arr[j][i] === true) bool = true;
      else {
        if (arr[j][i] === bool) {
          if (j === arr[0].length - 1) {
            answer++;
          }
          continue;
        }
        else {
          break;
        }
      }
    }
  }

  return answer;
}

console.log(solution([[true, true, true], [true, true, true], [false, false, true]]));