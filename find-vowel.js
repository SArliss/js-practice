/* Find the Vowels 
 * Write a function that takes a string as argument and 
 * returns the number of vowels contained in that string.
*/

const findVowels = (str) => {
  let newStr = str.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      counter++
    }
  }
  return counter;
}

console.log(findVowels('Sinara'));
console.log(findVowels('Anna'));
console.log(findVowels('Benjamin'));
console.log(findVowels(''));