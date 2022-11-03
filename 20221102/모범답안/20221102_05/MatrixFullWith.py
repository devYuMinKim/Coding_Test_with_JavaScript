def solution(matrix, b):
    """
    :param matrix: boolean[][]
    :param b: boolean
    :return: boolean
    """

    n = len(matrix)
    for i in range(n):
        for j in range(n):
            if matrix[i][j] != b:
                return False

    return True
