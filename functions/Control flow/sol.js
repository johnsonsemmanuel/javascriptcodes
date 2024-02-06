let body = document.body;

// add background color
body.style.background = "orange";

// text color
body.style.color = "black";

let divContent = document.getElementById("content");

let paragraph = document.createElement("p");
paragraph.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi veniam a ipsum odio quia praesentium aspernatur, maiores quas amet sint culpa molestiae cum animi quos magnam? Ipsum ab quo tenetur.";

divContent.append(paragraph);

let heading = document.createElement("h1");
heading.textContent = "This is my heading";

divContent.appendChild(heading);

let myUl = document.createElement("ul");

let item1 = document.createElement("li");
item1.textContent = "Item 1";
let item2 = document.createElement("li");
item2.textContent = "Item 2";
let item3 = document.createElement("li");
item3.textContent = "Item 3";

myUl.appendChild(item1);
myUl.appendChild(item2);
myUl.appendChild(item3);

divContent.appendChild(myUl);

let button = document.createElement("button");
button.textContent = "Click Me";

// add an event listener
button.addEventListener("click", function () {
  alert("Button Clicked");
});

divContent.appendChild(button);

// to remove an element or item
myUl = document.querySelector("ul");
item2 = myUl.children[1];
myUl.removeChild(item2);



