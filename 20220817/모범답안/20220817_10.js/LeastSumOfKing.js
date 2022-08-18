/**
 * @param arr {number[]}
 * @param K {number}
 * @returns {number}
 */
function solution(arr, K) {
  arr.sort((a, b) => a - b)

  const kings = []

  let i = 0
  while (i < arr.length) {
    let king = 0

    for (let sumCount = 0; sumCount < K; sumCount++, i++) {
      king = Math.max(king, arr[i])
    }

    kings.push(king)
  }

  return kings.reduce((pre, cur) => pre + cur, 0)
}

solution