def solution(message):
    """
    :param message: string
    :return: int
    """
    answer = [1, 1]
    prev = -1

    for i in message:
        if i == prev and (i == 'n' or i == 'u'):
            answer.append((answer[-1] + answer[-2]))
        else:
            answer.append(answer[-1])
        prev = i

    return answer[-1]
