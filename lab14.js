/*Given an array of strings and numbers. Print the number of integers and the number of strings in the
array.*/

const arr = [1, "10", "hi", 2, 3];

let numbersOnly = (val) => {
  if (typeof val === "number") {
    return val;
  }
};
let numbers = arr.filter(numbersOnly);

let stringsOnly = (val) => {
  if (typeof val === "string") {
    return val;
  }
};
let strings = arr.filter(stringsOnly);

alert("Numbers: " + numbers.length + " , " + "Strings: " + strings.length);

function typeCounter(array) {
  let counter = 0;
  for (let i = 0; i < array.length; ++i) {
    if (typeof array[i] === "string") {
      ++counter;
    }
  }

  return `
    --------------------------
        Strings: ${counter},
        Numbers: ${array.length - counter};
    ---------------------------
    `;
}
