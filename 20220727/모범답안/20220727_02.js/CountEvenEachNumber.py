import math


def solution(n):
    """
    :param n: number
    :return: number
    """

    result = 0

    while (1 <= n):
        i = math.floor(n % 10)
        result += 1 if i % 2 == 0 else 0

        n /= 10

    return result
