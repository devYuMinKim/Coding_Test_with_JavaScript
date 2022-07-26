// 제로베이스 프론트엔드 스쿨_CardGame
/*
0 ~ 100까지의 숫자가 적혀있는 카드가 있습니다.
해당 카드를 뽑은 순서에 따라 아래 규칙에 의거해 점수를 책정합니다.

  1. 뽑은 카드의 숫자와 현재 까지 뽑은 카드의 수를 곱한다.
  2. 짝수번째로 뽑은 카드의 경우 -1을 더 곱한다.
배열 A에 뽑은 카드의 리스트가 제공될때 해당 카드들이 규칙에 따라 나올수 있는 가장 큰 점수가 몇점인지 구하는 함수를 작성하세요.

[입력]
카드 리스트 배열 A

[출력]
규칙에 의거해서 나올수 있는 최대 점수
*/

function solution(A) {
  let result = 0;

  let array = [...A];
  array.sort(function(a, b) {
    return b - a;
  });

  let minus = Math.floor(array.length / 2);

  let last = array.length - minus;
  let first = last - 1;

  for (let i = 1 ; i <= array.length ; i++) {
    if (i % 2 === 1) {
      result += array[first--] * i;
    } else {
      result += array[last++] * i * -1;
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));