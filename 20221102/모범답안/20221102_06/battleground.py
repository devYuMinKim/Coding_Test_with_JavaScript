def solution(n, stat1, stat2):
    '''
    :param n: int
    :param stat1: list
    :param stat2: list
    :return: string
    '''
    x = [(int(i[1]), i[0]) for i in enumerate(stat1)]
    y = [(int(i[1]), i[0]) for i in enumerate(stat2)]
    x = sorted(x, reverse=True)
    y = sorted(y, reverse=True)

    q = set()
    for i in range(n):
        q.add(x[i][1])
        q.add(y[i][1])
        if len(q) == i + 1:
            break

    answer = ['0'] * n
    for i in q:
        answer[i] = '1'
        
    return ''.join(answer)
