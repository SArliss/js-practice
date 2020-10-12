// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

const arrayDiff = (a, b) => {

  if (a.length === 0 || b.length === 0) {
    return a;
  }

  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i]) === false) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(arrayDiff([], [1])); // ==> []
console.log(arrayDiff([1, 2], [1])); // ==> [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // ==> [1,3]
console.log(arrayDiff([1, 2, 3, 4, 5], [4, 5])); // ==> [1,2,3,4,5]