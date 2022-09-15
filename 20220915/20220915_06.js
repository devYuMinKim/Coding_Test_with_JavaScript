// 제로베이스 프론트엔드 스쿨_WordTrain
/*
[문제 설명]
전 세계의 알파벳들이 기차놀이를 하기 위해서 한 장소에 모였습니다.
뒤죽박죽 같은 스펠링의 알파벳들도 섞여 들어가 있습니다.
여기에서 반복 없이 가장 긴 알파벳 길이를 구하는 함수, solution을 완성해주세요.

예를 들어, 문자열 s가 abssccbsbsv 일 때, 반복 없이 가장 긴 알파벳 길이는 3입니다.

[제한 사항]

기차놀이의 참가한 알파벳은 중복될 수 있습니다.
반복 없는 가장 긴 문자열을 찾습니다.
[입력 형식]

s는 길이가 1 이상 1,000 이하인 문자열입니다.
[출력 형식]

반복 없이 가장 긴 알파벳 길이를 출력합니다.
*/

function solution(s) {
  let arr = [];
  let length = 0;
  let tmp = 0;
  for (let element of s) {
    if (!arr.includes(element)) {
      arr.push(element);
      tmp++;
    } else {
      if (tmp > length) length = tmp;
      tmp = 0;
      arr = [];
    }
  }

  return length;
}

console.log(solution("abssccbsbsv"));
