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