// 제로베이스 프론트엔드 스쿨_LeastRepresenter
/*
[문제 설명]

 그룹의 대표 중 최솟값을 구하려고 합니다. 2N 개의 정수가 주어질 때, 주어진 정수를 2개씩 그룹 짓고 그중 큰 값을 대푯값이라고 합니다.
 이렇게 구한 대푯값들의 합의 최솟값을 구하는 함수, solution을 완성해주세요.

 예를 들어, arr [4, 1, 3, 2]가 있을 때, 대푯값의 합의 최솟값은 6입니다.
 > 그룹이 (1, 4), (2, 3)일 때, 대푯값은 4, 3으로 합은 7입니다.
 > 그룹이 (1, 3), (2, 4)일 때, 대푯값은 3, 4로 합은 7입니다.
 > 그룹이 (1, 2), (3, 4)일 때, 대푯값은 2, 4로 합은 6입니다.
 > 대푯값의 합 중 최솟값은 6입니다.

[입력 형식]
 - arr는 길이가 2 이상 2N 이하인 배열입니다.
 - N은 1 이상 100 이하의 정수입니다.
 - arr의 원소는 0 이상 1,000 이하의 정수입니다.

[출력 형식]
 - 대푯값의 합의 최솟값을 구합니다.
*/

function solution(arr) {
  let answer = 0;

  let array = [];
  for(let element of arr) {
    array.push(element);
  }

  array.sort(function(a, b)  {
    return a - b;
  });

  for(let i = 0 ; i < array.length ; i++) {
    if(i % 2 == 1) answer += array[i];
  }

  return answer;
}

console.log(solution([4, 1, 3, 2]));