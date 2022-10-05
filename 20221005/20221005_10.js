// 제로베이스 프로트엔드 스쿨_MinimumTakeTime
/*
[문제 설명]
병원에서 진료를 위해 예약 환자가 대기 중입니다. arr는 진료를 위해 대기 중인 환자들의 진료 부위 수를 나타냅니다.
병원에는 n개만큼의 진료소가 있고, 1개의 진료 부위를 진료하는 데 1분이 소요된다고 가정합니다.
이때 예약 환자가 모두 진료받는 데 걸리는 시간 분을 구하는 함수, solution을 완성해주세요.

예를 들어, arr [1, 1, 1, 2, 2, 1, 1]가 있고, n이 3일 때, 모두 진료받는 시간은 6분입니다.

0분에 진료소 [-, -, -] 전부 비어있고, arr는 [1, 1, 1, 2, 2, 1, 1]입니다.
1분에 진료소 [1, 1, 1] 진료 부위가 남고, arr는 [2, 2, 1, 1]입니다.
2분에 진료소 [-, -, -] 전부 비어있고, arr는 [2, 2, 1, 1]입니다.
3분에 진료소 [2, 2, 1] 진료 부위가 남고, arr는 [1]입니다.
4분에 진료소 [1, 1, -] 3 진료소가 비어있고, arr는 [1]입니다.
5분에 진료소 [-, -, 1] 진료 부위가 남고, arr는 [] 입니다.
6분에 모든 진료가 끝납니다.

[제한 사항]

arr의 순서대로 진료받습니다.
진료소 입장하는 데 1분이 소요됩니다.
[입력 형식]

진료 부위를 나타내는 arr는 길이가 1 이상 1,000 이하의 배열입니다.
진료 부위는 1 이상 10 이하의 정수입니다.
진료소의 수 n은 1 이상 10 이하의 정수입니다.
[출력 형식]

모든 환자가 진료받는 시간 분을 int 형식으로 구합니다.
*/

function solution(arr, n) {
  let input = [...arr];
  let queue = new Queue();

  for (let i = 0 ; i < input.length ; i++) {
    if (queue.size() <= n) {
      queue.enqueue(input[i]);
    }
  }

  
}

// Queue(): 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
}

// enqueue(): 데이터 추가
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

// dequeue(): 데이터 삭제
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// size(): 큐 내 데이터 개수 확인
Queue.prototype.size = function () {
  return this.array.length;
};


console.log(solution([1, 1, 1, 2, 2, 1, 1], 3));  // output: 6