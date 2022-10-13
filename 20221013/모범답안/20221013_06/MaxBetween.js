/**
 * @param arr {number[]}
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
function solution(arr, a, b) {
  let curMax = null
  arr.forEach(num => {
    const isIn = a <= num && num <= b
    const isMax = curMax === null || curMax < num
    curMax = isIn && isMax ? num : curMax
  })
  return curMax === null ? -1 : curMax
}

export default solution
