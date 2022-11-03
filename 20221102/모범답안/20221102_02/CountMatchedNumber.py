def solution(s, n):
    """
    :param s: string
    :param n: int
    :return: int
    """

    count = 0

    for num in s:
        if n == int(num):
            count += 1

    return count
