function solution(A, R)
{
  var result = "";

  A.sort(function(a, b) {
    return b - a;
  });

  result += A.splice(R/A.length, 1);
  result += A[R%A.length == 0 ? A.length -1 : R%A.length - 1];

  return result;
}
