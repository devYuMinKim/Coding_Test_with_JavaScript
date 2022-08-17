// 제로베이스 프론트엔드 스쿨_SortedAppearNumber
/*
[문제 설명]
숫자로 이루어진 문자열 s가 있습니다. 이때 가장 많이 들어온 숫자 순서대로 출력하는 함수, solution을 완성해주세요.
단, 들어온 횟수가 같은 경우에는 작은 수를 먼저 출력합니다.

예를 들어, s가 '221123'으로 주어질 때, 출력 결과는 '2 1 3 0 4 5 6 7 8 9'입니다.

[입력 형식]

s는 길이가 1 이상 100,000 이하의 문자열입니다.
s는 숫자로 구성됩니다.
[출력 형식]

가장 많이 들어온 숫자 순서대로 공백으로 구분하여 string 형식으로 출력합니다.
*/

function solution(s) {
  let num = Number(s);

  let arr = new Array();
  for(let i = 0 ; i < 10 ; i++) {
    arr[i] = 0;
  }

  let resultArr = new Array();
  for(let i = 0 ; i < 10 ; i++) {
    resultArr[i] = i;
  }

  while(1) {
    arr[num % 10]++;
    num = Math.floor(num / 10);
    if(num == 0) break;
  }

  resultArr = bubble(arr, resultArr);

  let result = "";
  for (let i = 0 ; i < resultArr.length ; i++) {
    result += resultArr[i];
    if(i != resultArr.length - 1)
      result += ' ';
  }

  return result;
}

function bubble (array, result) {
  for (let i = 0 ; i < array.length - 1 ; i++) {
    let swap;
    for (let j = 0 ; j < array.length - 1 - i ; j++) {
      if (array[j] < array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;

        swap = result[j];
        result[j] = result[j + 1];
        result[j + 1] = swap;
      }
    }
  }

  return result;
}

console.log(solution("221123"));