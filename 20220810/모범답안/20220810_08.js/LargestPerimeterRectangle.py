def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    arr.sort(reverse=True)

    for i in range(len(arr) - 3):
        if isRectangleable(arr[i], arr[i + 1], arr[i + 2], arr[i + 3]):
            return arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3]

    return 0


def isRectangleable(longest, long, short, shortest):
    return longest < long + short + shortest
