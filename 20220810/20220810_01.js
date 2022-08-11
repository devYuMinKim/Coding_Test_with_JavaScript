// 제로베이스 프론트엔드 스쿨_change
/*
[문제 설명]

우리나라의 화폐단위는 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1 원으로 이루어져 있습니다.
거스름돈 금액 A원이 입력 되었을때 해당 거스름돈을 만족하는 최소한의 화폐 개수를 리턴하는 함수를 작성하세요.

[입력 형식]
거스름돈 금액 A

[출력 형식]
최소한의 화폐 개수

매개변수 : int A
리턴타입 : int
*/

function solution(A) {
  let count = 0;
  const arr = [50000,10000,5000,1000,500,100,50,10,5,1];
  for(let item of arr){
    count = count + Math.floor(A/item); //동전의 개수
    A = A - item * Math.floor(A/item); // 남은 돈 계산
  }
  return count;
}

console.log(solution(12345));