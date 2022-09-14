function solution(n) {
  for (let i = n ; i >= 1 ; i--) {
    if (Math.cbrt(Number.isInteger(Math.cbrt(i)))) {
      return i;
    }
  }
}

console.log(solution(99));

