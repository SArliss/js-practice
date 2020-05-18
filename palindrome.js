/* Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that’s spelled the same way both forward and backward
 * You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
 * And turn everything lower case in order to check for palindromes.
*/

isPalindrome = (string) => {
  let s = string.toLowerCase().replace(/[^0-9a-z]/g, '');
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[(s.length - 1) - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome("han % #*n_a-H"));