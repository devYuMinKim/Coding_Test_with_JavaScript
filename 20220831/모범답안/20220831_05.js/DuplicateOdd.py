def solution(arr):
    """
    :param arr: int[]
    :return: int[]
    """

    result = []

    i = 0
    while len(result) < len(arr):
        element = arr[i]
        result.append(element)
        if element % 2 == 1 and len(result) < len(arr):
            result.append(element)

        i += 1

    return result
