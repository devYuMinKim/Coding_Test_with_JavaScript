def solution(finish, submit):
  '''
  :param finish: list
  :param submit: list
  :return: int
  '''

  return len(set(finish) & set(submit))
