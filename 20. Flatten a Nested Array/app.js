// Flatten an array with nested arrays inside

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Example:
console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
