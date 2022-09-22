/**
 * @param N {int}
 * @param language {array}
 * @return int
 */
function solution(n, language) {
    // Write your code here
    let ranks = []
    for (let i = 0; i < n; i++) {
        ranks.push(-1);
    }
    
    for (let lan of language) {
        const [first,second] = lan;
        union(first,second);
    }
    
    function union(fir, sec) {
        let p1 = find(fir);
        let p2 = find(sec);
        
        if (p1 !== p2) {
            ranks[p2] = p1;
        }
    }
    
    function find(node) {
        if (ranks[node] !== -1) {
            return find(ranks[node]);
        }
        return node;
    }
    
    let curObj = {}
    for (let i = 0; i < ranks.length; i++) {
        let key = find(i);
        if (key in curObj) {
            curObj[key] += 1;
        } else {
            curObj[key] = 1;
        }
    }

    let answer = 0;
    let numbers =  Object.values(curObj);
    
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            answer += numbers[i] * numbers[j] 
        }
    }
    return answer
}