/* 
* Complete the solution so that it splits the string into pairs of two characters. 
* If the string contains an odd number of characters then it should replace the missing 
* second character of the final pair with an underscore ('_'). 
*/

const splitStr = (str) => {
  let result = [];

  if (str.length % 2 !== 0) {
    str += '_';
  };

  for (let i = 0; i < str.length - 1; i = i + 2) {
    result.push(str[i] + str[i + 1]);
  }
  return result;
}

console.log(splitStr('abc')); // ==> 'ab', 'c_'
console.log(splitStr('abcdef')); // ==> 'ab', 'cd', 'ef'
console.log(splitStr('')); // ==> []