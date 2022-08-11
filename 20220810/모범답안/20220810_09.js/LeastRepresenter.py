from functools import reduce


def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    arr.sort()

    representers = []
    for i in range(int(len(arr) / 2)):
        curMinIndex = i * 2
        representers.append(max(arr[curMinIndex], arr[curMinIndex + 1]))
    return reduce(lambda pre, cur: pre + cur, representers, 0)
