def solution(n, k):
    """
    :param n: int
    :param k: int
    :return: int
    """

    MOD = 1_000_000_007

    dp = [[]] * (n + 1)
    for i in range(n + 1):
        dp[i] = [0] * (k + 1)

    dp[0][0] = 1

    for i in range(1, n + 1):
        for j in range(1, min(k + 1, i + 1)):
            dp[i][j] = 0
            for z in range(k + 1):
                if z != j:
                    dp[i][j] += dp[i - j][z]
                    dp[i][j] %= MOD

    result = 0
    for i in range(k + 1):
        result += dp[n][i]
        result %= MOD

    return result
