from functools import reduce


def solution(usageArr, fee):
    """
    :param usageArr: int[]
    :param fee: int
    :return: int
    """

    totalUsage = reduce(lambda pre, cur: pre + cur, usageArr, 0)
    return totalUsage * fee
