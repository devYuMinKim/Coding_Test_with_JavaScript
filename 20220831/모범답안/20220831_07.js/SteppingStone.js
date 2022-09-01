/**
 * @param n {number}
 * @return {number}
 */
function solution(n) {
  const fibonaccis = [];
  fibonaccis[0] = 1;
  fibonaccis[1] = 2;

  for (let i = 2; i < n; i++) {
    fibonaccis[i] = fibonaccis[i - 2] + fibonaccis[i - 1];
  }

  return fibonaccis[n - 1];
}

solution
