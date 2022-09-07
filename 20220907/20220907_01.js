// 제로베이스 프론트엔드 스쿨_Bitchange
/*
주어진 정수 A와 B를 2진수로 표현했을 때, A를 B로 바꾸기 위하여 뒤집어야 하는 비트의 개수를 구하는 함수를 작성하세요.

[입력]
양의 정수 A, B

[출력]
A를 B로 바꾸기 위해 바뀌어야 하는 비트의 개수
*/

function solution(A, B) {
  let count = 0;

  let a = A.toString(2);
  let b = B.toString(2);

  let aArr = [...a];
  let bArr = [...b];

  let tmp = 0;
  
  if (A > B) {
    tmp = bArr.length - 1;
    for (let i = aArr.length - 1 ; i >= 0 ; i--) {
      if (aArr[i] !== bArr[tmp--]) count++;
    }
  } else {
    tmp = aArr.length - 1;
    for (let i = bArr.length - 1 ; i >= 0 ; i--) {
      if (bArr[i] !== aArr[tmp--]) count++;
    }
  }

  return count;
}

console.log(solution(29, 15));