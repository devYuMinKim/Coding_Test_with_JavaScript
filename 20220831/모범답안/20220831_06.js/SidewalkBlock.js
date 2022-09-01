/**
 * @param w {number}
 * @param h {number}
 * @returns {number}
 */
function solution(w, h) {
  return w < h ? calcSidewalkInstallPrice(w, h) : calcSidewalkInstallPrice(h, w)
}

const ONE_SIDEWALK_PRICE = 500
const HALF_SIDEWALK_PRICE = 300

function calcSidewalkInstallPrice(short, long) {
  const halfSidewalkCount = Math.floor(short / 2) * 2

  return (short * long) * ONE_SIDEWALK_PRICE + (halfSidewalkCount / 2) * (2 * HALF_SIDEWALK_PRICE - ONE_SIDEWALK_PRICE)
}

solution