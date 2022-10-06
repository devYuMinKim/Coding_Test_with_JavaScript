import math


def solution(arr, fee):
    """
    :param arr: int[]
    :param fee: int
    :return: int
    """

    result = 0

    for num in arr:
        result += getNumWithApplyEvent(num) * fee

    return result


def getNumWithApplyEvent(num):
    return num - math.floor(num / 5)
