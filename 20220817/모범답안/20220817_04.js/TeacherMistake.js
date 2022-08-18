/**
 * @param nums {number[]}
 * @returns {number[]}
 */
function solution(nums) {
  let students = Array.from({length: nums.length}, (_, i) => i + 1);

  return students.filter(function (num) {
    return nums.indexOf(num) < 0
  })
}

solution
