def solution(fruits):
    """
    :param fruits: int[]
    :return: int
    """

    n = len(fruits)

    # n번째 까지의 나무에서 얻을 수 있는 최고 점수
    dp = []
    dp.insert(0, fruits[0])

    # 현재까지 최고 점수
    curMax = dp[0]

    for i in range(1, n):
        dp.insert(i, fruits[i] + (dp[i - 1] if dp[i - 1] > 0 else 0))
        curMax = max(curMax, dp[i])

    return curMax
