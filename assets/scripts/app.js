const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and Write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription); //from vendor file
}


function add() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', intitialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', intitialResult, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', intitialResult, enteredNumber);
}
function divide() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', intitialResult, enteredNumber);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
