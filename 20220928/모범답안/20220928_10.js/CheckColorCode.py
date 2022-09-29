def solution(s):
    """
    :param s: str
    :return: boolean
    """

    if len(s) != 6:
        return False

    COLOR_CODE_ELEMENTS = 'ABCDEF0123456789'

    for element in s:
        if COLOR_CODE_ELEMENTS.find(element) < 0:
            return False

    return True
