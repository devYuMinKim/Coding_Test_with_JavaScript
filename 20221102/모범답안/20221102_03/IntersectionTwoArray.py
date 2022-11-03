def solution(arr1, arr2):
    """
    :param arr1: int[]
    :param arr2: int[]
    :return: int[]
    """

    intersection = []

    for i in range(len(arr1)):
        for j in range(len(arr2)):
            if arr1[i] == arr2[j]:
                intersection.append(arr1[i])

    intersection.sort()
    return intersection
