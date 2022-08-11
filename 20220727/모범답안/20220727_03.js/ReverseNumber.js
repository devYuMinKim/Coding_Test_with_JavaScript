/**
 * @param num {number}
 * @return {number}
 */
function solution(num) {
  let reverseNumber = 0;
  const NEGATIVE = num < 0;

  if (NEGATIVE) num *= -1;

  for (let i = num; i; i = Math.trunc(i / 10)) {
    reverseNumber = reverseNumber * 10 + (i % 10);
  }

  if (100000 < reverseNumber) {
    return 0;
  }

  return NEGATIVE ? -reverseNumber : reverseNumber;
}

solution
