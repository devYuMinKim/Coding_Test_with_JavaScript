def solution(problems):
  '''
  :param problems: list
  :return: int
  '''
  answer = 0

  for problem in problems:
    if check_problem(problem):
      answer += 1
  
  return answer

def check_problem(pb):

  result = pb[0]
  for i in range(len(pb) - 1):
    if (pb[i] != pb[i+1]):
      result += pb[i+1]

  if len(list(result)) == len(set(result)):
    return True

  return False
