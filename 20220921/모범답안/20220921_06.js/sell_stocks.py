
def solution(prices):
  '''
  :param prices: list
  :return: int
  '''
  difference = []
  sorted_prices = sorted(enumerate(prices), key=lambda t: t[1])

  prev = [0, -1]
  for price in sorted_prices:
    if prev[0] > price[0] :
        difference.append(price[1] - prev[1])
    prev = price
  
  return min(difference)