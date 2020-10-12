// find shortest word in a array of string

const shortest = (arr) => {
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < result[0].length) {
      result[0] = arr[i];
    } else if (arr[i].length === result[0].length) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(shortest(["sinara", "jace", "anna", "benjamin", "chico"]));

