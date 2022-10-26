// 제로베이스 프론트엔드 스쿨_WordPatternGame
/*
[문제 설명]
상현이와 성민이는 낱말 게임을 하고 있습니다. 패턴을 주면 이 패턴대로 한 사람씩 돌아가면서 낱말을 말하는 게임입니다.

예를 들어, 주어진 패턴 p가 "가나나가" 이고, 낱말 s가 "드래곤 바나나 바나나 드래곤" 라고 가정할 때 게임의 경과는 무승부로 true를 출력합니다.

한 사람이 첫 번째 패턴인 "가" 시점에 특정 낱말을 말합니다.
ex: "드래곤"
그다음 사람은 "가" 패턴에 말한 낱말을 제외하고, 두 번째 패턴인 "나" 시점에 맞는 임의의 낱말을 말합니다.
ex: "바나나"
그다음 사람은 세 번째 패턴인 "나" 시점에 맞는 낱말을 말합니다.
ex: "바나나"
마지막으로 네 번째 패턴인 "가" 시점에 맞는 낱말을 말합니다.
ex: "드래곤"

패턴 p와 언급한 낱말들 s가 주어질 때, 해당 게임이 무승부로 끝났는지를 출력하는 함수, solution을 완성해주세요.

[제한 사항]

각 낱말은 공백이 없는 연속된 문자열입니다.
s의 각 낱말은 스페이스(" ")로 구분됩니다.
[입력 형식]

p는 길이가 4인 문자열입니다.
s는 길이가 1 이상 1,000 이하의 문자열입니다.
[출력 형식]

게임의 결과가 무승부인지를 boolean 형식으로 출력합니다.
*/

function solution(p, s) {
  let arr1 = [...p];
  let arr2 = s.split(' ');
  
  if (arr2.length % arr1.length === 0) return true;
  else return false;
}

console.log(solution("가나다라", "바나나 드래곤 스리랑카 오염"));