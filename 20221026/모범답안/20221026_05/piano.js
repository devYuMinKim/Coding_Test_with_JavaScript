
/**
 * 
 * @param s {string}
 * @return {string} 
 */
function solution(s) {
    let groupCount = 0;
    let currentGroupStart = -3;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            continue;
        }

        if (currentGroupStart + 2 < i) {
            groupCount += 1;
            currentGroupStart = i;
        }
    }

    return groupCount <= 2 ? 'YES' : 'NO';
}