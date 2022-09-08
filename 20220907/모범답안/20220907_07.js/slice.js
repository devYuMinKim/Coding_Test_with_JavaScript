function solution(A){
    var count = 0;
  
    A.sort(function(a, b){
      return (a[1] - a[0]) - (b[1] - b[0]);
    });
  
    while(A.length > 0){
      var temp = A.shift();
      count++;
  
      A.filter(function(a, b){
        if(temp[0] <= a[1] && temp[1] >= a[0]){
          A.splice(b, 1);
        }
      });
    }
    return count;
  }