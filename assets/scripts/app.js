const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and Write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult,
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}

function calculationResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, intitialResult, enteredNumber);
  writeToLog(calculationType, intitialResult, enteredNumber, currentResult);
}

function add() {
  calculationResult("ADD");
}
function subtract() {
  calculationResult("SUBTRACT");
}
function multiply() {
  calculationResult("MULTIPLY");
}
function divide() {
  calculationResult("DIVIDE");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
