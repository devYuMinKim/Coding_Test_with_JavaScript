// 제로베이스 프론트엔드 스쿨_JoinToString
/*
[문제 설명]
배열 arr가 주어집니다. 이 배열의 요소를 아래 조건에 맞춰 문자열로 출력하는 함수, solution을 완성해주세요.

조건
1. 문자열은 prefix 값으로 시작합니다.
2. 문자열의 arr의 요소들은 separator로 구분하여 순서대로 출력합니다.
3. 문자열은 postfix 값으로 종료합니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하의 배열입니다.
- arr의 요소는 0 이상 100 이하의 정수 입니다.
- prefix, postfix, separator는 길이가 0 이상 10 이하의 문자열 입니다.

[출력 형식]
- 조건에 맞는 문자열을 출력합니다.
*/

function solution(arr, prefix, separator, postfix) {
  let answer = "";
  answer += prefix;

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      answer += arr[i];
      answer += separator;
    } else answer += arr[i];
  }

  answer += postfix;
  return answer;
}

console.log(solution([1, 3, 0, 7, 9], "<", ", ", ">")); // output: "<1, 3, 0, 7, 9>"
