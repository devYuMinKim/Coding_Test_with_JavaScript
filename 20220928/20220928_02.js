// 제로베이스 프론트엔드 스쿨_SelectRoom
/*
배열 A에는 각 방마다 탈출하는데 걸리는 시간이 적혀있습니다.
이 방의 구조는 한번 넘어갈때마다 문이 1개씩 늘어나고 각 문 마다 탈출에 걸리는 시간은 모두 다릅니다.

예를들어 배열 A에 아래와 같이 시간 정보가 들어있다고 가정합니다.
A = [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]]

이를 그림으로 표현하면 아래와 같습니다.

1
2 5
7 10 1
9 4 4 5

최상단에서 시작하여 이동할 때는 대각선 아래 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동이 가능하며 이동했을 때 배열에 주어진 시간만큼 대기한 후 다음 칸으로 이동할 수 있습니다.

이때 최소한의 대기 시간으로 최하단의 방을 탈출하는데 걸리는 시간을 구하는 함수를 작성하세요.

위 그림에서 최단 시간은 1->5->1->4 로 총 11이 됩니다.

[입력]
대기시간 정보가 입력된 2차원 배열 A

[출력]
최소 대기 시간
*/

function solution(A) {
  let arr = [...A];
  let length = arr.length;
  let result = arr[0][0];
  let index = 0;

  for (let i = 0 ; i < length - 1 ; i++) {
    if (index !== 0) {
      if (arr[i + 1][index - 1] > arr[i + 1][index + 1]) {
        index = index + 1;
        result += arr[i + 1][index];
      } else {
        index = index - 1;
        result += arr[i + 1][index];
      }
    } else {
      index = index + 1;
      result += arr[i + 1][index];
    }    
  }

  return result;
}

console.log(solution([[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]]));