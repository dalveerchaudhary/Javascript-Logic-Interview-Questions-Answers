//Find the missing number from an array of numbers from 1 to N.

function findMissingNumber(arr, n) {
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3
