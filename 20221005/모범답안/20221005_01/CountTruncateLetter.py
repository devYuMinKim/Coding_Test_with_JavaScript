def solution(s):
    """
    :param s: str
    :return: int
    """

    words = s.split(' ')
    mySet = set()
    for word in words:
        mySet.add(word)

    return len(mySet)
