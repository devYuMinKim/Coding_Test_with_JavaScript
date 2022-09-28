// 제로베이스 프론트엔드 스쿨_CountTruncateLetterArray
/*
[문제 설명]
문자열 배열 arr가 있습니다. 이 문자열들의 중복된 단어를 제외한 단어수를 출력하는 함수, solution을 완성해주세요.

예를 들어, arr [`no pain', 'no', 'gain`]가 있을 때,
단어는 'no', 'pain', 'no', 'gain' 이며
중복을 제외한 단어는 'no', 'pain', 'gain'로 결과는 3입니다.

[제한 사항]
- 단어는 공백(` `)으로 구분되어 있습니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하의 문자열 배열입니다.
- arr의 요소 s는 길이가 1 이상 1,000 이하인 문자열입니다.
- s는 영어 대, 소문자와 공백(` `)으로 이루어져 있습니다.

[출력 형식]
- 중복을 제외한 단어수를 출력합니다.
*/

function solution(arr) {
  let array = [...arr];
  let save = [];

  for (let element of array) {
    let tmp = element.split(' ');
    for (let elements of tmp) {
      if (!save.includes(elements)) save.push(elements);
    }
  }

  return save.length;
}

console.log(solution(["no pain", "no", "gain"]));