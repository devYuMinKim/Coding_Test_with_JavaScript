/**
 * @param arr {number[]}
 * @returns {number}
 */
function solution(arr) {
  arr.sort((a, b) => b - a)

  for (let i = 0; i < arr.length - 2; i++) {
    if (isTriangleable(arr[i], arr[i + 1], arr[i + 2])) return arr[i] + arr[i + 1] + arr[i + 2]
  }

  return 0
}

function isTriangleable(long, mid, short) {
  return long < mid + short
}

solution