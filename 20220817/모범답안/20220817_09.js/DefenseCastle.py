import math


def solution(distance, time):
    """
    :param distance: int[]
    :param time: int[]
    :return: int
    """

    enemy = []

    for i in range(len(distance)):
        enemy.append(math.floor(distance[i] / time[i]))

    enemy.sort()

    curTime = 0
    shield = 0
    for enemyArrivalTime in enemy:
        # 현재까지 아군 생성
        if curTime < enemyArrivalTime:
            shield += enemyArrivalTime - curTime

        # 현재 적이 공격
        shield -= 1

        # 적군보다 아군이 적을 경우 -1 반환
        if shield < 0:
            return -1

        # 현재 시간 설정
        curTime = enemyArrivalTime

    return shield