def solution(N, dices):
  '''
  :param N: list
  :param dices: list
  :return: str
  '''
  zero_win = 0
  base_win = 0

  for dice in dices:
    if dice[0] == dice[1]:
      pass
    elif dice[0] > dice[1]:
      zero_win += 1
    else:
      base_win += 1
  
  if zero_win == base_win:
    return 'draw'
  elif zero_win > base_win:
    return 'zero'
  else:
    return 'base'
