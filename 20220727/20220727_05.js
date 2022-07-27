// 제로베이스 프론트엔드 스쿨_NumberPick
/*
배열 A에는 0~9까지의 숫자가 랜덤하게 들어있습니다.
해당 배열의 숫자를 두개 뽑아 조합했을 때 K번째로 큰 숫자를 리턴하는 함수를 작성하세요.

[입력]
0 ~ 9까지의 임의의 숫자 배열 A
숫자 K

[출력]
K 번재 큰 2자리 숫자
*/

function solution(A, K) {
  var answer = 0;
  A.sort(function (a, b) {
    return b - a;
  });

  let i = parseInt(K / 4);
  let j = K % 4;
  if (i == j) j++;

  answer = A[i] * 10 + A[j];

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1));
