//Convert the First Letter of Each Word

function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example:
console.log(titleCase("hello world")); // "Hello World"
