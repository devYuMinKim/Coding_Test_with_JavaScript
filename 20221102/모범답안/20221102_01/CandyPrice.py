import math


def solution(n, price):
    """
    :param n: int
    :param price: int
    :return: int
    """

    set = math.floor(n / 11)
    each = n % 11

    return (set * price * 10) + (each * price)