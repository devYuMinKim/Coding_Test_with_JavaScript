/**
 * @param s {string}
 * @param n {number}
 * @returns {number}
 */
function solution(s, n) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === String(n)) count++
  }

  return count
}

export default solution
