function solution(A)
{
  var moneys  = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1]
  var changes = 0

  for (var i = 0; i < moneys.length; i++)
  {
    changes += parseInt(A / moneys[i]);
    A %= moneys[i];
  }

  return changes;
}
