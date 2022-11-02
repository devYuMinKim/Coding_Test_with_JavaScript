// 제로베이스 프론트엔드 스쿨_Festival
/*
[문제 설명]

제로는 페스티벌을 좋아해서 올해 여름에 온라인 페스티벌 티켓을 끊었습니다. 가수들과 공연 시간이 페스티벌 스케줄 표에 적혀있고 제로는 최대 3개의 공연에 참가할 수 있는 티켓을 가지고 있습니다.

스케줄 표에 따라 3가지 공연에 참가할 수 있는 경우의 수를 생각해보고 싶습니다. 참가할 수 있는 조건은 다음과 같습니다. 최소한 아래 두 가지 조건 중 하나는 만족해야 합니다. 두 가지 모두 만족해도 괜찮습니다.

- 같은 가수가 여러 공연을 해도 그 중 1회만 참가하는 것이 제로의 계획입니다.

- 또한, 같은 시간에 진행하는 공연일 경우 온라인이기 때문에 가수가 다르면 두 가지 모두 참가할 수 있습니다.

이 때, 제로를 도와 스케줄 짜는 방법의 수를 세고 싶습니다.

예를 들면 스케줄 표가 [[2, 4], [3, 4], [2, 1], [1, 3]]으로 주어지면, 이차원 배열 각 원소의 첫 번째 원소는 가수이고, 두 번째 원소는 공연 시간입니다.

이 때, 참석할 수 있는 경우의 수는 다음과 같습니다.

- [[2,4], [3,4], [1,3]] : 가수 2, 3, 1이 모두 다르기 때문에 조건 중 하나를 만족합니다.

- [[2,4], [2,1], [1,3]] : 공연 시간이 4, 1, 3으로 모두 다르기 때문에 조건 중 하나를 만족합니다.

- [[3,4], [2,1], [1,3]] : 가수 3, 2, 1과 공연 시간 4, 1, 3이 모두 다르기 때문에 조건 중 두 가지를 모두 만족합니다.

이렇게 조건을 만족하는 경우의 수는 3가지입니다.

[제한 사항]

- 페스티벌 공연 스케줄은 3개 이상 10,000개 이하입니다.

- 같은 시간에 같은 가수가 공연을 하는 스케줄은 존재하지 않음이 보장됩니다.

[입력 형식]

- 스케줄 표 schedule이 이차원 배열으로 주어집니다.

[출력 형식]

- 선택할 수 있는 공연 일정의 최대 경우의 수를 반환해주세요
*/

function solution(schedule) {
  let answer = 0;

  // 3개의 공연
  // 가수당 1번
  // 시간이 같아도 가능
  let arr = getPermutations(schedule, 3);

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i][0][0] == arr[i][1][0] ||
      arr[i][0][0] == arr[i][2][0] ||
      arr[i][1][0] == arr[i][2][0]
    )
      continue;
    else {
      answer++;
    }
  }

  return answer;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]);
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

console.log(
  solution([
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
  ])
); // output: 10
