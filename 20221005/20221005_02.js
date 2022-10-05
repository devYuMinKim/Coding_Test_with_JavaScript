// 제로베이스 프론트엔드 스쿨_DuplicatedNumber
/*
[문제 설명]
1차원 숫자 배열 arr1, arr2가 주어집니다.
두 배열에서 중복으로 존재하는 숫자들을 오름차순 배열로 출력하는 함수, solution을 완성해주세요.

[입력 형식]
- arr1, arr2는 길이가 1 이상 100 이하의 배열입니다.
- arr1, arr2는 1 이상 100 이하의 정수로 이루어져 있습니다.

[출력 형식]
- 두 배열에서 중복으로 존재하는 숫자들을 반환합니다.
*/

function solution(arr1, arr2) {
  let answer = [];
  let compare = [...arr2];

  for (let element of arr1) {
    if (compare.includes(element)) answer.push(element);
  }

  answer.sort(function(a, b) {
    return a - b;
  });

  return answer;
}

console.log(solution([1, 7, 8, 4], [2, 4, 6, 8]));