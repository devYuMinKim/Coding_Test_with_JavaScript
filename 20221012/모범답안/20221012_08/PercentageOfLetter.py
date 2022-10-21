import math


def solution(text, s):
    """
    :param text: string
    :param s: string
    :return: int
    """

    appearCount = 0

    for c in text:
        if c == s:
            appearCount += 1

    return math.floor(appearCount / len(text) * 100)
