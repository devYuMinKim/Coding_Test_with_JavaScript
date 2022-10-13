def solution(arr, t):
    """
    :param arr: int[]
    :param t: int
    :return: int
    """

    result = 0

    for num in arr:
        result += num * t + t

    return result
