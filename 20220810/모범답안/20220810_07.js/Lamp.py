def solution(field, n):
    """
    :param field: int[][]
    :param n: int
    :return: int
    """

    fieldRow = len(field)
    fieldCol = len(field[0])
    rowSize = fieldRow - n + 1
    colSize = fieldCol - n + 1

    result = 0
    for row in range(rowSize):
        for col in range(colSize):
            result = max(result, countPlant(field, n, row, col))

    return result


def countPlant(field, n, row, col):
    plantCount = 0

    for curRow in range(row, row + n):
        for curCol in range(col, col + n):
            plantCount += field[curRow][curCol]

    return plantCount
