function search(arr, Countries, Country, count)
{

  for(var i = 0; i < Country.length; i++)
  {
    if(Country[i] == 1 && arr[i] == 0)
    {
      arr[i] = 1;
      count += 1;
      count = search(arr, Countries, Countries[i], count);
    }
  }

  return count;
}

function solution(A)
{
  var count = 0;
  var result = 0;
  var arr = new Array(A.length);

  arr.fill(0);

  for(var i = 0; i < A.length; i++)
  {
    if(arr[i] == 0)
    {
      count = 1;
      arr[i] = 1

      count = search(arr, A, A[i], count);

      if(count > result)
      {
        result = count;
      }
    }
  }

  return result;
}
