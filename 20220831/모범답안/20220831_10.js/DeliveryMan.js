/**
 * @param h {number}
 * @param w {number}
 * @param areaText {string}
 * @return {number}
 */
function solution(h, w, areaText) {
  const area = makeArea(h, w, areaText);
  if (area === null) {
    return 0;
  }

  return countDeliveryCase(area);
}

const makeArea = function (h, w, areaText) {
  // area 배열 생성
  const area = [];

  let deliveryAvailableNum = 0;
  for (let i = 0; i < h; i++) {
    // area 이중 배열 생성
    area[i] = [];

    // area 값 설정
    for (let j = 0; j < w; j++) {
      const index = (w * i) + j;
      const token = areaText[index];
      const value = token === '.' ? 0 : 1;
      area[i].push(value);

      if (token === '.') {
        deliveryAvailableNum++;
      }
    }
  }

  const isResolvable = deliveryAvailableNum % 3 === 0;
  return (isResolvable) ? area : null;
}

const countDeliveryCase = function (area) {
  // 아직 배송구역이 설정되지 않은 좌측 상단의 좌표를 구한다.
  let leastLeftY = -1;
  let leastLeftX = -1;
  for (let y = 0; y < area.length; y++) {
    for (let x = 0; x < area[0].length; x++) {
      if (area[y][x] === 0) {
        leastLeftY = y;
        leastLeftX = x;
        break;
      }
    }
    if (leastLeftY !== -1) break;
  }

  // 기저사례 : 모든 단지에 배송구역이 설정된 경우
  if (leastLeftY === -1) return 1;

  let result = 0;
  for (let typeIndex = 0; typeIndex < deliveryType.length; typeIndex++) {
    // 배송구역을 설정한다.
    if (setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, 1)) {
      // 설정한 배송구역이 유효하면 재귀호출 한다.
      result += countDeliveryCase(area);
    }

    // 설정한 배송 구역을 해제한다.
    setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, -1);
  }

  return result;
}

// 배송구역을 나누는 종류, [dy, dx] 셋
const deliveryType = [
  [[0, 0], [0, 1], [0, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 0], [0, 1], [1, 0]],
  [[0, 0], [0, 1], [1, 1]],
  [[0, 0], [1, 0], [1, 1]],
  [[0, 0], [1, 0], [1, -1]],
]

const setDeliveryCase = function (area, y, x, type, action) {
  let available = true;

  for (let i = 0; i < deliveryType[0].length; i++) {
    const newY = y + deliveryType[type][i][0];
    const newX = x + deliveryType[type][i][1];

    const isOutOfRange = newY < 0 || newY >= area.length || newX < 0 || newX >= area[0].length;
    if (isOutOfRange) {
      available = false;
    } else {
      const isDuplicated = (area[newY][newX] += action) > 1;
      if (isDuplicated) {
        available = false;
      }
    }
  }

  return available;
}

solution
