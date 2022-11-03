/**
 * @param {array} schedule
 * @return {int}
 */
function solution(schedule) {
    let n = schedule.length;
    const mpa = {}
    const mpb = {}
    schedule.forEach(([a, b]) => {
        mpa[a] = (mpa[a] || 0) + 1
        mpb[b] = (mpb[b] || 0) + 1
    })
 
    let answer = 0
    schedule.forEach(([a, b]) => {
        answer += (mpa[a] - 1) * (mpb[b] - 1)
    })
 
    const total = n * (n - 1) * (n - 2) / 6
    
    return total - answer
}

console.log(solution([[1,5], [2,4], [3,3], [4,2], [5,1]]))
console.log(solution([[3,1], [3,2], [3,3]]))
console.log(solution([[2,3], [3,2], [3,3]]))
console.log(solution([[2,3], [3,1], [3,3]]))
console.log(solution([[17, 11], [7, 11], [18, 16], [27, 11], [1, 10], [25, 19], [1, 26], [23, 23], [1, 20], [20, 12], [20, 8], [26, 6], [25, 22], [3, 17], [21, 26], [22, 15], [25, 23], [23, 7], [17, 14], [25, 8], [6, 17], [20, 13], [22, 18], [23, 2], [17, 22], [15, 9], [9, 27]]))
console.log(solution([[1, 10], [9, 16], [4, 1], [10, 1], [18, 8], [12, 5], [7, 4], [14, 8], [2, 11], [15, 10], [2, 5], [4, 2], [18, 16], [6, 13], [15, 5], [5, 17], [11, 18], [12, 7]]))