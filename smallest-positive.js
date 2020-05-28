/* 
 * codibility-demo-test
 * Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * Given A = [1, 2, 3], the function should return 4.
 * Given A = [−1, −3], the function should return 1.
 */

function smallestPositive(A) {
  // first I filter to get only positive numbers then sort
  A = A.filter(n => n >= 1).sort((a, b) => a - b);
  let result = 1;

  // if there's no positive numbers the result stays 1
  // otherwise I find the smaller missed number by comparing prev and next values with a for loop
  if (A.length >= 1) {
    for (let i = 0; i < A.length; i++) {
      // if prev and next value are dif 
      if (A[i] + 1 !== A[i + 1] && A[i] !== A[i + 1]) {
        return A[i] + 1;
      }
    }
  }

  return result;
}

console.log(smallestPositive([1, 3, 6, 4, 1, 2]));
console.log(smallestPositive([1, 2, 3]));
console.log(smallestPositive([-1, -3]));

