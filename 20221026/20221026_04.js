// 제로베이스 프론트엔드 스쿨_Palindrome(2)
/*
[문제 설명]
팰린드롬은 거꾸로 읽어도 똑바로 읽은 것과 동일한 단어나 문장을 말합니다.
이 개념을 숫자에 적용하면 4, 2002, 1234321 등이 팰린드롬에 속합니다.

숫자의 자릿수 n이 주어질 때, 팰린드롬인 n자리 숫자의 개수를 출력하는 함수, solution을 완성해주세요.
결과값이 매우 클 수 있으니 1,000,000,007로 나눈 나머지 값을 출력해주세요.

[제한사항]
- 무의미한 leading zero는 허용하지 않는 것으로 생각합니다.
  - 예를 들어 121은 3자리 팰린드롬 수지만, 01210은 5자리 팰린드롬 수가 아닙니다.

[입력 형식]
- n은 1 이상 10,000 이하의 정수입니다.

[출력 형식]
- 팰린드롬인 n자리 숫자의 개수를 1,000,00,007로 나눈 나머지 값을 출력합니다.
*/

function solution(n) {
  let answer = 0;
  let sample = 1;
  for (let i = 1; i < n; i++) {
    sample *= 10;
  }

  let owari = sample * 10 - 1;
  for (let i = sample; i <= owari; i++) {
    if (palindrome(String(i))) answer++;
  }

  answer %= 100000007;
  return answer;
}

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}

console.log(solution(2)); // output: 9
