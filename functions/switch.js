let userDay = parseInt("Enter the days for the week as a number:");
let dayName;

switch (userDay) {
  case 1:
    dayName = `monday`;
    break;

  case 2:
    dayName = `tuesday`;
    break;

  case 3:
    dayName = `wednesday`;
    break;

  case 4:
    dayName = `thurdasy`;
    break;

  case 5:
    dayName = `friday`;
    break;

  default:
    dayName = `you entered an invalid number as a day:`;
    break;
}
