// 제로베이스 프론트엔드 스쿨_SumOfNumber
/*
[문제 설명]
숫자 n이 주어질 때, 0 이상 n 이하의 연속된 정수의 합이 n과 같은 경우의 수를 구하는 함수, solution을 완성해주세요.

예를 들어, n이 15로 주어질 경우, 연속된 정수의 합이 15와 같은 경우의 수는 다음과 같이 4입니다.

15
8 + 7
4 + 5 + 6
1 + 2 + 3 + 4 + 5

[입력 형식]

n은 1 이상 10,000 이하의 정수입니다.
[출력 형식]

연속된 정수의 합이 n과 같은 경우의 수를 int 형식으로 출력합니다.
*/

function solution(n) {
  var answer = 0
  
  for(let i = 1 ; i < n/2;i++){
    for(let j = i,tmp=0 ; j < n+1;j++){
      tmp += j
      if(tmp ===n){
        answer += 1
      } else if(tmp > n){
        break
      }
    }        
  }
  return answer+1;
}
console.log(solution(15));

//참고: https://zzemal.tistory.com/51