/**
 * @param arr {string[]}
 * @returns {number}
 */
function solution(arr) {
  return arr.map(s => countWords(s))
    .reduce((pre, cur) => Math.max(pre, cur), 0)
}

function countWords(s) {
  return s.split(' ').length
}

solution