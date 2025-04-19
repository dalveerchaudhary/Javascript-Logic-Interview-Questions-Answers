// create object with all posible way

var person = Object.create({
  name: "dalveer",
  age: 26,
  city: "Jaipur",
});
console.log(person);

// Object Literal
var person1 = {
  name: "dalveer",
  age: 26,
  city: "Jaipur",
};
console.log("person1 = ", person1);

// Using new keyword
var person2 = new Object();
person2.name = "Dalveer Singh";
person2.age = 26;
person2.city = "Jaipur";
console.log("person2 = ", person2);

// Using an object constuctor
function Person3Const(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.area = "Sirsi road";
}

var person3 = new Person3Const("Dharmveer", 25, "Jaipur");
console.log("person3 = ", person3);
