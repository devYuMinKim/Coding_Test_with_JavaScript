/**
 * @param arr {number[]}
 * @returns {number}
 */
function solution(arr) {
  let result = 0
  let continuedOneCount = 0
  for (const binary of arr) {
    if (binary === 1) {
      continuedOneCount++
      result = Math.max(result, continuedOneCount)
    } else {
      continuedOneCount = 0
    }
  }
  return result
}

solution