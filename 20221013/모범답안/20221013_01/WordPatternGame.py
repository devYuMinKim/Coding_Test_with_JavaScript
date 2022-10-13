def solution(p, s):
    """
    :param p: str
    :param s: str
    :return: boolean
    """

    words = s.split(' ')
    map = {}

    if len(words) != len(p): return False
    if len(set(words)) != len(set(p)): return False

    for i in range(len(p)):
        if (p[i] in map) and map[p[i]] != words[i]: return False
        map[p[i]] = words[i]

    return True
