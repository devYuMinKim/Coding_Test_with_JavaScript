// 제로베이스 프론트엔드 스쿨_Stock
/*
배열 A는 십만전자의 일단위 주식가격이 들어있습니다.
해당 주식 가격 기준으로 매수와 매도를 1회씩 진행했을때 가능한 최대 수익을 구하는 함수를 작성하세요.

이때 매도는 항상 매수 이후에 이루어지며 수익을 낼수 없는 경우 0을 리턴하세요.

[입력]
주식의 일단위 주가 정보 배열 A

[출력]
최대 수익 값
*/

function solution(A) {
  let arr = [...A];
  let result = arr[0];
  const aver = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
  let average = aver(arr);

  for (let i = 1 ; i < arr.length ; i++) {
    if (arr[i] < average) {
      result += arr[i];
    } else {
      result -= arr[i];
    }
  }
  

  return result;
}

console.log(solution([100000, 99000, 99000, 98000, 97000]));