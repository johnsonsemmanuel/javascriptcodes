// Write a function called greet that takes a person's name as a parameter and returns a greeting message, such as "Hello, [name]!".

// function greet(kwame, message) {
//   console.log(`I saw my lecturer and i greeted him ${kwame}, ${message}!.`);
// }
// greet("Hello", "Kwame");

// // Create a function called sumArray that takes an array of numbers as a parameter and prints the sum of all the numbers in the array.
// function sumArray([h, k, l, y]) {
//   console.log(`the total sum of the numbers are ${h + k + l + y}`);
// }

// sumArray([2, 5, 7, 10]);

function sumArray(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`The sum of the array is: ${sum}`);
}

let my_array_number = [9, 8, 9, 4, 4]

// Create a function named calculateRectangleArea that takes the length and width of a rectangle as parameters and prints the area of the rectangle.
function calculateRectangleArea(length, width) {
  console.log(
    `The length of the rectangle is ${length} and the width is ${width}cm.`
  );
  console.log(`The area of the rectangle is ${length * width}cm`);
}

calculateRectangleArea(25, 12);

// Create a function called calculatePower that takes a base and an exponent as parameters and prints the result of raising the base to the given exponent.
function calculatePower(base, exponent) {
  console.log(
    `The base value is ${base} and the exponent value is ${exponent}.`
  );
  console.log(Math.pow(base, exponent));
}

calculatePower(30, 20);
