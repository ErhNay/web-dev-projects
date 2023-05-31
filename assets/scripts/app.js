const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
  // this too works -> return +(usrinput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function validateCalcType(valCalcType) {
  if (
    valCalcType !== 'ADD' &&
    valCalcType !== 'SUBTRACT' &&
    valCalcType !== 'MULTIPLY' &&
    valCalcType !== 'DIVIDE'
  ) {
    return true;
  } else {
    return false;
  }
}

function calcResult(calcType) {
  const enteredNumber = getUserNumberInput();

  if (validateCalcType(calcType) || !enteredNumber) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calcType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
    console.log(logEntries);
  } else if (calcType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
    console.log(logEntries);
  } else if (calcType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
    console.log(logEntries);
  } else if (calcType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
    console.log(logEntries);
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}

function add() {
  calcResult('ADD');
}

function subtract() {
  calcResult('SUBTRACT');
}

function multiply() {
  calcResult('MULTIPLY');
}

function divide() {
  calcResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
