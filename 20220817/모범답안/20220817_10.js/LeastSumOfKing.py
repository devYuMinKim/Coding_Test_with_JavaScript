from functools import reduce


def solution(arr, K):
    """
    :param arr: int[]
    :param K: int
    :return: int
    """

    arr.sort()

    kings = []

    i = 0
    while i < len(arr):
        king = 0

        for sumCount in range(K):
            king = max(king, arr[i])
            i += 1

        kings.append(king)

    return reduce(lambda pre, cur: pre + cur, kings, 0)
