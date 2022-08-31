// 제로베이스 프론트엔드 스쿨_DuplicateOdd
/*
[문제 설명]
정수 배열 arr가 주어집니다. arr는 0~9의 정수로 이루어져 있습니다.
이때, 정수 배열 arr의 요소 중 홀수를 복제하고 나머지 요소를 오른쪽으로 shift 한 결과를 출력하는 함수, solution을 완성해주세요.

예를 들어, arr가 [0, 2, 1, 4, 3, 0]이 주어질 때, 결과는 [0, 2, 1, 1, 4, 3]입니다.

[제한 사항]

기존 배열의 길이를 초과한 요소는 제거합니다.
[입력 형식]

arr는 길이가 1 이상 1,000 이하의 배열입니다.
arr의 각 요소는 0 이상 9 이하의 정수입니다.
[출력 형식]

홀수 요소를 복제하고, 나머지 요소를 오른쪽으로 shift 한 결과를 int[] 형식으로 출력합니다.
*/

function solution(arr) {
  let array = [];
  for (let element of arr) {
    array.push(element);
  }

  let result = [];
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] % 2 === 1) {
      result.push(array[i]);
      if (result.length === array.length) return result;
      result.push(array[i]);
      if (result.length === array.length) return result;
    } else {
      result.push(array[i]);
      if (result.length === array.length) return result;
    }
  }

  return result;
}

console.log(solution([0, 2, 1, 4, 3, 0]));