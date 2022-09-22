def solution(N, K):
    '''
    :param N: int
    :param K: int
    :return: list
    '''
    if K == 0: 
        return [i for i in range(1, N+1)]
    if N % (2*K) != 0:
        return [-1]

    result = [None]*(N+1)
    for i in range(1, N+1):
        if result[i] is None:
            result[i] = i+K
            result[i+K] = i
            
    return result[1:]
