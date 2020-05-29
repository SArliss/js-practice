/* 
 * Write three functions:
 * The first, reverseArray, takes an array as an argument and produces a new array that has the same elements in the inverse order.
 * The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. 
 * The third, reverseArrayInPlaceN by a given number of steps
 * Neither may use the standard reverse method.
*/

// O(N)
reverseArray = (arr) => {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

// O(logn) reverseArrayInPlace
reverseArray = (arr) => {
  let len = Math.floor((arr.length) / 2);
  let el = [];
  for (let i = 0; i < len; i++) {
    el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  console.log(len);
  return arr;
}

// reverseArrayInPlace by a given number of steps
reverseArrayInPlaceN = (arr, n) => {
  let el = [];
  for (let i = 0; i < n; i++) {
    el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
}

//console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//console.log(reverseArray(["if", "never", "sometimes", "always", "maybe", "no", "yes"]));
//console.log(reverseArray([5, 8, 2, 9, 5, 6, 3, 1]));


console.log(reverseArrayInPlaceN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
