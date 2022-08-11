function countDigit(number, d, k){
    var power = 10 ** d;
    var nextPower = power * 10;
    var right = number % power;
  
    var down = number - parseInt(number % nextPower);
    var up = down + nextPower;
  
    digit = parseInt(number / power) % 10;
  
    if(digit < k){
      return parseInt(down / 10);
    } else if(digit == k){
      return parseInt(down / 10) + right + 1;
    } else{
      return parseInt(up / 10);
    }
  }
  
  function solution(N, K){
    var count = 0;
  
    for(var i = 0; i < N.toString().length; i++){
      count += countDigit(N, i, K);
    }
  
    return count;
}  