/* Move the first letter of each word to the end of it, 
 * then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str) {

  let splitStr = str.split(' ');
  let newStr = [];

  for (let i = 0; i < splitStr.length; i++) {

    if ((/[^a-zA-Z1-9]/g).test(splitStr[i]) === false) {
      let selected = splitStr[i].split('');
      selected.push(selected[0], "ay");
      selected.shift();
      selected = selected.join('');
      newStr.push(selected);
    } else {
      newStr.push(splitStr[i]);
    }
  }
  return newStr.join(' ');
}


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !








