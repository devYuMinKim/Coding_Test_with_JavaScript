import numpy


def solution(h, w):
    """
    :param h: int
    :param w: int
    :return: int
    """

    # h x w 크기의 배열에, 해당 지점까지 갈 수 있는 경우의 수를 저장
    dp = numpy.ones(shape=(h, w))

    # dp[i][j] 까지 갈 수 있는 경우의 수는,
    # dp[i][j]의 좌측과 상단까지 갈 수 있는 경우의 수를 더한 것과 같다.
    for i in range(1, h):
        for j in range(1, w):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    return dp[h - 1][w - 1]
