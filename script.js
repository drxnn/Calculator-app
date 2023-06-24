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
  let one = document.getElementById("numOne").value;
  document.getElementById("screen").innerText = one;
};
