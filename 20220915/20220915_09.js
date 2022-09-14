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