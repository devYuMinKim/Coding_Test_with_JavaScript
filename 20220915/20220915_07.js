function solution(A) {
  let original = [...A];
  let array = [];

  for (let element of A) {
    let el = element.toString(2);
    let arr = el.split('');
    let tmp = 0;
    for (let elements of arr) {
      if (elements === '1') tmp++;
    }
    array.push(tmp);
  }

  for (let i = 0 ; i < array.length ; i++) {
    let swap;
    for (let j = 0 ; j < array.length - (i + 1) ; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
        swap = original[j];
        original[j] = original[j + 1];
        original[j + 1] = swap;
      }
    }
  }

  return original;
}

console.log(solution([1, 2, 3, 4]));