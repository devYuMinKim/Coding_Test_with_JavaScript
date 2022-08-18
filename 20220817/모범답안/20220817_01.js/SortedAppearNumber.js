/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  const countedArr = getCountedArr(s);
  const orders = getBiggerOrders(countedArr);
  return orders.join(' ');
}

function getCountedArr(s) {
  const result = new Array(10).fill(0)
  for (let i = 0; i < s.length; i++) {
    result[s[i]]++;
  }
  return result;
}

function getBiggerOrders(arr) {
  const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let high = 1; high < arr.length; high++) {
    for (let low = 0; low < high; low++) {
      if (arr[low] < arr[high]) {
        switching(arr, low, high);
        switching(order, low, high);
      } else if (arr[low] === arr[high] && order[low] > order[high]) {
        switching(order, low, high);
      }
    }
  }
  return order;
}

function switching(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

solution
