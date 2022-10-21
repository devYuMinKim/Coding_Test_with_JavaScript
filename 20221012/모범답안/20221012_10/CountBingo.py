def solution(board):
    """
    :param board: boolean[][]
    :return: int
    """

    n = len(board)
    widthBingo = [True] * n
    highBingo = [True] * n

    for y in range(n):
        for x in range(n):
            if not board[y][x]:
                widthBingo[x] = False
                highBingo[y] = False

    bingoNum = 0
    for i in range(n):
        if widthBingo[i]:
            bingoNum += 1
        if highBingo[i]:
            bingoNum += 1

    return bingoNum
