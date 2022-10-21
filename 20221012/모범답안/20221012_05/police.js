/**
 * @param {int} n
 * @param {int} k
 * @param {array} thieves
 * @return {int}
 */
function solution(n, k, theives){
    let police = 0
    let answer = 0
    theives.sort(function(a,b){
        return b - a;
    });
    
    for(let i = 0; i < k; i++){
      if (police >= theives[i]) break
      police += n - theives[i]
      answer++
    }

    return answer
}
