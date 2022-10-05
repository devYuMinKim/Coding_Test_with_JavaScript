// 제로베이스 프론트엔드 스쿨_AirplaneFee
/*
[문제 설명]
비행기 요금을 구하려고 합니다. arr는 비행기 표 예매를 위해 줄을 선 그룹들을 나타내며, 각 요소는 그룹의 인원입니다.
이벤트 특가로, 그룹 인원이 5명마다 1명이 무료 탑승할 수 있습니다.
비행기 푯값인 fee가 주어질 때, 총 비행기 푯값을 구하는 함수, solution을 완성해주세요.

예를 들어 arr [3, 1, 5], fee = 10 이 있을 때,
첫 번째 그룹의 표 예매에 드는 비용은 3명의 값인 30 입니다.
두 번째 그룹의 표 예매에 드는 비용은 1명의 값인 10 입니다.
세 번째 그룹의 표 예매에 드는 비용은 이벤트 적용으로 4명의 값인 40 입니다.

비행기 표 예매에 드는 비용은 총 80 입니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하의 정수 배열입니다.
- arr의 요소는 1 이상 100 이하인 정수입니다.
- fee는 1 이상 100 이하인 정수입니다.

[출력 형식]
- 총 비행기 푯값을 구합니다.
*/

function solution(arr, fee) {
  let answer = 0;

  for (let element of arr) {
    if (element >= 5) {
      answer += element - parseInt(element / 5);
    } else {
      answer += element;
    }
  }

  return answer * fee;
}

console.log(solution([3, 1, 5], 10));