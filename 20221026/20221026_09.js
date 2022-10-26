// 제로베이스 프론트엔드 스쿨_Yacht
/*
[문제 설명]
Yacht는 플레이어가 번갈아가면서 각자 5개의 주사위를 굴려서 족보에 해당하는 주사위 눈의 조합을 만들어 점수를 얻고, 가장 높은 점수를 얻는 플레이어가 승리하는 게임입니다.

Yacht의 족보는 다음과 같습니다.
각각 족보 이름 / 조건 / 획득 점수 / 예시를 의미합니다.

Yacht / 5개 모두 동일한 눈인 경우 / 50점 / 예: 3 3 3 3 3
Four-Of-A-Kind / 4개 이상의 동일한 눈인 경우 / 눈의 합 / 예: 5 5 5 5 1
Full House / 각각 동일한 눈 3개, 2개로 나눠지는 경우 / 눈의 합 / 예: 4 4 4 3 3
Large Straight / 눈의 숫자 5개가 이어지는 경우 / 30점 / 예: 2 3 4 5 6
Small Straight / 눈의 숫자 4개 이상 이어지는 경우 / 15점 / 예: 1 2 3 4 6

Aces / 모든 조합에서 가능 / 1이 나온 눈의 총합 / 예: 1 1 1 2 3 -> 3점
Deuces / 모든 조합에서 가능 / 2가 나온 눈의 총합 / 예: 1 2 2 3 4 -> 4점
Thress / 모든 조합에서 가능 / 3이 나온 눈의 총합 / 예: 3 3 3 3 6 -> 12점
Fours / 모든 조합에서 가능 / 4가 나온 눈의 총합 / 예: 1 1 2 3 4 -> 4점
Fives / 모든 조합에서 가능 / 5가 나온 눈의 총합 / 예: 4 5 5 5 6 -> 15점
Sixes / 모든 조합에서 가능 / 6이 나온 눈의 총합 / 예: 1 2 6 6 6 -> 18점

5개의 주사위 눈이 주어질 때 해당 조합으로 얻을 수 있는 최대 점수를 출력하는 함수, solution을 완성해 주세요.

[입력 형식]
- arr은 길이가 5인 배열입니다.
- arr은 1 이상 6 이하의 정수로 구성됩니다.

[출력 형식]
- 해당 조합으로 얻을 수 있는 최대 점수를 출력합니다.
*/

function solution(arr) {
  let result_one = Yacht(arr);
  let result_two = Other(arr);

  if (result_one > result_two) return result_one;
  else return result_two;
}

function Yacht(array) {
  let kind = [];
  let count = [0, 0, 0, 0, 0, 0];

  for (let element of array) {
    if (!kind.includes(element)) kind.push(element);
    count[element - 1]++;
  }

  if (kind.length === 1) {
    // Yacht
    return 50;
  } else if (kind.length === 2 || kind.length === 3) {
    // Four-Of-A-Kind, Full House
    let sum = 0;
    for (let element of array) {
      sum += element;
    }

    return sum;
  } else if (kind.length === 5 && (count[0] === 0 || count[5] === 0)) {
    // Large Straight
    return 30;
  } else if (
    kind.length === 4 &&
    ((count[0] === 0 && count[1] === 0) || (count[4] === 0 && count[5] === 0))
  ) {
    // Small Straight
    return 15;
  }
}

function Other(array) {
  let count = [0, 0, 0, 0, 0, 0];
  let max = 0;

  for (let element of array) {
    count[element - 1]++;
  }

  for (let element of count) {
    if (element > max) max = element;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) return count[i] * (i + 1);
  }
}

console.log(solution([5, 5, 5, 6, 6])); // output: 27
