def solution(n, ab):
    '''
    :param n: int
    :param ab: string
    :return: int
    '''
    dic = {'a': 0, 'b': 0}
    l, a = 0, 0

    for i in ab:
        dic[i] += 1
        if min(dic.values()) > n:
            dic[ab[l]] -= 1
            l += 1
        else:
            a += 1

    return a
