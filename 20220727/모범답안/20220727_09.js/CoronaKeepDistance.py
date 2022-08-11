def solution(lineUp, level):
    """
    :param lineUp: int[]
    :param level: int
    :return: boolean
    """

    distanceSoFar = 9999
    for num in lineUp:
        if num == 1:
            if distanceSoFar < level: return False
            distanceSoFar = 0
        elif num == 0:
            distanceSoFar += 1

    return True
