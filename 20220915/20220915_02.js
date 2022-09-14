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