// 제로베이스 프론트엔드 스쿨_Natube
/*
나튜브에는 다양한 카테고리의 개인 방송국이 있습니다.
나튜브의 메인 페이지에는 사용자의 구독 정보를 바탕으로 영상을 추천해주는 기능이 있습니다.

각 방송국에는 한개이상의 카테고리를 가지고 있으며 추천은 구독한 방송국과 동일한 카테고리에 해당하는 방송국들의 컨텐츠들을 보여줍니다.
방송국과 카테고리 정보가 담긴 2차원 배열 A와 특정 유저의 구독 정보가담긴 1차원 배열 B가 주어질 때 영상 추천 가능한 방송국의 개수를 리턴하는 함수를 작성하세요.

[입력]
카테고리와 방송국 명칭이 담긴 2차원 배열 A
구독한 방송국 명칭이 담긴 배열 B

[출력]
추천 대상인 방송국 개수
*/

function solution(A, B) {
  let answer = 0;
  let kind = [];
  let broadcast = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i][1] == B && !kind.includes(A[i][0])) kind.push(A[i][0]);
  }

  for (let i = 0; i < A.length; i++) {
    if (kind.includes(A[i][0]) && !broadcast.includes(A[i][1])) {
      broadcast.push(A[i][1]);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(
    [
      ["Game", "broadcast1"],
      ["Sport", "broadcast1"],
      ["Vlog", "broadcast1"],
      ["Game", "broadcast2"],
      ["Sport", "broadcast3"],
      ["Vlog", "broadcast4"],
    ],
    ["broadcast1"]
  )
); // output: 4
