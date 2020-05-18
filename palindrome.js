/* Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that’s spelled the same way both forward and backward
 * You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
 * And turn everything lower case in order to check for palindromes.
*/

// solution using a for loop
isPalindrome = (str) => {
  let s = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  // length/2 because we only need to check until half of the string
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[(s.length - 1) - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome("Hannah2020"));

// Now using split, reverse and join
isPalindrome2 = (str) => {
  // regex [\W_] is the same as [^0-9a-z]/g
  var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log(isPalindrome2("A man, a plan, a canal. Panama"));
