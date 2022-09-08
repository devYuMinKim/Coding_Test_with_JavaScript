import numpy


def solution(p, s):
    """
    :param p: str
    :param s: str[]
    :return: int
    """

    matchedCount = 0
    for i in range(len(s)):
        matchedCount += 1 if isMatched(p, s[i]) else 0

    return matchedCount


def isMatched(p, t):
    pSize = len(p)
    tSize = len(t)
    dp = numpy.full(shape=(pSize + 1, tSize + 1), fill_value=-1)

    return recursiveIsMatched(p, 0, t, 0, dp)


def recursiveIsMatched(p, pIndex, t, tIndex, dp):
    # 기저사례
    if pIndex == len(p):
        return tIndex == len(t)

    if dp[pIndex][tIndex] != -1:
        return dp[pIndex][tIndex]

    pattern = p[pIndex:pIndex + 1]
    text = t[tIndex:tIndex + 1]

    # 패턴과 텍스트가 일치하거나, "?" 패턴의 경우 다음 글자를 비교한다.
    if pIndex < len(p) and tIndex < len(t) and (pattern == '?' or pattern == text):
        if recursiveIsMatched(p, pIndex + 1, t, tIndex + 1, dp):
            dp[pIndex][tIndex] = 1
            return True

    # "*" 패턴의 경우
    # 한글자 이상 매칭되는 케이스로, 다음 텍스트와 비교하거나
    # 한글자도 매칭되지 않는 케이스로, 다음 패턴과 비교한다.
    if pattern == '*':
        if recursiveIsMatched(p, pIndex + 1, t, tIndex, dp) or (
                tIndex < len(t) and recursiveIsMatched(p, pIndex, t, tIndex + 1, dp)):
            dp[pIndex][tIndex] = 1
            return True

    # 매칭되지 않은 경우
    dp[pIndex][tIndex] = 0
    return False
