// 제로베이스 프론트엔드 스쿨_CountTruncateLetter
/*
[문제 설명]
문자열 s가 있습니다. 이 문자열의 중복된 단어를 제외한 단어수를 출력하는 함수, solution을 완성해주세요.

예를 들어, s `Hello world Nice world`가 있을 때,
단어는 'Hello', 'world', 'Nice', 'world' 이며
중복을 제외한 단어는 'Hello', 'world', 'Nice'로 결과는 3입니다.

[제한 사항]
- 단어는 공백(` `)으로 구분되어 있습니다.

[입력 형식]
- s는 길이가 1 이상 1,000 이하인 문자열입니다.
- s는 영어 대, 소문자와 공백(` `)으로 이루어져 있습니다.

[출력 형식]
- 중복을 제외한 단어수를 출력합니다.
*/

function solution(s) {
  let sample = s.split(' ');
  
  let arr = [];
  for (let element of sample) {
    if (arr.includes(element)) continue;
    else arr.push(element);
  }

  return arr.length;
}

console.log(solution("Hello world Nice world"));