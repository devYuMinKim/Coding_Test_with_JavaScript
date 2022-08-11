/**
 * @param arr {number[]}
 * @returns {number}
 */
function solution(arr) {
  arr.sort((a, b) => a - b)

  const representers = []
  for (let i = 0; i < arr.length / 2; i++) {
    const curMinIndex = i * 2
    representers.push(Math.max(arr[curMinIndex], arr[curMinIndex + 1]))
  }
  return representers.reduce((pre, cur) => pre + cur, 0)
}

solution