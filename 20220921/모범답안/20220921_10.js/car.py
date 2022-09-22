def solution(cars, clients):
    '''
    :param cars: list
    :param clients: list
    :return: int
    '''
    answer = 0
    n = len(clients)
    cars.sort()
    bought_clients = [False] * n

    for car in cars:
        x, y = car
        eligible_clients = [(clients[i][1], i) for i in range(n) if (not bought_clients[i]) and clients[i][0] < x and clients[i][1] >= y]
        
        if len(eligible_clients):
            p, j = min(eligible_clients)
            bought_clients[j] = True
            answer += 1

    return answer
