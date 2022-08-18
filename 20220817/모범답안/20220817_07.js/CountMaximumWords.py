from functools import reduce


def solution(arr):
    """
    :param arr: str[]
    :return: int
    """

    counts = list(map(lambda s: countWords(s), arr))
    return reduce(lambda pre, cur: max(pre, cur), counts, 0)


def countWords(s):
    return len(s.split(' '))
