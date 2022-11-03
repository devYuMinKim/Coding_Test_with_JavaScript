def solution(stocks):
    '''
    :param stocks: list
    :return: int
    '''
    answer = 0
    diff = 0

    init_sum = sum(stocks)
    n = len(stocks)

    for i in range(1, n):
        if (stocks[i] > stocks[i - 1]):
            d = stocks[i] - stocks[i - 1]
            answer += d
            diff += (n - i) * d
        else:
            d = stocks[i - 1] - stocks[i]
            answer += d
            diff += i * d
    
    final_sum = init_sum - diff
    fin = final_sum // n
    answer += fin if fin >= 0 else -fin
    
    return answer
