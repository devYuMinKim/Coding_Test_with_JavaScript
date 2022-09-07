// 제로베이스 프론트엔드 스쿨_Postfix
/*
일반적으로 사용하는 수식(ex. A + B * C)을 중위 표기법이라고 합니다.

연산자가 피연산자 사이에 들어있기 때문에 중위 표기법이라는 명칭을 사용합니다.
후위표기법은 연산자가 피연산자 뒤에 오는 것을 의미합니다. (ex. ABC*+)

컴퓨터는 계산식을 항상 순차대로 수행하기 때문에 연산식을 변환해서 처리해야합니다.
컴퓨터를 위해 중위표기법을 후위표기법으로 변환하는 함수를 작성하세요.

단, 연산자와 피연산자 사이에 공백이 한칸씩 주어지고, 출력 결과에도 모든 연산자와 피연산자 사이에 공백이 한칸씩 존재해야 합니다.
연산자로 사용되는 기호는 '(', ')', '+', '-', '*', '/'이며 나머지는 피연산자로 취급합니다.

[입력]
중위 표기법 수식이 표현된 문자열 S

[출력]
후위 표기법 문자열
*/

function solution(S) {
  const split = S.split('');
  const stack = [];
  let answers = '';
  let answer = '';

  // 괄호를 만났을 때
  for (let i = 0 ; i < split.length ; i++) {
    const str = split[i];

    if (str === ' ') continue;
    else if (str === '(') {
      stack.push(str);
    } else if (str === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        answers += stack.pop();
      }
      stack.pop();
    } else if (str === '*' || str === '/') {
      while (stack.length && stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/') {
        answers += stack.pop();
      }
      stack.push(str);
    } else if (str === '+' || str === '-') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        answers += stack.pop();
      }
      stack.push(str);
    } else {
      answers += str;
    }
  }

  while (stack.length) {
    answers += stack.pop();
  }

  for (let i = 0 ; i < answers.length; i++) {
    answer += answers[i];
    if (i != answers.length - 1) answer += ' ';
  }

  return answer;
}

console.log(solution("1 + 2 * 3 * ( 2 + 3 )"));