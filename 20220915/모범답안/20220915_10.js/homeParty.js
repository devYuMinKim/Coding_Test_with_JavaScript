function search(edible, caneat, eater, chosen, best)
{
  if (best <= chosen)
      return best
  var first = 0
  while (first < edible.length && 0 < edible[first])
  {
    first += 1;
  }
  if (first == edible.length)
  {
    best = Math.min(best,chosen);
    return best;
  }

  for (var i in caneat[first])
  {
    var food=caneat[first][i];
    for (var j in eater[food])
    {
        edible[eater[food][j]]+=1
    }
    best =  search(edible, caneat, eater, chosen+1, best)
    //console.log("2 ," + best);
    for (var j in eater[food])
    {
      edible[eater[food][j]]-=1
    }
  }

    return best
}

function solution(Friends, Taste)
{
  var best    = Taste.length;

  var edible  = new Array(Friends.length);
  var caneat  = new Array(Friends.length);
  var eater   = new Array(Taste.length);

  var dict    = new Map();

  edible.fill(0);
  eater.fill([]);

  for(var i = 0; i < caneat.length; i++){
    caneat[i] = [];
  }

  for(var i = 0; i <eater.length; i++){
    eater[i] = [];
  }

  for (var i = 0; i < Friends.length; i++)
  {
    dict.set(Friends[i], i);
  }

  for (var i = 0; i < Taste.length; i++)
  {
    for (var j = 0; j < Taste[i].length; j++)
    {
      caneat[dict.get(Taste[i][j])].push(i);
      eater[i].push(dict.get(Taste[i][j]));
    }
  }

  return search(edible, caneat, eater, 0, best)
}