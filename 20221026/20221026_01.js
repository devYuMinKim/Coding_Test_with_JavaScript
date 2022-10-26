// 제로베이스 프론트엔드 스쿨_Pailindrome
/*
문자열 S는 하나의 단어를 나타냅니다.
단어를 거꾸로 뒤집어도 똑같은 것을 회문이라고 합니다.

주어진 단어가 회문인경우 1, 아닌경우 0을 리턴하는 함수를 구현하세요.

[입력]
1000자 미만의 문자열 S (알파벳 대문자)

[출력]
회문 인경우 1, 그렇지 않은 경우 0
*/

function solution(S) {
  let answer = 1;
  S = S.toLowerCase();
  let len = S.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (S[i] !== S[len - i - 1]) return 0;
  }
  return answer;
}

console.log(solution("MAMA")); // output: 0
