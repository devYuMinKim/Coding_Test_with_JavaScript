def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    result = 0
    continuedOneCount = 0
    for binary in arr:
        if (binary == 1):
            continuedOneCount += 1
            result = max(result, continuedOneCount)
        else:
            continuedOneCount = 0
    return result
