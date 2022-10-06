def solution(arr1, arr2):
    """
    :param arr1: int[]
    :param arr2: int[]
    :return: int[]
    """

    mySet = set()

    for num1 in arr1:
        for num2 in arr2:
            if num1 == num2:
                mySet.add(num1)

    result = list(mySet)
    result.sort()

    return result
