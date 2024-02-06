/* the wor is great*/

console.log("I am learning Javascript");

const Myname = "Johnson";
const Newname = 9;
console.log("Newname");

var sum = 10 + 30;
console.log(sum);

var product = 10 / 3;
console.log(product);

var addition = 56;
addition++;
console.log(addition);

var remainder;
remainder = 11 % 3;
console.log(remainder);

var a = 4;
var b = 14;
var c = 42;

a += 12;
b = b - 10;
c = c * 1;

console.log(a);
console.log(b);
console.log(c);

// var stringName = "Name is \"Emmanuel Johnson-Excellent\" inside of \"and i believe in the future of"\ \"of Money"\"";
// console.log(stringName);

var myString = "This is the beginning. " + "This is the end.";
console.log(myString);

var myString = "This is the first way. ";
myString += "This is the second";
console.log(myString);

var myName = "Johnson";
var mySurname =
  "My other names include " + myName + " and first name is Emmanuel";
console.log(mySurname);

let firstName = "Emmanuel";
lastName = "Johnson-Excellent";
console.log(firstName, lastName);

let person = {
  myName: "Johnson",
  myAge: 20,
};
console.log(person.myAge);

let selectorColors = ["Banku", "Okro", "Tilapia"];
selectorColors.push("Tuozafi");
selectorColors[3] = 2;
console.log(selectorColors[3]);
console.log(selectorColors.length);

// function loaf(myName) {
//     console.log("Hello World");
// }

function food(fullFood, partnerFood) {
  console.log(
    "Hello, my favourite food is " + fullFood + " and " + partnerFood
  );
}

food("banku", "okrosoup");

function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
