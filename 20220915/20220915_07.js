// 제로베이스 프론트엔드 스쿨_BinSort
/*
배열 A에는 0 ~ 1000사이의 숫자가 랜덤하게 들어있습니다.
이 숫자들이 2진수로 변환되었을 때 가지고 있는 1의 개수에 따라 오름차순 정렬하는 함수를 작성하세요.
단, 1의 개수가 같은 경우 숫자의 크기에 따라 오름차순 정렬을 합니다.

[입력]
0 ~ 1000사이의 숫자가 들어있는 배열 A

[출력]
주어진 조건에 따라 정렬된 배열
*/

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
