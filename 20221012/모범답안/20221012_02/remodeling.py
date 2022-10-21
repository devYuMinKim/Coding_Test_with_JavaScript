def solution(now, tobe):
  '''
  :param now: list
  :param tobe: list
  :return: int
  '''
  answer = 0

  for i, j in zip(now, tobe):
      if i < j:
          answer += j-i
      elif i > j:
          answer += j+i
  
  return answer