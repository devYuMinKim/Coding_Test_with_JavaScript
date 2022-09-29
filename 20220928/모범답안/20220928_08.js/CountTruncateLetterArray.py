from itertools import chain


def solution(arr):
    """
    :param arr: str[]
    :return: int
    """

    words = list(chain.from_iterable(list(map(lambda s: s.split(' '), arr))))

    mySet = set()
    for word in words:
        mySet.add(word)

    return len(mySet)
