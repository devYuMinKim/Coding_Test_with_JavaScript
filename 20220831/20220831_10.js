// 제로베이스 프론트엔드 스쿨_DeliveryMan
/*
[문제 설명]
아파트 단지에 배송구역을 나누려 합니다. 단지에는 배송이 가능한 구역과 놀이터와 같이 배송할 수 없는 구역이 있으며, 배송원의 근무 피로도를 고려하여 각 배송원이 맡은 구역은 인접해야 합니다.
아파트 단지의 크기 h x w가 주어질 때, 배송구역을 나누는 방법의 수를 구하는 함수, solution을 완성해주세요.

예를 들어, 아파트 단지의 크기 h, w가 3과 7 그리고 areaText가 '@.....@@.....@@@..@@@' 일 때, 결과는 5입니다.

[제한 사항]

모든 배송원은 세 구역을 맡아야 합니다.
배송구역이 겹치거나, 배송할 수 없는 구역을 맡을 수 없습니다.
배송원은 인접한 구역만 맡을 수 있으며, 인접함은 상하좌우로 붙어있는 구역을 말합니다.
배송이 가능한 구역은 30을 넘지 않습니다.
[입력 형식]

두 정수 h와 w는 1 이상 50 이하의 정수입니다.
공백이 없는 h * w개의 글자로 단지 모양이 주어집니다. (글자는 .과 @로 구성되어 있으며, .은 배송이 가능한 지역, @는 배송이 불가능한 지역을 나타냅니다.)
[출력 형식]

주어진 아파트 단지의 배송구역을 나누는 방법의 수를 출력합니다.
*/

function solution(h, w, areaText) {
  var answer = 0;
  return answer;
}

console.log(solution(3, 6, "@@...@@....@@@..@@"));