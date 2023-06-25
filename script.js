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

// btn-click // FUNCTIONS FOR BUTTONS //

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
let selectThree = () => {
  let three = document.getElementById("numThree").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += three;
};

let selectFour = () => {
  let four = document.getElementById("numFour").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += four;
};

let selectFive = () => {
  let five = document.getElementById("numFive").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += five;
};

let selectSix = () => {
  let six = document.getElementById("numSix").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += six;
};

let selectSeven = () => {
  let seven = document.getElementById("numSeven").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += seven;
};

let selectEight = () => {
  let eight = document.getElementById("numEight").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += eight;
};

let selectNine = () => {
  let nine = document.getElementById("numNine").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += nine;
};

let selectZero = () => {
  let zero = document.getElementById("numZero").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += zero;
};

let addDecimal = () => {
  let decimal = document.getElementById("dec").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += decimal;
};

let allClear = () => {
  let screen = document.getElementById("screen");
  screen.innerText = "";
};
