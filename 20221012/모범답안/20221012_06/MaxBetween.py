def solution(arr, a, b):
    """
    :param arr: int[]
    :param a: int
    :param b: int
    :return: int
    """

    cur_max = None
    for num in arr:
        is_in = a <= num <= b
        is_max = cur_max is None or cur_max < num
        cur_max = num if is_in and is_max else cur_max

    return -1 if cur_max is None else cur_max
