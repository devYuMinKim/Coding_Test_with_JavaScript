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