def solution(array, p):
    """
    :param array: int[]
    :param p: string
    :return: int
    """

    result = 0

    for i in range(len(array)):
        s = array[i]
        if s.find(p) == 0:
            result += 1

    return result
