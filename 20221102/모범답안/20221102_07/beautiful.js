/**
 * @param {array} beautiful
 * @return {int}
 */
function solution(beautiful) {
    let ans = Infinity;
    let n = beautiful.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let cur = 0;
        for (let k = 0; k < n; k++) {
          if ((beautiful[j] - beautiful[i]) * (k - i) != (beautiful[k] - beautiful[i]) * (j - i)) cur++;
        }
        ans = Math.min(ans, cur);
      }
    }

    return ans == Infinity ? 0 : ans;
}
