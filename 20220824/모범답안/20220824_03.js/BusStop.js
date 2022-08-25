/**
 * @param city {number[][]}
 * @return {number[][]}
 */
function solution(city) {
  return calcDistance(city);
}

function calcDistance(city) {
  const aptLocations = [];
  const busLocations = [];

  getLocations(city, aptLocations, busLocations);

  const ret = createBaseResult(city);

  for (let aptIndex = 0; aptIndex < aptLocations.length; aptIndex++) {
    const aptY = aptLocations[aptIndex][0];
    const aptX = aptLocations[aptIndex][1];
    for (let busIndex = 0; busIndex < busLocations.length; busIndex++) {
      const distance = getDistance(aptLocations[aptIndex], busLocations[busIndex]);
      ret[aptY][aptX] = (ret[aptY][aptX] === 0) ? distance : Math.min(ret[aptY][aptX], distance);
    }
  }

  return ret;
}

function getLocations(city, aptLocations, busLocations) {
  const ySize = city.length;
  const xSize = city[0].length;

  for (let y = 0; y < ySize; y++) {
    for (let x = 0; x < xSize; x++) {
      if (city[y][x] === 1) {
        aptLocations.push([y, x]);
      } else {
        busLocations.push([y, x]);
      }
    }
  }
}

function createBaseResult(city) {
  const ySize = city.length;
  const xSize = city[0].length;

  return Array.from(Array(ySize), () => new Array(xSize).fill(0));
}

function getDistance(aptLocation, busLocation) {
  return Math.abs(aptLocation[0] - busLocation[0]) + Math.abs(aptLocation[1] - busLocation[1]);
}

solution