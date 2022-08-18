// 제로베이스 프론트엔드 스쿨_DefenseCastle
/*
[문제 설명]
당신은 성을 지키기 위한 디펜스 게임을 진행합니다. 적군들은 총 n명입니다.
time의 시간 동안 distance의 거리를 적군들이 이동합니다.
1초마다 수비군은 1개씩 생성되며 성에 도착한 적군 1명을 아군 1명이 수비할 수 있습니다.
수비군보다 성에 도착한 적군이 많으면 -1을 출력하고, 그렇지 않다면 최종 적을 수비한 후의 수비군 수를 출력하는 함수, solution을 완성해주세요.

예를 들어, distance [1,2,8]와 time [1,1,2] 가 주어질 때 예시는 다음과 같습니다.

적군의 속력 [1,2,4]
0 라운드 : 아군 0명, 적군 0명 => (전쟁 결과) 아군 0명, 적군 0명
1 라운드 : 아군 1명, 적군 1명 => (전쟁 결과) 아군 0명, 적군 0명
2 라운드 : 아군 2명, 적군 2명 => (전쟁 결과) 아군 0명, 적군 0명
3 라운드 : 아군 3명, 적군 2명 => (전쟁 결과) 아군 1명, 적군 0명
4 라운드 : 아군 4명, 적군 3명 => (전쟁 결과) 아군 1명, 적군 0명
결과 1

distance [2,2,3,6]와 time [1,1,1,2] 가 주어질 때 예시는 다음과 같습니다.

적군의 속력 [2,2,3,3]
0 라운드 : 아군 0명, 적군 0명 => (전쟁 결과) 아군 0명, 적군 0명
1 라운드 : 아군 1명, 적군 0명 => (전쟁 결과) 아군 1명, 적군 0명
2 라운드 : 아군 2명, 적군 2명 => (전쟁 결과) 아군 0명, 적군 0명
3 라운드 : 아군 3명, 적군 4명 => (전쟁 결과) 아군 0명, 적군 1명
결과 -1

[제한 사항]

수비군보다 성에 도착한 적군이 많으면 당신은 패배하여 -1을 출력합니다.
한 라운드마다 성을 디펜스 할 수 있는 아군이 생성됩니다.
1 속력(거리 / 시간) 내에 적군이 성에 도착하면, 적군은 성을 공격할 수 있습니다.
[입력 형식]

각 적군의 거리 distance는 길이가 n인 1 이상 100 이하의 배열입니다.
각 적군의 움직이는 시간 time은 길이가 n인 1 이상 100 이하의 배열입니다.
distance와 time은 1 이상 1000 이하의 정수로 이루어져 있습니다.
[출력 형식]

적을 수비한 후 수비군 수를 int 형식으로 출력합니다. 수비 하지 못한 경우 -1을 출력합니다.
*/

function solution(distance, time) {
  let survive = 0;

  let distances = [];
  for (let element of distance) {
    distances.push(element);
  }
  
  let times = [];
  for (let element of time) {
    times.push(element);
  }

  let arr = [];
  for (let i = 0 ; i < distances.length ; i++) {
    arr.push(Math.floor(distances[i] / times[i]));
  }

  arr.sort(function(a, b) {
    return a - b;
  })

  for (let i = 0 ; i < arr.length ; i++) {
    
  }

  return (arr[arr.length - 1] - distances.length);
}

let distance = [1, 2, 8];
let time = [1, 1, 2];

console.log(solution(distance, time));