def solution(n):
    '''
    :param n: int
    :return: int
    '''

    if n == 1:
        return 10

    ans = 1

    for i in range(n // 2):
        ans = (ans * (9 if i == 0 else 10))
        ans %= 1_000_000_007
    
    if n % 2 == 1:
        ans = (ans * 10) % 1_000_000_007
    
    return ans
