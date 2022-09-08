// 제로베이스 프론트엔드 스쿨_BinaryNumber(1)
/*
문자열 S는 2진수로 표현된 양의 정수입니다.

해당 정수에 아래의 연산을 수행합니다.

만약 숫자가 짝수인 경우 해당 값의 2를 나눈다.
만약 숫자가 홀수인 경우 1을 뺀다.

연산의 결과가 0이 될때까지 반복해서 수행했을 때 수행된 연산 횟수 N을 구하는 함수를 작성하세요.

[입력]
2진수가 표현된 String S

[출력]
결과가 0이 될때까지 수행한 연산 횟수 N
*/

function solution(S) {
  let num = Number(S);
  num = parseInt(num, 2);
  
  let count = 0;

  while(num != 0) {
    count++;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
  }

  return count;
}

console.log(solution("1101"));