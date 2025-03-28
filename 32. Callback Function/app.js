// A callback function is a function passed as an argument to another function, which is then executed (called back) later inside the outer function.
// They help you control the order of execution, especially in asynchronous tasks.
// They allow functions to be more reusable and flexible.

function greetUser(name, callback) {
  console.log("Hi " + name);
  callback(); // calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetUser("Dalveer", sayGoodbye);
