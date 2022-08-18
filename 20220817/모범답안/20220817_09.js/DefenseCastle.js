/**
 * @param distance {number[]}
 * @param time {number[]}
 * @returns {number}
 */
function solution(distance, time) {
  const enemy = [];

  for (let i = 0; i < distance.length; i++) {
    enemy.push(Math.floor(distance[i] / time[i]));
  }

  enemy.sort((a, b) => a - b);

  let curTime = 0
  let shield = 0;
  for (let enemyArrivalTime of enemy) {
    // 현재까지 아군 생성
    if (curTime < enemyArrivalTime) {
      shield += enemyArrivalTime - curTime;
    }

    // 현재 적이 공격
    shield -= 1;

    // 적군보다 아군이 적을 경우 -1 반환
    if (shield < 0) {
      return -1;
    }

    // 현재 시간 설정
    curTime = enemyArrivalTime;
  }

  return shield;
}

solution