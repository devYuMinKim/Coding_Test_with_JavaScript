/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  let result = 0

  while (1 <= n) {
    const i = Math.floor(n % 10)
    result += (i % 2 === 0) ? 1 : 0

    n /= 10
  }

  return result
}

export default solution