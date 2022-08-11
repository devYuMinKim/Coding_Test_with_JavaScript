// 제로베이스 프론트엔드 스쿨_greatestCommonFactor
/*
[문제 설명]
배열 A에는 0보다 큰 숫자가 N개 들어있습니다.
모든 숫자를 아우르는 최대 공약수를 구하는 함수를 작성하세요.

[입력 형식]
 0보다 큰 정수가 들어있는 배열 A

[출력 형식]
 배열 A의 모든 정수를 아우르는 최대 공약수
*/

function solution(A) {
  let tmp;

  let array = [];
  for (let element of A) {
    array.push(element);
  }

  array.sort(function compare(a, b) {
    return a - b;
  });

  tmp = array[0];

  for (; tmp >= 1 ; tmp--) {
    for (let i = 0 ; i < array.length ; i++) {
      if(array[i] % tmp == 0) {
        if(i == array.length - 1) {
          return tmp;
        }
      } else {
        break;
      }
    }
  }

  return tmp;
}

console.log(solution([6, 12, 4]));