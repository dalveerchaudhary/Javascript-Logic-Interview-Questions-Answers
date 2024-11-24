//Find the Second Largest Number in array
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([1, 5, 2, 9, 7, 9, 13])); // 7
