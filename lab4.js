// // Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

// let intNum = +prompt("Enter any integer number", 21);

// if (intNum % 3 == 0 && intNum % 5 != 0 && intNum % 7 != 0) {
//   alert(`${intNum} is a multiple of 3 `);
// } else if (intNum % 3 == 0 && intNum % 5 == 0 && intNum % 7 != 0) {
//   alert(`${intNum} is a multiple of 3 and 5`);
// } else if (intNum % 3 != 0 && intNum % 5 == 0 && intNum % 7 != 0) {
//   alert(`${intNum} is a multiple of 5`);
// } else if (intNum % 3 != 0 && intNum % 5 == 0 && intNum % 7 == 0) {
//   alert(`${intNum} is a multiple of 5 and 7`);
// } else if (intNum % 3 == 0 && intNum % 5 != 0 && intNum % 7 == 0) {
//   alert(`${intNum} is a multiple of 3 and 7`);
// } else if (intNum % 3 != 0 && intNum % 5 != 0 && intNum % 7 == 0) {
//   alert(" The number is a multiple of 7");
// } else if (intNum % 3 == 0 && intNum % 5 == 0 && intNum % 7 == 0) {
//   alert(" The number is a multiple of 3, 5 and 7");
// } else if (intNum % 3 != 0 && intNum % 5 != 0 && intNum % 7 != 0) {
//   alert(` The number you entered is  ${intNum}`);
// }

////OR

//let intNum = +prompt('enter your number');

// if (intNum % 3 == 0) {
//     if (intNum % 5 == 0) {
//         if (intNum % 7 == 0) {
//             alert(`${intNum} is a multiple of 3,5 and 7`);
//         } else {
//             alert(`${intNum} is a multiple of 3 and 5`);
//         }
//     } else {
//         alert(`${intNum} is a multiple of 3`);
//     }
// } else if (intNum % 5 == 0) {
//     if (intNum % 7 == 0) {
//         alert(intNum + "is a multiple of 5 and 7");

//     }
//     alert(intNum + "is a multiple of 5");
// } else if (intNum % 7 == 0) {
//     if (intNum % 3 == 0) {
//         alert(intNum + "is a multiple of 3and 7");
//     } else {
//         alert(intNum + "is a multiple of 7");
//     }
// } else {
//     alert(`${intNum} is not multiple of 3,5 and 7`);
// }
