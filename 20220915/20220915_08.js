// 제로베이스 프론트엔드 스쿨_Factorization
/*
주어진 두개의 수의 소인수 분해 했을때 공통된 소수의 집합을 가지고 있는지 판단하는 함수를 작성하세요.

예를들어 12, 6 은 두 수 모두 2와 3으로만 이루어져 공통된 소수 집합을 가지고 있습니다.
9, 18의 경우 9는 3으로 이루어져 있으며, 18은 2, 3으로 이루어져 있기 때문에 공통 소수 집합이 아닙니다.

[입력]
1 ~ 10000 사이의 정수 A, B

[출력]
공통된 소수 집합인 경우 1, 아니면 0
*/

function solution(A, B) {
  let answer = 0;

  let one = primeFactors(A);
  let two = primeFactors(B);
  
  if (one.length !== two.length) return 0;
  
  answer = compareArray(one, two);

  return answer;
}

const primeFactors = n => {
  const answer = [];
  // 2로 나눠지면 계속 나누기
  while (n % 2 === 0) {
    if (!answer.includes(2)) answer.push(2);
    n /= 2;
  }

  // 3부터 루트n까지 나눌 수 있으면 나누기
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      if (!answer.includes(i)) answer.push(i);
      n /= i;
    }
  }

  // 루트n부터 n까지 소수인 경우 처리
  if (n > 2) answer.push(n);
  return answer;
};

const compareArray = function (a, b) {
  if (JSON.stringify(a) == JSON.stringify(b)) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution(12, 6));

// 소인수분해
// https://dalconbox.com/288
// 배열 비교
// https://aljjabaegi.tistory.com/570
