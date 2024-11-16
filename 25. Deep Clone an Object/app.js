// Write a function to deeply clone a nested object/array

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);

  const result = {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
copy.b.c = 10;
console.log(original.b.c); // still 2
