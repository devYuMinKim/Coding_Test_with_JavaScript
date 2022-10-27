def solution(array):
    """
    :param array: int[]
    :return: string[]
    """

    IN = 'In'
    OUT = 'Out'
    END = 'End'

    result = []

    for num in range(1, 101):
        if not array:
            break

        hasNumber = array[0] == num
        if hasNumber:
            array.pop(0)
            result.append(IN)
        else:
            result.append(IN)
            result.append(OUT)

    result.append(END)
    return result
