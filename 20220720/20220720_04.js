// 제로베이스 프론트엔드 스쿨_UniqueOccurrencesNumber
/*
[문제 설명]
숫자 배열 arr가 주어집니다. arr에서 중복된 숫자의 개수가 유니크한지를 구하는 함수, solution을 완성해주세요.

예를 들어, arr [1, 3, 5, 4, 3, 1, 1] 의 경우
> 1은 3개가 존재하며,
> 3은 2개가 존재하며,
> 4는 1개가 존재하며,
> 5는 1개가 존재하므로
숫자 4와 5의 중복된 숫자의 개수가 유니크하지 않으므로 결과는 false 입니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하의 배열입니다.
- arr의 요소는 1 이상 10 이하의 정수입니다.

[출력 형식]
- 중복된 숫자의 개수가 유니크한지를 구합니다.
*/
function solution(arr) {
  var answer = true;

  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - 1]++;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] != 0 && tmp.includes(count[i])) {
      answer = false;
      break;
    } else {
      tmp.push(count[i]);
    }
  }

  return answer;
}

let arr = [1, 3, 5, 4, 3, 1, 1];
console.log(solution(arr));
