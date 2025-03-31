// Implement a Custom bind() Method

Function.prototype.myBind = function (context, ...args) {
  let fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

const person = { name: "Dalveer" };
function greet(greeting) {
  return `${greeting}, ${this.name}`;
}
const boundGreet = greet.myBind(person);
console.log(boundGreet("Hello")); // Hello, Dalveer
