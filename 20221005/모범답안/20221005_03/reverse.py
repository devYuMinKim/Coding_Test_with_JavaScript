def solution(S):
  '''
  :param S: string
  :return: string
  '''
  result = ''
  left = -1
  right = -1

  # left에 처음으로 찾은 X의 위치
  # right에 마지막으로 찾은 Y의 위치
  for idx, ch in enumerate(S):
    if ch == 'X' and left == -1:
      left = idx
    if ch == 'Y':
      right = idx

  # 둘 중 하나라도 못찾았을 경우 원래의 문자열 반환
  if left == -1 or right == -1:
    result = S
  else:
    # [::-1]을 통하여 문자열 뒤집기
    result = S[:left] + S[left:right+1:][::-1] + S[right+1:]

  return result

print(solution("oooooX"))