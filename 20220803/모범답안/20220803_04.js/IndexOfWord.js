/**
 * @param sentence {string}
 * @param word {string}
 * @returns {number}
 */
function solution(sentence, word) {
  if (word === '') return -1

  const words = sentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) return i
  }

  return -1
}

export default solution
