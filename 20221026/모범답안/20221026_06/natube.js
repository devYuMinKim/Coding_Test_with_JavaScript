Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

function solution(A, B){
  var name = new Map();
  var category = new Map();
  var recommend = new Set();

  for(var i = 0; i < A.length; i++){
    if(Array.from(category.keys()).indexOf(A[i][0]) != -1){
      var temp = category.get(A[[i]][0]);
      temp.push(A[i][1]);
      category.set(A[i][0], temp);
    }else{
      category.set(A[i][0], [A[i][1]]);
    }


    if(Array.from(name.keys()).indexOf(A[i][1]) != -1){
      var temp = name.get(A[[i]][1]);
      temp.push(A[i][0]);
      name.set(A[i][1], temp);
    }else{
      name.set(A[i][1], [A[i][0]]);
    };
  }

  for(var i = 0; i < B.length; i++){
    for(var j = 0; j < name.get(B[i]).length; j++){
      recommend = recommend.union(new Set(category.get(name.get(B[i])[j])));
    }
  }

  return recommend.size;
}