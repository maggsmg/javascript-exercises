const convertToCelsius = function(temperature) {
  let cel = (temperature -32)* 5/9
  let roundCel = Math.round(cel * 10) / 10;
  return roundCel
};

const convertToFahrenheit = function(temperature) {
  let far = temperature * 9/5 + 32
  let roundFar = Math.round(far * 10) / 10;
  return roundFar
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
