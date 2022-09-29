function solution(A) {
    var arr = [A[0]];
  
    while(arr.length != A.length){
      arr.push([]);
  
      for(var i = 0; i < arr.length; i++){
        if(i == 0){
          arr[arr.length-1].push(A[arr.length-1][0] + arr[arr.length-2][0]);
        } else if(i == arr.length-1){
          arr[arr.length-1].push(A[arr.length-1][arr.length-1] + arr[arr.length-2][arr.length-2]);
        } else{
          arr[arr.length-1].push(A[arr.length-1][arr[arr.length-1].length]+Math.min(arr[arr.length-2][arr[arr.length-1].length], arr[arr.length-2][arr[arr.length-1].length-1]));
        }
      }
    }
      return Math.min.apply(null, arr[arr.length-1]);
}
  