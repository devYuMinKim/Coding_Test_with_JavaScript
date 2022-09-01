/**
 * @param arr {number[]}
 * @returns {number[]}
 */
function solution(arr) {
  const result = []

  let i = 0
  while (result.length < arr.length) {
    const element = arr[i++]
    result.push(element)
    if (element % 2 === 1 && result.length < arr.length) {
      result.push(element)
    }
  }

  return result
}

solution