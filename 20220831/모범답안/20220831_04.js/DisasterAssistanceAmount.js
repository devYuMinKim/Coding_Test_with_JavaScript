/**
 * @param arr {number[]}
 * @returns {number}
 */
function solution(arr) {
  arr.sort((a, b) => a - b)

  // 최소값 제거
  arr.shift()

  // 최대값 제거
  arr.pop()

  const average = arr.reduce((pre, cur) => pre + cur, 0) / arr.length
  return Math.floor(average)
}

solution
