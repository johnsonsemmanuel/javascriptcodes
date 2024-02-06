let degreeCelcius = prompt("determine the temperature by entering a number:");

let temperature;

switch (true) {
  case degreeCelcius < 0:
    temperature = "Freezing";
    break;

  case degreeCelcius >= 0 && degreeCelcius <= 10:
    temperature = "cold";
    break;

  case degreeCelcius >= 11 && degreeCelcius <= 20:
    temperature = "cool";
    break;

  case degreeCelcius >= 21 && degreeCelcius <= 30:
    temperature = "warm";
    break;

  case degreeCelcius > 30:
    temperature = "hot";
    break;

  default:
    temperature = "the weather can not be determined by the number inputed";
    break;
}

console.log(
  `the temperature level is  very a ${temperature} at ${degreeCelcius} degree celcius`
);
