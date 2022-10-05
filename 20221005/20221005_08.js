// 제로베이스 프론트엔드 스쿨_GreatestLetterInBoth
/*
[문제 설명]
문자열 s가 주어집니다. 이때, 대소문자가 모두 존재하는 가장 큰 알파벳을 구하는 함수, solution을 완성해주세요.

예를 들어 s 'acBfbsTES'가 주어질 때, 대소문자가 모두 존재하는 가장 큰 알파벳은 'S'입니다.

[제한 사항]
- 만족하는 결과가 없는 경우 빈 문자열('')을 반환합니다.
- 출력은 대문자로 합니다.

[입력 형식]
- s는 길이가 1 이상 100 이하인 문자열입니다.
- s는 영어 대, 소문자로 구성되어 있습니다.

[출력 형식]
- 대소문자가 모두 존재하는 가장 큰 알파벳을 출력합니다.
*/

function solution(s) {
  let upper = []; // 대문자
  let lower = []; // 소문자
  let all = [];   // 대문자, 소문자 전부 있는 경우 저장


  for (let element of s) {
    if (element >= 'a') { // 소문자
      if (!lower.includes(element)) lower.push(element);
    } else {  // 대문자
      if (!upper.includes(element)) upper.push(element);
    }

    let low = element.toLowerCase();
    let upp = element.toUpperCase();

    if (upper.includes(upp) && lower.includes(low)) all.push(upp);
  }

  all.sort();

  if (all.length === 0) return '';
  else return all[all.length - 1];
}

console.log(solution("acBfbsTES"));