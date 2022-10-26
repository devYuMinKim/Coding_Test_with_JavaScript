// 제로베이스 프론트엔드 스쿨_Anagram
/*
[문제 설명]
애너그램은 단어나 문장을 구성하고 있는 문자의 순서를 재배열하여 다른 단어나 문장을 만들어 내는 것을 말합니다.
예를 들어 Tom Marvolo Riddle의 알파벳을 적절히 재배열하면 I am Lord Voldemort. 라는 문장을 만들 수 있습니다.

두 개의 문자열 a와 b가 주어질 때, 두 문자열이 애너그램인지 판단하는 함수, solution을 완성해주세요.

[제한 사항]
- 애너그램 여부를 판단할 때는 공백 및 특수문자의 추가/삭제와 알파벳 대소문자 여부는 고려하지 않습니다.
- 알파벳을 재배열 하지 않은 경우에는 애너그램이 아니라 동일한 단어나 문장으로 판단합니다.

[문제 입력]
- a와 b는 길이가 1 이상 50 이하인 문자열 입니다.
- a와 b는 각각 알파벳 대소문자와 공백, '.', ',', '?', '!' 로 구성됩니다.
- a와 b는 최소 1글자 이상의 알파벳을 포함합니다.

[문제 출력]
- 두 문자열이 애너그램인 경우 'YES', 아닌 경우 'NO'를 출력합니다.
*/

function solution(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  const sortWord = (a) => a.split("").sort().join("");
  let sortedA = sortWord(a);
  let sortedB = sortWord(b);
  sortedA = sortedA.replace(/ /g, "");
  sortedB = sortedB.replace(/ /g, "");

  // sortedA.sort();
  // sortedB.sort();
  let A = [...sortedA];
  A.sort();
  let B = [...sortedB];
  B.sort();

  if (A == B) return "YES";
  else return "NO";
}

console.log(solution("Tom Marvolo Riddle", "I am Lord Voldemort")); // output: "YES"
