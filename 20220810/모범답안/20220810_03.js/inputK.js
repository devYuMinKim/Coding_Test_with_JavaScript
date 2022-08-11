function solution(N, K){
    var arr = N.toString().split("");
    var insert = 0;
  
    if(N >= 0){
      for(var i = 0; i < arr.length; i++){
        if(Number(arr[i]) <= K){
          arr.splice(i, 0, K.toString());
          insert = 1;
          break;
        }
      }
    } else{
      for(var i = 1; i < arr.length; i++){
        if(Number(arr[i]) > K){
          arr.splice(i, 0, K.toString());
          insert = 1;
          break;
        }
      }
  
    }
  
    if(insert == 0){
      arr.push(K.toString());
    }
  
    return Number(arr.join(""));
  }