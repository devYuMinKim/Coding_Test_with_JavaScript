/**
 * @param {int} n
 * @param {array} stat1
 * @param {array} stat2
 * @return {string}
 */
function solution(n, stat1, stat2) {
    const aa = [], bb = [];
    for (let i = 0; i < n; i++) aa[i] = [stat1[i], i];
    for (let i = 0; i < n; i++) bb[i] = [stat2[i], i];

    aa.sort((x, y) => y[0] - x[0]);
    bb.sort((x, y) => y[0] - x[0]);

    q = new Set();
    for (let i = 0; i < n; i++) {
        q.add(aa[i][1]);
        q.add(bb[i][1]);
        if (q.size == i + 1) {
            break;
        }
    }

    const answer = Array(n).fill(0);
    for (let e of q) {
        answer[e] = '1'
    }

    return answer.join("")
}
