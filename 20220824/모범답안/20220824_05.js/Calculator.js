/**
 * @param s {string}
 * @return {number}
 */
function solution(s) {
  const nums = []; // 숫자 저장 공간
  const ops = []; // 문자열 저장 공간
  save(s, nums, ops);

  return calc(nums, ops);
}

function save(s, nums, ops) {
  let i = 0;
  let tmpNum = '';
  while (i < s.length) {
    const c = s.charAt(i);

    if (isNumber(c)) {
      tmpNum += c;
    } else {
      if (i === 0) {
        nums.push(0)
        ops.push(c);
      } else {
        nums.push(Number(tmpNum));
        ops.push(c);
      }
      tmpNum = '';
    }

    i++;
  }

  // 마지막 남은 숫자 추가
  nums.push(Number(tmpNum));
}

function calc(nums, ops) {
  if (nums.length === 1) return nums[0];

  const num1 = nums.shift();
  const num2 = nums.shift();

  const calcNum = (ops.shift() === '+') ? add(num1, num2) : sub(num1, num2);
  nums.unshift(calcNum)
  return calc(nums, ops)
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function isNumber(c) {
  const charCode = c.charCodeAt(0);
  return 48 <= charCode && charCode <= 57;
}

solution
