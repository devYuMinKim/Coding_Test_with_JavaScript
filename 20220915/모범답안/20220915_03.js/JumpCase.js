/**
 * @param n {number}
 * @param k {number}
 * @returns {number}
 */
function solution(n, k) {
  const MOD = 1_000_000_007;

  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(k + 1);
  }

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k && j <= i; j++) {
      dp[i][j] = 0;
      for (let z = 0; z <= k; z++) {
        if (z !== j) {
          dp[i][j] += dp[i - j][z] || 0;
          dp[i][j] %= MOD;
        }
      }
    }
  }

  let result = 0;
  for (let i = 0; i <= k; i++) {
    result += dp[n][i] || 0;
    result %= MOD;
  }
  return result;
}

solution