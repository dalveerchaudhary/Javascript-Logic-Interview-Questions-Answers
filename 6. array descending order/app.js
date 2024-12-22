// const arr = [ 88,44,22,10,10,9]
// arr.sort((a,b) => b - a)
// document.write(arr);


// let sum = prompt("Enter number");
// let sum2 = prompt("Enter second number");

// let a = parseInt(sum) + parseInt(sum2);
// document.write(a);

// function check(a) {
//     const remind = a % 2;
//     if (remind == 0) {
//         return "even"
//     }
//     else {
//         return "odd";
//     }
// }

// document.write(check(13));

// function small(a, b, c) {
//     if (a < b && a < c) {
//         return a;
//     }
//     else if (b < a && b < c) {
//         return b;
//     }
//     else if (c < a && c < b) {
//         return c;
//     }
// }
// document.write(typeof (small));
// document.write(small(2, 0, 1));
// console.log("small number", small(3, 1, 0));


// function smallnumber(a, b, c) {
//     let smallestnumber = a;
//     if (b < smallestnumber) {
//         smallestnumber = b;
//     }
//     if (c < smallestnumber) {
//         smallestnumber = c;
//     }
//     return smallestnumber;
// }
// console.log(smallnumber(0, 9, 1));

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myname = new Person("dalveer", "singh", 30, "pink");

console.log("my name is" + myname.age + ".");
