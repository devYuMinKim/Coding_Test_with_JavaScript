// 제로베이스 프론트엔드 스쿨_Follower
/*
SNS에서 서로가 팔로우를 했다는 것을 '맞팔'이라고 표현합니다.
다음 팔로우 관계를 나타낸 배열을 통해 서로 맞팔 관계인 쌍의 수를 리턴하는 함수를 작성하세요.

이때 ["철수", "영희"] 라는 정보는 철수가 영희를 팔로우 했음을 나타냅니다.

[입력]
팔로우 관계가 표현된 String 2차원 배열 A.

[출력]
맞팔 관계인 쌍의 수
*/

function solution(A) {
  let answer = 0;

  let array = [];

  for (let element of A) {
    for (let elements of element) {
      if (!array.includes(elements)) {
        array.push(elements);
      }
    }
  }

  return answer;
}

function Graph () {
  this.edge = {};
}

// addVertex(): 정점(vertex) 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

// addEdge(): 간선(edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

console.log(solution([["철수", "영희"], ["영희", "진수"], ["진수", "동수"], ["진수", "진호"]]));
