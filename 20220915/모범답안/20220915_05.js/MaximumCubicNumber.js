/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  for (let i = 0; i <= 1000; i++) {
    if (Math.pow(i, 3) > n) {
      return Math.pow(i - 1, 3)
    }
  }
}

solution