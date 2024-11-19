//  Move all 0s to the end of the array while keeping other elements in order.

function moveZeros(arr) {
  let zeros = arr.filter((x) => x === 0);
  let nonZeros = arr.filter((x) => x !== 0);
  return [...nonZeros, ...zeros];
}
console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
