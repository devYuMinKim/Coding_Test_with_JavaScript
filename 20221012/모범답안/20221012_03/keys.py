def solution(keys, doors):
  '''
  :param keys: str
  :param doors: str
  :return: str
  '''
  keys = list(keys)
  doors = list(doors)
  
  while keys:
    if keys.pop(-1).upper() != doors.pop(0):
      return 'NO'
  
  return 'YES'
