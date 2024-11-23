//Count how many times each character appears in a string

function countChars(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
console.log(countChars("dalveer singh")); // { h: 1, e: 1, l: 2, o: 1 }
