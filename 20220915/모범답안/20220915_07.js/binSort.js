function compare(a, b){
    var aValue = a == 0 ? a : a.toString(2).match(/1/gi).length;
    var bValue = b == 0 ? b : b.toString(2).match(/1/gi).length;
  
    if(aValue == bValue){
      return a - b;
    }else{
      return aValue - bValue;
    }
  }
  
  
  function solution(A){
    return A.sort(compare);
  }
  