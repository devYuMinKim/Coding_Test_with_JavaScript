// 제로베이스 프론트엔드 스쿨_inputK
/*
[문제 설명]

-10000 ~ 10000 사이의 숫자 N과 1 ~ 9 사이의 숫자 K가 주어집니다.
K를 N의 특정 자리에 넣어서 만들수 있는 숫자들 중 최대값을 구하는 함수를 작성하세요.

[입력 형식]
 -10000 ~ 10000 사이의 정수 N, 1 ~ 9 사이의 정수 K

[출력 형식]
주어진 조건에 만족하는 정수

매개변수 : int
리턴타입 : int
*/

function solution(N, K) {
  let array = [];
  let bool = true;
  if(N < 0) {
    bool = false;
    N *= -1;
  }

  do {
    array.unshift(N % 10);
    N = Math.floor(N / 10);
  } while(N > 0);

  if(bool) {
    for(let i = 0 ; i < array.length ; i++) {
      if(array[i] < K) {
        array.splice(i, 0, K);
        break;
      }
    }
  } else {
    for(let i = 0 ; i < array.length ; i++) {
      if(array[i] > K) {
        array.splice(i, 0, K);
        break;
      }
    }
  }

  let answer = "";

  for(let element of array) {
    answer += element;
  }

  if(bool) return Number(answer);
  else return -1 * Number(answer);
}

console.log(solution(-728, 3));