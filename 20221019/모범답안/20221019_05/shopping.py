def solution(money, cost):
  '''
  :param money: int
  :param cost: list
  :return: list
  '''
  price_dict = dict()
  for i in cost:
      if (money - i) in price_dict:
        return sorted([price_dict[money - i], i])
      else:
          price_dict[i] = i
