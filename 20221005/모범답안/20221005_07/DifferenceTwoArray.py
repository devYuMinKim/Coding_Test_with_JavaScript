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

    difference = []
    difference.extend(getDiff(arr1, intersection))
    difference.extend(getDiff(arr2, intersection))

    difference.sort()

    return difference


def getDiff(arr, ignore):
    result = []

    for i in range(len(arr)):
        isIntersection = False
        for j in range(len(ignore)):
            if arr[i] == ignore[j]:
                isIntersection = True
        if not isIntersection:
            result.append(arr[i])

    return result
