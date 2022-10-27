
/**
 * 
 * @param arr {number[]}
 * @returns number
 */
function solution(arr) {

    arr.sort((a, b) => a - b).reverse();
    const n = arr.length;

    const border = (n >> 1) - 1;
    let i = (n >> 1);

    while (i < n && arr[border] == arr[i]) {
        i += 1;
    }    

    return i;
}