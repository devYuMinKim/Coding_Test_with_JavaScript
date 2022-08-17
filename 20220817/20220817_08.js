// 제로베이스 프론트엔드 스쿨_CountPath
/*
[문제 설명]
h x w개의 격자 형태의 게임판이 있습니다. 이 중 왼쪽 위에 시작점이 있고, 오른쪽 아래에 종료 지점이 있습니다.
게임 방법은 시작 지점에 말을 놓고, 말을 종료 지점까지 이동하면 이기는 게임이며, 말은 오른쪽이나 아래로만 이동할 수 있습니다.
이때, 게임을 이기는 방법의 수를 출력하는 함수, solution을 완성해주세요.

예를 들어, h가 2이고, w가 3인 게임판이 주어질 때, 게임을 이기는 방법의 수는 다음과 같이 총 3가지 방법이 있습니다.

오른쪽 -> 오른쪽 -> 아래
오른쪽 -> 아래 -> 오른쪽
아래 -> 오른쪽 -> 오른쪽

[제한 사항]

말은 오른쪽이나 아래로만 이동할 수 있습니다.
[입력 형식]

두 정수 h와 w는 1 이상 25 이하의 정수입니다.
[출력 형식]

게임을 이기는 방법의 수를 int 형식으로 출력합니다.
*/

let output = [];
let count = 0;

function combination(arr, data, s, idx, r) {
	if (s == r) {
		count++;
		return;
	}

	for (let i = idx ; arr.length - i >= r - s ; i++) {
		data[s] = arr[i];
		combination(arr, data, s + 1, i + 1, r);
	}
}

function solution(h, w) {
  let arr = new Array();
  for (let i = 0 ; i < h + w - 2 ; i++) {
    arr.push(0);
  }

  combination(arr, output, 0, 0, h - 1);

  return count;
}

console.log(solution(2, 3));