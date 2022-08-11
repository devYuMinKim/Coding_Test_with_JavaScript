/**
 * @param area {number}
 * @returns {number[]}
 */
function solution(area) {
  let w = Math.floor(Math.sqrt(area))
  while (area % w !== 0) w--
  return [w, area / w]
}

solution