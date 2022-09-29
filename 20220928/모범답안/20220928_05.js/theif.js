function solution(A, K)
{
  var a = A.sort();
  var temp = 0;
  var count = 0;

  for(; count < a.length; count ++)
  {
    temp += a[count];

    if (temp > K)
    {
      break;
    }
  }

  return count;
}
