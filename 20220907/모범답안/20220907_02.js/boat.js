function solution(people, limit)
{
  var answer = 0;
  var index = people.length - 1;

  people.sort(function(a, b)
  {
    return a - b;
  })

  while(people.length != 0)
  {

    var temp = people.pop();

    for(var i = people.length - 1; i >= 0; i--)
    {
      if(limit >= temp + people[i])
      {
        people.splice(i, 1);
        break;
      }
    }

    answer++;
  }

  return answer;
}