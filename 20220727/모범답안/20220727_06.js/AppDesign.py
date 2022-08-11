import math


def solution(area):
    """
    :param area: int
    :return: int[]
    """

    w = math.floor(math.sqrt(area))
    while area % w != 0: w -= 1
    return [w, area / w]
