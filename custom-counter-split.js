// Write a function to count the occurrences of each element in an array, then return the element followed by its occurrences number 
// For example, if ["yellow, yellow, blue", "pink, yellow, blue"] is the input array, then the output must be [yellow:3, blue:2, pink:1]

counter = (arr) => {
  let splitA = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    splitA = splitA.concat(arr[i].split(", "));
  }

  for (let i = 0; i < splitA.length; i++) {
    if (obj[splitA[i]]) {
      obj[splitA[i]] += 1;
    } else {
      obj[splitA[i]] = 1;
    }
  }
  return obj;
}

console.log(counter(["yellow, yellow, blue", "pink, yellow, blue"]));
console.log(counter(["dog, cat, rabbit", "rabbit, dog, bird", "bird, bear, horse"]));
