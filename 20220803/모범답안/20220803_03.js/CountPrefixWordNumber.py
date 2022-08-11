def solution(array, s):
    """
    :param array: string[]
    :param s: string
    :return: int
    """

    result = 0

    for prefix in array:
        if s.find(prefix) == 0:
            result += 1

    return result
