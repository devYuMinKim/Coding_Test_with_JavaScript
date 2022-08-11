def solution(array):
    """
    :param array: int[]
    :return: int
    """

    mySet = set()

    for i in range(len(array)):
        for j in range(len(array)):
            if i == j:
                continue

            num = createNumber(array[i], array[j])
            isEven = num % 2 == 1
            if isEven:
                mySet.add(num)

    return len(mySet)


def createNumber(tenDigits, oneDigit):
    return tenDigits * 10 + oneDigit
