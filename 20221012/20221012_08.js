// 제로베이스 프론트엔드 스쿨_PercentageOfLetter
/*
[문제 설명]
문자열 text와 s가 주어집니다. 이때, text에서 s가 차지하는 퍼센트를 출력하는 함수, solution을 완성해주세요.

예를 들어, text 'google' 와 s 'o'가 주어질 때, 결과는 33 입니다.

[제한 사항]
- 퍼센트는 소숫점 아래는 내림처리 합니다.

[입력 형식]
- text는 길이가 1 이상 100 이하의 문자열입니다.
- text는 소문자 알파벳으로 이루어져 있습니다.
- s는 소문자 알파벳 1개입니다.

[출력 형식]
- s가 차지하는 퍼센트를 구합니다.
*/

function solution(text, s) {
  let answer = 0;
  let count = 0;

  for (let element of text) {
    if (element === s) count++;
  }

  answer = Math.trunc((count / text.length) * 100);

  return answer;
}

console.log(solution("google", "o"));