/**
 * @param array {number[]}
 * @param p {string}
 * @return {number}
 */
function solution(array, p) {
  let result = 0

  for (let i = 0; i < array.length; i++) {
    const s = array[i]
    if (s.indexOf(p) === 0) {
      result++
    }
  }

  return result
}

export default solution
