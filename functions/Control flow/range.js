let a = "you did a great job"; //90-100
let b = "you can do better"; //70-89
let c = "you should try harder"; //55-69
let d = "what is this"; //40-54
let e = "we dont do that here"; //>40

let class_score = 90;

if (class_score >= 90 && class_score <= 100) {
  console.log(`${a}`);
} else if (class_score > 80) {
  console.log(`${b}`);
} else if (class_score > 80) {
  console.log(`stop watching netflix and chill`);
} else if (class_score > 90) {
  console.log(`you be the owdowgu in the class`);
} else {
  console.log(`There is an error`);
}

// Exercise

let f = "Freezing";
let g = "Cold";
let h = "Cool";
let i = "warm";
let j = "Hot";

let temperature = 30;

if (temperature <= 0) {
  console.log(`${f}`);
} else if (temperature >= 0 && temperature <= 10) {
  console.log(`${g}`);
} else if (temperature >= 11 && temperature <= 20) {
  console.log(`${h}`);
} else if (temperature >= 21 && temperature <= 30) {
  console.log(`${i}`);
} else if (temperature > 30) {
  console.log(`${j}`);
} else {
  console.log(`error`);
}

