/**
 * @param arr {number[]}
 * @param t {number}
 * @returns {number}
 */
function solution(arr, t) {
  let result = 0

  arr.forEach(num => {
    result += num * t + t
  })

  return result
}

export default solution
