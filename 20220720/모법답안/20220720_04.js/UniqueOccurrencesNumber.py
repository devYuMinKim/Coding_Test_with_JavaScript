def solution(arr):
    """
    :param arr: int[]
    :return: boolean
    """

    myMap = dict()

    for num in arr:
        myMap.setdefault(num, 0)
        myMap[num] += 1

    mySet = set(myMap.values())
    return len(mySet) == len(myMap.values())
