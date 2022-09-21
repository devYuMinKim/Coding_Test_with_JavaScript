// 제로베이스 프론트엔드 스쿨_MostAppearNumber
/*
[문제 설명]
숫자로 이루어진 문자열 s가 있습니다. 이 문자열에서 가장 많이 등장하는 수를 출력하는 함수, solution을 완성해주세요.

예를 들어, s가 '104001100'로 주어질 때, 가장 많이 등장하는 수는 0입니다.

[제한 사항]

등장하는 수가 같은 경우, 작은 수를 출력합니다.
[입력 형식]

s는 길이가 1 이상 100 이하의 문자열입니다.
s는 숫자로 구성됩니다.
[출력 형식]

가장 많이 등장하는 수를 출력합니다.
*/

function solution(s) {
  let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let element of s) {
    array[Number(element)]++;
  }

  let max = -1;
  let index = -1;

  for (let i = 0 ; i < array.length ; i++) {
    if (max < array[i]) max = array[i];
  }

  for (let i = 0 ; i < array.length ; i++) {
    if (max == array[i]) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(solution("174771177"));