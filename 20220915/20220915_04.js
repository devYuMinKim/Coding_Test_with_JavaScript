function solution(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  if (arr[0] > arr[1] + arr[2]) return 0;

  else return (arr[0] + arr[1] + arr[2]);
}

console.log(solution([3, 2, 3]));