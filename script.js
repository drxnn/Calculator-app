// FUNCTIONS //

let addition = (a, b) => {
  return a + b;
};

let subtraction = (a, b) => {
  return a - b;
};

let multiplication = (a, b) => {
  return a * b;
};

let division = (a, b) => {
  return a / b;
};

let negation = (value) => {
  return -value;
};

let percentage = (value) => {
  return value / 100;
};

// btn-click

let selectOne = () => {
  let one = document.getElementById("numOne").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += one;
};
let selectTwo = () => {
  let two = document.getElementById("numTwo").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += two;
};

let allClear = () => {
  let screen = document.getElementById("screen");
  screen.innerText = "";
};
