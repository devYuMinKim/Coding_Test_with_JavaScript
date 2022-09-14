function solution(s) {
  let arr = [];
  let length = 0;
  let tmp = 0;
  for (let element of s) {
    if (!arr.includes(element)) {
      arr.push(element);
      tmp++;
    } else {
      if (tmp > length) length = tmp;
      tmp = 0;
      arr = [];
    }
  }

  return length;
}

console.log(solution("abssccbsbsv"));