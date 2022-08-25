from itertools import chain


def solution(arr):
    """
    :param arr: str[]
    :return: str[]
    """

    words = list(chain.from_iterable(list(map(lambda s: s.split(' '), arr))))

    mySet = set()
    for word in words:
        mySet.add(word)

    result = list(mySet)
    result.sort()

    return result
