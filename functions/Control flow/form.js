let form = document.createElement("form");
// form.addEventListener("sumbit")

// create a label
let label = document.createElement("label");
label.textContent = "Enter your name: ";

// label event listener
function labelHover() {
  this.style.color = "green";
}

label.addEventListener("mouseover", labelHover);
label.addEventListener("mouseout", function () {
  this.style.color = "";
});

let inputField = document.createElement("input");
inputField.type = "text";
inputField.placeholder = "enter your name";
inputField.id = "inputField";

form.appendChild(label);
form.appendChild(inputField);

document.body.appendChild(form);
