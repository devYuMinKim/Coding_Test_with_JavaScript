function getBuyMethod(P, K)
{
  var count =  new Array(K);
  var result = 0;

  count.fill(0);

  for(var i = 0; i < P.length; i++)
  {
    count[P[i]] += 1
  }

  for(var i = 0; i < K; i++)
  {
    if(count[i] >= 2)
    {
      result = (result + ((count[i] * (count[i] - 1)) / 2));
    }
  }

  return result;

}

function solution(A, K)
{
  var arr = new Array(A.length + 1);
  arr[0] = 0;

  for (var i = 1; i < A.length + 1 ; i++)
  {
    arr[i] = (arr[i - 1] + A[i - 1]) % K;
  }

  return getBuyMethod(arr, K);
}