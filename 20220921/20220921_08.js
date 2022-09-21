// 제로베이스 프론트엔드 스쿨_Pair
/*
[문제 설명]
제로베이스에서는 수강생들을 사용하는 프로그래밍 언어에 따라 그룹으로 분류하여 2명을 선택하고 싶습니다. 하지만 뽑힌 2명의 학생이 같은 프로그래밍 언어를 사용하면 안 됩니다.

입력으로 주어지는 배열에는 같은 언어를 사용하는 학생들이 짝을 지어 제공되고, 이를 그룹화하여 각자 다른 언어를 사용하는 2명을 뽑는 방법의 가짓수는 얼마나 있는지 판단해주시면 됩니다.

예를 들어,

4명의 학생이 존재하고 주어지는 배열이 [1,2], [2,3] 이라면, 학생은 0,1,2,3으로 4명이 존재하고 1번 학생과 2번 학생이 같은 언어, 2번 학생과 3번 학생이 같은 언어를 사용합니다.

고로, [0번 학생]과 [1,2,3번 학생] 2개의 그룹으로 나뉘어지게 되고, 가능한 가짓수는 [0,1], [0,2], [0,3]으로 3가지입니다.

[제한 사항]

- 학생은 최소 1명 최대 10000명입니다.

- 주어지는 배열의 길이는 최소 1개 최대 10000개입니다.

- 학생의 ID는 항상 0부터 시작합니다.

[입력 형식]

- 학생의 숫자를 의미하는 N과 주어지는 배열 language의 각 요소는 같은 언어를 사용하는 학생의 짝으로 이루어져 있습니다.

[출력 형식]

- 제로베이스에서 2명을 선택하는 모든 경우의 수의 개수를 반환해주세요
*/

function solution(N, language) {
  let lan = [...language];
  lan.sort();

  let stu_1 = [];
  let stu_2 = [];

  stu_1.push(lan[0][0]);
  stu_1.push(lan[0][1]);

  lan.shift();

  // console.log(typeof lan);

  while(lan.length !== 0) {
    for (let i = 0 ; i < lan.length ; i++) {
      if (stu_1.includes(lan[i][0])) {
        stu_1.push(lan[i][1]);
      } else if (stu_1.includes(lan[i][1])) {
        stu_1.push(lan[i][0]);
      } else {
        if (!stu_2.includes(lan[i][0])) stu_2.push(lan[i][0]);
        if (!stu_2.includes(lan[i][1])) stu_2.push(lan[i][1]);
      }
    }
    lan.shift();
  }

  return stu_1.length * stu_2.length;
}

console.log(solution(5, [[0, 1], [2, 3], [0, 4]]));