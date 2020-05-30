rotateArray = (A, K) => {
  let size = A.length;
  let result = [];

  if (K < 0 || K > 100 || size === 0) {
    return result;
  }

  if (size === 1) {
    return A;
  }

  for (let i = 0; i < size; i++) {
    result[(i + K) % size] = A[i];
  }


  return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 6));
