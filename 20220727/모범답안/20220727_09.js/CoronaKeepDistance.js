/**
 * @param lineUp {number[]}
 * @param level {number}
 * @returns {boolean}
 */
function solution(lineUp, level) {
  let distanceSoFar = 9999
  for (let num of lineUp) {
    if (num === 1) {
      if (distanceSoFar < level) return false
      distanceSoFar = 0
    } else if (num === 0) {
      distanceSoFar++
    }
  }
  return true
}

solution