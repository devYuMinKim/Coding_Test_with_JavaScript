

function solution(S){
    var arr = S.split("");
    var numbers = S.match(/\d+/gi);
    var operators = S.match(/[+\-*/]/gi);
  
    var temp = parseFloat(numbers[0]);
    var result = 0;
  
    for(var i = 0; i < operators.length; i++){
      switch (operators[i]) {
        case '*':
          temp *= parseFloat(numbers[i+1]);
          break;
        case '/':
          temp /= parseFloat(numbers[i+1]);
          break;
        case '+':
          result += temp;
          temp = 0;
          temp += parseFloat(numbers[i+1]);
          break;
        case '-':
          result += temp;
          temp = 0;
          temp -= parseFloat(numbers[i+1]);
          break;
      }
    }
  
    result += temp;
  
    return result.toFixed(2);
  }