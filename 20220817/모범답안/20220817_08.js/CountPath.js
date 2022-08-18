/**
 * @param h {number}
 * @param w {number}
 * @return {number}
 */
function solution(h, w) {
  // h x w 크기의 배열에, 해당 지점까지 갈 수 있는 경우의 수를 저장
  const dp = new Array(h).fill(new Array(w).fill(1));

  // dp[i][j] 까지 갈 수 있는 경우의 수는,
  // dp[i][j]의 좌측과 상단까지 갈 수 있는 경우의 수를 더한 것과 같다.
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[h - 1][w - 1];
}

solution
