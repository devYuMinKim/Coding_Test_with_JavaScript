import math


def solution(l):
    """
    :param l: int[]
    :return: int
    """

    return calcMaxArea(l, 0, len(l) - 1)


def calcMaxArea(l, left, right):
    # 기저사례 : 나무판자가 하나인 경우
    if left == right:
        return l[left]

    # 중간 지점 구한다.
    mid = math.floor((left + right) / 2)

    # 중간지점을 기준으로 좌/우의 최대 넓이를 구한다
    leftMaxArea = calcMaxArea(l, left, mid)
    rightMaxArea = calcMaxArea(l, mid + 1, right)

    low = mid
    high = mid + 1
    curMinLength = min(l[low], l[high])
    curMaxArea = curMinLength * 2

    # 좌/우로 한칸씩 이동하며 최대 넓이를 구한다.
    while (left < low) or (high < right):
        # 나무판자의 길이가 긴 방향으로 한칸씩 이동한다.
        if (left < low) and ((high == right) or (l[low - 1] > l[high + 1])):
            low -= 1
            curMinLength = min(curMinLength, l[low])
        else:
            high += 1
            curMinLength = min(curMinLength, l[high])

        curWidth = high - low + 1
        curMaxArea = max(curMaxArea, curMinLength * curWidth)

    # 각 넓이중 최대 넓이를 반환한다.
    return max(leftMaxArea, rightMaxArea, curMaxArea)
