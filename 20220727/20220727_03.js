// 제로베이스 프론트엔드 스쿨_ReverseNumber
/*
[문제 설명]
숫자를 뒤집어 주세요.
만약에 -587이 들어오면 -785로 변경되어야 합니다.
결과의 절댓값이 100,000을 넘어가면 0을 출력해주세요.

[제한 사항]

결과의 절댓값이 100,000을 넘어가면 0을 출력합니다.
[입력 형식]

num은 -1,000,000 이상 1,000,000 이하의 정수입니다.
[출력 형식]

leading zeros는 제거합니다. (ex: 340이 입력되면 043이 아니라 43이 출력되어야 합니다.)
int 형식으로 출력합니다.
*/

function solution(num) {
  var answer = "";

  if (num < 0) {
    answer += "-";
    num *= -1;
  }

  let tmp = num % 10;
  if (tmp != 0) answer += tmp;
  num = parseInt(num / 10);

  while (true) {
    answer += num % 10;
    num = parseInt(num / 10);
    if (num == 0) break;
  }

  answer = parseInt(answer);
  if (answer > 100000) {
    return 0;
  }

  return answer;
}

console.log(solution(-587));
