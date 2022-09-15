def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    arr.sort(reverse=True)

    for i in range(len(arr) - 2):
        if isTriangleable(arr[i], arr[i + 1], arr[i + 2]): return arr[i] + arr[i + 1] + arr[i + 2]

    return 0


def isTriangleable(long, mid, short):
    return long < mid + short
