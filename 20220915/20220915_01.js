// 제로베이스 프론트엔드 스쿨_FoodBj
/*
[문제 설명]
유명한 먹방 BJ 5명이 짜장면을 제한 시간 내에 다 먹을 시에 짜장면 무료 혜택과 상금 150만 원을 받게 되는 중국집을 방문했습니다.
첫 번째 짜장면을 다 먹은 BJ는 다음 짜장면도 먹을 수 있고 혜택과 상금도 동일하게 제공됩니다.
짜장면 세 그릇을 먹은 1명의 BJ만이 우승을 거머쥐었습니다.
짜장면을 한 그릇도 먹지 못한 BJ는 없습니다.
참가자 5명을 BJ 배열에 담고 한 그릇씩 먹은 참가자들을 one 배열에, 두 그릇씩 먹은 참가자들을 two 배열에 담아 짜장면의 상금으로 지출된 금액과 우승자를 출력하는 함수, solution을 완성해주세요.

[제한 사항]

BJ들의 이름은 같을 수 없습니다.
참가한 BJ는 총 5명입니다.
준비된 짜장면은 최대 20그릇입니다.
[입력 형식]

BJ와 짜장면을 한 그릇 먹은 배열(one)과 짜장면을 두 그릇 먹은 배열(two)가 주어집니다.
[출력 형식]

BJ들의 상금을 숫자로 표현하고 우승자를 괄호 내에 표시합니다. (예: 1350만원(하밥))
*/

function solution(bj, one, two) {
  let array = [...bj];
  let fir = [...one];
  let sec = [...two];
  let sum = 0;


  for (let i = 0 ; i < fir.length ; i++) {
    for (let j = 0 ; j < array.length ; j++) {
      if (fir[i] === array[j]) {
        array.splice(j, 1);
        sum += 1;
      }
    }
  }

  for (let i = 0 ; i < sec.length ; i++) {
    for (let j = 0 ; j < array.length ; j++) {
      if (sec[i] === array[j]) {
        array.splice(j, 1);
        sum += 2;
      }
    }
  }

  sum += 3 * array.length;

  sum *= 150;

  let result = "";
  result += sum + "만원";
  result += "(" + String(array[0]) + ")";

  return result;
}

console.log(solution(["혁준", "하밥", "양상", "심심이", "소스왕"], ["혁준", "양상"], ["심심이", "소스왕"]));