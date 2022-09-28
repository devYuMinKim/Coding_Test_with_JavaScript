// 제로베이스 프론트엔드 스쿨_Theif
/*
배열 A는 집안에 있는 보석의 가치를 나타냅니다.

도둑은 본인의 양심상 보석의 합이 K가 넘어가지 않는 선에서 물건을 훔치기로 했습니다.
이때 도둑이 훔칠수 있는 보석의 최대 개수가 몇개인지 구하는 함수를 작성하세요.

[입력]
보석의 가치를 나타낸 배열 A
도둑이 훔칠수 있는 최대 가치 K

[출력]
도둑이 훔칠수 있는 최대 보석 개수
*/

function solution(A, K) {
  let arr = [...A];
  let num = 0;
  let sum = 0;

  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0 ; i < arr.length ; i++) {
    sum += arr[i];
    if (sum > K) break;
    else num++;
  }

  return num;
}

console.log(solution([1, 2, 3, 4, 5], 15));