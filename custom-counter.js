// Write a function to count the occurrences of each element in an array, then return the element followed by its number 
// For example, if {12, 9, 12, 9, 10, 9, 10, 11} is the input array, then the output is {12:2, 9:3, 10:2, 11:1}.

customCounter = (arr) => {
  let obj = {};
  // checks on every loop if the key already exists. If yes increment the current value of the by one. If not insert 1 for this key.
  for (let i = 0; i < arr.length; i++) { // loop over array
    if (obj[arr[i]]) { // if the element already exists in your object add 1
      obj[arr[i]] += 1;
    } else {            // else add number with value of 1
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

console.log(customCounter([12, 9, 12, 9, 10, 9, 10, 11]));
console.log(customCounter([2, "tea", 2, 1, 2, "tea", "bag", "bag", "bag", 1]));
console.log(customCounter(["banana", "banana", "apple", "banana", "apple", "grapes", "banana"]));