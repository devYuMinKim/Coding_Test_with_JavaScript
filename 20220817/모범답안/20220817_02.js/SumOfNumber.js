/**
 * @param n {number}
 * @return {number}
 */
function solution(n) {
  let ret = 0;

  // n부터 0까지 순회합니다.
  for (let i = n; i >= 0; i--) {
    let val = n;

    // n에서 빼기 1씩 하면서 0이 되면 결과에 1을 추가합니다.
    for (let j = 0; j <= n; j++) {
      val -= i - j;
      if (val <= 0) {
        if (val === 0) ret++;
        break;
      }
    }
  }

  return ret;
}

solution
