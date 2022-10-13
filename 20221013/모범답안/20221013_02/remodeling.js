/**
 * @param now {Array}
 * @param tobe {Array}
 */
function solution(now, tobe) {
    var answer = 0
    var c = now.map(function(e, i) {
        return [e, tobe[i]];
    });

    for (var i in c) {
        if (c[i][0] < c[i][1]) {
            answer += c[i][1] - c[i][0]
        } else if (c[i][0] > c[i][1]) {
            answer += c[i][1] + c[i][0]
        }
    }

    return answer
}