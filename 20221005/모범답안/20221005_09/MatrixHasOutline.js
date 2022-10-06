/**
 * @param matrix {boolean[][]}
 * @returns {boolean}
 */
function solution(matrix) {
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i === 0 && j === n - 1) || (j === 0 && i === n -1)) {
        if (!matrix[i][j]) {
          return false
        }
      }
    }
  }

  return true
}

export default solution
