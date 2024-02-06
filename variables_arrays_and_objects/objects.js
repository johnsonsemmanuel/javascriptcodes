// key vlaues pairs

const employee = {
  id: 8344374,
  role: "developer",
  ename: "ayiyi",
  age: 90,
  task: ["train", "code"],
};

// access it with the dot notation
console.log(employee.ename);
console.log(employee.role);

// access it with the bracket notation
console.log(employee["age"]);

// access task in an array
console.log(employee.task[0]);

// uodate
employee.ename = "Johnson";
console.log(employee.ename);

// add
employee.salary = 10000000;
console.log(employee.salary);

// delete
delete employee.age;
console.log(employee.age);

// adding functions to objects
employee.intro = function () {
  console.log(`yahoo everyone, my name is: ${this.ename}`);
};

employee.intro();

const employee2 = {
  id: 123444,
  "first name": "kwame",
};

console.log(employee2["first name"]);

// create a student object and the properties with values. Mnipulate the values using some of the examples above

const students = {
  id: 1122,
  firstname: "James",
  lastname: "Bond",
  age: 28,
  department: "jesi software development",
  timearrival: [9, 10, 11, 12],
};

console.log(students.firstname);
console.log(students.age);
console.log(students.timearrival[1]);

students.intro = function () {
  console.log(
    `The first name of this student is ${this.firstname} and he is ${this.age} old. He is enrolled in ${this.department} program and he comes to class at ${this.timearrival[0]}`
  );
};

students.intro();

delete students.department;
console.log(students.department);

// car example
let car = {
  brand: "honda",
  model: "CRV",
  speed: "220kmp/h",
  color: "grey",
  "engine capacity": "500cc",

  // codeium Refractor |Explain|Generate JSDoc|X
  start: function () {
    console.log("engine has started");
  },
};

// add properties
(car.torque = "smooth"), (car["weight"] = "300kg");

// accessing objects
console.log(car["engine capacity"]);
console.log(car.color);

// remove an objects
delete car.torque;

// update property
car.weight = "700kg";

// find the lenght of an object

let number_of_properties = Object.keys(car).length;
console.log(number_of_properties);

// add function property

(car.stop = function () {
  console.log("engine has stopped");
}),
  car.start();
car.stop();

// array method of removing or deleteing an item

car.features = ["brake", "shokes", "foul"];
let my_car_features = car.features;

let index_to_remove = 1;

my_car_features.splice(index_to_remove, 1);

console.log(my_car_features);

car.features = my_car_features;

console.log(car.features);

// new course info

// create a student object and the properties with values. Mnipulate the values using some of the examples above

const student = {
  fullName: "Emmanuel Johnson-Excellent",
  age: 25,
  class: "Software Development",
  task: ["reading", "riding", "speaking"],
};

console.log(student.fullName);
console.log(student.task[1]);

student.fullName = "Kwame Billionaire";
console.log(student.fullName);

delete student.fullName;
console.log(student.fullName);
