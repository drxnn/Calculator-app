// FUNCTIONS //

let addition = (a, b) => {
  console.log(a, b);
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
  return parseInt(value) / 100;
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
  console.log(screen);
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
  if (!screen.innerText.includes(decimal)) {
    screen.innerText += decimal;
  }
};

let allClear = () => {
  let screen = document.getElementById("screen");
  screen.innerText = "";
};

//

let firstValue = null;
let secondValue = null;
let operations = null;
let result = null;

const operatorClicked = document.querySelectorAll(".op");

operatorClicked.forEach((operator) => {
  operator.addEventListener("click", handleClick);
});

function handleClick(event) {
  let innerContent = event.target.innerText;
  if (firstValue === null) {
    let screen = document.getElementById("screen");
    firstValue = screen.innerText;
    screen.innerText = "";
  } else if (secondValue === null) {
    let screen = document.getElementById("screen");
    console.log(`second value is ${screen.innerText}`);
    secondValue = screen.innerText;
  } else {
    switch (innerContent) {
      case "+":
        result = addition(+firstValue, +secondValue);
        screen.innerText = result;
        console.log(result, firstValue, secondValue);
        firstValue = null;
        secondValue = null;
        break;
    }
  }
}

// function operationsFunction(innerContent) {

// if (firstValue === null) {
//   let screen = document.getElementById("screen");
//   firstValue = screen.innerText;
//   screen.innerText = "";
// } else if (secondValue === null) {
//   let screen = document.getElementById("screen");
//   secondValue = screen.innerText;
// } else if (innerContent === "+") {
//   let result = addition(+firstValue, +secondValue);
//   let screen = document.getElementById("screen");
//   screen.innerText = result;
//   firstValue = null;
//   secondValue = null;
// } else if (innerContent === "-") {
//   let result = subtraction(+firstValue, +secondValue);
//   let screen = document.getElementById("screen");
//   screen.innerText = result;
//   firstValue = null;
//   secondValue = null;
// } else if (innerContent === "×") {
//   let result = multiplication(+firstValue, +secondValue);
//   let screen = document.getElementById("screen");
//   screen.innerText = result;
//   firstValue = null;
//   secondValue = null;
// } else if (innerContent === "÷") {
//   let result = division(+firstValue, +secondValue);
//   let screen = document.getElementById("screen");
//   screen.innerText = result;
//   firstValue = null;
//   secondValue = null;
// }

// }

// additionOperatorClicked.addEventListener("click", operationsFunction);
// subtractionOperatorClicked.addEventListener("click", operationsFunction);
// multiplicationOperatorClicked.addEventListener("click", operationsFunction);
// divisionOperatorClicked.addEventListener("click", operationsFunction);

// let grabPlus = () => {
//   if (firstValue === null) {
//     let screen = document.getElementById("screen");
//     firstValue = screen.innerText;
//     screen.innerText = "";
//   } else if (secondValue === null) {
//     let screen = document.getElementById("screen");
//     secondValue = screen.innerText;
//   } else {
//     let result = addition(+firstValue, +secondValue);
//     let screen = document.getElementById("screen");
//     screen.innerText = result;
//     firstValue = null;
//     secondValue = null;
//   }
// };

// let grabMinus = () => {
//   if (firstValue === null) {
//     let screen = document.getElementById("screen");
//     firstValue = screen.innerText;
//     screen.innerText = "";
//   } else if (secondValue === null) {
//     let screen = document.getElementById("screen");
//     secondValue = screen.innerText;
//   } else {
//     let result = subtraction(+firstValue, +secondValue);
//     let screen = document.getElementById("screen");
//     screen.innerText = result;
//     firstValue = null;
//     secondValue = null;
//   }
// };

// let grabMulti = () => {
//   if (firstValue === null) {
//     let screen = document.getElementById("screen");
//     firstValue = screen.innerText;
//     screen.innerText = "";
//   } else if (secondValue === null) {
//     let screen = document.getElementById("screen");
//     secondValue = screen.innerText;
//   } else {
//     let result = multiplication(+firstValue, +secondValue);
//     let screen = document.getElementById("screen");
//     screen.innerText = result;
//     firstValue = null;
//     secondValue = null;
//   }
// };

// let grabDivision = () => {
//   if (firstValue === null) {
//     let screen = document.getElementById("screen");
//     firstValue = screen.innerText;
//     screen.innerText = "";
//   } else if (secondValue === null) {
//     let screen = document.getElementById("screen");
//     secondValue = screen.innerText;
//   } else {
//     let result = division(+firstValue, +secondValue);
//     let screen = document.getElementById("screen");
//     screen.innerText = result;
//     firstValue = null;
//     secondValue = null;
//   }
// };
// //

let negateNumber = () => {
  let screen = document.getElementById("screen");
  secondValue = negation(screen.innerText);
  screen.innerText = secondValue;
};

let percentageNum = () => {
  let screen = document.getElementById("screen");
  secondValue = percentage(screen.innerText);
  screen.innerText = secondValue;
};

//
//
//
//
//

// Add negation function>>> done
// First value should disappear when clicking an operation and only the second value should be seen, then when operation is done only the result should be on the screen>>>done
// add percentage function done
