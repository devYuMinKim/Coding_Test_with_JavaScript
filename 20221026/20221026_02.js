// 제로베이스 프론트엔드 스쿨_Grading
/*
[문제 설명]
대학에서는 강의를 수강한 학생에게 A, B, C, D등급 또는 F를 부여하여 성적을 산출합니다.
일반적으로 최고 등급인 A 학점은 수강생의 일정 비율 이상 부여할 수 없도록 제한이 있습니다.
ㄱ 대학교에서는 A 학점을 부여할 수 있는 최대 인원 수를 수강 인원의 50%로 제한하고 있습니다.
단, 예외로 50%의 경계에 걸쳐 동일한 점수를 받은 학생들에게 동일한 학점을 주기 위한 경우는 50%를 초과할 수 있습니다.

예를 들어 5명의 수강생 성적이 각각 100, 95, 95, 95, 90점인 과목이 있습니다.
95점을 받은 학생 3명이 상위 50%의 경계에 걸쳐있기 때문에 이들에게 모두 같은 A등급을 주기 위해 50% 제한을 초과할 수 있습니다.
즉, 위와 같은 경우에는 최대 4명이 A등급을 받을 수 있습니다.

수강생의 성적이 주어졌을 때, A등급을 받을 수 있는 최대 인원수를 출력하는 함수, solution을 완성해주세요.

[입력 형식]
- arr은 길이가 5 이상 20 이하인 배열입니다.
- arr은 0 이상 100 이하의 정수로 구성됩니다.

[출력 형식]
- A등급을 받을 수 있는 최대 인원수를 출력합니다.
*/

function solution(arr) {
  let answer = 0;
  let array = [...arr];
  let cutline = Math.floor(array.length / 2);
  let standard = 0;

  array.sort(function (a, b) {
    return b - a;
  });

  for (let element of array) {
    if (answer < cutline) {
      answer++;
      continue;
    } else if (answer === cutline) {
      standard = element;
      answer++;
    } else {
      if (element === standard) answer++;
      else break;
    }
  }

  return answer;
}

console.log(solution([95, 90, 95, 100, 95])); // output: 4
