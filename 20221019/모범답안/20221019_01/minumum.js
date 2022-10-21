/**
 * @param {array} arr
 * @param {array} brr
 * @return {int}
 */
function solution(arr, brr){
    var maxA = 1;
    var maxB = 1;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] < brr[j]) {
            var temp = arr[j];
            arr[j] = brr[j];
            brr[j] = temp;
        }
        
        maxA = Math.max(maxA, arr[j]);
        maxB = Math.max(maxB, brr[j]);
    }
    
    return maxA * maxB;
}
