/**
 * @param array {string[]}
 * @param s {string}
 * @returns {number}
 */
function solution(array, s) {
  let result = 0

  for (let i = 0; i < array.length; i++) {
    const postfix = array[i]
    const subPostText = s.substring(s.length - postfix.length, s.length)
    if (subPostText === postfix) {
      result++
    }
  }

  return result
}

export default solution
