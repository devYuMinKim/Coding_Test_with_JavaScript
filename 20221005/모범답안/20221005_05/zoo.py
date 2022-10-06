def solution(note):
  '''
  :param note: list
  :return: string
  '''
  animal_dict = dict()

  for animal in note:
    if animal in animal_dict:
      animal_dict[animal] += 1
    else:
      animal_dict[animal] = 1
  
  animal_list = []
  for k, v in animal_dict.items():
    animal_list.append([k,v])
  animal_list.sort(key=lambda x:(-x[1], x[0]))

  return animal_list[0][0]