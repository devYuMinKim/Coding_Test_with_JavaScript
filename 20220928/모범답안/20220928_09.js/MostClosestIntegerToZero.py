def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    result = None
    for num in arr:
        if result == None or abs(num) < abs(result):
            result = num
        elif abs(num) == abs(result) and num < result:
            result = num

    return result
