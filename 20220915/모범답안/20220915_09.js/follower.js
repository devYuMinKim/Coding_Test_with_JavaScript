function solution(friends)
{
  var map = new Map();
  var result = 0;
  var target = [];

  for (var i = 0; i < friends.length; i++)
  {
    target = map.get(friends[i][1]);
    if (target == undefined || target.indexOf(friends[i][0]) == -1)
    {
      target = target == undefined ? [friends[i][1]] : target.push(friends[i][1]);
      map.set(friends[i][0], target);
    }
    else
    {
      result ++;
    }
  }

  return result;
}