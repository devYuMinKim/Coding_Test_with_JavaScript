def solution(arr, prefix, separator, postfix):
    """
    :param arr: int[]
    :param prefix: string
    :param separator: postfix
    :param postfix: postfix
    :return: postfix
    """

    result = ''

    if prefix is not None:
        result += prefix

    for i, val in enumerate(arr):
        if i > 0:
            result += separator

        result += str(val)

    if postfix is not None:
        result += postfix

    return result
