def solution(arr, a, b):
    """
    :param arr: int[]
    :param a: int
    :param b: int
    :return: int
    """

    cur_min = None
    for num in arr:
        is_in = a <= num <= b
        is_min = cur_min is None or num < cur_min
        cur_min = num if is_in and is_min else cur_min

    return -1 if cur_min is None else cur_min
