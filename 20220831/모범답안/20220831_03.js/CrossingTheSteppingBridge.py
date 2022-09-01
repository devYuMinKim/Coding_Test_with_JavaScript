def solution(bridge, jumpSize):
    """
    :param bridge: int[]
    :param jumpSize: int
    :return: boolean
    """

    lastStoneIndex = 0
    for i in range(len(bridge)):
        if bridge[i] == 1:
            distance = i - lastStoneIndex - 1
            if distance > jumpSize: return False
            lastStoneIndex = i

    return True
