def solution(s):
    """
    :param s: str
    :return: str
    """

    letterMap = dict()

    for c in s:
        letterMap[c] = True

    for i in reversed(range(ord('a'), ord('z') + 1)):
        c = chr(i)
        lowerCase = c.lower()
        upperCase = c.upper()
        if letterMap.get(lowerCase) and letterMap.get(upperCase):
            return upperCase

    return ''
