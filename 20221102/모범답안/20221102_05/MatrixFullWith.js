/**
 * @param matrix {boolean[][]}
 * @param b {boolean}
 * @returns {boolean}
 */
function solution(matrix, b) {
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== b) {
        return false
      }
    }
  }

  return true
}

export default solution
