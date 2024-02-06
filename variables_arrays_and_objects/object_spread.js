// const todo = {};
const todo = new Object();
todo.id = 2;
todo.myTitle = "pay for hair";
todo.completed = false;

// const todo2 = new object()

// nesting objects
const person = {
  address: {
    coords: {
      lat: 88.43,
      lon: -76.9,
    },
  },
};

// console.log(person.address.coords.lat);
console.log(`latitude: ${person.address.coords.lat}`);
console.log(`longitude: ${person.address.coords.lon}`);

// using spread operator
const monday = {
  morning: "Breakfast in bed",
  afternoon: "fast",
  evening: "mirage",
  late_night: "netflix and chill",
};

const tuesday = {
  dawn: "church to pray",
  late_afternoon: "work",
  dawn: "see m in-laws",
};

// const for_the_week = Object.assign({}, monday, tuesday);

// console.log(for_the_week);

const for_the_week = { ...monday, ...tuesday };
console.log(for_the_week);

// creating an array of objects
const for_the_week_new = [monday, tuesday];
console.log(for_the_week_new);


// moving one value to another
let move_from_tuesday = tuesday.dawn;
console.log(move_from_tuesday);

monday.dawn = move_from_tuesday;
console.log(monday);

monday.dawm = tuesday.dawn;
console.log(monday);

tuesday.evening = monday.evening;
console.log(tuesday);


