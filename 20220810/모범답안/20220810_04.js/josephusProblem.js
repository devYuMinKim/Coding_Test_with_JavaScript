function solution(N, K){
    var  arr = new Array(N);
    var number = 0;
  
    for(var i = 0; i < N; i++){
      arr[i] = i + 1;
    }
  
    for(var i = 0; i < N - 1; i++){
      number += (K - 1);
      number %= arr.length;
  
      arr.splice(number, 1);
    }
  
    return arr[0];
  }