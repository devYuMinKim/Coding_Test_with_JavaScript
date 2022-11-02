// 제로베이스 프론트엔드 스쿨_IntersectionTwoArray
/*
[문제 설명]
배열 2개 arr1, arr2가 주어집니다. 이 배열의 교집합을 구하는 함수, solution을 완성해주세요.

[제한 사항]
- 교집합이 없는 경우 빈 배열을 반환합니다.
- 결과는 오름차순으로 정렬합니다.
- 배열에는 중복된 값이 존재하지 않습니다.

[입력 형식]
- arr1, arr2는 길이가 1 이상 100 이하의 배열입니다.
- arr1, arr2의 요소는 정수입니다.

[출력 형식]
- 두 배열의 교집합을 구합니다.
*/

function solution(arr1, arr2) {
  let answer = [];

  for (let element of arr1) {
    if (arr2.includes(element) && !answer.includes(element))
      answer.push(element);
  }

  answer.sort((a, b) => {
    return a - b;
  });

  return answer;
}

console.log(solution([1, 3, 6, 9, 12], [2, 4, 6, 8, 10, 12])); // output: [6, 12]
