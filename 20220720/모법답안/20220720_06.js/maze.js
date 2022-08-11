/**
 * @param {int} n
 * @param {int} m
 * @param {int} s
 * @param {array} maps
 * @return {string}
 */
function solution(n, m, s, maps) {
    s = s - 1;
    const edges = [];
 
    for (let idx = 0; idx < m; idx++) {
        const [u, v] = maps[idx];
    
        edges.push([u - 1, v - 1]);
    }

    let map = new Map();
    const g = Array.from({
        length: n
    }, () => []);

    for (let [u, v] of edges) {
        g[u].push(v);
    }
   
    for (let child of g[s]) {
        let tmp = new Map([[child, s]]);
        const queue = [child];
    
        for (let node of queue) {
            if (map.has(node)) {
                return 'YES';
            }
    
            for (let c of g[node]) {
                if (c === s) continue;
                if (tmp.has(c)) continue;
                tmp.set(c, node);
                queue.push(c);
            }
        }
   
        for (let [child, node] of tmp) {
            map.set(child, node);
        }
    }
   
    return 'NO';
}
