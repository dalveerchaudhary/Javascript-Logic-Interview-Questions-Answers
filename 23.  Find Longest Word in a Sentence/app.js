// Return the longest word in a string

function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
console.log(longestWord("I am learning JavaScript basics")); // "JavaScript"
