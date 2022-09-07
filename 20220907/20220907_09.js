// 제로베이스 프론트엔드 스쿨_Zombie
/*
좀비게임은 1명의 좀비와 N명의 사람이 진행하는 게임입니다.
게임 플레이 시간동안 각 참여자는 다른 참여자와 악수를 할 수 있습니다.

이때 좀비와 악수를한 플레이어는 좀비로 변하게 됩니다.

정해진 시간동안 악수를 다수의 참여자와 진행하며 시간이 끝난후 좀비가 아닌 플레이어 중에 악수를 가장 많이한 플레이어가 우승합니다.
만약 모든 플레이어가 좀비가 되었다면 좀비 플레이어가 우승합니다.

배열 A에는 참여자의 악수 정보가 들어있고 문자열 S에는 좀비 플레이어 정보가 제공되었을때 해당 라운드의 우승자를 찾는 함수를 작성하세요.
또한 악수 횟수가 동일한 경우 공동 우승으로 처리되며 오름차순으로 정렬하여 리턴하세요.
배열 A에 존재하는 순서는 터치 시간순서 이며 모든 플레이어는 1회 이상 악수를 진행합니다.

[입력]
참여자끼리의 악수 정보가 들어있는 2차원 배열 A
좀비 유저 문자열 S

[출력]
우승자 목록 배열
*/

function solution(A, S) {
  let answer = [];

  let sample = [];
  for (let element of A) {
    for (let elements of element) {
      if (!sample.includes(elements)) sample.push(elements);
    }
  }

  sample.sort(function(a, b) {
    return a - b;
  });

  let el = [];
  for (let i = 0 ; i < sample.length ; i++) {
    el.push(0);
  }

  for (let element of A) {
    if (element.includes(S)) {
      for (let elements of element) {
        el[sample.indexOf(elements)] = -1;
      }
    } else {
      for (let elements of element) {
        if (el[sample.indexOf(elements)] !== -1) {
          el[sample.indexOf(elements)]++;
        }
      }
    }
  }

  let bool = -1;

  for (let element of el) {
    if (element !== -1) bool = 1;
  }

  if (bool === -1) answer.push(S);
  else {
    let max = 0;
    for (let i = 0 ; i < el.length ; i++) {
      if (el[i] > max) {
        max = el[i];
        answer = [];
        answer.push(sample[i]);
      } else if (el[i] === max) {
        answer.push(sample[i]);
      }
    }
  }

  return answer;
}

console.log(solution([["A", "B"], ["B", "C"], ["A", "C"], ["A", "D"], ["B", "E"]], "E"));