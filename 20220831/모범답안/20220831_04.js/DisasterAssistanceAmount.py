import math
from functools import reduce


def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    arr.sort()

    # 최소, 최대값 제거
    arr = arr[1:-1]

    average = reduce(lambda pre, cur: pre + cur, arr, 0) / len(arr)
    return math.floor(average)
