let logo = document.getElementById("logo");

let h1 = document.createElement("h1");
h1.innerHTML = "my heading";

h1.addEventListener("click", () => {
  h1.style.color = "red";
});

let h2 = document.createElement("h2");
h2.textContent = "This food is good";

h2.addEventListener("dblclick", function () {
  h2.style.color = "green";
});

let h3 = document.createElement("h3");
h3.innerHTML = "This is the reason why your health is needed";
h3.addEventListener("contextmenu", () => {
  h3.style.display = "none";
});

let h4 = document.createElement("h4");
h4.innerHTML = "The right way is to learn from others";
h4.addEventListener("mouseover", () => {
  h4.style.color = "blue";
});

// logo.addEventListener("click", button);
// logo.addEventListener("dblclick", function (onDoubleClick) {
//   this.style.color = "";
// });
// logo.addEventListener("contextmenu", function (onRightClick) {
//   this.style.color = "";
// });
// logo.addEventListener("mousedown", function (onMouseDown) {
//   this.style.color = "";
// });
// logo.addEventListener("mouseup", function (onMouseUp) {
//   this.style.color = "";
// });
// logo.addEventListener("wheel", function (onWheel) {
//   this.style.color = "";
// });

logo.append(h1, h2, h3, h4);
// logo.append(h2);
