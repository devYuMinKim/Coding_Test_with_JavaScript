/**
 * @param array {number[]}
 * @return {number}
 */
function solution(array) {
  let set = new Set()

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue

      const num = createNumber(array[i], array[j])
      const isEven = num % 2 === 1
      if (isEven) {
        set.add(num)
      }
    }
  }

  return set.size
}

function createNumber(tenDigits, oneDigit) {
  return tenDigits * 10 + oneDigit
}

export default solution
