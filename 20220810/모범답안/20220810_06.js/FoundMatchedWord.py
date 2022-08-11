def solution(puzzle, word):
    """
    :param puzzle: str[][]
    :param word: str
    :return: boolean
    """

    for x in range(SIZE):
        for y in range(SIZE):
            if move(puzzle, word, x, y, 0): return True

    return False


SIZE = 4
DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
]


def move(puzzle, word, x, y, moveIndex):
    if puzzle[x][y] != word[moveIndex]: return False
    if moveIndex == len(word) - 1: return True

    puzzle[x][y] = 'x'

    for [dx, dy] in DIRECTIONS:
        dirX = x + dx
        dirY = y + dy
        if 0 <= dirX and dirX < SIZE and 0 <= dirY and dirY < SIZE:
            if move(puzzle, word, dirX, dirY, moveIndex + 1): return True

    return False
