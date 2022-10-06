def solution(matrix):
    """
    :param matrix: boolean[][]
    :return: boolean
    """

    n = len(matrix)
    for i in range(n):
        for j in range(n):
            if ((i == 0 and j == n - 1) or (j == 0 and i == n - 1)) and not matrix[i][j]:
                return False

    return True
