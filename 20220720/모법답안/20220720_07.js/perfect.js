/**
 * @param {int} n
 * @param {string} ab
 * @return {int}
 */
function solution(n, ab) {
    let i = 0, j = 0, maxlen = 0;
    let count_a = 0, count_b = 0;
 
    while (j < ab.length) {
 
        if (ab[j] == 'a')
            count_a++;
        else
            count_b++;
 
        if (i < j && count_a > n && count_b > n) {
            if (ab[i] == 'a') count_a--;
            else count_b--;
            i++;
        }
 
        j++;
        maxlen = Math.max(maxlen, j - i);
    }
 
    return maxlen;
}
