// 제로베이스 프론트엔드 스쿨_Differences
/*
[문제 설명]

김제로는 1부터 N까지의 모든 값을 원하는 K 값으로 만드는 배열을 구하고 싶습니다.

식으로 나타내자면 각 인덱스를 i라고 했을 때, arr[i] - i 의 절대값이 K가 되는 배열입니다.

고로,  arr[i] - i = K 라는 식이 성립하고, N과 K가 주어졌을 때 원래의 배열의 순서를 조작하여 결과를 반환해야 합니다.

예를 들어, N = 4와 K = 2로 주어졌을 경우에 처음의 배열은 1부터 N까지인 [1, 2, 3, 4] 이고,

모든 원소를 arr[i] - i 를 고려하여 K 의 값인 2로 만들 수 있게 순서를 변경해야 합니다.

때문에 원 배열을 조작하여 [3, 4, 1, 2]의 배열으로 만들면,

arr[1] - 1 = 2  / arr[2] - 2 = 2 / arr[3] - 3 = 2 / arr[4] - 4 = 2  가 되게 됩니다.

또한, 여러가지 결과물이 나올 수 있지만 가장 작은 사전순서 배열을 반환해야 하고,

결과물을 만들어 낼 수 없을 경우에는 -1을 반환해야 합니다.

[제한 사항]

- N의 값은 1 이상 100000 이하 입니다.

- K의 값은 0 이상 N 이하 입니다.

[입력 형식]

- [1, N] 까지의 값을 만드는 N 값이 제공되고, 만들어야 하는 결과값인 K가 제공됩니다.

[출력 형식]

- 모든 값을 K로 만들 수 있는 배열을 출력합니다. 없을 경우 -1을 출력합니다.
*/

function solution(N, K) {
  let answer = [];

  let tmp = [];
  for (let i = 1 ; i <= N ; i++) {
    tmp.push(i);
  }

  let arr = [];
  for (let i = N / 2 ; i <= N ; i++) {
    arr.push(tmp[i]);
  }
  for (let i = 0 ; i < N / 2 ; i++) {
    arr.push(tmp[i]);
  }

  for (let i = 1 ; i < arr.length ; i++) {
    if (arr[i] - (i + 1) === K) continue;
    else {
      answer.push(-1);
      return answer;
    }
  }

  answer = arr;

  return answer;
}

console.log(solution(3, 2));