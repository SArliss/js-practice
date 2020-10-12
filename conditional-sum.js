// with higher order functions 
// conditionalSum = (values, condition) => {
//  let results = 0;
//   if (condition === "even") {
//     results = values.filter(value => value % 2 === 0).reduce((a, b) => a + b, 0);
//   } else {
//     results = values.filter(value => value % 2 !== 0).reduce((a, b) => a + b, 0);
//   }
//   return results;
// }

// without higher order functions 
conditionalSum = (values, condition) => {
  let results = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even") {
      values[i] % 2 === 0 && (results += values[i]);
    } else {
      values[i] % 2 !== 0 && (results += values[i]);
    }
  }
  return results;
}

console.log(conditionalSum([0, 1, 2, 3, 4, 5], "even")); // => 6
console.log(conditionalSum([0, 1, 2, 3, 4, 5], "odd")); // => 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // => 144
console.log(conditionalSum([], "even")); // => 0