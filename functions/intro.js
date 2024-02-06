//to start a function you need a funcrion keyword, function name and block of code
function greetings() {
  console.log("Good Morning");
}

greetings();

// parameters
function addNumber(a, b) {
  console.log(a + b);
}

addNumber(20, 30);

// use a string as my parameter
function johnson(name) {
  console.log(`give your heart to me and not to ${name}`);
}

johnson("leo");

function games(Gameloft, EASPORTS) {
  console.log(`the games we know are ${Gameloft} and ${EASPORTS}`);
}

games("Grand Theft Auto", "Fifa Sports 2024");

function cars(types, types1, year) {
  console.log(
    `The number of cars we are lookng for have ${types}, ${types1} and manufactured in ${year} model`
  );
}

cars("corolla", "vitz", "2023");

function prayer(type1, type2) {
  console.log(
    `The types of prayer we have is ${type1} and ${type2} in the house of God`
  );
}

prayer("standing", "kneeling");

// the return function
function sub(a, b) {
  return a - b;
}
console.log(sub(6, 1));

function check_register(user) {
  // return user + " has registered";
  if (!user) {
    user = "bot";
  }
  return user + " has registered";
}
console.log(check_register());

function enter_a_number(number, name) {
  if (!number) {
    number = 0;
  }

  return number + " is the number entered by the user";
}

console.log(enter_a_number(199));

// adding objects to your funcitons
const myName = {
  fullname: "Johnson",
  age: 30,
};

function my_name(myName) {
  return `My Name is ${myName.fullname} and i am ${myName.age} old`;
}
  
console.log(my_name(myName));

