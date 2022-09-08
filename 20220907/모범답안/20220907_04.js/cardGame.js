function solution(A){
    var answer = 0;
    var length = A.length;
  
    A.sort();
  
    while(length > 0){
      if(length % 2 == 1){
        answer += (length * A[A.length - 1]);
        A.pop();
      }else{
        answer += (length * A[0] * -1);
        A.shift();
      }
  
      length -= 1;
    }
  
    return answer;
}  