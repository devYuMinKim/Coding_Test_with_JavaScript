// 제로베이스 프론트엔드 스쿨_CandyPrice
/*
[문제 설명]
사탕 구매 가격을 구하려고 합니다. 사탕 1개당 가격이 price 이고, 사탕 10개를 구매하면 1개를 무료로 준다고 할 때,
사탕 n개를 구매하는 데 드는 비용을 구하는 함수, solution을 완성해주세요.

[입력 형식]
- n은 1 이상 100 이하인 정수입니다.
- price는 1 이상 100 이하인 정수입니다.

[출력 형식]
- 사탕 구매하는 데 드는 비용을 구합니다.
*/

function solution(n, price) {
  let answer = 0;

  answer += (n - Math.floor(n / 10)) * price;

  return answer;
}

console.log(solution(11, 10)); // output: 100
