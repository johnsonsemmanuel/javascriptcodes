let myArray = [9, 7, 200, 45];
let secondArray = myArray[1];
console.log(secondArray);

console.log(
  `my array at index 0 is ${myArray[0]}, my array at index 1 is ${myArray[1]}, my array at index 2 is ${myArray[2]}`
);

let myNumberArray = [10, 12, 18, 20];
let myStringArray = ["Lamb", "Goat", "Mule", "Leopard"];
let myMixedArray = [4, "string", false, null, [3, 4, 5], undefined];
console.log(myMixedArray.length);
console.log(`The array at index zero is ${myNumberArray[0]}`);

// add to an array use push
myNumberArray.push(30);
console.log(myNumberArray.length);
console.log(myNumberArray);

// add to a string array use push
myStringArray.push("camel");
console.log(myStringArray.length);
console.log(myStringArray);

// to remove an element of an array use pop
myNumberArray.pop();
myNumberArray.pop();
myNumberArray.pop();
console.log(myNumberArray);

// remove at a particular index
myStringArray.splice(3, 2);
console.log(myStringArray);

myStringArray.slice(2, 1);
console.log(myStringArray);

let arrayFile = [25, 15, "Goat", "Cow", 15];
arrayFile.push("praying");
arrayFile.pop();
arrayFile.pop();
arrayFile.pop();
arrayFile.splice(2,1)
console.log(arrayFile);
console.log(arrayFile.length);
console.log(arrayFile);
