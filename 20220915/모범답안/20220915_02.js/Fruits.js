/**
 * @param fruits {number[]}
 * @return {number}
 */
function solution(fruits) {
  const n = fruits.length;

  // n번째 까지의 나무에서 얻을 수 있는 최고 점수
  const dp = [];
  dp[0] = fruits[0];

  // 현재까지 최고 점수
  let curMax = dp[0];

  for (let i = 1; i < n; i++) {
    dp[i] = fruits[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    curMax = Math.max(curMax, dp[i]);
  }

  return curMax;
}

solution
