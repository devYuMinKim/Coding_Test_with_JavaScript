function solution(A, S){
    var zombie = [S];
    var member = new Set();
    var touch = new Map();
    var retValue = [];
  
    member.add(S);
  
    for(var i = 0; i < A.length; i++){
      member.add(A[i][0]);
      member.add(A[i][1]);
  
      if(zombie.indexOf(A[i][0]) != -1){
        zombie.push(A[i][1]);
      } else if(zombie.indexOf(A[i][1]) != -1){
        zombie.push(A[i][0]);
      } else{
  
        if(Array.from(touch.keys()).indexOf(A[i][0]) != -1){
          touch.set(A[i][0], touch.get(A[i][0])+1)
        } else{
          touch.set(A[i][0], 1);
        }
  
        if(Array.from(touch.keys()).indexOf(A[i][1]) != -1){
          touch.set(A[i][1], touch.get(A[i][1])+1)
        } else{
          touch.set(A[i][1], 1);
        }
      }
    }
    if(member.size == zombie.length){
      return [S];
    } else{
      for(var i = 0; i < zombie.length; i++){
        if(Array.from(touch.keys()).indexOf(zombie[i]) != -1)
        {
          touch.set(zombie[i], -1);
        }
      }
  
      var maxValue = Math.max.apply(null, Array.from(touch.values()));
      var key = Array.from(touch.keys());
  
      for(var i = 0; i < key.length; i++){
        if(touch.get(key[i]) == maxValue){
          retValue.push(key[i]);
        }
      }
      retValue.sort();
  
      return retValue;
    }
  }