/* Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that’s spelled the same way both forward and backward.
 * Turn everything lower case in order to check for palindromes.
 * Advanced: Remove all non-alphanumeric characters (punctuation, spaces and symbols).
*/

const palindrome = (str) => {
  let cleanStr = str.toLowerCase().replace(/[^0-9a-z]/g, '');

  // return cleanStr === cleanStr.split('').reverse().join(''); // ==> shorter syntax but higher time complexity 

  let half = Math.floor(cleanStr.length / 2);

  for (let i = 0; i <= half; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("hannah")); // ==> true 
console.log(palindrome("table")); // ==> false 
console.log(palindrome("racecar")); // ==> true 
console.log(palindrome("A man, a plan, a canal. Panama")); // ==> true