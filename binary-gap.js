/* Find longest sequence of zeros in binary representation of an integer. 
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
 * The number 529 has binary representation 1000010001 and contains two binary gaps: 
 * one of length 4 and one of length 3.
*/

binaryGap = (n) => {
  let s = n.toString(2);
  console.log(s);
  let count = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      count++
    } else {
      if (count > result) {
        result = count;
        count = 0;
      }
    }
  }
  return result;
}


let n = 529;
console.log(binaryGap(n));