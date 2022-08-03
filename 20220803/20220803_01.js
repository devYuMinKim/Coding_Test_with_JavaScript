// 제로베이스 프론트엔드 스쿨_ReverseText
/*
[문제 설명]
문자열 s가 있습니다. 이 문자열을 역으로 출력하는 함수, solution을 완성해주세요.

예를 들어, s 'apple'이 있을 때, 결과는 'elppa' 입니다.

[입력 형식]
- s는 길이가 100 이하의 문자열입니다.
- s는 대/소문자로 구성되어 있습니다.

[출력 형식]
- 문자열을 역으로 출력합니다.
*/

function solution(s) {
  var answer = "";

  for (let element of s) {
    answer = element + answer;
  }

  return answer;
}

console.log(solution("apple"));
