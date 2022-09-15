def solution(n):
    """
    :param n: int
    :return: int
    """

    for i in range(1000):
        if pow(i, 3) > n:
            return pow(i - 1, 3)
