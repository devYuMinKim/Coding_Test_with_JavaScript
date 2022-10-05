// 제로베이스 프론트엔드 스쿨_Lecture
/*
[문제 설명]

제로베이스에서는 강의를 수강신청한 학생이 강의를 끝까지 수강하고 과제를 제출했는지 체크하고 싶습니다.

'finish' 배열에는 강의를 끝까지 수강한 학생 목록이 담겨있습니다.

마지막으로, 'submit' 배열에는 과제를 제출한 학생 목록이 담겨있습니다.

이 경우, 강의를 끝까지 수강하였으며 과제도 제출한 학생이 몇 명인지 반환해주세요

[제한 사항]

- 학생의 이름은 같을 수 없습니다.

- 수강신청을 한 학생은 최대 100명입니다.

- 'finish' 배열이나 'submit' 배열 안에는 수강신청을 한 학생이 없을 수 있습니다.

- 'finish' 배열이나 'submit' 배열 안에는 알파벳으로 이루어진 학생이름만 존재합니다.

[입력 형식]

- 'finish', 'submit' 두 가지의 배열이 입력으로 주어집니다.

[출력 형식]

- 강의를 끝까지 수강하고, 과제를 제출한 학생은 몇명인지 반환합니다.
*/

function solution(finish, submit) {
  let fin = [...finish];
  let sub = [...submit];
  let result = [];

  for (let element of fin) {
    if (sub.includes(element)) result.push(element);
  }

  return result.length;
}

console.log(solution(["A", "B", "C", "D"], ["B", "C", "D", "E"]));