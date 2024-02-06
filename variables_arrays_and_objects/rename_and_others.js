let fname = "Johnson";
let lname = "Excellent";
let hobby = "Building";

const person = {
  first_name: fname,
  last_name: lname,
  my_hobby: hobby,
  password: "Hello World"
};
console.log(person.my_hobby);

// renaming keys/properties
delete person.first_name
person.first_name_change = fname

console.log(person);

const updatedToPerson = {
    ...person,
    new_password: person.password,
};

console.log(updatedToPerson)

delete updatedToPerson.password
