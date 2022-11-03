/**
 * @param arr {number[]}
 * @param prefix {string}
 * @param separator {string}
 * @param postfix {string}
 * @returns {string}
 */
function solution(arr, prefix, separator, postfix) {
  let result = ""

  if (prefix !== undefined) {
    result += prefix
  }

  for (const [i, v] of arr.entries()) {
    if (i > 0) {
      result += separator
    }
    result += v
  }

  if (postfix !== undefined) {
    result += postfix
  }

  console.log(result)
  return result
}

export default solution
