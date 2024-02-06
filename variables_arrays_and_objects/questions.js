// const library = [
//   (firstobject = {
//     title: "Grow your wealth",
//     author: "Jim Rhon",
//     status: ["own", "reading", "read"],

//     own: true,
//     reading: false,
//     read: false,
//   }),
//   (secondobject = {
//     title: "Psycology of selling",
//     author: "Brian Tracy",
//     status: ["own", "reading", "read"],

//     own: true,
//     reading: false,
//     read: false,
//   }),
//   (thirdobject = {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     status: ["own", "reading", "read"],

//     own: true,
//     reading: false,
//     read: false,
//   }),
// ];

// library.firstobject(2[0]) = true;
// library[secondobject[2(1)]] = true;
// library[thirdobject[2](2)] = true;

// console.log(library.firstobject[2]);

const library = [
  {
    title: "Psycology of selling",
    author: "Brian Tracy",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Psycology of selling",
    author: "Brian Tracy",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Psycology of selling",
    author: "Brian Tracy",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library[1].status.read);

delete library[0].title;
library[0].title = "firstbook";
console.log(library[0].title);

const favourites = [
  {
    meals: "Banku",
    drinks: "wine",
    games: "GTA",
    times: {
      morning: 9,
      afternoon: 12,
      evening: 7,
    },
  },
];

favourites[0].games = "Grand Theft Auto";
favourites.push[0] = "newArea"

console.log(favourites[0].games);

