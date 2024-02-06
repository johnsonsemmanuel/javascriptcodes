let fruit = prompt("what us your favourite fruits:");

let taste;

switch (fruit) {
  case "apple":
    taste = "somwaye";
    break;

  case "banana":
    taste = "full of sugar";
    break;

  case "mango":
    taste = "bess scares me";
    break;

  case "pawpaw":
    taste = "great and yummy";
    break;

  default:
    break;
}

// console.log(`the taste for ${fruit} is on you sha`);
console.log(`The taste for ${fruit} is ${taste}`);

