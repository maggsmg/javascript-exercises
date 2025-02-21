const add = function(numOne,numTwo) {
  result = numOne + numTwo
  return result
};

const subtract = function(numOne,numTwo) {
  result = numOne - numTwo
  return result
};

const sum = function(array) {
  let result = 0

  if(array.length == 0){
      return result;
  }
  else{for (let i = 0; i < array.length; i++) {
          result += array[i]
      }
      return result
  }
};

const multiply = function(array) {
  let result = array [0]
  for (let i = 1; i < array.length; i++) {
      result *= array[i]
  }
  return result
};

const power = function(numOne,numTwo) {
  result = numOne ** numTwo
  return result
};

const factorial = function(number) {
  if (number < 0) {
      return "Factorial is not defined for negative numbers";
  } else if (number === 0) {
      return 1;
  } else {
      let result = 1;
      for (let i = 1; i <= number; i++) {
      result *= i;
      }
      return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
