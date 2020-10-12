/* Anagram 
 * A word is an anagram of another word if both use the same letters 
 * in the same quantity, but arranged differently.
*/

const anagram = (stringA, stringB) => {
  if (stringA.length !== stringB.length || stringA.length === 0) {
    return false;
  }

  let strA = stringA.toLowerCase();
  let strB = stringB.toLowerCase();
  let counterA = {};
  let counterB = {};

  for (let i = 0; i < strA.length; i++) {
    counterA[strA[i]] ? counterA[strA[i]] += 1 : counterA[strA[i]] = 1;
    counterB[strB[i]] ? counterB[strB[i]] += 1 : counterB[strB[i]] = 1;
  }

  if (Object.keys(counterA).length !== Object.keys(counterA).length) {
    return false;
  }

  for (let char in counterA) {
    if (counterA[char] !== counterB[char]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("Finder", "Friend")); // ==> true
console.log(anagram("listen", "silent")); // ==> true
console.log(anagram("ball", "bye")); // ==> false
console.log(anagram("fried", "fired")); // ==> true
console.log(anagram("", "")); // ==> false
