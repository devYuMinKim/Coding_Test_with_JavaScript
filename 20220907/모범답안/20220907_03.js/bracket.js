function solution(S)
{
  var stack = [];
  var map = new Map();

  map.set(")", '(');
  map.set("}",'{');
  map.set(">", '<');
  map.set("]",'[');

  for (var i = 0; i < S.length; i++)
  {
    if("({<[".includes(S[i]))
    {
      stack.push(S[i]);
    }
    else if("})]>".includes(S[i]))
    {
      if(stack.length > 0 )
      {
        var top = stack.pop();
        if(map.get(S[i]) != top)
        {
          return 0
        }
      }
      else
      {
          return 0;
      }
    }
  }
  if(stack.length == 0)
  {
    return 1;
  }
  else
  {
    return 0;
  }

}