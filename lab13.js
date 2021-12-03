// /*Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
// numbers in a separate array. Arrange them such as from the beginning are the odds and from the
// ending the evens.*/

// const arr = [8, 0, 1, "hey", 12, 5, "true", "2", "null", 7, 3];
// let numbersOnly = (val) => {
//   if (typeof val === "number") {
//     return val;
//   }
// };
// let numbers = arr.filter(numbersOnly);

// let oddNumbersOnly = (val) => {
//   if (typeof val === ("number" || 0) && typeof val % 2 != 0) {
//     return val;
//   }
// };
// let evenNumbersOnly = (val) => {
//   if (typeof val === ("number" || 0) && typeof val % 2 === 0) {
//     return val;
//   }
// };
// let oddNumbers = arr.filter(oddNumbersOnly);
// let evenNumbers = arr.filter(evenNumbersOnly);

// function oddToEven(oddToEvenArr) {
//   let filteredArr = [];
//   for (let i = 0; i < oddToEvenArr.length; ++i) {
//     if (typeof oddToEvenArr[i] === "number") {
//       if (oddToEvenArr[i] % 2 === 0) {
//         filteredArr.push(oddToEvenArr[i]);
//       } else {
//         filteredArr.unshift(oddToEvenArr[i]);
//       }
//     }
//   }
//   return filteredArr;
// }

// alert(oddToEven(arr));
