
/**
 * 
 * @param n {number}
 * @return {number}
 */
function solution(n) {
    if (n == 1) {
        return 10;
    }

    let ans = 1;

    for (let i = 0; i < n; i += 2) {
         ans = (ans * (i == 0 ? 9 : 10));
         ans %= 1_000_000_007
    }

    return ans;
}