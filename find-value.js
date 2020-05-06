/* You will be given an array a and a value x. 
Check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not. */

// Manually Walking the array
check = (a, x) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false; 
};

// Using higher-order includes
check2 = (a, x) => a.includes(x);

console.log(check([1, 2, 3, 4, 2], 2));
console.log(check2([1, 2, 3, 4, 2], 2));
