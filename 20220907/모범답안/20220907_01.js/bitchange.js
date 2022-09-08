function solution(A, B){
    return ((A ^ B).toString(2).match(/1/g).length);
}
  