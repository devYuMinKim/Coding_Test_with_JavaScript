function solution(S1, S2)
{
  S1 = S1 + S1;

  if (S1.includes(S2) == true){
    return 1;
  }
  else{
    return 0;
  }
}