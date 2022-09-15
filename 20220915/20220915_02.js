// 제로베이스 프론트엔드 스쿨_Fruits
/*
[문제 설명]
길 위에 사과나무와 오렌지 나무가 있습니다. 사과 열매 하나당 1점, 오렌지 열매 하나당 -1점이라고 할 때, 길 위의 연속으로 이어진 나무에서 얻을 수 있는 최고 점수를 구하는 함수, solution을 완성해주세요.

예를 들어, 길 위에 있는 나무의 열매 중 사과 열매의 수는 양수로, 오렌지 열매 수는 음수로 표현된 fruits [-2, 5, -3, 6, 8, -1, -5, 3]가 있을 때 얻을 수 있는 최고 점수는 2번째부터 5번째까지 수확했을 때 점수인 16점(5 - 3 + 6 + 8) 입니다.

[제한 사항]

열매 수확은 띄엄띄엄할 수 없으며, 연속된 나무의 모든 열매를 수확해야 합니다.
사과 열매 하나는 1점, 오렌지 열매 하나는 -1점입니다.
최소한 하나의 나무의 열매는 수확해야 합니다.
[입력 형식]

길 위에 과일의 점수를 나타낸 fruits가 주어집니다.
fruits는 -1000 이상 1000 이하의 정수로 이루어진 배열입니다.
길 위의 나무의 수는 1개 이상 10,000개 이하입니다.
[출력 형식]

길 위의 연속으로 이어진 나무에서 얻을 수 있는 최고 점수를 int 형식으로 출력합니다.
*/

function solution(fruits) {
  let max = 0, sum = 0;
  fruits.forEach(function(num) {
    sum += num;
    if (sum < 0) {
      sum = 0;
    }
    if (sum > max) {
      max = sum;
    }
  });

  return Math.max(sum, max);
}

console.log(solution([-2, 5, -3, 6, 8, -1, -5, 3]));
// 참고
// https://im-developer.tistory.com/70

function solution(fruits) {
  var max = 0;	
  var sum = fruits.reduce(function(ac, cv) {		
    if(ac < 0) {			
      ac = 0;		
    }		
    if(ac > max) {			
      max = ac;		
    }		
    
    return ac + cv;	
  }, 0);	

  return Math.max(sum, max);
}

console.log(solution([-2, 5, -3, 6, 8, -1, -5, 3]));
