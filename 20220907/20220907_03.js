// 제로베이스 프론트엔드 스쿨_Bracket
/*
총 4가지 종류의 괄호가 있습니다.
각 괄호들은 서로 짝이 있으며 그짝은 괄호가 열리고 닫히는 것을 의미합니다.

'(' ')', '{' '}', '[' ']', '<' '>'

이때 주어진 스트링 S가 괄호가 서로 교차하지 않은 형태로 짝이 잘 맞게 이루어진 문자열인지 판단하는 함수를 작성하세요.

[입력]
괄호로 이루어진 스트링 S

[출력]
괄호가 서로 교차하지 않고 짝이 잘 맞게 이루어진다면 1
그렇지 않으면 0을 리턴
*/

function solution(S) {
  let one = 0; // ()
  let two = 0; // {}
  let three = 0; // []
  let four = 0; // <>

  for (let element of S) {
    switch (element) {
      case '(': 
        one++;
        break;
      case ')':
        if (one === 0) return 0;
        else one--;
        break;
      case '{':
        two++;
        break;
      case '}':
        if (two === 0) return 0;
        else two--;
        break;
      case '[':
        three++;
        break;
      case ']':
        if (three === 0) return 0;
        else three--;
        break;
      case '<':
        four++;
        break;
      case '>':
        if (four === 0) return 0;
        else four--;
    }
  }

  if (one === 0 && two === 0 && three === 0 && four === 0) return 1;
  else return 0;
}

console.log(solution("(()){[<>]}"));