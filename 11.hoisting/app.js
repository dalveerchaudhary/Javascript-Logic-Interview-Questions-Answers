// Declaration and Initialization
// In hoisting Declaration move on top

// console.log(a);
// var a = 10;
// console.log(a);

// console.log(b); //Due to temporal dead zone
// let b;
// b = 20;
// b = 22;
// console.log(b);

// console.log(c); //Due to temporal dead zone
// const c = 30;
// // c = 32; //We can't assign to constant.
// console.log(c);

// var a; //Declaration
// a = 20; //Initialization

// var a = 20; //Declaration & Initialization

// Function
// 1. Declaration function
// 2. Expression function

// Declaration function - Yes, they can be hoist.
test();
function test() {
  console.log("test");
}
test();

// Expression function
// test1();
console.log(test1);
const test1 = () => {
  console.log("test1");
};
test1();
