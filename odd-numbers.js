/* Find value that occurs in odd number of elements. */

// N(n^2) considering we don't know how many odd number of elements we will have in A.
findOddOcurrences = (A) => {
  let obj = {};

  if (A.length === 1) {
    return A;
  }

  for (let i = 0; i < A.length; i++) {
    if (obj[A[i]]) {
      obj[A[i]]++;
    } else {
      obj[A[i]] = 1;
    }
  }

  let oddNumbers = [];
  for (let prop in obj) {
    if (obj[prop] % 2 !== 0) {
      oddNumbers.push(parseInt(prop));
    }
  }
  return oddNumbers;
}

// O(n*log(n)) or O(n) considering we know that all but one of the values in A occur an even number of times.
oddOcurrences = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  let sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      i++;
    } else {
      return sortedArray[i];
    }
  }
}

//console.log(findOddOcurrences([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
//console.log(oddOcurrences([1, 3, 3, 7, 7, 8, 8]));
console.log(oddOcurrences([1]));

