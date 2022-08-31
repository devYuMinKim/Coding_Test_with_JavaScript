// 제로베이스 프론트엔드 스쿨_SteppingStone
/*
[문제 설명]
징검다리를 건너려고 합니다. 징검다리는 한 번에 1칸 혹은 2칸을 건널 수 있습니다.

예를 들어, 3개의 발판이 있다고 가정할 때, 징검다리를 건너는 모든 방법의 수 예시는 다음과 같습니다.

1 걸음 + 1 걸음 + 1 걸음
1 걸음 + 2 걸음
2 걸음 + 1 걸음

징검다리의 발판 수 n이 주어질 때, 징검다리를 건너는 모든 방법의 수를 구하는 함수, solution을 완성해주세요.

[입력 형식]

n은 1 이상 50 이하의 정수입니다.
[출력 형식]

n개의 징검다리를 건너는 모든 방법의 수를 int 형식으로 출력합니다.
*/

function solution(n) {
  let cases = 1;

  let num = 1;

  while (true) {
    if (num * 2 <= n) {
      let one = n - num * 2;
      
      let array = [];
      for (let i = 0 ; i < num ; i++) {
        array.push(2);
      }
      for (let i = 0 ; i < one ; i++) {
        array.push(1);
      }

      let arrays = [...getCombinations(array, num)];
      cases += arrays.length;
      num++;
    } else {
      break;
    }
  }

  return cases;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); 
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]); 
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

console.log(solution(3));
// console.log(getCombinations([1, 2], 1));