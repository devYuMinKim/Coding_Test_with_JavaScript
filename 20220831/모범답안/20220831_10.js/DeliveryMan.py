def solution(h, w, areaText):
    """
    :param h: int
    :param w: int
    :param areaText: str
    :return: int
    """

    area = makeArea(h, w, areaText)
    if area == None:
        return 0

    return countDeliveryCase(area)


deliveryType = [
    [[0, 0], [0, 1], [0, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 0], [0, 1], [1, 0]],
    [[0, 0], [0, 1], [1, 1]],
    [[0, 0], [1, 0], [1, 1]],
    [[0, 0], [1, 0], [1, -1]],
]


def makeArea(h, w, areaText):
    # area 배열 생성
    area = []

    deliveryAvailableNum = 0
    for i in range(h):
        # area 이중 배열 생성
        area.insert(i, [])

        # area 값 설정
        for j in range(w):
            index = (w * i) + j
            token = areaText[index]
            value = 0 if token == '.' else 1
            area[i].append(value)

            if token == '.':
                deliveryAvailableNum += 1

    isResolvable = deliveryAvailableNum % 3 == 0
    return area if isResolvable else None


def countDeliveryCase(area):
    # 아직 배송구역이 설정되지 않은 좌측 상단의 좌표를 구한다.
    leastLeftY = -1
    leastLeftX = -1
    for y in range(len(area)):
        for x in range(len(area[0])):
            if area[y][x] == 0:
                leastLeftY = y
                leastLeftX = x
                break
        if leastLeftY != -1:
            break

    # 기저사례 : 모든 단지에 배송구역이 설정된 경우
    if leastLeftY == -1:
        return 1

    result = 0
    for typeIndex in range(len(deliveryType)):
        # 배송구역을 설정한다.
        if setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, 1):
            # 설정한 배송구역이 유효하면 재귀호출 한다.
            result += countDeliveryCase(area)

        # 설정한 배송 구역을 해제한다.
        setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, -1)

    return result


def setDeliveryCase(area, y, x, type, action):
    available = True

    for i in range(len(deliveryType[0])):
        newY = y + deliveryType[type][i][0]
        newX = x + deliveryType[type][i][1]

        isOutOfRange = newY < 0 or newY >= len(area) or newX < 0 or newX >= len(area[0])
        if isOutOfRange:
            available = False
        else:
            area[newY][newX] += action
            isDuplicated = area[newY][newX] > 1
            if isDuplicated:
                available = False

    return available
