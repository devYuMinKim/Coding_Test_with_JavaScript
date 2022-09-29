def solution(array, s):
    """
    :param array: string[]
    :param s: string
    :return: int
    """

    result = 0

    for postfix in array:
        subPostText = s[len(s) - len(postfix):len(s)]
        if subPostText == postfix:
            result += 1

    return result
